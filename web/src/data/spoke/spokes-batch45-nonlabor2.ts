import { SpokePage } from '../spoke-pages';

// batch45 nonlabor2 8개: divorce 4 + inheritance 4
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 카톡·인스타·디스코드 등 온라인에서만 외도 정황이 있는 배우자를 대상으로 증거를 수집해 위자료 소송을 준비하도록 돕는 페이지다.
// 2. 이 페이지는 한국인 배우자와 이혼하게 된 외국인 배우자가 F-2-1·F-5·F-6 체류자격을 잃지 않고 결혼이민·영주 자격을 유지·전환하도록 돕는 페이지다.
// 3. 이 페이지는 배우자가 이미 다른 사람과 혼인 상태(중혼)이거나 혼인 의사가 없었음을 알게 된 사람이 혼인무효·취소를 다투도록 돕는 페이지다.
// 4. 이 페이지는 재혼 후 의붓자녀와 함께 살아왔지만 재이혼 시 양육비를 받을 수 있는지 모호한 양육자가 친양자입양 여부와 양육비 청구를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 피상속인이 해외(미국·일본·동남아) 부동산·예금을 가진 정황은 있으나 정확한 위치·금액을 모르는 상속인이 해외재산을 조회·추적하도록 돕는 페이지다.
// 6. 이 페이지는 사망보험금 수익자로 지정된 상속인 1명이 다른 상속인들과 보험금 분쟁을 겪을 때 보험금의 상속재산성·유류분 산입을 다투도록 돕는 페이지다.
// 7. 이 페이지는 비상장주식·1인 법인 지분을 상속받은 상속인들이 평가·분할·명의개서 절차에서 분쟁을 정리하도록 돕는 페이지다.
// 8. 이 페이지는 피상속인이 비트코인·이더리움을 개인지갑·시드구문으로 보관해 거래소 외부에 자산이 있는 상속인이 시드 복구·접근권을 확보하도록 돕는 페이지다.

