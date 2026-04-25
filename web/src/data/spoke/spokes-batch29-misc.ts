import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 교통사고 3 + 이혼/양육비 3 + 회생/파산 3 + 전세 2 = 11개 (batch29)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch29Misc: SpokePage[] = [
  // ── 교통사고 1. 자전거 사고 보상 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-compensation',
    keyword: '자전거 사고 보상 청구',
    questionKeyword: '자전거를 타다 교통사고를 당했는데 보상을 받을 수 있나요?',
    ctaKeyword: '자전거 사고 보상 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '자전거 사고 보상 청구 방법 4단계 정리 | 로앤가이드',
      description:
        '자전거를 타다 자동차와 사고가 났다면, 치료비·위자료·휴업손해 보상 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>자전거로 출퇴근하다가 우회전하는 차량에 부딪혔습니다. 뼈가 부러져 입원해야 하는데, 상대 운전자는 "자전거가 잘못이다"라고 주장합니다. 자전거도 도로교통법상 차로 분류되지만, 자동차 대비 약자 보호 원칙이 적용되어 보상을 받을 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 사고 현장 증거 확보(사진, 블랙박스)',
      '2단계: 경찰 사고 신고',
      '3단계: 상대방 보험회사에 보상 청구',
      '4단계: 과실비율 협의 또는 소송',
    ],
    sections: [
      {
        title: '자전거 사고 보상 범위',
        content:
          '<p><strong style="color:#1e3a5f">자동차와의 사고에서 자전거 운전자는 치료비, 휴업손해, 위자료를 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 입원·통원 치료비 전액. 향후 치료비도 포함됩니다.</li>\n<li><strong>휴업손해</strong> — 치료로 일하지 못한 기간의 소득 손실입니다.</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 보상입니다.</li>\n<li><strong>자전거 수리비</strong> — 파손된 자전거의 수리 또는 교체 비용입니다.</li>\n<li><strong>후유장해 보상</strong> — 치료 후에도 장해가 남으면 추가 보상을 받습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 자동차 대 자전거 사고에서 자동차 운전자의 과실이 더 크게 인정되는 것이 일반적입니다.</blockquote>',
      },
      {
        title: '자전거 사고 과실비율 기준',
        content:
          '<p><strong style="color:#1e3a5f">자전거는 자동차보다 약자이므로 과실비율에서 유리합니다.</strong></p>\n<ul>\n<li><strong>직진 자전거 vs 우회전 차량</strong> — 차량 과실 70~80% 이상이 일반적입니다.</li>\n<li><strong>횡단보도 자전거</strong> — 자전거를 타고 횡단보도를 건너면 과실이 가중될 수 있지만, 끌고 건너면 보행자로 취급됩니다.</li>\n<li><strong>자전거 전용도로</strong> — 자전거 전용도로에서의 사고는 자동차 과실이 더 높습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>자전거 사고 보상 가능 금액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 경위, 부상 정도를 입력하면 예상 보상액을 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자전거 사고 증거 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 현장 증거를 최대한 확보하세요.</strong></p>\n<ul>\n<li><strong>사고 현장 사진</strong> — 도로 상태, 자전거 파손, 부상 부위를 촬영합니다.</li>\n<li><strong>블랙박스·CCTV</strong> — 상대 차량 블랙박스, 주변 상가·아파트 CCTV를 확보 요청합니다.</li>\n<li><strong>경찰 신고</strong> — 가능한 한 112에 신고하여 사고 접수를 받으세요. 교통사고 조사 기록이 과실비율 판단의 기초가 됩니다.</li>\n<li><strong>목격자 연락처</strong> — 사고를 목격한 행인의 연락처를 받아두세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실손의료보험과 교통사고 보상',
        summary:
          '서울서부지법 2024나44829 사건(2025.04.11)에서 법원은 실손의료보험 특약의 본인부담금 보상 범위에 대해 판단하면서, 교통사고로 인한 치료비 보상의 기준을 제시했습니다.',
        takeaway:
          '자전거 사고 치료비는 상대방 자동차보험에서 먼저 청구하고, 부족분은 본인의 실손보험으로 보충할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '자전거 보험이 없어도 보상을 받을 수 있나요?',
        answer:
          '<p>자전거 보험 유무와 관계없이 상대방 자동차보험에서 보상을 받습니다. 상대방의 대인배상으로 치료비, 위자료 등을 청구하세요.</p>',
      },
      {
        question: '횡단보도에서 자전거를 타고 건너다 사고가 났습니다.',
        answer:
          '<p>자전거를 타고 횡단보도를 건너면 보행자가 아닌 차량으로 취급됩니다. 과실이 가중될 수 있지만, 자동차 운전자의 주의의무는 여전히 큽니다.</p>',
      },
      {
        question: '자전거 헬멧을 안 쓰고 있었는데 과실이 늘어나나요?',
        answer:
          '<p>헬멧 미착용이 과실비율에 영향을 줄 수 있지만, 사고 원인 자체와는 별개입니다. 5~10% 정도의 과실이 가산될 수 있습니다.</p>',
      },
      {
        question: '전동킥보드도 자전거와 같은 보상을 받나요?',
        answer:
          '<p>전동킥보드는 개인형 이동장치로 분류되며, 자전거와 유사한 보호를 받습니다. 다만 도로교통법상 통행 규칙이 다르므로 과실비율은 달라질 수 있습니다.</p>',
      },
    ],
    cta: { text: '자전거 사고 보상 청구 AI로 즉시 시작하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '보험회사 합의 주의', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 보상 절차', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '경미 사고 보상', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation' },
      { label: '전동킥보드 사고', href: '/guide/traffic-accident/traffic-accident-electric-scooter-liability' },
    ],
  },

  // ── 교통사고 2. 어린이 보행자 사고 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-child-pedestrian-claim',
    keyword: '어린이 교통사고 보상 청구',
    questionKeyword: '아이가 교통사고를 당했는데 보상을 어떻게 받나요?',
    ctaKeyword: '어린이 교통사고 보상 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '어린이 교통사고 보상 청구 — 스쿨존 가중처벌 포함 | 로앤가이드',
      description:
        '자녀가 교통사고를 당했다면, 어린이 보호구역 가중처벌과 보상 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>초등학교 앞에서 아이가 차에 치여 다리가 부러졌습니다. 아이가 횡단보도를 건너고 있었는데 우회전 차량이 멈추지 않았습니다. 어린이 보호구역(스쿨존)에서의 사고는 특정범죄가중처벌법에 따라 가중처벌되며, 보상도 더 높게 인정될 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 119 신고·응급 치료',
      '2단계: 경찰 사고 접수·블랙박스 확보',
      '3단계: 보험회사 보상 청구',
      '4단계: 형사 합의·민사 보상 진행',
    ],
    sections: [
      {
        title: '어린이 보호구역 사고의 법적 효과',
        content:
          '<p><strong style="color:#1e3a5f">스쿨존 사고는 민식이법(특가법 제5조의13)에 따라 가중처벌 대상으로 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>사망 시</strong> — 무기징역 또는 3년 이상의 징역</li>\n<li><strong>상해 시</strong> — 1년 이상 15년 이하의 징역 또는 500만원~3,000만원 벌금</li>\n<li><strong>보험 면책 불가</strong> — 12대 중과실에 해당하여 종합보험에 가입했어도 형사처벌이 면제되지 않습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 어린이 보호구역 사고에서 운전자의 과실은 거의 100% 인정될 수 있습니다. 어린이의 과실은 거의 인정되지 않습니다.</blockquote>',
      },
      {
        title: '어린이 교통사고 보상 항목',
        content:
          '<p><strong style="color:#1e3a5f">성인보다 더 높은 보상이 인정되는 항목이 있습니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 입원·통원·재활 치료비 전액</li>\n<li><strong>후유장해 보상</strong> — 성장기 아동의 장해는 향후 수십 년의 노동능력 상실로 보상액이 큽니다.</li>\n<li><strong>위자료</strong> — 어린이 본인 + 부모의 위자료가 각각 인정될 수 있습니다.</li>\n<li><strong>간병비</strong> — 입원 중 부모의 간병에 대한 비용도 청구 가능합니다.</li>\n<li><strong>성장장해</strong> — 골절 등으로 성장판이 손상되면 성장장해에 대한 보상도 추가됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>어린이 교통사고 보상 예상액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 경위와 부상 정도를 입력하면 예상 보상액을 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부모가 해야 할 일 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 부모가 즉시 해야 할 행동입니다.</strong></p>\n<ul>\n<li><strong>119·112 동시 신고</strong> — 응급 치료와 사고 접수를 동시에 진행하세요.</li>\n<li><strong>CCTV·블랙박스 확보 요청</strong> — 스쿨존에는 CCTV가 설치되어 있으므로 경찰에 확보를 요청하세요.</li>\n<li><strong>진단서 발급</strong> — 초진 진단서를 가능한 한 발급받으세요. 진단 주수가 보상과 형사처벌에 영향을 줍니다.</li>\n<li><strong>보험회사 합의 서두르지 마세요</strong> — 치료가 끝나기 전에 합의하면 향후 치료비를 못 받을 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도급인의 안전보건조치 의무와 업무상 과실치사상',
        summary:
          '대법원 2025도4428 사건(대법원, 2025.08.14 선고)에서 법원은 사업주의 안전·보건조치 의무를 엄격히 해석하면서, 사고 예방을 위한 주의의무의 범위를 판시했습니다.',
        takeaway:
          '교통사고에서도 운전자의 주의의무는 매우 높게 요구됩니다. 특히 어린이 보호구역에서는 서행·일시정지 의무를 위반하면 거의 100% 과실로 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '아이가 갑자기 뛰어나왔어도 운전자 과실인가요?',
        answer:
          '<p>어린이 보호구역에서는 어린이의 돌발행동을 예견하고 서행해야 할 의무가 있습니다. 아이의 과실이 일부 인정되더라도 운전자 과실이 70~90% 이상입니다.</p>',
      },
      {
        question: '보험회사가 빨리 합의하자고 하는데 응해야 하나요?',
        answer:
          '<p>치료가 완료된 후 합의하세요. 조기 합의하면 향후 치료비와 후유장해 보상을 받을 수 없습니다. 특히 성장기 아동은 후유증이 나중에 나타날 수 있습니다.</p>',
      },
      {
        question: '부모가 일을 못하고 간병하는 것도 보상받나요?',
        answer:
          '<p>네, 부모의 간병비는 별도로 청구할 수 있습니다. 입원 기간 동안 부모가 간병한 사실을 증명하면 됩니다.</p>',
      },
      {
        question: '형사 합의와 민사 보상은 다른 건가요?',
        answer:
          '<p>형사 합의는 운전자의 형사처벌을 줄여주는 것이고, 민사 보상은 손해배상 청구입니다. 형사 합의금과 민사 보상금은 별개이며, 양쪽 모두 받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '어린이 교통사고 보상 AI로 즉시 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 보상 절차', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '스쿨존 사고', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '보험 합의 주의', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '후유증 추가 치료', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
    ],
  },

  // ── 교통사고 3. 추돌사고 과실비율 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rear-end-fault-ratio',
    keyword: '추돌사고 과실비율',
    questionKeyword: '뒤에서 추돌당했는데 과실이 있나요?',
    ctaKeyword: '추돌사고 과실비율 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '추돌사고 과실비율 — 100:0이 아닌 경우 5가지 | 로앤가이드',
      description:
        '뒤에서 추돌을 당했는데 보험회사가 과실을 주장한다면, 추돌사고 과실비율 기준을 지금 확인하세요.',
    },
    intro:
      '<p>신호 대기 중 뒤에서 추돌을 당했습니다. 당연히 100% 상대방 과실이라고 생각했는데, 보험회사가 "급정거를 했다"며 과실을 주장합니다. 추돌사고는 원칙적으로 후방 차량 100% 과실이지만, 예외적으로 선행 차량에 과실이 인정되는 경우가 있습니다.</p>',
    sections: [
      {
        title: '추돌사고 과실비율 원칙',
        content:
          '<p><strong style="color:#1e3a5f">원칙: 후방 차량 100% 과실</strong></p>\n<p>도로교통법상 후행 차량은 앞차와 안전거리를 유지하고 언제든 정지할 수 있도록 해야 합니다. 따라서 추돌사고는 원칙적으로 후방 차량 100% 과실입니다.</p>\n<ul>\n<li><strong>신호 대기 중 추돌</strong> — 후방 100%</li>\n<li><strong>정체 구간 추돌</strong> — 후방 100%</li>\n<li><strong>감속 차량 추돌</strong> — 후방 80~100%</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 추돌사고에서 피추돌 차량(앞차)에 과실이 인정되는 것은 매우 예외적입니다. 보험회사의 과실 주장에 쉽게 동의하지 마세요.</blockquote>',
      },
      {
        title: '피추돌 차량에 과실이 인정되는 예외 5가지',
        content:
          '<p><strong style="color:#1e3a5f">다음의 경우에만 앞차에 과실이 일부 인정될 수 있습니다.</strong></p>\n<ol>\n<li><strong>합리적 이유 없는 급정거</strong> — 도로 위에서 갑자기 정차한 경우(고장 제외). 과실 10~20%</li>\n<li><strong>후미등 고장</strong> — 브레이크등이 작동하지 않아 감속을 알 수 없었던 경우. 과실 10~20%</li>\n<li><strong>무단 후진</strong> — 앞차가 후진하다가 충돌한 경우. 오히려 앞차 과실이 더 클 수 있습니다.</li>\n<li><strong>끼어들기 직후 급제동</strong> — 차선 변경 직후 급정거한 경우. 과실 20~30%</li>\n<li><strong>고속도로 갓길 정차</strong> — 고속도로에서 적법하게 갓길에 정차하지 않은 경우. 과실 10~20%</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>추돌사고 과실비율, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황을 입력하면 예상 과실비율을 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율 분쟁 시 대응법',
        content:
          '<p><strong style="color:#1e3a5f">블랙박스 영상이 과실비율 판단의 결정적 증거입니다.</strong></p>\n<ul>\n<li><strong>블랙박스 확보</strong> — 자신의 블랙박스 + 상대방 블랙박스 영상을 모두 확보하세요.</li>\n<li><strong>보험 과실비율 이의</strong> — 보험회사의 과실 주장에 동의하지 않으면 보험개발원에 과실비율 분쟁조정을 신청하세요.</li>\n<li><strong>교통사고 자동차보험 분쟁조정위원회</strong> — 금융감독원 산하 조정위원회에 분쟁 조정을 신청할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 교통사고 처리와 치료비 보상',
        summary:
          '서울서부지법 2024나44829 사건(2025.04.11)에서 법원은 교통사고로 인한 실손보험 보상 범위를 판단하면서, 사고와 치료 사이의 인과관계를 기준으로 보상 여부를 결정했습니다.',
        takeaway:
          '추돌사고로 인한 치료비는 사고와 인과관계가 인정되는 한 전액 보상받을 수 있습니다. 경추 염좌(목 디스크) 등 추돌사고 전형적 부상은 인과관계 인정이 용이합니다.',
      },
    ],
    faq: [
      {
        question: '보험회사가 "급정거"를 이유로 과실을 주장하면 어떡하나요?',
        answer:
          '<p>급정거의 입증 책임은 보험회사에 있습니다. 블랙박스 영상으로 급정거가 아니었음을 증명하거나, 급정거에 합리적 이유(전방 위험 등)가 있었음을 주장하세요.</p>',
      },
      {
        question: '다중 추돌사고에서 중간 차량은 과실이 어떻게 되나요?',
        answer:
          '<p>최후방 차량이 1차 충돌을 야기한 경우, 중간 차량은 피해자로 취급됩니다. 다만 중간 차량도 안전거리 미확보가 있었다면 일부 과실이 인정될 수 있습니다.</p>',
      },
      {
        question: '추돌사고 후 목이 아픈데 보험회사가 "가벼운 사고"라고 합니다.',
        answer:
          '<p>경미한 추돌에도 경추 염좌(목 디스크)가 발생할 수 있습니다. 진단서를 발급받고, 치료가 필요한 만큼 치료를 받으세요. 보험회사의 조기 합의 종용에 응하지 마세요.</p>',
      },
      {
        question: '블랙박스가 없으면 과실비율을 다툴 수 없나요?',
        answer:
          '<p>경찰 사고 조사 보고서, 사고 현장 사진, 차량 파손 부위 사진 등으로도 과실비율을 다툴 수 있습니다. CCTV 확보도 시도하세요.</p>',
      },
    ],
    cta: { text: '추돌사고 과실비율 AI로 즉시 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '경미사고 보상', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation' },
      { label: '합의 주의사항', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '블랙박스 없는 사고', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '교통사고 보상 절차', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
    ],
  },

  // ── 이혼 1. 양육비 증액 청구 ──
  {
    domain: 'divorce',
    slug: 'divorce-child-support-increase',
    keyword: '양육비 증액 청구 방법',
    questionKeyword: '양육비가 너무 적어서 증액하고 싶습니다.',
    ctaKeyword: '양육비 증액 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '양육비 증액 청구 방법 — 변경 사유와 절차 정리 | 로앤가이드',
      description:
        '아이가 크면서 양육비가 부족해졌다면, 양육비 증액 청구 사유와 절차를 지금 확인하세요.',
    },
    intro:
      '<p>이혼할 때 월 80만원으로 양육비를 정했는데, 아이가 중학생이 되면서 학원비와 교육비가 크게 늘었습니다. 양육비가 턱없이 부족한데, 상대방은 증액을 거부합니다. 사정이 변경되면 양육비 증액을 청구할 수 있습니다.</p>',
    sections: [
      {
        title: '양육비 증액이 인정되는 사유',
        content:
          '<p><strong style="color:#1e3a5f">양육비 결정 후 사정이 현저히 변경되면 증액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>자녀 성장</strong> — 유아기에서 학령기로 성장하면서 교육비, 식비 등이 증가한 경우</li>\n<li><strong>물가 상승</strong> — 양육비 결정 후 상당한 기간이 지나 물가가 크게 상승한 경우</li>\n<li><strong>상대방 소득 증가</strong> — 비양육친의 소득이 크게 증가한 경우</li>\n<li><strong>양육친 소득 감소</strong> — 질병, 실직 등으로 양육친의 경제적 능력이 감소한 경우</li>\n<li><strong>특별 비용 발생</strong> — 자녀의 질병, 장애 등으로 추가 비용이 발생한 경우</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "사정변경"이 핵심입니다. 양육비 결정 당시와 현재 상황이 얼마나 달라졌는지를 증명하세요.</blockquote>',
      },
      {
        title: '양육비 증액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">가정법원에 양육비 변경 심판을 청구합니다.</strong></p>\n<ol>\n<li><strong>협의 시도</strong> — 먼저 상대방과 양육비 증액에 대해 협의를 시도합니다.</li>\n<li><strong>양육비이행관리원 상담</strong> — 양육비이행관리원(1644-6621)에서 무료 상담을 받을 수 있습니다.</li>\n<li><strong>조정 신청</strong> — 가정법원에 양육비 변경 조정을 먼저 신청합니다.</li>\n<li><strong>심판 청구</strong> — 조정이 불성립하면 양육비 변경 심판을 청구합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>양육비 증액 가능 금액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 양육비, 자녀 나이, 쌍방 소득을 입력하면 증액 가능 금액을 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증액 청구 시 필요한 서류',
        content:
          '<p><strong style="color:#1e3a5f">사정변경을 증명할 수 있는 서류를 준비하세요.</strong></p>\n<ul>\n<li><strong>기존 양육비 결정서</strong> — 이혼 판결문 또는 양육비 합의서</li>\n<li><strong>자녀 관련 비용 증빙</strong> — 교육비, 의료비, 식비 등 지출 내역</li>\n<li><strong>소득 증빙</strong> — 양쪽 부모의 소득증명원</li>\n<li><strong>물가 변동 자료</strong> — 통계청 물가지수 등</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할에서의 법원 직권 조사 판단',
        summary:
          '대법원 2025스595 사건(대법원, 2025.08.14 선고)에서 법원은 재산분할의 대상과 가액을 직권으로 조사·판단할 수 있다고 판시하면서, 가정법원의 광범위한 재량을 확인했습니다.',
        takeaway:
          '양육비 변경도 가정법원이 양쪽 사정을 직권으로 조사하여 판단합니다. 소득 변동, 자녀 성장에 따른 비용 증가를 구체적으로 소명하세요.',
      },
    ],
    faq: [
      {
        question: '협의이혼 시 정한 양육비도 증액할 수 있나요?',
        answer:
          '<p>네, 협의이혼이든 재판이혼이든 사정변경이 있으면 양육비 변경을 청구할 수 있습니다.</p>',
      },
      {
        question: '양육비 증액에 상한선이 있나요?',
        answer:
          '<p>법적 상한선은 없으며, 양쪽 부모의 소득과 자녀의 필요에 따라 법원이 결정합니다. 양육비 산정기준표를 참고합니다.</p>',
      },
      {
        question: '상대방이 소득을 숨기면 어떡하나요?',
        answer:
          '<p>법원에 소득 조회 촉탁 신청을 하면 국세청, 국민연금공단 등에서 상대방의 소득 정보를 확인할 수 있습니다.</p>',
      },
      {
        question: '증액 청구 비용은 얼마인가요?',
        answer:
          '<p>양육비 변경 심판 인지대는 약 5,000원~1만원으로 매우 저렴합니다. 변호사 없이 본인이 직접 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '양육비 증액 가능성 AI로 즉시 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-guide' },
      { label: '양육비 강제집행', href: '/guide/child-support/child-support-enforcement-guide' },
      { label: '이혼 재산분할', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '면접교섭권', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-order' },
    ],
  },

  // ── 이혼 2. 면접교섭권 거부 대응 ──
  {
    domain: 'divorce',
    slug: 'divorce-visitation-denied-response',
    keyword: '면접교섭권 거부 대응',
    questionKeyword: '전 배우자가 아이를 만나지 못하게 합니다.',
    ctaKeyword: '면접교섭권 거부 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '면접교섭권 거부 시 대응법 4단계 | 로앤가이드',
      description:
        '이혼 후 전 배우자가 자녀를 만나지 못하게 한다면, 면접교섭권 이행 강제 방법을 지금 확인하세요.',
    },
    intro:
      '<p>이혼할 때 한 달에 2회 아이를 만나기로 했는데, 전 배우자가 갖가지 이유를 대며 만남을 거부합니다. 아이를 보고 싶은데 방법이 없는 건지 답답합니다. 면접교섭권은 부모와 자녀 모두의 권리이며, 상대방이 거부하면 법원을 통해 이행을 강제할 수 있습니다.</p>',
    sections: [
      {
        title: '면접교섭권은 법적 권리입니다',
        content:
          '<p><strong style="color:#1e3a5f">민법 제837조의2에 따라 비양육친은 자녀를 만날 권리가 있습니다.</strong></p>\n<p>면접교섭권은 부모의 권리인 동시에 자녀의 권리이기도 합니다. 양육친이 정당한 이유 없이 면접교섭을 거부하는 것은 위법 소지가 있습니다.</p>\n<ul>\n<li><strong>이행명령 신청</strong> — 법원에 면접교섭 이행명령을 신청할 수 있습니다.</li>\n<li><strong>간접강제</strong> — 이행명령에도 불구하고 거부하면, 1회 불이행 시 일정 금액을 지급하도록 간접강제를 신청할 수 있습니다.</li>\n<li><strong>과태료</strong> — 정당한 이유 없이 면접교섭을 방해하면 1,000만원 이하의 과태료가 부과됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 면접교섭 거부는 과태료와 간접강제의 대상이 됩니다. 법원의 도움을 받으세요.</blockquote>',
      },
      {
        title: '면접교섭 이행 강제 절차',
        content:
          '<p><strong style="color:#1e3a5f">이행명령 → 간접강제 → 과태료 순서로 대응합니다.</strong></p>\n<ol>\n<li><strong>증거 수집</strong> — 면접교섭을 요청한 문자, 상대방의 거부 응답 등을 보관합니다.</li>\n<li><strong>이행명령 신청</strong> — 가정법원에 면접교섭 이행명령을 신청합니다.</li>\n<li><strong>간접강제 신청</strong> — 이행명령에도 불이행하면 "불이행 1회당 50만원 지급" 등의 간접강제를 신청합니다.</li>\n<li><strong>과태료 신청</strong> — 반복적으로 거부하면 과태료 부과를 신청합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>면접교섭권 이행 강제 방법, AI가 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">거부 상황을 입력하면 대응 절차를 무료로 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육권 변경도 고려할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">면접교섭 거부가 반복되면 양육권 변경 사유가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>양육권 변경 심판</strong> — 양육친이 면접교섭을 지속적으로 방해하는 것은 자녀 복리에 반하므로, 양육자 변경 사유가 됩니다.</li>\n<li><strong>법원 판단 기준</strong> — 자녀의 의사, 양육 환경, 면접교섭 이행 여부 등을 종합적으로 판단합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 심판에서의 직권 조사',
        summary:
          '대법원 2025스595 사건(대법원, 2025.08.14 선고)에서 법원은 가정법원이 재산분할과 관련된 사실관계를 직권으로 조사할 수 있다고 판시했습니다.',
        takeaway:
          '면접교섭 분쟁에서도 가정법원은 자녀의 복리를 위해 직권으로 사실관계를 조사합니다. 면접교섭 거부 사실을 구체적으로 소명하면 법원이 적극적으로 개입합니다.',
      },
    ],
    faq: [
      {
        question: '아이가 만나기 싫다고 하면 면접교섭이 취소되나요?',
        answer:
          '<p>아이의 의사도 참고하지만, 양육친의 영향으로 거부하는 것인지 판단합니다. 법원은 자녀의 진정한 의사를 확인하기 위해 전문가 조사를 할 수 있습니다.</p>',
      },
      {
        question: '양육비를 안 주면서 면접교섭을 요구할 수 있나요?',
        answer:
          '<p>양육비 지급과 면접교섭권은 별개의 권리입니다. 양육비를 안 주더라도 면접교섭권은 인정되며, 양육비를 안 준다는 이유로 면접교섭을 거부할 수 없습니다.</p>',
      },
      {
        question: '간접강제 금액은 얼마인가요?',
        answer:
          '<p>법원이 정하며, 통상 1회 불이행당 50만~100만원 수준입니다. 지속적으로 불이행하면 누적됩니다.</p>',
      },
      {
        question: '면접교섭 시 아이를 데리고 해외로 갈 수 있나요?',
        answer:
          '<p>면접교섭 일정 내에서 단기 여행은 가능하지만, 상대방의 동의가 필요할 수 있습니다. 장기간 해외 체류는 양육권 분쟁을 야기할 수 있으니 주의하세요.</p>',
      },
    ],
    cta: { text: '면접교섭권 이행 강제 AI로 즉시 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육권 아버지 전략', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-guide' },
      { label: '양육비 강제집행', href: '/guide/child-support/child-support-enforcement-guide' },
      { label: '이혼 재산분할', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ── 이혼 3. 해외 재산 분할 ──
  {
    domain: 'divorce',
    slug: 'divorce-overseas-asset-division',
    keyword: '이혼 해외 재산 분할',
    questionKeyword: '배우자가 해외에 재산을 숨겨두었습니다.',
    ctaKeyword: '해외 재산 분할 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '이혼 해외 재산 분할 — 해외 은닉재산 추적 방법 | 로앤가이드',
      description:
        '배우자가 해외에 재산을 숨겨둔 것 같다면, 해외 재산 분할 청구와 추적 방법을 지금 확인하세요.',
    },
    intro:
      '<p>이혼 소송 중인데 배우자가 해외 계좌에 돈을 옮겨둔 것 같습니다. 해외에 있는 재산도 분할 대상인지, 어떻게 찾아낼 수 있는지 궁금합니다. 해외 재산도 이혼 시 재산분할의 대상이 됩니다. 다만 발견과 집행이 어렵다는 것이 핵심 쟁점입니다.</p>',
    sections: [
      {
        title: '해외 재산도 재산분할 대상입니다',
        content:
          '<p><strong style="color:#1e3a5f">재산분할의 대상은 국내·해외를 불문합니다.</strong></p>\n<p>민법 제839조의2에 따른 재산분할은 혼인 중 부부가 협력하여 형성한 모든 재산이 대상이며, 소재지가 해외라도 예외가 아닙니다.</p>\n<ul>\n<li><strong>해외 부동산</strong> — 해외에 소유한 부동산도 분할 대상입니다.</li>\n<li><strong>해외 계좌</strong> — 해외 은행 예금, 투자 계좌도 대상입니다.</li>\n<li><strong>해외 법인 지분</strong> — 해외에 설립한 법인의 지분도 포함됩니다.</li>\n<li><strong>가상자산</strong> — 해외 거래소의 가상자산도 재산분할 대상입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 해외 재산도 100% 재산분할 대상입니다. 문제는 "찾는 것"과 "집행하는 것"입니다.</blockquote>',
      },
      {
        title: '해외 은닉재산 추적 방법',
        content:
          '<p><strong style="color:#1e3a5f">법원을 통한 조회와 전문가 의뢰를 병행하세요.</strong></p>\n<ul>\n<li><strong>법원 사실조회</strong> — 법원에 은행, 증권사, 국세청 등에 대한 사실조회를 촉탁합니다.</li>\n<li><strong>해외 송금 내역 추적</strong> — 국세청의 해외금융계좌 신고 자료, 은행의 해외 송금 기록을 조회합니다.</li>\n<li><strong>국세청 해외금융계좌 신고</strong> — 해외 금융계좌 잔액이 5억원을 초과하면 국세청에 신고 의무가 있습니다. 미신고 시 과태료가 부과됩니다.</li>\n<li><strong>전문가 의뢰</strong> — 해외 재산 추적 경험이 있는 변호사나 회계사에게 의뢰합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>해외 은닉재산 추적 전략, AI가 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">의심되는 재산 유형을 입력하면 추적 방법을 무료로 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해외 재산 분할의 어려움과 대응',
        content:
          '<p><strong style="color:#1e3a5f">해외 재산 분할의 가장 큰 문제는 집행입니다.</strong></p>\n<ul>\n<li><strong>집행의 어려움</strong> — 한국 법원 판결을 해외에서 집행하려면 해당 국가에서 별도의 승인 절차가 필요합니다.</li>\n<li><strong>재산 처분 금지 가처분</strong> — 재산을 은닉·처분할 우려가 있으면 법원에 가처분 신청을 하세요.</li>\n<li><strong>국내 재산으로 보전</strong> — 해외 재산 집행이 어려운 경우, 국내 재산에서 해외 재산 몫까지 보전할 수 있도록 청구합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할의 대상 범위',
        summary:
          '대법원 2025스595 사건(대법원, 2025.08.14 선고)에서 법원은 재산분할의 대상과 가액을 직권으로 조사할 수 있으며, 분할 대상이 되는 재산과 그 가액을 산정하는 기준일을 명확히 했습니다.',
        takeaway:
          '법원은 재산분할의 대상을 직권으로 조사할 수 있으므로, 해외 재산의 존재를 합리적으로 소명하면 법원이 조사를 진행합니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 해외 재산을 숨기면 찾을 방법이 없나요?',
        answer:
          '<p>법원 사실조회, 해외 송금 기록 추적, 국세청 해외금융계좌 신고 자료 조회 등으로 찾을 수 있습니다. 완전한 추적은 어렵지만 상당 부분 파악 가능합니다.</p>',
      },
      {
        question: '해외 부동산도 분할 대상인가요?',
        answer:
          '<p>네, 혼인 중 부부 협력으로 취득한 해외 부동산은 재산분할 대상입니다. 다만 해외 부동산의 현금화나 명의 이전은 해당 국가 법률에 따라야 합니다.</p>',
      },
      {
        question: '가상자산(비트코인 등)을 해외 거래소에 옮기면 추적이 안 되나요?',
        answer:
          '<p>블록체인 거래는 추적이 가능합니다. 또한 법원이 가상자산 거래소에 사실조회를 촉탁할 수 있습니다.</p>',
      },
      {
        question: '해외 재산 분할 소송 비용은 비싼가요?',
        answer:
          '<p>해외 재산 추적과 집행에는 추가 비용이 발생합니다. 다만 재산분할 심판 자체의 인지대는 국내 사건과 동일합니다. 추적 비용 대비 재산 가치를 따져 판단하세요.</p>',
      },
    ],
    cta: { text: '해외 재산 분할 전략 AI로 즉시 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '은닉재산 추적', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '재산 처분 방지', href: '/guide/divorce/divorce-asset-disposal-grounds' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '재산분할 연금', href: '/guide/divorce/divorce-pension-division-method' },
    ],
  },

  // ── 회생 1. 체납 세금 회생절차 포함 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-tax-debt-included',
    keyword: '체납 세금 회생절차 포함 여부',
    questionKeyword: '세금을 못 내고 있는데 개인회생으로 해결할 수 있나요?',
    ctaKeyword: '세금 체납 회생 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '체납 세금 개인회생 포함 여부 — 세금도 탕감되나요? | 로앤가이드',
      description:
        '세금을 체납하고 있다면, 개인회생절차에서 세금 채무가 어떻게 처리되는지 지금 확인하세요.',
    },
    intro:
      '<p>사업 실패로 빚이 3억원이고, 그중 국세와 지방세 체납이 5,000만원입니다. 개인회생을 신청하면 세금도 같이 탕감되는지, 아니면 세금은 별도로 내야 하는지 궁금합니다.</p>',
    sections: [
      {
        title: '세금 채무와 개인회생의 관계',
        content:
          '<p><strong style="color:#1e3a5f">세금은 개인회생 절차에 포함되지만, 면책(탕감)은 되지 않습니다.</strong></p>\n<p>채무자 회생 및 파산에 관한 법률에 따라 조세 채권은 개인회생 절차에서 "회생채권"으로 포함되어 변제계획에 반영됩니다. 그러나 변제기간이 끝나도 미납 세금은 면책되지 않습니다.</p>\n<ul>\n<li><strong>회생절차에 포함</strong> — 세금도 회생채권으로 분류되어 변제계획표에 포함됩니다.</li>\n<li><strong>우선변제권</strong> — 조세 채권은 일반 채권보다 우선하여 변제됩니다.</li>\n<li><strong>면책 제외</strong> — 변제기간 완료 후에도 남은 세금은 면책되지 않고 계속 납부해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 개인회생으로 세금이 탕감되지는 않지만, 변제계획 기간 동안 체납처분(재산 압류 등)이 중지됩니다.</blockquote>',
      },
      {
        title: '회생절차에서 세금 처리 방법',
        content:
          '<p><strong style="color:#1e3a5f">변제계획에 세금을 포함하되, 우선변제 순서를 확인하세요.</strong></p>\n<ul>\n<li><strong>변제 순서</strong> — 조세 채권 → 일반 우선채권 → 일반 회생채권 순서로 변제합니다.</li>\n<li><strong>변제 비율</strong> — 세금은 100% 변제가 원칙이지만, 가용소득이 부족하면 변제계획 기간 동안 분할 변제합니다.</li>\n<li><strong>체납처분 중지</strong> — 회생 개시결정이 나면 국세징수법에 따른 체납처분(재산 압류, 급여 압류 등)이 중지됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>세금 체납 포함 회생 가능 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">총 채무액과 세금 체납액을 입력하면 회생 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '세금 체납이 많을 때 파산과 회생 비교',
        content:
          '<p><strong style="color:#1e3a5f">파산도 세금은 면책 제외이므로, 회생이 더 유리한 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>파산의 경우</strong> — 일반 채무는 면책되지만 세금은 면책 제외(비면책채권). 세금만 남게 됩니다.</li>\n<li><strong>회생의 경우</strong> — 변제계획 기간(3~5년) 동안 체납처분이 중지되고, 분할 납부가 가능합니다.</li>\n<li><strong>분납 협의</strong> — 국세청에 직접 분납 신청을 하는 것도 병행할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 비면책채권의 범위',
        summary:
          '대법원 2023다266031 사건(대법원, 2024.12.12 선고)에서 법원은 채무자 회생 및 파산에 관한 법률 제566조 제7호의 비면책채권인 "채무자가 악의로 채권자목록에 기재하지 아니한 청구권"의 범위를 판시했습니다.',
        takeaway:
          '세금은 대표적인 비면책채권입니다. 회생이든 파산이든 세금 채무는 완전히 없어지지 않으므로, 변제계획 수립 시 세금 납부 방안을 가능한 한 포함하세요.',
      },
    ],
    faq: [
      {
        question: '개인회생하면 세금이 탕감되나요?',
        answer:
          '<p>아닙니다. 세금은 비면책채권이므로 변제기간이 끝나도 남은 세금은 계속 납부해야 합니다. 다만 회생 기간 동안 체납처분이 중지됩니다.</p>',
      },
      {
        question: '세금 체납 때문에 급여가 압류되었는데 회생하면 풀리나요?',
        answer:
          '<p>회생 개시결정이 나면 체납처분(급여 압류 포함)이 중지됩니다. 변제계획에 따라 세금을 분할 납부하게 됩니다.</p>',
      },
      {
        question: '4대보험 체납도 회생에 포함되나요?',
        answer:
          '<p>건강보험료, 국민연금 등 사회보험료도 조세 채권에 준하여 처리됩니다. 회생 절차에 포함되지만 면책은 되지 않습니다.</p>',
      },
      {
        question: '세금 분납을 먼저 신청하는 게 나을까요?',
        answer:
          '<p>세금 외 다른 채무가 많다면 회생이 더 효과적입니다. 세금만 체납된 경우에는 국세청 분납 신청이 간편합니다.</p>',
      },
    ],
    cta: { text: '세금 체납 회생 가능성 AI로 즉시 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '회생 vs 파산', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '회생 변제금 계산', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '회생 신청 절차', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '파산 면책 범위', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
    ],
  },

  // ── 파산 1. 부부 동시 파산 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-spouse-joint-filing',
    keyword: '부부 동시 파산 신청',
    questionKeyword: '부부가 함께 파산 신청할 수 있나요?',
    ctaKeyword: '부부 동시 파산 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '부부 동시 파산 신청 — 가능 여부와 절차 정리 | 로앤가이드',
      description:
        '부부 모두 빚이 많아 파산을 고민 중이라면, 부부 동시 파산 가능 여부와 절차를 지금 확인하세요.',
    },
    intro:
      '<p>남편과 아내 모두 빚이 많아 파산을 고민하고 있습니다. 부부가 동시에 파산을 신청할 수 있는지, 한쪽만 하면 다른 쪽에 영향이 있는지 궁금합니다. 부부는 각각 별도로 파산 신청을 할 수 있으며, 동시에 진행하는 것도 가능합니다.</p>',
    sections: [
      {
        title: '부부 동시 파산의 가능 여부',
        content:
          '<p><strong style="color:#1e3a5f">부부는 각각 독립된 채무자이므로 각각 파산 신청이 가능합니다.</strong></p>\n<p>법적으로 부부의 재산과 채무는 별개입니다. 따라서 부부 모두 파산 요건을 충족하면 각각 파산 신청을 할 수 있습니다.</p>\n<ul>\n<li><strong>각자 신청</strong> — 부부가 각각 파산 신청서를 제출합니다. "부부 공동 파산"이라는 별도 절차는 없습니다.</li>\n<li><strong>동시 진행</strong> — 같은 법원에 동시에 신청하면 같은 재판부에서 처리될 수 있어 효율적입니다.</li>\n<li><strong>한쪽만 신청 가능</strong> — 한쪽만 파산 요건을 충족하면 한쪽만 신청할 수도 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 부부 파산은 "공동" 절차가 아니라, 각각 별도로 신청하되 동시에 진행하는 것입니다.</blockquote>',
      },
      {
        title: '한쪽만 파산하면 다른 쪽에 미치는 영향',
        content:
          '<p><strong style="color:#1e3a5f">배우자의 파산이 다른 배우자에게 직접적 영향을 주지는 않습니다.</strong></p>\n<ul>\n<li><strong>연대보증</strong> — 배우자가 상대방의 채무에 연대보증을 한 경우, 한쪽의 파산으로 채권자가 보증인에게 청구할 수 있습니다.</li>\n<li><strong>공동 채무</strong> — 부부 공동 명의 대출은 한쪽만 면책되어도 다른 쪽의 채무는 남습니다.</li>\n<li><strong>재산 영향</strong> — 배우자의 재산은 원칙적으로 파산 재단에 포함되지 않지만, 부부 공동 재산은 문제가 될 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>부부 파산 가능 여부와 최적 전략, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">부부 각각의 채무와 소득을 입력하면 최적의 방법을 무료로 안내합니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부부 동시 파산 vs 한쪽 회생+한쪽 파산',
        content:
          '<p><strong style="color:#1e3a5f">소득 상황에 따라 한쪽은 회생, 다른 쪽은 파산이 유리할 수 있습니다.</strong></p>\n<ul>\n<li><strong>둘 다 소득 없음</strong> — 둘 다 파산이 적합합니다.</li>\n<li><strong>한쪽만 소득 있음</strong> — 소득이 있는 쪽은 회생, 없는 쪽은 파산이 유리할 수 있습니다.</li>\n<li><strong>둘 다 소득 있음</strong> — 각각의 채무 규모와 소득에 따라 개별 판단합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유사수신업체 회생채무자의 부당이득 반환',
        summary:
          '대법원 2024다292464 사건(대법원, 2026.01.29 선고)에서 법원은 불법원인급여에 해당하더라도 관리인이 파산채권자를 위해 반환을 청구할 수 있는 경우를 판시했습니다.',
        takeaway:
          '파산 절차에서 부부 공동 채무의 처리 방법이 복잡할 수 있습니다. 연대보증 관계가 있다면 부부 모두 동시에 절차를 진행하는 것이 효율적입니다.',
      },
    ],
    faq: [
      {
        question: '배우자 몰래 파산 신청을 할 수 있나요?',
        answer:
          '<p>법적으로는 가능하지만, 파산 절차에서 가족 관계, 가구 소득·지출을 소명해야 하므로 배우자의 협조가 필요할 수 있습니다.</p>',
      },
      {
        question: '부부 공동 명의 주택이 있으면 어떻게 되나요?',
        answer:
          '<p>파산 시 자유재산에 해당하지 않는 부분은 파산 재단에 포함됩니다. 부부 공동 명의인 경우 지분에 따라 처리됩니다.</p>',
      },
      {
        question: '배우자의 연대보증 채무도 면책되나요?',
        answer:
          '<p>보증인 본인이 파산하여 면책을 받아야 보증 채무가 면제됩니다. 주채무자만 파산해도 보증인의 채무는 남습니다.</p>',
      },
      {
        question: '부부 동시 파산 시 비용이 2배인가요?',
        answer:
          '<p>각각 별도로 신청하므로 인지대와 송달료는 2건분이 필요합니다. 변호사를 동일인에게 의뢰하면 비용을 절감할 수 있습니다.</p>',
      },
    ],
    cta: { text: '부부 파산 가능 여부 AI로 즉시 확인하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산 면책 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 vs 회생', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '파산 재산 보호', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
      { label: '회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '보증인 채무', href: '/guide/rehabilitation/rehabilitation-guarantor-debt-included' },
    ],
  },

  // ── 파산 2. 학자금 대출 파산 면책 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-student-loan-discharge',
    keyword: '학자금 대출 파산 면책',
    questionKeyword: '학자금 대출이 파산하면 면책되나요?',
    ctaKeyword: '학자금 대출 파산 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '학자금 대출 파산 면책 가능 여부 총정리 | 로앤가이드',
      description:
        '학자금 대출을 갚을 수 없어 파산을 고민 중이라면, 학자금 대출 면책 가능 여부를 지금 확인하세요.',
    },
    intro:
      '<p>학자금 대출 4,000만원을 갚을 수 없어 파산을 고민 중입니다. 취업이 안 되어 연체가 계속되고 있는데, 학자금 대출도 파산으로 면책될 수 있을지 궁금합니다. 한국에서 학자금 대출은 원칙적으로 파산 면책 대상입니다.</p>',
    sections: [
      {
        title: '학자금 대출 파산 면책 가능 여부',
        content:
          '<p><strong style="color:#1e3a5f">한국에서 학자금 대출은 파산 면책 대상에 포함됩니다.</strong></p>\n<p>미국과 달리 한국의 채무자 회생 및 파산에 관한 법률은 학자금 대출을 비면책채권으로 규정하지 않습니다. 따라서 파산 면책 결정이 나면 학자금 대출도 면책됩니다.</p>\n<ul>\n<li><strong>한국장학재단 대출</strong> — 취업 후 상환(ICL), 일반 상환 모두 면책 대상입니다.</li>\n<li><strong>은행 학자금 대출</strong> — 시중은행에서 받은 학자금 대출도 면책됩니다.</li>\n<li><strong>보증인 채무</strong> — 본인의 면책이 보증인의 채무에는 영향을 주지 않습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 한국에서 학자금 대출은 파산 면책 대상입니다. 미국처럼 면책 제외가 아닙니다.</blockquote>',
      },
      {
        title: '학자금 대출 파산 전 고려사항',
        content:
          '<p><strong style="color:#1e3a5f">파산 전에 학자금 상환 유예·감면 제도를 먼저 활용해보세요.</strong></p>\n<ul>\n<li><strong>상환 유예</strong> — 한국장학재단에 상환 유예를 신청하면 일정 기간 상환을 미룰 수 있습니다.</li>\n<li><strong>ICL(취업 후 상환)</strong> — 소득이 일정 기준 미만이면 상환 의무가 없습니다.</li>\n<li><strong>개인회생</strong> — 파산 대신 개인회생으로 학자금을 포함한 채무를 일부 탕감하며 상환하는 방법도 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>학자금 대출 파산 면책 가능 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">채무 규모와 소득을 입력하면 파산·회생 중 최적의 방법을 무료로 안내합니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '파산 면책 후 신용 회복',
        content:
          '<p><strong style="color:#1e3a5f">파산 면책 후 5~7년이면 신용이 회복됩니다.</strong></p>\n<ul>\n<li><strong>신용정보 등록</strong> — 파산 면책 정보는 한국신용정보원에 등록되어 5~7년간 유지됩니다.</li>\n<li><strong>신용카드</strong> — 면책 후 일정 기간이 지나면 신용카드 발급이 가능합니다.</li>\n<li><strong>재취업</strong> — 파산 면책이 취업에 법적 제한을 주지는 않습니다(일부 금융업 제외).</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 비면책채권의 범위와 채권자목록 기재 의무',
        summary:
          '대법원 2023다266031 사건(대법원, 2024.12.12 선고)에서 법원은 비면책채권인 "채무자가 악의로 채권자목록에 기재하지 아니한 청구권"의 의미를 명확히 했습니다.',
        takeaway:
          '파산 신청 시 학자금 대출을 포함한 모든 채무를 빠짐없이 채권자목록에 기재하세요. 고의로 누락하면 해당 채무가 면책되지 않습니다.',
      },
    ],
    faq: [
      {
        question: '학자금 대출만 있으면 파산이 가능한가요?',
        answer:
          '<p>학자금 대출만으로도 지급불능 상태이면 파산 신청이 가능합니다. 소득이 없거나 매우 적어 상환이 불가능하다는 점을 소명해야 합니다.</p>',
      },
      {
        question: '부모님이 보증을 서신 학자금 대출은요?',
        answer:
          '<p>본인이 면책되어도 보증인인 부모님의 채무는 남습니다. 부모님에게 청구가 갈 수 있으므로 사전에 상의하세요.</p>',
      },
      {
        question: 'ICL(취업 후 상환) 대출도 면책되나요?',
        answer:
          '<p>네, ICL 대출도 파산 면책 대상입니다. 다만 ICL은 소득이 일정 기준 미만이면 상환 의무가 없으므로 파산 전에 상환 유예를 먼저 활용해보세요.</p>',
      },
      {
        question: '파산하면 학력에 영향이 있나요?',
        answer:
          '<p>파산은 학력과 전혀 관계가 없습니다. 졸업 증명서나 학위에 영향을 주지 않습니다.</p>',
      },
    ],
    cta: { text: '학자금 대출 파산 면책 AI로 즉시 확인하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산 면책 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 vs 회생', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '회생 학자금 포함', href: '/guide/rehabilitation/rehabilitation-student-loan-included' },
      { label: '파산 후 신용 회복', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '비면책채권', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
    ],
  },

  // ── 전세 1. 계약갱신 거절 대응 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-renewal-landlord-refusal',
    keyword: '전세 계약갱신 거절 임차인 대응',
    questionKeyword: '집주인이 계약갱신을 거절하는데 어떡하나요?',
    ctaKeyword: '계약갱신 거절 대응 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '전세 계약갱신 거절 시 임차인 대응법 4단계 | 로앤가이드',
      description:
        '집주인이 계약갱신을 거절한다면, 임차인의 갱신청구권과 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>전세 계약 만료가 다가오는데 집주인이 "직접 살겠다"며 갱신을 거절합니다. 2년밖에 안 살았는데 나가야 하는 건지, 거부할 수 있는지 궁금합니다. 주택임대차보호법상 계약갱신청구권을 행사하면 1회에 한해 2년 연장이 가능합니다.</p>',
    timelineSteps: [
      '1단계: 갱신청구권 행사 가능 여부 확인',
      '2단계: 갱신 요청 통지(만료 6개월~1개월 전)',
      '3단계: 임대인 거절 사유 확인',
      '4단계: 부당 거절 시 대응',
    ],
    sections: [
      {
        title: '계약갱신청구권이란',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제6조의3에 따라 임차인은 1회에 한해 계약갱신을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>행사 조건</strong> — 임대차 기간 만료 6개월~1개월 전에 갱신을 요청해야 합니다.</li>\n<li><strong>1회 한정</strong> — 갱신청구권은 1회만 행사할 수 있으며, 갱신 기간은 2년입니다.</li>\n<li><strong>임대료 인상 제한</strong> — 갱신 시 임대료 인상은 기존 임대료의 5% 이내로 제한됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 2020년 7월 31일 이후 갱신된 계약부터 갱신청구권이 적용됩니다. 이미 1회 행사했으면 추가 행사는 불가합니다.</blockquote>',
      },
      {
        title: '임대인이 거절할 수 있는 사유',
        content:
          '<p><strong style="color:#1e3a5f">법정 거절 사유에 해당하는 경우에만 갱신 거절이 가능합니다.</strong></p>\n<ul>\n<li><strong>실거주 목적</strong> — 임대인(직계존비속 포함)이 실제로 거주하려는 경우. 가장 흔한 거절 사유입니다.</li>\n<li><strong>2기 이상 차임 연체</strong> — 임차인이 2기(보통 2개월) 이상 차임을 연체한 경우.</li>\n<li><strong>재건축·대수선</strong> — 건물의 전부 또는 대부분을 철거·재건축하려는 경우.</li>\n<li><strong>임차인의 의무 위반</strong> — 무단 전대, 건물 파손 등 임차인에게 귀책사유가 있는 경우.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>갱신 거절 사유의 정당성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">임대인의 거절 사유를 입력하면 정당한 거절인지 무료로 확인하세요.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실거주 거절 후 실제로 살지 않으면 손해배상',
        content:
          '<p><strong style="color:#1e3a5f">"실거주"를 이유로 거절해놓고 다른 사람에게 임대하면 손해배상 청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>손해배상 범위</strong> — 갱신거절로 인한 이사비용, 차액 보증금 등의 손해를 배상해야 합니다.</li>\n<li><strong>과태료</strong> — 거짓 사유로 갱신을 거절한 임대인에게 과태료가 부과됩니다.</li>\n<li><strong>증거 확보</strong> — 갱신 거절 통지서, 이후 해당 주택의 임대 광고 등을 증거로 보관하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차 갱신과 이의의 방법',
        summary:
          '대법원 2024다315046 사건(대법원, 2025.03.13 선고)에서 법원은 임대차계약 갱신에 대한 임대인의 이의 방법에 대해, 묵시적 또는 조건부 이의가 있다고 볼 수 있는 경우를 판시했습니다.',
        takeaway:
          '임대인의 갱신 거절 의사표시는 명확해야 합니다. 묵시적이거나 조건부 이의만으로는 갱신이 유효하게 이루어진 것으로 볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '집주인이 "직접 살겠다"고 하면 원칙적으로 나가야 하나요?',
        answer:
          '<p>실거주 목적이 진짜인지 확인이 필요합니다. 갱신 거절 후 실제로 살지 않으면 손해배상을 청구할 수 있으므로, 이후 해당 주택 상태를 확인하세요.</p>',
      },
      {
        question: '갱신청구권을 이미 한번 사용했으면 더 이상 방법이 없나요?',
        answer:
          '<p>갱신청구권은 1회만 행사 가능합니다. 다만 일반적인 묵시적 갱신(주택임대차보호법 제6조)은 별도로 적용될 수 있습니다.</p>',
      },
      {
        question: '전세금을 올려달라는 것도 거절할 수 있나요?',
        answer:
          '<p>갱신청구권 행사 시 전세금 인상은 기존의 5% 이내로 제한됩니다. 5%를 초과하는 인상 요구는 거부할 수 있습니다.</p>',
      },
      {
        question: '갱신청구를 기간 내에 못했으면 어떡하나요?',
        answer:
          '<p>만료 6개월~1개월 전 사이에 청구하지 않으면 갱신청구권을 행사할 수 없습니다. 다만 임대인도 6개월~1개월 전에 갱신 거절 통지를 하지 않으면 묵시적 갱신이 됩니다.</p>',
      },
    ],
    cta: { text: '계약갱신 거절 대응법 AI로 즉시 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세 보증금 미반환', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세사기 대응', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '역전세 대응', href: '/guide/jeonse/jeonse-reverse-gap-tenant-response' },
      { label: '보증보험 청구', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '임대차분쟁조정', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
    ],
  },

  // ── 전세 2. 보증금 우선변제권 경합 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-priority-competing',
    keyword: '전세 보증금 우선변제권 경합',
    questionKeyword: '전세 보증금 우선변제권이 있으면 보증금을 전액 돌려받을 수 있나요?',
    ctaKeyword: '우선변제권 경합 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '전세 보증금 우선변제권 경합 — 배당 순위 정리 | 로앤가이드',
      description:
        '전세 보증금 우선변제권이 있는데 다른 채권자도 있다면, 배당 순위와 보증금 회수 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>집주인이 파산해서 집이 경매에 넘어갔습니다. 전입신고와 확정일자를 받았으니 우선변제권이 있다고 알고 있는데, 은행 담보대출도 있고 다른 세입자도 있습니다. 보증금을 전액 돌려받을 수 있을지 걱정됩니다.</p>',
    sections: [
      {
        title: '우선변제권의 의미와 요건',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법상 우선변제권은 다른 채권자보다 먼저 보증금을 돌려받을 수 있는 권리입니다.</strong></p>\n<ul>\n<li><strong>요건 3가지</strong> — ①주택 인도(입주) + ②전입신고 + ③확정일자를 모두 갖춰야 합니다.</li>\n<li><strong>효력 발생일</strong> — 전입신고 다음 날 0시부터 효력이 발생합니다.</li>\n<li><strong>대항력과 우선변제권</strong> — 대항력(전입신고+인도)은 새 집주인에게 임차권을 주장하는 것, 우선변제권(+확정일자)은 경매에서 배당받는 것입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 우선변제권이 있어도 설정 시점에 따라 배당 순위가 달라집니다. 근저당보다 먼저 설정되었는지가 핵심입니다.</blockquote>',
      },
      {
        title: '배당 순위 정리',
        content:
          '<p><strong style="color:#1e3a5f">경매에서 배당 순위는 설정 시점과 권리 종류에 따라 결정됩니다.</strong></p>\n<ol>\n<li><strong>최우선변제권(소액임차인)</strong> — 보증금이 일정 금액 이하인 소액임차인은 경매대금의 1/2 범위에서 최우선 변제됩니다.</li>\n<li><strong>담보물권(근저당 등)</strong> — 설정일자 기준으로 순위가 결정됩니다.</li>\n<li><strong>우선변제권 있는 임차인</strong> — 확정일자 기준으로 담보물권과 순위를 다툽니다.</li>\n<li><strong>일반 채권자</strong> — 나머지 배당금에서 안분 배당됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>보증금 배당 순위와 회수 가능액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">보증금, 확정일자, 근저당 설정일을 입력하면 예상 배당액을 무료로 확인하세요.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증금을 못 돌려받을 위험이 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">확정일자가 근저당보다 늦으면 보증금 회수가 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>선순위 근저당</strong> — 은행 근저당이 확정일자보다 먼저 설정된 경우, 은행이 먼저 배당받아 보증금 회수가 부족할 수 있습니다.</li>\n<li><strong>경매대금 부족</strong> — 경매 낙찰가가 전체 채권액보다 적으면 후순위 채권자는 배당을 못 받습니다.</li>\n<li><strong>전세보증보험</strong> — HUG, SGI 등 전세보증보험에 가입했다면 보험사에 보증금 반환을 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공공임대주택 임대차 갱신 거절과 임차인 보호',
        summary:
          '대법원 2024다284418 사건(대법원, 2025.09.11 선고)에서 법원은 공공주택 특별법상 임대주택의 임대인이 갱신을 거절할 수 있는 사유를 엄격히 해석했습니다.',
        takeaway:
          '임차인의 주거권은 강하게 보호됩니다. 경매 절차에서도 대항력이 있는 임차인은 낙찰자에게 임차권을 주장할 수 있으며, 보증금 전액을 돌려받을 때까지 퇴거하지 않을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '확정일자를 안 받았으면 우선변제를 못 받나요?',
        answer:
          '<p>확정일자가 없으면 우선변제권은 없지만, 대항력(전입신고+인도)이 있으면 새 소유자에게 임차권을 주장할 수 있습니다. 또한 소액임차인이면 최우선변제를 받을 수 있습니다.</p>',
      },
      {
        question: '소액임차인 최우선변제란 무엇인가요?',
        answer:
          '<p>보증금이 일정 금액 이하(서울 기준 1억6,500만원 이하)인 임차인은 확정일자 없이도 경매대금의 1/2 범위에서 최우선 변제(5,500만원 한도)를 받습니다.</p>',
      },
      {
        question: '경매에서 배당을 못 받으면 어떡하나요?',
        answer:
          '<p>전세보증보험에 가입했다면 보험사에 청구하세요. 가입하지 않았다면 집주인에 대한 별도 민사소송으로 부족분을 청구할 수 있습니다.</p>',
      },
      {
        question: '전입신고 날짜와 확정일자 날짜가 다르면요?',
        answer:
          '<p>우선변제권의 순위는 전입신고 다음 날과 확정일자 중 늦은 날을 기준으로 합니다. 전입신고와 확정일자를 같은 날 받는 것이 가장 유리합니다.</p>',
      },
    ],
    cta: { text: '보증금 우선변제 순위 AI로 즉시 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세 보증금 미반환', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세 경매 우선변제', href: '/guide/jeonse/jeonse-auction-deposit-priority' },
      { label: '전세보증보험', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '전세사기 대응', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '역전세 대응', href: '/guide/jeonse/jeonse-reverse-gap-tenant-response' },
    ],
  },
];
