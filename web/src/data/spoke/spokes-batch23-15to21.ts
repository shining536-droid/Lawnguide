import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [산재를 당한 근로자]의 [요양급여 신청 절차와 기한을 모르는 상황]에서 [근로복지공단 접수부터 불승인 이의신청까지 5단계 타임라인 안내]를 돕는 페이지다.
// 16. 이 페이지는 [출퇴근 중 사고를 당한 근로자]의 [산재 인정 여부가 불확실한 상황]에서 [법적 인정 기준 3가지와 예외 상황 판별 방법 안내]를 돕는 페이지다.
// 17. 이 페이지는 [산재 사고를 당한 후 어디서부터 시작해야 할지 모르는 근로자]의 [혼란스러운 초기 대응 상황]에서 [신고·치료·급여 신청 순서와 각 단계 핵심 체크사항 안내]를 돕는 페이지다.
// 18. 이 페이지는 [사업장에서 산재가 발생한 사업주]의 [신고 의무와 절차를 모르는 상황]에서 [지체 없는 신고부터 서류 제출까지 법적 의무 이행 절차 안내]를 돕는 페이지다.
// 19. 이 페이지는 [중대재해가 발생한 사업장의 사업주]의 [긴급 대응 절차를 모르는 상황]에서 [현장 보존·수사 대응·안전보건 이행계획 수립까지 단계별 절차 안내]를 돕는 페이지다.
// 20. 이 페이지는 [산재 사고로 형사책임 가능성에 직면한 사업주]의 [처벌 수위와 대응법을 모르는 상황]에서 [근로기준법·산안법·중대재해처벌법별 처벌 기준과 방어 전략 안내]를 돕는 페이지다.
// 21. 이 페이지는 [부당해고를 당한 근로자]의 [노동위원회 구제신청 절차와 기간을 모르는 상황]에서 [신청서 작성부터 재심·소송까지 4단계 절차 안내]를 돕는 페이지다.

