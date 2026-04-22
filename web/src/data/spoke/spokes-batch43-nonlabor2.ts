import { SpokePage } from '../spoke-pages';

// batch43 nonlabor2 7개: inheritance 4 + defamation 3
// 1. 디지털 자산·휴대폰 데이터 상속인의 계정 접근·이관 절차 준비를 돕는 페이지다.
// 2. 대습상속인(손자녀)의 상속 요건·법정상속분 비율 계산을 돕는 페이지다.
// 3. 공동상속인의 특별수익 공제·기여분 가산 청구 절차 준비를 돕는 페이지다.
// 4. 해외거주 상속인의 국내 재산 상속 등기·세무 절차 진행을 돕는 페이지다.
// 5. 악성 리뷰 피해자의 플랫폼 신고·삭제·형사고소 대응 순서 정리를 돕는 페이지다.
// 6. 익명 악성게시글 피해자의 작성자 IP·신원 특정 법적 절차 진행을 돕는 페이지다.
// 7. 직장 단톡방 캡처 유포 피해자의 명예훼손·모욕 대응 절차 준비를 돕는 페이지다.

export const spokesBatch43Nonlabor2: SpokePage[] = [
  // ─── 1. inheritance / digital-assets-mobile-phone ───
  {
    domain: 'inheritance',
    slug: 'inheritance-digital-assets-mobile-phone',
    keyword: '디지털 자산 휴대폰 상속',
    questionKeyword: '돌아가신 분 휴대폰·온라인 계정은 어떻게 상속받나요?',
    ctaKeyword: '디지털 자산 상속 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '디지털 자산·휴대폰 상속 5단계 절차 총정리 | 로앤가이드',
      description:
        '돌아가신 분의 스마트폰·이메일·SNS·가상자산까지 상속받을 때 필요한 서류와 통신사·플랫폼별 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>고인의 휴대폰에는 사진·연락처·금융 앱·간편결제 내역까지 남아 있지만 비밀번호를 몰라 접근조차 어려운 경우가 많습니다. 민법 제1005조는 상속재산을 "피상속인의 재산에 관한 모든 권리와 의무"로 정의해 디지털 자산도 원칙적으로 상속 대상이지만, 통신비밀보호법과 각 플랫폼 약관에 따라 열람·이관 절차가 달라집니다. 돌아가신 지 14일 안에 주요 계정을 파악해 두어야 복구 가능성이 높습니다.</p>',
    sections: [
      {
        title: '디지털 자산 상속 범위 — 무엇이 상속되나',
        content:
          '<p><strong style="color:#1e3a5f">디지털 자산은 재산가치 유무에 따라 상속 가능 여부가 달라집니다.</strong></p>\n<ul>\n<li><strong>상속 가능 (재산권)</strong> — 가상자산(비트코인·이더리움), 간편결제 잔액, 포인트·마일리지(약관 허용 시), 블로그·유튜브 수익 정산금.</li>\n<li><strong>열람만 가능 (일신전속 아님)</strong> — 이메일 본문, SNS 게시글, 클라우드 저장 사진·동영상.</li>\n<li><strong>일신전속(상속 불가)</strong> — 네이버 블로그 이웃관계, 게임 캐릭터 등 약관상 양도 금지.</li>\n<li><strong>근거 조문</strong> — 민법 제1005조(상속재산 범위), 통신비밀보호법 제3조(열람 제한).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가상자산은 수천만 원~수억 원에 달할 수 있어 상속세 신고에 반드시 포함해야 합니다.</blockquote>',
      },
      {
        title: '통신사·플랫폼별 신청 순서',
        content:
          '<p><strong style="color:#1e3a5f">휴대폰·이메일·간편결제는 각각 별도로 신청해야 하며 절차는 2~4주 소요됩니다.</strong></p>\n<ul>\n<li><strong>휴대폰 잠금 해제</strong> — 통신 3사 고객센터에 사망진단서+가족관계증명서 제출 → 본인인증 정보 제공(일부 기기만 가능).</li>\n<li><strong>이메일(구글·네이버)</strong> — 구글 "고인 계정 특별 요청", 네이버 "사망자 계정 관리" 서비스 신청(사망진단서 필수).</li>\n<li><strong>간편결제(카카오·토스·네이버페이)</strong> — 해당 앱 고객센터 → 사망증명+상속인 증빙 → 잔액 환급 통상 14~30일.</li>\n<li><strong>가상자산 거래소</strong> — 업비트·빗썸 등에 사망사실 신고 → 상속인 명의 계좌로 이관 신청.</li>\n<li><strong>SNS(페이스북·인스타)</strong> — 추모계정 전환 또는 삭제 요청 선택 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">고인의 디지털 자산 중 어떤 것이 상속 대상인지, AI가 우선순위와 절차를 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '준비서류 — 공통 4종 + 플랫폼별 추가',
        content:
          '<p><strong style="color:#1e3a5f">대부분 플랫폼이 공통으로 요구하는 서류 4종을 먼저 확보하세요.</strong></p>\n<ol>\n<li><strong>사망진단서</strong> — 병원 또는 검안의 발급, 원본 및 사본 5부 이상 준비.</li>\n<li><strong>가족관계증명서(상세)</strong> — 상속인 지위 확인용, 발급 후 3개월 유효.</li>\n<li><strong>기본증명서(피상속인)</strong> — 사망 사실 기재, 주민센터 또는 정부24.</li>\n<li><strong>상속인 신분증·인감증명서</strong> — 여러 상속인이 있으면 대표자 선임 동의서 필요.</li>\n<li><strong>추가서류</strong> — 가상자산은 지갑주소·거래이력, 간편결제는 연결계좌 증빙.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 2024년부터 "안심상속 원스톱서비스"로 금융·부동산 일괄조회 가능하지만 디지털 자산은 별도 신청해야 합니다.</blockquote>',
      },
      {
        title: '세금·분쟁 실무 — 놓치지 말 것',
        content:
          '<p><strong style="color:#1e3a5f">가상자산과 디지털 수익은 상속세 과세 대상이며 평가 시점이 중요합니다.</strong></p>\n<ul>\n<li><strong>가상자산 평가</strong> — 상속개시일 전후 2개월 평균가(상증법 시행령 제58조의2).</li>\n<li><strong>상속세 신고기한</strong> — 사망일 속한 달의 말일부터 6개월 이내.</li>\n<li><strong>공동상속인 분쟁</strong> — 디지털 자산도 상속재산분할협의 대상, 합의 불발 시 가정법원 심판.</li>\n<li><strong>약관 제한 확인</strong> — 일부 플랫폼은 약관상 양도 금지이므로 환가 후 분할해야 할 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 가상자산을 상속세 신고에서 누락하면 사후 발각 시 가산세 최대 40%까지 부과됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산 범위와 조세 부과 기준',
        summary:
          '대법원 2025두34935 사건(대법원, 2026.01.15 선고)에서 법원은 상속을 원인으로 재산을 취득한 경우에도 관련 세법상 요건을 일반 취득과 동일하게 적용해야 한다고 판시했습니다. 디지털 자산을 포함한 상속재산 전체가 일관된 법리로 과세 대상이 됨을 확인한 판결입니다.',
        takeaway:
          '디지털 자산도 일반 상속재산과 같은 기준으로 평가·신고해야 합니다.',
      },
    ],
    faq: [
      {
        question: '돌아가신 분 휴대폰 잠금을 풀 수 있나요?',
        answer:
          '<strong>통신사·제조사를 통해 제한적으로 가능합니다.</strong> 사망진단서·가족관계증명서 제출 후 SIM 잠금 해제는 되지만 화면잠금·생체인증은 기기에 따라 불가능합니다.',
      },
      {
        question: '비트코인·이더리움은 상속세를 내나요?',
        answer:
          '<strong>예, 상속세 과세 대상입니다.</strong> 상속개시일 전후 2개월 평균가로 평가하며 사망일 기준 6개월 내 신고·납부해야 합니다.',
      },
      {
        question: '카카오톡 대화 내용도 상속받을 수 있나요?',
        answer:
          '<strong>원칙적으로 열람이 제한됩니다.</strong> 통신비밀보호법상 제3자 열람이 제한되며 카카오는 사망자 계정 휴면 전환만 지원합니다.',
      },
      {
        question: '유튜브 채널 수익은 어떻게 상속받나요?',
        answer:
          '<strong>구글 "고인 계정 특별 요청"을 통해 이관 신청합니다.</strong> 사망진단서와 상속인 증빙 제출 후 통상 30~60일 내 처리됩니다.',
      },
      {
        question: '네이버페이 잔액도 환급받을 수 있나요?',
        answer:
          '<strong>네, 상속인 계좌로 환급 가능합니다.</strong> 네이버페이 고객센터에 사망증명·상속인 증빙 제출 후 14일 내 환급 처리됩니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속재산 분할 절차', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '상속세 신고 가이드', href: '/guide/inheritance/inheritance-tax-filing-guide' },
      { label: '안심상속 원스톱서비스', href: '/guide/inheritance/inheritance-onestop-service' },
      { label: '상속 한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '가상자산 상속 평가', href: '/guide/inheritance/inheritance-virtual-asset-valuation' },
    ],
  },

  // ─── 2. inheritance / grandchild-substitute-right-ratio ───
  {
    domain: 'inheritance',
    slug: 'inheritance-grandchild-substitute-right-ratio',
    keyword: '손자녀 대습상속 비율',
    questionKeyword: '아버지가 먼저 돌아가셨는데 손자도 상속받을 수 있나요?',
    ctaKeyword: '대습상속 요건 비율 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '손자녀 대습상속 요건·법정상속분 비율 3분 정리 | 로앤가이드',
      description:
        '아버지가 조부모보다 먼저 사망한 경우 손자녀가 대신 상속받는 요건과 법정상속분 계산법, 상속포기 시 주의사항을 지금 확인하세요.',
    },
    intro:
      '<p>"할아버지가 돌아가셨는데 아버지는 10년 전에 먼저 돌아가셨어요. 저희 손자들도 상속받을 수 있나요?" 이런 상황을 대습상속이라 하며 민법 제1001조가 규정합니다. 상속인이 될 직계비속이 피상속인보다 먼저 사망·결격된 경우 그의 자녀(손자녀)가 대신 상속인이 되는 제도입니다. 다만 법정상속분 계산과 상속포기 여부에 따라 결과가 크게 달라져 주의가 필요합니다.</p>',
    sections: [
      {
        title: '대습상속 성립 요건 3가지',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1001조에 따라 아래 3가지 요건이 모두 충족돼야 대습상속이 성립합니다.</strong></p>\n<ul>\n<li><strong>피대습자 선사망·결격</strong> — 상속인이 될 직계비속(자녀)이 피상속인 사망 전에 먼저 사망하거나 결격사유 해당.</li>\n<li><strong>대습자의 직계비속 지위</strong> — 먼저 사망한 자녀의 자녀(손자녀), 손자녀가 여럿이면 공동 대습.</li>\n<li><strong>대습자 배우자도 대습상속</strong> — 먼저 사망한 자녀의 배우자(며느리·사위)도 대습상속인(민법 제1003조 제2항).</li>\n<li><strong>제외 사유</strong> — 단순 상속포기자의 자녀는 대습상속 대상 아님(자녀가 사망한 경우만 해당).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "먼저 사망"은 피상속인 사망 전 사망을 의미하며, 동시 사망한 경우에도 대습상속이 인정됩니다.</blockquote>',
      },
      {
        title: '법정상속분 계산 공식',
        content:
          '<p><strong style="color:#1e3a5f">대습상속인은 피대습자가 살아있었다면 받았을 몫을 그대로 승계합니다.</strong></p>\n<ul>\n<li><strong>기본 원칙</strong> — 대습상속인은 피대습자의 상속분을 "1로 보아" 자기들끼리 균분.</li>\n<li><strong>예시 1</strong> — 할아버지 사망, 상속인이 삼촌(생존)·아버지(선사망 자녀 2). 삼촌 1/2, 손자 각 1/4(1/2 ÷ 2).</li>\n<li><strong>예시 2</strong> — 할아버지 사망, 배우자·자녀1·자녀2 중 자녀2 선사망(손자 1명). 배우자 3/7, 자녀1 2/7, 손자 2/7.</li>\n<li><strong>대습자의 배우자 몫</strong> — 며느리 1.5, 손자녀 1 비율로 분배(민법 제1009조 제2항 준용).</li>\n<li><strong>유류분 권리</strong> — 대습상속인도 직계비속으로 법정상속분의 1/2 유류분 주장 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">대습상속 비율 계산과 유류분 청구 가능 여부를 AI가 구체적 사례로 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '상속포기·한정승인 절차 주의점',
        content:
          '<p><strong style="color:#1e3a5f">대습상속인도 3개월 내 한정승인·상속포기 선택 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대습상속 사실 인지</strong> — 손자녀가 대습상속인이 됐음을 안 날부터 3개월 기산.</li>\n<li><strong>2단계 — 미성년 손자녀 절차</strong> — 법정대리인(부모 중 생존자)이 가정법원에 신고.</li>\n<li><strong>3단계 — 한정승인 신고</strong> — 피상속인 최후주소지 관할 가정법원에 서면 신고.</li>\n<li><strong>4단계 — 공고·청산</strong> — 한정승인 후 5일 내 채권자에 대한 공고(2개월 이상).</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀 전부가 상속포기하면 손자가 2순위 아니라 배우자·손자 공동상속인이 됩니다(대법원 2020그42).</blockquote>',
      },
      {
        title: '분쟁 실무 — 자주 놓치는 3가지',
        content:
          '<p><strong style="color:#1e3a5f">대습상속은 복잡해서 분쟁이 잦으므로 아래 3가지를 반드시 확인하세요.</strong></p>\n<ul>\n<li><strong>피대습자 생전 증여 합산</strong> — 아버지가 생전 받은 증여도 손자의 특별수익에 합산(민법 제1008조 유추).</li>\n<li><strong>대습상속과 유류분</strong> — 손자 유류분 = 대습된 법정상속분 × 1/2.</li>\n<li><strong>상속등기 기한</strong> — 2025년 개정 부동산등기법 시행으로 상속 안 날부터 3년 내 등기 의무(위반 시 과태료).</li>\n<li><strong>증명 서류</strong> — 피대습자 기본증명서(사망 기재), 제적등본 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 대습상속인이 여럿일 때 전원 동의 없이는 상속재산 처분 불가하므로 초기부터 협의체를 구성하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자녀 전부 포기 시 대습상속 배제',
        summary:
          '대법원 2020그42 결정(대법원, 2023.03.23 선고)에서 법원은 피상속인의 배우자와 자녀 중 자녀 전부가 상속을 포기한 경우 배우자가 단독상속인이 된다고 판시했습니다. 손자녀나 직계존속이 공동상속인이 되는 것이 아니며 이는 대습상속과 구별되는 법리입니다.',
        takeaway:
          '자녀가 "먼저 사망"이 아닌 "상속포기"한 경우 손자 대습상속이 성립하지 않습니다.',
      },
    ],
    faq: [
      {
        question: '아버지가 상속을 포기하면 저도 대습상속 받나요?',
        answer:
          '<strong>아니요, 상속포기는 대습상속 사유가 아닙니다.</strong> 대습상속은 "먼저 사망" 또는 "결격사유"일 때만 성립하며 포기 시 아래 순위로 이동합니다.',
      },
      {
        question: '할아버지가 남긴 빚이 더 많으면 어떻게 하나요?',
        answer:
          '<strong>대습상속 사실을 안 날부터 3개월 내 한정승인을 신청하세요.</strong> 미성년자는 법정대리인이 대신 신고하며 기한 엄수가 중요합니다.',
      },
      {
        question: '며느리도 대습상속인이 되나요?',
        answer:
          '<strong>네, 민법 제1003조 제2항에 따라 대습상속인입니다.</strong> 손자녀와 함께 공동상속인이 되며 배우자 가산(1.5:1) 비율이 적용됩니다.',
      },
      {
        question: '손자가 미성년자인데 상속등기는 어떻게 하나요?',
        answer:
          '<strong>친권자 또는 법원이 선임한 특별대리인이 대리합니다.</strong> 부모가 동일 상속인인 경우 이해상반이므로 가정법원에 특별대리인 선임 신청이 필요합니다.',
      },
      {
        question: '대습상속인도 유류분을 청구할 수 있나요?',
        answer:
          '<strong>네, 가능합니다.</strong> 대습된 법정상속분의 1/2이 유류분이며 상속 사실을 안 날부터 1년, 상속개시 후 10년 내 청구해야 합니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속 순위와 법정상속분', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '상속 한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '유류분 반환 청구 절차', href: '/guide/inheritance/inheritance-legal-reserve-claim' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement' },
      { label: '미성년 상속인 특별대리인', href: '/guide/inheritance/inheritance-minor-special-representative' },
    ],
  },

  // ─── 3. inheritance / special-gift-contribution-claim ───
  {
    domain: 'inheritance',
    slug: 'inheritance-special-gift-contribution-claim',
    keyword: '특별수익 기여분 청구',
    questionKeyword: '형제가 생전에 많이 받았는데 어떻게 공제받나요?',
    ctaKeyword: '특별수익 기여분 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '특별수익 공제·기여분 가산 청구 4단계 정리 | 로앤가이드',
      description:
        '형제가 생전증여를 많이 받았거나 내가 부모를 오래 부양했을 때 상속분 조정을 받는 특별수익·기여분 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"형은 집 사주셨는데 저는 아무것도 안 받았어요. 상속은 똑같이 나눠야 하나요?" 민법 제1008조는 피상속인으로부터 생전 증여·유증을 받은 상속인의 몫에서 그만큼 공제하는 특별수익 제도를, 제1008조의2는 특별한 부양·기여를 한 상속인에게 가산하는 기여분 제도를 규정합니다. 두 제도를 함께 활용하면 실질적으로 공평한 상속이 가능합니다.</p>',
    sections: [
      {
        title: '특별수익 판단 기준 — 어떤 생전 증여가 해당되나',
        content:
          '<p><strong style="color:#1e3a5f">혼인·주택구입·사업자금 등 상속분의 선급 성격이 있는 증여가 특별수익입니다.</strong></p>\n<ul>\n<li><strong>전형적 특별수익</strong> — 결혼 시 아파트 증여, 사업자금 수억 원, 유학비, 주택 구입자금.</li>\n<li><strong>제외되는 증여</strong> — 소액 용돈, 명절 선물, 통상의 생활비, 학비(대학까지 일반 수준).</li>\n<li><strong>증여 시점 무관</strong> — 상속개시 10년 이전 증여도 특별수익에 포함(유류분과 달리).</li>\n<li><strong>평가 시점</strong> — 증여 당시 시가가 아닌 "상속개시 시 평가액"으로 환산.</li>\n<li><strong>근거 조문</strong> — 민법 제1008조(특별수익자 상속분).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 20년 전 증여받은 아파트도 현재 시가로 평가되므로 실제 공제액이 매우 커집니다.</blockquote>',
      },
      {
        title: '기여분 인정 요건 — 특별한 기여여야',
        content:
          '<p><strong style="color:#1e3a5f">통상적 부양을 넘어선 "특별한 기여"일 때만 기여분이 인정됩니다.</strong></p>\n<ul>\n<li><strong>특별 부양형</strong> — 10년 이상 동거 간병, 치매·중병 부모 직접 수발(간병인 대체 수준).</li>\n<li><strong>재산 증가 기여형</strong> — 가업에 무보수 노동, 피상속인 재산 관리·증식에 직접 기여.</li>\n<li><strong>통상 부양은 제외</strong> — 명절 방문, 월 생활비 보조 등은 인정 곤란.</li>\n<li><strong>산정 방법</strong> — 법원 재량으로 상속재산 10~50% 범위 통상 인정.</li>\n<li><strong>절차</strong> — 상속재산분할협의 불발 시 가정법원에 기여분 심판 청구(단독 심판 불가).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">특별수익·기여분 주장 가능 여부와 입증 자료 체크리스트를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '구체적 상속분 계산 공식',
        content:
          '<p><strong style="color:#1e3a5f">실제 상속분은 "상속재산 + 특별수익 − 기여분"을 기준으로 재계산합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 간주상속재산 산출</strong> — (현존 상속재산) + (각 상속인의 특별수익 합계) − (기여분).</li>\n<li><strong>2단계 — 법정상속분 적용</strong> — 간주상속재산 × 각자 법정상속분 = 각자의 구체적 상속분 기초.</li>\n<li><strong>3단계 — 특별수익 공제</strong> — 특별수익자의 경우 위 금액에서 특별수익 차감.</li>\n<li><strong>4단계 — 기여분 가산</strong> — 기여자에게 기여분 더해 최종 지분 확정.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예시 – 상속재산 9억, 장남 생전 3억 증여, 차남 3년 간병 기여분 1억 → 간주재산 (9+3−1)=11억, 자녀 1인당 법정분 5.5억, 장남 실제 수령 2.5억(5.5−3), 차남 6.5억(5.5+1).</blockquote>',
      },
      {
        title: '입증 자료·청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">특별수익·기여분은 주장하는 측이 입증책임을 집니다.</strong></p>\n<ul>\n<li><strong>특별수익 입증</strong> — 계좌이체 내역, 등기부등본(증여등기), 증여세 신고서, 가족 문자·녹취.</li>\n<li><strong>기여분 입증</strong> — 간병 일지, 병원 기록, 동거 증빙(주민등록등본), 가업 노동 증명.</li>\n<li><strong>청구 절차</strong> — 상속재산분할심판 청구와 동시에 기여분 청구(단독 불가, 민법 제1008조의2 제4항).</li>\n<li><strong>관할 법원</strong> — 피상속인 최후주소지 관할 가정법원.</li>\n<li><strong>소멸시효</strong> — 상속재산분할청구권은 제척기간 없음(단 상속회복청구는 3년·10년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 기여분 심판은 반드시 상속재산분할심판과 병합 청구해야 하며 단독 청구하면 각하됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속인의 예금 무단 인출 반환',
        summary:
          '대법원 2025다212863 사건(대법원, 2025.12.11 선고)에서 법원은 공동상속인이 피상속인의 예금채권을 임의로 인출한 경우 다른 공동상속인이 부당이득반환 또는 손해배상을 청구할 수 있다고 판시했습니다. 특별수익 여부와 무관하게 무단 인출은 원상회복 대상입니다.',
        takeaway:
          '상속재산 무단 처분은 특별수익 공제와 별개로 반환청구 가능합니다.',
      },
    ],
    faq: [
      {
        question: '형이 결혼할 때 아파트 받은 것도 특별수익인가요?',
        answer:
          '<strong>네, 전형적 특별수익에 해당합니다.</strong> 현재 시가로 평가해 형의 상속분에서 공제하며 20년 전 증여도 동일하게 적용됩니다.',
      },
      {
        question: '10년 넘게 부모님 간병한 경우 기여분 얼마나 인정되나요?',
        answer:
          '<strong>재판부 재량으로 상속재산의 20~50% 인정 사례가 많습니다.</strong> 간병 일지·병원 기록·동거 증빙이 구체적일수록 인정 범위가 커집니다.',
      },
      {
        question: '용돈·생활비 보조도 특별수익에 포함되나요?',
        answer:
          '<strong>아니요, 일반적으로 제외됩니다.</strong> 상속분의 선급으로 볼 만한 고액 증여(혼수·주택·사업자금)가 특별수익이며 통상 용돈은 해당하지 않습니다.',
      },
      {
        question: '기여분과 유류분을 모두 주장할 수 있나요?',
        answer:
          '<strong>네, 양립 가능합니다.</strong> 다만 기여분은 유류분 산정 시 공제되지 않아 분쟁 구조가 복잡합니다. 전문가 자문이 필요합니다.',
      },
      {
        question: '증여 계좌이체 기록이 없으면 어떻게 입증하나요?',
        answer:
          '<strong>등기부등본·증여세 신고서·가족 문자·증인 진술로 입증 가능합니다.</strong> 법원 사실조회 신청으로 계좌 추적도 가능합니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement' },
      { label: '유류분 반환 청구 절차', href: '/guide/inheritance/inheritance-legal-reserve-claim' },
      { label: '상속 순위와 법정상속분', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '상속재산 분할심판 청구', href: '/guide/inheritance/inheritance-division-trial' },
      { label: '기여분 인정 기준', href: '/guide/inheritance/inheritance-contribution-standards' },
    ],
  },

  // ─── 4. inheritance / foreign-resident-korean-property ───
  {
    domain: 'inheritance',
    slug: 'inheritance-foreign-resident-korean-property',
    keyword: '해외거주 상속인 국내 재산',
    questionKeyword: '미국 사는 상속인인데 한국 재산 상속은 어떻게 하나요?',
    ctaKeyword: '해외거주 상속인 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '해외거주 상속인 국내 재산 상속 5단계 가이드 | 로앤가이드',
      description:
        '미국·캐나다·호주 등 해외 거주 상속인이 한국 부동산·예금·주식을 상속받을 때 필요한 서류와 영사확인·등기·세무 절차를 지금 확인하세요.',
    },
    intro:
      '<p>해외 영주권자·시민권자가 한국의 부모·조부모로부터 재산을 상속받을 때는 국내 거주자와 다른 추가 절차가 요구됩니다. 민법상 상속 자격은 국적에 무관하지만 한국 주민등록이 없어 인감증명·가족관계증명을 대신해 현지 영사확인 서류를 준비해야 하며 상속세 비거주자 과세 기준도 달라집니다. 신고기한은 사망월의 말일부터 9개월(비거주자)이며 기한을 놓치면 가산세가 최대 40%까지 부과됩니다.</p>',
    sections: [
      {
        title: '해외거주 상속인 지위 확인',
        content:
          '<p><strong style="color:#1e3a5f">국적·거주지와 상속 자격은 별개이며 상속 자격 자체는 모든 상속인에게 동일합니다.</strong></p>\n<ul>\n<li><strong>재외국민(해외 영주권자)</strong> — 한국 국적 유지, 주민등록만 말소. 재외국민등록증 활용.</li>\n<li><strong>외국국적동포(시민권자)</strong> — 한국 국적 포기, 민법상 상속자격 동일(국적주의 폐지).</li>\n<li><strong>거주자·비거주자 구분</strong> — 상속세법상 피상속인이 거주자면 전 세계 재산 과세, 비거주자면 국내 재산만 과세.</li>\n<li><strong>상속인 본인 지위</strong> — 상속인의 거주/비거주는 상속세 신고기한(6개월 vs 9개월)에만 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한국 국적을 포기했어도 민법상 상속받을 권리는 유지되며 부동산 등기도 가능합니다.</blockquote>',
      },
      {
        title: '필요 서류 — 영사확인 필수',
        content:
          '<p><strong style="color:#1e3a5f">해외에서 발급받은 서류는 주재국 한국 영사관 확인 또는 아포스티유가 필요합니다.</strong></p>\n<ul>\n<li><strong>인감증명서 대체</strong> — 한국 주민등록이 없으면 현지 공증+영사확인 서명으로 대체.</li>\n<li><strong>상속인 신원 증명</strong> — 미국 여권+출생증명서+혼인관계증명 → 현지 영사관 인증.</li>\n<li><strong>부동산 등기용 서류</strong> — 상속인 전원 인감증명(또는 영사확인 서명), 가족관계증명서, 상속재산분할협의서.</li>\n<li><strong>아포스티유 활용</strong> — 한국-아포스티유 협약 가입국(미국·캐나다·호주 등) 서류는 아포스티유로 영사확인 대체.</li>\n<li><strong>예상 소요기간</strong> — 현지 발급+영사확인 통상 3~6주.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">해외거주 상속인에게 필요한 서류와 거주지별 영사관 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '국내 재산 상속 절차 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대리인을 선임하면 입국 없이도 상당 부분 처리 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속재산 조회</strong> — 국내 친족에게 위임해 안심상속 원스톱서비스 조회(금융·부동산·국세 일괄).</li>\n<li><strong>2단계 — 대리인 선임</strong> — 현지 영사관에서 위임장 공증, 국내 친족 또는 법무사에게 위임.</li>\n<li><strong>3단계 — 상속재산분할협의</strong> — 이메일·화상 협의 후 협의서 작성, 해외 상속인은 영사확인 서명본 송부.</li>\n<li><strong>4단계 — 상속등기·명의이전</strong> — 부동산은 상속등기, 예금은 은행별 상속절차, 주식은 증권사별.</li>\n<li><strong>5단계 — 상속세 신고</strong> — 비거주자 상속인 포함 시 사망월 말일부터 9개월 내 신고.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 2025년 부동산등기법 개정으로 상속 안 날부터 3년 내 등기하지 않으면 과태료 부과됩니다.</blockquote>',
      },
      {
        title: '세금·송금 주의점',
        content:
          '<p><strong style="color:#1e3a5f">이중과세 방지와 송금 한도 규정을 반드시 확인하세요.</strong></p>\n<ul>\n<li><strong>한국 상속세</strong> — 피상속인이 국내 거주자면 전 세계 재산, 비거주자면 국내 재산만 과세.</li>\n<li><strong>해외 상속세 이중과세</strong> — 미국·캐나다는 상속세 없음, 일부 유럽국은 조세조약으로 공제.</li>\n<li><strong>해외 송금</strong> — 거주자 증여는 연간 10만 달러 한도, 상속은 한도 없음(외환신고 필요).</li>\n<li><strong>취득세</strong> — 상속 취득세 2.8%(지방교육세 포함), 무주택자 감면 미적용.</li>\n<li><strong>양도소득세</strong> — 상속받은 부동산 양도 시 취득가액은 "상속개시 당시 평가액".</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 미국 시민권자는 FBAR(해외계좌 신고) 대상이 될 수 있으니 한국 상속재산 취득 후 미국 세무사에게도 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 비거주자 상속의 국외재산 과세 범위',
        summary:
          '대법원 2022두64143 사건(대법원, 2024.09.12 선고)에서 법원은 피상속인이 비거주자인 경우 상속세 과세대상은 국내 재산에 한정되며 국외에 있는 상속재산은 포함되지 않는다고 판시했습니다. 거주자·비거주자 구분이 과세 범위를 결정하는 핵심 기준임을 확인한 판결입니다.',
        takeaway:
          '피상속인의 거주자 여부가 상속세 과세 범위를 크게 좌우합니다.',
      },
    ],
    faq: [
      {
        question: '미국 시민권자인데 한국 부동산 상속등기 가능한가요?',
        answer:
          '<strong>네, 국적과 무관하게 가능합니다.</strong> 현지 영사관에서 신원확인 공증 받은 서류로 국내 법무사가 대리 등기 가능합니다.',
      },
      {
        question: '한국에 입국하지 않고도 절차를 끝낼 수 있나요?',
        answer:
          '<strong>네, 대리인 선임으로 대부분 가능합니다.</strong> 영사 공증 위임장을 통해 국내 친족·법무사가 협의서 서명부터 등기까지 대행할 수 있습니다.',
      },
      {
        question: '상속세는 어느 나라에 내나요?',
        answer:
          '<strong>피상속인이 한국 거주자였으면 전 세계 재산에 한국 상속세 부과됩니다.</strong> 비거주자였으면 한국 내 재산만 과세되며 각국 조세조약을 확인해야 합니다.',
      },
      {
        question: '상속금 해외 송금 한도가 있나요?',
        answer:
          '<strong>상속재산 송금은 한도 제한이 없습니다.</strong> 다만 외국환거래법상 증빙서류(상속증명·세금납부확인서) 제출 후 해외송금 신고가 필요합니다.',
      },
      {
        question: '영어 출생증명서는 번역공증해야 하나요?',
        answer:
          '<strong>네, 국내 등기·은행 제출용은 한국어 번역공증이 필요합니다.</strong> 주재국 한국 영사관 또는 국내 공증사무소에서 번역·공증 가능합니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속세 신고 가이드', href: '/guide/inheritance/inheritance-tax-filing-guide' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement' },
      { label: '안심상속 원스톱서비스', href: '/guide/inheritance/inheritance-onestop-service' },
      { label: '상속등기 절차', href: '/guide/inheritance/inheritance-registration-procedure' },
      { label: '재외국민 상속 서류', href: '/guide/inheritance/inheritance-overseas-korean-documents' },
    ],
  },

  // ─── 5. defamation / review-platform-malicious-removal ───
  {
    domain: 'defamation',
    slug: 'defamation-review-platform-malicious-removal',
    keyword: '리뷰 플랫폼 악성 리뷰 삭제',
    questionKeyword: '네이버·쿠팡에 올라온 악성 리뷰 어떻게 삭제하나요?',
    ctaKeyword: '악성 리뷰 삭제 고소 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '악성 리뷰 삭제·고소 4단계 대응 절차 | 로앤가이드',
      description:
        '자영업자·쇼핑몰 운영자가 네이버·쿠팡·배달앱의 악성 리뷰를 삭제·신고하고 명예훼손 고소까지 진행하는 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"가게 매출이 반토막 났는데 알고 보니 경쟁업체가 올린 악성 리뷰였어요." 자영업자·쇼핑몰에 치명적인 허위 후기는 플랫폼 임시삭제 요청과 별개로 형사고소(정보통신망법상 명예훼손)·민사 손해배상 청구가 모두 가능합니다. 정보통신망법 제44조의2는 피해자 요청 시 30일 이내 게시물 차단을 명시하며 허위 사실이라면 7년 이하 징역·5천만 원 이하 벌금 대상입니다.</p>',
    sections: [
      {
        title: '악성 리뷰 유형별 대응 기준',
        content:
          '<p><strong style="color:#1e3a5f">리뷰 내용이 허위·비방 목적이면 모두 법적 대응이 가능합니다.</strong></p>\n<ul>\n<li><strong>허위사실 리뷰</strong> — "식중독 걸렸다"(사실 아님) 등 → 정보통신망법 제70조 제2항(7년 이하 징역).</li>\n<li><strong>사실이지만 비방 목적</strong> — 사실이더라도 "사장이 불친절" 지나친 감정 표현 → 같은 조 제1항(3년 이하 징역).</li>\n<li><strong>단순 모욕</strong> — "망해라" "쓰레기" 욕설 → 형법 제311조 모욕죄(1년 이하 징역).</li>\n<li><strong>업무방해 동반</strong> — 위계·위력으로 매출 감소 유발 → 형법 제314조(5년 이하 징역).</li>\n<li><strong>근거 조문</strong> — 정보통신망법 제70조, 형법 제307조·제311조·제314조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실 적시여도 "오로지 공공의 이익"이 아니면 명예훼손 성립 가능합니다.</blockquote>',
      },
      {
        title: '플랫폼 삭제 요청 순서',
        content:
          '<p><strong style="color:#1e3a5f">플랫폼마다 임시조치 신청 경로가 다르므로 각각 접수하세요.</strong></p>\n<ul>\n<li><strong>네이버 지도·스마트스토어</strong> — 리뷰 신고 → 명예훼손 선택 → 권리침해 증빙 제출. 30일 내 임시조치.</li>\n<li><strong>쿠팡·11번가</strong> — 고객센터 → 판매자 권리침해 신고 → 허위사실 소명자료 첨부.</li>\n<li><strong>배달의민족·요기요</strong> — 사장님 포털 → 리뷰 분쟁 신고 → 영수증·주문내역 증빙.</li>\n<li><strong>카카오맵</strong> — 리뷰 하단 신고 버튼 → 사유 선택 → 반려 시 방송통신심의위원회 심의 청구.</li>\n<li><strong>구글 리뷰</strong> — 구글 비즈니스 관리자에서 신고, 처리 기간이 길어 보충 대응 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">악성 리뷰 유형 판정과 플랫폼별 신고 자료 준비를 AI가 체크리스트로 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사고소 4단계',
        content:
          '<p><strong style="color:#1e3a5f">작성자 특정을 위해 경찰 고소장 접수부터 시작하는 것이 효과적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 캡처·URL 기록</strong> — 리뷰 전체 화면, 작성자 닉네임, 게시일시, 고유 URL 스크린샷(메타데이터 포함).</li>\n<li><strong>2단계 — 고소장 작성·접수</strong> — 관할 경찰서 사이버수사대에 정보통신망법 위반(명예훼손) 고소장 제출.</li>\n<li><strong>3단계 — 통신자료 조회</strong> — 경찰이 플랫폼에 통신자료 제공요청 → 가입자 IP·실명 확인.</li>\n<li><strong>4단계 — 합의·기소</strong> — 피의자 특정 후 합의(통상 100~500만 원) 또는 정식 기소 이어짐.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 고소 전 공익신고자 보호 범위 확인, 경쟁업체라면 업무방해죄 함께 기재해 가중 처벌 유도.</blockquote>',
      },
      {
        title: '민사 손해배상·실무 주의점',
        content:
          '<p><strong style="color:#1e3a5f">매출 감소가 입증되면 재산상 손해까지 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>위자료 범위</strong> — 악성 리뷰 1건 기준 300만~2,000만 원, 다수·반복 시 가중.</li>\n<li><strong>재산손해</strong> — 매출 감소분(리뷰 전후 카드매출 비교), 광고비 증가분 청구 가능.</li>\n<li><strong>가처분 신청</strong> — 긴급 시 게시물 삭제 가처분(민사, 1~2주 내 결정).</li>\n<li><strong>증거 보전</strong> — 플랫폼이 삭제할 수 있으니 캡처·URL 즉시 보관, 공증사무소 공증 권장.</li>\n<li><strong>소멸시효</strong> — 민사 불법행위 손해배상은 안 날부터 3년, 사건일부터 10년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 삭제 전 반드시 캡처·URL 확보. 플랫폼 삭제 후 증거가 사라지면 형사·민사 모두 어려워집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 쇼핑몰 허위 비방 게시글 명예훼손',
        summary:
          '서울중앙지법 2016고정3950 사건(서울중앙지법, 2017.04.14 선고)에서 법원은 인터넷 커뮤니티 운영자가 쇼핑몰 업체에 대한 허위 비방 글을 다른 사이트에 전재한 행위가 정보통신망법 위반(명예훼손)에 해당한다고 판시했습니다. 허위 리뷰·비방글 전파자도 처벌 대상임을 확인했습니다.',
        takeaway:
          '리뷰를 직접 쓰지 않고 퍼 나른 경우에도 명예훼손 책임이 있습니다.',
      },
    ],
    faq: [
      {
        question: '사실인 리뷰도 삭제·고소가 가능한가요?',
        answer:
          '<strong>비방 목적이 있으면 사실이어도 명예훼손입니다.</strong> 다만 공공의 이익이 주된 목적이면 위법성이 조각되므로 상황별 판단이 필요합니다.',
      },
      {
        question: '작성자를 모르는데 고소가 되나요?',
        answer:
          '<strong>네, 가능합니다.</strong> 경찰이 플랫폼에 통신자료 제공요청을 해 IP·가입정보를 특정합니다. 통상 1~3개월 소요됩니다.',
      },
      {
        question: '합의금은 얼마가 적정한가요?',
        answer:
          '<strong>통상 100만~500만 원 범위입니다.</strong> 매출 피해가 크거나 반복·공모인 경우 1,000만 원 이상 합의 사례도 있습니다.',
      },
      {
        question: '플랫폼 신고만으로 해결되지 않으면요?',
        answer:
          '<strong>방송통신심의위원회에 심의 청구하세요.</strong> 심의위 결정으로 강제 삭제가 가능하며 심의 기간은 통상 30~60일입니다.',
      },
      {
        question: '경쟁업체가 쓴 리뷰라는 증거는 어떻게 찾나요?',
        answer:
          '<strong>경찰 고소 후 IP 조회로 확인합니다.</strong> 동일 IP 대역이나 계정 생성 패턴이 경쟁업체와 일치하면 업무방해죄까지 성립합니다.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-criminal-complaint' },
      { label: '명예훼손 증거 수집', href: '/guide/defamation/defamation-evidence-collection' },
      { label: '온라인 게시물 삭제 요청', href: '/guide/defamation/defamation-online-post-removal' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-information-network-act' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim' },
    ],
  },

  // ─── 6. defamation / anonymous-post-writer-identification ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-post-writer-identification',
    keyword: '익명 게시글 작성자 특정',
    questionKeyword: '익명으로 올린 악성 글 작성자를 어떻게 찾나요?',
    ctaKeyword: '익명 작성자 특정 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '익명 악성글 작성자 특정 3단계 법적 절차 | 로앤가이드',
      description:
        '네이버·디시·에펨코리아 익명 게시판에 올라온 악성글의 작성자를 IP·가입정보로 특정하는 경찰 수사·민사 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"익명 게시판에 허위 글이 올라왔는데 작성자를 찾을 방법이 없을까요?" 현행 정보통신망법상 민간이 직접 IP·가입자를 조회하는 방법은 없지만 경찰·검찰 수사 또는 법원 문서제출명령을 통해 특정이 가능합니다. 통신자료 제공요청·통신사실확인자료 제공요청 두 경로가 있으며 요건과 범위가 다릅니다. 형사고소 접수 후 작성자 특정까지 통상 2~4개월 걸립니다.</p>',
    sections: [
      {
        title: '작성자 특정 법적 근거 2가지',
        content:
          '<p><strong style="color:#1e3a5f">통신자료 vs 통신사실확인자료의 차이를 먼저 알아야 합니다.</strong></p>\n<ul>\n<li><strong>통신자료 제공요청</strong> — 전기통신사업법 제83조 제3항. 가입자 성명·주민번호·주소·ID. 영장 없이 수사기관 요청만으로 가능.</li>\n<li><strong>통신사실확인자료</strong> — 통신비밀보호법 제13조. 접속 IP·접속시간·발·수신번호. 법원 허가서 필요.</li>\n<li><strong>적용 순서</strong> — 1차 통신자료로 가입자 확인 → 2차 통신사실확인자료로 접속 IP 확인 → 3차 ISP에 실제 사용자 특정.</li>\n<li><strong>민간 직접 조회 불가</strong> — 민사 소송 시에도 법원의 문서제출명령 또는 사실조회를 거쳐야 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형사고소가 작성자 특정의 가장 빠른 길이며 고소 후 2~4개월 내 확인됩니다.</blockquote>',
      },
      {
        title: '경찰 고소 진행 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰 사이버수사대에 고소장 접수 후 수사기관이 통신자료를 직접 요청합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 게시물 증거 확보</strong> — 전체화면·URL·게시시간·작성자 닉네임 캡처. 공증 권장.</li>\n<li><strong>2단계 — 고소장 접수</strong> — 관할 경찰서 또는 사이버안전국에 정보통신망법 위반(명예훼손) 고소.</li>\n<li><strong>3단계 — 플랫폼 통신자료 요청</strong> — 경찰이 네이버·카카오·디시 등에 가입자 정보 요청(5~30일 회신).</li>\n<li><strong>4단계 — IP 추적</strong> — 가입 IP·접속 IP 확보 후 KT·SKT 등 ISP에 통신사실확인자료 요청(법원 허가서 필요, 14~30일).</li>\n<li><strong>5단계 — 피의자 소환·특정</strong> — ISP가 실사용자 주소·성명 회신, 경찰이 피의자 소환조사.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">익명 작성자 특정에 필요한 증거 목록과 고소장 구성을 AI가 단계별로 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '민사 단독 절차 — 문서제출명령·사실조회',
        content:
          '<p><strong style="color:#1e3a5f">형사고소 없이 민사로만 진행할 때는 법원의 명령이 필요합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 성명불상자 상대 소송 제기</strong> — "○○사이트 닉네임 XXX" 특정해 민사 손해배상 소송 접수.</li>\n<li><strong>2단계 — 문서제출명령 신청</strong> — 법원에 사이트 운영자에 대한 가입자 정보 제출명령 신청.</li>\n<li><strong>3단계 — 사실조회 회신</strong> — 플랫폼이 가입 정보·IP 회신, 통신사 사실조회로 실사용자 확인.</li>\n<li><strong>4단계 — 피고 경정</strong> — 특정된 실사용자로 피고 경정 후 본안 심리 진행.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 민사 단독은 통신사실확인자료 접근이 제한적이므로 대부분 형사고소 병행이 효율적입니다.</blockquote>',
      },
      {
        title: '실무 주의점 — 시효·범위',
        content:
          '<p><strong style="color:#1e3a5f">시효·로그 보존 기간을 놓치면 특정이 불가능해집니다.</strong></p>\n<ul>\n<li><strong>형사 공소시효</strong> — 사실적시 명예훼손 7년, 허위사실 10년. 모욕 5년.</li>\n<li><strong>통신사 로그 보존</strong> — IP 접속기록은 통상 3개월~1년만 보존(통신비밀보호법 시행령).</li>\n<li><strong>민사 소멸시효</strong> — 안 날부터 3년, 사건일부터 10년.</li>\n<li><strong>외국 플랫폼 한계</strong> — 트위터·페이스북 등 해외 본사 협조 지연으로 특정 곤란, 국내 법인 우회 활용.</li>\n<li><strong>VPN·TOR 사용자</strong> — 기술적으로 특정 불가한 경우 있음. 가입 당시 IP나 결제정보 추적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 게시물 발견 즉시 캡처·URL 확보. 작성자가 글을 삭제하면 증거 자체가 사라져 수사가 어려워집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예훼손 표현의 사실·의견 구분',
        summary:
          '대법원 2022다242649 사건(대법원, 2025.06.26 선고)에서 법원은 민법상 불법행위로서 명예훼손의 의미와 사실 적시·의견 진술을 구분하는 기준을 제시했습니다. 순수한 의견 표명만으로는 명예훼손이 성립하지 않지만 구체적 허위사실이 포함되면 작성자가 누구든 책임을 집니다.',
        takeaway:
          '작성자를 특정하는 것과 별개로 표현 내용의 "사실 적시" 여부가 처벌 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '네이버 카페 익명글도 작성자 특정이 되나요?',
        answer:
          '<strong>네, 대부분 가능합니다.</strong> 실명 가입 기반이라 통신자료 요청으로 가입자 특정이 빠릅니다. 통상 1~2개월 내 확인됩니다.',
      },
      {
        question: '디시인사이드 갤러리 유동닉도 추적되나요?',
        answer:
          '<strong>가입 없이 작성했어도 접속 IP는 남습니다.</strong> IP 추적으로 ISP에 사실조회하면 실사용자 확인 가능합니다.',
      },
      {
        question: 'VPN 사용자는 특정이 어렵나요?',
        answer:
          '<strong>기술적으로 어렵지만 완전 불가능은 아닙니다.</strong> 가입 당시 IP, 결제 기록, 다른 글과의 문체 분석 등으로 간접 특정 가능합니다.',
      },
      {
        question: '고소 후 작성자 특정에 얼마나 걸리나요?',
        answer:
          '<strong>통상 2~4개월입니다.</strong> 플랫폼 회신 5~30일, 통신사 사실조회 14~30일 소요되며 외국 플랫폼은 6개월 이상 걸립니다.',
      },
      {
        question: '해외 플랫폼 작성자도 찾을 수 있나요?',
        answer:
          '<strong>한국 내 법인이 있으면 가능합니다.</strong> 트위터·구글 등은 한국 지사를 통해 협조 요청이 이뤄지며 처리 기간이 길어집니다.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-criminal-complaint' },
      { label: '명예훼손 증거 수집', href: '/guide/defamation/defamation-evidence-collection' },
      { label: '사이버 명예훼손 대응', href: '/guide/defamation/defamation-cyber-response' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-information-network-act' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim' },
    ],
  },

  // ─── 7. defamation / workplace-group-chat-screenshot-leak ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-group-chat-screenshot-leak',
    keyword: '회사 단톡방 캡처 유포',
    questionKeyword: '회사 단톡방 캡처가 유출됐는데 어떻게 대응하나요?',
    ctaKeyword: '단톡방 캡처 유포 대응 정리',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '단톡방 캡처 유포 명예훼손 대응 4단계 | 로앤가이드',
      description:
        '회사 단톡방 대화가 외부로 유출되거나 상사·동료가 캡처를 돌려 피해를 봤을 때 명예훼손·모욕·개인정보보호법 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>회사 내 단체 카톡방에서 오간 대화가 캡처돼 다른 부서·회사 밖으로 퍼지면 발언자와 피해자 모두 곤란해집니다. 법원은 단톡방처럼 특정 소수만 참여하는 공간도 "전파 가능성"이 있으면 공연성을 인정해 명예훼손죄 성립이 가능하다고 봅니다(대법원 2022도14571). 유포자에게는 명예훼손·모욕·정보통신망법 위반·개인정보보호법 위반까지 중첩 적용될 수 있습니다.</p>',
    sections: [
      {
        title: '단톡방 유포 — 법적 성격과 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">단톡방 캡처는 "공연성"과 "전파가능성" 판단이 핵심 쟁점입니다.</strong></p>\n<ul>\n<li><strong>공연성 인정 범위</strong> — 5~10명 소수 단톡이어도 외부 전파 가능성 있으면 공연성 인정.</li>\n<li><strong>캡처 유포자 책임</strong> — 대화 당사자가 아니어도 캡처를 다른 곳에 전파하면 명예훼손 성립.</li>\n<li><strong>허위사실 vs 사실</strong> — 허위면 정보통신망법 제70조 제2항(7년 이하), 사실이면 제1항(3년 이하).</li>\n<li><strong>개인정보 유출 중첩</strong> — 주민번호·연락처 포함 캡처 유포는 개인정보보호법 제71조 위반(5년 이하).</li>\n<li><strong>근거 조문</strong> — 형법 제307조·제311조, 정보통신망법 제70조, 개인정보보호법 제71조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 캡처본을 "퍼뜨린" 행위가 원발언보다 처벌이 더 무거울 수 있습니다.</blockquote>',
      },
      {
        title: '피해자 초기 대응 — 48시간 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">유출 인지 후 48시간 내 증거 확보와 회사 신고가 중요합니다.</strong></p>\n<ul>\n<li><strong>1. 캡처 증거 보존</strong> — 유포된 캡처 원본, 전파 경로, 받은 사람 명단 확보. 화면녹화 권장.</li>\n<li><strong>2. 원본 대화 확보</strong> — 해당 단톡방 대화 전체 백업(카카오톡 설정 → 대화 내보내기).</li>\n<li><strong>3. 회사 인사팀·컴플라이언스 신고</strong> — 직장 내 괴롭힘·징계 병행 대응(근로기준법 제76조의3).</li>\n<li><strong>4. 유포 중지 요청</strong> — 유포자에게 내용증명 발송(삭제·사과·배상 요구, 5일 내 회신).</li>\n<li><strong>5. 병원·심리상담</strong> — 정신과 진료 기록은 위자료 산정 근거.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 유포 피해의 형사·민사·회사 내부 대응 순서를 AI가 맞춤 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사 고소·민사 청구 병행',
        content:
          '<p><strong style="color:#1e3a5f">유포자·작성자 모두 대상 삼아 형사·민사를 병행하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 고소장 접수</strong> — 관할 경찰서에 명예훼손·모욕·정보통신망법 위반 동시 기재.</li>\n<li><strong>2단계 — 대상자 구분</strong> — 원발언자·유포자·추가 전파자 각각 특정, 공동정범·방조범 여부 기재.</li>\n<li><strong>3단계 — 민사 손해배상</strong> — 위자료 500만~3,000만 원, 직장 내 괴롭힘 인정 시 추가 배상.</li>\n<li><strong>4단계 — 회사 책임 추궁</strong> — 사용자책임(민법 제756조) 또는 직장 내 괴롭힘 방치 책임.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 유포자 징계를 거부하면 노동위원회 구제신청 또는 근로감독관 진정 검토.</blockquote>',
      },
      {
        title: '합의·실무 체크포인트',
        content:
          '<p><strong style="color:#1e3a5f">합의 시 재발방지 의무와 삭제 확약을 반드시 포함하세요.</strong></p>\n<ul>\n<li><strong>합의서 필수 조항</strong> — 모든 캡처·전파본 삭제 확인, 재유포 금지, 위반 시 가중 위약금(통상 5배).</li>\n<li><strong>합의금 범위</strong> — 단순 유포 300만~1,000만 원, 전사적 유포 1,000만~3,000만 원.</li>\n<li><strong>사내 징계 병행</strong> — 회사의 징계와 별개 절차이므로 합의에 "징계 유지" 명시.</li>\n<li><strong>처벌불원서</strong> — 반의사불벌죄(모욕·사실적시 명예훼손)는 처벌불원 제출 시 불기소, 정보통신망법 허위사실은 반의사불벌 아님.</li>\n<li><strong>소멸시효</strong> — 민사 안 날부터 3년, 형사 공소시효 5~10년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 전 유포 범위·대상자 다 특정된 상태여야 함. 성급한 합의는 새 피해자 발견 시 추가 대응을 막습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소수 대상 발언도 공연성 인정',
        summary:
          '대법원 2022도14571 사건(대법원, 2024.01.04 선고)에서 법원은 소수의 사람에게 발언했더라도 상대방이 불특정 또는 다수인에게 전파할 가능성이 객관적으로 인정되면 모욕죄의 "공연성"이 인정된다고 판시했습니다. 단톡방 발언·캡처 유포에도 동일 법리가 적용됩니다.',
        takeaway:
          '단톡방이 비공개라도 전파 가능성 있으면 명예훼손·모욕 성립합니다.',
      },
    ],
    faq: [
      {
        question: '원래 대화는 사실이었는데 캡처 유포도 처벌되나요?',
        answer:
          '<strong>네, 사실이어도 비방 목적이면 명예훼손입니다.</strong> 정보통신망법 제70조 제1항으로 3년 이하 징역 대상이며 유포 경로에 따라 모욕죄가 추가됩니다.',
      },
      {
        question: '회사가 유포자를 징계 안 하면 어떻게 하나요?',
        answer:
          '<strong>사용자책임(민법 제756조)으로 회사 상대 손해배상 청구 가능합니다.</strong> 근로기준법상 직장 내 괴롭힘으로 근로감독관 진정도 병행할 수 있습니다.',
      },
      {
        question: '단톡방 대화는 비공개인데 유포가 공연성이 되나요?',
        answer:
          '<strong>네, 전파 가능성이 있으면 공연성 인정됩니다.</strong> 대법원 2022도14571이 명시적으로 소수 대상 발언도 공연성을 인정합니다.',
      },
      {
        question: '캡처만 받고 퍼뜨리지 않은 사람도 처벌되나요?',
        answer:
          '<strong>단순 수신자는 처벌 대상 아닙니다.</strong> 다만 추가 전파하거나 보관·공유 목적이 입증되면 명예훼손 방조·공동정범 성립 여지가 있습니다.',
      },
      {
        question: '합의금은 어느 정도가 적정한가요?',
        answer:
          '<strong>유포 범위에 따라 300만~3,000만 원입니다.</strong> 전사적 확산·정신과 치료·퇴사 등 중대 피해 시 3,000만 원 이상 사례도 있습니다.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-criminal-complaint' },
      { label: '직장 내 명예훼손 대응', href: '/guide/defamation/defamation-workplace-response' },
      { label: '명예훼손 증거 수집', href: '/guide/defamation/defamation-evidence-collection' },
      { label: '모욕죄와 명예훼손 차이', href: '/guide/defamation/defamation-vs-insult' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim' },
    ],
  },
];
