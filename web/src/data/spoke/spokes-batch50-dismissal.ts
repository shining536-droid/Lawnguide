import { SpokePage } from '../spoke-pages';

// batch50 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 경고장을 누적해 받은 뒤 해고된 근로자가 경고장 자체의 효력·소명기회 부재·서면통보 미비·동종 사례 차별 등 경고 누적 절차의 하자를 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 PIP(성과개선프로그램) 후 본채용 거부·해고된 근로자가 평가표 비공개·기준 사후변경·동기 비교 누락 등 PIP 절차 자체의 하자 5가지로 다툴 수 있도록 돕는 페이지다.
// 3. 이 페이지는 정리해고로 퇴사한 근로자가 해고일로부터 3년 이내 동일 업무 신규 채용이 발생했을 때 근로기준법 제25조 우선재고용권을 행사하는 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 산재 요양 종결 후 회사가 복직을 거부한 근로자가 종결 후 30일 해고금지·합리적 직무재배치 의무·후유장해 평가 다툼으로 복직을 다툴 수 있도록 돕는 페이지다.
// 5. 이 페이지는 기간제 근로자가 갱신거절을 당했을 때 갱신기대권 인정 5요건과 합리적 이유 입증책임 전환 법리로 갱신거절=실질해고 다툼 절차를 정리하도록 돕는 페이지다.

