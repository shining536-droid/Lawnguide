import { SpokePage } from '../spoke-pages';

// batch65 dismissal — 5개 (2026-05-15)
//
// 고유 존재 이유:
// 1. 임신 사실 알린 직후 즉시 해고 — 모성보호법·男女고용평등법 11조 + 임신 통보 시점 인과 다툼 (기존 maternity-return-* 는 출산 후 복귀, 본 페이지는 임신 통보 직후 시점).
// 2. 공익신고 후 보복 해고 — 공익신고자 보호법 + 보복 입증 결합 트랙 (기존 sns-* 와 분기: 외부 신고 보호 vs SNS 회사 비방).
// 3. 잦은 병가·통원치료 사유 해고 — 질병·신체장애 차별 + 합리적 배려 의무 결합 (기존 medical-leave-return-* 와 분기: 산재 아닌 사적 질병 누적).
// 4. 임산부 야간근로 거부 후 해고 — 근기법 70조 임산부 야간·휴일 금지 + 거부권 행사 보복 다툼 (기존 hoesik-refusal-* 와 분기: 법정 거부권 행사 보복).
// 5. 외국인 비자 만료 즉시 해고 — 외국인고용법 + 고용계약 책임 + 비자 갱신 협력의무 결합 (기존 sudden-* 와 분기: 외국인 특수 사정).

