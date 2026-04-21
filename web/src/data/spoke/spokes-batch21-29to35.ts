import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [교통사고 피해자]의 [보험금 청구 절차를 모르는 상황]에서 [접수부터 지급까지 단계별 행동 안내]를 돕는 페이지다.
// 2. 이 페이지는 [강제추행 혐의를 받는 피의자]의 [수사부터 재판까지 어떻게 진행되는지 모르는 상황]에서 [단계별 방어 전략과 대응 준비]를 돕는 페이지다.
// 3. 이 페이지는 [성폭력 피해자]의 [고소 절차와 방법을 모르는 상황]에서 [경찰 신고부터 법원 절차까지 단계별 안내]를 돕는 페이지다.
// 4. 이 페이지는 [스토킹 피해자]의 [신고 후 접근금지까지의 절차를 모르는 상황]에서 [경찰 신고와 접근금지 신청 방법 안내]를 돕는 페이지다.
// 5. 이 페이지는 [스토킹 피해자]의 [지금 당장 가해자를 떼어놓아야 하는 긴급 상황]에서 [긴급응급조치 요청 방법과 즉시 행동 안내]를 돕는 페이지다.
// 6. 이 페이지는 [불법촬영 피해자]의 [촬영물 발견 후 어떻게 해야 하는지 모르는 상황]에서 [신고 절차와 삭제 요청 방법 안내]를 돕는 페이지다.
// 7. 이 페이지는 [음주운전으로 적발된 운전자]의 [앞으로 형사 절차가 어떻게 진행되는지 모르는 상황]에서 [적발 후 기소까지 단계별 절차 안내]를 돕는 페이지다.

