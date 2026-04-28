import { SpokePage } from '../spoke-pages';

// batch48 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 임신·출산휴가 후 복직을 거부당하거나 사실상 해고된 근로자가 남녀고용평등법 + 근기법 제23조 + 인권위 진정 3트랙으로 다투도록 돕는 페이지다.
// 2. 이 페이지는 회사가 50% 임금삭감을 강요한 뒤 거부했다는 이유로 정리해고된 근로자가 정리해고 4요건과 해고회피 노력 부재로 다투도록 돕는 페이지다.
// 3. 이 페이지는 사내연애가 들통난 뒤 품위훼손·복무규정 위반으로 해고된 근로자가 사생활 영역 침해와 절차 흠결로 다투도록 돕는 페이지다.
// 4. 이 페이지는 계약직 갱신을 거부당한 근로자가 갱신기대권 형성 사실과 합리적 이유 부재 입증책임을 사용자에게 돌리도록 준비하는 페이지다.
// 5. 이 페이지는 비밀유지 위반·영업비밀 누설 의혹으로 해고된 근로자가 영업비밀 범위·고의 입증·비례성 원칙으로 다투도록 돕는 페이지다.

export const spokesBatch48Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-pregnancy-rehire-rejected-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-rehire-rejected-relief',
    keyword: '임신 출산휴가 후 복직 거부',
    questionKeyword: '출산휴가·육아휴직 후 복직을 거부당했어요. 어떻게 다툴 수 있나요?',
    ctaKeyword: '출산 후 복직 거부 구제신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출산휴가 후 복직 거부 5단계 다툼 절차 | 로앤가이드',
      description:
        '출산휴가·육아휴직 종료 후 복직을 거부당했다면 남녀고용평등법과 근로기준법 3트랙으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"출산휴가 끝나고 복귀했더니 자리가 없어졌다고 합니다. 부서가 없어졌다며 먼 지방 사무소로 발령을 내거나, 아예 출근하지 말라는 통보를 받기도 합니다." 남녀고용평등법 제19조는 사용자에게 육아휴직 종료 후 휴직 전과 같은 업무 또는 같은 수준의 임금을 지급하는 직무에 복귀시킬 의무를 규정합니다. 이를 어긴 복직 거부는 사실상 해고에 해당해 부당해고 구제신청 + 인권위 진정 + 고용노동부 진정 3트랙으로 다투는 것이 일반적입니다. 복직 거부일로부터 3개월 이내가 노동위 구제신청 기한이라 시간이 핵심 변수입니다.</p>',
    sections: [
      {
        title: '복직 거부가 부당해고가 되는 경우 — 4가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제19조 제4항·제5항에 따르면 사업주는 육아휴직 후 휴직 전과 같은 업무 또는 같은 수준의 임금을 지급하는 직무로 복귀시켜야 하며, 휴직 기간을 근속기간에 산입해야 합니다.</strong></p>\n<ul>\n<li><strong>원직·동등 직무 미배치</strong> — 복직 신청에도 자리가 없다며 무기한 대기 발령하거나 부서를 일방적으로 폐쇄.</li>\n<li><strong>임금·처우 격하</strong> — 같은 직급이지만 급여·직책수당이 줄어든 자리로 보낸 경우.</li>\n<li><strong>원거리 전보 발령</strong> — 출퇴근이 사실상 불가능한 지방 사업장으로의 일방적 전보.</li>\n<li><strong>자동 면직 처리</strong> — 휴직 만료일 기준 자동 퇴직 처리, 복직 신청 자체를 무시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위 4가지 중 하나라도 해당하면 부당해고 + 차별행위 두 갈래로 다툴 소지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 3트랙 동시 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위·인권위·고용노동부 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 확보</strong> (즉시) — 복직 신청서, 사측 거부·전보 통보 이메일·문자, 휴직 전 근로계약서, 급여명세서.</li>\n<li><strong>2단계 — 노동위 부당해고 구제신청</strong> (복직 거부일 3개월 이내) — 관할 지방노동위원회 접수, 부당해고 + 부당노동행위 동시 신청 가능.</li>\n<li><strong>3단계 — 국가인권위원회 진정</strong> (차별행위일 1년 이내) — 모성보호 차별·성차별 별도 진정.</li>\n<li><strong>4단계 — 고용노동부 진정</strong> (수시) — 남녀고용평등법 제19조·제37조 위반 신고, 사업주 500만원 이하 벌금.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> (3년 시효) — 차별로 인한 정신적 손해 + 일실 임금 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출산휴가 후 복직 거부 사안에서 어느 절차부터 시작할지 AI가 상황별로 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류는 노동위·인권위·고용노동부 모두에 공통으로 필요하므로 사본을 각각 충분히 준비해두는 것이 좋습니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙</strong> — 휴직 전 직무·임금·근무지 조건 확인.</li>\n<li><strong>출산휴가·육아휴직 신청서·승인서</strong> — 휴직 시작·종료일 명시.</li>\n<li><strong>복직 신청서·접수 증빙</strong> — 사내 메일·인사팀 확인 회신.</li>\n<li><strong>사측 거부·전보 통보</strong> — 이메일·카카오톡·서면 모두 보존.</li>\n<li><strong>급여명세서 (휴직 직전 6개월)</strong> — 임금 격하 여부 비교.</li>\n<li><strong>인사 이동·조직개편 발표문</strong> — 부서 폐지·조직개편 정황 자료.</li>\n<li><strong>동료 진술서</strong> — 휴직 중 후임자 충원 여부 확인.</li>\n<li><strong>주민등록등본·가족관계증명서</strong> — 자녀 양육 사실 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대화 녹음은 본인이 참여한 통화면 합법이며 노동위·법원에서 증거로 채택됩니다.</blockquote>',
      },
      {
        title: '회사가 "조직개편으로 부서가 없어졌다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">조직개편 자체가 정당해도 동등 직무 배치 의무는 면제되지 않습니다.</strong></p>\n<ul>\n<li><strong>동등 직무 탐색 의무</strong> — 부서가 없어졌더라도 사내 전체에서 동등한 임금·직책의 직무를 찾아 배치해야 합니다.</li>\n<li><strong>해고회피 노력 의무</strong> — 정리해고 절차를 거치지 않고 단순 부서 폐쇄로 사직 압박은 정당화되지 않습니다.</li>\n<li><strong>복직 직전 조직개편 의심</strong> — 복직 시점에 맞춰 부서가 없어졌다면 보복적 의도 정황으로 다툴 수 있습니다.</li>\n<li><strong>휴직 중 후임자 충원 여부</strong> — 휴직 기간 중 후임자가 정규직으로 채용됐다면 복직 의무 회피 정황으로 활용 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사용자가 "복직했지만 다른 자리"를 제시했어도 임금·직책이 격하됐다면 거부하고 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업주의 일·가정 양립 배려의무와 시용 본채용 거부',
        summary:
          '대법원 2019두59349 사건(대법원, 2023.11.16 선고)에서 법원은 사업주가 만 8세 이하 또는 초등학교 2학년 이하의 자녀를 양육하는 근로자의 일·가정 양립을 지원할 배려의무를 부담하며, 시용기간 만료 시 본채용을 거부하는 경우에도 그 사유가 객관적·합리적이고 사회통념상 상당해야 한다고 판시했습니다. 양육자에 대한 배려의무를 다하지 않은 채 본채용을 거부한 처분은 위법하다고 본 사례입니다.',
        takeaway: '출산·육아 사실을 이유로 한 복직 거부·본채용 거부는 배려의무 위반으로 다툴 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '출산휴가 90일과 육아휴직 1년을 모두 사용했는데 복직 의무가 그대로 유지되나요?',
        answer:
          '<strong>유지됩니다.</strong> 남녀고용평등법 제19조 제4항은 휴직 기간 길이와 무관하게 휴직 전과 같은 업무 또는 같은 수준의 임금을 지급하는 직무로 복귀시킬 의무를 규정합니다.',
      },
      {
        question: '회사가 복직 신청에 응답을 안 하면 어떻게 해야 하나요?',
        answer:
          '<strong>내용증명으로 복직 신청서를 발송한 뒤 정해진 회신 기한이 지나면 복직 거부로 간주해 노동위에 구제신청할 수 있습니다.</strong> 응답 부재 자체가 부당해고 정황이 됩니다.',
      },
      {
        question: '복직 후 임금만 줄였다면 부당해고가 아니지 않나요?',
        answer:
          '<strong>임금이나 직책 격하는 그 자체로 차별행위·불이익 처우에 해당할 소지가 있습니다.</strong> 부당해고가 아니더라도 남녀고용평등법 위반 + 손해배상 청구로 다툴 수 있습니다.',
      },
      {
        question: '인권위가 차별로 인정하면 복직이 강제되나요?',
        answer:
          '<strong>인권위는 권고 기관으로 직접 강제력은 없습니다.</strong> 다만 인권위 권고는 노동위·법원에서 유력한 참고자료가 되어 부당해고 인정에 큰 영향을 줍니다.',
      },
      {
        question: '소규모 5인 미만 사업장도 보호되나요?',
        answer:
          '<strong>남녀고용평등법은 5인 미만 사업장에도 일부 조항이 적용됩니다.</strong> 다만 부당해고 구제신청은 5인 이상 사업장에 한정되니 인권위·고용노동부 트랙을 중심으로 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '경영상 임금삭감 거부 후 정리해고', href: '/guide/dismissal/dismissal-economic-layoff-paycut-refusal' },
      { label: '출산휴가 중 해고 보호', href: '/guide/dismissal/dismissal-maternity-return-fired' },
      { label: '육아휴직 후 해고 다툼', href: '/guide/dismissal/dismissal-parental-leave-fired' },
      { label: '임신 보호 부당해고 구제', href: '/guide/dismissal/dismissal-pregnancy-protection' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 2. dismissal / dismissal-economic-layoff-paycut-refusal ───
  {
    domain: 'dismissal',
    slug: 'dismissal-economic-layoff-paycut-refusal',
    keyword: '임금삭감 거부 후 정리해고',
    questionKeyword: '회사가 50% 임금삭감을 요구해서 거부했더니 정리해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '경영상 정리해고 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임금삭감 거부 후 정리해고 4요건 다툼 가이드 | 로앤가이드',
      description:
        '50% 임금삭감을 거부한 뒤 정리해고됐다면 정리해고 4요건과 해고회피 노력 부재로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"갑자기 회사가 경영난을 이유로 50% 임금삭감 동의서를 돌렸어요. 못 받아들인다고 하니 며칠 뒤 정리해고 통보가 왔습니다." 근로기준법 제24조는 정리해고 시 ① 긴박한 경영상 필요, ② 해고회피 노력, ③ 합리적·공정한 대상자 선정, ④ 근로자대표와의 50일 전 성실한 협의 4가지를 모두 충족할 것을 요구합니다. 임금삭감 거부를 이유로 한 사실상의 보복 정리해고는 4요건 중 어느 하나가 어긋날 가능성이 큽니다. 해고일 3개월 이내 노동위 구제신청이 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 정리해고 4요건이란 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로기준법 제24조에 따라 사용자가 경영상 이유로 해고하려면 아래 4가지 요건을 모두 충족해야 합니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 도산 회피·재무 악화 회피 등 객관적 자료로 입증해야 하며, 장래에 올 위기에 대비한 경우도 포함되나 객관적 합리성이 인정되어야 합니다.</li>\n<li><strong>② 해고회피 노력</strong> — 임금동결·휴직·전환배치·희망퇴직 등 해고 이외 수단을 먼저 시도했는지.</li>\n<li><strong>③ 합리적·공정한 대상자 선정</strong> — 객관적 기준에 따라 차별 없이 대상자를 선정했는지.</li>\n<li><strong>④ 근로자대표와의 50일 전 성실 협의</strong> — 사전 통보·협의 절차를 지켰는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4가지 중 하나라도 결여되면 정리해고는 무효가 되어 부당해고로 다툴 소지가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 임금삭감 거부 → 정리해고는 어떻게 다투나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4요건 중 ②~④번 절차 흠결을 집중 공략하는 것이 일반적인 다툼 전략입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동의서 거부 정황 보존</strong> — 임금삭감 동의서, 거부 의사 회신, 회사 회신 모두 보존.</li>\n<li><strong>2단계 — 해고회피 노력 부재 입증</strong> — 임금동결·희망퇴직·전환배치 시도가 없었음을 보여주는 자료.</li>\n<li><strong>3단계 — 50일 협의 미이행 확인</strong> — 근로자대표 통보 일자, 협의록 부재 여부 점검.</li>\n<li><strong>4단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 정리해고 무효 + 부당해고 동시 신청.</li>\n<li><strong>5단계 — 회사 재무자료 요구</strong> — 노동위 조사 단계에서 긴박한 경영상 필요의 객관적 자료 제출 요구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정리해고 4요건 중 어느 부분을 집중 공략할지 AI가 상황별로 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "동의 안 한 사람만 해고했다"라고 하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의 거부를 이유로 한 선별적 해고는 합리적·공정 기준에 위배될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>임금삭감 동의는 자유의사</strong> — 근로조건 변경에 대한 동의는 강요할 수 없으며, 거부 자체가 징계·해고 사유가 될 수 없습니다.</li>\n<li><strong>대상자 선정 기준 공개 요구</strong> — 노동위 조사에서 대상자 선정 기준표·근거 자료를 회사에 요구할 수 있습니다.</li>\n<li><strong>근속·실적과의 무관성</strong> — 근속이 길고 실적이 우수한데도 해고됐다면 동의 거부 보복 정황 입증 자료가 됩니다.</li>\n<li><strong>비교 대상 동료</strong> — 동의한 동료는 유지되고 거부한 본인만 해고됐다면 차별적 처우로 다툴 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동의서 회수 과정에서 회사가 "거부하면 정리해고 대상이 될 수 있다"는 식의 발언을 했다면 협박성 정황으로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 구제 인용 시 어떤 결과를 얻을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정리해고가 무효로 인정되면 원직복직과 임금상당액 지급이 동시에 명령됩니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 해고 전 동일 직무·동일 처우로 복귀.</li>\n<li><strong>임금상당액 지급</strong> — 해고일부터 복직일까지 못 받은 임금 전액.</li>\n<li><strong>금전보상명령 대안</strong> — 회사 규모 축소로 사실상 복직 불가 시 6~12개월치 보상으로 갈음 신청 가능.</li>\n<li><strong>이행강제금</strong> — 사용자가 복직 명령을 미이행할 경우 1회 최대 3,000만원 부과.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재심은 판정서 송달 10일, 행정소송은 재심판정 송달 15일 이내 — 기한이 매우 짧습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 4요건 중 해고회피 노력의 의미',
        summary:
          '대법원 2018두44647 사건(대법원, 2019.11.28 선고)에서 법원은 정리해고의 요건 중 "긴박한 경영상의 필요"에는 장래에 올 수도 있는 위기에 미리 대처하기 위한 인원삭감도 포함되나 객관적 합리성이 인정되어야 하며, "해고를 피하기 위한 노력"은 경영방침이나 작업방식의 합리화·신규채용 금지·일시휴직 및 희망퇴직 활용 등 사용자가 가능한 모든 노력을 다해야 한다는 의미라고 판시했습니다.',
        takeaway: '임금삭감 동의를 거부한 근로자만 골라 해고하면서 다른 해고회피 수단을 시도하지 않았다면 정리해고는 무효로 다툴 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "노조와 협의했다"고 하는데 그래도 다툴 수 있나요?',
        answer:
          '<strong>협의 형식만 갖췄을 뿐 성실 협의가 아니었다면 다툴 수 있습니다.</strong> 협의록의 구체적 내용·횟수·근로자대표의 의견 반영 여부를 노동위에서 검증합니다.',
      },
      {
        question: '50일 사전 통보가 안 됐는데 그것만으로도 무효가 되나요?',
        answer:
          '<strong>50일 통보 미이행은 정리해고 4요건 중 하나의 흠결로 무효 사유가 될 수 있습니다.</strong> 다만 다른 요건이 모두 충족됐다면 절차 흠결만으로 무효 인정이 어려운 사례도 있어 종합 검토가 필요합니다.',
      },
      {
        question: '회사가 흑자인데도 정리해고가 가능한가요?',
        answer:
          '<strong>장래 위기 대비를 이유로 한 정리해고도 인정될 수 있습니다.</strong> 그러나 객관적 합리성이 입증되어야 하며, 단순히 이익률 개선을 위한 정리해고는 무효로 다툴 소지가 있습니다.',
      },
      {
        question: '희망퇴직금 받고 나갔는데 부당해고로 다툴 수 있나요?',
        answer:
          '<strong>강요된 희망퇴직은 사실상 해고로 보아 다툴 수 있습니다.</strong> 희망퇴직 동의 과정에서 협박·기망이 있었다면 동의 효력 자체를 다투는 방법을 검토해볼 수 있습니다.',
      },
      {
        question: '정리해고 후 회사가 신규 채용을 하면 어떻게 되나요?',
        answer:
          '<strong>해고 후 일정 기간 내 동일 업무에 신규 채용 시 우선재고용 의무가 적용됩니다.</strong> 근로기준법 제25조에 따라 해고된 근로자에게 우선 채용 기회를 주어야 합니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '출산휴가 후 복직 거부 다툼', href: '/guide/dismissal/dismissal-pregnancy-rehire-rejected-relief' },
      { label: '경영상 정리해고 기준 다툼', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '사업장 폐쇄 정리해고 다툼', href: '/guide/dismissal/dismissal-workplace-closure-layoff' },
      { label: '권고사직 함정 회피 가이드', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 3. dismissal / dismissal-office-romance-fired-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-office-romance-fired-relief',
    keyword: '사내연애 들통 후 해고',
    questionKeyword: '사내연애가 알려진 뒤 품위훼손으로 해고됐어요. 부당해고로 다툴 수 있나요?',
    ctaKeyword: '사내연애 해고 구제신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사내연애 들통 해고 5단계 다툼 절차 | 로앤가이드',
      description:
        '사내연애 사실이 알려진 뒤 품위훼손·복무규정 위반으로 해고됐다면 사생활 영역과 비례성 원칙으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서 동료와 1년 넘게 만났는데 어느 날 인사팀에 알려져 곧바로 해고 통보를 받았습니다." 사내연애가 회사 업무에 직접 지장을 주거나 비위를 동반하지 않는 한, 단순한 교제 사실만으로 해고하는 것은 정당한 이유 요건을 충족하기 어렵습니다. 헌법 제17조 사생활의 비밀과 자유, 근로기준법 제23조 정당한 이유 요건이 함께 적용되며, 징계처분 절차의 흠결까지 결합하면 다툼 가능성이 더 커집니다. 해고일 3개월 이내 노동위 구제신청이 핵심 기한입니다.</p>',
    sections: [
      {
        title: '사내연애 해고가 부당한 경우 — 4가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 기준 중 하나라도 어긋나면 해고는 정당한 이유 요건을 충족하지 못한 것으로 다툴 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>업무 지장 부재</strong> — 교제가 업무 처리에 실제 지장을 주지 않았다면 해고 사유로 보기 어렵습니다.</li>\n<li><strong>취업규칙 명문 부재</strong> — 사내연애를 명시적으로 금지한 취업규칙 조항이 없다면 단순 교제는 징계사유가 아닙니다.</li>\n<li><strong>비례성 원칙 위반</strong> — 견책·감봉 등 경징계 대신 곧바로 해고는 비례성 원칙에 어긋납니다.</li>\n<li><strong>차별적 적용</strong> — 같은 사내커플 중 본인만 징계됐거나, 한쪽 성별만 처벌됐다면 차별 정황입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사내연애에 부적절한 업무상 지위 활용·기밀 누출이 동반되지 않았다면 단순 교제만으로의 해고는 다툴 소지가 큽니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계 핵심',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존</strong> (즉시) — 해고 통보서, 인사팀 면담 녹음, 징계위원회 통지문, 취업규칙·복무규정 사본.</li>\n<li><strong>2단계 — 징계절차 흠결 확인</strong> — 징계위원회 사전 통지·소명 기회·재심 절차가 모두 보장됐는지 점검.</li>\n<li><strong>3단계 — 노동위 구제신청 접수</strong> (해고일 3개월 이내) — 관할 지방노동위원회에 부당해고 구제신청서 제출.</li>\n<li><strong>4단계 — 신청이유서 작성</strong> — 사생활 영역 침해 + 비례성 원칙 위반 + 절차 흠결 3축으로 구성.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수 60일 이내) — 부당해고 인정 시 원직복직 + 임금상당액, 또는 금전보상명령.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내연애 해고 사안의 절차 흠결과 사생활 영역 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류를 빠짐없이 확보해두는 것이 다툼의 출발점입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·징계처분서</strong> — 해고 사유 기재 내용 (취업규칙 어느 조항 인용했는지 핵심).</li>\n<li><strong>취업규칙·복무규정 전문</strong> — 사내연애 금지·품위훼손 조항 명시 여부 확인.</li>\n<li><strong>징계위원회 통지·회의록</strong> — 사전 통지 7일·소명 기회·재심 통지 절차 흠결 점검.</li>\n<li><strong>업무 평가·근태 기록</strong> — 사내연애가 업무에 지장을 주지 않았다는 정황 자료.</li>\n<li><strong>인사팀 면담 녹음·메일</strong> — 본인 참여 통화 녹음은 합법, 위협·사직 강요 정황 보존.</li>\n<li><strong>동료 진술서</strong> — 사내커플 다른 사례 처분과 비교 가능한 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 회사에서 다른 사내커플은 징계받지 않았다는 사실은 차별적 처우 입증의 핵심 증거입니다.</blockquote>',
      },
      {
        title: '회사가 "복무규정상 품위훼손이다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">품위훼손 조항이 사내연애에 그대로 적용되는지는 별개의 문제입니다.</strong></p>\n<ul>\n<li><strong>품위훼손의 사회통념적 범위</strong> — 사회통념상 비위·부도덕·범죄에 준하는 행위로 좁게 해석하는 것이 일반적이며, 단순 교제는 포함되기 어렵습니다.</li>\n<li><strong>평등 적용 의무</strong> — 다른 사내커플에게 동일 잣대를 적용하지 않았다면 차별로 다툴 수 있습니다.</li>\n<li><strong>경징계부터 시작 원칙</strong> — 견책·경고·감봉·정직 등 단계적 징계 없이 곧바로 해고는 비례성 원칙 위반입니다.</li>\n<li><strong>재심절차 흠결</strong> — 징계처분에 대해 재심절차를 전혀 거치지 않았다면 그것 자체로 무효 사유가 될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사내연애가 직장 내 성희롱·갑질·기밀누설과 결합된 경우엔 별개로 정당한 해고 사유로 인정될 수 있어 사실관계 정리가 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재심절차 하자가 있는 징계처분의 효력',
        summary:
          '대법원 2017두70793 사건(대법원, 2020.11.26 선고)에서 법원은 원래의 징계처분이 요건을 갖추었더라도 재심절차를 전혀 이행하지 않거나 재심절차에 중대한 하자가 있어 재심의 효력을 인정할 수 없는 경우 그 징계처분은 무효라고 판시했습니다. 단체협약·취업규칙·징계규정에서 징계위원회 구성과 절차를 정하고 있다면 이를 위반한 징계는 정당성을 잃습니다.',
        takeaway: '사내연애 해고에서 재심절차가 누락됐거나 징계위원회 구성에 흠결이 있다면 그 자체로 무효를 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 "사내연애 금지" 조항이 있어도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 사내연애 금지 자체가 헌법 제17조 사생활의 비밀과 자유에 어긋나므로 조항 자체의 유효성을 다툴 여지가 있고, 비례성 원칙 위반으로도 별도 다툴 수 있습니다.',
      },
      {
        question: '한쪽이 상사고 한쪽이 부하인 사내연애도 보호되나요?',
        answer:
          '<strong>지위 활용이나 강요 정황이 없다면 단순 교제로 보호 가능합니다.</strong> 다만 인사평가·승진 결정에 영향을 미친 정황이 있다면 별개로 부적절한 직무수행으로 평가될 수 있습니다.',
      },
      {
        question: '회사가 "이미지 실추"를 이유로 들면 어떻게 되나요?',
        answer:
          '<strong>구체적 이미지 실추 결과를 입증해야 사용자가 부담합니다.</strong> 막연한 추상적 우려만으로는 정당한 이유로 인정받기 어렵습니다.',
      },
      {
        question: '구두로만 해고 통보를 받았는데 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 근로기준법 제27조에 따라 해고 사유와 시기를 서면으로 통지하지 않은 해고는 그 자체로 효력이 없으며, 별도 무효 사유가 됩니다.',
      },
      {
        question: '복직보다 합의금이 더 좋다면 어떻게 해야 하나요?',
        answer:
          '<strong>금전보상명령을 신청하는 방법을 검토해볼 수 있습니다.</strong> 복직이 사실상 어려운 사정이 있다면 6~12개월치 임금 상당액을 보상금으로 청구할 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '계약직 갱신거부 기대권 다툼', href: '/guide/dismissal/dismissal-contract-renewal-expectation-relief' },
      { label: '징계 사유 비례성 원칙 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '징계위원회 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '구두 해고 서면 미통지 무효', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 4. dismissal / dismissal-contract-renewal-expectation-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-contract-renewal-expectation-relief',
    keyword: '계약직 갱신거부 갱신기대권',
    questionKeyword: '계약직인데 3년째 자동갱신되다가 갑자기 갱신거부됐어요. 다툴 수 있나요?',
    ctaKeyword: '갱신거부 구제신청 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '계약직 갱신거부 5가지 기대권 다툼 가이드 | 로앤가이드',
      description:
        '계약직 갱신을 거부당했다면 갱신기대권 형성 사실과 합리적 이유 부재로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 동안 1년 단위로 계약을 갱신해왔는데 갑자기 더 이상 갱신할 수 없다는 통보를 받았습니다." 기간제 근로계약이 형식상 만료되더라도, 갱신을 정당하게 기대할 수 있는 사정이 형성되어 있다면 사용자의 합리적 이유 없는 갱신거부는 부당해고에 해당할 수 있습니다. 합리적 이유의 입증책임은 사용자에게 있으며, 갱신기대권이 인정되면 본인은 갱신기대 형성 사실만 보이면 됩니다. 갱신거부 통보일로부터 3개월이 노동위 구제신청 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 갱신기대권은 어떤 경우에 형성되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 정황이 결합되면 갱신기대권이 형성된 것으로 평가됩니다.</strong></p>\n<ul>\n<li><strong>반복 갱신 관행</strong> — 3년 이상 매년 자동 갱신되어 왔다면 갱신기대 정황이 강합니다.</li>\n<li><strong>갱신 절차 형식성</strong> — 계약 종료 시 별도 평가 없이 자동 연장되어 왔다면 갱신 의무처럼 운영된 것입니다.</li>\n<li><strong>업무 계속성</strong> — 동일 업무를 계속 수행해왔고 사업이 종료되지 않았다면 갱신을 기대하는 것이 자연스럽습니다.</li>\n<li><strong>회사 안내·관행</strong> — 면접 시 "장기 근무" 가능성을 안내받았거나 사내 안내문에 정규직 전환 경로가 있었다면 기대권 형성 자료입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갱신기대권 형성 사실이 입증되면 사용자가 거부의 합리적 이유를 입증해야 하므로 본인 부담이 크게 줄어듭니다.</blockquote>',
      },
      {
        title: 'Q. 합리적 이유 입증책임은 누구에게 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신기대권이 인정되면 합리적 이유 입증책임은 사용자에게 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갱신기대권 형성 입증</strong> (본인) — 반복 갱신 관행·업무 계속성·자동 갱신 절차를 입증.</li>\n<li><strong>2단계 — 합리적 이유 부재 다툼</strong> (사용자 입증책임) — 회사가 "예산 축소·사업 종료·근무성적 불량" 등 합리적 이유를 객관적 자료로 입증해야 합니다.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (갱신거부 통보일 3개월 이내) — 부당해고 구제신청서에 갱신기대권 형성 정황 명시.</li>\n<li><strong>4단계 — 회사 자료 요구</strong> — 노동위 조사 단계에서 인사평가표·예산 자료·후임자 채용 여부 등 자료 제출 요구.</li>\n<li><strong>5단계 — 판정·재심·소송</strong> — 인용 시 원직복직 + 임금상당액, 또는 금전보상명령 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">갱신기대권 형성 정황과 합리적 이유 다툼 포인트를 AI가 상황별로 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "예산 축소"를 이유로 들면 어떻게 다투나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 예산 축소 주장의 객관성·일관성·후속 채용 여부를 집중 점검합니다.</strong></p>\n<ul>\n<li><strong>예산 자료 객관성</strong> — 회사 회계 자료·예산서·이사회 의결 등 객관 자료가 있어야 인정될 수 있습니다. 단순한 주장만으로는 부족합니다.</li>\n<li><strong>다른 직원 처우 비교</strong> — 같은 부서 다른 계약직은 갱신됐다면 예산 축소 주장은 일관성을 잃습니다.</li>\n<li><strong>후임자 채용 여부</strong> — 갱신거부 후 같은 자리에 신규 인원이 채용됐다면 예산 축소 주장은 무력해집니다.</li>\n<li><strong>업무 외주화 정황</strong> — 같은 업무를 용역·파견으로 전환한 경우엔 직접 비용 절감 의도가 입증됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 갱신거부 후 사내·외부 채용 공고를 모니터링해 후임자 채용 정황을 캡처해두세요.</blockquote>',
      },
      {
        title: 'Q. 2년 초과 근무인데 정규직 전환은 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기간제법 제4조에 따라 2년 초과 사용 시 무기계약직(정규직)으로 간주됩니다.</strong></p>\n<ul>\n<li><strong>2년 초과 자동 전환</strong> — 사용자가 의도와 무관하게 법률 효과로 정규직 지위를 가지게 됩니다.</li>\n<li><strong>예외 사유 확인</strong> — 박사·연구개발·고령자·특정 사업 종료 등 예외 사유에 해당하지 않는지 점검.</li>\n<li><strong>중간 공백 조작 금지</strong> — 회사가 1~2개월 공백을 두고 다시 계약하는 방식은 회피 행위로 무효 다툼 가능합니다.</li>\n<li><strong>전환 거부 = 부당해고</strong> — 2년 초과 후 "계약 만료"를 이유로 한 갱신거부는 부당해고에 해당할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 갱신기대권 다툼과 정규직 간주 다툼은 별도 법리이며 동시에 주장 가능하니 두 갈래 모두 검토해보세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신 정당한 기대권과 합리적 이유 증명책임',
        summary:
          '대법원 2021두45114 사건(대법원, 2021.10.28 선고)에서 법원은 근로자에게 이미 형성된 갱신에 대한 정당한 기대권이 있는데도 사용자가 이를 배제하고 근로계약의 갱신을 거절한 데에 합리적 이유가 있는지 판단하는 기준과 그러한 사정에 관한 증명책임이 사용자에게 있다고 판시했습니다. 갱신기대권 형성 사실만 입증되면 합리적 이유 부재의 입증부담은 사용자가 지는 구조입니다.',
        takeaway: '갱신기대권 형성 정황을 모아두면 합리적 이유 입증책임이 사용자에게 넘어가므로 본인 부담이 크게 줄어듭니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 "갱신은 사용자 재량"이라고 적혀 있어도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 갱신기대권은 계약 문언만이 아니라 실제 갱신 관행·업무 계속성 등 종합 사정으로 판단되며, 사용자 재량 조항이 있어도 합리적 이유 없는 거부는 무효로 다툴 수 있습니다.',
      },
      {
        question: '계약 만료 한 달 전에 통보받았는데 형식적 문제는 없나요?',
        answer:
          '<strong>형식 통보 시기보다 갱신거부의 실질적 정당성이 더 중요합니다.</strong> 한 달 전 통보가 있더라도 갱신기대권이 인정되면 합리적 이유 없는 거부는 부당해고로 다툴 수 있습니다.',
      },
      {
        question: '근무평가 점수가 낮아서 갱신거부됐다고 하면?',
        answer:
          '<strong>평가 기준의 객관성·공정성을 다툴 수 있습니다.</strong> 평가가 사후 작성됐거나 비교 가능한 동료의 평가와 큰 차이가 있다면 합리적 이유로 인정받기 어렵습니다.',
      },
      {
        question: '구제 인용되면 정규직으로 복직하나요 계약직으로 복직하나요?',
        answer:
          '<strong>형식상 직전 계약직 지위로 복직하나, 2년 초과 근무라면 동시에 정규직 간주 주장도 가능합니다.</strong> 노동위 결과와 별개로 법원에 정규직 지위 확인 소송을 검토해볼 수 있습니다.',
      },
      {
        question: '갱신거부일과 노동위 신청 시점 사이 다른 직장에 취업해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 다른 직장 취업은 구제신청 권리에 영향이 없으며, 중간 취업 기간의 수입은 임금상당액 산정 시 공제 대상이 될 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '비밀유지 위반 영업비밀 해고', href: '/guide/dismissal/dismissal-confidentiality-trade-secret-relief' },
      { label: '기간제 갱신권 인정 다툼', href: '/guide/dismissal/dismissal-fixed-term-renewal-right' },
      { label: '계약직 부당해고 5요건 확인', href: '/guide/dismissal/dismissal-part-time-unfair' },
      { label: '구두 해고 서면 미통지 무효', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 5. dismissal / dismissal-confidentiality-trade-secret-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-confidentiality-trade-secret-relief',
    keyword: '비밀유지 위반 영업비밀 해고',
    questionKeyword: '거래처 정보 유출 의혹으로 해고됐어요. 영업비밀 해당 여부는 어떻게 다투나요?',
    ctaKeyword: '영업비밀 해고 구제신청 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비밀유지 위반 해고 5단계 영업비밀 다툼 절차 | 로앤가이드',
      description:
        '거래처 정보·자료 유출 의혹으로 해고됐다면 영업비밀 해당 여부와 고의 입증·비례성 원칙으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴사 의사를 밝힌 직후 거래처 정보를 빼돌렸다는 의혹으로 곧바로 징계해고 통보를 받았습니다." 영업비밀 누설을 이유로 한 해고는 ① 정보가 영업비밀에 해당하는지, ② 본인의 고의·중과실이 있었는지, ③ 비례성 원칙에 부합하는지를 모두 충족해야 정당한 이유로 인정될 수 있습니다. 부정경쟁방지법 제2조 제2호의 영업비밀 정의(비공지성·비밀관리성·경제적 가치) 3요건이 핵심 다툼 포인트입니다. 해고일 3개월 이내 노동위 구제신청이 가장 짧은 기한입니다.</p>',
    sections: [
      {
        title: '영업비밀 해고가 정당하려면 — 회사가 입증할 3축',
        content:
          '<p><strong style="color:#1e3a5f">부정경쟁방지법 제2조 제2호의 영업비밀 3요건과 근로기준법 제23조 정당한 이유 요건을 결합하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>① 영업비밀 3요건 충족</strong> — 비공지성(공연히 알려지지 않음) + 비밀관리성(상당한 노력으로 비밀 유지) + 경제적 유용성(독립적 경제 가치).</li>\n<li><strong>② 본인 고의·중과실 입증</strong> — 단순 실수·통상 업무 수행 중 자료 사용은 비밀유지 의무 위반으로 보기 어렵습니다.</li>\n<li><strong>③ 비례성 원칙 부합</strong> — 손해 정도·기여도·과거 징계 이력 대비 해고가 과도하지 않아야 합니다.</li>\n<li><strong>④ 절차 준수</strong> — 징계위원회 사전 통지·소명 기회·재심 절차 모두 보장됐는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4가지 모두 충족해야 정당한 해고로 인정되며, 어느 하나라도 흠결이면 부당해고로 다툴 소지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 + 형사방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위 부당해고 구제신청과 별도로 영업비밀 누설 형사고소가 들어올 수 있어 두 트랙을 동시에 준비합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 증거 보존</strong> — 사용한 자료 다운로드 시점·이유, 업무 메일·메신저, 회사 보안 정책 안내 사본.</li>\n<li><strong>2단계 — 영업비밀 3요건 검토</strong> — 자료가 사내 공유폴더에 누구나 접근 가능했는지(비밀관리성 부재), 업계 일반 정보였는지(비공지성 부재) 점검.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 부당해고 구제신청 + 절차 흠결·비례성 위반 동시 주장.</li>\n<li><strong>4단계 — 형사 방어 준비</strong> — 부정경쟁방지법 위반 고소 시 변호인 선임, 비밀관리성 부재·고의 부재 입증 자료 정리.</li>\n<li><strong>5단계 — 민사 손해배상 대응</strong> — 회사가 손해배상 청구 시 영업비밀 3요건과 인과관계 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">영업비밀 해고에서 노동위·형사·민사 3트랙을 어떻게 준비할지 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류는 노동위·형사사건·민사 3개 절차에 모두 활용되므로 사본을 충분히 준비해두는 것이 좋습니다.</strong></p>\n<ul>\n<li><strong>근로계약서·비밀유지서약서</strong> — 비밀유지 의무 범위, 위반 시 제재 조항 확인.</li>\n<li><strong>취업규칙·사내 보안 정책</strong> — 비밀관리성 입증의 핵심 자료, 사내 공지·교육 자료 포함.</li>\n<li><strong>해고통보서·징계처분서</strong> — 회사가 주장하는 영업비밀 항목과 누설 행위가 명시되어 있는지.</li>\n<li><strong>업무 이메일·메신저 로그</strong> — 자료 사용이 통상 업무 수행이었음을 입증.</li>\n<li><strong>사내 공유폴더 접근권 자료</strong> — 해당 자료가 누구나 접근 가능했다면 비밀관리성 부재 핵심 증거.</li>\n<li><strong>업계 공개 자료 비교</strong> — 회사가 영업비밀이라 주장하는 정보가 업계에서 일반적으로 알려진 정보인지.</li>\n<li><strong>징계위원회 통지·회의록</strong> — 절차 흠결 다툼 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 PC·이메일 자료는 퇴직 후 접근이 차단되므로 해고 통보 직후 확보가 중요합니다 (단, 회사 시스템 무단 접근은 별도 위법이 될 수 있어 변호사 자문 권장).</blockquote>',
      },
      {
        title: '회사가 "거래처 명단도 영업비밀이다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">단순한 거래처 명단이 영업비밀에 해당하는지는 사실관계에 따라 달라집니다.</strong></p>\n<ul>\n<li><strong>비공지성 부재</strong> — 거래처가 업계 공개 정보거나 인터넷 검색으로 확인 가능한 정보면 비공지성이 부정될 수 있습니다.</li>\n<li><strong>비밀관리성 부재</strong> — 사내 공유폴더에 접근권 제한 없이 저장되어 있었다면 비밀관리성을 인정받기 어렵습니다.</li>\n<li><strong>본인 영업 노력 부분</strong> — 본인이 직접 개발한 거래 관계나 본인의 인맥에서 비롯된 정보는 영업비밀에 포함되기 어렵습니다.</li>\n<li><strong>경쟁사 이직 의심 정황</strong> — 경쟁사 이직과 직접 인과관계가 입증되지 않으면 단순 의혹만으로 해고는 비례성 원칙에 어긋납니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 영업비밀 위반 형사고소(부정경쟁방지법 위반)와 부당해고 구제신청은 별도 절차로, 시효·기한이 다르므로 변호사와 통합 전략을 짜는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 비위행위와 징계사유 결정의 기준',
        summary:
          '대법원 2019두30270 사건(대법원, 2021.11.25 선고)에서 법원은 근로자의 어떤 비위행위가 징계처분의 근거로 삼은 징계사유인지 결정하는 기준 및 그 비위행위가 정당한 징계사유에 해당하는지 판단하는 방법을 제시하면서, 취업규칙의 법적 성격과 해석 원칙을 함께 판시했습니다. 회사가 막연히 "비밀유지 위반"이라 주장해도 구체적 사실과 취업규칙 조항의 합리적 해석에 부합해야 합니다.',
        takeaway: '회사 주장 비위행위가 취업규칙 조항과 합리적 해석에 부합하는지부터 점검하면 다툴 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '비밀유지서약서에 서명했는데도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 서약서가 있어도 정보가 부정경쟁방지법상 영업비밀 3요건에 해당하지 않으면 위반 자체가 성립하지 않습니다.',
      },
      {
        question: '회사가 형사고소까지 하면 어떻게 대응하나요?',
        answer:
          '<strong>형사사건은 별개로 변호인을 선임해 진술 전략을 짜야 합니다.</strong> 노동위 구제절차에서의 진술과 형사사건 진술이 일치해야 하므로 통합 전략이 중요합니다.',
      },
      {
        question: '경쟁사 이직 사실만으로도 영업비밀 위반이 되나요?',
        answer:
          '<strong>이직 자체는 영업비밀 위반이 아닙니다.</strong> 영업비밀의 부정 사용·공개 행위가 별도로 입증되어야 하며, 단순 이직만으로는 처벌·징계 사유로 인정되기 어렵습니다.',
      },
      {
        question: '경업금지 약정이 있는데 그것 때문에 이직 자체가 막히나요?',
        answer:
          '<strong>경업금지 약정은 합리적 범위 내에서만 유효합니다.</strong> 기간·지역·업종 범위가 과도하면 무효이며, 보상도 없이 광범위한 금지를 강요하는 약정은 다툴 수 있습니다.',
      },
      {
        question: '구제 인용되면 회사 복직이 사실상 어려운데 어떻게 하나요?',
        answer:
          '<strong>금전보상명령을 신청하는 방법을 검토해볼 수 있습니다.</strong> 신뢰관계 파탄으로 복직이 어려운 경우 6~12개월치 임금 상당액을 보상금으로 청구할 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '계약직 갱신거부 기대권 다툼', href: '/guide/dismissal/dismissal-contract-renewal-expectation-relief' },
      { label: '징계 사유 비례성 원칙 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '징계위원회 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '부당해고 증거 수집 방법', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },
];
