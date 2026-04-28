import { SpokePage } from '../spoke-pages';

// batch48 defame+jeonse 5개
//
// 고유 존재 이유:
// 1. 이 페이지는 SNS·블로그·맘카페에 사실과 다른 거짓 후기를 작성해 명예훼손 혐의를 받고 있다면, 가해자 입장에서 위법성조각·합의·삭제 절차를 단계별로 정리하도록 돕는 페이지다.
// 2. 이 페이지는 회사 단톡방·업무 메신저에서 욕설을 들은 직장인이 모욕죄와 명예훼손을 구분하고 회사 내부 절차·외부 고소 경로를 함께 검토하도록 돕는 페이지다.
// 3. 이 페이지는 사망한 가족에 대한 허위 게시글로 고통받는 유족이 사자(死者) 명예훼손 형사 고소·삭제 청구·민사 손해배상 절차를 단계별로 진행하도록 돕는 페이지다.
// 4. 이 페이지는 보증금이 반환되지 않은 상태에서 이사를 가야 하는 임차인이 임차권등기명령·내용증명·소액심판 절차를 순서대로 정리해 대항력을 잃지 않고 이사하도록 돕는 페이지다.
// 5. 이 페이지는 전세 계약 체결 전 깡통전세 위험을 사전 점검하려는 예비 임차인이 등기부등본·시세·선순위 보증금 비율을 항목별로 검토하도록 돕는 페이지다.

