import { SpokePage } from '../spoke-pages';

// batch48 wage+unemp 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 해외출장 후 약속된 출장수당·체재비를 받지 못한 근로자가 미지급 출장수당의 임금성과 청구 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 회사가 식대·교통비 등 복리후생 항목을 일방적으로 중단한 근로자가 임의 변경의 위법 여부와 회복 절차를 점검하도록 돕는 페이지다.
// 3. 이 페이지는 포괄임금 계약으로 직책수당까지 묶여 별도 정산이 안 되는 팀장·관리자 근로자가 직책수당 분리 청구 가능성과 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 자영업·1인 사업자로 등록만 되어 있고 실제 폐업했거나 사업을 영위하지 않은 근로자가 실업급여 수급자격을 점검하고 신청하도록 돕는 페이지다.
// 5. 이 페이지는 임신 중 회사로부터 권고사직·암묵적 퇴사 압박을 받은 근로자가 정당이직 인정 요건과 14일 신청 절차를 정리하도록 돕는 페이지다.

export const spokesBatch48WageUnemp: SpokePage[] = [
  // ─── 1. wage / overseas-business-trip-allowance-recovery ───
  {
    domain: 'wage',
    slug: 'wage-overseas-business-trip-allowance-recovery',
    keyword: '해외출장수당 미지급 청구',
    questionKeyword: '해외출장 다녀왔는데 약속된 출장수당·체재비를 안 줍니다. 청구할 수 있나요?',
    ctaKeyword: '해외출장수당 미지급 청구 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외출장수당 미지급 청구 5단계 절차 | 로앤가이드',
      description:
        '약속된 해외출장수당·체재비를 회사가 지급하지 않으면 임금체불로 청구할 수 있습니다. 임금성 판단부터 노동청 진정까지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3주 해외 출장 다녀와서 출장수당과 체재비를 정산받기로 했는데, 회사가 \'예산이 없다\'며 차일피일 미루고 있어요." 이런 사례가 적지 않습니다. 출장수당이 단순한 실비변상이 아니라 정기적·계속적으로 지급되어 온 항목이라면 임금에 해당해 미지급 시 임금체불로 청구할 수 있습니다. 임금채권 소멸시효 3년이 지나면 청구권이 사라지니, 돌아온 직후부터 자료를 모아두는 것이 좋습니다.</p>',
    sections: [
      {
        title: '해외출장수당 — 임금에 해당하는 4가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">단순 실비변상이 아니라 임금으로 검토되려면 다음 요건을 살펴봐야 합니다.</strong></p>\n<ul>\n<li><strong>지급의무의 근거</strong> — 단체협약·취업규칙·근로계약·관행 등에 출장수당 지급 의무가 명시되어 있어야 합니다(근로기준법 제2조 제1항 제5호 임금 정의).</li>\n<li><strong>실제 사용 여부 무관</strong> — 실비로 사용되는지와 무관하게 출장 자체에 대해 일정 금액이 정기 지급된다면 임금성을 검토할 여지가 있습니다.</li>\n<li><strong>일률성·정기성</strong> — 같은 직급·조건의 근로자에게 동일 기준으로 지급되어 왔다면 임금성 인정 가능성이 높아집니다.</li>\n<li><strong>해외 체재비 별도</strong> — 호텔비·식비·교통비 영수증 정산형 체재비는 실비변상으로 임금이 아닐 수 있으나, 일당제 정액 체재비는 임금에 해당할 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 출장 직전 받은 사내 공문·이메일·메신저에 "일당 X만원 지급" 같은 약속이 명시돼 있다면 결정적 증거가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 해외출장수당 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출장 명령·약정 자료 정리</strong> (즉시) — 출장 명령서, 출장 결재 품의서, 사내 메신저·이메일에서 약속된 출장수당·체재비 금액 확인. 여권 출입국 도장·비행기 티켓·숙소 예약 내역도 함께 보관.</li>\n<li><strong>2단계 — 사내 정산 요청</strong> (귀국 후 30일 내 권장) — 인사팀·재무팀에 정산서 제출. 회사 응답 지연 시 메일·문자로 기록 남기기.</li>\n<li><strong>3단계 — 내용증명 발송 (선택)</strong> — 회사가 응답하지 않으면 미지급 금액과 지급 기한을 명시한 내용증명 발송. 시효 중단 효과 + 협상 압박.</li>\n<li><strong>4단계 — 고용노동부 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 온라인 또는 관할 지방고용노동지청 임금체불 진정 접수. 처리기간 25일(연장 가능).</li>\n<li><strong>5단계 — 시정지시·형사입건</strong> — 체불 확인 시 14일 내 지급 명령. 미이행 시 형사 송치, 3년 이하 징역 또는 3,000만 원 이하 벌금(근로기준법 제109조).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 출장수당 미지급 대응 순서, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">출장 일수와 약속된 수당을 입력하면 청구 가능 금액과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '회사가 "출장수당은 호의로 준 거다"라고 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">관행적·정기적으로 지급된 수당은 호의 지급이 아니라 임금으로 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>관행 인정 요건</strong> — 같은 회사에서 수년간 동일 기준으로 지급된 사실이 있다면 묵시적 임금 약정으로 볼 여지가 있습니다(대법원 판례 취지).</li>\n<li><strong>지급 내역서 확인</strong> — 과거 출장자들의 정산 내역, 사내 위키·공지사항에 명시된 출장수당 표가 있다면 결정적 증거.</li>\n<li><strong>이메일·메신저 약속</strong> — "이번 출장 일당 X만원으로 갑시다" 같은 명시적 의사표시가 캡처됐다면 회사 측 호의 주장이 약해집니다.</li>\n<li><strong>근로자성 입증과 무관</strong> — 출장수당은 근로 제공의 대가로 지급된 임금이므로 정규직·계약직 구분 없이 청구할 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 부서 동료 출장자들도 비슷한 사례라면 집단 진정이 가능합니다. 다수가 함께 진정하면 근로감독관 조사가 빨라집니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>출장 명령서 또는 출장 품의서 (결재 라인 포함)</li>\n<li>출장수당·체재비 약속 이메일·메신저 캡처</li>\n<li>여권 출입국 도장 페이지 사본 또는 출입국 사실증명</li>\n<li>비행기 티켓·숙소 예약 내역</li>\n<li>과거 출장자 정산 내역 (관행 입증용)</li>\n<li>근로계약서 또는 취업규칙 출장 조항 사본</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실비 변상 명목 정액 지급 금품의 임금성',
        summary:
          '대법원 2014다27807 사건(대법원, 2019.04.23 선고)에서 법원은 사용자가 실제로 해당 명목으로 사용되는지를 불문하고 근무일마다 실비 변상 명목으로 일정 금액을 지급한 경우, 이를 단순 실비변상이라는 이유만으로 임금 또는 통상임금에서 제외할 수 없다고 판시했습니다.',
        takeaway:
          '출장 일당이 정기·일률적으로 지급되었다면 실비변상이라는 회사 주장과 무관하게 임금으로 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '출장 명령서가 구두로만 있고 서면이 없어요. 청구 가능한가요?',
        answer:
          '<strong>구두 명령이라도 출장 사실이 입증되면 청구를 검토할 수 있습니다.</strong> 항공권·여권 출입국 도장·숙소 예약 내역으로 출장 사실을 증명하고, 사내 메신저·이메일에서 출장 관련 대화를 보존하세요.',
      },
      {
        question: '체재비 영수증을 분실했는데 청구가 안 되나요?',
        answer:
          '<strong>일당제 정액 체재비라면 영수증 없이도 청구를 검토할 수 있습니다.</strong> 다만 영수증 정산형 실비라면 일부만 인정될 가능성이 있어요. 카드사 거래내역서로 일부 보강 가능합니다.',
      },
      {
        question: '퇴직 후 6개월이 지났는데 청구할 수 있나요?',
        answer:
          '<strong>임금채권 소멸시효는 3년(근로기준법 제49조)입니다.</strong> 퇴직 후 3년 이내라면 진정·민사 청구 모두 가능합니다. 다만 시간이 지날수록 증거 확보가 어려워지니 빠를수록 좋아요.',
      },
      {
        question: '회사가 "출장은 자원해서 간 것이라 수당 의무 없다"고 주장해요',
        answer:
          '<strong>자원 여부와 무관하게 회사 업무를 위해 떠난 출장이라면 임금 청구 대상입니다.</strong> 출장 결재 라인이 있고 회사 비용으로 항공권을 끊었다면 사용자 지시 출장으로 봐야 한다는 주장이 가능합니다.',
      },
      {
        question: '집단으로 미지급된 동료들과 함께 진정해도 되나요?',
        answer:
          '<strong>집단 진정이 가능하며 처리 속도가 빠를 수 있습니다.</strong> 진정서에 피해자 명단·미지급 금액을 첨부하면 근로감독관이 일괄 조사합니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '봉사료·팁 통상임금 포함 기준', href: '/guide/wage/wage-tip-service-charge-base-inclusion' },
      { label: '식대·교통비 임의 중단 대응', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
      { label: '수당 환수 일방 공제 위법', href: '/guide/wage/wage-commission-clawback-illegal' },
    ],
  },

  // ─── 2. wage / meal-transport-suddenly-stopped ───
  {
    domain: 'wage',
    slug: 'wage-meal-transport-suddenly-stopped',
    keyword: '식대·교통비 임의 중단',
    questionKeyword: '회사가 갑자기 식대·교통비를 안 준다고 통보했는데 합법인가요?',
    ctaKeyword: '식대 교통비 임의 중단 위법 여부 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '식대·교통비 임의 중단 위법 4가지 판단 | 로앤가이드',
      description:
        '회사가 식대·교통비 등 복리후생을 일방적으로 중단하면 취업규칙 불이익 변경으로 무효일 수 있습니다. 위법 여부와 회복 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"매달 받던 식대 20만 원, 교통비 15만 원이 다음 달부터 없어진다고 어제 갑자기 통보받았어요. 거부할 수 있나요?" 식대·교통비가 단순 복리후생이 아니라 임금에 해당한다면, 사용자가 일방적으로 중단·삭감할 수 없습니다. 취업규칙 불이익 변경 절차를 거치지 않은 일방 중단은 무효가 될 수 있습니다(근로기준법 제94조). 소멸시효 3년 이내라면 미지급 차액을 청구할 수 있으니 지금 바로 점검하세요.</p>',
    sections: [
      {
        title: 'Q. 식대·교통비가 임금인지 복리후생인지 어떻게 구분하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·일률성·고정성을 갖추면 명칭과 무관하게 임금으로 검토됩니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월 같은 시기에 지급되어 왔다면 정기성 인정. 부정기적·일회성은 복리후생에 가까움.</li>\n<li><strong>일률성</strong> — 같은 직급·근무 형태의 근로자에게 동일 금액·기준으로 지급. 차등 없음이면 일률성 강.</li>\n<li><strong>고정성</strong> — 지급 여부·금액이 사전에 확정되어 있고, 회사 재량이 사실상 없는 상태.</li>\n<li><strong>지급의무 근거</strong> — 단체협약·취업규칙·근로계약에 지급 조항이 있다면 임금성 인정 가능성 높음. 관행상 수년간 정기 지급도 묵시적 임금 약정으로 볼 여지 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 급여명세서에 "식대" "교통비" 항목으로 매월 동일 금액이 찍혀 있다면 임금성이 강하게 추정됩니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 일방적으로 식대·교통비를 끊는 게 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 취업규칙 불이익 변경 절차를 거치지 않은 일방 중단은 무효일 수 있습니다.</strong></p>\n<ul>\n<li><strong>취업규칙 불이익 변경</strong> — 식대·교통비가 취업규칙에 명시돼 있다면 근로자 과반수(또는 노조)의 동의 없이는 삭감·폐지할 수 없습니다(근로기준법 제94조 제1항 단서).</li>\n<li><strong>근로계약 우선 원칙</strong> — 개별 근로계약서에 식대·교통비 지급 조항이 있다면, 취업규칙을 단체적으로 바꿨더라도 개별 근로자의 동의가 없으면 그 사람에게는 종전 근로계약이 우선 적용됩니다(대법원 판례 취지).</li>\n<li><strong>임금 삭감 효과</strong> — 식대·교통비 폐지는 사실상 임금 삭감이므로, 동의 없는 일방 통보는 미지급 임금 청구 대상이 됩니다.</li>\n<li><strong>소멸시효 주의</strong> — 임금채권은 3년(근로기준법 제49조). 중단된 시점부터 매월 시효가 진행되므로 지체 없이 대응해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 식대·교통비 중단 위법 여부, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">중단 통보 시점·금액·근로계약 내용을 입력하면 대응 방향을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 식대·교통비 중단 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 수집</strong> (즉시) — 최근 12개월 급여명세서, 근로계약서, 취업규칙 식대·교통비 조항, 회사의 중단 통보 문서·메일.</li>\n<li><strong>2단계 — 사내 이의 제기</strong> (즉시) — 인사팀·노조에 서면 이의 제기. "근로계약 변경 동의한 적 없으니 종전대로 지급 요청" 명시. 회신 보존.</li>\n<li><strong>3단계 — 내용증명 발송 (선택)</strong> — 회사 무응답 시 내용증명. 미지급 금액 + 지급 요청 + 시효 중단 효과.</li>\n<li><strong>4단계 — 고용노동부 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지청. 임금체불 + 취업규칙 불이익 변경 절차 위반으로 진정.</li>\n<li><strong>5단계 — 시정지시·형사입건</strong> — 체불 확인 시 14일 내 차액 지급 명령. 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: "동의서에 서명 안 하면 불이익"이라는 압박을 받았다면 그 동의는 강박에 의한 것으로 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>최근 12개월 급여명세서 (식대·교통비 정기 지급 입증)</li>\n<li>근로계약서 또는 연봉계약서 (복리후생 조항 확인)</li>\n<li>취업규칙 식대·교통비 관련 조항</li>\n<li>회사의 중단 통보 문서·이메일·메신저 캡처</li>\n<li>근로자 과반수 동의서 또는 노조 동의 절차 자료 (회사 측 입증 자료 확인용)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 불이익 변경과 개별 근로계약의 우선 적용',
        summary:
          '대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은 사용자가 노동조합의 동의를 받아 취업규칙을 불이익하게 변경하더라도, 그보다 유리한 근로조건을 정한 개별 근로계약이 우선하여 적용된다고 판시했습니다. 즉 근로자 개별 동의가 없는 한 변경된 취업규칙으로 종전 근로계약 내용을 깎을 수 없다는 취지입니다.',
        takeaway:
          '근로계약서에 식대·교통비 조항이 있었다면, 회사가 취업규칙을 변경했더라도 개별 동의 없이는 종전 조건이 우선 적용됩니다.',
      },
    ],
    faq: [
      {
        question: '식대·교통비가 4대보험 산정 기초에 들어가나요?',
        answer:
          '<strong>비과세 한도 내(식대 월 20만 원 등)는 4대보험·세금 산정에서 제외되지만, 임금성 자체는 인정될 수 있습니다.</strong> 즉 폐지 시 임금체불로 청구 가능하면서도 보험료엔 영향이 없을 수 있어요.',
      },
      {
        question: '회사가 "재택근무라 식대 줄 필요 없다"고 하는데 맞나요?',
        answer:
          '<strong>식대가 명목과 관계없이 매월 정액 지급되어 왔다면 재택 여부와 무관하게 청구를 검토할 수 있습니다.</strong> 다만 사후 출장식 식권만 지급해온 형태라면 다툴 여지가 있어요.',
      },
      {
        question: '취업규칙에 "회사 사정에 따라 변경 가능"이라는 조항이 있어요',
        answer:
          '<strong>그런 포괄 조항만으로는 일방 변경 권한이 인정되지 않습니다.</strong> 근로기준법 제94조는 불이익 변경에 과반수 동의를 요구하므로 포괄 위임 조항만으로 동의 절차를 면제하지 못합니다.',
      },
      {
        question: '이미 3개월간 못 받은 식대·교통비를 소급 청구할 수 있나요?',
        answer:
          '<strong>3년 시효 이내 소급 청구가 가능합니다.</strong> 미지급된 매월의 차액을 합산해 임금체불로 진정할 수 있어요.',
      },
      {
        question: '저만 동의 안 하고 다른 사람들은 다 동의했어요. 저도 적용되나요?',
        answer:
          '<strong>개별 근로자가 동의하지 않으면 그 사람에게는 종전 근로계약이 우선 적용될 수 있습니다.</strong> 다만 단체협약·취업규칙 변경의 효력은 별도로 다투어질 수 있으니 구체적 사안에 따라 판단이 달라집니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '해외출장수당 미지급 청구 절차', href: '/guide/wage/wage-overseas-business-trip-allowance-recovery' },
      { label: '봉사료·팁 통상임금 포함 기준', href: '/guide/wage/wage-tip-service-charge-base-inclusion' },
      { label: '수당 환수 일방 공제 위법', href: '/guide/wage/wage-commission-clawback-illegal' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '포괄임금 직책수당 분리 청구', href: '/guide/wage/wage-pogual-team-leader-allowance-claim' },
    ],
  },

  // ─── 3. wage / pogual-team-leader-allowance-claim ───
  {
    domain: 'wage',
    slug: 'wage-pogual-team-leader-allowance-claim',
    keyword: '포괄임금 직책수당 분리 청구',
    questionKeyword: '팀장 직책수당이 포괄임금에 다 포함됐다는데 따로 청구할 수 있나요?',
    ctaKeyword: '포괄임금 직책수당 분리 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 직책수당 분리 청구 4가지 쟁점 | 로앤가이드',
      description:
        '팀장·관리자 직책수당이 포괄임금에 묶여 정산되지 않는다면 분리 청구를 검토할 수 있습니다. 무효 요건과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"팀장으로 발령받으며 직책수당이 신설됐는데, 회사는 \'포괄임금에 다 들어있다\'고만 합니다. 따로 받을 방법이 없을까요?" 포괄임금 약정이라도 직책수당·연장수당·야간수당이 사전에 명확하게 산정되지 않았거나, 실제 근로 대비 액수가 부족하다면 약정 자체가 무효로 검토될 수 있습니다. 소멸시효 3년 이내라면 미지급 차액을 청구할 수 있으니 지금 바로 점검하세요.</p>',
    sections: [
      {
        title: 'Q. 포괄임금에 직책수당이 정말 다 포함된 건가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 포괄임금 약정이 유효하려면 각 수당이 사전에 명확히 구분·산정돼야 합니다.</strong></p>\n<ul>\n<li><strong>구분 산정 원칙</strong> — 근로계약·연봉계약에 "기본급 X원 + 직책수당 Y원 + 고정연장수당 Z원" 식으로 항목·금액이 명시돼 있어야 유효한 포괄임금으로 봅니다(대법원 판례 일관 입장).</li>\n<li><strong>총액 표시만 있으면 무효 소지</strong> — "월 OOO원에 모든 수당 포함"처럼 항목 구분 없이 총액만 표시된 약정은 무효로 다툴 여지가 있습니다.</li>\n<li><strong>최저임금 미달 검증</strong> — 포괄임금 총액 ÷ 소정근로시간 = 비교대상 시급이 최저임금 미만이면 약정 자체가 그 부분에서 무효가 될 수 있습니다(대법원 2020다300299 사건 취지).</li>\n<li><strong>실제 근로시간 대비 부족</strong> — 고정연장수당이 실제 연장근로시간 대비 적게 책정됐다면 차액 청구를 검토할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로계약서에 "직책수당 월 X만 원"이 별도 항목으로 적혀 있는지가 첫 번째 체크 포인트입니다.</blockquote>',
      },
      {
        title: 'Q. 직책수당을 따로 청구하면 얼마나 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 포괄임금 무효 시 실제 근로시간 기준으로 재계산한 미지급액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>차액 산정 방식</strong> — (실제 근로시간 × 통상시급 + 연장·야간·휴일 가산수당) − 실제 수령 임금 = 미지급 차액. 소멸시효 3년 한도 내에서 합산.</li>\n<li><strong>직책수당 자체 임금성</strong> — 직책수당이 정기·일률·고정 지급된다면 통상임금에 포함될 가능성이 있어 연장·야간·휴일수당 단가도 동반 상승.</li>\n<li><strong>퇴직금 평균임금</strong> — 직책수당이 임금성이 인정되면 퇴직 전 3개월 평균임금에 반영돼 퇴직금이 늘어날 소지가 있습니다.</li>\n<li><strong>5인 미만 사업장 주의</strong> — 5인 미만 사업장은 가산수당(연장·야간·휴일)이 근기법 적용 제외이므로, 직책수당 자체 미지급 또는 통상임금·평균임금 청구에 초점.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 직책수당 차액, AI로 먼저 계산해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">기본급·직책수당·실제 근로시간을 입력하면 미지급 추정액과 청구 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 직책수당 분리 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 청구를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로계약서·급여명세서 분석</strong> (즉시) — 직책수당이 별도 항목으로 명시됐는지 확인. 항목 구분 없이 총액만 표기된 경우 포괄임금 무효 주장 가능.</li>\n<li><strong>2단계 — 실제 근로시간 정리</strong> (즉시) — 출퇴근 기록·업무용 메신저·이메일·근태 시스템 로그를 모아 실제 연장·야간·휴일 근로시간 산출.</li>\n<li><strong>3단계 — 미지급 차액 계산</strong> (즉시) — 포괄임금 무효 가정 시 실제 근로시간 기준 임금 − 실제 수령 임금 = 차액. 3년치 합산.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지청. 임금체불 + 포괄임금 무효 주장으로 진정. 처리기간 25일.</li>\n<li><strong>5단계 — 민사 청구 (필요 시)</strong> — 노동청 시정지시 미이행 시 민사 임금 청구 소송. 300만 원 이하라면 소액심판으로 신속 진행 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 재직 중 청구는 인사상 불이익이 우려되므로 퇴직 직후 진행하는 사례가 많습니다. 단, 시효 진행은 매월 따로 시작되니 자료는 미리 모아두세요.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서 또는 연봉계약서 (직책수당 항목 표시 여부 확인)</li>\n<li>최근 3년 급여명세서 (월별 항목 구분)</li>\n<li>출퇴근 기록 (근태 시스템·카드 출입 기록·교통카드 내역)</li>\n<li>업무용 메신저·이메일 (실제 연장·야간 근로 입증)</li>\n<li>취업규칙 임금 조항 사본</li>\n<li>직책 발령 문서 또는 인사발령 통보서</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금 약정과 최저임금 미달 시 효력',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 그 포괄임금계약은 유효하다고 볼 수 없으며, 최저임금 미달 여부를 판단하기 위해서는 비교대상 시급을 소정근로시간 기준으로 산정해야 한다고 판시했습니다.',
        takeaway:
          '직책수당까지 포함한 포괄임금 총액을 소정근로시간으로 나눠 최저임금 미달이라면, 그 부분에서 포괄임금 약정이 무효가 될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 직책수당이 명시돼 있어도 포괄임금이라며 안 줍니다',
        answer:
          '<strong>명시된 직책수당을 안 주는 것은 명백한 임금체불입니다.</strong> "포괄임금"이라는 단어가 있어도 항목별 약정 금액이 정해져 있다면 그 금액은 별도로 지급되어야 합니다.',
      },
      {
        question: '팀장 발령은 받았는데 직책수당 액수 합의가 없었어요',
        answer:
          '<strong>관행·동일 직급 비교로 직책수당을 추정할 수 있습니다.</strong> 같은 회사·동일 직급 동료의 직책수당 자료, 동종업계 일반 직책수당 자료를 활용해 노동청에 다툴 수 있어요.',
      },
      {
        question: '연봉제라서 포괄임금이라는데 정말 그런가요?',
        answer:
          '<strong>연봉제와 포괄임금은 별개의 개념입니다.</strong> 연봉제라도 연장·야간 근로분에 대한 가산수당은 별도로 청구할 수 있는 사례가 많아요. 항목 구분 없이 단일 연봉만 표시된 약정은 다툴 여지가 큽니다.',
      },
      {
        question: '관리감독자라서 가산수당이 적용 안 된다고 하는데?',
        answer:
          '<strong>관리감독자(근기법 제63조)는 명칭이 아니라 실질로 판단합니다.</strong> 단순 팀장 직책만으로 관리감독자가 되는 것은 아니며, 채용·인사·근태 결정권이 실제로 있어야 합니다.',
      },
      {
        question: '이미 퇴직했는데 청구할 수 있나요?',
        answer:
          '<strong>퇴직 후 3년 이내라면 진정·민사 청구가 모두 가능합니다.</strong> 시효는 매월의 임금별로 따로 진행되므로 가장 오래된 미지급분부터 시효가 도래합니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대·교통비 임의 중단 대응', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '해외출장수당 미지급 청구', href: '/guide/wage/wage-overseas-business-trip-allowance-recovery' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
      { label: '봉사료·팁 통상임금 포함 기준', href: '/guide/wage/wage-tip-service-charge-base-inclusion' },
      { label: '성과급 최저임금 위반 신고', href: '/guide/wage/wage-piece-rate-minimum-violation' },
    ],
  },

  // ─── 4. unemployment / self-employed-closure-eligibility ───
  {
    domain: 'unemployment',
    slug: 'unemployment-self-employed-closure-eligibility',
    keyword: '자영업 폐업 후 실업급여',
    questionKeyword: '자영업으로 등록만 돼 있는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '자영업 폐업 실업급여 수급자격 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자영업 폐업 후 실업급여 수급 5단계 절차 | 로앤가이드',
      description:
        '자영업·1인 사업자로 등록만 돼 있고 실제 사업을 영위하지 않았다면 실업급여를 받을 수 있는 사례가 있습니다. 입증 방법과 14일 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"몇 년 전에 잠깐 사업자등록만 해두고 실제로는 운영 안 했어요. 지금 회사를 그만두면서 실업급여를 신청했는데, 사업자등록이 있다고 거부됐습니다." 이런 사례가 의외로 많습니다. 단순 사업자등록만으로 실업급여 수급 자격이 자동 박탈되는 것은 아닙니다. 사업을 실제로 영위하지 않았음이 입증되고 폐업·휴업신고가 어려운 사정이 인정되면 수급자격이 인정될 여지가 있습니다(고용보험심사위원회 2021재결 제143호 취지). 14일 신청 시한을 놓치지 않도록 지금 바로 절차를 확인하세요.</p>',
    sections: [
      {
        title: '자영업 등록자도 실업급여를 받을 수 있는 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제40조 + 시행규칙 + 고용보험심사위원회 재결례를 참고하면 다음 요건을 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>피보험 단위기간 180일</strong> — 이직 전 18개월 중 고용보험 피보험자로 180일 이상 근로한 사실 확인. 회사 근무 기간이 충분해야 합니다.</li>\n<li><strong>사업 미영위 입증</strong> — 사업자등록은 있으나 실제 매출·거래·인력 사용이 없었다는 자료(부가세 신고 0원 내역, 거래 없음 증명, 사업장 임대차 부재 등) 준비.</li>\n<li><strong>폐업·휴업신고 곤란 사정</strong> — 폐업 신고를 하지 못한 합리적 사정(서류 분실·연락두절·사업장 부재 등)이 인정되어야 합니다.</li>\n<li><strong>이직 사유의 정당성</strong> — 회사 이직 사유가 비자발적이거나, 자발적이라도 정당이직 사유에 해당해야 구직급여 신청이 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "사업자등록 = 자동 거부"가 아닙니다. 실제 사업 영위 여부가 핵심이며, 고용보험심사위원회 재결례가 이를 인정한 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자영업 등록자 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 안내 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사업 미영위 자료 준비</strong> (이직 전·후) — 최근 3년 부가세 신고 내역(국세청 홈택스), 사업장 임대차 부재 증명, 거래 없음 사실확인서. 사업자등록증·폐업신고서(있다면).</li>\n<li><strong>2단계 — 폐업신고 시도 또는 사정 입증</strong> (이직 전 권장) — 가능하면 세무서에 폐업신고 진행. 사업장 부재·서류 분실 등으로 폐업이 어려우면 그 사유를 문서화.</li>\n<li><strong>3단계 — 수급자격 신청</strong> (이직일로부터 14일 이내 권장) — 거주지 관할 고용센터 방문 또는 워크넷(work.go.kr) 온라인 신청. 사업 미영위 자료 함께 제출.</li>\n<li><strong>4단계 — 수급자격 심사</strong> (신청 후 약 2~3주) — 고용센터 담당자가 자료 검토. 부가세 신고 0원·매출 없음 등 객관 자료가 핵심.</li>\n<li><strong>5단계 — 불인정 시 심사청구</strong> (처분 후 90일 이내) — 거부 결정 시 고용보험 심사관에게 심사청구, 이후 재심사청구·행정소송 순으로 불복 절차 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자영업 등록자 실업급여 수급 가능성, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업자 등록 시점·매출 여부·이직 사유를 입력하면 수급 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '실제 사업이 있었던 자영업자라면 — 자영업자 실업급여 별도 제도',
        content:
          '<p><strong style="color:#1e3a5f">자영업자 고용보험 임의가입자는 별도 자영업자 실업급여 제도를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>자영업자 고용보험 임의가입</strong> — 50인 미만 자영업자가 임의가입. 가입 후 1년 이상 보험료 납부 필수.</li>\n<li><strong>비자발적 폐업 요건</strong> — 매출 감소·적자·재해 등 비자발적 폐업 사유여야 수급 가능. 단순 자진폐업·이직은 제외.</li>\n<li><strong>지급 일수</strong> — 가입기간에 따라 90~210일분 지급. 일반 근로자 실업급여(120~270일)보다 짧음.</li>\n<li><strong>구직활동 의무</strong> — 일반 실업급여와 동일하게 실업인정일마다 구직활동 보고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자영업자 임의가입을 안 한 상태에서 폐업했다면 자영업자 실업급여는 어렵지만, 이후 근로자로 취업해 180일 이상 근무하면 일반 실업급여를 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>사업자등록증 사본 (개업일·업종 확인)</li>\n<li>최근 3~5년 부가세 신고 내역 (국세청 홈택스 출력)</li>\n<li>폐업신고서 또는 폐업사실증명원 (있는 경우)</li>\n<li>사업장 임대차계약서 부재 증명 또는 임대차 종료 자료</li>\n<li>회사 이직확인서 + 근로계약서 사본</li>\n<li>고용보험 피보험기간 조회서 (근로복지공단)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 미영위 입증 시 자영업자 실업급여 수급자격 인정',
        summary:
          '고용보험심사위원회 2021재결 제143호(고용보험심사위원회, 2021.08.04 재결)에서 위원회는 청구인이 사업을 영위하지 않았음이 증명되고 폐업 또는 휴업신고 등을 하기 어려운 사정이 인정되는 경우, 사업자등록이 있다는 이유만으로 수급자격을 제한하는 것은 부당하다고 판단해 불인정 처분을 취소하는 결정을 내렸습니다.',
        takeaway:
          '사업자등록이 있어도 실제 사업 영위가 없었음을 객관 자료로 입증하면 수급자격이 인정될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '사업자등록이 있는데 부가세 신고를 안 했어요. 어떻게 입증하나요?',
        answer:
          '<strong>국세청 홈택스에서 "신고내역 없음" 확인서를 출력해 매출 없음을 입증할 수 있습니다.</strong> 거래내역 없음, 통장 사업관련 입출금 없음 자료를 함께 첨부하면 객관성이 강화돼요.',
      },
      {
        question: '동업자 명의로만 등록되었는데 저도 사업자로 봐야 하나요?',
        answer:
          '<strong>본인 명의로 사업자등록을 하지 않았다면 자영업자 판단에서 제외될 가능성이 있습니다.</strong> 다만 실제 운영에 깊이 관여했다면 사실상 공동사업주로 볼 여지가 있으니 구체적 사실관계가 중요해요.',
      },
      {
        question: '14일이 지나서 신청했는데 수급에 영향이 있나요?',
        answer:
          '<strong>14일이 지나도 신청 자체는 가능하나 그 기간만큼 수급 일수가 줄어들 수 있습니다.</strong> 가능하면 14일 이내에 신청하시고, 늦어졌다면 그 사유를 함께 진술하세요.',
      },
      {
        question: '회사 다니면서 사업자등록을 유지한 이중 가입자도 가능한가요?',
        answer:
          '<strong>이중 가입 자체가 수급자격을 박탈하는 사유는 아닙니다.</strong> 실제 사업 영위 여부가 핵심이며, 매출·인력이 없었다면 수급자격이 인정될 여지가 있습니다.',
      },
      {
        question: '수급자격이 거부되면 어디에 이의를 제기하나요?',
        answer:
          '<strong>처분일로부터 90일 이내에 고용보험 심사관에게 심사청구를 합니다.</strong> 결과에 불복하면 90일 이내 재심사청구(고용보험심사위원회), 이후 행정소송 단계로 갈 수 있어요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '임신 권고사직 실업급여 인정', href: '/guide/unemployment/unemployment-pregnancy-resignation-eligibility' },
      { label: '직장 괴롭힘 자진퇴사 실업급여', href: '/guide/unemployment/unemployment-workplace-bullying-just-cause' },
      { label: '계약만료 후 실업급여 신청', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
    ],
  },

  // ─── 5. unemployment / pregnancy-resignation-eligibility ───
  {
    domain: 'unemployment',
    slug: 'unemployment-pregnancy-resignation-eligibility',
    keyword: '임신 중 권고사직 실업급여',
    questionKeyword: '임신했더니 회사가 권고사직을 권유하는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '임신 권고사직 실업급여 인정 요건 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임신 중 권고사직 실업급여 인정 5가지 쟁점 | 로앤가이드',
      description:
        '임신 중 회사 권고사직·암묵적 퇴사 압박을 받았다면 실업급여를 받을 수 있는 사례가 있습니다. 부당해고 가능성과 14일 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"임신 사실을 알리자 \'업무가 힘들 텐데 그만두는 게 어떻겠냐\'는 권유를 매일 받고 있어요. 사직서를 써야 하나요? 실업급여는 받을 수 있나요?" 임신을 이유로 한 권고사직·해고 권유는 남녀고용평등법 위반 소지가 큽니다. 또한 이런 상황에서의 자진퇴사는 정당이직으로 인정받을 가능성이 있어 실업급여 수급자격이 검토될 수 있습니다(고용보험법 시행규칙 [별표2]). 사직서 제출 전에 가능한 한 절차를 확인하세요.</p>',
    sections: [
      {
        title: 'Q. 임신 중 권고사직, 그냥 사직서 써도 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사직서 제출 전 회사 측 권고사직 사실을 문서·녹취로 보존하는 것이 우선입니다.</strong></p>\n<ul>\n<li><strong>임신을 이유로 한 해고 금지</strong> — 남녀고용평등법 제11조 제1항: 사업주는 혼인·임신·출산을 퇴직 사유로 예정하는 근로계약·해고를 할 수 없습니다. 위반 시 5년 이하 징역 또는 3,000만 원 이하 벌금.</li>\n<li><strong>출산휴가·육아휴직 보장</strong> — 출산전후휴가 90일(다태아 120일), 육아휴직 1년 등 법정 휴가는 사용자가 거부할 수 없습니다.</li>\n<li><strong>권고사직도 비자발적 이직</strong> — 본인이 사직서를 쓰더라도 회사 권유에 의한 것이라면 실업급여 신청 시 "권고사직"으로 처리될 수 있습니다.</li>\n<li><strong>증거 보존 필수</strong> — "그만두는 게 어떻겠냐"는 발언, 업무 배제, 압박 메시지 등을 녹취·캡처·메모로 남겨두어야 추후 다툼에 활용됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "자진퇴사" 처리되면 수급자격 거부 위험. 이직확인서에 "권고사직" 또는 정당이직 사유로 기재되도록 회사와 협의가 중요합니다.</blockquote>',
      },
      {
        title: 'Q. 임신 권고사직으로 실업급여를 받을 수 있는 5가지 시나리오',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 사정 중 하나에 해당하면 정당이직 또는 비자발적 이직으로 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권고사직 사실 입증</strong> — 회사가 권유한 정황(녹취·문자·동료 진술)이 있으면 이직확인서에 권고사직으로 기재 가능. 비자발적 이직으로 분류되어 수급자격 인정 유리.</li>\n<li><strong>② 업무상 신체적 부담</strong> — 임신 중 무거운 짐 운반·장시간 서서 일하기 등 신체 부담이 큰 업무에 배치돼 더 이상 근무가 어려운 경우, 업무 변경 요청에도 거부됐다면 정당이직 사유.</li>\n<li><strong>③ 출산휴가·육아휴직 거부</strong> — 회사가 법정 휴가 신청을 거부해 부득이 퇴직한 경우 정당이직으로 인정될 여지.</li>\n<li><strong>④ 직장 괴롭힘 동반</strong> — 임신을 이유로 한 따돌림·폭언·업무 배제는 직장 내 괴롭힘에 해당할 수 있어 정당이직 사유로 다툴 수 있음(고용보험법 시행규칙 [별표2] 제11호).</li>\n<li><strong>⑤ 피보험 단위기간 180일</strong> — 위 사유에 해당해도 이직 전 18개월 중 고용보험 피보험자 180일 이상 근로 요건 충족이 별도로 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임신 권고사직 실업급여 가능성, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">권고 정황·근무 기간·이직확인서 내용을 입력하면 수급 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임신 권고사직 후 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 안내 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권고사직 증거 보존</strong> (이직 전) — 회사 권유 발언 녹취, 압박 메시지·이메일 캡처, 업무 배제 정황 메모. 동료 진술서가 있으면 더 강력.</li>\n<li><strong>2단계 — 이직확인서 협의</strong> (이직 시) — 회사에 "권고사직" 또는 "임신으로 인한 정당이직"으로 이직 사유 기재 요청. 개인사정으로 기재되면 수급 거부 위험.</li>\n<li><strong>3단계 — 수급자격 신청</strong> (이직일로부터 14일 이내 권장) — 거주지 관할 고용센터 방문 또는 워크넷 온라인. 의료 기록(임신확인서·산부인과 진료기록), 권고 증거 함께 제출.</li>\n<li><strong>4단계 — 수급기간 연장 신청</strong> (출산 예정 시) — 출산 후 양육으로 즉시 구직활동이 어렵다면 수급기간을 최대 4년까지 연장 신청 가능(고용보험법 제48조).</li>\n<li><strong>5단계 — 구직급여 수령</strong> — 인정 후 피보험기간에 따라 120~270일분 지급. 1일 = 이직 전 평균임금의 60%.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 출산 후 즉시 구직 의사가 없다면 수급기간 연장(최대 4년)을 신청하세요. 연장 신청을 안 하면 수급 권리가 1년 내 소멸됩니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>임신확인서 또는 산부인과 진료 기록</li>\n<li>회사 권고 발언 녹취·문자·이메일 캡처</li>\n<li>업무 배제·따돌림 정황 자료 (메신저 캡처 등)</li>\n<li>출산휴가·육아휴직 신청서 + 거부 회신 (있다면)</li>\n<li>이직확인서 사본 (이직 사유 확인용)</li>\n<li>근로계약서 + 최근 3개월 급여명세서</li>\n<li>고용보험 피보험기간 조회서</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 작성 권유를 근로관계 종료 의사표시로 본 사례',
        summary:
          '고용보험심사위원회 2021재결 제32호(고용보험심사위원회, 2021.04.07 재결)에서 위원회는 관리부장이 근로자에게 사직서를 쓰라고 한 행위를 단순한 업무상 질책이 아니라 사용자가 근로관계 종료의 의사표시를 한 것으로 판단할 수 있다는 취지로 판시했습니다.',
        takeaway:
          '회사 측의 "사직서 써라" 권유는 자발적 사직이 아니라 권고사직(비자발적 이직)으로 평가될 여지가 있어, 실업급여 수급자격 다툼에서 유리하게 작용할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사직서를 이미 자필로 썼는데 권고사직으로 정정 가능한가요?',
        answer:
          '<strong>이직확인서 기재 사유는 사후 정정이 가능합니다.</strong> 근로복지공단에 피보험자격 확인청구를 하고 권고 증거(녹취·문자)를 제출하면 권고사직으로 정정될 가능성이 있어요.',
      },
      {
        question: '임신 사실을 회사가 알기 전 자진퇴사한 경우도 인정되나요?',
        answer:
          '<strong>임신을 이유로 한 이직이라는 인과관계 입증이 어려워질 수 있습니다.</strong> 다만 입덧·임신 합병증 등 의학적 사유로 근무가 곤란했다면 정당이직 사유로 다툴 여지가 있어요.',
      },
      {
        question: '출산 후 양육 중인데 실업급여 신청 시기는 언제인가요?',
        answer:
          '<strong>이직 후 12개월 이내에 수급자격 신청이 원칙이지만, 출산·육아로 즉시 신청이 어려우면 수급기간 연장 신청(최대 4년)을 할 수 있습니다.</strong> 연장 신청은 사유 발생 후 30일 이내 권장.',
      },
      {
        question: '임신 권고사직을 부당해고로 다툴 수도 있나요?',
        answer:
          '<strong>해고가 명시되었다면 부당해고 구제신청을 검토할 수 있습니다.</strong> 노동위원회에 해고일로부터 3개월 이내 구제신청 가능. 다만 본인이 자필 사직서를 썼다면 부당해고 인정이 까다로울 수 있어요.',
      },
      {
        question: '5인 미만 사업장에서도 임신 보호 규정이 적용되나요?',
        answer:
          '<strong>출산전후휴가·육아휴직은 5인 미만 사업장도 적용됩니다(근기법·남녀고용평등법).</strong> 다만 부당해고 구제신청은 5인 이상 사업장에만 적용된다는 점은 차이가 있어요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '자영업 폐업 후 실업급여 수급 절차', href: '/guide/unemployment/unemployment-self-employed-closure-eligibility' },
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '직장 괴롭힘 자진퇴사 실업급여', href: '/guide/unemployment/unemployment-workplace-bullying-just-cause' },
      { label: '권고사직 실업급여 인정', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },
];
