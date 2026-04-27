import { SpokePage } from '../spoke-pages';

// batch48 inheritance 4개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 한정승인을 한 상속인이 피상속인 채권자들로부터 청구를 받았을 때 변제 순서·공고 절차·고유재산 보호를 정리해 채권자 대응을 준비하도록 돕는 페이지다.
// 2. 이 페이지는 피상속인이 사망 전 자녀 일부에게 부동산·현금을 미리 증여한 상황에서 다른 상속인이 유류분을 산정·청구하기 위해 기초재산 산입 범위와 평가 시점을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 미국·일본 등 해외에 부동산·예금 등 자산을 보유한 한국 거주자 피상속인의 상속세를 신고할 때 외화환산·외국납부세액공제·해외금융계좌 신고를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 피상속인이 남긴 빚이 여러 채권자에게 흩어져 있을 때 한정승인·재산분리 절차에서 변제 순위(우선·일반·후순위)를 정리해 정당한 변제로 책임 면제를 준비하도록 돕는 페이지다.

export const spokesBatch48Inheritance: SpokePage[] = [
  // ─── 1. inheritance / limited-acceptance-creditor-response ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-creditor-response',
    keyword: '한정승인 후 채권자 대응',
    questionKeyword: '한정승인을 했는데 채권자가 계속 변제를 청구해요. 어떻게 대응해야 하나요?',
    ctaKeyword: '한정승인 후 채권자 대응 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '한정승인 후 채권자 대응 6단계 절차 총정리 | 로앤가이드',
      description:
        '한정승인 신고 수리 후 2개월 내 채권자 공고와 변제 순서를 지키지 않으면 고유재산 변제 책임이 생길 수 있습니다. 신문 공고·변제 순서·청산 절차를 지금 확인하세요.',
    },
    intro:
      '<p>한정승인 신고가 수리되면 끝이 아니라 시작입니다. "이제 빚 안 갚아도 되는 거죠?"라고 안심하다가 채권자에게 직접 연락받으면 당황스럽기 쉽습니다. 신문 공고·채권 신고 접수·변제 순서를 지키지 않으면 한정승인의 효과(상속재산 한도 변제)가 무너지고 고유재산 책임이 생길 수 있습니다. 절차를 단계별로 미리 정리해두는 것이 가장 안전합니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 한정승인 후 채권자 대응 6단계',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1032조 이하·가정법원 안내에 따른 공식 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 한정승인 심판문 수령 (수리 후 약 2~4주)</strong><br>가정법원에서 한정승인 신고 수리 심판문 수령. 이때부터 채권자 공고 의무 시작.</li>\n<li><strong>2단계 — 신문 공고 (수리 후 5일 내, 2개월 이상)</strong><br>일간신문에 채권자에게 채권 신고를 최고하는 공고 게재. 공고 기간은 2개월 이상.</li>\n<li><strong>3단계 — 알고 있는 채권자에 개별 최고 (즉시)</strong><br>이미 알고 있는 채권자에게는 별도 서면(내용증명) 통지. 누락하면 한정승인 효력 일부 상실 위험.</li>\n<li><strong>4단계 — 채권 신고 접수 및 정리 (공고 기간 중)</strong><br>채권자별 채권액·증빙·우선권 유무 정리. 우선권 있는 채권(저당권·임금 등) 별도 분류.</li>\n<li><strong>5단계 — 변제 (공고 기간 만료 후)</strong><br>우선채권 → 일반채권(안분 비례) 순으로 변제. 부족분은 한정승인 효력으로 면책.</li>\n<li><strong>6단계 — 청산 종료 신고 (변제 완료 후)</strong><br>변제 내역서 작성·보관. 후속 청구 대비 5년 이상 자료 보관 권장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 후 절차, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신문 공고·변제 순서·고유재산 보호 포인트를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '변제 순서 — 우선채권부터 안분 비례까지',
        content:
          '<p><strong style="color:#1e3a5f">민법은 한정승인 변제 순서를 명확히 정해두고 있습니다. 순서를 어기면 변제받지 못한 채권자에게 손해배상 책임이 생길 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>1순위 — 우선권 있는 채권</strong> — 저당권·전세권 등 담보권자, 임금·퇴직금 등 우선변제권자, 조세 채권. 담보 가치 한도 내 우선 변제.</li>\n<li><strong>2순위 — 일반채권 (안분 비례)</strong> — 신고된 일반 채권자에게 채권액 비율로 안분. 한 채권자에게만 전액 변제하면 다른 채권자 손해 → 위법 변제 책임.</li>\n<li><strong>3순위 — 후순위 채권</strong> — 공고 기간 후 신고한 채권자, 변제 후 발견된 채권자. 잔여 재산 한도 내 변제.</li>\n<li><strong>유증 채권</strong> — 일반채권 변제 후 잔여 재산이 있는 경우에 한해 변제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부동산이 우선채권(저당권)으로 묶여 있다면 경매 후 잔여 재산만 일반채권 변제 대상이 됩니다. 우선채권자가 임의로 처분에 동의하지 않는 한 임의 매각은 어렵습니다.</blockquote>',
      },
      {
        title: '한정승인 후 자주 발생하는 분쟁 — 사해행위·상속분 포기',
        content:
          '<p><strong style="color:#1e3a5f">상속재산 분할협의 시 채무초과 상태인 상속인이 자신의 상속분을 포기하면 채권자가 사해행위 취소를 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>사해행위 취소권</strong> — 채무초과 상속인이 분할협의로 상속분을 포기해 채권자의 공동담보가 감소되면 사해행위로 인정될 소지가 있습니다.</li>\n<li><strong>채권자 청구권</strong> — 채권자는 상속분 포기 사실을 안 날부터 1년, 행위가 있은 때부터 5년 내 사해행위 취소 청구.</li>\n<li><strong>한정승인 vs 분할협의</strong> — 한정승인을 했더라도 다른 상속인과의 분할협의에서 자신의 몫을 포기하면 별개로 사해행위 문제가 생길 수 있습니다.</li>\n<li><strong>예방 방법</strong> — 채무가 많으면 분할협의 전 변호사 상담을 거쳐 합법적 처리 방법(상속포기·한정승인) 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "어차피 빚이 많으니 형제에게 양보한다"는 단순 분할협의는 채권자 사해행위 취소 대상이 될 소지가 있습니다. 상속포기 또는 한정승인이라는 정식 절차를 거치는 것이 안전합니다.</blockquote>',
      },
      {
        title: '고유재산 보호 — 한정승인 효력을 지키는 법',
        content:
          '<p><strong style="color:#1e3a5f">한정승인의 핵심 효과는 "상속재산 한도 내 변제"입니다. 이 효력을 지키려면 절차상 의무를 빠짐없이 이행해야 합니다.</strong></p>\n<ul>\n<li><strong>공고·통지 의무</strong> — 신문 공고를 누락하거나 알고 있는 채권자에 개별 최고를 빠뜨리면 해당 채권자에 대해 고유재산으로 변제 책임이 생길 수 있습니다.</li>\n<li><strong>변제 순서 위반</strong> — 우선채권자보다 일반채권자에게 먼저 변제하거나 안분 비례를 어기면 손해 본 채권자에게 손해배상 책임.</li>\n<li><strong>상속재산 처분 제한</strong> — 청산 종료 전 상속재산을 임의로 처분·은닉하면 단순승인 의제로 한정승인 효력 상실 위험.</li>\n<li><strong>증빙 보관</strong> — 공고문·변제 내역서·채권자 통지 자료 5년 이상 보관. 후속 청구 시 방어 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한정승인 절차가 복잡하면 대한법률구조공단(132)이나 법원의 가사조정위원회를 통해 무료 상담을 검토해볼 수 있습니다. 가능하면 변호사 조력을 받는 것이 추후 분쟁 예방에 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산 분할협의와 사해행위',
        summary:
          '대법원 2024다208315 사건(대법원, 2024.05.30 선고)에서 법원은 채무초과 상태의 상속인이 상속재산 분할협의에서 자신의 상속분 권리를 포기해 일반 채권자의 공동담보가 감소된 경우 원칙적으로 사해행위에 해당한다고 판시했습니다. 분할협의가 사실상 상속포기와 같은 결과라는 이유만으로 사해행위가 아니라고 볼 수 없다고 판단했습니다.',
        takeaway: '한정승인 후에도 분할협의에서 상속분을 양보하는 형태로 빚 회피를 시도하면 채권자가 사해행위 취소를 청구할 소지가 있어 정식 절차를 거치는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '신문 공고를 안 하면 어떻게 되나요?',
        answer:
          '<strong>한정승인의 효력 일부가 상실될 수 있습니다.</strong> 공고를 거치지 않은 채 변제하면 다른 채권자가 누락 사실을 입증할 경우 해당 채권자에 대해 고유재산으로 변제할 책임이 생길 소지가 있습니다.',
      },
      {
        question: '채권자가 직접 연락하면 바로 변제해야 하나요?',
        answer:
          '<strong>공고 기간이 끝나기 전에 한 채권자에게만 전액 변제하면 안 됩니다.</strong> 공고 종료 후 모든 채권자를 한꺼번에 정리해 안분 비례로 변제하는 것이 원칙입니다.',
      },
      {
        question: '저당권이 있는 부동산은 어떻게 처리하나요?',
        answer:
          '<strong>저당권자는 우선변제권을 갖습니다.</strong> 부동산 가치 한도 내에서 저당권자에게 먼저 변제하고 잔여분이 있으면 일반채권 변제 재원으로 사용합니다. 통상 경매 절차로 처리됩니다.',
      },
      {
        question: '공고 기간 후에 모르던 채권자가 나타나면 어떻게 하나요?',
        answer:
          '<strong>잔여 재산이 있으면 그 한도 내에서 변제합니다.</strong> 이미 다른 채권자에게 변제 완료해 잔여가 없다면 더 이상 변제 의무가 없습니다(민법 제1039조).',
      },
      {
        question: '한정승인을 변호사 없이 직접 처리할 수 있나요?',
        answer:
          '<strong>법적으로는 가능하지만 공고·변제 순서·서류 보관 등 절차상 실수가 효력 상실로 이어질 수 있어 전문가 조력이 권장됩니다.</strong> 복잡한 사례는 법률구조공단(132) 무료 상담을 먼저 검토해보세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 신청 절차', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '한정승인 준비서류 체크리스트', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '한정승인과 상속포기 비교', href: '/guide/inheritance/inheritance-limited-acceptance-vs-renunciation-choice' },
      { label: '특별한정승인 3개월 시작 시점', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '상속재산 숨겨진 빚 찾기', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
    ],
  },

  // ─── 2. inheritance / pre-death-gift-yuryubun-calculation ───
  {
    domain: 'inheritance',
    slug: 'inheritance-pre-death-gift-yuryubun-calculation',
    keyword: '사전 증여 유류분 산정',
    questionKeyword: '아버지가 돌아가시기 5년 전에 형에게 부동산을 증여하셨는데 유류분 계산에 들어가나요?',
    ctaKeyword: '사전 증여 유류분 산정 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사전 증여 유류분 산정 4단계 기준 총정리 | 로앤가이드',
      description:
        '피상속인이 사망 전 한 증여는 상속인 대상이면 기간 제한 없이, 제3자 대상이면 1년 내 증여만 유류분 기초재산에 산입됩니다. 평가 시점과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"형은 10년 전에 아버지한테 아파트 한 채를 받았어요. 저는 한 푼도 못 받았는데 이건 유류분 계산에 들어가나요?" 사전 증여를 둘러싼 형제 분쟁은 가장 흔한 상속 분쟁입니다. 민법은 상속인에게 한 증여와 제3자에게 한 증여를 다르게 취급하는데, 이를 잘못 알면 유류분 청구를 포기하거나 시효를 놓치기 쉽습니다. 산정 기준과 평가 시점을 정확히 정리해두는 것이 첫걸음입니다.</p>',
    sections: [
      {
        title: 'Q. 사전 증여가 유류분 기초재산에 들어가나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 누구에게 한 증여인지에 따라 다르게 산입됩니다.</strong></p>\n<ul>\n<li><strong>상속인에 대한 증여 (특별수익)</strong> — 민법 제1118조·제1008조에 따라 기간 제한 없이 모두 산입. 10년 전이든 20년 전이든 상속인에게 한 증여는 원칙적으로 유류분 기초재산에 포함됩니다.</li>\n<li><strong>제3자에 대한 증여</strong> — 상속개시 1년 전 이내 증여만 산입(민법 제1114조 본문). 단, 양 당사자가 유류분권자에게 손해를 가할 것을 알고 한 증여는 1년 전 이전이라도 산입.</li>\n<li><strong>유증·사인증여</strong> — 시기 무관 모두 산입.</li>\n<li><strong>예외 — 손해 인식 증여</strong> — 증여 당시 잔여 재산만으로는 유류분 침해가 명백한 경우, 양 당사자가 이를 알았다면 1년 제한 적용 안 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형·동생 등 다른 상속인이 받은 증여는 시기 제한 없이 거의 모두 산입된다고 보면 됩니다. 제3자(법인·친구 등)에 대한 증여만 1년 제한이 적용됩니다.</blockquote>',
      },
      {
        title: 'Q. 증여재산 가액은 언제 시점을 기준으로 평가하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙은 상속개시일 시점, 처분된 경우는 처분 당시 가액 + 물가변동 보정입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증여재산이 그대로 남아 있는 경우</strong><br>상속개시일(피상속인 사망일) 시점 시가로 평가. 부동산이라면 사망 시점 공시가격 또는 감정가.</li>\n<li><strong>2단계 — 증여 후 처분된 경우</strong><br>처분 당시 가액을 기준으로 상속개시일까지의 물가변동을 반영해 산정(대법원 2019다222867 참조).</li>\n<li><strong>3단계 — 증여 후 수용·매도된 경우</strong><br>현실 가치인 처분 당시 가액 기준 + 상속개시일까지 물가변동률 적용.</li>\n<li><strong>4단계 — 부동산 가격 급변 시 평가 다툼</strong><br>당사자 협의 불성립 시 가정법원이 감정평가 명령. 감정 결과로 분쟁 해결.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 유류분 계산, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사전 증여 산입 범위·평가 시점·청구 시효를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 명의신탁된 재산도 유류분 계산에 들어가나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형식이 아닌 실질로 판단합니다. 처분 행위의 법적 성질을 사건별로 살펴봐야 합니다.</strong></p>\n<ul>\n<li><strong>대법원 입장</strong> — 피상속인의 재산처분행위가 유류분 기초재산 산입 대상인지는 형식·추상이 아닌 실질로 판단해야 한다는 것이 일관된 법리(대법원 2023다304568).</li>\n<li><strong>명의신탁 케이스</strong> — 명의신탁자(피상속인)가 사망 전 명의수탁자에게 부동산을 증여한 외관이라도 실질이 부당이득 반환이라면 증여로 보지 않을 소지가 있습니다.</li>\n<li><strong>차명계좌·자녀 명의 자산</strong> — 형식상 자녀 소유라도 자금 출처가 피상속인이면 사실상 증여로 평가될 수 있습니다.</li>\n<li><strong>증명 책임</strong> — 유류분권자가 "증여" 사실을 입증해야 하므로 자금 흐름·계좌 거래 내역 확보가 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차명계좌·자녀 명의 부동산이 의심되면 가족관계증명·자금 출처 자료(계좌 이체 내역)를 먼저 모으세요. 단순 의심만으로는 입증이 어렵습니다.</blockquote>',
      },
      {
        title: 'Q. 유류분 청구는 언제까지 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. "안 날" 1년, 상속개시 후 10년이 최종 기한입니다. 시효 관리가 핵심입니다.</strong></p>\n<ul>\n<li><strong>주관적 기한 (안 날 1년)</strong> — 유류분 침해 사실(증여·유증 등)을 안 날부터 1년 내 청구. 사망 사실만 안 것으로는 부족하고 침해 사실을 인지해야 시작.</li>\n<li><strong>객관적 기한 (10년)</strong> — 상속개시일(피상속인 사망일)부터 10년이 최종 기한. 침해 사실을 몰라도 10년이 지나면 청구권 소멸.</li>\n<li><strong>청구 방법</strong> — 내용증명으로 반환청구 의사 통지 후 협의. 불응 시 가정법원 유류분 반환청구 소송.</li>\n<li><strong>2024년 헌재 결정</strong> — 형제자매 유류분 조항 위헌 결정으로 형제자매 간 유류분은 더 이상 인정 안 됨. 자녀·배우자·부모는 그대로 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "곧 협의하자"고 말로만 하다가 1년이 지나면 청구권이 소멸할 소지가 있습니다. 의사 표시는 반드시 내용증명으로 남기는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유류분 산정 기초재산 산입 판단 기준',
        summary:
          '대법원 2023다304568 사건(대법원, 2024.06.13 선고)에서 법원은 피상속인의 재산처분행위가 유류분 산정의 기초재산에 산입되는 증여에 해당하는지 판단할 때 처분행위의 법적 성질을 형식적·추상적으로 보지 않고 유류분제도의 입법 목적과 민법 제1008조의 취지에 비추어 실질적으로 판단해야 한다고 판시했습니다.',
        takeaway: '명의신탁·차명계좌 등 형식과 실질이 다른 경우에도 자금 출처와 거래 실질을 입증하면 유류분 기초재산 산입을 다툴 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '20년 전에 형이 받은 증여도 유류분 산정에 들어가나요?',
        answer:
          '<strong>상속인에 대한 증여라면 원칙적으로 산입됩니다.</strong> 다만 매우 오래된 증여는 평가 자료 확보가 어렵고 분쟁 가능성도 높아 사건별 검토가 필요합니다. 변호사 상담을 검토해보세요.',
      },
      {
        question: '제3자(법인·친구)에게 한 증여는 1년 이내만 산입되나요?',
        answer:
          '<strong>원칙적으로 그렇지만 예외가 있습니다.</strong> 양 당사자가 유류분권자에게 손해를 가할 것을 알고 한 증여라면 1년 이전이라도 기초재산에 산입될 수 있습니다.',
      },
      {
        question: '증여받은 부동산이 가격이 크게 올랐는데 어떻게 평가하나요?',
        answer:
          '<strong>그대로 남아 있다면 상속개시일 시점 시가로 평가합니다.</strong> 처분된 경우는 처분 당시 가액에 상속개시일까지 물가변동을 반영합니다.',
      },
      {
        question: '유류분 청구를 했는데 형이 이미 부동산을 팔았으면 어떻게 하나요?',
        answer:
          '<strong>가액 반환 청구가 가능합니다.</strong> 원물 반환이 어려우면 처분 당시 가액 + 물가변동 반영 금액을 금전으로 반환받는 방식으로 진행됩니다.',
      },
      {
        question: '형제자매도 유류분을 받을 수 있나요?',
        answer:
          '<strong>2024년 헌법재판소 결정 이후 형제자매 유류분은 인정되지 않습니다.</strong> 자녀·배우자·부모만 유류분권자입니다. 최신 법리는 변호사 상담으로 확인하세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 반환청구 10년 기한', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '유류분 증여 계산 범위', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
      { label: '상속재산분할 분쟁 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유언 효력 분쟁 절차', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '특별수익과 기여분', href: '/guide/inheritance/inheritance-family-dispute-mediation' },
    ],
  },

  // ─── 3. inheritance / foreign-asset-tax-procedure ───
  {
    domain: 'inheritance',
    slug: 'inheritance-foreign-asset-tax-procedure',
    keyword: '해외 자산 상속세 신고',
    questionKeyword: '아버지가 미국에 부동산을 가지고 계셨는데 한국에서 상속세를 어떻게 신고하나요?',
    ctaKeyword: '해외 자산 상속세 신고 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 자산 상속세 신고 5단계 절차 총정리 | 로앤가이드',
      description:
        '피상속인이 한국 거주자라면 해외 자산도 상속세 과세 대상입니다. 외국납부세액공제·환율 적용·해외금융계좌 신고 절차를 6개월 기한 내 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 한국에 사셨지만 미국·일본에 부동산이 있었어요. 한국에서 상속세를 어떻게 신고해야 하나요?" 피상속인이 한국 거주자였다면 전 세계 자산이 상속세 과세 대상이 됩니다. 환율 적용 시점·외국납부세액공제·해외금융계좌 신고까지 챙겨야 할 항목이 많아 미리 정리하지 않으면 가산세나 이중과세 손해가 발생할 수 있습니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 해외 자산 상속세 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">국세청 안내·국제조세조정에 관한 법률에 따른 공식 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거주자 여부 확정 (사망 직후)</strong><br>피상속인이 한국 거주자였는지 확인. 거주자면 전 세계 자산이 한국 상속세 과세 대상, 비거주자면 국내 자산만 과세 대상.</li>\n<li><strong>2단계 — 해외 자산 평가 (1~2개월 내)</strong><br>현지 시가로 평가 후 상속개시일 외국환거래법상 기준환율로 한국 원화 환산. 부동산은 현지 감정평가서 또는 공시가격 사용.</li>\n<li><strong>3단계 — 외국 상속세 납부 확인 (현지 기한 내)</strong><br>현지국에 상속세가 부과되는 경우 현지 신고·납부. 미국은 6주 후 9개월 내, 일본은 10개월 내 등 국가별 기한 상이.</li>\n<li><strong>4단계 — 한국 상속세 신고 (6개월 내)</strong><br>한국 관할 세무서에 전 세계 자산 합산 신고. 외국납부세액공제로 이중과세 조정 신청.</li>\n<li><strong>5단계 — 해외금융계좌 신고 (다음해 6월 말)</strong><br>피상속인 명의 해외금융계좌 잔액 합계 5억원 초과 시 매년 6월 신고 대상. 상속받은 첫해부터 의무 발생.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 해외 자산 상속, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국납부세액공제·환율 적용·해외금융계좌 신고 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '외국납부세액공제 — 이중과세 방지 적용 방법',
        content:
          '<p><strong style="color:#1e3a5f">현지국과 한국에 모두 상속세가 부과될 경우 외국납부세액공제로 이중과세를 조정할 수 있습니다.</strong></p>\n<ul>\n<li><strong>적용 근거</strong> — 상속세 및 증여세법 제29조. 외국에서 동일한 상속재산에 부과·납부된 상속세를 한국 상속세에서 공제.</li>\n<li><strong>공제 한도</strong> — (한국 상속세액 × 외국 자산 가액 ÷ 전체 상속재산 가액)이 한도. 현지 납부세액이 한도를 초과하면 초과분은 공제 불가.</li>\n<li><strong>증빙서류</strong> — 현지 상속세 신고서·납부증명서·번역공증본 필수. 영문 외 언어는 한국어 번역공증.</li>\n<li><strong>조세조약 적용</strong> — 한미·한일 조세조약에 따라 일부 자산은 거주지국 과세 우선 원칙 적용. 이중과세 협의 절차도 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미국은 연방 상속세 면제 한도가 매우 크므로(2025년 기준 약 1,360만 달러) 실제 납부세액이 0인 경우가 많습니다. 그래도 한국 신고에는 미국 자산이 포함됩니다.</blockquote>',
      },
      {
        title: '해외금융계좌 신고 — 별도 의무와 가산세',
        content:
          '<p><strong style="color:#1e3a5f">상속세 신고와 별도로 해외금융계좌 신고 의무가 있습니다. 위반 시 가산세가 큽니다.</strong></p>\n<ul>\n<li><strong>신고 대상</strong> — 매월 말일 기준 해외금융계좌 잔액 합계 5억원 초과한 적 있는 자.</li>\n<li><strong>신고 기한</strong> — 다음 해 6월 1일~6월 30일. 상속받은 해부터 의무 발생.</li>\n<li><strong>미신고 가산세</strong> — 미신고·축소신고 금액의 10~20% (최대 20억원). 매우 무거움.</li>\n<li><strong>형사 처벌 위험</strong> — 50억원 초과 미신고 시 2년 이하 징역 또는 미신고 금액의 13~20% 벌금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상속세 신고만 하고 해외금융계좌 신고를 누락하면 별도로 큰 가산세가 부과될 수 있습니다. 두 신고는 별개 의무이므로 모두 챙겨야 합니다.</blockquote>',
      },
      {
        title: '비거주자 피상속인 — 국내 자산만 과세 vs 해외 자산 포함 다툼',
        content:
          '<p><strong style="color:#1e3a5f">피상속인이 비거주자였다면 국내 자산만 한국 상속세 과세 대상입니다. 거주자 판정이 분쟁의 시작점입니다.</strong></p>\n<ul>\n<li><strong>거주자 판정 기준</strong> — 국내에 주소 또는 1년 이상 거소를 둔 사람(소득세법 제1조의2). 사망 직전까지 한국에 가족·재산이 있었으면 거주자로 추정될 소지.</li>\n<li><strong>비거주자 시 효과</strong> — 국내 소재 부동산·예금만 한국 상속세 과세. 해외 자산은 한국 과세 대상 아님.</li>\n<li><strong>비거주자 추가 증여 산입 제한</strong> — 대법원 2022두64143 판결에 따라 비거주자 피상속인의 경우 "국외에 있는 상속재산"은 상속세 과세 대상에서 제외되며 상속인 부담 확정에서도 제외 검토.</li>\n<li><strong>거주자 판정 다툼</strong> — 세무서가 거주자로 판정하면 전 세계 자산 과세. 다툼 시 행정심판·행정소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피상속인이 해외에서 5년 이상 거주했어도 한국에 가족과 부동산이 있으면 거주자로 판정될 가능성이 높습니다. 세무사·변호사 상담으로 거주자 여부를 먼저 확정하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 비거주자 피상속인의 국외 상속재산 처리',
        summary:
          '대법원 2022두64143 사건(대법원, 2024.09.12 선고)에서 법원은 피상속인이 비거주자인 경우 구 상속세 및 증여세법 제3조의2 제1항·제3항의 "상속인 각자가 받았거나 받을 재산"에 상속세 과세대상이 되지 않는 "국외에 있는 상속재산"은 포함되지 않는다고 판시했습니다.',
        takeaway: '피상속인의 거주자 여부에 따라 해외 자산의 한국 상속세 과세 범위가 크게 달라지므로, 신고 전 거주자 판정과 자산 소재지 확인을 우선 검토하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '피상속인이 한국에서 5년 이상 안 살았는데도 거주자인가요?',
        answer:
          '<strong>거주 기간만으로 판단하지 않습니다.</strong> 가족·자산·생활 중심지가 한국에 있었는지를 종합 판단합니다. 세무서 거주자 판정에 이의가 있으면 행정심판을 검토할 수 있습니다.',
      },
      {
        question: '미국 상속세를 이미 냈는데 한국에서 또 내야 하나요?',
        answer:
          '<strong>이중과세는 외국납부세액공제로 조정합니다.</strong> 현지 납부증명서를 한국 신고 시 첨부해 공제 신청하면 한도 내에서 이중과세를 피할 수 있습니다.',
      },
      {
        question: '환율은 언제 시점으로 적용하나요?',
        answer:
          '<strong>상속개시일(피상속인 사망일) 외국환거래법상 기준환율을 적용합니다.</strong> 신고일이나 평가일이 아닌 사망일 환율이 기준입니다.',
      },
      {
        question: '해외 부동산 평가는 누가 하나요?',
        answer:
          '<strong>현지 감정평가법인 또는 공시가격을 사용합니다.</strong> 한국 세무서가 인정하는 자료여야 하므로 번역공증과 함께 제출합니다.',
      },
      {
        question: '해외금융계좌 신고를 안 하면 어떻게 되나요?',
        answer:
          '<strong>미신고 금액의 10~20% 가산세, 50억원 초과 시 형사 처벌까지 가능합니다.</strong> 상속세 신고와 별개 의무이므로 매년 6월 별도 신고가 필요합니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '해외 자산 상속 신고', href: '/guide/inheritance/inheritance-foreign-assets-declaration-report' },
      { label: '해외거주자 상속세 신고 절차', href: '/guide/inheritance/inheritance-foreign-resident-tax-report' },
      { label: '상속세 신고 기한과 가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '비상장주식 상속 평가', href: '/guide/inheritance/inheritance-business-share-evaluation' },
    ],
  },

  // ─── 4. inheritance / deceased-debt-priority-order ───
  {
    domain: 'inheritance',
    slug: 'inheritance-deceased-debt-priority-order',
    keyword: '상속 채무 변제 순위',
    questionKeyword: '아버지가 남긴 빚이 여러 군데인데 어디부터 갚아야 하나요? 순서가 정해져 있나요?',
    ctaKeyword: '상속 채무 변제 순위 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '상속 채무 변제 순위 4가지 기준 총정리 | 로앤가이드',
      description:
        '한정승인·재산분리에서 상속 채무는 우선채권→일반채권 안분→유증→후순위 순으로 변제합니다. 순서를 어기면 변제받지 못한 채권자에게 손해배상 책임이 생길 수 있습니다.',
    },
    intro:
      '<p>"아버지가 사업하시다 빚을 여러 곳에 남기셨어요. 은행·카드·지인·세금까지 다 다른데 어디부터 갚아야 하나요?" 한정승인을 했더라도 변제 순서를 잘못 지키면 한 채권자에게는 다 갚고 다른 채권자에게는 한 푼도 못 갚는 결과가 나올 수 있습니다. 그렇게 되면 손해 본 채권자가 상속인을 상대로 손해배상을 청구할 수 있어 정확한 순서 파악이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 상속 채무에 변제 순서가 정해져 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법은 한정승인·재산분리 절차에서 변제 순서를 명확히 정하고 있습니다.</strong></p>\n<ul>\n<li><strong>1순위 — 우선권 있는 채권</strong> — 저당권·전세권·질권 등 담보권자, 임금·퇴직금 우선변제권자, 조세·국민건강보험료·국민연금 등 공과금. 담보가치·법정 한도 내 우선 변제.</li>\n<li><strong>2순위 — 일반채권 (안분 비례)</strong> — 신고된 일반 채권자에게 채권액 비율로 안분 변제. 은행 대출·카드 채무·지인 차용금·미지급 채무 등.</li>\n<li><strong>3순위 — 유증</strong> — 일반채권 변제 후 잔여 재산이 있을 때만 유증 채권자에게 변제(민법 제1036조).</li>\n<li><strong>4순위 — 후순위·기간 후 신고 채권</strong> — 공고 기간 후 신고했거나 청산 종료 후 발견된 채권. 잔여 재산 한도 내 변제(민법 제1039조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1순위 안에서도 우선순위가 있습니다. 일반적으로 조세·임금 → 담보권 순이지만 사건별 우선순위 다툼이 발생할 수 있어 변호사·세무사 상담을 검토해보세요.</blockquote>',
      },
      {
        title: 'Q. 안분 비례는 어떻게 계산하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 우선채권 변제 후 남은 재산을 일반채권액 비율로 나눠 변제합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 우선채권 변제 후 잔여 재산 확정</strong><br>저당권·세금·임금 등 우선채권을 먼저 변제. 남은 금액이 일반채권 변제 재원.</li>\n<li><strong>2단계 — 일반채권 총액 합산</strong><br>은행 + 카드 + 지인 + 미지급 등 신고된 일반채권 합계 산출.</li>\n<li><strong>3단계 — 안분 비율 계산</strong><br>각 채권자별 변제액 = 잔여재산 × (개별 채권액 ÷ 일반채권 총액).</li>\n<li><strong>4단계 — 동시 변제</strong><br>모든 일반채권자에게 동시에 안분 비율대로 변제. 한 채권자에게 먼저 전액 변제 금지.</li>\n<li><strong>5단계 — 변제 내역서 작성·보관</strong><br>각 채권자별 변제액·증빙 자료 5년 이상 보관.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 채무 변제, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">우선채권 분류·안분 비례 계산·변제 순서를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 가분채권(예금·임금)은 따로 처리하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 가분채권은 상속개시 즉시 법정상속분대로 분할되지만, 예외적으로 상속재산분할 대상이 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>원칙 — 즉시 분할</strong> — 금전채권 같은 가분채권은 상속개시와 동시에 법정상속분에 따라 공동상속인들에게 분할 귀속(대법원 2025다212863).</li>\n<li><strong>예외 — 분할 대상 인정</strong> — 초과특별수익자가 있거나 특별수익·기여분으로 구체적 상속분이 법정상속분과 달라지는 경우 가분채권도 상속재산분할 대상이 될 소지.</li>\n<li><strong>피상속인 예금·예금채권</strong> — 원칙은 즉시 분할되지만 금융기관 실무상 상속인 전원의 동의·상속재산분할협의서를 요구하는 경우가 많습니다.</li>\n<li><strong>상속회복청구</strong> — 다른 상속인이 가분채권을 무단 인출했다면 상속회복청구로 자신의 몫을 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피상속인 사망 직후 한 상속인이 단독으로 예금을 인출해 자신 명의 계좌로 옮겼다면, 다른 상속인은 상속회복청구로 자신의 법정상속분에 해당하는 금액 반환을 청구할 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 변제 순서를 어기면 어떤 책임이 생기나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 변제받지 못한 채권자에게 한정승인 상속인이 손해배상 책임을 질 수 있습니다.</strong></p>\n<ul>\n<li><strong>위법 변제의 효과</strong> — 우선순위·안분 비례를 어기고 한 채권자에게만 전액 변제하면 다른 채권자가 손해 본 만큼 한정승인 상속인에게 손해배상 청구 가능(민법 제1038조).</li>\n<li><strong>고유재산 책임</strong> — 위법 변제 책임은 한정승인의 효력(상속재산 한도)을 받지 못합니다. 상속인의 고유재산으로 변제해야 할 수 있습니다.</li>\n<li><strong>예외 — 선의·무과실</strong> — 우선채권 존재를 정말 몰랐고 합리적 조사 의무도 다했다면 책임 면제 주장 가능. 그러나 입증 책임이 상속인에게 있어 어렵습니다.</li>\n<li><strong>방어 자료 필수</strong> — 신문 공고문·채권 신고 접수증·변제 내역서·우선권 증빙(저당권 등기·세금 고지서)을 5년 이상 보관해 후속 분쟁에 대비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "한 채권자가 강하게 청구해서 먼저 갚았다"는 사정만으로는 면책 사유가 되기 어렵습니다. 공고 기간이 끝날 때까지 기다린 후 안분 비례로 동시 변제하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가분채권의 상속재산분할 대상 여부',
        summary:
          '대법원 2025다212863 사건(대법원, 2025.12.11 선고)에서 법원은 금전채권 같은 가분채권은 상속개시와 동시에 법정상속분에 따라 분할 귀속되는 것이 원칙이지만, 초과특별수익자가 존재하는 등 일률 분할이 부당한 결과를 가져오는 경우에는 상속재산분할 대상이 될 수 있다고 판시했습니다. 또한 다른 상속인이 무단으로 예금을 인출한 경우 상속회복청구의 대상이 된다고 판단했습니다.',
        takeaway: '피상속인의 예금·금전채권이 무단으로 처분된 경우 상속회복청구로 자신의 몫을 회수할 수 있고, 특별수익이 있다면 가분채권도 분할 대상이 될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '세금이랑 은행 대출 중 어느 게 우선인가요?',
        answer:
          '<strong>일반적으로 조세 채권이 우선이지만 사건별로 다릅니다.</strong> 저당권 등기 시점·국세 법정기일·임금 발생 시점에 따라 순위가 달라질 수 있어 변호사·세무사 상담이 권장됩니다.',
      },
      {
        question: '한 채권자가 강하게 청구해서 먼저 갚으면 안 되나요?',
        answer:
          '<strong>공고 기간 종료 전 한 채권자에게만 전액 변제하면 위법 변제로 손해배상 책임이 생길 소지가 있습니다.</strong> 공고 종료 후 모든 채권자에게 동시에 안분 비례로 변제하는 것이 원칙입니다.',
      },
      {
        question: '예금이 적은데 채권자가 많아요. 안 갚아도 되나요?',
        answer:
          '<strong>한정승인을 했다면 상속재산 한도까지만 변제하면 됩니다.</strong> 부족분은 변제 의무 없이 면책되지만 절차(공고·안분)는 반드시 거쳐야 효력이 유지됩니다.',
      },
      {
        question: '청산 후 새 채권자가 나타나면 어떻게 하나요?',
        answer:
          '<strong>잔여 재산이 있으면 그 한도 내에서 변제합니다.</strong> 이미 다른 채권자에게 변제 완료해 잔여가 없으면 더 이상 변제 의무가 없습니다(민법 제1039조).',
      },
      {
        question: '변제 순서가 너무 복잡한데 도움받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 상담을 검토해볼 수 있습니다.</strong> 채권자가 다수이거나 우선권 다툼이 있으면 변호사 조력을 받는 것이 추후 분쟁 예방에 유리합니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 신청 절차', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속재산 숨겨진 빚 찾기', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
      { label: '상속포기 절차와 효과', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '한정승인과 상속포기 비교', href: '/guide/inheritance/inheritance-limited-acceptance-vs-renunciation-choice' },
      { label: '상속재산분할 분쟁 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
    ],
  },
];
