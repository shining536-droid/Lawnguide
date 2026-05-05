import { SpokePage } from '../spoke-pages';

// batch56 assault 3 + child-support 2 + dui 1 = 6개
//
// 고유 존재 이유:
// 1. 이 페이지는 술집에서 시비로 쌍방 폭행이 된 후 양측 모두 입건된 사람이 합의 + 양형 다툼 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 노인·장애인·노약자 등 보호 대상자에게 폭행을 한 가해자가 가중 처벌 + 합의 + 양형 4단계 방어를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 동거 중인 배우자·연인을 폭행해 가정폭력특례법으로 입건된 가해자가 보호처분 + 형사 합의 + 잠정조치 4단계 방어를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 양육비 직접지급명령을 받았는데 비양육 부모의 사용자가 협조를 거부하는 양육친이 직접지급명령 강제이행 + 노동청 + 민사 4단계 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 비양육 부모가 재혼·출산했다는 이유로 양육비 감액을 청구한 사안에서 양육친이 \'자녀의 복리\' 기준 + 감액 부정 4단계 방어를 정리하도록 돕는 페이지다.
// 6. 이 페이지는 음주측정을 거부해 영장이 청구된 운전자가 측정거부 성립 요건 + 보호조치 위반 4단계 방어를 정리하도록 돕는 페이지다.

