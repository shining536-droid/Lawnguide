import { SpokePage } from '../spoke-pages';

// batch52 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 직장 내 괴롭힘을 신고해 1차 시정 종료 후 보복성 2차 처분(배치전환·평가하락·해고)을 받은 근로자가 보복 인과관계 입증과 노동위·근로감독 병행 트랙으로 부당해고를 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 회사 합병·외국법인 한국영업소 통합 후 "사업 부문 폐지"를 명분으로 통상해고된 근로자가 한국법인+외국영업소 사업 일체성 법리와 폐업 동등성 입증책임으로 다툴 수 있도록 돕는 페이지다.
// 3. 이 페이지는 재택근무 중 회사가 슬랙·이메일·키스트로크 모니터링 위반(개인메신저 사용·외부 사이트 접속 등)을 사유로 해고한 근로자가 디지털 감시 동의 범위·개인정보보호법 비례성 4가지 포인트로 다툴 수 있도록 돕는 페이지다.
// 4. 이 페이지는 사내 동거·미혼관계가 알려진 뒤 "회사 명예훼손"·"근태 산만" 명목으로 해고된 근로자가 헌법상 사생활·평등권 보호와 비례성 평가 기준으로 다툴 수 있도록 돕는 페이지다.
// 5. 이 페이지는 정년 도달 후 기간제(촉탁직)로 재고용될 것으로 기대했으나 회사가 합리적 이유 없이 거절한 근로자가 재고용 기대권 + 신뢰관계 형성 입증으로 부당해고 구제를 검토할 수 있도록 돕는 페이지다.

