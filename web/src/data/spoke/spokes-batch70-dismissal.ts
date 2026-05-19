import { SpokePage } from '../spoke-pages';

// batch70 dismissal — 5개 (2026-05-20)
//
// 고유 존재 이유:
// 1. 정직·경고 누적 후 해고 — 단일 위반(single-violation)·1회 정직(suspension-then-fire) 트랙과 분기. 여기는 '경고 → 정직 → 정직 → 해고' 식의 누적 양정 부당성(양정 사회통념·동종 비위 형평성) 그 자체를 다투는 트랙.
// 2. 팀 해체 명목 콕집기 해고 — department-abolition-single-target-track / workplace-closure-layoff 와 분기. 여기는 \'팀 단위만 해체 + 같은 팀원 중 1~2명만 해고 + 다른 팀원은 다른 부서 흡수\' 패턴(일부 사업 폐지 = 경영상 해고 요건 필요) 트랙.
// 3. 상사 사적심부름 거절 후 보복 해고 — hoesik-refusal-retaliation 와 분기. 여기는 \'회식\'이 아니라 \'사적 심부름·개인업무 대행·자녀 학원 픽업 등 업무 외 지시\' 거절 후 평가 하락·표적 징계 트랙.
// 4. 사규 위반 명목 표적 징계해고 — single-violation-disciplinary-fire / disciplinary-excessive 와 분기. 여기는 \'평소엔 묵인되던 사규 조항을 특정 직원에게만 표적 적용\' 형평성·차별적 운영 트랙. 통보서 용어 해석·취업규칙 객관적 의미 다툼.
// 5. 사용자 도산·일부 사업 폐지 + 도산대지급금 트랙 — workplace-closure-layoff 와 분기. 여기는 \'사업 전체 폐업이 아닌 일부 사업·지점 폐지\' + 회사 도산 임박 + 도산대지급금(고용노동부) 결합 트랙.

