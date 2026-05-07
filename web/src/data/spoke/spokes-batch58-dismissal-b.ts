import { SpokePage } from '../spoke-pages';

// batch58 dismissal B — 2개
//
// 고유 존재 이유:
// 1. 이 페이지는 직장 내 성희롱 가해자로 지목돼 즉시 징계해고를 받은 근로자가 징계 양정 과잉·소명기회 부재·사실관계 다툼 트랙으로 부당해고 구제를 검토하도록 돕는 페이지다.
// 2. 이 페이지는 회사가 팀·사업부를 외주 업체로 이관하면서 근로자만 해고하고 같은 업무가 외주에서 그대로 수행되는 위장 외주화 정황을 다툴 수 있도록 돕는 페이지다.

export const spokesBatch58DismissalB: SpokePage[] = [
  // ─── 1. dismissal / dismissal-sexual-harassment-perpetrator-discipline-dispute ───
  {
    domain: 'dismissal',
    slug: 'dismissal-sexual-harassment-perpetrator-discipline-dispute',
    keyword: '성희롱 가해자 징계해고 다툼',
    questionKeyword: '성희롱 가해자로 지목돼 바로 징계해고됐어요. 사실관계와 징계양정을 다툴 수 있나요?',
    ctaKeyword: '성희롱 징계해고 양정 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '성희롱 가해 징계해고 다툼 — 양정 4가지 점검 | 로앤가이드',
      description:
        '성희롱 가해자로 지목돼 징계해고됐다면 사실관계·소명기회·징계양정 4가지 다툼 트랙으로 부당해고 구제를 지금 확인하세요.',
    },
    intro:
      '<p>"회식 자리에서 부적절한 발언이 있었다는 신고가 접수됐다며, 본인 소명을 충분히 듣기도 전에 징계위가 열렸고 곧바로 \'징계해고\' 의결됐어요. 발언 맥락이나 다른 참석자 진술은 거의 반영되지 않았습니다." 직장 내 성희롱은 사용자가 즉시 조치할 의무가 있는 영역이지만(남녀고용평등법 제14조), 징계해고는 가장 무거운 처분이라 사실관계·절차·양정 3중 검토가 필요합니다. 대법원 판례는 징계 양정이 사회통념상 현저히 타당성을 잃을 정도로 과중한 경우 징계권 남용으로 무효라는 일관된 흐름을 유지해 왔어요(2023두54914 등 다수). 해고일로부터 3개월 이내라면 노동위 부당해고 구제신청을 검토할 수 있고, 그와 별개로 형사 무혐의 또는 명예훼손 영역도 별도 트랙으로 분기하는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 성희롱 가해 징계해고에서 점검할 4가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·소명기회·징계양정·절차 4단계로 다툼 트랙을 정리할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실관계 입증 정도</strong> — 신고된 발언·행위가 객관적으로 입증됐는지. 다른 참석자 진술·녹취·CCTV 자료 검토. 신고인 진술만으로 단정한 정황이면 다툼 영역.</li>\n<li><strong>② 소명기회 보장</strong> — 징계위 출석 통지가 사전 충분 시간(통상 7일 이상) 부여됐는지, 본인 진술·반증 기회를 실질적으로 보장했는지. 형식적 통지·졸속 의결은 절차하자 다툼.</li>\n<li><strong>③ 징계양정 비례성</strong> — 발언 정도·반복성·피해 정도·반성 여부·동종전과·근속연수 등 종합 고려해 \'해고\'가 적정했는지. 1회성·경미한 사안에 즉시 해고는 과잉징계 다툼 영역.</li>\n<li><strong>④ 형평성·일관성</strong> — 같은 회사에서 유사 사안에 정직·감봉으로 처리된 선례가 있다면 형평성 다툼. 본인에게만 무거운 처분이 적용된 정황 자료 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 성희롱 사실이 일부 인정되더라도 양정이 과중하면 징계권 남용으로 부당해고로 평가될 여지가 있는 사례가 있습니다(2017두35588 등). 해고 자체가 부당해고로 판정되면 원직복직 + 임금상당액 트랙이 열리는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부당해고 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 구제신청을 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (24시간 내)</strong> — 징계위 출석통지서·의결서·해고통보서·신고 내용 사본·본인 소명서·동석자 연락처·회식 당시 정황 자료(좌석 배치·녹취 등).</li>\n<li><strong>2단계 — 징계 무효 내용증명 + 사유서 청구 (3~7일)</strong> — 회사에 징계 사유 구체화 + 양정 비례성 자료 요구. 근로기준법 제27조 서면통지 의무 누락 여부 검토.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (해고일 3개월 이내)</strong> — 사업장 관할 지방노동위. 사실관계·절차·양정·형평성 4트랙 동시 제기 검토.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 본인 진술·증인·증거 제출. 사용자 측 사실관계 입증 부담 + 양정 비례성 입증 부담 영역.</li>\n<li><strong>5단계 — 판정 + 형사·민사 별도 트랙</strong> — 부당해고 인정 시 원직복직 + 임금상당액. 형사 무혐의 또는 명예훼손 다툼은 별개 트랙으로 분기 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">성희롱 가해 징계해고 4가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 절차 자료 + 사실관계 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>징계위 출석통지서·의결서·회의록</strong> — 절차하자 핵심 자료(통지 시점·소명기회 부여 정도).</li>\n<li><strong>해고통보서·해고사유서</strong> — 사유 구체성, 서면통지 충족 여부 검토.</li>\n<li><strong>본인 소명서·반박 진술서</strong> — 사실관계 다툼 트랙의 출발점.</li>\n<li><strong>동석자·증인 연락처와 진술서</strong> — 발언 맥락·전후 사정 입증.</li>\n<li><strong>회식·회의 상황 정황 자료</strong> — 좌석 배치·녹취·메신저 대화 내역.</li>\n<li><strong>회사 취업규칙·징계규정·인사위원회 운영규정</strong> — 절차 위반 + 양정 비례성 다툼 자료.</li>\n<li><strong>유사 사안 처분 선례 자료</strong> — 형평성 다툼용. 동료 처분 결과·인사 공지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신고인이 누구인지 알게 되더라도 직접 접촉·SNS 댓글·메시지는 2차 가해 또는 무고 협박으로 평가될 수 있는 영역이라 즉시 중단하세요. 변호사·노무사·법률구조공단 132를 통한 정식 절차로 다투는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"즉시 조치 의무라 해고가 불가피했다" 주장 반박</strong> — 사용자에겐 \'적절한\' 조치 의무이지 반드시 해고 의무는 아닙니다. 정직·감봉·전보 등 수단도 검토 대상이라 양정 비례성 다툼 영역.</li>\n<li><strong>"신고인 진술이 일관되다" 주장 반박</strong> — 진술의 일관성과 객관적 입증은 별개. 다른 참석자 진술·정황 증거가 부합하지 않으면 사실관계 다툼.</li>\n<li><strong>"본인이 시인했다" 주장 반박</strong> — 조사 과정에서의 시인이 진정한 자백이었는지, 압박·강요·오해 정황이 있었는지 검토. 조사 녹취·동석자 유무가 핵심.</li>\n<li><strong>형사 무혐의 시 별도 명예훼손 트랙</strong> — 회사·동료가 사실과 다르게 외부에 전파했다면 명예훼손·정보통신망법 다툼이 별개로 가능한 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 징계해고·양정 다툼 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 부당해고 구제 절차 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고·부당해고 진정 트랙 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계해고 양정의 사회통념상 타당성 판단',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 부당해고구제재심판정취소 사안과 관련해 사용자의 징계권 행사가 사회통념상 현저히 타당성을 잃은 경우 징계권 남용으로 무효라는 종전 법리를 재확인했습니다. 또한 대법원 2017두35588 사건(대법원, 2023.05.11 선고)에서도 징계 양정이 객관적으로 비례성·형평성을 갖추지 못했다면 징계해고가 정당하지 않다는 흐름이 유지되고 있습니다.',
        takeaway: '성희롱 사실이 일부 인정되더라도 발언 정도·반복성·반성 여부·동종전과·근속연수 등 종합 고려 시 해고가 사회통념상 현저히 과중하면 징계권 남용 다툼 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '성희롱 사실이 일부 인정되어도 부당해고 다툴 수 있나요?',
        answer:
          '<strong>사실관계가 일부 인정되더라도 양정 과잉이면 다툼 영역입니다.</strong> 발언 정도·반복성·반성·근속연수·동종전과 등 종합 고려해 해고가 비례성을 잃었다면 징계권 남용으로 평가될 여지가 있는 사례가 있습니다(2017두35588).',
      },
      {
        question: '징계위에서 본인 소명을 충분히 못 했어요',
        answer:
          '<strong>절차하자 핵심 다툼 영역입니다.</strong> 출석통지 시점·진술기회 부여·반증제출 기회 등이 형식적이었다면 절차상 정당성 다툼으로 부당해고 평가 가능성이 높아지는 영역.',
      },
      {
        question: '신고인이 누구인지 알게 됐는데 연락해도 되나요?',
        answer:
          '<strong>직접 접촉은 절대 금지입니다.</strong> 2차 가해·무고 협박으로 평가돼 형사·민사 책임이 추가되는 영역. 모든 다툼은 변호사·노무사·법률구조공단 132를 통해 정식 절차로 진행하세요.',
      },
      {
        question: '형사에서 무혐의면 회사 징계도 무효인가요?',
        answer:
          '<strong>자동 연동되지는 않지만 강한 정황 자료가 됩니다.</strong> 형사 무혐의 처분서·불송치 결정문은 노동위·민사 단계에서 사실관계 다툼의 핵심 자료로 검토되는 영역.',
      },
      {
        question: '5인 미만 사업장이면 부당해고 구제 가능한가요?',
        answer:
          '<strong>5인 미만은 노동위 부당해고 구제 트랙이 제한됩니다.</strong> 다만 민사 해고무효확인 + 위자료 청구는 별도 가능한 영역으로 검토할 수 있고, 132 무료 상담 권장.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '소명기회 없는 징계해고', href: '/guide/dismissal/dismissal-disciplinary-warning-no-defense-chance' },
      { label: '경고누적 징계해고 다툼', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '단일 위반 징계해고', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: 'SNS 사적 게시 해고', href: '/guide/dismissal/dismissal-social-media-private-post-fired' },
      { label: '직장내괴롭힘 신고 후 해고', href: '/guide/dismissal/dismissal-bullying-report-second-retaliation' },
    ],
  },

  // ─── 2. dismissal / dismissal-disguised-outsourcing-team-transfer-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disguised-outsourcing-team-transfer-fired',
    keyword: '위장 외주화 사실상 해고',
    questionKeyword: '회사가 우리 팀을 외주로 돌린다며 저만 해고했어요. 같은 업무가 외주에서 계속됩니다',
    ctaKeyword: '위장 외주화 해고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '위장 외주화 해고 — 5가지 다툼 트랙 점검 | 로앤가이드',
      description:
        '회사가 팀을 외주로 돌리며 본인만 해고했는데 같은 업무가 외주에서 계속된다면 위장 외주화 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'우리 팀 업무를 외주 업체로 이관한다, 직무가 없어진다\'는 통보를 받고 해고됐어요. 그런데 한 달 뒤 보니 외주 업체 직원들이 같은 사무실·같은 시스템·같은 업무를 그대로 하고 있어요. 일부는 우리 팀 출신이 외주 업체로 옮겨 일하고 있었습니다." 외주 전환을 명목으로 한 해고는 형식상 \'직무 폐지\' 통상해고처럼 보이지만, 대법원 2016두64876 판결은 일부 사업·부문 폐지가 정당하려면 사업 전체 폐지에 준하는 사정 + 인적·물적 조직 단계적 정리 + 다른 부서 배치 검토 + 정리해고에 준하는 절차 4요건을 갖춰야 한다고 봤어요. 같은 업무가 외주에서 그대로 수행된다면 사업폐지가 아니라 운영 주체만 바뀐 정황이라, 위장 외주화 다툼 트랙으로 노동위 구제신청을 검토할 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 위장 외주화 다툼 5가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무 동일성·인력 흐름·지휘감독·시점·외주 형식 5단계로 입증할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무 동일성</strong> — 외주 이관 후 수행되는 업무가 종전과 본질적으로 같은지. 시스템·고객·산출물·KPI가 동일하면 사업폐지가 아닌 정황.</li>\n<li><strong>② 인력 흐름</strong> — 우리 팀 출신이 외주 업체로 이직했는지, 동일 사무실·동일 좌석에서 일하는지. 사실상 \'고용 형태만 바뀐\' 정황.</li>\n<li><strong>③ 지휘감독 관계</strong> — 외주 직원들이 여전히 회사 관리자에게 직접 지시받는지. 그러면 위장도급·불법파견 다툼 트랙도 결합 가능한 영역(파견법 제2조).</li>\n<li><strong>④ 외주 시점·해고 시점</strong> — 외주계약 체결과 해고 통보의 선후관계. 해고 직후 외주계약이면 해고 회피 노력 부재 정황.</li>\n<li><strong>⑤ 외주계약 형식 vs 실질</strong> — 외주계약서가 진정한 도급 형태인지 사실상 인력 공급에 가까운지. 단가 산정 방식·보고 체계 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2016두64876 판결은 일부 사업폐지를 이유로 한 통상해고가 \'사실상 정리해고\'로 평가될 수 있고, 그 경우 정리해고 4요건(긴박한 경영상 필요·해고회피 노력·합리적 기준·근로자대표 협의)을 모두 충족해야 한다고 봤습니다. 외주 전환은 통상 사업폐지가 아닌 정황으로 평가됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 사유서 청구 → 노동위 구제신청 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 외주 정황 자료 즉시 보존 (해고 직후)</strong> — 외주 안내 메일·해고 통보·외주 업체 직원 정황(같은 사무실·같은 시스템 사용)·전 동료 LinkedIn·잡코리아 외주 채용공고.</li>\n<li><strong>2단계 — 회사에 해고사유서 + 배치검토 자료 요구 (3~7일)</strong> — 내용증명으로 해고회피 노력·다른 부서 배치 검토 자료·외주계약 시점 자료 요구.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (해고일 3개월 이내)</strong> — 사업장 관할 지방노동위. 위장 외주화 + 정리해고 4요건 미충족 트랙.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 5가지 점검 포인트별 정황 자료 제시. 회사 측 외주 정당성 입증 부담 영역.</li>\n<li><strong>5단계 — 판정·민사·파견법 별도 트랙</strong> — 부당해고 인정 시 원직복직 + 임금상당액. 위장도급이면 파견법 직접고용 의무 다툼이 별도 트랙으로 분기 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">위장 외주화 해고 5가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 외주 정황 자료 + 절차 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>외주 전환 안내 메일·공지</strong> — 외주 시점·범위·인적 정리 방침.</li>\n<li><strong>해고 통보서·해고사유서</strong> — 사유 명시 + 배치검토 언급 정도 검토.</li>\n<li><strong>외주 업체 직원 정황 자료</strong> — 같은 사무실 좌석·같은 이메일 도메인·출입증·내부 시스템 접근 정황.</li>\n<li><strong>전 동료 LinkedIn·외주 업체 채용공고</strong> — 외주 업체 채용 공고가 해고 시점 전후로 올라온 정황.</li>\n<li><strong>외주 계약서(가능하면)</strong> — 도급 vs 인력공급 실질 검토. 단가 산정·보고 체계.</li>\n<li><strong>회사 재무·경영 자료</strong> — 긴박한 경영상 필요 입증 부담은 회사 측. 자료 제출 회피 정황도 다툼 자료.</li>\n<li><strong>최근 12개월 급여명세서·근로계약서</strong> — 임금상당액 산정용 + 종전 업무 범위 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외주 업체 직원이 회사 관리자에게 직접 지시받는 정황(이메일·메신저·회의 참석)이 있다면 위장도급·불법파견 다툼이 결합되는 영역. 파견법 제6조의2에 따른 직접고용 의무 트랙도 별도 검토 대상입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"외주 전환은 경영 판단" 주장 반박</strong> — 경영 판단 자체는 폭넓게 인정되지만, 그 결과로 본인을 해고할 정당사유가 별도로 필요한 영역. 같은 업무 잔존 정황은 사업폐지 부재 자료.</li>\n<li><strong>"직무가 없어졌다" 주장 반박</strong> — 외주에서 같은 업무가 수행되면 직무 자체는 존속한 정황. 직무명만 바뀐 형식적 폐지로 평가될 여지.</li>\n<li><strong>"동료들은 외주로 이직 동의했다" 주장 반박</strong> — 회사가 본인에게 외주 이직·다른 부서 배치 등을 제안했는지가 해고회피 노력 핵심. 본인에게만 \'폐지\'로 통보됐다면 형평성 다툼.</li>\n<li><strong>위장도급 다툼 결합 가능</strong> — 외주 직원이 사실상 회사 직원처럼 일하면 파견법 직접고용 의무 트랙(파견법 제6조의2). 별도 사건으로 분기 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·위장도급 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 위장도급·파견법 진정 트랙 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 사업 외주화에 따른 통상해고의 정당성 판단',
        summary:
          '대법원 2016두64876 사건(대법원, 2021.07.29 선고)에서 법원은 사용자가 일부 사업 부문을 폐지하고 해당 부문 근로자를 해고한 경우, 그 해고가 통상해고로서 예외적으로 정당하기 위해서는 일부 사업의 폐지가 사업 전체 폐지에 준하는 특별한 사정이 있어야 한다고 판시했습니다. 그렇지 않으면 사실상 정리해고로 평가되어 근로기준법 제24조의 정리해고 4요건을 갖춰야 한다고 보았습니다.',
        takeaway: '외주 전환 후 같은 업무가 외주 업체에서 그대로 수행된다면 사업폐지 부재의 강한 정황 자료라, 정리해고 4요건 미충족 또는 위장도급 다툼 트랙이 결합되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '외주 업체 직원이 같은 사무실에서 같은 일을 합니다',
        answer:
          '<strong>사업폐지 부재의 매우 강한 정황 자료입니다.</strong> 좌석·시스템·업무·고객이 동일하면 직무가 존속한 정황으로 평가될 여지가 있어, 통상해고가 사실상 정리해고로 재평가되는 영역.',
      },
      {
        question: '외주 업체에 입사 제안을 받았는데 거절했어요',
        answer:
          '<strong>임금·근로조건이 종전보다 현저히 악화됐다면 거절은 합리적 사유로 평가될 여지가 있습니다.</strong> 회사가 \'대안 제안 후 거절\'을 해고회피 노력으로 주장하더라도 조건의 합리성이 별도 다툼 영역.',
      },
      {
        question: '같은 부서에서 저만 해고됐고 다른 동료는 잔류했어요',
        answer:
          '<strong>형평성·합리적 기준 다툼 영역입니다.</strong> 정리해고 기준이라면 객관적·공정한 기준의 사전 공지·동일 적용을 회사가 입증해야 하는 영역으로 검토할 수 있습니다.',
      },
      {
        question: '외주 업체 직원이 우리 회사 관리자 지시를 직접 받아요',
        answer:
          '<strong>위장도급·불법파견 다툼 결합 가능 영역입니다.</strong> 파견법 제6조의2에 따른 직접고용 의무 트랙이 별도로 분기되는 영역으로, 노동부 진정도 검토 대상.',
      },
      {
        question: '5인 미만 사업장도 위장 외주화 다툼 가능한가요?',
        answer:
          '<strong>5인 미만은 노동위 부당해고 구제 트랙이 제한됩니다.</strong> 다만 민사 해고무효확인 + 해고예고 30일분 통상임금 청구는 별도 가능한 영역. 132 무료 상담 권장.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: 'HR 개편 직무폐지 해고', href: '/guide/dismissal/dismissal-hr-system-restructure-position-deletion' },
      { label: '경영상 해고 4요건', href: '/guide/dismissal/dismissal-restructuring-position-elimination' },
      { label: '하청·파견 사용자 책임', href: '/guide/dismissal/dismissal-subcontractor-principal-responsibility' },
      { label: '인수합병 직무폐지 해고', href: '/guide/dismissal/dismissal-company-merger-position-elimination' },
      { label: '구조조정 우선재고용권', href: '/guide/dismissal/dismissal-restructuring-recall-priority-rights' },
    ],
  },
];
