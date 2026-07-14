import { SpokePage } from '../spoke-pages';

// batch124 assault(4)+dui(3)+jeonse-fraud(3) — 10개 (2026-07-14)
//
// 고유 존재 이유:
// 1. assault-stun-gun-gas-spray-threat-special-intimidation-firearms-act-accused-defense — 시비 중 전자충격기·가스분사기를 꺼내 위협했다는 이유로 특수협박·총포단속법위반으로 입건된 사람이 총포 등 '사용'의 의미와 구성요건을 다투는 방어 페이지
// 2. assault-special-injury-retrial-suspended-sentence-start-date-accused-defense — 특수상해 등으로 유죄를 받은 뒤 재심에서 다시 집행유예를 선고받은 사람이 집행유예 기간의 기산일과 불이익변경 여부를 다투는 방어 페이지
// 3. assault-injury-case-others-false-confession-criminal-shelter-instigation-accused-defense — 폭행·상해 사건에서 타인에게 대신 진술·자백을 부탁했다는 이유로 범인도피교사로 입건된 사람이 방어권 남용 여부를 다투는 방어 페이지
// 4. assault-injury-concurrent-crimes-partial-retrial-ground-no-disadvantageous-change-accused-defense — 여러 죄 중 일부 상해에만 재심사유가 있는데 판결 전부가 재심개시된 사람이 재심 양형 범위와 불이익변경금지를 다투는 방어 페이지
// 5. dui-unlawful-forced-arrest-breath-blood-test-evidence-admissibility-accused-defense — 위법한 강제연행 상태에서 음주측정·혈액채취가 이뤄진 사람이 그 측정 결과의 증거능력과 2차 증거 배제를 다투는 방어 페이지
// 6. dui-protective-custody-measurement-request-refusal-accused-defense — 경직법 제4조 보호조치 상태에서 음주측정 요구를 받고 거부해 측정불응으로 입건된 사람이 요구의 적법성과 측정불응 성립을 다투는 방어 페이지
// 7. dui-trial-record-inspection-copy-right-infringement-evidence-accused-defense — 음주·위험운전 사건에서 공판조서 열람·등사청구가 받아들여지지 않은 사람이 공판조서의 증거능력과 방어권 침해를 다투는 방어 페이지
// 8. jeonse-fraud-foreigner-overseas-korean-registration-opposing-power-deposit-track — 외국인·재외국민 임차인이 외국인등록·국내거소신고로 대항력을 갖췄는지, 보증금 보호를 받을 수 있는지 정리하는 피해자 페이지
// 9. jeonse-fraud-landlord-restoration-cost-normal-wear-tear-proof-deposit-deduction-track — 임대인이 원상복구비·훼손을 이유로 보증금을 공제하려 할 때 통상손상 초과 훼손의 증명책임과 공제 범위를 정리하는 피해자 페이지 (하급심)
// 10. jeonse-fraud-rent-increase-claim-court-decision-effective-date-deposit-track — 임대인이 물가상승 등을 이유로 차임 증액을 청구하며 협의가 불성립할 때 증액 이행기와 보증금 관계를 정리하는 피해자 페이지