export const spokesBatch70Dismissal: SpokePage[] = [
  // ─── 1. dismissal-warning-suspension-stacking-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-warning-suspension-stacking-fire-track',
    keyword: '경고·정직 누적 후 해고',
    questionKeyword: '소소한 사규 위반으로 경고 1회 + 정직 2회를 받았고, 마지막 위반으로 결국 해고됐어요. 이전 징계를 누적해 해고하는 게 정당한가요?',
    ctaKeyword: '경고·정직 누적 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경고·정직 누적 해고 — 5단계 양정 부당성 다툼 | 로앤가이드',
      description:
        '경고·정직 등 누적 징계를 사유로 해고됐다면 양정 사회통념·형평성·이중처벌 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 5년 차에 \'근무시간 중 사적 통화\'로 서면 경고 1회를 받았고, 이후 \'지각 누적\'으로 정직 2주, \'동료와 사소한 다툼\'으로 정직 1주를 추가로 받았습니다. 그리고 6개월 뒤 \'업무 보고 지연\'을 사유로 \'기존 징계 누적을 종합 고려\'했다며 해고 통보를 받았어요. 마지막 위반 자체는 객관적으로 가벼운 사안이었고, 같은 부서 다른 동료들의 비슷한 비위는 구두 주의로 끝나는 일이 많았는데도 본인만 단계별 징계를 쌓더니 결국 해고로 마무리됐습니다." 해고는 \'사회통념상 고용관계를 계속할 수 없을 정도\'로 근로자에게 책임 있는 사유가 있는 경우에 행하여져야 정당하다고 평가되는 영역이고, 징계양정은 비위의 성질·실손해·동종 비위 형평성·개선 가능성·교육·전환배치 기회 등을 종합 고려하는 트랙입니다. 피해자라면 ① 마지막 위반 자체의 경미성 ② 동종 비위 형평성 ③ 이중처벌·누적 양정의 부당성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 위반 ② 형평 ③ 양정 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경고·정직 누적 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위반·형평·양정·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 마지막 위반 자체의 경미성</strong> — 해고 직전 위반의 실손해·고의성 평가.</li>\n<li><strong>② 동종 비위 형평성</strong> — 같은 부서 동료의 유사 비위 처우와의 비교 사정.</li>\n<li><strong>③ 누적 양정의 부당성</strong> — 이미 정직으로 처분 완료된 사유를 다시 해고 양정에 반영하는 것의 적정성 다툼.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재 + 상당성 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 누적 징계 자체가 해고 정당성을 자동 인정하지 않는 영역. 마지막 위반의 경미성 + 동료 형평성 부재 + 개선 기회 미부여 시 \'사회통념상 유지 불가\' 인정이 어려운 트랙입니다. 이미 처분 완료된 정직 사유를 해고 양정 반영 시 \'이중처벌\' 논쟁도 발생합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 징계 이력·통보서 보존 (즉시)</strong> — 경고서·정직 처분서·인사위 회의록 일체.</li>\n<li><strong>2단계 — 동료 비위·처우 자료 (1~2주)</strong> — 같은 부서 유사 비위의 구두 주의·서면 경고 처리 사례.</li>\n<li><strong>3단계 — 마지막 위반 경미성 입증 (2주)</strong> — 실손해 부재·개선 기회 미부여 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 양정 부당 + 상당성·이중처벌 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경고·정직 누적 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·형평·양정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경고서·정직 처분서·인사위 회의록 (회차별)</strong></li>\n<li><strong>해고 통보서·사유서·종합 징계 양정 내역</strong></li>\n<li><strong>같은 부서 동료의 유사 비위 처리 사례 자료</strong></li>\n<li><strong>마지막 위반 관련 실손해 부재 입증 자료</strong></li>\n<li><strong>본업 평가표·인사평가 자료 (개선 추이)</strong></li>\n<li><strong>취업규칙·단체협약 (징계 양정·해고 조항)</strong></li>\n<li><strong>인사팀 면담 메모·교육·전환배치 기회 부재 정황</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정직 등 \'기존 처분 완료\' 사유를 해고 양정에 다시 반영했다는 사정이 핵심 다툼 지점. 통보서·인사위 회의록에 \'기존 징계 누적 고려\' 문구가 명시됐다면 이중처벌 다툼 강한 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>마지막 위반 경미성</strong> — 단독 사유로는 해고 정당성 인정 어려운 영역.</li>\n<li><strong>형평성 위반</strong> — 같은 부서 동료의 유사 비위가 구두 주의로 끝났다는 비교 사정.</li>\n<li><strong>이중처벌</strong> — 정직으로 이미 처분 완료된 사유의 해고 양정 재반영 다툼.</li>\n<li><strong>교육·전환배치 기회 부재</strong> — 사용자의 개선 기회 부여 의무 위반.</li>\n<li><strong>절차 흠결</strong> — 인사위 소명 기회·재심 절차 부재 시 절차상 무효 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사회통념상 유지 불가와 징계양정 참작자료',
        summary:
          '대법원 2010다21962(대법원, 2011.03.24 선고) 영역에서 법원은 해고는 사회통념상 고용관계를 계속할 수 없을 정도로 근로자에게 책임 있는 사유가 있는 경우에 행하여져야 정당하고, \'사회통념상 고용관계를 계속할 수 없을 정도\'인지는 사용자 측의 사정과 근로자가 저지른 비위행위의 동기와 경위·비위행위에 의해 기업 질서가 침해될 위험·과거 근무 태도 등 여러 사정을 종합 검토하여 판단하며, 징계처분에서 징계사유로 삼지 아니한 비위행위도 원칙적으로 징계양정의 참작자료로 삼을 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '징계양정 = 마지막 위반 + 과거 비위 종합 평가 영역이지만, 사회통념상 유지 불가 인정에는 비위의 동기·기업 질서 침해 위험·형평성 종합 판단 필요. 누적만으로 자동 해고 정당성 인정되지 않는 트랙.',
      },
    ],
    faq: [
      {
        question: '이미 정직으로 처분 완료된 사유를 해고 양정에 다시 반영해도 되나요?',
        answer:
          '<strong>이중처벌 다툼 가능한 영역입니다.</strong> 통보서·인사위 회의록에 \'기존 징계 누적 고려\' 명시 시 다툼 강한 사정.',
      },
      {
        question: '같은 부서 동료는 비슷한 비위로 구두 주의만 받았어요',
        answer:
          '<strong>형평성 위반은 양정 부당의 핵심 사정입니다.</strong> 동료의 비위·처우 비교 자료가 결정 입증.',
      },
      {
        question: '경고·정직 단계마다 인사위 소명 기회가 부족했어요',
        answer:
          '<strong>각 단계의 절차 흠결은 누적 양정 자체의 적정성 다툼 사정입니다.</strong> 회차별 통보서·소명 기회 자료 보존.',
      },
      {
        question: '마지막 위반은 \'업무 보고 지연\' 정도였는데 해고가 정당한가요?',
        answer:
          '<strong>마지막 위반 경미성 + 실손해 부재는 정당성 부정 강한 사정입니다.</strong> 보고 지연으로 인한 실손해 부재 입증 결정.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 양정 부당 결합 다툼 가능한 영역입니다.</strong> 면담 정황·발언 녹취 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '경고 누적 후 해고 효력', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '경고·정직 누적 패턴', href: '/guide/dismissal/dismissal-warning-stacking-multiple-track' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '단일 위반 징계 해고', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
    ],
  },

  // ─── 2. dismissal-team-disbandment-only-one-laid-off-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-team-disbandment-only-one-laid-off-track',
    keyword: '팀 해체 명목 콕집기 해고',
    questionKeyword: '소속 팀을 해체한다며 같은 팀원 중 저만 해고됐고, 다른 팀원들은 다른 부서로 흡수됐어요. 콕집기 해고로 다툴 수 있나요?',
    ctaKeyword: '팀 해체 콕집기 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '팀 해체 콕집기 해고 — 5단계 경영상 해고 요건 다툼 | 로앤가이드',
      description:
        '팀 해체 명목으로 본인만 해고됐다면 일부 사업 폐지·경영상 해고 요건·합리적 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 4년 차 마케팅팀에서 일하던 중 회사가 \'마케팅 외주화\'를 이유로 팀 해체를 통보했고, 같은 팀원 5명 중 4명은 영업기획팀·홍보팀 등 다른 부서로 흡수됐는데 본인만 해고 통보를 받았습니다. 회사 측은 \'팀이 없어졌으니 통상해고\'라며 경영상 해고에 필요한 50일 협의·선정 기준·노조 통보 등을 거치지 않았고, 본인이 흡수되지 못한 합리적 사유 설명도 없었어요. 같은 직무 능력을 가진 동료가 다른 팀에 흡수된 정황을 보면 사실상 본인만 표적이 됐다는 의심이 강했습니다." 사용자가 일부 사업 부문을 폐지하면서 그 사업 부문에 속한 근로자를 해고하려면 근로기준법 제24조의 경영상 해고 요건(긴박한 경영상 필요성·해고 회피 노력·합리적·공정한 선정 기준·근로자대표 50일 협의)을 갖춰야 하는 영역이고, 이를 갖추지 못한 해고는 정당한 이유가 없어 무효 평가가 가능한 트랙입니다. 피해자라면 ① 일부 사업 폐지 vs 사업 전체 폐업 ② 경영상 해고 요건 ③ 선정 기준 합리성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 범위 ② 요건 ③ 선정 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 팀 해체 콕집기 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 범위·요건·선정·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 일부 사업 폐지 평가</strong> — 팀 해체 = 사업 전체 폐업이 아닌 영역. 원칙적 \'사업 축소\' 영역.</li>\n<li><strong>② 경영상 해고 요건</strong> — 긴박한 경영상 필요성·해고 회피 노력·50일 협의 갖춤 여부.</li>\n<li><strong>③ 선정 기준의 합리성·공정성</strong> — 같은 팀원 중 본인만 제외된 기준의 객관성.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 경영상 해고 요건 위반·정당한 이유 부재.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 팀 해체는 원칙적 \'사업 축소\' 영역이라 경영상 해고 요건 충족이 필요한 트랙. 같은 팀원이 다른 부서에 흡수됐다는 사정 자체가 해고 회피 노력 + 선정 기준 합리성 부정의 강한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 팀 해체 통보·인사명령 자료 보존 (즉시)</strong> — 팀 해체 공문·해고 통보서·사내 게시판 자료.</li>\n<li><strong>2단계 — 동료 흡수 자료 (1~2주)</strong> — 같은 팀원의 다른 부서 발령 통보서·조직도 변동.</li>\n<li><strong>3단계 — 경영상 요건 흠결 자료 (2주)</strong> — 50일 협의·노조 통보·선정 기준 공시 부재 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 경영상 해고 요건 위반.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">팀 해체 콕집기 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 범위·요건·선정 갈래입니다.</strong></p>\n<ul>\n<li><strong>팀 해체·조직 개편 통보 공문·사내 게시판 캡처</strong></li>\n<li><strong>같은 팀원의 흡수·재배치 통보서·조직도 변동 자료</strong></li>\n<li><strong>본인 해고 통보서·사유서·인사명령</strong></li>\n<li><strong>회사 재무·경영 상황 공시·내부 메모 (회피 노력 평가)</strong></li>\n<li><strong>근로자대표 50일 협의·노조 통보 여부 자료</strong></li>\n<li><strong>해고 대상자 선정 기준·평가 공시 여부 자료</strong></li>\n<li><strong>본인 직무 평가·실적·전환배치 가능 직무 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"통상해고\" 명목 vs \"경영상 해고\" 실질의 분리가 핵심. 팀 해체 + 같은 팀원 흡수 패턴이면 실질은 경영상 해고이므로 50일 협의·선정 기준·노조 통보 흠결만으로도 무효 평가 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일부 사업 폐지의 실질</strong> — 팀 해체 = 사업 전체 폐업 아닌 영역.</li>\n<li><strong>해고 회피 노력 부재</strong> — 같은 팀원 흡수와 본인 제외의 합리적 사유 부재.</li>\n<li><strong>50일 협의 부재</strong> — 근기법 제24조 협의 절차 흠결 시 절차상 무효 사정.</li>\n<li><strong>선정 기준 자의성</strong> — 객관적·합리적 기준 공시 부재.</li>\n<li><strong>표적 의심</strong> — 노조 활동·임신·신고 등 보호 사유 결합 시 부당노동행위 별도 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 사업 폐지와 통상해고·경영상 해고 요건',
        summary:
          '대법원 2016두64876(대법원, 2021.07.29 선고) 영역에서 법원은 어떤 기업이 경영상 이유로 사업을 여러 부문으로 나누어 경영하다가 그중 일부를 폐지하기로 하였더라도 이는 원칙적으로 사업 축소에 해당할 뿐 사업 전체의 폐지라고 할 수 없으므로, 사용자가 일부 사업을 폐지하면서 그 사업 부문에 속한 근로자를 해고하려면 근로기준법 제24조에서 정한 경영상 이유에 의한 해고 요건을 갖추어야 하고, 그 요건을 갖추지 못한 해고는 정당한 이유가 없어 무효이며, 일부 사업 폐지가 사업 전체 폐업과 같다고 인정되려면 별도의 특별한 사정이 인정되어야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '팀·부서 해체 = 사업 축소 영역. 통상해고 명목으로도 경영상 해고 요건(긴박성·회피노력·합리적 선정·50일 협의) 갖춰야 정당. 같은 팀원이 흡수됐다면 회피 노력 부재 강한 사정.',
      },
    ],
    faq: [
      {
        question: '회사가 \'통상해고\'라 말했는데 경영상 해고 요건이 적용되나요?',
        answer:
          '<strong>명칭이 아니라 실질로 판단되는 영역입니다.</strong> 일부 사업 폐지에 따른 해고는 원칙적 경영상 해고 트랙.',
      },
      {
        question: '같은 팀원이 다른 부서에 흡수된 게 어떤 의미인가요?',
        answer:
          '<strong>해고 회피 노력 + 선정 기준 합리성 부정의 강한 사정입니다.</strong> 인사명령·조직도 자료 확보 결정.',
      },
      {
        question: '50일 협의 없이 해고됐는데 이것만으로도 무효인가요?',
        answer:
          '<strong>50일 협의 흠결은 절차상 무효 사정입니다.</strong> 근로자대표·노조 통보 부재 정황 보존.',
      },
      {
        question: '회사 재무 상황이 안 좋다는데 그래도 다툴 수 있나요?',
        answer:
          '<strong>긴박성 인정되더라도 회피 노력·선정 기준·협의가 별도 요건 영역입니다.</strong> 4요건 동시 충족 평가.',
      },
      {
        question: '임신·노조 활동과 결합된 경우 추가 트랙이 있나요?',
        answer:
          '<strong>부당노동행위·차별적 대우 별도 다툼 가능한 영역입니다.</strong> 보호 사유 입증 자료 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부서 폐지 단일 표적', href: '/guide/dismissal/dismissal-department-abolition-single-target-track' },
      { label: '합병 후 직책 소멸', href: '/guide/dismissal/dismissal-company-merger-position-elimination' },
      { label: '구조조정 직책 소멸', href: '/guide/dismissal/dismissal-restructuring-position-elimination' },
      { label: '사업장 폐쇄 정리해고', href: '/guide/dismissal/dismissal-workplace-closure-layoff' },
    ],
  },

  // ─── 3. dismissal-private-errand-refusal-retaliation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-private-errand-refusal-retaliation-track',
    keyword: '상사 사적심부름 거절 후 보복 해고',
    questionKeyword: '상사의 자녀 학원 픽업·개인 쇼핑 같은 사적 심부름을 거절했더니 평가 하락 + 표적 징계로 해고됐어요.',
    ctaKeyword: '상사 사적심부름 거절 보복 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사적심부름 거절 후 보복 해고 — 5단계 직권남용 다툼 | 로앤가이드',
      description:
        '상사의 사적 심부름 거절 후 보복성 평가·징계·해고를 받았다면 직무 관련성·보복성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"상사가 \'자녀 학원 픽업\'·\'본인 차량 세차\'·\'개인 쇼핑\' 같은 명백히 업무와 무관한 사적 심부름을 지속적으로 시켰고, 정중하게 거절하기 시작한 시점부터 평가가 \'중\'에서 \'하\'로 떨어졌습니다. 이후 \'업무 협조 부족\'·\'팀워크 저해\'·\'근태 불성실\' 등의 사유로 서면 경고 + 정직이 누적됐고, 결국 \'반복적 업무 거부\'를 사유로 해고 통보를 받았어요. 사적 심부름 지시 자체에 대한 녹취·메신저는 확보돼 있고, 같은 시기 다른 동료들의 사적 심부름 수행 여부와 평가 차이도 비교 가능한 상태입니다." 근로자는 근로계약상 의무 범위 내의 업무 지시에 협조할 신의칙상 의무가 있는 영역이지만, 업무와 무관한 \'사적 심부름\'은 그 범위를 벗어나며, 거절을 사유로 한 평가 하락·징계·해고는 직권남용·보복성 다툼이 가능한 트랙입니다. 피해자라면 ① 사적 심부름의 직무 무관성 ② 거절의 정당성 ③ 보복성 평가·징계 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 직무 ② 거절 ③ 보복 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사적심부름 거절 보복 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 직무·거절·보복·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사적 심부름의 직무 무관성</strong> — 자녀 픽업·개인 쇼핑 등은 근로계약 범위 외 영역.</li>\n<li><strong>② 거절의 정당성</strong> — 직무 무관 지시 거절은 \'업무 거부\'로 평가될 수 없는 영역.</li>\n<li><strong>③ 보복성 평가·징계</strong> — 거절 시점 전후 평가·처우 변화 비교 사정.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재 + 직권남용 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사적 심부름 지시 자체가 직권남용 영역. 그 거절을 \'업무 거부\'로 둔갑시킨 평가·징계는 보복성 사정. 거절 시점 전후 평가·처우 변화 비교 자료가 결정 입증입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사적 심부름 지시 자료 보존 (즉시)</strong> — 메신저·녹취·문자 메시지·이메일.</li>\n<li><strong>2단계 — 거절 시점 전후 평가 변화 자료 (1~2주)</strong> — 분기별 인사평가표·실적 자료.</li>\n<li><strong>3단계 — 징계·해고 사유의 모호성 자료 (2주)</strong> — \"업무 협조 부족\" 같은 추상적 사유의 구체화 부재.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 보복성 + 양정 부당 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·직장 내 괴롭힘 결합 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상사 사적심부름 거절 + 보복 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 직무·거절·보복 갈래입니다.</strong></p>\n<ul>\n<li><strong>사적 심부름 지시 메신저·문자·이메일·녹취</strong></li>\n<li><strong>거절 의사 표현 메시지·면담 메모</strong></li>\n<li><strong>거절 시점 전후 분기 인사평가표·실적 자료</strong></li>\n<li><strong>같은 부서 동료의 사적 심부름 수행 여부·평가 비교</strong></li>\n<li><strong>경고서·정직 처분서·해고 통보서 사유 변화 추이</strong></li>\n<li><strong>근로계약서·취업규칙 (직무 범위 조항)</strong></li>\n<li><strong>직장 내 괴롭힘 신고 이력 (있을 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사적 심부름 지시 자체의 메신저·녹취 보존이 최우선. 동시에 \"거절 시점 전후 평가 변화\"의 시계열 자료가 보복성 입증의 핵심 트랙입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>직무 범위 다툼</strong> — 사적 심부름은 근로계약 범위 외 영역.</li>\n<li><strong>거절의 정당성</strong> — 직무 무관 지시 거절은 \'업무 거부\' 평가 대상 아님.</li>\n<li><strong>보복성 평가</strong> — 거절 시점 전후 평가·처우 격차의 인과관계 입증.</li>\n<li><strong>직장 내 괴롭힘 결합</strong> — 근기법 제76조의2 신고 가능 영역.</li>\n<li><strong>증명책임</strong> — 직무 관련성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (직장 내 괴롭힘 신고)</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 객관적 의미 해석과 징계사유 판단',
        summary:
          '대법원 2019두30270(대법원, 2021.11.25 선고) 영역에서 법원은 근로자의 어떤 비위행위가 징계사유로 되어 있는지는 구체적인 자료들을 통하여 징계위원회 등에서 그것을 징계사유로 삼았는지 여부에 의하여 결정되어야 하고, 그 비위행위가 정당한 징계사유에 해당하는지는 취업규칙상 징계사유를 정한 규정의 객관적인 의미를 합리적으로 해석하여 판단하여야 하며, 취업규칙은 노사 간 집단적 법률관계를 규정하는 법규범 성격이라 명확한 증거 없이 그 문언의 객관적 의미를 무시한 사실인정·해석은 신중·엄격해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '\"업무 협조 부족\" 같은 추상적 사유의 의미·범위는 취업규칙 문언 객관적 해석 기준 영역. 사적 심부름 거절을 \'업무 거부\' 사유로 둔갑시킨 적용은 정당성 부정 강한 다툼 사정.',
      },
    ],
    faq: [
      {
        question: '사적 심부름 거절도 \'업무 거부\'로 평가될 수 있나요?',
        answer:
          '<strong>업무 범위 외 지시는 거절 자체가 정당한 영역입니다.</strong> 직무 관련성 입증 책임은 사용자.',
      },
      {
        question: '평가가 \'중\'에서 \'하\'로 떨어진 시점 자료가 있어요',
        answer:
          '<strong>거절 시점 전후 평가 격차는 보복성 입증의 핵심 사정입니다.</strong> 분기별 평가표 시계열 보존 결정.',
      },
      {
        question: '직장 내 괴롭힘으로도 신고 가능한가요?',
        answer:
          '<strong>근기법 제76조의2 신고 + 노동위 구제 병행 가능한 영역입니다.</strong> 사적 심부름 강요 자체가 괴롭힘 사정.',
      },
      {
        question: '메신저·녹취 외에 추가로 확보해야 할 자료가 있나요?',
        answer:
          '<strong>같은 부서 동료의 사적 심부름 수행·거절 여부 비교 자료가 보강 입증 영역입니다.</strong> 형평성·표적성 입증.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 보복성 결합 다툼 가능한 영역입니다.</strong> 압박 정황 녹취·메모 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '회식 거절 보복', href: '/guide/dismissal/dismissal-hoesik-refusal-retaliation-track' },
      { label: '직장 내 괴롭힘 신고 보복', href: '/guide/dismissal/dismissal-bullying-report-retaliation' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 4. dismissal-rule-violation-targeted-disciplinary-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-rule-violation-targeted-disciplinary-fire-track',
    keyword: '사규 위반 명목 표적 징계해고',
    questionKeyword: '평소엔 묵인되던 사규 조항을 저에게만 표적 적용해 징계해고가 결정됐어요. 형평성으로 다툴 수 있나요?',
    ctaKeyword: '사규 표적 징계해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사규 표적 징계해고 — 5단계 형평성·차별 다툼 | 로앤가이드',
      description:
        '사규 조항이 본인에게만 표적 적용돼 징계해고가 결정됐다면 형평성·차별·통보서 해석 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 6년 차에 사내 메신저로 \'커피 모임\' 같은 사적 대화를 한 사실이 \'근무시간 사적 활동 금지\' 사규 위반으로 적발됐고, 인사위가 \'사규 위반 + 직장 질서 훼손\'을 사유로 징계해고를 결정했습니다. 같은 부서 동료들도 비슷한 사적 대화를 일상적으로 하고 있었고, 회사는 평소엔 그 조항을 적용하지 않았는데 본인에 대해서만 강하게 적용했어요. 해고 통보서에는 \'직장 질서 문란\'·\'명예훼손 우려\' 같은 추상적 표현만 적혀 있고 구체적 비위 내용은 모호했습니다." 근로자의 어떤 비위행위가 정당한 징계사유에 해당하는지는 취업규칙상 징계사유를 정한 규정의 객관적 의미를 합리적으로 해석해 판단하는 영역이고, 사용자가 통보서에 쓴 용어·표현보다는 사업장의 징계규정에서 정한 사유의 의미와 내용을 기준으로 판단해야 하는 트랙입니다. 피해자라면 ① 사규 적용의 형평성 ② 통보서 사유의 모호성 ③ 차별적·표적 운영 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 형평 ② 모호 ③ 차별 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사규 표적 징계해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 형평·모호·차별·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사규 적용 형평성</strong> — 같은 부서 동료의 유사 행위 처우와의 비교 사정.</li>\n<li><strong>② 통보서 사유의 모호성</strong> — \"직장 질서 문란\" 같은 추상 표현의 구체화 부재.</li>\n<li><strong>③ 차별적·표적 운영</strong> — 평소엔 묵인되던 조항의 특정 직원 표적 적용.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 + 양정 부당 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사규 위반이 곧 해고 정당성으로 자동 인정되는 것은 아닌 영역. 평소 운영 패턴 + 동료 처우 비교 + 통보서 사유의 구체성 종합 판단 트랙. 표적성 입증이 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사규·통보서·인사위 회의록 보존 (즉시)</strong> — 취업규칙·통보서·회의록 일체.</li>\n<li><strong>2단계 — 같은 부서 동료 유사 행위 자료 (1~2주)</strong> — 메신저·근무 패턴·내부 게시판 자료.</li>\n<li><strong>3단계 — 평소 사규 운영 자료 (2주)</strong> — 동일 조항에 대한 과거 처분 사례·묵인 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 형평성·차별·양정 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사규 표적 징계해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 형평·모호·차별 갈래입니다.</strong></p>\n<ul>\n<li><strong>취업규칙·사규·징계규정 전문</strong></li>\n<li><strong>해고 통보서·인사위 회의록·소명 자료</strong></li>\n<li><strong>같은 부서 동료의 유사 행위 입증 자료 (메신저·이메일 등)</strong></li>\n<li><strong>동일 조항에 대한 과거 처분 사례 비교 자료</strong></li>\n<li><strong>본인 인사평가·실적·근태 자료 (개선 추이)</strong></li>\n<li><strong>인사팀·상사 면담 메모·녹취</strong></li>\n<li><strong>노조 활동·신고 이력 등 보호 사유 자료 (있을 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통보서의 \"직장 질서 문란\" 같은 용어가 실제 취업규칙 어느 조항인지 매칭이 안 되거나 평소 운영과 어긋난다면 \"객관적 의미 해석\" 다툼이 강력한 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사규 적용 형평성</strong> — 동료의 유사 행위 묵인 vs 본인 표적 적용의 차이.</li>\n<li><strong>통보서 용어 vs 사규 의미</strong> — 추상 표현의 구체적 조항 매칭 부재.</li>\n<li><strong>차별적·표적 운영</strong> — 보호 사유(노조·신고·임신 등) 결합 시 부당노동행위 별도.</li>\n<li><strong>양정 부당</strong> — 동일 사유에 대한 과거 처분과의 비례 평가.</li>\n<li><strong>증명책임</strong> — 형평성·차별 부정 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국가인권위원회 1331 (차별 진정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계사유 통보서 용어와 취업규칙 객관적 의미',
        summary:
          '대법원 2020다270770(대법원, 2021.04.29 선고) 영역에서 법원은 문제 되는 비위행위가 징계사유에 해당함을 특정하여 표현하기 위해 징계권자가 징계처분 통보서에 어떤 용어를 쓴 경우, 그 비위행위가 징계사유에 해당하는지는 원칙적으로 해당 사업장의 취업규칙 등 징계규정에서 정하고 있는 징계사유의 의미와 내용을 기준으로 판단하여야 하고, 단지 그 비위행위가 통보서에 쓰인 용어의 개념에 포함되는지 여부만을 기준으로 판단할 것은 아니라고 본 사례 흐름이 있습니다.',
        takeaway: '\"직장 질서 문란\" 같은 통보서 용어가 곧 징계사유 자체로 인정되는 것은 아닌 영역. 취업규칙 사규의 객관적 의미와 본인 행위 간의 매칭 + 평소 운영 패턴 종합 평가.',
      },
    ],
    faq: [
      {
        question: '같은 부서 동료들도 비슷하게 행동했는데 저만 해고된 게 정당한가요?',
        answer:
          '<strong>형평성 위반은 양정 부당의 핵심 사정입니다.</strong> 동료 행위·처우 비교 자료가 결정 입증.',
      },
      {
        question: '통보서에 쓰인 표현이 사규 조항과 매칭이 안 돼요',
        answer:
          '<strong>취업규칙 객관적 의미 해석 기준이라 사규 조항과 직접 매칭이 필요한 영역입니다.</strong> 통보서·사규 대조 정리.',
      },
      {
        question: '평소엔 묵인되던 행위가 갑자기 해고 사유가 됐어요',
        answer:
          '<strong>운영 패턴의 일관성 부재는 자의적·표적 운영 사정입니다.</strong> 과거 처분 사례·내부 공지 보존.',
      },
      {
        question: '노조 가입·민원 제기 이력이 있는데 영향이 있나요?',
        answer:
          '<strong>보호 사유 결합 시 부당노동행위 별도 다툼 가능한 영역입니다.</strong> 시계열 정황 자료 결정.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 차별·표적 결합 다툼 가능한 영역입니다.</strong> 압박 정황 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '단일 위반 징계 해고', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 5. dismissal-employer-insolvency-bankruptcy-deferred-pay-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-employer-insolvency-bankruptcy-deferred-pay-track',
    keyword: '사용자 도산·일부 사업 폐지 + 도산대지급금',
    questionKeyword: '회사가 도산 직전 일부 사업 폐지를 이유로 해고했고 임금·퇴직금이 체불됐어요. 도산대지급금까지 받을 수 있나요?',
    ctaKeyword: '사용자 도산 해고 도산대지급금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사용자 도산 해고 + 도산대지급금 — 5단계 체불·승계 다툼 | 로앤가이드',
      description:
        '사용자 도산·일부 사업 폐지로 해고됐다면 부당해고 + 체불임금 + 도산대지급금 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 7년 차였는데 회사가 자금난을 이유로 일부 사업 부문을 폐지하면서 본인을 \'통상해고\'로 처리했습니다. 같은 시기 회사는 회생 신청을 준비 중이라는 내부 메일이 돌았고, 마지막 3개월 임금과 퇴직금이 체불된 채로 해고 절차가 진행됐어요. 이후 회사 일부 사업이 다른 법인에 양수됐다는 공시도 있었는데, 본인 근로관계 승계는 명시적으로 제외됐습니다. 임금체불 + 부당해고 + 사업양도 시 승계 + 도산대지급금까지 얽혀 어디부터 손대야 할지 막막한 상태입니다." 도산대지급금은 사실상 도산(폐업) 또는 법원의 회생·파산 결정 등으로 사용자가 임금 등을 지급할 수 없는 경우 고용노동부가 일부를 대신 지급하는 영역(임금·휴업수당·퇴직금 합산 최종 3개월·3년분, 연령별 상한)이고, 부당해고 구제·체불 진정·민사 임금 청구·도산대지급금이 별도 트랙으로 병행 가능한 영역입니다. 피해자라면 ① 일부 사업 폐지 평가 ② 영업양도 승계 ③ 체불임금·퇴직금 ④ 도산대지급금 신청 ⑤ 부당해고 구제 5중 트랙이 가능한 영역. 대응은 ① 범위 ② 승계 ③ 체불 ④ 대지급금 ⑤ 구제 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사용자 도산 해고 + 도산대지급금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 범위·승계·체불·대지급금·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 일부 사업 폐지 평가</strong> — 사업 전체 폐업 아닌 영역이라 경영상 해고 요건 필요.</li>\n<li><strong>② 영업양도 승계</strong> — 정당한 이유 없는 해고 후 양도 시 양수인 승계 다툼.</li>\n<li><strong>③ 체불임금·퇴직금</strong> — 임금·퇴직금·휴업수당 합산 진정·민사 청구.</li>\n<li><strong>④ 도산대지급금</strong> — 사실상 도산 인정·회생·파산 결정 시 고용노동부 신청.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 부당해고 + 양도 승계 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사용자 도산 시 5개 트랙이 동시에 가능한 영역. 도산대지급금은 최종 3개월 임금·최종 3년 퇴직금 합산 + 연령별 상한 영역이라 직접 변제와 별도로 신청 검토. 영업양도 시 부당해고 근로자 승계 다툼도 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신청·구제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 회사 도산·체불 자료 보존 (즉시)</strong> — 임금명세서·체불 통보·회사 회생 공시.</li>\n<li><strong>2단계 — 영업양도·승계 자료 (1~2주)</strong> — 양도 공시·승계 제외 통보·양수 법인 정보.</li>\n<li><strong>3단계 — 체불 진정·민사 청구 (3개월 내)</strong> — 고용노동부 지청 진정 + 민사 임금 청구.</li>\n<li><strong>4단계 — 도산대지급금 신청 (체불일·해고일 2년 내, 회생·파산 결정 후)</strong> — 사실상 도산 인정·법원 결정 시.</li>\n<li><strong>5단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 양도 승계 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사용자 도산 해고 + 도산대지급금 5중 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 도산·승계·체불·대지급금 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·재직증명서·재직기간 입증 자료</strong></li>\n<li><strong>최근 6개월 임금명세서·통장 입금 내역</strong></li>\n<li><strong>해고 통보서·사유서·인사명령</strong></li>\n<li><strong>회사 회생·파산 공시·자금난 내부 메모·언론 보도</strong></li>\n<li><strong>영업양도·승계 공시·양수 법인 정보</strong></li>\n<li><strong>고용노동부 지청 체불 진정 접수증</strong></li>\n<li><strong>법원 회생·파산 결정문 (확보 시)</strong></li>\n<li><strong>주민등록등본·통장 사본 (대지급금 수령용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 도산대지급금은 \'법원 회생·파산 결정\' 또는 \'고용노동부 도산 인정 (사실상 도산)\' 두 트랙. 회사가 회생을 신청한 정황이라면 법원 결정 시점에 맞춰 신청 준비. 임금 + 휴업수당 + 퇴직금 합산 + 연령별 상한 적용 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일부 사업 폐지 평가</strong> — 통상해고 명목 vs 경영상 해고 실질의 분리.</li>\n<li><strong>영업양도 승계</strong> — 정당한 이유 없는 해고 후 양도 시 양수인 승계 원칙.</li>\n<li><strong>체불임금 + 도산대지급금 병행</strong> — 별도 트랙. 진정·민사·대지급금 동시 진행 가능 영역.</li>\n<li><strong>대지급금 상한·기간</strong> — 임금·휴업수당·퇴직금 합산 + 연령별 상한 + 기간 한정.</li>\n<li><strong>구제이익</strong> — 폐업·근로계약 종료 시 노동위 구제이익 소멸 가능성 영역 (별도 평가).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (체불 진정·도산대지급금)</strong></li>\n<li><strong>관할 고용노동지청 (대지급금 신청 접수)</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132 (회생·파산 무료 상담 포함)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 부당해고 근로자 승계 원칙',
        summary:
          '대법원 2018두54705(대법원, 2020.11.05 선고) 영역에서 법원은 근로자가 영업양도일 이전에 정당한 이유 없이 해고된 후 영업 전부의 양도가 이루어진 경우 영업 전부를 동일성을 유지하면서 이전받는 양수인이 양도인으로부터 정당한 이유 없이 해고된 근로자와의 근로관계를 원칙적으로 승계하고, 영업양도 당사자 사이에 정당한 이유 없이 해고된 근로자를 승계 대상에서 제외하기로 하는 특약이 있는 경우 그 특약은 실질적으로 또 다른 해고나 다름이 없으므로 근로기준법 제23조 제1항에서 정한 정당한 이유가 있어야 유효하며, 영업양도 자체만으로 근로자 승계 제외의 정당한 이유를 인정할 수 없다고 본 사례 흐름이 있습니다.',
        takeaway: '도산 직전 부당해고 + 영업양도 결합 시 양수인 승계 원칙. \'승계 제외 특약\' 자체도 별도의 정당한 이유 요구 영역. 도산대지급금·체불 진정과 별도 트랙으로 병행 검토.',
      },
    ],
    faq: [
      {
        question: '도산대지급금은 누구나 받을 수 있나요?',
        answer:
          '<strong>법원 회생·파산 결정 또는 고용노동부 사실상 도산 인정이 필요한 영역입니다.</strong> 임금·휴업수당·퇴직금 합산 + 연령별 상한 적용.',
      },
      {
        question: '체불 진정과 도산대지급금을 동시에 신청해도 되나요?',
        answer:
          '<strong>별도 트랙이라 병행 가능한 영역입니다.</strong> 진정 결과는 대지급금 산정의 기초 자료.',
      },
      {
        question: '회사 일부 사업이 다른 법인에 양수됐는데 저는 승계가 안 됐어요',
        answer:
          '<strong>정당한 이유 없는 해고 후 양도 시 양수인 승계 원칙입니다.</strong> 승계 제외 특약 자체도 정당한 이유 필요.',
      },
      {
        question: '폐업 시 노동위 구제신청 의미가 있나요?',
        answer:
          '<strong>구제이익 소멸 여부 별도 평가 영역입니다.</strong> 양도 승계·금전보상 등 트랙 결합 시 의미가 달라질 수 있는 사정.',
      },
      {
        question: '체불 신청은 어디로 가나요?',
        answer:
          '<strong>관할 고용노동지청 진정 영역입니다.</strong> 도산대지급금은 동일 지청에서 신청 가능.',
      },
      {
        question: '회생 절차에 회사가 들어가면 임금은 어떻게 되나요?',
        answer:
          '<strong>임금은 회생절차상 우선권 인정 영역입니다.</strong> 회생계획안 인가 시 처리 기준이 달라지므로 결정문 확인 결정.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '사업장 폐쇄 정리해고', href: '/guide/dismissal/dismissal-workplace-closure-layoff' },
      { label: '가짜 폐업 후 영업 재개', href: '/guide/dismissal/dismissal-fake-shutdown-resume-same-business' },
      { label: '회생 절차와 정리해고', href: '/guide/dismissal/dismissal-rehabilitation-redundancy-track' },
      { label: '합병 후 직책 소멸', href: '/guide/dismissal/dismissal-company-merger-position-elimination' },
    ],
  },
];