export const spokesBatch45Nonlabor2: SpokePage[] = [
  // ─── 1. divorce / online-affair-evidence-collection ───
  {
    domain: 'divorce',
    slug: 'divorce-online-affair-evidence-collection',
    keyword: '온라인 외도 증거 수집',
    questionKeyword: '카톡·인스타에서만 외도 정황이 보이는데 어떻게 증거를 모아야 하나요?',
    ctaKeyword: '온라인 외도 증거 수집 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 외도 증거 수집 5단계 합법 정리 | 로앤가이드',
      description:
        '카톡·인스타·디스코드에서만 부정행위가 의심되는 배우자에 대해 위자료 소송에 쓸 수 있는 합법적 증거 5단계 수집·보관 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"몰래 보니까 카톡 비번이 바뀌어 있고 인스타 DM 알림이 끊임없이 와요"라는 상담이 늘었습니다. 오프라인 만남 증거가 없어도 온라인 메시지·사진·영상통화 기록만으로 부정행위가 인정된 사례가 다수입니다. 다만 무단 잠금해제·해킹은 정보통신망법 위반으로 오히려 피해자가 형사처벌 대상이 됩니다. 합법 범위에서 어떻게 모으느냐가 핵심입니다.</p>',
    sections: [
      {
        title: '온라인 외도 — 어디까지 부정행위로 인정되나',
        content:
          '<p><strong style="color:#1e3a5f">민법 제840조 제1호 부정행위는 성관계뿐 아니라 부부 신뢰를 깨는 일체의 행위를 포함합니다.</strong></p>\n<ul>\n<li><strong>지속적 애정 표현</strong> — "사랑해", "보고싶어" 류 메시지 다수 + 1대1 이모지·사진 교환.</li>\n<li><strong>성적 표현</strong> — 노골적 사진·영상·음성 메시지·통화 녹취.</li>\n<li><strong>현실 만남 약속</strong> — 호텔·여행지 예약·KTX 동승 등 만남 정황.</li>\n<li><strong>금전적 지원</strong> — 명품·송금·생활비 지원 — 부부 공동재산 유출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접 성관계 증거가 없어도 위 4가지 패턴이 누적되면 부정행위로 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 수집 — 합법 범위에서 증거 확보하기',
        content:
          '<p><strong style="color:#1e3a5f">"내가 정당하게 접근할 수 있는 정보"만 수집해야 형사·민사상 안전합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 공동 단말기 캡처</strong> — 부부 공용 PC·태블릿·차량 블루투스 기록 화면 캡처.</li>\n<li><strong>2단계 — 알림창·잠금화면 스샷</strong> — 잠금화면에 뜬 메시지·사진은 본인 시야에 들어온 정보로 합법.</li>\n<li><strong>3단계 — 가족 결제·통신 내역</strong> — 부부 명의 카드·통신요금 명세에서 호텔·꽃집·KTX 결제 추출.</li>\n<li><strong>4단계 — SNS 공개 게시물</strong> — 상간자가 공개로 올린 사진·태그·체크인 캡처(공개 정보).</li>\n<li><strong>5단계 — 사실조회·문서제출명령</strong> — 소송 단계에서 통신사·카드사·플랫폼에 법원 절차로 요청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 모은 증거의 합법성과 위자료 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '하지 말아야 할 행동 — 위법 수집 시 형사처벌 리스크',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법·통신비밀보호법 위반은 위자료 소송보다 무거운 형사처벌이 따릅니다.</strong></p>\n<ul>\n<li><strong>비밀번호 무단 해제</strong> — 정보통신망법 제48조 위반, 5년 이하 징역.</li>\n<li><strong>스파이앱 설치</strong> — 통신비밀보호법 제3조 위반, 1년 이상 10년 이하.</li>\n<li><strong>제3자 대화 녹취</strong> — 본인이 참여하지 않은 대화 녹음은 위법, 증거능력도 부정.</li>\n<li><strong>흥신소 위치추적</strong> — 위치정보법 위반 + 수집 증거의 증거능력 배제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 흥신소·심부름센터 의뢰는 본인까지 형사처벌 대상이 되니 변호사 사실조회로 대체하세요.</blockquote>',
      },
      {
        title: '증거 보관과 제출 — 위자료 소송 직전 체크',
        content:
          '<p><strong style="color:#1e3a5f">캡처본은 메타데이터·시점이 살아있어야 증거능력이 유지됩니다.</strong></p>\n<ul>\n<li><strong>스크린샷 원본 보관</strong> — 폰 갤러리 원본 + 클라우드 백업 동시 유지, 편집·자르기 금지.</li>\n<li><strong>화면 녹화</strong> — 동영상으로 스크롤 캡처, 시간·날짜 표시 함께.</li>\n<li><strong>공증·내용증명</strong> — 결정적 캡처는 공증사무소에서 보존공증 받기.</li>\n<li><strong>연쇄성 정리</strong> — 시간순으로 묶어 "지속·반복" 패턴을 한눈에 보이게 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자녀가 부모 폰을 보다가 캡처한 경우는 별도 사안이니 변호사와 상의하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 부정행위와 위자료 청구권',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하거나 그 유지를 방해하면 다른 배우자에게 정신적 손해배상의무를 진다고 재확인했습니다. 온라인 정황 증거의 누적도 침해로 평가될 수 있습니다.',
        takeaway:
          '오프라인 만남 정황이 없어도 온라인 메시지·금전 지원 누적이 일관된 패턴을 이루면 위자료 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '배우자 폰을 잠깐 봤는데 이걸로 캡처해도 증거가 되나요?',
        answer:
          '<strong>일시적·우발적으로 본 화면을 캡처한 정도는 위법성이 약합니다.</strong> 다만 비밀번호를 추측·해제했다면 위법 수집으로 보일 수 있어 변호사 검토가 필요합니다.',
      },
      {
        question: '인스타 비공개 계정 DM은 어떻게 확보하나요?',
        answer:
          '<strong>본인이 공식적으로 접근할 수 없는 비공개 계정은 사실조회 신청을 활용해야 합니다.</strong> 인스타그램은 한국 영장 협조도 제한적이라 국내 결제·통신 우회 증거를 함께 모으세요.',
      },
      {
        question: '카톡 백업파일을 PC에서 열어보면 위법인가요?',
        answer:
          '<strong>본인 비번을 모른 채 우회·해킹했다면 위법입니다.</strong> 부부 공용 PC에 자동 동기화된 카톡이라면 정황상 합법성 다툼이 가능하니 사실관계 정리가 우선입니다.',
      },
      {
        question: '상간자에게 위자료를 청구하려면 신원이 꼭 필요한가요?',
        answer:
          '<strong>소장 단계에서는 닉네임·전화번호로도 시작 가능, 사실조회로 신원을 특정합니다.</strong> 다만 인적 증거가 부족하면 손해배상 인용액이 줄어들 수 있습니다.',
      },
      {
        question: '증거가 많은데도 이혼은 하지 않고 위자료만 받을 수 있나요?',
        answer:
          '<strong>혼인을 유지하면서도 부정행위·상간자에 대한 위자료 청구는 가능합니다.</strong> 다만 시효·재산분할 시점과 맞물려 전략을 세워야 합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: 'SNS·카톡 증거 능력', href: '/guide/divorce/divorce-sns-kakao-evidence-validity' },
      { label: '외도 위자료 5종 증거', href: '/guide/divorce/divorce-affair-alimony-evidence-5items' },
      { label: '부정행위 증거 채택 기준', href: '/guide/divorce/divorce-affair-evidence-admissibility' },
      { label: '상간자 위자료 청구 절차', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
    ],
  },

  // ─── 2. divorce / foreign-spouse-citizenship-process ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-citizenship-process',
    keyword: '외국인 배우자 이혼 체류자격',
    questionKeyword: '한국인 배우자와 이혼하면 F-6 체류자격은 어떻게 되나요?',
    ctaKeyword: '외국인 배우자 체류자격 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 이혼 후 체류자격 5단계 정리 | 로앤가이드',
      description:
        '한국인 배우자와 이혼하게 된 외국인 배우자가 F-6 결혼이민·F-5 영주·F-2-1 거주 자격을 잃지 않는 5단계 절차와 귀책사유 입증 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼하면 한국에서 쫓겨나는 거 아니냐"라며 불안해하시는 외국인 배우자가 많습니다. 결혼이민(F-6) 자격은 혼인관계가 깨지면 원칙적으로 변경 사유가 발생하지만, 한국인 배우자의 귀책사유로 혼인이 파탄되었거나 자녀 양육 중이라면 체류 연장·전환이 가능합니다. 출입국·외국인청 신고는 사유 발생일로부터 14일 이내가 원칙입니다.</p>',
    sections: [
      {
        title: '체류자격 — F-6 결혼이민의 3가지 갈래',
        content:
          '<p><strong style="color:#1e3a5f">출입국관리법 시행령 별표1의2 결혼이민(F-6)은 사유에 따라 1·2·3호로 갈립니다.</strong></p>\n<ul>\n<li><strong>F-6-1</strong> — 한국인 배우자와 정상 혼인 유지 중. 이혼 시 자격 변경 사유 발생.</li>\n<li><strong>F-6-2</strong> — 한국인 배우자와의 사이에 자녀를 양육 중. 이혼 후에도 자녀 양육 시 유지 가능.</li>\n<li><strong>F-6-3</strong> — 한국인 배우자의 귀책사유로 혼인 파탄. 이혼 후에도 체류 가능 자격.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이혼 사유와 자녀 양육 여부에 따라 1·2·3호 중 어디에 해당하는지가 체류 연장의 분수령입니다.</blockquote>',
      },
      {
        title: '5단계 신청 — 이혼 통보부터 자격 변경까지',
        content:
          '<p><strong style="color:#1e3a5f">변경 사유 발생 14일 이내 신고, 체류기간 만료 4개월 전부터 연장 신청을 시작합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변경 신고</strong> — 이혼 확정일 기준 14일 이내 출입국·외국인청에 사유 신고.</li>\n<li><strong>2단계 — 귀책사유 입증서류</strong> — 폭행·외도·유기 등 한국인 배우자 책임 증빙 정리.</li>\n<li><strong>3단계 — 자녀 양육 증빙</strong> — 이혼판결문 양육자 지정·주민등록·학적·진료기록.</li>\n<li><strong>4단계 — 자격 변경 신청</strong> — F-6-1 → F-6-2 또는 F-6-3로 변경. 하이코리아 사전예약.</li>\n<li><strong>5단계 — F-5 영주 또는 귀화</strong> — 일정 요건 충족 시 영주(F-5)·간이귀화로 전환.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 귀책사유 입증 가능성과 자격 전환 시나리오를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '귀책사유 — 어떤 자료가 결정적인가',
        content:
          '<p><strong style="color:#1e3a5f">F-6-3 자격은 "한국인 배우자에게 책임 있는 사유로 혼인이 파탄됐음"을 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>가정폭력</strong> — 진단서·신고이력·접근금지·임시조치 결정문.</li>\n<li><strong>부정행위</strong> — 카톡·결제내역·상간자 위자료 판결.</li>\n<li><strong>유기·생활비 미지급</strong> — 송금기록 부재·통신 두절·고지서 미납.</li>\n<li><strong>이혼 판결문</strong> — 한국인 배우자의 책임을 적시한 판결 이유 부분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 협의이혼이라도 "귀책사유 확인서"를 별도 첨부하면 F-6-3 심사에 유리합니다.</blockquote>',
      },
      {
        title: '관할 — 이혼 재판은 어디서 받아야 하나',
        content:
          '<p><strong style="color:#1e3a5f">국제사법 제56조에 따라 한국 거주 외국인 배우자도 한국 법원에서 이혼 가능합니다.</strong></p>\n<ul>\n<li><strong>한국 가정법원 관할</strong> — 부부 일방이 한국에 상거소가 있으면 한국 법원 관할.</li>\n<li><strong>준거법</strong> — 부부의 상거소·국적에 따라 한국법 또는 본국법 적용.</li>\n<li><strong>외국 판결의 한국 승인</strong> — 외국에서 받은 이혼판결을 한국 호적에 반영하려면 별도 신고.</li>\n<li><strong>통역·번역</strong> — 외국 서류는 영사확인 또는 아포스티유 + 한국어 번역공증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 본국 송환 위협을 받았다면 즉시 다누리콜센터(1577-1366) 또는 변호사에게 보호 요청하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인 배우자 체류기간 연장 거부',
        summary:
          '대법원 2018두66869 사건(대법원, 2019.07.04 선고)에서 법원은 한국 국적의 배우자와 이혼한 베트남 여성이 결혼이민 체류기간 연장 거부 처분을 다툰 사건에서 한국인 배우자의 귀책사유로 정상적 혼인관계 유지가 어려웠던 점을 충분히 심리해야 한다고 판시했습니다. 행정청은 입증 자료를 폭넓게 살펴봐야 합니다.',
        takeaway:
          '체류 연장이 거부됐더라도 행정심판·행정소송으로 다툴 수 있으며, 귀책사유 자료가 핵심 쟁점입니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼하면 원칙적으로 F-6-3로 변경되나요?',
        answer:
          '<strong>협의이혼만으로는 F-6-3 자격이 자동 부여되지 않습니다.</strong> 한국인 배우자 귀책 자료를 별도로 제출해야 하며, 자녀 양육 중이라면 F-6-2가 더 안정적입니다.',
      },
      {
        question: '한국 국적 자녀를 양육하면 영주(F-5)로 갈 수 있나요?',
        answer:
          '<strong>F-6 자격으로 일정 기간 한국 거주 + 자녀 양육 등 요건 충족 시 F-5 신청 가능합니다.</strong> 출입국청 자격요건 가이드에 따라 직접 점검이 필요합니다.',
      },
      {
        question: '이혼 후에도 한국에 계속 살려면 비자 변경 시기는 언제인가요?',
        answer:
          '<strong>이혼 확정일 14일 이내 변경 신고가 원칙입니다.</strong> 체류 만료 전 자격 변경 신청을 함께 진행해야 단절이 발생하지 않습니다.',
      },
      {
        question: '본국으로 돌아간 뒤 한국 법원에 이혼 소송을 낼 수 있나요?',
        answer:
          '<strong>한국에 상거소·재산이 있거나 한국인 배우자가 한국 거주 중이면 한국 법원 관할이 인정될 수 있습니다.</strong> 송달은 영사 송달·공시송달로 진행됩니다.',
      },
      {
        question: '가정폭력 피해자인데 이혼 전에 미리 보호받을 수 있나요?',
        answer:
          '<strong>이혼 전에도 보호명령·접근금지·쉼터 입소가 가능합니다.</strong> 다누리콜센터·이주여성쉼터·법률구조공단을 활용하세요.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '외국인 배우자 비자 문제', href: '/guide/divorce/divorce-foreign-spouse-visa-issue' },
      { label: '국제이혼 절차·관할', href: '/guide/divorce/divorce-foreign-spouse-procedure-jurisdiction' },
      { label: '국제 양육권 분쟁', href: '/guide/divorce/divorce-foreign-spouse-custody-jurisdiction' },
      { label: '국제결혼 이혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure' },
      { label: '가정폭력 보호 명령', href: '/guide/divorce/divorce-restraining-order-protection' },
    ],
  },

  // ─── 3. divorce / bigamy-marriage-void ───
  {
    domain: 'divorce',
    slug: 'divorce-bigamy-marriage-void',
    keyword: '혼인무효 중혼 다투기',
    questionKeyword: '배우자가 다른 사람과 이미 결혼한 상태였는데 제 결혼을 무효로 할 수 있나요?',
    ctaKeyword: '혼인무효·중혼 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '혼인무효·중혼 5가지 다투기 포인트 | 로앤가이드',
      description:
        '배우자가 이미 다른 사람과 혼인 중이었거나 혼인 의사 없이 신고했다면 혼인무효·취소를 다투는 5가지 요건과 위자료·재산정리 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"등본을 떼봤는데 남편이 이미 다른 사람과 혼인신고가 되어 있더라"라는 충격적 상담이 종종 옵니다. 민법 제810조는 중혼을 금지하고 있고, 한쪽이 혼인 의사 없이 신고했거나 사기·강박으로 한 경우엔 혼인무효 또는 취소 청구가 가능합니다. 무효는 처음부터 효력이 없는 것이고 취소는 판결 시점부터 효력 소멸이라 결과가 다릅니다.</p>',
    sections: [
      {
        title: '혼인무효 vs 혼인취소 — 어떻게 다른가',
        content:
          '<p><strong style="color:#1e3a5f">민법 제815조 무효사유와 제816조 취소사유는 효과·기간 모두 다릅니다.</strong></p>\n<ul>\n<li><strong>혼인무효(제815조)</strong> — 당사자 간 혼인 합의 부재, 8촌 이내 혈족 등. 처음부터 효력 없음.</li>\n<li><strong>혼인취소(제816조)</strong> — 중혼·악질·사기·강박 등. 판결 확정 시점부터 효력 소멸.</li>\n<li><strong>제소기간</strong> — 무효는 기간 제한 없음, 취소는 사유별 6개월~3년.</li>\n<li><strong>자녀 신분</strong> — 무효라도 자녀는 친자관계 인정, 양육비 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결과적 권리는 비슷해도 시점·재산분할·상속에 큰 차이가 있어 어느 쪽으로 다툴지 신중히 결정해야 합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 중혼·혼인의사 부재 발견 직후',
        content:
          '<p><strong style="color:#1e3a5f">혼인 효력 다툼은 가족관계등록부 정정·상속·재산분할에 직결되므로 빠르게 움직여야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계증명서·혼인관계증명서 확보</strong> — 본인·배우자 모두 발급, 중혼 여부 직접 확인.</li>\n<li><strong>2단계 — 사기·강박 증거 정리</strong> — 위장혼인·국적 취득 목적·금전 갈취 정황 자료.</li>\n<li><strong>3단계 — 가정법원 소장 접수</strong> — 혼인무효 또는 취소청구. 토지관할은 부부 주소지.</li>\n<li><strong>4단계 — 위자료·재산 정리</strong> — 혼인 기간 중 발생한 손해·재산은 별도 청구.</li>\n<li><strong>5단계 — 호적·등록부 정정</strong> — 판결 확정 후 관할 시·구·읍·면에 신고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 무효·취소 사유와 청구 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '중혼 — 누구 혼인이 살아남나',
        content:
          '<p><strong style="color:#1e3a5f">민법 제810조에 따라 후혼이 중혼이 되며, 후혼은 취소 대상이지만 자동 무효는 아닙니다.</strong></p>\n<ul>\n<li><strong>전혼 우선 원칙</strong> — 시간상 먼저 한 혼인은 유효, 후혼은 취소 청구 대상.</li>\n<li><strong>제소권자</strong> — 당사자·배우자·직계존속·검사가 후혼 취소 청구 가능.</li>\n<li><strong>전혼 이혼 후 재혼</strong> — 전혼이 이혼·무효로 정리됐다면 후혼은 정상 유효.</li>\n<li><strong>국적·신분 목적 위장혼인</strong> — 출입국 관계법·형법 위장결혼죄 별도 처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 후혼 배우자가 중혼 사실을 몰랐다면 위자료·재산 손실에 대한 손해배상도 별도 청구 가능합니다.</blockquote>',
      },
      {
        title: '재산·자녀·상속 — 무효 판결 후 정리',
        content:
          '<p><strong style="color:#1e3a5f">혼인무효라도 사실혼·자녀 신분·재산 형성 기여는 별도로 보호됩니다.</strong></p>\n<ul>\n<li><strong>사실혼 보호</strong> — 무효 혼인 기간이 사실혼으로 평가되면 재산분할 청구 가능.</li>\n<li><strong>자녀 친자관계</strong> — 무효라도 출생 자녀의 친권·양육비·상속권은 유지.</li>\n<li><strong>상속·세무</strong> — 무효 시 상속분 부정확이 정정될 수 있어 세무서 신고도 함께.</li>\n<li><strong>위자료 청구</strong> — 사기·강박 등 귀책 있는 상대에게 정신적 손해배상 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재혼 직전 발견했다면 호적 정정 전에는 새 혼인신고가 거부될 수 있으니 절차 순서를 변호사와 잡으세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 후에도 혼인무효 확인 청구 가능',
        summary:
          '대법원 2020므15896 사건(대법원, 2024.05.23 선고)에서 법원은 혼인관계가 이미 이혼으로 해소된 후에도 혼인무효 확인을 구할 법률상 이익이 인정되는 경우가 있다고 판시했습니다. 호적·상속·재산분할 정정을 위해 사후 무효 확인이 필요할 수 있다는 취지입니다.',
        takeaway:
          '이미 이혼했더라도 혼인무효 확인이 필요하면 별도 청구가 가능하니, 해소 후 발견된 사유라도 포기하지 마세요.',
      },
    ],
    faq: [
      {
        question: '결혼식 없이 혼인신고만 한 경우도 무효 사유가 되나요?',
        answer:
          '<strong>결혼식 자체보다 혼인 의사의 합치가 핵심입니다.</strong> 한쪽이 혼인 의사 없이 신고했다면 무효 사유, 양쪽 의사가 있었다면 형식 문제만으로는 무효 아닙니다.',
      },
      {
        question: '취소 청구 기간이 지났는데 다른 방법이 있나요?',
        answer:
          '<strong>취소 기간이 지나면 이혼 사유로 전환해 진행하는 경우가 많습니다.</strong> 사기·악질 사실은 이혼 사유 또는 위자료 사유로도 인정될 수 있습니다.',
      },
      {
        question: '국적 취득 목적의 위장결혼은 어떻게 처리되나요?',
        answer:
          '<strong>혼인무효 또는 취소 청구가 가능하고, 형법상 위장결혼죄로도 고소할 수 있습니다.</strong> 출입국 측 신고도 병행하면 자격 취소 절차가 진행됩니다.',
      },
      {
        question: '혼인무효 판결을 받으면 그동안 모은 재산은 어떻게 되나요?',
        answer:
          '<strong>무효라도 공동 노력으로 형성한 재산은 사실혼·부당이득·일반 민사로 정리할 수 있습니다.</strong> 등기·계좌 명의를 기준으로 정리 방향이 갈립니다.',
      },
      {
        question: '중혼 사실을 안 시점부터 6개월 이내가 맞나요?',
        answer:
          '<strong>중혼 취소는 기간 제한이 사유별로 다르니 변호사와 시점 계산이 필요합니다.</strong> 늦게 알았더라도 인지 시점을 입증할 수 있으면 다투기 가능합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '혼인 취소·사기혼인', href: '/guide/divorce/divorce-marriage-annulment-fraud' },
      { label: '사실혼 재산 정리', href: '/guide/divorce/divorce-cohabitation-property-dissolution' },
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '국제결혼 이혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure' },
      { label: '협의이혼 절차 정리', href: '/guide/divorce/consensual-divorce-process' },
    ],
  },

  // ─── 4. divorce / stepchild-support-after-divorce ───
  {
    domain: 'divorce',
    slug: 'divorce-stepchild-support-after-divorce',
    keyword: '재혼가정 의붓자녀 양육비',
    questionKeyword: '재혼한 배우자의 자녀를 키우다 이혼하면 양육비를 받을 수 있나요?',
    ctaKeyword: '재혼가정 의붓자녀 양육비 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '재혼가정 의붓자녀 양육비 4가지 핵심 정리 | 로앤가이드',
      description:
        '재혼 후 의붓자녀를 함께 양육하다 이혼하게 됐을 때 친양자입양 여부에 따라 달라지는 양육비 청구권 4가지 갈래와 입양·파양 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"재혼한 남편 자녀를 8년간 키웠는데 이혼하면 그동안 든 돈은 어떻게 되냐"라며 답답해하는 분들이 많습니다. 단순 동거만 했는지, 친양자입양까지 했는지에 따라 양육비·상속·신분관계가 완전히 달라집니다. 친양자입양은 친부모와의 관계를 단절시키므로 이혼 후 양육비 청구의 결정적 변수입니다.</p>',
    sections: [
      {
        title: '의붓자녀 신분관계 — 4가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">민법 제908조의2 친양자입양과 일반양자입양은 효과가 전혀 다릅니다.</strong></p>\n<ul>\n<li><strong>유형① 동거만</strong> — 입양 안 함. 법적 친자 아님, 양육비 청구권 없음.</li>\n<li><strong>유형② 일반양자입양</strong> — 친부모 관계 유지, 양부모와도 친자 관계. 양육비 청구 가능.</li>\n<li><strong>유형③ 친양자입양</strong> — 친부모 관계 단절, 양부모와만 친자. 양육비·상속 모두 적용.</li>\n<li><strong>유형④ 사실상 양육</strong> — 입양 미신고지만 장기 양육. 양육비·기여분 별도 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신분증명서 한 장이 양육비 청구의 운명을 결정하므로 가족관계증명서부터 확인하세요.</blockquote>',
      },
      {
        title: '4단계 정리 — 재이혼 직전 점검 순서',
        content:
          '<p><strong style="color:#1e3a5f">신분관계·양육 사실·기여분을 시점별로 정리해야 청구권 누락이 없습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계증명서 발급</strong> — 자녀 기준 부·모·양부모 관계 직접 확인.</li>\n<li><strong>2단계 — 입양·파양 이력 확인</strong> — 친양자 입양은 가정법원 결정 + 등록기록 필수.</li>\n<li><strong>3단계 — 양육 기여 자료 정리</strong> — 학비·생활비 송금·진료기록·학적부.</li>\n<li><strong>4단계 — 청구 갈래 선택</strong> — 양육비 vs 부당이득 vs 사실상 양육비 청구 중 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 입양 유형과 청구권 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '친양자입양 + 이혼 — 양육비 청구 흐름',
        content:
          '<p><strong style="color:#1e3a5f">친양자입양이 끝난 자녀는 친자녀와 동일하게 양육비 청구권이 발생합니다.</strong></p>\n<ul>\n<li><strong>양육자 지정</strong> — 이혼 시 양육자 지정 결정에 따라 청구권자 결정.</li>\n<li><strong>양육비 산정기준표</strong> — 서울가정법원 산정기준표 적용, 부모 합산 소득 기준.</li>\n<li><strong>친부모 관계 단절</strong> — 친양자라면 친부모에게 양육비 청구 불가.</li>\n<li><strong>친양자 파양</strong> — 파양 결정 시 양부모 관계 종료, 양육비 청구권도 단절.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친양자입양을 하지 않고 동거만 했다면 양육비는 어렵지만, 사실상 양육 기여는 재산분할 인정 사유로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: '입양 안 한 의붓자녀 — 무엇을 받을 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">입양이 없으면 양육비 청구는 어렵지만 부당이득·재산분할 기여로 보전할 수 있습니다.</strong></p>\n<ul>\n<li><strong>친부모 양육비 추급</strong> — 친부모(전 배우자)에게 친자 양육비 소급 청구 가능.</li>\n<li><strong>재산분할 기여 가산</strong> — 의붓자녀 양육 기여를 가사노동·기여도로 평가해 분할률 상향.</li>\n<li><strong>부당이득 반환</strong> — 의붓자녀 학비·생활비를 일방이 부담했다면 일부 반환 청구 검토.</li>\n<li><strong>유산 정리</strong> — 입양 없는 의붓자녀와 유산 관계 정리, 유언·증여 흔적 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 입양 없는 동거 양육 사실을 입증하려면 학적·진료·송금기록을 시점별로 묶어 정리해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 협의이혼 후 양육비 인정 시점',
        summary:
          '대법원 2023스637 사건(대법원, 2024.10.08 선고)에서 법원은 협의이혼 이후 재산분할청구를 하지 않은 상대방에 대하여 청구인이 자녀 양육비를 청구하는 사건에서 양육비 산정 시점과 분담 의무를 명확히 정리했습니다. 양육비는 협의이혼 여부와 별개로 자녀 복리를 기준으로 판단됩니다.',
        takeaway:
          '협의이혼·재혼·재이혼 어떤 단계든 자녀 양육비는 별도 사건으로 청구 가능하니 시기를 놓치지 마세요.',
      },
    ],
    faq: [
      {
        question: '재혼 후 같이 살았지만 입양은 안 했어요. 양육비 청구할 수 있나요?',
        answer:
          '<strong>법적 친자관계가 없으면 직접 양육비 청구는 어렵습니다.</strong> 다만 친부모(전 배우자)에 대한 친자 양육비 청구는 그대로 가능하니 친부모 쪽으로 진행하세요.',
      },
      {
        question: '친양자입양을 했는데 이혼하면 자녀와 관계는 어떻게 되나요?',
        answer:
          '<strong>이혼해도 친양자 관계는 유지됩니다.</strong> 양육자가 누구인지에 따라 양육비 지급의무자가 달라질 뿐 친자관계 자체는 종료되지 않습니다.',
      },
      {
        question: '의붓자녀 학비를 내가 다 냈는데 그건 어떻게 받나요?',
        answer:
          '<strong>입양 없이 부담한 학비는 부당이득·기여분으로 일부 청구가 검토됩니다.</strong> 송금기록·고지서·납부확인서를 시점별로 모으세요.',
      },
      {
        question: '친양자 파양을 하면 양육비도 안 줘도 되나요?',
        answer:
          '<strong>친양자 파양이 인정되면 양부모 관계가 종료되어 향후 양육비 의무는 사라집니다.</strong> 다만 파양 자체가 엄격히 인정되며, 자녀 복리가 핵심 기준입니다.',
      },
      {
        question: '재이혼 시 의붓자녀 상속권은 어떻게 되나요?',
        answer:
          '<strong>친양자입양된 의붓자녀는 친자녀와 동일한 상속권을 가집니다.</strong> 일반양자도 양가·친가 모두에서 상속권이 있고, 입양 없는 동거자녀는 상속권이 없습니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '양육비 산정 기준', href: '/guide/divorce/child-support-calculation-standard' },
      { label: '양육비 직접지급 vs 이행관리원', href: '/guide/divorce/child-support-direct-vs-agency-comparison' },
      { label: '양육비 미지급 대응', href: '/guide/divorce/child-support-non-payment' },
      { label: '과거 양육비 소급 청구', href: '/guide/divorce/divorce-past-child-support-claim-years-later' },
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
    ],
  },

  // ─── 5. inheritance / foreign-asset-discovery ───
  {
    domain: 'inheritance',
    slug: 'inheritance-foreign-asset-discovery',
    keyword: '해외 상속재산 조회',
    questionKeyword: '돌아가신 분이 미국·일본에 재산이 있다는데 어떻게 찾아내나요?',
    ctaKeyword: '해외 상속재산 조회 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 상속재산 조회 5단계 추적 절차 | 로앤가이드',
      description:
        '피상속인이 해외에 부동산·예금·증권을 보유한 정황은 있지만 정확한 위치를 모를 때 한국 자료부터 현지 은행·법원까지 5단계 추적하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 미국에 부동산이 있다고만 들었지 어디인지는 모른다"라는 상담이 이어집니다. 해외 상속재산은 한국 안심상속 원스톱 서비스만으론 절대 잡히지 않습니다. 외환신고·해외계좌신고·세무서 자료부터 출발해 현지 영사관·로컬 변호사를 거쳐야 위치를 잡을 수 있습니다. 한국 상속세 신고기한 6개월(또는 9개월) 안에 시작해야 가산세를 피합니다.</p>',
    sections: [
      {
        title: '한국 안에서 먼저 찾을 수 있는 흔적',
        content:
          '<p><strong style="color:#1e3a5f">해외재산도 한국 자료에 흔적이 남아 있는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>외환신고 이력</strong> — 한국은행·관세청 외환거래신고 자료, 해외 송금 1만 달러 초과 기록.</li>\n<li><strong>해외금융계좌 신고</strong> — 국세청 해외금융계좌 신고 이력(잔액 5억 원 초과).</li>\n<li><strong>국세청 자료</strong> — 종합소득세·금융정보분석원 의심거래 기록, 변호사 의뢰로 열람.</li>\n<li><strong>여권·항공 기록</strong> — 출입국 기록으로 거주국 추정, 현지 거점 추적의 단서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한국 자료에서 거주국·송금처를 좁힌 뒤 현지 절차로 넘어가는 순서가 효율적입니다.</blockquote>',
      },
      {
        title: '5단계 절차 — 한국에서 현지까지',
        content:
          '<p><strong style="color:#1e3a5f">조회 → 청구 → 분할 → 송금 → 신고 순으로 6개월 시간표를 짜는 게 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 한국 자료 정리</strong> — 사망신고·기본증명서·가족관계증명서·외환신고이력 발급.</li>\n<li><strong>2단계 — 현지 영사관 신고</strong> — 사망사실을 거주국 영사관에 신고, 현지 절차 안내 받기.</li>\n<li><strong>3단계 — 현지 변호사 선임</strong> — 현지 Probate(미국)·검인(일본) 등 절차 진행.</li>\n<li><strong>4단계 — 분할·환가</strong> — 부동산은 매각·증여 결정, 예금은 인출·송금.</li>\n<li><strong>5단계 — 한국 상속세 신고</strong> — 사망일이 속한 달 말일부터 6개월(거주자) 또는 9개월(비거주자) 이내.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 거주국별 조회 경로와 상속세 시한을 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '국가별 차이 — 미국·일본·동남아 패턴',
        content:
          '<p><strong style="color:#1e3a5f">국가마다 상속법·검인절차·세제가 달라 같은 자산이라도 절차가 전혀 다릅니다.</strong></p>\n<ul>\n<li><strong>미국</strong> — 주별로 다름. 캘리포니아·뉴욕은 Probate 필수, 신탁이 있으면 우회 가능.</li>\n<li><strong>일본</strong> — 한국과 비슷한 검인·유언 집행, 유언서 검인 절차 별도.</li>\n<li><strong>동남아(베트남·필리핀)</strong> — 외국인 부동산 소유 제한이 있어 환가·송금 단계가 까다로움.</li>\n<li><strong>중국</strong> — 외환관리 엄격, 송금 시 사전 승인 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거주국 변호사·세무사를 한 명 정해 한국 변호사와 양국 협업으로 진행하는 게 가장 안정적입니다.</blockquote>',
      },
      {
        title: '한국 상속세 — 해외 자산도 신고 대상',
        content:
          '<p><strong style="color:#1e3a5f">상속세 및 증여세법 제3조에 따라 거주자가 사망 시 전 세계 재산이 한국 상속세 대상입니다.</strong></p>\n<ul>\n<li><strong>거주자 판정</strong> — 피상속인이 한국 거주자였다면 해외 자산 전부 한국 상속세 과세.</li>\n<li><strong>외국납부세액공제</strong> — 현지에서 낸 상속세는 한국 상속세에서 공제 가능.</li>\n<li><strong>이중과세조약</strong> — 한·미·일 등 조세조약으로 이중과세 조정.</li>\n<li><strong>가산세·가산금</strong> — 신고기한 도과 시 신고불성실·납부불성실 가산세 부과.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해외에 송금된 자산을 신고 누락하면 추후 국세청 해외금융계좌 정보 교환으로 적발될 수 있으니 정직하게 신고하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외재산 상속세 부과 처분',
        summary:
          '대법원 2017두62716 사건(대법원, 2020.12.30 선고)에서 법원은 해외에 보유한 재산도 거주자 사망 시 한국 상속세 과세대상이며 외국에서 납부한 세액을 공제하는 방식의 처분이 정당하다고 판단했습니다. 해외재산 누락 신고는 추징·가산세로 이어집니다.',
        takeaway:
          '해외 자산도 가능한 한 한국 상속세 신고 대상이며, 현지 세금은 별도로 공제 가능하니 누락 없이 신고하세요.',
      },
    ],
    faq: [
      {
        question: '해외 부동산 위치를 모르는데 영사관에서 다 알려주나요?',
        answer:
          '<strong>영사관은 사망신고·서류 인증을 도와줄 뿐 재산 위치 조회는 하지 않습니다.</strong> 거주국 변호사·부동산등기소·세무서 협업이 필요합니다.',
      },
      {
        question: '국세청 해외금융계좌 자료는 상속인이 직접 받을 수 있나요?',
        answer:
          '<strong>상속인은 정보공개청구·세무대리인 위임으로 일부 열람이 가능합니다.</strong> 변호사·세무사를 통해 청구하는 것이 빠릅니다.',
      },
      {
        question: '미국 부동산을 한국으로 송금하려면 얼마나 걸리나요?',
        answer:
          '<strong>Probate 절차만 보통 6개월~1년 이상 걸립니다.</strong> 자산이 신탁에 들어 있으면 단축 가능, 이때문에 한국 상속세 6개월 시한을 미리 연장해야 합니다.',
      },
      {
        question: '해외에 차명으로 둔 자산도 상속재산에 포함되나요?',
        answer:
          '<strong>실질 권리자가 피상속인이면 차명이라도 상속재산입니다.</strong> 명의신탁 정황·자금 흐름을 입증해 추가 분할 청구도 가능합니다.',
      },
      {
        question: '비거주자 사망인데 한국 상속세를 내야 하나요?',
        answer:
          '<strong>피상속인이 비거주자면 한국 내 소재 재산만 한국 상속세 대상입니다.</strong> 신고 기한도 9개월로 거주자(6개월)와 다릅니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '해외재산 상속 신고 절차', href: '/guide/inheritance/inheritance-foreign-assets-declaration-report' },
      { label: '재외동포 한국재산 상속', href: '/guide/inheritance/inheritance-foreign-resident-korean-property' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '숨긴 재산 추가 분할', href: '/guide/inheritance/inheritance-hidden-asset-additional-division' },
      { label: '상속세 신고 기한·가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
    ],
  },

  // ─── 6. inheritance / life-insurance-beneficiary-dispute ───
  {
    domain: 'inheritance',
    slug: 'inheritance-life-insurance-beneficiary-dispute',
    keyword: '사망보험금 수익자 분쟁',
    questionKeyword: '사망보험금 수익자가 한 명으로 지정돼 있는데 다른 자녀가 분쟁을 걸 수 있나요?',
    ctaKeyword: '사망보험금 수익자 분쟁 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사망보험금 수익자 분쟁 5가지 쟁점 정리 | 로앤가이드',
      description:
        '사망보험금 수익자로 한 명만 지정된 상황에서 다른 상속인이 유류분·기여분으로 다투려 할 때 보험금의 상속재산성·반환 청구 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>"엄마가 큰언니만 사망보험금 수익자로 지정해 두셨는데 동생들은 한 푼도 못 받나"라는 분쟁이 잦아지고 있습니다. 사망보험금은 원칙적으로 수익자의 고유재산이라 상속재산이 아니지만, 유류분·기여분·민법상 부당한 형평 문제로 다툴 수 있는 길이 따로 있습니다. 시효는 안 시점부터 1년·상속개시 10년이라 빨리 움직여야 합니다.</p>',
    sections: [
      {
        title: '사망보험금 — 상속재산인가 고유재산인가',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 사망보험금을 원칙적으로 수익자의 고유재산으로 보고 있습니다.</strong></p>\n<ul>\n<li><strong>고유재산설</strong> — 보험계약상 수익자로 지정된 자가 직접 보험사에 청구하는 권리.</li>\n<li><strong>상속재산 아님</strong> — 한정승인·상속포기를 해도 수익자 권리는 유지.</li>\n<li><strong>예외</strong> — 수익자가 "상속인" 또는 "법정상속인"으로 포괄 지정된 경우 별도 분배 기준 적용.</li>\n<li><strong>유류분 산입</strong> — 보험금이 사실상 증여로 평가되면 유류분 산정에 포함되는 사례 다수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보험금이 고유재산이라도 다른 상속인은 유류분·기여분으로 일부 회수 가능합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 다른 자녀가 다툴 때 절차',
        content:
          '<p><strong style="color:#1e3a5f">증명서·약관·납입주체 확인 후 유류분·부당이득 청구를 결정해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보험증권·약관 확보</strong> — 수익자 지정 시점·변경 이력·납입자 명의 확인.</li>\n<li><strong>2단계 — 보험료 출처 추적</strong> — 피상속인 자금으로 납입했는지, 수익자 자금인지 구분.</li>\n<li><strong>3단계 — 유류분 산입 검토</strong> — 사망 직전 수익자 변경·일방적 수익자 지정은 유류분 산정 포함.</li>\n<li><strong>4단계 — 유류분 반환청구</strong> — 안 시점부터 1년, 상속개시일부터 10년 이내.</li>\n<li><strong>5단계 — 부당이득·민사조정</strong> — 가족 협의로 일부 분배 합의도 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보험금 유류분 산입 여부와 회수 가능액을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수익자 변경 시점 — 사망 직전이라면',
        content:
          '<p><strong style="color:#1e3a5f">사망에 임박해 수익자를 한 명으로 몰아준 경우 의사능력·기망 다툼이 가능합니다.</strong></p>\n<ul>\n<li><strong>의사능력 부재</strong> — 치매·중증 질환 진단 시기와 변경 시기 비교.</li>\n<li><strong>기망·강박</strong> — 가족이 부추겨 변경하게 했다는 정황 자료.</li>\n<li><strong>대리권 남용</strong> — 위임장으로 변경했을 때 위임 범위·진정성 확인.</li>\n<li><strong>증여 추정</strong> — 사망 1년 이내 변경은 유류분 산입 가능성 큼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록·간병일지·요양시설 기록을 확보해 의사능력 다툼 자료로 정리하세요.</blockquote>',
      },
      {
        title: '한정승인·포기와 보험금 — 분리해서 결정',
        content:
          '<p><strong style="color:#1e3a5f">상속을 포기·한정승인해도 사망보험금은 별도로 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>고유재산 원칙</strong> — 상속포기·한정승인이 보험금 청구를 막지 않음.</li>\n<li><strong>채무 회피용 활용</strong> — 빚이 많은 상속에서도 보험금 수익자는 안전하게 청구 가능.</li>\n<li><strong>상속세는 별도</strong> — 보험금은 상속세법상 간주상속재산으로 상속세 대상.</li>\n<li><strong>수령 후 분배</strong> — 가족 합의로 일부 형제와 나누는 건 자유, 다만 증여세 검토 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사망보험금 수령 후 형제에게 임의 분배하면 증여세 과세 대상이 될 수 있으니 세무사 상담 필수.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 즉시연금보험금과 명시·설명의무',
        summary:
          '대법원 2022다225897 사건(대법원, 2025.10.16 선고)에서 법원은 상속만기형 즉시연금보험상품에 가입한 보험계약자에 대한 연금산출방식 명시·설명의무가 문제된 사건에서 보험계약 효력과 수익자 권리의 범위를 명확히 정리했습니다. 약관 설명 부실 시 수익자 분쟁의 새 쟁점이 됩니다.',
        takeaway:
          '보험금 분쟁은 약관 설명·계약 시점이 결정적이니 증권·녹취·청약서까지 함께 확보하세요.',
      },
    ],
    faq: [
      {
        question: '큰언니가 단독 수익자로 받은 보험금, 동생도 일부 받을 수 있나요?',
        answer:
          '<strong>유류분 침해가 인정되면 일부 반환 청구가 가능합니다.</strong> 보험료 납입 출처·수익자 변경 시점·증여 의사 여부에 따라 유류분 산입 여부가 갈립니다.',
      },
      {
        question: '한정승인을 했는데 사망보험금은 받을 수 있나요?',
        answer:
          '<strong>네, 보험금은 고유재산이라 한정승인·상속포기와 무관하게 청구 가능합니다.</strong> 다만 상속세는 따로 신고해야 합니다.',
      },
      {
        question: '수익자가 "법정상속인"으로만 적힌 보험은 어떻게 분배하나요?',
        answer:
          '<strong>법정상속분에 따라 분배하는 것이 원칙입니다.</strong> 다만 약관·실무에 따라 균등분배가 적용되기도 하니 보험사 약관 확인이 필요합니다.',
      },
      {
        question: '치매 진단을 받은 후 수익자를 변경했다면 무효가 되나요?',
        answer:
          '<strong>의사능력이 없는 상태에서의 변경은 무효 다툼이 가능합니다.</strong> 진료기록·간병일지·증인진술로 시기를 입증해야 합니다.',
      },
      {
        question: '유류분 청구는 언제까지 해야 하나요?',
        answer:
          '<strong>안 시점부터 1년, 상속개시일부터 10년 이내입니다.</strong> 보험금 수령 사실을 안 시점이 기준이 될 수 있어 빠른 점검이 중요합니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '사망보험금 수익자 분리', href: '/guide/inheritance/inheritance-life-insurance-beneficiary-separate' },
      { label: '사망보험금 상속재산 제외', href: '/guide/inheritance/inheritance-life-insurance-not-included' },
      { label: '유류분 청구 10년 시효', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '유류분 증여 산정 범위', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
      { label: '유류분 소송 가이드', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
    ],
  },

  // ─── 7. inheritance / corporate-shares-distribution ───
  {
    domain: 'inheritance',
    slug: 'inheritance-corporate-shares-distribution',
    keyword: '비상장주식 상속 분할',
    questionKeyword: '아버지가 운영하던 비상장 회사 주식을 어떻게 분할하나요?',
    ctaKeyword: '비상장주식 상속 분할 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비상장주식 상속 분할 5단계 명의개서 절차 | 로앤가이드',
      description:
        '피상속인이 운영하던 비상장 법인 주식을 상속받게 됐을 때 평가·분할·명의개서·상속세 신고까지 5단계 절차와 분쟁 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 1인 법인 대표였는데 형제 셋이 주식을 어떻게 나누나"라는 상담이 늘었습니다. 비상장주식은 거래소 시세가 없어 평가부터 분할·명의개서까지 모든 단계가 분쟁의 도화선입니다. 평가가 잘못되면 상속세도, 형제 간 분배도 모두 어그러집니다. 6개월 안에 평가·신고·명의개서를 정리해야 가산세를 피합니다.</p>',
    sections: [
      {
        title: '비상장주식 평가 — 4가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">상속세 및 증여세법 제63조와 시행령 제54조의 보충적 평가법이 기본입니다.</strong></p>\n<ul>\n<li><strong>1주당 순손익가치</strong> — 최근 3년 가중평균 순이익 기준.</li>\n<li><strong>1주당 순자산가치</strong> — 회사 순자산을 발행주식수로 나눈 값.</li>\n<li><strong>가중평균</strong> — 일반법인은 3:2(순손익:순자산), 부동산 과다보유법인은 2:3.</li>\n<li><strong>최대주주 할증</strong> — 최대주주 보유분은 20% 할증(중소기업 등 예외).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 평가 한 번이 상속세와 형제 분배 모두를 좌우하므로 회계법인·세무사 검토가 필수입니다.</blockquote>',
      },
      {
        title: '5단계 절차 — 사망 직후부터 명의개서까지',
        content:
          '<p><strong style="color:#1e3a5f">평가 → 분할 협의 → 명의개서 → 세무 신고 순으로 6개월 시간표를 짜야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 주주명부·정관 확보</strong> — 발행주식수·주주구성·양도제한·우선매수권 확인.</li>\n<li><strong>2단계 — 비상장주식 평가</strong> — 회계법인 의뢰, 보충적 평가법 + 거래사례·매매시도 검토.</li>\n<li><strong>3단계 — 분할 협의서 작성</strong> — 상속인 전원 인감 날인, 지분 비율 명시.</li>\n<li><strong>4단계 — 명의개서</strong> — 회사에 주주명부 정정 청구, 회사가 응하지 않으면 주주지위 확인 소송.</li>\n<li><strong>5단계 — 상속세 신고</strong> — 사망일 속 달 말일부터 6개월 이내, 평가서·분할협의서 첨부.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 평가·분할·명의개서 단계별 쟁점을 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '명의개서 거부 — 회사가 안 받아줄 때',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 공동상속받은 자의 단독 명의개서 청구권을 인정하고 있습니다.</strong></p>\n<ul>\n<li><strong>주주지위확인 소송</strong> — 회사가 명의개서를 거부하면 가정법원이 아닌 민사법원에 청구.</li>\n<li><strong>가처분</strong> — 임시 의결권 행사 가처분으로 주주총회 대비.</li>\n<li><strong>양도제한 정관</strong> — 정관에 양도제한 조항이 있어도 상속은 원칙적으로 자유 이전.</li>\n<li><strong>우선매수권</strong> — 다른 주주의 우선매수권은 상속에는 적용되지 않는 것이 통상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 1인 법인이라면 대표 사망과 동시에 임시이사 선임·등기 변경도 함께 진행해야 합니다.</blockquote>',
      },
      {
        title: '가업상속공제 — 절세 카드 활용',
        content:
          '<p><strong style="color:#1e3a5f">상속세 및 증여세법 제18조의2 가업상속공제로 최대 600억 원까지 공제받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>요건</strong> — 10년 이상 계속 경영, 피상속인 보유 지분 일정 비율 이상.</li>\n<li><strong>상속인 요건</strong> — 상속개시일 전 2년 이상 가업 종사, 상속 후 7년 이상 종사.</li>\n<li><strong>사후관리</strong> — 7년간 가업 처분·고용·자산 유지 의무.</li>\n<li><strong>위반 효과</strong> — 사후관리 기간 위반 시 공제액 전액 추징.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사후관리 의무가 무겁기 때문에 단기 처분 계획이 있다면 공제 여부를 신중히 결정하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속 주식 단독 명의개서 청구',
        summary:
          '대법원 2025다211120 사건(대법원, 2025.09.11 선고)에서 법원은 주식을 공동상속받은 자가 단독으로 회사에 명의개서절차이행 또는 주주권 확인을 청구할 수 있다고 판시했습니다. 회사가 명의개서를 거부하더라도 주주지위 확인 소송으로 권리를 확보할 수 있습니다.',
        takeaway:
          '공동상속인이라면 다른 상속인 동의가 없어도 자기 지분에 대한 명의개서·주주권 확인 소송을 단독 제기 가능합니다.',
      },
    ],
    faq: [
      {
        question: '비상장주식 평가는 누구한테 의뢰해야 하나요?',
        answer:
          '<strong>회계법인·세무법인의 비상장주식 평가서가 표준입니다.</strong> 국세청 보충적 평가법을 따르면서 거래사례·매매시도가 있으면 반영합니다.',
      },
      {
        question: '회사가 주주명부 정정을 안 해주면 어떻게 하나요?',
        answer:
          '<strong>주주지위확인 소송 또는 명의개서이행청구를 민사법원에 제기합니다.</strong> 의결권 가처분도 함께 신청해 주주총회 대비를 합니다.',
      },
      {
        question: '형제 셋이 상속받았는데 그 중 한 명이 협의서에 도장을 안 찍어요.',
        answer:
          '<strong>분할협의가 안 되면 가정법원에 상속재산분할 심판을 청구합니다.</strong> 법정상속분에 따라 잠정 등록 후 본안 진행도 가능합니다.',
      },
      {
        question: '주식을 한 명에게 몰아주고 다른 형제는 현금으로 받을 수 있나요?',
        answer:
          '<strong>분할협의서로 자유롭게 정할 수 있습니다.</strong> 다만 시가와 협의금액 차이가 크면 증여세가 부과될 수 있어 사전 검토 필수.',
      },
      {
        question: '가업상속공제를 받으면 원칙적으로 7년간 운영해야 하나요?',
        answer:
          '<strong>사후관리 7년이 원칙입니다.</strong> 일부 자산 처분은 허용되나 비율·고용 유지 등 세부 요건 미충족 시 공제 추징됩니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속재산 분할 심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '상속재산 분할 협의서 하자', href: '/guide/inheritance/inheritance-division-agreement-defect-invalidation' },
      { label: '부동산 평가 분쟁', href: '/guide/inheritance/inheritance-real-estate-valuation-dispute' },
      { label: '상속세 신고 기한·가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
    ],
  },

  // ─── 8. inheritance / digital-asset-crypto-wallet ───
  {
    domain: 'inheritance',
    slug: 'inheritance-digital-asset-crypto-wallet',
    keyword: '암호화폐 상속 개인지갑',
    questionKeyword: '아버지 비트코인이 거래소 밖 개인지갑에 있는데 시드구문을 모릅니다. 어떻게 하나요?',
    ctaKeyword: '암호화폐 디지털자산 상속 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '암호화폐·디지털자산 상속 5단계 절차 | 로앤가이드',
      description:
        '피상속인이 비트코인·이더리움을 거래소 밖 개인지갑·시드구문으로 보관해 둔 경우 시드 복구·접근 추적·상속세 신고 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 코인을 거래소가 아니라 \'콜드월렛\'에 넣어두셨다는데 비번을 모릅니다"라는 상담이 늘고 있습니다. 거래소 자산은 사망신고로 환급받을 수 있지만 개인지갑·콜드월렛은 시드구문(12·24단어)이나 개인키가 없으면 사실상 복구가 불가능합니다. 시드 흔적은 메모지·USB·이메일·노트북 등에 남아있을 수 있어 빠른 추적이 필수입니다.</p>',
    sections: [
      {
        title: '디지털자산 — 보관 형태별 상속 가능성',
        content:
          '<p><strong style="color:#1e3a5f">"누가 키를 쥐고 있느냐"가 상속 회수 가능성을 결정합니다.</strong></p>\n<ul>\n<li><strong>국내 거래소(업비트·빗썸 등)</strong> — 사망신고·서류로 청구 가능, 가장 안정적.</li>\n<li><strong>해외 거래소(바이낸스 등)</strong> — KYC 자료 + 사망증명 영문번역 필요, 절차 복잡.</li>\n<li><strong>핫월렛(MetaMask·Phantom)</strong> — 시드구문/비밀번호 알면 복구, 모르면 회수 불가.</li>\n<li><strong>콜드월렛(Ledger·Trezor)</strong> — 하드웨어 + 시드 모두 필요, 분실 시 사실상 영구 손실.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개인키·시드는 한번 잃어버리면 누구도 복구할 수 없으니 흔적 추적이 최우선입니다.</blockquote>',
      },
      {
        title: '5단계 추적 — 흔적 찾기부터 신고까지',
        content:
          '<p><strong style="color:#1e3a5f">사망 직후 휴대폰·이메일·USB부터 압수하지 말고 사진·기록을 우선 보존해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 디지털 흔적 정리</strong> — 휴대폰·노트북·USB·이메일·클라우드 백업·메모지 사진 보존.</li>\n<li><strong>2단계 — 거래소 사망신고</strong> — 국내·해외 거래소에 사망증명·가족관계증명 제출.</li>\n<li><strong>3단계 — 지갑 주소·잔액 확인</strong> — 블록체인 익스플로러로 보유 주소·잔액 확인.</li>\n<li><strong>4단계 — 시드구문 복구</strong> — 메모·이미지·종이지갑·금고에서 시드 발견 시 즉시 다른 지갑으로 이전.</li>\n<li><strong>5단계 — 상속세 신고</strong> — 사망일 시가 기준 평가, 6개월 이내 신고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 거래소·지갑별 회수 절차와 상속세 시한을 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '시드구문·개인키 — 어디에 흔적이 남는가',
        content:
          '<p><strong style="color:#1e3a5f">평소 보관 패턴을 추적하면 80% 이상은 흔적이 발견됩니다.</strong></p>\n<ul>\n<li><strong>아날로그 보관</strong> — 종이지갑·노트·금고·은행 대여금고·서랍 메모지.</li>\n<li><strong>디지털 보관</strong> — 이메일 초안·메모앱·구글드라이브·아이클라우드·암호 매니저.</li>\n<li><strong>사진 백업</strong> — 시드구문을 사진으로 찍어 갤러리·클라우드에 둔 경우 다수.</li>\n<li><strong>2FA 기기</strong> — 거래소 2FA용 휴대폰 PIN을 알아야 인증 통과 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시드를 발견하면 가족 동의 후 새 지갑으로 즉시 이체해 분쟁·해킹 리스크를 차단하세요.</blockquote>',
      },
      {
        title: '상속세·평가 — 가격 변동성 큰 자산의 함정',
        content:
          '<p><strong style="color:#1e3a5f">상속세 및 증여세법 시행령 제60조에 따라 사망일 전후 평균 시가로 평가합니다.</strong></p>\n<ul>\n<li><strong>평가 시점</strong> — 사망일 또는 사망일 전후 1개월간 평균 거래가.</li>\n<li><strong>거래소 시세</strong> — 국내 주요 거래소 평균가, 해외코인은 글로벌 시세 환산.</li>\n<li><strong>가치 급락</strong> — 신고 후 가격이 폭락해도 신고시점 가액 기준이라 차액 손실.</li>\n<li><strong>분납·물납</strong> — 상속세는 5년 분납 가능, 비트코인 자체로 물납은 불가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사망 시점 시가가 신고기한까지 변동이 크다면 분할 매도·헤지 전략을 세무사와 상담하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속 디지털자산 권리 확인',
        summary:
          '대법원 2025다212863 사건(대법원, 2025.12.11 선고)에서 법원은 공동상속인이 망인의 예금채권을 임의로 인출한 다른 공동상속인을 상대로 부당이득반환을 청구한 사건에서 공동상속재산의 법적 성격과 인출권 한계를 정리했습니다. 디지털자산도 공동상속재산이라 일방의 임의 처분은 부당이득 반환 대상입니다.',
        takeaway:
          '한 상속인이 시드를 먼저 찾았다고 단독으로 처분하면 다른 상속인에게 부당이득 반환의무를 집니다.',
      },
    ],
    faq: [
      {
        question: '거래소 비밀번호를 모르는데 회수할 수 있나요?',
        answer:
          '<strong>국내 거래소는 사망신고·가족관계증명·기본증명서 제출로 자산 환급이 가능합니다.</strong> 해외 거래소는 KYC 자료에 따라 까다로워 변호사 위임이 효율적입니다.',
      },
      {
        question: '시드구문을 영영 못 찾으면 자산은 어떻게 되나요?',
        answer:
          '<strong>개인지갑 자산은 사실상 영구 손실됩니다.</strong> 다만 블록체인상 잔액은 그대로 남아 있어 미래에 시드를 찾으면 회수 가능합니다.',
      },
      {
        question: '한정승인을 했는데 코인은 받을 수 있나요?',
        answer:
          '<strong>한정승인을 해도 상속재산이라면 자산은 채무 변제에 우선 충당됩니다.</strong> 코인이 채무보다 많으면 잔여분이 상속인에게 귀속됩니다.',
      },
      {
        question: '코인 시세가 사망 후 폭락했는데 상속세도 그대로 내야 하나요?',
        answer:
          '<strong>신고 시점 평가액이 기준이라 사후 폭락은 반영되지 않습니다.</strong> 분납·매도 시점 조정으로 부담을 줄이는 전략이 필요합니다.',
      },
      {
        question: 'NFT나 게임 아이템도 상속재산인가요?',
        answer:
          '<strong>경제적 가치가 있고 양도 가능한 디지털자산은 상속재산입니다.</strong> 다만 게임사 약관·계정 양도제한 여부에 따라 회수 가능성이 갈립니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '디지털자산 휴대폰 상속', href: '/guide/inheritance/inheritance-digital-assets-mobile-phone' },
      { label: '코인·플랫폼 계정 접근', href: '/guide/inheritance/inheritance-digital-assets-platform-access' },
      { label: '숨긴 재산 추가 분할', href: '/guide/inheritance/inheritance-hidden-asset-additional-division' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '상속세 신고 기한·가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
    ],
  },
];