export const spokesBatch50Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-warning-letter-cumulative-validity ───
  {
    domain: 'dismissal',
    slug: 'dismissal-warning-letter-cumulative-validity',
    keyword: '경고장 누적 해고 효력',
    questionKeyword: '경고장 3장 누적 후 해고됐어요. 경고장 자체의 효력을 다툴 수 있나요?',
    ctaKeyword: '경고 누적 해고 다툼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경고장 3회 누적 해고 다투는 5가지 하자 포인트 | 로앤가이드',
      description:
        '경고장 누적을 사유로 해고됐다면 경고 자체의 효력·소명기회 부재·서면통보 미비 등 5가지 하자 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 동안 사소한 사유로 경고장 3장을 받았는데, 마지막 경고 후 곧바로 해고 통보를 받았어요. 경고장 자체가 정당했는지 따져볼 수 있을지 막막합니다." 경고장 누적은 해고의 단순 산술 근거가 아니라, 각 경고가 적법한 사유·절차로 발령된 경우에만 누적 사유로 평가됩니다. 경고 자체에 사유 부존재·소명기회 부재·서면통보 미비·차별 적용 등 하자가 있으면 누적 자체가 무효가 될 여지가 있고, 부당해고 구제신청은 해고일로부터 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '경고 누적 해고에서 다툴 수 있는 5가지 하자 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조 제1항(정당한 이유)·제27조(서면통지)·취업규칙상 징계절차 규정을 종합하면 경고 누적도 아래 5가지 포인트로 효력을 다툴 수 있는 사례가 있습니다.</strong></p>\n<ul>\n<li><strong>① 경고 사유의 객관성 부재</strong> — 경고장 사유가 추상적이거나(예: "근무태도 불량") 동일 사안을 반복 경고로 표시한 경우 사유 부존재 다툼이 가능합니다.</li>\n<li><strong>② 소명기회 부재</strong> — 취업규칙·단체협약상 징계 시 본인 진술·소명 절차가 정해져 있는데도 거치지 않았다면 절차 하자입니다.</li>\n<li><strong>③ 서면통지 미비</strong> — 구두 경고만 있었거나, 경고서에 사유·시기가 구체적으로 기재되지 않았다면 누적 산정에서 제외 다툼이 가능합니다.</li>\n<li><strong>④ 동종 사례 차별 적용</strong> — 같은 사안에 다른 직원은 경고가 없거나 더 가벼운 처분을 받은 경우 형평 위반 정황이 됩니다.</li>\n<li><strong>⑤ 비례성 위반</strong> — 경고 누적이 곧바로 해고로 이어진 경우 견책·감봉 등 중간 단계를 건너뛴 점이 비례성 위반으로 평가될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5개 중 ①·②·③ 세 항목이 결합되면 경고 누적 자체가 무효로 평가될 여지가 큽니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제신청 6단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구제신청서 제출</strong> (해고일로부터 3개월 이내) — 사업장 소재지 관할 지방노동위원회에 구제신청서 + 입증자료 각 2부 제출 (우편·방문·온라인 가능).</li>\n<li><strong>2단계 — 신청이유서·답변서 교환</strong> (신청 후 약 2주 내) — 근로자: 경고장 사본·소명기회 부재 입증·동종 사례 비교 자료. 사용자: 답변서 + 증거.</li>\n<li><strong>3단계 — 조사 단계</strong> (통상 1~2개월) — 조사관이 양측 진술·자료 검토. 화해 권고 가능.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일로부터 60일 이내) — 공익위원 3 + 근로자위원 1 + 사용자위원 1 = 5명 합의체. 양측 출석·증인심문.</li>\n<li><strong>5단계 — 판정·명령</strong> (심문 후 30일 내 송달) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치).</li>\n<li><strong>6단계 — 재심·행정소송</strong> (재심 10일·행정소송 15일 이내) — 불복 시 중앙노동위·행정법원 단계 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경고장 누적 사안에서 어떤 하자 포인트가 본인 사정에 맞는지 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">경고 누적 다툼은 각 경고의 적법성을 개별 점검해야 하므로 자료가 누적 경고 수만큼 필요합니다.</strong></p>\n<ul>\n<li><strong>경고장 사본 (전부)</strong> — 누적된 경고 1~N장 모두. 사유·시기·서명 확인.</li>\n<li><strong>해고통보서·인사위원회 의결서</strong> — 최종 해고 사유와 누적 경고 인용 여부.</li>\n<li><strong>취업규칙·단체협약</strong> — 징계절차·소명기회·견책·감봉 등 단계별 처분 규정.</li>\n<li><strong>소명서·진술서·이메일</strong> — 경고 발령 전후 본인 입장을 표명한 자료.</li>\n<li><strong>동종 사례 비교 자료</strong> — 같은 사안에 다른 직원이 받은 처분 (경고 없음·다른 처분).</li>\n<li><strong>근태기록·인사평가</strong> — 경고 사유의 사실관계 다툼용.</li>\n<li><strong>대화 녹음·문자</strong> — 경고 발령 시 상사·인사팀 대화, 사유 모순 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경고장에 서명한 사실 자체로는 경고 효력을 인정한 것이 아니며, 즉시 이의 제기 메일·녹음 기록만 남아 있어도 다툼 여지가 살아있습니다.</blockquote>',
      },
      {
        title: '회사가 "경고 3회면 해고가 정당하다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">취업규칙에 "경고 3회 시 해고" 규정이 있어도 무조건 해고가 정당한 것은 아닙니다.</strong></p>\n<ul>\n<li><strong>각 경고의 적법성 별도 심사</strong> — 한 장이라도 사유 부존재·소명기회 부재로 무효가 인정되면 누적 산정이 깨질 수 있습니다.</li>\n<li><strong>비례성 원칙</strong> — 경미한 사유의 경고 누적만으로 해고는 사회통념상 상당성이 인정되기 어려운 사례가 있습니다.</li>\n<li><strong>오래된 경고 활용 제한</strong> — 수년 전 경고를 새 사안에 인용해 해고하는 경우 시효·누적 사용의 합리성 다툼이 가능합니다.</li>\n<li><strong>동기 비교 차별</strong> — 같은 사안에 다른 직원은 경고도 없었다면 차별 정황으로 정당성이 흔들립니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회의록·면담 형식으로만 경고를 한 경우에도 사유·시기 기재가 구체적이면 서면통지로 인정될 여지가 있어 형식만으로 무효를 단정하지 않는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 회의록 형태 경고·서면통지 요건과 해고 정당성',
        summary:
          '대법원 2021두36103 사건(대법원, 2021.07.29 선고)에서 법원은 근로기준법 제27조의 입법 목적은 사용자가 해고에 신중을 기하고 해고 사유·시기를 명확히 해 추후 분쟁이 적정하게 해결되도록 하려는 데 있으며, 해고통지서 등 명칭과 무관하게 근로자 처지에서 해고사유를 구체적으로 알 수 있는 서면이면 충분하다고 판시했습니다. 회의록에 경고와 해고 사유·시기가 기재되고 본인 서명·사본 교부가 있었던 사안에서 서면통지 요건을 충족했다고 본 사례입니다.',
        takeaway: '경고·해고 통지의 형식보다 사유·시기의 구체성이 핵심이므로, 형식적 결함만 다투지 말고 사유 부존재·소명기회 부재 등 실질적 하자도 함께 점검할 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '경고장에 서명했는데 효력 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 서명은 경고를 받았다는 사실 확인일 뿐 사유의 적법성을 인정한 것이 아니어서, 사유 부존재·소명기회 부재 등 별도 하자로 다툴 여지가 있습니다.',
      },
      {
        question: '5년 전 경고를 누적해 해고하는 것도 정당한가요?',
        answer:
          '<strong>오래된 경고의 활용 합리성이 핵심 다툼 포인트가 됩니다.</strong> 시간이 흐른 경고는 사회통념상 누적 사용에 한계가 있어 비례성 위반으로 평가될 여지가 있습니다.',
      },
      {
        question: '구두 경고도 누적 해고 사유에 포함되나요?',
        answer:
          '<strong>구두 경고는 서면통지 요건을 충족하기 어려워 누적 산정에서 제외 다툼이 가능합니다.</strong> 서면 기록·이메일·면담 회의록 등 객관 자료가 없으면 사유로 인정받기 어려운 사례가 있습니다.',
      },
      {
        question: '경고 1장만 무효라도 해고가 무효가 되나요?',
        answer:
          '<strong>한 장 무효만으로 곧바로 해고가 무효가 되는 것은 아닙니다.</strong> 다만 누적 사유 가운데 핵심 비중을 차지한 경고가 무효라면 비례성 평가에 영향을 주어 해고 정당성이 흔들리는 사례가 있습니다.',
      },
      {
        question: '경고 후 곧바로 해고하지 않고 견책·감봉을 거치지 않으면 문제인가요?',
        answer:
          '<strong>취업규칙상 단계가 정해져 있으면 비례성 원칙 위반 정황으로 평가됩니다.</strong> 견책·감봉을 건너뛰고 곧바로 해고로 간 경우 사회통념상 상당성이 부족하다고 본 판단례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '경고 없이 즉시 해고 무효', href: '/guide/dismissal/dismissal-no-warning-immediate-fire' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '징계 양정 과중 비례성 위반', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
      { label: '저성과 PIP 해고 방어 전략', href: '/guide/dismissal/dismissal-pip-low-performance-defense' },
    ],
  },

  // ─── 2. dismissal / dismissal-pip-evaluation-process-flaw ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pip-evaluation-process-flaw',
    keyword: 'PIP 평가 절차 하자',
    questionKeyword: 'PIP 후 해고됐는데 평가 절차에 하자가 있어요. 어떻게 입증하나요?',
    ctaKeyword: 'PIP 절차 하자 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'PIP 해고 절차 하자 입증 5가지 핵심 증거 | 로앤가이드',
      description:
        'PIP 후 해고됐다면 평가표 비공개·기준 사후변경·동기 비교 누락 등 5가지 절차 하자 증거로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 PIP 끝에 평가 점수 미달이라는 이유로 해고됐어요. 그런데 평가표를 한 번도 본 적이 없고, 같은 부서 동기들 결과와 비교도 안 해줬습니다." PIP(Performance Improvement Plan)에 의한 해고는 평가 자체가 공정하고 객관적인 기준에 따라 이루어졌는지가 정당성의 핵심이며, 평가표 비공개·기준 사후변경·개선 기회 부재 등 절차 하자가 결합되면 PIP가 사실상 해고예고형 운영이었다는 평가로 이어질 수 있습니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. PIP 절차 하자를 입증할 5가지 핵심 증거',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2~3개가 결합되면 PIP 절차 자체의 공정성·객관성이 부정될 여지가 큽니다.</strong></p>\n<ul>\n<li><strong>① 평가표·평가기준 비공개</strong> — PIP 시작 시점에 평가 항목·통과 기준이 안내되지 않았다면 사전 고지 부재 정황입니다.</li>\n<li><strong>② 평가기준 사후 변경</strong> — PIP 진행 중 또는 종료 직전 평가기준이 추가·강화된 정황 (메일·사내공지 비교).</li>\n<li><strong>③ 동기 비교 누락</strong> — 같은 직무 동료들의 평가 결과와 비교 없이 대상자만 단독 평가된 정황.</li>\n<li><strong>④ 개선 기회·교육 부재</strong> — PIP 명목이지만 실제로 교육·코칭·전환배치 검토 없이 평가만 진행된 정황.</li>\n<li><strong>⑤ 처음부터 해고 기획 정황</strong> — PIP 시작 전 인사팀 메일·회의록에서 "정리 대상"으로 분류된 자료, 같은 시기 다른 동료 다수가 PIP 후 해고된 패턴.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5개 중 ②번 평가기준 사후변경과 ④번 개선기회 부재가 함께 입증되면 PIP가 사실상 해고예고형 운영이었다는 평가로 이어지는 사례가 있습니다.</blockquote>',
      },
      {
        title: 'Q. PIP 절차 하자 다툼은 어떤 흐름으로 진행되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — PIP 자료 보존</strong> (즉시) — PIP 안내 문서·평가표·중간 피드백·최종 평가 통보서 모두 사본 확보.</li>\n<li><strong>2단계 — 동기 비교 자료 수집</strong> — 같은 직무 동료의 평가·인사평가·승급 이력. 비공식적으로라도 패턴 정리.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 신청서 + 증거 각 2부 제출.</li>\n<li><strong>4단계 — 평가표 제출 요구</strong> — 노동위 절차 중 회사에 평가표·평가자 평정 일관성·중간 피드백 자료 제출 요구.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PIP 절차 하자 입증 포인트와 평가 자료 정리 방법을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. PIP 다툼에서 어떤 자료를 준비하면 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가의 공정성·객관성을 다루는 사안이라 평가 절차 전체를 재구성할 수 있는 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>PIP 안내 문서·동의서</strong> — 시작 시점, 기간, 평가항목, 통과 기준 명시 여부.</li>\n<li><strong>중간 피드백·면담 기록</strong> — 평가자가 진행 중 어떤 피드백을 줬는지, 개선 가능성을 안내했는지.</li>\n<li><strong>최종 평가 통보서·평가표</strong> — 항목별 점수, 평가자 코멘트, 평가 일관성.</li>\n<li><strong>동기·동료 평가 자료</strong> — 같은 시기 평가받은 동료들의 결과 (간접 자료라도 가능).</li>\n<li><strong>인사팀·상사 메일·메신저</strong> — PIP 시작 전 "대상자 선정" 정황, 평가 기획 자료.</li>\n<li><strong>업무 결과물</strong> — 본인이 산출한 결과·성과 자료 (평가가 부당함을 입증하는 객관 증거).</li>\n<li><strong>교육·전환배치 거부 기록</strong> — 회사가 개선 기회를 부여하지 않았다는 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 받은 PIP 메일 전체를 시간순으로 정리하면 평가기준 사후변경·중간 피드백 부재 정황을 한눈에 확인할 수 있어 노동위 심문에 유리합니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "객관 평가에 따른 해고"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 객관 평가 주장은 평가 절차의 사전 고지·일관성·동기 비교 등 여러 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>사회통념상 고용관계 계속 곤란 정도 여부</strong> — 단순한 상대적 저조가 아니라 일반적으로 기대되는 최소한에 미치지 못하고 개선 가능성이 없는 정도여야 한다는 것이 법원 입장입니다.</li>\n<li><strong>평가 기준의 사전 고지·일관성</strong> — 평가표가 사후 작성됐거나 항목이 사후 추가됐다면 객관성 결격으로 평가될 여지가 있습니다.</li>\n<li><strong>동기 비교 평정</strong> — 같은 업무를 한 동기들과 비교해 큰 차이가 입증되지 않는다면 차별적 평가 정황입니다.</li>\n<li><strong>개선 기회·전환배치 검토</strong> — 회사가 교육·코칭·전환배치 등 개선 기회를 충분히 부여했는지가 정당성 핵심 요소입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: PIP 동의서에 서명했다고 하더라도 평가 절차 자체가 공정성·객관성을 갖추지 못했다면 그 결과로 한 해고는 정당한 이유로 인정되지 않을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무성적·근무능력 불량 해고의 정당성 요건',
        summary:
          '대법원 2018다253680 사건(대법원, 2021.02.25 선고)에서 법원은 취업규칙상 "근무성적 또는 능력이 현저하게 불량하여 직무를 수행할 수 없다"는 사유로 해고하려면 평가가 공정하고 객관적인 기준에 따라 이루어져야 하고, 근무성적이나 능력이 다른 근로자에 비해 상대적으로 낮은 정도를 넘어 일반적으로 기대되는 최소한에도 미치지 못하며 향후 개선 가능성이 없는 등 사회통념상 고용관계를 계속할 수 없을 정도여야 한다고 판시했습니다. 평가의 공정성, 부진의 정도·기간, 개선 기회 부여 여부 등을 종합 고려하라는 취지입니다.',
        takeaway: 'PIP 결과만으로 곧바로 해고가 정당해지는 것은 아니며, 평가 공정성·개선 기회·사회통념상 계속 곤란성까지 함께 점검해야 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: 'PIP 동의서에 서명했는데 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> PIP 참여 동의는 평가 절차에 응하겠다는 의미일 뿐 평가 결과에 따른 해고에 동의한 것이 아니어서, 절차 하자가 있다면 별도로 다툴 여지가 있습니다.',
      },
      {
        question: '평가표를 받지 못했는데 어떻게 자료를 확보하나요?',
        answer:
          '<strong>노동위 구제신청 시 회사 측에 평가표 제출을 요구할 수 있습니다.</strong> 회사가 사후 작성한 정황이 보이면 오히려 객관성 결격 자료로 활용 가능합니다.',
      },
      {
        question: 'PIP에서 점수가 낮게 나온 건 사실인데도 다툴 수 있나요?',
        answer:
          '<strong>점수 자체보다 평가 절차의 공정성과 사회통념상 계속 곤란 정도가 핵심입니다.</strong> 점수가 낮아도 개선 기회가 부여되지 않았거나 동기 평가와 큰 차이가 입증되지 않으면 다툴 여지가 있습니다.',
      },
      {
        question: '인사부서가 처음부터 정리 대상이라고 분류한 정황이 있어요. 어떤 의미가 있나요?',
        answer:
          '<strong>PIP가 사실상 해고예고형 운영이었다는 강력한 정황입니다.</strong> 메일·메신저·회의록 등 시간순 자료로 입증되면 PIP 자체의 공정성을 다투는 핵심 증거가 됩니다.',
      },
      {
        question: '인용되면 다시 PIP를 받는 건 아닌가요?',
        answer:
          '<strong>인용 시 원직복직과 함께 임금상당액이 지급되며, 회사가 다시 PIP를 시도하면 별도로 다툴 수 있습니다.</strong> 동일한 절차 하자가 재발되면 다시 부당해고 구제신청이 가능합니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '저성과 PIP 해고 방어 전략', href: '/guide/dismissal/dismissal-pip-low-performance-defense' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '징계 양정 과중 비례성 위반', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '경고 없이 즉시 해고 무효', href: '/guide/dismissal/dismissal-no-warning-immediate-fire' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
    ],
  },

  // ─── 3. dismissal / dismissal-restructuring-recall-priority-rights ───
  {
    domain: 'dismissal',
    slug: 'dismissal-restructuring-recall-priority-rights',
    keyword: '정리해고 우선재고용권',
    questionKeyword: '정리해고 후 같은 자리에 신규 채용을 봤어요. 우선재고용권을 행사할 수 있나요?',
    ctaKeyword: '우선재고용 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정리해고 우선재고용권 3년 행사 4단계 절차 | 로앤가이드',
      description:
        '정리해고 후 3년 이내 동일 업무 채용이 있다면 근로기준법 제25조 우선재고용 의무 위반을 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"작년 경영상 이유로 정리해고됐는데, 최근 회사 채용공고를 보니 제가 했던 직무 그대로 신입을 뽑고 있어요. 같은 자리인데 우선재고용을 받을 수는 없는 건지 답답합니다." 근로기준법 제25조는 사용자가 정리해고 후 3년 이내에 같은 업무에 근로자를 채용하려는 경우 정리해고된 근로자가 원하면 우선적으로 고용해야 한다고 정하고 있어, 우선재고용권 행사·고지의무 위반 시 해고무효확인·손해배상 등 다툴 트랙이 있습니다. 신규 채용 인지일로부터 신속한 의사 표명이 핵심입니다.</p>',
    sections: [
      {
        title: '우선재고용권 행사에서 확인할 4가지 핵심 요건',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제25조 제1항(우선재고용 의무)·제2항(고지의무) 적용 여부는 아래 4가지 요건으로 정리됩니다.</strong></p>\n<ul>\n<li><strong>① 정리해고였는지 확인</strong> — 통상 해고가 아니라 근로기준법 제24조 경영상 이유에 의한 해고여야 우선재고용권이 발생합니다.</li>\n<li><strong>② 3년 이내 신규 채용</strong> — 해고일로부터 3년 이내 회사가 같은 업무에 근로자를 채용했는지가 핵심 기간 요건입니다.</li>\n<li><strong>③ 같은 업무 동일성</strong> — 직무 명칭만이 아니라 실제 수행 업무·필요 자격·근무 장소가 동일한지 종합 평가합니다.</li>\n<li><strong>④ 본인의 재고용 의사 표명</strong> — 우선재고용을 원한다는 의사 표시가 있어야 권리 발생. 회사 측 고지의무 불이행이라도 다툼 여지는 살아있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4개 요건이 충족되면 회사의 신규 채용은 우선재고용 의무 위반으로 평가될 여지가 있고, 해고무효확인·손해배상 청구가 검토 가능한 상황이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 우선재고용 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법·법원 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신규 채용 정황 확인</strong> (즉시) — 회사 채용공고, 동료 진술, 채용 사이트, 사업장 등기부 등으로 같은 업무 채용 사실을 입증.</li>\n<li><strong>2단계 — 내용증명으로 우선재고용 의사 표시</strong> (인지 후 신속히) — 회사에 정리해고 사실·재고용 의사·근거 조항(제25조)을 명시한 내용증명 발송.</li>\n<li><strong>3단계 — 회사 회신 검토</strong> (2주~1개월) — 회신 부재 또는 거절 시 거부 사유 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 또는 민사 소송</strong> (해고일 3개월 이내라면 노동위, 도과 시 민사) — 사업장 소재지 관할 지방노동위 또는 회사 주소지 지방법원.</li>\n<li><strong>5단계 — 손해배상 청구</strong> — 우선재고용 의무 위반에 따른 일실임금 + 위자료 검토. 임금채권 시효 3년 내 추가 청구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">우선재고용 의사 표시·내용증명 작성·청구 트랙 선택을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">우선재고용권 다툼은 정리해고 사실 + 같은 업무 신규 채용 사실 두 가지를 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>정리해고 통보서·해고 사유서</strong> — 경영상 이유에 의한 해고였음을 입증.</li>\n<li><strong>해고 당시 근로계약서·취업규칙</strong> — 직무 범위·자격 요건 확인.</li>\n<li><strong>해고 시점 인사위·노조 협의 기록</strong> — 정리해고 4요건 충족 자료 (긴박한 경영상 필요·해고 회피 노력·합리적 선정·성실 협의).</li>\n<li><strong>회사 채용공고·채용 사이트 캡처</strong> — 같은 업무 신규 채용 사실 입증.</li>\n<li><strong>현직 동료 진술서</strong> — 신규 채용된 직원이 같은 업무를 수행하고 있다는 정황.</li>\n<li><strong>본인이 보낸 내용증명·회사 회신</strong> — 우선재고용 의사 표시와 회사 측 입장.</li>\n<li><strong>최근 급여명세서·예상 임금</strong> — 손해배상 산정용 일실임금 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 채용공고를 사이트에서 내렸더라도 검색엔진 캐시·헤드헌터 메일·동료 제보 등으로 시점·직무 동일성을 입증할 여지가 있습니다.</blockquote>',
      },
      {
        title: '회사가 "직무가 다르다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">직무 동일성은 형식적 명칭이 아니라 실질 업무·자격·장소를 종합해 평가됩니다.</strong></p>\n<ul>\n<li><strong>실제 업무 수행 내용 비교</strong> — 직책명이 달라도 본인이 수행하던 업무를 그대로 하고 있다면 동일 업무로 평가될 수 있습니다.</li>\n<li><strong>요구 자격·경력 비교</strong> — 채용공고상 자격 요건이 본인 자격과 일치한다면 직무 동일성 인정 정황입니다.</li>\n<li><strong>근무 장소·조직 단위 비교</strong> — 같은 부서·같은 사무실에서 같은 업무를 한다면 형식적 직책 변경의 의미가 약합니다.</li>\n<li><strong>일부 업무만 동일해도 검토 가치</strong> — 신규 채용 직무가 본인 업무의 핵심 부분을 포함하면 우선재고용권 다툼 여지가 있는 사례가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 우선재고용권은 본인이 의사 표시를 해야 발생하는 권리이므로 신규 채용 사실을 인지하면 신속하게 내용증명으로 의사를 명확히 하는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고자 우선재고용 노력의무의 취지',
        summary:
          '대법원 2003다69393 사건(대법원, 2006.01.26 선고)에서 법원은 사용자의 정리해고자 우선재고용 노력의무를 규정한 구 근로기준법(현 제25조)의 취지를 확인하면서, 정리해고 4요건(긴박한 경영상 필요·해고 회피 노력·합리적·공정한 대상자 선정·근로자대표와의 성실 협의)의 구체적 내용은 확정·고정된 것이 아니라 사건별 다른 요건의 충족 정도와 관련해 유동적으로 정해진다고 판시했습니다. 우선재고용은 정리해고의 사후 보완 장치로 자리잡고 있다는 의미입니다.',
        takeaway: '정리해고가 일단 효력을 인정받았더라도 사후 신규 채용이 있으면 우선재고용권으로 다툴 여지가 있어, 해고 시점뿐 아니라 그 이후 채용 동향까지 함께 점검할 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '정리해고 후 정확히 몇 년 이내에 신청해야 하나요?',
        answer:
          '<strong>근로기준법 제25조에 따라 해고일로부터 3년 이내가 기본 기간 요건입니다.</strong> 다만 손해배상 등 별도 청구는 임금채권·불법행위 시효(3년) 내라면 추가 검토 가능합니다.',
      },
      {
        question: '회사가 채용공고를 안 내고 인맥으로 뽑으면 알 수 없는데 어떻게 하나요?',
        answer:
          '<strong>제25조 제2항은 사용자에게 정리해고된 근로자 명단·연락처를 보유하고 우선재고용 의사를 확인할 의무를 부여합니다.</strong> 고지의무 위반 자체가 다툼 사유가 됩니다.',
      },
      {
        question: '비슷한 업무를 외주·파견으로 채우면 우선재고용 의무 위반인가요?',
        answer:
          '<strong>외주·파견이라도 실질이 같은 업무라면 의무 위반으로 다툴 여지가 있습니다.</strong> 형식상 다른 계약이라도 본인이 수행하던 업무를 그대로 한다면 동일 업무 평가가 가능한 사례가 있습니다.',
      },
      {
        question: '재고용을 거절당하면 어떤 청구가 가능한가요?',
        answer:
          '<strong>해고무효확인 + 일실임금 + 위자료 청구가 일반적입니다.</strong> 노동위 트랙(3개월) 도과 시 민사 트랙으로 진행 가능하며 임금채권 시효는 3년입니다.',
      },
      {
        question: '재고용되면 근속·급여는 어떻게 되나요?',
        answer:
          '<strong>일반적으로 신규 채용 형식이지만, 합의 단계에서 종전 근속·급여 일부 인정을 협상할 수 있는 사례가 있습니다.</strong> 회사 측 사정에 따라 조건이 다양하니 합의 전 충분히 점검해두는 것이 좋습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '경영상 정리해고 기준 다툼', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '구제신청 3개월 도과 민사 전환', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
      { label: '5인 미만 부당해고 우회 경로', href: '/guide/dismissal/dismissal-under-five-employees-relief-paths' },
      { label: '정년 임박 해고 잔여임금 청구', href: '/guide/dismissal/dismissal-near-retirement-age-fired-claim' },
      { label: '계약직 갱신거부 기대권 다툼', href: '/guide/dismissal/dismissal-contract-renewal-expectation-relief' },
    ],
  },

  // ─── 4. dismissal / dismissal-injury-recovery-period-rejection ───
  {
    domain: 'dismissal',
    slug: 'dismissal-injury-recovery-period-rejection',
    keyword: '산재 종결 후 복직거부',
    questionKeyword: '산재 요양 종결 후 복직했는데 회사가 거부했어요. 어떻게 다투나요?',
    ctaKeyword: '산재 종결 복직거부 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '산재 요양 종결 후 30일 해고금지 4가지 다툼 포인트 | 로앤가이드',
      description:
        '산재 종결 후 회사가 복직을 거부했다면 30일 해고금지·후유장해 평가·직무재배치 의무 위반 4가지로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 산재 요양이 종결돼서 복직 통보를 했는데, 회사가 갑자기 \'기존 자리가 없다\'며 출근을 막네요. 산재 후유증도 남았는데 어떻게 해야 할지 막막합니다." 근로기준법 제23조 제2항은 업무상 부상·질병의 요양을 위해 휴업한 기간과 그 후 30일은 해고를 절대적으로 제한하고 있어, 종결 직후 거부·해고 통보는 위 조항 위반으로 무효 다툼이 가능합니다. 또한 회사는 합리적 직무재배치 의무를 부담하므로 단순 자리 부재만으로 거부할 수 없는 사례가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 산재 종결 후 복직거부 시 다툴 수 있는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로기준법 제23조 제2항·산업안전보건법·법원 법리를 종합하면 아래 4가지 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 30일 해고금지 위반</strong> — 요양 휴업기간과 그 후 30일 안에 이뤄진 해고·복직거부는 절대적 해고 제한 위반으로 무효 평가될 수 있습니다 (근로기준법 제23조 제2항).</li>\n<li><strong>② 부분 휴업 포함 해석</strong> — 정상 노동력으로 근로 제공이 곤란한 상태에서 치료 계속 중이라면 부분 휴업도 포함되어 해고 제한이 적용된다는 법원 입장이 확립돼 있습니다.</li>\n<li><strong>③ 후유장해 평가 미실시</strong> — 회사가 후유장해 정도를 평가하지 않은 채 "업무 수행 불가"로 단정한 경우 합리성 결격 정황이 됩니다.</li>\n<li><strong>④ 직무재배치 검토 의무 위반</strong> — 기존 업무가 곤란하더라도 다른 업무로의 전환배치를 검토하지 않은 채 거부한 경우 비례성 원칙 위반 정황이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ①번 30일 해고금지 위반은 절대적 무효 사유에 해당하므로 종결 시점·거부 시점 비교가 가장 우선 점검할 항목입니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 절차로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위·근로복지공단·법원 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 요양 종결일 확인</strong> (즉시) — 근로복지공단 요양 종결 결정 통지서, 진단서, 30일 기산일 정확 산정.</li>\n<li><strong>2단계 — 복직 의사 통보</strong> (즉시) — 회사에 출근 의사·복직일 명시 내용증명 발송. 출근 시도 기록 보존.</li>\n<li><strong>3단계 — 거부 사유 확인 + 직무재배치 요청</strong> — 회사 거부 사유 서면 요청, 직무재배치 가능 자리 확인 요구.</li>\n<li><strong>4단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 입증자료 각 2부.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액. 후유증 사정은 산재 후유장해 추가 청구로 별도 진행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">산재 종결 후 복직거부 사안에서 30일 기산·직무재배치 다툼 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 30일 해고금지 산정과 직무재배치 다툼 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로복지공단 요양 결정·종결 통지서</strong> — 30일 기산일 출발점.</li>\n<li><strong>진료 기록·진단서·후유장해 평가서</strong> — 부분 휴업·후유장해 정도 입증.</li>\n<li><strong>복직 의사 통보 내용증명·이메일</strong> — 본인이 출근 의사를 명확히 표시한 기록.</li>\n<li><strong>회사 거부 통보·면담 녹음</strong> — 거부 사유와 시점, 합리적 검토 부재 정황.</li>\n<li><strong>근로계약서·취업규칙</strong> — 직무 범위·전환배치 규정.</li>\n<li><strong>회사 내 전환 가능 자리 정황</strong> — 채용공고·다른 동료의 업무·내부 인사이동 자료.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출근 시도 시 보안실 출입기록·CCTV 보존 요청·문자 통보 기록을 동시에 남기면 회사 측 거부 시점이 명확하게 입증됩니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "후유증으로 업무 수행 불가"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 후유증 주장은 객관적·구체적 평가와 직무재배치 검토 의무를 충족했을 때만 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>의학적 평가의 객관성</strong> — 회사가 자체 판단으로 "업무 불가"로 단정했는지, 산업의·전문의 평가를 거쳤는지 점검해볼 수 있습니다.</li>\n<li><strong>30일 절대 해고금지 적용 여부</strong> — 후유증이 있더라도 종결일+30일 안의 해고는 절대적 무효 영역으로 평가될 수 있습니다.</li>\n<li><strong>합리적 직무재배치 의무</strong> — 기존 업무가 어려워도 다른 가능 업무로의 전환배치를 검토하지 않았다면 비례성 원칙 위반 정황입니다.</li>\n<li><strong>부분 노동력 회복 사례</strong> — 일부 업무라도 수행 가능하다면 부분 복직·근로시간 단축 등 검토가 우선 의무입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 산재 후유증이 남아 있으면 부당해고 다툼과 별도로 근로복지공단 후유장해 추가 청구·재요양 신청도 함께 검토해두는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 요양 휴업기간과 그 후 30일 해고제한의 절대성',
        summary:
          '대법원 2018두43958 사건(대법원, 2021.04.29 선고)에서 법원은 근로기준법 제23조 제2항이 사용자는 근로자가 업무상 부상·질병의 요양을 위해 휴업한 기간과 그 후 30일 동안 해고하지 못한다고 규정해 해고를 절대적으로 제한하며, 요양을 위해 필요한 휴업에는 정상적인 노동력을 상실해 출근을 전혀 할 수 없는 경우뿐 아니라 노동력을 일부 상실해 정상 근로가 곤란한 상태에서 치료를 계속하며 부분적으로 근로를 제공하는 부분 휴업도 포함된다고 판시했습니다. 시용 근로자에게도 동일하게 해고 제한이 적용된다고 본 사례입니다.',
        takeaway: '산재 종결 직후의 해고·복직거부는 30일 해고금지 위반 가능성이 가장 높은 영역이므로 종결일과 거부 시점을 정확히 비교 점검하면 다툼 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '요양 종결 후 30일이 지난 다음 해고하면 무효 다툼이 어려운가요?',
        answer:
          '<strong>30일 절대 해고금지는 풀리지만 정당한 이유 요건(제23조 제1항)은 그대로 적용됩니다.</strong> 후유장해 평가·직무재배치 검토 부재 등 합리성 결격 정황이 있으면 다툴 여지가 있습니다.',
      },
      {
        question: '산재로 인정 못 받았는데도 해고 제한이 적용되나요?',
        answer:
          '<strong>업무상 부상·질병의 요양 휴업이라면 산재 인정 여부와 무관하게 30일 해고금지가 적용된다고 본 판단례가 있습니다.</strong> 진단서·치료 사실 자료로 입증할 수 있습니다.',
      },
      {
        question: '회사가 폐업·구조조정을 이유로 거부하면 어떻게 되나요?',
        answer:
          '<strong>경영상 이유로 한 해고는 정리해고 4요건이 별도로 충족돼야 합니다.</strong> 단순 자리 부재 주장만으로는 부족하며 우선재고용권 등 추가 다툴 트랙이 살아있습니다.',
      },
      {
        question: '복직거부 후 임금은 어떻게 청구하나요?',
        answer:
          '<strong>거부일~판정일 사이 임금상당액을 노동위 인용 시 함께 명령받을 수 있습니다.</strong> 임금채권 시효 3년 내 별도 임금청구도 검토 가능합니다.',
      },
      {
        question: '후유증이 남아 있는데 복직해서 일할 수 있을까 걱정됩니다.',
        answer:
          '<strong>부분 복직·근로시간 단축·전환배치 등을 회사에 요구할 수 있으며 산재 후유장해 추가 청구도 별도 트랙입니다.</strong> 무리한 복직보다 합리적 직무재배치를 함께 협상하는 것이 좋습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '병가·휴직 중 해고 다툼', href: '/guide/dismissal/dismissal-during-sick-leave' },
      { label: '인사이동 거부 후 해고 무효', href: '/guide/dismissal/dismissal-relocation-refused-then-fired' },
      { label: '구제신청 3개월 도과 민사 전환', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '경영상 정리해고 기준 다툼', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
    ],
  },

  // ─── 5. dismissal / dismissal-fixed-term-non-renewal-expectation ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fixed-term-non-renewal-expectation',
    keyword: '기간제 갱신기대권 입증',
    questionKeyword: '계약직인데 갱신거절을 당했어요. 갱신기대권으로 다툴 수 있나요?',
    ctaKeyword: '갱신기대권 입증 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '기간제 갱신기대권 인정 5요건과 입증 절차 | 로앤가이드',
      description:
        '계약직 갱신거절을 당했다면 갱신 관행·기준·자동갱신 조항 등 5요건으로 갱신기대권을 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년째 1년씩 갱신해 오던 계약이 이번에 갑자기 갱신 거절됐어요. \'계약 만료\'라고만 하는데 갱신을 기대하고 있었던 게 잘못된 건지 답답합니다." 기간제 근로계약이라도 갱신 관행·평가 기준·자동갱신 조항·근속기간·평가 동향 등이 결합되어 갱신기대권이 형성됐다면, 합리적 이유 없는 갱신거절은 실질해고에 해당해 다툴 수 있다는 법리가 확립돼 있습니다. 합리적 이유 입증책임은 사용자에게 있으며, 노동위 구제신청은 갱신거절 통보일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '갱신기대권이 인정되는 5가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 요건 중 다수가 충족되면 기간제 갱신기대권이 형성된 것으로 평가될 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신 관행 형성</strong> — 같은 직무·같은 부서에서 다수 기간제 근로자가 반복 갱신된 정황 (전체 갱신율, 회사 인사 자료).</li>\n<li><strong>② 갱신 기준의 사전 고지</strong> — 평가 기준·갱신 요건이 계약서·취업규칙에 명시되거나 입사 시 안내된 경우.</li>\n<li><strong>③ 자동갱신·연장 조항</strong> — 근로계약서에 "별도 합의 없으면 자동연장" 류 조항이 있는 경우 기대권 강력 정황.</li>\n<li><strong>④ 장기 근속 사실</strong> — 2~3회 이상 갱신, 누적 근속 1~2년 이상이면 기대권 형성 정황으로 자주 평가됩니다.</li>\n<li><strong>⑤ 정상 평가·통상 근무 동향</strong> — 갱신거절 시점까지 평가가 정상적이었고 결격 사유가 없었던 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5요건 중 ①번 갱신 관행과 ④번 근속이 기본 골격이며, ③번 자동갱신 조항이 함께 있으면 기대권 인정 가능성이 크게 올라갑니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갱신거절 통보 보존</strong> (즉시) — 통보 메일·문자·서면, 거절 사유 명시 자료 사본 확보.</li>\n<li><strong>2단계 — 갱신기대권 형성 자료 정리</strong> — 과거 갱신 이력, 자동갱신 조항, 동기 갱신 사례, 평가 결과.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (통보일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부 제출.</li>\n<li><strong>4단계 — 회사 자료 제출 요구</strong> — 갱신거절 사유의 합리성 입증책임은 사용자이므로 평가 기준·평가표·동기 비교 자료 제출 요구.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 갱신된 것과 동일한 근로관계 + 거절일~판정일 임금상당액 또는 금전보상명령(통상 6~12개월치).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">갱신기대권 5요건 중 본인 사정에 맞는 입증 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">갱신기대권은 형성 입증 + 거절 합리성 부재 입증 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>역대 근로계약서 (전부)</strong> — 1차·2차·N차 계약서 모두. 자동갱신 조항·갱신 기준 조항 확인.</li>\n<li><strong>갱신거절 통보서·사유서</strong> — 시점·사유·기재 내용.</li>\n<li><strong>취업규칙·인사평가 규정</strong> — 평가 기준·갱신 절차 규정.</li>\n<li><strong>본인 인사평가서·근태기록</strong> — 정상 근무·평가 동향 입증.</li>\n<li><strong>동료 갱신 사례 자료</strong> — 같은 직무 동기·동료의 갱신 이력 (간접 자료라도 가능).</li>\n<li><strong>입사 시 안내 자료</strong> — 면접·오리엔테이션에서 갱신·정규직 전환을 안내한 자료.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 부서에서 본인과 비슷한 시기에 입사한 동기들의 갱신·정규직 전환 비율이 높다면 갱신 관행 입증의 핵심 자료가 됩니다.</blockquote>',
      },
      {
        title: '회사가 "기간 만료라 갱신 의무 없다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">기간제법 형식만으로는 자유로운 갱신거절이 정당화되지 않으며, 갱신기대권이 형성됐다면 합리적 이유 입증책임은 사용자에게 있습니다.</strong></p>\n<ul>\n<li><strong>입증책임 전환</strong> — 갱신기대권이 형성됐다면 합리적 이유의 입증책임은 사용자가 부담하므로 평가 자료·갱신 기준 자료 제출 요구가 가능합니다.</li>\n<li><strong>갱신거절 = 실질해고 평가</strong> — 갱신기대권이 인정되면 갱신거절은 부당해고와 동일한 법리가 적용되어 노동위 구제 대상이 됩니다.</li>\n<li><strong>2년 초과 = 무기계약 전환 별도 트랙</strong> — 기간제법 제4조에 따라 2년 초과 사용 시 무기계약 근로자로 본다는 별도 다툼 트랙도 함께 검토 가능합니다.</li>\n<li><strong>차별 정황 결합</strong> — 임신·노조활동·산재 신청 등 사유가 결합된 경우 차별·보복 해고 다툼도 함께 검토 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자동갱신 조항이 있는 경우라도 회사가 만료 전 거절 통보를 했다면 조항 해석이 분쟁이 될 수 있어 통보 시점·문언을 정확히 보존해두는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신기대권 형성과 합리적 이유 입증책임',
        summary:
          '대법원 2018두62492 사건(대법원, 2023.06.29 선고)에서 법원은 근로계약·취업규칙·단체협약 등에 정년 후 재고용 요건이 규정돼 있거나 그에 준하는 재고용 관행이 확립돼 신뢰관계가 형성됐다면 근로자에게 재고용 기대권이 인정되며, 정년 후 기간제 근로계약을 체결한 경우에도 일정 요건을 충족하면 갱신기대권이 인정된다고 판시했습니다. 이때 사용자가 합리적 이유 없이 갱신을 거절하면 효력이 없고, 그 합리적 이유의 증명책임은 사용자에게 있다고 명확히 했습니다.',
        takeaway: '갱신기대권이 형성됐다면 사용자가 합리적 이유를 입증해야 하므로, 본인이 5요건 형성을 입증하면 다툼 구도가 한결 유리해집니다.',
      },
    ],
    faq: [
      {
        question: '한 번도 갱신해본 적 없는 첫 계약직인데 갱신기대권을 주장할 수 있나요?',
        answer:
          '<strong>주장하기 쉽지 않지만 자동갱신 조항·입사 시 안내·관행이 있으면 다툴 여지가 있습니다.</strong> 5요건 중 ①번 갱신 관행과 ③번 자동갱신 조항 두 항목이 핵심 보강 자료입니다.',
      },
      {
        question: '계약서에 "기간 만료 시 자동 종료" 조항이 있어요. 그래도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 조항 자체보다 갱신 관행·평가 동향 등 실질이 우선이므로, 동료들이 반복 갱신됐다면 조항 표현과 별개로 기대권 형성 평가가 가능합니다.',
      },
      {
        question: '2년 초과 근무했어요. 갱신기대권과 무기계약 전환 중 어느 쪽이 좋나요?',
        answer:
          '<strong>두 트랙 모두 함께 검토하는 것이 일반적입니다.</strong> 무기계약 전환은 기간제법 제4조 적용이고 갱신기대권은 판례 법리라서 둘이 동시 주장돼도 충돌하지 않습니다.',
      },
      {
        question: '갱신거절 사유가 "예산 부족"이라는데 합리적 이유로 인정될까요?',
        answer:
          '<strong>예산 사정만으로는 합리적 이유로 부족한 사례가 있습니다.</strong> 같은 시기 신규 채용·다른 동료 갱신이 있었다면 사유의 일관성이 결격으로 평가됩니다.',
      },
      {
        question: '인용되면 무기계약 정규직이 되나요?',
        answer:
          '<strong>인용되면 종전 근로계약이 갱신된 것과 동일한 근로관계로 평가됩니다.</strong> 별도로 기간제법 제4조 무기계약 전환을 함께 주장한 경우 무기계약 지위 인정도 가능한 사례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '계약직 갱신거부 기대권 다툼', href: '/guide/dismissal/dismissal-fixed-term-renewal-right' },
      { label: '계약직 2년 초과 무기계약 전환', href: '/guide/dismissal/dismissal-fixed-term-2year-conversion' },
      { label: '구제신청 3개월 도과 민사 전환', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
      { label: '경영상 정리해고 기준 다툼', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
    ],
  },
];
