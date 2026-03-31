import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [옆집 신축 건물로 일조권을 침해받은 주택 소유자]의 [건축 중·완공 후 대응 상황]에서 [일조권 침해 확인과 법적 대응 준비]를 돕는 페이지다.
// 2. 이 페이지는 [층간소음 피해자]의 [손해배상 청구 검토 상황]에서 [법원이 인정한 배상 금액과 판례 기준 파악]을 돕는 페이지다.
// 3. 이 페이지는 [매매 목적물 하자를 발견한 매수인]의 [하자 발견 직후 상황]에서 [하자담보책임 기반 손해배상 청구 준비]를 돕는 페이지다.
// 4. 이 페이지는 [중도금을 받지 못한 매도인]의 [매수인 미지급 상황]에서 [계약 이행 최고와 해제·손해배상 대응 준비]를 돕는 페이지다.
// 5. 이 페이지는 [경매 배당을 받으려는 채권자]의 [배당요구 전 상황]에서 [배당 순위 확인과 배당요구 절차 이해]를 돕는 페이지다.

export const spokesBatch17_11to15: SpokePage[] = [
  // ── 1. neighbor-dispute: 옆집 신축으로 일조권 침해받을 때 대응법 ──
  {
    domain: 'neighbor-dispute',
    slug: 'new-building-blocking-sunlight-response',
    keyword: '옆집 신축 건물 일조권 침해 대응법',
    questionKeyword: '옆집에서 건물을 올리는데 우리 집 햇빛이 완전히 가려질 것 같으면 어떻게 하나요?',
    ctaKeyword: '일조권 침해 대응 확인',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '옆집 신축 일조권 침해 대응 5단계 — 건축 중지부터 배상까지 | 로앤가이드',
      description: '옆집 건물이 올라가면서 햇빛이 완전히 차단되었다면 어떻게 대응해야 할까요? 일조권 침해 확인부터 손해배상 청구까지 5단계를 지금 확인하세요.',
    },
    intro: '옆집 공터에 5층 건물이 올라가기 시작했습니다. 1층 거실에 하루 4시간 이상 들어오던 햇빛이 이제 완전히 사라질 것 같습니다. 건축주에게 항의했지만 "허가 받은 건물이니 문제없다"는 답변뿐입니다. 일조권 침해는 건축허가와 별개로 민사상 손해배상 청구가 가능합니다.',
    sections: [
      {
        title: '첫째, 일조권 침해 기준을 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">동지일 기준 오전 9시~오후 3시 사이 연속 2시간 이상 일조가 확보되지 않으면 침해입니다</strong></p>\n<p>대법원 판례에 따르면, <strong>동지일(12월 22일 전후)</strong>을 기준으로 오전 9시부터 오후 3시 사이에 합계 <strong>4시간 이상</strong> 또는 연속 <strong>2시간 이상</strong>의 일조가 확보되지 않으면 수인한도를 넘는 침해로 봅니다.</p>\n<p>건축법 제61조와 건축법 시행령 제86조에 따르면, 전용주거지역·일반주거지역에서 건축물 높이는 일조 등의 확보를 위해 제한됩니다. 그러나 <strong>건축법상 허가를 받았더라도</strong> 민법 제217조의 생활방해 금지 의무는 별도로 적용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 동지일 09~15시 합계 4시간 또는 연속 2시간 일조 미확보 → 수인한도 초과</blockquote>',
      },
      {
        title: '둘째, 일조 피해 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">일조 영향 분석 보고서와 사진·영상이 핵심 증거입니다</strong></p>\n<p>건축사사무소나 일조 분석 전문 업체에 <strong>일조 영향 분석</strong>을 의뢰하세요. 3D 시뮬레이션으로 신축 건물 완공 후 일조 차단 시간을 정확히 산출할 수 있습니다. 비용은 보통 <strong>50만~150만원</strong> 수준입니다.</p>\n<p>동시에 <strong>현재 일조 상태를 사진·영상으로 촬영</strong>해두세요. 건축 전·중·후 일조 변화를 비교할 수 있는 자료가 소송에서 매우 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 일조 영향 분석 보고서 + 건축 전후 사진·영상 + 관할구청 건축허가 도면</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong>💬 일조권 침해 여부, 지금 바로 확인해보세요</strong><br/>내 상황에 맞는 대응 전략을 AI가 무료로 정리해드립니다.<br/><a href="/diagnosis/neighbor-dispute" style="color:#1e3a5f;font-weight:bold">👉 내 상황 무료 진단받기</a>\n</div>',
      },
      {
        title: '셋째, 건축 중지 가처분 신청을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">건물이 완공되기 전이라면 건축공사 중지 가처분이 가장 효과적입니다</strong></p>\n<p>건물이 아직 시공 중이라면 법원에 <strong>건축공사 중지 가처분</strong>을 신청할 수 있습니다. 가처분이 인용되면 일조권 침해 부분에 대한 설계 변경이나 층수 축소를 유도할 수 있습니다.</p>\n<p>가처분 신청 시에는 ①일조 침해 소명자료(일조 분석 보고서), ②보전의 필요성(완공 시 원상회복 불가), ③담보 공탁금이 필요합니다. 처리 기간은 보통 <strong>2~4주</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">포인트: 건축 중 → 가처분 신청 | 완공 후 → 손해배상 소송으로 전환</blockquote>',
      },
      {
        title: '넷째, 손해배상 청구의 범위와 금액을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">일조권 침해 손해배상은 재산적 손해와 정신적 손해로 나뉩니다</strong></p>\n<p><strong>재산적 손해</strong>는 주택 가치 하락분으로, 감정평가를 통해 산정합니다. 일반적으로 주택 시가의 <strong>5~20%</strong> 범위에서 인정됩니다. <strong>정신적 손해(위자료)</strong>는 세대당 <strong>100만~500만원</strong> 수준이 일반적입니다.</p>\n<p>침해 정도가 심할수록(일조 차단 시간이 길수록) 배상 금액이 높아집니다. 아파트 단지 전체가 피해를 입은 대규모 사건에서는 세대당 <strong>1,000만원 이상</strong>이 인정된 사례도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">배상 범위: 재산적 손해(시가 5~20% 하락) + 위자료(100만~500만원)</blockquote>',
      },
      {
        title: '다섯째, 관할 구청과 환경분쟁조정위원회를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송 전에 행정 민원과 환경분쟁조정 절차를 먼저 활용할 수 있습니다</strong></p>\n<p>관할 구청 건축과에 <strong>건축허가 조건 위반 여부</strong>를 확인하세요. 일조권 관련 건축법령 위반이 있으면 시정명령을 요청할 수 있습니다. 동시에 <strong>중앙환경분쟁조정위원회</strong>에 일조 피해 조정을 신청할 수 있습니다.</p>\n<p>환경분쟁조정은 소송보다 비용이 저렴하고(수수료 <strong>3만~20만원</strong>), 처리 기간도 <strong>6~9개월</strong>로 비교적 빠릅니다. 조정이 성립하면 <strong>재판상 화해</strong>와 같은 효력이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 구청 민원 → 환경분쟁조정 → 소송 | 조정 수수료 3만~20만원</blockquote>',
      },
    ],
    cases: [
      {
        title: '도로소음으로 인한 생활방해의 참을 한도 판단 기준을 제시한 사례',
        summary:
          '대법원 2014다57846 사건(대법원, 2016.11.25)에서 법원은 "소음이 민법 제217조의 생활방해에 해당하며, 참을 한도를 넘는지는 피해의 성질과 정도, 가해행위의 공공성, 방지조치 가능성, 공법상 규제기준 위반 여부, 지역성, 토지이용의 선후관계 등 모든 사정을 종합적으로 고려하여 판단해야 한다"고 판시했습니다.',
        takeaway:
          '일조권 침해도 같은 법리가 적용됩니다. 참을 한도 초과 여부를 입증하려면 침해 정도를 객관적 수치로 소명하는 것이 핵심입니다. 일조 분석 보고서를 반드시 준비하세요.',
      },
    ],
    faq: [
      {
        question: '건축허가를 받은 건물인데도 일조권 침해를 주장할 수 있나요?',
        answer: '네. 건축법상 허가와 민법상 생활방해 금지 의무는 <strong>별개</strong>입니다. 건축허가를 받았더라도 수인한도를 넘는 일조 침해가 있으면 손해배상 청구가 가능합니다.',
      },
      {
        question: '일조 영향 분석 비용은 얼마인가요?',
        answer: '건축사사무소 기준 보통 <strong>50만~150만원</strong>입니다. 3D 시뮬레이션으로 동지일 일조 시간을 정확히 산출합니다. 소송 시 이 비용은 상대방에게 청구할 수 있습니다.',
      },
      {
        question: '건물이 이미 완공된 후에도 대응할 수 있나요?',
        answer: '완공 후에도 <strong>손해배상 소송</strong>이 가능합니다. 다만 건축 중지 가처분은 더 이상 사용할 수 없으므로, 금전 배상 중심으로 대응하게 됩니다.',
      },
      {
        question: '일조권 침해 손해배상 청구의 소멸시효는 얼마인가요?',
        answer: '불법행위로 인한 손해배상 청구권은 피해자가 손해를 안 날부터 <strong>3년</strong>, 불법행위일로부터 <strong>10년</strong>입니다. 건물 완공 후 가능한 빨리 청구하는 것이 유리합니다.',
      },
      {
        question: '환경분쟁조정과 소송 중 어떤 것이 유리한가요?',
        answer: '환경분쟁조정은 비용이 저렴하고(<strong>3만~20만원</strong>) 절차가 빠릅니다. 다만 상대방이 조정에 불응하면 소송으로 전환해야 합니다. 피해 금액이 크면 소송이 더 유리할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이웃분쟁 진단', href: '/diagnosis/neighbor-dispute' },
      { label: '층간소음 피해 대응법', href: '/guide/neighbor-dispute/floor-noise-dispute-response' },
      { label: '이웃 분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '부동산 매매 가이드', href: '/guide/real-estate-sale' },
    ],
  },

  // ── 2. neighbor-dispute: 층간소음 손해배상 인정 금액 주요 판례 ──
  {
    domain: 'neighbor-dispute',
    slug: 'floor-noise-damage-amount-key-cases',
    keyword: '층간소음 손해배상 인정 금액 주요 판례',
    questionKeyword: '층간소음으로 손해배상을 받으려면 얼마나 인정되나요?',
    ctaKeyword: '층간소음 배상 금액 확인',
    type: '판례형',
    perspective: '피해자',
    meta: {
      title: '층간소음 손해배상 금액 3가지 판례 기준 정리 | 로앤가이드',
      description: '층간소음 때문에 잠을 못 자고 스트레스를 받고 있다면, 법원이 실제로 인정한 손해배상 금액과 판례 기준을 지금 확인하세요.',
    },
    intro: '매일 밤 윗집에서 쿵쿵거리는 소리에 잠을 이루지 못하고 있습니다. 관리사무소에 민원을 넣고 층간소음 이웃사이센터에도 신고했지만 달라진 것이 없습니다. 이제 손해배상을 청구하려는데, 과연 법원은 얼마를 인정해줄까요? 실제 판례 기준을 정리했습니다.',
    sections: [
      {
        title: '첫째, 법원이 인정하는 층간소음 손해배상의 유형을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">층간소음 손해배상은 위자료(정신적 손해)가 중심이고, 치료비·이사비용이 추가될 수 있습니다</strong></p>\n<p>층간소음 손해배상 소송에서 법원은 주로 <strong>위자료(정신적 손해배상)</strong>를 인정합니다. 불면증·우울증 등으로 병원 치료를 받았다면 <strong>치료비</strong>도 별도로 청구할 수 있습니다.</p>\n<p>극심한 소음으로 이사를 갔다면 <strong>이사비용과 중개보수</strong>도 손해로 인정받을 수 있습니다. 다만 인과관계를 입증하는 것이 핵심입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">배상 항목: 위자료 + 치료비 + 이사비용(인과관계 입증 시)</blockquote>',
      },
      {
        title: '둘째, 법원이 인정한 위자료 금액 범위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">일반적인 층간소음 위자료는 50만~300만원, 극심한 경우 500만원 이상도 가능합니다</strong></p>\n<p>법원 판례를 종합하면, 층간소음 위자료 인정 금액은 대략 다음과 같습니다:</p>\n<p>① <strong>경미한 소음</strong>(간헐적, 단기간): <strong>50만~100만원</strong><br/>② <strong>중등도 소음</strong>(수개월 지속, 야간 포함): <strong>100만~300만원</strong><br/>③ <strong>극심한 소음</strong>(수년간 지속, 고의성 인정): <strong>300만~500만원 이상</strong></p>\n<p>소음의 강도·빈도·지속 기간, 가해자의 고의성, 피해자의 건강 피해 정도가 금액 결정에 중요한 요소입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">금액 기준: 경미 50~100만원 | 중등도 100~300만원 | 극심 300~500만원+</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong>💬 내 층간소음 피해, 얼마나 배상받을 수 있을까요?</strong><br/>AI가 내 상황을 분석해서 예상 배상 범위를 안내해드립니다.<br/><a href="/diagnosis/neighbor-dispute" style="color:#1e3a5f;font-weight:bold">👉 내 상황 무료 진단받기</a>\n</div>',
      },
      {
        title: '셋째, 배상 금액을 높이는 핵심 증거를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">소음 측정 기록, 진단서, 민원 이력이 금액을 좌우합니다</strong></p>\n<p>① <strong>소음 측정 기록</strong>: 층간소음 측정 앱(예: 소음측정기)으로 날짜·시간·데시벨을 기록하세요. 환경부 기준 야간(22시~06시) <strong>40dB 초과</strong>가 위반입니다.<br/>② <strong>의사 진단서</strong>: 불면증, 이명, 우울증 등의 진단서가 있으면 위자료가 크게 높아집니다.<br/>③ <strong>민원 신고 이력</strong>: 관리사무소, 이웃사이센터, 경찰 신고 기록이 "가해자가 소음을 인지하고도 시정하지 않았다"는 점을 입증합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 증거: 소음 측정 기록 + 진단서 + 민원·신고 이력 + 문자·메모</blockquote>',
      },
      {
        title: '넷째, 고의적 소음 발생은 스토킹처벌법 적용까지 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">반복적 고의 소음은 형사 처벌 대상이 될 수 있습니다</strong></p>\n<p>2023년 대법원은 수개월간 반복적으로 벽을 두드리는 행위가 <strong>스토킹범죄</strong>에 해당한다고 판시했습니다. 고의적 층간소음이 지속·반복되면 민사 손해배상뿐 아니라 <strong>형사 고소</strong>도 가능합니다.</p>\n<p>스토킹처벌법 위반으로 유죄가 인정되면 <strong>3년 이하의 징역 또는 3천만원 이하의 벌금</strong>에 처해집니다. 형사 유죄 판결은 민사 손해배상 소송에서도 유리한 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 고의적 반복 소음 → 스토킹범죄 성립 가능 | 3년 이하 징역 또는 3천만원 이하 벌금</blockquote>',
      },
      {
        title: '다섯째, 소송 전 환경분쟁조정으로 빠르게 해결할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">환경분쟁조정위원회를 통하면 소송보다 빠르고 저렴하게 배상을 받을 수 있습니다</strong></p>\n<p><strong>중앙환경분쟁조정위원회</strong>에 층간소음 피해 조정을 신청하세요. 수수료는 <strong>3만~20만원</strong>으로 저렴하고, 처리 기간은 약 <strong>6~9개월</strong>입니다.</p>\n<p>조정에서 인정되는 배상 금액도 소송과 크게 다르지 않습니다. 조정 성립 시 <strong>재판상 화해</strong>와 같은 효력이 있어 강제집행도 가능합니다. 조정이 불성립되면 소송으로 전환하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">환경분쟁조정: 수수료 3만~20만원 | 6~9개월 | 조정 성립 시 강제집행 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '반복적 고의 소음 발생이 스토킹범죄에 해당한다고 본 사례',
        summary:
          '대법원 2023도10313 사건(대법원, 2023.12.14)에서 법원은 "빌라 아래층 거주자가 수개월간 반복하여 늦은 밤부터 새벽 사이에 벽을 두드리고 음향기기를 튼 행위는 사회통념상 합리적 범위 내의 정당한 행위가 아니며, 객관적·일반적으로 불안감 내지 공포심을 일으키기에 충분하여 스토킹범죄를 구성한다"고 판시했습니다.',
        takeaway:
          '층간소음이 단순 민사 문제를 넘어 형사 처벌 대상이 될 수 있다는 점을 보여주는 판례입니다. 고의적 반복 소음에 시달리고 있다면 형사 고소도 함께 검토하세요.',
      },
    ],
    faq: [
      {
        question: '층간소음 손해배상 소송 비용은 얼마인가요?',
        answer: '소송금액에 따라 다르지만, 300만원 청구 시 인지대 약 <strong>1만5천원</strong> + 송달료 약 5만원입니다. 변호사 선임 없이 소액소송으로 진행할 수도 있습니다.',
      },
      {
        question: '소음 측정 앱 기록도 증거로 인정되나요?',
        answer: '법원에서 <strong>보조적 증거</strong>로 활용됩니다. 정밀한 증거가 필요하면 환경분쟁조정위원회를 통해 <strong>공식 소음 측정</strong>을 의뢰할 수 있습니다.',
      },
      {
        question: '층간소음 기준은 몇 데시벨인가요?',
        answer: '공동주택 층간소음 기준은 직접충격소음 <strong>1분간 등가소음도 43dB(주간)/38dB(야간)</strong>, 공기전달소음 <strong>5분간 등가소음도 45dB(주간)/40dB(야간)</strong>입니다.',
      },
      {
        question: '세입자인데도 손해배상을 청구할 수 있나요?',
        answer: '네. 층간소음 손해배상은 <strong>실거주자</strong>가 청구할 수 있습니다. 소유자가 아닌 임차인도 직접 손해배상 소송을 제기할 수 있습니다.',
      },
      {
        question: '상대방이 배상금을 안 내면 어떻게 하나요?',
        answer: '판결 확정 후에도 안 내면 <strong>강제집행</strong>(예금·급여 압류)을 신청할 수 있습니다. 환경분쟁조정 결과도 강제집행이 가능합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이웃분쟁 진단', href: '/diagnosis/neighbor-dispute' },
      { label: '층간소음 피해 대응법', href: '/guide/neighbor-dispute/floor-noise-dispute-response' },
      { label: '옆집 신축 일조권 침해 대응법', href: '/spoke/neighbor-dispute/new-building-blocking-sunlight-response' },
      { label: '소액소송 직접 하는 법', href: '/spoke/small-claims/small-claims-self-filing-guide' },
    ],
  },

  // ── 3. real-estate-sale: 매매 목적물 하자 발견 시 손해배상 청구 ──
  {
    domain: 'real-estate-sale',
    slug: 'sale-defect-discovery-damage-claim',
    keyword: '매매 목적물 하자 발견 시 손해배상 청구',
    questionKeyword: '부동산을 매수한 뒤 하자를 발견했는데 매도인에게 손해배상을 받을 수 있나요?',
    ctaKeyword: '매매 하자 손해배상 확인',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '매매 하자 발견 후 손해배상 청구 5단계 절차 | 로앤가이드',
      description: '부동산을 매수한 뒤 누수, 균열 등 하자를 발견했다면 매도인에게 어떻게 배상을 받을 수 있을까요? 하자담보책임 청구 절차를 지금 확인하세요.',
    },
    intro: '아파트를 매수하고 입주한 지 2주 만에 화장실 벽 안쪽에서 심한 누수가 발견되었습니다. 매도인에게 연락했더니 "몰랐다"며 책임을 부인합니다. 매매계약에서 하자가 발견되면 매도인에게 하자담보책임을 물어 손해배상을 청구할 수 있습니다.',
    sections: [
      {
        title: '첫째, 하자의 종류와 하자담보책임 성립 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">민법 제580조에 따라 매매 목적물에 하자가 있으면 매도인이 담보책임을 집니다</strong></p>\n<p><strong>하자</strong>란 매매 목적물이 거래통념상 기대되는 객관적 성질이나 성능을 갖추지 못한 상태를 말합니다. 누수, 균열, 곰팡이, 불법 증축, 토양 오염 등이 모두 해당합니다.</p>\n<p>민법 제580조에 따라 매수인이 하자를 <strong>알지 못한 경우</strong>(선의·무과실) 매도인에게 손해배상 또는 계약 해제를 청구할 수 있습니다. 매도인이 하자를 알았는지 여부는 관계없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: 객관적 하자 존재 + 매수인이 하자를 몰랐을 것 + 6개월 이내 청구</blockquote>',
      },
      {
        title: '둘째, 하자 증거를 즉시 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">발견 즉시 사진·영상 촬영과 전문가 점검을 진행하세요</strong></p>\n<p>하자를 발견하면 즉시 <strong>사진·영상</strong>을 촬영하고, 발견 날짜와 상태를 기록하세요. 가능하면 <strong>건축사 또는 하자 전문 감정업체</strong>에 점검을 의뢰하세요.</p>\n<p>매도인에게 하자 사실을 <strong>내용증명</strong>으로 통지하는 것이 중요합니다. 구두 통보만으로는 "통보받은 적 없다"고 다투어질 수 있습니다. 내용증명에는 ①하자 내용, ②발견 일시, ③보수 또는 손해배상 요청을 명시하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 행동: 사진·영상 촬영 → 전문가 점검 의뢰 → 매도인에게 내용증명 발송</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong>💬 매매 하자 발견, 지금 바로 대응 전략을 확인하세요</strong><br/>AI가 내 상황에 맞는 청구 방법과 증거 준비를 안내해드립니다.<br/><a href="/diagnosis/real-estate-sale" style="color:#1e3a5f;font-weight:bold">👉 내 상황 무료 진단받기</a>\n</div>',
      },
      {
        title: '셋째, 하자담보책임의 행사 기간을 놓치지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">하자를 안 날로부터 6개월 이내에 청구해야 합니다</strong></p>\n<p>민법 제582조에 따라 매수인은 하자를 <strong>안 날로부터 6개월</strong> 이내에 손해배상 또는 계약 해제를 청구해야 합니다. 이 기간을 넘기면 하자담보책임을 물을 수 없습니다.</p>\n<p>다만 <strong>채무불이행에 기한 손해배상</strong>(민법 제390조)은 별도로 10년의 소멸시효가 적용됩니다. 대법원 판례에 따르면 하자담보책임과 채무불이행책임은 <strong>경합적으로 인정</strong>됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기간: 하자담보책임 6개월 | 채무불이행 10년 | 경합 청구 가능</blockquote>',
      },
      {
        title: '넷째, 손해배상 범위와 금액 산정 기준을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">보수비용, 가치 하락분, 정신적 손해까지 청구할 수 있습니다</strong></p>\n<p><strong>보수비용</strong>이 가장 기본적인 손해입니다. 누수 수리비, 곰팡이 제거비, 구조 보강비 등 실제 하자를 보수하는 데 드는 비용 전액을 청구할 수 있습니다.</p>\n<p>하자로 인해 부동산 가치가 하락했다면 <strong>가치 하락분</strong>도 손해에 포함됩니다. 심한 스트레스를 받았다면 <strong>위자료</strong>도 별도로 청구 가능합니다. 보수비용은 전문 업체의 <strong>견적서</strong>를 증거로 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">배상 범위: 보수비용 + 가치 하락분 + 위자료 | 견적서가 핵심 증거</blockquote>',
      },
      {
        title: '다섯째, 협상이 안 되면 소송으로 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 후 2주 이내 응답이 없으면 소송을 준비하세요</strong></p>\n<p>매도인이 내용증명에 응하지 않거나 배상을 거부하면 <strong>민사 소송</strong>을 제기합니다. 소송금액이 3,000만원 이하이면 <strong>소액소송</strong>으로 간이하게 진행할 수 있습니다.</p>\n<p>소송에서는 ①하자의 존재(전문가 감정), ②매수인의 선의·무과실, ③손해 금액(견적서·감정서)을 입증해야 합니다. 하자가 심각하여 계약의 목적을 달성할 수 없다면 <strong>계약 해제</strong>도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 내용증명 → 협상 → 소송(소액/일반) | 3,000만원 이하 → 소액소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '매매 목적물에 폐기물이 매립된 경우 하자담보책임을 인정한 사례',
        summary:
          '대법원 2017다202050 사건(대법원, 2021.04.08)에서 법원은 "매매의 목적물이 거래통념상 기대되는 객관적 성질이나 성능을 갖추지 못한 경우 매도인은 하자담보책임을 부담하며, 하자담보책임과 채무불이행책임은 경합적으로 인정된다"고 판시했습니다.',
        takeaway:
          '매매 목적물의 하자를 발견했다면 하자담보책임(6개월)과 채무불이행(10년) 두 가지 청구권을 모두 검토하세요. 기간이 촉박하면 채무불이행 책임으로도 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '매도인이 "하자를 몰랐다"고 하면 책임이 없나요?',
        answer: '아닙니다. 하자담보책임은 매도인의 <strong>과실 여부와 관계없이</strong> 성립합니다. 매도인이 몰랐어도 객관적 하자가 존재하면 배상 의무가 있습니다.',
      },
      {
        question: '매매계약서에 "현 상태 인도" 조항이 있으면 청구가 안 되나요?',
        answer: '"현 상태 인도" 조항이 있어도 매도인이 <strong>하자를 알고 고지하지 않은 경우</strong>에는 면책되지 않습니다. 또한 은닉된 하자까지 면책하는 것으로 해석되지 않는 것이 판례 입장입니다.',
      },
      {
        question: '입주한 지 1년이 지났는데 하자를 발견했습니다. 청구할 수 있나요?',
        answer: '하자담보책임은 하자를 <strong>안 날로부터 6개월</strong>이 기준이므로, 1년 후 발견했어도 발견일부터 6개월 이내라면 청구 가능합니다. 채무불이행 책임은 <strong>10년</strong> 소멸시효가 적용됩니다.',
      },
      {
        question: '하자 보수비용은 어떻게 산정하나요?',
        answer: '전문 시공업체 <strong>2~3곳의 견적서</strong>를 받아 평균값을 기준으로 청구하는 것이 일반적입니다. 소송에서는 법원이 <strong>감정인</strong>을 선임하여 정확한 금액을 산정합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/real-estate-sale',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부동산 매매 진단', href: '/diagnosis/real-estate-sale' },
      { label: '매매계약서 필수 특약 체크리스트', href: '/spoke/real-estate-sale/sale-contract-essential-clauses' },
      { label: '매매계약 해제와 계약금 반환', href: '/spoke/real-estate-sale/contract-cancel-deposit-return' },
      { label: '부동산 하자 손해배상 청구 절차', href: '/spoke/real-estate-sale/real-estate-defect-damage-claim' },
    ],
  },

  // ── 4. real-estate-sale: 중도금 미지급 시 매도인 대응 방법 ──
  {
    domain: 'real-estate-sale',
    slug: 'unpaid-interim-seller-response',
    keyword: '중도금 미지급 시 매도인 대응 방법',
    questionKeyword: '매수인이 중도금을 안 내면 매도인은 어떻게 해야 하나요?',
    ctaKeyword: '중도금 미지급 대응 확인',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '중도금 미지급 시 매도인 대응법 4가지 — 최고부터 해제까지 | 로앤가이드',
      description: '매수인이 중도금을 지급하지 않아 계약이 멈춰버렸다면, 매도인이 취할 수 있는 4가지 법적 대응 방법을 지금 확인하세요.',
    },
    intro: '아파트 매매계약을 체결하고 계약금은 받았지만, 매수인이 중도금 지급일을 2주나 넘겼습니다. 연락하면 "곧 보내겠다"고만 하고 실제로 입금이 없습니다. 이대로 기다려야 할지, 계약을 해제해도 되는지 판단이 어렵습니다.',
    sections: [
      {
        title: '첫째, 중도금 미지급이 계약 해제 사유인지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">중도금 미지급만으로 바로 계약을 해제할 수는 없습니다</strong></p>\n<p>부동산 매매에서 매수인이 중도금을 지급하지 않으면 <strong>채무불이행</strong>에 해당합니다. 그러나 민법 제544조에 따라 매도인은 먼저 <strong>상당한 기간을 정하여 이행을 최고</strong>해야 합니다.</p>\n<p>최고 기간 내에도 이행하지 않으면 비로소 <strong>계약 해제</strong>가 가능합니다. 상당한 기간은 통상 <strong>7~14일</strong>로 봅니다. 최고 없이 바로 해제하면 해제의 효력이 부정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 중도금 미지급 → 즉시 해제 불가 → 이행 최고(7~14일) → 미이행 시 해제</blockquote>',
      },
      {
        title: '둘째, 이행 최고 내용증명을 발송하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명으로 이행 최고와 해제 의사를 동시에 전달하세요</strong></p>\n<p>내용증명에 반드시 포함할 사항: ①<strong>미지급 중도금 금액과 지급기일</strong>, ②<strong>"본 서면 도달 후 14일 이내에 지급하지 않으면 계약을 해제한다"</strong>는 최고 및 해제 예고, ③<strong>계약 해제 시 계약금 몰취</strong> 안내입니다.</p>\n<p>이행 최고와 해제 의사를 <strong>하나의 내용증명에 조건부로 기재</strong>할 수 있습니다. "기한 내 미이행 시 별도 통지 없이 해제된 것으로 본다"고 명시하면 추가 해제 통보가 불필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">내용증명 포인트: 미지급 금액 + 14일 최고 + 미이행 시 자동 해제 조건</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong>💬 매수인이 중도금을 안 냅니다. 지금 뭘 해야 할까요?</strong><br/>AI가 계약 상황을 분석하고 최적의 대응 방법을 안내해드립니다.<br/><a href="/diagnosis/real-estate-sale" style="color:#1e3a5f;font-weight:bold">👉 내 상황 무료 진단받기</a>\n</div>',
      },
      {
        title: '셋째, 계약 해제 후 계약금 몰취 권리를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">매수인 귀책 해제 시 계약금을 위약금으로 몰취할 수 있습니다</strong></p>\n<p>매수인의 채무불이행으로 계약이 해제되면 매도인은 받은 <strong>계약금을 위약금으로 몰취</strong>할 수 있습니다. 대부분의 부동산 매매계약서에 "매수인 귀책 시 계약금은 매도인에게 귀속된다"는 조항이 있습니다.</p>\n<p>만약 실제 손해가 계약금보다 크다면 <strong>초과 손해배상</strong>도 청구할 수 있습니다. 다만 계약서에 "위약금은 손해배상의 예정으로 한다"고 되어 있으면 계약금 금액이 상한이 될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">권리: 계약금 몰취 + 초과 손해 시 추가 배상 청구 가능</blockquote>',
      },
      {
        title: '넷째, 이행 청구와 해제 중 유리한 쪽을 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">시세 상승 시 이행 청구, 시세 하락 시 해제가 유리합니다</strong></p>\n<p>계약 후 <strong>시세가 올랐다면</strong> 해제보다 <strong>이행 청구 + 지연이자</strong>가 유리합니다. 매수인에게 중도금·잔금 지급을 구하는 소송을 제기하고, 지연이자(연 <strong>5%</strong>, 소장 송달 후 <strong>12%</strong>)를 청구하세요.</p>\n<p>반대로 <strong>시세가 하락했다면</strong> 해제하고 계약금을 몰취한 뒤 다른 매수인을 찾는 것이 유리할 수 있습니다. 어떤 선택이 더 유리한지는 시세 변동폭과 계약금 금액을 비교하여 판단하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판단: 시세 ↑ → 이행 청구 유리 | 시세 ↓ → 해제 + 계약금 몰취 유리</blockquote>',
      },
      {
        title: '다섯째, 매도인이 주의해야 할 실수를 피하세요',
        content:
          '<p><strong style="color:#1e3a5f">이행 최고 없는 해제, 이중계약, 이행 거절은 매도인에게 불리하게 작용합니다</strong></p>\n<p>가장 흔한 실수 3가지: ①<strong>이행 최고 없이 바로 해제 통보</strong> → 해제 무효 위험. ②<strong>매수인 미이행 중 다른 사람과 계약</strong> → 이중매매로 배임죄 성립 가능(특경법 적용 시 가중처벌). ③<strong>매수인이 늦게라도 이행하겠다고 할 때 수령 거절</strong> → 매도인 귀책으로 전환될 수 있습니다.</p>\n<p>반드시 <strong>내용증명으로 절차를 밟고</strong>, 해제가 확정될 때까지 제3자와 새 계약을 체결하지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 최고 없는 해제 ✗ | 해제 전 이중계약 ✗ | 수령 거절 ✗</blockquote>',
      },
    ],
    cases: [
      {
        title: '부동산 이중매매에서 배임죄 성립이 문제된 사례',
        summary:
          '대법원 2017도17494 사건(대법원, 2018.05.17)에서 법원은 "부동산 매도인이 매수인에게 소유권이전등기를 해주기 전에 제3자에게 이중으로 매도하여 소유권이전등기를 넘겨준 행위는 배임죄에 해당한다"고 판시했습니다.',
        takeaway:
          '매수인의 중도금 미지급에 화가 나더라도 계약이 적법하게 해제되기 전에 제3자와 새 매매계약을 체결하면 배임죄로 처벌받을 수 있습니다. 반드시 절차를 지키세요.',
      },
    ],
    faq: [
      {
        question: '중도금 지급일이 지나면 바로 계약을 해제할 수 있나요?',
        answer: '아닙니다. 민법 제544조에 따라 먼저 <strong>상당한 기간(7~14일)</strong>을 정하여 이행을 최고하고, 그 기간이 지나도 이행하지 않을 때 해제할 수 있습니다.',
      },
      {
        question: '계약금은 돌려줘야 하나요?',
        answer: '매수인 귀책으로 해제되면 <strong>계약금을 돌려줄 필요가 없습니다</strong>. 계약금은 위약금으로 매도인에게 귀속됩니다.',
      },
      {
        question: '매수인이 일부만 보내겠다고 하면 받아야 하나요?',
        answer: '원칙적으로 <strong>일부 이행도 수령 거절 사유</strong>가 됩니다. 다만 수령 후 나머지를 최고하는 방법도 있습니다. 상황에 따라 법률 상담을 받는 것이 안전합니다.',
      },
      {
        question: '이행 최고와 해제 통보를 같이 보낼 수 있나요?',
        answer: '네. "14일 이내 미이행 시 <strong>별도 통지 없이 해제</strong>된 것으로 본다"는 조건부 해제 의사를 하나의 내용증명에 기재할 수 있습니다.',
      },
      {
        question: '중도금 미지급에 대한 지연이자는 얼마인가요?',
        answer: '약정이 없으면 민법상 법정이율 연 <strong>5%</strong>, 소장 송달 후에는 소송촉진법에 따라 연 <strong>12%</strong>가 적용됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/real-estate-sale',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부동산 매매 진단', href: '/diagnosis/real-estate-sale' },
      { label: '매매계약 해제와 계약금 반환', href: '/spoke/real-estate-sale/contract-cancel-deposit-return' },
      { label: '매매 하자 발견 시 손해배상 청구', href: '/spoke/real-estate-sale/sale-defect-discovery-damage-claim' },
      { label: '부동산 매매 분쟁 시작 가이드', href: '/spoke/real-estate-sale/sale-dispute-where-to-start' },
    ],
  },

  // ── 5. real-estate-auction: 경매 배당 순위와 배당요구 방법 ──
  {
    domain: 'real-estate-auction',
    slug: 'distribution-priority-and-claim',
    keyword: '경매 배당 순위와 배당요구 방법',
    questionKeyword: '경매에서 배당을 받으려면 어떤 순서로 받게 되나요?',
    ctaKeyword: '경매 배당 순위 확인',
    type: '절차타임라인형',
    meta: {
      title: '경매 배당 순위 7단계와 배당요구 절차 정리 | 로앤가이드',
      description: '경매에서 배당을 받으려는데 내 순위가 어떻게 되는지 모르겠다면, 배당 순위 기준과 배당요구 방법을 지금 확인하세요.',
    },
    intro: '채무자의 부동산이 경매에 넘어갔습니다. 나도 돈을 빌려줬는데, 경매 대금에서 배당을 받을 수 있을까요? 근저당권자, 임차인, 가압류 채권자 등 여러 채권자가 있을 때 누가 먼저 받는지에 따라 결과가 완전히 달라집니다.',
    timelineSteps: ['배당요구 종기 확인', '배당요구서 제출', '매각·대금 납부', '배당표 작성', '배당기일 출석', '이의 제기', '배당금 수령'],
    sections: [
      {
        title: '첫째, 경매 배당 순위의 기본 구조를 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">경매 대금은 법정 순위에 따라 배분됩니다</strong></p>\n<p>부동산 경매에서 매각대금은 다음 순서로 배당됩니다:</p>\n<p>① <strong>경매비용</strong>(집행비용)<br/>② <strong>최우선변제권 있는 소액임차인</strong><br/>③ <strong>당해세</strong>(재산세, 종합부동산세 등)<br/>④ <strong>근저당권자·전세권자</strong>(설정일 순서)<br/>⑤ <strong>일반 임금채권</strong>(최종 3개월분 임금·퇴직금)<br/>⑥ <strong>조세채권</strong>(국세·지방세, 법정기일 기준)<br/>⑦ <strong>일반 채권자</strong>(가압류 채권자 등, 안분 배당)</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순위: 경매비용 → 소액임차인 → 당해세 → 근저당 → 임금 → 조세 → 일반채권</blockquote>',
      },
      {
        title: '둘째, 배당요구 종기까지 반드시 배당요구를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">배당요구 종기를 넘기면 배당에서 제외됩니다</strong></p>\n<p>경매 개시 후 법원이 정한 <strong>배당요구 종기</strong>까지 배당요구서를 제출해야 합니다. 종기는 보통 경매 개시결정 등기 후 <strong>3개월~6개월</strong> 사이에 정해집니다. 법원 경매 사이트(court.go.kr)에서 확인하세요.</p>\n<p>배당요구서에는 ①채권의 원인과 금액, ②증빙서류(계약서, 차용증, 판결문 등)를 첨부합니다. <strong>집행력 있는 정본</strong>(확정판결, 공정증서 등)이 있는 채권자는 배당요구가 필수이며, 근저당권자·전세권자·임차인은 별도로 배당요구를 하지 않아도 배당받을 수 있지만 <strong>확실한 권리 확보를 위해 하는 것이 안전</strong>합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 배당요구 종기 확인 → 기한 내 배당요구서 + 증빙서류 제출</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong>💬 내 채권, 경매에서 배당받을 수 있을까요?</strong><br/>AI가 채권 종류와 순위를 분석해서 예상 배당 여부를 안내해드립니다.<br/><a href="/diagnosis/real-estate-auction" style="color:#1e3a5f;font-weight:bold">👉 내 상황 무료 진단받기</a>\n</div>',
      },
      {
        title: '셋째, 근저당권과 가압류의 순위 결정 원리를 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">설정일(등기 접수일)이 빠를수록 우선순위가 높습니다</strong></p>\n<p><strong>근저당권</strong>은 등기 접수일 순서로 우선변제를 받습니다. 1순위 근저당권자가 먼저 배당받고, 남은 금액에서 2순위가 받습니다. <strong>가압류</strong>는 근저당권보다 후순위지만, 일반 채권자 사이에서는 <strong>안분 배당</strong>(채권액 비율로 배분)됩니다.</p>\n<p>민법 제368조에 따르면, 동일 채권을 담보로 수개의 부동산에 공동저당권이 설정된 경우 동시배당 시 <strong>각 부동산의 경매대가에 비례</strong>하여 채권의 분담을 정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 근저당 → 등기 접수일순 | 가압류·일반채권 → 안분 배당</blockquote>',
      },
      {
        title: '넷째, 배당표를 확인하고 이의가 있으면 즉시 다투세요',
        content:
          '<p><strong style="color:#1e3a5f">배당기일에 출석하여 배당표를 확인하고, 이의가 있으면 즉시 신청하세요</strong></p>\n<p>매각대금 납부 후 법원은 <strong>배당표</strong>를 작성하여 이해관계인에게 통지합니다. 배당기일에 출석하여 배당표 내용(각 채권자 배당 금액)을 확인하세요.</p>\n<p>배당표에 이의가 있으면 <strong>배당기일에 출석하여 이의를 진술</strong>해야 합니다. 배당기일에 이의를 제기하지 않으면 배당표가 확정되어 더 이상 다툴 수 없습니다. 이의를 제기하면 <strong>1주일 이내에 배당이의 소송</strong>을 제기해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 배당표 확인 → 배당기일 이의 진술 → 1주 이내 배당이의 소송 제기</blockquote>',
      },
      {
        title: '다섯째, 배당을 받지 못할 위험에 대비하세요',
        content:
          '<p><strong style="color:#1e3a5f">후순위 채권자는 배당을 전혀 받지 못할 수 있습니다</strong></p>\n<p>매각대금이 선순위 채권 합계보다 적으면 <strong>후순위 채권자에게 배당할 금액이 없습니다</strong>. 이를 "무잉여"라고 합니다. 경매 전에 권리분석을 통해 예상 배당액을 미리 파악하는 것이 중요합니다.</p>\n<p>배당을 못 받더라도 <strong>채무자의 다른 재산</strong>에 대해 별도로 강제집행할 수 있습니다. 채무자가 재산을 은닉하고 있다면 <strong>재산조회 신청</strong>이나 <strong>채무불이행자 명부 등재</strong>를 활용하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대비: 무잉여 가능성 확인 → 다른 재산 강제집행 → 재산조회·채무불이행자 명부 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '공동저당에서 동시배당 시 배당액 산정 방법을 제시한 사례',
        summary:
          '대법원 2020다258893 사건(대법원, 2024.06.13)에서 법원은 "공동저당권과 동순위로 배당받는 채권이 있는 경우, 각 부동산의 경매대가는 매각대금에서 경매비용과 선순위채권뿐 아니라 동순위채권에 안분되어야 할 금액까지 공제한 잔액을 말한다"고 판시했습니다.',
        takeaway:
          '배당 순위가 복잡한 경우 동순위 채권의 안분 계산이 결과를 크게 좌우합니다. 배당표를 꼼꼼히 확인하고, 계산이 의심되면 배당기일에 반드시 이의를 제기하세요.',
      },
    ],
    faq: [
      {
        question: '배당요구 종기를 놓치면 어떻게 되나요?',
        answer: '배당요구 종기를 넘기면 <strong>해당 경매에서 배당을 받을 수 없습니다</strong>. 다만 채무자의 다른 재산에 대해 별도 강제집행을 신청할 수는 있습니다.',
      },
      {
        question: '근저당권자는 배당요구를 안 해도 되나요?',
        answer: '근저당권자는 법률상 배당요구 없이도 배당받을 수 있지만, <strong>권리 확인을 위해 배당요구서를 제출하는 것이 안전</strong>합니다. 채권계산서는 반드시 제출하세요.',
      },
      {
        question: '가압류만 한 채권자도 배당받을 수 있나요?',
        answer: '네. 가압류 채권자도 <strong>배당요구 종기까지 배당요구</strong>를 하면 배당받을 수 있습니다. 다만 근저당권자보다 후순위이므로 매각대금이 충분해야 합니다.',
      },
      {
        question: '배당이의 소송 제기 기한은 얼마인가요?',
        answer: '배당기일에 이의를 진술한 후 <strong>1주일 이내</strong>에 배당이의 소송을 제기해야 합니다. 기한을 놓기면 이의가 취하된 것으로 봅니다.',
      },
      {
        question: '소액임차인 최우선변제금은 얼마인가요?',
        answer: '서울 기준 보증금 <strong>1억 6,500만원 이하</strong>인 임차인은 <strong>5,500만원</strong>까지 최우선변제를 받을 수 있습니다. 지역별로 기준 금액이 다릅니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부동산 경매 진단', href: '/diagnosis/real-estate-auction' },
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '전세보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-process' },
      { label: '소액소송 직접 하는 법', href: '/spoke/small-claims/small-claims-self-filing-guide' },
    ],
  },
];
