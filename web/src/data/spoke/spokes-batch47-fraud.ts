import { SpokePage } from '../spoke-pages';

// batch47 fraud 5개: 국제결혼 로맨스 스캠 + 딥페이크 투자사기 + 공인중개사 계약금 횡령 + 명품 짝퉁 중고거래 + 투자자문업 무자격 사기
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 SNS·데이팅앱에서 만난 외국인이 투자·결혼 명목으로 해외 송금을 유도한 로맨스 스캠 피해자가 피해 회복 절차와 증거 정리를 준비하도록 돕는 페이지다.
// 2. 이 페이지는 딥페이크로 합성된 유명인 영상 광고를 보고 투자 플랫폼에 입금했다가 출금이 막힌 피해자가 자금 동결과 신고 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 공인중개사가 계약금을 수령한 뒤 소유권이전을 완료하지 않거나 자금을 횡령한 정황을 겪은 피해자가 형사 고소와 손해배상 순서를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 중고거래 플랫폼에서 명품 진품으로 속은 뒤 짝퉁임을 알게 된 피해자가 환불·고소 가능성과 대응 순서를 확인하도록 돕는 페이지다.
// 5. 이 페이지는 자본시장법상 투자자문업 등록 없이 수익 보장·선취 수수료를 요구한 무자격 브로커 피해자가 신고와 민사 회수 절차를 정리하도록 돕는 페이지다.

