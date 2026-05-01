import { SpokePage } from '../spoke-pages';

// batch51 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 회사가 신원조회·범죄경력·신용조사 등 채용·근무 단계의 개인정보 수집 동의를 강요한 뒤 거부 시 해고된 근로자가 개인정보보호법·근로기준법 제24조 채용 비위 다툼 트랙으로 정당성을 점검할 수 있도록 돕는 페이지다.
// 2. 이 페이지는 SNS·블라인드·익명커뮤니티에 회사 비판·내부고발 글을 올린 뒤 해고된 근로자가 표현의 자유·공익 제보 보호·근로계약상 충실의무 균형 5가지 포인트로 부당해고 다툼 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 관리직 직책 변경(강등)을 거친 뒤 해고된 근로자가 인사권 한계·근로조건 불이익변경 동의 절차·강등의 합리성 등 4가지 다툼 포인트로 직책 변경 자체와 그 후 해고를 함께 점검할 수 있도록 돕는 페이지다.
// 4. 이 페이지는 사업장이 100km 이상 떨어진 곳으로 이전돼 통근 곤란을 호소했다가 거부=해고로 처리된 근로자가 근로조건 변경의 합리성·생활기반 침해 비교형량으로 다툴 수 있도록 돕는 페이지다.
// 5. 이 페이지는 영업비밀·보안서약 위반 의심 사유로 해고된 근로자가 위반 사실 인과관계·고의·근로자 방어 4가지 핵심 포인트로 해고 정당성을 다툴 수 있도록 돕는 페이지다.

