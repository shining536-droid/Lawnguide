import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. stalking/complaint-filing-required-documents: 스토킹 피해자가 고소장을 작성할 때 필요한 서류와 증거를 구체적으로 안내하는 준비서류형 페이지
// 2. bankruptcy/business-failure-bankruptcy-eligible: 사업 실패 후 개인파산 신청 가능 여부를 판단해야 하는 사업자를 돕는 상황형 페이지
// 3. bankruptcy/discharge-denial-reasons-key-cases: 면책 불허가 사유와 주요 판례를 통해 면책 거부 위험을 사전에 파악하려는 채무자를 돕는 판례형 페이지
// 4. rehabilitation/business-owner-rehabilitation-eligibility: 사업자가 개인회생 신청 자격이 되는지 궁금한 상황에서 요건을 안내하는 상황형 페이지
// 5. rehabilitation/rehabilitation-vs-workout-comparison: 개인회생과 개인워크아웃 중 어떤 절차가 자신에게 유리한지 비교하려는 채무자를 돕는 비교형 페이지

export const spokesBatch17_26to30: SpokePage[] = [
  // ── 1. 스토킹 고소장 작성 시 필요한 서류 목록 ──
  {
    domain: 'stalking',
    slug: 'complaint-filing-required-documents',
    keyword: '스토킹 고소장 필요서류',
    questionKeyword: '스토킹 고소장을 작성할 때 어떤 서류와 증거가 필요한가요?',
    ctaKeyword: '스토킹 고소장 준비서류 확인',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '스토킹 고소장 필요서류 7가지 체크리스트 | 로앤가이드',
      description:
        '스토킹 피해를 신고하려는데 어떤 증거를 모아야 할지 막막하신가요? 고소장 작성에 필요한 서류와 증거 목록을 단계별로 지금 확인하세요.',
    },
    intro:
      '밤늦게 현관 앞에 또 누군가 서 있었다는 사실을 알게 된 순간, 심장이 쿵 내려앉습니다. 더 이상 참을 수 없어 고소를 결심했지만, 경찰서에 가기 전에 뭘 준비해야 하는지 막막합니다. 스토킹처벌법 제2조에 따르면 반복적인 접근·연락·감시 행위가 스토킹에 해당하며, 고소장에 이를 입증할 증거를 체계적으로 첨부하면 수사가 훨씬 빠르게 진행됩니다. 대법원 2025도36 사건에서도 상대방의 현실적 인식 여부와 관계없이 객관적으로 불안감을 일으키기에 충분한 행위면 스토킹으로 인정된다고 판시했습니다.',
    sections: [
      {
        title: '첫째, 고소장 본문에 반드시 포함해야 할 핵심 내용',
        content:
          '<p><strong style="color:#1e3a5f">피해 일시·장소·방법을 구체적으로 특정해야 수사가 빨라집니다</strong></p>\n<p>고소장에는 ① <strong>고소인(피해자) 인적사항</strong>, ② <strong>피고소인(가해자) 인적사항</strong>(모르면 인상착의·차량번호 등), ③ <strong>범죄사실</strong>(언제, 어디서, 어떤 방법으로 스토킹이 이루어졌는지)을 기재합니다. 스토킹처벌법 제18조에 따라 스토킹범죄는 3년 이하의 징역 또는 3천만원 이하의 벌금에 해당하므로, 반복성과 지속성을 명확히 서술하는 것이 핵심입니다.</p>\n<p>"2025년 12월 1일부터 2026년 3월 15일까지 약 3개월간, 피고소인은 총 47회에 걸쳐..."처럼 <strong>횟수와 기간을 수치로 특정</strong>하면 수사관이 사건의 심각성을 빠르게 파악할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 일시·장소·방법·횟수를 구체적 수치로 특정 → 수사 속도 향상</blockquote>',
      },
      {
        title: '둘째, 카카오톡·문자·SNS 메시지 증거 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">메시지는 전송 일시가 보이도록 전체 화면을 캡처하세요</strong></p>\n<p>스토킹 가해자의 <strong>반복적인 연락</strong>은 가장 강력한 증거입니다. 카카오톡은 대화방 상단의 날짜와 시간이 함께 보이도록 스크롤하며 캡처하고, 문자 메시지는 발신번호와 수신 시간이 노출되는 전체 화면을 저장하세요. 인스타그램 DM, 페이스북 메신저 등 SNS 메시지도 동일한 방식으로 확보합니다.</p>\n<p>가해자가 메시지를 삭제할 가능성이 있으므로 <strong>발견 즉시 캡처</strong>하는 것이 중요합니다. 가능하면 캡처 화면을 PDF로 변환하여 날짜별로 정리하고, 원본 데이터도 별도 보관하세요.</p>\n<p style="margin-top:12px;padding:14px 16px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #ff9800;border-radius:8px;font-size:0.95em;">💬 증거 정리가 어렵다면, AI가 내 상황에 맞는 증거 목록을 빠르게 정리해드립니다. <a href="https://www.lawnguide.co.kr/chat?domain=stalking" style="color:#1e3a5f;font-weight:bold;">지금 무료로 확인하기 →</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 날짜·시간·발신자 정보가 보이게 전체 화면 캡처 → PDF 정리</blockquote>',
      },
      {
        title: '셋째, CCTV·블랙박스·GPS 기록 등 물리적 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">가해자의 반복 출현을 입증하는 영상·위치 기록이 결정적 증거가 됩니다</strong></p>\n<p>아파트 로비, 주차장, 직장 근처 CCTV에 가해자가 반복적으로 출현한 기록이 있다면 관리사무소나 점포에 <strong>영상 보존 요청</strong>을 하세요. 일반적으로 CCTV 보관 기간은 30일이므로 빠르게 요청해야 합니다. 차량 블랙박스에 미행 장면이 담겼다면 SD카드를 별도 복사하여 보관하세요.</p>\n<p>가해자가 몰래 설치한 <strong>위치추적기(GPS)</strong>를 발견한 경우, 발견 당시 상태를 사진으로 촬영하고 경찰에 제출하면 위치정보법 위반까지 추가 입증이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: CCTV 30일 보관 기한 내 보존 요청 → 블랙박스·GPS 발견 시 즉시 촬영</blockquote>',
      },
      {
        title: '넷째, 진단서·심리상담 기록 등 피해 입증 서류',
        content:
          '<p><strong style="color:#1e3a5f">신체적·정신적 피해를 의료 기록으로 입증하면 양형에 큰 영향을 미칩니다</strong></p>\n<p>스토킹으로 인한 <strong>불안장애, 수면장애, 우울증</strong> 등의 증상이 있다면 정신건강의학과에서 진단서를 발급받으세요. 심리상담센터 이용 기록도 피해 심각성을 보여주는 자료입니다. 스토킹처벌법 제18조의2에 따른 가중처벌 요건에 해당할 수 있으므로, 피해 정도를 객관적으로 입증하는 것이 중요합니다.</p>\n<p>신체 접촉이 있었다면 <strong>외과·응급의학과 진단서</strong>도 함께 확보하고, 이사·직장 변경 등 생활 변화가 생겼다면 임대차계약서, 퇴직확인서 등도 피해 범위를 보여주는 보조 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 정신건강의학과 진단서 + 심리상담 기록 → 피해 심각성 객관적 입증</blockquote>',
      },
      {
        title: '다섯째, 고소장 제출 후 잠정조치·접근금지 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고소와 동시에 잠정조치를 신청하면 가해자 접근을 법적으로 차단할 수 있습니다</strong></p>\n<p>고소장을 접수하면 경찰은 스토킹처벌법 제4조에 따라 <strong>긴급응급조치</strong>(접근금지, 연락금지 등)를 할 수 있고, 검사 청구로 법원이 <strong>잠정조치</strong>(제9조)를 결정할 수 있습니다. 잠정조치 기간은 최대 2개월이며, 연장도 가능합니다.</p>\n<p>고소장 제출 시 잠정조치 신청 의사를 <strong>고소장 말미에 명시</strong>하거나, 경찰관에게 직접 요청하세요. 준비서류 체크리스트: ① 고소장 원본, ② 증거자료 목록표, ③ 메시지 캡처 묶음, ④ CCTV 보존 요청서 사본, ⑤ 진단서, ⑥ 피해경위서(시간순 정리), ⑦ 신분증 사본.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 고소장 + 잠정조치 신청 동시 진행 → 7가지 서류 체크리스트 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도36 사건(2025.10.30 선고) — 피해자 인식 없어도 스토킹 성립',
        summary:
          '대법원 2025도36 사건에서 법원은 스토킹처벌법 제2조 제1호 각 목의 행위가 객관적·일반적으로 볼 때 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도라면, 현실적으로 상대방이 그 행위를 인식했는지 여부와 관계없이 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '고소장을 작성할 때 "당시 제가 인지하지 못한 행위도 있었다"라는 이유로 증거에서 빼지 마세요. 객관적으로 불안감을 줄 수 있는 행위였다면 모두 고소장에 포함하여 제출하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '가해자의 이름과 주소를 모르면 고소할 수 없나요?',
        answer:
          '<strong>가해자의 인적사항을 모르더라도 고소가 가능합니다.</strong> 고소장에 인상착의, 차량 번호, SNS 아이디 등 특정할 수 있는 정보를 기재하면 경찰이 수사를 통해 신원을 확인합니다. "성명불상"으로 기재하고 제출해도 접수됩니다.',
      },
      {
        question: '증거가 카카오톡 캡처밖에 없어도 고소가 되나요?',
        answer:
          '<strong>카카오톡 캡처만으로도 충분히 고소 가능합니다.</strong> 핵심은 반복성과 지속성을 보여주는 것입니다. 다만 CCTV나 진단서 등 보조 증거가 있으면 수사관의 판단이 더 신속해지므로, 가능한 범위에서 추가 증거를 확보하는 것이 좋습니다.',
      },
      {
        question: '고소장을 직접 작성해도 되나요, 변호사에게 맡겨야 하나요?',
        answer:
          '<strong>고소장은 피해자 본인이 직접 작성하여 제출할 수 있습니다.</strong> 다만 법률 용어 사용이나 증거 정리가 어렵다면 대한법률구조공단(전화번호 132)이나 스토킹피해상담소의 무료 법률 지원을 활용해보세요.',
      },
      {
        question: '고소 후 가해자가 보복할까 봐 두려운데 어떻게 하나요?',
        answer:
          '<strong>고소와 동시에 잠정조치(접근금지)를 신청하면 법적 보호를 받을 수 있습니다.</strong> 잠정조치를 위반하면 스토킹처벌법 제20조에 따라 2년 이하의 징역 또는 2천만원 이하의 벌금에 처해지므로, 가해자에 대한 강력한 억제 효과가 있습니다.',
      },
      {
        question: '이전에 연인 관계였어도 스토킹으로 고소할 수 있나요?',
        answer:
          '<strong>이전 연인이라도 이별 후 반복적 접근·연락은 스토킹에 해당합니다.</strong> 대법원 2025도36 사건에서도 행위자와 상대방의 관계를 종합적으로 고려하되, 객관적으로 불안감을 주는 행위면 스토킹으로 인정된다고 판시했습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 피해 즉시 대응 가이드', href: '/spoke/stalking/stalking-immediate-response' },
      { label: '스토킹 증거 수집 FAQ', href: '/spoke/stalking/stalking-evidence-collection-faq' },
      { label: '스토킹 신고와 접근금지명령', href: '/spoke/stalking/stalking-report-and-restraining-order' },
      { label: '스토킹 처벌 수위와 접근금지', href: '/spoke/stalking/stalking-penalty-restraining-order' },
      { label: '스토킹 긴급보호조치 신청법', href: '/spoke/stalking/stalking-emergency-protective-measures' },
    ],
  },

  // ── 2. 사업 실패 후 개인파산 신청 가능한가 ──
  {
    domain: 'bankruptcy',
    slug: 'business-failure-bankruptcy-eligible',
    keyword: '사업 실패 개인파산 신청 자격',
    questionKeyword: '사업에 실패했는데 개인파산 신청이 가능한가요?',
    ctaKeyword: '사업 실패 개인파산 신청 자격 확인',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '사업 실패 후 개인파산 3가지 신청 요건 | 로앤가이드',
      description:
        '사업이 망해서 빚더미에 앉았는데 개인파산 신청이 가능할지 고민되시나요? 사업자 파산 요건과 절차를 한눈에 지금 확인하세요.',
    },
    intro:
      '매출이 끊기고 거래처 미수금은 회수 불가, 카드빚과 사업자 대출 이자가 눈덩이처럼 불어나 매달 독촉 전화에 시달리고 있습니다. "사업자도 개인파산이 되나?"라는 질문이 머릿속에 맴돕니다. 채무자 회생 및 파산에 관한 법률 제305조에 따르면 채무자가 지급불능 상태에 있으면 법원에 파산을 신청할 수 있으며, 사업자·개인사업자·법인 대표 개인 모두 해당됩니다. 핵심은 현재 재산으로 채무를 갚을 수 없는 "지급불능" 상태인지 여부입니다.',
    sections: [
      {
        title: '첫째, 사업자 개인파산 신청 요건 — 지급불능 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">현재 보유 재산과 소득으로 채무를 변제할 수 없는 상태가 핵심 요건입니다</strong></p>\n<p>채무자회생법 제305조에 따라 개인파산을 신청하려면 <strong>지급불능</strong> 상태여야 합니다. 지급불능이란 채무자의 재산·신용·근로능력 등을 종합적으로 고려했을 때 현재와 장래에 채무를 갚을 수 없는 객관적 상태를 말합니다.</p>\n<p>사업 실패의 경우 ① <strong>폐업 후 소득이 없거나 극히 적은 경우</strong>, ② <strong>재산보다 채무가 현저히 많은 경우</strong>, ③ <strong>채무 변제를 위한 수입 전망이 없는 경우</strong>에 지급불능으로 인정됩니다. 사업자등록을 폐업하지 않았더라도 실질적으로 영업이 중단된 상태라면 신청 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 지급불능 = 재산 + 소득 + 신용으로 채무 변제 불가능한 객관적 상태</blockquote>',
      },
      {
        title: '둘째, 사업 관련 채무 유형별 파산 포함 범위',
        content:
          '<p><strong style="color:#1e3a5f">사업자 대출, 신용카드, 보증채무 등 대부분의 채무가 파산 대상에 포함됩니다</strong></p>\n<p>개인파산에 포함되는 사업 관련 채무: ① <strong>사업자 대출</strong>(은행, 저축은행, 캐피탈 등), ② <strong>신용카드 채무</strong>(사업용·개인용 모두), ③ <strong>거래처 미지급금</strong>, ④ <strong>임대료 연체금</strong>, ⑤ <strong>보증인으로서의 채무</strong>, ⑥ <strong>국세·지방세 체납</strong>(단, 조세채권은 비면책채권에 해당할 수 있음).</p>\n<p>주의할 점은 <strong>세금 체납, 벌금, 양육비</strong> 등 일부 채무는 면책이 되지 않는 비면책채권에 해당한다는 것입니다. 채무자회생법 제566조에서 비면책채권 목록을 규정하고 있으므로, 자신의 채무 중 면책 가능한 범위를 사전에 확인해보세요.</p>\n<p style="margin-top:12px;padding:14px 16px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #ff9800;border-radius:8px;font-size:0.95em;">💬 내 채무 중 면책 가능한 범위가 궁금하다면, AI가 빠르게 분석해드립니다. <a href="https://www.lawnguide.co.kr/chat?domain=bankruptcy" style="color:#1e3a5f;font-weight:bold;">지금 무료로 확인하기 →</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업 관련 대부분 채무 포함 → 세금·벌금·양육비는 비면책 가능성 확인</blockquote>',
      },
      {
        title: '셋째, 법인 대표와 개인사업자의 파산 절차 차이',
        content:
          '<p><strong style="color:#1e3a5f">법인 대표는 법인파산과 개인파산을 분리해서 진행해야 합니다</strong></p>\n<p><strong>개인사업자</strong>는 사업 관련 채무가 곧 개인 채무이므로, 개인파산 한 번으로 사업·개인 채무를 모두 처리할 수 있습니다. 반면 <strong>법인 대표</strong>는 법인의 채무와 개인의 채무가 법적으로 분리되어 있으므로, 법인파산과 개인파산을 별도로 진행해야 합니다.</p>\n<p>다만 법인 대표가 <strong>연대보증</strong>을 선 경우, 법인이 파산하더라도 개인에게 보증채무가 남으므로 개인파산도 함께 진행하는 것이 일반적입니다. 실무에서는 법인파산 → 개인파산 순서로 진행하는 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 개인사업자 = 개인파산 1회, 법인 대표 = 법인파산 + 개인파산 분리</blockquote>',
      },
      {
        title: '넷째, 파산 신청 시 필요한 서류와 준비사항',
        content:
          '<p><strong style="color:#1e3a5f">채무 목록, 재산 목록, 수입·지출 내역을 빠짐없이 작성해야 합니다</strong></p>\n<p>파산 신청 시 필요한 핵심 서류: ① <strong>파산·면책 신청서</strong>, ② <strong>채권자 목록</strong>(모든 채권자의 이름·주소·채무액), ③ <strong>재산 목록</strong>(부동산, 예금, 보험, 차량 등), ④ <strong>수입·지출에 관한 목록</strong>, ⑤ <strong>최근 2년간 재산 변동 내역</strong>, ⑥ <strong>사업자등록증 사본·폐업확인서</strong>, ⑦ <strong>부채증명원</strong>(각 채권자별).</p>\n<p>특히 사업자의 경우 <strong>사업 관련 장부, 세금 신고서, 거래처 미수금 내역</strong>도 함께 제출하면 법원의 심리가 수월해집니다. 재산을 고의로 누락하면 면책불허가 사유가 되므로 정직하게 기재하는 것이 절대적으로 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 채권자·재산·수입지출 목록 빠짐없이 작성 → 고의 누락 시 면책불허가</blockquote>',
      },
      {
        title: '다섯째, 파산 후 생활과 경제적 재출발 준비',
        content:
          '<p><strong style="color:#1e3a5f">면책 결정이 확정되면 채무에서 해방되어 경제적으로 새 출발할 수 있습니다</strong></p>\n<p>파산선고 후 면책 결정이 확정되면 비면책채권을 제외한 <strong>모든 채무의 변제 책임이 면제</strong>됩니다. 신용정보 등록은 면책 확정 후 <strong>5년간</strong> 유지되지만, 그 기간 동안에도 소득활동, 은행계좌 개설, 건강보험 가입 등 일상생활에는 제한이 없습니다.</p>\n<p>면책 후에도 <strong>재창업</strong>이 가능합니다. 사업자등록 제한이 없으며, 신용회복위원회의 프로그램을 활용하면 신용 점수 회복 속도를 높일 수 있습니다. 면책은 "끝"이 아니라 "새로운 시작"이라는 점을 기억하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 면책 확정 → 채무 해방 + 5년 후 신용 정상화 + 재창업 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2022다247378 사건(2025.06.12 선고) — 면책결정과 우선변제권의 관계',
        summary:
          '대법원 2022다247378 사건에서 법원은 면책결정의 효력이 우선변제권이 인정되는 부분을 포함하여 주택임차인의 보증금반환채권 전부에 미친다고 판시했습니다. 면책결정이 확정된 이상 채권자는 채무자를 상대로 이행을 소구할 수 없다고 밝혔습니다.',
        takeaway:
          '사업 실패로 파산을 고민하고 있다면, 면책 결정 후에는 대부분의 채무에서 완전히 해방된다는 점을 확인하세요. 다만 비면책채권 해당 여부를 사전에 반드시 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '사업자등록을 폐업하지 않아도 파산 신청이 되나요?',
        answer:
          '<strong>폐업하지 않아도 파산 신청이 가능합니다.</strong> 다만 실무적으로는 파산 신청 전에 폐업 처리를 하는 것이 일반적이며, 폐업확인서를 제출하면 법원 심리가 수월해집니다. 사업자등록 상태와 무관하게 지급불능 여부가 핵심입니다.',
      },
      {
        question: '사업으로 진 빚이 얼마 이상이어야 파산이 가능한가요?',
        answer:
          '<strong>개인파산에는 최소 채무액 기준이 없습니다.</strong> 채무 금액이 아니라 "지급불능 상태"인지가 판단 기준입니다. 다만 실무적으로 채무가 1,000만원 이하이면 파산보다 채무조정이나 워크아웃이 더 적합한 경우가 많습니다.',
      },
      {
        question: '파산하면 집과 차를 모두 빼앗기나요?',
        answer:
          '<strong>모든 재산을 잃는 것은 아닙니다.</strong> 채무자회생법 제383조에 따라 생활에 필요한 가재도구, 6개월 이상 생활비 등은 압류금지재산으로 보호됩니다. 자동차의 경우 500만원 이하 시가의 차량은 보유할 수 있는 경우가 많습니다.',
      },
      {
        question: '파산 신청부터 면책까지 얼마나 걸리나요?',
        answer:
          '<strong>통상 6개월~1년 정도 소요됩니다.</strong> 파산신청 → 파산선고(약 1~3개월) → 면책심문기일(파산선고 후 약 3~6개월) → 면책결정 순서로 진행됩니다. 재산이 거의 없는 동시폐지 사건은 비교적 빠르게 진행됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 면책까지 전 과정', href: '/spoke/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 신청 요건 총정리', href: '/spoke/bankruptcy/bankruptcy-fresh-start-requirements' },
      { label: '파산 후 신용 회복 타임라인', href: '/spoke/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '면책 후 생활 변화 가이드', href: '/spoke/bankruptcy/bankruptcy-after-discharge-life-changes' },
      { label: '파산 압류해제 절차', href: '/spoke/bankruptcy/bankruptcy-seizure-release-process' },
    ],
  },

  // ── 3. 면책 불허가 사유와 주요 판례 ──
  {
    domain: 'bankruptcy',
    slug: 'discharge-denial-reasons-key-cases',
    keyword: '면책불허가 사유 판례',
    questionKeyword: '면책이 불허가되는 사유에는 어떤 것이 있고 주요 판례는 무엇인가요?',
    ctaKeyword: '면책불허가 사유 확인',
    type: '판례형',
    perspective: 'victim',
    meta: {
      title: '면책불허가 사유 5가지와 핵심 판례 2선 | 로앤가이드',
      description:
        '파산 신청 후 면책이 거부될까 봐 걱정되시나요? 면책불허가 사유와 이를 극복한 실제 판례를 함께 지금 확인하세요.',
    },
    intro:
      '파산 신청서를 법원에 제출하고 나서야 "혹시 면책이 안 되면 어떡하지?"라는 불안이 밀려옵니다. 빚은 그대로인데 파산 기록만 남을 수 있다는 생각에 잠을 이룰 수 없습니다. 채무자회생법 제564조 제1항에는 면책불허가 사유가 열거되어 있지만, 같은 조 제2항에 따라 법원은 재량으로 면책을 허가할 수도 있습니다. 대법원 2024마6789 사건에서도 면책불허가 사유가 있더라도 파산에 이르게 된 경위 등을 고려하여 재량면책이 가능하다고 판시했습니다.',
    sections: [
      {
        title: '첫째, 채무자회생법이 정한 면책불허가 사유 5가지',
        content:
          '<p><strong style="color:#1e3a5f">면책이 거부되는 대표적 사유를 미리 알면 대비할 수 있습니다</strong></p>\n<p>채무자회생법 제564조 제1항에서 정한 주요 면책불허가 사유:</p>\n<p>① <strong>재산 은닉·손괴·불리한 처분</strong>(제1호) — 파산선고를 앞두고 재산을 빼돌리거나 헐값에 처분한 경우<br>② <strong>허위 채권자목록 제출</strong>(제2호) — 특정 채권자를 고의로 누락하거나 허위 금액을 기재한 경우<br>③ <strong>설명의무 위반</strong>(제1호, 제658조) — 파산관재인의 자료 요청에 정당한 사유 없이 응하지 않은 경우<br>④ <strong>과대한 낭비·도박·사행행위</strong>(제4호) — 도박, 투기 등으로 현저하게 재산을 감소시킨 경우<br>⑤ <strong>면책 후 7년 이내 재신청</strong>(제6호) — 이전 면책결정 확정일로부터 7년이 지나지 않은 경우</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 재산 은닉, 허위 기재, 설명 거부, 도박·낭비, 7년 내 재신청 = 5대 불허가 사유</blockquote>',
      },
      {
        title: '둘째, 설명의무 위반과 재량면책 — 대법원 2024마6789 판례',
        content:
          '<p><strong style="color:#1e3a5f">설명의무 위반이 있어도 재량면책이 가능한 경우가 있습니다</strong></p>\n<p>대법원 2024마6789 사건(2024.12.26 선고)에서 파산관재인이 채무자에게 사업소득 처분내역과 폐업자산 내역을 요구했으나 채무자가 충분히 응하지 못했습니다. 원심은 면책을 불허가했지만, 대법원은 다음과 같이 판시했습니다.</p>\n<p>① 해당 요구가 <strong>파산절차 진행에 필수적인 내용인지</strong> 먼저 판단해야 한다<br>② 채무자의 <strong>지적 능력, 건강상태, 사안의 복잡성</strong> 등을 고려해야 한다<br>③ 파산에 이르게 된 경위, 면책불허가 행위의 정도, <strong>갱생 필요성</strong> 등을 종합하면 재량면책이 상당하다</p>\n<p style="margin-top:12px;padding:14px 16px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #ff9800;border-radius:8px;font-size:0.95em;">💬 면책불허가가 걱정된다면, AI가 내 상황의 위험도를 빠르게 분석해드립니다. <a href="https://www.lawnguide.co.kr/chat?domain=bankruptcy" style="color:#1e3a5f;font-weight:bold;">지금 무료로 확인하기 →</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 설명의무 위반 → 파산절차에 필수적 내용인지 + 채무자 사정 종합 → 재량면책 가능</blockquote>',
      },
      {
        title: '셋째, 재산 은닉·불리한 처분이 문제되는 구체적 사례',
        content:
          '<p><strong style="color:#1e3a5f">파산 전 재산 이전은 면책불허가의 가장 흔한 원인입니다</strong></p>\n<p>실무에서 가장 많이 문제되는 유형: ① 파산 신청 전 <strong>부동산을 배우자나 친인척에게 이전</strong>한 경우, ② <strong>자동차를 시가보다 현저히 낮은 가격에 매각</strong>한 경우, ③ <strong>예금을 인출하여 현금으로 보유</strong>하면서 재산 목록에 기재하지 않은 경우, ④ 생명보험을 <strong>해약하여 제3자에게 증여</strong>한 경우.</p>\n<p>법원은 파산 신청일 기준 <strong>최근 1~2년간의 재산 변동</strong>을 집중적으로 살펴봅니다. 부동산 등기이전, 고액 현금 인출, 보험 해약 등의 이력이 발견되면 면책불허가 사유로 직결될 수 있으므로, 파산 신청 전에 이러한 행위를 절대 해서는 안 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 파산 전 1~2년간 재산 이전·은닉 행위 → 면책불허가 직결</blockquote>',
      },
      {
        title: '넷째, 도박·낭비가 있어도 면책받을 수 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제564조 제2항 재량면책은 최후의 안전장치입니다</strong></p>\n<p>도박이나 과대한 낭비로 채무가 증가한 경우에도, 법원은 <strong>재량면책</strong>(제564조 제2항)을 통해 면책을 허가할 수 있습니다. 재량면책 판단 시 고려 요소:</p>\n<p>① <strong>파산에 이르게 된 경위</strong> — 도박이 주된 원인인지, 사업 실패가 주된 원인인지<br>② <strong>면책불허가 행위의 정도</strong> — 총 채무 대비 도박·낭비 금액의 비율<br>③ <strong>채무자의 갱생 의지</strong> — 반성, 치료 노력, 경제활동 의지 등<br>④ <strong>채권자의 이의 유무</strong> — 채권자가 면책에 이의를 제기했는지 여부</p>\n<p>실무적으로 도박 금액이 총 채무의 <strong>30% 미만</strong>이고 사업 실패 등 다른 주요 원인이 있다면, 재량면책이 인정되는 경우가 적지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 도박·낭비가 있어도 주요 원인이 아니면 재량면책 가능성 있음</blockquote>',
      },
      {
        title: '다섯째, 면책불허가를 예방하는 4가지 실전 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지를 지키면 면책불허가 위험을 크게 줄일 수 있습니다</strong></p>\n<p>① <strong>재산 목록을 빠짐없이 정직하게 기재</strong> — 소액 예금, 보험 해약환급금까지 모두 기재하세요. 고의 누락은 은닉으로 간주됩니다.<br>② <strong>파산관재인의 자료 요청에 성실히 응하기</strong> — 자료 확보가 어려우면 그 사유를 서면으로 소명하세요. "모른다"보다 "이러한 이유로 확보가 어렵다"가 낫습니다.<br>③ <strong>파산 신청 전 재산 처분 금지</strong> — 신청 전 1~2년간 부동산 이전, 고액 현금 인출, 보험 해약 등을 하지 마세요.<br>④ <strong>채권자 목록 완전성 확보</strong> — 소액 채권자, 개인 간 차용 채무까지 빠짐없이 기재하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 정직한 기재 + 성실한 협조 + 재산 처분 금지 + 채권자 완전 기재</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024마6789 사건(2024.12.26 선고) — 설명의무 위반과 재량면책',
        summary:
          '대법원 2024마6789 사건에서 법원은 파산관재인의 자료 요구가 파산절차 진행에 필수적인 내용인지 먼저 판단해야 하고, 채무자의 지적 능력·건강상태 등을 고려해야 한다고 판시했습니다. 나아가 채무를 부담하게 된 경위, 면책불허가 행위의 경미성, 채권자의 이의 미제기 등을 종합하면 재량면책을 허용할 상당한 이유가 있다고 보았습니다.',
        takeaway:
          '면책불허가 사유가 있다고 해서 곧바로 면책이 거부되는 것은 아닙니다. 파산에 이르게 된 경위와 갱생 의지를 적극적으로 소명하면 재량면책을 받을 수 있으므로, 포기하지 말고 전문가와 상담해보세요.',
      },
    ],
    faq: [
      {
        question: '면책불허가 결정을 받으면 다시 신청할 수 없나요?',
        answer:
          '<strong>면책불허가 결정에 대해서는 즉시항고로 불복할 수 있습니다.</strong> 불복이 기각되더라도 면책불허가 사유가 해소된 후에 다시 면책을 신청하는 것이 원칙적으로 가능합니다. 다만 면책 후 7년 이내 재신청은 면책불허가 사유에 해당하므로 시기를 확인해보세요.',
      },
      {
        question: '도박으로 빚을 졌는데 면책이 가능한가요?',
        answer:
          '<strong>도박이 유일한 원인이 아니라면 재량면책 가능성이 있습니다.</strong> 법원은 총 채무 대비 도박 금액 비율, 도박 치료 노력, 반성 정도 등을 종합적으로 고려합니다. 도박치료센터 상담 기록 등을 첨부하면 재량면책에 유리합니다.',
      },
      {
        question: '면책심문기일에 출석하지 않으면 불허가되나요?',
        answer:
          '<strong>정당한 사유 없이 면책심문기일에 불출석하면 매우 불리합니다.</strong> 법원은 채무자의 성실성을 중요하게 보므로, 반드시 출석하세요. 건강 등의 사유로 출석이 어려우면 사전에 사유서를 제출하고 기일 변경을 신청하세요.',
      },
      {
        question: '파산관재인이 요구하는 자료가 없으면 어떡하나요?',
        answer:
          '<strong>"자료가 없다"는 사실 자체를 성실히 소명하면 됩니다.</strong> 대법원 2024마6789 사건에서도 자료 제출이 불충분하더라도 채무자가 보유한 정보의 범위를 넘어서는 요구라면 설명의무 위반으로 보기 어렵다고 판시했습니다.',
      },
      {
        question: '채권자가 면책에 이의를 제기하면 불허가되나요?',
        answer:
          '<strong>채권자의 이의 제기가 곧바로 면책불허가로 이어지지는 않습니다.</strong> 법원이 이의 사유를 심리하여 면책불허가 사유에 해당하는지 독자적으로 판단합니다. 채권자 이의가 없는 것이 유리하지만, 있더라도 재량면책이 가능합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 면책까지 전 과정', href: '/spoke/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '사업 실패 후 개인파산 자격', href: '/spoke/bankruptcy/business-failure-bankruptcy-eligible' },
      { label: '파산 후 신용 회복 타임라인', href: '/spoke/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '파산 압류해제 절차', href: '/spoke/bankruptcy/bankruptcy-seizure-release-process' },
      { label: '면책 후 생활 변화 가이드', href: '/spoke/bankruptcy/bankruptcy-after-discharge-life-changes' },
    ],
  },

  // ── 4. 사업자 개인회생 신청 가능한 경우 ──
  {
    domain: 'rehabilitation',
    slug: 'business-owner-rehabilitation-eligibility',
    keyword: '사업자 개인회생 신청 가능 여부',
    questionKeyword: '사업자도 개인회생 신청이 가능한가요?',
    ctaKeyword: '사업자 개인회생 자격 확인',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '사업자 개인회생 신청 4가지 핵심 요건 | 로앤가이드',
      description:
        '사업을 운영하면서 빚이 쌓였는데 개인회생이 가능할지 궁금하신가요? 사업자 개인회생 요건과 절차를 단계별로 지금 확인하세요.',
    },
    intro:
      '매달 대출 이자와 카드 결제대금이 밀려오고, 거래처 대금까지 막히면서 통장 잔고는 바닥입니다. "사업자는 개인회생이 안 된다"는 이야기를 들었지만, 사실 채무자회생법 제579조에 따르면 개인사업자도 일정 요건을 갖추면 개인회생 신청이 가능합니다. 핵심은 급여소득 외에 영업소득이 있는 경우 "영업소득자"로 분류되어 별도 요건이 적용된다는 점입니다.',
    sections: [
      {
        title: '첫째, 사업자 개인회생 신청의 4가지 핵심 요건',
        content:
          '<p><strong style="color:#1e3a5f">채무 한도, 소득 요건, 계속적 수입, 변제 가능성을 모두 충족해야 합니다</strong></p>\n<p>채무자회생법 제579조에 따른 개인회생 신청 요건:</p>\n<p>① <strong>담보채무 15억원 이하, 무담보채무 10억원 이하</strong> — 사업 관련 채무를 포함한 총 채무가 이 기준 이내여야 합니다<br>② <strong>계속적·반복적 수입</strong> — 영업소득이 있거나, 사업을 폐업하고 급여소득이 있어야 합니다<br>③ <strong>장래 변제 가능성</strong> — 향후 3~5년간 변제계획을 이행할 수 있는 소득이 예상되어야 합니다<br>④ <strong>부실경위의 정당성</strong> — 파산에 준하는 면책불허가 사유가 없어야 합니다</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 담보 15억 + 무담보 10억 이하 + 계속적 수입 + 변제 가능성</blockquote>',
      },
      {
        title: '둘째, 영업소득자와 급여소득자의 차이',
        content:
          '<p><strong style="color:#1e3a5f">사업을 계속하면 영업소득자, 폐업 후 취업하면 급여소득자로 분류됩니다</strong></p>\n<p><strong>영업소득자</strong>는 사업을 계속 운영하면서 개인회생을 신청하는 경우입니다. 월 소득이 불규칙하므로 <strong>최근 1년간 평균 소득</strong>을 기준으로 가용소득을 산정합니다. 세금 신고서, 통장 거래내역 등으로 소득을 입증해야 합니다.</p>\n<p><strong>급여소득자</strong>는 사업을 폐업하고 직장에 취업한 경우입니다. 급여명세서로 소득을 명확히 입증할 수 있어 상대적으로 절차가 수월합니다.</p>\n<p style="margin-top:12px;padding:14px 16px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #ff9800;border-radius:8px;font-size:0.95em;">💬 영업소득자인지 급여소득자인지 판단이 어렵다면, AI가 내 상황을 빠르게 분석해드립니다. <a href="https://www.lawnguide.co.kr/chat?domain=rehabilitation" style="color:#1e3a5f;font-weight:bold;">지금 무료로 확인하기 →</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업 계속 = 영업소득자(평균 소득 산정), 폐업 후 취업 = 급여소득자(급여 기준)</blockquote>',
      },
      {
        title: '셋째, 사업자가 자주 부딪히는 3가지 난관과 해결법',
        content:
          '<p><strong style="color:#1e3a5f">소득 불규칙, 채무 한도 초과, 사업 계속 여부가 핵심 쟁점입니다</strong></p>\n<p><strong>난관 1: 소득이 불규칙하다</strong> — 영업소득자는 최근 1년간 월평균 소득을 기준으로 가용소득을 산정합니다. 극단적으로 소득이 적은 달이 있더라도 연간 평균이 최저생계비 이상이면 됩니다.</p>\n<p><strong>난관 2: 채무 한도를 초과한다</strong> — 무담보채무가 10억원을 넘으면 개인회생이 불가능합니다. 이 경우 개인파산 또는 법인회생(법인 대표의 경우)을 검토해야 합니다.</p>\n<p><strong>난관 3: 사업을 계속해야 하는데 가능한가</strong> — 개인회생 중에도 사업을 계속할 수 있습니다. 다만 법원 허가 없이 새로운 채무를 부담하면 변제계획 불인가 사유가 될 수 있으니 주의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소득 불규칙 → 연간 평균 / 채무 한도 초과 → 파산 전환 / 사업 계속 가능</blockquote>',
      },
      {
        title: '넷째, 사업자 개인회생 필요 서류 목록',
        content:
          '<p><strong style="color:#1e3a5f">사업자는 일반 개인회생보다 소득 증빙 서류가 더 많이 필요합니다</strong></p>\n<p>공통 서류: ① <strong>개인회생 신청서</strong>, ② <strong>채권자 목록</strong>, ③ <strong>재산 목록</strong>, ④ <strong>수입·지출에 관한 목록</strong>, ⑤ <strong>주민등록등본·초본</strong>.</p>\n<p>사업자 추가 서류: ⑥ <strong>사업자등록증 사본</strong>(또는 폐업확인서), ⑦ <strong>최근 2년간 종합소득세 신고서</strong>, ⑧ <strong>부가가치세 신고서</strong>, ⑨ <strong>사업용 통장 거래내역</strong>(최근 1~2년), ⑩ <strong>거래처 미수금·미지급금 내역</strong>, ⑪ <strong>임대차계약서</strong>(사업장).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소득세·부가세 신고서 + 사업용 통장 내역 = 사업자 핵심 증빙</blockquote>',
      },
      {
        title: '다섯째, 변제계획 수립과 인가 후 생활',
        content:
          '<p><strong style="color:#1e3a5f">3~5년간 가용소득의 일정 비율을 변제하면 나머지 채무가 면책됩니다</strong></p>\n<p>변제계획은 <strong>최소 3년, 최대 5년</strong> 기간으로 수립합니다. 월 소득에서 최저생계비와 필수 지출을 제외한 <strong>가용소득</strong>을 매월 변제에 사용하며, 변제계획이 법원에서 인가되면 채권자의 추심·독촉이 <strong>법적으로 금지</strong>됩니다.</p>\n<p>변제계획 이행 중에도 <strong>사업 운영, 직장 생활, 은행 급여 계좌</strong> 사용이 가능합니다. 다만 신규 대출이나 신용카드 발급은 제한됩니다. 변제를 완료하면 나머지 채무가 면책되고, 면책 후 <strong>3~5년</strong> 이내에 신용 정상화가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 3~5년 변제 완료 → 잔여 채무 면책 → 신용 정상화</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024다221042 사건(2025.10.16 선고) — 개인회생 면책과 보증인 구상금',
        summary:
          '대법원 2024다221042 사건에서 법원은 채무자가 변제계획에 따른 변제를 완료하여 면책결정을 받았다면, 개인회생채권자목록에 보증인이 누락되었더라도 면책결정의 효력이 보증인의 구상금채권에 미친다고 판시했습니다. 변제계획을 성실히 이행한 채무자의 면책 기대를 보호한 판결입니다.',
        takeaway:
          '사업자가 개인회생을 신청할 때 보증인 관련 채권도 빠짐없이 채권자 목록에 기재하되, 설령 누락되더라도 변제계획을 성실히 이행하면 면책의 효력이 넓게 인정될 수 있다는 점을 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '사업을 폐업하지 않아도 개인회생 신청이 가능한가요?',
        answer:
          '<strong>폐업하지 않아도 가능합니다.</strong> 사업을 계속 운영하면서 "영업소득자"로 개인회생을 신청할 수 있습니다. 다만 사업 수입이 불규칙하면 소득 입증이 더 까다로울 수 있으므로, 최근 1년간 세금 신고서와 통장 거래내역을 꼼꼼히 준비하세요.',
      },
      {
        question: '개인회생 중에 새로운 사업 거래를 할 수 있나요?',
        answer:
          '<strong>기존 사업 범위 내에서는 거래가 가능합니다.</strong> 다만 법원 허가 없이 새로운 대규모 채무를 부담하거나 보증을 서면 변제계획 불인가·취소 사유가 될 수 있으므로 주의하세요.',
      },
      {
        question: '배우자의 소득도 가용소득 산정에 포함되나요?',
        answer:
          '<strong>배우자의 소득은 직접 포함되지 않습니다.</strong> 가용소득은 신청인 본인의 소득을 기준으로 산정합니다. 다만 배우자의 소득이 가정 생활비를 부담하는 데 기여하는 경우, 신청인의 생계비 산정에 간접적으로 영향을 줄 수 있습니다.',
      },
      {
        question: '개인회생 신청 후 채권자의 압류가 풀리나요?',
        answer:
          '<strong>개인회생 개시결정이 나면 강제집행이 중지됩니다.</strong> 채무자회생법 제593조에 따라 급여 압류, 부동산 경매 등이 중지되며, 변제계획 인가 시 효력을 잃습니다. 다만 개시결정 전에는 압류가 그대로 유지되므로, 신속한 신청이 중요합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 사전 체크리스트', href: '/spoke/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 vs 개인파산 비교', href: '/spoke/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 변제금 계산법', href: '/spoke/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 신청 절차 A to Z', href: '/spoke/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 채권자 추심 중지', href: '/spoke/rehabilitation/rehabilitation-creditor-collection-stop' },
    ],
  },

  // ── 5. 개인회생 vs 개인워크아웃 비교 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-vs-workout-comparison',
    keyword: '개인회생 개인워크아웃 비교',
    questionKeyword: '개인회생과 개인워크아웃 중 어떤 것이 나에게 유리한가요?',
    ctaKeyword: '개인회생 워크아웃 비교 확인',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '개인회생 vs 워크아웃 6가지 핵심 차이 비교 | 로앤가이드',
      description:
        '개인회생과 개인워크아웃 중 어떤 제도가 유리한지 고민되시나요? 6가지 기준으로 두 제도의 차이를 한눈에 지금 확인하세요.',
    },
    intro:
      '독촉 전화가 하루에도 몇 번씩 울리고, "개인회생"과 "개인워크아웃" 중 뭘 해야 할지 밤마다 검색하고 있습니다. 두 제도 모두 채무 부담을 줄여주지만, 법적 효력·감면 비율·진행 기간이 크게 다릅니다. 개인회생은 법원이 주도하는 법적 절차이고, 개인워크아웃은 신용회복위원회를 통한 사적 조정 절차입니다. 내 채무 규모와 소득 상황에 따라 유리한 제도가 달라지므로, 정확한 비교가 중요합니다.',
    sections: [
      {
        title: '첫째, 두 제도의 근본적 차이 — 법적 절차 vs 사적 조정',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 법원 인가, 개인워크아웃은 채권자 동의가 핵심입니다</strong></p>\n<p><strong>개인회생</strong>은 채무자회생법에 근거하여 <strong>법원</strong>이 변제계획을 인가하는 법적 절차입니다. 법원 인가가 나면 채권자의 동의 여부와 관계없이 <strong>강제력</strong>이 발생합니다. 채권자는 추심·독촉·소송을 할 수 없습니다.</p>\n<p><strong>개인워크아웃</strong>은 <strong>신용회복위원회</strong>가 채무자와 채권자(금융기관) 사이를 중재하는 사적 조정 절차입니다. 채권자 과반수 이상의 동의가 필요하며, 사채·개인 간 채무는 포함되지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 개인회생 = 법원(강제력), 워크아웃 = 신용회복위원회(채권자 동의 필요)</blockquote>',
      },
      {
        title: '둘째, 채무 감면 비율과 변제 기간 비교',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 최대 90% 감면, 워크아웃은 이자 감면 위주입니다</strong></p>\n<p><strong>개인회생</strong>: 변제계획에 따라 3~5년간 변제 후 잔여 채무가 면책됩니다. 실무적으로 원금의 <strong>70~90% 감면</strong>이 일반적이며, 최저변제액은 청산가치(파산 시 배당받을 금액) 이상이어야 합니다.</p>\n<p><strong>개인워크아웃</strong>: 원금 감면은 제한적(최대 <strong>30~50%</strong>)이고, 주로 <strong>이자 감면과 변제기간 연장</strong>에 초점이 맞춰져 있습니다. 변제기간은 최대 <strong>8~10년</strong>까지 연장 가능합니다.</p>\n<p style="margin-top:12px;padding:14px 16px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #ff9800;border-radius:8px;font-size:0.95em;">💬 내 채무에 어떤 제도가 유리한지 AI가 빠르게 분석해드립니다. <a href="https://www.lawnguide.co.kr/chat?domain=rehabilitation" style="color:#1e3a5f;font-weight:bold;">지금 무료로 확인하기 →</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 감면 폭 → 회생(70~90%) > 워크아웃(30~50%) / 기간 → 회생(3~5년) < 워크아웃(8~10년)</blockquote>',
      },
      {
        title: '셋째, 신청 자격과 채무 유형별 적용 범위',
        content:
          '<p><strong style="color:#1e3a5f">워크아웃은 금융기관 채무만, 개인회생은 모든 채무를 포함합니다</strong></p>\n<p><strong>개인회생 신청 자격</strong>: 담보채무 15억원 이하, 무담보채무 10억원 이하이며, 계속적·반복적 수입이 있는 모든 개인. 은행 대출, 사채, 개인 간 차용, 신용카드, 거래처 미수금 등 <strong>모든 유형의 채무</strong>가 대상입니다.</p>\n<p><strong>워크아웃 신청 자격</strong>: 총 채무 15억원 이하(무담보 10억원 이하)이며, 3개월 이상 연체된 <strong>금융기관 채무</strong>만 대상입니다. 사채업자, 개인 간 차용, 세금 등은 포함되지 않습니다.</p>\n<p>따라서 사채나 개인 간 채무가 많다면 개인회생이, 금융기관 채무 위주라면 워크아웃도 검토할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사채·개인 채무 포함 → 개인회생 / 금융기관 채무만 → 워크아웃 가능</blockquote>',
      },
      {
        title: '넷째, 강제집행 중지 효력과 신용 회복 속도',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 법적 강제집행 중지, 워크아웃은 협의 기반 추심 중단입니다</strong></p>\n<p><strong>개인회생</strong>: 개시결정 시 급여 압류, 부동산 경매 등 <strong>모든 강제집행이 법적으로 중지</strong>됩니다(채무자회생법 제593조). 변제 완료 후 면책 결정 시 신용정보 등록이 해제되며, <strong>3~5년</strong> 내 신용 정상화가 가능합니다.</p>\n<p><strong>워크아웃</strong>: 참여 금융기관의 <strong>추심이 중단</strong>되지만 법적 강제력은 없습니다. 비참여 채권자의 추심은 계속될 수 있습니다. 변제 완료 후 신용정보 등록이 해제되며, 약정 이행 기간에 따라 <strong>8~10년</strong> 후 정상화됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 강제집행 중지 = 회생(법적 효력) vs 워크아웃(협의 기반, 비참여 채권자 추심 가능)</blockquote>',
      },
      {
        title: '다섯째, 어떤 제도가 나에게 맞는지 판단하는 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">채무 유형, 감면 필요성, 절차 속도를 기준으로 판단하세요</strong></p>\n<p><strong>기준 1: 채무 유형</strong> — 사채·개인 간 채무가 있다면 → 개인회생. 금융기관 채무만 있다면 → 워크아웃도 가능.</p>\n<p><strong>기준 2: 감면 필요성</strong> — 원금의 50% 이상 감면이 필요하다면 → 개인회생. 이자 감면과 기간 연장만으로 변제 가능하다면 → 워크아웃.</p>\n<p><strong>기준 3: 절차 부담</strong> — 법원 절차에 대한 부담이 크다면 → 워크아웃이 상대적으로 간편. 강제집행 중지가 급하다면 → 개인회생이 확실.</p>\n<p>두 제도를 동시에 진행할 수는 없으므로, 자신의 상황에 맞는 제도를 먼저 선택하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사채 있으면 회생 / 대폭 감면 필요하면 회생 / 간편한 절차 원하면 워크아웃</blockquote>',
      },
    ],
    comparison: {
      title: '개인회생 vs 개인워크아웃 핵심 비교표',
      headers: ['구분', '개인회생', '개인워크아웃'],
      rows: [
        { label: '근거', values: ['채무자회생법 (법원 절차)', '신용회복위원회 (사적 조정)'] },
        { label: '채무 감면', values: ['원금 70~90% 감면 가능', '원금 30~50%, 이자 감면 위주'] },
        { label: '변제 기간', values: ['3~5년', '최대 8~10년'] },
        { label: '대상 채무', values: ['모든 채무 (사채, 개인 간 포함)', '금융기관 채무만'] },
        { label: '강제집행 중지', values: ['법적 강제력 있음', '협의 기반, 비참여 채권자 추심 가능'] },
        { label: '신용 회복', values: ['면책 후 3~5년 내 정상화', '변제 완료 후 정상화 (8~10년)'] },
      ],
    },
    cases: [
      {
        title: '대법원 2022다256327 사건(2025.05.15 선고) — 개인회생 면책과 별제권자',
        summary:
          '대법원 2022다256327 사건에서 법원은 개인회생 면책결정이 확정되면 별제권자(담보권자)도 채무자를 상대로 종전 개인회생채권의 이행을 소구할 수 없다고 판시했습니다. 면책은 변제계획에 따라 변제한 것을 제외하고 모든 개인회생채권에 대한 책임을 면제한다는 점을 명확히 했습니다.',
        takeaway:
          '개인회생 변제계획을 성실히 이행하면 담보권자를 포함한 모든 채권자에 대해 면책 효력이 미칩니다. 워크아웃과 달리 법적 강제력이 있으므로, 채무 규모가 크고 다양한 채권자가 있다면 개인회생이 더 확실한 보호를 제공합니다.',
      },
    ],
    faq: [
      {
        question: '개인워크아웃을 진행하다가 개인회생으로 전환할 수 있나요?',
        answer:
          '<strong>워크아웃 약정을 해지하고 개인회생을 신청할 수 있습니다.</strong> 다만 워크아웃 진행 중 변제한 금액이 개인회생에서 별도로 공제되지는 않으므로, 전환 시점의 잔여 채무를 기준으로 새로 변제계획을 수립해야 합니다.',
      },
      {
        question: '워크아웃은 비용이 들지 않나요?',
        answer:
          '<strong>워크아웃 자체는 수수료가 없습니다.</strong> 신용회복위원회에 무료로 신청할 수 있습니다. 개인회생도 법원 비용(인지대·송달료 등)이 약 30~50만원 정도로 비교적 저렴합니다. 변호사 선임 비용은 별도입니다.',
      },
      {
        question: '두 제도 모두 신용등급에 영향을 주나요?',
        answer:
          '<strong>두 제도 모두 신용정보에 등록됩니다.</strong> 개인회생은 "개인회생 개시" 사실이, 워크아웃은 "신용회복지원 확정" 사실이 등록됩니다. 변제를 성실히 완료하면 등록 정보가 해제되어 신용 점수가 회복됩니다.',
      },
      {
        question: '사채(대부업체) 빚이 많은데 워크아웃이 가능한가요?',
        answer:
          '<strong>등록 대부업체의 채무는 워크아웃에 포함될 수 있습니다.</strong> 다만 미등록 사채업자나 개인 간 차용 채무는 포함되지 않으므로, 이러한 채무가 상당 부분을 차지한다면 개인회생이 더 적합합니다.',
      },
      {
        question: '자영업자인데 워크아웃과 회생 중 뭐가 유리한가요?',
        answer:
          '<strong>자영업자는 대부분 개인회생이 유리합니다.</strong> 거래처 미수금, 임대료 연체 등 비금융 채무가 많고, 원금 대폭 감면이 필요한 경우가 많기 때문입니다. 워크아웃은 금융기관 채무만 조정하므로 사업 관련 채무 전체를 해결하기 어렵습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 vs 개인파산 비교', href: '/spoke/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 사전 체크리스트', href: '/spoke/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 신청 절차 A to Z', href: '/spoke/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '신용카드 채무 개인회생 포함 여부', href: '/spoke/rehabilitation/rehabilitation-credit-card-debt-included' },
      { label: '사업자 개인회생 신청 자격', href: '/spoke/rehabilitation/business-owner-rehabilitation-eligibility' },
    ],
  },
];
