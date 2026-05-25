import { SpokePage } from '../spoke-pages';

// batch78 dismissal — 4개 (2026-05-26)
//
// 고유 존재 이유:
// 1. 사업 부문 일부 폐지 통상해고 — 단순 정리해고 류와 분기. 여기는 '회사가 일부 사업부만 접고 그 부문 근로자만 해고 + 폐업 통상해고라 주장' 트랙. 근로기준법 제24조 경영상 해고 요건 vs 폐업 통상해고 예외(사업 전체 폐지와 동일시할 특별한 사정) 다툼.
// 2. 긴박한 경영상 필요 부재 정리해고 — 단순 경영상 해고 류와 분기. 여기는 '흑자·실적 양호한데 미래 대비 명목으로 정리해고' 트랙. 근로기준법 제24조 '긴박한 경영상 필요' 판단 시점(해고 당시)·객관적 합리성 다툼.
// 3. 서면 해고통지 사유 부실기재 — 단순 서면통지 누락 류와 분기. 여기는 '서면은 받았으나 사유가 추상·축약돼 무슨 잘못인지 알 수 없음' 트랙. 근로기준법 제27조 해고사유 구체적 기재 요건 다툼.
// 4. 구제신청 중 계약만료 구제이익 소멸 — 단순 구제신청 류와 분기. 여기는 '구제신청 진행 중 정년·계약만료·폐업으로 근로관계 종료 → 구제이익 소멸 항변 + 임금상당액' 트랙. 노동위 구제이익·민사 임금 상당액 청구 다툼.

