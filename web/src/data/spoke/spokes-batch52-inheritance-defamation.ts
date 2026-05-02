import { SpokePage } from '../spoke-pages';

// batch52 inheritance 3개 + defamation 3개:
//   inheritance:
//     1. 한정승인 후 채권자가 추가로 발견된 채무를 청구해온 케이스 (절차형, victim)
//     2. 자필유언 검인 절차에서 위조 의혹 다툼 (Q&A형, neutral)
//     3. 해외상속재산 신고·해외금융계좌 신고 절차 (절차형, neutral)
//   defamation:
//     1. 라이브방송 중 실시간 명예훼손 발언 피해자 대응 (Q&A형, victim)
//     2. 유튜브 댓글로 타인 신상 공개해 고소당한 가해자 방어 (Q&A형, accused)
//     3. 딥페이크 합성 영상 명예훼손 (절차형, neutral — 피해자/가해자 양쪽 톤 균형)
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 한정승인 신고 수리 후 새 채권자가 청구해온 상속인이, 책임재산 한도·재산목록 누락·청산 절차 항변을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 자필유언 검인 절차에서 다른 상속인이 위조·강요 의혹을 제기한 상황의 당사자가, 검인기일·필적감정·유언효력 다툼 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 해외 부동산·계좌·유가증권을 상속받은 한국 거주 상속인이, 상속세 신고 + 해외금융계좌 신고 + 외국환거래법 신고 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 라이브방송·실시간 채팅에서 자신을 비방하는 발언을 들은 피해자가, 영상 보전·신상정보보호 +  사이버명예훼손 고소 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 유튜브 댓글에 타인의 직장·실명·사진을 적어 정통망법 위반 고소를 당한 가해자가, 사실 적시 vs 허위·공익성·합의 방어 포인트를 정리하도록 돕는 페이지다.
// 6. 이 페이지는 딥페이크 합성 영상으로 명예훼손이 발생한 상황의 피해자·가해자 양측이, 삭제·플랫폼 신고·성착취물 결합 여부 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch52InheritanceDefamation: SpokePage[] = [
  // ─── 1. inheritance / limited-acceptance-creditor-additional-claim ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-creditor-additional-claim',
    keyword: '한정승인 후 추가 청구',
    questionKeyword: '한정승인 신고 수리됐는데 1년 뒤에 모르던 카드사 채권자가 빚 갚으라고 소송 걸었어요. 어떻게 막나요?',
    ctaKeyword: '한정승인 후 추가 채권자 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '한정승인 후 추가 채권자 청구 — 책임재산 항변 5단계 | 로앤가이드',
      description:
        '한정승인이 수리된 뒤 새 채권자가 변제를 청구해 왔다면 책임재산 한도 항변 + 청산 절차 + 면책 범위 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 빚이 많아 한정승인을 받아 정리했어요. 그런데 1년 뒤에 모르던 카드사가 &lsquo;상속인이 갚아야 한다&rsquo;며 소송장을 보냈습니다." 한정승인은 빚을 면제해주는 제도가 아니라 <strong>상속받은 재산 한도 안에서만 갚는다</strong>는 책임 한정 제도입니다. 따라서 새 채권자가 나타나도 상속인 본인 재산까지 가져갈 수는 없고, 다만 청산 절차에서 누락된 채권자라면 일정 한도에서 분배 다툼이 남을 수 있어요. 민법 제1028조·제1038조 구조를 이해하고 답변서·재산목록을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 한정승인 받았는데 새 채권자가 또 청구할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구 자체는 가능하지만, 받을 수 있는 한도는 상속재산에 한정됩니다.</strong></p>\n<ul>\n<li><strong>책임재산 한도</strong> — 민법 제1028조: 한정승인자는 상속으로 얻은 재산 한도에서만 변제 책임. 본인 재산은 보호.</li>\n<li><strong>청산 절차 누락 채권자</strong> — 민법 제1038조: 공고·최고 절차에 응하지 않아 누락된 채권자는 잔여 상속재산 한도에서만 변제 청구 가능. 다른 채권자에게 이미 변제된 부분은 회수 어려움.</li>\n<li><strong>악의 누락 시 손해배상</strong> — 상속인이 채권자 존재를 알면서도 고의로 누락한 경우 그 채권자에게 손해배상 책임이 생길 수 있음.</li>\n<li><strong>특별한정승인 3개월</strong> — 사망 사실은 알았지만 채무 초과를 몰랐다가 뒤늦게 안 경우, 안 날부터 3개월 내 특별한정승인 가능(민법 제1019조 제3항).</li>\n<li><strong>본인 재산은 가압류 대상 아님</strong> — 한정승인 등기·결정문이 있으면 상속인 명의 부동산·예금은 채권자가 가압류·강제집행 못 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한정승인 결정문 + 재산목록 + 청산 신문공고 자료를 답변서에 함께 제출하면 상속인 본인 재산 강제집행을 차단할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추가 채권자 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 소장·지급명령 송달 즉시 답변서 작성 (송달 후 30일 내)</strong> — "한정승인 신고 수리(법원·사건번호) 후 청산 절차 진행, 책임재산 한도 항변" 명시. 답변서 미제출 시 무변론 패소 위험.</li>\n<li><strong>2단계 — 한정승인 결정문·재산목록·신문공고 첨부</strong> — 가정법원 결정문, 신문 청산 공고 사본, 변제내역서, 잔여재산 명세를 답변서에 첨부.</li>\n<li><strong>3단계 — 청산 절차 누락 여부 정리</strong> — 채권자가 공고 기간(2개월 이상) 내에 신고하지 않았다면 잔여재산 한도에서만 변제. 이미 변제 완료됐으면 변제할 재산이 없을 수 있음.</li>\n<li><strong>4단계 — 본인 재산 강제집행 정지 신청</strong> — 채권자가 상속인 본인 명의 부동산·예금에 가압류·강제집행을 시도하면 즉시 집행정지 신청. 한정승인 결정문이 결정적 증거.</li>\n<li><strong>5단계 — 특별한정승인 검토 (안 날부터 3개월)</strong> — 처음 일반 단순승인했는데 뒤늦게 채무 초과를 안 경우, 안 날부터 3개월 내 특별한정승인 신청 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">청산 진행 단계·잔여재산·새 채권자 위치에 따라 적용 항변이 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">답변서·집행정지·소송 진행에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>한정승인 결정문 등본</strong> — 가정법원에서 발급. 신고 수리 사건번호 명시.</li>\n<li><strong>상속재산 재산목록</strong> — 신고 시 제출한 적극재산·소극재산 목록 사본.</li>\n<li><strong>청산 신문공고 자료</strong> — 일간신문 공고 원본·증빙. 공고기간(통상 2개월) 표시.</li>\n<li><strong>변제내역서</strong> — 공고 기간 내 신고한 채권자에게 비례 변제한 내역·송금증.</li>\n<li><strong>잔여재산 명세</strong> — 변제 후 남은 상속재산 유무·금액.</li>\n<li><strong>채권자 청구 자료</strong> — 새 채권자가 보낸 소장·지급명령·내용증명.</li>\n<li><strong>피상속인 사망진단서·가족관계증명서</strong> — 상속관계 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "한정승인 받았으니 무시해도 된다"고 답변서를 안 내면 무변론 패소로 본인 재산 강제집행 위험이 생깁니다. 송달 후 30일 내 답변서 제출이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 한정승인 후 추가 청구 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"몰랐던 채권자라도 다 갚아야 한다"</strong> — 청산 공고에 응하지 않은 채권자는 잔여재산 한도에서만 청구 가능. 본인 재산 강제집행 대상 아님.</li>\n<li><strong>재산목록 의도적 누락</strong> — 상속재산을 빼놓고 신고하면 한정승인 효력 자체가 다툼 대상. 채권자가 재산목록 진실성을 다투면 단순승인 의제 위험(민법 제1026조).</li>\n<li><strong>상속재산 임의 처분</strong> — 한정승인 후에도 상속재산을 멋대로 처분·은닉하면 단순승인 의제. 청산 절차 통해서만 처분.</li>\n<li><strong>특별한정승인 시한 놓침</strong> — 채무 초과를 안 날부터 3개월 지나면 특별한정승인 불가. 즉시 가정법원 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 상속포기·한정승인 안내 / 국세청 상속세 1588-0060 / 한국가정법률상담소.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속 가분채권 인출과 상속회복청구',
        summary:
          '대법원 2025다212863(대법원, 2025.12.11 선고) 사건에서 법원은 공동상속인 중 1인이 망인 명의 외화예금을 임의 인출해 자기 계좌에 입금한 행위에 대해, 초과특별수익자 존재 등 특별한 사정이 있는 경우 가분채권도 상속재산분할 대상이 될 수 있고, 다른 상속인의 반환청구는 상속회복청구의 소에 해당하며 임의 인출자가 참칭상속인이 된다고 판시했습니다. 한정승인 후 잔여재산을 두고 상속인·채권자 사이에 분쟁이 생긴 경우에도, 누가 상속재산을 임의 처분했는지·청산 절차가 적정했는지가 책임재산 항변의 핵심이 될 수 있다는 시사점이 있습니다.',
        takeaway: '한정승인 후 추가 채권자가 등장하면 청산 절차 적정성·재산목록 진실성·잔여재산 위치를 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '한정승인 받은 뒤 5년 지났는데 새 채권자가 청구하면요?',
        answer:
          '<strong>시효 완성 여부와 별개로 책임재산 한도 항변은 유효합니다.</strong> 채권자 청구권 시효는 별도로 계산되지만, 한정승인 효력은 시간 제한 없어요. 결정문·청산 자료를 답변서에 첨부하면 본인 재산 강제집행을 차단할 수 있는 영역입니다.',
      },
      {
        question: '청산 공고를 신문에 안 했어도 한정승인 효력이 있나요?',
        answer:
          '<strong>공고 절차 누락은 손해배상 책임이 생길 수 있지만 한정승인 자체가 무효가 되지는 않습니다.</strong> 다만 누락된 채권자에게 책임재산 한도 외에 별도 손해배상 청구를 받을 위험이 있어요(민법 제1038조).',
      },
      {
        question: '잔여재산이 한 푼도 없으면 새 채권자에게 어떻게 답변하나요?',
        answer:
          '<strong>답변서에 "변제할 책임재산이 없다"는 점을 잔여재산 명세·변제내역서로 입증하면 됩니다.</strong> 채권자가 본인 재산 강제집행을 시도하면 한정승인 결정문으로 즉시 집행정지 신청 가능.',
      },
      {
        question: '특별한정승인은 언제 신청 가능한가요?',
        answer:
          '<strong>처음 단순승인했지만 뒤늦게 채무 초과를 안 날부터 3개월 내(민법 제1019조 제3항)입니다.</strong> 채무 초과를 안 시점은 카드사·세무서·은행 통지서·소장 송달일 등으로 입증할 수 있어요. 시한 지나면 단순승인 확정되어 본인 재산까지 강제집행 가능.',
      },
      {
        question: '소장·지급명령을 무시하면 어떻게 되나요?',
        answer:
          '<strong>무변론 패소 + 본인 재산 강제집행으로 이어집니다.</strong> 한정승인이 있어도 답변서로 항변을 제출하지 않으면 법원이 자동으로 알아서 적용해주지 않아요. 송달 후 30일 내 답변서 제출이 출발점입니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 신고 절차', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '한정승인 후 채무 회수 시 대응', href: '/guide/inheritance/inheritance-limited-acceptance-post-debt' },
      { label: '한정승인 후 채권자 대응 절차', href: '/guide/inheritance/inheritance-limited-acceptance-creditor-response' },
      { label: '한정승인과 상속포기 비교', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '단순승인 후 숨은 채무 회수', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
    ],
  },

  // ─── 2. inheritance / will-probate-forgery-dispute ───
  {
    domain: 'inheritance',
    slug: 'inheritance-will-probate-forgery-dispute',
    keyword: '자필유언 검인 위조 다툼',
    questionKeyword: '돌아가신 아버지 자필유언이 발견됐는데 다른 형제가 위조라며 검인 절차에서 다투고 있어요. 어떻게 진행되나요?',
    ctaKeyword: '유언 검인 위조 다툼 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '자필유언 검인에서 위조 의혹 — 4단계 다툼 절차 | 로앤가이드',
      description:
        '자필유언이 발견됐는데 다른 상속인이 위조·강요 의혹을 제기했다면 검인기일 출석 + 필적감정 + 유언효력확인의 소 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 아버지 책상에서 자필유언이 발견됐는데, 둘째 형이 &lsquo;아버지 글씨가 아니다, 누가 강요해서 쓴 거다&rsquo;며 검인기일에 와서 따지고 있어요." 자필증서 유언은 민법 제1066조 요건(전문·연월일·주소·성명 자서 + 날인) 충족 여부와 진정성립이 두 축입니다. 가정법원 검인은 유언 효력을 확정하는 절차가 아니라 <strong>유언서 존재·상태를 보존</strong>하는 절차이고, 효력 다툼은 별도 유언효력확인의 소·유언무효확인의 소로 진행됩니다. 검인기일 출석부터 단계별로 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 자필유언이 유효하려면 어떤 요건이 필요한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법 제1066조 5가지 요건이 모두 충족되어야 합니다.</strong></p>\n<ul>\n<li><strong>유언자 본인 자서</strong> — 유언자가 직접 손으로 쓴 글씨여야 함. 워드·타이핑·대필은 무효.</li>\n<li><strong>전문 작성</strong> — 유언 내용 전부를 자서. 일부만 자필이고 나머지가 인쇄·타이핑이면 무효.</li>\n<li><strong>연월일 자서</strong> — 작성한 날짜를 본인이 자필로. 누락 시 무효(연·월만 있고 일이 없으면 원칙 무효).</li>\n<li><strong>주소 자서</strong> — 유언자 주소(생활본거 충분히 식별 가능한 정도). 단순 동·번지 누락도 다툼 대상.</li>\n<li><strong>성명 자서 + 날인</strong> — 본인 성명 자서 + 도장(인감 아니어도 무방, 무인 가능). 서명만 있고 날인 없으면 무효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5가지 중 하나라도 누락되면 유언은 효력이 없어 법정상속분대로 분할되는 영역입니다. 형식 흠결이 있으면 검인 단계에서부터 다툼이 생길 수 있어요.</blockquote>',
      },
      {
        title: 'Q. 검인기일에서 다른 상속인이 위조 의혹을 제기하면요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 검인은 보존 절차이므로 효력 확정 절차는 별도입니다. 4가지 트랙으로 갈립니다.</strong></p>\n<ul>\n<li><strong>검인기일 의견 진술</strong> — 가정법원 검인기일에 모든 상속인이 출석해 유언서 상태·진정성·이의 의견을 진술. 조서에 기재.</li>\n<li><strong>필적감정 신청</strong> — 위조 다툼이면 국립과학수사연구원 또는 사립감정인에게 필적감정 의뢰. 유언자의 다른 자필 자료(편지·일기·서류)와 대조.</li>\n<li><strong>유언효력확인의 소</strong> — 유언이 유효하다고 주장하는 측이 가정법원에 효력확인 청구. 일종의 확인소송.</li>\n<li><strong>유언무효확인의 소</strong> — 무효 주장 측이 가정법원에 무효확인 청구. 형식 흠결·필적 위조·유언능력 부재·강박을 입증.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유언 형식·필적·유언능력 다툼은 갈래가 많아요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 위조 다툼 4단계',
        content:
          '<p><strong style="color:#1e3a5f">가정법원 검인 절차 + 유언효력확인의 소 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 검인 신청 (유언서 발견 후 지체 없이)</strong> — 자필유언·녹음유언·비밀증서유언은 가정법원 검인 필수(민법 제1091조). 미신청 시 과태료 + 유언 집행 어려움.</li>\n<li><strong>2단계 — 검인기일 출석 + 의견 진술 (통상 신청 후 1~2개월)</strong> — 모든 상속인 출석 통지. 유언서 봉인 상태·필적·내용·이의 사항을 조서에 기재. 위조 의혹은 이때 명시 진술.</li>\n<li><strong>3단계 — 필적감정·유언능력 자료 확보 (검인 후 ~3개월)</strong> — 유언자의 다른 자필 자료 + 작성 무렵 의료기록(치매·뇌질환)·증인 진술 확보. 강박 정황은 가족 갈등 메시지·녹취도 자료.</li>\n<li><strong>4단계 — 유언효력/무효확인의 소 제기</strong> — 검인 결과만으로는 효력 확정되지 않음. 다툼 있으면 가정법원에 본안 소송. 통상 6~18개월. 결과에 따라 상속재산 분할 방향 결정.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 자필유언 위조 다툼에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"검인이 끝나면 유언이 확정된다"</strong> — 검인은 보존 절차일 뿐 효력 확정 아님. 효력 다툼은 별도 본안 소송.</li>\n<li><strong>유언서를 임의 처분·은닉</strong> — 유언서 변조·파기는 상속결격 사유(민법 제1004조 제5호). 결격 시 본인 상속분도 박탈.</li>\n<li><strong>주소·날인 누락 무시</strong> — 주소 일부 누락·날인 부재는 무효 사유. "거의 다 갖췄으니 유효하겠지"라는 판단은 위험.</li>\n<li><strong>유언능력 의료기록 확보 늦음</strong> — 치매·뇌졸중 진단 무렵 작성 유언은 유언능력 다툼 대상. 시간 지나면 의료기록 확보 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사신청과(검인) / 국립과학수사연구원(필적감정) / 한국가정법률상담소.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사망 후 협의이혼 배우자 상속인에 대한 재산분할 청구',
        summary:
          '대법원 2024스876(대법원, 2026.01.15 선고) 사건에서 법원은 협의이혼한 당사자 일방이 사망한 경우 그 재산분할 의무가 상속인들에게 승계되며, 다른 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시했습니다. 자필유언 검인·효력 다툼에서도 유언자 사망 후 상속인 사이의 재산분할·유류분 다툼이 추가로 발생할 수 있어, 유언서 검인 + 유류분반환 + 상속재산분할 트랙을 함께 점검해두면 도움이 됩니다.',
        takeaway: '자필유언 효력 다툼은 검인기일·필적감정·유류분 트랙이 동시에 진행될 수 있어, 유언자 자필 자료·의료기록·가족 메시지를 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '자필유언에 도장 대신 손가락 지장(무인)을 찍어도 유효한가요?',
        answer:
          '<strong>판례상 무인도 날인으로 인정됩니다.</strong> 인감·서명·도장이 아니어도 본인이 의식적으로 찍은 무인이면 민법 제1066조 날인 요건 충족 가능. 다만 무인 진정성 다툼이 생길 수 있어 필적감정과 함께 다투어집니다.',
      },
      {
        question: '검인기일에 안 가면 어떻게 되나요?',
        answer:
          '<strong>본인 권리는 보존되지만 의견 진술 기회를 잃을 수 있어 가급적 출석이 좋습니다.</strong> 출석 못 하면 의견서를 서면으로 제출 가능. 검인 자체는 모든 상속인 출석 없이도 진행될 수 있어요.',
      },
      {
        question: '유언서 일부에 다른 글씨가 섞여 있으면요?',
        answer:
          '<strong>전문 자서 요건 위반으로 무효 다툼 대상입니다.</strong> 유언 본문이 일부 인쇄·대필이면 그 부분뿐 아니라 유언 전체가 무효로 판단되는 경우가 많아요. 필적감정에서 명확히 구분 가능.',
      },
      {
        question: '치매 진단을 받은 상태에서 쓴 유언은 무효인가요?',
        answer:
          '<strong>의사능력(유언능력)이 없는 상태에서 쓴 유언은 무효입니다.</strong> 다만 치매 진단만으로 자동 무효는 아니고, 유언 작성 시점의 의사능력 정도(경증·중증·일시 청명 여부)가 핵심. 의료기록·증인 진술로 다툼.',
      },
      {
        question: '유언이 무효로 확정되면 재산은 어떻게 나뉘나요?',
        answer:
          '<strong>법정상속분에 따라 분할됩니다.</strong> 배우자 1.5 + 자녀 1씩(공동상속). 유언 무효 확정 후 상속재산분할 협의 또는 가정법원 분할심판으로 진행.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유언 효력 다툼 절차', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '유언 위조 검증 절차', href: '/guide/inheritance/inheritance-will-forgery-verification-procedure' },
      { label: '유언 효력 분쟁 대응', href: '/guide/inheritance/inheritance-contested-will-validity-challenge' },
      { label: '상속재산분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
    ],
  },

  // ─── 3. inheritance / overseas-asset-inheritance-tax-report ───
  {
    domain: 'inheritance',
    slug: 'inheritance-overseas-asset-inheritance-tax-report',
    keyword: '해외상속재산 신고',
    questionKeyword: '미국에 살던 부모님이 돌아가셔서 미국 부동산·계좌를 상속받았어요. 한국에 어떻게 신고해야 하나요?',
    ctaKeyword: '해외상속재산 신고 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '해외상속재산 신고 — 상속세·해외계좌 5단계 절차 | 로앤가이드',
      description:
        '해외 부동산·계좌·유가증권을 상속받은 한국 거주자라면 상속세 6개월 신고 + 해외금융계좌 신고 + 외국환거래법 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"미국에 거주하시던 아버지가 돌아가시면서 미국 부동산과 은행계좌, 주식을 남겼어요. 저는 한국 거주자인데 어떻게 신고해야 할지 막막합니다." 해외상속재산은 상속세 신고(국세청, 사망일 속하는 달의 말일부터 6개월) + 해외금융계좌 신고(매년 6월, 잔액 5억원 초과 시) + 외국환거래법 신고(취득·반입 시점)가 동시에 적용되는 복합 영역입니다. 한·미 조세조약·미국 estate tax와 한국 상속세 이중과세 조정도 검토해야 해서, 각 신고 시한을 정리해두는 것이 출발점이에요.</p>',
    sections: [
      {
        title: '해외상속 vs 국내상속 핵심 차이 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지가 해외상속 특유의 절차 포인트입니다.</strong></p>\n<ul>\n<li><strong>거주자·비거주자 구분</strong> — 피상속인이 한국 거주자였는지 비거주자였는지에 따라 과세 범위가 달라짐. 거주자면 전 세계 재산 과세, 비거주자면 한국 소재 재산만 과세.</li>\n<li><strong>이중과세 조정</strong> — 한·미·일 등 조세조약 체결국이면 외국납부세액공제(상속세 및 증여세법 제29조)로 이중과세 조정.</li>\n<li><strong>해외 검인(Probate)</strong> — 미국·캐나다·영국 등은 해외 부동산·금융계좌 명의 변경 위해 현지 법원 Probate 절차 필요. 한국 가정법원 검인과 별개.</li>\n<li><strong>해외금융계좌 신고</strong> — 상속받은 해외 계좌 잔액이 5억원 초과면 매년 6월 국세청 신고(국제조세조정법 제52조). 미신고 시 과태료 최대 20%.</li>\n<li><strong>외국환거래법 신고</strong> — 해외 부동산 취득·자금 반입은 외환은행·기획재정부 신고 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속세 신고 시한(6개월) + 해외금융계좌 신고(매년 6월) + 외국환거래법 신고는 누락 시 무거운 가산세·과태료가 적용되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 해외상속 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">국세청·기획재정부·외환은행 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 피상속인 거주자 판정 + 재산목록 확정 (사망 후 1개월 내)</strong> — 피상속인이 한국 거주자였는지 비거주자였는지 확인. 해외 부동산·계좌·주식·연금·생명보험 일괄 목록화.</li>\n<li><strong>2단계 — 현지 검인(Probate) 진행 (사망 후 1~6개월)</strong> — 미국·영국·캐나다 등은 현지 변호사 통해 Probate 신청. 한국 영사관 인증 필요시 동시 처리.</li>\n<li><strong>3단계 — 한국 상속세 신고 (사망일 속한 달 말일부터 6개월 내)</strong> — 국세청 홈택스 또는 관할 세무서. 해외 재산 평가는 사망일 환율로 환산. 외국납부세액공제 신청.</li>\n<li><strong>4단계 — 외국환거래법 신고 + 자금 반입 (필요시)</strong> — 해외 부동산 취득·자금 5만 달러 초과 반입은 외환은행·관세청 신고. 위반 시 과태료.</li>\n<li><strong>5단계 — 해외금융계좌 신고 (매년 6월, 잔액 5억원 초과 시)</strong> — 다음 해 6월부터 매년 신고 의무. 잔액 환산 기준일·합산 방식은 국제조세조정법 시행령 참고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">거주자 판정·이중과세·신고 시한이 복잡합니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">상속세·해외계좌·외환 신고에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·가족관계증명서</strong> — 한국·해외 양쪽 신고 공통 첨부. 영사관 아포스티유 인증 필요할 수 있음.</li>\n<li><strong>해외 부동산 등기부등본·감정평가서</strong> — 사망일 기준 평가액. 현지 세무신고 자료 활용.</li>\n<li><strong>해외 금융계좌 잔액증명서</strong> — 사망일 기준 잔액. 은행별 발급.</li>\n<li><strong>해외 주식·유가증권 보유내역</strong> — 사망일 기준 평가액·환율.</li>\n<li><strong>현지 Probate 결정문</strong> — 미국·영국 등 현지 법원 검인 결정문.</li>\n<li><strong>외국 납부 상속세 영수증</strong> — 외국납부세액공제 신청 시 첨부.</li>\n<li><strong>환율 자료</strong> — 사망일 한국은행 환율 기준 환산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "해외에 있으니 한국 신고 안 해도 되겠지"는 가산세 사유. 거주자 사망이면 전 세계 재산이 한국 상속세 과세 대상이라는 점을 먼저 확인해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 해외상속 신고에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"해외 재산은 한국에 신고 안 해도 된다"</strong> — 거주자 사망이면 전 세계 재산이 과세 대상. 미신고 시 무신고가산세 20% + 신고불성실가산세.</li>\n<li><strong>"이중과세니까 미국 세금만 내면 된다"</strong> — 외국납부세액공제는 한국 신고를 전제로 한 공제. 신고 자체를 누락하면 공제도 못 받음.</li>\n<li><strong>해외금융계좌 미신고</strong> — 상속받은 계좌 잔액 5억원 초과인데 다음 해 6월 신고 누락하면 미신고 가산세 최대 20%.</li>\n<li><strong>외국환거래법 신고 누락</strong> — 해외 부동산 취득·자금 반입을 외환은행·관세청에 미신고하면 과태료. 처벌 대상이 될 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 국세청 상속세 1588-0060 / 국세청 국제조세 / 외환은행 외국환거래 / 기획재정부 외환정책 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국 거주자 한국 부동산 상속세 평가',
        summary:
          '대법원 2025두34935(대법원, 2026.01.15 선고) 사건에서 법원은 상속을 원인으로 주택을 취득한 경우 거주기간에 따른 장기보유 특별공제율을 적용할 때 거주기간은 양도자가 양도자산 취득일부터 양도일까지의 보유기간 중 해당 주택에서 거주한 기간을 의미하며, 주택 취득원인이 상속인 경우에도 마찬가지라고 판시했습니다. 해외상속재산을 한국에서 신고할 때도 평가 기준일·거주기간 산정 방식이 핵심이라, 사망일 시점 평가·환율·외국 납부세액 자료를 함께 정리해두면 도움이 됩니다.',
        takeaway: '해외상속은 상속세 신고일·해외금융계좌 신고일·외환신고일이 별개라, 시한별 체크리스트를 미리 만들어두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '아버지가 미국 영주권자였는데 한국에 상속세 내야 하나요?',
        answer:
          '<strong>피상속인이 한국 비거주자라면 한국 소재 재산만 한국 상속세 과세 대상입니다.</strong> 미국 estate tax는 별도. 다만 상속인이 한국 거주자라 해외 자산을 보유하게 되면 해외금융계좌 신고 의무는 본인에게 발생할 수 있어요.',
      },
      {
        question: '해외 자산 평가는 어떤 환율로 하나요?',
        answer:
          '<strong>사망일 기준 한국은행 매매기준율로 환산합니다.</strong> 신고일이 아니라 사망일 환율. 이후 환율 변동은 평가액에 영향 없어요.',
      },
      {
        question: '미국에서 estate tax 다 냈는데 한국에서 또 내야 하나요?',
        answer:
          '<strong>외국납부세액공제로 이중과세를 조정합니다.</strong> 미국 납부 estate tax 영수증을 첨부해 한국 상속세에서 공제. 한·미 조세조약 적용. 다만 한국 신고 자체를 안 하면 공제도 못 받아요.',
      },
      {
        question: '해외 부동산 명의 이전은 어떻게 하나요?',
        answer:
          '<strong>현지 Probate(검인) 절차를 거쳐야 명의 이전이 됩니다.</strong> 미국·영국·캐나다는 현지 법원에 Probate 신청. 한국 가정법원 검인과 별개로 진행. 현지 변호사 선임이 일반적이에요.',
      },
      {
        question: '해외금융계좌 신고 누락하면 처벌이 무거운가요?',
        answer:
          '<strong>잔액 50억원 초과 미신고는 형사처벌(국제조세조정법 제62조)까지 가능합니다.</strong> 5억원 초과 미신고는 최대 20% 과태료. 자진신고 시 감경 가능하니 누락 발견 시 즉시 신고가 좋아요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '해외 부동산 상속 절차', href: '/guide/inheritance/inheritance-foreign-resident-tax-report' },
      { label: '해외 자산 발견 후 절차', href: '/guide/inheritance/inheritance-foreign-asset-discovery' },
      { label: '해외 자산 신고 절차', href: '/guide/inheritance/inheritance-overseas-asset-declaration' },
      { label: '해외 자산 세금 절차', href: '/guide/inheritance/inheritance-foreign-asset-tax-procedure' },
      { label: '한국 거주 외국인 상속 절차', href: '/guide/inheritance/inheritance-foreign-resident-korean-property' },
    ],
  },

  // ─── 4. defamation / livestream-realtime-defamation-victim ───
  {
    domain: 'defamation',
    slug: 'defamation-livestream-realtime-defamation-victim',
    keyword: '라이브방송 실시간 명예훼손',
    questionKeyword: '유튜브 라이브에서 누가 제 실명을 공개하고 허위사실을 방송하고 있어요. 영상이 사라지기 전에 뭘 해야 하나요?',
    ctaKeyword: '라이브방송 명예훼손 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '라이브방송 실시간 명예훼손 — 영상 보전 4단계 | 로앤가이드',
      description:
        '유튜브·트위치·아프리카TV 라이브에서 실시간 비방을 당했다면 영상 보전 + 신상정보보호센터 + 사이버명예훼손 고소 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"유튜브 라이브 방송에서 어떤 사람이 제 실명·직장·얼굴 사진을 공개하고 &lsquo;사기꾼이다, 횡령했다&rsquo;는 허위 내용을 1시간 넘게 방송했어요. 채팅창엔 이미 수백 명이 댓글을 달고 있고, 방송이 끝나면 다시보기로 남게 됩니다." 라이브방송 명예훼손은 <strong>실시간성·전파성</strong>이 결합되어 피해 확산 속도가 빠르고, 방송이 종료되거나 다시보기 비공개되기 전 영상 보전이 가장 중요합니다. 정통망법 제70조 사이버명예훼손은 형법 제307조보다 가중처벌(허위 7년 이하/3천만원)이 적용되는 영역이라, 화면 녹화·증거 확보부터 시작해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 라이브방송에서 어떤 발언이 사이버명예훼손인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정통망법 제70조 5가지 요건이 모두 충족되어야 합니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정 다수가 시청하는 라이브는 명백한 공연성. 시청자 수와 무관.</li>\n<li><strong>특정성</strong> — 실명·직장·사진·SNS 계정으로 특정 가능. 익명 표현이라도 주변인이 누구인지 알 수 있으면 특정.</li>\n<li><strong>사실 적시 또는 허위사실 적시</strong> — 사실(설령 진실이어도)이면 형법 제307조 제1항 / 정통망법 제70조 제1항. 허위면 가중(제2항).</li>\n<li><strong>비방 목적</strong> — 정통망법 제70조는 "사람을 비방할 목적" 추가 요건. 공익 목적·비판이면 면책 다툼.</li>\n<li><strong>정보통신망 이용</strong> — 유튜브·트위치·아프리카TV·인스타 라이브 모두 정통망법 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정통망법 제70조 제1항(사실) 3년 이하/2천만원, 제2항(허위) 7년 이하/5천만원. 형법보다 가중되는 영역입니다.</blockquote>',
      },
      {
        title: 'Q. 영상이 사라지기 전에 뭘 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지를 동시에 진행하면 증거 확보율이 올라갑니다.</strong></p>\n<ul>\n<li><strong>화면 녹화 + 음성 녹음</strong> — 휴대폰·PC 화면 녹화로 라이브 전체 보존. URL·시작·종료 시각 기록.</li>\n<li><strong>채팅창 캡처 + 시청자 수 캡처</strong> — 동조 댓글·시청자 수는 피해 확산 입증 자료.</li>\n<li><strong>플랫폼 신고 + 정보통신망법 임시조치</strong> — 유튜브·트위치 신고센터 + 방송통신심의위원회(kocsc.or.kr) 정보통신망법 제44조의2 임시조치 신청 → 30일 차단.</li>\n<li><strong>방송자 계정 정보 캡처</strong> — 채널명·구독자 수·계정 ID·아바타. 향후 신원 특정에 결정적.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">방송 형태·발언 내용·플랫폼별 트랙이 다릅니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 영상 보전·고소 4단계',
        content:
          '<p><strong style="color:#1e3a5f">방송통신심의위원회·경찰청 사이버수사대 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·채팅 즉시 보전 (방송 진행 중 ~ 종료 직후)</strong> — 화면 녹화 + URL + 채팅 캡처 + 시청자 수 캡처. 다시보기 비공개되면 확보 어려움.</li>\n<li><strong>2단계 — 플랫폼 임시조치 + 신고 (24시간 내)</strong> — 유튜브 신고 + 정보통신망법 제44조의2 임시조치 신청. 방통심의위·플랫폼 양쪽.</li>\n<li><strong>3단계 — 사이버명예훼손 고소 (피해 인지 후 가급적 빠르게)</strong> — 경찰청 사이버범죄 신고 ECRM(ecrm.police.go.kr) 또는 사이버수사대. 정통망법 위반 + 형법 명예훼손 병합.</li>\n<li><strong>4단계 — 민사 손해배상 + 가처분 (별도 트랙)</strong> — 정신적 손해 + 영업방해 손해. 다시보기·관련 게시물 삭제 가처분 동시 검토.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 라이브방송 명예훼손에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"라이브 끝나면 증거 없겠지" — 다시보기 자동 보존되지 않음</strong> — 방송자가 즉시 비공개·삭제할 수 있어 종료 직후가 아닌 진행 중 녹화가 핵심.</li>\n<li><strong>"공익 목적이라 처벌 안 된다"</strong> — 공익성이 인정되려면 진실성 + 공공의 이익 두 축. 단순 폭로·사적 감정 표출은 다툼 어려움.</li>\n<li><strong>스트리머 익명·해외 거주</strong> — 플랫폼 운영자가 IP·계정 정보를 가지고 있어 수사기관 영장으로 신원 특정 가능. 해외 운영자도 한국 시청자 대상이면 한국법 적용 가능.</li>\n<li><strong>채팅 동조자 책임 누락</strong> — 라이브 채팅에 허위·비방 댓글 작성한 시청자도 별개 사이버명예훼손. 채팅 캡처 보존이 출발점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 ECRM(ecrm.police.go.kr) / 방송통신심의위원회 1377 / 디지털성범죄피해자지원센터 02-735-8994 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 라이브방송·다회차 영상 게시 정보통신망법 위반(명예훼손) 유죄',
        summary:
          '부산지방법원 2025고단949(부산지법, 2025.08.20 선고) 사건에서 법원은 후원계좌가 표기된 채널 등 여러 동영상 플랫폼 채널에 사고 관련 허위 동영상을 반복 게시한 피고인들에 대해, 비방 목적으로 정보통신망을 통해 공공연하게 거짓의 사실을 드러내어 피해자들의 명예를 훼손한 사실을 인정해 정보통신망법 위반(명예훼손) 유죄를 선고했습니다. 라이브방송·다회차 영상 게시도 채팅·후원·다시보기 형태로 비방 목적이 입증되면 사이버명예훼손이 성립할 수 있다는 시사점이 있습니다.',
        takeaway: '라이브방송 명예훼손은 영상 자체뿐 아니라 후원 계좌·구독자 수·채팅 내용까지 함께 보존해두면 비방 목적 입증에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '시청자가 적었는데도 명예훼손이 성립하나요?',
        answer:
          '<strong>시청자 수와 무관하게 공연성 인정될 수 있습니다.</strong> 라이브는 잠재적으로 불특정 다수에게 전파될 수 있는 매체라 1명이 보고 있어도 공연성 충족 가능. 다만 양형에는 시청자 수가 영향.',
      },
      {
        question: '방송자가 "썰 푸는 거다, 픽션이다"라고 하면 면책되나요?',
        answer:
          '<strong>형식 면책 표현만으로는 면책되지 않습니다.</strong> 발언 내용이 특정 가능한 실제 인물에 대한 사실·허위 적시면 "썰" 표현은 다툼 어려움. 다만 명백히 가공·풍자·창작물임이 분명하면 다른 영역.',
      },
      {
        question: '다시보기가 이미 사라졌으면 증거가 없는 건가요?',
        answer:
          '<strong>플랫폼 운영자에게 영장으로 백업 자료 확보 가능합니다.</strong> 유튜브·트위치 등은 일정 기간 서버에 백업 보관. 경찰 수사 단계에서 영장 통해 확보 가능. 다만 시청자 녹화본이 있으면 더 빠른 확보.',
      },
      {
        question: '플랫폼 운영자에게도 책임이 있나요?',
        answer:
          '<strong>임시조치 통보 후에도 방치하면 정보통신망법 제44조의2 위반.</strong> 다만 플랫폼은 일반적으로 임시조치 통보를 받으면 차단해서 책임 다툼은 적음. 방통심의위 신고가 출발점이에요.',
      },
      {
        question: '합의금은 보통 어느 수준인가요?',
        answer:
          '<strong>사례에 따라 차이가 크지만 수백만원에서 수천만원 수준이 검토되는 사례가 많습니다.</strong> 시청자 수·전파 정도·허위 여부·반복성·후원 수익에 따라 다릅니다. 단정 금지.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '라이브방송 명예훼손 형사 절차', href: '/guide/defamation/defamation-livestream-broadcast-criminal' },
      { label: '익명 게시자 신원 추적 절차', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '온라인 게시물 삭제·금지가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '온라인 게시물 삭제 요청 절차', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
    ],
  },

  // ─── 5. defamation / youtube-comment-doxxing-accused ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-doxxing-accused',
    keyword: '유튜브 댓글 신상공개 고소',
    questionKeyword: '유튜브 댓글에 다른 사람 직장과 실명을 적었다가 정통망법 위반으로 고소당했어요. 진실이면 무죄인가요?',
    ctaKeyword: '댓글 신상공개 방어 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '유튜브 댓글 신상공개로 고소당했을 때 — 방어 4단계 | 로앤가이드',
      description:
        '유튜브·SNS 댓글로 타인 직장·실명·사진을 적어 정통망법 위반 고소를 받았다면 사실 vs 허위·공익성·합의 4단계 방어 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"유튜브 영상 댓글에 그 사람 실명·다니는 회사·SNS 사진을 적었어요. 사실이라 문제없을 줄 알았는데 정통망법 위반으로 고소장이 날아왔습니다." 사이버 명예훼손은 진실을 적었더라도 정통망법 제70조 제1항으로 처벌이 가능한 영역입니다(허위면 제2항으로 가중). 다만 형법 제310조의 위법성조각사유(진실 + 공공의 이익)가 인정되면 처벌이 면제될 수 있어요. 혐의를 받고 있다면 발언 시점·맥락·공익성·반성 자세 4가지 축으로 변론 자료를 정리해두는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 진실인데도 처벌되는 이유는 뭔가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정통망법 제70조 제1항은 사실을 적시한 경우에도 처벌하는 조항이기 때문입니다.</strong></p>\n<ul>\n<li><strong>제1항(사실 적시)</strong> — 비방 목적으로 정보통신망을 통해 공공연하게 사실을 드러내어 명예 훼손 시 3년 이하 / 2천만원 이하.</li>\n<li><strong>제2항(허위 적시)</strong> — 비방 목적 + 거짓 사실 시 7년 이하 / 5천만원 이하.</li>\n<li><strong>형법 제310조 위법성조각</strong> — 진실 + 오로지 공공의 이익에 관한 때 처벌 면제. 공익 목적이 주된 동기여야 함.</li>\n<li><strong>비방 목적 부재</strong> — 정통망법 제70조 핵심 요건. 단순 정보 공유·비판 목적이고 비방 의도 없으면 무죄 다툼 가능.</li>\n<li><strong>공인 vs 사인</strong> — 공인(공직자·연예인)은 공익성 폭넓게 인정. 사인은 좁게 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "진실이니까 무죄"는 아니고 "진실 + 공익성 + 비방 목적 부재"가 입증돼야 다툼이 가능한 영역입니다.</blockquote>',
      },
      {
        title: 'Q. 어떻게 방어를 정리할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 축으로 방어 자료를 정리해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>진실성 입증</strong> — 적시한 사실이 진실임을 입증할 객관적 자료(공식 자료·뉴스·판결문 등).</li>\n<li><strong>공익성 입증</strong> — 댓글이 공공의 이익에 관한 것임을 보일 수 있는 맥락. 사기 피해 정보 공유·소비자 경고 등.</li>\n<li><strong>비방 목적 부재</strong> — 댓글 톤·횟수·맥락. 단발성 정보 공유는 비방 목적 다툼이 가능, 반복·공격적 표현은 어려움.</li>\n<li><strong>합의·반성</strong> — 댓글 즉시 삭제 + 사과·합의가 양형에 결정적. 초범·반성 인정 시 약식·기소유예 검토 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진실 vs 허위·공익성·반성 자료 갈래가 다릅니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 4단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글 즉시 삭제 + 캡처 보관 (고소 인지 직후)</strong> — 댓글을 즉시 삭제해 추가 피해 확산 차단. 동시에 본인이 작성한 시점·내용 캡처 보관(향후 변론 자료).</li>\n<li><strong>2단계 — 진실성·공익성 자료 정리 (조사 전)</strong> — 적시 사실의 진실성 입증 자료 + 공공 이익 관련 맥락 자료. 시간 순으로 정리.</li>\n<li><strong>3단계 — 합의 시도 (조사 전~기소 전)</strong> — 피해자에게 정중한 사과·합의금 협상. 합의 성공 시 처벌불원 의사로 약식·기소유예 가능성 상승.</li>\n<li><strong>4단계 — 변호인 선임 + 의견서 제출 (조사·검찰 단계)</strong> — 형법 제310조 적용 주장 + 비방 목적 부재 의견서. 초범·반성 자료 첨부.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">혐의를 받고 있다면 아래 4가지가 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"진실이니까 무죄겠지"</strong> — 정통망법 제70조 제1항은 진실 적시도 처벌. 형법 제310조 적용 주장을 적극적으로 해야 다툼 가능.</li>\n<li><strong>댓글 추가 작성·반박</strong> — 고소 후 추가 비방 댓글은 양형 가중 + 별도 사건 가능. 즉시 침묵 + 변호인 상담이 출발점.</li>\n<li><strong>"공익 폭로다"라고만 주장</strong> — 공익성은 객관 자료로 뒷받침해야 함. 단순 폭로·사적 감정·반복 표현은 비방 목적 인정될 수 있음.</li>\n<li><strong>합의 거부 또는 늦은 합의</strong> — 합의는 양형 결정적 요소. 초기 정중한 사과 + 합의금 협상 + 처벌불원서 확보가 약식·기소유예의 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 경찰청 사이버수사대 / 검찰청 형사조정 / 한국가정법률상담소 / 형사 변호사 상담을 검토해보세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 위법성조각 요건과 비방 목적',
        summary:
          '대법원 2024도14555(대법원, 2025.05.29 선고) 사건에서 법원은 형법 제310조의 ‘진실한 사실’과 ‘오로지 공공의 이익에 관한 때’의 의미와, 행위자의 주요 동기·목적이 공공의 이익이고 거기에 부수적으로 사익적 동기가 일부 내포되어 있어도 제310조가 적용될 수 있다고 판시했습니다. 또한 일부 모욕적 표현이 무례·예의 벗어난 정도에 그칠 뿐 사회적 평가를 저하시키지 않는 경우 모욕죄가 성립하지 않을 수 있다고 보았습니다. 유튜브 댓글 신상공개 사건에서도 진실성·공익성·동기 비중·표현 정도가 핵심 다툼 영역이라는 시사점이 있습니다.',
        takeaway: '댓글 신상공개로 혐의를 받고 있다면 진실성 자료·공익성 맥락·반성 자세 3가지를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '댓글을 익명으로 썼는데 어떻게 본인인 줄 알았나요?',
        answer:
          '<strong>플랫폼 운영자가 영장에 의해 IP·계정 정보 제공할 수 있어요.</strong> 유튜브·인스타·네이버는 수사기관 영장 협조 의무. 익명 닉네임으로 작성해도 IP·이메일·휴대폰 인증 정보로 신원 특정.',
      },
      {
        question: '댓글을 즉시 지우면 처벌 안 받나요?',
        answer:
          '<strong>이미 게시된 시점에 범죄가 성립해 사후 삭제만으로 면책되지 않지만 양형 감경 사유는 됩니다.</strong> 즉시 삭제 + 사과 + 합의가 약식·기소유예 가능성을 높여요.',
      },
      {
        question: '"제 의견을 표현한 것뿐"이라고 주장하면 통하나요?',
        answer:
          '<strong>의견 표명이지 사실 적시가 아니라는 다툼은 가능하지만 객관적 표현이 사실에 가까우면 어렵습니다.</strong> "사기꾼이다"는 사실 적시 가능성, "내 생각엔 별로다"는 의견 표명 가능성. 표현 형식·맥락이 결정적.',
      },
      {
        question: '합의금은 어느 정도가 적정한가요?',
        answer:
          '<strong>사례에 따라 차이가 크지만 수십만~수백만원 수준이 검토되는 사례가 많습니다.</strong> 댓글 횟수·전파성·피해 정도에 따라 다릅니다. 단정 금지.',
      },
      {
        question: '초범인데 어느 정도 처벌이 예상되나요?',
        answer:
          '<strong>초범 + 합의 + 반성이 모두 갖춰지면 약식 벌금·기소유예가 검토되는 사례가 많습니다.</strong> 다만 허위 적시·반복성·피해 정도가 크면 정식 재판으로 갈 수도 있어요. 변호인 상담을 검토해보세요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 댓글 정보통신망법 적용', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '가해자 진실 항변 변론', href: '/guide/defamation/defamation-accused-truth-defense-argument' },
      { label: '진실인데도 처벌되는 이유', href: '/guide/defamation/defamation-truth-still-guilty' },
      { label: '가해자 방어 전략', href: '/guide/defamation/defamation-accused-defense-strategy' },
      { label: '가해자 어디부터 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
    ],
  },

  // ─── 6. defamation / deepfake-synthesis-defamation ───
  {
    domain: 'defamation',
    slug: 'defamation-deepfake-synthesis-defamation',
    keyword: '딥페이크 명예훼손',
    questionKeyword: '제 얼굴이 합성된 영상이 SNS에 퍼지고 있어요. 명예훼손과 성착취물 양쪽으로 진행 가능한가요?',
    ctaKeyword: '딥페이크 합성 영상 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '딥페이크 명예훼손 — 삭제·고소 5단계 절차 | 로앤가이드',
      description:
        '얼굴이 합성된 딥페이크 영상이 SNS에 퍼지고 있다면 영상 삭제 + 정통망법·성폭력처벌법 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"제 얼굴이 합성된 영상이 텔레그램·트위터에 퍼지고 있어요. 단순 명예훼손인지, 성착취물인지, 어디부터 신고해야 할지 막막합니다." 딥페이크는 합성 영상의 성격(허위사실 적시 / 성적 합성 / 음란물 결합)에 따라 적용 법이 갈립니다. 정통망법 제70조 명예훼손, 성폭력처벌법 제14조의2(허위 영상물 편집·반포), 디지털성범죄피해자지원센터 긴급 삭제까지 트랙이 다양해요. 영상 보전 + 플랫폼 신고 + 형사 고소를 동시에 검토하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: '딥페이크 사건 vs 일반 명예훼손 차이 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지가 딥페이크 사건의 특수성입니다.</strong></p>\n<ul>\n<li><strong>허위 영상물 편집·반포 신설 처벌</strong> — 성폭력처벌법 제14조의2: 사람의 얼굴·신체·음성을 성적 욕망·수치심을 유발할 수 있는 형태로 편집·합성·가공한 자 5년 이하 / 5천만원 이하. 영리 목적 7년 이하.</li>\n<li><strong>일반 명예훼손과 결합</strong> — 성적 합성이 아닌 단순 허위 사실 합성(예: 가짜 인터뷰 영상)은 정통망법 제70조 제2항 허위 명예훼손.</li>\n<li><strong>플랫폼 즉시 차단 의무</strong> — 디지털성범죄피해자지원센터(d4u.stop.or.kr) 또는 방통심의위 신고 시 24시간 내 차단·삭제 협조.</li>\n<li><strong>2차 유포자 처벌</strong> — 영상 다시 공유한 사람도 별개 처벌 대상. 단순 시청은 처벌 안 되지만 다운로드·재공유는 처벌.</li>\n<li><strong>해외 플랫폼 대응</strong> — 텔레그램·트위터 등 해외 플랫폼도 한국 수사기관 협조 채널 점차 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 딥페이크는 명예훼손 단독보다 성폭력처벌법·정통망법·아동청소년법(미성년자)이 결합되는 영역으로 관련 처벌 강도가 높습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 삭제·고소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">디지털성범죄피해자지원센터·경찰청·방통심의위 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상 보전 + 유포 경로 캡처 (24시간 내)</strong> — URL·계정 ID·게시 시각·확산 정황 캡처. 본인 영상은 다운로드 X(소지만으로 추가 위험), 캡처·URL만 확보.</li>\n<li><strong>2단계 — 디지털성범죄피해자지원센터 긴급 삭제 신청 (24시간 내)</strong> — d4u.stop.or.kr / 02-735-8994. 24시간 365일 운영. 플랫폼 협조로 24시간 내 차단.</li>\n<li><strong>3단계 — 형사 고소 (피해 인지 후 빠르게)</strong> — 경찰 ECRM(ecrm.police.go.kr) 사이버범죄 신고. 성적 합성이면 성폭력처벌법 제14조의2 + 정통망법 위반(명예훼손) 병합. 미성년자 대상이면 아동청소년법 추가.</li>\n<li><strong>4단계 — 정보통신망법 임시조치 + 방통심의위 신고 (병행)</strong> — 플랫폼에 임시조치 신청 + 방송통신심의위 1377 신고. 30일 차단.</li>\n<li><strong>5단계 — 민사 손해배상 + 가처분 (별도 트랙)</strong> — 정신적 손해 + 영상 복제·재유포 금지가처분. 가해자 신원 특정 후 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">합성 형태·플랫폼·미성년자 여부에 따라 트랙이 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">긴급 삭제·고소·민사에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>유포 URL·계정 정보 목록</strong> — 텔레그램·트위터·SNS 채널·게시 시각·계정 ID 일괄 정리.</li>\n<li><strong>본인 신원 확인 자료</strong> — 신분증·본인 사진(원본). 합성 영상과 대조 입증.</li>\n<li><strong>피해 확산 캡처</strong> — 조회 수·공유 수·댓글 캡처. 양형·손해 산정 자료.</li>\n<li><strong>의료 진단서(필요시)</strong> — 정신과 진료·우울·불안 진단서. 정신적 손해 입증.</li>\n<li><strong>플랫폼 신고 회신</strong> — 신고 후 플랫폼 답변·삭제 시점 기록.</li>\n<li><strong>가해자 추정 정황</strong> — 짚히는 인물·맥락·이전 갈등 메시지 등.</li>\n<li><strong>업무·일상 영향 기록</strong> — 직장·인간관계·수면·식사 영향. 정신적 손해 산정 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 본인이 합성 영상을 다운로드해 가족·친구에게 보내는 행위도 추가 유포로 평가될 수 있습니다. 캡처·URL만 확보하고 영상 파일은 수사기관 제출용 외엔 보관하지 마세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 딥페이크 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"단순 합성이라 처벌 안 된다"</strong> — 성폭력처벌법 제14조의2는 성적 욕망·수치심 유발 형태 편집·반포를 처벌. 단순 합성도 명예훼손 + 정통망법 위반.</li>\n<li><strong>플랫폼 신고만으로 끝내기</strong> — 플랫폼 차단은 임시 조치일 뿐. 가해자 추적·재유포 방지는 형사 고소가 출발점.</li>\n<li><strong>피해자 본인 영상 보관·재공유</strong> — 가족·친구에게 "이거 봐" 식으로 공유하면 본인도 유포 위험. 절대 재공유 금지.</li>\n<li><strong>"한국법으론 해외 플랫폼 잡을 수 없다"</strong> — 해외 플랫폼도 한국 거주자 피해는 디지털성범죄피해자지원센터 협조 채널·국제수사공조로 점차 대응 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 디지털성범죄피해자지원센터 02-735-8994(24시간) / 경찰청 ECRM(ecrm.police.go.kr) / 방송통신심의위원회 1377 / 여성긴급전화 1366 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 허위사실 유포 명예훼손 + 비방 목적 인정',
        summary:
          '부산지방법원 2025고단949(부산지법, 2025.08.20 선고) 사건에서 법원은 후원계좌가 표기된 채널 등 여러 플랫폼에 컴퓨터그래픽으로 조작된 영상과 함께 허위 사실을 게시한 피고인들에 대해, 비방 목적으로 정보통신망을 통해 공공연하게 거짓 사실을 드러내어 피해자들의 명예를 훼손한 사실을 인정해 정보통신망법 위반(명예훼손)·전기통신기본법 위반 유죄를 선고했습니다. 딥페이크 합성 영상도 명예훼손이 결합되면 비방 목적·후원 수익 구조가 양형에 영향을 줄 수 있다는 시사점이 있습니다.',
        takeaway: '딥페이크 명예훼손은 영상 자체뿐 아니라 후원 수익·반복성·플랫폼 다중 게시 정황을 함께 정리해두면 비방 목적 입증에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '성적 요소 없이 단순 얼굴만 합성된 영상도 처벌되나요?',
        answer:
          '<strong>성폭력처벌법 제14조의2가 아닌 정통망법 제70조 명예훼손이 적용될 수 있습니다.</strong> 영상 내용이 사실·허위에 따라 제1항(사실)·제2항(허위) 적용. 비방 목적·공연성이 핵심 요건.',
      },
      {
        question: '가해자가 외국에 있으면 잡을 수 없나요?',
        answer:
          '<strong>국제수사공조로 추적 가능합니다.</strong> 해외 플랫폼도 한국 수사기관 협조 채널이 있고, 인터폴 적색수배·범죄인 인도 트랙도 검토 가능. 시간이 걸리지만 추적 가능성은 남아 있어요.',
      },
      {
        question: '미성년자 얼굴이 합성된 경우는요?',
        answer:
          '<strong>아동·청소년의 성보호에 관한 법률이 추가 적용되어 처벌 강도가 더 높아집니다.</strong> 디지털성범죄피해자지원센터 + 경찰청 사이버수사대 + 미성년자 보호 트랙 동시 진행. 즉시 신고가 출발점.',
      },
      {
        question: '본인이 영상을 가지고 있으면 안 되나요?',
        answer:
          '<strong>본인 영상이라도 소지·재공유는 추가 처벌 위험이 있습니다.</strong> 캡처·URL만 보관하고 영상 파일은 수사기관 제출용 외에는 보관 금지. 가족·친구에게 "이거 봐" 식 공유도 위험.</p>',
      },
      {
        question: '손해배상은 얼마 정도가 검토되나요?',
        answer:
          '<strong>사례에 따라 차이가 크지만 합성 정도·전파성·정신적 피해에 따라 수백만원~수천만원 수준이 검토되는 사례가 있습니다.</strong> 의료 진단서·업무 영향 자료가 산정 자료. 단정 금지.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '딥페이크 피해자 삭제 절차', href: '/guide/defamation/defamation-deepfake-victim-takedown-procedure' },
      { label: '익명 게시자 신원 추적', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '온라인 게시물 삭제·금지가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '온라인 게시물 삭제 요청 절차', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
    ],
  },
];
