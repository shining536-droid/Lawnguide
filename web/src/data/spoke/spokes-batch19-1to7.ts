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
  {
    domain: 'child-sex-crime',
    slug: 'mandatory-reporting-and-procedure',
    keyword: '아동성범죄 피해 발견 시 신고 의무와 절차',
    questionKeyword: '아동 성범죄 피해를 발견하면 반드시 신고해야 하나요?',
    ctaKeyword: '아동성범죄 신고 의무',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '아동성범죄 신고 의무자 5가지 확인과 절차 3단계 | 로앤가이드',
      description: '아동 성범죄 피해를 발견했는데 신고 의무가 있는지, 어디에 어떻게 신고해야 하는지 막막하다면 3단계 절차를 지금 확인하세요.',
    },
    intro:
      '학교에서 아이의 행동이 달라졌다는 연락을 받았습니다. 혹시 성범죄 피해가 아닐까 의심이 드는데, 확신이 없어도 신고해야 하는 건지, 신고하면 어떤 절차가 진행되는 건지 알 수 없어 망설여집니다. 아동 성범죄는 의심 단계에서도 신고 의무가 있으며, 빠른 신고가 아이를 지키는 첫걸음입니다.',
    timelineSteps: [
      '신고 의무자 확인 및 즉시 신고',
      '수사기관 접수 및 피해아동 보호조치',
      '영상 진술·증거 확보 및 사건 진행',
    ],
    sections: [
      {
        title: '1단계 — 신고 의무자 범위를 확인하고 즉시 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률 제34조에 따라 교사, 의사, 학원 관계자 등 25개 직군은 아동 성범죄 의심 시 즉시 신고할 의무가 있습니다</strong></p>\n<p>신고 의무자는 아동·청소년 대상 성범죄 발생 사실을 알게 된 때 <strong>즉시 수사기관에 신고</strong>해야 합니다. 신고 의무를 위반하면 300만 원 이하의 과태료가 부과됩니다. 의무자가 아니더라도 누구나 신고할 수 있습니다.</p>\n<p><strong>신고 방법 3가지:</strong></p>\n<ul>\n<li><strong>112 경찰 신고</strong> — 긴급 상황이거나 가해자가 근처에 있을 때</li>\n<li><strong>117 아동학대 신고전화</strong> — 아동보호전문기관 연결</li>\n<li><strong>경찰서 직접 방문</strong> — 구술 또는 서면으로 신고 가능</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 확신이 없어도 의심 단계에서 신고 가능 → 112·117·경찰서 방문</blockquote>',
      },
      {
        title: '2단계 — 수사기관이 접수하면 피해아동 보호조치가 시작됩니다',
        content:
          '<p><strong style="color:#1e3a5f">신고 접수 후 경찰은 48시간 이내에 현장 조사를 실시하고, 피해아동에 대한 응급보호조치를 취합니다</strong></p>\n<p>신고가 접수되면 경찰은 <strong>피해아동의 안전 확보</strong>를 최우선으로 합니다. 가해자와 분리 조치, 의료기관 연계, 아동보호전문기관 통보가 동시에 진행됩니다.</p>\n<p>부모 또는 보호자는 <strong>피해아동 국선변호사 제도</strong>를 활용할 수 있습니다. 아동·청소년의 성보호에 관한 법률 제30조에 따라 19세 미만 피해자에게는 국선변호사가 무료로 선임됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보호조치: 가해자 분리 → 의료기관 연계 → 국선변호사 무료 선임</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-sex-crime" style="color:#1565c0;font-weight:600">아동성범죄 신고 후 절차 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 아이의 영상 진술 녹화와 증거 확보가 진행됩니다',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률 제26조에 따라 19세 미만 피해자의 진술은 영상녹화 방식으로 1회 실시하는 것이 원칙입니다</strong></p>\n<p>아동 피해자는 <strong>해바라기센터(아동 전담)</strong>에서 전문 면담원이 진행하는 영상 진술 녹화를 받게 됩니다. 이 영상은 재판에서 증거로 사용되므로, 아이가 반복 진술로 인한 2차 피해를 겪지 않도록 합니다.</p>\n<p>부모는 진술 전에 <strong>아이에게 미리 질문하거나 답변을 유도하지 마세요</strong>. 전문가가 아닌 사람의 사전 질문은 진술의 신빙성을 떨어뜨려 재판에서 불리하게 작용할 수 있습니다. 아이가 자발적으로 말한 내용은 메모해 두되, 추가 질문은 삼가세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 보전: 해바라기센터 영상 녹화 → 부모의 사전 질문·유도 금지 → 자발적 진술 메모만</blockquote>',
      },
      {
        title: '신고 후 보호자가 반드시 챙겨야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">신고 이후에도 보호자의 역할이 아이의 회복과 사건 진행에 결정적 영향을 미칩니다</strong></p>\n<ul>\n<li><strong>아이의 일상 유지</strong> — 갑작스러운 전학이나 환경 변화보다 평소 생활 리듬을 유지하는 것이 심리 안정에 도움됩니다</li>\n<li><strong>심리치료 연계</strong> — 여성가족부 산하 해바라기센터에서 무료 심리상담을 받을 수 있습니다 (전화 1899-3075)</li>\n<li><strong>피해자 진술 조력인 요청</strong> — 13세 미만 아동의 경우 법원에 진술 조력인 배치를 신청할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보호자 체크: 일상 유지 → 해바라기센터 심리치료 → 진술 조력인 요청</blockquote>',
      },
    ],
    cases: [
      {
        title: '아동·청소년 성착취물 제작 — 동의 여부 불문 형사책임 성립',
        summary:
          '대법원 2025도7992 사건(2025.08.14 선고)에서 법원은 아동·청소년이 등장하여 성적 행위를 하는 영상물은 대상 아동의 동의 아래 촬영하였거나 사적 소지 목적으로 제작한 것이더라도 아동·청소년성착취물 제작에 해당한다고 판시했습니다.',
        takeaway:
          '아이가 "동의했다"거나 "장난이었다"는 가해자의 주장은 법적으로 통하지 않습니다. 피해 사실을 인지하는 즉시 증거를 확보하고 신고하세요.',
      },
    ],
    faq: [
      {
        question: '확실한 증거 없이 의심만으로도 신고해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 아동학대범죄의 처벌 등에 관한 특례법에 따라 의심 단계에서도 신고할 수 있으며, 결과적으로 혐의가 없더라도 선의의 신고자는 불이익을 받지 않습니다.',
      },
      {
        question: '신고 의무자가 신고하지 않으면 어떤 처벌을 받나요?',
        answer:
          '아동·청소년의 성보호에 관한 법률 제34조 제2항에 따라 <strong>300만 원 이하의 과태료</strong>가 부과됩니다. 반복 위반 시 가중됩니다.',
      },
      {
        question: '신고하면 아이의 신상이 알려지나요?',
        answer:
          '<strong>피해 아동의 신원은 철저히 보호됩니다.</strong> 법률에 따라 피해자의 인적사항이나 사진을 공개하거나 보도하는 것은 금지되어 있으며, 위반 시 형사처벌 대상입니다.',
      },
      {
        question: '가해자가 아이의 가족인 경우에도 신고해야 하나요?',
        answer:
          '가해자가 부모나 친족이더라도 <strong>신고 의무는 동일하게 적용</strong>됩니다. 아동보호전문기관(117)에 먼저 상담하면 안전한 분리 조치와 함께 절차가 진행됩니다.',
      },
      {
        question: '해바라기센터에서는 어떤 지원을 받을 수 있나요?',
        answer:
          '<strong>의료·법률·심리 원스톱 지원</strong>을 받을 수 있습니다. 응급 의료 처치, 증거 채취, 영상 진술 녹화, 심리상담까지 한 곳에서 제공됩니다 (전화 1899-3075).',
      },
    ],
    cta: {
      text: '아동성범죄 신고 의무 관련 무료 진단받기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '아동성범죄 가이드', href: '/guide/child-sex-crime' },
      { label: '아이가 피해를 말했을 때 어디부터', href: '/spoke/child-sex-crime/child-disclosed-abuse-where-to-start' },
      { label: '온라인 그루밍 피해 의심 징후와 대응법', href: '/spoke/child-sex-crime/online-grooming-warning-signs' },
      { label: '아동성범죄 피해 대응 부모용 체크리스트', href: '/spoke/child-sex-crime/parent-response-checklist' },
      { label: '아동 피해자 2차 피해 방지', href: '/spoke/child-sex-crime/preventing-secondary-harm-to-child' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. child-sex-crime / academy-teacher-molestation-response
  // ───────────────────────────────────────────
  {
    domain: 'child-sex-crime',
    slug: 'academy-teacher-molestation-response',
    keyword: '학원 강사에 의한 아동 성추행 발견 시 대처',
    questionKeyword: '학원 선생님이 아이를 성추행한 것 같은데 어떻게 해야 하나요?',
    ctaKeyword: '학원 강사 성추행 대처',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '학원 강사 아동 성추행 발견 시 대처 4단계 | 로앤가이드',
      description: '학원 강사가 아이를 성추행한 것 같다면 증거 확보부터 신고, 학원 측 대응까지 부모가 해야 할 4단계를 지금 확인하세요.',
    },
    intro:
      '아이가 학원에 가기 싫다고 합니다. 이유를 물으니 선생님이 이상한 행동을 했다고 조심스럽게 말합니다. 분노와 걱정이 동시에 밀려오지만, 지금 부모가 어떻게 대응하느냐에 따라 아이의 피해 회복과 가해자 처벌이 결정됩니다. 차분하게 단계별로 대처하세요.',
    sections: [
      {
        title: '첫째, 아이의 말을 경청하되 반복 질문은 삼가세요',
        content:
          '<p><strong style="color:#1e3a5f">아동복지법 제17조 제2호에 따라 아동에게 성적 수치심을 주는 행위는 성적 학대에 해당합니다</strong></p>\n<p>아이가 말을 꺼내면 <strong>"네가 잘못한 게 아니야"라고 먼저 안심</strong>시켜주세요. 그 자리에서 세부 질문을 반복하면 아이의 진술 신빙성이 떨어질 수 있으므로, 아이가 자발적으로 말하는 내용만 메모하세요.</p>\n<p>아이의 말을 <strong>날짜, 장소, 구체적 행위</strong> 중심으로 메모하되, "선생님이 어디를 만졌어?" 같은 유도 질문은 절대 하지 마세요. 추후 해바라기센터에서 전문 면담원이 진행합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 안심시키기 → 자발적 진술 메모 → 유도 질문·반복 질문 금지</blockquote>',
      },
      {
        title: '둘째, 학원 측에 알리기 전에 증거부터 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">학원에 먼저 알리면 가해자가 증거를 인멸하거나 도주할 수 있으므로, 경찰 신고가 우선입니다</strong></p>\n<p>감정적으로 학원에 항의하고 싶겠지만, <strong>경찰 신고 전에 학원 측에 알리면</strong> CCTV 삭제, 다른 학생 진술 방해 등 증거 인멸이 발생할 수 있습니다.</p>\n<p>확보해야 할 증거 목록:</p>\n<ul>\n<li><strong>학원 출석 기록</strong> — 피해 발생 시기 특정에 필요</li>\n<li><strong>아이와 강사 간 메시지</strong> — 카카오톡, 문자 등 캡처 후 원본 보관</li>\n<li><strong>학원 CCTV</strong> — 경찰에 압수수색 영장 요청 (보통 30일 후 삭제됨)</li>\n<li><strong>다른 피해 아동 여부</strong> — 같은 반 학부모에게 조심스럽게 확인</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 증거 확보 → 경찰 신고 → 학원 통보 (역순 금지)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-sex-crime" style="color:#1565c0;font-weight:600">학원 강사 성추행 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 112 신고 후 해바라기센터에서 전문 지원을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">학원 강사는 아동·청소년의 성보호에 관한 법률상 신고의무자이지만, 자신이 가해자인 경우 자진신고를 기대하기 어렵습니다</strong></p>\n<p>112에 신고하면 아동 성범죄 전담 수사팀이 배정됩니다. 신고 시 <strong>피해 아동의 나이, 학원명, 강사 인적사항, 피해 추정 시기</strong>를 전달하세요. 이후 해바라기센터에서 영상 진술 녹화, 의료 검진, 심리상담을 한 번에 받을 수 있습니다.</p>\n<p>진술 녹화는 <strong>1회 원칙</strong>으로 진행되며, 이 영상이 재판에서 핵심 증거가 됩니다. 부모도 아이와 별도로 참고인 진술을 하게 되므로, 아이가 집에서 했던 말, 행동 변화, 시기 등을 정리해 가세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 절차: 112 신고 → 전담 수사팀 배정 → 해바라기센터 원스톱 지원</blockquote>',
      },
      {
        title: '넷째, 학원 측의 책임과 민사 손해배상을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">학원 원장은 학원의 설립·운영 및 과외교습에 관한 법률에 따라 관리감독 의무가 있으며, 학원 측에도 민사상 사용자 배상책임이 발생할 수 있습니다</strong></p>\n<p>형사 신고와 별개로 <strong>학원 법인과 원장 개인</strong>을 상대로 민사 손해배상 청구가 가능합니다. 민법 제756조 사용자 배상책임에 따라 학원은 강사의 불법행위에 대해 연대 배상할 의무가 있습니다.</p>\n<p>또한 관할 교육청에 <strong>학원 행정처분(영업정지·등록취소)</strong>을 요청할 수 있습니다. 교육청은 성범죄 발생 학원에 대해 6개월 이내 영업정지 또는 등록 말소 처분을 내릴 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">민사 대응: 학원·원장 대상 손해배상 → 교육청 행정처분 요청 → 강사 취업제한 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '메시지를 통한 아동 성희롱 — 메시지 도달만으로 범죄 성립',
        summary:
          '대법원 2025도3890 사건(2025.07.18 선고)에서 법원은 성적 학대에 해당하는 메시지가 피해 아동의 휴대전화에 도달하여 접근할 수 있는 상태가 되었다면, 아동이 실제로 확인하지 않았더라도 아동복지법 위반죄의 기수가 성립한다고 판시했습니다.',
        takeaway:
          '강사가 아이에게 보낸 부적절한 메시지는 아이가 읽지 않았더라도 범죄 증거가 됩니다. 메시지를 삭제하지 말고 전체 화면을 캡처하여 보관하세요.',
      },
    ],
    faq: [
      {
        question: '학원 CCTV가 삭제되기 전에 확보하려면 어떻게 하나요?',
        answer:
          '경찰에 신고하면 수사기관이 <strong>압수수색 영장을 발부받아 CCTV를 확보</strong>합니다. 학원 CCTV는 보통 30일 이내에 덮어쓰기되므로, 피해 인지 즉시 신고하는 것이 중요합니다.',
      },
      {
        question: '학원에서 합의를 제안하면 받아들여야 하나요?',
        answer:
          '형사 고소를 취하하는 조건의 합의는 <strong>신중하게 판단</strong>하세요. 아동 성범죄는 친고죄가 아니므로 고소를 취하해도 검찰이 기소할 수 있습니다. 합의 여부와 관계없이 형사 절차는 별도로 진행됩니다.',
      },
      {
        question: '다른 피해 아동이 있을 수 있는데, 어떻게 확인하나요?',
        answer:
          '같은 반 학부모에게 <strong>아이의 행동 변화를 관찰해달라고 조심스럽게 요청</strong>할 수 있습니다. 다만 수사에 지장을 줄 수 있으므로, 구체적인 혐의 내용을 공유하기보다 경찰에 추가 피해자 조사를 요청하는 것이 바람직합니다.',
      },
      {
        question: '아이가 학원을 그만둬야 하나요?',
        answer:
          '가해 강사와의 접촉을 즉시 차단하는 것이 최우선입니다. <strong>해당 강사가 퇴직 처리될 때까지는 학원을 쉬게 하는 것</strong>이 안전합니다. 학원 변경 시 아이의 심리적 부담도 고려하세요.',
      },
      {
        question: '강사가 "장난이었다"고 주장하면 어떻게 되나요?',
        answer:
          '아동에 대한 성적 학대는 <strong>가해자의 의도와 관계없이 객관적 행위 기준</strong>으로 판단됩니다. 법원은 행위의 외형, 아동의 나이, 관계의 특수성을 종합적으로 고려합니다.',
      },
    ],
    cta: {
      text: '학원 강사 성추행 관련 무료 진단받기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '아동성범죄 가이드', href: '/guide/child-sex-crime' },
      { label: '아동성범죄 신고 의무와 절차', href: '/spoke/child-sex-crime/mandatory-reporting-and-procedure' },
      { label: '아이가 피해를 말했을 때 어디부터', href: '/spoke/child-sex-crime/child-disclosed-abuse-where-to-start' },
      { label: '아동 피해자 2차 피해 방지', href: '/spoke/child-sex-crime/preventing-secondary-harm-to-child' },
      { label: '아동성범죄 피해 대응 부모용 체크리스트', href: '/spoke/child-sex-crime/parent-response-checklist' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. child-sex-crime / online-grooming-warning-signs
  // ───────────────────────────────────────────
  {
    domain: 'child-sex-crime',
    slug: 'online-grooming-warning-signs',
    keyword: '온라인 그루밍 피해 의심 징후와 대응법',
    questionKeyword: '아이가 온라인 그루밍 피해를 당하고 있는 것 같은데 어떤 징후를 봐야 하나요?',
    ctaKeyword: '온라인 그루밍 대응',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '온라인 그루밍 의심 징후 6가지와 부모 대응 3단계 | 로앤가이드',
      description: '자녀가 온라인에서 낯선 사람과 연락하며 행동이 달라졌다면, 그루밍 징후 6가지와 증거 확보 방법을 지금 확인하세요.',
    },
    intro:
      '중학생 아이가 요즘 휴대폰을 감추고, 밤늦게까지 메시지를 주고받습니다. 누구냐고 물으면 화를 내며 방문을 잠급니다. 혹시 온라인 그루밍 피해는 아닌지, 어디까지가 사춘기이고 어디부터가 위험 신호인지 구분하기 어렵습니다. 의심 징후를 알면 빠르게 대응할 수 있습니다.',
    sections: [
      {
        title: '그루밍이란 — 아이의 신뢰를 이용해 성적 착취로 이어가는 과정입니다',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률 제15조의2(성착취 목적 대화 등)에 따라 아동·청소년에게 성적 착취를 목적으로 접근하는 행위 자체가 처벌 대상입니다</strong></p>\n<p>온라인 그루밍은 가해자가 SNS, 게임, 채팅앱 등을 통해 아이에게 <strong>우호적 관계를 형성한 뒤 점차 성적 대화, 사진·영상 요구, 오프라인 만남</strong>으로 발전시키는 범죄입니다.</p>\n<p>2021년 법 개정 이후, 성적 착취 목적의 대화 자체만으로도 <strong>3년 이하의 징역 또는 3천만 원 이하의 벌금</strong>에 처해집니다. 실제 만남이나 성관계가 없어도 처벌이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 그루밍 대화 자체가 범죄 → 만남·성관계 없어도 처벌 가능</blockquote>',
      },
      {
        title: '의심해야 할 6가지 행동 변화',
        content:
          '<p><strong style="color:#1e3a5f">다음 징후가 2~3개 이상 동시에 나타나면 그루밍 피해를 의심하세요</strong></p>\n<ul>\n<li><strong>휴대폰을 숨기거나 잠금을 강화</strong>했다 — 가해자가 "우리만의 비밀"을 강요하는 전형적 패턴</li>\n<li><strong>설명하기 어려운 선물·용돈</strong>이 생겼다 — 기프티콘, 게임 아이템, 소액 송금 등</li>\n<li><strong>밤늦게까지 통화나 영상통화</strong>를 한다 — 부모가 잠든 시간에 접촉하는 것이 그루밍의 특징</li>\n<li><strong>갑자기 성적인 단어나 행동</strong>을 보인다 — 나이에 맞지 않는 성 지식이나 표현</li>\n<li><strong>특정 앱을 삭제하거나 계정을 바꿨다</strong> — 가해자의 지시로 흔적을 지우는 경우</li>\n<li><strong>우울·불안·자해 행동</strong>이 나타난다 — 협박 단계에 진입했을 가능성</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크리스트: 2~3개 이상 해당 시 즉시 대응 필요</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-sex-crime" style="color:#1565c0;font-weight:600">온라인 그루밍 피해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '증거 확보 — 아이 몰래 확인하지 말고, 디지털 흔적을 보존하세요',
        content:
          '<p><strong style="color:#1e3a5f">수사기관은 디지털 증거의 원본 무결성을 중시하므로, 부모가 직접 메시지를 삭제하거나 캡처만 하는 것보다 원본 보존이 중요합니다</strong></p>\n<p>아이의 휴대폰을 몰래 확인하면 <strong>아이와의 신뢰가 무너져 진술을 거부</strong>할 수 있습니다. 대신 다음 방법으로 증거를 보존하세요:</p>\n<ul>\n<li><strong>아이가 사용하는 앱 목록</strong>을 확인 (텔레그램, 디스코드, 인스타 DM 등)</li>\n<li><strong>와이파이 라우터 접속 기록</strong> — 접속한 사이트 URL 확인 가능</li>\n<li><strong>앱 알림 화면</strong>을 사진으로 촬영 (잠금 화면에 뜨는 메시지 미리보기)</li>\n<li><strong>경찰 신고 후 디지털 포렌식 요청</strong> — 삭제된 메시지도 복구 가능</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 보존: 원본 훼손 금지 → 앱 목록·알림 화면 촬영 → 경찰 포렌식 요청</blockquote>',
      },
      {
        title: '신고와 전문 지원 — 경찰과 디지털 성범죄 전담기관에 연락하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 사이버수사국과 디지털성범죄피해자지원센터가 온라인 그루밍 사건을 전담합니다</strong></p>\n<p>신고 경로는 두 가지입니다:</p>\n<ul>\n<li><strong>112 경찰 신고</strong> — 즉시 사이버수사팀으로 배정되며, 가해자 IP 추적과 계정 압수수색이 시작됩니다</li>\n<li><strong>디지털성범죄피해자지원센터 (02-735-8994)</strong> — 유포 영상물 삭제 지원, 법률 상담, 심리 지원을 제공합니다</li>\n</ul>\n<p>아이가 이미 <strong>성착취물(사진·영상)을 보낸 상태</strong>라면 유포 차단이 시급합니다. 디지털성범죄피해자지원센터에서 삭제 대행을 지원하며, 방송통신심의위원회를 통해 유통 차단 명령을 내릴 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 112 → 사이버수사팀 배정 / 디지털성범죄피해자지원센터 → 영상 삭제·유포 차단</blockquote>',
      },
    ],
    cases: [
      {
        title: '디지털 성범죄 수색 범위 — 동종 범행 간접증거도 압수 가능',
        summary:
          '대법원 2023도11395 사건(2025.06.12 선고)에서 법원은 디지털 성범죄 수사 시 혐의사실과 같거나 근접한 시기의 동종 유형 디지털 성범죄 관련 전자정보에 대해서도 압수수색의 관련성이 인정될 수 있다고 판시했습니다.',
        takeaway:
          '가해자의 휴대폰에서 우리 아이 외에 다른 피해자 관련 증거도 함께 압수할 수 있습니다. 경찰에 디지털 포렌식을 적극 요청하면 추가 피해 사실도 밝혀질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '아이가 자발적으로 사진을 보냈다고 하는데, 그래도 범죄인가요?',
        answer:
          '<strong>19세 미만 아동·청소년이 보낸 성적 사진·영상은 상대방이 요청·유도한 것이라면 성착취물 제작에 해당</strong>합니다. 아동의 "동의"는 법적으로 유효하지 않습니다.',
      },
      {
        question: '가해자가 또래 청소년인 경우에도 처벌되나요?',
        answer:
          '14세 이상 청소년은 <strong>형사 처벌 대상</strong>이며, 14세 미만이라도 소년법에 따라 보호처분을 받을 수 있습니다. 나이와 관계없이 신고하세요.',
      },
      {
        question: '텔레그램 비밀대화방의 메시지도 복구할 수 있나요?',
        answer:
          '텔레그램 비밀대화는 서버에 저장되지 않아 복구가 어렵지만, <strong>수신 측 기기의 디지털 포렌식</strong>으로 일부 복구가 가능한 경우가 있습니다. 휴대폰을 초기화하지 않는 것이 중요합니다.',
      },
      {
        question: '아이가 협박을 받고 있는 것 같은데 즉시 신고해도 되나요?',
        answer:
          '<strong>지금 바로 112에 신고하세요.</strong> 협박 단계는 피해가 급격히 확대되는 시점입니다. 경찰이 즉시 개입하여 가해자 접근을 차단하고 아이를 보호할 수 있습니다.',
      },
      {
        question: '부모가 아이 계정에 접속해서 증거를 수집해도 되나요?',
        answer:
          '미성년 자녀의 계정에 부모가 접속하는 것은 <strong>법적으로 허용되지만, 수사 과정에서 증거 오염 주장</strong>이 나올 수 있습니다. 가급적 경찰에 포렌식을 요청하고, 부모는 잠금 화면 알림이나 앱 목록만 촬영하세요.',
      },
    ],
    cta: {
      text: '온라인 그루밍 관련 무료 진단받기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '아동성범죄 가이드', href: '/guide/child-sex-crime' },
      { label: '아동성범죄 신고 의무와 절차', href: '/spoke/child-sex-crime/mandatory-reporting-and-procedure' },
      { label: '학원 강사 성추행 발견 시 대처', href: '/spoke/child-sex-crime/academy-teacher-molestation-response' },
      { label: '아이가 피해를 말했을 때 어디부터', href: '/spoke/child-sex-crime/child-disclosed-abuse-where-to-start' },
      { label: '아동 피해자 2차 피해 방지', href: '/spoke/child-sex-crime/preventing-secondary-harm-to-child' },
    ],
  },

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
  {
    domain: 'child-sex-crime',
    slug: 'peer-sexual-violence-parent-response',
    keyword: '아이가 또래에게 성폭력 당했을 때 부모 대응',
    questionKeyword: '같은 반 친구에게 성폭력을 당한 아이, 부모가 어떻게 대응해야 하나요?',
    ctaKeyword: '또래 성폭력 부모 대응',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '또래 성폭력 피해 시 부모 대응 4단계 — 신고부터 학교 조치 | 로앤가이드',
      description: '자녀가 또래 친구에게 성폭력 피해를 당했는데 가해자가 미성년자라 어떻게 해야 할지 모르겠다면, 부모 대응 4단계를 지금 확인하세요.',
    },
    intro:
      '아이가 같은 반 친구에게 성폭력을 당했다고 합니다. 가해자도 아이인데 형사 신고가 되는 건지, 학교에는 어떻게 말해야 하는 건지, 두 아이가 같은 교실에 계속 있어야 하는 건지, 모든 게 혼란스럽습니다. 또래 간 성폭력은 일반 성범죄와 대응 방식이 다르므로 정확한 절차를 확인하세요.',
    sections: [
      {
        title: '첫째, 또래 간 성폭력도 형사 신고 대상입니다',
        content:
          '<p><strong style="color:#1e3a5f">가해자가 14세 이상이면 형사처벌이 가능하고, 10세 이상 14세 미만이면 소년보호처분 대상입니다</strong></p>\n<p>"아이들끼리 한 일"이라고 넘기면 안 됩니다. <strong>형법 제9조</strong>에 따라 14세 이상은 형사미성년자가 아니므로 성범죄로 처벌됩니다. 10세 이상 14세 미만은 <strong>소년법에 따른 보호처분</strong>(소년원 송치, 사회봉사, 보호관찰 등)을 받습니다.</p>\n<p>10세 미만은 형사·보호 처분 모두 불가하지만, <strong>아동보호전문기관을 통해 가해 아동의 교육·치료 조치</strong>를 요청할 수 있고, 민사 손해배상은 가해 아동의 부모에게 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">연령별 대응: 14세+ → 형사처벌 / 10~13세 → 소년보호처분 / 10세 미만 → 민사·교육 조치</blockquote>',
      },
      {
        title: '둘째, 학교에 학교폭력 신고를 하고 긴급 분리를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방 및 대책에 관한 법률 제16조에 따라 피해 학생은 가해 학생과 즉시 분리될 권리가 있습니다</strong></p>\n<p>학교에 <strong>학교폭력 신고</strong>를 하면 학교장은 피해 학생 보호를 위해 가해 학생에 대한 <strong>긴급조치(출석정지, 학급교체)</strong>를 즉시 시행해야 합니다. 교감이나 담임에게 구두로 알린 뒤 반드시 <strong>서면으로도 학교폭력 신고서를 제출</strong>하세요.</p>\n<p>학교폭력 심의위원회(교육지원청)에서 가해 학생에 대한 조치를 결정합니다. 성폭력 사안의 경우 <strong>전학 조치</strong>까지 가능하며, 피해 학생에게는 심리상담, 일시보호, 치료비 지원 등의 보호조치가 내려집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">학교 대응: 학교폭력 신고서 제출 → 긴급 분리 조치 요청 → 심의위원회 처분</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-sex-crime" style="color:#1565c0;font-weight:600">또래 성폭력 피해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 형사 신고와 학교폭력 절차를 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 학교폭력 심의는 별개로 진행되며, 두 절차를 동시에 진행하는 것이 가장 효과적입니다</strong></p>\n<p><strong>112 경찰 신고</strong>를 통해 형사 절차를 시작하면서, 학교에는 학교폭력 신고를 별도로 제출하세요. 형사 절차에서는 가해 학생의 처벌(또는 보호처분)이, 학교폭력 절차에서는 가해 학생의 교내 조치가 결정됩니다.</p>\n<p>경찰 수사 결과가 나오기 전에도 학교폭력 심의위원회는 <strong>독립적으로 조치를 결정</strong>할 수 있으므로, 가해 학생 분리를 위해 학교 절차를 서두르세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">병행 전략: 112 형사 신고 + 학교폭력 신고 동시 진행 → 각각 독립적 처분</blockquote>',
      },
      {
        title: '넷째, 가해 측 부모와 직접 대면하지 말고 법적 절차를 이용하세요',
        content:
          '<p><strong style="color:#1e3a5f">감정적 대면은 오히려 불리한 결과를 초래할 수 있으므로, 모든 소통은 서면이나 변호인을 통해 하세요</strong></p>\n<p>가해 측 부모와 직접 만나면 <strong>합의 압박, 감정 충돌, 녹음 등</strong>으로 상황이 복잡해질 수 있습니다. 특히 "아이들끼리 한 건데" "우리 아이가 그럴 리 없다"는 반응에 감정적으로 대응하면 불리합니다.</p>\n<p>손해배상(치료비, 위자료)은 <strong>민사소송으로 가해 학생의 부모</strong>에게 청구합니다. 민법 제750조와 제755조에 따라 미성년자의 불법행위에 대해 부모가 감독 의무 위반 책임을 집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 가해 부모 직접 대면 금지 → 변호인·서면 소통 → 민사 손해배상 별도 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '아동 대상 영상통화 중 성적 행위 강요 — 성적 학대 인정',
        summary:
          '대법원 2020도12419 사건(2022.07.28 선고)에서 법원은 피고인이 15세 피해아동과 영상통화를 하면서 가슴 노출을 요구하고 자위행위를 보여준 행위가 아동복지법상 성적 학대행위에 해당한다고 판시했습니다.',
        takeaway:
          '또래 간 영상통화나 채팅에서 발생하는 성적 행위 강요도 법적으로 아동 학대에 해당합니다. 온라인·오프라인 구분 없이 아이가 피해를 호소하면 즉시 신고하세요.',
      },
    ],
    faq: [
      {
        question: '가해 학생이 14세 미만인데 아무 처벌도 못 받나요?',
        answer:
          '형사처벌은 불가하지만, 10세 이상이면 <strong>소년법에 따라 보호처분(소년원, 보호관찰, 사회봉사)</strong>을 받습니다. 학교폭력 심의를 통해 전학·퇴학 조치도 가능합니다.',
      },
      {
        question: '학교가 사건을 축소하려고 하면 어떻게 하나요?',
        answer:
          '학교가 신고를 접수하지 않거나 은폐하려 하면 <strong>관할 교육지원청에 직접 학교폭력 신고</strong>를 하세요. 교육청 신고전화 117번 또는 교육부 학교폭력 신고센터를 이용할 수 있습니다.',
      },
      {
        question: '우리 아이가 전학을 가야 하는 건 아닌가요?',
        answer:
          '법적으로 <strong>전학 대상은 가해 학생</strong>입니다. 피해 학생이 전학을 원하는 경우에만 피해 학생의 전학이 지원되며, 이때 전학 비용과 통학 지원을 받을 수 있습니다.',
      },
      {
        question: '가해 부모에게 치료비를 청구할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 민법 제755조에 따라 미성년자의 감독 의무를 게을리한 부모에게 치료비, 상담비, 위자료를 청구할 수 있습니다. 학교폭력 심의에서도 가해 측 비용 부담을 결정할 수 있습니다.',
      },
      {
        question: '아이가 같은 반 친구와 계속 마주쳐야 하나요?',
        answer:
          '학교폭력 신고 즉시 <strong>학교장 긴급조치로 가해 학생 출석정지 또는 학급교체</strong>가 가능합니다. 심의위원회 결정 전에도 긴급조치를 요청할 수 있으므로, 신고 시 반드시 분리를 요구하세요.',
      },
    ],
    cta: {
      text: '또래 성폭력 관련 무료 진단받기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '아동성범죄 가이드', href: '/guide/child-sex-crime' },
      { label: '아동성범죄 신고 의무와 절차', href: '/spoke/child-sex-crime/mandatory-reporting-and-procedure' },
      { label: '아이가 피해를 말했을 때 어디부터', href: '/spoke/child-sex-crime/child-disclosed-abuse-where-to-start' },
      { label: '학원 강사 성추행 발견 시 대처', href: '/spoke/child-sex-crime/academy-teacher-molestation-response' },
      { label: '아동 피해자 2차 피해 방지', href: '/spoke/child-sex-crime/preventing-secondary-harm-to-child' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. child-sex-crime / child-crime-accusation-investigation-response (accused)
  // ───────────────────────────────────────────
  {
    domain: 'child-sex-crime',
    slug: 'child-crime-accusation-investigation-response',
    keyword: '아동성범죄 혐의 수사 대응',
    questionKeyword: '아동성범죄 혐의로 수사를 받게 되었는데 어떻게 대응해야 하나요?',
    ctaKeyword: '아동성범죄 혐의 대응',
    type: '어디부터형',
    perspective: '가해자',
    meta: {
      title: '아동성범죄 혐의 수사 대응 5단계 — 출석 전 준비 | 로앤가이드',
      description: '아동성범죄 혐의로 경찰 출석 요구를 받았다면, 변호인 선임부터 진술 전략까지 대응 5단계를 지금 확인하세요.',
    },
    intro:
      '어느 날 갑자기 경찰에서 연락이 왔습니다. 아동·청소년 대상 성범죄 혐의로 조사를 받아야 한다는 겁니다. 혐의를 받고 있다면, 당황한 채로 경찰서에 가는 것은 최악의 선택입니다. 출석 전 준비가 사건의 결과를 좌우합니다.',
    sections: [
      {
        title: '첫째, 적용 죄명과 법정형을 정확히 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률은 일반 성범죄보다 법정형이 높고, 부수적 처분(신상공개·취업제한·전자장치 부착)이 함께 부과됩니다</strong></p>\n<p>출석요구서에 기재된 <strong>죄명</strong>을 반드시 확인하세요. 같은 "아동 대상 성범죄"라도 강제추행, 성착취물 소지, 통신매체 이용 음란 등 혐의에 따라 법정형이 크게 다릅니다.</p>\n<p>주요 법정형 비교:</p>\n<ul>\n<li><strong>아동·청소년 강제추행</strong> — 2년 이상 유기징역 또는 1천만 원 이상 3천만 원 이하 벌금</li>\n<li><strong>성착취물 소지</strong> — 1년 이상 유기징역</li>\n<li><strong>통신매체 이용 음란</strong> — 2년 이하 징역 또는 2천만 원 이하 벌금</li>\n<li><strong>성착취물 제작</strong> — 무기징역 또는 5년 이상 유기징역</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 출석요구서 죄명 → 해당 법정형 → 부수 처분 범위 파악</blockquote>',
      },
      {
        title: '둘째, 성범죄 전문 변호인을 반드시 선임하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동 성범죄는 중범죄이며, 첫 진술이 이후 재판 결과를 결정짓는 경우가 많습니다</strong></p>\n<p>아동 성범죄 수사는 <strong>디지털 포렌식, 피해자 진술 분석, CCTV 검증</strong> 등 전문적 영역이 많습니다. 일반 형사 변호사가 아닌 <strong>성범죄 전문 변호사</strong>를 선임하세요.</p>\n<p>변호인과 준비할 사항:</p>\n<ul>\n<li>혐의 사실 중 <strong>인정할 부분과 다툴 부분</strong> 구분</li>\n<li>디지털 증거의 <strong>압수수색 적법성</strong> 검토</li>\n<li><strong>알리바이 증거</strong>, 통신 기록, 위치 기록 확보</li>\n<li>진술 시 <strong>진술거부권 행사 범위</strong> 결정</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변호인 준비: 전문 변호사 선임 → 인정/부인 구분 → 증거 적법성 검토</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-sex-crime" style="color:#1565c0;font-weight:600">아동성범죄 혐의 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 경찰 조사에서 진술거부권과 변호인 동석권을 행사하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제244조의3에 따라 피의자는 진술을 거부할 권리가 있고, 제243조의2에 따라 변호인의 조사 동석을 요구할 수 있습니다</strong></p>\n<p>조사실에서 수사관이 <strong>"솔직하게 말하면 유리하다"</strong>고 하더라도 즉흥적 답변은 위험합니다. 특히 아동 성범죄 사건에서는 피의자의 진술 한마디가 구속 여부를 결정할 수 있습니다.</p>\n<p>진술 시 지켜야 할 원칙:</p>\n<ul>\n<li><strong>변호인과 사전 합의한 범위</strong>만 답변</li>\n<li>기억이 불확실한 부분은 <strong>"정확히 기억나지 않습니다"</strong>로 일관</li>\n<li>수사관의 추정적 질문에 동의하지 마세요</li>\n<li>조서 서명 전 <strong>전문을 읽고 수정 요청</strong></li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 원칙: 변호인 동석 → 사전 합의 범위 내 답변 → 조서 전문 확인</blockquote>',
      },
      {
        title: '넷째, 구속 방지를 위한 소명 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동 성범죄는 법정형이 높아 구속영장 발부 가능성이 있으므로, 불구속 수사를 위한 소명이 필요합니다</strong></p>\n<p>구속의 요건은 <strong>도주 우려, 증거인멸 우려, 범죄의 중대성</strong>입니다. 이를 방지하기 위해 다음 자료를 미리 준비하세요:</p>\n<ul>\n<li><strong>주거 안정성</strong> — 부동산 등기부등본, 임대차 계약서</li>\n<li><strong>직업 증명</strong> — 재직증명서, 사업자등록증</li>\n<li><strong>가족 관계</strong> — 부양가족 관련 서류, 가족 탄원서</li>\n<li><strong>출석 의지</strong> — 여권 제출, 주거지 제한 동의서</li>\n</ul>\n<p>만약 구속된다면 <strong>48시간 이내에 구속적부심사</strong>를 청구하고, 기소 후에는 보석을 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구속 방지: 주거·직업·가족 증명 → 여권 제출 → 구속적부심사·보석 대비</blockquote>',
      },
      {
        title: '다섯째, 유죄 시 부수 처분과 장기적 영향을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동 성범죄 유죄 확정 시 형벌 외에 신상정보 등록(최대 30년), 취업제한(최대 10년), 전자장치 부착(최대 30년)이 부과될 수 있습니다</strong></p>\n<p>혐의를 받고 있다면 형벌뿐 아니라 <strong>부수 처분의 범위</strong>도 반드시 파악해야 합니다:</p>\n<ul>\n<li><strong>신상정보 등록·공개</strong> — 20~30년간 등록, 인터넷 공개 가능</li>\n<li><strong>취업제한</strong> — 아동·청소년 관련 기관 10년간 취업 금지</li>\n<li><strong>전자장치 부착</strong> — 위치추적 전자발찌 최대 30년</li>\n<li><strong>수강명령</strong> — 성폭력 치료 프로그램 이수 의무</li>\n</ul>\n<p>재판 과정에서 <strong>양형 사유(초범, 반성, 재범 방지 교육 이수)</strong>를 적극 주장하여 부수 처분 범위를 최소화하는 전략이 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">부수 처분: 신상등록 20~30년 + 취업제한 10년 + 전자장치 + 수강명령 → 양형 사유로 감경</blockquote>',
      },
    ],
    cases: [
      {
        title: '허위 아동 성범죄 고소에 대한 무고죄 인정 사례',
        summary:
          '대법원 2021도15507 사건(2022.03.17 선고)에서 법원은 사실에 부합하지 않는 아동 성범죄 고소에 대해, 고소인이 허위 사실임을 인식하고도 고소한 경우 무고죄가 성립한다고 판시했습니다. 무고 여부는 신고 내용의 진실성과 고소인의 인식을 종합적으로 판단합니다.',
        takeaway:
          '사실과 다르게 신고되었다면 허위 고소에 대한 반증 자료를 체계적으로 수집하세요. 알리바이, 통신 기록, CCTV 등 객관적 증거가 혐의를 벗는 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '국선변호인을 선임할 수 있나요?',
        answer:
          '구속된 경우 <strong>국선변호인이 자동으로 배정</strong>됩니다. 불구속 상태라도 경제적 사정이 어려우면 법원에 국선변호인 선정을 신청할 수 있습니다. 다만 아동 성범죄의 중대성을 고려하면 전문 사선 변호인을 권장합니다.',
      },
      {
        question: '사실과 다른 혐의를 받고 있는데 어떻게 하나요?',
        answer:
          '사실과 다르게 신고되었다면 <strong>알리바이 증거(위치 기록, CCTV, 통화 기록)</strong>를 즉시 확보하세요. 변호인과 함께 반증 자료를 정리하고, 필요시 무고죄 맞고소를 검토합니다.',
      },
      {
        question: '합의하면 처벌이 가벼워지나요?',
        answer:
          '피해자 측(법정대리인)과의 합의는 <strong>양형에 유리하게 작용</strong>합니다. 다만 아동 성범죄는 친고죄가 아니므로 합의만으로 공소가 취소되지 않으며, 합의금 수준과 방법은 반드시 변호인을 통해 진행하세요.',
      },
      {
        question: '수사 중에 직장에 알려지나요?',
        answer:
          '수사 단계에서는 <strong>원칙적으로 직장에 통보되지 않습니다</strong>. 다만 구속되거나 언론 보도가 되는 경우 알려질 수 있습니다. 유죄 확정 시 아동·청소년 관련 기관 종사자는 취업제한 통보가 됩니다.',
      },
      {
        question: '디지털 증거를 삭제하면 유리해지나요?',
        answer:
          '<strong>절대 삭제하지 마세요.</strong> 증거 인멸은 별도의 범죄이며, 포렌식으로 삭제된 파일도 복구됩니다. 오히려 증거 인멸 시도가 재판에서 불리한 정황 증거로 사용됩니다.',
      },
    ],
    cta: {
      text: '아동성범죄 혐의 관련 무료 진단받기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '아동성범죄 가이드', href: '/guide/child-sex-crime' },
      { label: '아동성범죄 신고 의무와 절차', href: '/spoke/child-sex-crime/mandatory-reporting-and-procedure' },
      { label: '온라인 그루밍 피해 의심 징후와 대응법', href: '/spoke/child-sex-crime/online-grooming-warning-signs' },
      { label: '아동 피해자 2차 피해 방지', href: '/spoke/child-sex-crime/preventing-secondary-harm-to-child' },
      { label: '아동성범죄 피해 대응 부모용 체크리스트', href: '/spoke/child-sex-crime/parent-response-checklist' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. prostitution / prostitution-arrest-criminal-process
  // ───────────────────────────────────────────
  {
    domain: 'prostitution',
    slug: 'prostitution-arrest-criminal-process',
    keyword: '성매매 단속 적발 후 형사 절차',
    questionKeyword: '성매매 단속에 적발되면 형사 절차가 어떻게 진행되나요?',
    ctaKeyword: '성매매 적발 형사 절차',
    type: '절차타임라인형',
    perspective: 'offender',
    meta: {
      title: '성매매 적발 후 형사 절차 4단계 — 입건부터 선고까지 | 로앤가이드',
      description: '성매매 단속에 적발되어 앞으로 어떤 절차가 진행되는지 막막하다면, 입건부터 선고까지 4단계 타임라인을 지금 확인하세요.',
    },
    intro:
      '새벽에 경찰 단속에 걸렸습니다. 현장에서 간이 조서를 쓰고 귀가했는데, 며칠 후 정식 출석 요구서가 왔습니다. 앞으로 경찰 조사, 검찰 송치, 재판까지 어떤 순서로 진행되는 건지, 최악의 경우 전과가 남는 건지, 전체 타임라인을 알아야 각 단계에서 올바른 대응을 할 수 있습니다.',
    timelineSteps: [
      '현장 단속·입건 (당일~1주)',
      '경찰 정식 조사 (1~4주 후)',
      '검찰 송치·기소 결정 (2~4개월)',
      '약식명령 또는 정식재판·선고',
    ],
    sections: [
      {
        title: '1단계 — 현장 단속과 입건: 간이 조서 작성 후 귀가합니다',
        content:
          '<p><strong style="color:#1e3a5f">성매매알선 등 행위의 처벌에 관한 법률 제21조 제1항에 따라 성매매를 한 사람은 1년 이하의 징역이나 300만 원 이하의 벌금·구류 또는 과료에 처해집니다</strong></p>\n<p>현장 단속 시 경찰은 <strong>신분 확인, 간이 진술서 작성, 휴대폰 확인</strong> 등을 진행합니다. 현행범 체포가 아닌 이상 즉시 구속되지는 않으며, 대부분 간이 조서 작성 후 귀가 조치됩니다.</p>\n<p>이 단계에서 주의할 점:</p>\n<ul>\n<li>현장에서 <strong>상세한 진술을 하지 마세요</strong> — 간이 조서는 최소한만 기재</li>\n<li><strong>휴대폰 임의 제출에 동의하지 마세요</strong> — 압수수색 영장 없이는 제출 의무 없음</li>\n<li>경찰이 제시하는 <strong>동의서에 서명하기 전에 내용을 확인</strong>하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">현장 대응: 간이 조서 최소 기재 → 휴대폰 임의 제출 거부 → 동의서 내용 확인</blockquote>',
      },
      {
        title: '2단계 — 경찰 정식 조사: 피의자 신문조서가 핵심 증거입니다',
        content:
          '<p><strong style="color:#1e3a5f">정식 조사에서 작성되는 피의자 신문조서는 검찰 기소 여부와 양형에 직접적 영향을 미칩니다</strong></p>\n<p>현장 단속 후 <strong>1~4주 이내</strong>에 관할 경찰서에서 출석 요구를 받게 됩니다. 출석 일시는 변경 요청이 가능하며, <strong>변호인을 선임하고 동행</strong>하는 것이 유리합니다.</p>\n<p>경찰은 성매매 경위(상대방 만남 경위, 금전 지급 여부, 횟수 등)를 질문합니다. 조서에는 질문과 답변이 <strong>일문일답 형식</strong>으로 기재되며, 서명 후에는 번복이 극히 어렵습니다.</p>\n<p><strong>방어 포인트:</strong> 대가 관계가 불명확한 경우(만남 앱에서 만났으나 명시적 금전 약정이 없었던 경우), 성관계가 실제로 이루어지지 않은 경우 등은 혐의를 다툴 여지가 있습니다. 불확실한 부분은 <strong>"기억이 정확하지 않습니다"</strong>로 답변하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사 원칙: 변호인 동행 → 조서 서명 전 전문 확인 → 불확실한 답변은 보류</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">성매매 적발 후 내 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 검찰 송치와 기소 결정: 기소유예·약식기소·정식기소 중 하나가 결정됩니다',
        content:
          '<p><strong style="color:#1e3a5f">검사의 기소 결정이 전과 유무와 처분 수준을 결정합니다. 초범은 기소유예 가능성이 가장 높습니다</strong></p>\n<p>경찰 수사가 완료되면 사건이 <strong>검찰로 송치</strong>됩니다. 검사는 혐의 인정 여부, 전과, 반성 태도를 종합하여 세 가지 중 하나를 결정합니다:</p>\n<ul>\n<li><strong>기소유예</strong> — 혐의는 인정하나 기소하지 않음. <strong>전과가 남지 않습니다.</strong> 초범·단순 매수·존스쿨 수강 시 가능성 높음</li>\n<li><strong>약식기소</strong> — 벌금형 구형. 법원이 약식명령으로 벌금 선고. 통상 100~200만 원</li>\n<li><strong>정식기소</strong> — 공개 법정 재판. 재범, 알선 관여 등 가중 사유 시 해당</li>\n</ul>\n<p>이 단계에서 <strong>변호인 의견서</strong>를 제출하면 유리한 처분 가능성이 높아집니다. 의견서에 첨부할 자료: 반성문, 존스쿨(성매매 재범방지교육 40시간) 수료증, 가족 탄원서, 재직증명서.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기소 결정: 기소유예(전과 없음) / 약식기소(벌금형) / 정식기소(재판) → 의견서가 관건</blockquote>',
      },
      {
        title: '4단계 — 약식명령·재판·선고 후 전과 관리',
        content:
          '<p><strong style="color:#1e3a5f">벌금형 확정 후 5년이 경과하면 형의 실효 등에 관한 법률에 따라 전과 기록이 자동 실효됩니다</strong></p>\n<p>약식기소 시 법원이 <strong>약식명령으로 벌금을 선고</strong>합니다. 단순 성매수 초범은 100~200만 원이 통상적입니다. 약식명령에 불복하면 7일 이내 정식재판을 청구할 수 있으나, 더 무거운 형이 선고될 위험이 있습니다.</p>\n<p>정식재판에서는 <strong>양형 자료(반성문, 존스쿨 수료증, 사회봉사 실적, 가족 탄원서)</strong>가 형량을 좌우합니다. 성매매 알선에 해당하면 3년 이하 징역 또는 3,000만 원 이하 벌금까지 가능합니다.</p>\n<p><strong>선고 후 유의사항:</strong></p>\n<ul>\n<li>벌금 납부 후 <strong>5년 경과 시 전과 자동 실효</strong></li>\n<li>성매매는 <strong>성범죄 신상정보 등록 대상이 아님</strong></li>\n<li>공무원은 300만 원 이상 벌금 시 <strong>당연퇴직 사유</strong> 될 수 있음</li>\n<li>기소유예 시 전과 없음, <strong>수사경력만 10년간 보관</strong></li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전과 관리: 벌금 5년 실효 → 신상등록 대상 아님 → 공무원 결격사유 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '성매매 수익금 추징 범위에 관한 대법원 판결',
        summary:
          '대법원 2024도8707 사건(2024.09.27 선고)에서 법원은 성매매알선 행위의 공범이 보수 명목으로 받은 급여도 범죄수익은닉규제법에 따라 추징 대상이 된다고 판시했습니다. 성매매 관련 금전 거래의 전체 구조가 수사 대상이 될 수 있음을 확인한 판결입니다.',
        takeaway:
          '단순 매수라면 추징 대상은 아니지만, 알선이나 중개에 관여한 정황이 있으면 관련 금전까지 수사 범위에 포함됩니다. 자신의 혐의 범위를 변호인과 정확히 파악하세요.',
      },
    ],
    faq: [
      {
        question: '성매매 단속 후 바로 구속되나요?',
        answer:
          '단순 성매수는 <strong>현장에서 구속되는 경우가 거의 없습니다</strong>. 간이 조서 작성 후 귀가하며, 이후 경찰서 출석 통보를 받습니다. 다만 알선이나 상습 혐의가 있으면 구속 가능성이 있습니다.',
      },
      {
        question: '존스쿨(재범방지교육)은 어디서 받나요?',
        answer:
          '<strong>건강가정지원센터, 한국양성평등교육진흥원</strong> 등에서 운영합니다. 40시간(약 5일) 과정이며, 검찰 송치 전에 미리 수강하고 수료증을 의견서에 첨부하면 기소유예 가능성이 높아집니다.',
      },
      {
        question: '만남 앱에서 만났는데 성매매인지 연애인지 애매합니다.',
        answer:
          '핵심은 <strong>금전 등 대가의 약속 또는 제공</strong>이 있었는지입니다. 명시적 금전 약정 없이 만난 경우라면 혐의를 다툴 여지가 있으므로, 대화 기록을 보존하고 변호인과 상담하세요.',
      },
      {
        question: '전체 절차가 끝나기까지 얼마나 걸리나요?',
        answer:
          '기소유예 시 단속 후 <strong>3~6개월</strong>, 약식기소 후 벌금 납부까지 4~7개월, 정식재판은 추가 3~6개월이 소요되어 총 <strong>6~12개월</strong>이 걸립니다.',
      },
      {
        question: '가족이나 직장에 알려지나요?',
        answer:
          '수사·재판 과정에서 <strong>가족이나 직장에 자동으로 통보되지는 않습니다</strong>. 다만 구속이나 언론 보도가 되면 알려질 수 있습니다. 벌금형 확정 후에도 일반 기업 채용 시 조회되지 않습니다.',
      },
    ],
    cta: {
      text: '성매매 적발 형사 절차 관련 무료 진단받기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '성매매 가이드', href: '/guide/prostitution' },
      { label: '성매매 적발 시 초기 대응법', href: '/guide/prostitution/prostitution-arrest-response' },
      { label: '성매매 혐의 방어 방법', href: '/guide/prostitution/prostitution-charge-defense-method' },
      { label: '성매매 초범 양형 기준', href: '/spoke/prostitution/prostitution-first-offense-sentencing' },
      { label: '성매매 기소유예 받는 방법', href: '/spoke/prostitution/deferred-prosecution-method' },
    ],
  },
];