export const spokesBatch78Dismissal: SpokePage[] = [
  // ─── 1. dismissal-partial-business-closure-ordinary-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-partial-business-closure-ordinary-track',
    keyword: '사업 부문 일부 폐지 통상해고',
    questionKeyword: '회사가 여러 사업부 중 제가 속한 한 부문만 접으면서 "폐업이니 통상해고"라며 정리해고 절차 없이 저만 해고했어요. 이게 부당해고로 다툴 수 있나요?',
    ctaKeyword: '일부 사업 폐지 통상해고 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '일부 사업 폐지 통상해고 — 5단계 정리해고 요건 점검 | 로앤가이드',
      description:
        '회사가 한 사업부만 접고 폐업 통상해고라며 해고했다면 경영상 해고 요건·특별한 사정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 사업부를 운영하는 중견기업의 한 사업부에서 5년째 일했는데, 회사가 갑자기 "해당 사업부를 정리하기로 했다, 폐업이라 통상해고"라며 저를 포함한 그 부문 직원만 내보냈습니다. 그런데 회사 전체는 그대로 운영되고 다른 사업부는 오히려 인력을 늘리고 있어요. 정리해고라면 협의·기준 같은 절차가 있다고 들었는데, 회사는 "사업 폐지라 그런 절차가 필요 없다"고만 해서 정말 그런 건지 막막한 상황입니다." 근로기준법 제24조는 경영상 이유에 의한 해고는 긴박한 경영상 필요·해고 회피 노력·합리적 선정 기준·근로자대표 협의 요건을 갖추어야 한다고 규정하는 영역이고, 판례는 일부 사업 부문만 폐지한 경우 그 해고가 폐업으로 인한 통상해고로 예외적으로 정당하려면 일부 사업의 폐지가 사업 전체의 폐지와 같다고 볼 만한 특별한 사정이 인정되어야 한다고 본 사례 흐름이 있습니다. 일부 사업부만 정리 + 회사 전체 존속 + 정리해고 절차 누락 결합은 \'경영상 해고 요건 미충족\' 다툼이 가능한 트랙입니다. 피해자라면 ① 폐업 통상해고 주장 진위 ② 경영상 해고 요건 ③ 해고 회피 노력 ④ 노동위 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 진위 ② 요건 ③ 회피 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 일부 사업 폐지 통상해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 폐업 진위·경영상 요건·회피 노력·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폐업 통상해고 주장 진위</strong> — 일부 사업 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정 존재 여부.</li>\n<li><strong>② 경영상 해고 요건</strong> — 근로기준법 제24조: 긴박한 경영상 필요·합리적 선정 기준·근로자대표 협의 충족 여부.</li>\n<li><strong>③ 해고 회피 노력</strong> — 전환배치·타 사업부 재배치 등 해고 회피 시도가 있었는지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 통상해고 위장 + 경영상 해고 요건 미충족 결합 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 일부 사업 부문만 폐지한 해고가 \'폐업 통상해고\'로 예외 인정되려면 일부 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 있어야 하는 영역. 회사 전체가 존속하고 다른 사업부가 유지·확대된다면 통상해고 예외가 인정되기 어려워 경영상 해고 요건 미충족 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 자료 보존 (즉시)</strong> — 해고통지서·사업부 폐지 공지·회사 전체 존속 정황 자료.</li>\n<li><strong>2단계 — 폐업 진위 정리 (1주)</strong> — 다른 사업부 운영 현황·신규 채용·회사 등기·전체 사업 지속 여부 자료.</li>\n<li><strong>3단계 — 경영상 요건 반박 자료 (2주)</strong> — 근로자대표 협의 부재·선정 기준 부재·해고 회피 노력 부재 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 통상해고 위장 + 경영상 해고 요건 미충족 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">일부 사업 폐지 통상해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 폐업 진위·경영상 요건·회피 노력 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고통지서·사업부 폐지 결정 공지·인사발령문</strong></li>\n<li><strong>회사 전체 존속·다른 사업부 운영 현황 자료 (조직도·홈페이지)</strong></li>\n<li><strong>해고 전후 신규 채용 공고·잔류 인력 현황 자료</strong></li>\n<li><strong>근로자대표 협의·통보 관련 자료 (또는 부재 정황)</strong></li>\n<li><strong>해고 회피 노력·전환배치 제안 여부 자료</strong></li>\n<li><strong>근로계약서·급여명세서·재직 기간 입증 자료</strong></li>\n<li><strong>회사 취업규칙·인사규정 중 해고·전보 관련 조항</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 전체가 존속하면서 다른 사업부는 유지·확대되는 정황을 객관 자료로 정리하는 것이 핵심. 이는 "사업 전체 폐지와 동일하다"는 회사 측 통상해고 주장을 반박하고 경영상 해고 요건을 갖추었어야 한다는 다툼의 결정적 사정으로 활용될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별한 사정 존부</strong> — 일부 사업 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 있는지.</li>\n<li><strong>경영상 해고 요건</strong> — 근로기준법 제24조: 긴박한 경영상 필요·회피 노력·합리적 기준·협의 충족 여부.</li>\n<li><strong>해고 회피 가능성</strong> — 타 사업부 전환배치 등 회피 노력 여지가 있었는지.</li>\n<li><strong>통상해고 위장 여부</strong> — 정리해고 절차 회피 목적의 통상해고 위장 정황.</li>\n<li><strong>입증책임 부담</strong> — 통상해고 정당성·특별한 사정 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 사업 폐지 해고의 통상해고 예외 인정 요건',
        summary:
          '대법원 2023두57876(대법원, 2024.10.25 선고) 영역에서 법원은 사업을 여러 부문으로 나누어 경영하던 사용자가 일부 사업 폐지를 이유로 그 사업 부문 근로자를 해고한 경우, 그 해고가 경영상 이유에 의한 해고 요건을 갖추지 못하였더라도 폐업으로 인한 통상해고로서 예외적으로 정당하기 위해서는 일부 사업의 폐지·축소가 사업 전체의 폐지와 같다고 볼 만한 특별한 사정이 인정되어야 한다고 판시했습니다. 회사 전체가 존속하는 사안에서 통상해고 예외가 인정되기 어렵다고 본 사례 흐름이 있어, 일부 사업 폐지 해고 대응 시 사업 전체 폐지에 준하는 특별한 사정 존부를 중점적으로 검토해볼 수 있습니다.',
        takeaway: '일부 사업부만 폐지 + 회사 전체 존속 + 정리해고 절차 누락 결합 시 통상해고 예외 부정·경영상 해고 요건 미충족 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '"사업부 폐지라 통상해고"라는데 정리해고 절차 없이 해고할 수 있나요?',
        answer:
          '<strong>일부 사업 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 없다면 경영상 해고 요건을 갖추어야 하는 영역입니다.</strong> 회사 전체 존속 정황 자료 보존이 우선.',
      },
      {
        question: '다른 사업부는 그대로 있는데 제 부서만 없앤 게 정당한가요?',
        answer:
          '<strong>회사 전체가 존속하면 "사업 전체 폐지에 준하는 특별한 사정"이 인정되기 어려운 영역입니다.</strong> 잔류 사업부 운영·신규 채용 자료가 핵심 반박 사정.',
      },
      {
        question: '경영상 해고는 어떤 요건을 갖춰야 하나요?',
        answer:
          '<strong>근로기준법 제24조: 긴박한 경영상 필요·해고 회피 노력·합리적 선정 기준·근로자대표 협의 4요건을 갖춰야 하는 영역입니다.</strong> 하나라도 빠지면 다툼이 가능한 트랙.',
      },
      {
        question: '다른 사업부로 옮겨달라고 요청할 수 있었던 것 아닌가요?',
        answer:
          '<strong>전환배치 등 해고 회피 노력 여지가 있었는지는 해고 정당성 다툼의 중요한 사정입니다.</strong> 회피 노력 제안·거부 정황 자료 확보.',
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
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '정리해고 선정 기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '권고사직 철회', href: '/guide/dismissal/dismissal-resignation-after-recommendation-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-redundancy-no-urgent-need-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-redundancy-no-urgent-need-track',
    keyword: '긴박한 경영상 필요 부재 정리해고',
    questionKeyword: '회사가 흑자인데도 "미래 위기 대비"를 이유로 정리해고를 했어요. 긴박한 경영상 필요가 없으면 부당해고로 다툴 수 있나요?',
    ctaKeyword: '경영상 해고 긴박한 필요 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경영상 해고 긴박한 필요 — 5단계 정리해고 요건 점검 | 로앤가이드',
      description:
        '흑자 회사가 미래 대비 명목으로 정리해고를 했다면 긴박한 경영상 필요·판단 시점 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"실적이 나쁘지 않은 회사에서 6년째 근무했는데, 어느 날 회사가 "장래 경영 위기에 대비해야 한다"며 정리해고 대상에 저를 포함시켰습니다. 작년에도 흑자였고 배당까지 했는데, 회사는 "지금 인원을 줄여야 미래 손실을 막는다"는 말만 반복했어요. 해고 회피 노력이나 대상 선정 기준에 대한 설명도 거의 없었고, 근로자대표와 협의를 했다는 흔적도 보이지 않아서 이 정리해고가 정당한 건지 의문이 드는 상황입니다." 근로기준법 제24조 제1항은 사용자가 경영상 이유로 근로자를 해고하려면 긴박한 경영상 필요가 있어야 한다고 규정하는 영역이고, 판례는 긴박한 경영상 필요는 기업 도산 회피에 한정되지 않고 장래 위기 대비를 위한 인원 감축도 포함하나 그 인원 감축은 객관적으로 합리성이 있어야 하며 그 필요는 정리해고 당시의 사정을 기준으로 판단해야 한다고 본 사례 흐름이 있습니다. 흑자·실적 양호 + 회피 노력 부재 + 협의 흔적 부재 결합은 \'긴박한 경영상 필요 부재\' 다툼이 가능한 트랙입니다. 피해자라면 ① 긴박한 필요 존부 ② 해고 회피 노력 ③ 선정 기준 합리성 ④ 근로자대표 협의 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 필요 ② 회피 ③ 기준 ④ 협의 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경영상 해고 긴박한 필요 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 긴박한 필요·회피 노력·선정 기준·협의·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요 존부</strong> — 근로기준법 제24조: 인원 감축이 객관적으로 합리성 있는지, 해고 당시 사정 기준.</li>\n<li><strong>② 해고 회피 노력</strong> — 근로시간 단축·전환배치·희망퇴직 등 회피 시도가 선행되었는지.</li>\n<li><strong>③ 선정 기준 합리성</strong> — 대상자 선정 기준이 합리적·공정하고 사전 공지되었는지.</li>\n<li><strong>④ 근로자대표 협의</strong> — 해고 50일 전 근로자대표 통보·성실 협의 여부.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 긴박한 필요 부재 + 4요건 미충족 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 긴박한 경영상 필요는 장래 위기 대비를 위한 인원 감축도 포함하나 그 감축은 객관적으로 합리성이 있어야 하고, 필요 여부는 정리해고 당시 사정을 기준으로 판단하는 영역. 흑자·실적 양호한데 막연한 미래 대비만 내세운 정리해고는 객관적 합리성 부재 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 자료 보존 (즉시)</strong> — 정리해고 통보서·대상자 선정 결과·회사 경영 설명 자료.</li>\n<li><strong>2단계 — 경영 상태 자료 정리 (1주)</strong> — 재무제표·매출·영업이익·배당 내역 등 흑자·실적 양호 정황.</li>\n<li><strong>3단계 — 4요건 반박 자료 수집 (2주)</strong> — 회피 노력 부재·선정 기준 부재·협의 부재 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 긴박한 경영상 필요 부재 + 4요건 미충족 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경영상 해고 긴박한 필요 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 긴박한 필요·회피 노력·협의 갈래입니다.</strong></p>\n<ul>\n<li><strong>정리해고 통보서·대상자 선정 결과·사유 설명 자료</strong></li>\n<li><strong>회사 재무제표·매출·영업이익·배당 내역 (실적 양호 입증)</strong></li>\n<li><strong>해고 회피 노력(희망퇴직·전환배치·근로시간 단축) 시행 여부 자료</strong></li>\n<li><strong>대상자 선정 기준·공지 자료 (또는 부재 정황)</strong></li>\n<li><strong>근로자대표 통보·협의 자료 (50일 전 통보 여부)</strong></li>\n<li><strong>근로계약서·급여명세서·재직 기간 입증 자료</strong></li>\n<li><strong>회사 취업규칙·단체협약 중 정리해고 관련 조항</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정리해고 당시 회사가 흑자였고 배당·투자를 지속한 정황은 "긴박한 경영상 필요"의 객관적 합리성 부재를 가리키는 핵심 사정. 회피 노력·선정 기준·근로자대표 협의가 형식적이거나 누락된 정황이 결합되면 4요건 미충족 다툼이 더욱 강화되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>긴박한 필요 합리성</strong> — 막연한 미래 대비가 아니라 객관적으로 합리적인 인원 감축 필요인지.</li>\n<li><strong>판단 시점</strong> — 긴박한 경영상 필요는 정리해고 당시 사정을 기준으로 판단하는 영역.</li>\n<li><strong>해고 회피 노력</strong> — 희망퇴직·전환배치 등 회피 노력이 선행되었는지.</li>\n<li><strong>선정 기준·협의</strong> — 합리적 선정 기준 + 근로자대표 성실 협의 충족 여부.</li>\n<li><strong>입증책임 부담</strong> — 정리해고 4요건 충족 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 긴박한 경영상 필요의 의미와 판단 기준 시점',
        summary:
          '대법원 2017두71604(대법원, 2022.06.09 선고) 영역에서 법원은 근로기준법 제24조 제1항에 따라 경영상 이유로 근로자를 해고하려면 긴박한 경영상 필요가 있어야 하고, 긴박한 경영상 필요란 기업의 도산을 회피하기 위한 경우에 한정되지 않고 장래에 올 수도 있는 위기에 미리 대처하기 위한 인원 감축도 포함되지만 그러한 인원 감축은 객관적으로 보아 합리성이 있다고 인정되어야 하며, 이러한 긴박한 경영상 필요가 있는지는 정리해고를 할 당시의 사정을 기준으로 판단해야 한다고 판시했습니다. 실적 양호한 상태의 정리해고에서는 객관적 합리성을 중점 검토해볼 수 있습니다.',
        takeaway: '흑자·실적 양호 + 막연한 미래 대비 명목 + 회피 노력·협의 부재 결합 시 긴박한 경영상 필요 부재 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 흑자인데도 정리해고를 할 수 있나요?',
        answer:
          '<strong>장래 위기 대비 인원 감축도 가능하나 객관적 합리성이 있어야 하는 영역입니다.</strong> 막연한 미래 대비만으로는 긴박한 경영상 필요 부재 다툼이 가능한 트랙.',
      },
      {
        question: '긴박한 경영상 필요는 언제를 기준으로 판단하나요?',
        answer:
          '<strong>정리해고를 할 당시의 사정을 기준으로 판단하는 영역입니다.</strong> 해고 시점의 재무제표·매출·영업이익 자료가 핵심 입증 사정.',
      },
      {
        question: '회사가 희망퇴직 같은 절차 없이 바로 정리해고했어요',
        answer:
          '<strong>해고 회피 노력은 정리해고 정당성의 필수 요건 중 하나입니다.</strong> 희망퇴직·전환배치·근로시간 단축 등 회피 노력 부재는 요건 미충족 다툼의 근거.',
      },
      {
        question: '근로자대표와 협의가 없었는데 정리해고가 유효한가요?',
        answer:
          '<strong>해고 50일 전 근로자대표 통보·성실 협의는 정리해고 요건의 하나입니다.</strong> 협의 부재·형식적 협의는 정당성 다툼이 가능한 영역.',
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
      { label: '정리해고 선정 기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '권고사직 철회', href: '/guide/dismissal/dismissal-resignation-after-recommendation-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-written-notice-vague-reason-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-written-notice-vague-reason-track',
    keyword: '서면 해고통지 사유 부실기재',
    questionKeyword: '서면 해고통지서를 받긴 했는데 "근무 태도 불량" 정도로만 적혀 있어서 정확히 무슨 잘못으로 해고됐는지 알 수 없어요. 이게 부당해고로 다툴 수 있나요?',
    ctaKeyword: '서면 해고통지 사유 부실 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '서면 해고통지 사유 부실 — 5단계 제27조 기재 요건 점검 | 로앤가이드',
      description:
        '해고통지서를 받았지만 사유가 추상적이라 무슨 잘못인지 모르겠다면 서면통지 구체적 기재 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사에서 4년 일하다 해고통지서를 받았는데, 내용은 "근무 태도 불량 및 회사 부적합"이라는 한 줄이 전부였습니다. 구체적으로 언제 어떤 일이 문제였는지, 어떤 규정을 위반했다는 건지 전혀 적혀 있지 않았어요. 그동안 별다른 경고나 징계 통보를 받은 적도 없어서, 무슨 사유로 해고됐는지조차 알 수 없으니 어떻게 대응해야 할지 막막한 상황입니다." 근로기준법 제27조는 사용자가 근로자를 해고하려면 해고사유와 해고시기를 서면으로 통지하여야 효력이 있다고 규정하는 영역이고, 판례는 이 서면통지는 근로자의 처지에서 해고사유가 무엇인지를 구체적으로 알 수 있어야 하며 특히 징계해고의 경우 해고의 실질적 사유가 되는 구체적 사실·비위 내용을 기재하여야 한다고 본 사례 흐름이 있습니다. 추상적·축약된 사유 + 사전 경고·징계 부재 + 방어 곤란 결합은 \'서면통지 요건 미충족\' 다툼이 가능한 트랙입니다. 피해자라면 ① 사유 구체성 ② 근로자 인식 가능성 ③ 정당한 이유 ④ 노동위 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 구체성 ② 인식 ③ 이유 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 서면 해고통지 사유 부실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유 구체성·인식 가능성·정당 이유·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사유의 구체성</strong> — 근로기준법 제27조: 해고통지서에 구체적 사실·비위 내용이 기재되었는지.</li>\n<li><strong>② 근로자 인식 가능성</strong> — 근로자 처지에서 해고사유가 무엇인지 구체적으로 알 수 있었는지.</li>\n<li><strong>③ 정당한 이유 부재</strong> — 사전 경고·징계 없는 추상적 사유는 정당한 이유 다툼이 가능한 영역.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 서면통지 부실 + 정당한 이유 부재 결합 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 해고사유 서면통지는 근로자가 해고사유를 구체적으로 알 수 있어야 하고, 특히 징계해고는 실질적 사유가 되는 구체적 사실·비위 내용을 기재해야 하는 영역. "근무 태도 불량" 같은 추상적 한 줄은 근로자가 무슨 잘못으로 해고됐는지 알기 어려워 서면통지 요건 미충족 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통지서 보존 (즉시)</strong> — 서면 해고통지서 원본·수령 시점·사유 기재 내용 그대로 보존.</li>\n<li><strong>2단계 — 사유 인식 곤란 정리 (1주)</strong> — 사전 경고·징계 통보 부재·구체적 사유 미고지 정황 정리.</li>\n<li><strong>3단계 — 정당한 이유 반박 자료 (2주)</strong> — 근무 평가·근태 기록·실제 업무 수행 자료.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 서면통지 부실 + 정당한 이유 부재 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">서면 해고통지 사유 부실 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사유 구체성·인식 곤란·정당 이유 갈래입니다.</strong></p>\n<ul>\n<li><strong>서면 해고통지서 원본 (사유 기재 내용 그대로)</strong></li>\n<li><strong>해고 전 경고장·징계 통보·시정 요구 자료 (또는 부재 정황)</strong></li>\n<li><strong>근로계약서·취업규칙 중 해고 관련 조항</strong></li>\n<li><strong>근무 평가·근태 기록·업무 수행 자료 (정당 이유 반박)</strong></li>\n<li><strong>해고 사유에 대한 회사와의 교신 내역 (사유 문의·답변)</strong></li>\n<li><strong>급여명세서·재직 기간 입증 자료</strong></li>\n<li><strong>징계위원회 회의록·통지서 (징계해고인 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 서면 해고통지서를 원본 그대로 보존하고, 기재된 사유가 "근무 태도 불량" 같은 추상적 표현에 그쳐 구체적 사실·비위 내용이 없다는 점을 명확히 정리하는 것이 핵심. 사전 경고·징계 통보가 없었던 정황과 결합하면 서면통지 요건 미충족 다툼이 더욱 강화되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>구체적 기재 요건</strong> — 근로기준법 제27조: 구체적 사실·비위 내용 기재 여부가 효력 다툼의 핵심.</li>\n<li><strong>근로자 인식 가능성</strong> — 근로자가 해고사유를 구체적으로 알아 대응할 수 있었는지.</li>\n<li><strong>축약 기재 예외</strong> — 근로자가 이미 사유를 구체적으로 알고 충분히 대응 가능했다면 예외 인정될 수 있는 영역.</li>\n<li><strong>정당한 이유</strong> — 추상적 사유 + 경고·징계 부재는 정당한 이유 부재 사정.</li>\n<li><strong>입증책임 부담</strong> — 서면통지 적법성·해고 정당성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고사유 서면통지의 구체적 기재 요건',
        summary:
          '대법원 2021두50642(대법원, 2022.01.14 선고) 영역에서 법원은 근로기준법 제27조의 해고사유 서면통지는 사용자가 해고에 신중을 기하게 하고 분쟁이 적정하게 해결되도록 하며 근로자가 해고에 적절히 대응할 수 있게 하기 위한 취지이므로, 사용자가 해고사유 등을 서면으로 통지할 때는 근로자의 처지에서 해고사유가 무엇인지를 구체적으로 알 수 있어야 하고 특히 징계해고의 경우에는 해고의 실질적 사유가 되는 구체적 사실 또는 비위 내용을 기재하여야 한다고 판시했습니다. 다만 근로자가 이미 사유를 구체적으로 알고 충분히 대응할 수 있었던 경우는 예외로 본 사례 흐름이 있어, 사유 부실 기재 대응 시 인식 가능성을 함께 검토해볼 수 있습니다.',
        takeaway: '추상적 사유 한 줄 + 사전 경고·징계 부재 + 사유 인식 곤란 결합 시 서면통지 요건 미충족 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '"근무 태도 불량"이라고만 적힌 해고통지서도 유효한가요?',
        answer:
          '<strong>근로자가 해고사유를 구체적으로 알 수 있어야 하는 영역이라, 추상적 한 줄은 요건 미충족 다툼이 가능한 트랙입니다.</strong> 통지서 원본 보존이 우선.',
      },
      {
        question: '서면통지 사유가 부실하면 그것만으로 해고가 무효인가요?',
        answer:
          '<strong>구체적 사실·비위 내용이 없어 근로자가 사유를 알 수 없었다면 서면통지 요건 미충족 다툼이 가능한 영역입니다.</strong> 다만 사안별 인식 가능성을 함께 검토.',
      },
      {
        question: '제가 이미 무슨 일로 해고됐는지 알고 있어도 다툴 수 있나요?',
        answer:
          '<strong>근로자가 이미 사유를 구체적으로 알고 충분히 대응 가능했다면 축약 기재가 예외로 인정될 수 있는 영역입니다.</strong> 사전 통보·교신 내역으로 인식 여부를 정리.',
      },
      {
        question: '해고 전에 경고나 징계 통보가 전혀 없었어요',
        answer:
          '<strong>사전 경고·징계 부재는 정당한 이유 부재를 가리키는 중요한 사정입니다.</strong> 근무 평가·근태 기록 자료와 함께 보존.',
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
      { label: '해고사유서 요청', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '권고사직 철회', href: '/guide/dismissal/dismissal-resignation-after-recommendation-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. dismissal-relief-interest-contract-end-during-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-relief-interest-contract-end-during-track',
    keyword: '구제신청 중 계약만료 구제이익 소멸',
    questionKeyword: '부당해고 구제신청을 진행하던 중에 계약기간이 끝났는데, 회사가 "이제 구제 받을 이익이 없다"고 주장해요. 그래도 다툴 수 있나요?',
    ctaKeyword: '구제이익 소멸 임금상당액 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '구제이익 소멸 다툼 — 5단계 계약만료 후 임금상당액 점검 | 로앤가이드',
      description:
        '구제신청 중 계약만료로 회사가 구제이익 소멸을 주장한다면 구제이익·임금상당액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부당하게 해고당했다고 생각해 노동위에 구제신청을 했는데, 심사가 진행되는 사이에 원래 정해져 있던 계약기간 만료일이 지나버렸습니다. 그러자 회사는 "이미 근로관계가 끝났으니 구제명령을 받을 이익이 없다"며 각하를 주장하고 나섰어요. 해고가 부당했는지 따져보지도 못하고 그대로 끝나는 건지, 그동안 일하지 못한 기간의 임금은 어떻게 되는 건지 막막한 상황입니다." 근로기준법 제30조는 노동위원회가 부당해고가 성립한다고 판정하면 사용자에게 구제명령을 하도록 규정하는 영역이고, 판례는 근로자가 부당해고 구제신청을 할 당시 이미 정년·근로계약기간 만료·폐업 등으로 근로관계가 종료하여 근로자 지위에서 벗어난 경우 구제명령을 받을 이익이 소멸한다고 보면서도, 해고기간 중 임금 상당액 지급 등 별도의 권리 구제 가능성을 함께 검토하는 사례 흐름이 있습니다. 구제신청 진행 중 계약만료 + 해고기간 임금 미지급 결합은 \'구제이익·임금상당액\' 다툼이 가능한 트랙입니다. 피해자라면 ① 구제이익 존부 ② 임금상당액 청구 ③ 해고 위법성 ④ 민사 전환 ⑤ 노동위 판단 5중 트랙이 가능한 영역. 대응은 ① 구제이익 ② 임금 ③ 위법성 ④ 민사 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구제이익 소멸 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 구제이익·임금상당액·위법성·민사·노동위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 구제이익 존부</strong> — 계약만료로 근로관계가 종료했어도 다투어볼 여지(임금 상당액 등)가 남는지.</li>\n<li><strong>② 해고기간 임금상당액 청구</strong> — 해고가 위법이면 그 기간 임금 상당액 지급을 별도로 다툴 수 있는 영역.</li>\n<li><strong>③ 해고 위법성</strong> — 계약만료와 별개로 최초 해고 자체의 정당성·서면통지 위반 여부.</li>\n<li><strong>④ 민사 전환 검토</strong> — 구제이익 소멸 시 해고무효확인·임금 청구 민사 절차 전환.</li>\n<li><strong>⑤ 노동위 판단 대응</strong> — 각하 항변에 대한 구제이익 유지 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 구제신청 당시 이미 정년·계약만료·폐업으로 근로자 지위에서 벗어난 경우 구제명령을 받을 이익이 소멸한다고 보는 영역. 다만 해고가 위법했다면 해고기간 임금 상당액 등은 민사로 별도 청구해볼 수 있어, 구제이익 소멸 항변이 나와도 권리 구제 경로를 함께 검토하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시간선 자료 정리 (즉시)</strong> — 해고일·구제신청일·계약만료일 시간선 + 해고통지서·계약서 보존.</li>\n<li><strong>2단계 — 구제이익 주장 정리 (1주)</strong> — 계약만료 후에도 다툴 실익(임금 상당액 등) 존부 근거 정리.</li>\n<li><strong>3단계 — 해고기간 임금 자료 (2주)</strong> — 해고일부터 계약만료일까지 미지급 임금·통상임금 산정 자료.</li>\n<li><strong>4단계 — 노동위 대응 또는 민사 전환 (해고일 3개월 이내 신청 유지)</strong> — 구제이익 유지 주장 + 필요 시 해고무효·임금 민사 청구.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 임금 상당액·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">구제이익 소멸·임금상당액 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 구제이익·임금상당액·위법성 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고통지서·구제신청서·노동위 진행 자료</strong></li>\n<li><strong>근로계약서·계약기간 명시 자료 (만료일 입증)</strong></li>\n<li><strong>해고일·구제신청일·계약만료일 시간선 정리 자료</strong></li>\n<li><strong>해고기간 미지급 임금·통상임금 산정 자료</strong></li>\n<li><strong>급여명세서·재직 기간·근태 기록</strong></li>\n<li><strong>회사의 구제이익 소멸·각하 항변 자료</strong></li>\n<li><strong>갱신기대권 관련 자료 (반복 갱신·갱신 규정 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해고일과 계약만료일 사이 기간의 미지급 임금 상당액을 구체적으로 산정해두는 것이 핵심. 구제명령을 받을 이익이 소멸했다는 항변이 받아들여지더라도, 해고가 위법했다면 해고무효확인·임금 상당액 청구를 민사로 전환해볼 수 있는 권리 구제 경로가 남는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>구제이익 소멸 항변</strong> — 계약만료·정년·폐업으로 근로자 지위에서 벗어났는지가 구제이익의 핵심.</li>\n<li><strong>임금상당액 청구</strong> — 해고가 위법이면 해고기간 임금 상당액을 별도로 다툴 수 있는 영역.</li>\n<li><strong>갱신기대권</strong> — 계약만료라도 갱신기대권이 인정되면 다툼 여지가 달라질 수 있음.</li>\n<li><strong>민사 전환</strong> — 노동위 각하 시 해고무효확인·임금 청구 민사 절차 전환.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성은 사용자, 임금 산정 근거는 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로관계 종료 후 부당해고 구제이익의 소멸',
        summary:
          '대법원 2020두54852(대법원, 2022.07.14 선고) 영역에서 법원은 근로자가 부당해고 구제신청을 할 당시 이미 정년에 이르거나 근로계약기간 만료, 폐업 등의 사유로 근로계약관계가 종료하여 근로자의 지위에서 벗어난 경우에는 노동위원회의 구제명령을 받을 이익이 소멸하였다고 보는 것이 타당하다고 판시했습니다. 이러한 사례 흐름이 있어, 구제신청 진행 중 계약만료가 발생한 경우에는 구제명령 이익이 다투어질 수 있는 영역이므로 해고기간 임금 상당액 등 민사 권리 구제 경로를 함께 검토해볼 수 있습니다.',
        takeaway: '구제신청 진행 중 계약만료·정년·폐업 + 해고기간 임금 미지급 결합 시 구제이익 소멸 항변·임금상당액 민사 청구 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '구제신청 중에 계약기간이 끝나면 더 이상 못 다투나요?',
        answer:
          '<strong>근로관계가 종료해 근로자 지위에서 벗어나면 구제명령을 받을 이익이 소멸할 수 있는 영역입니다.</strong> 다만 해고기간 임금 상당액 등 민사 구제 경로가 남을 수 있는 트랙.',
      },
      {
        question: '해고 기간 동안 못 받은 임금은 받을 수 있나요?',
        answer:
          '<strong>해고가 위법으로 다투어진다면 해고기간 임금 상당액을 별도로 청구해볼 수 있는 영역입니다.</strong> 해고일~만료일 미지급 임금 산정 자료 정리.',
      },
      {
        question: '계약직이라도 갱신 기대가 있었다면 결과가 달라지나요?',
        answer:
          '<strong>반복 갱신·갱신 규정 등으로 갱신기대권이 인정되면 다툼 여지가 달라질 수 있는 영역입니다.</strong> 갱신 관련 자료 확보가 우선.',
      },
      {
        question: '노동위에서 각하되면 어떻게 하나요?',
        answer:
          '<strong>해고무효확인·임금 상당액 청구를 민사 절차로 전환해볼 수 있는 영역입니다.</strong> 대한법률구조공단 132 상담과 함께 검토.',
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
      { label: '구제기간 도과 민사 경로', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
      { label: '부당해고 금전보상', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
      { label: '기간제 갱신 기대권', href: '/guide/dismissal/dismissal-fixed-term-renewal-right' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },
];
