import { SpokePage } from '../spoke-pages';

// batch71 defame-jeonse-stalking — 7개 (2026-05-21)
//
// 고유 존재 이유:
// 1. defamation-medical-malpractice-anonymous-blog-doctor-victim-track — 환자·가족이 익명 블로그에 "병원 OO이 의료사고로 사망"이라고 작성, 의사 측 명예훼손 피해. 의료 + 익명 블로그 + 사실 확인 어려움 + 영업방해 결합 트랙. workplace-rumor-response·anonymous-review-bombing 과 분기, victim=의사 입장으로 5/11 TIER defamation-accused-response 와도 분기.
// 2. defamation-employee-glassdoor-style-anonymous-review-company-accused-track — 전 직원이 잡플래닛·블라인드에 "회사가 임금체불·갑질" 익명 후기 → 회사 측 명예훼손 고소. 직원 리뷰 플랫폼 + 익명 보호 + 진실성 다툼 + 사실적시 명예훼손 트랙. workplace-rumor-complaint-prep·sns-company-defamation-immediate 와 분기, accused 관점.
// 3. defamation-celebrity-tabloid-rumor-personal-life-track — 연예인·공인이 타블로이드(가십지)에 사생활 루머 보도 → 명예훼손. 타블로이드 + 사생활 + 공인 한계 트랙. public-figure-criticism-protect / public-figure-standard 와 분기.
// 4. jeonse-bank-mortgage-foreclosure-deposit-priority-track — 임대인 채무로 은행 근저당이 경매 신청 → 임차인 보증금 우선변제권. 근저당 경매 + 소액임차인 최우선변제 + 배당요구 트랙. multi-creditor-deposit-priority / tax-arrears-priority-payment 와 분기.
// 5. jeonse-house-fire-damage-deposit-recovery-rebuilding-track — 전세집 화재로 거주 불가 → 보증금 반환 + 손해배상. 화재 + 임차인 책임 분쟁 + 보증금 반환 절차 트랙 (신규 영역).
// 6. stalking-coworker-after-work-following-route-track — 직장 동료가 퇴근 후 미행·SNS 모니터링 → 스토킹처벌법. 퇴근 동선 + 미행 + 직장 외 영역 + 임시조치 트랙. workplace-coworker-criminal / workplace-coworker-after-resign 과 분기. 5/11 TIER stalking-complaint-withdrawal-effect 회피.
// 7. stalking-online-game-voice-chat-repeat-private-message-track — 온라인 게임 보이스 채팅에서 만난 상대가 게임 외 SNS·전화로 반복 연락. 온라인 게임 + 보이스 채팅 + 게임 외 추적 + 본인 정보 노출 트랙. sns-dm-block-fake-account-repeat 와 분기.

