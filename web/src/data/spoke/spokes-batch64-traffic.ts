import { SpokePage } from '../spoke-pages';

// batch64 traffic-accident — 5개 (2026-05-14)
//
// 고유 존재 이유:
// 1. construction-site-equipment-collision — 공사현장 장비 충돌 책임 분배 (시공사 vs 운전자 vs 보험사 결합).
// 2. tunnel-pile-up-multi — 터널 내 다중 추돌 책임 분배 트랙 (좁은 공간·시야 제약 특수).
// 3. night-pedestrian-jaywalk-fault — 야간 무단횡단 보행자 과실 비율 (운전자 시야·속도·횡단지점).
// 4. dashcam-altered-evidence — 블랙박스 변조 의심 시 증거능력 다툼 (디지털 포렌식).
// 5. foreign-driver-license-recognize — 외국인 국내면허 미인증 사고 처리 (국제면허·면허 효력 다툼).

export const spokesBatch64Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-construction-site-equipment-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-construction-site-equipment-collision-track',
    keyword: '공사현장 장비 충돌',
    questionKeyword: '공사 중인 도로에서 굴착기와 충돌했어요. 누구에게 손해배상 청구하나요?',
    ctaKeyword: '공사현장 장비 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공사현장 장비 충돌 사고 — 5단계 시공사·운전자 책임 다툼 | 로앤가이드',
      description:
        '공사 중 도로에서 굴착기·덤프트럭 등과 충돌했다면 시공사·운전자·보험 5가지 책임 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길에 도로 일부 차단 공사 중인 구간을 지나가다 굴착기 회전 반경 안으로 들어가 측면 충돌. 굴착기 기사는 \"신호수 따라 움직였다\"고 하고, 신호수는 \"안전 거리 안 두고 들어왔다\"고 합니다. 시공사·운전자·보험사 모두 책임 떠넘기는 상황.\" 공사현장 사고는 ① 시공사의 안전 관리 의무(산업안전보건법) ② 장비 운전자의 주의의무 ③ 신호수 배치·표지판 설치 ④ 자동차보험 처리 가능 여부 5가지 다툼이 결합되는 영역. 책임은 분배되며, 시공사의 일반 영업배상책임보험 + 장비 자동차보험 두 트랙으로 청구할 수 있습니다. 대응은 ① 현장 사진·표지판 ② 시공사·운전자 진술 ③ 안전 관리 적정성 ④ 보험 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공사현장 장비 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·책임·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 안전 관리 적정성</strong> — 표지판·신호수·차단봉.</li>\n<li><strong>② 장비 운전자 주의의무</strong> — 회전 반경·후방 확인.</li>\n<li><strong>③ 시공사 영업배상책임</strong> — 일반 영업배상보험.</li>\n<li><strong>④ 장비 자동차보험</strong> — 건설기계 자동차보험.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 3년 시효(불법행위).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공사현장 사고는 시공사·장비 운전자 모두에게 책임 청구 가능한 영역. 시공사 영업배상보험 + 장비 자동차보험 양쪽 청구가 회수 트랙 확장.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장보전·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보전 (즉시)</strong> — 사진·블랙박스·CCTV·신호수 위치.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong> — 가해자 특정.</li>\n<li><strong>3단계 — 보험 청구 (시공사 + 장비)</strong> — 양쪽 보험사 동시 청구.</li>\n<li><strong>4단계 — 시공사 안전 관리 조사 (산업안전보건공단)</strong> — 안전 미흡 입증.</li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공사현장 장비 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>사고 현장 사진·블랙박스·CCTV</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>표지판·신호수·차단봉 배치 사진</strong></li>\n<li><strong>시공사 공사 허가증·안전 관리 계획서</strong></li>\n<li><strong>장비 운전자 진술서·운전 면허</strong></li>\n<li><strong>의료기록·치료비 영수증·진단서</strong></li>\n<li><strong>본인 차량 수리 견적·휴업손해 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 현장의 표지판·신호수 위치·차단봉 사진이 안전 관리 적정성 입증 핵심. 사진 없으면 블랙박스에서 추출.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시공사 안전 관리</strong> — 산업안전보건법상 의무 위반 시 책임 가중.</li>\n<li><strong>표지판·신호수 배치</strong> — 도로교통법·산업안전기준.</li>\n<li><strong>장비 자동차보험 적용</strong> — 건설기계도 자동차보험 가입 의무.</li>\n<li><strong>피해자 과실</strong> — 안전 표지 무시 시 과실 가산.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>한국소비자원 1372 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공사현장 사고와 책임 분배',
        summary:
          '대법원 2005다3832(2007.06.29 선고) 영역에서 법원은 도로 공사 현장에서 발생한 사고의 경우 시공사의 안전 관리 의무 위반·장비 운전자의 주의의무 위반·피해자 과실을 종합 고려해 책임을 분배해야 한다고 본 사례 흐름이 있습니다. 시공사 영업배상책임보험과 장비 자동차보험이 모두 청구 대상으로 평가될 수 있는 영역입니다.',
        takeaway: '시공사 + 장비 운전자 모두 청구 가능. 표지판·신호수 배치 적정성이 핵심 다툼.',
      },
    ],
    faq: [
      {
        question: '시공사가 책임 회피하면요?',
        answer:
          '<strong>장비 자동차보험으로 우선 청구 후 시공사 영업배상보험에 구상 청구 가능합니다.</strong>',
      },
      {
        question: '신호수가 본인 책임이라고 주장하면요?',
        answer:
          '<strong>시공사 직원·하청 관계없이 시공사 책임으로 평가되는 영역입니다.</strong>',
      },
      {
        question: '본인 차량 종합보험 적용은요?',
        answer:
          '<strong>일단 본인 보험으로 처리 후 가해자 보험에 구상 청구 가능합니다.</strong>',
      },
      {
        question: '안전 표지가 충분하지 않았어요',
        answer:
          '<strong>시공사 안전 관리 의무 위반 강한 사정입니다.</strong> 산업안전보건공단 조사 신청.',
      },
      {
        question: '치료비는 어떻게 보전받나요?',
        answer:
          '<strong>자동차보험·국민건강보험 우선 처리 후 손해배상 청구합니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 2. traffic-accident-tunnel-pile-up-multi-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-tunnel-pile-up-multi-track',
    keyword: '터널 다중 추돌',
    questionKeyword: '터널 안에서 앞차 급정거로 5중 추돌사고. 누가 가해자고 누가 피해자인가요?',
    ctaKeyword: '터널 다중 추돌 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '터널 내 다중 추돌 — 5단계 과실 분배 다툼 | 로앤가이드',
      description:
        '터널·고속도로 다중 추돌사고에 휘말렸다면 과실 분배·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 터널에서 앞차가 갑자기 급정거. 본인은 안전거리 잡고 있어 멈췄지만, 뒷차가 추돌해 그 충격으로 앞차까지 밀려 5중 추돌. 본인은 \"맨 뒷차 책임\"이라 생각하지만 보험사는 \"중간 차도 과실 있다\"고 합니다.\" 다중 추돌은 ① 후행 차량의 안전거리 미확보 ② 선행 차량 급정거의 정당성 ③ 시야·기상 조건 ④ 차량별 과실 분배 ⑤ 각 보험사 협의 5가지가 결합되는 영역. 터널 안은 시야 제약·반응 시간 차이로 후행 책임이 더 무거운 트랙. 본인 차량이 정상 정지했다가 충격으로 밀린 경우 \"중간 차 무과실 평가 여지\". 대응은 ① 블랙박스 ② 사고 경위 ③ 과실 분배 ④ 보험 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 터널 다중 추돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·과실·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 경위 확인</strong> — 블랙박스·CCTV·당사자 진술.</li>\n<li><strong>② 차량별 과실 분배</strong> — 후행 추돌 원칙 + 예외.</li>\n<li><strong>③ 각 보험사 협의</strong> — 다자 협상.</li>\n<li><strong>④ 치료비·휴업손해 청구</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다중 추돌은 차량별로 과실이 분배되는 영역. 본인이 정상 정지 후 후방 충격으로 밀린 경우 무과실 평가 가능한 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블랙박스·현장 자료 보존 (즉시)</strong> — 차량 5대 블랙박스 + 터널 CCTV.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (즉시~1주)</strong></li>\n<li><strong>3단계 — 보험사 협의 (1~2개월)</strong> — 다자 협상 시 변호사 자문 권장.</li>\n<li><strong>4단계 — 손해사정 (필요시)</strong> — 후유증·일실수입.</li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">터널 다중 추돌 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스 (전후방)</strong></li>\n<li><strong>다른 차량 블랙박스·터널 CCTV</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>각 차량 위치·파손 사진</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>본인 차량 수리 견적·휴업손해</strong></li>\n<li><strong>각 보험사 사고 접수 번호</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다중 추돌은 \"누가 어느 순간 부딪쳤는가\" 시간 순서가 결정적. 블랙박스 영상 시각 동기화 + 충격음 순서 분석 자료 보존.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>충돌 순서</strong> — 1차 vs 2차 vs 3차 충돌의 시간 순서.</li>\n<li><strong>안전거리 의무</strong> — 후행 차량 원칙 책임.</li>\n<li><strong>선행 차량 급정거</strong> — 부득이한 사정 입증 시 면책.</li>\n<li><strong>다자 협상</strong> — 보험사·변호사 협상 트랙.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>한국소비자원 1372 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다중 추돌과 과실 분배',
        summary:
          '대법원 2013다217108(2014.07.24 선고) 영역에서 법원은 다중 추돌사고에서 각 차량의 과실은 충돌 순서·안전거리·시야 조건·선행 차량 급정거의 정당성을 종합 고려해 개별적으로 평가해야 한다고 본 사례 흐름이 있습니다. 정상 정지 후 후방 충격으로 밀린 차량은 무과실 평가가 가능한 영역입니다.',
        takeaway: '다중 추돌은 차량별 과실 별도 평가. 정상 정지 후 밀린 경우 무과실 가능.',
      },
    ],
    faq: [
      {
        question: '본인 차량이 정상 정지 후 밀렸어요',
        answer:
          '<strong>무과실 평가 가능한 영역입니다.</strong> 블랙박스로 충돌 순서 입증.',
      },
      {
        question: '터널이 시야가 안 좋았는데 영향은요?',
        answer:
          '<strong>시야 제약은 안전거리 + 감속 의무 가중 사정입니다.</strong>',
      },
      {
        question: '맨 뒷차가 책임 전부인가요?',
        answer:
          '<strong>원칙적으로 후행 차량 책임 무겁지만 중간 차량도 과실 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '여러 보험사와 협상이 복잡해요',
        answer:
          '<strong>변호사 자문 권장합니다.</strong> 한국소비자원 1372 분쟁조정도 활용 가능.',
      },
      {
        question: '치료비는 어디서 우선 처리하나요?',
        answer:
          '<strong>본인 자동차보험 또는 자동차사고 피해자 지원으로 우선 처리 후 구상합니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 3. traffic-accident-night-pedestrian-jaywalk-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-night-pedestrian-jaywalk-fault-track',
    keyword: '야간 무단횡단 과실',
    questionKeyword: '야간에 무단횡단하다 차에 부딪혔어요. 운전자도 책임 있나요?',
    ctaKeyword: '야간 무단횡단 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '야간 무단횡단 사고 — 5단계 과실 비율 다툼 | 로앤가이드',
      description:
        '야간 무단횡단 중 차량과 사고 났다면 운전자 과실·과실상계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 1시, 횡단보도에서 30m 떨어진 곳을 가로질러 가다 우회전 차량과 부딪혔어요. 운전자는 \"전방 주시 의무 다했고 무단횡단이 잘못\"이라 주장. 본인은 야간 + 음주 상태였습니다. 보험사는 본인 과실 80%로 잡고 있어요.\" 야간 무단횡단 사고는 ① 보행자 무단횡단 과실 ② 운전자 전방 주시·서행 의무 ③ 도로 조명·시야 조건 ④ 보행자 음주·옷 색 등 시인성 ⑤ 운전자 음주·과속 등 가중 사유 5가지가 결합되는 영역. 보행자 과실이 크지만 운전자도 면책되지 않고 통상 30~50% 책임이 잔존하는 트랙. 대응은 ① 현장 자료 ② 도로 조건 ③ 의료 기록 ④ 보험 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 야간 무단횡단 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·과실·치료·보험·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 현장·도로 조건</strong> — 조명·횡단보도 거리·차량 속도.</li>\n<li><strong>② 보행자·운전자 과실 비율</strong> — 통상 보행자 50~70%.</li>\n<li><strong>③ 운전자 가중 사유</strong> — 음주·과속·신호 위반.</li>\n<li><strong>④ 자동차보험 청구</strong> — 운전자 책임보험 + 종합보험.</li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 야간 무단횡단도 운전자 책임 완전 면책 어려운 영역. 통상 운전자 30~50% 책임 잔존. 운전자 음주·과속 시 본인 과실 비율 크게 낮아짐.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·CCTV·도로 조명·횡단보도 거리.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 의료 기록 (즉시)</strong> — 진단서·치료 영수증.</li>\n<li><strong>4단계 — 자동차보험 청구</strong> — 책임보험·종합보험.</li>\n<li><strong>5단계 — 민사 손해배상·소송 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">야간 무단횡단 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV·현장 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>도로 조명·횡단보도 거리 측정 자료</strong></li>\n<li><strong>운전자 음주측정·속도 측정 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>휴업손해·일실수입 자료</strong></li>\n<li><strong>본인 의류 시인성 (밝은색·반사재 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전자가 음주·과속·신호 위반·휴대폰 사용 중이었다면 본인 과실 비율 크게 낮아짐. 경찰 조사 결과 + 차량 EDR(사고기록장치) 자료 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보행자 과실 비율</strong> — 통상 50~70%, 야간 가중.</li>\n<li><strong>운전자 전방 주시</strong> — 야간이라도 전조등 범위 내 책임.</li>\n<li><strong>운전자 가중 사유</strong> — 음주·과속·신호 위반은 본인 과실 비율 감산.</li>\n<li><strong>도로 조건</strong> — 가로등·횡단보도 거리.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무단횡단과 운전자 책임',
        summary:
          '대법원 2021다10046(2022.10.14 선고) 영역에서 법원은 야간 무단횡단 사고에서 운전자가 전방 주시 의무를 다했다고 평가될 수 있는지를 도로 조명·시야 조건·차량 속도·보행자의 시인성을 종합 고려해 판단해야 한다고 본 사례 흐름이 있습니다. 보행자가 음주 상태였더라도 운전자 책임이 완전히 면책되지 않을 여지가 있는 영역입니다.',
        takeaway: '야간 무단횡단도 운전자 완전 면책 어려움. 운전자 음주·과속 시 본인 과실 비율 크게 감산.',
      },
    ],
    faq: [
      {
        question: '본인이 음주 상태였어요',
        answer:
          '<strong>본인 과실 가산 사유지만 운전자 책임이 완전 면책되지 않는 영역입니다.</strong>',
      },
      {
        question: '운전자가 음주측정 거부했어요',
        answer:
          '<strong>본인 과실 비율 크게 낮아지는 강한 사정입니다.</strong>',
      },
      {
        question: '횡단보도가 가까이 있는데도 무단횡단이면요?',
        answer:
          '<strong>본인 과실 가산입니다.</strong> 통상 60~70%.',
      },
      {
        question: '도로가 어두웠다면 운전자에게 유리한가요?',
        answer:
          '<strong>운전자에게 야간 서행 의무가 가중되어 책임 비율이 잔존합니다.</strong>',
      },
      {
        question: '치료비 우선 처리는 어떻게 하나요?',
        answer:
          '<strong>운전자 자동차보험에 자동차손해배상보장법상 가지급금 청구 가능합니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 4. traffic-accident-dashcam-altered-evidence-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-dashcam-altered-evidence-track',
    keyword: '블랙박스 변조 의심',
    questionKeyword: '상대 차량 블랙박스가 시각 조작 의심돼요. 어떻게 입증하나요?',
    ctaKeyword: '블랙박스 변조 입증 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '블랙박스 변조 의심 — 5단계 디지털 포렌식 다툼 | 로앤가이드',
      description:
        '상대측 블랙박스 영상이 편집·조작 의심된다면 포렌식·증거능력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교차로 직진 중 좌회전 차량이 본인 차에 부딪혔는데, 상대가 제출한 블랙박스 영상은 \"본인이 신호 위반\"한 것처럼 시작 시각이 어색합니다. 영상에 압축 흔적·시각 점프 표시가 보이고 음성도 끊깁니다. 보험사는 영상을 그대로 신뢰하고 있어요.\" 디지털 영상은 ① 메타데이터(촬영 시각·기기 정보) ② 비트레이트·압축 일관성 ③ 음성 동기화 ④ 프레임 누락·시간 점프 흔적 5가지로 변조 입증이 가능한 영역. 변조 입증 시 ① 증거능력 부정 ② 형사상 증거인멸·위계공무집행방해 ③ 민사 손해배상 가중 트랙으로 확장됩니다. 대응은 ① 원본 보존 요청 ② 포렌식 신청 ③ 변조 입증 ④ 보험 분쟁 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 블랙박스 변조 의심 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 원본·포렌식·증거·보험·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 원본 영상 보존 요청</strong> — 상대 측·보험사에 원본 제출 요구.</li>\n<li><strong>② 디지털 포렌식 신청</strong> — 국과수·민간 포렌식.</li>\n<li><strong>③ 변조 입증 자료</strong> — 메타데이터·비트레이트·시각 점프.</li>\n<li><strong>④ 보험 분쟁조정·소비자원</strong></li>\n<li><strong>⑤ 민사 손해배상·형사 고소 (증거인멸)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변조 입증 시 영상의 증거능력 자체가 부정 → 보험사 과실 판단 재검토 + 변조 측에 형사 + 민사 손해배상 가중 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 입증 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 원본·포렌식·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 원본 영상 보존 요청 (즉시)</strong> — 내용증명으로 보험사·상대측.</li>\n<li><strong>2단계 — 포렌식 신청 (1~2개월)</strong> — 국과수 또는 민간 포렌식.</li>\n<li><strong>3단계 — 변조 입증 (포렌식 결과)</strong> — 메타데이터·시각 점프.</li>\n<li><strong>4단계 — 보험 분쟁조정 (한국소비자원 1372)</strong> — 30~60일 처리.</li>\n<li><strong>5단계 — 민사 손해배상 + 형사 증거인멸 고소</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">블랙박스 변조 입증 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상·포렌식·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스 (전후방)</strong></li>\n<li><strong>상대 측 블랙박스 영상 (보험사 제공)</strong></li>\n<li><strong>주변 CCTV·교차로 카메라</strong></li>\n<li><strong>원본 영상 보존 요청 내용증명</strong></li>\n<li><strong>포렌식 의뢰서·결과서</strong></li>\n<li><strong>차량 EDR(사고기록장치) 데이터</strong></li>\n<li><strong>경찰 조사 결과·교통사고사실확인원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영상 메타데이터(촬영 시각·GPS·기기 정보)가 본인 사용 블랙박스 기기와 일치하지 않으면 변조 강한 사정. 보험사에 원본 제출 의무 명시.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>원본 vs 편집본</strong> — 원본 제출 거부도 변조 사정 추정.</li>\n<li><strong>메타데이터</strong> — 시각·GPS·기기 정보 검증.</li>\n<li><strong>EDR 데이터</strong> — 차량 자체 사고 기록 비교.</li>\n<li><strong>포렌식 비용</strong> — 민간 100~300만원, 국과수 무료(경찰 의뢰).</li>\n<li><strong>형사 증거인멸</strong> — 형법 155조: 5년 이하 징역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영상 증거의 증거능력',
        summary:
          '대법원 2025도1049(2025.06.12 선고) 영역에서 법원은 디지털 영상이 증거로 제출된 경우 그 동일성·무결성이 인정되어야 증거능력이 부여되며, 편집·조작 흔적이 인정된다고 평가될 수 있는 경우 증거능력이 부정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '영상 무결성 입증 책임은 제출자에게. 변조 입증 시 증거능력 부정 + 형사 + 민사 가중.',
      },
    ],
    faq: [
      {
        question: '상대 측이 원본 제출을 거부하면요?',
        answer:
          '<strong>거부 자체가 변조 의심 강한 사정입니다.</strong> 보험 분쟁조정·민사 소송에서 불리한 추정.',
      },
      {
        question: '포렌식 비용은 누가 부담하나요?',
        answer:
          '<strong>본인 비용 선부담 후 변조 입증 시 손해배상 청구 가능합니다.</strong> 경찰 신고 시 국과수 무료 가능.',
      },
      {
        question: 'EDR 데이터로도 입증 가능한가요?',
        answer:
          '<strong>EDR은 차량 속도·브레이크·핸들 각도를 기록해 영상과 교차 검증 가능합니다.</strong>',
      },
      {
        question: '보험사가 변조 영상을 계속 신뢰하면요?',
        answer:
          '<strong>한국소비자원 분쟁조정 신청 또는 민사 소송으로 다툽니다.</strong>',
      },
      {
        question: '증거인멸 형사 고소도 가능한가요?',
        answer:
          '<strong>형법 155조 증거인멸죄: 5년 이하 징역 또는 700만원 이하 벌금입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 분쟁조정', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 5. traffic-accident-foreign-driver-license-recognize-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-foreign-driver-license-recognize-track',
    keyword: '외국인 운전자 사고',
    questionKeyword: '외국인 운전자에게 사고 당했는데 국제면허도 없었어요. 보상 가능한가요?',
    ctaKeyword: '외국인 운전자 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 운전자 사고 — 5단계 무면허·보험 다툼 | 로앤가이드',
      description:
        '외국인 운전자에게 사고 당했고 국제면허·국내면허 미인증 상태였다면 보상·소송 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여행 와서 한국 운전 처음 한다는 외국인이 본인 차를 들이받았어요. 국내 면허도 국제면허도 없었고, 임대차로 빌린 차량이었습니다. 렌터카 회사는 \"보험 가입했으니 보험사로 청구하라\"고만 합니다. 보험사는 \"무면허 운전이라 면책\"이라고 거부하네요.\" 외국인 무면허 운전 사고는 ① 자동차손해배상보장법(자배법) 적용 + ② 무면허 면책 조항 효력 ③ 정부보장사업(국토부) 적용 가능성 ④ 렌터카·임대인 책임 ⑤ 외국인 가해자 인적 추적 5가지 트랙이 결합되는 영역. 무면허라도 자배법상 가지급금·정부보장사업이 안전망. 대응은 ① 현장·신원 자료 ② 보험 청구 ③ 정부보장사업 ④ 렌터카 책임 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 운전자 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 면허·보험·정부보장·렌터카·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가해자 면허 확인</strong> — 국내·국제·자국 면허 + 협약 가입국.</li>\n<li><strong>② 가해자 자동차보험</strong> — 무면허 면책 vs 자배법 의무.</li>\n<li><strong>③ 정부보장사업 신청</strong> — 무보험·무면허 사고 시.</li>\n<li><strong>④ 렌터카·임대인 책임</strong> — 차량 인도 의무.</li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무면허 외국인 사고에도 정부보장사업·자배법 가지급금·렌터카 책임 3중 안전망. 무면허 자체가 가해자 처벌 가중 + 렌터카에 차량 인도 의무 위반 책임 청구.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 면허·보험·정부보장 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 가해자 여권·면허·렌터카 정보.</li>\n<li><strong>2단계 — 경찰 신고·출국정지 요청 (즉시)</strong> — 외국인 가해자 추적.</li>\n<li><strong>3단계 — 정부보장사업 신청 (국토부, 3년 내)</strong> — 사망·후유장해 시.</li>\n<li><strong>4단계 — 렌터카·보험사 청구</strong> — 자배법 가지급금.</li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 운전자 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·신원·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>가해자 여권·국내·국제면허 사본</strong></li>\n<li><strong>렌터카 계약서·차량 정보·보험증서</strong></li>\n<li><strong>경찰 신고·교통사고사실확인원</strong></li>\n<li><strong>외국인 등록증·체류 자격 정보</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>본인 차량 수리 견적</strong></li>\n<li><strong>가해자 자국 보험 정보 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국인 가해자가 출국 위험 있으면 경찰에 즉시 출국정지 요청. 출국정지는 형사 사건 진행 중일 때 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>국제면허 인정</strong> — 비엔나·제네바 협약 가입국만 인정.</li>\n<li><strong>자배법 가지급금</strong> — 피해자 즉시 청구 가능.</li>\n<li><strong>정부보장사업</strong> — 무보험·무면허 사고 시 사망·후유장해 보전.</li>\n<li><strong>렌터카 책임</strong> — 무면허자 차량 인도 시 손해배상.</li>\n<li><strong>외국인 출국정지</strong> — 형사 사건 진행 중 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국토부 정부보장사업 1644-0049</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무면허 운전과 자배법',
        summary:
          '대법원 2009다90269(2010.04.15 선고) 영역에서 법원은 자동차손해배상보장법은 피해자 보호를 목적으로 하여 운전자의 무면허 등의 사정이 있어도 보유자의 손해배상 책임이 면제되지 않는 것이 원칙이라고 평가될 수 있고, 무보험·무면허 사고에 대해서는 정부보장사업이 안전망으로 기능한다고 본 사례 흐름이 있습니다.',
        takeaway: '무면허 외국인 사고도 자배법 + 정부보장사업으로 보전 가능. 렌터카 책임도 별도 청구.',
      },
    ],
    faq: [
      {
        question: '가해자가 자국으로 돌아가면 어떻게 하나요?',
        answer:
          '<strong>형사 사건 진행 중이면 출국정지 신청 가능합니다.</strong> 사후엔 헤이그송달·민사 외국 판결 집행.',
      },
      {
        question: '국제면허만 있어도 운전 가능한가요?',
        answer:
          '<strong>제네바·비엔나 협약 가입국 국제면허만 인정됩니다.</strong> 미가입국은 무면허 평가.',
      },
      {
        question: '정부보장사업은 어떻게 신청하나요?',
        answer:
          '<strong>국토부 정부보장사업 1644-0049 또는 보험개발원에 신청합니다.</strong> 3년 내 청구.',
      },
      {
        question: '렌터카 회사 책임은 어떻게 묻나요?',
        answer:
          '<strong>무면허자에 차량 인도 시 운행자 책임 + 손해배상 청구 가능합니다.</strong>',
      },
      {
        question: '자배법 가지급금은 얼마인가요?',
        answer:
          '<strong>치료비 전액 + 부상 시 50만원·사망 시 1,000만원입니다.</strong> 보험사 즉시 청구 가능.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '무보험 사고', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-victim-claim-track' },
      { label: '정부보장사업', href: '/guide/traffic-accident/traffic-accident-government-guarantee-program' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },
];
