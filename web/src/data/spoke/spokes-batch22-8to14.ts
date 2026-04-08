import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 8. 이 페이지는 [산재 보험급여만으로 부족한 근로자]의 [사업주 과실로 추가 손해배상을 받고 싶은 상황]에서 [민사 손해배상 청구 절차 4단계 안내]를 돕는 페이지다.
// 9. 이 페이지는 [근로자 사망사고가 발생한 사업주]의 [형사처벌 혐의를 받고 있는 상황]에서 [적용 법률과 처벌 기준 파악 및 초기 대응 안내]를 돕는 페이지다.
// 10. 이 페이지는 [안전보건관리체계 미비로 지적받은 사업주]의 [안전·보건관리자 선임 의무 혐의를 받고 있는 상황]에서 [규모별 선임 기준 체크리스트와 미이행 제재 안내]를 돕는 페이지다.
// 11. 이 페이지는 [옆 건물 공사 소음·진동에 시달리는 주민]의 [법적 대응 방법을 모르는 상황]에서 [증거 수집부터 손해배상까지 4단계 절차 안내]를 돕는 페이지다.
// 12. 이 페이지는 [윗집 누수로 재산 피해를 입은 세대]의 [원인 규명과 배상 청구를 모르는 상황]에서 [감정 절차부터 소송까지 3단계 절차 안내]를 돕는 페이지다.
// 13. 이 페이지는 [옆집과 토지 경계·담장 문제로 분쟁 중인 소유자]의 [법적 기준과 해결 절차를 모르는 상황]에서 [지적측량부터 소송까지 해결 방법 안내]를 돕는 페이지다.
// 14. 이 페이지는 [이웃의 반복적 불법 주차로 피해를 받는 입주민]의 [법적 대응 절차를 모르는 상황]에서 [관리규약 확인부터 손해배상까지 3단계 절차 안내]를 돕는 페이지다.

