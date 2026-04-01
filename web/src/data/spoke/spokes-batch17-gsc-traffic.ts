import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [교통사고 후 보험사 합의 연락을 받은 피해자]의 [성급한 합의를 막아야 하는 상황]에서 [합의 전 확인 사항과 대응법]을 돕는 페이지다.
// 2. 이 페이지는 [합의서 작성 직전 단계의 교통사고 피해자]의 [합의서 내용을 검토해야 하는 상황]에서 [합의서 필수 기재 항목과 함정 조항 확인]을 돕는 페이지다.
// 3. 이 페이지는 [치료가 끝나지 않은 교통사고 피해자]의 [보험사가 합의를 종용하는 상황]에서 [합의 시기 판단과 추가 치료비 확보]를 돕는 페이지다.
// 4. 이 페이지는 [보험사 제시 합의금이 부당하게 낮은 피해자]의 [적정 합의금을 받아야 하는 상황]에서 [단계별 대응 전략]을 돕는 페이지다.

export const spokesBatch17GscTraffic: SpokePage[] = [
  {
    domain: 'traffic-accident',
    slug: 'traffic-settlement-dont-agree-immediately',
    keyword: '교통사고 합의 바로 하면 안 되는 이유',
    questionKeyword: '교통사고 보험사에서 합의 연락 왔는데 바로 해도 되나요?',
    ctaKeyword: '교통사고 합의 주의사항',
    type: '실수함정형',
    perspective: 'victim',
    meta: {
      title: '교통사고 합의 바로 하면 안 되는 5가지 이유 | 로앤가이드',
      description:
        '보험사에서 합의 연락이 왔는데 빨리 끝내고 싶은 마음, 이해합니다. 하지만 급한 합의가 수백만 원 손해로 이어질 수 있습니다. 꼭 확인할 5가지를 지금 확인하세요',
    },
    intro:
      '사고 후 일주일, 보험사 담당자에게서 전화가 옵니다. "빨리 합의하시면 편하실 거예요." 몸은 아직 아프고, 치료비 걱정에 빨리 끝내고 싶은 마음이 큽니다. 그런데 이 순간 서명하면 나중에 후유증이 발견되어도 추가 보상을 받기 어렵습니다. 합의 전에 반드시 확인해야 할 사항을 정리해보세요.',
    sections: [
      {
        title: '첫째, 치료가 끝나기 전에 합의하면 후유장해 보상을 놓칩니다',
        content:
          '<p><strong style="color:#1e3a5f">합의서에 서명하면 추가 청구가 원칙적으로 불가능합니다</strong></p>\n<p>교통사고 부상은 <strong>초기 진단과 실제 치료 기간이 다른 경우</strong>가 많습니다. 목·허리 디스크, 어깨 회전근개 파열 등은 사고 직후에는 단순 타박으로 진단되었다가 2~3개월 후 MRI에서 확인되는 경우가 흔합니다.</p>\n<p>합의서에 "향후 일체의 청구를 하지 않겠다"는 <strong>부제소 합의 조항</strong>이 포함되면, 후유증이 발견되어도 추가 보상을 받기 극히 어렵습니다. 최소 3~6개월 치료 경과를 본 후 합의를 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 초기 진단 ≠ 최종 진단 → 치료 종결 후 합의가 원칙</blockquote>',
      },
      {
        title: '둘째, 보험사 첫 제시 금액은 거의 항상 최저 기준입니다',
        content:
          '<p><strong style="color:#1e3a5f">보험사는 자체 산정 기준으로 최소 금액을 먼저 제시합니다</strong></p>\n<p>보험사 담당자가 제시하는 합의금은 <strong>회사 내부 지급 기준</strong>에 따른 것으로, 법원 판결 기준과 차이가 큽니다. 위자료, 휴업손해, 향후치료비 등이 빠져 있거나 과소 산정된 경우가 대부분입니다.</p>\n<p>실제로 보험사 첫 제시액 대비 <strong>최종 합의금이 2~5배 높아지는 사례</strong>가 적지 않습니다. "이 정도면 괜찮은 건가?" 싶을 때가 가장 위험한 순간입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 위자료 포함 여부 + 휴업손해 산정 근거 + 향후치료비 반영 여부</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 합의금, 적정한지 확인해보세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 내 사고 상황에 맞는 예상 합의금 범위를 알려드립니다 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 과실비율이 확정되지 않은 상태에서 합의하면 불리합니다',
        content:
          '<p><strong style="color:#1e3a5f">과실비율에 따라 합의금이 수백만 원 차이 납니다</strong></p>\n<p>보험사는 초기에 <strong>피해자 과실을 높게 책정</strong>하는 경향이 있습니다. 블랙박스 영상, CCTV, 사고 현장 사진 등 증거를 확보하기 전에 합의하면 부당하게 높은 과실비율을 적용받을 수 있습니다.</p>\n<p>과실비율 10%p 차이가 합의금에서 <strong>수십만~수백만 원 차이</strong>로 이어집니다. 교통사고 과실비율 인정기준표를 확인하고, 이의가 있으면 교통사고분쟁심의위원회에 심의를 요청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보 순서: 블랙박스 → CCTV 확보 요청 → 사고현장 사진 → 목격자 진술</blockquote>',
      },
      {
        title: '넷째, 합의 전 확인해야 할 3가지 서류를 반드시 챙기세요',
        content:
          '<p><strong style="color:#1e3a5f">진단서, 소견서, 치료비 영수증이 합의금 산정의 기본입니다</strong></p>\n<p>합의를 검토하기 전에 반드시 <strong>3가지 서류</strong>를 준비하세요. ①진료기록 감정서 또는 후유장해진단서, ②주치의 소견서(향후 치료계획 포함), ③치료비 전체 영수증입니다.</p>\n<p>특히 <strong>향후치료비 소견서</strong>가 중요합니다. "앞으로 6개월간 주 2회 물리치료가 필요하다"는 의사 소견이 있으면 그 비용을 합의금에 포함시킬 수 있습니다. 서류 없이 구두 합의는 절대 하지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 서류: ①후유장해진단서 ②주치의 소견서 ③치료비 영수증 전부</blockquote>',
      },
      {
        title: '다섯째, 합의를 서두르게 만드는 보험사 멘트에 속지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">"지금 안 하시면 나중에 더 불리해요"는 대표적인 압박 멘트입니다</strong></p>\n<p>보험사 담당자가 자주 쓰는 말이 있습니다. "기한이 지나면 합의금이 줄어듭니다", "소송하면 시간만 오래 걸립니다", "다른 분들은 이 금액에 다 합의하셨어요." 이런 말에 흔들리지 마세요.</p>\n<p>교통사고 손해배상청구권의 소멸시효는 <strong>사고일로부터 3년</strong>(민법 제766조)입니다. 충분한 시간이 있으니, 치료가 끝난 후 정확한 손해액을 산정하고 합의해도 늦지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기억하세요: 손해배상 청구 시효 3년 → 서두를 이유 없음</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">합의 전, 내 상황부터 정리하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 합의 전 확인사항을 빠르게 정리해드립니다 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '보험사 합의 후 추가 청구가 제한된 사례',
        summary:
          '대법원 2024다272941 사건(2025.01.09 선고)에서 법원은 보험계약 체결 시 고지의무 위반 사실과 보험사고 발생 사이의 인과관계에 대해 엄격한 증명 기준을 적용하며, 보험자의 면책 주장에 대해서도 구체적 사정을 종합 판단해야 한다고 판시했습니다.',
        takeaway:
          '합의 과정에서 보험사가 제시하는 조건을 그대로 수용하면 나중에 불리해질 수 있습니다. 합의서 서명 전 전문가 검토를 받고, 특히 부제소 합의 조항의 범위를 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '보험사에서 합의 기한이 있다고 하는데 정말인가요?',
        answer:
          '법적으로 정해진 합의 기한은 없습니다. 손해배상청구권의 소멸시효는 사고일로부터 3년이므로 서두를 필요가 없습니다. 보험사가 말하는 기한은 내부 처리 기준일 뿐입니다.',
      },
      {
        question: '합의 후에 후유증이 발견되면 어떻게 하나요?',
        answer:
          '합의서에 부제소 합의 조항이 포함되어 있으면 추가 청구가 매우 어렵습니다. 다만 합의 당시 예상할 수 없었던 후유장해가 발생한 경우, 판례상 추가 청구가 인정된 사례도 있으므로 전문가 상담을 받아보세요.',
      },
      {
        question: '보험사 합의 제안을 거절하면 불이익이 있나요?',
        answer:
          '합의를 거절해도 법적 불이익은 전혀 없습니다. 합의가 성립하지 않으면 교통사고분쟁심의위원회 심의, 손해사정사 선임, 민사소송 등 다른 방법으로 적정 보상을 받을 수 있습니다.',
      },
      {
        question: '보험사 담당자가 계속 전화하는데 어떻게 대응하나요?',
        answer:
          '"치료가 종결된 후 합의를 검토하겠습니다"라고 명확히 전달하세요. 문자나 이메일로 같은 내용을 보내두면 기록이 남아 나중에 도움이 됩니다. 과도한 연락은 불법은 아니지만, 부당하다고 느끼면 금융감독원에 민원을 넣을 수 있습니다.',
      },
      {
        question: '합의 전에 변호사를 꼭 만나야 하나요?',
        answer:
          '치료비가 100만 원 이하인 경비한 사고라면 직접 합의해도 무방합니다. 하지만 입원 치료를 받았거나, 후유장해가 예상되거나, 합의금이 500만 원 이상이라면 전문가 상담을 먼저 받는 것이 유리합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의금 계산 방법', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '교통사고 합의 절차 총정리', href: '/guide/traffic-accident/accident-settlement-process' },
      { label: '교통사고 합의 시 흔한 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 과실비율 다툼 대응법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 후유증 치료비 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
    ],
  },
  {
    domain: 'traffic-accident',
    slug: 'traffic-settlement-agreement-checklist',
    keyword: '교통사고 합의서 작성 전 확인 항목',
    questionKeyword: '교통사고 합의서 쓸 때 뭘 확인해야 하나요?',
    ctaKeyword: '교통사고 합의서 체크리스트',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '교통사고 합의서 작성 전 확인할 7가지 항목 | 로앤가이드',
      description:
        '합의서에 서명하려는데 이대로 써도 되는지 불안하시죠. 놓치면 수백만 원 손해 보는 합의서 필수 기재 항목과 함정 조항 7가지를 지금 확인하세요',
    },
    intro:
      '보험사에서 보내온 합의서, 숫자와 법률 용어로 가득합니다. "여기 서명만 하시면 됩니다"라는 말에 그냥 사인하려는 순간, 잠깐 멈추세요. 합의서 한 줄이 향후 수백만 원의 추가 보상 가능성을 막을 수 있습니다. 서명 전 반드시 확인해야 할 항목을 정리해보세요.',
    sections: [
      {
        title: '첫째, 합의금 항목이 세부적으로 나뉘어 있는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">치료비, 위자료, 휴업손해, 향후치료비가 각각 구분되어야 합니다</strong></p>\n<p>합의서에 "합의금 총 000만 원"이라고만 적혀 있다면 위험합니다. <strong>항목별 산정 근거</strong>가 없으면 어떤 손해가 빠졌는지 확인할 수 없고, 나중에 이의를 제기하기도 어렵습니다.</p>\n<p>반드시 ①기지급 치료비, ②위자료, ③휴업손해(일실수입), ④향후치료비, ⑤교통비·간병비 등 <strong>항목별 금액</strong>이 기재되어 있는지 확인하세요. 항목이 빠져 있으면 보험사에 세부 내역서를 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 항목: 치료비 + 위자료 + 휴업손해 + 향후치료비 + 교통비·간병비</blockquote>',
      },
      {
        title: '둘째, 부제소 합의 조항의 범위를 꼼꼼히 읽으세요',
        content:
          '<p><strong style="color:#1e3a5f">"향후 일체의 민·형사상 청구를 하지 않는다"는 조항이 가장 위험합니다</strong></p>\n<p>대부분의 합의서에는 <strong>부제소 합의 조항</strong>이 포함됩니다. 이 조항은 합의 후 추가 청구를 차단하는 역할을 합니다. 특히 "일체의"라는 표현이 들어가면 후유장해, 추가 수술비까지 모두 포기하게 됩니다.</p>\n<p>대안으로 <strong>"현재까지 발생한 손해에 대해서만 합의한다"</strong>는 문구로 수정을 요청하세요. 또는 "합의 당시 예상하지 못한 후유장해가 발생할 경우 추가 협의한다"는 단서를 넣으면 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">위험 문구: "향후 일체" → 안전 문구: "현재까지 발생한 손해에 한하여"</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 합의서, 함정 조항이 있는지 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 합의서 핵심 체크포인트를 정리해드립니다 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 과실비율과 적용 기준이 합의서에 명시되어 있는지 보세요',
        content:
          '<p><strong style="color:#1e3a5f">과실비율이 명시되지 않으면 나중에 다툴 근거가 사라집니다</strong></p>\n<p>합의서에 <strong>"피해자 과실 20% 적용"</strong> 등 과실비율이 명확히 기재되어 있어야 합니다. 과실비율 없이 총액만 적혀 있으면, 보험사가 내부적으로 높은 과실비율을 적용했을 가능성이 있습니다.</p>\n<p>과실비율에 이의가 있다면 합의서 서명 전에 <strong>교통사고분쟁심의위원회</strong>에 심의를 요청하세요. 심의 결과는 법적 구속력은 없지만, 합의 협상에서 강력한 근거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 과실비율 명시 여부 → 이의 시 분쟁심의위원회 심의 요청</blockquote>',
      },
      {
        title: '넷째, 후유장해 등급 판정이 완료되었는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">후유장해 등급에 따라 합의금이 수천만 원 차이 납니다</strong></p>\n<p>치료가 끝나도 남은 장해가 있다면 <strong>후유장해 등급 판정</strong>을 받아야 합니다. 자동차보험 후유장해 등급은 1급~14급까지 있으며, 등급에 따라 위자료와 일실수입이 크게 달라집니다.</p>\n<p>보험사가 등급 판정 없이 합의를 진행하려 한다면, <strong>반드시 등급 판정을 먼저 받으세요</strong>. 자동차손해배상 보장법 시행령 별표에 따라 등급별 보험금 한도가 정해져 있으므로, 등급 없이 합의하면 큰 손해를 볼 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 치료 종결 → 후유장해 진단 → 등급 판정 → 그 후 합의</blockquote>',
      },
      {
        title: '다섯째, 합의서 사본을 반드시 본인이 보관하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의서 원본 또는 사본이 없으면 분쟁 시 불리합니다</strong></p>\n<p>합의서에 서명한 후 반드시 <strong>사본 1부를 본인이 보관</strong>하세요. 간혹 보험사가 합의서를 가져가고 사본을 주지 않는 경우가 있는데, 이는 나중에 분쟁이 생겼을 때 큰 불이익이 됩니다.</p>\n<p>합의서 서명 전에 <strong>휴대폰으로 전체 내용을 촬영</strong>해두는 것도 좋습니다. 합의 과정에서 보험사 담당자와 나눈 통화 내용이 중요한 경우도 있으므로, 주요 통화는 녹음(사전 고지 후)하거나 문자로 확인을 남기세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보관 체크: 합의서 사본 + 합의 과정 통화 기록 + 세부 내역서</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">합의서 서명 전, 빠진 항목이 없는지 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 내 상황에 맞는 합의서 체크리스트를 만들어드립니다 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '교통사고 피해자 사망 시 책임보험금 산정 기준을 명확히 한 사례',
        summary:
          '대법원 2024다238217 사건(2025.03.13 선고)에서 법원은 교통사고로 부상한 피해자가 치료 중 사망한 경우, 자동차손해배상 보장법 시행령 제3조 제2항 제1호에 따라 사망과 부상의 한도금액 합산액 범위에서 손해액을 산정해야 하며, 하한액도 보장되어야 한다고 판시했습니다.',
        takeaway:
          '합의서 작성 시 보험금 산정 기준이 법령에 맞게 적용되었는지 확인하세요. 특히 자동차손해배상 보장법 시행령의 한도금액 기준을 알아두면 보험사의 부당한 산정을 걸러낼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '보험사가 보내온 합의서를 수정 요청할 수 있나요?',
        answer:
          '네, 가능합니다. 합의서는 양측이 합의하는 문서이므로 내용 수정을 요청할 권리가 있습니다. 특히 부제소 합의 조항, 과실비율, 향후치료비 항목은 수정을 적극적으로 요청하세요.',
      },
      {
        question: '합의서에 서명했는데 취소할 수 있나요?',
        answer:
          '합의서 서명 후 취소는 원칙적으로 어렵습니다. 다만 착오에 의한 의사표시(민법 제109조)나 사기·강박에 의한 의사표시(민법 제110조)에 해당하면 취소가 가능할 수 있습니다. 서명 전 신중하게 검토하는 것이 최선입니다.',
      },
      {
        question: '합의서에 공증을 받아야 하나요?',
        answer:
          '법적으로 공증이 필수는 아닙니다. 하지만 합의금이 큰 경우 공증을 받아두면 보험사가 합의금 지급을 지연할 때 별도 소송 없이 바로 강제집행이 가능합니다.',
      },
      {
        question: '합의서와 면책증서의 차이가 뭔가요?',
        answer:
          '합의서는 양측이 합의 내용을 정리한 문서이고, 면책증서는 가해자(보험사)의 책임을 면제하는 문서입니다. 면책증서에 서명하면 향후 추가 청구가 완전히 차단되므로, 면책증서인지 합의서인지 반드시 구분하세요.',
      },
      {
        question: '합의금 입금까지 보통 얼마나 걸리나요?',
        answer:
          '합의서 서명 후 통상 7~14일 이내에 입금됩니다. 자동차손해배상 보장법상 보험사는 보험금 청구를 받은 날로부터 30일 이내에 지급해야 하며, 지연 시 지연이자를 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 바로 하면 안 되는 이유', href: '/guide/traffic-accident/traffic-settlement-dont-agree-immediately' },
      { label: '교통사고 합의금 계산 방법', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '소송 vs 합의 비교', href: '/guide/traffic-accident/settlement-vs-lawsuit-comparison' },
      { label: '교통사고 합의 절차 총정리', href: '/guide/traffic-accident/accident-settlement-process' },
      { label: '교통사고 후유증 치료비 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
    ],
  },
  {
    domain: 'traffic-accident',
    slug: 'traffic-delay-settlement-additional-treatment',
    keyword: '교통사고 추가 치료 합의 미루기',
    questionKeyword: '치료가 안 끝났는데 보험사가 합의하자고 합니다. 미뤄도 되나요?',
    ctaKeyword: '교통사고 합의 시기',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '치료 중 교통사고 합의 미루는 3가지 정당한 방법 | 로앤가이드',
      description:
        '아직 치료가 끝나지 않았는데 보험사가 합의를 종용하고 있다면, 합의를 미뤄야 하는 상황과 추가 치료비를 확보하는 3가지 방법을 지금 확인하세요',
    },
    intro:
      '사고 후 두 달, 아직 허리가 아파서 물리치료를 받고 있습니다. 그런데 보험사에서 "이제 치료가 충분하니 합의하시죠"라는 연락이 옵니다. 의사는 추가 치료가 필요하다고 하는데, 보험사 말을 따라야 할지 고민입니다. 치료가 끝나지 않았다면 합의를 미루는 것이 맞습니다.',
    sections: [
      {
        title: '첫째, 의사가 치료 종결을 선언하기 전까지는 합의하지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">합의 시기를 결정하는 것은 보험사가 아니라 주치의입니다</strong></p>\n<p>보험사 담당자가 "치료가 충분하다"고 말해도, 이는 <strong>의학적 판단이 아닌 비용 절감 목적</strong>의 행정적 의견입니다. 합의 시기는 주치의가 "더 이상 호전이 기대되지 않는다"고 판단하는 <strong>증상 고정(symptom fixation)</strong> 시점 이후가 적절합니다.</p>\n<p>주치의에게 <strong>"현재 치료가 계속 필요한지, 향후 치료 계획은 어떤지"</strong>를 소견서로 받아두세요. 이 소견서가 합의를 미루는 가장 강력한 근거입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 보험사 의견 ≠ 의학적 판단 → 주치의 소견서가 기준</blockquote>',
      },
      {
        title: '둘째, 보험사의 치료비 지급 중단 통보에 이렇게 대응하세요',
        content:
          '<p><strong style="color:#1e3a5f">치료비 지급 중단 = 합의 종용의 신호입니다</strong></p>\n<p>보험사가 "치료비 지급을 중단하겠다"고 통보하는 경우가 있습니다. 이때 당황해서 합의하면 안 됩니다. 치료비 지급 중단은 보험사의 <strong>일방적 결정</strong>이지, 피해자의 치료 권리가 사라지는 것이 아닙니다.</p>\n<p>대응 방법은 3단계입니다. ①주치의 소견서를 보험사에 제출하고 치료비 계속 지급을 요청, ②거절 시 <strong>금융감독원 분쟁조정</strong> 신청, ③그래도 해결이 안 되면 본인이 치료비를 먼저 내고 나중에 합의금에 포함시키거나 소송으로 청구.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응 순서: 소견서 제출 → 금감원 분쟁조정 → 자비 치료 후 청구</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">치료비 중단 통보, 어떻게 대응할지 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 내 상황에 맞는 대응 방법을 정리해드립니다 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 추가 치료가 필요한 증거를 이렇게 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">MRI, 근전도 검사 등 객관적 검사 결과가 가장 강력한 증거입니다</strong></p>\n<p>보험사에 추가 치료의 필요성을 입증하려면 <strong>객관적 검사 결과</strong>가 있어야 합니다. X-ray만으로는 부족한 경우가 많으므로, 디스크 관련 증상이 있다면 MRI, 신경 손상이 의심되면 근전도(EMG) 검사를 받으세요.</p>\n<p>진료기록에 <strong>"치료 전후 통증 변화", "일상생활 제한 정도"</strong>가 구체적으로 기재되어 있으면 더욱 유리합니다. 진료 시 의사에게 현재 증상을 구체적으로 말하고, 기록에 남기도록 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보: MRI/근전도 검사 + 진료기록 구체화 + 주치의 소견서</blockquote>',
      },
      {
        title: '넷째, 향후치료비를 합의금에 반드시 포함시키세요',
        content:
          '<p><strong style="color:#1e3a5f">합의 시점 이후에 필요한 치료비도 합의금에 포함할 수 있습니다</strong></p>\n<p>합의 시점에 치료가 완전히 종료되지 않았다면, <strong>향후치료비</strong>를 합의금에 포함시켜야 합니다. 주치의에게 "앞으로 필요한 치료 내용과 예상 비용"을 소견서로 받으세요.</p>\n<p>향후치료비 산정 시 <strong>치료 횟수 × 1회 치료비 × 치료 기간</strong>으로 계산합니다. 예를 들어 주 2회 물리치료(1회 1만 5천 원) × 6개월이면 약 72만 원입니다. 이 금액이 합의서에 명시되어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">향후치료비 공식: 치료 횟수 × 1회 비용 × 기간 → 소견서에 명시</blockquote>',
      },
      {
        title: '다섯째, 합의를 미루는 동안 이것만은 꼭 지키세요',
        content:
          '<p><strong style="color:#1e3a5f">꾸준한 치료 기록이 합의금을 높이는 핵심 증거입니다</strong></p>\n<p>합의를 미루는 기간 동안 <strong>치료를 중단하면 안 됩니다</strong>. 치료 공백이 생기면 보험사가 "이미 치료가 끝난 것 아니냐"고 주장할 근거를 줍니다. 통증이 있다면 최소 주 1~2회는 꾸준히 치료를 받으세요.</p>\n<p>또한 <strong>일상생활 불편 사항을 메모</strong>해두세요. "계단 오르기 어려움", "30분 이상 앉아 있기 힘듦" 등 구체적인 내용이 향후 위자료 산정에 도움이 됩니다. 치료비 영수증도 빠짐없이 보관하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지킬 것: ①치료 꾸준히 ②증상 메모 ③영수증 보관 ④시효 관리(3년)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">합의 시기, 지금이 맞는지 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 치료 상황에 따른 최적 합의 시기를 알려드립니다 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '교통사고 피해자의 손해배상액에서 보험급여 공제 순서를 판시한 사례',
        summary:
          '대법원 2023다297141 사건(2025.06.26 선고)에서 법원은 산업재해를 당한 근로자의 손해배상청구액을 산정할 때, 보험급여와 같은 성질의 손해액에서 먼저 보험급여를 공제한 다음 과실상계를 하는 "공제 후 과실상계" 방식으로 산정해야 한다고 판시했습니다.',
        takeaway:
          '교통사고 보상금 산정에서도 공제 순서에 따라 최종 수령액이 달라집니다. 보험사가 제시하는 계산 방식이 법원 기준과 맞는지 확인하고, 불리한 공제가 적용되고 있지 않은지 꼭 검토하세요.',
      },
    ],
    faq: [
      {
        question: '보험사가 치료비 지급을 중단하면 어디에 신고하나요?',
        answer:
          '금융감독원(1332)에 분쟁조정을 신청할 수 있습니다. 주치의 소견서와 치료 경과 기록을 함께 제출하면 됩니다. 분쟁조정 결과에 보험사가 수락하면 즉시 효력이 발생합니다.',
      },
      {
        question: '합의를 너무 오래 미루면 불이익이 있나요?',
        answer:
          '손해배상청구권 소멸시효 3년(민법 제766조) 이내라면 불이익은 없습니다. 다만 시간이 지나면 증거 확보가 어려워질 수 있으므로, 치료 종결 후 가능한 빨리 합의를 진행하는 것이 유리합니다.',
      },
      {
        question: '보험사에서 자체 의료 자문 결과를 들이밀면 어떻게 하나요?',
        answer:
          '보험사 자체 자문의는 보험사 편에서 의견을 내는 경우가 많습니다. 주치의 소견과 다르다면, 주치의 소견서를 근거로 반박하고 필요시 제3의 의료기관에서 추가 소견을 받으세요.',
      },
      {
        question: '치료비를 본인이 먼저 내면 나중에 돌려받을 수 있나요?',
        answer:
          '네, 가능합니다. 본인이 지급한 치료비 영수증을 모두 보관해두면 합의 시 포함시키거나, 합의가 안 될 경우 소송으로 청구할 수 있습니다. 건강보험으로 진료받은 경우에도 본인부담금은 청구 가능합니다.',
      },
      {
        question: '한의원 치료비도 보험사에 청구할 수 있나요?',
        answer:
          '교통사고와 인과관계가 인정되는 한방 치료는 청구 가능합니다. 다만 보험사가 한방 치료의 필요성을 다투는 경우가 있으므로, 양방 주치의가 한방 치료를 권유했다는 소견이 있으면 유리합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 바로 하면 안 되는 이유', href: '/guide/traffic-accident/traffic-settlement-dont-agree-immediately' },
      { label: '교통사고 후유증 치료비 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
      { label: '교통사고 합의금 계산 방법', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '보험사 합의금 낮을 때 대응법', href: '/guide/traffic-accident/insurance-lowball-settlement-response' },
      { label: '교통사고 합의 절차 총정리', href: '/guide/traffic-accident/accident-settlement-process' },
    ],
  },
  {
    domain: 'traffic-accident',
    slug: 'insurance-lowball-settlement-response',
    keyword: '보험사 합의금 낮을 때 대응 방법',
    questionKeyword: '보험사가 합의금을 너무 낮게 제시하는데 어떻게 해야 하나요?',
    ctaKeyword: '보험사 합의금 이의제기',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '보험사 교통사고 합의금 낮을 때 4단계 대응 전략 | 로앤가이드',
      description:
        '보험사가 제시한 합의금이 너무 적어서 억울하시죠. 적정 금액을 받기 위한 이의제기, 손해사정사 선임부터 소송까지 4단계 대응 순서를 지금 확인하세요',
    },
    intro:
      '보험사에서 합의금을 제시받았는데, 예상보다 훨씬 적습니다. "이게 적정 금액인지, 더 받을 수 있는 건 아닌지" 답답한 마음이 듭니다. 보험사 첫 제시 금액에 그대로 합의하면 큰 손해를 볼 수 있습니다. 단계별 대응 방법을 정리해보세요.',
    timelineSteps: [
      '1단계: 합의금 산정 내역서 요청 (즉시)',
      '2단계: 손해사정사 선임 또는 자체 산정 (1~2주)',
      '3단계: 금융감독원 분쟁조정 신청 (조정 기간 60일)',
      '4단계: 민사소송 제기 (6개월~1년)',
    ],
    sections: [
      {
        title: '첫째, 보험사에 합의금 산정 내역서를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의금이 어떻게 계산되었는지 근거를 확인하는 것이 첫 단계입니다</strong></p>\n<p>보험사가 합의금을 제시할 때 <strong>"총 000만 원"</strong>이라는 숫자만 알려주는 경우가 많습니다. 반드시 <strong>산정 내역서</strong>를 요청하세요. 치료비, 위자료, 휴업손해, 향후치료비 등 항목별 금액과 산정 근거가 기재되어야 합니다.</p>\n<p>내역서를 받으면 빠진 항목이 없는지, 과실비율이 정확한지, 위자료가 법원 기준에 맞는지 하나씩 대조하세요. <strong>항목별로 이의가 있는 부분</strong>을 정리해두면 다음 단계 협상에서 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요청할 것: 항목별 산정 내역서 + 과실비율 적용 근거 + 위자료 산정 기준</blockquote>',
      },
      {
        title: '둘째, 손해사정사를 선임하거나 직접 적정 합의금을 산정하세요',
        content:
          '<p><strong style="color:#1e3a5f">피해자도 독립적인 손해사정을 받을 권리가 있습니다</strong></p>\n<p>보험업법 제185조에 따라 피해자는 <strong>보험사 소속이 아닌 독립 손해사정사</strong>를 선임할 수 있습니다. 손해사정사 비용은 통상 합의금의 5~10% 수준이며, 합의금 증액분으로 충분히 상쇄됩니다.</p>\n<p>손해사정사 선임이 부담되면 <strong>직접 산정</strong>도 가능합니다. 자동차손해배상 보장법 시행령 별표의 보험금 한도, 대한변호사협회 발간 교통사고손해배상 산정 기준표를 참고하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">선택지: ①독립 손해사정사 선임(비용 5~10%) ②직접 산정(법률 기준표 참고)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 합의금이 적정한지 바로 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 내 사고 상황에 맞는 예상 합의금 범위를 알려드립니다 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 보험사와 합의가 안 되면 금융감독원 분쟁조정을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원 분쟁조정은 무료이며, 보험사에 실질적 압박이 됩니다</strong></p>\n<p>보험사와 직접 협상이 결렬되면 <strong>금융감독원(1332)</strong>에 분쟁조정을 신청할 수 있습니다. 신청 비용은 무료이며, 접수 후 약 60일 이내에 조정 결과가 나옵니다.</p>\n<p>분쟁조정 결과에 양측이 수락하면 <strong>재판상 화해와 같은 효력</strong>이 발생합니다. 보험사 입장에서는 금감원 조정이 걸리면 내부적으로 부담이 되기 때문에, 조정 신청만으로도 합의금이 올라가는 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">금감원 분쟁조정: 무료 + 60일 소요 + 수락 시 재판상 화해 효력</blockquote>',
      },
      {
        title: '넷째, 최종 수단으로 민사소송을 고려하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송은 시간이 걸리지만, 법원 기준으로 정확한 보상을 받을 수 있습니다</strong></p>\n<p>금감원 조정으로도 해결이 안 되거나, 합의금 차이가 크다면 <strong>민사소송</strong>을 제기할 수 있습니다. 소송 기간은 통상 6개월~1년 정도이며, 법원이 정한 기준에 따라 손해액이 산정됩니다.</p>\n<p>소송의 장점은 <strong>지연손해금</strong>입니다. 사고일 또는 소장 송달일부터 연 5%(상법은 연 6%)의 지연이자가 붙으므로, 보험사가 부당하게 합의를 지연한 기간만큼 추가 보상을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소송 장점: 법원 기준 산정 + 지연손해금(연 5~6%) + 강제집행 가능</blockquote>',
      },
      {
        title: '다섯째, 각 단계별 예상 소요 시간과 비용을 비교하세요',
        content:
          '<p><strong style="color:#1e3a5f">시간·비용 대비 효과를 따져 최적의 방법을 선택하세요</strong></p>\n<p>각 방법의 특징을 비교하면: <strong>직접 협상</strong>은 비용 0원, 기간 1~4주. <strong>손해사정사 선임</strong>은 비용 합의금의 5~10%, 기간 2~4주. <strong>금감원 조정</strong>은 비용 0원, 기간 약 60일. <strong>민사소송</strong>은 변호사 비용 + 인지대, 기간 6개월~1년.</p>\n<p>합의금 차이가 <strong>200만 원 이하</strong>이면 금감원 조정까지, <strong>500만 원 이상</strong>이면 소송을 적극 고려하세요. 소액사건(3,000만 원 이하)은 소송 절차가 간소화되어 직접 진행도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 차이 200만 원 이하 → 금감원 조정 / 500만 원 이상 → 소송 고려</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">어떤 방법이 내 상황에 맞는지 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">AI가 최적의 대응 방법을 추천해드립니다 &rarr;</a>\n</div>',
      },
    ],
    comparison: {
      title: '대응 방법별 비교',
      headers: ['직접 협상', '손해사정사', '금감원 조정', '민사소송'],
      rows: [
        { label: '비용', values: ['0원', '합의금 5~10%', '0원', '변호사비+인지대'] },
        { label: '소요 기간', values: ['1~4주', '2~4주', '약 60일', '6개월~1년'] },
        { label: '합의금 증액 기대', values: ['10~30%', '30~80%', '20~50%', '50~200%'] },
        { label: '강제력', values: ['없음', '없음', '수락 시 화해 효력', '판결 효력'] },
      ],
    },
    cases: [
      {
        title: '국민건강보험공단의 교통사고 책임보험금 대위 범위를 판시한 사례',
        summary:
          '대법원 2022다235009 사건(2025.05.15 선고)에서 법원은 국민건강보험공단이 교통사고 피해자에게 보험급여를 한 후 책임보험금 청구권을 대위하는 경우, 대위 범위는 공단부담금 한도 내에서 가해자의 책임비율에 해당하는 금액으로 제한된다고 판시했습니다.',
        takeaway:
          '보험사가 합의금을 산정할 때 건강보험 공단부담금 공제 등을 이유로 금액을 낮추는 경우가 있습니다. 공제 항목과 방식이 법원 기준에 맞는지 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '보험사 합의금이 적정한지 어떻게 알 수 있나요?',
        answer:
          '대한변호사협회 교통사고손해배상 산정 기준표나 한국자동차보험 표준약관의 보험금 한도를 참고하세요. 또는 독립 손해사정사에게 적정 합의금 감정을 의뢰하면 객관적인 금액을 알 수 있습니다.',
      },
      {
        question: '손해사정사 비용은 누가 부담하나요?',
        answer:
          '원칙적으로 피해자가 부담하며, 통상 합의금의 5~10% 수준입니다. 다만 소송에서 승소하면 손해사정 비용을 상대방에게 청구할 수 있는 경우도 있습니다.',
      },
      {
        question: '금감원 분쟁조정 결과에 불복하면 어떻게 하나요?',
        answer:
          '조정 결과에 어느 한쪽이라도 수락하지 않으면 효력이 없습니다. 이 경우 민사소송을 제기하여 법원의 판단을 받을 수 있습니다. 조정 과정에서 제출한 자료는 소송에서도 활용할 수 있습니다.',
      },
      {
        question: '소송하면 보험사가 합의금을 올려주나요?',
        answer:
          '소송 제기 후 보험사가 합의 제안을 높이는 경우가 많습니다. 특히 1심 판결 전 조정기일에서 법원이 제시하는 조정안은 보험사 첫 제시액보다 상당히 높은 경우가 대부분입니다.',
      },
      {
        question: '합의금 협상을 변호사에게 맡기면 비용 대비 효과가 있나요?',
        answer:
          '합의금이 500만 원 이상이고 보험사 제시액과 적정 금액의 차이가 크다면 변호사 선임이 효과적입니다. 변호사 착수금(보통 100~300만 원)과 성공보수(증액분의 10~20%)를 감안해도 순수익이 높아지는 경우가 많습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의금 계산 방법', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '소송 vs 합의 비교', href: '/guide/traffic-accident/settlement-vs-lawsuit-comparison' },
      { label: '교통사고 합의서 체크리스트', href: '/guide/traffic-accident/traffic-settlement-agreement-checklist' },
      { label: '교통사고 합의 바로 하면 안 되는 이유', href: '/guide/traffic-accident/traffic-settlement-dont-agree-immediately' },
      { label: '교통사고 과실비율 다툼 대응법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
    ],
  },
];
