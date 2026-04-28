import { SpokePage } from '../spoke-pages';

// batch49 fraud 5개: 보이스피싱 100만원+ 환급 + 차용증 사기죄·민사 구분 + 학원 수강료 환불 분쟁조정 + 온라인 카페 회비 환급 3경로 + 형사 부대 배상명령
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 보이스피싱으로 100만원 이상 송금된 후 통신사기피해환급법 절차상 지급정지·채권소멸공고·환급(약 2개월) 흐름을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 차용증을 받고 빌려준 돈이 미변제된 경우 변제의사·능력 입증을 통해 형법 제347조 사기죄와 단순 민사 채권을 어떻게 구분하는지 검토하도록 돕는 페이지다.
// 3. 이 페이지는 학원·교습소가 잔여 수강료 환불을 거부할 때 학원법 환불 산정 + 한국소비자원 분쟁조정 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 온라인 카페·네이버밴드·디스코드 커뮤니티 운영자가 회비를 받고 활동을 중단·잠적했을 때 ECRM·KCA·민사 3가지 환급 경로를 비교하도록 돕는 페이지다.
// 5. 이 페이지는 사기 형사재판이 진행 중인 피해자가 별도 민사소송 없이 형사 절차 안에서 손해배상을 받을 수 있는 부대 배상명령 신청 요건과 한도를 정리하도록 돕는 페이지다.

