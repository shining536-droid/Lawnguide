import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 8. 이 페이지는 [학교폭력 피해학생 부모]의 [신고 과정에서 흔히 저지르는 실수를 모르는 상황]에서 [실수 예방과 올바른 초기 대응 방향 설정]을 돕는 페이지다.
// 9. 이 페이지는 [학교폭력 피해를 처음 인지한 부모]의 [어디서부터 무엇을 해야 할지 모르는 상황]에서 [즉시 해야 할 일 3가지와 절차 순서 파악]을 돕는 페이지다.
// 10. 이 페이지는 [학교폭력 가해학생 부모]의 [심의위원회 출석을 앞둔 상황]에서 [위원회 절차 이해와 진술·자료 준비]를 돕는 페이지다.
// 11. 이 페이지는 [학교폭력 조치에 불복하려는 가해학생 부모]의 [재심 청구 절차와 기한을 모르는 상황]에서 [행정심판·행정소송 절차와 준비사항 파악]을 돕는 페이지다.
// 12. 이 페이지는 [학교폭력 가해학생 부모]의 [생활기록부 기록 삭제 가능 여부가 궁금한 상황]에서 [삭제 기준·시기·절차 정보 제공]을 돕는 페이지다.
// 13. 이 페이지는 [직장 내 성희롱 피해 근로자]의 [신고를 결심했지만 어떤 증거가 필요한지 모르는 상황]에서 [필수 증거 목록과 서류 준비 방법 안내]를 돕는 페이지다.
// 14. 이 페이지는 [직장 내 성희롱 신고 후 2차 가해를 걱정하는 피해자]의 [신고 이후 보복·불이익 대처를 모르는 상황]에서 [2차 가해 유형 인식과 법적 보호 수단 파악]을 돕는 페이지다.

