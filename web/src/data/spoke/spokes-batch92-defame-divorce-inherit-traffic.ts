import { SpokePage } from '../spoke-pages';

// batch92 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-09)
//
// 고유 존재 이유:
// 1. divorce-separation-period-acquired-asset-division-track — 별거 이후 일방이 취득한 재산의 재산분할 판단형 트랙. 분할 대상·가액의 기준시기(사실심 변론종결일)와 파탄 이후 변동 재산의 분할 대상 포함·제외 판단이 핵심.
// 2. divorce-alimony-claim-prescription-period-track — 이혼 위자료청구권의 소멸시효·신의칙 판단형 트랙. 객관적 권리행사 장애사유가 있던 경우 소멸시효 항변이 권리남용으로 허용되지 않을 수 있는 점이 핵심.
// 3. divorce-foreign-spouse-jurisdiction-agreement-track — 외국인 배우자와의 전속적 국제재판관할합의 효력 판단형 트랙. 합리적 관련성·공서양속 위반 여부와 합의 유효 요건 검토가 핵심.
// 4. divorce-disposed-asset-substitute-property-division-track — 분할 대상 재산이 처분된 경우의 대상재산(代償財産) 취급 판단형 트랙. 처분된 본래 재산은 제외되나 그 대가로 취득한 대상재산은 분할 대상이 될 수 있는 점이 핵심.
// 5. defamation-public-official-conviction-disqualification-track — 명예훼손 등 유죄 시 공무원 결격·당연퇴직과 분리선고 판단형 트랙. 결격대상범죄와 다른 죄의 경합 시 벌금형 분리선고 규정의 취지가 핵심.
// 6. defamation-repeated-posts-single-crime-track — 반복 게시가 포괄일죄로 묶이는 경우의 기판력 판단형 트랙. 일부 확정판결·약식명령의 기판력이 상상적 경합관계의 다른 죄에도 미치는 점이 핵심.
// 7. defamation-hospital-protest-business-interference-track — 병원 항의·소란이 업무방해죄 보호대상 업무를 침해하는지 판단형 트랙. 무자격 개설 의료기관에 고용된 의료인의 진료 업무가 보호대상인지 종합 판단이 핵심.
// 8. defamation-union-public-figure-criticism-falsely-accused-defense — accused 관점. 노조·공적 사안 비판 글이 모욕에 해당하는지 다투는 방어 트랙. 사회상규 위배 여부와 형법 제20조 위법성조각·의견 표명의 한계가 핵심.
// 9. inheritance-divisible-claim-joint-succession-track — 가분채권·주식 등의 공동상속 법률관계 판단형 트랙. 가분채권은 당연분할되나 특별수익·기여분 등 특별한 사정이 있으면 상속재산분할 대상이 될 수 있는 점이 핵심.
// 10. traffic-accident-rehab-therapy-negligence-injury-track — 재활·치료 과정 부상 사고의 업무상과실치상 판단형 트랙. 주의의무 위반·인과관계의 엄격한 증명책임(검사)과 평균인 기준 과실 판단이 핵심.