export const spokesBatch65Dismissal: SpokePage[] = [
  // ─── 1. dismissal-pregnancy-disclosure-immediate-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-disclosure-immediate-fire-track',
    keyword: '임신 통보 후 즉시 해고',
    questionKeyword: '임신 사실을 회사에 알린 다음 주에 해고 통보를 받았어요. 모성보호법 위반인가요?',
    ctaKeyword: '임신 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임신 통보 직후 해고 — 5단계 모성보호법 위반 다툼 | 로앤가이드',
      description:
        '임신 사실 알린 직후 해고됐다면 男女고용평등법 11조·근기법 23조 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임신 8주차에 입덧이 심해져 회사에 알리고 산부인과 진단서를 제출했습니다. 그 다음 주 인사팀이 \'조직 개편\'이라며 해고 통보. 같은 부서 동료는 그대로 자리를 지키고, 본인 자리에 새 직원이 채용 공고에 올라왔어요." 男女고용평등법 제11조는 임신·출산·육아휴직을 이유로 한 해고·차별을 절대 금지하는 영역이고, 근기법 제23조 제2항은 산전후 휴가기간과 그 후 30일간 해고를 금지합니다. 임신 통보와 해고 사이의 시간 근접성·합리적 사유 부재가 입증되면 ① 부당해고 + 모성보호 위반 ② 노동위 구제신청 ③ 男女고용평등법 37조 형사처벌(5년 이하 징역) ④ 민사 손해배상 4중 트랙이 가능한 영역입니다. 대응은 ① 임신 통보 시점 ② 해고 사유 자료 ③ 동료 비교 ④ 노동위 구제 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임신 통보 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시기·사유·비교·구제·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임신 통보-해고 시간 근접성</strong> — 1~3개월 내면 인과 추정 강함.</li>\n<li><strong>② 해고 사유 합리성</strong> — \"조직 개편\" 형식 사유 vs 실제 인력 변동.</li>\n<li><strong>③ 동일 부서 동료 처우 비교</strong> — 본인만 해고면 차별 강력 사정.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 모성보호 위반.</li>\n<li><strong>⑤ 男女고용평등법 37조 형사</strong> — 5년 이하 징역 또는 3천만원 이하 벌금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임신 통보 직후 해고는 모성보호법 위반 추정 강력 사정. 노동위 구제 + 형사 처벌 + 민사 손해배상 3중 트랙이 가능한 영역으로 평가될 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임신 통보 자료 보존 (즉시)</strong> — 진단서·통보 메일·메신저·관리자 답변.</li>\n<li><strong>2단계 — 해고 사유·동료 비교 자료 (1주)</strong> — 해고 통보서·동료 인사발령·채용공고.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 모성보호 위반 병행.</li>\n<li><strong>4단계 — 노동청 형사 진정 (男女고용평등법 37조)</strong> — 5년 이하 징역.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임신 통보 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임신·통보·해고 갈래입니다.</strong></p>\n<ul>\n<li><strong>임신 진단서·산부인과 진료기록</strong></li>\n<li><strong>회사에 임신 통보 메일·메신저·문서</strong></li>\n<li><strong>관리자·인사팀 답변 (반응 발언 녹취 포함)</strong></li>\n<li><strong>해고 통보서·사유서</strong></li>\n<li><strong>동일 부서 동료 인사발령·근무 현황</strong></li>\n<li><strong>본인 자리 후속 채용공고</strong></li>\n<li><strong>인사평가·근무평정 (임신 전 vs 후)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 관리자가 \"임신했으면 어쩔 수 없다\" 류 발언을 했다면 모성보호법 위반 의도의 직접 증거. 메신저·녹취 즉시 보존이 다툼의 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인과관계 추정</strong> — 통보-해고 시간 근접 + 합리적 사유 부재 결합.</li>\n<li><strong>"조직 개편" 위장</strong> — 본인 자리에 후속 채용 시 위장 사유 강력 사정.</li>\n<li><strong>본인만 표적</strong> — 동일 부서 다른 직원 잔류 시 차별 사정.</li>\n<li><strong>관리자 발언</strong> — \"임신\" 언급 발언은 의도 입증 직접 증거.</li>\n<li><strong>3중 트랙</strong> — 노동위 구제 + 男女고용평등법 형사 + 민사 동시 진행 가능한 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임신·출산 사유 해고 무효',
        summary:
          '대법원 90다9636(대법원, 1991.01.11 선고) 영역에서 법원은 임신·출산을 이유로 한 해고는 사회통념상 정당한 사유로 인정되기 어렵고, 사용자가 표면적으로 다른 사유를 들었더라도 임신 통보 시기와의 근접성·다른 근로자와의 처우 차이 등을 종합해 실질적 사유가 임신에 있다고 평가될 수 있는 경우 해고 무효로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '임신 통보-해고 근접성 + 동료 비교 차별이 다툼의 핵심 축. 형식 사유와 실질 사유 분리 평가.',
      },
    ],
    faq: [
      {
        question: '"조직 개편"이 정말 있었다고 회사가 주장하면요?',
        answer:
          '<strong>본인 자리 후속 채용·동료 잔류 입증으로 위장 사유 다툼 가능한 영역입니다.</strong>',
      },
      {
        question: '임신을 회사가 어떻게 알게 됐는지 입증해야 하나요?',
        answer:
          '<strong>본인이 통보한 자료(메일·진단서 제출) 시점이면 입증된 것으로 평가됩니다.</strong>',
      },
      {
        question: '男女고용평등법 형사 처벌은 어떻게 신청하나요?',
        answer:
          '<strong>관할 고용노동지청에 진정 또는 고발 가능합니다.</strong> 男女고용평등법 37조: 5년 이하 징역 또는 3천만원 이하 벌금.',
      },
      {
        question: '계약직인데 계약 만료 직전 임신을 알렸어요',
        answer:
          '<strong>계약 갱신 거절이 임신 사유라면 男女고용평등법 위반 다툼 가능한 영역입니다.</strong>',
      },
      {
        question: '권고사직서를 받았는데 임신 후 압박이었어요',
        answer:
          '<strong>의사 하자 + 모성보호법 위반 결합 다툼 가능합니다.</strong> 압박 정황 녹취·메신저 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '출산휴가 복귀 거부', href: '/guide/dismissal/dismissal-maternity-return-position-eliminated' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 2. dismissal-whistleblower-public-interest-retaliation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-whistleblower-public-interest-retaliation-track',
    keyword: '공익신고 후 보복 해고',
    questionKeyword: '회사 회계비리를 국민권익위에 신고했더니 두 달 만에 해고됐어요. 보호받을 수 있나요?',
    ctaKeyword: '공익신고 보복 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공익신고 후 보복 해고 — 5단계 신고자 보호법 다툼 | 로앤가이드',
      description:
        '공익신고 후 두 달 만에 해고됐다면 공익신고자 보호법·원상회복 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 협력업체 견적서를 부풀려 차액을 임원이 챙겨가는 정황을 발견해 국민권익위원회에 공익신고를 했습니다. 두 달 뒤 인사위가 열리고 \'근무태도 불량\'이라며 해고. 신고 전엔 매번 우수 평가를 받던 직원이었고, 사내에서 \'누가 신고했냐\'는 말이 돌아다녔어요." 공익신고자 보호법 제15조는 공익신고를 이유로 한 해고·전보·임금삭감 등 불이익 조치를 절대 금지하는 영역. 신고-해고 사이 시간 근접성·합리적 사유 부재가 인정되면 ① 부당해고 + 보호법 위반 ② 국민권익위 보호조치 신청(원상회복) ③ 보호법 30조 형사처벌(2년 이하 징역) ④ 민사 손해배상 4중 트랙이 가능한 영역입니다. 대응은 ① 신고 자료 ② 해고 사유 ③ 인과 입증 ④ 권익위 보호조치 ⑤ 노동위·민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공익신고 보복 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·시기·사유·보호·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 공익신고 대상 적격</strong> — 보호법 시행령 별표상 467개 법률 위반 신고.</li>\n<li><strong>② 신고-해고 시간 근접성</strong> — 6개월 내면 보호법상 추정 강함.</li>\n<li><strong>③ 해고 사유 합리성</strong> — \"근무태도\" 등 형식 사유 vs 신고 전 평가.</li>\n<li><strong>④ 국민권익위 보호조치 신청</strong> — 원상회복(복직)·기록 말소.</li>\n<li><strong>⑤ 노동위 구제 + 보호법 30조 형사</strong> — 2년 이하 징역 또는 2천만원 이하 벌금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공익신고 보복 해고는 일반 부당해고와 별도로 국민권익위 보호조치(원상회복)를 신청할 수 있는 영역. 보호법은 노동위보다 더 강력한 원상회복 명령권을 가진 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·보호·구제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고 자료·접수 증명 확보 (즉시)</strong> — 권익위 접수증·신고 내용·관련 증거.</li>\n<li><strong>2단계 — 해고 사유·인과 자료 (1~2주)</strong> — 신고 전 평가·해고 사유서·\"누가 신고\" 정황 메모.</li>\n<li><strong>3단계 — 국민권익위 보호조치 신청 (해고일 3년 내)</strong> — 원상회복·기록 말소.</li>\n<li><strong>4단계 — 노동위 구제신청 병행 (3개월)</strong> — 부당해고.</li>\n<li><strong>5단계 — 보호법 30조 형사 진정 + 민사</strong> — 손해배상 + 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공익신고 보복 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·해고·인과 갈래입니다.</strong></p>\n<ul>\n<li><strong>국민권익위 신고 접수증·신고서 사본</strong></li>\n<li><strong>신고 내용 관련 증거 자료 (회계·메일 등)</strong></li>\n<li><strong>신고-해고 사이 시간 흐름표</strong></li>\n<li><strong>해고 통보서·사유서·인사위 회의록</strong></li>\n<li><strong>신고 전 인사평가·우수직원 표창 등</strong></li>\n<li><strong>"누가 신고했냐" 정황 발언 메모·녹취</strong></li>\n<li><strong>동일 부서 동료 처우 비교</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공익신고자 보호법은 \"신고 후 6개월 이내 불이익 조치\"에 대해 입증 책임을 사용자에게 전환합니다. 6개월 내 해고면 회사가 정당 사유를 입증해야 하는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신고 대상 적격성</strong> — 보호법 별표상 법률 위반 여부 확인.</li>\n<li><strong>입증 책임 전환</strong> — 신고 후 6개월 내 불이익 조치는 회사가 정당 사유 입증.</li>\n<li><strong>익명·실명 신고</strong> — 익명도 보호 대상, 다만 실명이 보호 절차 진행 유리.</li>\n<li><strong>"누가 신고" 정황</strong> — 사내 추궁·색출 시도는 보복 의도 입증 사정.</li>\n<li><strong>원상회복</strong> — 권익위 보호조치는 복직 + 기록 말소 + 임금 보전 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국민권익위원회 1398 (공익신고 보호)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공익신고 보복 부당노동행위',
        summary:
          '대법원 99두4273(대법원, 1999.11.09 선고) 영역에서 법원은 사용자의 처분이 표면상 다른 사유를 들었더라도 실질적으로는 근로자의 신고·진정 등 적법한 권리행사에 대한 보복 의도에서 비롯되었다고 평가될 수 있는 경우 그 처분은 무효로 평가될 여지가 있고, 시간적 근접성·처분 사유의 합리성·다른 근로자와의 비교가 인과 판단의 핵심이라고 본 사례 흐름이 있습니다.',
        takeaway: '신고-해고 근접 + 사유 합리성 부재 + 동료 비교가 보복 입증 3대 축. 권익위 보호조치 트랙 별도 진행.',
      },
    ],
    faq: [
      {
        question: '익명으로 신고했는데도 보호받나요?',
        answer:
          '<strong>익명 신고도 보호 대상입니다.</strong> 다만 실명 신고가 보호조치 신청 시 절차상 유리합니다.',
      },
      {
        question: '신고한 사실이 외부 유출됐는데 입증이 어렵습니다',
        answer:
          '<strong>사내 \"누가 신고\" 추궁·색출 정황 자체가 보복 의도의 강한 사정으로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '권익위 보호조치와 노동위 구제 어느 게 유리한가요?',
        answer:
          '<strong>권익위는 원상회복(복직 + 임금 보전), 노동위는 부당해고 구제로 효과는 유사하나 신청 기간(권익위 3년 / 노동위 3개월)이 다릅니다.</strong> 병행 가능.',
      },
      {
        question: '내부 감사에 신고했는데 외부 신고 아닌데도 보호되나요?',
        answer:
          '<strong>공익신고자 보호법은 내부 신고·외부 신고 모두 보호 대상입니다.</strong>',
      },
      {
        question: '신고 후 1년 지나서 해고됐는데 보호되나요?',
        answer:
          '<strong>6개월 경과 시 입증 책임 전환은 적용되지 않으나 보복 입증 가능하면 보호됩니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '부당노동행위', href: '/guide/dismissal/dismissal-unfair-labor-practice' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 3. dismissal-attendance-medical-frequent-sick-leave-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-attendance-medical-frequent-sick-leave-track',
    keyword: '잦은 병가 사유 해고',
    questionKeyword: '만성 위염으로 월 2~3회 병가를 쓰는데 회사가 근태 불량으로 해고 통보했어요.',
    ctaKeyword: '병가 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '잦은 병가·통원치료 사유 해고 — 5단계 질병 차별 다툼 | 로앤가이드',
      description:
        '병가·통원치료 누적으로 해고됐다면 근기법 23조·합리적 배려 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"만성 위염과 역류성 식도염으로 1년간 월 2~3회 반차·병가를 사용했고 매번 진단서를 제출했습니다. 인사팀이 \'근태 불량 누적\'으로 인사위 회부, 두 주 만에 해고. 진단서·연차 범위 내 사용·업무 성과는 평균 이상이었는데 \"건강 상태가 업무에 부적합\"이라는 이유로 정리됐어요." 근기법 제23조는 정당한 사유 없는 해고를 금지하고, 장애인고용법·男女고용평등법 등은 질병·신체상태를 이유로 한 차별을 금지합니다. 잦은 병가 해고는 ① 사용한 휴가가 법정·연차 범위 내인지 ② 회사가 직무 재배치·합리적 배려 시도를 했는지 ③ 업무 성과 부진 입증 ④ 사회통념상 상당성 5가지 심사가 핵심. 대응은 ① 진단서·휴가 기록 ② 재배치 시도 부재 ③ 성과 자료 ④ 노동위 구제 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 잦은 병가 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴가권·배려·성과·구제·차별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 법정·연차 휴가 범위 내 사용</strong> — 연차·병가·반차는 권리 행사.</li>\n<li><strong>② 진단서 제출·정당성 입증</strong> — 의학적 사유 입증 시 무단 결근 아님.</li>\n<li><strong>③ 직무 재배치·합리적 배려</strong> — 건강 상태 고려 재배치 시도 의무.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 질병 차별.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 법정 휴가 권리 행사를 \"근태 불량\"으로 평가하는 것은 권리 행사 보복 평가 여지. 진단서 + 연차 범위 내 사용은 정당한 권리로 평가될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단서·휴가 신청 자료 보존 (즉시)</strong> — 병원 진단서·휴가 승인 기록.</li>\n<li><strong>2단계 — 재배치 요청·성과 자료 (1~2주)</strong> — 합리적 배려 요청 메일·인사평가.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 차별 병행.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 휴가권·재배치·성과 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">잦은 병가 사유 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·휴가·성과 갈래입니다.</strong></p>\n<ul>\n<li><strong>의사 진단서·진료기록·처방전</strong></li>\n<li><strong>병가·반차·연차 신청서·승인 기록</strong></li>\n<li><strong>회사 휴가 규정·취업규칙</strong></li>\n<li><strong>인사평가·업무 성과 자료</strong></li>\n<li><strong>재배치·합리적 배려 요청 메일</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>동일 부서 동료 휴가·근태 비교</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 \"잦은 결근\"을 사유로 들 때 결근일이 사실은 승인된 연차·병가라면 그 자체로 사유 부재. 휴가 승인 기록을 시간순으로 정리한 표가 다툼의 출발점.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>휴가 vs 결근</strong> — 승인된 연차·병가는 결근 아님.</li>\n<li><strong>진단서 제출</strong> — 의학적 사유 입증 시 정당성 강함.</li>\n<li><strong>재배치 의무</strong> — 건강 상태 고려 다른 직무 검토 부재 시 합리성 부정.</li>\n<li><strong>성과 부진 입증</strong> — 휴가와 무관한 객관적 성과 자료 필요.</li>\n<li><strong>장애 평가</strong> — 만성질환이 장애인고용법상 장애에 해당하면 차별 사정 가중.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 질병·결근과 해고의 정당성',
        summary:
          '대법원 2018두43958(대법원, 2021.04.29 선고) 영역에서 법원은 질병·건강상의 사유로 인한 결근·근무 능력 저하가 해고의 정당한 사유가 되려면 그 정도가 사회통념상 근로계약을 유지하기 어려울 정도에 이르렀다고 평가될 수 있어야 하고, 사용자에게는 직무 전환·재배치 등 합리적 배려를 시도할 의무가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '잦은 병가만으로는 해고 사유 부족. 재배치 시도 부재 + 휴가 권리 행사 보복이 다툼의 출발점.',
      },
    ],
    faq: [
      {
        question: '연차를 한꺼번에 많이 썼는데 결근으로 처리됐어요',
        answer:
          '<strong>승인된 연차는 결근 아닙니다.</strong> 휴가 신청서·승인 기록 보존이 핵심 다툼 근거.',
      },
      {
        question: '진단서를 매번 제출했는데도 \"꾀병\"이라고 해요',
        answer:
          '<strong>진단서는 의학적 사유 입증의 정본입니다.</strong> 회사 주관 평가로 부인되지 않는 영역.',
      },
      {
        question: '재배치 요청을 안 했는데도 다툴 수 있나요?',
        answer:
          '<strong>회사 측에 합리적 배려 검토 의무가 있어 다툼 가능합니다.</strong> 다만 요청 자료가 있으면 더 유리.',
      },
      {
        question: '만성질환이 장애에 해당하면 어떻게 다르나요?',
        answer:
          '<strong>장애인차별금지법상 정당한 편의제공 의무가 추가되어 차별 사정 가중됩니다.</strong>',
      },
      {
        question: '병가가 무급이라 회사가 불이익 없다고 주장해요',
        answer:
          '<strong>무급이라도 정당한 휴가권 행사이며 이를 사유로 해고는 별개 다툼 영역입니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '의료휴직 복귀 거부', href: '/guide/dismissal/dismissal-medical-leave-return-deployment-refused-track' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 4. dismissal-pregnant-night-shift-refusal-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnant-night-shift-refusal-fire-track',
    keyword: '임산부 야간근로 거부 해고',
    questionKeyword: '임신 7개월에 야간 당직을 거부했더니 회사가 명령불복종이라며 해고했어요.',
    ctaKeyword: '임산부 야간 거부 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임산부 야간근로 거부 해고 — 5단계 근기법 70조 보호 | 로앤가이드',
      description:
        '임산부 야간근로 거부 후 해고됐다면 근기법 70조·男女고용평등법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임신 7개월에 회사가 야간 당직 순번을 배정했고 산모 건강 위협이라 거부했습니다. 인사팀이 \'업무 명령 불복종\'이라며 인사위, 두 주 뒤 해고 통보. 거부 의사를 표시할 때 산부인과 진단서도 첨부했고, 다른 임산부 동료는 야간 면제를 받았는데 본인만 정리됐어요." 근기법 제70조 제2항은 임산부의 야간근로(22시~06시)·휴일근로를 본인의 명시적 청구가 없으면 금지하는 영역입니다. 즉 거부할 권리가 법으로 보장된 영역이고, 거부를 사유로 한 해고는 법정 권리행사 보복 + 男女고용평등법 11조 모성보호 위반 다툼이 가능합니다. 대응은 ① 임신 진단서 ② 거부 의사 표시 ③ 동료 비교 ④ 노동위 구제 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임산부 야간 거부 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·거부·동료·구제·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근기법 70조 권리 행사</strong> — 임산부 야간·휴일 거부권 법정 보장.</li>\n<li><strong>② 거부 의사 표시 기록</strong> — 진단서 첨부·서면·메일 보존.</li>\n<li><strong>③ 동료 처우 비교</strong> — 다른 임산부 면제 vs 본인만 해고.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 男女고용평등법 11조.</li>\n<li><strong>⑤ 근기법 110조·男女고용평등법 37조 형사</strong> — 5년 이하 징역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 야간근로 거부는 근기법이 명시적으로 보장한 권리. 권리행사를 \"명령 불복종\"으로 처분하는 것 자체가 위법 평가 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임신·거부 자료 보존 (즉시)</strong> — 진단서·거부 의사 메일·메신저.</li>\n<li><strong>2단계 — 동료 처우 비교 자료 (1주)</strong> — 다른 임산부 면제 사례.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 모성보호 위반.</li>\n<li><strong>4단계 — 노동청 형사 진정</strong> — 근기법 70조·男女고용평등법 위반.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임산부 야간 거부 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임신·거부·해고 갈래입니다.</strong></p>\n<ul>\n<li><strong>임신 진단서·산부인과 진료기록</strong></li>\n<li><strong>야간 당직·휴일근로 배정 통보서</strong></li>\n<li><strong>거부 의사 표시 메일·메신저·서면</strong></li>\n<li><strong>다른 임산부 동료 면제 사례 자료</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>근로계약서·취업규칙 (근로시간 조항)</strong></li>\n<li><strong>관리자 발언 메모·녹취 (\"임신이면 그만둬\" 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거부 의사 표시 시 \"근기법 70조 권리 행사\" 문구를 명시한 메일 형식이 추후 다툼에서 가장 강한 입증. 구두 거부는 회사가 부인할 여지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법정 권리</strong> — 야간 거부는 근기법이 명시 보장.</li>\n<li><strong>의사 표시 형식</strong> — 진단서 + 서면 거부가 가장 강함.</li>\n<li><strong>"업무 명령 불복종" 위장</strong> — 위법 명령 거부는 불복종 아님.</li>\n<li><strong>동료 면제 vs 본인 해고</strong> — 차별 강력 사정.</li>\n<li><strong>3중 트랙</strong> — 노동위 구제 + 형사 + 민사 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임신 사유 처분의 효력',
        summary:
          '대법원 93다5765(대법원, 1993.09.28 선고) 영역에서 법원은 사용자가 표면적으로 다른 사유를 들었더라도 실질적으로 근로자의 임신·출산을 사유로 한 해고는 사회통념상 정당한 사유가 있다고 보기 어렵고, 임신과 처분 사이의 시간 근접성·다른 근로자와의 처우 차이를 종합해 무효로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '법정 거부권 행사 보복은 표면 사유와 무관하게 위법 평가. 동료 면제 사례 + 진단서가 다툼 축.',
      },
    ],
    faq: [
      {
        question: '거부 의사를 구두로만 표시했는데도 인정될까요?',
        answer:
          '<strong>구두 거부도 의사 표시이지만, 진단서 + 서면 형식이 입증력 가장 강합니다.</strong>',
      },
      {
        question: '회사가 "본인이 청구하면 야간 가능하다"고 주장해요',
        answer:
          '<strong>거부 의사가 명확했다면 청구 부재로 야간 명령 자체가 위법입니다.</strong>',
      },
      {
        question: '임신 초기인데 야간 거부 권리가 있나요?',
        answer:
          '<strong>네, 근기법 70조는 임신 전 기간 적용됩니다.</strong> 진단서로 임신 확인되면 적용 대상.',
      },
      {
        question: '인사위 의결이 있었으니 정당하다고 회사가 해요',
        answer:
          '<strong>위법 명령 거부 사유로 한 의결은 절차 형식과 무관하게 실체적 위법입니다.</strong>',
      },
      {
        question: '근기법 70조 위반은 어떻게 형사 진정하나요?',
        answer:
          '<strong>관할 고용노동지청에 진정 또는 고발 가능합니다.</strong> 근기법 110조: 2년 이하 징역 또는 2천만원 이하 벌금.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '출산휴가 복귀 거부', href: '/guide/dismissal/dismissal-maternity-return-position-eliminated' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 5. dismissal-foreign-worker-visa-expire-immediate-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-foreign-worker-visa-expire-immediate-fire-track',
    keyword: '외국인 비자 만료 즉시 해고',
    questionKeyword: 'E-9 비자 갱신 기간 중인데 회사가 비자 만료일 다음 날 즉시 해고 통보했어요.',
    ctaKeyword: '외국인 비자 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 비자 만료 즉시 해고 — 5단계 갱신 협력의무 다툼 | 로앤가이드',
      description:
        '비자 만료일 다음 날 해고됐다면 외국인고용법·갱신 협력의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"E-9 비자로 3년 일했고 갱신 신청 중이었는데, 회사가 비자 만료일 다음 날 \'체류 자격이 없다\'며 즉시 해고. 사실은 갱신에 필요한 회사 측 서류(고용계약 연장 동의서·납세 증명 등)를 회사가 발급 지연한 탓에 만료일을 넘긴 상황이었어요. 그동안 받지 못한 임금·퇴직금도 정산되지 않았습니다." 외국인고용법은 외국인근로자에게도 근기법·男女고용평등법 등 노동관계법을 동일하게 적용하도록 정한 영역. 비자 만료 자체로 자동 해고가 되는 것은 아니고 ① 회사의 비자 갱신 협력 의무 ② 갱신 서류 발급 지연이 회사 귀책인지 ③ 해고 절차(서면 통지·소명) ④ 임금·퇴직금 정산 5가지 심사가 핵심입니다. 대응은 ① 비자·갱신 자료 ② 회사 귀책 입증 ③ 노동위 구제 ④ 임금 청구 ⑤ 출입국 협조 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 비자 만료 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신·귀책·절차·구제·임금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비자 갱신 신청 시점·회사 협력</strong> — 사용자에게 갱신 협력 의무.</li>\n<li><strong>② 갱신 지연 귀책 분석</strong> — 회사 서류 발급 지연 시 회사 귀책.</li>\n<li><strong>③ 해고 절차 (서면 통지·소명 기회)</strong> — 근기법 27조 동일 적용.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 외국인도 동일 구제 대상.</li>\n<li><strong>⑤ 임금·퇴직금 정산</strong> — 미지급 시 노동청 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비자 만료가 회사 귀책(서류 지연)이라면 즉시 해고는 신의칙 위반 + 부당해고 평가 여지. 외국인이라도 근기법·노동위 절차 동일 적용되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·임금 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 비자·갱신 자료 보존 (즉시)</strong> — 비자·갱신 신청·회사 서류 요청 메일.</li>\n<li><strong>2단계 — 회사 귀책 입증 (1~2주)</strong> — 서류 발급 지연·답변 부재.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고.</li>\n<li><strong>4단계 — 임금·퇴직금 진정 (고용노동부)</strong> — 미지급 시 형사 진정.</li>\n<li><strong>5단계 — 출입국 협조·체류 자격 회복</strong> — 다른 사업장 변경·자진출국 회피.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 비자 만료 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 비자·고용·정산 갈래입니다.</strong></p>\n<ul>\n<li><strong>비자(E-9 등)·외국인등록증·체류 자격 자료</strong></li>\n<li><strong>비자 갱신 신청서·접수증·진행 기록</strong></li>\n<li><strong>회사에 갱신 협력 서류 요청 메일·답변</strong></li>\n<li><strong>고용계약서·근무 기간·임금 명세서</strong></li>\n<li><strong>해고 통보서·사유서</strong></li>\n<li><strong>미지급 임금·퇴직금 산정 자료</strong></li>\n<li><strong>출입국 사무소 안내·체류 변경 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 \"비자 만료니까 어쩔 수 없다\"고 해도 회사가 갱신 협력 의무를 이행했는지가 다툼 축. 서류 요청-답변 시점이 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비자 만료 = 자동 해고 아님</strong> — 별도 해고 절차 필요.</li>\n<li><strong>회사 협력 의무</strong> — 고용계약 연장 동의·납세증명 발급 의무.</li>\n<li><strong>서면 통지·소명 기회</strong> — 외국인도 근기법 27조 적용.</li>\n<li><strong>임금·퇴직금 정산</strong> — 체류 자격과 무관하게 노동관계법 적용.</li>\n<li><strong>사업장 변경권</strong> — 회사 귀책 시 외국인고용법상 사업장 변경 사유 인정 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (외국어 통역 지원)</strong></li>\n<li><strong>외국인노동자지원센터 1644-0644</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인근로자 보호와 해고',
        summary:
          '대법원 91다41897(대법원, 1992.07.28 선고) 영역에서 법원은 사용자가 표면상의 사유로 해고를 단행하더라도 그 실질이 근로자의 정당한 권리행사·체류 자격 등 외부 사정을 이유로 한 것이라면 사회통념상 상당성을 결여한 해고로 평가될 여지가 있고, 외국인근로자에 대해서도 근로기준법상 해고 제한 규정은 동일하게 적용된다고 본 사례 흐름이 있습니다.',
        takeaway: '외국인이라는 신분 자체가 해고 사유가 되지 않음. 회사 협력 의무·서면 통지·임금 정산 동일 적용.',
      },
    ],
    faq: [
      {
        question: '비자 만료 후에도 노동위 구제 신청이 가능한가요?',
        answer:
          '<strong>네, 외국인근로자도 동일하게 구제 신청 가능합니다.</strong> 체류 자격 회복 절차와 병행 가능.',
      },
      {
        question: '회사가 갱신 서류를 안 줘서 만료된 거예요',
        answer:
          '<strong>회사 귀책의 핵심 사정입니다.</strong> 서류 요청-답변 메일·메신저 보존이 다툼 입증.',
      },
      {
        question: '임금·퇴직금은 받을 수 있나요?',
        answer:
          '<strong>체류 자격과 무관하게 받을 권리가 있습니다.</strong> 고용노동부 1350 진정.',
      },
      {
        question: '체류 기간이 끝나면 한국에서 다툼이 어렵지 않나요?',
        answer:
          '<strong>사업장 변경권·체류기간 연장 신청으로 다툼 기간 확보 가능한 영역입니다.</strong> 외국인노동자지원센터 안내 받아보세요.',
      },
      {
        question: '구두로만 해고 통보 받았어요',
        answer:
          '<strong>서면 통지 부재는 절차 하자로 추가 다툼 사유입니다.</strong> 근기법 27조 동일 적용.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '해고 서면 통지', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },
];