export const spokesBatch47Fraud: SpokePage[] = [
  // ─── 1. fraud / romance-international-marriage-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-international-romance-marriage-recovery',
    keyword: '국제결혼 로맨스 스캠 피해 회복',
    questionKeyword: 'SNS에서 만난 외국인이 결혼하자며 투자 명목으로 해외 송금을 요구했는데 사기인가요?',
    ctaKeyword: '로맨스 스캠 피해 대응 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '국제결혼 로맨스 스캠 피해 회복 4단계 절차 | 로앤가이드',
      description:
        'SNS·데이팅앱에서 만난 외국인이 결혼·투자 명목으로 해외 송금을 유도했다면 지금 해야 할 절차 4단계를 확인하세요.',
    },
    intro:
      '<p>"3개월간 매일 연락하며 결혼 약속까지 했는데, 투자 플랫폼에 돈을 넣으라더니 연락이 끊겼습니다." 로맨스 스캠은 피해자 스스로 의심하기 어렵다는 점을 악용해 수백만~수천만 원을 빼앗는 수법입니다. 해외 계좌로 빠져나간 돈이라도 초기 자금 동결과 형사 신고 절차를 밟으면 일부 회수 가능성을 검토해볼 수 있습니다. 송금 증거와 대화 기록을 지금 바로 정리해두는 것이 첫 번째 단계입니다.</p>',
    sections: [
      {
        title: '로맨스 스캠 피해 확인 — 어떤 특징이 있나요',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 패턴이 겹치면 로맨스 스캠 피해로 볼 가능성이 높습니다.</strong></p>\n<ul>\n<li><strong>과도한 관심 공세</strong> — 만남 첫날부터 매일 연락, 2~4주 만에 결혼·사랑 고백.</li>\n<li><strong>직접 만남 거부</strong> — 화상통화 거부, 영상 통화 시 얼굴 흐림·짧은 연결 끊김.</li>\n<li><strong>투자·사업 권유</strong> — "나만 아는 플랫폼", "원금 보장 수익률 30%", 해외 법인 계좌로 입금 유도.</li>\n<li><strong>출금 지연 후 연락 두절</strong> — 수익이 쌓인 것처럼 보이지만 인출 시 "세금·인증비" 추가 요구 후 연락 차단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 특정경제범죄 가중처벌 등에 관한 법률 제3조에 따라 5억원 이상 편취 시 3년 이상 유기징역으로 가중 처벌됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 로맨스 스캠 피해 회복 4단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 ECRM·금감원 공식 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래 계좌 지급정지 신청 (즉시)</strong> — 국내 송금 경유 계좌가 있다면 112 또는 해당 은행에 즉시 지급정지 신청. 잔액이 남아야 환급 가능.</li>\n<li><strong>2단계 — 경찰 사이버수사팀 신고 (3일 이내)</strong> — ecrm.police.go.kr 또는 관할 경찰서 사이버수사팀 방문. 피해 경위, SNS 대화 캡처, 이체내역 첨부.</li>\n<li><strong>3단계 — 사건사고사실확인원 발급 + 은행 피해구제 신청</strong> — 경찰 확인원 발급 후 송금 은행에 피해구제신청서 제출. 해외 직접 송금이면 외환 사기 피해로 별도 신청.</li>\n<li><strong>4단계 — 금감원 분쟁조정 또는 민사 가압류 검토 (2개월 내)</strong> — 국내 계좌 경유 시 금감원 1332 상담 후 채권소멸공고 절차 진행. 해외 계좌면 국제 형사공조 방향 검토 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 경로·피해 금액·증거 상태에 따라 달라지는 대응 순서를 AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">사기 피해 대응 확인 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">경찰 신고 및 은행 피해구제 신청 시 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>SNS·채팅 대화 전체 캡처</strong> — 결혼 약속, 투자 권유, 입금 요청 메시지 포함.</li>\n<li><strong>이체확인증·해외 송금 확인서</strong> — 은행 앱 또는 창구에서 발급 (수취 계좌 포함).</li>\n<li><strong>투자 플랫폼 화면 캡처</strong> — 잔액 표시, 인출 불가 메시지, 추가 비용 요구 화면.</li>\n<li><strong>가해자 프로필 정보</strong> — SNS 계정명, 사용 전화번호, 이메일, 사용 사진(역방향 이미지 검색 결과).</li>\n<li><strong>신분증 사본 + 진술서</strong> — 피해 경위 2~3페이지 자필 또는 워드 작성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 가해자 계정을 차단·삭제하면 증거가 사라집니다. 신고 전까지 계정 유지 + 전체 대화 캡처가 우선입니다.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr (직접 피해자 본인만 가능)</li>\n<li><strong>금융감독원 보이스피싱 피해구제</strong> — 1332 (국번없이) / fss.or.kr</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시, 무료 법률상담)</li>\n<li><strong>한국인터넷진흥원(KISA) 보호나라</strong> — 118 / boho.or.kr (해킹·스미싱 동반 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 송금 사기와 재산국외도피죄의 성립 요건',
        summary:
          '대법원 2025도8824 사건(대법원, 2025.09.25 선고)에서 법원은 특정경제범죄법 제4조의 재산국외도피죄는 국내 재산을 해외로 이동하여 대한민국 법률과 제도의 규율을 받지 않는 상태로 두는 행위라는 인식이 있어야 성립한다고 판시했습니다. 로맨스 스캠 조직이 사기 피해금을 국외로 빼돌린 경우 가중처벌 소지가 있다는 점에서 중요한 기준이 됩니다.',
        takeaway: '해외 계좌로 빠진 사기 피해금은 형사·국제공조 절차를 함께 검토하는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '해외 계좌로 송금했는데 돈을 돌려받을 수 있나요?',
        answer:
          '<strong>국내 중간 계좌 경유 여부가 핵심입니다.</strong> 국내 계좌를 거쳤다면 지급정지 + 피해구제 절차로 일부 회수를 검토해볼 수 있어요. 직접 해외 계좌로 간 경우는 국제 형사공조가 필요해 회수가 어렵습니다.',
      },
      {
        question: '피해 금액이 100만원인데도 신고해야 하나요?',
        answer:
          '<strong>소액이라도 신고하는 것이 좋습니다.</strong> 조직 사기 피해는 합산해 형량이 가중되고, 신고 이력이 있어야 보험·세금 관련 손실 처리에도 활용됩니다.',
      },
      {
        question: '상대방이 외국 국적인데 처벌이 가능한가요?',
        answer:
          '<strong>국내에서 피해가 발생한 경우 국내 형법이 적용됩니다.</strong> 다만 가해자가 해외 체류 중이라면 실질적 처벌에는 시간이 걸리고, 국제 형사공조 조약이 체결된 국가에 한해 협조가 가능합니다.',
      },
      {
        question: '이미 연락이 끊긴 계정 정보로 수사가 가능한가요?',
        answer:
          '<strong>IP·이체 계좌·계정 식별정보로 조사가 가능합니다.</strong> 경찰 사이버수사팀이 해당 플랫폼에 IP 및 가입정보 제공 협조를 요청할 수 있어요. 대화 캡처와 계좌번호를 보전해두는 것이 중요합니다.',
      },
      {
        question: '민사 소송도 병행할 수 있나요?',
        answer:
          '<strong>형사 고소와 민사 손해배상 청구는 동시에 진행할 수 있습니다.</strong> 가해자의 국내 재산이 확인되면 가압류 신청도 검토해볼 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 피해 환급 절차', href: '/guide/fraud/fraud-voice-phishing-recovery-comprehensive' },
      { label: '해외 투자 사기 대응 순서', href: '/guide/fraud/fraud-investment-scam-response' },
      { label: '사기 고소 준비서류 정리', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '전기통신금융사기 지급정지', href: '/guide/fraud/fraud-telecom-financial-payment-suspension' },
      { label: '사기 피해 합의금 산정', href: '/guide/fraud/fraud-settlement-amount-calculation' },
    ],
  },

  // ─── 2. fraud / deepfake-celebrity-investment-relief ───
  {
    domain: 'fraud',
    slug: 'fraud-deepfake-celebrity-investment-relief',
    keyword: '딥페이크 셀럽 투자 사기 피해 구제',
    questionKeyword: '유명 연예인 딥페이크 영상 광고를 보고 투자 플랫폼에 돈을 넣었는데 출금이 안 됩니다',
    ctaKeyword: '딥페이크 투자 사기 피해 신고 절차 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '딥페이크 셀럽 투자 사기 피해 구제 5단계 | 로앤가이드',
      description:
        '딥페이크 합성 유명인 광고에 속아 투자 플랫폼에 입금 후 출금이 막혔다면 지금 해야 할 신고·지급정지 5단계를 확인하세요.',
    },
    intro:
      '<p>"○○배우가 직접 추천한다는 투자 플랫폼 영상을 봤어요. 수익이 계속 쌓이는 것 같았는데, 출금하려 하니 갑자기 &ldquo;세금 납부 후 출금 가능&rdquo;이라고 뜨더니 연락이 끊겼습니다." 딥페이크 셀럽 투자 사기는 SNS 광고 알고리즘과 AI 합성 기술을 결합해 피해자를 빠르게 속입니다. 플랫폼 자체가 가짜이므로 수익 화면도 허구이고, 추가 입금 요구에 응할수록 피해가 커집니다. 입금 계좌와 대화 기록을 지금 바로 보전하는 것이 가장 시급합니다.</p>',
    sections: [
      {
        title: '딥페이크 투자 사기 확인 — 어떤 구조인가요',
        content:
          '<p><strong style="color:#1e3a5f">아래 흐름이 보이면 딥페이크 투자 사기 구조일 가능성이 높습니다.</strong></p>\n<ul>\n<li><strong>SNS 광고 유입</strong> — 유명 연예인·경제 전문가 딥페이크 영상 → 카카오톡·텔레그램 채널로 유도.</li>\n<li><strong>소액 테스트 후 수익 발생</strong> — 처음엔 소액 투자 후 "수익 발생" 화면 제공(실제 없음).</li>\n<li><strong>추가 입금 요구 반복</strong> — "VIP 멤버십 필요", "세금 예치금", "출금 보증금" 명목으로 반복 입금 요구.</li>\n<li><strong>출금 차단 후 연락 두절</strong> — 일정 금액 이상 투자되면 출금 거부 후 운영 계정 폐쇄.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상 투자 플랫폼은 출금 시 세금·보증금을 추가 납부하도록 요구하지 않습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 피해 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 ECRM·금감원 피해구제 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지 즉시 신청</strong> — 입금한 은행 또는 112에 해당 계좌 즉시 지급정지 요청. 잔액이 있어야 환급 가능 (분 단위 대응).</li>\n<li><strong>2단계 — 경찰 신고 + 사건사고사실확인원 발급</strong> — ecrm.police.go.kr 또는 관할 사이버수사팀. 딥페이크 광고 스크린샷, 이체 내역, 채팅 대화 첨부.</li>\n<li><strong>3단계 — 은행 피해구제 신청</strong> — 확인원 발급 후 피해 계좌 관리 은행에 피해구제신청서·이체내역·신분증 제출.</li>\n<li><strong>4단계 — 금감원 채권소멸 공고 (공고일 + 2개월)</strong> — 금감원이 채권소멸 공고를 진행하면 2개월 후 잔액 범위 내에서 환급 결정 가능.</li>\n<li><strong>5단계 — KISA 딥페이크 신고 병행</strong> — 118 또는 boho.or.kr 에 딥페이크 광고 신고. 영상 확산 차단 요청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">피해 금액·입금 방법에 따라 신고 경로가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">사기 피해 대응 확인 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 + 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">신고 전 아래 자료를 정리해두면 수사 협조가 빨라집니다.</strong></p>\n<ul>\n<li><strong>딥페이크 광고 영상·스크린샷</strong> — SNS 게시물 URL 포함, 동영상 저장.</li>\n<li><strong>카카오톡·텔레그램 대화 전체 캡처</strong> — "수익 발생", "세금 납부" 요구 메시지 포함.</li>\n<li><strong>이체확인증</strong> — 입금 일시·계좌번호 포함된 은행 이체 확인서.</li>\n<li><strong>투자 플랫폼 화면 캡처</strong> — 잔액 화면, 출금 불가 메시지, 추가 납부 요구 화면.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "세금 납부하면 출금해준다"는 말에 추가 입금하면 피해가 배가됩니다. 어떤 명목이든 추가 입금 즉시 중단하고 신고가 우선입니다.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 상담 경로를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182 (사이버범죄 신고)</li>\n<li><strong>금융감독원</strong> — 1332 / fss.or.kr (보이스피싱·투자사기 피해구제)</li>\n<li><strong>KISA 보호나라</strong> — 118 / boho.or.kr (딥페이크 광고 신고)</li>\n<li><strong>대한법률구조공단</strong> — 132 (무료 법률상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기 피해구제 적용 범위',
        summary:
          '대법원 2024도6831 사건(대법원, 2024.10.25 선고)에서 법원은 전기통신을 이용해 타인을 기망해 자금을 송금·이체하도록 한 행위는 전기통신금융사기에 해당하며, 투자 서비스 제공을 가장한 행위도 원칙적으로 피해구제 신청 대상에 포함될 수 있다고 판시했습니다.',
        takeaway: '딥페이크 투자 사기도 전기통신금융사기에 해당해 피해구제 절차를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '플랫폼 자체가 가짜인데 수사가 가능한가요?',
        answer:
          '<strong>입금 계좌 추적으로 수사가 진행됩니다.</strong> 플랫폼 주소(가짜여도)·이체 계좌·IP 정보를 경찰이 추적할 수 있어요. 대화 캡처와 이체 계좌번호를 반드시 보전해두세요.',
      },
      {
        question: '코인·가상자산으로 입금했는데도 환급이 가능한가요?',
        answer:
          '<strong>코인 직접 송금은 전기통신금융사기 환급 대상에서 제외될 수 있습니다.</strong> 형사 고소 + 민사 가압류 경로를 별도로 검토하는 것이 좋습니다.',
      },
      {
        question: '딥페이크에 사용된 연예인은 고소할 수 있나요?',
        answer:
          '<strong>연예인 본인은 피해자이므로 직접 고소 대상이 아닙니다.</strong> 딥페이크 제작·유포자를 정보통신망법 위반 + 사기 공범으로 고소하는 구조입니다.',
      },
      {
        question: '피해 금액이 500만원인데도 구제 신청이 의미 있나요?',
        answer:
          '<strong>소액도 신고하는 것이 좋습니다.</strong> 동일 계좌 피해자가 여럿이면 합산 처리되어 환급 우선순위가 높아지고, 신고 이력이 법원·세무 처리에도 활용됩니다.',
      },
      {
        question: '이미 2개월이 지났는데 신고해도 늦지 않나요?',
        answer:
          '<strong>형사 고소 시효(7년)는 충분합니다.</strong> 다만 환급 절차는 계좌 잔액이 남아 있어야 하므로 시간이 지날수록 회수 가능성이 줄어듭니다. 지금 바로 신고하는 것이 좋습니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 지급정지 절차', href: '/guide/fraud/fraud-voice-phishing-recovery-comprehensive' },
      { label: '사기 피해 증거 수집 순서', href: '/guide/fraud/fraud-evidence-collection-order' },
      { label: '전기통신금융사기 환급 신청', href: '/guide/fraud/fraud-telecom-financial-payment-suspension' },
      { label: '코인 사기 피해 대응', href: '/guide/fraud/fraud-crypto-rug-pull-evidence' },
      { label: '투자 사기 유형별 대응', href: '/guide/fraud/fraud-investment-scam-response' },
    ],
  },

  // ─── 3. fraud / realtor-deposit-embezzlement ───
  {
    domain: 'fraud',
    slug: 'fraud-realtor-deposit-embezzlement',
    keyword: '공인중개사 계약금 횡령 피해',
    questionKeyword: '공인중개사가 계약금을 받아 놓고 소유권이전을 미루거나 잠적했는데 어떻게 해야 하나요?',
    ctaKeyword: '공인중개사 사기 피해 대응 절차 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '공인중개사 계약금 횡령 5가지 대응 포인트 | 로앤가이드',
      description:
        '공인중개사가 계약금을 수령한 뒤 소유권이전 없이 잠적했다면 형사 고소·손해배상·공제조합 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"중개사가 매도인 대리인이라며 계약금을 직접 받아 가더니 이후 연락이 끊겼어요. 등기부를 떼보니 소유권은 아직 매도인 명의입니다." 공인중개사를 통한 계약금 횡령은 신뢰 기반을 악용하는 전형적 부동산 사기입니다. 형법상 사기죄·횡령죄 고소와 함께 공인중개사 공제조합을 통한 손해보전 절차를 병행하면 피해 회복 가능성을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공인중개사 사기인지 어떻게 확인하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 3가지를 즉시 확인해보세요.</strong></p>\n<ul>\n<li><strong>등기부등본 열람</strong> — 계약 후 소유권이전이 실제로 진행됐는지, 가등기·가압류가 붙었는지 확인. 인터넷등기소(iros.go.kr)에서 1,000원에 발급 가능.</li>\n<li><strong>공인중개사 등록 조회</strong> — 국토교통부 부동산중개업자 조회 시스템에서 자격 유효 여부, 중개사무소 폐업 여부 확인.</li>\n<li><strong>계약금 수취 계좌 확인</strong> — 계약금을 매도인 계좌가 아닌 중개사 개인 계좌로 받은 경우 횡령 정황이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공인중개사법 제30조에 따라 중개업자는 고의·과실로 발생한 손해를 배상할 의무가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 형사 고소와 민사 청구를 어떻게 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사 고소와 민사 손배 청구를 동시에 진행하는 것이 효율적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경찰 고소 (사기죄·횡령죄)</strong> — 관할 경찰서에 피해 경위서 + 계약서·이체내역·등기부 첨부. 공인중개사 자격 확인서도 포함.</li>\n<li><strong>2단계 — 공인중개사 공제조합 손해배상 청구</strong> — 한국공인중개사협회(1588-0667) 공제조합에 피해 접수. 공제 한도: 개인중개사 1억원·법인 2억원.</li>\n<li><strong>3단계 — 부동산 가압류 신청</strong> — 중개사 또는 매도인의 재산에 가압류 신청. 계약금 상당액 보전 목적.</li>\n<li><strong>4단계 — 계약 해제 통보 + 계약금 배액 청구</strong> — 매도인의 귀책이면 계약금 배액 반환 청구 가능 (민법 제565조).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약금 횡령 상황별 대응 순서를 AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">사기 피해 대응 확인 →</a>\n</div>',
      },
      {
        title: 'Q. 중개사 공제조합으로 얼마나 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 공제 한도 내에서 일부 보전을 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>개인 공인중개사</strong> — 공제 한도 1억원 (공인중개사법 시행령 제24조).</li>\n<li><strong>법인 중개사무소</strong> — 공제 한도 2억원.</li>\n<li><strong>청구 기한</strong> — 피해 사실을 안 날로부터 3년 이내 청구.</li>\n<li><strong>필요 서류</strong> — 피해배상청구서, 계약서, 이체내역, 경찰 접수 확인서, 등기부등본.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 공제조합 청구 기한(3년)을 놓치면 보전 자체가 불가해집니다. 형사 고소와 동시에 공제 청구도 바로 진행하는 것이 좋습니다.</blockquote>',
      },
      {
        title: 'Q. 잠적한 중개사 주소를 모르면 고소가 어렵지 않나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 중개사무소 주소·자격번호만 있어도 수사가 가능합니다.</strong></p>\n<ul>\n<li><strong>자격번호 조회</strong> — 국토교통부 공인중개사 자격증 조회에서 사무소 주소 확인.</li>\n<li><strong>계좌 추적</strong> — 경찰이 이체 계좌를 통해 신원 추적 가능. 계좌번호 보전 필수.</li>\n<li><strong>부동산 거래신고</strong> — 계약 시 신고된 거래 정보를 관할 구청에서 조회 가능.</li>\n<li><strong>공인중개사협회 통보</strong> — 협회에 자격 정지·취소 신청을 동시에 접수.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계약금 수령 후 소유권이전 불이행의 사기죄 성립',
        summary:
          '울산지방법원 2016고단754 사건(울산지법, 2017.09.07 선고)에서 법원은 신축 빌라 분양계약을 체결하고 계약금·중도금을 수령했음에도 소유권이전등기를 이행하지 않고 근저당권을 설정한 행위에 대해 사기죄가 성립한다고 판시했습니다.',
        takeaway: '계약금 수령 후 소유권이전 불이행은 사기죄 고소 대상이 됩니다.',
      },
    ],
    faq: [
      {
        question: '매도인과 중개사가 공모한 것 같은데 둘 다 고소할 수 있나요?',
        answer:
          '<strong>공모 정황이 있으면 공범으로 함께 고소 가능합니다.</strong> 계약금이 매도인 계좌가 아닌 중개사 계좌로 간 경우, 매도인의 동의 여부가 공모 입증의 핵심입니다.',
      },
      {
        question: '계약금은 돌려받더라도 이사·이주 비용 등 추가 손해도 청구할 수 있나요?',
        answer:
          '<strong>사기로 인한 재산상 손해 전체를 청구할 수 있습니다.</strong> 이사비·인테리어 선투자·기회비용 등도 손해배상 청구 범위에 포함될 소지가 있습니다.',
      },
      {
        question: '등기부상 소유권이 이미 이전됐는데 사기 고소가 가능한가요?',
        answer:
          '<strong>소유권이전 후라도 기망·편취 정황이 있으면 사기죄 성립 가능합니다.</strong> 다만 민사 원상회복이 복잡해지므로 변호사 상담을 검토해보는 것이 좋습니다.',
      },
      {
        question: '공제조합 청구와 민사 소송을 동시에 진행해도 되나요?',
        answer:
          '<strong>동시 진행 가능합니다.</strong> 공제조합 보상과 민사 판결금은 중복 지급되지 않지만, 공제 한도 초과분은 민사로 추가 청구할 수 있습니다.',
      },
      {
        question: '계약서가 없고 이체 내역만 있는데 고소가 가능한가요?',
        answer:
          '<strong>이체 내역과 중개사와의 대화 기록만으로도 고소 접수가 가능합니다.</strong> 계약서 미작성 자체가 추가 불법 정황이 될 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '계약금 배액 반환 청구 절차', href: '/guide/fraud/fraud-contract-deposit-return' },
      { label: '부동산 사기 유형과 대응', href: '/guide/fraud/fraud-real-estate-scam-types' },
      { label: '공제조합 손해배상 청구', href: '/guide/fraud/fraud-realtor-insurance-claim' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
    ],
  },

  // ─── 4. fraud / second-hand-luxury-replica-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-second-hand-luxury-replica-defense',
    keyword: '명품 짝퉁 중고거래 사기 피해',
    questionKeyword: '중고거래 플랫폼에서 명품 진품이라기에 구매했는데 짝퉁이라는 감정 결과가 나왔어요',
    ctaKeyword: '중고 명품 사기 환불·고소 절차 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '명품 짝퉁 중고거래 사기 피해 5가지 대응 가이드 | 로앤가이드',
      description:
        '중고거래 플랫폼에서 명품 진품으로 속고 짝퉁 감정을 받았다면 환불·고소·플랫폼 신고 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"정품 보증서도 있고 영수증 사진까지 보여줬는데, 공식 AS센터에서 가품 판정이 나왔어요." 중고 명품 사기는 감정서 위조·정품처럼 보이는 포장까지 결합해 점점 정교해지고 있습니다. 형법 제347조 사기죄 적용 가능 여부와 함께, 플랫폼을 통한 에스크로 환불·소비자원 피해구제 경로를 병행하면 피해 회복 가능성을 검토해볼 수 있습니다. 물건을 섣불리 돌려보내기 전에 감정서 확보가 가장 먼저입니다.</p>',
    sections: [
      {
        title: 'Q. 가품인지 어떻게 공식 확인하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 공인 감정기관의 감정서가 법적 증거력의 핵심입니다.</strong></p>\n<ul>\n<li><strong>브랜드 공식 AS센터</strong> — 루이비통·샤넬·에르메스 등 브랜드 직영 서비스센터에서 무료 또는 소액 감정 가능.</li>\n<li><strong>공인 감정기관</strong> — 한국감정원, 민간 명품 감정 전문업체(리얼리인증, 트루체크 등) — 감정서 발급비 3~10만원 수준.</li>\n<li><strong>감정서 필수 내용</strong> — 감정 일시·감정인 자격·가품 판정 근거(시리얼 번호, 소재, 봉제 방식).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 물건을 판매자에게 돌려보내기 전에 감정서를 받아야 합니다. 돌려보내면 증거 보전이 어려워집니다.</blockquote>',
      },
      {
        title: 'Q. 플랫폼 환불과 형사 고소를 어떻게 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 플랫폼 신고 → 에스크로 환불 → 형사 고소 순서로 진행하는 것이 효율적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 플랫폼 신고 + 에스크로 보류 요청</strong> — 거래 완료 전 에스크로가 걸려 있다면 즉시 이의 신청. 이미 완료됐다면 플랫폼 피해 신고 접수.</li>\n<li><strong>2단계 — 내용증명 발송</strong> — 판매자에게 가품 감정서 첨부 후 "계약 취소 및 대금 반환 요청" 내용증명 발송.</li>\n<li><strong>3단계 — 형사 고소 (사기죄)</strong> — 가품인 줄 알면서 진품으로 속인 경우 사기죄 성립. 감정서·대화 내역·거래 내역 첨부해 경찰서 고소.</li>\n<li><strong>4단계 — 한국소비자원 피해구제 신청</strong> — 1372 또는 consumer.go.kr. 플랫폼 사업자가 국내 법인이면 소비자원 조정 절차 활용 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고거래 사기 유형별 대응 순서를 AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">사기 피해 대응 확인 →</a>\n</div>',
      },
      {
        title: 'Q. "몰랐다"고 주장하는 판매자에게 사기죄가 성립하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 편취의 고의(알면서 속인 것) 입증이 핵심입니다.</strong></p>\n<ul>\n<li><strong>판매 가격이 지나치게 저렴</strong> — 시세 대비 50% 이하이면 가품임을 알았을 가능성이 높다는 정황 증거.</li>\n<li><strong>보증서·영수증이 위조된 경우</strong> — 위조 자체가 고의 기망 행위로 추가 죄목 성립 가능.</li>\n<li><strong>이전 가품 판매 이력</strong> — 플랫폼 리뷰·신고 이력에서 동일 패턴 확인.</li>\n<li><strong>"검수 완료" 허위 표시</strong> — 감정 받지 않았으면서 "검수 완료"로 표기하면 기망 행위 소지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "진품인 줄 알았다"는 판매자 주장에 고소를 포기하는 경우가 많습니다. 가격·포장·보증서 위조 정황을 모아두면 고의 입증이 가능할 수 있어요.</blockquote>',
      },
      {
        title: 'Q. 소액 피해인데 민사 소송이 비용 대비 효율적인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 300만원 이하는 소액사건, 3,000만원 이하는 간이소송 절차를 활용할 수 있습니다.</strong></p>\n<ul>\n<li><strong>소액사건심판</strong> — 300만원 이하, 법원 1회 심리 후 판결. 인지대 10,000원 내외.</li>\n<li><strong>지급명령 신청</strong> — 대금 반환 청구는 지급명령으로 상대방 이의 없으면 확정판결 효력.</li>\n<li><strong>소비자원 분쟁조정</strong> — 무료, 조정안 쌍방 수락 시 재판상 화해와 동일 효력.</li>\n<li><strong>형사 합의</strong> — 형사 고소 후 판매자가 합의금 지급 제안하는 경우가 많음.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 편취 범의(고의)의 판단 기준',
        summary:
          '대법원 2008도11718 사건(대법원, 2009.04.09 선고)에서 법원은 사기죄의 편취 범의는 피고인의 자백이 없어도 범행 전후의 재력·환경·거래 이행 과정 등 객관적 사정을 종합해 인정할 수 있다고 판시했습니다.',
        takeaway: '"몰랐다"는 주장만으로 사기죄 고의가 부정되지는 않으며, 가격·보증서·이행 여부를 종합해 판단합니다.',
      },
    ],
    faq: [
      {
        question: '물건을 이미 돌려줬는데 고소할 수 있나요?',
        answer:
          '<strong>대화 기록·이체 내역·감정서 캡처만 있어도 고소 가능합니다.</strong> 물건 반환 전에 감정서를 받아두는 것이 이상적이지만, 이미 돌려줬다면 수령 당시 사진이라도 확보해두세요.',
      },
      {
        question: '상대방이 개인 거래자인데 소비자원 신청이 가능한가요?',
        answer:
          '<strong>개인 간 거래는 소비자원 조정 대상에서 제외될 수 있습니다.</strong> 플랫폼 사업자를 상대로 한 조정 또는 형사 고소 경로를 검토하는 것이 좋습니다.',
      },
      {
        question: '가품 판매가 상표법 위반도 되나요?',
        answer:
          '<strong>위조 상품 판매는 상표법 제230조 위반으로 별도 처벌 대상입니다.</strong> 사기죄와 상표법 위반 두 가지 죄목으로 동시 고소 가능해요.',
      },
      {
        question: '플랫폼이 "개인 간 거래라 책임 없다"고 하면 어떻게 해야 하나요?',
        answer:
          '<strong>플랫폼이 검수·인증을 광고했다면 플랫폼 사업자에게도 책임을 물을 소지가 있습니다.</strong> "검수 완료" 마크를 붙였지만 가품이라면 소비자원 분쟁조정을 통해 다툴 수 있어요.',
      },
      {
        question: '해외 플랫폼(직구)에서 산 가품인데 고소가 가능한가요?',
        answer:
          '<strong>해외 사업자는 국내 형사 고소·소비자원 관할 밖일 수 있습니다.</strong> 신용카드 차지백(결제 취소 요청) 절차를 먼저 시도하는 것이 현실적입니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '중고거래 사기 신고 절차', href: '/guide/fraud/fraud-online-secondhand-scam-response' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '소비자원 피해구제 신청', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 피해 합의금 산정', href: '/guide/fraud/fraud-settlement-amount-calculation' },
    ],
  },

  // ─── 5. fraud / investment-broker-license-falsify ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-broker-license-falsify',
    keyword: '투자자문업 무자격 사기 피해',
    questionKeyword: '자본시장법 등록 없이 투자자문을 해주겠다며 수수료를 먼저 받아간 사람을 신고할 수 있나요?',
    ctaKeyword: '무자격 투자자문 사기 신고 절차 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '투자자문업 무자격 사기 피해 회복 4단계 | 로앤가이드',
      description:
        '자본시장법 미등록 투자자문업자에게 수수료·원금을 잃었다면 금감원 신고·형사 고소·민사 회수 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"100% 수익률 보장이라며 월 30%를 약속했어요. 처음엔 수익이 나는 것처럼 보였는데, 3개월 후 원금이 사라지고 연락이 끊겼습니다." 자본시장과 금융투자업에 관한 법률(자본시장법)에 따라 투자자문업·일임업을 하려면 금융감독원에 등록해야 하며, 미등록 영업은 그 자체로 처벌 대상입니다. 수익 보장 약속이나 선취 수수료 요구는 사기죄와 함께 자본시장법 위반으로 신고할 수 있습니다.</p>',
    sections: [
      {
        title: '무자격 투자자문 사기 확인 — 어떤 특징이 있나요',
        content:
          '<p><strong style="color:#1e3a5f">아래 패턴이 2개 이상 겹치면 무자격 투자자문 사기로 신고를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>등록번호 미제시 또는 조회 불가</strong> — 금감원 금융소비자 정보포털(finlife.fss.or.kr)에서 "투자자문업" 등록 여부 확인. 등록 없으면 불법.</li>\n<li><strong>수익률 확정 보장</strong> — "월 10~30% 확정 수익", "원금 보장" 등은 자본시장법 위반 표현.</li>\n<li><strong>선취 수수료 요구</strong> — 투자 전 자문료·접속비·멤버십비 명목 선납 요구.</li>\n<li><strong>비공개 채널 운영</strong> — 텔레그램·카카오톡 유료 채널로만 운영, 공식 홈페이지 없음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자본시장법 제17조에 따라 투자자문업 미등록 영업 시 5년 이하 징역 또는 2억원 이하 벌금에 처할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 피해 회복 4단계',
        content:
          '<p><strong style="color:#1e3a5f">금감원·경찰청 공식 절차를 참고하면 아래 순서로 신고·회수를 검토해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 금감원 신고 (즉시)</strong> — 금융감독원 1332 또는 fss.or.kr → 불법금융신고센터 → 미등록 투자자문 신고 접수. 채팅 캡처·이체 내역·상호명 첨부.</li>\n<li><strong>2단계 — 경찰 고소 (사기죄·자본시장법 위반)</strong> — 수익 보장 약속 + 선취 수수료 편취 → 사기죄 + 자본시장법 제178조 부정거래 혐의로 고소. 사이버수사팀 또는 금융범죄수사팀.</li>\n<li><strong>3단계 — 민사 가압류 신청</strong> — 운영자 국내 재산(계좌·부동산) 파악 후 원금 상당액 가압류 신청. 형사 진행과 병행 가능.</li>\n<li><strong>4단계 — 금감원 분쟁조정 또는 민사 소송</strong> — 금융회사가 연루된 경우 금감원 분쟁조정 신청(30일 내 자율조정). 개인 운영자면 직접 민사소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자 사기 유형별 신고 경로와 회수 가능성을 AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">사기 피해 대응 확인 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 + 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">금감원 신고 및 형사 고소 시 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>채팅 대화 전체 캡처</strong> — 수익 보장 약속, 선취 수수료 요구, 입금 안내 메시지.</li>\n<li><strong>이체확인증</strong> — 송금 일시·금액·수취 계좌 포함.</li>\n<li><strong>수익 보고서·화면 캡처</strong> — 수익이 발생한 것처럼 보여준 화면.</li>\n<li><strong>광고·홍보 자료</strong> — "100% 수익 보장" 문구가 있는 광고 스크린샷, 채널 링크.</li>\n<li><strong>금감원 등록 조회 결과</strong> — finlife.fss.or.kr 에서 조회한 미등록 확인 화면.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 채널에서 탈퇴하거나 대화를 삭제하면 증거가 사라집니다. 신고 전까지 채널 유지 + 전체 대화 캡처가 최우선입니다.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신고 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>금융감독원 불법금융신고센터</strong> — 1332 / fss.or.kr (미등록 투자자문·유사수신 신고)</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>금융정보분석원(FIU)</strong> — 불법 투자 계좌 자금세탁 신고 가능</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시, 무료 법률상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 투자자문업자의 부정거래 행위와 자본시장법 제178조 위반',
        summary:
          '대법원 2024도11686 사건(대법원, 2026.01.15 선고)에서 법원은 투자자문업자가 추천 증권을 선행 매수해두고 이해관계를 공시하지 않은 채 매수를 추천한 행위는 자본시장법 제178조 제1항의 부정한 수단·계획·기교에 해당한다고 판시했습니다.',
        takeaway: '수익 보장 약속이나 이해충돌 미공시는 사기죄와 별개로 자본시장법 위반으로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '등록된 투자자문사처럼 보였는데 알고 보니 위장이었습니다. 어떻게 확인하나요?',
        answer:
          '<strong>금감원 금융소비자 정보포털에서 30초 안에 확인할 수 있습니다.</strong> finlife.fss.or.kr → 금융회사 찾기 → 투자자문업 검색. 없으면 미등록 불법 영업입니다.',
      },
      {
        question: '수익 보장을 약속했지만 실제 투자를 하긴 한 것 같은데 사기 고소가 가능한가요?',
        answer:
          '<strong>투자 여부와 관계없이 선취 수수료·수익 보장 약속 자체가 자본시장법 위반입니다.</strong> 원금 손실이 발생했다면 사기죄도 병행 검토 가능해요.',
      },
      {
        question: '다른 피해자들과 함께 고소하면 더 유리한가요?',
        answer:
          '<strong>피해 금액 합산으로 특정경제범죄법 가중처벌 요건(5억원 이상)이 충족되면 형량이 높아집니다.</strong> 온라인 피해자 모임·카페에서 공동 고소단 구성을 검토해볼 수 있어요.',
      },
      {
        question: '형사 고소 후 민사 소송도 별도로 해야 하나요?',
        answer:
          '<strong>형사 절차로 원금 자동 반환은 되지 않습니다.</strong> 형사 유죄 판결을 받더라도 민사 손해배상 청구 또는 가압류·강제집행 절차를 별도로 진행해야 피해금을 회수할 수 있어요.',
      },
      {
        question: '해외 법인으로 된 플랫폼인데 신고가 의미 있나요?',
        answer:
          '<strong>국내 계좌로 자금이 들어왔다면 국내 수사 대상이 됩니다.</strong> 해외 법인이더라도 국내 운영자·모집책이 있으면 처벌 가능하고, 금감원 신고로 계좌 동결 조치도 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '투자 사기 유형별 대응 순서', href: '/guide/fraud/fraud-investment-scam-response' },
      { label: '금감원 분쟁조정 신청 절차', href: '/guide/fraud/fraud-fss-dispute-procedure' },
      { label: '사기 피해 증거 수집 순서', href: '/guide/fraud/fraud-evidence-collection-order' },
      { label: '유사수신 피해 신고 방법', href: '/guide/fraud/fraud-illegal-fundraising-report' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
    ],
  },
];
