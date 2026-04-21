import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [아동 성범죄를 목격하거나 인지한 신고의무자·보호자]의 [신고 의무 범위와 신고 절차를 모르는 상황]에서 [신고 의무 확인과 단계별 신고 절차 안내]를 돕는 페이지다.
// 2. 이 페이지는 [학원 강사에 의한 아동 성추행을 발견한 부모]의 [학원 측 대응과 증거 확보를 모르는 상황]에서 [즉시 대처법과 신고·증거보전 방법]을 돕는 페이지다.
// 3. 이 페이지는 [자녀의 온라인 그루밍 피해를 의심하는 부모]의 [징후를 판단하고 어디에 도움을 요청해야 하는지 모르는 상황]에서 [그루밍 징후 판별과 증거 확보·신고 방법]을 돕는 페이지다.
// 4. 이 페이지는 [아이가 성범죄 피해 사실을 직접 말한 부모]의 [아이의 말을 어떻게 받아들이고 첫 단계를 밟아야 하는지 모르는 상황]에서 [아이 보호·진술 보전·신고 순서 안내]를 돕는 페이지다.
// 5. 이 페이지는 [자녀가 또래에게 성폭력 피해를 당한 부모]의 [가해자가 미성년자일 때 신고와 학교 대응 방법을 모르는 상황]에서 [법적 대응·학교 조치·아이 보호 전략]을 돕는 페이지다.
// 6. 이 페이지는 [아동성범죄 혐의를 받고 수사 대응이 필요한 피의자]의 [경찰 출석 전 준비와 진술 전략을 모르는 상황]에서 [수사 단계별 방어 전략과 권리 행사 방법]을 돕는 페이지다.
// 7. 이 페이지는 [성매매 단속에 적발된 사람]의 [앞으로 진행될 형사 절차 전체 흐름을 모르는 상황]에서 [입건부터 선고까지 타임라인과 단계별 대응]을 돕는 페이지다.