export const spokesBatch48DefameJeonse: SpokePage[] = [
  // ─── 1. defamation / false-review-perpetrator-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-false-review-perpetrator-defense',
    keyword: '거짓 후기 명예훼손 가해자 대응',
    questionKeyword: '사실과 다른 후기를 올렸다가 명예훼손 고소를 당했어요',
    ctaKeyword: '거짓 후기 명예훼손 혐의 대응 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '거짓 후기 명예훼손 혐의 대응 5단계 절차 | 로앤가이드',
      description:
        '사실과 다른 후기를 작성해 명예훼손 혐의를 받고 있다면 삭제·합의·진실성 항변 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"감정이 격해서 사실과 약간 다른 후기를 올렸는데 가게 사장님이 고소하셨어요"라는 상담이 늘고 있습니다. 거짓이 일부 섞인 후기는 진실성 항변이 흔들릴 수 있어 빠른 삭제·합의 검토가 핵심입니다. 사실과 다르게 신고되었다면 원칙적으로 부인하기보다는 표현의 어떤 부분이 사실과 다른지 정리하고, 위법성조각 가능성과 합의 시점을 함께 점검해보는 것이 좋습니다.</p>',
    sections: [
      {
        title: '거짓 후기 명예훼손 혐의 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 형사 상담 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 내용 객관적 분석 (즉시)</strong> — 작성한 후기를 문장 단위로 나눠 사실/의견/허위로 분류. "맛이 별로다"는 의견(처벌 어려움), "위생 검사에서 적발됐다"는 사실 적시(허위면 가중처벌).</li>\n<li><strong>2단계 — 삭제 또는 정정 (24시간 내 권장)</strong> — 허위 부분을 직접 삭제·수정. 단, 삭제만으로 형사 책임이 사라지지는 않으니 캡처본을 본인도 보관해 진실성 항변에 활용.</li>\n<li><strong>3단계 — 변호인 상담 또는 KLAC(132) 무료 상담</strong> — 형법 제310조 위법성조각(진실성+공익성) 항변 가능성, 정보통신망법 제70조(비방 목적) 적용 여부 검토.</li>\n<li><strong>4단계 — 합의 시도</strong> — 경찰 송치 전 합의가 처분에 유리하게 반영되는 경향. 사과문·삭제 확인·합의금 조건을 정리한 합의서 작성.</li>\n<li><strong>5단계 — 경찰 조사 출석</strong> — 진술 일관성 유지 + 진실이라 믿었던 근거(영수증·메시지·목격자) 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 항변 가능성과 합의 시점을 단계별로 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">명예훼손 대응 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 진실성·공익성 항변 검토',
        content:
          '<p><strong style="color:#1e3a5f">형법 제310조 위법성조각 요건을 충족하면 사실 적시 명예훼손도 다툴 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 후기 내용이 진실이거나 진실이라 믿을 상당한 이유가 있어야 함. 일부 거짓이 섞이면 핵심 문장의 진실성이 흔들릴 수 있음.</li>\n<li><strong>공익성</strong> — 다른 소비자의 알 권리·선택권에 기여하는 후기는 공익성 인정 검토 가능. 단순 감정 폭로·악의적 평점 테러는 공익성 부정 위험.</li>\n<li><strong>비방 목적 부재</strong> — 정보통신망법 제70조는 비방 목적을 별도 요건으로 둠. 사실 정보 제공 의도가 주된 동기였다면 비방 목적 부정 항변 가능.</li>\n<li><strong>준비 자료</strong> — 영수증·서비스 받은 사진·대화 캡처·동행자 진술 등 후기에 적힌 사실의 근거 자료를 시간 순으로 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "감정적으로 과장한 부분도 사실"이라고 우기면 진실성 전체가 무너질 수 있습니다. 사실/감정/추측을 분리해 인정할 부분은 솔직히 인정하는 것이 항변에 유리합니다.</blockquote>',
      },
      {
        title: '합의 진행 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">합의는 처분 수위에 영향을 미칠 수 있으나 조건을 명확히 해야 합니다.</strong></p>\n<ul>\n<li><strong>합의금 단정 금지</strong> — 사례별 차이가 크며 후기 전파 범위·피해 정도에 따라 수십만원~수백만원 수준이 자주 보입니다. 협상으로 결정.</li>\n<li><strong>합의서 필수 조항</strong> — 후기 삭제 확인·재작성 금지·합의금 액수·고소 취하 의사·재게시 시 위약금 조항.</li>\n<li><strong>경찰 송치 전 합의</strong> — 송치 전 합의는 불기소 처분(혐의 없음·기소유예) 결정에 참작될 수 있습니다.</li>\n<li><strong>비반의사불벌죄 주의</strong> — 사실적시 명예훼손(형법 제307조 제1항)은 반의사불벌죄로 합의로 처벌 면제 가능. 허위사실(제2항)·정보통신망법은 반의사불벌죄 아님.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의 후에도 동일 후기를 다른 플랫폼에 다시 올리면 새 명예훼손 혐의가 별도로 발생할 수 있습니다. 합의 시점에 모든 플랫폼 게시물을 일괄 삭제하세요.</blockquote>',
      },
      {
        title: '경찰 조사·송치 단계별 대응',
        content:
          '<p><strong style="color:#1e3a5f">사실과 다르게 신고되었다면 단계별 진술 전략이 중요합니다.</strong></p>\n<ul>\n<li><strong>출석 통보 수령 후</strong> — 즉시 변호인 또는 KLAC(132) 상담. 진술 거부권·변호인 동석권 안내받기.</li>\n<li><strong>경찰 진술</strong> — 후기 작성 동기·근거 자료·작성 당시 인식을 일관되게 진술. 표현이 과장됐다면 그 부분만 인정하고 사실 부분은 분리해 설명.</li>\n<li><strong>검찰 송치</strong> — 송치 후에도 합의 가능. 검찰 단계에서 진실성·공익성 항변을 정리한 의견서 제출 검토.</li>\n<li><strong>처분 결과</strong> — 불기소(혐의 없음·증거 불충분·기소유예), 약식기소(벌금), 정식기소 단계별로 다툴 소지가 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 조사 전 상대방(고소인)에게 직접 연락해 항의·협박성 발언을 하면 추가 혐의(협박·모욕)가 붙을 수 있습니다. 합의 시도는 변호인이나 제3자를 통하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법상 비방 목적 판단 기준',
        summary:
          '대법원 2022도699 사건(대법원, 2024.04.18 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄의 구성요건 중 비방할 목적이 있는지와 드러낸 사실이 사회적 평가를 저하시키는지는 행위자의 주요 동기·표현 방식·표현 내용을 종합 고려해야 한다고 판시했습니다.',
        takeaway:
          '거짓 후기 사건도 비방 목적이 부정되거나 공익성 동기가 인정되면 다툴 소지가 있어, 항변 자료를 체계적으로 준비하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '후기 일부만 거짓인 경우에도 명예훼손이 성립되나요?',
        answer:
          '<strong>핵심 문장이 거짓이면 성립될 수 있습니다.</strong> 다만 핵심 사실은 진실이고 일부 표현만 과장됐다면 진실성 항변이 가능하니 문장별로 분류해두는 것이 중요해요.',
      },
      {
        question: '후기를 즉시 삭제하면 처벌을 피할 수 있나요?',
        answer:
          '<strong>삭제만으로 처벌이 자동 면제되지는 않습니다.</strong> 다만 피해 최소화 노력으로 참작 사유가 되며, 합의와 결합되면 불기소 처분 가능성이 높아져요.',
      },
      {
        question: '익명으로 올렸어도 신원이 드러나나요?',
        answer:
          '<strong>플랫폼은 법원·수사기관 협조로 IP·계정 정보를 제공할 수 있습니다.</strong> 익명이라도 결국 특정될 가능성이 높으니 부인보다는 정확한 사실 정리가 우선이에요.',
      },
      {
        question: '합의금은 보통 얼마 수준에서 결정되나요?',
        answer:
          '<strong>사례별로 차이가 크지만 수십만원~수백만원 수준이 자주 보입니다.</strong> 후기 전파 범위·피해 정도·재게시 위험에 따라 협상으로 결정돼요.',
      },
      {
        question: '벌금형이 나오면 전과가 남나요?',
        answer:
          '<strong>벌금형도 형사처벌이라 전과 기록이 남습니다.</strong> 다만 일정 기간 후 실효되며, 기소유예·불기소 처분으로 갈 수 있도록 합의·항변 준비를 신중히 하는 것이 좋아요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 위법성조각사유 총정리', href: '/guide/defamation/defamation-illegality-exception' },
      { label: '잡플래닛 후기 명예훼손 혐의 대응', href: '/guide/defamation/defamation-job-review-app-defense' },
      { label: '명예훼손 합의금 협상 기준', href: '/guide/defamation/defamation-settlement-amount-standard' },
      { label: '온라인 명예훼손 형사 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '명예훼손 증거 수집 방법', href: '/guide/defamation/defamation-evidence-collection' },
    ],
  },

  // ─── 2. defamation / company-chat-insult-vs-defamation ───
  {
    domain: 'defamation',
    slug: 'defamation-company-chat-insult-vs-defamation',
    keyword: '회사 단톡방 욕설 모욕 명예훼손 구분',
    questionKeyword: '회사 단톡방에서 욕을 들었는데 모욕인가요 명예훼손인가요?',
    ctaKeyword: '직장 단톡방 욕설 형사 고소 가능성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '회사 단톡방 욕설 모욕 vs 명예훼손 5가지 구분 | 로앤가이드',
      description:
        '회사 업무 단톡방에서 욕설·험담을 들었다면 모욕죄와 명예훼손죄 차이, 형사 고소·내부 신고 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"부서 단톡방에서 팀장이 제 이름을 직접 거명하면서 욕을 했어요. 캡처는 있는데 모욕인지 명예훼손인지부터 헷갈립니다." 직장 메신저 욕설은 모욕죄와 명예훼손죄 둘 다 검토 대상이며, 어떤 죄로 가느냐에 따라 합의·고소·증거 요건이 달라집니다. 단순 욕설인지 사실 적시인지 구분이 첫 단계입니다.</p>',
    sections: [
      {
        title: 'Q. 모욕죄와 명예훼손죄는 어떻게 다른가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실 적시 여부가 핵심 갈림길입니다.</strong></p>\n<ul>\n<li><strong>모욕죄(형법 제311조)</strong> — 사실을 적시하지 않고 단순 추상적 가치판단·욕설로 사회적 평가를 저하. "멍청이", "쓰레기", "또라이" 같은 인격 비하 표현. 1년 이하 징역·200만원 이하 벌금.</li>\n<li><strong>명예훼손죄(형법 제307조)</strong> — 구체적 사실 적시로 사회적 평가 저하. "○○씨가 회삿돈 횡령했다"처럼 검증 가능한 사실. 사실 적시 2년 이하·허위 5년 이하.</li>\n<li><strong>친고죄 vs 반의사불벌죄</strong> — 모욕죄는 친고죄(피해자 고소 필수). 사실적시 명예훼손은 반의사불벌죄(처벌 의사 없으면 처벌 X). 허위사실 명예훼손·정보통신망법은 친고죄·반의사불벌죄 모두 아님.</li>\n<li><strong>고소 기간</strong> — 친고죄·반의사불벌죄는 범인을 안 날로부터 6개월 내 고소가 원칙입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 같은 발언이라도 모욕·명예훼손 모두 성립할 수 있으니 두 가지를 함께 검토하세요.</blockquote>',
      },
      {
        title: 'Q. 단톡방이 작은 인원수여도 공연성이 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 인원수보다 전파 가능성이 핵심입니다.</strong></p>\n<ul>\n<li><strong>전파 가능성 이론</strong> — 대법원은 소수에게 발언했더라도 그 사람들이 불특정 다수에게 전파할 가능성이 객관적으로 인정되면 공연성을 인정해왔습니다.</li>\n<li><strong>업무 단톡방</strong> — 부서원 5~10명 단톡방도 다른 동료에게 전파 가능성이 있어 공연성이 인정될 소지가 큽니다.</li>\n<li><strong>1:1 메시지</strong> — 1:1 전송은 공연성이 부족해 성립이 어렵지만, 수신자가 제3자에게 전달하면 새로운 책임이 발생할 수 있습니다.</li>\n<li><strong>비공개 메모/일기장</strong> — 본인만 보는 공간은 공연성 부정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 단톡방 욕설 상황, AI로 먼저 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">모욕·명예훼손 성립 여부와 고소 가능성을 AI가 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">단톡방 욕설 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회사 내부 신고 + 외부 고소 병행',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부·경찰 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시)</strong> — 단톡방 캡처(시간·발신자·내용 포함), 메시지 백업, 동석한 동료 진술서 확보. 단톡방 나가기 전에 백업 필수.</li>\n<li><strong>2단계 — 회사 내부 신고 (직장 내 괴롭힘)</strong> — 근로기준법 제76조의2(직장 내 괴롭힘 금지). 고충처리위원회 또는 사업주에게 서면 신고. 신고자 보호 의무 발생.</li>\n<li><strong>3단계 — 고용노동부 진정 (1350)</strong> — 회사가 조치 미이행 시 관할 지방고용노동청에 진정. 사업주가 조사·조치 의무 위반 시 1천만원 이하 과태료.</li>\n<li><strong>4단계 — 경찰 형사 고소</strong> — 모욕죄·명예훼손 고소장 + 캡처 증거 + 진술서. 친고죄(모욕)는 6개월 내 고소.</li>\n<li><strong>5단계 — 민사 손해배상 청구</strong> — 형사 결과와 별개로 민법 제750조 불법행위 위자료 청구 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 단톡방을 즉시 나가버리면 이후 추가 메시지를 확보할 수 없고, 백업 없이 나가면 메시지 자체가 사라질 수 있습니다. 캡처·내보내기 기능으로 백업한 뒤 나가는 것이 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 고소했다고 회사에서 불이익을 줄까 걱정돼요',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고자 보호 제도가 있어 부당한 불이익은 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>근로기준법 제76조의3</strong> — 직장 내 괴롭힘 신고 후 해고·전보·징계 등 불리한 처우 시 3년 이하 징역·3천만원 이하 벌금. 입증 책임 일부가 회사에 있습니다.</li>\n<li><strong>지방노동위원회 구제신청</strong> — 부당해고·부당전보 발생 시 3개월 내 구제신청.</li>\n<li><strong>익명 신고</strong> — 일부 회사는 익명 핫라인 운영. 다만 형사 고소는 본인 명의 필수.</li>\n<li><strong>증거 일관성 유지</strong> — 신고 전후 업무평가·근태 기록도 보관해 보복성 조치 입증에 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 내부 절차와 외부 고소를 동시에 진행하면 회사가 적극 대응할 가능성이 높아집니다. 다만 절차 진행 중 외부에 발언 내용을 추가 유포하면 가해자에게 새 명예훼손 사유를 줄 수 있으니 주의하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 모욕죄 공연성 판단과 전파 가능성',
        summary:
          '대법원 2022도14571 사건(대법원, 2024.07.11 선고)에서 법원은 개별적으로 소수의 사람에게 발언했더라도 상대방이 불특정 또는 다수인에게 해당 내용을 전파할 가능성이 객관적으로 인정되면 모욕죄의 공연성이 성립한다고 판시했습니다.',
        takeaway:
          '회사 부서 단톡방처럼 인원이 제한된 공간이라도 동료들에게 전파될 가능성이 인정되면 모욕·명예훼손 성립 요건을 충족할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '단톡방을 이미 나갔는데 캡처가 없어요',
        answer:
          '<strong>다른 참여자에게 캡처 협조를 요청해보세요.</strong> 동료 진술서도 증거가 될 수 있고, 카카오톡 본사 보존 자료는 법원 명령으로 일부 회수가 가능한 경우가 있어요.',
      },
      {
        question: '욕설을 들은 지 1년이 넘었는데 지금 고소할 수 있나요?',
        answer:
          '<strong>모욕죄·사실적시 명예훼손은 6개월 내 고소가 원칙입니다.</strong> 다만 정보통신망법 명예훼손은 친고죄가 아니라 공소시효(7년) 내라면 고소 가능해요.',
      },
      {
        question: '제3자가 본 게 아니라 저만 본 메시지면 명예훼손 안 되나요?',
        answer:
          '<strong>1:1 직접 발송은 공연성이 부족해 성립이 어렵습니다.</strong> 다만 그 메시지에서 협박·모욕 단순 모욕(사적 영역) 등 다른 죄가 검토될 수 있어요.',
      },
      {
        question: '직장 내 괴롭힘 신고하면 회사가 원칙적으로 조사하나요?',
        answer:
          '<strong>근로기준법상 회사는 신고 접수 후 지체 없이 조사·조치 의무가 있습니다.</strong> 미이행 시 고용노동부 진정으로 1천만원 이하 과태료 처분이 가능해요.',
      },
      {
        question: '합의금은 어느 정도 받을 수 있나요?',
        answer:
          '<strong>사례별로 다르지만 수십만원~수백만원 수준이 자주 보입니다.</strong> 발언 강도·전파 범위·정신적 피해 정도에 따라 협상으로 결정돼요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '직장 내 괴롭힘 신고 절차', href: '/guide/dismissal/dismissal-workplace-bullying-report' },
      { label: '모욕죄 형사 고소 준비서류', href: '/guide/defamation/defamation-insult-criminal-procedure' },
      { label: '명예훼손 증거 수집 방법', href: '/guide/defamation/defamation-evidence-collection' },
      { label: '온라인 명예훼손 형사 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '명예훼손 손해배상 청구 절차', href: '/guide/defamation/defamation-civil-damages-claim' },
    ],
  },

  // ─── 3. defamation / deceased-defamation-survivors-action ───
  {
    domain: 'defamation',
    slug: 'defamation-deceased-defamation-survivors-action',
    keyword: '사망자 명예훼손 유족 대응',
    questionKeyword: '사망한 가족에 대한 허위 게시글, 유족이 고소할 수 있나요?',
    ctaKeyword: '사자 명예훼손 형사 고소·삭제 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사망자 명예훼손 유족 대응 4단계 절차 | 로앤가이드',
      description:
        '사망한 가족에 대한 허위 사실 게시글로 고통받고 있다면 사자(死者) 명예훼손 형사 고소·삭제 청구·민사 청구 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 아버지에 대해 사실과 다른 글이 SNS에 퍼지고 있어요. 유족으로서 어떻게 대응해야 할지 막막합니다." 형법 제308조는 사자(死者)의 명예훼손죄를 별도로 규정하고 있고, 유족은 친고죄로서 직접 고소권자가 됩니다. 일반 명예훼손과 요건·절차가 달라 유족 입장에서 알아둬야 할 부분이 있습니다.</p>',
    sections: [
      {
        title: '사자 명예훼손 유족 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 형사 고소 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시)</strong> — 게시글 URL·캡처(공증 또는 해시값)·작성자 닉네임·게시 일자 확보. 삭제 전 IP·계정 추적 자료 확보가 핵심.</li>\n<li><strong>2단계 — 사자 명예훼손 형사 고소 (6개월 내)</strong> — 형법 제308조 위반(허위 사실 적시 사자 명예훼손, 2년 이하 징역). 친고죄로 유족이 직접 고소권자. 범인을 안 날로부터 6개월 내 관할 경찰서에 고소장 제출.</li>\n<li><strong>3단계 — 게시글 삭제 청구 (방통위·플랫폼)</strong> — 정보통신망법 제44조의2 임시조치 신청을 플랫폼에 직접. 거부 시 방송통신심의위원회(02-3219-5000)에 통신심의 신청.</li>\n<li><strong>4단계 — 민사 손해배상 청구</strong> — 사자 본인의 명예 + 유족 본인의 인격권 침해를 이유로 민법 제751조 위자료 청구. 사자에 대한 청구는 상속인이 승계.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사자 명예훼손 대응, AI로 먼저 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">유족 입장에서 형사·삭제·민사 절차를 AI가 함께 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">사자 명예훼손 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사자 명예훼손 고유 요건',
        content:
          '<p><strong style="color:#1e3a5f">사자 명예훼손은 일반 명예훼손과 성립 요건이 다릅니다.</strong></p>\n<ul>\n<li><strong>형법 제308조 사자 명예훼손</strong> — "공연히 허위의 사실을 적시"한 경우만 처벌. 사실 적시는 처벌 대상이 아님(이 점이 일반 명예훼손과 큰 차이).</li>\n<li><strong>친고죄</strong> — 유족(배우자·직계존비속·형제자매)의 고소가 있어야 공소 제기 가능. 6개월 내 고소 필수.</li>\n<li><strong>고소권자 범위</strong> — 형사소송법 제227조: 친족(8촌 이내 혈족·4촌 이내 인척)이 사자에 대한 명예훼손을 고소할 수 있음.</li>\n<li><strong>비방 목적 정보통신망법</strong> — 사자 명예훼손이 정보통신망(인터넷)을 통한 경우 정보통신망법 적용 여부도 검토. 다만 정보통신망법은 사자 규정이 별도로 없어 형법 제308조 우선.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "사실"이 적시된 게시글에 분노해 사자 명예훼손으로 고소하면 처벌 대상이 아니어서 무혐의 처분이 나올 수 있습니다. "허위"인지 정확히 판단해야 합니다.</blockquote>',
      },
      {
        title: '게시글 삭제 청구 — 빠른 경로 정리',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 별개로 게시글 삭제·확산 차단을 우선 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>플랫폼 직접 삭제 요청</strong> — 네이버·다음·인스타그램·X(트위터) 등 각 플랫폼의 신고 기능. 정보통신망법 제44조의2 임시조치 명시.</li>\n<li><strong>방송통신심의위원회 통신심의</strong> — kocsc.or.kr 신청. 인격권 침해 사유로 시정 요구. 통상 30~60일 내 결정.</li>\n<li><strong>법원 가처분 신청</strong> — 게시글 삭제 가처분(인격권 침해 정지). 통상 수주 내 결정 가능.</li>\n<li><strong>잊혀질 권리 청구</strong> — 사망 시점 이후 게시된 정보에 대한 삭제 요구. 개인정보보호위원회 분쟁조정 활용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 플랫폼이 삭제를 거부할 때는 방송통신심의위원회 통신심의가 가장 빠른 경로입니다. 변호사 없이도 신청 가능하며 무료입니다.</blockquote>',
      },
      {
        title: '민사 손해배상 — 유족 본인의 인격권 침해',
        content:
          '<p><strong style="color:#1e3a5f">유족은 두 가지 청구 권원을 병행 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>사자 본인의 명예에 관한 청구</strong> — 학설·판례상 사자의 명예도 일정 범위에서 보호되며, 유족이 상속인 자격으로 손해배상 청구 검토 가능.</li>\n<li><strong>유족 본인의 인격권 침해</strong> — 사자에 대한 허위 게시로 유족 본인의 정신적 고통 발생. 민법 제751조 위자료 청구.</li>\n<li><strong>청구 시효</strong> — 손해를 안 날부터 3년·불법행위일부터 10년 내.</li>\n<li><strong>청구액</strong> — 사례별 차이가 크며, 게시글 전파 범위·기간·악의성에 따라 수백만원~수천만원 수준이 자주 보입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 형사 무혐의가 나와도 민사는 별도 판단을 받습니다. 형사 결과만 보고 민사 청구를 포기하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위사실 명예훼손 범의의 단일성과 계속성',
        summary:
          '대법원 2022도10369 사건(대법원, 2023.10.26 선고)에서 법원은 동일한 피해자에 대해 일정 기간 반복적으로 허위 사실을 적시한 경우, 범의의 단일성·계속성이 인정되면 포괄일죄로 처리되며 각 게시 행위가 모여 하나의 명예훼손죄를 구성한다고 판시했습니다.',
        takeaway:
          '사자 명예훼손도 동일 가해자가 반복해 게시한 경우 일괄 고소가 가능하며, 게시 일자별로 증거를 정리해두는 것이 입증에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '돌아가신 분의 사실관계는 진실이지만 명예가 손상돼요',
        answer:
          '<strong>사자 명예훼손은 "허위 사실"만 처벌 대상입니다.</strong> 사실 적시는 형법 제308조 적용이 어려워, 민사 인격권 침해 청구를 별도 검토해야 해요.',
      },
      {
        question: '먼 친척도 사자 명예훼손을 고소할 수 있나요?',
        answer:
          '<strong>형사소송법 제227조에 따라 8촌 이내 혈족·4촌 이내 인척이면 고소권자가 될 수 있습니다.</strong> 다만 친고죄 6개월 기간 내 행사해야 해요.',
      },
      {
        question: '고인이 공인이었다면 비판은 허용되나요?',
        answer:
          '<strong>공인에 대한 비판은 표현의 자유 보호 범위가 더 넓습니다.</strong> 다만 허위 사실 적시는 공인이라도 처벌 대상이며, 공익성·진실성 항변이 핵심 쟁점이에요.',
      },
      {
        question: '게시글이 외국 SNS(트위터·인스타)에 있는 경우 어떻게 하나요?',
        answer:
          '<strong>해당 플랫폼의 신고 기능 + 방송통신심의위원회 통신심의 병행이 효과적입니다.</strong> 한국 법원 판결 이행에는 한계가 있어 삭제 청구를 우선 활용하는 것이 좋아요.',
      },
      {
        question: '형사 고소와 민사 손해배상을 동시에 진행하나요?',
        answer:
          '<strong>두 절차는 별개이며 동시 진행이 가능합니다.</strong> 형사 무혐의가 나와도 민사는 별도 판단을 받으니 두 절차 모두 검토하세요.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 형사 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '명예훼손 게시글 삭제 청구 방법', href: '/guide/defamation/defamation-deletion-request-procedure' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-civil-damages-claim' },
      { label: '명예훼손 증거 수집 체크리스트', href: '/guide/defamation/defamation-evidence-collection' },
      { label: '네이버카페 익명ID 신원공개 청구', href: '/guide/defamation/defamation-cafe-id-disclosure-request' },
    ],
  },

  // ─── 4. jeonse / deposit-not-returned-move-out-procedure ───
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-not-returned-move-out-procedure',
    keyword: '보증금 미반환 임차권등기 후 이사',
    questionKeyword: '보증금을 못 받은 채로 이사가야 하는데 어떻게 해야 하나요?',
    ctaKeyword: '보증금 미반환 이사 임차권등기 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보증금 미반환 이사 임차권등기 5단계 절차 | 로앤가이드',
      description:
        '계약은 끝났는데 보증금을 받지 못해 이사 일정이 닥친 임차인이 임차권등기명령·내용증명·소송 5단계 절차로 대항력을 잃지 않고 이사하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"전세계약이 끝났는데 새 집 잔금일은 다가오고 보증금은 안 돌려줘서 진짜 머리가 너무 복잡해요." 보증금 미반환 상태에서 이사를 가야 하는 임차인이 가장 먼저 챙겨야 할 것은 임차권등기명령입니다. 등기 없이 이사하면 대항력·우선변제권을 잃어 보증금 회수가 더 어려워질 수 있습니다.</p>',
    sections: [
      {
        title: '보증금 미반환 이사 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 임차권등기·반환소송 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약 종료 통지 (이사 2~6개월 전)</strong> — 갱신 거절 의사를 내용증명으로 임대인에게 통보. 묵시적 갱신을 막고 계약 종료 시점을 명확히.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (이사 1~2개월 전)</strong> — 관할 지방법원에 신청. 신청 후 등기 완료까지 통상 3~6주. 등기 완료 통지를 받기 전에는 이사 금지.</li>\n<li><strong>3단계 — 등기 완료 후 이사</strong> — 등기부등본에 임차권등기 표시 확인 후 이사. 대항력·우선변제권 유지됨.</li>\n<li><strong>4단계 — 보증금반환소송 또는 지급명령</strong> — 이사 후에도 보증금 미반환 시 지급명령(1~2개월) 또는 본안소송 제기.</li>\n<li><strong>5단계 — 강제집행·경매</strong> — 판결 확정 후에도 임대인이 미지급하면 보증금반환채권을 근거로 임대주택 경매 신청 → 배당으로 회수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">이사 전 임차권등기·소송·경매 순서를 AI가 단계별로 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">전세 보증금 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임차권등기명령 신청 실무',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제3조의3 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>신청 자격</strong> — 임대차 종료 후 보증금이 반환되지 않은 임차인. 묵시적 갱신 종료·기간 만료·해지 모두 가능.</li>\n<li><strong>관할 법원</strong> — 임차주택 소재지 지방법원·시군법원.</li>\n<li><strong>신청 비용</strong> — 인지대(2,000원) + 송달료(3회분 × 5,200원). 등록면허세·교육세·등기 신청 수수료 별도.</li>\n<li><strong>심사·결정</strong> — 통상 신청 후 2~4주 내 임차권등기명령 결정. 임대인에게 송달 → 이의 기간 경과 시 확정.</li>\n<li><strong>등기 완료</strong> — 결정 확정 후 법원이 등기소에 촉탁 → 등기 완료까지 1~2주 추가. 전체 소요 기간 약 4~8주.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 등기 완료 통지 받기 전에 이사하면 대항력이 소멸할 수 있습니다. 등기부등본 발급으로 임차권등기 기재 여부를 직접 확인한 뒤 이사하세요.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">임차권등기명령과 반환소송에 필요한 서류를 미리 준비하세요.</strong></p>\n<ul>\n<li><strong>임차권등기명령 신청</strong> — 임차권등기명령 신청서 + 전세계약서(확정일자 날인) + 주민등록등본(전입신고 확인) + 건물등기부등본 + 계약 종료 증빙(내용증명·문자·통화 녹취).</li>\n<li><strong>반환소송·지급명령</strong> — 소장 또는 지급명령신청서 + 위 서류 + 임차권등기 완료 등기부등본 + 보증금 미반환 증빙 + 임대인 인적사항(주민등록번호 또는 사업자등록번호).</li>\n<li><strong>강제집행</strong> — 확정판결 또는 지급명령 결정문(집행문 부여) + 송달증명·확정증명.</li>\n<li><strong>HUG 보증보험 가입자</strong> — 추가로 보증증서 + 사고통지서 + 이행청구서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 내용증명을 보낼 때 보증금 반환 기한(통상 2주)·미이행 시 법적 조치 예고를 명시하면 임대인이 자진 반환할 가능성이 올라갑니다.</blockquote>',
      },
      {
        title: '대항력 유지하면서 이사하는 핵심 원칙',
        content:
          '<p><strong style="color:#1e3a5f">임차권등기 외에 추가로 챙길 핵심 사항이 있습니다.</strong></p>\n<ul>\n<li><strong>전입신고 유지</strong> — 등기 완료 전 새 집으로 전입신고하면 대항력이 끊기는 시점이 발생할 수 있음. 등기 완료 후 전출이 안전.</li>\n<li><strong>점유 입증 자료 확보</strong> — 이사 전 가구 사진·입주 시점부터 종료 시점까지의 우편물·관리비 영수증 보관.</li>\n<li><strong>등기부등본 정기 확인</strong> — 이사 후에도 등기부에 임차권등기 기재 유지 여부 정기 확인. 임대인이 임의 말소 시도 가능성 차단.</li>\n<li><strong>HUG 보증보험 가입자</strong> — 계약 종료·해지 후 1개월 내 보증금 미반환 시 HUG 영업점에 사고통지 + 이행청구서 제출. 이행심사 약 2주 이내 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 새 집 잔금 일정과 임차권등기 일정이 겹치면 임차권등기 우선. 새 집 매도인·임대인에게 사정을 미리 설명해 입주일 조정을 시도하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 점유 상실 시 임차권 대항력 소멸 여부',
        summary:
          '대법원 2024다326398 사건(대법원, 2025.06.12 선고)에서 법원은 주택 임차인이 전입신고를 마치고 주택을 인도받아 임차권의 대항력을 취득했더라도 그 후 주택의 점유를 상실하면 대항력이 소멸한다는 원칙을 확인했습니다. 단, 임차권등기명령에 따른 등기를 마친 경우에는 점유를 상실해도 대항력·우선변제권이 유지됩니다.',
        takeaway:
          '보증금 미반환 상태에서 이사를 가야 한다면 가능한 한 임차권등기명령을 먼저 마쳐야 대항력·우선변제권을 보존할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '임차권등기 신청만 하고 결정 전에 이사해도 되나요?',
        answer:
          '<strong>등기 완료 전 이사하면 대항력이 끊길 수 있습니다.</strong> 신청 후 결정·등기 완료까지 통상 4~8주 걸리니 이사 일정을 그에 맞춰 조정하는 것이 안전해요.',
      },
      {
        question: '임대인이 임차권등기를 거부할 수 있나요?',
        answer:
          '<strong>임차권등기명령은 법원이 임대인 의사와 무관하게 발동합니다.</strong> 임대인은 이의제기만 가능하고, 통상 사유가 인정되지 않으면 등기 절차가 진행돼요.',
      },
      {
        question: '보증금 일부만 받고 이사할 수 있나요?',
        answer:
          '<strong>가능하지만 미반환 부분에 대해서는 임차권등기를 신청해야 우선변제권이 유지됩니다.</strong> 일부 수령 시 합의서로 잔여 금액·이행 기한을 명확히 기재하세요.',
      },
      {
        question: '지급명령과 본안소송 중 어느 게 빠른가요?',
        answer:
          '<strong>지급명령이 1~2개월로 더 빠릅니다.</strong> 다만 임대인이 이의제기하면 본안소송으로 이행되니 미리 본안 준비도 병행하는 것이 좋아요.',
      },
      {
        question: 'HUG 보증보험에 가입돼 있다면 더 빠른 길이 있나요?',
        answer:
          '<strong>HUG 이행청구가 가장 빠른 회수 경로입니다.</strong> 계약 종료·해지 후 1개월 내 보증금 미반환 시 HUG 영업점에 이행청구하면 약 2주 내 이행 결정이 나와요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령 신청 절차 총정리', href: '/guide/jeonse/jeonse-lease-right-registration' },
      { label: 'HUG 전세보증금반환보증 이행청구', href: '/guide/jeonse/jeonse-hug-guarantee-claim' },
      { label: '전세보증금 반환 소송 절차', href: '/guide/jeonse/jeonse-deposit-return-lawsuit' },
      { label: '내용증명으로 보증금 반환 청구', href: '/guide/jeonse/jeonse-content-certified-mail' },
      { label: '임대인 파산 시 보증금 우선변제', href: '/guide/jeonse/jeonse-landlord-bankruptcy-priority-payment' },
    ],
  },

  // ─── 5. jeonse / empty-house-warning-pre-contract-check ───
  {
    domain: 'jeonse',
    slug: 'jeonse-empty-house-warning-pre-contract-check',
    keyword: '깡통전세 사전 점검 체크',
    questionKeyword: '계약 전에 깡통전세인지 어떻게 확인하나요?',
    ctaKeyword: '깡통전세 위험 사전 점검 체크리스트',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '깡통전세 사전 점검 7가지 항목 체크리스트 | 로앤가이드',
      description:
        '전세 계약 전 깡통전세 위험을 점검하려면 등기부등본·시세·선순위 보증금 비율 7가지 항목을 단계별로 확인해야 합니다. 지금 바로 정리하세요.',
    },
    intro:
      '<p>"전세 계약하기 전에 깡통전세인지 미리 알 수 있는 방법이 있을까요? 보증금이 큰 돈이라 너무 불안해요." 깡통전세는 매매가 대비 전세가 비율이 너무 높거나 선순위 채권이 많아 임대인이 돌려줄 능력이 없어지는 상황입니다. 계약 전 7가지만 체크하면 위험을 상당 부분 미리 거를 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 깡통전세를 미리 알 수 있는 핵심 지표는 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세가율과 선순위 보증금 비율 두 가지가 핵심 지표입니다.</strong></p>\n<ul>\n<li><strong>전세가율(전세가÷매매가)</strong> — 통상 80% 초과 시 위험 신호. 90% 이상은 매매가 하락 시 보증금 회수 어려움이 큰 사례가 많습니다.</li>\n<li><strong>선순위 채권 비율</strong> — 등기부등본 상 근저당·선순위 임차보증금 합계가 매매가의 60~70%를 넘으면 경매 시 본인 보증금 회수 가능성이 떨어집니다.</li>\n<li><strong>매매 시세</strong> — 국토교통부 실거래가 공개시스템(rt.molit.go.kr) + KB부동산·네이버부동산 시세를 비교. 단일 출처는 부정확.</li>\n<li><strong>위험 공식</strong> — (선순위 채권 + 본인 전세보증금) ÷ 매매가 > 80% → 경매 환가 시 회수 어려움 큰 위험권.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전세가율·선순위 채권 두 지표가 모두 높으면 깡통전세 가능성이 매우 높습니다.</blockquote>',
      },
      {
        title: 'Q. 등기부등본은 무엇을 보고 어떻게 해석해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기부등본 갑구·을구를 항목별로 확인하세요.</strong></p>\n<ul>\n<li><strong>갑구(소유권)</strong> — 현 임대인이 실소유자인지, 가압류·가처분·신탁 여부 확인. 신탁 부동산은 신탁회사 동의 없이 임대 시 보증금 보호가 어려울 수 있음.</li>\n<li><strong>을구(소유권 외 권리)</strong> — 근저당권 채권최고액 합계 확인. 채권최고액은 실제 대출액의 110~130%로 설정되므로 실 대출액은 채권최고액 ÷ 1.2 정도로 추정.</li>\n<li><strong>최근 거래 내역</strong> — 최근 1년 내 소유권 이전이 잦으면 명의변경 사기 위험. 임대인이 실제 소유자가 맞는지 확인.</li>\n<li><strong>발급 시점</strong> — 등기부등본은 계약 직전·계약 당일·잔금일에 각각 발급해 변동 여부를 체크.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 깡통전세 사전 점검, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전세가율·선순위 채권을 AI가 위험도 단계로 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">깡통전세 점검 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 계약 전 7단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">HUG 깡통전세 예방 안내를 참고하면 아래 7단계로 점검할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 매매 시세 조사</strong> — 국토교통부 실거래가 + KB·네이버 시세 비교. 인근 동일 면적·층수 기준.</li>\n<li><strong>2단계 — 등기부등본 확인</strong> — 인터넷등기소(iros.go.kr) 또는 가까운 등기소에서 발급(700원). 갑구·을구 모두 검토.</li>\n<li><strong>3단계 — 전세가율 계산</strong> — 본인 전세보증금 ÷ 매매가. 80% 초과 시 위험.</li>\n<li><strong>4단계 — 선순위 채권 합산</strong> — 근저당 채권최고액 + 선순위 임차보증금. 매매가 대비 비율 산출.</li>\n<li><strong>5단계 — 다가구주택은 다른 임차인 보증금 확인</strong> — 다가구는 호별 등기가 분리되지 않아 다른 호 보증금이 모두 선순위가 됨. 임대인에게 임대차 현황 공개 요청.</li>\n<li><strong>6단계 — HUG 안심전세앱 활용</strong> — 안심전세앱(khug.or.kr/khgsi)에서 시세·전세가율·보증금 보호 한도 자동 계산.</li>\n<li><strong>7단계 — HUG 전세보증금반환보증 가입 가능 여부 확인</strong> — 가입 불가 매물은 위험 신호. 가입 시 보증금 회수 안전망 확보.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 다가구주택은 호별 등기가 분리되지 않아 다른 호 임차인 보증금이 모두 선순위가 됩니다. 다가구 계약 시 임대인에게 다른 임차 현황을 가능한 한 확인하세요.</blockquote>',
      },
      {
        title: 'Q. 계약서·특약 작성에서 챙길 핵심 항목은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 보증금 보호를 위한 특약 5가지를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>전세보증금반환보증 가입 의무 특약</strong> — "임차인이 전세보증금반환보증에 가입할 수 있도록 임대인이 협조한다" 명시.</li>\n<li><strong>저당권 추가 설정 금지 특약</strong> — "계약 기간 중 임대인은 추가 저당권 설정 시 임차인 동의를 얻는다".</li>\n<li><strong>매매·소유권 이전 시 통지 의무</strong> — "임대인이 주택 매매 시 임차인에게 사전 통지" 명시.</li>\n<li><strong>잔금일 등기부등본 재확인</strong> — 계약 후 잔금일 사이 새 근저당이 설정될 위험 차단.</li>\n<li><strong>확정일자·전입신고 즉시 이행</strong> — 잔금일 당일 주민센터에서 전입신고 + 확정일자 받기. 우선변제권 확보의 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전세보증금반환보증 가입이 거절되는 매물은 보증사가 위험으로 본 매물입니다. 가입 거절 사유를 임대인에게 확인하고 계약 진행 여부를 재검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개 시 선순위 임차보증금 설명의무',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.04.10 선고)에서 법원은 다가구주택 일부에 대한 임대차계약을 중개하는 개업공인중개사가 임차의뢰인에게 다른 임차인의 선순위 보증금 현황을 확인·설명할 의무가 있고, 이를 제대로 이행하지 않으면 손해배상 책임이 발생할 수 있다고 판시했습니다.',
        takeaway:
          '다가구주택 계약 시 중개사에게 선순위 임차보증금 현황을 서면으로 확인받아두면, 추후 깡통전세 사고가 발생했을 때 중개사 책임을 물을 수 있는 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '전세가율 80%가 절대 기준인가요?',
        answer:
          '<strong>지역·매물 특성에 따라 차이가 있습니다.</strong> 다만 80% 초과 시 매매가 10% 하락만으로도 회수가 어려워질 수 있어 일반적 위험 임계점으로 자주 인용돼요.',
      },
      {
        question: '깡통전세인지 헷갈리면 어디서 무료 상담을 받을 수 있나요?',
        answer:
          '<strong>HUG 콜센터(1566-9009), 전세사기피해지원센터(1533-8119), 대한법률구조공단(132)에서 무료 상담을 받을 수 있습니다.</strong> 등기부등본·계약서 사본을 미리 준비해 가시면 좋아요.',
      },
      {
        question: 'HUG 보증보험 가입이 거절됐어요',
        answer:
          '<strong>거절 사유를 확인하고 계약을 재검토해야 합니다.</strong> 가입 거절은 보증사가 보증금 회수 위험을 높게 본 신호이니, 무리한 계약 진행은 위험해요.',
      },
      {
        question: '계약 후 등기부등본에 새 근저당이 잡혔어요',
        answer:
          '<strong>특약에 저당권 추가 설정 금지가 있다면 계약 위반으로 다툴 소지가 있습니다.</strong> 즉시 전세보증보험 가입 진행 + 변호사 상담을 검토하세요.',
      },
      {
        question: '신탁 부동산도 전세 들어가도 되나요?',
        answer:
          '<strong>신탁회사 동의서 없이는 임대인이 적법하게 임대할 권한이 없을 수 있습니다.</strong> 신탁 부동산 계약 시 신탁원부 확인 + 신탁회사 동의 여부를 가능한 한 점검하세요.',
      },
    ],
    cta: { text: '계약 종료 후 무엇부터 해야 하는지 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세보증금반환보증 가입 절차', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '전세 계약 전 등기부등본 보는 법', href: '/guide/jeonse/jeonse-registry-check-guide' },
      { label: '깡통전세 피해 시 대응 절차', href: '/guide/jeonse-fraud/jeonse-fraud-response-procedure' },
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-lease-right-registration' },
      { label: '소액임차인 최우선변제 요건', href: '/guide/jeonse/jeonse-priority-small-tenant' },
    ],
  },
];
