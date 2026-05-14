import { SpokePage } from '../spoke-pages';

// batch65 assault(3) + child-support(2) + dui(1) — 6개 (2026-05-15)
//
// 고유 존재 이유:
// 1. assault-elderly-parent-adult-child-jonsok — 성인 자녀의 노부모 폭행 (존속폭행 가중).
// 2. assault-pet-walking-dispute-dog-owner — 반려동물 산책 시비로 인한 폭행 (소형견·견주 합의).
// 3. assault-cyber-bullying-school-online — 청소년 사이버 학교폭력 + 오프라인 폭행 결합 (학폭위 + 형사).
// 4. child-support-cohabitation-paternity-recognition-claim — 사실혼·혼외자 인지청구 + 양육비 동시.
// 5. child-support-overseas-flee-non-payer-collection — 양육의무자 해외 도주 추심·국제송달.
// 6. dui-electric-scooter-personal-mobility-impaired — 전동킥보드(PM) 음주운전 도로교통법.

export const spokesBatch65AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-elderly-parent-adult-child-jonsok-track ───
  {
    domain: 'assault',
    slug: 'assault-elderly-parent-adult-child-jonsok-track',
    keyword: '성인 자녀의 노부모 폭행',
    questionKeyword: '성인 자녀가 노부모를 폭행했어요. 존속폭행 가중처벌이 되나요?',
    ctaKeyword: '존속폭행 가중처벌 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '성인 자녀 노부모 폭행 — 5단계 존속폭행 가중 다툼 | 로앤가이드',
      description:
        '성인 자녀가 노부모를 폭행했다면 존속폭행 가중처벌·노인학대 결합 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"30대 아들이 술 마시고 들어와 70대 어머니께 폭언·폭행을 반복합니다. 어머니는 \"내 자식이라 신고 못 한다\"며 참으시는데 멍 자국·골절까지 발견됐어요. 형제들도 \"가족 일\"로만 덮어두려 합니다." 직계존속(부모·조부모) 폭행은 ① 형법 260조2항 존속폭행 가중처벌 ② 형법 257조2항 존속상해 가중 ③ 노인학대 결합 시 노인복지법 가중 ④ 가족 내부 사건이라도 반의사불벌 + 신고 가능 ⑤ 형사 + 민사 + 노인보호전문기관 5가지 트랙이 결합되는 영역. 직계존속은 자식이라도 가중처벌 대상이고, 노인이면 노인학대 결합 가중. 대응은 ① 즉시 보호 ② 의료 ③ 신고 ④ 형사 ⑤ 노인보호기관 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 성인 자녀 노부모 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·신고·형사·노인기관 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부모 즉시 보호·격리</strong></li>\n<li><strong>② 의료 진단·진단서·부상 사진</strong></li>\n<li><strong>③ 노인보호전문기관 1577-1389 신고</strong></li>\n<li><strong>④ 존속폭행 형사 고소 (형법 260조2항)</strong></li>\n<li><strong>⑤ 가정폭력 보호명령·접근금지</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직계존속 폭행은 자식이라도 가중 영역. 노인이면 노인복지법 추가 가중. 부모 \"신고 못 한다\" 의사도 제3자·기관 신고로 진행 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 보호 (즉시)</strong> — 다른 자녀 집·쉼터·요양시설.</li>\n<li><strong>2단계 — 의료 진단 (즉시~1주)</strong> — 응급실·진단서.</li>\n<li><strong>3단계 — 노인보호전문기관 1577-1389 신고</strong></li>\n<li><strong>4단계 — 경찰 신고·존속폭행 고소</strong></li>\n<li><strong>5단계 — 가정폭력 보호명령·접근금지</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">존속폭행 가중 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서 (직계존속 입증)</strong></li>\n<li><strong>의료 진단서·부상 사진·치료비 영수증</strong></li>\n<li><strong>다른 가족·이웃 증인 진술서</strong></li>\n<li><strong>폭언·폭행 녹음·문자·CCTV</strong></li>\n<li><strong>부모 일상 변화 기록 (식사·수면·정신)</strong></li>\n<li><strong>노인보호전문기관 신고 접수증</strong></li>\n<li><strong>본인 신분증·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부모가 신고 망설이시는 경우 다른 가족·이웃·요양보호사·의료진의 제3자 신고가 가능. 부모 의사와 별도로 노인보호전문기관 신고는 진행됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>존속폭행 가중</strong> — 형법 260조2항 일반 폭행보다 무거움.</li>\n<li><strong>노인학대 결합</strong> — 노인복지법 추가 가중.</li>\n<li><strong>반의사불벌</strong> — 단순 폭행은 부모 의사. 상해·노인학대는 별도.</li>\n<li><strong>제3자 신고</strong> — 부모 의사와 무관하게 가능.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 존속 상습 폭행 가중',
        summary:
          '대법원 2017도10956(대법원, 2018.04.24 선고) 영역에서 법원은 직계존속에 대한 반복적·상습적 폭행 행위는 일반 폭행죄에 비해 무겁게 평가되어야 하고, 폭행 횟수·기간·동기 등을 종합하여 상습성을 인정할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '직계존속 폭행은 가중. 반복·상습 시 더 무거움. 노인 결합 시 노인복지법 추가 가중.',
      },
    ],
    faq: [
      {
        question: '부모님이 신고를 원치 않으세요',
        answer:
          '<strong>제3자(다른 가족·이웃·의료진)나 노인보호전문기관 신고는 부모 의사와 무관히 가능합니다.</strong>',
      },
      {
        question: '존속폭행은 일반 폭행과 처벌이 얼마나 다른가요?',
        answer:
          '<strong>형법 260조2항으로 더 무겁게 평가됩니다.</strong> 노인이면 노인복지법 추가 가중.',
      },
      {
        question: '아들이 \"술 마셔서 기억 안 난다\"고 합니다',
        answer:
          '<strong>주취·기억 부재는 면책 사유가 아니라 양형 참작 사정에 불과합니다.</strong>',
      },
      {
        question: '가정폭력 보호명령은 어떻게 신청하나요?',
        answer:
          '<strong>경찰 신고 시 응급조치·임시조치 가능. 가정법원 보호명령으로 접근금지·퇴거 신청 가능합니다.</strong>',
      },
      {
        question: '치료비·위자료는 얼마인가요?',
        answer:
          '<strong>사례에 따라 다르지만 직계존속·노인 가중 사정으로 위자료 가산이 검토되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '가정폭력 보호명령', href: '/guide/assault/assault-domestic-violence-protection' },
      { label: '노인학대 신고', href: '/guide/assault/assault-elderly-abuse-report' },
      { label: '존속폭행 가중', href: '/guide/assault/assault-direct-ascendant-aggravated' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 2. assault-pet-walking-dispute-dog-owner-track ───
  {
    domain: 'assault',
    slug: 'assault-pet-walking-dispute-dog-owner-track',
    keyword: '반려동물 산책 시비 폭행',
    questionKeyword: '산책 중 반려견 시비 끝에 견주가 폭행했어요. 견주 책임과 폭행 어떻게 따지나요?',
    ctaKeyword: '반려동물 산책 시비 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '반려동물 산책 시비 폭행 — 5단계 견주 책임·폭행 다툼 | 로앤가이드',
      description:
        '산책 중 반려견 시비로 견주에게 폭행당했다면 견주 관리책임·폭행 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공원에서 산책 중 상대 반려견이 목줄 없이 달려와 본인 강아지를 물었어요. 항의했더니 견주가 \"왜 우리 개를 자극하냐\"며 멱살을 잡고 밀쳐 넘어졌습니다. 본인 강아지는 다리 부상, 본인은 무릎 타박상. 견주는 \"본인이 먼저 욕했다\"며 책임 회피합니다." 반려동물 산책 시비는 ① 동물보호법 목줄·인식표 위반 ② 견주 관리 소홀 손해배상(민법 759조 동물점유자 책임) ③ 형법 폭행·상해 ④ 본인 반려동물 치료비·위자료 ⑤ 과실 상계 5가지 트랙이 결합되는 영역. 견주의 동물 점유자 책임은 무과실 책임에 가까운 강한 책임이고, 시비 끝 폭행은 별도 형사 책임 영역. 대응은 ① 증거 ② 의료 ③ 동물병원 ④ 형사·민사 ⑤ 합의 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 반려동물 산책 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·동물·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 사진·CCTV·증인</strong></li>\n<li><strong>② 본인 의료 진단·진단서</strong></li>\n<li><strong>③ 본인 반려동물 동물병원 진단서</strong></li>\n<li><strong>④ 폭행 형사 고소 + 동물보호법 위반 신고</strong></li>\n<li><strong>⑤ 손해배상 청구 (사람 + 동물)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 견주는 민법 759조 동물점유자 책임. 목줄 미착용은 동물보호법 위반. 폭행은 별도 형사. 본인 반려동물 치료비도 청구 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보전 (즉시)</strong> — 사진·CCTV·증인 연락처.</li>\n<li><strong>2단계 — 의료·동물병원 (즉시~1주)</strong> — 진단서 양쪽.</li>\n<li><strong>3단계 — 경찰 신고 (폭행 + 동물보호법)</strong></li>\n<li><strong>4단계 — 견주에게 손해배상 청구</strong></li>\n<li><strong>5단계 — 협의 결렬 시 민사 소송</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려동물 산책 시비 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 사진·블랙박스·휴대폰 영상</strong></li>\n<li><strong>공원 CCTV 보존 요청 자료</strong></li>\n<li><strong>증인 진술서·연락처</strong></li>\n<li><strong>본인 의료 진단서·치료비 영수증</strong></li>\n<li><strong>반려동물 동물병원 진단서·치료비</strong></li>\n<li><strong>견주 인적사항·연락처·강아지 정보</strong></li>\n<li><strong>경찰 사건 접수번호·고소장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 산책 시 목줄·인식표 미착용 사실은 견주 관리 소홀의 직접 증거. 사진에 목줄 없는 모습 포착 시 강한 사정. 반려동물 치료비도 위자료와 별도 적극 손해.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>견주 동물점유자 책임</strong> — 민법 759조 무과실 가까움.</li>\n<li><strong>목줄·인식표</strong> — 동물보호법 위반.</li>\n<li><strong>시비 → 폭행 별도</strong> — 동물 사고와 별개 형사.</li>\n<li><strong>본인 시비 과실</strong> — 일부 감산 사정.</li>\n<li><strong>반려동물 치료비</strong> — 적극 손해로 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 존속 가족 분쟁 + 폭행 가중',
        summary:
          '대법원 2024노3452(창원지방법원, 2025.07.15 선고) 영역에서 법원은 시비·분쟁 과정에서의 폭행 행위에 대해 피해자 측의 일부 선행 행위가 있더라도 폭행 자체의 위법성과 책임은 별도로 평가될 여지가 있고, 가중 사정이 인정될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '시비 → 폭행은 별도 책임. 피해자 일부 선행 행위가 있어도 폭행 자체 책임은 분리.',
      },
    ],
    faq: [
      {
        question: '본인이 먼저 욕한 사실이 있어요',
        answer:
          '<strong>일부 과실 감산되지만 폭행 자체 책임은 견주 측에 별도로 인정될 여지가 있습니다.</strong>',
      },
      {
        question: '반려동물 치료비는 누가 부담하나요?',
        answer:
          '<strong>견주 관리 소홀 시 견주 측 부담입니다.</strong> 영수증·진단서로 입증.',
      },
      {
        question: '견주가 \"우리 개 잘못 없다\"고 합니다',
        answer:
          '<strong>민법 759조 동물점유자 책임은 무과실 책임에 가까워 입증 부담이 점유자 측입니다.</strong>',
      },
      {
        question: '목줄을 했어도 견주 책임인가요?',
        answer:
          '<strong>목줄 착용 시 책임은 줄어들 수 있으나 관리 소홀 시 여전히 책임 가능합니다.</strong>',
      },
      {
        question: '동물보호법 위반은 어디 신고하나요?',
        answer:
          '<strong>관할 구청·경찰서 동물보호 담당입니다.</strong> 과태료·시정명령 처리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 형사 고소', href: '/guide/assault/assault-complaint-procedure' },
      { label: '손해배상 청구', href: '/guide/assault/assault-damage-claim' },
      { label: '동물 사고 책임', href: '/guide/assault/assault-animal-keeper-liability' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 3. assault-cyber-bullying-school-online-track ───
  {
    domain: 'assault',
    slug: 'assault-cyber-bullying-school-online-track',
    keyword: '청소년 사이버 학교폭력 + 폭행',
    questionKeyword: '아이가 학교에서 사이버 따돌림 후 오프라인 폭행까지 당했어요. 학폭위와 형사 동시 가나요?',
    ctaKeyword: '청소년 사이버 학교폭력 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '청소년 사이버 학교폭력 + 폭행 — 5단계 학폭위 + 형사 다툼 | 로앤가이드',
      description:
        '아이가 사이버 따돌림 후 오프라인 폭행까지 당했다면 학폭위·형사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중2 아들이 단톡방에서 \"왕따 표적\"이 되어 욕설·합성사진이 돌았어요. 그 후 학교 화장실에서 같은 반 학생 3명이 둘러싸 폭행. 멍·찰과상 진단서. 학교는 \"아이들 일\" \"양측 잘못\"이라며 학폭위 회피하려 합니다." 청소년 사이버 학교폭력은 ① 학교폭력예방법 학폭위 절차 ② 형법 폭행·상해 (만 14세 이상 형사 책임) ③ 정보통신망법 명예훼손·모욕 ④ 학교장·가해자 부모 민사 책임 ⑤ 피해 학생 보호 조치 5가지 트랙이 결합되는 영역. 학폭위와 형사는 별도 트랙으로 동시 진행 가능. 만 14세 이상은 형사 책임, 만 10~14세는 촉법소년으로 보호처분. 대응은 ① 증거 ② 학폭 신고 ③ 의료 ④ 형사 ⑤ 민사·정신과 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 청소년 사이버 학교폭력 + 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·학폭위·의료·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단톡·SNS·합성사진 증거 보전</strong></li>\n<li><strong>② 학폭위 신고 (학교폭력예방법)</strong></li>\n<li><strong>③ 의료·정신과 진단</strong></li>\n<li><strong>④ 폭행 형사 고소 + 정보통신망법 신고</strong></li>\n<li><strong>⑤ 가해자 부모 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학폭위와 형사는 별도 트랙 동시 진행. 만 14세 이상 형사 책임. 정신적 피해도 별도 청구. 학교 \"양측 잘못\" 회피는 학폭위 강제 절차로 차단.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 캡처 (즉시)</strong> — 단톡·SNS·합성사진.</li>\n<li><strong>2단계 — 학교에 학폭 신고서 제출 (즉시)</strong></li>\n<li><strong>3단계 — 의료·정신과 진단서 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 형사 고소 (만 14세↑)</strong></li>\n<li><strong>5단계 — 가해자 부모 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">청소년 사이버 학교폭력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>단톡·SNS·합성사진 캡처·URL</strong></li>\n<li><strong>가해자 닉네임·실명 매칭 자료</strong></li>\n<li><strong>의료 진단서·정신과 소견서</strong></li>\n<li><strong>피해 학생 일기·통화 녹음·문자</strong></li>\n<li><strong>학교 학폭 신고서·접수증</strong></li>\n<li><strong>학교 CCTV 보존 요청 자료</strong></li>\n<li><strong>가족관계증명서 (학부모 청구권)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단톡 캡처는 URL·날짜·시간 함께 보존. 가해자 닉네임만 있으면 학교·통신사 정보 협조로 실명 매칭. 정신과 진단은 위자료 가산 핵심 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>학폭위 + 형사 동시</strong> — 별도 트랙 병행.</li>\n<li><strong>만 14세 형사 책임</strong> — 그 미만은 촉법소년 보호처분.</li>\n<li><strong>학교 책임</strong> — 보호의무 위반 시 민사.</li>\n<li><strong>가해자 부모 책임</strong> — 미성년자 감독자 책임.</li>\n<li><strong>정신적 피해</strong> — 위자료 가산.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>학교폭력 신고 117</strong></li>\n<li><strong>경찰청 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 학교폭력 처분 + 형사 결합',
        summary:
          '대법원 2025무565 영역에서 법원은 학교폭력 사건에 대한 처분에 절차상 하자가 있는 경우, 학교생활기록부에 기재된 학교폭력 사실의 효력에 관한 판단이 다투어질 여지가 있고, 학폭위 절차와 별도로 형사 책임 또한 병행될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '학폭위와 형사는 별도 트랙. 절차 하자는 처분 다툼 사유. 정신적 피해는 위자료 가산.',
      },
    ],
    faq: [
      {
        question: '학교가 학폭위를 안 열려고 해요',
        answer:
          '<strong>학교폭력예방법상 학폭위는 의무이고 회피 시 교육청·민원·소송으로 강제 가능합니다.</strong>',
      },
      {
        question: '가해자가 만 13세인데 처벌 가능한가요?',
        answer:
          '<strong>만 10~14세는 촉법소년으로 형사 처벌 대신 보호처분 대상입니다.</strong> 학폭위·민사는 가능.',
      },
      {
        question: '단톡 캡처만으로 신원 확인 가능한가요?',
        answer:
          '<strong>학교·통신사 정보 협조로 실명 매칭 가능합니다.</strong>',
      },
      {
        question: '정신과 진단서가 꼭 필요한가요?',
        answer:
          '<strong>정신적 피해 청구 시 위자료 산정의 핵심 사정으로 권장됩니다.</strong>',
      },
      {
        question: '가해자 부모에게도 청구 가능한가요?',
        answer:
          '<strong>미성년자 감독자 책임으로 부모 측에도 청구 가능합니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '학교폭력 학폭위', href: '/guide/assault/assault-school-violence-committee' },
      { label: '청소년 형사 책임', href: '/guide/assault/assault-juvenile-criminal-liability' },
      { label: '사이버 명예훼손', href: '/guide/assault/assault-cyber-defamation-combined' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 4. child-support-cohabitation-paternity-recognition-claim-track ───
  {
    domain: 'child-support',
    slug: 'child-support-cohabitation-paternity-recognition-claim-track',
    keyword: '사실혼 자녀 인지청구 + 양육비',
    questionKeyword: '사실혼 관계에서 낳은 아이의 아빠가 친자 인정을 거부해요. 양육비도 받을 수 있나요?',
    ctaKeyword: '사실혼 자녀 인지청구 양육비 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사실혼 자녀 인지청구 + 양육비 — 5단계 친자 + 분담 다툼 | 로앤가이드',
      description:
        '사실혼·혼외 자녀의 친부가 인정을 거부한다면 인지청구·양육비 5가지 결합 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년간 동거하다 헤어진 남자친구 사이에서 낳은 아이가 두 살이에요. 출생신고는 본인 단독으로 했지만 친부는 \"내 아이 아닐 수도 있다\"며 친자 인정·양육비 모두 거부합니다. 본인 혼자 키우는 게 너무 버겁고, 아이도 친부 호적·재산 권리 보호받고 싶어요." 사실혼·혼외자 자녀는 ① 인지청구로 친자 관계 확정 (민법 863조) ② 유전자 검사로 친자 입증 ③ 인지 후 양육비 청구 (소급 가능 영역) ④ 인지 후 상속권 발생 ⑤ 부 거부 시 강제인지 5가지 트랙이 결합되는 영역. 인지청구는 자녀 본인·법정대리인이 청구 가능. 인지 확정 시 친자 관계 소급하여 양육비도 과거분까지 청구 가능 영역. 대응은 ① 증거 ② 인지청구 ③ 유전자 ④ 양육비 ⑤ 이행 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 자녀 인지청구 + 양육비 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·인지·유전자·양육비·이행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼·동거 증거 (사진·메시지·증인)</strong></li>\n<li><strong>② 가정법원 인지청구 소제기</strong></li>\n<li><strong>③ 유전자 검사 (직권 가능)</strong></li>\n<li><strong>④ 인지 후 양육비 심판·조정</strong></li>\n<li><strong>⑤ 이행명령·양육비이행관리원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인지청구는 친자 관계 확정 절차. 인지 확정 후 양육비는 과거분도 청구 가능 영역. 상속권·부양 의무도 함께 발생.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·청구·이행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼·관계 증거 (즉시)</strong> — 사진·메시지·동거 자료.</li>\n<li><strong>2단계 — 가정법원 인지청구 (사실혼 종료 후 가능)</strong></li>\n<li><strong>3단계 — 유전자 검사·심리 (3~6개월)</strong></li>\n<li><strong>4단계 — 인지 확정 후 양육비 청구</strong></li>\n<li><strong>5단계 — 이행명령·이행관리원 1644-6621</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 자녀 인지·양육비 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·인지·양육비 갈래입니다.</strong></p>\n<ul>\n<li><strong>아이 출생증명서·가족관계증명서</strong></li>\n<li><strong>사실혼 동거 사진·메시지·통신 기록</strong></li>\n<li><strong>친부 인적사항·주소·연락처</strong></li>\n<li><strong>주변 증인 진술서 (가족·친구)</strong></li>\n<li><strong>유전자 검사 동의·결과 (있을 시)</strong></li>\n<li><strong>본인·친부 소득 자료 (양육비 산정용)</strong></li>\n<li><strong>본인 신분증·인감</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친부가 유전자 검사 거부 시 법원이 직권 명령 가능. 거부 자체가 친자 사정으로 평가될 여지. 양육비는 인지 확정 후 과거분 소급 청구도 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인지청구 시효</strong> — 친부 사망 후 2년 내 제한.</li>\n<li><strong>유전자 검사</strong> — 친부 거부 시 직권 명령.</li>\n<li><strong>양육비 소급</strong> — 인지 후 과거분 청구.</li>\n<li><strong>상속권 발생</strong> — 인지 시 친자 효력.</li>\n<li><strong>이행 강제</strong> — 이행명령·과태료·감치.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼외자 인지청구 + 양육비',
        summary:
          '대법원 2023므11758(대법원, 2025.09.11 선고) 영역에서 법원은 혼인자 외 친생자가 친부에게 양육료를 청구하는 사안에서, 인지에 의하여 친자관계가 확정된 이상 친부는 자녀에 대한 부양 의무를 부담하고, 양육에 든 비용에 대하여도 분담 의무가 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '혼외자도 인지 후 친부 양육비 분담 의무. 과거분 양육료 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '친부가 유전자 검사 거부하면요?',
        answer:
          '<strong>법원이 직권 검사 명령 가능. 거부 자체가 친자 의심 사정으로 평가됩니다.</strong>',
      },
      {
        question: '양육비를 과거분도 받을 수 있나요?',
        answer:
          '<strong>인지 확정 후 과거 양육비도 소급 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '인지 시 친부 호적·성도 바뀌나요?',
        answer:
          '<strong>호적상 친자 등재되고 성·본 변경은 별도 절차로 가능합니다.</strong>',
      },
      {
        question: '친부가 외국인이면 어떻게 되나요?',
        answer:
          '<strong>국제사법 적용. 한국 법원 관할로 진행 가능합니다.</strong> 송달은 시간 더 걸림.',
      },
      {
        question: '인지 후 상속도 가능한가요?',
        answer:
          '<strong>인지 확정 시 친자로서 상속권 발생합니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '인지청구 절차', href: '/guide/child-support/child-support-paternity-recognition' },
      { label: '혼외자 양육비', href: '/guide/child-support/child-support-out-of-wedlock' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
      { label: '이행명령', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '양육비 계산', href: '/guide/child-support/child-support-calculation-table' },
    ],
  },

  // ─── 5. child-support-overseas-flee-non-payer-collection-track ───
  {
    domain: 'child-support',
    slug: 'child-support-overseas-flee-non-payer-collection-track',
    keyword: '양육의무자 해외 도주 추심',
    questionKeyword: '전 배우자가 양육비를 안 내고 해외로 도주했어요. 국제 추심 가능한가요?',
    ctaKeyword: '해외 도주 양육비 추심 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 도주 양육비 추심 — 5단계 국제송달·집행 다툼 | 로앤가이드',
      description:
        '전 배우자가 양육비 미지급 후 해외로 도주했다면 국제송달·추심 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 양육비 월 80만원으로 결정됐는데 전 배우자가 1년만 내고 끊겼어요. 알아보니 미국으로 이주해 직장 다니고 있어요. \"한국 결정이라 외국에서 안 통한다\"고 하는데 정말 못 받나 절망적입니다." 해외 도주 양육의무자는 ① 헤이그 아동부양료 회수 협약(2017년 발효) ② 양육비이행관리원 국제 협조 ③ 외국 법원 집행 결정 ④ 해당국 자산 추심 ⑤ 한국 내 잔여 자산·연금 추심 5가지 트랙이 결합되는 영역. 한국은 헤이그 협약 미가입국이지만 양국 양해·법무부 협조로 진행 가능. 미국·호주 등은 양자 협정 있고, 일본·중국은 영사 협조. 대응은 ① 거주 확인 ② 협약 적용 ③ 한국 결정 외국 승인 ④ 추심 ⑤ 한국 내 자산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 도주 양육비 추심 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·협약·승인·추심·국내자산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전 배우자 해외 거주·직장 확인</strong></li>\n<li><strong>② 헤이그 협약/양자 협정 적용 검토</strong></li>\n<li><strong>③ 외국 법원 한국 결정 승인·집행</strong></li>\n<li><strong>④ 해당국 자산·급여 추심</strong></li>\n<li><strong>⑤ 한국 내 잔여 자산·연금 추심</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외 도주도 추심 가능 영역. 양육비이행관리원 + 법무부 국제 협조 트랙. 양자 협정국(미국·호주)은 비교적 수월, 비협정국은 영사 협조.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·승인·추심 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해외 거주 확인 (즉시)</strong> — 출입국·SNS·증인.</li>\n<li><strong>2단계 — 양육비이행관리원 신청 (즉시)</strong> — 1644-6621.</li>\n<li><strong>3단계 — 외국 법원 한국 결정 승인 청구 (6개월~1년)</strong></li>\n<li><strong>4단계 — 해당국 추심 절차</strong></li>\n<li><strong>5단계 — 한국 내 잔여 자산·연금 추심 병행</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 도주 양육비 국제 추심 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·증거·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 결정서·확정증명</strong></li>\n<li><strong>양육비 미지급 내역·통장 사본</strong></li>\n<li><strong>전 배우자 출입국 사실 증명서</strong></li>\n<li><strong>전 배우자 해외 주소·직장 자료</strong></li>\n<li><strong>SNS·이메일·연락 기록</strong></li>\n<li><strong>국내 잔여 자산·연금 자료</strong></li>\n<li><strong>본인 신분증·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비이행관리원이 외교부·법무부·해당국 사회복지청과 협조하여 추심 진행. 본인 단독보다 이행관리원 경유가 효율적이고 비용 절감.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>한국 결정 외국 효력</strong> — 승인·집행 절차 필요.</li>\n<li><strong>국가별 협약</strong> — 미국·호주 협정, 일본·중국 영사 협조.</li>\n<li><strong>해당국 자산</strong> — 급여 압류·통장 추심.</li>\n<li><strong>한국 내 자산</strong> — 부동산·연금·예금.</li>\n<li><strong>시간·비용</strong> — 6개월~수년 소요 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국 거주 양육의무자',
        summary:
          '대법원 2023스643(대법원, 2023.10.31 선고) 영역에서 법원은 외국에 거주하는 양육의무자가 한국에 거주하는 양육권자에 대하여 양육비를 청구한 사안에서, 외국 거주 사정만으로 양육비 의무가 면제되지 않고 한국 법원의 결정이 국제적으로 집행될 수 있는 절차가 마련되어 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '외국 거주 양육의무자도 양육비 면제되지 않음. 국제 협조 절차로 추심 가능 영역.',
      },
    ],
    faq: [
      {
        question: '미국으로 도주했는데 가능한가요?',
        answer:
          '<strong>미국은 한국과 양자 협정 있어 비교적 수월합니다.</strong> 이행관리원 협조 권장.',
      },
      {
        question: '비협정국이면 불가능한가요?',
        answer:
          '<strong>영사 협조·외교 채널로 진행 가능합니다.</strong> 시간 더 소요.',
      },
      {
        question: '해외 자산을 어떻게 파악하나요?',
        answer:
          '<strong>이행관리원·외교부 협조로 직장·은행 정보 추적 가능 영역입니다.</strong>',
      },
      {
        question: '한국 내 자산도 추심 가능한가요?',
        answer:
          '<strong>국내 부동산·예금·연금 등 잔여 자산 우선 추심 권장합니다.</strong>',
      },
      {
        question: '비용은 얼마나 드나요?',
        answer:
          '<strong>이행관리원 경유 시 본인 부담 최소화됩니다.</strong> 변호인 별도 비용 발생.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
      { label: '국제 양육비 추심', href: '/guide/child-support/child-support-international-collection' },
      { label: '출국정지 사전조치', href: '/guide/child-support/child-support-license-points-passport-restriction-track' },
      { label: '이행명령', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '양육비 계산', href: '/guide/child-support/child-support-calculation-table' },
    ],
  },

  // ─── 6. dui-electric-scooter-personal-mobility-impaired-track ───
  {
    domain: 'dui',
    slug: 'dui-electric-scooter-personal-mobility-impaired-track',
    keyword: '전동킥보드 음주운전',
    questionKeyword: '술 마신 후 전동킥보드 타다 단속됐어요. 자동차 음주와 같나요?',
    ctaKeyword: '전동킥보드 음주운전 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '전동킥보드 음주운전 단속 — 5단계 PM 행정·형사 다툼 | 로앤가이드',
      description:
        '전동킥보드(PM) 음주운전으로 단속됐다면, 자동차와 다른 5가지 처분 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회식 후 가까운 거리라 공유 전동킥보드를 탔다가 단속에 걸렸어요. 측정 결과 0.05%. 경찰은 \"자동차랑 똑같이 처벌된다\"고 합니다. 면허 정지·형사 처벌까지 모두 적용된다는데 정말 그런지, 다툴 여지가 있는지 막막합니다." 전동킥보드 등 개인형 이동장치(PM) 음주운전 혐의를 받고 있다면 ① 도로교통법상 PM은 자전거 등에 준해 별도 규정 ② 음주운전 금지·범칙금·면허 정지 ③ 자동차 음주와 처벌 수준 차이 가능 ④ 행정심판 90일 ⑤ 측정·재측정·항변 5가지 트랙에 해당할 소지가 있는 영역. 2021년 도로교통법 개정 이후 PM은 \"개인형 이동장치\"로 정의되어 별도 규율되지만 음주운전 금지·면허 영향은 적용. 대응은 ① 단속 자료 ② 측정 ③ 행정심판 ④ 변호인 ⑤ 형사 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전동킥보드 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정의·측정·행정·형사·항변 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① PM 정의 (도로교통법상 별도 규정)</strong></li>\n<li><strong>② 음주측정 호흡·혈액·재측정</strong></li>\n<li><strong>③ 면허 정지·취소 + 범칙금</strong></li>\n<li><strong>④ 행정심판 (90일 내)</strong></li>\n<li><strong>⑤ 형사 방어·변호인 상담</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: PM은 자동차와 다른 별도 정의 영역이지만 음주운전 금지·면허 영향 적용. 측정 정확성 + 행정심판 + 형사 방어 3트랙 병행 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·심판·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속 자료 확보 (즉시)</strong> — 측정지·CCTV·단속 영상.</li>\n<li><strong>2단계 — 측정 정확성 검토 (즉시)</strong> — 호흡/혈액·재측정 여부.</li>\n<li><strong>3단계 — 행정심판 청구 (90일 내)</strong> — 면허 처분.</li>\n<li><strong>4단계 — 변호인 상담·형사 방어 준비</strong></li>\n<li><strong>5단계 — 재판 (형사 다툼)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동킥보드 음주 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단속·측정·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주측정 결과지·측정기 종류</strong></li>\n<li><strong>단속 현장 영상·CCTV·블랙박스</strong></li>\n<li><strong>혈액 검사 결과 (있을 시)</strong></li>\n<li><strong>PM 대여·운행 기록 (공유 앱)</strong></li>\n<li><strong>면허 정지·취소 통지서</strong></li>\n<li><strong>본인 신분증·운전 기록부</strong></li>\n<li><strong>탄원서·반성문 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공유 PM 앱 기록은 운행 거리·시간 명확화에 도움. 단거리·짧은 시간 사정은 형사 양형·행정 감경 검토 영역. 본인 부주의가 있더라도 측정 정확성·재측정 여부는 다툼 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>PM vs 자동차</strong> — 정의 다르나 음주 금지 동일.</li>\n<li><strong>측정 정확성</strong> — 호흡/혈액·재측정.</li>\n<li><strong>0.03~0.08% 정지 / 0.08% 취소</strong> — 자동차 기준 적용.</li>\n<li><strong>행정심판 90일</strong> — 통지 후 90일 내.</li>\n<li><strong>양형 사정</strong> — 단거리·초범·반성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>도로교통공단 행정심판 1577-1120</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드와 도로교통법',
        summary:
          '대법원 2022도13430(대법원, 2023.06.29 선고) 영역에서 법원은 전동킥보드 등 개인형 이동장치는 도로교통법상 별도로 규율되며 자동차와 동일하지 않으나, 음주 상태에서의 운전 금지·면허에 관한 처분에는 일정한 법리가 적용될 여지가 있고, 사안에 따라 형사 책임 또한 검토될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: 'PM은 자동차와 별도 규정이지만 음주 금지·면허 영향 적용. 측정 정확성·항변은 사안별 검토.',
      },
    ],
    faq: [
      {
        question: '자동차보다 처벌이 가볍나요?',
        answer:
          '<strong>일반적으로 PM이 자동차보다 처벌 수위가 낮을 여지가 있으나 면허 정지·취소는 동일 기준 적용됩니다.</strong>',
      },
      {
        question: '면허 없는 사람이 PM 타다 단속되면요?',
        answer:
          '<strong>무면허·음주 결합으로 가중될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '공유 킥보드도 같은가요?',
        answer:
          '<strong>운행 주체는 본인이라 동일하게 적용됩니다.</strong> 공유 앱 운행 기록이 증거.',
      },
      {
        question: '단거리·짧은 시간이면 감경되나요?',
        answer:
          '<strong>양형·행정 감경 사정으로 검토될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '행정심판과 형사는 별도인가요?',
        answer:
          '<strong>네, 별도 트랙입니다.</strong> 행정심판은 면허, 형사는 처벌 영역.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '면허 정지·취소', href: '/guide/dui/dui-license-suspension-revocation' },
      { label: '음주 측정 정확성', href: '/guide/dui/dui-measurement-accuracy' },
      { label: 'PM 도로교통법', href: '/guide/dui/dui-personal-mobility-traffic-law' },
      { label: '음주운전 형사 방어', href: '/guide/dui/dui-criminal-defense' },
    ],
  },
];