export const spokesBatch52Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-bullying-report-second-retaliation ───
  {
    domain: 'dismissal',
    slug: 'dismissal-bullying-report-second-retaliation',
    keyword: '직장 내 괴롭힘 신고 보복 해고',
    questionKeyword: '괴롭힘 신고로 1차 시정은 끝났는데 그 뒤 평가·전보·해고로 보복받았어요. 다툴 수 있나요?',
    ctaKeyword: '괴롭힘 신고 보복 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '괴롭힘 신고 후 2차 보복 해고 다투는 4가지 입증 포인트 | 로앤가이드',
      description:
        '직장 내 괴롭힘 신고 후 평가하락·전보·해고로 이어진 2차 보복이라면 근로기준법 제76조의3 위반 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"괴롭힘을 신고해 1차 시정은 받았는데 몇 달 뒤 갑자기 인사평가가 최하 등급으로 떨어지고 한직으로 발령난 뒤 \'성과 부진\'으로 해고됐어요. 신고에 대한 보복인 것 같은데 어떻게 다퉈야 할지 막막합니다." 근로기준법 제76조의3 제6항은 신고 또는 사실관계 조사·증언·자료 제출 등을 이유로 해고·그 밖의 불리한 처우를 금지합니다(위반 시 3년 이하 징역 또는 3천만 원 이하 벌금). 1차 시정이 끝났더라도 그 뒤 발생한 평가하락·전보·해고가 신고와 인과관계 있는 보복이라면 별도 부당해고·불리한 처우 다툼이 가능합니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한이며, 근로감독 신고와 병행하는 것이 효과적인 사례가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 1차 시정 끝난 뒤 보복으로 다툴 수 있는 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 보복 인과관계는 시간 흐름·처분 패턴·합리적 이유 부재로 종합 평가됩니다.</strong></p>\n<ul>\n<li><strong>① 시간적 근접성</strong> — 신고·시정 종료일과 평가하락·전보·해고 사이 시간 간격이 짧을수록(통상 3~6개월 이내) 보복 정황으로 평가될 가능성이 높아집니다.</li>\n<li><strong>② 처분의 합리적 이유 부재</strong> — 신고 전 평가는 정상이었는데 신고 직후부터 평가가 급락했거나 같은 행위에 대해 다른 동료에게는 적용되지 않은 잣대라면 합리성 결여 정황입니다.</li>\n<li><strong>③ 가해자·관리자의 보복 정황 발언</strong> — "신고하지 말았어야지", "괜히 문제 키웠다" 류 발언이 메신저·녹음·증인 진술로 입증되면 강력한 정황 자료가 됩니다.</li>\n<li><strong>④ 절차상 하자</strong> — 평가·전보·징계 절차에서 본인 소명기회 부여, 객관적 평가 기준 적용 여부를 점검합니다. 절차 하자가 있으면 보복 외에 절차 위법으로도 다툴 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1차 시정이 끝났다고 해도 보복은 "그 후의 별개 사건"으로 평가되므로, 1차 신고 자료부터 2차 보복 정황까지 시간순으로 정리해두는 것이 가장 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 + 근로감독 병행 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 진정·노동위 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 1차 신고·시정 자료 보존</strong> (즉시) — 최초 괴롭힘 신고서, 회사 조사 결과 통보문, 시정명령·시정조치 자료 사본 확보.</li>\n<li><strong>2단계 — 보복 정황 시간순 정리</strong> (즉시) — 평가하락·전보·해고 시점, 그 사이 가해자·관리자 발언, 동료 비교 자료를 표로 정리.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 입증자료 각 2부 (우편·방문·온라인). 처리 기한 통상 60일 이내.</li>\n<li><strong>4단계 — 근로감독관 신고 병행</strong> (선택·권장) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청에 근로기준법 제76조의3 위반 진정. 처리기간 25일. 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3천만 원 이하 벌금) 압박.</li>\n<li><strong>5단계 — 심문회의·판정·민사 손배</strong> (필요 시) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령. 별도 정신적 손해에 대한 위자료 민사 청구도 검토 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">괴롭힘 신고 후 2차 보복 해고 사안에서 다툼 트랙과 입증 자료를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 1차 신고 흐름 + 2차 보복 정황 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>최초 괴롭힘 신고서·접수 회신</strong> — 신고 시점·내용·회사 처리 결과.</li>\n<li><strong>1차 시정 결과 통보문</strong> — 가해자 처분, 시정조치 내용, 시정 종료일.</li>\n<li><strong>신고 전·후 인사평가서</strong> — 등급 변화·평가자 변경 여부·평가 항목 비교.</li>\n<li><strong>전보·인사발령서</strong> — 직책·업무·근무지 변동 자료.</li>\n<li><strong>해고통보서·해고사유서</strong> — 회사가 든 사유와 신고와의 관련 정황.</li>\n<li><strong>가해자·관리자 발언 녹음·메신저</strong> — "신고하지 말았어야" 류 보복 정황 발언.</li>\n<li><strong>동료 진술서·비교 평가표</strong> — 같은 부서 다른 직원의 평가·처분 비교.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보복 정황은 "단일 결정적 자료"보다 "여러 정황의 합산"으로 입증되는 사례가 많아, 시간순 표로 정리해두면 노동위 심문회의에서 효과적입니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "객관적 성과 부진 평가"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 성과 부진 주장은 평가 기준의 일관성·시점 합치성·동료 비교 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>신고 전 평가와의 일관성</strong> — 신고 전 평가가 정상이었다면 갑작스러운 등급 하락은 평가 기준 변경 또는 평가자 편향 정황으로 평가될 수 있습니다.</li>\n<li><strong>평가 잣대의 차별 적용</strong> — 같은 행위·실적에 대해 다른 동료에게는 적용되지 않은 평가 잣대가 있다면 차별 정황입니다.</li>\n<li><strong>평가 절차의 객관성</strong> — 평가자가 보복 동기를 가질 수 있는 가해자·가해자 측 관리자라면 평가 자체의 객관성 결격 정황입니다.</li>\n<li><strong>견책·감봉 등 중간 단계 부재</strong> — 곧바로 해고로 간 패턴은 비례성 위반 정황으로 평가될 여지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 신고 자체를 "허위 신고·과장 신고"로 평가해 신뢰관계 파탄 사유로 끌어들일 가능성이 있어, 1차 시정에서 신고 사실이 일부라도 인정된 자료를 보존해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 제출 후 부당해고 다툼의 소의 이익',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 사직서를 제출한 후 노동위원회에 부당해고 구제신청을 한 사안에서, 이미 퇴직에 이르렀거나 근로계약기간 만료, 폐업 등의 사정이 있어도 근로관계가 유효하게 존속하던 동안의 임금상당액을 받을 필요가 있는 경우라면 노동위원회의 구제명령을 받을 권리가 소멸하지 않아 구제신청의 소의 이익이 있다고 판시했습니다.',
        takeaway: '괴롭힘 신고 후 보복 분위기에 사직했더라도 그 사직 자체가 강요된 것이라면 부당해고 다툼이 가능하고, 임금상당액 청구를 위한 구제신청의 소의 이익이 인정될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '1차 시정에서 신고가 일부만 인정됐는데 그래도 보복으로 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 일부라도 인정된 신고는 정당한 권리행사이므로, 그 후 처분이 신고를 이유로 한 보복이라면 별도 다툼 영역이 됩니다.',
      },
      {
        question: '신고 후 1년 넘게 지나서 해고됐어요. 시간이 너무 흘러 보복으로 인정 안 되지 않나요?',
        answer:
          '<strong>시간적 간격이 길어도 그 사이 평가하락·전보 등 점진적 보복 패턴이 입증되면 인과관계가 인정될 여지가 있습니다.</strong> 중간 처분 자료를 시간순으로 정리해두는 것이 핵심입니다.',
      },
      {
        question: '근로감독관 신고와 노동위 구제신청을 둘 다 해도 되나요?',
        answer:
          '<strong>두 트랙은 별개라 동시 진행이 가능합니다.</strong> 근로감독관은 형사·시정지시를, 노동위는 해고 정당성을 다루며 서로 보완 관계입니다.',
      },
      {
        question: '신고 사실이 사내에 다 알려졌는데 이게 회사 측 보복 동기 입증이 되나요?',
        answer:
          '<strong>됩니다.</strong> 신고 사실의 사내 공지·확산 정황은 회사가 신고를 인지·중요시했다는 정황 자료로 활용될 수 있습니다.',
      },
      {
        question: '인용되면 원직복직 외에 위자료도 받을 수 있나요?',
        answer:
          '<strong>노동위는 원직복직 + 임금상당액 또는 금전보상명령이 기본이고, 위자료는 별도 민사 청구 영역입니다.</strong> 보복으로 인한 정신적 손해 입증 시 민사 손배 검토가 가능한 사례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '직장 내 괴롭힘 신고 보복 해고', href: '/guide/dismissal/dismissal-bullying-report-retaliation' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: 'PIP 평가 절차 하자 입증', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
    ],
  },

  // ─── 2. dismissal / dismissal-cooperation-merger-redundancy-defense ───
  {
    domain: 'dismissal',
    slug: 'dismissal-cooperation-merger-redundancy-defense',
    keyword: '회사 합병 사업부문 폐지 해고',
    questionKeyword: '회사 합병 후 "사업부문 폐지"라며 통상해고됐어요. 정리해고 요건 안 갖춰도 가능한가요?',
    ctaKeyword: '합병 후 사업부문 폐지 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '합병·사업부문 폐지 해고 다투는 4단계 입증책임 | 로앤가이드',
      description:
        '합병 후 일부 사업부문 폐지를 명분으로 통상해고됐다면 폐업 동등성 입증책임은 사용자에게 있습니다. 4단계 다툼 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 외국 본사와 합병한 뒤 \'한국 사업부문 일부를 폐지한다\'며 정리해고 요건도 거치지 않고 통상해고로 처리했어요. 사업 전체가 폐지된 것도 아닌데 이렇게 해고할 수 있는 건지 막막합니다." 회사가 사업 일부 폐지를 이유로 한 해고는 원칙적으로 정리해고(근로기준법 제24조) 요건을 충족해야 합니다. 다만 그 일부 폐지가 사업 전체 폐지와 같다고 볼 만한 특별한 사정이 인정되면 통상해고로도 정당화될 수 있는데, 이때 사업 일부 폐지 = 폐업 동등성 입증책임은 사용자에게 있습니다(대법원 2023두57876 취지). 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '합병 후 사업부문 폐지 해고에서 다툴 수 있는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">대법원 법리(2023두57876 취지)를 종합하면 아래 4가지 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정리해고 요건 충족 여부</strong> — 근로기준법 제24조의 ① 긴박한 경영상 필요, ② 해고 회피 노력, ③ 합리적·공정한 선정 기준, ④ 50일 전 근로자대표 협의가 충족됐는지 우선 점검합니다.</li>\n<li><strong>② 사업 일부 폐지 = 폐업 동등성 입증책임</strong> — 회사가 통상해고로 가려면 일부 사업의 폐지·축소가 사업 전체의 폐지와 같다고 볼 만한 특별한 사정을 사용자가 적극 입증해야 합니다.</li>\n<li><strong>③ 한국법인 + 외국영업소 사업 일체성</strong> — 동일한 외국기업이 지배하는 한국법인과 외국법인 한국영업소가 경영상 일체성·유기적 관련성을 가지면 하나의 사업으로 평가되어 잔여 인력 흡수 의무가 검토될 여지가 있습니다.</li>\n<li><strong>④ 잔여 사업·자회사 전직 가능성 미검토</strong> — 합병으로 흡수된 본사·관계사·자회사 인력 흡수 가능성을 검토하지 않은 채 일방 해고했다면 해고 회피 노력 부재로 평가될 정황입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ②번 입증책임이 사용자에게 있다는 점이 가장 큰 안전장치입니다. 회사가 "긴박한 경영상 사정"만 추상적으로 들고 있다면 구체적 폐업 동등성 입증을 요구할 여지가 큽니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합병·사업부문 폐지 자료 보존</strong> (즉시) — 합병 공고문, 사업부문 폐지 결정문, 본인 해고통보서·사유서, 회사 측 정리해고 또는 통상해고 표기 확인.</li>\n<li><strong>2단계 — 잔여 사업·자회사 정황 정리</strong> — 합병된 본사·자회사·관계사의 한국 사업 지속 여부, 잔여 부서·인력 자료, 신규 채용 정황.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 정리해고 요건 미충족 + 폐업 동등성 입증 부재 + 사업 일체성 점검을 단계별로 입증.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> (재심 10일·행정소송 15일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">합병 후 사업부문 폐지 해고 사안에서 정리해고 요건과 폐업 동등성 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">정리해고 요건 검증 + 사업 일체성 검증 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>합병·사업부문 폐지 공고문</strong> — 합병 시점·범위·잔여 사업 자료.</li>\n<li><strong>해고통보서·사유서</strong> — 정리해고/통상해고 표기, 회피 노력·선정 기준 기재 여부.</li>\n<li><strong>근로자대표 협의 자료</strong> — 50일 전 통보·협의 기록 (없으면 절차 위반 정황).</li>\n<li><strong>잔여 부서·자회사 사업 자료</strong> — 합병된 본사·관계사 한국 사업 지속 여부, 신규 채용 공고.</li>\n<li><strong>한국법인 ↔ 외국영업소 인력·재정 자료</strong> — 사업 일체성 입증용 (인사 공유·예산 통합 정황).</li>\n<li><strong>같은 부서·직급 동료 처우</strong> — 누구는 잔류·누구는 해고된 선정 기준의 합리성.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합병 공시·외국 본사 IR 자료에서 한국 사업 지속 표명이 있다면 "사업 폐지 = 폐업 동등성" 주장을 직접 반박하는 자료가 됩니다.</blockquote>',
      },
      {
        title: '회사가 "통상해고라 정리해고 요건과 무관"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">통상해고 주장은 폐업 동등성 입증책임을 회사가 부담한다는 법리로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>입증책임 분담</strong> — 사용자가 "사업 일부 폐지 = 폐업 동등성"을 적극 입증해야 하며, 추상적 경영 사정 주장만으로는 부족한 사례가 다수 있습니다.</li>\n<li><strong>잔여 사업 지속 정황</strong> — 합병 후 잔여 사업이 유지되거나 자회사·관계사로 흡수됐다면 폐업 동등성이 부정될 정황입니다.</li>\n<li><strong>전직·재배치 미검토</strong> — 잔여 사업 인력 흡수 가능성을 검토하지 않은 채 일방 해고했다면 해고 회피 노력 부재로 평가될 여지가 있습니다.</li>\n<li><strong>한국법인 + 외국영업소 일체성</strong> — 사업 일체성이 인정되면 잔여 외국영업소·자회사 인력 흡수 가능성도 검토 대상이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합병 직후 짧은 기간 내 다수 인원 해고 후 잔여 사업이 유지되는 패턴은 "위장 폐업" 정황으로 평가되어 부당해고 인정에 유리한 자료가 되는 사례가 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 일부 폐지 통상해고와 폐업 동등성 입증책임',
        summary:
          '대법원 2023두57876 사건(대법원, 2024.10.25 선고)에서 법원은 동일한 외국기업을 지배기업으로 하는 한국법인과 외국법인의 한국영업소가 근로기준법상 하나의 사업 또는 사업장인지 여부가 문제된 사안에서, 사업을 여러 부문으로 나누어 경영하던 사용자가 일부 사업 폐지를 이유로 그 사업 부문 근로자를 해고한 경우 폐업으로 인한 통상해고로서 예외적으로 정당하기 위해서는 일부 사업의 폐지·축소가 사업 전체의 폐지와 같다고 볼 만한 특별한 사정이 인정되어야 하며, 그 입증책임은 사용자에게 있다고 판시했습니다.',
        takeaway: '합병 후 사업부문 폐지 통상해고는 폐업 동등성을 사용자가 적극 입증해야 하므로, 회사가 추상적 경영 사정만 든다면 구체적 폐업 동등성 입증을 요구해 다툴 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '합병으로 사업부문이 통째로 외국 본사로 이관됐는데도 폐업으로 봐주나요?',
        answer:
          '<strong>이관은 폐업이 아니라 영업양도 가능성으로 평가될 여지가 있습니다.</strong> 영업양도라면 근로관계 포괄승계 법리(근로기준법 제24조의2 비교)가 적용돼 해고 자체가 다툼 대상이 됩니다.',
      },
      {
        question: '회사가 50일 전 통보 없이 갑자기 해고 통보했어요. 그것만으로 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 정리해고 50일 전 근로자대표 협의 의무 위반은 그 자체로 절차 위법이며 부당해고 사유가 됩니다.',
      },
      {
        question: '같은 부서에서 누구는 남고 누구는 해고됐는데 선정 기준이 객관적이라고 회사가 주장합니다',
        answer:
          '<strong>선정 기준의 객관성·공정성 입증책임도 사용자에게 있습니다.</strong> 평가 항목·점수·동료 비교 자료를 요구해 합리성을 다툴 수 있습니다.',
      },
      {
        question: '합병된 본사가 한국에 신규 채용 공고를 냈어요. 의미가 있나요?',
        answer:
          '<strong>강력한 정황 자료입니다.</strong> 사업 폐지를 명분으로 해고하면서 같은 시기 본사·자회사가 한국 신규 채용을 한 패턴은 폐업 동등성 부정 + 해고 회피 노력 부재 정황입니다.',
      },
      {
        question: '인용되면 합병 후 본사 한국지사로 복직되나요?',
        answer:
          '<strong>사업 일체성·승계 관계 인정 시 본사 한국지사로의 복직이 검토되는 사례가 있습니다.</strong> 다만 사정에 따라 합의 단계에서 금전보상으로 조정되는 경우가 많습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '회사 합병 후 직위 상실 해고', href: '/guide/dismissal/dismissal-company-merger-position-elimination' },
      { label: '구조조정 정리해고 부당기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '폐업·사업장 폐쇄 정리해고', href: '/guide/dismissal/dismissal-workplace-closure-layoff' },
      { label: '인수합병 기간제 권리 승계', href: '/guide/dismissal/dismissal-acquisition-fixed-term-rights' },
      { label: '구조조정 우선 재고용권', href: '/guide/dismissal/dismissal-restructuring-recall-priority-rights' },
    ],
  },

  // ─── 3. dismissal / dismissal-employee-monitoring-data-violation ───
  {
    domain: 'dismissal',
    slug: 'dismissal-employee-monitoring-data-violation',
    keyword: '재택근무 디지털 모니터링 위반 해고',
    questionKeyword: '재택근무 중 슬랙·이메일·키스트로크 모니터링 위반으로 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '디지털 모니터링 위반 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '재택근무 디지털 감시 위반 해고 다투는 4가지 포인트 | 로앤가이드',
      description:
        '재택근무 슬랙·이메일·키스트로크 모니터링 위반으로 해고됐다면 동의 범위·개인정보보호법 비례성 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"재택근무 중 회사가 \'키스트로크가 부족하다\', \'개인 메신저를 자주 썼다\'는 슬랙·이메일·키보드 활동 데이터를 근거로 \'근무 태만\' 사유로 해고했어요. 본인이 동의하지도 않았던 모니터링까지 자료로 쓰는 게 정당한지 막막합니다." 디지털 모니터링은 개인정보보호법 제15조·제22조의 동의 범위·목적 적합성 + 근로기준법 제23조 제1항 정당한 이유 + 근로감독으로서의 비례성 평가가 결합된 영역입니다. 동의 범위를 초과한 데이터 수집이거나 모니터링 목적과 다른 용도로 사용된 자료라면 해고 사유 자체가 흔들릴 여지가 있습니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 디지털 모니터링 위반 해고에서 다툴 수 있는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 개인정보보호법·근로기준법 + 비례성 법리를 종합하면 아래 4가지 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동의 범위 초과</strong> — 근로계약·서약서에서 동의한 모니터링 항목·범위(예: 업무 메일만)를 초과해 사적 메신저·키스트로크·개인 사이트 접속까지 수집했다면 동의 범위 초과 정황입니다.</li>\n<li><strong>② 목적 적합성 부재</strong> — 개인정보보호법 제15조·제18조는 수집 목적에 부합하는 사용을 요구합니다. "보안 모니터링" 명목 수집을 "근태 평가·해고 사유"로 사용한 경우 목적 외 사용 정황입니다.</li>\n<li><strong>③ 비례성 위반</strong> — 키스트로크·마우스 움직임 같은 미세 수준 감시가 업무 성과 평가의 합리적 수단인지, 덜 침해적 대안(목표·성과 평가)이 있었는지 비례성 평가가 필요합니다.</li>\n<li><strong>④ 해고 사유의 구체성·중대성</strong> — 모니터링 데이터 일부가 위반이라도 곧바로 해고로 가기에 비위가 충분한지(견책·감봉 등 중간 단계 부재) 비례성 평가가 함께 적용됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ①번 동의 범위 초과와 ②번 목적 외 사용이 결합되면 모니터링 자료의 증거능력 자체가 흔들리는 사례가 있고, 그러면 해고 사유의 객관적 입증이 무너집니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 + 개인정보보호위원회 병행 트랙으로 진행하는 것이 효과적인 사례가 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 모니터링 동의서·정책 보존</strong> (즉시) — 본인이 서명한 모니터링 동의서, 회사 IT 보안 정책, 재택근무 규정 사본 확보. 동의 항목·범위·목적 점검.</li>\n<li><strong>2단계 — 회사가 든 모니터링 자료 확보</strong> — 해고 사유에 인용된 데이터(키스트로크 통계, 메신저 사용 기록, 사이트 접속 로그) 사본 요청. 회사가 거부하면 노동위·민사 단계에서 문서제출명령 검토.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 개인정보보호위원회 신고 병행</strong> — 동의 범위 초과·목적 외 사용은 개인정보보호위원회(privacy.go.kr·국번없이 182) 신고 트랙도 함께 검토 가능. 위원회 처분이 노동위 자료로 활용될 수 있습니다.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">디지털 모니터링 위반 해고 사안에서 동의 범위·목적 외 사용 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의 범위 점검 + 데이터 출처·목적 추적 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>모니터링 동의서·서약서</strong> — 동의 항목·수집 범위·보유 기간·목적 명시 여부.</li>\n<li><strong>회사 IT 보안 정책·재택근무 규정</strong> — 모니터링 도구·범위 안내 자료.</li>\n<li><strong>해고통보서·사유서·인용 데이터</strong> — 어떤 데이터를 어떤 해석으로 해고 사유에 사용했는지.</li>\n<li><strong>모니터링 도구 안내 화면·설치 자료</strong> — 회사가 도구·범위를 사전에 어떻게 안내했는지.</li>\n<li><strong>업무 성과·KPI 자료</strong> — 키스트로크 외 객관적 성과 자료(완료 업무·고객 응답·결과물).</li>\n<li><strong>같은 모니터링 받은 동료 자료</strong> — 같은 도구로 측정된 동료 처분과 비교.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 모니터링 데이터를 PC 회수 후 일방 정리할 가능성이 있어, 해고 통보 직전·직후 본인 PC 화면·설치 도구·동의 안내 캡처를 미리 확보해두는 것이 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "보안·근태 관리상 합리적 모니터링"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 합리성 주장은 동의·목적·비례성·해고 비례성 네 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>동의의 명확성·임의성</strong> — 동의서 문언이 추상적이거나 거부 시 불이익 정황이 있다면 동의 자체의 임의성이 다툼 대상입니다.</li>\n<li><strong>목적 외 사용 금지</strong> — 보안 명목 수집을 인사·평가·해고에 사용했다면 목적 외 사용으로 별도 위법성 평가가 가능합니다.</li>\n<li><strong>덜 침해적 대안</strong> — 목표·성과 평가, 자기보고 등 덜 침해적인 평가 수단이 있었는지가 비례성 평가 핵심입니다.</li>\n<li><strong>해고 비례성</strong> — 모니터링 데이터 위반이 일부라도 견책·감봉 등 중간 단계 부재 채 해고로 간 경우 비례성 위반 정황이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 모니터링 외 별도 사유(매출·실적 등)를 추가할 가능성이 있어, 해고 통보 후 사유가 추가·변경된 정황은 시간순으로 별도 메모해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채용 시 객관적 자격 자료의 정확성과 신뢰관계',
        summary:
          '대구고등법원 2021나21372 사건(대구고등법원, 2021.09.15 선고)에서 법원은 채용 단계 신원·자격 자료의 정확성이 신뢰관계 형성의 핵심 요소이며, 직무가 법령상 결격 심사를 요구하는 영역인지 여부에 따라 신뢰관계 평가가 달라진다고 판시한 취지를 보였습니다. 디지털 모니터링 영역에서도 동의·목적·비례성 평가가 결합돼 신뢰관계 파탄 인정 여부가 좌우될 수 있다는 시사를 줍니다.',
        takeaway: '디지털 감시 데이터에 의존한 해고는 동의 범위·목적·비례성 점검을 통해 신뢰관계 파탄 주장을 다툴 수 있어, 모니터링 정책·동의 자료 보존이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '입사 시 일괄 동의서에 서명했는데 그래도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 동의 항목·범위가 추상적이거나 거부 시 불이익 정황이 있으면 임의성 부재 정황으로 평가될 여지가 있습니다.',
      },
      {
        question: '키스트로크·마우스 움직임도 개인정보로 보나요?',
        answer:
          '<strong>특정 개인을 식별·추적할 수 있는 행동 패턴 자료라면 개인정보로 평가될 여지가 있습니다.</strong> 수집·이용 시 별도 동의·목적 명시가 필요한 사례가 있습니다.',
      },
      {
        question: '회사가 모니터링 자료를 보여주지 않습니다. 어떻게 하나요?',
        answer:
          '<strong>노동위·민사 단계에서 문서제출명령 검토가 가능합니다.</strong> 자료 거부 정황 자체가 모니터링 적정성에 의문을 제기하는 정황 자료가 됩니다.',
      },
      {
        question: '개인정보보호위원회 신고와 노동위 구제신청을 동시에 해도 되나요?',
        answer:
          '<strong>두 트랙은 별개라 동시 진행이 가능합니다.</strong> 위원회 처분 결과가 노동위에서 강력한 정황 자료로 활용되는 사례가 있습니다.',
      },
      {
        question: '재택근무 자체에 동의했으니 모든 모니터링도 동의한 것 아닌가요?',
        answer:
          '<strong>재택근무 동의 ≠ 디지털 감시 동의입니다.</strong> 모니터링 항목·범위는 별도 명시 동의가 필요한 사례가 있고, 일괄 추정 동의는 임의성 부재로 평가될 여지가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: 'CCTV 감시 과잉 해고 다툼', href: '/guide/dismissal/dismissal-cctv-surveillance-excessive-termination' },
      { label: '신원조회 강요 거부 해고 4가지', href: '/guide/dismissal/dismissal-prove-of-employment-disclose-coercion' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: 'PIP 평가 절차 하자 입증', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
    ],
  },

  // ─── 4. dismissal / dismissal-cohabit-unmarried-affair-pretext ───
  {
    domain: 'dismissal',
    slug: 'dismissal-cohabit-unmarried-affair-pretext',
    keyword: '사내 동거 미혼관계 명목 해고',
    questionKeyword: '사내 동거·미혼 관계가 알려진 뒤 "회사 명예훼손"으로 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '사내 동거 명목 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사내 동거·미혼관계 명목 해고 다투는 4가지 사생활 보호 | 로앤가이드',
      description:
        '사내 동거·미혼관계가 알려져 "회사 명예훼손"으로 해고됐다면 헌법상 사생활·평등권 보호와 비례성 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 회사 동료와 동거하는 사실이 알려진 뒤 회사가 \'사내 질서 문란\'·\'명예훼손\' 사유로 해고를 통보했어요. 결혼 여부와 무관하게 사생활인데 어떻게 해고 사유가 되는지 막막합니다." 사내 연인·동거·미혼관계는 원칙적으로 헌법 제17조 사생활의 비밀과 자유 + 헌법 제11조 평등권의 보호 영역입니다. 회사가 이를 명목으로 해고하려면 ① 업무상 구체적 지장, ② 회사 명예 훼손의 객관적 발생, ③ 사생활 침해 비례성 등 엄격한 입증을 부담합니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 사내 관계 명목 해고에서 다툴 수 있는 4가지 사생활 보호 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 헌법·근로기준법·법원 법리를 종합하면 아래 4가지 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사생활 보호 영역</strong> — 동거·연인 관계는 헌법 제17조 사생활의 비밀과 자유의 핵심 보호 영역으로, 원칙적으로 회사 인사권 평가 대상이 아닙니다.</li>\n<li><strong>② 업무상 구체적 지장 입증</strong> — 회사가 해고를 정당화하려면 그 관계가 업무 수행에 구체적 지장을 줬다는 객관적 사실(직무상 이해상충·업무 누락·근태 문제 등)을 입증해야 합니다.</li>\n<li><strong>③ 회사 명예 훼손의 객관적 발생</strong> — "명예 훼손"이라는 추상적 평가가 아닌 외부 보도·고객 항의·매출 손실 등 객관적 손해 발생 사실이 있어야 사유로 평가될 여지가 있습니다.</li>\n<li><strong>④ 비례성 + 평등권</strong> — 같은 사내에서 다른 동료의 비슷한 관계는 묵인·인정하면서 본인에게만 적용한 잣대라면 평등권 위반·차별 정황으로 평가될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ②번 업무상 구체적 지장 입증 책임이 회사에 있다는 점이 핵심 안전장치입니다. 추상적 "사내 질서 문란" 주장만으로는 해고 정당성이 인정되기 어려운 사례가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 + 인권위 병행 트랙도 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통보서·사유서 보존</strong> (즉시) — 회사가 든 사유의 추상성·구체성, 본인 관계 인용 부분, 외부 손해 사실 인용 여부 점검.</li>\n<li><strong>2단계 — 사생활 보호 vs 업무 지장 자료 정리</strong> — 본인의 업무 성과·근태 자료 (지장 부재 입증), 동료의 비슷한 관계 처우 비교 (차별 정황 입증).</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 인권위 진정 병행 (선택)</strong> — 사내 차별이 결합된 경우 국가인권위원회(humanrights.go.kr·국번없이 1331) 진정 트랙도 함께 검토 가능. 위원회 권고가 노동위·민사에 자료로 활용됩니다.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 관계 명목 해고 사안에서 사생활 보호·차별 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사생활 영역 입증 + 회사 측 손해 부재 입증 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·사유서</strong> — 사유의 구체성·관계 인용·외부 손해 인용 여부.</li>\n<li><strong>본인 업무 성과·근태 기록</strong> — 관계가 업무에 지장을 주지 않았다는 객관적 자료.</li>\n<li><strong>동료 비교 자료</strong> — 같은 사내에서 비슷한 관계인 동료의 처우 (차별 입증).</li>\n<li><strong>취업규칙·인사규정</strong> — 사내 관계 금지 조항 존재 여부 점검.</li>\n<li><strong>회사가 든 외부 손해 입증 자료</strong> — 보도·고객 항의·매출 손실 등 객관적 자료 (회사 입증 부담 점검).</li>\n<li><strong>해고 면담·메신저 기록</strong> — 회사 측 발언과 본인의 항변 보존.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 본인의 사생활 정보를 사내에 공유한 정황이 있다면 명예훼손·개인정보 누설 별도 청구 영역도 검토할 여지가 있어, 누가 누구에게 사실을 공유했는지 시간순으로 메모해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "사내 질서·명예에 영향이 있었다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 사내 질서 주장은 객관적 손해 입증·차별 비교·비례성 평가로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>객관적 손해 입증 책임</strong> — 회사가 추상적 "질서 문란"이 아닌 매출 손실·고객 항의·외부 보도 등 객관적 손해를 입증해야 합니다.</li>\n<li><strong>차별·평등 점검</strong> — 같은 사내에서 다른 동료의 비슷한 관계는 묵인됐는데 본인에게만 적용된 잣대라면 헌법 제11조 평등권 위반 정황입니다.</li>\n<li><strong>중간 단계 부재 비례성</strong> — 견책·면담·이동 등 중간 단계 없이 곧바로 해고로 간 경우 비례성 위반 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>관계의 합법성</strong> — 동거·미혼 관계는 사회적·법적으로 합법이며, 그 사실 자체로 신뢰 파탄 사유가 되기 어렵습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 직무상 이해상충(예: 직속 상하 관계)을 별도 사유로 추가할 가능성이 있어, 직속 관계 여부와 그것이 업무에 실제 영향을 줬는지 자료를 함께 정리해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인사권의 한계와 권리남용 평가 기준',
        summary:
          '대법원 93다51263 사건(대법원, 1995.05.09 선고)에서 법원은 인사권 행사가 원칙적으로 사용자의 권한이지만 근로기준법 제23조에 위반하거나 권리남용에 해당하는 등 특별한 사정이 있는 경우에는 허용되지 않으며, 정당성 판단은 업무상 필요성과 근로자 생활상 불이익의 비교형량 + 본인과의 협의 등 신의칙상 절차로 결정된다고 판시했습니다.',
        takeaway: '사내 관계를 명목으로 한 해고도 인사권 한계 법리에 따라 업무상 필요성·생활상 불이익·절차 비교형량으로 다툴 여지가 있어, 사생활 침해 비례성을 핵심 다툼 축으로 활용할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 "사내 연애 금지"가 있는 회사인데도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 사생활 영역에 대한 일률 금지 조항은 헌법 사생활 보호와의 균형에서 효력이 제한될 여지가 있고, 사안별 비례성 평가가 별도 적용됩니다.',
      },
      {
        question: '직속 상하 관계인데 그래도 사생활로 보나요?',
        answer:
          '<strong>직속 관계는 직무상 이해상충 평가가 추가로 적용됩니다.</strong> 다만 그것만으로 해고가 정당화되지 않고 부서 이동·역할 조정 등 덜 침해적 대안 검토가 우선입니다.',
      },
      {
        question: '회사가 외부에 알려져 명예가 훼손됐다고 주장합니다',
        answer:
          '<strong>외부 보도·고객 항의·매출 손실 등 객관적 손해 입증 책임은 회사에 있습니다.</strong> 추상적 "명예 훼손" 주장만으로는 사유로 평가되기 어려운 사례가 있습니다.',
      },
      {
        question: '같은 사내에 다른 커플도 있는데 우리만 해고됐어요',
        answer:
          '<strong>강력한 차별 정황 자료입니다.</strong> 동료의 비슷한 관계 처우와 비교 표를 정리해 헌법 평등권 + 근로기준법 제6조 차별 금지 다툼이 가능합니다.',
      },
      {
        question: '인용되면 같은 부서로 복직되나요? 보복이 두려워요',
        answer:
          '<strong>원직복직이 원칙이지만 사정상 부서 조정·금전보상명령으로 대체되는 사례가 있습니다.</strong> 노동위에 보복 우려 정황을 구체적으로 입증해 합의 단계에서 조정 가능합니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '사내 연애 위법 명목 해고', href: '/guide/dismissal/dismissal-office-romance-unlawful' },
      { label: '사내 연애 해고 구제신청', href: '/guide/dismissal/dismissal-office-romance-fired-relief' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
    ],
  },

  // ─── 5. dismissal / dismissal-fixed-term-postretirement-rehire-rejected ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fixed-term-postretirement-rehire-rejected',
    keyword: '정년 후 촉탁 재고용 거절 해고',
    questionKeyword: '정년 후 촉탁직 재고용을 기대했는데 회사가 합리적 이유 없이 거절했어요. 다툴 수 있나요?',
    ctaKeyword: '정년 후 재고용 거절 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '정년 후 촉탁 재고용 거절 다투는 4가지 기대권 입증 | 로앤가이드',
      description:
        '정년 도달 후 촉탁(기간제) 재고용을 기대했으나 합리적 이유 없이 거절됐다면 재고용 기대권·신뢰관계 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"정년이 됐는데 회사 관행상 촉탁직(기간제)으로 1~2년 더 일할 수 있을 줄 알았어요. 같은 부서 선배들도 다 그렇게 일했는데 저만 \'재고용 안 한다\'며 거절당했습니다. 부당해고로 다툴 수 있는지 막막합니다." 정년 도달 자체로 근로관계가 종료된 것이 원칙이지만, 사업장에 정년 후 재고용 관행이 확립되어 있거나 근로계약·취업규칙·단체협약에 재고용 규정이 있으면 근로자에게 재고용 기대권이 인정될 수 있고, 사용자의 합리적 이유 없는 재고용 거절은 무효로 평가될 수 있습니다(대법원 2018두62492 취지). 노동위 구제신청은 거절 통보일(또는 정년일) 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 재고용 기대권이 인정될 수 있는 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 대법원 법리(2018두62492 취지)를 종합하면 아래 4가지 사정이 입증되면 재고용 기대권이 인정될 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 명문 규정 존재</strong> — 근로계약·취업규칙·단체협약에 "정년 후 일정 요건 충족 시 기간제 재고용" 규정이 있는 경우. 가장 강력한 기대권 근거입니다.</li>\n<li><strong>② 재고용 관행 확립</strong> — 명문 규정이 없더라도 같은 직종·직무 분야에서 정년 도달자 중 재고용된 비율, 재고용 실시 경위·기간이 충분하면 신뢰관계가 형성됐다고 평가될 여지가 있습니다.</li>\n<li><strong>③ 거절 사유의 합리성 결여</strong> — 회사가 든 거절 사유가 추상적·차별적이거나 같은 시기 다른 정년 도달자에게는 적용되지 않은 잣대라면 합리성 결여 정황입니다.</li>\n<li><strong>④ 거절 책임 증명 부담</strong> — 기대권이 인정되면 거절의 합리적 이유 입증 책임은 사용자에게 있다는 것이 확립된 법리입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ②번 재고용 관행 확립 입증이 핵심입니다. 같은 부서·직무에서 최근 5~10년간 몇 명이 정년 후 재고용됐는지 자료로 정리하면 기대권 인정 가능성이 높아지는 사례가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재고용 규정·관행 자료 보존</strong> (즉시) — 근로계약서·취업규칙·단체협약 사본, 같은 부서 정년 도달자 재고용 명단·이력 자료, 회사 안내문 사본 확보.</li>\n<li><strong>2단계 — 거절 통보·사유 정리</strong> — 회사가 든 거절 사유의 구체성·합리성, 같은 시기 다른 정년 도달자 처우 비교.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (거절 통보일 또는 정년일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 재고용 기대권 형성 정황 + 거절의 합리적 이유 부재를 단계별로 입증.</li>\n<li><strong>5단계 — 판정·후속 조치</strong> — 인용 시 종전 근로계약이 갱신된 것과 동일하게 평가될 여지가 있고, 임금상당액 청구 + 추가 기간제 근로 자격 회복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정년 후 재고용 거절 사안에서 기대권 입증 자료와 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기대권 형성 입증 + 거절 합리성 부재 입증 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙·단체협약</strong> — 재고용 관련 조항·요건 명시 여부.</li>\n<li><strong>같은 부서 정년 도달자 재고용 이력</strong> — 최근 5~10년간 몇 명이 재고용됐는지, 재고용 비율 자료.</li>\n<li><strong>회사의 정년·재고용 안내문</strong> — 채용 시·근속 중 회사가 안내한 재고용 규정·관행 자료.</li>\n<li><strong>본인의 인사평가·근속 자료</strong> — 정년 도달 시점까지의 근무 평가, 징계 이력 부재 입증.</li>\n<li><strong>거절 통보서·사유서</strong> — 회사가 든 사유의 구체성·합리성·차별 정황 점검.</li>\n<li><strong>같은 시기 다른 정년 도달자 처우</strong> — 누구는 재고용·누구는 거절된 잣대 비교.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 인사·총무 부서에 재고용 명단 자료 요청을 서면으로 보내고 거부 정황까지 보존해두면 기대권 부재 주장에 대한 강력한 정황 자료가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "재고용은 회사 권한"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 권한 주장은 기대권 형성·거절 합리성·차별 비교로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>기대권 형성 입증</strong> — 명문 규정·관행·신뢰관계 형성 정황을 입증하면 회사 일방 권한 주장이 제한될 여지가 있습니다.</li>\n<li><strong>거절 합리적 이유 입증 책임</strong> — 기대권이 인정되면 거절의 합리적 이유 입증 책임은 사용자에게 있고, 추상적 사유는 부족한 사례가 다수 있습니다.</li>\n<li><strong>차별·평등 비교</strong> — 같은 시기 다른 정년 도달자 재고용·거절 잣대가 다르다면 평등권·차별 정황으로 평가될 수 있습니다.</li>\n<li><strong>인용 시 효과</strong> — 거절이 무효로 인정되면 종전 근로계약이 갱신된 것과 동일하게 평가될 여지가 있어, 임금상당액 + 기간제 근로 자격 회복 검토가 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 정년 직전에 "재고용 규정 폐지" 결의를 일방 시행할 가능성이 있어, 본인 정년 시점 기준 유효한 규정·관행 자료를 보존해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 후 기간제 재고용 기대권과 합리적 이유 없는 거절',
        summary:
          '대법원 2018두62492 사건(대법원, 2023.06.29 선고)에서 법원은 근로계약·취업규칙·단체협약 등에 정년 도달자가 일정 요건 충족 시 기간제로 재고용해야 한다는 규정이 있거나, 그러한 규정이 없더라도 재고용 실시 경위·기간, 같은 직종·직무 분야에서 정년 도달자 중 재고용된 비율, 거절된 근로자가 있는 경우 그 사유 등을 종합해 사업장에 그에 준하는 정도의 재고용 관행이 확립되어 있다고 인정되는 경우에는 근로자에게 정년 후 재고용 기대권이 인정되며, 사용자의 합리적 이유 없는 재고용 거절의 효력은 무효라고 판시했습니다.',
        takeaway: '정년 후 재고용은 회사 일방 권한이 아니라 명문 규정·관행으로 기대권이 형성되면 합리적 이유 없는 거절이 무효가 될 수 있어, 같은 부서 재고용 이력과 본인 평가 자료가 핵심 입증 자료입니다.',
      },
    ],
    faq: [
      {
        question: '명문 규정이 없어도 관행만으로 기대권이 인정되나요?',
        answer:
          '<strong>인정될 여지가 있습니다.</strong> 같은 직종·직무에서 재고용 비율이 높고 운영 기간이 충분하면 신뢰관계 형성으로 기대권이 인정된 사례가 있습니다.',
      },
      {
        question: '정년 후 1년이 지났는데 그래도 다툴 수 있나요?',
        answer:
          '<strong>노동위 구제신청 시한은 거절 통보일 또는 정년일 3개월 이내가 일반적입니다.</strong> 시한이 지나면 민사 무효확인·임금상당액 청구로 다투는 사례가 있고, 임금채권 시효 3년 안에서 검토 가능합니다.',
      },
      {
        question: '회사가 "체력 기준 미달"·"건강 문제"라고 거절 사유를 들었어요',
        answer:
          '<strong>구체적 의학 자료 + 직무 적합성 평가 자료 입증 책임은 회사에 있습니다.</strong> 추상적 건강 우려 주장만으로는 합리적 이유 인정이 어려운 사례가 있습니다.',
      },
      {
        question: '같은 부서 동료는 재고용됐는데 저만 거절됐어요',
        answer:
          '<strong>강력한 차별 정황 자료입니다.</strong> 동료의 평가·근속·재고용 사유와 본인 자료를 비교 표로 정리하면 거절의 합리성 부재 입증에 효과적입니다.',
      },
      {
        question: '인용되면 정년 시점부터의 임금이 모두 인정되나요?',
        answer:
          '<strong>기대권 인정 시 거절 시점부터 임금상당액 청구가 가능한 사례가 있습니다.</strong> 다만 사정에 따라 합의 단계에서 금액·기간이 조정되는 경우가 많습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '정년 후 재고용 거절 구제', href: '/guide/dismissal/dismissal-post-retirement-contract-renewal-refused' },
      { label: '정년 도달 강제 해고 다툼', href: '/guide/dismissal/dismissal-retirement-age-forced' },
      { label: '정년 임박 해고 청구', href: '/guide/dismissal/dismissal-near-retirement-age-fired-claim' },
      { label: '계약직 갱신 기대권 구제', href: '/guide/dismissal/dismissal-contract-renewal-expectation-relief' },
      { label: '계약직 비갱신 구제 절차', href: '/guide/dismissal/dismissal-fixed-term-non-renewal-remedy' },
    ],
  },
];
