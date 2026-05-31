import { SpokePage } from '../spoke-pages';

// batch83 dismissal(3) + wage(2) + unemployment(2) + retirement(2) + industrial-accident(1) — 10개 (2026-05-31)
//
// 고유 존재 이유:
// 1. dismissal-managerial-layoff-criteria-track — 단순 정리해고 분기. 여기는 '일부 사업부문 폐지를 이유로 한 해고가 경영상 해고 요건(긴박한 경영상 필요·해고회피노력·합리적 선정기준)을 갖췄는지, 통상해고로서 예외적 정당성' 판단형 트랙. 일부 사업폐지=폐업 동일성·증명책임(사용자)이 핵심.
// 2. dismissal-social-media-post-disciplinary-track — 단순 징계 분기. 여기는 'SNS 게시물 등 복수 징계혐의 사실에서 일부 사유 제외 후 나머지 사유만으로 징계해고 적정성·재량권 일탈·남용' 판단형 트랙. 여러 징계사유의 종합 판단·처분 후 비위의 양정 자료성이 핵심.
// 3. dismissal-tardiness-absence-accumulation-track — 단순 근태 분기. 여기는 '지각·결근 누적이 징계해고사유에 해당하나 통상해고사유에 해당하지 않을 때 통상해고 선택 가능성과 부가 절차·정당한 이유' 판단형 트랙. 통상해고 시에도 징계 절차 부가 요구가 핵심.
// 4. wage-comprehensive-salary-fixed-overtime-track — batch82 연차수당·소정시간단축과 분기. 여기는 '정액급 포괄임금계약이 최저임금에 미달하는 경우 효력과 비교대상 시급 산정(1개월 소정근로시간)' 판단형 트랙. 포괄임금 최저임금 미달 판단·비교대상 시급이 핵심.
// 5. wage-on-call-standby-time-recognition-track — batch82 야간수당과 분기. 여기는 '일당제 형식이나 실질 월급제로 운용된 경우 일급 통상임금 산정과 주휴수당 제외, 대기·호출시간의 근로시간성' 판단형 트랙. 시간급→1일 소정근로 곱셈·주휴수당 제외가 핵심.
// 6. unemployment-contract-expiry-non-renewal-track — batch82 괴롭힘·돌봄과 분기. 여기는 '계약만료 비자발 이직 수급자격과 조기재취업수당의 안정적 재취업(대표이사 취임 포함) 인정' 절차형 트랙. 안정된 직업 재취직 범위가 핵심.
// 7. unemployment-early-reemployment-allowance-track — 단순 수급절차 분기. 여기는 '취업사실 신고의무 위반에 따른 부정수급 반환·추가징수 제재처분의 재량권 일탈·남용' 절차형 트랙. 제재처분 기준·일부취소 불가·신고의무가 핵심.
// 8. retirement-interim-settlement-validity-track — batch82 상여산입·계속근로통산과 분기. 여기는 '퇴직금 중간정산 시 가족수당·상여를 평균임금에 산입해야 하는지와 급여규정 우선·퇴직급여법 하한' 판단형 트랙. 급여규정 해석·중간정산 재산정이 핵심.
// 9. retirement-under-five-employees-applicability-track — 단순 퇴직금 분기. 여기는 '5인 미만 사업장 판단 시 상시 근로자 수 산정 방법(근로기준법 시행령 제7조의2 부적용)과 전체 근무기간 기준' 판단형 트랙. 퇴직급여법 상시근로자 산정·5인 이상 적용이 핵심.
// 10. industrial-accident-musculoskeletal-repetitive-work-track — batch82 업무스트레스·정신질환과 분기. 여기는 '반복작업 근골격계·진폐 등 퇴직 후 직업병 진단 시 평균임금 산정(퇴직일 기준·산정기간 제외)과 마지막 사업장' 절차형 트랙. 퇴직 후 직업병 평균임금 산정이 핵심.

