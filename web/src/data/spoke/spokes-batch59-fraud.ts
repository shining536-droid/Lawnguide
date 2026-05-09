import { SpokePage } from '../spoke-pages';

// batch59 fraud — 5개:
// 1. 메신저 피싱(가족 사칭 카톡) 4단계 즉시 대응 + 환급 가능성 — victim
// 2. 중고나라 안전결제(에스크로) 우회 사기 회수 — victim
// 3. 부동산 가짜 임대인(이중계약·등기명의 도용) 환급 — victim
// 4. 다단계·폰지 투자유치 모집책(중간 가담자) 무고 방어 — accused
// 5. 보이스피싱 통장 명의대여(계좌만 빌려준 가담자) 무고 방어 — accused
//
// 고유 존재 이유:
// 1. 이 페이지는 가족·지인을 사칭한 카톡 메신저 피싱으로 송금한 피해자가 즉시 지급정지 → 사건사고증명 → 피해구제 → 환급공고 4단계 골든타임 + 환급 가능성을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 중고나라 안전결제(에스크로) 사용 중 판매자가 직거래·계좌이체 유도해 입금 받고 잠적한 피해자가 에스크로 우회 정황 + 사기 고소 + 회수 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 진짜 임대인이 아닌 사람이 임대인 행세로 보증금을 받고 잠적했거나 이중계약을 한 사례에서 피해자가 사기 + 사문서위조·사문서행사 + HUG/주임공 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 다단계·폰지 투자 조직의 중간 모집책으로 활동했지만 본인은 상위 운영자의 사기 구조를 몰랐다는 입장에서 무고 방어 + 단순 가담 vs 조직 가담 구분 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 보이스피싱 조직에 단순히 본인 계좌·체크카드만 빌려줬을 뿐 현금수거·송금에는 가담하지 않았다는 입장에서 전자금융거래법 + 사기방조 무고 방어 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch59Fraud: SpokePage[] = [
  // ─── 1. fraud / fraud-kakao-family-phishing-4step-refund ───
  {
    domain: 'fraud',
    slug: 'fraud-kakao-family-phishing-4step-refund',
    keyword: '메신저 피싱 가족 사칭 4단계 환급',
    questionKeyword: '딸이라며 카톡으로 급하게 200만원 보내달라고 해서 송금했어요. 환급 가능한가요?',
    ctaKeyword: '메신저 피싱 환급 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '메신저 피싱 가족 사칭 — 즉시 대응 4단계 환급 트랙 | 로앤가이드',
      description:
        '딸·아들·지인을 사칭한 카톡 메신저 피싱으로 송금했다면 지급정지·사건사고확인원·피해구제·환급공고 4단계 골든타임을 지금 확인하세요.',
    },
    intro:
      '<p>"\'엄마, 폰 고장나서 새 번호로 연락해. 급하게 친구 계좌로 200만원만 보내줘\'라는 카톡이 왔어요. 딸이라고 의심 안 하고 송금했는데 한 시간 뒤 진짜 딸한테 전화하니 아무것도 모른다는 거예요." 가족·지인 사칭 메신저 피싱은 전기통신금융사기 피해방지 및 피해금환급에 관한 특별법(통신사기피해환급법) 적용 대상으로, 송금 직후 30분~3시간 안에 지급정지가 들어가면 환급 가능성이 검토되는 영역입니다. 대법원 2019도11572·2024도10141 판결은 메신저 사칭으로 자녀·지인을 가장해 송금을 유도한 행위가 사기죄에 해당한다고 봤고, 경찰청·금감원 안내 절차에 따르면 ① 즉시 지급정지(112) ② 경찰서 사건사고사실확인원 ③ 은행 피해구제신청 ④ 채권소멸공고·환급 4단계로 진행됩니다. 자금이 인출되기 전 골든타임이 회수율의 핵심 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 메신저 피싱 가족 사칭 4단계 환급 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급정지·사건사고증명·피해구제·환급공고 4단계로 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 지급정지 (송금 직후 ~3시간 골든타임)</strong> — 112 신고 또는 입금받은 은행 콜센터 직접. 통신사기피해환급법 제4조에 따라 사기이용계좌 지급정지가 가능한 영역. 시간이 지날수록 자금이 분산·인출됩니다.</li>\n<li><strong>② 경찰서 사건사고사실확인원 발급 (3일 내)</strong> — 가까운 경찰서 사이버수사대 또는 ecrm.police.go.kr 접수 후 사실확인원 발급. 환급 신청 시 필수 첨부 자료.</li>\n<li><strong>③ 은행 피해구제신청서 제출 (지급정지 후 3일 내)</strong> — 송금한 본인 거래은행에 사건사고사실확인원 + 신분증 + 통장사본 + 카톡 캡처 첨부. 통신사기피해환급법 제5조 절차.</li>\n<li><strong>④ 채권소멸공고 → 환급 (약 2개월)</strong> — 금감원 공고 60일 + 명의자 이의 없으면 채권 소멸 → 환급. 통상 송금일로부터 4~6개월.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 메신저 피싱은 보이스피싱과 동일하게 통신사기피해환급법 적용 영역이라 지급정지가 회수율의 결정적인 변수. 송금 후 1시간 내 신고 시 환급률이 급격히 상승하는 사례가 많고, 6시간 이후에는 자금이 대부분 인출돼 회수가 어려운 영역으로 평가됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급정지 → 사건사고증명 → 피해구제신청 → 채권소멸공고 → 환급 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 지급정지 (송금 직후 ~3시간)</strong> — 112 신고 또는 송금한 은행 콜센터. 의심된 즉시 일단 지급정지부터. 사후 취소 가능.</li>\n<li><strong>2단계 — 경찰서 사건사고사실확인원 (3일 내)</strong> — 사이버수사대 방문 또는 ecrm.police.go.kr. 카톡 캡처·사칭 번호·송금 내역 제출.</li>\n<li><strong>3단계 — 은행 피해구제신청 (지급정지 후 3일 내)</strong> — 송금한 본인 거래은행에 신청서 + 사건사고사실확인원. 통신사기피해환급법 제5조 절차.</li>\n<li><strong>4단계 — 금감원 채권소멸공고 (약 60일)</strong> — 사기이용계좌 명의인에게 통지 → 이의 없으면 채권 소멸. 명의인이 정당사유 주장 시 본안 소송으로 분기.</li>\n<li><strong>5단계 — 환급 (송금일로부터 약 4~6개월)</strong> — 잔액 한도 환급. 사기이용계좌에 잔액 부족 시 일부 환급. 추가 회수는 민사·형사 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">메신저 피싱 가족 사칭 4단계 환급 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 송금 자료 + 사칭 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>카톡 대화 전체 캡처</strong> — 사칭 시작 시점부터 송금 직후까지. 발신자 프로필 + 새 번호.</li>\n<li><strong>송금 영수증·이체 내역</strong> — 본인 계좌 → 사기 계좌. 시간·금액 명확.</li>\n<li><strong>실제 가족과의 통화 기록</strong> — 사칭이었음을 입증. 통화 시간 캡처.</li>\n<li><strong>사칭 번호의 발신자 정보</strong> — 카톡 프로필·전화번호 검색 결과.</li>\n<li><strong>본인 신분증·통장 사본</strong> — 피해구제신청서 첨부.</li>\n<li><strong>경찰서 사건사고사실확인원</strong> — 환급 신청 필수 자료.</li>\n<li><strong>은행 지급정지 확인 문자·메일</strong> — 절차 진행 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카톡 캡처는 \'대화 내보내기\'(텍스트 백업) + 스크린샷 병행이 안정적이고 위·변조 의심을 줄일 수 있는 영역. 사칭 번호는 즉시 차단하지 말고 캡처 후 신고용으로 보존이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"이미 6시간 지났는데 환급되나요" 한계</strong> — 자금이 인출됐을 가능성이 높지만 잔액 일부 환급은 검토 가능 영역. 일단 신고·지급정지 시도 + 잔액 환급 신청.</li>\n<li><strong>"상품권·기프티콘으로 보냈어요" 한계</strong> — 통신사기피해환급법은 \'사기이용계좌\' 자금만 환급 대상. 상품권은 별도 트랙(상품권 발행사 분쟁조정·사기 고소).</li>\n<li><strong>"명의인이 \'나는 돈 받았다\'며 이의제기" 다툼</strong> — 명의도용 통장(대포통장)이라면 명의인 진술은 정황상 약함. 사기 조직 가담자라면 환급 가능. 명의인 측 정당사유 입증 책임 영역.</li>\n<li><strong>해외 송금·암호화폐 환전 시 한계</strong> — 해외 계좌·코인 거래소로 환전된 자금은 추적·회수가 어려운 영역. 가상자산 거래소 본인인증 정보로 일부 추적 가능 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>112 (경찰청 통합 신고)</strong> — 즉시 지급정지·신고.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>금융감독원 1332</strong> — 보이스·메신저 피싱 환급 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>KISA 118</strong> — 사칭·악성 앱 신고.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 메신저로 자녀·지인 사칭한 송금 유도와 사기죄',
        summary:
          '대법원 2019도11572 사건(대법원, 2019.11.28 선고)에서 법원은 메신저로 자녀·지인을 사칭하여 \'폰이 고장났다\'·\'급하게 돈이 필요하다\'며 송금을 유도한 행위가 처분의사를 일으키는 기망행위에 해당하여 형법 제347조 사기죄 + 정보통신망 이용 사기 영역에서 처벌 대상으로 평가될 수 있다고 판시했습니다. 같은 흐름에서 대법원 2024도10141 사건은 보이스·메신저 피싱 조직의 공모공동정범 성립 요건을 구체화하면서 \'기망방법을 구체적으로 몰랐던 경우에도 공모관계가 인정될 수 있다\'고 봤고, 통신사기피해환급법은 사기이용계좌에 대한 신속한 지급정지·채권소멸공고 절차를 두어 피해자 회수 트랙을 마련하고 있습니다.',
        takeaway: '메신저 피싱 가족 사칭은 통신사기피해환급법 적용 영역으로 평가될 여지가 있어, 카톡 캡처·송금 자료·실제 가족 통화 기록을 정리하면 4단계 환급 트랙이 검토 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '송금하고 나서 3시간 지났는데 환급되나요?',
        answer:
          '<strong>골든타임은 30분~3시간이 결정적이지만 일단 지급정지 시도가 안전합니다.</strong> 잔액이 남아있으면 환급 가능 영역. 112·은행 콜센터 즉시 신고 + 사건사고사실확인원 발급.',
      },
      {
        question: '카톡으로 받은 \'친구 계좌\'에 송금했는데 그 명의인은 무관할 수도 있나요?',
        answer:
          '<strong>대포통장(명의도용)일 가능성이 높은 영역입니다.</strong> 명의인이 정당사유 주장 시 다툼 가능하지만, 사기이용계좌로 인정되면 환급 트랙 진행. 명의인의 사기 조직 공모 입증은 별도 형사 트랙.',
      },
      {
        question: '상품권·기프티콘 코드를 보냈어요. 환급 가능한가요?',
        answer:
          '<strong>통신사기피해환급법 환급은 \'사기이용계좌\' 자금만 대상이라 상품권은 다른 트랙입니다.</strong> 상품권 발행사 분쟁조정·사기 고소 + 한국소비자원 분쟁조정 검토.',
      },
      {
        question: '돈을 보낸 직후 진짜 딸한테 전화해서 \'아니야\' 들었어요. 뭘 먼저 해야 하나요?',
        answer:
          '<strong>112 즉시 신고 + 송금한 은행 콜센터 동시 전화입니다.</strong> 어느 한 쪽이라도 빨리 닿으면 지급정지 가능 영역. 카톡 캡처·통화 기록은 신고 후 정리.',
      },
      {
        question: '경찰서에 갔더니 \'사이버수사대로 가라\'고 하던데요',
        answer:
          '<strong>관할 경찰서 또는 사이버수사대 모두 신고 접수 가능합니다.</strong> ecrm.police.go.kr 온라인 접수도 동일 효력. 사건사고사실확인원만 받으면 은행 신청 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '카카오톡 가족 사칭 피해', href: '/guide/fraud/fraud-friend-kakao-impersonation-emergency' },
      { label: '카카오 가족 사칭 100만원', href: '/guide/fraud/fraud-kakao-family-impersonation-100man' },
      { label: '메신저 가족 사칭 회수', href: '/guide/fraud/fraud-messenger-family-impersonation-recovery' },
      { label: '보이스피싱 100만원 이상 회수', href: '/guide/fraud/fraud-voice-phishing-100m-plus-recovery' },
      { label: '피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 2. fraud / fraud-secondhand-escrow-bypass-victim ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-escrow-bypass-victim',
    keyword: '중고나라 안전결제 우회 사기',
    questionKeyword: '중고나라 안전결제 쓴다더니 직거래 계좌로 보내라고 해서 보냈는데 잠적했어요. 회수 가능한가요?',
    ctaKeyword: '에스크로 우회 사기 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '중고나라 안전결제 우회 사기 — 4단계 회수 트랙 | 로앤가이드',
      description:
        '안전결제(에스크로) 사용한다더니 계좌이체·간편송금으로 유도하고 잠적한 사기라면 사기 고소·플랫폼 신고·환급 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"중고나라에서 갤럭시 휴대폰을 80만원에 사기로 했어요. 판매자가 \'안전결제 시스템 점검 중이라 우선 계좌이체로 보내주시면 즉시 발송한다\'고 해서 송금했는데, 그 뒤로 연락이 끊겼습니다." 안전결제(에스크로) 우회 유도 후 잠적은 형법 제347조 사기죄의 전형적 패턴이고, 대법원 2024도10141 판결은 \'안전결제 시스템을 가장한 직거래 유도\'를 처분의사 유발 기망행위로 봤어요. 경찰청 사이버범죄 신고시스템 + 한국소비자원·플랫폼 신고 + 사기 고소 4단계 회수 트랙으로 검토할 수 있습니다. 다만 자금이 즉시 인출되거나 대포통장으로 흘러가는 사례가 많아, 1주 내 신고가 회수율의 핵심 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 안전결제 우회 사기 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 사기 고소·계좌 추적·플랫폼 신고·민사 4단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사이버범죄 신고 + 사기 고소 (즉시)</strong> — ecrm.police.go.kr 접수. 동일 계좌로 다른 피해자 정황(더치트·사이버캅) 확인되면 다수 피해자 결합으로 우선 수사 가능성 영역.</li>\n<li><strong>② 사기 계좌 지급정지·추적 (3일 내)</strong> — 송금 직후라면 통신사기피해환급법 \'사기이용계좌\' 인정 검토(2023.11.17 시행 개정으로 재화·용역 사칭 사기까지 확대). 잔액 환급 가능성 영역.</li>\n<li><strong>③ 플랫폼·중고나라 거래 차단 신고</strong> — 중고나라·번개장터·당근마켓 신고센터에 게시글·계정 차단 요청. 추가 피해자 발생 차단.</li>\n<li><strong>④ 소액심판 + 민사 회수</strong> — 3,000만원 이하면 소액심판 (인지·수수료 저렴, 1~3개월). 가해자 신원 확인되면 손해배상 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 안전결제 우회 유도는 \'에스크로 사용한다\'는 약속을 어긴 시점에서 처분의사 기망 정황으로 평가될 영역. 카톡·문자·게시글에서 안전결제 약속 → 직거래 유도 → 잠적의 시간순 자료가 회수의 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 지급정지·계좌 추적 → 사이버 신고 → 플랫폼 차단 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 게시글 캡처·판매자 ID·카톡 전체 백업·송금 영수증·\'안전결제 사용\' 약속 메시지 + 직거래 유도 메시지.</li>\n<li><strong>2단계 — 지급정지·계좌 추적 시도 (송금 직후)</strong> — 112 신고 + 본인 거래은행 콜센터. 통신사기피해환급법 적용 검토 (2023.11 개정 후 재화·용역 사칭도 포함).</li>\n<li><strong>3단계 — 사이버범죄 신고 (3~7일 내)</strong> — ecrm.police.go.kr 또는 관할 경찰서. 사이버캅·더치트에서 동일 계좌·연락처 검색 후 다른 피해자 결합.</li>\n<li><strong>4단계 — 플랫폼 신고 + 한국소비자원 (병행)</strong> — 중고나라·번개장터 신고센터에 차단 요청. 한국소비자원 1372 분쟁조정 신청(C2C는 한계 있지만 단서 확보 트랙).</li>\n<li><strong>5단계 — 소액심판·민사 회수 (1~6개월)</strong> — 3,000만원 이하면 소액심판. 가해자 인적사항 확보 시 채권 추심 + 형사 처분 결과 활용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">안전결제 우회 사기 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래 자료 + 다른 피해자 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>중고나라·번개장터 게시글 캡처</strong> — 게시일·물건·가격·사진·판매자 ID.</li>\n<li><strong>카톡·문자 전체 백업</strong> — 첫 문의~송금~잠적까지 시간순.</li>\n<li><strong>\'안전결제 사용\' 약속 메시지</strong> — 직거래 유도 직전 약속 정황.</li>\n<li><strong>\'시스템 점검\' \'직거래로 보내달라\' 메시지</strong> — 우회 유도 핵심 자료.</li>\n<li><strong>이체 영수증·계좌 정보</strong> — 송금 시점·금액·받은 계좌·예금주명.</li>\n<li><strong>사이버캅·더치트 검색 결과</strong> — 동일 계좌 다른 피해자 정황.</li>\n<li><strong>판매자 연락처·SNS 캡처</strong> — 인스타·페이스북 정황.</li>\n<li><strong>본인 신분증·통장 사본</strong> — 피해구제신청서 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사이버캅(앱) + 더치트(thecheat.co.kr) 에 받은 계좌·전화번호 검색 시 동일 사기범에게 당한 피해자가 5명 이상이면 검찰 우선수사 정황 자료. 다수 피해자 결합으로 회수율이 상승하는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 변제지체" 주장 반박</strong> — 판매자가 처음부터 안전결제 거부·계좌이체 강요한 정황 + 잠적·번호 변경이 있다면 편취의사 인정 영역. 대법원 사기죄 \'행위 당시\' 편취의사 기준.</li>\n<li><strong>"대포통장이라 회수 안 됩니다" 한계</strong> — 명의도용 통장이면 명의인 회수 한계. 다만 통신사기피해환급법 환급 트랙은 별개 영역. 잔액 일부 환급 가능 사례.</li>\n<li><strong>판매자 인적사항 모름 한계</strong> — 카톡 ID·전화번호만 있다면 사기 고소 후 수사기관 사실조회로 신원 확인 트랙. 단독 민사는 인적사항 부족 시 송달 한계.</li>\n<li><strong>"환급 신청 기한" 주의</strong> — 통신사기피해환급법은 송금 후 즉시 신고가 핵심. 1주 이상 지연 시 자금 인출돼 회수 어려운 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>한국소비자원 1372</strong> — 분쟁조정 안내 (C2C 한계 있음).</li>\n<li><strong>금융감독원 1332</strong> — 통신사기피해환급법 환급 절차 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 처분의사 유발 기망과 사기죄 성립',
        summary:
          '대법원 2024도10141 사건(대법원, 2024.12.12 선고)에서 법원은 사기죄가 성립하기 위한 기망행위는 \'사람으로 하여금 착오를 일으키게 하는 모든 행위\'로서 안전결제 시스템을 가장하여 직거래·계좌이체로 유도한 후 송금받고 약속한 물품을 발송하지 않은 행위는 처분의사 유발 기망에 해당할 수 있다고 판시했습니다. 또한 대법원 2008도5618 사건은 \'편취 범의의 판단 시점\'을 행위 당시로 보고, 처음부터 안전결제 거부·계좌이체 강요 + 잠적 정황이 결합되면 \'행위 당시 편취의사\' 인정 영역으로 평가되는 사례를 다뤘습니다.',
        takeaway: '안전결제 우회 사기는 약속 위반 시점·잠적 정황·다른 피해자 결합으로 \'행위 당시 편취의사\' 입증 트랙이 열리는 사례가 있어, 게시글·카톡·이체 자료를 시간순 정리하면 회수 가능성이 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '\'안전결제 점검 중이라 직거래 부탁\'이라고 해서 보냈는데 사기 맞나요?',
        answer:
          '<strong>플랫폼 안전결제 시스템은 \'점검 중\'이라 잠시 멈추는 일이 거의 없는 영역입니다.</strong> 점검 핑계 + 직거래 유도 + 잠적 정황은 사기 의도 강한 정황. 게시글·카톡·\'점검 중\' 메시지 캡처가 핵심.',
      },
      {
        question: '판매자가 \'대포통장\'이면 회수 못 하나요?',
        answer:
          '<strong>대포통장(명의도용)이면 명의인 회수는 한계지만 환급법 트랙은 별개입니다.</strong> 잔액 일부 환급 가능 영역. 사기 조직 자금세탁 정황 입증되면 형사 우선수사 가능.',
      },
      {
        question: '사이버캅에 같은 번호로 신고된 피해자가 10명 넘어요',
        answer:
          '<strong>다수 피해자 결합 시 검찰 인지수사·우선 수사 정황 자료입니다.</strong> 단톡방·카페에서 다른 피해자 결합 후 공동 고소 검토. 1명 단독보다 회수율 상승 영역.',
      },
      {
        question: '소액심판은 어떻게 하나요?',
        answer:
          '<strong>3,000만원 이하 청구는 관할 법원 소액심판 신청서 작성 + 인지·송달료입니다.</strong> 대한법률구조공단 132 무료 양식·작성 도움 + 자격 요건 시 무료 변론 가능 영역.',
      },
      {
        question: '플랫폼 신고하면 환급되나요?',
        answer:
          '<strong>중고나라·번개장터 등 C2C 플랫폼은 환급 의무가 없는 영역입니다.</strong> 게시글 차단·계정 정지·다른 피해자 발생 방지 효과는 있지만 회수는 사기 고소·통신사기피해환급법 트랙.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '중고거래 미발송 피해자', href: '/guide/fraud/fraud-second-hand-goods-noshow-platform' },
      { label: '안전결제 사후 대응', href: '/guide/fraud/fraud-secondhand-escrow-fallback-response' },
      { label: '온라인 사기 IP 추적', href: '/guide/fraud/fraud-online-scam-ip-tracking-followup' },
      { label: '사기 신고 기한·금액', href: '/guide/fraud/fraud-report-deadline-amounts' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-preparation' },
    ],
  },

  // ─── 3. fraud / fraud-fake-landlord-impersonation-victim ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-landlord-impersonation-victim',
    keyword: '가짜 임대인 사칭 보증금 사기',
    questionKeyword: '집주인이라며 계약했는데 알고보니 진짜 임대인이 아니에요. 보증금 5천만원 회수 가능한가요?',
    ctaKeyword: '가짜 임대인 사기 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '가짜 임대인 사칭 사기 — 4단계 보증금 회수 트랙 | 로앤가이드',
      description:
        '집주인 행세하는 사람과 계약하고 보증금을 보낸 뒤 진짜 임대인이 아닌 걸 알았다면 사기·사문서위조 + 환급 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부동산에서 소개받은 원룸을 보러갔더니 \'집주인입니다\'라며 신분증·계약서를 보여주는 사람이 있어 보증금 5,000만원을 입금하고 계약했어요. 그런데 잔금일에 진짜 등기부상 소유자가 나타나 \'그 사람은 내 형이고 내 동의 없이 계약했다\'고 합니다." 가짜 임대인(소유자 아닌 사람)·이중계약 사기는 형법 제347조 사기죄 + 형법 제231조 사문서위조·제234조 위조사문서행사 + 민법 제126조·제135조(무권대리) 결합 영역입니다. 대법원 2017도4027(부동산 이중매매)·2024도15240(사문서위조 공모공동정범) 판결은 등기명의·신분 사칭 사안에서 사기 + 사문서위조 별도 처벌 영역으로 봤어요. 경찰청·HUG·KLAC 안내 절차에 따르면 ① 사기·사문서위조 고소 ② 부동산 가처분 ③ HUG/주택임대차분쟁조정위 ④ 민사 회수 4단계로 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가짜 임대인 사기 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 사기·위조 고소 + 가처분 + 분쟁조정 + 민사 4단계로 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사기·사문서위조·위조사문서행사 고소</strong> — 가짜 임대인이 신분증·등기부·임대차계약서를 위조했다면 형법 제231조·제234조 별도 처벌. 본인 명의 도용·위임장 위조 정황 자료가 핵심.</li>\n<li><strong>② 부동산 가처분 + 사기 자금 추적 (송금 1~2주 골든타임)</strong> — 받은 계좌 지급정지 시도 + 부동산 본인 명의 처분금지 가처분(있는 경우). 자금 인출 차단이 회수의 결정적인 영역.</li>\n<li><strong>③ 주택임대차분쟁조정위·HUG 보증 확인</strong> — 전세보증금 반환보증 가입 단지라면 HUG 1566-9009 보증이행 청구. 미가입이라면 주택임대차분쟁조정위 무료 조정.</li>\n<li><strong>④ 부당이득반환·손해배상 민사 + 진정한 소유자 책임</strong> — 가짜 임대인 상대 부당이득. 진짜 소유자가 가짜 임대인의 위임장 위조를 알고 묵인한 정황 있다면 민법 제125조 표현대리 책임 다툼 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가짜 임대인 사칭은 단순 사기보다 ① 신분증·계약서 위조(사문서위조) ② 진짜 소유자와의 관계(친족·대리권) ③ 부동산 등기 정황 3축 결합 입증. 등기부등본·진짜 소유자 신원 확인이 회수 트랙의 출발점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 사기·위조 고소 → 자금 추적 → 분쟁조정 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 임대차계약서 원본·\'임대인\' 신분증 사본·등기부등본(계약 시점/현재)·부동산 중개사 정보·송금 영수증·계약 당시 사진·녹취.</li>\n<li><strong>2단계 — 사기·사문서위조 고소 (1~2주 내)</strong> — 관할 경찰서 사이버수사대 또는 ecrm.police.go.kr. 위조 신분증·위조 위임장 정황 자료. 진짜 소유자 진술서 첨부.</li>\n<li><strong>3단계 — 받은 계좌 지급정지·자금 추적 (송금 직후 골든타임)</strong> — 112 + 본인 거래은행. 잔액 환급 가능성 검토. 가짜 임대인 명의 부동산·예금 가처분.</li>\n<li><strong>4단계 — 주임공·HUG 분쟁조정 (1~3개월)</strong> — 주택임대차분쟁조정위(주임공 또는 LH) 무료 신청. HUG 보증 가입 단지라면 보증이행 청구.</li>\n<li><strong>5단계 — 민사 회수·표현대리 다툼 (3~12개월)</strong> — 가짜 임대인 부당이득반환·손해배상. 진짜 소유자 묵인 정황 있다면 표현대리 책임 + 부당이득 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가짜 임대인 사기 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 9가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 자료 + 신원·등기 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 원본</strong> — 가짜 임대인 서명·인장.</li>\n<li><strong>가짜 임대인 신분증 사본·연락처</strong> — 위조 여부 감정 자료.</li>\n<li><strong>위임장 사본 (있는 경우)</strong> — 진짜 소유자 명의 위임장 위조 정황.</li>\n<li><strong>등기부등본 (계약 시점·현재)</strong> — 진짜 소유자 확인.</li>\n<li><strong>송금 영수증·이체 내역</strong> — 가짜 임대인 계좌·금액.</li>\n<li><strong>중개사 정보·중개수수료 영수증</strong> — 중개사 책임 추적 가능 영역.</li>\n<li><strong>계약 당시 사진·녹취</strong> — 가짜 임대인 모습·신분 진술.</li>\n<li><strong>진짜 소유자 진술서</strong> — \'위임 안 했다\'·\'몰랐다\' 진술.</li>\n<li><strong>부동산 중개대상물 확인·설명서</strong> — 중개사 의무 이행 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개사가 등기부등본 확인 + 진짜 임대인 본인 확인 의무를 제대로 이행했는지가 핵심. 공인중개사법 제25조 의무 위반이면 중개사·공제조합(한국공인중개사협회 1억원 한도)에 손해배상 청구 트랙도 검토 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"진짜 소유자도 묵인했다" 표현대리 다툼</strong> — 가짜 임대인이 진짜 소유자의 형제·자녀 등 친족이면 표현대리(민법 제125조) 가능성. 진짜 소유자가 위임장 위조를 알면서 침묵한 정황 있다면 본인 책임 다툼.</li>\n<li><strong>"중개사는 책임 없다" 주장 반박</strong> — 공인중개사법 제25조 \'중개대상물 확인·설명 의무\'·\'권리관계 확인 의무\' 위반 시 손해배상. 한국공인중개사협회 공제(1억원 한도) 청구 트랙.</li>\n<li><strong>전입신고·확정일자 보호 한계</strong> — 가짜 임대인과의 계약은 무효 영역이라 전입·확정일자가 진짜 소유자에게 대항할 수 없는 사례. 우선변제권 주장 어려움.</li>\n<li><strong>대포통장 입금 한계</strong> — 받은 계좌가 명의도용이면 명의인 회수 한계. 다만 통신사기피해환급법 환급 트랙·잔액 환급은 별개 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>주택임대차분쟁조정위 (LH 1600-1004 / 주택도시보증공사)</strong> — 무료 조정.</li>\n<li><strong>HUG 1566-9009</strong> — 전세보증금 보증 가입 시 이행 청구.</li>\n<li><strong>한국공인중개사협회 02-3489-7300</strong> — 중개사 공제 청구.</li>\n<li><strong>대한법률구조공단 132</strong> — 임대차 무료 상담.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부동산 이중매매·사문서위조 사기 처벌 영역',
        summary:
          '대법원 2017도4027 사건(대법원, 2018.05.17 선고)에서 법원은 부동산 매매 단계에서 매도인이 신임관계를 저버리는 임무위배행위로 제3자에게 이중 처분한 사안을 배임죄로 봤고, 같은 흐름에서 가짜 임대인이 진짜 소유자의 명의를 도용해 임대차계약을 체결하고 보증금을 편취하는 사안은 형법 제347조 사기 + 제231조 사문서위조 + 제234조 위조사문서행사 결합 영역으로 평가될 여지가 있다고 판시했습니다. 또한 대법원 2024도15240 사건은 사문서위조·사기 공모공동정범 성립 요건을 구체화하면서 진짜 소유자가 가짜 임대인의 위조 정황을 알고도 묵인한 경우 공모 또는 표현대리 책임을 다툴 수 있는 영역으로 봤습니다.',
        takeaway: '가짜 임대인 사칭은 사기 + 사문서위조 + 표현대리 결합 영역으로 평가될 여지가 있어, 계약서·신분증·등기부·진짜 소유자 진술을 정리하면 4단계 회수 트랙이 검토 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '진짜 소유자가 \"몰랐다\"고 하면 보증금 못 돌려받나요?',
        answer:
          '<strong>가짜 임대인과의 계약은 무권대리(민법 제130조)로 진짜 소유자 동의 없으면 효력 없는 영역입니다.</strong> 가짜 임대인 본인 책임 + 표현대리 가능성(친족·이전 위임 정황 있을 시) 다툼.',
      },
      {
        question: '전입신고·확정일자 받았는데 보호받나요?',
        answer:
          '<strong>가짜 임대인과의 계약은 진짜 소유자에게 효력 없어 우선변제권 주장이 어려운 영역입니다.</strong> 다만 사기 고소·민사 회수 + HUG 보증 가입 시 보증이행 트랙은 별개.',
      },
      {
        question: '중개사 통해 계약했는데 중개사도 책임지나요?',
        answer:
          '<strong>공인중개사법 제25조 권리관계 확인 의무 위반 시 손해배상 책임이 있는 영역입니다.</strong> 한국공인중개사협회 공제조합 1억원 한도 청구 가능. 중개대상물 확인·설명서 미작성·진짜 임대인 본인 확인 누락이 핵심.',
      },
      {
        question: '가짜 임대인이 진짜 소유자의 형이래요. 표현대리 되나요?',
        answer:
          '<strong>친족 관계 + 진짜 소유자가 평소 위임 사실을 알리거나 묵인한 정황 있으면 표현대리(민법 제125조·제126조) 가능 영역입니다.</strong> 다만 표현대리 입증 책임은 임차인. 평소 친족이 임대 업무 대행한 정황 자료 핵심.',
      },
      {
        question: 'HUG 보증보험 가입 안 했어요. 회수 어렵나요?',
        answer:
          '<strong>HUG 미가입이라도 사기 고소·민사·중개사 공제 트랙이 남아있는 영역입니다.</strong> 받은 계좌 잔액 환급 + 가짜 임대인 자산 가처분이 회수 핵심. 다수 피해자 결합 시 회수율 상승.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '실거주 부동산 이중계약', href: '/guide/fraud/fraud-real-estate-deposit-double-contract' },
      { label: '직거래 가계약금 잠적', href: '/guide/fraud/fraud-real-estate-direct-deal-deposit-vanish' },
      { label: '공인중개사 보증금 횡령', href: '/guide/fraud/fraud-realtor-deposit-embezzlement' },
      { label: '임대 보증금 잠적 신고', href: '/guide/fraud/fraud-rental-deposit-vanish-report' },
      { label: '가짜 매물 사기 대응', href: '/guide/fraud/fraud-rental-fake-listing-response' },
    ],
  },

  // ─── 4. fraud / fraud-mlm-mid-recruiter-falsely-accused ───
  {
    domain: 'fraud',
    slug: 'fraud-mlm-mid-recruiter-falsely-accused',
    keyword: '다단계 폰지 모집책 무고 방어',
    questionKeyword: '다단계 투자 조직에서 모집만 했는데 사기 공범으로 고소됐어요. 어떻게 방어하나요?',
    ctaKeyword: '다단계 모집책 무고 방어 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '다단계 폰지 중간 모집책 — 5가지 무고 방어 트랙 | 로앤가이드',
      description:
        '다단계·폰지 투자 조직 중간 가담자로 고소됐다면 사기 구조 인식 부재·단순 가담 vs 조직 가담 구분 5가지 무고 방어를 지금 확인하세요.',
    },
    intro:
      '<p>"지인이 \'월 10% 보장하는 투자\'라고 해서 본인도 가입하고 친구·가족에게 소개해 모집 수당을 받았어요. 1년 뒤 그 회사가 폰지 사기로 적발됐고 본인도 \'사기 공범\'으로 고소됐습니다." 사실과 다르게 신고되었다면 다단계·폰지 조직의 \'중간 모집책\'으로서 본인은 사기 구조를 몰랐다는 입장이라면 ① 사기 구조 인식 부재 ② 본인도 피해자 정황 ③ 모집 수당 vs 사기 수익 구분 ④ 단순 가담 vs 조직 가담 구분 ⑤ 자수·합의 5가지 무고 방어 트랙을 검토할 수 있는 영역입니다. 대법원 2024도10141·2007도10804 판결은 \'사기 공모공동정범\'에서 본인 가담 행위가 \'기망 구조를 인식했는지\'가 핵심이라고 봤고, \'외형상 일부 행위에 가담했더라도 사기 구조를 몰랐다면 고의 부정\'이 가능한 영역으로 평가했어요.</p>',
    sections: [
      {
        title: 'Q. 다단계 모집책 무고 방어 5가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 인식 부재·본인 피해·수당 구분·역할 한정·자수 5축으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사기 구조 인식 부재 입증</strong> — 본인이 \'정상 투자\'로 알았다는 정황. 회사 IR 자료·사업설명회 영상·금감원 등록 여부 확인 노력. 대법원 2024도10141은 \'기망방법을 구체적으로 몰랐던 경우 공모관계 다툼 영역\'으로 봤습니다.</li>\n<li><strong>② 본인도 피해자 정황</strong> — 본인 투자금 + 가족·지인 피해도 함께 입은 정황. 사기 가해자라면 본인 자금 안 넣을 가능성이 높은 영역.</li>\n<li><strong>③ 모집 수당 vs 사기 수익 구분</strong> — 받은 수당이 정상 다단계(방문판매법 등록업체) 수당 구조인지, 폰지 자금세탁 수익인지 구분. 수당 구조 + 회사 등록 정황 핵심.</li>\n<li><strong>④ 단순 가담 vs 조직 운영 가담 구분</strong> — 본인이 회사 임원·자금 운용 관여 없고 단순 모집·홍보만 했다면 \'단순 가담\'. 대법원 2007도10804는 \'역할 한정\' 정황이 양형·고의 다툼 영역으로 봤습니다.</li>\n<li><strong>⑤ 자수·환급 협력 + 합의</strong> — 본인 받은 수당 환급 의사 + 피해자 합의. 양형 감경 + 처분 경감 핵심 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다단계·폰지 사건의 \'중간 모집책\' 무고 방어는 ① 본인 인식 ② 본인 피해 ③ 수당 구조 ④ 역할 한정 4축이 결합되면 처분 경감·고의 부정 다툼이 검토되는 영역. 회사 정상성 확인 노력(금감원·공정위 등록 조회 흔적)이 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 무고 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 본인 피해 정리 → 변호인 검토 → 조사 출석 → 합의 협력 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 투자 영수증·수당 입금 내역·회사 IR 자료·사업설명회 자료·금감원·공정위 조회 흔적·지인 모집 카톡.</li>\n<li><strong>2단계 — 본인 피해 정리 (1주 내)</strong> — 본인·가족·지인 피해 합산. 본인이 가해자가 아니라 피해자 + 모집책 영역임을 시간순 정리.</li>\n<li><strong>3단계 — 변호인 검토 (조사 전 권장)</strong> — 사기 공모공동정범은 입증 다툼이 결정적이라 변호인 동행 권장. 자격 시 대한법률구조공단 132 무료 상담.</li>\n<li><strong>4단계 — 경찰·검찰 조사 출석 (10~14일 내)</strong> — 인식 부재·본인 피해·수당 구분·역할 한정 4축 진술 일관성. 변호인 의견서 동반.</li>\n<li><strong>5단계 — 자수·환급·합의 (송치~기소 전)</strong> — 본인 수당 환급 + 피해자 합의 + 자수 감경. 검찰 처분 경감 핵심. 양형 감경 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 혐의 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다단계 모집책 무고 방어 5단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인 인식 자료 + 본인 피해 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 투자 영수증·이체 내역</strong> — 본인 자금 투입 정황.</li>\n<li><strong>가족·지인 투자 내역</strong> — 본인이 모집한 사람도 피해자 정황.</li>\n<li><strong>회사 IR 자료·사업설명회 영상</strong> — \'정상 사업\' 정황 자료.</li>\n<li><strong>금감원·공정위 조회 흔적</strong> — 회사 등록 여부 확인 노력.</li>\n<li><strong>본인 받은 수당 입금 내역</strong> — 수당 구조 + 정기성·금액.</li>\n<li><strong>회사 직원·임원과의 카톡</strong> — 본인 역할 한정 정황.</li>\n<li><strong>지인 모집 카톡·홍보 자료</strong> — 본인이 모집 시 사용한 표현(정상 투자 인식).</li>\n<li><strong>본인 거주·직업·소득 자료</strong> — 사기 조직 임원 아님 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 가입 전 금감원 \'금융회사 정보\'·공정위 \'직접판매업 등록\' 조회 흔적이 \'정상성 확인 노력\'의 강력한 자료. 카톡·검색 기록 보존이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"수당 받았으니 공범" 주장 반박</strong> — 정상 다단계도 모집 수당 구조라서 수당만으로 사기 공범 단정 어려운 영역. 수당 구조 + 회사 정상성 확인 노력 입증.</li>\n<li><strong>"많은 사람을 모집했으니 알았을 것" 주장 반박</strong> — 모집 인원수만으로 인식 부재 부정 어려운 영역. 본인이 회사 임원·자금 운용 관여 없는 정황 + 본인 피해자 정황 입증.</li>\n<li><strong>"회사가 폰지인 것을 의심했어야" 주장 반박</strong> — 일반 투자자가 폰지 구조를 식별하기 어려운 영역. 금감원 등록·언론 보도·다른 투자자 정황 결합 분석.</li>\n<li><strong>본인 수당 환급 + 합의 핵심</strong> — 자수 감경(보험사기방지법 등 별개 규정) + 피해자 합의가 양형 감경 결정적 영역. 형사조정·변상도 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 사기 형사 방어 무료 상담 (자격 시 무료 변론).</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시 국선 선임.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong> — 본인 피해도 별도 신고.</li>\n<li><strong>금융감독원 1332</strong> — 유사수신·다단계 회사 정보 조회.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 공모공동정범의 인식·역할 한정 다툼',
        summary:
          '대법원 2024도10141 사건(대법원, 2024.12.12 선고)에서 법원은 사기 공모공동정범에 대하여 \'기망방법을 구체적으로 몰랐던 경우에도 공모관계가 인정될 수 있으나, 외형적으로 일부의 행위를 실행하였더라도 자신의 행위가 범죄에 이용된다는 사실을 모르고 행위에 나아간 경우에는 고의가 없어 죄책을 물을 수 없다\'고 판시했습니다. 또한 \'공모사실이나 고의 인정 여부는 의사연락 내용·연락수단·업무 위탁 경위·문서의 정상성·보수 정도·피고인의 나이·지능·경력 등 여러 사정을 종합 고려한다\'고 봤어요. 다단계·폰지 조직 중간 모집책 사안에서 본인이 회사 임원이 아니고 단순 모집만 했으며 본인·가족도 피해를 입은 정황이라면 인식·고의 다툼 트랙이 검토 가능한 영역입니다.',
        takeaway: '다단계 모집책 무고 방어는 사기 구조 인식 부재·본인 피해·역할 한정·수당 구조 4축 결합 입증 영역으로, 회사 정상성 확인 흔적·본인 투자 자료·모집 표현을 정리하면 처분 경감·고의 부정 트랙이 열리는 사례입니다.',
      },
    ],
    faq: [
      {
        question: '본인도 1억원 투자해서 손해 봤는데 공범으로 고소됐어요',
        answer:
          '<strong>본인 피해 정황은 \'사기 가해자가 아닌 피해자\' 입증의 강력한 자료입니다.</strong> 본인 투자 영수증·손해 자료 정리 + 사기 구조 인식 부재 결합 입증.',
      },
      {
        question: '수당을 1,000만원 받았는데 환급해야 하나요?',
        answer:
          '<strong>받은 수당 환급 의사 표시는 양형 감경 + 처분 경감 핵심 영역입니다.</strong> 자진 환급은 자수·반성 정황으로 평가될 수 있어 유리. 변호사 자문 후 결정.',
      },
      {
        question: '지인을 모집한 게 가장 큰 부담이에요',
        answer:
          '<strong>지인 피해자와의 합의 + 사과 + 변상이 결정적입니다.</strong> 지인이 본인도 피해자라고 인정해주는 진술서가 강력. 형사조정도 적극 검토.',
      },
      {
        question: '회사 임원과는 거의 만난 적도 없는데요',
        answer:
          '<strong>회사 운영·자금 관여 없는 정황은 단순 가담 입증의 핵심입니다.</strong> 회사 임원과의 카톡·만남 기록 부재 + 본인 역할 한정 정황을 시간순 정리.',
      },
      {
        question: '변호사 비용이 부담스러워요',
        answer:
          '<strong>대한법률구조공단 132 무료 상담을 먼저 검토해보세요.</strong> 소득·재산 요건 충족 시 무료 변론 가능 영역. 사안에 따라 국선변호인 선정 검토도 가능.',
      },
    ],
    cta: { text: '혐의 대응 순서, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 누명 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 공범 무지 방어', href: '/guide/fraud/fraud-accomplice-unknowing-defense' },
      { label: '편취의사 부정 항변', href: '/guide/fraud/fraud-charge-rebuttal' },
      { label: '투자유치 다단계 사기', href: '/guide/fraud/fraud-investment-mlm-structure' },
      { label: '사기 합의·감경 효과', href: '/guide/fraud/fraud-accused-settlement-penalty' },
    ],
  },

  // ─── 5. fraud / fraud-voice-phishing-account-lender-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-voice-phishing-account-lender-defense',
    keyword: '보이스피싱 통장 명의대여 무고 방어',
    questionKeyword: '아르바이트 한다며 통장만 빌려줬는데 보이스피싱 사기방조로 고소됐어요. 어떻게 방어하나요?',
    ctaKeyword: '통장 명의대여 무고 방어 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '보이스피싱 통장 명의대여 — 사기방조 무고 방어 5가지 | 로앤가이드',
      description:
        '아르바이트로 알고 통장·체크카드만 빌려줬는데 보이스피싱 사기방조로 고소됐다면 인식 부재·역할 한정 5가지 무고 방어를 지금 확인하세요.',
    },
    intro:
      '<p>"\'재택 알바\' 광고를 보고 통장·체크카드를 보내주면 일당 5만원을 준다고 해서 보냈어요. 며칠 뒤 경찰에서 \'보이스피싱 사기방조 + 전자금융거래법 위반\'으로 출석 요구가 왔습니다." 사실과 다르게 신고되었다면 본인이 보이스피싱 조직의 자금세탁 구조를 몰랐다는 입장이라면 ① 사기 구조 인식 부재 ② 통장만 빌려줬을 뿐 현금수거 불가담 ③ 알바 광고 정상성 확인 노력 ④ 본인도 명의도용 피해 ⑤ 자수·반성 5가지 무고 방어 트랙이 검토 영역입니다. 다만 대법원 2017도17628·2024도10141 판결은 \'통장 양도·대여\' 자체가 전자금융거래법 제6조 위반(독립한 처벌 대상)이라 \'사기방조 무죄\'와 별개로 전금법 위반 처벌은 별개 트랙임을 유의해야 하는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 통장 명의대여 무고 방어 5가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 인식 부재·역할 한정·정상성 확인·본인 피해·자수 5축으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사기 구조 인식 부재 입증</strong> — 본인이 \'재택 알바\' \'세금 환급 절차\'로 알았다는 정황. 광고 캡처·문자 메시지·면접 기록·사업자 정보 확인 노력 자료. 대법원 2024도10141은 \'기망방법을 구체적으로 몰랐던 경우 공모관계 다툼\' 영역으로 봤습니다.</li>\n<li><strong>② 통장만 빌려줬을 뿐 현금수거 불가담</strong> — 본인이 직접 피해자 만나 현금 수거하지 않은 정황. 사기 조직과의 의사연락 한정·역할 분리.</li>\n<li><strong>③ 알바 광고 정상성 확인 노력</strong> — 광고 게재 사이트(알바천국·잡코리아 등) + 사업자등록 조회·면접 정황. 정상 알바로 알았다는 인식 자료.</li>\n<li><strong>④ 본인도 명의도용 피해 정황</strong> — 통장이 사기 조직에 의해 본인 모르게 추가 사용된 정황. 카드 분실 신고·계좌 정지 시도 기록.</li>\n<li><strong>⑤ 자수·반성 + 환수 협력</strong> — 사실 인지 직후 통장·카드 회수 시도, 경찰 자수, 피해자 변상 의사. 양형 감경 결정적 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통장 명의대여 사안은 \'사기방조\'와 \'전자금융거래법 위반\' 두 트랙. 사기방조는 인식·고의 다툼 영역이라 무죄 가능성 검토되지만, 전금법 위반(통장 양도·대여 자체)은 본인 행위만으로 성립하는 영역이라 별도 처분 트랙. 두 갈래 동시 대응 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 무고 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 통장·카드 회수 → 변호인 검토 → 조사 출석 → 자수·합의 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 알바 광고 캡처·문자·카톡 채용 대화·통장 송부 정황·받은 일당 입금 내역·면접 기록.</li>\n<li><strong>2단계 — 통장·카드 즉시 회수·정지 (인지 직후)</strong> — 은행에 분실 신고·계좌 정지·체크카드 사용중지 신청. 추가 피해 차단 정황 자료.</li>\n<li><strong>3단계 — 변호인 검토 (조사 전 권장)</strong> — 전금법 위반은 본인 책임 + 사기방조는 인식 다툼이라 양 트랙 동시 대응. 대한법률구조공단 132 무료 상담.</li>\n<li><strong>4단계 — 경찰·검찰 조사 출석 (10~14일 내)</strong> — 인식 부재·역할 한정·정상성 확인 노력 4축 진술 일관성. 변호인 의견서 동반.</li>\n<li><strong>5단계 — 자수·합의·환수 (송치~기소 전)</strong> — 받은 일당 환수 + 피해자 변상 의사 + 자수. 처분 경감 핵심. 양형 감경 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 혐의 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">통장 명의대여 무고 방어 5단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인 인식 자료 + 회수 노력 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>알바 광고 캡처</strong> — 게재 사이트·문구·구인자 정보·게시 시점.</li>\n<li><strong>채용 카톡·문자 대화</strong> — 면접·업무 안내·통장 송부 요청 정황.</li>\n<li><strong>통장·카드 송부 정황</strong> — 택배·등기 영수증·송부 시점.</li>\n<li><strong>받은 일당 입금 내역</strong> — 금액·횟수·입금 명의.</li>\n<li><strong>분실신고·계좌 정지 신청 자료</strong> — 인지 직후 회수 노력 정황.</li>\n<li><strong>본인 직업·소득·연령 자료</strong> — 사기 조직 임원 아님 정황.</li>\n<li><strong>구인자·중개자 신원 자료</strong> — 카톡 ID·전화번호·계좌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 광고 게재 사이트가 알바천국·잡코리아 등 정상 채용 플랫폼이고 \'고수익 재택 알바\'·\'세금 환급 보조\' 등의 표현이었다면 \'정상 알바로 알았다\'는 인식 부재 정황이 강력. 당시 검색·확인 기록도 결합 보존.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"통장 빌려줬으니 사기 공범" 주장 반박</strong> — 통장 대여만으로 사기방조 단정 어려운 영역. 사기 구조 인식 입증이 검찰 책임. 본인 인식 부재 정황 + 역할 한정 자료 입증.</li>\n<li><strong>전금법 제6조 별개 처벌 주의</strong> — 통장 양도·대여 자체는 인식과 무관하게 처벌 가능 영역. 다만 \'재택 알바로 알고 빌려줬다\'는 정황은 양형 감경 핵심 영역. 변호인 동행 진술 안전.</li>\n<li><strong>"여러 번 빌려줬으니 알았을 것" 주장 반박</strong> — 횟수만으로 인식 부정 어려운 영역. 매 회 \'정상 알바\'로 인식한 정황 입증. 대법원 2024도10141 판단 기준 활용.</li>\n<li><strong>본인 변상·자수가 결정적</strong> — 받은 일당 환수 + 피해자 합의 + 자수. 양형 감경 + 처분 경감 결정적. 형사조정·변상도 적극 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담 (자격 시 무료 변론).</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시 국선 선임.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong> — 본인 명의도용 피해도 별도 신고.</li>\n<li><strong>금융감독원 1332</strong> — 보이스피싱·통장 명의대여 안내.</li>\n<li><strong>KISA 118</strong> — 사칭·악성 앱 신고.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 가담자 인식·고의 다툼 영역',
        summary:
          '대법원 2024도10141 사건(대법원, 2024.12.12 선고)에서 법원은 \'전화 등 전기통신수단을 이용한 금융사기 조직범죄(보이스피싱)에서 가담자의 공모사실이나 범의는 다른 공범과 순차적으로 또는 암묵적으로 상통함으로써 범죄에 공동가공하여 범죄를 실현하려는 의사가 결합되어 피해자의 현금을 수거한다는 사실을 인식하는 것으로 족하다. 이러한 인식은 미필적인 것으로도 충분\'하다고 보면서, 동시에 \'외형적으로 볼 때 피고인이 범죄를 구성하는 일부의 행위를 실행하였음에도 자신의 행위가 범죄에 이용된다는 사실을 모르고 그 행위를 하였을 뿐이라면 고의가 없어 죄책을 물을 수 없다\'고 판시했습니다. 통장 명의대여 사안은 의사연락 내용·연락수단·업무 위탁 경위·보수 정도·피고인의 나이·지능·경력 등 여러 사정의 종합 판단 영역입니다.',
        takeaway: '통장 명의대여는 사기방조 인식 다툼 + 전금법 위반 별개 처벌 두 트랙 결합 영역으로, 알바 광고·채용 대화·회수 노력 자료를 정리하면 사기방조 무죄 + 전금법 양형 감경 트랙이 검토되는 사례입니다.',
      },
    ],
    faq: [
      {
        question: '\"재택 알바\"인 줄 알았는데 사기방조 처벌받나요?',
        answer:
          '<strong>인식 부재 정황 입증 시 사기방조 무죄 가능성이 검토되는 영역입니다.</strong> 다만 통장 양도·대여 자체는 전금법 제6조 별개 처벌이라 양 트랙 동시 대응 필수.',
      },
      {
        question: '받은 일당 30만원은 어떻게 해야 하나요?',
        answer:
          '<strong>자진 환수가 양형 감경 핵심입니다.</strong> 받은 일당 + 추가 피해자 변상 의사 표시 + 자수. 변호사 자문 후 시점 결정.',
      },
      {
        question: '경찰에서 \"여러 번 빌려줬으니 알았을 것\"이라고 추궁해요',
        answer:
          '<strong>횟수만으로 인식 부정은 어려운 영역입니다.</strong> 매 회 \'정상 알바\'로 인식한 정황 + 매 회 다른 광고·구인자 정황 + 회사 정상성 확인 노력 결합 입증.',
      },
      {
        question: '내 통장으로 갑자기 큰 돈이 들어왔다 빠진 게 보이는데요',
        answer:
          '<strong>그 시점에 즉시 분실신고·계좌 정지가 \'명의도용 피해\' 정황 자료입니다.</strong> 인지 직후 회수 노력은 양형 감경 + 사기방조 무죄 다툼 핵심.',
      },
      {
        question: '변호사 비용이 부담스러워요',
        answer:
          '<strong>대한법률구조공단 132 무료 상담을 먼저 검토해보세요.</strong> 소득·재산 요건 충족 시 무료 변론 가능 영역. 전금법 위반은 정식기소 비율 높아 변호인 동행 권장.',
      },
    ],
    cta: { text: '혐의 대응 순서, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 자금세탁 방어', href: '/guide/fraud/fraud-voice-phishing-money-laundering-defense' },
      { label: '보이스피싱 현금수거책 방어', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '대포통장 명의대여 방어', href: '/guide/fraud/fraud-money-mule-accused-defense' },
      { label: '사기 공범 무지 방어', href: '/guide/fraud/fraud-accomplice-unknowing-defense' },
      { label: '사기 누명 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
    ],
  },
];
