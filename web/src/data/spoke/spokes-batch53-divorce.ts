import { SpokePage } from '../spoke-pages';

// batch53 divorce 4개: 사실혼 해소 재산분할 + 이혼 후 친권·양육권 변경 + 외국인 배우자 이혼 + 외도 위자료 증거 수집
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 혼인신고 없이 동거·사실혼으로 살다가 관계가 해소된 당사자가 사실혼 인정 요건·재산분할·기준시점을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 이혼 후 양육 환경·자녀 의사·부모 사정 변화로 친권자·양육자 변경을 검토하는 양육친·비양육친이 가사소송법 변경 심판 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 외국인 배우자(한국 거주·해외 거주)와 이혼하려는 한국인 당사자가 국제사법 준거법·국제재판관할·송달 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 배우자의 외도가 의심되어 이혼 + 위자료를 청구하려는 당사자가 적법한 증거 수집·상간자 동시 청구·시효를 정리하도록 돕는 페이지다.

export const spokesBatch53Divorce: SpokePage[] = [
  // ─── 1. divorce / de-facto-marriage-dissolution ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-marriage-dissolution',
    keyword: '사실혼 해소 재산분할 절차',
    questionKeyword: '혼인신고 없이 7년을 살았는데 헤어지면 재산분할이 가능한가요?',
    ctaKeyword: '사실혼 재산분할 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사실혼 해소 재산분할 — 인정 요건·기준시점 5단계 절차 | 로앤가이드',
      description:
        '혼인신고 없이 동거·사실혼으로 살다가 관계가 해소됐다면 사실혼 인정 요건·재산분할·위자료 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"혼인신고 없이 7년을 부부처럼 살았어요. 양가 인사도 다 했고 같이 모은 돈으로 전셋집도 얻었는데, 일방적으로 짐 싸들고 나가버렸습니다. 법적으로 정리할 수 있는지 막막해요." 사실혼은 혼인신고만 없을 뿐 실질적 혼인생활이 인정되면 법적 보호를 받습니다. 대법원 2022므11027 등 일관된 판례에 따라 사실혼 해소 시 재산분할·위자료 청구가 가능하고, 분할 기준시점은 사실혼이 해소된 날입니다. 다만 상속권은 인정되지 않으므로 한쪽 사망의 경우는 별도 검토가 필요해요. 동거 시작 시점·혼인 의사·공동생활 입증이 출발점입니다.</p>',
    sections: [
      {
        title: '사실혼 인정 요건 — 4가지 핵심 기준',
        content:
          '<p><strong style="color:#1e3a5f">단순 동거와 사실혼은 법적 보호 범위가 다릅니다.</strong></p>\n<ul>\n<li><strong>혼인 의사의 합치</strong> — 양 당사자가 혼인의사로 결합. 결혼식·청첩장·예물·예단·양가 인사 등이 입증 자료.</li>\n<li><strong>실질적 부부공동생활</strong> — 동거·생계 공유·자녀 양육·재산 공동 형성. 단순 룸메이트·연인 동거와 구별.</li>\n<li><strong>사회적 정당성</strong> — 중혼 상태·근친 관계 등 법적 결혼이 불가능한 관계는 사실혼 인정 제한적.</li>\n<li><strong>상당 기간 지속</strong> — 통상 1~2년 이상 안정적 공동생활. 짧은 동거는 인정 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼이 인정되면 재산분할·위자료·자녀 양육비·면접교섭은 법적 혼인과 동일하게 청구 가능. 다만 상속·연금 분할은 별도 요건(공무원연금·국민연금은 사실혼 배우자 인정).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사실혼 해소 재산분할 5단계',
        content:
          '<p><strong style="color:#1e3a5f">사실혼 입증·해소 시점 확정·청구·심리·결정 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 입증 자료 수집 (1~2개월)</strong> — 결혼식·예물·청첩장·양가 가족 진술서·동거 시점 입증(주민등록 동일 주소)·SNS·통장 거래내역.</li>\n<li><strong>2단계 — 사실혼 해소 시점 확정 (즉시)</strong> — 일방 통보·짐 정리·주민등록 분리·연락 단절 시점 등. 분할 기준시점이 되므로 명확히 기록.</li>\n<li><strong>3단계 — 가정법원 재산분할 심판 청구 (조정전치 가능)</strong> — 가사소송법 제2조에 따라 사실혼 해소 사건은 가사비송. 재산분할 + 위자료 일괄 청구.</li>\n<li><strong>4단계 — 재산명시 + 사실조회 (2~3개월)</strong> — 상대방 보유 부동산·예금·주식 명시. 응하지 않으면 1년 이하 징역·1천만 원 이하 과태료.</li>\n<li><strong>5단계 — 분할 결정 + 집행 (변론 종결 후 1~3개월)</strong> — 사실혼 해소 시점 시가 기준 분할. 미이행 시 강제집행·가압류.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 인정 요건·해소 시점·재산분할 청구 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 사실혼 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">사실혼 인정·재산분할 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 혼인 의사 입증 자료</strong> — 결혼식 사진·영상·청첩장·예물·예단·양가 인사 사진.</li>\n<li><strong>2. 동거 입증 자료</strong> — 주민등록등본(동일 주소)·임대차계약서·관리비 영수증.</li>\n<li><strong>3. 공동생활 입증</strong> — 통장 거래내역·공과금 분담·생활비 송금 기록·SNS 게시물.</li>\n<li><strong>4. 양가 가족·지인 진술서</strong> — 부부로 인정한 사회적 관계 입증.</li>\n<li><strong>5. 자녀 관련 자료</strong> — 자녀 출생증명·인지·양육 입증(있는 경우).</li>\n<li><strong>6. 재산 자료</strong> — 부동산 등기부등본·자동차 등록·예금 잔고·공동 명의 자산.</li>\n<li><strong>7. 해소 시점 입증</strong> — 일방 통보 카톡·문자·짐 이전 사진·주민등록 분리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결혼식·예물·양가 인사는 사실혼 핵심 입증 자료. 영상·사진은 시간·장소가 확인되도록 메타데이터 보존. 사실혼 입증이 약하면 동거관계 해소(불법행위)로 청구 가능성 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 사실혼 해소 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"혼인신고 없으니 아무 권리 없다"는 오해</strong> — 사실혼 인정되면 재산분할·위자료 청구 가능. 다만 상속·재혼 무효 등 일부 권리는 제한.</li>\n<li><strong>해소 시점 모호 → 분할 기준 다툼</strong> — 대법원 2022므11027 등 판례에 따라 사실혼 해소된 날이 분할 기준시점. 시점 입증 부족하면 분할 액수 다툼 발생.</li>\n<li><strong>중혼 사실혼 (상대방이 법률혼 유지)</strong> — 일방이 법률혼 상태이면 사실혼 인정 매우 제한적. 법률혼 해소 후 사실혼 시작 입증 필요.</li>\n<li><strong>일방 사망 시 상속권 없음</strong> — 사실혼 배우자는 상속권 없음. 다만 공무원연금·국민연금 유족급여는 사실혼 배우자 인정. 별도 신청 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 가정법원 민원실 / 사선 변호사 조력은 사실혼 입증 설계·재산명시 신청에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할의 기준시점',
        summary:
          '대법원 2022므11027 사건(대법원, 2024.01.04 선고)에서 법원은 사실혼 해소를 원인으로 한 재산분할에서 분할의 대상이 되는 재산과 액수는 사실혼이 해소된 날을 기준으로 정해야 한다고 판시했습니다. 다만 사실혼 해소 이후 사실심 변론종결 시까지 혼인 중 공동의 노력으로 형성·유지한 부동산 등에 외부적·후발적 사정이 발생한 경우 분할대상 재산의 가액 산정에 참작할 수 있는 사례가 있다는 시사점이 있어, 해소 시점·시가 자료를 일관되게 정리해두면 도움이 됩니다.',
        takeaway: '사실혼 재산분할은 해소 시점이 분할 기준이 되므로, 동거 시작·해소 일자·해소 시점 시가 자료를 명확히 기록해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '사실혼은 몇 년 이상이어야 인정되나요?',
        answer:
          '<strong>법정 기간은 없으나 통상 1~2년 이상 안정적 공동생활이 인정 기준입니다.</strong> 결혼식·양가 인사 같은 혼인 의사 입증이 강하면 짧은 기간도 인정 사례 있습니다.',
      },
      {
        question: '사실혼 배우자도 위자료 청구가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 일방의 부정행위·폭력·악의 유기 등 유책 사유로 사실혼이 깨졌다면 위자료 청구 가능. 사실혼 입증 + 유책행위 입증이 핵심.',
      },
      {
        question: '사실혼 자녀의 양육비·친권은 어떻게 되나요?',
        answer:
          '<strong>친자관계가 인지로 확정되면 법률혼 자녀와 동일하게 양육비·친권 청구 가능합니다.</strong> 친부 인지 절차(인지청구·유전자검사) 선행 필요한 사례 있음.',
      },
      {
        question: '사실혼 배우자가 사망하면 재산은 어떻게 되나요?',
        answer:
          '<strong>사실혼 배우자에게 상속권은 없습니다.</strong> 다만 공무원연금·국민연금 유족급여는 사실혼 배우자 인정(국민연금법 제3조 등). 주거용 임차권은 주택임대차보호법상 일정 보호 가능성 검토.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)도 사실혼 상담 운영. 사선 변호사는 사실혼 입증·재산명시 설계에서 효과 큼.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 위자료 청구', href: '/guide/divorce/divorce-de-facto-marriage-alimony-claim' },
      { label: '동거 재산 분할', href: '/guide/divorce/divorce-cohabitation-property-division' },
      { label: '재산분할 종합 절차', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '특유재산 분할 제외', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '사망 후 재산 청구', href: '/guide/divorce/divorce-after-spouse-death-property-claim' },
    ],
  },

  // ─── 2. divorce / custody-modification-after-divorce ───
  {
    domain: 'divorce',
    slug: 'divorce-custody-modification-after-divorce',
    keyword: '이혼 후 친권 양육권 변경',
    questionKeyword: '이혼 후 양육 환경이 나빠졌어요. 친권·양육권을 다시 가져올 수 있나요?',
    ctaKeyword: '친권·양육권 변경 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 후 친권·양육권 변경 — 사정 변경 5단계 절차 | 로앤가이드',
      description:
        '이혼 후 양육 환경 변화로 친권·양육권 변경이 필요한 양육친·비양육친이라면 변경 사유·심판 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼할 때 친권·양육권을 상대방에게 줬는데, 아이가 학교 적응을 못 하고 양육 환경도 나빠졌다는 얘기를 듣고 있어요. 다시 양육권을 가져올 수 있는지 막막합니다." 친권자·양육자 변경은 이혼 시점 결정이 끝이 아니라, 사정 변경이 있으면 가정법원에 변경 심판 청구가 가능합니다. 민법 제909조의2·가사소송법 제2조에 따라 자녀의 복리 기준으로 변경 여부를 판단해요. 자녀의 의사(특히 13세 이상)·양육 환경·부모 사정·자녀의 정서 안정이 종합적으로 고려됩니다. 변경 사유 입증과 자녀 복리 입증이 핵심입니다.</p>',
    sections: [
      {
        title: '친권·양육권 변경 사유 — 5가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">자녀 복리 침해가 있을 때 변경 청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>현 양육친의 양육 부적절</strong> — 학대·방임·중독·정신질환·장기 부재. 신체적·정서적 위해 입증.</li>\n<li><strong>자녀 학업·교우·정서 문제 발생</strong> — 학교 적응 실패·교사 면담 기록·심리 상담 기록.</li>\n<li><strong>자녀 본인의 의사 변화</strong> — 만 13세 이상 자녀는 본인 의사가 중요 고려 요소. 자녀 의사 청취 절차.</li>\n<li><strong>양육친 사정 변화</strong> — 재혼·이주·취업 변동·건강 악화로 양육 곤란.</li>\n<li><strong>비양육친 환경 개선</strong> — 안정적 직업·주거·재혼 후 양육 환경 개선. 단독으로는 부족, 현 양육친의 부적절성 + 결합되어야 강함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가정법원은 자녀 복리를 최우선 고려. 단순 부모 사정 변경보다 자녀의 정서·교육·환경에 미치는 영향이 결정 기준.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 친권·양육권 변경 5단계',
        content:
          '<p><strong style="color:#1e3a5f">사정 변경 입증·청구·가사조사·심리·결정 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변경 사유 입증 자료 수집 (1~3개월)</strong> — 학교 생활기록부·교사 면담 기록·심리 상담 기록·의료 기록·자녀 일기·자녀 본인 진술서.</li>\n<li><strong>2단계 — 가정법원 친권자·양육자 변경 심판 청구</strong> — 관할 가정법원에 청구. 청구취지에 변경 대상·이유 명시.</li>\n<li><strong>3단계 — 가사조사관 조사 (2~3개월)</strong> — 가사조사관이 양 부모·자녀 면담·가정 방문·환경 조사. 자녀의 의사 청취(만 13세 이상은 의사 존중).</li>\n<li><strong>4단계 — 심리·변론 (2~6개월)</strong> — 양 부모 변론·증인 신문·심리 검사 결과 종합. 필요 시 자녀 출석 면담.</li>\n<li><strong>5단계 — 결정 + 집행 (1~3개월)</strong> — 변경 결정 시 즉시 양육 인계. 양육비 동시 변경 청구 권장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">변경 사유·자녀 의사·양육 환경 입증 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 변경 청구 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">변경 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 가족관계증명서·이혼 판결문·양육 결정문</strong> — 기존 친권·양육 결정 확인.</li>\n<li><strong>2. 자녀 학교 자료</strong> — 생활기록부·출결·교사 면담 기록·성적표 변동.</li>\n<li><strong>3. 자녀 의료·심리 자료</strong> — 진료 기록·심리 검사·정신과 진료·상담 기록.</li>\n<li><strong>4. 현 양육친 부적절 입증</strong> — 학대·방임·중독·장기 부재 입증(녹취·진술·진단서).</li>\n<li><strong>5. 자녀 본인 진술</strong> — 자녀 일기·편지·녹음(자발적). 만 13세 이상은 직접 의사 표명.</li>\n<li><strong>6. 비양육친 양육 환경 자료</strong> — 주거·소득·직업·재혼 가족 안정성·근무 시간.</li>\n<li><strong>7. 양육 계획서</strong> — 변경 후 자녀 학교·학원·주거·일과 구체 계획.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀의 의사가 결정에 큰 영향을 미치므로 자녀가 자유롭게 의사를 표명할 수 있는 환경 조성이 중요. 자녀 강압 면담은 역효과. 가사조사관이 자녀 면담 시 자녀의 진심을 파악합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 친권·양육권 변경에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"이혼 시 결정은 못 바꾼다"는 오해</strong> — 사정 변경이 있으면 변경 청구 가능. 시한 없음(자녀 미성년 동안).</li>\n<li><strong>자녀 강압 진술 → 신빙성 떨어짐</strong> — 자녀에게 한쪽 부모를 비난하도록 유도하면 가사조사관이 부모 적합성 의심. 자녀 자발적 진술이 핵심.</li>\n<li><strong>비양육친 환경 개선만으로는 부족</strong> — 본인 환경이 좋아져도 현 양육친의 부적절성이 입증되지 않으면 변경 어려움. 두 요소 병행.</li>\n<li><strong>면접교섭 갈등을 변경 청구로 해결 시도</strong> — 면접교섭 거부는 별도 면접교섭 이행명령으로 해결. 변경 청구는 양육 자체의 부적절성이 입증돼야 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 가정법원 민원실 / 청소년 전화 1388 / 사선 변호사 조력은 변경 사유 입증·자녀 의사 청취 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 친권자 변경과 자녀 복리 기준',
        summary:
          '수원지방법원 2017드10884 사건(수원지방법원, 2017.11.03 선고) 등 친권자 변경 심판에서 법원은 자녀의 복리를 최우선 고려하면서 양육 환경·자녀의 의사·부모의 양육 의지와 능력을 종합 평가해 변경 여부를 결정해야 한다는 판단 기준을 정리했습니다. 이혼 후 친권·양육권 변경은 자녀의 정서·교육·환경에 미치는 영향이 결정적 변수라는 시사점이 있어, 변경 사유 발생 시점·자녀 의사·환경 자료를 일관되게 정리해두면 도움이 됩니다.',
        takeaway: '친권·양육권 변경은 자녀 복리 기준의 종합 판단이 핵심이므로, 학교·의료·심리 자료와 자녀의 자발적 의사 표명 기록을 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '몇 살부터 자녀 의사가 반영되나요?',
        answer:
          '<strong>만 13세 이상은 자녀의 의사를 의무적으로 청취합니다.</strong> 가사소송법 시행규칙에 근거. 13세 미만도 의사 표현 능력이 있으면 가사조사관이 청취. 다만 강압·유도성 의사는 신빙성 평가에서 배제될 수 있습니다.',
      },
      {
        question: '친권·양육권을 따로 변경할 수도 있나요?',
        answer:
          '<strong>가능합니다.</strong> 친권자(법정대리·재산관리)와 양육자(실생활 양육)를 분리해서 변경 가능. 다만 통합 운영이 자녀 복리에 적합한 사례가 많아 함께 검토.',
      },
      {
        question: '변경 청구 중 양육비는 계속 지급해야 하나요?',
        answer:
          '<strong>변경 결정 전까지는 기존 결정대로 지급해야 합니다.</strong> 변경 결정 후 양육비도 동시 변경 청구 권장. 변경 시점부터 새 양육비 적용.',
      },
      {
        question: '상대방이 변경에 협조하지 않으면 어떻게 하나요?',
        answer:
          '<strong>가정법원 결정으로 강제 인계 가능합니다.</strong> 결정 후 미이행 시 가사소송법 제64조 이행명령·간접강제. 자녀 인계 강제집행은 매우 신중하게 진행되며 자녀 복리 우선.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)도 양육 상담 운영. 청소년 관련은 청소년 전화(1388)도 이용 가능.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 변경 청구 절차', href: '/guide/divorce/divorce-post-divorce-child-support-modification' },
      { label: '청소년 자녀 의사 반영', href: '/guide/divorce/divorce-teenager-custody-own-choice' },
      { label: '면접교섭 거부 대응', href: '/guide/divorce/divorce-visitation-denied-response' },
      { label: '면접교섭 강제 신청', href: '/guide/divorce/divorce-visitation-denied-enforcement-apply' },
      { label: '아빠 양육권 전략', href: '/guide/divorce/divorce-child-custody-father-strategy' },
    ],
  },

  // ─── 3. divorce / foreign-spouse-litigation-procedure ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-litigation-procedure',
    keyword: '외국인 배우자 이혼 국제재판 준거법',
    questionKeyword: '베트남 배우자와 이혼하려는데 본국에 있어 연락이 안 돼요. 어떻게 진행하나요?',
    ctaKeyword: '국제 이혼 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 이혼 — 준거법·송달·관할 5단계 절차 | 로앤가이드',
      description:
        '외국인 배우자(한국 거주·해외 거주)와 이혼하려는 한국인 당사자라면 국제사법 준거법·국제재판관할·송달 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"베트남 배우자와 결혼했는데 본국으로 돌아간 후 연락이 안 됩니다. 이혼하고 싶은데 외국인이라 절차가 복잡해 보여 막막합니다." 외국인 배우자와의 이혼은 국제사법에 따른 준거법·국제재판관할·해외 송달 절차가 추가로 검토되어야 합니다. 한국에 상거소가 있거나 마지막 공동 상거소가 한국이면 한국 가정법원에 관할이 인정되는 경우가 많고, 준거법은 양 당사자 본국법·공통 본국법·상거소법 순서로 적용돼요. 해외 송달은 헤이그 송달협약 가입국 여부에 따라 절차가 달라집니다.</p>',
    sections: [
      {
        title: '국제 이혼 사건 — 4가지 핵심 검토사항',
        content:
          '<p><strong style="color:#1e3a5f">사건 유형에 따라 관할·준거법·송달 트랙이 갈립니다.</strong></p>\n<ul>\n<li><strong>국제재판관할</strong> — 국제사법 제2조·제56조. 한국에 부부 상거소·마지막 공동 상거소·피고 주소가 있으면 한국 법원 관할 인정 사례가 많음.</li>\n<li><strong>준거법</strong> — 국제사법 제66조. ① 동일 본국법 → ② 동일 상거소법 → ③ 가장 밀접한 관련법. 한국인-외국인이면 보통 한국법.</li>\n<li><strong>해외 송달</strong> — 헤이그 송달협약 가입국(베트남·중국·태국·필리핀·미국 등)은 협약 송달. 미가입국은 영사 송달·외교 경로.</li>\n<li><strong>외국 판결의 한국 효력 / 한국 판결의 외국 효력</strong> — 외국 이혼판결은 민사소송법 제217조에 따라 한국에서 승인. 한국 판결의 외국 승인은 해당국 법.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국인과 한국에서 결혼했고 한국에 거주하다 헤어진 경우 대부분 한국 가정법원 관할 + 한국법 적용 가능. 다만 송달 절차에 시간 소요(6개월~1년).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 외국인 배우자 이혼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">관할 검토·소 제기·해외 송달·심리·확정 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관할·준거법 검토 (1~2주)</strong> — 부부 상거소·마지막 공동 거주지·피고 현 거주지 확인. 한국 관할 인정 가능성 평가.</li>\n<li><strong>2단계 — 가정법원 이혼 소 제기 (소장 작성)</strong> — 청구취지 + 청구원인 + 외국인 배우자 본국·현 거주지·연락처 명시.</li>\n<li><strong>3단계 — 해외 송달 (3~6개월)</strong> — 헤이그 송달협약 가입국이면 협약 송달(외교부 → 상대국 중앙당국 → 송달). 미가입국은 영사 송달.</li>\n<li><strong>4단계 — 송달 후 변론·심리 (3~6개월)</strong> — 외국인 배우자 출석 또는 답변서 제출. 출석 거부 시 공시송달·궐석재판 가능.</li>\n<li><strong>5단계 — 판결 확정 + 가족관계 신고 (1개월)</strong> — 판결 확정 후 1개월 내 가족관계등록부 신고. 외국 신분등록 변경은 해당국 절차 별도.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">관할·준거법·해외 송달 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 국제 이혼 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">관할·준거법·송달 절차에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인 신분 자료</strong> — 가족관계증명서·혼인관계증명서·주민등록등본·외국인등록사실증명서(상대방용).</li>\n<li><strong>2. 혼인 입증 자료</strong> — 한국 혼인신고서·외국 혼인증명서(아포스티유 또는 영사 인증).</li>\n<li><strong>3. 거주 입증 자료</strong> — 부부 상거소 입증(주민등록·임대차계약·관리비)·마지막 공동 거주지.</li>\n<li><strong>4. 상대방 거주지 입증</strong> — 외국인등록증·여권·출입국 기록·본국 주소 확인.</li>\n<li><strong>5. 이혼 사유 입증</strong> — 부정행위·악의 유기·연락 두절·폭력 등 자료.</li>\n<li><strong>6. 번역·인증 자료</strong> — 외국 자료는 공증 번역 필요. 헤이그 송달은 상대국 공식 언어 번역.</li>\n<li><strong>7. 자녀·재산 자료</strong> — 자녀 출생증명·재산 분할 청구용 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헤이그 송달협약 가입국은 외교부 영사콜센터(02-3210-0404) 안내 활용. 미가입국은 영사 송달이 더 오래 걸리므로 공시송달 병행 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 외국인 배우자 이혼 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"외국인이니 한국 법원에서 못 한다"는 오해</strong> — 한국에 상거소 또는 마지막 공동 상거소가 있으면 한국 관할 인정 가능. 사례별 검토 필요.</li>\n<li><strong>해외 송달 시간 부족 → 공시송달로 즉시 전환</strong> — 헤이그 협약 송달이 6개월 이상 걸려도 시도 후 실패 시 공시송달 가능. 사실조회·소재 추적 선행.</li>\n<li><strong>외국에서 받은 이혼 판결을 한국에서 인정 안 받음</strong> — 외국 이혼판결은 민사소송법 제217조 요건(상호보증·송달·공서양속) 충족 시 한국 효력. 자동 아님.</li>\n<li><strong>혼인 합의 부재 → 혼인무효 vs 이혼</strong> — 처음부터 혼인 의사가 없었던 경우(서류상 결혼)는 혼인무효 청구 검토. 이혼 청구와 다른 절차.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 외교부 영사콜센터 02-3210-0404 / 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 다누리콜센터 1577-1366 (다문화가족 상담) / 사선 변호사는 국제 이혼 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 한국인-외국인 혼인의 준거법과 한국 민법 적용',
        summary:
          '대법원 2017므1224 사건(대법원, 2022.01.27 선고)에서 법원은 대한민국 국민과 베트남 국민 사이 혼인의 성립요건은 국제사법 제36조 제1항에 따라 각 당사자의 본국법에 의하지만, 성립요건을 갖추지 못한 혼인의 해소에 관한 쟁송 방법이나 신분법적 효과는 한국 민법이 준거법이 된다고 판시했습니다. 외국인 배우자 이혼·혼인무효 사건에서 준거법과 관할 분리 판단이 필요하다는 시사점이 있어, 사건 유형에 맞는 법적 트랙을 검토해두면 도움이 됩니다.',
        takeaway: '국제 이혼은 관할·준거법·송달이 사건 유형별로 달라지므로, 본국법·상거소·혼인 의사 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '외국인 배우자가 본국으로 돌아가서 연락이 안 되면요?',
        answer:
          '<strong>해외 송달 시도 후 실패하면 공시송달로 진행 가능합니다.</strong> 헤이그 협약국이면 협약 송달 우선. 사실조회로 본국 주소 확보 후 송달. 6개월~1년 소요.',
      },
      {
        question: '한국에서 받은 이혼 판결이 외국에서도 인정되나요?',
        answer:
          '<strong>해당국 법에 따릅니다.</strong> 통상 상호보증·송달·공서양속 요건 충족 시 인정. 일부 국가는 별도 인정 절차 필요. 본국 영사관 안내 활용.',
      },
      {
        question: '외국인 배우자의 비자·체류 자격에 영향이 있나요?',
        answer:
          '<strong>결혼이민(F-6) 비자는 이혼 시 변동됩니다.</strong> 이혼에 책임이 없으면 체류 자격 유지 가능성. 본인이 책임 있으면 출국 명령. 출입국·외국인청 안내 필요.',
      },
      {
        question: '국제 이혼 비용은 얼마나 드나요?',
        answer:
          '<strong>해외 송달비·번역비·공증비 추가 발생합니다.</strong> 헤이그 협약 송달은 200~500달러 + 번역. 변호사 선임료 별도. 대한법률구조공단(132)에서 자격 요건 따라 무료 상담·소송 대리 가능.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 다문화가족 사건은 다누리콜센터(1577-1366)도 운영. 사선 변호사는 국제 이혼 설계에서 효과 큼.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '국제 관할 송달 절차', href: '/guide/divorce/divorce-international-jurisdiction-spouse' },
      { label: '외국인 배우자 비자 영향', href: '/guide/divorce/divorce-foreign-spouse-visa-impact' },
      { label: '국제 결혼 절차 가이드', href: '/guide/divorce/divorce-international-marriage-procedure' },
      { label: '국제 양육 관할', href: '/guide/divorce/divorce-foreign-spouse-custody-jurisdiction' },
      { label: '해외 자산 분할', href: '/guide/divorce/divorce-overseas-asset-division' },
    ],
  },

  // ─── 4. divorce / alimony-affair-evidence-collection-trial ───
  {
    domain: 'divorce',
    slug: 'divorce-alimony-affair-evidence-collection-trial',
    keyword: '외도 위자료 증거 수집 상간자',
    questionKeyword: '배우자가 외도한 정황이 있어요. 어떤 증거를 어떻게 모아야 위자료를 받을 수 있나요?',
    ctaKeyword: '외도 위자료 증거 수집 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외도 위자료 증거 수집 — 적법성·상간자 청구 5단계 | 로앤가이드',
      description:
        '배우자 외도로 이혼·위자료 청구를 검토하는 당사자라면 적법한 증거 수집·상간자 동시 청구·시효 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"배우자 휴대폰에서 의심되는 메시지를 봤어요. 외도가 의심되는데 어떻게 증거를 모아야 하는지, 상간자에게도 청구할 수 있는지 막막합니다." 외도 위자료는 적법한 증거 수집이 결정적입니다. 불법 녹음·해킹·도촬은 형사 처벌 대상이고 증거능력도 배척될 수 있어요. 카드 사용 내역·동선·SNS·차량 GPS·증인 진술 같은 합법적 자료가 핵심이고, 배우자와 상간자에 대한 위자료 청구는 별도 또는 동시에 가능합니다(공동불법행위 부진정연대채무). 이혼일로부터 3년 이내 위자료 청구 시효 주의가 필요합니다.</p>',
    sections: [
      {
        title: '외도 위자료 증거 — 4가지 적법 수집 방법',
        content:
          '<p><strong style="color:#1e3a5f">적법한 방법으로 수집한 증거만 법원에서 인정됩니다.</strong></p>\n<ul>\n<li><strong>합법 녹음·문자·카톡</strong> — 본인이 참여한 대화는 녹음 가능(통신비밀보호법). 본인 명의 카톡·문자 캡처는 합법.</li>\n<li><strong>카드·계좌 내역</strong> — 본인 명의 카드 사용 내역·공동 통장 내역. 호텔·식당·선물 내역이 동선 입증.</li>\n<li><strong>차량 GPS·블랙박스</strong> — 본인 차량 또는 부부 공동 차량의 GPS·블랙박스. 위치 이력이 동선 입증.</li>\n<li><strong>SNS·증인 진술</strong> — 공개 SNS·지인 목격담·CCTV 화면(요청 가능 범위 내). 흥신소 보고서는 신중히 사용(불법 수단 시 배척).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배우자 휴대폰 몰래 열람·해킹·위치추적 앱 설치·도촬은 형사 처벌(통신비밀보호법·정보통신망법·개인정보보호법). 증거능력도 배척 우려. 합법 증거 위주로.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 외도 위자료 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">증거 수집·상간자 특정·이혼·위자료 청구·집행 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적법 증거 수집 (1~3개월)</strong> — 카드 내역·SNS·동선·증인 진술. 불법 수단 절대 금지. 변호사 사전 자문 권장.</li>\n<li><strong>2단계 — 상간자 신원 특정</strong> — 이름·주소·직장 확인. 사실조회로 가정법원이 특정 가능.</li>\n<li><strong>3단계 — 이혼 + 위자료 + 상간자 위자료 청구 (소 제기)</strong> — 가정법원에 이혼·재산분할·위자료 일괄. 상간자 상대 위자료는 민사 또는 가사 분리 진행 가능.</li>\n<li><strong>4단계 — 변론·증거 조사 (6개월~1년)</strong> — 증거능력 다툼 + 외도 사실 다툼. 카드 내역·동선·증인 신문.</li>\n<li><strong>5단계 — 판결·집행 (변론 종결 후 1~3개월)</strong> — 위자료 인용 시 집행. 미이행 시 강제집행·가압류.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">증거 수집 적법성·상간자 청구·시효 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 외도 위자료 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">위자료 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 가족관계·혼인관계증명서</strong> — 혼인 입증.</li>\n<li><strong>2. 외도 시점·기간 입증</strong> — 카드 내역·동선·통화 기록(본인 자료)·SNS 게시 시점.</li>\n<li><strong>3. 상간자 신원 자료</strong> — 이름·연락처·직장. 모르면 사실조회로 특정.</li>\n<li><strong>4. 적법 녹음·메시지</strong> — 본인 참여 녹음·본인 명의 카톡 캡처. 메타데이터(시간·발신자) 보존.</li>\n<li><strong>5. 증인 진술서</strong> — 친구·동료·이웃의 목격담. 인적사항·서명.</li>\n<li><strong>6. 정신과 진료·심리상담 기록</strong> — 외도로 인한 정신적 고통 입증. 위자료 액수 산정.</li>\n<li><strong>7. 혼인 기간·결혼 비용 자료</strong> — 위자료 액수 산정 자료(통상 1,000~5,000만 원 범위 사례가 많음).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위자료 액수는 사건별 차이가 크고, 1,000만~5,000만 원 수준으로 검토되는 사례가 많지만 외도 기간·태도·정신적 피해 입증에 따라 달라집니다. 단정형 액수 표기는 피하고 사례 기반으로 확인.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 외도 위자료 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>불법 증거 수집 → 형사 처벌 + 증거 배척</strong> — 배우자 휴대폰 해킹·위치추적·도촬은 형사 처벌. 합법 증거 위주로 신중히.</li>\n<li><strong>"상간자가 미혼이라 책임 없다"는 오해</strong> — 상간자가 혼인 사실을 알고도 관계 지속하면 책임. 모르고 한 경우 책임 제한 또는 면제.</li>\n<li><strong>위자료 액수 단정 기대</strong> — 사건별 차이가 매우 큼. 외도 기간·태도·정신적 피해·재산 상황 종합 평가. "통상 X만원"식 단정 표기는 위험.</li>\n<li><strong>이혼 후 3년 위자료 시효 도과</strong> — 민법 제766조 위자료 청구는 손해·가해자를 안 날부터 3년. 이혼 확정 후 청구 시 시효 주의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 여성긴급전화 1366 / 가정법원 민원실 / 사선 변호사 조력은 증거 수집 적법성 검토·상간자 특정에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외도 상간자의 공동불법행위 책임과 위자료 시효',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하거나 그 유지를 방해하여 배우자에게 정신적 고통을 가하는 행위는 원칙적으로 불법행위를 구성하고, 부부 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 판시했습니다. 또한 이혼을 원인으로 하는 위자료청구권의 단기소멸시효 기산점은 혼인 해소 시라는 시사점이 있어, 외도 위자료는 이혼 시점·시효 자료를 일관되게 정리해두면 도움이 됩니다.',
        takeaway: '외도 위자료는 배우자와 상간자에게 동시 청구 가능(부진정연대채무)하고, 시효 기산점·증거 적법성이 핵심이므로 적법한 증거 수집·청구 시점을 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '배우자 휴대폰을 몰래 보고 카톡 캡처해도 되나요?',
        answer:
          '<strong>형사 처벌 위험이 있어 권장하지 않습니다.</strong> 정보통신망법·통신비밀보호법 위반 가능. 본인 명의 카드·계좌 내역·공동 SNS 같은 합법 자료 위주로 수집.',
      },
      {
        question: '흥신소 보고서를 증거로 써도 되나요?',
        answer:
          '<strong>합법적 미행·관찰 보고서는 가능하지만 불법 도청·도촬·해킹은 배척됩니다.</strong> 흥신소 의뢰 전 적법 수단 확인 필수. 변호사 사전 자문 권장.',
      },
      {
        question: '상간자가 외도 사실을 부인하면 어떻게 입증하나요?',
        answer:
          '<strong>호텔·식당 카드 내역·동선·통화 기록·SNS 게시·증인 진술 종합 입증 가능합니다.</strong> 사실조회로 카드사·통신사 자료 강제 확보. 배우자 인정도 활용.',
      },
      {
        question: '위자료는 얼마 정도 인정되나요?',
        answer:
          '<strong>사건별 차이가 크지만 외도 사건에서 1,000만~5,000만 원 수준으로 검토되는 사례가 많습니다.</strong> 외도 기간·태도·정신적 피해·재산 상황 종합 평가. 단정형 금액은 어려움.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)·여성긴급전화(1366)도 외도·이혼 상담 운영. 사선 변호사는 증거 수집 설계에서 효과 큼.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외도 위자료 증거 5종', href: '/guide/divorce/divorce-affair-alimony-evidence-5items' },
      { label: '외도 증거 적법성', href: '/guide/divorce/divorce-affair-evidence-admissibility' },
      { label: '상간자 위자료 청구', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: 'SNS·카톡 증거 활용', href: '/guide/divorce/divorce-sns-kakao-evidence-validity' },
      { label: '외도 부인 증거 보강', href: '/guide/divorce/divorce-affair-denial-evidence-strengthening' },
    ],
  },
];
