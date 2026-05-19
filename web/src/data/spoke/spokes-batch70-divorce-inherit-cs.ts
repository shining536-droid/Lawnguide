import { SpokePage } from '../spoke-pages';

// batch70 divorce-inheritance-child-support — 9개 (2026-05-20)
//
// 고유 존재 이유:
// 1. divorce-domestic-violence-protection-order-emergency-parallel-divorce-petition-track —
//    가정폭력 피해자 보호명령(임시·접근금지·퇴거)과 재판이혼을 같은 시기에 병렬 진행하는 트랙
//    (단순 보호명령 단독 신청과 분기).
// 2. divorce-de-facto-marriage-breakup-asset-share-evidence-track —
//    사실혼 해소 시 재산분할 기준시점·후발사정 평가의 입증 트랙
//    (혼인 무효·법률혼 재산분할과 분기, 2024.01.04 대법원 새 판례 반영).
// 3. divorce-remarriage-environment-change-custodian-change-petition-track —
//    이혼 후 일방 재혼·환경변화로 양육자를 변경하는 심판 트랙
//    (이혼 시점 최초 양육자 지정과 분기, 면접교섭 갈등 누적).
// 4. divorce-foreign-spouse-consensual-divorce-jurisdiction-document-track —
//    한국인-외국인 부부의 협의이혼 시 국제재판관할·번역공증·송달 트랙
//    (재판이혼 국제관할과 분기, 가정법원 협의 절차 위주).
// 5. inheritance-property-division-trial-contribution-portion-spouse-caregiving-track —
//    상속재산분할심판에서 배우자·자녀의 간병·부양 기여분 다툼 트랙
//    (협의 분할·기여분 일반론과 분기, 마류 가사비송 심판 실무).
// 6. inheritance-limited-acceptance-additional-debt-discovered-special-track —
//    한정승인 후 추가 채무가 발견되어 특별한정승인을 다시 신청하는 트랙
//    (최초 단순 한정승인·상속포기 비교와 분기).
// 7. inheritance-notarial-will-validity-contest-track —
//    공정증서 유언(공증인 작성)의 유언능력·증인 결격 등을 이유로 무효를 다투는 트랙
//    (자필유언·녹음유언 무효와 분기).
// 8. child-support-modification-petition-payer-remarriage-job-loss-track —
//    지급자 측 재혼·실직·재취업 등 사정변경을 이유로 양육비 감액을 청구하는 트랙
//    (받는 측 증액 청구와 분기).
// 9. child-support-direct-payment-order-family-court-no-csa-track —
//    양육비이행관리원을 거치지 않고 가정법원에 직접 직접지급명령을 신청하는 트랙
//    (CSA 추심 트랙과 분기, 가사소송법 제63조의2 직접지급명령 활용).

