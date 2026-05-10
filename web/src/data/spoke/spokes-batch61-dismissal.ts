import { SpokePage } from '../spoke-pages';

// batch61 dismissal — 5개 (2026-05-11)
//
// 고유 존재 이유:
// 1. 정리해고 후 우선 재고용 의무를 이행하지 않은 회사에 대해 차별 점검·재취업 청구 트랙을 정리하는 페이지.
// 2. 외국인 근로자가 비자 만료를 사유로 즉시 해고된 경우, 비자 갱신 의무·해고 정당성 다툼 트랙을 정리하는 페이지.
// 3. 회사 내부조사에서 진술서 강요 후 그 진술을 근거로 징계해고된 근로자가 진술 임의성·절차 흠결 트랙을 정리하는 페이지.
// 4. 병가·휴직 복귀 후 회사가 보직 배치를 거부하거나 대기발령 상태로 두다가 해고로 이어진 경우, 복직권·보직배치 의무 다툼 트랙을 정리하는 페이지.
// 5. 임신 사실을 알린 직후 회사가 사직 압박·보직 변경·해고로 이어진 경우, 모성보호·차별 다툼 트랙을 정리하는 페이지.

export const spokesBatch61Dismissal: SpokePage[] = [
  // ─── 1. dismissal-priority-rehire-after-layoff-discrimination-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-priority-rehire-after-layoff-discrimination-track',
    keyword: '정리해고 우선 재고용 의무 위반',
    questionKeyword: '정리해고 1년 뒤 회사가 같은 자리에 신입을 뽑았어요. 저한테는 연락도 없었습니다. 다툴 수 있나요?',
    ctaKeyword: '정리해고 후 재고용 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정리해고 후 우선 재고용 의무 — 5단계 다툼 정리 | 로앤가이드',
      description:
        '정리해고 1~3년 내 같은 업무에 회사가 신규 채용을 했다면 우선 재고용 의무 위반 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"작년 봄에 \'경영상 어려움\'으로 정리해고 통보를 받았습니다. 그런데 1년쯤 지나 SNS에서 같은 부서에 신입사원이 들어왔다는 소식을 봤어요. 저한테는 \'다시 연락드리겠다\'는 말만 들었고 그 뒤로 한 번도 연락이 없었습니다." 근로기준법 제25조는 정리해고를 한 사용자가 해고된 날부터 3년 이내 같은 업무에 사람을 채용할 때, 해고된 근로자가 원하면 우선적으로 고용해야 한다고 정한 영역입니다. 단순한 도의적 권고가 아니라 사용자가 부담하는 법률상 의무이고, 위반 시 손해배상·재고용 청구 다툼이 가능한 사례가 있습니다. 대법원 2020다267491 사건은 정리해고된 근로자가 우선 재고용을 신청한 후 회사가 제3자를 채용한 경우 재고용 의무 위반에 따른 손해배상이 인정될 수 있다고 본 영역으로, 1년 안에 회사가 신규 채용을 시작했다면 다툼 트랙이 단단하게 열리는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 우선 재고용 의무 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시한·동일업무·통지·신청·구제 5단계로 우선 재고용 의무 다툼을 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 3년 시한</strong> — 해고일로부터 3년 이내 회사가 같은 업무에 사람을 채용하면 의무 대상. 시한 도과 후 채용은 의무가 발생하지 않는 영역이라 시점 확인이 출발입니다.</li>\n<li><strong>② 동일 업무 판정</strong> — 직책 이름 동일성보다 실제 직무 내용·필요 기술이 같은지 판정. 사용자 측이 직무명만 살짝 바꿔도 동일 업무로 평가될 여지가 있습니다.</li>\n<li><strong>③ 재고용 의사 통지 의무</strong> — 사용자는 해고된 근로자에게 채용 사실을 통지해야 하는 영역. 통지 없이 제3자 채용은 위반 정황 자료가 됩니다.</li>\n<li><strong>④ 재고용 희망 신청</strong> — 해고된 근로자가 우선 재고용을 원한다는 의사 표시(서면 권장). 의사 표시가 있어야 의무 발생 자료가 단단해지는 사례.</li>\n<li><strong>⑤ 손해배상·재고용 청구 트랙</strong> — 위반 시 재고용을 명하거나 임금상당액 손해배상이 인정될 여지(대법원 2020다267491). 노동위는 정리해고 자체가 종결된 사안에 대해선 다툼 영역이 제한적이라 민사 트랙이 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 \"이미 정리해고는 끝났고 다시 뽑은 건 별개\"라고 주장해도 근로기준법 제25조는 별개 의무가 아니라 정리해고에 부수하는 의무를 정한 영역이라, 시한·동일업무·통지 부재 자료가 누적되면 손해배상 트랙이 열리는 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재고용 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실 확인·재고용 요청·내용증명·민사 트랙 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채용 사실 자료 수집 (즉시)</strong> — 채용 공고·SNS·내부 메일·동료 진술. 동일 업무·동일 부서 채용 자료가 출발선입니다.</li>\n<li><strong>2단계 — 우선 재고용 의사 표시 (내용증명, 1~2주)</strong> — "근로기준법 제25조에 따른 우선 재고용을 신청한다"는 의사 표시. 회신·접수증이 자료입니다.</li>\n<li><strong>3단계 — 회사 답변 확인 (2~4주)</strong> — 회사가 거절 또는 침묵 시 \'사용자 측 사유\' 자료 정리. 새 채용자와 직무 비교표 작성.</li>\n<li><strong>4단계 — 민사 청구 (해고일 후 3년·시효 5년)</strong> — 재고용 청구 + 임금상당액 손해배상. 소액사건(3,000만원 이하) 또는 일반 민사 트랙. 132 무료 상담에서 청구 검토 가능.</li>\n<li><strong>5단계 — 합의·판결 트랙 (6~12개월)</strong> — 회사 측 화해 제안 시 합의금·재고용 조건 협상. 판결 시 사용자가 의무 이행 또는 손해배상 부담.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정리해고 후 우선 재고용 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 해고 자료 + 재채용 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>정리해고 통보서·해고 사유 통지서</strong> — 해고일·해고 사유·경영상 필요성 명시 자료. 시한 카운트 시작점.</li>\n<li><strong>근로계약서·인사기록카드·직무기술서</strong> — 본인 직무 내용·기술 입증. 동일 업무 판정 자료.</li>\n<li><strong>채용 공고·SNS 캡처·내부 인사발령</strong> — 신규 채용 직무·시점·인원 자료. 가능하면 직무기술서까지.</li>\n<li><strong>우선 재고용 신청 내용증명·회신</strong> — 의사 표시 시점·내용 입증.</li>\n<li><strong>이전 동료 진술서</strong> — 직무 동일성·실제 업무 인계 정황.</li>\n<li><strong>해고 당시 회사 측 사유서(경영상 어려움)</strong> — 회복 후 신규 채용 시 정리해고 정당성 재검토 자료.</li>\n<li><strong>최근 6개월 급여명세서·통상임금 산정 자료</strong> — 손해배상액 산정 기준.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동일 업무 입증은 직무명이 아니라 실제 업무 내용(KPI·결재선·맡은 시스템·고객군)을 비교하는 영역이라, 본인 시절 업무 매뉴얼·이메일 결재선 캡처가 자료로 강력합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"직무가 달라 동일 업무 아니다" 주장 반박</strong> — 직무명·직책이 같지 않아도 실제 업무 내용·기술이 같으면 동일 업무로 평가될 여지. 결재선·시스템 권한이 자료.</li>\n<li><strong>"우선 재고용 의사 표시 없었다" 주장 반박</strong> — 내용증명·이메일이 자료. 카톡·문자도 의사 표시로 평가될 수 있는 영역.</li>\n<li><strong>"이미 3년 지났다" 주장 반박</strong> — 채용 시점이 해고일로부터 3년 이내인지 채용 공고 시점·계약 시점 자료로 점검.</li>\n<li><strong>"경영 회복 안 됐다" 주장 반박</strong> — 회복 여부가 의무 면제 사유로 명시되어 있지 않은 영역이라 자체 판정 어려운 사례.</li>\n<li><strong>민사 청구·중재 트랙</strong> — 132 무료 상담에서 청구 검토 + 화해권고 검토 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 우선 재고용 의무 무료 상담.</li>\n<li><strong>고용노동부 1350</strong> — 정리해고 사후 의무 위반 진정.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 부당해고 구제 안내(시한 경과 시 안내).</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 후 우선 재고용 의무 위반 손해배상 인정',
        summary:
          '대법원 2020다267491 사건(대법원, 2022.05.12 선고)에서 법원은 사용자가 근로기준법 제25조 제1항에 따른 우선 재고용 의무를 부담하는 시점은 해고된 근로자가 재고용을 원하고 사용자가 해고일부터 3년 이내 해고된 근로자가 담당하던 업무와 같은 업무를 할 근로자를 채용한 때라고 보아, 그 의무를 어긴 경우 해고된 근로자는 사용자를 상대로 재고용 청구권을 행사하거나 임금상당액 손해배상을 청구할 수 있다고 판시했습니다.',
        takeaway: '시한·동일업무·우선 신청 세 요건이 모이면 회사가 임의로 의무를 면제할 수 없는 영역이라, 정리해고 후 1~3년 사이 같은 자리에 신규 채용 정황이 보이면 손해배상·재고용 청구 트랙이 단단하게 열리는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '내가 \"다시 일하고 싶다\"고 말로만 한 적 있는데 의사 표시로 인정되나요?',
        answer:
          '<strong>가능하지만 내용증명이 더 안전합니다.</strong> 말로 한 것도 의사 표시로 평가될 여지가 있지만 입증이 어려운 사례라, 내용증명·이메일로 재고용 의사를 명시한 자료가 다툼 단계에서 핵심입니다.',
      },
      {
        question: '직무명은 다른데 하는 일은 같아 보입니다. 동일 업무가 맞을까요?',
        answer:
          '<strong>실제 업무 내용·기술이 같으면 동일 업무로 평가될 여지가 있습니다.</strong> 직무명이 아니라 KPI·결재 권한·맡은 시스템·고객군이 비교 기준이 되는 영역으로, 자료를 누적해 판단합니다.',
      },
      {
        question: '재고용 의무를 어겼다고 노동위에 가도 되나요?',
        answer:
          '<strong>주로 민사 트랙입니다.</strong> 노동위는 정리해고 자체가 종결된 사안에 대해선 다툼 영역이 제한적이라, 손해배상·재고용 청구는 민사로 진행되는 사례가 일반적입니다.',
      },
      {
        question: '경영상 어려움이 아직 회복되지 않았다고 회사가 말합니다',
        answer:
          '<strong>회복 여부는 명시된 면제 사유가 아닌 영역입니다.</strong> 동일 업무에 신규 채용을 한 사실 자체가 \'회복 여부와 무관하게 그 자리에 사람이 필요하다는 회사 판단\'으로 평가될 여지가 있습니다.',
      },
      {
        question: '손해배상은 얼마 정도 가능한가요?',
        answer:
          '<strong>대체로 임금상당액 기준입니다.</strong> 재고용되었다면 받았을 임금 + 위자료가 산정 기준이 되는 사례. 통상임금·근속·자녀 양육 부담 등이 위자료에 반영될 여지가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '정리해고 50일 사전 협의 흠결', href: '/guide/dismissal/dismissal-collective-redundancy-50days-consultation-violation' },
      { label: '정리해고 우선 재고용 의무', href: '/guide/dismissal/dismissal-restructuring-recall-priority-rights' },
      { label: '경영상 해고 기준 다툼', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '회사 합병 후 정리해고', href: '/guide/dismissal/dismissal-company-merger-position-elimination' },
      { label: '부당해고 구제 종합 가이드', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 2. dismissal-foreign-worker-visa-end-fired-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-foreign-worker-visa-end-fired-relief',
    keyword: '외국인 근로자 비자 만료 즉시 해고',
    questionKeyword: '비자 만료 한 달 전인데 회사가 갱신 안 해주고 해고 통보했어요. 외국인이라 다툴 수 있나요?',
    ctaKeyword: '외국인 근로자 해고 트랙 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 근로자 비자 만료 해고 — 5단계 다툼 트랙 | 로앤가이드',
      description:
        '회사가 비자 갱신을 미루다 만료를 사유로 해고했다면 비자 갱신 의무·해고 정당성 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"E-7 비자로 3년 일했어요. 만료 한 달 전부터 회사에 \'갱신 서류 부탁드린다\'고 메일을 보냈는데 답이 없다가, 만료 일주일 전에 \'비자가 끝나면 일할 수 없으니 이번 달까지만 나와라\'는 통보를 받았습니다. 갱신은 회사가 신청해야 가능한데 회사가 안 해주고 만료된 거예요." 외국인 근로자의 체류자격(E-7·E-9·H-2 등) 갱신은 사용자가 출입국·외국인청에 신청해야 하는 사례가 일반적입니다. 회사가 갱신 의사가 없다면 미리 통지해야 근로자가 다른 직장을 알아볼 수 있는 영역이고, 회사가 갱신을 미루다 만료를 빙자해 해고하면 갱신 의무 불이행 + 해고 정당성 부재 두 트랙이 동시에 다툼 가능합니다. 출입국관리법 + 근로기준법이 동시에 적용되는 영역으로 외국인이라는 이유로 노동위 부당해고 구제·임금체불 진정에서 배제되지 않는 사례입니다(대법원 2014다82354 영역).</p>',
    sections: [
      {
        title: 'Q. 외국인 근로자 해고 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 비자 종류·갱신 의무·통지 시점·해고 정당성·구제 트랙 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비자 종류·갱신 주체</strong> — E-7·E-9·H-2 모두 사용자가 갱신 신청. 근로자가 단독 신청할 수 없는 비자에서 회사 비협조는 갱신 불이행 자료.</li>\n<li><strong>② 갱신 미협조 시점</strong> — 메일·카톡으로 갱신 요청한 시점과 회사 답변 시점 비교. 만료 임박까지 회사가 침묵·미루기를 했다면 정황 자료.</li>\n<li><strong>③ 해고 통지 시점·서면</strong> — 근로기준법 제27조는 외국인 근로자에게도 동일 적용. 서면 통지·30일 전 예고가 자료.</li>\n<li><strong>④ 해고 정당사유</strong> — \'비자 만료\'는 사용자가 갱신 의무를 이행하지 않은 사유라 정당사유로 보기 어려운 사례. 본질은 통상·징계·정리해고 어디에도 해당하지 않습니다.</li>\n<li><strong>⑤ 노동위·임금체불 진정 트랙</strong> — 5인 이상 사업장이면 노동위 부당해고 구제 가능(해고일 3개월). 미지급 임금·연차수당은 별도 임금체불 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국인 근로자라는 사유로 한국 노동법 적용이 배제되지 않는 영역. 비자 갱신 미협조·해고 정당사유 부재 두 자료가 모이면 외국인 신분에도 다툼 트랙이 열리는 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 외국인 해고 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 구제 절차를 기준으로 보면 다음 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 비자·해고 자료 보존 (즉시)</strong> — 비자 유효기간·갱신 요청 메일·해고 통보서·근로계약서·급여명세서. 통역 자료도 자료입니다.</li>\n<li><strong>2단계 — 통역 지원 상담 (3~7일)</strong> — 외국인노동자지원센터 1644-0644 무료 상담. 모국어 통역으로 사안 정리.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (3개월 내)</strong> — 5인 이상이면 지방노동위. 신청서·통역 신청서 동시 제출 가능 영역.</li>\n<li><strong>4단계 — 심문회의 (60일 내외)</strong> — 통역 지원 가능. 비자 갱신 미협조 + 해고 정당사유 부재 동시 주장.</li>\n<li><strong>5단계 — 판정·체류자격 유지 (3년)</strong> — 인용 시 원직복직 + 임금상당액 + 사용자 측 비자 갱신 협조 의무 자료. 출입국청 체류자격 변경(D-10 구직) 트랙 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 근로자 비자·해고 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 비자 자료 + 해고 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>여권·외국인등록증·체류자격 사본</strong> — 비자 종류·유효기간 입증.</li>\n<li><strong>갱신 요청 메일·카톡 스크린샷</strong> — 본인이 만료 전 갱신을 요청한 시점·내용 자료.</li>\n<li><strong>해고 통보서·해고 사유 통지서</strong> — 서면 통지·예고 여부 자료.</li>\n<li><strong>근로계약서·취업규칙</strong> — 계약 기간·재계약 조항·해고 사유 명문 규정.</li>\n<li><strong>최근 6개월 급여명세서·통장 입금 내역</strong> — 미지급 임금·연차수당 청구 자료.</li>\n<li><strong>회사 측 비자 신청 협조 자료 부재 입증</strong> — 갱신 신청 접수증 부재·회사 인사 메일 부재.</li>\n<li><strong>통역 지원 신청서</strong> — 노동위·법률구조공단 신청 시 모국어 통역 동반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: E-9·H-2 비자는 사업장 변경 신청도 함께 검토할 수 있는 영역. 해고 후 1개월 안에 사업장 변경 신청을 하면 체류자격이 유지되는 사례가 있어 구직 트랙과 다툼 트랙을 동시에 굴리는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"비자 만료라 어쩔 수 없다" 주장 반박</strong> — 비자 갱신은 사용자가 신청하는 영역이라 회사 비협조는 갱신 의무 불이행 자료. 만료 빙자 해고는 정당사유 부재.</li>\n<li><strong>"외국인은 노동법 적용 안 된다" 주장 반박</strong> — 근로기준법은 국적 무관 적용 영역(외국인근로자고용법 제22조도 차별 금지 명시).</li>\n<li><strong>"근로계약 기간 만료" 주장 반박</strong> — 갱신 기대권이 있는 경우 갱신 거절도 부당해고로 다툴 수 있는 영역(대법원 2007다1418 영역).</li>\n<li><strong>"한국말 못해서 통지서 이해 못한 게 본인 책임" 주장 반박</strong> — 모국어·영어 통지 요구가 자료로 평가될 여지가 있는 영역.</li>\n<li><strong>임금체불 진정 별도 트랙</strong> — 미지급 임금·퇴직금·연차수당은 고용노동부 1350에 별도 진정 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>외국인노동자지원센터 1644-0644</strong> — 모국어 통역 + 무료 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·임금체불 무료 상담.</li>\n<li><strong>고용노동부 1350</strong> — 임금체불·해고예고수당 진정.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 부당해고 구제신청.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인 근로자 근로기준법 적용·국적 무관',
        summary:
          '대법원 2014다82354 사건(대법원, 2015.07.23 선고)에서 법원은 외국인 근로자도 근로기준법상 \'근로자\'에 해당하면 임금·퇴직금·연차수당 청구권이 동일하게 인정되며, 체류자격 유무가 근로기준법 적용 여부를 결정하지 않는다고 판시했습니다. 같은 법리는 부당해고 구제신청·해고예고수당 청구에도 동일하게 적용되는 영역으로 평가되는 사례입니다.',
        takeaway: '외국인이라는 신분 자체가 노동법 적용 배제 사유가 아닌 영역이라, 비자 갱신 미협조·해고 정당사유 부재 자료가 모이면 부당해고 구제·임금체불 진정 트랙이 모두 열리는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '저는 E-9 비자인데도 노동위 부당해고 구제 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 근로기준법은 국적·체류자격과 무관하게 적용되는 영역. 5인 이상 사업장이면 해고일 3개월 내 노동위 부당해고 구제신청 가능합니다.',
      },
      {
        question: '비자 갱신은 누가 신청하나요?',
        answer:
          '<strong>대부분 사용자가 신청합니다.</strong> E-7·E-9·H-2 모두 사용자가 출입국청에 신청하는 사례가 일반적이라, 회사가 신청을 미루면 갱신 의무 불이행 자료가 됩니다.',
      },
      {
        question: '해고 후 비자 만료까지 며칠 안 남았는데 한국에 더 있을 수 있나요?',
        answer:
          '<strong>구직(D-10) 자격 변경을 검토할 수 있습니다.</strong> 출입국·외국인청에 신청하면 일정 기간 한국 체류 + 구직 활동 가능한 영역. 1644-0644 에서 절차 안내 받을 수 있습니다.',
      },
      {
        question: '한국말 못해서 해고 통보서 내용을 이해 못했습니다',
        answer:
          '<strong>통지 흠결 자료가 될 여지가 있습니다.</strong> 외국인근로자고용법은 사용자에게 적정 통역·번역 협조 의무를 부과하는 영역이라, 통지 흠결 다툼이 가능한 사례가 있습니다.',
      },
      {
        question: '미지급 임금·퇴직금도 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 임금채권 시효 3년 내 진정·청구 가능. 외국인노동자지원센터(1644-0644)와 고용노동부(1350) 동시 활용이 효율적인 영역입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '외국인 근로자 미지급 임금', href: '/guide/wage/wage-unpaid-foreign-worker' },
      { label: '계약기간 만료 갱신 거절', href: '/guide/dismissal/dismissal-fixed-term-non-renewal-remedy' },
      { label: '해고예고 30일 위반', href: '/guide/dismissal/dismissal-notice-pay-30days-violation-claim' },
      { label: '서면통지 미비 부당해고', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: '부당해고 구제 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 3. dismissal-internal-investigation-forced-statement-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-internal-investigation-forced-statement-track',
    keyword: '내부조사 진술서 강요 후 징계해고',
    questionKeyword: '회사 내부조사에서 \"인정하면 가벼운 징계\"라고 해서 진술서 썼는데, 그걸로 해고했어요. 다툴 수 있나요?',
    ctaKeyword: '진술 임의성 다툼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '내부조사 진술서 강요 — 5단계 임의성 다툼 | 로앤가이드',
      description:
        '회사가 \'인정하면 감경\' 약속 후 진술서를 받아 징계해고했다면 진술 임의성·절차 흠결 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"감사팀에서 \'개인 비위 의혹\'으로 면담을 요청해 왔습니다. 변호사 동석 없이 4시간 동안 폐쇄된 방에서 \'지금 인정하면 견책·감봉으로 마무리한다\'는 말을 반복적으로 들었어요. 결국 진술서를 직접 손글씨로 썼습니다. 그런데 일주일 뒤 그 진술서를 근거로 \'중대 비위\'라며 징계해고 통보가 왔어요." 회사 내부조사에서 받은 진술서가 강요·약속·압박 환경에서 작성되었다면 그 진술의 임의성이 다툼 가능한 영역입니다. 인사위원회·노동위는 진술이 자유로운 의사로 이루어졌는지(임의성)와 절차의 공정성(변호사 동석 권리·녹취 동의·시간 적정성)을 동시에 심사하는 사례입니다. 대법원 2013두24129 사건은 사용자가 진술의 임의성을 의심할 정황이 있는 경우 그 진술을 징계 근거로 삼는 것에 신중해야 한다는 취지로 본 영역으로, 강요·약속 정황이 있으면 진술 무효 + 절차 흠결 두 트랙이 열립니다.</p>',
    sections: [
      {
        title: 'Q. 진술 임의성 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 환경·약속·동석·녹취·번복 5단계로 진술 임의성을 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 조사 환경</strong> — 시간·장소·인원. 4시간 이상 폐쇄된 방, 다수 조사관 vs 본인 1인은 강압 정황 자료.</li>\n<li><strong>② 약속·이익 제공</strong> — "인정하면 감경" 류 발언. 조사관이 약속한 처분과 실제 처분 차이가 있으면 임의성 부재 자료.</li>\n<li><strong>③ 변호사·동료 동석 가능성</strong> — 사규·취업규칙이 동석 권리를 명시했는지. 거부 정황은 절차 흠결.</li>\n<li><strong>④ 녹취·기록 동의</strong> — 일방 녹취 또는 녹취 거부. 본인 동의 없이 녹취된 자료는 다툼 단계에서 효력 제한 영역.</li>\n<li><strong>⑤ 진술 번복·재진술</strong> — 사후 변호인 자문 후 진술 번복 시 그 정황과 새 진술의 일관성이 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진술서가 손글씨로 작성되었어도 강요·약속·환경 자료가 누적되면 임의성 부재 다툼이 가능한 영역. 회사가 진술서 한 장만 가지고 중대 비위 인정하려 하면 추가 객관 자료 부재가 사용자 측 입증 부담을 키우는 사례입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 진술 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 구제 절차를 기준으로 다음 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 조사 정황 자료 보존 (즉시)</strong> — 조사 날짜·시간·장소·참여 인원·발언 메모. 본인이 사후에 작성한 메모도 자료.</li>\n<li><strong>2단계 — 변호인 자문 + 진술 번복 (1주)</strong> — 변호인 또는 132 자문 후 \'진술 임의성 부재\' 취지의 재진술서 제출.</li>\n<li><strong>3단계 — 인사위원회 소명·재심 (10~30일)</strong> — 진술 임의성 부재 + 객관 자료 부재 주장. 회의록·증인 신청 요구.</li>\n<li><strong>4단계 — 노동위 부당해고 구제신청 (3개월 내)</strong> — 진술 무효 + 절차 흠결 동시 주장. 진술 외 객관 자료 입증 부담은 회사 측.</li>\n<li><strong>5단계 — 판정·민사 병행 (3년)</strong> — 인용 시 원직복직 + 임금상당액. 강요 정황 심한 사례는 위자료 별도 검토 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진술 임의성 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진술 정황 자료 + 절차 자료 두 갈래로 정리합니다.</strong></p>\n<ul>\n<li><strong>조사 면담 일시·장소·참여자 메모</strong> — 시간·인원·약속 발언 기록.</li>\n<li><strong>본인이 쓴 진술서 사본 + 재진술서</strong> — 사용자 측이 가진 원본 외 본인 사본 보존.</li>\n<li><strong>해고 통보서·해고 사유 통지서·인사위원회 회의록</strong> — 절차 이행·미이행 자료.</li>\n<li><strong>사규·취업규칙 (조사 절차·소명 권리 조항)</strong> — 동석·녹취 권리 명문 규정.</li>\n<li><strong>조사실 출입 기록·CCTV·근태 로그</strong> — 조사 시간 입증.</li>\n<li><strong>객관 자료 부재 입증 (사건 자체 증거 부재)</strong> — 진술 외 별도 입증 자료가 없다면 사용자 측 부담.</li>\n<li><strong>132 자문 회신·변호사 의견서</strong> — 임의성 부재 정황 자문.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진술 직후 가족·동료에게 보낸 카톡·문자에 "방금 4시간 조사 받았다" "인정하면 가볍게 한대서 썼다" 같은 정황 메시지가 있으면 사후 정황 자료로 강력합니다. 즉시 백업해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"본인이 직접 쓴 진술서라 임의성 있다" 주장 반박</strong> — 손글씨 자체가 임의성 입증 아닌 영역. 환경·약속 정황 자료가 우선.</li>\n<li><strong>"감경 약속 한 적 없다" 주장 반박</strong> — 사후 카톡·메모·증인이 자료. 조사관이 약속한 처분과 실제 처분 차이가 자료.</li>\n<li><strong>"변호사 동석은 사규에 없다" 주장 반박</strong> — 사규 명문 부재라도 헌법·근로기준법상 절차적 보장 다툼이 가능한 영역.</li>\n<li><strong>"진술 외 객관 자료 있다" 주장 반박</strong> — 회사 측 객관 자료 공개 요구. 자료 없으면 진술 의존 자료 부재.</li>\n<li><strong>"중대 비위라 즉시 해고 정당" 주장 반박</strong> — 비위 입증·비례성·절차 모두 충족해야 정당사유. 진술 흠결이 있으면 비위 자체가 흔들리는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·진술 무효 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 부당해고 구제 안내.</li>\n<li><strong>국가인권위원회 1331</strong> — 조사 과정 인권 침해 진정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술 임의성에 의심이 있는 경우 징계 근거로 삼는 것에 신중',
        summary:
          '대법원 2013두24129 사건(대법원, 2015.05.28 선고)에서 법원은 사용자가 근로자에 대한 징계 사유를 입증할 때 근로자가 작성한 진술서의 임의성에 의심이 있는 정황이 있다면, 그 진술 외에 객관적 자료가 뒷받침되는지를 함께 살피지 않고 진술 자체만으로 비위를 인정하기는 어렵다는 취지로 판시했습니다. 절차상 변호인·동료 동석 권리 또는 충분한 소명 기회 부재도 절차 흠결 다툼 자료로 평가되는 영역입니다.',
        takeaway: '진술서 한 장만으로 중대 비위가 인정되는 것은 아닌 영역이라, 강요·약속·환경 정황 자료를 누적하면 진술 무효 + 절차 흠결 동시 다툼 트랙이 단단하게 열리는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '제가 손글씨로 직접 진술서를 썼는데도 임의성 다툼 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 손글씨 자체가 임의성 입증이 아닌 영역. 4시간 폐쇄 면담·감경 약속·동석 거부 같은 환경 정황이 누적되면 임의성 부재로 평가될 여지가 있습니다.',
      },
      {
        question: '\"인정하면 견책으로 끝낸다\"는 말은 녹음 안 했어요',
        answer:
          '<strong>사후 카톡·메모·동석자 증언이 자료가 됩니다.</strong> 진술 직후 가족·동료에게 보낸 메시지에 정황이 적혀 있으면 자료로 평가되는 영역입니다.',
      },
      {
        question: '회사가 \"중대 비위\"라며 즉시 해고했어요',
        answer:
          '<strong>비위 자체 입증·비례성·절차 모두 다툼 가능합니다.</strong> 진술 의존도가 높으면 객관 자료 부재가 사용자 측 부담이 되는 사례. 절차 흠결만으로도 단독 다툼 트랙입니다.',
      },
      {
        question: '인사위원회에서 변호사 동석을 거부당했어요',
        answer:
          '<strong>절차 흠결 다툼 자료입니다.</strong> 사규 명문이 없더라도 헌법상 적정 절차 보장에서 동석 권리 다툼이 가능한 영역. 회의록·녹취 자료가 핵심입니다.',
      },
      {
        question: '진술을 번복하면 오히려 불리하지 않을까요?',
        answer:
          '<strong>변호인 자문 후 임의성 부재 취지 번복은 정황을 보강합니다.</strong> 번복 시점·이유를 명시한 재진술서가 자료로 자주 인정되는 영역. 132 자문 동시 활용이 효율적입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '인사위원회 절차 흠결', href: '/guide/dismissal/dismissal-disciplinary-rehearing-procedural-defect' },
      { label: '소명 기회 부재 해고', href: '/guide/dismissal/dismissal-disciplinary-warning-no-defense-chance' },
      { label: '중대 비위 즉시 해고 다툼', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '직무 부적격·평가 자료 부재', href: '/guide/dismissal/dismissal-low-performance-defense' },
      { label: '부당해고 구제 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 4. dismissal-medical-leave-return-deployment-refused-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-medical-leave-return-deployment-refused-track',
    keyword: '병가 복귀 후 보직 배치 거부',
    questionKeyword: '병가 6개월 끝나고 복귀했는데 회사가 \"맡길 자리 없다\"며 대기 시키더니 결국 해고했어요',
    ctaKeyword: '복직권·보직 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '병가 복귀 후 보직 배치 거부 — 5단계 복직권 다툼 | 로앤가이드',
      description:
        '병가·휴직 복귀 후 회사가 보직 배치를 거부하고 대기·해고로 이어졌다면 복직권·보직배치 의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고로 6개월 병가를 썼습니다. 진단서에 \'복귀 가능\' 의견이 명시돼 있어서 회사에 복귀 신청을 했는데, \'당분간 맡길 자리가 없다\'며 대기발령 상태로 한 달이 흘렀어요. 그러다 \'대기 기간 보직 미부여\' 사규를 적용해 해고 통보가 왔습니다." 병가·휴직은 근로계약의 종료가 아니라 일시 중단인 영역이고, 사용자는 복귀 의사 표시가 있으면 원래 보직 또는 동등한 보직에 배치할 의무가 있는 사례가 일반적입니다. 회사가 \'자리 없음\'을 사유로 대기발령을 길게 끌고 사규의 \'일정 기간 보직 미부여 시 해고\' 조항을 기계적으로 적용하면, 복직권 침해 + 정당사유 부재 두 트랙이 동시에 다툼 가능합니다. 대법원 2018다251486 사건은 근무성적·근무능력 부진을 이유로 한 대기발령 후 해고에 관해 객관적 평가·향상 기회·재배치 시도 입증이 필요하다고 본 영역으로, 자리 없음 자체는 정당사유로 보기 어려운 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 복직 후 해고 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 복귀 의사·보직 배치·대기발령·재배치 노력·정당사유 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 복귀 의사 표시 시점</strong> — 복귀일·복귀 신청 메일·진단서. 사용자 수령 시점이 자료.</li>\n<li><strong>② 원직·동등 보직 배치 여부</strong> — 원래 보직이 사라졌다면 동등한 직무·임금·근로조건 보직 배치 의무. 일방적 강등은 다툼 자료.</li>\n<li><strong>③ 대기발령 기간·사유</strong> — 사용자 측이 일시적 인사 조치로 보직 부여를 미루는 영역. 장기 대기는 사실상 해고 다툼.</li>\n<li><strong>④ 재배치 노력 입증</strong> — 사용자가 본인 직무 또는 유사 직무 부서로 배치를 시도했는지(대법원 2018다251486 영역).</li>\n<li><strong>⑤ 해고 정당사유</strong> — "자리 없음" 자체는 정리해고도 아니고 통상·징계해고도 아닌 영역. 정당사유 부재 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 병가·휴직 복귀자에 대해 사용자는 보직 배치 노력 의무를 부담하는 영역. \'자리 없음\'을 명분으로 한 대기 + 해고는 사용자가 재배치 노력 입증을 못 하면 부당해고로 평가될 여지가 있는 사례입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 복직권 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 구제 절차를 기준으로 다음 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 복귀 의사·진단서 보존 (즉시)</strong> — 복귀 신청 메일·진단서·회사 답변. 보직 부여 거부 시점 자료.</li>\n<li><strong>2단계 — 보직 배치 요구 내용증명 (1~2주)</strong> — "원직 또는 동등 보직 배치 요청" 명시. 회사 답변 부재 자체가 자료.</li>\n<li><strong>3단계 — 재배치 노력 자료 공개 요구</strong> — 인사위원회 회의록·사내 공석 자료·타 부서 결원 자료 공개 요청.</li>\n<li><strong>4단계 — 노동위 부당해고 구제신청 (3개월 내)</strong> — 복직권 침해 + 정당사유 부재 동시 주장. 5인 이상 사업장.</li>\n<li><strong>5단계 — 판정·민사 (3년)</strong> — 인용 시 원직복직 + 임금상당액. 대기발령 기간 임금 산정 자료 별도.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병가 복귀·보직 거부 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 복귀 자료 + 보직 자료 두 갈래로 정리합니다.</strong></p>\n<ul>\n<li><strong>병가 신청서·진단서·복귀 진단서</strong> — 휴직 기간·복귀 가능 시점 입증.</li>\n<li><strong>복귀 신청 메일·카톡·내용증명</strong> — 복귀 의사 표시 시점.</li>\n<li><strong>대기발령 통보서</strong> — 사용자 측 사유·기간 명시 자료.</li>\n<li><strong>해고 통보서·해고 사유 통지서</strong> — 보직 미부여 사유 명시 여부.</li>\n<li><strong>근로계약서·취업규칙·복직 관련 사규</strong> — 사용자 측 보직 부여 의무 명문 규정.</li>\n<li><strong>사내 공석·채용 공고 자료</strong> — 같은 시기 다른 자리에 사람이 뽑힌 정황.</li>\n<li><strong>최근 6개월 급여명세서·평균임금 산정 자료</strong> — 대기발령 기간 임금·임금상당액 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 복귀 시 진단서에 \'근무 가능 의견\' 또는 \'경한 업무 수행 가능\'이 명시되어 있으면 사용자 측 \'건강상 부적합\' 사유 주장이 어려운 영역이라, 진단서 표현을 미리 의사와 조율하는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"맡길 자리 없다" 주장 반박</strong> — 사용자가 재배치 노력 입증 못 하면 정당사유 부재 자료. 사내 공석·채용 공고가 비교 자료.</li>\n<li><strong>"건강상 정상 근무 불가" 주장 반박</strong> — 진단서 \'복귀 가능\' 의견이 자료. 사용자가 별도 의학적 자료 제시 못 하면 자의 평가.</li>\n<li><strong>"대기발령 기간 사규로 해고" 주장 반박</strong> — 사규 적용도 사회통념상 고용관계 계속 불가 정도 판정이 별도 자료(대법원 2018다251486 영역).</li>\n<li><strong>"본인이 복귀 거부했다" 주장 반박</strong> — 복귀 신청 메일·진단서가 자료. 본인 의사 표시 입증이 핵심.</li>\n<li><strong>대기발령 임금 청구</strong> — 대기발령 기간 동안 사용자 책임 사유면 임금 70% 이상 지급 의무 영역. 별도 청구 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 복직권·부당해고 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 부당해고 구제 안내.</li>\n<li><strong>고용노동부 1350</strong> — 대기발령 임금·해고예고수당 진정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령 후 해고에 재배치 노력·사회통념상 계속 불가 정도 입증 필요',
        summary:
          '대법원 2018다251486 사건(대법원, 2022.09.15 선고)에서 법원은 취업규칙·인사규정에서 근무성적 부진에 따른 대기발령 후 일정 기간 보직 미부여 시 해고한다고 정한 경우에도, 그 해고가 정당하기 위해서는 객관적 평가 자료·향상 기회 제공·재배치 시도 + 사회통념상 고용관계를 계속할 수 없을 정도의 사정이 입증되어야 한다고 판시했습니다. 사규의 기계적 적용만으로는 정당사유가 인정되지 않는 사례로 평가됩니다.',
        takeaway: '병가 복귀 후 \'자리 없음\' 사유 대기발령·해고는 사용자 측이 재배치 노력 입증 못 하면 정당사유 부재로 평가될 여지가 있는 영역이라, 사내 공석·채용 공고 자료를 모으면 다툼 트랙이 단단하게 열리는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '진단서에 \"복귀 가능\"이라고 명시돼 있는데도 회사가 못 받아준다고 합니다',
        answer:
          '<strong>복직권 침해 다툼 자료입니다.</strong> 진단서 의견이 명시되어 있으면 사용자가 별도 의학적 자료 제시 못 하면 \'건강상 부적합\' 주장이 어려운 영역.',
      },
      {
        question: '대기발령 기간이 길어졌어요. 임금은 얼마 받아야 하나요?',
        answer:
          '<strong>사용자 책임 사유면 평균임금 70% 이상 휴업수당 영역입니다.</strong> 별도 청구 트랙. 산정 자료 보존 후 132 또는 1350 진정 검토 가능.',
      },
      {
        question: '회사가 \"동등 보직 제안했는데 본인이 거부했다\"고 합니다',
        answer:
          '<strong>제안 보직이 동등한지가 다툼 자료입니다.</strong> 임금·직무·근로조건이 명백히 낮으면 동등 보직 부재. 강등·일방적 전직 다툼이 별도 트랙입니다.',
      },
      {
        question: '사규에 \"대기 1개월 후 해고\" 조항이 있어요',
        answer:
          '<strong>사규 적용도 사회통념상 계속 불가 정도 별도 판정 영역(대법원 2018다251486).</strong> 사규 기계 적용만으로 정당사유 인정되지 않는 사례가 일반적입니다.',
      },
      {
        question: '복귀 신청을 카톡으로만 했는데 자료가 될까요?',
        answer:
          '<strong>됩니다.</strong> 다만 사용자 수령 회신·확인이 있는 것이 강합니다. 추가로 메일·내용증명 보강이 효율적입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '병가 중 해고', href: '/guide/dismissal/dismissal-during-sick-leave' },
      { label: '휴직 복귀 후 즉시 해고', href: '/guide/dismissal/dismissal-injury-recovery-period-rejection' },
      { label: '대기발령 후 해고', href: '/guide/dismissal/dismissal-low-performance-defense' },
      { label: '복귀 후 보직 박탈', href: '/guide/dismissal/dismissal-leave-return-position-deprived' },
      { label: '부당해고 구제 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 5. dismissal-pregnancy-announce-immediate-pressure-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-announce-immediate-pressure-track',
    keyword: '임신 발표 후 사직 압박',
    questionKeyword: '임신했다고 말하자마자 \"바쁜 시기에 곤란하다\"며 사직 권유 받았어요. 다툴 수 있나요?',
    ctaKeyword: '임신 직후 압박·해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임신 발표 후 사직 압박 — 5단계 모성보호 다툼 | 로앤가이드',
      description:
        '임신 사실을 알린 직후 사직 권유·보직 변경·해고로 이어졌다면 모성보호·차별 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임신 8주차에 직속 상사에게 알렸습니다. \'축하한다\' 한마디 뒤 \'다음 주 미팅에서 인사팀하고 얘기 좀 하자\'고 하더니, 인사팀이 \'바쁜 시기에 임신은 회사 일정에 차질이 있다, 본인 건강도 생각해서 사직을 고려해보라\'고 했어요. 며칠 뒤엔 한직 부서로 인사발령이 났고, 한 달 뒤 \'적응 어려움\'을 이유로 해고 통보가 왔습니다." 근로기준법 제74조·남녀고용평등법 제11조는 임신·출산·육아휴직을 이유로 한 불리한 처우(해고·사직 권유·보직 변경 등)를 명시적으로 금지하는 영역입니다. 임신을 인지한 사용자가 단기간 내 사직 권유·보직 변경·평가 하향 → 해고로 이어진 사례는 시간 인접성 자체가 차별 정황 자료가 되는 사례입니다. 대법원 2014다87489 사건은 임신·출산 관련 불리한 처우의 정당사유 입증 부담이 사용자 측에 있다고 본 영역으로, 임신 발표와 해고 사이 시간 간격이 짧을수록 다툼 트랙이 단단해집니다.</p>',
    sections: [
      {
        title: 'Q. 임신 후 해고 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발표 시점·사용자 인지·후속 처우·시간 인접성·정당사유 입증 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임신 발표 시점</strong> — 본인이 회사·직속 상사·인사팀에 알린 시점(메일·카톡·구두 + 증인) 자료.</li>\n<li><strong>② 사용자 인지 자료</strong> — 회사가 임신 사실을 알았다는 정황(메일 답신·미팅·인사 메모) 자료.</li>\n<li><strong>③ 후속 처우 (사직 권유·보직 변경·평가 하향)</strong> — 발표 직후 시작된 인사 조치들. 시간 인접성이 핵심 자료.</li>\n<li><strong>④ 시간 인접성 (1~3개월 내)</strong> — 발표·인지 후 단기간 내 해고면 차별 정황 자료가 더 단단해지는 영역.</li>\n<li><strong>⑤ 정당사유 입증 부담 (사용자 측)</strong> — 회사 측이 \'임신과 무관한 별도 사유\'를 객관 자료로 입증해야 하는 영역(대법원 2014다87489 영역).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임신 사실을 알린 후 회사가 갑작스럽게 평가·보직·해고 조치를 했다면, 그 시간 인접성 자체가 다툼 자료로 평가될 여지가 있는 영역. 사용자 측이 \'임신 무관 사유\' 객관 자료를 못 내면 차별·부당해고 정황으로 평가되는 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임신·해고 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 + 고용평등 진정 동시 트랙으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임신 인지·처우 자료 보존 (즉시)</strong> — 임신 발표 메일·카톡·미팅 메모·동료 진술. 후속 인사발령·평가표·해고 통보서.</li>\n<li><strong>2단계 — 132·1644-2010 자문 (3~7일)</strong> — 부당해고 + 모성보호 위반 동시 자문.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (3개월 내) + 고용노동부 진정</strong> — 차별 + 부당해고 동시 주장. 5인 이상이면 노동위 + 진정.</li>\n<li><strong>4단계 — 심문회의·조사 (60일 내외)</strong> — 사용자 측 \'임신 무관 사유\' 입증 부담. 평가표·인사 자료 공개 요구.</li>\n<li><strong>5단계 — 판정·민사·형사 (3년)</strong> — 인용 시 원직복직 + 임금상당액. 차별 정황 심한 사례는 위자료 별도. 모성보호 위반 형사고발도 검토 영역(2년 이하 징역).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임신 직후 압박·해고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임신 자료 + 후속 처우 자료 두 갈래로 정리합니다.</strong></p>\n<ul>\n<li><strong>임신 확인서·산부인과 진단서</strong> — 임신 시점·예정일 입증.</li>\n<li><strong>회사 발표 자료 (메일·카톡·미팅 메모)</strong> — 사용자 인지 시점 자료.</li>\n<li><strong>인사발령·전직 통보서</strong> — 후속 보직 변경 자료.</li>\n<li><strong>인사평가표 (이전 vs 임신 후)</strong> — 평가 하향 정황 자료.</li>\n<li><strong>해고 통보서·해고 사유 통지서</strong> — 사용자 측 주장 사유.</li>\n<li><strong>사직 권유 발언 메모·녹취·증인 진술</strong> — 정황 자료.</li>\n<li><strong>최근 6개월 급여명세서·평균임금·통상임금 자료</strong> — 임금상당액 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임신 발표는 가능하면 메일·카톡으로 남기는 것이 효율적입니다. 구두로만 알린 경우 상사·동료 진술서로 보강할 수 있는 영역. 사후에 \'몰랐다\'는 사용자 주장은 메일·카톡 답신 자료로 깨지는 사례가 많습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"임신과 무관한 별도 사유" 주장 반박</strong> — 입증 부담은 사용자 측. 평가표·시간 인접성이 비교 자료.</li>\n<li><strong>"임신 사실 몰랐다" 주장 반박</strong> — 메일·카톡·미팅 메모가 자료. 직속 상사 인지면 회사 인지로 평가될 여지.</li>\n<li><strong>"본인이 자발적으로 사직했다" 주장 반박</strong> — 사직 권유 발언·정황 자료(녹취·메모·동료 증언)가 자료.</li>\n<li><strong>"한직 발령은 본인 건강 배려" 주장 반박</strong> — 본인 의사 표시 없는 일방 발령은 모성보호 명목 차별 자료.</li>\n<li><strong>형사 + 진정 동시 트랙</strong> — 남녀고용평등법 제37조 모성보호 위반은 2년 이하 징역 영역. 132·고용노동부 1350 동시 활용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·모성보호 무료 상담.</li>\n<li><strong>고용노동부 1350</strong> — 모성보호 위반 진정.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 부당해고 구제.</li>\n<li><strong>여성가족부 1366</strong> — 여성 노동·가족 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임신·출산 관련 불리한 처우 정당사유 입증은 사용자 측',
        summary:
          '대법원 2014다87489 사건(대법원, 2016.10.27 선고)에서 법원은 사용자가 근로자에게 임신·출산·육아 등을 이유로 불리한 처우를 한 경우, 그 처우가 임신·출산 등과 무관한 별도의 정당한 사유에 의한 것임을 사용자가 객관적 자료로 입증해야 한다고 판시했습니다. 입증을 못 한 경우 차별 정황이 인정되어 부당해고·차별 시정 대상이 되는 영역입니다.',
        takeaway: '임신 발표와 사직 권유·보직 변경·해고가 시간적으로 인접한 사례는 입증 부담이 사용자 측에 있는 영역이라, 평가표·메일·인사 자료가 자료로 누적되면 다툼 트랙이 단단하게 열리는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '임신 알리자마자 한직으로 보직 변경됐어요',
        answer:
          '<strong>차별 정황 자료입니다.</strong> 본인 의사 표시 없는 일방 발령은 모성보호 명목 차별로 평가될 여지. 메일·인사발령서 보존이 핵심.',
      },
      {
        question: '\"육아 부담 생각해서 사직 권한다\"는 말을 들었어요',
        answer:
          '<strong>사직 권유 발언 자체가 차별 자료입니다.</strong> 남녀고용평등법 제11조 위반 정황. 발언 시점·내용 메모·동료 증언으로 보강.',
      },
      {
        question: '평가 등급이 갑자기 떨어졌어요',
        answer:
          '<strong>평가 하향이 임신 시점과 인접하면 차별 정황 자료.</strong> 이전 평가표·평가자 변경 여부·평가 기준 변동을 비교 자료로 정리.',
      },
      {
        question: '회사가 \"본인이 자발적으로 사직했다\"고 합니다',
        answer:
          '<strong>사직 의사가 자발적이지 않으면 사직 의사 무효 다툼 가능 영역.</strong> 압박 정황·녹취·동료 진술이 자료. 대법원 2017다228700 영역.',
      },
      {
        question: '형사고발도 가능한가요?',
        answer:
          '<strong>모성보호 위반은 2년 이하 징역 영역입니다.</strong> 남녀고용평등법 제37조. 노동위 + 진정 + 형사고발 동시 트랙 검토 가능.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '임신 기간 해고', href: '/guide/dismissal/dismissal-pregnancy-period-protect' },
      { label: '출산휴가 복귀 후 해고', href: '/guide/dismissal/dismissal-maternity-leave-return-immediate-fired' },
      { label: '육아휴직 복귀 후 보직 박탈', href: '/guide/dismissal/dismissal-leave-return-position-deprived' },
      { label: '사직 강요 무효', href: '/guide/dismissal/dismissal-forced-resignation-letter-invalidation' },
      { label: '부당해고 구제 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },
];