export const spokesBatch49Fraud: SpokePage[] = [
  // ─── 1. fraud / voice-phishing-100m-plus-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-voice-phishing-100m-plus-recovery',
    keyword: '보이스피싱 100만원 이상 환급',
    questionKeyword: '보이스피싱으로 200만원 송금했는데 환급 절차와 기간이 어떻게 되나요?',
    ctaKeyword: '보이스피싱 환급 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보이스피싱 100만원 이상 환급 절차와 기간 총정리 | 로앤가이드',
      description:
        '보이스피싱으로 100만원 이상 송금했다면 통신사기피해환급법상 지급정지 → 채권소멸공고 → 환급(약 2개월) 흐름을 지금 확인하세요.',
    },
    intro:
      '<p>"검찰을 사칭한 전화에 속아 안전계좌라며 알려준 곳으로 320만원을 보냈어요. 통화 끊고 나서야 보이스피싱이라는 걸 깨달았는데, 이제 어떻게 해야 환급받을 수 있을까요?" 통신사기피해환급법(전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법)은 100만원 이상 송금건도 동일한 환급 트랙(지급정지 → 채권소멸공고 → 환급)으로 처리됩니다. 다만 사기범이 잔액을 인출하기 전 지급정지가 걸려야 환급 가능성이 살아있고, 채권소멸공고에서 환급까지 통상 2개월이 걸립니다. 송금 직후 112 신고와 은행 지급정지 요청을 동시에 하는 것이 회복의 출발점입니다.</p>',
    sections: [
      {
        title: '환급 가능 여부를 결정하는 3가지 변수',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지에 따라 환급 가능 금액이 달라집니다.</strong></p>\n<ul>\n<li><strong>지급정지 시점</strong> — 송금 직후 ~ 인출 전까지 지급정지가 걸려야 잔액 환급 가능. 사기범은 평균 30~60분 내 인출.</li>\n<li><strong>입금 계좌 잔액</strong> — 사기범 계좌에 송금액 일부라도 남아 있어야 환급 대상. 이미 인출된 부분은 형사·민사로만 회수 검토.</li>\n<li><strong>피해금 종류</strong> — 원화 송금은 환급 트랙 직접 대상. 코인·상품권 직접 전송분은 환급 트랙에서 제외될 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통신사기피해환급법 제3조에 따르면 금융회사는 피해자 신고 즉시 지급정지 조치를 해야 하고, 채권소멸공고는 약 2개월간 진행됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·금감원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 신고 + 은행 지급정지 요청 (송금 직후)</strong> — 송금 후 30분 이내가 환급 가능성 가장 높음. 112 또는 입금 은행 콜센터에 전화해 지급정지 요청.</li>\n<li><strong>2단계 — 경찰서 사건사고사실확인원 발급 (24~48시간 내)</strong> — 가까운 경찰서 방문, 피해 신고 후 사건사고사실확인원 발급. 환급 신청 필수 서류.</li>\n<li><strong>3단계 — 송금 은행에 피해구제 신청서 제출 (3영업일 내)</strong> — 통신사기피해환급법상 피해구제 신청서 + 사건사고사실확인원 + 신분증 제출.</li>\n<li><strong>4단계 — 채권소멸 공고 (약 2개월 소요)</strong> — 금감원이 사기범 계좌의 채권 소멸 공고를 게시. 이 기간 사기범이 이의 제기 안 하면 잔액 환급 확정.</li>\n<li><strong>5단계 — 환급금 수령 (공고 종료 후 2주 내)</strong> — 사기범 계좌 잔액을 피해자 비율대로 안분 환급. 인출된 부분은 형사·민사로 별도 회수 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 시점·금액·계좌 정보에 따라 환급 절차가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">환급 신청 시 아래 서류를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>사건사고사실확인원</strong> — 가까운 경찰서에서 발급 (피해 신고 후).</li>\n<li><strong>피해구제 신청서</strong> — 송금 은행 영업점 또는 콜센터 양식.</li>\n<li><strong>이체확인증 또는 거래내역서</strong> — 송금 일시·금액·수취 계좌 명기.</li>\n<li><strong>통화 녹취·문자 기록</strong> — 사기범과의 통화 내용·문자·카카오톡 캡처.</li>\n<li><strong>신분증 사본</strong> — 본인 확인용.</li>\n<li><strong>대포통장 의심 신고서</strong> — 사기범 계좌가 명의도용 의심되면 추가 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 송금 후 사기범과 통화·연락하면서 시간을 끌면 잔액이 인출됩니다. 송금 직후 가장 먼저 할 일은 112 신고와 은행 지급정지 요청이에요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 보이스피싱 신고</strong> — 112 (24시간) / ecrm.police.go.kr</li>\n<li><strong>금융감독원 불법사금융 신고</strong> — 1332 / fss.or.kr (피해구제 절차 안내)</li>\n<li><strong>한국인터넷진흥원(KISA)</strong> — 118 (피싱사이트·문자 신고)</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시, 무료 법률상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기 항소심 심판범위와 방조범 처벌',
        summary:
          '대법원 2025도8460 사건(대법원, 2025.12.11 선고)에서 법원은 전기통신금융사기피해방지및피해금환급에관한특별법 위반 사건에서 공동정범으로 기소된 피고인을 방조범으로 인정하면서 공동정범 부분은 무죄로 판단한 제1심에 대해 검사가 항소했지만 항소이유서에서 양형부당만 주장한 경우, 항소심이 직권으로 무죄 부분을 유죄로 바꾸는 것은 허용되지 않는다고 판시했습니다.',
        takeaway: '보이스피싱 조직 내 단순 인출책·전달책도 방조범으로 처벌받을 수 있어, 공범 처벌 자료가 환급·민사 회수에도 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '송금 후 1시간이 지났는데 지급정지가 가능한가요?',
        answer:
          '<strong>잔액이 남아 있으면 가능합니다.</strong> 사기범 계좌에서 인출이 끝났는지 여부가 관건이라, 빠를수록 회수 가능성이 높아져요. 시간이 지났더라도 즉시 112와 은행 콜센터에 신고하는 것이 좋습니다.',
      },
      {
        question: '환급 절차에 변호사가 꼭 필요한가요?',
        answer:
          '<strong>본인이 직접 송금 은행과 경찰서에서 신청 가능하며 변호사가 필수는 아닙니다.</strong> 다만 인출된 금액에 대해 형사 고소·민사 가압류를 병행할 때는 대한법률구조공단 132 또는 변호사 상담을 검토해보세요.',
      },
      {
        question: '내가 직접 출금해 만난 사람에게 건넨 경우도 환급되나요?',
        answer:
          '<strong>대면 편취형 보이스피싱도 통신사기피해환급법 적용 대상이 확대되었습니다.</strong> 2024년 이후 대면 편취 사건도 환급 절차에 포함되어, 사건사고사실확인원과 함께 송금 은행에 피해구제 신청 가능해요.',
      },
      {
        question: '사기범이 외국인이거나 해외에 있으면 환급이 어렵나요?',
        answer:
          '<strong>사기범 신원과 무관하게 국내 입금 계좌에 잔액이 있으면 환급이 진행됩니다.</strong> 채권소멸공고는 계좌 명의자에게 송달되며, 명의자가 이의 제기 없으면 잔액이 피해자에게 안분돼요.',
      },
      {
        question: '환급받지 못한 인출 금액은 영영 회수가 불가능한가요?',
        answer:
          '<strong>형사 고소 + 민사 가압류 + 손해배상 청구로 회수 시도가 가능합니다.</strong> 사기범 신원이 확인되면 그 명의 재산을 가압류하고, 형사 판결 확정 후 부대 배상명령 신청도 검토해볼 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 환급 종합 가이드', href: '/guide/fraud/fraud-voice-phishing-recovery-comprehensive' },
      { label: '전기통신금융사기 환급 신청', href: '/guide/fraud/fraud-telecom-financial-payment-suspension' },
      { label: '대면 편취 보이스피싱 대응', href: '/guide/fraud/fraud-face-to-face-voice-phishing-response' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
    ],
  },

  // ─── 2. fraud / loan-with-promissory-note-criminal-civil ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-with-promissory-note-criminal-civil',
    keyword: '차용증 있는 사기 민사 구분',
    questionKeyword: '차용증 받고 5천만원 빌려줬는데 안 갚아요. 사기죄 고소가 가능한가요?',
    ctaKeyword: '차용증 사기·민사 구분 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '차용증 있는 사기 — 사기죄 vs 민사 채권 구분 기준 | 로앤가이드',
      description:
        '차용증을 받았는데 변제가 이뤄지지 않을 때 형법 제347조 사기죄 성립 요건과 단순 민사 채권의 구분 기준 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>"차용증까지 받고 5천만원을 빌려줬어요. 두 달 후 갚는다고 했는데 1년이 지나도록 한 푼도 안 들어옵니다. 차용증이 있으니 사기죄 고소가 더 쉽지 않을까 했는데, 변호사는 &lsquo;차용증이 있으면 오히려 민사로만 가야 한다&rsquo;고 하더라고요." 차용증의 존재 자체는 사기죄 성립과 무관합니다. 핵심은 빌릴 당시 변제 의사·능력이 있었는지이고, 차용증이 있어도 빌릴 때부터 갚을 의도가 없었음이 입증되면 사기죄가 성립할 수 있습니다. 반대로 차용증이 없어도 갚을 의사 없는 정황이 입증되면 사기죄가 됩니다. 차용증·이체 내역·당시 대화를 종합적으로 검토하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 차용증이 있어도 사기죄가 되는 경우는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용증과 무관하게 빌릴 당시 변제의사·능력 부재가 입증되면 사기죄가 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>변제의사 없음 정황</strong> — 빌린 직후 잠적·연락 두절·해외 도피.</li>\n<li><strong>변제능력 없음 정황</strong> — 빌릴 당시 이미 다른 채무가 자산 대비 과다, 신용불량 상태.</li>\n<li><strong>자금 사용처 거짓</strong> — "사업 자금"·"투자"라며 받았지만 실제론 도박·유흥·다른 빚 갚는 데 사용.</li>\n<li><strong>형식적 차용증</strong> — 차용증을 작성했어도 처음부터 갚을 의도 없이 형식만 갖춘 경우.</li>\n<li><strong>다수 피해자 동시 발생</strong> — 같은 시기 여러 명에게 같은 명목으로 차용 → 조직적 사기 의심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄는 10년 이하 징역 또는 2천만원 이하 벌금. 5억원 이상은 특정경제범죄가중처벌법으로 가중됩니다.</blockquote>',
      },
      {
        title: 'Q. 단순 채무불이행과 사기죄를 가르는 5가지 변수',
        content:
          '<p><strong style="color:#1e3a5f">A. 수사기관과 법원은 아래 5가지를 종합적으로 판단합니다.</strong></p>\n<ol>\n<li><strong>1. 빌릴 당시 재산·소득·다른 빚</strong> — 자산 대비 부채 비율, 정기 소득 유무.</li>\n<li><strong>2. 빌린 돈의 실제 사용처</strong> — 약속한 용도(사업·투자)와 실제 사용처 일치 여부.</li>\n<li><strong>3. 변제 노력 흔적</strong> — 일부라도 변제 시도, 변제 연기 협의 시도.</li>\n<li><strong>4. 차용 직후 행동</strong> — 잠적·연락 두절 vs 일상 유지·소통 지속.</li>\n<li><strong>5. 차용 사유의 진실성</strong> — "급한 사정"·"투자처"가 실제 존재했는지.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실관계에 따라 사기·민사 경로가 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 형사 고소와 민사 청구를 어떻게 병행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동시 진행이 가능하며, 합의 협상력 확보에 유리합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 내용증명 발송</strong> — 변제 요구 + 사기 고소 예고. 일부라도 응답 받으면 추후 입증 자료.</li>\n<li><strong>2단계 — 민사 가압류 (사기 고소 전 또는 동시)</strong> — 채무자 부동산·통장·차량 가압류로 강제집행 보전.</li>\n<li><strong>3단계 — 형사 고소</strong> — 관할 경찰서에 고소장 + 차용증·이체 내역·대화 캡처 첨부.</li>\n<li><strong>4단계 — 지급명령 또는 민사 소송</strong> — 차용증 있으면 지급명령 신청. 상대방 이의 없으면 확정판결과 동일 효력.</li>\n<li><strong>5단계 — 부대 배상명령 신청</strong> — 형사 1심 변론종결 전까지 신청 가능. 별도 민사 소송 없이 형사 절차에서 배상금 확정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "차용증 있으니 100% 받는다"고 합의를 미루면 강제집행 단계에서 채무자 재산이 사라질 수 있어요. 가압류부터 검토하세요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>대한법률구조공단</strong> — 132 (사기죄 고소 + 민사 절차 무료 상담, 자격 요건)</li>\n<li><strong>법원 보전소송 안내</strong> — scourt.go.kr (가압류·지급명령 신청서 양식)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (전국 56개 센터)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 기망행위는 사람에 대한 기망 필요',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 사기죄의 성립 요건인 기망행위는 사람으로 하여금 착오를 일으키게 하는 것이며, 사람에 대한 기망행위를 수반하지 않으면 사기죄로 처벌할 수 없다고 판시했습니다. 다만 정보처리장치 입력행위라도 그 결과로 사람을 착오에 빠뜨렸다면 기망행위에 해당한다고 보았습니다.',
        takeaway: '대여 사기에서 차용증과 함께 작성한 거짓 사업계획·재무자료는 사람에 대한 기망행위로 평가될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '차용증이 없으면 사기 고소가 어렵나요?',
        answer:
          '<strong>차용증 없이도 이체확인서·카카오톡 대화·녹취만으로 가능합니다.</strong> 차용증은 채권 입증 자료 중 하나일 뿐이고, 변제 의사·능력 부재 정황이 핵심이에요. 본인 통화 녹음은 통신비밀보호법 제3조 단서로 합법입니다.',
      },
      {
        question: '갚을 의사가 있었는지 어떻게 입증하나요?',
        answer:
          '<strong>채무자의 객관적 사정으로 추정합니다.</strong> 빌릴 당시 신용불량·다른 빚·소득·실제 사용처 등을 수사 단계에서 검사가 종합 판단해요. 받은 직후 도박·유흥에 썼다면 변제 의사 부재 정황이 됩니다.',
      },
      {
        question: '민사 시효는 얼마나 되나요?',
        answer:
          '<strong>민사 대여금 시효는 일반 10년, 상사채권은 5년입니다.</strong> 사기죄 공소시효는 7년이라 형사 고소는 더 이른 시점에 시효가 끝나요. 시효 임박 시 지급명령 신청으로 시효 중단 검토.',
      },
      {
        question: '합의를 하면 형사 처벌도 안 받나요?',
        answer:
          '<strong>사기죄는 친고죄가 아니라 합의해도 처벌이 면제되지는 않습니다.</strong> 다만 합의가 양형(형량 결정)에 큰 감경 사유가 되어 집행유예·벌금형으로 가벼워지는 경우가 많아요.',
      },
      {
        question: '판결을 받았는데 채무자 재산이 없으면 어떻게 하나요?',
        answer:
          '<strong>판결문은 10년 효력이 있고 5년 단위로 갱신할 수 있습니다.</strong> 재산명시 신청으로 채무자에게 재산 신고를 강제할 수 있고, 채무 불이행자 명부 등재로 신용 압박을 가하는 방법도 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '단순 채무불이행 vs 사기 구분', href: '/guide/fraud/loan-default-vs-fraud-checklist' },
      { label: '지인 대여금 사기 vs 민사', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
      { label: '사기 합의금 산정 기준', href: '/guide/fraud/fraud-settlement-amount-calculation' },
    ],
  },

  // ─── 3. fraud / academy-tuition-refund-refusal-dispute ───
  {
    domain: 'fraud',
    slug: 'fraud-academy-tuition-refund-refusal-dispute',
    keyword: '학원 수강료 환불 거부 분쟁조정',
    questionKeyword: '학원 수강료 6개월치 결제했는데 환불을 거부합니다. 어떻게 해야 하나요?',
    ctaKeyword: '학원 수강료 환불 분쟁조정 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학원·교습소 수강료 환불 거부 분쟁조정 절차 | 로앤가이드',
      description:
        '학원·교습소가 수강료 환불을 거부할 때 학원법 환불 산정 + 한국소비자원 분쟁조정 절차 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 수강권을 180만원에 결제했는데 한 달 만에 강사가 그만두고 강의 질이 급격히 떨어졌어요. 환불을 요청했더니 &lsquo;이미 등록한 건 환불 안 됩니다&rsquo;라며 거부하더라고요." 학원 수강료 환불 분쟁은 학원법(학원의 설립·운영 및 과외교습에 관한 법률)에서 정한 환불 기준이 있어 학원이 임의로 거부할 수 없습니다. 학원이 환불을 거부하면 한국소비자원 분쟁조정 → 교육청 행정처분 신청 → 민사 소송 순으로 검토해볼 수 있어요. 결제 영수증과 수강 일수 기록을 정리하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: '학원법상 환불 산정 기준',
        content:
          '<p><strong style="color:#1e3a5f">학원법 시행령 제18조에 따른 수강료 환불 기준은 아래와 같습니다.</strong></p>\n<ul>\n<li><strong>수강 시작 전</strong> — 이미 납부한 수강료 전액 환급.</li>\n<li><strong>수강 시작 후 1/3 경과 전</strong> — 납부한 수강료의 2/3 환급.</li>\n<li><strong>수강 시작 후 1/2 경과 전</strong> — 납부한 수강료의 1/2 환급.</li>\n<li><strong>수강 시작 후 1/2 경과 후</strong> — 환급 의무 없음.</li>\n<li><strong>학원 폐쇄·운영 중단</strong> — 잔여 수강료 전액 환급(학원 귀책).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "환불 불가" 약관은 학원법 위반으로 무효입니다. 이 기준은 학원·교습소·평생교육시설 모두 적용돼요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환불 분쟁 4단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·교육청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명 발송 (1주 내)</strong> — 환불 요청 + 학원법 시행령 제18조 인용 + 7일 답변 기한 명시.</li>\n<li><strong>2단계 — 한국소비자원 피해구제 신청 (1372 또는 consumer.go.kr)</strong> — 신청 후 30일 내 사업자에게 권고. 사업자 응답 없으면 분쟁조정위원회 회부.</li>\n<li><strong>3단계 — 교육청·교육지원청 신고</strong> — 학원 소재지 관할 교육청에 학원법 위반 신고. 학원 행정처분(시정명령·등록말소) 가능.</li>\n<li><strong>4단계 — 소액사건심판 또는 지급명령 (3천만원 이하)</strong> — 분쟁조정 결렬 시 법원 소액심판 청구. 강제집행 가능한 판결문 확보.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 방식·수강 일수에 따라 환불 산정이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">분쟁조정·소송 시 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>수강료 결제 영수증·계약서</strong> — 결제 일시·수강 기간·금액 명시.</li>\n<li><strong>학원 등록증·교습소 등록증</strong> — 학원 소재지 관할 교육청 정보 확인.</li>\n<li><strong>출석부·수강 일수 기록</strong> — 환불 산정 기준(1/3·1/2 경과 여부) 입증.</li>\n<li><strong>환불 거부 증거</strong> — 카카오톡·문자·녹음·이메일.</li>\n<li><strong>강사 변경·수업 부실 정황</strong> — 학원 귀책 사유 입증 자료.</li>\n<li><strong>약관·환불 규정 캡처</strong> — 학원이 제시한 "환불 불가" 약관 사본.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "환불 안 된다"는 약관에 동의했다고 포기하지 마세요. 학원법 시행령 환불 기준은 약관보다 우선합니다.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (피해구제·분쟁조정)</li>\n<li><strong>관할 교육청·교육지원청</strong> — 학원법 위반 신고, 행정처분 요청</li>\n<li><strong>공정거래위원회</strong> — 1357 (불공정 약관 신고)</li>\n<li><strong>대한법률구조공단</strong> — 132 (소액사건 무료 법률상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업 환경 하자 은폐도 사기죄 인정',
        summary:
          '서울북부지방법원 2024고단3486 사건(서울북부지법, 2025.11.06 선고)에서 법원은 영업권 양수도 시 중요한 영업 환경 하자(빈대 발생)를 숨긴 채 계약을 체결한 행위에 대해 사기죄가 성립한다고 판시했습니다. 학원·교습소도 강사 부재·시설 폐쇄 사실을 숨긴 채 수강료를 받았다면 동일한 기망 구조로 평가받을 수 있다는 점에서 시사점이 있습니다.',
        takeaway: '학원이 폐원·강사 부재 사실을 알면서 수강생을 모집했다면 단순 환불 분쟁을 넘어 사기죄 고소를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '학원이 "환불 불가" 약관에 서명하라고 했는데 효력이 있나요?',
        answer:
          '<strong>학원법 시행령 제18조 환불 기준에 어긋나는 약관은 무효입니다.</strong> 약관규제법상 소비자에게 부당하게 불리한 조항은 효력이 없어요. 서명했더라도 환불 요청은 가능합니다.',
      },
      {
        question: '온라인 강의·인터넷 강좌도 학원법이 적용되나요?',
        answer:
          '<strong>등록 학원이 운영하는 인터넷 강의는 학원법이 적용됩니다.</strong> 등록되지 않은 일반 온라인 교육 플랫폼은 전자상거래법·콘텐츠산업진흥법으로 환불 절차가 다를 수 있어요.',
      },
      {
        question: '카드로 결제했는데 차지백이 가능한가요?',
        answer:
          '<strong>용역 미제공·환불 거부를 사유로 카드사 차지백 신청이 가능합니다.</strong> 결제 후 일반적으로 90일 이내가 권장되며, 카드사 약관에 따라 180일까지도 접수 가능. 즉시 카드사 고객센터에 문의하세요.',
      },
      {
        question: '소비자원 분쟁조정 결정에 학원이 따라야 하나요?',
        answer:
          '<strong>양 당사자 모두 수락하면 재판상 화해와 같은 효력이 발생합니다.</strong> 학원이 거부하면 강제력이 없으나, 민사 소송에서 유리한 자료로 활용되고 교육청 행정처분 근거로도 쓸 수 있어요.',
      },
      {
        question: '학원이 갑자기 폐원했는데 잔여 수강료는 어떻게 받나요?',
        answer:
          '<strong>학원 귀책 폐쇄는 잔여 수강료 전액 환급 대상입니다.</strong> 운영자 잠적 시 사기죄 고소 + 민사 가압류 + 교육청 등록말소 신청 병행 검토. 다수 피해자 공동 고소가 효과적이에요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '학원 폐업 환불 대응', href: '/guide/fraud/fraud-academy-closure-tuition-refund' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
    ],
  },

  // ─── 4. fraud / online-cafe-membership-fee-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-online-cafe-membership-fee-recovery',
    keyword: '온라인 카페 회비 사기 환급',
    questionKeyword: '온라인 카페 정회원비 30만원 보냈는데 운영자가 잠적했어요. 돌려받을 수 있나요?',
    ctaKeyword: '온라인 커뮤니티 회비 환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 카페·커뮤니티 회비 사기 환급 3가지 경로 | 로앤가이드',
      description:
        '온라인 카페·디스코드·밴드 운영자가 회비를 받고 잠적했을 때 ECRM 신고 + 한국소비자원 분쟁조정 + 민사 청구 3가지 경로를 지금 확인하세요.',
    },
    intro:
      '<p>"투자 정보 공유 카페에 정회원비 30만원을 보냈어요. 매주 리딩방 운영해준다더니 두 달 만에 운영자가 카페를 폐쇄하고 연락이 끊겼습니다." 온라인 카페·디스코드·네이버밴드 등 커뮤니티 회비 사기는 1인당 피해액은 적지만 다수 피해자가 동시 발생하는 구조입니다. 합산 피해액이 5천만원~수억원에 달하면 특정경제범죄가중처벌 대상이 될 수도 있어요. 형사 신고(ECRM) + 소비자원 분쟁조정 + 민사 청구 3가지 경로를 병행하면 회수 가능성을 높일 수 있습니다. 카페 캡처와 회비 입금 내역을 지금 보전하세요.</p>',
    sections: [
      {
        title: '회비 사기로 보는 4가지 정황',
        content:
          '<p><strong style="color:#1e3a5f">아래 정황이 2개 이상이면 단순 운영 중단이 아니라 사기 정황으로 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>회비 모집 직후 잠적</strong> — 정회원·VIP 등급 모집 직후 활동 급감, 운영자 연락 두절.</li>\n<li><strong>약속 활동 미이행</strong> — "매주 리딩방"·"비공개 자료 공유" 등 약속한 콘텐츠 미제공.</li>\n<li><strong>다수 피해자 동시 발생</strong> — 카페 게시글·오픈채팅에서 동일 피해 진술 다수.</li>\n<li><strong>운영자 신원 불명</strong> — 닉네임만 사용, 실명·계좌 명의 다른 사람.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 다수 피해자 합산 시 특정경제범죄가중처벌법 제3조 적용 가능. 5억원 이상이면 3년 이상 유기징역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 3경로 동시 진행',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·소비자원 공식 절차를 참고하면 아래 3경로를 병행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>경로 1 — 경찰 사이버범죄 신고 (ECRM)</strong> — ecrm.police.go.kr 또는 관할 경찰서. 다른 피해자와 공동 고소단 구성 시 수사 우선순위 상승. 통상 IP·계좌 추적에 1~2개월.</li>\n<li><strong>경로 2 — 한국소비자원 피해구제 신청</strong> — 1372 또는 consumer.go.kr. "유료 콘텐츠·서비스 미제공" 사유로 신청. 30일 내 사업자에게 권고, 응답 없으면 분쟁조정위원회 회부.</li>\n<li><strong>경로 3 — 민사 가압류 + 지급명령</strong> — 운영자 신원 확인되면 부동산·통장 가압류 후 지급명령. 1인당 회비가 적어도 합산 청구 가능.</li>\n<li><strong>병행 — 카드 차지백 신청 (결제 후 90일 내)</strong> — 신용카드·간편결제로 회비를 보냈다면 카드사 고객센터에 차지백 요청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 방식·운영자 신원 확인 여부에 따라 회수 경로가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 + 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">신고와 분쟁조정에 아래 자료가 핵심 증거가 됩니다.</strong></p>\n<ul>\n<li><strong>회비 입금 내역</strong> — 이체확인서·간편결제 영수증.</li>\n<li><strong>카페·커뮤니티 가입 화면 캡처</strong> — 운영자 닉네임·약속 콘텐츠·회비 등급 표기.</li>\n<li><strong>운영자와의 채팅 기록</strong> — 카카오톡·디스코드·DM 대화 전체 캡처.</li>\n<li><strong>약속 콘텐츠 미제공 증거</strong> — "매주 리딩방"·"VIP 자료" 약속 게시글 + 미제공 사실 증거.</li>\n<li><strong>다른 피해자 진술</strong> — 오픈채팅·다른 카페에서 동일 피해 진술 캡처.</li>\n<li><strong>운영자 실명·계좌 정보</strong> — 입금 계좌 명의자, 카페 운영자 실명(있으면).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 카페 폐쇄 후 캡처를 못 하면 증거가 사라집니다. 의심되는 즉시 가입 화면·약속 게시글·대화 전체를 PDF로 보전하세요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (피해구제·분쟁조정)</li>\n<li><strong>방송통신위원회</strong> — kcc.go.kr (인터넷 사업자 신고)</li>\n<li><strong>한국인터넷진흥원(KISA)</strong> — 118 (불법 사이트·피싱 신고)</li>\n<li><strong>대한법률구조공단</strong> — 132 (무료 법률상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 현금수거책의 사기 고의',
        summary:
          '대법원 2024도11951 사건(대법원, 2025.09.25 선고)에서 법원은 기망행위를 수단으로 한 권리행사가 사기죄를 구성하는지에 대해 한정적으로 적극 인정한다고 판시했습니다. 온라인 커뮤니티 운영자가 정회원 등급 부여를 빌미로 회비를 받고 약속한 활동을 제공하지 않은 경우에도 기망 구조 평가가 가능하다는 점에서 참고됩니다.',
        takeaway: '약속 활동 미제공이 의도적이었음이 입증되면 단순 환불 분쟁을 넘어 사기죄로 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회비가 5만원으로 적은데도 신고할 가치가 있나요?',
        answer:
          '<strong>다른 피해자와 합산 시 가중처벌 요건이 충족될 수 있습니다.</strong> 동일 운영자에게 100명 피해면 500만원, 1000명이면 5천만원 합산. 신고 이력은 향후 같은 운영자 추적에도 도움이 돼요.',
      },
      {
        question: '운영자 닉네임만 알고 실명을 모르는데 수사가 가능한가요?',
        answer:
          '<strong>플랫폼 가입 정보·입금 계좌 명의로 신원 추적이 진행됩니다.</strong> 경찰이 카페 운영사·은행에 가입자 정보 영장 신청. 다만 명의도용·차명계좌면 시간이 더 걸릴 수 있어요.',
      },
      {
        question: '간편결제(카카오페이·토스)로 보낸 회비도 환급이 되나요?',
        answer:
          '<strong>간편결제도 차지백·환급 신청 대상입니다.</strong> 카카오페이·토스 고객센터에 "용역 미제공" 사유로 환급 요청 가능. 신용카드 연계 결제면 카드사 차지백도 병행하세요.',
      },
      {
        question: '카페가 이미 폐쇄됐는데 증거 수집이 가능한가요?',
        answer:
          '<strong>플랫폼사에 자료 보존 요청 + 다른 피해자 캡처 활용으로 가능합니다.</strong> 네이버·다음·디스코드 등에 경찰을 통해 자료 요청 가능. 다른 피해자가 보전한 캡처도 핵심 증거가 돼요.',
      },
      {
        question: '소비자원과 경찰을 동시에 진행해도 되나요?',
        answer:
          '<strong>3가지 경로(경찰·소비자원·민사)는 동시 진행 가능합니다.</strong> 형사 처벌과 민사 환급은 별개 절차라 충돌하지 않아요. 다만 합의 협상은 형사 송치 전 시점이 협상력 가장 높습니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '리딩방·투자 사기 대응', href: '/guide/fraud/fraud-investment-scam-response' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 5. fraud / victim-criminal-attached-civil-claim ───
  {
    domain: 'fraud',
    slug: 'fraud-victim-criminal-attached-civil-claim',
    keyword: '사기 형사 부대 배상명령',
    questionKeyword: '사기 가해자 형사재판 중인데 별도 민사소송 없이 배상금 받을 수 있나요?',
    ctaKeyword: '부대 배상명령 신청 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사기 형사 부대 배상명령 신청 절차와 한도 | 로앤가이드',
      description:
        '사기 가해자 형사재판에서 별도 민사소송 없이 배상금을 받을 수 있는 부대 배상명령(소촉법 제25조) 신청 요건과 한도를 지금 확인하세요.',
    },
    intro:
      '<p>"사기 가해자가 구속 기소됐는데 변호사가 &lsquo;형사재판 안에서 바로 배상명령 신청하면 별도 민사소송 안 해도 돼요&rsquo;라고 했습니다. 부대 배상명령이 뭔지, 언제·어떻게 신청해야 하는지 잘 모르겠어요." 부대 배상명령은 소송촉진 등에 관한 특례법 제25조에 따라 형사재판부가 형사 판결과 동시에 피고인에게 배상금 지급을 명하는 제도입니다. 별도 민사소송 비용·시간이 절약되고 형사 판결문이 그대로 집행권원이 됩니다. 다만 피해 금액이 특정되고 배상 책임 범위가 명백한 경우에만 가능하므로, 신청 시점과 자료 준비가 중요합니다.</p>',
    sections: [
      {
        title: '부대 배상명령 신청 요건',
        content:
          '<p><strong style="color:#1e3a5f">소촉법 제25조에 따른 신청 요건은 아래와 같습니다.</strong></p>\n<ul>\n<li><strong>대상 범죄</strong> — 사기·횡령·배임·강도·절도 등 재산범죄(형법 제347조 사기 포함). 일부 폭력·성범죄에도 확대 적용.</li>\n<li><strong>피해 금액 특정</strong> — 피해액이 명확하게 산정 가능해야 함. 위자료·간접손해는 다툼 여지 있어 별도 민사 권장.</li>\n<li><strong>배상 책임 명백</strong> — 피고인 책임 범위에 다툼이 없어야 함. 다툼 있으면 법원이 각하.</li>\n<li><strong>신청 시기</strong> — 형사 1심·2심 변론종결 전까지 신청 가능. 변론종결 후 접수는 각하 사유.</li>\n<li><strong>다른 민사소송 부재</strong> — 같은 피해에 대한 민사소송이 진행 중이면 신청 불가(소촉법 제26조 제7항).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부대 배상명령이 확정되면 별도 민사 판결문 없이도 강제집행 가능합니다. 피고인 재산 가압류와 병행하면 회수 가능성이 높아져요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 4단계',
        content:
          '<p><strong style="color:#1e3a5f">법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 형사재판부 확인</strong> — 검찰 기소 후 사건번호·재판부·기일 확인. 1심 재판부 정보가 신청서 작성의 출발점.</li>\n<li><strong>2단계 — 배상명령 신청서 작성·접수 (변론종결 전)</strong> — 신청서 + 피해 입증 자료(차용증·이체 내역·계약서) 제출. 신청료는 무료.</li>\n<li><strong>3단계 — 형사재판 출석 + 배상신청 진술</strong> — 피해 진술 + 청구 금액 확인. 피고인이 다투면 법원이 각하 결정 가능.</li>\n<li><strong>4단계 — 배상명령 확정 + 강제집행</strong> — 형사 판결과 함께 배상명령 선고. 확정 후 피고인 재산에 강제집행 진행. 별도 민사 판결 불요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사건 단계와 피해 입증 자료에 따라 신청 가능 여부가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 + 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">배상명령 신청 시 아래 자료를 미리 정리해두면 인용 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>배상명령 신청서</strong> — 법원 양식 (scourt.go.kr 다운로드).</li>\n<li><strong>피해 입증 자료</strong> — 차용증·이체확인서·계약서·영수증·송금 내역.</li>\n<li><strong>피해 경위서</strong> — 피해 발생 일시·금액·정황 시간순 정리(2~3페이지).</li>\n<li><strong>형사 사건 정보</strong> — 사건번호·재판부·기일·피고인 정보.</li>\n<li><strong>가해자 신원·재산 정보</strong> — 강제집행 대비 피고인 재산 파악.</li>\n<li><strong>처벌희망 의사 표시 및 합의 부재 진술</strong> — 합의된 경우 배상명령 인정 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 변론종결 후 접수하면 원칙적으로 각하됩니다. 1심 재판 일정을 미리 확인해 변론종결 1~2주 전에는 접수하세요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>대법원 전자소송</strong> — ecfs.scourt.go.kr (배상명령 신청서 양식)</li>\n<li><strong>관할 형사재판부 종합민원실</strong> — 사건번호·기일 조회</li>\n<li><strong>대한법률구조공단</strong> — 132 (배상명령 신청 무료 상담, 자격 요건)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (전국 56개 센터, 정서·법률 지원)</li>\n<li><strong>국선변호인 지원</strong> — 일정 요건 충족 시 형사 절차에서 국선변호인 선임 가능</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부대 배상명령 변론종결 후 접수 시 유의점',
        summary:
          '대법원 2021도13768 사건(대법원, 2022.01.14 선고)에서 법원은 제1심법원이 공판절차 진행이나 배상신청에 관한 결정을 하면서 피해자의 배상신청이 소송촉진 등에 관한 특례법이 정한 나머지 요건을 갖추었으나 변론종결 후에 접수되었다는 이유로 각하하는 경우 유념할 점을 판시했습니다. 피해자 배상신청 시점이 결정적이라는 점을 확인한 판례입니다.',
        takeaway: '배상명령 신청은 1심 변론종결 전까지 가능한 한 접수해야 하며, 시점 놓치면 별도 민사소송으로 가야 합니다.',
      },
    ],
    faq: [
      {
        question: '신청 비용이 따로 드나요?',
        answer:
          '<strong>배상명령 신청은 인지대·송달료가 무료입니다.</strong> 별도 민사소송과 비교해 비용·시간이 크게 절약돼요. 다만 변호사 선임은 별도 비용 발생.',
      },
      {
        question: '위자료도 청구할 수 있나요?',
        answer:
          '<strong>위자료·정신적 손해는 다툼 여지가 있어 각하될 수 있습니다.</strong> 직접 재산 손해(차용금·편취금)는 인용 가능성이 높지만 위자료는 별도 민사소송으로 청구 권장.',
      },
      {
        question: '피고인이 다투면 어떻게 되나요?',
        answer:
          '<strong>법원이 배상신청 각하 결정을 할 수 있습니다(소촉법 제32조).</strong> 각하되면 별도 민사소송으로 진행해야 해요. 다만 형사 유죄 판결문은 민사에서 강력한 증거가 됩니다.',
      },
      {
        question: '항소심에서 처음 신청해도 되나요?',
        answer:
          '<strong>항소심 변론종결 전까지 신청 가능합니다.</strong> 1심에서 신청 못 했어도 2심에서 신청 기회가 있어요. 시점 놓치지 말고 항소심 첫 기일 전후로 접수 검토.',
      },
      {
        question: '확정된 배상명령으로 어떻게 강제집행하나요?',
        answer:
          '<strong>형사 판결문이 그대로 집행권원이 됩니다.</strong> 별도 민사 판결문 불요. 피고인 재산 가압류·통장 압류·부동산 강제경매 등 일반 민사 강제집행 절차 진행 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '사기 합의금 산정 기준', href: '/guide/fraud/fraud-settlement-amount-calculation' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '사기범 IP 추적 후 다음 단계', href: '/guide/fraud/fraud-online-scam-ip-tracking-followup' },
    ],
  },
];