export const spokesBatch92DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-separation-period-acquired-asset-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-separation-period-acquired-asset-division-track',
    keyword: '별거 후 취득 재산 분할',
    questionKeyword: '오래 별거하다 이혼하려는데, 별거한 뒤에 배우자 명의로 새로 산 부동산이나 모은 돈도 재산분할에 들어가는지 막막해요. 분할 대상과 그 금액은 언제를 기준으로 정하는지, 별거 이후에 생긴 재산은 무조건 빠지는지, 제 기여는 어떻게 반영되는지 궁금합니다.',
    ctaKeyword: '별거 후 취득 재산 분할·기준시기 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '별거 후 취득 재산 분할 — 5단계 분할대상·기준시기 점검 | 로앤가이드',
      description:
        '별거 이후 배우자가 취득한 재산을 나눌 수 있을지 고민이라면, 민법 제839조의2 분할 대상과 사실심 변론종결일 기준 산정·파탄 이후 변동 재산의 포함·제외까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 시간 사실상 따로 살며 별거를 이어 오다 이제야 이혼을 정리하려는데, 정작 그동안 모아 온 재산을 어떻게 나눌지부터 막막한 상황입니다. 특히 별거를 시작한 뒤에 배우자가 자기 명의로 새로 산 부동산이나 따로 모은 예금이 있는데, 이런 별거 이후에 생긴 재산도 재산분할의 대상이 되는지, 아니면 \'이미 따로 살았으니 각자 것\'이라는 이유로 빠지는 것은 아닌지 불안합니다. 분할 대상과 그 금액은 도대체 언제를 기준으로 정하는지, 별거 전까지 함께 협력해 만든 자원으로 별거 이후에 취득한 재산이라면 어떻게 다뤄지는지, 제가 혼인기간 동안 기여한 부분은 제대로 반영되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2는 재산분할청구권을, 같은 조 제2항은 당사자 쌍방의 협력으로 이룩한 재산의 액수와 그 밖의 사정을 참작한 분할의 액수·방법을 정하는 영역입니다. 판례는 재판상 이혼에 따른 재산분할을 할 때 분할의 대상이 되는 재산과 그 액수는 이혼소송의 사실심 변론종결일을 기준으로 하여 정하는 것이 원칙이라고 보면서, 혼인관계가 파탄된 이후 사실심 변론종결일 사이에 생긴 재산관계의 변동이 부부 중 일방에 의한 후발적 사정에 의한 것으로서 혼인 중 공동으로 형성한 재산관계와 무관하다는 등 특별한 사정이 있는 경우 그 변동된 재산은 재산분할 대상에서 제외하여야 하나, 부부의 일방이 혼인관계 파탄 이후에 취득한 재산이라도 그것이 혼인관계 파탄 이전에 쌍방의 협력에 의하여 형성된 유형·무형의 자원에 기한 것이라면 재산분할의 대상이 된다고 본 사례 흐름이 있는 영역입니다. 별거 + 파탄 이후 취득 + 기준시기 결합은 \'분할대상·기준시기·기여\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산 파악 ② 분할대상 ③ 기준시기 ④ 기여 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 대상 ③ 기준 ④ 기여 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 별거 후 취득 재산 분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산 파악·분할대상·기준시기·기여·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산 파악</strong> — 별거 전후 부부 적극·소극재산과 취득 시점 파악.</li>\n<li><strong>② 분할대상</strong> — 파탄 이전 협력으로 형성된 자원에 기한 재산인지 정리.</li>\n<li><strong>③ 기준시기</strong> — 사실심 변론종결일 기준 분할 대상·가액 산정 정리.</li>\n<li><strong>④ 기여</strong> — 혼인기간 가사·소득·양육 등 형성·유지 기여 정리.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 분할 대상과 가액은 사실심 변론종결일을 기준으로 정하는 것이 원칙이고, 별거(파탄) 이후 취득한 재산이라도 파탄 이전 쌍방의 협력으로 형성된 자원에 기한 것이라면 분할 대상이 될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·취득 시점 자료 보존 (즉시)</strong> — 별거 전후 부동산·계좌·취득 시점, 부채 자료 보존.</li>\n<li><strong>2단계 — 분할대상·형성 경위 정리 (1~2주)</strong> — 파탄 이전 협력으로 형성된 자원 관련성, 후발적 사정 정리.</li>\n<li><strong>3단계 — 기준시기·기여 정리 (2~3주)</strong> — 사실심 변론종결일 기준 가액, 가사·소득 등 기여 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">별거 후 취득 재산 분할·기준시기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·분할대상·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>별거 시점·경위 입증 자료 (파탄 시기)</strong></li>\n<li><strong>별거 후 취득 부동산·예금 자료 (취득 시점)</strong></li>\n<li><strong>취득 자금 출처·형성 경위 자료 (협력 자원 관련성)</strong></li>\n<li><strong>부부 적극·소극재산 목록 (분할 대상)</strong></li>\n<li><strong>가사·소득·양육 등 기여 자료 (분할 비율)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 별거 이후 취득한 재산도 사실심 변론종결일을 기준으로 분할 대상·가액이 정해지고 파탄 이전 쌍방의 협력으로 형성된 자원에 기한 것이면 분할 대상이 될 수 있는 영역이므로 취득 자금의 출처와 형성 경위 자료를 정리하는 것이 핵심. 반대로 파탄 이후 후발적 사정으로 공동재산과 무관하게 생긴 변동은 제외될 수 있으므로 별거 시점·경위 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할대상</strong> — 별거 후 취득 재산이 분할 대상에 포함되는지.</li>\n<li><strong>협력 자원 관련성</strong> — 파탄 이전 협력으로 형성된 자원에 기한 것인지.</li>\n<li><strong>기준시기</strong> — 분할 대상·가액의 기준이 사실심 변론종결일인지.</li>\n<li><strong>후발적 사정</strong> — 공동재산과 무관한 변동이 제외되는지.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 분할대상·기준시기와 파탄 이후 취득 재산의 취급',
        summary:
          '대법원 2019므12549(대법원, 2019.10.31 선고) 영역에서 법원은 재판상 이혼에 따른 재산분할을 할 때 분할의 대상이 되는 재산과 그 액수는 이혼소송의 사실심 변론종결일을 기준으로 하여 정하는 것이 원칙이라고 보았습니다. 다만 혼인관계가 파탄된 이후 사실심 변론종결일 사이에 생긴 재산관계의 변동이 부부 중 일방에 의한 후발적 사정에 의한 것으로서 혼인 중 공동으로 형성한 재산관계와 무관하다는 등 특별한 사정이 있는 경우 그 변동된 재산은 재산분할 대상에서 제외하여야 하나, 부부의 일방이 혼인관계 파탄 이후에 취득한 재산이라도 그것이 혼인관계 파탄 이전에 쌍방의 협력에 의하여 형성된 유형·무형의 자원에 기한 것이라면 재산분할의 대상이 된다고 판시했습니다. 별거 후 취득 재산 분할 사안에서도 분할 대상·기준시기·파탄 이후 취득 재산의 협력 자원 관련성을 검토해볼 수 있습니다.',
        takeaway: '별거 + 파탄 이후 취득 + 기준시기 결합 시 사실심 변론종결일 기준 산정·파탄 이전 협력 자원에 기한 재산의 분할 포함·후발적 사정의 제외 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '별거한 뒤에 배우자가 산 재산도 나눌 수 있나요?',
        answer:
          '<strong>파탄 이전 쌍방의 협력으로 형성된 자원에 기한 것이라면 분할 대상이 될 수 있는 영역입니다.</strong> 취득 자금 출처·형성 경위 자료를 정리.',
      },
      {
        question: '재산 금액은 언제를 기준으로 정하나요?',
        answer:
          '<strong>분할 대상과 가액은 사실심 변론종결일을 기준으로 정하는 것이 원칙인 영역입니다.</strong> 재산·평가 자료를 정리.',
      },
      {
        question: '별거 이후 생긴 재산은 무조건 빠지나요?',
        answer:
          '<strong>공동재산과 무관한 후발적 사정이면 제외되지만 협력 자원에 기한 것이면 포함될 수 있는 영역입니다.</strong> 별거 시점·경위 자료를 정리.',
      },
      {
        question: '따로 산 기간이 길면 제 기여는 어떻게 보나요?',
        answer:
          '<strong>혼인기간 가사·소득·양육 등 형성·유지 기여를 종합해 분할 비율을 정하는 영역입니다.</strong> 기여 자료를 정리.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·재산 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '상속 재산 재산분할 대상', href: '/guide/divorce/divorce-inheritance-property-division-scope' },
      { label: '재산분할 기준 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '숨긴 재산 분할', href: '/guide/divorce/divorce-hidden-asset-division-track' },
      { label: '재산 은닉 추적 분할', href: '/guide/divorce/divorce-hidden-asset-property-tracing-track' },
    ],
  },

  // ─── 2. divorce-alimony-claim-prescription-period-track ───
  {
    domain: 'divorce',
    slug: 'divorce-alimony-claim-prescription-period-track',
    keyword: '이혼 위자료 청구 시효',
    questionKeyword: '이혼한 지 시간이 꽤 지났는데 이제야 위자료를 청구하려니 시효가 지난 것은 아닌지 막막해요. 상대가 행방을 감추거나 소송을 막아 청구를 못 하던 사정이 있었는데도 소멸시효가 그대로 진행되는지, 시효 지났다고 상대가 발뺌하면 막을 방법이 없는지 궁금합니다.',
    ctaKeyword: '이혼 위자료 청구 시효·권리남용 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '이혼 위자료 청구 시효 — 5단계 소멸시효·권리남용 점검 | 로앤가이드',
      description:
        '이혼 위자료를 뒤늦게 청구하려니 시효가 걱정이라면, 민법 제766조 단기소멸시효와 객관적 장애사유가 있던 경우 소멸시효 항변이 권리남용으로 제한되는 법리까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼한 지 시간이 꽤 흐른 뒤에야 그동안 받은 정신적 고통에 대한 위자료를 정리해 청구하려는데, 정작 \'이미 시효가 지난 것은 아닌지\'부터 막막한 상황입니다. 사실 이혼 직후에는 상대가 행방을 감추거나 연락을 끊고, 한동안은 제가 청구를 사실상 할 수 없는 사정이 이어졌습니다. 이렇게 제 잘못이 아니라 객관적으로 권리를 행사하기 어려운 장애가 있었는데도 소멸시효는 그대로 흘러가 버리는지, 뒤늦게 청구하면 상대가 \'시효 지났다\'며 발뺌할 때 막을 방법이 정말 없는지, 그런 항변이 오히려 신의에 어긋나 받아들여지지 않을 수도 있는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제766조 제1항은 불법행위로 인한 손해배상청구권의 단기소멸시효(손해 및 가해자를 안 날부터 3년)를, 민법 제2조는 신의성실의 원칙과 권리남용 금지를 정하는 영역입니다. 판례는 채무자의 소멸시효를 이유로 한 항변권의 행사도 민법의 대원칙인 신의성실의 원칙과 권리남용 금지의 원칙의 지배를 받는 것이어서, 객관적으로 채권자가 권리를 행사할 수 없는 장애사유가 있었다면 채무자가 소멸시효 완성을 주장하는 것은 신의성실의 원칙에 반하는 권리남용으로서 허용될 수 없다고 보면서, 다만 채권자에게 권리의 행사를 기대할 수 없는 객관적인 사실상의 장애사유가 있었던 경우에도 그 장애가 해소되었다면 특별한 사정이 없는 한 그 시점 이후에는 그러한 장애사유가 해소된 것으로 볼 수 있다고 본 사례 흐름이 있는 영역입니다. 뒤늦은 청구 + 장애사유 + 시효 항변 결합은 \'소멸시효·기산점·권리남용\' 정리가 필요한 트랙입니다. 당사자라면 ① 청구권·발생 ② 시효 기산점 ③ 장애사유 ④ 권리남용 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 청구권 ② 기산점 ③ 장애 ④ 남용 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이혼 위자료 청구 시효 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구권·발생·시효 기산점·장애사유·권리남용·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 청구권·발생</strong> — 유책·불법행위로 인한 위자료청구권의 발생·확정 정리.</li>\n<li><strong>② 시효 기산점</strong> — 손해 및 가해자를 안 날 등 단기소멸시효 기산점 검토.</li>\n<li><strong>③ 장애사유</strong> — 행방불명·연락두절 등 객관적 권리행사 장애 정리.</li>\n<li><strong>④ 권리남용</strong> — 상대의 소멸시효 항변이 신의칙에 반하는지 검토.</li>\n<li><strong>⑤ 청구</strong> — 위자료·손해배상 청구와 시효 중단 조치 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 객관적으로 권리를 행사할 수 없는 장애사유가 있었다면 소멸시효 완성을 주장하는 것이 신의성실의 원칙에 반하는 권리남용으로 허용되지 않을 수 있고, 다만 그 장애가 해소된 시점 이후에는 장애가 사라진 것으로 볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 청구권·발생 자료 정리 (즉시)</strong> — 유책행위·이혼 경위, 위자료청구권 발생 자료 정리.</li>\n<li><strong>2단계 — 시효 기산점 정리 (1~2주)</strong> — 손해 및 가해자를 안 날, 단기소멸시효 기산점 정리.</li>\n<li><strong>3단계 — 장애사유·해소 정리 (2~3주)</strong> — 행방불명·연락두절 등 장애와 그 해소 시점 정리.</li>\n<li><strong>4단계 — 시효 중단·청구 (소 제기 시)</strong> — 위자료·손해배상 청구, 시효 중단 조치 검토.</li>\n<li><strong>5단계 — 권리남용 주장·심리 (분쟁 시)</strong> — 소멸시효 항변에 대한 권리남용 주장 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 위자료 청구 시효·권리남용 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 청구권·시효·장애 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·이혼 확인 자료 (이혼 경위)</strong></li>\n<li><strong>유책·불법행위 입증 자료 (위자료청구권)</strong></li>\n<li><strong>정신적 고통·피해 입증 자료 (손해)</strong></li>\n<li><strong>손해·가해자 인지 시점 자료 (시효 기산점)</strong></li>\n<li><strong>행방불명·연락두절 등 장애 입증 자료 (권리행사 장애)</strong></li>\n<li><strong>장애 해소 시점 자료 (시효 진행)</strong></li>\n<li><strong>내용증명·청구 등 시효 중단 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 위자료청구권은 단기소멸시효가 진행되는 영역이지만 객관적으로 권리를 행사할 수 없는 장애사유가 있었다면 상대의 소멸시효 항변이 권리남용으로 제한될 수 있으므로 장애사유의 존재와 그 해소 시점을 함께 정리하는 것이 핵심. 청구 전 내용증명·청구 등 시효 중단으로 평가될 수 있는 조치 자료도 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시효 기산점</strong> — 손해 및 가해자를 안 날이 언제인지.</li>\n<li><strong>장애사유</strong> — 객관적 권리행사 장애가 있었는지.</li>\n<li><strong>권리남용</strong> — 소멸시효 항변이 신의칙에 반하는지.</li>\n<li><strong>장애 해소</strong> — 장애가 해소된 시점 이후 시효가 진행되는지.</li>\n<li><strong>시효 중단</strong> — 청구·내용증명 등 시효 중단 조치가 있었는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼 위자료·손해배상 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 항변의 권리남용과 장애사유 해소',
        summary:
          '대법원 2018다303653(대법원, 2023.12.21 선고) 영역에서 법원은 채무자의 소멸시효를 이유로 한 항변권의 행사도 민법의 대원칙인 신의성실의 원칙과 권리남용 금지의 원칙의 지배를 받는 것이어서, 객관적으로 채권자가 권리를 행사할 수 없는 장애사유가 있었다면 채무자가 소멸시효 완성을 주장하는 것은 신의성실의 원칙에 반하는 권리남용으로서 허용될 수 없다고 보았습니다. 또한 채권자에게 권리의 행사를 기대할 수 없는 객관적인 사실상의 장애사유가 있었던 경우에도 그 장애가 해소되었다면 특별한 사정이 없는 한 그 시점 이후에는 그러한 장애사유가 해소되었다고 볼 수 있다고 판시했습니다. 이혼 위자료 청구 시효 사안에서도 단기소멸시효 기산점·객관적 장애사유·소멸시효 항변의 권리남용 여부를 검토해볼 수 있습니다.',
        takeaway: '뒤늦은 청구 + 장애사유 + 시효 항변 결합 시 단기소멸시효 기산점·객관적 권리행사 장애·소멸시효 항변의 권리남용·장애 해소 시점 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이혼한 지 오래됐는데 위자료를 청구할 수 있나요?',
        answer:
          '<strong>단기소멸시효 기산점과 장애사유에 따라 청구 가능 여부가 달라지는 영역입니다.</strong> 손해·가해자 인지 시점 자료를 정리.',
      },
      {
        question: '위자료 시효는 언제부터 진행되나요?',
        answer:
          '<strong>손해 및 가해자를 안 날부터 3년의 단기소멸시효가 진행되는 영역입니다.</strong> 이혼·인지 시점 자료를 정리.',
      },
      {
        question: '상대가 행방을 감춰 청구를 못 한 경우도 시효가 가나요?',
        answer:
          '<strong>객관적 장애사유가 있었다면 상대의 시효 항변이 권리남용으로 제한될 수 있는 영역입니다.</strong> 행방불명·연락두절 입증 자료를 정리.',
      },
      {
        question: '시효 지났다고 상대가 주장하면 막을 방법이 없나요?',
        answer:
          '<strong>소멸시효 항변도 신의칙·권리남용 금지의 지배를 받아 제한될 수 있는 영역입니다.</strong> 장애사유·해소 시점 자료를 정리.',
      },
      {
        question: '청구 전에 시효를 멈추려면 어떻게 하나요?',
        answer:
          '<strong>청구·내용증명 등으로 시효 중단으로 평가될 수 있는 조치를 검토하는 영역입니다.</strong> 청구·통지 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '이혼 위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '배우자 도박 채무 누적 이혼 사유', href: '/guide/divorce/divorce-spouse-gambling-debt-accumulation-grounds-track' },
      { label: '장기 별거 후 이혼 청구', href: '/guide/divorce/divorce-long-separation-marriage-breakdown-track' },
      { label: '재산분할 제척기간', href: '/guide/divorce/divorce-consensual-property-division-2year-claim' },
    ],
  },

  // ─── 3. divorce-foreign-spouse-jurisdiction-agreement-track ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-jurisdiction-agreement-track',
    keyword: '외국인 배우자 재판관할 합의',
    questionKeyword: '외국인 배우자와 결혼하면서 분쟁은 상대 나라 법원에서만 다룬다는 합의가 있었는데, 막상 이혼하려니 한국 법원에 소송을 낼 수 있는지 막막해요. 외국 법원만 정한 전속 합의가 항상 유효한지, 한국에 살며 자녀도 있는데 그 합의가 너무 불공정하면 효력이 없는지 궁금합니다.',
    ctaKeyword: '외국인 배우자 재판관할 합의·전속관할 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 재판관할 합의 — 5단계 전속관할·효력 점검 | 로앤가이드',
      description:
        '외국인 배우자와의 외국법원 전속 재판관할합의로 이혼 소송이 고민이라면, 합리적 관련성·공서양속 위반 여부와 합의 유효 요건·한국 법원 관할까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"외국인 배우자와 결혼하면서, 결혼 초에 \'분쟁이 생기면 상대 나라 법원에서만 다룬다\'는 취지의 합의를 해 둔 적이 있는데, 막상 이혼을 정리하려니 그 합의 때문에 한국 법원에 소송조차 낼 수 없는 것은 아닌지 막막한 상황입니다. 저는 오랫동안 한국에서 생활해 왔고 함께 키우는 자녀도 한국에 있어, 멀리 떨어진 외국 법원에서 절차를 진행하는 것은 사실상 불가능에 가깝습니다. 이렇게 외국 법원만을 관할로 정한 전속적 합의가 항상 그대로 유효한지, 우리 사건이 그 외국 법원과 합리적인 관련이 있어야 하는 것은 아닌지, 그 합의가 한쪽에게 지나치게 불리해 현저히 불합리하고 불공정하다면 효력이 없는 것은 아닌지 도무지 가늠이 되지 않아 답답한 상태입니다." 국제사법은 대한민국 법원이 국제재판관할을 가지는 경우와 당사자 간 국제재판관할의 합의를 규율하는 영역입니다. 판례는 대한민국 법원의 관할을 배제하고 외국의 법원을 관할법원으로 하는 전속적인 국제재판관할의 합의가 유효하기 위해서는, 해당 사건이 대한민국 법원의 전속관할에 속하지 아니하고 지정된 외국법원이 그 외국법상 해당 사건에 대하여 관할권을 가져야 하는 외에 해당 사건이 그 외국법원에 대하여 합리적인 관련성을 가질 것이 요구되고, 그와 같은 전속적인 관할합의가 현저하게 불합리하고 불공정하여 공서양속에 반하는 법률행위에 해당하지 않는 한 그 관할합의는 유효하다고 본 사례 흐름이 있는 영역입니다. 외국 법원 합의 + 한국 거주·자녀 + 전속관할 결합은 \'합리적 관련성·공서양속·관할\' 정리가 필요한 트랙입니다. 당사자라면 ① 관할합의 확인 ② 합리적 관련성 ③ 공서양속 ④ 한국 관할 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 합의 ② 관련성 ③ 공서양속 ④ 관할 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 배우자 재판관할 합의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관할합의 확인·합리적 관련성·공서양속·한국 관할·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관할합의 확인</strong> — 외국법원 전속 관할합의의 존재·내용·범위 정리.</li>\n<li><strong>② 합리적 관련성</strong> — 사건과 지정 외국법원의 합리적 관련성 검토.</li>\n<li><strong>③ 공서양속</strong> — 합의가 현저히 불합리·불공정해 공서양속에 반하는지 검토.</li>\n<li><strong>④ 한국 관할</strong> — 한국 거주·자녀 등 한국 법원의 국제재판관할 정리.</li>\n<li><strong>⑤ 청구</strong> — 이혼·재산분할·친권·양육 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 외국법원 전속 관할합의가 유효하려면 한국 법원의 전속관할에 속하지 않고 지정 외국법원이 관할권을 가지며 사건과 합리적 관련성이 있어야 하고, 합의가 현저히 불합리·불공정해 공서양속에 반하지 않는 한 유효한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관할합의·거주 자료 정리 (즉시)</strong> — 관할합의 내용, 한국 거주·체류·자녀 거주 자료 정리.</li>\n<li><strong>2단계 — 합리적 관련성 정리 (1~2주)</strong> — 사건과 지정 외국법원의 합리적 관련성 정리.</li>\n<li><strong>3단계 — 공서양속·관할 정리 (2~3주)</strong> — 합의의 불합리·불공정성, 한국 법원 국제재판관할 정리.</li>\n<li><strong>4단계 — 이혼·관할 청구 (소 제기 시)</strong> — 이혼·재산분할·친권·양육 청구, 관할 주장 정리.</li>\n<li><strong>5단계 — 판결·집행 (선고 후)</strong> — 판결·집행, 외국 판결 승인·집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 배우자 재판관할 합의·전속관할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관할합의·관련성·관할 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·외국인등록 자료 (혼인·신분)</strong></li>\n<li><strong>관할합의 문서·계약·서신 자료 (합의 내용)</strong></li>\n<li><strong>한국 거주·체류·주소 입증 자료 (한국 관할)</strong></li>\n<li><strong>자녀 거주·양육 현황 자료 (관련성·양육)</strong></li>\n<li><strong>혼인생활·재산 형성 경위 자료 (사건 관련성)</strong></li>\n<li><strong>합의 체결 경위·불공정 정황 자료 (공서양속)</strong></li>\n<li><strong>재산·소득 자료 (재산분할)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국법원 전속 관할합의는 사건이 그 외국법원과 합리적 관련성을 가져야 유효한 영역이므로 한국 거주·자녀·재산 형성 등 사건과 한국의 관련성을 보여주는 자료를 정리하는 것이 핵심. 합의가 현저히 불합리·불공정해 공서양속에 반하는 경우 효력이 부정될 수 있으므로 합의 체결 경위와 불공정 정황 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전속관할</strong> — 한국 법원의 전속관할에 속하는 사건인지.</li>\n<li><strong>합리적 관련성</strong> — 사건과 지정 외국법원의 합리적 관련성.</li>\n<li><strong>공서양속</strong> — 합의가 현저히 불합리·불공정한지.</li>\n<li><strong>한국 관할</strong> — 한국 거주·자녀 등으로 한국 법원에 관할이 있는지.</li>\n<li><strong>판결 승인·집행</strong> — 외국 판결의 승인·집행 가능 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할·친권·양육 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>다누리콜센터 1577-1366 (다문화·외국인 가정 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전속적 국제재판관할합의의 유효 요건',
        summary:
          '대법원 2017다219232(대법원, 2023.04.13 선고) 영역에서 법원은 대한민국 법원의 관할을 배제하고 외국의 법원을 관할법원으로 하는 전속적인 국제재판관할의 합의가 유효하기 위해서는, 해당 사건이 대한민국 법원의 전속관할에 속하지 아니하고 지정된 외국법원이 그 외국법상 해당 사건에 대하여 관할권을 가져야 하는 외에 해당 사건이 그 외국법원에 대하여 합리적인 관련성을 가질 것이 요구된다고 보았습니다. 또한 그와 같은 전속적인 관할합의가 현저하게 불합리하고 불공정하여 공서양속에 반하는 법률행위에 해당하지 않는 한 그 관할합의는 유효하다고 판시했습니다. 외국인 배우자와의 이혼 사안에서도 전속 관할합의의 합리적 관련성·공서양속 위반 여부와 한국 법원의 국제재판관할을 검토해볼 수 있습니다.',
        takeaway: '외국 법원 합의 + 한국 거주·자녀 + 전속관할 결합 시 전속관할 해당 여부·합리적 관련성·공서양속 위반 여부·한국 법원 국제재판관할 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '외국 법원에서만 다룬다는 합의가 있으면 한국에 소송을 못 내나요?',
        answer:
          '<strong>합리적 관련성·공서양속 위반 여부 등에 따라 합의 효력과 한국 관할이 달라지는 영역입니다.</strong> 관할합의 내용·거주 자료를 정리.',
      },
      {
        question: '외국 법원만 정한 전속 합의는 항상 유효한가요?',
        answer:
          '<strong>사건과 그 외국법원의 합리적 관련성이 있어야 유효하게 인정될 수 있는 영역입니다.</strong> 사건 관련성 자료를 정리.',
      },
      {
        question: '합의가 너무 불공정하면 효력이 없나요?',
        answer:
          '<strong>현저히 불합리·불공정해 공서양속에 반하면 그 합의의 효력이 부정될 수 있는 영역입니다.</strong> 체결 경위·불공정 정황 자료를 정리.',
      },
      {
        question: '한국에 살고 자녀도 한국에 있으면 한국 법원이 맡나요?',
        answer:
          '<strong>거주·자녀 등 사건과 한국의 관련성에 따라 한국 법원의 국제재판관할이 검토되는 영역입니다.</strong> 거주·양육 현황 자료를 정리.',
      },
      {
        question: '외국에서 받은 이혼 판결은 한국에서 인정되나요?',
        answer:
          '<strong>승인 요건을 갖추면 외국 판결의 승인·집행이 검토될 수 있는 영역입니다.</strong> 판결문·송달·요건 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '외국인 배우자 이혼 절차', href: '/guide/divorce/divorce-foreign-spouse-track' },
      { label: '국제재판관할 판단', href: '/guide/divorce/divorce-international-jurisdiction-spouse' },
      { label: '외국 판결 승인·집행', href: '/guide/divorce/divorce-foreign-judgment-recognition-track' },
      { label: '재판상 이혼 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
    ],
  },

  // ─── 4. divorce-disposed-asset-substitute-property-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-disposed-asset-substitute-property-division-track',
    keyword: '처분 재산 대상재산 분할',
    questionKeyword: '이혼하려는데 배우자가 공동재산이던 부동산을 팔아 버렸어요. 이미 처분돼 사라진 재산은 분할에서 빠지는지, 그 대신 받은 매각 대금이나 그 돈으로 산 다른 재산은 분할 대상이 되는지 막막해요. 분할 대상과 금액은 언제를 기준으로 정하는지도 궁금합니다.',
    ctaKeyword: '처분 재산 대상재산 분할·기준시기 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '처분 재산 대상재산 분할 — 5단계 분할대상·대상재산 점검 | 로앤가이드',
      description:
        '배우자가 공동재산을 처분해 분할이 걱정이라면, 민법 제839조의2 분할 대상과 처분된 본래 재산의 제외·그 대가로 취득한 대상재산(代償財産)의 분할 포함까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 준비하던 중 배우자가 혼인 기간 동안 함께 모아 공동재산이라 여겨 온 부동산을 저와 상의도 없이 팔아 버려, 정작 나눌 재산이 사라지는 것은 아닌지 막막한 상황입니다. 이미 처분돼 더 이상 남아 있지 않은 그 부동산은 재산분할에서 아예 빠지는 것인지, 아니면 배우자가 그 대가로 받은 매각 대금이나 그 돈으로 새로 사들인 다른 재산이 분할의 대상이 되는지부터 모르겠습니다. 또 그렇게 처분과 재취득이 뒤섞인 상황에서 분할의 대상과 그 금액은 도대체 언제를 기준으로 정해지는지, 처분 과정에서 일부를 빼돌렸다면 어떻게 다뤄지는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2는 재산분할청구권을, 같은 조 제2항은 당사자 쌍방의 협력으로 이룩한 재산의 액수 등을 참작한 분할의 액수·방법을 정하는 영역입니다. 판례는 상속재산분할에 관하여 상속개시 당시 상속재산을 구성하던 재산이 그 후 처분되거나 멸실·훼손되는 등으로 분할 당시 상속재산을 구성하지 아니하게 되었다면 그 재산은 원칙적으로 분할의 대상이 될 수 없으나, 그 대가로 처분대금·보험금·보상금 등 대상재산(代償財産)을 취득하게 된 경우에는 그 대상재산이 분할의 대상이 될 수 있다고 보아 \'처분된 본래 재산은 제외하되 그 대가로 취득한 대상재산은 분할 대상에 포함\'하는 법리를 제시한 사례 흐름이 있는 영역입니다. 공동재산 처분 + 대상재산 취득 + 기준시기 결합은 \'분할대상·대상재산·기준시기\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산·처분 파악 ② 대상재산 ③ 분할대상 ④ 기준시기 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 대상재산 ③ 대상 ④ 기준 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 처분 재산 대상재산 분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·처분 파악·대상재산·분할대상·기준시기·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·처분 파악</strong> — 처분된 부동산·재산과 처분 시점·경위 파악.</li>\n<li><strong>② 대상재산</strong> — 매각 대금·보상금·재취득 재산 등 대상재산(代償財産) 추적.</li>\n<li><strong>③ 분할대상</strong> — 처분된 본래 재산은 제외, 대상재산의 분할 포함 정리.</li>\n<li><strong>④ 기준시기</strong> — 분할 대상·가액의 기준 시점 정리.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 처분되어 더 이상 남지 않은 본래 재산은 원칙적으로 분할 대상이 될 수 없으나 그 대가로 취득한 대상재산(처분대금·보상금·재취득 재산)은 분할 대상이 될 수 있으므로 처분과 대상재산의 흐름을 추적하는 것이 필요한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분·자금 흐름 자료 보존 (즉시)</strong> — 처분된 재산 등기·매매계약·매각 대금 입출금 자료 보존.</li>\n<li><strong>2단계 — 대상재산 추적 (1~2주)</strong> — 매각 대금·보상금·재취득 재산 등 대상재산 추적·정리.</li>\n<li><strong>3단계 — 분할대상·기준시기 정리 (2~3주)</strong> — 본래 재산 제외·대상재산 포함, 가액 기준 시점 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">처분 재산 대상재산 분할·기준시기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 처분·대상재산·분할 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>처분된 부동산 등기·매매계약 자료 (처분 사실)</strong></li>\n<li><strong>매각 대금 입출금·이체 내역 자료 (자금 흐름)</strong></li>\n<li><strong>대금으로 취득한 재산·보상금 자료 (대상재산)</strong></li>\n<li><strong>부부 적극·소극재산 목록 (분할 대상)</strong></li>\n<li><strong>처분 경위·은닉 정황 자료 (처분 취급)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 처분되어 더 이상 남지 않은 본래 재산은 원칙적으로 분할 대상에서 빠지지만 그 대가로 취득한 매각 대금·보상금·재취득 재산 등 대상재산(代償財産)은 분할 대상이 될 수 있는 영역이므로 처분된 재산의 등기·매매계약과 그 대금의 자금 흐름을 추적한 자료를 정리하는 것이 핵심. 처분 과정의 은닉·유용 정황도 함께 챙겨두면 분할 대상 범위를 따질 때 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>본래 재산 제외</strong> — 처분돼 사라진 재산이 분할 대상에서 빠지는지.</li>\n<li><strong>대상재산 포함</strong> — 매각 대금·보상금·재취득 재산이 분할 대상인지.</li>\n<li><strong>자금 추적</strong> — 처분 대금의 흐름과 대상재산을 특정할 수 있는지.</li>\n<li><strong>기준시기</strong> — 분할 대상·가액의 기준 시점.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 처분된 재산의 제외와 대상재산(代償財産)의 분할 포함',
        summary:
          '대법원 2017스98(대법원, 2022.06.30 선고) 영역에서 법원은 상속재산분할의 기준이 되는 구체적 상속분의 산정과 관련하여, 상속개시 당시 상속재산을 구성하던 재산이 그 후 처분되거나 멸실·훼손되는 등으로 상속재산분할 당시 상속재산을 구성하지 아니하게 된 경우 원칙적으로 분할의 대상이 될 수 없으나, 그 대가로 처분대금·보험금·보상금 등 대상재산(代償財産)을 취득하게 된 경우에는 그 대상재산이 분할의 대상이 될 수 있다고 판시했습니다. 이러한 처분된 본래 재산의 제외·대상재산의 포함 법리는 분할 대상 산정에 관한 일반적 기준을 보여주는 것으로서, 이혼 재산분할에서 공동재산이 처분된 사안에서도 처분된 재산의 제외 여부와 그 대가로 취득한 대상재산의 분할 포함 여부를 검토해볼 수 있습니다.',
        takeaway: '공동재산 처분 + 대상재산 취득 + 기준시기 결합 시 처분된 본래 재산의 제외·대가로 취득한 대상재산의 분할 포함·가액 기준 시점 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자가 팔아 버린 공동재산도 나눌 수 있나요?',
        answer:
          '<strong>처분돼 사라진 본래 재산은 원칙적으로 제외되나 그 대가로 취득한 대상재산은 분할될 수 있는 영역입니다.</strong> 처분·자금 흐름 자료를 정리.',
      },
      {
        question: '판 돈이나 그 돈으로 산 재산은 분할 대상이 되나요?',
        answer:
          '<strong>매각 대금·보상금·재취득 재산 등 대상재산은 분할 대상이 될 수 있는 영역입니다.</strong> 대금 이체·재취득 자료를 정리.',
      },
      {
        question: '이미 사라진 재산은 무조건 빠지나요?',
        answer:
          '<strong>대가로 취득한 대상재산을 특정할 수 있으면 그 대상재산으로 분할이 검토되는 영역입니다.</strong> 자금 추적 자료를 정리.',
      },
      {
        question: '분할 금액은 언제를 기준으로 정하나요?',
        answer:
          '<strong>분할 대상과 가액은 기준 시점을 정해 산정하는 영역입니다.</strong> 재산·평가 자료를 정리.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·재산 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '이혼 시 재산분할 대상은 무엇인가요?', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '재산 처분 방지·가압류', href: '/guide/divorce/divorce-asset-transfer-prevention-attachment' },
      { label: '숨긴 재산 추적', href: '/guide/divorce/divorce-hidden-asset-property-tracing-track' },
      { label: '이혼 재산명시 재산조회 신청', href: '/guide/divorce/divorce-husband-rejected-property-disclose' },
    ],
  },

  // ─── 5. defamation-public-official-conviction-disqualification-track ───
  {
    domain: 'defamation',
    slug: 'defamation-public-official-conviction-disqualification-track',
    keyword: '공무원 명예훼손 유죄 결격',
    questionKeyword: '공무원인데 명예훼손 사건으로 벌금형이 나올 수 있는 상황이라, 유죄가 되면 공무원 결격이나 당연퇴직이 되는 것은 아닌지 막막해요. 다른 죄와 함께 재판받으면 벌금이 합쳐져 불리해지는지, 결격 대상이 되는 범죄와 그렇지 않은 죄는 따로 형을 정하는지 궁금합니다.',
    ctaKeyword: '공무원 명예훼손 유죄 결격·분리선고 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '공무원 명예훼손 유죄 결격 — 5단계 결격·분리선고 점검 | 로앤가이드',
      description:
        '명예훼손 사건으로 공무원 결격·당연퇴직이 걱정이라면, 국가공무원법 제33조 결격사유와 결격대상범죄·다른 죄의 경합 시 벌금형 분리선고 규정까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공직에 있으면서 뜻하지 않게 명예훼손 사건에 휘말려 벌금형이 선고될 수도 있는 상황이 되자, 정작 형사처벌 자체보다 \'유죄가 되면 공무원 자리를 잃는 것은 아닌지\'가 더 막막한 상황입니다. 명예훼손으로 벌금형을 받으면 곧바로 공무원 결격이나 당연퇴직이 되는 것인지, 아니면 결격 대상이 되는 범죄가 따로 정해져 있는지부터 모르겠습니다. 게다가 이 사건이 다른 죄와 함께 한꺼번에 재판을 받게 되면, 여러 죄의 벌금이 합쳐져 형이 더 무거워지고 그 때문에 결격이나 당연퇴직 위험이 커지는 것은 아닌지 불안합니다. 결격 대상이 되는 범죄와 그렇지 않은 죄는 형을 따로 정해 선고하는 제도가 있는지 도무지 가늠이 되지 않아 답답한 상태입니다." 국가공무원법 제33조와 지방공무원법 제31조는 공무원의 결격사유를, 같은 법 제69조·제61조는 그 사유가 있으면 당연히 퇴직하는 당연퇴직을 정하고, 국가공무원법 제33조의2·지방공무원법 제31조의2는 결격대상범죄와 다른 죄의 경합범에 대하여 벌금형을 선고하는 경우 형법 제38조에도 불구하고 분리하여 선고하도록 정하는 영역입니다. 판례는 이러한 결격사유·당연퇴직 규정이 공무원이 국민의 신뢰를 바탕으로 고도의 윤리성과 준법의식이 요구되는 직업적·신분적 특징이 있음을 고려해 특정한 범죄(결격대상범죄)에 관한 형선고 전력을 결격사유로 정한 것이라고 보면서, 분리 선고 규정은 결격대상범죄가 아닌 다른 죄가 결격대상범죄의 양형에 영향을 미치는 것을 최소화하려는 취지라고 본 사례 흐름이 있는 영역입니다. 명예훼손 벌금형 + 경합범 + 결격·분리선고 결합은 \'결격사유·당연퇴직·분리선고\' 정리가 필요한 트랙입니다. 당사자라면 ① 혐의·죄명 ② 결격대상 ③ 경합범 ④ 분리선고 ⑤ 신분 영향 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 죄명 ② 결격 ③ 경합 ④ 분리 ⑤ 신분 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공무원 명예훼손 유죄 결격 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의·죄명·결격대상·경합범·분리선고·신분 영향 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 혐의·죄명</strong> — 명예훼손 등 적용 죄명·예상 형종(벌금형 여부) 정리.</li>\n<li><strong>② 결격대상</strong> — 해당 죄가 결격사유·당연퇴직 대상 범죄인지 검토.</li>\n<li><strong>③ 경합범</strong> — 다른 죄와 함께 기소된 경합범 구조 정리.</li>\n<li><strong>④ 분리선고</strong> — 결격대상범죄와 다른 죄의 벌금형 분리선고 검토.</li>\n<li><strong>⑤ 신분 영향</strong> — 형 확정 시 결격·당연퇴직 등 신분상 영향 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 결격사유·당연퇴직은 특정 결격대상범죄에 관한 형선고 전력을 기준으로 하고, 결격대상범죄와 다른 죄가 경합할 때 벌금형은 분리하여 선고함으로써 다른 죄가 결격대상범죄의 양형에 미치는 영향을 최소화하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 죄명·기소 내용 정리 (즉시)</strong> — 적용 죄명, 공소사실, 예상 형종·형량 정리.</li>\n<li><strong>2단계 — 결격대상 검토 (1주)</strong> — 해당 죄가 결격사유·당연퇴직 대상 범죄인지 정리.</li>\n<li><strong>3단계 — 경합범·분리선고 정리 (2주)</strong> — 경합범 구조, 벌금형 분리선고 가능성 정리.</li>\n<li><strong>4단계 — 양형·방어 (재판 시)</strong> — 양형 자료·분리선고 주장, 형종·형량 방어 검토.</li>\n<li><strong>5단계 — 신분 영향·이의 (확정 후)</strong> — 결격·당연퇴직 여부, 인사·소청 등 신분 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공무원 명예훼손 유죄 결격·분리선고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 죄명·결격·분리선고 갈래입니다.</strong></p>\n<ul>\n<li><strong>공소장·죄명·공소사실 자료 (적용 죄명)</strong></li>\n<li><strong>예상 형종·형량 관련 자료 (벌금형 여부)</strong></li>\n<li><strong>결격사유·당연퇴직 규정 확인 자료 (결격대상)</strong></li>\n<li><strong>경합 기소된 다른 죄 자료 (경합범 구조)</strong></li>\n<li><strong>양형 자료·정상 참작 자료 (형량 방어)</strong></li>\n<li><strong>재직·인사 관련 자료 (신분 영향)</strong></li>\n<li><strong>의견서·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공무원 결격·당연퇴직은 모든 유죄가 아니라 특정 결격대상범죄의 형선고 전력을 기준으로 하는 영역이므로 적용 죄명이 결격대상에 해당하는지부터 정리하는 것이 핵심. 결격대상범죄와 다른 죄가 경합할 때 벌금형은 분리하여 선고하도록 정해져 있어 다른 죄의 형이 합산되어 불리해지는지를 함께 점검하고, 양형 자료와 분리선고 주장 근거를 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>결격대상</strong> — 적용 죄명이 결격사유·당연퇴직 대상 범죄인지.</li>\n<li><strong>형종·형량</strong> — 벌금형 등 선고 형이 결격 기준에 닿는지.</li>\n<li><strong>경합범</strong> — 다른 죄와 함께 기소된 경합범 구조인지.</li>\n<li><strong>분리선고</strong> — 결격대상범죄와 다른 죄의 벌금형이 분리 선고되는지.</li>\n<li><strong>신분 영향</strong> — 형 확정 시 결격·당연퇴직 등 신분상 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무원 결격사유·당연퇴직과 벌금형 분리선고의 취지',
        summary:
          '대법원 2023도12878(대법원, 2024.10.31 선고) 영역에서 법원은 국가공무원법 제33조와 지방공무원법 제31조가 \'결격사유\'라는 표제하에 공무원으로 임용될 수 없는 사유를 정하고, 같은 법 제69조·제61조는 \'당연퇴직\'이라는 표제하에 위 결격사유가 있으면 공무원이 당연히 퇴직한다고 정하며, 이러한 규정은 공무원이 국민의 신뢰를 바탕으로 고도의 윤리성과 준법의식이 요구되는 직업적·신분적 특징이 있음을 고려하여 특정한 범죄(결격대상범죄)에 관한 형선고 전력을 결격사유(당연퇴직사유)로 정한 것이라고 보았습니다. 또한 국가공무원법 제33조의2·지방공무원법 제31조의2가 결격대상범죄와 다른 죄의 경합범에 대하여 벌금형을 선고하는 경우 형법 제38조에도 불구하고 분리하여 선고하도록 한 취지는, 공무원의 자격 유무에 영향을 미치는 결격대상범죄가 아닌 다른 죄가 결격대상범죄의 양형에 영향을 미치는 것을 최소화하려는 데 있다고 판시했습니다. 공무원 명예훼손 사안에서도 결격대상 해당 여부·경합범 구조·벌금형 분리선고를 검토해볼 수 있습니다.',
        takeaway: '명예훼손 벌금형 + 경합범 + 결격·분리선고 결합 시 결격대상범죄 해당 여부·당연퇴직 영향·결격대상범죄와 다른 죄의 벌금형 분리선고 검토 영역 — 변호사 상담·양형·신분 절차 검토 권장.',
      },
    ],
    faq: [
      {
        question: '명예훼손으로 벌금형을 받으면 공무원 결격이 되나요?',
        answer:
          '<strong>모든 유죄가 아니라 결격대상범죄의 형선고 전력을 기준으로 결격·당연퇴직이 정해지는 영역입니다.</strong> 적용 죄명·결격사유 규정 자료를 정리.',
      },
      {
        question: '유죄가 되면 곧바로 당연퇴직이 되나요?',
        answer:
          '<strong>당연퇴직은 결격사유에 해당하는 형이 확정될 때 문제되는 영역입니다.</strong> 형종·형량·확정 여부 자료를 정리.',
      },
      {
        question: '다른 죄와 함께 재판받으면 벌금이 합쳐져 불리해지나요?',
        answer:
          '<strong>결격대상범죄와 다른 죄의 벌금형은 분리하여 선고하도록 정해져 있는 영역입니다.</strong> 경합범 구조 자료를 정리.',
      },
      {
        question: '분리선고는 왜 하는 것인가요?',
        answer:
          '<strong>결격대상이 아닌 다른 죄가 결격대상범죄의 양형에 미치는 영향을 최소화하려는 취지인 영역입니다.</strong> 죄명별 양형 자료를 정리.',
      },
      {
        question: '신분상 불이익이 걱정되면 무엇을 준비해야 하나요?',
        answer:
          '<strong>죄명의 결격대상 여부·예상 형종과 양형 자료를 미리 정리해두는 것이 도움이 되는 영역입니다.</strong> 공소사실·양형 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '직장 내 험담 명예훼손 대응', href: '/guide/defamation/defamation-workplace-rumor-response' },
      { label: '명예훼손 합의금 적정 금액 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '딥페이크 피해 신속삭제', href: '/guide/defamation/defamation-deepfake-victim-takedown-procedure' },
      { label: '온라인 후기 사실적시 명예훼손 진실성 항변', href: '/guide/defamation/defamation-online-review-truth-defense' },
    ],
  },

  // ─── 6. defamation-repeated-posts-single-crime-track ───
  {
    domain: 'defamation',
    slug: 'defamation-repeated-posts-single-crime-track',
    keyword: '반복 게시 포괄일죄 명예훼손',
    questionKeyword: '누군가 같은 내용으로 저를 비방하는 글을 여러 번 반복해 올려 왔는데, 이미 그중 일부 글로 처벌이 확정됐어요. 그러면 확정된 사건 이전에 올린 나머지 글들은 그 판결에 묻혀 다시 처벌이 안 되는지, 한 죄로 묶이는 범위는 어디까지인지 막막합니다.',
    ctaKeyword: '반복 게시 포괄일죄 명예훼손 기판력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '반복 게시 포괄일죄 명예훼손 — 5단계 포괄일죄·기판력 점검 | 로앤가이드',
      description:
        '같은 비방 글이 반복돼 일부만 처벌된 상황이라면, 반복 게시의 포괄일죄 여부와 확정판결·약식명령의 기판력이 미치는 범위·기준 시점까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"누군가 같은 취지의 비방 글을 시간 간격을 두고 여러 차례 반복해 올려 저를 괴롭혀 왔는데, 그중 일부 글에 대해서는 이미 형사 처벌이 확정되거나 약식명령이 내려진 상황입니다. 그런데 막상 나머지 글들에 대해서도 책임을 묻고 싶어 알아보니, \'같은 행위가 하나의 죄로 묶이면 이미 확정된 판결의 효력이 그 전의 글들에까지 미친다\'는 이야기가 있어 혼란스럽습니다. 이미 확정된 사건 이전에 올라온 다른 글들은 그 판결에 묻혀 더 이상 처벌할 수 없게 되는 것인지, 반복된 게시들이 하나의 죄로 묶이는 \'포괄일죄\'의 범위는 어디까지인지, 어느 시점을 기준으로 그 효력이 갈리는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법은 단일하고 계속된 범의 아래 동종의 행위가 반복된 경우의 포괄일죄를, 형사소송법은 확정판결의 기판력(일사부재리)을 규율하는 영역입니다. 판례는 포괄일죄 관계인 범행의 일부에 대하여 판결이 확정된 경우에는 사실심 판결선고 시를 기준으로, 약식명령이 확정된 경우에는 약식명령 발령 시를 기준으로 그 이전에 이루어진 범행에 대하여는 확정판결의 기판력이 미친다고 보면서, 상상적 경합범 중 1죄에 대한 확정판결의 기판력은 다른 죄에 대하여도 미치므로 그 이전에 이루어진 범행이 포괄일죄의 일부에 해당할 뿐만 아니라 그와 상상적 경합관계에 있는 다른 죄에도 해당하는 경우에는 확정된 판결 내지 약식명령의 기판력이 그 다른 죄에 대하여도 미친다고 본 사례 흐름이 있는 영역입니다. 반복 게시 + 포괄일죄 + 기판력 결합은 \'포괄일죄·기판력 범위·기준 시점\' 정리가 필요한 트랙입니다. 당사자라면 ① 게시 시기 정리 ② 포괄일죄 ③ 확정 시점 ④ 기판력 범위 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 시기 ② 포괄일죄 ③ 확정 ④ 기판력 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반복 게시 포괄일죄 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시 시기 정리·포괄일죄·확정 시점·기판력 범위·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시 시기 정리</strong> — 반복 게시물의 내용·작성 일시·게시 순서 정리.</li>\n<li><strong>② 포괄일죄</strong> — 단일·계속된 범의 아래 동종 행위로 포괄일죄인지 검토.</li>\n<li><strong>③ 확정 시점</strong> — 일부 확정판결의 사실심 판결선고 시·약식명령 발령 시 정리.</li>\n<li><strong>④ 기판력 범위</strong> — 기준 시점 이전 범행에 미치는 기판력 범위 검토.</li>\n<li><strong>⑤ 대응</strong> — 미확정·기준 시점 이후 게시에 대한 고소·민사 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 포괄일죄 일부에 판결이 확정되면 사실심 판결선고 시(약식명령은 발령 시) 이전 범행에 기판력이 미치고, 상상적 경합관계의 다른 죄에도 기판력이 미칠 수 있으므로 게시 시기와 확정 시점을 정확히 정리하는 것이 필요한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·시기 보존 (즉시)</strong> — 반복 게시물 내용·작성 일시·URL·게시 순서 보존.</li>\n<li><strong>2단계 — 포괄일죄 정리 (1주)</strong> — 단일·계속된 범의, 동종 행위의 반복 여부 정리.</li>\n<li><strong>3단계 — 확정 시점 확인 (2주)</strong> — 일부 확정판결·약식명령의 기준 시점 확인.</li>\n<li><strong>4단계 — 기판력 범위 검토 (분쟁 시)</strong> — 기준 시점 이전·이후 게시의 기판력 범위 검토.</li>\n<li><strong>5단계 — 고소·민사 대응 (병행)</strong> — 기준 시점 이후 등 처벌 가능 게시에 대한 고소·손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">반복 게시 포괄일죄 명예훼손 기판력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 게시 시기·포괄일죄·기판력 갈래입니다.</strong></p>\n<ul>\n<li><strong>반복 게시물 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>각 게시물 작성 일시·순서 자료 (게시 시기)</strong></li>\n<li><strong>작성자 계정·동일성 자료 (단일 범의)</strong></li>\n<li><strong>일부 확정판결·약식명령 자료 (확정 시점)</strong></li>\n<li><strong>기준 시점 전후 게시 대조 자료 (기판력 범위)</strong></li>\n<li><strong>평판·관계 피해 자료 (피해 입증)</strong></li>\n<li><strong>고소장·진정서 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 반복 게시가 단일·계속된 범의 아래 동종 행위로 포괄일죄로 묶이면 일부 확정판결의 기판력이 사실심 판결선고 시(약식명령은 발령 시) 이전 범행에까지 미치는 영역이므로 각 게시물의 작성 일시와 일부 확정판결·약식명령의 기준 시점을 정확히 정리하는 것이 핵심. 기준 시점 이후에 새로 이루어진 게시는 별도로 다툴 수 있으므로 전후 게시를 대조한 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>포괄일죄</strong> — 반복 게시가 하나의 죄로 묶이는지.</li>\n<li><strong>확정 시점</strong> — 사실심 판결선고 시·약식명령 발령 시 기준.</li>\n<li><strong>기판력 범위</strong> — 기준 시점 이전 범행에 기판력이 미치는지.</li>\n<li><strong>상상적 경합</strong> — 다른 죄에도 기판력이 미치는지.</li>\n<li><strong>대응 범위</strong> — 기준 시점 이후 게시를 별도로 다툴 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄일죄·상상적 경합과 확정판결 기판력의 범위',
        summary:
          '대법원 2020도3705(대법원, 2023.06.29 선고) 영역에서 법원은 포괄일죄 관계인 범행의 일부에 대하여 판결이 확정된 경우에는 사실심 판결선고 시를 기준으로, 약식명령이 확정된 경우에는 약식명령 발령 시를 기준으로 그 이전에 이루어진 범행에 대하여는 확정판결의 기판력이 미친다고 보았습니다. 또한 상상적 경합범 중 1죄에 대한 확정판결의 기판력은 다른 죄에 대하여도 미치므로, 포괄일죄 관계인 범행의 일부에 대하여 판결이 확정되거나 약식명령이 확정되었는데 그 사실심 판결선고 시 또는 약식명령 발령 시를 기준으로 그 이전에 이루어진 범행이 포괄일죄의 일부에 해당할 뿐만 아니라 그와 상상적 경합관계에 있는 다른 죄에도 해당하는 경우에는 확정된 판결 내지 약식명령의 기판력이 그 다른 죄에 대하여도 미친다고 판시했습니다. 반복 게시 명예훼손 사안에서도 포괄일죄 여부·기판력의 기준 시점과 그 범위를 검토해볼 수 있습니다.',
        takeaway: '반복 게시 + 포괄일죄 + 기판력 결합 시 포괄일죄 해당 여부·사실심 판결선고 시(약식명령 발령 시) 기준·상상적 경합관계 다른 죄에 대한 기판력 검토 영역 — 변호사 상담·고소·민사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '일부 글로 처벌이 확정되면 나머지 글은 처벌이 안 되나요?',
        answer:
          '<strong>포괄일죄로 묶이면 확정판결 기준 시점 이전 범행에 기판력이 미칠 수 있는 영역입니다.</strong> 게시 일시·확정 시점 자료를 정리.',
      },
      {
        question: '반복된 글들이 하나의 죄로 묶이는 기준은 무엇인가요?',
        answer:
          '<strong>단일·계속된 범의 아래 동종 행위가 반복됐는지로 포괄일죄가 검토되는 영역입니다.</strong> 작성자·내용 동일성 자료를 정리.',
      },
      {
        question: '기판력은 어느 시점을 기준으로 갈리나요?',
        answer:
          '<strong>사실심 판결선고 시, 약식명령은 발령 시를 기준으로 그 이전 범행에 미치는 영역입니다.</strong> 확정판결·약식명령 자료를 정리.',
      },
      {
        question: '확정 이후에 새로 올린 글도 묻히나요?',
        answer:
          '<strong>기준 시점 이후의 게시는 별도로 다툴 수 있는 영역입니다.</strong> 기준 시점 전후 게시 대조 자료를 정리.',
      },
      {
        question: '남은 글로 손해배상은 받을 수 있나요?',
        answer:
          '<strong>형사 기판력과 별개로 민사 손해배상을 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '헬스 트레이너 항의 명예훼손', href: '/guide/defamation/defamation-fitness-trainer-online-complaint-accused-track' },
      { label: '인터넷 댓글 명예훼손 정통망법 형법 비교', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '유튜브 댓글 실명 비방 신원조회 손해배상', href: '/guide/defamation/defamation-youtube-realname-attack-civil-damages-victim' },
      { label: '온라인 게시물 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
    ],
  },

  // ─── 7. defamation-hospital-protest-business-interference-track ───
  {
    domain: 'defamation',
    slug: 'defamation-hospital-protest-business-interference-track',
    keyword: '병원 항의 업무방해 명예훼손',
    questionKeyword: '제가 일하는 병원에 한 사람이 여러 번 찾아와 큰 소리를 지르고 진료를 막아 환자들이 떠나고 명예까지 훼손돼요. 이런 소란이 업무방해가 되는지, 병원 개설에 일부 문제가 있다는 이유로 우리 진료 업무는 보호받지 못하는 것은 아닌지 막막합니다.',
    ctaKeyword: '병원 항의 업무방해 명예훼손 보호대상 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '병원 항의 업무방해 명예훼손 — 5단계 보호대상·업무방해 점검 | 로앤가이드',
      description:
        '병원에서 반복 항의·소란으로 진료와 명예가 훼손됐다면, 형법 제314조 업무방해죄의 보호대상 업무와 개설 형태에도 불구한 진료 업무 보호 여부까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 근무하는 병원에 한 사람이 여러 차례 찾아와 큰 소리를 지르거나 진료실 앞을 막고 소란을 피워, 대기하던 환자들이 불안해하며 발길을 돌리고 정상적인 진료가 마비되는 상황이 반복되고 있습니다. 거기에 더해 사실과 다른 내용까지 퍼뜨려 의료진의 명예마저 흔들리고 있어 막막합니다. 이렇게 반복되는 소란과 진료 방해가 업무방해죄가 되는지, 또 한편으로는 상대가 \'그 병원은 개설 과정에 문제가 있으니 보호받을 업무가 아니다\'라고 주장하기도 하는데, 개설 형태에 일부 다툼이 있다는 이유만으로 실제로 환자를 진료하는 우리 의료진의 진료 업무까지 업무방해죄의 보호대상에서 빠지는 것은 아닌지 도무지 가늠이 되지 않아 답답한 상태입니다." 형법 제314조는 위계 또는 위력으로써 사람의 업무를 방해한 행위를, 형법 제307조 이하는 명예훼손을 규율하는 영역입니다. 판례는 업무방해죄의 보호대상이 되는 \'업무\'란 직업 또는 계속적으로 종사하는 사무나 사업을 말하는 것으로서 타인의 위법한 행위에 의한 침해로부터 보호할 가치가 있는 것이면 되고, 그 업무의 기초가 된 계약 또는 행정행위 등이 반드시 적법하여야 하는 것은 아니므로 그 개시나 수행 과정에 실체상·절차상의 하자가 있더라도 그 정도가 반사회성을 띠는 데까지 이르지 아니한 이상 보호대상이 된다고 보면서, 의료인이나 의료법인이 아닌 자가 의료기관을 개설·운영하는 행위 자체는 보호대상이 아니더라도 그 의료기관에 고용된 의료인의 진료 업무가 당연히 반사회성을 띠는 것은 아니므로, 그 진료 업무가 보호대상인지는 개설·운영 형태, 진료의 내용과 방식, 방해되는 업무의 내용 등을 종합적으로 고려해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 반복 소란 + 진료 방해 + 보호대상 결합은 \'업무방해·보호대상·명예\' 정리가 필요한 트랙입니다. 당사자라면 ① 소란·방해 보존 ② 업무방해 ③ 보호대상 ④ 명예훼손 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 방해 ③ 보호대상 ④ 명예 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 병원 항의 업무방해 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 소란·방해 보존·업무방해·보호대상·명예훼손·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 소란·방해 보존</strong> — 반복 방문·고성·진료 방해 정황과 일시·횟수 보존.</li>\n<li><strong>② 업무방해</strong> — 위계·위력에 의한 업무방해 해당 여부 정리.</li>\n<li><strong>③ 보호대상</strong> — 진료 업무가 보호대상 업무인지 종합 검토.</li>\n<li><strong>④ 명예훼손</strong> — 사실 적시·허위에 의한 의료진 명예훼손 정리.</li>\n<li><strong>⑤ 대응</strong> — 형사 고소·접근 제한·민사 손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 보호대상 업무는 그 기초 계약·행정행위가 반드시 적법할 필요는 없고 반사회성을 띠지 않는 한 보호되며, 개설 형태에 다툼이 있더라도 고용된 의료인의 진료 업무는 개설·운영 형태·진료 내용 등을 종합해 보호대상인지 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 소란·방해 증거 보존 (즉시)</strong> — CCTV·녹취·목격 진술·방문 일시·횟수 보존.</li>\n<li><strong>2단계 — 업무방해·보호대상 정리 (1주)</strong> — 위계·위력 정도, 진료 업무의 보호대상 여부 정리.</li>\n<li><strong>3단계 — 명예훼손·피해 정리 (2주)</strong> — 사실 적시·허위 내용, 진료 차질·매출 피해 정리.</li>\n<li><strong>4단계 — 고소·접근 제한 (분쟁 시)</strong> — 업무방해·명예훼손 고소, 접근 제한 조치 검토.</li>\n<li><strong>5단계 — 민사·합의 (병행)</strong> — 손해배상 청구·합의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병원 항의 업무방해 명예훼손 보호대상 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 업무방해·보호대상·명예 갈래입니다.</strong></p>\n<ul>\n<li><strong>CCTV·녹취·사진 자료 (소란·방해 정황)</strong></li>\n<li><strong>방문 일시·횟수·진료 중단 기록 (업무방해)</strong></li>\n<li><strong>직원·환자 목격 진술 자료 (위력·위계)</strong></li>\n<li><strong>병원 개설·운영·진료 내용 자료 (보호대상)</strong></li>\n<li><strong>적시·유포된 내용과 사실 대조 자료 (명예훼손)</strong></li>\n<li><strong>진료 차질·매출·평판 피해 자료 (피해 입증)</strong></li>\n<li><strong>고소장·접근 제한 신청 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 업무방해죄의 보호대상 업무는 그 기초가 된 계약·행정행위가 반드시 적법할 필요는 없고 반사회성을 띠지 않는 한 보호되는 영역이므로 반복 방문·고성·진료 방해의 일시·횟수와 위력·위계 정황 자료를 정리하는 것이 핵심. 개설 형태에 다툼이 있더라도 고용된 의료인의 진료 업무는 개설·운영 형태·진료 내용 등을 종합해 보호대상 여부가 판단되므로 진료 내용·방식 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무방해</strong> — 위계·위력에 의한 업무방해에 해당하는지.</li>\n<li><strong>보호대상</strong> — 진료 업무가 보호대상 업무인지.</li>\n<li><strong>개설 형태</strong> — 개설 다툼이 진료 업무 보호를 좌우하는지.</li>\n<li><strong>반사회성</strong> — 업무가 반사회성을 띠는 정도에 이르렀는지.</li>\n<li><strong>명예훼손</strong> — 사실 적시·허위 유포로 명예가 훼손됐는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무방해죄 보호대상 업무와 진료 업무의 종합 판단',
        summary:
          '대법원 2021도16482(대법원, 2023.03.16 선고) 영역에서 법원은 업무방해죄의 보호대상이 되는 \'업무\'란 직업 또는 계속적으로 종사하는 사무나 사업을 말하는 것으로서 타인의 위법한 행위에 의한 침해로부터 보호할 가치가 있는 것이면 되고, 그 업무의 기초가 된 계약 또는 행정행위 등이 반드시 적법하여야 하는 것은 아니므로 업무의 개시나 수행 과정에 실체상 또는 절차상의 하자가 있더라도 그 정도가 반사회성을 띠는 데까지 이르지 아니한 이상 보호대상이 된다고 보았습니다. 또한 의료인이나 의료법인이 아닌 자가 의료기관을 개설하여 운영하는 행위는 보호대상이 되는 업무에 해당하지 않으나 무자격자에 의해 개설된 의료기관에 고용된 의료인이 환자를 진료한다고 하여 그 진료행위가 당연히 반사회성을 띤다고 볼 수는 없으므로, 그 진료 업무가 보호대상인지는 의료기관의 개설·운영 형태, 진료의 내용과 방식, 방해되는 업무의 내용 등 사정을 종합적으로 고려하여 판단해야 한다고 판시했습니다. 병원 항의·소란 사안에서도 진료 업무의 보호대상 여부와 업무방해를 검토해볼 수 있습니다.',
        takeaway: '반복 소란 + 진료 방해 + 보호대상 결합 시 업무방해죄 보호대상 업무의 의미·개설 형태에도 불구한 진료 업무의 보호 여부·반사회성 종합 판단 검토 영역 — 변호사 상담·고소·민사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '병원에서 반복적으로 소란을 피우면 업무방해가 되나요?',
        answer:
          '<strong>위계·위력으로 진료 업무를 방해했다면 업무방해죄가 검토되는 영역입니다.</strong> CCTV·방문 일시·진료 중단 기록을 정리.',
      },
      {
        question: '병원 개설에 문제가 있으면 진료 업무는 보호받지 못하나요?',
        answer:
          '<strong>개설 형태에 다툼이 있어도 진료 업무는 종합 판단으로 보호대상이 될 수 있는 영역입니다.</strong> 진료 내용·방식 자료를 정리.',
      },
      {
        question: '업무의 기초 계약에 하자가 있어도 보호받나요?',
        answer:
          '<strong>반사회성을 띠는 정도가 아니라면 하자가 있어도 보호대상이 될 수 있는 영역입니다.</strong> 업무 내용·경위 자료를 정리.',
      },
      {
        question: '소란과 함께 허위 사실을 퍼뜨리면 명예훼손도 되나요?',
        answer:
          '<strong>사실 적시·허위 유포로 명예가 훼손됐다면 명예훼손이 함께 검토되는 영역입니다.</strong> 적시 내용·사실 대조 자료를 정리.',
      },
      {
        question: '계속 찾아오는 사람을 막고 손해도 받을 수 있나요?',
        answer:
          '<strong>고소·접근 제한과 함께 민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '카톡 단체방 명예훼손 고소', href: '/guide/defamation/defamation-group-chat-leak-complaint' },
      { label: '유튜브 댓글 허위사실 유포', href: '/guide/defamation/defamation-youtube-comment-false-fact-track' },
      { label: '명예훼손 손해배상 금액 기준과 판례', href: '/guide/defamation/defamation-damages-amount-standard' },
      { label: '명예훼손으로 고소당했을 때 대응법', href: '/guide/defamation/defamation-accused-response' },
    ],
  },

  // ─── 8. defamation-union-public-figure-criticism-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-union-public-figure-criticism-falsely-accused-defense',
    keyword: '노조 비판글 모욕 무고',
    questionKeyword: '노조 집행부의 운영에 문제를 제기하려고 SNS에 다소 강한 표현이 섞인 짧은 글을 올렸을 뿐인데, 상대가 저를 모욕으로 고소했어요. 사실과 다르게 신고된 것 같은데, 공적 사안을 비판하다 부분적으로 거친 표현이 들어간 것도 모욕이 되는지, 위법성이 없어지는 경우는 없는지 막막합니다.',
    ctaKeyword: '노조 비판글 모욕 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '노조 비판글 모욕 방어 — 5단계 사회상규·위법성조각 점검 | 로앤가이드',
      description:
        '공적 사안 비판 글로 모욕 혐의를 받고 있다면, 형법 제20조 사회상규 위배 여부와 의견 표명의 한계·단문 글의 위법성조각 가능성까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"노동조합 집행부의 운영 방식에 문제가 있다고 느껴, 여러 조합원에게 알리고 집회 일정을 공유하면서 제 의견을 강조하는 다소 강한 표현이 섞인 짧은 글을 SNS에 올렸을 뿐인데, 그 글에 언급된 사람이 저를 모욕으로 고소해 당황스러운 상황입니다. 사실과 다르게 신고되었다고 느껴지고, 공적인 사안을 비판하는 과정에서 나온 표현인데도 처벌될까 두렵습니다. 공적 인물이나 단체의 공적 활동을 비판하다가 부분적으로 거친 표현이 들어간 것도 곧바로 모욕이 되는지, 짧은 단문 글이라도 제 의견을 압축해 강조한 것이라면 위법성이 없어질 가능성은 없는지, 어느 정도까지가 허용되는 비판이고 어디서부터가 모욕인지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제311조는 공연히 사람을 모욕한 행위를, 형법 제20조는 사회상규에 위배되지 아니하는 행위는 벌하지 아니한다는 정당행위를 정하는 영역입니다. 판례는 어떤 글이 모욕적 표현을 담고 있더라도 그 글이 객관적으로 타당성 있는 사실을 전제로 하여 그 사실관계나 이를 둘러싼 문제에 관한 자신의 판단과 의견을 밝히고 그 타당함을 강조하는 과정에서 부분적으로 다소 모욕적인 표현이 사용된 것에 불과하다면 사회상규에 위배되지 않는 행위로서 형법 제20조에 의하여 위법성이 조각될 수 있다고 보면서, 인터넷 등 공간에서 작성된 단문의 글이라도 그 내용이 자신의 의견을 강조하거나 압축하여 표현한 것이라고 평가할 수 있고 표현이 지나치게 모욕적이거나 악의적이지 않다면 마찬가지로 위법성이 조각될 가능성이 크며, 그 판단은 당사자의 지위·관계, 표현의 동기·경위·배경, 전체적 취지와 표현 방법 등을 종합적으로 고려해야 한다고 본 사례 흐름이 있는 영역입니다. 공적 비판 + 단문 표현 + 모욕 고소 결합은 \'사회상규·의견 표명 한계·위법성조각\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 표현 내용 ② 전제 사실 ③ 의견 표명 ④ 사회상규 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 전제 ③ 의견 ④ 사회상규 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노조 비판글 모욕 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현 내용·전제 사실·의견 표명·사회상규·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 내용</strong> — 게시 글 전체와 문제된 표현의 맥락 정리.</li>\n<li><strong>② 전제 사실</strong> — 객관적으로 타당성 있는 사실을 전제로 했는지 정리.</li>\n<li><strong>③ 의견 표명</strong> — 공적 사안에 대한 의견 강조·압축 표현인지 검토.</li>\n<li><strong>④ 사회상규</strong> — 지나치게 모욕적·악의적이지 않아 사회상규에 위배되지 않는지 검토.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제20조) 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 객관적으로 타당성 있는 사실을 전제로 의견을 밝히는 과정에서 부분적으로 다소 모욕적인 표현이 사용된 것에 불과하고 지나치게 모욕적·악의적이지 않다면 형법 제20조로 위법성이 조각될 수 있고, 짧은 단문 글도 같은 가능성이 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시 글·맥락 보존 (즉시)</strong> — 게시 글 전체·문제된 표현·게시 경위·배경 보존.</li>\n<li><strong>2단계 — 전제 사실 정리 (1주)</strong> — 비판의 전제가 된 객관적으로 타당성 있는 사실 정리.</li>\n<li><strong>3단계 — 의견 표명·사회상규 정리 (2주)</strong> — 의견 강조·압축 여부, 표현의 모욕 정도, 동기·경위 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제20조 사회상규 위배 부정 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노조 비판글 모욕 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 전제 사실·의견 표명·사회상규 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시 글 원본·전체 맥락·일시 (표현 내용)</strong></li>\n<li><strong>비판의 전제가 된 사실 근거 자료 (전제 사실)</strong></li>\n<li><strong>공적 사안·운영 문제 제기 경위 자료 (의견 표명)</strong></li>\n<li><strong>당사자 지위·관계 자료 (사회상규 판단)</strong></li>\n<li><strong>표현의 동기·경위·배경 자료 (정당행위)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 비판이 객관적으로 타당성 있는 사실을 전제로 했고 그 사실에 관한 의견을 강조하는 과정에서 부분적으로 다소 모욕적인 표현이 사용된 것에 불과함을 보여주는 전제 사실 근거와 게시 경위 자료를 정리하는 것이 핵심. 사실과 다르게 신고되었다고 느껴진다면 짧은 단문 글이라도 의견을 압축·강조한 것임을 표현 전체 맥락으로 소명하고 지나치게 모욕적·악의적이지 않다는 점을 함께 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전제 사실</strong> — 객관적으로 타당성 있는 사실을 전제로 했는지.</li>\n<li><strong>의견 표명</strong> — 공적 사안에 대한 의견 강조·압축인지.</li>\n<li><strong>모욕 정도</strong> — 표현이 지나치게 모욕적·악의적인지.</li>\n<li><strong>사회상규</strong> — 사회상규에 위배되지 않아 위법성이 조각되는지.</li>\n<li><strong>단문 평가</strong> — 짧은 글도 의견 압축으로 평가되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 모욕적 표현의 사회상규 위배 여부와 위법성조각',
        summary:
          '대법원 2019도14421(대법원, 2022.10.27 선고) 영역에서 법원은 어떤 글이 모욕적 표현을 담고 있는 경우에도 그 글이 객관적으로 타당성이 있는 사실을 전제로 하여 그 사실관계나 이를 둘러싼 문제에 관한 자신의 판단과 피해자의 태도 등이 합당한가에 대한 의견을 밝히고 자신의 판단과 의견이 타당함을 강조하는 과정에서 부분적으로 다소 모욕적인 표현이 사용된 것에 불과하다면 사회상규에 위배되지 않는 행위로서 형법 제20조에 의하여 위법성이 조각될 수 있다고 보았습니다. 또한 인터넷 등 공간에서 작성된 단문의 글이라도 그 내용이 자신의 의견을 강조하거나 압축하여 표현한 것이라고 평가할 수 있고 표현이 지나치게 모욕적이거나 악의적이지 않다면 마찬가지로 위법성이 조각될 가능성이 크며, 사회상규에 위배되는지는 당사자의 지위와 관계, 표현행위를 하게 된 동기·경위·배경, 표현의 전체적 취지와 구체적 표현방법 등을 종합적으로 고려하여 판단해야 한다고 판시했습니다. 노조 비판글 모욕 방어 사안에서도 전제 사실·의견 표명의 한계·사회상규 위배 여부를 검토해볼 수 있습니다.',
        takeaway: '공적 비판 + 단문 표현 + 모욕 고소 결합 시 전제 사실의 타당성·의견 표명의 한계·단문 글의 위법성조각 가능성·사회상규 종합 판단 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '공적 사안을 비판하다 거친 표현이 들어가면 모욕이 되나요?',
        answer:
          '<strong>타당성 있는 사실을 전제로 의견을 밝히는 과정의 표현이면 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 전제 사실·게시 경위를 정리.',
      },
      {
        question: '짧은 단문 글도 위법성조각이 될 수 있나요?',
        answer:
          '<strong>의견을 압축·강조한 것으로 평가되고 지나치게 모욕적이지 않으면 가능성이 큰 영역입니다.</strong> 표현 전체 맥락 자료를 정리.',
      },
      {
        question: '어디까지가 허용되는 비판이고 어디부터가 모욕인가요?',
        answer:
          '<strong>표현이 지나치게 모욕적·악의적인지를 동기·경위·취지와 함께 종합 판단하는 영역입니다.</strong> 동기·배경 자료를 정리.',
      },
      {
        question: '공적 인물에 대한 비판은 더 넓게 허용되나요?',
        answer:
          '<strong>당사자의 지위·관계가 사회상규 판단의 한 요소로 고려되는 영역입니다.</strong> 지위·관계 자료를 정리.',
      },
      {
        question: '사실과 다르게 신고된 것 같으면 어떻게 하나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 전제 사실 근거와 게시 경위로 사회상규 위배가 아님을 소명할 수 있는 영역입니다.</strong> 근거·경위 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '이웃 허위신고 명예훼손 대응 체크리스트', href: '/guide/defamation/defamation-false-accusation-neighbor' },
      { label: '온라인 모욕죄 고소 방법과 처벌 수위', href: '/guide/defamation/online-insult-lawsuit-penalty' },
      { label: '공익목적 면책', href: '/guide/defamation/public-interest-immunity' },
      { label: '명예훼손 유포자 정상참작 합의', href: '/guide/defamation/defamation-spreader-accused-mitigation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-divisible-claim-joint-succession-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-divisible-claim-joint-succession-track',
    keyword: '가분채권 공동상속 기여분',
    questionKeyword: '돌아가신 부모님이 남긴 예금과 주식, 청약저축이 여러 형제에게 공동으로 상속됐는데, 예금처럼 나눌 수 있는 채권은 자동으로 법정상속분대로 갈리는지 막막해요. 제가 부모님을 부양해 기여분을 주장하고 싶은데, 그러면 예금도 상속재산분할 대상으로 끌어올 수 있는지 궁금합니다.',
    ctaKeyword: '가분채권 공동상속·기여분 분할 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '가분채권 공동상속 기여분 — 5단계 당연분할·분할대상 점검 | 로앤가이드',
      description:
        '부모님이 남긴 예금·주식·청약저축의 공동상속이 고민이라면, 가분채권의 법정상속분 당연분할과 특별수익·기여분 등 특별한 사정 시 상속재산분할 대상 포함까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 부모님이 예금과 주식, 청약저축 등 여러 재산을 남기셨는데, 형제들이 함께 상속인이 되면서 정작 이것들을 어떻게 나눠야 할지부터 막막한 상황입니다. 예금처럼 금액으로 나눌 수 있는 채권은 상속이 시작되자마자 자동으로 법정상속분대로 형제들에게 갈라지는 것인지, 아니면 따로 분할 절차를 거쳐야 하는 것인지 모르겠습니다. 주식이나 청약저축은 또 예금과 다르게 다뤄진다는 이야기도 있어 혼란스럽습니다. 무엇보다 제가 오랜 기간 부모님을 모시고 부양하며 기여한 부분이 있어 기여분을 주장하고 싶은데, 예금처럼 당연히 갈라지는 재산도 \'기여분 같은 특별한 사정\'을 이유로 다시 상속재산분할의 대상으로 끌어올 수 있는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제1006조는 공동상속재산의 공유를, 제1008조의2는 기여분을, 제1013조는 상속재산의 분할을 정하는 영역입니다. 판례는 금전채권과 같이 급부의 내용이 가분인 채권은 공동상속되는 경우 상속개시와 동시에 당연히 법정상속분에 따라 공동상속인들에게 분할하여 귀속하나, 특별수익이 존재하거나 기여분이 인정되는 등 특별한 사정이 있는 경우에는 가분채권도 상속재산분할의 대상이 될 수 있다고 보면서, 주식은 가분채권이 아니어서 공동상속인들이 준공유하는 법률관계를 형성하고 주택공급 신청 권리와 분리될 수 없는 청약저축의 가입자가 사망해 공동상속이 이루어진 경우 그 예금계약을 해지하려면 특별한 사정이 없는 한 공동상속인 전원이 해지의 의사표시를 하여야 한다고 본 사례 흐름이 있는 영역입니다. 가분채권 + 공동상속 + 기여분 결합은 \'당연분할·특별한 사정·분할대상\' 정리가 필요한 트랙입니다. 당사자라면 ① 상속재산 파악 ② 가분채권 ③ 특별한 사정 ④ 분할대상 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 가분채권 ③ 사정 ④ 분할 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가분채권 공동상속 기여분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속재산 파악·가분채권·특별한 사정·분할대상·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속재산 파악</strong> — 예금·주식·청약저축 등 상속재산과 상속인 범위 파악.</li>\n<li><strong>② 가분채권</strong> — 예금 등 가분채권의 법정상속분 당연분할 정리.</li>\n<li><strong>③ 특별한 사정</strong> — 특별수익·기여분 등 특별한 사정 존재 여부 검토.</li>\n<li><strong>④ 분할대상</strong> — 특별한 사정이 있으면 가분채권도 분할 대상으로 정리.</li>\n<li><strong>⑤ 청구</strong> — 상속재산분할·기여분 심판 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 예금 같은 가분채권은 상속개시와 동시에 법정상속분대로 당연분할되나 특별수익·기여분 등 특별한 사정이 있으면 상속재산분할의 대상이 될 수 있고, 주식은 준공유, 청약저축 해지는 전원의 의사표시가 필요한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속재산 자료 확보 (즉시)</strong> — 예금·주식·청약저축·부동산 등 상속재산, 상속인 자료 확보.</li>\n<li><strong>2단계 — 가분채권·당연분할 정리 (1~2주)</strong> — 예금 등 가분채권의 법정상속분 당연분할 정리.</li>\n<li><strong>3단계 — 특별한 사정 정리 (2~3주)</strong> — 특별수익·기여분 등 특별한 사정 입증 정리.</li>\n<li><strong>4단계 — 상속재산분할·기여분 청구 (협의 불성립 시)</strong> — 상속재산분할 청구와 함께 기여분 결정 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 기여분·분할 쟁점, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가분채권 공동상속·기여분 분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상속재산·가분채권·기여분 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>가족관계증명서·상속인 확인 자료 (상속인 범위)</strong></li>\n<li><strong>예금·채권 잔액·거래 내역 자료 (가분채권)</strong></li>\n<li><strong>주식·청약저축 등 보유 자료 (준공유·해지)</strong></li>\n<li><strong>생전 증여·특별수익 자료 (특별한 사정)</strong></li>\n<li><strong>동거·부양·기여 입증 자료 (기여분)</strong></li>\n<li><strong>상속재산분할·기여분 심판 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예금처럼 나눌 수 있는 가분채권은 상속개시와 동시에 법정상속분대로 당연분할되지만 특별수익이나 기여분 같은 특별한 사정이 있으면 상속재산분할의 대상이 될 수 있는 영역이므로 기여·특별수익을 보여주는 자료를 정리하는 것이 핵심. 주식은 준공유, 청약저축 해지는 공동상속인 전원의 의사표시가 필요할 수 있으므로 재산 종류별로 처리 방법을 구분해 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>당연분할</strong> — 예금 등 가분채권이 법정상속분대로 당연분할되는지.</li>\n<li><strong>특별한 사정</strong> — 특별수익·기여분 등 특별한 사정이 있는지.</li>\n<li><strong>분할대상</strong> — 특별한 사정이 있으면 가분채권도 분할 대상인지.</li>\n<li><strong>주식·청약저축</strong> — 준공유·전원 해지 등 처리 방법.</li>\n<li><strong>기여분</strong> — 부양·기여가 기여분으로 인정되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (상속재산분할·기여분 심판 청구)</strong></li>\n<li><strong>국세청 126 (상속세 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가분채권의 당연분할과 특별한 사정 시 분할 대상',
        summary:
          '대법원 2023다221144(대법원, 2023.12.21 선고) 영역에서 법원은 금전채권과 같이 급부의 내용이 가분인 채권은 공동상속되는 경우 상속개시와 동시에 당연히 법정상속분에 따라 공동상속인들에게 분할하여 귀속하고, 특별수익이 존재하거나 기여분이 인정되는 등 특별한 사정이 있는 경우에는 가분채권도 상속재산분할의 대상이 될 수 있다고 보았습니다. 또한 주식은 주식회사의 주주 지위를 표창하는 것으로서 가분채권이 아니므로 공동상속하는 경우 법정상속분에 따라 당연히 분할하여 귀속하는 것이 아니라 공동상속인들이 이를 준공유하는 법률관계를 형성하고, 주택공급을 신청할 권리와 분리될 수 없는 청약저축의 가입자가 사망하여 공동상속이 이루어진 경우 그 예금계약을 해지하려면 다른 특약 등 특별한 사정이 없는 한 공동상속인 전원이 해지의 의사표시를 하여야 한다고 판시했습니다. 가분채권 공동상속 사안에서도 당연분할·특별한 사정에 따른 분할 대상 포함·재산 종류별 처리를 검토해볼 수 있습니다.',
        takeaway: '가분채권 + 공동상속 + 기여분 결합 시 가분채권의 법정상속분 당연분할·특별수익·기여분 등 특별한 사정 시 분할 대상 포함·주식 준공유·청약저축 전원 해지 검토 영역 — 변호사 상담·가정법원 심판 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '부모님 예금은 상속과 동시에 자동으로 갈라지나요?',
        answer:
          '<strong>가분채권인 예금은 상속개시와 동시에 법정상속분대로 당연분할되는 영역입니다.</strong> 예금 잔액·거래 내역 자료를 정리.',
      },
      {
        question: '기여분이 있으면 예금도 분할 대상으로 끌어올 수 있나요?',
        answer:
          '<strong>특별수익·기여분 등 특별한 사정이 있으면 가분채권도 상속재산분할 대상이 될 수 있는 영역입니다.</strong> 기여·특별수익 자료를 정리.',
      },
      {
        question: '주식은 예금과 다르게 나뉘나요?',
        answer:
          '<strong>주식은 가분채권이 아니어서 공동상속인들이 준공유하는 법률관계를 형성하는 영역입니다.</strong> 주식 보유·평가 자료를 정리.',
      },
      {
        question: '청약저축은 혼자서 해지할 수 있나요?',
        answer:
          '<strong>특별한 사정이 없는 한 공동상속인 전원의 해지 의사표시가 필요할 수 있는 영역입니다.</strong> 청약저축·상속인 자료를 정리.',
      },
      {
        question: '협의가 안 되면 어떻게 나누나요?',
        answer:
          '<strong>협의가 안 되면 상속재산분할 청구와 함께 기여분 결정을 청구하는 영역입니다.</strong> 상속재산·기여 자료를 정리.',
      },
    ],
    cta: { text: '상속 기여분·분할 쟁점, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 종합 가이드', href: '/guide/inheritance' },
      { label: '상속세 분납 연부연납 절차', href: '/guide/inheritance/inheritance-tax-installment-procedure' },
      { label: '기여분 산정·청구', href: '/guide/inheritance/inheritance-contribution-share-claim-track' },
      { label: '법정상속 순위·비율', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
    ],
  },

  // ─── 10. traffic-accident-rehab-therapy-negligence-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rehab-therapy-negligence-injury-track',
    keyword: '재활치료 과실 부상',
    questionKeyword: '교통사고 후 재활·물리치료를 받던 중 치료사의 부주의로 넘어지거나 기구에 부딪혀 오히려 더 크게 다쳤어요. 치료 과정에서 생긴 사고도 과실로 책임을 물을 수 있는지, 주의의무를 어겼다는 것은 누가 어떻게 증명하는지, 사고와 부상의 인과관계는 어디까지 따져야 하는지 막막합니다.',
    ctaKeyword: '재활치료 과실 부상·주의의무·증명 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '재활치료 과실 부상 — 5단계 주의의무·증명책임 점검 | 로앤가이드',
      description:
        '재활·치료 과정에서 부주의로 더 다쳤다면, 업무상과실치상죄의 주의의무 위반과 평균인 기준 과실·인과관계의 엄격한 증명책임까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고로 다친 뒤 회복을 위해 재활·물리치료를 받던 중, 치료를 담당한 사람의 부주의로 균형을 잃고 넘어지거나 치료 기구에 부딪혀 오히려 처음보다 더 크게 다치게 된 상황입니다. 분명 치료를 받으러 간 자리에서 생긴 사고인데도, \'치료 과정에서 어쩔 수 없이 생긴 일\'로 넘어가려는 분위기여서 막막합니다. 이렇게 치료·재활 과정에서 생긴 사고도 담당자의 과실로 책임을 물을 수 있는지, 담당자가 주의의무를 게을리했다는 점은 도대체 누가 어떻게 증명해야 하는지, 그 부주의와 제가 더 다친 결과 사이의 인과관계는 어디까지 따져야 하는지 도무지 가늠이 되지 않아 답답한 상태입니다." 형법 제268조는 업무상과실·중과실로 사람을 상해에 이르게 한 업무상과실치상을, 민법 제750조는 고의·과실로 인한 위법행위의 손해배상책임을 정하는 영역입니다. 판례는 업무상과실치상죄에서 업무상과실이란 당해 업무의 내용과 성질 또는 담당자의 업무상 지위 등에 비추어 요구되는 주의의무를 게을리함으로써 결과 발생을 예견하거나 회피하지 못한 경우를 말하고, 치료를 수행하는 과정에서 발생한 사고에서 담당자의 과실을 인정하려면 그가 결과 발생을 예견할 수 있고 또 회피할 수도 있었음에도 이를 하지 못한 점을 인정할 수 있어야 하며, 과실 유무를 판단할 때에는 같은 업무·직무에 종사하는 일반적 평균인의 주의 정도를 표준으로 하여 사고 당시 일반적으로 이루어지는 치료의 수준과 환경·조건 등을 고려해야 하고, 그 과실과 결과 발생 사이의 인과관계를 인정하려면 주의의무 위반이 없었더라면 그러한 결과가 발생하지 않았을 것임이 엄격한 증거에 따라 합리적 의심의 여지가 없을 정도로 증명되어야 한다고 본 사례 흐름이 있는 영역입니다. 치료 사고 + 주의의무 + 인과관계 결합은 \'과실·증명책임·손해\' 정리가 필요한 트랙입니다. 당사자라면 ① 사고·치료 보존 ② 주의의무 ③ 과실 ④ 인과관계 ⑤ 손해·대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 주의의무 ③ 과실 ④ 인과 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재활치료 과실 부상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·치료 보존·주의의무·과실·인과관계·손해·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·치료 보존</strong> — 치료 경위·사고 발생 상황·치료 기록 보존.</li>\n<li><strong>② 주의의무</strong> — 업무 내용·지위에 비춰 요구되는 주의의무 정리.</li>\n<li><strong>③ 과실</strong> — 평균인 기준 결과 예견·회피 가능성 검토.</li>\n<li><strong>④ 인과관계</strong> — 주의의무 위반과 부상 결과의 인과관계 검토.</li>\n<li><strong>⑤ 손해·대응</strong> — 손해 산정과 형사 고소·민사 손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 과실은 같은 업무에 종사하는 일반적 평균인의 주의 정도를 표준으로 결과 예견·회피 가능성을 따지고, 과실과 결과 사이의 인과관계는 엄격한 증거에 따라 합리적 의심의 여지가 없을 정도로 증명되어야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·치료 증거 보존 (즉시)</strong> — 치료 경위·CCTV·치료 기록·진단서·사고 직후 상태 보존.</li>\n<li><strong>2단계 — 주의의무·과실 정리 (1주)</strong> — 요구되는 주의의무, 평균인 기준 예견·회피 가능성 정리.</li>\n<li><strong>3단계 — 인과관계·손해 정리 (1~2주)</strong> — 주의의무 위반과 부상의 인과관계, 추가 치료·후유장해 정리.</li>\n<li><strong>4단계 — 고소·청구 (분쟁 시)</strong> — 업무상과실치상 고소, 손해배상 청구 검토.</li>\n<li><strong>5단계 — 합의·소멸시효 (병행)</strong> — 합의 조건 검토, 손해배상 소멸시효 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">재활치료 과실 부상·주의의무·증명 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 주의의무·과실·인과관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>치료·재활 경위·예약·동의 자료 (치료 관계)</strong></li>\n<li><strong>사고 발생 CCTV·목격 진술 자료 (사고 정황)</strong></li>\n<li><strong>치료 기록·차트·처치 내용 자료 (주의의무)</strong></li>\n<li><strong>사고 전후 상해진단서·영상 자료 (인과관계)</strong></li>\n<li><strong>추가 치료·후유장해·일실수입 자료 (손해 산정)</strong></li>\n<li><strong>치료 수준·환경·조건 관련 자료 (평균인 기준)</strong></li>\n<li><strong>손해·합의·고소 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 치료·재활 과정에서 생긴 사고의 과실은 같은 업무에 종사하는 일반적 평균인의 주의 정도를 표준으로 결과 예견·회피 가능성을 따지는 영역이므로 치료 기록·처치 내용과 사고 당시 치료의 수준·환경·조건 자료를 함께 정리하는 것이 핵심. 과실과 부상 결과 사이의 인과관계는 엄격한 증거로 증명되어야 하므로 사고 전후 상태를 비교할 수 있는 진단서·영상 자료를 확보해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>주의의무</strong> — 업무 내용·지위에 비춰 요구되는 주의의무가 무엇인지.</li>\n<li><strong>과실</strong> — 평균인 기준 결과를 예견·회피할 수 있었는지.</li>\n<li><strong>인과관계</strong> — 주의의무 위반과 부상 사이의 인과관계가 있는지.</li>\n<li><strong>증명책임</strong> — 과실·인과관계를 엄격한 증거로 증명해야 하는지.</li>\n<li><strong>손해·소멸시효</strong> — 손해 산정과 손해배상청구권의 소멸시효.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372 (의료·서비스 분쟁 상담)</strong></li>\n<li><strong>한국교통안전공단 (교통사고 관련 안내)</strong></li>\n<li><strong>경찰 182 (사고 신고·안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 치료 과정 사고의 과실 인정 요건과 엄격한 증명책임',
        summary:
          '대법원 2024도20371(대법원, 2025.04.15 선고) 영역에서 법원은 업무상과실치상죄에서 업무상과실이란 당해 업무의 내용과 성질 또는 담당자의 업무상 지위 등에 비추어 요구되는 주의의무를 게을리함으로써 결과 발생을 예견하거나 회피하지 못한 경우를 말한다고 보았습니다. 또한 치료를 수행하는 과정에서 발생한 사고에서 담당자의 과실을 인정하기 위해서는 그가 결과 발생을 예견할 수 있고 또 회피할 수도 있었음에도 이를 하지 못한 점을 인정할 수 있어야 하고, 과실 유무를 판단할 때에는 같은 업무·직무에 종사하는 일반적 평균인의 주의 정도를 표준으로 하여 사고 당시에 일반적으로 이루어지는 치료의 수준과 환경 및 조건 등을 고려하여야 하며, 그 과실과 결과 발생 사이에 인과관계를 인정하기 위해서는 주의의무 위반이 없었더라면 그러한 결과가 발생하지 않았을 것임이 엄격한 증거에 따라 합리적 의심의 여지가 없을 정도로 증명되어야 한다고 판시했습니다. 재활·치료 과정 부상 사안에서도 주의의무 위반·평균인 기준 과실·인과관계의 증명을 검토해볼 수 있습니다.',
        takeaway: '치료 사고 + 주의의무 + 인과관계 결합 시 요구되는 주의의무·평균인 기준 결과 예견·회피 가능성·인과관계의 엄격한 증명책임 검토 영역 — 변호사 상담·고소·민사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '치료·재활 과정에서 더 다친 것도 과실로 따질 수 있나요?',
        answer:
          '<strong>요구되는 주의의무를 게을리해 결과를 예견·회피하지 못했다면 과실이 검토되는 영역입니다.</strong> 치료 기록·사고 정황 자료를 정리.',
      },
      {
        question: '주의의무를 어겼다는 것은 누가 증명하나요?',
        answer:
          '<strong>과실과 인과관계는 엄격한 증거에 따라 증명되어야 하는 영역입니다.</strong> 치료 기록·진단서·영상 자료를 정리.',
      },
      {
        question: '과실은 어떤 기준으로 판단하나요?',
        answer:
          '<strong>같은 업무에 종사하는 일반적 평균인의 주의 정도를 표준으로 판단하는 영역입니다.</strong> 치료 수준·환경·조건 자료를 정리.',
      },
      {
        question: '부주의와 부상의 인과관계는 어디까지 따지나요?',
        answer:
          '<strong>주의의무 위반이 없었다면 결과가 생기지 않았을 것임이 합리적 의심 없이 증명돼야 하는 영역입니다.</strong> 사고 전후 상태 비교 자료를 정리.',
      },
      {
        question: '손해배상은 언제까지 청구해야 하나요?',
        answer:
          '<strong>손해 및 가해자를 안 날부터 3년 등 소멸시효를 확인해야 하는 영역입니다.</strong> 사고·치료·인지 시점 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 종합 가이드', href: '/guide/traffic-accident' },
      { label: '교통사고 보상금 산정 기준 총정리', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '후유장해 추가 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-additional-claim-settlement' },
      { label: '교통사고 합의 전 확인해야 할 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },
];
