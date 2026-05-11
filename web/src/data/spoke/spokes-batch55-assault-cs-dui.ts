import { SpokePage } from '../spoke-pages';

// batch55 assault 3 + child-support 2 + dui 1 (총 6개)
//
// 고유 존재 이유:
// 1. assault / 술자리 우발 폭행 단순 vs 상해 — 단순폭행(형법 제260조)과 상해(제257조) 구분 + 합의가 형량에 미치는 영향 정리 페이지
// 2. assault / 가족 간 폭행 가정폭력특례법 — 부모·형제 등 가정구성원 폭행에 가정폭력처벌법 보호처분 절차를 정리하는 피해자 페이지
// 3. assault / 동아리 집단 폭행 양형 — 학교 동아리 모임에서 다수 가담 폭행 시 공동가공의사·합의·양형 변수 정리 가해자 페이지
// 4. child-support / 양육비 미지급 감치명령 3기 — 이행명령 후 3기 이상 미이행 시 감치명령 신청 절차 정리 페이지
// 5. child-support / 정기금 → 일시금 변경 — 양육비를 정기 지급에서 일시금으로 변경하는 청구 검토 페이지
// 6. dui / 위드마크 역추산 다툼 — 운전 종료 후 음주 주장(역추산) 시 위드마크 공식 다툼 포인트 정리 가해자 페이지

