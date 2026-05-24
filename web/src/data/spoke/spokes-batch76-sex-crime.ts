import { SpokePage } from '../spoke-pages';

// batch76 sex-crime — 4개 victim-perspective
//
// 고유 존재 이유:
// 1. 회식 후 택시 동승 강제추행 — '회식·상사 동승 + 택시 카드결제·블랙박스·동선 기록' 트랙
// 2. PT 지도 빙자 신체접촉 추행 — 'PT 자세 교정 빙자 + 위계·위력 추행 + 반복성' 트랙
// 3. 화상과외 음란행위 노출 — '온라인 화상과외 + 통신매체이용음란 + 미성년 목격·녹화' 트랙
// 4. 복지시설 장애인 추행 피해 — '지적장애인 항거불능 + 시설 신고의무 + 가족 사후 인지' 트랙

export const spokesBatch76SexCrime: SpokePage[] = [
  // ─── 1. sex-crime-company-dinner-taxi-molestation-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-taxi-molestation-track',
    keyword: '회식 택시 동승 강제추행',
    questionKeyword: '회식 후 같은 방향이라 상사와 택시에 동승했는데 차 안에서 신체를 만지는 강제추행 피해를 입었어요. 어떻게 대응해야 하나요?',
    ctaKeyword: '회식 택시 동승 강제추행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회식 택시 동승 강제추행 — 5단계 증거·신고 대응 | 로앤가이드',
      description:
        '회식 후 택시 동승 중 상사 강제추행 피해라면 블랙박스·동선·증거·고소 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부서 회식이 끝나고 \'같은 방향이니 같이 타자\'는 상사 권유로 택시에 동승하게 됐습니다. 출발 후 얼마 안 돼 상사가 어깨에 손을 두르더니 허벅지·신체 부위를 손으로 만지기 시작했고, 본인은 놀라 몸을 피했지만 \'취해서 그런다\'며 계속됐어요. 다행히 택시 카드 결제 내역·승하차 동선 기록이 남아 있고, 일부 차량은 블랙박스 영상도 보존돼 있을 수 있는 상황입니다. 다만 \'직장 상사라 신고하면 불이익을 받을까\' 걱정돼 대응을 망설이고 있어요." 형법 제298조는 \'폭행 또는 협박으로 사람을 추행\'한 행위를 강제추행으로 규정하고, 성폭력처벌법은 추행의 정황·수단에 따라 가중 평가가 가능한 영역으로 봅니다. 회식 동승 + 밀폐 공간 + 카드결제·동선·블랙박스 기록 결합 시 강제추행 평가가 가능한 트랙으로 보입니다. 피해자라면 ① 증거 보존 ② 해바라기센터 ③ 형사 고소 ④ 직장 내 보호 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 택시 동승 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·해바라기·고소·직장보호·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 택시 카드결제·동선·블랙박스 영상 보존요청.</li>\n<li><strong>② 해바라기센터 (1899-3075)</strong> — 심리·법률 통합 지원.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제298조 강제추행.</li>\n<li><strong>④ 직장 내 보호</strong> — 분리·불이익 금지 조치 요청.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·치료비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 택시 카드결제 내역과 승하차 동선은 동승 사실·시간을 입증하는 자료. 블랙박스 영상은 보존기간이 짧아 즉시 보존요청이 중요합니다. 직장 상사라도 추행 정황이 확인되면 강제추행 평가 영역으로 볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·보호·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (인지 당일·가능한 빠르게)</strong> — 택시 카드결제·동선·블랙박스 보존요청.</li>\n<li><strong>2단계 — 해바라기센터 상담 (즉시·24시간)</strong> — 1899-3075 심리·법률 지원.</li>\n<li><strong>3단계 — 경찰 고소 (시효 내)</strong> — 여성청소년수사대 신고.</li>\n<li><strong>4단계 — 직장 내 분리·보호 요청 (1~2주)</strong> — 인사부서·고충처리 + 불이익 금지.</li>\n<li><strong>5단계 — 민사 배상 (시효 별도)</strong> — 위자료·치료비 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 택시 동승 강제추행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 동선·증거·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>택시 카드결제 내역·영수증·승하차 시간</strong></li>\n<li><strong>택시 차량번호·배차 앱 호출 기록</strong></li>\n<li><strong>블랙박스 영상 보존요청 공문(가능 시)</strong></li>\n<li><strong>회식 참석자·동선 입증 자료(메신저·사진)</strong></li>\n<li><strong>상사와 주고받은 메시지·사후 연락 기록</strong></li>\n<li><strong>당일 옷차림·피해 직후 진술 정리표</strong></li>\n<li><strong>해바라기센터 상담·진료 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙박스 영상은 운수회사·차주 보관 기간이 짧아 빠른 보존요청이 결정적일 수 있습니다. 배차 앱 호출 기록과 카드결제 내역만으로도 동승 시간·경로를 재구성할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행의 고의·정황</strong> — \'취해서 실수\' 주장 대비 동선·메시지.</li>\n<li><strong>동승 경위</strong> — 카드결제·배차 기록.</li>\n<li><strong>블랙박스 보존</strong> — 보존기간 경과 전 요청.</li>\n<li><strong>직장 내 불이익</strong> — 분리·보호·불이익 금지.</li>\n<li><strong>2차 피해 보호</strong> — 비공개·신변보호.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행 수단·결과 평가 영역',
        summary:
          '대법원 2007도10058(대법원, 2008.04.24 선고) 영역에서 법원은 폭행·협박을 수단으로 한 추행과 그로 인한 결과의 가중 평가를 다루면서, 폭행·협박을 수단으로 한 추행은 그로 인한 상해가 결합되면 가중 평가될 수 있다고 본 사례 흐름이 있고, 회식 택시 동승 강제추행 피해에도 동승 정황 + 추행 수단 평가가 핵심 사정이 될 수 있습니다.',
        takeaway: '회식 동승 + 밀폐 공간 + 동선·블랙박스 결합 시 강제추행 평가 영역 — 해바라기센터·변호인 상담 검토 권장.',
      },
    ],
    faq: [
      {
        question: '직장 상사라 신고하면 불이익을 받을까봐 걱정돼요.',
        answer:
          '<strong>불이익 조치 금지·신변보호를 요청할 수 있는 영역입니다.</strong> 해바라기센터·고충처리부터 검토.',
      },
      {
        question: '블랙박스 영상이 이미 지워졌으면 입증이 어렵나요?',
        answer:
          '<strong>카드결제·동선·진술 등 다른 자료로 입증을 검토할 수 있습니다.</strong> 보존요청은 빠를수록 좋습니다.',
      },
      {
        question: '상대가 \'취해서 기억이 없다\'고 주장하면요?',
        answer:
          '<strong>음주는 면책 사유가 아닌 영역입니다.</strong> 동승 경위·사후 메시지가 정황 자료가 될 수 있습니다.',
      },
      {
        question: '바로 못 피하고 가만히 있었는데 괜찮을까요?',
        answer:
          '<strong>피해자가 즉시 저항하지 못한 정황도 평가 대상이 되는 영역입니다.</strong> 시간순 진술 정리를 권장합니다.',
      },
      {
        question: '회식 자리라 다른 동료가 봤을 수도 있어요.',
        answer:
          '<strong>회식 참석자·동선 정황도 자료가 될 수 있는 영역입니다.</strong> 메신저·사진 기록을 보존해두세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },

  // ─── 2. sex-crime-pt-trainer-guidance-touch-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-pt-trainer-guidance-touch-track',
    keyword: 'PT 지도 빙자 신체접촉 추행',
    questionKeyword: '헬스장 개인 PT 중 트레이너가 \'자세 교정\'을 빙자해 반복적으로 신체 민감 부위를 접촉하는데, 항의해도 지도라며 계속해요. 어떻게 대응하나요?',
    ctaKeyword: 'PT 지도 빙자 신체접촉 추행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'PT 지도 빙자 신체접촉 추행 — 5단계 증거·고소 대응 | 로앤가이드',
      description:
        'PT 자세 교정 빙자 반복 신체접촉 추행이라면 CCTV·기록·위계위력·고소 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"건강 관리를 위해 헬스장에서 1:1 개인 PT를 등록했는데, 회차가 거듭될수록 트레이너가 \'자세 교정\'을 명목으로 가슴·골반·허벅지 안쪽 등 민감 부위에 손을 대는 일이 반복됐습니다. 처음에는 운동 지도려니 했지만 불필요하게 길고 잦은 접촉이라 \'이건 좀 불편하다\'고 항의했는데도 \'정확한 자세를 위해 필요하다\'며 멈추지 않았어요. 다행히 헬스장 운동 공간에 CCTV가 설치돼 있고, 예약·결제 앱에 PT 회차 기록이 남아 있는 상황입니다." 형법 제298조는 \'폭행 또는 협박으로 사람을 추행\'한 행위를, 성폭력처벌법은 위계·위력을 이용한 추행을 별도로 규정해 지도·고용 관계를 이용한 접촉을 평가할 수 있는 영역으로 봅니다. PT 지도 빙자 + 반복적 민감 부위 접촉 + 항의에도 지속 결합 시 위계·위력 추행 평가가 가능한 트랙으로 보입니다. 피해자라면 ① CCTV·기록 보존 ② 해바라기센터 ③ 형사 고소 ④ 업체 신고 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. PT 지도 빙자 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. CCTV·해바라기·고소·업체신고·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① CCTV·기록 보존</strong> — 헬스장 CCTV·PT 예약·결제 기록 보존요청.</li>\n<li><strong>② 해바라기센터 (1899-3075)</strong> — 심리·법률 지원.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제298조 + 성폭력처벌법 위계·위력 추행.</li>\n<li><strong>④ 업체·관할 신고</strong> — 헬스장 본사·관할 지자체 민원.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·치료비·PT 환불.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지도·고용 관계를 이용한 접촉은 위계·위력에 의한 추행으로 평가될 수 있는 영역입니다. CCTV는 보존기간이 짧으니 즉시 보존요청이 중요하며, 항의 메시지·반복성 기록이 정황 입증 자료가 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·보호·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — CCTV·기록 보존 (인지 당일)</strong> — 헬스장 CCTV·PT 예약·결제 기록 보존요청.</li>\n<li><strong>2단계 — 해바라기센터 상담 (즉시·24시간)</strong> — 1899-3075 심리·법률 지원.</li>\n<li><strong>3단계 — 경찰 고소 (시효 내)</strong> — 여성청소년수사대 + 압수수색 신청.</li>\n<li><strong>4단계 — 헬스장 본사·관할 신고 (1~2주)</strong> — 재발 방지·분리 요청.</li>\n<li><strong>5단계 — 민사 배상 (시효 별도)</strong> — 위자료·PT 환불 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PT 지도 빙자 신체접촉 추행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. CCTV·기록·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>헬스장 CCTV 보존요청 공문(내용증명)</strong></li>\n<li><strong>PT 예약·결제·회차 기록</strong></li>\n<li><strong>트레이너와 주고받은 메시지·항의 기록</strong></li>\n<li><strong>접촉 시점·부위를 적은 시간순 정리표</strong></li>\n<li><strong>다른 회원·목격자 진술(가능 시)</strong></li>\n<li><strong>PT 등록 계약서·환불 약관</strong></li>\n<li><strong>해바라기센터 상담·진료 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헬스장 CCTV는 통상 보존기간이 짧아 즉시 보존요청 공문이 결정적일 수 있습니다. \'불편하다\'고 항의한 메시지는 동의 부재·반복성을 보여주는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지도 vs 추행</strong> — 부위·빈도·항의 후 지속 정황.</li>\n<li><strong>위계·위력</strong> — 지도·고용 관계 이용 평가.</li>\n<li><strong>CCTV 보존</strong> — 보존기간 경과 전 요청.</li>\n<li><strong>업체 책임</strong> — 사용자 책임·재발 방지.</li>\n<li><strong>2차 피해 보호</strong> — 비공개·분리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위계·위력 추행 평가 영역',
        summary:
          '대법원 2014도9315(대법원, 2014.10.15 선고) 영역에서 법원은 위계·위력을 이용한 추행의 성립 범위를 다루면서, 위계·위력을 이용한 추행은 강제추행과 별도로 성폭력처벌법상 위계등추행으로 평가될 수 있다고 본 사례 흐름이 있고, PT 지도 빙자 신체접촉 추행에도 지도 관계 이용 + 반복 접촉 평가가 핵심 사정이 될 수 있습니다.',
        takeaway: 'PT 지도 빙자 + 반복 접촉 + 항의 후 지속 결합 시 위계·위력 추행 평가 영역 — 해바라기센터·변호인 상담 검토 권장.',
      },
    ],
    faq: [
      {
        question: '운동 지도를 위한 접촉이라고 주장하면 어떻게 하나요?',
        answer:
          '<strong>부위·빈도·항의 후 지속 여부가 정황 자료가 되는 영역입니다.</strong> 시간순 기록 정리를 권장합니다.',
      },
      {
        question: 'CCTV가 있는데 헬스장이 안 보여줘요.',
        answer:
          '<strong>경찰 압수수색 신청을 검토할 수 있는 영역입니다.</strong> 내용증명 보존요청이 우선입니다.',
      },
      {
        question: '항의했는데도 계속했어요. 더 불리한가요 유리한가요?',
        answer:
          '<strong>항의 후 지속은 동의 부재를 보여주는 자료가 될 수 있습니다.</strong> 메시지·녹음을 보존해두세요.',
      },
      {
        question: '헬스장 업체도 책임을 지나요?',
        answer:
          '<strong>사용자 책임·관리책임은 별도로 검토할 수 있는 영역입니다.</strong> 민사 공동청구를 검토해볼 수 있습니다.',
      },
      {
        question: 'PT 비용 환불도 받을 수 있나요?',
        answer:
          '<strong>계약 환불은 형사와 별도 트랙으로 검토할 수 있습니다.</strong> 계약서·약관을 확인해두세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },

  // ─── 3. sex-crime-online-video-tutoring-indecent-exposure-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-online-video-tutoring-indecent-exposure-track',
    keyword: '화상과외 음란행위 노출',
    questionKeyword: '온라인 화상과외 수업 중 강사가 화면 앞에서 음란행위를 노출했고, 미성년 학생이 목격해 녹화·캡처 자료가 있어요. 어떻게 대응하나요?',
    ctaKeyword: '화상과외 음란행위 노출 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '화상과외 음란행위 노출 — 5단계 증거·신고 대응 | 로앤가이드',
      description:
        '온라인 화상과외 중 강사 음란행위 노출 + 미성년 목격이라면 통신매체음란·아청법·고소 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중학생 자녀가 온라인 화상과외 플랫폼으로 1:1 수업을 듣던 중, 강사가 화면 앞에서 음란행위를 노출하는 장면을 목격하고 놀라 부모인 본인에게 알려왔습니다. 다행히 자녀가 당황한 와중에 화면을 녹화·캡처한 자료가 남아 있었고, 수업 예약·결제 내역과 강사 계정 정보도 플랫폼에 기록돼 있는 상황이에요. 미성년 자녀가 본 충격이 커서 심리적으로 불안해하고 있고, 부모로서 어디부터 신고해야 할지 막막한 상태입니다." 성폭력처벌법 제13조는 \'통신매체를 이용해 성적 수치심을 유발하는 행위\'를 통신매체이용음란으로 규정하고, 아동·청소년의 성보호에 관한 법률은 미성년 대상 성범죄를 더 무겁게 평가하는 영역으로 봅니다. 화상 노출 + 미성년 목격 + 녹화·캡처 자료 결합 시 통신매체이용음란·아청법 적용 영역으로 평가될 수 있는 트랙으로 보입니다. 피해자(보호자)라면 ① 증거 보존 ② 플랫폼 신고 ③ 형사 고소 ④ 디지털 자료 차단 ⑤ 심리 지원 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 화상과외 음란행위 노출 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·플랫폼·고소·차단·심리 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 녹화·캡처·수업 예약·결제·강사 계정 기록.</li>\n<li><strong>② 플랫폼 신고</strong> — 화상과외 업체 + 계정 정보 보존요청.</li>\n<li><strong>③ 형사 고소</strong> — 성폭력처벌법 제13조 + 아동·청소년성보호법.</li>\n<li><strong>④ 디지털 자료 차단</strong> — 디지털성범죄피해자지원센터 삭제 지원.</li>\n<li><strong>⑤ 심리 지원</strong> — 해바라기센터 미성년 심리 상담.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통신매체를 이용한 음란행위 노출은 성폭력처벌법 제13조 적용 영역으로 평가될 수 있고, 미성년 대상은 아동·청소년성보호법으로 더 무겁게 평가됩니다. 녹화·캡처 자료와 플랫폼 계정 기록이 핵심 입증 자료가 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·고소·보호 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (인지 당일)</strong> — 녹화·캡처·수업 예약·결제 내역 백업.</li>\n<li><strong>2단계 — 플랫폼 계정 보존요청 (1~3일)</strong> — 화상과외 업체에 계정·로그 보존 공문.</li>\n<li><strong>3단계 — 경찰 고소 (시효 내)</strong> — 여성청소년수사대 + 사이버 신고.</li>\n<li><strong>4단계 — 디지털성범죄피해자지원센터 (즉시 병행)</strong> — 자료 확산 차단·삭제 지원.</li>\n<li><strong>5단계 — 해바라기센터 심리 지원 (수개월)</strong> — 미성년 심리 상담.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">화상과외 음란행위 노출 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상·플랫폼·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>화면 녹화·캡처 자료(원본 보존)</strong></li>\n<li><strong>화상과외 수업 예약·결제 내역</strong></li>\n<li><strong>강사 계정·프로필·플랫폼 식별 정보</strong></li>\n<li><strong>수업 일시·접속 로그 자료</strong></li>\n<li><strong>자녀 진술서·목격 시간순 정리표</strong></li>\n<li><strong>플랫폼 계정 보존요청 공문</strong></li>\n<li><strong>해바라기센터 심리 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 녹화·캡처 원본은 편집 없이 그대로 보존하는 것이 좋습니다. 플랫폼 계정·로그는 시간이 지나면 삭제될 수 있어 보존요청 공문을 빠르게 보내두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의 노출 vs 우발</strong> — 화면 각도·지속 시간 정황.</li>\n<li><strong>미성년 보호</strong> — 아동·청소년성보호법 평가.</li>\n<li><strong>강사 신원</strong> — 플랫폼 계정·결제 추적.</li>\n<li><strong>자료 확산 차단</strong> — 디지털성범죄피해자지원센터.</li>\n<li><strong>2차 피해 보호</strong> — 미성년 심리·비공개.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong> (자료 삭제 지원)</li>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성범죄 증거 신빙성 평가 영역',
        summary:
          '대법원 2023도13406(대법원, 2024.04.12 선고) 영역에서 법원은 성폭력 사건에서 영상·진술 등 증거의 신빙성 평가를 다루면서, 영상·진술 등 증거의 신빙성 평가가 유무죄 판단의 핵심 사정으로 다뤄질 수 있다고 본 사례 흐름이 있고, 화상과외 음란행위 노출 피해에도 녹화·캡처 자료 + 목격 진술 평가가 핵심 사정이 될 수 있습니다.',
        takeaway: '화상 노출 + 미성년 목격 + 녹화 자료 결합 시 통신매체음란·아청법 적용 영역으로 평가 — 디지털성범죄피해자지원센터·변호인 상담 검토 권장.',
      },
    ],
    faq: [
      {
        question: '아이가 녹화한 자료를 증거로 쓸 수 있나요?',
        answer:
          '<strong>본인이 목격·녹화한 자료는 입증 자료가 될 수 있는 영역입니다.</strong> 원본을 편집 없이 보존하세요.',
      },
      {
        question: '강사가 \'실수로 화면이 켜졌다\'고 하면요?',
        answer:
          '<strong>화면 각도·지속 시간 등 정황이 평가 대상이 되는 영역입니다.</strong> 녹화 자료가 정황 자료가 됩니다.',
      },
      {
        question: '미성년이라 처벌이 더 무겁다고 하던데요?',
        answer:
          '<strong>미성년 대상은 아동·청소년성보호법으로 더 무겁게 평가되는 영역입니다.</strong> 즉시 신고를 검토하세요.',
      },
      {
        question: '캡처 자료가 퍼질까봐 걱정돼요.',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 확산 차단·삭제를 지원하는 영역입니다.</strong> 병행 신청을 권장합니다.',
      },
      {
        question: '아이가 충격을 많이 받았는데 심리 지원이 있나요?',
        answer:
          '<strong>해바라기센터에서 미성년 심리 상담을 받아볼 수 있는 영역입니다.</strong> 1899-3075로 연락해보세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },

  // ─── 4. sex-crime-welfare-facility-disabled-molestation-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-welfare-facility-disabled-molestation-track',
    keyword: '복지시설 장애인 추행 피해',
    questionKeyword: '장애인 거주 복지시설에서 종사자가 의사표현이 어려운 지적장애인 가족을 추행한 정황을 신체 흔적·행동 변화로 알게 됐어요. 어떻게 대응하나요?',
    ctaKeyword: '복지시설 장애인 추행 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '복지시설 장애인 추행 — 5단계 신고·시설 책임 | 로앤가이드',
      description:
        '복지시설 종사자의 지적장애인 추행 정황이라면 항거불능·시설 신고의무·고소 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"의사표현이 어려운 지적장애가 있는 가족이 장애인 거주 복지시설에 입소해 생활하던 중, 면회 때 신체에 멍·상처가 보이고 특정 종사자만 보면 몸을 움츠리는 등 행동 변화가 반복돼 이상함을 느꼈습니다. 시설 측은 \'장애 특성상 나타나는 행동\'이라고 설명했지만, 가족인 본인이 외부 병원 검진을 받게 한 결과 추행을 시사하는 흔적이 확인됐어요. 다만 본인이 직접 피해를 말로 설명하기 어려운 상태라 어떻게 입증하고 신고해야 할지 막막한 상황입니다." 성폭력처벌법 제6조는 \'신체적·정신적 장애가 있는 사람\'에 대한 성범죄를 더 무겁게 평가하고, 장애인복지법은 시설 종사자에게 학대·성폭력 신고의무를 부과하는 영역으로 봅니다. 지적장애 + 시설 관리 + 신고의무 결합 시 가해 지목된 종사자 + 시설 다중 책임 평가가 가능한 트랙으로 보입니다. 피해자(가족)라면 ① 증거·검진 ② 분리·보호 ③ 형사 고소 ④ 시설 책임 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 복지시설 장애인 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 검진·분리·고소·시설·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거·검진</strong> — 외부 병원 검진·신체 사진·행동 변화 기록.</li>\n<li><strong>② 분리·보호</strong> — 가해 지목된 종사자와 즉시 분리·안전 확보.</li>\n<li><strong>③ 형사 고소</strong> — 성폭력처벌법 제6조 장애인 대상.</li>\n<li><strong>④ 시설 책임</strong> — 장애인복지법 신고의무·관리 책임.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·치료비·돌봄비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의사표현이 어려운 지적장애는 \'항거불능\' 상태로 평가될 수 있는 영역입니다. 장애인복지법은 시설 종사자에게 신고의무를 부과하므로 가해 지목된 종사자와 시설의 다중 책임을 검토해볼 수 있습니다. 가족 신고가 첫 단추입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검진·분리·고소·시설 책임 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 외부 병원 검진·증거 보존 (즉시)</strong> — 산부인과·신체 사진·행동 변화 기록.</li>\n<li><strong>2단계 — 분리·전원 (1~3일)</strong> — 가해 지목된 종사자와 분리·안전 확보.</li>\n<li><strong>3단계 — 경찰 고소·장애인권익옹호기관 (1주)</strong> — 1644-8295 신고.</li>\n<li><strong>4단계 — 시설 신고의무·관리 책임 (1~3개월)</strong> — 시설 운영자·관할 지자체 책임 검토.</li>\n<li><strong>5단계 — 민사 배상 (시효 별도)</strong> — 가해 지목된 종사자 + 시설 공동 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">복지시설 장애인 추행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 검진·시설·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>외부 병원 진료 기록·진단서</strong></li>\n<li><strong>신체 사진(멍·상처)·행동 변화 기록</strong></li>\n<li><strong>장애인 거주시설 입소 계약서·돌봄 일지</strong></li>\n<li><strong>시설 CCTV 보존요청 공문</strong></li>\n<li><strong>종사자 명단·근무표</strong></li>\n<li><strong>시설 신고의무 이행 여부 자료</strong></li>\n<li><strong>장애인권익옹호기관·관할 지자체 신고 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시설 CCTV는 통상 30~60일 보존이라 즉시 보존요청 공문 발송이 도움이 됩니다. 장애인권익옹호기관(1644-8295)은 시설 조사 권한이 있어 시설이 협조하지 않을 때 활용해볼 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항거불능 입증</strong> — 지적장애·의사표현 곤란 평가.</li>\n<li><strong>가해자 신원</strong> — 종사자 분리·근무표 대조.</li>\n<li><strong>시설 책임</strong> — 신고의무·관리책임.</li>\n<li><strong>증거 보존</strong> — CCTV·신체 검진 기록.</li>\n<li><strong>2차 피해 보호</strong> — 즉시 분리·전원.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 장애인 대상 성범죄 항거불능 평가 영역',
        summary:
          '대법원 2012도12714(대법원, 2013.04.11 선고) 영역에서 법원은 장애인 대상 성범죄에서 항거불능 상태의 판단 기준을 다루면서, 정신장애가 주된 원인이 되어 항거불능 상태에 있었는지가 장애인 대상 성범죄 평가의 기준이 될 수 있다고 본 사례 흐름이 있고, 복지시설 장애인 추행 피해에도 의사표현 곤란 + 시설 관리 평가가 핵심 사정이 될 수 있습니다.',
        takeaway: '지적장애 + 시설 관리 결합 시 가해 지목된 종사자 + 시설 다중 책임 평가 영역 — 장애인권익옹호기관·변호인 상담 검토 권장.',
      },
    ],
    faq: [
      {
        question: '가족이 직접 말로 설명하기 어려운데 입증이 되나요?',
        answer:
          '<strong>신체 검진·행동 변화·전문가 평가 결합으로 검토할 수 있는 영역입니다.</strong> 외부 병원 검진을 권장합니다.',
      },
      {
        question: '시설은 \'장애 특성\'이라고만 하는데 책임 없나요?',
        answer:
          '<strong>신고의무·관리책임은 별도로 검토할 수 있는 영역입니다.</strong> 장애인복지법 신고의무를 확인하세요.',
      },
      {
        question: 'CCTV가 이미 지워졌다면 어떻게 하나요?',
        answer:
          '<strong>다른 정황·검진 자료로 입증을 검토할 수 있는 영역입니다.</strong> 즉시 보존요청 공문 + 경찰 신고를 권장합니다.',
      },
      {
        question: '가해 지목된 사람이 다른 입소자일 때도 신고하나요?',
        answer:
          '<strong>책임능력 평가 후 절차가 분리될 수 있는 영역입니다.</strong> 변호인·권익옹호기관 자문을 권장합니다.',
      },
      {
        question: '시설을 옮기는 게 먼저인가요?',
        answer:
          '<strong>즉시 분리·전원이 안전 우선으로 검토되는 영역입니다.</strong> 지자체·장애인권익옹호기관 협조를 받아보세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },
];