export const spokesBatch23_15to21: SpokePage[] = [
  // ───────────────────────────────────────────
  // 15. industrial-accident1 / workers-comp-medical-claim-process
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'workers-comp-medical-claim-process',
    keyword: '산재보험 요양급여 신청 절차와 기한',
    questionKeyword: '산재 요양급여는 어떻게 신청하고 언제까지 해야 하나요?',
    ctaKeyword: '산재 요양급여 신청',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '산재 요양급여 신청 5단계 절차와 기한 | 로앤가이드',
      description:
        '산재 사고 후 요양급여 신청 방법을 모르겠다면, 근로복지공단 접수부터 불승인 이의신청까지 5단계와 3년 소멸시효를 지금 확인하세요.',
    },
    intro:
      '<p>작업 중 기계에 손가락이 끼었습니다. 병원 응급실에서 수술을 받았지만 치료비가 걱정됩니다. 회사에 산재 처리를 요청했더니 "알아서 처리해줄게"라는 말만 반복하고 며칠째 진행이 없습니다. 산재보험 요양급여를 직접 신청하는 방법과 기한을 단계별로 정리해드립니다.</p>',
    timelineSteps: [
      '1단계: 사고 발생 즉시 — 산재 지정병원 치료 및 초진 소견서·재해경위서 확보',
      '2단계: 서류 준비 — 요양급여신청서 + 초진 소견서 + 근로계약서 + 급여명세서',
      '3단계: 근로복지공단 접수 — 온라인·방문·우편 중 선택(사고일로부터 3년 이내)',
      '4단계: 공단 조사 협력 — 현장 조사·의학 자문 14~60일 소요, 추가 증거 제출',
      '5단계: 결정 통보 후 — 승인 시 급여 수령 / 불승인 시 90일 이내 심사청구',
    ],
    sections: [
      {
        title: '요양급여 신청 전 알아야 할 3가지 핵심',
        content:
          '<p><strong style="color:#1e3a5f">「산업재해보상보험법」 제40조에 따라 업무상 재해를 입은 근로자는 요양급여를 받을 권리가 있으며, 사업주가 신청을 막아도 근로자가 직접 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>소멸시효 3년</strong> — 요양급여 청구권은 사고 발생일로부터 3년 내에 행사해야 합니다(「산업재해보상보험법」 제112조). 직업성 질병은 "발병 사실을 안 날"부터 기산되므로 뒤늦은 진단도 구제 가능합니다</li>\n<li><strong>사업주 동의 불필요</strong> — 「산업재해보상보험법」 제41조 제2항에 따라 근로자가 단독으로 신청할 수 있습니다. 요양급여신청서의 사업주 확인란이 비어 있어도 접수됩니다</li>\n<li><strong>산재 지정병원 우선 이용</strong> — 근로복지공단 지정 산재병원에서 치료받으면 본인 부담 없이 치료를 받을 수 있습니다. 비지정 병원에서 먼저 치료를 받은 경우에도 나중에 산재로 전환 신청이 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 3년 소멸시효 / 사업주 동의 불필요 / 지정병원 우선 이용</blockquote>',
      },
      {
        title: '서류 준비와 접수 방법',
        content:
          '<p><strong style="color:#1e3a5f">요양급여신청서는 근로복지공단 홈페이지(www.comwel.or.kr)에서 내려받거나 관할 지사에서 받을 수 있습니다. 서류를 완비해야 심사가 빠르게 진행됩니다</strong></p>\n<ul>\n<li><strong>필수 서류</strong> — ①요양급여신청서(근로복지공단 지정 양식) ②초진 소견서(담당 의사 작성) ③재해경위서(근로자 직접 작성, 사고 경위·장소·시간 상세 기재) ④근로계약서 사본 ⑤최근 3개월 급여명세서</li>\n<li><strong>보충 서류(승인율 제고)</strong> — 사고 현장 사진, 동료 목격자 진술서, 작업 일지, CCTV 영상 캡처, 의료 검사 결과지(MRI·X-ray 등)</li>\n<li><strong>접수 방법 3가지</strong> — ①근로복지공단 홈페이지 온라인 접수(가장 빠름, 24시간 가능) ②관할 지사 방문 접수 ③우편 접수. 온라인 접수 시 즉시 접수번호 부여됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=industrial-accident1" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공단 조사 과정과 효과적 대응법',
        content:
          '<p><strong style="color:#1e3a5f">접수 후 근로복지공단은 업무상 재해 여부를 확인하기 위해 현장 조사, 의학 자문, 관계자 진술 청취를 진행합니다. 조사에 적극 협력하는 것이 승인율을 높입니다</strong></p>\n<ul>\n<li><strong>조사 기간</strong> — 일반 사고: 14~30일 / 직업성 질병·업무 관련성 다툼: 60일 이상. 조사 기간 중 치료는 계속 받을 수 있으며, 비용은 나중에 정산됩니다</li>\n<li><strong>조사 협력 포인트</strong> — 조사관의 질문에 사고 당시 상황을 구체적으로 설명하세요. "어떤 작업을 하고 있었는지" "평소 작업 방식과 다른 점은 무엇인지"를 명확히 진술합니다. 동료 진술서를 미리 확보해두면 도움이 됩니다</li>\n<li><strong>불승인 위험 신호</strong> — 공단이 "업무 관련성이 낮다"고 판단할 경우 보완 자료 제출 요청이 옵니다. 이때 즉시 추가 의학 소견서, 작업 환경 측정 결과, 전문가 소견을 제출하면 결정이 뒤집힐 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사 협력: 구체적 진술 + 동료 진술서 + 추가 의학 소견 = 승인율 향상</blockquote>',
      },
      {
        title: '승인 시 받을 수 있는 급여와 불승인 시 이의신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">승인 시 요양급여(치료비 전액), 휴업급여(평균임금의 70%), 간병급여, 이송비 등을 받을 수 있습니다. 불승인 시 90일 이내에 심사청구를 해야 합니다</strong></p>\n<ul>\n<li><strong>요양급여 항목</strong> — 입원비·수술비·약제비·재활치료비·보조기구비(의사 인정분) 전액. 건강보험과 달리 본인 부담금이 없습니다</li>\n<li><strong>휴업급여</strong> — 치료로 인해 일을 못 하는 기간(취업하지 못한 날이 3일 이상인 경우) 평균임금의 70%를 받습니다. 취업 불능 기간이 3일 이하이면 지급되지 않습니다</li>\n<li><strong>불승인 이의신청 3단계</strong> — ①심사청구(불승인 통지일로부터 90일 이내, 근로복지공단) → ②재심사청구(심사 결정일로부터 90일 이내, 산업재해보상보험재심사위원회) → ③행정소송(재심사 결정일로부터 90일 이내, 법원)</li>\n<li><strong>전문가 조력 시점</strong> — 불승인 결정을 받은 즉시 산재 전문 변호사 또는 공인노무사와 상담하세요. 이의신청 성공률은 전문가 조력 여부에 따라 크게 달라집니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불승인 대응: 90일 이내 심사청구 → 재심사청구 → 행정소송 3단계</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024두50063 — 요양급여 불승인 처분 취소 사건',
        summary:
          '대법원 2024두50063 사건(2024.11.28 선고)에서 법원은 업무상 과로와 스트레스로 인한 뇌혈관질환이 직업성 질병으로 인정된 사례에서, 공단이 요양급여를 불승인한 처분을 취소했습니다. 법원은 업무와 질병 사이의 상당인과관계 판단에서 근로자의 근무 강도, 초과근무 패턴, 기저질환 유무 등을 종합 고려해야 한다고 판시했습니다.',
        takeaway:
          '처음에 불승인 결정을 받아도 포기하지 마세요. 업무와 재해 사이의 인과관계를 뒷받침하는 의학 소견서와 근무 기록을 추가 제출하면 심사청구나 행정소송에서 뒤집힐 가능성이 충분히 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 산재 신청을 도와주지 않으면 어떻게 하나요?',
        answer:
          '<strong>근로자가 직접 신청하면 됩니다.</strong> 「산업재해보상보험법」 제41조 제2항에 따라 사업주의 확인이 없어도 신청서를 접수할 수 있습니다. 사업주가 산재 신청을 방해하거나 은폐하려 하면 고용노동부(1350)에 신고하면 됩니다.',
      },
      {
        question: '산재 신청하면 회사에서 불이익이 생기지 않나요?',
        answer:
          '<strong>산재 신청을 이유로 한 불이익 처분은 위법입니다.</strong> 「산업재해보상보험법」 제111조에 따라 산재 신청을 이유로 해고하거나 불이익을 주면 2년 이하 징역 또는 2천만원 이하 벌금에 처해집니다. 불이익을 받으면 노동위원회에 구제신청이 가능합니다.',
      },
      {
        question: '요양급여와 건강보험 치료를 동시에 쓸 수 있나요?',
        answer:
          '<strong>동시 적용은 불가합니다.</strong> 산재 승인 전까지 건강보험으로 치료를 받으면, 승인 후 근로복지공단이 건강보험공단에 비용을 정산합니다. 본인 부담금도 환급받을 수 있으니 영수증을 보관하세요.',
      },
      {
        question: '요양급여 신청서의 "재해경위서"는 어떻게 써야 하나요?',
        answer:
          '<strong>사고 발생 일시·장소·작업 내용·사고 경위를 육하원칙에 따라 구체적으로 작성하세요.</strong> "2026년 OO월 OO일 OO시경, OO공장 OO 라인에서 OO 작업 중 OO 기계가 OO하여 우측 손가락이 끼임"처럼 구체적일수록 심사에 유리합니다.',
      },
      {
        question: '아르바이트생도 산재 신청을 할 수 있나요?',
        answer:
          '<strong>네, 가능합니다.</strong> 「산업재해보상보험법」은 1인 이상 근로자를 고용한 모든 사업장에 적용됩니다. 아르바이트, 일용직, 단시간 근로자도 업무 중 다쳤다면 산재 신청이 가능합니다. 근로계약서가 없어도 실제 근로 관계가 인정되면 됩니다.',
      },
    ],
    cta: {
      text: '산재 요양급여 신청 무료 AI 상담',
      link: '/chat?domain=industrial-accident1',
    },
    internalLinks: [
      { label: '산재 피해자 가이드 홈', href: '/guide/industrial-accident1' },
      { label: '출퇴근 사고 산재 인정 기준', href: '/guide/industrial-accident1/commute-accident-recognition' },
      { label: '산재 어디부터 시작해야 하나', href: '/guide/industrial-accident1/injured-where-to-start' },
      { label: '산재 휴업급여 수령 방법', href: '/guide/industrial-accident1/workers-comp-leave-benefit' },
      { label: '사업주 산재 신고 의무', href: '/guide/industrial-accident2/employer-report-obligation-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 16. industrial-accident1 / commute-accident-recognition
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'commute-accident-recognition',
    keyword: '출퇴근 중 사고 산재 인정 기준',
    questionKeyword: '출퇴근 중 다쳤는데 산재 인정이 되나요?',
    ctaKeyword: '출퇴근 산재 인정',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '출퇴근 사고 산재 인정 3가지 기준과 예외 5가지 | 로앤가이드',
      description:
        '퇴근길에 사고를 당했는데 산재 인정이 될지 모르겠다면, 법이 정한 3가지 인정 기준과 인정 안 되는 5가지 예외 상황을 지금 확인하세요.',
    },
    intro:
      '<p>퇴근길 횡단보도에서 오토바이에 치였습니다. 갈비뼈 2개가 부러져 3주 입원이 필요하다는 진단을 받았습니다. 친구는 "회사 밖에서 난 사고라 산재 안 된다"고 했지만, 인터넷에는 "2018년부터 된다"는 글도 있습니다. 출퇴근 재해 인정 기준을 정확히 알아야 산재 신청 여부를 결정할 수 있습니다.</p>',
    sections: [
      {
        title: '2018년 법 개정으로 달라진 출퇴근 재해 인정 원칙',
        content:
          '<p><strong style="color:#1e3a5f">2018년 1월 1일부터 「산업재해보상보험법」 제37조 제1항 제3호에 따라 통상적인 경로와 방법으로 출퇴근하던 중 발생한 사고는 원칙적으로 업무상 재해로 인정됩니다</strong></p>\n<ul>\n<li><strong>개정 전(~2017년)</strong> — 회사 제공 교통수단 이용 또는 회사의 지배·관리 하에 있는 경우만 출퇴근 재해로 인정. 개인 차량·대중교통 이용 중 사고는 원칙적으로 미인정</li>\n<li><strong>개정 후(2018년~)</strong> — "통상적인 경로와 방법"으로 출퇴근하던 중 발생한 사고는 교통수단과 무관하게 산재로 인정. 도보, 버스, 지하철, 자전거, 개인 차량 모두 적용</li>\n<li><strong>통상적 경로</strong> — 집에서 직장, 또는 직장에서 집으로 향하는 일반적인 경로를 의미합니다. 반드시 최단 거리일 필요는 없으며, 대중교통 환승을 위한 우회나 통상적 주유소 들름 정도는 허용됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 2018년 이후 통상 경로·방법 출퇴근 중 사고는 원칙적 산재 인정</blockquote>',
      },
      {
        title: '산재 인정이 되지 않는 5가지 예외 상황',
        content:
          '<p><strong style="color:#1e3a5f">통상적인 출퇴근 경로를 벗어나거나 사적 행위가 개입된 경우에는 산재로 인정받지 못할 수 있습니다. 예외 상황을 미리 확인하세요</strong></p>\n<ul>\n<li><strong>경로 이탈 중 사고</strong> — 퇴근길에 개인 용무(쇼핑, 친구 만남, 병원 진료 등)를 위해 경로를 이탈한 후 사고가 발생하면 산재 불인정. 다만 일상생활에 필요한 최소 행위(식료품 구입 등)는 예외적으로 인정될 수 있습니다</li>\n<li><strong>음주 상태 출퇴근</strong> — 근로자의 음주로 인해 사고가 발생한 경우. 다만 음주가 사고의 직접 원인인지 여부를 따져야 합니다</li>\n<li><strong>범죄 행위·고의 사고</strong> — 근로자의 범죄 행위나 고의로 인한 사고는 업무상 재해에서 제외됩니다</li>\n<li><strong>개인 사유로 지정 경로 이탈</strong> — 회사 지정 교통수단 이용 시 지정 경로를 개인 사정으로 벗어난 경우</li>\n<li><strong>자해·자살</strong> — 근로자의 고의 자해나 자살은 원칙적으로 업무상 재해 제외(단, 업무로 인한 정신건강 악화 등 특별한 사정이 있으면 예외 인정 가능)</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=industrial-accident1" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '출퇴근 재해 인정에 유리한 증거 수집 방법',
        content:
          '<p><strong style="color:#1e3a5f">출퇴근 재해는 사고 경위와 경로의 통상성을 입증하는 증거가 핵심입니다. 사고 직후부터 체계적으로 증거를 수집하세요</strong></p>\n<ul>\n<li><strong>경로 입증 증거</strong> — 스마트폰 GPS 이동 기록, 교통카드 사용 내역(지하철·버스 승하차 기록), 블랙박스 영상, 주변 CCTV 영상, 목격자 진술</li>\n<li><strong>출퇴근 시간 입증</strong> — 출근부·퇴근 기록, 회사 출입기록(카드키 로그), 업무 이메일·메신저 마지막 확인 시간, 동료 증언</li>\n<li><strong>사고 발생 경위</strong> — 경찰 교통사고 조사 결과서, 가해 차량 보험사 사고 접수 번호, 병원 응급실 접수 시간(퇴근 시간과 일치 여부 확인)</li>\n<li><strong>일상생활 필요 행위 입증</strong> — 경로 이탈이 있었다면 이탈이 최소한이고 일상생활에 필요한 행위였음을 소명. 예: 퇴근길 슈퍼에서 장보기, 편의점 들름 정도는 인정 가능</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: GPS 기록 + 교통카드 내역 + 경찰 조사서 + 출퇴근 기록 조합</blockquote>',
      },
      {
        title: '출퇴근 재해 신청 절차와 교통사고 보상 중복 수령 문제',
        content:
          '<p><strong style="color:#1e3a5f">출퇴근 중 교통사고는 자동차보험과 산재보험이 모두 적용될 수 있습니다. 중복 수령 원칙을 이해하고 최대한 보상받는 방법을 확인하세요</strong></p>\n<ul>\n<li><strong>신청 절차</strong> — 요양급여 신청서에 "출퇴근 재해" 체크. 「산업재해보상보험법 시행규칙」 별지 제5호 서식에 따라 통상적 경로와 방법을 상세히 기재합니다</li>\n<li><strong>자동차보험과 중복 여부</strong> — 교통사고 상대방의 자동차보험과 산재보험은 중복 수령이 가능하지만, 산재급여를 받은 금액만큼은 손해배상 금액에서 공제됩니다. 두 제도를 동시에 활용하여 최대한 보상받을 수 있습니다</li>\n<li><strong>자동차보험 먼저 vs. 산재 먼저</strong> — 교통사고 과실이 상대방에게 100% 있어도 산재 신청을 포기할 필요가 없습니다. 산재는 과실과 무관하게 보상하며, 특히 후유장해 보상에서 유리할 수 있습니다</li>\n<li><strong>제3자 행위재해</strong> — 가해자가 있는 출퇴근 재해의 경우 근로복지공단이 먼저 급여를 지급하고 가해자에게 구상권을 행사합니다. 근로자는 공단과 가해자 양쪽에 청구하는 것이 원칙입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">교통사고 출퇴근 재해: 자동차보험 + 산재보험 동시 활용 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2022두47391 — 출퇴근 경로 이탈 후 사고의 산재 인정 범위',
        summary:
          '대법원 2022두47391 사건에서 법원은 퇴근 후 통상적 경로를 이탈하여 식당에 들렀다가 사고가 발생한 사례에서, 이탈 행위가 일상생활에 필요한 최소한의 행위였는지를 기준으로 산재 인정 여부를 판단했습니다. 법원은 단순 식사를 위한 경로 이탈은 통상적 출퇴근의 연속으로 볼 여지가 있다고 판시했습니다.',
        takeaway:
          '출퇴근 경로 이탈이 있었더라도 일상생활에 필요한 최소한의 행위(식사, 최소한의 장보기 등)라면 산재 인정 가능성이 있습니다. 경로 이탈의 이유와 정도를 상세히 소명하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '자전거로 출퇴근 중 다쳐도 산재가 되나요?',
        answer:
          '<strong>네, 인정됩니다.</strong> 2018년 이후 출퇴근 재해는 교통수단 종류와 무관하게 인정됩니다. 자전거, 킥보드, 도보 중 사고도 통상적 경로와 방법에 해당하면 모두 산재 신청이 가능합니다.',
      },
      {
        question: '야근 후 귀가 중 새벽에 사고가 나도 출퇴근 재해인가요?',
        answer:
          '<strong>퇴근 목적의 이동이면 출퇴근 재해로 인정됩니다.</strong> 업무 종료 후 귀가 중이라면 시간대와 무관합니다. 야근 종료 후 귀가 도중 사고는 출퇴근 경로와 방법의 통상성만 입증되면 산재 신청이 가능합니다.',
      },
      {
        question: '회사에서 제공한 셔틀버스를 타다 사고 났어도 별도로 신청해야 하나요?',
        answer:
          '<strong>회사 제공 교통수단 이용 중 사고도 출퇴근 재해에 해당하며, 동일하게 요양급여 신청이 가능합니다.</strong> 다만 회사 셔틀버스 운행 중 사고는 사업주의 관리 하에 있어 업무상 재해로 더 쉽게 인정되는 경우도 있습니다.',
      },
      {
        question: '출근 전 카페에 들렀다 사고 나면 어떻게 되나요?',
        answer:
          '<strong>카페 방문이 경로 이탈로 볼 정도이면 인정이 어려울 수 있습니다.</strong> 다만 통상적 출근 경로상의 카페라면 인정 가능성이 있습니다. 이탈 거리, 이탈 목적, 이탈 후 복귀 여부 등을 종합적으로 판단합니다.',
      },
      {
        question: '교통사고 상대방 과실 100%인데 굳이 산재 신청을 해야 하나요?',
        answer:
          '<strong>가능하면 산재도 함께 신청하세요.</strong> 산재 보상은 과실과 무관하며, 특히 치료 기간이 길어지거나 후유장해가 남는 경우 산재 급여(요양급여·휴업급여·장해급여)가 자동차보험 합의금보다 훨씬 많을 수 있습니다.',
      },
    ],
    cta: {
      text: '출퇴근 산재 인정 여부 무료 AI 상담',
      link: '/chat?domain=industrial-accident1',
    },
    internalLinks: [
      { label: '산재 피해자 가이드 홈', href: '/guide/industrial-accident1' },
      { label: '요양급여 신청 5단계 절차', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
      { label: '산재 어디부터 시작해야 하나', href: '/guide/industrial-accident1/injured-where-to-start' },
      { label: '산재 휴업급여 수령 방법', href: '/guide/industrial-accident1/workers-comp-leave-benefit' },
      { label: '직업성 질병 산재 인정 기준', href: '/guide/industrial-accident1/occupational-disease-recognition' },
    ],
  },

  // ───────────────────────────────────────────
  // 17. industrial-accident1 / injured-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'injured-where-to-start',
    keyword: '산재 당했는데 어디부터 해야 하나',
    questionKeyword: '산재를 당했는데 제일 먼저 무엇을 해야 하나요?',
    ctaKeyword: '산재 초기 대응',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '산재 당했을 때 즉시 해야 할 4가지 순서 | 로앤가이드',
      description:
        '산재를 당했는데 어디서부터 시작해야 할지 막막하다면, 사고 직후 4가지 행동 순서와 절대 놓치면 안 되는 기한 3가지를 지금 확인하세요.',
    },
    intro:
      '<p>현장에서 발을 헛딛어 추락했습니다. 다리에 깁스를 한 채로 병원 침대에 누워 있는데, 앞으로 어떻게 해야 하는지 전혀 모르겠습니다. 회사 동료는 "회사가 알아서 처리해줄 것"이라고 하지만 며칠이 지나도 아무런 연락이 없습니다. 산재를 당했을 때 내가 직접 해야 할 행동 순서를 명확히 정리해드립니다.</p>',
    sections: [
      {
        title: '첫 번째: 지금 당장 해야 할 3가지(사고 당일)',
        content:
          '<p><strong style="color:#1e3a5f">사고 당일 이 3가지를 실행해두면 이후 모든 산재 절차가 훨씬 수월해집니다</strong></p>\n<ul>\n<li><strong>① 사고 현장 기록</strong> — 스마트폰으로 사고 현장을 사진·동영상으로 촬영하세요. 넘어진 바닥, 위험 기계, 작업 환경 등을 최대한 많이 찍어두세요. 병원 이송 전이라도 가능하면 촬영합니다. 이 사진이 나중에 업무 관련성 입증의 핵심 증거가 됩니다</li>\n<li><strong>② 동료에게 알리기</strong> — 같은 자리에 있던 동료에게 사고 목격 사실을 확인받고 연락처를 받아두세요. 목격자 진술은 산재 조사에서 매우 중요합니다. "나중에 연락하면 말해줄 수 있냐"고 확인해두세요</li>\n<li><strong>③ 재해경위서 초안 작성</strong> — 아직 힘들어도 사고 경위를 간단히 메모해두세요. 날짜·시간·장소·작업 내용·사고 순간의 상황을 적어두면 나중에 공식 서류를 작성할 때 정확하게 기억할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">당일: 현장 사진 촬영 → 목격자 연락처 확보 → 경위 메모</blockquote>',
      },
      {
        title: '두 번째: 병원 치료 시작과 서류 확보(사고 후 1~3일)',
        content:
          '<p><strong style="color:#1e3a5f">산재 지정병원에서 치료를 시작하면 치료비 걱정 없이 치료에 집중할 수 있습니다. 병원 서류는 산재 신청의 핵심입니다</strong></p>\n<ul>\n<li><strong>산재 지정병원 확인</strong> — 근로복지공단 홈페이지(www.comwel.or.kr) 또는 앱에서 "산재 지정 병원" 검색. 응급 상황이라면 비지정 병원에서 먼저 치료받고 나중에 전환 가능합니다</li>\n<li><strong>필수 서류 요청</strong> — 담당 의사에게 ①초진 소견서(근로복지공단 지정 양식) ②진단서 ③방사선 검사 결과(X-ray, CT, MRI 등) 발급을 요청하세요. 이 서류들이 요양급여 신청서 첨부 서류입니다</li>\n<li><strong>회사에 산재 신청 의사 표명</strong> — 회사 인사팀이나 안전관리자에게 산재 처리를 요청하세요. 구두보다 문자나 이메일로 남겨두는 것이 좋습니다. 회사가 비협조적이더라도 나중에 직접 신청할 수 있으니 당장 불안해하지 마세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=industrial-accident1" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '세 번째: 요양급여 신청서 제출(사고 후 1~2주)',
        content:
          '<p><strong style="color:#1e3a5f">서류가 준비되면 근로복지공단에 요양급여 신청서를 제출합니다. 소멸시효는 3년이지만, 빨리 신청할수록 치료비 걱정을 덜 수 있습니다</strong></p>\n<ul>\n<li><strong>신청서 다운로드</strong> — 근로복지공단 홈페이지 → 서식자료 → "요양급여신청서" 검색. 또는 관할 지사에 방문하여 받습니다</li>\n<li><strong>작성 핵심 포인트</strong> — 사고 발생 일시·장소·작업 내용을 최대한 구체적으로 기재하세요. "작업 중 다쳤다"보다 "OO 기계를 이용해 OO 작업을 하던 중 OO 부위가 끼었다"처럼 구체적으로 씁니다</li>\n<li><strong>접수 방법</strong> — 온라인(공단 홈페이지), 방문, 우편 중 선택. 온라인이 가장 빠르며, 접수 확인번호를 반드시 저장해두세요</li>\n<li><strong>사업주 확인 거부 시</strong> — 확인란 없이 제출 가능합니다. "사업주 확인 불가" 사유를 기재하면 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청: 근로복지공단 온라인 접수 → 접수번호 보관 → 진행 상황 앱으로 확인</blockquote>',
      },
      {
        title: '절대 놓치면 안 되는 기한 3가지',
        content:
          '<p><strong style="color:#1e3a5f">산재 절차에는 여러 기한이 있습니다. 이 3가지 기한을 놓치면 권리를 잃을 수 있습니다</strong></p>\n<ul>\n<li><strong>요양급여 청구 소멸시효 3년</strong> — 사고 발생일로부터 3년 이내에 요양급여를 신청해야 합니다. 직업성 질병의 경우 "발병 사실을 안 날"부터 3년입니다(「산업재해보상보험법」 제112조)</li>\n<li><strong>불승인 심사청구 90일</strong> — 공단의 불승인 결정 통지를 받은 날부터 90일 이내에 심사청구를 해야 합니다. 이 기한을 넘기면 더 이상 이의를 제기하기 어렵습니다</li>\n<li><strong>재심사청구 90일</strong> — 심사 결정에 불복하는 경우 심사 결정 통지 후 90일 이내에 산업재해보상보험재심사위원회에 재심사청구를 해야 합니다</li>\n</ul>\n<p><strong>추가 확인 사항:</strong> 산재 승인 후 장해가 남으면 치료 종결 후 "장해급여"를 신청할 수 있습니다. 사망 재해의 경우 유족이 "유족급여"와 "장의비"를 청구할 수 있습니다. 각각의 소멸시효도 3~5년이므로 주의가 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 요양급여 3년 / 심사청구 90일 / 재심사청구 90일</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024두50063 — 산재 요양급여 신청 지연과 업무 관련성 판단',
        summary:
          '대법원 2024두50063 사건에서 법원은 사고 발생 후 상당 기간이 지나 산재 신청이 이루어진 경우에도, 사고와 부상 사이의 상당인과관계가 인정된다면 소멸시효 내에서 요양급여를 청구할 수 있다고 판시했습니다. 초기에 사업주의 권유로 건강보험 처리를 했다가 나중에 산재로 전환한 사례에서 전환 신청을 인정했습니다.',
        takeaway:
          '처음에 건강보험으로 치료를 시작했어도 나중에 산재로 전환 신청이 가능합니다. 소멸시효 3년 이내라면 지금이라도 신청하세요. 사업주가 처음에 "회사 부담으로 처리해준다"며 산재 신청을 막은 경우에도 근로자의 권리는 소멸하지 않습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 산재 대신 건강보험으로 처리하자고 하는데 응해야 하나요?',
        answer:
          '<strong>응할 필요가 없습니다.</strong> 산재와 건강보험은 보상 수준이 다릅니다. 산재는 치료비 전액과 휴업급여(평균임금 70%)를 받지만, 건강보험은 치료비 일부만 지원합니다. 회사의 산재 은폐 유도는 불법이며, 고용노동부에 신고할 수 있습니다.',
      },
      {
        question: '산재 신청 후 결과가 나오기까지 치료비는 어떻게 하나요?',
        answer:
          '<strong>일단 건강보험으로 치료를 받으면 됩니다.</strong> 산재 승인이 나면 그동안의 건강보험 치료비를 근로복지공단이 건강보험공단과 정산합니다. 본인 부담금도 환급받을 수 있으니 영수증을 모두 보관하세요.',
      },
      {
        question: '산재 신청 중에도 급여를 받을 수 있나요?',
        answer:
          '<strong>회사에서 급여를 받고 있다면 계속 받을 수 있습니다.</strong> 산재 신청 결과가 나오기 전이라도 사업주는 근로계약에 따른 급여를 지급해야 합니다. 승인 후 휴업급여가 지급되면 회사 급여와 정산이 이루어집니다.',
      },
      {
        question: '소규모 사업장(5인 미만)에서 일하다 다쳐도 산재 신청이 되나요?',
        answer:
          '<strong>네, 가능합니다.</strong> 「산업재해보상보험법」은 1인 이상 근로자를 사용하는 모든 사업장에 적용됩니다. 사업장 규모와 무관하게 산재 신청이 가능합니다. 사업주가 산재보험에 가입하지 않은 경우에도 근로복지공단이 먼저 보상한 후 사업주에게 구상합니다.',
      },
    ],
    cta: {
      text: '산재 초기 대응 무료 AI 상담',
      link: '/chat?domain=industrial-accident1',
    },
    internalLinks: [
      { label: '산재 피해자 가이드 홈', href: '/guide/industrial-accident1' },
      { label: '요양급여 신청 5단계 절차', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
      { label: '출퇴근 사고 산재 인정 기준', href: '/guide/industrial-accident1/commute-accident-recognition' },
      { label: '산재 휴업급여 수령 방법', href: '/guide/industrial-accident1/workers-comp-leave-benefit' },
      { label: '사업주 산재 신고 의무', href: '/guide/industrial-accident2/employer-report-obligation-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 18. industrial-accident2 / employer-report-obligation-process
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'employer-report-obligation-process',
    keyword: '산재 발생 시 사업주 신고 의무와 절차',
    questionKeyword: '산재가 발생했을 때 사업주가 해야 할 신고 절차는 무엇인가요?',
    ctaKeyword: '사업주 산재 신고',
    type: '절차타임라인형',
    perspective: '사업주',
    meta: {
      title: '산재 발생 시 사업주 신고 의무 4단계 절차 | 로앤가이드',
      description:
        '사업장에서 산재가 발생했는데 신고 의무와 절차를 모르겠다면, 즉시 신고부터 근로복지공단 보고까지 4단계와 미신고 시 처벌을 지금 확인하세요.',
    },
    intro:
      '<p>현장에서 직원이 중상을 입었습니다. 119를 불러 병원으로 이송했지만 이후 어떻게 해야 하는지 모르겠습니다. 산재 신고를 해야 한다는 건 알지만, 구체적으로 어디에, 언제까지, 어떤 서류로 신고해야 하는지가 막막합니다. 사업주의 법적 신고 의무와 절차를 단계별로 정리해드립니다.</p>',
    timelineSteps: [
      '1단계: 즉시(사고 발생 즉시) — 피해 근로자 응급조치·병원 이송, 현장 보존',
      '2단계: 지체 없이 — 고용노동부 지방관서에 산재 발생 보고(사망·3인 이상 부상 시 즉시 신고)',
      '3단계: 1개월 이내 — 근로복지공단 관할 지사에 산재 발생 보고서 제출',
      '4단계: 지속 — 근로자의 요양급여 신청 협력, 재해 원인 조사 및 재발 방지 대책 수립',
    ],
    sections: [
      {
        title: '사업주 산재 신고 의무의 법적 근거와 대상',
        content:
          '<p><strong style="color:#1e3a5f">「산업안전보건법」 제57조에 따라 사업주는 산업재해가 발생한 경우 해당 산업재해를 은폐해서는 안 되며, 고용노동부 장관에게 보고할 의무가 있습니다</strong></p>\n<ul>\n<li><strong>보고 대상</strong> — 사망 재해, 3일 이상의 휴업이 필요한 부상·질병 재해가 대상입니다. 단순 찰과상 등 1~2일 휴업에 그치는 재해는 별도 보고 의무가 없으나 기록 보존은 필요합니다</li>\n<li><strong>즉시 보고 대상</strong> — 사망자 발생 또는 동시에 3명 이상의 부상자가 발생한 경우에는 즉시 관할 지방고용노동청에 전화·팩스 등으로 보고해야 합니다. 중대재해 발생 시에는 별도의 중대재해 보고 의무도 있습니다</li>\n<li><strong>산재보험 가입 의무</strong> — 사업주는 근로자 고용 시 자동으로 산재보험에 가입됩니다. 보험료는 사업주가 전액 부담하며, 근로자에게 보험료를 전가하는 것은 위법입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보고 의무: 사망·3인 이상 부상 → 즉시 / 3일 이상 휴업 재해 → 1개월 이내</blockquote>',
      },
      {
        title: '신고 절차 4단계 상세 가이드',
        content:
          '<p><strong style="color:#1e3a5f">산재 발생 후 단계별로 정해진 절차를 따르면 법적 의무를 이행하면서 불필요한 법적 위험을 줄일 수 있습니다</strong></p>\n<ul>\n<li><strong>1단계: 즉각 응급처치 및 현장 보존</strong> — 부상 근로자의 안전 확보와 병원 이송이 최우선입니다. 가능하다면 현장 사진 촬영과 목격자 확인도 이 시점에 진행합니다. 현장은 수사·조사가 마무리될 때까지 보존하세요</li>\n<li><strong>2단계: 고용노동부 보고</strong> — 사망 또는 3명 이상 동시 부상 시 즉시(전화 보고 후 서면 제출), 그 외 3일 이상 휴업 재해는 1개월 이내 「산업재해조사표」를 작성하여 관할 지방고용노동청에 제출합니다</li>\n<li><strong>3단계: 근로복지공단 보고</strong> — 산재보험 가입 사업장은 근로복지공단에도 「산업재해 발생 보고서」를 제출합니다. 관할 지사에 방문하거나 공단 홈페이지에서 온라인으로 제출 가능합니다</li>\n<li><strong>4단계: 재발 방지 대책 수립</strong> — 「산업안전보건법」에 따라 재해 원인을 분석하고 재발 방지 대책을 수립·이행해야 합니다. 이 과정의 서류는 향후 수사 대응에도 유용합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=industrial-accident2" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '산재 은폐 또는 신고 지연 시 처벌',
        content:
          '<p><strong style="color:#1e3a5f">산재를 신고하지 않거나 허위로 보고하면 과태료에서 형사처벌까지 이어질 수 있습니다. 은폐 시도는 오히려 더 큰 법적 위험을 초래합니다</strong></p>\n<ul>\n<li><strong>산재조사표 미제출·허위 제출</strong> — 1,500만 원 이하의 과태료(「산업안전보건법」 제175조 제5항)</li>\n<li><strong>산재 은폐</strong> — 산재 은폐 행위 자체는 「산업안전보건법」 제57조 위반으로, 1년 이하의 징역 또는 1,000만 원 이하의 벌금(제170조 제1항)</li>\n<li><strong>중대재해 보고 누락</strong> — 중대산업재해 발생 보고 미이행 시 3,000만 원 이하의 과태료</li>\n<li><strong>산재 신청 방해</strong> — 근로자의 산재 신청을 방해하거나 불이익을 주면 「산업재해보상보험법」 제111조 위반으로 2년 이하 징역 또는 2,000만 원 이하 벌금</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 은폐 → 1년 이하 징역 / 조사표 미제출 → 1,500만 원 과태료</blockquote>',
      },
      {
        title: '사업주가 근로자 요양급여 신청에 협력해야 하는 이유',
        content:
          '<p><strong style="color:#1e3a5f">사업주의 협력은 법적 의무이자 자기 방어의 수단이기도 합니다. 요양급여 신청에 협력하면 민사 손해배상 리스크를 줄일 수 있습니다</strong></p>\n<ul>\n<li><strong>법적 협력 의무</strong> — 사업주는 요양급여신청서에 확인 서명을 해주어야 합니다. 거부하거나 지연하면 행정지도·과태료 부과 대상이 됩니다</li>\n<li><strong>산재보험 처리의 이점</strong> — 산재보험으로 처리되면 근로자는 근로복지공단에서 보상을 받고, 사업주에 대한 민사 손해배상 청구권이 일정 부분 제한됩니다(단, 사업주의 고의·과실이 있으면 추가 손해배상 청구 가능)</li>\n<li><strong>사고 원인 기록 보존</strong> — 사고 발생 경위, 안전조치 이행 상황, 근로자 안전교육 이수 기록을 보존하세요. 이 서류들은 향후 수사나 민사소송에서 사업주를 방어하는 핵심 자료입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">협력: 신청서 서명 → 원활한 보상 처리 → 민사 손해배상 리스크 감소</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도15060 — 산재 은폐와 사업주 형사책임 인정 사건',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 사업주가 중대재해 발생 사실을 은폐하고 안전보건관리체계 구축 의무를 이행하지 않은 경우 「중대재해 처벌 등에 관한 법률」 위반 및 「산업안전보건법」 위반으로 형사처벌이 인정된다고 판시했습니다.',
        takeaway:
          '산재 발생 시 은폐를 시도하면 형사처벌 위험이 오히려 커집니다. 즉각 신고하고 재발 방지 대책을 수립하는 것이 법적 리스크를 줄이는 가장 효과적인 방법입니다.',
      },
    ],
    faq: [
      {
        question: '산재 신고를 하면 사업장에 불이익이 오나요?',
        answer:
          '<strong>산재 신고 자체가 사업장 불이익 요인은 아닙니다.</strong> 오히려 은폐가 발각되면 훨씬 큰 불이익(과태료, 형사처벌, 영업정지)이 따릅니다. 산재 발생 건수가 일정 기준을 초과하면 산재 예방 계획 수립 의무 등이 추가될 수 있습니다.',
      },
      {
        question: '산재 신고 대상인지 어떻게 판단하나요?',
        answer:
          '<strong>3일 이상 휴업이 필요한 부상이나 질병이 발생하면 신고 대상입니다.</strong> 사망 또는 3명 이상 동시 부상은 즉시 신고 대상입니다. 판단이 어려우면 관할 지방고용노동청(국번 없이 1350)에 전화로 문의하면 됩니다.',
      },
      {
        question: '근로자가 원하지 않아도 신고해야 하나요?',
        answer:
          '<strong>네, 신고 의무는 근로자 의사와 무관합니다.</strong> 사업주의 신고 의무는 법으로 정해져 있으며 근로자의 동의가 필요하지 않습니다. 오히려 근로자가 원하지 않는다는 이유로 신고를 미루면 은폐로 간주될 수 있습니다.',
      },
      {
        question: '하청 업체 직원이 사고를 당한 경우 원청 사업주도 신고해야 하나요?',
        answer:
          '<strong>원청의 지배·관리 하에 있는 장소에서 사고가 발생하면 원청도 신고 의무가 있습니다.</strong> 도급 사업에서 원청이 지배하는 장소에서 발생한 재해는 원청도 「산업안전보건법」상 안전보건 의무를 부담합니다.',
      },
      {
        question: '신고 기한을 놓쳤을 때 어떻게 해야 하나요?',
        answer:
          '<strong>지체 없이 즉시 신고하세요.</strong> 기한을 놓친 경우 과태료 부과 가능성이 있지만, 계속 지연하면 상황이 더 악화됩니다. 자진 신고 시 과태료 감경이 가능한 경우도 있으니 법률 전문가와 상담 후 신속히 처리하세요.',
      },
    ],
    cta: {
      text: '사업주 산재 신고 의무 무료 AI 상담',
      link: '/chat?domain=industrial-accident2',
    },
    internalLinks: [
      { label: '사업주 산재 가이드 홈', href: '/guide/industrial-accident2' },
      { label: '중대재해 사업주 대응 절차', href: '/guide/industrial-accident2/serious-accident-employer-response' },
      { label: '사업주 형사책임 대응법', href: '/guide/industrial-accident2/employer-criminal-liability-accident' },
      { label: '산재 피해 근로자 요양급여 신청', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
      { label: '산재 어디부터 시작해야 하나', href: '/guide/industrial-accident1/injured-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 19. industrial-accident2 / serious-accident-employer-response
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'serious-accident-employer-response',
    keyword: '중대재해 발생 후 사업주 대응 절차',
    questionKeyword: '중대재해가 발생했을 때 사업주는 무엇을 해야 하나요?',
    ctaKeyword: '중대재해 사업주 대응',
    type: '절차타임라인형',
    perspective: '사업주',
    meta: {
      title: '중대재해 발생 후 사업주 4단계 대응 절차 | 로앤가이드',
      description:
        '사업장에서 중대재해가 발생했는데 어떻게 대응해야 할지 모르겠다면, 즉시 보고부터 수사 대응까지 4단계 절차와 형사처벌 최소화 방법을 지금 확인하세요.',
    },
    intro:
      '<p>현장에서 근로자 1명이 사망했습니다. 119가 출동하고 경찰도 도착했습니다. 머릿속이 하얗게 됩니다. 지금 당장 무엇을 해야 하는지 알 수 없습니다. 중대재해 발생 직후 사업주가 해야 할 대응 절차와 형사처벌 리스크를 최소화하는 방법을 단계별로 안내해드립니다.</p>',
    timelineSteps: [
      '1단계: 발생 즉시 — 응급처치·119 신고·현장 보존 및 고용노동부 즉시 보고',
      '2단계: 당일~48시간 — 중대재해처벌법 보고, 현장 사진 촬영, 법률 전문가 긴급 선임',
      '3단계: 수사 개시 후 — 수사기관 협력, 안전보건 이행 증거 보존, 진술 대비',
      '4단계: 수사 종결 후 — 기소 여부 확인, 형사 방어 전략 수립, 민사 합의 진행',
    ],
    sections: [
      {
        title: '중대재해 발생 직후 1시간 이내 필수 행동',
        content:
          '<p><strong style="color:#1e3a5f">중대재해 발생 직후 첫 1시간의 대응이 이후 형사처벌 수위를 크게 좌우합니다. 당황하지 말고 순서대로 행동하세요</strong></p>\n<ul>\n<li><strong>① 응급처치 및 119 신고</strong> — 부상 근로자의 생명 구조가 최우선입니다. 즉시 119에 신고하고, 가능한 응급처치를 실시합니다. 이후 경찰 112에도 신고합니다</li>\n<li><strong>② 현장 보존</strong> — 사망 또는 중상 사고 발생 시 고용노동부 현장 조사 전까지 사고 현장을 최대한 보존해야 합니다. 증거 훼손은 범죄 행위로 간주될 수 있습니다. 현장을 사진·동영상으로 기록하세요</li>\n<li><strong>③ 고용노동부 즉시 보고</strong> — 「산업안전보건법」 제57조에 따라 중대재해(사망·동시 3인 이상 부상·부상 10명 이상 발생) 발생 시 지체 없이 관할 지방고용노동청에 전화 보고 후 서면 제출. 고용노동부 고객상담센터 1350</li>\n<li><strong>④ 법률 전문가 즉시 선임</strong> — 고용노동부 조사관이 도착하기 전에 중대재해 전문 변호사에게 연락하세요. 초기 진술이 이후 형사 책임 판단에 결정적 영향을 미칩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시: 119 → 현장 보존 → 고용노동부 보고 → 변호사 선임</blockquote>',
      },
      {
        title: '중대재해처벌법 적용과 형사처벌 위험 수준 파악',
        content:
          '<p><strong style="color:#1e3a5f">「중대재해 처벌 등에 관한 법률」(2022년 시행)은 경영책임자에게 직접 형사책임을 부과합니다. 적용 요건과 처벌 수준을 정확히 알아야 합니다</strong></p>\n<ul>\n<li><strong>중대재해처벌법 적용 기준</strong> — 5인 이상 사업장에 적용(2024년부터 5인 이상 전면 적용). 사망 1명 이상, 동일한 사고로 6개월 이상 치료 부상자 2명 이상, 직업성 질병자 1년 이내 3명 이상 발생 시 해당</li>\n<li><strong>경영책임자 처벌</strong> — 안전보건관리체계 구축 의무를 위반하여 중대산업재해가 발생하면: 사망 시 1년 이상의 징역 또는 10억원 이하 벌금 / 그 외 중대재해 7년 이하 징역 또는 1억원 이하 벌금</li>\n<li><strong>법인 처벌</strong> — 경영책임자가 처벌받으면 법인에도 사망 시 50억원 이하 벌금, 그 외 10억원 이하 벌금이 부과됩니다</li>\n<li><strong>산업안전보건법 적용도 동시 가능</strong> — 중대재해처벌법 외에 「산업안전보건법」 위반 혐의도 동시에 적용될 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=industrial-accident2" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수사 대응 전략과 방어 증거 수집',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 조사가 시작되면 사업주는 안전보건 의무를 성실히 이행했음을 입증하는 자료를 신속히 준비해야 합니다</strong></p>\n<ul>\n<li><strong>안전보건 이행 증거</strong> — 안전보건관리규정, 위험성 평가 서류, 안전교육 일지(근로자 서명 포함), 안전점검 기록, 보호구 지급 내역, 안전관리자·보건관리자 선임 서류</li>\n<li><strong>사고 원인 분석 서류</strong> — 사고 발생 전 해당 설비·작업의 위험성 평가 결과, 정기 점검 기록, 유사 사고 예방 조치 이행 내역을 준비합니다</li>\n<li><strong>진술 대비</strong> — 수사관의 조사는 법적 효력이 있는 진술서를 만드는 과정입니다. 변호사 동석 하에 진술하고, 기억이 불확실한 부분은 "확인 후 답변하겠다"고 해도 됩니다</li>\n<li><strong>유족 및 피해 근로자와의 협의</strong> — 사망 재해의 경우 유족과의 조기 합의는 형사처벌 감경에 중요한 요소입니다. 다만 합의는 변호사의 조력 하에 진행해야 유족에 대한 적절한 보상과 법적 안전성을 동시에 확보할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방어 핵심: 안전교육 기록 + 위험성 평가 서류 + 변호사 동석 진술</blockquote>',
      },
      {
        title: '중대재해 이후 사업 재개와 재발 방지 이행',
        content:
          '<p><strong style="color:#1e3a5f">중대재해 발생 후 작업 재개는 고용노동부의 작업 중지 해제 조치가 있어야 가능합니다. 재발 방지 이행 계획은 처벌 감경과 직결됩니다</strong></p>\n<ul>\n<li><strong>작업 중지 해제 절차</strong> — 중대재해 발생 시 고용노동부는 해당 작업에 대한 작업 중지 명령을 내릴 수 있습니다. 위험 요인 제거, 안전조치 이행 확인 후 해제를 신청할 수 있습니다</li>\n<li><strong>재발 방지 계획</strong> — 재해 원인 분석 결과와 재발 방지 이행 계획을 서면으로 작성하여 고용노동부에 제출하면 수사 과정에서 성의 있는 이행 노력으로 인정받을 수 있습니다</li>\n<li><strong>안전보건관리체계 개선</strong> — 「중대재해처벌법」에서 요구하는 안전보건관리체계(9가지 의무사항) 미이행 항목을 점검하고 즉시 개선하세요. 개선 과정을 문서로 기록해두면 처벌 감경에 도움이 됩니다</li>\n<li><strong>산업재해 예방 시설 투자</strong> — 안전시설 투자와 안전관리자 추가 선임은 법원에서 사업주의 진지한 개선 의지로 평가받습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사업 재개: 작업 중지 해제 신청 → 재발 방지 계획 제출 → 안전체계 개선</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2022고합95 — 중대재해처벌법 위반 사업주 처벌 사건',
        summary:
          '대법원 2022고합95 사건에서 법원은 건설 현장에서 근로자가 추락하여 사망한 사고에서 경영책임자가 안전보건관리체계 구축 의무를 이행하지 않은 사실이 인정되어 중대재해처벌법 위반으로 유죄 판결을 내렸습니다. 법원은 경영책임자가 형식적 안전관리 체계만 갖추고 실질적 이행을 하지 않은 경우에도 처벌 대상이 된다고 판시했습니다.',
        takeaway:
          '서류상으로만 안전관리 체계를 갖추는 것은 중대재해처벌법상 의무 이행이 아닙니다. 안전교육이 실제로 실시되었는지, 위험 요소 개선이 실제로 이루어졌는지가 처벌 여부를 결정합니다.',
      },
    ],
    faq: [
      {
        question: '중대재해처벌법과 산업안전보건법의 차이는 무엇인가요?',
        answer:
          '<strong>중대재해처벌법은 경영책임자에게 직접 책임을 묻는 법입니다.</strong> 산업안전보건법은 사업주의 구체적 안전조치 의무를 규정하고, 중대재해처벌법은 경영책임자가 안전보건관리체계 전반을 구축할 의무를 부과합니다. 두 법 위반이 동시에 적용될 수 있습니다.',
      },
      {
        question: '5인 미만 사업장도 중대재해처벌법이 적용되나요?',
        answer:
          '<strong>2024년부터 5인 이상 사업장에 전면 적용됩니다.</strong> 5인 미만 사업장은 중대재해처벌법 적용 제외이나, 「산업안전보건법」과 「근로기준법」상 의무는 여전히 있습니다. 사망 사고 발생 시 형법상 업무상과실치사 혐의가 적용될 수 있습니다.',
      },
      {
        question: '수사를 받는 동안 사업을 계속할 수 있나요?',
        answer:
          '<strong>원칙적으로 가능합니다.</strong> 다만 고용노동부의 작업 중지 명령이 내려진 경우 해당 작업은 중단해야 합니다. 작업 중지 명령이 내려지지 않은 다른 업무는 계속 진행할 수 있습니다.',
      },
      {
        question: '유족과 합의하면 처벌을 피할 수 있나요?',
        answer:
          '<strong>합의가 처벌 감경 요소는 되지만 처벌을 완전히 면제하지는 않습니다.</strong> 중대재해처벌법 위반은 반의사불벌죄가 아니므로 유족과 합의해도 수사가 계속됩니다. 다만 합의는 구형량과 최종 선고형을 낮추는 데 중요한 요소로 고려됩니다.',
      },
      {
        question: '법인도 처벌받나요?',
        answer:
          '<strong>네, 법인도 처벌받습니다.</strong> 중대재해처벌법은 양벌규정을 두어 경영책임자가 처벌받는 경우 법인에도 벌금을 부과합니다. 사망 재해의 경우 50억원 이하, 그 외 중대재해의 경우 10억원 이하의 벌금이 부과됩니다.',
      },
    ],
    cta: {
      text: '중대재해 사업주 대응 무료 AI 상담',
      link: '/chat?domain=industrial-accident2',
    },
    internalLinks: [
      { label: '사업주 산재 가이드 홈', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 신고 의무 절차', href: '/guide/industrial-accident2/employer-report-obligation-process' },
      { label: '사업주 형사책임 대응법', href: '/guide/industrial-accident2/employer-criminal-liability-accident' },
      { label: '안전관리자 선임 의무', href: '/guide/industrial-accident2/safety-manager-selection-duty' },
      { label: '근로자 산재 요양급여 신청', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 20. industrial-accident2 / employer-criminal-liability-accident
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'employer-criminal-liability-accident',
    keyword: '산재 사고 발생 시 사업주 형사책임',
    questionKeyword: '산재 사고가 나면 사업주는 어떤 형사책임을 지나요?',
    ctaKeyword: '사업주 형사책임 대응',
    type: '상황형',
    perspective: '사업주',
    meta: {
      title: '산재 사고 사업주 형사책임 3가지 법률 기준 | 로앤가이드',
      description:
        '사업장에서 산재 사고가 발생해 형사처벌이 걱정된다면, 근로기준법·산안법·중대재해처벌법별 처벌 수위와 방어 전략 3가지를 지금 확인하세요.',
    },
    intro:
      '<p>현장 근로자가 기계에 손가락이 절단되는 사고가 났습니다. 경찰이 "사업주 과실 여부를 수사하겠다"고 했습니다. 어떤 법이 적용되고, 얼마나 처벌받을 수 있는지, 지금 무엇을 해야 하는지 막막합니다. 산재 사고에서 사업주에게 적용되는 형사책임의 구조와 실질적 방어 전략을 정리해드립니다.</p>',
    sections: [
      {
        title: '산재 사고에 적용되는 3가지 법률과 처벌 수위',
        content:
          '<p><strong style="color:#1e3a5f">산재 사고가 발생하면 사안에 따라 「산업안전보건법」, 「중대재해 처벌 등에 관한 법률」, 「형법」(업무상과실치사상죄) 3가지가 동시에 적용될 수 있습니다</strong></p>\n<ul>\n<li><strong>「산업안전보건법」 위반</strong> — 안전조치 의무(제38조), 보건조치 의무(제39조) 위반으로 근로자가 사망하면 7년 이하 징역 또는 1억원 이하 벌금(제167조 제1항). 사망이 아닌 부상의 경우에도 5년 이하 징역 또는 5,000만원 이하 벌금</li>\n<li><strong>「중대재해처벌법」 위반</strong> — 5인 이상 사업장 경영책임자가 안전보건관리체계 구축 의무를 위반하여 사망 재해 발생 시 1년 이상 징역 또는 10억원 이하 벌금. 사망 외 중대재해 7년 이하 징역 또는 1억원 이하 벌금</li>\n<li><strong>「형법」 업무상과실치사상죄</strong> — 사업주의 주의 의무 위반으로 근로자가 사망하면 업무상과실치사죄(5년 이하 금고 또는 2,000만원 이하 벌금), 부상의 경우 업무상과실치상죄(5년 이하 금고 또는 2,000만원 이하 벌금)</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌 구조: 산안법 + 중대재해처벌법 + 형법 동시 적용 가능</blockquote>',
      },
      {
        title: '형사책임을 결정하는 핵심 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">수사기관과 법원은 사업주가 "예측할 수 있었던 위험을 예방할 조치를 했는가"를 기준으로 형사책임 여부를 판단합니다</strong></p>\n<ul>\n<li><strong>안전조치 이행 여부</strong> — 사고 발생 기계·설비에 대한 방호장치가 설치되어 있었는지, 정기적으로 점검했는지, 결함이 발견됐을 때 즉시 조치했는지를 조사합니다</li>\n<li><strong>안전교육 실시 여부</strong> — 해당 작업에 투입하기 전 안전교육을 실시했는지, 교육 일지와 수료 서명이 있는지를 확인합니다. 서류만 있고 실제 교육이 없었다면 허위 기재로 더 큰 불이익을 받을 수 있습니다</li>\n<li><strong>위험성 평가 실시</strong> — 해당 작업의 위험 요소를 사전에 식별하고 감소 조치를 취했는지 여부가 중요합니다. 위험성 평가 서류가 있고 실질적 이행이 입증되면 책임이 경감될 수 있습니다</li>\n<li><strong>작업 지시와 감독</strong> — 사업주 또는 관리감독자가 안전 기준을 위반하도록 지시하거나 묵인했다면 책임이 가중됩니다. 반면 안전 기준을 명확히 지시하고 근로자 개인의 무단 행위가 원인이라면 책임이 감경됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=industrial-accident2" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사처벌 감경에 유리한 3가지 방어 전략',
        content:
          '<p><strong style="color:#1e3a5f">수사 초기부터 방어 전략을 세우면 기소 회피 또는 형량 감경 가능성이 높아집니다. 다음 3가지 전략을 즉시 실행하세요</strong></p>\n<ul>\n<li><strong>전략 1: 안전 이행 증거 긴급 확보</strong> — 수사기관이 압수하기 전에 안전교육 일지, 위험성 평가 서류, 방호장치 점검 기록, 안전관리자 선임 서류 등을 복사·보관하세요. 이 서류들이 방어의 핵심입니다</li>\n<li><strong>전략 2: 피해 근로자·유족과 조기 합의</strong> — 법원은 피해 배상 노력을 양형에서 긍정적으로 평가합니다. 다만 합의 과정에서 "우리 잘못이 없다"는 발언은 자제하고, 변호사를 통해 합의하세요. 무리한 합의 요구는 오히려 역효과가 납니다</li>\n<li><strong>전략 3: 재발 방지 대책 수립·이행</strong> — 사고 원인을 분석하고 구체적 재발 방지 계획을 수립하여 고용노동부에 제출하세요. 안전시설 추가 설치, 안전관리자 추가 선임 등의 실질적 개선 조치는 처벌 감경의 중요 요소입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방어: 안전 증거 확보 + 유족 합의 + 재발 방지 이행 = 처벌 감경</blockquote>',
      },
      {
        title: '형사처벌 외 민사 손해배상 책임과 대응',
        content:
          '<p><strong style="color:#1e3a5f">형사처벌과 별도로 피해 근로자나 유족이 민사 손해배상을 청구할 수 있습니다. 산재보험 지급 후 추가 손해배상 청구 가능성을 확인하세요</strong></p>\n<ul>\n<li><strong>산재보험과 민사 손해배상의 관계</strong> — 산재보험으로 지급된 금액은 민사 손해배상에서 공제됩니다. 다만 산재보험이 보전하지 못하는 손해(위자료, 실제 손실 차액 등)에 대해서는 추가 배상 청구가 가능합니다</li>\n<li><strong>사업주 고의·과실의 영향</strong> — 사업주에게 중과실이 인정되면 산재보험 지급 후에도 추가 손해배상 책임이 남습니다. 반면 안전조치를 성실히 이행한 사업주에 대해서는 손해배상 책임이 일부 제한될 수 있습니다</li>\n<li><strong>민사 소송 대응</strong> — 민사 소송이 제기되면 형사 수사 결과가 민사에도 영향을 미칩니다. 형사 무죄 또는 불기소가 민사에서 유리한 증거로 사용될 수 있으므로 형사 방어에 더욱 집중할 필요가 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">민사·형사 연계: 형사 방어 결과가 민사 손해배상 책임에도 직접 영향</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도15060 — 중대재해처벌법 위반 형사처벌 사건',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 중대산업재해 발생과 관련하여 경영책임자가 안전보건관리체계 구축 의무를 형식적으로만 이행하고 실질적 이행을 하지 않은 경우에도 「중대재해처벌법」 위반이 인정된다고 판시했습니다. 위험성 평가 서류가 있어도 실제 개선이 이루어지지 않았다면 의무 위반으로 본다는 기준을 제시했습니다.',
        takeaway:
          '서류만 갖춰두는 "페이퍼 안전관리"는 중대재해처벌법 위반을 피할 수 없습니다. 실제로 위험을 제거했는지, 근로자가 실질적 안전교육을 받았는지가 처벌 여부를 결정합니다.',
      },
    ],
    faq: [
      {
        question: '안전관리자가 있었는데도 사업주가 처벌받나요?',
        answer:
          '<strong>네, 안전관리자 선임만으로는 사업주 면책이 되지 않습니다.</strong> 중대재해처벌법은 "경영책임자"가 직접 안전보건관리체계를 구축·이행할 의무를 부과합니다. 안전관리자에게 권한만 위임하고 관리·감독을 하지 않은 경우 책임이 그대로 남습니다.',
      },
      {
        question: '근로자 개인의 부주의가 사고 원인이라도 사업주가 처벌받나요?',
        answer:
          '<strong>근로자 부주의가 있어도 사업주 책임이 완전히 면제되지는 않습니다.</strong> 다만 사업주가 안전조치와 안전교육을 성실히 이행했고, 근로자가 이를 위반하여 사고가 발생했음이 입증되면 책임이 감경됩니다. 안전교육 실시 기록이 중요합니다.',
      },
      {
        question: '수사 중 회사 서류를 폐기해도 되나요?',
        answer:
          '<strong>절대 안 됩니다.</strong> 수사 중 관련 서류 폐기는 증거인멸로 별도의 형사처벌(증거인멸죄)을 받을 수 있습니다. 불리한 서류라도 수사 종결 전까지 보존해야 합니다.',
      },
      {
        question: '기소되면 반드시 징역형을 받나요?',
        answer:
          '<strong>그렇지 않습니다.</strong> 안전 이행 노력, 유족 합의, 재발 방지 조치 이행, 초범 여부, 사고 원인에 근로자 과실 기여 여부 등을 종합적으로 고려하여 집행유예 또는 벌금형으로 마무리되는 경우도 많습니다.',
      },
      {
        question: '중대재해처벌법 위반과 산안법 위반이 동시에 기소되면 처벌이 어떻게 되나요?',
        answer:
          '<strong>경합범으로 처리되어 더 무거운 쪽에 가중 처벌됩니다.</strong> 다만 실무상 경영책임자는 주로 중대재해처벌법으로, 현장 관리자·안전관리자는 산안법 위반으로 기소되는 경우가 많습니다.',
      },
    ],
    cta: {
      text: '사업주 형사책임 대응 무료 AI 상담',
      link: '/chat?domain=industrial-accident2',
    },
    internalLinks: [
      { label: '사업주 산재 가이드 홈', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 신고 의무', href: '/guide/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 사업주 대응 절차', href: '/guide/industrial-accident2/serious-accident-employer-response' },
      { label: '안전보건 위반 처벌 수위', href: '/guide/industrial-accident2/workplace-safety-violation-penalty' },
      { label: '산재 피해 근로자 권리', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 21. dismissal / unfair-dismissal-relief-procedure
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'unfair-dismissal-relief-procedure',
    keyword: '부당해고 구제신청 절차와 기간',
    questionKeyword: '부당해고 구제신청은 어떻게 하고 기간이 언제까지인가요?',
    ctaKeyword: '부당해고 구제신청',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '부당해고 구제신청 4단계 절차와 3개월 기한 | 로앤가이드',
      description:
        '부당해고를 당했는데 구제신청 방법과 기간을 모르겠다면, 해고일로부터 3개월 이내 신청서 제출부터 재심·소송까지 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"내일부터 나오지 않아도 됩니다." 아무런 예고도 없이 해고 통보를 받았습니다. 정당한 이유라고 할 수 없는 사유였습니다. 억울하지만 어디에 신고해야 하는지, 기간은 언제까지인지 몰라 시간만 흐르고 있습니다. 부당해고 구제신청 절차와 반드시 지켜야 하는 기한을 단계별로 안내해드립니다.</p>',
    timelineSteps: [
      '1단계: 해고 사실 확인(해고 즉시) — 해고 통지서 확보, 서면 미교부 시 요청, 증거 수집',
      '2단계: 구제신청 접수(해고일로부터 3개월 이내) — 지방노동위원회 신청서 제출',
      '3단계: 심문 절차(신청 후 60일 내외) — 신문 기일, 증거 제출, 화해 권고',
      '4단계: 재심·소송(판정 후 10일 이내 이의) — 중앙노동위원회 재심 또는 행정소송',
    ],
    sections: [
      {
        title: '구제신청 전 반드시 확보해야 할 증거 3가지',
        content:
          '<p><strong style="color:#1e3a5f">「근로기준법」 제27조에 따라 해고는 서면으로 통지해야 합니다. 서면 통지 없는 해고는 그 자체로 부당해고입니다. 해고 사실을 입증할 증거를 즉시 확보하세요</strong></p>\n<ul>\n<li><strong>① 해고 통지서(서면)</strong> — 사용자에게 해고 사유와 시기를 서면으로 요청하세요. 이메일이나 문자메시지도 서면 통지로 인정될 수 있습니다. 구두로만 해고 통보를 받았다면 해고 통보 내용을 녹음하거나 문자로 확인 요청을 보내세요</li>\n<li><strong>② 근무 성실성 증거</strong> — 정상 출근 기록, 업무 이메일·보고서, 인사평가 결과, 표창장·실적 자료 등 해고 사유가 부당함을 입증하는 자료를 수집하세요</li>\n<li><strong>③ 해고 경위 기록</strong> — 해고 통보를 받은 일시·장소·말한 내용을 즉시 메모하고, 가능하면 상사의 발언을 녹음하세요(본인이 당사자인 대화 녹음은 합법). 해고 전 불합리한 대우(따돌림, 업무 배제 등)도 기록해두세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 해고 통지서 + 근무 성실성 증거 + 해고 경위 기록 = 신청 준비 완료</blockquote>',
      },
      {
        title: '노동위원회 구제신청 방법과 해고일로부터 3개월 기한',
        content:
          '<p><strong style="color:#1e3a5f">「근로기준법」 제28조에 따라 해고일로부터 3개월 이내에 지방노동위원회에 구제신청을 해야 합니다. 이 기한을 단 하루라도 넘기면 신청이 각하됩니다</strong></p>\n<ul>\n<li><strong>신청 기관</strong> — 사업장 소재지 관할 지방노동위원회(서울, 경기, 부산 등 각 지역). 온라인 신청은 중앙노동위원회 홈페이지(www.nlrc.go.kr)에서 가능합니다</li>\n<li><strong>신청서 작성 핵심</strong> — 해고 일자, 해고 사유(사용자 주장), 부당성 근거, 구제 내용(원직 복직 또는 금전보상)을 명확히 기재합니다. 신청서 양식은 노동위원회 홈페이지에서 내려받을 수 있습니다</li>\n<li><strong>첨부 서류</strong> — 해고 통지서 사본, 근로계약서, 임금명세서 3개월치, 재직 기간 확인 서류(건강보험 가입 증명 등), 부당성을 뒷받침하는 증거 자료</li>\n<li><strong>신청 비용</strong> — 구제신청은 무료입니다. 변호사·노무사 선임은 선택 사항이며, 노동위원회는 신청인이 직접 대리할 수 있도록 지원합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '심문 절차와 판정 — 구제신청 후 60일 이내',
        content:
          '<p><strong style="color:#1e3a5f">구제신청 후 지방노동위원회는 심문 기일을 지정하고 당사자 진술을 듣습니다. 심문 기일에 잘 준비된 진술과 증거를 제출하는 것이 승패를 결정합니다</strong></p>\n<ul>\n<li><strong>심문 준비</strong> — 해고의 부당성을 간결하고 명확하게 설명할 진술서를 준비하세요. 감정적 표현보다 사실 중심으로 작성합니다. 증거 자료 목록과 원본·사본을 준비합니다</li>\n<li><strong>화해 권고</strong> — 노동위원회는 심문 전후로 당사자 간 화해를 권고합니다. 화해 성립 시 사건이 종결되며, 복직 대신 금전보상으로 합의하는 경우도 많습니다</li>\n<li><strong>판정 결과</strong> — 부당해고 인정 시: 원직 복직 명령 + 해고 기간 임금 상당액(백페이) 지급 명령. 또는 본인 신청에 따라 금전보상명령(평균임금 기준). 기각 시: 10일 이내 재심 신청 가능</li>\n<li><strong>판정 후 이행</strong> — 사용자가 복직 명령을 이행하지 않으면 이행강제금(사용자에게 최대 3,000만 원)이 부과됩니다. 이행강제금 부과를 신청하면 사용자를 압박하는 효과가 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판정 결과: 복직명령 + 임금 보상 / 불복 시 10일 이내 재심 신청</blockquote>',
      },
      {
        title: '재심과 행정소송 — 노동위원회 판정에 불복하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">지방노동위원회 기각 결정에 불복하면 10일 이내에 중앙노동위원회에 재심을 신청하고, 재심 결정에도 불복하면 행정소송을 제기할 수 있습니다</strong></p>\n<ul>\n<li><strong>중앙노동위원회 재심</strong> — 지방노동위원회 판정서를 받은 날로부터 10일 이내에 중앙노동위원회에 재심 신청. 재심에서도 심문 절차가 진행됩니다</li>\n<li><strong>행정소송</strong> — 중앙노동위원회 재심 결정에 불복하면 재심 판정서를 받은 날로부터 15일 이내에 행정법원에 행정소송(판정취소소송)을 제기할 수 있습니다. 이 기한도 엄격하게 적용됩니다</li>\n<li><strong>민사소송 병행</strong> — 노동위원회 절차와 별도로 민사법원에 "해고무효확인청구" 소송을 제기할 수 있습니다. 노동위원회 구제신청과 동시에 또는 별도로 진행 가능합니다</li>\n<li><strong>5인 미만 사업장</strong> — 근로기준법상 부당해고 구제신청은 5인 이상 사업장 근로자에게 적용됩니다. 5인 미만이라면 노동위원회 대신 민사법원에 해고무효확인 소송을 직접 제기해야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 순서: 지방노위 기각(10일) → 중앙노위 재심 → 행정소송(15일)</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2023두54914 — 택시조합 근로자 지위와 부당해고구제 사건',
        summary:
          '대법원 2023두54914 사건(2026.01.29 선고)에서 법원은 협동조합법에 따라 설립된 택시조합의 조합원이더라도 실질적으로 종속적 관계에서 임금을 목적으로 근로를 제공했다면 근로기준법상 근로자에 해당하여 부당해고 구제신청을 할 수 있다고 판시했습니다. 조합원 지위와 근로자 지위는 병존할 수 있다는 중요한 기준을 제시했습니다.',
        takeaway:
          '계약서 형식이 아닌 실질적 근무 관계를 기준으로 근로자 여부를 판단합니다. 플랫폼 노동자, 특수고용직, 협동조합 조합원이더라도 실질적으로 사용자의 지휘·감독을 받아 일했다면 부당해고 구제신청이 가능할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '3개월 기한을 단 하루라도 넘기면 정말 구제신청이 안 되나요?',
        answer:
          '<strong>원칙적으로 그렇습니다.</strong> 근로기준법 제28조의 3개월 기한은 불변기간입니다. 다만 해고 날짜가 불분명한 경우(구두 해고, 단계적 해고 등)에는 "해고 사실을 안 날"을 기산점으로 볼 수 있습니다. 기한이 임박했다면 일단 신청서를 제출하고 보완하는 것이 현명합니다.',
      },
      {
        question: '구제신청을 하면 해고가 자동으로 취소되나요?',
        answer:
          '<strong>구제신청 자체가 해고를 취소하지는 않습니다.</strong> 심문 절차를 거쳐 "부당해고"로 판정이 나야 복직명령이 내려집니다. 판정까지는 보통 2~3개월이 걸립니다. 그 기간 동안 실업급여를 받을 수 있으니 고용센터에도 신고하세요.',
      },
      {
        question: '복직 대신 돈으로 보상받을 수 있나요?',
        answer:
          '<strong>금전보상명령을 신청할 수 있습니다.</strong> 구제신청 시 복직이 아닌 금전보상을 원한다고 신청하면, 부당해고 기간 동안의 임금 상당액을 받을 수 있습니다. 직장으로 돌아가기 어려운 상황이라면 금전보상 선택을 고려하세요.',
      },
      {
        question: '해고예고수당과 부당해고 구제신청을 동시에 할 수 있나요?',
        answer:
          '<strong>네, 동시에 가능합니다.</strong> 30일 전 예고 없이 즉시 해고되었다면 해고예고수당(30일분 통상임금)을 노동위원회 또는 고용노동부에 청구하면서, 동시에 부당해고 구제신청을 진행할 수 있습니다.',
      },
      {
        question: '5인 미만 사업장에서 해고됐는데 구제받을 방법이 있나요?',
        answer:
          '<strong>민사소송으로 해고무효를 다툴 수 있습니다.</strong> 근로기준법상 부당해고 구제신청은 5인 이상 사업장에만 적용됩니다. 5인 미만이라면 민사법원에 "해고무효확인 및 임금청구 소송"을 제기하거나, 차별적 해고라면 국가인권위원회에 진정을 낼 수도 있습니다.',
      },
      {
        question: '판정이 나기 전에 회사를 관두면 구제신청이 취소되나요?',
        answer:
          '<strong>퇴직해도 구제신청은 유지됩니다.</strong> 다만 구제신청 중 자진 퇴직하면 복직을 원하지 않는다는 뜻으로 해석될 수 있어 금전보상으로 전환하는 것이 일반적입니다. 퇴직 전 노무사나 변호사와 상담하세요.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 무료 AI 상담',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 피해자 가이드 홈', href: '/guide/dismissal' },
      { label: '부당해고 즉시 대응 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 계산 방법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '자진 퇴사 vs 해고 구별법', href: '/guide/dismissal/voluntary-resignation-vs-dismissal' },
      { label: '부당해고 무효 판례 모음', href: '/guide/dismissal/unfair-dismissal-void-cases' },
    ],
  },
];
