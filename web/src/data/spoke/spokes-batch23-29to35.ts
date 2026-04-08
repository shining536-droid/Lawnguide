import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 29. 이 페이지는 [빌려준 돈을 받지 못하고 있는 채권자]의 [어느 기관에 어떤 방법으로 청구해야 할지 모르는 상황]에서 [내용증명→지급명령→소액소송 3경로 선택 안내]를 돕는 페이지다.
// 30. 이 페이지는 [실업급여를 처음 신청하려는 퇴직자]의 [신청부터 수급까지 전체 흐름을 모르는 상황]에서 [6단계 절차 타임라인과 각 단계별 준비사항 안내]를 돕는 페이지다.
// 31. 이 페이지는 [권고사직을 당한 근로자]의 [실업급여를 받을 수 있는지, 어떻게 신청해야 하는지 모르는 상황]에서 [권고사직 인정 요건과 수급 절차 안내]를 돕는 페이지다.
// 32. 이 페이지는 [자발적 퇴사 후 실업급여 신청 방법을 처음 알아보는 퇴직자]의 [어디서 어떻게 시작해야 하는지 모르는 상황]에서 [고용센터 방문부터 수급까지 첫 3단계 안내]를 돕는 페이지다.
// 33. 이 페이지는 [양육비를 받지 못하고 있는 양육 부모]의 [소송 절차와 기간을 모르는 상황]에서 [조정신청→본안소송→이행명령 3단계 타임라인 안내]를 돕는 페이지다.
// 34. 이 페이지는 [양육비 금액이 적당한지 확인하려는 양육 부모]의 [산정 기준표와 계산 방법을 모르는 상황]에서 [법원 산정 기준표 해석과 구체적 계산 방법 안내]를 돕는 페이지다.
// 35. 이 페이지는 [양육비를 처음 청구하려는 양육 부모]의 [어디에 어떻게 신청해야 하는지 모르는 상황]에서 [가정법원 접수부터 임시처분까지 첫 3단계 안내]를 돕는 페이지다.

