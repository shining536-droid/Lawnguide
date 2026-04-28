import { SpokePage } from '../spoke-pages';

// batch49 divorce 4 + inheritance 4 = 8개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 사실혼 관계가 일방적으로 파기된 사람이 사실혼 성립을 입증하고 위자료·재산분할을 청구하기 위한 요건과 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 양육비 채권을 받지 못한 양육친이 상대방 명의 재산이 보이지 않을 때 이행명령·감치·이행관리원 추심·명단공개 4가지 강제집행 경로를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 이혼 재산분할 협의·심판을 앞둔 사람이 결혼 전 보유 재산·상속·증여 등 특유재산을 분할 대상에서 제외시키는 인정 기준과 입증 자료를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 배우자 외도를 의심하지만 부인하는 상황에 처한 사람이 카드내역·위치정보·통화기록·메시지 백업 등 부정행위 입증 증거를 합법적으로 보강하도록 돕는 페이지다.
// 5. 이 페이지는 피상속인 빚이 상속재산보다 많은 것 같은 상속인이 상속포기와 한정승인 중 어느 쪽이 유리한지 비교 기준과 3개월 신고 기한을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 상속재산 분할협의가 결렬된 공동상속인이 가정법원 분할심판 단계로 진행하는 절차와 조정전치 흐름을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 피상속인 사망 후 6개월 상속세 신고 기한을 앞둔 상속인이 신고 단계·세무서 제출 서류·분할납부 신청 절차를 정리하도록 돕는 페이지다.
// 8. 이 페이지는 다른 형제·자녀가 유증·증여를 많이 받아 본인 몫이 적어진 유류분권자가 유류분 부족액 산정 방식과 1년/10년 청구 시한을 정리하도록 돕는 페이지다.

