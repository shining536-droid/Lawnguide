import { SpokePage } from '../spoke-pages';

// batch52 divorce 4개: 협의이혼 거부 + 이혼소송 기각 후 재청구 + 비상장주식 보유 배우자 자산평가 + 이혼 후 양육비 변경 청구
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 협의이혼에 배우자가 끝까지 거부·출석거부·연락두절하는 당사자가 재판상 이혼·공시송달·궐석재판으로 진행할 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 이혼소송이 기각된 당사자가 기각 사유를 분석하고 재제소·항소 트랙을 정리해 다음 단계를 검토하도록 돕는 페이지다.
// 3. 이 페이지는 비상장주식·자영업 지분을 보유한 배우자와 이혼하는 당사자가 비상장주식 평가·재산명시·감정 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 이혼 후 양육비 변경(증액·감액)을 청구하려는 양육친·비양육친이 가사소송법 제40조·양육비 변경 사유 정리를 검토하도록 돕는 페이지다.

export const spokesBatch52Divorce: SpokePage[] = [
  // ─── 1. divorce / spouse-noshow-service-by-publication ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-noshow-service-by-publication',
    keyword: '협의이혼 거부 공시송달 궐석재판',
    questionKeyword: '배우자가 협의이혼에도 응하지 않고 연락도 두절됐어요. 어떻게 이혼할 수 있나요?',
    ctaKeyword: '배우자 출석거부 이혼 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 협의이혼 거부 — 공시송달·궐석재판 5단계 절차 | 로앤가이드',
      description:
        '배우자가 협의이혼·재판 출석을 모두 거부하거나 연락이 두절됐다면 재판상 이혼·공시송달·궐석재판 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 1년째 가출 상태로 연락도 안 되고, 협의이혼은 응할 의사도 없어요. 별거는 길어지는데 법적으로 정리는 안 되니 답답합니다." 협의이혼은 양 당사자 합의가 필수라 한쪽이 거부하거나 연락이 두절되면 재판상 이혼으로 넘어가야 합니다. 가사소송법 제48조 공시송달·민사소송법 제194조 송달 규정에 따라 배우자 소재 불명 시에도 재판이 진행될 수 있어요. 별거 기간·이혼 사유·재산분할·양육 쟁점 정리가 출발점이고, 6개월 이상 별거에 협의이혼 거부면 민법 제840조 제6호(혼인을 계속하기 어려운 중대한 사유)로 청구 가능성이 검토됩니다.</p>',
    sections: [
      {
        title: '협의이혼 거부 — 진행 가능한 4가지 트랙',
        content:
          '<p><strong style="color:#1e3a5f">배우자 거부 형태에 따라 트랙이 갈립니다.</strong></p>\n<ul>\n<li><strong>협의이혼 거부 + 연락 가능 → 재판상 이혼 (소송)</strong> — 민법 제840조 1~6호 사유 입증. 6개월 이상 별거·부정행위·악의 유기·심히 부당한 대우 등.</li>\n<li><strong>연락 두절 + 소재 불명 → 공시송달 + 궐석재판</strong> — 가사소송법 제48조·민사소송법 제194조. 주민등록·국민건강보험·통신사 가입자 정보 조회로 소재 추적 후 불명 확인되면 공시송달.</li>\n<li><strong>가출·잠적 + 부정행위 → 부정행위 + 악의 유기 사유</strong> — 민법 제840조 제1호·제2호. 양쪽 사유로 청구 가능.</li>\n<li><strong>출석은 하지만 끝까지 거부 → 화해권고결정 / 본안 판결</strong> — 가정법원 화해권고결정에 이의 없으면 확정. 이의 시 본안 판결.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한쪽이 끝까지 거부해도 재판상 이혼은 가능. 협의이혼은 양 당사자 합의 필수지만, 재판상 이혼은 일방 청구로 진행. 사유 입증이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재판상 이혼 + 공시송달 5단계',
        content:
          '<p><strong style="color:#1e3a5f">소재 추적·소 제기·송달·궐석재판·확정 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배우자 소재 추적 (1~2주)</strong> — 주민등록 초본·국민건강보험 자격조회·통신사 가입자 정보 등 사실조회로 추적. 변호사 또는 본인이 신청.</li>\n<li><strong>2단계 — 가정법원 이혼 소 제기 (소장 작성)</strong> — 민법 제840조 사유 명시 + 재산분할·양육·위자료 청구. 주소 불명이면 "공시송달 신청 예정" 기재.</li>\n<li><strong>3단계 — 송달 시도 (1~3개월)</strong> — 보통송달·특별송달·집행관 송달 시도. 모두 실패 시 공시송달 신청.</li>\n<li><strong>4단계 — 공시송달 + 궐석재판 (2개월~1년)</strong> — 법원 게시판 공시 14일 → 송달 효력. 배우자 출석 안 해도 본안 진행. 입증자료 기반 판결.</li>\n<li><strong>5단계 — 판결 확정 + 이혼 신고 (1개월)</strong> — 판결 확정 후 1개월 내 가족관계등록부 신고. 이혼 효력 발생.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 거부 형태·별거 기간·재산 상황에 따라 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 거부·잠적 사건 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">사유 입증·소재 추적·재산분할 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 가족관계증명서·혼인관계증명서·주민등록등본</strong> — 본인·배우자 모두 발급.</li>\n<li><strong>2. 별거 입증 자료</strong> — 본인 주민등록 이전 기록, 별거 시작 시점 카톡·문자, 이웃·가족 진술서.</li>\n<li><strong>3. 배우자 소재 불명 입증</strong> — 주민등록 초본 발급(최근 주소지)·국민건강보험 자격조회·통신사 사실조회·우체국 반송 기록.</li>\n<li><strong>4. 이혼 사유 입증</strong> — 부정행위·악의 유기·심히 부당한 대우 입증자료(녹취·문자·진단서·진술서).</li>\n<li><strong>5. 재산 자료</strong> — 부동산 등기부등본·자동차 등록·은행 거래내역·예상 재산 목록.</li>\n<li><strong>6. 자녀 양육 자료</strong> — 자녀 출생증명·재학증명·평소 양육 입증(어린이집·학원 등록증·진료 기록).</li>\n<li><strong>7. 위자료 산정 자료</strong> — 혼인 기간·결혼 비용·정신적 고통 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공시송달은 시간이 오래 걸리므로(소재 추적부터 확정까지 6개월~1년), 가능하면 보통송달 시도부터 시작. 사실조회로 소재 확인되면 송달 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 협의이혼 거부 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"배우자가 거부하면 이혼 못 한다"는 오해</strong> — 협의이혼은 합의 필수지만 재판상 이혼은 일방 청구 가능. 사유만 입증되면 진행.</li>\n<li><strong>공시송달만 의지하면 시간 소요</strong> — 소재 추적·사실조회 먼저 시도해 보통송달 가능성 확인. 공시송달은 마지막 수단.</li>\n<li><strong>이혼만 받고 재산분할·양육 누락</strong> — 같은 소송에서 이혼 + 재산분할 + 양육 + 위자료 일괄 청구가 효율적. 이혼 후 별도 청구는 2년 제척기간.</li>\n<li><strong>궐석재판 후 배우자 항소</strong> — 판결 확정 전 배우자가 나타나 항소 가능. 송달 절차 적법성·사유 입증의 견고함이 항소 대비의 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 가정법원 민원실 / 사선 변호사 조력은 사실조회·공시송달 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인을 계속하기 어려운 중대한 사유와 파탄주의',
        summary:
          '대법원 2020므14763 사건(대법원, 2021.03.25 선고)에서 법원은 민법 제840조 제3호 "심히 부당한 대우" 의미와 제6호 "혼인을 계속하기 어려운 중대한 사유"의 의미·판단 기준을 정리하면서, 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되는 경우 이혼 청구를 인용해야 한다고 판시했습니다. 협의이혼 거부 + 장기 별거 사건에서도 파탄 정황이 입증되면 일방 청구로 이혼이 인정될 가능성이 있다는 시사점이 있습니다.',
        takeaway: '협의이혼이 거부되어도 6개월 이상 별거·연락두절·악의 유기 정황이 입증되면 재판상 이혼이 인정될 수 있어, 별거 시작 시점·연락 시도 기록·이혼 사유 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '배우자 소재를 끝까지 못 찾으면 이혼이 안 되나요?',
        answer:
          '<strong>공시송달로 진행 가능합니다.</strong> 가사소송법 제48조에 따라 법원 게시판 공시 14일 후 송달 효력 발생. 배우자 출석 안 해도 본안 판결.',
      },
      {
        question: '공시송달은 비용이 얼마나 드나요?',
        answer:
          '<strong>인지대·송달료 외 별도 비용은 크지 않습니다.</strong> 사실조회 신청은 기관별 수수료. 변호사 선임 시 수임료 별도지만 사실조회·공시송달 설계에 도움.',
      },
      {
        question: '궐석재판으로 양육·재산분할도 결정되나요?',
        answer:
          '<strong>이혼·양육·재산분할·위자료 일괄 결정 가능합니다.</strong> 본인이 입증자료를 충실히 제출하면 본안 판결로 모두 정리. 별도 청구 안 해도 됨.',
      },
      {
        question: '판결 확정 후 배우자가 나타나 다시 따지면요?',
        answer:
          '<strong>송달 절차가 적법했으면 판결은 유효합니다.</strong> 다만 책임을 다툰 적이 없는 경우 추완항소(민사소송법 제173조) 가능성 있어 송달·사유 입증의 견고함이 중요. 변호사 조력 권장.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)도 이혼 상담 운영. 사선 변호사는 사실조회·공시송달 설계에서 효과 큼.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 종합 절차', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '조정 결렬 후 재판 절차', href: '/guide/divorce/divorce-mediation-failure-next-step' },
      { label: '조정 거부 후 재판 진행', href: '/guide/divorce/divorce-mediation-refused-trial-procedure' },
      { label: '가정폭력 즉시 이혼 임시조치', href: '/guide/divorce/divorce-violent-spouse-emergency-divorce' },
      { label: '국제이혼 관할·송달 절차', href: '/guide/divorce/divorce-international-jurisdiction-spouse' },
    ],
  },

  // ─── 2. divorce / petition-rejected-grounds-retry ───
  {
    domain: 'divorce',
    slug: 'divorce-petition-rejected-grounds-retry',
    keyword: '이혼소송 기각 재제소 항소',
    questionKeyword: '이혼소송이 기각됐어요. 다시 청구할 수 있나요? 항소가 나은가요?',
    ctaKeyword: '이혼소송 기각 후 대응 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '이혼소송 기각 후 — 재제소·항소 5가지 분기 정리 | 로앤가이드',
      description:
        '이혼소송이 기각된 당사자라면 기각 사유 분석 + 재제소·항소 5가지 분기를 검토해 다음 단계를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 별거 후 이혼 청구했는데 본인 책임이 더 크다는 이유로 기각됐어요. 다시 청구해도 또 기각될까 봐 막막합니다." 이혼소송 기각은 ① 사유 입증 부족 ② 유책배우자 청구(파탄주의 vs 유책주의) ③ 절차 흠결 등 다양한 이유로 발생하며, 기각 사유에 따라 항소·재제소·새 사유 추가 트랙이 갈립니다. 판결 송달 후 14일 내 항소가 1차 분기점이고, 사유·증거가 변화했다면 별도 재제소도 가능해요. 변호사 조력 검토 가치가 높은 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 이혼소송 기각 — 5가지 주요 사유는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기각 사유에 따라 다음 단계 트랙이 갈립니다.</strong></p>\n<ul>\n<li><strong>유책배우자 청구 (파탄 책임이 본인에게 더 큰 경우)</strong> — 대법원은 원칙적 유책주의이지만 예외적 파탄주의 적용 사안 있음. 본인 책임이 더 명백하면 청구 기각 경향.</li>\n<li><strong>이혼 사유 입증 부족</strong> — 부정행위·악의 유기·심히 부당한 대우 등 사유 입증 자료 부족. 추가 자료 보완 후 재제소 가능.</li>\n<li><strong>혼인 파탄 인정 안 됨</strong> — 혼인 회복 가능성·관계 유지 의지 인정. 별거 기간 부족·생활 유지 정황.</li>\n<li><strong>절차 흠결</strong> — 소장 부적법·관할 위반·송달 누락. 보정 후 재진행.</li>\n<li><strong>화해·조정 권고 거부</strong> — 법원 화해 권고를 거부하면서 사유 입증도 약하면 기각 경향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기각 판결 송달 후 14일 내 항소 가능. 항소 안 하면 확정. 새 사유·새 증거 발생 시 별도 재제소 가능.</blockquote>',
      },
      {
        title: 'Q. 항소 vs 재제소 — 어떻게 선택하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기각 사유와 새 사정 발생 여부에 따라 트랙이 갈립니다.</strong></p>\n<ul>\n<li><strong>항소 (1심 송달 후 14일 내)</strong> — 1심 사실 인정·법적 판단 다툼. 새 증거 추가 가능. 1심 사유 + 보강 자료가 핵심.</li>\n<li><strong>재제소 (확정 후, 새 사유)</strong> — 1심 확정 후 새 부정행위·새 폭력·새 별거 기간 누적 등 새 사유 발생 시. 같은 사유 재제소는 기판력으로 차단.</li>\n<li><strong>유책배우자 → 상대방 협조 유도</strong> — 본인 유책으로 기각된 경우 상대방 청구 유도(별거·재산분할 협상). 상대방이 청구하면 본인은 응소만으로 이혼 가능.</li>\n<li><strong>이혼 외 가사소송</strong> — 부양료·면접교섭·재산분할 별도 청구로 부분 정리 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">기각 사유·새 사정·항소 시한에 따라 다음 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 재제소·항소 준비 — 어떤 자료가 핵심인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 1심 판결 분석 + 새 자료 보강 + 사유 재정리가 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 1심 판결문 정밀 분석 (즉시)</strong> — 기각 사유 + 사실 인정 부분 + 법적 판단 부분 구분. 변호사 조력 권장.</li>\n<li><strong>2단계 — 사유 보강 자료 수집 (1~3개월)</strong> — 1심에 누락된 사유·새 부정행위·새 폭력·확장된 별거 기간 자료.</li>\n<li><strong>3단계 — 항소 또는 재제소 결정 (14일 시한 주의)</strong> — 송달 후 14일 내 항소 결정. 시한 지나면 항소 불가, 재제소만 가능.</li>\n<li><strong>4단계 — 항소심 또는 새 1심 진행 (6개월~1년)</strong> — 항소심은 1심 사실관계 + 새 자료 종합. 재제소는 새 사실관계 중심.</li>\n<li><strong>5단계 — 화해·조정 적극 활용</strong> — 가정법원 화해권고결정에 응하면 본안 판결 없이 정리 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "기각됐으니 끝났다"고 포기하면 별거가 길어져도 법적 정리가 안 됩니다. 항소 시한 14일 안에 결정 + 새 사유 추가 가능성 검토가 출발점.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n<li><strong>한국가정법률상담소</strong> — 1644-7077 (이혼·재산분할·양육 상담)</li>\n<li><strong>가정법원 민원실</strong> — 항소장·재제소 양식·접수 안내</li>\n<li><strong>여성긴급전화</strong> — 1366 (가정폭력·이혼 상담, 24시간)</li>\n<li><strong>한국여성의전화</strong> — 02-2263-6464 (이혼·가정폭력 법률상담)</li>\n<li><strong>사선 변호사</strong> — 항소심 설계·새 사유 정리에 효과적</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위자료 청구가 쌍방 책임으로 기각된 경우 제3자 청구 영향',
        summary:
          '대법원 2023므16678 사건(대법원, 2024.06.27 선고)에서 법원은 부부 사이의 이혼을 원인으로 한 위자료 청구가 쌍방 책임 정도가 대등하다고 판단되어 기각된 경우, 제3자에 대해 이혼을 원인으로 한 위자료 청구를 할 수 있는지 여부에 대한 기준을 정리했습니다. 이혼소송 기각 후 후속 청구·항소 진행에서 본인 유책 비중과 상대방 책임 비교가 핵심 판단 요소라는 시사점이 있어, 기각 판결문의 사실 인정 부분을 정밀 분석한 후 다음 트랙을 결정하는 것이 도움이 됩니다.',
        takeaway: '이혼소송 기각은 본인 유책 비중·사유 입증 강도에 따라 결과가 달라지므로, 1심 판결문을 정밀 분석한 후 항소·재제소·상대방 청구 유도 트랙을 선택하면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '같은 사유로 다시 청구하면 어떻게 되나요?',
        answer:
          '<strong>같은 사실관계·같은 사유는 기판력으로 차단됩니다.</strong> 1심 확정 후엔 새 부정행위·새 폭력·확장된 별거 기간 등 새 사유가 있어야 재제소 가능. 항소는 시한(14일) 내 다툼 가능.',
      },
      {
        question: '본인 유책으로 기각됐는데 어떻게 이혼하나요?',
        answer:
          '<strong>상대방이 청구하면 본인은 응소만으로 이혼 가능합니다.</strong> 상대방 청구 유도(별거·재산분할 협상·합의 시도). 상대방도 거부하면 장기 별거 누적 후 파탄 인정 가능성.',
      },
      {
        question: '항소 비용이 부담되는데 무료 상담 가능한가요?',
        answer:
          '<strong>대한법률구조공단(132)에서 자격 요건 따라 무료 상담·소송 대리 가능합니다.</strong> 소득·재산 기준 충족 시 변호사 무료 선임도. 한국가정법률상담소(1644-7077)도 무료 상담.',
      },
      {
        question: '재산분할만 따로 청구할 수 있나요?',
        answer:
          '<strong>이혼이 인정 안 된 상태에서 재산분할만 청구는 어렵습니다.</strong> 이혼이 확정·인정돼야 재산분할 청구권 발생. 다만 부양료·면접교섭은 별거 중에도 청구 가능.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)·여성긴급전화(1366)도 이혼 상담. 사선 변호사는 항소·재제소 설계에서 효과 큼.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '조정 결렬 후 재판 절차', href: '/guide/divorce/divorce-mediation-failure-next-step' },
      { label: '조정 거부 후 재판 진행', href: '/guide/divorce/divorce-mediation-refused-trial-procedure' },
      { label: '재판상 이혼 종합 절차', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '조정 vs 재판 전략 비교', href: '/guide/divorce/divorce-mediation-vs-trial-strategy' },
      { label: '이혼 후 재산 발견 추가 청구', href: '/guide/divorce/divorce-asset-discovered-after-trial' },
    ],
  },

  // ─── 3. divorce / spouse-shareholder-stock-valuation ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-shareholder-stock-valuation',
    keyword: '비상장주식 자영업 지분 재산분할',
    questionKeyword: '배우자가 비상장 회사 주식·자영업 지분을 보유하고 있어요. 재산분할에서 어떻게 평가하나요?',
    ctaKeyword: '비상장주식 재산분할 평가 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비상장주식·자영업 지분 재산분할 — 평가·감정 5단계 절차 | 로앤가이드',
      description:
        '배우자가 비상장 회사 주식·자영업 지분을 보유한 이혼이라면 비상장주식 평가·재산명시·감정 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 가족 회사 주식 30%를 가지고 있고 본인 명의 자영업 매장도 운영해요. 이혼하려는데 이런 비상장주식·사업 지분을 어떻게 분할하는지 막막합니다." 비상장주식·자영업 지분은 시가가 명확하지 않아 재산분할에서 평가·감정 절차가 까다로운 영역입니다. 상속세및증여세법 시행령 제54조 비상장주식 평가 방법 + 가정법원 감정인 평가가 핵심이고, 재산명시·재산조회로 보유 주식 수·지분율·재무제표를 먼저 확보해야 평가가 가능해요. 회계사·세무사 감정인의 의견서가 결정적 자료입니다.</p>',
    sections: [
      {
        title: '비상장주식·자영업 지분 — 평가 방법 4가지',
        content:
          '<p><strong style="color:#1e3a5f">시가가 없는 자산은 다음 4가지 방법으로 평가됩니다.</strong></p>\n<ul>\n<li><strong>본질가치 평가법 (상증법 시행령 제54조)</strong> — 1주당 순손익가치(과거 3년 평균)와 순자산가치(자본금·잉여금)를 가중평균. 가장 일반적.</li>\n<li><strong>순자산가치법</strong> — 자산 - 부채 = 순자산. 자영업·소규모 사업체에 적합.</li>\n<li><strong>수익환원법(DCF)</strong> — 미래 현금흐름 할인. 성장성 있는 사업체.</li>\n<li><strong>유사기업 비교법</strong> — 동종업종 상장기업 PER·PBR 비교. 객관 자료 부족 시 보조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가정법원은 보통 본질가치 평가법 + 감정인 의견서를 종합. 회계법인 감정 비용 300~1,000만원 정도. 청구인이 우선 부담 후 패소 측 부담 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 비상장주식 평가 5단계',
        content:
          '<p><strong style="color:#1e3a5f">재산명시·재무제표 확보·감정 신청·평가·분할 결정 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이혼·재산분할 본안 신청 (소 제기)</strong> — 비상장주식·자영업 지분 분할 청구취지 명시. "재산명시·재산조회·감정 신청 예정" 기재.</li>\n<li><strong>2단계 — 재산명시 + 재산조회 (1~3개월)</strong> — 가사소송법 제48조의2·제48조의3에 따라 배우자 보유 주식 수·지분율·회사 정보 제출 명령. 응하지 않으면 1년 이하 징역·1천만 원 이하 과태료.</li>\n<li><strong>3단계 — 회사 재무제표·주주명부 사실조회 (2~3개월)</strong> — 회사·세무서·금융기관에 사실조회. 비공개 자료 강제 확보.</li>\n<li><strong>4단계 — 감정 신청 + 회계법인 평가 (3~6개월)</strong> — 가정법원 감정인 지정. 회계법인이 본질가치·순자산가치 평가서 제출.</li>\n<li><strong>5단계 — 분할 결정 + 집행 (변론 종결 후 1~3개월)</strong> — 평가액 기반 분할 비율 결정. 현물(주식 일부 이전) 또는 가액 보상 형태.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">비상장주식·자영업 평가 방법·감정 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 비상장주식 분할 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">평가·분할 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 회사 정보</strong> — 사업자등록증·법인등기부등본·정관·주주명부.</li>\n<li><strong>2. 재무제표</strong> — 최근 3~5년치 손익계산서·재무상태표·현금흐름표.</li>\n<li><strong>3. 세무 신고서</strong> — 법인세·종합소득세·부가세 신고서.</li>\n<li><strong>4. 배우자 지분 입증</strong> — 주식 보유 증명·주식대장·자영업 사업자등록(공동대표 여부).</li>\n<li><strong>5. 자영업 매출·자산</strong> — 매장 임대차계약서·시설 자산·재고·외상매출금.</li>\n<li><strong>6. 비상장주식 평가 의뢰서</strong> — 회계법인 감정 신청.</li>\n<li><strong>7. 비교 자료</strong> — 동종업종 상장기업 정보·유사 거래 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자가 회사·세무서·은행에 직접 자료를 요청해도 거부될 수 있으니 가정법원 사실조회로 강제 확보가 빠릅니다. 변호사 조력으로 사실조회·감정 신청 설계 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 비상장주식 분할에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"가족 회사 주식이라 분할 못 한다"는 주장</strong> — 혼인 중 형성된 자산이면 분할대상. 가족 회사라도 평가 후 가액 보상 가능.</li>\n<li><strong>재무제표 조작·매출 누락</strong> — 이혼 직전 매출 누락·비용 과다 계상으로 평가액 낮추는 시도. 사실조회·감정으로 다툴 수 있음.</li>\n<li><strong>"주식은 배우자 명의라 본인 재산"</strong> — 실질 자금 출처가 부부 공동이면 명의와 무관. 명의신탁·사해행위 검토.</li>\n<li><strong>특유재산 주장 (혼인 전 취득)</strong> — 혼인 전 취득한 주식은 특유재산이지만 혼인 중 가치 증가 부분은 분할대상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 한국공인회계사회 02-3149-0100 (감정 회계법인 추천) / 사선 변호사 조력은 사실조회·감정 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재판상 이혼 후 재산분할심판 기준시점',
        summary:
          '대법원 2025스595 사건(대법원, 2025.08.14 선고)에서 법원은 재판상 이혼이 확정된 후 재산분할심판을 청구한 경우 재산분할의 기준시점에 대한 판단 기준을 정리했습니다. 비상장주식·자영업 지분 재산분할에서도 평가 기준시점이 사실심 변론종결 시점인지·이혼 확정 시점인지에 따라 평가액이 크게 달라질 수 있어, 시점에 맞는 재무제표·시가 자료를 확보해두는 것이 도움이 됩니다.',
        takeaway: '비상장주식·자영업 지분 재산분할은 평가 기준시점·재무제표·감정인 의견에 따라 결과가 달라지므로, 시점별 재무제표·주주명부·감정 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '감정 비용이 비싸서 부담스러운데 다른 방법이 있나요?',
        answer:
          '<strong>국세청 비상장주식 평가심의위원회 평가 또는 본인 측 회계사 의견서로 대체 시도 가능합니다.</strong> 다만 감정 결과보다 증거력이 약해 본격 다툼은 감정이 권장. 비용은 패소 측 부담 결정 가능.',
      },
      {
        question: '주식을 현물로 받기 어려우면 어떻게 분할되나요?',
        answer:
          '<strong>가액 보상(현금) 형태로 분할 가능합니다.</strong> 평가액 × 분할비율 = 보상금. 일시불·분할납·매월 지급 형태 다양. 집행 보장을 위해 가압류 검토.',
      },
      {
        question: '회사가 폐업·도산하면 분할이 안 되나요?',
        answer:
          '<strong>분할 시점 평가액 기준으로 청구 가능합니다.</strong> 이혼 직전 의도적 폐업·도산은 사해행위 검토. 채권자 위치에서 부인권 행사 가능성.',
      },
      {
        question: '배우자가 자영업 매출을 숨기면 어떻게 입증하나요?',
        answer:
          '<strong>세무서 사실조회·POS 단말기 결제 내역·신용카드사 매출 자료 강제 확보 가능합니다.</strong> 가정법원 직권탐지로 진행. 세무 신고 누락은 별도 세무 조사 사유.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)도 이혼 상담. 사선 변호사는 비상장주식·재산명시·감정 설계에서 효과 큼.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산명시·재산조회 신청', href: '/guide/divorce/divorce-husband-rejected-property-disclose' },
      { label: '숨긴 소득·자산 조사', href: '/guide/divorce/divorce-hidden-income-asset-investigation' },
      { label: '사업주 숨긴 자산 추적', href: '/guide/divorce/divorce-business-owner-hidden-assets-trace' },
      { label: '재산분할 종합 절차', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '특유재산 분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
    ],
  },

  // ─── 4. divorce / post-divorce-child-support-modification ───
  {
    domain: 'divorce',
    slug: 'divorce-post-divorce-child-support-modification',
    keyword: '이혼 후 양육비 변경 청구',
    questionKeyword: '이혼할 때 양육비를 너무 적게 정했어요. 나중에 증액 청구할 수 있나요?',
    ctaKeyword: '양육비 변경 청구 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 후 양육비 변경 청구 — 증액·감액 5단계 절차 | 로앤가이드',
      description:
        '이혼 후 양육비 변경(증액·감액)이 필요한 양육친·비양육친이라면 가사소송법 제40조·양육비 변경 사유 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼할 때 양육비 월 50만원으로 합의했는데, 아이가 중학생이 되면서 학원비·생활비가 두 배가 됐어요. 증액 청구가 가능한지 막막합니다." 이혼 후 양육비는 자녀의 성장·물가 상승·부모 소득 변동에 따라 증액·감액 청구가 가능합니다. 가사소송법 제40조·민법 제837조에 따라 사정 변경이 입증되면 가정법원이 양육비를 변경할 수 있어요. 양육비 산정기준표(서울가정법원)와 부모 소득·자녀 연령·교육비를 종합 평가하며, 합의 양육비도 변경 청구 대상입니다.</p>',
    sections: [
      {
        title: '양육비 변경 사유 — 5가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">사정 변경이 입증되면 양육비 증액·감액 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>자녀 성장·교육비 증가</strong> — 초등 → 중등 → 고등 → 대학 진학으로 교육비 증가. 학원·과외·교재비.</li>\n<li><strong>자녀 질병·장애 발생</strong> — 의료비·재활비·특수교육비 증가.</li>\n<li><strong>부모 소득 변동</strong> — 비양육친 소득 증가 → 증액. 비양육친 실직·소득 감소 → 감액. 양육친 소득 감소 → 증액.</li>\n<li><strong>물가·생활비 상승</strong> — 양육비 산정기준표 개정 시 자동 반영 안 됨. 청구로 변경.</li>\n<li><strong>양육친 변경 또는 양육 환경 변화</strong> — 양육친 변경·재혼·양육 분담 변동.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가사소송법 제40조에 따라 양육비 변경 청구는 시한 없음(자녀 미성년·성년 진학 시까지). 합의 양육비도 변경 청구 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양육비 변경 5단계',
        content:
          '<p><strong style="color:#1e3a5f">사정 변경 입증·청구·심리·결정·집행 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정 변경 입증 자료 수집 (1~2개월)</strong> — 자녀 진학·교육비 영수증·의료비·물가 상승 + 부모 소득 변동 자료(원천징수영수증·세무 신고).</li>\n<li><strong>2단계 — 가정법원 양육비 변경 심판 청구</strong> — 관할 가정법원에 양육비 변경 청구. 청구취지에 변경 양육비 액수·기간 명시.</li>\n<li><strong>3단계 — 양측 소득 사실조회 (2~3개월)</strong> — 가정법원이 양측 직장·세무서·금융기관에 사실조회. 비양육친 소득 은폐 시 재산명시 신청.</li>\n<li><strong>4단계 — 화해권고 또는 본안 결정 (3~6개월)</strong> — 가정법원 화해권고결정에 응하면 빠른 정리. 거부 시 본안 결정.</li>\n<li><strong>5단계 — 변경 양육비 집행 + 미이행 시 양육비이행관리원 신청</strong> — 변경 결정 후 이행 안 되면 양육비이행관리원(1644-6621)에 추심·제재 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">자녀 연령·교육비·부모 소득 변동에 따라 양육비 변경 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 양육비 변경 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">변경 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 가족관계증명서·자녀 출생증명·재학증명</strong> — 양육 관계 입증.</li>\n<li><strong>2. 이혼 판결문·합의서·양육비 결정문</strong> — 기존 양육비 액수·기간.</li>\n<li><strong>3. 자녀 교육비·의료비 영수증</strong> — 학원비·과외비·교재비·진료비·약값 정리(최근 1년).</li>\n<li><strong>4. 양육친 소득 자료</strong> — 원천징수영수증·세무 신고서·통장 거래내역.</li>\n<li><strong>5. 비양육친 소득 추정 자료</strong> — 직장·사업·부동산 등 알 수 있는 정보. 정확한 소득은 사실조회로 확보.</li>\n<li><strong>6. 양육비 산정기준표</strong> — 서울가정법원 양육비 산정기준표(scourt.go.kr 검색)와 비교.</li>\n<li><strong>7. 양육 환경 자료</strong> — 자녀 거주·학교·생활비 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비 산정기준표는 부모 합산 소득과 자녀 연령에 따른 표준액을 정리한 자료. 표준액 대비 현재 양육비가 현저히 낮으면 증액 청구 인용 가능성 높음.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 양육비 변경에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"합의로 정한 양육비는 못 바꾼다"는 오해</strong> — 합의 양육비도 사정 변경이면 변경 청구 가능. 가사소송법 제40조 적용.</li>\n<li><strong>비양육친 소득 은폐</strong> — 자영업·프리랜서 소득 누락. 사실조회·재산명시로 강제 확보.</li>\n<li><strong>"양육친 소득이 늘었으니 감액"</strong> — 양육친 소득 증가가 양육비 감액 사유 되지만 자녀 교육비·생활비 증가가 더 크면 증액 인정 가능.</li>\n<li><strong>변경 결정 후 미이행</strong> — 변경 결정 후에도 비양육친이 미이행하면 양육비이행관리원에 즉시 신청. 감치명령·이행명령 등 제재 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 가정법원 민원실 / 사선 변호사 조력은 소득 사실조회·산정 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 협의이혼 후 과거 양육비 청구 시한과 신뢰관계',
        summary:
          '대법원 2023스637 사건(대법원, 2024.10.08 선고)에서 법원은 협의이혼 후 재산분할 청구를 하지 않은 상대방에 대해 청구인이 협의이혼 시부터 약 16년이 지난 후 사건본인들에 대한 과거 양육비 등을 청구한 사안에서, 양육비 청구의 시한·신뢰관계·과거 양육비의 산정 기준에 대한 판단 기준을 정리했습니다. 양육비 변경·과거 양육비 청구는 사정 변경·시한·신뢰관계의 종합 평가가 필요하다는 시사점이 있습니다.',
        takeaway: '양육비 변경은 사정 변경의 입증 강도와 청구 시기·신뢰관계가 핵심 변수이므로, 변경 사유 발생 시점·자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '양육비 증액은 얼마나 자주 청구할 수 있나요?',
        answer:
          '<strong>사정 변경이 있을 때마다 청구 가능합니다.</strong> 통상 3~5년 간격으로 자녀 성장·교육비 증가에 따라 청구. 진학 시점이 자연스러운 청구 사유.',
      },
      {
        question: '비양육친 실직 시 감액 청구가 인정되나요?',
        answer:
          '<strong>일시 실직은 인정 어렵고 장기 실직·소득 감소면 감액 가능합니다.</strong> 다만 자녀 양육 우선 원칙이 강해 완전 면제는 거의 인정 안 됨. 일부 감액 또는 분할납.',
      },
      {
        question: '재혼 후 새 자녀가 생기면 양육비 감액 가능한가요?',
        answer:
          '<strong>새 부양 자녀 출생도 사정 변경 사유로 인정될 수 있습니다.</strong> 다만 기존 자녀 양육비 우선 원칙. 부모 소득과 부양 자녀 수 종합 평가.',
      },
      {
        question: '변경 결정 후 비양육친이 안 주면요?',
        answer:
          '<strong>양육비이행관리원(1644-6621)에 추심·제재 신청 가능합니다.</strong> 압류·감치명령·운전면허 정지·출국금지 등 단계별 제재. 양육비 직접지급명령도 활용.',
      },
      {
        question: '이혼·양육비 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 양육비이행관리원(1644-6621)·한국가정법률상담소(1644-7077)·여성긴급전화(1366)도 양육비 상담 운영.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 증액 청구 절차', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '양육비 무자력 집행 트랙', href: '/guide/divorce/divorce-child-support-no-asset-enforcement' },
      { label: '양육비 집행 종합 가이드', href: '/guide/divorce/divorce-child-support-enforcement-guide' },
      { label: '과거 양육비 소급 청구', href: '/guide/divorce/divorce-past-child-support-claim-years-later' },
      { label: '면접교섭 거부 대응', href: '/guide/divorce/divorce-visitation-denied-response' },
    ],
  },
];
