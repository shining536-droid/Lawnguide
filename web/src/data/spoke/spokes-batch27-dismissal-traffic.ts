import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 해고/권고사직 4개 + 교통사고 3개 (batch27)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch27DismissalTraffic: SpokePage[] = [
  // ══════════ 해고/권고사직 4개 ══════════

  // ── 1. 출산휴가/육아휴직 복귀 후 해고 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-maternity-return-fired',
    keyword: '출산휴가 육아휴직 복귀 후 해고 대응',
    questionKeyword: '육아휴직 복귀했는데 해고당했습니다. 구제 방법이 있나요?',
    ctaKeyword: '출산휴가 복귀 해고 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출산휴가·육아휴직 복귀 후 해고 시 구제 방법 4단계 | 로앤가이드',
      description: '출산휴가·육아휴직 복귀 후 해고는 위법입니다. 부당해고 구제신청부터 손해배상까지 4단계를 지금 확인하세요.',
    },
    intro: '<p>1년간 육아휴직을 마치고 복귀했더니 "자리가 없다"며 퇴직을 권유합니다. 남녀고용평등법 제19조는 육아휴직을 이유로 한 해고를 명시적으로 금지합니다. 부당해고 구제 절차를 확인해보세요.</p>',
    timelineSteps: ['1단계: 해고 사유와 절차 확인', '2단계: 증거 확보', '3단계: 노동위원회 부당해고 구제신청', '4단계: 손해배상 청구'],
    sections: [
      {
        title: '육아휴직 복귀 후 해고가 위법인 이유',
        content: '<p><strong style="color:#1e3a5f">남녀고용평등법 제19조 제3항은 육아휴직을 이유로 한 해고를 금지합니다.</strong></p>\n<ul>\n<li><strong>해고 금지</strong> — 육아휴직을 이유로 해고나 불리한 처우를 할 수 없습니다.</li>\n<li><strong>원직 복귀 의무</strong> — 휴직 전과 같은 업무 또는 같은 수준의 임금을 지급하는 직무에 복귀시켜야 합니다.</li>\n<li><strong>위반 시 벌칙</strong> — 3년 이하 징역 또는 3,000만원 이하 벌금</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "구조조정"이나 "성과 부진"을 명목으로 하더라도, 실질적으로 육아휴직이 원인이면 위법입니다.</blockquote>',
      },
      {
        title: '구제 절차 4단계',
        content: '<p><strong style="color:#1e3a5f">해고 통보일로부터 3개월 이내에 노동위원회에 구제신청을 하세요.</strong></p>\n<ol>\n<li><strong>해고 사유서 요구</strong> — 근로기준법 제27조에 따라 서면으로 해고 사유와 시기를 통보받아야 합니다.</li>\n<li><strong>증거 확보</strong> — 육아휴직 신청서, 복귀 후 업무 배치 내역, 퇴직 권유 대화 녹음·카톡 등</li>\n<li><strong>부당해고 구제신청</strong> — 관할 지방노동위원회에 해고일로부터 3개월 이내 신청합니다.</li>\n<li><strong>손해배상 청구</strong> — 정신적 손해에 대한 위자료와 임금 상당액을 민사소송으로 청구할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>육아휴직 복귀 후 해고, AI가 구제 방법을 안내합니다</strong></p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '복귀 후 불리한 배치도 위법',
        content: '<p><strong style="color:#1e3a5f">해고가 아니더라도 불리한 부서 배치, 직급 하락, 임금 삭감은 불이익 처우에 해당합니다.</strong></p>\n<ul>\n<li>휴직 전보다 낮은 직급이나 다른 직무로 배치</li>\n<li>임금이나 수당의 삭감</li>\n<li>승진 누락이나 평가 불이익</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 육아휴직 후 불이익 처우 금지', summary: '대법원은 육아휴직을 사용한 근로자에 대해 휴직 기간을 근속기간에서 제외하거나 승진에서 불이익을 주는 것은 남녀고용평등법 위반이라고 판시합니다. 육아휴직 사용은 정당한 권리이며, 이를 이유로 한 어떤 불이익도 위법입니다.', takeaway: '비슷한 상황이라면 복귀 후 해고뿐 아니라 배치·승진·임금 면에서의 불이익도 구제 대상입니다.' }],
    faq: [
      { question: '권고사직 형태로 퇴직하면 부당해고가 아닌가요?', answer: '<p>실질적으로 거부할 수 없는 상황에서의 권고사직은 해고와 동일하게 봅니다. 퇴직 의사가 자유로운 것이 아니었다면 부당해고로 구제신청할 수 있습니다.</p>' },
      { question: '출산휴가 중에도 해고할 수 없나요?', answer: '<p>근로기준법 제23조 제2항에 따라 출산전후휴가 기간과 그 후 30일간은 해고할 수 없습니다.</p>' },
      { question: '구제신청 3개월 기한을 놓쳤으면?', answer: '<p>노동위원회 구제신청은 불가하지만, 민사소송으로 해고무효 확인 및 임금 청구가 가능합니다(소멸시효 3년).</p>' },
      { question: '5인 미만 사업장이면 구제신청이 안 되나요?', answer: '<p>노동위원회 구제신청은 불가하지만, 남녀고용평등법 위반으로 고용노동청에 신고할 수 있고 민사소송도 가능합니다.</p>' },
    ],
    cta: { text: '육아휴직 복귀 후 해고 구제 방법 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '해고 가이드', href: '/guide/dismissal' }, { label: '부당해고 구제신청', href: '/guide/dismissal/dismissal-unfair-relief-application' }, { label: '해고사유서 요청법', href: '/guide/dismissal/dismissal-reason-request-template' }, { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' }],
  },

  // ── 2. 정리해고 대상자 선정 부당성 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-restructuring-unfair-criteria',
    keyword: '정리해고 대상자 선정 기준 부당',
    questionKeyword: '정리해고 대상이 됐는데 선정 기준이 불공정합니다',
    ctaKeyword: '정리해고 부당 선정 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정리해고 대상자 선정 기준 부당성 구제 방법 | 로앤가이드',
      description: '정리해고 대상 선정이 불공정하다면 부당해고로 구제받을 수 있습니다. 정리해고 4대 요건 충족 여부를 지금 확인하세요.',
    },
    intro: '<p>회사가 경영 악화를 이유로 정리해고를 합니다. 그런데 해고 대상자 선정 기준이 불합리합니다. 성과가 좋은 제가 해고되고, 연줄이 있는 직원은 남습니다. 정리해고가 정당하려면 4대 요건을 모두 충족해야 합니다.</p>',
    timelineSteps: ['1단계: 정리해고 4대 요건 충족 여부 확인', '2단계: 부당한 선정 기준 증거 확보', '3단계: 부당해고 구제신청', '4단계: 원직복직 또는 금전보상'],
    sections: [
      {
        title: '정리해고 4대 요건',
        content: '<p><strong style="color:#1e3a5f">근로기준법 제24조에 따라 정리해고가 정당하려면 4가지 요건을 모두 충족해야 합니다.</strong></p>\n<ol>\n<li><strong>긴박한 경영상의 필요</strong> — 기업의 존속이 위태로울 정도의 긴박한 경영상 필요가 있어야 합니다.</li>\n<li><strong>해고 회피 노력</strong> — 배치전환, 희망퇴직 모집, 근로시간 단축 등 해고를 피하기 위한 노력을 다해야 합니다.</li>\n<li><strong>합리적이고 공정한 해고 기준</strong> — 대상자 선정 기준이 객관적이고 공정해야 합니다.</li>\n<li><strong>근로자 대표와의 사전 협의</strong> — 해고 50일 전까지 근로자 대표에게 통보하고 성실하게 협의해야 합니다.</li>\n</ol>',
      },
      {
        title: '부당한 선정 기준의 유형',
        content: '<p><strong style="color:#1e3a5f">다음과 같은 선정 기준은 부당한 것으로 판단될 수 있습니다.</strong></p>\n<ul>\n<li>성별, 나이, 노조 활동 여부에 따른 선정</li>\n<li>객관적 평가 없이 사용자의 주관적 판단만으로 선정</li>\n<li>근속연수·성과평가 등 합리적 기준 없이 자의적 선정</li>\n<li>선정 기준을 사전에 공개하지 않은 경우</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>정리해고 4대 요건 충족 여부, AI가 분석합니다</strong></p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '구제 방법',
        content: '<p><strong style="color:#1e3a5f">4대 요건 중 하나라도 충족하지 못하면 부당해고입니다.</strong></p>\n<ul>\n<li><strong>노동위원회 구제신청</strong> — 해고일로부터 3개월 이내</li>\n<li><strong>원직복직 명령</strong> — 인용되면 원직 복직 + 해고기간 임금 지급</li>\n<li><strong>금전보상 명령</strong> — 복직이 어려운 경우 금전보상을 받을 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 정리해고 4대 요건의 엄격한 적용', summary: '대법원은 정리해고의 4대 요건을 엄격하게 심사합니다. 특히 해고 회피 노력과 공정한 선정 기준에서 하자가 발견되면 정리해고 전체가 무효가 됩니다. 배치전환이나 희망퇴직 모집 없이 바로 정리해고를 한 경우 부당해고로 판단한 사례가 다수 있습니다.', takeaway: '비슷한 상황이라면 회사가 희망퇴직 모집, 근로시간 단축 등 해고 회피 노력을 했는지, 선정 기준이 사전에 공개되고 객관적이었는지를 확인하세요.' }],
    faq: [
      { question: '정리해고 통보 전에 협의를 안 했으면 무효인가요?', answer: '<p>근로자 대표와의 사전 협의를 거치지 않으면 4대 요건 중 하나가 결여되어 부당해고가 될 수 있습니다.</p>' },
      { question: '희망퇴직 거부 후 정리해고 대상이 됐습니다', answer: '<p>희망퇴직을 거부한 것 자체를 이유로 정리해고 대상으로 삼는 것은 부당합니다.</p>' },
      { question: '정리해고 시 우선 재고용 의무가 있나요?', answer: '<p>네, 정리해고한 날부터 3년 이내에 같은 업무에 근로자를 채용하려면 해고된 근로자를 우선 재고용해야 합니다.</p>' },
      { question: '정리해고 위로금을 받으면 구제신청을 못하나요?', answer: '<p>위로금 수령이 해고에 대한 동의로 볼 수 있으므로 신중해야 합니다. 다만 "해고에 대한 이의를 포기하지 않는다"는 유보를 하면 구제신청이 가능합니다.</p>' },
    ],
    cta: { text: '정리해고 부당성 여부 AI로 분석하기', link: '/chat?domain=dismissal' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '해고 가이드', href: '/guide/dismissal' }, { label: '부당해고 구제신청', href: '/guide/dismissal/dismissal-unfair-relief-application' }, { label: '해고사유서 요청', href: '/guide/dismissal/dismissal-reason-request-template' }, { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' }],
  },

  // ── 3. 구두 해고 대처 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-verbal-only-no-document',
    keyword: '구두 해고 통보 증거 확보',
    questionKeyword: '말로만 해고 통보받았는데 서면이 없습니다',
    ctaKeyword: '구두 해고 대처 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '구두 해고 통보만 받았을 때 증거 확보와 대응법 | 로앤가이드',
      description: '서면 없이 구두로만 해고 통보를 받았다면 그 자체가 위법입니다. 증거 확보법과 대응 절차를 지금 확인하세요.',
    },
    intro: '<p>사장님이 "내일부터 안 나와도 된다"고 말했습니다. 서면 통보도, 해고 사유서도 없습니다. 근로기준법 제27조는 해고 시 서면으로 사유와 시기를 통지할 것을 의무화하고 있으며, 서면 없는 해고는 그 자체로 무효입니다.</p>',
    timelineSteps: ['1단계: 구두 해고 발언 증거 확보', '2단계: 해고 사유서 서면 요청', '3단계: 출근 시도 + 기록', '4단계: 부당해고 구제신청'],
    sections: [
      {
        title: '서면 없는 해고는 무효',
        content: '<p><strong style="color:#1e3a5f">근로기준법 제27조에 따라 해고는 반드시 서면으로 사유와 시기를 통지해야 합니다.</strong></p>\n<ul>\n<li><strong>서면 통지 누락 = 부당해고</strong> — 해고 사유가 정당하더라도 서면 통지를 하지 않으면 부당해고입니다.</li>\n<li><strong>해고 효력 무효</strong> — 서면 없는 해고는 효력이 발생하지 않으므로, 근로관계는 계속됩니다.</li>\n<li><strong>위반 시 벌칙</strong> — 2년 이하 징역 또는 2,000만원 이하 벌금</li>\n</ul>',
      },
      {
        title: '즉시 해야 할 4가지',
        content: '<p><strong style="color:#1e3a5f">구두 해고를 당했다면 아래 순서로 대응하세요.</strong></p>\n<ol>\n<li><strong>발언 증거 확보</strong> — 해고 통보 대화를 녹음하거나, 카카오톡·이메일로 "방금 해고를 통보받았는데 서면으로 사유를 알려달라"고 보내 기록을 남깁니다.</li>\n<li><strong>해고 사유서 서면 요청</strong> — 내용증명이나 이메일로 해고 사유와 시기를 서면으로 통지해 줄 것을 공식 요청합니다.</li>\n<li><strong>출근 시도</strong> — 다음 날 출근을 시도하고, 출입이 거부되면 그 과정을 사진·동영상으로 기록합니다.</li>\n<li><strong>부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 노동위원회에 구제신청합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>구두 해고 대응 전략, AI가 안내합니다</strong></p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "해고가 아니라 권고"라고 하면',
        content: '<p><strong style="color:#1e3a5f">"해고가 아니라 자발적 퇴직을 권유한 것"이라고 주장하는 경우가 많습니다.</strong></p>\n<ul>\n<li>"내일부터 나오지 마라"는 명백한 해고 통보입니다.</li>\n<li>퇴직 권유를 거부했음에도 출근이 불가능해졌다면 실질적 해고입니다.</li>\n<li>녹음, 카톡, 동료 증언 등이 핵심 증거입니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 서면 해고통지 의무', summary: '대법원은 근로기준법 제27조의 서면 해고통지 의무를 엄격하게 적용합니다. 해고 사유가 정당하더라도 서면으로 통지하지 않으면 그 해고는 무효입니다. 구두 통보만으로는 해고의 효력이 발생하지 않습니다.', takeaway: '비슷한 상황이라면 서면 없는 해고는 그 자체로 무효이므로, 구제신청 시 매우 유리한 위치에 있습니다.' }],
    faq: [
      { question: '녹음이 증거로 인정되나요?', answer: '<p>대화 당사자 일방의 동의만 있으면 녹음은 적법한 증거입니다. 본인이 참여한 대화를 녹음하는 것은 합법입니다.</p>' },
      { question: '출근했는데 쫓겨났으면 어떻게 증명하나요?', answer: '<p>출입 시도 장면을 사진·동영상으로 촬영하고, 경비원이나 동료의 진술을 확보하세요.</p>' },
      { question: '해고 통보 후 카톡으로 "왜 해고하는지 서면으로 알려달라"고 보내면 증거가 되나요?', answer: '<p>네, 카카오톡 메시지는 유력한 증거입니다. 회사의 답변까지 캡처해두면 더 좋습니다.</p>' },
      { question: '5인 미만 사업장이면 서면 해고통지 의무가 없나요?', answer: '<p>서면 해고통지 의무는 5인 미만에도 적용됩니다. 다만 노동위원회 구제신청은 불가하고 민사소송으로 다투어야 합니다.</p>' },
    ],
    cta: { text: '구두 해고 대응 방법 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '해고 가이드', href: '/guide/dismissal' }, { label: '해고사유서 요청', href: '/guide/dismissal/dismissal-reason-request-template' }, { label: '부당해고 구제신청', href: '/guide/dismissal/dismissal-unfair-relief-application' }, { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' }],
  },

  // ── 4. 노조 활동 보복 해고 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-union-activity-retaliation',
    keyword: '노조 활동 보복 해고 부당노동행위',
    questionKeyword: '노조 가입했더니 해고당했습니다. 부당노동행위인가요?',
    ctaKeyword: '노조 보복 해고 구제 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노조 활동 보복 해고 부당노동행위 구제 절차 | 로앤가이드',
      description: '노조 가입이나 활동을 이유로 한 해고는 부당노동행위입니다. 2년 이하 징역·벌금 대상인 구제 절차를 지금 확인하세요.',
    },
    intro: '<p>노동조합에 가입한 지 2주 만에 해고 통보를 받았습니다. 회사는 "성과 부진"이라고 하지만, 실제 이유는 노조 가입이라는 것을 알고 있습니다. 노동조합법 제81조는 노조 활동을 이유로 한 불이익 처우를 부당노동행위로 금지합니다.</p>',
    timelineSteps: ['1단계: 부당노동행위 해당 여부 판단', '2단계: 증거 확보', '3단계: 노동위원회 구제신청', '4단계: 형사 고발'],
    sections: [
      {
        title: '부당노동행위란?',
        content: '<p><strong style="color:#1e3a5f">노동조합법 제81조에서 금지하는 사용자의 행위입니다.</strong></p>\n<ul>\n<li><strong>불이익 처우</strong> — 노조 가입·활동을 이유로 한 해고, 전보, 감봉 등</li>\n<li><strong>황견계약</strong> — 노조 미가입 또는 탈퇴를 고용조건으로 하는 것</li>\n<li><strong>지배·개입</strong> — 노조 운영에 개입하거나 방해하는 행위</li>\n<li><strong>위반 시 벌칙</strong> — 2년 이하 징역 또는 2,000만원 이하 벌금</li>\n</ul>',
      },
      {
        title: '구제 절차',
        content: '<p><strong style="color:#1e3a5f">부당노동행위 구제신청은 노동위원회에 합니다.</strong></p>\n<ol>\n<li><strong>증거 확보</strong> — 노조 가입 시점, 해고 시점의 근접성, 해고 사유의 부당성을 입증하는 자료</li>\n<li><strong>노동위원회 구제신청</strong> — 행위일로부터 3개월 이내에 관할 지방노동위원회에 신청합니다.</li>\n<li><strong>구제명령</strong> — 인용되면 원직복직 + 해고기간 임금 지급이 명령됩니다.</li>\n<li><strong>형사 고발</strong> — 부당노동행위는 형사처벌 대상이므로 사업주를 고발할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>노조 보복 해고 구제 방법, AI가 안내합니다</strong></p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '입증 방법',
        content: '<p><strong style="color:#1e3a5f">노조 활동이 해고의 실질적 이유임을 입증하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>시간적 근접성</strong> — 노조 가입·활동 직후에 해고된 경우 인과관계 추정</li>\n<li><strong>비교 대상</strong> — 동일한 업무성과의 비조합원은 해고되지 않은 사실</li>\n<li><strong>사용자 발언</strong> — "노조에 들면 불이익이 있다" 등의 발언 녹음·증언</li>\n<li><strong>해고 사유의 허위성</strong> — 회사가 주장하는 해고 사유가 사실과 다른 점</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 노조 가입 직후 해고의 부당노동행위 추정', summary: '대법원은 노조 가입 직후 해고된 경우, 해고 시점의 근접성과 사용자의 반노조 정서가 입증되면 부당노동행위로 추정합니다. 사용자가 해고의 정당한 사유를 입증하지 못하면 부당노동행위가 인정됩니다.', takeaway: '비슷한 상황이라면 노조 가입 시점과 해고 시점의 근접성, 사용자의 반노조 발언 등을 증거로 확보하세요.' }],
    faq: [
      { question: '노조에 가입만 하고 활동은 안 했는데도 보호되나요?', answer: '<p>네, 노조 가입 자체만으로도 보호 대상입니다. 가입을 이유로 한 불이익 처우는 부당노동행위입니다.</p>' },
      { question: '부당노동행위 구제신청과 부당해고 구제신청을 동시에 할 수 있나요?', answer: '<p>네, 두 가지를 동시에 신청할 수 있습니다. 실무적으로 함께 신청하는 경우가 많습니다.</p>' },
      { question: '노조 활동을 이유로 전보 배치한 것도 구제 대상인가요?', answer: '<p>해고가 아니더라도 전보, 감봉, 승진 누락 등 불이익 처우는 부당노동행위로 구제 대상입니다.</p>' },
      { question: '형사 고발하면 사업주가 처벌받나요?', answer: '<p>부당노동행위가 인정되면 2년 이하 징역 또는 2,000만원 이하 벌금에 처합니다. 검찰이 기소 여부를 판단합니다.</p>' },
    ],
    cta: { text: '노조 보복 해고 부당노동행위 구제 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '해고 가이드', href: '/guide/dismissal' }, { label: '부당해고 구제신청', href: '/guide/dismissal/dismissal-unfair-relief-application' }, { label: '직장 내 괴롭힘 해고', href: '/guide/dismissal/dismissal-workplace-bullying-remedies' }, { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' }],
  },

  // ══════════ 교통사고 3개 ══════════

  // ── 5. 경추 염좌 후유장해 보상 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-whiplash-compensation',
    keyword: '교통사고 경추염좌 후유장해 보상',
    questionKeyword: '교통사고로 목디스크가 생겼는데 후유장해 보상을 받을 수 있나요?',
    ctaKeyword: '교통사고 경추염좌 보상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교통사고 경추 염좌(목디스크) 후유장해 보상 가이드 | 로앤가이드',
      description: '교통사고 후 경추 염좌·목디스크 후유증이 남았다면 후유장해 보상을 받을 수 있습니다. 보상 절차를 지금 확인하세요.',
    },
    intro: '<p>교통사고 후 6개월이 지났는데 목 통증이 계속됩니다. MRI 결과 경추 디스크가 확인됐습니다. 보험회사는 "경미한 사고라 후유장해가 인정되지 않는다"고 합니다. 정말 그런지 확인해보세요.</p>',
    timelineSteps: ['1단계: 충분한 치료 기간 확보', '2단계: 후유장해 진단서 발급', '3단계: 보험회사에 후유장해 보상 청구', '4단계: 분쟁 시 금감원 또는 소송'],
    sections: [
      {
        title: '경추 염좌 후유장해 인정 기준',
        content: '<p><strong style="color:#1e3a5f">후유장해는 치료 종결 후에도 남은 영구적인 신체 기능 장해를 말합니다.</strong></p>\n<ul>\n<li><strong>치료 종결 시점</strong> — 보통 사고 후 6개월~1년 치료 후 증상 고정 시점</li>\n<li><strong>장해등급</strong> — 맥브라이드 장해평가표에 따라 장해율이 산정됩니다</li>\n<li><strong>경추 디스크</strong> — 수술 여부, 운동범위 제한, 신경 증상 지속 여부에 따라 장해율이 달라집니다</li>\n</ul>',
      },
      {
        title: '보험회사가 인정하지 않을 때',
        content: '<p><strong style="color:#1e3a5f">보험회사가 후유장해를 부인하면 독립적인 의학 감정을 받으세요.</strong></p>\n<ol>\n<li><strong>대학병원 신체감정</strong> — 보험회사 지정 병원이 아닌 독립적 의료기관에서 감정을 받습니다.</li>\n<li><strong>금융감독원 분쟁조정</strong> — 보험금 분쟁은 금감원 분쟁조정위원회에 신청할 수 있습니다.</li>\n<li><strong>민사소송</strong> — 소송에서 법원 감정을 통해 후유장해 여부가 최종 판단됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>교통사고 후유장해 보상 가능 여부, AI가 분석합니다</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '후유장해 보상금 구성',
        content: '<p><strong style="color:#1e3a5f">후유장해가 인정되면 다음 항목을 보상받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>일실수입</strong> — 장해로 인해 감소된 노동능력에 대한 보상 (장해율 × 잔여 가동연한 × 월소득)</li>\n<li><strong>향후 치료비</strong> — 향후 필요한 치료비용</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 보상</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 경추 염좌 후유장해 인정', summary: '대법원 판례에 따르면 교통사고로 인한 경추 디스크가 확인되고 치료 후에도 신경 증상이 지속되는 경우, 후유장해로 인정될 수 있습니다. 사고와 증상 사이의 인과관계가 핵심이며, MRI 소견과 신경검사 결과가 중요한 증거가 됩니다.', takeaway: '비슷한 상황이라면 치료를 조기에 중단하지 말고 충분히 받은 후 후유장해 진단을 받으세요.' }],
    faq: [
      { question: '경추 염좌는 가벼운 부상 아닌가요?', answer: '<p>단순 염좌는 2~4주 내 회복되지만, 디스크 탈출이나 신경 압박이 동반되면 후유장해가 남을 수 있습니다. MRI로 확인이 필요합니다.</p>' },
      { question: '기존에 목디스크가 있었는데 보상이 줄어드나요?', answer: '<p>기왕증(기존 질환)이 있으면 기여도가 감산될 수 있습니다. 다만 사고로 인해 악화된 부분은 보상 대상입니다.</p>' },
      { question: '후유장해 진단서는 어디서 받나요?', answer: '<p>정형외과 또는 신경외과 전문의가 발급합니다. 대학병원에서 받으면 객관성이 높아집니다.</p>' },
      { question: '보험회사 합의 제안이 너무 적으면?', answer: '<p>합의를 서두르지 마세요. 치료 종결 후 후유장해 진단을 받고, 일실수입까지 산정한 후 합의하는 것이 유리합니다.</p>' },
    ],
    cta: { text: '교통사고 후유장해 보상 가능 금액 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '교통사고 가이드', href: '/guide/traffic-accident' }, { label: '교통사고 합의금 적정 금액', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' }, { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' }, { label: '후유증 추가 치료비', href: '/guide/traffic-accident/traffic-delay-settlement-additional-treatment' }],
  },

  // ── 6. 무보험 차량 피해자 보상 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-uninsured-driver-victim',
    keyword: '무보험 차량 사고 피해자 보상',
    questionKeyword: '상대 차가 무보험인데 보상은 어떻게 받나요?',
    ctaKeyword: '무보험 사고 피해 보상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무보험 차량 교통사고 피해자 보상 절차 3가지 | 로앤가이드',
      description: '상대 차량이 무보험이라도 정부보장사업, 자차보험, 민사소송으로 보상받을 수 있습니다. 절차를 지금 확인하세요.',
    },
    intro: '<p>교통사고를 당했는데 상대방 차량이 보험에 가입하지 않은 무보험 차량입니다. 보상을 받을 수 없는 걸까요? 무보험 사고라도 정부보장사업, 자기 보험 활용, 가해자 직접 청구 등 3가지 방법으로 보상받을 수 있습니다.</p>',
    timelineSteps: ['1단계: 사고 접수 및 경찰 신고', '2단계: 보상 청구 경로 선택', '3단계: 서류 준비 및 청구'],
    sections: [
      {
        title: '3가지 보상 방법',
        content: '<p><strong style="color:#1e3a5f">무보험 차량 사고 시 아래 3가지 방법으로 보상받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>정부보장사업</strong> — 자동차손해배상보장법에 따라 정부가 피해자에게 보험금에 준하는 보상금을 지급합니다. 보험개발원에 청구합니다.</li>\n<li><strong>내 보험(무보험차 상해) 활용</strong> — 내 자동차보험에 "무보험차 상해" 특약이 있으면 내 보험에서 보상받을 수 있습니다.</li>\n<li><strong>가해자에게 직접 청구</strong> — 민사소송으로 가해자 개인에게 손해배상을 청구합니다.</li>\n</ol>',
      },
      {
        title: '정부보장사업 신청 방법',
        content: '<p><strong style="color:#1e3a5f">정부보장사업은 무보험, 뺑소니, 도난 차량 등에 의한 사고 피해자를 보호합니다.</strong></p>\n<ul>\n<li><strong>청구 대상</strong> — 보험에 가입하지 않은 차량에 의한 사고 피해자</li>\n<li><strong>보상 범위</strong> — 대인배상 기준으로 치료비, 휴업손해, 위자료 등</li>\n<li><strong>신청처</strong> — 보험개발원(정부보장사업 분담금 관리기관) 또는 손해보험회사</li>\n<li><strong>청구 기한</strong> — 사고일로부터 3년 이내</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>무보험 사고 보상 절차, AI가 최적 경로를 안내합니다</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사고 직후 해야 할 것',
        content: '<p><strong style="color:#1e3a5f">무보험 사고 시 경찰 신고가 특히 중요합니다.</strong></p>\n<ul>\n<li><strong>경찰 신고</strong> — 교통사고 사실확인서를 발급받습니다. 정부보장사업 청구 시 필수 서류입니다.</li>\n<li><strong>상대방 정보 확보</strong> — 운전면허증, 차량번호, 연락처를 확보합니다.</li>\n<li><strong>블랙박스·목격자</strong> — 사고 영상과 목격자 진술을 확보합니다.</li>\n<li><strong>병원 진료</strong> — 즉시 병원에서 진료를 받고 진단서를 발급받습니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 무보험 차량 운전자의 손해배상 책임', summary: '자동차손해배상보장법에 따르면 자동차 운행으로 인해 다른 사람을 사상하게 한 경우, 보험 가입 여부와 관계없이 운행자가 손해배상 책임을 집니다. 무보험 차량 운전자는 형사처벌(1년 이하 징역 또는 1,000만원 이하 벌금) 대상이기도 합니다.', takeaway: '비슷한 상황이라면 가해자에게 직접 손해배상을 청구하면서 정부보장사업도 병행하세요.' }],
    faq: [
      { question: '정부보장사업과 가해자 민사소송을 동시에 할 수 있나요?', answer: '<p>가능하지만 이중 보상은 안 됩니다. 정부보장사업에서 받은 금액은 가해자 청구에서 공제됩니다.</p>' },
      { question: '내 보험으로 처리하면 보험료가 오르나요?', answer: '<p>무보험차 상해 특약으로 보상받으면 통상 보험료 할증이 적용되지 않습니다. 보험사에 확인하세요.</p>' },
      { question: '가해자에게 재산이 없으면?', answer: '<p>정부보장사업이 최선의 방법입니다. 가해자에 대한 민사판결을 받아두면 향후 재산이 생겼을 때 집행할 수 있습니다.</p>' },
      { question: '자전거와 사고가 났는데 정부보장사업이 되나요?', answer: '<p>정부보장사업은 자동차 사고에 적용됩니다. 자전거는 자동차가 아니므로 대상이 아닙니다.</p>' },
    ],
    cta: { text: '무보험 사고 보상 절차 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '교통사고 가이드', href: '/guide/traffic-accident' }, { label: '교통사고 합의금', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' }, { label: '뺑소니 가해자 대응', href: '/guide/traffic-accident/traffic-accident-hitandrun-charge-first-response' }, { label: '보험 합의 체크리스트', href: '/guide/traffic-accident/traffic-settlement-agreement-checklist' }],
  },

  // ── 7. 동승자(탑승자) 사고 보상 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-passenger-injury-claim',
    keyword: '교통사고 동승자 탑승자 보상 청구',
    questionKeyword: '친구 차에 타고 있다가 사고가 났는데 보상받을 수 있나요?',
    ctaKeyword: '교통사고 동승자 보상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교통사고 동승자(탑승자) 보상 청구 방법 3가지 | 로앤가이드',
      description: '다른 사람 차에 타고 있다가 교통사고를 당했다면 운전자·상대방 보험 모두에 보상을 청구할 수 있습니다. 지금 확인하세요.',
    },
    intro: '<p>친구가 운전하는 차에 타고 있다가 교통사고가 났습니다. 친구 잘못도 있고 상대방 잘못도 있는데, 동승자인 저는 누구에게 보상을 받을 수 있을까요? 동승자는 과실과 관계없이 양쪽 운전자 모두에게 보상을 청구할 수 있습니다.</p>',
    timelineSteps: ['1단계: 사고 접수 및 병원 진료', '2단계: 과실비율 확인', '3단계: 양쪽 보험회사에 보상 청구'],
    sections: [
      {
        title: '동승자 보상의 원칙',
        content: '<p><strong style="color:#1e3a5f">동승자는 사고의 과실이 없으므로 양쪽 운전자 모두에게 100% 보상을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>운전자 과실과 무관</strong> — 내가 탄 차의 운전자(친구)와 상대방 운전자 중 누구에게든 전액 청구 가능</li>\n<li><strong>부진정연대책임</strong> — 양쪽 운전자가 각각 100% 배상 책임을 지며, 한쪽에서 전액 받을 수 있습니다.</li>\n<li><strong>과실상계 없음</strong> — 동승자 본인에게 과실이 없으므로 과실상계가 적용되지 않습니다(단, 음주운전 차에 자발적으로 탑승한 경우 등 예외 있음).</li>\n</ul>',
      },
      {
        title: '보상 청구 방법',
        content: '<p><strong style="color:#1e3a5f">가장 유리한 방법을 선택하세요.</strong></p>\n<ol>\n<li><strong>상대방 보험회사에 청구</strong> — 상대방 과실이 큰 경우 상대방 보험에서 보상받습니다.</li>\n<li><strong>탑승 차량 보험에 청구</strong> — 탑승 차량의 대인배상에서 보상받을 수 있습니다.</li>\n<li><strong>양쪽 모두에 청구</strong> — 어느 쪽이든 전액 보상 가능하므로, 처리가 빠른 쪽에 먼저 청구하고 부족분을 다른 쪽에 청구합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>동승자 보상 최적 경로, AI가 안내합니다</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '동승자 과실이 인정되는 예외',
        content: '<p><strong style="color:#1e3a5f">다음 경우에는 동승자의 과실이 일부 인정되어 보상이 감액될 수 있습니다.</strong></p>\n<ul>\n<li>음주운전인 것을 알면서 자발적으로 탑승한 경우 (10~30% 과실)</li>\n<li>운전자에게 과속·난폭운전을 부추긴 경우</li>\n<li>안전벨트를 착용하지 않은 경우 (5~10% 과실)</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 동승자의 부진정연대 청구권', summary: '대법원은 교통사고에서 양쪽 운전자 모두에게 과실이 있는 경우, 동승자는 양쪽 모두에게 전액 손해배상을 청구할 수 있다고 판시합니다. 한쪽에서 배상을 받으면 다른 쪽의 채무는 그만큼 소멸합니다.', takeaway: '비슷한 상황이라면 과실이 적은 쪽이 아니라 보상이 빠르고 확실한 쪽에 먼저 청구하세요.' }],
    faq: [
      { question: '택시를 타고 있다가 사고가 나도 동일한가요?', answer: '<p>네, 택시 승객도 동승자로서 택시 운전자와 상대방 모두에게 보상을 청구할 수 있습니다.</p>' },
      { question: '친구 차인데 보험 청구하면 친구에게 불이익이 있나요?', answer: '<p>대인배상 보험금은 보험료 할증 없이 처리되는 경우가 많습니다. 다만 사고 건수에 따라 다를 수 있으니 보험사에 확인하세요.</p>' },
      { question: '안전벨트를 안 맸으면 보상이 줄어드나요?', answer: '<p>안전벨트 미착용 시 5~10% 과실이 인정되어 보상이 감액될 수 있습니다.</p>' },
      { question: '동승자도 교통사고 합의금을 받을 수 있나요?', answer: '<p>네, 동승자도 치료비, 휴업손해, 위자료 등에 대해 합의금을 받을 수 있습니다.</p>' },
    ],
    cta: { text: '교통사고 동승자 보상 가능 금액 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '교통사고 가이드', href: '/guide/traffic-accident' }, { label: '교통사고 합의금', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' }, { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' }, { label: '보험 합의 체크리스트', href: '/guide/traffic-accident/traffic-settlement-agreement-checklist' }],
  },
];
