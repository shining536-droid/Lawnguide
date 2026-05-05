import { SpokePage } from '../spoke-pages';

// batch56 dismissal A — 3개
//
// 고유 존재 이유:
// 1. 이 페이지는 PIP(업무능력향상프로그램) 목표가 비현실적으로 높게 설정되어 미달을 이유로 해고된 근로자가 PIP 목표 합리성·실질적 향상기회 부여 4단계 다툼 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 임신 사실을 알리자마자 계약직 갱신을 거부받은 근로자가 갱신기대권 + 남녀고용평등법 위반 결합 트랙으로 다툴 수 있도록 돕는 페이지다.
// 3. 이 페이지는 소명기회 없이 징계해고된 근로자가 절차적 정의 위반(소명기회·징계위 통지·징계사유 추가) 5가지 점검으로 무효 다툼을 정리하도록 돕는 페이지다.

export const spokesBatch56DismissalA: SpokePage[] = [
  // ─── 1. dismissal / dismissal-pip-unrealistic-target-failure ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pip-unrealistic-target-failure',
    keyword: 'PIP 비현실적 목표 미달 해고',
    questionKeyword: 'PIP 목표가 동료 평균의 2배로 설정됐는데 미달했다고 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: 'PIP 목표 부당해고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'PIP 비현실적 목표로 해고됐을 때 4단계 다툼 | 로앤가이드',
      description:
        'PIP 목표가 동료 평균의 2배 등 비현실적으로 설정돼 미달 해고됐다면 사회통념상 정당사유 4단계 점검과 노동위 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인사팀이 \'3개월 안에 매출 1억 달성하면 본채용 유지\'라는 PIP 목표를 줬는데, 같은 부서 동료 평균이 5천만원 수준이었어요. 결국 미달했다고 해고 통보를 받았는데, 처음부터 달성 불가능한 목표였던 게 분명합니다." PIP(Performance Improvement Plan) 목표 미달 해고는 형식상 근무성적 부진 통상해고 외관을 띠지만, 대법원 2018다253680 판결은 "사회통념상 고용관계를 계속할 수 없을 정도"인지를 ① 평가의 객관성·공정성 ② 향상기회의 실질성 ③ 목표의 합리성 ④ 기간의 충분성 4가지 요소로 본다고 판시했습니다. 동료 평균 대비 비현실적 목표·짧은 평가기간·실질 향상교육 부재가 결합된 사안은 형식상 해고일자에서 3개월 이내라면 노동위 부당해고 구제신청 트랙으로 다툼 가능성을 검토할 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. PIP 미달 해고에서 점검할 4가지 합리성 기준',
        content:
          '<p><strong style="color:#1e3a5f">A. 목표 합리성·평가 객관성·향상기회·고용계속 불가능성 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 목표의 합리성·달성가능성</strong> — 동료 평균·과거 본인 실적·시장 환경 대비 비현실적인지. 동료 평균의 1.5배 이상 또는 본인 과거 최고 실적의 2배 이상이면 합리성 다툼 영역입니다.</li>\n<li><strong>② 평가의 객관성·공정성</strong> — 평가 기준이 사전 공지됐는지, 측정 방식이 객관적인지, 같은 직무 동료에게도 동일 기준 적용됐는지. 본인에게만 차별 기준이라면 다툼 정황.</li>\n<li><strong>③ 실질적 향상기회 부여</strong> — 교육·코칭·자료·도구·시간이 실제로 제공됐는지. 형식상 PIP 문서만 주고 향상지원 없이 평가만 한 사안은 절차 위반 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>④ 사회통념상 고용계속 불가능성</strong> — 부진 정도가 회사 운영에 실질 지장을 줬는지, 다른 직무 배치 가능성이 검토됐는지. 1회 미달이 아니라 반복 부진 + 직무 전환 검토 부재 입증이 회사 측 부담입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2018다253680 판결은 단순 미달이 아니라 "사회통념상 고용관계를 계속할 수 없을 정도"의 부진을 회사가 입증해야 한다고 보았습니다. PIP 문서·이메일·동료 평균 자료·교육 부재 정황을 시간순으로 정리하면 다툼 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — PIP 자료 보존 (즉시)</strong> — PIP 통보서·목표 산정 근거·평가표·동료 평균 자료·교육 제공 이메일 캡처 + 상사와의 면담 녹취·메모.</li>\n<li><strong>2단계 — 회사에 해고사유서 서면 요구 (3~7일)</strong> — 내용증명으로 "해고사유·목표 산정근거·평가절차"의 서면 통지 요구. 회사 측 자료 부족이 다툼 자료가 됩니다.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (해고일 3개월 이내)</strong> — 사업장 관할 지방노동위. PIP 목표 비현실성·평가 객관성 부재·향상기회 부재·고용계속 불가능 입증 부담 4단계 트랙.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 동료 평균 자료·과거 본인 실적·교육 부재 정황 제시. 회사 측 입증 부담이 무거운 영역입니다.</li>\n<li><strong>5단계 — 판정·민사 병행</strong> — 인용 시 원직복직 + 임금상당액(통상 6~12개월치). 노동위 트랙이 한계인 5인 미만 사업장이라면 민사 해고무효확인 소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PIP 목표 합리성·평가 객관성·향상기회 4단계 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. PIP 자료 + 비교자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>PIP 통보서·목표 산정 근거</strong> — 목표 수치·산정 방법·평가 기준·평가 주체.</li>\n<li><strong>동료 평균 실적·전년도 본인 실적</strong> — 목표가 비현실적이라는 핵심 비교자료.</li>\n<li><strong>교육·코칭·자료 제공 이메일</strong> — 향상기회 실질성 입증(또는 부재 입증).</li>\n<li><strong>평가표·점수 통보서</strong> — 평가 객관성·기준 적용 일관성.</li>\n<li><strong>해고통보서·해고사유서</strong> — 서면통지 의무 이행 + 사유 명시 정도.</li>\n<li><strong>근로계약서·취업규칙·인사규정</strong> — PIP·해고 관련 조항.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 통상임금 산정용(임금상당액).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 PIP 문서를 자료로 못 내거나 동료 평균 자료 제출을 회피하는 정황 자체가 합리성 입증 부담의 어려움을 드러내는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"PIP 동의서에 서명했다" 주장 반박</strong> — 동의서 서명이 비현실적 목표를 정당화하지 않는 영역. 의사표시 강박·기망 정황 결합 시 다툼 가능성 더 높아집니다.</li>\n<li><strong>"본인이 노력 부족이었다" 주장 반박</strong> — 합리적 목표 + 향상기회 부여 후 입증 부담은 회사. 단순 본인 책임 주장으로는 정당사유 입증 불충분 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>"PIP 통과한 동료도 있다" 주장 반박</strong> — 일부 통과자 존재만으로 본인 목표의 합리성이 입증되지 않습니다. 통과자의 출발점·환경 차이 검토.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 부당해고 구제와 별개로 해고예고 30일 위반 시 30일분 통상임금은 노동청 임금체불 진정으로 청구 가능한 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·임금체불 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당·임금체불 진정 트랙.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — PIP 근무성적 미달 해고의 정당성 4가지 판단기준',
        summary:
          '대법원 2018다253680 사건(대법원, 2021.02.25 선고)에서 법원은 사용자가 취업규칙상 "근무성적 또는 능력이 현저하게 불량하여 직무를 수행할 수 없다고 인정되었을 때"를 사유로 근로자를 해고한 사안에서, 단순 미달이 아니라 사회통념상 고용관계를 계속할 수 없을 정도의 부진이 있는지를 평가의 객관성·공정성, 부진 정도, 향상기회의 실질성 등을 종합 판단해야 한다고 판시했습니다. 회사 측 입증 부담이 무거운 영역임을 명확히 한 판결입니다.',
        takeaway: 'PIP 미달 해고는 목표 합리성·평가 객관성·향상기회 실질성을 회사가 입증해야 정당성이 인정되는 사례가 있어, PIP 통보서·목표 산정근거·동료 평균 자료를 시간순 정리하면 다툼 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: 'PIP 동의서에 서명했어요. 다툴 수 없나요?',
        answer:
          '<strong>서명 자체가 비현실적 목표를 정당화하지는 않습니다.</strong> 목표 합리성·향상기회 부재·평가 객관성 결여 등 절차·실체 다툼 트랙이 별도로 열려 있는 영역으로 검토할 수 있습니다.',
      },
      {
        question: 'PIP 기간이 1개월밖에 안 됐는데 다툼 가능한가요?',
        answer:
          '<strong>평가기간 단기성 자체가 정당성 다툼 자료가 됩니다.</strong> 일반적으로 PIP는 3~6개월 이상 부여되고, 1개월 단기 PIP 후 해고는 향상기회 실질성 부재 정황으로 평가될 여지가 있습니다.',
      },
      {
        question: '해고 후 1개월 지났는데 노동위 신청 늦지 않았나요?',
        answer:
          '<strong>해고일로부터 3개월 이내라면 가능합니다.</strong> 다만 늦어질수록 PIP 자료·동료 평균·교육 이메일 등 입증자료 보존이 어려워지므로 가능한 빨리 자료 확보를 검토하는 것이 안전합니다.',
      },
      {
        question: '5인 미만 사업장인데 PIP 해고됐어요. 다툴 수 있나요?',
        answer:
          '<strong>5인 미만은 노동위 부당해고 구제 트랙이 적용되지 않는 영역입니다.</strong> 다만 민사 해고무효확인 소송은 별도 가능하고, 해고예고 30일분 통상임금은 노동청 임금체불 진정으로 청구 가능한 사례가 있습니다.',
      },
      {
        question: 'PIP 목표가 비현실적인지 어떻게 입증하나요?',
        answer:
          '<strong>동료 평균·시장 평균·과거 본인 실적 비교가 가장 강력한 자료입니다.</strong> 회사 사내 자료 + 인사부서 발언 녹취 + 동료 사실확인서를 결합해 목표의 비현실성을 종합 입증할 수 있는 영역입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '저성과자 해고 방어 전략', href: '/guide/dismissal/dismissal-low-performance-defense' },
      { label: 'PIP 평가 절차 하자', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
      { label: '근무평가 D 등급 해고 다툼', href: '/guide/dismissal/dismissal-pip-low-performance-defense' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: '카톡 해고 통보 서면통지 위반', href: '/guide/dismissal/dismissal-text-message-tomorrow-no-come-illegal' },
    ],
  },

  // ─── 2. dismissal / dismissal-fixed-term-pregnancy-non-renewal ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fixed-term-pregnancy-non-renewal',
    keyword: '계약직 임신 갱신거부 갱신기대권',
    questionKeyword: '계약직인데 임신 사실을 알리자마자 갱신 거부 통보를 받았어요. 다툴 수 있나요?',
    ctaKeyword: '임신 갱신거부 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '계약직 임신 알리자 갱신거부 — 4가지 다툼 포인트 | 로앤가이드',
      description:
        '계약직 근로자가 임신 사실을 알린 직후 갱신 거부됐다면 갱신기대권 + 남녀고용평등법 위반 결합 4단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년째 1년 단위 계약 갱신을 해오던 회사에서 4월에 임신 사실을 알렸더니, 5월 계약 만료 직전에 \'이번엔 갱신 안 한다\'는 통보를 받았어요. 같은 팀 동료들은 다 갱신됐는데 저만 끊겼습니다." 계약직 갱신거부는 형식상 기간 만료 외관을 띠지만, 대법원 2015두44493·2018두62492 일관 판결은 갱신기대권이 인정되는 경우 합리적 이유 없는 갱신거부는 무효라고 보고 있습니다. 특히 임신을 사유로 한 갱신거부는 남녀고용평등법 제19조의5(임신·출산을 이유로 한 불리한 처우 금지) + 근로기준법 제74조 위반 결합 영역이라, 갱신기대권 + 차별 두 트랙으로 다툴 수 있는 사례가 있습니다. 해고일·갱신거부일로부터 3개월 이내라면 노동위 구제신청을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 계약직 임신 갱신거부에서 점검할 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신기대권·남녀고용평등법·근로기준법 임신보호·증명책임 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신기대권 (대법원 2015두44493 등)</strong> — 반복 갱신 사실·취업규칙·관행·평가기준 등으로 갱신될 수 있다는 정당한 기대권이 형성됐는지. 3년 이상 반복 갱신은 강한 기대권 정황입니다.</li>\n<li><strong>② 남녀고용평등법 제19조의5</strong> — 사업주가 임신·출산을 이유로 근로계약 갱신 거절 등 불리한 처우를 한 경우 위반. 동시기 동료 갱신 사실 + 본인 갱신거부 시점이 임신 통지 직후라면 차별 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>③ 근로기준법 제74조 + 모성보호</strong> — 임신 중 여성에 대한 사용자의 보호의무. 갱신거부가 모성보호 회피 수단이었다면 부당한 처우 영역.</li>\n<li><strong>④ 회사 측 합리적 이유 입증부담</strong> — 갱신기대권이 인정되면 회사가 합리적 이유를 입증해야 합니다(2021두45114). 단순 "사업 축소"·"성과 부진" 주장만으로는 부족한 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갱신기대권만으로도 무효 다툼이 가능하지만, 임신 통지 직후 갱신거부는 차별 트랙까지 결합되어 위자료·시정명령까지 검토할 수 있는 영역입니다. 임신 통지일·갱신거부 통보일·동료 갱신 사실을 시간순으로 정리하는 것이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 갱신거부 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 구제신청 + 고용노동부 진정을 병행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 근로계약서·반복 갱신 이력·평가표·임신 통지 이메일/카톡·갱신거부 통보·동료 갱신 사실 정황(공고·인사발령서).</li>\n<li><strong>2단계 — 회사에 갱신거부 사유 서면 요구 (3~7일)</strong> — 내용증명으로 갱신거부 사유의 서면 통지 요구. 사유 부재·임신 언급 회피가 다툼 자료가 됩니다.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (갱신거부일 3개월 이내)</strong> — 갱신기대권 + 합리적 이유 부재 입증. 사업장 관할 지방노동위.</li>\n<li><strong>4단계 — 고용노동부 차별 진정 (병행)</strong> — 남녀고용평등법 제19조의5 위반 진정. 사업주 시정명령·과태료·형사처벌 트랙(법 제37조).</li>\n<li><strong>5단계 — 판정·민사 손해배상 검토</strong> — 노동위 인용 시 갱신간주 + 임금상당액. 차별이 인정되면 위자료(통상 300~1,000만원 검토) 별도 청구 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">갱신기대권 + 임신 차별 결합 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신기대권 자료 + 차별 입증 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>역대 근로계약서·갱신 이력</strong> — 반복 갱신 횟수·기간·자동 갱신 정황.</li>\n<li><strong>평가표·인사고과 이력</strong> — 갱신기대권 형성 정황(평가 양호 + 갱신).</li>\n<li><strong>임신 통지 이메일·카톡</strong> — 통지 시점이 갱신거부 시점과 가까운지.</li>\n<li><strong>갱신거부 통보서·내용증명 사본</strong> — 사유 명시 정도, 시점.</li>\n<li><strong>동료 갱신 사실 자료</strong> — 같은 시기 동료 갱신·후임 채용 정황.</li>\n<li><strong>취업규칙·인사규정</strong> — 갱신·평가 절차 명문 규정.</li>\n<li><strong>병원 진단서·임신 확인서</strong> — 임신 사실·시점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임신 통지 후 인사담당자·상사가 보낸 카톡·메일·통화 녹취에서 "갱신 어렵다"·"인력 운영상 부담" 등 발언이 남아있다면 차별 정황의 강력한 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"기간 만료라 갱신거부는 자유" 주장 반박</strong> — 갱신기대권이 형성된 경우 회사가 합리적 이유를 입증해야 합니다. 단순 만료 주장은 입증 부족 영역.</li>\n<li><strong>"임신과 무관한 사업 축소" 주장 반박</strong> — 동시기 동료 갱신 + 후임 채용 정황이 있다면 사업 축소 주장 자체가 다툼 자료가 됩니다.</li>\n<li><strong>"성과 부진" 주장 반박</strong> — 과거 평가가 양호했는데 갑자기 부진 평가가 나왔다면 평가의 객관성 다툼 영역.</li>\n<li><strong>출산휴가·육아휴직 신청 권리 별도</strong> — 갱신간주 시 출산휴가(90일)·육아휴직(1년) 신청 가능. 노동청 진정 트랙도 함께 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·임신차별 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 차별 진정·임신 보호 트랙.</li>\n<li><strong>한국여성노동자회 02-325-6822</strong> — 여성노동·임신차별 전문 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신기대권이 있는 기간제 근로계약 갱신거부의 효력',
        summary:
          '대법원 2015두44493 사건(대법원, 2017.10.12 선고)에서 법원은 기간제 근로자에게 근로계약이 갱신될 수 있으리라는 정당한 기대권이 인정되는 경우 이에 위반하는 사용자의 부당한 갱신거절은 무효이며, 기간 만료 후의 근로관계는 종전 근로계약이 갱신된 것과 동일하게 본다고 판시했습니다. 갱신기대권 형성 여부는 반복 갱신 사실·취업규칙·관행·평가기준 등을 종합 판단하고, 합리적 이유의 증명책임은 사용자에게 있다고 보았습니다.',
        takeaway: '계약직 임신 갱신거부 사안은 갱신기대권 + 임신 통지 시점 결합으로 다툼 트랙이 열리는 사례가 있어, 반복 갱신 이력·임신 통지 시점·동료 갱신 사실을 시간순 정리하면 노동위·고용노동부 두 트랙을 병행 검토할 수 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '계약직 첫 1년 만료인데 갱신거부도 다툴 수 있나요?',
        answer:
          '<strong>1회차 만료라면 갱신기대권 형성이 어려운 사례가 많습니다.</strong> 다만 채용 공고·인사담당자 발언에 "장기 근무 가능"·"성과 양호 시 갱신" 정황이 있다면 1회차에도 기대권 다툼이 가능한 영역으로 검토할 수 있습니다.',
      },
      {
        question: '임신 사실을 알리지 않았는데 갱신거부 됐어요',
        answer:
          '<strong>임신 차별 트랙은 어렵지만 갱신기대권 트랙은 별도로 열려 있는 영역입니다.</strong> 반복 갱신 이력·동료 갱신 사실로 갱신기대권 + 합리적 이유 부재 입증으로 다툴 수 있는 사례가 있습니다.',
      },
      {
        question: '갱신거부 통보 후 출산휴가 신청 가능한가요?',
        answer:
          '<strong>노동위 인용으로 갱신간주되면 출산휴가·육아휴직 신청 가능합니다.</strong> 다만 갱신거부 후 진행 중이라면 갱신간주가 확정되기 전까지는 회사가 거부할 수 있어, 노동위 절차를 빠르게 진행하는 것이 안전합니다.',
      },
      {
        question: '5인 미만 사업장인데 갱신거부됐어요',
        answer:
          '<strong>5인 미만이라도 갱신기대권 + 차별 트랙은 별도 가능합니다.</strong> 노동위 부당해고 트랙은 제한되지만, 민사 해고무효확인 소송 + 남녀고용평등법 위반 진정은 별도 가능한 영역입니다.',
      },
      {
        question: '회사가 "본인이 임신 알린 적 없다"고 부인합니다',
        answer:
          '<strong>임신 통지 이메일·카톡·녹취·동료 진술이 자료가 됩니다.</strong> 통지 시점과 갱신거부 시점의 시간 근접성·다른 동료 갱신 정황으로 종합 입증할 수 있는 영역입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '계약직 갱신기대권 인정 요건', href: '/guide/dismissal/dismissal-fixed-term-renewal-right' },
      { label: '임신·출산 모성보호 해고', href: '/guide/dismissal/dismissal-pregnancy-protection' },
      { label: '계약직 비갱신 정당 이유', href: '/guide/dismissal/dismissal-fixed-term-non-renewal-remedy' },
      { label: '출산휴가 복귀 즉시 해고', href: '/guide/dismissal/dismissal-maternity-return-fired' },
      { label: 'PIP 비현실적 목표 미달 해고', href: '/guide/dismissal/dismissal-pip-unrealistic-target-failure' },
    ],
  },

  // ─── 3. dismissal / dismissal-disciplinary-warning-no-defense-chance ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-warning-no-defense-chance',
    keyword: '소명기회 없이 징계해고 절차하자',
    questionKeyword: '소명기회 없이 징계위원회 단 한 번에 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '징계해고 절차 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '소명기회 없는 징계해고 — 5가지 절차하자 점검 | 로앤가이드',
      description:
        '소명기회 부여 없이 징계위 단 한 번에 해고됐다면 절차하자 5가지(소명·통지·징계사유 추가·기피·재심) 점검과 노동위 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"오늘 오전에 \'징계위원회 통보\'라는 메일을 받았는데, 같은 날 오후에 인사팀이 부르더니 해고를 통보받았어요. 소명할 시간도, 자료를 준비할 시간도 없었습니다." 징계해고는 사유의 정당성뿐 아니라 절차의 적법성도 별도 다툼 영역입니다. 대법원 2010다100919 판결은 징계위원회가 소명기회를 실질적으로 부여하지 않거나 통지된 사유 외에 새로운 사유를 추가해 의결한 경우 절차하자로 해고가 무효라고 판시했습니다. 대법원 92다50263 판결도 단체협약·취업규칙상 필수 절차인 소명기회 부여를 누락하면 징계처분 자체가 무효 정황으로 평가될 여지가 있다고 보았어요. 해고일로부터 3개월 이내라면 노동위 부당해고 구제신청 트랙을 검토할 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 징계해고 절차하자 5가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 소명기회·사전통지·징계사유 추가·위원 기피·재심 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 소명기회 실질 부여</strong> — 단순 "출석 통보"가 아니라 자료 준비·진술·반박 시간이 실질적으로 보장됐는지. 통보 당일 징계는 절차하자 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>② 사전 통지 기간</strong> — 통상 7일 이상의 사전 통지 + 징계사유·근거 조항 명시. 일부 단체협약은 14일 이상 요구.</li>\n<li><strong>③ 징계사유 추가 의결 금지</strong> — 통지된 사유 외에 새로운 사유를 징계위가 추가해 의결한 경우 무효 정황(대법원 2010다100919).</li>\n<li><strong>④ 징계위원 기피·제척 절차</strong> — 본인과 이해관계 있는 위원이 의결에 참여한 정황은 절차 다툼 자료. 기피신청권이 보장됐는지.</li>\n<li><strong>⑤ 재심·이의신청 절차</strong> — 단체협약·취업규칙상 재심 절차가 명문화돼 있는데 그 절차를 거치지 않은 사안은 절차하자 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 징계 사유 자체가 정당해도 절차 하자가 있으면 해고는 무효 정황으로 평가될 여지가 있습니다. 회사가 사후 절차를 보완해도 최초 절차에 본질적 하자가 있었다면 치유되지 않는 사례가 있습니다(대법원 96다23627).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 구제 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 징계 자료 보존 (즉시)</strong> — 징계위 통보 메일·출석 통보·징계사유서·징계의결서·재심 신청서·인사부 메일 캡처.</li>\n<li><strong>2단계 — 회사에 징계의결서 + 재심 절차 서면 요구 (3~7일)</strong> — 내용증명으로 징계의결서·재심 절차 안내 요구. 회사 무대응 자체가 절차하자 자료.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (해고일 3개월 이내)</strong> — 절차하자 + 사유 정당성 결여 두 트랙 동시 주장. 사업장 관할 지방노동위.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 소명기회·사전통지·사유 추가·기피·재심 5가지 절차 위반 정황 입증. 회사 측 절차 이행 입증부담.</li>\n<li><strong>5단계 — 판정·민사 병행</strong> — 인용 시 원직복직 + 임금상당액. 5인 미만이거나 노동위 트랙이 어려운 사안은 민사 해고무효확인 소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">징계해고 절차하자 5가지 점검을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 절차 자료 + 사유 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>징계위 출석 통보서</strong> — 통보 시점·출석 일시·소명 안내 정도.</li>\n<li><strong>징계사유서·근거조항</strong> — 사전 통지 사유와 의결서 사유의 일치 여부.</li>\n<li><strong>징계의결서</strong> — 위원 명단·기피 절차 안내·결의 내용.</li>\n<li><strong>재심·이의신청 절차 안내</strong> — 취업규칙·단체협약 명문 규정과 실제 안내 일치.</li>\n<li><strong>취업규칙·단체협약 사본</strong> — 징계 절차·소명기회·재심 명문 규정.</li>\n<li><strong>해고통보서·해고사유서</strong> — 사유 명시 + 통지 시점.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 사후에 절차를 다시 진행해 "치유"를 시도해도, 최초 절차에 본질적 하자가 있었다면 치유되지 않는 사례가 있어 최초 자료 보존이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 출석 거부했다" 주장 반박</strong> — 출석 통보가 당일·익일 등 비합리적 단기였다면 실질 출석 불가능 정황. 형식상 통보만으로 절차 이행이 인정되지 않는 영역.</li>\n<li><strong>"재심에서 기회를 줬다" 주장 반박</strong> — 재심이 형식상 진행됐어도 본질적 절차하자(소명기회·사유 추가)는 치유되지 않는 사례가 있습니다(대법원 96다23627).</li>\n<li><strong>"단체협약·취업규칙엔 명문 절차 없다" 주장 반박</strong> — 명문 규정이 없어도 절차적 정의(due process)는 노동법의 일반 원칙으로 적용되는 영역.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 절차하자 다툼과 별개로 해고예고 30일 위반 시 30일분 통상임금 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·절차하자 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당·임금체불 진정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소명기회 부여 없는 징계의결의 효력',
        summary:
          '대법원 2010다100919 사건(대법원, 2012.01.27 선고)에서 법원은 징계위원회가 징계의결이 요구된 사유를 근본적으로 수정하거나 새로운 사유를 추가해 의결한 경우, 징계대상자가 그 사유에 대해 변명과 소명자료 제출 기회를 부여받지 못했다면 징계절차를 위반한 위법이 있어 징계처분이 무효라고 판시했습니다.',
        takeaway: '징계해고는 사유의 정당성과 절차의 적법성이 별개 다툼 영역이라, 통지된 사유와 의결서 사유의 일치 여부·소명기회 실질성·재심 절차 이행을 종합 점검하면 절차하자 다툼 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '징계위에 출석은 했는데 자료 준비할 시간이 없었어요',
        answer:
          '<strong>실질적 소명기회 부여 부재 정황으로 평가될 여지가 있습니다.</strong> 출석 통보 시점과 징계위 일정의 간격이 짧다면(예: 24시간 이내) 자료 준비가 불가능한 상황으로 절차하자 다툼 트랙이 열립니다.',
      },
      {
        question: '재심 신청을 안 하고 바로 노동위에 가도 되나요?',
        answer:
          '<strong>재심 신청 의무가 명문화돼 있지 않다면 노동위 직행 가능합니다.</strong> 다만 단체협약상 재심 전치주의가 명문화돼 있다면 먼저 재심을 거쳐야 하는 사례가 있어, 취업규칙·단체협약 검토가 필요합니다.',
      },
      {
        question: '회사가 사후에 절차를 다시 진행하겠다고 합니다',
        answer:
          '<strong>본질적 절차하자는 사후 절차로 치유되지 않는 사례가 있습니다(대법원 96다23627).</strong> 최초 절차의 자료를 보존하고 노동위 절차를 그대로 진행하는 것이 안전합니다.',
      },
      {
        question: '징계사유는 인정하는데 절차만 잘못된 경우 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 사유 정당성과 절차 적법성은 별개 다툼이며, 절차하자만으로도 해고가 무효 정황으로 평가될 여지가 있습니다. 노동위는 두 트랙 동시 주장이 가능합니다.',
      },
      {
        question: '징계위 위원이 본인 직속 상사였어요',
        answer:
          '<strong>이해관계 있는 위원의 의결 참여는 기피 사유 다툼 자료입니다.</strong> 단체협약·취업규칙상 기피·제척 절차가 명문화돼 있는데 적용되지 않았다면 절차하자 정황으로 평가될 여지가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '징계위 권리·기피 절차', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '징계 양정 과중 방어', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '단일 사건 즉시 해고 다툼', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '해고통보서 사유 부실', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: 'PIP 비현실적 목표 미달 해고', href: '/guide/dismissal/dismissal-pip-unrealistic-target-failure' },
    ],
  },
];