export const spokesBatch71DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-medical-malpractice-anonymous-blog-doctor-victim-track ───
  {
    domain: 'defamation',
    slug: 'defamation-medical-malpractice-anonymous-blog-doctor-victim-track',
    keyword: '의료사고 익명 블로그 의사 명예훼손',
    questionKeyword: '환자 가족이 익명 블로그에 "OO병원이 의료사고로 환자를 사망시켰다"는 글을 올려 의사인 본인의 평판과 영업이 큰 타격을 입었어요. 어떻게 대응해야 하나요?',
    ctaKeyword: '의료사고 익명 블로그 의사 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '의료사고 익명 블로그 의사 명예훼손 — 5단계 사실확인·영업방해 다툼 | 로앤가이드',
      description:
        '환자·가족이 익명 블로그에 의료사고 글을 올려 의사가 피해를 본다면 사실확인·영업방해 결합 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 운영하는 외과의원에서 수술 후 사망한 환자의 가족이 익명 블로그에 \"OO병원 OOO 원장이 명백한 의료과실로 환자를 사망시켰고, 사과·배상도 안 한다\"는 글을 올렸어요. 의료분쟁조정중재원 절차도 진행 중이고 과실 여부 자체가 다투어지는 영역인데, 블로그 글이 검색 상위에 노출되면서 환자 예약이 30%까지 줄고 다른 환자들도 \"그 글 봤다\"며 문의가 들어옵니다.\" 의료사고 익명 블로그 명예훼손은 ① 정통망법 70조(정보통신망 명예훼손) ② 형법 314조 업무방해 결합 ③ 익명 작성자 IP·계정 추적 ④ 블로그·검색엔진 삭제·블라인드 ⑤ 민사 손해배상·영업손실 5가지 트랙이 결합되는 영역. 의료 영역은 사실 확인이 어려워 \"의혹 제기\" 형식의 표현이 흔하며 의견·사실 구분 다툼 핵심. 대응은 ① 보존 ② 삭제 ③ 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 의료사고 익명 블로그 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·삭제·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 익명 블로그 글·댓글·공유 흐름 캡처 보존</strong></li>\n<li><strong>② 네이버·다음·구글 삭제·블라인드 요청</strong></li>\n<li><strong>③ 작성자 IP·계정·접속기록 추적 (사이버수사)</strong></li>\n<li><strong>④ 정통망법 70조 + 형법 314조 업무방해 고소</strong></li>\n<li><strong>⑤ 민사 손해배상 + 영업손실·매출 감소 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의료사고 글은 "의혹 제기" 형태라도 구체적 사실 적시 + 병원·의사 특정성이 결합되면 명예훼손 평가가 검토되는 영역. 의료분쟁조정중재원 절차 진행 중인 사실 자체는 적시 가능하나 "명백한 과실" 단정 표현은 다툼. 영업방해는 매출 감소·예약 취소 자료가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·삭제·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블로그 글·공유·검색 노출 캡처 보존 (즉시)</strong></li>\n<li><strong>2단계 — 네이버·다음·구글 삭제·블라인드 요청 + 방심위 신고 (3~14일)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고 + 작성자 IP·계정 협조 요청</strong></li>\n<li><strong>4단계 — 정통망법 70조 + 업무방해 314조 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 영업손실(예약 감소·매출) 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">의료사고 익명 블로그 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 블로그·의료기록·영업피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>익명 블로그 글·댓글·공유 캡처 (URL·시점 포함)</strong></li>\n<li><strong>검색엔진 노출 결과·키워드 자료</strong></li>\n<li><strong>의료분쟁조정중재원 진행 자료·진료기록</strong></li>\n<li><strong>병원 예약 감소·매출 변동 자료 (전년 동기 대비)</strong></li>\n<li><strong>플랫폼·검색엔진 삭제 요청 접수증·답변</strong></li>\n<li><strong>환자 문의·취소 메시지·전화 녹취</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의료사고 명예훼손은 "구체적 사실 적시 vs 의혹 제기·의견" 구분이 다툼 핵심. "확인되지 않은 추측"을 단정형으로 적었으면 허위 명예훼손 평가 영역. 영업손실은 전년 동기 매출·예약·환자수 비교가 핵심 자료. 의료분쟁조정중재원 결과 전이라도 즉시 보존·삭제 트랙 진행 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 vs 의혹·의견</strong> — 표현 형식 다툼.</li>\n<li><strong>특정성</strong> — 병원명·의사 실명 결합.</li>\n<li><strong>공익성 다툼</strong> — 환자 권익 보호 vs 영업방해.</li>\n<li><strong>업무방해 결합</strong> — 별개 죄.</li>\n<li><strong>영업손실 인과</strong> — 매출 감소 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 언론보도 진실성·중요부분 합치 기준',
        summary:
          '대법원 2022도10369(2024.07.18 선고) 영역에서 법원은 정보통신망을 통한 명예훼손에서 적시 사실이 의혹 제기 형식이라 하더라도 객관적으로 보아 그 의혹이 사실인 것처럼 받아들여질 수 있는 정도이고 그 내용에 진실성이 인정되지 않으면 명예훼손에 해당할 수 있다는 점, 다만 공공의 이익에 관한 사항으로 그 동기·목적의 정당성과 표현 방법 등 종합 고려해 위법성이 조각될 수 있다는 점을 다룬 사례 흐름이 있습니다.',
        takeaway: '의혹 제기 형식이라도 사실 단정처럼 받아들여지면 명예훼손 평가가 검토되는 영역. 공익성·표현 방법 결합 평가.',
      },
    ],
    faq: [
      {
        question: '"의혹 제기"라고 쓰면 명예훼손이 안 되나요?',
        answer:
          '<strong>형식이 의혹이라도 사실로 받아들여질 수 있으면 명예훼손 평가가 검토되는 영역입니다.</strong>',
      },
      {
        question: '의료분쟁중재 결과가 나오기 전인데 신고 가능한가요?',
        answer:
          '<strong>중재 결과와 무관하게 글 자체의 사실관계·표현으로 별도 평가 가능합니다.</strong>',
      },
      {
        question: '영업방해도 같이 고소 가능한가요?',
        answer:
          '<strong>형법 314조 업무방해는 명예훼손과 별개 죄로 결합 고소가 가능합니다.</strong>',
      },
      {
        question: '검색에서 글이 안 보이게 할 수 있나요?',
        answer:
          '<strong>네이버·구글 삭제·블라인드 요청 + 방심위 시정 요구로 진행 가능한 영역입니다.</strong>',
      },
      {
        question: '매출 감소 손해배상은 어떻게 산정되나요?',
        answer:
          '<strong>전년 동기 매출·예약 자료 대비 감소분과 글 노출 인과관계 입증이 핵심입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
      { label: '리뷰 폭탄 영업방해', href: '/guide/defamation/defamation-anonymous-review-bombing-business-victim' },
    ],
  },

  // ─── 2. defamation-employee-glassdoor-style-anonymous-review-company-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-employee-glassdoor-style-anonymous-review-company-accused-track',
    keyword: '잡플래닛 블라인드 익명 후기 회사 명예훼손 고소',
    questionKeyword: '본인이 퇴사한 회사에 대해 잡플래닛·블라인드에 익명으로 임금체불·갑질 후기를 올렸는데 회사가 작성자를 추적해 명예훼손으로 고소했어요. 어떻게 방어하나요?',
    ctaKeyword: '잡플래닛 블라인드 익명 후기 작성자 고소 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '잡플래닛 블라인드 익명 후기 명예훼손 — 5단계 진실성·공익성 방어 | 로앤가이드',
      description:
        '잡플래닛·블라인드 익명 후기로 회사로부터 명예훼손 고소를 받았다면 혐의를 받고 있다면 진실·공익 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 1년 다니던 회사를 퇴사한 후 잡플래닛에 \"야근수당 미지급 일상, 대표의 인격모독 발언 잦음\"이라는 후기를 올렸어요. 본계정이 아닌 별도 메일로 가입한 익명 계정이었는데, 회사가 \"퇴사 시점·재직기간이 일치한다\"며 본인을 작성자로 특정해 정통망법 70조 명예훼손으로 고소했어요. 본인이 적은 내용은 실제 겪은 일이지만 \"인격모독\"이라는 표현이 거칠었던 점이 걸리는 영역입니다.\" 직원 리뷰 플랫폼 후기 명예훼손은 ① 정통망법 70조 1항(진실 적시) vs 2항(허위) 구분 ② 형법 310조 공공의 이익(구직자 정보 제공) 위법성 조각 ③ 사실 적시 입증자료(임금명세·녹취) ④ 표현 방법·과장 인격 모욕 별도 평가 ⑤ 반성문·합의 양형 5가지 트랙이 결합되는 영역. 혐의를 받고 있다면 사실관계 입증 + 구직자 권익 공익성이 핵심. 대응은 ① 사실 ② 공익 ③ 표현 ④ 진술 ⑤ 합의 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 잡플래닛 익명 후기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·공익·표현·진술·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후기 내용 사실관계 입증자료(임금명세·근태·녹취)</strong></li>\n<li><strong>② 형법 310조 공공의 이익(구직자 정보 제공) 입증</strong></li>\n<li><strong>③ 표현 방법·인격 모욕 부분 별도 점검</strong></li>\n<li><strong>④ 경찰·검찰 진술 전략 + 변호인 동석</strong></li>\n<li><strong>⑤ 합의·반성문 양형 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 잡플래닛·블라인드 후기는 다수 구직자 열람으로 공공연성 인정 영역. 내용이 사실이면 정통망법 70조 1항(진실 적시 정통망 명예훼손, 3년 이하), 허위면 2항(7년 이하). 진실 적시라도 공공의 이익 입증되면 위법성 조각이 검토되는 영역. 익명 보호는 절대적이지 않으며 IP·가입정보로 작성자 특정 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·공익·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 내용 사실관계 입증자료 수집 (즉시·근로계약·임금명세)</strong></li>\n<li><strong>2단계 — 공공의 이익 목적 진술 정리 (구직자 정보·산업안전)</strong></li>\n<li><strong>3단계 — 표현 방법 과장·인격 모욕 부분 별도 검토</strong></li>\n<li><strong>4단계 — 경찰 진술 + 변호인 동석 + 반박 진술서</strong></li>\n<li><strong>5단계 — 회사 측 합의·반성문 + 후기 수정·삭제 검토</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">잡플래닛 후기 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로기록·후기·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·임금명세서·근태기록</strong></li>\n<li><strong>야근·휴일근로 입증 자료(메신저·교통카드)</strong></li>\n<li><strong>대표·상사 발언 녹취·증인 진술</strong></li>\n<li><strong>후기 원본·작성 시점·수정 이력</strong></li>\n<li><strong>회사 측 고소장·진술서·작성자 특정 근거</strong></li>\n<li><strong>퇴사 사유서·인사기록</strong></li>\n<li><strong>변호인 의견서·반성문(필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진실 적시라도 인격 모욕 표현(예: "사이코패스", "쓰레기")이 섞이면 모욕죄 별도 평가가 검토되는 영역. 구직자 권익·산업안전 정보 공유는 공익성 강력 사유. 후기 수정·삭제 + 반성문은 양형에 의미 있는 부분. 회사가 진실 적시 70조 1항으로만 고소했어도 허위 2항 추가 평가 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 vs 허위</strong> — 70조 1항/2항 구분.</li>\n<li><strong>공공의 이익</strong> — 구직자 권익 보호.</li>\n<li><strong>표현 방법 과장</strong> — 모욕 별도 평가.</li>\n<li><strong>익명 보호 한계</strong> — IP·가입정보 추적.</li>\n<li><strong>회사 영업방해</strong> — 314조 결합 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시·공공의 이익 위법성 조각',
        summary:
          '대법원 2025도4697(2025.05.01 선고) 영역에서 법원은 어떤 표현이 허위사실 공표에 해당하는지 판단할 때 사실 세부에 진실과 약간 차이가 있거나 다소 과장된 표현이 있어도 내용 전체 취지로 보아 중요한 부분이 객관적 사실과 합치되는 경우 이를 허위사실로 단정하기 어렵고, 또한 공공의 이익에 관한 사실로서 표현 동기·목적·방법 등을 종합해 위법성이 조각될 수 있는지 다룬 사례 흐름이 있습니다.',
        takeaway: '근로조건·임금체불 같은 구직자 정보 공유는 공공의 이익에 해당할 수 있는 영역. 중요부분 진실성 입증 핵심.',
      },
    ],
    faq: [
      {
        question: '익명 후기인데 어떻게 본인이 특정됐나요?',
        answer:
          '<strong>플랫폼이 IP·가입 메일·휴대전화 인증 정보를 영장·사실조회에 협조하면 특정 가능합니다.</strong>',
      },
      {
        question: '내용이 사실이면 무죄인가요?',
        answer:
          '<strong>정통망법 70조 1항은 처벌 대상이나 310조 공익 입증 시 위법성 조각이 검토됩니다.</strong>',
      },
      {
        question: '"갑질"이라는 표현이 모욕인가요?',
        answer:
          '<strong>구체적 사실 결합 시 명예훼손, 단순 인격모독 표현이면 모욕죄 별도 평가 영역입니다.</strong>',
      },
      {
        question: '후기를 삭제하면 처벌이 줄어드나요?',
        answer:
          '<strong>삭제·합의·반성문은 양형에 의미 있는 요소가 됩니다.</strong>',
      },
      {
        question: '구직자 권익이라고 항변해도 되나요?',
        answer:
          '<strong>공공의 이익 사유로 310조 위법성 조각 항변이 검토되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '가해자 대응 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '온라인 리뷰 진실 방어', href: '/guide/defamation/defamation-online-review-truth-defense' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 3. defamation-celebrity-tabloid-rumor-personal-life-track ───
  {
    domain: 'defamation',
    slug: 'defamation-celebrity-tabloid-rumor-personal-life-track',
    keyword: '연예인 타블로이드 사생활 루머 명예훼손',
    questionKeyword: '본인이 공인·연예인인데 타블로이드 가십지가 사생활(열애·이혼·재산)에 대한 루머성 기사를 반복 보도해 피해가 큽니다. 공인이라는 이유로 다 감수해야 하나요?',
    ctaKeyword: '연예인 타블로이드 사생활 루머 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연예인 타블로이드 사생활 루머 명예훼손 — 5단계 공인 한계·정정보도 다툼 | 로앤가이드',
      description:
        '연예인·공인이 타블로이드 가십지의 사생활 루머 보도로 피해를 본다면 공인 한계·정정보도 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 활동 중인 배우인데 한 가십 매체가 \"OOO 비밀 결혼·이혼 후 위자료 분쟁\" \"OOO 재산 빼돌리기 의혹\" 등 출처도 불분명한 사생활 기사를 일주일에 두세 건씩 내고 있어요. 본인은 이혼 자체를 한 적이 없고 재산 분쟁도 없는 영역인데, 기사가 포털 메인에 노출되며 댓글 수천 건이 달리고 광고 계약도 보류된 상태입니다.\" 연예인 타블로이드 사생활 루머는 ① 형법 307조 + 정통망법 70조(허위 사실 적시) ② 공인 한계 = 공적 활동·정치적 발언은 비판 보호, 순수 사생활은 사인 수준 보호 ③ 정정보도·반론보도(언론중재법) ④ 가처분(보도 금지·기사 삭제) ⑤ 민사 손해배상·위자료 5가지 트랙이 결합되는 영역. 사생활 영역은 공인이라도 사인 수준 보호 영역. 대응은 ① 보존 ② 중재 ③ 가처분 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연예인 타블로이드 사생활 루머 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·중재·가처분·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기사·댓글·포털 노출·확산 흐름 캡처 보존</strong></li>\n<li><strong>② 언론중재위원회 정정·반론보도 신청 (3개월 내)</strong></li>\n<li><strong>③ 보도 금지·기사 삭제 가처분 신청</strong></li>\n<li><strong>④ 형사 명예훼손 고소(307조 2항·정통망법 70조 2항)</strong></li>\n<li><strong>⑤ 민사 손해배상·위자료 + 광고 손실 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공인 한계는 "공적 활동·정치적 발언"에만 적용되는 영역. 결혼·이혼·재산 같은 순수 사생활은 공인도 사인 수준 명예·프라이버시 보호 평가가 검토되는 영역. 언론중재위 조정은 3개월 내 신청 + 빠른 정정보도 트랙. 가처분은 추가 보도 차단에 효과적. 기사 작성자·매체 모두 책임 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·중재·가처분 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 기사·댓글·포털 노출·확산 캡처 보존 (즉시)</strong></li>\n<li><strong>2단계 — 언론중재위원회 정정·반론보도 신청 (3개월 내)</strong></li>\n<li><strong>3단계 — 보도 금지·기사 삭제 가처분 (1~2주)</strong></li>\n<li><strong>4단계 — 형사 명예훼손 고소(매체·기자 양트랙)</strong></li>\n<li><strong>5단계 — 민사 손해배상·위자료 + 광고·출연 손실 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">타블로이드 사생활 루머 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기사·중재·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>기사 원문·게재일·매체명·기자명</strong></li>\n<li><strong>포털 노출 시점·댓글·공유 자료</strong></li>\n<li><strong>본인 사실관계 입증자료(혼인관계증명·재산 자료)</strong></li>\n<li><strong>언론중재위원회 신청서·조정 결과</strong></li>\n<li><strong>가처분 신청서·결정문</strong></li>\n<li><strong>광고 계약 보류·출연 취소 자료</strong></li>\n<li><strong>본인 정신적 피해·이미지 손실 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 언론중재위 조정은 무료 + 빠른 정정보도 효과가 강한 트랙. 매체와 기자 모두 별도 책임 평가 영역. 위자료는 매체 영향력·확산 범위·사생활 침해 정도에 따라 사례별 차이가 큰 영역. 광고·출연 손실은 인과관계 입증되면 청구 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공인 한계</strong> — 공적 활동 vs 사생활.</li>\n<li><strong>진실성·공익성</strong> — 매체 항변 영역.</li>\n<li><strong>정정보도 vs 손해배상</strong> — 병행 가능.</li>\n<li><strong>가처분 효력</strong> — 추가 보도 차단.</li>\n<li><strong>광고 손실 인과</strong> — 별도 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>언론중재위원회 02-397-3114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공적 인물 사생활 보호 한계',
        summary:
          '대법원 2024도14555(2025.03.27 선고) 영역에서 법원은 공적 인물에 대한 비판적 보도라도 사실 적시가 허위이거나 표현이 인격권 핵심을 침해하는 경우 명예훼손이 성립할 수 있고, 공적 인물의 공적 활동·정치적 발언 영역과 순수한 사생활 영역에서 표현의 자유와 명예 보호의 균형이 달라질 수 있다는 점, 사생활 영역에서는 사인 수준의 보호가 적용된다고 본 사례 흐름이 있습니다.',
        takeaway: '공인이라도 결혼·이혼·재산 같은 순수 사생활은 사인 수준 보호 영역. 허위 단정형 사생활 보도는 명예훼손 평가 검토.',
      },
    ],
    faq: [
      {
        question: '공인이라 사생활 보도도 감수해야 하나요?',
        answer:
          '<strong>공적 활동은 비판 보호 강하지만 순수 사생활은 사인 수준 보호가 적용되는 영역입니다.</strong>',
      },
      {
        question: '언론중재위 조정은 얼마나 걸리나요?',
        answer:
          '<strong>접수 후 약 14일 내 조정기일이 잡히고 통상 1~2개월 내 결과가 나오는 영역입니다.</strong>',
      },
      {
        question: '기사 작성자와 매체 모두 고소 가능한가요?',
        answer:
          '<strong>기자·편집인·매체 법인 각각 별도 책임 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '가처분으로 추가 기사를 막을 수 있나요?',
        answer:
          '<strong>보도 금지·기사 삭제 가처분 신청이 가능하며 통상 1~2주 내 결정됩니다.</strong>',
      },
      {
        question: '광고 손실도 청구 가능한가요?',
        answer:
          '<strong>보도와 광고 보류·출연 취소 인과관계 입증되면 청구 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '공인 비판 보호 한계', href: '/guide/defamation/defamation-public-figure-criticism-protect' },
      { label: '온라인 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 4. jeonse-bank-mortgage-foreclosure-deposit-priority-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-bank-mortgage-foreclosure-deposit-priority-track',
    keyword: '근저당 경매 임차인 보증금 우선변제',
    questionKeyword: '임대인이 은행 대출을 못 갚아 은행이 집을 경매에 부쳤어요. 임차인인 본인의 보증금을 어떻게 우선변제 받을 수 있나요?',
    ctaKeyword: '근저당 경매 임차인 보증금 우선변제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '근저당 경매 임차인 보증금 우선변제 — 5단계 배당요구·소액임차인 다툼 | 로앤가이드',
      description:
        '임대인 채무로 은행이 경매를 신청한 임차인이라면 우선변제·소액임차인 최우선변제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 1억 5천만원으로 살던 집의 등기부등본을 떼어 보니 은행 근저당이 본인 입주 전에 이미 설정돼 있었고, 최근 임대인이 대출을 못 갚자 은행이 임의경매를 신청해 경매 개시 결정 통지를 받았어요. 본인의 보증금을 한 푼이라도 돌려받을 수 있는지, 받으려면 어떤 절차를 밟아야 하는지 막막한 영역입니다.\" 임대인 채무 근저당 경매는 ① 주임법 3조의2 우선변제권(확정일자+대항요건) ② 소액임차인 최우선변제(8조) — 보증금 일정액 이하 최우선 ③ 배당요구 종기 내 신청 필수(민사집행법) ④ 근저당 설정일 vs 임차인 대항요건 선후 ⑤ 부족분 임대인 상대 본안소송 5가지 트랙이 결합되는 영역. 근저당이 임차인보다 선순위면 매수인에게 대항력 X. 대응은 ① 확인 ② 신고 ③ 배당 ④ 부족분 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 근저당 경매 임차인 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·신고·배당·부족분·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 등기부등본 확인 — 근저당 설정일 vs 본인 대항요건일</strong></li>\n<li><strong>② 경매계 권리신고 + 배당요구 종기 내 신청</strong></li>\n<li><strong>③ 소액임차인 최우선변제 한도 확인</strong></li>\n<li><strong>④ 우선변제권 배당표 검토 + 이의신청</strong></li>\n<li><strong>⑤ 부족분 임대인 상대 보증금 본안소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근저당 설정일이 임차인 대항요건(입주+전입+확정일자)보다 앞서면 임차인은 후순위 — 매각 시 대항력 소멸. 다만 ① 소액임차인 요건 충족 시 최우선변제(현행 서울 1.65억 이하 5,500만원 등) ② 우선변제권으로 잔여 배당이 검토되는 영역. 배당요구 종기 놓치면 배당 자체에서 제외되므로 즉시 신청 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·배당·부족분 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부등본·확정일자·전입 일자 비교 분석 (즉시)</strong></li>\n<li><strong>2단계 — 경매계 권리신고서 + 배당요구신청서 제출 (종기 내)</strong></li>\n<li><strong>3단계 — 소액임차인 해당 여부·최우선변제 한도 확인</strong></li>\n<li><strong>4단계 — 배당표 검토 + 부당 시 배당이의의 소</strong></li>\n<li><strong>5단계 — 부족분 임대인 상대 보증금 본안소송 + 강제집행</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">근저당 경매 보증금 우선변제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고 자료</strong></li>\n<li><strong>등기부등본 (근저당 설정일·말소 이력)</strong></li>\n<li><strong>주민등록등본·점유 시점 자료</strong></li>\n<li><strong>경매 개시 결정문·매각 공고</strong></li>\n<li><strong>권리신고서·배당요구신청서·배당표</strong></li>\n<li><strong>소액임차인 해당 여부 자료(보증금·지역)</strong></li>\n<li><strong>임대인 상대 보증금 반환 청구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배당요구 종기는 첫 매각기일 전에 정해지므로 경매 개시 결정 받으면 즉시 신고 필수. 소액임차인 최우선변제는 근저당보다 앞선 권리로 평가 가능 — 다만 소액임차인 요건(지역별 보증금 한도) 충족돼야. 우선변제권 부분도 확정일자가 빠르면 다른 채권자보다 우선 배당.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근저당 vs 임차인 선후</strong> — 일자 비교.</li>\n<li><strong>소액임차인 최우선</strong> — 지역·보증금 한도.</li>\n<li><strong>배당요구 종기</strong> — 놓치면 제외.</li>\n<li><strong>배당이의의 소</strong> — 부당 배당 시.</li>\n<li><strong>매수인 대항력</strong> — 선순위 시 소멸.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법무사회 02-503-7714</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기 경료 임차인 우선변제 행사',
        summary:
          '대법원 2025다213466(2025.06.26 선고) 영역에서 법원은 임차권등기명령에 따라 임차권등기가 경료된 임차인이 경매 절차에서 우선변제권을 행사하는 방법과 그 범위에 대해 다루며, 임차권등기 경료된 임차인은 별도 배당요구를 하지 않더라도 당연히 배당받을 채권자에 해당하고 자신의 대항요건 + 확정일자에 의한 우선변제권의 순위로 배당받을 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '임차권등기 경료 임차인은 별도 배당요구 없이도 우선변제권 행사 가능 영역. 일반 임차인은 종기 내 배당요구 필수.',
      },
    ],
    faq: [
      {
        question: '근저당이 본인보다 앞서면 보증금을 한 푼도 못 받나요?',
        answer:
          '<strong>소액임차인 최우선변제 + 매각대금 잔여 배당 두 가지가 검토되는 영역입니다.</strong>',
      },
      {
        question: '소액임차인 기준은 어떻게 되나요?',
        answer:
          '<strong>지역·시점별로 다르며 서울 1.65억·과밀억제 1.45억 이하 등으로 정해진 영역입니다.</strong>',
      },
      {
        question: '배당요구는 언제까지 해야 하나요?',
        answer:
          '<strong>경매 매각기일 전 \"배당요구 종기\" 내 신청 필수입니다.</strong>',
      },
      {
        question: '매수인에게 보증금을 청구할 수 있나요?',
        answer:
          '<strong>근저당이 선순위면 대항력 소멸로 매수인에게 청구 어려운 영역입니다.</strong>',
      },
      {
        question: '부족분은 임대인에게 받을 수 있나요?',
        answer:
          '<strong>임대인 상대 본안소송 + 강제집행으로 추가 회수가 검토되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '소액임차인 우선변제', href: '/guide/jeonse/jeonse-auction-small-deposit-priority-repay' },
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '다중 채권자 배당', href: '/guide/jeonse/jeonse-multi-creditor-deposit-priority' },
      { label: '임차권등기 후 미반환', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '보증보험 가입', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
    ],
  },

  // ─── 5. jeonse-house-fire-damage-deposit-recovery-rebuilding-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-house-fire-damage-deposit-recovery-rebuilding-track',
    keyword: '전세집 화재 보증금 반환',
    questionKeyword: '본인이 살던 전세집에 화재가 발생해 거주가 불가능해졌어요. 보증금을 받고 나갈 수 있나요? 화재 책임은 누가 지나요?',
    ctaKeyword: '전세집 화재 보증금 반환 손해배상 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세집 화재 보증금 반환 — 5단계 임차인 책임·손해배상 다툼 | 로앤가이드',
      description:
        '전세집 화재로 거주가 불가능한 임차인이라면 보증금 반환·임차인 책임 입증 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 1억 2천만원으로 1년째 살던 다세대주택에 갑작스러운 화재가 발생해 내부가 거의 다 탔어요. 소방 조사 결과 \"전기적 요인 추정\"으로 나왔는데 정확한 원인이 본인 과실인지 노후 배선인지 불분명한 영역입니다. 집주인은 \"임차인이 관리 부실로 불낸 거 아니냐, 보증금에서 복구비를 공제하겠다\"며 보증금 반환을 거부하고 있고, 본인은 당장 잘 곳도 없는 상황입니다.\" 전세집 화재 보증금 반환은 ① 민법 623조 임대인 사용·수익 의무(거주 불능 시 계약 해지) ② 임차인 보존의무(374조)·실화책임법 ③ 화재 원인 입증 책임 분쟁(노후 배선 vs 임차인 과실) ④ 임차인 손해배상·동산 보험·임시 거주 ⑤ 보증금 반환·임차권등기 5가지 트랙이 결합되는 영역. 화재 원인 입증이 핵심 — 임차인 과실 명확하지 않으면 임대인 책임. 대응은 ① 보존 ② 원인 ③ 해지 ④ 손해 ⑤ 반환 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전세집 화재 보증금 반환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·원인·해지·손해·반환 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 화재 현장·피해 사진·소방 조사보고서 보존</strong></li>\n<li><strong>② 화재 원인 입증자료 (전기 점검·노후 배선·실화책임법)</strong></li>\n<li><strong>③ 거주 불능 통보 + 임대차 해지 (민법 623조·625조)</strong></li>\n<li><strong>④ 임차인 동산 손해·임시 거주비 청구 검토</strong></li>\n<li><strong>⑤ 보증금 반환 청구 + 임차권등기 + 본안소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 화재 원인이 임차인 과실로 명확히 입증되지 않으면 보증금 반환 절차가 검토되는 영역. 실화책임법상 임차인 \"중대한 과실\" 없으면 임차인 책임 제한. 소방·국과수 조사 결과가 책임 분배 핵심. 임차인은 동산 피해·임시 거주비도 별도 청구 가능. 거주 불능 = 임대차 목적 불달성으로 계약 해지 사유.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·해지·반환 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 화재 현장·소방조사·CCTV 등 증거 즉시 보존</strong></li>\n<li><strong>2단계 — 국과수·소방·전기안전공사 원인 조사 의뢰</strong></li>\n<li><strong>3단계 — 임대인 계약 해지 통보 + 임시 거주지 확보</strong></li>\n<li><strong>4단계 — 임차인 동산 손해·임시 거주비 청구</strong></li>\n<li><strong>5단계 — 보증금 반환 청구 + 임차권등기 + 본안소송</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 계약 종료 후 무엇부터 해야 하는지 AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">화재 후 보증금 반환 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 화재·계약·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>화재 현장 사진·동영상·피해 목록</strong></li>\n<li><strong>소방·국과수·전기안전공사 조사보고서</strong></li>\n<li><strong>임대차계약서·확정일자·전입신고 자료</strong></li>\n<li><strong>입주 시 시설 상태 자료(점검표·사진)</strong></li>\n<li><strong>임차인 동산 손해 자료(가전·가구 영수증)</strong></li>\n<li><strong>임시 거주비·이사 비용 영수증</strong></li>\n<li><strong>임대인 내용증명·답변</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 화재 원인 다툼은 소방·국과수 조사가 핵심 자료. \"전기적 요인 추정\"은 임차인 과실 단정과 다른 결론이라 임대인의 일방적 공제 주장은 다툼 가능. 실화책임법은 \"중대한 과실\" 시에만 임차인 책임 제한 → 단순 부주의는 임차인 책임 제한 검토 영역. 임차권등기 후 새 거주지로 이전 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>화재 원인 책임</strong> — 임대인 vs 임차인.</li>\n<li><strong>실화책임법</strong> — 중대한 과실 기준.</li>\n<li><strong>거주 불능 해지</strong> — 민법 623·625조.</li>\n<li><strong>임차인 동산 피해</strong> — 별도 청구.</li>\n<li><strong>보증금 공제 가부</strong> — 책임 확정 후.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>한국화재보험협회 02-3782-0114</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대인 채무 이행 거절 의사 명백 시 손해배상',
        summary:
          '대법원 2024다283668(2025.07.10 선고) 영역에서 법원은 쌍무계약에서 임대인의 보증금 반환 의무와 임차인의 인도 의무가 동시이행 관계에 있더라도 임대인이 이행 거절 의사를 명백히 한 경우 임차인은 인도 의무 이행 제공 없이도 손해배상을 청구할 수 있고, 거주 불능 등 임대차 목적 불달성 사유가 발생한 경우 해지 + 보증금 반환 청구가 가능하다는 점을 다룬 사례 흐름이 있습니다.',
        takeaway: '화재로 거주 불능 + 임대인 보증금 반환 거절이면 인도 이행 없이도 손해배상·반환 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '화재 원인이 본인 과실이면 보증금을 못 받나요?',
        answer:
          '<strong>중대한 과실이면 임차인 책임 + 공제 가능, 단순 부주의는 책임 제한이 검토됩니다.</strong>',
      },
      {
        question: '거주 불능이면 계약 해지가 바로 되나요?',
        answer:
          '<strong>민법 623·625조에 따라 거주 불능 시 임대차 해지 사유가 검토되는 영역입니다.</strong>',
      },
      {
        question: '임시 거주비도 청구 가능한가요?',
        answer:
          '<strong>임대인 책임 입증 시 임시 거주비·이사비도 손해배상으로 청구 가능합니다.</strong>',
      },
      {
        question: '임대인이 보증금에서 복구비를 공제하면요?',
        answer:
          '<strong>책임 확정 전 일방 공제는 다툼 가능하며 임차권등기·본안소송으로 회수 검토됩니다.</strong>',
      },
      {
        question: '국과수 조사는 누가 신청하나요?',
        answer:
          '<strong>경찰·소방이 직권 의뢰하며 임차인도 별도 추가 감정을 요청할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '계약 종료 후 무엇부터 해야 하는지 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '임차권등기 후 미반환', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '임대인 사망 보증금', href: '/guide/jeonse/jeonse-landlord-death-deposit-return' },
      { label: '보증보험 가입', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '소액임차인 우선변제', href: '/guide/jeonse/jeonse-auction-small-deposit-priority-repay' },
    ],
  },

  // ─── 6. stalking-coworker-after-work-following-route-track ───
  {
    domain: 'stalking',
    slug: 'stalking-coworker-after-work-following-route-track',
    keyword: '직장 동료 퇴근 후 미행 SNS 모니터링 스토킹',
    questionKeyword: '직장 동료가 퇴근 후 본인을 미행하고 SNS 게시물 시간대까지 추적해 어디 갔는지 다음 날 회사에서 슬쩍 흘려요. 어떻게 대응하나요?',
    ctaKeyword: '직장 동료 퇴근 후 미행 SNS 추적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 퇴근 후 미행·SNS 모니터링 — 5단계 직장 외 영역·임시조치 다툼 | 로앤가이드',
      description:
        '직장 동료가 퇴근 후 미행·SNS 모니터링을 한다면 직장 외 영역·임시조치 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서 동료가 본인의 퇴근 후 사적인 동선까지 따라옵니다. 본인이 카페에 들렀던 사실, 친구와 저녁을 먹었던 장소를 다음 날 회사에서 \"어제 OO 카페 다녀오셨더라\"며 흘리고, 본인이 SNS에 올린 게시물에 매번 1분 안에 좋아요·댓글이 달려요. 사적 영역까지 추적당한다는 불안이 커지고, 일을 그만두는 것 외에는 방법이 없는 건지 답답한 영역입니다.\" 직장 동료 퇴근 후 미행·SNS 모니터링은 ① 스토킹처벌법 2조 1호 가목·다목(접근·따라다니기·정보통신망 송신) ② 직장 외 사생활 영역 평가 — 직장 내부보다 가중 사유 ③ 임시조치(접근금지 100m·통신금지·유치) ④ 사이버 모니터링 = 정보통신망 영역 별도 평가 ⑤ 직장 신고는 분리 트랙 5가지가 결합되는 영역. 직장 외 영역 추적은 객관적 불안·공포 평가가 검토되는 영역. 대응은 ① 기록 ② 증거 ③ 신고 ④ 임시조치 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 직장 동료 퇴근 후 미행·SNS 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·증거·신고·임시조치·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 퇴근 후 미행 흐름·SNS 좋아요 시점 기록표</strong></li>\n<li><strong>② CCTV·교통카드·SNS 알림 캡처 보존</strong></li>\n<li><strong>③ 가해자의 \"동선 흘리기\" 회사 내 발언 녹취·증인</strong></li>\n<li><strong>④ 스토킹처벌법 임시조치(접근금지·통신금지) 신청</strong></li>\n<li><strong>⑤ 형사 스토킹범죄 고소 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴근 후 사적 동선 미행은 직장 내부 접촉보다 평가가 더 무거운 영역. 가해자가 다음 날 \"흘리기\"로 피해자에게 추적 사실을 인지시키는 행위 자체가 객관적 불안·공포 평가 가능. SNS 게시물 시간대 추적도 스토킹처벌법 2조 1호 다목(정보통신망 송신·도달) 평가가 검토. 직장 신고와 형사 신고는 분리·병행 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·임시조치·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴근 후 미행·SNS 좋아요·동선 일치 기록표 작성 (즉시)</strong></li>\n<li><strong>2단계 — CCTV·교통카드·SNS 알림 시점 캡처 보존</strong></li>\n<li><strong>3단계 — 회사 내 \"동선 흘리기\" 발언 녹취·증인 확보</strong></li>\n<li><strong>4단계 — 스토킹처벌법 임시조치(접근금지 100m·통신금지) 신청</strong></li>\n<li><strong>5단계 — 형사 스토킹범죄 고소 + 민사 손해배상 + 직장 분리 요구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 동료 퇴근 후 미행·SNS 추적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 미행·SNS·발언 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴근 후 동선·미행 일치 날짜별 기록표</strong></li>\n<li><strong>지하철·버스·택시·카드 이용내역</strong></li>\n<li><strong>SNS 게시물 시점·가해자 좋아요·댓글 시점 캡처</strong></li>\n<li><strong>카페·식당·매장 CCTV 자료</strong></li>\n<li><strong>가해자 회사 내 \"동선 흘리기\" 발언 녹취·증인</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 내 \"흘리기\" 발언은 가해자가 사적 영역 추적을 인지시키는 핵심 증거 — 녹취·증인 진술이 객관적 불안 평가에 결정적. SNS 좋아요 시점은 게시 후 몇 초·몇 분 내 패턴이 입증 자료. 임시조치 \"통신금지\"는 SNS·메신저·전화 알림 송신까지 평가 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>직장 외 영역 평가</strong> — 사생활 침해 강도.</li>\n<li><strong>인지 시점</strong> — 흘리기 발언 시점.</li>\n<li><strong>SNS 모니터링</strong> — 정보통신망 평가.</li>\n<li><strong>임시조치 100m</strong> — 직장·주거 전반.</li>\n<li><strong>분리조치 vs 형사</strong> — 병행 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹범죄 객관적 불안·공포 평가 기준',
        summary:
          '대법원 2025도9717(2025.10.15 선고) 영역에서 법원은 스토킹범죄의 처벌 등에 관한 법률 제2조 제1호 각 목의 행위가 \"객관적·일반적으로 보아 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도\"라고 평가되는 경우 현실적으로 상대방이 불안감을 갖게 되었는지와 관계없이 스토킹행위에 해당할 수 있고, 행위자와 상대방의 관계·지위·성향, 행위 경위·태양, 주변 상황을 종합 고려한다고 본 사례 흐름이 있습니다.',
        takeaway: '직장 동료 퇴근 후 미행·SNS 모니터링도 사적 영역 침해 강도 결합 시 객관적 불안 평가가 검토되는 영역.',
      },
    ],
    faq: [
      {
        question: '직장 동료라 동선이 우연히 겹치는 것 아닌가요?',
        answer:
          '<strong>퇴근 후 사적 동선까지 일치 + 다음 날 \"흘리기\" 발언이면 객관적 평가가 검토되는 영역입니다.</strong>',
      },
      {
        question: 'SNS 게시물 좋아요만 누른 것도 스토킹인가요?',
        answer:
          '<strong>반복·즉각 반응·미행 결합 시 정보통신망 송신 평가가 검토되는 영역입니다.</strong>',
      },
      {
        question: '회사에 알리지 않고 신고 가능한가요?',
        answer:
          '<strong>형사 신고는 회사 통보 의무 없이 단독 진행 가능한 영역입니다.</strong>',
      },
      {
        question: '임시조치는 직장에서도 적용되나요?',
        answer:
          '<strong>100m 접근금지는 직장·주거·일상 동선 전반에 적용 가능한 영역입니다.</strong>',
      },
      {
        question: '직장 분리 요구는 어떻게 하나요?',
        answer:
          '<strong>근로기준법 76조의2 직장 내 괴롭힘 + 인사위원회 분리조치 요청이 검토됩니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '온라인 증거 수집', href: '/guide/stalking/stalking-ex-lover-online-evidence-collect' },
      { label: '익명·다중 계정 추적', href: '/guide/stalking/stalking-multiple-anonymous-account-track' },
      { label: '도주 가해자 추적', href: '/guide/stalking/stalking-suspect-absconded-criminal-track' },
    ],
  },

  // ─── 7. stalking-online-game-voice-chat-repeat-private-message-track ───
  {
    domain: 'stalking',
    slug: 'stalking-online-game-voice-chat-repeat-private-message-track',
    keyword: '온라인 게임 보이스 채팅 게임 외 추적 스토킹',
    questionKeyword: '온라인 게임 보이스 채팅에서 만난 사람이 게임 밖 SNS·전화로 반복 연락하고 본인 실명·직장까지 알아내 접근해요. 신고 가능한가요?',
    ctaKeyword: '온라인 게임 보이스 채팅 게임 외 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게임 보이스 채팅 게임 외 추적 — 5단계 정보 노출·잠정조치 다툼 | 로앤가이드',
      description:
        '온라인 게임 보이스 채팅에서 만난 상대가 게임 밖 SNS·전화로 반복 접근한다면 정보 노출·잠정조치 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 즐기는 온라인 게임 보이스 채팅에서 친해진 상대방이 게임 밖에서 본인 인스타·카카오톡·휴대전화 번호까지 알아내 새벽까지 메시지를 보내고, 본인이 차단하자 \"근무하는 회사를 안다\"며 직장 위치까지 언급하는 메시지를 보내왔어요. 게임 안에서 본인이 흘렸던 사소한 정보(닉네임·지역·직업군)를 조합해 신상을 특정한 것 같고, 게임 외 영역까지 따라온다는 사실에 불안이 큰 영역입니다.\" 온라인 게임 보이스 채팅 게임 외 추적은 ① 스토킹처벌법 2조 1호 다목(정보통신망 송신·도달)·가목(접근) ② 게임 닉네임·지역 정보 조합 신상 특정 ③ 게임 외 SNS·전화·직장 접근 가중 평가 ④ 게임사 신고·계정 정지·기록 보존 ⑤ 잠정조치(통신금지·접근금지) + 형사 5가지 트랙이 결합되는 영역. 게임 외 영역 침범은 가중 사유. 대응은 ① 증거 ② 게임사 ③ 신고 ④ 잠정조치 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 게임 보이스 채팅 게임 외 추적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·게임사·신고·잠정조치·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보이스 채팅·SNS·전화·메시지 캡처 보존</strong></li>\n<li><strong>② 게임사 신고 + 계정·로그 기록 보존 요청</strong></li>\n<li><strong>③ 신상 특정 경로 정리(닉네임→실명·직장 추적)</strong></li>\n<li><strong>④ 스토킹처벌법 잠정조치(통신금지·접근금지) 신청</strong></li>\n<li><strong>⑤ 형사 스토킹범죄 고소 + 사이버수사 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 온라인 게임 보이스 채팅 만남에서 출발한 추적이 SNS·전화·직장 영역까지 확장되면 가중 평가가 검토되는 영역. 본인이 게임 내에서 의도적으로 신상을 공개하지 않았는데 가해자가 정보를 조합해 특정한 경우 스토킹 의도 명확. 게임사는 일정 기간 후 로그를 삭제할 수 있어 신고 + 기록 보존 요청 필수. \"직장 안다\" 메시지는 협박죄(283조) 별도 평가 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·게임사·잠정조치 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보이스 채팅·SNS·전화·메시지 캡처·녹음 보존 (즉시)</strong></li>\n<li><strong>2단계 — 게임사 신고 + 계정·로그·접속IP 기록 보존 요청 (1주 내)</strong></li>\n<li><strong>3단계 — 신상 특정 경로 정리표·휴대전화 인증 자료 확보</strong></li>\n<li><strong>4단계 — 스토킹처벌법 잠정조치(통신금지·접근금지) 신청</strong></li>\n<li><strong>5단계 — 형사 스토킹범죄·협박 고소 + 사이버수사 + 민사</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 접근금지·처벌 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 게임 게임 외 추적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게임·SNS·신상 갈래입니다.</strong></p>\n<ul>\n<li><strong>게임 닉네임·길드·보이스 채팅 로그 캡처</strong></li>\n<li><strong>SNS·카카오톡·전화 메시지·통화 기록</strong></li>\n<li><strong>본인이 게임 내 공개한 정보 범위 정리</strong></li>\n<li><strong>가해자의 신상 특정 메시지(실명·직장 언급)</strong></li>\n<li><strong>게임사 신고 접수증·계정 정지 답변</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임사 협조는 영장·사실조회 요청 시 IP·휴대전화 인증·결제정보 확인 가능 — 동일인 입증 핵심. 게임 내 공개 정보 범위와 가해자가 알게 된 정보 차이가 신상 추적 의도 입증 자료. \"직장 안다\" 류 메시지는 협박죄(283조)·정통망법 74조 별도 평가가 검토되는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>게임 외 영역 침범</strong> — 가중 사유.</li>\n<li><strong>신상 특정 경로</strong> — 의도성 입증.</li>\n<li><strong>협박 결합</strong> — 별개 죄.</li>\n<li><strong>게임사 협조</strong> — 영장·사실조회.</li>\n<li><strong>잠정조치 통신금지</strong> — SNS·전화·게임 알림.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 송신·도달 잠정조치 위반',
        summary:
          '대법원 2025도6707(2025.08.21 선고) 영역에서 법원은 피고인이 피해자의 휴대전화·SNS 등 정보통신망으로 부호·문언·음향·영상을 송신하거나 도달하게 하는 행위가 잠정조치 \"피해자에 대한 전기통신을 이용한 접근 금지\" 명령 위반에 해당하는지 여부와 그 송신·도달 행위가 실제 피해자가 인식하였는지와 관계없이 잠정조치 위반으로 평가될 수 있는지 다룬 사례 흐름이 있습니다.',
        takeaway: 'SNS·메신저·전화 송신 자체가 잠정조치 위반 평가 영역. 게임 외 영역 추적도 정보통신망 송신 트랙 검토.',
      },
    ],
    faq: [
      {
        question: '게임에서 만난 사람도 스토킹범죄가 되나요?',
        answer:
          '<strong>게임 외 영역으로 반복 접근하면 스토킹 평가가 검토되는 영역입니다.</strong>',
      },
      {
        question: '본인이 게임에서 정보를 흘린 게 잘못 아닌가요?',
        answer:
          '<strong>의도적 공개가 아니면 신상 추적 동기·방식이 평가의 핵심입니다.</strong>',
      },
      {
        question: '"직장 안다"는 메시지도 처벌되나요?',
        answer:
          '<strong>협박죄(283조)·정통망법 74조 별도 평가가 검토되는 영역입니다.</strong>',
      },
      {
        question: '게임사가 정보 제공을 거부하면요?',
        answer:
          '<strong>경찰·검찰의 영장·사실조회 협조 요청으로 받을 수 있는 영역입니다.</strong>',
      },
      {
        question: '잠정조치는 얼마나 빨리 받나요?',
        answer:
          '<strong>긴급 잠정조치는 사건 즉시 신청 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '접근금지·처벌 가능성, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: 'SNS DM 차단 우회', href: '/guide/stalking/stalking-sns-dm-block-fake-account-repeat' },
      { label: '온라인 증거 수집', href: '/guide/stalking/stalking-ex-lover-online-evidence-collect' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '익명·다중 계정 추적', href: '/guide/stalking/stalking-multiple-anonymous-account-track' },
    ],
  },
];
