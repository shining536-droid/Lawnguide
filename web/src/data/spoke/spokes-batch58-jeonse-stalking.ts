import { SpokePage } from '../spoke-pages';

// batch58 jeonse 2 + stalking 2 = 4개:
// 1. 등록임대주택 임대인 보증보험·표준계약서 의무 위반 (jeonse)
// 2. 보증금 지연 반환 지연이자·소송촉진법 12% 청구 (jeonse)
// 3. 미성년자 스토킹 피해 보호자 신고·동의 트랙 (stalking)
// 4. 가해자 잠적 후 형사 진행·기소중지 트랙 (stalking)
//
// 고유 존재 이유:
// 1. 이 페이지는 등록임대주택(민간임대주택특별법) 임차인이 임대인의 표준임대차계약서·보증보험 가입 의무 위반에 직면해 표준계약서 거부·해지·과태료 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 전세 만기 후 임대인이 보증금 일부를 늦게 반환하거나 미반환하는 경우 임차인이 소송촉진법 12% 지연이자·내용증명·지급명령 4단계 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 미성년 자녀가 학교·온라인에서 스토킹 피해를 입은 경우 보호자가 친고죄 폐지 후 신고 가능 + 보호자 동의 + 학교·경찰 결합 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 스토킹 신고 후 가해자가 잠적해 연락이 닿지 않는 피해자가 기소중지·소재수사·잠정조치·궐석재판 등 형사 진행 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58JeonseStalking: SpokePage[] = [
  // ─── 1. jeonse / jeonse-registered-rental-deposit-insurance-mandatory ───
  {
    domain: 'jeonse',
    slug: 'jeonse-registered-rental-deposit-insurance-mandatory',
    keyword: '등록임대주택 보증보험 가입 의무',
    questionKeyword: '등록임대주택인데 임대인이 보증보험을 안 들었어요. 표준계약서도 안 줬는데 어떻게 하나요?',
    ctaKeyword: '등록임대 보증보험 의무 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '등록임대주택 보증보험 의무 — 4단계 임차인 권리 | 로앤가이드',
      description:
        '등록임대주택 임대인이 보증보험·표준계약서 의무를 위반했다면 표준계약서 거부·해지·과태료 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임대인이 \'등록임대주택\'이라며 8% 인상 한도 같은 혜택은 강조하면서 정작 표준임대차계약서는 안 주고 보증보험 가입증서도 안 보여줬어요. 임대인이 보증보험 가입 의무가 있다는데 위반하면 어떻게 되나요?" 등록임대주택은 민간임대주택특별법(민특법) 제49조에 따라 임대인이 ① 표준임대차계약서 사용 ② 임대보증금 보증가입(보증보험) ③ 임대료 인상률 5% 이내 ④ 일정 임대기간 의무 4가지 의무를 부담합니다. 대법원 2024다284418 판결은 "민특법 적용 임대주택은 표준임대차계약서 해당 사유가 있어야 임대인이 갱신 거절·임대차 해지 가능"하다고 판시해 임차인 보호가 강한 영역임을 확인했어요. 임대인이 의무를 위반하면 임차인은 ① 표준계약서 작성 요구 ② 보증가입 확인 요구 ③ 위반 시 임대차 해지·과태료 신고 ④ 보증금 미반환 시 HUG·보증가입 분담 회수 4단계로 대응 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 등록임대 임대인 의무 위반 4가지 대응 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 표준계약서·보증보험·과태료·해지 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표준임대차계약서 사용 요구 (민특법 제49조의2)</strong> — 등록임대주택은 국토교통부령 표준계약서 의무. 미사용 시 임차인 작성 요구 + 거부 시 과태료 영역.</li>\n<li><strong>② 임대보증금 보증보험 가입 확인 (민특법 제49조)</strong> — 임대인이 임대보증금에 대한 보증보험 가입 의무. 가입증서·증권번호 확인 가능 영역.</li>\n<li><strong>③ 위반 시 과태료·임대등록 말소 신고</strong> — 시·군·구청 또는 렌트홈(rentho.molit.go.kr) 신고. 보증 미가입은 임대인에게 과태료 영역.</li>\n<li><strong>④ 임대차 해지·보증금 회수</strong> — 보증 미가입은 민특법 위반 + 임차인 해지 사유. 보증가입 시 보증보험 분담 + HUG 분담 회수 검토 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 등록임대는 임대인 의무가 강한 영역. 표준계약서·보증가입증서 두 자료가 권리 행사의 출발점. 미가입 자체로 임대인은 과태료 + 임차인은 해지 검토 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 권리 행사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록 확인 → 표준계약서·보증서 요구 → 미이행 시 신고 → 해지·과태료 → 보증금 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등록임대 확인 (즉시)</strong> — 렌트홈(rentho.molit.go.kr) 또는 시·군·구청 임대주택 등록 여부 조회.</li>\n<li><strong>2단계 — 표준계약서·보증가입증서 요구 (서면)</strong> — 임대인에게 내용증명. 7일 이내 회신 요구.</li>\n<li><strong>3단계 — 미이행 시 신고 (지자체·렌트홈)</strong> — 시·군·구청 임대등록 담당부서 또는 렌트홈 민원. 임대인 과태료 영역.</li>\n<li><strong>4단계 — 임대차 해지 (보증 미가입 6개월 이상)</strong> — 민특법 시행규칙 제32조 임차인 해지권. 갱신 거절·해지 통지 가능.</li>\n<li><strong>5단계 — 보증금 회수</strong> — 보증 가입 시 보증보험 청구. 미가입 시 임차권등기 + 일반 회수 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">등록임대 임대인 의무 위반 4단계 권리 행사를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록 자료 + 임대인 의무 위반 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임대주택 등록 확인서</strong> — 렌트홈 출력본 또는 지자체 발급.</li>\n<li><strong>임대차계약서 (표준 여부 확인)</strong> — 국토부 표준 양식 미사용 정황.</li>\n<li><strong>보증보험 가입증서·증권번호</strong> — 임대인 제시 자료. 미제시 정황 기록.</li>\n<li><strong>내용증명 사본 (요구·신고)</strong> — 표준계약서·보증서 요구.</li>\n<li><strong>지자체 신고 접수증</strong> — 임대등록 담당부서 신고.</li>\n<li><strong>전입신고·확정일자</strong> — 대항요건·우선변제권.</li>\n<li><strong>등기부등본·근저당 정보</strong> — 보증 미가입 시 회수 위험 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보증보험 가입은 임대인 의무지만 보증금이 일정 한도(시세 대비 90% 등) 초과 시 보증 거부될 수 있는 영역. 임대인이 보증 미가입을 \'못 들었다\' 변명한다면 시세 자료·근저당 자료 확인이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대인 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"표준계약서 안 써도 효력 있다" 주장 검토</strong> — 효력 자체는 인정 영역. 다만 임대인 과태료·임차인 해지권은 여전히 존재 영역.</li>\n<li><strong>"보증보험 가입했다" 주장 검증</strong> — 가입증서·증권번호 자료 요구. 미제시는 미가입 추정 가능 영역.</li>\n<li><strong>"임대료 인상률 8% 적용 가능" 주장 반박</strong> — 등록임대는 5% 이내 한도. 5% 초과 인상은 무효 + 환수 청구 가능 영역.</li>\n<li><strong>임대등록 말소·임대인 변경 정황</strong> — 임대인이 등록 말소 후 일반 임대차로 전환 시도하면 시점·등록 자료 확인. 말소 후라도 기존 의무 잔존 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>렌트홈 (rentho.molit.go.kr) / 1670-9900</strong> — 등록임대 민원·신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 임대차 무료 상담.</li>\n<li><strong>HUG 1566-9009</strong> — 전세보증보험 사고 신고.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세 피해 종합 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 등록임대주택 표준계약서 위반과 임대인 갱신거절·해지',
        summary:
          '대법원 2024다284418 사건(대법원, 2025.09.11 선고)에서 법원은 민간임대주택특별법 적용 임대주택의 임대인이 표준임대차계약서에 명시된 사유 또는 동법 시행령에서 정하는 경우에 한해서만 임대차계약을 갱신 거절하거나 해지하거나 임대차계약 갱신을 거절할 수 있다고 판시했습니다. 표준임대차계약서 외 사유로 임대인이 임대차를 일방 종료할 수 없으며, 단순히 \'다른 주택에 거주하고 있다\'는 사유는 갱신거절 사유가 아니라는 판단입니다.',
        takeaway: '등록임대는 임대인 의무가 강한 영역이라, 표준계약서·보증보험 자료를 정리하면 임차인 권리 4단계 트랙(요구·신고·해지·회수)이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '등록임대주택인지 어떻게 확인하나요?',
        answer:
          '<strong>렌트홈(rentho.molit.go.kr) 임대주택 조회 또는 시·군·구청 문의로 확인 가능합니다.</strong> 임대인 \'민특법 적용\'이라 주장하면 등록 확인 자료 요구.',
      },
      {
        question: '보증보험 미가입이면 임대인 처벌받나요?',
        answer:
          '<strong>임대인 과태료 영역이지만 형사 처벌은 별개입니다.</strong> 미가입 자체는 과태료(보증금의 일정 비율 또는 한도 내). 고의·반복이라면 임대등록 말소 사유 영역.',
      },
      {
        question: '본인이 표준계약서 안 받았는데 무효인가요?',
        answer:
          '<strong>계약 자체는 유효 영역입니다.</strong> 다만 임대인은 과태료 + 임차인은 해지권·갱신거절권 행사 가능 영역. 표준계약서 작성 요구 후 거부 시 신고 트랙.',
      },
      {
        question: '임대료 5% 초과 인상 통지받았어요',
        answer:
          '<strong>5% 초과분은 무효 + 환수 청구 가능 영역입니다.</strong> 등록임대는 임대료 인상률 5% 이내 한도. 초과분은 임차인이 거부하거나 사후 환수 청구 가능. 분쟁조정 + 임대등록 말소 신고도 검토.',
      },
      {
        question: '보증 미가입인데 보증금 회수 가능한가요?',
        answer:
          '<strong>보증보험 외 트랙으로 회수 검토 영역입니다.</strong> 임차권등기 + 일반 보증금반환소송 + 강제집행. 임대인 자력 부족이라면 회수 어려움. 사전 자료(시세·근저당) 평가가 핵심.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '미등기 신축 주택 보호', href: '/guide/jeonse/jeonse-housing-not-registered-deposit' },
      { label: '다가구 HUG 미가입 우선변제', href: '/guide/jeonse/jeonse-multifamily-priority-payment-no-hug' },
      { label: 'HUG 보증 청구 체크리스트', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '집주인 세금 체납 위험', href: '/guide/jeonse/jeonse-landlord-tax-delinquent-risk' },
    ],
  },

  // ─── 2. jeonse / jeonse-deposit-delay-interest-claim ───
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-delay-interest-claim',
    keyword: '보증금 지연 반환 지연이자',
    questionKeyword: '전세 만기 지났는데 임대인이 보증금을 차일피일 미루며 일부씩만 줘요. 지연이자 청구 가능한가요?',
    ctaKeyword: '보증금 지연이자 청구 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '보증금 지연 반환 — 4단계 12% 지연이자 청구 | 로앤가이드',
      description:
        '전세 만기 후 임대인이 보증금을 늦게 반환한다면 소송촉진법 12% 지연이자 + 4단계 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 계약 만료일이 두 달 지났는데 임대인이 \'다음 달에 줄게\' \'곧 줄게\' 미루기만 합니다. 일부 5,000만원만 받고 잔여 1억 5,000만원은 여전히 못 받았어요. 지연된 만큼 이자도 받을 수 있나요?" 보증금 지연 반환 시 ① 민법 제654조·제618조 임대차 종료 시 즉시 반환 의무 ② 소송촉진 등에 관한 특례법(소촉법) 제3조 연 12% 지연이자 ③ 잔여 보증금 분리 청구 ④ 임차권등기·소송 결합 4단계로 정리되는 영역입니다. 임대차 종료 후 임대인의 반환 지체는 \'법정 지체\'라 본인이 별도 청구하지 않아도 지연이자 권리가 발생. 본인이 소장 송달 후 소촉법 12% 가중 적용. 일부 수령은 권리 포기 아니므로 잔여분 청구·지연이자 모두 살아있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 보증금 지연 반환 4가지 청구 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 법정이자·소촉법 12%·일부 수령·내용증명 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 민법 제379조 법정이자 (연 5%)</strong> — 임대차 종료 시점부터 반환 시점까지 자동 발생. 별도 청구 없이도 권리 영역.</li>\n<li><strong>② 소촉법 제3조 연 12% 가중 (소장 송달 후)</strong> — 본인이 보증금반환소송 제기 + 소장 송달 다음 날부터 12% 적용. 강한 압박 영역.</li>\n<li><strong>③ 일부 수령 + 잔여분 분리 청구</strong> — 일부 수령은 권리 포기 아님. 잔여분 + 잔여분에 대한 지연이자 별도 청구 가능 영역.</li>\n<li><strong>④ 내용증명 + 임차권등기 + 소송 결합</strong> — 청구 자료 확보 + 우선변제권 유지 + 강제집행. 임대인 압박과 회수 동시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증금 지연 시 별도 청구 없이도 연 5% 자동 발생. 소장 송달 후 12%로 가중. 일부 수령은 권리 포기 아니라 잔여분 + 지연이자 모두 살아있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리 → 내용증명 → 임차권등기 → 지급명령·소송 → 강제집행 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (즉시)</strong> — 계약서·만기일·일부 수령 영수증·임대인 미루기 정황(문자·녹취).</li>\n<li><strong>2단계 — 내용증명 청구 (만기 후 1~2주)</strong> — 잔여 보증금 + 만기일 다음 날부터 연 5% 지연이자 청구. 회신 기한 7일 명시.</li>\n<li><strong>3단계 — 임차권등기명령 (이사 필요 시)</strong> — 관할 법원 신청. 등기 완료 후 이사. 우선변제권 유지.</li>\n<li><strong>4단계 — 지급명령·보증금반환 소송 (3,000만원 이상이면 소송)</strong> — 전자소송 가능. 소장 송달 후 12% 적용.</li>\n<li><strong>5단계 — 강제집행 (판결 확정 후)</strong> — 임대인 부동산·예금·급여 강제집행. 회수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보증금 지연이자 4단계 청구 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 자료 + 지연 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·만기일</strong> — 종료 시점 입증.</li>\n<li><strong>전입신고·확정일자</strong> — 대항요건·우선변제권.</li>\n<li><strong>일부 수령 영수증·이체 내역</strong> — 잔여분 액수.</li>\n<li><strong>임대인 미루기 정황</strong> — 문자·카톡·통화 녹취.</li>\n<li><strong>내용증명 사본·발송 영수증</strong> — 청구 자료.</li>\n<li><strong>이자 계산표</strong> — 만기 다음 날부터 일별 5%·소장 송달 후 12%.</li>\n<li><strong>등기부등본</strong> — 임대인 부동산 강제집행 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일부 수령 시 \'잔여분 청구권 보류\' 문구 영수증에 명시. 일부 수령이 \'합의\'로 해석되지 않게 주의. 합의 후 청구 어려운 정황 회피.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대인 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"새 세입자 들어와야 줄 수 있다" 주장 반박</strong> — 임대차 종료 시 즉시 반환 의무. 새 세입자는 임대인 사정. 지연이자 청구 가능 영역.</li>\n<li><strong>"보증금 일부 받았으니 끝" 주장 반박</strong> — 일부 수령은 권리 포기 아님. 잔여분 + 잔여분 지연이자 청구권 살아있는 영역.</li>\n<li><strong>"이자는 줄 수 없다" 주장 반박</strong> — 법정이자 자동 발생. 청구 안 했어도 권리 영역. 소송 시 명시 청구 필수.</li>\n<li><strong>"빌려달라" 사정 반박</strong> — 임대인 사정은 본인과 무관. 지연 자체로 이자 권리. 다만 지급 능력 자료 평가가 강제집행 효율 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임대차·소송 무료 상담.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세 피해 상담.</li>\n<li><strong>대한주택임차인협회 / 주거안정 상담</strong> — 시·도 주거복지센터.</li>\n<li><strong>전자소송 (ecfs.scourt.go.kr)</strong> — 지급명령·소송 온라인 신청.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대보증금 반환채권 양도와 지연이자',
        summary:
          '대법원 2024다67238 사건(대법원, 2025.10.16 선고)에서 법원은 임대인이 보증금을 약정대로 반환하지 않을 경우 임차인은 임차권등기명령 + 보증금반환청구 + 지연이자 청구 트랙으로 권리를 행사할 수 있다는 점을 확인했고, 임대차 종료 후 보증금 반환 지체는 임대인 책임 영역으로 본인 소장 송달일 다음 날부터 소송촉진 등에 관한 특례법 제3조에 따라 가중된 지연이자가 적용된다는 원칙도 확립되어 있습니다.',
        takeaway: '보증금 지연은 자동 5% + 소장 송달 후 12% 가중 영역이라, 만기·일부 수령·미루기 자료를 정리하면 4단계 청구 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '연 5%·12% 지연이자는 언제부터 계산하나요?',
        answer:
          '<strong>연 5%는 만기 다음 날부터, 12%는 소장 송달 다음 날부터입니다.</strong> 만기 후 임대인 반환 지체 자동 5%. 소송 제기 + 소장 송달이 12% 가중 시점.',
      },
      {
        question: '내용증명 보내고 얼마 기다려야 소송 가능한가요?',
        answer:
          '<strong>회신 기한 7~14일 후 바로 가능 영역입니다.</strong> 다만 임차권등기 + 지급명령(전자) 거치면 비용·시간 절감. 임대인 자력 충분이라면 지급명령 추천.',
      },
      {
        question: '일부만 받았는데 \'합의서\'에 사인하라고 합니다',
        answer:
          '<strong>합의서에 \'잔여분 포기\' 문구 있으면 사인 금지 영역입니다.</strong> \'잔여분 청구권 보류\'·\'일부 수령으로 한정\' 명시 후 사인. 모르고 사인 시 잔여 청구 어려운 다툼 영역.',
      },
      {
        question: '소액심판 vs 일반 소송 어떤 게 좋나요?',
        answer:
          '<strong>3,000만원 이하면 소액심판, 초과면 일반 소송입니다.</strong> 소액은 빠른 1심 결판. 일반 소송은 시간 걸리지만 항소·강제집행 결합. 보증금 액수 따라 판단.',
      },
      {
        question: '임대인이 자력 없으면 어떻게 되나요?',
        answer:
          '<strong>판결받아도 강제집행 회수 어려운 영역입니다.</strong> 등기부등본·재산 자료 사전 확인. 자력 부족이라면 임차권등기 + 경매 신청 + HUG 가입자라면 보증보험 청구 트랙.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '전세 일부 반환 대응', href: '/guide/jeonse/jeonse-partial-deposit-return-response' },
      { label: '임차권등기 후 미반환', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '보증금 반환 내용증명', href: '/guide/jeonse/deposit-return-notice-template' },
      { label: '지연이자 가산 청구', href: '/guide/jeonse/jeonse-refund-overdue-interest-claim' },
    ],
  },

  // ─── 3. stalking / stalking-minor-victim-guardian-report-track ───
  {
    domain: 'stalking',
    slug: 'stalking-minor-victim-guardian-report-track',
    keyword: '미성년자 스토킹 피해 보호자 신고',
    questionKeyword: '중학생 딸이 학교 동급생·온라인에서 스토킹을 당해요. 보호자로서 어떻게 신고하나요?',
    ctaKeyword: '미성년 스토킹 보호자 신고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '미성년 스토킹 피해 — 보호자 신고 4단계 트랙 | 로앤가이드',
      description:
        '미성년 자녀가 학교·온라인 스토킹 피해를 입었다면 친고죄 폐지 후 보호자 신고 + 학교·경찰 결합 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중학교 2학년 딸이 같은 반 남학생에게 \'좋아한다\'는 메시지를 시작으로 SNS 부계정 추적·하굣길 따라오기·집 앞 대기까지 받고 있어요. 딸은 \'무서워서 신고는 하지 말아달라\'는데 이대로 두면 안 될 것 같아요. 보호자가 신고할 수 있나요?" 미성년 스토킹은 ① 스토킹범죄처벌법 친고죄 폐지(2023.7.11 개정) ② 보호자 신고 가능 ③ 학교폭력예방법 결합 ④ 잠정조치·신변보호 4가지 트랙으로 대응 가능한 영역입니다. 친고죄 폐지로 피해자 의사와 무관하게 신고 가능. 미성년 보호자는 \'법정대리인\' 자격으로 경찰·학교 신고 모두 가능. 가해자가 미성년이라면 소년법 적용 + 학폭위 결합. 가해자가 성인이라면 일반 형사 절차 + 잠정조치 청구 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 미성년 스토킹 보호자 4가지 대응 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 친고죄 폐지·학교 신고·잠정조치·소년법 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 친고죄 폐지 후 보호자 신고 (스토킹법 제18조)</strong> — 2023.7.11 개정으로 친고죄·반의사불벌죄 폐지. 피해자 동의 없이도 보호자·제3자 신고 가능 영역.</li>\n<li><strong>② 학교폭력예방법 결합 (가해자 미성년·학교 내 정황)</strong> — 학폭위 신고 + 경찰 신고 동시. 학교는 24시간 이내 신고 의무.</li>\n<li><strong>③ 잠정조치·신변보호 (스토킹법 제8조)</strong> — 100m 이내 접근 금지·전기통신 금지. 등하굣길·집 보호.</li>\n<li><strong>④ 소년법 적용 (가해자 14세 이상 19세 미만)</strong> — 형사 + 보호처분(소년법). 가해자 보호자도 손해배상 책임 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친고죄 폐지로 피해자 의사 무관하게 신고 가능. 보호자는 법정대리인 자격으로 신고. 학교·경찰 동시 신고가 효과적. 가해자 미성년이면 소년법 + 학폭위 결합.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보호자 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 학교 신고 → 경찰 신고 → 잠정조치 → 학폭위·형사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 자녀 SNS 메시지·부계정 캡처·하굣길 정황·CCTV·증인(친구). 자녀와 협력해 즉시 백업.</li>\n<li><strong>2단계 — 학교 신고 (가해자 동급생·재학생)</strong> — 담임·학교폭력 책임교사·교감. 학폭위 24시간 이내 신고 의무. 자녀 보호조치 요청.</li>\n<li><strong>3단계 — 경찰 신고 (즉시)</strong> — 112 또는 ecrm.police.go.kr. 보호자 자격 + 친고죄 폐지로 자녀 동의 무관 신고 가능.</li>\n<li><strong>4단계 — 잠정조치·신변보호 청구 (1~2주)</strong> — 검사가 100m 접근 금지·전기통신 금지 청구. 등하굣길 동행 보호.</li>\n<li><strong>5단계 — 학폭위·형사 본안 (병행)</strong> — 학폭위 처분(전학·접촉금지) + 형사 절차. 가해자 미성년이면 소년법 보호처분 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">미성년 스토킹 보호자 4단계 대응을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 자료 + 보호자 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>자녀 SNS 메시지·DM 캡처</strong> — 가해자 본계정·부계정.</li>\n<li><strong>학교 등하굣길 CCTV·정황</strong> — 따라오기·대기 자료.</li>\n<li><strong>친구·동급생 증언</strong> — 학교 내 목격.</li>\n<li><strong>가족관계증명서·자녀 기본증명서</strong> — 보호자 자격.</li>\n<li><strong>학교 신고 기록·학폭위 접수증</strong> — 학교 대응.</li>\n<li><strong>경찰 신고 사건번호</strong> — 형사 진행.</li>\n<li><strong>자녀 정신과 진료 기록</strong> — 피해 자료. 보호자 동석 진료 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀가 신고를 두려워하면 보호자만 신고 진행 + 학폭위 절차에서 자녀 진술 익명 처리 요청. 자녀 정신적 부담 최소화 + 가해자 분리가 핵심 목표.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자·학교 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 짝사랑이라 스토킹 아니다" 주장 반박</strong> — 자녀 거부 의사 + 반복 접근이면 의도 무관 스토킹 영역. 친고죄 폐지로 자녀 동의 무관.</li>\n<li><strong>학교 미온적 대응 시 압박</strong> — 학폭법 신고 의무 위반은 학교장·교사 처분 사유. 교육청 민원 + 국민신문고 결합.</li>\n<li><strong>가해자 학부모 \'화해\' 요구 반박</strong> — 학폭 절차 진행 중 합의는 처분에 영향. 다만 자녀 보호 우선이라면 \'접근금지·전학\' 조건 합의 검토.</li>\n<li><strong>온라인 부계정 추적 시 정보통신망법 결합</strong> — 자녀 신상 캡처 + 새 계정 연락은 정보통신망법 추가 신고 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>117 학교폭력 신고센터 (24시간)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>여성긴급전화 1366·청소년 1388</strong> — 24시간 상담.</li>\n<li><strong>학교폭력 예방재단 / 청소년 상담복지센터 1388</strong></li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 미인식 사례에서도 스토킹 성립',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹범죄 처벌 등에 관한 법률 제2조 제1호의 정보통신망 이용 행위가 객관적·일반적으로 상대방에게 불안감 또는 공포심을 일으키기에 충분한 행위로 평가되는 경우에는 상대방이 실제로 그 행위를 인식했는지, 그 행위로 불안감 또는 공포심이 실제 야기되었는지와 무관하게 스토킹행위에 해당한다고 판시했습니다. 미성년 피해자가 두려움에 신고를 미루더라도 객관적 정황으로 스토킹 인정 가능하다는 시사점이 있습니다.',
        takeaway: '미성년 스토킹은 친고죄 폐지 + 보호자 신고 가능 영역이라, 자녀 SNS·학교 정황·CCTV 자료를 정리하면 4단계 대응 트랙(학교·경찰·잠정조치·학폭위)이 모두 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '자녀가 신고를 안 하고 싶어해요',
        answer:
          '<strong>친고죄 폐지로 자녀 동의 없이도 보호자 신고 가능 영역입니다.</strong> 자녀 부담 줄이려면 학폭위 자녀 진술 비대면·익명 요청. 정신적 회복이 우선이라면 학교·경찰 동시 + 자녀 진술 최소화 협의.',
      },
      {
        question: '가해자가 같은 반 학생인데 학폭위만 가도 되나요?',
        answer:
          '<strong>학폭위 + 경찰 신고 동시가 안전합니다.</strong> 학폭위는 학교 처분(전학·접촉금지) 한정. 형사 책임은 별도 영역. 잠정조치는 경찰·검사 트랙.',
      },
      {
        question: '가해자도 미성년인데 처벌 가능한가요?',
        answer:
          '<strong>14세 이상 19세 미만이면 소년법 적용 영역입니다.</strong> 형사 처벌 대신 보호처분(보호관찰·소년원). 14세 미만이면 형사 책임 없음 + 보호처분만. 가해자 보호자 손해배상 책임은 별개 영역.',
      },
      {
        question: '학교가 신고 접수 안 해줍니다',
        answer:
          '<strong>학폭법 신고 의무 위반 신고 가능 영역입니다.</strong> 117 학교폭력 신고센터 + 교육청 민원 + 국민신문고. 학교장·담임 처분 사유.',
      },
      {
        question: '잠정조치 받으면 학교 가는 길도 보호되나요?',
        answer:
          '<strong>등하굣길 100m 접근 금지 + 전기통신 금지 가능 영역입니다.</strong> 다만 같은 학교라면 학폭위 \'전학\' 처분이 더 효과적. 잠정조치 + 학폭 처분 결합.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '학교 후배 동급생 스토킹', href: '/guide/stalking/stalking-school-student-bullying-criminal' },
      { label: '학원 교회 공동체', href: '/guide/stalking/stalking-shared-community-school-church' },
      { label: 'SNS DM 차단 부계정', href: '/guide/stalking/stalking-sns-dm-block-fake-account-repeat' },
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '온라인 게임 괴롭힘', href: '/guide/stalking/stalking-online-game-harassment-checklist' },
    ],
  },

  // ─── 4. stalking / stalking-suspect-absconded-criminal-track ───
  {
    domain: 'stalking',
    slug: 'stalking-suspect-absconded-criminal-track',
    keyword: '가해자 잠적 후 형사 진행',
    questionKeyword: '스토킹 신고했는데 가해자가 잠적해서 연락이 안 닿아요. 형사 절차는 어떻게 진행되나요?',
    ctaKeyword: '가해자 잠적 형사 진행 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '가해자 잠적 — 4단계 형사·잠정조치 진행 | 로앤가이드',
      description:
        '스토킹 신고 후 가해자가 잠적했다면 기소중지·소재수사·잠정조치 유효성 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 전 남자친구를 스토킹으로 신고했는데 가해자가 자취를 감추고 핸드폰도 바뀌었다고 해요. 경찰에서는 \'소재 파악 중\'이라고만 하고 본인은 두려움에 일상이 무너지고 있어요. 가해자가 잠적하면 사건은 멈추는 건가요?" 가해자 잠적 시 ① 형사소송법 제247조 기소중지 ② 소재수사·통신사실확인 ③ 잠정조치 유효성 ④ 궐석재판·체포 트랙으로 형사 절차가 계속되는 영역입니다. 잠적해도 사건은 종결되지 않고 \'기소중지\' 상태로 보존. 가해자 발견 즉시 재개. 잠정조치는 가해자 잠적 중에도 효력 유지되고, 가해자가 숨어서라도 부재중 전화·메시지를 보내면 잠정조치 위반 가중 처벌 영역. 본인 신변보호는 별도 트랙으로 계속 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 가해자 잠적 시 4가지 진행 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 기소중지·소재수사·잠정조치·신변보호 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기소중지 (형사소송법 제247조)</strong> — 피의자 소재불명 시 기소를 일시 중지. 사건 종결 아님 + 발견 즉시 재개. 공소시효 정지 영역.</li>\n<li><strong>② 소재수사·통신사실확인</strong> — 경찰 소재수사 + 통신사 통신사실확인자료 조회 + 출입국 자료. 가해자 위치 추적.</li>\n<li><strong>③ 잠정조치 유효성</strong> — 잠적 중에도 잠정조치 효력 유지. 가해자가 부재중 전화·SNS 메시지 보내면 잠정조치 위반 가중 처벌 영역(2024도7832).</li>\n<li><strong>④ 궐석재판·신변보호</strong> — 일정 요건 충족 시 가해자 부재라도 궐석재판 가능. 본인은 신변보호조치(특별보호) 별도 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 잠적은 사건 종결 아님. 기소중지로 사건 보존 + 잠정조치 효력 유지. 가해자가 숨어서라도 연락 시도하면 추가 처벌. 본인 신변보호 별도 진행 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 진행 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사건 진행 확인 → 소재수사 요청 → 잠정조치 점검 → 신변보호 → 발견 시 재개 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건 진행 확인 (즉시)</strong> — 담당 경찰관·검사에게 진행 상황 + 기소중지 여부 문의. 사건 처분 결과 통지서 신청.</li>\n<li><strong>2단계 — 소재수사 적극 요청 (1~2주)</strong> — 통신사실확인·출입국 조회·가해자 가족·지인 탐문 요청. 본인이 가해자 정보(주소·차량·SNS) 추가 제공.</li>\n<li><strong>3단계 — 잠정조치 점검·연장 (만료 전)</strong> — 기존 잠정조치 만료 시 검사 청구로 재청구·연장 가능 영역(2022모2092).</li>\n<li><strong>4단계 — 신변보호조치 신청</strong> — 경찰 신변보호심사위원회 신청. 임시숙소·112 위치등록·신변경호 등 결합.</li>\n<li><strong>5단계 — 가해자 발견 시 재개</strong> — 발견 즉시 체포·구속 + 형사 본안 진행. 그동안 잠정조치 위반 정황 추가 입건.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">가해자 잠적 후 4단계 형사 진행 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사건 자료 + 가해자 추적 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건번호·접수증</strong> — 기소중지 확인용.</li>\n<li><strong>잠정조치 결정문</strong> — 효력 기간·연장 자료.</li>\n<li><strong>가해자 정보</strong> — 주소·연락처·SNS·차량·직장.</li>\n<li><strong>가해자 가족·지인 정보</strong> — 소재수사 협조 자료.</li>\n<li><strong>최근 연락 정황</strong> — 부재중 전화·SNS 메시지(잠정조치 위반).</li>\n<li><strong>신변보호 신청서</strong> — 경찰 양식.</li>\n<li><strong>피해 자료·진단서</strong> — 정신과·신변 위협 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가해자 잠적 중에도 부재중 전화·수신차단 표시 자료가 잠정조치 위반 결정적 자료(2024도7832). 핸드폰 통화 기록 백업 + 발신번호 저장 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 우려와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"잠적하면 사건 끝나는 거 아닌가" 우려 해소</strong> — 기소중지로 사건 보존. 공소시효 정지. 발견 즉시 재개 영역.</li>\n<li><strong>"잠정조치도 의미 없는 거 아닌가" 우려 해소</strong> — 잠적 중에도 효력 유지. 가해자 연락 시 위반 가중 처벌 영역.</li>\n<li><strong>본인 위치 노출 우려</strong> — 신변보호조치 + 112 위치등록 + 임시숙소 신청. 주소 비공개 가능 영역.</li>\n<li><strong>가해자 출국 정황</strong> — 출국 자료 출입국관리소 조회 + 인터폴 협조 영역. 다만 처벌 트랙은 시간 걸림.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>112 신고 + 신변보호심사위원회</strong></li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담·임시숙소.</li>\n<li><strong>한국여성의전화 02-2263-6464</strong> — 스토킹 피해 지원.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부재중 전화·수신차단 표시도 잠정조치 위반',
        summary:
          '대법원 2024도7832 사건(대법원, 2024.09.27 선고)에서 법원은 피고인이 전화를 걸어 피해자 휴대전화에 부재중 전화 문구·수신차단기호 등이 표시되도록 한 경우, 실제 전화통화가 이루어졌는지와 상관없이 \'전화의 부호·문언을 송신하지 말 것\'을 명하는 잠정조치를 위반한 것이라고 판시했습니다. 또한 대법원 2022모2092(2023.02.23) 판결은 잠정조치 기간 만료 후에도 검사가 동일한 스토킹범죄사실로 새로운 잠정조치를 청구할 수 있다고 판시해, 가해자가 잠적해도 잠정조치는 연장·재청구로 보호 폭이 유지된다는 시사점이 있습니다.',
        takeaway: '가해자 잠적은 사건 종결이 아닌 기소중지 영역이라, 사건번호·잠정조치 결정문·연락 자료를 정리하면 4단계 진행 트랙(소재수사·잠정조치 연장·신변보호·발견 시 재개)이 모두 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '기소중지되면 사건은 끝나나요?',
        answer:
          '<strong>종결 아닌 보존 상태입니다.</strong> 피의자 소재불명 시 기소를 일시 중지. 발견 즉시 재개. 공소시효 정지 영역.',
      },
      {
        question: '잠정조치 만료되면 효력 끝나나요?',
        answer:
          '<strong>검사 재청구로 연장 가능 영역입니다(2022모2092).</strong> 만료 전 검사에게 연장·재청구 요청. 동일 사건사실 + 재발 우려 자료로 청구.',
      },
      {
        question: '가해자가 부재중 전화만 걸어요. 잠정조치 위반인가요?',
        answer:
          '<strong>위반입니다(2024도7832).</strong> 통화 안 됐어도 부재중 전화·수신차단 표시 자체가 \'문언 송신\'으로 잠정조치 위반. 추가 입건.',
      },
      {
        question: '본인 주소 노출이 두려워요',
        answer:
          '<strong>신변보호조치 + 112 위치등록 + 임시숙소 신청으로 보호 가능 영역입니다.</strong> 주소 비공개 + 신변경호 결합. 경찰 신변보호심사위원회 신청.',
      },
      {
        question: '가해자가 해외로 도망가면 어떻게 되나요?',
        answer:
          '<strong>출입국 조회 + 인터폴 협조 트랙입니다.</strong> 다만 시간 걸림. 본인은 신변보호 + 잠정조치 유지로 국내 안전 확보 우선.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '잠정조치 항고 절차', href: '/guide/stalking/stalking-provisional-measure-appeal-procedure' },
      { label: '긴급응급조치 신청', href: '/guide/stalking/stalking-emergency-measure-application' },
      { label: '신변보호 즉시 대응', href: '/guide/stalking/stalking-immediate-response' },
      { label: '신고 후 접근금지', href: '/guide/stalking/stalking-report-and-restraining-order' },
    ],
  },
];
