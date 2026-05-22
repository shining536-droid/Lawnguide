import { SpokePage } from '../spoke-pages';

// batch74 wage / unemployment / retirement — 5개 (2026-05-22)
//
// 고유 존재 이유:
// 1. 인센티브·사이닝보너스 퇴사 후 환수 청구 — 일반 임금체불 류와 분기. 여기는 \'사이닝보너스 + 의무재직기간 약정 + 조기 퇴사 시 환수 약정\' 트랙. 약정의 유효성·근로기준법 제20조(위약예정 금지) 적용 다툼.
// 2. 대기시간(on-call) 미지급 임금 — 일반 야근·연장근로 류와 분기. 여기는 \'호출 대기 + 휴식권 박탈 + 사실상 근로시간 평가\' 트랙. 근로시간 vs 휴게시간 경계 평가.
// 3. 외국인 근로자 비자 만료·체류자격 변경 시 실업급여 — 일반 자발적 퇴사 류와 분기. 여기는 \'고용허가제 E-9 + 비자 만료·재계약 거부 + 실업급여 수급 자격\' 트랙. 비자 변경·체류자격 vs 고용보험 자격 결합.
// 4. 퇴직금 IRP 전환·연금 수령 세금 절세 — 단순 일시금 청구 류와 분기. 여기는 \'IRP 이전 + 연금 수령 + 분리과세 vs 종합과세\' 트랙. 절세 + 압류 보호 + 노후 자금 종합.
// 5. 임원 등기이사·근로자성 분쟁 (퇴직금 청구) — 일반 근로자 퇴직금 청구 류와 분기. 여기는 \'등기이사 직책 + 실질 근로 + 위탁계약 vs 근로계약\' 트랙. 근로자성 판단 종속관계·임금성·사용종속성 결합.