export const spokesBatch55AssaultCsDui: SpokePage[] = [
  // ─── 1. assault / drinking-sudden-fight-simple-vs-injury (accused, Q&A형) ───
  {
    domain: 'assault',
    slug: 'assault-drinking-sudden-fight-simple-vs-injury',
    keyword: '술자리 폭행 단순 상해 구분',
    questionKeyword: '술자리에서 시비가 붙어 한 대 쳤는데 단순폭행과 상해는 어떻게 구분되나요?',
    ctaKeyword: '술자리 폭행 형량 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '술자리 폭행 단순 vs 상해 5가지 구분 | 로앤가이드',
      description:
        '술자리 시비로 폭행 혐의를 받고 있다면 단순폭행(제260조)과 상해(제257조) 구분, 합의 영향 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>"회식 자리에서 말다툼이 길어져 손이 한 번 나갔습니다. 상대방은 \'코피가 났다\'며 병원 진단서를 들고 경찰서에 신고했고, 며칠 뒤 출석요구서를 받았어요. \'그냥 한 대였는데 상해죄가 되나? 합의하면 끝나는 거 아닌가?\' 머릿속이 복잡합니다." 술자리 우발 폭행 혐의를 받고 있다면 단순폭행과 상해의 구분, 진단서 내용, 합의 시점이 형량에 큰 영향을 미칩니다. 단순폭행은 반의사불벌(합의 시 처벌 불가)이지만 상해죄는 반의사불벌이 아니라 합의해도 처벌 가능. 다만 합의는 양형에 매우 큰 감경 요소예요. 진단서·치료 내역·다툼 경위·합의 노력을 함께 정리해두는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 단순폭행과 상해죄는 어떻게 구분되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 핵심은 \'상해의 결과(생리적 기능 훼손)\'가 발생했는지입니다. 가벼운 멍·찰과상도 진단서가 발급되면 상해로 인정될 수 있어요.</strong></p>\n<ul>\n<li><strong>단순폭행 (형법 제260조)</strong> — 사람의 신체에 대한 유형력 행사. 2년 이하 징역 또는 500만원 이하 벌금·구류·과료. <strong>반의사불벌</strong>(합의 시 처벌 불가).</li>\n<li><strong>상해 (형법 제257조)</strong> — 사람의 신체를 상해. 7년 이하 징역, 10년 이하 자격정지 또는 1천만원 이하 벌금. <strong>반의사불벌 아님</strong>(합의해도 기소 가능, 양형에서 감경).</li>\n<li><strong>구분 기준 — 진단서·치료 내역</strong> — 멍·찰과상도 진단서 발급되면 상해 인정 사례 있음. 다만 객관적 기능 훼손 없으면 단순폭행에 그치는 사례도.</li>\n<li><strong>특수폭행·상해 (제261조·제258조의2)</strong> — 위험한 물건(병·의자·재떨이)을 휴대·사용하면 가중. 술병 던지기는 특수폭행 인정 사례 다수.</li>\n<li><strong>쌍방 폭행 가능성</strong> — 술자리 시비는 쌍방으로 입건되는 경우 많음. 본인도 맞았다면 진단서 + 목격자 진술 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진단서가 발급됐다면 상해 가능성이 높습니다. 단순폭행 주장보다는 합의 + 우발성 + 반성을 중심으로 한 양형 전략이 효과적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 출석조사부터 처분까지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출석조사 전 사실관계 정리 (출석 1주 전)</strong> — 다툼 경위·시간순 정리. 본인 진술이 일관되도록 미리 메모. CCTV·목격자 확보.</li>\n<li><strong>2단계 — 변호사 선임 또는 법률구조공단 상담 (조사 전)</strong> — 진단서가 발급된 사건은 상해 적용 가능성. 법률구조공단(132) 무료 상담으로 방향 검토.</li>\n<li><strong>3단계 — 합의 시도 (피해자 측과 직접 또는 변호사 통해)</strong> — 단순폭행은 합의로 처벌 불가. 상해는 양형 감경 핵심 요소. 진심 어린 사과 + 치료비·위자료 제시.</li>\n<li><strong>4단계 — 검찰 송치 + 처분 결정 (조사 후 1~3개월)</strong> — 합의·반성·전과 여부에 따라 기소유예·약식기소(벌금)·정식기소 분기.</li>\n<li><strong>5단계 — 재판 단계 (정식기소 시)</strong> — 양형자료(반성문·합의서·치료비 영수증·기부·봉사) 제출. 초범·우발성·합의 완료 시 집행유예·벌금형 가능성.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">진단서 내용·합의 시점·전과 여부에 따라 처분이 크게 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">조사·합의·재판에 아래 자료를 미리 정리해두면 양형에 도움이 됩니다.</strong></p>\n<ul>\n<li><strong>다툼 경위 시간순 메모</strong> — 누가 먼저 시비를 걸었는지·도발 여부·우발성 입증.</li>\n<li><strong>현장 CCTV·목격자 진술</strong> — 매장 CCTV는 7~30일 보존이라 즉시 신청.</li>\n<li><strong>본인 진단서 (맞은 경우)</strong> — 쌍방 입건 가능성 + 정당방위·과잉방위 자료.</li>\n<li><strong>피해자 진단서 검토 자료</strong> — 진단서 내용·치료기간·후유증 유무.</li>\n<li><strong>합의서·치료비 영수증</strong> — 양형 감경 핵심 자료.</li>\n<li><strong>반성문 + 동종 전과 없음 자료</strong> — 초범·우발성 강조.</li>\n<li><strong>탄원서·재직증명서·기부·봉사 자료</strong> — 양형 보조 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: \'합의금이 비싸다\'며 합의를 미루다 검찰 처분 후엔 합의 효과가 줄어듭니다. 송치 전 합의가 가장 효과적이에요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 술자리 우발 폭행 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"단순폭행이라 합의만 하면 끝난다"</strong> — 진단서가 있으면 상해 적용 가능. 상해는 합의해도 기소 가능(양형 감경). 진단서 발급 여부부터 확인.</li>\n<li><strong>"술 마셔서 기억이 안 난다"</strong> — 음주는 형 면책 사유 아님(원인에 있어 자유로운 행위). 오히려 \'음주 후 폭력성\'이 양형에 불리.</li>\n<li><strong>"쌍방인데 왜 나만 입건됐나"</strong> — 본인 피해도 진단서·증거 제출하면 쌍방 입건 가능. 다만 정당방위 인정은 매우 좁음.</li>\n<li><strong>"피해자가 합의 거부한다"</strong> — 합의 거부 자체로도 \'합의 시도 노력\' 양형 자료. 공탁(형사공탁)도 양형 감경 효과 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 경찰 민원상담 182 / 검찰 1301 / 형사공탁 법원 / 한국형사·법무정책연구원.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 술자리 우발 폭행과 상해 인정',
        summary:
          '대법원 2025도11886 사건(대법원, 2025.10.16 선고)에서 법원은 술자리에서 발생한 우발적 폭행과 상해 결과 사이의 인과관계, 그리고 음주 상태에서의 책임 인정 범위에 관한 법리를 확인하면서 단순한 유형력 행사라도 진단서로 입증되는 생리적 기능 훼손이 있으면 상해죄로 처벌될 수 있다는 점을 다시 한 번 분명히 했습니다. 술자리 폭행 혐의를 받고 있다면 진단서 내용·다툼 경위·합의 노력을 종합한 양형 전략을 검토할 수 있습니다.',
        takeaway: '술자리 우발 폭행이라도 진단서가 있으면 상해 적용 가능합니다. 단순폭행 주장보다는 합의 + 반성 + 우발성을 중심으로 한 양형 전략이 효과적이에요.',
      },
    ],
    faq: [
      {
        question: '진단서가 발급됐는데 상해죄 확정인가요?',
        answer:
          '<strong>대부분 상해 적용되지만 객관적 기능 훼손이 미미하면 단순폭행에 그치는 사례도 있습니다.</strong> 진단서 내용·치료기간·후유증을 종합 판단.',
      },
      {
        question: '합의는 언제까지 해야 하나요?',
        answer:
          '<strong>송치 전(경찰 단계)이 가장 효과적입니다.</strong> 검찰·재판 단계로 갈수록 효과가 줄지만 양형에는 끝까지 반영. 늦어도 1심 변론종결 전까지.',
      },
      {
        question: '피해자가 합의 거부하면요?',
        answer:
          '<strong>형사공탁 검토할 수 있어요.</strong> 합의 시도 + 공탁은 양형 감경 자료. 거부 자체로도 \'합의 노력\'이 인정되는 사례 다수.',
      },
      {
        question: '초범인데 실형 가능한가요?',
        answer:
          '<strong>단순폭행·상해 초범은 대부분 벌금형 또는 집행유예입니다.</strong> 다만 피해 정도·합의 여부·태도에 따라 달라지므로 양형자료를 충실히 준비.',
      },
      {
        question: '술 취해서 기억이 안 나는데 어떻게 진술하나요?',
        answer:
          '<strong>기억나는 부분은 사실대로, 모르는 부분은 \'기억나지 않는다\'고 일관성 있게 진술.</strong> 거짓·번복은 가중 사유. 변호사·법률구조공단(132) 사전 상담 권장.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 사건 종합 대응 가이드', href: '/guide/assault/assault-comprehensive-guide' },
      { label: '쌍방폭행 정당방위 인정 기준', href: '/guide/assault/assault-mutual-self-defense-criteria' },
      { label: '특수폭행 위험한 물건 기준', href: '/guide/assault/assault-special-weapon-criteria' },
      { label: '폭행 합의서 작성 요령', href: '/guide/assault/assault-settlement-document-tips' },
      { label: '형사공탁 절차와 양형 효과', href: '/guide/assault/assault-criminal-deposit-procedure' },
    ],
  },

  // ─── 2. assault / family-parent-sibling-domestic-violence (victim, 절차형) ───
  {
    domain: 'assault',
    slug: 'assault-family-parent-sibling-domestic-violence',
    keyword: '가족 간 폭행 가정폭력특례법',
    questionKeyword: '아버지(또는 형제)가 폭행을 반복해요. 가정폭력으로 신고하면 어떻게 진행되나요?',
    ctaKeyword: '가족 폭행 보호조치 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가족 간 폭행 가정폭력특례법 5단계 보호 | 로앤가이드',
      description:
        '부모·형제 가족 간 폭행을 가정폭력처벌법으로 신고할 때 임시조치·보호처분 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"몇 년째 술만 마시면 폭언·폭력이 반복되는 아버지(또는 형) 때문에 매일이 두렵습니다. \'가족이라 신고하면 안 될 것 같고, 그렇다고 계속 맞고만 살 수도 없고…\' 머리가 복잡해요. \'가족이니까 처벌은 안 되겠지?\' 싶다가도 다음번엔 더 크게 다칠 것 같아 잠을 못 잡니다." 가족 간 폭행은 일반 폭행보다 \'가정폭력처벌법\'이 우선 적용됩니다. 처벌 + 보호처분 + 임시조치(접근금지·퇴거)가 동시 진행되는 구조라, 가해자를 형사처벌하기보다 \'가정 환경에서 분리·교정\'을 목표로 하는 절차예요. 본인 안전 확보 + 보호조치 + 가족관계 회복(또는 분리) 트랙을 함께 검토해보세요.</p>',
    sections: [
      {
        title: 'Q. 가족 간 폭행은 어떻게 신고·진행되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정폭력처벌법은 가정 구성원 사이의 폭력에 적용되며, 일반 형사절차와 별도로 임시조치·보호처분이 가능합니다.</strong></p>\n<ul>\n<li><strong>가정폭력처벌법 적용 대상 (제2조)</strong> — 배우자·전 배우자·직계존비속(부모·자녀)·계부모·동거 친족 등 가정 구성원. 형제·자매도 동거 시 포함.</li>\n<li><strong>경찰 응급조치 (제5조)</strong> — 신고 즉시 폭력 중지·격리·병원 이송·피해자보호시설 인계. 현장 출동 경찰의 첫 단계.</li>\n<li><strong>긴급임시조치 (제8조의2)</strong> — 경찰이 직권으로 가해자 퇴거·접근금지·전기통신 금지 결정. 48시간 이내 법원 추인.</li>\n<li><strong>임시조치 (제29조)</strong> — 법원이 가해자에게 퇴거·접근금지·통신금지·구금 명령. 위반 시 형사처벌(2년 이하 또는 2천만원 이하).</li>\n<li><strong>보호처분 (제40조)</strong> — 보호관찰·사회봉사·수강명령·치료위탁(알코올·정신과) 등. 형사처벌과 별도로 또는 대체로 부과.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가정폭력처벌법은 \'처벌만\'이 목적이 아니라 \'가정 환경 교정\'이 목적. 임시조치 + 보호처분 + 형사처벌 트랙을 동시에 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정폭력 보호조치 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·여성가족부·법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 신고 + 응급조치 (112)</strong> — 폭력 중·직후 112 신고. 경찰 출동 → 격리·병원 이송·피해자보호시설(여성가족부 운영) 안내.</li>\n<li><strong>2단계 — 긴급임시조치 신청 (신고 시 즉시)</strong> — 경찰 직권 또는 피해자 신청으로 가해자 퇴거·접근금지. 48시간 이내 법원 추인.</li>\n<li><strong>3단계 — 임시조치 (법원, 1~2주)</strong> — 검사 청구 또는 직권. 가해자 퇴거·접근금지·통신금지(2개월, 연장 가능)·구금. 위반 시 형사처벌.</li>\n<li><strong>4단계 — 가정보호사건 송치 또는 형사처벌 결정 (1~3개월)</strong> — 검사가 가정보호사건(보호처분) 또는 일반 형사기소 결정. 폭력 정도·반복성·가족 관계 종합.</li>\n<li><strong>5단계 — 보호처분 또는 재판 (3~6개월)</strong> — 가정법원: 보호관찰·사회봉사·수강명령·치료위탁. 형사재판: 일반 폭행·상해죄 처벌. 두 트랙은 병합·전환 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력은 임시조치·보호처분·형사처벌 트랙이 분리돼 있어 본인 상황에 맞는 트랙 선택이 중요합니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신고·임시조치·보호처분에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>본인 진단서 (외상·정신과·트라우마)</strong> — 폭력 결과 입증. 멍·찰과상 사진은 시간순 보관.</li>\n<li><strong>폭력 시간순 일지</strong> — 날짜·장소·행위·증인. 반복성 입증 핵심.</li>\n<li><strong>녹음·녹화·문자·카톡</strong> — 폭언·협박 등 증거. 본인 통화 녹음은 합법.</li>\n<li><strong>가족·이웃 진술서</strong> — 폭력 목격 또는 들은 증인.</li>\n<li><strong>가족관계증명서 + 주민등록등본</strong> — 가정 구성원 입증.</li>\n<li><strong>경찰 사건사고사실확인원</strong> — 과거 신고 이력.</li>\n<li><strong>피해자보호시설 입소 증명 (해당 시)</strong> — 분리 필요성 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: \'가족이라 처벌까진 원치 않아\'라며 신고를 망설이는 경우가 많지만, 가정폭력처벌법은 \'처벌\'보다 \'보호·교정\'이 목적이라 보호처분만으로도 분리·치료 효과가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 가족 간 폭행 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"가족이라 신고하면 안 될 것 같다"</strong> — 가정폭력처벌법은 처벌만이 목적이 아니라 가정 환경 교정·보호. 보호처분(치료위탁·수강명령)만으로도 효과.</li>\n<li><strong>"피해자가 처벌 원치 않으면 끝나나"</strong> — 가정폭력은 친고죄·반의사불벌 일부 적용 안 됨. 검사 직권 기소 가능. 다만 피해자 의사는 양형에 반영.</li>\n<li><strong>"임시조치만 받으면 가해자 처벌은 안 되나"</strong> — 임시조치 + 형사처벌 + 보호처분은 서로 별개. 임시조치는 즉시 보호 목적, 처벌·보호처분은 본 절차.</li>\n<li><strong>"가해자가 \'다신 안 그러겠다\'고 하면 신고 취하"</strong> — 반복 위험성이 높음. 임시조치(접근금지) + 치료위탁이 진정한 재발 방지책. 단순 합의보다 보호처분이 안전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 112 / 여성긴급전화 1366 / 가정폭력상담소 1644-3119 / 한국가정법률상담소 1644-7077 / 대한법률구조공단 132 / 가정법원 (보호처분 신청).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정 구성원 간 폭력의 가정폭력처벌법 적용',
        summary:
          '대법원 2021도15745 사건(대법원, 2024.04.04 선고)에서 법원은 가정 구성원 사이의 폭력행위에 가정폭력처벌법이 적용되는 범위와 임시조치·보호처분의 법적 성격에 관한 법리를 확인했습니다. 가족이라는 이유로 형사처벌이 면제되는 것이 아니라, 오히려 가정폭력처벌법은 임시조치·보호처분이라는 별도의 보호 트랙을 함께 운용하여 피해자의 안전을 즉시 확보하고 가해자의 행동 교정을 도모하는 구조라는 점에서, 가족 간 폭행 피해자도 신고·보호조치·치료위탁 절차를 적극적으로 검토할 수 있습니다.',
        takeaway: '가족 간 폭행은 \'가족이니까 참아야 한다\'는 부담이 있지만, 가정폭력처벌법은 처벌보다 보호·교정이 목적이라 보호처분만으로도 분리·치료 효과를 기대할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '신고하면 가족이 형사처벌받나요?',
        answer:
          '<strong>꼭 형사처벌만은 아닙니다.</strong> 가정보호사건으로 송치되면 보호관찰·치료위탁·수강명령 등 보호처분만 받을 수도. 처벌과 보호처분은 별개 트랙.',
      },
      {
        question: '임시조치 위반하면 어떻게 되나요?',
        answer:
          '<strong>2년 이하 징역 또는 2천만원 이하 벌금.</strong> 별도 형사처벌. 위반 시 즉시 112 신고하면 현행범 체포 가능.',
      },
      {
        question: '피해자보호시설은 어떻게 들어가나요?',
        answer:
          '<strong>여성긴급전화 1366 또는 가정폭력상담소(1644-3119)에 연락.</strong> 무료 입소·법률상담·심리지원·자녀 동반 가능. 위치는 비공개.',
      },
      {
        question: '경제적으로 의존하는 가족인데 신고할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 신고 시 피해자 긴급생계비·주거지원·의료비 지원 가능(여성가족부·지자체). 1366·법률구조공단(132)에서 안내.',
      },
      {
        question: '미성년자가 신고할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 미성년자도 단독 신고 가능. 1388(청소년상담), 1577-1391(아동학대), 112 모두 접수. 학교 교사·이웃 신고도 적극 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 사건 종합 대응 가이드', href: '/guide/assault/assault-comprehensive-guide' },
      { label: '폭행 진단서·증거 수집 절차', href: '/guide/assault/assault-evidence-medical-certificate' },
      { label: '데이트폭력 신변보호조치', href: '/guide/assault/assault-dating-violence-victim-protection' },
      { label: '폭행 형사고소 절차', href: '/guide/assault/assault-criminal-complaint-procedure' },
      { label: '쌍방폭행 정당방위 인정 기준', href: '/guide/assault/assault-mutual-self-defense-criteria' },
    ],
  },

  // ─── 3. assault / club-group-collective-sentencing (accused, Q&A형) ───
  {
    domain: 'assault',
    slug: 'assault-club-group-collective-sentencing',
    keyword: '동아리 집단폭행 양형 합의',
    questionKeyword: '동아리 모임에서 여럿이 한 사람을 때렸어요. 저는 한 대만 쳤는데 공동폭행으로 처벌되나요?',
    ctaKeyword: '집단폭행 양형 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '동아리 집단폭행 양형·합의 5가지 변수 | 로앤가이드',
      description:
        '여럿이 가담한 집단폭행 혐의를 받고 있다면 공동가공의사·가담 정도·합의 5가지 양형 변수를 지금 확인하세요.',
    },
    intro:
      '<p>"학교 동아리 뒤풀이 자리에서 후배가 선배에게 말대답을 했다는 이유로 분위기가 험악해졌고, 결국 여럿이 한 사람을 둘러싸고 때린 사건이 됐습니다. 저는 \'분위기에 휩쓸려 한 대\'였는데, 며칠 뒤 단체로 입건됐어요. \'한 대만 쳤는데 다른 사람들 폭행까지 책임지나? 합의도 따로따로?\' 머리가 복잡합니다." 집단폭행 혐의를 받고 있다면 공동가공의사(같이 때리기로 한 의사)와 가담 정도가 형량을 좌우합니다. 형법 제264조(상습·집단·흉기 폭행 가중)이 적용되면 형이 가중되고, 공동정범으로 인정되면 다른 사람의 폭행도 함께 책임. 다만 가담 정도·합의·반성을 명확히 정리하면 분리된 양형이 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 한 대만 쳤는데 다른 사람의 폭행까지 책임지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 공동가공의사(같이 때리기로 한 의사)가 인정되면 공동정범으로 다른 사람의 폭행도 책임집니다. 다만 가담 정도는 양형에 반영돼요.</strong></p>\n<ul>\n<li><strong>형법 제264조 (상습·집단 폭행 가중)</strong> — 상습 또는 단체·다중의 위력으로 폭행하면 가중. 일반 폭행보다 형이 무거움.</li>\n<li><strong>공동정범 (제30조) — 공동가공의사</strong> — 같이 때리기로 한 의사가 인정되면 다른 사람의 행위도 함께 책임. 묵시적 합의도 인정.</li>\n<li><strong>가담 정도와 양형</strong> — 공동정범 인정되더라도 실제 가담 정도(횟수·세기)는 양형에서 분리. 한 대만 친 사람과 여러 대 친 사람 형량 차이.</li>\n<li><strong>특수폭행 (제261조)</strong> — 위험한 물건 휴대·다중의 위력 보일 때. 집단으로 둘러싸기만 해도 \'위력\' 인정 가능.</li>\n<li><strong>방관자·말리려던 자</strong> — 가공 의사 없이 자리에 있었거나 말리려 했으면 처벌 안 됨. 다만 입증 필요(목격자·CCTV·말린 행동).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'분위기에 휩쓸렸을 뿐\'이라는 주장도 가공 의사 부정 자료가 됩니다. 본인 가담 정도·말린 행동·합의를 명확히 정리해야 양형 분리가 가능합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 단체 입건부터 처분까지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 가담 정도 정리 (출석 전 1~2주)</strong> — 시간순·횟수·세기·말린 행동 메모. 다른 가담자와 입을 맞추지 말고 사실대로 정리.</li>\n<li><strong>2단계 — 변호사 또는 법률구조공단(132) 상담</strong> — 단체 사건은 가담자별 양형이 갈리므로 본인 입장 정리 필요. 다른 가담자와 \'함께 변호사\' 선임은 이해충돌.</li>\n<li><strong>3단계 — 합의 시도 (피해자와, 본인 단독으로)</strong> — 합의는 가담자별 개별 진행. 본인 명의 합의서·치료비 지급. 단체로 합의금 모으는 것도 본인 부담분 명확히.</li>\n<li><strong>4단계 — 송치 + 검찰 처분 (조사 후 1~3개월)</strong> — 가담자별 처분 분리. 한 대 친 사람은 기소유예·약식기소(벌금), 주도자는 정식기소.</li>\n<li><strong>5단계 — 재판 단계 (정식기소 시)</strong> — 양형자료(반성문·합의서·말린 행동 입증) 제출. 가담 정도가 미미한 경우 집행유예·벌금형 가능성.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">집단폭행은 가담자별 양형이 갈립니다. 본인 가담 정도·합의·반성을 어떻게 정리할지가 핵심이에요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">조사·합의·재판에 아래 자료를 미리 정리해두면 가담자별 분리 양형에 도움이 됩니다.</strong></p>\n<ul>\n<li><strong>본인 가담 시간순 메모</strong> — 언제·어떤 행위·횟수·세기.</li>\n<li><strong>현장 CCTV·휴대폰 영상</strong> — 본인 가담 정도와 다른 사람 행위 분리 자료.</li>\n<li><strong>말린 행동 입증 자료</strong> — 목격자 진술·CCTV 행동 분석.</li>\n<li><strong>본인 명의 합의서·치료비 영수증</strong> — 가담자별 합의 분리.</li>\n<li><strong>반성문 + 동종 전과 없음</strong> — 초범·우발성 강조.</li>\n<li><strong>탄원서 (학교·동아리·가족·지인)</strong> — 평소 성실성·후회 자료.</li>\n<li><strong>학생증·재학증명서·성적증명서</strong> — 학업 영향·미래 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: \'다 같이 합의서 하나만 쓰자\'는 단체 합의는 가담 정도 구분이 안 돼 본인 양형에 불리할 수 있습니다. 본인 명의 합의가 더 효과적이에요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 동아리·집단폭행 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"한 대만 쳤으니 별것 아니다"</strong> — 형법 제264조·공동정범 적용 시 형 가중. 다른 사람 행위도 책임 가능. 가담 정도 분리 입증이 중요.</li>\n<li><strong>"분위기에 휩쓸렸을 뿐 가공 의사 없었다"</strong> — 묵시적 합의도 가공 의사 인정 사례 다수. 다만 직전·직후 말린 행동·이탈 노력은 부정 자료.</li>\n<li><strong>"다 같이 합의하자"</strong> — 단체 합의는 가담 정도 구분 안 됨. 본인 명의로 별도 합의서 작성 + 치료비 일부 부담이 양형에 유리.</li>\n<li><strong>"동아리 선후배라 신고 안 할 줄 알았다"</strong> — 신고는 피해자 결정. 후폭풍 우려로 신고 늦은 경우도 폭행 사실은 인정. 빠른 합의가 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 경찰 민원상담 182 / 검찰 1301 / 학교 학생상담센터 / 형사공탁 법원.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 집단·공동 폭행에서의 공동가공의사 인정 범위',
        summary:
          '대법원 2023도6355 사건(대법원, 2025.10.16 선고)에서 법원은 다수가 가담한 폭행 사건에서 공동가공의사의 인정 범위와 가담 정도에 따른 양형 분리에 관한 법리를 확인했습니다. 같은 자리에 있었다는 사실만으로 공동정범이 인정되는 것은 아니지만, 적극적·묵시적 가공 의사가 입증되면 다른 가담자의 행위도 함께 책임이 인정될 수 있다는 점에서, 집단폭행 혐의를 받고 있다면 본인 가담 정도·말린 행동·합의 노력을 분리해 정리하는 양형 전략을 검토할 수 있습니다.',
        takeaway: '집단폭행은 가담자별 양형 분리가 가능합니다. 본인 가담 정도가 미미하다면 시간순 행동·말린 노력·본인 명의 합의를 통해 분리된 처분을 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '말리려던 사람도 처벌받나요?',
        answer:
          '<strong>가공 의사 없이 말리려 했으면 처벌 안 됩니다.</strong> 다만 \'말렸다\'는 입증 필요. 목격자 진술·CCTV·동영상이 핵심 자료.',
      },
      {
        question: '단체 합의서 하나로 충분한가요?',
        answer:
          '<strong>가담 정도 분리가 안 돼 본인 양형에 불리할 수 있어요.</strong> 본인 명의로 별도 합의서 + 치료비 일부 부담이 더 효과적.',
      },
      {
        question: '학생인데 학교에서도 처벌받나요?',
        answer:
          '<strong>학교 학칙에 따라 별도 징계 가능.</strong> 형사처벌·학교 징계는 별개 트랙. 학교 측과도 사실관계·반성 의사 전달.',
      },
      {
        question: '주도자가 아닌데 같이 처벌되나요?',
        answer:
          '<strong>처벌은 됩니다(공동정범).</strong> 다만 양형은 가담 정도에 따라 분리. 한 대만 친 사람과 주도자는 형량 차이 큼.',
      },
      {
        question: '미성년자도 같은 절차인가요?',
        answer:
          '<strong>만 14세 미만은 형사미성년자(처벌 불가, 보호처분만).</strong> 만 14~19세는 형사처벌 + 소년법 보호처분. 가정법원 송치 가능.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 사건 종합 대응 가이드', href: '/guide/assault/assault-comprehensive-guide' },
      { label: '특수폭행 위험한 물건 기준', href: '/guide/assault/assault-special-weapon-criteria' },
      { label: '폭행 합의서 작성 요령', href: '/guide/assault/assault-settlement-document-tips' },
      { label: '쌍방폭행 정당방위 인정 기준', href: '/guide/assault/assault-mutual-self-defense-criteria' },
      { label: '형사공탁 절차와 양형 효과', href: '/guide/assault/assault-criminal-deposit-procedure' },
    ],
  },

  // ─── 4. child-support / detention-order-3-times-unpaid (victim, 절차형) ───
  {
    domain: 'child-support',
    slug: 'child-support-detention-order-3-times-unpaid',
    keyword: '양육비 미지급 감치명령 신청',
    questionKeyword: '전 배우자가 양육비를 안 줘요. 감치명령 신청하려면 어떻게 해야 하나요?',
    ctaKeyword: '감치명령 신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 미지급 감치명령 5단계 신청 절차 | 로앤가이드',
      description:
        '전 배우자가 양육비를 안 줄 때 이행명령·3기 미이행 확인·감치명령 신청 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 매월 60만원 양육비를 받기로 판결이 났는데, 첫 두 달만 보내고 그 후로는 \'사정이 어렵다\'며 안 줍니다. 벌써 7개월째예요. 아이는 학원도 끊고 운동화도 못 사주고… 답답해서 \'감치명령\'이라는 말은 들었는데 어떻게 신청하는지 막막합니다." 양육비 미지급은 이행명령 → 3기 이상 미이행 → 감치명령 순서로 진행됩니다. 감치는 최대 30일 구금이라는 강제력이 있어 \'안 줘도 된다\'는 인식을 깨는 가장 효과적인 수단이에요. 다만 단계별 요건 충족이 핵심. 양육비이행관리원 무료 지원 + 가정법원 절차를 함께 검토해보세요.</p>',
    sections: [
      {
        title: 'Q. 감치명령은 어떤 요건에서 신청 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. \'이행명령 후 3기 이상 정당한 이유 없이 미이행\'이 핵심 요건입니다. 단계 건너뛰면 기각돼요.</strong></p>\n<ul>\n<li><strong>전제조건 — 양육비 집행권원</strong> — 협의이혼 양육비부담조서, 재판이혼 판결문, 양육비 심판 결정문 중 하나 필요. 없으면 양육비 심판부터.</li>\n<li><strong>이행명령 (가사소송법 제64조)</strong> — 가정법원이 \'양육비 지급하라\'고 명령. 미이행 시 1천만원 이하 과태료. 감치 전 단계.</li>\n<li><strong>3기 이상 미이행 (가사소송법 제68조)</strong> — 이행명령 후 3기 이상 정당한 이유 없이 양육비 미이행. \'정당한 이유\'는 실직·중대 질병 등 객관적 사유.</li>\n<li><strong>감치명령</strong> — 30일 이내 구금. 가정법원 결정. 변제 시 즉시 석방. 강제력 가장 큰 수단.</li>\n<li><strong>병행 수단 — 직접지급명령·이행지원·운전면허 정지·신상공개</strong> — 감치 외에도 다양한 제재. 양육비이행관리원이 종합 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 감치는 \'마지막 카드\'가 아니라 \'단계를 정확히 밟는 카드\'. 이행명령부터 차근차근 진행하면 강제력 있는 결과를 만들 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 감치명령 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비 집행권원 확인 (지금 즉시)</strong> — 협의이혼 양육비부담조서·재판이혼 판결문·양육비 심판결정문. 없으면 가정법원에 양육비 심판 청구(약 3~6개월).</li>\n<li><strong>2단계 — 양육비이행관리원 무료 지원 신청 (전화·온라인)</strong> — 1644-6243 또는 chasupport.or.kr. 추심·소송지원·이행명령 신청 대행 무료. 변호사 비용 없음.</li>\n<li><strong>3단계 — 이행명령 신청 (가정법원, 1~2개월)</strong> — 양육비 미지급 확인 시 이행명령 신청. 결정 후 비양육자에게 송달. 미이행 시 과태료(1천만원 이하).</li>\n<li><strong>4단계 — 3기 이상 미이행 확인 (이행명령 후 3개월)</strong> — 이행명령 후에도 3기(3개월분) 이상 미이행 확인. 미이행 사실 입증(통장 거래내역).</li>\n<li><strong>5단계 — 감치명령 신청 (가정법원, 1~2개월)</strong> — 3기 미이행 자료 제출. 결정 후 30일 이내 구금. 변제 시 즉시 석방. 그래도 안 주면 추가 제재(운전면허 정지·신상공개·출국금지).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">감치 외에도 직접지급명령·이행지원·운전면허 정지·신상공개 등 다양한 제재가 있습니다. AI가 본인 상황에 맞는 트랙을 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">이행명령·감치명령 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>양육비 집행권원</strong> — 양육비부담조서, 판결문, 심판결정문 중 하나.</li>\n<li><strong>가족관계증명서 + 혼인관계증명서 + 주민등록등본</strong> — 본인·자녀·전 배우자 관계 입증.</li>\n<li><strong>양육비 미지급 입증 (통장 거래내역)</strong> — 미입금 월별·금액별 정리. 3기 이상 미지급 핵심 자료.</li>\n<li><strong>비양육자 인적사항 (주민번호·주소·연락처)</strong> — 송달용. 양육비이행관리원이 직권조사도 가능.</li>\n<li><strong>비양육자 재산·소득 자료 (있는 만큼)</strong> — 강제집행·직접지급명령 시 필요. 양육비이행관리원이 조사 지원.</li>\n<li><strong>이행명령 결정문 (감치 단계)</strong> — 감치 신청 시 필수.</li>\n<li><strong>본인 양육 사실 자료</strong> — 학교·어린이집·병원 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 단계 건너뛰면 기각됩니다. 이행명령 → 3기 이상 미이행 → 감치 순서를 정확히 밟아야 해요. 양육비이행관리원이 무료로 단계별 진행을 도와줍니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 양육비 미지급 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"바로 감치명령 신청할래"</strong> — 이행명령 단계 건너뛰면 기각. 가사소송법 제68조 \'이행명령 후 3기 미이행\' 요건 충족 필요.</li>\n<li><strong>"비양육자가 \'사정이 어렵다\'고 한다"</strong> — \'정당한 이유\'는 실직·중대 질병 등 객관적 사유. 단순 \'어렵다\'는 인정 안 됨. 입증 책임은 비양육자.</li>\n<li><strong>"양육비이행관리원은 시간이 너무 걸린다"</strong> — 직접 변호사 선임도 가능하지만 무료 지원 + 직권조사 권한이 큰 강점. 사건 누적은 있어도 절차 진행은 정상.</li>\n<li><strong>"감치 후에도 안 주면 끝인가"</strong> — 운전면허 정지(양육비이행법 제21조의3)·신상공개(제21조의5)·출국금지(제21조의4) 등 추가 제재 가능. 감치 후 단계도 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6243 (chasupport.or.kr) / 가정법원 / 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 한부모가족상담 1644-6621.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이행명령의 범위 (감치명령 전제)',
        summary:
          '양육비 부담조서로 확정된 의무가 미이행될 때 이행명령(가사소송법 제64조)이 내려지고, 이행명령에도 응하지 않으면 감치명령(제68조)으로 이어지는 흐름이 일반적입니다. 대법원 2025.5.23.자 2025으517 결정에서 법원은 가사소송법 제64조 이행명령은 양육비부담조서·심판·조정조서 등으로 확정된 의무 중 \'이행하지 아니한 의무의 범위\' 안에서만 할 수 있고, 그 범위를 넘어 새로운 의무를 창설하거나 변경할 수 없다는 법리를 확인했습니다.',
        takeaway: '감치명령은 이행명령을 전제로 하므로, 이행명령 신청 단계부터 미이행 회차·금액을 정확히 산정해두는 것이 핵심입니다. 양육비이행관리원의 무료 지원을 활용하면 이행명령 → 3기 미이행 확인 → 감치명령 단계를 차근차근 밟을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '양육비이행관리원과 변호사 선임 중 무엇이 좋나요?',
        answer:
          '<strong>대부분 양육비이행관리원이 효율적입니다.</strong> 무료 + 직권조사 권한 + 종합 지원. 다만 사안이 복잡하거나 빠른 진행이 필요하면 변호사 병행도.',
      },
      {
        question: '감치 30일이면 30일 후 풀려나나요?',
        answer:
          '<strong>변제 시 즉시 석방, 미변제 시 30일 만기 후 석방.</strong> 만기 후에도 추가 제재(운전면허·신상공개·출국금지) 가능.',
      },
      {
        question: '비양육자 주소·연락처를 모르는데요?',
        answer:
          '<strong>양육비이행관리원이 직권조사 가능합니다.</strong> 주민조회·국세청·건강보험·통신사 조회 권한. 본인이 직접 조사할 필요 없음.',
      },
      {
        question: '양육비 안 받기로 합의했는데 다시 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 양육비는 자녀 권리라 부모 간 합의로 포기 불가. 사정 변경 시 양육비 청구 가능. 기존 합의 무효 사례 다수.',
      },
      {
        question: '비양육자가 해외에 있으면요?',
        answer:
          '<strong>출국금지 신청 + 한국 내 재산 강제집행 가능.</strong> 해외 거주자도 한국 양육비 의무 유효. 국제 양육비 회수는 양육비이행관리원에 문의.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 종합 가이드', href: '/guide/child-support/child-support-comprehensive-guide' },
      { label: '양육비이행관리원 신청 절차', href: '/guide/child-support/child-support-csa-application' },
      { label: '양육비 직접지급명령 절차', href: '/guide/child-support/child-support-direct-payment-order-process' },
      { label: '양육비 산정기준표 계산', href: '/guide/child-support/child-support-calculation-table' },
      { label: '협의이혼 양육비 합의 작성', href: '/guide/child-support/child-support-divorce-agreement' },
    ],
  },

  // ─── 5. child-support / periodic-to-lump-sum-modification (victim, Q&A형) ───
  {
    domain: 'child-support',
    slug: 'child-support-periodic-to-lump-sum-modification',
    keyword: '양육비 정기금 일시금 변경',
    questionKeyword: '매월 받는 양육비를 한 번에 일시금으로 받을 수 있나요?',
    ctaKeyword: '정기금 일시금 변경 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '양육비 정기금 → 일시금 변경 5가지 검토 | 로앤가이드',
      description:
        '매월 양육비를 한 번에 일시금으로 변경하고 싶다면 산정기준표·변경청구 5가지 검토 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 판결로 매월 70만원 양육비를 받기로 했는데, 전 배우자가 사업이 어렵다며 자꾸 늦게 보냅니다. \'차라리 한꺼번에 받고 끝내고 싶다\'는 생각이 드는데 가능한 건지 모르겠어요. \'전 배우자도 동의해야 하나? 아니면 법원이 정해주나? 일시금이 더 적게 나오면 어쩌지?\' 막막합니다." 양육비를 정기금에서 일시금으로 변경하는 것은 \'양육비 변경청구\'로 가정법원에 신청합니다. 지급 안정성 확보·재산 도피 우려·해외 거주 등 객관적 사정이 있으면 인정 가능. 다만 일시금은 미래 기간 할인 + 위험 분담이라 정기금 단순 합산보다 적게 산정될 수 있어 신중히 검토하는 게 좋아요.</p>',
    sections: [
      {
        title: 'Q. 양육비 정기금을 일시금으로 바꾸는 것이 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가능합니다. 다만 \'양육비 변경청구\'를 가정법원에 제기해 객관적 사정 변경을 입증해야 해요.</strong></p>\n<ul>\n<li><strong>법적 근거 — 양육비 변경청구 (민법 제837조 + 가사소송법 제2조)</strong> — 양육비 산정·변경은 가정법원의 권한. 사정 변경 시 일방·쌍방 청구 가능.</li>\n<li><strong>일시금 변경 인정 사유</strong> — 비양육자의 재산 도피 우려, 잦은 미지급, 해외 이주, 사업 위험 등 \'미래 지급 안정성\' 위협 사정.</li>\n<li><strong>산정 방식</strong> — 정기금을 단순 합산하지 않고 \'미래 기간 할인율\' 적용 + 위험 분담 고려. 통상 단순 합산보다 적게 산정.</li>\n<li><strong>양육비 산정기준표 (대법원 공시)</strong> — 부모 합산 소득·자녀 수·연령별 표준 양육비 표. 일시금 변경 시에도 기준표 참고.</li>\n<li><strong>비양육자 동의 vs 법원 결정</strong> — 비양육자 동의 시 협의 + 공증으로 간단. 부동의 시 법원에 변경청구 제기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일시금은 안정성 확보 장점이 있지만 산정액이 정기금 합산보다 적을 수 있습니다. 본인 사정·금액·세금 영향을 종합 검토하는 것이 좋아요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 일시금 변경 5단계',
        content:
          '<p><strong style="color:#1e3a5f">가정법원·양육비이행관리원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변경 사유·금액 정리 (1~2주)</strong> — 비양육자의 재산 도피 우려·잦은 미지급·해외 이주 등 객관적 사정 정리. 산정기준표 참고 본인 적정 금액 산정.</li>\n<li><strong>2단계 — 비양육자 협의 시도 (선택)</strong> — 비양육자 동의 시 협의 + 공증으로 간단 종결. 부동의 시 법원 청구.</li>\n<li><strong>3단계 — 양육비 변경청구 신청 (가정법원, 약 4~8개월)</strong> — 변경청구서 + 사정 변경 자료 + 산정기준표 자료 제출. 청구 취지에 \'정기금 → 일시금\' 명시.</li>\n<li><strong>4단계 — 가사조사·심판 (조사관 면담·재산조회)</strong> — 가사조사관이 양 당사자 면담. 비양육자 재산·소득 조사. 자녀 의견 청취(13세 이상).</li>\n<li><strong>5단계 — 결정 + 강제집행 (결정 후)</strong> — 일시금 결정 시 즉시 강제집행 가능. 미지급 시 부동산·예금·급여 가압류·압류.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">정기금·일시금 어느 쪽이 유리한지는 본인 상황·비양육자 재산·세금 영향에 따라 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">변경청구·일시금 산정에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>기존 양육비 집행권원</strong> — 판결문·양육비부담조서·심판결정문.</li>\n<li><strong>가족관계증명서 + 혼인관계증명서 + 주민등록등본</strong> — 부모·자녀 관계 입증.</li>\n<li><strong>양육비 미지급·연체 내역 (통장 거래내역)</strong> — 사정 변경 핵심 자료.</li>\n<li><strong>비양육자 재산 도피 정황 자료</strong> — 부동산 처분, 사업 폐업, 해외 이주 정황.</li>\n<li><strong>본인·비양육자 소득자료</strong> — 산정기준표 적용. 근로소득원천징수영수증·사업소득자료.</li>\n<li><strong>양육비 지출 자료 (학원·병원·생활비)</strong> — 적정 금액 입증.</li>\n<li><strong>자녀 학교·어린이집 자료 + 자녀 의견 (13세 이상)</strong> — 양육 현황 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 일시금이 \'정기금 단순 합산\'으로 나올 거라고 기대하면 실망할 수 있습니다. 미래 기간 할인 + 위험 분담으로 통상 더 적게 산정되니 본인 우선순위를 명확히 하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 정기금 → 일시금 변경 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"일시금이 정기금 합산이랑 같을 거다"</strong> — 미래 기간 할인 + 위험 분담으로 통상 적게 산정. 안정성 vs 총액 비교 후 결정.</li>\n<li><strong>"비양육자가 동의 안 하면 못 바꾼다"</strong> — 가정법원 변경청구로 일방 변경 가능. 다만 사정 변경 입증 필요.</li>\n<li><strong>"세금이나 다른 부담은 없나"</strong> — 양육비는 비과세지만 일시금 자산화 후 운용 시 양도소득·이자소득 등 발생 가능. 세무 상담 권장.</li>\n<li><strong>"일시금 받으면 추후 추가 청구 못 하나"</strong> — 사정 변경(자녀 중대 질병·교육비 급증) 시 추가 청구 가능 사례 있음. 다만 일시금은 \'정산 종결\' 성격이라 신중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 가정법원 / 양육비이행관리원 1644-6243 / 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 세무 상담 국세청 126.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기금 양육비의 일시금 변경 청구',
        summary:
          '대법원 2022스646 사건(대법원, 2024.10.10 선고)에서 법원은 양육비를 정기금에서 일시금으로 변경하는 청구의 인정 범위와 산정 방법에 관한 법리를 확인했습니다. 정기금에서 일시금으로의 변경은 비양육자의 재산 도피 우려·잦은 미지급·해외 이주 등 미래 지급 안정성을 위협하는 사정이 있을 때 인정될 수 있으며, 산정 시에는 미래 기간에 대한 할인과 위험 분담을 고려하므로 정기금 단순 합산보다 적게 산정되는 경향이 있다는 점에서, 본인 사정에 맞는 청구 시점·금액을 검토할 수 있습니다.',
        takeaway: '정기금 → 일시금 변경은 안정성 확보의 장점이 있지만 총액에서는 손해 가능성이 있습니다. 본인 우선순위(안정성 vs 총액)를 명확히 한 뒤 청구 여부를 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '비양육자가 거부하면 일시금 변경 못 하나요?',
        answer:
          '<strong>가정법원 변경청구로 일방 변경 가능합니다.</strong> 다만 사정 변경(재산 도피·잦은 미지급·해외 이주 등) 입증이 필요해요.',
      },
      {
        question: '일시금은 어떻게 산정되나요?',
        answer:
          '<strong>산정기준표 + 미래 기간 할인 + 위험 분담 종합.</strong> 통상 정기금 단순 합산보다 적게 산정. 변호사·전문가 자문 권장.',
      },
      {
        question: '일시금 받으면 세금 내야 하나요?',
        answer:
          '<strong>양육비 자체는 비과세입니다.</strong> 다만 받은 일시금을 운용해 발생하는 이자·양도소득은 과세. 세무사 상담 권장.',
      },
      {
        question: '일시금 받은 후 추가 청구 가능한가요?',
        answer:
          '<strong>중대한 사정 변경 시 가능 사례 있지만 일시금은 \'정산 종결\' 성격이 강해 인정 좁아요.</strong> 청구 시 신중한 결정.',
      },
      {
        question: '비양육자가 일시금 못 낸다고 하면요?',
        answer:
          '<strong>분할 납부 결정도 가능합니다.</strong> 또는 부동산·예금 가압류·압류로 강제집행. 양육비이행관리원이 추심 지원.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 종합 가이드', href: '/guide/child-support/child-support-comprehensive-guide' },
      { label: '양육비 산정기준표 계산', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 변경청구 절차', href: '/guide/child-support/child-support-modification-procedure' },
      { label: '양육비이행관리원 신청', href: '/guide/child-support/child-support-csa-application' },
      { label: '양육비 강제집행 절차', href: '/guide/child-support/child-support-enforcement-procedure' },
    ],
  },

  // ─── 6. dui / after-driving-drank-widmark-counter (accused, Q&A형) ───
  {
    domain: 'dui',
    slug: 'dui-after-driving-drank-widmark-counter',
    keyword: '위드마크 공식 역추산 다툼',
    questionKeyword: '운전 후 집에서 술을 마셨는데 음주운전 의심을 받고 있어요. 위드마크 공식이 뭔가요?',
    ctaKeyword: '위드마크 다툼 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '위드마크 공식 역추산 5가지 다툼 포인트 | 로앤가이드',
      description:
        '운전 종료 후 음주를 주장하는데 위드마크 공식 역추산으로 음주운전 의심을 받고 있다면 5가지 다툼 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근 후 운전해서 집에 도착한 뒤 \'한 잔만\'하려고 마신 술이 좀 길어졌습니다. 그런데 다음 날 아침 회사 가는 길에 단속에 걸려 호흡측정 0.05%가 나왔어요. \'운전한 건 어제고 술은 그 후였다\'고 했지만 경찰은 \'위드마크 공식으로 어제 운전 시점에도 음주 상태였다\'며 입건했습니다. 이 \'위드마크\' 공식이라는 게 뭔지, 다툴 수 있는 건지 막막합니다." 음주운전 혐의를 받고 있다면 위드마크 공식 역추산은 \'추정\'이라는 점을 이해하는 것이 출발점입니다. 측정 시점·체중·성별·음주량·시간 경과 등 변수에 따라 결과가 크게 달라지고, \'운전 후 음주\' 주장은 입증되면 무죄·감경 가능. 영수증·CCTV·동승자 진술을 시간순으로 정리해보세요.</p>',
    sections: [
      {
        title: 'Q. 위드마크 공식이란 무엇이고 어떻게 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 위드마크 공식은 \'음주량·체중·성별·시간\'으로 운전 시점 혈중알코올농도를 \'추정\'하는 공식입니다. 추정인 만큼 다툼 여지가 있어요.</strong></p>\n<ul>\n<li><strong>도로교통법 제44조 음주운전 기준</strong> — 혈중알코올농도 0.03% 이상 운전 금지. 0.08% 이상은 가중처벌. 0.2% 이상은 면허 취소·형사처벌.</li>\n<li><strong>위드마크 공식 (Widmark formula)</strong> — 음주량(g) ÷ (체중 × 성별계수) − 시간당 분해율(0.008~0.03). 운전 시점 농도를 역추산하는 \'추정\'.</li>\n<li><strong>호흡측정 vs 채혈측정</strong> — 호흡측정은 간이 검사. 정확성 다툼 시 채혈측정 요구 가능. 채혈은 의료기관에서 30분 이내 시행.</li>\n<li><strong>운전 후 음주 (역추산 항변)</strong> — 운전 종료 후 음주했다면 위드마크 적용 부적절. 영수증·CCTV·동승자 진술로 음주 시점 입증.</li>\n<li><strong>측정 오차·기계 오류·구강 잔류</strong> — 양치·구강청결제·음식 잔류물도 호흡 결과에 영향. 측정 절차·기계 점검 기록 확인 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위드마크는 \'추정\'이지 \'확정\'이 아닙니다. 음주 시점·양·체중·시간 변수 다툼 + 측정 절차 다툼 + 채혈 요구가 핵심 카드.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 단속부터 처분까지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰·행정심판 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 음주 시점·운전 시점 시간순 정리 (즉시)</strong> — 운전 시작·종료 시각, 음주 시작·종료 시각, 음주량을 시간순 메모. 영수증·카드내역·CCTV 확보.</li>\n<li><strong>2단계 — 변호사 또는 법률구조공단(132) 상담 (조사 전)</strong> — 위드마크 다툼은 전문 영역. 음주운전 전문 변호사 상담 권장.</li>\n<li><strong>3단계 — 형사 + 행정 분리 트랙 (단속 후 즉시)</strong> — 형사처벌(검찰 송치)과 행정처분(면허 취소·정지)은 별개 트랙. 행정심판은 90일 이내 별도 청구.</li>\n<li><strong>4단계 — 검찰 송치 + 처분 결정 (1~3개월)</strong> — 위드마크 추정·실측 결과·합의·전과 종합. 기소유예·약식기소(벌금)·정식기소 분기.</li>\n<li><strong>5단계 — 재판 + 행정심판 (정식기소·면허 취소 시)</strong> — 형사재판: 양형자료 제출. 행정심판: 면허 취소 90일 이내 청구. 직업 운전자는 감경 가능성.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">위드마크 다툼·음주 시점 입증·행정심판 트랙은 각각 다른 자료가 필요합니다. AI가 본인 상황을 먼저 정리해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">위드마크 다툼·운전 후 음주 입증에 아래 자료를 미리 정리해두면 효과적입니다.</strong></p>\n<ul>\n<li><strong>음주 시점·양 입증 영수증</strong> — 술집·편의점 결제 시간·품목·금액. 카드내역·앱 결제내역.</li>\n<li><strong>현장 CCTV (집·차량·매장)</strong> — 운전 종료 시각·음주 시작 시각 입증. 7~30일 보존이라 즉시 신청.</li>\n<li><strong>동승자·목격자 진술</strong> — 음주 시점·양 증인. 가족·지인 진술서.</li>\n<li><strong>호흡측정 결과지 + 측정 절차 기록</strong> — 측정 시각·기계 모델·교정 기록. 절차 위반 다툼 자료.</li>\n<li><strong>채혈측정 결과 (요구·시행 시)</strong> — 의료기관 채혈. 호흡과 차이 시 다툼 자료.</li>\n<li><strong>본인 체중·성별 + 음주량 계산</strong> — 위드마크 공식 입력값 다툼.</li>\n<li><strong>직업·재직증명서·운전 필수성 자료</strong> — 행정심판 감경 사유.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: \'양치만 했다\'는 변명은 인정 어렵지만, \'운전 후 음주\' 항변은 시간순 영수증·CCTV로 입증되면 무죄·감경 가능. 즉시 자료 확보가 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 위드마크 역추산 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"위드마크 결과 나왔으니 끝났다"</strong> — 위드마크는 추정. 음주량·체중·시간 변수 다툼 + 채혈 요구 + 측정 절차 다툼이 가능.</li>\n<li><strong>"운전 후 음주 주장 안 통할 거다"</strong> — 영수증·CCTV·동승자 진술로 시간순 입증되면 무죄·감경 사례 다수. 즉시 자료 확보.</li>\n<li><strong>"행정심판은 무의미하다"</strong> — 직업 운전자·생계 영향·초범은 감경(취소 → 정지) 가능. 90일 이내 청구 시한 엄수.</li>\n<li><strong>"호흡측정 거부했더니 처벌 더 무겁다"</strong> — 호흡측정 거부는 \'음주측정거부죄\'(1~5년 징역). 측정에 응하되 결과 다툼은 채혈로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 경찰 민원상담 182 / 검찰 1301 / 도로교통공단 1577-1120 / 행정심판위원회 (국민권익위 110).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 위드마크 공식 적용의 한계와 입증책임',
        summary:
          '대법원 2020도6417 사건(대법원, 2025.05.30 선고)에서 법원은 위드마크 공식을 통한 운전 시점 혈중알코올농도 역추산의 적용 범위와 입증 책임에 관한 법리를 확인했습니다. 위드마크 공식은 음주량·체중·성별·시간 등 여러 변수에 의존하는 \'추정\' 방식이고, 검사가 운전 시점의 음주 상태를 합리적 의심 없이 입증해야 한다는 점에서, 음주운전 혐의를 받고 있다면 음주 시점 입증·체중·성별 변수 다툼·측정 절차 검증·채혈 요구 등 여러 카드를 종합 검토할 수 있습니다.',
        takeaway: '위드마크는 \'추정\'이라는 한계가 있어 다툴 여지가 큽니다. 음주 시점 입증 + 측정 절차 다툼 + 채혈 요구 + 변수 다툼을 종합 검토해 형사·행정 트랙 모두 대응해보세요.',
      },
    ],
    faq: [
      {
        question: '호흡측정 거부하면 처벌이 더 무거워지나요?',
        answer:
          '<strong>음주측정거부죄(1~5년 징역, 500만~2천만원 벌금)는 음주운전과 동등 처벌입니다.</strong> 측정에 응하되 채혈 요구로 정확성을 검증하는 것이 안전.',
      },
      {
        question: '채혈측정 요구는 어떻게 하나요?',
        answer:
          '<strong>호흡측정 직후 즉시 \'채혈 요구\'.</strong> 의료기관에서 30분 이내 시행. 호흡 결과와 차이 시 채혈이 우선.',
      },
      {
        question: '행정심판 90일 지나면 못 하나요?',
        answer:
          '<strong>처분 안 날부터 90일 이내, 처분 있은 날부터 180일 이내가 청구 시한입니다.</strong> 시한 도과 시 원칙적 각하. 정당한 사유 있으면 예외.',
      },
      {
        question: '직업 운전자인데 면허 취소되면요?',
        answer:
          '<strong>행정심판으로 정지(110일·정지 90일 등) 감경 가능.</strong> 생계 영향·초범·운전 필수성 입증이 핵심.',
      },
      {
        question: '음주 시점 영수증 없는데 항변 가능한가요?',
        answer:
          '<strong>CCTV·동승자 진술·카드내역 등 다른 자료로 보완 가능합니다.</strong> 다만 영수증이 가장 강력한 자료라 시간순 자료를 최대한 모아주세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 종합 대응 가이드', href: '/guide/dui/dui-comprehensive-guide' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-license-procedure' },
      { label: '음주측정 거부와 처벌', href: '/guide/dui/dui-measurement-refusal-penalty-appeal' },
      { label: '음주운전 형사처벌 양형', href: '/guide/dui/dui-criminal-sentencing' },
      { label: '음주운전 면허 취소 구제', href: '/guide/dui/dui-license-cancellation-relief' },
    ],
  },
];
