import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [양육비를 받지 못하는 양육친]의 [상대방이 양육비를 지급하지 않아 강제집행을 고려하는 상황]에서 [강제집행 절차와 재산조회 방법 확인]을 돕는 페이지다.
// 2. 이 페이지는 [층간소음 피해를 겪는 아파트 거주자]의 [신고부터 조정까지 절차를 모르는 상황]에서 [단계별 신고·조정 절차 안내]를 돕는 페이지다.
// 3. 이 페이지는 [윗집 소음이 극심한 거주자]의 [참을 수 없는 수준의 소음에 대처 방법을 모르는 상황]에서 [법적 대응과 손해배상 청구 준비]를 돕는 페이지다.
// 4. 이 페이지는 [층간소음 피해를 처음 겪는 거주자]의 [어디부터 시작해야 할지 모르는 상황]에서 [첫 번째 조치와 증거 확보 방법 확인]을 돕는 페이지다.
// 5. 이 페이지는 [부동산 경매 입찰을 준비하는 입찰자]의 [입찰 절차와 준비사항을 모르는 상황]에서 [물건 조사부터 낙찰까지 단계별 절차 확인]을 돕는 페이지다.
// 6. 이 페이지는 [경매 낙찰을 받은 매수인]의 [점유자가 퇴거하지 않아 명도 소송이 필요한 상황]에서 [명도 소송 절차와 강제집행 방법 확인]을 돕는 페이지다.
// 7. 이 페이지는 [매매계약이 해제된 매수인]의 [계약금 반환을 청구하려는 상황]에서 [반환 청구 절차와 내용증명 작성법 확인]을 돕는 페이지다.