export const spokesBatch49DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce / de-facto-marriage-alimony-claim ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-marriage-alimony-claim',
    keyword: '사실혼 파기 위자료',
    questionKeyword: '사실혼이 일방적으로 파기됐는데 위자료를 받을 수 있나요?',
    ctaKeyword: '사실혼 파기 위자료 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사실혼 파기 위자료 인정 요건과 청구 절차 | 로앤가이드',
      description:
        '혼인신고 없이 사실혼 관계로 살다 일방 파기된 경우 사실혼 성립 요건과 위자료·재산분할 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>혼인신고 없이 오랜 기간 부부처럼 살다가 한쪽이 일방적으로 관계를 끊으면 "법적으로 부부가 아니니 아무 권리도 없는 것 아닐까" 걱정되시기 쉽습니다. 다행히 판례는 사실혼도 부부공동생활의 실체가 인정되면 일정한 법률효과를 인정하고, 정당한 사유 없는 파기에 대해서는 위자료·재산분할 청구를 검토할 수 있도록 보장하고 있습니다. 어떤 자료로 사실혼을 입증하고 어떤 단계로 청구하는지 정리해보겠습니다.</p>',
    sections: [
      {
        title: '사실혼 성립 요건과 인정 자료',
        content:
          '<p><strong style="color:#1e3a5f">사실혼은 ① 혼인의 의사 ② 부부공동생활의 실체 두 가지가 모두 인정되어야 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>혼인의 의사</strong> — 양 당사자가 부부로서 함께 살겠다는 합의가 있어야 합니다. 결혼식 진행, 양가 가족 인사, 청첩장, 결혼사진 등이 입증 자료가 됩니다.</li>\n<li><strong>부부공동생활의 실체</strong> — 동거 기간, 생활비 분담, 자녀 출산·양육, 친지·이웃의 부부 인식 등 객관적 사정으로 판단됩니다. 동거 기간이 길수록 인정 가능성이 높아집니다.</li>\n<li><strong>중혼적 사실혼은 원칙적으로 보호 제외</strong> — 일방이 다른 사람과 법률혼 상태에 있다면 사실혼으로 보호받기 어려운 경우가 많습니다. 단 법률혼이 사실상 파탄된 후의 사실혼은 예외적으로 인정될 소지가 있습니다.</li>\n<li><strong>실무 입증 자료</strong> — 주민등록상 동일 세대 등재, 공동 명의 임대차계약, 가족 단톡방 캡처, 명절·기념일 사진, 보험 수익자·국민연금 사실혼 등록 자료 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인신고가 없어도 결혼식과 동거 기간이 길고 가족·이웃이 부부로 인식해왔다면 사실혼 인정 가능성이 비교적 높습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사실혼 파기 청구 4단계',
        content:
          '<p><strong style="color:#1e3a5f">정당한 사유 없는 일방 파기는 위자료·재산분할 청구 사유가 될 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 성립 입증 자료 정리</strong> — 결혼식 사진·청첩장·동거 자료(주민등록·임대차계약)·가족 인사 자료를 시간순으로 정리. 입증 강도가 청구 결과에 직결.</li>\n<li><strong>2단계 — 파기 사유와 책임 입증</strong> — 일방 파기·외도·폭력·유기 등 책임 사유를 입증. 메시지·녹취·진단서 등 객관적 자료 확보.</li>\n<li><strong>3단계 — 가정법원 청구 (위자료 + 재산분할)</strong> — 다류 가사소송으로 위자료 청구, 마류 가사비송으로 재산분할 청구. 한 사건으로 병합 청구 가능합니다.</li>\n<li><strong>4단계 — 보전처분 검토</strong> — 상대방의 재산 처분이 우려되면 가압류·가처분 신청. 본안과 병행 가능합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 입증 자료와 위자료·재산분할 청구 절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사실혼 입증 + 책임 입증 + 재산 자료 3가지 축으로 준비합니다.</strong></p>\n<ul>\n<li><strong>사실혼 입증 자료</strong> — 결혼식 사진·청첩장·예식장 계약서·하객 명단·결혼반지 영수증</li>\n<li><strong>동거 입증 자료</strong> — 주민등록등본(동일 세대)·임대차계약서·관리비 영수증·우편물 수령 기록</li>\n<li><strong>가족·사회 인식 자료</strong> — 가족 단톡방 캡처·명절 가족모임 사진·이웃·친지 진술서·SNS 게시물</li>\n<li><strong>파기 책임 입증</strong> — 외도·폭력·유기 등 사유 입증 자료(문자·녹취·진단서·112 신고 기록)</li>\n<li><strong>공동재산 자료</strong> — 부동산 등기부등본·통장 거래내역·보험 가입증서·자동차 등록원부</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 국민연금 사실혼 배우자 등록 이력이 있으면 강력한 입증 자료가 됩니다. 국민연금공단에 사실혼 등록 여부를 먼저 조회해보세요.</blockquote>',
      },
      {
        title: '흔한 실수 — 사실혼 청구가 막히는 이유',
        content:
          '<p><strong style="color:#1e3a5f">청구 자체보다 입증 부족·시기 도과로 좌절되는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>입증 자료 부재</strong> — "오래 살았으니 당연히 인정되겠지"라고 생각하고 결혼식 사진·동거 자료를 보관하지 않으면 사실혼 자체가 부정될 수 있습니다.</li>\n<li><strong>재산분할 제척기간 도과</strong> — 사실혼 해소일로부터 2년 이내 청구해야 합니다(민법 제839조의2 유추적용). 사실혼 해소일은 사실심 변론종결 시까지 다툼 가능.</li>\n<li><strong>위자료 시효</strong> — 위자료 청구는 파기 사실을 안 날부터 3년, 파기일부터 10년이 일반적 단기·장기 시효.</li>\n<li><strong>중혼적 사실혼 주장</strong> — 상대방이 법률혼 배우자가 있는 상태였음을 모르고 사실혼으로 살았다면 청구가 어려워질 소지가 있어 사전 호적·혼인관계증명서 확인이 안전.</li>\n<li><strong>변호사 상담 검토</strong> — 사실혼은 법률혼보다 입증 부담이 무거워 사건별 검토가 중요. 무료 상담은 대한법률구조공단(132)에서 받아보실 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "헤어진 지 1년 반 됐으니 천천히 해도 되겠지"라는 판단은 위험합니다. 사실혼 해소일로부터 2년 이내 청구가 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할 기준 시점',
        summary:
          '대법원 2022므11027 사건(대법원, 2024.01.04 선고)에서 법원은 사실혼 해소를 원인으로 한 재산분할에서 분할의 대상이 되는 재산과 액수를 정하는 기준 시점은 사실혼이 해소된 날이라고 판시하면서, 사실혼 해소 이후 사실심 변론종결 시까지 사이에 혼인 중 공동의 노력으로 형성·유지한 부동산 등에 발생한 외부적·후발적 사정은 한정적으로 가액 산정에 참작될 수 있다고 정리했습니다.',
        takeaway: '사실혼 재산분할은 해소일 기준으로 분할 대상이 확정되어, 그 이후의 가격 변동은 제한적으로만 반영될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '혼인신고를 한 적이 없는데도 위자료 청구가 가능한가요?',
        answer:
          '<strong>사실혼 성립이 인정되면 정당한 사유 없는 일방 파기에 대해 위자료 청구를 검토할 수 있습니다.</strong> 결혼식·동거 기간·가족 인사 등 부부공동생활의 실체를 입증하는 것이 첫걸음입니다.',
      },
      {
        question: '사실혼 동거 기간이 짧으면 인정이 어렵나요?',
        answer:
          '<strong>동거 기간만으로 결정되지 않습니다.</strong> 결혼식 진행, 자녀 출산, 양가 인사, 공동재산 형성 등 부부공동생활의 실체를 종합 판단하므로 짧은 기간이라도 다른 자료가 충분하면 인정될 소지가 있습니다.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>사실혼 해소일로부터 2년 이내가 일반적 제척기간으로 인정됩니다(민법 제839조의2 유추적용).</strong> 기간 도과 후에는 청구권 자체가 소멸할 수 있어 시효 관리가 중요합니다.',
      },
      {
        question: '상대방이 법률상 배우자가 있는 사람이었다면 사실혼이 인정되나요?',
        answer:
          '<strong>중혼적 사실혼은 원칙적으로 보호받기 어렵습니다.</strong> 다만 상대방의 법률혼이 사실상 파탄 상태였다면 예외적으로 인정될 소지가 있어 사건별 검토가 필요합니다. 변호사 상담을 권장드립니다.',
      },
      {
        question: '혼자 입증 자료를 모으기 어려운데 도움받을 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 사실혼 분쟁 무료 상담을 받아보실 수 있습니다.</strong> 가정법원에는 가사조사관 제도가 있어 사실관계 조사를 도와줄 수 있고, 사건이 복잡하면 가사 전문 변호사 조력을 검토해보세요.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '이혼 후 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-deadline' },
      { label: '재산분할 비율 산정 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
    ],
  },

  // ─── 2. divorce / child-support-no-asset-enforcement ───
  {
    domain: 'divorce',
    slug: 'divorce-child-support-no-asset-enforcement',
    keyword: '양육비 무재산 강제집행',
    questionKeyword: '양육비를 안 주는데 상대방이 재산이 없어요. 강제집행 방법이 있나요?',
    ctaKeyword: '양육비 강제집행 4가지 경로 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 압류 후 무재산일 때 강제집행 4가지 경로 | 로앤가이드',
      description:
        '상대방 명의 재산이 보이지 않아도 이행명령·감치·양육비이행관리원 추심·명단공개 등 4가지 경로를 검토할 수 있습니다. 단계별 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"양육비 판결문은 받았는데 통장에 돈이 없어요. 부동산도 없고 직장도 없다고 해요." 양육비 미지급 사건에서 가장 답답한 순간입니다. 다행히 우리 법은 단순한 압류 외에 이행명령·감치·양육비이행관리원 추심·명단공개·운전면허 정지·출국금지까지 단계적 강제 수단을 마련해두고 있습니다. 어느 경로부터 시도하면 효율적인지 정리해보겠습니다.</p>',
    sections: [
      {
        title: '4가지 강제집행 경로 — 압류가 안 통할 때',
        content:
          '<p><strong style="color:#1e3a5f">민사 강제집행이 어려울 때는 가사소송법·양육비이행법상 추가 수단을 함께 활용할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이행명령 (가사소송법 제64조)</strong> — 가정법원이 의무자에게 양육비를 지급하라고 명령. 정당한 이유 없이 불이행하면 1,000만원 이하 과태료 부과 가능.</li>\n<li><strong>② 감치명령 (가사소송법 제68조)</strong> — 이행명령 후 3기 이상 미이행 시 30일 이내 감치(구금) 신청 가능. 사실상 가장 강한 압박 수단.</li>\n<li><strong>③ 양육비이행관리원 추심·선지급</strong> — 이행관리원이 채무자 재산조회·추심·소송지원·일부 선지급(한시적) 수행. 대부분 무료 지원.</li>\n<li><strong>④ 명단공개·운전면허 정지·출국금지</strong> — 양육비이행법 제21조의2 이하. 상습 미지급자 대상 행정 제재. 사회적 압박 효과.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 압류가 어려운 사건일수록 ② 감치 → ③ 이행관리원 추심을 함께 진행하면 효과가 큽니다. 법률구조공단(132)·이행관리원이 모두 무료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양육비 강제집행 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·가사소송법 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 집행권원 확보 (양육비 심판·조정)</strong> — 협의이혼 시 양육비부담조서 또는 가정법원 심판·조정 결정문. 강제집행의 출발점.</li>\n<li><strong>2단계 — 이행명령 신청 (집행권원 후 즉시)</strong> — 가정법원에 이행명령 신청. 결정 후 의무자가 미이행하면 과태료 + 감치 단계로 진행.</li>\n<li><strong>3단계 — 3기 이상 미이행 시 감치명령 신청 (이행명령 후)</strong> — 정당한 이유 없이 3기 이상 미이행 확인 후 감치 신청. 30일 이내 감치 가능.</li>\n<li><strong>4단계 — 양육비이행관리원 신청 (병행 가능)</strong> — 추심·소송지원·일부 선지급(한시적). 대부분 무료. 처음부터 이행관리원에 신청해 1~3단계를 위임 진행할 수도 있습니다.</li>\n<li><strong>5단계 — 명단공개·운전면허 정지·출국금지 신청</strong> — 1년 이상·3,000만원 이상 미지급 등 요건 충족 시 양육비이행관리원 위원회 심의 거쳐 행정 제재 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">감치·이행관리원·명단공개 절차와 신청 자료, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">집행권원 + 미이행 입증 + 신청서 3가지 묶음으로 준비합니다.</strong></p>\n<ul>\n<li><strong>집행권원</strong> — 양육비부담조서·가정법원 심판·조정 결정문(확정증명원 포함)</li>\n<li><strong>가족관계 서류</strong> — 가족관계증명서·기본증명서·자녀 주민등록등본</li>\n<li><strong>미이행 입증</strong> — 양육비 입금 통장 내역·미입금 내역·문자·녹취 등 미지급 증빙</li>\n<li><strong>송달용 서류</strong> — 의무자 주소지 확인 자료(주민등록 초본·등기우편 회신)</li>\n<li><strong>이행관리원 신청서</strong> — 양육비 이행지원 신청서·동의서·소득 증빙(선지급 신청 시)</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비이행관리원(www.childsupport.or.kr / 1644-6621)에 한 번 신청하면 추심·소송지원을 위임할 수 있어 직접 진행 부담이 크게 줄어듭니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 강제집행이 막히는 이유',
        content:
          '<p><strong style="color:#1e3a5f">절차 순서를 어기거나 입증을 빠뜨리면 신청이 기각될 수 있습니다.</strong></p>\n<ul>\n<li><strong>이행명령 없이 바로 감치 신청</strong> — 감치는 이행명령 + 3기 이상 미이행 요건 충족 후에야 신청 가능. 단계 건너뛰면 기각될 소지.</li>\n<li><strong>"기" 계산 오류</strong> — "3기"는 양육비 지급 주기(통상 매월) 3회분을 말합니다. 일부 지급된 달이 있으면 미이행 기수 계산이 달라질 수 있어 주의.</li>\n<li><strong>의무자 송달 실패</strong> — 의무자 주소지가 잘못되어 결정문이 송달되지 않으면 절차가 중단. 주민등록 초본 발급으로 최신 주소 확인 필요.</li>\n<li><strong>정당한 사유 인정</strong> — 의무자가 실직·중병 등 정당한 사유를 입증하면 감치가 기각될 수 있습니다. 이때는 양육비 감액 협의·이행관리원 추심으로 전환 검토.</li>\n<li><strong>변호사 무료 상담은 없습니다</strong> — 양육비이행관리원·법률구조공단(132)이 사실상의 무료 상담 창구. 사선 변호사 상담은 비용이 들 수 있어 무료 기관 활용이 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 이행명령 → 감치 → 명단공개로 이어지는 경로는 시간이 1~2년 걸릴 수 있습니다. 양육비이행관리원에 추심을 위임하면 병행 진행이 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 과거 양육비 청구 분담 기준',
        summary:
          '대법원 2023스637 사건(대법원, 2024.10.08 선고)에서 법원은 부모 중 어느 한쪽만이 자녀를 양육하게 된 경우 양육하는 사람이 과거 양육비에 대하여 상대방에게 분담을 청구할 수 있고, 분담 범위를 정할 때에는 당사자들의 이혼 시 이루어진 재산분할 또는 재산상 합의의 유무·내용, 자녀의 연령·생활 정도, 양육비 지급 능력 등을 종합 고려해야 한다고 판시했습니다.',
        takeaway: '판결문에 명시된 양육비뿐 아니라 협의이혼 후 미지급된 과거 양육비도 분담 청구 대상이 될 수 있어 강제집행 대상 범위를 함께 검토하는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '상대방이 일을 안 하는데도 강제집행이 가능한가요?',
        answer:
          '<strong>이행명령·감치·명단공개 등은 재산 유무와 별개로 진행할 수 있습니다.</strong> 압류 대상은 없지만 의무 자체는 존재하므로 행정 제재와 감치로 압박해 자발적 지급을 유도하는 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '양육비이행관리원 신청 비용이 드나요?',
        answer:
          '<strong>대부분 무료입니다.</strong> 추심·소송지원·재산조회 등이 무료로 제공되며, 일부 한시적 선지급 제도는 별도 요건 심사 후 지원됩니다. 자세한 내용은 1644-6621에 문의해보세요.',
      },
      {
        question: '명단공개는 누가 어떻게 결정하나요?',
        answer:
          '<strong>양육비이행관리원이 일정 요건(미지급 기간·금액)을 갖춘 사건을 위원회에 회부해 심의·결정합니다.</strong> 1년 이상·3,000만원 이상 미지급 등 기준 충족 시 신청 가능하며, 결정되면 인터넷에 공개됩니다.',
      },
      {
        question: '운전면허 정지·출국금지도 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 양육비이행법상 일정 요건 충족 시 운전면허 정지(경찰청)·출국금지(법무부) 신청을 검토할 수 있습니다. 양육비이행관리원이 신청 절차를 안내합니다.',
      },
      {
        question: '감치명령으로 구속됐는데도 안 갚으면 어떻게 하나요?',
        answer:
          '<strong>감치 후에도 미지급이 계속되면 추가 감치 또는 형사 절차(채무불이행에 따른 재산명시 위반 등)를 검토할 수 있습니다.</strong> 양육비이행관리원·가사 전문 변호사 상담을 통해 다음 단계 전략을 정리해보세요.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 미지급 강제집행 절차', href: '/guide/divorce/child-support-enforcement-process' },
      { label: '양육비이행관리원 추심 안내', href: '/guide/divorce/child-support-agency-collection' },
      { label: '양육비 감치명령 요건', href: '/guide/divorce/child-support-detention-order' },
      { label: '양육비 명단공개 신청 기준', href: '/guide/divorce/child-support-name-disclosure' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 3. divorce / special-property-exclusion-criteria ───
  {
    domain: 'divorce',
    slug: 'divorce-special-property-exclusion-criteria',
    keyword: '특유재산 재산분할 제외',
    questionKeyword: '결혼 전부터 갖고 있던 재산이나 부모님께 받은 재산도 재산분할 대상인가요?',
    ctaKeyword: '특유재산 분할 제외 기준 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '부부 특유재산 재산분할 제외 인정 기준 5가지 | 로앤가이드',
      description:
        '결혼 전 보유 재산·상속·증여로 취득한 특유재산은 원칙적으로 재산분할 대상에서 제외될 수 있습니다. 인정 기준과 입증 자료를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 재산분할에서 가장 자주 다투는 쟁점이 "이건 결혼 전부터 내 거였다"는 특유재산 주장입니다. 부모님 상속분, 결혼 전에 모은 예금, 결혼 전 매수한 부동산 등을 분할 대상에서 제외할 수 있는지가 비율 차이를 크게 만듭니다. 다만 단순 명의만으로는 부족하고, 가치 유지·증식 기여까지 함께 검토되므로 입증 자료를 미리 정리해두는 것이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 특유재산은 무조건 분할 대상에서 빠지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙은 분할 대상에서 제외되지만, 가치 유지·증식에 상대방 기여가 있으면 부분적으로 포함될 수 있습니다.</strong></p>\n<ul>\n<li><strong>특유재산의 정의 (민법 제830조 제1항)</strong> — 부부 일방이 혼인 전부터 가진 재산 + 혼인 중 자기 명의로 취득한 재산. 원칙적으로 그 일방의 단독 소유.</li>\n<li><strong>분할 대상 제외 원칙</strong> — 특유재산은 원칙적으로 재산분할 대상에서 제외. 결혼 전 부동산·예금·주식, 부모 상속·증여 받은 재산 등.</li>\n<li><strong>예외 — 가치 유지·증식 기여</strong> — 상대방의 가사·경제적 기여로 가치가 유지되거나 증가했다면 그 증가분 한도 내 분할 대상으로 포함될 소지가 있습니다(대법원 일관된 법리).</li>\n<li><strong>예외 — 특유재산이 부부공동재산으로 전화</strong> — 결혼 후 특유재산이 다른 자산과 혼화되어 구분이 어려워졌다면 부부공동재산으로 평가될 수 있습니다.</li>\n<li><strong>실무 인정 사례</strong> — 결혼 전 매수한 아파트가 30년 혼인 동안 가치 상승. 원칙은 특유재산이지만 상승분 일부는 상대방 기여로 인정될 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 특유재산이라고 단순 주장만으로는 부족하고, 출처·취득 시점·자금 흐름을 객관적 자료로 입증하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: 'Q. 특유재산으로 인정되는 5가지 유형은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 출처가 명확하고 부부공동노력과 무관한 재산이 대표적입니다.</strong></p>\n<ol>\n<li><strong>① 결혼 전 보유 재산</strong> — 결혼 시점 이전부터 본인 명의로 가지고 있던 부동산·예금·주식·자동차. 결혼 전 통장 잔고 내역이 핵심 입증 자료.</li>\n<li><strong>② 부모로부터 상속받은 재산</strong> — 혼인 중에 받은 상속재산도 특유재산. 상속재산분할협의서·등기부등본으로 입증.</li>\n<li><strong>③ 부모로부터 증여받은 재산</strong> — 부모가 직접 본인 명의로 증여한 부동산·자금. 증여세 신고 자료가 결정적 증빙.</li>\n<li><strong>④ 일방의 노력과 무관한 재산</strong> — 본인 노력으로 취득했더라도 부부공동노력과 무관한 부분(예: 결혼 전 산재보상금·국가유공자 보상금).</li>\n<li><strong>⑤ 명백히 일방 명의로 관리·운용된 재산</strong> — 결혼 후 취득했지만 일방의 명의·자금·관리로만 운용된 재산. 자금 흐름 입증 시 특유재산 추정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">특유재산 입증 자료와 분할 대상 제외 전략, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 입증 자료가 결정적인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 출처·시점·자금 흐름을 객관적으로 보여주는 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>등기부등본 + 매매계약서</strong> — 부동산 취득 시점·매매가·자금 출처를 시간순으로 확인. 결혼 전 취득은 등기부에 그대로 남아 있음.</li>\n<li><strong>은행 거래 내역</strong> — 결혼 시점 통장 잔고와 결혼 후 입출금 흐름. 특유재산이 어떻게 유지·증식되었는지 추적.</li>\n<li><strong>증여세 신고서·납부증명</strong> — 부모로부터 증여받은 시점과 금액을 세무서 자료로 명확히 입증.</li>\n<li><strong>상속재산분할협의서·상속세 신고서</strong> — 상속받은 재산임을 증명. 등기 이전 자료와 함께 정리.</li>\n<li><strong>자금 출처 흐름도</strong> — 결혼 전 → 결혼 시점 → 변론종결 시점까지 자금이 어떻게 흘러왔는지 한 페이지로 정리. 법원이 가장 좋아하는 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자금이 결혼 후에 부부 공동계좌로 입금되거나 가족 생활비로 사용된 적이 있다면 특유재산 추정이 깨질 수 있습니다. 자금 분리 관리 자료를 함께 보관해두세요.</blockquote>',
      },
      {
        title: 'Q. 특유재산도 일부 분할 대상이 될 수 있는 이유는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방의 가치 유지·증식 기여가 인정되면 그 부분에 한해 분할 대상으로 포함될 수 있습니다.</strong></p>\n<ul>\n<li><strong>유지 기여</strong> — 결혼 전 부동산을 가지고 있었지만 결혼 기간 중 수리·관리·세금 납부를 상대방 기여로 했다면 그만큼 유지 기여 인정.</li>\n<li><strong>증식 기여</strong> — 상대방의 가사·양육으로 본인이 직장·사업에 집중할 수 있어 특유재산 가치가 증가한 경우 증식 기여 평가.</li>\n<li><strong>증가분 한도</strong> — 분할 대상은 원칙적으로 증가분에 한정. 원본 자체가 분할 대상이 되는 경우는 드뭅니다.</li>\n<li><strong>장기 혼인 = 기여 인정 폭 확대</strong> — 30년 이상 혼인이면 특유재산이 부부공동노력과 결합되어 평가되는 경향이 강해집니다.</li>\n<li><strong>입증 책임</strong> — "특유재산이다"는 본인이, "기여로 가치가 유지·증식됐다"는 상대방이 입증. 자료를 미리 모아두면 협의·심판에서 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 특유재산이라도 결혼 후 부부 공동자금이 투입되었다면 그 부분은 부부공동재산으로 전화될 수 있어, 자금 흐름 분리 관리가 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 특유재산이 재산분할 대상이 되는 경우',
        summary:
          '대법원 2002스36 사건(대법원, 2002.08.28 선고)에서 법원은 부부 일방의 특유재산이라 하더라도 다른 일방이 그 재산의 유지에 기여한 경우에는 재산분할의 대상이 될 수 있다고 판시하면서, 재산분할액 산정의 기초가 되는 재산가액 평가 방법과 장래의 퇴직금 포함 여부, 일방이 부담한 채무의 처리 등 재산분할 실무의 핵심 기준을 정리했습니다.',
        takeaway: '특유재산도 상대방의 유지·증식 기여가 인정되면 부분적으로 분할 대상에 포함될 수 있어, 본인 기여 자료를 함께 정리하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '결혼 전에 산 아파트인데 30년이 지났습니다. 분할 대상이 되나요?',
        answer:
          '<strong>원칙은 특유재산으로 분할 대상이 아니지만, 30년 혼인 동안 상대방 기여로 가치가 유지·증식된 부분은 일부 분할 대상이 될 소지가 있습니다.</strong> 가치 변동·관리 기여 자료를 정리해 협의·심판에 제출하는 것이 좋습니다.',
      },
      {
        question: '부모님께 결혼하면서 받은 전세자금도 특유재산인가요?',
        answer:
          '<strong>증여 자료(증여세 신고·계좌 이체 내역)가 명확하면 특유재산으로 인정될 수 있습니다.</strong> 다만 부부 공동 명의로 등기되었거나 공동생활비에 혼입되었다면 부부공동재산으로 평가될 소지가 있어 자금 분리 관리가 중요합니다.',
      },
      {
        question: '결혼 후 부모님 상속받은 재산은 어떻게 되나요?',
        answer:
          '<strong>혼인 중 상속받은 재산도 특유재산입니다.</strong> 상속재산분할협의서·등기 이전 자료로 입증하면 분할 대상 제외 가능성이 높지만, 결혼 후 부부 공동자금이 투입되었다면 그 부분만큼 다툼 여지.',
      },
      {
        question: '명의는 본인인데 자금은 부부 공동에서 나왔으면요?',
        answer:
          '<strong>특유재산 추정이 깨질 수 있습니다.</strong> 명의만으로는 부족하고 자금 출처가 본인 단독 자금이어야 합니다. 자금 흐름 추적이 가능한 자료를 모아두는 것이 안전합니다.',
      },
      {
        question: '특유재산 입증을 혼자 준비하기 어려운데 도움받을 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 가사 전문 변호사 상담을 검토해보시는 것도 도움이 되며, 자금 흐름 정리는 세무사 협조도 효과적입니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '특유재산과 기여도 평가', href: '/guide/divorce/divorce-property-division-inheritance' },
      { label: '재산분할 비율 산정 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '배우자 은닉 재산 찾는 절차', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 4. divorce / affair-denial-evidence-strengthening ───
  {
    domain: 'divorce',
    slug: 'divorce-affair-denial-evidence-strengthening',
    keyword: '외도 부인 증거 보강',
    questionKeyword: '배우자가 외도를 부인하는데 어떤 증거를 모아야 인정받나요?',
    ctaKeyword: '외도 입증 증거 보강 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외도 부인 배우자 증거 보강 필수 4가지 | 로앤가이드',
      description:
        '외도를 부인하는 배우자에게 부정행위를 입증하려면 카드내역·위치정보·통화기록·메시지 백업이 핵심입니다. 합법적 수집 방법과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"명백히 외도를 했는데도 절대 아니라고 잡아떼요. 어떻게 입증해야 위자료를 받을 수 있을까요?" 외도 입증은 이혼 위자료 청구에서 가장 결정적이지만, 동시에 가장 다툼이 많은 영역입니다. 사진·녹취 같은 직접 증거가 없어도 카드내역·위치정보·통화기록·메시지 백업을 종합하면 부정행위가 인정될 수 있습니다. 다만 불법 수집 시 증거 능력이 부정되거나 형사 책임이 따를 수 있어 합법 수집 원칙을 지키는 것이 안전합니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 외도 입증 4단계',
        content:
          '<p><strong style="color:#1e3a5f">증거 수집 → 정리 → 청구 → 보전처분 순으로 차분히 진행하면 입증 강도가 커집니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단서 수집 (의심 단계)</strong> — 카드 사용 패턴(특정 호텔·식당), 늦은 귀가 시간, 휴대폰 사용 변화, SNS 활동 등 단서를 일자별로 메모.</li>\n<li><strong>2단계 — 객관적 증거 수집 (합법 범위 내)</strong> — 카드명세서(부부 공동 명의·본인 가족카드)·통화기록(본인 통신사 조회분)·블랙박스·CCTV 등 합법 자료 우선 확보.</li>\n<li><strong>3단계 — 가정법원 청구</strong> — 이혼 + 위자료 + 재산분할 청구. 상간자에 대한 별도 위자료 청구도 함께 제기 가능. 청구 시 증거 자료 시간순 정리 제출.</li>\n<li><strong>4단계 — 보전처분 검토</strong> — 부정행위 입증과 별도로 배우자가 재산을 처분할 우려가 있다면 가압류·가처분 신청. 이혼 절차와 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외도 입증 자료와 위자료·상간자 청구 절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '4가지 핵심 증거 — 합법 수집 방법',
        content:
          '<p><strong style="color:#1e3a5f">직접 증거가 없어도 4가지 자료를 종합하면 부정행위 인정 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>① 카드내역</strong> — 본인 명의 가족카드 사용내역, 부부 공동 결제 카드의 사용처·시간. 특정 호텔·모텔·고급 음식점 결제 패턴이 단서.</li>\n<li><strong>② 위치정보</strong> — 본인 명의 차량 블랙박스·내비게이션 기록, 가족 공유 캘린더·구글 타임라인(본인 계정), 톨게이트 통행료 영수증.</li>\n<li><strong>③ 통화기록</strong> — 본인 명의 통신 회선의 통화내역. 특정 번호와의 반복 통화·심야 통화 패턴이 입증 자료.</li>\n<li><strong>④ 메시지·SNS 백업</strong> — 가족 공유 폰·태블릿에 남은 메시지, 부부 공동 PC에 자동 동기화된 카톡 백업, SNS 공개 게시물 캡처.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 배우자 휴대폰을 무단 잠금해제·도청·해킹하는 것은 통신비밀보호법 위반으로 형사처벌 대상이 될 수 있고 증거능력이 부정될 소지도 있습니다. 합법 수집 범위를 가능한 한 지켜야 합니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">증거를 시간순 + 카테고리별로 정리하면 청구 시 설득력이 커집니다.</strong></p>\n<ul>\n<li><strong>가족관계 서류</strong> — 혼인관계증명서·기본증명서·자녀 가족관계증명서</li>\n<li><strong>카드·금융 자료</strong> — 가족카드 사용내역(최근 1~2년)·통장 거래내역·결제처 영수증</li>\n<li><strong>위치·이동 자료</strong> — 블랙박스 영상·차량 내비 기록·톨게이트 통행료·항공권/호텔 예약 내역(공유 메일 등)</li>\n<li><strong>통신 자료</strong> — 본인 회선 통화내역·문자내역·SNS 메시지 캡처(본인 또는 공유 계정)</li>\n<li><strong>증인·정황 자료</strong> — 목격자 진술서·SNS 공개 게시물·블로그 후기·공동 지인 증언</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시간순 표로 정리(날짜·장소·카드·통화·블랙박스)하면 단편 자료가 패턴으로 보여 법원 설득력이 크게 올라갑니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 증거가 부정되는 이유',
        content:
          '<p><strong style="color:#1e3a5f">불법 수집·증인 부재·시기 도과로 청구가 좌절되는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>배우자 휴대폰 무단 열람</strong> — 동의 없이 잠금해제·문자·카톡 열람은 통신비밀보호법 위반 소지. 증거능력 부정 + 형사처벌 위험.</li>\n<li><strong>녹음 함정</strong> — 본인이 대화 당사자인 녹음은 합법, 제3자 간 대화 무단 녹음은 위법. 합법 범위 확인 필요.</li>\n<li><strong>추적장치·해킹앱 설치</strong> — 배우자 차량·휴대폰에 무단 설치는 위법. 적법한 위치정보(본인 명의 차량 블랙박스 등)만 활용.</li>\n<li><strong>위자료 시효 (3년)</strong> — 외도 사실을 안 날부터 3년 내 청구. 시기를 놓치면 청구권 소멸 가능.</li>\n<li><strong>상간자 정보 부족</strong> — 상간자에게 별도 위자료를 청구하려면 신원 특정이 필요. 차량번호·SNS·근무지 등 합법 자료로 특정 시도, 어려우면 사실조회 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 흥신소·심부름센터의 미행·도청·해킹 의뢰는 본인까지 형사책임에 휘말릴 수 있습니다. 가사 전문 변호사 상담을 검토해보시는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정행위와 위자료',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하거나 그 유지를 방해하고 그에 대한 배우자로서의 권리를 침해하여 배우자에게 정신적 고통을 가하는 행위는 원칙적으로 불법행위를 구성하며, 부부 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 판시했습니다.',
        takeaway: '외도가 입증되면 배우자뿐 아니라 상간자에게도 위자료 청구가 가능하므로 부부 일방·제3자에 대한 청구를 함께 검토해보는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '직접 외도 장면 사진이 없으면 위자료를 못 받나요?',
        answer:
          '<strong>직접 증거가 없어도 카드내역·통화기록·위치 자료를 종합 입증하면 부정행위가 인정될 수 있습니다.</strong> 단편 자료를 시간순으로 패턴화해 제출하는 것이 핵심입니다.',
      },
      {
        question: '배우자 휴대폰을 잠깐 봐서 메시지를 캡처했는데 증거가 되나요?',
        answer:
          '<strong>동의 없는 무단 열람은 통신비밀보호법 위반 소지가 있어 증거능력이 부정될 수 있습니다.</strong> 가족 공유 폰·자동 동기화된 PC 등 본인 접근 권한이 있는 자료를 우선 활용해보세요.',
      },
      {
        question: '상간자에게도 위자료를 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 부정행위는 배우자와 상간자가 공동불법행위 책임을 부담하므로(2025므10716 판결 취지), 두 사람 모두에 대해 위자료 청구를 검토할 수 있습니다.',
      },
      {
        question: '위자료 청구 시한이 있나요?',
        answer:
          '<strong>외도 사실을 안 날부터 3년, 행위가 있은 날부터 10년이 일반적 시효입니다.</strong> 시기를 놓치면 청구권이 소멸할 수 있어 시효 관리가 중요합니다.',
      },
      {
        question: '증거 수집과 정리가 어려워요. 도움받을 수 있는 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 가사 전문 변호사 상담을 검토하면 합법 수집 범위와 청구 전략을 함께 정리할 수 있어 효율적입니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외도 입증 증거 수집 가이드', href: '/guide/divorce/divorce-affair-evidence-collection' },
      { label: '상간자 위자료 청구 절차', href: '/guide/divorce/divorce-third-party-alimony' },
      { label: '이혼 후 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-deadline' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
    ],
  },

  // ─── 5. inheritance / renunciation-vs-limited-acceptance ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-vs-limited-acceptance',
    keyword: '상속포기 한정승인 비교',
    questionKeyword: '아버지가 빚을 많이 남기셨는데 상속포기와 한정승인 중 어느 쪽이 유리한가요?',
    ctaKeyword: '상속포기 한정승인 선택 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '상속포기 vs 한정승인 — 빚 많을 때 유리한 선택 기준 | 로앤가이드',
      description:
        '피상속인이 빚을 남긴 상속인은 3개월 이내에 상속포기 또는 한정승인 중 하나를 선택해야 합니다. 후순위 상속인 영향·청산 절차 등 비교 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"빚이 많은 것 같은데 상속을 포기해야 하나요, 한정승인을 해야 하나요?" 두 제도 모두 빚을 떠안지 않는다는 결과는 같지만 후속 절차와 후순위 상속인에게 미치는 영향이 크게 다릅니다. 시한도 둘 다 3개월이라 시간을 끌 여유가 없습니다. 어떤 사정에서 어느 쪽이 유리한지 정리해두는 것이 첫걸음입니다.</p>',
    sections: [
      {
        title: 'Q. 상속포기와 한정승인은 어떻게 다른가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속재산을 받는지 여부와 후순위 상속인에게 책임이 넘어가는지가 핵심 차이입니다.</strong></p>\n<ul>\n<li><strong>상속포기 (민법 제1041조)</strong> — 상속인 지위 자체를 포기. 상속재산·채무 모두 받지 않음. 후순위 상속인(손자녀·직계존속·형제자매)이 자동으로 상속인이 되어 다시 선택해야 함.</li>\n<li><strong>한정승인 (민법 제1028조)</strong> — 상속재산 한도 내에서만 채무 변제 책임. 상속인 지위는 유지되지만 고유재산은 보호. 후순위 상속인에게 영향이 가지 않음.</li>\n<li><strong>공통점</strong> — 둘 다 가정법원에 신고. 시한은 상속개시를 안 날로부터 3개월(민법 제1019조 제1항).</li>\n<li><strong>비용</strong> — 상속포기는 절차가 단순. 한정승인은 신문 공고·채권자 통지·청산 절차 필요해 비용·기간이 더 들어감.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 후순위 가족(손자녀·부모·형제)에게 빚이 넘어가는 것이 우려되면 한정승인이 유리할 수 있습니다. 절차 부담을 줄이려면 가족 전원이 함께 상속포기 + 1인만 한정승인하는 조합도 검토 가능합니다.</blockquote>',
      },
      {
        title: 'Q. 어느 쪽이 유리한지 어떻게 판단하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 빚의 규모·후순위 상속인 존재·재산 정리 의지에 따라 달라집니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속재산 vs 채무 비교</strong> — 빚이 재산보다 명백히 많으면 한정승인 또는 포기. 비교가 어렵거나 추후 자산 발견 가능성이 있으면 한정승인이 안전.</li>\n<li><strong>2단계 — 후순위 상속인 영향 점검</strong> — 손자녀·부모·형제자매가 상속을 받게 되면 곤란한 경우 한정승인 검토. 가족 전원이 포기하면 채무가 다음 순위로 계속 넘어감.</li>\n<li><strong>3단계 — 청산 절차 부담</strong> — 한정승인은 신문 공고·채권자 통지·변제 순서 등 절차가 복잡. 시간·비용·전문가 조력 부담 고려.</li>\n<li><strong>4단계 — 조합 검토</strong> — 가족 다수가 상속포기 + 1인이 한정승인을 하는 방식이 후순위 보호 + 절차 단일화에 효과적.</li>\n<li><strong>5단계 — 변호사·법률구조공단 상담</strong> — 사건별 사정이 달라 단정이 어렵습니다. 대한법률구조공단(132)에서 무료 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속포기·한정승인 비교와 가족 조합 전략, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 가정법원 신고 절차는 어떻게 진행되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망일로부터 3개월 이내 가정법원에 신고하는 것이 원칙입니다.</strong></p>\n<ul>\n<li><strong>관할 법원</strong> — 피상속인의 최후 주소지 가정법원 또는 가정지원.</li>\n<li><strong>신청서</strong> — 상속포기 신고서 또는 한정승인 신고서. 가정법원 양식 사용. 인지대·송달료 납부.</li>\n<li><strong>첨부 서류</strong> — 가족관계증명서·기본증명서·혼인관계증명서·주민등록등본·인감증명서·인감도장·피상속인 사망진단서·상속재산목록(한정승인의 경우).</li>\n<li><strong>심사·수리</strong> — 신청 후 통상 2~4주 내 심판문 수령. 한정승인의 경우 수리 후 5일 내 신문 공고 시작.</li>\n<li><strong>특별한정승인</strong> — 3개월이 지난 후 빚을 알게 된 경우 안 날부터 3개월 내 특별한정승인 가능(민법 제1019조 제3항). 단 중과실이 없어야 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가족 여러 명이 상속포기를 하는 경우 같은 날 함께 신고하면 절차가 간편합니다. 가족 중 한 명이 한정승인을 맡고 나머지는 포기하는 조합도 자주 활용됩니다.</blockquote>',
      },
      {
        title: 'Q. 자녀 전원이 상속포기를 하면 손자녀에게 빚이 가나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 후순위 상속인이 자동 승계하므로 가족 전원이 포기·한정승인을 진행해야 안전합니다.</strong></p>\n<ul>\n<li><strong>승계 순위 (민법 제1000조)</strong> — 직계비속(자녀·손자녀) → 직계존속(부모·조부모) → 형제자매 → 4촌 이내 방계혈족.</li>\n<li><strong>자녀 포기 시 효과</strong> — 자녀 전원이 포기하면 손자녀(있는 경우) 또는 직계존속(없는 경우)이 상속인이 되어 다시 3개월 내 선택해야 합니다.</li>\n<li><strong>2020그42 판례</strong> — 피상속인의 배우자와 자녀 중 자녀 전부가 상속을 포기한 경우, 배우자가 단독상속인이 됩니다. 배우자도 함께 진행해야 안전.</li>\n<li><strong>실무 권장 조합</strong> — 배우자 + 자녀 1인 한정승인 + 나머지 가족 상속포기. 후순위 상속인 보호 + 청산 절차 단일화.</li>\n<li><strong>특별한정승인 활용</strong> — 후순위 상속인이 뒤늦게 빚을 알게 된 경우 안 날로부터 3개월 내 특별한정승인 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "내가 포기했으니 끝났다"는 안심은 위험합니다. 후순위 가족(부모·형제·조부모·손자녀)에게 채권자가 청구할 수 있으니 가족 전체 전략을 함께 정하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 1순위 상속인 포기와 채권자 대응',
        summary:
          '대법원 2009다49964 사건(대법원, 2009.10.15 선고)에서 법원은 채권자가 채무자의 사망 이후 그 1순위 상속인의 상속포기 사실을 알지 못하고 1순위 상속인을 상대로 소를 제기하였다가 실제 상속인을 피고로 하는 피고경정신청을 한 경우에 관한 절차 처리 기준을 정리하면서, 상속포기 효력과 후순위 상속인 승계 구조를 확인했습니다.',
        takeaway: '1순위 상속인이 포기하면 채권자는 후순위 상속인을 상대로 청구를 이어갈 수 있어, 가족 전체가 포기·한정승인을 함께 진행하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '상속포기와 한정승인 중 어느 쪽이 더 빠른가요?',
        answer:
          '<strong>상속포기가 절차상 더 단순합니다.</strong> 한정승인은 신문 공고·채권자 통지·청산 절차가 추가로 진행되어 시간이 더 걸리지만, 후순위 가족 보호 효과가 큽니다.',
      },
      {
        question: '3개월 시한을 놓쳤는데 방법이 없나요?',
        answer:
          '<strong>특별한정승인 제도가 있습니다.</strong> 빚이 있다는 사실을 중대한 과실 없이 모르고 있다가 알게 된 경우, 안 날부터 3개월 내 특별한정승인 신고 가능(민법 제1019조 제3항).',
      },
      {
        question: '한정승인 후에도 빚을 갚지 않아도 되나요?',
        answer:
          '<strong>상속재산 한도까지만 변제하면 부족분은 면책됩니다.</strong> 다만 신문 공고·변제 순서 등 절차상 의무를 어기면 한정승인 효력이 일부 상실되어 고유재산 책임이 생길 수 있어 절차를 정확히 지키는 것이 중요합니다.',
      },
      {
        question: '가족 모두 상속포기를 하면 끝나는 건가요?',
        answer:
          '<strong>후순위 상속인(부모·조부모·손자녀·형제자매)이 자동 승계됩니다.</strong> 그 분들도 3개월 내 선택을 해야 하므로 가족 전원에게 알리고 함께 절차를 진행하는 것이 안전합니다.',
      },
      {
        question: '도움받을 수 있는 무료 상담 기관이 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 상속포기·한정승인 무료 법률상담을 받아보실 수 있습니다.</strong> 가족 사정이 복잡하면 가사 전문 변호사 상담을 검토하면 청산 절차까지 안전하게 진행할 수 있습니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인과 상속포기 비교', href: '/guide/inheritance/inheritance-limited-acceptance-vs-renunciation-choice' },
      { label: '한정승인 신청 절차', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속포기 절차와 효과', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '특별한정승인 3개월 시작 시점', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '상속재산 숨겨진 빚 찾기', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
    ],
  },

  // ─── 6. inheritance / division-disagreement-court-judgment ───
  {
    domain: 'inheritance',
    slug: 'inheritance-division-disagreement-court-judgment',
    keyword: '상속재산 분할심판',
    questionKeyword: '상속재산 분할협의가 결렬됐는데 가정법원에 어떻게 청구하나요?',
    ctaKeyword: '상속재산 분할심판 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속재산 분할협의 결렬 시 가정법원 분할심판 절차 | 로앤가이드',
      description:
        '공동상속인 간 분할협의가 결렬되면 가정법원 분할심판으로 진행할 수 있습니다. 협의 → 조정 → 심판 단계와 구체적 상속분 산정을 지금 확인하세요.',
    },
    intro:
      '<p>"형제자매끼리 합의가 안 돼서 부동산 명의 이전도 못 하고 예금 인출도 못 하고 있어요." 상속재산 분할은 공동상속인 전원의 합의가 원칙이라 한 명만 반대해도 멈춥니다. 이럴 때는 가정법원에 분할심판을 청구해 법원 결정으로 분할을 마무리할 수 있습니다. 협의 → 조정 → 심판으로 이어지는 단계와 구체적 상속분 산정 기준을 정리해보겠습니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 분할심판 4단계',
        content:
          '<p><strong style="color:#1e3a5f">가정법원 가사비송 절차에 따라 협의 → 조정 → 심판으로 이어집니다.</strong></p>\n<ol>\n<li><strong>1단계 — 협의 시도와 결렬 확인</strong> — 공동상속인 전원의 합의가 원칙. 한 명이라도 반대하면 협의 결렬. 추후 청구를 위해 협의 시도 자료(메시지·이메일·내용증명) 보관.</li>\n<li><strong>2단계 — 가정법원 조정 신청</strong> — 마류 가사비송사건 조정 신청. 통상 2~4개월 소요. 조정 성립 시 판결과 동일한 효력 발생. 비용·시간 절감 효과.</li>\n<li><strong>3단계 — 분할심판 청구</strong> — 조정 불성립 시 본안 분할심판으로 이행. 법원이 직권으로 분할 대상·평가·기여분·특별수익을 조사·판단(2024스866 판례 참조).</li>\n<li><strong>4단계 — 심판 결정과 등기·인출</strong> — 심판 확정 후 부동산 등기·예금 인출 등 분할 실행. 다른 상속인이 협조하지 않아도 심판문으로 단독 등기 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">분할심판 절차와 구체적 상속분 산정, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '구체적 상속분 — 법정상속분과 어떻게 달라지나요?',
        content:
          '<p><strong style="color:#1e3a5f">분할심판은 법정상속분이 아닌 "구체적 상속분"으로 분할됩니다. 특별수익·기여분이 반영됩니다.</strong></p>\n<ul>\n<li><strong>법정상속분</strong> — 민법이 정한 기본 비율(배우자 1.5 : 자녀 각 1). 협의 출발선으로만 사용.</li>\n<li><strong>특별수익 반영</strong> — 상속인 중 일부가 생전 증여·유증을 받았다면 그만큼 미리 받은 것으로 보고 상속분에서 차감(민법 제1008조).</li>\n<li><strong>기여분 반영</strong> — 상속인 중 일부가 피상속인 부양·재산 형성·간병에 특별 기여했다면 기여분 청구로 상속분 가산(민법 제1008조의2).</li>\n<li><strong>구체적 상속분 산정 기준 시기</strong> — 상속개시 시. 평가는 분할 시점이지만 권리관계 확정은 사망 시점 기준(2024스866 판례 취지).</li>\n<li><strong>가분채권 예외</strong> — 금전채권 같은 가분채권은 원칙적으로 즉시 분할되지만, 초과특별수익자가 있으면 분할 대상으로 포함될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "법정상속분으로 원칙적으로 1/n"이라고 단정 짓지 말고, 특별수익·기여분 자료를 함께 정리해 청구해야 본인에게 유리한 결과를 검토해볼 수 있습니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">상속관계 + 재산 + 특별수익·기여분 자료를 시간순으로 정리합니다.</strong></p>\n<ul>\n<li><strong>상속관계 서류</strong> — 피상속인 기본증명서·가족관계증명서·혼인관계증명서·제적등본·상속인 전원 가족관계증명서</li>\n<li><strong>상속재산 자료</strong> — 부동산 등기부등본·금융자산 잔고증명·차량 등록원부·상속재산 조회 결과</li>\n<li><strong>특별수익 입증</strong> — 생전 증여 자료(증여세 신고서·계좌 이체 내역·등기 이전 자료)</li>\n<li><strong>기여분 입증</strong> — 부양·간병·재산 형성 기여 자료(병원 진료 기록·간병 일지·자금 투입 내역)</li>\n<li><strong>협의 결렬 자료</strong> — 협의 시도 메시지·이메일·내용증명·결렬 사실 진술서</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속재산 조회는 "안심상속 원스톱서비스"(정부24)를 활용하면 부동산·금융·자동차·국세 등을 일괄 조회할 수 있어 효율적입니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 분할심판이 늘어지는 이유',
        content:
          '<p><strong style="color:#1e3a5f">자료 부족·당사자 누락·평가 다툼으로 절차가 길어지기 쉽습니다.</strong></p>\n<ul>\n<li><strong>공동상속인 전원 당사자화 누락</strong> — 분할심판은 공동상속인 전원이 당사자가 되어야 합니다. 한 명이라도 빠지면 보정·재신청 필요.</li>\n<li><strong>특별수익 자료 부재</strong> — "형이 미리 부동산을 받았다"는 주장만으로는 부족. 등기·증여세 자료로 입증해야 반영.</li>\n<li><strong>평가 다툼</strong> — 부동산·비상장주식 가액 다툼으로 감정평가 명령 → 절차 지연. 평가 시점은 분할 시점.</li>\n<li><strong>가분채권 일괄 처리</strong> — 예금·금전채권은 원칙적으로 즉시 분할되어 분할심판 대상에서 빠질 수 있어, 초과특별수익자가 있다면 별도 주장 필요.</li>\n<li><strong>변호사 상담 검토</strong> — 분할심판은 1년 이상 걸릴 수 있어 가사 전문 변호사 조력이 효율적. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상속재산을 일부 상속인이 단독 인출·처분한 경우 상속회복청구를 별도로 검토해야 할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 분할심판 항고심 반대청구와 구체적 상속분',
        summary:
          '대법원 2024스866 사건(대법원, 2025.03.24 선고)에서 법원은 마류 가사비송사건 항고심에서 반대청구가 가능한 경우와 가분채권이 상속재산분할의 대상이 될 수 있는 예외, 그리고 구체적 상속분 산정의 기준 시기는 상속개시 시이며 산정 방법은 특별수익·기여분을 반영하는 것임을 정리했습니다.',
        takeaway: '분할심판은 법정상속분이 아닌 구체적 상속분으로 진행되므로 특별수익·기여분 자료를 사전에 정리해두는 것이 결과에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '협의가 안 되면 바로 분할심판으로 가야 하나요?',
        answer:
          '<strong>가정법원 조정전치 절차를 먼저 거치는 것이 일반적입니다.</strong> 조정에서 합의되면 판결과 동일한 효력이 있어 비용·시간이 절감되며, 조정 불성립 시 본안 분할심판으로 자동 이행됩니다.',
      },
      {
        question: '구체적 상속분은 어떻게 산정되나요?',
        answer:
          '<strong>법정상속분에서 특별수익을 차감하고 기여분을 가산해 산정합니다.</strong> 상속개시 시점을 기준으로 특별수익·기여분 자료를 종합 평가합니다.',
      },
      {
        question: '예금이 있는데 다른 상속인이 인출해 갔어요. 어떻게 하나요?',
        answer:
          '<strong>상속회복청구로 자신의 법정상속분에 해당하는 금액 반환을 청구할 수 있습니다(2025다212863 판례 취지).</strong> 분할심판과 별개로 진행 가능하니 변호사 상담을 검토해보세요.',
      },
      {
        question: '분할심판은 얼마나 걸리나요?',
        answer:
          '<strong>사건의 복잡성에 따라 다르지만 통상 1~2년이 소요됩니다.</strong> 부동산 감정평가·특별수익 다툼·기여분 입증 등이 절차 기간에 영향을 줍니다.',
      },
      {
        question: '심판 후 다른 상속인이 협조하지 않으면 어떻게 등기하나요?',
        answer:
          '<strong>심판 확정문으로 단독 등기가 가능합니다.</strong> 심판문이 곧 등기 원인 서류가 되어 다른 상속인의 협조 없이도 분할 결과를 실행할 수 있습니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산분할 분쟁 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '특별수익과 기여분', href: '/guide/inheritance/inheritance-family-dispute-mediation' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '한정승인 신청 절차', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '유언 효력 분쟁 절차', href: '/guide/inheritance/inheritance-will-validity-dispute' },
    ],
  },

  // ─── 7. inheritance / tax-six-month-filing-procedure ───
  {
    domain: 'inheritance',
    slug: 'inheritance-tax-six-month-filing-procedure',
    keyword: '상속세 6개월 신고',
    questionKeyword: '상속세 신고는 언제까지 어떻게 하나요?',
    ctaKeyword: '상속세 6개월 신고 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '상속세 6개월 신고 절차와 단계별 정리 | 로앤가이드',
      description:
        '피상속인 사망 후 상속세 신고는 사망일이 속하는 달의 말일부터 6개월 이내가 원칙입니다. 신고 단계·분할납부·연부연납을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가셨는데 상속세 신고는 언제까지 해야 하나요? 분할납부도 가능한가요?" 상속세 신고는 사망일이 속하는 달의 말일부터 6개월 이내가 원칙으로, 짧은 기간 안에 재산조회·평가·신고·납부까지 마쳐야 합니다. 기한을 넘기면 무신고 가산세 20% + 납부지연 가산세가 부과되므로 단계별 진행 일정을 미리 정리해두는 것이 안전합니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 상속세 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">국세청·상속세 및 증여세법에 따른 공식 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망신고와 상속재산 조회 (1개월 내)</strong> — 행정복지센터 사망신고 + 정부24 "안심상속 원스톱서비스"로 부동산·금융·자동차·국세 일괄 조회.</li>\n<li><strong>2단계 — 한정승인·상속포기 결정 (3개월 내)</strong> — 빚이 많을 가능성이 있으면 사망일 기준 3개월 내 한정승인·상속포기 신고. 상속세 신고와 별개 절차.</li>\n<li><strong>3단계 — 재산 평가와 공제 항목 정리 (3~4개월차)</strong> — 부동산 시가 평가, 금융자산 잔고 확정, 일괄공제(5억) 또는 인적공제·금융재산공제 등 산정.</li>\n<li><strong>4단계 — 상속세 신고서 제출 (사망일 익월말부터 6개월 내)</strong> — 피상속인 주소지 관할 세무서에 신고서·증빙서류 제출. 전자신고(홈택스)도 가능.</li>\n<li><strong>5단계 — 납부 또는 분할납부·연부연납 신청</strong> — 일시 납부 원칙. 1천만원 초과 시 분할납부, 2천만원 초과 시 최장 10년 연부연납 신청 가능(상속세 및 증여세법 제71조).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속세 신고 단계와 분할납부·연부연납 절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '신고 기한과 가산세 — 6개월 원칙과 예외',
        content:
          '<p><strong style="color:#1e3a5f">기본은 6개월이지만 비거주자·해외 자산 등 사정에 따라 기한이 연장됩니다.</strong></p>\n<ul>\n<li><strong>일반 (거주자)</strong> — 사망일이 속하는 달의 말일부터 6개월 이내. 예: 4월 15일 사망 → 4월 30일부터 6개월 → 10월 31일까지.</li>\n<li><strong>비거주자 또는 상속인 전원이 비거주자</strong> — 사망일이 속하는 달의 말일부터 9개월 이내.</li>\n<li><strong>무신고 가산세</strong> — 산출세액의 20% (부정 무신고는 40%). 기한 도과 시 매우 큰 부담.</li>\n<li><strong>과소신고 가산세</strong> — 과소신고 산출세액의 10~40%.</li>\n<li><strong>납부지연 가산세</strong> — 미납 세액 × 일수 × 일정 비율(연 단위 환산 약 8~9% 수준). 매일 누적되어 부담 증가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신고는 했지만 납부 자금이 부족하면 분할납부·연부연납을 신청하면 가산세를 줄일 수 있습니다. "신고만 먼저, 납부는 나눠서"가 안전한 전략.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">상속관계 + 재산 평가 + 공제 자료 3가지 묶음으로 준비합니다.</strong></p>\n<ul>\n<li><strong>상속관계 서류</strong> — 피상속인 기본증명서·가족관계증명서·혼인관계증명서·제적등본·상속인 전원 가족관계증명서</li>\n<li><strong>재산 자료</strong> — 부동산 등기부등본·공시가격 자료(또는 감정평가서)·금융자산 잔고증명서·증권 잔고·자동차 등록원부</li>\n<li><strong>채무·공과금 자료</strong> — 피상속인 대출·미지급 채무 증빙·미납 세금·장례비 영수증(공제 항목)</li>\n<li><strong>증여 자료 (10년·5년 합산)</strong> — 사망 전 10년 내 상속인 증여, 5년 내 비상속인 증여 자료. 상속재산에 합산.</li>\n<li><strong>분할 자료</strong> — 상속재산분할협의서(있으면). 협의 미완료 시 추후 수정신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일괄공제(5억)와 배우자 상속공제(최대 30억, 실제 상속받은 금액 한도) 중 유리한 쪽으로 신고할 수 있습니다. 세무사 상담을 통해 최적 공제 조합을 검토해보세요.</blockquote>',
      },
      {
        title: '흔한 실수 — 가산세를 키우는 이유',
        content:
          '<p><strong style="color:#1e3a5f">기한 도과·증여 누락·평가 오류가 가장 자주 발생하는 실수입니다.</strong></p>\n<ul>\n<li><strong>분할 협의 지연으로 신고 지연</strong> — 협의가 안 됐어도 우선 법정상속분으로 신고하고 추후 수정신고 가능. 신고 자체를 미루는 것은 가장 위험.</li>\n<li><strong>10년 내 증여 누락</strong> — 사망 전 10년 내 상속인에게 한 증여는 상속재산에 합산. 누락 시 과소신고 가산세 20~40%.</li>\n<li><strong>부동산 평가 오류</strong> — 시가 평가 vs 공시가격 차이가 큰 경우 세무서 평가 변경으로 추징될 수 있음. 감정평가 활용 검토.</li>\n<li><strong>해외 자산 누락</strong> — 거주자 피상속인의 해외 자산은 한국 상속세 과세 대상. 외국납부세액공제로 이중과세 조정 가능.</li>\n<li><strong>변호사·세무사 상담 검토</strong> — 상속세는 평가·공제·신고 모두 전문 영역. 상담을 검토해보시는 것이 안전합니다. 무료 상담은 대한법률구조공단(132)·국세청 홈택스 상담 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상속세 신고를 안 했다고 자동 면제되지는 않습니다. 5년(부정행위 시 10~15년) 부과제척기간 내에는 언제든 추징될 수 있으므로 우선 신고가 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속세 대납과 구상금',
        summary:
          '대법원 2022다220014 사건(대법원, 2025.05.29 선고)에서 법원은 한 상속인이 다른 상속인의 상속세를 대납한 후 구상금을 청구한 사건에서 유증의 포괄·특정 구분 기준, 포괄적 유증의 효력, 유류분권리자의 유류분반환청구권 행사로 효력을 상실하는 유증·증여의 범위, 그리고 유류분 부족액 산정 방법 등 상속세 부담과 유류분이 결합하는 사안의 처리 기준을 정리했습니다.',
        takeaway: '상속세는 상속인 각자의 상속분에 따라 분담하는 것이 원칙이고, 일부가 대납한 경우 다른 상속인에게 구상권 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '신고 기한 6개월 안에 협의가 안 되면 어떻게 하나요?',
        answer:
          '<strong>법정상속분으로 우선 신고하고 협의 완료 후 수정신고할 수 있습니다.</strong> 기한 도과로 인한 무신고 가산세 20%를 피하려면 우선 신고가 안전합니다.',
      },
      {
        question: '상속세를 한 번에 낼 수 없으면 분할납부가 되나요?',
        answer:
          '<strong>1천만원 초과 시 분할납부(2회), 2천만원 초과 시 최장 10년 연부연납 신청이 가능합니다.</strong> 연부연납은 담보 제공이 필요하고 매년 일정 비율 가산금이 부과됩니다.',
      },
      {
        question: '일괄공제 5억이면 빚이 5억 이하면 신고를 안 해도 되나요?',
        answer:
          '<strong>공제로 납부세액이 0이어도 원칙적으로는 신고가 권장됩니다.</strong> 신고를 통해 부동산 취득가액·평가가액이 명확히 기록되어 향후 양도소득세 계산 시 유리합니다.',
      },
      {
        question: '해외에 있는 부동산도 신고 대상인가요?',
        answer:
          '<strong>피상속인이 거주자였다면 전 세계 자산이 신고 대상입니다.</strong> 비거주자라면 국내 자산만 과세 대상이며, 해외에서 납부한 상속세는 외국납부세액공제로 이중과세 조정 가능합니다.',
      },
      {
        question: '신고를 빠뜨렸다가 나중에 알게 되면 어떻게 하나요?',
        answer:
          '<strong>기한 후 신고 또는 수정신고를 즉시 진행하는 것이 안전합니다.</strong> 자진 신고 시 가산세 일부 감면이 적용될 수 있어 발견 즉시 신고가 유리합니다. 세무사·법률구조공단(132) 상담을 검토해보세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고 기한과 가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '해외 자산 상속 신고', href: '/guide/inheritance/inheritance-foreign-assets-declaration-report' },
      { label: '비상장주식 상속 평가', href: '/guide/inheritance/inheritance-business-share-evaluation' },
      { label: '한정승인 신청 절차', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
    ],
  },

  // ─── 8. inheritance / yuryubun-claim-calculation ───
  {
    domain: 'inheritance',
    slug: 'inheritance-yuryubun-claim-calculation',
    keyword: '유류분 청구 산정',
    questionKeyword: '유언으로 형이 거의 다 가져갔는데 유류분 얼마를 받을 수 있나요?',
    ctaKeyword: '유류분 청구 산정 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '유류분 청구 산정 방식과 청구 시한 정리 | 로앤가이드',
      description:
        '직계비속·배우자는 법정상속분의 1/2, 직계존속은 1/3이 유류분입니다. 부족액 산정 방식과 1년/10년 제척기간을 지금 확인하세요.',
    },
    intro:
      '<p>"형에게만 부동산이 모두 넘어갔는데 저는 한 푼도 못 받았어요. 유류분을 받을 수 있나요?" 유류분은 피상속인의 유언·증여로부터 일정 비율의 상속분을 보장해주는 제도입니다. 다만 청구하지 않으면 자동으로 받을 수 없고, 1년·10년의 시한이 있어 시기를 놓치면 권리가 소멸합니다. 산정 방식과 청구 절차를 정리해두는 것이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 누가 유류분을 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 직계비속·배우자·직계존속이 유류분권자입니다. 형제자매는 2024년 헌법재판소 결정 이후 인정되지 않습니다.</strong></p>\n<ul>\n<li><strong>직계비속 (자녀·손자녀)</strong> — 법정상속분의 1/2 (민법 제1112조 제1호).</li>\n<li><strong>배우자</strong> — 법정상속분의 1/2.</li>\n<li><strong>직계존속 (부모·조부모)</strong> — 법정상속분의 1/3.</li>\n<li><strong>형제자매 — 인정 안 됨</strong> — 헌법재판소 2020헌가4 등 결정(2024.04.25)으로 형제자매 유류분 조항이 위헌 결정되어 더 이상 인정되지 않습니다.</li>\n<li><strong>유류분 청구 가능 사안</strong> — 유언(유증)·생전 증여로 인해 유류분에 미달한 경우 청구 가능. 단순히 "내가 더 받고 싶다"가 아니라 "법이 보장한 최소 몫"에 미치지 못해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유류분은 "법정상속분의 1/2 또는 1/3"이지 법정상속분 전부가 아닙니다. 자녀 1명이 법정상속분 1억이라면 유류분은 5천만원이 최소 보장 금액.</blockquote>',
      },
      {
        title: 'Q. 유류분 부족액은 어떻게 산정하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기초재산 × 유류분 비율 - 본인이 받은 상속재산·특별수익으로 계산합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유류분 산정 기초재산 = 상속재산 + 증여재산 - 채무</strong><br>상속개시 시 남은 재산에 사전 증여(상속인은 시기 무관, 제3자는 1년 내)를 더하고 채무를 차감.</li>\n<li><strong>2단계 — 유류분 비율 적용</strong><br>직계비속·배우자: × 1/2 / 직계존속: × 1/3 → 본인 유류분 한도액.</li>\n<li><strong>3단계 — 유류분 부족액 = 유류분 한도액 - (본인 상속재산 + 본인 특별수익)</strong><br>이미 받은 몫이 한도액보다 적으면 그 차액이 청구 대상.</li>\n<li><strong>4단계 — 반환 청구 순서</strong><br>유증 → 사후 증여 → 상속개시 가까운 증여 순으로 반환 청구. 같은 시기 증여는 비례 반환.</li>\n<li><strong>5단계 — 평가 시점</strong><br>유류분액 산정의 기준 시기는 상속개시 시. 가액 반환 시 산정 기준은 사실심 변론종결 시.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분 부족액 산정과 청구 절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 청구 시한이 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. "안 날" 1년, 상속개시 후 10년이 최종 시한입니다.</strong></p>\n<ul>\n<li><strong>주관적 시효 (1년)</strong> — 유류분 침해 사실(증여·유증)을 안 날부터 1년 내 청구. 단순 사망 사실만 안 것으로는 부족하고 침해 사실을 인지해야 시효 시작.</li>\n<li><strong>객관적 시효 (10년)</strong> — 상속개시일(피상속인 사망일)부터 10년이 절대 시한. 모르고 있어도 10년이 지나면 청구권 소멸.</li>\n<li><strong>시효 중단 — 내용증명</strong> — 의사 표시는 가능한 한 내용증명으로 보내 시효 중단 효과 확보. 구두 합의·문자 메시지는 입증 다툼이 발생할 수 있어 위험.</li>\n<li><strong>청구 방법</strong> — 내용증명 → 협의 → 가정법원 유류분 반환청구 소송. 협의가 결렬되면 즉시 소송으로 진행.</li>\n<li><strong>변호사 상담 검토</strong> — 사건별 시효 기산점·기초재산 산정·증여 산입 범위 등이 복잡. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "곧 협의하자"고 말로만 하다가 1년이 지나면 청구권이 소멸할 소지가 있습니다. 의사 표시는 가능한 한 내용증명으로 남기는 것이 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 부동산이 처분된 경우 가액 반환은 어떻게 평가되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원물 반환이 어려우면 가액 반환을 청구하며, 가액 산정의 기준 시기는 사실심 변론종결 시입니다.</strong></p>\n<ul>\n<li><strong>원물 반환 원칙</strong> — 증여·유증된 부동산이 그대로 남아 있으면 그 부동산 자체를 반환하는 것이 원칙.</li>\n<li><strong>가액 반환 (원물 반환 불가능 시)</strong> — 부동산이 이미 처분·멸실되어 원물 반환이 불가능하면 가액으로 반환. 가액 산정 기준 시기는 사실심 변론종결 시.</li>\n<li><strong>증여재산 평가 기준 시기</strong> — 유류분액 산정 시 증여재산 시가 평가는 상속개시 시. 가액 반환 시 평가는 변론종결 시. 두 시점이 다름.</li>\n<li><strong>평가 다툼</strong> — 부동산 가격 다툼 시 감정평가 명령. 시간·비용 추가 발생.</li>\n<li><strong>이행 강제</strong> — 판결 확정 후에도 의무자가 이행하지 않으면 강제집행(가압류·강제경매) 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부동산이 처분 우려가 있다면 청구와 동시에 가압류·처분금지 가처분을 신청해 자산을 묶어두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유류분 반환방법과 평가 기준 시기',
        summary:
          '대법원 2023다316851 사건(대법원, 2024.05.17 선고)에서 법원은 유류분의 반환방법을 정리하면서, 유류분액 산정 시 반환의무자가 증여받은 재산의 시가 산정 기준시기는 상속개시 시이며, 반환의무자에 대하여 반환하여야 할 재산의 범위를 확정한 후 가액반환을 명하는 경우 그 가액 산정의 기준시기는 사실심 변론종결 시라고 판시했습니다.',
        takeaway: '유류분 산정 시점과 가액 반환 시점이 달라 자산가치 변동을 반영한 청구 전략을 사전에 정리해두는 것이 결과에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '유언에 "장남에게 모두 준다"고 쓰여 있어도 유류분을 받을 수 있나요?',
        answer:
          '<strong>유언이 있어도 다른 직계비속·배우자·직계존속의 유류분은 침해할 수 없습니다.</strong> 침해된 부분에 대해 1년·10년 시효 내 유류분 반환청구를 검토할 수 있습니다.',
      },
      {
        question: '20년 전 형이 받은 부동산도 유류분 산정에 포함되나요?',
        answer:
          '<strong>상속인에 대한 증여는 시기 제한 없이 원칙적으로 산입됩니다.</strong> 다만 매우 오래된 증여는 평가 자료 확보가 어려워 사건별 검토가 필요합니다.',
      },
      {
        question: '유류분을 받으려면 가능한 한 소송해야 하나요?',
        answer:
          '<strong>내용증명으로 의사를 표시한 후 협의로 합의되면 소송 없이 정리할 수 있습니다.</strong> 협의 결렬 시 가정법원 유류분 반환청구 소송으로 진행합니다.',
      },
      {
        question: '형제자매도 유류분을 받을 수 있나요?',
        answer:
          '<strong>2024년 헌법재판소 결정 이후 형제자매 유류분은 인정되지 않습니다.</strong> 직계비속·배우자·직계존속만 유류분권자입니다.',
      },
      {
        question: '시효가 임박했는데 어떻게 해야 하나요?',
        answer:
          '<strong>즉시 내용증명으로 반환청구 의사를 표시한 후 가정법원에 소송을 제기하는 것이 안전합니다.</strong> 1년 시효는 짧아 발견 즉시 변호사·법률구조공단(132) 상담을 검토해보세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 반환청구 10년 기한', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '유류분 증여 계산 범위', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
      { label: '특별수익과 기여분', href: '/guide/inheritance/inheritance-family-dispute-mediation' },
      { label: '유언 효력 분쟁 절차', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '상속재산분할 분쟁 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
    ],
  },
];