export const spokesBatch51Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-prove-of-employment-disclose-coercion ───
  {
    domain: 'dismissal',
    slug: 'dismissal-prove-of-employment-disclose-coercion',
    keyword: '신원조회 강요 해고',
    questionKeyword: '회사가 신원조회·범죄경력 동의를 강요했고 거부하니 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '신원조회 강요 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '신원조회·범죄경력 강요 거부 해고 다투는 4가지 포인트 | 로앤가이드',
      description:
        '회사가 신원조회·범죄경력·신용조사 동의를 강요하고 거부 시 해고했다면 개인정보보호법·근로기준법 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"입사 후 갑자기 회사가 \'신원조회·범죄경력·신용조회\'에 모두 동의하라며 서약서를 내밀었어요. 직무와 무관한 항목까지 포함돼 거부했더니 며칠 뒤 해고 통보를 받았습니다. 이런 강요와 해고를 함께 다툴 수 있는지 막막합니다." 개인정보보호법 제15조·제22조는 정보주체의 동의가 자유로운 의사에 기초해야 하며, 동의 거부를 이유로 한 불이익 처분은 별도 위법 영역입니다. 동시에 직무와 무관한 정보의 동의 강요·해고는 근로기준법 제23조 제1항 정당한 이유 다툼이 함께 가능합니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 신원조회·범죄경력 강요 거부 해고에서 다툴 수 있는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 개인정보보호법·근로기준법·법원 법리를 종합하면 아래 4가지 측면에서 다툴 수 있는 사례가 있습니다.</strong></p>\n<ul>\n<li><strong>① 직무 관련성 부재</strong> — 청원경찰·금융업 등 법령상 결격사유 심사가 필요한 직무가 아니라면 범죄경력·신용조사가 직무 수행과 직접 연결되지 않을 가능성이 높습니다.</li>\n<li><strong>② 동의의 임의성 부재</strong> — 개인정보보호법 제22조 제5항은 동의 거부를 이유로 재화·서비스 제공·근로 관계상 불이익을 줄 수 없다고 정해, 거부=해고 구도 자체가 위법 정황입니다.</li>\n<li><strong>③ 수집 목적·항목 불비</strong> — 동의서에 수집 목적·항목·보유 기간이 구체적으로 명시되지 않은 일괄 동의 강요는 같은 법 제15조·제17조 위반으로 평가될 수 있습니다.</li>\n<li><strong>④ 해고 사유의 정당성 결여</strong> — 회사가 "신뢰관계 파탄"으로 해고 사유를 삼아도 거부 행위 자체가 합법적 권리행사라면 근로기준법 제23조 제1항 정당한 이유로 인정되기 어려운 사례가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ②번 동의 거부 = 불이익 금지 조항이 절대적 안전장치이므로, 동의서 문언과 거부~해고 사이 시간 흐름을 시간순으로 정리해두는 것이 가장 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동의서·요구 메일 보존</strong> (즉시) — 신원조회 동의서 양식, 인사팀의 동의 강요 메일·문자, 거부 통보 기록 사본 확보.</li>\n<li><strong>2단계 — 거부~해고 시간순 정리</strong> — 거부 시점, 해고 통보 시점, 그 사이 회사 측 발언·압박 정황 메모.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 입증자료 각 2부 제출 (우편·방문·온라인).</li>\n<li><strong>4단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n<li><strong>5단계 — 개인정보보호위원회 신고 병행</strong> — 동의 강요·동의 거부 불이익은 개인정보보호위원회(privacy.go.kr·국번없이 182) 신고 트랙도 함께 검토 가능합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신원조회 강요·거부 해고 사안에서 다툴 포인트와 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의 강요 자체와 해고의 인과관계 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>신원조회·범죄경력·신용조사 동의서 양식</strong> — 수집 목적·항목·보유기간 기재 여부 점검.</li>\n<li><strong>인사팀 동의 강요 메일·메신저</strong> — "동의 안 하면 ~" 류 압박 정황 기록.</li>\n<li><strong>거부 통보 자료</strong> — 본인이 거부 의사를 명확히 표시한 메일·문자.</li>\n<li><strong>해고통보서·사유서</strong> — 회사가 사유로 든 항목과 거부 행위 인과관계.</li>\n<li><strong>근로계약서·취업규칙</strong> — 신원조회·동의 의무가 입사 시점에 명시됐는지 확인.</li>\n<li><strong>동료 진술서</strong> — 비슷한 동의 강요 정황을 경험한 동료 자료 (간접 자료).</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 "이미 동의서에 서명한 적 있다"라고 주장하더라도 매번 새 동의가 필요한 사항이라면 형식 동의만으로 적법성이 인정되기 어려운 사례가 있어 최초 동의서·이번 추가 동의서를 모두 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "직무상 신뢰관계 파탄"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 신뢰관계 파탄 주장은 거부 행위가 합법적 권리행사인지부터 점검해야 합니다.</strong></p>\n<ul>\n<li><strong>거부 행위의 합법성</strong> — 개인정보보호법상 동의는 임의성이 보장되므로, 동의 거부는 권리행사이지 비위행위가 아닙니다.</li>\n<li><strong>법령상 결격 심사 직무 여부</strong> — 청원경찰·은행원·아동시설 종사자 등 법령이 직접 결격사유 심사를 요구하는 직무가 아니라면 일률 신원조회 강요는 비례성 위반 정황입니다.</li>\n<li><strong>해고 사유의 구체성</strong> — 근로기준법 제27조 서면통지에서 "신뢰 파탄" 같은 추상적 사유만 기재했다면 사유 부존재 다툼이 추가로 가능합니다.</li>\n<li><strong>동기 비교 차별</strong> — 같은 시기 다른 직원에게는 동의 거부 시 불이익이 없었다면 차별 정황으로 평가될 여지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 자체 보안 규정 위반을 별도 사유로 추가할 가능성도 있어, 거부 시점 이후 회사가 새 사유를 추가하는 정황은 시간순으로 별도 메모해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채용 시 허위 자료 제출과 임용취소 효력',
        summary:
          '대구고법 2021나21372 사건(대구고법, 2021.09.15 선고)에서 법원은 국립대학병원 청원경찰 채용 응시자가 시각장애 6급으로 좌안 시력 0.025 이하임에도 신체검사서에 좌·우 시력 1.0으로 기재해 제출한 사안에서, 인사규정상 "사무의 착오 또는 허위서류 제출로 임용된 때"에 해당해 임용취소가 효력이 있다고 판시했습니다. 법령상 결격사유 심사가 필요한 직무에서 객관적 자격 자료의 정확성이 핵심 쟁점이라는 취지입니다.',
        takeaway: '직무가 청원경찰처럼 법령상 결격 심사를 요구하면 신원·자격 자료의 객관성이 정당한 사유로 평가되지만, 그렇지 않은 직무에 대한 광범위한 신원조회 강요는 별도 다툼 영역이 됨을 확인할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '신원조회 동의서에 한 번 서명했는데 나중에 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 동의 항목·목적이 구체적으로 고지되지 않았거나 사후 새로운 동의가 추가됐다면 별도 위법성 다툼이 가능합니다.',
      },
      {
        question: '범죄경력조회는 회사가 무조건 요구할 수 있는 것 아닌가요?',
        answer:
          '<strong>법령에 근거가 있는 직무(청원경찰·아동시설 등)가 아니라면 일률 요구는 직무 관련성 다툼 대상이 됩니다.</strong> 동의가 임의성을 갖춘 자유로운 의사에 기초했는지가 핵심 점검 항목입니다.',
      },
      {
        question: '거부했다고 곧바로 해고하지 않고 인사이동·감봉부터 했어요. 그래도 다툴 수 있나요?',
        answer:
          '<strong>인사이동·감봉도 거부에 따른 불이익이라면 개인정보보호법 제22조 제5항 위반 정황입니다.</strong> 이후 해고로 이어진 흐름까지 함께 다툴 수 있는 사례가 있습니다.',
      },
      {
        question: '개인정보보호위원회 신고와 노동위 구제신청을 동시에 진행해도 되나요?',
        answer:
          '<strong>두 트랙은 서로 별개라 동시 진행이 가능합니다.</strong> 개인정보위는 동의 강요·과다 수집을 다루고, 노동위는 거부에 따른 해고의 정당성을 다룹니다.',
      },
      {
        question: '신용조회 동의 거부가 해고 사유가 될 정도로 회사에 손해가 갈까요?',
        answer:
          '<strong>구체적 손해 입증 책임은 사용자 측에 있습니다.</strong> 일반 사무직 등에서 신용조회가 업무 수행에 직접 영향을 준다고 보기 어려운 사례가 많습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '경고 없이 즉시 해고 무효', href: '/guide/dismissal/dismissal-no-warning-immediate-fire' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: 'PIP 평가 절차 하자 입증', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
    ],
  },

  // ─── 2. dismissal / dismissal-online-comment-cause-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-online-comment-cause-fired',
    keyword: '회사 비판 게시 해고',
    questionKeyword: 'SNS·블라인드에 회사 비판 글을 올렸다가 해고됐어요. 표현의 자유로 다툴 수 있나요?',
    ctaKeyword: '온라인 비판 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 회사 비판 해고 다투는 5가지 균형 포인트 | 로앤가이드',
      description:
        'SNS·블라인드 회사 비판 게시로 해고됐다면 표현의 자유·공익성·충실의무 균형 5가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"블라인드와 SNS에 회사 부당 처우와 임금 미지급 문제를 올렸어요. 다른 동료들도 공감했는데 회사가 갑자기 \'명예훼손·신뢰 파탄\'이라며 해고 통보를 했습니다. 표현의 자유와 공익 제보로 다툴 수 있는지 막막합니다." 회사 비판 게시는 표현의 자유, 노조 활동 정당성, 공익 제보 보호와 근로계약상 충실의무 사이의 균형 문제입니다. 게시 목적이 근로조건 개선·공익이고 내용이 전체적으로 진실하면 정당한 활동으로 평가될 여지가 큽니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '게시 후 해고에서 다툴 수 있는 5가지 균형 포인트',
        content:
          '<p><strong style="color:#1e3a5f">대법원 법리를 종합하면 게시 행위의 정당성은 아래 5가지 요소를 종합 평가합니다.</strong></p>\n<ul>\n<li><strong>① 게시 목적의 공익성</strong> — 근로조건 유지·개선, 부당 노무관행 시정, 사회적 공익 등 목적이 정당한지 확인합니다.</li>\n<li><strong>② 내용의 전체적 진실성</strong> — 일부 표현이 다소 과장되거나 왜곡되더라도 핵심 사실관계가 전체적으로 진실하면 정당 활동 범위 안으로 평가될 여지가 있습니다.</li>\n<li><strong>③ 표현 방식의 상당성</strong> — 모욕적·인격적 비난을 넘는 표현이었는지, 사실 적시 위주였는지 점검합니다.</li>\n<li><strong>④ 영업비밀·기밀 미포함</strong> — 영업비밀·고객정보 등 회사 기밀이 포함됐다면 별도 충실의무 위반 다툼이 발생합니다.</li>\n<li><strong>⑤ 내부 절차 시도 여부</strong> — 사내 신고·노조·근로감독관 등 내부 절차를 먼저 시도했는지가 정당성 평가에 함께 고려됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ①번 공익성과 ②번 전체적 진실성이 결합되면 노조 활동 또는 정당한 표현 행위로 평가되는 사례가 다수 있어, 두 요소가 가장 강력한 다툼 축입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 보존</strong> (즉시) — 게시 화면 캡처, 작성 시점, 내용 전체, 공감·댓글 수 사본 확보 (회사가 삭제 요구 가능성 대비).</li>\n<li><strong>2단계 — 게시 동기·근거 자료 정리</strong> — 임금명세서·노무 관행 자료·다른 근로자 진술 등 게시 내용의 진실성 입증 자료.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 게시 목적·내용 진실성·표현 방식·공익성을 단계별로 입증.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> (판정 후 재심 10일·행정소송 15일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS·블라인드 비판 게시 해고 사안의 다툼 포인트와 입증 자료를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">표현의 자유 다툼은 게시 자료 + 게시 진실성 자료 두 갈래로 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>게시물 화면 캡처 (전부)</strong> — 본문, 시점, 작성자, 공감·댓글까지 전체. 가능하면 페이지 출처 URL 포함.</li>\n<li><strong>게시 내용 입증 자료</strong> — 임금명세서·근태기록·인사평가 등 게시한 사실관계의 진실성을 뒷받침하는 객관 자료.</li>\n<li><strong>해고통보서·사유서</strong> — 회사가 든 사유와 게시물 인용 부분.</li>\n<li><strong>취업규칙·서약서</strong> — 비밀유지·SNS 정책·표현 제한 조항 점검.</li>\n<li><strong>내부 절차 시도 기록</strong> — 사내 신고·노조 상담·근로감독관 신고 정황 자료.</li>\n<li><strong>동료 진술서</strong> — 게시 내용에 공감하거나 같은 정황을 경험한 동료 자료.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 게시물 삭제·블라인드 신고를 통해 자료를 없앨 수 있어, 해고 통보 즉시 내려받기·인쇄·공증 등 보존 작업을 가장 먼저 해두는 것이 안전합니다.</blockquote>',
      },
      {
        title: '회사가 "명예훼손·신뢰관계 파탄"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손 주장은 형사 절차와 별개로 노동위 단계에서 표현의 자유 균형 법리로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>형사·민사·노동위 트랙 구분</strong> — 명예훼손 형사 고소가 별도 진행되더라도 노동위는 해고 정당성 자체를 독립 판단하는 사례가 있습니다.</li>\n<li><strong>공익성·진실성 종합 평가</strong> — 게시 목적이 근로조건 개선·공익이고 내용이 전체적으로 진실하면 정당한 활동 범위로 평가될 수 있습니다.</li>\n<li><strong>익명 게시판 특성</strong> — 블라인드 등 익명 사내 커뮤니티 게시는 회사 외부 공표와는 다르게 평가될 여지가 있는 사례가 있습니다.</li>\n<li><strong>비례성 원칙</strong> — 게시 1회로 해고까지 간 경우 견책·감봉 등 중간 처분을 거치지 않은 점이 비례성 위반 정황으로 평가될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 영업비밀·고객정보·인사기록을 게시물에 포함시킨 경우 별도 충실의무 위반이 성립할 수 있어, 게시 내용에서 회사 기밀이 분리돼 있는지 우선 점검해두는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 게시 문서의 명예훼손 가능성과 정당한 활동 범위',
        summary:
          '대법원 2008다29123 사건(대법원, 2011.02.24 선고)에서 법원은 노동조합 활동으로 배포된 문서에 타인의 인격·신용·명예 등이 훼손될 염려가 있고 일부 표현에 과장·왜곡이 있더라도, 그 목적이 근로조건의 유지·개선과 근로자의 경제적·사회적 지위 향상을 위한 것이고 내용이 전체적으로 진실하다면 노동조합의 정당한 활동 범위에 속한다고 판시했습니다. 인터넷 신문 기사를 그대로 개인 홈페이지에 게시한 행위가 정당한 노조 활동으로 인정된 사례입니다.',
        takeaway: '회사 비판 게시도 목적이 정당하고 내용이 전체적으로 진실하면 정당 활동 범위로 평가될 여지가 큰 사례가 있어, 게시 동기와 진실성을 입증하는 자료를 우선 정리해두는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '실명이 아닌 익명 게시도 다툼이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 익명 게시라도 회사가 IP·문장 패턴 등으로 작성자를 특정해 해고했다면 게시 자체의 정당성 다툼으로 진입할 수 있습니다.',
      },
      {
        question: '공감·댓글이 많아도 명예훼손이 되나요?',
        answer:
          '<strong>공감 수가 명예훼손 성립을 좌우하지는 않지만 사회적 공익성·전파 의도 측면에서 정당성 평가에 영향을 주는 사례가 있습니다.</strong> 공감·댓글 수까지 캡처해두는 것이 좋습니다.',
      },
      {
        question: '회사가 형사 고소까지 했는데 어떻게 대응하나요?',
        answer:
          '<strong>형사·노동위·민사는 트랙이 다르며 노동위는 해고 자체의 정당성을 별도로 판단하는 사례가 많습니다.</strong> 형사 결과를 기다리지 말고 노동위 3개월 시한 안에 신청하는 것이 안전합니다.',
      },
      {
        question: '회사 기밀(고객 정보·매출 자료)이 일부 포함됐는데도 다툴 수 있나요?',
        answer:
          '<strong>분리해서 평가됩니다.</strong> 공익 비판 부분과 기밀 부분이 명확히 구분되면 비례성 평가에서 다툴 여지가 있고, 견책·감봉 등 중간 처분이 없었는지 점검해볼 수 있습니다.',
      },
      {
        question: '내부 신고를 거치지 않고 곧바로 외부에 올렸어요. 그래도 정당하나요?',
        answer:
          '<strong>내부 절차 시도 여부는 정당성 평가의 한 요소이며 절대적 요건은 아닙니다.</strong> 내부 절차가 사실상 작동하지 않은 정황이 입증되면 외부 게시도 정당 활동으로 평가될 여지가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '경고 없이 즉시 해고 무효', href: '/guide/dismissal/dismissal-no-warning-immediate-fire' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
      { label: 'PIP 평가 절차 하자 입증', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
    ],
  },

  // ─── 3. dismissal / dismissal-management-position-change-pretext ───
  {
    domain: 'dismissal',
    slug: 'dismissal-management-position-change-pretext',
    keyword: '관리직 강등 후 해고',
    questionKeyword: '관리직에서 일반직으로 강등된 후 해고됐어요. 강등 자체부터 다툴 수 있나요?',
    ctaKeyword: '강등 후 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '관리직 강등 후 해고 다투는 4가지 인사권 한계 | 로앤가이드',
      description:
        '관리직에서 일반직으로 강등된 뒤 해고됐다면 인사권 한계·근로조건 불이익변경·동의 절차 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"10년간 팀장이었는데 갑자기 일반 사원으로 직책이 바뀌었어요. 직책수당과 권한이 사라졌고 1년 뒤 \'성과 부진\'으로 해고 통보를 받았습니다. 강등 자체가 명목 해고 준비 아니었나 의심스러운데 어디부터 다퉈야 할지 막막합니다." 직책 변경(강등)은 인사권 행사 영역이지만 근로조건의 본질적 불이익변경이라면 본인 동의·취업규칙 변경 절차를 거치지 않으면 무효일 수 있고, 강등 자체가 무효면 그 후 평가·해고도 흔들리는 사례가 있습니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 강등 후 해고에서 점검할 4가지 인사권 한계 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로기준법 제23조 제1항·제94조(취업규칙 불이익변경)와 법원 법리를 종합하면 아래 4가지 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 강등의 업무상 필요성</strong> — 직제 개편·인사 운영의 합리성이 객관적으로 입증돼야 인사권 범위 안으로 평가됩니다.</li>\n<li><strong>② 근로자 생활상 불이익 비교형량</strong> — 직책수당 상실, 임금 감소, 사회적 평가 저하 등 본인이 입은 불이익이 회사 측 필요성을 초과하면 권리남용 정황입니다.</li>\n<li><strong>③ 본인과의 협의·동의 절차</strong> — 직급·임금 등 근로조건의 본질적 변경이라면 본인 동의 또는 취업규칙 변경 절차(과반수 동의)를 거쳐야 합니다.</li>\n<li><strong>④ 강등 후 평가의 공정성</strong> — 강등으로 평가 불리해진 자리에 배치되고 같은 평가표로 부진 평가를 한 경우 평가 자체의 객관성 결격 정황이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강등 시점부터 해고 시점까지가 1년 이내이고 임금 감소·평가표 변경 등 본질적 불이익이 결합되면 강등 자체와 후속 해고를 한 흐름으로 다툴 여지가 큽니다.</blockquote>',
      },
      {
        title: 'Q. 강등과 해고를 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위·민사 트랙을 결합한 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 강등·해고 시점 비교</strong> (즉시) — 강등일·임금 감액일·해고일을 한 표로 정리, 그 사이 평가·인사 정황 메모.</li>\n<li><strong>2단계 — 인사발령서·통보서 보존</strong> — 강등 인사발령서, 해고통보서, 직책 변경 사유서 사본 확보.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부 제출.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 강등의 업무상 필요성·동의 절차·평가의 공정성을 단계별로 입증.</li>\n<li><strong>5단계 — 판정·임금 청구</strong> — 인용 시 원직복직 + 임금상당액. 임금채권 시효 3년 내 직책수당 차액 청구도 별도 검토 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">강등 시점부터 해고까지 시간순 정리와 다툼 포인트 선택을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두면 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 강등의 절차 하자 + 후속 평가의 공정성 결격 두 갈래로 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>강등 인사발령서·이전 직책 발령서</strong> — 직급·직책·업무 범위 변동 비교.</li>\n<li><strong>임금명세서 (강등 전·후 12개월)</strong> — 직책수당 상실·기본급·총 지급액 차이.</li>\n<li><strong>취업규칙·인사규정·단체협약</strong> — 직제 변경·강등 절차 규정. 동의·과반수 절차 명시 여부.</li>\n<li><strong>강등 사유서·면담 기록</strong> — 회사가 든 사유와 본인의 동의·이의 표시 여부.</li>\n<li><strong>강등 전·후 인사평가서</strong> — 평가 항목·평가자 변경 여부.</li>\n<li><strong>같은 직책 동료 자료</strong> — 동기 비교 평가, 다른 팀장의 처우.</li>\n<li><strong>해고통보서·해고 사유서</strong> — 강등을 인용했는지, 강등 후 평가만 인용했는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 강등 면담에서 회사가 "곧 정리한다"라고 언급한 정황이 있다면 녹음·메모로 보존해두는 것이 강등이 해고 준비였다는 핵심 정황 자료가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "정당한 인사권 행사"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 인사권 주장은 업무상 필요성·생활상 불이익·협의 절차 세 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>업무상 필요성 입증 책임</strong> — 사용자가 강등의 합리성을 구체적으로 입증해야 하며, 추상적인 조직 효율 주장만으로는 부족한 사례가 있습니다.</li>\n<li><strong>본질적 불이익변경 동의</strong> — 직급·임금 등 근로조건의 본질적 부분 변경은 본인 동의 또는 취업규칙 변경 절차가 필요합니다.</li>\n<li><strong>강등 후 평가의 공정성</strong> — 강등 자체가 평가 불리한 자리로의 이동이라면 같은 평가 잣대로 부진을 단정하는 것은 객관성 결격 정황입니다.</li>\n<li><strong>해고와의 인과관계</strong> — 강등 후 짧은 기간 내 해고로 이어진 패턴은 강등 자체가 해고 명목용이었다는 정황으로 평가될 여지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 강등 동의서에 서명한 경우라도 사후 강박·기망 정황이 입증되면 동의 효력 자체가 다툼 대상이 될 수 있어 면담 시 정황·녹음 자료를 함께 정리해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인사권 행사의 한계와 정당성 판단 기준',
        summary:
          '대법원 93다51263 사건(대법원, 1995.05.09 선고)에서 법원은 근로자에 대한 전직·전보는 근로의 종류·내용·장소에 변경을 가져와 불이익한 처분이 될 수 있으나 원칙적으로 사용자의 인사권에 속해 업무상 필요성 범위 안에서는 상당한 재량이 인정되며, 다만 근로기준법 제23조에 위반하거나 권리남용에 해당하는 등 특별한 사정이 있는 경우에는 허용되지 않는다고 판시했습니다. 정당성 판단은 업무상 필요성과 근로자 생활상 불이익의 비교형량, 본인과의 협의 등 신의칙상 절차 준수 여부로 결정된다고 명시했습니다.',
        takeaway: '강등도 전직·전보와 같은 인사권 영역이지만 업무상 필요성·생활상 불이익·협의 절차의 비교형량으로 무효를 다툴 여지가 있어, 세 축의 입증 자료를 함께 준비하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '강등 시점에 항의했지만 어쩔 수 없이 받아들였어요. 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 강박·기망 또는 서면 동의 부재가 입증되면 동의 효력 자체에 다툼이 가능하고, 그 후 해고도 흔들릴 여지가 있습니다.',
      },
      {
        question: '직책만 변경되고 임금은 그대로인데 강등이라고 볼 수 있나요?',
        answer:
          '<strong>임금이 그대로여도 직책 권한·사회적 평가 저하 등 비물질적 불이익이 본질적이라면 다툼 영역에 들어갑니다.</strong> 직책수당 외 다른 처우 변동도 함께 점검해볼 가치가 있습니다.',
      },
      {
        question: '강등 후 1년이 지나서 해고됐는데 강등도 같이 다툴 수 있나요?',
        answer:
          '<strong>강등 자체에 대한 무효확인은 별도 시효(임금채권 3년) 내 검토 가능합니다.</strong> 노동위 구제신청은 해고에 한정해 3개월 시한이 적용되고 강등은 민사 트랙으로 함께 진행하는 사례가 있습니다.',
      },
      {
        question: '회사가 강등 대신 "직책 순환"이라고 표현했어요. 의미가 있나요?',
        answer:
          '<strong>표현보다 실질이 우선입니다.</strong> 직급·임금·권한·평가 자리 등 본질적 변동이 있으면 명칭과 무관하게 강등(불이익변경)으로 평가될 여지가 있습니다.',
      },
      {
        question: '강등이 무효로 인정되면 해고도 자동 무효가 되나요?',
        answer:
          '<strong>자동은 아니지만 강등 후 평가에 기반한 해고 사유는 흔들리는 사례가 많습니다.</strong> 강등이 무효면 강등 후 평가의 적정성도 함께 다투기 쉬워집니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '인사이동 거부 후 해고 무효', href: '/guide/dismissal/dismissal-relocation-refused-then-fired' },
      { label: 'PIP 평가 절차 하자 입증', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
    ],
  },

  // ─── 4. dismissal / dismissal-business-relocation-distant-refuse ───
  {
    domain: 'dismissal',
    slug: 'dismissal-business-relocation-distant-refuse',
    keyword: '사업장 원거리 이전 거부 해고',
    questionKeyword: '사업장이 100km 떨어진 곳으로 이전돼 거부했더니 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '사업장 이전 거부 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업장 100km 이전 거부 해고 다투는 4단계 절차 | 로앤가이드',
      description:
        '사업장이 원거리로 이전돼 통근 곤란을 호소했다 거부=해고로 처리됐다면 근로조건 변경 합리성·생활기반 침해 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 사업장을 100km 넘는 곳으로 이전한다고 통보했어요. 어린 자녀 등하원·간병 책임 때문에 통근이 사실상 불가능한데 \'전직 명령 거부\' 사유로 해고됐습니다. 회사가 시키는 대로 따라가지 않으면 다 해고할 수 있는 건지 막막합니다." 사업장 이전·전직은 인사권 범위에 속하지만 통근 거리가 본인 생활기반을 본질적으로 침해하면 업무상 필요성과의 비교형량에서 권리남용으로 평가될 여지가 있습니다. 무효인 전직 명령에 응하지 않은 행위를 징계 사유로 삼을 수 없다는 것이 법원 입장이며, 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '원거리 이전 거부 해고의 핵심 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조와 전직 법리를 종합하면 아래 4가지 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무상 필요성의 객관성</strong> — 사업장 이전이 경영상 필요인지, 특정 근로자를 정리하기 위한 명목 이전인지 정황을 평가합니다.</li>\n<li><strong>② 생활상 불이익의 본질성</strong> — 통근 시간이 비합리적으로 길거나 가족 부양·간병 등 본질적 생활기반 침해가 인정되면 권리남용 정황입니다.</li>\n<li><strong>③ 본인과의 협의 절차</strong> — 사전 협의·통근 지원·이주 비용 등 합리적 대안 제시가 있었는지 신의칙 절차를 점검합니다.</li>\n<li><strong>④ 무효 전직 = 해고 사유 불성립</strong> — 전직 명령 자체가 무효면 그 명령에 응하지 않은 행위를 징계·해고 사유로 삼을 수 없다는 것이 확립된 법리입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4번 무효 전직 = 해고 사유 불성립 법리가 가장 강력한 안전장치이므로, ①~③을 입증해 전직 명령 자체의 무효를 다투면 해고도 함께 흔들리는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이전 통보·전직 명령 보존</strong> (즉시) — 이전 안내문, 전직 명령서, 신규 근무지 주소·통근 거리·소요 시간 자료.</li>\n<li><strong>2단계 — 생활상 불이익 입증 자료 수집</strong> — 가족 거주지·자녀 등하원·간병 사실·임차 계약 등 생활기반 자료.</li>\n<li><strong>3단계 — 회사에 협의 요청·내용증명 발송</strong> — 통근 곤란 호소·대안(원격근무·이주 지원·근무지 조정) 요청을 서면으로.</li>\n<li><strong>4단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 입증자료 각 2부.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업장 원거리 이전 거부 사안에서 입증 자료와 청구 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">전직 무효 + 거부 해고 정당성 부재 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>이전 안내문·전직 명령서</strong> — 시점·신규 주소·이전 사유 기재 여부.</li>\n<li><strong>근로계약서·취업규칙</strong> — 근무 장소 약정, 전직 가능 범위, 이주 지원 규정.</li>\n<li><strong>거주지·통근 자료</strong> — 본인 주민등록상 주소, 가족 거주지, 신규 근무지까지의 거리·소요 시간 (지도·교통 자료).</li>\n<li><strong>가족 부양·간병 자료</strong> — 자녀 학교·어린이집, 간병 진단서, 부모 의료 기록 등 생활기반 자료.</li>\n<li><strong>회사와 주고받은 협의·내용증명</strong> — 통근 곤란 호소, 대안 요청, 회사 회신.</li>\n<li><strong>해고통보서·사유서</strong> — 해고 사유와 거부 행위 인용 부분.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 사업장에서 다른 근로자에게는 통근버스·이주비를 지원했는데 본인에게는 안내가 없었다면 차별 정황으로 평가될 여지가 있어 동료 자료까지 함께 모으는 것이 좋습니다.</blockquote>',
      },
      {
        title: '회사가 "전직은 인사권 범위"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">인사권 주장은 비교형량·협의 절차·대안 검토 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>업무상 필요성과 생활상 불이익 비교형량</strong> — 회사 측 필요성보다 본인이 입는 생활상 불이익이 크다면 권리남용 정황입니다.</li>\n<li><strong>협의 부재 정황</strong> — 일방 통보로 즉시 시행했는지, 사전 면담·대안 협의 절차를 거쳤는지가 핵심 평가 요소입니다.</li>\n<li><strong>대안 검토 의무</strong> — 원격근무·기존 근무지 잔류·이주 지원 등 대안을 검토하지 않았다면 비례성 위반 정황입니다.</li>\n<li><strong>차별 정황</strong> — 같은 부서에서 누구는 잔류·누구는 원거리 발령 같은 불공정 인사 패턴은 정당성에 영향을 줍니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 "출근 의사 부재"를 별도 사유로 들 가능성이 있어, 거부와 동시에 출근 의사·대안 요청을 서면으로 명확히 표시해두는 것이 출근 거부 단정 위험을 줄여줍니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 무효 전보 명령에 불응한 행위와 징계 사유',
        summary:
          '대법원 93다51263 사건(대법원, 1995.05.09 선고)에서 법원은 좌측 대퇴부가 절단된 장애 근로자가 인천에서 서울로의 근무지 변경 전보 명령을 받아 출퇴근 시간이 늘 뿐 아니라 정상인과 달리 육체적으로 감내하기 어려운데, 회사가 전보의 업무상 필요성을 구체적으로 주장·입증하지 않은 사안에서 전보 명령이 무효이며, 무효인 전보 명령에 응하지 아니한 행위를 징계 사유로 삼을 수 없다고 판시했습니다. 전직 정당성은 업무상 필요성과 근로자 생활상 불이익의 비교형량 + 본인과의 협의 등 신의칙상 절차로 결정된다고 명시했습니다.',
        takeaway: '원거리 이전·전직 명령에 따르지 않은 것을 사유로 한 해고는 전직 명령 자체의 무효 여부부터 점검할 필요가 있고, 생활상 불이익과 협의 절차 부재가 입증되면 다툴 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '몇 km 이상부터 통근 곤란으로 인정되나요?',
        answer:
          '<strong>거리 자체보다 통근 시간·생활기반 침해 정도를 종합 평가합니다.</strong> 일반적으로 편도 2시간 이상, 가족 부양·간병 책임이 결합되면 본질적 불이익으로 평가될 여지가 있습니다.',
      },
      {
        question: '근로계약서에 "회사가 정하는 곳에 근무"로 적혀 있어요. 그래도 거부할 수 있나요?',
        answer:
          '<strong>포괄적 근무지 약정이 있어도 무한정 인사권을 인정하지는 않습니다.</strong> 비교형량·협의 절차·대안 검토에서 권리남용이 인정되는 사례가 있습니다.',
      },
      {
        question: '이주 지원금을 제시받았는데도 거부했어요. 불리해지나요?',
        answer:
          '<strong>지원금 제시 자체로 정당성이 무조건 인정되지는 않습니다.</strong> 지원 수준이 실제 이주 비용·생활기반 침해를 합리적으로 보전하는지 별도 평가됩니다.',
      },
      {
        question: '동료들은 다 따라갔는데 저만 거부했어요. 차별 주장이 가능한가요?',
        answer:
          '<strong>본인 사정이 객관적으로 다르다면 동료 추종이 거부의 부당성 근거가 되지는 않습니다.</strong> 가족·간병·건강 등 본인 사정의 본질성을 입증하는 것이 우선입니다.',
      },
      {
        question: '인용되면 신규 사업장이 아니라 기존 근무지로 복직되나요?',
        answer:
          '<strong>전직 명령이 무효면 종전 근무지에서의 근로관계가 유지된 것으로 평가됩니다.</strong> 다만 사업장 폐쇄 시에는 회사 측 사정에 따라 합의 단계에서 조정되는 사례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '인사이동 거부 후 해고 무효', href: '/guide/dismissal/dismissal-relocation-refused-then-fired' },
      { label: '병가·휴직 중 해고 다툼', href: '/guide/dismissal/dismissal-during-sick-leave' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '경고 없이 즉시 해고 무효', href: '/guide/dismissal/dismissal-no-warning-immediate-fire' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
    ],
  },

  // ─── 5. dismissal / dismissal-employee-security-leak-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-employee-security-leak-fired',
    keyword: '영업비밀 유출 의심 해고',
    questionKeyword: '영업비밀·보안서약 위반 의심으로 해고됐어요. 어떻게 다투나요?',
    ctaKeyword: '영업비밀 의심 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '영업비밀 유출 의심 해고 다투는 4가지 핵심 방어 | 로앤가이드',
      description:
        '영업비밀·보안서약 위반 의심으로 해고됐다면 위반 사실 인과관계·고의·근로자 방어 4가지 핵심 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"\'외부에 회사 자료를 유출했다는 의심이 있다\'며 해고 통보를 받았어요. 정작 어떤 자료가 어떻게 유출됐는지 구체적으로 알려주지 않고 형사 고발도 같이 하겠다고 합니다. 의심만으로 해고가 가능한지, 어디부터 다퉈야 할지 막막합니다." 영업비밀·보안서약 위반 해고는 비위 사실의 구체성·인과관계·고의·소명기회 등 일반 징계해고 법리와 동일한 엄격한 입증을 사용자가 부담합니다. 의심·정황 수준의 입증으로는 부족한 사례가 다수 있고, 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 영업비밀 의심 해고에서 점검할 4가지 핵심 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·민사·노동법 영역이 결합된 사안이라 아래 4가지 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 영업비밀 해당성</strong> — 회사가 든 자료가 부정경쟁방지법상 영업비밀(비공지성·경제적 가치·합리적 비밀관리 노력) 요건을 충족하는지 점검합니다.</li>\n<li><strong>② 위반 사실의 구체적 입증</strong> — "의심"·"정황"이 아니라 누가·언제·어떤 자료를·어떤 경로로 유출했는지 사용자가 구체적으로 입증해야 합니다.</li>\n<li><strong>③ 고의·과실 평가</strong> — 우연한 메일 첨부, 평소 업무 자료 반출 등 고의가 결여된 사안은 비위 인정의 정도가 약해질 수 있습니다.</li>\n<li><strong>④ 소명기회·서면통지</strong> — 취업규칙상 징계 절차·소명기회·서면통지 요건을 충족했는지 절차 하자도 함께 점검합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ②번 위반 사실 구체성과 ③번 고의 평가가 함께 다퉈지면 형사 무혐의·증거 불충분과 연결되어 노동위 단계에서도 정당성 결격으로 평가될 여지가 큽니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·노동위 트랙이 동시에 진행되는 경우가 많아 시간순 정리가 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통보서·해고사유서 확보</strong> (즉시) — 회사가 든 사유의 구체성, 인용된 자료 항목, 형사 고발 여부 확인.</li>\n<li><strong>2단계 — 보안서약·취업규칙 점검</strong> — 본인이 서명한 비밀유지 약정, 영업비밀 정의, 위반 시 처분 범위 확인.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 형사 결과를 기다리지 말고 시한 안에 신청. 사업장 소재지 관할 지방노동위에 신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 형사 절차 동시 대응</strong> — 경찰·검찰 조사 시 진술 일관성 유지, 변호인 검토. 형사 무혐의·불기소 결과는 노동위에서 강력한 방어 자료.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액. 공익제보 보호와 결합된 사례에서는 추가 보호 트랙 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">영업비밀 의심 해고에서 형사·노동위 동시 대응 순서를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 위반 사실 부재·고의 부재·절차 하자 세 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·해고사유서·인사위원회 의결서</strong> — 회사가 든 사유의 구체성·인용 자료.</li>\n<li><strong>비밀유지·보안서약서·취업규칙</strong> — 영업비밀 범위·처분 절차·소명 절차 조항.</li>\n<li><strong>업무 자료 반출 정황 자료</strong> — 정상 업무를 위해 자료를 다룬 시점·이메일·승인 기록 (회사 승인하 행위 입증).</li>\n<li><strong>보안 시스템 로그·접속 기록</strong> — 회사 측이 든 정황의 정확성을 다툴 자료 (회신 요구 가능).</li>\n<li><strong>소명서·해고 면담 녹음</strong> — 본인 주장과 회사 측 발언 보존.</li>\n<li><strong>형사 진술서·변호인 의견서</strong> — 형사 트랙 진행 시 동기·고의 부재 입증 자료.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 본인 PC·메일·스마트폰을 회수하기 전에 본인 업무 이력·정상 자료 사용 정황 캡처를 미리 확보해두면 사후 다툼에 유리합니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "유출 정황만으로 신뢰 파탄"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 신뢰 파탄 주장은 비위 입증 책임·인과관계·고의 측면에서 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>입증 책임 부담</strong> — 비위 사실은 사용자가 구체적으로 입증해야 하며, 의심 정황만으로 신뢰 파탄을 단정하기 어려운 사례가 있습니다.</li>\n<li><strong>형사 결과의 영향</strong> — 형사 무혐의·증거 불충분 결정이 나오면 노동위 단계에서 매우 강력한 방어 자료가 되는 사례가 있습니다.</li>\n<li><strong>업무상 정상 사용과의 구분</strong> — 평소 업무 수행을 위해 자료를 다룬 행위가 사후적으로 위반으로 분류되는 경우 정상 사용과의 구분이 핵심 다툼이 됩니다.</li>\n<li><strong>비례성 평가</strong> — 비위가 일부 인정되더라도 곧바로 해고로 간 경우 견책·감봉 등 중간 단계 부재가 비례성 위반 정황이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 형사 절차에서 진술이 노동위 자료로 연결될 수 있어, 형사 진술 전 변호인과 일관된 방어 라인을 정한 뒤 진술하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보안문서 관련 해킹과 징계사유의 구체적 인정 범위',
        summary:
          '서울행정법원 2016구합67219 사건(서울행정법원, 2017.08.17 선고)에서 법원은 회사가 두 명의 근로자에게 보안문서 불법 해킹을 사유로 징계해고한 사안에서, 한 근로자(참가인 2)는 정보통신망법 위반(정보통신망 침해)으로 형사 유죄(벌금 300만원)가 확정돼 징계사유가 인정된 반면, 다른 근로자(참가인 1)는 부정한 수단·방법으로 비밀을 취득했다거나 그 비밀이 부정한 수단·방법으로 취득됐음을 알고 있었다고 보기 어려워 형사 무죄가 선고된 사안에서 징계사유 인정에 차이를 둔 사례를 다뤘습니다. 영업비밀·보안 위반 사안에서 형사 결과와 징계 인정의 연동, 위반 사실의 구체적 입증이 정당성 평가에 직접 영향을 준다는 취지입니다.',
        takeaway: '영업비밀·보안 위반 의심 해고는 형사 결과·위반 사실의 구체적 입증·고의 평가가 결합되어 다뤄지므로, 형사 트랙과 노동위 트랙의 일관된 방어를 함께 준비하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '회사가 형사 고발만 하고 아직 결과가 안 나왔어요. 노동위 구제신청을 미뤄도 되나요?',
        answer:
          '<strong>미루면 위험합니다.</strong> 노동위 구제신청은 해고일 3개월 시한이 절대적이라 형사 결과를 기다리다가 시한 도과 위험이 큽니다. 시한 안에 먼저 신청하는 것이 안전합니다.',
      },
      {
        question: '평소 업무에 사용하던 자료가 나중에 영업비밀로 분류된 경우도 위반인가요?',
        answer:
          '<strong>업무상 정상 사용과 영업비밀 위반은 구분되어야 합니다.</strong> 회사 승인 하에 사용했거나 보안 시스템상 접근이 가능했던 자료라면 위반 자체가 부정될 여지가 있습니다.',
      },
      {
        question: '집 PC·개인 메일에 회사 자료가 남아 있는 것만으로도 해고 사유가 되나요?',
        answer:
          '<strong>잔존 사실만으로 해고 사유 인정은 부족한 사례가 있습니다.</strong> 어떤 경로로 어떻게 유출됐는지, 외부 활용 정황이 있는지, 고의가 있는지를 함께 입증해야 합니다.',
      },
      {
        question: '경쟁사로 이직 준비 중이라는 것만으로 해고가 가능한가요?',
        answer:
          '<strong>이직 준비 자체는 자유로운 직업 선택의 영역이라 곧바로 비위가 되지 않습니다.</strong> 다만 영업비밀 반출이 결합된 정황이 입증되면 별도 다툼 영역이 됩니다.',
      },
      {
        question: '인용되면 형사 사건도 영향이 있나요?',
        answer:
          '<strong>노동위·형사·민사는 트랙이 별개라 자동 연동은 아닙니다.</strong> 다만 노동위 인용은 정황 평가에 유리한 자료로 활용되는 사례가 있고, 형사 무혐의도 노동위에 강력한 방어 자료가 됩니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '경고 없이 즉시 해고 무효', href: '/guide/dismissal/dismissal-no-warning-immediate-fire' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '동료 갈등 명목 해고 다툼', href: '/guide/dismissal/dismissal-coworker-feud-pretext' },
      { label: 'PIP 평가 절차 하자 입증', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
    ],
  },
];