export const spokesBatch19_1to7: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. child-sex-crime / mandatory-reporting-and-procedure
  // ───────────────────────────────────────────
  // 2. child-sex-crime / academy-teacher-molestation-response
  // ───────────────────────────────────────────
  // 3. child-sex-crime / online-grooming-warning-signs
  // ───────────────────────────────────────────
  // 4. child-sex-crime / child-disclosed-abuse-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'child-sex-crime',
    slug: 'child-disclosed-abuse-where-to-start',
    keyword: '아이가 성범죄 피해를 말했을 때 어디부터',
    questionKeyword: '아이가 성범죄 피해를 말했는데 부모가 먼저 해야 할 일이 뭔가요?',
    ctaKeyword: '아동 성범죄 피해 초기 대응',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '아이가 성범죄 피해 말했을 때 부모 대응 5단계 | 로앤가이드',
      description: '아이가 성범죄 피해를 말했는데 어디서부터 시작해야 할지 모르겠다면, 부모가 해야 할 5단계 초기 대응을 지금 확인하세요.',
    },
    intro:
      '아이가 울면서 무언가를 말하려 합니다. 더듬거리며 나온 말에 온몸이 얼어붙었습니다. 당장 가해자를 찾아가고 싶은 마음과, 아이를 꼭 안아주고 싶은 마음이 교차합니다. 지금 부모의 첫 반응이 아이의 심리 회복과 형사 절차 전체를 좌우합니다. 침착하게 한 단계씩 밟아가세요.',
    sections: [
      {
        title: '첫째, 아이에게 "네 잘못이 아니야"라고 말해주세요',
        content:
          '<p><strong style="color:#1e3a5f">아동 성범죄 피해자의 80% 이상이 "내가 잘못해서 그런 일이 생겼다"고 느낍니다. 부모의 첫 반응이 아이의 진술 의지를 결정합니다</strong></p>\n<p>아이가 피해 사실을 꺼내는 것은 엄청난 용기입니다. 이때 <strong>"왜 그때 말 안 했어?" "거기를 왜 갔어?"</strong> 같은 반응은 아이에게 자책감을 심어줍니다.</p>\n<p>대신 이렇게 말해주세요:</p>\n<ul>\n<li><strong>"말해줘서 고마워, 정말 용감했어"</strong></li>\n<li><strong>"절대 네 잘못이 아니야"</strong></li>\n<li><strong>"엄마(아빠)가 지켜줄게"</strong></li>\n</ul>\n<p>아이가 더 말하고 싶어 하면 들어주되, <strong>"그 사람이 뭘 했어?" 같은 구체적 질문은 하지 마세요</strong>. 전문 면담원이 나중에 적절한 방법으로 진행합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">부모의 말: "네 잘못 아니야" → "말해줘서 고마워" → 구체적 질문 금지</blockquote>',
      },
      {
        title: '둘째, 아이가 한 말을 날짜와 함께 메모하세요',
        content:
          '<p><strong style="color:#1e3a5f">아이가 자발적으로 한 말은 향후 수사와 재판에서 핵심 참고자료가 됩니다</strong></p>\n<p>아이의 말을 <strong>날짜, 시간, 아이가 사용한 정확한 표현</strong> 그대로 메모해두세요. "선생님이 이상한 데를 만졌어"라고 했다면 "이상한 데"라는 아이의 표현을 바꾸지 말고 그대로 적습니다.</p>\n<p>이 메모는 나중에 해바라기센터 면담원에게 전달할 자료가 됩니다. <strong>부모가 아이에게 추가로 질문하거나, 아이의 말을 다른 가족에게 전달하여 반복 진술을 유도하지 마세요.</strong> 진술 오염은 재판에서 가장 치명적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">메모 원칙: 아이의 원래 표현 그대로 → 날짜·시간 기록 → 추가 질문·전달 금지</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-sex-crime" style="color:#1565c0;font-weight:600">아이 성범죄 피해 초기 대응 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 112 신고 후 해바라기센터를 방문하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률 제26조에 따라 피해 아동의 진술은 해바라기센터에서 영상 녹화 방식으로 1회 진행하는 것이 원칙입니다</strong></p>\n<p>112에 신고하면 아동 성범죄 전담팀이 배정되고, <strong>해바라기센터에서 의료 진료, 영상 진술 녹화, 심리상담</strong>을 한 번에 받게 됩니다.</p>\n<p>영상 진술은 전문 면담원이 아동의 발달 수준에 맞춰 진행하며, 이 영상이 재판에서 <strong>주요 증거</strong>로 사용됩니다. 부모는 별도 방에서 대기하며, 아이의 진술 과정에 개입하지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 112 신고 → 해바라기센터 방문 → 영상 진술 녹화(1회) → 의료·심리 지원</blockquote>',
      },
      {
        title: '넷째, 피해아동 국선변호사를 선임하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률 제30조에 따라 19세 미만 성범죄 피해자에게는 무료 국선변호사가 선임됩니다</strong></p>\n<p>국선변호사는 수사 단계부터 재판까지 <strong>피해 아동의 권리를 대변</strong>합니다. 신고 시 경찰에 국선변호사 선임을 요청하면 자동 배정됩니다.</p>\n<p>국선변호사가 하는 일:</p>\n<ul>\n<li>수사기관 조사 시 <strong>피해 아동 동석</strong></li>\n<li>가해자 측 합의 제안에 대한 <strong>법률 자문</strong></li>\n<li>재판에서 <strong>피해자 의견서 제출</strong> 및 증인 보호 요청</li>\n<li><strong>손해배상 청구</strong> 관련 상담</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">국선변호사: 경찰에 요청 → 무료 배정 → 수사~재판 전 과정 동행</blockquote>',
      },
      {
        title: '다섯째, 아이의 일상을 유지하며 심리치료를 시작하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동 성범죄 피해 이후 전문 심리치료를 빨리 시작할수록 외상 후 스트레스 장애(PTSD) 예방에 효과적입니다</strong></p>\n<p>신고와 수사 절차가 진행되는 동안에도 <strong>아이의 평소 생활 리듬</strong>을 유지해주세요. 갑작스러운 전학이나 이사는 오히려 아이에게 "내가 잘못해서 집이 바뀌었다"는 인식을 심어줄 수 있습니다.</p>\n<p>심리치료 지원 기관:</p>\n<ul>\n<li><strong>해바라기센터</strong> — 무료 심리상담 및 놀이치료 (1899-3075)</li>\n<li><strong>아동보호전문기관</strong> — 가정 내 사후관리 지원 (117)</li>\n<li><strong>정신건강복지센터</strong> — 지역별 무료 심리치료 연계</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">회복 지원: 일상 유지 → 해바라기센터 심리상담 → 장기 치료 연계</blockquote>',
      },
    ],
    cases: [
      {
        title: '딥페이크·합성 성착취물도 아동 성착취물에 해당',
        summary:
          '대법원 2024도17801 사건(2025.08.14 선고)에서 법원은 실제 아동의 얼굴에 다른 신체를 합성한 딥페이크 영상도 아동·청소년성착취물에 해당할 수 있다고 판시하며, 합성물의 외모·신원·제작 경위 등을 종합적으로 고려하여 판단해야 한다고 밝혔습니다.',
        takeaway:
          '온라인에서 아이의 사진이 도용·합성되어 유포된 경우에도 성착취물 범죄로 신고할 수 있습니다. 합성 여부와 관계없이 아이가 등장하는 성적 콘텐츠는 모두 수사 대상입니다.',
      },
    ],
    faq: [
      {
        question: '아이가 말한 내용을 배우자에게 알려도 되나요?',
        answer:
          '양육자 간 공유는 가능하지만, <strong>아이 앞에서 피해 사실을 반복 이야기하거나 감정적 반응을 보이는 것</strong>은 삼가세요. 아이가 자신 때문에 부모가 힘들어한다고 느끼면 더 이상 말하지 않으려 합니다.',
      },
      {
        question: '가해자에게 직접 연락해서 따져도 되나요?',
        answer:
          '<strong>절대 하지 마세요.</strong> 가해자가 증거를 인멸하거나 도주할 수 있고, 부모의 행동이 오히려 협박이나 강요로 역이용될 위험이 있습니다. 경찰에 맡기세요.',
      },
      {
        question: '신고하면 아이가 법정에 나가야 하나요?',
        answer:
          '해바라기센터에서 촬영한 <strong>영상 진술이 증거로 채택되면 법정 출석 없이도 재판이 진행</strong>됩니다. 법원이 직접 진술이 필요하다고 판단하면 비공개 심리 또는 차폐 시설을 이용합니다.',
      },
      {
        question: '피해 사실을 학교에 알려야 하나요?',
        answer:
          '가해자가 같은 학교 관계자이거나 학교 내에서 발생한 경우 <strong>학교에 알리는 것이 필요</strong>합니다. 그 외의 경우 아이의 의사를 존중하되, 담임교사에게 심리적 배려를 요청할 수 있습니다.',
      },
      {
        question: '아이가 거짓말하는 건 아닌지 확인하고 싶은데요.',
        answer:
          '아동의 성범죄 피해 진술은 <strong>거짓 가능성이 매우 낮습니다</strong>. "정말이야?" 같은 확인 질문은 아이에게 "나를 안 믿는구나"라는 메시지를 전달합니다. 진실 여부는 전문 면담원이 판단합니다.',
      },
    ],
    cta: {
      text: '아동 성범죄 피해 초기 대응 관련 무료 진단받기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '아동성범죄 가이드', href: '/guide/child-sex-crime' },
      { label: '아동성범죄 신고 의무와 절차', href: '/spoke/child-sex-crime/mandatory-reporting-and-procedure' },
      { label: '아동 피해자 2차 피해 방지', href: '/spoke/child-sex-crime/preventing-secondary-harm-to-child' },
      { label: '또래 성폭력 부모 대응', href: '/spoke/child-sex-crime/peer-sexual-violence-parent-response' },
      { label: '아동성범죄 피해 대응 부모용 체크리스트', href: '/spoke/child-sex-crime/parent-response-checklist' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. child-sex-crime / peer-sexual-violence-parent-response
  // ───────────────────────────────────────────
  // 6. child-sex-crime / child-crime-accusation-investigation-response (accused)
  // ───────────────────────────────────────────
  // 7. prostitution / prostitution-arrest-criminal-process
];
