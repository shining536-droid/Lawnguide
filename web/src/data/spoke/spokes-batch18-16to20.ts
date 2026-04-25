import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 16. 이 페이지는 [층간소음 피해 아파트 거주자]의 [소음 기준 데시벨을 확인하고 싶은 상황]에서 [법적 기준과 대응 절차 파악]을 돕는 페이지다.
// 17. 이 페이지는 [성매매 초범으로 혐의를 받고 있는 사람]의 [기소유예 가능성을 확인하고 싶은 상황]에서 [실제 판례와 기소유예 조건 파악]을 돕는 페이지다.
// 18. 이 페이지는 [부동산 경매에 처음 입찰하려는 초보자]의 [흔한 실수를 피하고 싶은 상황]에서 [입찰 전 필수 확인사항과 실수 예방법 파악]을 돕는 페이지다.
// 19. 이 페이지는 [매매한 부동산에서 하자를 발견한 매수인]의 [손해배상을 청구하려는 상황]에서 [청구 요건과 절차 파악]을 돕는 페이지다.
// 20. 이 페이지는 [빚이 많아 개인회생을 고려하는 채무자]의 [신청 자격이 되는지 궁금한 상황]에서 [자격요건과 준비사항 파악]을 돕는 페이지다.

export const spokesBatch18_16to20: SpokePage[] = [
  {
    domain: 'neighbor-dispute',
    slug: 'floor-noise-decibel-standard',
    keyword: '층간소음 기준 데시벨',
    questionKeyword: '층간소음 기준 데시벨이 몇인가요?',
    ctaKeyword: '층간소음 기준',
    type: 'Q&A형',
    meta: {
      title: '층간소음 기준 데시벨 3가지 핵심 수치 총정리 | 로앤가이드',
      description: '윗집 소음이 너무 심한데 법적 기준이 몇 데시벨인지 모르겠다면, 직접충격·공기전달 소음별 기준을 확인하세요. 지금 확인하세요.',
    },
    intro: '밤 11시, 윗집에서 또 쿵쿵거리는 소리가 들립니다. 아이가 뛰는 소리인지, 어른이 걷는 소리인지 분간이 안 될 정도로 큽니다. 관리사무소에 항의하려 해도 "기준이 몇 데시벨이냐"고 물으면 정확히 대답할 수가 없습니다. 층간소음의 법적 기준 데시벨과 대응 절차를 정리해보세요.',
    sections: [
      {
        title: '첫째, 층간소음은 직접충격 소음과 공기전달 소음으로 나뉩니다',
        content:
          '<p><strong style="color:#1e3a5f">공동주택관리법 제20조 제1항에 따라 층간소음은 두 가지 유형으로 구분됩니다</strong></p>\n<p><strong>직접충격 소음</strong>은 뛰거나 걷는 동작에서 발생하는 소음입니다. 아이가 뛰어다니거나 물건을 떨어뜨리는 소리가 대표적입니다. <strong>공기전달 소음</strong>은 텔레비전, 음향기기, 악기 연주 등으로 발생하는 소음입니다.</p>\n<p>두 유형은 측정 방법과 법적 기준이 다릅니다. 어떤 소음에 해당하는지 먼저 파악해야 정확한 기준을 적용할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">직접충격: 뛰기·걷기·물건 떨어뜨림 | 공기전달: TV·음향기기·악기</blockquote>',
      },
      {
        title: '둘째, 직접충격 소음 기준은 주간 39dB, 야간 34dB입니다',
        content:
          '<p><strong style="color:#1e3a5f">「공동주택 층간소음의 범위와 기준에 관한 규칙」 제3조 및 별표에서 구체적 수치를 정하고 있습니다</strong></p>\n<p>직접충격 소음(뛰기·걷기)의 기준은 <strong>1분간 등가소음도</strong> 기준으로 주간(06~22시) <strong>39dB</strong>, 야간(22~06시) <strong>34dB</strong>입니다. 최고소음도 기준으로는 주간 <strong>57dB</strong>, 야간 <strong>52dB</strong>입니다.</p>\n<p>공기전달 소음(TV·음악)의 기준은 5분간 등가소음도 기준으로 주간 <strong>45dB</strong>, 야간 <strong>40dB</strong>입니다. 이 수치를 초과하면 법적 기준을 넘는 층간소음에 해당할 소지가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">직접충격: 주간 39dB / 야간 34dB | 공기전달: 주간 45dB / 야간 40dB</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">내 층간소음 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 소음 측정은 이웃사이센터에 무료로 신청할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">한국환경공단 "층간소음 이웃사이센터"(☎ 1661-2642)에서 현장 측정 서비스를 제공합니다</strong></p>\n<p>관리사무소에 신고해도 해결이 안 되면 <strong>이웃사이센터에 현장진단을 신청</strong>하세요. 전문 장비로 실제 데시벨을 측정해주며, 측정 결과는 분쟁조정이나 소송에서 증거로 활용할 수 있습니다.</p>\n<p>측정 전에는 <strong>소음 발생 시간대, 빈도, 지속 시간을 기록</strong>해두세요. 스마트폰 소음측정 앱으로 예비 측정해두면 상담 시 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이웃사이센터(1661-2642): 무료 현장 측정 → 측정 결과 증거 활용 가능</blockquote>',
      },
      {
        title: '넷째, 관리주체에 조치를 요청하고 분쟁조정을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택관리법 제20조 제2항에 따라 관리주체에게 층간소음 발생 중단을 요청할 수 있습니다</strong></p>\n<p>층간소음 피해를 입었다면 먼저 <strong>관리사무소(관리주체)에 서면으로 신고</strong>하세요. 관리주체는 소음 발생 세대에 중단 또는 소음차단 조치를 권고할 의무가 있습니다.</p>\n<p>관리주체의 조치에도 해결되지 않으면 <strong>공동주택관리 분쟁조정위원회</strong>나 <strong>환경분쟁조정위원회</strong>에 조정을 신청할 수 있습니다. 조정이 성립되면 재판상 화해와 동일한 효력이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">단계: 관리사무소 신고 → 이웃사이센터 측정 → 분쟁조정위원회 신청</blockquote>',
      },
      {
        title: '다섯째, 수인한도를 초과하면 손해배상을 청구할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">민법 제750조에 따라 사회통념상 참을 한도를 넘는 소음은 불법행위에 해당할 소지가 있습니다</strong></p>\n<p>층간소음이 지속적으로 기준을 초과하고 생활에 심각한 지장을 준다면 <strong>민사소송을 통한 손해배상 청구</strong>가 가능합니다. 정신적 피해에 대한 위자료도 청구할 수 있습니다.</p>\n<p>법원은 <strong>소음의 정도, 피해의 성질, 지역성, 가해자의 방지 노력</strong> 등을 종합적으로 고려하여 수인한도 초과 여부를 판단합니다. 측정 기록, 진단서, 녹음 파일 등 증거를 미리 확보해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">손해배상: 수인한도 초과 입증 → 위자료 + 치료비 청구 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '도로소음 수인한도 기준에 관한 대법원 판결',
        summary:
          '대법원 2011다91784 사건(2015.09.24 선고)에서 법원은 도로소음으로 인한 생활방해의 정도가 참을 한도를 넘는지는 피해의 성질과 정도, 가해행위의 공공성, 방지조치 여부, 공법상 규제기준 위반 여부, 지역성, 토지이용의 선후관계 등 모든 사정을 종합적으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '소음 기준 초과만으로 바로 위법한 것은 아니지만, 기준을 넘는 소음이 지속되면 손해배상 청구의 중요한 근거가 됩니다. 소음 측정 기록과 피해 증거를 꼼꼼히 모아두세요.',
      },
    ],
    faq: [
      {
        question: '스마트폰 앱으로 측정한 데시벨도 증거가 되나요?',
        answer: '스마트폰 앱 측정치는 <strong>정확도가 낮아 공식 증거로 인정받기 어렵습니다</strong>. 하지만 대략적인 소음 수준을 기록해두는 보조 자료로는 활용할 수 있습니다. 정식 증거가 필요하면 이웃사이센터의 전문 장비 측정을 받으세요.',
      },
      {
        question: '화장실 물소리나 배수관 소음도 층간소음에 해당하나요?',
        answer: '배수관이나 화장실 물소리는 <strong>건물 구조에서 발생하는 소음</strong>으로 입주자 활동에 의한 층간소음과는 구분됩니다. 다만 건축 하자로 인한 경우 시공사에 하자보수를 청구할 수 있습니다.',
      },
      {
        question: '층간소음으로 경찰에 신고할 수 있나요?',
        answer: '악기·확성기 등의 소리를 지나치게 크게 내거나 큰소리로 떠들어 이웃을 시끄럽게 하면 <strong>경범죄처벌법에 따라 10만원 이하의 벌금이나 구류</strong>에 처해질 수 있습니다. 심야 시간대 고의적 소음은 112에 신고할 수 있습니다.',
      },
      {
        question: '층간소음 분쟁조정은 비용이 드나요?',
        answer: '<strong>공동주택관리 분쟁조정위원회</strong> 이용은 무료입니다. 환경분쟁조정위원회 역시 소액의 수수료만 부과되며, 이웃사이센터의 현장진단 서비스도 무료로 이용할 수 있습니다.',
      },
      {
        question: '데시벨 기준을 넘지 않으면 아무런 조치도 못 하나요?',
        answer: '기준 이하라도 <strong>지속적이고 반복적인 소음으로 일상생활에 지장</strong>을 준다면 관리사무소에 조치를 요청하거나 분쟁조정을 신청할 수 있습니다. 법적 기준은 절대적 기준이 아니라 참고 기준입니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이웃분쟁 진단', href: '/diagnosis/neighbor-dispute' },
      { label: '층간소음 분쟁 대응법', href: '/guide/neighbor-dispute/floor-noise-dispute-response' },
      { label: '층간소음 신고부터 조정까지 절차', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '층간소음 손해배상 판례 분석', href: '/guide/neighbor-dispute/floor-noise-damage-amount-key-cases' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'first-offense-non-prosecution-cases',
    keyword: '성매매 초범 기소유예 판례',
    questionKeyword: '성매매 초범인데 기소유예를 받을 수 있나요?',
    ctaKeyword: '성매매 초범 기소유예',
    type: '판례형',
    meta: {
      title: '성매매 초범 기소유예 3가지 핵심 조건과 판례 | 로앤가이드',
      description: '성매매 초범으로 입건되어 기소유예가 가능한지 궁금하시다면, 실제 판례와 기소유예 조건을 지금 확인하세요.',
    },
    intro: '경찰에서 연락이 왔습니다. 성매매 혐의로 조사를 받아야 한다고 합니다. 한 번도 이런 일이 없었는데, 초범이면 기소유예를 받을 수 있다는 이야기를 들었습니다. 정말 그런지, 어떤 조건이 필요한지 확인해보세요.',
    sections: [
      {
        title: '첫째, 성매매 초범의 처벌 수위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">성매매알선등행위의처벌에관한법률 제21조 제1항에 따라 성매매를 한 사람은 1년 이하의 징역이나 300만원 이하의 벌금에 처합니다</strong></p>\n<p>성매매는 <strong>단순 매수</strong>(성을 사는 행위)의 경우 위 법정형이 적용됩니다. 초범이고 단순 매수에 해당하면 벌금형이나 기소유예로 처리되는 경우가 많습니다.</p>\n<p>다만 <strong>아동·청소년 대상 성매매</strong>는 아동·청소년의 성보호에 관한 법률이 적용되어 훨씬 무거운 처벌을 받습니다. 상대방의 나이를 가능한 한 확인해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">단순 성매매: 1년 이하 징역 또는 300만원 이하 벌금 | 아동 대상은 가중 처벌</blockquote>',
      },
      {
        title: '둘째, 기소유예를 받기 위한 3가지 핵심 조건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제247조에 따라 검사는 범인의 성행, 환경, 범행 동기 등을 참작하여 기소유예 처분을 할 수 있습니다</strong></p>\n<p>기소유예를 받으려면 다음 3가지가 중요합니다. ①<strong>초범이고 전과가 없을 것</strong> — 동종 전과가 없으면 유리합니다. ②<strong>깊이 반성하고 있을 것</strong> — 반성문, 성매매 예방 교육 수강 확인서 등이 도움됩니다. ③<strong>재범 방지 의지가 확인될 것</strong> — 존스쿨(성매매 재범방지 교육) 자진 수강이 긍정적 요소입니다.</p>\n<p>검사는 이러한 사정을 종합적으로 판단하여 기소 여부를 결정합니다. 초범이라도 반성이 없거나 상습성이 의심되면 기소될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3가지 조건: 초범(전과 없음) + 깊은 반성 + 재범방지 의지 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">내 상황에 맞는 대응 전략 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 수사 단계에서 유리한 증거를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사 전에 반성문과 재범방지 증빙을 미리 준비하면 효과적입니다</strong></p>\n<p>경찰 조사에 출석하기 전에 <strong>자필 반성문</strong>을 준비하세요. 반성문에는 행위에 대한 반성, 가족에 대한 미안함, 재범하지 않겠다는 다짐을 구체적으로 기재합니다.</p>\n<p><strong>성매매 예방 교육(존스쿨)</strong>을 자진 수강한 수료증이 있으면 기소유예에 매우 유리합니다. 사회봉사활동 증빙, 직장 재직증명서 등 <strong>안정적인 사회생활을 증명하는 자료</strong>도 함께 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 자필 반성문 + 존스쿨 수료증 + 재직증명서·사회활동 증빙</blockquote>',
      },
      {
        title: '넷째, 검찰 송치 후 의견서를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 수사 종결 후 검찰에 송치되면 검사에게 직접 의견을 전달할 수 있습니다</strong></p>\n<p>경찰 조사가 끝나면 사건이 검찰로 넘어갑니다. 이때 <strong>변호인 의견서</strong>를 제출하면 기소유예 결정에 영향을 줄 수 있습니다. 의견서에는 초범인 점, 반성 사실, 재범방지 노력을 구체적으로 기재합니다.</p>\n<p>검사가 보강수사를 지시하거나 추가 조사를 하는 경우도 있으므로, <strong>연락처를 정확히 남기고 소환에 성실히 응하세요</strong>. 불출석은 기소 가능성을 높이는 요인이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">검찰 단계: 변호인 의견서 제출 → 소환 성실 응대 → 추가 증빙 보완</blockquote>',
      },
      {
        title: '다섯째, 기소유예 처분 후 주의할 점을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">기소유예는 전과에 해당하지 않지만, 수사경력 자료에는 남습니다</strong></p>\n<p>기소유예를 받으면 <strong>형사재판을 받지 않으므로 전과가 남지 않습니다</strong>. 하지만 수사경력 조회 시에는 기록이 남아 있어 동종 범죄 재범 시 불리하게 작용할 수 있습니다.</p>\n<p>기소유예 후 같은 혐의로 다시 적발되면 <strong>이전 기소유예 이력이 참작되어 벌금형이나 징역형</strong>을 받을 가능성이 높아집니다. 재범 방지를 위한 지속적인 노력이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기소유예 효과: 전과 없음 → 수사경력은 남음 → 재범 시 가중 처벌 가능성</blockquote>',
      },
    ],
    cases: [
      {
        title: '디지털 증거 압수·수색의 적법성에 관한 대법원 판결',
        summary:
          '대법원 2023도8752 사건(2023.10.18 선고)에서 법원은 수사기관이 압수·수색영장의 집행을 완료한 후에는 유효기간이 남아 있더라도 동일 목적물에 대해 다시 압수·수색을 할 수 없으며, 새로운 영장을 발부받아야 한다고 판시했습니다.',
        takeaway:
          '수사기관의 디지털 기기 압수·수색에도 엄격한 절차가 적용됩니다. 수사 과정에서 영장 없는 추가 압수나 무관 정보 열람이 있었다면 위법수집증거로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '기소유예와 불기소(혐의없음)는 다른 건가요?',
        answer: '<strong>불기소(혐의없음)</strong>는 범죄 혐의가 인정되지 않는 경우이고, <strong>기소유예</strong>는 혐의는 인정되지만 여러 정상을 참작하여 기소하지 않는 것입니다. 기소유예도 수사경력은 남지만 전과에는 해당하지 않습니다.',
      },
      {
        question: '존스쿨(성매매 재범방지 교육)은 어디서 받나요?',
        answer: '<strong>여성가족부 지정 성매매 피해상담소</strong>에서 존스쿨 프로그램을 운영합니다. 전국 각 지역 상담소에 문의하면 일정과 장소를 안내받을 수 있습니다.',
      },
      {
        question: '성매매 초범인데 벌금을 내면 전과가 남나요?',
        answer: '벌금형을 선고받으면 <strong>전과에 해당할 소지가 있습니다</strong>. 기소유예와 달리 벌금형은 형사처벌이므로 전과 기록이 남게 됩니다. 따라서 가능하다면 기소유예를 받는 것이 유리합니다.',
      },
      {
        question: '경찰 조사에서 어디까지 진술해야 하나요?',
        answer: '<strong>헌법상 진술거부권</strong>이 보장되므로 자신에게 불리한 진술은 거부할 수 있습니다. 다만 전면 묵비보다는 사실관계를 인정하되 반성하는 태도를 보이는 것이 기소유예에 더 유리한 경우가 많습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성매매 사건 진단', href: '/diagnosis/prostitution' },
      { label: '성매매 초범 처벌 수위와 양형', href: '/guide/prostitution/prostitution-first-offense-sentencing' },
      { label: '성범죄 초범 대응법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
      { label: '형사사건 진행 절차 총정리', href: '/guide/prostitution' },
    ],
  },
  {
    domain: 'real-estate-auction',
    slug: 'beginner-auction-common-mistakes',
    keyword: '경매 초보자 흔한 실수',
    questionKeyword: '경매 초보자가 자주 하는 실수 5가지가 뭔가요?',
    ctaKeyword: '경매 초보자 실수',
    type: '실수함정형',
    meta: {
      title: '경매 초보자 실수 5가지 — 입찰 전 필수 체크리스트 | 로앤가이드',
      description: '부동산 경매에 처음 도전하려는데 실패하고 싶지 않다면, 초보자가 자주 하는 5가지 실수를 확인하세요. 지금 확인하세요.',
    },
    intro: '부동산 경매로 시세보다 싸게 집을 사겠다는 계획을 세웠습니다. 온라인 강의도 듣고 경매 물건도 둘러봤습니다. 하지만 막상 입찰하려니 뭘 놓치고 있는지 불안합니다. 경매 초보자가 가장 많이 저지르는 5가지 실수를 미리 확인해보세요.',
    sections: [
      {
        title: '실수 1: 권리분석 없이 감정가만 보고 입찰합니다',
        content:
          '<p><strong style="color:#1e3a5f">경매 물건의 핵심은 감정가가 아니라 권리관계 분석입니다</strong></p>\n<p>초보자는 감정가 대비 낙찰가율만 보고 "저렴하다"고 판단하는 실수를 합니다. 하지만 <strong>선순위 전세권, 유치권, 법정지상권</strong> 등이 있으면 낙찰 후 추가 비용이 발생합니다.</p>\n<p><strong>등기부등본의 갑구(소유권)와 을구(근저당·전세권)</strong>를 가능한 한 확인하세요. 매각물건명세서, 현황조사서, 감정평가서를 모두 검토해야 숨은 권리를 발견할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 확인: 등기부등본 갑·을구 + 매각물건명세서 + 현황조사서 + 감정평가서</blockquote>',
      },
      {
        title: '실수 2: 임차인 현황을 확인하지 않고 입찰합니다',
        content:
          '<p><strong style="color:#1e3a5f">대항력 있는 임차인이 있으면 낙찰자가 보증금을 인수해야 합니다</strong></p>\n<p>경매 물건에 <strong>대항력을 갖춘 임차인</strong>(전입신고 + 확정일자가 근저당 설정일보다 앞선 경우)이 있으면 낙찰자가 보증금 전액을 떠안게 됩니다. 이 비용을 고려하지 않으면 시세보다 비싸게 사는 셈이 됩니다.</p>\n<p><strong>현황조사서</strong>에 임차인 정보가 기재되어 있으니 가능한 한 확인하세요. 가능하면 직접 현장을 방문하여 실제 거주자와 임대차 조건을 확인하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대항력 임차인: 보증금 인수 의무 → 현황조사서 + 현장 방문으로 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">내 경매 입찰 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '실수 3: 명도 비용과 시간을 과소평가합니다',
        content:
          '<p><strong style="color:#1e3a5f">낙찰 후 기존 점유자를 내보내는 명도 절차에 수개월이 걸릴 수 있습니다</strong></p>\n<p>경매로 소유권을 취득해도 <strong>기존 점유자가 자발적으로 나가지 않으면</strong> 인도명령이나 명도소송을 거쳐야 합니다. 인도명령은 보통 2~4주, 명도소송은 6개월 이상 소요됩니다.</p>\n<p>명도 과정에서 <strong>이사비 합의금</strong>(통상 수백만원)이 필요한 경우도 많습니다. 낙찰가 외에 명도 비용, 미납 관리비, 취득세 등 <strong>부대비용을 가능한 한 예산에 포함</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">명도 비용: 이사비 합의금 + 인도명령/소송 비용 + 미납 관리비 + 취득세</blockquote>',
      },
      {
        title: '실수 4: 입찰 보증금과 잔금 납부 기한을 놓칩니다',
        content:
          '<p><strong style="color:#1e3a5f">입찰 보증금은 최저매각가격의 10%이며, 잔금 미납 시 보증금을 몰수당합니다</strong></p>\n<p>입찰 시 <strong>최저매각가격의 10%</strong>를 보증금으로 납부해야 합니다. 낙찰 후에는 법원이 정한 기한(보통 1개월) 내에 잔금을 납부해야 합니다.</p>\n<p>잔금을 기한 내에 납부하지 못하면 <strong>입찰 보증금을 몰수</strong>당하고 재매각 절차가 진행됩니다. 대출 실행 시기를 미리 확인하고, <strong>잔금 납부 계획을 입찰 전에 확정</strong>해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보증금 10% + 잔금 기한 내 납부 필수 → 미납 시 보증금 몰수</blockquote>',
      },
      {
        title: '실수 5: 현장 답사 없이 서류만 보고 입찰합니다',
        content:
          '<p><strong style="color:#1e3a5f">서류에 나오지 않는 하자와 주변 환경은 직접 눈으로 확인해야 합니다</strong></p>\n<p>감정평가서의 사진은 촬영 시점이 수개월 전일 수 있습니다. <strong>건물 상태, 누수, 균열, 주변 혐오시설</strong> 등은 현장을 방문해야 알 수 있습니다.</p>\n<p>현장 답사 시에는 <strong>건물 외관, 공용부분 상태, 주차장, 주변 교통, 소음 수준</strong>을 확인하세요. 가능하면 관리사무소에 들러 미납 관리비와 하자 이력을 문의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">현장 확인: 건물 상태 + 주변 환경 + 미납 관리비 + 하자 이력</blockquote>',
      },
    ],
    cases: [
      {
        title: '담보가등기권리자의 채권신고 미이행과 배당권 상실에 관한 판결',
        summary:
          '대법원 2024다291102 사건(2025.03.27 선고)에서 법원은 가등기담보법 제16조에 따라 담보가등기권리자가 집행법원이 정한 기간 내에 채권신고를 하지 않으면 매각대금 배당을 받을 권리를 상실한다고 판시했습니다.',
        takeaway:
          '경매에서는 기한을 놓치면 권리 자체를 잃을 수 있습니다. 입찰자 역시 보증금 납부, 잔금 기한 등 각 단계별 기한을 가능한 한 준수하세요.',
      },
    ],
    faq: [
      {
        question: '경매 물건 정보는 어디서 확인하나요?',
        answer: '<strong>대한민국 법원 경매정보 사이트(auction.courtgo.kr)</strong>에서 경매 물건의 매각물건명세서, 현황조사서, 감정평가서를 무료로 열람할 수 있습니다.',
      },
      {
        question: '경매 대출은 일반 주택담보대출과 다른가요?',
        answer: '경매 대출은 <strong>잔금 납부 기한 내에 실행</strong>되어야 하므로 일반 대출보다 일정이 촉박합니다. 대출 가능 여부와 한도를 입찰 전에 미리 은행에 상담받으세요.',
      },
      {
        question: '유치권이 있는 물건은 원칙적으로 피해야 하나요?',
        answer: '유치권은 <strong>낙찰자에게 대항할 수 있는 권리</strong>이므로 초보자에게는 위험합니다. 유치권의 성립 요건과 금액을 정확히 파악할 수 없다면 피하는 것이 안전합니다.',
      },
      {
        question: '경매 입찰은 한 번에 하나만 할 수 있나요?',
        answer: '같은 날 <strong>여러 물건에 동시 입찰</strong>이 가능합니다. 다만 각 물건마다 별도의 보증금을 납부해야 하며, 복수 낙찰 시 잔금 부담이 커질 수 있으니 자금 계획을 잘 세우세요.',
      },
      {
        question: '법원 감정가보다 시세가 낮은 경우도 있나요?',
        answer: '감정가는 <strong>감정 시점의 시세</strong>를 기준으로 산정하므로, 시장 변동에 따라 실제 시세가 감정가보다 낮아질 수 있습니다. 입찰 전에 실거래가 사이트에서 최근 거래 시세를 가능한 한 확인하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부동산 경매 진단', href: '/diagnosis/real-estate-auction' },
      { label: '경매 절차 전체 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 권리분석 체크리스트', href: '/guide/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '경매 낙찰 후 명도 절차', href: '/guide/real-estate-auction/auction-eviction-procedure' },
    ],
  },
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-eligibility-requirements-faq',
    keyword: '개인회생 신청 자격요건',
    questionKeyword: '개인회생 신청 자격요건은 무엇인가요?',
    ctaKeyword: '개인회생 자격요건',
    type: 'Q&A형',
    meta: {
      title: '개인회생 신청 자격요건 5가지 핵심 조건 | 로앤가이드',
      description: '빚이 너무 많아 개인회생을 생각하고 있는데 자격이 되는지 모르겠다면, 5가지 핵심 자격요건을 확인하세요. 지금 확인하세요.',
    },
    intro: '카드빚과 대출이자가 눈덩이처럼 불어나고 있습니다. 매달 최소 납부금만 겨우 내는 상황인데, 개인회생을 하면 빚을 줄일 수 있다고 들었습니다. 하지만 아무나 신청할 수 있는 건 아니라고 합니다. 개인회생 신청 자격요건을 하나씩 확인해보세요.',
    sections: [
      {
        title: '첫째, 총채무액이 담보채무 15억원·무담보채무 10억원 이하여야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생 및 파산에 관한 법률에 따라 개인회생은 채무 한도가 정해져 있습니다</strong></p>\n<p>개인회생을 신청하려면 <strong>담보부 채무 15억원 이하, 담보 외 채무(무담보) 10억원 이하</strong>여야 합니다. 이 한도를 초과하면 개인회생이 아닌 개인파산을 검토해야 합니다.</p>\n<p>채무액 산정 시 <strong>원금뿐 아니라 이자, 연체료, 위약금</strong>까지 포함됩니다. 정확한 채무 총액을 파악하려면 신용정보원(올크레딧)에서 신용조회를 해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">채무 한도: 담보부 15억원 + 무담보 10억원 이하 → 초과 시 파산 검토</blockquote>',
      },
      {
        title: '둘째, 장래에 계속적·반복적으로 수입을 얻을 가능성이 있어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">개인회생사건 처리지침 제7조의2에 따라 정기적 수입 가능성이 핵심 요건입니다</strong></p>\n<p>개인회생의 핵심은 <strong>3~5년간 변제계획에 따라 매달 일정 금액을 갚는 것</strong>입니다. 따라서 급여, 사업소득, 연금, 아르바이트 등 <strong>정기적인 수입</strong>이 있어야 합니다.</p>\n<p><strong>급여소득자</strong>는 정규직뿐 아니라 비정규직, 일용직, 파트타임도 해당됩니다. <strong>영업소득자</strong>는 자영업, 프리랜서, 농업·어업 종사자도 포함됩니다. 무직이라도 구직 활동 중이면 가능성이 인정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">수입 요건: 급여·사업·연금·아르바이트 → 고용형태 불문, 정기적 수입이면 OK</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/rehabilitation" style="color:#1565c0;font-weight:600">내 개인회생 자격 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 파산의 원인이 되는 사실이 있어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">"지급불능" 또는 "채무초과" 상태이거나 그럴 우려가 있어야 합니다</strong></p>\n<p><strong>지급불능</strong>이란 채무자가 변제기에 있는 채무를 일반적·계속적으로 변제할 수 없는 상태를 말합니다. 매달 생활비를 제하면 채무를 갚을 능력이 없는 상태가 이에 해당할 소지가 있습니다.</p>\n<p>현재 연체가 없더라도 <strong>가까운 장래에 지급불능이 예상</strong>되면 신청할 수 있습니다. 채무 총액 대비 가용소득을 비교하여 객관적으로 상환 불가능성을 입증하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">파산 원인: 현재 지급불능 또는 장래 지급불능 우려 → 연체 없어도 신청 가능</blockquote>',
      },
      {
        title: '넷째, 변제계획의 이행 가능성이 인정되어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">법원은 가용소득에서 최저생계비를 뺀 금액으로 변제 가능 여부를 판단합니다</strong></p>\n<p>변제계획은 <strong>월 소득에서 최저생계비(가족 수 기준)를 뺀 가용소득</strong>으로 3~5년간 채무를 갚는 계획입니다. 가용소득이 너무 적으면 변제계획 인가가 어려울 수 있습니다.</p>\n<p>변제율은 보통 <strong>채무 총액의 5~30% 수준</strong>이며, 나머지는 면책됩니다. 다만 청산가치 보장 원칙에 따라 <strong>파산 시 배당받을 금액 이상</strong>은 가능한 한 변제해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변제 계획: 가용소득 = 월 소득 - 최저생계비 → 3~5년간 변제 → 나머지 면책</blockquote>',
      },
      {
        title: '다섯째, 면책불허가 사유에 해당하지 않아야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">도박, 과소비, 사기 등으로 인한 채무는 면책이 제한될 수 있습니다</strong></p>\n<p>법원은 <strong>채무 발생 경위</strong>도 심사합니다. 도박, 투기, 사치품 과소비 등 <strong>부도덕한 원인으로 채무가 과도하게 늘어난 경우</strong> 면책불허가 사유에 해당할 수 있습니다.</p>\n<p>다만 면책불허가 사유가 있더라도 <strong>법원의 재량으로 면책이 허가</strong>되는 경우가 있습니다. 채무 발생 경위를 솔직하게 기재하고, 반성과 재기 의지를 보여주는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책 제한: 도박·과소비·사기 → 법원 재량으로 허가 가능 → 솔직한 소명 중요</blockquote>',
      },
    ],
    cases: [
      {
        title: '파산면책과 임대차보증금반환채권에 관한 대법원 판결',
        summary:
          '대법원 2022다247378 사건(2025.06.12 선고)에서 법원은 채무자 회생 및 파산에 관한 법률 제564조에 따른 면책결정의 효력이 우선변제권이 인정되는 부분을 포함하여 주택임차인의 보증금반환채권 전부에 미친다고 판시했습니다.',
        takeaway:
          '면책결정이 확정되면 파산채권에 대한 책임이 면제되지만, 임대차보증금 등 일부 채권은 면책 범위에 관한 분쟁이 발생할 수 있습니다. 면책 대상 채무를 정확히 파악하세요.',
      },
    ],
    faq: [
      {
        question: '무직 상태에서도 개인회생을 신청할 수 있나요?',
        answer: '원칙적으로 <strong>정기적 수입이 있어야</strong> 합니다. 다만 구직 활동 중이거나, 가족의 지원이 있거나, 실업급여를 받는 경우 수입 가능성이 인정될 수 있습니다. 취업 후 신청하는 것이 더 확실합니다.',
      },
      {
        question: '개인회생과 개인파산의 차이는 무엇인가요?',
        answer: '개인회생은 <strong>3~5년간 채무의 일부를 갚고 나머지를 면책</strong>받는 절차입니다. 개인파산은 재산을 청산하여 채무를 정리하는 절차로, 수입이 없어도 신청 가능합니다. 정기적 수입이 있으면 개인회생이 유리합니다.',
      },
      {
        question: '개인회생 중 신용카드를 사용할 수 있나요?',
        answer: '개인회생 변제기간 중에는 <strong>신규 신용카드 발급이 어렵고, 기존 카드도 사용이 제한</strong>됩니다. 변제계획 완료 후 면책 결정을 받으면 신용회복 과정을 거쳐 카드 사용이 가능해집니다.',
      },
      {
        question: '개인회생 신청 비용은 얼마인가요?',
        answer: '법원 예납금은 <strong>약 30~50만원</strong> 수준이며, 법률구조공단을 통하면 무료로 변호사 도움을 받을 수 있습니다. 사설 법률사무소에 의뢰하면 <strong>150~300만원</strong>의 수임료가 발생합니다.',
      },
      {
        question: '세금 체납도 개인회생으로 면책되나요?',
        answer: '<strong>조세 채권은 개인회생 면책 대상에서 제외</strong>됩니다. 개인회생 변제계획에 포함되어 변제 순서가 조정될 수는 있지만, 최종적으로 전액 납부해야 합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
      { label: '개인회생 신청 자격 가이드', href: '/guide/rehabilitation/personal-rehabilitation-eligibility' },
      { label: '사업자 개인회생 자격요건', href: '/guide/rehabilitation/business-owner-rehabilitation-eligibility' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation' },
    ],
  },
];
