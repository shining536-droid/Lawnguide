import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch37 비노동1 6개: 이혼 2 + 교통 2 + 사기 2
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 배우자 도박으로 재산이 탕진된 배우자에게 이혼 사유 성립과 재산분할에서의 가산 반영을 안내한다.
// 2. 카톡·SNS 증거를 이혼소송에 제출하려는 배우자에게 적법 확보 방법과 증명력 강화 방법을 안내한다.
// 3. 임산부 교통사고 피해자에게 태아 손해·산모 위자료·인과관계 입증 방법을 안내한다.
// 4. 교통사고를 뒤늦게 인지·신고한 피해자에게 공백 보완 증거와 인과관계 입증 방법을 안내한다.
// 5. 동업자가 돈을 빼돌린 피해자에게 사기·횡령·배임의 구분과 형사·민사 병행 절차를 안내한다.
// 6. 보이스피싱 피해자에게 전기통신금융사기 피해구제법상 구제 신청 절차와 인정 요건을 안내한다.

export const spokesBatch37Nonlabor1: SpokePage[] = [
  // ─── 1. divorce / spouse-gambling-ground ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-gambling-ground',
    keyword: '배우자 도박 이혼 사유 재산분할',
    questionKeyword: '배우자 도박이 이혼 사유가 되나요?',
    ctaKeyword: '도박 이혼 사유·재산분할 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '배우자 도박, 이혼 사유와 재산분할 총정리 | 로앤가이드',
      description:
        '배우자의 도박으로 재산이 탕진됐다면 이혼 사유와 재산분할 가산 방법을 확인하세요. 도박 빚이 공동 채무인지 개인 채무인지 기준을 지금 정리합니다.',
    },
    intro:
      '<p>배우자가 도박으로 공동 재산을 탕진하고 빚까지 만들어 이제는 결혼 생활을 유지하기 어려운 상태입니다. 이혼 사유가 될 수 있는지, 도박 빚은 누가 책임지는지, 탕진된 재산을 분할 과정에서 돌려받을 수 있는지 정확한 기준이 필요합니다. 민법과 판례를 기준으로 정리합니다.</p>',
    sections: [
      {
        title: '도박이 재판상 이혼 사유가 되는 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">민법 제840조는 재판상 이혼 사유로 "기타 혼인을 계속하기 어려운 중대한 사유"를 열거하며, 도박으로 인한 재산 탕진은 전형적 예입니다.</strong></p>\n<ul>\n<li><strong>제840조 제6호</strong> — 기타 혼인을 계속하기 어려운 중대한 사유는 포괄적 이혼 사유로, 판례는 지속적·반복적 도박으로 가정 경제를 파탄시킨 경우를 이에 해당한다고 봅니다.</li>\n<li><strong>유책 배우자</strong> — 도박을 한 배우자가 유책 배우자로 인정되어, 이혼 청구·위자료·재산분할에서 불리한 지위가 됩니다.</li>\n<li><strong>경제적 파탄 입증</strong> — 가정 생활비 미지급, 공동 재산 처분, 빚 발생 등을 구체적 자료로 입증해야 합니다.</li>\n<li><strong>증거 수집</strong> — 카지노 출입 기록, 불법 도박 사이트 거래 내역, 자금 이동 내역, 가족의 진술 등이 핵심 증거입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일회성 유흥이 아닌 지속적·반복적 도박으로 경제적 파탄이 발생했음을 입증하면 이혼 사유로 충분합니다.</blockquote>',
      },
      {
        title: '도박 빚의 법적 성격 — 개인 채무 원칙',
        content:
          '<p><strong style="color:#1e3a5f">도박으로 발생한 채무는 원칙적으로 배우자 개인 채무이며, 다른 배우자가 연대책임을 지지 않습니다.</strong></p>\n<ul>\n<li><strong>민법 제832조</strong> — 부부가 일상가사로 부담한 채무는 연대책임이지만, 도박은 일상가사에 포함되지 않습니다.</li>\n<li><strong>연대보증 여부 확인</strong> — 본인이 연대보증에 서명한 경우에만 법적 책임이 발생합니다. 서명 여부·경위를 먼저 확인하세요.</li>\n<li><strong>강요된 서명의 무효</strong> — 배우자의 강압·기망으로 보증서에 서명했다면 무효·취소 주장이 가능합니다.</li>\n<li><strong>채권자 대응</strong> — 채권자가 연대 책임을 주장해도 법적 근거 없이 응할 필요는 없으며, 변호사 상담 후 서면으로 거절하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 도박 빚의 공동 채무 여부를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산분할에서 도박 탕진분의 가산 반영',
        content:
          '<p><strong style="color:#1e3a5f">도박으로 소진된 공동 재산은 재산분할 시 "가산 분할" 대상이 되어 피해 배우자가 더 많이 돌려받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>분할 대상 확장</strong> — 대법원은 일방이 공동 재산을 도박·낭비로 소진한 경우, 그 금액을 재산분할 대상 재산에 포함시켜 피해 배우자의 분할 비율을 유리하게 조정합니다.</li>\n<li><strong>탕진 금액 특정</strong> — 계좌 이체 내역, 카지노 출입 기록, 도박 사이트 결제 내역 등으로 탕진 금액을 구체적으로 특정해야 합니다.</li>\n<li><strong>보전 처분</strong> — 이혼 소송 중 상대방이 추가 재산을 빼돌릴 우려가 있다면 가압류·가처분을 신청해 재산을 보전해야 합니다.</li>\n<li><strong>분할 비율</strong> — 일반적으로 50:50 원칙이지만, 도박 탕진·유책 사유가 있으면 피해 배우자 쪽으로 60~70% 비율까지 조정될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 결심 직후 부부 명의 재산 현황과 탕진 내역을 정리·기록해두고, 필요시 즉시 가압류 신청을 준비하세요.</blockquote>',
      },
      {
        title: '위자료 청구와 양육권 판단 요소',
        content:
          '<p><strong style="color:#1e3a5f">도박으로 가정을 파탄시킨 배우자에게 위자료 청구가 가능하며, 양육권 판단에서도 불리하게 작용합니다.</strong></p>\n<ul>\n<li><strong>위자료 산정</strong> — 혼인 기간, 도박 지속성·규모, 가정 경제 파탄 정도, 정신적 고통 등을 종합 고려합니다. 보통 1,000만~5,000만 원 수준이지만 사안별로 다릅니다.</li>\n<li><strong>제3자(도박장·카지노)</strong> — 도박을 조장한 불법 도박장에 대해서는 민사 손해배상 청구가 어렵지만, 합법 카지노의 관리 소홀이 있으면 일부 청구가 가능한 경우가 있습니다.</li>\n<li><strong>양육권</strong> — 도박 중독 배우자에게 아이의 양육권을 맡기기 어려우므로, 다른 배우자에게 유리합니다.</li>\n<li><strong>양육비</strong> — 양육권이 없는 도박 배우자도 양육비 지급 의무는 있으며, 소득에 따라 산정됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 양육비 지급 의무는 아이가 성인이 될 때까지 지속되며, 미지급 시 이행명령·감치·급여 압류 등의 수단이 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부공동생활의 본질 침해와 불법행위',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활이 침해되거나 그 유지가 방해된 경우, 타방 배우자에게 정신적 고통을 가하는 불법행위가 성립한다고 판시했습니다.',
        takeaway:
          '배우자의 도박으로 혼인의 본질인 부부공동생활이 심각하게 침해된 경우 이혼 사유뿐 아니라 위자료 청구도 가능하며, 판결에서 인정된 정신적 고통은 구체적 금액으로 배상됩니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 도박 중독 치료를 받겠다면 이혼이 거절될 수 있나요?',
        answer:
          '<strong>치료 의지는 참작 요소이지만 이혼이 당연 거절되지는 않습니다.</strong> 장기간 반복된 도박으로 혼인이 파탄 상태라면 치료 약속만으로 이혼 청구가 기각되지 않습니다.',
      },
      {
        question: '도박 빚 채권자가 내 월급을 압류할 수 있나요?',
        answer:
          '<strong>본인이 연대보증하지 않았다면 압류할 수 없습니다.</strong> 연대보증 서명이 있는지 먼저 확인하고, 없다면 채권자의 압류 시도를 법적으로 저지할 수 있습니다.',
      },
      {
        question: '배우자 명의 재산이 이미 처분됐으면 회복이 어려운가요?',
        answer:
          '<strong>이혼 사해행위 취소 소송으로 회복 가능성이 있습니다.</strong> 민법 제839조의3은 이혼 전 재산 처분에 대한 사해행위 취소권을 규정하며, 1년 이내라면 취소 소송을 통해 재산을 되돌릴 수 있습니다.',
      },
      {
        question: '협의이혼으로 끝내면 재산분할이 안 되나요?',
        answer:
          '<strong>협의이혼 성립 후에도 2년 이내에 재산분할 청구가 가능합니다.</strong> 다만 합의서에 "재산분할 끝"이라 명시했다면 다툼이 생길 수 있으므로 협의 단계부터 전문가 상담이 중요합니다.',
      },
      {
        question: '이혼 전에 배우자 계좌를 확인할 수 있나요?',
        answer:
          '<strong>본인 명의 계좌가 아니면 직접 조회는 불가합니다.</strong> 이혼 소송 중 사실조회 신청·금융계좌 조회 등을 통해 법원 명령으로 확인할 수 있으며, 이를 위해 변호사 상담이 필요합니다.',
      },
    ],
    cta: {
      text: '도박 이혼·재산분할 AI 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 사유 정리 가이드', href: '/guide/divorce' },
      { label: '재산분할 기본 원칙', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '부부 숨긴 재산 찾는 법', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '이혼 전 사해행위 방지', href: '/guide/divorce/divorce-asset-disposal-grounds' },
      { label: '유책배우자 이혼 청구', href: '/guide/divorce/at-fault-spouse-divorce-filing' },
    ],
  },

  // ─── 2. divorce / sns-kakao-evidence-validity ───
  {
    domain: 'divorce',
    slug: 'divorce-sns-kakao-evidence-validity',
    keyword: '이혼 카톡 SNS 증거력 적법',
    questionKeyword: '카톡·SNS가 이혼 소송 증거로 쓸 수 있나요?',
    ctaKeyword: '디지털 증거 적법성·증명력 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '이혼 소송 카톡·SNS 증거 적법성과 증명력 | 로앤가이드',
      description:
        '배우자의 카톡·SNS를 이혼 증거로 쓸 수 있는지 궁금하다면 적법 확보 방법과 증명력 강화 절차를 지금 확인하세요.',
    },
    intro:
      '<p>배우자의 카톡이나 SNS에서 바람 또는 재산 은닉 정황을 발견했는데, 이걸 이혼 소송에서 증거로 쓸 수 있을지 고민됩니다. 디지털 증거는 결정적일 수 있지만 취득 방법이 잘못되면 증거능력이 부정되거나 본인이 형사 처벌을 받을 수 있습니다. 적법한 확보 방법과 증명력을 강화하는 방법을 정리합니다.</p>',
    sections: [
      {
        title: '디지털 증거의 적법성 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">이혼소송에서 민사 증거능력은 비교적 관대하지만, 취득 과정이 명백히 위법하면 증거능력이 부정되고 본인이 형사 처벌을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>정보통신망법 제49조</strong> — 타인의 비밀을 침해·도용·누설하는 행위는 형사 처벌 대상입니다.</li>\n<li><strong>통신비밀보호법</strong> — 동의 없는 통신 내용 청취·녹음·공개는 형사 처벌 대상이며, 본인이 당사자가 아닌 제3자 간 대화 녹음이 이에 해당합니다.</li>\n<li><strong>주거침입·컴퓨터사용죄</strong> — 배우자 계정에 무단 로그인해 메시지를 열람하는 행위는 형사 처벌 위험이 있습니다.</li>\n<li><strong>민사 증거능력</strong> — 위법 수집 증거라도 민사에서 당연 배제되지 않으나, 신의칙·공서양속에 반하는 경우 증거능력이 제한됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 민사 증거능력보다 형사 처벌 위험이 더 큽니다. 증거 확보 방법은 적법성 기준에서 점검해야 합니다.</blockquote>',
      },
      {
        title: '적법하게 확보할 수 있는 디지털 증거',
        content:
          '<p><strong style="color:#1e3a5f">본인과 연관된 메시지·공개된 게시물·우연히 노출된 정보는 적법한 증거 확보가 가능합니다.</strong></p>\n<ul>\n<li><strong>본인이 수신한 메시지</strong> — 배우자·제3자로부터 본인이 받은 카톡·문자·메일은 모두 적법한 증거입니다.</li>\n<li><strong>공개된 SNS 게시물</strong> — 공개된 인스타·페이스북·블로그 게시물은 누구나 열람 가능하므로 증거 확보에 문제가 없습니다.</li>\n<li><strong>공개 장소 노출 화면</strong> — 배우자가 공개된 장소에 놓아둔 휴대폰 화면의 카톡을 즉시 촬영한 경우는 비교적 안전합니다.</li>\n<li><strong>본인이 참여한 단톡방</strong> — 본인이 참여한 단체 대화방의 내용은 통신 당사자로서 캡처·보관이 가능합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인이 확보한 증거의 적법성·증명력을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증명력 강화 — 공증·전자문서 증거보전',
        content:
          '<p><strong style="color:#1e3a5f">디지털 증거는 조작 가능성이 제기될 수 있으므로, 공증·전자문서 증거보전으로 증명력을 강화해야 합니다.</strong></p>\n<ul>\n<li><strong>공증인 공증</strong> — 공증인 사무소에서 캡처본·스크린샷을 공증받으면 원본성 추정이 크게 강화됩니다.</li>\n<li><strong>증거보전 신청</strong> — 민사소송법 제375조 이하의 증거보전 절차를 통해 법원의 검증·감정을 미리 받을 수 있습니다.</li>\n<li><strong>원본 파일 보관</strong> — 캡처 이미지뿐 아니라 원본 메시지·파일·메일도 클라우드 등 안전한 장소에 백업하세요.</li>\n<li><strong>해시값 기록</strong> — 디지털 파일의 해시값을 기록하면 동일성·변조 여부 입증이 용이해집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대방이 메시지를 삭제할 가능성이 있는 중요한 증거는 가능한 빨리 공증을 받아두세요.</blockquote>',
      },
      {
        title: '위법 수집 증거의 리스크',
        content:
          '<p><strong style="color:#1e3a5f">배우자의 휴대폰·계정을 몰래 열거나 비밀번호를 푸는 행위는 형사 처벌 위험이 크므로 주의해야 합니다.</strong></p>\n<ul>\n<li><strong>정보통신망 침해</strong> — 배우자 계정에 무단 로그인해 메시지를 열람·복사하면 정보통신망법 위반으로 처벌될 수 있습니다.</li>\n<li><strong>스파이웨어·도청 앱 사용</strong> — 배우자 몰래 감시 앱을 설치하는 행위는 통신비밀보호법 위반으로 엄격히 처벌됩니다.</li>\n<li><strong>민사 반소 위험</strong> — 불법 증거 수집으로 인해 상대방이 역으로 손해배상 소송을 제기할 수 있습니다.</li>\n<li><strong>유책 판단 역전</strong> — 불법 수집 자료를 사용하면 오히려 본인이 혼인 파탄의 일부 책임으로 판단될 수도 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "이혼에 유리한 증거"보다 "적법하게 확보된 증거"가 실무에서 더 강력합니다. 위법 행위는 반드시 피하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부공동생활 침해의 불법행위 인정',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부 일방과 부정행위를 함으로써 혼인의 본질인 부부공동생활을 침해한 경우 타방 배우자에 대한 불법행위가 성립한다고 판시했습니다.',
        takeaway:
          'SNS·카톡으로 부정행위 증거를 적법하게 확보하면 배우자와 제3자 모두에게 정신적 손해배상을 청구할 수 있으며, 증거의 적법성과 증명력이 청구 성공의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '배우자의 휴대폰을 본인이 공유받아 쓰고 있다면 열어볼 수 있나요?',
        answer:
          '<strong>동의 없이 비밀번호를 풀어 내용을 확인하는 건 위험합니다.</strong> 공유 사용이라도 개별 앱 접근에 대한 동의가 없다면 정보통신망 침해가 될 수 있습니다. 가능한 범위에서 노출된 화면 촬영 정도가 안전합니다.',
      },
      {
        question: '녹음된 대화는 이혼 증거로 쓸 수 있나요?',
        answer:
          '<strong>본인이 당사자로 참여한 대화의 녹음은 가능합니다.</strong> 통신비밀보호법 제14조는 제3자 간 대화를 도청·녹음하는 것만 금지하며, 본인이 참여한 대화는 녹음이 허용됩니다.',
      },
      {
        question: '흥신소·탐정 증거는 쓸 수 있나요?',
        answer:
          '<strong>적법 범위에서 수집된 증거는 사용 가능하지만, 위법 수집은 리스크가 큽니다.</strong> 공개된 장소에서의 사진·영상은 문제 없지만, 주거 침입·도청·계정 해킹 등은 형사 처벌 대상이며 증거능력도 부정될 수 있습니다.',
      },
      {
        question: '캡처본만 있고 원본이 사라지면 어떻게 되나요?',
        answer:
          '<strong>증명력이 약해질 수 있지만 완전히 부정되지는 않습니다.</strong> 원본이 없더라도 캡처 시점·경위·관련 정황을 입증하면 증거로 채택될 수 있으며, 공증을 추가로 받으면 증명력이 강화됩니다.',
      },
      {
        question: '상대방이 "조작된 증거"라고 주장하면 어떻게 하나요?',
        answer:
          '<strong>법원이 감정을 통해 진위를 판단할 수 있습니다.</strong> 디지털 포렌식 감정으로 원본성·변조 여부를 확인하며, 해시값·메타데이터·원본 파일을 보관해두는 것이 중요합니다.',
      },
    ],
    cta: {
      text: '이혼 디지털 증거 AI 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 증거 수집 기본 가이드', href: '/guide/divorce/divorce-affair-evidence-admissibility' },
      { label: '부정행위 제3자 손해배상', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: '부부 숨긴 재산 추적', href: '/guide/divorce/divorce-hidden-income-asset-investigation' },
      { label: '이혼 조정·소송 전략', href: '/guide/divorce/divorce-mediation-vs-trial-strategy' },
      { label: '이혼 상담 전 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 3. traffic-accident / pregnant-victim-compensation ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pregnant-victim-compensation',
    keyword: '임산부 교통사고 보상 태아 손해',
    questionKeyword: '임산부가 교통사고를 당하면 보상은 어떻게 되나요?',
    ctaKeyword: '임산부 교통사고 보상 범위 확인',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '임산부 교통사고 보상 — 태아 손해와 위자료 | 로앤가이드',
      description:
        '임산부 교통사고는 일반 피해와 달리 태아 손해·산모 위자료 가산이 적용됩니다. 인과관계 입증과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>임신 중 교통사고를 당하면 본인 부상뿐 아니라 태아 걱정까지 겹쳐 혼란스럽습니다. 약물 제한·정밀검사 지연·조산·유산 가능성 등 일반 사고와는 다른 특수성이 있습니다. 산모 위자료가 어떻게 가중되는지, 태아 손해가 별도로 인정되는지, 인과관계를 어떻게 입증할지 정리합니다.</p>',
    sections: [
      {
        title: '임산부 교통사고의 특수성과 보상 범위',
        content:
          '<p><strong style="color:#1e3a5f">임신 중 교통사고는 일반 피해와 다른 특수 손해가 발생하므로, 배상 범위가 확장됩니다.</strong></p>\n<ul>\n<li><strong>산모 위자료 가산</strong> — 임신 상태에서의 정신적 고통은 일반인보다 훨씬 크며, 법원도 이를 위자료 산정에서 가중 요소로 반영합니다.</li>\n<li><strong>치료 제약으로 인한 손해</strong> — 임신 중에는 약물·정밀검사가 제한되어 적시 치료가 어려워지는 점이 손해로 인정됩니다.</li>\n<li><strong>조산·유산 가능성</strong> — 사고 충격으로 조산·유산이 발생하면 별도의 손해배상 청구가 가능합니다.</li>\n<li><strong>향후 출산·육아 관련 추가 손해</strong> — 합의 시점에 예견할 수 없었던 출산·양육 관련 추가 손해에 대해서도 후속 청구가 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임산부 교통사고는 일반 사고 대비 손해 범위가 크므로, 초기 합의를 서두르지 말고 예상 가능한 모든 항목을 점검해야 합니다.</blockquote>',
      },
      {
        title: '태아 손해의 법적 지위와 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">민법 제762조는 "태아는 손해배상의 청구권에 관하여는 이미 출생한 것으로 본다"고 규정해 태아의 배상 청구권을 인정합니다.</strong></p>\n<ul>\n<li><strong>출생 조건부 권리</strong> — 태아는 살아서 출생하는 것을 조건으로 소급하여 손해배상 청구권을 갖습니다.</li>\n<li><strong>선천성 질환·장애</strong> — 사고로 인한 태아 손상이 출생 후 질환·장애로 확인되면, 아이 명의로 별도 손해배상 청구가 가능합니다.</li>\n<li><strong>사산·유산의 경우</strong> — 태아가 살아서 출생하지 못한 경우 태아 자체의 청구권은 소멸하지만, 산모는 정신적 손해·치료비·향후 임신 관련 손해를 별도로 청구할 수 있습니다.</li>\n<li><strong>청구 범위</strong> — 향후 치료비, 재활비, 양육비 증가분, 위자료 등 장기 손해를 포괄합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 태아 손해 청구 가능성과 범위를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인과관계 입증 — 의학적 자료가 핵심',
        content:
          '<p><strong style="color:#1e3a5f">사고와 태아 피해·유산·조산 사이의 인과관계는 의학적 자료로 입증해야 배상이 인정됩니다.</strong></p>\n<ul>\n<li><strong>사고 전후 진료 기록</strong> — 사고 직전 산전 검사 결과와 사고 직후 진료 기록을 대조하여 상태 변화를 입증합니다.</li>\n<li><strong>주치의 소견서</strong> — 사고 충격이 태아·산모에 미친 영향에 대한 전문의 소견이 가장 중요한 증거입니다.</li>\n<li><strong>영상 검사 기록</strong> — 초음파·CT·MRI 등 영상 검사로 외상성 손상을 입증합니다. 임신 중 제한된 검사일지라도 사후 영상 기록은 의미가 큽니다.</li>\n<li><strong>정신건강 상담 기록</strong> — 스트레스로 인한 정신적 피해는 상담·진료 기록으로 입증합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험회사가 "기저 질환이 원인"이라고 주장할 수 있으므로, 사고 전 건강 상태를 입증할 산전 검사 기록을 반드시 확보하세요.</blockquote>',
      },
      {
        title: '합의·청구 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">임산부 교통사고는 장기 손해가 발생할 수 있으므로, 초기 합의를 서두르지 말아야 합니다.</strong></p>\n<ul>\n<li><strong>관찰 기간 확보</strong> — 출산 이후까지 상태를 관찰하여 추가 손해 가능성을 점검한 후 합의하는 것이 안전합니다.</li>\n<li><strong>부제소 합의 조심</strong> — "향후 일체 이의를 제기하지 않는다"는 조항이 있는 합의서는 예견할 수 없었던 후발 손해에만 예외가 인정됩니다. 불리한 조항은 피해야 합니다.</li>\n<li><strong>소멸시효</strong> — 불법행위 손해배상 청구권은 "손해·가해자를 안 날로부터 3년, 불법행위일로부터 10년" 이내 행사해야 합니다.</li>\n<li><strong>분쟁 조정</strong> — 보험회사와 협의가 안 되면 금융감독원 분쟁조정위원회 또는 손해보험협회 조정을 활용할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임신 중 사고는 예견할 수 없는 손해가 많으므로, 최소 출산 후 6개월 정도 상태를 지켜본 후 합의 여부를 결정하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기부담금 추가 청구 인정',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자동차보험 피해자가 자기차량손해보험금을 수령한 이후에도 자기부담금 중 제3자 책임비율 상응액에 대해 별도 청구할 수 있다고 판시했습니다.',
        takeaway:
          '초기 보상으로 전보되지 않은 손해 부분(임산부의 향후 출산·양육 관련 추가 손해 등)은 별도 청구가 가능하며, 증거를 유지하면 후속 청구권을 행사할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '가해자 보험사에 위자료 추가 협상을 요청해도 되나요?',
        answer:
          '<strong>네, 산모의 정신적 고통·치료 제약·태아 우려를 구체적으로 소명하면 위자료 가중 협상이 가능합니다.</strong> 의사 소견서·상담 기록을 근거로 제시하면 설득력이 높아집니다.',
      },
      {
        question: '유산이 바로 발생하지 않고 시간이 지나서 발생했으면 어떻게 되나요?',
        answer:
          '<strong>시간 경과가 있어도 인과관계가 입증되면 배상 가능합니다.</strong> 의사 소견과 연속된 진료 기록으로 사고와의 관련성을 증명하면 인정됩니다.',
      },
      {
        question: '산모가 경미한 부상이라면 위자료가 적은가요?',
        answer:
          '<strong>경미한 부상이라도 임신 상태의 특수성이 가산 요소로 반영됩니다.</strong> 일반 피해자와 같은 기준으로 산정되지 않고, 정신적 고통의 강도가 별도로 고려됩니다.',
      },
      {
        question: '자녀 출생 후 장애가 나중에 발견되면 청구가 가능한가요?',
        answer:
          '<strong>네, 아이 명의로 별도 청구 가능합니다.</strong> 후발 손해로서 사고와의 인과관계를 입증하면, 소멸시효(손해를 안 날로부터 3년) 안에 청구할 수 있습니다.',
      },
      {
        question: '합의 전에 꼭 확인해야 할 것은 무엇인가요?',
        answer:
          '<strong>출산 후 6개월 정도의 관찰 기간을 거친 후 합의하는 것이 안전합니다.</strong> 향후 치료비·양육비 증가분·심리 치료 등 장기 항목을 모두 점검해야 합니다.',
      },
    ],
    cta: {
      text: '임산부 교통사고 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 피해 대응 기본 가이드', href: '/guide/traffic-accident' },
      { label: '교통사고 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 상해 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '교통사고 자기부담금 추가 청구', href: '/guide/traffic-accident' },
    ],
  },

  // ─── 4. traffic-accident / delayed-report-consequence ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-delayed-report-consequence',
    keyword: '교통사고 뒤늦게 신고 보상',
    questionKeyword: '교통사고 뒤늦게 신고해도 보상받을 수 있나요?',
    ctaKeyword: '지연 신고 교통사고 보상 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교통사고 뒤늦게 신고해도 보상 가능한가요? | 로앤가이드',
      description:
        '교통사고를 뒤늦게 신고했다면 보상 가능성과 증거 보완 방법을 정리했습니다. 인과관계 입증·소멸시효를 지금 확인하세요.',
    },
    intro:
      '<p>사고 당시엔 괜찮은 줄 알았는데 며칠 뒤 목·허리가 아파져서 그제야 신고를 고민합니다. 뒤늦은 신고는 보험사가 인과관계를 다툴 수 있는 리스크가 있지만, 보상이 완전히 불가능한 것은 아닙니다. 공백 보완 방법과 증거 확보, 청구 절차를 정리합니다.</p>',
    sections: [
      {
        title: '지연 신고의 법적 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">지연 신고 자체가 보상을 막지는 않지만, 인과관계 입증 부담이 커집니다.</strong></p>\n<ul>\n<li><strong>보험금 청구 시효</strong> — 자동차손해배상보장법상 보험금 청구권의 소멸시효는 일반적으로 3년(인정 시점에 따라 다를 수 있음)이며, 이 기간 안에 청구해야 합니다.</li>\n<li><strong>민사 손해배상 시효</strong> — 불법행위 손해배상 청구는 손해·가해자를 안 날로부터 3년, 불법행위일부터 10년입니다.</li>\n<li><strong>인과관계 입증 부담</strong> — 시간이 지날수록 사고와 부상의 연관성을 입증하기 어려워집니다.</li>\n<li><strong>증거 소멸 리스크</strong> — CCTV·블랙박스·목격자 기억 등은 시간이 지나면 사라지므로 빠른 확보가 중요합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지연 신고라도 보상은 가능하지만, 증거 확보를 빨리 할수록 유리합니다.</blockquote>',
      },
      {
        title: '경찰 신고와 보험사 접수 — 늦더라도 해야 하는 이유',
        content:
          '<p><strong style="color:#1e3a5f">사고 수일 또는 수주 후라도 경찰 신고와 보험사 접수는 반드시 진행해야 합니다.</strong></p>\n<ul>\n<li><strong>경찰 신고</strong> — 교통사고 사실 확인원이 발급되면 사고 사실을 공식적으로 증명할 수 있습니다. 지연 신고 사유를 함께 기재합니다.</li>\n<li><strong>가해자 보험사 접수</strong> — 가해자 보험사에 사고 사실과 부상 소견을 통보하면 손해 사정 절차가 시작됩니다.</li>\n<li><strong>본인 보험 청구</strong> — 자기신체사고 담보·상해담보가 있으면 본인 보험사에도 청구할 수 있습니다.</li>\n<li><strong>신고 사유 기록</strong> — 왜 즉시 신고하지 못했는지(경미하다고 판단·출장 등 사정) 상세히 기록해두면 보험사 협상에서 도움이 됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 지연 신고 상황의 보상 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 — 공백을 보완하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">지연 신고의 공백은 의학적·객관적 자료로 보완할 수 있습니다.</strong></p>\n<ul>\n<li><strong>MRI·CT 촬영</strong> — 정형외과·신경외과에서 영상 검사를 받아 외상성 손상 여부를 확인합니다. 디스크 돌출·연골 파열 등은 사고 충격 특유의 소견이 많습니다.</li>\n<li><strong>전문의 소견서</strong> — "교통사고로 인한 외상성 손상 가능성이 높다"는 의사 판단이 인과관계 입증의 핵심입니다.</li>\n<li><strong>CCTV 보존 요청</strong> — 사고 지점 주변 상가·주유소·아파트 CCTV는 2주~1개월이면 삭제됩니다. 서면으로 즉시 보존 요청을 해야 합니다.</li>\n<li><strong>블랙박스 백업</strong> — 본인·동승자 차량 블랙박스 영상을 SD카드째 별도 보관합니다.</li>\n<li><strong>목격자 확보</strong> — 사고 목격자의 연락처와 사실확인서를 최대한 빨리 받아둡니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 간단한 X-ray로는 디스크·연골 손상 입증이 어렵습니다. MRI로 확인된 영상 근거가 필수입니다.</blockquote>',
      },
      {
        title: '보험사 협상과 분쟁 조정',
        content:
          '<p><strong style="color:#1e3a5f">지연 신고 건은 보험사가 보상 범위를 축소하려는 경향이 있으므로, 분쟁 조정 제도를 활용할 수 있습니다.</strong></p>\n<ul>\n<li><strong>보험사 협상 1단계</strong> — 의사 소견·영상 기록·사고 사실 확인원을 근거로 보상 범위를 요구합니다.</li>\n<li><strong>금융감독원 분쟁조정</strong> — 보험사와 협의가 안 되면 금감원 분쟁조정위원회에 조정 신청을 할 수 있습니다. 무료이며 3~6개월 내 결론이 납니다.</li>\n<li><strong>손해보험협회 조정</strong> — 별도 조정 창구를 운영하며, 금감원 조정과 비슷하게 활용할 수 있습니다.</li>\n<li><strong>민사 소송</strong> — 조정이 불성립하면 가해자 또는 보험사를 상대로 손해배상 소송을 제기합니다. 청구액이 3,000만 원 이하면 소액사건 심판으로 간소하게 진행됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소멸시효를 놓치지 않도록 늦어도 사고 후 3년 이내에 민사 절차를 시작해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전보되지 않은 손해의 추가 청구 가능',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자동차보험 피해자가 자기차량손해보험금을 수령한 이후에도 자기부담금 중 제3자 책임비율 상응액에 대해 별도 청구할 수 있다고 판시했습니다.',
        takeaway:
          '지연 신고로 인한 공백 부분이 있어도 추가적인 의학적 증거·소견으로 인과관계를 보완하면 전보되지 않은 손해를 별도로 청구할 수 있는 길이 열려 있습니다.',
      },
    ],
    faq: [
      {
        question: '사고 후 1개월 지나서 신고해도 보상받을 수 있나요?',
        answer:
          '<strong>네, 소멸시효 안이면 가능합니다.</strong> 다만 인과관계 입증 부담이 커지므로 의학적 증거·CCTV 자료 등을 빠르게 확보해야 합니다.',
      },
      {
        question: '당시 경찰에 신고하지 않았는데도 보험 청구가 가능한가요?',
        answer:
          '<strong>네, 가능합니다.</strong> 경찰 신고는 필수가 아니며 보험사 접수만으로도 청구 절차가 진행됩니다. 다만 경찰 신고를 뒤늦게라도 하면 사고 사실 확인이 쉬워집니다.',
      },
      {
        question: '블랙박스 영상이 지워졌는데 어떻게 하나요?',
        answer:
          '<strong>주변 CCTV·목격자 진술·병원 기록으로 보완해야 합니다.</strong> 블랙박스가 없어도 의사 소견·다른 사실관계 증거로 인과관계를 입증할 수 있습니다.',
      },
      {
        question: '보험사가 "기존 질환"이라고 주장하면 어떻게 하나요?',
        answer:
          '<strong>사고 이전 건강 상태와 이후 상태를 비교·입증합니다.</strong> 건강검진 결과·이전 진료 기록을 제시해 사고 전에는 문제없었음을 증명하면 인과관계가 인정됩니다.',
      },
      {
        question: '지연 신고가 본인 과실로 작용하나요?',
        answer:
          '<strong>사고 과실 비율과는 별개입니다.</strong> 사고 과실은 사고 당시 행위로 판단되며, 신고 지연은 손해 입증·배상 범위에만 영향을 줍니다.',
      },
    ],
    cta: {
      text: '지연 신고 교통사고 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 피해 대응 기본 가이드', href: '/guide/traffic-accident' },
      { label: '교통사고 합의 후 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
      { label: '교통사고 필요 서류 정리', href: '/guide/traffic-accident/insurance-claim-required-docs' },
      { label: '교통사고 분쟁조정 절차', href: '/guide/traffic-accident' },
      { label: '교통사고 상해 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
    ],
  },

  // ─── 5. fraud / partnership-embezzlement-crime ───
  {
    domain: 'fraud',
    slug: 'fraud-partnership-embezzlement-crime',
    keyword: '동업자 사기 횡령 배임 고소',
    questionKeyword: '동업자가 돈을 빼돌렸는데 사기·횡령 중 뭘로 고소해야 하나요?',
    ctaKeyword: '동업자 범죄 구성요건 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '동업자가 돈 빼돌렸을 때 — 사기·횡령·배임 구분 | 로앤가이드',
      description:
        '동업자의 자금 유용이 사기인지 횡령·배임인지 구분 기준과 고소 절차를 정리했습니다. 형사·민사 병행 전략을 지금 확인하세요.',
    },
    intro:
      '<p>같이 시작한 동업자가 회사 자금을 빼돌리거나 거래처 대금을 개인 계좌로 돌리는 것을 발견하면 배신감이 큽니다. 민사소송만 생각하기 쉬운데, 실제로는 형사 고소가 더 효과적일 수 있습니다. 사기·횡령·배임의 구분 기준부터 고소 절차, 형사·민사 병행 전략까지 정리합니다.</p>',
    sections: [
      {
        title: '사기·횡령·배임의 법적 구분',
        content:
          '<p><strong style="color:#1e3a5f">동업자의 자금 유용은 형법상 사기(제347조), 업무상 횡령(제356조), 업무상 배임(제356조)으로 구분되며, 성립 요건이 다릅니다.</strong></p>\n<ul>\n<li><strong>사기죄</strong> — 처음부터 기망(속일 의사)으로 상대를 착오에 빠뜨려 재물·재산상 이익을 취득한 경우. 동업 체결 당시의 허위 설명·허위 실적 제시가 전형적입니다.</li>\n<li><strong>업무상 횡령</strong> — 업무상 보관·관리하던 타인의 재물을 불법으로 영득한 경우. 동업 자금을 맡아 관리하다가 개인적 용도로 사용한 경우 해당합니다.</li>\n<li><strong>업무상 배임</strong> — 타인의 사무를 처리하는 자가 그 임무를 위반하여 재산상 이익을 취득하거나 제3자에게 취득하게 한 경우. 회사에 불리한 거래를 자기 이익으로 유도한 경우 등.</li>\n<li><strong>법정형</strong> — 사기·업무상 횡령·업무상 배임 모두 10년 이하 징역 또는 3,000만 원 이하 벌금. 금액이 크면 특경법상 가중 처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 속였으면 사기, 중간에 착복했으면 횡령, 임무 위반으로 이익을 취했으면 배임입니다.</blockquote>',
      },
      {
        title: '자금 흐름 증거 확보가 성패를 가릅니다',
        content:
          '<p><strong style="color:#1e3a5f">동업자 범죄는 금전 흐름의 구체적 입증이 핵심이므로, 신속한 증거 확보가 결정적입니다.</strong></p>\n<ul>\n<li><strong>법인 통장 거래 내역</strong> — 법인·공동 계좌에서 상대방 개인 계좌로 빠져나간 내역을 정리합니다.</li>\n<li><strong>세금계산서·매출 장부</strong> — 실제 매출과 회계 장부 사이의 불일치를 입증합니다.</li>\n<li><strong>거래처 확인</strong> — 거래처에 결제 대금이 어디로 송금됐는지 확인 요청을 하고, 응답 내용을 기록합니다.</li>\n<li><strong>이메일·카톡 기록</strong> — 동업 제안 당시의 약속, 자금 운용 지시, 이익 분배 논의 등 관련 대화를 보관합니다.</li>\n<li><strong>회계 감사 자료</strong> — 외부 회계사·세무사의 감사 보고서가 있으면 객관적 증거로 유리합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 동업자 범죄의 구성요건 해당 여부를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사 고소와 민사 병행 전략',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소를 먼저 진행하면 수사기관의 계좌 추적·강제 수사 결과를 민사 증거로 활용할 수 있어 병행 전략이 효과적입니다.</strong></p>\n<ul>\n<li><strong>1단계: 형사 고소</strong> — 경찰서·검찰청에 고소장을 제출합니다. 죄명 선택이 중요하므로 변호사 상담 후 정확히 특정하세요.</li>\n<li><strong>2단계: 수사 협조</strong> — 수사기관에 증거 자료를 체계적으로 제출하고, 참고인 조사에 적극 응합니다.</li>\n<li><strong>3단계: 합의 협상</strong> — 피의자가 처벌을 피하려고 합의 시도를 할 수 있습니다. 이때 피해금 회수 협상을 병행할 수 있습니다.</li>\n<li><strong>4단계: 민사 소송</strong> — 형사 수사 자료를 근거로 손해배상·부당이득반환 소송을 제기합니다. 가압류·가처분으로 재산 보전을 동시에 진행합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 민사만 진행하면 상대방이 "경영 판단이었다"는 방어를 하기 쉽습니다. 형사 수사 병행으로 구조적 압박을 만들어야 합니다.</blockquote>',
      },
      {
        title: '소멸시효와 동업 계약 해지',
        content:
          '<p><strong style="color:#1e3a5f">형사 공소시효와 민사 소멸시효를 지키면서 동업 계약도 적법하게 해지해야 합니다.</strong></p>\n<ul>\n<li><strong>형사 공소시효</strong> — 사기·횡령·배임은 법정형 10년 이하이므로 공소시효 7년, 특경법 가중 시 10년. 초과 시 형사 처벌 불가.</li>\n<li><strong>민사 소멸시효</strong> — 불법행위 손해배상은 3년(손해·가해자 인지 시), 부당이득반환은 10년. 이 기간 안에 제소해야 합니다.</li>\n<li><strong>동업 계약 해지</strong> — 동업 계약 해지 절차를 거치지 않으면 향후 추가 분쟁의 소지가 있습니다. 해지 통보·합의서 작성이 필요합니다.</li>\n<li><strong>청산 절차</strong> — 동업 자산·부채를 정확히 정리한 후 분배 절차를 거쳐야 하며, 법인 동업인 경우 청산 등기까지 요구됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 분쟁 상태에서 섣불리 합의서에 서명하면 추가 청구권이 포기될 수 있으므로 반드시 변호사 검토 후 진행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위 정보 입력에 의한 기망행위 인정',
        summary:
          '대법원 2022다1862 사건(대법원, 2026.01.29 선고)에서 법원은 "컴퓨터 등 정보처리장치에 허위 정보를 입력하여 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우 사기죄의 기망행위에 해당한다"고 판시했습니다.',
        takeaway:
          '동업 관계에서도 상대방을 기망하여 자금을 처분하도록 만든 경우 사기죄가 성립할 수 있으며, 기망 방법·의도의 구체적 입증이 성패를 가립니다.',
      },
    ],
    faq: [
      {
        question: '동업 계약서가 없으면 고소가 어려운가요?',
        answer:
          '<strong>계약서가 없어도 고소 가능합니다.</strong> 이메일·카톡·송금 내역·세금계산서 등 객관적 자료로 동업 관계를 입증하면 수사가 진행됩니다.',
      },
      {
        question: '동업 분쟁인지, 범죄인지 어떻게 구분하나요?',
        answer:
          '<strong>단순 경영 판단의 차이는 민사 분쟁, 기망·착복·임무 위반은 형사 범죄입니다.</strong> 판단이 애매하면 형사 고소를 우선 검토하고 수사 결과에 따라 대응 방향을 정하는 것이 일반적입니다.',
      },
      {
        question: '피해액은 어떻게 산정하나요?',
        answer:
          '<strong>빼돌린 금액 + 이익 분배 손실 + 신용 손실을 포함해 산정합니다.</strong> 회계 전문가의 손해 산정이 있으면 민사소송에서 설득력이 커집니다.',
      },
      {
        question: '상대방이 합의 요청을 해오면 어떻게 대응하나요?',
        answer:
          '<strong>피해 회복 범위·향후 사업 관계·형사 처벌 여부를 종합적으로 판단해야 합니다.</strong> 변호사 자문 후 합의서에 향후 추가 청구권 유지 여부를 명확히 기재하세요.',
      },
      {
        question: '형사 고소에 비용이 많이 드나요?',
        answer:
          '<strong>경찰 고소는 비용이 없습니다.</strong> 변호사 선임 시 사건 규모에 따라 300만~1,000만 원 수준이 일반적이며, 로스쿨·법률구조공단 자문도 활용할 수 있습니다.',
      },
    ],
    cta: {
      text: '동업자 범죄 AI 점검',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피해 대응 기본 가이드', href: '/guide/fraud' },
      { label: '사기죄 구성요건 상세', href: '/guide/fraud/fraud-crime-establishment-requirements' },
      { label: '고소장 작성 방법', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '민사 손해배상 소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '투자 사기 형사·민사 병행', href: '/guide/fraud/investment-fraud-criminal-vs-civil' },
    ],
  },

  // ─── 6. fraud / voice-phishing-relief-law ───
  {
    domain: 'fraud',
    slug: 'fraud-voice-phishing-relief-law-application',
    keyword: '보이스피싱 피해구제 전기통신금융사기',
    questionKeyword: '보이스피싱 피해자인데 어떤 구제 신청이 가능한가요?',
    ctaKeyword: '보이스피싱 피해구제 절차 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보이스피싱 피해자 구제 신청 절차 총정리 | 로앤가이드',
      description:
        '보이스피싱 피해 구제는 전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법에 근거합니다. 지급정지·피해구제·채권소멸 절차를 지금 확인하세요.',
    },
    intro:
      '<p>보이스피싱을 당한 직후 어디에, 어떤 신청을 해야 하는지 모르면 피해금 회수 기회를 놓칩니다. "전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법"은 은행 지급정지·금감원 피해구제·채권소멸 절차로 피해자를 보호합니다. 시간별로 무엇을 해야 하는지 정리합니다.</p>',
    sections: [
      {
        title: '피해구제 특별법의 구조와 신청 대상',
        content:
          '<p><strong style="color:#1e3a5f">전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법(이하 "피해구제법")은 보이스피싱 피해금의 신속한 회수를 지원합니다.</strong></p>\n<ul>\n<li><strong>보호 대상</strong> — 전기통신을 이용해 기망당하여 자금을 이체·교부한 피해자.</li>\n<li><strong>핵심 제도</strong> — 지급정지, 피해구제 신청, 채권소멸 절차, 피해금 환급의 4단계.</li>\n<li><strong>대상 자금</strong> — 피해자가 사기 이용 계좌로 송금·이체한 금전.</li>\n<li><strong>한계</strong> — 대면 편취·가상자산 전환·해외 송금 등은 적용이 제한될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해구제법은 신속 대응이 성공의 핵심이며, 신고 시점이 늦을수록 회수 가능성이 급격히 낮아집니다.</blockquote>',
      },
      {
        title: '즉시 해야 할 일 — 지급정지·경찰·금감원 30분 내',
        content:
          '<p><strong style="color:#1e3a5f">보이스피싱 인지 즉시 은행 지급정지·경찰 신고·금감원 피해구제를 30분 안에 처리하는 것이 피해 회수의 관건입니다.</strong></p>\n<ul>\n<li><strong>1단계: 은행 지급정지</strong> — 피해 은행(또는 수취 은행) 고객센터에 전화해 즉시 지급정지를 요청합니다. 계좌번호·이체 시각·금액을 정확히 전달합니다.</li>\n<li><strong>2단계: 경찰 신고</strong> — 112 또는 사이버수사국(182)에 신고하여 사건 접수 번호를 받습니다.</li>\n<li><strong>3단계: 금감원 신청</strong> — 1332로 전화해 피해구제 신청을 접수합니다. 신고 접수 번호·이체 정보를 전달합니다.</li>\n<li><strong>4단계: 연쇄 이체 계좌 대응</strong> — 범인이 자금을 분산 이체한 계좌까지 지급정지를 요청해야 피해 회수 범위가 넓어집니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 피해구제 절차의 시간별 행동 계획을 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '채권소멸 절차와 피해금 환급',
        content:
          '<p><strong style="color:#1e3a5f">지급정지 후 2개월 내에 금감원 신고·채권소멸 절차가 진행되며, 소멸이 확정되면 피해자에게 환급됩니다.</strong></p>\n<ul>\n<li><strong>채권소멸 절차 개시</strong> — 지급정지된 계좌에 있는 잔액에 대해 금감원이 채권소멸 절차를 개시합니다.</li>\n<li><strong>이의신청 기간</strong> — 명의인(범인 또는 대포통장 명의자)이 이의신청할 수 있는 기간이 부여됩니다.</li>\n<li><strong>소멸 확정</strong> — 이의가 없으면 계좌 잔액에 대한 명의인의 채권이 소멸합니다.</li>\n<li><strong>피해자 환급</strong> — 피해자는 금감원을 통해 피해액을 환급받습니다. 다수 피해자가 있으면 피해액 비율로 안분 배분됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잔액이 0원이면 환급이 불가능하므로 즉시 지급정지로 잔액 확보가 필수입니다.</blockquote>',
      },
      {
        title: '대포통장 명의자 이의·환급 불가 사례',
        content:
          '<p><strong style="color:#1e3a5f">명의자가 피해자인 경우(명의 도용 등) 이의신청으로 지급정지 해제가 가능하며, 일부 유형은 환급 대상에서 제외됩니다.</strong></p>\n<ul>\n<li><strong>명의 도용 피해자 이의신청</strong> — 자신의 계좌가 범인 경유지로 이용된 경우, 경찰 신고 접수증·이체 경위서 등을 제출해 이의신청합니다.</li>\n<li><strong>대면 편취</strong> — 현금 직접 수령 방식은 피해구제법 적용이 제한될 수 있어 형사 고소·민사 소송으로 대응해야 합니다.</li>\n<li><strong>가상자산 전환</strong> — 피해금이 가상자산으로 전환된 경우 추적·회수가 매우 어렵습니다.</li>\n<li><strong>해외 송금</strong> — 해외 계좌 송금은 국제 공조가 필요하여 회수가 극히 제한적입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 피해구제법 적용이 어려운 유형도 형사 고소(사기·전자금융법 위반)는 별도로 진행해 법적 구제를 받을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위 정보 입력에 의한 기망행위',
        summary:
          '대법원 2022다1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 허위 정보를 입력하여 재산적 처분행위를 하는 사람을 착오에 빠뜨리는 행위가 사기죄의 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          '보이스피싱도 동일한 기망 구조를 이용한 범죄로, 피해 인지 즉시 지급정지·피해구제 절차로 피해 확산을 차단하고 형사 고소도 병행해 증거를 보존해야 합니다.',
      },
    ],
    faq: [
      {
        question: '지급정지 요청하면 몇 분 안에 처리되나요?',
        answer:
          '<strong>즉시 처리됩니다.</strong> 은행 고객센터에 피해 신고 의사를 전달하면 즉시 계좌가 정지되며, 이후 피해구제 정식 신청으로 지급정지가 유지됩니다.',
      },
      {
        question: '가족이 피해자인데 제가 대신 신고할 수 있나요?',
        answer:
          '<strong>가능하지만 대리인 자격 증빙이 필요합니다.</strong> 가족관계증명서와 피해자 본인의 위임 의사 확인이 요구되며, 긴급 상황에서는 은행·경찰이 우선 조치 후 사후 확인하는 경우도 있습니다.',
      },
      {
        question: '피해금 환급은 얼마나 걸리나요?',
        answer:
          '<strong>보통 2~6개월 소요됩니다.</strong> 채권소멸 절차·이의신청 기간·환급 절차를 거쳐야 하며, 사안에 따라 기간이 달라집니다.',
      },
      {
        question: '범인 계좌에 잔액이 없으면 회수가 불가능한가요?',
        answer:
          '<strong>피해구제법상으로는 회수가 어렵지만, 형사 고소로 수사·검거 시 범인 재산을 통한 별도 회수가 가능할 수 있습니다.</strong> 형사·민사 병행이 실무적 대안입니다.',
      },
      {
        question: '보이스피싱 보험이 있으면 피해구제 외에 받을 수 있나요?',
        answer:
          '<strong>네, 금융사 보이스피싱 보험·신용카드사 보상 상품 등과 피해구제는 중복 가능할 수 있습니다.</strong> 각 상품의 약관을 확인하고 별도 청구하세요.',
      },
    ],
    cta: {
      text: '보이스피싱 피해구제 AI 안내',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피해 대응 기본 가이드', href: '/guide/fraud' },
      { label: '보이스피싱 초기 대응 72시간', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '보이스피싱 고령자 회수 방법', href: '/guide/fraud/fraud-elderly-voice-phishing-recovery' },
      { label: '사기 증거 수집 가이드', href: '/guide/fraud/fraud-complaint-police-key-evidence-5' },
      { label: '투자 사기 신고·회수', href: '/guide/fraud/fraud-crypto-investment-scam-report' },
    ],
  },
];
