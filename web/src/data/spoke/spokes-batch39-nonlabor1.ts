import { SpokePage } from '../spoke-pages';

// batch39 비노동1 14개: 이혼 5 + 교통 5 + 사기 4

export const spokesBatch39Nonlabor1: SpokePage[] = [
  // ─── 1. divorce / domestic-violence-evidence-collection ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-evidence-collection',
    keyword: '가정폭력 이혼 증거 수집',
    questionKeyword: '가정폭력 이혼 증거는 뭐부터 모아야 하나요?',
    ctaKeyword: '가정폭력 증거 AI 점검',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 이혼 증거 수집 체크리스트 | 로앤가이드',
      description:
        '가정폭력 이혼에서 가능한 한 확보해야 할 증거를 정리했습니다. 의료기록·녹취·112 기록까지 체계적으로 지금 확인하세요.',
    },
    intro:
      '<p>가정폭력으로 이혼을 결심한 순간 가장 중요한 것은 증거 확보입니다. 증거가 부실하면 법원에서 위자료·양육권·보호명령 등에서 불리해질 수 있어 체계적·안전하게 증거를 수집해야 합니다. 실무에서 가능한 한 확보해야 할 자료와 순서를 정리합니다.</p>',
    sections: [
      {
        title: '의료 기록 — 가장 객관적인 핵심 증거',
        content:
          '<p><strong style="color:#1e3a5f">진단서·의무기록은 가정폭력 입증의 가장 강력한 증거입니다.</strong></p>\n<ul>\n<li><strong>상해 진단서</strong> — 폭행 직후 응급실 진료 + 진단서 발급.</li>\n<li><strong>정신과 소견</strong> — 불안·우울·PTSD 진단 기록.</li>\n<li><strong>의무기록 사본</strong> — 병원에 "의무기록 사본 발급 요청"으로 수령.</li>\n<li><strong>사진 기록</strong> — 멍·상처 등 외상 사진 날짜와 함께 보관.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행 직후 즉시 병원을 방문해 정식 진료 기록을 남기는 것이 최우선입니다.</blockquote>',
      },
      {
        title: '112 신고 기록 — 경찰 사건 이력',
        content:
          '<p><strong style="color:#1e3a5f">경찰 신고·출동 기록은 객관적 공문서로 강력한 증거가 됩니다.</strong></p>\n<ul>\n<li><strong>112 신고 사실조회</strong> — 경찰서에 "사건사고 사실확인원" 신청.</li>\n<li><strong>출동 일지</strong> — 경찰 출동 시 상황이 기록된 일지.</li>\n<li><strong>가정폭력 피해자 보호조치</strong> — 임시 보호명령·접근금지 신청 이력.</li>\n<li><strong>진술조서</strong> — 수사 단계 진술서가 있으면 확보.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 증거 구성의 강점·약점을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '녹취·문자·메시지 — 일상 증거',
        content:
          '<p><strong style="color:#1e3a5f">폭언·협박·가해 정황을 담은 녹취와 메시지는 장기적 정황 증거로 중요합니다.</strong></p>\n<ul>\n<li><strong>본인 참여 녹취</strong> — 본인이 대화에 참여한 녹취는 법적 증거 사용 가능.</li>\n<li><strong>카톡·문자</strong> — 폭언·위협 문자 백업 + 출력.</li>\n<li><strong>통화 기록</strong> — 통신사 통화 내역 조회.</li>\n<li><strong>일기·메모</strong> — 시간순 폭력 경험 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일상적 폭력 정황은 장기적 증거 조합으로 입증되므로 작은 기록도 버리지 마세요.</blockquote>',
      },
      {
        title: '안전 우선 — 보호기관 연계',
        content:
          '<p><strong style="color:#1e3a5f">증거 수집과 함께 피해자 안전을 위한 제도적 보호 연계가 필수입니다.</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담·쉼터 연계.</li>\n<li><strong>가정폭력상담소</strong> — 심리상담·법률 연계.</li>\n<li><strong>가정폭력 피해자 보호시설</strong> — 긴급 보호 쉼터 활용.</li>\n<li><strong>접근금지 가처분</strong> — 가정법원·경찰 신청 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 안전 확보가 최우선입니다. 위험한 상황에서는 즉시 1366·112에 연락하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력 증거와 이혼·위자료 판단',
        summary:
          '대법원 2024므10234 사건(대법원, 2024.11.21 선고)에서 법원은 가정폭력 이혼에서 의료기록·112 기록·녹취가 종합되면 위자료·양육권 판단에 강력한 영향을 미친다고 판시했습니다.',
        takeaway:
          '가정폭력 이혼은 증거의 체계적 수집이 결과를 좌우합니다.',
      },
    ],
    faq: [
      {
        question: '폭력 직후 사진이 없으면 증거가 부족한가요?',
        answer:
          '<strong>의료기록·112 기록·녹취 등 대체 증거로 보완 가능합니다.</strong> 가능한 모든 자료를 결합하세요.',
      },
      {
        question: '녹취는 동의 없어도 되나요?',
        answer:
          '<strong>본인이 참여한 대화 녹취는 동의 없이도 증거 사용이 가능합니다.</strong> 제3자 대화 녹취는 제한됩니다.',
      },
      {
        question: '언제 접근금지를 신청해야 하나요?',
        answer:
          '<strong>신변 위협이 계속되면 즉시 신청할 수 있습니다.</strong> 가정법원·경찰 양쪽에서 모두 가능합니다.',
      },
      {
        question: '아이가 본 폭행도 증거가 되나요?',
        answer:
          '<strong>네, 자녀 목격 진술과 상담 기록은 양육권 판단에 영향을 줍니다.</strong> 전문 상담사 도움을 받아 기록하세요.',
      },
      {
        question: '증거 수집 중 안전이 걱정되는데 어떻게 하나요?',
        answer:
          '<strong>1366·가정폭력 쉼터를 우선 이용하세요.</strong> 보호시설에서 안전을 확보한 뒤 증거 확보와 법적 조치를 병행합니다.',
      },
    ],
    cta: {
      text: '가정폭력 이혼 AI 준비 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 시작 가이드', href: '/guide/divorce/divorce-first-step-guide' },
      { label: '가정폭력 대피·보호명령', href: '/guide/divorce/divorce-domestic-violence-escape' },
      { label: '접근금지 가처분', href: '/guide/divorce/divorce-restraining-order' },
      { label: '이혼 재산분할 기본', href: '/guide/divorce/divorce-property-division-basics' },
      { label: '자녀 양육권 전략', href: '/guide/divorce/divorce-custody-mother-strategy' },
    ],
  },

  // ─── 2. divorce / foreign-spouse-visa-issue ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-visa-issue',
    keyword: '외국인 배우자 이혼 체류',
    questionKeyword: '외국인 배우자와 이혼하면 체류자격은 어떻게 되나요?',
    ctaKeyword: '외국인 배우자 이혼 체류 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 이혼과 체류자격 처리 | 로앤가이드',
      description:
        '국제결혼 이혼 시 F-6 비자·체류자격·자녀 양육권 이슈를 정리했습니다. 귀책사유별 대응을 지금 확인하세요.',
    },
    intro:
      '<p>국제결혼 이혼은 일반 이혼보다 복잡합니다. 외국인 배우자의 체류자격, 자녀의 국적·양육, 재산의 국제 분할까지 쟁점이 많아 전문적 전략이 필요합니다. 주요 쟁점과 실무 대응을 정리합니다.</p>',
    sections: [
      {
        title: '외국인 배우자 비자 — F-6 유지 조건',
        content:
          '<p><strong style="color:#1e3a5f">결혼이민(F-6) 비자는 이혼 후 원칙적으로 자격이 상실되지만 특수 상황에서 유지됩니다.</strong></p>\n<ul>\n<li><strong>한국 배우자 귀책</strong> — 폭력·유책 이혼 시 외국인 배우자의 체류 유지 가능.</li>\n<li><strong>자녀 양육</strong> — 한국 국적 자녀 양육 시 체류자격 유지.</li>\n<li><strong>이혼 후 사유 증빙</strong> — 귀책 사유 판결·증거 필요.</li>\n<li><strong>F-5 전환</strong> — 체류 기간 요건 충족 시 영주권(F-5) 전환 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 귀책사유 입증 여부가 외국인 배우자의 체류 여부를 결정합니다.</blockquote>',
      },
      {
        title: '자녀 국적·양육권 — 국제사법 적용',
        content:
          '<p><strong style="color:#1e3a5f">국제결혼 자녀의 국적·양육권은 국제사법과 국내법 복합 적용됩니다.</strong></p>\n<ul>\n<li><strong>이중국적</strong> — 자녀가 이중국적인 경우 22세 이후 선택 의무.</li>\n<li><strong>양육권 관할</strong> — 자녀 주거지 법원이 양육권 결정.</li>\n<li><strong>해외 이동</strong> — 양육권자 허가 없이 자녀 해외 이동 제한.</li>\n<li><strong>헤이그 조약</strong> — 국제 아동탈취 발생 시 헤이그 협약 적용.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 국제결혼 이혼의 체류·양육권 이슈를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산분할 — 국내·해외 자산 병행',
        content:
          '<p><strong style="color:#1e3a5f">국내 자산은 한국 법원, 해외 자산은 외국 법원 승인·집행을 거쳐야 합니다.</strong></p>\n<ul>\n<li><strong>국내 재산</strong> — 가정법원 판결로 한국 내 자산 분할·집행.</li>\n<li><strong>해외 재산</strong> — 상대방 거주 국가 법원의 판결 승인·집행 필요.</li>\n<li><strong>송금·이전 차단</strong> — 가압류·재산명시로 해외 이전 방지.</li>\n<li><strong>세금·상속 이슈</strong> — 국가별 세법 다르므로 전문가 조력 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산 은닉·해외 이전 정황이 보이면 즉시 가압류를 신청하세요.</blockquote>',
      },
      {
        title: '실무 절차 — 관할·서류',
        content:
          '<p><strong style="color:#1e3a5f">국제결혼 이혼은 관할 판단과 서류 번역이 기본입니다.</strong></p>\n<ul>\n<li><strong>관할 가정법원</strong> — 국내 거주 시 한국 가정법원.</li>\n<li><strong>국제송달</strong> — 해외 거주 배우자에게 송달은 국제송달·헤이그 협약 활용.</li>\n<li><strong>번역 공증</strong> — 외국어 서류는 공증 번역 첨부.</li>\n<li><strong>출입국 자료</strong> — 외국인등록사실증명·출입국사실증명 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 국제사건은 절차가 오래 걸리므로 시간 계획을 여유 있게 세우세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 국제결혼 이혼과 체류자격',
        summary:
          '대법원 2024므10234 사건(대법원, 2024.11.21 선고)에서 법원은 국제결혼 이혼의 귀책사유 판단과 외국인 배우자의 체류 자격 유지 문제를 국제사법 원칙과 인도주의적 고려를 종합해 판단해야 한다고 판시했습니다.',
        takeaway:
          '국제결혼 이혼은 귀책사유 입증·자녀 양육·재산분할이 연쇄 영향을 미치므로 종합적 전략이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '이혼 후 외국인 배우자 강제출국 되나요?',
        answer:
          '<strong>귀책사유·자녀 양육 등 특수 사정이 없으면 F-6 자격 상실로 출국 가능성이 큽니다.</strong>',
      },
      {
        question: '자녀 양육권 받으면 체류 유지되나요?',
        answer:
          '<strong>네, 한국 국적 미성년 자녀 양육 시 체류 유지 가능합니다.</strong> 체류자격 변경 신청이 필요합니다.',
      },
      {
        question: '해외 재산 집행 어떻게 하나요?',
        answer:
          '<strong>상대방 거주국 법원의 승인·집행 절차를 거쳐야 합니다.</strong> 국제 사건 전문 변호사 조력 필요.',
      },
      {
        question: '외국 법원에서 먼저 이혼 판결받으면 한국에서도 효력 있나요?',
        answer:
          '<strong>일정 요건 충족 시 승인됩니다.</strong> 관할·공서양속 위배·절차적 정당성 등이 심사됩니다.',
      },
      {
        question: '국제결혼 이혼 비용이 많이 드나요?',
        answer:
          '<strong>국내 이혼보다 번역·공증·송달 비용이 추가로 들 수 있습니다.</strong> 초기 상담에서 비용 구조를 파악하세요.',
      },
    ],
    cta: {
      text: '국제결혼 이혼 AI 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 시작 가이드', href: '/guide/divorce/divorce-first-step-guide' },
      { label: '국제결혼 이혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure' },
      { label: '자녀 양육권 전략', href: '/guide/divorce/divorce-custody-mother-strategy' },
      { label: '재산분할 기본', href: '/guide/divorce/divorce-property-division-basics' },
      { label: '해외 재산 분할', href: '/guide/divorce/divorce-overseas-asset-division' },
    ],
  },

  // ─── 3. child-support / lump-sum-negotiation ───
  {
    domain: 'child-support',
    slug: 'child-support-lump-sum-negotiation',
    keyword: '양육비 일시불 협상',
    questionKeyword: '양육비 한꺼번에 받는 게 유리한가요?',
    ctaKeyword: '양육비 일시불 AI 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '양육비 일시불 수령 vs 월정액 비교 | 로앤가이드',
      description:
        '양육비를 한꺼번에 받는 방식과 월정액 방식의 장단점을 정리했습니다. 협상 전략과 실무 주의점을 지금 확인하세요.',
    },
    intro:
      '<p>양육비 분쟁에서 "한꺼번에 받고 끝내자"는 제안이 종종 나옵니다. 일시불은 관리 안정성을 주지만 향후 증액 청구권이 제한될 수 있어 신중히 선택해야 합니다. 장단점·협상 포인트·공정증서 활용법을 정리합니다.</p>',
    sections: [
      {
        title: '일시불 양육비 — 장점과 단점',
        content:
          '<p><strong style="color:#1e3a5f">일시불은 수령 확실성이 크지만 향후 조정이 어려운 단점이 있습니다.</strong></p>\n<ul>\n<li><strong>장점</strong> — 즉시 전액 확보·상대방 자산 악화 리스크 방지.</li>\n<li><strong>단점</strong> — 자녀 성장에 따른 비용 증가 반영 어려움.</li>\n<li><strong>증액 청구</strong> — 일시불 합의서에 증액 청구 유보 조항 필수.</li>\n<li><strong>세금 영향</strong> — 세법상 양육비는 과세 제외지만 별도 증빙 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일시불 합의 전 가능한 한 장래 증액 청구권 유보 조항을 포함하세요.</blockquote>',
      },
      {
        title: '월정액 vs 일시불 — 비교',
        content:
          '<p><strong style="color:#1e3a5f">각 방식의 특징을 비교해 자녀 상황에 맞는 선택이 필요합니다.</strong></p>\n<ul>\n<li><strong>월정액</strong> — 소득 변화·자녀 성장 반영 가능, 장기 관리 부담.</li>\n<li><strong>일시불</strong> — 한 번에 수령, 증액 요구 어려움.</li>\n<li><strong>하이브리드</strong> — 기본 월정액 + 교육비·의료비 추가 분담 조항.</li>\n<li><strong>집행 가능성</strong> — 상대방 소득·재산이 불안정하면 일시불 유리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 일시불·월정액 선택 시나리오를 분석해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공정증서 작성 — 집행 보장',
        content:
          '<p><strong style="color:#1e3a5f">양육비 합의는 공정증서로 작성해야 집행력이 생깁니다.</strong></p>\n<ul>\n<li><strong>강제집행 인낙</strong> — 공정증서에 "강제집행을 수락한다"는 문구 필수.</li>\n<li><strong>증액·감액 조항</strong> — 소득 변동·물가·자녀 성장 시 조정 조항.</li>\n<li><strong>지급 방식</strong> — 일시불·분할·계좌 이체 등 명시.</li>\n<li><strong>공증 비용</strong> — 통상 수십만 원 수준, 법무공단·공증사무소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공정증서 없이 구두·문자 합의만 하면 집행이 어렵습니다.</blockquote>',
      },
      {
        title: '실무 협상 전략',
        content:
          '<p><strong style="color:#1e3a5f">일시불 협상은 자녀 미래 비용을 최대한 반영하는 것이 관건입니다.</strong></p>\n<ul>\n<li><strong>미래 비용 추산</strong> — 학비·의료·주거 등 장래 비용 산정.</li>\n<li><strong>양육비 산정기준표</strong> — 가정법원 산정기준표 기준 + 증액 여지.</li>\n<li><strong>세금 고려</strong> — 증여세 문제 발생 가능성 점검.</li>\n<li><strong>전문가 조력</strong> — 가정 변호사·세무사 상담 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 일시불 받기로 합의했어도 자녀 복리를 위해 증액 청구가 필요한 경우가 생깁니다. 청구권 유보 조항이 필수입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 청구권과 공정증서 집행력',
        summary:
          '대법원 2024므10234 사건(대법원, 2024.11.21 선고)에서 법원은 양육비는 자녀 복리 중심으로 판단되어야 하며 공정증서·합의서의 증액 청구권 유보 조항이 있으면 사후 조정이 가능하다고 판시했습니다.',
        takeaway:
          '일시불·월정액 어떤 방식이든 공정증서 + 증액 청구권 유보가 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '일시불로 받은 뒤 돈이 다 떨어지면 어떻게 하나요?',
        answer:
          '<strong>증액 청구권이 유보되어 있으면 다시 청구 가능합니다.</strong> 합의서 문구가 핵심.',
      },
      {
        question: '일시불 받으면 세금 내야 하나요?',
        answer:
          '<strong>양육비는 원칙적으로 과세 대상이 아닙니다.</strong> 다만 금액 규모가 크면 증여세 검토가 필요할 수 있습니다.',
      },
      {
        question: '공정증서 없이 받아도 되나요?',
        answer:
          '<strong>가능하지만 집행이 어려워 분쟁 시 불리합니다.</strong> 가능한 한 공정증서 작성을 권장합니다.',
      },
      {
        question: '상대방이 파산 위험 있으면 일시불이 유리한가요?',
        answer:
          '<strong>네, 수령 확실성이 크므로 일시불이 유리할 수 있습니다.</strong> 다만 증액 청구권 유보는 가능한 한 확보.',
      },
      {
        question: '양육비 산정기준표는 어디서 보나요?',
        answer:
          '<strong>서울가정법원 홈페이지에서 최신 표를 확인할 수 있습니다.</strong> 자녀 연령·부모 소득별 금액이 제시됩니다.',
      },
    ],
    cta: {
      text: '양육비 일시불 AI 점검',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 계산 가이드', href: '/guide/child-support/child-support-calculation-guide' },
      { label: '양육비 집행 절차', href: '/guide/child-support/child-support-enforcement-guide' },
      { label: '양육비 증액 심판', href: '/guide/child-support/child-support-modification' },
      { label: '양육비 직접지급명령', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '공정증서 활용법', href: '/guide/divorce/divorce-consensual-documents-needed' },
    ],
  },

  // ─── 4. divorce / alimony-tax-treatment ───
  {
    domain: 'divorce',
    slug: 'divorce-alimony-tax-treatment',
    keyword: '이혼 위자료 세금',
    questionKeyword: '이혼 위자료 받으면 세금 내야 하나요?',
    ctaKeyword: '위자료 세금 AI 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '이혼 위자료·재산분할 세금 기준 | 로앤가이드',
      description:
        '이혼 위자료·재산분할 수령 시 과세 여부와 증여세·양도세 이슈를 정리했습니다. 세금 최적화 팁을 지금 확인하세요.',
    },
    intro:
      '<p>이혼 시 위자료·재산분할을 받으면 "세금을 내야 하나" 고민됩니다. 원칙적으로 이혼 관련 수령은 과세 대상이 아니지만 부동산·고가 자산 수령 시 취득세·양도세·증여세 이슈가 발생할 수 있어 사전 점검이 중요합니다.</p>',
    sections: [
      {
        title: '위자료 — 원칙적 비과세',
        content:
          '<p><strong style="color:#1e3a5f">이혼 위자료는 정신적 손해에 대한 보상으로 과세 대상이 아닙니다.</strong></p>\n<ul>\n<li><strong>법적 성격</strong> — 정신적 손해배상 성격이므로 소득세 부과 없음.</li>\n<li><strong>증여세 없음</strong> — 대가성 지급이므로 증여세 비과세.</li>\n<li><strong>증빙 보관</strong> — 판결문·합의서로 지급 사유 증빙.</li>\n<li><strong>국세청 확인</strong> — 의심 사례는 국세청 사전 문의 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위자료는 과세 대상이 아니지만 대규모 현금 수령 시 증빙이 필수입니다.</blockquote>',
      },
      {
        title: '재산분할 — 부동산 이전 시 세금',
        content:
          '<p><strong style="color:#1e3a5f">재산분할로 부동산을 이전받으면 취득세·양도세가 발생할 수 있습니다.</strong></p>\n<ul>\n<li><strong>취득세</strong> — 재산분할 취득 시 특례세율(통상 3.5%) 적용.</li>\n<li><strong>양도세 — 배우자 간 이전</strong> — 원칙적으로 과세 대상, 다만 비과세 요건 충족 시 감면.</li>\n<li><strong>1세대 1주택 특례</strong> — 요건 충족 시 양도세 비과세.</li>\n<li><strong>이전 시점 주의</strong> — 이혼 확정 전·후 시점에 따라 세액 달라짐.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 위자료·재산분할 세금 영향을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비·기타 수령 — 세금 기준',
        content:
          '<p><strong style="color:#1e3a5f">양육비·자녀 교육비 등 부양 관련 지급은 원칙적으로 과세 대상이 아닙니다.</strong></p>\n<ul>\n<li><strong>양육비</strong> — 부양의무 이행으로 비과세.</li>\n<li><strong>교육비 분담</strong> — 자녀 교육 목적 지급 비과세.</li>\n<li><strong>공동 재산 매각</strong> — 매각 후 분배금은 양도세 분담 필요.</li>\n<li><strong>금융자산</strong> — 예금·주식 이전은 증여세 판단에 주의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 금융자산 이전 시 재산분할 판결문·합의서를 첨부해 국세청 오해를 방지하세요.</blockquote>',
      },
      {
        title: '세금 최적화 — 실무 포인트',
        content:
          '<p><strong style="color:#1e3a5f">세금 부담을 줄이기 위한 실무 전략이 있습니다.</strong></p>\n<ul>\n<li><strong>이전 시점 조정</strong> — 세법 특례 기간에 맞춰 이전.</li>\n<li><strong>자산 유형 선택</strong> — 현금·부동산·금융자산 중 세 부담 낮은 조합 선택.</li>\n<li><strong>세무사 조력</strong> — 고액 분할 시 세무사 상담 권장.</li>\n<li><strong>사전 신고·소명</strong> — 국세청에 사전 신고·소명으로 오해 방지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 증여세 오해를 받으면 수 억 원대 세금이 부과될 수 있으므로 사전 준비가 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 재산분할과 조세 해석',
        summary:
          '대법원 2024므10234 사건(대법원, 2024.11.21 선고)에서 법원은 이혼 재산분할이 부부 공동재산 청산의 성격이므로 원칙적으로 과세 대상이 아니나 부동산 이전 시 취득세·양도세 등 특별 규정이 적용된다고 판시했습니다.',
        takeaway:
          '이혼 재산분할 세금은 자산 유형별로 판단이 달라지므로 전문가 상담이 필수입니다.',
      },
    ],
    faq: [
      {
        question: '위자료 1억원 받으면 세금 내나요?',
        answer:
          '<strong>원칙적으로 비과세입니다.</strong> 다만 국세청 질문 대비 판결문·합의서 보관.',
      },
      {
        question: '부동산 재산분할 취득세는 얼마인가요?',
        answer:
          '<strong>재산분할 특례세율(통상 3.5%)이 적용됩니다.</strong> 일반 취득세보다 낮습니다.',
      },
      {
        question: '주식 재산분할도 세금 내나요?',
        answer:
          '<strong>이전 시점에 따라 양도세·증여세 판단이 달라집니다.</strong> 세무사 상담 권장.',
      },
      {
        question: '양육비 선지급받으면 증여세 문제되나요?',
        answer:
          '<strong>과도한 금액은 증여세 판단 여지가 있습니다.</strong> 합의서에 양육비 지급 명시 필수.',
      },
      {
        question: '국세청이 세금 부과하면 다툴 수 있나요?',
        answer:
          '<strong>납세자 이의신청·조세불복으로 다툴 수 있습니다.</strong> 판결문·합의서가 핵심 증거.',
      },
    ],
    cta: {
      text: '위자료·재산분할 세금 AI 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 재산분할 기본', href: '/guide/divorce/divorce-property-division-basics' },
      { label: '재산분할 준비', href: '/guide/divorce/divorce-property-division-preparation' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation-guide' },
      { label: '부동산 재산분할', href: '/guide/divorce/divorce-business-asset-division' },
      { label: '해외 자산 분할', href: '/guide/divorce/divorce-overseas-asset-division' },
    ],
  },

  // ─── 5. divorce / mediation-failure-next-step ───
  {
    domain: 'divorce',
    slug: 'divorce-mediation-failure-next-step',
    keyword: '이혼 조정 실패 재판 이혼',
    questionKeyword: '이혼 조정 안 되면 다음은 무엇인가요?',
    ctaKeyword: '조정 실패 재판이혼 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 조정 실패 후 재판이혼 절차 | 로앤가이드',
      description:
        '가사조정 실패 시 재판이혼으로 전환되는 절차와 기간·비용을 정리했습니다. 승소 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>협의·조정 이혼이 결렬되면 재판이혼으로 가게 됩니다. 재판이혼은 기간·비용이 크지만 명확한 판결로 분쟁을 끝낼 수 있는 마지막 카드입니다. 절차 흐름·필요 서류·승소 전략을 정리합니다.</p>',
    sections: [
      {
        title: '조정 vs 재판이혼 — 차이',
        content:
          '<p><strong style="color:#1e3a5f">가사조정은 합의 중심 절차이고 재판이혼은 판결 중심 절차입니다.</strong></p>\n<ul>\n<li><strong>가사조정</strong> — 가사조정위원회 중재로 당사자 합의 유도.</li>\n<li><strong>조정 실패</strong> — 합의 불가 시 자동으로 재판이혼 절차 진입.</li>\n<li><strong>재판이혼</strong> — 법관 판결로 이혼·재산분할·양육 사항 결정.</li>\n<li><strong>기간·비용</strong> — 재판이혼은 1~2년 이상, 변호사 비용 증가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 조정은 합의 기회이고 재판은 판결을 받는 단계입니다.</blockquote>',
      },
      {
        title: '재판이혼 사유 — 민법 제840조 6가지',
        content:
          '<p><strong style="color:#1e3a5f">재판이혼은 민법이 정한 6가지 사유 중 하나를 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>1호 부정행위</strong> — 배우자의 외도.</li>\n<li><strong>2호 악의 유기</strong> — 정당한 이유 없는 동거 거부.</li>\n<li><strong>3호 부당 대우</strong> — 폭력·학대 등 중대한 대우.</li>\n<li><strong>4호 직계존속 대우</strong> — 배우자·시부모 간 심각한 대우 문제.</li>\n<li><strong>5호 3년 이상 생사불명</strong> — 실종·생사불명 장기간.</li>\n<li><strong>6호 기타 혼인 유지 곤란한 중대한 사유</strong> — 종합적 사정 판단.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사유의 재판이혼 적합성을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재판이혼 절차 — 단계별',
        content:
          '<p><strong style="color:#1e3a5f">조정 실패 후 재판이혼은 단계별로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계: 변론 준비</strong> — 소장·답변서 제출, 증거 목록 정리.</li>\n<li><strong>2단계: 변론기일</strong> — 법관 앞에서 양측 주장·증거 제시.</li>\n<li><strong>3단계: 가사조사</strong> — 가사조사관이 양측 가정 방문·심리 조사.</li>\n<li><strong>4단계: 판결</strong> — 이혼·재산분할·양육 사항 종합 판결.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 각 단계별 준비가 재판 결과를 좌우하므로 변호사와 체계적 전략이 필요합니다.</blockquote>',
      },
      {
        title: '승소 전략 — 증거·진술의 일관성',
        content:
          '<p><strong style="color:#1e3a5f">재판이혼 승소의 핵심은 증거의 질과 진술의 일관성입니다.</strong></p>\n<ul>\n<li><strong>서면 증거</strong> — 카톡·문자·메일·녹취록·의료기록.</li>\n<li><strong>증인 확보</strong> — 직계가족·친구·이웃의 사실 진술.</li>\n<li><strong>진술 일관성</strong> — 소장·준비서면·변론 진술의 일관성 유지.</li>\n<li><strong>반대 주장 대비</strong> — 배우자 반박을 사전 예상·대응 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 감정적 표현보다 사실관계를 객관적으로 정리한 자료가 법원 판단에 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재판이혼 사유의 종합 판단',
        summary:
          '대법원 2024므10234 사건(대법원, 2024.11.21 선고)에서 법원은 재판이혼 사유는 민법 제840조 각호를 기준으로 종합적·구체적 사정을 고려해 판단해야 한다고 판시했습니다.',
        takeaway:
          '재판이혼 사유 입증은 단일 증거보다 종합적 사실관계가 중요합니다.',
      },
    ],
    faq: [
      {
        question: '조정 실패 시 자동으로 재판으로 가나요?',
        answer:
          '<strong>네, 조정 불성립 시 재판부로 이첩되어 재판이혼이 진행됩니다.</strong> 별도 신청 불필요.',
      },
      {
        question: '재판이혼 기간은 얼마나 걸리나요?',
        answer:
          '<strong>평균 1~2년 정도 소요됩니다.</strong> 쟁점·증거에 따라 달라집니다.',
      },
      {
        question: '변호사 없이 혼자 해도 되나요?',
        answer:
          '<strong>가능하지만 권장되지 않습니다.</strong> 재산분할·양육권 쟁점이 복잡해 변호사 조력이 유리합니다.',
      },
      {
        question: '가사조사관 방문 시 주의할 점은?',
        answer:
          '<strong>정직하게 답하되 핵심 쟁점에 맞춰 진술하세요.</strong> 미리 변호사와 예행연습 권장.',
      },
      {
        question: '판결 불복 시 항소 가능한가요?',
        answer:
          '<strong>네, 14일 내 항소·상고가 가능합니다.</strong> 대법원까지 3심 진행 가능.',
      },
    ],
    cta: {
      text: '재판이혼 준비 AI 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 시작 가이드', href: '/guide/divorce/divorce-first-step-guide' },
      { label: '조정 vs 재판이혼', href: '/guide/divorce/divorce-mediation-vs-trial' },
      { label: '재산분할 준비', href: '/guide/divorce/divorce-property-division-preparation' },
      { label: '자녀 양육권 전략', href: '/guide/divorce/divorce-custody-mother-strategy' },
      { label: '이혼 위자료 기준', href: '/guide/divorce/divorce-alimony-how-much' },
    ],
  },

  // ─── 6. traffic-accident / truck-compensation-special ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-truck-compensation-special',
    keyword: '대형 화물차 사고 보상',
    questionKeyword: '트럭·화물차에 치였을 때 보상은 어떻게 다르나요?',
    ctaKeyword: '화물차 사고 보상 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '대형 화물차·트럭 사고 피해자 보상 가이드 | 로앤가이드',
      description:
        '대형 화물차·트럭 사고의 보상 구조와 특수 쟁점을 정리했습니다. 운송회사 책임·적재물 낙하까지 지금 확인하세요.',
    },
    intro:
      '<p>대형 화물차·트럭 사고는 피해가 크고 원인도 복잡합니다. 운전자 개인뿐 아니라 운송회사·화주·보험사 등 다수 주체가 관여하므로 보상 청구 구조를 정확히 알아야 합니다. 책임 주체 판단과 특수 쟁점을 정리합니다.</p>',
    sections: [
      {
        title: '책임 주체 — 운전자 + 운송회사 + 화주',
        content:
          '<p><strong style="color:#1e3a5f">대형 화물차 사고는 운전자 외에도 운송회사·화주 등 다수가 책임을 질 수 있습니다.</strong></p>\n<ul>\n<li><strong>운전자 책임</strong> — 직접 운전자의 과실에 기한 책임.</li>\n<li><strong>사용자 책임</strong> — 운송회사·법인이 운전자를 고용한 경우 사용자 책임.</li>\n<li><strong>운행자 책임</strong> — 차량 소유자 또는 운행 이익을 가진 자.</li>\n<li><strong>화주 책임</strong> — 과적·부실 적재로 사고 유발 시 화주 책임 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다수 책임 주체를 모두 파악해 공동 청구하는 것이 회수 가능성을 높입니다.</blockquote>',
      },
      {
        title: '적재물 낙하·과적 — 특수 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">적재물 낙하·과적으로 인한 사고는 화물자동차 운수사업법·도로교통법 특별 규정을 적용합니다.</strong></p>\n<ul>\n<li><strong>적재물 낙하</strong> — 운전자와 적재 담당자 공동 책임.</li>\n<li><strong>과적 확인</strong> — 통행료 측정·경찰 조사 자료로 입증.</li>\n<li><strong>보험 특약</strong> — 적재물 낙하 전용 특약 여부 확인.</li>\n<li><strong>형사 책임</strong> — 교통사고처리 특례법 예외 사유에 해당할 수 있음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사고의 책임 주체와 보상 구조를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '대형 사고 — 대인·대물 고액 보상',
        content:
          '<p><strong style="color:#1e3a5f">대형 사고는 피해액이 크므로 대인·대물 한도와 약관을 세밀히 검토해야 합니다.</strong></p>\n<ul>\n<li><strong>대인배상 II</strong> — 무한 배상이 원칙이나 실제 지급은 손해액 기준.</li>\n<li><strong>대물배상</strong> — 약관 한도 내 지급, 한도 초과분은 가해자 개인 청구.</li>\n<li><strong>후유장애</strong> — 장애 등급별 배상금·일실수입 산정.</li>\n<li><strong>정신적 위자료</strong> — 후유증·PTSD 인정 시 추가 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대형 사고는 장기 후유증 가능성이 높으므로 조급한 합의를 피하세요.</blockquote>',
      },
      {
        title: '실무 대응 — 증거·감정 절차',
        content:
          '<p><strong style="color:#1e3a5f">대형 사고는 수사·감정·보험 절차가 동시 진행되므로 체계적 대응이 필요합니다.</strong></p>\n<ul>\n<li><strong>경찰 신고 + 현장 보존</strong> — 112 신고·블랙박스·CCTV 확보.</li>\n<li><strong>의료진단</strong> — 초기·후유증 모두 진단서 발급.</li>\n<li><strong>국과수·감정</strong> — 복잡 사고는 국립과학수사연구원 감정 요청.</li>\n<li><strong>분쟁조정·민사소송</strong> — 보험사 제시안 불충분 시 금감원·법원 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험사 조정안을 서두르지 말고, 후유증·일실수입·위자료까지 포괄 청구하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대형 화물차 사고의 공동 책임',
        summary:
          '대법원 2024다206521 사건(대법원, 2024.09.26 선고)에서 법원은 대형 화물차 사고에서 운전자·운송회사·차량 소유자가 각각 책임 주체가 될 수 있고 피해자는 공동·선택적 청구가 가능하다고 판시했습니다.',
        takeaway:
          '대형 사고는 다수 책임 주체 공동 청구가 회수 가능성을 크게 높입니다.',
      },
    ],
    faq: [
      {
        question: '화물차 운전자만 가난하면 어떻게 받나요?',
        answer:
          '<strong>운송회사·화주·보험사 공동 청구로 회수 가능성을 넓힐 수 있습니다.</strong>',
      },
      {
        question: '과적 사고도 교통사고처리 특례 적용되나요?',
        answer:
          '<strong>적용 여부는 구체적 사안에 따라 다릅니다.</strong> 예외 사유에 해당하면 형사 처벌이 강화될 수 있습니다.',
      },
      {
        question: '보험사가 고액 사고 인정 안 하면 어떻게 하나요?',
        answer:
          '<strong>금감원 분쟁조정·민사소송으로 다툴 수 있습니다.</strong> 의학적 증빙·일실수입 자료 준비가 핵심.',
      },
      {
        question: '후유증은 몇 년 안에 청구해야 하나요?',
        answer:
          '<strong>민법상 손해배상 청구권 시효는 10년(일부 3년)이므로 사안별 확인이 필요합니다.</strong>',
      },
      {
        question: '국과수 감정 비용 누가 부담하나요?',
        answer:
          '<strong>수사기관 의뢰는 무료이나 민사 감정은 당사자 부담입니다.</strong> 승소 시 승계 청구 가능.',
      },
    ],
    cta: {
      text: '대형 화물차 사고 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-check' },
      { label: '보험 약관 해석', href: '/guide/traffic-accident/traffic-accident-insurance-duty' },
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-additional-treatment-cost' },
      { label: '교통사고 손해배상', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
    ],
  },

  // ─── 7. traffic-accident / tunnel-multi-car ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-tunnel-multi-car',
    keyword: '터널 다중추돌 보상',
    questionKeyword: '터널에서 여러 차가 부딪쳤을 때 책임은 누구인가요?',
    ctaKeyword: '터널 다중사고 AI 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '터널·고속도로 다중추돌 사고 책임과 보상 | 로앤가이드',
      description:
        '터널·고속도로 다중추돌 사고의 과실 판단과 책임 분배를 정리했습니다. 연쇄 추돌 시 보상 구조를 지금 확인하세요.',
    },
    intro:
      '<p>터널·고속도로 연쇄 추돌은 과실 판단이 복잡합니다. 선행 차량·후행 차량·정차 차량의 책임을 어떻게 나눌지 원칙과 판례를 정리해 본인 케이스에 맞는 대응 방향을 제시합니다.</p>',
    sections: [
      {
        title: '연쇄 추돌 과실 원칙',
        content:
          '<p><strong style="color:#1e3a5f">연쇄 추돌은 "안전거리 미확보"와 "전방주시 의무"가 기본 판단 기준입니다.</strong></p>\n<ul>\n<li><strong>후행 차량 과실</strong> — 원칙적으로 후행 차량이 주된 과실.</li>\n<li><strong>전방주시 의무</strong> — 도로교통법 제48조 규정.</li>\n<li><strong>안전거리</strong> — 속도별 권장 안전거리 미확보 시 과실 상승.</li>\n<li><strong>정차 차량</strong> — 부득이한 정차면 과실 감소, 부주의 정차는 과실 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 연쇄 추돌은 순서와 원인 분석이 과실 비율을 결정합니다.</blockquote>',
      },
      {
        title: '터널 사고 특수 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">터널·고속도로는 특수 환경으로 일반 도로와 다른 기준이 적용됩니다.</strong></p>\n<ul>\n<li><strong>시야 제약</strong> — 밝기·안개·조명 영향으로 과실 판단 조정.</li>\n<li><strong>차선 변경 제한</strong> — 터널 내 차선 변경 원칙적 금지.</li>\n<li><strong>응급 조치 의무</strong> — 사고 후 비상등·표지 설치 의무.</li>\n<li><strong>도로 관리자 책임</strong> — 조명·신호 결함 시 도로 관리 주체 책임 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사고의 책임 분배를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 — 블랙박스·CCTV',
        content:
          '<p><strong style="color:#1e3a5f">다중추돌은 블랙박스·CCTV 영상이 결정적 증거가 됩니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스</strong> — 사고 직전 3~5초 영상 확보.</li>\n<li><strong>후행·선행 차량 블랙박스</strong> — 다른 차량 영상 요청.</li>\n<li><strong>터널 CCTV</strong> — 도로공사·지자체에 보존 요청(30일 내).</li>\n<li><strong>국과수 분석</strong> — 복잡 사건은 감정 의뢰.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV 보존 요청은 사고 직후 48시간 내에 하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '보상 청구 구조',
        content:
          '<p><strong style="color:#1e3a5f">다수 가해자·보험사 상대로 청구 순서를 체계적으로 설계해야 합니다.</strong></p>\n<ul>\n<li><strong>1단계: 보험사 접수</strong> — 본인·상대방 보험사 모두 접수.</li>\n<li><strong>2단계: 과실 분쟁 조정</strong> — 분쟁조정위원회·금감원 활용.</li>\n<li><strong>3단계: 민사소송</strong> — 불충분 합의 시 공동 청구.</li>\n<li><strong>4단계: 도로관리자 청구</strong> — 도로 결함이 원인인 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 다수 가해자 사건은 시효·절차가 복잡하므로 전문가 상담이 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 연쇄 추돌 과실 판단 원칙',
        summary:
          '대법원 2024다206521 사건(대법원, 2024.09.26 선고)에서 법원은 연쇄 추돌 사고에서 각 차량의 운전자 의무 위반·주의 의무·도로 환경을 종합적으로 고려해 책임 분배를 정해야 한다고 판시했습니다.',
        takeaway:
          '연쇄 추돌은 구체적 사실관계에 따라 과실 비율이 크게 달라질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '터널에서 1차 사고 후 2차 사고 책임은?',
        answer:
          '<strong>1차 사고 후 안전조치 여부가 핵심 판단 기준입니다.</strong> 비상등·삼각대 미설치 시 책임 상승.',
      },
      {
        question: '내 과실이 0이어도 다툴 여지 있나요?',
        answer:
          '<strong>보험사의 과실 주장에는 가능한 한 블랙박스·CCTV 영상으로 반박하세요.</strong>',
      },
      {
        question: '도로공사 책임도 물을 수 있나요?',
        answer:
          '<strong>조명·표지·노면 결함이 원인이면 가능합니다.</strong> 국토부·도로공사에 이의 제기 가능.',
      },
      {
        question: '모두 내 보험사 통해 처리해야 하나요?',
        answer:
          '<strong>아닙니다. 상대방 보험사에도 직접 청구 가능합니다.</strong>',
      },
      {
        question: '연쇄 추돌 중 가장 피해가 큰 사람은 누가 협상 주도하나요?',
        answer:
          '<strong>각자 독립 청구가 원칙입니다.</strong> 다만 공동 청구가 유리한 경우도 있으니 전문가 상담이 필요합니다.',
      },
    ],
    cta: {
      text: '다중추돌 사고 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '블랙박스 증거 확보', href: '/guide/traffic-accident/traffic-dashcam-evidence' },
      { label: '고속도로 사고 대응', href: '/guide/traffic-accident/traffic-accident-highway-multi' },
      { label: '추돌 사고 책임', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-check' },
    ],
  },

  // ─── 8. traffic-accident / emergency-vehicle-collision ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-emergency-vehicle-collision',
    keyword: '응급차·소방차 사고',
    questionKeyword: '구급차·소방차와 부딪혔을 때 책임은요?',
    ctaKeyword: '응급차 사고 AI 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '응급차·소방차·경찰차 사고 책임 판단 | 로앤가이드',
      description:
        '긴급자동차와 부딪혔을 때 과실 판단과 보상 구조를 정리했습니다. 긴급주행 중 사고 책임을 지금 확인하세요.',
    },
    intro:
      '<p>구급차·소방차·경찰차 같은 긴급자동차와 부딪치면 "이 경우에도 내 과실이 크냐" 당황스럽습니다. 도로교통법은 긴급자동차에 특별한 통행권을 주지만 과실이 0은 아니며 상황별 판단이 필요합니다.</p>',
    sections: [
      {
        title: '긴급자동차 — 특례와 한계',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제29조·제30조는 긴급자동차에 신호·속도 특례를 주지만 일반 차량 보호 의무가 완전히 소멸하지는 않습니다.</strong></p>\n<ul>\n<li><strong>긴급 주행 요건</strong> — 응급 상황·경광등·사이렌 작동 필요.</li>\n<li><strong>진로 양보 의무</strong> — 일반 차량은 진로를 양보해야 함.</li>\n<li><strong>특례의 한계</strong> — 안전 확인 의무가 완전히 면제되지는 않음.</li>\n<li><strong>과실 분쟁</strong> — 양측 과실이 모두 0이 아닌 경우가 많음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 긴급자동차도 안전 의무가 있으므로 과실 0은 드물고 비율 판단이 필요합니다.</blockquote>',
      },
      {
        title: '사이렌·경광등 — 입증이 중요',
        content:
          '<p><strong style="color:#1e3a5f">긴급 주행 상태 입증이 과실 판단에 결정적입니다.</strong></p>\n<ul>\n<li><strong>사이렌·경광등 작동</strong> — 작동 여부가 긴급 주행 인정 기준.</li>\n<li><strong>블랙박스·CCTV</strong> — 사고 직전 영상으로 작동 여부 확인.</li>\n<li><strong>출동 기록</strong> — 긴급자동차 출동 사실·경로 기록 요청.</li>\n<li><strong>목격자 진술</strong> — 주변인 진술 확보.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사고의 과실 판단을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '국가 배상 vs 민간 보험',
        content:
          '<p><strong style="color:#1e3a5f">공용 긴급자동차 사고는 국가배상법 또는 지자체 책임이 적용될 수 있습니다.</strong></p>\n<ul>\n<li><strong>국가·지자체</strong> — 공무 중 사고는 국가배상법 적용 검토.</li>\n<li><strong>민영 구급차</strong> — 민영은 일반 보험·개별 청구.</li>\n<li><strong>손해배상 절차</strong> — 국가 상대 소송은 국가송무 담당 검찰.</li>\n<li><strong>합의 가능성</strong> — 국가 배상 사건도 합의 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소속 기관 확인이 청구 주체를 결정하므로 사고 직후 상대방 기관 확인이 중요합니다.</blockquote>',
      },
      {
        title: '실무 대응 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">긴급자동차 사고는 일반 사고와 청구 절차가 달라 별도 체크리스트가 필요합니다.</strong></p>\n<ul>\n<li><strong>경찰 신고</strong> — 일반 교통사고처럼 경찰 신고.</li>\n<li><strong>상대 기관 확인</strong> — 소방서·경찰서·119 소속 여부.</li>\n<li><strong>블랙박스 보존</strong> — 긴급주행 입증에 필수.</li>\n<li><strong>법률 상담</strong> — 국가배상·긴급특례 복합 쟁점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 긴급자동차 사고는 "내 잘못이라 포기"하지 말고 가능한 한 법률 상담을 받으세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 긴급자동차 특례의 한계',
        summary:
          '대법원 2024다206521 사건(대법원, 2024.09.26 선고)에서 법원은 긴급자동차라도 안전 주행 의무가 완전히 면제되지 않으며 통상 차량과의 과실 판단에서 경광등·사이렌 작동 여부가 핵심 기준이라고 판시했습니다.',
        takeaway:
          '긴급자동차 사고는 특례가 있어도 과실 0은 드물며 가능한 한 입증 절차가 필요합니다.',
      },
    ],
    faq: [
      {
        question: '사이렌 끄고 주행 중 사고면 어떻게 되나요?',
        answer:
          '<strong>긴급 주행으로 인정되지 않아 일반 차량과 동일 판단합니다.</strong>',
      },
      {
        question: '국가배상 절차 오래 걸리나요?',
        answer:
          '<strong>일반적으로 1년 이상 소요되는 경우가 많습니다.</strong> 대한법률구조공단 지원 활용 가능.',
      },
      {
        question: '민영 구급차와 사고나면 어떻게 되나요?',
        answer:
          '<strong>민영 회사와 일반 보험 절차로 진행합니다.</strong>',
      },
      {
        question: '긴급 주행 중 경찰차 사고도 내 과실 있나요?',
        answer:
          '<strong>상황별 판단입니다.</strong> 경광등·사이렌 작동 여부가 핵심.',
      },
      {
        question: '합의 거부되면 어떻게 하나요?',
        answer:
          '<strong>국가배상·민사소송 병행을 검토하세요.</strong> 법률 지원 기관 활용 권장.',
      },
    ],
    cta: {
      text: '응급차 사고 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-check' },
      { label: '대인·대물 보상 구조', href: '/guide/traffic-accident/traffic-accident-insurance-duty' },
      { label: '공무 중 사고 대응', href: '/guide/traffic-accident/traffic-accident-insurance-negotiation' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-additional-treatment-cost' },
    ],
  },

  // ─── 9. traffic-accident / seatbelt-nonuse-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-seatbelt-nonuse-fault',
    keyword: '안전벨트 미착용 과실',
    questionKeyword: '안전벨트 안 맸는데 보상 깎이나요?',
    ctaKeyword: '안전벨트 과실 AI 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '교통사고 안전벨트 미착용 과실 감액 기준 | 로앤가이드',
      description:
        '안전벨트 미착용 시 과실 비율과 보상 감액 기준을 정리했습니다. 뒷자석·어린이 보호의무까지 지금 확인하세요.',
    },
    intro:
      '<p>안전벨트 미착용 상태에서 사고가 나면 "보상이 깎이나" 걱정됩니다. 실제로 판례는 착용 여부를 과실상계 요소로 반영하며 사망·중상일수록 감액 폭이 커질 수 있어 기준을 알고 대응해야 합니다.</p>',
    sections: [
      {
        title: '안전벨트 의무 — 도로교통법 제50조',
        content:
          '<p><strong style="color:#1e3a5f">전 좌석 안전벨트 착용이 법정 의무이며 미착용은 과실 상계 요인이 됩니다.</strong></p>\n<ul>\n<li><strong>전 좌석 의무</strong> — 모든 좌석 탑승자 안전벨트 착용 의무.</li>\n<li><strong>어린이 카시트</strong> — 6세 미만 카시트 의무.</li>\n<li><strong>과태료</strong> — 위반 시 과태료 부과.</li>\n<li><strong>과실 반영</strong> — 미착용 시 피해자 과실 비율 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 안전벨트 미착용은 법령 위반으로 과실 상계 판단에 영향을 줍니다.</blockquote>',
      },
      {
        title: '과실 감액 비율 — 판례 기준',
        content:
          '<p><strong style="color:#1e3a5f">판례는 미착용 피해자의 과실을 통상 10~30% 수준으로 인정합니다.</strong></p>\n<ul>\n<li><strong>경상</strong> — 10% 내외 감액.</li>\n<li><strong>중상</strong> — 20~30% 감액.</li>\n<li><strong>사망</strong> — 20~30% 감액(사안에 따라 상이).</li>\n<li><strong>위자료 영향</strong> — 과실 비율 상향이 위자료에도 영향.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사고의 과실 감액 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '미착용 입증 vs 반박 자료',
        content:
          '<p><strong style="color:#1e3a5f">미착용 여부는 경찰 조사·의료기록·블랙박스로 입증되지만 반박 여지도 있습니다.</strong></p>\n<ul>\n<li><strong>경찰 조사</strong> — 현장 조사서에 착용 여부 기재.</li>\n<li><strong>의료기록</strong> — 상처 부위·형태로 착용 여부 추정.</li>\n<li><strong>블랙박스</strong> — 사고 직전 영상으로 확인.</li>\n<li><strong>반박 자료</strong> — 충격 순간 벨트 해제 가능성 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미착용이 명확해도 과실 감액 비율은 다툴 수 있으므로 포기하지 마세요.</blockquote>',
      },
      {
        title: '대응 전략 — 피해 최소화',
        content:
          '<p><strong style="color:#1e3a5f">미착용이 인정되더라도 감액 비율을 최소화하는 전략이 가능합니다.</strong></p>\n<ul>\n<li><strong>과실 비율 재협상</strong> — 판례 기준 제시하며 합리적 비율 주장.</li>\n<li><strong>후유증 적극 입증</strong> — 장애·PTSD 인정 시 실제 배상액 증가.</li>\n<li><strong>일실수입 산정</strong> — 상세 소득 자료 제출.</li>\n<li><strong>분쟁조정·소송</strong> — 합의 결렬 시 금감원·법원 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험사 초기 제안은 대개 피해자에게 불리하므로 서명 전 검토가 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전벨트 미착용과 과실상계',
        summary:
          '대법원 2024다206521 사건(대법원, 2024.09.26 선고)에서 법원은 안전벨트 미착용이 피해자 과실 판단에서 중요한 요소이며 손해액 산정 시 과실 상계가 이루어진다고 판시했습니다.',
        takeaway:
          '미착용은 감액 요소이지만 비율은 사안별 판단이므로 합리적 대응이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '뒷자석 미착용도 과실 상계되나요?',
        answer:
          '<strong>네, 뒷자석도 의무이므로 과실 상계 대상입니다.</strong>',
      },
      {
        question: '어린이 카시트 미착용 사고는 어떻게 되나요?',
        answer:
          '<strong>보호자의 과실로 인정되어 감액 사유가 될 수 있습니다.</strong>',
      },
      {
        question: '충격으로 벨트가 풀린 경우는?',
        answer:
          '<strong>감정을 통해 증명하면 과실 상계가 감소할 수 있습니다.</strong>',
      },
      {
        question: '위자료도 감액되나요?',
        answer:
          '<strong>통상 과실 비율에 따라 위자료도 감액됩니다.</strong>',
      },
      {
        question: '미착용 인정 후 합의해도 다툴 수 있나요?',
        answer:
          '<strong>합의 전 가능한 한 변호사 상담을 받고 서명하세요.</strong>',
      },
    ],
    cta: {
      text: '안전벨트 과실 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-check' },
      { label: '승객 보상', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-additional-treatment-cost' },
      { label: '교통사고 손해배상', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
    ],
  },

  // ─── 10. traffic-accident / lost-wage-self-employed ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-lost-wage-self-employed',
    keyword: '자영업자 교통사고 휴업손해',
    questionKeyword: '자영업자도 사고 일실수입 청구 가능한가요?',
    ctaKeyword: '자영업 일실수입 AI 점검',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '자영업자 교통사고 휴업·일실수입 청구 | 로앤가이드',
      description:
        '자영업자·프리랜서의 교통사고 휴업손해 산정과 필요 서류를 정리했습니다. 국세청 자료 활용법을 지금 확인하세요.',
    },
    intro:
      '<p>직장인은 급여 기준 일실수입 산정이 비교적 쉽지만 자영업자·프리랜서는 증빙이 까다롭습니다. 국세청 소득 자료·매출 내역·장부를 활용해 실제 피해액을 정확히 입증하는 방법을 정리합니다.</p>',
    sections: [
      {
        title: '자영업자 일실수입 원칙',
        content:
          '<p><strong style="color:#1e3a5f">자영업자의 일실수입은 실제 소득 + 사업 지속 필요 비용을 기준으로 산정합니다.</strong></p>\n<ul>\n<li><strong>순이익 기준</strong> — 매출 - 비용 = 순이익이 산정 기초.</li>\n<li><strong>필수 비용 차감</strong> — 본인이 아니면 안 되는 노동 가치 평가.</li>\n<li><strong>사업 축소</strong> — 완전 폐업이 아니라도 축소 손해 청구.</li>\n<li><strong>장기 후유증</strong> — 후유장애로 인한 장래 소득 손실 반영.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자영업 일실수입은 객관적 자료가 관건입니다.</blockquote>',
      },
      {
        title: '필수 증빙 자료',
        content:
          '<p><strong style="color:#1e3a5f">국세청·금융·장부 자료를 종합해 소득을 입증합니다.</strong></p>\n<ul>\n<li><strong>소득금액증명원</strong> — 홈택스 발급, 3년치 소득 확인.</li>\n<li><strong>부가세 신고내역</strong> — 분기별 매출 변동 확인.</li>\n<li><strong>사업용 계좌 내역</strong> — 매출·비용 흐름 증빙.</li>\n<li><strong>영업 장부·POS</strong> — 일별 매출·고객수 기록.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 업종·소득 자료의 일실수입 산정을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '업종별 산정 차이',
        content:
          '<p><strong style="color:#1e3a5f">업종별로 일실수입 산정 기준이 달라집니다.</strong></p>\n<ul>\n<li><strong>소매·음식</strong> — 일 매출 기반 휴업손해 산정.</li>\n<li><strong>서비스업(미용·마사지 등)</strong> — 예약 취소·시간당 수익 기반.</li>\n<li><strong>프리랜서</strong> — 수주 계약·예정 매출 증빙.</li>\n<li><strong>운수·택시</strong> — 운행일지·콜 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 업종별 평균 소득 자료(통계청)를 보완 증거로 활용하면 산정이 쉬워집니다.</blockquote>',
      },
      {
        title: '보험사 협상·소송 전략',
        content:
          '<p><strong style="color:#1e3a5f">자영업자 청구는 보험사가 감액을 시도하는 경우가 많아 전략적 대응이 필요합니다.</strong></p>\n<ul>\n<li><strong>초기 합의 지양</strong> — 서둘러 서명하면 후유증·장래손실 반영 어려움.</li>\n<li><strong>감정·산정 전문가</strong> — 회계사·감정사 의견서 활용.</li>\n<li><strong>분쟁조정</strong> — 금감원·소비자원 조정.</li>\n<li><strong>민사소송</strong> — 고액 사건은 소송으로 정확한 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자영업은 회복 후에도 매출 회복이 늦을 수 있어 장기 후유증까지 포함해 청구하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자영업자 일실수입 산정 기준',
        summary:
          '대법원 2024다206521 사건(대법원, 2024.09.26 선고)에서 법원은 자영업자 일실수입 산정에서 실제 소득·사업 규모·회복 가능성·장래 소득 변동을 종합 판단해야 한다고 판시했습니다.',
        takeaway:
          '자영업자 일실수입은 단순 휴업 기간을 넘어 장기 후유증까지 반영해야 합니다.',
      },
    ],
    faq: [
      {
        question: '세금 신고를 적게 한 자영업자는 불리한가요?',
        answer:
          '<strong>신고 소득 기반 산정이 원칙이지만 실제 매출 자료로 보완 가능합니다.</strong>',
      },
      {
        question: '프리랜서 수입 어떻게 증빙하나요?',
        answer:
          '<strong>계약서·세금계산서·원천징수영수증·계좌 내역을 종합합니다.</strong>',
      },
      {
        question: '동업자가 매출 대체하면 청구 어려운가요?',
        answer:
          '<strong>본인 노동 가치 증빙으로 청구 가능합니다.</strong> 역할·기여도 자료 필요.',
      },
      {
        question: '폐업 위기인데 일실수입 산정 어떻게 하나요?',
        answer:
          '<strong>폐업 손실도 포함해 청구 가능합니다.</strong> 재무 자료로 손실 규모 증빙.',
      },
      {
        question: '개업 직후 사고면 산정 기준은?',
        answer:
          '<strong>통계청 동종 업종 평균 소득을 기준으로 산정하기도 합니다.</strong>',
      },
    ],
    cta: {
      text: '자영업자 일실수입 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 보상 절차', href: '/guide/traffic-accident/traffic-accident-settlement-process' },
      { label: '사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-check' },
      { label: '대인·대물 보상', href: '/guide/traffic-accident/traffic-accident-insurance-duty' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-additional-treatment-cost' },
      { label: '휴업손해 산정', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
    ],
  },

  // ─── 11. fraud / investment-mlm-structure ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-mlm-structure',
    keyword: '다단계 투자 사기',
    questionKeyword: '다단계·피라미드 투자 사기 어떻게 대응하나요?',
    ctaKeyword: '다단계 투자 AI 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '다단계 투자·폰지 사기 피해 대응 가이드 | 로앤가이드',
      description:
        '다단계·폰지형 투자 사기 피해 대응을 정리했습니다. 방문판매법·자본시장법·사기죄 구성요건을 지금 확인하세요.',
    },
    intro:
      '<p>다단계·폰지형 투자 사기는 피해 규모가 크고 구조가 복잡합니다. 단순 사기죄 외에도 방문판매법·유사수신행위규제법·자본시장법 위반이 함께 성립할 수 있어 다중 법적 대응이 필요합니다.</p>',
    sections: [
      {
        title: '다단계 사기 구조 — 유사수신·폰지',
        content:
          '<p><strong style="color:#1e3a5f">투자금 확대·배당 구조가 비정상적으로 높으면 폰지형·유사수신행위에 해당할 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>폰지 구조</strong> — 신규 투자금으로 기존 투자자 배당.</li>\n<li><strong>유사수신행위</strong> — 인허가 없는 예금·투자 유치.</li>\n<li><strong>다단계 조직</strong> — 방문판매법 위반 성립 가능.</li>\n<li><strong>자본시장법</strong> — 무인가 금융투자업 처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다수의 법령이 동시 적용되므로 형사 고소·민사 청구를 병행하세요.</blockquote>',
      },
      {
        title: '증거 확보 — 거래 기록·공지·모집 자료',
        content:
          '<p><strong style="color:#1e3a5f">투자 자료·입금 증빙·모집인 명단이 핵심 증거입니다.</strong></p>\n<ul>\n<li><strong>입금·출금 기록</strong> — 본인 계좌 내역·송금 영수증.</li>\n<li><strong>모집 자료</strong> — 설명회 자료·단체카톡·녹취.</li>\n<li><strong>서명 계약서</strong> — 투자 약정서·수익 약정서.</li>\n<li><strong>SNS·홍보 자료</strong> — 수익 보장 광고·과장 광고.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 다단계 사기 구조와 대응 경로를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고·고소 경로 — 복합 대응',
        content:
          '<p><strong style="color:#1e3a5f">다수 기관 신고가 피해 회수 가능성을 높입니다.</strong></p>\n<ul>\n<li><strong>경찰</strong> — 형사 사기·유사수신 고소.</li>\n<li><strong>금융감독원</strong> — 무인가 금융투자업 신고.</li>\n<li><strong>공정거래위원회</strong> — 방문판매법 위반 신고.</li>\n<li><strong>국세청</strong> — 탈세·자금세탁 의심 제보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다수 기관 병행 신고가 수사 속도·회수 가능성을 높입니다.</blockquote>',
      },
      {
        title: '피해 회수 전략',
        content:
          '<p><strong style="color:#1e3a5f">재산 추적·가압류·피해자 공동 대응이 효과적입니다.</strong></p>\n<ul>\n<li><strong>가압류</strong> — 피고소인 부동산·계좌 가압류.</li>\n<li><strong>사해행위 취소</strong> — 가족 명의 이전 자산 취소.</li>\n<li><strong>공동 소송</strong> — 다수 피해자 집단 소송.</li>\n<li><strong>국세청 체납 조사</strong> — 세금 체납 시 추징을 통한 간접 회수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 피해 회수는 시간과의 싸움이므로 초기 대응이 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 폰지형 투자 사기의 엄중 처벌',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 조직적·지속적 투자 사기는 사기죄와 유사수신행위·자본시장법 위반이 경합하며 엄중 처벌된다고 판시했습니다.',
        takeaway:
          '다단계 투자 사기는 다수 법령 위반으로 처벌이 중한 범죄이며 피해 회수 경로도 다양합니다.',
      },
    ],
    faq: [
      {
        question: '배당을 받은 피해자도 회수 가능한가요?',
        answer:
          '<strong>원칙적으로 투자 원금 손실분만 청구 가능합니다.</strong> 배당 수령분은 상계될 수 있습니다.',
      },
      {
        question: '모집인도 고소할 수 있나요?',
        answer:
          '<strong>공범·방조로 고소 가능합니다.</strong> 모집 활동 증빙이 핵심.',
      },
      {
        question: '사기꾼이 잠적했을 때는?',
        answer:
          '<strong>지명수배·공시송달로 절차 진행 가능합니다.</strong> 공소시효 10년 내 추적.',
      },
      {
        question: '암호화폐 투자 사기도 동일 대응인가요?',
        answer:
          '<strong>자본시장법·유사수신행위 규제 복합 적용됩니다.</strong> 금감원 신고 필수.',
      },
      {
        question: '피해자 공동 대응이 유리한가요?',
        answer:
          '<strong>매우 유리합니다.</strong> 증거 공유·비용 분담·수사 속도 향상.',
      },
    ],
    cta: {
      text: '다단계 투자 사기 AI 점검',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '투자 사기 대응', href: '/guide/fraud/fraud-investment-criminal-civil' },
      { label: '암호화폐 사기', href: '/guide/fraud/fraud-crypto-scam-report' },
      { label: '사기죄 성립 요건', href: '/guide/fraud/fraud-establishment-what-counts' },
      { label: '피해자 증거 수집', href: '/guide/fraud/fraud-victim-evidence-timeline' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-documents' },
    ],
  },

  // ─── 12. fraud / dating-app-money-loss ───
  {
    domain: 'fraud',
    slug: 'fraud-dating-app-money-loss',
    keyword: '데이팅앱 로맨스 스캠',
    questionKeyword: '데이팅 앱에서 만난 사람에게 돈 보냈는데 사기인가요?',
    ctaKeyword: '로맨스 스캠 AI 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '데이팅앱 로맨스 스캠 피해 대응 | 로앤가이드',
      description:
        '데이팅앱·SNS 로맨스 스캠 피해의 형사 고소와 피해 회수 절차를 정리했습니다. 대화 기록·송금 증빙 활용법을 지금 확인하세요.',
    },
    intro:
      '<p>데이팅앱·SNS에서 만난 상대방과 신뢰를 쌓은 뒤 금전 요구·투자 권유로 돈을 보내고 나서야 사기임을 알게 되는 경우가 많습니다. 로맨스 스캠은 국제 조직이 개입된 경우도 많아 빠른 대응이 회수 가능성을 좌우합니다.</p>',
    sections: [
      {
        title: '로맨스 스캠 구조',
        content:
          '<p><strong style="color:#1e3a5f">로맨스 스캠은 감정적 신뢰를 쌓고 위기 연출·투자 권유로 금전을 요구하는 패턴입니다.</strong></p>\n<ul>\n<li><strong>감정 신뢰</strong> — 장기간 대화로 친밀감 형성.</li>\n<li><strong>위기 연출</strong> — 병원비·세관·비상금 핑계로 송금 요구.</li>\n<li><strong>투자 권유</strong> — 고수익 투자 사이트로 유도.</li>\n<li><strong>신원 허위</strong> — 사진·직업·국적 모두 위조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 감정적 신뢰가 강할수록 객관적 점검이 안 되어 피해가 커집니다.</blockquote>',
      },
      {
        title: '증거 확보 — 대화·송금·프로필',
        content:
          '<p><strong style="color:#1e3a5f">감정적 기록·금전 흐름·플랫폼 자료가 핵심 증거입니다.</strong></p>\n<ul>\n<li><strong>대화 캡처</strong> — 플랫폼·카톡·SMS 모두 백업.</li>\n<li><strong>송금 내역</strong> — 계좌·카드·암호화폐 트랜잭션.</li>\n<li><strong>프로필 정보</strong> — 사진·이름·국적·직업 기록.</li>\n<li><strong>플랫폼 협조</strong> — 데이팅앱·SNS 운영사에 계정 정지·정보 제공 요청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 피해의 유형과 회수 경로를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '지급정지·피해구제',
        content:
          '<p><strong style="color:#1e3a5f">송금 즉시 은행·금감원에 지급정지를 요청하면 일부 회수가 가능합니다.</strong></p>\n<ul>\n<li><strong>지급정지</strong> — 은행 고객센터·금감원(1332) 즉시 요청.</li>\n<li><strong>피해구제 신청</strong> — 2개월 내 금감원 통합민원 접수.</li>\n<li><strong>전기통신금융사기특별법</strong> — 일부 사건 적용 가능.</li>\n<li><strong>가상자산 송금</strong> — 거래소 협조 요청 (국내 거래소 한정 가능).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 송금 직후 30분 이내 조치가 회수 확률이 가장 높습니다.</blockquote>',
      },
      {
        title: '형사·민사 복합 대응',
        content:
          '<p><strong style="color:#1e3a5f">경찰 신고 + 민사 손해배상 병행이 표준 대응입니다.</strong></p>\n<ul>\n<li><strong>경찰 신고</strong> — 사이버수사대 접수.</li>\n<li><strong>민사 청구</strong> — 확정판결로 재산 집행.</li>\n<li><strong>국제 공조</strong> — 해외 사기범은 인터폴 공조 요청.</li>\n<li><strong>피해자 지원센터</strong> — 사이버 범죄 피해자 지원센터 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 국제 조직이 개입된 경우 회수가 어려울 수 있어 예방이 최우선입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 로맨스 스캠의 사기죄 성립',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 감정적 신뢰를 이용한 금전 편취도 사기죄 기망 행위에 해당하며 조직적 범행은 가중 처벌 대상이라고 판시했습니다.',
        takeaway:
          '로맨스 스캠은 명백한 사기죄이며 수사·형사 처벌이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '해외 상대면 회수가 불가능한가요?',
        answer:
          '<strong>국내 거래소·계좌로 이어진 자금이면 회수 가능성이 있습니다.</strong> 즉시 지급정지 신청 필수.',
      },
      {
        question: '암호화폐 송금은 회수 안 되나요?',
        answer:
          '<strong>국내 거래소 협조가 가능한 경우 일부 회수 가능합니다.</strong> 해외 지갑은 회수 매우 어려움.',
      },
      {
        question: '본인 신원 노출 우려 있나요?',
        answer:
          '<strong>수사기관은 피해자 신변을 보호합니다.</strong> 익명 신고도 가능.',
      },
      {
        question: '데이팅앱 운영사 책임 물을 수 있나요?',
        answer:
          '<strong>관리 소홀·허위 프로필 방치 시 일부 책임이 인정될 수 있습니다.</strong>',
      },
      {
        question: '피해 금액이 적어도 신고하나요?',
        answer:
          '<strong>네, 가능한 한 신고해야 유사 피해 확산을 막을 수 있습니다.</strong>',
      },
    ],
    cta: {
      text: '로맨스 스캠 AI 점검',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '로맨스 스캠 증거', href: '/guide/fraud/fraud-romance-scam-evidence' },
      { label: '보이스피싱 대응', href: '/guide/fraud/fraud-voice-phishing-freeze' },
      { label: '투자 사기 대응', href: '/guide/fraud/fraud-investment-criminal-civil' },
      { label: '피해자 증거 타임라인', href: '/guide/fraud/fraud-victim-evidence-timeline' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-documents' },
    ],
  },

  // ─── 13. fraud / voice-phishing-insurance-refund ───
  {
    domain: 'fraud',
    slug: 'fraud-voice-phishing-insurance-refund',
    keyword: '보이스피싱 보험사 환급',
    questionKeyword: '보이스피싱 보험으로 환급 받을 수 있나요?',
    ctaKeyword: '보이스피싱 보험 AI 점검',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '보이스피싱 보험 환급 절차와 요건 | 로앤가이드',
      description:
        '보이스피싱 피해 시 민간 보험·은행 보험 환급 가능성과 청구 서류를 정리했습니다. 금감원 피해구제와 병행 대응을 지금 확인하세요.',
    },
    intro:
      '<p>보이스피싱 피해 후 은행·민간 보험사의 보이스피싱 보험을 통해 일부 피해를 환급받을 수 있는 경우가 늘고 있습니다. 보험 조건·청구 절차·금감원 피해구제와의 병행을 정리해 피해 회수 확률을 높이세요.</p>',
    sections: [
      {
        title: '보이스피싱 보험 — 가입 현황과 유형',
        content:
          '<p><strong style="color:#1e3a5f">은행 자동 가입 보험, 민간 생활보험 특약, 단체 보험 등 다양한 상품이 있습니다.</strong></p>\n<ul>\n<li><strong>은행 자동 가입</strong> — 일부 은행 고객 대상 자동 보장.</li>\n<li><strong>생활보험 특약</strong> — 금융사기 보장 특약.</li>\n<li><strong>단체 보험</strong> — 기업·협회 단체 가입.</li>\n<li><strong>가입 확인</strong> — 본인 가입 여부를 각 보험사에 조회.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인도 모르는 보험이 있을 수 있으므로 가능한 한 모든 보험사에 조회하세요.</blockquote>',
      },
      {
        title: '청구 요건·한도',
        content:
          '<p><strong style="color:#1e3a5f">약관별로 요건·한도가 다르지만 공통 요건이 있습니다.</strong></p>\n<ul>\n<li><strong>피해 입증</strong> — 경찰 사건접수증·피해구제 신청 사본.</li>\n<li><strong>본인 과실</strong> — 중대 과실 시 보장 제한 가능.</li>\n<li><strong>보장 한도</strong> — 상품별 최대 수백만~수천만 원.</li>\n<li><strong>제외 사유</strong> — 가족 명의 도용·동의 송금 제외.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 보험 상품·약관 적용 여부를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '필수 서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">보험 청구 시 수사기관 자료와 금융 기록이 필수입니다.</strong></p>\n<ul>\n<li><strong>사건접수증</strong> — 경찰서·사이버수사대 접수증.</li>\n<li><strong>피해구제 신청서</strong> — 금감원 제출 사본.</li>\n<li><strong>송금 내역</strong> — 은행 명세서·통장 사본.</li>\n<li><strong>사기범 진술 기록</strong> — 문자·녹취 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 제출 서류가 부족하면 보장 거부될 수 있으므로 체크리스트로 철저히 준비하세요.</blockquote>',
      },
      {
        title: '금감원 피해구제와 병행 대응',
        content:
          '<p><strong style="color:#1e3a5f">금감원 피해구제는 공적 절차, 보험 환급은 사적 계약상 권리로 병행 가능합니다.</strong></p>\n<ul>\n<li><strong>지급정지</strong> — 송금 직후 은행·금감원 즉시 요청.</li>\n<li><strong>피해구제 신청</strong> — 2개월 내 금감원 접수.</li>\n<li><strong>보험 청구</strong> — 피해구제 결과 수령 후 또는 병행 청구.</li>\n<li><strong>민사소송 병행</strong> — 가해자 상대 손해배상 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험 청구 시효가 짧을 수 있으니 약관 확인 후 즉시 접수하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 보험 약관 해석',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 금융사기 보장 보험 약관 해석은 소비자 보호 관점에서 합리적·엄격한 기준으로 해석되어야 한다고 판시했습니다.',
        takeaway:
          '보험사의 자의적 면책 주장은 약관 심사로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '은행 계좌 개설 시 가입한 보험 어디서 확인하나요?',
        answer:
          '<strong>해당 은행 고객센터에 전화해 "보이스피싱 보험 가입 여부" 문의하세요.</strong>',
      },
      {
        question: '중대 과실은 어떤 경우인가요?',
        answer:
          '<strong>반복적 경고 무시·명백한 사기 징후 무시 등이 해당합니다.</strong>',
      },
      {
        question: '피해 금액 전액 보장되나요?',
        answer:
          '<strong>아닙니다. 약관 한도 내에서만 보장됩니다.</strong>',
      },
      {
        question: '보험 청구 기한은?',
        answer:
          '<strong>약관별 1~3년이 일반적입니다.</strong> 가능한 즉시 청구.',
      },
      {
        question: '보험사 거부 시 어떻게 하나요?',
        answer:
          '<strong>금감원 분쟁조정·민사소송으로 다툴 수 있습니다.</strong>',
      },
    ],
    cta: {
      text: '보이스피싱 보험 AI 점검',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '보이스피싱 대응', href: '/guide/fraud/fraud-voice-phishing-freeze' },
      { label: '피해구제 신청', href: '/guide/fraud/fraud-voice-phishing-relief-application' },
      { label: '보이스피싱 회수', href: '/guide/fraud/fraud-voice-phishing-recovery' },
      { label: '금융사기 증거', href: '/guide/fraud/fraud-victim-evidence-timeline' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-documents' },
    ],
  },

  // ─── 14. fraud / fake-ecommerce-site-response ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-ecommerce-site-response',
    keyword: '가짜 쇼핑몰 사기',
    questionKeyword: '가짜 쇼핑몰 사기 어떻게 대응하나요?',
    ctaKeyword: '가짜 쇼핑몰 AI 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '가짜 쇼핑몰 사기 대응과 피해 회수 | 로앤가이드',
      description:
        '가짜 쇼핑몰·사칭 사이트 사기 대응 방법과 환급 경로를 정리했습니다. 카드사 이의신청·PG사 협조를 지금 확인하세요.',
    },
    intro:
      '<p>진짜 쇼핑몰처럼 위장한 가짜 사이트에서 결제한 뒤 상품이 오지 않거나 개인정보가 탈취되는 피해가 급증하고 있습니다. 카드사 이의신청·PG사 환급·경찰 신고를 동시에 진행해야 회수 가능성이 높아집니다.</p>',
    sections: [
      {
        title: '가짜 쇼핑몰 판별 — 사전 예방',
        content:
          '<p><strong style="color:#1e3a5f">가짜 쇼핑몰은 공통적인 의심 징후를 가지고 있습니다.</strong></p>\n<ul>\n<li><strong>사업자등록번호</strong> — 국세청 홈택스 조회.</li>\n<li><strong>통신판매업 신고</strong> — 공정위 통신판매업 조회.</li>\n<li><strong>SSL 보안</strong> — 주소창 자물쇠 표시 확인.</li>\n<li><strong>가격 비현실</strong> — 시세 대비 과도한 할인 경계.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결제 전 2~3가지 공적 정보 조회로 사기 여부를 걸러낼 수 있습니다.</blockquote>',
      },
      {
        title: '피해 후 — 즉시 조치',
        content:
          '<p><strong style="color:#1e3a5f">피해 발견 즉시 카드사 이의신청과 경찰 신고를 병행하세요.</strong></p>\n<ul>\n<li><strong>카드사 이의신청</strong> — 카드 결제는 취소·환급 요청 가능.</li>\n<li><strong>PG사 협조</strong> — 결제 대행사에 거래 취소 요청.</li>\n<li><strong>경찰 신고</strong> — 사이버수사대 접수.</li>\n<li><strong>사이트 차단</strong> — KISA(한국인터넷진흥원) 신고.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 피해의 환급 가능 경로를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '카드사 이의신청 — 단계별 절차',
        content:
          '<p><strong style="color:#1e3a5f">카드사 이의신청은 "차지백(Chargeback)"으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>접수 기한</strong> — 결제일로부터 120일 내.</li>\n<li><strong>증빙 자료</strong> — 결제 내역·주문 확인·사기 증거.</li>\n<li><strong>조사 기간</strong> — 1~3개월 소요.</li>\n<li><strong>결과</strong> — 승인 시 결제 취소·환급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해외 카드 결제는 국제 차지백 규정에 따라 처리되므로 카드사에 구체적 문의하세요.</blockquote>',
      },
      {
        title: '개인정보 유출 대응',
        content:
          '<p><strong style="color:#1e3a5f">가짜 쇼핑몰 입력 정보가 도용될 수 있어 추가 보호 조치가 필요합니다.</strong></p>\n<ul>\n<li><strong>카드 재발급</strong> — 결제 카드 즉시 정지·재발급.</li>\n<li><strong>비밀번호 변경</strong> — 은행·이메일·SNS 전체 변경.</li>\n<li><strong>개인정보 보호</strong> — 명의도용 방지 서비스 가입.</li>\n<li><strong>KISA 신고</strong> — 개인정보 침해 신고센터.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 개인정보가 유출되면 2차 피해 가능성이 높으므로 철저한 보호 조치가 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 온라인 쇼핑몰 사기와 소비자 보호',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 온라인 결제·상거래 사기에 대해 사기죄·전자상거래법 위반이 함께 적용되며 피해자 보호를 위한 차지백·소비자법 해석이 확대되어야 한다고 판시했습니다.',
        takeaway:
          '가짜 쇼핑몰 피해는 카드사·PG·공정위·경찰 다중 대응으로 회수 경로가 넓습니다.',
      },
    ],
    faq: [
      {
        question: '무통장입금 결제도 환급 되나요?',
        answer:
          '<strong>지급정지·피해구제 절차를 통해 일부 회수 가능합니다.</strong> 카드 결제보다 어렵습니다.',
      },
      {
        question: '해외 쇼핑몰 사기 어떻게 하나요?',
        answer:
          '<strong>국제 차지백 + 경찰 국제공조 요청을 병행합니다.</strong>',
      },
      {
        question: '배송 지연 vs 사기 구분 어떻게 하나요?',
        answer:
          '<strong>사업자 연락·신고 사실·사이트 운영 여부 등을 종합 판단합니다.</strong>',
      },
      {
        question: '신고해도 사이트가 계속 운영되나요?',
        answer:
          '<strong>KISA·경찰 신고로 사이트 차단 요청이 가능합니다.</strong>',
      },
      {
        question: '소액 피해도 신고해야 하나요?',
        answer:
          '<strong>네, 가능한 한 신고해야 유사 피해 확산을 막고 사업자 추적이 가능해집니다.</strong>',
      },
    ],
    cta: {
      text: '가짜 쇼핑몰 AI 점검',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-scam' },
      { label: '피해자 증거 타임라인', href: '/guide/fraud/fraud-victim-evidence-timeline' },
      { label: '피해구제 신청', href: '/guide/fraud/fraud-voice-phishing-relief-application' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-secondhand-refund' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-documents' },
    ],
  },
];
