import { SpokePage } from '../spoke-pages';

// batch58 시사 컨텐츠 3개 (2026-05-08)
// 광주 육아휴직 후 실업급여 거부 보도 (뉴스1 2025.7.20) — unemployment 도메인 3개
//
// 고유 존재 이유:
// 1. 이 페이지는 육아휴직 종료 후 권고사직·계약만료 등으로 퇴사한 근로자가 실업급여 일반 수급요건(18개월 기준기간 + 시행령 제60조 3년 캡 + 180일 산정 방식)을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 1년 이상 장기 육아휴직을 사용한 근로자가 시행령 제60조의 3년 한도로 인해 실제 근무일수가 180일에 미치지 못해 수급자격이 부지급될 수 있는 5가지 함정 조건을 사전에 분석·점검하도록 돕는 페이지다.
// 3. 이 페이지는 현재 육아휴직 중이거나 복귀를 앞둔 근로자가 향후 권고사직·계약만료 시 실업급여를 안전하게 수급하기 위해 휴직 전 근무일 누적·휴직 기간 분할·이직사유 입증 등 5가지 사전 점검을 정리하도록 돕는 페이지다.

export const spokesBatch58NewsChildcare: SpokePage[] = [
  // ─── 1. unemployment / unemployment-after-childcare-leave-eligibility (일반 진입형) ───
  {
    domain: 'unemployment',
    slug: 'unemployment-after-childcare-leave-eligibility',
    keyword: '육아휴직 후 실업급여 수급요건',
    questionKeyword: '육아휴직 끝나고 퇴사했어요. 실업급여 받을 수 있나요?',
    ctaKeyword: '육아휴직 후 실업급여 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '육아휴직 후 실업급여 — 수급요건 4가지 점검 | 로앤가이드',
      description:
        '육아휴직 종료 후 퇴사 시 18개월 기준기간 · 시행령 제60조 3년 캡 · 180일 피보험단위기간 산정 방식 4가지 점검 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"1년 6개월 육아휴직을 다 쓰고 복귀했는데, 회사 사정으로 권고사직 통보를 받았습니다. 휴직 기간이 길어 실업급여 받을 수 있을지, 휴직 기간은 어떻게 계산되는지 막막한 상황이에요." 「고용보험법」 제40조 제2항 제1호에 따르면 이직일 이전 18개월(기준기간) 동안 피보험단위기간이 합산해 180일 이상이어야 수급자격이 인정됩니다. 다만 같은 법 제41조 제3항과 「고용보험법 시행령」 제60조에 따르면 육아휴직 등으로 보수가 지급되지 않은 기간은 기준기간이 연장되되 그 한도는 3년으로 정해져 있어요. 뉴스1 2025.7.20 광주·전남 보도에 따르면 1년 이상 장기 육아휴직을 한 사례에서 3년 한도 적용 후에도 180일 산정이 되지 않아 부지급 처분을 받은 사례가 있어 본인 상황별로 자료 정리가 필요한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 육아휴직 후 실업급여 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 기준기간 18개월 · 3년 캡 · 180일 산정 · 이직사유 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기준기간 18개월 (제40조 제2항 제1호)</strong> — 이직일 직전 18개월이 원칙. 이 기간 안에 피보험단위기간이 누적 180일 이상이어야 수급자격 영역.</li>\n<li><strong>② 기준기간 연장 (제41조 제3항)</strong> — 육아휴직·질병휴직 등 보수 미지급 기간이 30일 이상 있는 경우 그 기간만큼 기준기간이 늘어나는 영역.</li>\n<li><strong>③ 시행령 제60조 — 연장 한도 3년</strong> — 다만 「고용보험법 시행령」 제60조에 따르면 위 연장은 최대 3년이 한도로 정해져 있어요. 1년 이상 장기 육아휴직 사례에서는 이 캡 적용 후에도 휴직 전 근무일이 적으면 180일 미달이 발생할 수 있는 영역.</li>\n<li><strong>④ 이직사유 코드</strong> — 육아휴직 후 권고사직·계약만료·자진퇴사 어느 경로인지에 따라 적용 트랙이 달라지는 영역. 자진퇴사라도 정당한 이직사유 인정 트랙은 별도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기준기간 18개월 + 3년 캡 + 피보험단위기간 180일은 같은 법령 안에서 작동하는 3개 톱니바퀴입니다. 1개라도 어긋나면 수급자격이 인정되지 않을 수 있어 휴직 직전 자료 정리가 핵심 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 육아휴직 후 실업급여 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 피보험단위기간 산정 → 이직확인서 → 수급자격 신청 → 거절 시 심사청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (퇴사 전·즉시)</strong> — 육아휴직 신청서·종료 확인서, 휴직 직전 12개월 급여명세서, 근로계약서·취업규칙 보존.</li>\n<li><strong>2단계 — 피보험단위기간 조회 (1주)</strong> — 고용보험 홈페이지(ei.go.kr) 또는 고용센터 1350에서 본인 피보험단위기간·이직사유 코드 사전 조회.</li>\n<li><strong>3단계 — 이직확인서 발급 (퇴사 후 14일 내)</strong> — 사업장에 이직확인서 정확 기재 요구. 휴직 사유·기간이 빠지면 정정 요청.</li>\n<li><strong>4단계 — 수급자격 신청 (퇴사일 12개월 내)</strong> — 워크넷 등록 + 고용센터 방문. 육아휴직 자료 + 18개월 산정표 함께 제출.</li>\n<li><strong>5단계 — 부지급 처분 시 심사청구 (90일 이내)</strong> — 처분 통지일로부터 90일 안에 고용보험심사위원회(www.ei.go.kr) 심사청구 가능. 무료, 변호사 없이도 진행할 수 있는 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">육아휴직 기간을 반영한 18개월·180일 산정을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴직 자료 + 임금·근태 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>육아휴직 신청서·확인서</strong> — 휴직 시작·종료일 명시 자료.</li>\n<li><strong>휴직 직전 12개월 급여명세서</strong> — 피보험단위기간 산정 기초.</li>\n<li><strong>근로계약서·취업규칙</strong> — 휴직 후 복귀 조건·계약 형태 확인.</li>\n<li><strong>이직확인서</strong> — 사업장 발급, 이직사유 코드 정확 기재 확인.</li>\n<li><strong>피보험자격 이력 내역서</strong> — 고용보험 사이트(ei.go.kr) 발급, 본인 가입·휴직 기간 일목요연.</li>\n<li><strong>퇴사 통보서·권고사직 합의서 (해당 시)</strong> — 이직사유 입증 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 고용보험 사이트의 \'피보험자격 이력 내역서\'에는 본인의 가입·휴직·이직 기록이 시간순으로 정리돼 있어, 신청 전 이 자료부터 확인하면 본인 사례가 18개월·180일·3년 캡 어느 영역에 해당하는지 가늠할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼·점검 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 갈리는 쟁점과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"휴직 기간만큼 자동 연장된다" 오해 점검</strong> — 「고용보험법 시행령」 제60조의 3년 한도가 적용돼 1년 6개월·2년 등 장기 휴직 사례에서는 캡 적용 후에도 휴직 전 근무일이 부족하면 180일 미달이 발생할 수 있는 영역.</li>\n<li><strong>"육아휴직은 정당한 이직사유" 오해 점검</strong> — 정당한 이직사유는 시행규칙 [별표 2] 트랙(사업장 사정·임금체불 등)이고, 18개월·180일 단위기간 산정 트랙은 별개. 두 트랙은 분리해 점검하는 영역.</li>\n<li><strong>수급기간 연장 신청 (4년 한도)</strong> — 육아·질병 등으로 즉시 구직 어려운 사례는 「고용보험법」 제48조 수급기간 연장 신청(최대 4년) 트랙이 별도. 이는 \'수급자격 인정 후\' 트랙이라 본 절차와 구분.</li>\n<li><strong>2025년 모성보호 트랙 검토</strong> — 고용노동부 안내에 따르면 모성보호급여(육아휴직급여 등) 트랙은 별도 운영. 실업급여와 중복·연계 여부 사전 확인 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 실업급여·기준기간 산정 무료 상담.</li>\n<li><strong>고용보험심사위원회 044-202-7896</strong> — 부지급 처분 심사청구 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 행정심판·행정소송 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '보도 사례 — 광주 3년 육아휴직 후 권고사직',
        summary:
          '뉴스1 2025.7.20 광주·전남 보도에 따르면 광주 지역에서 1년 이상 장기 육아휴직을 사용한 뒤 권고사직된 근로자가 실업급여 부지급 처분을 받은 사례가 보도됐습니다. 「고용보험법 시행령」 제60조는 육아휴직 등으로 인한 기준기간 연장의 한도를 3년으로 정하고 있어, 휴직 직전 누적 근무일이 충분치 않은 사례에서는 18개월 기준기간 안에 피보험단위기간 180일을 충족하지 못해 부지급으로 정리되는 사례가 있는 것으로 안내되고 있습니다. 다만 같은 법 제40조 제2항의 단위기간 산정 트랙과 시행규칙 [별표 2]의 정당한 이직사유 트랙은 분리되는 영역입니다.',
        takeaway: '본인 사례가 시행령 제60조 3년 캡 영역인지, 18개월 기준기간 안 피보험단위기간 산정 영역인지 분리해 점검하면 자료 정리·심사청구 트랙 선택이 명확해질 수 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '육아휴직 1년만 썼는데 실업급여 받을 수 있나요?',
        answer:
          '<strong>휴직 직전 누적 피보험단위기간이 충분하면 가능 영역입니다.</strong> 휴직 1년은 시행령 제60조의 3년 캡에 미치지 않아 18개월 기준기간이 그만큼 늘어나는 영역. 휴직 직전 6개월 이상 근무 정황이 자료로 남아있으면 180일 충족 가능성 검토.',
      },
      {
        question: '육아휴직 자체가 실업급여 거절 사유가 되나요?',
        answer:
          '<strong>휴직 자체는 거절 사유 아닌 영역입니다.</strong> 다만 휴직 기간이 길수록 시행령 제60조 3년 캡 적용 후에도 18개월 안에 180일 산정이 안 될 수 있어, 휴직 전 근무일 누적이 핵심 변수.',
      },
      {
        question: '휴직 후 자진퇴사도 받을 수 있나요?',
        answer:
          '<strong>정당한 이직사유 입증되면 검토 가능한 영역입니다.</strong> 시행규칙 [별표 2] 1호 사업장 사정·임금체불·질병 등 정당사유 트랙. 단순 자진퇴사는 일반적으로 어려운 영역이라, 사유별 자료 정리가 핵심.',
      },
      {
        question: '수급기간 연장 신청은 언제 하나요?',
        answer:
          '<strong>수급자격 인정 후, 즉시 구직 어려운 사정이 있을 때 신청하는 영역입니다.</strong> 「고용보험법」 제48조 수급기간 연장(최대 4년)은 출산·육아·질병 등 사정으로 12개월 안에 수급 어려운 사례를 위한 트랙. 본 절차와 구분되는 영역.',
      },
      {
        question: '부지급 처분 받았는데 다툴 수 있나요?',
        answer:
          '<strong>처분 통지일로부터 90일 안에 심사청구 가능한 영역입니다.</strong> 고용보험심사위원회 044-202-7896 무료 상담 + 본인 자료(휴직 신청서·이직확인서·근무일 자료) 정리해 청구. 거절 시 재심사위원회·행정소송 트랙도 열려 있는 영역.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 자격 종합 점검', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '180일 피보험단위기간 산정', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '실업급여 거절 심사청구 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '출산 후 육아휴직 정당이직', href: '/guide/unemployment/unemployment-pregnancy-maternity-just-cause' },
      { label: '권고사직 입증 방법', href: '/guide/unemployment/unemployment-recommended-resign-proof-method' },
    ],
  },

  // ─── 2. unemployment / unemployment-180days-trap-long-leave (함정 분석형) ───
  {
    domain: 'unemployment',
    slug: 'unemployment-180days-trap-long-leave',
    keyword: '장기 육아휴직 180일 함정 3년 캡',
    questionKeyword: '1년 넘는 육아휴직을 쓰면 실업급여 못 받는다는데 정말인가요?',
    ctaKeyword: '장기 휴직 180일 함정 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '장기 육아휴직 후 실업급여 — 180일 함정 5가지 | 로앤가이드',
      description:
        '「고용보험법 시행령」 제60조 3년 캡 메커니즘과 1년 이상 장기 육아휴직에서 180일 산정이 어긋나는 5가지 함정 조건 + 대안 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"육아휴직 2년을 쓰고 복귀하자마자 권고사직 통보를 받았습니다. 휴직 직전에는 7개월 정도 근무했는데, 고용센터에서 \'시행령 3년 캡 적용 후에도 180일이 부족하다\'고 안내받아 막막한 상황이에요." 「고용보험법」 제40조 제2항 제1호는 이직일 이전 18개월 안에 피보험단위기간 180일 이상을 수급요건으로 정하고, 같은 법 제41조 제3항·「고용보험법 시행령」 제60조에 따르면 육아휴직으로 보수 미지급된 기간은 기준기간이 연장되되 그 한도는 3년으로 명문 규정돼 있습니다. 뉴스1 2025.7.20 광주·전남 보도에 따르면 1년 이상 장기 휴직 사례에서 이 캡이 적용된 후에도 180일 미달로 부지급 처분을 받은 사례가 있어, 휴직 기간이 길어질수록 180일 산정이 어긋날 수 있는 5가지 함정 조건을 사전에 분석해두는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 180일 산정이 어긋나는 5가지 함정 조건',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴직 기간·휴직 직전 근무일·중복휴직·시행령 캡·산정 단위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴직 기간 1.5년 초과</strong> — 휴직 1.5년 이상이면 18개월 기준기간 자체가 휴직으로 가득 차 \'근무한 일\'이 거의 없는 영역. 시행령 제60조 3년 캡 적용으로 기준기간이 늘어나도 그 안에 근무일이 충분하지 않으면 180일 산정 어려운 영역.</li>\n<li><strong>② 휴직 직전 근무일 6개월 미만</strong> — 휴직 직전 근무일이 6개월 미만이면 캡 적용 후에도 누적이 180일에 미달할 수 있는 영역. 휴직 직전 근무일이 핵심 변수.</li>\n<li><strong>③ 출산휴가·육아휴직 연속 사용</strong> — 출산휴가 90일 + 육아휴직 1년 6개월 = 약 1년 9개월 연속 휴직 사례. 누적 휴직 기간이 캡 한도에 근접·초과하는 영역.</li>\n<li><strong>④ 시행령 제60조 3년 한도 명문</strong> — 「고용보험법 시행령」 제60조에 따르면 연장 한도는 3년이 명시돼 있어, 휴직 기간이 길어도 자동으로 무한 연장되지 않는 영역.</li>\n<li><strong>⑤ 산정 단위 \'일\' 기준</strong> — 피보험단위기간은 \'유급 근로일\'이 단위. 무급휴일·결근일은 산정에서 빠지는 영역이라 출근일 누적이 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5개 함정이 결합될수록 180일 미달 가능성이 커지는 영역입니다. 본인 사례가 어느 함정에 해당하는지 사전 점검 → 휴직 직전 근무일 누적 + 휴직 기간 분할 + 대안 트랙 검토 순으로 정리.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 함정 회피 + 대안 트랙 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인 자료 진단 → 18개월 산정표 작성 → 대안 트랙 비교 → 신청 → 거절 시 심사청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 가입·휴직 이력 진단 (즉시)</strong> — 고용보험 \'피보험자격 이력 내역서\' 발급(ei.go.kr). 가입·휴직·이직 기록 시간순 확인.</li>\n<li><strong>2단계 — 18개월 산정표 작성 (1주)</strong> — 이직일 직전 18개월 + 시행령 제60조 3년 캡 적용 → 캡 후 기준기간 안 유급 근로일 일수 계산. 180일 도달 여부 확인.</li>\n<li><strong>3단계 — 대안 트랙 비교 (1~2주)</strong> — 180일 미달 시 ① 수급기간 연장 신청(제48조, 최대 4년), ② 모성보호급여 트랙(육아휴직급여 등), ③ 정당한 이직사유 트랙(시행규칙 [별표 2]) 비교 검토.</li>\n<li><strong>4단계 — 수급자격 신청 (퇴사일 12개월 내)</strong> — 워크넷 등록 + 고용센터 방문. 본인 산정표·대안 트랙 자료 함께 제출.</li>\n<li><strong>5단계 — 부지급 처분 시 심사청구 (90일 이내)</strong> — 고용보험심사위원회 무료 청구. 시행령 제60조 캡 적용 사실관계 다툼 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">5가지 함정 조건과 대안 트랙을 본인 사례에 맞춰 AI가 정리해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 산정 자료 + 대안 트랙 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피보험자격 이력 내역서</strong> — ei.go.kr 발급. 가입·휴직·이직 시간순 정리.</li>\n<li><strong>육아휴직·출산휴가 신청서·확인서</strong> — 휴직 시작·종료일 명문 자료.</li>\n<li><strong>휴직 직전 18~24개월 급여명세서</strong> — 유급 근로일 산정.</li>\n<li><strong>이직확인서</strong> — 사업장 발급, 이직사유 코드 점검.</li>\n<li><strong>본인 작성 18개월 산정표</strong> — 시행령 제60조 캡 적용 후 유급 근로일 누적 계산.</li>\n<li><strong>대안 트랙 자료 (해당 시)</strong> — 수급기간 연장 사유 자료, 정당이직 자료, 모성보호급여 신청 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시행령 제60조의 3년 캡은 \'기준기간을 최대 3년까지 늘려준다\'는 규정. 이는 \'휴직 기간 자체를 피보험단위기간으로 인정한다\'는 의미가 아니므로, 늘어난 기준기간 안에서도 \'유급 근로일\'이 별도 누적돼야 180일 영역 도달 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼·점검 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 갈리는 쟁점과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"휴직 기간이 피보험단위기간에 들어간다" 오해 점검</strong> — 휴직 기간은 \'기준기간 연장\' 영역이고, \'피보험단위기간(유급 근로일)\' 영역과는 분리되는 영역. 두 개념 혼동이 가장 흔한 함정.</li>\n<li><strong>"수급기간 연장 신청과 수급자격은 다르다" 점검</strong> — 「고용보험법」 제48조의 수급기간 연장(최대 4년)은 \'수급자격 인정 후\'에 작동하는 트랙. 자격 자체가 인정되지 않은 사례에는 적용되지 않는 영역.</li>\n<li><strong>"모성보호급여로 우회 가능한가" 검토</strong> — 고용노동부 안내에 따르면 모성보호급여(육아휴직급여·출산전후휴가급여)는 별도 운영. 실업급여와 중복·연계 여부 사전 확인 영역.</li>\n<li><strong>심사청구·행정소송 다툼 트랙</strong> — 시행령 제60조 캡 적용 사실관계 다툼은 심사청구 → 재심사 → 행정소송 트랙으로 점검 가능. 「고용보험법」 제87조 이하 절차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 산정 방식·대안 트랙 무료 상담.</li>\n<li><strong>고용보험심사위원회 044-202-7896</strong> — 부지급 처분 심사청구 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 행정심판·행정소송 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '보도 사례 — 광주 장기 육아휴직 후 180일 미달 부지급',
        summary:
          '뉴스1 2025.7.20 광주·전남 보도에 따르면 광주 지역에서 1년 이상 장기 육아휴직을 사용한 뒤 권고사직된 근로자가 실업급여 부지급 처분을 받은 사례가 보도됐습니다. 「고용보험법 시행령」 제60조의 기준기간 연장 한도가 3년으로 명문 규정돼 있어, 휴직 기간이 길고 휴직 직전 근무일이 짧은 결합 사례에서는 캡 적용 후에도 18개월 안에 피보험단위기간 180일을 채우지 못해 부지급으로 정리되는 사례가 있는 것으로 안내되고 있습니다. 다만 「고용보험법」 제48조 수급기간 연장 트랙과 시행규칙 [별표 2] 정당한 이직사유 트랙은 분리된 영역이라 사례별 대안 검토가 가능한 영역입니다.',
        takeaway: '본인 사례에서 휴직 기간·휴직 직전 근무일·시행령 캡 3개 변수를 18개월 산정표로 시각화하면, 180일 미달 위험·대안 트랙 우선순위가 명확해지는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '시행령 3년 캡은 정확히 어떻게 작동하나요?',
        answer:
          '<strong>「고용보험법 시행령」 제60조에 따르면 보수 미지급 기간만큼 기준기간이 늘어나되 그 한도는 3년으로 정해져 있습니다.</strong> 18개월 기준기간 + 휴직으로 인한 연장(최대 1년 6개월) = 최대 3년까지가 명문 규정 영역.',
      },
      {
        question: '휴직 직전 근무일이 짧으면 무조건 못 받나요?',
        answer:
          '<strong>못 받을 수 있어요. 다만 단정은 어려운 영역입니다.</strong> 휴직 직전 + 휴직 후 복귀 근무일까지 누적 180일 도달 가능성을 본인 산정표로 점검 필요. 1350·132 무료 상담 활용 가능.',
      },
      {
        question: '수급기간 연장 신청은 어떤 사례에 가능한가요?',
        answer:
          '<strong>「고용보험법」 제48조에 따라 출산·육아·질병 등으로 즉시 구직 어려운 사례에 신청 가능 영역입니다.</strong> 다만 \'수급자격 인정 후\' 트랙이라 자격 자체가 부지급된 사례는 적용 어려운 영역.',
      },
      {
        question: '모성보호급여로 대신 받을 수 있나요?',
        answer:
          '<strong>고용노동부 안내에 따르면 별도 트랙으로 운영되고 있습니다.</strong> 육아휴직급여(휴직 중 지급)·출산전후휴가급여 등이 모성보호급여 영역. 실업급여와 다른 트랙이라 중복·연계 여부는 1350 사전 확인 필요.',
      },
      {
        question: '심사청구로 결과가 달라질 수 있나요?',
        answer:
          '<strong>사실관계·산정 오류가 있으면 결과가 달라질 수 있어요.</strong> 휴직 기간 산정 오류·이직사유 코드 정정·유급 근로일 누락 등 검토 가능 영역. 무료, 변호사 없이 본인 청구 가능.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '180일 피보험단위기간 산정', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '출산 후 육아휴직 정당이직', href: '/guide/unemployment/unemployment-pregnancy-maternity-just-cause' },
      { label: '실업급여 거절 심사청구 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '실업급여 자격 종합 점검', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '임신 고위험 휴직 자진퇴사', href: '/guide/unemployment/unemployment-pregnancy-high-risk-quit' },
    ],
  },

  // ─── 3. unemployment / unemployment-childcare-leave-recommend-resignation-protection (사전 예방형) ───
  {
    domain: 'unemployment',
    slug: 'unemployment-childcare-leave-recommend-resignation-protection',
    keyword: '육아휴직 후 권고사직 실업급여 사전 점검',
    questionKeyword: '육아휴직 중인데, 복귀 후 권고사직 가능성 있어요. 실업급여 안전하게 받으려면 미리 뭘 점검해야 하나요?',
    ctaKeyword: '휴직 중 사전 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '육아휴직 후 권고사직 — 실업급여 미리 확인할 5가지 | 로앤가이드',
      description:
        '육아휴직 중·복귀 직전에 휴직 전 근무일 누적·휴직 분할·이직사유 입증 등 5가지를 사전 점검해 실업급여 부지급 위험을 줄이는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"지금 육아휴직 1년차인데, 회사가 흔들리고 있어 복귀 후 권고사직 가능성이 높습니다. 실업급여를 안전하게 받으려면 휴직 중·복귀 직전에 무엇을 미리 점검해야 할지 정리하고 싶어요." 「고용보험법」 제40조 제2항 제1호는 이직일 이전 18개월 안에 피보험단위기간 180일 이상을 수급요건으로 정하고, 같은 법 제41조 제3항·「고용보험법 시행령」 제60조에 따르면 보수 미지급 기간 연장은 최대 3년이 한도로 정해져 있어요. 뉴스1 2025.7.20 광주·전남 보도에 따르면 장기 휴직 직전 근무일이 짧으면 캡 적용 후에도 180일 미달 사례가 있어, 휴직 중에 미리 5가지를 점검해두면 부지급 위험을 줄일 수 있는 영역입니다. 본 페이지는 휴직 중·복귀 직전 사용자를 위한 사전 점검 트랙을 정리합니다.</p>',
    sections: [
      {
        title: 'Q. 휴직 중·복귀 직전 5가지 사전 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴직 직전 근무일 누적 · 휴직 기간 분할 · 이직사유 입증 · 이직확인서 · 대안 트랙 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴직 직전 근무일 누적 점검</strong> — 휴직 직전 6개월 이상 유급 근로일 확보가 안전. ei.go.kr \'피보험자격 이력 내역서\'로 본인 가입·근무 기록 확인.</li>\n<li><strong>② 휴직 기간 분할 검토</strong> — 「남녀고용평등법」 제19조 육아휴직은 분할 사용이 가능한 영역. 1년을 한 번에 쓰지 않고 분할하면 사이에 근무일이 누적돼 18개월·180일 산정에 유리할 수 있는 영역.</li>\n<li><strong>③ 권고사직 사유 입증 자료 보존</strong> — 복귀 후 권고사직이 예상되면 사직 권유 메일·카톡·면담 녹취 보존. 이직확인서 사유 코드 \'권고사직\' 정확 기재 요구.</li>\n<li><strong>④ 이직확인서 14일 내 발급 점검</strong> — 「고용보험법 시행령」 제7조에 따라 사업장은 이직 후 10일 내 이직확인서 발급 의무 영역. 무대응 시 고용센터 1350 신고 트랙.</li>\n<li><strong>⑤ 대안 트랙 사전 검토</strong> — 180일 미달 위험 시 ① 수급기간 연장 신청(제48조, 최대 4년), ② 모성보호급여(육아휴직급여 등), ③ 정당한 이직사유 트랙 사전 비교.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'복귀하고 나서\'가 아니라 \'휴직 중·복귀 직전\'에 5가지를 점검해두면 부지급 위험 사전 차단 + 권고사직 입증 자료 누적 + 대안 트랙 사전 준비가 가능한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 휴직 중·복귀 직전 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력 내역서 발급 → 산정표 작성 → 휴직 분할 검토 → 권고사직 자료 보존 → 신청 준비 순서로 진행됩니다(고용노동부 안내 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 피보험자격 이력 내역서 발급 (즉시)</strong> — ei.go.kr 또는 고용센터 1350. 본인 가입·휴직·이직 기록 시간순 확인.</li>\n<li><strong>2단계 — 18개월 산정표 작성 (1주)</strong> — 예상 이직일 기준 18개월 + 시행령 제60조 3년 캡 적용 → 유급 근로일 일수 계산. 180일 도달 여부 사전 진단.</li>\n<li><strong>3단계 — 휴직 기간 분할 검토 (휴직 중)</strong> — 「남녀고용평등법」 제19조 분할 사용 검토. 1년을 6+6개월로 나누면 사이에 근무일이 누적될 수 있는 영역.</li>\n<li><strong>4단계 — 권고사직 자료 보존 (복귀 직전·복귀 후)</strong> — 사직 권유 메일·카톡·면담 녹취·인사평가 자료 보존. 이직확인서 사유 코드 정확 기재 요구.</li>\n<li><strong>5단계 — 신청 준비 + 대안 트랙 사전 검토</strong> — 워크넷 등록·고용센터 사전 상담(1350). 180일 미달 위험 시 수급기간 연장·모성보호급여 트랙 비교.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">휴직 중 5가지 사전 점검을 본인 사례에 맞춰 AI가 정리해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사전 점검 자료 + 권고사직 입증 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피보험자격 이력 내역서</strong> — ei.go.kr 발급. 가입·휴직·이직 시간순 자료.</li>\n<li><strong>육아휴직 신청서·연장·분할 신청서</strong> — 휴직 시작·종료·분할 일자 명문 자료.</li>\n<li><strong>휴직 직전 12~24개월 급여명세서</strong> — 유급 근로일 누적 산정 자료.</li>\n<li><strong>본인 작성 18개월 산정표</strong> — 시행령 제60조 캡 적용 후 유급 근로일 누적.</li>\n<li><strong>사직 권유 메일·카톡·면담 자료</strong> — 권고사직 입증 핵심.</li>\n<li><strong>인사평가·복귀 직무배치 자료</strong> — 부당한 직무 변경·평가 정황 자료.</li>\n<li><strong>이직확인서</strong> — 사업장 발급, 사유 코드 \'권고사직\' 정확 기재 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 휴직 직전 6개월 누적 근무일이 \'주 5일×24주\' 정황이면 약 120일. 여기에 복귀 후 60일 이상 근무가 결합되면 시행령 제60조 캡 적용 18개월 안에 180일 영역 도달 가능성이 검토되는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼·점검 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 갈리는 쟁점과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"휴직 기간 분할은 가능한가" 점검</strong> — 「남녀고용평등법」 제19조에 따라 육아휴직은 1회 분할 사용이 가능한 영역. 회사 동의 없이 근로자 청구만으로 분할 가능 영역.</li>\n<li><strong>"휴직 중 사직 권유는 부당한가" 점검</strong> — 「남녀고용평등법」 제19조 제3항은 육아휴직을 이유로 한 해고·불리한 처우를 금지. 휴직 중·복귀 직후 사직 권유는 별도 다툼 트랙(노동위원회 부당해고 구제) 검토 가능 영역.</li>\n<li><strong>"이직확인서 사유 코드 정정" 점검</strong> — 사업장이 \'자진퇴사\'로 기재했더라도 권고사직 자료가 있으면 고용센터에 정정 신청 트랙 열려 있는 영역.</li>\n<li><strong>대안 트랙 사전 비교</strong> — 180일 미달 사전 위험이 있는 사례는 ① 「고용보험법」 제48조 수급기간 연장(최대 4년), ② 모성보호급여, ③ 시행규칙 [별표 2] 정당이직 사유 사전 비교 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 휴직·실업급여 사전 상담.</li>\n<li><strong>고용보험심사위원회 044-202-7896</strong> — 향후 부지급 처분 시 심사청구 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 권고사직·부당해고 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '보도 사례 — 광주 장기 휴직 후 180일 미달 부지급',
        summary:
          '뉴스1 2025.7.20 광주·전남 보도에 따르면 광주 지역에서 1년 이상 장기 육아휴직 후 권고사직된 근로자가 실업급여 부지급 처분을 받은 사례가 보도됐습니다. 「고용보험법 시행령」 제60조의 3년 한도 적용 후에도 휴직 직전 근무일이 짧은 결합 사례에서는 18개월 안에 피보험단위기간 180일 산정이 어려운 사례가 있는 것으로 안내되고 있습니다. 휴직 중·복귀 직전에 본인 가입 이력·근무일 누적·휴직 분할 가능성·권고사직 자료를 사전 점검하면 부지급 위험을 줄이는 영역으로 검토되고 있습니다.',
        takeaway: '\'복귀 후 사후 대응\'이 아니라 \'휴직 중 사전 점검\'으로 무게중심을 옮기면 18개월·180일 산정 + 권고사직 입증 + 대안 트랙 3개 영역을 미리 정리할 수 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '육아휴직 분할 사용은 회사 동의가 필요한가요?',
        answer:
          '<strong>「남녀고용평등법」 제19조에 따라 1회 분할 사용은 근로자 청구권 영역입니다.</strong> 회사 동의 없이 분할 가능 영역. 분할 시 사이에 근무일이 누적돼 18개월·180일 산정에 유리할 수 있어요.',
      },
      {
        question: '휴직 중에 회사가 사직 권유하면 어떻게 하나요?',
        answer:
          '<strong>「남녀고용평등법」 제19조 제3항은 육아휴직을 이유로 한 해고·불리한 처우를 금지합니다.</strong> 사직 권유 메일·카톡·녹취 자료 보존 + 1350·132 무료 상담 + 노동위 부당해고 구제 트랙 검토 가능 영역.',
      },
      {
        question: '휴직 직전 근무일이 짧으면 미리 보강할 방법 있나요?',
        answer:
          '<strong>휴직 분할 + 복귀 후 일정 기간 근무 누적이 가장 직접적인 영역입니다.</strong> 다른 트랙으로는 모성보호급여·수급기간 연장 신청(자격 인정 후) 사전 비교. 1350 무료 상담으로 본인 사례 사전 진단 가능.',
      },
      {
        question: '복귀 후 즉시 권고사직 통보받으면 어떻게 하나요?',
        answer:
          '<strong>이직확인서 사유 코드 \'권고사직\' 정확 기재 요구 + 권고사직 자료 보존이 핵심 영역입니다.</strong> 자진퇴사로 기재된 경우 고용센터 정정 신청 + 노동위 부당해고 구제 트랙 결합 검토.',
      },
      {
        question: '180일 미달 위험을 미리 진단할 방법은요?',
        answer:
          '<strong>고용보험 \'피보험자격 이력 내역서\' + 본인 18개월 산정표 작성으로 사전 진단 가능 영역입니다.</strong> 1350 무료 상담에서 시행령 제60조 캡 적용 후 산정 결과를 미리 확인할 수 있어요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '권고사직 입증 방법', href: '/guide/unemployment/unemployment-recommended-resign-proof-method' },
      { label: '180일 피보험단위기간 산정', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '실업급여 자격 종합 점검', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '출산 후 육아휴직 정당이직', href: '/guide/unemployment/unemployment-pregnancy-maternity-just-cause' },
      { label: '육아휴직 후 부당해고 구제', href: '/guide/dismissal/dismissal-maternity-leave-return-immediate-fired' },
    ],
  },
];
