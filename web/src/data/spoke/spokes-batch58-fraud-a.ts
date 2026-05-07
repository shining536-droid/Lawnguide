import { SpokePage } from '../spoke-pages';

// batch58 fraud A — 3개:
// 1. 보험사기 입원 부풀리기 가해자 방어 (실손보험 통원→입원 의심)
// 2. 분양사기 다수 피해자 집단 대응 (시행사 잠적·미준공)
// 3. 유언장 위조 사기 피해자 회수 (상속재산 가로채기)
//
// 고유 존재 이유:
// 1. 이 페이지는 통원치료로 충분한 병증인데 입원 진료를 받아 보험금을 청구한 일로 보험사기 혐의를 받는 사람이 입원 필요성·기망 의도 부재 4가지 방어 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 분양 시행사가 계약금·중도금만 받고 준공·등기를 미루며 잠적한 다수 피해자가 사기 + 배임 + 집단소송 + 시공사 책임 4가지 회수 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 형제자매 등이 유언장을 위조해 상속재산을 가로챈 정황을 발견한 피해자가 사문서위조·사기 + 유언효력 무효 + 상속회복 4단계 회수 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58FraudA: SpokePage[] = [
  // ─── 1. fraud / fraud-insurance-hospital-padding-accused ───
  {
    domain: 'fraud',
    slug: 'fraud-insurance-hospital-padding-accused',
    keyword: '보험사기 입원 부풀리기 방어',
    questionKeyword: '실손보험 입원 진료 받았는데 보험사기로 신고됐어요. 어떻게 방어하나요?',
    ctaKeyword: '보험사기 입원 진료 방어 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '보험사기 입원 부풀리기 의심 — 4가지 방어 트랙 | 로앤가이드',
      description:
        '실손보험 입원 진료가 통원치료로 충분했다며 보험사기로 신고됐다면 입원 필요성·기망 의도 부재 4가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"허리 통증으로 정형외과에서 2주 입원 진료를 받았고 실손보험금 300만원을 청구했어요. 그런데 보험회사가 \'통원치료로 충분했다\'며 보험사기방지법 위반으로 신고했다는 통지를 받았습니다." 입원 부풀리기 보험사기는 보험사기방지특별법 + 형법 제347조 사기죄 결합 영역이지만, 대법원 2021도10855·2007도2941 판결은 \'입원 필요성\'과 \'기망 의도\'가 결합돼야 사기 성립이라고 봤습니다. 입원 결정은 의료진의 판단 영역이라, 환자 본인이 입원의 의학적 필요성을 부정할 수 없는 사례가 다수예요. ① 의료진 판단 의존 ② 입원기간 6시간 기준 ③ 본인 기망 의도 부재 ④ 보험약관 입원 정의 4가지 방어 트랙을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보험사기 입원 부풀리기 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료진 판단·6시간 체류·기망 부재·약관 정의 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 의료진의 입원 결정 판단</strong> — 입원 여부는 환자가 결정하는 영역이 아닌 주치의의 의학적 판단. 본인이 \'입원해도 되냐\'고 물어본 정황·진료기록부 입원 사유는 본인 기망 의도 부재 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>② 입원의 객관적 기준 충족</strong> — 대법원 2004도6557은 \'입원수속 + 고정 병실 배정 + 6시간 이상 체류\'를 입원의 외형적 기준으로 봤습니다. 형식 요건 충족 + 의료진 판단이 결합되면 입원 부정이 어려운 사례가 있어요.</li>\n<li><strong>③ 본인 기망 의도 부재</strong> — 보험사기는 \'사실을 알리지 않은 채 입원기간 충족 주장\'(대법원 2007도2941)이 핵심. 본인이 의료진 진단대로 따랐다면 기망 부정 영역.</li>\n<li><strong>④ 약관상 \'입원\' 정의 다툼</strong> — 실손보험 약관의 \'입원\' 정의가 모호하거나 의료진 판단을 따르도록 돼 있다면 다툴 여지. 약관 해석은 작성자(보험사) 불리 원칙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2021도10855는 통원치료 충분한데 15회 입원진료 받은 사안을 유죄로 판단하면서도 보험사기방지특별법 시행 전후 행위는 별도 평가했습니다. 본인 기망 의도와 의료진 판단의 분리 입증이 핵심 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료기록 보존 → 변호인 선임 → 조사 출석 → 검찰 송치 → 본안 변론 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 의료기록 보존 (즉시)</strong> — 진료기록부·입원확인서·의사 소견서·검사 결과·통증·증상 기록. 입원 필요성 의학적 자료가 핵심.</li>\n<li><strong>2단계 — 변호인 선임 (출석 전)</strong> — 보험사기 방어는 의학적 자료 정리가 결정적. 변호인 + 의료 자문 결합 검토.</li>\n<li><strong>3단계 — 경찰·금감원 조사 출석 (10~14일 내)</strong> — 출석요구서 받은 후 14일 이내 출석. 의료기록 + 변호인 의견서 동반.</li>\n<li><strong>4단계 — 검찰 송치 단계 (조사 후 1~3개월)</strong> — 보험사기방지법 사건은 검찰이 의료자문·심평원 자료 확인. 추가 자료 제출 검토.</li>\n<li><strong>5단계 — 기소 시 형사재판 (기소 후 2~6개월)</strong> — 의학 감정·주치의 증인 신청. 입원 필요성 의학적 입증이 무죄 핵심.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">보험사기 입원 부풀리기 4가지 방어 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의학 자료 + 본인 행적 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>진료기록부 사본 (입·퇴원 전후)</strong> — 의무기록 사본 발급 신청.</li>\n<li><strong>입원 확인서·의사 소견서</strong> — 입원 필요성 의학적 판단 입증.</li>\n<li><strong>검사 결과지 (X-ray·MRI·혈액검사)</strong> — 객관적 병증 자료.</li>\n<li><strong>통증·증상 일지</strong> — 입원 전 호소 기록.</li>\n<li><strong>실손보험 약관 사본</strong> — 입원 정의·청구 요건.</li>\n<li><strong>보험금 청구서·지급 내역</strong> — 청구 시점·금액.</li>\n<li><strong>주치의 진술서</strong> — 입원 결정 근거 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록부에 \'환자 강력 요구\'·\'환자가 입원 원함\' 표현이 없고 \'의학적 입원 필요\'·\'경과 관찰 위해 입원\' 등 의료진 판단 표현이 적혀 있다면 본인 기망 부재 강한 정황 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·금감원 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"심평원 자문 결과 통원치료 가능" 주장 반박</strong> — 건강보험심사평가원 자문이 절대적이지 않습니다. 대법원 2017도12671은 심평원 자료의 증거능력은 인정하되 입원 필요성 판단은 종합 심사 영역으로 봤습니다.</li>\n<li><strong>"주치의와 공모" 주장 반박</strong> — 환자가 의사와 사기 공모를 했다는 주장은 카톡·금전 거래 등 구체적 정황 입증돼야 합니다. 단순 입원 진료만으로 공모 인정은 어려운 영역.</li>\n<li><strong>"보험금 환수 + 형사 별개" 주의</strong> — 보험회사 민사 환수 청구는 형사 트랙과 별도. 무죄 받아도 민사상 환수가 인정될 수 있어, 양 트랙 동시 검토.</li>\n<li><strong>"자수 시 감경" 활용</strong> — 보험사기방지법 제5조 자수 감경 규정. 다만 무죄 다툼과 자수는 양립 어려워 변호사 자문 후 결정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 방어 자격 요건 무료 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험사기 처리 절차·민원 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시 국선 선임.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통원치료 가능 병증의 입원진료와 사기죄 성립요건',
        summary:
          '대법원 2021도10855 사건(대법원, 2022.01.13 선고)에서 법원은 피고인이 통원치료로 충분한 병증인데도 총 15회에 걸쳐 입원진료를 받은 다음 보험회사에 보험금 지급을 청구한 사안에서 보험사기방지특별법 위반 + 사기죄 성립 여부를 검토하면서, 보험사기방지특별법 시행 전후 행위를 별도로 평가하는 등 입원 필요성·기망 의도의 종합 심사 기준을 제시했습니다. 또한 대법원 2007도2941 사건은 \'치료의 실질이 통원치료이거나 필요 이상의 장기입원을 한 후 그러한 사정을 알리지 않은 채 보험약관 입원기간을 충족시켰다고 주장하면서 보험금을 청구하는 행위\'가 사기죄에 해당한다고 판시했습니다.',
        takeaway: '입원 부풀리기 보험사기는 의학적 입원 필요성과 본인 기망 의도가 결합돼야 성립 영역으로 평가될 여지가 있어, 진료기록부·의사 소견서·약관 정의를 정리하면 무고 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '주치의가 입원하라고 해서 입원했는데 사기로 신고됐어요',
        answer:
          '<strong>의료진 판단에 따른 입원은 본인 기망 부재 강한 정황 자료입니다.</strong> 진료기록부에 \'의학적 입원 필요\'·\'경과 관찰 위해 입원\' 등 의사 판단 표현이 적혀 있다면 사기 의도 부정 트랙. 주치의 진술서·소견서 확보가 핵심.',
      },
      {
        question: '보험사가 \"보험금 환수만 하면 형사 안 간다\"고 합니다',
        answer:
          '<strong>구두 약속만으로 형사 트랙이 사라지지 않을 수 있습니다.</strong> 환수 합의 후에도 보험사가 별도 형사 신고하는 사례가 있어, 합의서에 \'형사 고소 취하·불제기 약정\' 명시 + 변호사 자문 후 결정.',
      },
      {
        question: '심평원이 \"통원치료 충분\"이라고 자문했다는데요',
        answer:
          '<strong>심평원 자문이 절대적이지 않습니다.</strong> 대법원 2017도12671은 심평원 자료의 증거능력은 인정하되 입원 필요성은 종합 심사 영역으로 봤습니다. 별도 의학 감정·전문의 의견서로 다툴 수 있는 영역.',
      },
      {
        question: '하루 6시간 미만 입원도 보험금 청구했는데 문제 되나요?',
        answer:
          '<strong>대법원 2004도6557은 \"6시간 이상 체류\"를 입원의 외형 기준으로 봤습니다.</strong> 6시간 미만은 입원 부정 강한 정황 영역. 다만 진료기록의 입원 사유·증상 정도에 따라 사례별로 다른 영역.',
      },
      {
        question: '보험금 자진 환수하면 형사처벌 면제되나요?',
        answer:
          '<strong>자진 환수는 양형 감경 사유이지 자동 면제는 아닙니다.</strong> 보험사기방지법 제5조 자수 감경은 별도 요건. 환수 + 자수 결합으로 처분 경감 가능성. 변호사·법률구조공단 132 상담 후 결정.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 누명 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 가해자 1차 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '보험금 사기 공모 무고', href: '/guide/fraud/fraud-insurance-conspiracy-falsely-accused' },
      { label: '사기 피의자 신문 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '사기 합의금 감경 효과', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
    ],
  },

  // ─── 2. fraud / fraud-real-estate-presale-mass-victims ───
  {
    domain: 'fraud',
    slug: 'fraud-real-estate-presale-mass-victims',
    keyword: '분양사기 다수 피해자 집단 대응',
    questionKeyword: '신축빌라 분양 계약금 5천만원 보냈는데 시행사가 잠적했고 피해자가 30명입니다. 어떻게 회수하나요?',
    ctaKeyword: '분양사기 다수 피해자 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '분양사기 다수 피해자 집단 대응 — 4가지 회수 트랙 | 로앤가이드',
      description:
        '신축빌라·아파트 분양 시행사가 계약금만 받고 잠적한 다수 피해자라면 사기 + 배임 + 집단소송 + 시공사 책임 4가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신축빌라 분양 광고를 보고 계약금 5천만원 + 중도금 1억 5천만원을 송금했는데, 준공 예정일이 2번 미뤄지고 시행사 대표는 연락두절이에요. 같은 처지의 피해자가 30명이 넘는다고 들었습니다." 분양사기 다수 피해자 사안은 형법 제347조 사기죄 + 특정경제범죄가중처벌법(사기·배임) + 민사 부당이득반환 + 집단 대응 결합 영역입니다. 대법원 2023도13514는 다수 피해자에 대해 각각 기망행위를 한 경우 피해자별로 독립한 사기죄가 성립한다고 판시했고, 대법원 2008도5618은 분양대금 편취 사기의 \'편취 범의 판단 시점\'을 구체화했어요. 다수 피해자 결합으로 ① 사기·특경법 고소 ② 시공사 책임 추적 ③ 시행사 자산 가처분 ④ 집단소송 4가지 회수 트랙이 검토 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 분양사기 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 사기 고소·시공사 책임·자산 가처분·집단소송 4단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사기·특경법 고소 (형법 제347조 + 특경법 제3조)</strong> — 다수 피해자 합산 5억 이상이면 특경법 가중처벌 대상. 시행사 대표·직원의 처음부터의 분양 의사 부재·자금 유용 정황이 핵심 자료. 대법원 2008도5618은 편취 범의 판단을 \'분양 시점 자금 사정·시공 진행 정도\'로 봤습니다.</li>\n<li><strong>② 시공사 책임 추적 (배임·공동책임)</strong> — 시행사·시공사 분양수입금 공동계좌 유용은 시공사 배임 영역(대법원 2008도373). 시공사가 분양수입금을 다른 용도로 사용한 정황은 책임 추적 트랙.</li>\n<li><strong>③ 시행사·대표 자산 가처분 (송금 1주 골든타임)</strong> — 시행사 명의 부동산·예금·유보금 가처분. 대표 개인 자산 추적은 등기부·차량등록·신용정보 영역.</li>\n<li><strong>④ 집단소송 + HUG 분양보증 확인</strong> — 30명 이상 결합 시 공동 소송대리·고소단 구성 효과. 또한 HUG 분양보증 가입 단지라면 환급·분양이행 보증 검토(주택도시보증공사).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다수 피해자 결합은 단독 회수보다 ① 검찰 우선 수사 ② 시공사 책임 압박 ③ HUG 보증 확인 ④ 자산 동결 효과가 결합돼 회수 가능성을 높이는 영역. 송금 후 1~2주가 가처분 골든타임.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 피해자 모집 → 사기 고소 → 자산 가처분 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 분양 광고·모델하우스 사진·분양계약서·계약금·중도금 영수증·시행사 사업자등록·시공사 정보·HUG 분양보증증서.</li>\n<li><strong>2단계 — 피해자 모집·집단 구성 (1~2주)</strong> — 카페·단톡방·현장 안내. 30명 이상 결합 시 검찰 인지수사 가능성 상승.</li>\n<li><strong>3단계 — 사기·특경법 고소 (2~4주)</strong> — 관할 경찰서 또는 검찰 직접 고소. 다수 피해자 + 5억 이상이면 특경법 적용 검토. 합산 피해액 정리 자료 핵심.</li>\n<li><strong>4단계 — 시행사·시공사 자산 가처분 (송금 1~2주 골든타임)</strong> — 부동산 + 예금 + 유보금 가처분. HUG 분양보증 단지라면 환급·이행 청구 트랙 별도.</li>\n<li><strong>5단계 — 민사 회수 + HUG 보증 (1~6개월)</strong> — 부당이득반환·손해배상 청구. 분양보증 단지라면 HUG 환급(최대 분양가 100%·계약기간) 또는 분양이행 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">분양사기 다수 피해자 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 분양 계약 자료 + 시행사·시공사 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>분양계약서·홍보 팸플릿</strong> — 분양 조건·준공 예정일·면적.</li>\n<li><strong>계약금·중도금 영수증·이체 내역</strong> — 시행사 계좌·송금 시점.</li>\n<li><strong>시행사 사업자등록·법인등기부</strong> — 대표·자본금·설립일.</li>\n<li><strong>시공사 정보 (도급계약서 사본 등)</strong> — 시공사 책임 추적 자료.</li>\n<li><strong>HUG 분양보증증서</strong> — 보증 가입 여부·환급 한도.</li>\n<li><strong>건축허가·착공신고 서류</strong> — 실제 분양 의사 입증.</li>\n<li><strong>현장 사진·드론 영상</strong> — 미준공·공사 중단 정황.</li>\n<li><strong>다른 피해자 명단·연락처</strong> — 집단 대응 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시행사가 \'분양 자금을 다른 사업장으로 유용\'한 정황(자금 흐름 추적)은 시공사 배임·공동책임 핵심 자료. 분양수입금 공동계좌 약정 위반은 대법원 2008도373이 시공사 배임 인정한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 분양 지연" 주장 반박</strong> — 시행사 측이 \'경기 침체로 지연\'을 주장하면 분양 시점 자금 사정·시공 진행 정도(대법원 2008도5618 기준) 입증으로 편취 범의 다툼.</li>\n<li><strong>"시공사는 책임 없다" 주장 반박</strong> — 시공사가 분양수입금을 공동계좌 약정 위반·다른 용도 사용한 정황 있다면 시공사 배임·공동책임 영역.</li>\n<li><strong>HUG 분양보증 미가입 단지 주의</strong> — 보증 미가입 단지는 회수 트랙이 좁아짐. 시행사 자산 가처분이 사실상 유일한 회수 영역.</li>\n<li><strong>다수 피해자 결합 시 우선 수사 가능성</strong> — 30~50명 이상 결합되면 검찰 인지수사·집중 수사반 배정 가능성. 피해자 모집이 회수율의 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>주택도시보증공사 HUG 1566-9009</strong> — 분양보증 환급·이행 상담.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>한국소비자원 1372</strong> — 분양 피해 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 사기 피해 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 분양사기와 피해자별 독립한 사기죄',
        summary:
          '대법원 2023도13514 사건(대법원, 2023.12.21 선고)에서 법원은 다수의 피해자에 대하여 각각 기망행위를 하여 각 피해자로부터 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 피해자별로 독립한 사기죄가 성립한다고 판시했습니다. 또한 대법원 2008도5618 사건은 분양대금 편취에 의한 사기죄 관련 \'편취 범의의 판단 시점 및 판단 기준\'을 분양계약 시점의 자금 사정·시공 진행 정도로 봤고, 대법원 2008도373 사건은 시행사·시공사 분양수입금 공동계좌 유용 사안에서 시공사 배임 책임을 인정한 영역입니다.',
        takeaway: '분양사기 다수 피해자 사안은 사기 + 배임 + 집단 대응 결합 영역으로 평가될 여지가 있어, 분양계약서·HUG 보증증서·시공사 도급계약·자금 흐름 자료를 정리하면 회수 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '시행사 대표가 잠적했는데 어떻게 자산을 추적하나요?',
        answer:
          '<strong>법인등기부·신용정보·차량등록·등기부 검색이 첫 단계입니다.</strong> 변호사 사실조회 신청으로 금융자산·부동산 추적 가능. 다수 피해자 결합 시 비용 분담으로 효율적 영역.',
      },
      {
        question: 'HUG 분양보증 가입 단지인지 어떻게 확인하나요?',
        answer:
          '<strong>분양계약서에 분양보증 가입 명시 또는 HUG 1566-9009 직접 문의입니다.</strong> 보증 가입 단지라면 시행사 부도·잠적 시 HUG가 분양가 일부 환급 또는 분양이행 처리 트랙. 보증서 사본 확보가 핵심.',
      },
      {
        question: '피해자 30명을 어떻게 모으나요?',
        answer:
          '<strong>분양 현장 안내·네이버 카페·단톡방 결합이 효과적입니다.</strong> 분양 광고에 응한 피해자가 분산돼 있어 카페·블로그 검색으로 추가 발견 사례 다수. 피해자 명단 확보가 검찰 우선수사 핵심.',
      },
      {
        question: '시공사가 \"우리도 시행사 잠적 피해자\"라고 합니다',
        answer:
          '<strong>시공사도 피해자일 수 있지만 분양수입금 관리 책임은 별개 영역입니다.</strong> 분양수입금 공동계좌 약정 + 자금 유용 정황 있다면 시공사 책임. 도급계약서·자금 흐름 자료가 핵심.',
      },
      {
        question: '계약금만 5천만원이고 중도금은 안 보냈어요',
        answer:
          '<strong>계약금만으로도 사기 고소·민사 회수 가능 영역입니다.</strong> 다수 피해자 합산이 5억 이상이면 특경법 가중처벌 대상. 본인 단독 5천만원이라도 다른 피해자 결합으로 회수율 상승 트랙.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '직거래 가계약금 잠적', href: '/guide/fraud/fraud-real-estate-direct-deal-deposit-vanish' },
      { label: '갭투자 분양 사기 무고', href: '/guide/fraud/fraud-gap-investment-presale-accused' },
      { label: '건설 보증금 잠적 회수', href: '/guide/fraud/fraud-construction-deposit-scam-recovery' },
      { label: '투자 사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-preparation' },
    ],
  },

  // ─── 3. fraud / fraud-will-forgery-inheritance-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-will-forgery-inheritance-recovery',
    keyword: '유언장 위조 사기 상속재산 회수',
    questionKeyword: '형이 유언장을 위조해 부친 재산을 모두 가져갔어요. 상속재산 회수 가능한가요?',
    ctaKeyword: '유언장 위조 사기 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '유언장 위조 사기 — 4단계 상속재산 회수 절차 | 로앤가이드',
      description:
        '형제·자매가 유언장을 위조해 상속재산을 가로챘다면 사문서위조·사기 + 유언효력 무효 + 상속회복 4단계 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부친이 돌아가신 후 형이 \'생전에 자필 유언장을 받아뒀다\'며 부친 명의 부동산·예금을 모두 자기 앞으로 돌렸어요. 그런데 그 유언장 글씨체가 부친 필체와 너무 달라 위조 의심이 듭니다." 유언장 위조 사기는 형법 제231조 사문서위조 + 형법 제347조 사기죄 + 민법 제999조 상속회복청구권 결합 영역입니다. 대법원 97도472는 \'유증 받은 재산에 상속재산분할청구가 제기됐다는 사정을 매수인에게 고지하지 않고 매매한 행위\'를 사기죄로 봤고, 대법원 2024도10141·2024도15240은 사문서위조·사기 공모공동정범 성립을 구체화했어요. ① 형사 고소 ② 유언효력 무효 ③ 상속회복청구 ④ 부동산 가처분 4단계 회수 트랙을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유언장 위조 사기 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사 고소·유언무효·상속회복·가처분 4단계로 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사문서위조·위조사문서행사·사기 고소</strong> — 자필 유언장 필체 감정 + 사망 직전 행적 + 유언 작성 정황으로 위조 입증. 대법원 2024도15240은 사문서위조·사기 공모공동정범 성립 요건을 구체화.</li>\n<li><strong>② 유언무효확인의 소 (민법 제1066조)</strong> — 자필증서 유언은 ① 전문 자서 ② 연월일 ③ 주소 ④ 성명 ⑤ 날인 5요건 필수. 1요건이라도 흠결이면 무효 영역. 형식 흠결 + 내용 위조 결합 입증.</li>\n<li><strong>③ 상속회복청구 (민법 제999조)</strong> — 진정상속인이 참칭상속인을 상대로 상속재산 반환 청구. 침해를 안 날부터 3년·상속개시 후 10년 제척기간.</li>\n<li><strong>④ 부동산 가처분·예금 동결 (즉시)</strong> — 위조 유언장으로 등기된 부동산 처분금지 가처분. 예금·증권은 가압류. 처분 차단이 회수의 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유언장 위조는 ① 형사(사문서위조·사기) ② 민사(유언무효+상속회복) ③ 보전(가처분) 3트랙 동시 진행이 일반적. 제척기간 3년/10년이 진행되므로 \'위조 의심\' 시 즉시 가처분이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 수집 → 부동산 가처분 → 형사 고소 → 유언무효 소송 → 상속회복 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 수집 (즉시)</strong> — 망인 필체 자료(편지·일기·서명) + 사망 직전 의료기록(치매·의식 상태) + 유언장 사본 + 등기부등본 + 망인 행적 자료.</li>\n<li><strong>2단계 — 부동산 처분금지 가처분 (1~2주 내)</strong> — 위조 유언장으로 등기된 부동산 처분금지 가처분 신청. 매각·근저당 차단. 청구액 10% 보증금.</li>\n<li><strong>3단계 — 사문서위조·사기 고소 (2~4주)</strong> — 관할 경찰서 또는 검찰. 필체 감정·정황 자료 + 형 진술서·등기 신청 자료 첨부.</li>\n<li><strong>4단계 — 유언무효확인의 소 (민사, 1~6개월)</strong> — 자필증서 5요건 흠결 + 위조 입증. 형사 결과 활용 가능. 인낙·화해 시 조기 종결.</li>\n<li><strong>5단계 — 상속회복청구·등기 회복 (6개월~1년)</strong> — 유언무효 판결 후 상속회복청구. 등기 말소·진정명의 회복 등기로 부동산 명의 복원.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">유언장 위조 사기 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 필체 자료 + 망인 상태 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>망인 필체 비교 자료</strong> — 편지·일기·계약서·서명·통장 글씨 등.</li>\n<li><strong>유언장 사본·원본 확인 신청</strong> — 가정법원 검인·등기 첨부 자료.</li>\n<li><strong>망인 의료기록 (사망 1년 전~사망 시점)</strong> — 치매·의식 상태·인지 능력 자료.</li>\n<li><strong>망인 행적 자료</strong> — 통화·카톡·만남 기록·여행 기록.</li>\n<li><strong>부동산 등기부등본·예금 잔고증명</strong> — 상속재산 현황.</li>\n<li><strong>가족관계증명서·기본증명서</strong> — 상속인 자격 입증.</li>\n<li><strong>참칭상속인(형) 등기 신청 자료</strong> — 위조 유언장 활용 정황.</li>\n<li><strong>필적 감정 의뢰서</strong> — 국립과학수사연구원·민간 감정기관.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 망인이 사망 전 치매 진단을 받았거나 인지장애 상태였다는 의료기록이 있으면 유언능력 부재로 유언 자체가 무효 영역. 형식 흠결 + 능력 부재 + 위조 3중 입증이 회수 가능성을 높이는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"이미 부동산을 매각했다" 주장 반박</strong> — 제3자 매각 시 선의·악의 제3자 구분이 핵심. 가처분 없이 매각 진행됐다면 회수 어려운 사례. 즉시 가처분이 결정적인 영역.</li>\n<li><strong>제척기간 3년/10년 주의</strong> — 침해를 안 날부터 3년·상속개시 후 10년 도과 시 상속회복청구 불가. \'위조 의심\' 시점 명확히 기록 + 즉시 행동.</li>\n<li><strong>형사 무혐의 시에도 민사 가능</strong> — 형사상 고의 입증 부족으로 무혐의 받아도 민사 유언무효·상속회복은 별도 트랙. 입증 책임도 다른 영역.</li>\n<li><strong>유류분 청구 별도 트랙</strong> — 유언이 유효하더라도 유류분(법정상속분의 1/2) 청구 가능 영역. 유언무효와 유류분 동시 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 상속·사기 무료 상담.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>국립과학수사연구원 (필적 감정)</strong> — 검찰·법원 의뢰로 감정.</li>\n<li><strong>가정법원 가사조사관</strong> — 상속재산분할 사건 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유증재산 사기와 사문서위조 공모공동정범',
        summary:
          '대법원 97도472 사건(대법원, 1997.07.08 선고)에서 법원은 유증을 받은 재산에 대하여 상속재산분할청구가 제기되어 있다는 사정을 매수인에게 고지하지 아니하고 수증재산을 매매한 행위가 사기죄에 해당한다고 판시했습니다. 또한 대법원 2024도15240·2024도10141 사건은 사기·사문서위조·위조사문서행사 공모공동정범의 성립요건을 구체화하면서 \'기망방법을 구체적으로 몰랐던 경우에도 공모관계가 인정되는지\'를 다룬 영역입니다. 유언장 위조로 상속재산을 가로챈 행위는 사문서위조·위조사문서행사 + 사기 결합 영역으로 평가될 여지가 있습니다.',
        takeaway: '유언장 위조 사기는 형사(사문서위조·사기) + 민사(유언무효·상속회복) + 보전(가처분) 3트랙 결합 영역으로, 망인 필체·의료기록·등기 자료를 시간순 정리하면 회수 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '유언장 글씨체만 다르고 다른 정황은 없는데 위조 입증되나요?',
        answer:
          '<strong>국립과학수사연구원·민간기관 필적 감정이 핵심 자료입니다.</strong> 망인 필체 자료(편지·일기·서명) 5점 이상 확보 후 감정 의뢰. 자필증서 유언 5요건(전문 자서·연월일·주소·성명·날인) 흠결 결합 입증.',
      },
      {
        question: '망인이 치매였다는 자료가 있는데 어떻게 활용하나요?',
        answer:
          '<strong>유언능력 부재로 유언 자체가 무효 영역입니다.</strong> 사망 1년 전부터의 신경과·정신과 진료기록·간병 기록·인지검사 결과 확보. 유언능력 + 위조 + 형식 흠결 3중 입증이 강력.',
      },
      {
        question: '형이 이미 부동산을 매각했다면 회수 불가능한가요?',
        answer:
          '<strong>제3자 매수인이 선의·무과실이면 회수 어려운 영역입니다.</strong> 다만 매수인이 가족관계·등기 흠결을 알았거나 알 수 있었다면 악의 제3자로 회수 가능. 매각 가격·매수인 신원 추적 필요.',
      },
      {
        question: '상속회복청구 제척기간이 도과했어요',
        answer:
          '<strong>침해를 안 날부터 3년·상속개시 후 10년 도과 시 상속회복청구는 어려운 영역입니다.</strong> 다만 형사 사문서위조·사기는 공소시효(7년·10년) 별도. 부당이득반환 청구 등 다른 트랙 검토 가능.',
      },
      {
        question: '유언이 유효하면 회수 방법이 전혀 없나요?',
        answer:
          '<strong>유류분 청구 트랙이 있습니다.</strong> 직계비속·배우자는 법정상속분의 1/2이 유류분 영역(민법 제1112조). 유언으로 다른 상속인에게 모두 갔어도 유류분 부분은 청구 가능. 침해를 안 날부터 1년 단기 시효 주의.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '친구가 빌려간 돈 잠적', href: '/guide/fraud/fraud-friend-loan-vanish-recovery' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기 증거 수집 핵심', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '직거래 가계약금 잠적', href: '/guide/fraud/fraud-real-estate-direct-deal-deposit-vanish' },
      { label: '대여금 채무불이행 사기 구분', href: '/guide/fraud/loan-default-vs-fraud-checklist' },
    ],
  },
];
