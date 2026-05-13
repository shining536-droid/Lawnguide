import { SpokePage } from '../spoke-pages';

// batch64 assault(3) + child-support(2) + dui(1) — 6개 (2026-05-14)
//
// 고유 존재 이유:
// 1. assault-bar-club-bouncer-injury-victim — 술집·클럽에서 보안요원·이용자 폭행 (사업주 책임).
// 2. assault-elderly-care-facility-abuse — 요양시설 폭행 피해 (가중 + 시설 책임).
// 3. assault-disabled-victim-aggravated — 장애인 폭행 가중처벌 (장애인복지법).
// 4. child-support-college-tuition-special-claim — 대학 등록금 특별 청구.
// 5. child-support-disabled-child-extension — 장애 자녀 성년 후 양육비 연장.
// 6. dui-medication-cold-medicine-affirmative-defense — 감기약 복용 음주측정 항변.

export const spokesBatch64AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-bar-club-bouncer-injury-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-bar-club-bouncer-injury-victim-track',
    keyword: '술집·클럽 폭행 피해',
    questionKeyword: '클럽에서 일행과 시비 끝에 보안요원에게 폭행당했어요. 보상 가능한가요?',
    ctaKeyword: '클럽 폭행 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '술집·클럽 폭행 피해 — 5단계 가해자 + 사업주 책임 다툼 | 로앤가이드',
      description:
        '술집·클럽에서 보안요원이나 다른 손님에게 폭행당했다면 가해자·사업주 5가지 책임 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"클럽에서 다른 손님과 시비가 붙어 보안요원에게 강제로 끌려 나가다 얼굴 부상. 안경 파손, 갈비뼈 골절 진단. 클럽 측은 \"본인이 먼저 시비 걸었다\"고 책임 회피. CCTV는 \"고장\"이라며 보여주지 않습니다.\" 술집·클럽 사업주는 ① 안전 시설·보안요원 관리 의무 ② CCTV 보존·증거 제출 의무 ③ 보안요원 폭행은 사용자 책임 ④ 형법 폭행·상해 + 민사 손해배상 ⑤ 식품위생법 영업 정지 5가지 트랙이 결합되는 영역. CCTV \"고장\" 주장은 증거 인멸 의심 사정. 대응은 ① 증거 보존 ② 의료 ③ 형사 고소 ④ 민사 ⑤ 행정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 술집·클럽 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·형사·민사·행정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 증거·CCTV 보존</strong> — 사업주 보존 의무.</li>\n<li><strong>② 의료 진단·진단서</strong></li>\n<li><strong>③ 폭행·상해 형사 고소 (가해자 + 보안요원)</strong></li>\n<li><strong>④ 사업주 사용자 책임 민사</strong></li>\n<li><strong>⑤ 식품위생·다중이용업소 행정 신고</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보안요원 폭행은 사업주 사용자 책임 직접 청구 가능 영역. CCTV \"고장\"은 증거 인멸 의심 사정이라 형사 고발도 함께 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보전 (즉시)</strong> — 사진·증인·CCTV 보존 요청.</li>\n<li><strong>2단계 — 의료기록 (즉시~1주)</strong> — 응급실·진단서.</li>\n<li><strong>3단계 — 경찰 신고·형사 고소</strong> — 가해자 + 보안요원.</li>\n<li><strong>4단계 — 사업주 민사 손해배상</strong> — 사용자 책임.</li>\n<li><strong>5단계 — 행정 신고</strong> — 식약처·구청 영업 정지 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집·클럽 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 사진·블랙박스·휴대폰 영상</strong></li>\n<li><strong>CCTV 보존 요청 내용증명</strong></li>\n<li><strong>증인 진술서·연락처</strong></li>\n<li><strong>응급실·진단서·치료비 영수증</strong></li>\n<li><strong>파손 물품 (안경·옷·시계 등) 사진·영수증</strong></li>\n<li><strong>업소 정보·사업자등록증</strong></li>\n<li><strong>경찰 사건 접수번호·고소장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV는 사업주 보존 의무. 즉시 내용증명·경찰 통해 보존 요청. \"고장\" 주장 시 증거 인멸 의심 사정으로 형사 고발 추가 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사업주 사용자 책임</strong> — 보안요원 폭행은 사업주 책임.</li>\n<li><strong>CCTV 보존 의무</strong> — 다중이용업소 30일 의무.</li>\n<li><strong>증거 인멸</strong> — \"고장\" 주장 시 형사 고발.</li>\n<li><strong>피해자 과실</strong> — 본인 시비 행위 시 일부 감산.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업주 사용자 책임',
        summary:
          '대법원 2010도1626(2010.04.29 선고) 영역에서 법원은 사업장 내 종업원의 가해 행위에 대해 사업주는 사용자 책임을 부담할 수 있고, 사업장이 다중이용업소인 경우 CCTV 보존·증거 제출 의무 위반이 인정된다고 평가될 수 있는 경우 사업주의 과실 또는 증거 인멸 의심 사정으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '보안요원 폭행은 사업주 직접 청구 가능. CCTV "고장"은 증거 인멸 의심.',
      },
    ],
    faq: [
      {
        question: 'CCTV가 \"고장\"이었다고 합니다',
        answer:
          '<strong>증거 인멸 의심 사정입니다.</strong> 형사 고발·민사 입증 책임 사업주 측으로 옮길 수 있는 영역.',
      },
      {
        question: '본인이 먼저 시비 건 부분은 어떻게 평가되나요?',
        answer:
          '<strong>일부 과실 감산되지만 폭행·상해 책임은 별도로 인정될 여지가 있습니다.</strong>',
      },
      {
        question: '보안요원 신원을 모릅니다',
        answer:
          '<strong>사업주가 신원 제공 의무가 있고 경찰 수사로 추적 가능합니다.</strong>',
      },
      {
        question: '안경·옷 파손도 청구 가능한가요?',
        answer:
          '<strong>적극적 손해로 영수증·시가 기준 청구 가능합니다.</strong>',
      },
      {
        question: '범죄피해자 구조금 대상인가요?',
        answer:
          '<strong>중상해·사망 시 신청 가능합니다.</strong> 1577-1295 안내.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 형사 고소', href: '/guide/assault/assault-complaint-procedure' },
      { label: '사업주 책임', href: '/guide/assault/assault-employer-liability' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
      { label: '손해배상 청구', href: '/guide/assault/assault-damage-claim' },
    ],
  },

  // ─── 2. assault-elderly-care-facility-abuse-track ───
  {
    domain: 'assault',
    slug: 'assault-elderly-care-facility-abuse-track',
    keyword: '요양시설 폭행 피해',
    questionKeyword: '요양시설 직원이 부모님을 폭행한 흔적을 발견했어요. 어떻게 대응하나요?',
    ctaKeyword: '요양시설 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요양시설 폭행 피해 — 5단계 노인학대 + 시설 책임 다툼 | 로앤가이드',
      description:
        '요양시설·요양원에서 부모님이 폭행·학대 당한 흔적 발견했다면 노인학대 신고·시설 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"요양시설에 모시던 어머니께서 새 멍·골절 흔적 발견. \"어떻게 다치셨냐\" 묻자 시설은 \"넘어졌다\"고만 합니다. CCTV 확인 요청해도 \"개인정보 보호\"라며 거부. 어머니는 인지력 약해 정확한 진술이 어려워요.\" 노인학대는 ① 노인복지법상 노인보호전문기관 신고 의무 ② 형법 폭행·상해 + 노인복지법 가중처벌 ③ 시설 영업정지·자격 취소 ④ 시설 사용자 책임 + 손해배상 ⑤ 가해자 직접 형사 5가지 트랙이 결합되는 영역. 시설 CCTV 거부는 노인학대 은폐 의심 사정. 대응은 ① 즉시 보호 ② 증거 ③ 신고 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 요양시설 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·신고·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 다른 시설 이전·병원 입원</strong></li>\n<li><strong>② 의료기록·사진·증인 증거</strong></li>\n<li><strong>③ 노인보호전문기관 1577-1389 신고</strong></li>\n<li><strong>④ 형사 고소 + 시설 사용자 책임</strong></li>\n<li><strong>⑤ 시설 행정 처분 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노인학대는 신고 의무 + 가중처벌 영역. 시설 CCTV 거부 자체가 의심 사정. 즉시 보호 이전이 최우선.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 보호 이전 (즉시)</strong> — 다른 시설·병원·자택.</li>\n<li><strong>2단계 — 의료 진단·사진 (즉시~1주)</strong> — 멍·골절 부위.</li>\n<li><strong>3단계 — 노인보호전문기관 1577-1389 신고</strong></li>\n<li><strong>4단계 — 경찰 형사 고소</strong> — 가해자 + 시설 책임자.</li>\n<li><strong>5단계 — 민사 손해배상·시설 행정 처분</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양시설 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>의료 진단서·부상 사진</strong></li>\n<li><strong>시설 입소 계약서·생활 기록</strong></li>\n<li><strong>다른 보호자·동료 입소자 진술</strong></li>\n<li><strong>시설 측 답변·메일·통화 녹음</strong></li>\n<li><strong>CCTV 보존 요청 내용증명</strong></li>\n<li><strong>노인보호전문기관 신고 접수증</strong></li>\n<li><strong>본인 가족관계증명서 (보호자 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부상 부위 사진은 시간 흐름에 따라 색 변화도 함께 기록. 동일 시설 다른 입소자의 유사 부상 사례도 강한 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>노인학대 가중처벌</strong> — 노인복지법 + 형법 결합.</li>\n<li><strong>시설 신고 의무</strong> — 미신고 시 처벌.</li>\n<li><strong>CCTV 의무</strong> — 노인복지법상 설치 의무.</li>\n<li><strong>시설 사용자 책임</strong> — 직원 폭행 시 시설도 책임.</li>\n<li><strong>인지력 약한 피해자</strong> — 객관적 증거 비중 증가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>노인보호전문기관 1577-1389</strong></li>\n<li><strong>경찰청 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 노인학대와 시설 책임',
        summary:
          '대법원 2014도3564(2014.11.13 선고) 영역에서 법원은 요양시설 종업원의 노인학대 행위에 대해 시설은 사용자로서 손해배상 책임을 부담할 수 있고, 노인복지법상 학대 행위는 일반 폭행보다 가중된 형사 처벌 대상이 될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '요양시설 직원 폭행은 시설 사용자 책임 + 노인복지법 가중. 즉시 보호 + 신고가 최우선.',
      },
    ],
    faq: [
      {
        question: '시설이 CCTV 제공 거부하면요?',
        answer:
          '<strong>경찰 영장·노인보호전문기관 협조로 강제 확보 가능합니다.</strong>',
      },
      {
        question: '어머니가 "넘어졌다"고만 말씀하세요',
        answer:
          '<strong>학대 피해자가 두려움으로 진술 못하는 경우 흔합니다.</strong> 객관적 부상·CCTV 중심 입증.',
      },
      {
        question: '같은 시설에 다른 피해자 있는지 확인 가능한가요?',
        answer:
          '<strong>노인보호전문기관 신고 시 시설 전수 조사 가능합니다.</strong>',
      },
      {
        question: '시설 영업정지·자격취소 청구는요?',
        answer:
          '<strong>지자체·복지부에 행정 처분 청구 가능합니다.</strong>',
      },
      {
        question: '치료비·위자료는 얼마 정도인가요?',
        answer:
          '<strong>사례에 따라 다르지만 가중처벌·집단 피해 시 위자료 가산이 검토됩니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '노인학대 신고', href: '/guide/assault/assault-elderly-abuse-report' },
      { label: '시설 책임', href: '/guide/assault/assault-facility-liability' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
      { label: '손해배상 청구', href: '/guide/assault/assault-damage-claim' },
    ],
  },

  // ─── 3. assault-disabled-victim-aggravated-track ───
  {
    domain: 'assault',
    slug: 'assault-disabled-victim-aggravated-track',
    keyword: '장애인 폭행 가중처벌',
    questionKeyword: '장애인인 동생이 직장 동료에게 폭행당했어요. 가중처벌이 되나요?',
    ctaKeyword: '장애인 폭행 가중처벌 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '장애인 폭행 가중처벌 — 5단계 장애인복지법 + 형법 다툼 | 로앤가이드',
      description:
        '장애인 폭행 피해 발생 시 장애인복지법·형법 가중처벌 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지적 장애 3급인 동생이 직장 동료에게 \"느려서 짜증난다\"며 폭행당했어요. 동료는 \"장난이었다\" \"동생이 먼저 시비 걸었다\"고 변명. 동생은 정확한 진술이 어렵고 멍 자국·진단서만 있어요.\" 장애인복지법은 ① 장애인 학대·폭행 가중처벌(법 86조) ② 신고 의무자 미신고 시 처벌 ③ 장애인권익옹호기관 1644-8295 신고 ④ 형법 폭행·상해 결합 ⑤ 사용자 책임(직장) 5가지 트랙이 결합되는 영역. \"장난\" 변명은 통상 통하지 않고, 진술 어려운 피해자의 경우 객관적 증거(부상·CCTV) + 가족 진술 비중 증가. 대응은 ① 보호 ② 의료 ③ 신고 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 장애인 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·의료·신고·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 보호 (가족·시설)</strong></li>\n<li><strong>② 의료 진단·진단서</strong></li>\n<li><strong>③ 장애인권익옹호기관 1644-8295 신고</strong></li>\n<li><strong>④ 장애인복지법 + 형법 폭행 고소</strong></li>\n<li><strong>⑤ 직장 사용자 책임 민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 장애인 폭행은 장애인복지법 가중처벌 영역. 진술 어려운 피해자는 객관적 증거 + 가족 진술 + 신고 기관 협조가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 보호 (즉시)</strong> — 직장 분리·가족 보호.</li>\n<li><strong>2단계 — 의료 진단 (1주 내)</strong> — 부상 사진·진단서.</li>\n<li><strong>3단계 — 장애인권익옹호기관 신고</strong> — 1644-8295.</li>\n<li><strong>4단계 — 형사 고소 (장애인복지법 + 형법)</strong></li>\n<li><strong>5단계 — 직장 사용자 책임 민사</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">장애인 폭행 가중처벌 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>장애인등록증·복지카드</strong></li>\n<li><strong>의료 진단서·부상 사진</strong></li>\n<li><strong>가족·동료 증인 진술서</strong></li>\n<li><strong>직장 CCTV·근무 환경 자료</strong></li>\n<li><strong>가해자 발언·문자·녹취</strong></li>\n<li><strong>장애인권익옹호기관 신고 접수증</strong></li>\n<li><strong>본인 가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가해자의 \"느려서\" \"짜증나서\" 발언은 차별·혐오 동기 입증의 직접 증거. 동료·메신저에서 유사 발언 캡처도 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>장애인복지법 가중</strong> — 형법 폭행보다 무거운 처벌.</li>\n<li><strong>신고 의무자</strong> — 직장 상사·동료도 인지 시 신고 의무.</li>\n<li><strong>차별·혐오 동기</strong> — 가중처벌 추가 사정.</li>\n<li><strong>진술 신빙성</strong> — 객관적 증거 + 가족·전문가 진술.</li>\n<li><strong>직장 사용자 책임</strong> — 안전 환경 의무 위반.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>장애인권익옹호기관 1644-8295</strong></li>\n<li><strong>국가인권위원회 1331</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 장애인 폭행 가중처벌',
        summary:
          '대법원 2022도10564(2022.12.15 선고) 영역에서 법원은 장애인을 대상으로 한 폭행 행위는 장애인복지법상 학대 행위에 해당할 여지가 있고, 일반 형법 폭행죄에 비해 가중된 처벌 대상으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '장애인 폭행은 형법 + 장애인복지법 가중처벌. 차별·혐오 동기 입증 시 가중.',
      },
    ],
    faq: [
      {
        question: '"장난"이었다고 변명하면요?',
        answer:
          '<strong>부상 정도·반복 여부·발언 내용으로 통상 통하지 않는 변명입니다.</strong>',
      },
      {
        question: '동생이 진술 못해도 가능한가요?',
        answer:
          '<strong>객관적 부상·CCTV·가족 진술·전문가 의견으로 입증 가능합니다.</strong>',
      },
      {
        question: '직장 동료의 \"먼저 시비 걸었다\" 주장은요?',
        answer:
          '<strong>장애인의 시비 행위가 있어도 폭행 자체 책임은 별도로 평가됩니다.</strong>',
      },
      {
        question: '회사가 \"개인 간 갈등\"이라며 방관하면요?',
        answer:
          '<strong>안전 환경 의무 위반으로 회사 사용자 책임 청구 가능합니다.</strong>',
      },
      {
        question: '인권위 진정도 가능한가요?',
        answer:
          '<strong>국가인권위 1331에 차별 진정 가능합니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '장애인 학대 신고', href: '/guide/assault/assault-disabled-abuse-report' },
      { label: '직장 폭행', href: '/guide/assault/assault-workplace-drinking-coworker-track' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
      { label: '손해배상 청구', href: '/guide/assault/assault-damage-claim' },
    ],
  },

  // ─── 4. child-support-college-tuition-special-claim-track ───
  {
    domain: 'child-support',
    slug: 'child-support-college-tuition-special-claim-track',
    keyword: '대학 등록금 특별 청구',
    questionKeyword: '자녀 대학 등록금이 양육비에 포함되지 않았어요. 별도 청구 가능한가요?',
    ctaKeyword: '대학 등록금 양육비 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대학 등록금 양육비 특별 청구 — 5단계 추가 분담 다툼 | 로앤가이드',
      description:
        '이혼 양육비에 대학 등록금이 포함되지 않았다면 추가 분담 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 시 자녀가 중학생이라 양육비는 월 70만원으로 정했어요. 이제 자녀가 대학 갈 나이인데 등록금 한 학기 400만원이 별도로 필요합니다. 전 배우자는 \"양육비 다 줬는데 등록금까지\"라며 거부합니다.\" 양육비는 일반적으로 미성년 자녀의 일상 생계비를 의미하지만 ① 대학 등록금 같은 \"특별한 비용\"은 별도 청구 가능 영역 ② 가정법원 양육비 변경 신청 ③ 자녀의 진학 의사·능력 ④ 양 부모 분담 비율 ⑤ 성년 후도 학업 계속 시 분담 5가지 트랙이 핵심. 대학 등록금은 \"통상 양육비 + 특별 비용\" 구조로 청구하는 영역. 대응은 ① 진학 자료 ② 비용 산정 ③ 협의 ④ 양육비 변경 ⑤ 이행 강제 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 대학 등록금 양육비 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진학·비용·협의·변경·이행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자녀 진학·합격 자료</strong></li>\n<li><strong>② 등록금·학자금 산정</strong></li>\n<li><strong>③ 전 배우자와 협의 시도</strong></li>\n<li><strong>④ 가정법원 양육비 변경 신청</strong></li>\n<li><strong>⑤ 이행명령·이행관리원 등록 (불이행 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대학 등록금은 일반 양육비와 별도로 \"특별 비용\"으로 청구 가능. 양육비 변경 신청 + 부모 양측 분담 비율 협의가 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의·신청·이행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진학·등록금 자료 (즉시)</strong> — 합격증·등록금 고지서.</li>\n<li><strong>2단계 — 전 배우자와 협의 (1~2개월)</strong></li>\n<li><strong>3단계 — 가정법원 양육비 변경 청구</strong> — 결렬 시.</li>\n<li><strong>4단계 — 심판 결정 (3~6개월)</strong></li>\n<li><strong>5단계 — 이행명령·양육비이행관리원</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">대학 등록금 양육비 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진학·비용·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>자녀 합격증·재학증명서</strong></li>\n<li><strong>등록금 고지서·납부 영수증</strong></li>\n<li><strong>이혼 판결문·양육비 결정서</strong></li>\n<li><strong>현재 양육비 이행 내역</strong></li>\n<li><strong>본인·전 배우자 소득 자료</strong></li>\n<li><strong>전 배우자와 협의 내역</strong></li>\n<li><strong>본인 신분증·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대학 등록금 외 교재비·기숙사비도 별도 산정 가능. 한 학기 단위로 청구하는 것이 일반적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별 비용 인정</strong> — 등록금·중대 의료비 등.</li>\n<li><strong>분담 비율</strong> — 양 부모 소득 비례.</li>\n<li><strong>자녀 진학 의사·능력</strong> — 합격·재학 입증.</li>\n<li><strong>성년 후 학업 계속</strong> — 만 19세 이상도 학업 시 분담 평가.</li>\n<li><strong>이행 강제</strong> — 이행명령·과태료·감치.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대학 등록금과 양육비',
        summary:
          '대법원 2020므240021(2022.04.14 선고) 영역에서 법원은 양육비는 통상 일상 생계비를 의미하지만 자녀의 교육·진학 등으로 발생하는 특별 비용은 양 부모가 각자의 자력에 따라 분담하는 것이 자녀 복리에 부합한다고 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '대학 등록금은 양육비와 별도 특별 비용. 양 부모 소득 비례 분담이 원칙.',
      },
    ],
    faq: [
      {
        question: '대학 등록금 외 다른 비용도 청구 가능한가요?',
        answer:
          '<strong>교재비·기숙사비·중대 의료비 등도 별도 청구 가능합니다.</strong>',
      },
      {
        question: '자녀가 성년인데도 양육비 청구 가능한가요?',
        answer:
          '<strong>학업 계속 시 분담 평가 가능한 영역입니다.</strong>',
      },
      {
        question: '전 배우자가 거부하면 강제 가능한가요?',
        answer:
          '<strong>가정법원 양육비 변경 + 이행명령으로 강제 가능합니다.</strong>',
      },
      {
        question: '분담 비율은 어떻게 정하나요?',
        answer:
          '<strong>양 부모 소득 비례로 산정합니다.</strong> 통상 50:50 또는 소득 비율.',
      },
      {
        question: '학자금 대출 받았는데 청구 가능한가요?',
        answer:
          '<strong>대출도 양육비 분담 대상으로 청구 가능합니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 변경 신청', href: '/guide/child-support/child-support-modification-procedure' },
      { label: '특별 비용 청구', href: '/guide/child-support/child-support-special-cost-claim' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
      { label: '이행명령', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '양육비 계산', href: '/guide/child-support/child-support-calculation-table' },
    ],
  },

  // ─── 5. child-support-disabled-child-extension-track ───
  {
    domain: 'child-support',
    slug: 'child-support-disabled-child-extension-track',
    keyword: '장애 자녀 성년 후 양육비',
    questionKeyword: '발달장애 자녀가 성년이 됐는데 자립이 어려워요. 양육비 계속 받을 수 있나요?',
    ctaKeyword: '장애 자녀 양육비 연장 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '장애 자녀 성년 후 양육비 — 5단계 연장 청구 다툼 | 로앤가이드',
      description:
        '발달·중증 장애로 자립이 어려운 자녀의 성년 후 양육비 5가지 연장 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"자녀가 발달장애 2급으로 만 19세가 됐어요. 일상 생활·의사소통이 어려워 자립이 불가능합니다. 그런데 전 배우자는 \"성년 됐으니 양육비 끝\"이라고 통보. 본인이 평생 부양해야 하나 막막한 상황.\" 양육비는 통상 자녀 성년까지지만 ① 자립 능력 부재 자녀(중증 장애·의식 불명 등) ② 부양 의무 잔존 ③ 가정법원 양육비 연장 청구 ④ 양 부모 분담 ⑤ 자녀 본인의 부양료 청구권 5가지 트랙이 결합되는 영역. 민법 974조의 직계존비속 부양 의무는 성년 자녀가 자력으로 생활할 수 없는 경우 잔존. 양육비 또는 부양료로 형태 변경 청구 가능. 대응은 ① 장애 자료 ② 협의 ③ 가정법원 신청 ④ 분담 ⑤ 이행 강제 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 장애 자녀 양육비 연장 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 장애·부양·청구·분담·이행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 장애 등급·자립 능력 부재 자료</strong></li>\n<li><strong>② 부양 의무 잔존 (민법 974조)</strong></li>\n<li><strong>③ 가정법원 양육비/부양료 청구</strong></li>\n<li><strong>④ 양 부모 분담 비율</strong></li>\n<li><strong>⑤ 이행 강제 (불이행 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 중증 장애로 자립 불가한 성년 자녀는 양육비 또는 부양료 형태로 분담 청구 가능 영역. 부양 의무는 부모 모두에게 잔존.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·이행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 장애·자립 능력 자료 (즉시)</strong> — 장애 진단서·복지 평가.</li>\n<li><strong>2단계 — 전 배우자와 협의 (1~2개월)</strong></li>\n<li><strong>3단계 — 가정법원 양육비/부양료 청구</strong></li>\n<li><strong>4단계 — 심판 결정 (3~6개월)</strong></li>\n<li><strong>5단계 — 이행명령·양육비이행관리원</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">장애 자녀 양육비 연장 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 장애·자립·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>장애인등록증·복지카드·등급</strong></li>\n<li><strong>의료 진단서·발달 평가</strong></li>\n<li><strong>일상 활동 평가·자립 능력 평가</strong></li>\n<li><strong>이혼 판결문·양육비 결정서</strong></li>\n<li><strong>본인·전 배우자 소득 자료</strong></li>\n<li><strong>자녀 의료·돌봄 비용 내역</strong></li>\n<li><strong>본인 가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 장애 등급만이 아니라 일상 활동 수행 능력·취업 가능성 평가가 자립 불가 입증의 핵심. 복지관·전문의 평가서 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자립 능력 부재 입증</strong> — 의료·복지 평가 종합.</li>\n<li><strong>부양 의무 잔존</strong> — 민법 974조.</li>\n<li><strong>양육비 vs 부양료</strong> — 형태 다르나 실질 동일.</li>\n<li><strong>분담 비율</strong> — 양 부모 소득 비례.</li>\n<li><strong>장애 정도 변동</strong> — 호전·악화 시 재청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>한국장애인부모회 02-2675-4525</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성년 장애 자녀 부양',
        summary:
          '대법원 2019스621(2021.05.27 선고) 영역에서 법원은 자녀가 성년이 되었더라도 중증 장애 등으로 자력으로 생활할 수 없다고 평가될 수 있는 경우 직계존속의 부양 의무가 잔존하고, 양 부모가 자력에 따라 분담해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '중증 장애로 자립 불가한 성년 자녀에 대한 부모 부양 의무 잔존. 양육비/부양료 형태로 분담 청구.',
      },
    ],
    faq: [
      {
        question: '장애 등급이 낮으면 안 되나요?',
        answer:
          '<strong>등급보다 \"자립 능력 부재\"의 객관적 평가가 핵심입니다.</strong>',
      },
      {
        question: '양육비와 부양료의 차이는요?',
        answer:
          '<strong>법률 용어 다르지만 실질은 분담 청구입니다.</strong> 청구 형태에 따라 선택.',
      },
      {
        question: '자녀 본인이 청구할 수 있나요?',
        answer:
          '<strong>의사능력 있으면 자녀가 직접 부양료 청구 가능합니다.</strong>',
      },
      {
        question: '복지 수당 받고 있으면 청구 불가인가요?',
        answer:
          '<strong>복지 수당은 별도이며 부모 분담과 무관합니다.</strong>',
      },
      {
        question: '장애가 호전되면 어떻게 되나요?',
        answer:
          '<strong>전 배우자가 변경 청구 가능합니다.</strong> 정기 평가 필요.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 변경 신청', href: '/guide/child-support/child-support-modification-procedure' },
      { label: '부양 의무', href: '/guide/child-support/child-support-parental-duty' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
      { label: '이행명령', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '양육비 계산', href: '/guide/child-support/child-support-calculation-table' },
    ],
  },

  // ─── 6. dui-medication-cold-medicine-affirmative-defense-track ───
  {
    domain: 'dui',
    slug: 'dui-medication-cold-medicine-affirmative-defense-track',
    keyword: '감기약 음주측정',
    questionKeyword: '감기약 먹고 운전했는데 음주측정에 양성 반응. 다툴 수 있나요?',
    ctaKeyword: '감기약 음주측정 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '감기약 음주측정 양성 — 5단계 항변·재측정 다툼 | 로앤가이드',
      description:
        '감기약·구취제·진통제 복용 후 음주측정 양성 나왔다면 항변·재측정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"감기로 처방받은 약 먹고 1시간 후 운전했는데 단속에서 0.03% 양성 반응. 술은 입에도 안 댔어요. 경찰은 \"약도 알코올 성분이 있다\"고 합니다. 면허 정지 통지를 받았는데 본인은 그날 정말 술 안 마셨어요.\" 일부 감기약·구취제는 알코올 성분 함유로 음주측정기 양성 반응 가능. ① 호흡 측정 vs 혈액 측정 정확성 차이 ② 입가심·재측정 권리 ③ 약 성분 입증 ④ 위드마크 공식 검증 ⑤ 행정심판·형사 무죄 5가지 트랙이 핵심. 호흡 측정은 약·구취제로 오류 가능성이 있고 혈액 측정이 정확한 영역. 즉시 혈액 검사 요청이 결정적. 대응은 ① 약 자료 ② 재측정 ③ 행정심판 ④ 변호인 ⑤ 형사 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 감기약 음주측정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·약·재측정·심판·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 음주측정 호흡 vs 혈액</strong> — 혈액이 정확.</li>\n<li><strong>② 약 성분 알코올 확인</strong> — 처방전·약 성분표.</li>\n<li><strong>③ 입가심·재측정 권리</strong> — 5~15분 후 재측정.</li>\n<li><strong>④ 행정심판 (면허 정지·취소)</strong> — 90일 내.</li>\n<li><strong>⑤ 형사 방어 + 변호인</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 호흡 측정은 약·구취제로 오류 가능. 즉시 혈액 검사 요청 + 처방전·약 자료 확보가 무죄·면허 회복 가능성 결정적인 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·심판·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 측정 직후 혈액 검사 요청</strong> — 단속 현장에서 즉시.</li>\n<li><strong>2단계 — 약 자료 확보 (즉시)</strong> — 처방전·약 성분표·구매 영수증.</li>\n<li><strong>3단계 — 행정심판 청구 (90일 내)</strong> — 면허 정지·취소.</li>\n<li><strong>4단계 — 변호인 상담·형사 방어</strong></li>\n<li><strong>5단계 — 재판 (형사 무죄 다툼)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">감기약 음주측정 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·약·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>처방전·약국 영수증·약 성분표</strong></li>\n<li><strong>음주측정 결과지·재측정 요청 기록</strong></li>\n<li><strong>혈액 검사 결과 (있을 시)</strong></li>\n<li><strong>단속 영상·블랙박스</strong></li>\n<li><strong>의사 진단서·소견서 (약 복용 사실)</strong></li>\n<li><strong>면허 정지·취소 통지서</strong></li>\n<li><strong>본인 신분증·운전 기록부</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 음주측정 직후 \"감기약 먹었다\" \"입가심 후 재측정\" 요청이 적시. 단속 영상에 본인 요청이 기록되면 강한 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>호흡 vs 혈액 정확성</strong> — 혈액이 신뢰도 높음.</li>\n<li><strong>입가심·재측정 권리</strong> — 도로교통법상 보장.</li>\n<li><strong>약 성분 입증</strong> — 처방전·성분표·의사 소견.</li>\n<li><strong>위드마크 검증</strong> — 시간 흐름 따른 변화.</li>\n<li><strong>행정심판 90일</strong> — 면허 통지 후 90일 내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정과 약 복용',
        summary:
          '대법원 2008도7311(2008.11.27 선고) 영역에서 법원은 도로교통법상 음주측정에서 호흡 측정 결과만으로 처벌 여부를 단정하기 어려운 경우 혈액 측정에 의한 확인이 정확한 방법이고, 약물 복용·입가심 등으로 호흡 측정 오류 가능성이 인정된다고 평가될 수 있는 경우 무죄·취소 판단 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '호흡 측정 오류 가능성 + 혈액 검사 정확성. 즉시 혈액 검사 요청이 결정적.',
      },
    ],
    faq: [
      {
        question: '단속 후 시간이 지나서 약 자료가 없으면요?',
        answer:
          '<strong>약국·병원에서 처방·구매 기록 재발급 가능합니다.</strong>',
      },
      {
        question: '재측정 요청을 안 했어요',
        answer:
          '<strong>본인 사정 입증이 어려워지지만 다툼 자체는 가능합니다.</strong> 변호인 상담 권장.',
      },
      {
        question: '0.03% 양성이면 면허 정지인가요?',
        answer:
          '<strong>0.03~0.08%는 정지, 0.08% 이상은 취소입니다.</strong>',
      },
      {
        question: '행정심판과 형사 사건은 별도인가요?',
        answer:
          '<strong>네, 별도 절차입니다.</strong> 행정심판은 면허, 형사는 처벌.</strong>',
      },
      {
        question: '음주 안 한 입증은 누가 부담하나요?',
        answer:
          '<strong>측정 자체는 검찰 입증 책임이나 약 복용 사실은 본인 입증입니다.</strong>',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '음주측정 거부·재측정', href: '/guide/dui/dui-test-refusal-procedure' },
      { label: '면허 정지·취소', href: '/guide/dui/dui-license-suspension-revocation' },
      { label: '음주 측정 정확성', href: '/guide/dui/dui-measurement-accuracy' },
      { label: '음주운전 형사 방어', href: '/guide/dui/dui-criminal-defense' },
    ],
  },
];