export const spokesBatch124AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-stun-gun-gas-spray-threat-special-intimidation-firearms-act-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-stun-gun-gas-spray-threat-special-intimidation-firearms-act-accused-defense',
    keyword: '전자충격기 가스분사기 위협 특수협박 총포단속법 다툼',
    questionKeyword:
      '시비가 붙은 상대에게 겁을 주려고 소지하고 있던 전자충격기나 가스분사기를 꺼내 보였는데, 실제로 격발하거나 발사하지는 않았습니다. 그런데 경찰은 제가 그 기기를 위험한 물건으로 휴대해 협박했다며 특수협박과 총포·도검·화약류 단속법 위반까지 함께 문제 삼습니다. 저는 격발도 하지 않았고 겁만 주려던 것인데, 꺼내 보인 것만으로 그 기기를 법에서 말하는 방식으로 사용한 것이 되는지, 특수협박까지 성립하는지부터 헷갈립니다. 전자충격기·가스분사기 위협으로 특수협박과 총포단속법 위반을 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '전자충격기 가스분사기 위협 특수협박 총포단속법 다툼 사용의 의미·구성요건 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '전자충격기 위협 특수협박 총포법 5단계 | 로앤가이드',
      description:
        '격발도 안 했는데 전자충격기를 꺼냈다고 특수협박·총포법까지 걸려 막막하다면 사용의 의미·구성요건 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"말다툼이나 시비가 격해진 상황에서 상대에게 겁을 주려고 평소 소지하던 전자충격기나 가스분사기를 꺼내 보이거나 겨눴을 뿐 실제로 격발·발사하지는 않았는데, 수사기관이 이를 위험한 물건을 휴대한 협박으로 보아 특수협박과 총포·도검·화약류 등 단속법 위반까지 함께 적용해 당황한 사람입니다. 저는 격발이나 발사에 이르지 않았고 겁만 주려던 것인데, 단지 꺼내 보인 행위만으로 그 기기를 법에서 금지하는 방식으로 \'사용\'한 것이 되는지, 특수협박의 위험한 물건 휴대에 해당하는지부터 혼란스럽습니다. 판례·실무는 총포·도검·분사기·전자충격기·석궁 등의 소지허가를 받은 사람에 대해 허가받은 용도나 정당한 사유 외의 사용을 금지하는 취지가 인명살상 무기로 쓰일 수 있는 고도의 위험성을 지닌 기기의 사용을 엄격히 규제하려는 데 있고, 여기서 말하는 \'사용\'이란 본래의 목적·기능에 따른 사용으로서 공공의 안전에 위험과 재해를 일으킬 수 있는 행위를 의미하므로, 반드시 탄알·가스 등의 격발에 의한 발사에까지 이르지 않았더라도 그와 밀접한 관련이 있는 행위로서 인명이나 신체에 위해가 발생할 위험이 초래된다면 사용에 해당한다고 보는 흐름이 있다는 설명을 들었습니다. 다만 그 행위가 위해 발생 위험을 초래하는 사용에까지 이르렀는지, 특수협박의 위험한 물건 휴대·협박의 고의가 인정되는지는 다툼의 여지가 있다는 얘기도 함께 들어, 제 사건에서 꺼내 보인 정도의 행위가 어떻게 평가되는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 기기를 꺼낸 경위와 실제 행위의 정도부터 정확히 구분해야 한다고 보는데, 사실과 다르게 단순히 겁을 주려던 행위 전체가 무기의 사용으로 몰리는 것은 아닌지 걱정입니다. 현장 CCTV·기기 상태·목격자 진술이 있는데도, 무엇부터 정리해 사용의 의미와 구성요건을 밝혀야 하는지 막막한 상태입니다." 총포·도검·화약류 등 단속법 제17조 제2항은 총포 등의 사용 제한을, 형법 제284조는 특수협박을 정하는 영역입니다. 판례·실무는 격발에 이르지 않았더라도 위해 발생 위험을 초래하는 행위라면 \'사용\'에 해당할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 전자충격기·가스분사기 위협 + 특수협박 + 총포단속법 결합은 \'사용의 의미·위해 위험·구성요건\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 행위 경위 ② 사용 해당성 ③ 특수협박 성립 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 사용 ③ 협박 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 겁을 주려던 행위가 무기 사용으로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전자충격기 가스분사기 위협 특수협박 총포단속법 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위 경위, 사용 해당성, 특수협박 성립, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 경위</strong> — 기기를 꺼낸 경위와 겨눈 대상·거리, 격발·발사 여부를 정리.</li>\n<li><strong>② 사용 해당성</strong> — 격발에 이르지 않았더라도 위해 발생 위험을 초래하는 사용에 해당하는지 검토.</li>\n<li><strong>③ 특수협박 성립</strong> — 위험한 물건 휴대와 협박의 고의·해악 고지가 인정되는지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 특수협박·총포단속법 적용법조와 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — CCTV·기기 상태·목격자 진술 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 총포 등의 \'사용\'은 격발·발사라는 형식만이 아니라 위해 발생 위험을 초래하는 행위인지에 따라 갈리는 영역이라, 기기를 꺼낸 경위와 실제 행위의 정도를 CCTV·목격자 진술로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 행위 경위 확인 (즉시~수일)</strong> — 기기를 꺼낸 경위와 격발·발사 여부를 CCTV·목격자로 정리.</li>\n<li><strong>2단계 — 사용 해당성 검토 (입건 직후)</strong> — 위해 발생 위험을 초래하는 사용에 해당하는지, 단순 소지·제시와 구분해 정리.</li>\n<li><strong>3단계 — 특수협박 검토 (수사 진행)</strong> — 위험한 물건 휴대와 협박의 고의·해악 고지 여부를 자료로 정리.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 사용의 의미·구성요건 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 합의·정상 검토 (병행)</strong> — 피해자와의 합의, 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전자충격기 가스분사기 위협 특수협박 총포단속법 다툼 사용의 의미·구성요건 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위·사용·협박 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스 영상</strong></li>\n<li><strong>기기 상태·격발 여부 관련 자료</strong></li>\n<li><strong>기기 소지 경위·허가 관련 자료</strong></li>\n<li><strong>목격자 진술</strong></li>\n<li><strong>행위 경위 정리 메모</strong></li>\n<li><strong>공소장·적용법조 (특수협박·총포단속법)</strong></li>\n<li><strong>합의·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 총포단속법 다툼은 격발 여부만이 아니라 위해 발생 위험을 초래하는 사용에 이르렀는지가 관건이므로, 기기를 꺼내 겨눈 거리·시간과 실제 작동 여부를 CCTV로 정리해두는 것이 핵심입니다. 특수협박은 협박의 고의와 해악 고지가 있었는지를 목격자 진술로 뒷받침해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용의 의미</strong> — 격발에 이르지 않은 행위가 위해 발생 위험을 초래하는 사용인지.</li>\n<li><strong>위해 위험 초래</strong> — 그 행위로 인명·신체에 위해가 발생할 위험이 실제로 초래됐는지.</li>\n<li><strong>위험한 물건 휴대</strong> — 특수협박의 위험한 물건 휴대에 해당하는지.</li>\n<li><strong>협박의 고의</strong> — 해악을 고지해 상대를 위협하려는 고의가 인정되는지.</li>\n<li><strong>단순 소지·제시 구분</strong> — 겁을 주려 꺼낸 정도와 사용의 경계가 어디인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 총포·전자충격기 등의 \'사용\'의 의미',
        summary:
          '대법원 2015도10254(대법원, 2016.05.24 선고) 영역에서 법원은 구 총포·도검·화약류 등 단속법 제17조 제2항이 총포·도검·분사기·전자충격기·석궁의 소지허가를 받은 사람에 대하여 허가받은 용도나 그 밖의 정당한 사유가 있는 경우 외의 사용을 금지하는 취지는, 인명살상의 무기로 사용될 수 있는 고도의 위험성을 지닌 총포 등의 사용을 엄격히 규제해 위험과 재해를 미리 방지하고 공공의 안전을 유지하려는 데 있다고 보았습니다. 나아가 위 규정에서 정한 총포 등의 \'사용\'이란 본래의 목적이나 기능에 따른 사용으로서 공공의 안전에 위험과 재해를 일으킬 수 있는 행위를 말하므로, 반드시 탄알·가스 등의 격발에 의한 발사에까지 이르지 아니하였더라도 그와 밀접한 관련이 있는 행위로서 그로 인하여 인명이나 신체에 위해가 발생할 위험이 초래된다면 이는 총포 등의 사용에 해당한다고 판시했습니다. 이는 격발이라는 형식만이 아니라 위해 발생 위험 초래 여부에 따라 \'사용\' 해당성이 갈림을 보여 줍니다. 전자충격기·가스분사기 위협 다툼 사안에서도 실제 격발 여부와 위해 발생 위험을 정리해 구성요건 해당성을 검토해볼 수 있습니다.',
        takeaway: '전자충격기·가스분사기 위협 + 특수협박 + 총포단속법 결합 시 사용의 의미·위해 위험·구성요건 검토 영역 — 현장 CCTV·기기 상태·목격자 진술 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '격발도 안 했는데 총포법 위반이 되나요?',
        answer:
          '<strong>격발에 이르지 않아도 위해 발생 위험을 초래하는 행위면 사용으로 볼 여지가 있는 영역입니다.</strong> 행위 정도를 정리하세요.',
      },
      {
        question: '꺼내 보인 것만으로 특수협박이 되나요?',
        answer:
          '<strong>위험한 물건 휴대와 협박의 고의가 인정되는지가 기준인 영역입니다.</strong> 해악 고지 여부를 정리하세요.',
      },
      {
        question: '겁만 주려던 거라는 점은 어떻게 다투나요?',
        answer:
          '<strong>사용에 이르렀는지와 협박 고의가 쟁점인 영역입니다.</strong> 기기를 꺼낸 경위를 CCTV로 확인하세요.',
      },
      {
        question: '피해자와 합의하면 어떻게 반영되나요?',
        answer:
          '<strong>합의는 양형에 반영될 수 있는 영역입니다.</strong> 합의 경위와 자료를 정리해두세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>행위 경위와 격발 여부 확인이 출발점인 영역입니다.</strong> CCTV·기기 상태 자료부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '특수폭행 위험한 물건 가중 분기 트랙', href: '/guide/assault/assault-armed-special-aggravated-weapon-bring-distinction' },
      { label: '특수상해 임의적 감경 트랙', href: '/guide/assault/assault-special-injury-discretionary-mitigation-upper-lower-limit-accused-defense' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 2. assault-special-injury-retrial-suspended-sentence-start-date-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-special-injury-retrial-suspended-sentence-start-date-accused-defense',
    keyword: '특수상해 재심 집행유예 기간 기산일 다툼',
    questionKeyword:
      '과거 특수상해 등으로 집행유예를 선고받았는데, 그 판결에 재심 사유가 있어 재심이 열렸고 재심에서 다시 집행유예를 선고받게 됐습니다. 그런데 저는 예전 집행유예 기간 중에 다른 사건으로 실형이 확정돼 이미 유예됐던 형이 집행된 적도 있습니다. 이런 경우 재심에서 새로 선고되는 집행유예의 기간이 언제부터 시작되는지, 원래 판결보다 불리해지는 것은 아닌지부터 헷갈립니다. 특수상해 재심에서 집행유예 기간의 기산일과 불이익변경금지를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '특수상해 재심 집행유예 기간 기산일 다툼 기산일·형의 경중 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '특수상해 재심 집행유예 기산일 5단계 | 로앤가이드',
      description:
        '재심에서 다시 집행유예를 받는데 기간이 언제부터인지 불리해질까 막막하다면 기산일·불이익변경 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"과거 특수상해 등으로 집행유예를 선고받아 확정됐는데, 그 재심대상판결에 재심 사유가 있어 재심이 개시됐고 재심절차에서 다시 형을 정하며 집행유예를 선고받게 돼 혼란스러운 사람입니다. 저는 원래 집행유예 기간 중에 다른 사건으로 징역형이 확정되는 바람에 그 집행유예가 실효돼 유예됐던 형이 이미 집행된 적도 있는데, 이런 상황에서 재심판결로 새로 선고되는 집행유예의 기간이 원래 판결 확정일부터인지 아니면 재심판결 확정일부터인지, 그로 인해 제 지위가 원래보다 불리해지는 것은 아닌지부터 헷갈립니다. 판례·실무는 형법이 집행유예 기간의 시기에 관해 명문 규정을 두고 있지 않지만 재판은 확정한 후에 집행한다는 형사소송법의 취지와 집행유예 제도의 본질에 비추어 집행유예 기간의 시기는 집행유예를 선고한 판결 확정일로 보아야 하고, 재심판결에서 다시 집행유예를 선고하는 경우 그 기간의 시기 역시 재심대상판결 확정일이 아니라 재심판결 확정일로 보아야 하며, 그로 인해 원판결 집행유예의 실효 효과까지 없어지더라도 재심판결의 형이 원판결의 형보다 중하지 않은 이상 불이익변경금지원칙이나 이익재심원칙에 반하지 않는다고 보는 흐름이 있다는 설명을 들었습니다. 다만 재심판결의 형이 원판결의 형보다 중한지, 어떤 부분이 불이익에 해당하는지는 사건마다 다툼의 여지가 있다는 얘기도 함께 들어, 제 사건에서 집행유예 기산일과 형의 경중이 어떻게 정리되는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 원판결과 재심판결의 형, 집행 경과부터 정확히 구분해야 한다고 보는데, 사실과 다르게 재심이 오히려 제게 불리하게 작동하는 것은 아닌지 걱정입니다. 재심대상판결문·재심판결문·전과 자료가 있는데도, 무엇부터 정리해 기산일과 불이익 여부를 밝혀야 하는지 막막한 상태입니다." 형법 제62조는 집행유예를, 형사소송법 제439조는 재심의 불이익변경금지를 정하는 영역입니다. 판례·실무는 재심에서 다시 선고하는 집행유예의 기산일을 재심판결 확정일로 보되 형이 원판결보다 중하지 않으면 불이익변경금지에 반하지 않는다고 보는 본 사례 흐름이 있는 영역입니다. 특수상해 재심 + 집행유예 기산일 + 불이익변경금지 결합은 \'기산일·형의 경중·이익재심\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 원판결·재심판결 형 ② 집행 경과 ③ 기산일·경중 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 형 ② 경과 ③ 기산일 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 재심이 불리하게 작동하는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 특수상해 재심 집행유예 기간 기산일 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 원판결·재심판결 형, 집행 경과, 기산일·경중, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 원판결·재심판결 형</strong> — 재심대상판결과 재심판결의 형을 비교해 정리.</li>\n<li><strong>② 집행 경과</strong> — 원판결 집행유예가 실효돼 형이 집행됐는지 등 경과를 정리.</li>\n<li><strong>③ 기산일·경중</strong> — 재심 집행유예의 기산일과 형의 경중, 불이익 여부를 검토.</li>\n<li><strong>④ 형사 절차</strong> — 재심 개시·심판 절차와 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 재심대상판결문·재심판결문·전과 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재심에서 다시 집행유예를 선고할 때 그 기간의 시기는 재심판결 확정일로 보되, 재심판결의 형이 원판결의 형보다 중하지 않으면 불이익변경금지에 반하지 않는다고 보는 영역이라, 원판결과 재심판결의 형·집행 경과를 판결문으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 형 비교 확인 (즉시~수일)</strong> — 재심대상판결과 재심판결의 형을 비교해 정리.</li>\n<li><strong>2단계 — 집행 경과 정리 (재심 진행)</strong> — 원판결 집행유예의 실효·형 집행 여부 등 경과를 정리.</li>\n<li><strong>3단계 — 기산일·경중 검토 (선고 전)</strong> — 재심 집행유예의 기산일과 형의 경중, 불이익 여부를 검토.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 기산일·불이익변경 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 정상·자료 검토 (병행)</strong> — 정상 자료와 향후 절차 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">특수상해 재심 집행유예 기간 기산일 다툼 기산일·형의 경중 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 형·집행 경과·기산일 갈래입니다.</strong></p>\n<ul>\n<li><strong>재심대상판결문 (원판결)</strong></li>\n<li><strong>재심개시결정·재심판결문</strong></li>\n<li><strong>집행유예 실효·형 집행 관련 자료</strong></li>\n<li><strong>전과·판결 확정일 자료</strong></li>\n<li><strong>형 비교 정리 메모</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>반성·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재심 집행유예 다툼은 원판결과 재심판결의 형 경중이 관건이므로, 두 판결의 형과 확정일을 나란히 정리해두는 것이 핵심입니다. 원판결 집행유예가 실효돼 형이 집행된 경과가 있다면 그 자료를 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>집행유예 기산일</strong> — 재심 집행유예의 기간이 재심판결 확정일부터인지.</li>\n<li><strong>형의 경중</strong> — 재심판결의 형이 원판결의 형보다 중한지.</li>\n<li><strong>불이익변경금지</strong> — 재심에서 원판결보다 중한 형이 선고되지 않았는지.</li>\n<li><strong>이익재심 원칙</strong> — 재심이 피고인의 법적 안정성을 해치지 않는 범위인지.</li>\n<li><strong>실효 효과 소멸</strong> — 원판결 집행유예 실효 효과가 없어지는 것이 불이익인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재심에서 다시 선고한 집행유예의 기간 시기',
        summary:
          '대법원 2018도13382(대법원, 2019.02.28 선고) 영역에서 법원은 형법이 집행유예 기간의 시기에 관하여 명문 규정을 두고 있지는 않지만, 재판은 확정한 후에 집행한다는 형사소송법 제459조의 취지와 집행유예 제도의 본질 등에 비추어 집행유예를 할 때 그 집행유예 기간의 시기는 집행유예를 선고한 판결 확정일로 하여야 한다고 보았습니다. 나아가 재심대상판결에서 정한 집행유예 기간 중 다른 죄로 징역형이 확정돼 집행유예가 실효되고 유예된 형이 집행된 뒤, 재심판결에서 새로 형을 정하고 다시 집행유예를 선고하는 경우 그 집행유예 기간의 시기는 재심대상판결 확정일이 아니라 재심판결 확정일로 보아야 하며, 그로 인해 원판결 집행유예의 실효 효과까지 없어지더라도 재심판결의 형이 원판결의 형보다 중하지 않은 이상 불이익변경금지원칙이나 이익재심원칙에 반하지 않는다고 판시했습니다. 이는 재심에서 다시 집행유예를 선고할 때 기산일과 형의 경중을 판단하는 구조를 보여 줍니다. 특수상해 재심 다툼 사안에서도 원판결·재심판결의 형과 집행유예 기산일을 정리해 불이익 여부를 검토해볼 수 있습니다.',
        takeaway: '특수상해 재심 + 집행유예 기간 기산일 + 불이익변경금지 결합 시 기산일·형의 경중·이익재심 검토 영역 — 재심대상판결문·재심판결문·전과 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '재심 집행유예 기간은 언제부터 시작하나요?',
        answer:
          '<strong>집행유예 기간의 시기는 재심판결 확정일로 보는 영역입니다.</strong> 재심판결 확정일을 확인하세요.',
      },
      {
        question: '재심이 원래 판결보다 불리해질 수 있나요?',
        answer:
          '<strong>재심판결의 형이 원판결보다 중하지 않으면 불이익변경금지에 반하지 않는 영역입니다.</strong> 형을 비교해 정리하세요.',
      },
      {
        question: '이미 집행된 형이 있는데 어떻게 반영되나요?',
        answer:
          '<strong>집행 경과와 형의 경중을 함께 보아야 하는 영역입니다.</strong> 집행 관련 자료를 확보하세요.',
      },
      {
        question: '원래 집행유예 실효 효과가 없어지면 불이익인가요?',
        answer:
          '<strong>재심의 본질상 당연한 결과로 곧바로 불이익으로 보기 어려운 영역입니다.</strong> 형의 경중을 중심으로 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>원판결·재심판결의 형 확인이 출발점인 영역입니다.</strong> 두 판결문·전과 자료부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '특수상해 적용법조 오기 다툼 트랙', href: '/guide/assault/assault-special-injury-indictment-applicable-law-error-omission-court-discretion-accused-defense' },
      { label: '전과 실효 폭처법 누범 가중 다툼 트랙', href: '/guide/assault/assault-expired-prior-conviction-repeat-aggravation-count-accused-defense' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 3. assault-injury-case-others-false-confession-criminal-shelter-instigation-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-injury-case-others-false-confession-criminal-shelter-instigation-accused-defense',
    keyword: '폭행 상해 사건 허위자백 범인도피교사 방어권 남용 다툼',
    questionKeyword:
      '폭행·상해 사건에 연루된 뒤 겁이 나서 지인에게 대신 사정을 설명해 달라거나 일부 상황을 대신 말해 달라고 부탁했는데, 경찰은 제가 지인을 시켜 수사를 피하려 했다며 범인도피교사까지 문제 삼습니다. 저는 스스로 도망치거나 숨는 것은 처벌되지 않는다고 들었는데, 지인에게 도움을 요청한 것만으로 교사죄가 되는지, 어디까지가 방어권 행사이고 어디부터가 남용인지부터 헷갈립니다. 폭행·상해 사건에서 타인에게 진술을 부탁한 것이 범인도피교사에 해당하는지, 방어권 남용을 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '폭행 상해 사건 허위자백 범인도피교사 방어권 남용 다툼 요청 태양·관계 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '허위자백 부탁 범인도피교사 5단계 | 로앤가이드',
      description:
        '지인에게 대신 말해달라 부탁했다고 범인도피교사까지 몰려 막막하다면 방어권 남용 여부 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"폭행·상해 사건에 연루된 뒤 당황하고 겁이 나서 가까운 지인에게 대신 사정을 설명해 달라거나 일부 상황을 대신 진술해 달라고 부탁했는데, 수사기관이 이를 두고 제가 지인을 시켜 수사를 피하거나 책임을 넘기려 했다며 범인도피교사까지 함께 문제 삼아 당황한 사람입니다. 저는 범인이 스스로 도망치거나 숨는 행위는 처벌되지 않는다고 들었는데, 그 연장선에서 지인에게 도움을 요청한 것만으로 범인도피교사죄가 성립하는지, 어디까지가 정당한 방어권 행사이고 어디부터가 방어권의 남용인지부터 혼란스럽습니다. 판례·실무는 범인 스스로 도피하는 행위는 처벌되지 않으므로 범인이 도피를 위하여 타인에게 도움을 요청하는 행위 역시 도피행위의 범주에 속하는 한 처벌되지 않고, 그 요청에 응해 범인을 도운 타인의 행위가 범인도피죄에 해당하더라도 마찬가지이지만, 다만 범인이 타인으로 하여금 허위의 자백을 하게 하는 등으로 범인도피죄를 범하게 하는 경우처럼 그것이 방어권의 남용으로 볼 수 있을 때에는 범인도피교사죄에 해당할 수 있다고 보는 흐름이 있다는 설명을 들었습니다. 나아가 방어권 남용에 해당하는지는 지목된 행위의 태양과 내용, 범인과 행위자의 관계, 행위 당시의 구체적 상황, 형사사법 작용에 영향을 미칠 위험성의 정도 등을 종합하여 판단한다는 얘기도 함께 들어, 제 사건에서 제가 부탁한 내용이 단순한 도움 요청인지 허위자백을 시키는 남용인지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 제가 지인에게 부탁한 구체적 내용과 관계, 상황부터 정확히 구분해야 한다고 보는데, 사실과 다르게 단순한 도움 요청까지 도피교사로 몰리는 것은 아닌지 걱정입니다. 대화 기록·부탁 경위·관계 자료가 있는데도, 무엇부터 정리해 방어권 남용 여부를 밝혀야 하는지 막막한 상태입니다." 형법 제151조는 범인도피를, 형법 제31조는 교사를 정하는 영역입니다. 판례·실무는 타인에게 도움을 요청한 사정만으로 곧바로 도피교사가 되는 것은 아니고 방어권 남용에 이르러야 교사죄가 성립할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 폭행·상해 사건 + 타인 허위자백 부탁 + 범인도피교사 결합은 \'방어권 남용·요청 태양·관계\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 요청 내용 ② 방어권 남용 여부 ③ 관계·상황 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 요청 ② 남용 ③ 관계 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 단순한 도움 요청이 도피교사로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 폭행 상해 사건 허위자백 범인도피교사 방어권 남용 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 요청 내용, 방어권 남용 여부, 관계·상황, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 요청 내용</strong> — 지인에게 부탁한 구체적 내용이 단순 도움 요청인지 허위자백 요구인지 정리.</li>\n<li><strong>② 방어권 남용 여부</strong> — 그 요청이 방어권 행사의 범주인지 남용에 이르렀는지 검토.</li>\n<li><strong>③ 관계·상황</strong> — 범인과 행위자의 관계, 행위 당시의 구체적 상황을 정리.</li>\n<li><strong>④ 형사 절차</strong> — 범인도피교사 입건 경위와 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 대화 기록·부탁 경위·관계 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 타인에게 도움을 요청한 사정만으로 곧바로 범인도피교사가 되는 것은 아니고 허위자백을 시키는 등 방어권 남용에 이르러야 교사죄가 검토되는 영역이라, 부탁한 구체적 내용과 관계·상황을 대화 기록으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 요청 내용 확인 (즉시~수일)</strong> — 지인에게 부탁한 구체적 내용과 표현을 대화 기록으로 정리.</li>\n<li><strong>2단계 — 남용 여부 검토 (입건 직후)</strong> — 그 요청이 단순 도움 요청인지 허위자백을 시키는 남용인지 구분해 정리.</li>\n<li><strong>3단계 — 관계·상황 정리 (수사 진행)</strong> — 범인과 행위자의 관계, 행위 당시 상황을 자료로 정리.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 방어권 남용 여부 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 정상·자료 검토 (병행)</strong> — 정상 자료와 향후 절차 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">폭행 상해 사건 허위자백 범인도피교사 방어권 남용 다툼 요청 태양·관계 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 요청·남용·관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>지인과의 대화·메시지 기록</strong></li>\n<li><strong>부탁 경위·표현 정리 메모</strong></li>\n<li><strong>범인과 행위자의 관계 자료</strong></li>\n<li><strong>사건 당시 상황 정리 자료</strong></li>\n<li><strong>지인의 실제 진술 내역</strong></li>\n<li><strong>공소장·적용법조 (범인도피교사)</strong></li>\n<li><strong>반성·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어권 남용 다툼은 부탁한 내용이 허위자백을 시키는 정도였는지가 관건이므로, 대화·메시지에서 요청의 구체적 표현을 정리해두는 것이 핵심입니다. 지인이 실제로 어떤 진술을 했는지도 함께 확인해 요청과 결과의 관계를 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도피행위 범주</strong> — 타인에게 도움을 요청한 것이 도피행위의 범주에 속하는지.</li>\n<li><strong>방어권 남용</strong> — 허위자백을 하게 하는 등 방어권 남용에 이르렀는지.</li>\n<li><strong>요청의 태양</strong> — 지목된 행위의 태양과 내용이 어떠했는지.</li>\n<li><strong>관계·위험성</strong> — 범인과 행위자의 관계, 형사사법 작용에 영향을 미칠 위험성의 정도.</li>\n<li><strong>단순 요청 구분</strong> — 단순 도움 요청과 교사의 경계가 어디인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 타인에 대한 도움 요청과 범인도피교사의 방어권 남용',
        summary:
          '대법원 2013도12079(대법원, 2014.04.10 선고) 영역에서 법원은 범인 스스로 도피하는 행위는 처벌되지 아니하므로, 범인이 도피를 위하여 타인에게 도움을 요청하는 행위 역시 도피행위의 범주에 속하는 한 처벌되지 아니하며, 범인의 요청에 응하여 범인을 도운 타인의 행위가 범인도피죄에 해당한다고 하더라도 마찬가지라고 보았습니다. 다만 범인이 타인으로 하여금 허위의 자백을 하게 하는 등으로 범인도피죄를 범하게 하는 경우와 같이 그것이 방어권의 남용으로 볼 수 있을 때에는 범인도피교사죄에 해당할 수 있다고 하였습니다. 이 경우 방어권 남용 여부는 도피하게 하는 것이라고 지목된 행위의 태양과 내용, 범인과 행위자의 관계, 행위 당시의 구체적 상황, 형사사법 작용에 영향을 미칠 위험성의 정도 등을 종합하여 판단하여야 한다고 판시했습니다. 이는 타인에게 도움을 요청한 사정만으로 곧바로 교사죄가 되는 것은 아님을 보여 줍니다. 폭행·상해 사건에서 타인에게 대신 진술을 부탁한 다툼 사안에서도 요청의 태양과 관계, 상황을 정리해 방어권 남용 여부를 검토해볼 수 있습니다.',
        takeaway: '폭행·상해 사건 + 타인 허위자백 부탁 + 범인도피교사 결합 시 방어권 남용·요청 태양·관계 검토 영역 — 대화 기록·부탁 경위·관계 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '지인에게 도와달라 부탁만 해도 범인도피교사인가요?',
        answer:
          '<strong>도피행위 범주에 속하면 처벌되지 않고 방어권 남용에 이르러야 교사가 검토되는 영역입니다.</strong> 요청 내용을 정리하세요.',
      },
      {
        question: '허위자백을 시킨 게 아니라는 점은 어떻게 다투나요?',
        answer:
          '<strong>부탁한 내용이 허위자백 요구였는지가 쟁점인 영역입니다.</strong> 대화 기록으로 요청 표현을 확인하세요.',
      },
      {
        question: '스스로 숨는 건 처벌 안 된다면서 왜 문제가 되나요?',
        answer:
          '<strong>도움 요청이 방어권 남용에 이르렀는지에 따라 달라지는 영역입니다.</strong> 관계·상황을 정리하세요.',
      },
      {
        question: '지인이 실제로 거짓말을 했으면 어떻게 되나요?',
        answer:
          '<strong>요청과 결과의 관계를 함께 보아야 하는 영역입니다.</strong> 지인의 실제 진술 내역을 확인하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>부탁한 구체적 내용 확인이 출발점인 영역입니다.</strong> 대화·메시지 기록부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '수감 피고인 변호인 무고 방어 트랙', href: '/guide/assault/assault-detained-defendant-counsel-falsely-accused-defense' },
      { label: '폭행 무고 방어 트랙', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 4. assault-injury-concurrent-crimes-partial-retrial-ground-no-disadvantageous-change-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-injury-concurrent-crimes-partial-retrial-ground-no-disadvantageous-change-accused-defense',
    keyword: '상해 경합범 일부 재심사유 불이익변경금지 다툼',
    questionKeyword:
      '예전에 상해를 포함한 여러 죄로 한꺼번에 하나의 형을 선고받아 확정됐는데, 그중 일부 범죄에만 재심 사유가 있어 재심이 열렸습니다. 그런데 재심법원이 판결 전부를 다시 심리하면서 재심사유가 없는 나머지 죄까지 새로 양형을 한다고 합니다. 저는 재심사유가 없는 죄까지 다시 형을 정하면 이중처벌이 되는 것은 아닌지, 혹시 원래 형보다 무거워지는 것은 아닌지부터 헷갈립니다. 상해 등 경합범에서 일부만 재심사유가 있는데 판결 전부가 재심개시된 경우 양형과 불이익변경금지를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '상해 경합범 일부 재심사유 불이익변경금지 다툼 양형 범위·형의 경중 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '상해 경합범 일부 재심 5단계 | 로앤가이드',
      description:
        '일부 죄만 재심사유인데 나머지까지 다시 양형해 형이 무거워질까 막막하다면 양형 범위·불이익변경 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"과거 상해를 포함한 여러 범죄사실로 한꺼번에 유죄를 받아 하나의 형이 선고돼 확정됐는데, 그중 일부 범죄사실에만 재심 사유가 있는 것으로 인정돼 재심이 개시된 사람입니다. 그런데 형식적으로는 1개의 형이 선고된 불가분의 판결이어서 재심법원이 판결 전부에 대해 재심개시결정을 하고, 재심사유가 없는 나머지 죄까지 포함해 다시 심리·양형을 한다고 해 당황했습니다. 저는 재심사유가 없는 죄에 대해서까지 새로 형을 정하는 것이 헌법상 이중처벌금지 원칙에 어긋나는 것은 아닌지, 혹시 이 과정에서 원래 선고받았던 형보다 무거운 형이 나올 수도 있는 것인지부터 혼란스럽습니다. 판례·실무는 경합범 관계에 있는 수 개의 범죄사실을 유죄로 인정해 1개의 형을 선고한 불가분의 확정판결에서 그중 일부에만 재심청구의 이유가 있더라도 형식적으로 1개의 형이 선고된 판결이어서 전부에 대해 재심개시결정을 한 경우, 재심법원은 재심사유가 없는 범죄에 대하여도 새로이 양형을 하여야 하므로 이를 이중처벌금지 원칙 위반이라고 할 수 없고, 다만 불이익변경금지 원칙이 적용되어 원판결의 형보다 중한 형을 선고하지 못한다고 보는 흐름이 있다는 설명을 들었습니다. 나아가 형사소송법 제439조가 재심에는 원판결의 형보다 중한 형을 선고하지 못한다고 규정한 취지는 피고인의 법적 안정성을 해치지 않는 범위에서 재심이 이루어져야 한다는 데 있다는 얘기도 함께 들어, 제 사건에서 재심 양형의 범위와 원판결과의 형 비교가 어떻게 정리되는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 원판결의 형과 재심 양형의 범위부터 정확히 구분해야 한다고 보는데, 사실과 다르게 재심이 오히려 더 불리한 결과로 이어지는 것은 아닌지 걱정입니다. 원판결문·재심개시결정·전과 자료가 있는데도, 무엇부터 정리해 양형 범위와 불이익 여부를 밝혀야 하는지 막막한 상태입니다." 형사소송법 제439조는 재심의 불이익변경금지를, 헌법 제13조는 이중처벌금지를 정하는 영역입니다. 판례·실무는 일부 재심사유로 전부 재심이 개시돼 나머지 죄를 새로 양형해도 이중처벌금지에 반하지 않되 원판결보다 중한 형은 선고하지 못한다고 보는 본 사례 흐름이 있는 영역입니다. 상해 경합범 + 일부 재심사유 전부 재심 + 불이익변경금지 결합은 \'양형 범위·이중처벌금지·형의 경중\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 원판결 형 ② 재심 양형 범위 ③ 형의 경중 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 형 ② 범위 ③ 경중 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 재심이 더 불리한 결과로 이어지는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상해 경합범 일부 재심사유 불이익변경금지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 원판결 형, 재심 양형 범위, 형의 경중, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 원판결 형</strong> — 경합범 전부에 1개의 형이 선고된 원판결의 형을 정리.</li>\n<li><strong>② 재심 양형 범위</strong> — 재심사유가 없는 죄까지 새로 양형되는 범위를 정리.</li>\n<li><strong>③ 형의 경중</strong> — 재심판결의 형이 원판결보다 중해지지 않는지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 재심개시결정과 재심 심판 절차, 공판 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 원판결문·재심개시결정·전과 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일부 재심사유로 판결 전부가 재심개시돼 나머지 죄까지 새로 양형되더라도 이중처벌금지에 반하지 않되 불이익변경금지가 적용돼 원판결보다 중한 형은 선고할 수 없는 영역이라, 원판결의 형과 재심 양형 범위를 판결문으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 원판결 형 확인 (즉시~수일)</strong> — 경합범 전부에 선고된 원판결의 형을 정리.</li>\n<li><strong>2단계 — 재심 범위 정리 (재심 진행)</strong> — 재심사유가 있는 죄와 없는 죄, 재심 양형 범위를 구분해 정리.</li>\n<li><strong>3단계 — 형의 경중 검토 (선고 전)</strong> — 재심판결의 형이 원판결보다 중해지지 않는지 검토.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 양형 범위·불이익변경 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 정상·자료 검토 (병행)</strong> — 정상 자료와 향후 절차 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상해 경합범 일부 재심사유 불이익변경금지 다툼 양형 범위·형의 경중 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 원판결·재심 범위·경중 갈래입니다.</strong></p>\n<ul>\n<li><strong>원판결문 (경합범·선고형)</strong></li>\n<li><strong>재심개시결정</strong></li>\n<li><strong>재심사유 관련 자료</strong></li>\n<li><strong>재심사유 없는 죄 목록 정리</strong></li>\n<li><strong>형 비교 정리 메모</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>반성·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경합범 일부 재심 다툼은 재심 양형이 원판결의 형을 넘지 않는지가 관건이므로, 원판결의 선고형과 재심에서 다시 정하는 형을 나란히 정리해두는 것이 핵심입니다. 재심사유가 있는 죄와 없는 죄를 구분해 목록으로 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이중처벌금지</strong> — 재심사유 없는 죄까지 새로 양형하는 것이 이중처벌인지.</li>\n<li><strong>양형 범위</strong> — 재심법원이 전부에 대해 새로 양형하는 범위가 어디까지인지.</li>\n<li><strong>불이익변경금지</strong> — 재심판결의 형이 원판결의 형보다 중한지.</li>\n<li><strong>법적 안정성</strong> — 재심이 피고인의 법적 안정성을 해치지 않는 범위인지.</li>\n<li><strong>불가분 판결</strong> — 1개의 형이 선고된 불가분 판결의 재심 구조.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경합범 일부 재심사유와 불이익변경금지',
        summary:
          '대법원 2015도15782(대법원, 2018.02.28 선고) 영역에서 법원은 경합범 관계에 있는 수 개의 범죄사실을 유죄로 인정하여 1개의 형을 선고한 불가분의 확정판결에서 그중 일부 범죄사실에 대하여만 재심청구의 이유가 있는 것으로 인정되었더라도, 형식적으로는 1개의 형이 선고된 판결에 대한 것이어서 판결 전부에 대하여 재심개시의 결정을 한 경우, 재심법원은 재심사유가 없는 범죄에 대하여도 새로이 양형을 하여야 하므로 이를 헌법상 이중처벌금지 원칙을 위반한 것이라고 할 수 없고, 다만 불이익변경금지 원칙이 적용되어 원판결의 형보다 중한 형을 선고하지 못한다고 보았습니다. 또한 형사소송법 제439조가 재심에는 원판결의 형보다 중한 형을 선고하지 못한다고 규정한 취지는 단순히 무거운 형을 선고할 수 없다는 것뿐 아니라 피고인의 법적 안정성을 해치지 않는 범위에서 재심이 이루어져야 한다는 데 있다고 판시했습니다. 이는 일부 재심사유로 전부 재심이 개시돼도 전체 형은 원판결보다 무거워질 수 없음을 보여 줍니다. 상해 등 경합범 일부 재심 다툼 사안에서도 원판결의 형과 재심 양형 범위를 정리해 불이익 여부를 검토해볼 수 있습니다.',
        takeaway: '상해 경합범 + 일부 재심사유 전부 재심 + 불이익변경금지 결합 시 양형 범위·이중처벌금지·형의 경중 검토 영역 — 원판결문·재심개시결정·전과 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '재심사유 없는 죄까지 다시 양형하면 이중처벌 아닌가요?',
        answer:
          '<strong>불가분 판결의 전부 재심에서는 이중처벌금지 위반으로 보지 않는 영역입니다.</strong> 재심 범위를 정리하세요.',
      },
      {
        question: '재심에서 형이 더 무거워질 수도 있나요?',
        answer:
          '<strong>불이익변경금지가 적용돼 원판결보다 중한 형은 선고하지 못하는 영역입니다.</strong> 원판결 형을 확인하세요.',
      },
      {
        question: '일부만 재심사유인데 왜 전부 다시 심리하나요?',
        answer:
          '<strong>1개의 형이 선고된 불가분 판결이라 전부 재심개시되는 영역입니다.</strong> 재심개시결정을 확인하세요.',
      },
      {
        question: '원래 형과 어떻게 비교하나요?',
        answer:
          '<strong>재심판결의 형이 원판결의 형보다 중한지가 기준인 영역입니다.</strong> 두 형을 나란히 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>원판결의 형과 재심 범위 확인이 출발점인 영역입니다.</strong> 원판결문·재심개시결정부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '약식명령 정식재판 형종 상향 금지 트랙', href: '/guide/assault/assault-summary-order-formal-trial-sentence-type-increase-prohibition-accused-defense' },
      { label: '특수상해 증인 반대신문 불응 트랙', href: '/guide/assault/assault-special-injury-witness-cross-examination-denied-testimony-admissibility-accused-defense' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 5. dui-unlawful-forced-arrest-breath-blood-test-evidence-admissibility-accused-defense ───
  {
    domain: 'dui',
    slug: 'dui-unlawful-forced-arrest-breath-blood-test-evidence-admissibility-accused-defense',
    keyword: '위법 강제연행 상태 음주측정 혈액채취 증거능력 다툼',
    questionKeyword:
      '음주 단속 과정에서 경찰이 정식 절차 없이 저를 강제로 데려간 뒤 호흡측정을 했고, 이후 제가 그 결과를 다투려고 채혈을 요구해 혈액채취까지 이뤄졌습니다. 저는 애초에 강제로 연행된 상태에서 이뤄진 측정인데, 이렇게 위법하게 연행된 상태에서 나온 음주측정 결과나 그 뒤의 혈액채취 결과가 재판에서 증거로 쓰일 수 있는지부터 헷갈립니다. 제가 스스로 채혈을 요구했으니 그건 괜찮은 것인지, 위법 강제연행 상태의 음주측정·혈액채취 증거능력을 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '위법 강제연행 상태 음주측정 혈액채취 증거능력 다툼 연행 적법성·인과관계 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '위법 강제연행 음주측정 채혈 5단계 | 로앤가이드',
      description:
        '강제로 끌려간 상태 측정이 증거가 되는지 막막하다면 연행 적법성·인과관계 단절 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전 단속 과정에서 경찰이 임의동행이나 체포 등 정식 절차를 제대로 갖추지 않은 채 저를 사실상 강제로 데려간 뒤 지구대나 경찰서에서 호흡측정을 했고, 그 결과에 이의가 있어 제가 스스로 채혈을 요구해 혈액채취까지 이뤄진 상황에서 입건돼 당황한 사람입니다. 저는 처음부터 위법하게 연행된 상태에서 측정이 시작됐는데, 이렇게 위법한 강제연행 상태에서 나온 호흡측정 결과나 그에 이어진 혈액채취 결과가 재판에서 유죄의 증거로 쓰일 수 있는지, 제가 직접 채혈을 요구했다는 사정 때문에 그 채혈 결과는 증거로 인정되는 것은 아닌지부터 혼란스럽습니다. 판례·실무는 적법한 절차에 따르지 아니한 위법행위를 기초로 증거가 수집된 경우에는 그 증거뿐 아니라 그에 터 잡아 획득한 2차적 증거의 증거능력도 원칙적으로 부정되어야 하고, 위법한 강제연행 상태에서 호흡측정을 한 다음 그 강제연행 상태로부터 시간적·장소적으로 단절되었다고 볼 수 없고 피의자의 심적 상태도 강제연행 상태에서 완전히 벗어났다고 볼 수 없는 상황에서 피의자의 요구로 혈액채취가 이뤄졌더라도, 위법한 체포 상태의 영향이 완전히 배제되고 의사결정의 자유가 확실히 보장되었다고 볼 만한 다른 사정이 개입되지 않은 이상 불법체포와 증거수집 사이의 인과관계가 단절되었다고 볼 수 없어 그 혈액채취 결과도 증거로 쓸 수 없다고 보는 흐름이 있다는 설명을 들었습니다. 다만 연행의 위법 여부, 시간적·장소적 단절이 있었는지는 사건마다 다툼의 여지가 있다는 얘기도 함께 들어, 제 사건에서 측정·채취 결과의 증거능력이 어떻게 정리되는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 연행 경위와 측정·채취의 시점부터 정확히 구분해야 한다고 보는데, 사실과 다르게 위법하게 수집된 자료까지 그대로 증거로 쓰이는 것은 아닌지 걱정입니다. 연행 경위 기록·측정 시각·바디캠 자료가 있는데도, 무엇부터 정리해 증거능력을 밝혀야 하는지 막막한 상태입니다." 형사소송법 제308조의2는 위법수집증거 배제를, 도로교통법 제44조는 음주측정을 정하는 영역입니다. 판례·실무는 위법 강제연행 상태에서 이뤄진 측정과 그에 이어진 채혈의 증거능력을 인과관계 단절 여부로 판단한다고 보는 본 사례 흐름이 있는 영역입니다. 위법 강제연행 + 음주측정·혈액채취 + 증거능력 결합은 \'연행 적법성·인과관계 단절·2차 증거\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 연행 경위 ② 측정·채취 시점 ③ 인과관계 단절 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 연행 ② 측정 ③ 단절 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 위법하게 수집된 자료가 그대로 증거로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 위법 강제연행 상태 음주측정 혈액채취 증거능력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 연행 경위, 측정·채취 시점, 인과관계 단절, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연행 경위</strong> — 임의동행·체포 등 절차를 갖췄는지, 강제연행이 위법했는지 정리.</li>\n<li><strong>② 측정·채취 시점</strong> — 호흡측정과 혈액채취가 이뤄진 시각·장소를 시점별로 정리.</li>\n<li><strong>③ 인과관계 단절</strong> — 강제연행 상태로부터 시간적·장소적으로 단절되었는지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 음주운전·측정 관련 입건 경위와 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 연행 경위 기록·측정 시각·바디캠 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위법한 강제연행 상태에서 이뤄진 측정과 그에 이어진 채혈은 그 위법의 영향이 배제되고 인과관계가 단절되었다고 볼 사정이 없는 한 증거로 쓰기 어려운 영역이라, 연행 경위와 측정·채취의 시간적·장소적 단절 여부를 기록으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연행 경위 확인 (즉시~수일)</strong> — 임의동행·체포 절차를 갖췄는지, 강제연행 경위를 바디캠·기록으로 정리.</li>\n<li><strong>2단계 — 측정·채취 시점 정리 (입건 직후)</strong> — 호흡측정과 혈액채취의 시각·장소를 시점별로 정리.</li>\n<li><strong>3단계 — 인과관계 검토 (수사 진행)</strong> — 강제연행 상태로부터 시간적·장소적 단절이 있었는지 자료로 정리.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 증거능력·인과관계 단절 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 행정·정상 검토 (병행)</strong> — 면허 행정 절차와 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">위법 강제연행 상태 음주측정 혈액채취 증거능력 다툼 연행 적법성·인과관계 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 연행·측정·단절 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장·지구대 CCTV·경찰 바디캠 영상</strong></li>\n<li><strong>연행 경위·절차 관련 기록</strong></li>\n<li><strong>호흡측정 시각·결과지</strong></li>\n<li><strong>혈액채취 요구·시각 기록</strong></li>\n<li><strong>시간적·장소적 단절 정리 메모</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>정상·면허 행정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 증거능력 다툼은 연행의 위법 여부와 이후 측정·채취가 그 영향에서 단절됐는지가 관건이므로, 연행 시각과 측정·채취 시각을 바디캠·기록으로 시점별로 정리해두는 것이 핵심입니다. 채혈을 스스로 요구했더라도 강제연행 상태에서 벗어났는지를 함께 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>연행 적법성</strong> — 임의동행·체포 절차를 갖췄는지, 강제연행이 위법했는지.</li>\n<li><strong>2차 증거 배제</strong> — 위법행위에 터 잡아 획득한 2차 증거의 증거능력.</li>\n<li><strong>인과관계 단절</strong> — 강제연행 상태로부터 시간적·장소적으로 단절되었는지.</li>\n<li><strong>자발적 채혈</strong> — 피의자가 스스로 요구한 채혈이라도 위법의 영향이 남았는지.</li>\n<li><strong>증거동의 효과</strong> — 증거로 함에 동의했더라도 배제되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>운전면허 행정심판 (별도 트랙)</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위법 강제연행 상태의 음주측정·혈액채취 증거능력',
        summary:
          '대법원 2010도2094(대법원, 2013.03.14 선고) 영역에서 법원은 적법한 절차에 따르지 아니한 위법행위를 기초로 증거가 수집된 경우에는 그 증거뿐 아니라 그에 터 잡아 획득한 2차적 증거의 증거능력도 원칙적으로 부정되어야 한다고 보았습니다. 나아가 위법한 강제연행 상태에서 호흡측정 방법에 의한 음주측정을 한 다음, 그 강제연행 상태로부터 시간적·장소적으로 단절되었다고 볼 수 없고 피의자의 심적 상태도 강제연행 상태로부터 완전히 벗어났다고 볼 수 없는 상황에서 피의자의 요구로 혈액채취가 이루어졌더라도, 그 사이에 위법한 체포 상태에 의한 영향이 완전히 배제되고 의사결정의 자유가 확실히 보장되었다고 볼 만한 다른 사정이 개입되지 않은 이상 불법체포와 증거수집 사이의 인과관계가 단절되었다고 볼 수 없어 그 혈액채취 측정 결과 역시 유죄 인정의 증거로 쓸 수 없으며, 피고인이나 변호인이 이를 증거로 함에 동의하였더라도 마찬가지라고 판시했습니다. 이는 최초 연행의 적법성이 이후 측정 결과의 증거능력에까지 영향을 미침을 보여 줍니다. 위법 강제연행 상태 음주측정 다툼 사안에서도 연행 경위와 측정·채취의 시간적·장소적 단절 여부를 정리해 증거능력을 검토해볼 수 있습니다.',
        takeaway: '위법 강제연행 + 음주측정·혈액채취 + 증거능력 결합 시 연행 적법성·인과관계 단절·2차 증거 검토 영역 — 연행 경위 기록·측정 시각·바디캠 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '강제로 연행된 상태에서 한 측정도 증거가 되나요?',
        answer:
          '<strong>연행이 위법하면 그 측정 결과의 증거능력이 부정될 여지가 있는 영역입니다.</strong> 연행 경위를 정리하세요.',
      },
      {
        question: '제가 스스로 채혈을 요구했으면 그건 괜찮나요?',
        answer:
          '<strong>강제연행 상태에서 단절되지 않았다면 채혈 결과도 쓰기 어려운 영역입니다.</strong> 단절 여부를 정리하세요.',
      },
      {
        question: '증거로 함에 동의하면 다시 다툴 수 없나요?',
        answer:
          '<strong>동의했더라도 위법수집증거는 배제될 수 있는 영역입니다.</strong> 수집 경위를 확인하세요.',
      },
      {
        question: '인과관계 단절은 무엇을 보고 판단하나요?',
        answer:
          '<strong>시간적·장소적 단절과 의사결정 자유 보장 여부가 기준인 영역입니다.</strong> 측정·채취 시점을 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>연행 경위와 측정 시점 확인이 출발점인 영역입니다.</strong> 바디캠·측정 시각 기록부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '병상 채혈 영장 측정거부 트랙', href: '/guide/dui/dui-test-refusal-hospital-bed-blood-extraction-warrant-track' },
      { label: '측정거부 영장 채혈 트랙', href: '/guide/dui/dui-test-refusal-warrant-blood-extraction' },
      { label: '음주운전 적발 후 어디부터 시작 트랙', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '음주운전 형사 절차 총정리 트랙', href: '/guide/dui/dui-criminal-procedure-overview' },
    ],
  },
  // ─── 6. dui-protective-custody-measurement-request-refusal-accused-defense ───
  {
    domain: 'dui',
    slug: 'dui-protective-custody-measurement-request-refusal-accused-defense',
    keyword: '경찰 보호조치 상태 음주측정 요구 측정거부 다툼',
    questionKeyword:
      '술에 취한 상태로 있다가 경찰이 저를 보호조치 대상자로 보아 지구대로 데려갔는데, 그 직후 경찰이 음주측정을 요구했고 저는 응하지 않았습니다. 저는 보호를 위해 데려간 것이라면서 왜 측정을 요구하는지, 보호조치 상태에서 한 측정 요구가 적법한지, 이 상태에서 거부한 것이 측정불응죄가 되는지부터 헷갈립니다. 경찰관 직무집행법상 보호조치 상태에서 이뤄진 음주측정 요구와 측정거부를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '경찰 보호조치 상태 음주측정 요구 측정거부 다툼 보호조치 적법성·측정불응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '보호조치 상태 음주측정 거부 5단계 | 로앤가이드',
      description:
        '보호조치로 데려간 뒤 측정 요구에 응하지 않아 측정불응으로 몰려 막막하다면 요구 적법성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술에 취한 상태로 있다가 경찰이 저를 경찰관 직무집행법 제4조의 보호조치 대상자로 보아 지구대나 경찰서로 데려갔는데, 그 직후 경찰이 음주운전이 의심된다며 음주측정을 요구했고 제가 여기에 응하지 않아 음주측정불응으로 입건돼 당황한 사람입니다. 저는 애초에 보호를 위해 데려간 것이라면서 왜 그 자리에서 음주측정을 요구하는지, 보호조치 상태에서 이뤄진 측정 요구가 적법한 직무집행인지, 이런 상태에서 응하지 않은 것이 측정불응죄에 해당하는지부터 혼란스럽습니다. 판례·실무는 경찰공무원은 운전자가 술에 취한 상태에서 운전하였다고 인정할 만한 상당한 이유가 있고 음주운전 여부 확인을 위하여 필요한 경우 도로교통법에 따라 음주측정을 요구할 수 있으며, 운전자가 이에 불응하면 음주측정불응죄가 성립하고, 이러한 법리는 운전자가 경찰관 직무집행법 제4조에 따라 보호조치된 사람이라고 하여 달리 볼 것이 아니므로, 보호조치된 운전자에게 음주측정을 요구하였다는 이유만으로 그 요구가 당연히 위법하다거나 보호조치가 당연히 종료된 것으로 볼 수는 없다고 보는 흐름이 있다는 설명을 들었습니다. 다만 위법한 보호조치 상태를 이용해 음주측정 요구가 이루어졌다는 등의 특별한 사정이 있다면 다툼의 여지가 있다는 얘기도 함께 들어, 제 사건에서 보호조치와 측정 요구가 어떻게 평가되는지, 측정불응이 성립하는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 보호조치의 경위와 측정 요구·거부의 경위부터 정확히 구분해야 한다고 보는데, 사실과 다르게 정당한 절차상 이의까지 측정 거부로만 몰리는 것은 아닌지 걱정입니다. 보호조치 경위·측정 요구 기록·바디캠 자료가 있는데도, 무엇부터 정리해 보호조치 적법성과 측정불응 성립을 밝혀야 하는지 막막한 상태입니다." 경찰관 직무집행법 제4조는 보호조치를, 도로교통법 제44조·제148조의2는 음주측정과 측정불응을 정하는 영역입니다. 판례·실무는 보호조치 상태라는 사정만으로 측정 요구가 당연히 위법해지는 것은 아니고 위법한 보호조치를 이용한 특별한 사정이 있어야 다툴 여지가 있다고 보는 본 사례 흐름이 있는 영역입니다. 보호조치 상태 + 음주측정 요구 + 측정거부 결합은 \'보호조치 적법성·요구 정당성·측정불응 성립\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 보호조치 경위 ② 측정 요구 경위 ③ 측정불응 성립 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 보호조치 ② 요구 ③ 측정불응 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 정당한 이의가 측정 거부로만 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경찰 보호조치 상태 음주측정 요구 측정거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호조치 경위, 측정 요구 경위, 측정불응 성립, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보호조치 경위</strong> — 어떤 사유로 보호조치 대상자로 보아 데려갔는지, 그 적법성을 정리.</li>\n<li><strong>② 측정 요구 경위</strong> — 음주운전을 인정할 상당한 이유와 측정 요구 시점·고지를 정리.</li>\n<li><strong>③ 측정불응 성립</strong> — 위법한 보호조치를 이용한 특별한 사정이 있는지, 측정불응이 성립하는지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 음주측정불응 입건 경위와 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 보호조치 경위·측정 요구 기록·바디캠 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보호조치된 운전자에게 음주측정을 요구했다는 이유만으로 그 요구가 당연히 위법해지거나 보호조치가 종료되는 것은 아니고 위법한 보호조치를 이용한 특별한 사정이 있어야 다툴 여지가 있는 영역이라, 보호조치의 경위·적법성과 측정 요구 경위를 기록으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보호조치 경위 확인 (즉시~수일)</strong> — 보호조치 대상자로 본 사유와 경위, 적법성을 바디캠·기록으로 정리.</li>\n<li><strong>2단계 — 측정 요구 정리 (입건 직후)</strong> — 음주운전을 인정할 상당한 이유와 측정 요구 시점·고지·횟수를 정리.</li>\n<li><strong>3단계 — 측정불응 검토 (수사 진행)</strong> — 위법한 보호조치를 이용한 특별한 사정이 있는지, 측정불응 성립 여부를 정리.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 보호조치 적법성·측정불응 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 행정·정상 검토 (병행)</strong> — 면허 행정 절차와 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">경찰 보호조치 상태 음주측정 요구 측정거부 다툼 보호조치 적법성·측정불응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 보호조치·요구·측정불응 갈래입니다.</strong></p>\n<ul>\n<li><strong>지구대·현장 CCTV·경찰 바디캠 영상</strong></li>\n<li><strong>보호조치 경위·사유 관련 기록</strong></li>\n<li><strong>음주운전 인정 사유 관련 자료</strong></li>\n<li><strong>음주측정 요구·고지·횟수 기록</strong></li>\n<li><strong>측정거부 경위 정리 메모</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>정상·면허 행정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보호조치 상태 측정 요구 다툼은 보호조치의 적법성과 측정 요구의 정당성이 관건이므로, 보호조치 경위와 측정 요구 시점·고지·횟수를 바디캠·기록으로 정리해두는 것이 핵심입니다. 측정을 요구받은 시점과 거부 경위도 함께 기록해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보호조치 적법성</strong> — 보호조치 대상자로 본 사유와 절차가 적법했는지.</li>\n<li><strong>측정 요구 정당성</strong> — 음주운전을 인정할 상당한 이유가 있었는지.</li>\n<li><strong>보호조치 종료 여부</strong> — 측정 요구만으로 보호조치가 당연히 종료되는 것은 아닌지.</li>\n<li><strong>특별한 사정</strong> — 위법한 보호조치 상태를 이용해 측정 요구가 이뤄졌는지.</li>\n<li><strong>측정불응 성립</strong> — 위 사정을 종합해 측정불응죄가 성립하는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>운전면허 행정심판 (별도 트랙)</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보호조치된 운전자에 대한 음주측정 요구와 측정불응죄',
        summary:
          '대법원 2011도4328(대법원, 2012.02.09 선고) 영역에서 법원은 경찰공무원은 운전자가 술에 취한 상태에서 자동차 등을 운전하였다고 인정할 만한 상당한 이유가 있고 음주운전 여부를 확인하기 위하여 필요한 경우 구 도로교통법 제44조 제2항에 따라 음주측정을 요구할 수 있으며, 운전자가 이에 불응하면 음주측정불응죄가 성립한다고 보았습니다. 나아가 이러한 법리는 운전자가 경찰관 직무집행법 제4조에 따라 보호조치된 사람이라고 하여 달리 볼 것이 아니므로, 경찰공무원이 보호조치된 운전자에게 음주측정을 요구하였다는 이유만으로 그 요구가 당연히 위법하다거나 보호조치가 당연히 종료된 것으로 볼 수는 없고, 위법한 보호조치 상태를 이용하여 음주측정 요구가 이루어졌다는 등의 특별한 사정이 없는 한 이에 불응한 행위는 음주측정불응죄에 해당한다고 판시했습니다. 이는 보호조치 상태라는 사정만으로 측정 요구가 위법해지는 것은 아님을 보여 줍니다. 보호조치 상태 음주측정 요구 다툼 사안에서도 보호조치의 경위·적법성과 측정 요구·거부 경위를 정리해 측정불응 성립 여부를 검토해볼 수 있습니다.',
        takeaway: '보호조치 상태 + 음주측정 요구 + 측정거부 결합 시 보호조치 적법성·요구 정당성·측정불응 성립 검토 영역 — 보호조치 경위·측정 요구 기록·바디캠 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보호하려고 데려간 건데 왜 측정을 요구하나요?',
        answer:
          '<strong>음주운전을 인정할 상당한 이유가 있으면 측정 요구가 가능한 영역입니다.</strong> 요구 경위를 정리하세요.',
      },
      {
        question: '보호조치 상태의 측정 요구는 위법하지 않나요?',
        answer:
          '<strong>보호조치라는 이유만으로 요구가 당연히 위법해지는 것은 아닌 영역입니다.</strong> 보호조치 적법성부터 확인하세요.',
      },
      {
        question: '측정 요구하면 보호조치가 끝난 건가요?',
        answer:
          '<strong>측정 요구만으로 보호조치가 당연히 종료되는 것은 아닌 영역입니다.</strong> 경위를 시점별로 정리하세요.',
      },
      {
        question: '이 상태에서 거부한 게 측정불응죄인가요?',
        answer:
          '<strong>위법한 보호조치를 이용한 특별한 사정이 없으면 측정불응이 검토되는 영역입니다.</strong> 특별한 사정을 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>보호조치 경위와 측정 요구 경위 확인이 출발점인 영역입니다.</strong> 바디캠·측정 요구 기록부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 측정 트랙', href: '/guide/dui/dui-breath-test-refusal-measurement-track' },
      { label: '측정거부 입건 방어 트랙', href: '/guide/dui/dui-measurement-refusal-charged-defense-track' },
      { label: '음주운전 적발 후 어디부터 시작 트랙', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '음주운전 형사 절차 총정리 트랙', href: '/guide/dui/dui-criminal-procedure-overview' },
    ],
  },
  // ─── 7. dui-trial-record-inspection-copy-right-infringement-evidence-accused-defense ───
  {
    domain: 'dui',
    slug: 'dui-trial-record-inspection-copy-right-infringement-evidence-accused-defense',
    keyword: '음주 위험운전 공판조서 열람등사청구권 침해 증거능력 다툼',
    questionKeyword:
      '음주·위험운전 관련 사건으로 재판을 받으면서 방어를 위해 공판조서 열람이나 등사를 청구했는데, 법원이 이에 응해 주지 않은 채 재판이 진행됐습니다. 저는 공판에서 오간 진술을 확인해야 제대로 방어할 수 있는데 조서를 못 보게 하고, 그 공판조서나 거기 적힌 진술을 유죄의 증거로 쓰는 것이 맞는지부터 헷갈립니다. 열람·등사청구권이 침해된 경우 그 공판조서의 증거능력과 방어권 침해를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '음주 위험운전 공판조서 열람등사청구권 침해 증거능력 다툼 청구·불응 경위·방어권 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 공판조서 열람등사 침해 5단계 | 로앤가이드',
      description:
        '조서를 못 보게 하고 그 진술을 증거로 쓴다니 막막하다면 열람등사청구권 침해·증거능력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전이나 위험운전 관련 사건으로 재판을 받으면서 방어를 준비하기 위해 공판조서의 열람이나 등사를 청구했는데, 법원이 그 청구에 제대로 응하지 않은 채 절차가 진행돼 당황한 사람입니다. 저는 공판기일에 오간 저나 증인의 진술이 조서에 어떻게 기재됐는지 확인해야 다음 기일에 제대로 방어할 수 있는데, 조서를 열람·등사하지 못하게 한 상태에서 그 공판조서나 거기 기재된 진술을 유죄의 증거로 사용하는 것이 맞는지, 이렇게 열람·등사청구권이 침해된 경우 그 증거를 다툴 수 있는지부터 혼란스럽습니다. 판례·실무는 형사소송법 제55조 제1항이 공판조서의 정확성을 담보하고 피고인의 방어권을 충실히 보장하려는 취지에서 피고인에게 공판조서의 열람 또는 등사청구권을 인정하고, 같은 조 제3항이 그 청구에 응하지 아니한 때에는 공판조서를 유죄의 증거로 할 수 없다고 규정하고 있으므로, 피고인이 공판조서의 열람 또는 등사를 청구하였음에도 법원이 불응하여 그 청구권이 침해된 경우에는 공판조서를 유죄의 증거로 할 수 없을 뿐만 아니라 공판조서에 기재된 피고인이나 증인의 진술도 증거로 할 수 없다고 보는 흐름이 있다는 설명을 들었습니다. 다만 그러한 증거들 외에 적법하게 조사한 다른 증거들만으로도 범죄사실을 인정하기에 충분하고 열람·등사 불응이 방어권을 본질적으로 침해한 정도에 이르지 않은 경우에는 판결에 영향을 미친 위법이라고 할 수 없다는 얘기도 함께 들어, 제 사건에서 청구권 침해가 증거능력과 판결에 어떤 영향을 미치는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 제가 언제 어떤 조서의 열람·등사를 청구했고 법원이 어떻게 응했는지부터 정확히 구분해야 한다고 보는데, 사실과 다르게 방어권이 제한된 채 나온 자료까지 그대로 증거로 쓰이는 것은 아닌지 걱정입니다. 열람·등사 청구 기록·공판조서·증거목록이 있는데도, 무엇부터 정리해 증거능력과 방어권 침해를 밝혀야 하는지 막막한 상태입니다." 형사소송법 제55조는 공판조서 열람·등사청구권과 그 침해 시 증거능력 제한을 정하는 영역입니다. 판례·실무는 청구권 침해 시 공판조서와 그에 기재된 진술을 증거로 할 수 없되 나머지 증거로 유죄 인정이 충분하고 본질적 침해가 아니면 판결에 영향을 미친 위법은 아니라고 보는 본 사례 흐름이 있는 영역입니다. 공판조서 열람·등사청구권 침해 + 증거능력 + 방어권 결합은 \'청구·불응 경위·증거능력·판결 영향\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 청구·불응 경위 ② 증거능력 ③ 나머지 증거 상황 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 청구 ② 증거능력 ③ 나머지 증거 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 방어권이 제한된 채 나온 자료가 그대로 증거로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 위험운전 공판조서 열람등사청구권 침해 증거능력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구·불응 경위, 증거능력, 나머지 증거 상황, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 청구·불응 경위</strong> — 언제 어떤 공판조서의 열람·등사를 청구했고 법원이 어떻게 응했는지 정리.</li>\n<li><strong>② 증거능력</strong> — 청구권 침해 시 공판조서와 그 진술의 증거능력 제한을 검토.</li>\n<li><strong>③ 나머지 증거 상황</strong> — 그 외 적법하게 조사한 증거만으로 범죄사실 인정이 충분한지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 열람·등사청구권 침해 관련 공판 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 열람·등사 청구 기록·공판조서·증거목록 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공판조서 열람·등사청구권이 침해된 경우 그 공판조서와 기재된 진술은 유죄의 증거로 할 수 없되, 나머지 적법한 증거로 유죄 인정이 충분하고 방어권 본질 침해가 아니면 판결에 영향을 미친 위법은 아니라고 보는 영역이라, 청구·불응 경위와 나머지 증거 상황을 기록으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 청구·불응 경위 확인 (즉시~수일)</strong> — 열람·등사를 청구한 시점과 법원의 응답·불응 경위를 기록으로 정리.</li>\n<li><strong>2단계 — 증거능력 검토 (공판 진행)</strong> — 청구권 침해 시 공판조서와 진술의 증거능력 제한을 정리.</li>\n<li><strong>3단계 — 나머지 증거 정리 (공판 진행)</strong> — 그 외 적법하게 조사한 증거만으로 유죄 인정이 충분한지 검토.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 증거능력·방어권 침해 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 상소·정상 검토 (병행)</strong> — 판결 영향 여부에 따른 상소·정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 위험운전 공판조서 열람등사청구권 침해 증거능력 다툼 청구·불응 경위·방어권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 청구·증거능력·나머지 증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>열람·등사 청구서·접수 기록</strong></li>\n<li><strong>법원 응답·불응 관련 자료</strong></li>\n<li><strong>공판조서 사본·기재 내역</strong></li>\n<li><strong>증인·피고인 진술 관련 자료</strong></li>\n<li><strong>증거목록·나머지 증거 정리 메모</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>상소·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 열람·등사청구권 침해 다툼은 청구와 불응의 경위가 관건이므로, 청구 시점·접수와 법원의 응답 경위를 기록으로 정리해두는 것이 핵심입니다. 공판조서 외 나머지 증거만으로 유죄 인정이 되는지도 함께 정리해 판결 영향 여부를 검토해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>청구권 침해</strong> — 열람·등사를 청구했는데 법원이 불응했는지.</li>\n<li><strong>공판조서 증거능력</strong> — 침해 시 공판조서를 유죄의 증거로 할 수 있는지.</li>\n<li><strong>기재 진술 증거능력</strong> — 조서에 기재된 피고인·증인 진술의 증거능력.</li>\n<li><strong>나머지 증거 충분성</strong> — 그 외 적법한 증거만으로 유죄 인정이 충분한지.</li>\n<li><strong>판결 영향</strong> — 방어권 본질 침해가 아니면 판결에 영향을 미친 위법인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>운전면허 행정심판 (별도 트랙)</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공판조서 열람·등사청구권 침해와 증거능력',
        summary:
          '대법원 2011도15869(대법원, 2012.12.27 선고) 영역에서 법원은 형사소송법 제55조 제1항이 공판조서의 정확성을 담보함과 아울러 피고인의 방어권을 충실하게 보장하려는 취지에서 피고인에게 공판조서의 열람 또는 등사청구권을 인정하고, 같은 조 제3항이 피고인의 청구에 응하지 아니하는 때에는 공판조서를 유죄의 증거로 할 수 없다고 규정하고 있다고 보았습니다. 따라서 피고인이 공판조서의 열람 또는 등사를 청구하였음에도 법원이 불응하여 그 청구권이 침해된 경우에는 공판조서를 유죄의 증거로 할 수 없을 뿐만 아니라 공판조서에 기재된 당해 피고인이나 증인의 진술도 증거로 할 수 없다고 판시했습니다. 다만 그러한 증거들 이외에 적법하게 채택하여 조사한 다른 증거들만으로도 범죄사실을 인정하기에 충분하고, 열람 또는 등사에 응하지 아니한 것이 방어권이나 변호권을 본질적으로 침해한 정도에 이르지는 않은 경우에는 판결에서 공판조서 등을 증거로 사용하였더라도 판결에 영향을 미친 위법이라고 할 수는 없다고도 하였습니다. 이는 절차적 권리 침해가 증거능력과 판결에 미치는 영향의 범위를 보여 줍니다. 음주·위험운전 사건의 공판조서 열람등사 다툼 사안에서도 청구·불응 경위와 나머지 증거 상황을 정리해 증거능력과 방어권 침해 여부를 검토해볼 수 있습니다.',
        takeaway: '공판조서 열람·등사청구권 침해 + 증거능력 + 방어권 결합 시 청구·불응 경위·증거능력·판결 영향 검토 영역 — 열람·등사 청구 기록·공판조서·증거목록 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '조서 열람을 못 하게 했는데 그 조서를 증거로 쓸 수 있나요?',
        answer:
          '<strong>청구권이 침해되면 공판조서를 유죄의 증거로 할 수 없는 영역입니다.</strong> 청구·불응 경위를 정리하세요.',
      },
      {
        question: '조서에 적힌 증인 진술도 증거에서 빠지나요?',
        answer:
          '<strong>공판조서에 기재된 피고인·증인 진술도 증거로 할 수 없는 영역입니다.</strong> 기재 내역을 확인하세요.',
      },
      {
        question: '다른 증거로도 유죄가 되면 소용없나요?',
        answer:
          '<strong>나머지 증거만으로 인정이 충분하고 본질적 침해가 아니면 판결에 영향이 없을 수 있는 영역입니다.</strong> 증거목록을 정리하세요.',
      },
      {
        question: '언제 청구했는지가 왜 중요한가요?',
        answer:
          '<strong>청구와 불응의 경위가 침해 여부의 기준인 영역입니다.</strong> 청구 시점·접수 기록을 확보하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>청구·불응 경위 확인이 출발점인 영역입니다.</strong> 열람·등사 청구서·접수 기록부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '항소심 연속 불출석 절차 트랙', href: '/guide/dui/dui-appeal-absence-two-consecutive-judgment-procedure-accused-defense' },
      { label: '음주운전 형사 절차 총정리 트랙', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '음주운전 적발 후 어디부터 시작 트랙', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '음주운전 초범 처벌 트랙', href: '/guide/dui/dui-first-offense' },
    ],
  },
  // ─── 8. jeonse-fraud-foreigner-overseas-korean-registration-opposing-power-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-foreigner-overseas-korean-registration-opposing-power-deposit-track',
    keyword: '외국인 재외국민 임차인 외국인등록 거소신고 대항력 보증금 다툼',
    questionKeyword:
      '외국 국적이거나 해외에 오래 살던 재외국민으로서 국내에 전세로 들어와 살고 있는데, 임대인이 보증금을 돌려주지 않으면서 저는 주민등록을 하지 못하는 외국인·재외국민이라 대항력이 없다는 식으로 나옵니다. 저는 외국인등록이나 국내거소신고를 하고 실제로 거주하고 있는데, 이것으로는 주택임대차보호법상 대항력이 인정되지 않는 것인지, 가족이 등록한 경우는 어떻게 되는지부터 헷갈립니다. 외국인·재외국민 임차인의 대항력과 보증금 보호를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '외국인 재외국민 임차인 외국인등록 거소신고 대항력 보증금 다툼 등록 시점·대항력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '외국인 임차인 대항력 보증금 5단계 | 로앤가이드',
      description:
        '외국인이라 대항력이 없다며 보증금을 미뤄 막막하다면 외국인등록·거소신고 대항력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"외국 국적이거나 해외에 오래 거주하다 들어온 재외국민으로서 국내에 전세로 입주해 살고 있는데, 임대인이 보증금 반환을 미루면서 저는 주민등록을 할 수 없는 외국인·재외국민이라 주택임대차보호법상 대항력이 없다는 취지로 대응해 막막한 임차인입니다. 저는 출입국 관련 법에 따라 외국인등록이나 체류지변경신고, 또는 국내거소신고나 거소이전신고를 하고 실제로 그 집에 거주하고 있는데, 이것만으로는 임차인의 대항력이 인정되지 않는 것인지, 만약 본인이 아니라 배우자나 자녀 등 가족이 등록·신고를 한 경우에는 어떻게 되는지부터 혼란스럽습니다. 판례·실무는 외국인 또는 외국국적동포가 구 출입국관리법이나 구 재외동포의 출입국과 법적 지위에 관한 법률에 따라 한 외국인등록이나 체류지변경신고 또는 국내거소신고나 거소이전신고에 대하여는 주택임대차보호법 제3조 제1항이 대항력 취득 요건으로 규정한 주민등록과 동일한 법적 효과가 인정되고, 대항력 취득 요건인 주민등록에는 임차인 본인뿐 아니라 배우자나 자녀 등 가족의 주민등록도 포함되며 이러한 법리는 재외국민이 임차인인 경우에도 마찬가지로 적용된다고 보는 흐름이 있다는 설명을 들었습니다. 다만 등록·신고의 시점과 내용, 실제 거주·점유 여부, 확정일자 유무 등 구체적 사정에 따라 대항력과 우선변제의 결론이 달라질 수 있다는 얘기도 함께 들어, 제 사건에서 대항력이 어떻게 인정되는지, 보증금 보호를 어떻게 받을 수 있는지부터 가늠하기 어렵습니다. 저는 결론을 단정하기보다, 제가 언제 외국인등록·거소신고를 했고 가족은 어떻게 등록했는지, 확정일자와 실제 거주 상황을 정리해 대항력과 보증금 보호 여지를 확인하고 싶은데, 외국인등록·거소신고 자료·임대차계약서·등기부등본이 있는데도 무엇부터 정리해 대항력과 보증금 문제를 밝혀야 하는지 막막한 상태입니다." 주택임대차보호법 제3조는 대항력을, 출입국관리법·재외동포법은 외국인등록·거소신고를 정하는 영역입니다. 판례·실무는 외국인등록·국내거소신고 등에 주민등록과 동일한 대항력 효과를 인정하고 가족의 등록도 포함한다고 본 사례 흐름이 있는 영역입니다. 외국인·재외국민 임차인 + 외국인등록·거소신고 + 대항력 결합은 \'등록 시점·가족 등록·보증금 보호\' 검토가 가능한 트랙입니다. 피해자라면 ① 등록·신고 시점 ② 실제 거주·확정일자 ③ 대항력·우선변제 ④ 협의·대응 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 등록 ② 거주 ③ 대항력 ④ 협의 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 결론을 단정하기보다 관련 자료를 정리해 보증금 보전 여지를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 재외국민 임차인 대항력 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록·신고 시점, 실제 거주·확정일자, 대항력·우선변제, 협의·대응, 회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 등록·신고 시점</strong> — 외국인등록·거소신고를 언제 했는지, 가족 등록 여부를 정리.</li>\n<li><strong>② 실제 거주·확정일자</strong> — 실제 거주·점유와 확정일자 취득 여부를 정리.</li>\n<li><strong>③ 대항력·우선변제</strong> — 주민등록과 동일한 대항력·우선변제 효과가 인정되는지 검토.</li>\n<li><strong>④ 협의·대응</strong> — 임대인의 대항력 부정 주장에 대해 등록·거주 자료로 대응.</li>\n<li><strong>⑤ 회수</strong> — 임차권등기·보증금반환청구 등 회수 여지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국인등록이나 국내거소신고 등은 주택임대차보호법상 대항력 요건인 주민등록과 동일한 효과가 인정되고 가족의 등록도 포함될 수 있는 영역이라, 등록·신고 시점과 실제 거주·확정일자를 등록 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 회수 5단계',
        content:
          '<p><strong>A. KLAC·전세사기피해지원센터·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등록·거주 확인 (즉시~수일)</strong> — 외국인등록·거소신고 시점과 실제 거주, 가족 등록 여부를 정리.</li>\n<li><strong>2단계 — 확정일자 정리 (수일 내)</strong> — 확정일자 취득 시점과 임대차계약서를 정리.</li>\n<li><strong>3단계 — 대항력 검토 (반환 협의 전)</strong> — 등록·거주·확정일자를 종합해 대항력·우선변제 효과를 정리.</li>\n<li><strong>4단계 — 반환청구·내용증명 (기한 내)</strong> — 보증금 반환을 명시한 내용증명을 발송해 대응.</li>\n<li><strong>5단계 — 임차권등기·소송 검토 (협의 결렬 시)</strong> — 임차권등기명령·보증금반환소송 등 회수 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 재외국민 임차인 외국인등록 거소신고 대항력 보증금 다툼 등록 시점·대항력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 등록·거주·대항력 갈래입니다.</strong></p>\n<ul>\n<li><strong>외국인등록증·국내거소신고 자료</strong></li>\n<li><strong>체류지변경·거소이전 신고 내역</strong></li>\n<li><strong>가족 등록·신고 자료</strong></li>\n<li><strong>임대차계약서·확정일자 자료</strong></li>\n<li><strong>실제 거주·점유 관련 자료</strong></li>\n<li><strong>등기부등본 (선순위·소유 관계)</strong></li>\n<li><strong>보증금 반환 독촉 내용증명</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국인·재외국민 대항력 다툼은 등록·신고 시점과 실제 거주가 관건이므로, 외국인등록·거소신고 일자와 확정일자를 나란히 정리해두는 것이 핵심입니다. 본인이 아니라 가족이 등록·신고한 경우 그 자료도 함께 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>등록의 효과</strong> — 외국인등록·거소신고가 주민등록과 동일한 대항력 효과를 갖는지.</li>\n<li><strong>가족 등록 포함</strong> — 배우자·자녀 등 가족의 등록도 대항력 요건에 포함되는지.</li>\n<li><strong>재외국민 적용</strong> — 재외국민이 임차인인 경우에도 같은 법리가 적용되는지.</li>\n<li><strong>확정일자·우선변제</strong> — 확정일자와 결합해 우선변제권이 인정되는지.</li>\n<li><strong>등록 시점</strong> — 등록·신고 시점이 선순위 권리와의 관계에서 어떠한지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (피해 상담·결정)</strong></li>\n<li><strong>주택도시보증공사 HUG 1566-9009 (보증·상담)</strong></li>\n<li><strong>대법원 전자소송 (임차권등기·보증금반환소송)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인·재외국민 임차인의 대항력 취득 요건',
        summary:
          '대법원 2014다218030(대법원, 2016.10.13 선고) 영역에서 법원은 외국인 또는 외국국적동포가 구 출입국관리법이나 구 재외동포의 출입국과 법적 지위에 관한 법률에 따라 한 외국인등록이나 체류지변경신고 또는 국내거소신고나 거소이전신고에 대하여는, 주택임대차보호법 제3조 제1항이 주택임대차의 대항력 취득 요건으로 규정한 주민등록과 동일한 법적 효과가 인정되고, 이는 외국인등록이나 국내거소신고 등이 주민등록과 비교하여 공시기능이 미약하다고 하여 달리 볼 수 없다고 보았습니다. 나아가 대항력 취득 요건인 주민등록에는 임차인 본인뿐 아니라 배우자나 자녀 등 가족의 주민등록도 포함되고, 이러한 법리는 재외국민이 임차인인 경우에도 마찬가지로 적용된다고 판시했습니다. 이는 외국인·재외국민 임차인도 외국인등록·국내거소신고 등을 통해 주민등록과 같은 대항력 보호를 받을 수 있음을 보여 줍니다. 외국인·재외국민 임차인 대항력 다툼 사안에서도 등록·신고 시점과 가족 등록 여부를 정리해 대항력과 보증금 보호 여지를 검토해볼 수 있습니다.',
        takeaway: '외국인·재외국민 임차인 + 외국인등록·거소신고 + 대항력 결합 시 등록 시점·가족 등록·보증금 보호 검토 영역 — 외국인등록·거소신고 자료·임대차계약서·등기부등본 정리 후 변호사 상담 권장.',
      },
    ],
    faq: [
      {
        question: '외국인이라 주민등록을 못 하면 대항력이 없나요?',
        answer:
          '<strong>외국인등록·거소신고에 주민등록과 동일한 대항력 효과가 인정되는 영역입니다.</strong> 등록 시점을 정리하세요.',
      },
      {
        question: '가족이 등록한 경우는 어떻게 되나요?',
        answer:
          '<strong>배우자·자녀 등 가족의 등록도 대항력 요건에 포함될 수 있는 영역입니다.</strong> 가족 등록 자료를 확보하세요.',
      },
      {
        question: '재외국민인 저에게도 같은 법리가 적용되나요?',
        answer:
          '<strong>재외국민이 임차인인 경우에도 마찬가지로 적용되는 영역입니다.</strong> 거소신고 내역을 정리하세요.',
      },
      {
        question: '확정일자까지 있으면 우선변제도 되나요?',
        answer:
          '<strong>확정일자와 결합해 우선변제권이 검토되는 영역입니다.</strong> 확정일자 취득 시점을 확인하세요.',
      },
      {
        question: '보증금을 지키려면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>등록·신고 시점과 실제 거주 확인이 출발점인 영역입니다.</strong> 외국인등록·거소신고 자료부터 확보하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '오피스텔 전입신고 대항력 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-officetel-resident-registration-opposing-track' },
      { label: '법인 임차 직원 거주 대항력 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-lease-employee-opposing-power-track' },
      { label: '전세사기 어디부터 시작 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '전세사기 피해자 인정 신청 절차 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
    ],
  },
  // ─── 9. jeonse-fraud-landlord-restoration-cost-normal-wear-tear-proof-deposit-deduction-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-landlord-restoration-cost-normal-wear-tear-proof-deposit-deduction-track',
    keyword: '임대차 원상복구비 통상손상 초과 훼손 입증 보증금 공제 다툼',
    questionKeyword:
      '전세로 살던 집에서 나오는데 임대인이 벽지·바닥·설비가 훼손됐다며 원상복구비 명목으로 보증금에서 큰 금액을 공제하겠다고 합니다. 저는 오래 살면서 생긴 자연스러운 사용 흔적인데 이것까지 제가 다 물어내야 하는지, 임대인이 원상복구비를 공제하려면 어디까지 입증해야 하는지부터 헷갈립니다. 저는 통상적인 사용에 따른 손상과 심한 훼손이 어떻게 구분되는지 정리해 보증금을 지키고 싶습니다. 임대차 원상복구비와 통상손상 초과 훼손의 입증, 보증금 공제를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '임대차 원상복구비 통상손상 초과 훼손 입증 보증금 공제 다툼 훼손 정도·증명책임 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '원상복구비 보증금 공제 5단계 | 로앤가이드',
      description:
        '자연스러운 사용 흔적까지 원상복구비로 보증금에서 뗀다니 막막하다면 통상손상·증명책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 살던 집에서 이사를 나오는데 임대인이 벽지·바닥·문·설비 등이 훼손됐다며 원상복구비 명목으로 제 보증금에서 상당한 금액을 공제하겠다고 해 막막한 임차인입니다. 저는 여러 해 살면서 생긴 자연스러운 사용 흔적이나 통상적인 노후라고 생각하는데, 이런 부분까지 제가 원상복구 비용을 물어내고 보증금에서 공제까지 당해야 하는지, 임대인이 원상복구비를 보증금에서 빼려면 어디까지 입증해야 하는지부터 혼란스럽습니다. 하급심 판단 중에는 임대인이 제출한 증거만으로는 임대차목적물이 임차 당시와 비교하여 임대차에 따른 통상적인 손상의 정도를 넘어 심하게 훼손되었다는 점을 인정하기 어렵고 달리 이를 인정할 증거가 없다고 보아, 훼손을 이유로 한 임대인의 주장을 받아들이지 않은 사례가 있다는 설명을 들었습니다. 다만 이러한 결론은 훼손의 정도, 제출된 증거, 임대차 기간과 목적물의 상태 등 구체적 사정에 따라 달라질 수 있다는 얘기도 함께 들어, 제 사건에서 통상적인 사용 흔적과 심한 훼손이 어떻게 구분되는지, 원상복구비 공제가 어디까지 인정되는지부터 가늠하기 어렵습니다. 저는 결론을 단정하기보다, 입주할 때와 나올 때의 목적물 상태를 정리하고 임대인이 공제하려는 항목의 근거를 확인해 통상손상과 훼손의 경계를 밝히고 보증금을 지키고 싶은데, 입주·퇴거 사진·임대차계약서·공제 내역이 있는데도 무엇부터 정리해 훼손의 정도와 보증금 공제를 밝혀야 하는지 막막한 상태입니다." 민법 제615조·제654조는 임차인의 원상회복의무를 정하는 영역입니다. 하급심 사례 중에는 임대인이 통상적인 손상을 넘는 훼손을 증명하지 못하면 그 훼손을 이유로 한 주장을 받아들이지 않은 사례가 있으나, 이는 개별 사안의 구체적 사정에 따라 달라질 수 있는 영역입니다. 임대차 원상복구비 + 통상손상 초과 훼손 + 보증금 공제 결합은 \'훼손 정도·증명책임·공제 범위\' 검토가 가능한 트랙입니다. 피해자라면 ① 목적물 상태 ② 통상손상 구분 ③ 증명책임·공제 범위 ④ 협의·대응 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 상태 ② 구분 ③ 공제 ④ 협의 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 결론을 단정하기보다 관련 자료를 정리해 보증금 보전 여지를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대차 원상복구비 통상손상 초과 훼손 입증 보증금 공제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 목적물 상태, 통상손상 구분, 증명책임·공제 범위, 협의·대응, 회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 목적물 상태</strong> — 입주할 때와 나올 때의 벽지·바닥·설비 상태를 사진 등으로 정리.</li>\n<li><strong>② 통상손상 구분</strong> — 통상적인 사용에 따른 손상·노후와 심한 훼손을 구분해 정리.</li>\n<li><strong>③ 증명책임·공제 범위</strong> — 통상손상을 넘는 훼손을 임대인이 증명했는지, 공제 범위를 검토.</li>\n<li><strong>④ 협의·대응</strong> — 공제 항목·금액의 근거를 확인해 과다 공제에 대응.</li>\n<li><strong>⑤ 회수</strong> — 협의가 안 될 경우 보증금반환청구 등 회수 여지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 하급심에서는 임대인이 통상적인 손상을 넘는 훼손을 증명하지 못하면 그 훼손을 이유로 한 주장을 받아들이지 않은 사례가 있으나 개별 사정에 따라 달라질 수 있는 영역이라, 입주·퇴거 시점의 목적물 상태를 사진·자료로 정리해 통상손상과 훼손을 구분하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 회수 5단계',
        content:
          '<p><strong>A. KLAC·전세사기피해지원센터·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 목적물 상태 확보 (즉시~수일)</strong> — 입주·퇴거 시점의 사진·동영상으로 목적물 상태를 확보.</li>\n<li><strong>2단계 — 통상손상 정리 (자료 확보 후)</strong> — 통상적인 사용·노후에 따른 손상과 심한 훼손을 구분해 정리.</li>\n<li><strong>3단계 — 공제 근거 확인 (반환 협의 전)</strong> — 임대인이 원상복구비로 공제하려는 항목·금액과 근거를 확인.</li>\n<li><strong>4단계 — 협의·내용증명 (기한 내)</strong> — 통상손상과 증명책임을 근거로 과다 공제에 대해 내용증명 등으로 대응.</li>\n<li><strong>5단계 — 조정·소송 검토 (협의 결렬 시)</strong> — 협의가 안 되면 조정·보증금반환소송 등 회수 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대차 원상복구비 통상손상 초과 훼손 입증 보증금 공제 다툼 훼손 정도·증명책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상태·통상손상·공제 갈래입니다.</strong></p>\n<ul>\n<li><strong>입주 시점 사진·동영상</strong></li>\n<li><strong>퇴거 시점 사진·동영상</strong></li>\n<li><strong>임대차계약서 (원상회복·특약 조항)</strong></li>\n<li><strong>임대인 원상복구비 공제 내역</strong></li>\n<li><strong>수리 견적·항목별 근거 자료</strong></li>\n<li><strong>보증금 입금·반환 요구 자료</strong></li>\n<li><strong>협의·내용증명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 원상복구비 공제 다툼은 통상적인 사용 흔적과 심한 훼손의 구분이 관건이므로, 입주와 퇴거 시점의 목적물 상태를 사진·동영상으로 남겨두는 것이 핵심입니다. 임대인이 공제하려는 항목은 근거와 금액을 문서로 받아 통상손상을 넘는 훼손인지 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>통상손상 구분</strong> — 통상적인 사용·노후에 따른 손상인지 심한 훼손인지.</li>\n<li><strong>증명책임</strong> — 통상손상을 넘는 훼손을 임대인이 증명해야 하는지.</li>\n<li><strong>공제 범위</strong> — 원상복구비 공제 항목·금액이 책임 범위 안인지.</li>\n<li><strong>특약 유효성</strong> — 원상회복 관련 특약이 있는 경우 그 해석·유효성.</li>\n<li><strong>과다 공제 대응</strong> — 근거 없는 공제에 대한 반환 요구 방법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (피해 상담·결정)</strong></li>\n<li><strong>주택도시보증공사 HUG 1566-9009 (보증·상담)</strong></li>\n<li><strong>대법원 전자소송 (보증금반환소송)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 원상복구·훼손 공제와 통상손상 초과의 증명책임 (하급심)',
        summary:
          '수원지방법원 안양지원 2021가소111108(2022.09.22 선고) 영역에서 법원은 피고(임대인)가 제출한 증거만으로는 임대차목적물이 임차할 당시와 비교하여 임대차에 따른 통상적인 손상의 정도를 넘어 심하게 훼손되었다는 점을 인정하기 어렵고 달리 이를 인정할 증거가 없다고 보아, 그 훼손을 이유로 한 임대인의 주장을 받아들이지 않은 사례가 있습니다. 하급심에서는 이처럼 임대인이 원상복구비나 훼손을 이유로 보증금에서 공제하려면 통상적인 사용에 따른 손상을 넘는 훼손이 있었다는 점을 임대인 측이 증명하여야 한다고 본 사례가 있다고 볼 수 있습니다. 다만 이는 하급심의 개별 판단으로서 훼손의 정도, 제출된 증거, 임대차 기간과 목적물의 상태 등 구체적 사정에 따라 결론이 달라질 수 있어 사안에 따라 달라질 수 있습니다. 임대차 원상복구비 공제 다툼 사안에서도 입주·퇴거 시점의 목적물 상태 자료를 정리해 통상손상과 훼손의 구분, 보증금 공제 범위를 검토해볼 수 있습니다.',
        takeaway: '임대차 원상복구비 + 통상손상 초과 훼손 + 보증금 공제 결합 시 훼손 정도·증명책임·공제 범위 검토 영역 — 입주·퇴거 사진·임대차계약서·공제 내역 정리 후 변호사 상담 권장. 위는 하급심 사례로 사안에 따라 달라질 수 있어 별도 확인이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '오래 살아 생긴 흔적까지 제가 다 물어내야 하나요?',
        answer:
          '<strong>통상적인 사용에 따른 손상과 심한 훼손을 구분해야 하는 영역입니다.</strong> 입주·퇴거 상태를 정리하세요.',
      },
      {
        question: '임대인이 원상복구비를 빼려면 무엇을 증명해야 하나요?',
        answer:
          '<strong>하급심에서는 통상손상을 넘는 훼손을 임대인이 증명해야 한다고 본 사례가 있는 영역입니다.</strong> 공제 근거를 확인하세요.',
      },
      {
        question: '사진이 없으면 어떻게 다투나요?',
        answer:
          '<strong>목적물 상태 자료의 유무에 따라 결론이 달라질 수 있는 영역입니다.</strong> 남은 자료와 정황을 정리하세요.',
      },
      {
        question: '원상회복 특약이 있으면 무조건 공제되나요?',
        answer:
          '<strong>특약의 해석·유효성과 훼손 정도를 함께 보아야 하는 영역입니다.</strong> 계약서 특약 조항을 확인하세요.',
      },
      {
        question: '보증금을 지키려면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>입주·퇴거 시점의 목적물 상태 확인이 출발점인 영역입니다.</strong> 사진·동영상·공제 내역부터 확보하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '전세 주택 화재 임차인 책임 공제 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-rental-house-fire-tenant-liability-deposit-deduction-track' },
      { label: '보증금 미반환 즉시 대응 트랙', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 어디부터 시작 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '전세사기 피해자 인정 신청 절차 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
    ],
  },
  // ─── 10. jeonse-fraud-rent-increase-claim-court-decision-effective-date-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-rent-increase-claim-court-decision-effective-date-deposit-track',
    keyword: '임대인 차임 증액청구 협의 불성립 법원 결정 이행기 보증금 다툼',
    questionKeyword:
      '전세를 반전세로 돌리거나 월세를 두면서 계약할 때 임대인이 일정 기간마다 물가상승 등을 이유로 협의해서 차임을 조정할 수 있다는 약정을 넣었는데, 이제 임대인이 물가상승을 이유로 차임 증액을 요구합니다. 저는 인상 폭이 과하다고 생각해 협의에 응하지 않았는데, 협의가 안 되면 어떻게 되는지, 나중에 법원이 정한 증액 차임이 언제부터 효력이 생기는지, 밀린 차임처럼 소급해서 물어야 하는지부터 헷갈립니다. 임대인의 차임 증액청구와 협의 불성립, 법원 결정 이행기를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '임대인 차임 증액청구 협의 불성립 법원 결정 이행기 보증금 다툼 증액청구 도달·이행기 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '차임 증액청구 이행기 보증금 5단계 | 로앤가이드',
      description:
        '임대인의 차임 증액이 언제부터 효력인지 소급해 물어야 할까 막막하다면 증액청구 도달·이행기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세를 반전세로 전환하거나 일부 월세를 두면서 임대차계약을 할 때, 임대인이 일정 기간이 지날 때마다 물가상승 등 경제사정 변경을 이유로 임차인과 협의하여 차임을 조정할 수 있다는 약정을 넣었는데, 이제 임대인이 그 약정을 근거로 물가상승을 들어 차임 증액을 요구해 막막한 임차인입니다. 저는 임대인이 요구하는 인상 폭이 과하다고 생각해 협의에 응하지 않았는데, 이렇게 협의가 성립되지 않으면 차임이 어떻게 정해지는지, 나중에 임대인이 청구하거나 법원이 결정한 증액 차임이 언제부터 효력이 생기는지, 혹시 밀린 차임처럼 지난 기간까지 소급해 물어내야 하는지부터 혼란스럽습니다. 판례·실무는 임대차계약을 하면서 임대인이 일정 기간 경과 시마다 물가상승 등 경제사정 변경을 이유로 임차인과의 협의에 의하여 차임을 조정할 수 있도록 약정하였다면, 그 취지는 임대인에게 상호 합의에 의하여 차임을 증액할 수 있는 권리를 부여하되 인상요인이 생겼는데도 협의가 성립하지 않으면 법원이 정한 적정한 액수의 차임에 따르기로 한 것으로 보아야 하고, 임대인이 민법 제628조에 따라 장래에 대한 차임 증액을 청구하였으나 협의가 성립되지 아니하여 법원이 결정해 주는 차임은 증액청구의 의사표시를 한 때에 소급하여 효력이 생기므로, 특별한 사정이 없는 한 증액된 차임의 이행기는 법원 결정 시가 아니라 증액청구의 의사표시가 상대방에게 도달한 때로 보아야 한다고 보는 흐름이 있다는 설명을 들었습니다. 다만 약정의 내용과 증액청구 시점, 적정 차임 산정 등 구체적 사정에 따라 결론이 달라질 수 있다는 얘기도 함께 들어, 제 사건에서 증액 차임의 범위와 이행기가 어떻게 정리되는지, 보증금과의 관계는 어떤지부터 가늠하기 어렵습니다. 저는 결론을 단정하기보다, 임대인의 증액청구가 언제 도달했는지와 협의 경과를 정리해 증액 범위·이행기와 보증금 관계를 확인하고 싶은데, 임대차계약서·증액청구 내용증명·협의 내역이 있는데도 무엇부터 정리해 증액청구와 이행기 문제를 밝혀야 하는지 막막한 상태입니다." 민법 제628조는 차임 증감청구를, 주택임대차보호법은 차임 증액 제한을 정하는 영역입니다. 판례·실무는 협의 불성립 시 법원이 정한 차임이 증액청구 도달 시로 소급해 효력이 생기고 그 이행기도 도달 시로 본 사례 흐름이 있는 영역입니다. 차임 증액청구 + 협의 불성립 + 법원 결정 이행기 결합은 \'증액청구 도달 시점·소급 효력·이행기\' 검토가 가능한 트랙입니다. 피해자라면 ① 증액청구 도달 ② 협의 경과 ③ 증액 범위·이행기 ④ 협의·대응 ⑤ 보증금 관계 5중 트랙이 가능한 영역. 대응은 ① 도달 ② 협의 ③ 이행기 ④ 대응 ⑤ 보증금 5단계로 검토해볼 수 있습니다. 피해자라면 결론을 단정하기보다 관련 자료를 정리해 대응 여지를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 차임 증액청구 협의 불성립 법원 결정 이행기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증액청구 도달, 협의 경과, 증액 범위·이행기, 협의·대응, 보증금 관계 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증액청구 도달</strong> — 임대인의 차임 증액청구가 언제 어떤 방식으로 도달했는지 정리.</li>\n<li><strong>② 협의 경과</strong> — 인상 폭·조건에 대한 협의 경과와 불성립 여부를 정리.</li>\n<li><strong>③ 증액 범위·이행기</strong> — 법원이 정하는 적정 차임의 범위와 증액청구 도달 시로 소급하는 이행기를 검토.</li>\n<li><strong>④ 협의·대응</strong> — 과도한 증액 요구에 대해 약정·법리 근거로 대응.</li>\n<li><strong>⑤ 보증금 관계</strong> — 증액 차임과 보증금·연체 관계를 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 협의로 차임을 조정하기로 약정한 경우 협의가 성립하지 않으면 법원이 정한 적정 차임에 따르되 그 차임은 증액청구 도달 시로 소급해 효력이 생기고 이행기도 도달 시로 보는 영역이라, 증액청구 도달 시점과 협의 경과를 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금·차임 대응 5단계',
        content:
          '<p><strong>A. KLAC·전세사기피해지원센터·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증액청구 도달 확인 (즉시~수일)</strong> — 임대인의 증액청구 내용증명·통지의 도달 시점을 정리.</li>\n<li><strong>2단계 — 협의 경과 정리 (수일 내)</strong> — 인상 폭·조건에 대한 협의 경과와 불성립 여부를 정리.</li>\n<li><strong>3단계 — 증액 범위·이행기 검토 (협의 전)</strong> — 적정 차임 범위와 도달 시 소급 이행기를 정리해 대응 논리를 마련.</li>\n<li><strong>4단계 — 협의·내용증명 (기한 내)</strong> — 약정·법리를 근거로 과도한 증액에 대해 내용증명 등으로 대응.</li>\n<li><strong>5단계 — 조정·소송 검토 (협의 결렬 시)</strong> — 차임증액·보증금 관련 조정·소송 등 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 차임 증액청구 협의 불성립 법원 결정 이행기 보증금 다툼 증액청구 도달·이행기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 증액청구·협의·이행기 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 (차임 조정 약정)</strong></li>\n<li><strong>임대인 증액청구 내용증명·통지</strong></li>\n<li><strong>증액청구 도달 시점 자료</strong></li>\n<li><strong>협의 경과·불성립 관련 자료</strong></li>\n<li><strong>차임·보증금 납입 내역</strong></li>\n<li><strong>인근 시세·적정 차임 관련 자료</strong></li>\n<li><strong>협의·내용증명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차임 증액 다툼은 증액청구가 언제 도달했는지가 이행기 판단의 기준이 되므로, 임대인의 증액청구 내용증명·통지의 도달 시점을 정리해두는 것이 핵심입니다. 협의가 어떻게 진행됐고 왜 불성립했는지도 기록으로 남겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약정 취지</strong> — 협의로 차임을 조정하기로 한 약정의 취지가 어떠한지.</li>\n<li><strong>협의 불성립 처리</strong> — 협의가 안 되면 법원이 정한 적정 차임에 따르는지.</li>\n<li><strong>소급 효력</strong> — 법원이 정한 차임이 증액청구 도달 시로 소급하는지.</li>\n<li><strong>이행기</strong> — 증액 차임의 이행기가 법원 결정 시인지 도달 시인지.</li>\n<li><strong>보증금 관계</strong> — 증액 차임과 보증금·연체 관계가 어떻게 정리되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (피해 상담·결정)</strong></li>\n<li><strong>주택도시보증공사 HUG 1566-9009 (보증·상담)</strong></li>\n<li><strong>대법원 전자소송 (차임·보증금 관련 소송)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 협의 불성립 시 법원이 정한 차임의 이행기',
        summary:
          '대법원 2015다239508(대법원, 2018.03.15 선고) 영역에서 법원은 임대차계약을 하면서 임대인이 일정 기간 경과 시마다 물가상승 등 경제사정 변경을 이유로 임차인과의 협의에 의하여 차임을 조정할 수 있도록 약정하였다면, 그 취지는 임대인에게 상호 합의에 의하여 차임을 증액할 수 있는 권리를 부여하되 인상요인이 생겼는데도 임차인이 인상을 거부하여 협의가 성립하지 않는 경우에는 법원이 물가상승 등 여러 요인을 고려하여 정한 적정한 액수의 차임에 따르기로 한 것으로 보아야 한다고 밝혔습니다. 나아가 임대인이 민법 제628조에 의하여 장래에 대한 차임 증액을 청구하였으나 당사자 사이에 협의가 성립되지 아니하여 법원이 결정해 주는 차임은 증액청구의 의사표시를 한 때에 소급하여 효력이 생기므로, 특별한 사정이 없는 한 증액된 차임의 이행기는 법원 결정 시가 아니라 증액청구의 의사표시가 상대방에게 도달한 때로 보아야 한다고 판시했습니다. 이는 차임 증액의 효력 발생 시점이 증액청구 도달 시로 소급함을 보여 줍니다. 차임 증액청구 다툼 사안에서도 증액청구 도달 시점과 협의 경과를 정리해 증액 범위·이행기와 보증금 관계를 검토해볼 수 있습니다.',
        takeaway: '임대인 차임 증액청구 + 협의 불성립 + 법원 결정 이행기 결합 시 증액청구 도달 시점·소급 효력·이행기 검토 영역 — 임대차계약서·증액청구 내용증명·협의 내역 정리 후 변호사 상담 권장.',
      },
    ],
    faq: [
      {
        question: '협의에 응하지 않으면 차임은 어떻게 정해지나요?',
        answer:
          '<strong>협의가 안 되면 법원이 정한 적정 차임에 따르는 것으로 본 영역입니다.</strong> 약정 내용을 정리하세요.',
      },
      {
        question: '법원이 정한 증액 차임은 언제부터 효력이 생기나요?',
        answer:
          '<strong>증액청구 의사표시가 도달한 때로 소급해 효력이 생기는 영역입니다.</strong> 도달 시점을 확인하세요.',
      },
      {
        question: '지난 기간까지 소급해 다 물어야 하나요?',
        answer:
          '<strong>이행기가 도달 시로 보아 그 시점 이후분이 문제되는 영역입니다.</strong> 증액청구 시점을 정리하세요.',
      },
      {
        question: '인상 폭이 과하다는 점은 어떻게 다투나요?',
        answer:
          '<strong>적정 차임 산정과 약정 취지를 함께 보아야 하는 영역입니다.</strong> 인근 시세·협의 경과를 정리하세요.',
      },
      {
        question: '보증금을 지키려면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>증액청구 도달 시점과 협의 경과 확인이 출발점인 영역입니다.</strong> 임대차계약서·증액청구 내용증명부터 확보하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '사정변경 임대차 해지 보증금 반환 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-changed-circumstances-lease-termination-deposit-return-track' },
      { label: '전세계약 특약 모호 해석 보증금 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-lease-special-clause-ambiguous-interpretation-standard-deposit-track' },
      { label: '전세사기 어디부터 시작 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '보증금 미반환 즉시 대응 트랙', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
    ],
  },
];