export const spokesBatch19_22to28: SpokePage[] = [
  {
    domain: 'child-support',
    slug: 'child-support-enforcement-method',
    keyword: '양육비 미지급 시 강제집행 방법',
    questionKeyword: '양육비를 안 주면 어떤 강제집행 방법이 있나요?',
    ctaKeyword: '양육비 강제집행',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '양육비 강제집행 4단계 — 재산조회부터 압류까지 | 로앤가이드',
      description: '양육비를 계속 안 주는 상대방 때문에 막막하다면, 강제집행으로 받아내는 4단계 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '이혼 후 매달 양육비를 보내기로 했는데, 3개월째 한 푼도 들어오지 않습니다. 독촉 연락에도 답이 없고, 아이 학원비는 밀리고 있습니다. 양육비를 지급하지 않는 상대방에게 법적으로 강제할 수 있는 방법이 있습니다. 강제집행 절차를 단계별로 확인해보세요.',
    timelineSteps: [
      '1단계: 이행명령 신청 — 가정법원에 양육비 이행명령을 신청합니다',
      '2단계: 재산조회 신청 — 법원을 통해 상대방의 재산·소득 정보를 조회합니다',
      '3단계: 압류·추심명령 — 급여·예금 등에 대한 압류·추심명령을 신청합니다',
      '4단계: 감치명령·운전면허 제한 — 불이행 시 감치명령, 출국금지, 운전면허 제한을 신청합니다',
    ],
    sections: [
      {
        title: '1단계: 가정법원에 이행명령을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법 제64조에 따라 가정법원은 양육비 지급의무자에게 이행명령을 할 수 있습니다</strong></p>\n<p>양육비 지급 판결이나 조정조서가 있으면 가정법원에 <strong>이행명령</strong>을 신청할 수 있습니다. 이행명령을 받고도 지급하지 않으면 1천만원 이하의 과태료 또는 30일 이내의 감치에 처해질 수 있습니다.</p>\n<p>이행명령 신청은 별도 비용이 거의 없고, <strong>양육비이행관리원</strong>(1644-6621)에서 무료 법률 지원도 받을 수 있습니다. 집행권원(판결문, 조정조서, 양육비부담조서)을 먼저 확보하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 집행권원 확보 → 가정법원 이행명령 신청 → 불이행 시 과태료·감치</blockquote>',
      },
      {
        title: '2단계: 재산조회를 통해 압류 대상을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법 제61조에 따라 법원에 재산조회를 신청하면 상대방의 재산·소득 정보를 확인할 수 있습니다</strong></p>\n<p>상대방이 재산을 숨기거나 소득을 밝히지 않을 때, 법원에 <strong>재산조회 신청</strong>을 하면 금융기관, 국세청, 국민건강보험공단 등을 통해 예금·부동산·급여 정보를 확인할 수 있습니다.</p>\n<p>양육비이행관리원에서도 <strong>금융정보조회</strong>를 무료로 지원합니다. 재산 파악이 되어야 실질적인 압류가 가능하므로 이 단계를 반드시 거치세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 법원 재산조회 신청 → 예금·급여·부동산 파악 → 압류 대상 특정</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-support" style="color:#1565c0;font-weight:600">내 양육비 강제집행 가능 여부 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 급여·예금에 압류·추심명령을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법 제246조에 따라 급여의 1/2까지 압류할 수 있으며, 양육비 채권은 일반 채권보다 압류 범위가 넓습니다</strong></p>\n<p>상대방의 급여를 확인했다면 <strong>급여 압류·추심명령</strong>을 신청하세요. 양육비 채권의 경우 일반 채권과 달리 급여의 1/2까지 압류가 가능합니다. 예금계좌도 별도로 압류할 수 있습니다.</p>\n<p>압류명령이 내려지면 상대방의 직장에 통보되어 급여에서 직접 양육비가 공제됩니다. <strong>부동산이 있다면 강제경매</strong>도 가능하지만, 급여·예금 압류가 가장 빠른 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">압류 순서: 예금 압류 → 급여 압류(1/2) → 필요시 부동산 강제경매</blockquote>',
      },
      {
        title: '4단계: 감치명령, 출국금지, 운전면허 제한까지 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">양육비 이행확보 및 지원에 관한 법률에 따라 감치명령, 출국금지, 운전면허 정지까지 가능합니다</strong></p>\n<p>강제집행으로도 양육비를 받지 못하면 <strong>감치명령</strong>(30일 이내 유치장 수감)을 신청할 수 있습니다. 또한 양육비이행관리원을 통해 <strong>출국금지</strong>와 <strong>운전면허 정지</strong>도 요청할 수 있습니다.</p>\n<p>2024년부터는 양육비 체납 시 <strong>명단 공개 제도</strong>도 시행되고 있어 사회적 압박이 가능합니다. 모든 절차를 양육비이행관리원에서 무료로 지원받을 수 있으니 적극 활용하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최종 수단: 감치명령 → 출국금지 → 운전면허 정지 → 명단 공개</blockquote>',
      },
    ],
    cases: [
      {
        title: '국제적 요소 사건에서 과거 양육비 청구 인정 사례',
        summary:
          '대법원 2023스643 사건(2023.10.31 선고)에서 법원은 외국적 요소가 있는 사건이라도 법원이 적극적으로 준거법을 조사할 의무가 있으며, 인지판결 확정 전에 발생한 과거 양육비에 대해서도 상대방이 부담함이 상당한 범위 내에서 비용의 상환을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '양육비 청구는 인지 전 과거 양육비까지 소급하여 청구할 수 있습니다. 집행권원을 확보한 뒤 강제집행 절차를 신속하게 진행하는 것이 실질적으로 양육비를 받아내는 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '양육비 강제집행을 하려면 반드시 판결이 있어야 하나요?',
        answer: '판결뿐 아니라 <strong>조정조서, 양육비부담조서, 공정증서</strong>도 집행권원으로 사용할 수 있습니다. 협의이혼 시 양육비부담조서를 작성해두면 별도 소송 없이 바로 강제집행이 가능합니다.',
      },
      {
        question: '상대방이 무직이면 강제집행이 불가능한가요?',
        answer: '현재 무직이더라도 <strong>예금, 부동산, 자동차 등 다른 재산</strong>에 대해 압류가 가능합니다. 또한 향후 취업 시 급여 압류를 위해 재산조회를 주기적으로 반복할 수 있습니다.',
      },
      {
        question: '양육비이행관리원에서 어떤 도움을 받을 수 있나요?',
        answer: '양육비이행관리원(1644-6621)에서는 <strong>이행명령 신청 지원, 재산조회, 추심 대행, 한시적 양육비 긴급지원</strong>(월 최대 20만원)까지 무료로 지원합니다.',
      },
      {
        question: '감치명령을 받으면 양육비를 반드시 내야 하나요?',
        answer: '감치명령으로 최대 30일간 유치장에 수감될 수 있지만, <strong>감치 자체가 양육비 지급의무를 면제하지는 않습니다</strong>. 감치 이후에도 미지급 양육비 채무는 그대로 남아 있습니다.',
      },
      {
        question: '양육비를 일부만 지급하는 경우에도 강제집행이 가능한가요?',
        answer: '미지급된 <strong>차액분에 대해서만 강제집행</strong>이 가능합니다. 예를 들어 월 100만원 중 50만원만 지급했다면, 미지급 50만원에 대해 이행명령과 압류를 신청할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 양육비 강제집행 방법 확인하기',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '양육비 가이드', href: '/guide/child-support' },
      { label: '양육비 청구 소송 절차', href: '/guide/child-support/child-support-lawsuit-process' },
      { label: '양육비 산정 기준표 계산법', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 청구 어디부터 시작해야 하나', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 체납 추심 방법', href: '/guide/child-support/child-support-overdue-collection' },
    ],
  },
  {
    domain: 'neighbor-dispute',
    slug: 'floor-noise-report-to-mediation-procedure',
    keyword: '층간소음 피해 신고에서 조정까지 절차',
    questionKeyword: '층간소음 신고하면 조정까지 어떤 절차를 거치나요?',
    ctaKeyword: '층간소음 조정 절차',
    type: '절차타임라인형',
    meta: {
      title: '층간소음 신고~조정 5단계 절차 — 접수부터 배상까지 | 로앤가이드',
      description: '층간소음 때문에 잠을 못 이루고 있다면, 신고에서 환경분쟁조정까지 5단계 절차를 단계별로 확인하세요. 지금 확인하세요.',
    },
    intro: '밤마다 윗집에서 쿵쿵 소리가 들려 잠을 설칩니다. 관리사무소에 민원을 넣어도 달라지지 않고, 직접 찾아가자니 감정 싸움이 될까 걱정됩니다. 층간소음 문제는 법적 절차를 통해 체계적으로 해결할 수 있습니다. 신고부터 조정까지의 단계를 확인해보세요.',
    timelineSteps: [
      '1단계: 증거 수집 — 소음 녹음, 시간대 기록, 관리사무소 민원 접수',
      '2단계: 층간소음 이웃사이센터 상담 — 1661-2642 전화상담 및 현장 소음측정 신청',
      '3단계: 환경분쟁조정위원회 조정 신청 — 수수료 1만원, 온라인 신청 가능',
      '4단계: 조정 절차 진행 — 양측 진술, 전문가 소음측정, 조정안 제시',
      '5단계: 조정 성립 또는 소송 — 합의 시 재판상 화해 효력, 불성립 시 민사소송',
    ],
    sections: [
      {
        title: '1단계: 소음 증거를 체계적으로 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택관리법 제20조에 따라 층간소음은 직접충격 소음(1분간 등가소음도 39dB 초과)과 공기전달 소음(5분간 등가소음도 45dB 초과)으로 구분됩니다</strong></p>\n<p>가장 먼저 해야 할 일은 <strong>소음 증거를 체계적으로 모으는 것</strong>입니다. 스마트폰 소음측정 앱으로 데시벨을 기록하고, 소음이 발생하는 시간대와 빈도를 일지 형태로 작성하세요.</p>\n<p>관리사무소에 <strong>서면으로 민원을 접수</strong>하고 접수 확인서를 보관하세요. 관리사무소의 중재 시도 기록이 이후 조정·소송에서 중요한 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 수집: 소음 녹음·데시벨 측정 → 일지 작성 → 관리사무소 서면 민원 → 접수 확인서 보관</blockquote>',
      },
      {
        title: '2단계: 층간소음 이웃사이센터에 상담·측정을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">환경부 산하 층간소음 이웃사이센터(1661-2642)에서 무료 상담과 현장 소음측정 서비스를 제공합니다</strong></p>\n<p>전화(1661-2642) 또는 홈페이지를 통해 상담을 받고, 필요시 <strong>현장 소음측정</strong>을 신청할 수 있습니다. 전문 장비로 측정한 결과는 공식 증거로 활용됩니다.</p>\n<p>측정 결과가 기준치(직접충격 소음 1분 등가소음도 39dB, 공기전달 소음 5분 등가소음도 45dB)를 <strong>초과하면 위반</strong>으로 인정됩니다. 이웃사이센터의 중재 서비스도 무료로 이용 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이웃사이센터: 전화상담 → 현장 방문 소음측정 → 중재 시도 → 무료</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">내 층간소음 피해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 환경분쟁조정위원회에 조정을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">환경분쟁조정법에 따라 환경분쟁조정위원회에 조정을 신청하면 소송보다 빠르고 저렴하게 분쟁을 해결할 수 있습니다</strong></p>\n<p>환경분쟁조정위원회 홈페이지에서 온라인으로 신청할 수 있으며, <strong>수수료는 1사건당 1만원</strong>입니다. 소음측정 보고서, 피해 일지, 관리사무소 민원 기록 등을 첨부하세요.</p>\n<p>조정이 성립하면 <strong>재판상 화해와 같은 효력</strong>이 있어 별도 소송 없이 강제집행이 가능합니다. 배상금은 사안에 따라 약 160만원~790만원 수준으로 인정된 사례가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조정 신청: 온라인 접수(수수료 1만원) → 증거 첨부 → 조정 성립 시 재판상 화해 효력</blockquote>',
      },
      {
        title: '4~5단계: 조정 진행과 불성립 시 민사소송을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">민법 제217조에 따라 소음이 참을 한도를 넘으면 손해배상과 방음조치를 청구할 수 있습니다</strong></p>\n<p>조정 절차에서는 양측 진술, 전문가 현장조사, 조정안 제시 등이 이루어집니다. 조정이 불성립되면 <strong>민사소송</strong>으로 손해배상을 청구할 수 있습니다.</p>\n<p>소송에서는 정신적 피해에 대한 <strong>위자료</strong>와 이사비용 등 실질적 손해를 청구합니다. 층간소음이 반복되면 <strong>스토킹처벌법 위반</strong>으로 형사 고소도 가능한 점을 참고하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불성립 시: 민사소송(위자료+실손해) → 반복 소음 시 스토킹처벌법 형사 고소 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '층간소음의 반복적 발생이 스토킹범죄로 인정된 사례',
        summary:
          '대법원 2023도10313 사건(2023.12.14 선고)에서 법원은 아래층 거주자가 수개월간 늦은 밤부터 새벽 사이에 반복하여 도구로 벽을 치고 음향기기를 틀어 소음을 발생시킨 행위가 스토킹범죄에 해당한다고 판시했습니다.',
        takeaway:
          '층간소음이 단순 생활소음을 넘어 의도적·반복적으로 이루어지면 스토킹범죄로 처벌될 수 있습니다. 소음 증거와 시간대 기록을 꼼꼼히 남겨두면 형사 고소 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '관리사무소에 민원을 넣었는데 효과가 없으면 어떻게 하나요?',
        answer: '관리사무소 중재가 실패하면 <strong>층간소음 이웃사이센터(1661-2642)</strong>에 현장 소음측정을 신청하고, 이후 환경분쟁조정위원회에 조정을 신청하는 것이 다음 단계입니다.',
      },
      {
        question: '환경분쟁조정은 얼마나 걸리나요?',
        answer: '통상 <strong>3~6개월</strong>이 소요됩니다. 소송(6개월~1년 이상)보다 빠르고, 수수료도 1만원으로 저렴하여 층간소음 분쟁 해결의 첫 번째 선택지로 권장됩니다.',
      },
      {
        question: '소음측정 결과가 기준치 이하이면 배상을 받을 수 없나요?',
        answer: '기준치 이하라도 <strong>생활 방해가 참을 한도를 넘는다고 인정되면</strong> 배상이 가능합니다. 소음 빈도, 시간대(야간), 지속기간 등이 종합적으로 고려됩니다.',
      },
      {
        question: '윗집이 세입자인 경우 집주인에게도 책임을 물을 수 있나요?',
        answer: '원칙적으로 <strong>소음 행위자(세입자)가 1차 책임</strong>을 지지만, 집주인이 소음 방지 의무를 소홀히 한 경우(방음시설 미설치 등)에는 공동책임을 물을 수 있습니다.',
      },
      {
        question: '층간소음으로 이사를 가야 하면 이사비도 청구할 수 있나요?',
        answer: '소음이 참을 한도를 넘어 <strong>이사가 불가피했음을 입증</strong>하면 이사비용을 손해배상으로 청구할 수 있습니다. 위자료와 별도로 실제 지출된 이사비를 증빙하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 층간소음 피해 상황 진단받기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃 분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 피해 대응법', href: '/guide/neighbor-dispute/floor-noise-dispute-response' },
      { label: '층간소음 데시벨 기준', href: '/guide/neighbor-dispute/floor-noise-decibel-standard' },
      { label: '층간소음 손해배상 핵심 판례', href: '/guide/neighbor-dispute/floor-noise-damage-amount-key-cases' },
      { label: '반려동물·악취·주차 분쟁 대처법', href: '/guide/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
    ],
  },
  {
    domain: 'neighbor-dispute',
    slug: 'unbearable-upstairs-noise-response',
    keyword: '윗집 층간소음이 참을 수 없을 때 대처법',
    questionKeyword: '윗집 소음이 너무 심한데 어떻게 대처해야 하나요?',
    ctaKeyword: '층간소음 대처',
    type: '상황형',
    meta: {
      title: '윗집 소음 참을 수 없을 때 대처법 3가지 | 로앤가이드',
      description: '윗집 층간소음이 참을 수 없는 수준이라면, 법적 대응 방법과 손해배상 청구 절차를 정리해보세요. 지금 확인하세요.',
    },
    intro: '매일 밤 윗집에서 아이들이 뛰어다니는 소리에 머리가 지끈거립니다. 층간소음 스티커도 붙여보고, 관리사무소에 여러 번 연락했지만 아무것도 달라지지 않습니다. 참을 한도를 넘은 소음에는 법적으로 대응할 수 있습니다. 상황별 대처법을 확인해보세요.',
    timelineSteps: [
      '1단계: 증거 확보 — 소음 녹음, 데시벨 측정, 피해 일지 작성',
      '2단계: 공식 중재 — 이웃사이센터 상담·측정 또는 관리사무소 공문',
      '3단계: 법적 대응 — 환경분쟁조정, 민사소송, 형사 고소 중 선택',
    ],
    sections: [
      {
        title: '첫째, 참을 한도를 넘었다는 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택 층간소음의 범위와 기준에 관한 규칙에 따라 직접충격 소음은 1분간 등가소음도 39dB, 최고소음도 57dB을 초과하면 기준 위반입니다</strong></p>\n<p>스마트폰 소음측정 앱(데시벨 X, 소음측정기 등)으로 <strong>소음 발생 시마다 데시벨을 측정</strong>하고 스크린샷을 저장하세요. 동영상 녹화도 함께 하면 소음의 강도와 빈도를 동시에 증명할 수 있습니다.</p>\n<p><strong>피해 일지</strong>를 작성하세요. 날짜, 시간, 소음 종류(뛰는 소리, 물건 떨어뜨리는 소리 등), 지속시간, 데시벨 수치를 기록합니다. 병원 진료(두통, 불면증, 이명 등)를 받고 진단서도 확보하면 배상 금액을 높일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 데시벨 측정 → 동영상 녹화 → 피해 일지 → 병원 진단서 확보</blockquote>',
      },
      {
        title: '둘째, 공식 기관을 통한 중재를 시도하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택관리법 제20조에 따라 입주자와 사용자는 층간소음으로 다른 입주자에게 피해를 주어서는 안 됩니다</strong></p>\n<p>관리사무소에 <strong>공문(서면 통보)</strong> 형태로 정식 민원을 접수하세요. 구두 요청보다 서면 기록이 증거력이 높습니다. 동시에 층간소음 이웃사이센터(1661-2642)에 <strong>현장 소음측정</strong>을 신청하세요.</p>\n<p>이웃사이센터에서 전문 장비로 측정한 결과가 기준치를 초과하면, 이후 환경분쟁조정이나 소송에서 <strong>결정적 증거</strong>가 됩니다. 무료이므로 반드시 활용하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중재 절차: 관리사무소 공문 → 이웃사이센터 측정 → 기준 초과 시 조정 신청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">내 층간소음 피해 법적 대응 방법 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 환경분쟁조정 또는 민사소송으로 배상을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">민법 제217조에 따라 소음이 이웃 거주자의 생활에 고통을 주는 경우, 참을 한도를 넘으면 손해배상 책임이 발생합니다</strong></p>\n<p>환경분쟁조정위원회에 조정 신청(수수료 1만원)을 하면 3~6개월 내에 결과가 나옵니다. 조정 성립 시 <strong>재판상 화해 효력</strong>이 있어 강제집행도 가능합니다.</p>\n<p>조정이 불성립하면 <strong>민사소송</strong>으로 위자료와 실손해를 청구하세요. 의도적·반복적 소음이라면 <strong>스토킹처벌법 위반</strong>으로 형사 고소까지 가능합니다. 경찰에 112 신고한 기록도 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법적 대응: 환경분쟁조정(3~6개월) → 불성립 시 민사소송 → 의도적 소음 시 형사 고소</blockquote>',
      },
    ],
    cases: [
      {
        title: '층간소음의 참을 한도 판단 기준 관련 판례',
        summary:
          '대법원 2014다57846 사건(2016.11.25 선고)에서 법원은 소음이 민법 제217조의 생활방해에 해당하며, 참을 한도를 넘는지는 피해의 성질과 정도, 가해행위의 공공성, 방지조치 가능성, 지역성 등을 종합적으로 고려하여 판단해야 한다고 판시했습니다.',
        takeaway:
          '층간소음이 참을 한도를 넘는지는 데시벨 수치만이 아니라 소음의 빈도, 시간대, 지속기간 등이 종합적으로 고려됩니다. 기준치 이하라도 야간 반복 소음이면 위법성이 인정될 수 있으므로 피해 일지를 꼼꼼히 기록하세요.',
      },
    ],
    faq: [
      {
        question: '층간소음 때문에 우울증이 생겼는데 위자료를 받을 수 있나요?',
        answer: '<strong>병원 진단서</strong>(불면증, 우울증, 이명 등)가 있으면 위자료 청구 시 배상 금액을 높일 수 있습니다. 소음과 건강 피해 간 인과관계를 입증하는 것이 핵심입니다.',
      },
      {
        question: '아이들이 뛰는 소리도 법적 대응이 가능한가요?',
        answer: '직접충격 소음(뛰는 소리)이 <strong>1분간 등가소음도 39dB 또는 최고소음도 57dB을 초과</strong>하면 기준 위반입니다. 아이의 뛰는 소리도 기준을 초과하면 법적 대응이 가능합니다.',
      },
      {
        question: '윗집을 직접 찾아가서 항의해도 되나요?',
        answer: '직접 방문 항의는 감정적 충돌로 이어질 수 있어 <strong>권장하지 않습니다</strong>. 관리사무소나 이웃사이센터를 통한 공식 중재가 안전하고, 이후 법적 절차에서도 유리합니다.',
      },
      {
        question: '층간소음으로 경찰에 신고할 수 있나요?',
        answer: '야간(22시~06시) 소음은 <strong>경범죄처벌법 위반</strong>으로 112 신고가 가능합니다. 경찰 출동 기록은 소음의 반복성과 심각성을 증명하는 증거로 활용할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 층간소음 상황 법적 대응 방법 확인하기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃 분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 신고~조정 절차', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '층간소음 데시벨 기준', href: '/guide/neighbor-dispute/floor-noise-decibel-standard' },
      { label: '층간소음 손해배상 핵심 판례', href: '/guide/neighbor-dispute/floor-noise-damage-amount-key-cases' },
      { label: '반려동물·악취·주차 분쟁 대처법', href: '/guide/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
    ],
  },
  {
    domain: 'neighbor-dispute',
    slug: 'floor-noise-victim-where-to-start',
    keyword: '층간소음 피해 어디부터 시작해야 하나',
    questionKeyword: '층간소음 피해를 입고 있는데 어디서부터 뭘 해야 하나요?',
    ctaKeyword: '층간소음 피해 대응',
    type: '어디부터형',
    meta: {
      title: '층간소음 피해 대응 3단계 — 어디부터 시작할까 | 로앤가이드',
      description: '층간소음 피해가 심한데 뭘 해야 할지 모르겠다면, 증거 수집부터 법적 대응까지 3단계를 확인하세요. 지금 확인하세요.',
    },
    intro: '어젯밤에도 윗집에서 쿵쿵대는 소리에 새벽까지 잠을 설쳤습니다. 이러다 제가 먼저 쓰러질 것 같은데, 뭘 해야 할지 막막합니다. 참을 만큼 참았는데 이제는 제대로 대응하고 싶습니다. 처음이라 어디서부터 시작해야 할지 모르겠다면, 아래 3단계를 따라해보세요.',
    timelineSteps: [
      '1단계: 증거부터 모으세요 — 소음 녹음, 데시벨 측정, 피해 일지 작성',
      '2단계: 공식 채널로 민원을 넣으세요 — 관리사무소 서면 민원, 이웃사이센터 측정',
      '3단계: 법적 절차를 선택하세요 — 환경분쟁조정, 민사소송, 형사 고소',
    ],
    sections: [
      {
        title: '어디부터? 가장 먼저 소음 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택 층간소음의 범위와 기준에 관한 규칙 제3조에 따라 직접충격 소음 기준은 주간(06~22시) 1분 등가소음도 43dB, 야간(22~06시) 38dB입니다</strong></p>\n<p>법적 대응의 시작은 <strong>증거 확보</strong>입니다. 스마트폰 앱으로 데시벨을 측정하고, 소음 발생 시 <strong>동영상을 촬영</strong>하세요. 날짜, 시간, 소음 종류, 데시벨 수치를 기록한 피해 일지도 작성합니다.</p>\n<p>특히 <strong>야간(22시~06시)</strong> 소음은 법적으로 더 엄격한 기준이 적용됩니다. 불면증이나 두통 등 건강 피해가 있다면 병원 진료를 받아 진단서를 확보하세요. 초기에 증거를 잘 모아두면 이후 절차가 훨씬 수월해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 번째 할 일: 소음 녹음 + 데시벨 측정 + 날짜·시간 기록 + 건강 피해 진단서</blockquote>',
      },
      {
        title: '다음으로, 공식 기관에 민원을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택관리법 제20조 제2항에 따라 관리주체는 층간소음 피해를 끼치는 입주자에게 중단 권고를 할 수 있습니다</strong></p>\n<p>관리사무소에 <strong>서면으로 정식 민원</strong>을 접수하세요. 구두 민원은 증거가 남지 않습니다. 관리사무소가 상대방에게 중단 권고를 했다는 기록이 이후 조정·소송에서 중요합니다.</p>\n<p>동시에 <strong>층간소음 이웃사이센터(1661-2642)</strong>에 전화하세요. 무료 상담과 현장 소음측정을 제공하며, 전문 장비로 측정한 결과는 법적 증거로 활용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">두 번째 할 일: 관리사무소 서면 민원 → 이웃사이센터(1661-2642) 측정 신청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">내 층간소음 상황에 맞는 대응 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '마지막으로, 상황에 맞는 법적 절차를 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">환경분쟁조정은 수수료 1만원, 처리 기간 3~6개월로 소송보다 빠르고 저렴한 해결 방법입니다</strong></p>\n<p>증거가 모이면 3가지 법적 절차 중 선택합니다.</p>\n<ul>\n<li><strong>환경분쟁조정</strong>: 수수료 1만원, 3~6개월, 조정 성립 시 강제집행 가능</li>\n<li><strong>민사소송</strong>: 위자료 + 실손해(이사비, 치료비) 청구, 6개월~1년</li>\n<li><strong>형사 고소</strong>: 의도적·반복적 소음 시 스토킹처벌법 위반(2년 이하 징역)</li>\n</ul>\n<p>대부분의 경우 환경분쟁조정을 먼저 시도하고, 불성립 시 민사소송으로 넘어가는 것이 효율적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">세 번째 할 일: 환경분쟁조정 먼저 → 불성립 시 민사소송 → 악질적 소음 시 형사 고소</blockquote>',
      },
    ],
    cases: [
      {
        title: '도로소음의 참을 한도 판단 기준과 인용의무 관련 판례',
        summary:
          '대법원 2011다91784 사건(2015.09.24 선고)에서 법원은 소음의 참을 한도를 넘는지는 피해의 성질과 정도, 가해행위의 공공성, 방지조치 가능성, 지역성, 토지이용의 선후관계 등 모든 사정을 종합적으로 고려하여 판단해야 한다고 판시했습니다.',
        takeaway:
          '참을 한도 판단은 데시벨 수치만이 아니라 종합적인 사정이 고려됩니다. 소음 빈도, 시간대, 방지 노력 여부 등을 증거로 남겨두면 피해 입증에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '소음 앱으로 측정한 데시벨도 증거로 인정되나요?',
        answer: '스마트폰 앱 측정값은 <strong>보조 증거</strong>로 활용됩니다. 공식 증거력이 필요하면 이웃사이센터의 전문 장비 측정을 받으세요. 앱 측정값과 동영상을 함께 제출하면 증거력이 높아집니다.',
      },
      {
        question: '관리사무소가 아무 조치를 안 하면 어떻게 하나요?',
        answer: '관리사무소의 <strong>부작위를 기록</strong>해두세요. 서면 민원에 대한 미응답 내역이 이후 조정·소송에서 관리주체의 책임을 물을 수 있는 근거가 됩니다.',
      },
      {
        question: '층간소음 문제로 상대방에게 내용증명을 보내도 되나요?',
        answer: '<strong>내용증명 발송은 가능</strong>합니다. 소음 중단을 정식으로 요청한 기록이 되어 법적 절차에서 유리합니다. 다만 감정적 표현은 삼가고, 구체적 소음 시간과 피해 내용을 적으세요.',
      },
      {
        question: '층간소음 피해로 이사 갈 때 보상받을 수 있나요?',
        answer: '소음이 참을 한도를 넘어 <strong>이사가 불가피</strong>했음을 입증하면 이사비를 손해배상으로 청구할 수 있습니다. 이사 계약서와 비용 영수증을 보관하세요.',
      },
      {
        question: '변호사 없이 환경분쟁조정을 신청해도 되나요?',
        answer: '환경분쟁조정은 <strong>변호사 없이도 직접 신청</strong>할 수 있습니다. 온라인으로 접수하고, 증거 서류(소음 녹음, 피해 일지, 측정 결과)만 잘 준비하면 됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 층간소음 피해 첫 대응 방법 확인하기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃 분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 신고~조정 절차', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '윗집 소음 참을 수 없을 때 대처법', href: '/guide/neighbor-dispute/unbearable-upstairs-noise-response' },
      { label: '층간소음 데시벨 기준', href: '/guide/neighbor-dispute/floor-noise-decibel-standard' },
      { label: '층간소음 손해배상 핵심 판례', href: '/guide/neighbor-dispute/floor-noise-damage-amount-key-cases' },
    ],
  },
  {
    domain: 'real-estate-auction',
    slug: 'auction-bidding-procedure',
    keyword: '부동산 경매 입찰 절차와 준비 방법',
    questionKeyword: '부동산 경매 입찰 절차가 어떻게 되나요?',
    ctaKeyword: '경매 입찰 절차',
    type: '절차타임라인형',
    meta: {
      title: '부동산 경매 입찰 5단계 — 물건 조사부터 낙찰까지 | 로앤가이드',
      description: '부동산 경매 입찰을 처음 준비한다면, 물건 조사부터 잔금 납부까지 5단계 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '경매로 아파트를 싸게 살 수 있다는 이야기를 듣고 알아보기 시작했습니다. 그런데 권리분석이니 입찰보증금이니 생소한 용어가 많아 어디서부터 시작해야 할지 모르겠습니다. 부동산 경매 입찰 절차를 단계별로 정리했습니다. 처음이라도 따라할 수 있습니다.',
    timelineSteps: [
      '1단계: 물건 검색·조사 — 법원경매정보 사이트에서 물건 검색, 등기부등본 열람',
      '2단계: 권리분석 — 근저당·가압류·임차인 분석, 인수할 권리 확인',
      '3단계: 현장 조사 — 점유 상태, 주변 시세, 하자 여부 확인',
      '4단계: 입찰 참여 — 최저매각가격의 10% 보증금, 입찰표 작성·제출',
      '5단계: 낙찰·잔금 납부 — 매각허가결정, 잔금 납부, 소유권이전등기',
    ],
    sections: [
      {
        title: '1단계: 법원경매정보에서 물건을 검색하고 조사하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법에 따라 법원은 경매 물건의 현황조사보고서, 감정평가서, 매각물건명세서를 공개합니다</strong></p>\n<p>대한민국 법원경매정보 사이트(www.courtauction.go.kr)에서 지역·물건 종류별로 검색할 수 있습니다. 관심 물건을 찾으면 <strong>3대 서류</strong>를 반드시 확인하세요.</p>\n<ul>\n<li><strong>현황조사보고서</strong>: 점유자 현황, 임대차 관계 확인</li>\n<li><strong>감정평가서</strong>: 시가 대비 최저매각가격 비교</li>\n<li><strong>매각물건명세서</strong>: 인수할 권리, 소멸할 권리 정리</li>\n</ul>\n<p>등기부등본도 열람하여 근저당, 가압류, 전세권 등 <strong>권리관계를 파악</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 확인: 법원경매정보 → 3대 서류(현황조사·감정평가·매각물건명세서) → 등기부등본</blockquote>',
      },
      {
        title: '2단계: 권리분석으로 숨은 위험을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법 제91조에 따라 매각으로 소멸하지 않는 권리(선순위 임차권, 법정지상권 등)는 매수인이 인수해야 합니다</strong></p>\n<p>경매의 핵심은 <strong>권리분석</strong>입니다. 말소기준권리(근저당·가압류·경매개시결정 등) 설정일 이전에 대항력을 갖춘 임차인이 있으면 매수인이 그 보증금을 인수해야 합니다.</p>\n<p>근저당 채권액이 감정가에 비해 과도하면 <strong>배당 후에도 채권이 남을 수 있으므로</strong> 주의하세요. 권리분석이 어려우면 법무사나 경매 전문가의 도움을 받는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">권리분석: 말소기준권리 확인 → 선순위 임차권·법정지상권 체크 → 인수 비용 계산</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">내 경매 입찰 준비 상태 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3~4단계: 현장 조사 후 입찰에 참여하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행규칙에 따라 입찰보증금은 최저매각가격의 10%이며, 입찰기일에 법원에 직접 제출하거나 전자입찰이 가능합니다</strong></p>\n<p>서류 분석만으로는 부족합니다. <strong>현장 방문</strong>으로 실제 점유 상태, 건물 하자, 주변 환경을 확인하세요. 점유자와 대화가 가능하면 임대차 관계도 직접 파악합니다.</p>\n<p>입찰 시에는 <strong>최저매각가격의 10%</strong>를 보증금으로 제출해야 합니다. 입찰가격은 주변 시세의 70~80% 선에서 결정하되, 인수할 권리(선순위 보증금 등)를 반드시 포함하여 <strong>총투자비용</strong>을 계산하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">입찰: 현장 확인 → 총투자비용 계산 → 입찰보증금(최저가 10%) → 입찰표 제출</blockquote>',
      },
      {
        title: '5단계: 낙찰 후 잔금 납부와 소유권이전등기를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법 제142조에 따라 매수인은 매각허가결정 확정 후 지정 기한 내에 잔금을 납부해야 하며, 미납 시 보증금을 몰수당합니다</strong></p>\n<p>최고가 입찰자로 선정되면 법원이 <strong>매각허가결정</strong>을 내립니다. 이의가 없으면 1주일 후 확정되고, 통상 1개월 내에 잔금을 납부해야 합니다.</p>\n<p>잔금 납부 후 법원에 <strong>소유권이전등기 촉탁</strong>을 신청하면 등기가 이전됩니다. 점유자가 퇴거하지 않으면 명도소송과 강제집행이 필요할 수 있으므로, 잔금 납부 시점부터 명도 계획을 세우세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">낙찰 후: 매각허가결정 확정 → 잔금 납부(미납 시 보증금 몰수) → 소유권이전등기 → 명도</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매 시 근저당권 피담보채무 확정 시기 관련 판례',
        summary:
          '대법원 2025다212005 사건(2025.09.25 선고)에서 법원은 근저당권이 설정된 부동산에 제3자가 경매를 신청한 경우, 근저당권의 피담보채권은 매수인이 매각대금을 지급한 때에 확정된다고 판시했습니다.',
        takeaway:
          '경매 물건의 근저당 채권액은 낙찰 잔금 납부 시점에 확정됩니다. 입찰 전 등기부상 채권최고액과 실제 채무액이 다를 수 있으므로, 권리분석 시 이 차이를 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '경매 입찰에 실패하면 보증금은 돌려받나요?',
        answer: '낙찰받지 못한 입찰자의 보증금은 <strong>즉시 반환</strong>됩니다. 전자입찰의 경우 다음 영업일에 자동 환불됩니다. 단, 낙찰 후 잔금 미납 시에는 보증금이 몰수됩니다.',
      },
      {
        question: '대출을 받아서 경매 잔금을 납부할 수 있나요?',
        answer: '<strong>경매 잔금 대출</strong>은 가능합니다. 시중은행에서 매각허가결정문을 근거로 대출을 실행해주며, 감정가 대비 70~80% 수준의 LTV가 적용됩니다.',
      },
      {
        question: '입찰가를 얼마로 써야 하나요?',
        answer: '주변 시세의 <strong>70~80%</strong> 선에서 결정하되, 인수할 권리(선순위 보증금 등)를 더한 총투자비용이 시세를 넘지 않도록 계산하세요. 첫 경매라면 유찰 횟수가 많은 물건이 상대적으로 안전합니다.',
      },
      {
        question: '경매 물건에 세입자가 있으면 어떻게 하나요?',
        answer: '대항력 있는 세입자(전입신고+확정일자가 말소기준권리보다 선순위)의 보증금은 <strong>매수인이 인수</strong>해야 합니다. 후순위 세입자는 배당으로 보증금을 받고 퇴거하게 됩니다.',
      },
      {
        question: '전자입찰과 현장입찰 중 어떤 게 편한가요?',
        answer: '<strong>전자입찰</strong>이 법원 방문 없이 온라인으로 진행할 수 있어 편리합니다. 대한민국 법원 전자소송 사이트에서 공인인증서로 접속하여 입찰할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 경매 입찰 전략 확인하기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 낙찰 후 명도 소송 절차', href: '/guide/real-estate-auction/eviction-after-winning-bid' },
      { label: '경매 권리분석 체크리스트', href: '/guide/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '경매 초보 흔한 실수', href: '/guide/real-estate-auction/beginner-auction-common-mistakes' },
      { label: '세입자 있는 경매 물건 주의사항', href: '/guide/real-estate-auction/auction-property-with-tenant' },
    ],
  },
  {
    domain: 'real-estate-auction',
    slug: 'eviction-after-winning-bid',
    keyword: '경매 낙찰 후 명도 소송 절차',
    questionKeyword: '경매로 낙찰받았는데 점유자가 안 나가면 어떻게 하나요?',
    ctaKeyword: '경매 명도 소송',
    type: '절차타임라인형',
    meta: {
      title: '경매 명도소송 4단계 — 점유자 퇴거 절차 총정리 | 로앤가이드',
      description: '경매 낙찰 후 점유자가 퇴거하지 않아 막막하다면, 명도소송부터 강제집행까지 4단계를 확인하세요. 지금 확인하세요.',
    },
    intro: '경매로 아파트를 낙찰받고 잔금까지 납부했는데, 이전 소유자가 나가지 않겠다고 버티고 있습니다. 이사 계획은 세워뒀는데 열쇠조차 받지 못한 상황입니다. 점유자가 퇴거하지 않으면 법적 절차를 통해 강제로 내보낼 수 있습니다. 명도 소송 절차를 확인해보세요.',
    timelineSteps: [
      '1단계: 내용증명 발송 — 점유자에게 자진 퇴거 요청 및 기한 설정',
      '2단계: 명도소송 제기 — 관할 법원에 건물인도청구 소송 제기',
      '3단계: 판결 확정 — 승소 판결문(집행권원) 확보',
      '4단계: 강제집행 — 집행관에게 명도 강제집행 신청',
    ],
    sections: [
      {
        title: '1단계: 내용증명으로 자진 퇴거를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">잔금 납부 완료 시 소유권이 이전되므로, 정당한 권원 없이 점유하는 자에게 퇴거를 요구할 수 있습니다</strong></p>\n<p>소송 전에 먼저 <strong>내용증명</strong>을 보내세요. 퇴거 기한(통상 2주~1개월)을 설정하고, 기한 내 퇴거하지 않으면 법적 절차를 진행하겠다는 내용을 담습니다.</p>\n<p>내용증명은 <strong>우체국 또는 전자우편</strong>으로 발송할 수 있습니다. 발송 기록이 소송에서 중요한 증거가 됩니다. 점유자가 자진 퇴거하면 이사비 일부를 지원하는 조건으로 합의하는 것도 시간과 비용을 줄이는 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 조치: 내용증명 발송(퇴거 기한 설정) → 합의 시도 → 불응 시 소송</blockquote>',
      },
      {
        title: '2단계: 관할 법원에 명도소송(건물인도청구)을 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사소송법에 따라 부동산 소재지 관할 법원에 건물인도청구 소송을 제기합니다</strong></p>\n<p>내용증명에도 퇴거하지 않으면 <strong>명도소송</strong>(건물인도청구)을 제기합니다. 소장에 매각허가결정문, 잔금 납부 영수증, 등기부등본, 내용증명 발송 기록을 첨부하세요.</p>\n<p>소송 기간은 통상 <strong>3~6개월</strong>이 소요됩니다. 소송과 동시에 점유자의 재산 은닉을 막기 위해 <strong>가압류</strong>를 신청하는 것도 고려하세요. 점유이전금지가처분도 함께 신청하면 점유자가 바뀌는 것을 막을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소송 절차: 소장 제출(매각허가결정문·잔금영수증 첨부) → 점유이전금지가처분 동시 신청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">내 명도소송 준비 상태 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 승소 판결문(집행권원)을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법 제24조에 따라 확정된 판결문은 강제집행의 근거가 되는 집행권원입니다</strong></p>\n<p>경매 낙찰자의 명도소송은 소유권 취득이 명확하므로 <strong>승소율이 매우 높습니다</strong>. 판결 선고 후 2주 이내에 항소가 없으면 판결이 확정됩니다.</p>\n<p>확정된 판결문에 <strong>집행문을 부여</strong>받으면 강제집행을 신청할 수 있습니다. 판결 확정까지 기다리기 어려우면, <strong>가집행선고부 판결</strong>을 받으면 확정 전에도 강제집행이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판결 후: 판결 확정(선고 후 2주) → 집행문 부여 → 강제집행 신청 가능</blockquote>',
      },
      {
        title: '4단계: 집행관에게 명도 강제집행을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법 제258조에 따라 집행관이 점유자를 퇴거시키고 물건을 반출하는 강제집행을 실시합니다</strong></p>\n<p>집행권원(확정 판결문+집행문)을 가지고 관할 법원 <strong>집행관사무소</strong>에 강제집행을 신청합니다. 집행비용(인부비, 운반비, 잠금장치 비용 등)은 신청인이 먼저 부담하지만, 이후 점유자에게 구상할 수 있습니다.</p>\n<p>집행관은 먼저 <strong>계고</strong>(퇴거 최종 통보)를 하고, 기한 내 퇴거하지 않으면 강제로 점유를 해제합니다. 집행비용은 사안에 따라 다르지만 통상 <strong>100만~300만원</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">강제집행: 집행관사무소 신청 → 계고(최종 통보) → 강제 퇴거 → 비용 구상</blockquote>',
      },
    ],
    cases: [
      {
        title: '사해행위 취소와 가액배상 범위 관련 판례',
        summary:
          '대법원 2024다242223 사건(2025.08.14 선고)에서 법원은 부동산에 대한 사해행위가 취소되고 원물반환이 불가능한 경우, 일반채권자의 공동담보에 해당하는 범위 내에서만 가액배상을 명해야 하며, 확정된 배당표에 따라 채권자에게 배당금이 지급되는 부분은 제외해야 한다고 판시했습니다.',
        takeaway:
          '경매 낙찰 물건의 이전 소유자가 사해행위로 재산을 이전한 경우가 있을 수 있습니다. 권리분석 단계에서 등기부상 소유권 변동 이력을 확인하고, 이상한 점이 있으면 전문가 상담을 받으세요.',
      },
    ],
    faq: [
      {
        question: '점유자와 합의하면 이사비를 얼마나 줘야 하나요?',
        answer: '법적 의무는 없지만, 실무에서는 <strong>100만~500만원</strong> 선에서 합의하는 경우가 많습니다. 명도소송 비용(변호사비, 집행비용)과 시간을 고려하면 합의가 경제적일 수 있습니다.',
      },
      {
        question: '명도소송 중에도 점유자가 계속 살 수 있나요?',
        answer: '<strong>판결 확정 전까지는 점유자를 강제로 내보낼 수 없습니다</strong>. 다만 점유이전금지가처분을 받아두면 점유자가 바뀌는 것을 방지하여 판결의 실효성을 확보할 수 있습니다.',
      },
      {
        question: '명도소송 비용은 얼마나 드나요?',
        answer: '소송 인지대와 송달료(약 <strong>10만~30만원</strong>), 변호사 비용(선임 시), 강제집행 비용(100만~300만원)이 발생합니다. 승소 후 소송비용은 패소자에게 청구할 수 있습니다.',
      },
      {
        question: '세입자가 보증금을 돌려달라고 하면 내가 줘야 하나요?',
        answer: '대항력 있는 세입자(선순위)의 보증금은 <strong>매수인이 인수</strong>해야 합니다. 후순위 세입자는 배당으로 보증금을 받아야 하므로 매수인에게 직접 청구할 수 없습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 명도소송 전략 확인하기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '부동산 경매 입찰 절차', href: '/guide/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 권리분석 체크리스트', href: '/guide/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '경매 명도소송 절차', href: '/guide/real-estate-auction/auction-eviction-lawsuit-process' },
      { label: '세입자 있는 경매 물건 주의사항', href: '/guide/real-estate-auction/auction-property-with-tenant' },
    ],
  },
];