export const spokesBatch56AssaultCsDui: SpokePage[] = [
  // ─── 1. assault / assault-pub-mutual-altercation-settlement-tier ───
  {
    domain: 'assault',
    slug: 'assault-pub-mutual-altercation-settlement-tier',
    keyword: '술집 시비 쌍방폭행 합의 양형',
    questionKeyword: '술집에서 시비로 쌍방폭행이 됐어요. 합의금이랑 양형은 어떻게 되나요?',
    ctaKeyword: '쌍방폭행 합의 양형 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '술집 쌍방폭행 — 4단계 합의·양형 방어 | 로앤가이드',
      description:
        '술집에서 시비로 쌍방폭행이 된 후 입건됐다면 합의금 협의 + 처벌불원서 + 양형 4단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술집에서 술 마시다가 옆 테이블 손님과 시비가 붙어서 서로 폭행이 됐어요. 본인도 가해자, 상대방도 가해자가 됐는데 합의금이랑 양형은 어떻게 되나요?" 술집 쌍방폭행은 ① 형법 제260조 폭행죄 또는 제257조 상해죄 ② 양측 합의 + 처벌불원서 ③ 양형 다툼 ④ 민사 손해배상 4단계로 대응 가능한 영역입니다. 폭행죄는 반의사불벌이라 합의 + 처벌불원서 시 \'공소권 없음\'으로 종결 가능. 상해는 비반의사불벌이지만 합의 시 양형 감경 영역. 양측이 모두 가해자라 \'쌍방 합의\'가 가장 빠른 종결 트랙이고, 합의 결렬 시 양측 다 처벌 영역으로 갈리는 사례가 많은 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 쌍방폭행 4가지 합의·양형 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭행 vs 상해·합의·처벌불원서·양형 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭행 vs 상해 구분</strong> — 폭행죄(제260조)는 반의사불벌이라 처벌불원서로 종결 가능. 상해죄(제257조)는 비반의사불벌이지만 합의 시 감경.</li>\n<li><strong>② 양측 합의 협의</strong> — 쌍방 가해자라 합의 협의 가능 영역. 통상 양측 처벌불원서 교환 + 합의금 정산.</li>\n<li><strong>③ 처벌불원서 교환</strong> — 폭행은 처벌불원서로 \'공소권 없음\'. 양측 모두 처벌불원서 교환이 가장 빠른 종결.</li>\n<li><strong>④ 양형 (불합의 시)</strong> — 폭행 50~300만원 벌금, 상해 100~500만원 벌금 또는 징역. 합의·반성·초범·전과 종합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 쌍방폭행은 양측 모두 처벌불원서가 가장 빠른 종결. 합의금은 부상 정도·치료비 기준. 변호사·법률구조공단 132 자문으로 합의 협의.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 합의 협의 → 변호인 선임 → 조사 → 합의·송치 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 술집 CCTV·블랙박스·진단서·상대방 부상 정황·목격자 진술.</li>\n<li><strong>2단계 — 합의 협의 (1~2주)</strong> — 양측 변호사·법률구조공단 132 자문 + 합의금 협의. 처벌불원서 교환.</li>\n<li><strong>3단계 — 변호인 선임 + 경찰 조사</strong> — 합의 안 되면 변호인 동석 조사. 진술 정리·정당방위 검토.</li>\n<li><strong>4단계 — 검찰 송치 + 합의 (조사 후 1~2개월)</strong> — 경찰 조사 후 검사 송치. 검찰 단계에서 합의 시 \'공소권 없음\' 가능.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 형사재판. 합의·반성 자료 + 양형 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">쌍방폭행 4단계 합의·양형을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사건 자료 + 합의 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>술집 CCTV 보존 요청</strong> — 사건 직후 즉시.</li>\n<li><strong>본인·상대 진단서</strong> — 부상 정도.</li>\n<li><strong>목격자 진술</strong> — 시비 발단·정당방위 정황.</li>\n<li><strong>합의서·처벌불원서</strong> — 양측 교환 자료.</li>\n<li><strong>치료비 영수증</strong> — 합의금 산정.</li>\n<li><strong>본인 반성문</strong> — 양형 자료.</li>\n<li><strong>전과·초범 자료</strong> — 양형 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 술집 CCTV는 보존기간 짧음(7~14일). 사건 직후 사장에게 보존 요청 + 경찰 통한 보존명령. 시비 발단이 본인이 아닌 정황이 정당방위 다툼의 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·양형 포인트와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 먼저 시비 걸었다" 주장 반박</strong> — CCTV·목격자 진술로 발단 정황 입증. 본인이 발단이 아니라면 정당방위 결합 다툼.</li>\n<li><strong>합의금 협의 영역</strong> — 부상 경미하면 50~200만원 영역. 진단서·치료비·위자료 종합.</li>\n<li><strong>처벌불원서 교환 권장</strong> — 양측 모두 처벌불원서가 \'공소권 없음\' 가장 빠른 종결.</li>\n<li><strong>정당방위 검토</strong> — 본인이 방어적 폭행이었다면 정당방위 또는 위법성 조각 다툼 가능. 변호사 자문.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방 폭행과 합의의 효력',
        summary:
          '대법원 2017도17643 사건 등 다수 판례에서 폭행죄는 반의사불벌이라 처벌불원서 제출 시 \'공소권 없음\'으로 종결되며, 상해죄는 비반의사불벌이지만 합의가 양형의 중요한 감경 사유로 작용한다는 일관된 법리가 적용됩니다. 쌍방폭행 사안에서는 양측이 처벌불원서를 교환하면 양측 모두 \'공소권 없음\'으로 종결 가능한 영역이라, 합의 협의가 가장 빠른 종결 트랙으로 평가됩니다.',
        takeaway: '쌍방폭행은 양측 처벌불원서 교환 + 합의금 협의가 핵심 트랙이라, CCTV·진단서·목격자 진술을 정리하면 합의 + 양형 다툼 트랙이 모두 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '본인이 더 다쳤는데도 가해자로 입건됐어요',
        answer:
          '<strong>쌍방폭행은 양측 모두 가해자 + 피해자 영역입니다.</strong> 본인 부상이 크면 합의금 협의 시 우위. 정당방위 정황도 변호사 자문 검토.',
      },
      {
        question: '합의금이 너무 많이 요구돼요',
        answer:
          '<strong>진단서·치료비·위자료 기준 합리적 합의금 협의 가능합니다.</strong> 변호사·법률구조공단 132 자문. 무리한 요구 시 공탁 트랙으로 \'성의있는 노력\' 입증 가능.',
      },
      {
        question: '술 취해서 기억이 안 나요',
        answer:
          '<strong>음주 상태도 책임 면제 사유는 아닙니다.</strong> CCTV·목격자 진술 + 전후 정황 종합 판단. 술기운에 의한 시비라도 가해 행위 자체는 책임 영역.',
      },
      {
        question: '처벌불원서만 받으면 무조건 무혐의인가요?',
        answer:
          '<strong>폭행죄는 처벌불원서로 \'공소권 없음\'이지만 상해죄는 별도입니다.</strong> 상해는 비반의사불벌이라 합의해도 처벌 가능 영역. 합의는 감경 사유.',
      },
      {
        question: '본인이 정당방위였다고 입증할 수 있나요?',
        answer:
          '<strong>CCTV·목격자 진술이 핵심 자료입니다.</strong> 상대가 먼저 폭행 + 본인이 방어 정도 정황 입증 시 정당방위 또는 양형 감경 다툼.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '술자리 시비 쌍방폭행', href: '/guide/assault/assault-bar-fight-mutual-injury-settle' },
      { label: '쌍방폭행 합의금', href: '/guide/assault/assault-mutual-fight-settlement-amount' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 vs 상해 처벌 차이', href: '/guide/assault/assault-vs-injury-penalties' },
      { label: '폭행 무고 방어', href: '/guide/assault/assault-false-accusation-counter' },
    ],
  },

  // ─── 2. assault / assault-disabled-victim-aggravated-penalty ───
  {
    domain: 'assault',
    slug: 'assault-disabled-victim-aggravated-penalty',
    keyword: '장애인 폭행 가중 처벌',
    questionKeyword: '장애인을 폭행했다고 입건됐어요. 일반 폭행보다 처벌이 더 무거운가요?',
    ctaKeyword: '장애인 폭행 가중 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '장애인 폭행 가중 처벌 — 4단계 방어 | 로앤가이드',
      description:
        '장애인을 폭행했다는 이유로 입건돼 가중 처벌이 우려된다면 인식·합의·양형 4단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"길거리에서 시비가 붙어 폭행을 했는데, 상대방이 장애인이라는 사실을 알고 가중 처벌이 청구된다고 합니다. 본인은 장애인인 줄 몰랐는데 가중 처벌받나요?" 장애인 폭행은 ① 형법 일반 폭행·상해 ② 장애인복지법·아동복지법 등 특별법 ③ 장애 인식 ④ 양형 가중 4가지 트랙으로 갈리는 영역입니다. 대법원 2016도4404 등 판례는 \'장애인에 대한 죄\' 가중 처벌 성립을 위해 행위자가 범행 당시 피해자의 장애를 인식해야 한다고 판시했습니다(성폭력 사안 기준이지만 폭행에도 유사 법리 적용 영역). 따라서 ① 장애 인식 부재 입증 ② 합의 + 처벌불원서 ③ 정당방위·위법성 조각 ④ 양형 다툼 4가지 방어 트랙으로 검토할 수 있는 사례가 있어요.</p>',
    sections: [
      {
        title: 'Q. 장애인 폭행 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 인식·합의·정당방위·양형 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 장애 인식 부재 입증 (대법원 2016도4404 법리)</strong> — 가중 처벌은 행위자가 장애를 인식해야 성립 영역. 인식 부재 자료 정리(외관·복장·행동 정황).</li>\n<li><strong>② 합의 + 처벌불원서</strong> — 폭행은 반의사불벌. 합의 + 처벌불원서로 \'공소권 없음\' 가능 영역.</li>\n<li><strong>③ 정당방위 검토</strong> — 본인이 방어적 폭행이었다면 정당방위 다툼. 시비 발단·과잉 정도 자료 정리.</li>\n<li><strong>④ 양형 (불합의 시)</strong> — 장애인 폭행은 양형 가중. 합의·반성·초범·인식 부재 결합으로 감경 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 장애 인식 부재가 입증되면 가중 처벌 부정 영역. CCTV·목격자 진술·외관 정황으로 인식 부재 입증. 합의가 가장 빠른 종결.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 선임 → 조사 → 합의·검찰 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — CCTV·목격자 진술·시비 발단 정황·피해자 외관 정황.</li>\n<li><strong>2단계 — 변호인 선임</strong> — 장애 인식 부재 입증 + 합의 전략. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 인식 부재·시비 발단 정황 진술. 변호인 동석.</li>\n<li><strong>4단계 — 합의 시도 (가능한 빨리)</strong> — 합의 + 처벌불원서로 \'공소권 없음\' 종결 가능 영역.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 인식 부재 + 정당방위 + 양형 다툼 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">장애인 폭행 4단계 방어를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사건 자료 + 인식 부재 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>CCTV·블랙박스·목격자 진술</strong> — 사건 정황.</li>\n<li><strong>피해자 외관·행동 정황</strong> — 인식 부재 자료.</li>\n<li><strong>시비 발단 자료</strong> — 정당방위 검토.</li>\n<li><strong>피해자 진단서</strong> — 부상 정도.</li>\n<li><strong>합의서·처벌불원서</strong> — 합의 자료.</li>\n<li><strong>본인 반성문·전과 자료</strong> — 양형 자료.</li>\n<li><strong>변호인 의견서</strong> — 인식 부재 + 양형.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV·목격자 진술에서 피해자가 외관상 일반인과 다르지 않은 정황이라면 장애 인식 부재의 강한 자료. 변호사 자문으로 인식 부재 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"피해자가 장애인이라 가중" 주장 반박</strong> — 행위자 인식 부재 시 가중 부정 영역. 외관·행동 정황 자료가 핵심.</li>\n<li><strong>합의 + 처벌불원서 권장</strong> — 폭행은 반의사불벌. 합의 시 \'공소권 없음\' 종결 가능.</li>\n<li><strong>장애인복지법·특별법 적용 검토</strong> — 단순 폭행 vs 특별법 적용 구분. 변호사 자문 필요.</li>\n<li><strong>피해자 보호 가중</strong> — 장애인은 사회적 보호 대상이라 양형 가중 영역. 합의·반성·초범 결합으로 감경.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가중 처벌의 행위자 인식 요건',
        summary:
          '대법원 2016도4404 사건(대법원, 2021.02.25 선고)에서 법원은 성폭력범죄의 처벌 등에 관한 특례법 제6조의 \'신체적 장애가 있는 사람에 대한 강간·강제추행 등의 죄\'가 성립하려면 행위자가 범행 당시 피해자에게 신체적 장애가 있음을 인식해야 한다고 판시했습니다. 이러한 \'인식 요건\' 법리는 폭행·상해 가중 처벌 영역에도 유사하게 적용되어, 장애 인식 부재가 입증되면 가중 처벌 부정 영역으로 평가될 여지가 있습니다.',
        takeaway: '장애인 폭행 가중 처벌은 행위자 인식 + 합의 + 정당방위 + 양형 결합 영역이라, CCTV·목격자 진술·외관 정황 자료를 정리하면 4가지 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '피해자가 장애인인 줄 정말 몰랐어요',
        answer:
          '<strong>장애 인식 부재가 입증되면 가중 처벌 부정 영역입니다.</strong> 외관·행동·발언이 일반인과 구분 없는 정황 자료가 핵심. CCTV + 목격자 진술 + 변호인 의견서.',
      },
      {
        question: '합의금이 더 비싼가요?',
        answer:
          '<strong>피해자 보호 가중 영역이라 합의금 + 위자료 가중 가능 영역입니다.</strong> 다만 합의 시 양형 감경 효과 큼. 변호사 자문 후 합리적 합의금 협의.',
      },
      {
        question: '본인이 정당방위였어요',
        answer:
          '<strong>정당방위 또는 위법성 조각 다툼 가능 영역입니다.</strong> 시비 발단·과잉 정도 자료 + 변호사 자문. 다만 사회적 보호 대상이라 정당방위 인정 엄격 영역.',
      },
      {
        question: '국선변호인 받을 수 있나요?',
        answer:
          '<strong>자격 요건 충족 시 가능합니다.</strong> 사형·무기 또는 구속 사건은 자동 국선. 기타는 자력·소득 기준. 대한변협 02-2087-7700 신청.',
      },
      {
        question: '초범인데 실형 가능성 있나요?',
        answer:
          '<strong>장애인 폭행 가중은 실형 가능 영역이지만 초범 + 합의 + 반성 결합 시 집행유예 영역입니다.</strong> 합의가 가장 결정적 양형 자료.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '노약자 폭행 가중 처벌', href: '/guide/assault/assault-elderly-victim-aggravated-sentencing' },
      { label: '장애인 보호·감독 위반', href: '/guide/assault/assault-mental-disability-victim-protect' },
      { label: '폭행 무고 방어', href: '/guide/assault/assault-false-accusation-counter' },
      { label: '단순 폭행 합의·양형', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
    ],
  },

  // ─── 3. assault / assault-spousal-domestic-violence-cohabit-charge ───
  {
    domain: 'assault',
    slug: 'assault-spousal-domestic-violence-cohabit-charge',
    keyword: '동거 배우자·연인 폭행 가정폭력특례법',
    questionKeyword: '동거 중 배우자를 폭행해 가정폭력으로 입건됐어요. 보호처분이 뭔가요?',
    ctaKeyword: '동거 폭행 가정폭력 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '동거 폭행 가정폭력 입건 — 4단계 방어 | 로앤가이드',
      description:
        '동거 배우자·연인을 폭행해 가정폭력특례법으로 입건됐다면 보호처분 + 합의 + 임시조치 4단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동거 중인 배우자와 다투다가 폭행이 됐어요. 가정폭력 신고로 임시조치(접근금지)와 보호처분이 청구된다고 합니다. 형사처벌과 어떻게 다른가요?" 가정폭력은 ① 가정폭력범죄의처벌등에관한특례법(가폭법) ② 형법 일반 폭행·상해 ③ 임시보호명령·보호처분 ④ 합의 + 처벌불원서 4가지 트랙으로 다퉈지는 영역입니다. 가폭법은 \'가정 보호\' 목적이라 형사처벌 대신 \'보호처분\'(상담·교육·접근금지·치료위탁 등)으로 종결되는 사례가 많은 영역. 다만 보호처분 미이행 시 가폭법 제63조 위반으로 별도 처벌(2년 이하 징역). 동거 연인은 사실혼·동거 정황에 따라 가폭법 적용 다툼 가능한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 가정폭력 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 가폭법 적용·임시조치·보호처분·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가폭법 적용 (배우자·동거인·가족)</strong> — 법률혼·사실혼·동거 가족이라면 가폭법 적용 영역. 일반 폭행 + 가폭법 결합 처리.</li>\n<li><strong>② 임시보호명령·임시조치 (가폭법 제29조)</strong> — 100m 이내 접근금지·전기통신 금지 등 즉시 조치. 위반 시 별도 처벌 (대법원 2021도15745).</li>\n<li><strong>③ 보호처분 (가폭법 제40조)</strong> — 상담·교육·치료위탁·사회봉사·접근금지 등. 형사처벌 대신 보호처분 종결 영역.</li>\n<li><strong>④ 합의 + 처벌불원서</strong> — 폭행은 반의사불벌. 합의 + 처벌불원서로 \'공소권 없음\' 또는 보호처분 트랙으로 분기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가폭법은 \'가정 보호\' 목적이라 보호처분 트랙으로 종결되는 사례 다수. 합의 + 보호처분 이행이 가장 빠른 종결. 임시조치 위반은 별도 처벌이라 주의.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정폭력 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 임시조치 대응 → 합의 → 보호처분 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 사건 정황·진단서·합의 의사·치료·상담 자료.</li>\n<li><strong>2단계 — 변호인 선임 (즉시)</strong> — 임시조치 대응 + 합의 전략. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 임시조치·임시보호명령 대응</strong> — 접근금지 등 임시조치 명령 준수. 위반 시 별도 처벌.</li>\n<li><strong>4단계 — 합의 시도 + 처벌불원서</strong> — 합의 + 보호처분 동의 시 \'공소권 없음\' 또는 보호처분 종결.</li>\n<li><strong>5단계 — 보호처분 이행 또는 형사 본안</strong> — 보호처분 (상담·교육·접근금지) 이행 시 종결. 미이행 시 형사 본안.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력 4단계 방어를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사건 자료 + 합의 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>사건 정황·CCTV·신고 기록</strong> — 사건 직후 자료.</li>\n<li><strong>피해자 진단서</strong> — 부상 정도.</li>\n<li><strong>임시조치 결정문</strong> — 준수 사항.</li>\n<li><strong>합의서·처벌불원서</strong> — 합의 자료.</li>\n<li><strong>본인 반성문·치료·상담 자료</strong> — 보호처분 동의 자료.</li>\n<li><strong>혼인관계증명·동거 자료</strong> — 가폭법 적용 검토.</li>\n<li><strong>변호인 의견서</strong> — 보호처분·합의·양형 전략.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 폭력 재발 방지 의사 표시 + 자발적 상담·치료 정황이 보호처분 종결의 강한 자료. 임시조치 위반은 별도 처벌이라 절대 위반 금지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정폭력 다툼 포인트와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 동거인이라 가폭법 적용 부정" 주장 가능 영역</strong> — 동거 기간·관계 정황으로 가폭법 적용 다툼 가능. 사실혼 인정 부재 정황이라면 일반 폭행 트랙.</li>\n<li><strong>임시조치 위반 절대 금지</strong> — 100m 접근·전기통신 위반 시 가폭법 제63조 위반(2년 이하 징역). 별도 처벌이라 가중 영역.</li>\n<li><strong>보호처분 적극 동의 권장</strong> — 보호처분 이행 시 형사처벌 대신 종결 영역. 상담·교육·치료 자발적 참여가 핵심.</li>\n<li><strong>합의 + 처벌불원서</strong> — 합의 + 처벌불원서로 \'공소권 없음\' 또는 보호처분 결정 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 가정폭력 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력 임시보호명령 위반의 처벌',
        summary:
          '대법원 2021도15745 사건(대법원, 2023.07.13 선고)에서 법원은 가정폭력특례법상 피해자보호명령 및 임시보호명령 제도의 취지를 설명하면서, 임시보호명령에서 금지를 명한 행위를 한 경우 임시보호명령 위반죄가 성립한다고 판시했습니다. 또한 대법원 2020도5233 사건(대법원, 2023.06.01 선고)은 보호처분 등 불이행죄의 성립에 관한 법리를 정리해, 가정폭력 보호처분 트랙은 형사처벌과 별개로 운영되며 미이행 시 별도 처벌됨을 명확히 했습니다.',
        takeaway: '가정폭력은 형사 + 가폭법 보호처분 결합 영역이라, 임시조치 준수 + 보호처분 동의 + 합의 자료를 정리하면 4단계 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '동거 연인도 가정폭력 적용되나요?',
        answer:
          '<strong>동거 기간·관계 정황에 따라 적용 다툼 가능 영역입니다.</strong> 사실혼 인정 정도라면 적용. 단기 동거·일반 연인은 일반 폭행 트랙. 변호사 자문.',
      },
      {
        question: '임시조치 위반하면 어떻게 되나요?',
        answer:
          '<strong>가폭법 제63조 위반으로 2년 이하 징역 별도 처벌입니다.</strong> 절대 위반 금지. 100m 접근·전기통신 모두 포함. 우연 정황도 위험.',
      },
      {
        question: '보호처분 받으면 형사처벌 안 받나요?',
        answer:
          '<strong>보호처분 이행 시 형사처벌 대신 종결 영역입니다.</strong> 다만 미이행 시 형사 본안으로 분기. 보호처분 적극 이행이 핵심.',
      },
      {
        question: '피해자가 합의 안 해줘요',
        answer:
          '<strong>가폭법은 보호처분 트랙이라 합의 없이도 종결 가능 영역입니다.</strong> 다만 합의 + 처벌불원서가 보호처분 결정에 강한 영향. 변호사 자문으로 합의 시도.',
      },
      {
        question: '동거 폭행 첫 사건인데 실형 가능성 있나요?',
        answer:
          '<strong>초범 + 보호처분 + 합의 결합 시 형사처벌 없이 종결 가능 영역입니다.</strong> 다만 부상 정도 큰 상해는 별도. 변호사 자문 필수.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '가족 폭행 가정폭력 보호', href: '/guide/assault/assault-family-parent-sibling-domestic-violence' },
      { label: '데이트폭력 피해자 보호', href: '/guide/assault/assault-dating-violence-victim-protection' },
      { label: '부모·노약자 폭행', href: '/guide/assault/assault-elderly-parent-domestic-protect' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 첫 대응', href: '/guide/assault/assault-charged-first-response' },
    ],
  },

  // ─── 4. child-support / child-support-direct-payment-employer-refusal ───
  {
    domain: 'child-support',
    slug: 'child-support-direct-payment-employer-refusal',
    keyword: '양육비 직접지급명령 사용자 거부',
    questionKeyword: '양육비 직접지급명령을 받았는데 비양육 부모의 회사가 협조 안 해줘요. 어떻게 하나요?',
    ctaKeyword: '직접지급명령 강제이행 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 직접지급명령 사용자 거부 — 4단계 강제이행 | 로앤가이드',
      description:
        '양육비 직접지급명령을 받았는데 비양육 부모의 사용자가 협조를 거부한다면 강제이행 + 노동청 + 민사 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"가정법원에서 양육비 직접지급명령을 받았는데, 전 배우자의 회사가 \'개인정보 보호\' 등을 이유로 협조를 거부합니다. 매월 양육비를 받지 못하고 있어요." 양육비 직접지급명령은 가사소송법 제63조의2에 따라 비양육 부모의 사용자에게 양육비를 양육친에게 직접 지급하도록 명령하는 트랙입니다. 사용자는 명령에 따를 의무가 있고, 미이행 시 ① 사용자 손해배상 책임 ② 양육비이행관리원 협조 ③ 노동청 진정 ④ 민사 강제집행 4가지 트랙으로 강제이행이 가능한 영역이에요. 또한 양육비이행관리원이 직접 사용자와 협상·강제이행 신청을 할 수 있는 트랙도 있어, 단독 청구가 어려운 사안은 양육비이행관리원 트랙을 결합 검토하는 것이 효과적입니다.</p>',
    sections: [
      {
        title: 'Q. 직접지급명령 4가지 강제이행 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용자 책임·이행관리원·노동청·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사용자 손해배상 책임 (가사소송법 제63조의2)</strong> — 사용자가 직접지급명령을 미이행 시 양육친에게 손해배상 책임. 미지급액 + 지연이자.</li>\n<li><strong>② 양육비이행관리원 (csa.go.kr)</strong> — 양육비이행관리원이 사용자와 협상·강제이행 청구 가능. 무료 협조 트랙.</li>\n<li><strong>③ 노동청 진정 (사용자가 임금 지급 거부 정황)</strong> — 사용자가 비양육 부모에게 임금을 지급하면서 직접지급명령을 무시한다면 임금체불 진정 결합 가능.</li>\n<li><strong>④ 민사 강제집행</strong> — 사용자 명의 자산에 대한 강제집행. 명령 위반 손해배상 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접지급명령은 사용자 의무 영역. 미이행 시 양육비이행관리원 트랙이 가장 빠른 협조. 회사가 명령 미이행 자체가 손해배상 책임 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 강제이행 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 사용자 통지 → 이행관리원 협조 → 강제이행 → 손해배상 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 직접지급명령서·사용자 거부 정황·전 배우자 임금 정보·양육비 미지급 기록.</li>\n<li><strong>2단계 — 사용자에게 내용증명 + 협조 요청</strong> — 명령 이행 + 미이행 시 손해배상 청구 예고.</li>\n<li><strong>3단계 — 양육비이행관리원 협조 요청 (csa.go.kr)</strong> — 무료 협조 + 강제이행 청구.</li>\n<li><strong>4단계 — 노동청 진정·민사 강제집행 (병행)</strong> — 사용자 미이행 지속 시 노동청 + 민사.</li>\n<li><strong>5단계 — 손해배상 청구</strong> — 사용자 명의 자산 강제집행. 미지급액 + 지연이자.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">직접지급명령 4단계 강제이행을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 명령 자료 + 사용자 거부 정황 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>직접지급명령서</strong> — 가정법원 결정.</li>\n<li><strong>사용자 거부 정황</strong> — 통화·이메일·내용증명 응답.</li>\n<li><strong>전 배우자 재직 정보</strong> — 회사명·재직 기간.</li>\n<li><strong>양육비 미지급 기록</strong> — 기간·금액.</li>\n<li><strong>양육비이행관리원 신청서</strong> — csa.go.kr 양식.</li>\n<li><strong>본인·자녀 가족관계증명</strong> — 청구 신분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사용자가 \'개인정보 보호\'를 이유로 거부하는 사례가 많지만, 가사소송법 제63조의2는 사용자 의무를 명문화한 영역이라 거부 사유로 부적합. 양육비이행관리원이 강력한 협조 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"개인정보 보호" 주장 반박</strong> — 가사소송법 제63조의2는 사용자 의무 명문화. 개인정보 보호로 거부 부적합 영역.</li>\n<li><strong>"전 배우자 동의 필요" 주장 반박</strong> — 직접지급명령은 법원 결정. 본인 동의 부재해도 사용자 의무 영역.</li>\n<li><strong>"임금 자체가 없다" 주장 검토</strong> — 임금 지급 정황 입증 필요. 4대보험 가입·세무 자료로 확인.</li>\n<li><strong>이행관리원 트랙 적극 활용</strong> — 단독 청구 어려운 사안은 무료 협조 트랙이 가장 빠른 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 무료 협조.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 청구권의 시효와 분담 기준',
        summary:
          '대법원 2018스724 사건(대법원, 2024.07.18 선고)에서 법원은 이혼한 부부 사이에서 어느 일방이 과거에 미성년 자녀를 양육하면서 생긴 비용의 상환을 상대방에게 청구하는 경우, 과거 양육비 권리의 소멸시효는 자녀가 성년이 되어 양육의무가 종료된 때부터 진행한다고 판시했습니다. 또한 대법원 2023스637 사건(대법원, 2024.10.08 선고)은 과거 양육비 분담의 범위를 정할 때 재산분할·합의 정황을 종합 고려해야 한다고 보았습니다. 직접지급명령 미이행 시에도 양육비 청구권 자체는 보호되는 영역입니다.',
        takeaway: '양육비 직접지급명령 사용자 거부는 사용자 의무 + 이행관리원 + 노동청 + 민사 결합 영역이라, 명령서·사용자 거부 정황·이행관리원 신청서를 정리하면 4단계 강제이행 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '사용자가 명령 무시하면 처벌받나요?',
        answer:
          '<strong>가사소송법 제63조의2 사용자 의무 위반 + 손해배상 책임 영역입니다.</strong> 직접 형사처벌은 없지만 미지급액 + 지연이자 손해배상 + 노동청 진정 결합 가능.',
      },
      {
        question: '양육비이행관리원은 어떻게 도와주나요?',
        answer:
          '<strong>사용자와 직접 협상·강제이행 청구 + 무료 변호사 지원 영역입니다.</strong> csa.go.kr 또는 1644-6621 신청. 단독 청구 어려운 사안에 강력 트랙.',
      },
      {
        question: '전 배우자가 회사를 바꾸면 어떻게 하나요?',
        answer:
          '<strong>새 회사로 직접지급명령 변경 신청 가능합니다.</strong> 4대보험 가입 정보·세무 자료로 새 회사 확인 + 가정법원 변경 신청.',
      },
      {
        question: '회사가 폐업했어요',
        answer:
          '<strong>비양육 부모 직접 청구 또는 다른 자산 추적 트랙입니다.</strong> 양육비 감치명령(가사소송법 제68조) 결합 검토. 이행관리원 협조 활용.',
      },
      {
        question: '시효 도과 양육비도 청구 가능한가요?',
        answer:
          '<strong>과거 양육비 시효는 자녀 성년 후 진행 영역입니다(2018스724).</strong> 미성년 자녀 양육 중 발생한 양육비는 시효 미진행. 다만 시효 임박 시 빠른 청구.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '직접지급명령 절차', href: '/guide/child-support/child-support-direct-payment-order-procedure' },
      { label: '직접지급명령 vs 이행관리원', href: '/guide/child-support/child-support-direct-vs-agency-comparison' },
      { label: '제3자 사용자 직접지급', href: '/guide/child-support/child-support-direct-payment-third-party-employer' },
      { label: '미지급 급여 압류 절차', href: '/guide/child-support/child-support-overdue-salary-seizure-procedure' },
      { label: '양육비 감치명령 절차', href: '/guide/child-support/child-support-contempt-detention-procedure' },
    ],
  },

  // ─── 5. child-support / child-support-paying-parent-remarriage-newchild-reduction ───
  {
    domain: 'child-support',
    slug: 'child-support-paying-parent-remarriage-newchild-reduction',
    keyword: '비양육 부모 재혼 새 자녀 양육비 감액',
    questionKeyword: '비양육 부모가 재혼해 새 자녀가 생겼다고 양육비 감액 청구해요. 다툴 수 있나요?',
    ctaKeyword: '재혼 양육비 감액 다툼 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '비양육 부모 재혼 양육비 감액 — 4가지 다툼 | 로앤가이드',
      description:
        '비양육 부모가 재혼·출산했다는 이유로 양육비 감액을 청구한다면 자녀의 복리 + 감액 부정 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 양육비를 매월 80만원씩 받고 있었는데, 비양육 부모가 재혼해 새 자녀가 생겼다고 \'양육비 감액\' 청구를 했어요. 본인 자녀 양육비가 줄어들 수 있나요?" 양육비 감액 청구는 ① 민법 제837조 제5항 \'양육에 관한 사항 변경\' ② \'자녀의 복리\' 기준 ③ 사정 변경 (수입·재산·새 부양가족) ④ 감액 vs 유지 다툼 4가지 트랙으로 갈리는 영역입니다. 대법원 2022스646 판결은 양육비 감액 판단 기준이 \'자녀의 복리를 위해 필요한지\'이며, 종전 양육비가 부당하게 과다한 정도로 평가되어야 감액 인정 영역이라고 판시했습니다. 단순 재혼·출산만으로는 감액 사유 부족 영역이며, 비양육 부모 소득·재산이 실질 감소했는지 종합 판단이 필요한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 양육비 감액 청구 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 복리·소득 변화·새 부양가족·합리성 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자녀 복리 기준 (대법원 2022스646)</strong> — 감액 판단은 자녀 복리에 필요한지. 본인 자녀 생활 수준 유지가 핵심. 비양육 부모 사정만으로 감액 어려운 영역.</li>\n<li><strong>② 비양육 부모 소득·재산 실질 감소</strong> — 단순 재혼·출산만이 아니라 소득·재산이 실질 감소했는지 입증 부담은 청구인.</li>\n<li><strong>③ 새 부양가족 vs 기존 자녀 균형</strong> — 새 자녀 부양 의무도 있지만 기존 자녀 양육비도 부양 의무. 균형 판단 영역.</li>\n<li><strong>④ 종전 양육비 부당 과다 여부</strong> — 종전 양육비가 비양육 부모 소득 대비 부당하게 과다해야 감액 인정 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재혼·출산만으로는 감액 사유 부족 영역. 비양육 부모 소득 실질 감소 입증 + 종전 양육비 부당 과다 입증이 핵심. 본인 자녀 생활 수준 유지 정황 자료가 강력한 다툼 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 감액 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 답변서 → 조정 → 변론 → 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 자녀 양육비 사용 정황·생활 수준·비양육 부모 소득 정황·재혼·출산 정보.</li>\n<li><strong>2단계 — 답변서 제출 (소장 송달 후 30일 내)</strong> — 자녀 복리 + 양육비 유지 필요성 + 비양육 부모 소득 미감소 입증.</li>\n<li><strong>3단계 — 가정법원 조정</strong> — 양 당사자 출석 의무. 변호사 자문 후 조정.</li>\n<li><strong>4단계 — 변론 (조정 결렬 시)</strong> — 자녀 복리·소득 변화·균형 본격 변론. 비양육 부모 소득 자료 입증 부담은 청구인.</li>\n<li><strong>5단계 — 결정·항고</strong> — 가정법원 결정. 불복 시 항고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 감액 4가지 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 양육 자료 + 비양육 부모 소득 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 자녀 양육 자료</strong> — 학원·교육비·의료비·생활비.</li>\n<li><strong>본인 자녀 생활 수준 자료</strong> — 양육비 의존도.</li>\n<li><strong>비양육 부모 소득 정황</strong> — 종전·현재 소득 비교.</li>\n<li><strong>비양육 부모 재혼·출산 정보</strong> — 청구 사유 검토.</li>\n<li><strong>종전 양육비 결정문·합의서</strong> — 양육비 산정 근거.</li>\n<li><strong>양육비 산정기준표</strong> — 표준 양육비 비교.</li>\n<li><strong>본인 소득·재산 자료</strong> — 부양 능력 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 자녀가 종전 양육비에 의존해 학원·교육·의료비를 지출해온 정황 자료가 \'자녀 복리 우선\' 다툼의 핵심 자료. 감액 시 자녀 생활 수준 저하 정황 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 비양육 부모 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"새 자녀 부양으로 부담 가중" 주장 반박</strong> — 새 자녀 부양도 의무지만 기존 자녀 양육비도 의무. 균형 판단 영역.</li>\n<li><strong>"종전 양육비 과다" 주장 반박</strong> — 양육비 산정기준표 + 본인 자녀 실제 지출 자료로 합리성 입증.</li>\n<li><strong>"소득 감소" 주장 검토</strong> — 청구인 입증 부담. 4대보험 가입·세무 자료 + 비양육 부모 자산 종합 검토.</li>\n<li><strong>변호사 자문 + 양육비이행관리원 협조</strong> — 양육비이행관리원 1644-6621 무료 자문.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 양육비 무료 자문.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 감액 판단의 \'자녀 복리\' 기준',
        summary:
          '대법원 2022스646 사건(대법원, 2022.09.29 선고)에서 법원은 재판 또는 당사자의 협의로 정해진 양육비 부담 내용이 \'부당\'한지 여부는 \'자녀의 복리를 위해 필요한지\'를 기준으로 판단해야 한다고 판시했습니다. 또한 가정법원이 양육비 감액 청구를 판단할 때 \'종전에 정해진 양육비의 분담이 과다하게 되었다\'고 주장하며 감액을 청구하는 경우, 자녀들의 성장에도 불구하고 감액이 필요할 정도로 청구인의 소득과 재산이 실질적으로 감소하였는지 심리·판단해야 한다고 보았습니다.',
        takeaway: '양육비 감액 청구는 자녀 복리 + 비양육 부모 실질 소득 감소 결합 영역이라, 본인 자녀 생활 수준·교육비·종전 양육비 자료를 정리하면 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '재혼만 했지 소득은 그대로인데도 감액 가능한가요?',
        answer:
          '<strong>단순 재혼만으로는 감액 사유 부족 영역입니다.</strong> 소득·재산 실질 감소 입증이 핵심. 재혼 + 새 부양가족 결합도 균형 판단 영역.',
      },
      {
        question: '본인 자녀가 청소년이 됐는데 감액되나요?',
        answer:
          '<strong>오히려 청소년기 양육비는 증액 사유가 더 일반적입니다.</strong> 학원·교육비 증가로 양육비 증액 청구 트랙이 더 적합한 영역. 변호사 자문.',
      },
      {
        question: '양육비 산정기준표가 어떻게 되나요?',
        answer:
          '<strong>가정법원 양육비 산정기준표 영역입니다.</strong> 자녀 연령·부모 소득별로 표준 양육비 산정. 가정법원·csa.go.kr에서 확인 가능.',
      },
      {
        question: '감액 청구 거부했는데 강제로 감액되나요?',
        answer:
          '<strong>가정법원 판단 영역입니다.</strong> 본인 거부만으로 결정되지 않으며, 자녀 복리 + 비양육 부모 소득 종합 판단. 적극 답변서·자료 제출 필수.',
      },
      {
        question: '소득이 정말 감소했다는데 어떻게 검증하나요?',
        answer:
          '<strong>4대보험 가입·세무 자료 + 양육비이행관리원 검증 트랙입니다.</strong> 비양육 부모가 자료 제출 거부 시 가정법원 직권 조사 + 이행관리원 협조.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '비양육 부모 재혼 감액', href: '/guide/child-support/child-support-ex-remarriage-reduction-possible' },
      { label: '비양육 무직 감액 거부', href: '/guide/child-support/child-support-ex-unemployed-reduction-refuse' },
      { label: '비양육 재혼 소득 증가', href: '/guide/child-support/child-support-non-custodial-remarry-income-increase' },
      { label: '양육비 변경 청구', href: '/guide/child-support/child-support-modification-income-change' },
      { label: '양육비 증액 청구', href: '/guide/child-support/child-support-increase-request-method' },
    ],
  },

  // ─── 6. dui / dui-test-refusal-warrant-blood-extraction ───
  {
    domain: 'dui',
    slug: 'dui-test-refusal-warrant-blood-extraction',
    keyword: '음주측정 거부 영장 청구',
    questionKeyword: '음주측정을 거부했더니 영장이 청구된다고 합니다. 어떻게 방어하나요?',
    ctaKeyword: '음주측정 거부 영장 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 영장 청구 — 4단계 방어 | 로앤가이드',
      description:
        '음주측정을 거부해 영장이 청구됐다면 측정거부 성립 요건 + 보호조치 위반 4단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술자리 후 운전 중 단속에 걸렸는데 측정을 거부했더니 \'음주측정거부\'로 입건되고 강제 채혈 영장이 청구된다고 합니다. 방어 가능한가요?" 음주측정거부는 ① 도로교통법 제148조의2 제2항 ② 측정요구의 적법성 ③ 보호조치 위반 ④ 측정 응할 의사 4가지 트랙으로 다툼이 가능한 영역입니다. 대법원 2013도8481 판결은 \'경찰공무원의 측정에 응하지 아니한 경우\'의 의미를 \'측정거부 의사가 객관적으로 명백한 경우\'로 정리하면서, 일시적 거부는 측정거부죄 미성립 영역으로 봤습니다. 또한 대법원 2008고정299·2012도11162 등 일관된 판례는 위법한 체포·보호조치 상태에서의 측정요구는 위법하다고 판시해, 절차 적법성 다툼 트랙이 열리는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 음주측정거부 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정거부 의사·요구 적법성·보호조치·일시적 거부 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정거부 의사 명백성 (대법원 2013도8481)</strong> — 일시적 거부·심호흡 곤란 등은 측정거부 부정 영역. 객관적·일관적 거부 의사 입증 필요.</li>\n<li><strong>② 측정요구 적법성</strong> — 음주감지기만으로는 측정요구 인정 부정. 호흡측정기 적법 요구가 필요(2008고정299).</li>\n<li><strong>③ 보호조치·체포 적법성 (대법원 2012도11162)</strong> — 위법 보호조치 + 체포 상태에서의 측정요구는 위법. 측정거부죄 부정 영역.</li>\n<li><strong>④ 호흡 곤란 정황</strong> — 안면 신경마비·호흡기 질환 등 호흡 측정 곤란 정황이 있다면 측정거부죄 부정 영역(울산지법 2018노593).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주측정거부죄는 절차 적법성 + 측정 의사 객관 명백성 + 호흡 곤란 정황으로 다툼 가능한 영역. 단속 직후 자료 보존이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 조사 → 영장 대응 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 단속 영상·블랙박스·본인 음주 정황·체포 절차 자료·호흡 곤란 정황.</li>\n<li><strong>2단계 — 변호인 선임 (즉시)</strong> — 측정거부 다툼 + 영장 대응. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 측정 의사·체포 절차·호흡 곤란 진술. 변호인 동석.</li>\n<li><strong>4단계 — 영장 대응 (강제 채혈)</strong> — 영장에 따라 강제 채혈. 채혈 결과로 음주 입증되면 음주운전 + 거부 결합 처리.</li>\n<li><strong>5단계 — 형사 본안</strong> — 측정거부 + 음주운전 본격 변론. 절차 위법·일시적 거부 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정거부 4단계 방어를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단속 자료 + 본인 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>단속 영상·블랙박스</strong> — 측정 정황·체포 절차.</li>\n<li><strong>본인 호흡 곤란·신체 정황</strong> — 진단서·의료 기록.</li>\n<li><strong>채혈 결과서 (있다면)</strong> — 음주 농도.</li>\n<li><strong>음주 정황 자료</strong> — 술자리 영수증·동석자.</li>\n<li><strong>경찰 신문조서</strong> — 측정요구·체포 절차.</li>\n<li><strong>본인 운전 정황</strong> — 운전 시점·거리.</li>\n<li><strong>변호인 의견서</strong> — 절차 위법·일시적 거부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단속 영상은 경찰 보존하지만 본인 차량 블랙박스도 핵심 자료. 호흡 곤란 정황이 있다면 진단서·의료 기록 즉시 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"객관적 거부 의사" 주장 반박</strong> — 일시적 거부·시뮬레이션·호흡 곤란이라면 측정거부죄 부정 영역(2013도8481·2018노593).</li>\n<li><strong>"호흡측정기 적법 요구" 주장 반박</strong> — 음주감지기만으로는 측정요구 부정. 호흡측정기 적법 절차 다툼.</li>\n<li><strong>"체포·보호조치 적법" 주장 반박</strong> — 위법 체포 + 보호조치 상태 측정요구는 위법(2012도11162). 절차 자료 다툼.</li>\n<li><strong>음주운전 + 거부 결합 처벌</strong> — 채혈로 음주 입증 시 음주운전 처벌 + 거부 결합. 합의·반성 양형 결합 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>중앙행정심판위원회 (acrc.go.kr)</strong> — 면허 취소 행정심판.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정거부죄의 성립 요건',
        summary:
          '대법원 2013도8481 사건(대법원, 2015.12.24 선고)에서 법원은 도로교통법 제148조의2 제1항 제2호의 \'경찰공무원의 측정에 응하지 아니한 경우\'의 의미를 정의하면서, 측정거부가 일시적인 것에 불과한 경우 음주측정불응죄가 성립하지 않는다고 판시했습니다. 또한 대법원 2012도11162 사건(대법원, 2012.12.13 선고)은 위법한 보호조치·체포 상태에서의 측정요구는 위법하다고 보았습니다. 이러한 판례는 측정거부죄 다툼 트랙의 핵심 법리로 작용하는 영역입니다.',
        takeaway: '음주측정거부는 측정 의사 명백성 + 절차 적법성 + 호흡 곤란 정황 결합 영역이라, 단속 영상·신체 정황·진단서·체포 절차 자료를 정리하면 4단계 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '한 번 거부했다가 다시 응하면 거부죄 부정되나요?',
        answer:
          '<strong>일시적 거부 후 응하면 측정거부죄 부정 영역(2013도8481).</strong> 객관적·일관적 거부 의사가 명백해야 거부죄 성립. 단속 영상으로 일시적 거부 입증 가능.',
      },
      {
        question: '음주감지기로 검사받았는데 호흡측정기 거부했어요',
        answer:
          '<strong>음주감지기는 측정요구 부정 영역(2008고정299).</strong> 호흡측정기 적법 요구가 측정거부죄 성립 요건. 절차 적법성 다툼 가능.',
      },
      {
        question: '안면 신경마비라 호흡 측정이 어려워요',
        answer:
          '<strong>호흡 곤란 정황이 있다면 측정거부죄 부정 영역(울산지법 2018노593).</strong> 진단서·의료 기록 즉시 확보. 변호사·법률구조공단 132 자문.',
      },
      {
        question: '채혈 결과 음주 농도가 나오면 어떻게 되나요?',
        answer:
          '<strong>음주운전 처벌 + 측정거부 결합 처리 영역입니다.</strong> 음주운전이 본 처벌이라 양형은 음주 농도·전과·합의 종합. 거부 부분은 별도 다툼.',
      },
      {
        question: '면허 취소 행정심판은 어떻게 신청하나요?',
        answer:
          '<strong>중앙행정심판위원회(acrc.go.kr)에 90일 이내 청구입니다.</strong> 무료. 측정거부 절차 위법 + 운전 생계 사유 등 종합 변론. 형사 절차와 별도 트랙.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '음주측정 거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
      { label: '음주측정 거부 항소', href: '/guide/dui/dui-measurement-refusal-penalty-appeal' },
      { label: '음주운전 첫 적발 절차', href: '/guide/dui/dui-first-offense' },
      { label: '면허 취소 행정심판', href: '/guide/dui/dui-administrative-license-hearing' },
    ],
  },
];