export const spokesBatch20_8to14: SpokePage[] = [
  {
    domain: 'school-violence',
    slug: 'common-mistakes-parents-make',
    keyword: '학교폭력 신고 시 부모가 하는 흔한 실수 5가지',
    questionKeyword: '학교폭력 신고할 때 부모가 흔히 저지르는 실수는 무엇인가요?',
    ctaKeyword: '학교폭력 신고 실수 방지',
    type: '실수함정형',
    meta: {
      title: '학교폭력 신고 시 부모 실수 5가지 | 로앤가이드',
      description: '아이가 학교폭력을 당해 신고하려는데 무심코 한 행동이 불리하게 작용할 수 있습니다. 부모가 피해야 할 실수 5가지를 지금 확인하세요.',
    },
    intro: '아이가 울면서 집에 돌아왔습니다. 친구에게 맞았다는 말을 듣고 분노가 치밀어 바로 학교에 전화를 걸었습니다. 그런데 감정적으로 대응한 그 첫 번째 행동이 이후 심의위원회에서 오히려 불리하게 작용하는 경우가 많습니다. 학교폭력 신고 과정에서 부모가 흔히 저지르는 실수를 미리 알아두면, 아이를 더 효과적으로 보호할 수 있습니다.',
    sections: [
      {
        title: '실수 1: 감정적으로 가해학생 부모에게 직접 연락하는 것',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제20조에 따라 학교폭력 사건은 학교장에게 신고하여 공식 절차로 처리해야 합니다</strong></p>\n<p>아이가 피해를 입으면 즉시 가해학생 부모에게 항의하고 싶은 마음이 듭니다. 그러나 <strong>감정적인 직접 연락은 오히려 역효과</strong>를 냅니다. 대화 내용이 녹음되어 "협박" 또는 "명예훼손"으로 역고소당하는 사례도 있습니다.</p>\n<p>가해 측 부모와의 직접 대화는 <strong>합의 과정에서 불리한 증거</strong>로 활용될 수 있습니다. 가능한 한 학교 또는 교육청에 공식 신고한 뒤, 절차에 따라 대응하세요. 모든 의사소통은 문서(카카오톡, 문자)로 기록을 남기는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 가해 측 직접 연락 자제 → 학교·교육청 공식 신고 → 대화 기록 보관</blockquote>',
      },
      {
        title: '실수 2: 증거를 확보하지 않고 신고부터 하는 것',
        content:
          '<p><strong style="color:#1e3a5f">심의위원회에서 증거가 없으면 "사실 확인 불가"로 종결될 수 있습니다</strong></p>\n<p>신고 전에 가능한 한 확보해야 할 증거: <strong>①피해 부위 사진(날짜가 표시되도록 촬영) ②병원 진단서(상해진단서) ③목격자 진술(친구, 교사) ④카카오톡·SNS 메시지 캡처 ⑤CCTV 확인 요청</strong></p>\n<p>특히 <strong>의료기록은 48시간 이내</strong>에 확보하는 것이 중요합니다. 시간이 지나면 상해와 학교폭력 사이의 인과관계 입증이 어려워집니다. 정신적 피해도 소아정신과 진료 기록으로 남겨두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 순서: 상해 사진 → 48시간 내 진단서 → 목격자 확보 → SNS 캡처 → CCTV 요청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/school-violence" style="color:#1565c0;font-weight:600">우리 아이 학교폭력 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '실수 3: 아이에게 반복적으로 사건을 캐묻는 것',
        content:
          '<p><strong style="color:#1e3a5f">반복 질문은 아이의 진술 일관성을 해치고, 심의위원회에서 신빙성 문제를 야기할 수 있습니다</strong></p>\n<p>부모의 불안감으로 아이에게 사건 경위를 여러 번 물으면 <strong>진술이 왜곡되거나 과장</strong>되기 쉽습니다. 아이가 처음 한 말을 그대로 메모해두고, 이후에는 전문 상담사를 통해 진술을 정리하세요.</p>\n<p><strong>Wee센터(위센터)</strong>나 <strong>학교폭력 전문 상담기관</strong>에서 전문가의 도움을 받으면 아이의 심리적 부담도 줄이고, 공식 기록으로 활용할 수 있는 진술서도 확보할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 반복 질문 자제 → 첫 진술 메모 → Wee센터·전문상담 활용 → 공식 진술서 확보</blockquote>',
      },
      {
        title: '실수 4: 심의위원회 절차를 제대로 이해하지 않는 것',
        content:
          '<p><strong style="color:#1e3a5f">2023년 개정법에 따라 학교폭력 심의위원회는 교육지원청 소속으로 변경되었습니다</strong></p>\n<p>많은 부모가 학교 내부에서 모든 것이 결정된다고 오해합니다. 현재 학교폭력 사건은 <strong>교육지원청 학교폭력대책심의위원회</strong>에서 심의합니다. 신고 후 ①사안 조사 ②전담기구 심의 ③심의위원회 개최 ④조치 결정 순서로 진행됩니다.</p>\n<p>심의위원회에 <strong>서면 의견서를 제출</strong>할 수 있으므로, 증거 자료와 함께 사건 경위를 정리한 의견서를 미리 준비하세요. 의견서 작성 시 감정적 표현보다는 <strong>사실관계 중심</strong>으로 작성하는 것이 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 학교 신고 → 사안 조사 → 교육지원청 심의위원회 → 조치 결정 → 의견서 제출 가능</blockquote>',
      },
      {
        title: '실수 5: 합의를 서두르거나 비공식 합의를 하는 것',
        content:
          '<p><strong style="color:#1e3a5f">비공식 합의는 법적 효력이 약하고, 심의위원회 결정 전 합의는 조치 수위에 영향을 줍니다</strong></p>\n<p>가해 측에서 "조용히 합의하자"고 제안하는 경우가 많습니다. 그러나 <strong>공식 절차 없이 합의하면 재발 시 대응이 어렵고</strong>, 생기부 기재도 되지 않아 가해학생에 대한 교육적 조치가 누락됩니다.</p>\n<p>합의는 가능한 한 <strong>심의위원회 결정 이후</strong>에 진행하세요. 합의서 작성 시에는 ①합의금액 ②재발 방지 약속 ③위반 시 조치사항을 명시하고, 가능하면 변호사의 검토를 받는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의 원칙: 심의위원회 결정 후 합의 → 합의서에 재발 방지 명시 → 변호사 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '자치위원회 절차 하자로 처분이 무효가 된 사례',
        summary:
          '창원지법 2018구단12153 사건(2019.03.13 선고)에서 법원은 학교폭력대책자치위원회의 학부모위원 선출 절차가 학교폭력예방법을 위반하여 위법하게 구성된 경우, 해당 위원회의 의결에 따른 학교장의 처분은 무효라고 판시했습니다.',
        takeaway:
          '심의위원회의 구성과 절차가 적법한지도 확인해야 합니다. 절차적 하자가 있으면 조치 자체가 무효가 될 수 있으므로, 위원회 구성과 진행 과정을 꼼꼼히 살피세요.',
      },
    ],
    faq: [
      {
        question: '학교에 신고하면 아이가 보복당하지 않을까요?',
        answer: '학교폭력예방법 제16조에 따라 <strong>피해학생에 대한 보호조치</strong>(접촉 금지, 일시보호 등)가 즉시 시행됩니다. 보복 행위는 추가 가해로 인정되어 더 무거운 조치를 받게 되므로, 신고 사실을 알리는 것 자체가 보복 억제 효과가 있습니다. 담임교사에게 보호조치를 명시적으로 요청하세요.',
      },
      {
        question: '신고 후 가해 측이 먼저 합의를 제안하면 어떻게 하나요?',
        answer: '<strong>심의위원회 결정 전 합의를 서두르지 마세요</strong>. 합의 의사가 있더라도 심의위원회에서 조치가 결정된 후 합의하는 것이 유리합니다. 합의 자체가 조치 수위를 낮추는 사유가 될 수 있으므로, 시기와 조건을 신중하게 판단하세요.',
      },
      {
        question: '증거가 부족해도 신고할 수 있나요?',
        answer: '신고 자체는 증거 유무와 관계없이 가능합니다. 다만 <strong>심의위원회에서 "사실 확인 불가"로 종결</strong>되면 조치가 이루어지지 않습니다. 신고 전 최소한 피해 사진, 진단서, 목격자 1명 이상을 확보하는 것이 효과적입니다.',
      },
      {
        question: '아이가 신고를 원하지 않는데 부모가 대신 할 수 있나요?',
        answer: '<strong>보호자도 독립적으로 신고할 수 있습니다</strong>. 학교폭력예방법 제20조에 따라 누구든지 학교폭력 사실을 알게 되면 학교에 신고할 수 있습니다. 다만 아이의 심리 상태를 고려하여 전문 상담을 병행하는 것이 바람직합니다.',
      },
      {
        question: '교사에게만 알리고 공식 신고를 하지 않아도 되나요?',
        answer: '교사에게 알리는 것만으로는 공식 절차가 시작되지 않습니다. <strong>학교장에게 정식 학교폭력 신고서를 제출</strong>해야 전담기구 조사와 심의위원회 개최가 진행됩니다. 구두 상담만으로는 기록이 남지 않아 향후 대응이 어려울 수 있습니다.',
      },
    ],
    cta: {
      text: '학교폭력 피해 상황 무료 진단받기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학교폭력 피해 신고 후 자치위원회 절차', href: '/guide/school-violence/school-violence-committee-procedure' },
      { label: '학폭위 가해자 지목 시 부모 대응법', href: '/guide/school-violence/school-violence-accused-parent-response' },
      { label: '아이가 학교에서 맞고 왔을 때 대처법', href: '/guide/school-violence/child-beaten-at-school-response' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'child-bullied-where-to-start',
    keyword: '아이가 학교폭력 당했을 때 어디부터 시작해야 하나',
    questionKeyword: '아이가 학교폭력을 당했는데 지금 당장 무엇부터 해야 하나요?',
    ctaKeyword: '학교폭력 피해 초기 대응',
    type: '어디부터형',
    meta: {
      title: '학교폭력 피해 시 부모가 할 일 3단계 | 로앤가이드',
      description: '아이가 학교폭력을 당했다면 증거 확보부터 신고, 심의위원회 준비까지 부모가 즉시 해야 할 3단계를 지금 확인하세요.',
    },
    intro: '아이가 학교에서 돌아온 뒤 방문을 잠그고 나오지 않습니다. 한참 뒤에야 친구들에게 지속적으로 괴롭힘을 당하고 있다고 털어놓았습니다. 화가 나면서도 무엇부터 해야 할지 막막합니다. 이럴 때 올바른 순서대로 대응하면 아이를 확실하게 보호할 수 있습니다.',
    sections: [
      {
        title: '1단계: 아이의 안전을 확보하고 증거를 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제16조에 따라 피해학생은 심리상담, 일시보호, 치료를 위한 요양 등 보호조치를 받을 수 있습니다</strong></p>\n<p>가장 먼저 <strong>아이의 신체적·심리적 상태를 확인</strong>하세요. 외상이 있다면 즉시 병원에서 진단서를 발급받고, 피해 부위를 날짜가 보이도록 사진으로 촬영하세요. 정신적 충격이 크다면 소아정신과 진료도 병행하세요.</p>\n<p>증거 수집 체크리스트: <strong>①상해진단서 ②피해 부위 사진 ③카카오톡·SNS 메시지 캡처(날짜·시간 포함) ④목격 학생 이름·연락처 ⑤학교 CCTV 보존 요청서</strong></p>\n<p>CCTV는 보존 기간이 <strong>30일 이내</strong>인 경우가 많으므로, 사건 발생 즉시 학교에 보존을 요청하세요. 요청은 내용증명 또는 이메일로 기록을 남기는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 해야 할 일: 아이 안전 확인 → 병원(진단서) → 증거 사진 → CCTV 보존 요청</blockquote>',
      },
      {
        title: '2단계: 학교에 공식 신고하고 절차를 시작하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제20조에 따라 학교폭력 사실을 알게 된 사람은 학교에 신고할 수 있으며, 학교장은 즉시 전담기구를 구성하여 조사해야 합니다</strong></p>\n<p>신고 방법은 3가지입니다: <strong>①학교장에게 서면 신고서 제출 ②117 학교폭력 신고센터 전화 ③교육청 온라인 신고</strong>. 가장 확실한 방법은 서면 신고서를 학교에 직접 제출하고 접수 확인서를 받는 것입니다.</p>\n<p>신고 후 학교는 <strong>14일 이내에 사안 조사를 완료</strong>하고, 이후 교육지원청 심의위원회에 회부합니다. 이 기간 동안 아이에 대한 접촉 금지 등 <strong>긴급 보호조치</strong>를 학교장에게 요청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 절차: 서면 신고서 제출 → 접수 확인서 수령 → 긴급 보호조치 요청 → 사안 조사 협조</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/school-violence" style="color:#1565c0;font-weight:600">우리 아이 학교폭력 피해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 심의위원회를 대비하여 의견서와 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">심의위원회에서 피해학생 측은 서면 의견서를 제출하고 구두 의견 진술도 할 수 있습니다</strong></p>\n<p>의견서에 포함할 내용: <strong>①사건 경위(시간순 정리) ②피해 정도(진단서 첨부) ③아이의 심리 상태 변화 ④원하는 조치 내용 ⑤증거 목록</strong></p>\n<p>의견서는 <strong>감정적 표현을 최소화하고 사실관계를 중심</strong>으로 작성하세요. "가해학생이 나쁘다"보다 "○월 ○일 ○시에 ○○ 장소에서 ○○ 행위가 있었고, 이로 인해 ○○ 피해가 발생했다"는 식으로 구체적으로 기술하는 것이 효과적입니다.</p>\n<p>심의위원회에서 결정할 수 있는 조치: 서면사과, 접촉 금지, 학급교체, 전학, 출석정지 등 <strong>1호~9호까지 총 9단계</strong>가 있습니다. 피해 정도에 맞는 적절한 조치를 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 사건 경위서 작성 → 증거 정리 → 원하는 조치 결정 → 의견서 제출</blockquote>',
      },
    ],
    cases: [
      {
        title: '학교폭력 처분 집행정지와 생기부 삭제에 관한 대법원 판결',
        summary:
          '대법원 2025무565 사건(2025.09.09 선고)에서 법원은 학교폭력 관련 처분에 대한 집행정지결정이 있으면 그 즉시 학교생활기록부에 기재된 학교폭력 관련 조치사항을 삭제해야 하며, "집행정지 중" 문구만 부기하는 것은 삭제에 준하는 조치로 볼 수 없다고 판시했습니다.',
        takeaway:
          '심의위원회 조치가 내려진 후에도 행정소송을 통해 집행정지를 받으면 생기부 기재가 삭제됩니다. 부당한 조치에 대해서는 적극적으로 법적 대응을 할 수 있다는 점을 기억하세요.',
      },
    ],
    faq: [
      {
        question: '학교폭력 신고는 언제까지 할 수 있나요?',
        answer: '학교폭력 신고에는 <strong>법정 기한이 없습니다</strong>. 다만 시간이 지나면 증거 확보가 어려워지고 목격자 기억이 흐려지므로, 사실을 알게 된 즉시 신고하는 것이 가장 효과적입니다. CCTV 보존 기간(30일 내외)도 고려하세요.',
      },
      {
        question: '학교폭력 피해를 입으면 치료비를 받을 수 있나요?',
        answer: '심의위원회에서 <strong>가해학생 측에 피해학생 치료비 부담 조치</strong>를 할 수 있습니다. 또한 학교안전공제회를 통해 치료비를 선지급받을 수 있으므로, 학교에 공제회 신청 절차를 문의하세요.',
      },
      {
        question: '경찰에도 동시에 신고해야 하나요?',
        answer: '신체적 폭행이나 금품 갈취 등 <strong>형사처벌 대상</strong>에 해당하면 경찰 신고를 병행하는 것이 좋습니다. 학교폭력 신고와 경찰 신고는 별개 절차이므로, 중한 사안이라면 두 곳 모두에 신고하세요.',
      },
      {
        question: '신고하면 우리 아이 학교생활에 불이익은 없나요?',
        answer: '<strong>피해학생에게는 불이익이 없습니다</strong>. 학교폭력예방법은 피해학생 보호를 위해 보호조치(상담, 일시보호, 치료 등)를 규정하고 있으며, 이러한 조치는 학교생활기록부에 기재되지 않습니다.',
      },
      {
        question: '아이가 사이버 괴롭힘(카톡 따돌림)을 당하는 경우도 학교폭력인가요?',
        answer: '<strong>학교폭력예방법 제2조에 따라 사이버 괴롭힘도 학교폭력에 해당할 소지가 있습니다</strong>. 카카오톡 단톡방 따돌림, SNS 비방, 온라인 유포 등 정보통신망을 이용한 괴롭힘 행위 모두 신고 대상입니다.',
      },
    ],
    cta: {
      text: '학교폭력 피해 상황 무료 진단받기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학교폭력 신고 시 부모 실수 5가지', href: '/guide/school-violence/common-mistakes-parents-make' },
      { label: '학교폭력 피해 신고 후 자치위원회 절차', href: '/guide/school-violence/school-violence-committee-procedure' },
      { label: '학교폭력 조치 불복 방법', href: '/guide/school-violence/school-violence-measures-appeal' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'perpetrator-committee-preparation',
    keyword: '학교폭력 가해학생 심의위원회 준비 가이드',
    questionKeyword: '학교폭력 가해자로 지목되었을 때 심의위원회를 어떻게 준비해야 하나요?',
    ctaKeyword: '학교폭력 가해학생 심의위원회 대비',
    type: '절차타임라인형',
    perspective: 'accused',
    meta: {
      title: '학교폭력 가해학생 심의위 준비 4단계 | 로앤가이드',
      description: '아이가 학교폭력 가해자로 지목되어 심의위원회 출석 통보를 받았다면, 진술 준비부터 의견서 작성까지 4단계를 지금 확인하세요.',
    },
    intro: '학교에서 전화가 왔습니다. 우리 아이가 학교폭력 가해학생으로 지목되어 심의위원회가 열릴 예정이라는 통보입니다. 혐의를 받고 있다면, 심의위원회에서 어떤 절차로 진행되고 무엇을 준비해야 하는지 정확히 파악하는 것이 아이의 미래를 지키는 첫걸음입니다.',
    timelineSteps: [
      '사안 통보 수령 및 사실관계 파악 (통보 후 즉시)',
      '의견서·소명자료 준비 (심의위원회 7일 전까지)',
      '심의위원회 출석 및 진술 (위원회 당일)',
      '조치 결정 확인 및 불복 여부 판단 (결정 통보 후 15일 이내)',
    ],
    sections: [
      {
        title: '1단계: 사안 통보를 받으면 사실관계부터 정확히 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제17조에 따라 가해학생에 대한 조치는 1호(서면사과)부터 9호(퇴학)까지 총 9단계입니다</strong></p>\n<p>통보를 받으면 가장 먼저 <strong>아이에게 사실 여부를 확인</strong>하세요. 이때 "네가 뭘 잘못했어?"라고 추궁하기보다 "무슨 일이 있었는지 차분히 이야기해줄 수 있니?"라고 물어보는 것이 정확한 사실 파악에 도움이 됩니다.</p>\n<p>확인할 사항: <strong>①사건 일시·장소 ②관련된 학생들 ③구체적 행위 내용 ④사건 전후 맥락 ⑤목격자 유무</strong>. 아이의 진술을 메모해두되, 유도 질문은 피하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 확인: 사건 경위 → 관련자 파악 → 아이 진술 메모 → 학교 통보 내용 기록</blockquote>',
      },
      {
        title: '2단계: 의견서와 소명자료를 체계적으로 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">심의위원회에서 가해학생 측은 서면 의견서를 제출하고 구두로 의견을 진술할 수 있습니다</strong></p>\n<p>의견서에 포함할 내용: <strong>①사건 경위에 대한 아이 측 입장 ②사건에 이르게 된 배경과 맥락 ③반성과 재발 방지 의지 ④피해학생과의 관계 회복 노력 ⑤평소 학교생활 태도 관련 자료</strong></p>\n<p>효과적인 소명자료: <strong>①담임교사·주변 교사의 의견서 ②상담 기록 ③봉사활동 기록 ④반성문(아이가 직접 작성) ⑤합의서(합의가 이루어진 경우)</strong>. 특히 사건 후 전문 상담을 받은 기록이 있으면 가능한 한 첨부하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 자료: 의견서 + 반성문 + 상담기록 + 교사 의견서 + 합의 노력 증빙</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/school-violence" style="color:#1565c0;font-weight:600">우리 아이 학교폭력 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 심의위원회 당일 진술 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">심의위원회에서의 진술 태도와 내용이 조치 수위에 직접적인 영향을 미칩니다</strong></p>\n<p>심의위원회 진행 순서: <strong>①위원장 개회 선언 ②사안 조사 결과 보고 ③피해측 의견 진술 ④가해측 의견 진술 ⑤위원 질의응답 ⑥비공개 심의·의결</strong></p>\n<p>가해학생 측 진술 시 주의사항: <strong>①사실을 부인하기보다 인정할 부분은 솔직히 인정</strong>하세요. 명백한 증거가 있는데 부인하면 반성 의지가 없다고 판단됩니다. <strong>②감정적 대응은 절대 금물</strong>입니다. "우리 아이만 잘못한 게 아니다"라는 식의 발언은 역효과를 냅니다. <strong>③아이의 반성과 변화 의지</strong>를 구체적으로 보여주세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 원칙: 사실 인정 → 진심 어린 반성 → 재발 방지 계획 → 차분한 태도</blockquote>',
      },
      {
        title: '4단계: 조치 결정을 확인하고 불복 여부를 판단하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제17조의2에 따라 가해학생 측은 조치에 불복하면 행정심판 또는 행정소송을 제기할 수 있습니다</strong></p>\n<p>조치 결정 통보 후 <strong>15일 이내에 행정심판을 청구</strong>하거나, <strong>90일 이내에 행정소송을 제기</strong>할 수 있습니다. 조치가 과도하다고 판단되면 변호사와 상담하여 불복 절차를 검토하세요.</p>\n<p>불복을 검토할 때 고려할 사항: <strong>①조치의 비례성(피해 정도 대비 조치가 과한지) ②절차적 하자 유무 ③새로운 증거나 정상참작 사유 ④생기부 기재의 영향</strong>. 특히 6호(출석정지) 이상의 조치는 생기부에 기재되므로 신중하게 판단하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 절차: 조치 통보 → 15일 내 행정심판 또는 90일 내 행정소송 → 집행정지 신청 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '자치위원회 위법 구성에 따른 처분 취소 판례',
        summary:
          '제주지법 2019구합6370 사건(2020.12.15 선고)에서 법원은 학부모대표위원이 학부모전체회의가 아닌 학부모대표회의에서 선출되었고, 학교폭력책임교사가 위원으로 참여한 자치위원회의 의결은 위법하게 구성된 위원회에 의한 것이므로 해당 처분은 위법하다고 판시했습니다.',
        takeaway:
          '혐의를 받고 있다면 심의위원회의 구성 절차가 적법한지도 가능한 한 확인하세요. 위원회 구성에 하자가 있으면 조치 자체를 취소시킬 수 있는 중요한 방어 수단이 됩니다.',
      },
    ],
    faq: [
      {
        question: '심의위원회에 변호사를 대동할 수 있나요?',
        answer: '<strong>법률 대리인을 대동할 수 있습니다</strong>. 학교폭력예방법 시행령에 따라 보호자 또는 보호자가 지정한 대리인이 참석하여 의견을 진술할 수 있습니다. 사안이 중대하거나 고호수 조치가 예상되면 변호사 동행을 권장합니다.',
      },
      {
        question: '피해학생 측과 합의하면 조치가 낮아지나요?',
        answer: '합의 자체가 조치를 자동으로 낮추지는 않지만, <strong>정상참작 사유로 고려</strong>됩니다. 심의위원회는 가해학생의 반성 정도, 피해학생과의 화해 여부 등을 종합적으로 판단하여 조치를 결정합니다.',
      },
      {
        question: '초범인데도 전학 조치를 받을 수 있나요?',
        answer: '초범이라도 <strong>폭행 정도가 심하거나 지속적 괴롭힘</strong>이 인정되면 7호(학급교체) 이상의 조치를 받을 수 있습니다. 심의위원회는 학교폭력의 심각성, 지속성, 고의성, 가해학생의 반성 정도, 피해학생과의 관계 등을 종합 판단합니다.',
      },
      {
        question: '심의위원회 결과에 불복하면 조치 집행이 중단되나요?',
        answer: '행정심판이나 행정소송을 제기하더라도 <strong>별도로 집행정지 신청을 해야</strong> 조치 집행이 중단됩니다. 집행정지가 인용되면 생기부 기재도 즉시 삭제됩니다(대법원 2025무565 판결).',
      },
    ],
    cta: {
      text: '학교폭력 가해자 지목 상황 무료 진단받기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학교폭력 조치 불복 재심 청구', href: '/guide/school-violence/sanction-appeal-procedure' },
      { label: '학교폭력 가해학생 생기부 삭제', href: '/guide/school-violence/perpetrator-school-record-deletion' },
      { label: '학폭위 가해자 지목 시 부모 대응법', href: '/guide/school-violence/school-violence-accused-parent-response' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'sanction-appeal-procedure',
    keyword: '학교폭력 조치 불복 재심 청구 절차',
    questionKeyword: '학교폭력 심의위원회 조치에 불복하려면 어떻게 재심을 청구하나요?',
    ctaKeyword: '학교폭력 조치 불복 재심',
    type: '절차타임라인형',
    perspective: 'accused',
    meta: {
      title: '학교폭력 조치 불복 재심 절차 3단계 | 로앤가이드',
      description: '학교폭력 심의위원회 조치가 과도하다고 느끼신다면, 행정심판과 행정소송을 통한 재심 청구 절차 3단계를 지금 확인하세요.',
    },
    intro: '심의위원회에서 아이에게 전학 조치가 결정되었습니다. 사건 경위에 비해 조치가 지나치게 무겁다고 생각되지만, 어떻게 불복해야 하는지 알 수 없습니다. 혐의를 받고 있다면, 법이 보장하는 불복 절차를 정확히 알고 기한 내에 대응하는 것이 중요합니다.',
    timelineSteps: [
      '조치 결정 통보 수령 (통보서 원본 보관)',
      '행정심판 청구 (조치 통보일로부터 15일 이내)',
      '행정소송 제기 및 집행정지 신청 (행정심판 재결 후 90일 이내 또는 처분일로부터 90일 이내)',
    ],
    sections: [
      {
        title: '1단계: 조치 결정 통보서를 꼼꼼히 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제17조의2 제1항에 따라 가해학생 측은 심의위원회 조치에 대해 행정심판을 청구할 수 있습니다</strong></p>\n<p>통보서에서 확인할 사항: <strong>①조치 내용(몇 호 조치인지) ②조치 사유 ③불복 절차 안내 ④통보 일자</strong>. 통보 일자가 행정심판 청구 기한의 기산점이므로 가능한 한 기록해두세요.</p>\n<p>불복을 검토할 근거: <strong>①사실관계 오인 ②조치의 과잉(비례원칙 위반) ③절차적 하자(위원회 구성·운영 문제) ④새로운 증거 발견</strong>. 이 중 하나라도 해당되면 불복의 실익이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 조치 내용 → 통보 일자 기록 → 불복 사유 검토 → 변호사 상담</blockquote>',
      },
      {
        title: '2단계: 15일 이내에 행정심판을 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">행정심판법 제27조에 따라 처분이 있음을 알게 된 날부터 90일 이내, 처분이 있은 날부터 180일 이내에 행정심판을 청구해야 합니다</strong></p>\n<p>학교폭력 사건의 경우 <strong>시·도 학생징계조정위원회</strong>에 행정심판을 청구합니다. 청구서에는 ①청구 취지(조치 취소 또는 변경) ②청구 사유(사실관계 오인, 비례원칙 위반 등) ③증거 자료를 첨부하세요.</p>\n<p>행정심판 청구만으로는 <strong>조치 집행이 중단되지 않습니다</strong>. 생기부 기재를 막으려면 별도로 <strong>집행정지 신청</strong>을 함께 해야 합니다. 집행정지가 인용되면 심판 결과가 나올 때까지 조치가 유보됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 행정심판 청구서 작성 → 집행정지 신청 동시 제출 → 증거자료 첨부 → 기한 엄수</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/school-violence" style="color:#1565c0;font-weight:600">학교폭력 조치 불복 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 행정소송과 집행정지로 생기부 기재를 막으세요',
        content:
          '<p><strong style="color:#1e3a5f">행정소송법 제23조에 따라 법원은 회복하기 어려운 손해를 예방하기 위해 집행정지 결정을 할 수 있습니다</strong></p>\n<p>행정심판에서 기각되더라도 <strong>행정소송을 제기</strong>할 수 있습니다. 행정소송은 재결서를 받은 날부터 90일 이내에 관할 행정법원에 제기하세요. 행정심판을 거치지 않고 바로 행정소송을 제기하는 것도 가능합니다.</p>\n<p>핵심은 <strong>집행정지 신청</strong>입니다. 법원이 집행정지를 인용하면 판결이 확정될 때까지 <strong>생기부 기재가 즉시 삭제</strong>됩니다. 대법원 판례에 따르면 "집행정지 중" 문구만 부기하는 것은 삭제에 준하는 조치로 볼 수 없으므로, 완전한 삭제를 요구할 수 있습니다.</p>\n<p>집행정지가 인용되기 위한 요건: <strong>①회복하기 어려운 손해(입시·진학 불이익) ②긴급한 필요성 ③본안 승소 가능성 ④공공복리에 중대한 영향이 없을 것</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소송 절차: 행정소송 제기 → 집행정지 신청 → 생기부 삭제 확인 → 본안 심리</blockquote>',
      },
    ],
    cases: [
      {
        title: '학교폭력 집행정지 시 생기부 즉시 삭제 의무에 관한 대법원 판결',
        summary:
          '대법원 2025무565 사건(2025.09.09 선고)에서 법원은 학교폭력 관련 처분에 대한 집행정지결정이 있으면 행정청은 그 즉시 학교생활기록부에 기재된 학교폭력 관련 조치사항을 삭제해야 하며, "집행정지 중" 등의 문구만 부기하는 것은 삭제에 준하는 조치로 볼 수 없다고 판시했습니다.',
        takeaway:
          '혐의를 받고 있다면 집행정지 결정을 받으면 학교에 즉시 생기부 삭제를 요구하세요. 학교가 삭제를 지연하거나 문구만 부기하는 것은 판례에 반하는 것이므로 강력히 항의할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '행정심판 청구 비용은 얼마인가요?',
        answer: '<strong>행정심판 청구 자체는 무료</strong>입니다. 다만 변호사를 선임하면 별도의 수임료가 발생합니다. 사안이 복잡하거나 고호수 조치(전학, 퇴학)인 경우에는 전문 변호사 선임을 권장합니다.',
      },
      {
        question: '행정심판 기간 동안 아이는 학교에 다닐 수 있나요?',
        answer: '집행정지가 인용되지 않으면 <strong>조치는 그대로 집행</strong>됩니다. 전학 조치를 받았다면 행정심판 중에도 전학을 가야 합니다. 따라서 행정심판 청구와 동시에 집행정지 신청을 가능한 한 함께 하세요.',
      },
      {
        question: '행정심판과 행정소송의 차이점은 무엇인가요?',
        answer: '행정심판은 <strong>행정기관(시·도 교육청 소속 위원회)</strong>에서 심리하고, 행정소송은 <strong>법원</strong>에서 심리합니다. 행정심판이 더 빠르고 비용이 적지만, 행정소송이 더 전문적이고 집행정지 결정의 실효성이 높습니다.',
      },
      {
        question: '1호(서면사과) 같은 가벼운 조치도 불복할 수 있나요?',
        answer: '<strong>모든 호수의 조치에 대해 불복이 가능</strong>합니다. 다만 1~3호 조치는 생기부에 기재되더라도 졸업과 동시에 삭제되고, 불복에 드는 시간과 비용을 고려하면 실익이 적을 수 있습니다.',
      },
      {
        question: '재심에서 조치가 오히려 더 무거워질 수 있나요?',
        answer: '행정심판에서는 <strong>불이익변경금지 원칙이 적용되지 않아</strong> 이론적으로 더 무거운 조치가 가능하지만, 실무에서는 극히 드뭅니다. 행정소송에서는 법원이 원래 조치보다 무거운 판결을 내리는 경우는 거의 없습니다.',
      },
    ],
    cta: {
      text: '학교폭력 조치 불복 가능성 무료 진단받기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학교폭력 가해학생 심의위원회 준비', href: '/guide/school-violence/perpetrator-committee-preparation' },
      { label: '학교폭력 가해학생 생기부 삭제', href: '/guide/school-violence/perpetrator-school-record-deletion' },
      { label: '학폭위 가해자 조치 종류와 불복 방법', href: '/guide/school-violence/school-violence-measures-appeal' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'perpetrator-school-record-deletion',
    keyword: '학교폭력 가해학생 생기부 기록 삭제 조건 3가지',
    questionKeyword: '학교폭력 가해학생 생활기록부 기록은 언제 삭제되나요?',
    ctaKeyword: '학교폭력 생기부 기록 삭제',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '학교폭력 생기부 기록 삭제 조건 3가지 | 로앤가이드',
      description: '학교폭력 가해학생 생활기록부 기록이 대학 입시에 미치는 영향과 삭제 시기, 조기 삭제 방법 3가지를 지금 확인하세요.',
    },
    intro: '아이가 학교폭력 가해학생으로 조치를 받았고, 생활기록부에 기재되었습니다. 대학 입시가 다가오는데 이 기록이 어떤 영향을 미칠지, 삭제할 수 있는 방법은 없는지 막막합니다. 혐의를 받고 있다면, 생기부 기록의 정확한 삭제 기준과 방법을 미리 알아두는 것이 중요합니다.',
    sections: [
      {
        title: '생기부에 기재되는 조치와 기재 기간은 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제17조 제6항에 따라 가해학생에 대한 조치사항은 학교생활기록부에 기재됩니다</strong></p>\n<p>조치별 생기부 기재 및 삭제 기준:</p>\n<p><strong>1호~3호(서면사과, 접촉금지, 봉사활동)</strong>: 졸업 시 자동 삭제. 단, 졸업 전이라도 <strong>해당 학기 종료 후 학교장이 심의위원회 심의를 거쳐 삭제</strong> 가능.</p>\n<p><strong>4호~7호(사회봉사, 특별교육, 출석정지, 학급교체)</strong>: 졸업일로부터 <strong>2년 후 삭제</strong>. 단, 해당 학기 종료 후 심의위원회 심의를 거쳐 조기 삭제 가능.</p>\n<p><strong>8호~9호(전학, 퇴학)</strong>: 졸업일로부터 <strong>4년 후 삭제</strong>. 조기 삭제는 심의위원회 심의로 가능하지만, 요건이 더 엄격합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기재 기간: 1~3호 졸업 시 삭제 / 4~7호 졸업+2년 / 8~9호 졸업+4년 / 조기 삭제 가능</blockquote>',
      },
      {
        title: '조기 삭제를 받으려면 어떤 조건을 충족해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 시행령에 따라 심의위원회는 가해학생의 반성 정도, 행동 개선 여부, 피해학생과의 화해 등을 고려하여 조기 삭제를 결정합니다</strong></p>\n<p>조기 삭제를 위한 3가지 핵심 조건:</p>\n<p><strong>조건 1: 충실한 조치 이행</strong> — 부과된 조치(봉사활동, 특별교육 등)를 성실히 이행한 증빙이 필요합니다. 이행 확인서, 교육 수료증 등을 보관하세요.</p>\n<p><strong>조건 2: 행동 개선 입증</strong> — 조치 이후 학교생활에서 긍정적인 변화를 보여야 합니다. 담임교사 의견서, 상담 기록, 봉사활동 참여 기록 등이 도움이 됩니다.</p>\n<p><strong>조건 3: 추가 학교폭력 없음</strong> — 조치 이후 추가적인 학교폭력 사건에 연루되지 않아야 합니다. 새로운 사건이 발생하면 조기 삭제가 거부됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조기 삭제 조건: 조치 이행 완료 + 행동 개선 증명 + 추가 사건 없음</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/school-violence" style="color:#1565c0;font-weight:600">생기부 삭제 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '집행정지 결정을 받으면 생기부 기재가 바로 삭제되나요?',
        content:
          '<p><strong style="color:#1e3a5f">대법원 판례에 따르면 집행정지결정이 있으면 행정청은 그 즉시 생기부에서 해당 기재를 삭제해야 합니다</strong></p>\n<p>행정소송에서 <strong>집행정지 결정</strong>을 받으면 처분이 없었던 것과 같은 상태가 됩니다. 따라서 학교는 즉시 생기부에서 학교폭력 조치사항을 삭제해야 합니다.</p>\n<p>일부 학교에서 <strong>"집행정지 중" 문구를 부기</strong>하는 방식으로 대응하는 경우가 있으나, 대법원은 이를 삭제에 준하는 조치로 볼 수 없다고 명확히 판시했습니다. 학교가 삭제를 이행하지 않으면 <strong>간접강제 또는 행정대집행</strong>을 신청할 수 있습니다.</p>\n<p>집행정지 기간 동안 대학 입시가 진행되면 생기부에 학교폭력 기재가 없는 상태로 제출됩니다. 이것이 집행정지의 가장 큰 실익입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 집행정지 인용 → 즉시 삭제 의무 → "집행정지 중" 부기 불가 → 입시 서류 반영</blockquote>',
      },
    ],
    cases: [
      {
        title: '집행정지 시 생기부 즉시 삭제 의무에 관한 대법원 판결',
        summary:
          '대법원 2025무565 사건(2025.09.09 선고)에서 법원은 학교폭력 관련 처분의 효력이 정지되면 처분이 없었던 것과 같은 상태가 되므로, 행정청은 그 즉시 학교생활기록부에서 해당 기재를 삭제해야 하고, "집행정지 중" 문구만 부기하는 것은 학생에게 실질적 불이익을 주어 삭제에 준하는 조치로 볼 수 없다고 판시했습니다.',
        takeaway:
          '혐의를 받고 있다면 행정소송과 동시에 집행정지를 신청하여 생기부 기재를 빠르게 삭제받는 것이 입시에서 가장 효과적인 전략입니다.',
      },
    ],
    faq: [
      {
        question: '생기부에 기록되면 대학 입시에 얼마나 불리한가요?',
        answer: '수시 모집에서 학교생활기록부는 핵심 평가 자료이므로 <strong>학교폭력 기재는 상당히 불리</strong>합니다. 특히 학생부종합전형에서는 인성 평가에 직접적인 영향을 미칩니다. 정시 모집에서는 상대적으로 영향이 적지만, 면접이 있는 전형에서는 질문 대상이 될 수 있습니다.',
      },
      {
        question: '졸업 후 삭제되면 완전히 기록이 사라지나요?',
        answer: '<strong>학교폭력 조치 관련 기재는 삭제 후 완전히 소멸</strong>됩니다. 삭제된 기록은 어떤 기관에도 제공되지 않습니다. 다만 형사 사건으로 발전한 경우 수사기록은 별도로 관리됩니다.',
      },
      {
        question: '합의하면 생기부 기재를 피할 수 있나요?',
        answer: '합의 자체로 생기부 기재를 피할 수는 없습니다. 생기부 기재는 <strong>심의위원회의 조치 결정에 따라 자동으로 이루어지기</strong> 때문입니다. 다만 합의가 이루어지면 심의위원회에서 더 낮은 호수의 조치를 결정할 가능성이 높아져 간접적으로 도움이 됩니다.',
      },
      {
        question: '전학을 가면 새 학교에도 기록이 전달되나요?',
        answer: '<strong>학교생활기록부는 전학 시 새 학교로 이관</strong>됩니다. 따라서 학교폭력 조치 기재도 함께 전달됩니다. 전학으로 기록이 사라지지 않으므로, 기록 삭제를 위해서는 정식 절차(조기 삭제 심의 또는 집행정지)를 밟아야 합니다.',
      },
      {
        question: '조기 삭제 심의는 어디에 신청하나요?',
        answer: '<strong>해당 학교의 학교장에게 조기 삭제 심의를 요청</strong>합니다. 학교장이 교육지원청 심의위원회에 안건을 상정하고, 심의위원회가 삭제 여부를 결정합니다. 신청 시 조치 이행 증빙, 행동 개선 자료, 교사 의견서 등을 함께 제출하세요.',
      },
    ],
    cta: {
      text: '학교폭력 생기부 삭제 가능성 무료 진단받기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학교폭력 조치 불복 재심 절차', href: '/guide/school-violence/sanction-appeal-procedure' },
      { label: '학교폭력 가해학생 심의위원회 준비', href: '/guide/school-violence/perpetrator-committee-preparation' },
      { label: '학교폭력 합의하면 생기부 기록 안 남나요', href: '/guide/school-violence/settlement-prevents-school-record' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
  {
    domain: 'sexual-harassment',
    slug: 'report-required-evidence-documents',
    keyword: '직장 내 성희롱 신고 시 필요한 증거 서류 6가지',
    questionKeyword: '직장 내 성희롱을 신고하려면 어떤 증거 서류를 준비해야 하나요?',
    ctaKeyword: '직장 내 성희롱 신고 증거',
    type: '준비서류형',
    meta: {
      title: '성희롱 신고 시 필요한 증거 서류 6가지 | 로앤가이드',
      description: '직장 내 성희롱을 신고하려는데 어떤 증거가 필요한지 모르겠다면, 반드시 준비해야 할 서류와 증거 6가지를 지금 확인하세요.',
    },
    intro: '상사의 부적절한 언행이 반복되고 있습니다. 더 이상 참을 수 없어 신고를 결심했지만, 막상 어떤 증거를 어떻게 모아야 하는지 알 수 없습니다. 증거가 충분하지 않으면 "사실 확인 불가"로 끝나는 경우가 많습니다. 신고 전에 준비해야 할 증거와 서류를 정리해보세요.',
    sections: [
      {
        title: '증거 1~2: 직접 증거 — 녹음·녹화와 메시지 캡처',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제12조에 따라 사업주·상급자·근로자는 직장 내 성희롱을 하여서는 아니 됩니다</strong></p>\n<p><strong>①녹음 파일</strong>: 성희롱 발언이 있는 회의, 회식, 일대일 대화를 녹음하세요. 대화 당사자가 직접 녹음하는 것은 <strong>적법한 증거</strong>입니다(통신비밀보호법 제3조 제1항 단서). 녹음 시 날짜·장소·참석자를 별도로 메모해두세요.</p>\n<p><strong>②카카오톡·문자·이메일 캡처</strong>: 성적 발언이 담긴 메시지를 <strong>날짜·시간·발신자가 보이도록</strong> 캡처하세요. 원본 데이터를 삭제하지 말고 보관하되, 캡처본은 별도 저장장치(USB 등)에도 백업하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 당사자 녹음(적법) + 메시지 캡처(날짜·발신자 포함) + 원본 보관</blockquote>',
      },
      {
        title: '증거 3~4: 정황 증거 — 피해 일지와 목격자 진술',
        content:
          '<p><strong style="color:#1e3a5f">직장 내 성희롱은 밀실에서 발생하는 경우가 많아, 체계적인 피해 기록이 매우 중요합니다</strong></p>\n<p><strong>③피해 일지</strong>: 성희롱이 발생할 때마다 <strong>날짜, 시간, 장소, 상황, 가해자의 구체적 언행, 자신의 반응</strong>을 즉시 기록하세요. 손글씨 일지보다는 이메일로 자기 자신에게 보내두면 작성 시점이 자동 증명됩니다.</p>\n<p><strong>④목격자 진술서</strong>: 같은 공간에 있었던 동료의 진술이 큰 힘이 됩니다. 다만 동료가 회사 내 불이익을 걱정할 수 있으므로, <strong>진술서를 미리 확보</strong>해두는 것이 좋습니다. 목격자가 없다면 사건 직후 동료에게 상황을 이야기한 기록(카카오톡 대화 등)도 정황 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정황 증거: 피해 일지(이메일로 시점 증명) + 목격자 진술서 + 동료에게 한 고충 상담 기록</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">직장 내 성희롱 피해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '증거 5~6: 보강 증거 — 진료 기록과 사내 신고 기록',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조에 따라 사업주는 성희롱 신고를 접수하면 지체 없이 조사해야 합니다</strong></p>\n<p><strong>⑤정신과·심리상담 진료 기록</strong>: 성희롱으로 인한 스트레스, 우울증, 불면증 등으로 병원을 방문한 기록은 <strong>피해 사실과 인과관계를 입증</strong>하는 중요한 증거입니다. 진료 시 의사에게 직장 내 성희롱이 원인이라는 점을 명확히 말씀하세요.</p>\n<p><strong>⑥사내 고충 처리 신고 기록</strong>: 회사 인사팀이나 고충 처리 담당자에게 신고한 기록(이메일, 접수 확인서)이 있으면, 회사가 조치를 취하지 않은 사실을 입증할 수 있어 <strong>사업주 책임</strong>을 묻는 근거가 됩니다.</p>\n<p>추가로 확보하면 좋은 자료: <strong>사내 성희롱 예방교육 자료(가해자가 성희롱이 금지 행위임을 알았다는 증거), 업무 배치표(업무관련성 입증), 조직도(지위 관계 입증)</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보강 증거: 정신과 진료기록 + 사내 신고 기록 + 예방교육 자료 + 조직도</blockquote>',
      },
      {
        title: '증거를 정리하여 신고서를 작성하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">증거는 시간순으로 정리하고, 각 증거가 어떤 사실을 입증하는지 명확히 연결해야 합니다</strong></p>\n<p>신고서 작성 순서: <strong>①피해 사실 개요(누가, 언제, 어디서, 무엇을) ②구체적 피해 경위(시간순) ③각 피해 사실에 대응하는 증거 목록 ④피해 결과(정신적·신체적 피해) ⑤요구사항(가해자 징계, 부서 이동 등)</strong></p>\n<p>신고 경로는 3가지입니다: <strong>①사내 고충 처리(인사팀) ②고용노동부 신고(전화 1350) ③국가인권위원회 진정</strong>. 사내 처리가 불충분하면 외부 기관에 동시에 신고할 수 있습니다.</p>\n<p>무료 법률 상담: <strong>한국여성변호사회(02-3476-6501), 한국성폭력상담소(02-338-5801), 고용노동부 여성 고충 상담(1350)</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고서: 사실 개요 → 시간순 경위 → 증거 목록 → 피해 결과 → 요구사항</blockquote>',
      },
    ],
    cases: [
      {
        title: '직장 내 성희롱 사용자책임에 관한 대법원 판결',
        summary:
          '대법원 2021다219529 사건(2021.09.16 선고)에서 법원은 근로자가 동료 여성 근로자를 성적 대상으로 한 발언을 유포한 행위가 직장 내 성희롱에 해당하며, 간접적인 방법으로 성적 굴욕감을 느낄 수 있는 환경을 조성하는 경우도 성적 언동에 포함된다고 판시했습니다.',
        takeaway:
          '직접적인 신체 접촉 없이 성적 발언이나 소문 유포도 성희롱으로 인정될 수 있습니다. 간접적 피해도 증거를 확보하여 신고할 수 있으니, 주변에서 들은 성적 발언도 기록으로 남겨두세요.',
      },
    ],
    faq: [
      {
        question: '녹음이 불법은 아닌가요?',
        answer: '대화 당사자 본인이 녹음하는 것은 <strong>통신비밀보호법상 적법</strong>합니다. 다만 자신이 참여하지 않는 제3자의 대화를 녹음하면 불법입니다. 성희롱 피해자가 가해자와의 대화를 직접 녹음하는 것은 합법적인 증거 수집 방법입니다.',
      },
      {
        question: '증거가 녹음밖에 없어도 신고할 수 있나요?',
        answer: '<strong>하나의 증거만으로도 신고할 수 있습니다</strong>. 녹음 증거 하나로도 성희롱을 인정받은 사례가 다수 있습니다. 다만 여러 종류의 증거를 함께 제출하면 인정 가능성이 높아지므로, 피해 일지와 진료 기록도 함께 준비하세요.',
      },
      {
        question: '성희롱 증거를 회사 밖으로 반출해도 되나요?',
        answer: '개인정보나 영업비밀이 아닌 <strong>자신의 피해 사실에 관한 자료</strong>는 반출이 가능합니다. 다만 회사 내부 문서를 대량으로 반출하면 별도 문제가 될 수 있으므로, 자신의 피해와 직접 관련된 증거만 선별적으로 확보하세요.',
      },
      {
        question: '피해 일지를 나중에 작성해도 효력이 있나요?',
        answer: '사건 직후 작성한 기록이 가장 증명력이 높지만, <strong>나중에 작성한 일지도 증거로 사용 가능</strong>합니다. 다만 기억에 의존한 후기 작성은 정확성이 떨어질 수 있으므로, 가능한 한 사건 발생 즉시 기록하는 습관을 들이세요.',
      },
      {
        question: '동료가 목격자 진술을 꺼리면 어떻게 하나요?',
        answer: '동료가 직접 진술을 꺼리더라도, <strong>사건 직후 동료에게 상황을 이야기한 카카오톡 대화 기록</strong>이 정황 증거가 됩니다. 또한 국가인권위원회나 고용노동부 조사 시에는 기관이 직접 목격자를 소환하여 조사하므로, 목격자 이름만이라도 확보해두세요.',
      },
    ],
    cta: {
      text: '직장 내 성희롱 피해 상황 무료 진단받기',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '성희롱 가이드', href: '/guide/sexual-harassment' },
      { label: '성희롱 신고 후 2차 가해 주의사항', href: '/guide/sexual-harassment/secondary-victimization-after-report' },
      { label: '직장 내 성희롱 신고 후 보복 방지', href: '/guide/sexual-harassment/workplace-harassment-retaliation-protection' },
      { label: '직장 내 성희롱 초기 대응', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '성희롱 진단', href: '/diagnosis/sexual-harassment' },
    ],
  },
  {
    domain: 'sexual-harassment',
    slug: 'secondary-victimization-after-report',
    keyword: '성희롱 신고 후 2차 가해 유형과 대응법 4가지',
    questionKeyword: '성희롱 신고 후 2차 가해를 당하면 어떻게 대응해야 하나요?',
    ctaKeyword: '성희롱 2차 가해 대응',
    type: '실수함정형',
    meta: {
      title: '성희롱 신고 후 2차 가해 대응법 4가지 | 로앤가이드',
      description: '성희롱을 신고했는데 부서 이동, 따돌림 등 2차 피해가 걱정된다면, 법이 보장하는 보호 수단과 대응 방법 4가지를 지금 확인하세요.',
    },
    intro: '용기를 내어 직장 내 성희롱을 신고했습니다. 그런데 신고 이후 갑자기 부서 이동 통보를 받았고, 동료들은 "왜 일을 크게 만드냐"며 거리를 두기 시작합니다. 피해자인데 오히려 불이익을 받는 상황, 이것이 바로 2차 가해입니다. 법으로 보호받을 수 있는 방법을 가능한 한 알아두세요.',
    sections: [
      {
        title: '2차 가해 유형 1: 신고를 이유로 한 인사상 불이익',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조 제2항에 따라 사업주는 성희롱 피해 근로자에게 해고·전보·징계 등 불리한 조치를 해서는 안 됩니다. 위반 시 3년 이하의 징역 또는 3천만원 이하의 벌금에 처할 수 있습니다</strong></p>\n<p>가장 흔한 2차 가해 유형은 <strong>인사상 불이익</strong>입니다. 부서 전환, 직위 해제, 성과 평가 하락, 승진 누락, 계약 미갱신 등이 이에 해당할 소지가 있습니다.</p>\n<p>불이익 조치를 받았다면: <strong>①인사 명령서·통보문을 즉시 보관 ②성희롱 신고 시점과 불이익 조치 시점의 근접성을 기록 ③이전 인사 평가·근무 성적과 비교 자료 확보</strong>. 남녀고용평등법 제30조에 따라 <strong>불리한 조치가 성희롱과 무관하다는 증명 책임은 사업주</strong>에게 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 인사 명령서 보관 → 시점 근접성 기록 → 이전 평가 비교 → 사업주 증명책임 활용</blockquote>',
      },
      {
        title: '2차 가해 유형 2: 동료에 의한 따돌림과 비밀 누설',
        content:
          '<p><strong style="color:#1e3a5f">성희롱 조사 과정에 참여한 사람은 피해자 의사에 반하여 비밀을 누설해서는 안 됩니다(남녀고용평등법 제14조 제7항)</strong></p>\n<p>신고 후 <strong>피해 사실이 사내에 퍼지면서</strong> 동료로부터 고립되거나 "분위기 파괴자"라는 낙인이 찍히는 것이 대표적인 2차 가해입니다. 조사 참여자의 비밀 누설은 법 위반이므로, <strong>누가 피해 사실을 유출했는지</strong>를 확인하고 기록하세요.</p>\n<p>대응 방법: <strong>①비밀 유출 경위를 증거로 확보(누가 누구에게 말했는지 카카오톡 등으로 확인) ②사업주에게 비밀 유지 의무 위반 시정 요구 ③시정되지 않으면 고용노동부에 추가 신고</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 비밀 유출 경위 파악 → 유출자 특정 → 사업주 시정 요구 → 고용노동부 신고</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">성희롱 2차 가해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '2차 가해 유형 3: 피해자를 도운 동료에 대한 보복',
        content:
          '<p><strong style="color:#1e3a5f">대법원 판례에 따르면 사업주가 피해자를 도운 동료에게 부당한 불이익을 줌으로써 피해자에게 정신적 고통을 입히면, 피해자도 사업주에게 손해배상을 청구할 수 있습니다</strong></p>\n<p>목격자 진술을 해준 동료가 갑자기 불리한 부서로 발령받거나 징계를 받는 경우가 있습니다. 이는 <strong>간접적으로 피해자를 압박</strong>하는 효과를 가져, 피해자에 대한 2차 가해로 인정될 수 있습니다.</p>\n<p>동료에 대한 보복을 발견하면: <strong>①해당 동료에게 증거 보관을 권유 ②사업주에게 보복 조치 철회를 서면으로 요구 ③고용노동부에 진정 ④민사상 손해배상 청구 검토</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 동료 보복 사실 확인 → 서면 철회 요구 → 고용노동부 진정 → 손해배상 검토</blockquote>',
      },
      {
        title: '2차 가해 유형 4: 조사 과정에서의 피해자 비난',
        content:
          '<p><strong style="color:#1e3a5f">대법원 판례에 따르면 법원은 성희롱 소송 심리 시 "성인지 감수성"을 잃지 말아야 하며, 2차 피해에 대한 피해자의 불안감을 고려해야 합니다</strong></p>\n<p>사내 조사 과정에서 <strong>"왜 그때 거부하지 않았느냐" "옷차림에 문제가 있었던 것 아니냐"</strong> 같은 질문을 받는 것도 2차 가해에 해당할 소지가 있습니다. 성희롱 피해자가 즉시 거부 의사를 표시하지 못하는 것은 권력관계상 충분히 있을 수 있는 일이며, 이를 피해자 탓으로 돌리는 것은 위법 소지가 있습니다.</p>\n<p>조사 과정에서 부당한 대우를 받으면: <strong>①조사 내용을 녹음(적법) ②부당한 질문 내용을 상세히 기록 ③조사 담당자의 태도가 부적절하면 조사 중단 요청 ④외부 기관(고용노동부, 국가인권위)에 추가 진정</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사 시 주의: 조사 내용 녹음 → 부당 질문 기록 → 중단 요청 가능 → 외부 기관 진정</blockquote>',
      },
    ],
    cases: [
      {
        title: '직장 내 성희롱 신고 후 불이익 조치에 관한 대법원 판결',
        summary:
          '대법원 2016다202947 사건(2017.12.22 선고)에서 법원은 사업주가 성희롱 피해 근로자에게 불리한 조치를 한 경우 불법행위가 성립하고, 피해 근로자를 도운 동료에게 부당한 불이익을 주어 피해 근로자에게 정신적 고통을 입힌 경우에도 사업주의 손해배상책임이 인정된다고 판시했습니다.',
        takeaway:
          '성희롱 신고 후 어떤 형태의 불이익을 받더라도 법적으로 보호받을 수 있습니다. 불이익 조치의 증거를 확보하고, 고용노동부에 즉시 신고하세요.',
      },
    ],
    faq: [
      {
        question: '2차 가해를 받으면 어디에 신고해야 하나요?',
        answer: '<strong>고용노동부(1350)에 불이익 조치를 신고</strong>하세요. 사업주의 불리한 조치에 대해 시정명령을 받을 수 있습니다. 동시에 국가인권위원회에 진정을 제기하면 더 포괄적인 구제를 받을 수 있습니다.',
      },
      {
        question: '신고 후 부서 이동이 본인 요청이 아닌 경우에도 불이익인가요?',
        answer: '피해자의 의사에 반한 부서 이동은 <strong>불리한 조치에 해당</strong>합니다. 남녀고용평등법 제14조 제2항은 해고뿐 아니라 "그 밖의 불리한 조치"도 금지하고 있으며, 원치 않는 전보·배치 변경도 이에 포함됩니다.',
      },
      {
        question: '2차 가해 때문에 회사를 그만두면 실업급여를 받을 수 있나요?',
        answer: '성희롱 신고 후 2차 가해로 인한 퇴직은 <strong>"사업주의 귀책사유에 의한 이직"으로 인정</strong>되어 실업급여 수급이 가능합니다. 퇴직 전에 2차 가해 증거를 충분히 확보하고, 고용노동부에 먼저 상담하세요.',
      },
      {
        question: '가해자가 오히려 명예훼손으로 역고소하면 어떻게 되나요?',
        answer: '진실에 부합하는 성희롱 피해 사실 신고는 <strong>위법성이 조각되어 명예훼손이 성립하지 않습니다</strong>. 정당한 권리 행사로 보호받으므로, 역고소를 두려워하여 신고를 포기할 필요가 없습니다. 다만 사실과 다른 내용을 유포하면 문제가 될 수 있으니 사실관계에 기반하여 신고하세요.',
      },
      {
        question: '비밀이 유출되어 정신적 피해를 입으면 손해배상을 받을 수 있나요?',
        answer: '<strong>비밀 유출로 인한 정신적 손해배상 청구가 가능</strong>합니다. 조사참여자의 비밀 누설은 남녀고용평등법 위반이며, 이로 인해 발생한 2차 피해에 대해 사업주에게 사용자책임을 물을 수 있습니다. 위자료 청구도 가능합니다.',
      },
    ],
    cta: {
      text: '성희롱 2차 가해 상황 무료 진단받기',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '성희롱 가이드', href: '/guide/sexual-harassment' },
      { label: '성희롱 신고 시 필요한 증거 서류', href: '/guide/sexual-harassment/report-required-evidence-documents' },
      { label: '직장 내 성희롱 신고 후 보복 방지', href: '/guide/sexual-harassment/workplace-harassment-retaliation-protection' },
      { label: '직장 내 성희롱 초기 대응', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '성희롱 진단', href: '/diagnosis/sexual-harassment' },
    ],
  },
];