export const spokesBatch23_29to35: SpokePage[] = [
  // ───────────────────────────────────────────
  // 29. small-claims / unpaid-money-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'small-claims',
    slug: 'unpaid-money-where-to-start',
    keyword: '돈 못 받았는데 어디부터 해야 하나',
    questionKeyword: '빌려준 돈을 못 받았을 때 처음에 무엇을 해야 하나요?',
    ctaKeyword: '미수금 회수 초기 대응',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '돈 못 받았을 때 — 3가지 회수 방법과 첫 단계 | 로앤가이드',
      description:
        '빌려준 돈이나 물품 대금을 받지 못하고 있다면 내용증명·지급명령·소액소송 중 어떤 방법을 먼저 써야 하는지 지금 확인하세요.',
    },
    intro:
      '<p>분명히 빌려줬는데, 갚겠다던 날짜는 한참 지났고 연락도 잘 되지 않습니다.</p><p>얼마를 어떻게 청구해야 하는지, 소송을 해야 하는지, 비용은 얼마나 드는지 아무것도 모르는 상태입니다.</p><p>돈을 돌려받기 위한 법적 경로는 금액과 상황에 따라 3가지로 나뉩니다. 순서를 제대로 밟지 않으면 시간과 비용만 낭비할 수 있습니다.</p><p>돈을 못 받고 있다면 지금 당장 해야 할 첫 단계부터 정리해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 내용증명으로 공식적인 이행 촉구를 보내세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명은 법적 효력은 없지만, 상대방에게 심리적 압박을 가하고 이후 소송의 증거로 활용할 수 있습니다</strong></p>\n<ul>\n<li><strong>작성 방법</strong> — 대여금(또는 물품대금) 발생 경위, 금액, 변제 기한, 미이행 시 법적 조치 예고를 포함하여 작성합니다. 양식 제한은 없으나 날짜·당사자 정보·청구 금액을 명확히 적어야 합니다</li>\n<li><strong>발송 방법</strong> — 우체국 내용증명 창구 방문 또는 인터넷우체국(등기우편)을 이용합니다. 동일 내용 3부를 준비해 수신자·발신자·우체국 각 1부씩 보관합니다</li>\n<li><strong>비용</strong> — 통상 4,000~6,000원 수준의 우편요금만 발생합니다</li>\n<li><strong>효과</strong> — 내용증명 수령 후 자진 변제하는 경우가 적지 않습니다. 또한 이후 소송에서 "청구했지만 이행하지 않았다"는 사실을 입증하는 증거로 사용됩니다. 소멸시효 중단 효력(6개월 유예)도 발생합니다</li>\n<li><strong>주의사항</strong> — 내용증명만으로는 강제집행이 불가합니다. 상대방이 무시하면 다음 단계로 진행해야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">내용증명 → 소멸시효 중단(6개월) + 자진 이행 기회 부여 + 소송 증거 확보</blockquote>',
      },
      {
        title: '2단계 — 금액과 상황에 따라 지급명령 또는 소액소송을 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">3,000만 원 이하의 채권은 소액사건심판, 3,000만 원 초과는 지급명령 또는 일반 민사소송이 적합합니다</strong></p>\n<ul>\n<li><strong>지급명령(독촉절차)</strong> — 상대방이 다투지 않을 가능성이 높을 때 유리합니다. 법원이 서면 심리만으로 명령을 내리고, 상대방이 2주 내 이의신청을 하지 않으면 확정판결과 동일한 집행권원이 됩니다. 인지대는 소액소송의 10분의 1로 저렴합니다. 단, 이의신청 시 자동으로 소송으로 이행됩니다</li>\n<li><strong>소액소송(소액사건심판)</strong> — 3,000만 원 이하 금전 분쟁에 최적화되어 있습니다. 변론기일은 보통 1회로 종결되며, 소장 제출 후 평균 1~3개월 내 판결이 납니다. 변호사 없이 본인이 직접 진행할 수 있습니다</li>\n<li><strong>선택 기준</strong> — 상대방이 채무 자체를 부인하거나 다투면 처음부터 소액소송, 채무는 인정하지만 미루는 경우라면 지급명령이 더 빠르고 저렴합니다</li>\n<li><strong>집행권원 확보 후</strong> — 판결문 또는 지급명령 확정 후 강제집행(예금·급여·부동산 압류)이 가능합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=small-claims" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 판결 확정 후 강제집행으로 실제 회수하세요',
        content:
          '<p><strong style="color:#1e3a5f">판결문이나 지급명령 확정증명원이 있으면 상대방의 재산에 강제집행을 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>예금 압류·추심</strong> — 상대방의 금융기관과 계좌번호를 알고 있으면 가장 빠른 방법입니다. 법원에 채권압류 및 추심명령 신청 후 금융기관으로부터 직접 추심합니다</li>\n<li><strong>급여 압류</strong> — 상대방이 직장인이라면 월급의 최대 2분의 1까지 압류할 수 있습니다(민사집행법 제246조). 고용주에게 압류·추심명령이 전달됩니다</li>\n<li><strong>부동산 강제경매</strong> — 부동산 소유자라면 강제경매를 신청할 수 있습니다. 시간이 오래 걸리지만 확실한 방법입니다</li>\n<li><strong>재산명시·재산조회</strong> — 상대방의 재산 내역을 파악하기 어려우면 법원에 재산명시 신청을 하거나, 금융·보험·부동산 등 기관 조회(재산조회 제도)를 활용할 수 있습니다</li>\n<li><strong>소멸시효 관리</strong> — 판결 확정 후 10년 이내에 강제집행 또는 재소제기를 해야 시효가 유지됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">집행권원 확보 → 예금·급여·부동산 중 압류 가능한 재산 선택 → 강제집행 신청</blockquote>',
      },
      {
        title: '증거 없을 때 대응 방법과 소멸시효 확인',
        content:
          '<p><strong style="color:#1e3a5f">차용증이 없어도 계좌 이체 내역, 카카오톡 메시지, 통화 기록으로 대여 사실을 입증할 수 있습니다</strong></p>\n<ul>\n<li><strong>계좌 이체 내역</strong> — 가장 강력한 증거입니다. 이체 메모에 "빌려줌", "대여금" 등이 기재되어 있다면 더욱 유리합니다</li>\n<li><strong>카카오톡·문자 메시지</strong> — "꼭 갚을게", "이번 달 말에 드릴게요" 등 변제 약속 문자는 채무 인정 증거로 활용됩니다. 상대방이 연락을 끊어도 이미 저장된 메시지가 있으면 됩니다</li>\n<li><strong>녹취 파일</strong> — 채무 사실을 인정하는 전화 통화 녹음은 민사 증거로 유효합니다. 일방 당사자가 녹음한 것도 증거 능력이 있습니다</li>\n<li><strong>소멸시효</strong> — 일반 대여금은 <strong>10년</strong>, 상사채권(사업 관련)은 <strong>5년</strong>입니다. 시효가 임박하면 내용증명 발송이나 소송 제기로 즉시 중단시켜야 합니다</li>\n</ul>\n<p>관련 페이지: <a href="/guide/small-claims/lending-money-not-returned-lawsuit">빌려준 돈 돌려받는 소송 방법</a> | <a href="/guide/small-claims/complaint-to-judgment-full-procedure">소장 제출부터 판결까지 전체 절차</a> | <a href="/guide/small-claims/small-claims-vs-payment-order-comparison">소액소송 vs 지급명령 비교</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2024마5324 — 지급명령 취하 후 변호사 보수 소송비용 귀속',
        summary:
          '대법원 2024마5324 사건(대법원, 2025.3.27. 선고)에서 법원은 채권자가 지급명령 신청 후 취하한 경우, 채무자가 지급명령에 이의신청을 하여 소송으로 이행된 뒤 채권자가 소를 취하했을 때 소송비용(변호사 보수 포함)의 부담자를 판단했습니다. 법원은 소송비용 부담에 관한 규정을 엄격하게 해석하여 취하로 인한 비용 귀속 원칙을 확인했습니다.',
        takeaway:
          '지급명령 후 상대방이 이의신청을 하면 소송으로 자동 이행됩니다. 소 제기 후 취하할 경우 소송비용을 부담해야 할 수 있으므로, 처음부터 상대방이 다툴 가능성을 고려하여 지급명령과 소액소송 중 어떤 방법을 선택할지 신중히 판단하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '차용증이 없어도 소액소송을 제기할 수 있나요?',
        answer:
          '가능합니다. 차용증이 없더라도 계좌 이체 내역, 카카오톡 메시지, 통화 녹음 등으로 대여 사실과 변제 약속을 입증할 수 있습니다. 다만 상대방이 "선물이었다" 또는 "돈을 받은 적 없다"고 부인하면 증거 강도에 따라 결과가 달라질 수 있습니다.',
      },
      {
        question: '지급명령과 소액소송 중 어느 것이 더 빠른가요?',
        answer:
          '상대방이 이의신청을 하지 않으면 지급명령이 더 빠릅니다. 보통 신청 후 2~4주 내에 지급명령이 발부되고, 이의신청 없이 2주가 지나면 확정됩니다. 반면 소액소송은 변론기일 지정까지 1~2개월이 소요됩니다. 다만 상대방이 이의신청을 하면 지급명령은 소송으로 이행되어 시간이 더 걸릴 수 있습니다.',
      },
      {
        question: '상대방이 재산이 없으면 판결을 받아도 소용없나요?',
        answer:
          '판결을 받으면 집행력이 10년간 유지됩니다. 현재 재산이 없어도 이후 취업하거나 재산을 취득하면 그때 강제집행이 가능합니다. 또한 금융정보통합조회 시스템을 통해 은행 계좌 등을 조회해볼 수 있습니다.',
      },
      {
        question: '소액소송 비용은 얼마나 드나요?',
        answer:
          '인지대는 청구금액의 0.5%(최소 1,000원, 최대 1만 원), 송달료는 당사자 수 × 5회분(약 5만~6만 원)입니다. 300만 원 청구 기준 총 3만~4만 원 수준입니다. 승소하면 상대방에게 소송비용을 청구할 수 있습니다.',
      },
      {
        question: '돈을 빌려준 지 10년이 지났는데 소멸시효가 완성됐나요?',
        answer:
          '일반 대여금의 소멸시효는 10년입니다. 다만 그 사이에 상대방이 채무를 인정하거나, 내용증명을 발송했거나, 소송을 제기한 적이 있다면 시효가 중단되어 다시 10년이 기산됩니다. 시효 완성 여부는 중단 사유 유무를 함께 확인해야 합니다.',
      },
    ],
    cta: {
      text: '돈 못 받은 상황, AI로 빠르게 대응 전략 세우기',
      link: '/chat?domain=small-claims',
    },
    internalLinks: [
      { label: '빌려준 돈 돌려받는 소송 방법', href: '/guide/small-claims/lending-money-not-returned-lawsuit' },
      { label: '소장 제출부터 판결까지 전체 절차', href: '/guide/small-claims/complaint-to-judgment-full-procedure' },
      { label: '소액소송 vs 지급명령 비교', href: '/guide/small-claims/small-claims-vs-payment-order-comparison' },
      { label: '실업급여 신청 어디부터', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 30. unemployment / application-to-payment-full-procedure
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'application-to-payment-full-procedure',
    keyword: '실업급여 신청에서 수급까지 전체 절차',
    questionKeyword: '실업급여 신청부터 받을 때까지 어떤 절차를 거쳐야 하나요?',
    ctaKeyword: '실업급여 절차 확인',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '실업급여 신청부터 수급까지 6단계 전체 절차 | 로앤가이드',
      description:
        '퇴사 후 실업급여를 신청하려는데 어떤 순서로 진행되는지 몰라 막막하다면 신청부터 첫 수령까지 6단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>퇴사 후 실업급여를 받고 싶은데, 어디에 어떤 서류를 내야 하는지 복잡하게 느껴집니다.</p><p>고용센터에 가면 되는 건지, 온라인으로도 되는지, 기다리는 기간은 얼마인지 궁금한 게 한두 가지가 아닙니다.</p><p>실업급여는 신청 후 바로 입금되는 게 아니라 구직활동 신고, 수급자격 인정, 실업인정 신청을 반복하는 구조입니다. 전체 흐름을 먼저 파악해야 한 단계도 빠뜨리지 않을 수 있습니다.</p><p>퇴직 다음 날부터 시작하는 6단계 절차를 단계별로 설명합니다.</p>',
    timelineSteps: [
      '퇴직 다음 날부터 이직확인서 제출 요청(전 직장)',
      '고용센터 워크넷 구직등록(온라인)',
      '수급자격 인정 신청(고용센터 방문, 퇴직 후 12개월 이내)',
      '수급자격자 교육 이수(온라인 또는 대면)',
      '1~4주 대기 후 첫 실업인정일 출석',
      '2주마다 실업인정 신청 반복 → 급여 지급',
    ],
    sections: [
      {
        title: '1~2단계 — 이직확인서 수령과 워크넷 구직등록',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 신청의 출발점은 전 직장의 이직확인서와 워크넷 구직등록입니다. 이 두 가지가 완료되지 않으면 수급자격 신청 자체가 불가합니다</strong></p>\n<ul>\n<li><strong>이직확인서 제출 요청</strong> — 퇴직 후 전 직장 사업주는 고용보험 피보험자격 상실 신고와 함께 이직확인서를 고용센터에 제출해야 합니다. 사업주가 10일 이내에 제출하지 않으면 근로자가 직접 고용센터에 요청(이직확인서 발급 요청서)할 수 있습니다</li>\n<li><strong>이직 사유 확인</strong> — 이직확인서의 이직 사유가 비자발적 퇴직(권고사직, 계약 만료, 해고 등)으로 기재되어야 수급 자격이 생깁니다. 자발적 퇴사(개인 사정 등)로 기재되면 실업급여를 받을 수 없습니다. 사실과 다르게 기재된 경우 고용센터에 이의를 제기해야 합니다</li>\n<li><strong>워크넷 구직등록</strong> — 고용노동부 워크넷(www.work.go.kr)에서 온라인으로 구직 신청을 합니다. 이력서와 구직 희망 직종을 등록해야 합니다. 구직등록 날짜가 실업인정 기산일에 영향을 미치므로 최대한 빨리 진행하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이직확인서(사업주 → 고용센터) + 워크넷 구직등록 완료 → 수급자격 신청 가능</blockquote>',
      },
      {
        title: '3~4단계 — 수급자격 인정 신청과 교육 이수',
        content:
          '<p><strong style="color:#1e3a5f">수급자격 인정 신청은 반드시 퇴직 후 12개월 이내에 해야 합니다. 이 기간을 넘기면 자격 자체를 잃습니다</strong></p>\n<ul>\n<li><strong>방문 고용센터</strong> — 거주지 또는 구직 희망 지역 관할 고용센터에 방문합니다. 온라인 수급자격 신청도 가능하나(고용24 사이트), 초초 신청자는 대면 방문이 권장됩니다</li>\n<li><strong>지참 서류</strong> — 신분증, 고용보험 피보험자격 상실 확인서(고용보험 홈페이지 발급 가능), 이직확인서 사본(사업주가 제출했으면 자동 조회 가능), 통장 사본</li>\n<li><strong>수급자격 심사</strong> — 이직 사유, 피보험 기간(최소 180일 이상), 구직활동 의사 등을 심사합니다. 통상 1~2주 내에 인정 여부가 결정됩니다</li>\n<li><strong>수급자격자 교육</strong> — 수급자격 인정 후 반드시 교육을 이수해야 합니다. 온라인(고용24) 또는 고용센터 집체 교육 중 선택합니다. 교육 이수 전에는 첫 실업인정 신청이 불가합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '5~6단계 — 실업인정 신청과 급여 수령',
        content:
          '<p><strong style="color:#1e3a5f">수급자격 인정 후 2주마다 실업인정 신청을 반복해야 급여가 지급됩니다. 한 번이라도 빠뜨리면 해당 기간의 급여는 지급되지 않습니다</strong></p>\n<ul>\n<li><strong>대기 기간(7일)</strong> — 수급자격 인정 후 7일간의 대기 기간이 있습니다. 이 기간에는 급여가 지급되지 않습니다</li>\n<li><strong>첫 실업인정일</strong> — 대기 기간 종료 후 지정된 날짜에 고용센터 방문 또는 온라인(고용24)으로 실업인정을 신청합니다. 지정 날짜를 지켜야 해당 주의 급여가 인정됩니다</li>\n<li><strong>구직활동 횟수</strong> — 실업인정 기간마다 구직활동 증명이 필요합니다. 통상 2주에 2회 이상의 구직활동(입사 지원, 직업훈련, 취업 특강 참여 등)을 해야 합니다. 구직활동 없이 신청하면 해당 회차 급여가 불인정될 수 있습니다</li>\n<li><strong>급여 수준</strong> — 이직 전 평균임금의 60%, 상한액은 1일 66,000원(2024년 기준), 하한액은 최저임금의 80%입니다. 지급 기간은 피보험 기간과 연령에 따라 120~270일입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">7일 대기 → 실업인정 신청(2주마다) → 구직활동 증명 → 급여 입금(매 실업인정 후 3~5일)</blockquote>',
      },
      {
        title: '수급 중 주의사항과 자격 상실 사유',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 수급 중 취업, 아르바이트 미신고, 구직활동 불성실 등의 사유가 발생하면 수급 자격이 정지되거나 반환 명령을 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>단기 취업·아르바이트</strong> — 1일이라도 취업(아르바이트 포함)하면 반드시 고용센터에 신고해야 합니다. 신고하면 취업 기간만큼 급여가 정지되고 잔여 기간은 재개됩니다. 미신고 적발 시 부정수급으로 반환 명령 + 추가 제재를 받습니다</li>\n<li><strong>해외 출국</strong> — 수급 중 7일 이상 해외 출국 시 해당 기간의 급여가 지급되지 않습니다. 출국 전 고용센터에 신고하세요</li>\n<li><strong>구직활동 불성실</strong> — 실업인정일에 출석하지 않거나 구직활동 증명이 불충분하면 해당 회차 급여가 불인정됩니다</li>\n<li><strong>자영업 개업 준비</strong> — 사업자 등록 전이라도 실질적인 영업 활동을 시작했다면 취업으로 간주될 수 있습니다</li>\n</ul>\n<p>관련 페이지: <a href="/guide/unemployment/voluntary-resignation-benefit-eligible-cases">자발적 퇴사도 실업급여 받는 경우</a> | <a href="/guide/unemployment/recommended-resignation-unemployment-benefit">권고사직 실업급여 받는 법</a> | <a href="/guide/unemployment/resigned-where-to-start-application">퇴사 후 실업급여 어디부터 신청하나</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2018두63235 — 고용보험 가입 불인정 처분 취소',
        summary:
          '대법원 2018두63235 사건(대법원, 2019.4.11. 선고)에서 법원은 사업주가 근로자를 고용보험 피보험자로 신고하지 않은 경우에도 실질적인 근로 관계가 인정되면 피보험자격을 소급하여 취득할 수 있다고 판시했습니다. 고용노동부가 고용보험 가입 신청을 거부한 처분이 위법하다고 보아 취소 판결을 내렸습니다.',
        takeaway:
          '사업주가 고용보험 가입을 누락했거나 거부하더라도, 실질적인 근로 관계가 있었다면 소급하여 피보험자격을 인정받을 수 있습니다. 이직확인서가 없거나 가입이 되지 않은 경우에도 고용센터에 직접 확인을 요청하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '퇴직 후 얼마 안에 신청해야 하나요?',
        answer:
          '퇴직 후 <strong>12개월 이내</strong>에 수급자격 인정 신청을 해야 합니다. 이 기간을 넘기면 자격 자체를 잃게 됩니다. 단, 이미 인정을 받은 경우에도 12개월이 지나면 남은 기간의 급여를 수령하지 못할 수 있으므로 빠른 신청이 유리합니다.',
      },
      {
        question: '계약직도 실업급여를 받을 수 있나요?',
        answer:
          '계약 만료로 퇴직한 경우 비자발적 퇴직으로 인정되어 실업급여 수급 대상이 됩니다. 피보험 기간 180일(약 6개월) 이상을 충족해야 합니다. 단, 계약 연장 제안을 스스로 거절한 경우에는 자발적 퇴직으로 볼 수 있어 자격이 제한될 수 있습니다.',
      },
      {
        question: '실업급여 수령 중 단기 아르바이트를 해도 되나요?',
        answer:
          '1일이라도 유급 근로를 하면 반드시 고용센터에 신고해야 합니다. 신고 시 취업 기간만큼 급여가 정지되고 잔여 기간에 다시 재개됩니다. 미신고하면 부정수급으로 이미 수령한 급여 반환과 추가 제재(최대 지급액 × 2배 반환)를 받을 수 있습니다.',
      },
      {
        question: '수급자격 교육은 꼭 대면으로 받아야 하나요?',
        answer:
          '고용24 홈페이지(www.work24.go.kr)에서 온라인으로도 이수할 수 있습니다. 약 40분 분량의 동영상 강의로, PC 또는 모바일에서 수강 가능합니다. 교육을 이수하지 않으면 첫 실업인정 신청 자체가 불가하므로 수급자격 인정 직후 바로 수강하는 것이 좋습니다.',
      },
      {
        question: '구직활동은 어떻게 해야 인정되나요?',
        answer:
          '구직활동으로 인정받으려면 ① 기업에 직접 입사 지원(워크넷·구인 사이트·이메일 등), ② 고용센터 직업훈련 과정 참여, ③ 취업 특강·상담 참여, ④ 채용 박람회 참가 등이 있습니다. 워크넷을 통한 지원이 가장 확실하며, 입사 지원 내역을 캡처하여 보관하는 것이 좋습니다.',
      },
    ],
    cta: {
      text: '실업급여 수급 절차, AI로 빠르게 확인하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사도 실업급여 받는 경우', href: '/guide/unemployment/voluntary-resignation-benefit-eligible-cases' },
      { label: '권고사직 실업급여 받는 법', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '퇴사 후 실업급여 어디부터 신청하나', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '돈 못 받았을 때 어디부터', href: '/guide/small-claims/unpaid-money-where-to-start' },
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 31. unemployment / recommended-resignation-unemployment-benefit
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'recommended-resignation-unemployment-benefit',
    keyword: '권고사직 실업급여 받는 법',
    questionKeyword: '권고사직을 당했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '권고사직 실업급여 상담',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '권고사직 실업급여 — 인정 요건과 신청 방법 3단계 | 로앤가이드',
      description:
        '권고사직을 당했는데 실업급여를 받을 수 있는지, 어떻게 신청해야 하는지 막막하다면 인정 요건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회사 사정이 어려우니 스스로 나가달라"는 압박을 받고 결국 사직서에 도장을 찍었습니다.</p><p>자발적으로 서명한 것 같지만, 실제로는 회사가 먼저 퇴직을 권유한 것입니다. 이런 경우 실업급여를 받을 수 있는지 많은 분들이 헷갈려 합니다.</p><p>권고사직은 원칙적으로 비자발적 퇴직으로 인정되어 실업급여 수급 자격이 생깁니다. 단, 이직확인서에 이직 사유가 제대로 기재되어야 합니다.</p><p>권고사직 실업급여를 받기 위한 조건과 주의사항을 구체적으로 정리했습니다.</p>',
    sections: [
      {
        title: '권고사직이 실업급여 수급 대상이 되는 이유',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제58조에 따라 비자발적 퇴직자는 실업급여 수급 자격을 갖습니다. 권고사직은 사용자의 권유에 의한 퇴직이므로 비자발적 퇴직에 해당합니다</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 고용보험법 시행규칙 별표2는 수급 자격이 있는 이직 사유를 열거하고 있습니다. "사업주의 권고에 의한 이직"은 명시적으로 수급 자격 있는 이직 사유로 분류됩니다</li>\n<li><strong>사직서를 썼어도 수급 가능</strong> — 형식상 사직서를 제출했더라도 회사가 먼저 퇴직을 권유했다는 사실이 인정되면 비자발적 퇴직으로 처리됩니다. 사직서 제출 = 자발적 퇴직이라는 공식은 성립하지 않습니다</li>\n<li><strong>이직확인서 이직 사유 코드</strong> — 사업주가 이직확인서에 이직 사유를 "권고사직(코드 23)" 또는 "경영상 필요에 의한 권고사직(코드 23)"으로 기재하면 자동으로 수급 자격이 인정됩니다</li>\n<li><strong>이직 사유가 잘못 기재된 경우</strong> — "개인 사유(코드 11)"로 기재되면 자발적 퇴직으로 처리되어 실업급여를 받을 수 없습니다. 이 경우 고용센터에 이의 신청을 하고 권고사직 사실을 증명해야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">권고사직 = 비자발적 퇴직 → 수급 자격 인정 | 단, 이직확인서 이직 사유 코드 확인 필수</blockquote>',
      },
      {
        title: '권고사직 증거 수집과 이의신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">이직확인서 이직 사유가 잘못 기재된 경우, 권고사직 사실을 증명하는 증거를 갖추어 고용센터에 이의신청을 해야 합니다</strong></p>\n<ul>\n<li><strong>카카오톡·이메일·문자 메시지</strong> — 상사나 인사 담당자가 "이번에 나가주셨으면 합니다", "희망퇴직 대상으로 선정됐습니다" 등의 메시지를 보낸 경우 캡처하여 보관합니다</li>\n<li><strong>면담 녹취</strong> — 권고사직을 권유받은 자리에서 몰래 녹음한 파일도 증거가 됩니다. 일방 당사자가 녹음한 것은 민사 절차에서 증거 능력이 있습니다</li>\n<li><strong>퇴직금 협의 문서</strong> — 회사가 퇴직금 또는 위로금을 제시한 문서, 이메일이 있다면 회사가 먼저 퇴직을 권유했다는 간접 증거가 됩니다</li>\n<li><strong>동료 진술</strong> — 같은 시기에 권고사직 압박을 받은 동료가 있다면 진술을 확보해 두세요</li>\n<li><strong>고용센터 이의신청 절차</strong> — 수급자격 불인정 처분을 받으면 처분 통지를 받은 날로부터 90일 이내에 심사청구(고용보험 심사관)를 제기할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '권고사직 후 실업급여 신청 3단계',
        content:
          '<p><strong style="color:#1e3a5f">권고사직으로 퇴직 후 실업급여 신청은 이직확인서 확인 → 워크넷 구직등록 → 고용센터 수급자격 신청의 순서로 진행합니다</strong></p>\n<ul>\n<li><strong>1단계: 이직확인서 이직 사유 확인</strong> — 고용보험 홈페이지(ei.go.kr)에서 이직확인서 처리 현황을 조회합니다. 이직 사유 코드가 권고사직(23)인지 확인하고, 다르게 기재되어 있으면 고용센터에 이의를 제기합니다</li>\n<li><strong>2단계: 워크넷 구직등록</strong> — 퇴직 직후 워크넷(work.go.kr)에서 구직 신청을 합니다. 고용센터 방문 전에 온라인으로 완료해 두면 처리가 빠릅니다</li>\n<li><strong>3단계: 수급자격 신청</strong> — 관할 고용센터를 방문하여 수급자격 인정 신청서를 제출합니다. 신분증, 통장 사본을 지참하고, 이직 경위를 담당자에게 정확히 설명합니다. 권고사직 증거 자료(메시지, 녹취 등)를 함께 제출하면 심사 통과에 유리합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이직확인서 이직 사유 코드 확인 → 워크넷 구직등록 → 고용센터 방문 신청 순서</blockquote>',
      },
      {
        title: '권고사직과 구분해야 할 상황들',
        content:
          '<p><strong style="color:#1e3a5f">모든 사직서 제출이 실업급여 수급 대상이 되는 것은 아닙니다. 자발적 퇴직으로 판단될 수 있는 상황을 미리 파악하세요</strong></p>\n<ul>\n<li><strong>계약 연장 거절</strong> — 계약 만료 시 사업주가 연장 의사를 밝혔는데 근로자가 스스로 거절한 경우 자발적 퇴직으로 볼 수 있어 실업급여 수급이 어렵습니다</li>\n<li><strong>더 좋은 직장으로의 이직</strong> — 다른 직장이 결정된 상태에서 자발적으로 퇴사한 경우 비수급 대상입니다</li>\n<li><strong>희망퇴직 자원</strong> — 회사가 희망퇴직자를 모집했을 때 본인이 자원한 경우, 형식적으로는 권고사직이지만 실질이 자발적 퇴직으로 볼 수 있어 심사 기준이 엄격합니다. 단, 희망퇴직이라도 구조조정 목적이라면 수급 자격이 인정되는 사례가 많습니다</li>\n<li><strong>개인 사정에 의한 사직</strong> — 건강, 가족 돌봄 등 불가피한 사유라도 원칙적으로는 자발적 퇴직. 다만 고용보험법 시행규칙에서 정한 특정 불가피 사유에 해당하면 수급 자격이 인정됩니다</li>\n</ul>\n<p>관련 페이지: <a href="/guide/unemployment/application-to-payment-full-procedure">실업급여 신청부터 수급까지 전체 절차</a> | <a href="/guide/unemployment/voluntary-resignation-benefit-eligible-cases">자발적 퇴사도 실업급여 받는 경우</a> | <a href="/guide/unemployment/resigned-where-to-start-application">퇴사 후 실업급여 어디부터</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2020두31323 — 실업급여 지급제한 및 반환명령',
        summary:
          '대법원 2020두31323 사건(대법원, 2020.12.10. 선고)에서 법원은 근로자가 이직 사유를 허위로 신고하여 실업급여를 수령한 경우 고용센터가 지급을 제한하고 이미 지급한 금액의 반환을 명할 수 있다고 판시했습니다. 부정수급에 해당하면 지급액 전액 반환과 추가 징수 처분이 가능하다는 점을 확인한 판결입니다.',
        takeaway:
          '실업급여를 수령하려면 이직 사유를 사실 그대로 신고해야 합니다. 허위 신고나 사실 은폐는 부정수급으로 전액 반환과 추가 제재를 받을 수 있습니다. 권고사직 사실이 있다면 이를 정확히 증명하여 정당하게 수급 자격을 인정받는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '권고사직 압박을 받고 사직서를 썼는데 실업급여를 받을 수 있나요?',
        answer:
          '사직서를 썼더라도 회사가 먼저 퇴직을 권유했다는 사실을 증명하면 실업급여를 받을 수 있습니다. 권고사직 관련 메시지, 면담 녹취, 위로금 제안 문서 등을 증거로 제출하고 고용센터에서 이직 사유를 권고사직으로 인정받아야 합니다.',
      },
      {
        question: '이직확인서가 아직 처리되지 않았는데 기다려야 하나요?',
        answer:
          '사업주는 퇴직 후 10일 이내에 이직확인서를 제출해야 합니다. 기한이 지났는데도 처리되지 않으면 고용센터에 이직확인서 발급 요청서를 제출하면 고용센터가 사업주에게 직접 제출을 요구할 수 있습니다.',
      },
      {
        question: '권고사직인데 회사가 "자발적 퇴직"으로 처리하겠다고 합니다. 어떻게 해야 하나요?',
        answer:
          '이직확인서의 이직 사유 코드가 "자발적 퇴직(11)"으로 기재되면 실업급여 수급 자격이 없어집니다. 고용센터에 사실 확인 요청을 하고, 권고사직을 증명할 수 있는 카카오톡 메시지, 녹음 파일, 이메일 등을 함께 제출하여 이직 사유를 수정 요청해야 합니다.',
      },
      {
        question: '권고사직 합의금(위로금)을 받으면 실업급여가 줄어드나요?',
        answer:
          '합의금(위로금)은 실업급여 금액에 영향을 미치지 않습니다. 실업급여는 이직 전 평균임금을 기준으로 산정되므로, 별도로 받은 위로금과는 관계없이 동일하게 지급됩니다. 단, 위로금이 퇴직금 형식으로 지급되어 퇴직금 중간정산 처리된 경우에는 다를 수 있습니다.',
      },
      {
        question: '권고사직 후 얼마 만에 실업급여를 받을 수 있나요?',
        answer:
          '수급자격 인정 신청 후 심사(1~2주) + 대기 기간 7일 + 첫 실업인정 신청까지 통상 퇴직 후 1~2개월 내에 첫 급여가 지급됩니다. 빠른 신청과 구직 등록이 수령 시기를 앞당기는 핵심입니다.',
      },
    ],
    cta: {
      text: '권고사직 실업급여 수급 가능 여부, AI로 확인하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청부터 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자발적 퇴사도 실업급여 받는 경우', href: '/guide/unemployment/voluntary-resignation-benefit-eligible-cases' },
      { label: '퇴사 후 실업급여 어디부터', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '돈 못 받았을 때 어디부터', href: '/guide/small-claims/unpaid-money-where-to-start' },
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 32. unemployment / resigned-where-to-start-application
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'resigned-where-to-start-application',
    keyword: '퇴사 후 실업급여 어디부터 신청하나',
    questionKeyword: '퇴사하고 나서 실업급여를 받으려면 어디서 어떻게 시작하나요?',
    ctaKeyword: '실업급여 신청 첫 단계 확인',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '퇴사 후 실업급여 — 처음 해야 할 3가지와 기관 안내 | 로앤가이드',
      description:
        '퇴사 후 실업급여를 어디서 신청해야 하는지, 첫 단계가 무엇인지 막막하다면 고용센터 방문 전 준비사항을 지금 확인하세요.',
    },
    intro:
      '<p>오늘 마지막 출근을 마치고 집에 돌아왔습니다. 실업급여를 받아야 하는데, 고용센터에 가면 되는 건지, 먼저 뭔가를 준비해야 하는 건지 아무것도 모릅니다.</p><p>검색해보니 이직확인서, 피보험자격, 워크넷 등 처음 듣는 단어들만 나옵니다.</p><p>실업급여는 퇴직 당일 바로 신청할 수 없습니다. 이직확인서 제출 → 온라인 구직등록 → 고용센터 방문의 순서가 있고, 각 단계를 빠뜨리면 처리가 지연됩니다.</p><p>퇴사 직후 처음 해야 할 3가지를 순서대로 알려드립니다.</p>',
    sections: [
      {
        title: '첫 번째 — 이직확인서 처리 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 신청의 첫 관문은 전 직장이 이직확인서를 고용보험에 신고했는지 확인하는 것입니다</strong></p>\n<ul>\n<li><strong>확인 방법</strong> — 고용보험 홈페이지(ei.go.kr) → 개인서비스 → 피보험자격 이력 조회에서 이직확인서 처리 현황을 확인합니다</li>\n<li><strong>미처리 시 조치</strong> — 퇴직 후 10일이 지났는데도 이직확인서가 미처리 상태라면 전 직장에 요청하거나, 고용센터에 이직확인서 발급 요청서를 제출합니다</li>\n<li><strong>이직 사유 확인</strong> — 이직확인서의 이직 사유 코드가 중요합니다. 권고사직(23), 계약 만료(31), 해고(22) 등 비자발적 퇴직 코드여야 수급 자격이 생깁니다. 개인 사유(11)로 기재되어 있으면 즉시 수정 요청해야 합니다</li>\n<li><strong>고용보험 가입 여부 확인</strong> — 피보험자격 이력에 현 직장이 등록되어 있는지, 피보험 기간이 180일 이상인지도 함께 확인하세요. 5인 미만 사업장이나 단기 근로의 경우 가입이 누락된 경우가 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">고용보험(ei.go.kr) → 이직확인서 처리 현황 → 이직 사유 코드 → 비자발적 퇴직 확인</blockquote>',
      },
      {
        title: '두 번째 — 워크넷에서 구직 신청을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">워크넷(work.go.kr) 구직 신청은 실업급여 신청의 필수 선행 요건입니다. 고용센터 방문 전에 온라인으로 완료해 두세요</strong></p>\n<ul>\n<li><strong>접속 방법</strong> — 워크넷(www.work.go.kr) 접속 → 회원가입(또는 공동인증서 로그인) → 구직 신청 메뉴에서 이력서를 등록합니다</li>\n<li><strong>등록 내용</strong> — 학력, 경력, 희망 직종, 희망 근무지 등을 입력합니다. 완벽하게 작성하지 않아도 되지만 구직 의사가 명확히 드러나야 합니다</li>\n<li><strong>등록 날짜의 중요성</strong> — 워크넷 구직 신청일이 실업인정 기산일에 영향을 미칩니다. 퇴직 후 가능한 빨리 등록하는 것이 급여 수령 시기를 앞당깁니다</li>\n<li><strong>고용24 앱 활용</strong> — 스마트폰 고용24 앱에서 워크넷 구직 등록, 실업인정 신청, 수급자격 교육 이수 등을 모두 처리할 수 있습니다. 고용센터 방문 횟수를 최소화하려면 앱을 활용하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '세 번째 — 고용센터를 방문해서 수급자격 신청을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">이직확인서 처리 완료 + 워크넷 구직 등록이 되어있는 상태에서 관할 고용센터를 방문합니다. 퇴직 후 12개월 이내에 신청해야 합니다</strong></p>\n<ul>\n<li><strong>방문할 고용센터</strong> — 거주지 또는 구직 희망 지역 관할 고용센터 어느 곳이나 이용 가능합니다. 고용노동부 홈페이지에서 가까운 고용센터를 검색할 수 있습니다</li>\n<li><strong>지참 서류</strong> — 신분증, 통장 사본(급여 수령용), 이직확인서 사본(사업주 제출분, 자동 조회 가능한 경우 불필요). 권고사직인 경우 이를 증명할 수 있는 자료를 지참하면 심사가 원활합니다</li>\n<li><strong>방문 당일 절차</strong> — 수급자격 인정 신청서 작성 → 담당자 면담(이직 경위, 구직 의사 확인) → 수급자격 심사(1~2주 소요) → 수급자격자 교육 이수 → 첫 실업인정일 지정</li>\n<li><strong>온라인 신청</strong> — 고용24(work24.go.kr) 또는 앱에서 온라인 신청도 가능합니다. 단, 비자발적 퇴직 여부에 대한 심사가 필요한 경우(권고사직, 불이익 변경 등) 고용센터 방문이 요구될 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이직확인서 확인 → 워크넷 구직등록 → 고용센터 방문(12개월 이내) → 수급자격 인정 신청</blockquote>',
      },
      {
        title: '실업급여 대상 여부 자가 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 방문 전에 아래 조건을 먼저 확인하세요. 모두 충족해야 수급 자격이 인정됩니다</strong></p>\n<ul>\n<li>이직일 이전 18개월 내 <strong>피보험 기간 합산 180일 이상</strong>인가? (단시간 근로자는 24개월 내 합산)</li>\n<li>이직 사유가 <strong>비자발적 퇴직</strong>인가? (권고사직, 해고, 계약 만료, 회사 폐업, 근로 조건 불이익 변경 등)</li>\n<li>이직 후 <strong>즉시 취업하지 않고 구직 중</strong>인가?</li>\n<li>퇴직 후 <strong>12개월이 경과하지 않았는가</strong>?</li>\n<li>이전에 받은 실업급여를 <strong>부정수급한 사실이 없는가</strong>?</li>\n</ul>\n<p>관련 페이지: <a href="/guide/unemployment/application-to-payment-full-procedure">실업급여 신청부터 수급까지 전체 절차</a> | <a href="/guide/unemployment/recommended-resignation-unemployment-benefit">권고사직 실업급여 받는 법</a> | <a href="/guide/unemployment/voluntary-resignation-benefit-eligible-cases">자발적 퇴사도 실업급여 받는 경우</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2018두63235 — 고용보험 피보험자격 소급 인정',
        summary:
          '대법원 2018두63235 사건(대법원, 2019.4.11. 선고)에서 법원은 사업주가 고용보험 가입 신청을 거부하더라도 실질적 근로 관계가 인정되는 경우 피보험자격을 소급하여 취득할 수 있다고 판시했습니다. 이 판결은 사업주가 고용보험 가입을 누락한 경우에도 근로자가 실업급여를 받을 권리를 보호한 사례입니다.',
        takeaway:
          '사업주가 고용보험을 가입시키지 않았더라도 실질적 근로 관계를 증명하면 소급하여 피보험자격을 인정받을 수 있습니다. 이 경우 근로계약서, 급여 통장 내역, 출퇴근 기록 등을 증거로 제출하여 고용센터에 피보험자격 확인 청구를 하세요.',
      },
    ],
    faq: [
      {
        question: '퇴사 당일 바로 고용센터에 가도 되나요?',
        answer:
          '가도 되지만, 이직확인서 처리가 완료되지 않은 상태라면 수급자격 신청이 접수되지 않을 수 있습니다. 사업주가 이직확인서를 제출하는 데 최대 10일이 소요될 수 있으므로, 고용보험 홈페이지에서 이직확인서 처리 현황을 확인한 후 방문하는 것이 효율적입니다.',
      },
      {
        question: '고용센터는 어디를 가야 하나요? 반드시 회사 근처여야 하나요?',
        answer:
          '아닙니다. 거주지 관할 또는 구직 희망 지역 관할 고용센터 어디서나 신청 가능합니다. 가까운 고용센터를 고용노동부 홈페이지(moel.go.kr)에서 검색하거나 고용24 앱에서 확인할 수 있습니다.',
      },
      {
        question: '피보험 기간 180일 계산 방법이 궁금합니다.',
        answer:
          '피보험 기간은 근무일 수가 아니라 고용보험 적용 근무 기간(달력상 일수)을 기준으로 합니다. 주 15시간 미만 근로자, 일용직 등 일부는 계산 방법이 다를 수 있습니다. 여러 직장에서 근무한 경우 피보험 기간이 합산됩니다. 고용보험 홈페이지에서 누적 피보험 기간을 조회할 수 있습니다.',
      },
      {
        question: '실업급여를 받는 동안 학원이나 직업훈련을 받을 수 있나요?',
        answer:
          '가능합니다. 고용센터가 지정한 직업훈련 과정을 수강하면 구직활동 인정도 받고, 훈련 기간 중 훈련연장급여(기본 급여 + 추가)를 받을 수 있습니다. 고용센터 취업지원관과 상담 후 국비훈련 과정을 추천받아 등록하는 방법을 적극 활용하세요.',
      },
      {
        question: '프리랜서·단기 계약직도 실업급여를 받을 수 있나요?',
        answer:
          '고용보험에 가입되어 있었고 피보험 기간이 180일 이상이라면 받을 수 있습니다. 단, 3.3% 원천징수로 프리랜서 계약을 한 경우 고용보험 가입이 안 되어 있을 가능성이 높습니다. 예술인·노무제공자 고용보험 특례 제도도 있으니 고용센터에 확인해 보세요.',
      },
    ],
    cta: {
      text: '실업급여 신청 첫 단계, AI로 빠르게 정리하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청부터 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '권고사직 실업급여 받는 법', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '자발적 퇴사도 실업급여 받는 경우', href: '/guide/unemployment/voluntary-resignation-benefit-eligible-cases' },
      { label: '돈 못 받았을 때 어디부터', href: '/guide/small-claims/unpaid-money-where-to-start' },
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 33. child-support / child-support-lawsuit-procedure
  // ───────────────────────────────────────────
  {
    domain: 'child-support',
    slug: 'child-support-lawsuit-procedure',
    keyword: '양육비 청구 소송 절차와 기간',
    questionKeyword: '양육비 소송을 제기하면 얼마나 걸리고 어떻게 진행되나요?',
    ctaKeyword: '양육비 소송 절차 확인',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '양육비 청구 소송 절차와 기간 — 3단계 타임라인 | 로앤가이드',
      description:
        '양육비를 받지 못해 소송을 생각하고 있는데 절차와 기간을 모른다면 조정신청부터 이행명령까지 3단계 흐름을 지금 확인하세요.',
    },
    intro:
      '<p>이혼 후 전 배우자가 양육비를 주기로 했는데 몇 달째 입금이 되지 않고 있습니다.</p><p>소송을 해야 하나 싶은데, 얼마나 걸리는지, 비용은 어떻게 되는지, 이겨도 못 받으면 어떻게 하는지 걱정부터 앞섭니다.</p><p>양육비 청구는 일반 민사소송과 달리 가정법원에서 진행하며, 조정 전치주의가 적용됩니다. 먼저 조정을 거치고, 합의가 안 되면 심판(소송)으로 넘어가는 구조입니다.</p><p>양육비 청구의 3단계 타임라인을 순서대로 설명합니다.</p>',
    timelineSteps: [
      '가정법원에 양육비 청구 조정 신청',
      '조정 기일(1~2회, 보통 1~3개월)',
      '조정 불성립 시 자동으로 심판(소송) 이행',
      '심판 선고(조정 신청 후 평균 4~8개월)',
      '판결 확정 후 이행 여부 모니터링',
      '미이행 시 이행명령 또는 강제집행 신청',
    ],
    sections: [
      {
        title: '1단계 — 가정법원에 양육비 청구 조정 신청',
        content:
          '<p><strong style="color:#1e3a5f">양육비 청구는 가사소송법에 따라 조정 전치주의가 적용됩니다. 심판(소송) 전에 반드시 조정을 거쳐야 합니다. 조정을 신청하면 법원이 자동으로 조정 기일을 지정합니다</strong></p>\n<ul>\n<li><strong>신청 법원</strong> — 상대방(전 배우자) 주소지 관할 가정법원에 신청합니다. 상대방 주소를 모르는 경우 주민등록 열람 신청 후 확인합니다</li>\n<li><strong>신청 서류</strong> — 조정 신청서(법원 양식), 혼인관계증명서, 이혼 판결문 또는 이혼 합의서(이혼한 경우), 자녀 기본증명서, 신청인 소득 증명(건강보험료 납부 확인서, 원천징수영수증 등), 상대방 재산 정보(알고 있는 경우)</li>\n<li><strong>신청 비용</strong> — 인지대 약 1만~3만 원, 송달료 5만 원 내외로 저렴합니다</li>\n<li><strong>조정 기간</strong> — 조정 기일은 보통 1~2회, 1~3개월 내에 진행됩니다. 양쪽이 합의하면 조정 조서가 작성되며 이는 확정판결과 동일한 효력을 갖습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조정 신청 → 조정 기일(1~3개월) → 합의 시 조정 조서(강제집행 가능) → 불성립 시 심판 이행</blockquote>',
      },
      {
        title: '2단계 — 조정 불성립 시 심판 절차',
        content:
          '<p><strong style="color:#1e3a5f">조정이 불성립되면 자동으로 심판 사건으로 이행됩니다. 별도의 소장 제출 없이 조정 신청서가 소장으로 처리됩니다</strong></p>\n<ul>\n<li><strong>심판 기간</strong> — 조정 불성립 후 심판 선고까지 평균 3~6개월이 추가로 소요됩니다. 전체적으로는 조정 신청 후 4~8개월 내에 심판이 완료되는 경우가 많습니다</li>\n<li><strong>양육비 산정 기준</strong> — 법원은 대법원 양육비 산정 기준표를 참고하여 양 당사자의 소득, 자녀 수, 자녀 나이를 종합해 양육비를 결정합니다</li>\n<li><strong>사전처분(임시처분)</strong> — 심판 확정 전이라도 상대방이 양육비를 지급하지 않는 경우 가정법원에 양육비 임시처분을 신청할 수 있습니다. 법원이 임시처분 결정을 내리면 확정 전에도 임시 양육비를 지급받을 수 있습니다</li>\n<li><strong>소득세 자료 제출 요청</strong> — 상대방의 소득을 알 수 없는 경우 법원에 사실조회 신청(금융정보, 세금 납부 내역 조회)을 통해 소득을 추정할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 미이행 시 이행명령과 강제집행',
        content:
          '<p><strong style="color:#1e3a5f">심판 또는 조정이 확정된 후 상대방이 양육비를 지급하지 않으면 이행명령을 신청하거나 직접 강제집행을 할 수 있습니다</strong></p>\n<ul>\n<li><strong>이행명령 신청</strong> — 가정법원에 이행명령을 신청하면 법원이 상대방에게 이행을 촉구합니다. 이행하지 않으면 과태료(최대 1,000만 원) 또는 감치(30일 이내 구금)가 부과됩니다</li>\n<li><strong>감치 신청</strong> — 이행명령에도 정당한 이유 없이 따르지 않으면 감치 신청이 가능합니다. 감치는 형사 처벌과 달리 민사상 간접강제 수단이지만 실질적인 이행 압박 효과가 있습니다</li>\n<li><strong>직접 강제집행</strong> — 상대방 명의의 예금, 급여, 부동산 등에 직접 강제집행을 신청할 수 있습니다. 급여 압류의 경우 월급의 최대 2분의 1까지 압류됩니다</li>\n<li><strong>양육비이행관리원 활용</strong> — 여성가족부 산하 양육비이행관리원에서 채권추심 대행, 법적 지원, 한시적 양육비 긴급지원 등을 무료로 제공합니다. 소송 전후 모두 활용 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">미이행 → 이행명령 신청 → 과태료·감치 → 급여·예금 강제집행</blockquote>',
      },
      {
        title: '양육비 청구 시 자주 하는 실수와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">양육비 청구 과정에서 실수하면 금액이 줄어들거나 절차가 지연될 수 있습니다. 아래 주의사항을 미리 숙지하세요</strong></p>\n<ul>\n<li><strong>청구 시작일</strong> — 양육비는 청구한 날부터가 아니라 원칙적으로 이혼 또는 별거 시점부터 소급하여 청구할 수 있지만, 상대방이 다투면 소급 범위가 제한될 수 있습니다. 빠른 청구가 유리합니다</li>\n<li><strong>이혼 합의서 양육비 조항 부재</strong> — 이혼 합의서에 양육비 조항이 없으면 별도 청구 절차가 필요합니다. 이혼 당시 공정증서나 법원 확인을 받아 두면 강제집행이 용이합니다</li>\n<li><strong>상대방 소득 파악</strong> — 양육비 산정에 상대방 소득이 중요합니다. 상대방이 소득을 숨기면 법원에 금융정보 사실조회 또는 금융감독원 조회를 요청하세요</li>\n<li><strong>양육비 변경 청구</strong> — 양육비 결정 후에도 상대방의 소득이 크게 변하거나 자녀 양육 환경이 바뀌면 변경 심판을 청구할 수 있습니다</li>\n</ul>\n<p>관련 페이지: <a href="/guide/child-support/child-support-claim-where-to-start">양육비 청구 어디부터 시작해야 하나</a> | <a href="/guide/child-support/child-support-calculation-table">양육비 산정 기준표와 계산 방법</a> | <a href="/guide/divorce/divorce-property-division-procedure">이혼 재산분할 절차</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2025으517 — 이행명령 범위(확인된 의무 미이행 부분만)',
        summary:
          '대법원 2025으517 사건(대법원, 2025.3.27. 선고)에서 법원은 양육비 이행명령은 이미 이행명령 신청 당시 이행되지 않은 것이 확인된 의무 부분에 한하여 발령할 수 있고, 장래에 불이행될 가능성이 있다는 이유만으로 이행명령을 발령할 수는 없다고 판시했습니다.',
        takeaway:
          '이행명령을 신청할 때는 상대방이 현재 실제로 이행하지 않고 있는 양육비 미지급 내역을 구체적으로 정리하여 제출해야 합니다. 미래의 불이행을 우려하는 것만으로는 이행명령이 발령되지 않으므로, 실제 미납 날짜와 금액을 입증할 증거를 갖추어 신청하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '이혼하지 않은 별거 상태에서도 양육비를 청구할 수 있나요?',
        answer:
          '네, 이혼하지 않고 별거 중인 경우에도 자녀를 실제로 양육하고 있는 부모는 상대방에게 양육비를 청구할 수 있습니다. 가정법원에 양육비 청구 심판을 신청하면 됩니다.',
      },
      {
        question: '양육비 심판까지 기간이 길면 그동안 어떻게 하나요?',
        answer:
          '심판 확정 전에도 가정법원에 양육비 임시처분(사전처분)을 신청할 수 있습니다. 법원이 임시처분 결정을 내리면 심판 확정 전에도 임시 양육비를 받을 수 있습니다. 또한 양육비이행관리원의 한시적 양육비 긴급지원(월 최대 20만 원) 제도도 활용해 보세요.',
      },
      {
        question: '상대방이 외국에 있거나 도주했을 때도 청구할 수 있나요?',
        answer:
          '국내 재산이 있다면 강제집행이 가능합니다. 해외 도주의 경우 양육비이행관리원을 통해 국제 양육비 집행 지원을 받을 수 있습니다. 또한 법무부 출국금지 신청(양육비 미지급 사유)도 가능합니다.',
      },
      {
        question: '양육비를 한 번도 못 받았는데 소급해서 청구할 수 있나요?',
        answer:
          '과거 양육비 청구는 원칙적으로 가능합니다. 다만 소멸시효(3년 또는 10년 적용)와 법원의 사정 재량에 따라 소급 인정 범위가 제한될 수 있습니다. 오래될수록 소급 인정이 어려워지므로 빠른 청구가 유리합니다.',
      },
      {
        question: '조정에서 합의한 금액이 너무 낮았는데 나중에 올릴 수 있나요?',
        answer:
          '가능합니다. 양육비 결정 후에도 자녀의 성장, 상대방 소득 변화, 물가 상승 등 사정 변경이 있으면 양육비 증액 변경 심판을 청구할 수 있습니다. 단, 조정에서 합의한 금액이 명백히 과소하다는 사정 변경을 입증해야 합니다.',
      },
    ],
    cta: {
      text: '양육비 소송 절차, AI로 빠르게 확인하기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 청구 어디부터 시작해야 하나', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 산정 기준표와 계산 방법', href: '/guide/child-support/child-support-calculation-table' },
      { label: '이혼 재산분할 절차', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '돈 못 받았을 때 어디부터', href: '/guide/small-claims/unpaid-money-where-to-start' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },

  // ───────────────────────────────────────────
  // 34. child-support / child-support-calculation-table
  // ───────────────────────────────────────────
  {
    domain: 'child-support',
    slug: 'child-support-calculation-table',
    keyword: '양육비 산정 기준표와 계산 방법',
    questionKeyword: '양육비는 얼마가 적당한가요? 기준표로 계산하는 방법을 알고 싶습니다.',
    ctaKeyword: '양육비 계산 확인',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '양육비 산정 기준표 — 계산 방법과 적정 금액 3단계 | 로앤가이드',
      description:
        '양육비가 적당한지 모르겠다면 대법원 산정 기준표 해석과 실제 계산 방법으로 적정 금액을 지금 확인하세요.',
    },
    intro:
      '<p>이혼을 준비하면서 양육비를 얼마로 정해야 할지 감이 없습니다. 상대방은 너무 적은 금액을 제시하고, 내가 요구하는 금액이 적당한 건지도 확신이 없습니다.</p><p>법원이 실제로 정하는 양육비는 당사자 협의가 아닌 경우 대법원 양육비 산정 기준표를 바탕으로 결정됩니다. 기준표를 제대로 읽을 수 있으면 협상에서도 유리한 위치를 잡을 수 있습니다.</p><p>양육비 기준표를 해석하는 방법과 실제 계산 사례를 단계별로 설명합니다.</p>',
    sections: [
      {
        title: '대법원 양육비 산정 기준표 구조와 읽는 방법',
        content:
          '<p><strong style="color:#1e3a5f">대법원 양육비 산정 기준표는 양 부모의 합산 소득과 자녀 연령을 기준으로 표준 양육비를 제시합니다. 이 표준 양육비를 기초로 각 사정을 가감하여 최종 금액을 산정합니다</strong></p>\n<ul>\n<li><strong>기준표 구조</strong> — X축은 자녀 연령(0~2세, 3~5세, 6~11세, 12~14세, 15~17세), Y축은 양 부모 합산 세후 소득(100만 원 단위)으로 구성됩니다. 교차점에서 표준 양육비를 확인합니다</li>\n<li><strong>표준 양육비 범위</strong> — 소득과 연령에 따라 월 55만~380만 원 범위에서 형성됩니다. 합산 소득 600만 원 + 초등학생(6~11세) 기준 표준 양육비는 약 월 119만~140만 원 수준입니다(2022년 개정 기준)</li>\n<li><strong>비양육자 부담 비율 계산</strong> — 표준 양육비 × (비양육자 소득 / 양 부모 합산 소득)으로 비양육자 분담 금액을 계산합니다. 예) 표준 양육비 130만 원, 양 부모 합산 소득 600만 원 중 비양육자 소득 400만 원이면 → 130만 × (400/600) ≈ 월 87만 원</li>\n<li><strong>소득 산정 방법</strong> — 근로소득(세전 아닌 세후), 사업소득, 임대소득 등 실질 소득을 기준으로 합니다. 소득을 증명하기 어려우면 건강보험료 기준으로 추산합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">표준 양육비(기준표) × 비양육자 소득 비율 = 비양육자 월 부담 양육비 기본값</blockquote>',
      },
      {
        title: '가산·감산 요인과 최종 금액 산정',
        content:
          '<p><strong style="color:#1e3a5f">기준표에서 나온 금액은 출발점이며, 개별 사정에 따라 가산하거나 감산할 수 있습니다. 법원은 아래 요인들을 종합해 최종 금액을 결정합니다</strong></p>\n<ul>\n<li><strong>가산 요인</strong> — 자녀의 특별 의료비(만성 질환, 장애 등), 특수 교육비(국제학교, 특수학교 등), 혼외자 또는 미성년자 인지 직후 등. 이러한 특별 필요가 있으면 표준 양육비보다 높게 설정됩니다</li>\n<li><strong>감산 요인</strong> — 비양육자의 재혼 후 새 자녀 양육 부담, 비양육자의 중증 질환 또는 실직, 양육자의 소득이 급격히 증가한 경우 등. 단, 감산은 법원이 엄격하게 판단합니다</li>\n<li><strong>자녀 수에 따른 조정</strong> — 자녀가 2명 이상인 경우 기준표 양육비에 자녀 수 계수를 곱합니다. 2자녀는 표준 양육비의 약 1.8배, 3자녀는 약 2.5배 수준으로 산정하는 것이 일반적입니다</li>\n<li><strong>비양육자의 면접교섭 빈도</strong> — 정기적으로 면접교섭을 하여 직접 비용을 부담하는 경우 일부 감산을 인정하기도 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과거 양육비 청구와 소멸시효',
        content:
          '<p><strong style="color:#1e3a5f">이미 지나간 기간의 양육비(과거 양육비)를 청구할 수 있지만, 소멸시효와 법원의 재량 범위를 고려해야 합니다</strong></p>\n<ul>\n<li><strong>과거 양육비 청구 가능 여부</strong> — 법원은 과거 양육비 청구를 원칙적으로 인정합니다. 다만 이미 지나간 기간이 길수록 법원이 인정하는 범위가 제한될 수 있습니다</li>\n<li><strong>소멸시효 기산점</strong> — 법원이 구체적으로 확정한 양육비(판결 또는 심판에 의한 양육비)는 민사채권으로서 10년의 소멸시효가 적용됩니다. 정기금 형태의 양육비는 각 지급 기일로부터 10년입니다</li>\n<li><strong>이혼 전 과거 양육비</strong> — 이혼 소송에서 별거 기간 중 일방이 양육비를 혼자 부담한 경우 과거 양육비 청구가 가능합니다. 다만 이혼 소송 중에 함께 청구하는 것이 이후에 별도 심판을 제기하는 것보다 효율적입니다</li>\n<li><strong>미성년 자녀의 독립 청구권</strong> — 성인이 된 자녀는 부모를 상대로 미성년 시절의 과거 양육비를 직접 청구할 수 있습니다. 시효는 성인이 된 날로부터 기산됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확정 양육비 시효 10년 | 과거 양육비는 조기 청구가 유리 | 소급 범위는 법원 재량</blockquote>',
      },
      {
        title: '양육비 계산 예시와 협의 전략',
        content:
          '<p><strong style="color:#1e3a5f">실제 숫자로 계산해보면 협의 테이블에서 더 유리한 위치를 잡을 수 있습니다</strong></p>\n<ul>\n<li><strong>계산 예시 1</strong> — 자녀 8세(6~11세 구간), 비양육자 월 소득 300만 원, 양육자 월 소득 200만 원, 합산 500만 원 → 기준표 표준 양육비 약 100만~110만 원 → 비양육자 분담 비율 300/500 = 60% → 비양육자 부담 약 60만~66만 원/월</li>\n<li><strong>계산 예시 2</strong> — 자녀 15세(15~17세 구간), 비양육자 월 소득 500만 원, 양육자 월 소득 300만 원, 합산 800만 원 → 기준표 표준 양육비 약 150만~170만 원 → 비양육자 분담 비율 500/800 = 62.5% → 비양육자 부담 약 94만~106만 원/월</li>\n<li><strong>협의 전략</strong> — 법원 결정은 기준표 중간값을 기준으로 하는 경향이 있습니다. 협의 시 기준표 기반 계산값보다 약간 높은 금액을 제시하고 조정하는 것이 일반적인 전략입니다. 이후 증액 청구 여지를 남겨두는 것도 중요합니다</li>\n</ul>\n<p>관련 페이지: <a href="/guide/child-support/child-support-lawsuit-procedure">양육비 청구 소송 절차</a> | <a href="/guide/child-support/child-support-claim-where-to-start">양육비 청구 어디부터 시작해야 하나</a> | <a href="/guide/divorce/divorce-property-division-procedure">이혼 재산분할 절차</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2023스637 — 이혼 16년 후 과거 양육비 청구',
        summary:
          '대법원 2023스637 사건(대법원, 2024.6.13. 선고)에서 법원은 이혼 후 약 16년이 지난 시점에서 청구된 과거 양육비에 대해, 오랜 기간이 지났더라도 양육비 청구 자체는 가능하지만 기간, 당사자의 경제적 상황, 생활 변화 등 여러 사정을 종합하여 과거 양육비 지급 범위와 금액을 재량으로 결정할 수 있다고 판시했습니다.',
        takeaway:
          '과거 양육비는 이혼 후 수년이 지났더라도 청구할 수 있습니다. 다만 기간이 길수록 법원의 재량으로 인정 범위가 축소될 가능성이 높습니다. 가능한 한 빨리 청구하고, 그동안의 양육비 지출 내역(교육비, 의료비, 생활비 등)을 꼼꼼히 정리해 두는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '대법원 양육비 기준표는 어디서 확인할 수 있나요?',
        answer:
          '대법원 홈페이지(www.scourt.go.kr) 및 대법원 양육비 산정 기준표 전용 페이지(부양료산정기준)에서 확인할 수 있습니다. 2022년 5월 개정된 기준표가 현재 적용 중입니다. 법원이 배포하는 계산기 프로그램도 있어 직접 입력해볼 수 있습니다.',
      },
      {
        question: '상대방이 소득을 숨기면 양육비 금액은 어떻게 결정되나요?',
        answer:
          '법원은 상대방의 소득을 파악하기 위해 금융정보, 세금 납부 내역, 건강보험료 부과 기준 등을 사실조회를 통해 확인합니다. 상대방이 소득을 과소 신고한 의심이 있으면 법원에 사실조회 신청을 요청하고, 상대방의 생활 수준(자동차, 부동산 등)도 간접 증거로 제출할 수 있습니다.',
      },
      {
        question: '합의 없이 법원에서 정하면 기준표 그대로 나오나요?',
        answer:
          '기준표는 출발점이지 확정값이 아닙니다. 법원은 기준표 금액을 참고하되 자녀의 특별 필요, 양 당사자의 재산 상황, 현재 생활 수준, 혼인 기간 중 생활 방식 등을 종합하여 최종 금액을 결정합니다. 실제 판결 금액이 기준표보다 낮거나 높을 수 있습니다.',
      },
      {
        question: '양육비를 일시금으로 받을 수 있나요?',
        answer:
          '원칙적으로 양육비는 매월 정기적으로 지급하는 방식입니다. 다만 당사자 합의나 법원 허가가 있으면 일시금으로 지급하는 것도 가능합니다. 실무에서는 미래 지급에 대한 불확실성을 해소하기 위해 일부 기간의 양육비를 선지급하는 형태로 합의되는 경우도 있습니다.',
      },
      {
        question: '자녀가 성인이 되면 양육비는 자동으로 끝나나요?',
        answer:
          '원칙적으로 자녀가 만 19세가 되는 달의 말일까지 양육비 지급 의무가 있습니다. 단, 대학 진학 등의 사정이 있으면 만 19세 이후에도 양육비를 청구할 수 있다는 판례도 있습니다. 이혼 판결문이나 합의서에 기간 조항이 명시되어 있다면 그에 따릅니다.',
      },
    ],
    cta: {
      text: '양육비 적정 금액, AI로 빠르게 계산해보기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 청구 소송 절차', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '양육비 청구 어디부터 시작해야 하나', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '이혼 재산분할 절차', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '돈 못 받았을 때 어디부터', href: '/guide/small-claims/unpaid-money-where-to-start' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },

  // ───────────────────────────────────────────
  // 35. child-support / child-support-claim-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'child-support',
    slug: 'child-support-claim-where-to-start',
    keyword: '양육비 청구 어디부터 시작해야 하나',
    questionKeyword: '양육비를 처음 청구하려는데 어디서 어떻게 시작해야 하나요?',
    ctaKeyword: '양육비 청구 첫 단계 확인',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '양육비 청구 — 처음 해야 할 3가지와 기관 안내 | 로앤가이드',
      description:
        '양육비를 한 번도 받지 못했는데 어디서 어떻게 시작해야 하는지 막막하다면 가정법원 접수 전 준비사항을 지금 확인하세요.',
    },
    intro:
      '<p>이혼 후 아이를 혼자 키우고 있는데, 전 배우자에게 한 번도 양육비를 받은 적이 없습니다.</p><p>청구하고 싶은데 어떤 서류를 준비해야 하는지, 어디에 신청해야 하는지, 혼자 할 수 있는 건지 막막합니다.</p><p>양육비 청구는 가정법원이 담당하며, 반드시 변호사가 있어야 하는 것은 아닙니다. 준비 서류와 신청 경로를 미리 파악하면 혼자서도 첫 단계를 진행할 수 있습니다.</p><p>양육비 청구를 처음 시작하는 분들을 위한 3단계 안내를 드립니다.</p>',
    sections: [
      {
        title: '1단계 — 청구 전 준비 서류를 챙기세요',
        content:
          '<p><strong style="color:#1e3a5f">가정법원에 양육비 청구 조정 신청서를 제출하려면 기본 서류와 소득 관련 자료가 필요합니다. 미리 준비해두면 신청 당일 법원에서 시간을 낭비하지 않습니다</strong></p>\n<ul>\n<li><strong>기본 서류</strong> — 조정 신청서(법원 양식, 법원 홈페이지 또는 방문 시 수령), 신청인(양육자) 신분증</li>\n<li><strong>가족 관계 서류</strong> — 자녀 기본증명서, 가족관계증명서(신청인 기준), 혼인관계증명서(이혼 사실 확인용). 이혼 판결문 또는 이혼 합의서(협의이혼 확인서)가 있으면 함께 제출합니다</li>\n<li><strong>소득 증명 서류</strong> — 근로소득원천징수영수증 또는 사업소득 확인서, 건강보험료 납부확인서, 국민연금 가입 내역서. 상대방의 소득을 알고 있다면 그 증거도 함께 제출하세요</li>\n<li><strong>상대방 정보</strong> — 상대방의 주소, 주민등록번호(조정 신청서 기재용). 주소를 모르면 주민등록 열람 신청서를 법원에 제출하거나 행정복지센터(동주민센터)에서 열람 신청을 할 수 있습니다</li>\n<li><strong>양육비 지출 내역</strong> — 그동안 지출한 교육비, 의료비, 생활비 영수증이나 통장 거래 내역을 정리해두면 과거 양육비 청구 및 향후 양육비 산정에 유리합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조정 신청서 + 가족관계 서류 + 소득 증명 + 상대방 주소 정보 준비</blockquote>',
      },
      {
        title: '2단계 — 가정법원 또는 양육비이행관리원에 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비는 가정법원 조정 신청이 원칙이지만, 여성가족부 양육비이행관리원을 통해 무료 법률 지원과 채권추심 지원을 먼저 받을 수도 있습니다</strong></p>\n<ul>\n<li><strong>가정법원 조정 신청</strong> — 상대방 주소지 관할 가정법원에 양육비 청구 조정 신청서를 제출합니다. 법원 민원실 또는 전자소송(ecfs.scourt.go.kr)으로 온라인 접수도 가능합니다. 인지대 1만~3만 원, 송달료 약 5만 원의 비용이 발생합니다</li>\n<li><strong>양육비이행관리원 활용</strong> — 1644-6621에 전화하거나 홈페이지(child.mogef.go.kr)에서 신청합니다. 무료로 법률 상담, 조정 신청 지원, 미지급 양육비 추심 지원을 받을 수 있습니다. 소득 기준이 없어 누구나 이용 가능합니다</li>\n<li><strong>한시적 양육비 긴급지원</strong> — 양육비이행관리원을 통해 월 최대 20만 원의 긴급지원을 신청할 수 있습니다. 소득 기준(중위소득 150% 이하)이 있으며, 미지급 양육비가 3개월 이상 누적된 경우에 신청 가능합니다</li>\n<li><strong>법원 전산 조회</strong> — 이미 이혼 판결에 양육비 조항이 포함된 경우, 별도 소송 없이 집행문을 부여받아 바로 강제집행을 신청할 수 있습니다. 변호사 없이도 가능합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 임시처분으로 조기 수령을 시도하세요',
        content:
          '<p><strong style="color:#1e3a5f">조정·심판 결과가 나오기 전이라도 가정법원에 임시처분(사전처분)을 신청하면 임시 양육비를 먼저 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>임시처분 신청 방법</strong> — 조정 또는 심판 신청서와 함께 양육비 임시처분 신청서를 제출합니다. 별도의 추가 비용은 거의 없습니다</li>\n<li><strong>임시처분 결정 기간</strong> — 보통 2~4주 내에 법원이 결정을 내립니다. 임시처분 결정문은 즉시 강제집행이 가능한 집행권원이 됩니다</li>\n<li><strong>임시 양육비 수준</strong> — 법원은 임시처분에서 기준표 금액보다 낮은 수준을 정하는 경향이 있지만, 당장 양육비를 받을 수 있다는 점에서 의미가 큽니다</li>\n<li><strong>이행명령 동시 신청 가능</strong> — 임시처분 결정 후 상대방이 지급하지 않으면 바로 이행명령을 신청할 수 있습니다. 이행명령 위반 시 과태료(최대 1,000만 원) 또는 감치 처분이 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">임시처분 신청(2~4주) → 임시 양육비 결정 → 미이행 시 이행명령 → 과태료·감치</blockquote>',
      },
      {
        title: '양육비 소멸시효와 청구 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">양육비는 오래 미뤄둘수록 소급 청구가 어려워지고 증거도 희미해집니다. 지금 당장 시작해야 하는 이유를 확인하세요</strong></p>\n<ul>\n<li><strong>미성년 자녀 기간의 소멸시효</strong> — 이혼 판결이나 심판에서 확정된 양육비는 각 지급 기일로부터 10년의 소멸시효가 적용됩니다. 자녀가 성인이 된 후에도 미성년 시절의 미지급 양육비를 10년 내에 청구할 수 있습니다</li>\n<li><strong>아직 확정되지 않은 양육비</strong> — 이혼 시 양육비를 정하지 않은 경우, 과거 양육비는 청구한 시점을 기준으로 소급 범위가 결정됩니다. 오래될수록 인정 범위가 제한될 수 있습니다</li>\n<li><strong>이혼 합의서 공정증서화 권고</strong> — 협의이혼 시 양육비 합의가 있다면 공증사무소에서 공정증서로 만들어 두세요. 공정증서에 집행수락 문구가 있으면 법원 판결 없이 바로 강제집행이 가능합니다</li>\n<li><strong>양육비이행관리원 무료 지원</strong> — 법적 절차가 부담스러우면 양육비이행관리원(☎1644-6621)에 먼저 연락하세요. 소득 기준 없이 무료 상담과 법률 지원을 받을 수 있습니다</li>\n</ul>\n<p>관련 페이지: <a href="/guide/child-support/child-support-lawsuit-procedure">양육비 청구 소송 절차와 기간</a> | <a href="/guide/child-support/child-support-calculation-table">양육비 산정 기준표와 계산 방법</a> | <a href="/guide/divorce/divorce-property-division-procedure">이혼 재산분할 절차</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2018스724 — 미성년 자녀 양육비 소멸시효',
        summary:
          '대법원 2018스724 사건(대법원, 2019.6.11. 선고)에서 법원은 이혼 판결에서 확정된 정기 양육비 채권은 각 지급 기일로부터 민법 제162조에 따른 10년의 소멸시효가 진행한다고 판시했습니다. 자녀의 미성년 기간 중에 발생한 개별 양육비 채권의 시효는 각 지급 기일을 기산점으로 독립적으로 진행합니다.',
        takeaway:
          '이혼 판결에 양육비 조항이 있다면 각 미지급 월의 양육비마다 개별적으로 10년의 소멸시효가 진행됩니다. 오래된 양육비 채권도 10년이 지나지 않았다면 청구할 수 있습니다. 다만 시효 완성에 주의하여 지급 기일로부터 10년 이내에 청구하거나 시효 중단 조치를 취해야 합니다.',
      },
    ],
    faq: [
      {
        question: '양육비이행관리원과 법원 중 어디에 먼저 가야 하나요?',
        answer:
          '처음이라면 양육비이행관리원(☎1644-6621)에 먼저 연락하는 것을 권장합니다. 무료 법률 상담, 서류 준비 지원, 조정 신청 대행 등을 받을 수 있어 혼자 진행하기 어려운 분들에게 큰 도움이 됩니다. 법원 조정 신청은 이행관리원 지원을 받은 후 진행해도 늦지 않습니다.',
      },
      {
        question: '이혼 합의서에 양육비 조항이 있는데도 못 받고 있습니다. 어떻게 하나요?',
        answer:
          '이혼 합의서가 공정증서(집행수락 문구 포함)로 작성되어 있다면 공증사무소에서 집행문을 부여받아 바로 강제집행을 신청할 수 있습니다. 일반 합의서라면 가정법원에 이행명령을 신청하거나, 별도의 심판 절차를 거쳐 집행권원을 확보해야 합니다.',
      },
      {
        question: '상대방이 주소를 바꿔서 어디 사는지 모릅니다. 어떻게 찾나요?',
        answer:
          '가정법원에 조정 또는 심판을 신청하면서 주민등록 열람 허가 신청서를 함께 제출하면, 법원의 허가를 받아 관할 주민센터에서 상대방의 주민등록 초본을 열람할 수 있습니다. 양육비이행관리원에서도 이 절차를 지원해 줍니다.',
      },
      {
        question: '양육비 청구를 혼자 할 수 있나요? 변호사가 필요한가요?',
        answer:
          '가정법원 조정 신청과 심판 절차는 변호사 없이 본인이 직접 진행할 수 있습니다. 법원 홈페이지에서 신청서 양식을 내려받아 작성하거나, 법원 민원실에서 안내를 받을 수 있습니다. 양육비이행관리원도 무료 법률 지원을 제공합니다. 다만 상대방이 강하게 다투거나 재산 숨기기가 의심되는 경우에는 변호사의 도움이 필요할 수 있습니다.',
      },
      {
        question: '양육비를 받으면 기초생활수급 혜택이 줄어드나요?',
        answer:
          '양육비는 소득으로 산정되어 기초생활수급 급여 기준 소득에 포함될 수 있습니다. 다만 지급받는 양육비 전액이 소득으로 잡히는 것은 아니며, 아동양육비 공제 등 규정이 있습니다. 수급 신청 전에 주민센터나 복지관에서 정확한 소득 인정액 계산을 받아보는 것이 좋습니다.',
      },
    ],
    cta: {
      text: '양육비 청구 첫 단계, AI로 빠르게 정리하기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 청구 소송 절차와 기간', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '양육비 산정 기준표와 계산 방법', href: '/guide/child-support/child-support-calculation-table' },
      { label: '이혼 재산분할 절차', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '돈 못 받았을 때 어디부터', href: '/guide/small-claims/unpaid-money-where-to-start' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },
];