export const spokesBatch22_8to14: SpokePage[] = [
  // ───────────────────────────────────────────
  // 8. industrial-accident2 / industrial-accident-civil-damages
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'industrial-accident-civil-damages',
    keyword: '산재 민사 손해배상 청구 절차',
    questionKeyword: '산재 보상 외에 민사 손해배상도 청구할 수 있나요?',
    ctaKeyword: '산재 민사 손해배상',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '산재 민사 손해배상 청구 절차 4단계 총정리 | 로앤가이드',
      description:
        '산재 보험급여만으로 부족해서 사업주에게 손해배상을 청구하고 싶다면 절차와 요건을 지금 확인하세요.',
    },
    intro:
      '<p>산재 보험급여를 받고 있지만 실제 손해에 비하면 턱없이 부족합니다. 사업주의 과실이 분명한데 추가 배상을 받을 수 있는지 알고 싶습니다. 산재보험과 별도로 민사소송이 가능하다는 이야기를 들었습니다.</p>',
    timelineSteps: [
      '1단계: 사업주 과실 입증 자료 확보',
      '2단계: 손해배상 청구서 작성',
      '3단계: 민사소송 제기',
      '4단계: 판결 및 집행',
    ],
    sections: [
      {
        title: '산재보험급여와 민사 손해배상의 관계',
        content:
          '<p><strong style="color:#1e3a5f">산재보험급여는 근로자의 업무상 재해에 대한 최저 보장 장치이고, 민사 손해배상은 사업주의 과실에 따른 완전한 배상을 목표로 합니다</strong></p>\n<ul>\n<li><strong>별도 청구 가능</strong> — 산재보험급여를 받았더라도 사업주의 안전배려의무 위반이 인정되면 민법 제750조(불법행위) 또는 제390조(채무불이행)에 따라 별도로 손해배상을 청구할 수 있습니다</li>\n<li><strong>공제 원칙</strong> — 산재보험급여와 같은 성질의 손해 항목은 공제됩니다. 예를 들어 요양급여를 받았으면 치료비 항목에서 이미 지급받은 금액을 빼야 합니다</li>\n<li><strong>잔여 손해</strong> — 위자료, 일실수입 중 휴업급여를 초과하는 부분, 향후 치료비 등은 산재보험으로 보전되지 않으므로 민사로 청구할 수 있습니다</li>\n<li><strong>소멸시효</strong> — 불법행위 손해배상 청구권은 손해 및 가해자를 안 날부터 3년, 불법행위일부터 10년입니다. 산재 치료가 길어져도 시효를 놓치지 않도록 주의하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 산재보험급여 수령 후에도 사업주 과실이 있으면 잔여 손해에 대해 민사 손해배상 가능</blockquote>',
      },
      {
        title: '사업주 과실 입증 핵심 포인트',
        content:
          '<p><strong style="color:#1e3a5f">민사 손해배상에서 가장 중요한 것은 사업주의 안전조치 의무 위반을 구체적으로 입증하는 것입니다</strong></p>\n<ul>\n<li><strong>산업안전보건법 위반 확인</strong> — 안전난간 미설치, 안전모 미지급, 작업 중지 미이행 등 사업주의 법적 의무 위반 사항을 특정합니다. 근로감독관의 시정명령 이력이 있으면 강력한 증거가 됩니다</li>\n<li><strong>안전교육 실시 여부</strong> — 사업주가 해당 작업에 대한 안전교육을 실시했는지, 교육 기록이 있는지 확인합니다. 교육 미실시는 과실의 핵심 근거입니다</li>\n<li><strong>작업환경 자료 확보</strong> — 사고 현장 사진, CCTV 영상, 작업지시서, 안전점검 일지 등을 확보합니다. 사고 직후 자료가 훼손되기 전에 빠르게 수집해야 합니다</li>\n<li><strong>동료 증언 확보</strong> — 같은 현장에서 일한 동료의 진술서를 받아둡니다. 평소 안전장비 미비나 위험 작업 강요 사실을 확인해줄 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">사업주 과실 입증이 어렵다면</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">산재 민사 손해배상 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '손해배상 청구 항목과 금액 산정',
        content:
          '<p><strong style="color:#1e3a5f">민사 손해배상은 적극적 손해, 소극적 손해, 위자료로 나뉘며, 산재보험으로 보전된 부분은 공제됩니다</strong></p>\n<ul>\n<li><strong>적극적 손해(치료비 등)</strong> — 기왕치료비, 향후 치료비, 보조기구 비용, 개호비(간병비) 등. 산재 요양급여로 지급받은 금액은 공제합니다</li>\n<li><strong>소극적 손해(일실수입)</strong> — 사고가 없었다면 얻었을 소득. 가동연한(만 65세)까지의 일실수입을 현가로 계산합니다. 산재 휴업급여·장해급여를 수령한 부분은 같은 성질의 범위에서 공제됩니다</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 배상으로, 산재보험에는 위자료에 해당하는 급여가 없어 전액 청구할 수 있습니다. 장해등급, 과실 정도, 가족 상황 등을 고려하여 법원이 결정합니다</li>\n<li><strong>과실상계</strong> — 근로자에게도 과실이 있으면 배상액이 감경됩니다. 안전장비 미착용, 안전수칙 위반 등이 과실상계 사유가 됩니다. 통상 20~40% 감경되는 사례가 많습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">청구 항목: 치료비(공제 후 잔여) + 일실수입(공제 후 잔여) + 위자료(전액 가능)</blockquote>',
      },
      {
        title: '소송 절차와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">민사 손해배상 소송은 소장 제출부터 판결까지 통상 1~2년이 소요되며, 조정이나 화해로 조기 종결되는 경우도 많습니다</strong></p>\n<ul>\n<li><strong>소장 제출</strong> — 사업주의 주소지 또는 사고 발생지 관할 법원에 소장을 제출합니다. 청구 금액이 3,000만 원 이하이면 소액사건 또는 단독판사 재판으로 진행됩니다</li>\n<li><strong>조정 권고</strong> — 법원은 소송 초기에 조정을 권고하는 경우가 많습니다. 조정이 성립되면 판결과 같은 효력이 있고, 소송비용과 시간을 절약할 수 있습니다</li>\n<li><strong>감정 절차</strong> — 장해 정도, 노동능력상실률, 향후 치료비 등에 대해 법원이 의학 감정을 실시합니다. 감정료(200~500만 원)는 원고가 예납해야 합니다</li>\n<li><strong>강제집행</strong> — 승소 판결이 확정되면 사업주의 재산에 대해 강제집행할 수 있습니다. 사업주가 지급 능력이 있는지 사전에 재산 조회를 해두세요</li>\n</ul>\n<p><strong>주의:</strong> 사업주가 산재보험에 가입한 사업장이라면, 사업주의 고의·중과실이 아닌 한 보험자인 근로복지공단에 구상권이 있어 사업주가 배상을 거부할 수 있습니다. 변호사와 상담하여 청구 상대방을 정확히 특정하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차 요약: 소장 제출 → 조정 시도 → 변론·감정 → 판결 → 강제집행</blockquote>',
      },
    ],
    cases: [
      {
        title: '산재 보험급여 수령 후 민사 손해배상 청구 — 대법원 판결',
        summary:
          '대법원 2023다297141 사건에서 산재 보험급여를 받은 근로자가 사업주를 상대로 잔여 손해배상을 청구한 사건입니다. 법원은 보험급여와 같은 성질의 손해에 대해서는 공제하되, 그 외 잔여 손해는 별도로 청구할 수 있다고 판시했습니다.',
        takeaway:
          '산재보험급여를 받았더라도 위자료와 일실수입 초과분은 민사로 추가 청구가 가능합니다. 사업주 과실 증거를 확보하여 잔여 손해를 빠짐없이 청구하세요.',
      },
    ],
    faq: [
      {
        question: '산재보험급여를 받았는데도 민사소송이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 산재보험급여는 법정 최저 보장이고, 사업주에게 과실이 있으면 보험급여로 보전되지 않은 잔여 손해(위자료, 일실수입 초과분 등)를 민사로 청구할 수 있습니다.',
      },
      {
        question: '민사 손해배상 소송비용은 얼마나 드나요?',
        answer:
          '<strong>인지대(청구금액 기준), 송달료, 변호사 비용이 주요 비용입니다.</strong> 청구금액 1억 원 기준 인지대 약 45만 원, 송달료 약 7만 원이며, 변호사 비용은 별도입니다. 승소하면 소송비용의 일부를 상대방에게 청구할 수 있습니다.',
      },
      {
        question: '과실상계로 배상액이 줄어들 수 있나요?',
        answer:
          '<strong>근로자에게도 과실이 있으면 배상액이 감경됩니다.</strong> 안전모 미착용, 안전수칙 위반 등이 과실상계 사유입니다. 다만 사업주의 안전조치 의무 위반이 중대하면 과실상계 비율이 낮게 산정됩니다.',
      },
      {
        question: '소송 전에 합의로 해결할 수 있나요?',
        answer:
          '<strong>합의가 가능합니다.</strong> 소송 전 내용증명을 보내 협상하거나, 소송 중 법원 조정을 통해 합의할 수 있습니다. 합의 시에는 향후 추가 청구를 포기하는 조항이 포함되므로 금액을 신중하게 산정하세요.',
      },
      {
        question: '산재 소멸시효와 민사 소멸시효는 다른가요?',
        answer:
          '<strong>다릅니다.</strong> 산재보험급여 청구권은 3년(유족급여는 5년)이고, 민사 불법행위 손해배상 청구권은 손해 및 가해자를 안 날부터 3년, 불법행위일부터 10년입니다. 치료가 길어지는 경우 민사 시효도 함께 관리하세요.',
      },
    ],
    cta: {
      text: '산재 민사 손해배상 무료 상담받기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '중대재해·산업안전 가이드', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 보고 의무 절차', href: '/spoke/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 사업주 대응법', href: '/spoke/industrial-accident2/serious-accident-employer-response' },
      { label: '안전보건 위반 과태료·벌금 기준', href: '/spoke/industrial-accident2/workplace-safety-violation-penalty' },
      { label: '위험성평가 사업주 의무', href: '/spoke/industrial-accident2/risk-assessment-employer-obligation' },
    ],
  },

  // ───────────────────────────────────────────
  // 9. industrial-accident2 / worker-death-employer-criminal
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'worker-death-employer-criminal',
    keyword: '근로자 사망사고 사업주 형사처벌 기준',
    questionKeyword: '근로자가 사망하면 사업주가 형사처벌을 받나요?',
    ctaKeyword: '사망사고 사업주 처벌',
    type: '상황형',
    perspective: '가해자',
    meta: {
      title: '근로자 사망사고 사업주 형사처벌 기준 4가지 | 로앤가이드',
      description:
        '사업장에서 근로자 사망사고가 발생해 형사 혐의를 받고 있다면 처벌 기준과 대응법을 지금 확인하세요.',
    },
    intro:
      '<p>작업 현장에서 근로자가 추락 사고로 사망했습니다. 경찰이 사업주를 불러 조사하겠다고 합니다. 중대재해처벌법이라는 말을 듣고 겁이 납니다. 어떤 혐의가 적용되는지, 형량은 어떻게 되는지 파악해야 합니다.</p>',
    sections: [
      {
        title: '적용 법률 3가지 — 산안법·형법·중대재해법',
        content:
          '<p><strong style="color:#1e3a5f">근로자 사망사고가 발생하면 산업안전보건법, 형법, 중대재해처벌법이 동시에 적용될 수 있습니다</strong></p>\n<ul>\n<li><strong>산업안전보건법</strong> — 안전조치·보건조치 의무를 위반하여 근로자를 사망에 이르게 한 경우, 7년 이하의 징역 또는 1억 원 이하의 벌금에 처합니다(제167조 제1항). 양벌규정에 따라 법인에도 1억 원 이하의 벌금이 부과됩니다</li>\n<li><strong>형법 제268조(업무상과실치사)</strong> — 업무상 주의의무를 게을리하여 사람을 사망에 이르게 한 경우 5년 이하의 금고 또는 2,000만 원 이하의 벌금에 처합니다</li>\n<li><strong>중대재해처벌법</strong> — 경영책임자가 안전보건확보의무를 위반하여 사망사고가 발생한 경우, 1년 이상의 징역 또는 10억 원 이하의 벌금에 처합니다. 법인에는 최대 50억 원의 벌금이 부과될 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3가지 법률이 동시 적용 가능 — 가장 무거운 중대재해처벌법은 징역 1년 이상(하한) + 벌금 10억 원 이하</blockquote>',
      },
      {
        title: '중대재해처벌법 경영책임자 처벌 기준',
        content:
          '<p><strong style="color:#1e3a5f">중대재해처벌법은 사업주가 아닌 "경영책임자 등"에게 안전보건관리체계 구축 의무를 부과하고, 이를 위반하여 사망사고가 발생하면 처벌합니다</strong></p>\n<ul>\n<li><strong>경영책임자의 범위</strong> — 대표이사, 사업을 대표하고 총괄하는 권한과 책임이 있는 사람. 안전보건에 관한 업무를 담당하는 임원도 포함될 수 있습니다</li>\n<li><strong>안전보건확보의무 4가지</strong> — ① 안전보건 목표·경영방침 설정 ② 안전보건 전담 인력 배치 ③ 유해·위험요인 확인·개선 절차 마련 ④ 안전보건 관련 예산 편성·집행</li>\n<li><strong>처벌 수위</strong> — 사망 1명 이상 발생 시 1년 이상 징역 또는 10억 원 이하 벌금. 동일 위반으로 5년 이내 재발 시 형의 1/2까지 가중됩니다</li>\n<li><strong>50인 미만 적용 시기</strong> — 상시 근로자 50인 미만 사업장은 2027년 1월 1일부터 적용됩니다. 50인 이상은 이미 적용 중입니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">사망사고로 형사 혐의를 받고 있다면</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">사망사고 사업주 처벌 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '양형에 영향을 미치는 요소',
        content:
          '<p><strong style="color:#1e3a5f">법원은 사업주의 처벌 수위를 결정할 때 안전관리 노력, 사고 경위, 피해 규모, 합의 여부 등을 종합적으로 고려합니다</strong></p>\n<ul>\n<li><strong>감경 요소</strong> — 평소 안전관리체계를 성실히 운영한 이력, 사고 직후 신속한 구조 및 지원 조치, 유족과의 합의, 재발 방지 대책 수립, 초범 여부</li>\n<li><strong>가중 요소</strong> — 반복적인 안전 위반 이력, 근로감독 시정명령 미이행, 사고 은폐 시도, 증거 인멸, 다수 사상자 발생, 비용 절감을 위한 안전장비 미비</li>\n<li><strong>합의의 중요성</strong> — 유족과의 합의는 양형에 큰 영향을 미칩니다. 합의금 수준은 사고 경위, 피해자의 나이와 소득, 유족 수 등에 따라 달라집니다</li>\n<li><strong>실형과 집행유예</strong> — 중대재해처벌법은 법정형 하한이 징역 1년이므로 집행유예(징역 3년 이하)가 가능합니다. 안전관리 노력과 합의 여부가 집행유예 선고에 결정적입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 안전관리 이력 + 사고 후 대응 + 유족 합의 = 양형의 3대 요소</blockquote>',
      },
      {
        title: '사고 직후 사업주의 초기 대응',
        content:
          '<p><strong style="color:#1e3a5f">사고 발생 직후의 대응이 형사처벌 수위와 민사 책임 범위를 크게 좌우합니다. 혐의를 받고 있다면 아래 순서대로 대응하세요</strong></p>\n<ul>\n<li><strong>즉시 조치</strong> — 부상자 구조, 119 신고, 추가 사고 방지를 위한 작업 중지. 이 조치가 늦어지면 사고 은폐로 해석될 수 있습니다</li>\n<li><strong>관계 기관 보고</strong> — 산업안전보건법에 따라 사망사고 발생 시 지체 없이 관할 고용노동부 지방관서에 보고해야 합니다. 미보고 시 3,000만 원 이하의 과태료가 부과됩니다</li>\n<li><strong>현장 보존과 자료 확보</strong> — 사고 현장을 변경하지 말고 사진·영상으로 기록합니다. CCTV, 작업일지, 안전점검 기록, 안전교육 이수 내역 등 안전관리 이행 자료를 확보하세요</li>\n<li><strong>변호사 선임</strong> — 경찰·검찰 수사 전에 산업안전 전문 변호사를 선임하세요. 첫 조사에서의 진술이 이후 재판에 큰 영향을 미칩니다. 조사 전 진술 방향을 반드시 상의하세요</li>\n</ul>\n<p><strong>절대 하지 말 것:</strong> 사고 현장 변경, CCTV 삭제, 근로자에게 허위 진술 종용. 이러한 행위는 증거인멸죄가 추가 적용되어 처벌이 크게 가중됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">초기 대응 순서: 구조·신고 → 기관 보고 → 현장 보존 → 변호사 선임</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법 경영책임자 의무 범위 — 대법원 판결',
        summary:
          '대법원 2025도15060 사건에서 법원은 중대재해처벌법상 "사업 또는 사업장"의 범위와 경영책임자의 안전보건관리체계 구축 의무 위반 여부를 판단했습니다. 경영책임자가 실질적으로 안전보건 의무를 이행했는지를 기준으로 책임 범위를 판시했습니다.',
        takeaway:
          '경영책임자는 안전보건관리체계를 형식적으로 갖추는 것만으로는 부족하고, 실질적으로 작동하는 시스템을 구축해야 합니다. 안전보건 전담 조직, 예산, 점검 기록을 갖추세요.',
      },
    ],
    faq: [
      {
        question: '대표이사가 아닌 공장장도 처벌받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 산업안전보건법상 안전조치 의무는 사업주뿐 아니라 안전보건관리책임자, 관리감독자에게도 부과됩니다. 중대재해처벌법은 경영책임자를 처벌하지만, 형법상 업무상과실치사는 실질적 관리 책임이 있는 사람에게 적용될 수 있습니다.',
      },
      {
        question: '사고 근로자가 안전수칙을 어겼어도 사업주가 처벌받나요?',
        answer:
          '<strong>근로자의 과실이 있더라도 사업주의 안전조치 의무가 면제되지 않습니다.</strong> 다만 양형에서 감경 사유로 고려될 수 있습니다. 사업주는 근로자가 안전수칙을 지키도록 교육하고 관리·감독할 의무가 있습니다.',
      },
      {
        question: '중대재해처벌법과 산업안전보건법 중 어떤 것이 먼저 적용되나요?',
        answer:
          '<strong>두 법률은 동시에 적용될 수 있습니다.</strong> 산안법은 안전조치 위반 자체를, 중대재해법은 안전보건관리체계 미구축에 따른 결과를 처벌합니다. 검찰이 사안에 따라 적용 법조를 선택하거나 병합 기소합니다.',
      },
      {
        question: '유족 합의를 하면 형사처벌을 피할 수 있나요?',
        answer:
          '<strong>합의만으로 형사처벌이 면제되지는 않습니다.</strong> 산안법·중대재해법 위반은 반의사불벌죄가 아니므로 유족이 처벌을 원하지 않아도 기소됩니다. 다만 합의는 양형에서 매우 중요한 감경 사유이며 집행유예 선고에 큰 영향을 미칩니다.',
      },
      {
        question: '벌금형만 받을 수도 있나요?',
        answer:
          '<strong>중대재해처벌법은 징역 1년 이상 또는 10억 원 이하 벌금이므로 벌금형 선고도 가능합니다.</strong> 다만 사안이 중대하면 징역형이 선고됩니다. 산안법 위반은 벌금형 단독 선고가 더 흔하며, 법인에 대해서는 벌금형만 가능합니다.',
      },
    ],
    cta: {
      text: '사망사고 사업주 처벌 무료 상담받기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '중대재해·산업안전 가이드', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 보고 의무 절차', href: '/spoke/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 사업주 대응법', href: '/spoke/industrial-accident2/serious-accident-employer-response' },
      { label: '안전보건 위반 과태료·벌금 기준', href: '/spoke/industrial-accident2/workplace-safety-violation-penalty' },
      { label: '위험성평가 사업주 의무', href: '/spoke/industrial-accident2/risk-assessment-employer-obligation' },
    ],
  },

  // ───────────────────────────────────────────
  // 10. industrial-accident2 / safety-manager-selection-duty
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'safety-manager-selection-duty',
    keyword: '안전보건관리 체계 구축 의무 선임',
    questionKeyword: '안전관리자와 보건관리자를 꼭 선임해야 하나요?',
    ctaKeyword: '안전보건관리 체계 구축',
    type: '체크리스트형',
    perspective: '가해자',
    meta: {
      title: '안전보건관리 체계 구축 의무 6가지 체크리스트 | 로앤가이드',
      description:
        '안전관리자·보건관리자 선임 의무가 있는지 혐의를 받고 있다면 체계 구축 기준을 지금 확인하세요.',
    },
    intro:
      '<p>근로감독관이 안전보건관리체계가 갖춰져 있냐고 묻습니다. 안전관리자, 보건관리자, 산업보건의 — 누구를 뽑아야 하는지, 우리 회사 규모에 해당되는지 헷갈립니다. 미선임이면 과태료뿐 아니라 사고 시 가중 처벌을 받을 수 있습니다.</p>',
    sections: [
      {
        title: '사업장 규모별 선임 의무 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법은 사업장 규모와 업종에 따라 안전·보건 관리 인력의 선임 의무를 다르게 규정합니다. 혐의를 받고 있다면 우리 사업장에 해당하는 의무부터 확인하세요</strong></p>\n<ul>\n<li><strong>안전보건관리책임자</strong> — 상시 근로자 100인 이상(건설업은 공사금액 120억 원 이상) 사업장은 사업장을 실질적으로 총괄 관리하는 사람을 안전보건관리책임자로 선임해야 합니다</li>\n<li><strong>안전관리자</strong> — 상시 근로자 50인 이상(일부 업종은 50인 미만도 해당) 사업장에서 선임합니다. 300인 이상은 2인 이상을 선임해야 합니다</li>\n<li><strong>보건관리자</strong> — 상시 근로자 50인 이상 사업장에서 선임합니다. 보건관리 업무를 전문기관에 위탁할 수도 있습니다</li>\n<li><strong>산업보건의</strong> — 상시 근로자 50인 이상 사업장 중 보건관리자를 의사로 선임해야 하는 경우(유해물질 취급 등)에 해당합니다</li>\n<li><strong>관리감독자</strong> — 생산 현장의 작업을 직접 지휘·감독하는 사람. 별도 선임 절차 없이 직책에 따라 자동 부여되며, 안전교육 이수 의무가 있습니다</li>\n<li><strong>안전보건총괄책임자</strong> — 같은 장소에서 2개 이상 사업주의 근로자가 작업하는 경우(도급 현장 등) 선임합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 기준: 상시 근로자 50인 이상이면 안전관리자·보건관리자 선임 의무 발생</blockquote>',
      },
      {
        title: '안전관리자·보건관리자 자격 요건',
        content:
          '<p><strong style="color:#1e3a5f">안전관리자와 보건관리자는 아무나 선임할 수 없습니다. 법에서 정한 자격 요건을 갖춘 사람만 선임할 수 있습니다</strong></p>\n<ul>\n<li><strong>안전관리자 자격</strong> — ① 산업안전기사 또는 산업안전산업기사 ② 산업안전지도사 ③ 건설안전기사(건설업) ④ 관련 학과 졸업 후 실무 경력자. 업종에 따라 요구되는 자격이 다릅니다</li>\n<li><strong>보건관리자 자격</strong> — ① 산업보건지도사 ② 산업위생관리기사 또는 산업위생관리산업기사 ③ 의사·간호사 ④ 산업위생 관련 학과 졸업자</li>\n<li><strong>위탁 가능 여부</strong> — 300인 미만 사업장은 안전관리·보건관리 업무를 전문기관(안전보건대행기관)에 위탁할 수 있습니다. 위탁하더라도 사업주의 책임은 면제되지 않습니다</li>\n<li><strong>겸직 제한</strong> — 안전관리자는 안전관리 업무만 전담해야 하며, 다른 업무와 겸직이 원칙적으로 금지됩니다(일부 예외 있음)</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">안전관리 체계 구축 의무가 불분명하다면</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">안전보건관리 체계 구축 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '산업안전보건위원회 설치 기준',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건위원회는 사업장의 안전·보건에 관한 중요 사항을 노사가 함께 심의·의결하는 기구입니다</strong></p>\n<ul>\n<li><strong>설치 의무 사업장</strong> — 상시 근로자 100인 이상인 사업장(토석·목재 등 일부 업종은 50인 이상)은 산업안전보건위원회를 설치해야 합니다</li>\n<li><strong>구성</strong> — 근로자 위원과 사용자 위원 동수로 구성합니다. 근로자 위원은 근로자대표와 근로자대표가 지명하는 9명 이내, 사용자 위원은 사업주(대표), 안전관리자, 보건관리자 등입니다</li>\n<li><strong>심의·의결 사항</strong> — 산업재해 예방계획, 안전보건관리규정 작성·변경, 근로자 안전보건교육, 작업환경측정 결과와 대책, 유해·위험 기계의 안전조치 등</li>\n<li><strong>회의 주기</strong> — 분기별 1회 이상 개최해야 합니다. 회의록을 작성하고 3년간 보존해야 합니다</li>\n</ul>\n<p>100인 미만 사업장은 위원회 대신 <strong>노사협의체</strong> 또는 <strong>안전보건 관련 사항에 대한 근로자 의견 청취</strong> 절차를 운영하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">100인 이상: 산업안전보건위원회 설치 의무 / 분기 1회 이상 개최 / 회의록 3년 보존</blockquote>',
      },
      {
        title: '미이행 시 제재와 사고 시 가중 처벌',
        content:
          '<p><strong style="color:#1e3a5f">안전보건관리체계 미구축은 평시에는 과태료, 사고 발생 시에는 형사처벌의 가중 요소가 됩니다. 혐의를 받고 있다면 현재 미이행 사항을 즉시 보완하세요</strong></p>\n<ul>\n<li><strong>안전관리자·보건관리자 미선임</strong> — 과태료 500만 원. 시정명령 후에도 미이행 시 1,000만 원까지 가중됩니다</li>\n<li><strong>안전보건관리책임자 미선임</strong> — 과태료 500만 원</li>\n<li><strong>산업안전보건위원회 미설치·미운영</strong> — 과태료 500만 원(미설치), 200만 원(미개최)</li>\n<li><strong>사고 시 가중 효과</strong> — 안전관리체계가 없는 상태에서 사망사고가 발생하면, 중대재해처벌법상 "안전보건관리체계 미구축"이 직접적 위반 사유가 되어 경영책임자에게 1년 이상 징역 또는 10억 원 이하 벌금이 적용됩니다</li>\n<li><strong>양형 가중</strong> — 재판에서 미선임·미이행 이력은 "안전 경시" 증거로 작용하여 형량이 무거워집니다. 반대로 체계를 갖추고 성실히 운영한 이력은 감경 사유입니다</li>\n</ul>\n<p><strong>지금 바로 할 일:</strong> ① 우리 사업장 규모·업종 확인 ② 선임 의무 해당 여부 점검 ③ 미선임이면 즉시 채용 또는 위탁 ④ 안전교육·점검 기록 갖추기</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">미선임 과태료 500만 원 + 사고 시 중대재해법 적용 = 이중 리스크</blockquote>',
      },
    ],
    cases: [
      {
        title: '안전보건관리체계 구축 의무 범위 — 대법원 판결',
        summary:
          '대법원 2025도15060 사건에서 법원은 중대재해처벌법상 경영책임자의 안전보건관리체계 구축 의무 위반 여부를 판단하면서, 형식적인 문서 작성이 아니라 실질적인 안전관리 시스템이 작동했는지를 기준으로 삼았습니다.',
        takeaway:
          '안전관리자를 선임하고 서류를 갖추는 것만으로는 부족합니다. 실제로 점검이 이루어지고, 위험요인이 개선되고, 교육이 실시된 기록을 남겨야 합니다.',
      },
    ],
    faq: [
      {
        question: '50인 미만 사업장도 안전관리자를 선임해야 하나요?',
        answer:
          '<strong>원칙적으로 50인 이상이 기준이지만 업종에 따라 50인 미만도 해당될 수 있습니다.</strong> 특히 유해·위험 업종(건설, 화학, 금속 등)은 소규모 사업장에도 일부 의무가 적용됩니다. 고용노동부 또는 안전보건공단에 확인하세요.',
      },
      {
        question: '전문기관에 위탁하면 사업주 책임이 면제되나요?',
        answer:
          '<strong>면제되지 않습니다.</strong> 위탁은 실무 수행을 맡기는 것이지, 법적 책임까지 이전하는 것이 아닙니다. 사고가 발생하면 위탁 여부와 관계없이 사업주에게 책임이 부과됩니다.',
      },
      {
        question: '안전관리자를 선임하지 않으면 바로 처벌받나요?',
        answer:
          '<strong>미선임 자체는 과태료 부과 대상(500만 원)이며, 형사처벌은 아닙니다.</strong> 그러나 미선임 상태에서 사고가 발생하면 산안법 위반, 중대재해처벌법 위반 등 형사 혐의가 추가됩니다.',
      },
      {
        question: '건설 현장에서는 누가 안전관리 책임을 지나요?',
        answer:
          '<strong>원청(도급인)이 안전보건총괄책임자를 선임하고 하청 근로자의 안전까지 관리해야 합니다.</strong> 산안법은 같은 장소에서 2개 이상 사업주가 작업하는 경우 도급인에게 안전조치 의무를 부과합니다.',
      },
      {
        question: '과태료를 내면 선임 의무가 사라지나요?',
        answer:
          '<strong>과태료 납부와 선임 의무는 별개입니다.</strong> 과태료를 납부하더라도 선임 의무는 계속되며, 시정명령 후에도 미이행하면 과태료가 가중됩니다. 사고 발생 전에 반드시 선임을 완료하세요.',
      },
    ],
    cta: {
      text: '안전보건관리 체계 구축 무료 상담받기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '중대재해·산업안전 가이드', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 보고 의무 절차', href: '/spoke/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 사업주 대응법', href: '/spoke/industrial-accident2/serious-accident-employer-response' },
      { label: '안전보건 위반 과태료·벌금 기준', href: '/spoke/industrial-accident2/workplace-safety-violation-penalty' },
      { label: '위험성평가 사업주 의무', href: '/spoke/industrial-accident2/risk-assessment-employer-obligation' },
    ],
  },

  // ───────────────────────────────────────────
  // 11. neighbor-dispute / construction-noise-vibration-response
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'construction-noise-vibration-response',
    keyword: '공사 소음 진동 피해 대응법',
    questionKeyword: '옆 건물 공사 소음이 심한데 어떻게 대응하나요?',
    ctaKeyword: '공사 소음 피해 대응',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '공사 소음·진동 피해 대응 4단계 절차 | 로앤가이드',
      description:
        '옆 건물 공사 소음과 진동이 심해서 생활이 어려운데 법적 대응 방법을 모르겠다면 절차를 지금 확인하세요.',
    },
    intro:
      '<p>옆 건물 공사가 시작된 이후 하루 종일 망치 소리와 진동이 이어집니다. 집에서 일할 수도, 잠을 잘 수도 없습니다. 공사 업체에 항의하면 "법적으로 허용된 시간에 하고 있다"고 합니다. 참을 한도를 넘는 소음에 어떻게 대응해야 하는지 알고 싶습니다.</p>',
    timelineSteps: [
      '1단계: 소음·진동 기록과 측정',
      '2단계: 시공사·건축주에 공식 항의',
      '3단계: 지자체 민원 및 행정 조치',
      '4단계: 손해배상 청구',
    ],
    sections: [
      {
        title: '공사 소음 허용 기준과 시간대',
        content:
          '<p><strong style="color:#1e3a5f">소음·진동관리법 시행규칙은 특정 공사장 소음의 규제 기준을 시간대와 지역별로 구분하고 있습니다</strong></p>\n<ul>\n<li><strong>주거지역 기준</strong> — 주간(06~18시) 65dB, 야간(22~06시) 50dB. 조·석(06~08시, 18~22시)은 60dB 이하여야 합니다. 일요일·공휴일에는 더 엄격한 기준이 적용됩니다</li>\n<li><strong>상업·공업지역</strong> — 주거지역보다 5~10dB 높은 기준이 적용됩니다. 주간 70dB, 야간 55dB 등</li>\n<li><strong>공사 가능 시간</strong> — 일반적으로 주간 시간대(07~18시)에만 공사가 허용됩니다. 지자체 조례에 따라 다를 수 있으므로 해당 구청에 확인하세요</li>\n<li><strong>진동 기준</strong> — 주간 65dB(V), 야간 60dB(V)이 주거지역 기준입니다. 진동은 소음보다 측정이 어려워 전문 측정 기관이 필요합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주거지역 기준: 주간 65dB / 야간 50dB 초과 시 위법 — 지자체 조례도 함께 확인</blockquote>',
      },
      {
        title: '증거 수집 — 데시벨 측정과 영상 기록',
        content:
          '<p><strong style="color:#1e3a5f">공사 소음·진동 피해를 입증하려면 객관적 측정 자료와 생활 피해 기록을 체계적으로 남겨야 합니다</strong></p>\n<ul>\n<li><strong>데시벨 측정 앱</strong> — 스마트폰 앱(NIOSH SLM, 소음측정기 등)으로 일상적으로 측정하고 기록합니다. 법적 증거력은 약하지만 초기 자료로 활용 가능합니다</li>\n<li><strong>전문 기관 측정</strong> — 한국환경공단 또는 민간 측정 대행업체에 의뢰하면 법적 효력이 있는 측정 성적서를 받을 수 있습니다. 비용은 30~50만 원 수준입니다</li>\n<li><strong>영상·녹음 기록</strong> — 소음이 심한 시간대에 날짜, 시각이 표시되는 영상을 촬영합니다. 창문이 흔들리거나 벽에 금이 가는 장면도 기록하세요</li>\n<li><strong>피해 일지 작성</strong> — 소음 발생 시각, 지속 시간, 피해 내용(수면 방해, 업무 불가 등)을 매일 기록합니다. 병원 진료 기록(두통, 불면증 등)이 있으면 더 강력한 증거가 됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">공사 소음 피해 대응이 어렵다면</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">공사 소음 피해 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '지자체 민원과 공사 중지 요청',
        content:
          '<p><strong style="color:#1e3a5f">공사 소음이 규제 기준을 초과하면 지자체에 민원을 제기하여 시정명령, 공사 중지 등 행정 조치를 요구할 수 있습니다</strong></p>\n<ul>\n<li><strong>민원 접수</strong> — 관할 구청 환경과에 전화·방문 또는 국민신문고(www.epeople.go.kr)로 접수합니다. "공사장 소음 규제 기준 초과"를 구체적으로 기재하세요</li>\n<li><strong>현장 점검</strong> — 구청 담당자가 현장에 출동하여 소음을 측정합니다. 기준 초과가 확인되면 시공사에 시정명령을 발부합니다</li>\n<li><strong>시정명령 불이행 시</strong> — 시정명령 불이행 시 과태료(최대 300만 원)가 부과됩니다. 반복 위반 시 공사 중지 명령도 가능합니다</li>\n<li><strong>환경분쟁조정</strong> — 중앙환경분쟁조정위원회에 피해배상 조정을 신청할 수 있습니다. 소송보다 빠르고 비용이 적으며, 조정 성립 시 재판상 화해와 같은 효력이 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 구청 민원 → 현장 측정 → 시정명령 → 과태료·공사 중지 / 환경분쟁조정 병행 가능</blockquote>',
      },
      {
        title: '손해배상 청구와 참을 한도 기준',
        content:
          '<p><strong style="color:#1e3a5f">공사 소음이 참을 한도(수인한도)를 넘으면 민법 제217조와 제750조에 따라 손해배상을 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>수인한도 판단 기준</strong> — 법원은 ① 피해의 성질과 정도 ② 공사의 공공성 ③ 가해자의 방지 조치 유무 ④ 지역 환경 ⑤ 선후 관계 등을 종합하여 판단합니다</li>\n<li><strong>청구 대상</strong> — 시공사(건설회사)와 건축주(발주자) 모두에게 청구할 수 있습니다. 건축주도 시공 과정에서의 소음 방지 의무가 있습니다</li>\n<li><strong>배상 범위</strong> — 위자료(정신적 손해), 치료비(소음으로 인한 질병), 영업 손실(재택근무 불가 등), 건물 균열 등 물적 피해. 위자료는 월 10~30만 원 수준이 일반적입니다</li>\n<li><strong>소송 전 유의사항</strong> — 환경분쟁조정을 먼저 시도하는 것이 비용·시간 면에서 유리합니다. 조정이 불성립하면 민사소송으로 전환합니다</li>\n</ul>\n<p><strong>참고:</strong> 공사 기간이 한정적이므로 공사가 끝난 후에 일괄적으로 손해배상을 청구하는 것이 실무적으로 효율적입니다. 다만 <strong>소멸시효(3년)</strong>를 넘기지 않도록 주의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">수인한도 초과 시: 시공사·건축주에 위자료 + 치료비 + 물적 피해 배상 청구 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '소음 피해 수인한도 판단 기준 — 대법원 판결',
        summary:
          '대법원 2014다57846 사건에서 법원은 도로 소음으로 인한 생활방해 사건을 심리하며, 소음이 참을 한도를 넘는지는 피해의 성질과 정도, 가해 행위의 공공성, 방지 조치의 가능성 등을 종합적으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '공사 소음 피해도 동일한 법리가 적용됩니다. 소음 측정 기록, 생활 피해 일지, 병원 기록을 체계적으로 남기면 수인한도 초과를 입증하기 수월합니다.',
      },
    ],
    faq: [
      {
        question: '공사 소음이 허용 기준 이내여도 손해배상을 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 행정법상 규제 기준과 민사법상 수인한도는 별개입니다. 규제 기준 이내라도 실질적으로 참을 한도를 넘는 피해가 발생했다면 손해배상 청구가 가능합니다.',
      },
      {
        question: '세입자도 소음 피해에 대해 청구할 수 있나요?',
        answer:
          '<strong>세입자도 생활 이익 침해에 대한 손해배상을 청구할 수 있습니다.</strong> 소유자가 아니더라도 거주하면서 소음 피해를 받고 있다면 위자료와 실질적 손해를 청구할 수 있습니다.',
      },
      {
        question: '환경분쟁조정 비용은 얼마인가요?',
        answer:
          '<strong>신청 수수료는 청구 금액에 따라 1~5만 원 수준으로 매우 저렴합니다.</strong> 변호사 선임 없이도 신청 가능하며, 보통 3~6개월 내에 결론이 납니다. 측정 비용은 조정위원회에서 부담하는 경우도 있습니다.',
      },
      {
        question: '야간이나 공휴일 공사는 무조건 불법인가요?',
        answer:
          '<strong>원칙적으로 야간·공휴일 공사는 특별한 허가 없이 할 수 없습니다.</strong> 다만 긴급 공사, 도로 공사 등 부득이한 경우 지자체 허가를 받아 야간 공사를 할 수 있습니다. 허가 여부를 구청에 확인하세요.',
      },
      {
        question: '공사로 건물에 균열이 생겼는데 배상받을 수 있나요?',
        answer:
          '<strong>공사 진동으로 인한 건물 피해는 물적 손해로 배상 청구가 가능합니다.</strong> 공사 전 건물 상태 사진, 공사 후 균열 사진, 감정 평가서(수리비 산정)를 준비하세요. 시공사의 보험(건설공사보험)으로 배상받을 수도 있습니다.',
      },
    ],
    cta: {
      text: '공사 소음 피해 무료 상담받기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 분쟁 대응법', href: '/spoke/neighbor-dispute/floor-noise-dispute-response' },
      { label: '악취·반려동물·주차 분쟁 해결법', href: '/spoke/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
      { label: '층간소음 피해 어디부터 시작하나', href: '/spoke/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '층간소음 데시벨 기준', href: '/spoke/neighbor-dispute/floor-noise-decibel-standard' },
    ],
  },

  // ───────────────────────────────────────────
  // 12. neighbor-dispute / water-leak-damage-claim
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'water-leak-damage-claim',
    keyword: '누수 피해 손해배상 청구 절차',
    questionKeyword: '윗집 누수로 피해를 입었는데 배상받을 수 있나요?',
    ctaKeyword: '누수 손해배상 청구',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '누수 피해 손해배상 청구 3단계 절차 총정리 | 로앤가이드',
      description:
        '윗집 누수로 벽지와 가전이 망가졌는데 배상받는 방법을 모르겠다면 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>천장에서 물이 떨어지기 시작했습니다. 벽지가 젖고, 장판이 부풀어 올랐습니다. 윗집에 얘기하면 "자기 집도 아닌데 왜 자기한테 그러냐"고 합니다. 관리사무소는 중간에서 어쩔 줄 모릅니다. 누수 원인을 밝히고 피해를 배상받는 절차가 필요합니다.</p>',
    sections: [
      {
        title: '누수 원인 확인과 감정 절차',
        content:
          '<p><strong style="color:#1e3a5f">누수 손해배상에서 가장 중요한 첫 단계는 누수 원인을 정확히 규명하는 것입니다. 원인에 따라 배상 책임자가 달라집니다</strong></p>\n<ul>\n<li><strong>원인별 책임자</strong> — ① 윗집 전용부분(세탁기 호스, 배관 교체 부실 등) → 윗집 소유자 또는 세입자 ② 공용배관(층간 배관, 공용 하수관 등) → 관리주체(관리사무소·입주자대표회의) ③ 하자 → 시공사(하자보수보증기간 내)</li>\n<li><strong>누수 감정</strong> — 전문 누수 탐지 업체에 원인 조사를 의뢰합니다. 비용은 10~30만 원 수준이며, 감정 결과서가 책임 소재를 가리는 핵심 증거입니다</li>\n<li><strong>관리사무소 활용</strong> — 공동주택의 경우 관리사무소에 먼저 누수 원인 조사를 요청하세요. 공용부분 하자인 경우 관리비(장기수선충당금)로 수리할 수 있습니다</li>\n<li><strong>주의사항</strong> — 누수가 발생하면 즉시 사진·영상으로 기록하고, 윗집과 관리사무소에 서면(문자·내용증명)으로 통보합니다. 구두 통보만으로는 증거가 남지 않습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 단계: 누수 원인 감정(10~30만 원) → 원인에 따라 책임자 특정</blockquote>',
      },
      {
        title: '피해 금액 산정과 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">배상받으려면 피해 금액을 구체적으로 산정하고 증거를 체계적으로 확보해야 합니다</strong></p>\n<ul>\n<li><strong>물적 피해</strong> — 벽지·장판·천장 도배 비용, 가전제품 수리·교체 비용, 가구 피해 등. 인테리어 업체에서 수리 견적서를 받아두세요</li>\n<li><strong>수리비 견적</strong> — 최소 2곳 이상의 업체에서 견적을 받으면 금액의 객관성이 높아집니다. 피해 부위별로 항목을 나누어 견적서를 작성받으세요</li>\n<li><strong>사진·영상 기록</strong> — 누수 발생 직후, 피해 확산 과정, 수리 전후의 사진을 날짜별로 정리합니다. 피해 가전의 모델명·구매 시기도 기록합니다</li>\n<li><strong>위자료</strong> — 누수로 인한 생활 불편, 정신적 고통도 위자료로 청구할 수 있습니다. 다만 법원이 인정하는 위자료 금액은 50~200만 원 수준으로 높지 않은 편입니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">누수 피해 배상 절차가 막막하다면</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">누수 손해배상 청구 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '관리사무소·하자보수 보증 활용',
        content:
          '<p><strong style="color:#1e3a5f">공동주택(아파트·빌라)에서는 관리사무소와 하자보수보증을 적극적으로 활용하면 비용과 시간을 아낄 수 있습니다</strong></p>\n<ul>\n<li><strong>관리사무소 중재</strong> — 관리사무소에 공식적으로 누수 사실을 접수하고, 윗집과의 중재를 요청합니다. 관리사무소가 상·하층 세대를 함께 불러 현장 확인을 진행하는 것이 가장 효과적입니다</li>\n<li><strong>공용부분 하자</strong> — 공용배관의 노후·파손이 원인인 경우, 장기수선충당금으로 수리할 수 있습니다. 관리규약을 확인하여 공용부분 수리 절차를 따르세요</li>\n<li><strong>하자보수보증 기간</strong> — 신축 아파트의 경우 방수 하자는 5년, 배관 하자는 3년 동안 시공사에 무상 보수를 청구할 수 있습니다. 보증 기간 내라면 시공사에 직접 연락하세요</li>\n<li><strong>하자심사분쟁조정위원회</strong> — 하자 여부에 대해 시공사와 분쟁이 있으면 국토교통부 산하 하자심사분쟁조정위원회에 조정을 신청할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공용배관 → 장기수선충당금 / 신축 방수 하자 → 시공사 무상 보수(5년) / 분쟁 → 하자심사조정위원회</blockquote>',
      },
      {
        title: '민사 소송과 조정 절차',
        content:
          '<p><strong style="color:#1e3a5f">윗집이 수리와 배상을 거부하면 민사 조정이나 소송을 통해 강제할 수 있습니다</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 소송 전에 윗집에 내용증명을 보내 수리 요구와 손해배상 청구 의사를 통보합니다. 내용증명 자체에 법적 강제력은 없지만, 이후 소송에서 "통보를 했다"는 증거가 됩니다</li>\n<li><strong>민사 조정</strong> — 관할 법원에 조정 신청을 합니다. 조정 수수료는 소송보다 저렴하고, 절차도 빠릅니다(2~3개월). 조정이 성립되면 확정 판결과 같은 효력이 있습니다</li>\n<li><strong>소액사건심판</strong> — 청구 금액이 3,000만 원 이하이면 소액사건으로 진행됩니다. 1~2회 변론으로 빠르게 판결이 나오며, 변호사 없이도 진행할 수 있습니다</li>\n<li><strong>강제집행</strong> — 판결이 확정되어도 상대방이 배상하지 않으면 재산에 대한 강제집행(급여 압류, 부동산 경매 등)을 신청할 수 있습니다</li>\n</ul>\n<p><strong>실무 팁:</strong> 누수 피해 금액이 크지 않은 경우(100~500만 원), 소송보다 <strong>민사 조정</strong>이 시간과 비용 면에서 훨씬 유리합니다. 조정 불성립 시 자동으로 소송으로 이행됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 내용증명 → 민사 조정(2~3개월) → 소송 → 강제집행</blockquote>',
      },
    ],
    cases: [
      {
        title: '소음·누수 피해 수인한도 기준 — 대법원 판결',
        summary:
          '대법원 2011다91784 사건에서 법원은 이웃 간 생활방해(소음·진동) 피해의 참을 한도(수인한도) 기준을 제시했습니다. 피해의 성질과 정도, 가해 행위의 공공성, 지역 환경, 방지 조치 가능성 등을 종합 판단해야 한다는 법리는 누수 피해에도 동일하게 적용됩니다.',
        takeaway:
          '누수 피해가 반복되거나 장기간 지속되면 수인한도를 초과한 것으로 인정될 가능성이 높습니다. 피해 기간과 횟수를 꼼꼼히 기록하세요.',
      },
    ],
    faq: [
      {
        question: '윗집 세입자에게도 배상을 청구할 수 있나요?',
        answer:
          '<strong>누수 원인이 세입자의 과실(세탁기 호스 이탈, 욕실 물넘침 등)이면 세입자에게 청구할 수 있습니다.</strong> 배관 노후 등 건물 구조적 문제라면 소유자에게 청구해야 합니다. 원인에 따라 책임자가 다릅니다.',
      },
      {
        question: '윗집이 누수 감정을 거부하면 어떻게 하나요?',
        answer:
          '<strong>윗집의 협조 없이도 아래층에서 누수 원인 조사를 할 수 있습니다.</strong> 다만 윗집 배관 확인이 필요한 경우 관리사무소를 통해 협조를 요청하고, 거부하면 민사소송에서 법원의 감정 명령으로 강제할 수 있습니다.',
      },
      {
        question: '누수가 공용배관 문제인데 관리사무소가 수리를 안 해주면?',
        answer:
          '<strong>관리주체(입주자대표회의·관리사무소)는 공용부분을 관리할 의무가 있습니다.</strong> 관리를 게을리하여 피해가 발생하면 관리주체를 상대로 손해배상을 청구할 수 있습니다. 장기수선충당금 사용을 요구하세요.',
      },
      {
        question: '화재보험으로 누수 피해를 보상받을 수 있나요?',
        answer:
          '<strong>가입한 화재보험(주택종합보험)에 수재 담보가 포함되어 있으면 보상받을 수 있습니다.</strong> 보험사에 연락하여 누수 피해가 보상 대상인지 확인하세요. 보험금을 받은 뒤 보험사가 가해자에게 구상권을 행사합니다.',
      },
      {
        question: '누수 피해 배상 소멸시효는 얼마인가요?',
        answer:
          '<strong>불법행위 손해배상 청구권의 소멸시효는 피해 사실을 안 날부터 3년, 불법행위일부터 10년입니다.</strong> 누수가 반복되는 경우 각 누수 발생일마다 시효가 별도로 진행되므로, 최초 피해 시점을 기록해 두세요.',
      },
    ],
    cta: {
      text: '누수 손해배상 청구 무료 상담받기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 분쟁 대응법', href: '/spoke/neighbor-dispute/floor-noise-dispute-response' },
      { label: '악취·반려동물·주차 분쟁 해결법', href: '/spoke/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
      { label: '층간소음 피해 어디부터 시작하나', href: '/spoke/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '공사 소음·진동 피해 대응법', href: '/spoke/neighbor-dispute/construction-noise-vibration-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 13. neighbor-dispute / boundary-wall-dispute
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'boundary-wall-dispute',
    keyword: '경계 분쟁 담장 설치 법적 기준',
    questionKeyword: '옆집과 경계 분쟁이 생겼는데 어떻게 해결하나요?',
    ctaKeyword: '경계 분쟁 해결',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '경계 분쟁·담장 설치 법적 기준 4가지 | 로앤가이드',
      description:
        '옆집과 토지 경계나 담장 문제로 분쟁이 생겼는데 법적 기준을 모르겠다면 해결 방법을 지금 확인하세요.',
    },
    intro:
      '<p>옆집에서 담장을 허물고 새로 세우면서 경계가 달라졌습니다. 측량을 해보니 우리 땅까지 넘어온 것 같습니다. 이웃이라 감정 싸움이 되기 싫지만, 재산권을 포기할 수도 없습니다.</p>',
    sections: [
      {
        title: '경계 확인 방법 — 지적측량 신청',
        content:
          '<p><strong style="color:#1e3a5f">경계 분쟁의 출발점은 정확한 경계를 확인하는 것입니다. 지적측량을 통해 법적 경계를 확정해야 합니다</strong></p>\n<ul>\n<li><strong>지적측량 신청</strong> — 한국국토정보공사(LX)에 경계복원측량을 신청합니다. 비용은 필지 크기에 따라 30~50만 원 수준이며, 신청 후 7~14일 내에 측량이 이루어집니다</li>\n<li><strong>경계복원측량</strong> — 지적도에 등록된 경계를 현장에 표시해주는 측량입니다. 이 결과가 법적 경계의 기준이 됩니다</li>\n<li><strong>현장 입회</strong> — 측량 시 양측 토지 소유자가 함께 입회하는 것이 바람직합니다. 측량 결과에 이의가 있으면 재측량을 신청할 수 있습니다</li>\n<li><strong>지적도와 실제 경계의 차이</strong> — 오래된 토지는 지적도와 실제 점유 경계가 다를 수 있습니다. 이 경우 점유 기간에 따라 취득시효가 문제될 수 있으므로 법률 상담이 필요합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 단계: LX(한국국토정보공사)에 경계복원측량 신청 → 법적 경계 확인</blockquote>',
      },
      {
        title: '민법상 경계 관련 권리',
        content:
          '<p><strong style="color:#1e3a5f">민법은 인접 토지 소유자 간의 경계에 관한 여러 규정을 두고 있으며, 이를 알아야 분쟁을 유리하게 해결할 수 있습니다</strong></p>\n<ul>\n<li><strong>경계침범 금지(민법 제214조)</strong> — 소유자는 소유권을 방해하는 자에게 방해 제거를 청구할 수 있습니다. 옆집이 경계를 넘어 건물이나 담장을 설치했다면 철거를 요구할 수 있습니다</li>\n<li><strong>경계선 부근의 건축 제한(민법 제242조)</strong> — 건물을 축조할 때 경계로부터 반 미터(50cm) 이상의 거리를 두어야 합니다. 위반 시 변경이나 철거를 청구할 수 있으나, 건축 착수 후 1년 경과 또는 건물 완성 후에는 손해배상만 청구할 수 있습니다</li>\n<li><strong>담장·울타리 설치 비용(민법 제237조)</strong> — 인접 토지 소유자는 공동 비용으로 경계를 표시할 수 있습니다. 담장 설치 비용은 양측이 반반 부담하는 것이 원칙입니다</li>\n<li><strong>취득시효(민법 제245조)</strong> — 타인의 토지를 20년간(등기부 취득시효) 또는 10년간(등기 취득시효) 평온·공연하게 점유하면 소유권을 취득할 수 있습니다. 오랫동안 경계를 넘어 사용한 경우 문제가 됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">경계 분쟁 해결이 어렵다면</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">경계 분쟁 해결 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '담장 설치·비용 분담 기준',
        content:
          '<p><strong style="color:#1e3a5f">담장 설치와 비용 분담은 민법과 관습에 의해 정해지며, 합의가 안 되면 법원 판단을 받아야 합니다</strong></p>\n<ul>\n<li><strong>공동 담장</strong> — 경계선 위에 설치된 담장은 양측 공유로 추정됩니다(민법 제239조). 설치·수리 비용은 토지 면적 비율로 부담하되, 합의가 없으면 균등 부담이 원칙입니다</li>\n<li><strong>일방 담장</strong> — 자기 토지 안에 담장을 설치하는 것은 자유입니다. 다만 경계선을 넘어서면 안 되고, 상대방의 채광·통풍을 심하게 방해하면 권리남용이 될 수 있습니다</li>\n<li><strong>담장 높이 제한</strong> — 건축법 시행령에 따라 담장 높이는 일반적으로 1.5~2m 이하로 제한됩니다. 지자체 조례에 따라 다르므로 확인이 필요합니다</li>\n<li><strong>담장 철거 분쟁</strong> — 상대방이 경계를 넘어 담장을 설치했다면 철거를 요구할 수 있습니다. 자기 비용으로 설치한 담장이라도 경계 침범이면 철거 의무가 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경계선 위 담장: 공유 추정 / 자기 토지 내 담장: 자유 설치 / 경계 침범 담장: 철거 청구 가능</blockquote>',
      },
      {
        title: '경계 분쟁 해결 절차 — 조정에서 소송까지',
        content:
          '<p><strong style="color:#1e3a5f">경계 분쟁은 이웃 관계를 고려하여 조정부터 시도하되, 해결이 안 되면 소송으로 권리를 확보해야 합니다</strong></p>\n<ul>\n<li><strong>당사자 간 협의</strong> — 측량 결과를 근거로 양측이 합의합니다. 합의 시 경계 확인 합의서를 작성하고 공증받으면 나중에 다시 분쟁이 생기는 것을 방지할 수 있습니다</li>\n<li><strong>경계확정의 소</strong> — 경계가 불분명하거나 다투어지는 경우 법원에 경계확정의 소를 제기할 수 있습니다. 법원이 측량 감정을 실시하여 경계를 확정합니다</li>\n<li><strong>소유권 확인·방해 제거 소송</strong> — 경계가 확정된 후에도 상대방이 침범 부분을 반환하지 않으면 소유권 확인 소송과 방해 제거(담장 철거 등) 청구를 합니다</li>\n<li><strong>손해배상</strong> — 경계 침범으로 인한 토지 사용 불능, 건물 훼손 등의 손해에 대해 배상을 청구할 수 있습니다</li>\n</ul>\n<p><strong>실무 팁:</strong> 경계 분쟁은 이웃과의 장기적 관계에 영향을 미칩니다. 가능하면 <strong>법원 조정</strong>이나 <strong>대한법률구조공단 상담</strong>을 먼저 활용하세요. 소송은 최후 수단으로 남겨두는 것이 현명합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 측량 → 협의 → 조정 → 경계확정소송 → 방해제거·손해배상</blockquote>',
      },
    ],
    cases: [
      {
        title: '인접 토지 생활방해 수인한도 기준 — 대법원 판결',
        summary:
          '대법원 2014다57846 사건에서 법원은 인접 토지 간의 분쟁에서 생활방해가 참을 한도(수인한도)를 넘는지는 피해의 성질과 정도, 가해 행위의 태양, 지역성, 선후 관계 등을 종합 판단해야 한다고 판시했습니다. 이 법리는 경계 분쟁에서도 동일하게 적용됩니다.',
        takeaway:
          '경계 침범이 사소한 수준이라도 재산권 침해가 인정되면 방해 제거를 청구할 수 있습니다. 측량 결과를 확보하여 침범 면적과 기간을 구체적으로 입증하세요.',
      },
    ],
    faq: [
      {
        question: '측량 비용은 누가 부담하나요?',
        answer:
          '<strong>측량을 신청한 쪽이 먼저 부담하되, 분쟁 해결 후 침범한 쪽에게 비용을 청구할 수 있습니다.</strong> 소송에서 승소하면 소송비용에 측량 감정 비용을 포함하여 상대방에게 청구하는 것이 일반적입니다.',
      },
      {
        question: '옆집이 20년 넘게 우리 땅을 사용했으면 소유권을 잃나요?',
        answer:
          '<strong>취득시효가 완성될 수 있습니다.</strong> 민법 제245조에 따라 20년간 소유의 의사로 평온·공연하게 점유한 경우 소유권 이전등기를 청구할 수 있습니다. 다만 점유 조건이 엄격하므로 반드시 법률 상담을 받으세요.',
      },
      {
        question: '담장 설치 비용을 옆집에 반반 요구할 수 있나요?',
        answer:
          '<strong>민법 제237조에 따라 경계표시(담장 포함) 비용은 양측이 토지 면적 비율로 분담하는 것이 원칙입니다.</strong> 합의가 안 되면 법원에 비용 분담 청구 소송을 제기할 수 있습니다.',
      },
      {
        question: '건물이 경계를 넘어 지어졌는데 철거를 요구할 수 있나요?',
        answer:
          '<strong>건축 착수 후 1년 이내이고 건물이 완성되지 않았다면 철거를 청구할 수 있습니다.</strong> 그 이후에는 손해배상만 청구할 수 있습니다(민법 제242조 제2항). 시점이 중요하므로 경계 침범을 발견하면 즉시 대응하세요.',
      },
      {
        question: '경계확정의 소는 시간이 얼마나 걸리나요?',
        answer:
          '<strong>통상 6개월~1년 정도 소요됩니다.</strong> 법원 감정(측량)에 2~3개월, 변론에 3~6개월이 걸립니다. 상대방이 다투면 더 오래 걸릴 수 있으므로 가능하면 합의를 먼저 시도하세요.',
      },
    ],
    cta: {
      text: '경계 분쟁 해결 무료 상담받기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 분쟁 대응법', href: '/spoke/neighbor-dispute/floor-noise-dispute-response' },
      { label: '악취·반려동물·주차 분쟁 해결법', href: '/spoke/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
      { label: '층간소음 피해 어디부터 시작하나', href: '/spoke/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '공사 소음·진동 피해 대응법', href: '/spoke/neighbor-dispute/construction-noise-vibration-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 14. neighbor-dispute / illegal-parking-dispute-response
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'illegal-parking-dispute-response',
    keyword: '주차 분쟁 법적 대응 절차',
    questionKeyword: '이웃이 내 주차 공간을 계속 침범하는데 어떻게 하나요?',
    ctaKeyword: '주차 분쟁 대응',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '주차 분쟁 법적 대응 3단계 절차 총정리 | 로앤가이드',
      description:
        '이웃의 불법 주차로 스트레스를 받고 있는데 법적 대응 방법을 모르겠다면 절차를 지금 확인하세요.',
    },
    intro:
      '<p>아파트 지정 주차 구역에 매번 다른 차가 서 있습니다. 관리사무소에 민원을 넣어도 달라지지 않습니다. 쪽지를 남기면 오히려 "공용 주차장인데 왜 독점하냐"는 항의가 돌아옵니다.</p>',
    sections: [
      {
        title: '주차 분쟁 유형과 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">주차 분쟁은 크게 공동주택 지정 주차, 도로 위 불법 주차, 사유지 무단 주차로 나뉘며 각각 적용되는 법률이 다릅니다</strong></p>\n<ul>\n<li><strong>공동주택 지정 주차</strong> — 아파트·빌라의 주차장은 공동주택관리법과 관리규약에 따라 운영됩니다. 관리규약에 전용사용권이 명시되어 있으면 타인의 주차를 배제할 법적 근거가 됩니다</li>\n<li><strong>도로 위 불법 주차</strong> — 도로교통법 제32~34조에 따른 주정차 금지 구역 위반은 경찰에 신고할 수 있습니다. 안전신문고 앱으로 사진 신고가 가능합니다</li>\n<li><strong>사유지 무단 주차</strong> — 타인의 사유지에 무단 주차하는 것은 민법상 불법점유(민법 제213조)에 해당합니다. 소유권에 기한 방해 제거 청구가 가능합니다</li>\n<li><strong>재물손괴 주의</strong> — 불법 주차 차량에 스크래치를 내거나 타이어 바람을 빼는 행위는 형법 제366조 재물손괴죄에 해당합니다. 반드시 합법적 절차로 대응하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">유형별 법적 근거: 공동주택 → 관리규약 / 도로 → 도로교통법 / 사유지 → 민법 소유권</blockquote>',
      },
      {
        title: '관리규약과 전용사용권 확인',
        content:
          '<p><strong style="color:#1e3a5f">공동주택 주차 분쟁에서는 관리규약에 전용사용권이 어떻게 규정되어 있는지가 분쟁 해결의 핵심입니다</strong></p>\n<ul>\n<li><strong>전용사용권의 근거</strong> — 관리규약, 분양계약서, 입주자대표회의 결의에 의해 특정 세대에 주차 구역이 배정될 수 있습니다. 전용사용권이 인정되면 타인의 주차를 법적으로 배제할 수 있습니다</li>\n<li><strong>관리규약 확인 방법</strong> — 관리사무소에 관리규약 사본을 요청하거나, 국토교통부 공동주택관리정보시스템(K-apt)에서 확인할 수 있습니다</li>\n<li><strong>전용사용권이 없는 경우</strong> — 관리규약에 전용사용권 규정이 없으면 "선착순" 원칙이 적용되는 것이 일반적입니다. 이 경우 특정 구역 독점 주장이 어렵습니다</li>\n<li><strong>규약 개정 제안</strong> — 현재 규약에 주차 규정이 미비하다면 입주자대표회의에 관리규약 개정을 제안할 수 있습니다. 입주자 과반수 서면 동의로 개정이 가능합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">주차 분쟁 법적 대응이 어렵다면</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">주차 분쟁 대응 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '관리사무소·경찰 신고 절차',
        content:
          '<p><strong style="color:#1e3a5f">주차 분쟁 대응은 관리사무소 민원부터 시작하고, 효과가 없으면 경찰 신고와 행정 절차를 활용합니다</strong></p>\n<ul>\n<li><strong>관리사무소 민원</strong> — 서면(공문)으로 민원을 접수합니다. 구두 민원은 기록이 남지 않으므로 반드시 서면으로 하세요. 반복 주차 위반 차량의 차량번호, 날짜, 사진을 첨부합니다</li>\n<li><strong>안내문·경고</strong> — 관리사무소가 해당 세대에 경고 안내문을 발송합니다. 관리규약에 과태료 조항이 있으면 관리비에 과태료를 부과할 수 있습니다</li>\n<li><strong>경찰 신고</strong> — 도로 위 불법 주차는 112에 신고하거나 안전신문고 앱으로 사진 신고합니다. 주정차 위반 과태료는 4만 원(승용차 기준)입니다</li>\n<li><strong>견인 요청</strong> — 소방차 진입로 방해, 장애인 구역 불법 주차 등 긴급한 경우 견인을 요청할 수 있습니다. 사유지 내 무단 주차 차량도 소유자가 견인을 요청할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 서면 민원 → 경고·과태료 → 경찰 신고 → 견인 요청</blockquote>',
      },
      {
        title: '민사 조정 및 손해배상 청구',
        content:
          '<p><strong style="color:#1e3a5f">관리사무소와 경찰 신고로도 해결되지 않으면 법적 절차를 통해 권리를 보호받을 수 있습니다</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 반복 위반자에게 내용증명을 보내 주차 금지를 요청하고, 불이행 시 법적 조치를 하겠다는 의사를 통보합니다. 이후 소송에서 "충분한 경고를 했다"는 증거가 됩니다</li>\n<li><strong>민사 조정</strong> — 법원에 주차 방해 금지 조정을 신청합니다. 이웃 간 분쟁은 조정을 먼저 시도하는 것이 권장됩니다. 비용이 적고 2~3개월 내 결과를 받을 수 있습니다</li>\n<li><strong>방해 제거 청구 소송</strong> — 전용사용권이 인정되는 경우, 방해 제거(주차 금지) 청구 소송을 제기할 수 있습니다. 승소하면 향후 위반 시 간접강제(1일당 일정 금액 부과)를 신청할 수 있습니다</li>\n<li><strong>손해배상</strong> — 불법 주차로 인한 차량 출입 불가, 영업 손실 등 구체적인 손해가 있으면 배상을 청구할 수 있습니다. 다만 단순 불편만으로는 배상 인정이 어렵습니다</li>\n</ul>\n<p><strong>기억하세요:</strong> 주차 분쟁에서 물리적 충돌이나 차량 손괴가 발생하면 형사 사건으로 번질 수 있습니다. 감정적 대응을 삼가고, 모든 대응을 기록으로 남기세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법적 절차: 내용증명 → 민사 조정 → 방해 제거 소송 → 간접강제</blockquote>',
      },
    ],
    cases: [
      {
        title: '공동주택 주차장 전용사용권 분쟁 — 판례',
        summary:
          '공동주택 관리규약에 전용사용권이 명시된 경우 해당 세대는 배정된 주차 구역을 독점적으로 사용할 권리가 있으며, 타인의 무단 주차에 대해 방해 제거를 청구할 수 있다는 것이 법원의 일관된 입장입니다.',
        takeaway:
          '관리규약에 전용사용권 규정이 있는지 먼저 확인하세요. 규정이 있으면 법적으로 강력한 보호를 받을 수 있고, 없으면 규약 개정을 추진하는 것이 효과적입니다.',
      },
    ],
    faq: [
      {
        question: '불법 주차 차량에 쪽지를 남겨도 되나요?',
        answer:
          '<strong>정중한 내용의 쪽지를 남기는 것은 문제없습니다.</strong> 다만 욕설, 협박, 차량 훼손(테이프 부착 등)은 명예훼손이나 재물손괴로 문제가 될 수 있으므로 주의하세요.',
      },
      {
        question: '사유지에 주차된 차량을 직접 견인해도 되나요?',
        answer:
          '<strong>사유지 소유자는 무단 주차 차량에 대해 견인을 요청할 수 있습니다.</strong> 다만 직접 견인 과정에서 차량이 손상되면 배상 책임이 생길 수 있으므로 전문 견인업체를 통해 처리하고 과정을 영상으로 기록하세요.',
      },
      {
        question: '관리비에 주차 과태료를 부과할 수 있나요?',
        answer:
          '<strong>관리규약에 주차 위반 시 과태료(관리비 부과) 조항이 있으면 가능합니다.</strong> 관리규약에 근거 없이 관리비를 부과하면 부당이득이 될 수 있으므로 반드시 규약을 확인하세요.',
      },
      {
        question: '장애인 주차구역에 주차하면 어떤 처벌을 받나요?',
        answer:
          '<strong>장애인전용주차구역 불법 주차는 10만 원의 과태료가 부과됩니다.</strong> 장애인주차표지 위조·변조는 200만 원 이하의 과태료입니다. 안전신문고 앱으로 사진 신고하면 됩니다.',
      },
      {
        question: '아파트 주차장에서 차량이 긁혔는데 배상받을 수 있나요?',
        answer:
          '<strong>가해 차량을 특정할 수 있으면 손해배상을 청구할 수 있습니다.</strong> CCTV 확인을 관리사무소에 요청하고, 블랙박스 영상도 확보하세요. 가해자를 특정하지 못하면 자차보험으로 처리해야 합니다.',
      },
    ],
    cta: {
      text: '주차 분쟁 대응 무료 상담받기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 분쟁 대응법', href: '/spoke/neighbor-dispute/floor-noise-dispute-response' },
      { label: '악취·반려동물·주차 분쟁 해결법', href: '/spoke/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
      { label: '층간소음 피해 어디부터 시작하나', href: '/spoke/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '공사 소음·진동 피해 대응법', href: '/spoke/neighbor-dispute/construction-noise-vibration-response' },
    ],
  },
];