export const spokesBatch74WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-incentive-clawback-leaving-bonus-recovery-track ───
  {
    domain: 'wage',
    slug: 'wage-incentive-clawback-leaving-bonus-recovery-track',
    keyword: '사이닝보너스 의무재직 위반 환수',
    questionKeyword: '사이닝보너스 받고 입사했는데 1년 안에 퇴사했더니 회사가 \'의무재직기간 위반\'으로 보너스 환수+위약금까지 청구해요.',
    ctaKeyword: '사이닝보너스 환수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사이닝보너스 환수 청구 — 5단계 약정 유효성 다툼 | 로앤가이드',
      description:
        '사이닝보너스 받은 후 조기 퇴사로 환수+위약금 청구를 받았다면 근기법 제20조 위약예정·약정 유효성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"IT 스타트업 경력직으로 입사하면서 사이닝보너스 1,500만 원을 받았고 계약서엔 \'2년 의무재직기간 + 조기 퇴사 시 보너스 전액 환수 + 위약금 1,000만 원 별도\' 조항이 있었습니다. 8개월 차에 회사 경영 악화로 임금 체불·과도한 야근이 반복되자 본인은 퇴사했고, 회사 측은 보너스 1,500만 원 + 위약금 1,000만 원 합계 2,500만 원 환수를 청구하는 내용증명을 보냈어요. 본인은 사이닝보너스 일부를 이미 이사 비용·생활비로 사용했고, 경영 악화 + 임금체불은 회사 귀책 사유라는 입장입니다. 회사 측은 \'민사소송 + 임금 가압류\'를 예고했어요." 근로기준법 제20조는 \'근로계약 불이행에 대한 위약금·손해배상액 예정\'을 금지하고, 사이닝보너스 환수 약정도 그 실질이 위약예정에 해당하면 무효 평가가 가능한 영역입니다. 보너스 환수 약정은 \'근로의 대가\' 성격 + \'순수 인센티브\' 성격에 따라 유효성이 갈리고, 회사 귀책 사유로 인한 퇴사는 환수 면제 다툼이 가능한 트랙. 피해자라면 ① 약정 성격 ② 위약예정 ③ 회사 귀책 ④ 환수 무효 ⑤ 부당이득 5중 트랙이 가능한 영역. 대응은 ① 성격 ② 위약 ③ 귀책 ④ 무효 ⑤ 부당이득 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사이닝보너스 환수 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 성격·위약·귀책·무효·부당이득 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정 성격 평가</strong> — 사이닝보너스가 \'근로의 대가\'인지 \'순수 인센티브\'인지 평가.</li>\n<li><strong>② 위약예정 금지</strong> — 근로기준법 제20조 위반 여부 (의무재직 + 위약금 조항).</li>\n<li><strong>③ 회사 귀책 사유</strong> — 임금체불·과도한 야근·경영 악화 등 퇴사 정당 사유.</li>\n<li><strong>④ 환수 약정 무효</strong> — 약정의 일부·전부 무효 다툼.</li>\n<li><strong>⑤ 부당이득 반환 청구</strong> — 회사가 이미 압류한 임금 등의 반환 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사이닝보너스 환수 약정은 그 실질이 위약예정(불이행 시 위약금)에 해당하면 근로기준법 제20조에 따라 무효 평가 가능 영역. 보너스 자체의 반환 + 위약금 청구는 별도 평가. 회사 귀책 사유 + 약정 무효 결합 시 환수 청구 자체가 좌절되는 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·반박·반소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약서·내용증명 보존 (즉시)</strong> — 사이닝보너스 약정·환수 조항·내용증명 회신.</li>\n<li><strong>2단계 — 회사 귀책 사유 자료 (1~2주)</strong> — 임금체불 명세·야근 기록·경영 악화 정황 자료.</li>\n<li><strong>3단계 — 약정 성격 분석 (2주)</strong> — 보너스가 근로 대가성인지 인센티브성인지 분류.</li>\n<li><strong>4단계 — 변호인 자문 + 회신 (1개월 내)</strong> — 약정 무효 주장 + 회사 귀책 사유 통지.</li>\n<li><strong>5단계 — 소송 대응 + 부당이득 반소</strong> — 회사 소송 시 약정 무효 + 임금체불 반소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사이닝보너스 환수 청구 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 성격·위약·귀책 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·사이닝보너스 약정서</strong></li>\n<li><strong>회사 내용증명·환수 청구 자료</strong></li>\n<li><strong>임금체불 명세·계좌 입금 내역</strong></li>\n<li><strong>야근 기록·근태 자료 (회사 귀책 입증)</strong></li>\n<li><strong>퇴사 의사 표시 자료 (메신저·메일)</strong></li>\n<li><strong>회사 경영 악화 정황 자료 (재무·언론·내부 메일)</strong></li>\n<li><strong>사이닝보너스 입금·사용 내역</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 약정에 \'위약금 1,000만 원 별도\' 같은 명시적 위약금 조항은 위약예정 금지(제20조) 위반 평가가 더 분명한 영역. 보너스 자체의 환수는 \'반환 약정\'으로 별도 평가지만 회사 귀책 + 약정 성격 따져 무효 다툼 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약정 성격</strong> — 근로 대가성 vs 순수 인센티브성.</li>\n<li><strong>위약예정 금지</strong> — 근로기준법 제20조 위반 평가.</li>\n<li><strong>회사 귀책 사유</strong> — 임금체불·과도한 야근·경영 악화.</li>\n<li><strong>비례·신의칙</strong> — 보너스 + 위약금 합계의 과도성·신의칙 위반.</li>\n<li><strong>임금 가압류 방어</strong> — 회사 가압류 시 제소·이의 절차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정과 회사 내부 관행 인정 요건',
        summary:
          '대법원 2022다255454(대법원, 2026.01.29 선고) 영역에서 법원은 기업의 내부에 존재하는 특정의 관행이 근로계약의 내용을 이루고 있다고 인정하기 위한 요건을 제시하면서, 사이닝보너스·성과급·인센티브 등 명목의 금원이 임금에 해당하는지 여부는 그 지급 기준·계속성·정기성·일률성·근로 대가성 등을 종합 평가하여 판단하여야 한다고 본 사례 흐름이 있고, 사이닝보너스 환수 약정의 유효성 평가에도 그 성격 분류가 결정적 사정이 됩니다.',
        takeaway: '사이닝보너스가 근로 대가성·임금성 평가면 위약예정 금지(제20조) 적용 가능 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계약서에 환수 조항이 있는데도 무효가 될 수 있나요?',
        answer:
          '<strong>위약예정 금지(근기법 제20조) 위반이면 무효 영역입니다.</strong> 약정 실질·근로 대가성 평가가 결정.',
      },
      {
        question: '회사가 임금체불·과도한 야근 때문에 퇴사했어요',
        answer:
          '<strong>회사 귀책 사유는 환수 면제 다툼의 강한 사정입니다.</strong> 체불 명세·야근 기록 자료 보존.',
      },
      {
        question: '회사가 임금 가압류를 한다는데 막을 수 있나요?',
        answer:
          '<strong>가압류 이의·제소명령 신청 가능한 영역입니다.</strong> 즉시 변호인 자문 + 본안 소송 대비.',
      },
      {
        question: '사이닝보너스를 이미 다 써버렸어요',
        answer:
          '<strong>약정 무효면 반환 의무 자체가 없는 영역입니다.</strong> 약정 무효 다툼 우선 진행.',
      },
      {
        question: '회사가 형사 고소(횡령·사기)도 가능한가요?',
        answer:
          '<strong>민사 환수 청구는 형사 사건과 별도 영역입니다.</strong> 횡령·사기 요건 부재 시 형사 책임 불성립.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고 절차', href: '/guide/wage/wage-unpaid-report-procedure' },
      { label: '임금 가압류 대응', href: '/guide/wage/wage-attachment-defense' },
      { label: '근로계약서 분쟁', href: '/guide/wage/wage-employment-contract-dispute' },
      { label: '퇴직 임금 청구', href: '/guide/wage/wage-resignation-claim-procedure' },
      { label: '임금 시효 5년', href: '/guide/wage/wage-statute-limitations-5year' },
    ],
  },

  // ─── 2. wage-on-call-standby-no-pay-claim-track ───
  {
    domain: 'wage',
    slug: 'wage-on-call-standby-no-pay-claim-track',
    keyword: '대기시간 on-call 미지급 임금 청구',
    questionKeyword: 'IT·의료·기술지원 직무에서 야간·주말 호출 대기(on-call)를 했는데 임금이 0원이에요. 근로시간으로 인정받을 수 있나요?',
    ctaKeyword: '대기시간 임금 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대기시간 on-call 임금 청구 — 5단계 근로시간 평가 | 로앤가이드',
      description:
        '야간·주말 호출 대기 임금이 0원이라면 근로시간 vs 휴게시간 경계·실질적 구속 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"IT 인프라 운영팀에서 야간·주말 \'호출 대기(on-call) 당번\'을 매주 1회 이상 부담했습니다. 회사는 \'실제 출동·통화한 시간만 임금 지급\'을 명목으로 호출 대기 12시간 중 평균 통화 30분만 임금 지급했고, 나머지 11시간 30분은 임금 0원이었어요. 본인은 호출 대기 중에는 음주 금지·30분 내 출동 가능 거리 유지·노트북 상시 켜 두기·휴대전화 항시 응답 의무가 부과돼 사실상 휴식·여가가 어려운 상태였습니다. 휴일 대기로 인한 가족·여행 일정 제약도 누적됐어요." 대기시간이 \'근로시간\'으로 인정되는지는 사용자의 지휘·감독 정도, 장소·행동의 제약 정도, 호출 빈도, 실질적 휴식 가능성 등을 종합 평가하는 영역입니다. 음주 금지·근거리 대기·즉시 응답 의무가 결합된 호출 대기는 \'사실상 근로시간\' 평가가 가능한 트랙. 피해자라면 ① 구속 정도 ② 호출 빈도 ③ 실질 휴식 가능성 ④ 미지급 임금 청구 ⑤ 통상임금 재산정 5중 트랙이 가능한 영역. 대응은 ① 구속 ② 빈도 ③ 휴식 ④ 청구 ⑤ 재산정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 대기시간 임금 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 구속·빈도·휴식·청구·재산정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 구속 정도</strong> — 음주 금지·근거리·즉시 응답 등 행동 제약 평가.</li>\n<li><strong>② 호출 빈도</strong> — 대기 시간 중 실제 호출 빈도·집중도.</li>\n<li><strong>③ 실질적 휴식 가능성</strong> — 가족·여가 활동의 객관적 가능성.</li>\n<li><strong>④ 미지급 임금 청구 (시효 3년)</strong> — 대기시간을 근로시간으로 산입한 임금 청구.</li>\n<li><strong>⑤ 통상임금·평균임금 재산정</strong> — 퇴직금·연장근로수당 재산정 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대기시간 = 근로시간 평가는 종합 평가 영역. 사용자 지휘 감독 + 행동 제약 + 휴식 불가 결합 시 사실상 근로시간 인정 가능 트랙. 임금 청구 시효는 3년, 통상·평균임금 재산정 시 퇴직금까지 영향.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·재산정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대기 운영 자료 보존 (즉시)</strong> — on-call 운영 규정·당번표·호출 기록.</li>\n<li><strong>2단계 — 행동 제약 자료 (1~2주)</strong> — 음주 금지·근거리·응답 의무 메시지·매뉴얼.</li>\n<li><strong>3단계 — 호출 빈도 자료 (2~3주)</strong> — 실제 통화·출동 기록·VPN 접속 로그.</li>\n<li><strong>4단계 — 노동부 진정 + 임금 청구 (시효 3년 내)</strong> — 대기시간 근로시간 산입 + 미지급 청구.</li>\n<li><strong>5단계 — 통상·평균임금 재산정</strong> — 퇴직금·연장근로수당 재산정 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">대기시간 임금 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 구속·빈도·휴식 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙·on-call 운영 규정</strong></li>\n<li><strong>on-call 당번표·배정 메시지</strong></li>\n<li><strong>음주 금지·근거리·응답 의무 매뉴얼·메시지</strong></li>\n<li><strong>실제 호출·통화·출동 기록</strong></li>\n<li><strong>VPN·시스템 접속 로그</strong></li>\n<li><strong>기존 임금명세서·통상임금 자료</strong></li>\n<li><strong>퇴직 시 평균임금 산정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통상임금·평균임금 재산정은 퇴직금·연장근로수당·연차수당까지 연쇄 영향. 임금 청구 시효 3년이라 재직 중부터 자료 보존 + 퇴직 후 청구 일정 관리가 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>구속 정도</strong> — 음주 금지·근거리·즉시 응답 등 행동 제약 평가.</li>\n<li><strong>호출 빈도</strong> — 대기 시간 중 실제 호출 빈도·집중도.</li>\n<li><strong>실질 휴식</strong> — 가족·여가 활동의 객관적 가능성.</li>\n<li><strong>임금 청구 시효</strong> — 3년 시효 관리 + 통상임금 재산정 연쇄 영향.</li>\n<li><strong>포괄임금제 약정</strong> — 포괄임금에 대기수당 포함 여부 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무와 최저임금 산정 영역',
        summary:
          '대법원 2022다257238(대법원, 2025.07.18 선고) 영역에서 법원은 격일제 근무 형태 등에서 최저임금액 이상의 임금을 지급해야 하는 시간 산정 영역을 다루면서, 근로시간과 휴게시간의 경계 평가에서 사용자의 지휘·감독 정도와 근로자의 자유 처분 가능성 등을 종합 검토하여야 한다고 본 사례 흐름이 있고, 대기시간의 근로시간성 평가에도 동일한 종합 평가 기준이 적용됩니다.',
        takeaway: '구속 정도 + 호출 빈도 + 휴식 불가 결합 시 대기시간 근로시간성 인정 영역 — 변호인 상담·청구 권장.',
      },
    ],
    faq: [
      {
        question: '대기시간이 근로시간인지 휴게시간인지 어떻게 갈리나요?',
        answer:
          '<strong>구속 정도·호출 빈도·실질 휴식 가능성 종합 평가입니다.</strong> 음주 금지·근거리·즉시 응답 결합 시 근로시간성 강화.',
      },
      {
        question: '포괄임금제 계약이라 대기수당이 이미 포함됐다고 해요',
        answer:
          '<strong>포괄임금에 대기수당 포함 여부는 별도 평가 영역입니다.</strong> 약정 내용·산정 근거 자료 확인.',
      },
      {
        question: '이미 퇴사한 회사에 대해서도 청구 가능한가요?',
        answer:
          '<strong>임금 청구 시효 3년이라 가능한 영역입니다.</strong> 퇴직금 재산정까지 연쇄 청구 가능.',
      },
      {
        question: '회사가 \'대기는 본인 자율\'이라고 주장해요',
        answer:
          '<strong>당번표·매뉴얼이 있으면 자율성 부정 사정입니다.</strong> 강제 배정 자료 보존이 결정.',
      },
      {
        question: '통상임금 재산정이 어떤 영향이 있나요?',
        answer:
          '<strong>연장근로수당·휴일근로수당·퇴직금까지 연쇄 영향 영역입니다.</strong> 재직 중·퇴직 후 청구 전략 차이.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고 절차', href: '/guide/wage/wage-unpaid-report-procedure' },
      { label: '통상임금 산정', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '연장근로수당 청구', href: '/guide/wage/overtime-pay-calculation-claim' },
      { label: '포괄임금 분쟁', href: '/guide/wage/wage-comprehensive-contract-dispute' },
      { label: '임금 시효 5년', href: '/guide/wage/wage-statute-limitations-5year' },
    ],
  },

  // ─── 3. unemployment-foreign-worker-visa-expire-benefit-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-foreign-worker-visa-expire-benefit-track',
    keyword: '외국인 근로자 비자 만료 실업급여',
    questionKeyword: '고용허가제(E-9) 외국인 근로자인데 사업주 재계약 거부로 비자 만료 위기예요. 실업급여 받을 수 있나요?',
    ctaKeyword: '외국인 비자 실업급여 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 근로자 비자 만료 실업급여 — 5단계 수급 자격 | 로앤가이드',
      description:
        '외국인 근로자 비자 만료·재계약 거부 시 실업급여 수급 자격·체류자격 변경 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고용허가제 E-9 비자로 4년 10개월 제조업체에서 근무한 외국인 근로자입니다. 비자 만료를 앞두고 사업주에게 재계약을 요청했으나 \'경영 악화\'를 사유로 거부됐고, 다른 사업장으로의 사업장 변경도 \'본인 귀책 없음\' 인정을 받기 어려운 상황이에요. 본인은 한국어 자격증·근속 평가 모두 우수했고, 임금 체불·사업장 부도 같은 객관적 사유는 없었습니다. 본인은 고용보험에 4년 10개월간 가입돼 피보험단위기간 180일 이상을 충족하고, 비자 만료 후 약 1개월간 출국 유예 기간이 있는 상태예요. 실업급여 수급 자격 + 체류자격 변경(D-10 구직 비자) 둘 다 검토 중입니다." 외국인 근로자도 고용보험 가입 + 피보험단위기간 180일 이상 + 비자발적 이직 또는 정당한 이직 사유 충족 시 실업급여 수급 자격이 있는 영역이고, 사업주 재계약 거부는 \'비자발적 이직\'으로 평가되는 사정입니다. 다만 체류자격(E-9 → D-10 구직 비자 변경) + 출국 유예 기간 중 실업인정 절차 가능성 등 절차적 쟁점이 결합되는 트랙. 피해자라면 ① 수급 자격 ② 비자발적 이직 ③ 체류자격 변경 ④ 실업인정 ⑤ 출국 전 일시지급 5중 트랙이 가능한 영역. 대응은 ① 자격 ② 사유 ③ 비자 ④ 인정 ⑤ 일시지급 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 근로자 비자 만료 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·사유·비자·인정·일시지급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수급 자격</strong> — 고용보험 가입 + 피보험단위기간 180일 이상.</li>\n<li><strong>② 비자발적 이직 사유</strong> — 사업주 재계약 거부의 정당성 평가.</li>\n<li><strong>③ 체류자격 변경</strong> — E-9 → D-10 구직 비자 변경 또는 출국 유예.</li>\n<li><strong>④ 실업인정 절차</strong> — 워크넷 등록·재취업활동 인정 사정.</li>\n<li><strong>⑤ 출국 전 일시지급</strong> — 출국 확정 시 일시 정산 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국인 근로자도 고용보험 가입 + 정당한 이직 사유 + 적법 체류 결합 시 실업급여 수급 가능 영역. 사업주 재계약 거부 시 비자발적 이직 평가 가능하지만 사업장 변경 사유 인정 + 체류자격 변경 절차 연동 트랙. 출국 유예 기간 중 일시 정산 옵션.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·사유·신청 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 고용보험 자격 확인 (즉시)</strong> — 고용센터·고용보험 EDI 가입 이력 확인.</li>\n<li><strong>2단계 — 이직 사유 자료 (1~2주)</strong> — 사업주 재계약 거부 공문·고용센터 권고사항·임금 체불 자료.</li>\n<li><strong>3단계 — 체류자격 변경 (출입국)</strong> — E-9 → D-10 구직 비자 변경 신청 또는 출국 유예.</li>\n<li><strong>4단계 — 실업급여 신청 + 워크넷 등록 (이직 후 1개월 내)</strong> — 고용센터 방문 + 신청서 제출.</li>\n<li><strong>5단계 — 출국 전 일시 정산 검토</strong> — 출국 확정 시 잔여분 일시 정산 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 근로자 비자 만료 시 실업급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·사유·비자 갈래입니다.</strong></p>\n<ul>\n<li><strong>외국인등록증·여권·E-9 비자</strong></li>\n<li><strong>고용보험 가입 이력서 (EDI 출력)</strong></li>\n<li><strong>이직확인서·사업주 재계약 거부 공문</strong></li>\n<li><strong>근로계약서·임금명세서</strong></li>\n<li><strong>한국어 자격증·근속 평가서 (재취업 의지 입증)</strong></li>\n<li><strong>워크넷 등록 확인서</strong></li>\n<li><strong>체류자격 변경 신청서·확인서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: E-9는 사업장 이동 제한이 있지만 \'사업주 귀책\' 인정 시 사업장 변경 가능. 재계약 거부도 사업주 귀책으로 평가 가능한 영역. D-10 구직 비자 변경 후 재취업 활동 인정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 + 가입 누락 시 가입 확인 청구.</li>\n<li><strong>비자발적 이직 사유</strong> — 사업주 재계약 거부의 정당성 평가.</li>\n<li><strong>체류자격</strong> — E-9 → D-10 변경 또는 출국 유예 기간 중 신청.</li>\n<li><strong>실업인정</strong> — 한국어 능력 + 워크넷 등록 + 재취업 활동.</li>\n<li><strong>일시 정산</strong> — 출국 확정 시 잔여분 일시 정산 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (다국어 지원)</strong></li>\n<li><strong>외국인근로자 지원센터 1644-0644</strong></li>\n<li><strong>출입국·외국인청 1345</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 수급자격 불인정 처분 영역',
        summary:
          '고용보험심사위원회 2023재결 제44호(2023.06.21) 영역에서 위원회는 실업급여 수급자격 불인정 처분 취소 청구 사건에서, 근로계약서에 해지사유로 명시된 사정의 객관적 확인과 이직의 비자발성·정당성 평가가 결합되어야 수급 자격이 인정되고, 단순 계약 만료라도 사용자의 재계약 거부 등 비자발적 이직 사유로 평가되는 사정에서는 수급 자격이 인정되어야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '사업주 재계약 거부 + 본인 귀책 부재 결합 시 외국인 근로자도 비자발적 이직 평가 가능 영역 — 다국어 상담 권장.',
      },
    ],
    faq: [
      {
        question: 'E-9 비자가 만료되면 실업급여를 받을 수 없나요?',
        answer:
          '<strong>고용보험 가입 + 180일 + 정당한 이직 사유 결합 시 가능한 영역입니다.</strong> 체류자격 변경 또는 출국 유예 결합.',
      },
      {
        question: '사업장 변경 사유 인정이 어려운 상황이에요',
        answer:
          '<strong>사업주 재계약 거부도 사업장 변경 사유로 평가 가능 영역입니다.</strong> 거부 공문 + 객관 자료 확보.',
      },
      {
        question: 'D-10 구직 비자로 변경하면 실업급여 신청 가능한가요?',
        answer:
          '<strong>적법 체류 + 재취업 의지 입증으로 가능한 영역입니다.</strong> 워크넷 등록·한국어 자격 자료 보존.',
      },
      {
        question: '본국으로 출국하면 실업급여는 어떻게 되나요?',
        answer:
          '<strong>출국 전 일시 정산 가능성 검토 영역입니다.</strong> 고용센터 상담으로 확인 결정.',
      },
      {
        question: '한국어가 부족해서 신청 절차가 막막해요',
        answer:
          '<strong>다국어 지원 상담이 가능한 영역입니다.</strong> 외국인근로자 지원센터 1644-0644 상담.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-eligibility-requirements' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-process' },
      { label: '비자발적 이직 사유', href: '/guide/unemployment/unemployment-involuntary-leaving-reason' },
      { label: '이직확인서 정정', href: '/guide/unemployment/unemployment-employment-cert-correction' },
      { label: '피보험단위기간 계산', href: '/guide/unemployment/unemployment-insured-period-calculation' },
    ],
  },

  // ─── 4. retirement-irp-rollover-tax-pension-conversion-track ───
  {
    domain: 'retirement',
    slug: 'retirement-irp-rollover-tax-pension-conversion-track',
    keyword: '퇴직금 IRP 전환 연금 수령 절세',
    questionKeyword: '퇴직금을 IRP로 이전해서 연금으로 받을지, 일시금으로 받을지 고민이에요. 세금·절세 측면에서 어떻게 정리해야 하나요?',
    ctaKeyword: '퇴직금 IRP 연금 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '퇴직금 IRP 전환 연금 절세 — 5단계 분리과세 활용 | 로앤가이드',
      description:
        '퇴직금 IRP 이전·연금 수령 시 분리과세·종합과세 비교·압류 보호 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년 근속 후 회사를 퇴직한 50대 후반 직장인입니다. 퇴직금 총액 약 1억 5천만 원을 일시금으로 받을지 IRP(개인형 퇴직연금) 계좌로 이전해 연금으로 받을지 결정해야 합니다. 일시금 수령 시 퇴직소득세가 한 번에 부과되고 그 금액이 적지 않을 것 같아 부담스럽고, IRP 이전 후 55세 이후 연금으로 10년 이상 분할 수령하면 세제 혜택이 있다는 안내를 받았어요. 본인은 별도 사업소득·금융소득이 있어 종합소득세 누진세율 영향도 고려해야 하고, 노후 자금 + 압류 보호 측면도 결정 변수입니다." 퇴직금은 퇴직소득세 단독 과세 영역이고, IRP 이전 시 \'과세이연\' + 55세 이후 연금 수령 시 \'연금소득세 분리과세\'(연 1,500만 원 한도) 혜택이 있으며, 압류·체납 처분 제한(개인퇴직연금 보호 1.5억 한도) 영역도 결합되는 트랙입니다. 노후·세금·압류 보호 종합 평가 영역. 본인이라면 ① 일시금 vs 연금 세율 ② IRP 이전 절차 ③ 분리과세 한도 ④ 종합과세 합산 ⑤ 압류 보호 5중 트랙이 가능한 영역. 대응은 ① 세율 ② 이전 ③ 한도 ④ 합산 ⑤ 보호 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직금 IRP 전환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 세율·이전·한도·합산·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 일시금 vs 연금 세율 비교</strong> — 퇴직소득세 일시 부담 vs 연금소득세 분할.</li>\n<li><strong>② IRP 이전 절차</strong> — 퇴직일로부터 60일 이내 이전 시 과세이연.</li>\n<li><strong>③ 분리과세 한도</strong> — 55세 이후 연금 수령 시 연 1,500만 원 분리과세.</li>\n<li><strong>④ 종합과세 합산</strong> — 한도 초과 시 종합소득세 누진세율 적용.</li>\n<li><strong>⑤ 압류·체납 보호</strong> — 개인퇴직연금 1.5억 한도 압류 보호.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴직금 IRP 전환은 \'과세이연 + 분리과세 + 압류 보호\' 3중 혜택 영역. 단 분리과세 한도 초과 시 종합과세 합산, 별도 사업·금융소득이 많으면 누진세율 영향 평가. 노후 자금 안정성 + 세금 종합 평가가 결정 변수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 결정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 시뮬레이션·이전·세무 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 일시금·연금 세액 시뮬레이션 (즉시)</strong> — 국세청 홈택스 \'퇴직소득세 계산기\' 활용.</li>\n<li><strong>2단계 — IRP 계좌 개설 (1주)</strong> — 증권사·은행 비교 + 수수료·운용 옵션 확인.</li>\n<li><strong>3단계 — 퇴직금 이전 (60일 내)</strong> — 회사 → IRP 직접 이전 + 과세이연 확정.</li>\n<li><strong>4단계 — 55세 이후 연금 수령 신청</strong> — 10년 이상 분할 + 분리과세 한도 관리.</li>\n<li><strong>5단계 — 세무 자문 + 종합소득 합산 점검</strong> — 별도 소득 합산 시 누진세율 영향 평가.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 IRP 전환·연금 수령 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 세율·이전·합산 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직금 산정서·근속연수 확인서</strong></li>\n<li><strong>회사 퇴직금 지급명세서</strong></li>\n<li><strong>IRP 계좌 개설 신청서</strong></li>\n<li><strong>국세청 홈택스 퇴직소득세 계산 결과</strong></li>\n<li><strong>전년도 종합소득세 신고서 (합산 영향 평가)</strong></li>\n<li><strong>금융기관 IRP 수수료·운용 옵션 비교 자료</strong></li>\n<li><strong>국민연금·기초연금 수령 예정액 자료 (노후 종합)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직금 IRP 직접 이전은 회사 → IRP 계좌 직접 송금 방식 (개인 계좌 경유 시 과세 발생 사정). 퇴직일 60일 이내 이전이 과세이연 핵심 요건.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일시금 세율</strong> — 퇴직소득세 누진 + 일시 부담.</li>\n<li><strong>연금 분리과세</strong> — 55세 이후 + 10년 분할 + 연 1,500만 원 한도.</li>\n<li><strong>종합과세 합산</strong> — 한도 초과 + 별도 사업·금융소득 결합 시 누진.</li>\n<li><strong>압류 보호</strong> — 개인퇴직연금 1.5억 한도 압류 제한.</li>\n<li><strong>운용 수익</strong> — IRP 내 운용 수익은 연금 수령 시 과세.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국세청 홈택스 126</strong></li>\n<li><strong>국민연금공단 1355</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진폐 장해위로금 산정·지급 지연 영역',
        summary:
          '대법원 2025두33905(대법원, 2025.12.11 선고) 영역에서 법원은 진폐 장해위로금 부지급 처분 취소 사건에서 장해보상일시금·일시금 산정 기준 평가를 다루면서, 퇴직급여·장해보상금·연금 등 일시금 vs 연금 수령 선택권 평가에서는 수급자의 노후 안정성과 세제·압류 보호 종합 평가가 필요하다고 본 사례 흐름이 있고, IRP 전환·연금 수령 선택의 종합 평가에도 유사한 검토 기준이 적용됩니다.',
        takeaway: '일시금 vs 연금 결정은 세금 + 노후 + 압류 종합 평가 영역 — 세무 자문·금융 상담 권장.',
      },
    ],
    faq: [
      {
        question: '퇴직금을 일시금으로 받으면 세금 부담이 얼마나 큰가요?',
        answer:
          '<strong>퇴직소득세 누진 영역입니다.</strong> 국세청 홈택스 계산기로 시뮬레이션 우선.',
      },
      {
        question: 'IRP로 이전한 후 언제부터 연금 수령이 가능한가요?',
        answer:
          '<strong>55세 이후 + 10년 이상 분할 수령 시 분리과세 영역입니다.</strong> 한도 1,500만 원/년 관리.',
      },
      {
        question: '별도 사업소득이 있는데 연금이 합산되면 세금 더 나오나요?',
        answer:
          '<strong>분리과세 한도 초과분만 합산되는 영역입니다.</strong> 한도 내 관리 시 종합과세 영향 제한.',
      },
      {
        question: 'IRP 계좌도 압류·체납 처분 대상인가요?',
        answer:
          '<strong>개인퇴직연금 1.5억 한도 압류 보호 영역입니다.</strong> 한도 초과분은 일반 압류 대상.',
      },
      {
        question: '60일 이내 이전이 어렵게 됐어요',
        answer:
          '<strong>60일 경과 시 과세이연 못 받는 영역입니다.</strong> 즉시 IRP 계좌 개설 + 직접 이전 진행.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산법', href: '/guide/retirement/retirement-calculation-method' },
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-claim-procedure' },
      { label: 'IRP 개인형 퇴직연금', href: '/guide/retirement/retirement-irp-overview' },
      { label: '퇴직금 시효 3년', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '평균임금 산정', href: '/guide/retirement/retirement-average-wage-calculation' },
    ],
  },

  // ─── 5. retirement-corporate-officer-deemed-employee-track ───
  {
    domain: 'retirement',
    slug: 'retirement-corporate-officer-deemed-employee-track',
    keyword: '임원 등기이사 근로자성 퇴직금 청구',
    questionKeyword: '회사에서 등기이사로 등재돼 위탁계약을 체결했는데, 실제론 출퇴근·업무지시 받는 직원이었어요. 퇴직금 청구 가능한가요?',
    ctaKeyword: '임원 근로자성 퇴직금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임원 등기이사 근로자성 퇴직금 — 5단계 종속관계 다툼 | 로앤가이드',
      description:
        '등기이사·위탁계약이라도 실질 근로자라면 퇴직금 청구 가능 — 종속관계·임금성·사용종속성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소기업에 처음 입사할 때 \'등기이사\' 직책 + 회사와 \'위탁계약(연봉제 + 4대 보험 미가입)\'을 체결했고 7년간 근무했습니다. 실제 업무는 마케팅 본부장으로 출퇴근·업무 지시·휴가 결재 모두 대표이사 지휘를 받았고, 영업·인사 결정권은 거의 없었어요. 퇴직 시 회사는 \'임원·위탁계약이라 근로자가 아니다\'·\'퇴직금 지급 의무 없음\'을 명목으로 7년 치 퇴직금 지급을 거부했습니다. 본인은 4대 보험 미가입 + 등기이사 등재 + 위탁계약 형식이라 \'근로자성\' 인정 가능 여부가 핵심 쟁점입니다." 근로자성은 \'계약 형식\'이 아니라 \'실질의 종속관계\'로 판단되는 영역이고, 사용자의 지휘·감독 정도, 업무 내용의 자율성, 임금 결정 방식, 다른 사용자에게의 노무 제공 가능성 등을 종합 평가하는 트랙입니다. 등기이사 형식 + 위탁계약이라도 실질이 근로계약이면 근로자성 인정 + 퇴직금 청구 가능 영역. 피해자라면 ① 종속관계 ② 임금성 ③ 자율성 부재 ④ 퇴직금 청구 ⑤ 4대 보험 가입 확인 5중 트랙이 가능한 영역. 대응은 ① 종속 ② 임금 ③ 자율 ④ 청구 ⑤ 보험 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임원 근로자성 퇴직금 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 종속·임금·자율·청구·보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 종속관계</strong> — 대표이사·이사회의 업무 지시·감독 정도 평가.</li>\n<li><strong>② 임금성</strong> — 연봉·성과급의 근로 대가성·계속성·정기성·일률성.</li>\n<li><strong>③ 자율성 부재</strong> — 출퇴근·휴가·업무 결정의 자율성 부재 정황.</li>\n<li><strong>④ 퇴직금 청구 (시효 3년)</strong> — 근로자퇴직급여보장법에 따른 청구.</li>\n<li><strong>⑤ 4대 보험 소급 가입</strong> — 가입 누락 시 가입 확인 청구 + 소급 가입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로자성은 \'계약 형식\'이 아니라 \'실질 종속관계\' 평가 영역. 등기이사 + 위탁계약 + 4대 보험 미가입이라도 실질 평가 결과 종속관계 인정 시 근로자성 인정 + 퇴직금 청구 가능 트랙. 입증 책임은 본인 측이지만 회사 측 자료(인사·결재·메신저)가 핵심 증거.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·보험 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·인사 자료 보존 (즉시)</strong> — 위탁계약서·등기부등본·인사 발령·결재 자료.</li>\n<li><strong>2단계 — 종속관계 자료 (1~2주)</strong> — 대표이사 업무 지시 메신저·메일·회의록·근태 기록.</li>\n<li><strong>3단계 — 임금성 자료 (2~3주)</strong> — 급여명세서·성과급·연봉 계약·세금 신고서.</li>\n<li><strong>4단계 — 노동부 진정 + 민사 청구 (시효 3년 내)</strong> — 근로자성 + 퇴직금 청구 동시.</li>\n<li><strong>5단계 — 4대 보험 소급 가입 청구</strong> — 국민연금·건강보험·고용·산재 소급 가입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 포함 항목, AI로 먼저 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">임원 근로자성 + 퇴직금 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 종속·임금·자율 갈래입니다.</strong></p>\n<ul>\n<li><strong>위탁계약서·근로계약서 (있다면)</strong></li>\n<li><strong>법인 등기부등본 (등기이사 등재 확인)</strong></li>\n<li><strong>대표이사 업무 지시 메신저·메일</strong></li>\n<li><strong>결재 문서·회의록·인사 발령 기록</strong></li>\n<li><strong>급여명세서·연봉 계약·세금 신고서 (3.3% 사업소득 vs 근로소득)</strong></li>\n<li><strong>출퇴근·근태·휴가 결재 기록</strong></li>\n<li><strong>다른 사용자에게의 노무 제공 부재 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 3.3% 사업소득 원천징수 vs 근로소득세 원천징수가 결정 사정. 4대 보험 미가입 + 사업소득 처리는 \'위탁\' 입증 사정이지만 실질 종속관계 입증 시 근로자성 인정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>종속관계 입증</strong> — 대표이사·이사회의 업무 지시·감독 정도.</li>\n<li><strong>임금성</strong> — 연봉·성과급의 근로 대가성·계속성·정기성·일률성.</li>\n<li><strong>자율성 부재</strong> — 출퇴근·휴가·업무 결정의 자율성 부재.</li>\n<li><strong>형식 vs 실질</strong> — 계약 형식보다 실질 종속관계가 우선.</li>\n<li><strong>4대 보험 소급</strong> — 가입 확인 청구 + 보험료 분담 협의.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>국민연금공단 1355</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예퇴직 교사 퇴직연금·수당 부지급 처분 영역',
        summary:
          '서울행정법원 2025구합54475(서울행법, 2025.11.13 선고) 영역에서 법원은 퇴직연금 및 퇴직수당 부지급 처분 취소 사건에서 근로자의 지위 인정 여부와 퇴직급여 청구권 평가 영역을 다루면서, 형식적 계약 명칭이나 직책보다 실질 종속관계와 임금성 평가가 결정 사정이 된다고 본 사례 흐름이 있고, 등기이사·임원이라도 실질이 근로계약이면 근로자성 인정 가능 트랙입니다.',
        takeaway: '계약 형식 + 직책보다 실질 종속관계·임금성 평가가 근로자성 결정 영역 — 변호인 상담·청구 권장.',
      },
    ],
    faq: [
      {
        question: '등기이사라도 퇴직금 청구가 가능한가요?',
        answer:
          '<strong>실질 종속관계 입증 시 가능한 영역입니다.</strong> 형식보다 실질 평가 우선.',
      },
      {
        question: '위탁계약 + 3.3% 사업소득으로 처리됐어요',
        answer:
          '<strong>세금 형식은 위탁 입증 사정이지만 실질 평가에서 뒤집힐 수 있는 영역입니다.</strong> 업무 지시·결재 자료 확보.',
      },
      {
        question: '4대 보험에 가입돼 있지 않았어요',
        answer:
          '<strong>가입 누락은 근로자성 부정 사정이 아닌 영역입니다.</strong> 가입 확인 청구 + 소급 가입 가능.',
      },
      {
        question: '퇴직금 청구 시효가 지났어요',
        answer:
          '<strong>퇴직금 시효 3년 영역입니다.</strong> 시효 도과 시 부당이득 청구 등 별도 트랙 검토.',
      },
      {
        question: '회사가 \'임원은 근로자가 아니다\' 일방 주장해요',
        answer:
          '<strong>실질 평가에서 뒤집힐 수 있는 영역입니다.</strong> 업무 지시·결재 자료가 결정 입증.',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산법', href: '/guide/retirement/retirement-calculation-method' },
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-claim-procedure' },
      { label: '근로자성 판단 기준', href: '/guide/retirement/retirement-employee-status-judgment' },
      { label: '퇴직금 시효 3년', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '평균임금 산정', href: '/guide/retirement/retirement-average-wage-calculation' },
    ],
  },
];
