import { SpokePage } from '../spoke-pages';

// batch53 inheritance 3개 + defamation 3개 (batch52와 다른 분기축):
//   inheritance:
//     1. 사인증여 청구 절차 (절차형, victim — 약속받은 재산을 받지 못한 수증인)
//     2. 기여분 다툼 — 장기 부양 자녀 vs 다른 상속인 (Q&A형, neutral)
//     3. 빚만 있는 상속 포기 절차 (절차형, victim)
//   defamation:
//     1. 직장 동료 험담 유포 피해자 대응 (Q&A형, victim)
//     2. 익명 게시판 글 작성자 신원 추적 (절차형, victim — 사실확인의 소·통신자료요청)
//     3. 사적 대화 캡처 유포로 고소당한 가해자 방어 (Q&A형, accused)
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 피상속인이 사망 전 "내가 죽으면 이 재산을 너에게 준다"고 약속(사인증여)했지만 다른 상속인들이 인정하지 않는 수증인이, 사인증여계약서·증인·이행청구의 소 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 부모를 10년 넘게 동거 부양·간병한 자녀가 다른 형제와 상속재산분할에서 기여분을 다투는 상황의 당사자가, 가정법원 기여분결정심판 + 분할심판 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 피상속인이 적극재산은 거의 없고 채무만 큰 상황에서 단기간(3개월) 안에 상속포기를 선택하려는 상속인이, 후순위 상속인·미성년자녀 포함 신고 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 직장 동료가 사내 메신저·단체 채팅방·외부 모임에서 자신에 대한 허위 또는 사실 험담을 유포한 피해자가, 증거 보전 + 사내 신고 + 정통망법 제70조 고소 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 익명 게시판(블라인드·잡플래닛·네이트판 등)에 자신을 비방하는 글이 올라온 피해자가, 임시조치 + 통신자료요청 + 사실조회 + 발신자정보제공명령 트랙을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 사적인 카톡·DM 대화 캡처를 단톡방·SNS에 유포해 정통망법 위반·통신비밀보호법 위반으로 고소당한 가해자가, 공익성·진실성 항변과 합의 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch53InheritanceDefamation: SpokePage[] = [
  // ─── 1. inheritance / mortis-causa-gift-claim ───
  {
    domain: 'inheritance',
    slug: 'inheritance-mortis-causa-gift-claim',
    keyword: '사인증여 청구 절차',
    questionKeyword: '아버지가 생전에 "내가 죽으면 이 집은 너 가져라"고 하셨는데, 다른 형제들이 인정 안 해줘요. 어떻게 청구하나요?',
    ctaKeyword: '사인증여 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사인증여 청구 — 약속받은 재산 5단계 절차 | 로앤가이드',
      description:
        '피상속인이 생전에 "내가 죽으면 이 재산을 주겠다"고 약속한 사인증여를 받지 못했다면 계약 입증 + 이행청구의 소 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 살아 계실 때 &lsquo;내가 죽으면 이 시골집은 너 가져라&rsquo;고 여러 번 말씀하셨고, 작은 메모도 남기셨어요. 그런데 막상 돌아가시고 나니 형제들이 &lsquo;그런 약속 들은 적 없다&rsquo;며 법정상속분대로 나누자고 합니다." 이런 약속이 <strong>사인증여(死因贈與)</strong>입니다. 민법 제562조에 따라 증여자의 사망을 효력 발생 조건으로 하는 증여계약으로, 유언과 달리 형식 요건은 자유롭지만 <strong>증여 합의의 존재</strong>를 입증해야 해요. 사인증여계약서·녹음·메시지·증인 진술을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '사인증여 vs 유언 vs 생전증여 — 3가지 차이',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지가 사인증여 특유의 포인트입니다.</strong></p>\n<ul>\n<li><strong>사인증여(민법 제562조)</strong> — 생전에 합의(증여자·수증자 양쪽 의사 합치) + 사망을 효력 발생 조건. 형식 자유(구두·서면·녹음). 입증 책임은 수증자.</li>\n<li><strong>유언(민법 제1060조 이하)</strong> — 단독행위(유언자 일방 의사) + 형식 엄격(자필·공정·녹음·비밀·구수증서 5가지). 형식 흠결 시 무효.</li>\n<li><strong>생전증여(민법 제554조)</strong> — 생전에 효력 발생 + 인도·등기 완료. 사망 후 이행 다툼이 아님. 다만 특별수익으로 상속재산 분할에 반영(민법 제1008조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사인증여는 형식이 자유로워 입증만 되면 효력이 인정될 수 있는 영역이지만, 입증 자료가 부족하면 다툼이 길어질 수 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사인증여 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사인증여 입증 자료 수집 (사망 직후)</strong> — 사인증여계약서·녹음파일·문자·이메일·메모·증인 진술서 확보. 증인은 가족 외 제3자가 객관성 강함.</li>\n<li><strong>2단계 — 다른 상속인에게 내용증명 발송</strong> — "사인증여 약정 존재, 해당 재산 인도·등기이전 협조 요청"을 명시. 협의 가능성 타진.</li>\n<li><strong>3단계 — 부동산 처분금지 가처분 신청 (필요시)</strong> — 다른 상속인이 사인증여 대상 부동산을 임의 처분하려 한다면 즉시 처분금지 가처분으로 동결.</li>\n<li><strong>4단계 — 사인증여 이행청구의 소 (지방법원 또는 가정법원, 6~18개월)</strong> — "사인증여 합의 존재 확인 + 등기이전 또는 인도 청구". 입증 책임은 원고(수증자). 증인 신문·서증·녹음 검증.</li>\n<li><strong>5단계 — 등기이전·인도 집행</strong> — 승소 판결 확정 후 부동산 등기이전·동산 인도 집행. 다른 상속인 협조 거부 시 강제집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사인증여 입증 자료·유류분 충돌·기여분 결합 트랙이 다양합니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사인증여 청구 소송에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>사인증여 합의 자료</strong> — 계약서·녹음·문자·이메일·메모·일기장. 일자·당사자·재산 특정이 명확할수록 강력.</li>\n<li><strong>증인 진술서</strong> — 사인증여 약속을 직접 들은 가족 외 제3자(이웃·지인·종교 신도). 인적사항·연락처 포함.</li>\n<li><strong>피상속인 사망진단서·가족관계증명서</strong> — 상속관계·사망 사실 입증.</li>\n<li><strong>부동산 등기부등본</strong> — 사인증여 대상 부동산 현재 명의 확인.</li>\n<li><strong>다른 상속인 인적사항</strong> — 피고로 특정. 법정상속분 비율 확인.</li>\n<li><strong>유류분 검토 자료</strong> — 사인증여가 다른 상속인의 유류분을 침해하면 별도 유류분반환청구 가능성.</li>\n<li><strong>특별수익 비교 자료</strong> — 다른 상속인이 받은 생전증여·유증과 형평 비교.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "구두 약속이라 인정 안 된다"고 미리 포기하지 마세요. 녹음·메모·증인이 일관되면 사인증여 합의가 인정되는 사례가 보고되고 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 사인증여 청구 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"유언이 없어서 무효다"</strong> — 사인증여는 유언이 아니라 계약. 유언 형식 요건(자필·날인 등)을 갖출 필요 없어요. 합의 존재만 입증하면 됩니다.</li>\n<li><strong>유류분 침해 가능성 무시</strong> — 사인증여가 다른 상속인의 유류분을 침해하면 유류분반환청구 대상. 자녀 1.5/배우자 1.5/직계비속 1/2 침해분 반환.</li>\n<li><strong>입증 자료 일관성 부족</strong> — 녹음과 문자 내용이 다르거나, 증인 진술이 엇갈리면 사인증여 합의 존재가 부정될 수 있음.</li>\n<li><strong>처분 가처분 늦음</strong> — 다른 상속인이 사인증여 대상 부동산을 매각하면 회수 어려움. 청구 의사 명확하면 즉시 가처분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사신청과 / 한국가정법률상담소 / 등기소(처분금지 가처분).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사인증여와 상속재산분할 형평',
        summary:
          '대법원 2022므225897(대법원, 2025.10.16 선고) 사건에서 법원은 상속재산 분할 협의·심판에서 피상속인의 생전 증여·사인증여·유증 등 특별수익을 종합적으로 형평에 맞게 반영해야 한다고 판시했습니다. 사인증여를 청구하는 수증자도 다른 상속인의 유류분과 충돌하면 일부 반환 의무가 발생할 수 있어, 사인증여 입증 자료뿐 아니라 다른 상속인이 받은 생전증여·유증 자료도 함께 정리해두면 도움이 됩니다.',
        takeaway: '사인증여 청구는 합의 존재 입증 + 유류분 충돌 검토 + 다른 상속인 특별수익 비교가 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '구두 약속만 있고 서면이 없어도 사인증여로 인정받을 수 있나요?',
        answer:
          '<strong>사인증여는 형식 자유라 구두 약속도 가능하지만 입증 책임이 무거워집니다.</strong> 녹음·증인·메모·문자 등 보조 자료가 일관되게 같은 내용을 가리키면 인정될 수 있는 영역이에요. 가족 외 제3자 증인이 있으면 더 강력합니다.',
      },
      {
        question: '사인증여를 받았는데 다른 상속인이 유류분 침해라며 반환 청구하면요?',
        answer:
          '<strong>유류분 침해분은 반환 의무가 생길 수 있습니다.</strong> 자녀 법정상속분의 1/2이 유류분. 사인증여로 받은 재산이 다른 상속인의 유류분을 침해하면 그 한도에서 반환. 다만 사인증여 자체는 유효 유지.',
      },
      {
        question: '사인증여 이행청구는 언제까지 해야 하나요?',
        answer:
          '<strong>채권 일반 시효 10년 또는 상속회복청구 시효(침해를 안 날부터 3년·상속개시일부터 10년)가 적용될 수 있습니다.</strong> 다툼 사안에 따라 시효 기산점이 달라요. 사망 직후 청구가 안전합니다.',
      },
      {
        question: '사인증여 대상 재산을 다른 상속인이 이미 매각했어요. 어떻게 해야 하나요?',
        answer:
          '<strong>매각대금 상당의 가액배상 청구가 가능할 수 있습니다.</strong> 사인증여 합의 입증되면 매수인에게 등기 회복 청구 또는 매각자 상속인에게 가액배상. 다만 선의의 매수인 보호 문제로 회수 어려운 경우도 있어요.',
      },
      {
        question: '사인증여로 받은 재산도 상속세 대상인가요?',
        answer:
          '<strong>상속세 및 증여세법상 상속세 과세 대상에 포함됩니다.</strong> 사인증여는 사망을 원인으로 효력 발생하므로 상속재산에 합산해 상속세 신고. 사망일 속한 달 말일부터 6개월 내 신고 필요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유언 효력 다툼 절차', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '상속재산분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '특별수익과 상속분 조정', href: '/guide/inheritance/inheritance-special-benefit-adjustment' },
      { label: '단순승인 후 숨은 채무 회수', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
    ],
  },

  // ─── 2. inheritance / contribution-portion-dispute ───
  {
    domain: 'inheritance',
    slug: 'inheritance-contribution-portion-dispute',
    keyword: '기여분 다툼',
    questionKeyword: '제가 부모님 12년 동거 부양했는데 다른 형제들은 인정 안 해주고 똑같이 나누자고 해요. 기여분은 어떻게 받나요?',
    ctaKeyword: '기여분 다툼 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '기여분 다툼 — 장기 부양 자녀 4단계 청구 | 로앤가이드',
      description:
        '부모를 장기 부양·간병한 상속인이 다른 형제와 기여분을 다투고 있다면 가정법원 기여분결정심판 + 분할심판 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"15년간 부모님과 같이 살면서 식사·약·병원 동행을 거의 혼자 챙겼어요. 어머니 치매 5년 동안은 새벽까지 간호했는데, 막상 아버지가 돌아가시고 나니 다른 형제들은 &lsquo;자식이면 다 하는 거지&rsquo;라며 똑같이 나누자고 합니다." 민법 제1008조의2 기여분 제도는 <strong>피상속인의 재산 유지·증가에 특별히 기여</strong>한 상속인에게 법정상속분 외에 추가 몫을 인정하는 제도입니다. 통상의 효도·부양은 기여분이 아니고, 사회 통념을 넘는 특별한 기여(장기 동거 간병·재산 형성 직접 기여 등)가 핵심이에요. 가정법원 심판 절차로 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 경우에 기여분이 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법 제1008조의2상 4가지 유형이 자주 인정됩니다.</strong></p>\n<ul>\n<li><strong>장기 동거 부양·간병</strong> — 10년 이상 동거하며 식사·간병·생활비 지원. 통상의 효도를 넘는 정도.</li>\n<li><strong>재산 형성 직접 기여</strong> — 피상속인 사업 무급 노동, 자금 출연으로 부동산 취득 기여.</li>\n<li><strong>채무 변제 기여</strong> — 피상속인 빚을 자기 자금으로 갚아 재산 보존.</li>\n<li><strong>재산 관리·증식 기여</strong> — 피상속인이 의식 잃은 후 부동산 임대·관리로 수익 창출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기여분은 통상의 효도·부양이 아니라 사회 통념상 특별한 기여여야 인정되는 영역입니다. 객관적 기여 자료가 있어야 다툼에서 우위가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 기여분은 어떻게 결정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의 → 협의 불성립 시 가정법원 기여분결정심판으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계 — 상속인 협의</strong> — 모든 상속인이 모여 기여분 비율 합의(예: 30%). 합의되면 분할 협의서에 기여분 반영.</li>\n<li><strong>2단계 — 협의 불성립 시 가정법원 신청</strong> — 상속재산분할심판과 동시 진행. 별도 신청 가능하지만 통상 함께.</li>\n<li><strong>3단계 — 기여분 비율 결정</strong> — 법원이 기여 정도·기간·기여 외 사정·다른 상속인 형평을 종합 고려해 비율 결정. 통상 10~30% 범위.</li>\n<li><strong>4단계 — 분할 적용</strong> — 상속재산에서 기여분만큼 우선 공제 → 나머지를 법정상속분대로 분할 → 기여자는 본인 법정상속분 + 기여분 합계.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">기여분 인정 범위·증거·비율 다툼은 케이스마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">기여분결정심판에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>동거 입증 자료</strong> — 주민등록등본(과거 변동 이력), 가족관계증명서, 동거 기간 명시.</li>\n<li><strong>부양·간병 자료</strong> — 병원 진료기록, 약 처방전, 간병일지, 요양보호사 등록증, 진료 동행 기록.</li>\n<li><strong>금전 지원 자료</strong> — 생활비·약값·병원비 송금내역, 카드 결제 내역, 영수증.</li>\n<li><strong>재산 형성 기여 자료</strong> — 피상속인 사업 무급 노동 입증(직원 진술·세무자료), 부동산 자금 출연 입증.</li>\n<li><strong>다른 상속인 비교 자료</strong> — 다른 형제는 부양 참여 안 했음을 보여주는 메시지·증인 진술.</li>\n<li><strong>증인 진술서</strong> — 이웃·친척·요양보호사·종교 신도. 부양 사실 직접 목격자가 강력.</li>\n<li><strong>피상속인 의료기록</strong> — 치매·암·뇌졸중 진단서. 간병 필요성 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "기억나니까 됐다"고 자료 없이 신청하면 다른 상속인 반박에 막힐 수 있어요. 객관 자료(영수증·진료기록·송금내역)가 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 기여분 다툼에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"같이 살았으니 당연히 기여분"</strong> — 동거만으로는 부족. 통상의 효도를 넘는 특별한 기여(장기 간병·재산 직접 기여)가 핵심.</li>\n<li><strong>피상속인이 받은 도움 입증 부족</strong> — 부양했다는 진술만으로는 약함. 영수증·송금·의료기록·증인 등 객관 자료 필요.</li>\n<li><strong>특별수익과 충돌</strong> — 본인이 생전증여로 미리 받은 재산이 있으면 특별수익으로 분할에서 차감. 기여분과 별개 항목이지만 형평 종합 고려.</li>\n<li><strong>유류분과 형평 다툼</strong> — 기여분 인정으로 다른 상속인의 유류분이 침해되면 유류분반환 다툼 추가. 비율 다툼이 길어질 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사신청과(기여분결정심판) / 한국가정법률상담소 / 보건소 노인장기요양보험.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산분할에서 특별수익·기여분 종합 형평',
        summary:
          '대법원 2025스34851(대법원, 2025.12.11 선고) 사건에서 법원은 상속재산분할 심판에서 각 상속인이 받은 특별수익·기여분·기여 외 사정을 종합적으로 형평에 맞게 반영해야 한다고 판시했습니다. 장기 부양 자녀가 기여분을 청구할 때도 본인이 받은 생전증여(특별수익)와 다른 상속인의 형평을 함께 고려해 비율이 결정되므로, 부양 자료뿐 아니라 본인이 받은 도움 자료도 솔직히 정리해두면 도움이 됩니다.',
        takeaway: '기여분 청구는 부양·간병 자료 + 본인 특별수익 + 다른 상속인 형평을 종합 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '12년 동거 부양했는데 기여분 비율은 어느 정도 인정되나요?',
        answer:
          '<strong>사례에 따라 달라 단정하기 어렵지만 10~30% 범위가 자주 보입니다.</strong> 통상 동거 기간·간병 강도·재산 기여 정도·다른 상속인 형평을 종합 고려. 의료기록과 송금자료가 풍부할수록 비율이 높게 검토되는 경향이 보고되고 있어요.',
      },
      {
        question: '며느리·사위도 기여분을 청구할 수 있나요?',
        answer:
          '<strong>며느리·사위는 상속인이 아니라 직접 청구는 어렵습니다.</strong> 다만 배우자(자녀)가 기여분을 청구할 때 며느리·사위의 부양 사실을 자신의 기여로 주장하는 형태로 반영 가능. 별도 보상은 사실혼·동거 입증 등 다른 트랙 검토.',
      },
      {
        question: '다른 형제가 "내가 더 부양했다"며 반대 기여분을 청구하면요?',
        answer:
          '<strong>가정법원이 양쪽 기여를 비교해 종합 판단합니다.</strong> 양측 자료(영수증·간병기록·송금내역)를 비교해 더 큰 기여자를 결정. 양측 모두 일정 기여가 인정되면 비율 분배.',
      },
      {
        question: '기여분이 인정되면 유류분도 더 받을 수 있나요?',
        answer:
          '<strong>기여분이 유류분 산정에 영향을 줄 수 있습니다.</strong> 기여분은 상속재산에서 우선 공제되어 본인 몫 + 기여분 합계가 늘어남. 다만 다른 상속인의 유류분이 침해되면 그 한도에서 반환 다툼.',
      },
      {
        question: '협의에서 기여분 30% 합의했는데 나중에 다른 형제가 번복하면요?',
        answer:
          '<strong>분할 협의서에 서명·인감날인된 합의는 원칙적으로 효력이 있어 번복이 어렵습니다.</strong> 다만 합의 당시 사기·강박·중대한 착오가 있었다면 취소 다툼 가능. 합의서 인감증명·실인 확인이 안전망.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '특별수익과 상속분 조정', href: '/guide/inheritance/inheritance-special-benefit-adjustment' },
      { label: '협의분할 조정 절차', href: '/guide/inheritance/inheritance-agreement-division-mediation' },
      { label: '단순승인 후 숨은 채무 회수', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
    ],
  },

  // ─── 3. inheritance / debt-only-renounce ───
  {
    domain: 'inheritance',
    slug: 'inheritance-debt-only-renounce',
    keyword: '빚만 있는 상속포기',
    questionKeyword: '아버지가 재산은 거의 없고 카드빚·세금만 5억 남기고 돌아가셨어요. 가족 전부 상속포기하면 끝나나요?',
    ctaKeyword: '상속포기 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '빚만 있는 상속 — 포기 5단계 + 후순위 주의 | 로앤가이드',
      description:
        '피상속인이 빚만 남기고 사망했다면 상속포기 5단계 + 후순위 상속인·미성년자녀 포함 신고 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 사업 실패 후 카드빚 3억, 세금 1억, 사채 1억을 남기고 돌아가셨어요. 적극재산은 거의 없고요. 가족 전부 상속포기 하면 끝나는 줄 알았는데, 후순위인 형제·조카까지 자동으로 넘어간다는 얘기를 들었습니다." 빚만 있는 상속은 단순승인 시 본인 재산까지 강제집행되니 <strong>3개월 내 상속포기</strong>가 핵심입니다. 그런데 1순위 상속인이 포기하면 2순위(부모·조부모) → 3순위(형제자매) → 4순위(4촌 이내 방계혈족)로 자동 이전되어, 가족 전체가 포기 신고를 해야 빚 사슬이 끊깁니다. 미성년자녀도 별도 포기 또는 한정승인 신고가 필요해요. 가정법원 신고 절차로 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '상속포기 vs 한정승인 — 4가지 차이',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지가 빚 상속 단계의 핵심 분기입니다.</strong></p>\n<ul>\n<li><strong>상속포기(민법 제1041조)</strong> — 처음부터 상속인이 아니었던 것으로 의제. 적극재산·소극재산 모두 포기. 후순위로 자동 이전.</li>\n<li><strong>한정승인(민법 제1028조)</strong> — 상속받되 책임을 상속재산 한도로 한정. 잔여재산 있을 가능성 있을 때 적합. 후순위 이전 안 됨.</li>\n<li><strong>특별한정승인(민법 제1019조 제3항)</strong> — 단순승인 후 뒤늦게 채무 초과를 안 경우, 안 날부터 3개월 내. 본인 재산 보호 가능.</li>\n<li><strong>단순승인(민법 제1025조)</strong> — 적극·소극 전부 무한 승계. 본인 재산까지 강제집행 위험. 빚 상속에서 절대 피해야 할 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 빚이 명확하면 상속포기, 잔여재산 가능성 있으면 한정승인. 시한(상속개시 안 날부터 3개월) 놓치면 단순승인 의제되어 본인 재산까지 위험합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 상속포기 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속재산 조사 (사망 후 1개월 내)</strong> — 피상속인 부동산·예금·주식·연금·보험·차량 + 채무(카드·은행·세금·사채). "안심상속 원스톱서비스(정부24)"로 일괄 조회 가능.</li>\n<li><strong>2단계 — 1순위 상속인 포기 신고 (사망 안 날부터 3개월 내)</strong> — 배우자·자녀 모두 가정법원에 상속포기 신고. 미성년자녀는 친권자가 대리인으로 신고. 사건번호 부여.</li>\n<li><strong>3단계 — 2~4순위 상속인 포기 신고 (1순위 포기 후 추가 3개월 가능)</strong> — 부모·조부모(2순위) → 형제자매(3순위) → 4촌 이내 방계혈족(4순위). 1순위 포기 결정문 받은 날부터 각자 3개월 내.</li>\n<li><strong>4단계 — 채권자 통지·내용증명 (포기 결정 후)</strong> — 카드사·은행·세무서·사채업자에게 상속포기 결정문 사본 송부. 추심·강제집행 차단.</li>\n<li><strong>5단계 — 본인 재산 강제집행 정지 (필요시)</strong> — 채권자가 상속포기를 무시하고 본인 재산 가압류·강제집행 시도하면 즉시 결정문으로 집행정지 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">후순위·미성년자녀 신고 누락 위험을 AI가 먼저 점검해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">상속포기 신고에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서·가족관계증명서</strong> — 사망 사실·상속관계 입증.</li>\n<li><strong>피상속인 제적등본</strong> — 상속인 범위 확정 (특히 후순위 신고 시 필수).</li>\n<li><strong>상속인 본인 가족관계증명서·기본증명서·주민등록등본</strong> — 신고인 신원·상속관계.</li>\n<li><strong>인감증명서·인감도장</strong> — 신고서 인감날인 첨부.</li>\n<li><strong>안심상속 원스톱서비스 조회 결과</strong> — 적극·소극재산 일괄 조회 자료. 정부24·주민센터.</li>\n<li><strong>채무 입증 자료</strong> — 카드사 청구서·은행 잔액증명·세무서 체납내역. 채무 초과 입증.</li>\n<li><strong>미성년자녀 친권자 동의서</strong> — 미성년 자녀가 별도 신고 시 친권자 인감증명·동의서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "1순위 다 포기했으니 끝났다"고 후순위에게 안 알리면 형제자매·조카가 모르고 단순승인 의제. 가족 단톡방에 결정문을 즉시 공유하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 빚만 있는 상속 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>3개월 시한 놓침</strong> — 안 날부터 3개월 지나면 단순승인 의제. 본인 재산까지 강제집행 위험. 시한 임박이면 한정승인부터 신고하고 정리.</li>\n<li><strong>후순위 미고지</strong> — 1순위 포기 후 2~4순위에 알리지 않으면 그들이 모르고 시한 도과. 빚 사슬이 4촌까지 이어질 수 있음.</li>\n<li><strong>미성년자녀 신고 누락</strong> — 미성년 자녀도 별도 상속인. 친권자가 대리해서 별도 포기·한정승인 신고 필수.</li>\n<li><strong>상속재산 임의 처분</strong> — 포기 신고 전 차량·예금을 임의 처분하면 단순승인 의제(민법 제1026조). 통장 정리·차량 폐차 모두 신고 후로 미루기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사신청과(상속포기·한정승인) / 정부24 안심상속 원스톱서비스 / 한국가정법률상담소.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속포기와 후순위 채권자 추급',
        summary:
          '대법원 2024다525(대법원, 2024.06.13 선고) 사건에서 법원은 상속포기 신고가 수리되면 처음부터 상속인이 아니었던 것으로 의제되어 채권자가 본인 재산에 대해 강제집행할 수 없으나, 후순위 상속인이 시한 내 신고하지 않으면 단순승인으로 의제되어 채무가 자동 승계된다는 점을 다룬 후속 판례 흐름이 보고되고 있습니다. 빚만 있는 상속에서 1순위가 포기하면 2~4순위까지 신고를 마쳐야 가족 전체가 빚 사슬에서 벗어날 수 있어, 가족 전원에게 결정문을 공유하고 시한을 함께 관리해두면 도움이 됩니다.',
        takeaway: '상속포기는 1순위만이 아니라 후순위 4촌 이내 + 미성년자녀까지 전부 시한 내 신고해야 빚 사슬이 끊깁니다.',
      },
    ],
    faq: [
      {
        question: '아버지 빚 5억, 적극재산은 거의 없어요. 한정승인이 좋을까요 포기가 좋을까요?',
        answer:
          '<strong>잔여재산 가능성이 거의 없으면 상속포기가 간단합니다.</strong> 한정승인은 청산 절차(공고·변제내역서)가 번거로워요. 다만 적극재산 일부(차량·소액 예금)라도 챙기고 싶으면 한정승인이 검토 대상.',
      },
      {
        question: '1순위 가족 모두 포기했는데 형제자매가 시한을 놓치면 어떻게 되나요?',
        answer:
          '<strong>그 형제자매는 단순승인 의제되어 본인 재산까지 강제집행 위험이 생길 수 있습니다.</strong> 즉시 특별한정승인(안 날부터 3개월) 검토. 채권자 청구서·소장 송달일을 안 날 시점으로 입증.',
      },
      {
        question: '미성년 자녀도 상속포기 해야 하나요?',
        answer:
          '<strong>네, 별도 신고가 필요합니다.</strong> 친권자가 대리해서 가정법원에 신고. 친권자도 상속인이면 자녀와 친권자의 이해상반 문제로 특별대리인 선임이 필요할 수 있어요(민법 제921조).',
      },
      {
        question: '상속포기 신고 후에 새 채권자가 청구하면 어떻게 하나요?',
        answer:
          '<strong>상속포기 결정문을 답변서에 첨부하면 본인 재산 강제집행을 차단할 수 있는 영역입니다.</strong> 포기 결정문은 채권자 누구에게나 효력. 답변서 미제출 시 무변론 패소 위험이라 송달 30일 내 답변이 핵심.',
      },
      {
        question: '안심상속 원스톱서비스는 어떻게 신청하나요?',
        answer:
          '<strong>정부24(gov.kr) 또는 주민센터에서 사망신고 후 신청 가능합니다.</strong> 부동산·예금·자동차·연금·보험·세금·카드 등을 일괄 조회. 신청 후 1~2주 내 결과 통보. 적극·소극재산 비교에 출발점.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 신고 절차', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '한정승인과 상속포기 비교', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '한정승인 후 채권자 대응', href: '/guide/inheritance/inheritance-limited-acceptance-creditor-response' },
      { label: '단순승인 후 숨은 채무 회수', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
      { label: '상속재산분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
    ],
  },

  // ─── 4. defamation / coworker-spread-victim ───
  {
    domain: 'defamation',
    slug: 'defamation-coworker-spread-victim',
    keyword: '직장 동료 험담 유포',
    questionKeyword: '같은 부서 동료가 사내 메신저·외부 모임에서 제 사생활·업무 관련 허위 험담을 퍼뜨리고 있어요. 어떻게 대응하나요?',
    ctaKeyword: '직장 험담 유포 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 험담 유포 — 증거 보전 4단계 | 로앤가이드',
      description:
        '같은 부서 동료가 사내 메신저·단체채팅·외부 모임에서 본인을 비방하고 있다면 증거 보전 + 사내 신고 + 정통망법 고소 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 팀 동료가 사내 메신저 단체방에서 &lsquo;쟤가 회식비 횡령했대&rsquo;, &lsquo;유부남이랑 만난다더라&rsquo; 같은 허위 험담을 퍼뜨리고, 외부 거래처 모임에서도 비슷한 얘기를 하고 다닌다는 말을 들었어요. 평판이 무너지고 일도 안 잡힙니다." 직장 험담은 <strong>공연성(다수가 들음) + 특정성(실명·직장으로 식별) + 사실/허위 적시 + 비방 목적</strong>이 결합되면 형법 제307조 명예훼손 또는 정통망법 제70조 사이버명예훼손 대상이 됩니다. 증거 보전 + 사내 신고 + 형사 고소 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 사내 메신저·구두 험담도 명예훼손인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 매체별로 적용 법조가 갈립니다.</strong></p>\n<ul>\n<li><strong>구두 험담(회식·외부 모임)</strong> — 형법 제307조 명예훼손 적용. 사실 적시 2년 이하/500만원, 허위 적시 5년 이하/1천만원. 공연성 입증 필요.</li>\n<li><strong>사내 메신저·단체 채팅</strong> — 정통망법 제70조 사이버명예훼손 적용. 사실 3년 이하/2천만원, 허위 7년 이하/5천만원. 형법보다 가중.</li>\n<li><strong>1대1 대화방</strong> — 다른 동료에게 전파될 수 있다는 점에서 공연성 인정 가능(전파가능성 이론). 다만 다툼 여지 있음.</li>\n<li><strong>업무평가·인사고과 발언</strong> — 정당한 업무 평가는 공익성 항변 대상. 다만 허위·인격모욕은 명예훼손/모욕죄.</li>\n<li><strong>모욕죄(형법 제311조)</strong> — 사실 적시 없이 욕설·인격 모욕만 한 경우. 1년 이하/200만원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 매체와 발언 내용에 따라 형법·정통망법·모욕죄 적용이 갈립니다. 캡처·녹음·증인 진술이 핵심 증거입니다.</blockquote>',
      },
      {
        title: 'Q. 어떻게 증거를 모으나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지를 동시에 확보하면 입증력이 올라갑니다.</strong></p>\n<ul>\n<li><strong>사내 메신저·단체방 캡처</strong> — 발언 내용·시간·발언자·참여자 명단을 한 화면에 캡처. 메신저 사용자명·프로필 사진 포함.</li>\n<li><strong>구두 험담 녹음 (가능한 경우)</strong> — 본인이 대화에 참여한 자리는 녹음 합법. 회식·미팅 자리에서 직접 들으면 녹음 가능.</li>\n<li><strong>증인 진술서</strong> — 험담을 들은 다른 동료·거래처 직원 진술서 확보. 인적사항·들은 시기·내용·전달 경로 명시.</li>\n<li><strong>피해 사실 자료</strong> — 평판 추락으로 인사평가 불이익·거래 단절·정신과 진료기록. 손해배상 산정에 활용.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 신고·형사 고소·민사 손해배상 트랙이 갈라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 직장 험담 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·국가인권위원회·고용노동부 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 메신저 캡처·녹음·증인 진술서 확보. 가해자에게 알리지 않고 조용히 모음. 클라우드·외부 저장소 백업.</li>\n<li><strong>2단계 — 사내 신고 + 직장내괴롭힘 신고 (1~2주)</strong> — 인사팀·고충처리위원회 신고. 근로기준법 제76조의2 직장내괴롭힘 해당 시 회사 조사 의무 발동. 노동청 진정도 동시 가능.</li>\n<li><strong>3단계 — 사이버명예훼손 고소 (3~6개월)</strong> — 메신저 험담은 정통망법 제70조 적용. 경찰서 사이버수사대 또는 ECRM(ecrm.police.go.kr) 신고. 캡처·증인 진술서 첨부.</li>\n<li><strong>4단계 — 민사 손해배상 청구 (별개 트랙, 6~18개월)</strong> — 정신적 손해(위자료) + 평판 회복 비용. 형사 결과 나오기 전에도 별개로 가능. 위자료 사례 200~1,000만원 범위가 자주 보고됨.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 직장 험담 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"사실이라도 명예훼손이 될 수 있다"</strong> — 형법 제307조 제1항/정통망법 제70조 제1항은 사실 적시도 처벌. 다만 "오로지 공익을 위한 목적"이면 위법성 조각(형법 제310조).</li>\n<li><strong>1대1 대화는 안전하다는 오해</strong> — 1대1 대화도 전파가능성 인정되면 공연성 충족. 사실 다툼.</li>\n<li><strong>회사가 조사 안 해주면 끝</strong> — 회사 조사와 별개로 형사 고소·민사 청구 가능. 사내 절차 결과 기다리지 말고 병행.</li>\n<li><strong>대응 발언으로 명예훼손 역고소</strong> — "쟤가 거짓말한다"고 단체방에 반박 글 쓰면 본인이 명예훼손 가해자가 될 수 있음. 1대1 또는 사적 자리로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) / 고용노동부 1350 / 국가인권위원회 1331 / 대한법률구조공단 132 / 직장갑질119.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시 명예훼손과 공익성 조각',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 사건에서 법원은 정보통신망 이용 명예훼손 사건에서 게시한 글이 사실에 기초했더라도 비방 목적이 인정되면 처벌 대상이 되며, 공익성 항변은 게시 동기·맥락·공공성을 종합 검토해야 한다고 판시했습니다. 직장 동료 험담도 사실이라 하더라도 비방 목적이 추단되면 형법 제307조 또는 정통망법 제70조 처벌 대상이 될 수 있어, 발언 맥락과 전파 범위 자료를 정리해두면 도움이 됩니다.',
        takeaway: '직장 험담은 사실 여부보다 비방 목적·공연성·전파 범위가 핵심이라, 캡처·증인·피해 자료를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '동료가 한 말이 사실인데도 명예훼손이 되나요?',
        answer:
          '<strong>네, 사실 적시도 처벌 대상이 될 수 있습니다.</strong> 형법 제307조 제1항은 사실 적시 명예훼손도 2년 이하/500만원 처벌. 다만 "오로지 공익 목적"이면 위법성 조각(제310조). 비방 목적이 추단되면 공익성 항변 어렵습니다.',
      },
      {
        question: '회사가 조사 안 해주는데 어떻게 하나요?',
        answer:
          '<strong>고용노동부 진정 + 형사 고소 + 민사 청구를 병행 가능합니다.</strong> 직장내괴롭힘은 근로기준법 제76조의2 위반으로 노동청 신고 가능. 회사가 조사 의무를 다하지 않으면 회사도 손해배상 책임이 생길 수 있어요.',
      },
      {
        question: '단체 카톡방 캡처가 화면 일부만 있어도 증거가 되나요?',
        answer:
          '<strong>가능합니다만 전체 맥락이 필요할 수 있어요.</strong> 발언 시간·발언자·참여자 명단이 한 화면에 보이는 캡처가 가장 강력. 일부만 있으면 가해자가 "맥락이 다르다"고 반박할 여지. 가능하면 화면 녹화 또는 다수 캡처.',
      },
      {
        question: '회식에서 들은 험담은 녹음해도 되나요?',
        answer:
          '<strong>본인이 대화에 참여한 자리는 녹음 합법입니다.</strong> 통신비밀보호법은 본인이 참여하지 않은 타인 간 대화 녹음을 금지. 본인 참여 대화는 녹음 가능. 외부 모임도 본인이 참석했다면 녹음해도 무방.',
      },
      {
        question: '회사를 상대로 손해배상도 청구할 수 있나요?',
        answer:
          '<strong>회사가 직장내괴롭힘 조사·조치 의무를 다하지 않으면 사용자책임으로 청구할 수 있는 영역입니다.</strong> 근로기준법 제76조의3 위반·민법 제756조 사용자책임. 회사 신고에도 방치한 정황 자료가 핵심.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '직장내 명예훼손 대응', href: '/guide/defamation/defamation-workplace-response' },
      { label: '메신저 명예훼손 대응', href: '/guide/defamation/defamation-messenger-response' },
      { label: '동료 험담 명예훼손', href: '/guide/defamation/defamation-coworker-rumor' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-civil-damages-procedure' },
    ],
  },

  // ─── 5. defamation / anonymous-board-tracking ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-board-tracking',
    keyword: '익명 게시판 작성자 추적',
    questionKeyword: '블라인드·잡플래닛 익명 게시판에 저를 비방하는 글이 올라왔어요. 작성자를 어떻게 추적하나요?',
    ctaKeyword: '익명 게시판 작성자 추적 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '익명 게시판 작성자 추적 — 5단계 절차 | 로앤가이드',
      description:
        '블라인드·잡플래닛·네이트판 익명 게시판에 비방글이 올라왔다면 임시조치 + 통신자료요청 + 발신자정보제공명령 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"블라인드 우리 회사 게시판에 제 실명·직급·사진까지 적어 &lsquo;뇌물 받았다, 직장내 폭언했다&rsquo;는 글이 올라왔어요. 댓글에는 동조 험담이 100개 넘게 달렸는데, 작성자가 누군지를 모르니 답답합니다." 익명 게시판은 <strong>운영자가 가진 IP·계정 정보</strong>를 받아내야 작성자가 특정됩니다. 임시조치(30일 차단) → 통신자료요청(이메일·가입자 정보) → 사실조회·발신자정보제공명령(IP·접속 로그) → 통신사에 가입자 조회 단계로 이어져요. 정통망법 제44조의6·형사소송법 제272조 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '익명 게시판 추적 — 4가지 트랙',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지가 익명 작성자 추적 단계의 핵심 트랙입니다.</strong></p>\n<ul>\n<li><strong>임시조치(정통망법 제44조의2)</strong> — 방송통신심의위원회 또는 운영자에게 게시물 삭제·차단 요청. 30일간 차단 후 작성자 이의 제기 절차.</li>\n<li><strong>통신자료요청(전기통신사업법 제83조)</strong> — 수사기관이 운영자(블라인드·네이버 등)에게 가입자 이메일·전화번호·아이디 요청. 영장 없이 가능.</li>\n<li><strong>사실조회·발신자정보제공명령(정통망법 제44조의6)</strong> — 민사 소송 진행 중 법원에 신청. 운영자에게 작성자 IP·접속로그·가입자 정보 제공 명령.</li>\n<li><strong>통신사 가입자 조회</strong> — IP를 KT·SKT·LGU+에 조회해 가입자 특정. 통신비밀보호법상 영장(통신사실 확인자료) 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 익명이라도 IP 로그가 보존된 동안에는 추적이 가능한 영역입니다. 다만 작성 시점부터 시간이 지날수록 IP 보존 기간 도과로 추적이 어려워집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 작성자 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">방송통신심의위원회·경찰청·법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시글 캡처 + URL 보존 (즉시)</strong> — 게시글·작성일·작성자 ID·댓글까지 캡처. URL 기록. 운영자가 삭제하기 전 확보가 핵심.</li>\n<li><strong>2단계 — 임시조치 신청 (1주 내)</strong> — 운영자(블라인드·잡플래닛) 신고센터 또는 방송통신심의위원회(kocsc.or.kr) 정통망법 제44조의2 임시조치 신청. 30일 차단.</li>\n<li><strong>3단계 — 형사 고소(정통망법 제70조) — 1~3개월</strong> — 경찰서 사이버수사대 또는 ECRM(ecrm.police.go.kr) 고소. 사이버명예훼손 사실/허위 구분. 경찰이 통신자료요청으로 가입자 정보 확보.</li>\n<li><strong>4단계 — 발신자정보제공명령 신청 (민사 동시 진행 시, 1~3개월)</strong> — 손해배상 소송 진행 중 법원에 정통망법 제44조의6 명령 신청. 운영자에게 IP·로그·가입자 정보 제공 명령.</li>\n<li><strong>5단계 — 통신사 가입자 조회 → 작성자 특정 (3~6개월)</strong> — 확보된 IP를 통신사에 조회. 가입자 실명 특정 후 형사 입건·민사 청구. 통신비밀보호법 절차 준수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임시조치·통신자료요청·발신자정보명령 트랙이 다양해요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">임시조치·고소·발신자정보명령 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>게시글 캡처</strong> — URL·작성일·작성자 ID·댓글 포함. 화면 전체 캡처가 일부 캡처보다 강력.</li>\n<li><strong>운영자 정보</strong> — 블라인드(팀블라인드), 잡플래닛(잡플래닛), 네이트판(SK커뮤니케이션즈) 등 운영사 상호·주소.</li>\n<li><strong>본인 신원 입증 자료</strong> — 임시조치 신청 시 본인이 명예훼손 피해자임을 증명. 신분증·재직증명서.</li>\n<li><strong>피해 사실 자료</strong> — 글로 인한 평판 손해·정신적 피해 자료. 인사평가 불이익·정신과 진료기록.</li>\n<li><strong>고소장</strong> — 작성자 미상으로 고소 가능. "성명불상자" 명시. 게시글 캡처·URL 첨부.</li>\n<li><strong>인감증명서</strong> — 민사 소장·발신자정보명령 신청 시.</li>\n<li><strong>임시조치 신청서 양식</strong> — 방송통신심의위원회 홈페이지 다운로드.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "운영자가 IP 안 알려준다"고 포기하지 마세요. 형사 고소 → 경찰 통신자료요청 또는 민사 발신자정보명령 단계로 가면 운영자가 응답할 의무가 발생할 수 있는 영역이에요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 익명 게시판 추적 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>IP 보존 기간 도과</strong> — 통신사 IP 로그는 통상 3~12개월 보존. 시간이 지나면 추적 불가. 발견 즉시 고소·임시조치가 핵심.</li>\n<li><strong>VPN·해외 IP 사용</strong> — 작성자가 VPN·해외 IP를 쓰면 추적이 어려울 수 있음. 다만 결제 정보·계정 가입 정보 등 보조 자료로 특정 가능한 사례도 있음.</li>\n<li><strong>운영자 사이트 폐쇄</strong> — 운영자가 사이트를 폐쇄하면 IP 확보 어려움. 캡처를 미리 다수 확보하고 임시조치를 우선 진행.</li>\n<li><strong>발신자정보명령 요건 부족</strong> — 정통망법 제44조의6 명령은 명백히 위법한 정보 + 권리침해 입증이 요건. 경미한 비방·의견 표명은 기각될 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 방송통신심의위원회(kocsc.or.kr) / 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) / 개인정보보호위원회 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정통망법 위반 가중처벌과 비방 목적 인정',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 사건에서 법원은 정보통신망을 이용한 명예훼손에서 비방 목적이 인정되면 형법 제307조보다 가중된 정통망법 제70조가 적용되며, 익명 게시판이라도 게시 동기·전파 범위·반복성을 종합 고려해 비방 목적을 추단할 수 있다고 판시했습니다. 익명 게시판 비방 글도 작성자가 특정되면 정통망법 제70조 가중처벌 대상이 될 수 있어, 게시 시점·반복 여부·댓글 동조 자료를 함께 정리해두면 도움이 됩니다.',
        takeaway: '익명 게시판 작성자 추적은 IP 보존 기간 안에 빠르게 시작 + 임시조치·고소·발신자정보명령을 병행해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '블라인드처럼 회사 인증이 필요한 게시판은 작성자가 같은 회사 직원이라는 게 입증되나요?',
        answer:
          '<strong>가입 시 회사 이메일 인증이 있다면 운영자가 그 이메일·아이디 정보를 보유합니다.</strong> 통신자료요청 또는 발신자정보명령으로 운영자에게 가입자 이메일을 받으면 회사 메일 도메인으로 동일 회사 직원임을 추정 가능.',
      },
      {
        question: '운영자가 해외 사업자(예: 디스코드·텔레그램)면 추적이 어려운가요?',
        answer:
          '<strong>해외 사업자는 한국 법원 명령 집행이 어려워 협조가 제한될 수 있습니다.</strong> 다만 글로벌 플랫폼은 한국 지사·콘텐츠 정책상 응답하는 사례가 있고, 형사 절차로 인터폴 공조 요청도 가능. 다만 시간이 오래 걸리는 영역.',
      },
      {
        question: 'IP를 알아냈는데 가족 공용 인터넷이면 누가 썼는지 어떻게 특정하나요?',
        answer:
          '<strong>가족 중 누구인지 좁혀가는 작업이 필요합니다.</strong> 게시 시간대·접속 기기 종류·계정 가입 시 입력 정보(전화번호·생년월일)·작성 글의 내부 정보 등을 종합. 검찰 수사 단계에서 압수수색·진술로 좁혀지는 사례.',
      },
      {
        question: '임시조치만 해도 작성자 처벌이 되나요?',
        answer:
          '<strong>임시조치는 게시물 30일 차단일 뿐 작성자 처벌은 아닙니다.</strong> 형사 고소를 별도로 진행해야 사이버명예훼손 처벌 가능. 임시조치는 즉시 피해 확산 차단용, 처벌은 고소 트랙.',
      },
      {
        question: '댓글로 동조한 사람들도 처벌할 수 있나요?',
        answer:
          '<strong>댓글이 명예훼손 요건(공연성·특정성·사실/허위 적시·비방 목적)을 충족하면 별개 처벌 대상입니다.</strong> 다만 단순 동조 표현("그래요?", "헐") 정도는 처벌 어려움. 구체적 사실·허위 추가 진술이면 처벌 가능.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '익명 게시판 대응', href: '/guide/defamation/defamation-anonymous-board-counter' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '명예훼손 임시조치 신청', href: '/guide/defamation/defamation-temporary-measure-request' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-civil-damages-procedure' },
    ],
  },

  // ─── 6. defamation / private-chat-leak-accused ───
  {
    domain: 'defamation',
    slug: 'defamation-private-chat-leak-accused',
    keyword: '사적 대화 캡처 유포 가해자 방어',
    questionKeyword: '카톡 대화 캡처를 단톡방에 올렸다가 정통망법·통신비밀보호법 위반으로 고소당했어요. 어떻게 방어하나요?',
    ctaKeyword: '사적 대화 유포 방어 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '사적 대화 캡처 유포 — 가해자 방어 4단계 | 로앤가이드',
      description:
        '카톡·DM 캡처를 단톡방·SNS에 올려 정통망법·통신비밀보호법 위반으로 고소당했다면 공익성 항변 + 합의 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"친구가 사기 친 정황을 카톡으로 자백한 게 있어서, 다른 피해자들에게 알리려고 캡처를 단톡방에 올렸어요. 그런데 친구가 정보통신망법 위반과 통신비밀보호법 위반으로 고소했고, 경찰서에서 출석요구가 왔습니다." 사적 대화 캡처 유포는 혐의를 받고 있다면 <strong>① 정통망법 제70조(사이버명예훼손) ② 통신비밀보호법 제16조(불법 청취 등) ③ 정통망법 제49조(타인 비밀 침해)</strong>가 동시에 검토될 수 있는 영역입니다. 본인이 대화 당사자였는지, 공익 목적이 있었는지, 진실성·상당성이 있는지가 방어 포인트예요. 경찰 단계부터 변호사 상담을 검토하면서 항변·합의 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 본인이 대화 당사자였는데 그것도 처벌되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 통신비밀보호법은 면책되지만 정통망법은 별개로 검토됩니다.</strong></p>\n<ul>\n<li><strong>통신비밀보호법 제3조·제16조</strong> — "공개되지 아니한 타인 간의 대화 녹음·청취" 금지. 본인이 대화 당사자면 적용 안 됨. 카톡 캡처도 본인 참여 대화면 통신비밀보호법 적용 어려움.</li>\n<li><strong>정통망법 제70조 사이버명예훼손</strong> — 캡처를 다수에게 유포해 상대방 명예를 훼손하면 처벌 가능. 사실 적시 3년 이하/2천만원, 허위 7년 이하/5천만원.</li>\n<li><strong>정통망법 제49조 타인 비밀 침해</strong> — 정보통신망에서 알게 된 타인의 비밀을 누설·도용 시 처벌(5년 이하/5천만원). 캡처 내용이 사적 비밀이면 적용 가능.</li>\n<li><strong>형법 제316조 비밀침해죄</strong> — 봉함된 문서·전자기록 등 비밀 누설. 사적 대화도 적용 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인 참여 대화 캡처는 통신비밀보호법은 면책 가능하지만, 정통망법 제70조·제49조는 별도로 검토됩니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 항변이 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 항변 트랙이 있습니다.</strong></p>\n<ul>\n<li><strong>공익성 항변(형법 제310조)</strong> — "사실이고 오로지 공익을 위한 것"이면 위법성 조각. 사기 정황 알림이 다른 피해자 보호 목적이면 항변 검토 가능. 다만 "오로지 공익"이라는 좁은 요건.</li>\n<li><strong>진실성 입증</strong> — 캡처 내용이 진실이고, 진실로 믿을 만한 상당한 이유가 있었음을 입증. 사기 자백 캡처가 위·변조되지 않았음 입증.</li>\n<li><strong>비방 목적 부정</strong> — 정통망법 제70조는 비방 목적이 요건. 단순 정보 공유·피해자 경고 목적이면 비방 목적 부정 다툼.</li>\n<li><strong>합의·반성문·공탁</strong> — 처벌 의사 있는 친고죄·반의사불벌죄(정통망법 제70조는 반의사불벌)에서 합의는 결정적. 합의금 + 반성문 + 공탁으로 형량 감경 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">공익성·진실성·합의 트랙이 사안마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가해자 방어 4단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·검찰·법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출석요구 대응 + 변호사 상담 (출석 1~2주 전)</strong> — 출석요구서 받은 즉시 변호사 상담 검토. 진술 전략·진술거부권·공익성 항변 자료 정리.</li>\n<li><strong>2단계 — 항변 자료 정리</strong> — 캡처 진실성 자료(원본 대화, 다른 피해자 진술), 공익성 자료(피해자 보호 목적, 단톡방 구성원 범위), 비방 목적 부정 자료(중립적 표현·정보 제공 톤).</li>\n<li><strong>3단계 — 피해자 합의 협상 (경찰·검찰 단계)</strong> — 정통망법 제70조는 반의사불벌. 합의 시 처벌 면제 가능. 합의금 + 사과문 + 캡처 삭제 + 향후 비공유 약정.</li>\n<li><strong>4단계 — 공탁·반성문 (합의 불가 시)</strong> — 합의 거부면 공탁(피해 회복 의사 표시) + 반성문 제출. 양형 감경 자료. 초범·진지한 반성·재발방지 다짐.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 사적 대화 유포 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"본인 참여 대화니까 안전하다"</strong> — 통신비밀보호법은 면책될 수 있지만 정통망법 제70조·제49조는 별개. 안전하지 않을 수 있음.</li>\n<li><strong>"사실이니까 공익성 항변 된다"</strong> — 형법 제310조 공익성은 "오로지 공익"이라는 좁은 요건. 사적 감정·복수·SNS 좋아요 욕구가 섞이면 인정 어려움.</li>\n<li><strong>경찰 단계 자백 진술</strong> — 변호사 상담 전 자백·자세한 경위 진술은 향후 항변 활용도가 떨어질 수 있음. 진술거부권 활용 또는 변호사 동석 검토.</li>\n<li><strong>합의 늦음</strong> — 검찰 송치·기소 단계로 갈수록 합의금이 커지고 효과는 줄어듦. 경찰 단계 초기 합의가 형량·기록상 가장 유리한 경향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 변호사 상담 검토 / 경찰서 사이버수사대 / 검찰청 형사조정.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시 정통망법 위반과 비방 목적',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 사건에서 법원은 정보통신망을 이용해 사실을 적시한 경우에도 비방 목적이 인정되면 정통망법 제70조 제1항 위반에 해당하고, 공익성 항변은 게시 동기·맥락·공공성을 종합적으로 검토해야 한다고 판시했습니다. 사적 대화 캡처 유포도 사실이라 하더라도 비방 목적·전파 범위·피해자 보호 외 동기 혼재 여부에 따라 처벌 여부가 갈릴 수 있어, 게시 동기·전파 범위·공익성 자료를 시간순으로 정리해두면 도움이 됩니다.',
        takeaway: '사적 대화 유포 가해자 방어는 공익성·진실성·비방 목적 부정 + 조기 합의를 병행해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '정통망법 제70조는 반의사불벌이라 합의하면 처벌 안 받나요?',
        answer:
          '<strong>네, 피해자가 처벌을 원치 않으면 공소를 제기할 수 없습니다.</strong> 합의서에 "처벌불원" 명시 + 인감증명·실인 첨부. 다만 정통망법 제49조 타인 비밀 침해는 반의사불벌 아니므로 합의해도 별도 처벌 가능성.',
      },
      {
        question: '단톡방이 비공개라 공연성이 없다고 주장할 수 있나요?',
        answer:
          '<strong>단톡방 인원수와 전파가능성에 따라 다툼 여지가 있습니다.</strong> 5명 이상이면 공연성 인정되는 사례가 많고, 1~3명이면 다툼. 다만 전파가능성 이론으로 공연성 인정도 가능. 인원·관계·전파 의도가 핵심.',
      },
      {
        question: '경찰 출석 전에 캡처를 삭제하면 도움이 되나요?',
        answer:
          '<strong>증거인멸 우려로 불리해질 수 있습니다.</strong> 이미 피해자가 캡처를 확보한 후라면 본인이 삭제해도 의미 없고, 오히려 양형에 불리. 변호사 상담 후 결정 권장.',
      },
      {
        question: '공익성 항변이 인정된 사례는 어떤 경우인가요?',
        answer:
          '<strong>공직자 비위·의료 사고·소비자 피해 알림 등 공공 이익 강한 경우 인정 사례가 보고됩니다.</strong> 사기 자백 알림은 다른 피해자 보호 목적이 강하면 검토 가능하지만 사적 감정 섞이면 어려움. 게시 톤·전파 범위가 핵심.',
      },
      {
        question: '벌금형이면 전과가 남나요?',
        answer:
          '<strong>벌금형도 형사처벌이라 전과 기록이 남습니다.</strong> 다만 5년 후 형의 효력 상실(형법 제81조)로 자격 제한은 일부 해제. 기소유예·선고유예가 가장 유리. 합의·반성문이 결정적.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 가해자 방어 절차', href: '/guide/defamation/defamation-accused-defense-strategy' },
      { label: '메신저 명예훼손 대응', href: '/guide/defamation/defamation-messenger-response' },
      { label: '명예훼손 합의 협상', href: '/guide/defamation/defamation-settlement-negotiation' },
      { label: '명예훼손 처벌 수위', href: '/guide/defamation/defamation-punishment-level' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
    ],
  },
];
