import { SpokePage } from '../spoke-pages';

// batch123 assault(4)+dui(3)+jeonse-fraud(3) — 10개 (2026-07-13)
//
// 고유 존재 이유:
// 1. assault-driving-driver-attack-third-party-injury-aggravated-result-accused-defense — 운행 중 자동차 운전자를 폭행·협박하다 그로 인해 승객·보행자 등 제3자가 상해를 입어 특가법 제5조의10 제2항 결과적 가중범으로 기소된 사람이 폭행·협박과 상해 결과 사이 인과관계를 다투는 방어 페이지
// 2. assault-citizen-arrest-injury-justifiable-act-dispute-accused-defense — 상대의 범행을 제지·현행범 체포하려다 상해를 입힌 사람이 그 행위가 적법한 현행범 체포로서 정당행위에 해당하는지 다투는 방어 페이지
// 3. assault-crime-organization-membership-activity-single-crime-accused-defense — 폭력조직에 가입했다는 이유로 폭처법상 범죄단체 구성·가입·활동으로 기소된 사람이 가입과 활동의 죄수(포괄일죄)를 다투는 방어 페이지
// 4. assault-stop-and-frisk-no-id-lawful-duty-resistance-accused-defense — 경찰 불심검문에 저항하다 경찰관에게 상해를 입혀 공무집행방해·상해로 기소된 사람이 신분증 미제시로 불심검문이 위법했는지 다투는 방어 페이지
// 5. dui-police-preventive-restraint-lawfulness-measurement-refusal-accused-defense — 음주운전 의심 상황에서 경찰의 제지 조치에 저항하며 음주측정을 거부해 입건된 사람이 경직법 제6조 제1항 제지 조치의 적법성을 다투는 방어 페이지
// 6. dui-unconscious-driver-warrantless-blood-draw-evidence-accused-defense — 음주 교통사고 후 의식불명 상태로 병원에 이송된 운전자에 대해 영장 없이 채취한 혈액의 증거능력을 다투는 방어 페이지
// 7. dui-detained-defendant-service-by-publication-unlawful-appeal-recovery-accused-defense — 별건으로 수감 중인데 음주·무면허 사건 서류가 공시송달돼 본인 없이 유죄를 받은 사람이 공시송달의 위법과 상소권회복을 다투는 방어 페이지
// 8. jeonse-fraud-rental-house-fire-tenant-liability-deposit-deduction-track — 전세로 살던 주택에 화재가 나 임대인이 보증금에서 수리비를 공제하거나 손해배상을 청구하려 할 때 임차인의 손해배상책임 범위를 정리하는 피해자 페이지
// 9. jeonse-fraud-lease-end-deposit-unreturned-holdover-rent-unjust-enrichment-track — 전세 종료 후 보증금을 못 받아 계속 거주하는 임차인이 그 기간의 차임 상당 부당이득을 임대인에게 물어야 하는지 정리하는 피해자 페이지
// 10. jeonse-fraud-landlord-status-change-objection-right-deposit-return-track — 임대인이 바뀌자 새 임대인이 지위변경을 이유로 이의를 제기하며 보증금 반환을 미룰 때 기간만료 반환의무를 정리하는 피해자 페이지 (하급심)

