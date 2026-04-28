import { SpokePage } from '../spoke-pages';

// batch49 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 5인 미만 사업장에서 해고된 근로자가 부당해고 구제신청이 막혀 있더라도 해고예고수당·모성보호·차별구제·민사손배 4가지 우회 경로로 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 권고사직 강요로 사직서를 제출한 근로자가 강박·기망 정황과 비진의 의사표시 5가지 핵심 증거로 사직서 무효 + 실질 해고로 전환할 수 있도록 돕는 페이지다.
// 3. 이 페이지는 정년 임박한 시점에 해고된 근로자가 잔여 정년 기간 임금손해 + 부당해고 구제 두 트랙으로 동시에 청구하는 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 노동위 구제신청 3개월 기한을 놓친 근로자가 해고무효확인 민사소송과 임금청구로 전환해 다툴 가능성을 점검하도록 돕는 페이지다.
// 5. 이 페이지는 시용기간 중 본채용을 거부당한 근로자가 본채용 기대권 인정 5가지 요건으로 시용 종료=정당해고가 아님을 다투도록 돕는 페이지다.

export const spokesBatch49Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-under-five-employees-relief-paths ───
  {
    domain: 'dismissal',
    slug: 'dismissal-under-five-employees-relief-paths',
    keyword: '5인 미만 사업장 부당해고 우회',
    questionKeyword: '5인 미만 사업장에서 해고됐어요. 노동위 구제신청도 안 된다는데 다툴 길이 있나요?',
    ctaKeyword: '5인 미만 해고 대응 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 사업장 해고 다투는 4가지 우회 경로 | 로앤가이드',
      description:
        '5인 미만 사업장은 부당해고 구제신청이 제외되지만 해고예고수당·모성보호·차별구제·민사 4가지 트랙으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"직원이 4명인 작은 회사에서 일하다 갑자기 해고됐어요. 노무사 상담을 받아보니 5인 미만이라 노동위 구제신청이 안 된다고 합니다." 근로기준법 제11조는 5인 이상 사업장에만 정당한 이유 요건(제23조)을 전면 적용하므로 5인 미만에서는 노동위 부당해고 구제신청이 막혀 있는 것이 맞습니다. 그러나 해고예고수당(제26조)·모성보호 차별구제·인권위 차별진정·민사 손해배상 등 4가지 우회 경로는 그대로 살아 있어 사안에 따라 검토해볼 수 있습니다. 해고예고수당 시효는 3년, 인권위 진정은 1년 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '5인 미만이라도 다툴 수 있는 4가지 우회 경로',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제11조 제2항·시행령 제7조에 따르면 5인 미만 사업장에도 일부 조항이 적용되며, 노동위 구제신청 외에도 다른 트랙이 살아 있습니다.</strong></p>\n<ul>\n<li><strong>① 해고예고수당 청구</strong> — 근로기준법 제26조는 5인 미만 사업장에도 적용. 30일 전 예고 없이 해고 시 30일분 통상임금을 청구할 수 있습니다 (시효 3년).</li>\n<li><strong>② 모성보호 차별구제</strong> — 남녀고용평등법은 사업장 규모와 무관하게 적용. 임신·출산·육아휴직 사유 해고는 별도 다툴 수 있습니다.</li>\n<li><strong>③ 국가인권위 차별진정</strong> — 성별·연령·장애·고용형태 등 차별 정황이 있으면 차별행위일로부터 1년 이내 진정 가능합니다.</li>\n<li><strong>④ 민사 해고무효확인 + 손해배상</strong> — 정당한 이유 요건은 적용 안 되나, 민법 제103조(반사회질서)·제104조(불공정 법률행위) 위반 시 무효 다툼 + 정신적 손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해고 사유가 임신·출산·노조활동·차별 정황과 연결되면 4개 트랙 중 2~3개가 동시에 작동할 수 있어 검토 가치가 큽니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 4트랙 동시 검토 5단계',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부·인권위·법원 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상시 근로자 수 확인</strong> (즉시) — 고용보험 가입자 명부, 4대보험 가입자 명단, 사내 직원 인사명부로 정확한 인원 파악 (5인 경계 다툼 가능성).</li>\n<li><strong>2단계 — 해고예고수당 청구</strong> (해고일로부터 3년 시효) — 고용노동부 진정 또는 민사 소송으로 30일분 통상임금 청구.</li>\n<li><strong>3단계 — 차별 정황 정리</strong> (즉시) — 임신·출산·연령·성별·장애 사유 해고면 인권위 진정 + 고용노동부 진정 병행.</li>\n<li><strong>4단계 — 인권위 차별진정 접수</strong> (차별행위일 1년 이내) — 5인 미만이라도 차별 사안은 권고·시정 가능.</li>\n<li><strong>5단계 — 민사 해고무효확인 소송</strong> (3년 시효) — 사직 강요·반사회질서 정황이면 별도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">5인 미만 사업장 해고 사안에서 어떤 우회 경로가 본인 사정에 맞는지 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">우회 경로별로 필요한 서류가 다르므로 아래 항목을 모두 확보해두는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·해고일 입증</strong> — 통보 일자가 명확해야 30일 예고 위반 산정 가능.</li>\n<li><strong>근로계약서·취업규칙</strong> — 임금·통상임금 산정의 기초 자료.</li>\n<li><strong>급여명세서 (최근 3개월)</strong> — 통상임금 30일분 계산용.</li>\n<li><strong>4대보험 가입자 명부</strong> — 회사 전체 상시 근로자 수 확인 (5인 경계 다툼 핵심).</li>\n<li><strong>차별 정황 자료</strong> — 임신·출산·고령·장애 등 사유별 자료, 다른 직원 처우 비교 정보.</li>\n<li><strong>대화 녹음·문자·이메일</strong> — 해고 통보 과정의 강박·기망 정황.</li>\n<li><strong>의료기록 (해당 시)</strong> — 임신·출산·산재 등 모성보호·차별 입증 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 참여한 통화 녹음은 합법이며 해고예고수당 청구·인권위 진정·민사소송 모두에서 증거로 채택됩니다.</blockquote>',
      },
      {
        title: '회사가 "5인 미만이라 모든 게 안 된다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">회사 측 주장이 모두 맞는 것은 아니며 5인 미만에도 적용되는 조항이 다수 있습니다.</strong></p>\n<ul>\n<li><strong>5인 경계 다툼 가능성</strong> — 친족·임원·일용직 포함 산정 방법에 따라 5인 이상으로 평가될 여지가 있습니다. 사회보험 가입자 명부 + 상시성 기준으로 재산정 검토.</li>\n<li><strong>해고예고수당은 5인 미만도 적용</strong> — 근로기준법 제26조는 사업장 규모와 무관하게 적용되어 30일분 통상임금을 청구할 수 있습니다.</li>\n<li><strong>임금체불도 별개</strong> — 5인 미만이어도 미지급 임금·퇴직금은 정상 청구 대상.</li>\n<li><strong>차별 사유 해고는 인권위 트랙</strong> — 임신·출산·연령·장애·고용형태 차별이 결합되면 노동위 트랙이 막혀도 인권위·민사로 다툴 수 있는 사례가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 인권위 권고는 강제력이 약하지만 후속 민사소송에서 유력한 참고자료가 되어 손해배상 인정에 영향을 줍니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상시 5명 이상 사업장 판단 기준',
        summary:
          '대법원 2023두37391 사건(대법원, 2024.10.25 선고)에서 법원은 근로기준법 제11조의 ‘상시 5명 이상의 근로자를 사용하는 사업 또는 사업장’ 해당 여부는 근로조건 규율과 해고 정당성 판단 등이 통일적으로 적용될 수 있는 실질적·동일한 경제적·사회적 활동단위인지를 기준으로 판단해야 한다고 판시했습니다. 외국기업이 국내에 법인·영업소를 설립한 경우 ‘국내에서 사용하는 근로자 수’를 기준으로 봐야 한다는 법리가 함께 제시됐습니다.',
        takeaway: '회사가 표면상 5인 미만이라 주장해도 실질 사업단위·상시성 기준으로 5인 이상 평가될 여지가 있어 점검할 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '4인 사업장이라는데 친족·일용직 포함하면 5인 넘어요. 인정되나요?',
        answer:
          '<strong>실질 근로 형태에 따라 5인 이상으로 인정될 여지가 있습니다.</strong> 친족도 사용종속관계가 인정되면 근로자에 포함되며, 일용직도 상시성이 있으면 산입 대상입니다.',
      },
      {
        question: '해고예고수당 30일분이 정확히 얼마인가요?',
        answer:
          '<strong>1일 통상임금 × 30일로 산정합니다.</strong> 통상임금은 기본급·정기상여금·식대·교통비 등 정기적·일률적·고정적으로 지급되는 임금 합산액 기준입니다.',
      },
      {
        question: '5인 미만이라도 임신했는데 해고됐어요. 어떻게 다투나요?',
        answer:
          '<strong>남녀고용평등법은 사업장 규모와 무관하게 적용되니 고용노동부 진정 + 인권위 차별진정으로 다툴 수 있습니다.</strong> 모성보호 위반은 별도 손해배상 청구도 검토 가능합니다.',
      },
      {
        question: '회사가 폐업했다고 하면 모든 청구가 막히나요?',
        answer:
          '<strong>막히지 않습니다.</strong> 폐업해도 사용자 개인에게 미지급 임금·해고예고수당·체당금 청구가 가능하며, 도산대지급금 제도로 일부 보전받는 방법도 있습니다.',
      },
      {
        question: '민사소송으로 부당해고를 다투면 결과가 어떻게 되나요?',
        answer:
          '<strong>해고무효확인 + 임금청구가 일반적입니다.</strong> 5인 미만은 정당한 이유 요건은 적용 안 되지만 사직 강요·반사회질서 정황이면 무효 + 손해배상이 인정될 여지가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '권고사직 강요 사직서 무효', href: '/guide/dismissal/dismissal-forced-resignation-letter-invalidation' },
      { label: '정년 임박 해고 잔여임금 청구', href: '/guide/dismissal/dismissal-near-retirement-age-fired-claim' },
      { label: '구제신청 3개월 도과 민사 전환', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
      { label: '출산휴가 후 복직 거부 다툼', href: '/guide/dismissal/dismissal-pregnancy-rehire-rejected-relief' },
      { label: '구두 해고 서면 미통지 무효', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
    ],
  },

  // ─── 2. dismissal / dismissal-forced-resignation-letter-invalidation ───
  {
    domain: 'dismissal',
    slug: 'dismissal-forced-resignation-letter-invalidation',
    keyword: '권고사직 강요 사직서 무효',
    questionKeyword: '회사가 권고사직을 강요해서 사직서를 썼는데 무효로 다툴 수 있나요?',
    ctaKeyword: '사직서 무효 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '권고사직 강요 사직서 무효 5가지 핵심 증거 | 로앤가이드',
      description:
        '권고사직 압박으로 사직서를 제출했더라도 강박·기망 정황과 비진의 의사표시 5가지 증거로 무효를 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인사팀이 한 시간 가까이 면담실에서 사직서 작성을 압박했어요. 거부하면 징계해고로 들어간다고 해서 결국 서명했는데 후회됩니다." 사직서를 직접 작성·제출했더라도 강박·기망에 의한 의사표시거나 비진의 의사표시(민법 제107조·제110조)이고 회사가 그 사정을 알았거나 알 수 있었다면 사직 의사표시는 무효이며, 회사의 면직 처리는 실질적으로 해고로 평가될 수 있습니다. 사직서 회수·노동위 구제신청은 해고일(사직 처리일)로부터 3개월이 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 사직서를 무효로 다툴 수 있는 5가지 핵심 증거',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2~3개가 결합되면 비진의 의사표시 또는 강박에 의한 의사표시로 사직서를 무효로 다툴 소지가 큽니다.</strong></p>\n<ul>\n<li><strong>① 면담 녹음·문자</strong> — "사직서 안 쓰면 징계해고", "퇴직금 못 받게 한다" 류의 협박성 발언이 담긴 녹음·문자.</li>\n<li><strong>② 작성 정황의 부자연성</strong> — 짧은 시간 내 작성, 회사 양식 강제, 사유 빈칸·불기재 등 본인 의사 형성이 어려웠던 정황.</li>\n<li><strong>③ 사직 의사 부재 증거</strong> — 사직 직전까지 정상 근무·승진 면담·자격증 취득·이직 의사 없음 등 사직 의사가 없던 객관 정황.</li>\n<li><strong>④ 회수 시도 기록</strong> — 사직서 제출 직후 카카오톡·이메일·내용증명으로 즉시 회수 의사 표시한 기록.</li>\n<li><strong>⑤ 동료 진술서</strong> — 같은 시기 다른 직원도 동일 압박을 받았다는 진술 (집단 권고사직 정황 입증).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ①번 녹음과 ④번 회수 시도가 가장 강력한 증거이며, 두 가지가 모두 있으면 무효 인정 사례가 늘어납니다.</blockquote>',
      },
      {
        title: 'Q. 사직서 무효 다툼은 어떤 절차로 진행되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위·법원 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사직서 회수 통보</strong> (즉시) — 내용증명·이메일·카카오톡으로 사직 의사 철회 + 사직서 무효 주장 명시.</li>\n<li><strong>2단계 — 증거 확보</strong> (즉시) — 면담 녹음 백업, 문자·이메일 캡처, 동료 진술서 확보.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (사직 처리일 3개월 이내) — 사직서 무효 + 실질 해고 + 부당해고 구제신청.</li>\n<li><strong>4단계 — 노동위 심문</strong> (60일 이내) — 비진의 의사표시·강박 정황 입증, 회사 측의 사직 의사 파악 가능성 다툼.</li>\n<li><strong>5단계 — 인용 시 결과</strong> — 원직복직 + 임금상당액, 또는 금전보상명령(6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사직서 무효를 다투기 위한 증거 정리와 회수 절차를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "본인이 자발적으로 썼다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 사직서 외관만으로는 자발성이 인정되지 않으며 회사의 사직 의사 인식 여부가 핵심 쟁점이 됩니다.</strong></p>\n<ul>\n<li><strong>회사의 인식 가능성 입증</strong> — 인사팀이 사직 압박을 가했다면 본인의 사직 의사가 진의 아님을 알았거나 알 수 있었다고 평가됩니다.</li>\n<li><strong>퇴직금·실업급여 수령 = 묵시적 추인 아님</strong> — 회수·이의 제기 후 퇴직금을 받았다면 묵시적 추인으로 보기 어렵습니다.</li>\n<li><strong>위로금 액수 비교</strong> — 통상 퇴직위로금보다 적은 금액을 제시받았다면 강요 정황의 보조 증거가 됩니다.</li>\n<li><strong>사직 후 동일 자리 채용 정황</strong> — 사직 직후 같은 자리에 다른 직원이 채용됐다면 사직이 진의가 아닌 사실상 해고로 평가될 여지가 큽니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직서를 제출한 직후 24시간 안에 내용증명·이메일로 회수 의사를 명시하면 무효 입증 가능성이 크게 올라갑니다.</blockquote>',
      },
      {
        title: 'Q. 인용되면 어떤 결과를 얻을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사직서가 무효로 인정되면 사직일부터 복직일까지 못 받은 임금 전액과 원직복직이 명령됩니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 사직 전 동일 직무·동일 처우로 복귀.</li>\n<li><strong>임금상당액 지급</strong> — 사직일~복직일 사이 못 받은 임금 전액 (중간 다른 직장 수입은 일부 공제).</li>\n<li><strong>금전보상명령 대안</strong> — 신뢰관계 파탄으로 복직이 어려우면 6~12개월치 보상금 신청 검토.</li>\n<li><strong>실업급여 반환</strong> — 인용 후 임금상당액을 받게 되면 이미 받은 실업급여는 반환할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 노동위 재심·행정소송 단계에서 추가 다툼이 진행될 수 있으니 1심 인용으로 끝나지 않을 가능성도 염두에 두는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 비진의 의사표시 무효와 실질 해고',
        summary:
          '대구고법 2013나6064 사건(대구고법, 2015.01.21 선고)에서 법원은 회생절차 진행 중인 회사가 인력 구조조정 방안으로 근로자에게서 사직서를 제출받아 의원면직 형식을 취한 사안에서, 근로자의 사직서 작성·제출은 비진의 의사표시에 해당하고 회사도 이를 알거나 알 수 있었으므로 퇴직 의사표시는 무효이며, 회사의 면직은 실질적으로 해고에 해당한다고 판시했습니다. 이어 정리해고 4요건 중 합리적 선정 기준 부재로 무효라고 본 사례입니다.',
        takeaway: '강요된 사직서는 비진의 의사표시로 무효 다툴 수 있고, 무효가 인정되면 회사의 면직은 실질 해고로 전환되어 부당해고 다툼이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '사직서 사유에 "개인사정"이라고 적었는데 무효 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 사유 기재 내용보다 작성 경위가 더 중요하며, 강압 정황이 인정되면 사유와 무관하게 비진의 의사표시로 무효 평가될 여지가 있습니다.',
      },
      {
        question: '사직서 회수 후에도 회사가 출근을 막으면 어떻게 되나요?',
        answer:
          '<strong>출근 거부 자체가 사실상 해고 정황입니다.</strong> 사직서 회수 의사 표시 + 출근 거부 시점부터 부당해고 구제신청 3개월 기한이 시작된다고 보는 것이 일반적입니다.',
      },
      {
        question: '퇴직금과 위로금을 이미 받았는데 무효 주장이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 묵시적 이의유보 없이 받았더라도 회수 의사를 명시했다면 묵시적 추인이 아니며, 인용 시 받은 위로금은 임금상당액에서 일부 공제 처리됩니다.',
      },
      {
        question: '명예퇴직 신청서도 사직서와 같은 다툼이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 명예퇴직도 신청 의사가 진의가 아니거나 강요·기망이 결합됐다면 비진의 의사표시 무효 법리로 다툴 수 있는 여지가 있습니다.',
      },
      {
        question: '강요 녹음이 없으면 다투기 어렵나요?',
        answer:
          '<strong>녹음이 결정적이지만 없어도 동료 진술서·집단 권고사직 정황·사직 직후 후임 채용 자료로 강요 정황을 보강할 수 있는 사례가 있습니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '5인 미만 부당해고 우회 경로', href: '/guide/dismissal/dismissal-under-five-employees-relief-paths' },
      { label: '권고사직 함정 회피 가이드', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '정년 임박 해고 잔여임금 청구', href: '/guide/dismissal/dismissal-near-retirement-age-fired-claim' },
      { label: '구두 해고 서면 미통지 무효', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 3. dismissal / dismissal-near-retirement-age-fired-claim ───
  {
    domain: 'dismissal',
    slug: 'dismissal-near-retirement-age-fired-claim',
    keyword: '정년 임박 해고 잔여임금',
    questionKeyword: '정년 1년 남았는데 해고됐어요. 잔여 정년까지 임금손해도 청구할 수 있나요?',
    ctaKeyword: '정년 임박 해고 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정년 임박 해고 잔여임금·부당해고 동시 청구 절차 | 로앤가이드',
      description:
        '정년 도달 직전 해고됐다면 부당해고 구제와 잔여 정년 기간 임금손해 두 트랙으로 동시에 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"정년이 1년 남은 시점에 갑자기 인사팀이 해고 통보를 했어요. 정년까지 다닐 수 있다고 믿고 노후 자금 계획도 세웠는데 어떻게 해야 할지 막막합니다." 정년 임박 해고는 이미 실질적으로 정년까지의 근로계약이 형성된 것으로 평가될 여지가 있어, 부당해고 구제(노동위)와 잔여 정년 기간 임금손해 청구(민사) 두 트랙을 병행해 다투는 사례가 있습니다. 노동위 구제신청은 해고일 3개월, 임금손해 민사 청구는 3년 시효가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '정년 임박 해고에서 함께 다툴 수 있는 4가지 청구',
        content:
          '<p><strong style="color:#1e3a5f">정년 임박 시점의 해고는 통상 해고보다 손해가 더 명확하게 산정되므로 아래 4가지를 동시에 검토하는 것이 일반적입니다.</strong></p>\n<ul>\n<li><strong>① 부당해고 구제신청</strong> — 노동위에 해고일 3개월 이내 신청. 인용 시 원직복직 + 정년까지 잔여 임금 보장.</li>\n<li><strong>② 잔여 정년 기간 임금손해 배상</strong> — 민사 손해배상으로 해고일~정년 사이 임금 + 퇴직금 차액 청구.</li>\n<li><strong>③ 위자료 청구</strong> — 정년 직전 해고는 통상 해고보다 정신적 손해가 크다고 평가되어 위자료가 별도로 인정될 여지가 있습니다.</li>\n<li><strong>④ 연령차별 진정 (연령 사유 결합 시)</strong> — 인권위 진정 + 고용상연령차별금지법 위반 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노동위 인용으로 복직되면 정년까지 임금이 보장되므로 가장 큰 회복 효과가 있고, 인용이 어려워도 민사 임금손해 청구로 회복 폭을 좁힐 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 + 민사 5단계 동시 진행',
        content:
          '<p><strong style="color:#1e3a5f">노동위·민사 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정년 규정 확인</strong> (즉시) — 취업규칙·단체협약·근로계약서의 정년 조항 사본 확보, 개정 이력 점검.</li>\n<li><strong>2단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 부당해고 + 차별 사유 결합 시 동시 주장.</li>\n<li><strong>3단계 — 손해 산정 자료 수집</strong> — 최근 1년 급여명세서, 정년까지 잔여 기간, 퇴직금 추정액, 4대보험 자료.</li>\n<li><strong>4단계 — 민사 손해배상 소송</strong> (3년 시효) — 해고일~정년 사이 임금 + 퇴직금 차액 + 위자료 청구.</li>\n<li><strong>5단계 — 인용·합의 검토</strong> — 노동위 인용 시 복직 또는 금전보상, 민사 인용 시 임금손해 + 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정년 임박 해고에서 노동위·민사 두 트랙을 어떻게 병행할지 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">노동위·민사 두 절차에 공통으로 활용되므로 사본을 충분히 준비해두는 것이 좋습니다.</strong></p>\n<ul>\n<li><strong>해고통보서·인사위원회 의결서</strong> — 해고 사유와 시기 명시.</li>\n<li><strong>근로계약서·취업규칙·단체협약</strong> — 정년 규정과 개정 이력.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 잔여 정년 임금 산정 기준액.</li>\n<li><strong>퇴직금 누적액 자료</strong> — 정년 도달 시 받을 퇴직금 추정.</li>\n<li><strong>4대보험 가입 이력서</strong> — 근속기간 입증.</li>\n<li><strong>인사평가·근태기록</strong> — 정년 직전까지 정상 근무 정황.</li>\n<li><strong>차별 정황 자료 (해당 시)</strong> — 같은 시기 다른 고령자만 해고된 사실, 연령 발언 녹음.</li>\n<li><strong>주민등록등본</strong> — 정년 도달일 정확 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잔여 정년이 길수록 손해 산정액이 커지므로 정년까지 남은 개월수와 월 평균 임금 + 퇴직금 차액을 먼저 정리해두면 청구 전략이 명확해집니다.</blockquote>',
      },
      {
        title: '회사가 "정년 가까워서 사실상 차이 없다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">정년 임박이 오히려 손해 산정의 명확성을 더해주는 측면이 있어 회사 주장을 그대로 수용할 필요가 없습니다.</strong></p>\n<ul>\n<li><strong>잔여 임금이 명확</strong> — 통상 해고는 향후 근로기간이 불명확하지만, 정년이 정해져 있으면 잔여 임금 산정이 더 정확합니다.</li>\n<li><strong>퇴직금 차액 발생</strong> — 정년 직전 해고로 근속 연수가 끊기면 퇴직금 산정에서도 손해가 발생합니다.</li>\n<li><strong>국민연금 수급 영향</strong> — 정년 직전 해고로 임금 단절 시 국민연금 수급액에도 간접 영향이 있어 위자료 산정 사정으로 활용될 수 있습니다.</li>\n<li><strong>재취업 어려움 가중</strong> — 60대 전후 재취업이 사실상 어려운 점은 정신적 손해 위자료 산정에서 가산 사유가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 정년 도달일이 노동위 절차 진행 중에 도래하면 노동위 구제이익이 소멸하는 사례가 있어 민사 트랙 보강 준비가 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 도달 판단 기준이 되는 정년의 효력',
        summary:
          '대법원 2024두41038 사건(대법원, 2024.11.20 선고)에서 법원은 정년 도달에 따라 근로관계가 당연종료되었는지는 당연종료 여부가 다투어지는 시점에 유효한 정년을 기준으로 판단해야 하고 소급하여 적용되는 정년을 기준으로 판단할 수 없다고 판시했습니다. 사회복지법인이 60세 정년에서 64세로 개정한 취업규칙을 사후 추인으로 소급 시행시키려 한 사안에서, 처분 시점에 유효한 정년이 아니었던 64세를 근거로 한 정년퇴직 처리는 해고로 평가될 여지가 있다고 본 사례입니다.',
        takeaway: '회사가 정년 규정을 사후 변경·추인해 정년퇴직으로 처리한 경우, 처분 시점의 유효한 정년 기준으로 다시 따져봐 해고 다툼 여지가 있는지 확인할 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '정년이 60세인데 65세까지 일할 줄 알고 있었어요. 다툴 수 있나요?',
        answer:
          '<strong>회사가 65세까지 근무 가능하다고 안내했거나 관행이 있었다면 신뢰보호 차원에서 다툴 여지가 있습니다.</strong> 다만 취업규칙상 정년이 60세라면 기본 기준은 60세입니다.',
      },
      {
        question: '정년이 1년 남았는데 노동위가 정년 전에 안 끝나면 어떻게 되나요?',
        answer:
          '<strong>정년 도달 시 노동위 구제이익이 소멸하는 사례가 있어 동시에 민사 임금손해 소송을 병행하는 것이 일반적입니다.</strong> 민사는 정년 후에도 진행 가능합니다.',
      },
      {
        question: '재취업하면 손해배상 청구액이 줄어드나요?',
        answer:
          '<strong>재취업 수입은 일실이익 산정 시 일부 공제 대상이 됩니다.</strong> 다만 위자료 부분은 별도로 평가되어 재취업 여부와 무관하게 인정될 여지가 있습니다.',
      },
      {
        question: '연령을 이유로 한 해고는 자동 무효인가요?',
        answer:
          '<strong>고용상연령차별금지법 위반은 진정·신고 대상이지만 자동 무효는 아닙니다.</strong> 정당한 이유 요건과 결합해 함께 다투면 무효 인정 가능성이 높아집니다.',
      },
      {
        question: '퇴직금은 받았는데 부당해고 다투면 반환해야 하나요?',
        answer:
          '<strong>인용 후 복직 시 퇴직금은 정산되지만 즉시 반환 의무는 없습니다.</strong> 일반적으로 임금상당액에서 정산되거나 합의 단계에서 조정됩니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '권고사직 강요 사직서 무효', href: '/guide/dismissal/dismissal-forced-resignation-letter-invalidation' },
      { label: '구제신청 3개월 도과 민사 전환', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
      { label: '5인 미만 부당해고 우회 경로', href: '/guide/dismissal/dismissal-under-five-employees-relief-paths' },
      { label: '경영상 정리해고 기준 다툼', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 4. dismissal / dismissal-relief-period-expired-civil-route ───
  {
    domain: 'dismissal',
    slug: 'dismissal-relief-period-expired-civil-route',
    keyword: '구제신청 3개월 도과 민사',
    questionKeyword: '해고된 지 4개월이 지났어요. 노동위 구제신청 기한을 놓쳤는데 다른 방법이 있나요?',
    ctaKeyword: '도과 후 민사 전환 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '부당해고 구제신청 3개월 도과 시 민사 전환 가능성 | 로앤가이드',
      description:
        '노동위 부당해고 구제신청 3개월 기한을 놓쳤더라도 해고무효확인 민사소송과 임금청구로 다툴 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>"해고된 지 넉 달이 지나서야 부당해고를 알게 됐어요. 노동위 신청은 3개월이 지나서 못 한다고 들었는데 끝난 건가요?" 근로기준법 제28조 제2항은 노동위 부당해고 구제신청을 부당해고가 있은 날로부터 3개월 이내로 한정합니다. 그러나 민사 해고무효확인 소송은 별도 트랙으로 임금채권 시효 3년·해고무효확인 자체는 제소기간 제한 없이 가능하며, 임금상당액·위자료를 함께 청구하는 사례가 있습니다. 노동위 트랙이 막혀도 민사 트랙은 살아있어 검토 가치가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노동위 3개월 도과 후 살아있는 트랙은 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 트랙이 막혀도 아래 3가지 민사 트랙은 별도로 진행 가능합니다.</strong></p>\n<ul>\n<li><strong>① 해고무효확인 민사소송</strong> — 제소기간 제한 없이 청구 가능. 인용 시 근로자 지위 확인 + 임금상당액 청구 가능.</li>\n<li><strong>② 임금청구 (임금상당액)</strong> — 임금채권 시효 3년. 해고가 무효라면 그 기간 동안의 임금이 발생한다는 법리.</li>\n<li><strong>③ 손해배상·위자료 청구</strong> — 불법행위 시효 3년·10년. 해고가 위법한 정도면 정신적 손해도 별도 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 민사 트랙은 노동위보다 시간·비용 부담이 크지만 임금상당액 + 위자료까지 한꺼번에 다툴 수 있는 장점이 있습니다.</blockquote>',
      },
      {
        title: 'Q. 민사 해고무효확인 소송은 어떻게 진행되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민사소송 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시효 확인</strong> (즉시) — 임금채권 3년·불법행위 3년·10년 시효 확인. 시효 임박이면 우선 청구 접수.</li>\n<li><strong>2단계 — 변호사 상담</strong> — 노동위 트랙과 달리 민사는 변호사 선임이 일반적. 법률구조공단(132)에서 무료 상담을 받아보실 수 있습니다.</li>\n<li><strong>3단계 — 소장 작성·접수</strong> — 청구취지: 해고무효확인 + 임금상당액 + 위자료. 관할은 회사 주소지 또는 근무지 지방법원.</li>\n<li><strong>4단계 — 변론·증거조사</strong> — 노동위 트랙보다 절차가 길지만 증거조사·증인신문 등 더 폭넓은 사실심리 가능.</li>\n<li><strong>5단계 — 판결·항소</strong> — 인용 시 근로자 지위 확인 + 임금상당액 + 위자료. 패소 시 1심 결과 후 항소 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노동위 도과 후 민사 트랙으로 어떻게 전환할지 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 민사 트랙의 장단점은 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위와 비교한 민사 트랙의 장단점을 정리하면 아래와 같습니다.</strong></p>\n<ul>\n<li><strong>장점 ① — 제소기간 제한 없음</strong> — 노동위 3개월 기한과 달리 임금시효 3년·불법행위 시효 내라면 청구 가능.</li>\n<li><strong>장점 ② — 위자료·손해배상 동시 청구</strong> — 노동위는 복직 + 임금만 가능하나 민사는 정신적 손해까지 함께 청구 가능.</li>\n<li><strong>장점 ③ — 더 폭넓은 증거조사</strong> — 증인신문·문서제출명령·감정 등 절차 활용도가 높음.</li>\n<li><strong>단점 ① — 시간·비용 부담</strong> — 1심 6개월~1년+ 소요, 변호사비·인지대 부담.</li>\n<li><strong>단점 ② — 패소 시 회사 측 변호사비 일부 부담</strong> — 소송비용 분담 부담 존재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임금시효 3년이 임박했다면 임금청구 부분만이라도 우선 접수해 시효 중단을 시키고 추후 청구취지 확장을 검토할 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 노동위 도과 사실이 민사에서 불리하게 작용하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 도과 자체는 민사 청구 권리에 영향을 주지 않습니다.</strong></p>\n<ul>\n<li><strong>별개 절차</strong> — 노동위 행정구제와 민사 사법구제는 법적 성격이 달라 별도 진행 가능합니다.</li>\n<li><strong>해고이유서·증거 활용</strong> — 노동위에 제출한 해고이유서·증거자료를 민사에서도 그대로 활용할 수 있어 오히려 도움이 되는 측면이 있습니다.</li>\n<li><strong>중간 수입 공제 동일</strong> — 임금상당액 산정 시 중간 다른 직장 수입은 노동위·민사 모두 공제 대상.</li>\n<li><strong>실업급여 영향</strong> — 인용 후 임금상당액을 받게 되면 이미 받은 실업급여는 반환 가능성이 있어 미리 계산해두는 것이 좋습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임금채권 시효는 매월 임금별로 진행되어 일부 임금은 이미 시효 도과될 수 있으므로 시효 확인 후 신속한 접수가 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 노동위 구제이익과 민사 청구 별개 트랙',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 부당해고 구제신청을 할 당시 이미 정년에 이르거나 근로계약기간 만료, 폐업 등의 사유로 근로계약관계가 종료한 경우, 노동위원회의 구제명령을 받을 이익은 소멸했다고 판시했습니다. 다만 이 법리는 노동위 행정구제 절차에 한정되며, 민사 해고무효확인·임금청구는 별개의 시효·요건으로 진행됩니다.',
        takeaway: '노동위 구제이익이 소멸한 경우라도 민사 임금청구·해고무효확인은 별개 트랙으로 다툴 수 있는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '해고된 지 1년이 지났는데 임금청구만이라도 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 임금채권 시효는 3년이라 1년이 지나도 매월 발생한 임금상당액을 청구할 여지가 있으며, 그 전제로 해고무효 주장도 함께 가능합니다.',
      },
      {
        question: '민사소송 변호사비가 부담스럽습니다. 무료 도움은 있나요?',
        answer:
          '<strong>법률구조공단(132)에서 일정 소득 이하 근로자에게 무료 법률구조를 제공합니다.</strong> 사건 검토 후 소송대리·인지대 면제까지 지원받을 수 있는 사례가 있습니다.',
      },
      {
        question: '회사가 폐업해도 민사소송이 가능한가요?',
        answer:
          '<strong>회사가 청산 중이거나 사용자 개인 책임이 인정되면 가능합니다.</strong> 다만 자력 부족으로 회수가 어려울 수 있어 도산대지급금 등 다른 트랙도 함께 검토해야 합니다.',
      },
      {
        question: '노동위에 신청했다가 취하했는데 그래도 민사가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 노동위 취하·기각 결정은 민사 제소를 막지 않으며, 같은 사안을 민사로 다시 다툴 수 있습니다.',
      },
      {
        question: '민사 인용되면 복직도 명령되나요?',
        answer:
          '<strong>해고무효확인이 인용되면 근로자 지위가 확인되어 사실상 복직 효과가 있습니다.</strong> 다만 강제복직 집행은 별도 절차이며 임금상당액 + 위자료 회수가 더 일반적인 방식입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '5인 미만 부당해고 우회 경로', href: '/guide/dismissal/dismissal-under-five-employees-relief-paths' },
      { label: '권고사직 강요 사직서 무효', href: '/guide/dismissal/dismissal-forced-resignation-letter-invalidation' },
      { label: '정년 임박 해고 잔여임금 청구', href: '/guide/dismissal/dismissal-near-retirement-age-fired-claim' },
      { label: '시용 본채용 거부 기대권', href: '/guide/dismissal/dismissal-trial-period-fired-confirmation-right' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 5. dismissal / dismissal-trial-period-fired-confirmation-right ───
  {
    domain: 'dismissal',
    slug: 'dismissal-trial-period-fired-confirmation-right',
    keyword: '시용기간 본채용 거부',
    questionKeyword: '3개월 시용기간 끝에 본채용을 거부당했어요. 본채용 기대권으로 다툴 수 있나요?',
    ctaKeyword: '시용 본채용 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '시용기간 중 해고 본채용 기대권 5가지 요건 | 로앤가이드',
      description:
        '시용기간 중 해고 또는 본채용 거부됐다면 본채용 기대권 5가지 요건과 객관적·합리적 사유 요건으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 시용 끝나는 날 본채용을 거부한다고 통보받았어요. 평가 점수가 낮다는데 시용도 부당해고로 다툴 수 있는지 알고 싶습니다." 시용 근로자도 근로기준법상 근로자에 해당하므로 제23조 정당한 이유 요건이 적용되며, 본채용 거부 역시 객관적·합리적이고 사회통념상 상당한 사유가 인정될 때만 정당해집니다. 시용기간 중에 형성된 본채용 기대권이 있다면 합리적 이유 입증책임은 사용자에게 있습니다. 본채용 거부 통보일로부터 3개월이 노동위 구제신청 기한입니다.</p>',
    sections: [
      {
        title: '본채용 기대권이 인정되는 5가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 요건 중 다수가 충족되면 시용 본채용 기대권이 형성된 것으로 평가될 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시용 근로계약서 명시</strong> — 시용기간·평가기준·본채용 절차가 계약서에 명확히 기재되어 있다면 기대권 형성 정황이 강합니다.</li>\n<li><strong>② 평가기준의 사전 고지</strong> — 평가표·항목·통과 점수가 시용 시작 시점에 안내됐다면 정당한 평가가 전제된 본채용 기대가 형성됩니다.</li>\n<li><strong>③ 회사의 본채용 안내</strong> — 면접·입사 시 "정상 근무하면 본채용된다" 등 안내를 받은 정황 (이메일·문자·녹음).</li>\n<li><strong>④ 통상 근무 사실</strong> — 시용 기간 동안 큰 결격 사유 없이 정상 근무한 사실.</li>\n<li><strong>⑤ 다른 시용자 본채용 관행</strong> — 같은 시기 시용 동기가 대부분 본채용된 경우 합리적 기대 형성 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5가지 중 ②번 평가기준 사전 고지와 ④번 통상 근무 사실이 기본 골격이 되며, 이 두 가지만 있어도 본채용 거부의 합리적 이유 입증부담은 사용자가 집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본채용 거부 통보 보존</strong> (즉시) — 거부 사유 통보서, 평가표, 평가 면담 녹음·메일.</li>\n<li><strong>2단계 — 평가기준 사전 고지 입증</strong> — 시용 계약서, 사내 안내문, 입사 면접 시 안내 자료, 다른 동기 본채용 사례.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (거부 통보일 3개월 이내) — 부당해고 구제신청서에 본채용 기대권 형성 정황 명시.</li>\n<li><strong>4단계 — 회사 자료 제출 요구</strong> — 평가표 기재 사유, 평가자 평정 일관성, 다른 시용자 처분 비교.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (60일 이내) — 인용 시 본채용된 정규직 지위 + 거부일~판정일 임금상당액.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시용 본채용 거부의 평가기준 다툼과 기대권 입증 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">기대권 형성 입증 + 평가 부당성 입증 두 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>시용 근로계약서</strong> — 시용기간·평가기준·본채용 절차 조항.</li>\n<li><strong>입사 안내문·면접 자료</strong> — 본채용 안내 정황 입증.</li>\n<li><strong>본채용 거부 통보서·평가표</strong> — 거부 사유와 평가 기재 내용 핵심.</li>\n<li><strong>근태기록·업무 결과물</strong> — 통상 근무 사실 입증.</li>\n<li><strong>평가 면담 녹음·메일</strong> — 평가자의 발언, 평가 기준 일관성 점검.</li>\n<li><strong>다른 시용자 처분 비교 자료</strong> — 동기 본채용·거부 비율, 차별 정황.</li>\n<li><strong>사내 게시판·직원 채팅 자료</strong> — 회사의 본채용 관행 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본채용 거부일 직후 회사가 같은 자리에 신규 채용 공고를 냈다면 인력 부족이 거부 사유가 아닌 정황으로 활용 가능합니다.</blockquote>',
      },
      {
        title: '회사가 "근무성적 불량으로 본채용 거부했다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">근무성적 불량 주장은 객관적·구체적 자료로 뒷받침되어야만 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>평가 절차 객관성</strong> — 사전 고지된 기준에 따라 일관되게 평가됐는지, 평가표가 사후 작성됐다면 합리적 이유로 인정받기 어려울 수 있습니다.</li>\n<li><strong>비교 가능한 동료 평가</strong> — 같은 업무를 한 동기들의 평가와 큰 차이가 있다면 차별적 평가 정황입니다.</li>\n<li><strong>개선 기회 부여 여부</strong> — 평가 결과를 중간에 통보하고 개선 기회를 주지 않은 채 곧바로 본채용 거부했다면 비례성 원칙 위반 소지가 있습니다.</li>\n<li><strong>육아·임신·건강 사유 결합</strong> — 자녀 양육·임신·질병이 평가에 영향을 미친 경우 일·가정 양립 배려의무 위반으로도 다툴 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 시용 본채용 거부도 서면 통지 의무(근로기준법 제27조)가 적용되어 구두 통보만 했다면 그 자체로 무효 사유가 될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용 본채용 거부의 합리적 이유 요건',
        summary:
          '서울행법 2018구합50376 사건(서울행법, 2019.03.21 선고)에서 법원은 3개월 수습기간 동안 ‘무단결근·근무지시 위반’을 이유로 한 본채용 거부 통보 사안에서, 거부 사유가 자녀 양육과 충돌되는 상황 때문이었음에도 회사가 일·가정 양립 배려의무를 다하지 않은 채 형식적으로 평가규정을 적용했다는 점에서 본채용 거부통보가 사회통념상 타당하다고 볼 합리적인 이유를 인정할 수 없어 효력이 없다고 판시한 사례입니다.',
        takeaway: '시용 본채용 거부는 객관적 평가 외에도 회사의 배려의무·비례성 원칙까지 종합 검토되므로 거부 사유가 표면적이라면 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '시용 1개월 만에 해고됐는데도 본채용 기대권을 주장할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 시용 중간 해고도 근로기준법 제23조 정당한 이유 요건이 적용되며, 시용 자체가 본채용 전제이므로 합리적 이유 입증책임은 사용자가 집니다.',
      },
      {
        question: '평가표를 받지도 못했는데 어떻게 다투나요?',
        answer:
          '<strong>오히려 유리할 수 있습니다.</strong> 평가기준 사전 고지가 없거나 평가표가 사후 작성됐다면 본채용 거부의 합리적 이유로 인정받기 어려운 정황입니다.',
      },
      {
        question: '시용 인용되면 정규직으로 복직되나요?',
        answer:
          '<strong>예, 본채용된 정규직 지위로 복직됩니다.</strong> 본채용 거부가 무효로 인정되면 시용 종료 시점에 본채용된 것으로 평가되어 정규직 임금·처우가 적용됩니다.',
      },
      {
        question: '시용기간이 6개월인데 너무 길지 않나요?',
        answer:
          '<strong>업무 성질에 따라 합리적 범위 내에서 인정되나, 6개월 이상은 사용자가 합리성을 입증해야 합니다.</strong> 직무 복잡도·평가 필요성에 비추어 과도하면 다툴 여지가 있습니다.',
      },
      {
        question: '시용 중에 회사가 정규직 신규 채용을 하면 어떻게 되나요?',
        answer:
          '<strong>같은 업무에 신규 채용했다면 본채용 거부 사유의 객관성이 약해집니다.</strong> 인력 부족 등 합리적 이유 주장이 무력해지므로 다툼에 유리한 정황입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '구제신청 3개월 도과 민사 전환', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
      { label: '계약직 갱신거부 기대권 다툼', href: '/guide/dismissal/dismissal-contract-renewal-expectation-relief' },
      { label: '구두 해고 서면 미통지 무효', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '출산휴가 후 복직 거부 다툼', href: '/guide/dismissal/dismissal-pregnancy-rehire-rejected-relief' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },
];