export const spokesBatch83Labor: SpokePage[] = [
  // ─── 1. dismissal-managerial-layoff-criteria-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-managerial-layoff-criteria-track',
    keyword: '경영상 정리해고 요건',
    questionKeyword: '회사가 경영이 어렵다며 제가 속한 사업부를 없애고 정리해고를 통보했어요. 해고를 피할 다른 방법이나 누구를 내보낼지 기준도 설명받지 못했습니다. 이런 정리해고가 정당한지 다툴 수 있나요?',
    ctaKeyword: '경영상 정리해고 요건·구제 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '경영상 정리해고 요건 — 5단계 정당성·구제 점검 | 로앤가이드',
      description:
        '회사가 경영난을 이유로 사업부를 폐지하며 정리해고를 통보했다면 긴박한 경영상 필요·해고회피노력·선정기준 4요건과 구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 \'경영이 어렵다\', \'사업부를 정리한다\'며 제가 속한 부문을 폐지하고 정리해고를 통보했습니다. 그런데 정말 인원을 줄여야 할 만큼 긴박한 사정이 있었는지, 전환배치 같은 해고를 피할 방법은 검토했는지, 누구를 내보낼지 어떤 기준으로 정했는지 아무런 설명도 듣지 못했어요. \'사업부가 없어졌으니 어쩔 수 없다\'는 말뿐인데, 같은 회사의 다른 부서는 그대로 운영되고 있어 더 납득이 가지 않습니다. 이런 정리해고가 정당한 건지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고하지 못한다고 정하고, 제24조는 경영상 이유에 의한 해고의 요건으로 긴박한 경영상의 필요·해고회피노력·합리적이고 공정한 대상자 선정기준·근로자대표 협의를 정하며, 제27조는 해고 사유·시기의 서면통지를 정하는 영역입니다. 판례는 일부 사업부문을 폐지하면서 그 부문 근로자를 해고하려면 원칙적으로 제24조의 경영상 해고 요건을 갖춰야 하고, 폐업으로 인한 통상해고로서 예외적으로 정당하려면 일부 사업의 폐지가 사업 전체의 폐지와 같다고 볼 특별한 사정이 있어야 하며 그 정당성 증명책임은 사용자에게 있다고 본 사례 흐름이 있는 영역입니다. 사업부 폐지 + 기준 불명확 + 정리해고 결합은 \'경영상 해고 요건·정당성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 긴박한 필요 ② 해고회피노력 ③ 선정기준 ④ 협의·통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 필요 ② 회피 ③ 기준 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경영상 정리해고 요건 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 긴박한 경영상 필요·해고회피노력·선정기준·협의/통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 인원감축이 객관적으로 합리성이 있는지 등 경영상 필요의 실재.</li>\n<li><strong>② 해고회피노력</strong> — 전환배치·희망퇴직·근로시간 단축 등 해고를 피하기 위한 노력을 다했는지.</li>\n<li><strong>③ 합리적·공정한 선정기준</strong> — 대상자·전환배치 선정기준이 합리적이고 공정한지.</li>\n<li><strong>④ 협의·서면통지</strong> — 근로자대표 협의와 해고 사유·시기 서면통지(제27조) 여부.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 일부 사업부문 폐지를 이유로 한 해고도 원칙적으로 근로기준법 제24조 경영상 해고 요건을 갖춰야 하고, 폐업에 따른 통상해고로 예외적으로 정당하려면 일부 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 인정돼야 하는 영역. 긴박한 필요·해고회피노력·선정기준의 증명책임은 사용자에게 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보·경영자료 보존 (즉시)</strong> — 해고 통보서·사업부 폐지 공지·재무자료 보존.</li>\n<li><strong>2단계 — 긴박한 필요·회피노력 정리 (1주)</strong> — 경영상 필요의 실재와 전환배치·희망퇴직 등 회피노력 검토 여부 정리.</li>\n<li><strong>3단계 — 선정기준·협의 자료 (2주)</strong> — 대상자 선정기준의 합리성·공정성과 근로자대표 협의 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경영상 정리해고 요건·구제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 긴박한 필요·회피노력·선정기준 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (사유·시점·서면통지 여부)</strong></li>\n<li><strong>사업부 폐지·조직개편 공지 자료</strong></li>\n<li><strong>회사 재무·경영 자료 (긴박한 필요 정황)</strong></li>\n<li><strong>전환배치·희망퇴직 등 회피노력 자료</strong></li>\n<li><strong>대상자 선정기준·적용 내역 (합리성·공정성)</strong></li>\n<li><strong>근로자대표 협의 기록</strong></li>\n<li><strong>다른 부서 존속·채용 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일부 사업부문만 폐지하는 경우는 원칙적으로 사업 축소이지 사업 전체 폐지가 아니어서, 경영상 해고 4요건(긴박한 필요·해고회피노력·합리적 선정기준·협의)을 갖춰야 정당성이 인정되기 쉬운 영역. 다른 부서가 그대로 운영되는지, 전환배치 가능성을 검토했는지를 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>긴박한 경영상 필요</strong> — 인원감축이 객관적으로 합리성이 있는지.</li>\n<li><strong>해고회피노력</strong> — 전환배치·희망퇴직 등 회피노력을 다했는지.</li>\n<li><strong>선정기준 합리성</strong> — 대상자·전환배치 선정기준이 합리적·공정한지.</li>\n<li><strong>일부 폐지=폐업 동일성</strong> — 일부 사업폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 있는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성·각 요건 입증은 사용자, 다른 부서 존속·회피 가능 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 사업부문 폐지 해고의 경영상 해고 요건과 증명책임',
        summary:
          '대법원 2016두64876(대법원, 2021.07.29 선고) 영역에서 법원은 어떤 기업이 경영상 이유로 사업을 여러 부문으로 나누어 경영하다가 그중 일부를 폐지하더라도 이는 원칙적으로 사업 축소에 해당할 뿐 사업 전체의 폐지라고 할 수 없으므로 그 부문 근로자를 해고하려면 근로기준법 제24조의 경영상 해고 요건을 갖추어야 하고, 폐업으로 인한 통상해고로서 예외적으로 정당하기 위해서는 일부 사업의 폐지·축소가 사업 전체의 폐지와 같다고 볼 특별한 사정이 인정되어야 하며, 긴박한 경영상 필요·해고회피노력·합리적이고 공정한 선정기준에 관한 증명책임은 이를 주장하는 사용자가 부담한다고 판시했습니다. 사업부 폐지를 이유로 한 정리해고를 다툴 때 4요건과 증명책임을 검토해볼 수 있습니다.',
        takeaway: '사업부 폐지 + 기준 불명확 + 정리해고 결합 시 경영상 해고 4요건·증명책임 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '사업부가 없어졌으니 해고는 당연한 건가요?',
        answer:
          '<strong>일부 사업부문 폐지는 원칙적으로 사업 축소여서 경영상 해고 요건을 갖춰야 정당성이 검토되는 영역입니다.</strong> 다른 부서 존속·전환배치 가능성을 정리.',
      },
      {
        question: '긴박한 경영상 필요는 어떻게 판단하나요?',
        answer:
          '<strong>인원감축이 객관적으로 합리성이 있는 경우도 포함해 종합 판단하는 영역입니다.</strong> 재무·경영 자료로 필요의 실재를 검토.',
      },
      {
        question: '누구를 해고할지 기준을 안 알려줬는데 문제 되나요?',
        answer:
          '<strong>합리적이고 공정한 선정기준 여부가 다툼 대상이 되는 영역입니다.</strong> 선정기준·적용 내역을 확보해 정리.',
      },
      {
        question: '회사가 해고가 정당하다고 입증해야 하나요?',
        answer:
          '<strong>각 요건의 정당성 증명책임은 사용자에게 있는 영역입니다.</strong> 회피노력·선정기준 자료 부재 정황을 함께 정리.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '경영상 해고 요건', href: '/guide/dismissal/dismissal-managerial-requirement' },
      { label: '해고회피노력 다툼', href: '/guide/dismissal/dismissal-avoidance-effort-track' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-social-media-post-disciplinary-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-social-media-post-disciplinary-track',
    keyword: 'SNS 게시물 징계해고',
    questionKeyword: 'SNS에 올린 글을 문제 삼아 회사가 여러 징계사유를 붙여 징계해고를 했어요. 일부 사유는 부당한데, 그 사유를 빼고 보면 해고가 너무 과한 건 아닌지 다툴 수 있나요?',
    ctaKeyword: 'SNS 게시물 징계해고 양정·재량권 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'SNS 게시물 징계해고 — 5단계 양정·재량권 점검 | 로앤가이드',
      description:
        'SNS 게시물 등 여러 사유로 징계해고를 당했다면 징계사유 인정 여부·양정·재량권 일탈남용 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"개인 SNS에 올린 글을 회사가 문제 삼으면서, 거기에 다른 여러 사유까지 한꺼번에 붙여 징계해고를 통보한 근로자입니다. 그중에는 도저히 징계사유로 보기 어려운 항목도 섞여 있었는데, 회사는 \'모두 합치면 해고가 마땅하다\'는 식으로 처리했어요. 분명히 부당한 사유를 빼고 나면 남는 건 가벼운 일들뿐인 것 같은데, 그래도 해고까지 정당한 건지 납득이 가지 않습니다. 일부 사유가 인정되지 않으면 해고가 과한 것 아닌지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고하지 못한다고 정하고, 같은 법은 징계 절차·서면통지(제27조)를 정하는 영역입니다. 판례는 근로자에게 여러 징계혐의 사실이 있는 경우 징계해고처분이 적정한지는 그것을 이유로 징계해고에 처한 것이 사회통념상 타당한가에 따라 판단해야 하고 그것이 징계권의 남용인지는 여러 사정을 종합해 판단해야 하며, 일부 징계사유가 인정되지 않더라도 인정되는 나머지 사유만으로 해고가 재량권을 일탈·남용하지 않을 수 있고 징계처분 이후의 비위행위도 징계양정의 판단 자료로 삼을 수 있다고 본 사례 흐름이 있는 영역입니다. SNS 게시물 + 복수 징계사유 + 일부 부당 결합은 \'징계사유 인정·양정·재량권\' 다툼이 가능한 트랙입니다. 피해자라면 ① 징계사유 인정 ② 양정 적정성 ③ 재량권 일탈·남용 ④ 절차·통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 양정 ③ 재량 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. SNS 게시물 징계해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 징계사유 인정·양정 적정성·재량권 일탈남용·절차/통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 징계사유 인정</strong> — SNS 게시물 등 각 사유가 실제 징계사유로 인정되는지.</li>\n<li><strong>② 양정 적정성</strong> — 인정되는 사유에 비춰 해고가 사회통념상 타당한지.</li>\n<li><strong>③ 재량권 일탈·남용</strong> — 일부 사유가 빠져도 나머지만으로 해고가 과중하지 않은지.</li>\n<li><strong>④ 절차·서면통지</strong> — 징계 절차·변명 기회·서면통지(제27조) 준수 여부.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 여러 징계혐의 사실이 있을 때 해고가 적정한지는 그것을 이유로 한 해고가 사회통념상 타당한지로 판단하고, 일부 사유가 인정되지 않더라도 인정되는 나머지 사유만으로 재량권 일탈·남용이 아닐 수 있는 영역. 어떤 사유가 인정되는지와 그에 견준 양정 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 징계 통보·게시물 자료 보존 (즉시)</strong> — 징계해고 통보서·징계사유서·SNS 게시물 원문 보존.</li>\n<li><strong>2단계 — 사유별 인정 여부 정리 (1주)</strong> — 각 징계사유의 사실관계와 부당한 사유를 구분 정리.</li>\n<li><strong>3단계 — 양정·재량권 자료 (2주)</strong> — 인정 가능한 사유만으로 해고가 과중한지, 동종 사례 양정 비교 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 절차 하자·후속 청구 정리 (병행)</strong> — 변명 기회·서면통지 등 절차 하자 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS 게시물 징계해고 양정·재량권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사유 인정·양정·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>징계해고 통보서 (사유·시점 명시)</strong></li>\n<li><strong>징계사유서·징계의결서 (사유별 적시)</strong></li>\n<li><strong>SNS 게시물 원문·캡처 (맥락 포함)</strong></li>\n<li><strong>취업규칙·징계규정 (징계사유·양정 기준)</strong></li>\n<li><strong>변명·소명 기회 부여 기록</strong></li>\n<li><strong>동종 사례 징계 양정 비교 자료 (형평성)</strong></li>\n<li><strong>업무 손해·영향 관련 자료 (사유 경중)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 여러 징계사유가 한꺼번에 붙은 경우, 각 사유가 실제로 징계사유로 인정되는지와 인정되는 사유만 추렸을 때 해고가 사회통념상 타당한지를 나눠 정리하는 것이 핵심. 부당한 사유를 제외해도 나머지만으로 해고가 정당화될 여지가 있는지를 동종 사례 양정과 함께 검토해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>징계사유 인정</strong> — SNS 게시물 등 각 사유가 징계사유로 인정되는지.</li>\n<li><strong>양정 적정성</strong> — 인정되는 사유에 비춰 해고가 사회통념상 타당한지.</li>\n<li><strong>재량권 일탈·남용</strong> — 일부 사유가 빠져도 해고가 과중하지 않은지.</li>\n<li><strong>절차 하자</strong> — 변명 기회·징계 절차·서면통지를 지켰는지.</li>\n<li><strong>입증책임 분담</strong> — 징계사유·해고 정당성 입증은 사용자, 사유 부당·양정 과중 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 복수 징계사유와 일부 제외 후 징계해고의 재량권 판단',
        summary:
          '대법원 2008다21983(대법원, 2009.09.10 선고) 영역에서 법원은 근로자에게 여러 가지 징계혐의 사실이 있을 때 징계해고처분이 적정한지는 그것을 이유로 징계해고에 처한 것이 사회통념상 타당한가에 따라 판단해야 하고, 그것이 징계권자의 재량에 속한다고 하더라도 그 재량권의 남용 여부는 여러 사정을 종합해 판단해야 하며, 징계처분 이후의 비위행위도 징계양정의 판단 자료로 삼을 수 있다고 보면서, 일부 징계사유를 제외하고 나머지 인정되는 사유만으로 보더라도 해고처분이 징계재량권을 일탈·남용하지 않았다고 본 사례를 판시했습니다. SNS 게시물 등 복수 사유 징계해고를 다툴 때 인정 사유와 양정을 함께 검토해볼 수 있습니다.',
        takeaway: 'SNS 게시물 + 복수 징계사유 + 일부 부당 결합 시 사유 인정·양정·재량권 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: 'SNS 게시물도 징계사유가 되나요?',
        answer:
          '<strong>게시 내용·맥락·업무 관련성에 따라 징계사유 인정 여부가 검토되는 영역입니다.</strong> 게시물 원문과 맥락을 함께 정리.',
      },
      {
        question: '일부 사유가 부당하면 해고도 무효인가요?',
        answer:
          '<strong>일부 사유가 빠져도 나머지 사유만으로 해고가 정당할 수 있는 영역입니다.</strong> 인정 가능한 사유와 양정을 함께 검토.',
      },
      {
        question: '해고가 과한지는 어떻게 따지나요?',
        answer:
          '<strong>사회통념상 타당한지와 재량권 일탈·남용 여부로 판단하는 영역입니다.</strong> 동종 사례 양정 비교 자료를 확보.',
      },
      {
        question: '변명 기회를 안 줬는데 문제 되나요?',
        answer:
          '<strong>변명·소명 기회·징계 절차도 함께 다툼 대상이 되는 영역입니다.</strong> 절차 진행 기록을 정리.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '징계해고 양정 다툼', href: '/guide/dismissal/dismissal-disciplinary-degree-track' },
      { label: '징계 절차 하자', href: '/guide/dismissal/dismissal-disciplinary-procedure-defect' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-tardiness-absence-accumulation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-tardiness-absence-accumulation-track',
    keyword: '지각·결근 누적 해고',
    questionKeyword: '지각과 결근이 쌓였다는 이유로 회사가 통상해고를 했어요. 징계 절차도 없이 "근무성적 불량"이라며 내보냈는데, 이런 해고에도 정당한 이유가 필요한 건가요?',
    ctaKeyword: '지각·결근 누적 통상해고 정당성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '지각·결근 누적 해고 — 5단계 정당성·절차 점검 | 로앤가이드',
      description:
        '지각·결근 누적을 이유로 통상해고를 당했다면 정당한 이유·근무성적 평가 공정성·부가 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지각과 결근이 쌓였다는 이유로 회사가 \'근무성적이 불량하다\'며 통상해고를 통보한 근로자입니다. 사정이 있어 늦거나 빠진 날이 있었던 건 사실이지만, 회사는 별다른 개선 기회나 경고도 없이, 징계 절차도 거치지 않은 채 곧바로 내보냈어요. 취업규칙에 \'근무성적 불량 시 해고할 수 있다\'는 규정이 있다는 이유만 들었는데, 그런 규정만 있으면 이렇게 쉽게 해고해도 되는 건지 납득이 가지 않습니다. 통상해고라도 정당한 이유가 필요한 건지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고하지 못한다고 정하고, 같은 법은 해고 사유·시기의 서면통지(제27조)를 정하는 영역입니다. 판례는 취업규칙에서 정한 해고사유에 해당한다는 이유로 해고할 때에도 정당한 이유가 있어야 하고, 근무성적·근무능력이 불량해 직무를 수행할 수 없다는 취업규칙에 따른 해고는 평가가 공정하고 객관적인 기준에 따른 것이어야 하며 사회통념상 고용관계를 계속할 수 없을 정도여야 정당성이 인정되고, 특정 사유가 징계해고사유에는 해당하나 통상해고사유에는 해당하지 않더라도 사용자가 재량으로 통상해고를 택할 수 있으나 원칙적으로 징계해고에 따른 절차가 부가적으로 요구된다고 본 사례 흐름이 있는 영역입니다. 지각·결근 누적 + 통상해고 + 절차 미준수 결합은 \'정당한 이유·부가 절차\' 다툼이 가능한 트랙입니다. 피해자라면 ① 평가 공정성 ② 정당한 이유 ③ 통상/징계 구분 ④ 부가 절차 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 정당성 ③ 구분 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지각·결근 누적 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가 공정성·정당한 이유·통상/징계 구분·부가 절차·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 평가 공정성</strong> — 근무성적·근무능력 평가가 공정하고 객관적인 기준에 따른 것인지.</li>\n<li><strong>② 정당한 이유</strong> — 사회통념상 고용관계를 계속할 수 없을 정도인지.</li>\n<li><strong>③ 통상/징계 구분</strong> — 지각·결근이 징계해고사유인지 통상해고사유인지.</li>\n<li><strong>④ 부가 절차</strong> — 통상해고 형식이라도 징계 절차가 부가적으로 요구되는지.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 취업규칙상 해고사유에 해당하더라도 정당한 이유가 있어야 하고, 근무성적·근무능력 불량 해고는 평가의 공정성·객관성과 함께 사회통념상 고용관계를 계속할 수 없을 정도일 때 정당성이 인정되는 영역. 징계사유에 해당하나 통상해고를 택한 경우 원칙적으로 징계 절차가 부가적으로 요구되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보·근태 자료 보존 (즉시)</strong> — 해고 통보서·근태기록·취업규칙 해고규정 보존.</li>\n<li><strong>2단계 — 평가 공정성 정리 (1주)</strong> — 근무성적 평가 기준과 적용의 공정성·객관성 정리.</li>\n<li><strong>3단계 — 개선기회·부가 절차 자료 (2주)</strong> — 경고·개선기회 부여 여부와 징계 절차 부가 요구 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 절차 하자·후속 청구 정리 (병행)</strong> — 변명 기회·서면통지 등 절차 하자 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지각·결근 누적 통상해고 정당성·부가 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평가 공정성·정당한 이유·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (사유·시점 명시)</strong></li>\n<li><strong>취업규칙·인사규정 (해고사유·징계 절차)</strong></li>\n<li><strong>근태기록 (지각·결근 일수·사유)</strong></li>\n<li><strong>근무성적 평가표·평가 기준 자료</strong></li>\n<li><strong>경고·개선기회 부여 기록</strong></li>\n<li><strong>지각·결근 사유 소명 자료 (불가피 사정)</strong></li>\n<li><strong>변명·징계 절차 진행 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취업규칙에 \'근무성적 불량 시 해고\' 규정이 있어도 정당한 이유가 필요한 영역. 평가가 공정·객관적 기준에 따랐는지, 개선 기회가 있었는지, 사회통념상 고용관계를 계속할 수 없을 정도인지를 정리하고, 통상해고 형식이라도 징계 절차가 부가적으로 지켜졌는지를 함께 확인하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 공정성</strong> — 근무성적 평가가 공정·객관적 기준에 따랐는지.</li>\n<li><strong>정당한 이유</strong> — 사회통념상 고용관계를 계속할 수 없을 정도인지.</li>\n<li><strong>개선 기회</strong> — 경고·교육·전환배치 등 개선 기회를 부여했는지.</li>\n<li><strong>부가 절차</strong> — 통상해고라도 징계 절차가 부가적으로 요구되는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 평가 불공정·불가피 사정은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 해고와 정당한 이유, 통상해고 시 부가 절차',
        summary:
          '대법원 2021두33470(대법원, 2023.12.28 선고) 영역에서 법원은 근로기준법 제23조 제1항에 따라 취업규칙에서 정한 해고사유에 해당한다는 이유로 해고할 때에도 정당한 이유가 있어야 하고, 근무성적·근무능력이 불량해 직무를 수행할 수 없다는 취업규칙에 따른 해고는 평가가 공정·객관적 기준에 따른 것이어야 하며 그 부진이 상당한 기간 일반적으로 기대되는 최소한에도 미치지 못하고 개선 가능성을 인정하기 어려운 등 사회통념상 고용관계를 계속할 수 없을 정도여야 정당성이 인정되고, 특정 사유가 징계해고사유에는 해당하나 통상해고사유에는 해당하지 않더라도 사용자가 재량으로 통상해고를 택할 수 있으나 특별한 사유가 없는 한 징계해고에 따른 절차가 부가적으로 요구된다고 판시했습니다. 지각·결근 누적 통상해고를 다툴 때 평가 공정성과 부가 절차를 검토해볼 수 있습니다.',
        takeaway: '지각·결근 누적 + 통상해고 + 절차 미준수 결합 시 정당한 이유·평가 공정성·부가 절차 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 규정이 있으면 해고가 정당한가요?',
        answer:
          '<strong>규정에 해당하더라도 정당한 이유가 있어야 하는 영역입니다.</strong> 평가 기준·적용의 공정성을 함께 정리.',
      },
      {
        question: '지각·결근이 많으면 당연히 해고되나요?',
        answer:
          '<strong>사회통념상 고용관계를 계속할 수 없을 정도인지로 판단하는 영역입니다.</strong> 일수·사유와 개선 기회 부여 여부를 정리.',
      },
      {
        question: '통상해고라며 징계 절차 없이 해고했는데요?',
        answer:
          '<strong>징계사유에 해당하면 통상해고라도 징계 절차가 부가적으로 요구될 수 있는 영역입니다.</strong> 절차 진행 기록을 확보.',
      },
      {
        question: '평가가 불공정하면 다툴 수 있나요?',
        answer:
          '<strong>평가의 공정성·객관성이 정당성 판단의 핵심이 되는 영역입니다.</strong> 평가표·기준·동료 비교 자료를 정리.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '저성과 통상해고 다툼', href: '/guide/dismissal/dismissal-low-performance-track' },
      { label: '근태 불량 해고', href: '/guide/dismissal/dismissal-attendance-track' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. wage-comprehensive-salary-fixed-overtime-track ───
  {
    domain: 'wage',
    slug: 'wage-comprehensive-salary-fixed-overtime-track',
    keyword: '포괄임금 고정연장수당',
    questionKeyword: '포괄임금제라 야근을 해도 따로 연장수당을 못 받았어요. 그런데 받은 임금을 시간으로 따져보니 최저임금에도 못 미치는 것 같습니다. 이런 포괄임금계약도 유효한 건가요?',
    ctaKeyword: '포괄임금 최저임금 미달 차액 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 고정연장수당 — 5단계 최저임금·차액 점검 | 로앤가이드',
      description:
        '포괄임금제로 야근수당을 못 받았는데 임금이 최저임금에 미달하는 것 같다면 포괄임금 효력·비교대상 시급·차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사할 때 \'포괄임금제\'라는 말을 듣고, 매달 정해진 월급에 연장·야간수당이 모두 포함돼 있다고만 알았던 근로자입니다. 실제로는 야근과 휴일근무가 적지 않았는데도 추가 수당은 한 푼도 받지 못했어요. 그런데 받은 월급을 한 달 근로시간으로 나눠 시간당으로 따져 보니, 최저임금에도 못 미치는 것 같다는 생각이 들었습니다. 법정수당까지 다 포함됐다는 이유로 이렇게 받아도 되는 건지, 포괄임금계약 자체가 유효한 건지 막막한 상태입니다." 근로기준법 제2조는 평균임금·소정근로시간을, 제56조는 연장·야간·휴일근로에 대한 가산수당을 정하고, 최저임금법 제6조는 사용자가 최저임금액 이상의 임금을 지급하도록 정하는 영역입니다. 판례는 기본임금을 미리 정하지 않은 채 법정수당까지 포함한 금액을 월급·일당으로 정하는 \'정액급 포괄임금계약\' 등이 있더라도, 그렇게 지급된 임금이 최저임금에 미달하는지는 월 단위로 정해진 비교대상 임금을 1개월의 소정근로시간 수로 나눈 비교대상 시급과 고시된 최저임금을 비교해 판단해야 하고, 연장·야간근로 가산임금 등은 최저임금 산입에서 제외된다고 본 사례 흐름이 있는 영역입니다. 포괄임금 + 미지급 수당 + 최저임금 미달 의심 결합은 \'포괄임금 효력·차액 청구\' 다툼이 가능한 트랙입니다. 피해자라면 ① 계약 성격 ② 소정근로시간 ③ 비교대상 시급 ④ 차액 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 성격 ② 소정시간 ③ 비교시급 ④ 차액 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 포괄임금 고정연장수당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 성격·소정근로시간·비교대상 시급·차액·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 성격</strong> — 정액급 포괄임금인지, 기본임금에 고정수당을 더한 형태인지 정리.</li>\n<li><strong>② 소정근로시간</strong> — 근로기준법 제2조상 소정근로시간(주휴 포함 월 환산) 확인.</li>\n<li><strong>③ 비교대상 시급</strong> — 가산임금 등 산입 제외 임금을 뺀 비교대상 임금 ÷ 1개월 소정근로시간.</li>\n<li><strong>④ 차액 산정</strong> — 비교대상 시급과 고시 최저임금 비교 → 미달액·미지급 가산수당 산정.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 포괄임금계약이 있더라도 그 임금이 최저임금에 미달하는지는 가산임금 등 산입 제외 임금을 뺀 비교대상 임금을 1개월 소정근로시간 수로 나눈 비교대상 시급과 고시 최저임금을 비교해 판단하는 영역. 미달이 확인되면 그 부분 계약은 효력 다툼·차액 청구가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·임금 자료 보존 (즉시)</strong> — 근로계약서·임금명세서·근무기록·근태기록 보존.</li>\n<li><strong>2단계 — 계약 성격·소정근로시간 정리 (1~2주)</strong> — 포괄임금 형태와 월 소정근로시간 환산 정리.</li>\n<li><strong>3단계 — 비교대상 시급·차액 산정 (2~3주)</strong> — 산입 제외 임금을 뺀 비교대상 시급 산정 → 최저임금 미달액·미지급 가산수당 산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">포괄임금 최저임금 미달·차액 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약 성격·소정시간·차액 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (포괄임금 약정·구성 내역)</strong></li>\n<li><strong>임금명세서 (월급·고정수당 내역)</strong></li>\n<li><strong>근무기록·출퇴근 기록 (실근로시간)</strong></li>\n<li><strong>근태·연장근로 기록 (가산수당 산정)</strong></li>\n<li><strong>취업규칙·임금규정 (소정근로시간 정함)</strong></li>\n<li><strong>비교대상 시급·차액 산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 포괄임금이라도 최저임금 미달 판단은 \'명칭\'이 아니라 비교대상 시급으로 합니다. 연장·야간 가산임금은 최저임금 산입에서 빠지므로, 그 부분을 제외한 임금을 1개월 소정근로시간 수로 나눈 비교대상 시급을 고시 최저임금과 비교하는 것이 핵심. 실근로시간·소정근로시간을 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>포괄임금 유효성</strong> — 포괄임금 약정이 명확하고 근로자에게 불리하지 않은지.</li>\n<li><strong>소정근로시간 환산</strong> — 1개월 소정근로시간 수 산정이 정확한지.</li>\n<li><strong>비교대상 시급</strong> — 가산임금 등 산입 제외 임금을 제대로 뺐는지.</li>\n<li><strong>최저임금 미달</strong> — 비교대상 시급이 고시 최저임금에 미달하는지.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약의 최저임금 미달 판단과 비교대상 시급',
        summary:
          '대법원 2020다300299(대법원, 2024.12.26 선고) 영역에서 법원은 기본임금을 미리 정하지 않은 채 법정수당까지 포함된 금액을 월급·일당으로 정하는 정액급 포괄임금계약 등이 있더라도, 월 단위로 정해진 임금이 최저임금에 미달하는지는 연장·야간근로 가산임금 등 최저임금 산입 제외 임금을 뺀 비교대상 임금을 1개월의 소정근로시간 수로 나눈 비교대상 시급과 시급으로 고시되는 최저임금을 비교해 판단해야 한다고 판시했습니다. 포괄임금으로 야근수당을 받지 못한 경우 최저임금 미달 여부와 차액을 비교대상 시급 기준으로 검토해볼 수 있습니다.',
        takeaway: '포괄임금 + 미지급 수당 + 최저임금 미달 의심 결합 시 비교대상 시급·차액 청구 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '포괄임금제면 야근수당을 따로 못 받나요?',
        answer:
          '<strong>약정이 명확하고 근로자에게 불리하지 않을 때만 유효성이 검토되는 영역입니다.</strong> 계약 내용과 실근로시간을 정리.',
      },
      {
        question: '최저임금 미달 여부는 어떻게 따지나요?',
        answer:
          '<strong>가산임금 등을 뺀 비교대상 임금을 소정근로시간으로 나눈 비교대상 시급으로 판단하는 영역입니다.</strong> 명세서·근무기록을 확보.',
      },
      {
        question: '소정근로시간은 어떻게 계산하나요?',
        answer:
          '<strong>주휴를 포함해 월 단위로 환산한 소정근로시간 수를 기준으로 하는 영역입니다.</strong> 취업규칙·계약상 정함을 확인.',
      },
      {
        question: '미달이면 포괄임금계약이 무효인가요?',
        answer:
          '<strong>최저임금에 미달하는 부분은 효력 다툼·차액 청구 대상이 되는 영역입니다.</strong> 미달액 산정표를 함께 정리.',
      },
      {
        question: '차액 청구 시효는요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금제 다툼', href: '/guide/wage/wage-comprehensive-salary-track' },
      { label: '최저임금 미달 차액', href: '/guide/wage/wage-minimum-wage-shortfall-claim' },
      { label: '야간·연장수당 청구', href: '/guide/wage/wage-night-overtime-allowance-claim' },
      { label: '소정근로시간 다툼', href: '/guide/wage/wage-contractual-work-hours-track' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 5. wage-on-call-standby-time-recognition-track ───
  {
    domain: 'wage',
    slug: 'wage-on-call-standby-time-recognition-track',
    keyword: '대기·호출 근로시간성',
    questionKeyword: '일당제로 일했지만 실제로는 매달 정해진 월급처럼 받았고, 대기·호출 시간도 많았어요. 이런 대기시간이 근로시간으로 인정돼 통상임금에 반영될 수 있나요?',
    ctaKeyword: '대기·호출 근로시간성 통상임금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '대기·호출 근로시간성 — 5단계 통상임금·주휴 점검 | 로앤가이드',
      description:
        '일당제 형식이지만 월급처럼 받고 대기·호출 시간이 많았다면 일급 통상임금 산정·주휴수당 제외·근로시간성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"형식상 \'일당제\'로 계약했지만, 실제로는 매달 일정한 날만큼 일해 사실상 월급제처럼 임금을 받아 온 근로자입니다. 게다가 정해진 작업 외에 호출을 기다리거나 대기해야 하는 시간도 적지 않았어요. 그런데 회사가 통상임금을 계산할 때 이런 대기시간이나 주휴수당까지 뒤섞어 산정하는 바람에, 정작 받아야 할 수당이 제대로 반영됐는지 알기 어려웠습니다. 일당제라는 이유로 통상임금이 낮게 잡히고, 대기시간은 아예 빠지는 건 아닌지 막막한 상태입니다." 근로기준법 제2조는 평균임금·소정근로시간을, 제56조는 연장·야간·휴일근로 가산수당을 정하고, 통상임금은 소정근로의 대가로 정기적·일률적·고정적으로 지급되는 임금인 영역입니다. 판례는 보수 지급 형태가 일당제 형식이라도 실질적으로 월급제와 유사하게 운용된 경우 일급 통상임금은 먼저 시간급 금액을 산정한 뒤 1일의 소정근로시간 수를 곱하는 방식으로 산정해야 하고, 월 급여액 중 주휴수당이 포함돼 있다면 그 주휴수당은 통상임금 산정에서 제외해야 한다고 본 사례 흐름이 있는 영역입니다. 일당제 형식 + 월급제 운용 + 대기·주휴 혼입 결합은 \'통상임금 재산정·근로시간성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 임금 운용 실질 ② 시간급 산정 ③ 주휴수당 제외 ④ 대기 근로시간성 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 실질 ② 시간급 ③ 주휴 ④ 대기 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대기·호출 근로시간성 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금 운용 실질·시간급 산정·주휴수당 제외·대기 근로시간성·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임금 운용 실질</strong> — 일당제 형식이나 실질적으로 월급제처럼 운용됐는지.</li>\n<li><strong>② 시간급 산정</strong> — 일급 통상임금을 시간급 산정 후 1일 소정근로시간 곱으로 도출.</li>\n<li><strong>③ 주휴수당 제외</strong> — 급여에 주휴수당이 포함됐다면 통상임금에서 제외.</li>\n<li><strong>④ 대기 근로시간성</strong> — 대기·호출 시간이 사용자 지휘·감독 아래 있어 근로시간인지.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 일당제 형식이라도 실질이 월급제와 유사하면 일급 통상임금은 시간급을 먼저 산정한 뒤 1일 소정근로시간 수를 곱해 산정하고, 월 급여에 주휴수당이 포함돼 있으면 통상임금 산정에서 제외해야 하는 영역. 대기·호출 시간의 근로시간성과 통상임금 재산정 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금·근무 자료 보존 (즉시)</strong> — 근로계약서·임금명세서·근무표·대기/호출 기록 보존.</li>\n<li><strong>2단계 — 임금 운용 실질 정리 (1~2주)</strong> — 일당제 형식과 실제 월급제 운용 정황 정리.</li>\n<li><strong>3단계 — 통상임금 재산정 (2~3주)</strong> — 시간급 산정 후 1일 소정근로시간 곱, 주휴수당 제외해 통상임금 재산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">대기·호출 근로시간성·통상임금 재산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 운용 실질·시간급·대기시간 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (일당·임금 구성)</strong></li>\n<li><strong>임금명세서 (월 급여·주휴수당 포함 여부)</strong></li>\n<li><strong>근무표·출퇴근 기록 (소정근로시간)</strong></li>\n<li><strong>대기·호출 시간 기록 (지휘·감독 정황)</strong></li>\n<li><strong>취업규칙·임금규정 (통상임금 산정 기준)</strong></li>\n<li><strong>통상임금·수당 재산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일당제라도 실제로 월급제처럼 운용됐다면 통상임금은 시간급을 먼저 산정한 뒤 1일 소정근로시간 수를 곱해 정하는 것이 핵심. 월 급여에 주휴수당이 들어 있으면 통상임금에서 빼야 하고, 대기·호출 시간이 자유로운 휴식이 아니라 사용자 지휘 아래 있었다면 근로시간으로 볼 여지가 있어 그 정황을 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금 운용 실질</strong> — 일당제 형식이나 월급제로 운용됐는지.</li>\n<li><strong>시간급 산정 방식</strong> — 시간급 산정 후 1일 소정근로시간 곱 방식인지.</li>\n<li><strong>주휴수당 제외</strong> — 급여에 포함된 주휴수당을 통상임금에서 뺐는지.</li>\n<li><strong>대기시간 근로시간성</strong> — 대기·호출이 사용자 지휘·감독 아래 있었는지.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일당제 월급 운용 시 일급 통상임금 산정과 주휴수당 제외',
        summary:
          '대법원 2011다53638(대법원, 2015.05.28 선고) 영역에서 법원은 보수 지급 형태가 일당제의 형식을 취하고 있으나 실질적으로 월급제와 유사하게 운용되어 온 경우 일급 통상임금은 먼저 시간급 금액을 산정하고 거기에 1일의 소정근로시간 수를 곱하는 방식으로 산정하여야 하고, 받은 월 급여액 중 연장·야간·휴일근로수당분을 제외한 나머지 급여액에 주휴수당이 포함되어 있다면 그 주휴수당은 통상임금 산정에서 제외되어야 한다고 판시했습니다. 대기·호출 시간이 많은 일당제 근로에서 통상임금을 재산정할 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '일당제 형식 + 월급제 운용 + 대기·주휴 혼입 결합 시 통상임금 재산정·근로시간성 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '일당제인데 통상임금을 다시 계산할 수 있나요?',
        answer:
          '<strong>실질이 월급제처럼 운용됐다면 시간급 산정 후 1일 소정근로시간 곱으로 산정하는 영역입니다.</strong> 임금 운용 실질을 정리.',
      },
      {
        question: '급여에 주휴수당이 들어 있으면 어떻게 되나요?',
        answer:
          '<strong>포함된 주휴수당은 통상임금 산정에서 제외하는 영역입니다.</strong> 명세서상 구성 내역을 확보.',
      },
      {
        question: '대기·호출 시간도 근로시간인가요?',
        answer:
          '<strong>사용자 지휘·감독 아래 자유로운 휴식이 보장되지 않았다면 근로시간으로 볼 여지가 있는 영역입니다.</strong> 대기·호출 기록을 정리.',
      },
      {
        question: '통상임금이 바뀌면 수당도 다시 받나요?',
        answer:
          '<strong>통상임금 재산정에 따라 연장·야간·휴일수당 차액 청구가 검토되는 영역입니다.</strong> 재산정표를 함께 준비.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '통상임금 산정 기준', href: '/guide/wage/wage-ordinary-wage-calculation-standard' },
      { label: '대기시간 근로시간성', href: '/guide/wage/wage-standby-time-recognition' },
      { label: '주휴수당 청구', href: '/guide/wage/wage-weekly-holiday-allowance-claim' },
      { label: '야간·연장수당 청구', href: '/guide/wage/wage-night-overtime-allowance-claim' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 6. unemployment-contract-expiry-non-renewal-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-expiry-non-renewal-track',
    keyword: '계약만료 수급자격',
    questionKeyword: '계약기간이 끝나 재계약 없이 그만뒀어요. 자발적으로 나온 게 아닌데 실업급여가 되는지, 또 빨리 재취업하면 조기재취업수당도 받을 수 있는지 궁금합니다.',
    ctaKeyword: '계약만료 수급자격·조기재취업수당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약만료 실업급여 — 5단계 수급자격·조기재취업 점검 | 로앤가이드',
      description:
        '계약만료로 재계약 없이 그만뒀는데 실업급여가 되는지 궁금하다면 수급자격·이직확인서·조기재취업수당 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"기간을 정한 계약직으로 일하다 계약기간이 끝나 더 이상 재계약 없이 직장을 나오게 된 근로자입니다. 제가 그만두고 싶어서 나온 게 아니라 계약이 끝나 어쩔 수 없이 떠난 건데, 막상 알아보니 \'자진퇴사처럼 보여 실업급여가 어렵다\'는 말부터 들어 혼란스러웠어요. 게다가 빨리 다시 일자리를 구하면 조기재취업수당이라는 것도 받을 수 있다고 하는데, 어떤 경우에 인정되는지도 잘 모르겠습니다. 계약만료로 그만둔 게 수급자격이 되는지, 재취업하면 추가 수당까지 챙길 수 있는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 같은 법 제58조는 정당한 이직 사유 등 수급자격 제한 사유를 정하는 영역입니다. 판례는 구직급여 수급자격자가 소정급여일수분을 모두 받기 전에 안정적으로 재취업한 경우 지급하는 조기재취업수당과 관련해, 시행령상 \'고용되는 직업에 취직한 경우\'는 그 취업이 반드시 민법상 고용의 성질을 가지는 것에 한정되지 않으며 주식회사 대표이사 취임도 원칙적으로 이에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 계약만료 + 비자발적 이직 + 조기재취업 결합은 \'수급자격·조기재취업수당\' 검토가 가능한 트랙입니다. 피해자라면 ① 이직 사유 ② 피보험단위기간 ③ 수급자격 ④ 조기재취업수당 ⑤ 신청·심사 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 단위기간 ③ 수급 ④ 조기재취업 ⑤ 신청 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 계약만료 수급자격 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이직 사유·피보험단위기간·수급자격·조기재취업수당·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이직 사유</strong> — 계약기간 만료·재계약 거절 등 비자발적 이직 정황 정리.</li>\n<li><strong>② 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>③ 수급자격</strong> — 계약만료가 수급자격 제한 사유에 해당하지 않는지.</li>\n<li><strong>④ 조기재취업수당</strong> — 소정급여일수 잔여분 일정 비율을 받을 수 있는 안정된 재취업인지.</li>\n<li><strong>⑤ 신청·심사</strong> — 고용센터 수급자격·조기재취업수당 신청 + 필요 시 심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약기간 만료로 인한 이직은 비자발적 이직으로 평가되어 피보험단위기간 등을 갖추면 수급자격이 인정될 수 있는 영역. 판례 흐름에서 조기재취업수당의 \'고용되는 직업에 취직한 경우\'는 민법상 고용에 한정되지 않고 대표이사 취임도 포함될 수 있어, 안정된 재취업이면 수당 검토가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·이직 자료 보존 (즉시)</strong> — 근로계약서·계약만료 통지·이직확인서 보존.</li>\n<li><strong>2단계 — 피보험단위기간·이직 사유 정리 (1주)</strong> — 가입이력과 이직확인서 사유(계약만료) 정리.</li>\n<li><strong>3단계 — 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>4단계 — 조기재취업수당 신청 (재취업·창업 후 요건 충족 시)</strong> — 안정된 재취업 입증 자료와 함께 신청.</li>\n<li><strong>5단계 — 심사청구 (불인정 시)</strong> — 고용보험심사관 심사청구·재심사청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약만료 수급자격·조기재취업수당 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 이직 사유·단위기간·조기재취업 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (계약기간 명시)</strong></li>\n<li><strong>계약만료·재계약 거절 통지 자료</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>재취업·창업 입증 자료 (조기재취업수당)</strong></li>\n<li><strong>사업자등록·근로계약 등 안정성 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약만료는 본인이 그만두려 한 자진퇴사와 달리 비자발적 이직으로 보는 것이 일반적이라 수급자격이 인정될 여지가 있는 영역. 이직확인서 사유가 \'계약만료\'로 정확히 기재됐는지 확인하고, 빠르게 재취업하면 조기재취업수당 요건(안정된 재취업)도 함께 점검해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이직 사유</strong> — 계약만료·재계약 거절이 비자발적 이직으로 평가되는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>이직확인서 사유</strong> — 회사가 기재한 사유가 실제와 일치하는지.</li>\n<li><strong>조기재취업 안정성</strong> — 재취업·창업이 안정된 재취업으로 인정되는지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>고용센터 1350 (수급자격 상담)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 조기재취업수당의 \'고용되는 직업에 취직한 경우\' 범위',
        summary:
          '대법원 2009두19892(대법원, 2011.12.08 선고) 영역에서 법원은 구직급여 수급자격자가 소정급여일수분을 모두 받기 전에 안정적으로 재취업한 경우 지급하는 조기재취업수당과 관련해, 시행령상 \'고용되는 직업에 취직한 경우\'는 법의 \'안정된 직업에 재취직한 경우\'에 대응하는 규정으로서 그 취업이 반드시 민법상 고용의 성질을 가지는 것에 한정된다고 볼 수 없고, 주식회사 대표이사에 취임해 안정적으로 재취업했다면 이 역시 조기재취업수당이 지급되는 것으로 봄이 상당하다는 취지로 판시했습니다. 계약만료 후 수급자격과 빠른 재취업 시 조기재취업수당을 검토할 때 이 기준을 살펴볼 수 있습니다.',
        takeaway: '계약만료 + 비자발적 이직 + 조기재취업 결합 시 수급자격·조기재취업수당 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '계약만료로 그만둬도 실업급여가 되나요?',
        answer:
          '<strong>계약만료는 비자발적 이직으로 평가되어 수급자격이 인정될 수 있는 영역입니다.</strong> 계약서·만료 통지·가입이력을 정리.',
      },
      {
        question: '이직확인서에 사유가 다르게 적혀 있어요.',
        answer:
          '<strong>실제 사유(계약만료)와 다르면 정정을 요청할 수 있는 영역입니다.</strong> 계약기간·만료 통지 자료를 확보.',
      },
      {
        question: '빨리 재취업하면 조기재취업수당을 받나요?',
        answer:
          '<strong>소정급여일수 잔여분 일정 비율을 안정된 재취업 시 받을 수 있는지 검토되는 영역입니다.</strong> 재취업·창업 안정성 자료를 정리.',
      },
      {
        question: '회사를 차려도 조기재취업수당이 되나요?',
        answer:
          '<strong>고용·자영 형태를 불문하고 안정된 재취업이면 검토될 수 있는 영역입니다.</strong> 사업 실재·지속성 자료를 확보.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '계약만료 수급자격', href: '/guide/unemployment/contract-expiry-eligibility-track' },
      { label: '조기재취업수당 요건', href: '/guide/unemployment/early-reemployment-allowance-track' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/benefit-application-procedure' },
      { label: '이직확인서 사유 정정', href: '/guide/unemployment/separation-form-correction-track' },
      { label: '피보험단위기간 확인', href: '/guide/unemployment/insured-period-check-track' },
    ],
  },

  // ─── 7. unemployment-early-reemployment-allowance-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-early-reemployment-allowance-track',
    keyword: '조기재취업수당',
    questionKeyword: '실업급여를 받다 재취업했는데, 취업 사실을 늦게 신고했다며 그동안 받은 급여를 반환하고 추가징수까지 하라는 처분을 받았어요. 처분이 너무 과한 것 같은데 다툴 수 있나요?',
    ctaKeyword: '실업급여 반환·추가징수 제재처분 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '실업급여 반환·추가징수 — 5단계 제재처분·재량 점검 | 로앤가이드',
      description:
        '취업 신고가 늦어 실업급여 반환·추가징수 처분을 받았다면 부정수급 여부·제재처분 재량권·다툼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"실업급여를 받던 중 다시 일자리를 구해 취업했는데, 그 사실을 제때 신고하지 못한 것이 문제가 된 근로자입니다. 며칠 늦게 알린 것뿐인데도 \'부정수급\'이라며 그동안 받은 구직급여를 모두 반환하고, 거기에 더해 추가징수까지 하라는 처분을 받았어요. 신고가 늦은 데에는 그럴 만한 사정이 있었고 고의로 속이려 한 것도 아닌데, 이렇게 무겁게 처분하는 게 맞는 건지 납득이 가지 않습니다. 처분이 지나치게 과한 건 아닌지, 다툴 여지가 있는지 막막한 상태입니다." 고용보험법은 이직·실업·재취업 관련 신고의무와 함께, 거짓이나 그 밖의 부정한 방법으로 구직급여를 받은 경우 지급제한·반환명령·추가징수를 정하는 영역입니다. 판례는 처분 여부와 정도에 재량이 인정되는 제재적 처분이 재량권을 일탈·남용했는지는 처분 사유인 위반행위의 내용과 처분으로 달성하려는 공익 등을 종합해 판단하고, 부령 형식의 처분기준에 따른 처분이라도 그 기준이 헌법·법률에 합치되는지와 사안에 따른 결과의 적정성을 함께 살펴야 하며, 금전 부과처분이 재량권을 일탈·남용한 경우 법원이 적정 정도를 정해 그 초과 부분만 취소할 수는 없다고 본 사례 흐름이 있는 영역입니다. 취업 신고 지연 + 반환·추가징수 + 재량 의심 결합은 \'부정수급 여부·제재처분 다툼\' 검토가 가능한 트랙입니다. 신청인이라면 ① 신고의무 위반 ② 부정수급 여부 ③ 제재처분 기준 ④ 재량권 일탈·남용 ⑤ 심사·소송 5중 트랙이 가능한 영역. 대응은 ① 위반 ② 부정수급 ③ 기준 ④ 재량 ⑤ 다툼 5단계로 검토해볼 수 있습니다. 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 실업급여 반환·추가징수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고의무 위반·부정수급 여부·제재처분 기준·재량권 일탈남용·심사/소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신고의무 위반</strong> — 취업·소득 발생 사실 신고의무를 위반했는지와 그 경위.</li>\n<li><strong>② 부정수급 여부</strong> — 거짓이나 그 밖의 부정한 방법에 해당하는지(고의·은폐 정황).</li>\n<li><strong>③ 제재처분 기준</strong> — 반환·추가징수 처분기준(부령)의 적용이 적정한지.</li>\n<li><strong>④ 재량권 일탈·남용</strong> — 위반 내용에 비춰 처분이 지나치게 과중한지.</li>\n<li><strong>⑤ 심사·행정소송</strong> — 고용보험심사관 심사청구·재심사청구 또는 처분 취소소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 제재적 처분의 재량권 일탈·남용은 위반행위 내용과 공익 등을 종합해 판단하고, 부령 처분기준에 따른 처분도 결과의 적정성을 함께 살펴야 하는 영역. 다만 금전 부과처분이 재량권을 일탈·남용한 경우 법원이 적정액을 정해 초과분만 취소할 수는 없는 트랙이라 처분 전체의 적법성 다툼이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 심사·소송 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분서·수급 자료 보존 (즉시)</strong> — 반환·추가징수 처분서·수급 내역·취업 시점 자료 보존.</li>\n<li><strong>2단계 — 신고 경위·고의 여부 정리 (1주)</strong> — 취업 시점, 신고 지연 경위, 고의·은폐 부재 정황 정리.</li>\n<li><strong>3단계 — 제재처분 기준·재량 검토 (1~2주)</strong> — 처분기준 적용의 적정성과 재량권 일탈·남용 사유 정리.</li>\n<li><strong>4단계 — 심사청구 (처분 안 날부터 90일 내)</strong> — 고용보험심사관 심사청구·재심사청구.</li>\n<li><strong>5단계 — 행정소송 (제소기간 내)</strong> — 처분 취소소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">실업급여 반환·추가징수 제재처분·재량 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 신고 경위·부정수급·재량 갈래입니다.</strong></p>\n<ul>\n<li><strong>반환·추가징수 처분서 (처분 사유·금액)</strong></li>\n<li><strong>실업급여 수급 내역 (지급일·금액)</strong></li>\n<li><strong>재취업 입증 자료 (취업 시점·근로계약)</strong></li>\n<li><strong>취업 사실 신고 기록 (신고일·방법)</strong></li>\n<li><strong>신고 지연 경위 소명 자료 (고의·은폐 부재)</strong></li>\n<li><strong>처분기준 관련 자료 (부령·고시)</strong></li>\n<li><strong>심사청구서·소장 (다툼 단계별)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'고의로 속였는지\'와 \'처분이 과중한지\'입니다. 취업 시점과 신고 지연 경위를 시간순으로 정리해 부정한 의도가 없었음을 뒷받침하고, 위반 내용에 비해 반환·추가징수 처분이 지나치게 무겁다면 재량권 일탈·남용을 다투는 출발점이 됩니다. 금전처분은 초과분만 취소되지 않으므로 처분 전체를 다투는 것이 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부정수급 해당성</strong> — 신고 지연이 거짓·부정한 방법에 해당하는지.</li>\n<li><strong>고의·은폐 여부</strong> — 취업 사실을 고의로 감추려 했는지.</li>\n<li><strong>처분기준 적정성</strong> — 부령 처분기준 적용 결과가 적정한지.</li>\n<li><strong>재량권 일탈·남용</strong> — 위반 내용에 비춰 처분이 과중한지.</li>\n<li><strong>제소·청구 기한</strong> — 심사청구·행정소송 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>고용센터 1350 (수급·부정수급 상담)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제재처분의 재량권 일탈·남용 판단과 일부취소 가부',
        summary:
          '대법원 2020두31323(대법원, 2020.05.14 선고) 영역에서 법원은 제재적 행정처분이 재량권의 범위를 일탈·남용했는지는 처분 사유인 위반행위의 내용과 처분으로 달성하려는 공익 등을 종합해 판단해야 하고, 처분기준이 부령 형식으로 되어 있더라도 그 기준이 헌법·법률에 합치되는지와 사안에 따른 결과의 적정성을 함께 살펴야 하며, 처분 여부와 정도에 재량이 인정되는 금전 부과처분이 재량권을 일탈·남용한 경우 법원이 적정하다고 인정되는 부분을 초과한 부분만 취소할 수는 없다는 취지로 판시했습니다. 취업 신고의무 위반에 따른 반환·추가징수 처분을 다툴 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '취업 신고 지연 + 반환·추가징수 + 재량 의심 결합 시 부정수급 여부·제재처분 재량 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '신고가 늦은 것만으로 부정수급이 되나요?',
        answer:
          '<strong>고의·은폐 등 거짓이나 부정한 방법에 해당하는지로 판단하는 영역입니다.</strong> 취업 시점과 신고 경위를 정리.',
      },
      {
        question: '반환에 더해 추가징수까지 하는 게 맞나요?',
        answer:
          '<strong>위반 내용에 비춰 처분이 과중하면 재량권 일탈·남용을 다툴 수 있는 영역입니다.</strong> 처분 사유서와 반박 자료를 확보.',
      },
      {
        question: '처분 중 일부 금액만 취소받을 수 있나요?',
        answer:
          '<strong>금전 부과처분은 법원이 적정액을 정해 초과분만 취소할 수 없는 영역입니다.</strong> 처분 전체의 적법성을 다투는 전략을 검토.',
      },
      {
        question: '처분에 대해 어떻게 다투나요?',
        answer:
          '<strong>고용보험심사관 심사청구·재심사청구 또는 행정소송으로 다투는 영역입니다.</strong> 단계별 기한을 함께 확인.',
      },
      {
        question: '다툼 기한이 있나요?',
        answer:
          '<strong>심사청구는 처분을 안 날부터 90일 이내가 원칙인 영역입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '부정수급 심사·환수', href: '/guide/unemployment/fraudulent-receipt-review-track' },
      { label: '실업급여 반환명령 다툼', href: '/guide/unemployment/benefit-return-order-track' },
      { label: '조기재취업수당 요건', href: '/guide/unemployment/early-reemployment-allowance-track' },
      { label: '수급자격 심사청구', href: '/guide/unemployment/eligibility-review-request-track' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/benefit-application-procedure' },
    ],
  },

  // ─── 8. retirement-interim-settlement-validity-track ───
  {
    domain: 'retirement',
    slug: 'retirement-interim-settlement-validity-track',
    keyword: '퇴직금 중간정산 유효성',
    questionKeyword: '예전에 퇴직금 중간정산을 받았는데, 그때 매달 받던 가족수당과 상여가 평균임금에서 빠져 적게 계산된 것 같아요. 급여규정대로 다시 계산해 차액을 받을 수 있나요?',
    ctaKeyword: '퇴직금 중간정산 평균임금 산입·재산정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 — 5단계 평균임금·재산정 점검 | 로앤가이드',
      description:
        '중간정산 퇴직금에서 가족수당·상여가 평균임금에서 빠졌다면 급여규정 해석·평균임금 산입·재산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"예전에 회사와 합의해 퇴직금 중간정산을 받았던 근로자입니다. 그때는 별생각 없이 받았는데, 나중에 따져 보니 매달 정기적으로 지급되던 가족수당과 연말상여 일부가 평균임금 계산에서 빠져 있었습니다. 회사는 \'법이 보장한 최소 금액은 넘었으니 문제없다\'고 했지만, 급여규정에는 그 수당과 상여가 퇴직금 산정의 기초가 되는 임금으로 정해져 있어 납득이 가지 않았어요. 회사 급여규정대로라면 더 받아야 했던 것 아닌지, 중간정산 차액을 다시 받을 수 있는지 막막한 상태입니다." 근로기준법 제2조는 평균임금을 산정사유 발생일 이전 3개월간 지급된 임금 총액을 그 기간 총일수로 나눈 금액으로 정하고, 근로자퇴직급여 보장법 제8조는 계속근로 1년당 30일분 이상의 평균임금을 퇴직금으로, 제9조는 퇴직금 지급을 정하는 영역입니다. 판례는 퇴직금 산정의 기초인 임금에 상여 등이 포함되는지는 급여규정의 해석으로 가려지고, 퇴직금규정 등에 따라 산정한 퇴직금이 퇴직급여법 제8조 제1항의 하한에 미달하면 그 하한을 지급해야 하지만, 하한을 초과하기만 하면 급여규정보다 불리하게 지급해도 된다는 뜻은 아니라고 본 사례 흐름이 있는 영역입니다. 중간정산 + 가족수당·상여 누락 + 급여규정 결합은 \'평균임금 산입·중간정산 재산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 급여규정 해석 ② 평균임금 산입 ③ 하한·규정 우선 ④ 재산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 규정 ② 산입 ③ 우선 ④ 재산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직금 중간정산 유효성 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 급여규정 해석·평균임금 산입·하한과 규정 우선·재산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 급여규정 해석</strong> — 가족수당·상여가 퇴직금 산정 기초 임금에 포함되는지 규정 해석.</li>\n<li><strong>② 평균임금 산입</strong> — 정기·정률 지급된 가족수당·상여의 평균임금 산입 여부.</li>\n<li><strong>③ 하한·규정 우선</strong> — 퇴직급여법 제8조 하한 충족과 별도로 급여규정대로 산정해야 하는지.</li>\n<li><strong>④ 중간정산 재산정</strong> — 산입 시 평균임금 재산정 → 중간정산 퇴직금 차액 도출.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 퇴직금 산정 기초 임금에 상여 등이 포함되는지는 급여규정 해석으로 가려지고, 급여규정에서 평균임금에 포함하도록 정한 가족수당·상여를 빼고 산정한 중간정산퇴직금은 그 금액이 퇴직급여법 하한을 넘더라도 급여규정에 반하면 허용되지 않을 수 있는 영역. 규정 우선과 재산정 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 급여규정·정산 자료 보존 (즉시)</strong> — 급여규정·임금명세서·중간정산 합의·정산 내역 보존.</li>\n<li><strong>2단계 — 급여규정 해석·산입 정리 (1~2주)</strong> — 가족수당·상여의 지급 관행·규정 문언으로 산입 여부 정리.</li>\n<li><strong>3단계 — 평균임금 재산정 (2~3주)</strong> — 산입 임금을 반영한 평균임금 재산정 → 중간정산 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 중간정산 평균임금 산입·재산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 급여규정·산입·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>급여규정·취업규칙 (퇴직금 산정 기초 임금)</strong></li>\n<li><strong>단체협약 (가족수당·상여 지급 근거)</strong></li>\n<li><strong>임금명세서 (가족수당·상여 지급 내역)</strong></li>\n<li><strong>중간정산 합의서·정산 내역 (회사 산정)</strong></li>\n<li><strong>지급 관행 자료 (정기·정률 지급 입증)</strong></li>\n<li><strong>평균임금·중간정산 재산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'급여규정이 정한 대로 산정했는지\'입니다. 가족수당·상여가 급여규정상 퇴직금 산정 기초 임금에 포함된다면, 그 금액을 빼고 산정한 중간정산퇴직금은 퇴직급여법 하한을 넘더라도 규정 위반으로 다툴 여지가 있는 영역. 규정 문언과 실제 지급 관행을 함께 정리하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>급여규정 해석</strong> — 가족수당·상여가 퇴직금 산정 기초 임금에 포함되는지.</li>\n<li><strong>평균임금 산입</strong> — 정기·정률 지급의 임금성과 평균임금 산입.</li>\n<li><strong>하한과 규정 우선</strong> — 하한을 넘어도 급여규정대로 산정해야 하는지.</li>\n<li><strong>중간정산 효력</strong> — 규정에 반한 과소 산정 부분의 효력.</li>\n<li><strong>시효 관리</strong> — 퇴직금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 급여규정 우선과 중간정산 평균임금 산입',
        summary:
          '대법원 2016다228802(대법원, 2018.08.30 선고) 영역에서 법원은 퇴직금 산정의 기초인 임금에 상여 등이 포함되는지는 급여규정의 해석으로 가려지고, 퇴직금규정 등에 따라 산정한 퇴직금이 근로자퇴직급여 보장법 제8조 제1항의 하한에 미치지 못하면 그 하한을 지급해야 하지만 이것이 하한을 초과하기만 하면 급여규정보다 불리하게 지급해도 된다는 뜻은 아니라고 보면서, 급여규정에서 평균임금에 포함하도록 정한 가족수당·상여를 빼고 산정한 중간정산퇴직금을 지급한 것은 허용될 수 없고 그 금액이 퇴직급여법이 보장한 금액을 초과하더라도 달리 볼 것이 아니라고 판시했습니다. 중간정산 퇴직금 재산정을 검토할 때 급여규정 우선 원칙을 살펴볼 수 있습니다.',
        takeaway: '중간정산 + 가족수당·상여 누락 + 급여규정 결합 시 평균임금 산입·중간정산 재산정 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '중간정산 받은 퇴직금도 다시 따질 수 있나요?',
        answer:
          '<strong>급여규정대로 산정하지 않았다면 차액을 다툴 수 있는 영역입니다.</strong> 규정·정산 내역을 함께 정리.',
      },
      {
        question: '법정 하한만 넘으면 문제없는 것 아닌가요?',
        answer:
          '<strong>하한을 넘어도 급여규정보다 불리하게 지급해도 된다는 뜻은 아닌 영역입니다.</strong> 급여규정 문언을 확인.',
      },
      {
        question: '가족수당·상여도 평균임금에 들어가나요?',
        answer:
          '<strong>급여규정·지급 관행에 따라 산입 여부가 가려지는 영역입니다.</strong> 정기·정률 지급 내역을 확보.',
      },
      {
        question: '회사가 별도 금품이라는데요?',
        answer:
          '<strong>명칭이 아니라 급여규정 해석과 지급 실질로 판단하는 영역입니다.</strong> 지급 근거와 패턴을 정리.',
      },
      {
        question: '차액 청구 시효는요?',
        answer:
          '<strong>퇴직금·차액 청구 시효는 3년인 영역입니다.</strong> 청구권 발생일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 중간정산', href: '/guide/retirement/retirement-interim-settlement-track' },
      { label: '평균임금 산입', href: '/guide/retirement/retirement-average-wage-inclusion-track' },
      { label: '퇴직금 재산정 차액', href: '/guide/retirement/retirement-recalculation-difference' },
      { label: '퇴직금 체불 진정', href: '/guide/retirement/retirement-pay-unpaid-report-track' },
    ],
  },

  // ─── 9. retirement-under-five-employees-applicability-track ───
  {
    domain: 'retirement',
    slug: 'retirement-under-five-employees-applicability-track',
    keyword: '5인미만 퇴직금 적용',
    questionKeyword: '5인 미만 사업장이라 퇴직금이 없다고 들었어요. 그런데 일하는 동안 사람이 들고 나면서 실제로는 5명을 넘긴 적도 많았던 것 같습니다. 퇴직금을 받을 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '5인미만 퇴직금 상시근로자 산정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '5인미만 퇴직금 적용 — 5단계 상시근로자·청구 점검 | 로앤가이드',
      description:
        '5인 미만이라 퇴직금이 없다고 들었지만 실제 인원이 오갔다면 상시 근로자 수 산정·퇴직금 적용·청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"흔히 \'5인 미만 사업장\'이라는 이유로 퇴직금이 없다고 들어 온 근로자입니다. 그런데 일하는 동안 직원이 수시로 들고 나면서 실제로는 다섯 명을 넘긴 시기가 적지 않았던 것 같아요. 사장님은 \'우리는 5인 미만이라 퇴직금 의무가 없다\'고만 하시는데, 어느 시점을 기준으로 인원을 세는지, 잠깐 5명을 넘긴 것도 포함되는지 알 수가 없었습니다. 제 근무기간 전체로 따지면 퇴직금을 받을 수 있는 건 아닌지, 어떻게 따져봐야 할지 막막한 상태입니다." 근로자퇴직급여 보장법 제8조는 사용자가 계속근로 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록, 제9조는 그 지급을 정하는 영역입니다. 판례는 퇴직급여법에 따른 퇴직금 지급의무의 존부를 판단하기 위해 \'상시 근로자\' 수를 산정할 때 근로기준법 시행령 제7조의2 규정이 적용되지 않고, 그 산정의 기준이 되는 기간은 해당 근로자의 전체 근무기간이며 그 기간 동안 상시 근로자가 5인 이상인 사업장에 해당하는지를 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 인원 변동 + 전체 근무기간 + 상시근로자 산정 결합은 \'퇴직금 적용·청구\' 다툼이 가능한 트랙입니다. 피해자라면 ① 상시근로자 산정 ② 전체 근무기간 ③ 적용 여부 ④ 퇴직금 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 산정 ② 기간 ③ 적용 ④ 금액 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 5인미만 퇴직금 적용 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상시근로자 산정·전체 근무기간·적용 여부·퇴직금 산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상시근로자 산정</strong> — 퇴직급여법상 상시 근로자 수 산정(근로기준법 시행령 제7조의2 부적용).</li>\n<li><strong>② 전체 근무기간 기준</strong> — 해당 근로자의 전체 근무기간을 기준으로 산정.</li>\n<li><strong>③ 적용 여부</strong> — 그 기간 동안 상시 5인 이상 사업장에 해당하는지.</li>\n<li><strong>④ 퇴직금 산정</strong> — 계속근로 1년당 30일분 이상 평균임금으로 산정.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 퇴직금 지급의무를 판단하기 위한 \'상시 근로자\' 수 산정에는 근로기준법 시행령 제7조의2가 적용되지 않고, 산정 기준 기간은 해당 근로자의 전체 근무기간이라 그 기간 동안 상시 5인 이상인지로 판단하는 영역. \'현재 5인 미만\'만으로 단정하기 어려운 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재직·인원 자료 보존 (즉시)</strong> — 근로계약서·급여 자료·동료 재직 정황·근무기간 자료 보존.</li>\n<li><strong>2단계 — 전체 근무기간·인원 변동 정리 (1~2주)</strong> — 근무기간 동안의 인원 변동과 상시 근로자 수 추정 정리.</li>\n<li><strong>3단계 — 적용 여부·퇴직금 산정 (2~3주)</strong> — 상시 5인 이상 해당 여부 판단 → 평균임금 기준 퇴직금 산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미지급 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">5인미만 퇴직금 상시근로자 산정·청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상시근로자·근무기간·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (입사·근무기간 입증)</strong></li>\n<li><strong>급여명세서·통장 내역 (재직·평균임금)</strong></li>\n<li><strong>동료 재직 정황 자료 (인원 수 추정)</strong></li>\n<li><strong>근무표·출퇴근 기록 (상시 근로 정황)</strong></li>\n<li><strong>사업장 조직·인원 관련 자료</strong></li>\n<li><strong>평균임금·퇴직금 산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'언제를 기준으로 인원을 세느냐\'입니다. 퇴직금 의무 판단에서 상시 근로자 수는 해당 근로자의 전체 근무기간을 기준으로 산정하고 근로기준법 시행령 제7조의2가 적용되지 않으므로, \'현재 5인 미만\'이라는 말만으로 단정하기 어려운 영역. 근무기간 동안 사람이 오간 정황을 동료 재직 자료와 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상시근로자 산정 방법</strong> — 시행령 제7조의2가 적용되지 않는 산정 방식인지.</li>\n<li><strong>산정 기준 기간</strong> — 전체 근무기간을 기준으로 산정했는지.</li>\n<li><strong>5인 이상 해당</strong> — 그 기간 동안 상시 5인 이상 사업장이었는지.</li>\n<li><strong>퇴직금 산정</strong> — 계속근로기간·평균임금 산정의 정확성.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 의무 판단의 상시 근로자 수 산정 방법과 기준 기간',
        summary:
          '대법원 2012도10902(대법원, 2013.12.26 선고) 영역에서 법원은 근로자퇴직급여 보장법에 따른 퇴직금 지급의무의 존부를 판단하기 위해 \'상시 근로자\' 수를 산정할 때에는 근로기준법 시행령 제7조의2 규정이 적용되지 않고, 그 산정의 기준이 되는 기간은 해당 근로자의 전체 근무기간이며 그 기간 동안 \'상시 근로자 5인 이상인 사업장\'에 해당하는지를 판단해야 한다는 취지로 판시했습니다. 인원이 수시로 변동한 사업장에서 5인 미만이라는 이유로 퇴직금을 받지 못했다면 전체 근무기간 기준 상시 근로자 수 산정을 검토해볼 수 있습니다.',
        takeaway: '인원 변동 + 전체 근무기간 + 상시근로자 산정 결합 시 퇴직금 적용·청구 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '5인 미만이면 퇴직금이 무조건 없나요?',
        answer:
          '<strong>전체 근무기간을 기준으로 상시 5인 이상이었는지로 적용 여부가 가려지는 영역입니다.</strong> 인원 변동 정황을 정리.',
      },
      {
        question: '인원을 세는 시점은 언제인가요?',
        answer:
          '<strong>해당 근로자의 전체 근무기간을 기준으로 산정하는 영역입니다.</strong> 근무기간과 동료 재직 자료를 확보.',
      },
      {
        question: '잠깐 5명을 넘긴 것도 포함되나요?',
        answer:
          '<strong>전체 기간 동안 상시 5인 이상에 해당하는지를 종합 판단하는 영역입니다.</strong> 시기별 인원 변동을 정리.',
      },
      {
        question: '근로기준법 시행령 산정 방식이 그대로 쓰이나요?',
        answer:
          '<strong>퇴직금 의무 판단에는 시행령 제7조의2가 적용되지 않는 영역입니다.</strong> 산정 방식부터 확인.',
      },
      {
        question: '퇴직금 청구 시효는요?',
        answer:
          '<strong>퇴직금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '상시근로자 수 산정', href: '/guide/retirement/retirement-regular-employee-count-track' },
      { label: '5인 미만 사업장 적용', href: '/guide/retirement/retirement-under-five-employees-track' },
      { label: '계속근로기간 산정', href: '/guide/retirement/retirement-continuous-service-aggregation' },
      { label: '퇴직금 체불 진정', href: '/guide/retirement/retirement-pay-unpaid-report-track' },
    ],
  },

  // ─── 10. industrial-accident-musculoskeletal-repetitive-work-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-musculoskeletal-repetitive-work-track',
    keyword: '근골격계 직업병 인정',
    questionKeyword: '여러 사업장에서 반복작업을 하다 퇴직했는데, 한참 뒤에 근골격계 직업병 진단을 받았어요. 산재로 인정받을 수 있는지, 평균임금은 어느 시점을 기준으로 계산하는지 궁금합니다.',
    ctaKeyword: '근골격계 직업병 산재 인정·평균임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '근골격계 직업병 산재 — 5단계 인정·평균임금 점검 | 로앤가이드',
      description:
        '반복작업으로 퇴직 후 근골격계 직업병 진단을 받았다면 업무상 인과관계·평균임금 산정·요양급여 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 사업장을 옮겨 다니며 무거운 물건을 들거나 같은 동작을 반복하는 일을 오래 해 온 근로자입니다. 일을 그만두고 한참이 지난 뒤에야 근골격계 직업병 진단을 받았는데, \'퇴직한 지 오래됐으니 산재는 어렵다\', \'평균임금을 어느 시점으로 잡아야 할지 모르겠다\'는 말부터 들어 막막했어요. 일하던 내내 몸을 혹사했고 그 누적된 부담이 병으로 이어진 게 분명한데, 퇴직 후에 진단받았다는 이유로 보상에서 불이익을 받는 건 아닌지 걱정이 큰 상태입니다." 산업재해보상보험법 제5조는 업무상 재해를 업무상 사유에 따른 근로자의 부상·질병·장해·사망으로 정하고, 제37조는 업무와 재해 사이 상당인과관계가 있는 업무상 사고·질병을 업무상 재해로 정하며, 같은 법은 요양급여·휴업급여·장해급여 등을 정하는 영역입니다. 판례는 근로자가 퇴직한 후 직업병 진단이 확정되어 보험급여의 산정기준이 되는 평균임금을 산정할 때 퇴직일 이후 진단 확정일까지의 기간은 산정기간에서 제외하고, 제외 기간이 3개월 이상이면 그 최초일인 퇴직일을 산정사유 발생일로 보아 산정하며, 여러 사업장을 거친 경우 기준이 되는 퇴직일은 원칙적으로 직업병과 상당인과관계 있는 업무를 한 사업장들 중 진단 확정일에 가장 가까운 마지막 사업장 퇴직일이라고 본 사례 흐름이 있는 영역입니다. 반복작업 + 퇴직 후 진단 + 여러 사업장 결합은 \'업무상 재해 인정·평균임금 산정\' 검토가 가능한 트랙입니다. 피해자라면 ① 업무 부담 ② 인과관계 ③ 평균임금 산정 ④ 요양·급여 ⑤ 청구·심사 5중 트랙이 가능한 영역. 대응은 ① 부담 ② 인과관계 ③ 평균임금 ④ 급여 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 근골격계 직업병 산재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무 부담·인과관계·평균임금 산정·요양/급여·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무 부담</strong> — 반복작업·중량물 취급 등 업무 부담의 정도와 기간 정리.</li>\n<li><strong>② 업무상 인과관계</strong> — 업무와 근골격계 질병 사이 상당인과관계(제37조)가 인정될 수 있는지.</li>\n<li><strong>③ 평균임금 산정</strong> — 퇴직 후 진단 시 퇴직일 기준 산정, 산정기간 제외 규칙 적용.</li>\n<li><strong>④ 요양·휴업·장해급여</strong> — 요양급여·휴업급여, 장해 잔존 시 장해급여 검토.</li>\n<li><strong>⑤ 청구·심사</strong> — 근로복지공단 요양급여 신청 + 불승인 시 심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 퇴직 후 직업병 진단이 확정된 경우 평균임금은 퇴직일 이후 진단 확정일까지의 기간을 산정기간에서 제외하고, 제외 기간이 3개월 이상이면 퇴직일을 산정사유 발생일로 보며, 여러 사업장을 거친 경우 진단 확정일에 가장 가까운 마지막 사업장 퇴직일을 기준으로 보는 영역. 인과관계와 평균임금 산정 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 요양급여 신청 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·업무 자료 보존 (즉시)</strong> — 진단서·진료기록·각 사업장 근무·작업 자료 보존.</li>\n<li><strong>2단계 — 업무 부담·인과관계 정리 (1~2주)</strong> — 반복작업·중량물 취급 정황과 발병 시점 연결 정리.</li>\n<li><strong>3단계 — 평균임금 산정 (1~2주)</strong> — 마지막 사업장 퇴직일 기준 산정·산정기간 제외 규칙 적용.</li>\n<li><strong>4단계 — 요양급여 신청 (근로복지공단)</strong> — 요양급여 신청서·의학적 소견서 제출(업무상 질병 판정).</li>\n<li><strong>5단계 — 휴업·장해급여 청구·심사청구 (요양 중·종결 후)</strong> — 급여 청구, 불승인 시 심사청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">근골격계 직업병 산재 인정·평균임금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 업무 부담·인과관계·평균임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>근골격계 직업병 진단서·진료기록 (발병·진단 확정일)</strong></li>\n<li><strong>각 사업장 근무·재직 자료 (업무 이력)</strong></li>\n<li><strong>작업 내용·중량물 취급 자료 (업무 부담)</strong></li>\n<li><strong>반복작업 정황 자료 (동작·빈도)</strong></li>\n<li><strong>동료 진술 (작업 환경 사실관계)</strong></li>\n<li><strong>마지막 사업장 임금·퇴직 자료 (평균임금 산정)</strong></li>\n<li><strong>요양급여 신청서·의학적 소견서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직 후 진단받은 직업병은 평균임금 산정 기준이 헷갈리기 쉬운 영역. 퇴직일 이후 진단 확정일까지는 산정기간에서 제외되고, 그 기간이 3개월 이상이면 퇴직일을 기준으로 산정하며, 여러 사업장을 거쳤다면 진단 확정일에 가장 가까운 마지막 사업장 퇴직일이 기준이 됩니다. 각 사업장의 업무 이력과 마지막 사업장 임금 자료를 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무상 인과관계</strong> — 반복작업·중량물 취급과 근골격계 질병 사이 상당인과관계.</li>\n<li><strong>업무 부담 입증</strong> — 작업 내용·빈도·기간의 객관적 입증.</li>\n<li><strong>평균임금 산정 기준일</strong> — 퇴직일·마지막 사업장 기준 산정의 정확성.</li>\n<li><strong>산정기간 제외</strong> — 퇴직일 이후 진단일까지 기간 제외 적용.</li>\n<li><strong>급여 종류·심사</strong> — 요양·휴업·장해급여 청구 범위와 불승인 심사청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 1588-0075 (산재 요양·급여 상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>관할 근로복지공단 지사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직 후 직업병 진단 시 평균임금 산정과 기준 퇴직일',
        summary:
          '대법원 2018두60380(대법원, 2023.06.01 선고) 영역에서 법원은 근로자가 퇴직한 후 직업병 진단이 확정되어 산업재해보상보험법에 따른 보험급여 산정기준이 되는 평균임금을 산정할 때 퇴직일 이후 평균임금 산정사유 발생일인 진단 확정일까지의 기간은 산정기간에서 제외해야 하고, 제외 기간이 3개월 이상이면 그 최초일인 퇴직일을 산정사유 발생일로 보아 산정하며, 여러 사업장에서 근무하다 퇴직한 후 진폐 등 직업병 진단이 확정된 경우 기준이 되는 퇴직일은 원칙적으로 직업병의 발병·악화와 상당인과관계 있는 업무를 한 사업장들 중 진단 확정일에 가장 가까운 마지막 사업장에서 퇴직한 날을 의미한다고 판시했습니다. 반복작업 근골격계 직업병의 산재 인정과 평균임금 산정을 검토할 때 이 기준을 살펴볼 수 있습니다.',
        takeaway: '반복작업 + 퇴직 후 진단 + 여러 사업장 결합 시 업무상 재해 인정·평균임금 산정 검토 영역 — 근로복지공단 상담·요양급여 신청 트랙.',
      },
    ],
    faq: [
      {
        question: '퇴직한 지 한참 지나 진단받아도 산재가 되나요?',
        answer:
          '<strong>업무와 발병 사이 상당인과관계가 인정되면 업무상 질병으로 검토되는 영역입니다.</strong> 업무 이력·진단 확정일을 함께 정리.',
      },
      {
        question: '평균임금은 어느 시점을 기준으로 하나요?',
        answer:
          '<strong>퇴직 후 진단 시 퇴직일을 기준으로 산정하고 그 사이 기간은 제외하는 영역입니다.</strong> 마지막 사업장 임금 자료를 확보.',
      },
      {
        question: '여러 회사를 다녔는데 어디가 기준인가요?',
        answer:
          '<strong>진단 확정일에 가장 가까운 마지막 사업장 퇴직일이 원칙인 영역입니다.</strong> 각 사업장 업무 이력을 정리.',
      },
      {
        question: '반복작업이 직업병으로 인정되나요?',
        answer:
          '<strong>작업 내용·빈도·기간과 의학적 소견으로 인과관계를 검토하는 영역입니다.</strong> 작업 자료·동료 진술을 확보.',
      },
      {
        question: '요양급여는 어디에 신청하나요?',
        answer:
          '<strong>근로복지공단에 요양급여를 신청하는 영역입니다.</strong> 신청서·의학적 소견서를 준비.',
      },
    ],
    cta: { text: '산재 요양급여 신청 순서, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '산재 요양급여 신청', href: '/guide/industrial-accident/industrial-accident-medical-benefit-application' },
      { label: '근골격계 직업병 인정', href: '/guide/industrial-accident/industrial-accident-musculoskeletal-recognition' },
      { label: '평균임금 산정 기준', href: '/guide/industrial-accident/industrial-accident-average-wage-standard' },
      { label: '장해급여 청구', href: '/guide/industrial-accident/industrial-accident-disability-benefit-track' },
      { label: '산재 불승인 심사청구', href: '/guide/industrial-accident/industrial-accident-review-request-track' },
    ],
  },
];