export const spokesBatch21_29to35: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. traffic-accident / insurance-claim-process-summary
  // ───────────────────────────────────────────
  // 2. sex-crime / sexual-assault-investigation-to-trial
  // ───────────────────────────────────────────
  // 3. sex-crime / sexual-violence-complaint-process
  // ───────────────────────────────────────────
  // 4. stalking / stalking-report-and-restraining-order
  // ───────────────────────────────────────────
  // 5. stalking / emergency-protective-measures
  // ───────────────────────────────────────────
  {
    domain: 'stalking',
    slug: 'emergency-protective-measures',
    keyword: '스토킹 긴급응급조치 요청',
    questionKeyword: '스토킹 피해자 긴급응급조치는 어떻게 요청하나요?',
    ctaKeyword: '스토킹 긴급응급조치',
    type: '상황형',
    meta: {
      title: '스토킹 긴급응급조치 요청 방법 3가지 | 로앤가이드',
      description: '지금 스토킹 피해를 당하고 있어 긴급 보호가 필요하다면 긴급응급조치 요청 방법 3가지를 지금 확인하세요.',
    },
    intro:
      '<p>새벽 2시, 현관문 앞에 누군가 서 있습니다. 벨이 울리고, 문을 두드리는 소리가 멈추지 않습니다. 전화를 차단했는데도 새 번호로 계속 연락이 옵니다. 이 순간 가장 먼저 해야 할 것은 112 신고입니다. 스토킹처벌법에 따라 경찰은 즉시 긴급응급조치를 취할 수 있습니다.</p>',
    sections: [
      {
        title: '긴급응급조치란 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄의 처벌 등에 관한 법률 제4조에 따라, 경찰은 스토킹 행위 신고를 접수하면 즉시 긴급응급조치를 취할 수 있습니다</strong></p>\n<p>긴급응급조치는 법원의 결정 없이 경찰이 현장에서 바로 취할 수 있는 보호 조치입니다.</p>\n<ul>\n<li><strong>접근금지</strong> — 가해자에게 피해자로부터 100미터 이내 접근을 금지합니다</li>\n<li><strong>연락금지</strong> — 전화, 문자, 이메일, SNS 등 모든 수단을 통한 연락을 금지합니다</li>\n<li><strong>퇴거</strong> — 가해자가 피해자의 주거지 부근에 있으면 즉시 퇴거를 명합니다</li>\n</ul>\n<p>긴급응급조치의 효력은 발령 후 <strong>즉시 발생</strong>합니다. 가해자가 이를 위반하면 별도의 처벌을 받게 됩니다.</p>',
      },
      {
        title: '지금 당장 해야 할 3가지 행동',
        content:
          '<p><strong style="color:#1e3a5f">위급한 상황에서는 다음 순서대로 행동하세요</strong></p>\n<ul>\n<li><strong>1. 112 신고</strong> — "스토킹 피해입니다. 긴급응급조치를 요청합니다"라고 명확히 말하세요. 스토킹이라는 단어를 반드시 사용하세요</li>\n<li><strong>2. 안전한 장소로 이동</strong> — 편의점, 경비실, 이웃집 등 사람이 있는 곳으로 이동하세요. 혼자 있지 마세요</li>\n<li><strong>3. 증거 확보</strong> — 가능하다면 가해자의 행위를 녹음·촬영하세요. 어려우면 112 통화 녹음만으로도 증거가 됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 위험한 상황이라면</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">스토킹 피해 긴급 대응 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '긴급응급조치 이후 — 잠정조치로 보호 강화',
        content:
          '<p><strong style="color:#1e3a5f">긴급응급조치는 임시 조치이므로, 이후 검사를 통해 법원에 잠정조치를 청구하여 보호 기간을 연장해야 합니다</strong></p>\n<ul>\n<li><strong>잠정조치 청구</strong> — 검사는 직권 또는 경찰의 신청에 의해 법원에 잠정조치를 청구합니다</li>\n<li><strong>잠정조치 기간</strong> — 최대 2개월이며, 2회까지 연장 가능(총 6개월)</li>\n<li><strong>잠정조치 종류</strong> — 접근금지, 전기통신 접근금지, 피해자 주거로부터 퇴거, 유치장 유치 등</li>\n</ul>\n<p>경찰이 긴급응급조치를 취한 후 검사에게 잠정조치 청구를 신청하지 않으면, <strong>피해자가 직접 검찰에 잠정조치 청구를 요청</strong>할 수 있습니다.</p>',
      },
      {
        title: '피해자가 활용할 수 있는 긴급 지원 기관',
        content:
          '<p><strong style="color:#1e3a5f">스토킹 피해자를 위한 긴급 지원 기관은 24시간 운영됩니다</strong></p>\n<ul>\n<li><strong>112 긴급 신고</strong> — 즉각적인 경찰 출동과 긴급응급조치 요청</li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담, 긴급 보호시설 연계, 법률 상담 지원</li>\n<li><strong>범죄피해자지원센터 1577-1295</strong> — 이사비, 임시 거처, 심리 상담 지원</li>\n<li><strong>스마트치안앱(112)</strong> — 위치 자동 전송 기능으로 음성 신고가 어려운 상황에서 활용 가능</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">24시간 긴급 연락: 112(경찰) / 1366(여성긴급전화) / 1577-1295(피해자 지원)</blockquote>',
      },
    ],
    cases: [
      {
        title: '스토킹 잠정조치 연장 결정의 적법성',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법에 따른 잠정조치 결정에 대한 항고에는 형사소송법 제407조(원심법원의 항고 기각)가 준용되지 않으며, 항고장을 제출받은 원심법원은 3일 이내에 기록을 항고법원에 보내야 한다고 판시했습니다.',
        takeaway:
          '잠정조치(접근금지)는 법원이 엄격하게 관리하는 강력한 보호 수단입니다. 가해자가 잠정조치에 불복하더라도 피해자 보호는 계속됩니다.',
      },
    ],
    faq: [
      {
        question: '긴급응급조치를 받으면 언제까지 효력이 있나요?',
        answer:
          '긴급응급조치는 <strong>임시적 조치</strong>로, 이후 검사가 법원에 잠정조치를 청구하여 최대 6개월까지 보호 기간을 연장할 수 있습니다.',
      },
      {
        question: '가해자가 긴급응급조치를 무시하고 접근하면 어떻게 되나요?',
        answer:
          '경찰의 긴급응급조치를 위반하면 <strong>현행범으로 체포될 수 있으며</strong>, 잠정조치 위반 시 2년 이하의 징역 또는 2천만 원 이하의 벌금에 처합니다.',
      },
      {
        question: '새벽에도 112에 신고하면 경찰이 출동하나요?',
        answer:
          '<strong>112는 24시간 운영</strong>됩니다. 스토킹 신고는 긴급 사안으로 분류되어 어떤 시간대든 경찰이 출동합니다.',
      },
      {
        question: '같은 건물에 사는 사람이 스토킹하면 어떻게 하나요?',
        answer:
          '동일 건물 거주자에 대해서도 <strong>접근금지와 퇴거명령이 가능</strong>합니다. 경찰에 상황을 설명하고 긴급응급조치를 요청하세요.',
      },
    ],
    cta: {
      text: '스토킹 긴급 대응 무료 진단받기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 신고~접근금지 절차', href: '/spoke/stalking/stalking-report-and-restraining-order' },
      { label: '스토킹 피해 증거 수집법', href: '/spoke/stalking/evidence-collection-guide' },
      { label: '스토킹 처벌 기준과 형량', href: '/spoke/stalking/punishment-criteria' },
      { label: '데이트 폭력 대응 가이드', href: '/spoke/stalking/dating-violence-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. digital-sex-crime / hidden-camera-report-and-deletion-procedure
  // ───────────────────────────────────────────
  // 7. dui / dui-criminal-procedure-overview
];