export const spokesBatch123AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-driving-driver-attack-third-party-injury-aggravated-result-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-driving-driver-attack-third-party-injury-aggravated-result-accused-defense',
    keyword: '운행 중 운전자 폭행 제3자 상해 결과적 가중 다툼',
    questionKeyword:
      '버스 안에서 기사와 시비가 붙어 운행 중이던 기사를 밀쳤는데, 그 순간 차가 급정거하면서 다른 승객이 넘어져 다쳤습니다. 저는 그 승객을 직접 때린 것이 아니라 기사만 밀쳤을 뿐인데, 경찰은 운행 중인 자동차 운전자를 폭행해 승객을 상해에 이르게 했다며 특정범죄가중처벌법 운전자폭행 조항의 무거운 조항을 적용한다고 합니다. 저는 제 폭행과 그 승객의 상해가 정말 직접 연결되는지, 이렇게 결과적으로 무겁게 가중처벌되는 게 맞는지부터 헷갈립니다. 운행 중 운전자를 폭행·협박해 제3자가 상해를 입은 경우 결과적 가중범 성립을 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '운행 중 운전자 폭행 제3자 상해 결과적 가중 다툼 인과관계·구성요건 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '운행 중 운전자 폭행 제3자 상해 5단계 | 로앤가이드',
      description:
        '운행 중 기사를 밀쳤을 뿐인데 다른 승객 상해로 무겁게 가중된다니 막막하다면 결과적 가중범 인과관계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"운행 중인 버스나 택시 안에서 기사와 요금이나 진로 문제로 말다툼이 커져 운전 중이던 기사를 밀치거나 붙잡았는데, 그 과정에서 차량이 급정거하거나 흔들리며 다른 승객 또는 보행자가 넘어져 다쳤다는 이유로 특정범죄가중처벌법 운전자폭행 조항 중 상해 결과가 붙는 무거운 항으로 입건돼 당황한 사람입니다. 저는 그 다친 사람을 직접 때리거나 밀친 것이 아니라 운전자만 상대했을 뿐인데, 제 폭행·협박이 곧바로 제3자의 상해로 연결된다고 보아 결과적으로 무겁게 가중처벌되는 것이 맞는지부터 혼란스럽습니다. 특정범죄가중처벌법 제5조의10은 운행 중인 자동차의 운전자를 폭행하거나 협박하는 행위를 제1항에서, 그로 인해 운전자나 승객 또는 보행자 등을 상해나 사망에 이르게 한 경우를 제2항에서 더 무겁게 규정하고 있고, 판례·실무는 제2항을 제1항의 죄를 범해 사람을 상해·사망이라는 중한 결과에 이르게 한 결과적 가중범으로 보아, 운행 중인 운전자를 폭행·협박해 운전자나 승객 또는 보행자 등을 상해·사망에 이르게 하면 그 구성요건을 충족한다고 보는 흐름이 있다는 설명을 들었습니다. 다만 결과적 가중범이 성립하려면 폭행·협박 행위와 상해라는 결과 사이에 상당인과관계가 있어야 하고 그 결과 발생을 예견할 수 있어야 한다는 점, 제3자가 다친 경위에 다른 사정이 개입했는지 여부가 다툼의 여지가 있다는 얘기도 함께 들어, 제 사건에서 밀친 행위와 승객의 상해 사이에 인과관계가 실제로 인정되는지 가늠하기 어렵습니다. 혐의를 받고 있다면 제가 한 유형력의 정도와 상해가 발생한 경위부터 정확히 구분해야 한다고 보는데, 사실과 다르게 우연히 겹친 결과까지 제 책임으로 몰리는 것은 아닌지 걱정입니다. 블랙박스·CCTV·진단서·목격자 진술이 있는데도, 무엇부터 정리해 인과관계와 구성요건을 밝혀야 하는지 막막한 상태입니다." 특정범죄가중처벌법 제5조의10 제1항·제2항은 운행 중 운전자 폭행·협박과 그로 인한 상해·사망 결과를 정하는 영역입니다. 판례·실무는 제2항을 결과적 가중범으로 보되 폭행·협박과 상해 결과 사이 상당인과관계와 예견가능성을 요건으로 보는 본 사례 흐름이 있는 영역입니다. 운행 중 운전자 폭행 + 제3자 상해 + 결과적 가중 결합은 \'행위 태양·인과관계·예견가능성\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 행위 태양 ② 상해 경위 ③ 인과관계·예견가능성 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 행위 ② 경위 ③ 인과관계 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 우연한 결과까지 책임으로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 운행 중 운전자 폭행 제3자 상해 결과적 가중 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위 태양, 상해 경위, 인과관계·예견가능성, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 태양</strong> — 운전자에게 가한 유형력이 폭행·협박 중 어디에 해당하는지, 그 정도를 정리.</li>\n<li><strong>② 상해 경위</strong> — 제3자가 다친 것이 급정거·차량 흔들림 등 어떤 경로로 발생했는지 정리.</li>\n<li><strong>③ 인과관계·예견가능성</strong> — 폭행·협박과 상해 사이 상당인과관계, 결과 예견가능성이 인정되는지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 제1항(폭행·협박)과 제2항(결과적 가중) 적용 여부와 공판 흐름 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 블랙박스·CCTV·진단서·목격자 진술 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 제2항 결과적 가중범은 운행 중 운전자에 대한 폭행·협박과 제3자의 상해 결과 사이 상당인과관계와 예견가능성이 있어야 성립하는 영역이라, 유형력의 정도와 상해가 발생한 경로를 시점별로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 행위·상해 경위 확인 (즉시~수일)</strong> — 블랙박스·CCTV로 유형력의 정도와 제3자가 다친 경로를 정리.</li>\n<li><strong>2단계 — 적용 조항 확인 (입건 직후)</strong> — 제1항(폭행·협박)만인지 제2항(상해 결과)까지인지, 적용법조를 확인.</li>\n<li><strong>3단계 — 인과관계 검토 (수사 진행)</strong> — 폭행·협박과 상해 사이 상당인과관계·예견가능성 여부를 자료로 정리.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 인과관계·구성요건 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 합의·정상 검토 (병행)</strong> — 피해자와의 합의, 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">운행 중 운전자 폭행 제3자 상해 결과적 가중 다툼 인과관계·구성요건 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위·상해·인과관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 블랙박스 영상 (급정거·흔들림 경위)</strong></li>\n<li><strong>차내·현장 CCTV</strong></li>\n<li><strong>피해자 상해진단서</strong></li>\n<li><strong>목격자·다른 승객 진술</strong></li>\n<li><strong>사고·상해 발생 경위 정리 메모</strong></li>\n<li><strong>공소장·적용법조 (제1항·제2항 구분)</strong></li>\n<li><strong>합의·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결과적 가중범 다툼은 폭행·협박과 상해 사이 인과관계가 관건이므로, 밀친 시점과 급정거·상해 발생 시점의 선후를 블랙박스 시간으로 정리해두는 것이 핵심입니다. 상해 경위는 다른 승객·목격자 진술로 뒷받침해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>행위 태양</strong> — 운전자에 대한 유형력이 폭행·협박 중 무엇에 해당하는지.</li>\n<li><strong>상당인과관계</strong> — 폭행·협박과 제3자 상해 사이에 상당인과관계가 인정되는지.</li>\n<li><strong>예견가능성</strong> — 상해 결과 발생을 예견할 수 있었는지.</li>\n<li><strong>추상적 위험범 성격</strong> — 제5조의10의 죄가 공공 안전에 대한 위험을 가중처벌하는 성격인지.</li>\n<li><strong>제1항·제2항 구분</strong> — 상해 결과가 없거나 인과관계가 부정되면 제1항만 문제되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운행 중 운전자 폭행·협박과 제3자 상해의 결과적 가중',
        summary:
          '대법원 2014도13345(대법원, 2015.03.26 선고) 영역에서 법원은 특정범죄 가중처벌 등에 관한 법률 제5조의10 제1항, 제2항은 운행 중인 자동차의 운전자를 폭행하거나 협박하여 운전자나 승객 또는 보행자 등의 안전을 위협하는 행위를 엄중하게 다루어 교통질서를 확립하고 시민의 안전을 도모하려는 목적에서 신설된 것이라고 보았습니다. 나아가 이 죄는 제1항, 제2항 모두 운행 중인 자동차의 운전자를 대상으로 하는 범행이 교통질서와 시민의 안전 등 공공의 안전에 대한 위험을 초래할 수 있다고 보아 가중하는 이른바 추상적 위험범에 해당하고, 그중 제2항은 제1항의 죄를 범하여 사람을 상해나 사망이라는 중한 결과에 이르게 한 경우 제1항보다 무겁게 다루는 결과적 가중범 규정으로 해석할 수 있으므로, 운행 중인 자동차의 운전자를 폭행하거나 협박하여 운전자나 승객 또는 보행자 등을 상해나 사망에 이르게 하였다면 이로써 제2항의 구성요건을 충족한다고 판시했습니다. 이는 제2항 성립에는 폭행·협박과 중한 결과 사이의 연결이 전제됨을 보여 줍니다. 운행 중 운전자 폭행 다툼 사안에서도 유형력의 정도와 상해 발생 경위를 정리해 인과관계를 검토해볼 수 있습니다.',
        takeaway: '운행 중 운전자 폭행 + 제3자 상해 + 결과적 가중 결합 시 행위 태양·상당인과관계·예견가능성 검토 영역 — 블랙박스·CCTV·상해진단서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전자만 밀쳤는데 다른 승객 상해까지 제 책임이 되나요?',
        answer:
          '<strong>폭행·협박과 상해 사이 상당인과관계가 인정될 때 결과적 가중이 검토되는 영역입니다.</strong> 상해 발생 경위를 정리하세요.',
      },
      {
        question: '급정거로 다친 건데 예견할 수 없었다고 볼 수 있나요?',
        answer:
          '<strong>결과 발생 예견가능성이 다툼 대상인 영역입니다.</strong> 밀친 정도와 차량 상황을 블랙박스로 확인하세요.',
      },
      {
        question: '상해 결과가 없으면 어떤 조항이 문제되나요?',
        answer:
          '<strong>상해 결과나 인과관계가 부정되면 폭행·협박 조항만 문제될 수 있는 영역입니다.</strong> 적용법조를 확인하세요.',
      },
      {
        question: '피해자와 합의하면 어떻게 반영되나요?',
        answer:
          '<strong>합의는 양형에 반영될 수 있는 영역입니다.</strong> 합의 경위와 자료를 정리해두세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>유형력의 정도와 상해 경위 확인이 출발점인 영역입니다.</strong> 블랙박스·CCTV·진단서부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '보복운전 하차 대치 트랙', href: '/guide/assault/assault-road-rage-getout-track' },
      { label: '폭행 혐의 입건 첫 대응 트랙', href: '/guide/assault/assault-charged-first-response' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 2. assault-citizen-arrest-injury-justifiable-act-dispute-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-citizen-arrest-injury-justifiable-act-dispute-accused-defense',
    keyword: '현행범 체포 과정 상해 정당행위 다툼',
    questionKeyword:
      '가게 물건을 훔쳐 달아나려는 사람을 붙잡는 과정에서 상대가 저항하다 다쳤는데, 상대는 오히려 저를 상해로 고소했습니다. 저는 현행범을 붙잡은 것이라 정당행위라고 생각했는데, 경찰은 붙잡는 과정에서 제가 가한 유형력이 지나쳤다거나 상대가 현행범 요건을 갖추지 못했다고 볼 여지가 있다고 합니다. 저는 시민이 현행범을 붙잡다 상대가 다치면 어디까지 정당행위로 인정되는지, 어떤 요건을 갖춰야 위법성이 없다고 보는지부터 헷갈립니다. 현행범 체포 과정의 상해가 정당행위에 해당하는지 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '현행범 체포 과정 상해 정당행위 다툼 체포요건·상당성 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '현행범 체포 상해 정당행위 5단계 | 로앤가이드',
      description:
        '현행범을 붙잡다 상대가 다쳐 오히려 상해로 고소당해 막막하다면 현행범 체포 정당행위 요건 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"물건을 훔쳐 달아나려는 사람이나 눈앞에서 범행을 저지르는 사람을 제지·체포하려고 붙잡는 과정에서 상대가 심하게 저항하다 넘어지거나 부딪혀 다쳤는데, 정작 상대가 저를 상해로 고소하는 바람에 가해자로 입건돼 당황한 사람입니다. 저는 현행범을 붙잡은 것이니 당연히 정당행위로 위법성이 없다고 생각했는데, 수사기관은 제가 붙잡는 과정에서 가한 유형력이 필요한 한도를 넘어섰다거나 상대가 애초에 현행범 체포 요건을 갖춘 사람이 아니었을 수 있다고 보아, 정당행위로 인정되지 않을 여지를 언급해 혼란스럽습니다. 형사소송법은 현행범인은 누구든지 영장 없이 체포할 수 있도록 정하고 있고, 판례·실무는 사인이 현행범인을 체포하는 행위가 적법한 현행범 체포로서 사회상규에 어긋나지 않는 정당행위에 해당하려면 체포 대상이 실제로 범죄의 실행 중이거나 실행 직후인 현행범인의 요건을 갖추어야 하고 체포에 필요한 상당한 한도 안에서 이루어져야 한다고 보는 흐름이 있다는 설명을 들었습니다. 다만 체포 대상이 그 요건을 갖추지 못했거나 붙잡는 과정의 유형력이 상당성을 넘어선 경우에는 정당행위로 정당화되지 않고 상해의 죄책을 다투게 될 수 있다는 얘기도 함께 들어, 제 사건에서 상대가 정말 현행범이었는지, 제가 가한 힘이 붙잡는 데 필요한 한도 안이었는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 체포 당시 상대의 행동과 제가 붙잡은 방법·정도부터 정확히 구분해야 한다고 보는데, 사실과 다르게 제 제지 행위 전체가 위법한 폭력으로 몰리는 것은 아닌지 걱정입니다. 현장 CCTV·목격자 진술·신고 기록이 있는데도, 무엇부터 정리해 현행범 체포 요건과 상당성을 밝혀야 하는지 막막한 상태입니다." 형사소송법 제212조는 현행범인 체포를, 형법 제20조는 정당행위를 정하는 영역입니다. 판례·실무는 사인의 현행범 체포가 정당행위가 되려면 체포 요건과 상당성을 갖추어야 하고, 이를 갖추지 못하면 정당행위로 보기 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 현행범 체포 + 상해 + 정당행위 다툼 결합은 \'체포 요건·상당성·위법성 조각\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 상대 행동·현행범 요건 ② 체포 방법·정도 ③ 상당성·위법성 조각 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 요건 ② 방법 ③ 상당성 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 제지 행위 전체가 위법으로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 현행범 체포 과정 상해 정당행위 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대 행동·현행범 요건, 체포 방법·정도, 상당성·위법성 조각, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상대 행동·현행범 요건</strong> — 붙잡은 상대가 범죄 실행 중이거나 직후인 현행범 요건을 갖췄는지 정리.</li>\n<li><strong>② 체포 방법·정도</strong> — 붙잡은 방식과 가한 힘의 정도를 시점별로 정리.</li>\n<li><strong>③ 상당성·위법성 조각</strong> — 체포에 필요한 상당한 한도 안이었는지, 정당행위로 위법성이 조각되는지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 상해 입건 경위와 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — CCTV·목격자 진술·신고 기록 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사인의 현행범 체포가 정당행위가 되려면 체포 대상이 현행범 요건을 갖추고 체포가 필요한 상당한 한도 안에서 이뤄져야 하는 영역이라, 상대의 행동과 붙잡은 방법·정도를 CCTV와 진술로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현행범 요건 확인 (즉시~수일)</strong> — 붙잡을 당시 상대가 범행 실행 중이거나 직후였는지 CCTV·목격자로 정리.</li>\n<li><strong>2단계 — 체포 방법·정도 정리 (입건 직후)</strong> — 붙잡은 방식과 가한 힘의 정도, 상대가 다친 경위를 시점별로 정리.</li>\n<li><strong>3단계 — 상당성 검토 (수사 진행)</strong> — 체포에 필요한 한도를 넘어서지 않았는지, 정당행위 주장을 자료로 뒷받침.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 현행범 체포·정당행위 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 합의·정상 검토 (병행)</strong> — 필요 시 합의 병행 또는 정상 자료 정리 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">현행범 체포 과정 상해 정당행위 다툼 체포요건·상당성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현행범 요건·체포 방법·상당성 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스 영상</strong></li>\n<li><strong>상대의 범행 정황 자료 (도난품·목격)</strong></li>\n<li><strong>목격자 진술</strong></li>\n<li><strong>112 신고 기록·시각</strong></li>\n<li><strong>체포 경위·유형력 정리 메모</strong></li>\n<li><strong>상대·본인 상해 관련 기록</strong></li>\n<li><strong>반성·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정당행위 다툼은 상대가 현행범이었는지와 붙잡은 힘이 상당한 한도였는지가 관건이므로, 범행 정황과 체포 경위를 CCTV·신고 기록으로 시점별로 정리해두는 것이 핵심입니다. 112 신고 시각은 현행범 요건 판단에 중요하므로 통화 기록을 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>현행범 요건</strong> — 붙잡은 상대가 범죄 실행 중이거나 직후인 현행범이었는지.</li>\n<li><strong>체포 상당성</strong> — 붙잡는 데 필요한 상당한 한도 안의 유형력이었는지.</li>\n<li><strong>위법성 조각</strong> — 정당행위로 위법성이 조각될 수 있는지.</li>\n<li><strong>과잉 여부</strong> — 필요한 한도를 넘은 부분이 있다면 어디까지인지.</li>\n<li><strong>쌍방 관계</strong> — 상대의 저항·가해와 본인 대응의 선후·정도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 현행범 체포 과정의 상해와 정당행위 판단',
        summary:
          '대법원 2016도3048(대법원, 2020.06.11 선고) 영역에서 법원은 상대방을 뒤쫓아 가 붙잡으려는 과정에서 상해를 입게 한 행위에 대해, 그 행위가 적법한 현행범인 체포로서 정당행위에 해당한다고 보아 무죄로 판단한 원심에 법리오해의 잘못이 있다고 보았습니다. 즉 사인이 현행범인을 체포하는 행위가 정당행위로 위법성이 조각되려면 체포 대상이 실제로 현행범인의 요건을 갖추어야 함을 전제로, 그 요건을 갖추지 못한 경우에는 붙잡는 과정에서 상해를 입혔다는 사정만으로 곧바로 정당행위에 해당한다고 볼 수 없다는 취지로 판단했습니다. 이는 현행범 체포를 이유로 한 유형력이라도 체포 대상의 현행범 요건과 체포의 상당성을 갖추었는지에 따라 정당행위 인정 여부가 달라짐을 보여 줍니다. 현행범 체포 과정 상해 다툼 사안에서도 상대의 현행범 요건과 붙잡은 방법·정도를 정리해 정당행위 인정 여지를 검토해볼 수 있습니다.',
        takeaway: '현행범 체포 + 상해 + 정당행위 다툼 결합 시 체포 요건·상당성·위법성 조각 검토 영역 — CCTV·목격자 진술·112 신고 기록 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '현행범을 붙잡다 상대가 다치면 무조건 정당행위인가요?',
        answer:
          '<strong>체포 대상이 현행범 요건을 갖추고 체포가 상당한 한도 안이어야 정당행위가 검토되는 영역입니다.</strong> 붙잡은 경위를 정리하세요.',
      },
      {
        question: '상대가 현행범이 아니었다고 하면 어떻게 되나요?',
        answer:
          '<strong>현행범 요건을 갖추지 못했다면 정당행위 인정이 어려워질 수 있는 영역입니다.</strong> 범행 정황 자료를 확보하세요.',
      },
      {
        question: '붙잡는 힘이 과했다고 보는 기준은 무엇인가요?',
        answer:
          '<strong>체포에 필요한 상당한 한도를 넘었는지가 기준인 영역입니다.</strong> 유형력의 정도를 CCTV로 확인하세요.',
      },
      {
        question: '오히려 제가 고소당했는데 맞고소해야 하나요?',
        answer:
          '<strong>상대의 저항·가해 정도에 따라 별도 검토가 필요한 영역입니다.</strong> 상대 행동을 시점별로 기록하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>현행범 요건과 체포 경위 확인이 출발점인 영역입니다.</strong> CCTV·신고 기록부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '정당방위 입증 방어 범위 트랙', href: '/guide/assault/assault-self-defense-proof-defensive-boundary-track' },
      { label: '위법 현행범 체포 대항 트랙', href: '/guide/assault/assault-unlawful-arrest-resistance-self-defense-accused-track' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 3. assault-crime-organization-membership-activity-single-crime-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-crime-organization-membership-activity-single-crime-accused-defense',
    keyword: '폭력 범죄단체 가입 활동 포괄일죄 죄수 다툼',
    questionKeyword:
      '지인을 따라 어울리던 모임이 폭력조직으로 지목되면서, 저는 폭력행위처벌법상 범죄단체에 가입하고 구성원으로 활동했다는 이유로 기소됐습니다. 저는 단순히 가입만 했는지, 아니면 적극적으로 활동까지 했는지에 따라 죄가 어떻게 성립하는지, 가입과 활동이 각각 별개의 죄로 처리되는지 아니면 하나의 죄로 묶이는지부터 헷갈립니다. 검찰은 가입과 활동을 모두 문제 삼는데, 이게 이중으로 무겁게 평가되는 건 아닌지 걱정입니다. 폭력 범죄단체 가입과 활동의 죄수(포괄일죄)를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '폭력 범죄단체 가입 활동 포괄일죄 죄수 다툼 활동 실질·죄수 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '범죄단체 가입 활동 포괄일죄 5단계 | 로앤가이드',
      description:
        '단순 가입인데 활동까지 이중으로 무겁게 평가될까 막막하다면 범죄단체 가입·활동 포괄일죄 죄수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지인을 따라 어울리던 모임이나 조직이 수사 과정에서 폭력조직으로 지목되면서, 폭력행위 등 처벌에 관한 법률상 범죄단체를 구성하거나 이에 가입하고 구성원으로 활동했다는 이유로 기소돼 당황한 사람입니다. 저는 제가 단순히 이름만 올려 가입한 정도인지, 아니면 실제로 조직의 지시에 따라 적극적으로 활동한 것으로 평가되는지에 따라 죄가 어떻게 성립하는지, 그리고 가입 행위와 활동 행위가 각각 별개의 죄로 따로 처벌되는지 아니면 하나의 죄로 묶여 평가되는지부터 혼란스럽습니다. 폭력행위 등 처벌에 관한 법률 제4조 제1항은 그 법에 규정된 범죄행위를 목적으로 하는 단체를 구성하거나 이에 가입하는 행위 또는 구성원으로 활동하는 행위를 규율하고 있는데, 판례·실무는 이것이 구체적인 범죄행위의 실행 여부를 불문하고 범죄단체의 생성 및 존속 자체를 막으려는 데 취지가 있고, 여기서 말하는 범죄단체 구성원으로서의 활동이란 범죄단체의 내부 규율 및 통솔 체계에 따른 조직적·집단적 의사 결정에 기초하여 행하는 범죄단체의 존속·유지를 지향하는 적극적인 행위를 의미한다고 보는 흐름이 있다는 설명을 들었습니다. 나아가 범죄단체의 구성이나 가입은 구성원으로서의 활동을 예정하는 것이고 활동은 구성이나 가입을 전제로 하므로, 구성하거나 가입한 사람이 더 나아가 구성원으로 활동하는 경우 이는 포괄일죄의 관계에 있다는 얘기도 함께 들어, 제 사건에서 제 행위가 적극적 활동에 해당하는지, 가입과 활동이 하나의 죄로 묶여 평가되는지 가늠하기 어렵습니다. 혐의를 받고 있다면 제가 실제로 한 행동이 조직의 의사결정에 따른 적극적 활동인지부터 구분해야 한다고 보는데, 사실과 다르게 단순한 어울림까지 조직 활동으로 몰리는 것은 아닌지 걱정입니다. 대화 기록·모임 경위·역할 관련 자료가 있는데도, 무엇부터 정리해 활동의 실질과 죄수를 밝혀야 하는지 막막한 상태입니다." 폭력행위 등 처벌에 관한 법률 제4조는 범죄단체 구성·가입·활동을 정하는 영역입니다. 판례·실무는 구성·가입과 활동이 포괄일죄 관계에 있고, 활동은 조직적 의사결정에 기초한 적극적 행위를 의미한다고 보는 본 사례 흐름이 있는 영역입니다. 범죄단체 가입 + 활동 + 포괄일죄 결합은 \'활동의 실질·죄수·가담 정도\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 가입 경위 ② 활동의 실질 ③ 죄수·포괄일죄 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 가입 ② 활동 ③ 죄수 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 단순한 어울림이 적극적 활동으로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 폭력 범죄단체 가입 활동 포괄일죄 죄수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입 경위, 활동의 실질, 죄수·포괄일죄, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입 경위</strong> — 언제 어떤 경위로 가입한 것으로 지목됐는지, 실제 가입 의사가 있었는지 정리.</li>\n<li><strong>② 활동의 실질</strong> — 문제된 행위가 조직적 의사결정에 기초한 적극적 활동인지 단순 어울림인지 정리.</li>\n<li><strong>③ 죄수·포괄일죄</strong> — 가입과 활동이 포괄일죄로 묶이는지, 이중 평가 여부를 검토.</li>\n<li><strong>④ 형사 절차</strong> — 공소사실과 적용법조, 공판 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 대화 기록·모임 경위·역할 관련 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 범죄단체 구성원 활동은 내부 규율·통솔 체계에 따른 조직적 의사결정에 기초한 적극적 행위를 의미하고 가입과 활동은 포괄일죄 관계로 보는 영역이라, 문제된 행위가 적극적 활동에 해당하는지와 가담 정도를 대화 기록·역할 자료로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입 경위 확인 (즉시~수일)</strong> — 가입으로 지목된 경위와 실제 의사·역할을 정리.</li>\n<li><strong>2단계 — 활동 실질 정리 (수사 진행)</strong> — 문제된 행위가 조직적 의사결정에 따른 적극적 활동인지 단순 어울림인지 구분해 정리.</li>\n<li><strong>3단계 — 죄수 검토 (공판 전)</strong> — 가입과 활동이 포괄일죄로 묶여 평가되는지, 이중 평가 여부를 검토.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 활동 실질·죄수 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 정상·자료 검토 (병행)</strong> — 가담 정도에 따른 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">폭력 범죄단체 가입 활동 포괄일죄 죄수 다툼 활동 실질·죄수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 가입·활동·죄수 갈래입니다.</strong></p>\n<ul>\n<li><strong>공소장 (구성·가입·활동 공소사실)</strong></li>\n<li><strong>가입 경위 관련 자료 (지목 근거)</strong></li>\n<li><strong>대화·메시지 기록 (역할·지시 여부)</strong></li>\n<li><strong>모임 참석 경위 정리 메모</strong></li>\n<li><strong>활동 실질 관련 반박 자료</strong></li>\n<li><strong>죄수·포괄일죄 정리 메모</strong></li>\n<li><strong>반성·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 죄수 다툼은 활동이 조직적 의사결정에 따른 적극적 행위인지가 관건이므로, 대화·메시지 기록에서 지시·역할 관계가 드러나는지를 정리해두는 것이 핵심입니다. 가입과 활동이 포괄일죄로 묶이는지도 변호인과 함께 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가입의 실질</strong> — 실제 가입 의사와 경위가 있었는지.</li>\n<li><strong>활동의 적극성</strong> — 조직적 의사결정에 기초한 적극적 활동인지 단순 어울림인지.</li>\n<li><strong>포괄일죄</strong> — 가입과 활동이 하나의 죄로 묶여 평가되는지.</li>\n<li><strong>이중 평가</strong> — 같은 행위가 중복해서 무겁게 평가되는 것은 아닌지.</li>\n<li><strong>가담 정도</strong> — 조직 내 역할과 가담 정도가 양형에 어떻게 반영되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 범죄단체 구성·가입과 구성원 활동의 죄수',
        summary:
          '대법원 2015도7081(대법원, 2015.09.10 선고) 영역에서 법원은 폭력행위 등 처벌에 관한 법률 제4조 제1항이 그 법에 규정된 범죄행위를 목적으로 하는 단체를 구성하거나 이에 가입하는 행위 또는 구성원으로 활동하는 행위를 규율하는 것은, 구체적인 범죄행위의 실행 여부를 불문하고 범죄행위에 대한 예비·음모의 성격이 있는 범죄단체의 생성 및 존속 자체를 막으려는 데 취지가 있다고 보았습니다. 또한 범죄단체 구성원으로서의 활동이란 범죄단체의 내부 규율 및 통솔 체계에 따른 조직적·집단적 의사 결정에 기초하여 행하는 범죄단체의 존속·유지를 지향하는 적극적인 행위를 의미한다고 하였습니다. 나아가 범죄단체의 구성이나 가입은 구성원으로서의 활동을 예정하는 것이고 활동은 구성이나 가입을 전제로 하므로, 구성하거나 가입한 사람이 더 나아가 구성원으로 활동하는 경우 이는 포괄일죄의 관계에 있다고 판시했습니다. 이는 가입과 활동이 하나의 죄로 묶여 평가될 수 있음을 보여 줍니다. 범죄단체 가입·활동 다툼 사안에서도 활동의 실질과 가담 정도를 정리해 죄수를 검토해볼 수 있습니다.',
        takeaway: '범죄단체 가입 + 활동 + 포괄일죄 결합 시 활동의 실질·죄수·가담 정도 검토 영역 — 공소장·대화 기록·역할 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 가입만 했는데 활동까지 있었다고 보나요?',
        answer:
          '<strong>활동은 조직적 의사결정에 기초한 적극적 행위인지가 기준인 영역입니다.</strong> 실제 역할을 정리하세요.',
      },
      {
        question: '가입과 활동이 각각 별개 죄로 처벌되나요?',
        answer:
          '<strong>가입과 활동은 포괄일죄로 묶여 평가될 수 있는 영역입니다.</strong> 죄수 구조를 변호인과 정리하세요.',
      },
      {
        question: '조직 활동이 아니라 단순 어울림이면 어떻게 다투나요?',
        answer:
          '<strong>조직적 의사결정에 따른 적극적 활동이 아니었다는 점을 다툴 여지가 있는 영역입니다.</strong> 대화 기록을 확보하세요.',
      },
      {
        question: '가담 정도가 낮으면 어떻게 반영되나요?',
        answer:
          '<strong>역할과 가담 정도가 양형에 반영될 수 있는 영역입니다.</strong> 가담 경위를 구체적으로 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>가입 경위와 활동 실질 확인이 출발점인 영역입니다.</strong> 공소장·대화 기록부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '다중 가담 폭처법 공동책임 트랙', href: '/guide/assault/assault-multi-attacker-pokchoebop-joint-liability-evidence-track' },
      { label: '집단 다수 가담 트랙', href: '/guide/assault/assault-collective-multiple-participant-track' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 4. assault-stop-and-frisk-no-id-lawful-duty-resistance-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-stop-and-frisk-no-id-lawful-duty-resistance-accused-defense',
    keyword: '불심검문 신분증 미제시 공무집행방해 상해 다툼',
    questionKeyword:
      '길에서 경찰이 갑자기 불심검문을 하며 저를 붙잡길래 반발하다 실랑이가 벌어졌고, 그 과정에서 경찰관이 다쳐 공무집행방해와 상해로 입건됐습니다. 저는 경찰이 공무원증이나 신분증을 제대로 보여주지 않았으니 그 불심검문 자체가 위법한 공무집행이고, 위법한 공무집행에 저항한 것이라 죄가 안 되는 것 아닌지 궁금합니다. 그런데 경찰은 제가 검문하는 사람이 경찰이라는 걸 알고 있었으니 상관없다고 합니다. 불심검문 신분증 미제시 상황에서 공무집행방해·상해를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '불심검문 신분증 미제시 공무집행방해 상해 다툼 적법성·저항 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '불심검문 신분증 미제시 공무집행 5단계 | 로앤가이드',
      description:
        '경찰이 신분증도 안 보이고 검문했는데 공무집행방해로 몰려 막막하다면 불심검문 적법성 다툼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"길을 가다 경찰이 갑자기 불심검문을 하며 저를 세우거나 붙잡길래 이에 반발하다 실랑이가 벌어졌고, 그 과정에서 경찰관이 다쳤다는 이유로 공무집행방해와 상해로 입건돼 당황한 사람입니다. 저는 당시 경찰이 공무원증이나 신분을 표시하는 증표를 제대로 제시하지 않았으니 그 불심검문 자체가 위법한 공무집행이고, 위법한 공무집행에 대한 저항은 공무집행방해가 되지 않는 것 아닌지부터 혼란스럽습니다. 경찰관 직무집행법은 경찰관이 불심검문을 하고자 할 때에는 자신의 신분을 표시하는 증표를 제시하도록 정하고 있고, 시행령은 그 증표를 경찰관의 공무원증으로 정하고 있는데, 판례·실무는 불심검문을 하게 된 경위, 당시 현장 상황과 검문하는 경찰관들의 복장, 피고인이 공무원증 제시나 신분 확인을 요구하였는지 여부 등을 종합적으로 고려하여, 검문하는 사람이 경찰관이고 검문하는 이유가 범죄행위에 관한 것임을 피고인이 충분히 알고 있었다고 보이는 경우에는 신분증을 제시하지 않았다고 하여 그 불심검문이 위법한 공무집행이라고 볼 수 없다고 보는 흐름이 있다는 설명을 들었습니다. 다만 제가 실제로 검문하는 사람이 경찰인지 몰랐거나 복장·경위상 이를 알기 어려웠던 사정이 있다면 다툼의 여지가 있다는 얘기도 함께 들어, 제 사건에서 불심검문이 적법한 공무집행이었는지, 제 저항이 공무집행방해에 해당하는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 검문 당시 상황과 제가 경찰임을 알 수 있었는지부터 구분해야 한다고 보는데, 사실과 다르게 정당한 항의까지 폭력적 저항으로 몰리는 것은 아닌지 걱정입니다. 현장 CCTV·바디캠·목격자 진술이 있는데도, 무엇부터 정리해 불심검문의 적법성과 저항의 성격을 밝혀야 하는지 막막한 상태입니다." 경찰관 직무집행법 제3조는 불심검문과 신분 표시를, 형법 제136조·제257조는 공무집행방해·상해를 정하는 영역입니다. 판례·실무는 검문하는 사람이 경찰이고 검문 이유가 범죄에 관한 것임을 피고인이 충분히 알고 있었다면 신분증 미제시라도 위법한 공무집행으로 보지 않는 흐름이 있는 영역입니다. 불심검문 신분증 미제시 + 공무집행방해 + 상해 결합은 \'검문 적법성·인식 여부·저항 성격\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 검문 경위·복장 ② 경찰 인식 여부 ③ 저항 성격 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 인식 ③ 저항 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 정당한 항의가 폭력적 저항으로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 불심검문 신분증 미제시 공무집행방해 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 검문 경위·복장, 경찰 인식 여부, 저항 성격, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 검문 경위·복장</strong> — 불심검문 경위와 당시 경찰관의 복장·현장 상황을 정리.</li>\n<li><strong>② 경찰 인식 여부</strong> — 검문하는 사람이 경찰이고 그 이유가 범죄에 관한 것임을 알 수 있었는지 정리.</li>\n<li><strong>③ 저항 성격</strong> — 본인의 대응이 항의였는지, 경찰관 상해로 이어진 경위를 정리.</li>\n<li><strong>④ 형사 절차</strong> — 공무집행방해·상해 입건 경위와 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — CCTV·바디캠·목격자 진술 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 검문하는 사람이 경찰이고 검문 이유가 범죄에 관한 것임을 충분히 알고 있었다면 신분증 미제시만으로 위법한 공무집행으로 보기 어려운 영역이라, 검문 경위와 경찰임을 알 수 있었는지, 본인 저항의 성격을 CCTV·바디캠으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 검문 경위 확인 (즉시~수일)</strong> — 불심검문 경위, 경찰관 복장·현장 상황을 CCTV·바디캠으로 정리.</li>\n<li><strong>2단계 — 인식 여부 정리 (입건 직후)</strong> — 검문하는 사람이 경찰임을 알 수 있었는지, 공무원증 제시를 요구했는지 정리.</li>\n<li><strong>3단계 — 저항 성격 검토 (수사 진행)</strong> — 본인 대응이 항의였는지, 경찰관 상해로 이어진 경위를 구분해 정리.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 불심검문 적법성·저항 성격 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 합의·정상 검토 (병행)</strong> — 필요 시 합의 병행 또는 정상 자료 정리 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">불심검문 신분증 미제시 공무집행방해 상해 다툼 적법성·저항 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 검문 경위·인식·저항 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·경찰 바디캠 영상</strong></li>\n<li><strong>검문 경위·복장 정리 메모</strong></li>\n<li><strong>공무원증 제시 요구 여부 기록</strong></li>\n<li><strong>목격자 진술</strong></li>\n<li><strong>경찰관 상해 관련 자료</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>반성·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 불심검문 다툼은 검문하는 사람이 경찰임을 알 수 있었는지가 관건이므로, 경찰관 복장·순찰차 유무·현장 상황을 CCTV·바디캠으로 확인해두는 것이 핵심입니다. 공무원증 제시를 요구했는지도 판단에 영향을 주므로 그 경위를 기록해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신분증 제시</strong> — 경찰관이 공무원증 등 증표를 제시했는지.</li>\n<li><strong>경찰 인식 여부</strong> — 검문하는 사람이 경찰이고 이유가 범죄에 관한 것임을 알 수 있었는지.</li>\n<li><strong>검문 적법성</strong> — 위 사정을 종합해 불심검문이 적법한 공무집행이었는지.</li>\n<li><strong>저항 성격</strong> — 본인의 대응이 항의였는지, 유형력의 정도가 어떠했는지.</li>\n<li><strong>상해 경위</strong> — 경찰관 상해가 실랑이 과정에서 어떻게 발생했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 불심검문 신분증 미제시와 공무집행의 적법성',
        summary:
          '대법원 2014도7976(대법원, 2014.12.11 선고) 영역에서 법원은 경찰관 직무집행법 제3조 제4항이 경찰관이 불심검문을 하고자 할 때에는 자신의 신분을 표시하는 증표를 제시하여야 한다고 규정하고 시행령이 그 증표를 경찰관의 공무원증으로 정하고 있으나, 불심검문을 하게 된 경위, 불심검문 당시의 현장 상황과 검문을 하는 경찰관들의 복장, 피고인이 공무원증 제시나 신분 확인을 요구하였는지 여부 등을 종합적으로 고려하여, 검문하는 사람이 경찰관이고 검문하는 이유가 범죄행위에 관한 것임을 피고인이 충분히 알고 있었다고 보이는 경우에는 신분증을 제시하지 않았다고 하여 그 불심검문이 위법한 공무집행이라고 할 수 없다고 판시했습니다. 이는 신분증 미제시라는 형식적 사정만으로 곧바로 공무집행의 적법성이 부정되는 것은 아님을 보여 줍니다. 불심검문 신분증 미제시 다툼 사안에서도 검문 경위와 경찰임을 알 수 있었는지, 저항의 성격을 정리해 적법성과 방어 여지를 검토해볼 수 있습니다.',
        takeaway: '불심검문 신분증 미제시 + 공무집행방해 + 상해 결합 시 검문 적법성·인식 여부·저항 성격 검토 영역 — CCTV·바디캠·목격자 진술 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '경찰이 신분증을 안 보여줬으면 검문이 위법한가요?',
        answer:
          '<strong>경찰임을 충분히 알 수 있었다면 미제시만으로 위법으로 보기 어려운 영역입니다.</strong> 검문 경위를 정리하세요.',
      },
      {
        question: '위법한 공무집행에 저항한 거라고 볼 수 있나요?',
        answer:
          '<strong>검문 적법성이 인정되면 저항이 공무집행방해로 평가될 수 있는 영역입니다.</strong> 적법성부터 다퉈보세요.',
      },
      {
        question: '경찰인 줄 몰랐다는 점은 어떻게 다투나요?',
        answer:
          '<strong>복장·현장 상황상 경찰임을 알기 어려웠는지가 쟁점인 영역입니다.</strong> CCTV·바디캠을 확보하세요.',
      },
      {
        question: '경찰관 상해까지 겹치면 어떻게 되나요?',
        answer:
          '<strong>공무집행방해와 상해가 함께 평가될 수 있는 영역입니다.</strong> 상해 발생 경위를 구분해 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>검문 경위와 저항 성격 확인이 출발점인 영역입니다.</strong> CCTV·바디캠부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '공무집행 중 저항 대응 트랙', href: '/guide/assault/assault-public-official-on-duty-resistance-track' },
      { label: '위법 현행범 체포 대항 트랙', href: '/guide/assault/assault-unlawful-arrest-resistance-self-defense-accused-track' },
      { label: '폭행 혐의 어디부터 시작 트랙', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 혐의 방어 트랙', href: '/guide/assault/assault-accusation-defense' },
    ],
  },
  // ─── 5. dui-police-preventive-restraint-lawfulness-measurement-refusal-accused-defense ───
  {
    domain: 'dui',
    slug: 'dui-police-preventive-restraint-lawfulness-measurement-refusal-accused-defense',
    keyword: '음주 의심 경찰 제지 조치 적법성 측정거부 다툼',
    questionKeyword:
      '술을 마신 뒤 차에 타려는데 경찰이 다가와 운전을 막고 저를 제지했습니다. 저는 아직 운전을 시작하지도 않았는데 경찰이 몸으로 막는 게 지나치다고 생각해 실랑이를 벌였고, 이후 음주측정도 거부했다가 입건됐습니다. 저는 경찰이 이렇게 예방적으로 제지하는 조치가 어디까지 적법한지, 그 제지가 위법했다면 이후 측정거부도 문제가 안 되는 것 아닌지부터 헷갈립니다. 음주운전이 임박한 상황에서 경찰의 제지 조치 적법성과 음주측정거부를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '음주 의심 경찰 제지 조치 적법성 측정거부 다툼 제지요건·측정 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 의심 경찰 제지 조치 적법성 5단계 | 로앤가이드',
      description:
        '운전도 안 했는데 경찰이 몸으로 막고 측정거부로 입건돼 막막하다면 경찰 제지 조치 적법성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 차에 타려 하거나 시동을 걸려던 상황에서 경찰이 다가와 운전을 하지 못하도록 몸으로 막거나 붙잡는 방식으로 저를 제지했는데, 저는 아직 운전을 시작하지도 않았다고 생각해 그 제지가 지나치다고 반발하며 실랑이를 벌였고 이후 음주측정 요구도 거부했다가 입건돼 당황한 사람입니다. 저는 경찰이 아직 벌어지지 않은 음주운전을 미리 막겠다며 이렇게 예방적으로 제지하는 조치가 어디까지 적법한지, 만약 그 제지 조치가 위법했다면 그에 이어진 음주측정거부나 실랑이 과정의 다툼도 문제 삼기 어려운 것은 아닌지부터 혼란스럽습니다. 경찰관 직무집행법 제6조 제1항은 경찰관이 범죄행위가 눈앞에서 막 이루어지려고 하는 것을 볼 때 이를 예방하기 위하여 관계인에게 필요한 경고를 하고 그 행위로 인하여 사람의 생명·신체에 위해를 끼치거나 재산에 중대한 손해를 끼칠 우려가 있는 긴급한 경우에는 그 행위를 제지할 수 있도록 정하고 있는데, 판례·실무는 이러한 제지 조치가 적법한 직무집행으로 평가되려면 형사처벌의 대상이 되는 행위가 눈앞에서 막 이루어지려고 하는 것이 객관적으로 인정될 수 있는 상황이고, 당장 제지하지 않으면 곧 인명·신체에 위해를 미치거나 재산에 중대한 손해를 끼칠 우려가 있어 직접 제지하는 방법 외에는 결과를 막을 수 없는 절박한 사태여야 하며, 그 적법성은 제지 조치 당시의 구체적 상황을 기초로 판단해야 한다고 보는 흐름이 있다는 설명을 들었습니다. 다만 그 요건을 갖추지 못한 과도한 제지였는지 여부는 다툼의 여지가 있다는 얘기도 함께 들어, 제 사건에서 그 제지가 적법한 직무집행이었는지, 이후 측정거부가 어떻게 평가되는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 제지 당시의 구체적 상황부터 정확히 정리해야 한다고 보는데, 사실과 다르게 정당한 항의까지 공무집행 방해나 측정거부로 몰리는 것은 아닌지 걱정입니다. 현장 CCTV·바디캠·목격자 진술이 있는데도, 무엇부터 정리해 제지 조치의 적법성과 측정거부를 밝혀야 하는지 막막한 상태입니다." 경찰관 직무집행법 제6조는 범죄 예방을 위한 제지를, 도로교통법 제44조는 음주측정을 정하는 영역입니다. 판례·실무는 제지 조치가 적법하려면 절박한 사태 등 요건을 갖추어야 하고 그 적법성은 당시 구체적 상황을 기초로 판단한다고 보는 본 사례 흐름이 있는 영역입니다. 경찰 제지 조치 + 음주 의심 + 측정거부 결합은 \'제지 요건·적법성·측정거부 평가\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 제지 당시 상황 ② 제지 요건 ③ 측정거부 경위 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 상황 ② 요건 ③ 측정 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 정당한 항의가 방해로 평가되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 의심 경찰 제지 조치 적법성 측정거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 제지 당시 상황, 제지 요건, 측정거부 경위, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 제지 당시 상황</strong> — 운전 착수 여부, 경찰이 제지한 방식과 현장 상황을 정리.</li>\n<li><strong>② 제지 요건</strong> — 음주운전이 눈앞에서 막 이뤄지려는 절박한 사태였는지, 제지가 필요한 한도였는지 검토.</li>\n<li><strong>③ 측정거부 경위</strong> — 측정 요구 시점과 거부 경위, 고지 여부를 정리.</li>\n<li><strong>④ 형사 절차</strong> — 측정거부·공무집행방해 입건 경위와 공판 흐름 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — CCTV·바디캠·목격자 진술 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경찰의 제지 조치가 적법한 직무집행이 되려면 형사처벌 대상 행위가 눈앞에서 막 이뤄지려는 절박한 사태여야 하고 그 적법성은 당시 구체적 상황을 기초로 판단하는 영역이라, 운전 착수 여부와 제지 경위를 CCTV·바디캠으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 제지 상황 확인 (즉시~수일)</strong> — 운전 착수 여부와 경찰이 제지한 방식을 CCTV·바디캠으로 정리.</li>\n<li><strong>2단계 — 제지 요건 검토 (입건 직후)</strong> — 음주운전이 임박한 절박한 사태였는지, 제지가 필요한 한도였는지 정리.</li>\n<li><strong>3단계 — 측정거부 경위 정리 (수사 진행)</strong> — 측정 요구 시점·고지·거부 경위를 구분해 정리.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 제지 적법성·측정거부 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 행정·정상 검토 (병행)</strong> — 면허 행정 절차와 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 의심 경찰 제지 조치 적법성 측정거부 다툼 제지요건·측정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 제지 상황·요건·측정 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·경찰 바디캠 영상</strong></li>\n<li><strong>운전 착수 여부 관련 자료</strong></li>\n<li><strong>제지 경위·방식 정리 메모</strong></li>\n<li><strong>음주측정 요구·고지 기록</strong></li>\n<li><strong>측정거부 경위 정리</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>정상·면허 행정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 제지 조치 다툼은 당시 상황을 기초로 적법성을 판단하므로, 운전을 실제로 시작했는지와 경찰의 제지 방식·시점을 CCTV·바디캠으로 시점별로 정리해두는 것이 핵심입니다. 측정 요구와 거부의 선후·고지 여부도 기록해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>절박한 사태</strong> — 음주운전이 눈앞에서 막 이뤄지려는 상황이었는지.</li>\n<li><strong>제지 필요성</strong> — 직접 제지 외에는 결과를 막을 수 없는 사태였는지.</li>\n<li><strong>제지 방식</strong> — 제지의 방법·정도가 필요한 한도 안이었는지.</li>\n<li><strong>측정거부 평가</strong> — 측정 요구·고지 절차와 거부 경위가 어떻게 평가되는지.</li>\n<li><strong>당시 상황 기준</strong> — 적법성 판단이 사후가 아니라 당시 구체적 상황을 기준으로 이뤄지는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>운전면허 행정심판 (별도 트랙)</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경찰관 제지 조치의 적법성 판단 기준',
        summary:
          '대법원 2012도9937(대법원, 2013.06.13 선고) 영역에서 법원은 경찰관 직무집행법 제6조 제1항에 따른 경찰관의 제지 조치가 적법한 직무집행으로 평가될 수 있으려면, 형사처벌의 대상이 되는 행위가 눈앞에서 막 이루어지려고 하는 것이 객관적으로 인정될 수 있는 상황이고, 그 행위를 당장 제지하지 않으면 곧 인명·신체에 위해를 미치거나 재산에 중대한 손해를 끼칠 우려가 있는 상황이어서 직접 제지하는 방법 외에는 그러한 결과를 막을 수 없는 절박한 사태여야 한다고 보았습니다. 다만 경찰관의 제지 조치가 적법한지 여부는 제지 조치 당시의 구체적 상황을 기초로 판단하여야 하고 사후적으로 순수한 객관적 기준에서 판단할 것은 아니라고 판시했습니다. 이는 예방적 제지의 적법성이 요건과 당시 상황에 따라 달라짐을 보여 줍니다. 음주 의심 상황의 제지 조치 다툼 사안에서도 운전 착수 여부와 제지 경위를 정리해 적법성과 측정거부 평가를 검토해볼 수 있습니다.',
        takeaway: '경찰 제지 조치 + 음주 의심 + 측정거부 결합 시 제지 요건·적법성·측정거부 평가 검토 영역 — CCTV·바디캠·측정 요구 기록 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전을 시작하지도 않았는데 경찰이 막아도 되나요?',
        answer:
          '<strong>음주운전이 눈앞에서 막 이뤄지려는 절박한 사태여야 제지가 적법한 영역입니다.</strong> 당시 상황을 정리하세요.',
      },
      {
        question: '제지가 위법했다면 측정거부도 문제가 안 되나요?',
        answer:
          '<strong>제지 적법성과 측정거부 평가는 함께 검토되는 영역입니다.</strong> 제지 경위와 측정 요구 시점을 구분해 정리하세요.',
      },
      {
        question: '제지가 지나쳤는지는 어떻게 판단하나요?',
        answer:
          '<strong>직접 제지 외에는 결과를 막을 수 없는 사태였는지가 기준인 영역입니다.</strong> 제지 방식을 CCTV로 확인하세요.',
      },
      {
        question: '적법성은 언제를 기준으로 보나요?',
        answer:
          '<strong>제지 조치 당시의 구체적 상황을 기초로 판단하는 영역입니다.</strong> 당시 정황 자료를 확보하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>제지 당시 상황과 측정거부 경위 확인이 출발점인 영역입니다.</strong> CCTV·바디캠부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 측정 트랙', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '음주운전 적발 후 어디부터 시작 트랙', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '음주운전 형사 절차 총정리 트랙', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '음주측정 거부 처벌 트랙', href: '/guide/dui/dui-breath-test-refusal-track' },
    ],
  },
  // ─── 6. dui-unconscious-driver-warrantless-blood-draw-evidence-accused-defense ───
  {
    domain: 'dui',
    slug: 'dui-unconscious-driver-warrantless-blood-draw-evidence-accused-defense',
    keyword: '의식불명 운전자 영장 없는 강제채혈 증거능력 다툼',
    questionKeyword:
      '음주 상태로 운전하다 사고를 내고 의식을 잃어 병원으로 이송됐는데, 그 사이 경찰이 영장 없이 제 혈액을 채취해 혈중알코올농도를 감정했습니다. 저는 의식이 없어 동의한 적도 없고 영장도 없었는데 이렇게 채취한 혈액이 증거로 쓰일 수 있는지, 나중에 영장을 받으면 문제가 없어지는 건지부터 헷갈립니다. 저는 절차가 제대로 지켜지지 않았다면 그 결과도 증거에서 빠져야 하는 것 아닌지 궁금합니다. 의식불명 상태에서 영장 없이 이뤄진 강제채혈의 증거능력을 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '의식불명 운전자 영장 없는 강제채혈 증거능력 다툼 절차·사후영장 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '의식불명 영장 없는 강제채혈 증거 5단계 | 로앤가이드',
      description:
        '의식 없는 사이 영장도 없이 채혈된 혈액이 증거로 쓰일까 막막하다면 강제채혈 증거능력·사후영장 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주 상태로 운전하다 교통사고를 내고 의식을 잃어 병원으로 이송됐는데, 제가 의식이 없는 사이 경찰이 영장이나 동의 없이 제 혈액을 채취해 혈중알코올농도를 감정했다는 사실을 뒤늦게 알고 당황한 사람입니다. 저는 당시 동의한 적이 없고 법원의 영장도 없었는데 이렇게 채취된 혈액에 대한 감정 결과가 그대로 증거로 쓰일 수 있는지, 만약 나중에 사후에 영장을 받으면 문제가 사라지는 것인지, 아니면 절차가 지켜지지 않은 이상 그 결과가 증거에서 빠져야 하는 것인지부터 혼란스럽습니다. 판례·실무는 수사기관이 법원으로부터 영장 또는 감정처분허가장을 발부받지 않은 채 피의자의 동의 없이 그 신체로부터 혈액을 채취하고 사후에도 지체 없이 영장을 발부받지 않은 채 혈중알코올농도에 관한 감정을 의뢰하였다면, 이러한 과정을 거쳐 얻은 감정의뢰회보 등은 영장주의 원칙을 위반하여 수집한 증거로서 원칙적으로 피고인이나 변호인의 동의가 있더라도 유죄의 증거로 사용할 수 없다고 보는 흐름이 있다는 설명을 들었습니다. 다만 음주운전 중 교통사고를 야기한 뒤 피의자가 의식불명 상태에 빠져 호흡조사에 의한 측정이 불가능하고 채혈 동의를 받을 수도 없으며 감정처분허가장이나 사전 압수영장을 발부받을 시간적 여유도 없는 긴급한 상황에서는, 준현행범인의 요건이 갖추어져 있고 범행 직후라고 볼 수 있는 등 일정한 요건 아래 영장 없이 혈액을 채취할 수 있으나 이 경우에도 사후에 지체 없이 압수영장을 받아야 한다는 얘기도 함께 들어, 제 사건에서 채혈이 그러한 긴급 요건과 사후영장 요건을 갖추었는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 채혈 시점의 상황과 영장 절차부터 정확히 확인해야 한다고 보는데, 사실과 다르게 절차를 건너뛴 결과가 그대로 증거로 쓰이는 것은 아닌지 걱정입니다. 사고·이송 기록·채혈 시각·영장 관련 자료가 있는데도, 무엇부터 정리해 채혈의 증거능력을 밝혀야 하는지 막막한 상태입니다." 형사소송법 제215조·제216조·제308조의2는 압수·영장주의와 위법수집증거 배제를 정하는 영역입니다. 판례·실무는 영장 없이 동의 없이 채취한 혈액의 감정 결과는 원칙적으로 증거로 쓸 수 없되, 긴급한 상황의 예외적 채혈도 사후 압수영장을 받아야 한다고 보는 본 사례 흐름이 있는 영역입니다. 의식불명 + 영장 없는 채혈 + 증거능력 결합은 \'영장주의·긴급 요건·사후영장\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 채혈 경위·시점 ② 긴급 요건 ③ 사후영장 여부 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 긴급 ③ 사후영장 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 절차를 건너뛴 결과가 증거로 쓰이는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 의식불명 영장 없는 강제채혈 증거능력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채혈 경위·시점, 긴급 요건, 사후영장 여부, 형사 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채혈 경위·시점</strong> — 사고·이송 후 언제, 어떤 상태에서 채혈이 이뤄졌는지 정리.</li>\n<li><strong>② 긴급 요건</strong> — 호흡측정 불가·동의 불가·영장 발부 여유 없음 등 긴급 요건을 갖췄는지 검토.</li>\n<li><strong>③ 사후영장 여부</strong> — 채혈 후 지체 없이 사후 압수영장을 받았는지 확인.</li>\n<li><strong>④ 형사 절차</strong> — 감정 결과의 증거능력과 공판 흐름, 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 사고·이송 기록·채혈 시각·영장 관련 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영장·동의 없이 채취한 혈액의 감정 결과는 원칙적으로 증거로 쓸 수 없고, 긴급한 예외적 채혈도 사후 압수영장을 지체 없이 받아야 하는 영역이라, 채혈 시점과 긴급 요건·사후영장 절차를 이송·채혈 기록으로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채혈 경위 확인 (즉시~수일)</strong> — 사고·이송 후 채혈 시각과 당시 상태(의식·동의 여부)를 병원·수사 기록으로 정리.</li>\n<li><strong>2단계 — 긴급 요건 검토 (기록 확보 후)</strong> — 호흡측정 불가·영장 여유 없음 등 긴급 요건을 갖췄는지 정리.</li>\n<li><strong>3단계 — 사후영장 확인 (수사 진행)</strong> — 채혈 후 지체 없이 사후 압수영장을 받았는지, 그 시점을 확인.</li>\n<li><strong>4단계 — 공판 대응 (재판 일정)</strong> — 감정 결과의 증거능력 관련 의견을 정리해 진술.</li>\n<li><strong>5단계 — 행정·정상 검토 (병행)</strong> — 면허 행정 절차와 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">의식불명 운전자 영장 없는 강제채혈 증거능력 다툼 절차·사후영장 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 채혈 경위·긴급 요건·사후영장 갈래입니다.</strong></p>\n<ul>\n<li><strong>사고·이송 기록 (시각·경위)</strong></li>\n<li><strong>병원 진료·의식상태 기록</strong></li>\n<li><strong>채혈 시각·동의 여부 자료</strong></li>\n<li><strong>사후 압수영장 발부 여부·시점</strong></li>\n<li><strong>감정의뢰회보·감정서</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>정상·면허 행정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채혈 증거능력 다툼은 영장 절차의 준수 여부가 핵심이므로, 채혈 시각과 사후 압수영장 발부 시점을 나란히 정리해 지체가 있었는지 확인해두는 것이 핵심입니다. 당시 의식·동의 여부는 병원 진료 기록으로 뒷받침해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>영장주의</strong> — 영장·동의 없이 채취한 혈액의 감정 결과가 증거에서 배제되는지.</li>\n<li><strong>긴급 요건</strong> — 호흡측정 불가·영장 여유 없음 등 예외적 채혈 요건을 갖췄는지.</li>\n<li><strong>준현행범 요건</strong> — 범행 직후·증적 현저 등 요건이 인정되는지.</li>\n<li><strong>사후영장</strong> — 채혈 후 지체 없이 사후 압수영장을 받았는지.</li>\n<li><strong>동의의 효력</strong> — 피고인·변호인 동의가 있어도 증거로 쓸 수 없는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>운전면허 행정심판 (별도 트랙)</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영장 없는 강제채혈의 증거능력과 사후영장',
        summary:
          '대법원 2011도15258(대법원, 2012.11.15 선고) 영역에서 법원은 수사기관이 법원으로부터 영장 또는 감정처분허가장을 발부받지 아니한 채 피의자의 동의 없이 그 신체로부터 혈액을 채취하고 사후에도 지체 없이 영장을 발부받지 아니한 채 혈액 중 알코올농도에 관한 감정을 의뢰하였다면, 이러한 과정을 거쳐 얻은 감정의뢰회보 등은 영장주의 원칙을 위반하여 수집한 증거로서 원칙적으로 피고인이나 변호인의 동의가 있더라도 유죄의 증거로 사용할 수 없다고 보았습니다. 다만 음주운전 중 교통사고를 야기한 후 피의자가 의식불명 상태에 빠지는 등으로 호흡조사에 의한 측정이 불가능하고 채혈 동의를 받을 수 없으며 감정처분허가장이나 사전 압수영장을 받을 시간적 여유도 없는 긴급한 상황에서는, 준현행범인의 요건이 갖추어져 있고 범행 직후라고 볼 수 있는 등 일정한 요건 아래 영장 없이 혈액을 채취할 수 있으나 이 경우에도 사후에 지체 없이 압수영장을 받아야 한다고 판시했습니다. 이는 긴급한 채혈도 사후영장 절차를 갖추어야 증거로 쓸 수 있음을 보여 줍니다. 의식불명 채혈 다툼 사안에서도 채혈 시점과 사후영장 여부를 정리해 증거능력을 검토해볼 수 있습니다.',
        takeaway: '의식불명 + 영장 없는 채혈 + 증거능력 결합 시 영장주의·긴급 요건·사후영장 검토 영역 — 사고·이송 기록·채혈 시각·영장 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '의식이 없는 사이 채혈된 혈액도 증거가 되나요?',
        answer:
          '<strong>영장·동의 없이 채취한 혈액은 원칙적으로 증거에서 배제되는 영역입니다.</strong> 채혈 경위를 확인하세요.',
      },
      {
        question: '긴급한 상황이면 영장 없이 채혈해도 되나요?',
        answer:
          '<strong>일정한 긴급 요건 아래 예외가 인정되지만 사후영장이 필요한 영역입니다.</strong> 요건 충족 여부를 정리하세요.',
      },
      {
        question: '사후에 영장을 받으면 문제가 없어지나요?',
        answer:
          '<strong>지체 없이 사후 압수영장을 받았는지가 관건인 영역입니다.</strong> 영장 발부 시점을 확인하세요.',
      },
      {
        question: '제가 나중에 동의하면 증거로 쓸 수 있나요?',
        answer:
          '<strong>동의가 있어도 원칙적으로 증거로 쓸 수 없는 영역입니다.</strong> 절차 위반 여부를 다퉈보세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>채혈 시점과 사후영장 절차 확인이 출발점인 영역입니다.</strong> 사고·이송 기록부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '측정거부 채혈 영장 트랙', href: '/guide/dui/dui-test-refusal-warrant-blood-extraction' },
      { label: '병원 채혈 영장 트랙', href: '/guide/dui/dui-test-refusal-hospital-bed-blood-extraction-warrant-track' },
      { label: '음주운전 적발 후 어디부터 시작 트랙', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '음주운전 형사 절차 총정리 트랙', href: '/guide/dui/dui-criminal-procedure-overview' },
    ],
  },
  // ─── 7. dui-detained-defendant-service-by-publication-unlawful-appeal-recovery-accused-defense ───
  {
    domain: 'dui',
    slug: 'dui-detained-defendant-service-by-publication-unlawful-appeal-recovery-accused-defense',
    keyword: '수감 중 공시송달 음주 무면허 불출석 재판 상소권회복 다툼',
    questionKeyword:
      '다른 사건으로 교도소에 수감돼 있는 사이, 예전 음주·무면허 운전 사건의 재판 서류가 제 옛 주소로 공시송달되면서 제가 출석하지 못한 채 유죄가 선고돼 확정됐다는 걸 뒤늦게 알았습니다. 저는 수감 중이라 소재가 분명했는데도 공시송달로 재판이 진행된 게 절차상 문제가 없는지, 이제라도 다시 다툴 방법이 있는지부터 헷갈립니다. 저는 출석해서 방어할 기회조차 없었는데 그대로 끝나는 게 부당하다고 생각합니다. 수감 중 공시송달로 불출석 재판이 진행된 음주·무면허 사건에서 상소권회복을 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '수감 중 공시송달 음주 무면허 불출석 재판 상소권회복 다툼 송달·절차 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '수감 중 공시송달 음주 재판 상소권회복 5단계 | 로앤가이드',
      description:
        '수감 중인데 옛 주소로 공시송달돼 음주 재판이 끝나버려 막막하다면 공시송달 위법·상소권회복 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다른 사건으로 구치소나 교도소에 수감돼 있는 사이, 예전에 있었던 음주운전·무면허운전 사건의 공소장 부본이나 소환장 등 소송서류가 제 종전 주소로 송달되다 결국 공시송달의 방법으로 처리되면서, 제가 출석하지 못한 채 유죄가 선고되고 그대로 확정됐다는 사실을 뒤늦게 알게 되어 당황한 사람입니다. 저는 당시 교정시설에 수감돼 있어 소재가 분명했는데도 소재를 알 수 없다는 전제로 공시송달이 이뤄지고 제 진술 없이 재판이 진행된 것이 절차상 문제가 없는지, 이제라도 다시 다툴 방법이 있는지부터 혼란스럽습니다. 판례·실무는 피고인이 구치소나 교도소 등에 수감 중에 있는 경우는 형사소송법이 정한 피고인의 주거·사무소·현재지를 알 수 없는 때나 소재를 확인할 수 없는 경우에 해당한다고 할 수 없으므로, 법원이 수감 중인 피고인에 대하여 공소장 부본과 소환장 등을 종전 주소지로 송달한 경우는 물론 공시송달의 방법으로 송달하였더라도 이는 위법하다고 보며, 법원은 소재가 확인되지 않는 피고인에 대하여 공시송달을 하기 전에 검사에게 주소보정을 요구하거나 그 밖에 필요한 조치를 취하여 피고인의 수감 여부를 확인할 필요가 있다고 보는 흐름이 있다는 설명을 들었습니다. 나아가 위법한 공시송달에 기초하여 진행된 소송절차는 위법하므로, 이러한 경우 상소권회복 등 절차를 통해 다시 다툴 여지가 있다는 얘기도 함께 들어, 제 사건에서 공시송달과 불출석 재판이 위법한 것인지, 어떤 절차로 이를 바로잡을 수 있는지부터 가늠하기 어렵습니다. 혐의를 받고 있다면 제가 수감 중이었던 시기와 송달·재판 진행 경과부터 정확히 확인해야 한다고 보는데, 사실과 다르게 방어 기회 없이 확정된 결과가 그대로 유지되는 것은 아닌지 걱정입니다. 수감 사실 확인서·판결문·송달 내역이 있는데도, 무엇부터 정리해 공시송달의 위법과 상소권회복을 밝혀야 하는지 막막한 상태입니다." 형사소송법 제63조·제345조 이하는 공시송달과 상소권회복을 정하는 영역입니다. 판례·실무는 수감 중인 피고인에 대한 공시송달은 위법하고 이에 기초한 소송절차도 위법하다고 보아 상소권회복 등으로 다툴 여지가 있다고 보는 본 사례 흐름이 있는 영역입니다. 수감 중 공시송달 + 불출석 재판 + 상소권회복 결합은 \'송달 위법·절차 하자·회복 절차\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 수감 시기·소재 ② 송달 경과 ③ 공시송달 위법 ④ 상소권회복 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 수감 ② 송달 ③ 위법 ④ 회복 ⑤ 자료 5단계로 검토해볼 수 있습니다. 사실과 다르게 방어 기회 없이 확정된 결과가 유지되는 것은 아닌지 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수감 중 공시송달 음주 무면허 불출석 재판 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수감 시기·소재, 송달 경과, 공시송달 위법, 상소권회복 절차, 방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수감 시기·소재</strong> — 재판 진행 시기에 어느 교정시설에 수감돼 있었는지 정리.</li>\n<li><strong>② 송달 경과</strong> — 소송서류가 어디로 송달되다 공시송달로 처리됐는지 경과를 정리.</li>\n<li><strong>③ 공시송달 위법</strong> — 수감 중이라 소재가 분명했음에도 공시송달된 것이 위법한지 검토.</li>\n<li><strong>④ 상소권회복 절차</strong> — 위법한 재판에 대해 상소권회복 등으로 다툴 방법을 정리.</li>\n<li><strong>⑤ 방어 자료</strong> — 수감 사실 확인서·판결문·송달 내역 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수감 중인 피고인에 대한 공시송달은 위법하고 이에 기초한 소송절차도 위법하다고 보는 영역이라, 수감 시기와 송달 경과를 확인서·송달 내역으로 나란히 정리해 공시송달의 위법을 밝히는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 검찰·법원·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 수감·송달 경과 확인 (즉시~수일)</strong> — 수감 시기와 소송서류 송달 경과, 공시송달 처리 시점을 확인.</li>\n<li><strong>2단계 — 공시송달 위법 검토 (기록 확보 후)</strong> — 수감으로 소재가 분명했는지, 법원이 수감 여부를 확인할 필요가 있었는지 정리.</li>\n<li><strong>3단계 — 상소권회복 청구 (사유 안 날부터 기한 내)</strong> — 책임질 수 없는 사유로 상소를 못 한 점을 소명해 상소권회복을 청구.</li>\n<li><strong>4단계 — 재판 절차 대응 (회복 인용 후)</strong> — 새로 진행되는 절차에서 방어권을 정리해 본안을 다툼.</li>\n<li><strong>5단계 — 행정·정상 검토 (병행)</strong> — 면허 행정 절차와 정상 자료 정리 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">수감 중 공시송달 음주 무면허 불출석 재판 상소권회복 다툼 송달·절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 수감·송달·회복 갈래입니다.</strong></p>\n<ul>\n<li><strong>수감 사실 확인서 (수감 기간)</strong></li>\n<li><strong>확정 판결문 (선고·확정일)</strong></li>\n<li><strong>송달 내역·공시송달 결정 자료</strong></li>\n<li><strong>종전 주소·소재 관련 자료</strong></li>\n<li><strong>상소권회복청구서·소명 자료</strong></li>\n<li><strong>공소장·적용법조</strong></li>\n<li><strong>정상·면허 행정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공시송달 위법 다툼은 재판 진행 시기의 수감 사실이 핵심 근거이므로, 수감 사실 확인서로 수감 기간을 특정하고 송달 내역과 시점을 대조해두는 것이 핵심입니다. 상소권회복은 사유를 안 날부터 기한이 있으므로 인지 시점을 기록해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>소재 불명 여부</strong> — 수감 중이라 소재가 분명했음에도 소재 불명으로 처리됐는지.</li>\n<li><strong>공시송달 위법</strong> — 수감 중인 피고인에 대한 공시송달이 위법한지.</li>\n<li><strong>법원의 확인 의무</strong> — 법원이 공시송달 전에 수감 여부를 확인할 필요가 있었는지.</li>\n<li><strong>절차 하자</strong> — 위법한 공시송달에 기초한 소송절차가 위법한지.</li>\n<li><strong>회복 기한</strong> — 상소권회복을 사유를 안 날부터 기한 내에 청구했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>운전면허 행정심판 (별도 트랙)</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 수감 중 피고인에 대한 공시송달과 불출석 재판',
        summary:
          '대법원 2013도2714(대법원, 2013.06.27 선고) 영역에서 법원은 피고인이 구치소나 교도소 등에 수감 중에 있는 경우는 형사소송법 제63조 제1항에 규정된 피고인의 주거·사무소·현재지를 알 수 없는 때나 소송촉진 등에 관한 특례법 제23조에 규정된 피고인의 소재를 확인할 수 없는 경우에 해당한다고 할 수 없으므로, 법원이 수감 중인 피고인에 대하여 공소장 부본과 피고인소환장 등을 종전 주소지 등으로 송달한 경우는 물론 공시송달의 방법으로 송달하였더라도 이는 위법하다고 보았습니다. 따라서 법원은 소재가 확인되지 않는 피고인에 대하여 공시송달을 할 때에는 검사에게 주소보정을 요구하거나 그 밖에 필요한 조치를 취하여 피고인의 수감 여부를 확인할 필요가 있다고 하였고, 위법한 공시송달에 기초하여 진행된 제1심 소송절차는 모두 위법하다고 판시했습니다. 이는 수감 중 피고인에 대한 공시송달 재판이 절차상 하자로 다투어질 수 있음을 보여 줍니다. 음주·무면허 사건에서도 수감 시기와 송달 경과를 정리해 공시송달의 위법과 회복 여지를 검토해볼 수 있습니다.',
        takeaway: '수감 중 공시송달 + 불출석 재판 + 상소권회복 결합 시 송달 위법·절차 하자·회복 절차 검토 영역 — 수감 사실 확인서·판결문·송달 내역 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '수감 중인데 공시송달로 재판이 끝났으면 위법한가요?',
        answer:
          '<strong>수감 중 피고인에 대한 공시송달은 위법하다고 보는 영역입니다.</strong> 수감 시기와 송달 경과를 정리하세요.',
      },
      {
        question: '법원이 제 수감 사실을 확인했어야 하나요?',
        answer:
          '<strong>공시송달 전에 수감 여부를 확인할 필요가 있는 영역입니다.</strong> 송달 내역을 확인하세요.',
      },
      {
        question: '이제라도 다시 다툴 수 있나요?',
        answer:
          '<strong>상소권회복 등으로 다시 다툴 여지가 있는 영역입니다.</strong> 사유를 안 날부터 기한을 확인하세요.',
      },
      {
        question: '상소권회복이 인용되면 어떻게 되나요?',
        answer:
          '<strong>새로 소송절차가 진행돼 본안을 다시 다투게 되는 영역입니다.</strong> 방어 자료를 준비하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>수감 시기와 송달 경과 확인이 출발점인 영역입니다.</strong> 수감 사실 확인서·판결문부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '항소심 연속 불출석 절차 트랙', href: '/guide/dui/dui-appeal-absence-two-consecutive-judgment-procedure-accused-defense' },
      { label: '음주운전 적발 후 어디부터 시작 트랙', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '음주운전 형사 절차 총정리 트랙', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '음주운전 초범 처벌 트랙', href: '/guide/dui/dui-first-offense' },
    ],
  },
  // ─── 8. jeonse-fraud-rental-house-fire-tenant-liability-deposit-deduction-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-rental-house-fire-tenant-liability-deposit-deduction-track',
    keyword: '전세 주택 화재 임차인 손해배상 보증금 공제 다툼',
    questionKeyword:
      '전세로 살던 집에서 원인을 알 수 없는 화재가 나 집이 훼손됐는데, 임대인이 수리비를 이유로 제 보증금에서 큰 금액을 공제하겠다며 오히려 손해배상까지 요구합니다. 저는 불이 왜 났는지 명확히 밝혀지지도 않았는데 무조건 제가 다 물어내야 하는 건지, 임대인이 관리해야 할 부분에서 난 불이면 제 책임이 아닌 것 아닌지부터 헷갈립니다. 저는 보증금을 지키고 싶은데 어디까지가 제 책임인지 가늠이 안 됩니다. 전세 주택 화재로 임차인의 손해배상책임과 보증금 공제를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '전세 주택 화재 임차인 손해배상 보증금 공제 다툼 책임범위·보증금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '전세 주택 화재 임차인 책임 보증금 5단계 | 로앤가이드',
      description:
        '전세 살던 집 화재로 보증금에서 수리비를 다 뗀다니 막막하다면 임차인 손해배상 책임범위 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 살던 집에서 원인이 분명하게 밝혀지지 않은 화재가 발생해 집이 훼손됐는데, 임대인이 수리비 명목으로 제 보증금에서 상당한 금액을 공제하겠다고 하거나 그것도 모자라 손해배상까지 청구하겠다고 해서 막막한 임차인입니다. 저는 불이 난 원인이 명확히 규명되지도 않았는데 임차인이라는 이유만으로 훼손된 부분 전부를 물어내고 보증금에서 공제까지 당해야 하는지, 만약 화재가 임대인이 관리·유지해야 할 영역의 하자에서 비롯된 것이라면 그 부분은 제 책임이 아닌 것은 아닌지부터 혼란스럽습니다. 판례·실무는 임대차 목적물이 화재 등으로 소멸돼 임차인의 목적물 반환의무가 이행불능이 된 경우 임차인은 그 이행불능이 자기가 책임질 수 없는 사유로 인한 것이라는 증명을 다하지 못하면 손해를 배상할 책임을 지고 이는 화재의 구체적 발생 원인이 밝혀지지 않은 때에도 마찬가지이지만, 다른 한편 임대인은 목적물을 임차인에게 인도하고 임대차계약 존속 중 그 사용·수익에 필요한 상태를 유지하게 할 의무를 부담하므로, 임대차계약 존속 중에 발생한 화재가 임대인이 지배·관리하는 영역에 존재하는 하자로 인해 발생한 것으로 추단된다면 임차인이 그 하자를 미리 알았거나 알 수 있었다는 등의 특별한 사정이 없는 한 임대인은 화재로 인한 목적물 반환의무의 이행불능 등에 관한 손해배상책임을 임차인에게 물을 수 없다고 보는 흐름이 있다는 설명을 들었습니다. 나아가 임차 건물 부분이 아닌 다른 건물 부분까지 불에 탄 경우 그 손해에 대해서는 임대인이 임차인의 계약상 의무 위반과 상당인과관계 등을 주장·증명하여야 한다는 얘기도 함께 들어, 제 사건에서 화재의 발생 영역과 책임 범위가 어떻게 갈리는지부터 가늠하기 어렵습니다. 저는 화재 책임을 단정하기보다, 화재 발생 지점과 원인·관리 영역을 정리해 보증금에서 부당하게 공제되는 부분은 없는지 확인하고 싶은데, 화재 감식 결과·소방 기록·임대차계약서·보증금 자료가 있는데도 무엇부터 정리해 책임 범위와 보증금 공제를 밝혀야 하는지 막막한 상태입니다." 민법 제623조·제390조는 임대인의 수선의무와 채무불이행 손해배상을 정하는 영역입니다. 판례·실무는 화재 원인이 불명이라도 임차인이 면책 증명을 못 하면 책임을 지되, 임대인 지배·관리 영역의 하자로 추단되면 임차인에게 책임을 묻기 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 전세 주택 화재 + 임차인 손해배상 + 보증금 공제 결합은 \'발생 영역·책임 범위·보증금 공제\' 검토가 가능한 트랙입니다. 피해자라면 ① 화재 원인·발생 영역 ② 책임 범위 ③ 보증금 공제 ④ 협의·대응 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 원인 ② 책임 ③ 공제 ④ 협의 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 책임을 단정하기보다 관련 자료를 정리해 보증금 보전 여지를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전세 주택 화재 임차인 손해배상 보증금 공제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 화재 원인·발생 영역, 책임 범위, 보증금 공제, 협의·대응, 회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 화재 원인·발생 영역</strong> — 화재 감식·소방 기록으로 발생 지점과 원인, 관리 영역을 정리.</li>\n<li><strong>② 책임 범위</strong> — 임차 부분과 임대인 지배·관리 영역을 구분해 책임이 어디에 있는지 검토.</li>\n<li><strong>③ 보증금 공제</strong> — 임대인이 보증금에서 공제하려는 항목·금액의 근거를 정리.</li>\n<li><strong>④ 협의·대응</strong> — 책임 범위를 근거로 임대인과 협의, 과다 공제에 대응.</li>\n<li><strong>⑤ 회수</strong> — 협의가 안 될 경우 보증금반환청구 등 회수 여지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 화재 원인이 불명이라도 임차인이 면책 증명을 못 하면 책임을 지되, 임대인이 지배·관리하는 영역의 하자로 추단되면 임차인에게 책임을 묻기 어려운 영역이라, 화재 발생 지점과 관리 영역을 감식·소방 기록으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 회수 5단계',
        content:
          '<p><strong>A. KLAC·전세사기피해지원센터·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 화재 기록 확보 (즉시~수일)</strong> — 화재 감식 결과·소방서 화재증명원으로 발생 지점과 원인 관련 자료를 확보.</li>\n<li><strong>2단계 — 책임 영역 정리 (기록 확보 후)</strong> — 임차 부분과 임대인 관리 영역을 구분해 책임 소재를 정리.</li>\n<li><strong>3단계 — 공제 항목 확인 (반환 협의 전)</strong> — 임대인이 보증금에서 공제하려는 항목·금액과 근거를 확인.</li>\n<li><strong>4단계 — 협의·내용증명 (기한 내)</strong> — 책임 범위를 근거로 과다 공제에 대해 내용증명 등으로 대응.</li>\n<li><strong>5단계 — 조정·소송 검토 (협의 결렬 시)</strong> — 협의가 안 되면 조정·보증금반환소송 등 회수 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전세 주택 화재 임차인 손해배상 보증금 공제 다툼 책임범위·보증금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 화재 원인·책임·보증금 갈래입니다.</strong></p>\n<ul>\n<li><strong>소방서 화재증명원·감식 결과</strong></li>\n<li><strong>화재 현장 사진·발생 지점 자료</strong></li>\n<li><strong>임대차계약서 (관리·수선 조항)</strong></li>\n<li><strong>임대인 공제·손배 요구 내역</strong></li>\n<li><strong>수리 견적·수선 관련 자료</strong></li>\n<li><strong>보증금 입금·반환 요구 자료</strong></li>\n<li><strong>협의·내용증명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 화재 책임 다툼은 발생 지점과 관리 영역이 관건이므로, 소방서 화재증명원과 감식 결과로 발생 지점을 특정해두는 것이 핵심입니다. 임대인이 공제하려는 항목은 근거와 금액을 문서로 받아 과다 여부를 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>화재 원인 불명</strong> — 원인이 밝혀지지 않은 경우 임차인의 면책 증명 여부.</li>\n<li><strong>지배·관리 영역</strong> — 임대인이 관리하는 영역의 하자에서 비롯된 화재인지.</li>\n<li><strong>임차 외 부분</strong> — 임차 부분이 아닌 곳까지 번진 손해의 증명 책임.</li>\n<li><strong>보증금 공제 범위</strong> — 임대인의 공제 항목·금액이 책임 범위 안인지.</li>\n<li><strong>과다 공제 대응</strong> — 근거 없는 공제에 대한 반환 요구 방법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (피해 상담·결정)</strong></li>\n<li><strong>주택도시보증공사 HUG 1566-9009 (보증·상담)</strong></li>\n<li><strong>대법원 전자소송 (보증금반환소송)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차 주택 화재와 임차인 손해배상책임의 범위',
        summary:
          '대법원 2012다86895(대법원, 2017.05.18 선고) 영역에서 법원은 임대차 목적물이 화재 등으로 소멸됨으로써 임차인의 목적물 반환의무가 이행불능이 된 경우 임차인은 그 이행불능이 자기가 책임질 수 없는 사유로 인한 것이라는 증명을 다하지 못하면 목적물 반환의무의 이행불능으로 인한 손해를 배상할 책임을 지고, 화재의 구체적인 발생 원인이 밝혀지지 아니한 때에도 마찬가지라고 보았습니다. 다만 임대인은 목적물을 임차인에게 인도하고 임대차계약 존속 중 그 사용·수익에 필요한 상태를 유지하게 할 의무를 부담하므로, 임대차계약 존속 중에 발생한 화재가 임대인이 지배·관리하는 영역에 존재하는 하자로 인하여 발생한 것으로 추단된다면 임차인이 그 하자를 미리 알았거나 알 수 있었다는 등의 특별한 사정이 없는 한 임대인은 화재로 인한 목적물 반환의무의 이행불능 등에 관한 손해배상책임을 임차인에게 물을 수 없다고 판시했습니다. 또한 임차 외 건물 부분의 손해에 대해서는 임대인이 임차인의 계약상 의무 위반과 상당인과관계 등을 주장·증명하여야 한다고 하였습니다. 이는 화재 책임이 발생 영역과 증명에 따라 갈림을 보여 줍니다. 전세 주택 화재 다툼 사안에서도 발생 지점과 관리 영역을 정리해 책임 범위와 보증금 공제를 검토해볼 수 있습니다.',
        takeaway: '전세 주택 화재 + 임차인 손해배상 + 보증금 공제 결합 시 발생 영역·책임 범위·보증금 공제 검토 영역 — 화재증명원·감식 결과·임대차계약서 정리 후 변호사 상담 권장.',
      },
    ],
    faq: [
      {
        question: '화재 원인이 안 밝혀지면 무조건 임차인 책임인가요?',
        answer:
          '<strong>임차인이 면책 증명을 못 하면 책임을 지되 관리 영역 하자면 달라지는 영역입니다.</strong> 발생 지점을 정리하세요.',
      },
      {
        question: '임대인이 관리하던 부분에서 불이 났으면 어떻게 되나요?',
        answer:
          '<strong>임대인 지배·관리 영역의 하자로 추단되면 임차인에게 책임을 묻기 어려운 영역입니다.</strong> 감식 결과를 확보하세요.',
      },
      {
        question: '옆집·다른 부분까지 번진 손해도 제가 물어야 하나요?',
        answer:
          '<strong>임차 외 부분 손해는 임대인이 의무 위반과 인과관계를 증명해야 하는 영역입니다.</strong> 화재 범위를 정리하세요.',
      },
      {
        question: '보증금에서 수리비를 다 빼겠다는데 막을 수 있나요?',
        answer:
          '<strong>공제 항목이 책임 범위 안인지가 관건인 영역입니다.</strong> 공제 근거를 문서로 받아 과다 여부를 확인하세요.',
      },
      {
        question: '보증금을 지키려면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>화재 발생 지점과 관리 영역 확인이 출발점인 영역입니다.</strong> 화재증명원·감식 결과부터 확보하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '전세사기 어디부터 시작 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '보증금 미반환 즉시 대응 트랙', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '층간소음 임대차 해지 보증금 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-floor-noise-lease-termination-deposit-return-track' },
      { label: '전세사기 피해자 인정 신청 절차 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
    ],
  },
  // ─── 9. jeonse-fraud-lease-end-deposit-unreturned-holdover-rent-unjust-enrichment-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-lease-end-deposit-unreturned-holdover-rent-unjust-enrichment-track',
    keyword: '전세 종료 보증금 미반환 계속거주 차임 부당이득 다툼',
    questionKeyword:
      '전세계약이 끝났는데 임대인이 보증금을 돌려주지 않아 이사를 못 가고 계속 그 집에 살고 있습니다. 그런데 임대인이 이제는 계약이 끝났으니 제가 계속 사는 기간만큼 시세대로 월세 상당의 돈을 부당이득으로 내야 한다고 주장합니다. 저는 보증금도 못 받았는데 오히려 시세대로 돈을 물어야 하는지, 계속 점유한다고 무조건 부당이득이 되는 것인지부터 헷갈립니다. 저는 보증금을 지키려고 버티는 건데 부당이득까지 얹혀 불리해질까 걱정입니다. 전세 종료 후 보증금 미반환 상태에서 계속 거주할 때 차임 상당 부당이득을 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '전세 종료 보증금 미반환 계속거주 차임 부당이득 다툼 점유·부당이득 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '전세 종료 보증금 미반환 계속거주 5단계 | 로앤가이드',
      description:
        '보증금도 못 받았는데 시세 월세를 부당이득으로 내라니 막막하다면 계속점유 차임 부당이득 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세계약 기간이 끝났는데도 임대인이 보증금을 돌려주지 않아 이사할 곳을 마련하지 못한 채 그 집에 계속 거주하고 있는데, 임대인이 이제 와서 계약이 끝났으니 제가 계속 사는 기간만큼 시세에 따른 월세 상당액을 부당이득으로 물어내야 한다고 주장해 막막한 임차인입니다. 저는 정작 보증금을 돌려받지도 못한 상태에서 이사를 못 가고 버티고 있을 뿐인데, 계속 점유한다는 이유만으로 시세대로 차임 상당액을 부당이득으로 지급해야 하는지, 아니면 종전 계약에서 정한 수준의 부담만 지는 것인지부터 혼란스럽습니다. 판례·실무는 임대차가 기간만료나 당사자의 합의, 해지 등으로 종료된 경우에도 임차인이 보증금을 반환받을 때까지 임차 목적물을 계속 점유하며 사용·수익하더라도, 임차인의 보증금반환채권을 실질적으로 보장하기 위하여 종전 임대차계약에서 정한 차임을 지급할 의무를 부담할 뿐이고 시가에 따른 차임에 상응하는 부당이득금을 지급할 의무를 부담하는 것은 아니라고 보는 흐름이 있다는 설명을 들었습니다. 다만 이 법리는 상가건물 임대차보호법이 적용된 사안에서 정리된 것이고, 주택 전세에서도 목적물을 실제로 사용·수익했는지, 종전 차임이 어떻게 정해져 있었는지 등 구체적 사정에 따라 결론이 달라질 수 있다는 얘기도 함께 들어, 제 사건에서 시세 부당이득 주장이 그대로 받아들여지는 것인지부터 가늠하기 어렵습니다. 저는 결론을 단정하기보다, 제가 실제로 그 집을 어떻게 점유·사용하고 있는지와 종전 계약에서 정한 차임·보증금 관계를 정리해 부당이득 부담을 최소화하고 보증금을 지키고 싶은데, 임대차계약서·보증금 자료·반환 독촉 내역이 있는데도 무엇부터 정리해 계속점유와 부당이득 문제를 밝혀야 하는지 막막한 상태입니다." 민법 제741조는 부당이득을, 주택임대차보호법 제4조 제2항은 보증금 반환 시까지 임대차관계 존속을 정하는 영역입니다. 판례·실무는 보증금 반환 전 계속점유 임차인이 종전 차임 상당의 의무를 부담할 뿐 시가에 따른 부당이득까지 부담하는 것은 아니라고 본 사례 흐름이 있는 영역입니다. 전세 종료 + 보증금 미반환 + 계속점유 부당이득 결합은 \'점유·사용 실질·부당이득 범위·보증금 보전\' 검토가 가능한 트랙입니다. 피해자라면 ① 계약 종료·보증금 미반환 ② 점유·사용 실질 ③ 부당이득 범위 ④ 협의·대응 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 종료 ② 점유 ③ 부당이득 ④ 협의 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 결론을 단정하기보다 관련 자료를 정리해 보증금 보전 여지를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전세 종료 보증금 미반환 계속거주 차임 부당이득 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 종료·보증금 미반환, 점유·사용 실질, 부당이득 범위, 협의·대응, 회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 종료·보증금 미반환</strong> — 계약 종료 시점과 보증금 미반환 경과를 정리.</li>\n<li><strong>② 점유·사용 실질</strong> — 계속 거주하며 실제로 사용·수익하고 있는지, 그 정도를 정리.</li>\n<li><strong>③ 부당이득 범위</strong> — 종전 차임 상당의 부담인지 시가에 따른 부당이득인지 검토.</li>\n<li><strong>④ 협의·대응</strong> — 임대인의 시가 부당이득 주장에 대해 종전 차임 기준으로 대응.</li>\n<li><strong>⑤ 회수</strong> — 임차권등기·보증금반환청구 등 회수 여지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증금 반환 전 계속점유하는 임차인은 보증금반환채권 보장을 위해 종전 계약에서 정한 차임 상당의 의무를 부담할 뿐 시가에 따른 부당이득까지 부담하는 것은 아니라고 본 사례가 있는 영역이라, 점유·사용 실질과 종전 차임 관계를 계약서로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 회수 5단계',
        content:
          '<p><strong>A. KLAC·전세사기피해지원센터·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 종료·미반환 확인 (즉시~수일)</strong> — 계약 종료 시점과 보증금 반환 독촉 내역을 정리.</li>\n<li><strong>2단계 — 점유·사용 실질 정리 (수일 내)</strong> — 계속 거주하며 사용·수익하는 실태와 종전 차임 관계를 정리.</li>\n<li><strong>3단계 — 부당이득 범위 검토 (협의 전)</strong> — 종전 차임 기준과 시가 주장의 차이를 정리해 대응 논리를 마련.</li>\n<li><strong>4단계 — 협의·내용증명 (기한 내)</strong> — 부당이득 범위와 보증금 반환을 명시한 내용증명으로 대응.</li>\n<li><strong>5단계 — 임차권등기·소송 검토 (협의 결렬 시)</strong> — 임차권등기명령·보증금반환소송 등 회수 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전세 종료 보증금 미반환 계속거주 차임 부당이득 다툼 점유·부당이득 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 종료·점유·부당이득 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 (기간·차임·보증금)</strong></li>\n<li><strong>계약 종료·갱신거절 통지 자료</strong></li>\n<li><strong>보증금 반환 독촉 내역 (내용증명 등)</strong></li>\n<li><strong>계속 거주·점유 실태 자료</strong></li>\n<li><strong>임대인 부당이득 주장 내역</strong></li>\n<li><strong>종전 차임 관련 자료</strong></li>\n<li><strong>임차권등기·소송 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계속점유 부당이득 다툼은 종전 계약에서 정한 차임 수준이 기준이 되므로, 계약서상 차임·보증금 관계를 정확히 정리해두는 것이 핵심입니다. 보증금 반환 독촉은 내용증명으로 시점을 남겨 계속점유의 사유를 뒷받침해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부당이득 범위</strong> — 종전 차임 상당의 부담인지 시가에 따른 부당이득인지.</li>\n<li><strong>점유·사용 실질</strong> — 실제로 목적물을 사용·수익하고 있는지 여부.</li>\n<li><strong>보증금 보장 취지</strong> — 계속점유가 보증금반환채권 보장을 위한 것인지.</li>\n<li><strong>사안별 차이</strong> — 상가·주택, 계약 내용 등 구체적 사정에 따른 결론 차이.</li>\n<li><strong>보증금 회수</strong> — 계속점유와 병행할 임차권등기·반환청구 절차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (피해 상담·결정)</strong></li>\n<li><strong>주택도시보증공사 HUG 1566-9009 (보증·상담)</strong></li>\n<li><strong>대법원 전자소송 (임차권등기·보증금반환소송)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금 반환 전 계속점유와 차임 상당 부당이득',
        summary:
          '대법원 2023다257600(대법원, 2023.11.09 선고) 영역에서 법원은 상가건물 임대차보호법이 적용되는 임대차가 기간만료나 당사자의 합의, 해지 등으로 종료된 경우 보증금을 반환받을 때까지 임차 목적물을 계속 점유하면서 사용·수익한 임차인은 종전 임대차계약에서 정한 차임을 지급할 의무를 부담할 뿐이고 시가에 따른 차임에 상응하는 부당이득금을 지급할 의무를 부담하는 것은 아니라고 보았습니다. 이는 임대차기간이 끝난 후에도 임차인이 보증금을 반환받을 때까지 목적물에 대한 점유를 종전과 마찬가지 정도로 강하게 보호함으로써 임차인의 보증금반환채권을 실질적으로 보장하기 위한 것으로, 임대차 종료 이후에 보증금을 반환받기 전에 임차 목적물을 점유하고 있다고 하더라도 임차인에게 차임 상당의 부당이득이 성립한다고 할 수 없다고 판시했습니다. 다만 이는 상가임대차법이 적용된 사안의 법리로서 주택 전세에서도 점유·사용 실태와 계약 내용 등 구체적 사정에 따라 달라질 수 있어 별도 확인이 필요합니다. 전세 종료 후 계속점유 다툼 사안에서도 종전 차임 관계와 점유 실질을 정리해 부당이득 범위를 검토해볼 수 있습니다.',
        takeaway: '전세 종료 + 보증금 미반환 + 계속점유 부당이득 결합 시 점유·사용 실질·부당이득 범위·보증금 보전 검토 영역 — 임대차계약서·반환 독촉 내역·차임 자료 정리 후 변호사 상담 권장. 위 법리는 상가임대차 사안 기준으로 주택은 사안에 따라 달라질 수 있어 별도 확인이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '보증금도 못 받았는데 시세대로 월세를 내야 하나요?',
        answer:
          '<strong>보증금 반환 전 계속점유는 종전 차임 상당의 부담으로 본 사례가 있는 영역입니다.</strong> 종전 차임 관계를 정리하세요.',
      },
      {
        question: '계속 살면 무조건 부당이득이 되나요?',
        answer:
          '<strong>실제 사용·수익 실질과 종전 계약 내용에 따라 달라지는 영역입니다.</strong> 점유 실태를 정리하세요.',
      },
      {
        question: '상가 판례라던데 주택 전세에도 그대로 적용되나요?',
        answer:
          '<strong>상가 사안 법리로 주택은 사안에 따라 달라질 수 있는 영역입니다.</strong> 구체적 사정을 별도로 확인하세요.',
      },
      {
        question: '계속 살면서도 보증금을 받아내려면 어떻게 하나요?',
        answer:
          '<strong>임차권등기·보증금반환청구를 병행 검토할 수 있는 영역입니다.</strong> 반환 독촉 내역을 남기세요.',
      },
      {
        question: '보증금을 지키려면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>계약 종료 시점과 종전 차임 관계 확인이 출발점인 영역입니다.</strong> 임대차계약서·독촉 내역부터 확보하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '전세사기 어디부터 시작 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '보증금 미반환 즉시 대응 트랙', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '무월차임 전세 보증금 미반환 점유 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-no-rent-deposit-holdover-track' },
      { label: '전세사기 피해자 인정 신청 절차 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
    ],
  },
  // ─── 10. jeonse-fraud-landlord-status-change-objection-right-deposit-return-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-landlord-status-change-objection-right-deposit-return-track',
    keyword: '임대인 지위변경 이의제기권 보증금반환의무 하급심 다툼',
    questionKeyword:
      '살던 집이 다른 사람에게 넘어가면서 임대인이 바뀌었는데, 새 임대인은 임대인 지위가 변경됐다는 이유로 이의를 제기하며 보증금 반환을 미룹니다. 저는 이미 계약기간도 끝났고 대항력도 갖추고 있는데, 임대인이 바뀌었다는 이유로 반환의무를 피할 수 있는지, 기간만료에 따른 보증금 반환은 누구에게 어떻게 요구해야 하는지부터 헷갈립니다. 저는 임대인이 바뀐 것과 상관없이 보증금을 돌려받고 싶은데 방법이 막막합니다. 임대인 지위변경에 따른 이의제기와 기간만료 보증금반환의무를 다투는 상황에서 어떤 순서로 정리해 판단해볼 수 있나요?',
    ctaKeyword: '임대인 지위변경 이의제기권 보증금반환의무 하급심 다툼 지위변경·반환 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임대인 지위변경 이의제기 보증금 반환 5단계 | 로앤가이드',
      description:
        '집이 넘어가며 새 임대인이 지위변경을 이유로 보증금 반환을 미뤄 막막하다면 지위변경 이의·기간만료 반환 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"살던 집이 매매 등으로 다른 사람에게 넘어가면서 임대인이 바뀌었는데, 새 임대인이 임대인의 지위가 변경됐다는 점을 들어 이의를 제기하거나 반환의무를 다투면서 보증금 반환을 미루고 있어 막막한 임차인입니다. 저는 이미 계약기간도 끝났고 전입신고와 확정일자를 갖춰 대항력도 있는 상태인데, 임대인이 바뀌었다는 이유만으로 보증금 반환의무를 피하거나 이의를 제기할 수 있는 것인지, 기간만료에 따른 보증금 반환은 누구에게 어떤 근거로 요구해야 하는지부터 혼란스럽습니다. 하급심 판단 중에는 임대인 지위변경에 따른 이의제기권 행사 주장과 임대차기간 만료에 따른 보증금반환의무 관련 주장을 모두 배척하고 임차인의 손을 들어준 사례가 있다는 설명을 들었는데, 다만 이러한 결론은 개별 사건의 대항력 취득 여부, 지위 승계의 경위, 이의제기의 시기와 방식 등 구체적 사정에 따라 달라질 수 있다는 얘기도 함께 들어, 제 사건에서 새 임대인의 이의제기가 받아들여지는 것인지, 아니면 기간만료에 따른 반환의무가 그대로 인정되는 것인지부터 가늠하기 어렵습니다. 저는 결론을 단정하기보다, 제가 언제 대항력을 갖췄는지, 임대인 지위가 어떤 경위로 승계됐는지, 새 임대인이 어떤 이유로 반환을 미루는지를 정리해 기간만료에 따른 보증금 반환을 제대로 요구하고 싶은데, 임대차계약서·전입신고·확정일자·등기부등본·반환 독촉 내역이 있는데도 무엇부터 정리해 지위변경과 반환의무 문제를 밝혀야 하는지 막막한 상태입니다." 주택임대차보호법 제3조는 대항력과 임대인 지위 승계를, 민법 제618조는 임대차를 정하는 영역입니다. 하급심 사례 중에는 임대인 지위변경에 따른 이의제기권 행사 주장과 기간만료 보증금반환의무 관련 주장을 배척한 사례가 있으나, 이는 개별 사안의 구체적 사정에 따라 달라질 수 있는 영역입니다. 임대인 지위변경 + 이의제기권 + 기간만료 반환의무 결합은 \'대항력·지위 승계 경위·반환의무 주체\' 검토가 가능한 트랙입니다. 피해자라면 ① 대항력·계약 종료 ② 지위 승계 경위 ③ 이의제기 대응 ④ 반환의무 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 대항력 ② 승계 ③ 이의 ④ 반환 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 결론을 단정하기보다 관련 자료를 정리해 반환 여지를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 지위변경 이의제기권 보증금반환의무 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대항력·계약 종료, 지위 승계 경위, 이의제기 대응, 반환의무, 회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대항력·계약 종료</strong> — 전입신고·확정일자로 대항력을 갖춘 시점과 계약 종료 여부를 정리.</li>\n<li><strong>② 지위 승계 경위</strong> — 임대인이 어떤 경위(매매 등)로 바뀌었는지 등기부·계약으로 확인.</li>\n<li><strong>③ 이의제기 대응</strong> — 새 임대인의 지위변경 이의제기 사유와 시기·방식을 정리.</li>\n<li><strong>④ 반환의무</strong> — 기간만료에 따른 보증금반환의무를 누가 부담하는지 검토.</li>\n<li><strong>⑤ 회수</strong> — 반환 지연 시 임차권등기·반환소송 등 회수 여지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 하급심에서는 임대인 지위변경에 따른 이의제기권 행사 주장과 기간만료 보증금반환의무 관련 주장을 배척한 사례가 있으나 개별 사정에 따라 달라질 수 있는 영역이라, 대항력 취득 시점과 지위 승계 경위를 등기부·계약서로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 회수 5단계',
        content:
          '<p><strong>A. KLAC·전세사기피해지원센터·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대항력·종료 확인 (즉시~수일)</strong> — 전입신고·확정일자와 계약 종료 시점을 확인.</li>\n<li><strong>2단계 — 지위 승계 경위 정리 (수일 내)</strong> — 등기부등본·매매 관련 자료로 임대인이 바뀐 경위를 정리.</li>\n<li><strong>3단계 — 이의제기 대응 (반환 협의 전)</strong> — 새 임대인의 이의제기 사유·시기를 정리하고 반환의무를 근거로 대응.</li>\n<li><strong>4단계 — 반환청구·내용증명 (기한 내)</strong> — 기간만료 보증금 반환을 명시한 내용증명을 발송.</li>\n<li><strong>5단계 — 임차권등기·소송 검토 (협의 결렬 시)</strong> — 임차권등기명령·보증금반환소송 등 회수 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 지위변경 이의제기권 보증금반환의무 하급심 다툼 지위변경·반환 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 대항력·지위 승계·반환 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 (기간·보증금)</strong></li>\n<li><strong>전입신고 확인서·확정일자 자료 (대항력)</strong></li>\n<li><strong>등기부등본 (소유권이전·지위 승계)</strong></li>\n<li><strong>임대인 변경 통보·이의제기 내역</strong></li>\n<li><strong>계약 종료·갱신거절 통지 자료</strong></li>\n<li><strong>보증금 반환 독촉 내용증명</strong></li>\n<li><strong>임차권등기·소송 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 지위변경 다툼은 대항력 취득 시점과 지위 승계 경위가 관건이므로, 전입신고·확정일자 자료와 등기부등본의 소유권이전 시점을 나란히 정리해두는 것이 핵심입니다. 새 임대인의 이의제기 사유는 서면으로 받아 시기·방식을 기록해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력 취득</strong> — 임차인이 언제 대항력을 갖췄는지.</li>\n<li><strong>지위 승계</strong> — 임대인이 바뀌며 지위가 승계된 경위와 효과.</li>\n<li><strong>이의제기권</strong> — 새 임대인의 지위변경 이의제기가 받아들여지는지.</li>\n<li><strong>반환의무 주체</strong> — 기간만료 보증금반환의무를 누가 부담하는지.</li>\n<li><strong>사안별 차이</strong> — 대항력·승계 경위 등 구체적 사정에 따른 결론 차이.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (피해 상담·결정)</strong></li>\n<li><strong>주택도시보증공사 HUG 1566-9009 (보증·상담)</strong></li>\n<li><strong>대법원 전자소송 (임차권등기·보증금반환소송)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대인 지위변경 이의제기와 기간만료 보증금반환의무 (하급심)',
        summary:
          '수원지방법원 2022나72946(2024.06.05 선고) 영역에서 법원은 임대인 지위변경에 따른 이의제기권 행사 주장과 임대차기간 만료에 따른 보증금반환의무 관련 주장을 모두 배척하고 피고의 항소를 기각하는 판결을 선고하였으며, 그 판결은 상고 없이 그 무렵 확정된 것으로 나타납니다. 하급심에서는 이처럼 임대인 지위가 변경됐다는 이유로 이의를 제기하며 반환의무를 다투는 주장을 받아들이지 않고, 기간만료에 따른 보증금 반환을 인정한 사례가 있다고 볼 수 있습니다. 다만 이는 하급심의 개별 판단으로서 대항력 취득 여부, 지위 승계의 경위, 이의제기의 시기와 방식 등 구체적 사정에 따라 결론이 달라질 수 있어 사안에 따라 달라질 수 있습니다. 임대인 지위변경 이의제기 다툼 사안에서도 대항력 취득 시점과 지위 승계 경위를 정리해 기간만료 반환의무를 검토해볼 수 있습니다.',
        takeaway: '임대인 지위변경 + 이의제기권 + 기간만료 반환의무 결합 시 대항력·지위 승계 경위·반환의무 주체 검토 영역 — 임대차계약서·전입신고·확정일자·등기부등본 정리 후 변호사 상담 권장. 위는 하급심 사례로 사안에 따라 달라질 수 있어 별도 확인이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '임대인이 바뀌면 보증금 반환의무를 피할 수 있나요?',
        answer:
          '<strong>하급심에서는 지위변경 이의제기 주장을 배척한 사례가 있는 영역입니다.</strong> 대항력과 승계 경위를 정리하세요.',
      },
      {
        question: '기간만료 보증금은 누구에게 요구하나요?',
        answer:
          '<strong>지위 승계 경위에 따라 반환의무 주체가 정해지는 영역입니다.</strong> 등기부등본으로 승계 시점을 확인하세요.',
      },
      {
        question: '새 임대인의 이의제기가 받아들여질 수 있나요?',
        answer:
          '<strong>구체적 사정에 따라 결론이 달라질 수 있는 영역입니다.</strong> 이의제기 사유·시기를 서면으로 정리하세요.',
      },
      {
        question: '반환을 계속 미루면 어떻게 하나요?',
        answer:
          '<strong>임차권등기명령·보증금반환소송을 검토할 수 있는 영역입니다.</strong> 반환 독촉 내역을 확보하세요.',
      },
      {
        question: '보증금을 지키려면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>대항력 취득 시점과 지위 승계 경위 확인이 출발점인 영역입니다.</strong> 전입신고·확정일자·등기부등본부터 확보하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '전세사기 어디부터 시작 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '보증금 미반환 즉시 대응 트랙', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '임대인 변경 보증금 승계 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-change-deposit-succession-track' },
      { label: '임대인 매도 새 집주인 반환 거부 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-sale-new-owner-refuse-deposit-track' },
    ],
  },
];