export const spokesBatch70DivorceInheritCs: SpokePage[] = [
  // ─── 1. divorce-domestic-violence-protection-order-emergency-parallel-divorce-petition-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-protection-order-emergency-parallel-divorce-petition-track',
    keyword: '가정폭력 보호명령 이혼 병렬',
    questionKeyword: '남편 폭행으로 보호명령을 받고 싶은데 이혼 소송도 함께 가야 하나요? 동시에 진행해도 되나요?',
    ctaKeyword: '보호명령 이혼 병렬 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 보호명령 + 이혼 병렬 — 5단계 임시·퇴거 3트랙 | 로앤가이드',
      description:
        '가정폭력 피해자 보호명령과 이혼 소송을 같은 시기에 병렬로 진행하는 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 술을 마시고 들어오면 몸과 얼굴을 때리는 일이 6개월째 반복돼요. 진단서·신고기록·CCTV가 있는데 같은 집에서 못 자는 상황이라 임시조치·퇴거명령을 먼저 받고 싶어요. 그런데 이혼도 결심한 상태라 \'보호명령 따로, 이혼 소송 또 따로\' 두 번 가야 하는지 막막합니다." 가정폭력처벌특례법은 ① 임시조치(접근금지·100m 격리·퇴거·통신금지) ② 피해자보호명령(별도 신청, 가정법원) ③ 가해자 처벌(검찰·경찰 형사 트랙) ④ 민법 제840조 제3호(심히 부당한 대우) 재판이혼 ⑤ 위자료·재산분할 5가지 트랙이 같은 사실관계에서 동시에 평가되는 영역. 보호명령(가정폭력법)과 이혼(민법)은 별개 절차이지만 \'같은 폭력 자료\'를 양쪽에 그대로 활용할 수 있어 병렬이 효율적입니다. 대응은 ① 자료 ② 임시조치 ③ 보호명령 ④ 이혼 ⑤ 위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보호명령 + 이혼 병렬 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·임시·보호·이혼·위자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭력 자료 보존 (진단서·112 신고·CCTV·녹음)</strong></li>\n<li><strong>② 임시조치 신청 (검사 청구 → 법원 결정, 즉시)</strong></li>\n<li><strong>③ 피해자보호명령 별도 신청 (가정법원, 6개월 단위 연장)</strong></li>\n<li><strong>④ 재판이혼 청구 (민법 840조 3호 심히 부당한 대우)</strong></li>\n<li><strong>⑤ 위자료·재산분할 청구 결합 (같은 자료 재사용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보호명령과 이혼은 별개 절차이지만 자료는 공통. 보호명령은 \"지금 당장 격리\" 용도, 이혼은 \"혼인관계 종료\" 용도라 같은 시기에 병렬 진행이 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·임시·이혼 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·진단서·CCTV·녹음 자료 보존 (즉시)</strong></li>\n<li><strong>2단계 — 경찰 응급조치 + 검사 임시조치 청구 (48시간 내, 가정폭력처벌특례법 8조)</strong></li>\n<li><strong>3단계 — 가정법원 피해자보호명령 별도 신청 (55조의2, 6개월 단위)</strong></li>\n<li><strong>4단계 — 가정법원 재판이혼 소장 접수 (민법 840조 3호·6호)</strong></li>\n<li><strong>5단계 — 위자료·재산분할·양육권 청구 결합 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보호명령 + 이혼 병렬 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭력·신원·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 사건사고사실확인원 (관할 경찰서)</strong></li>\n<li><strong>의사 진단서·상처 사진 (날짜 기재)</strong></li>\n<li><strong>가정 내 CCTV·녹음·문자·카톡 캡처</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서·주민등록등본</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>이혼·위자료·재산분할 청구 자료 (예금·부동산 명세)</strong></li>\n<li><strong>자녀 학교·병원 기록 (양육권 평가용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임시조치는 검사 청구 → 법원 결정 구조라 경찰 신고 후 검찰 송치 흐름이 핵심. 피해자보호명령은 피해자가 직접 가정법원에 신청 가능한 별도 트랙이라 검사 단계를 기다리지 않고 신청할 수 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임시조치 vs 피해자보호명령</strong> — 검사 청구 vs 피해자 직접 신청.</li>\n<li><strong>퇴거 명령</strong> — 가해자 100m 격리·주거에서 퇴거.</li>\n<li><strong>재판이혼 사유</strong> — 폭행·학대는 840조 3호 평가.</li>\n<li><strong>위자료</strong> — 폭력·기간·횟수 종합 평가.</li>\n<li><strong>보호명령 위반</strong> — 형사처벌 + 즉시 체포 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력에 의한 가출과 부부공동생활관계 파탄',
        summary:
          '대법원 2005므1689(대법원, 2005.12.23 선고) 영역에서 법원은 남편이 처에게 폭력을 행사하여 처가 집을 나가 이혼소송을 제기하고 재결합의사가 없음을 명백히 한 사안에서 부부공동생활관계가 회복할 수 없을 정도로 파탄되었다고 평가한 사례 흐름이 있습니다. 민법 제840조 제3호 \"심히 부당한 대우\"는 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행·학대·중대한 모욕으로 평가되는 영역.',
        takeaway: '폭행 자료가 누적되면 보호명령(가정폭력법) + 재판이혼(민법) 양쪽에서 동일하게 평가되는 흐름. 같은 자료 한 번에 정리.',
      },
    ],
    faq: [
      {
        question: '보호명령과 이혼 소송을 동시에 진행해도 되나요?',
        answer:
          '<strong>네. 별개 절차라 동시에 진행할 수 있고 자료는 공통으로 활용 가능한 영역입니다.</strong>',
      },
      {
        question: '임시조치와 피해자보호명령의 차이는 뭔가요?',
        answer:
          '<strong>임시조치는 검사 청구로 법원이 결정, 피해자보호명령은 피해자가 가정법원에 직접 신청하는 영역입니다.</strong>',
      },
      {
        question: '보호명령을 위반하면 어떻게 되나요?',
        answer:
          '<strong>가정폭력처벌특례법 63조에 따라 형사처벌이 평가되는 영역입니다.</strong> 즉시 체포 가능.',
      },
      {
        question: '진단서가 없으면 보호명령이 안 되나요?',
        answer:
          '<strong>112 신고기록·CCTV·녹음·문자만으로도 신청할 수 있는 영역입니다.</strong> 자료가 누적될수록 인정 가능성 상승.',
      },
      {
        question: '위자료는 보호명령으로도 받을 수 있나요?',
        answer:
          '<strong>보호명령은 격리·통신금지 용도, 위자료는 재판이혼·민사 손해배상에서 별도 청구하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '가정폭력 보호 명령', href: '/guide/divorce/divorce-domestic-violence-protection-order-parallel' },
      { label: '응급조치·임시조치', href: '/guide/divorce/divorce-domestic-violence-emergency-shelter' },
      { label: '폭력 증거 수집', href: '/guide/divorce/divorce-domestic-violence-evidence-collection-track' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation-standard' },
    ],
  },

  // ─── 2. divorce-de-facto-marriage-breakup-asset-share-evidence-track ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-marriage-breakup-asset-share-evidence-track',
    keyword: '사실혼 해소 재산분할 입증',
    questionKeyword: '사실혼으로 8년 살았는데 깨졌어요. 함께 모은 재산을 분할하려면 무엇을 입증해야 하나요?',
    ctaKeyword: '사실혼 재산분할 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사실혼 해소 재산분할 — 5단계 기준시점·후발사정 3트랙 | 로앤가이드',
      description:
        '사실혼 해소 시 재산분할 기준시점·후발사정 평가가 막막하다면 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 혼인신고 없이 8년간 동거하며 함께 사업을 키우고 아파트 매수에 보탰어요. 명의는 모두 상대방으로 되어 있고 갑자기 \"끝내자\"는 통보를 받았습니다. 본인 기여를 재산분할로 돌려받고 싶은데 \'사실혼이라는 사실 자체\'와 \'기여 자료\'를 어떻게 입증하는지 막막합니다." 대법원 판례는 사실혼도 \"부부로서의 실체\"가 인정되면 법률혼에 준해 재산분할청구를 인정해 온 영역. ① 사실혼 성립(부부 의사·공동생활 실체) ② 재산분할 기준시점(사실혼 해소일) ③ 후발사정 평가 ④ 기여 입증(노력·자금·가사) ⑤ 위자료(부당 파기) 5가지 트랙이 핵심. 2024.01.04 대법원 2022므11027 판결은 \"사실혼 해소일이 분할 기준시점\"임을 명시하면서 \"후발적 외부사정\"도 한정적으로 참작 가능하다고 본 흐름. 대응은 ① 성립 ② 기준 ③ 기여 ④ 분할 ⑤ 위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 성립·기준·기여·분할·위자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 성립 입증 (혼인 의사·동거·가족 인식)</strong></li>\n<li><strong>② 재산분할 기준시점 (사실혼 해소일 기준)</strong></li>\n<li><strong>③ 후발사정 참작 검토 (해소 후 시가 변동 등)</strong></li>\n<li><strong>④ 기여 입증 (자금·노력·가사 등 누적)</strong></li>\n<li><strong>⑤ 위자료 청구 검토 (부당 파기 책임)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼은 혼인신고가 없어도 \"부부로서의 실체\"가 보이면 법률혼에 준해 재산분할이 평가되는 영역. 사실혼 해소일이 분할 기준시점이고, 그 이후 외부적·후발적 사정은 한정적으로만 참작되는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·평가 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 자료 정리 (사진·축의금·세대주·공동가입 보험)</strong></li>\n<li><strong>2단계 — 사실혼 해소일 특정 (별거 시작·일방 통보 시점)</strong></li>\n<li><strong>3단계 — 가정법원 재산분할 청구 (가사소송법 마류)</strong></li>\n<li><strong>4단계 — 기여 입증 + 후발사정 자료 제출 (3~6개월)</strong></li>\n<li><strong>5단계 — 결정·이행 (위자료 결합 청구 가능)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 재산분할 입증 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 성립·기여·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>주민등록등본 (같은 세대 등재 기간)</strong></li>\n<li><strong>결혼식·집들이·가족 행사 사진·청첩장</strong></li>\n<li><strong>공동 가입 보험·임대차계약서·금융 거래</strong></li>\n<li><strong>본인 자금 출연 자료 (입금·이체·매수 기여)</strong></li>\n<li><strong>가사·자녀 양육 기여 자료 (사진·기록)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>해소 통보 메시지·녹음 (해소일 특정용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼 성립의 핵심은 \"부부로서의 실체\"라 단순 동거가 아닌 가족·지인이 부부로 인식했다는 자료가 강한 사정. 해소 후 시가가 크게 오른 부동산은 후발사정 참작 여부가 다툼이 되는 영역이라 해소일 시가 자료를 미리 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실혼 성립 여부</strong> — 단순 동거 vs 부부 실체.</li>\n<li><strong>해소 시점</strong> — 별거·통보·관계 종료 자료.</li>\n<li><strong>후발사정 참작</strong> — 한정적·예외적으로만.</li>\n<li><strong>기여도 평가</strong> — 자금·노력·가사 누적.</li>\n<li><strong>부당 파기 위자료</strong> — 책임 있는 일방 파기.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할 기준시점',
        summary:
          '대법원 2022므11027(대법원, 2024.01.04 선고) 영역에서 법원은 사실혼 해소를 원인으로 한 재산분할에서 분할의 대상이 되는 재산과 액수는 \"사실혼이 해소된 날\"을 기준으로 하여 정해야 한다고 본 사례 흐름이 있습니다. 다만 사실혼 해소 이후 사실심 변론종결 시까지 사이에 혼인 중 공동 노력으로 형성·유지한 부동산에 외부적·후발적 사정이 있어 그 이익·손해를 일방에게 귀속시키는 것이 부부 공동재산의 공평한 청산·분배에 현저히 부합하지 않는 특별한 사정이 있는 경우에는 분할대상 재산의 가액 산정에 참작할 수 있다는 흐름.',
        takeaway: '사실혼 해소일이 분할 기준시점. 다만 \"공평한 청산\"을 위해 필요하면 후발사정도 한정적으로 평가되는 영역.',
      },
    ],
    faq: [
      {
        question: '혼인신고 없이도 재산분할이 가능한가요?',
        answer:
          '<strong>사실혼이 인정되면 법률혼에 준해 재산분할이 평가되는 영역입니다.</strong>',
      },
      {
        question: '사실혼 성립은 어떻게 입증하나요?',
        answer:
          '<strong>부부로서의 실체 — 동거·가족 인식·공동가입 보험·결혼식 등 누적 자료가 핵심인 영역입니다.</strong>',
      },
      {
        question: '재산분할 기준시점은 언제인가요?',
        answer:
          '<strong>사실혼 해소일이 원칙적인 기준시점인 영역입니다.</strong> 후발사정은 한정적 평가.',
      },
      {
        question: '상대방이 사실혼이 아니라고 부정하면 어떻게 되나요?',
        answer:
          '<strong>가족·지인 진술서·사진·생활자료를 누적해 \"부부로서의 실체\"를 입증하는 영역입니다.</strong>',
      },
      {
        question: '위자료도 함께 받을 수 있나요?',
        answer:
          '<strong>책임 있는 일방의 부당 파기면 위자료 청구가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 재산분할 범위', href: '/guide/divorce/divorce-de-facto-marriage-property-division-scope' },
      { label: '사실혼 위자료', href: '/guide/divorce/divorce-de-facto-marriage-alimony-claim' },
      { label: '사실혼 청구 기간', href: '/guide/divorce/divorce-de-facto-marriage-claim-deadline-spouse-missing' },
      { label: '재산분할 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '동거 재산 분할', href: '/guide/divorce/divorce-cohabitation-property-dissolution' },
    ],
  },

  // ─── 3. divorce-remarriage-environment-change-custodian-change-petition-track ───
  {
    domain: 'divorce',
    slug: 'divorce-remarriage-environment-change-custodian-change-petition-track',
    keyword: '재혼 양육자 변경 심판',
    questionKeyword: '이혼할 때 엄마가 양육권을 가졌는데 엄마가 재혼하고 환경이 안 좋아져요. 양육자 변경 가능할까요?',
    ctaKeyword: '재혼 양육자 변경 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '재혼 양육자 변경 심판 — 5단계 환경변화·복리 평가 3트랙 | 로앤가이드',
      description:
        '이혼 후 일방 재혼·환경변화로 양육자 변경 심판을 청구하는 트랙이 막막하다면 5가지 평가 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 당시 엄마가 양육권을 가졌고 본인은 면접교섭만 했어요. 그런데 엄마가 재혼한 새 가정에서 새아빠와의 갈등·이사로 아이가 학교 적응을 못 하고 본인에게 같이 살고 싶다고 말합니다. 양육자를 본인으로 바꾸는 심판이 가능한지 막막합니다." 민법 제837조·제843조는 양육자·친권자를 \"자(子)의 복리\"를 최우선 기준으로 평가하고 변경 청구를 인정한 영역. ① 사정변경(재혼·환경·소득) ② 자의 복리 평가 ③ 자의 의사(13세 이상 의무 청취) ④ 면접교섭 누적 자료 ⑤ 양육자 변경 심판 절차 5가지 트랙이 핵심. 양육자 변경은 \"이혼 당시 결정이 절대적\"이 아니라 \"환경변화 + 복리 침해\" 자료가 누적되면 다시 평가되는 영역입니다. 대응은 ① 사정 ② 복리 ③ 의사 ④ 자료 ⑤ 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육자 변경 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정·복리·의사·자료·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사정변경 정리 (재혼·이사·새 가족 구성)</strong></li>\n<li><strong>② 자의 복리 침해 자료 (학교·정서·건강 변화)</strong></li>\n<li><strong>③ 자의 의사 청취 (13세 이상 법원 의무)</strong></li>\n<li><strong>④ 면접교섭 기록·본인 양육 가능성 자료</strong></li>\n<li><strong>⑤ 가정법원 양육자 변경 심판 청구 (마류 가사비송)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육자 변경은 \"단순 재혼\" 자체보다 \"재혼으로 인한 환경변화가 자녀 복리를 침해\"하는 자료가 보일 때 평가되는 영역. 자녀 의사가 핵심 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·평가 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정변경 자료 정리 (재혼·이사·새 가족) (즉시)</strong></li>\n<li><strong>2단계 — 자녀 복리 침해 자료 수집 (학교·상담·병원 기록)</strong></li>\n<li><strong>3단계 — 가정법원 양육자 변경 심판 청구 (마류 가사비송, 가사소송법 2조)</strong></li>\n<li><strong>4단계 — 가사조사관 면담 + 자녀 의사 청취 (3~6개월)</strong></li>\n<li><strong>5단계 — 심판 결정 (필요 시 면접교섭 조정 결합)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">재혼 양육자 변경 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정·복리·양육 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육자 지정 판결문·조정조서</strong></li>\n<li><strong>재혼·이사·전학 자료 (혼인관계증명서·주민등록초본)</strong></li>\n<li><strong>자녀 학교 생활기록부·상담일지·병원 기록</strong></li>\n<li><strong>면접교섭 기록·교환일지·사진</strong></li>\n<li><strong>본인 양육 가능성 자료 (직업·소득·주거·가족 지원)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>자녀 진술서·자녀 의사 확인 자료 (13세 이상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가정법원 가사조사관이 자녀 면담·학교 방문 등을 통해 직접 복리 평가하는 영역이라 \"준비된 환경\"이 자료로 보이는 것이 핵심. 단순 \"엄마 재혼이 싫다\"보다 구체적 복리 침해 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사정변경 정도</strong> — 단순 재혼 vs 복리 침해.</li>\n<li><strong>자의 의사</strong> — 13세 이상 의무 청취.</li>\n<li><strong>본인 양육 가능성</strong> — 주거·소득·근무시간.</li>\n<li><strong>면접교섭 누적</strong> — 정기 만남·교환 기록.</li>\n<li><strong>양육비 조정</strong> — 변경 시 새 양육비 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육자 지정과 공동 양육의 한계',
        summary:
          '인천가법 2017르10884(인천가법, 2017.11.03 선고) 영역에서 법원은 제1심이 부부를 공동 친권자·공동 양육자로 지정하면서 주 양육자·보조 양육자를 정한 사안에서 이혼 후 공동 양육은 자녀가 두 가정을 오가며 생활의 안정성이 보장되지 않고 부모 사이 적대적 관계가 계속되면 자녀가 충성갈등에 빠질 우려가 있다는 점, 특히 일방·쌍방 재혼 시 부정적 측면이 더 발현될 우려가 있다는 점 등을 종합해 자녀의 친권자·양육자로 한쪽을 지정한 사례 흐름이 있습니다.',
        takeaway: '재혼 후 공동·이중 양육 환경은 자녀 복리에 부정적 평가. 환경변화 자료가 누적되면 양육자 변경 심판으로 다시 평가되는 흐름.',
      },
    ],
    faq: [
      {
        question: '이혼 시 결정한 양육자를 바꿀 수 있나요?',
        answer:
          '<strong>사정변경 + 복리 침해 자료가 보이면 가정법원 심판으로 변경할 수 있는 영역입니다.</strong>',
      },
      {
        question: '자녀 의사가 얼마나 중요한가요?',
        answer:
          '<strong>13세 이상은 법원 의무 청취, 그 이하도 가사조사관 면담을 통해 비중 있게 평가되는 영역입니다.</strong>',
      },
      {
        question: '재혼 자체만으로 양육자가 바뀌나요?',
        answer:
          '<strong>단순 재혼은 사유 아님. 재혼으로 인한 환경변화가 복리 침해로 이어지는 자료가 핵심인 영역입니다.</strong>',
      },
      {
        question: '심판은 얼마나 걸리나요?',
        answer:
          '<strong>가사조사·자녀 면담 포함 3~6개월이 일반적인 영역입니다.</strong>',
      },
      {
        question: '변경되면 양육비는 어떻게 되나요?',
        answer:
          '<strong>양육자 변경과 함께 새 양육비도 재산정해 결정되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육자 변경 심판', href: '/guide/divorce/divorce-custody-modification-procedure' },
      { label: '자녀 의사 청취', href: '/guide/divorce/divorce-child-opinion-court-hearing' },
      { label: '면접교섭 배제', href: '/guide/divorce/divorce-visitation-denial-response' },
      { label: '재혼 양육비 감액', href: '/guide/divorce/divorce-post-divorce-child-support-modification' },
      { label: '양육권 평가', href: '/guide/divorce/divorce-custody-evaluation-criteria' },
    ],
  },

  // ─── 4. divorce-foreign-spouse-consensual-divorce-jurisdiction-document-track ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-consensual-divorce-jurisdiction-document-track',
    keyword: '외국인 배우자 협의이혼',
    questionKeyword: '한국인-외국인 부부예요. 협의이혼하려는데 외국 거주 중인 배우자랑 어떻게 신고하나요?',
    ctaKeyword: '외국인 협의이혼 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '외국인 배우자 협의이혼 — 5단계 관할·번역공증 3트랙 | 로앤가이드',
      description:
        '한국인-외국인 부부의 협의이혼 절차·국제관할·번역공증이 막막하다면 5가지 분기 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 한국인, 배우자는 베트남 국적이에요. 결혼 5년 차에 합의 이혼하기로 했는데 배우자가 본국에 체류 중이라 한국 가정법원 협의이혼 절차를 어떻게 밟는지, 번역·공증·송달·국제재판관할은 어떻게 되는지 막막합니다." 국제사법 제66조는 혼인의 일반적 효력의 준거법, 동법 제67조는 이혼의 준거법(부부 모두에게 동일한 본국법 우선, 아니면 일상거소지법)을 정한 영역. 외국인 배우자와의 협의이혼은 ① 국제재판관할(한국 가정법원 인정 요건) ② 협의 의사 확인기일 출석 ③ 번역·공증·아포스티유 자료 ④ 본국 신분 자료 ⑤ 외국 재외공관 신고 5가지 트랙이 핵심. 본국 거주 배우자도 협의이혼 의사 확인 기일에 출석이 원칙이지만 대리 출석·영사 확인 등 우회 방법이 평가되는 영역입니다. 대응은 ① 관할 ② 의사 ③ 자료 ④ 신고 ⑤ 본국 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 협의이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관할·의사·자료·신고·본국 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 국제재판관할 확인 (한국 가정법원 인정 요건)</strong></li>\n<li><strong>② 협의이혼 의사 확인 기일 출석 (양 당사자)</strong></li>\n<li><strong>③ 번역·공증·아포스티유 자료 (외국 발급 서류)</strong></li>\n<li><strong>④ 가족관계등록부 이혼 신고 (한국)</strong></li>\n<li><strong>⑤ 외국 재외공관·본국 신분등록 신고</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국인 배우자라도 \"양 당사자의 협의 의사\"가 핵심. 본국 거주 시에는 영사관 출석·영사 확인 등으로 의사를 확인하는 흐름. 자녀가 있으면 양육자·양육비 합의서 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 관할·기일·신고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 국제재판관할 확인 (한국 거주·재산·자녀 등 실질적 관련성)</strong></li>\n<li><strong>2단계 — 가정법원 협의이혼 의사 확인 신청 (1개월 또는 3개월 숙려기간)</strong></li>\n<li><strong>3단계 — 외국 발급 자료 번역·공증·아포스티유 (재외공관 활용)</strong></li>\n<li><strong>4단계 — 의사 확인 기일 출석 (영사 출석·재외공관 확인 활용 가능)</strong></li>\n<li><strong>5단계 — 한국 가족관계등록부 + 외국 본국 신분등록부 이혼 신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 협의이혼 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·관할·번역 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (한국)</strong></li>\n<li><strong>외국인 배우자 여권·외국인등록증·본국 신분증</strong></li>\n<li><strong>본국 발급 미혼·혼인·국적 증명서 + 번역 공증 + 아포스티유</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>자녀 있을 시 양육자 지정·양육비 부담 협의서</strong></li>\n<li><strong>본인·배우자 주거·재산 자료 (실질적 관련성 입증)</strong></li>\n<li><strong>재외공관 영사 확인서 (의사 확인 우회 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국 발급 자료는 \"번역 → 공증 → 아포스티유\" 3단계가 원칙이지만 협약 미체결국은 영사 인증으로 대체. 자녀가 있으면 양육자 지정·양육비 협의서가 의사확인 신청 시 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>국제재판관할</strong> — 한국 실질적 관련성 평가.</li>\n<li><strong>의사 확인 출석</strong> — 영사·재외공관 우회 가능.</li>\n<li><strong>본국 자료 인증</strong> — 번역+공증+아포스티유.</li>\n<li><strong>자녀 양육 합의</strong> — 협의이혼 필수.</li>\n<li><strong>외국 신분등록</strong> — 본국 재외공관 신고.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>다누리콜센터 1577-1366 (다문화가족 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인 배우자 혼인의사와 직권조사',
        summary:
          '대법원 2019므11584(대법원, 2021.12.10 선고) 영역에서 법원은 우리나라 국민이 외국인 배우자에 대하여 혼인의 의사가 없다는 이유로 혼인무효 소송을 제기한 경우, 외국인 배우자의 혼인의사 유무를 판단할 때 고려할 사항을 다룬 사례 흐름이 있습니다. 혼인무효 사건은 가류 가사소송사건으로 자백에 관한 민사소송법 규정이 적용되지 않고 법원이 직권으로 사실조사·증거조사를 해야 하는 영역.',
        takeaway: '외국인 배우자 관련 가정법원 절차는 \"당사자 의사\"가 핵심이고 법원이 직권으로 조사하는 영역. 협의이혼도 의사 확인이 핵심.',
      },
    ],
    faq: [
      {
        question: '외국인 배우자가 본국에 있어도 협의이혼할 수 있나요?',
        answer:
          '<strong>의사 확인 기일 출석이 원칙이지만 재외공관·영사 확인 등 우회로 가능한 영역입니다.</strong>',
      },
      {
        question: '본국 발급 자료는 어떻게 인증하나요?',
        answer:
          '<strong>번역 → 공증 → 아포스티유(또는 영사인증) 3단계가 원칙인 영역입니다.</strong>',
      },
      {
        question: '한국 가정법원 관할이 인정되나요?',
        answer:
          '<strong>한국 거주·재산·자녀 등 실질적 관련성이 보이면 국제재판관할이 인정되는 영역입니다.</strong>',
      },
      {
        question: '자녀가 있으면 어떻게 하나요?',
        answer:
          '<strong>양육자 지정·양육비 합의서를 의사확인 신청 시 함께 제출하는 영역입니다.</strong>',
      },
      {
        question: '본국에도 이혼 신고를 해야 하나요?',
        answer:
          '<strong>각국 신분등록 법에 따라 본국 재외공관에도 신고하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '국제재판관할', href: '/guide/divorce/divorce-foreign-spouse-international-jurisdiction' },
      { label: '외국 거주 배우자', href: '/guide/divorce/divorce-foreign-residence-jurisdiction-substantive-relevance' },
      { label: '국제 양육 관할', href: '/guide/divorce/divorce-foreign-spouse-custody-jurisdiction' },
      { label: '국제 이혼 절차', href: '/guide/divorce/divorce-foreign-spouse-litigation-procedure' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/consensual-divorce-required-documents-checklist' },
    ],
  },

  // ─── 5. inheritance-property-division-trial-contribution-portion-spouse-caregiving-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-property-division-trial-contribution-portion-spouse-caregiving-track',
    keyword: '상속재산분할심판 기여분',
    questionKeyword: '아버지를 10년간 모시고 간병한 본인 어머니의 기여분을 인정받으려면 어떻게 해야 하나요?',
    ctaKeyword: '상속 기여분 다툼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속재산분할심판 기여분 — 5단계 간병·부양 평가 3트랙 | 로앤가이드',
      description:
        '상속재산분할심판에서 배우자·자녀의 간병·부양 기여분 다툼이 막막하다면 5가지 평가 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가셨는데 어머니가 10년간 간병하셨고 다른 형제들은 거의 방문도 안 했어요. 상속재산을 똑같이 1/n로 나누는 게 너무 부당해서 어머니 기여분을 인정받고 싶은데 어떻게 입증하고 신청하는지 막막합니다." 민법 제1008조의2는 \"공동상속인 중 피상속인의 재산 유지·증가에 특별한 기여\" 또는 \"피상속인의 상당한 부양\"을 한 자에게 기여분을 인정한 영역. ① 기여 유형(재산·부양·간병) ② 특별성·상당성 평가 ③ 기여 입증 자료 ④ 가정법원 상속재산분할심판 ⑤ 기여분 비율 결정 5가지 트랙이 핵심. 기여분은 \"통상 기대되는 부양\"을 넘어선 \"특별 기여\"가 보일 때 평가되는 영역. 협의가 안 되면 가정법원 마류 가사비송으로 청구하는 흐름입니다. 대응은 ① 자료 ② 평가 ③ 협의 ④ 심판 ⑤ 분할 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상속 기여분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·평가·협의·심판·분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기여 자료 정리 (간병·부양·재산형성 기여)</strong></li>\n<li><strong>② 특별성·상당성 평가 (통상 기대 수준 초과)</strong></li>\n<li><strong>③ 공동상속인 협의 시도</strong></li>\n<li><strong>④ 가정법원 상속재산분할심판 + 기여분 청구 (마류 가사비송)</strong></li>\n<li><strong>⑤ 기여분 비율 + 잔여 상속분 분할 결정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기여분은 \"통상 기대되는 부양\"을 넘어선 \"특별 기여\"가 핵심. 단순 동거나 가끔 방문은 인정 어렵고 10년 이상 전적 간병·재산 증식 기여 등 자료가 누적되어야 평가되는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·결정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 기여 자료 수집 (병원비·요양 영수증·간병 일지·재산 증식 자료) (즉시)</strong></li>\n<li><strong>2단계 — 공동상속인 협의 시도 (분할 + 기여분 합의서)</strong></li>\n<li><strong>3단계 — 협의 불가 시 가정법원 상속재산분할심판 청구 + 기여분 청구 결합</strong></li>\n<li><strong>4단계 — 가사조사 + 심리 (6개월~1년)</strong></li>\n<li><strong>5단계 — 기여분 비율 결정 + 잔여 분할 + 등기 이전</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속재산분할 기여분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·기여·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·가족관계증명서·사망신고 자료</strong></li>\n<li><strong>공동상속인 가족관계증명서·주민등록등본</strong></li>\n<li><strong>병원·요양원 영수증·진료기록·간병 일지</strong></li>\n<li><strong>생활비·약값 이체 내역 (10년 이상 누적)</strong></li>\n<li><strong>피상속인 재산 목록·등기부등본·예금 명세</strong></li>\n<li><strong>본인·기여인 신분증·인감증명서</strong></li>\n<li><strong>증인 진술서 (이웃·친척·요양보호사)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기여분은 \"기간 + 정도 + 통상 기대 수준 초과\" 3박자가 보여야 평가되는 영역. 10년 누적 간병 일지·요양원 비용 부담·재산 증식 직접 기여 자료가 강한 사정. 단순 명절 방문·생활비 일부 보조로는 약함.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별 기여 판단</strong> — 통상 부양 초과 정도.</li>\n<li><strong>기여 기간</strong> — 단발 vs 장기 누적.</li>\n<li><strong>기여 비율</strong> — 일반적으로 10~30%선 사례 다수.</li>\n<li><strong>다른 상속인 반박</strong> — 통상 효도 주장.</li>\n<li><strong>유류분 침해 여부</strong> — 기여분 + 유류분 균형.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산분할심판과 기여분 청구',
        summary:
          '수원고등법원 2022브10020(수원고등법원, 2024.10.30 선고) 영역에서 법원은 상속재산분할·기여분 청구 사건에서 공동상속인 중 피상속인을 상당히 부양하거나 그 재산의 유지·증가에 특별히 기여한 사람의 기여분을 평가하면서 분할 비율을 조정한 사례 흐름이 있습니다. 기여분 인정은 \"통상 기대 수준을 넘어선 특별 기여\"가 누적 자료로 보일 때 평가되는 영역.',
        takeaway: '기여분은 단순 동거·명절 방문이 아니라 \"특별 기여\"가 누적 자료로 보일 때 평가. 분할 협의 안 되면 가정법원 마류 가사비송으로.',
      },
    ],
    faq: [
      {
        question: '기여분은 어떻게 신청하나요?',
        answer:
          '<strong>가정법원 상속재산분할심판 청구와 함께 기여분 청구를 결합 신청하는 영역입니다.</strong>',
      },
      {
        question: '간병만으로도 인정되나요?',
        answer:
          '<strong>장기·전적 간병이 \"통상 기대 수준\"을 넘어서면 평가되는 영역입니다.</strong> 단발 간호는 약함.',
      },
      {
        question: '기여분 비율은 보통 어느 정도인가요?',
        answer:
          '<strong>사례에 따라 10~30% 수준이 검토되는 사례가 자주 보이는 영역입니다.</strong> 단정 불가, 평가 사항.',
      },
      {
        question: '협의로 정해도 되나요?',
        answer:
          '<strong>공동상속인 협의로 정하면 분할 합의서에 기여분을 명시하는 영역입니다.</strong>',
      },
      {
        question: '유류분과 충돌하면 어떻게 되나요?',
        answer:
          '<strong>기여분이 유류분을 침해하지 않는 한도에서 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '기여분 청구', href: '/guide/inheritance/inheritance-contribution-portion-dispute' },
      { label: '간병·사업 기여 입증', href: '/guide/inheritance/inheritance-contribution-share-caregiving-business-evidence' },
      { label: '특별 기여 가산', href: '/guide/inheritance/inheritance-special-gift-contribution-claim' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-validity' },
      { label: '유류분 반환', href: '/guide/inheritance/inheritance-yuryubun-sibling-claim' },
    ],
  },

  // ─── 6. inheritance-limited-acceptance-additional-debt-discovered-special-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-additional-debt-discovered-special-track',
    keyword: '한정승인 후 추가 채무 특별한정승인',
    questionKeyword: '단순승인했는데 아버지 빚이 나중에 발견됐어요. 다시 한정승인 할 수 있나요?',
    ctaKeyword: '추가 채무 특별한정승인 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '한정승인 후 추가 채무 — 5단계 특별한정승인 3트랙 | 로앤가이드',
      description:
        '단순승인 또는 한정승인 후 추가 채무가 발견됐을 때 특별한정승인 신청 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 돌아가시고 별 채무가 없는 줄 알고 단순승인을 했는데, 6개월 후 카드사·캐피탈에서 2억 채무 통보가 왔어요. 알았더라면 한정승인을 했을 텐데 이미 늦었나 막막합니다." 민법 제1019조 제3항은 \"중대한 과실 없이 상속채무가 상속재산을 초과하는 사실을 알지 못해 단순승인을 한 경우, 그 사실을 안 날부터 3개월 내 한정승인 신청\"을 인정한 \"특별한정승인\" 영역. ① 단순승인 시점 ② 추가 채무 발견 시점 ③ 중대한 과실 없음 입증 ④ 3개월 기한 ⑤ 한정승인 결정 후 청산 5가지 트랙이 핵심. 단순승인 후라도 \"몰랐고 중대한 과실 없었다\"는 자료가 보이면 다시 한정승인이 평가되는 흐름. 대응은 ① 시점 ② 채무 ③ 과실 ④ 신청 ⑤ 청산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 특별한정승인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시점·채무·과실·신청·청산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단순승인 또는 기한 도과 시점 확인</strong></li>\n<li><strong>② 추가 채무 발견·통지 시점 자료</strong></li>\n<li><strong>③ 중대한 과실 없음 입증 (생전 관계·재산 조회 한계)</strong></li>\n<li><strong>④ 가정법원 특별한정승인 신청 (1019조 3항, 3개월 내)</strong></li>\n<li><strong>⑤ 한정승인 결정 후 청산 절차 + 채권자 공고</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순승인 후라도 \"몰랐고 중대한 과실 없음\"이 보이면 추가 채무 발견일부터 3개월 내 특별한정승인을 신청해 본인 책임을 상속재산 한도로 제한할 수 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신청·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채무 발견 자료 보존 (통지서 봉투·내용증명 일자) (즉시)</strong></li>\n<li><strong>2단계 — 사망일·단순승인일·발견일 시점 정리</strong></li>\n<li><strong>3단계 — 가정법원 특별한정승인 신청 (발견일부터 3개월 내, 1019조 3항)</strong></li>\n<li><strong>4단계 — 한정승인 신고 수리 + 상속재산 목록 제출 (사망 또는 발견 신고 후 5일)</strong></li>\n<li><strong>5단계 — 채권자 공고·청산 (공고 2개월 + 상속재산 한도 변제)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">추가 채무 특별한정승인 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·시점·채무 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·사망신고서·가족관계증명서</strong></li>\n<li><strong>본인 가족관계증명서·신분증·인감증명서</strong></li>\n<li><strong>단순승인 시점 자료 (사망 후 3개월 도과·재산 처분 등)</strong></li>\n<li><strong>채무 통지서·내용증명·법원 송달증명 (발견일 입증)</strong></li>\n<li><strong>피상속인 신용정보원 채무 조회 (KCB·NICE)</strong></li>\n<li><strong>상속재산 목록 (예금·부동산·자동차·주식)</strong></li>\n<li><strong>중대한 과실 없음 자료 (별거·관계 단절·재산 조회 한계 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"중대한 과실 없음\"이 핵심 평가 사정. 피상속인과 별거·관계 단절·평소 재산 관여 없음 등이 자료로 보이면 단순승인 후에도 특별한정승인이 평가되는 영역. 발견일부터 3개월 \"불변기간\"은 절대 도과 금지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>중대한 과실 평가</strong> — 별거·단절 자료 핵심.</li>\n<li><strong>3개월 발견일</strong> — 채권자 통지·등기 일자.</li>\n<li><strong>단순승인 의제</strong> — 재산 처분이 미루어진 경우.</li>\n<li><strong>청산 절차</strong> — 공고 2개월 + 안분 변제.</li>\n<li><strong>상속세 영향</strong> — 한정승인 결정 후 재산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>국세청 상속세 상담 126</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인 결정에 대한 이의와 상속채무 변제',
        summary:
          '대법원 2009스75(대법원, 2009.08.31 선고) 영역에서 법원은 상속한정승인 결정에 대한 이의 사건에서 상속인이 한정승인을 하더라도 그것은 책임 범위의 제한일 뿐 상속채무의 존재 자체가 부인되는 것이 아니라는 점, 한정승인의 효력은 상속재산의 한도에서 변제 책임이 제한된다는 점 등을 다룬 사례 흐름이 있습니다. 한정승인은 \"채무를 안 진다\"가 아닌 \"상속재산 한도에서만 책임\"이라는 영역.',
        takeaway: '한정승인은 \"상속재산 한도\" 책임 제한. 추가 채무 발견 시 특별한정승인을 통해 본인 고유재산을 보호하는 흐름.',
      },
    ],
    faq: [
      {
        question: '단순승인했는데 다시 한정승인할 수 있나요?',
        answer:
          '<strong>몰랐고 중대한 과실 없음이 입증되면 특별한정승인이 평가되는 영역입니다.</strong>',
      },
      {
        question: '발견일 3개월은 언제부터 계산되나요?',
        answer:
          '<strong>채권자 통지·법원 송달·신용정보원 조회 등 채무 존재를 안 날부터인 영역입니다.</strong>',
      },
      {
        question: '중대한 과실은 어떻게 입증하나요?',
        answer:
          '<strong>별거·관계 단절·재산 관여 없음 자료 + 신용정보원 조회 한계 등 누적 입증하는 영역입니다.</strong>',
      },
      {
        question: '본인 재산도 압류되나요?',
        answer:
          '<strong>한정승인 후에는 상속재산 한도에서만 책임지고 본인 고유재산은 보호되는 영역입니다.</strong>',
      },
      {
        question: '청산은 어떻게 진행되나요?',
        answer:
          '<strong>채권자 공고 2개월 + 상속재산 한도 안분 변제 절차로 진행되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '특별한정승인 3개월', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '추가 채무 한정승인', href: '/guide/inheritance/inheritance-limited-acceptance-after-debt-found' },
      { label: '한정승인 청산 절차', href: '/guide/inheritance/inheritance-limited-acceptance-liquidation-5steps' },
      { label: '한정승인 vs 포기', href: '/guide/inheritance/inheritance-renunciation-vs-limited' },
      { label: '한정승인 5단계', href: '/guide/inheritance/inheritance-limited-acceptance-5steps' },
    ],
  },

  // ─── 7. inheritance-notarial-will-validity-contest-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-notarial-will-validity-contest-track',
    keyword: '공정증서 유언 무효',
    questionKeyword: '아버지 치매 상태에서 작성된 공증 유언장이 본인에게 불리한데 무효를 다툴 수 있나요?',
    ctaKeyword: '공정증서 유언 무효 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '공정증서 유언 무효 다툼 — 5단계 유언능력·증인 결격 3트랙 | 로앤가이드',
      description:
        '공정증서 유언(공증인 작성)의 유언능력·증인 결격 등을 이유로 무효를 다투는 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 말년에 치매 진단을 받고 요양원에 계셨는데 \'한쪽 형제에게 전 재산 상속\'한다는 공정증서 유언이 갑자기 발견됐어요. 작성 당시 의식이 명료했는지·증인이 결격자 아니었는지 의심스러운데 무효를 다툴 수 있는지 막막합니다." 민법 제1063조는 공정증서 유언의 요건으로 ① 유언자의 구술 ② 공증인 작성 ③ 증인 2명 이상 ④ 낭독·확인 ⑤ 서명·날인을 정한 영역. 유언능력 흠결·증인 결격(미성년·유언이익 받는 자·그 배우자·직계혈족)·공증인 결격 등 어느 하나라도 흠결이 보이면 무효를 다툴 수 있는 흐름. ① 유언능력 ② 증인 자격 ③ 공증 요건 ④ 무효 확인의 소 ⑤ 유류분 반환 5가지 트랙이 핵심. 대응은 ① 자료 ② 능력 ③ 증인 ④ 무효 ⑤ 유류분 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공정증서 유언 무효 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·능력·증인·무효·유류분 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유언서 사본 확보 + 작성 당시 상황 자료</strong></li>\n<li><strong>② 유언능력 평가 (치매·정신감정·의무기록)</strong></li>\n<li><strong>③ 증인·공증인 자격 확인 (1072조 결격사유)</strong></li>\n<li><strong>④ 유언무효 확인의 소 (민사 법원)</strong></li>\n<li><strong>⑤ 유류분 반환 청구 결합 (무효 안 되어도 침해 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공정증서는 \"강한 추정\"이 있지만 절대적이지 않음. 유언능력·증인 결격이 보이면 무효 다툼이 평가되는 영역. 무효가 안 되어도 유류분 반환 청구는 별도로 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·평가 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언서 사본 + 작성 당시 의무기록·CCTV 수집 (즉시)</strong></li>\n<li><strong>2단계 — 치매·정신감정 전문의 평가 + 작성 직전·직후 상태 기록</strong></li>\n<li><strong>3단계 — 증인 2명 신원·자격 조회 (1072조 결격사유)</strong></li>\n<li><strong>4단계 — 민사 법원에 유언무효 확인의 소 제기 (3~12개월)</strong></li>\n<li><strong>5단계 — 무효 인정 시 법정상속 / 무효 부인 시 유류분 반환 (1년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공정증서 유언 무효 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언·능력·증인 갈래입니다.</strong></p>\n<ul>\n<li><strong>공정증서 유언 사본·원본 열람 신청 (공증사무소)</strong></li>\n<li><strong>피상속인 의무기록·치매 진단서·MMSE 결과</strong></li>\n<li><strong>요양원 입소·간호 일지·면회 기록</strong></li>\n<li><strong>증인 2명 신원 조회·관계 자료</strong></li>\n<li><strong>피상속인 가족관계증명서·사망신고서</strong></li>\n<li><strong>본인 가족관계증명서·신분증·인감증명서</strong></li>\n<li><strong>유언 직전·직후 동영상·녹음 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공정증서는 \"공증인이 진정성을 인증\"한 강한 자료라 무효 입증이 쉽지 않음. 다만 작성일 의무기록의 의식 수준·증인 결격 자료가 보이면 평가되는 영역. 무효 부인 대비 유류분 반환 청구도 함께 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유언능력</strong> — 작성 당시 의식 수준 평가.</li>\n<li><strong>증인 결격</strong> — 수혜자·배우자·직계혈족 X.</li>\n<li><strong>구술·낭독</strong> — 형식 요건 위반 여부.</li>\n<li><strong>유류분 침해</strong> — 무효 안 돼도 별도 청구.</li>\n<li><strong>유류분 1년 기한</strong> — 안 날부터 1년·사망일부터 10년.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>대한변호사협회 상속법 상담</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유언무효 확인과 유류분 반환',
        summary:
          '대법원 2005다75019(대법원, 2008.02.28 선고) 영역에서 법원은 유언무효확인 및 상속회복·유류분반환 사건에서 유언의 효력 다툼과 그에 따른 유류분 반환 청구 사이의 관계를 다룬 사례 흐름이 있습니다. 유언 무효 인정 시 법정상속분으로 회복되고, 유언이 유효해도 유류분 침해분은 별도 반환 청구로 평가되는 영역.',
        takeaway: '공정증서 유언도 능력·증인 흠결이 보이면 무효 다툼 가능. 무효가 안 돼도 유류분 침해분은 별도 반환 청구.',
      },
    ],
    faq: [
      {
        question: '공정증서 유언도 무효가 될 수 있나요?',
        answer:
          '<strong>유언능력 흠결·증인 결격·형식 위반 자료가 보이면 무효를 다툴 수 있는 영역입니다.</strong>',
      },
      {
        question: '치매 진단이 있으면 자동 무효인가요?',
        answer:
          '<strong>치매 진단만으로는 부족, 작성일의 의식 명료성 자료가 핵심인 영역입니다.</strong>',
      },
      {
        question: '증인이 누구면 결격인가요?',
        answer:
          '<strong>미성년·유언이익을 받는 자·그 배우자·직계혈족은 결격이라는 영역입니다(1072조).</strong>',
      },
      {
        question: '무효 다툼이 안 되면 어떻게 하나요?',
        answer:
          '<strong>유류분 반환 청구가 별도로 평가되는 영역입니다.</strong> 1년 기한 주의.',
      },
      {
        question: '무효 소송은 얼마나 걸리나요?',
        answer:
          '<strong>1심 기준 6~12개월이 일반적인 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유언 효력 다툼', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '유언 위조 검증', href: '/guide/inheritance/inheritance-will-forgery-verification-procedure' },
      { label: '유언 검인 절차', href: '/guide/inheritance/inheritance-will-probate-forgery-dispute' },
      { label: '유류분 반환', href: '/guide/inheritance/inheritance-yuryubun-sibling-claim' },
      { label: '유류분 1년 기한', href: '/guide/inheritance/inheritance-yuryubun-1year-deadline-procedure' },
    ],
  },

  // ─── 8. child-support-modification-petition-payer-remarriage-job-loss-track ───
  {
    domain: 'child-support',
    slug: 'child-support-modification-petition-payer-remarriage-job-loss-track',
    keyword: '양육비 감액 심판 재혼 실직',
    questionKeyword: '재혼해서 새 자녀가 생기고 회사도 그만뒀어요. 전 배우자에게 보내는 양육비를 줄일 수 있을까요?',
    ctaKeyword: '양육비 감액 심판 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 감액 심판 — 5단계 재혼·실직 사정변경 3트랙 | 로앤가이드',
      description:
        '지급자 측 재혼·실직 등 사정변경을 이유로 양육비 감액을 청구하는 트랙이 막막하다면 5가지 평가 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 시 매월 80만원 양육비를 정했는데 본인이 재혼해서 새 아이가 생겼고 회사도 1년 전 정리해고로 그만뒀어요. 새 가정 부양도 부담이고 소득도 끊겼는데 양육비를 그대로 내야 하는지 막막합니다. 줄이려면 어떤 절차를 밟아야 하나요?" 가사소송법 제2조·민법 제837조는 양육비 부담을 \"사정변경\"이 있으면 가정법원이 변경할 수 있다고 정한 영역. ① 사정변경 정도(재혼·새 자녀·실직·소득 변동) ② 변경 청구 절차 ③ 자녀 복리 우선 ④ 임의 감액 금지(연체 누적) ⑤ 감액 결정까지 미지급분 처리 5가지 트랙이 핵심. \"마음대로 깎고 안 보내기\"는 연체로 평가되어 강제집행 대상이 되는 영역. 반드시 가정법원 심판으로 정식 감액 결정을 받는 흐름. 대응은 ① 사정 ② 청구 ③ 결정 ④ 이행 ⑤ 자녀 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 감액 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정·청구·결정·이행·자녀 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사정변경 정리 (재혼·새 자녀·실직·소득 변동·질병)</strong></li>\n<li><strong>② 가정법원 양육비 변경(감액) 심판 청구 (마류 가사비송)</strong></li>\n<li><strong>③ 자녀 복리 평가 (감액해도 양육 가능성)</strong></li>\n<li><strong>④ 결정 전까지는 종전 금액 이행 (임의 감액 X)</strong></li>\n<li><strong>⑤ 결정 후 새 금액 적용 + 미지급 누적 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비는 \"마음대로 깎기\" 금지. 반드시 가정법원 심판으로 감액 결정을 받아야 하는 영역. 임의 미지급은 연체로 평가되어 강제집행·이행명령·감치 대상.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·결정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정변경 자료 수집 (재혼·새 자녀 출생·실직 통보·소득 자료) (즉시)</strong></li>\n<li><strong>2단계 — 가정법원 양육비 변경(감액) 심판 청구 (가사소송법 마류)</strong></li>\n<li><strong>3단계 — 상대방 답변 + 자료 제출 + 가사조사 (3~6개월)</strong></li>\n<li><strong>4단계 — 결정 (감액·기각·일부 인용)</strong></li>\n<li><strong>5단계 — 새 금액 적용 + 미지급 누적분 협의·조정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 감액 심판 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정·소득·신분 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 부담조서·판결문 사본</strong></li>\n<li><strong>혼인관계증명서·재혼·새 자녀 기본증명서</strong></li>\n<li><strong>퇴직증명서·실직 통보·실업급여 수급자격증</strong></li>\n<li><strong>국세청 소득금액증명·근로소득원천징수영수증</strong></li>\n<li><strong>건강보험·국민연금 가입이력 (자격변동)</strong></li>\n<li><strong>본인·새 가족 부양 자료 (학원비·생활비·월세)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단순 \"수입이 줄었다\"가 아니라 \"이혼 당시 예상하지 못한 정도의 변동\"이 보여야 평가되는 영역. 자녀 복리와 새 가정 부담의 균형이 핵심. 양육비이행관리원 1644-6621 무료 상담 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사정변경 정도</strong> — 단순 변동 vs 예측 불가 변동.</li>\n<li><strong>자녀 복리</strong> — 감액으로 양육 수준 침해 평가.</li>\n<li><strong>임의 감액 금지</strong> — 결정 전 종전 금액 의무.</li>\n<li><strong>미지급 누적</strong> — 연체 시 강제집행·이행명령.</li>\n<li><strong>새 가정 부담</strong> — 새 자녀 출생도 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 감액 청구와 사정변경',
        summary:
          '서울가정법원 2021브30184(서울가정법원, 2022.05.30 결정) 영역에서 법원은 양육비 변경(감액) 청구 사건에서 \"사정변경\"이 있는지를 자녀의 복리·당사자의 소득·새 가정 부담 등을 종합 평가해 일부 감액을 인정한 사례 흐름이 있습니다. 양육비 변경은 단순 \"수입 줄었음\" 주장만으로는 부족하고 이혼 당시 예측 불가한 정도의 사정 변동이 보일 때 평가되는 영역.',
        takeaway: '재혼·실직 등 사정변경은 가정법원 심판으로 감액이 평가될 수 있는 영역. 결정 전 임의 감액은 금지.',
      },
    ],
    faq: [
      {
        question: '재혼만으로 양육비를 줄일 수 있나요?',
        answer:
          '<strong>재혼 + 새 자녀 출생으로 부양 부담이 늘어난 자료가 보이면 평가되는 영역입니다.</strong>',
      },
      {
        question: '실직하면 양육비를 안 보내도 되나요?',
        answer:
          '<strong>아니요. 감액 결정 전까지는 종전 금액을 이행해야 하는 영역입니다.</strong> 임의 미지급은 연체.',
      },
      {
        question: '감액 심판은 얼마나 걸리나요?',
        answer:
          '<strong>가사조사 포함 3~6개월이 일반적인 영역입니다.</strong>',
      },
      {
        question: '상대방이 동의하면 협의로 정해도 되나요?',
        answer:
          '<strong>네. 양육비 변경 합의서 + 가정법원 공증·인낙으로 처리 가능한 영역입니다.</strong>',
      },
      {
        question: '미지급 누적분은 어떻게 되나요?',
        answer:
          '<strong>감액 결정 이전 미지급분은 종전 금액으로 강제집행 대상이 되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '소득 변동 감액', href: '/guide/child-support/child-support-modification-payer-disability-income-drop-track' },
      { label: '재혼 감액 가능성', href: '/guide/child-support/child-support-ex-remarriage-reduction-possible' },
      { label: '실직 감액 거부 대응', href: '/guide/child-support/child-support-ex-unemployed-reduction-refuse' },
      { label: '경제 충격 감액', href: '/guide/child-support/child-support-economic-shock-modification-track' },
      { label: '새 자녀 출생', href: '/guide/child-support/child-support-paying-parent-remarriage-newchild-reduction' },
    ],
  },

  // ─── 9. child-support-direct-payment-order-family-court-no-csa-track ───
  {
    domain: 'child-support',
    slug: 'child-support-direct-payment-order-family-court-no-csa-track',
    keyword: '양육비 직접지급명령 가정법원',
    questionKeyword: '양육비이행관리원 안 거치고 바로 회사에서 양육비를 떼는 방법이 있다던데 어떻게 신청하나요?',
    ctaKeyword: '직접지급명령 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 직접지급명령 — 5단계 가정법원 신청 3트랙 | 로앤가이드',
      description:
        '양육비이행관리원을 거치지 않고 가정법원에 직접지급명령을 신청하는 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"전 남편이 양육비를 2개월 연체해서 회사 월급에서 바로 떼어 보내고 싶어요. 양육비이행관리원에 가야 한다는 얘기도 있고 \'가정법원에 직접 신청하면 빠르다\'는 얘기도 있는데 정확한 절차를 모르겠어요." 가사소송법 제63조의2는 양육비 채권자가 \"정기금 양육비 채권에 관한 집행권원\"을 가진 경우 채무자의 근로소득 등 정기적 수입에 대해 \"양육비 직접지급명령\"을 가정법원에 신청할 수 있도록 정한 영역. ① 집행권원(판결·심판·조서) ② 양육비 2회 이상 미지급 ③ 제3채무자(고용주) 특정 ④ 가정법원 신청 ⑤ 결정 후 회사 자동 공제 5가지 트랙이 핵심. 양육비이행관리원(CSA) 추심 트랙과 별개로 \"내가 직접 가정법원에 신청\"하는 빠른 트랙이 평가되는 영역. 대응은 ① 권원 ② 미지급 ③ 회사 ④ 신청 ⑤ 공제 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 직접지급명령 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권원·미지급·회사·신청·공제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 집행권원 확보 (양육비 판결·심판·조정·공증)</strong></li>\n<li><strong>② 2회 이상 미지급 확인 (가사소송법 63조의2 요건)</strong></li>\n<li><strong>③ 채무자 고용주(제3채무자) 특정</strong></li>\n<li><strong>④ 가정법원 직접지급명령 신청 (소액 인지·송달료)</strong></li>\n<li><strong>⑤ 결정 후 회사가 매월 자동 공제·송금</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접지급명령은 \"양육비이행관리원 추심\" 트랙과 별개로 채권자가 가정법원에 직접 신청하는 빠른 트랙. 집행권원 + 2회 이상 미지급 + 고용주 정보가 핵심 요건.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신청·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 집행권원 확보 (판결문·심판서·조정조서·집행력 있는 공정증서) (즉시)</strong></li>\n<li><strong>2단계 — 2회 이상 미지급 자료 정리 (입금 내역·내용증명)</strong></li>\n<li><strong>3단계 — 채무자 고용주(제3채무자) 정보 확인 (재직증명·연말정산자료)</strong></li>\n<li><strong>4단계 — 가정법원에 양육비 직접지급명령 신청 (가사소송법 63조의2)</strong></li>\n<li><strong>5단계 — 명령 송달 후 회사가 매월 양육비를 직접 채권자 계좌로 송금</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">직접지급명령 신청 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권원·미지급·고용 갈래입니다.</strong></p>\n<ul>\n<li><strong>양육비 판결문·심판서·조정조서 (집행권원)</strong></li>\n<li><strong>송달증명·확정증명 (집행력 확인)</strong></li>\n<li><strong>2회 이상 미지급 자료 (입금 통장·내용증명)</strong></li>\n<li><strong>채무자 인적사항 (주민등록번호·주소)</strong></li>\n<li><strong>채무자 고용주 정보 (회사명·사업자번호·주소)</strong></li>\n<li><strong>본인·자녀 가족관계증명서·기본증명서</strong></li>\n<li><strong>본인 신분증·인감증명서·통장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채무자 고용주 정보를 모르면 \"재산명시·재산조회\" 또는 양육비이행관리원 1644-6621을 통한 신용·근로 조회를 먼저 활용하는 흐름. 자영업·일용직은 직접지급명령 대신 채권압류·추심 트랙 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>집행권원 형식</strong> — 판결·심판·조정·공정증서.</li>\n<li><strong>2회 미지급 요건</strong> — 정기금 양육비 채권 한정.</li>\n<li><strong>고용주 정보</strong> — 모르면 재산조회·CSA 활용.</li>\n<li><strong>회사 거부·이직</strong> — 새 직장 갱신 신청.</li>\n<li><strong>CSA 추심과 병행</strong> — 한쪽만 선택 의무 없음.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 직접지급명령과 미지급',
        summary:
          '창원지방법원 2022브10014(창원지방법원, 2023.04.27 결정) 영역에서 법원은 양육비 사건에서 정기금 양육비 채권에 대한 집행권원이 확정되어 있는 경우 채무자가 정당한 사유 없이 양육비를 지급하지 아니한 사정 등을 종합해 양육비 집행 트랙을 다룬 사례 흐름이 있습니다. 가사소송법 제63조의2는 채무자의 정기적 수입에 대한 \"양육비 직접지급명령\"을 통해 채권자가 직접 회사로부터 양육비를 받을 수 있도록 정한 영역.',
        takeaway: '집행권원 + 2회 이상 미지급 + 고용주 정보가 보이면 가정법원 직접지급명령으로 회사 월급에서 자동 공제 가능한 흐름.',
      },
    ],
    faq: [
      {
        question: 'CSA를 안 거치고 바로 신청해도 되나요?',
        answer:
          '<strong>네. 가사소송법 63조의2 직접지급명령은 채권자가 가정법원에 직접 신청하는 영역입니다.</strong>',
      },
      {
        question: '몇 번 미지급해야 신청 가능한가요?',
        answer:
          '<strong>정당한 사유 없이 2회 이상 미지급한 사정이 핵심 요건인 영역입니다.</strong>',
      },
      {
        question: '회사 정보를 모르면 어떻게 하나요?',
        answer:
          '<strong>가정법원 재산명시·재산조회 또는 양육비이행관리원 신용·근로 조회를 먼저 활용하는 영역입니다.</strong>',
      },
      {
        question: '채무자가 이직하면 명령이 끝나나요?',
        answer:
          '<strong>새 직장 갱신 신청으로 이어 받을 수 있는 영역입니다.</strong>',
      },
      {
        question: '자영업자에게도 신청할 수 있나요?',
        answer:
          '<strong>직접지급명령은 정기적 근로소득이 핵심. 자영업자는 채권압류·추심 트랙으로 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '직접지급명령 절차', href: '/guide/child-support/child-support-direct-payment-order-procedure' },
      { label: '직접지급 vs CSA', href: '/guide/child-support/child-support-direct-vs-agency-comparison' },
      { label: '고용주 거부 대응', href: '/guide/child-support/child-support-direct-payment-employer-refusal' },
      { label: '제3채무자 처리', href: '/guide/child-support/child-support-direct-payment-third-party-employer' },
      { label: '강제집행 방법', href: '/guide/child-support/child-support-enforcement-method' },
    ],
  },
];
