import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 8. 이 페이지는 [온라인 채팅으로 성매매 혐의를 받는 사람]의 [경찰 출석 전 증거와 진술 전략을 준비하는 상황]에서 [녹음 증거 대응과 진술 방향 설정]을 돕는 페이지다.
// 9. 이 페이지는 [성매매로 적발된 초범]의 [경찰 연락을 받고 무엇부터 해야 할지 모르는 상황]에서 [즉시 해야 할 일 3가지와 절차 파악]을 돕는 페이지다.
// 10. 이 페이지는 [성매매 단속에서 초범으로 적발된 피의자]의 [처벌 수위와 감경 가능성을 알고 싶은 상황]에서 [실제 양형 기준과 기소유예 조건 파악]을 돕는 페이지다.
// 11. 이 페이지는 [성매매 사건 관련자]의 [매수자와 매도자의 처벌 차이가 궁금한 상황]에서 [법정형·양형·전과 영향 비교 정보 제공]을 돕는 페이지다.
// 12. 이 페이지는 [산재를 당한 근로자]의 [요양급여를 신청해야 하는 상황]에서 [신청 절차·기한·필요 서류 파악]을 돕는 페이지다.
// 13. 이 페이지는 [출퇴근 중 사고를 당한 근로자]의 [산재로 인정받을 수 있는지 궁금한 상황]에서 [인정 기준 3가지와 예외 사유 파악]을 돕는 페이지다.
// 14. 이 페이지는 [산업재해를 당한 근로자]의 [어디부터 시작해야 할지 모르는 상황]에서 [즉시 해야 할 일과 신청 순서 파악]을 돕는 페이지다.

export const spokesBatch19_8to14: SpokePage[] = [
  {
    domain: 'prostitution',
    slug: 'online-chat-arrest-response',
    keyword: '온라인 성매매 채팅 적발 시 대응법',
    questionKeyword: '온라인 채팅으로 성매매 혐의를 받게 되면 어떻게 대응해야 하나요?',
    ctaKeyword: '온라인 성매매 채팅 적발',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '온라인 성매매 채팅 적발 대응 4단계 | 로앤가이드',
      description: '온라인 채팅에서 성매매 관련 대화를 나눴다가 경찰 연락을 받았다면, 녹음 증거 대응부터 진술 준비까지 4단계 대응법을 지금 확인하세요.',
    },
    intro: '랜덤 채팅 앱에서 대화를 나누다가 성매매 관련 내용이 오갔고, 며칠 뒤 경찰에서 연락이 왔습니다. 단순한 대화였을 뿐이라고 생각했지만, 경찰은 채팅 기록을 이미 확보했다고 말합니다. 혐의를 받고 있다면, 경찰 출석 전에 어떤 준비를 해야 하는지 정확히 파악하는 것이 중요합니다. 온라인 채팅 성매매 적발 시 단계별 대응법을 정리해보세요.',
    sections: [
      {
        title: '첫째, 경찰이 확보한 채팅 기록의 증거 범위를 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">성매매알선등행위의처벌에관한법률 제21조 제1항에 따라 성매매를 한 사람은 1년 이하의 징역이나 300만원 이하의 벌금·구류 또는 과료에 처합니다</strong></p>\n<p>경찰은 통신사실 확인자료나 앱 서버 자료를 통해 <strong>채팅 내용, 접속 IP, 결제 내역</strong>을 이미 확보한 상태일 수 있습니다. 출석 전에 자신이 주고받은 메시지의 정확한 내용을 기억해두세요.</p>\n<p>특히 <strong>금전 거래 언급, 장소·시간 약속, 구체적 성행위 합의 내용</strong>이 있었는지가 핵심입니다. 단순히 대화만 나눈 것인지, 실제 만남이 성사되었는지에 따라 혐의의 무게가 크게 달라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 채팅 내용 중 금전 언급 여부 → 만남 성사 여부 → 결제 내역 존재 여부</blockquote>',
      },
      {
        title: '둘째, 경찰 녹음·녹화의 적법성을 확인하고 진술 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제244조에 따라 피의자 신문 시 영상녹화를 할 수 있으며, 피의자에게 미리 알려야 합니다</strong></p>\n<p>경찰이 채팅 상대와의 <strong>전화 통화를 녹음</strong>하거나, 위장 수사 과정에서 대화를 기록한 경우 이 증거의 적법성이 쟁점이 될 수 있습니다. 함정수사에 해당하는지 여부도 중요한 방어 포인트입니다.</p>\n<p>출석 조사 시에는 <strong>사실관계를 부인할 부분과 인정할 부분을 명확히 구분</strong>해야 합니다. 실제 만남이 없었다면 "성매매 미수"에 해당할 수 있고, 상대가 경찰 신분이었다면 함정수사 항변이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 녹음 적법성 확인 → 함정수사 해당 여부 → 미수 주장 가능성 검토</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">내 온라인 성매매 혐의 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 변호사 상담 전에 정리해야 할 사항을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 출석 전 변호사 조력을 받으면 불필요한 진술 실수를 방지할 수 있습니다</strong></p>\n<p>변호사 상담 시 준비할 자료: <strong>①채팅 앱 이름과 사용 기간 ②대화 상대 정보(닉네임·연락처) ③금전 이체 내역 ④실제 만남 여부와 장소 ⑤경찰 연락 내용(출석 요구 일시, 담당 수사관 이름)</strong></p>\n<p>혐의를 받고 있다면 <strong>경찰 조사 시 변호인 참여권</strong>을 행사하세요. 형사소송법 제243조의2에 따라 변호인은 신문에 참여하여 의견을 진술할 수 있습니다. 변호인 없이 출석하면 불리한 진술을 할 위험이 큽니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 채팅 앱 정보 + 이체 내역 + 만남 여부 + 변호인 참여권 행사</blockquote>',
      },
      {
        title: '넷째, 기소유예·교육조건부 기소유예 가능성을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">성매매 초범이고 단순 매수에 해당하면 존스쿨(성매매 재범방지교육) 이수 조건부 기소유예를 받을 수 있습니다</strong></p>\n<p>검찰은 <strong>초범 여부, 범행 경위, 반성 정도, 사회적 유대관계</strong> 등을 종합적으로 고려하여 기소유예 여부를 판단합니다. 성매매 매수 초범의 경우 40시간 교육 이수를 조건으로 기소유예 처분을 받는 사례가 많습니다.</p>\n<p>다만 <strong>미성년자 대상, 성매매 알선, 성매매 강요</strong> 등이 포함되면 기소유예가 불가능하고 정식 기소됩니다. 자신의 혐의가 단순 매수인지, 추가 혐의가 있는지를 정확히 파악하는 것이 선결 과제입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 초범 여부 → 단순 매수 해당 여부 → 교육 이수 조건부 기소유예 가능성</blockquote>',
      },
    ],
    cases: [
      {
        title: '경찰 녹음 절차와 증거 허용 여부에 관한 대법원 판결',
        summary:
          '대법원 2020도9370 사건(2024.05.30 선고)에서 법원은 수사기관이 피의자와의 통화를 녹음할 경우 적법한 절차를 준수해야 하며, 절차를 위반하여 수집된 증거는 위법수집증거 배제원칙에 따라 증거능력이 부정될 수 있다고 판시했습니다.',
        takeaway:
          '경찰이 온라인 채팅이나 전화 통화를 녹음한 경우, 그 녹음이 적법한 절차에 따라 이루어졌는지 반드시 확인하세요. 위법하게 수집된 녹음은 재판에서 증거로 사용할 수 없습니다.',
      },
    ],
    faq: [
      {
        question: '채팅만 하고 실제 만나지 않았는데도 처벌받나요?',
        answer: '채팅만으로는 <strong>성매매 미수</strong>에 해당할 수 있습니다. 다만 구체적인 장소·시간·금액 합의가 이루어졌다면 미수범으로 처벌 가능성이 있으며, 단순한 음란 대화만으로는 성매매죄가 성립하기 어렵습니다. 대화 내용의 구체성이 핵심 판단 기준입니다.',
      },
      {
        question: '채팅 앱에서 상대방이 경찰이었으면 함정수사인가요?',
        answer: '수사기관이 <strong>범의를 유발</strong>한 경우(먼저 성매매를 제안하고 유인한 경우)는 위법한 함정수사에 해당하여 무죄 주장이 가능합니다. 다만 이미 범의가 있는 상태에서 수사기관이 기회를 제공한 것에 불과하면 적법한 수사로 인정됩니다.',
      },
      {
        question: '채팅 기록을 삭제하면 증거가 사라지나요?',
        answer: '<strong>이미 경찰이 서버 자료를 확보한 경우 삭제해도 소용없습니다</strong>. 오히려 증거 인멸 시도로 간주되어 불리하게 작용할 수 있습니다. 확보된 채팅 기록을 바탕으로 진술 전략을 세우는 것이 훨씬 효과적입니다.',
      },
      {
        question: '온라인 성매매 적발 시 가족에게 알려지나요?',
        answer: '경찰 수사 단계에서 가족에게 별도 통지하지는 않습니다. 다만 <strong>구속영장이 청구되거나 재판에 넘겨지면</strong> 가족이 알게 될 가능성이 높아집니다. 기소유예 처분을 받으면 수사기록이 외부에 공개되지 않습니다.',
      },
      {
        question: '성매매 혐의가 확정되면 직장에도 영향이 있나요?',
        answer: '벌금형까지는 일반적으로 직장에 통보되지 않으나, <strong>공무원·교사·군인 등 특정 직종</strong>은 벌금형만으로도 징계 사유가 될 수 있습니다. 전과 기록은 수사경력조회에 남으며, 일부 자격증 취득이나 해외 비자 발급에 영향을 줄 수 있습니다.',
      },
    ],
    cta: {
      text: '온라인 성매매 적발 관련 무료 진단받기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '성매매 가이드', href: '/guide/prostitution' },
      { label: '성매매 적발 시 초기 대응법', href: '/guide/prostitution/prostitution-arrest-response' },
      { label: '성매매 초범 처벌 수위와 감경', href: '/guide/prostitution/prostitution-first-offense-sentencing' },
      { label: '성매매 함정수사 대응 방법', href: '/guide/prostitution/prostitution-entrapment-response' },
      { label: '성매매 혐의 어디부터 시작해야 하나', href: '/guide/prostitution/prostitution-where-to-start' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'caught-where-to-start',
    keyword: '성매매 적발됐는데 어디부터 해야 하나',
    questionKeyword: '성매매에 적발됐는데 지금 당장 무엇부터 해야 하나요?',
    ctaKeyword: '성매매 적발 초기 대응',
    type: '어디부터형',
    perspective: 'accused',
    meta: {
      title: '성매매 적발 후 해야 할 일 3가지 순서 | 로앤가이드',
      description: '성매매로 적발됐는데 무엇부터 해야 할지 모르겠다면, 경찰 조사 전 반드시 해야 할 3가지와 기소유예 준비 방법을 지금 확인하세요.',
    },
    intro: '퇴근 후 유흥업소에서 단속에 적발됐습니다. 경찰이 신분증을 확인하고 출석 일시를 통보했습니다. 처음 겪는 일이라 머릿속이 하얗게 됩니다. 혐의를 받고 있다면, 당장 무엇부터 해야 하는지 순서대로 정리하는 것이 가장 중요합니다.',
    sections: [
      {
        title: '첫째, 적발 현장에서 불필요한 진술을 하지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">헌법 제12조 제2항에 따라 모든 국민은 형사상 자기에게 불리한 진술을 강요당하지 않습니다</strong></p>\n<p>단속 현장에서 경찰이 질문하면 당황하여 필요 이상의 말을 하게 됩니다. <strong>"변호사와 상담 후 성실히 출석하겠습니다"</strong>라고만 답하세요. 현장에서의 진술은 모두 조서에 기록되며, 나중에 번복하기 어렵습니다.</p>\n<p>특히 <strong>"처음이에요" "한 번만 봐주세요" 같은 말</strong>은 혐의를 인정하는 것으로 기록될 수 있습니다. 인적사항 확인에만 응하고, 사건 관련 질문에는 <strong>묵비권</strong>을 행사하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">현장 원칙: 인적사항만 확인 → 사건 질문 묵비권 → "변호사 상담 후 출석" 답변</blockquote>',
      },
      {
        title: '둘째, 48시간 이내에 형사 전문 변호사 상담을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 출석 조사 전에 변호사 조력을 받으면 진술 방향을 올바르게 설정할 수 있습니다</strong></p>\n<p>변호사 상담 시 준비할 사항: <strong>①적발 일시·장소 ②동행자 유무 ③경찰이 확보한 증거(CCTV, 카드 결제 내역 등) ④현장에서 한 진술 내용 ⑤전과 유무</strong></p>\n<p>성매매처벌법 위반 사건은 <strong>초범 여부와 반성 태도</strong>가 양형에 큰 영향을 미칩니다. 변호사와 함께 ①혐의 인정 범위 ②기소유예 가능성 ③진술 전략을 사전에 결정하세요. 무료 법률상담은 대한법률구조공단(132)에서도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 적발 상황 정리 → 변호사 상담 → 진술 전략 수립 → 기소유예 방향 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">내 성매매 적발 상황에 맞는 대응법 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 기소유예를 위한 반성문과 재범방지 서약서를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">검찰은 초범·반성·재범 위험성 등을 종합 고려하여 기소유예 여부를 결정합니다</strong></p>\n<p>경찰 조사 후 검찰 송치 전까지 준비할 서류: <strong>①반성문(A4 1~2장, 자필 권장) ②재범방지 서약서 ③존스쿨(성매매 재범방지교육) 자발적 수강 신청 확인서 ④직장 재직증명서·가족관계증명서</strong></p>\n<p>반성문에는 <strong>잘못을 구체적으로 인정하고, 재범하지 않겠다는 의지</strong>를 진정성 있게 기술하세요. "한 번 실수했다"는 식의 가벼운 표현보다 <strong>행위의 문제점을 스스로 인식하고 있음</strong>을 보여주는 내용이 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기소유예 준비: 반성문 + 서약서 + 존스쿨 수강 신청 + 신원 보증 자료</blockquote>',
      },
      {
        title: '넷째, 압수·수색이 진행된 경우 영장 내용을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제114조에 따라 압수·수색에는 반드시 영장이 필요하며, 영장에 기재된 범위를 초과할 수 없습니다</strong></p>\n<p>경찰이 휴대폰이나 개인 물품을 압수한 경우, <strong>압수목록 교부서</strong>를 반드시 받으세요. 영장 없이 임의로 휴대폰을 열람한 경우 해당 증거는 위법수집증거에 해당할 수 있습니다.</p>\n<p>영장에는 <strong>①압수·수색 대상 ②범죄 혐의 ③집행 기한</strong>이 명시됩니다. 영장에 기재되지 않은 물건이 압수되었거나, 집행 기한이 경과한 후 집행된 경우 변호사를 통해 이의신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 영장 제시 여부 → 압수목록 교부 → 영장 범위 초과 여부 → 이의신청 가능성</blockquote>',
      },
    ],
    cases: [
      {
        title: '압수수색 영장 집행 기한 관련 대법원 판결',
        summary:
          '대법원 2023도8752 사건(2023.10.18 선고)에서 법원은 압수·수색 영장에 기재된 집행 기한을 경과하여 집행한 경우 이는 영장주의 원칙에 위배되며, 해당 절차에서 수집된 증거의 증거능력이 부정될 수 있다고 판시했습니다.',
        takeaway:
          '경찰이 압수·수색을 진행했다면 영장의 집행 기한과 범위를 반드시 확인하세요. 기한이 지난 영장으로 압수된 증거는 재판에서 배제될 수 있으므로, 변호사에게 영장 사본을 보여주고 적법성을 검토받으세요.',
      },
    ],
    faq: [
      {
        question: '적발 현장에서 경찰이 휴대폰을 보여달라고 하면 거부할 수 있나요?',
        answer: '<strong>영장 없이는 휴대폰 제출을 거부할 수 있습니다</strong>. 경찰이 임의제출을 요청하더라도 응할 의무는 없습니다. 다만 영장을 발부받아 올 수 있으므로, 삭제보다는 거부 후 변호사 상담을 받는 것이 바람직합니다.',
      },
      {
        question: '단속 현장에서 벌금을 바로 내면 끝나나요?',
        answer: '현장에서 벌금을 납부하는 것은 <strong>통고처분(즉결심판)</strong>에 해당하는 경우에만 가능합니다. 일반 성매매 단속의 경우 현장 벌금 납부가 아니라 경찰 조사 → 검찰 송치 → 기소유예 또는 약식기소 절차를 거칩니다.',
      },
      {
        question: '같이 적발된 상대방과 진술을 맞춰야 하나요?',
        answer: '<strong>절대로 진술을 사전 조율하지 마세요</strong>. 증인과 진술을 맞추는 행위는 증거 조작으로 간주되어 추가 혐의(증거인멸, 범인도피)가 붙을 수 있습니다. 각자 사실에 기반하여 독립적으로 진술해야 합니다.',
      },
      {
        question: '적발 기록이 남으면 해외여행에 문제가 되나요?',
        answer: '기소유예 처분을 받으면 <strong>전과 기록이 남지 않으므로</strong> 해외 비자 발급에 직접적인 영향은 없습니다. 다만 벌금형 이상의 처분을 받으면 일부 국가(미국, 캐나다 등)의 비자 신청 시 범죄 기록 신고 의무가 발생할 수 있습니다.',
      },
    ],
    cta: {
      text: '성매매 적발 초기 대응 관련 무료 진단받기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '성매매 가이드', href: '/guide/prostitution' },
      { label: '온라인 성매매 채팅 적발 시 대응법', href: '/guide/prostitution/online-chat-arrest-response' },
      { label: '성매매 초범 처벌 수위와 감경', href: '/guide/prostitution/prostitution-first-offense-sentencing' },
      { label: '성매매 함정수사 대응 방법', href: '/guide/prostitution/prostitution-entrapment-response' },
      { label: '성매매 적발 시 형사 절차', href: '/guide/prostitution/prostitution-arrest-criminal-process' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'first-offense-raid-penalty-level',
    keyword: '성매매 단속 초범 처벌 수위',
    questionKeyword: '성매매 단속에서 초범으로 적발되면 처벌이 어느 정도인가요?',
    ctaKeyword: '성매매 초범 처벌 수위',
    type: '수치기한형',
    perspective: 'accused',
    meta: {
      title: '성매매 초범 단속 처벌 수위 5가지 기준 | 로앤가이드',
      description: '성매매 단속에서 초범으로 적발되어 처벌 수위가 걱정된다면, 벌금 액수부터 기소유예 조건까지 5가지 양형 기준을 지금 확인하세요.',
    },
    intro: '첫 번째로 성매매 단속에 적발됐습니다. 뉴스에서 벌금형부터 징역형까지 다양한 처벌 사례를 봤는데, 초범인 자신에게는 어느 정도의 처벌이 내려질지 전혀 감이 잡히지 않습니다. 혐의를 받고 있다면, 초범 기준 실제 양형 수위와 감경 가능성을 먼저 파악하는 것이 중요합니다.',
    sections: [
      {
        title: '첫째, 성매매처벌법상 기본 법정형을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">성매매알선등행위의처벌에관한법률 제21조 제1항에 따라 성매매를 한 사람은 1년 이하의 징역이나 300만원 이하의 벌금·구류 또는 과료에 처합니다</strong></p>\n<p>이는 성매매 <strong>매수자와 매도자 모두에게 동일하게 적용</strong>되는 법정형입니다. 다만 실제 선고형은 <strong>초범 여부, 범행 경위, 반성 정도</strong>에 따라 크게 달라집니다.</p>\n<p>초범 단순 매수의 경우 통상적으로 <strong>벌금 100만~200만원</strong> 선에서 약식명령이 내려지는 경우가 많습니다. 기소유예 처분을 받으면 벌금 없이 사건이 종결됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 1년 이하 징역 또는 300만원 이하 벌금 → 초범 실제 양형: 벌금 100~200만원 또는 기소유예</blockquote>',
      },
      {
        title: '둘째, 초범 기소유예율과 그 조건을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">검찰 통계에 따르면 성매매 초범의 상당수가 교육조건부 기소유예 처분을 받고 있습니다</strong></p>\n<p>기소유예의 핵심 조건: <strong>①전과 없음(초범) ②단순 매수에 해당 ③피의자의 진지한 반성 ④재범 위험성 낮음 ⑤존스쿨(40시간) 교육 이수 의지</strong></p>\n<p>반대로 기소유예가 어려운 경우: <strong>①동종 전과 있음 ②미성년자 대상 ③성매매 알선·강요 혐의 포함 ④조직적·상습적 행위 ⑤수사 과정에서 비협조</strong>. 이 경우 약식기소 또는 정식 재판에 회부될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기소유예 조건: 초범 + 단순 매수 + 반성 + 존스쿨 40시간 이수</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">내 성매매 초범 처벌 수위 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 약식기소 시 벌금 액수와 전과 기록 영향을 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">약식명령으로 벌금형이 확정되면 전과 기록이 남으며, 형의 실효 시까지 수사경력조회에 표시됩니다</strong></p>\n<p>초범 약식기소 시 통상 벌금 액수: <strong>100만~200만원</strong>. 성매매 수익이 크거나 상습성이 인정되면 <strong>200만~300만원</strong>까지 올라갈 수 있습니다. 약식명령에 불복하면 7일 이내 정식재판을 청구할 수 있습니다.</p>\n<p>벌금형 전과는 <strong>2년 경과 후 실효</strong>됩니다(형의실효등에관한법률 제7조). 실효 전까지는 취업 시 범죄경력조회에 나타날 수 있으며, 공무원·교사 등 <strong>결격사유</strong>에 해당할 수 있으므로 직업별 영향을 미리 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">벌금형 영향: 전과 기록 2년 → 취업·자격증 영향 가능 → 약식명령 불복 7일 이내 정식재판 청구</blockquote>',
      },
      {
        title: '넷째, 처벌 수위를 낮추기 위한 양형 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">양형 자료의 충실도에 따라 같은 초범이라도 처분 결과가 달라질 수 있습니다</strong></p>\n<p>유리한 양형 자료 목록: <strong>①자필 반성문 ②재범방지 서약서 ③존스쿨 자발적 수강 신청서 ④재직증명서(안정적 직업) ⑤가족관계증명서(부양가족 존재) ⑥사회봉사활동 증빙</strong></p>\n<p>이들 자료를 검찰 송치 전에 변호사를 통해 <strong>의견서와 함께 제출</strong>하면 기소유예 가능성이 높아집니다. 특히 존스쿨 교육을 자발적으로 미리 신청한 경우, 재범 방지 의지가 인정되어 유리하게 작용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 자료: 반성문 + 서약서 + 존스쿨 신청 + 재직증명 + 봉사활동</blockquote>',
      },
    ],
    cases: [
      {
        title: '성매매 수익 산정 기준에 관한 법원 판결',
        summary:
          '서울중앙지방법원 2023노3479 사건(2024.05.23 선고)에서 법원은 성매매 수익을 산정할 때 직접적인 대가뿐 아니라 성매매와 관련하여 수수된 금품 전체를 기준으로 판단해야 하며, 이는 양형에 직접적인 영향을 미친다고 판시했습니다.',
        takeaway:
          '성매매 사건에서 처벌 수위는 관련 금액의 규모에 따라 달라집니다. 단순 매수라도 고액이 오간 경우 양형이 가중될 수 있으므로, 금전 거래 내역을 정리하여 변호사에게 정확히 알려주세요.',
      },
    ],
    faq: [
      {
        question: '성매매 초범 벌금은 정확히 얼마인가요?',
        answer: '법정 최고액은 300만원이며, 초범 단순 매수의 경우 실무상 <strong>100만~200만원</strong> 선에서 약식명령이 내려지는 경우가 많습니다. 다만 구체적 금액은 범행 경위, 반성 정도, 수익 규모 등에 따라 달라집니다.',
      },
      {
        question: '존스쿨 교육은 어디서 어떻게 신청하나요?',
        answer: '존스쿨은 <strong>여성가족부 산하 성매매피해상담소</strong>에서 운영합니다. 검찰이 교육조건부 기소유예를 결정하면 해당 교육기관을 안내받습니다. 자발적으로 미리 수강 신청하려면 관할 성매매피해상담소(1644-6012)에 문의하세요.',
      },
      {
        question: '초범인데 구속될 수도 있나요?',
        answer: '단순 매수 초범의 경우 <strong>구속 가능성은 매우 낮습니다</strong>. 다만 증거 인멸 우려가 있거나, 도주 우려가 있거나, 미성년자 대상 혐의가 포함된 경우에는 구속영장이 청구될 수 있습니다.',
      },
      {
        question: '벌금을 내면 전과가 완전히 사라지나요?',
        answer: '벌금형은 <strong>납부 후 2년이 지나면 실효</strong>됩니다(형의실효등에관한법률 제7조). 실효 후에는 일반적인 범죄경력조회에서 나타나지 않지만, 수사경력은 별도로 보관되며 특정 직종(공무원 등)의 결격사유 조회 시 확인될 수 있습니다.',
      },
      {
        question: '기소유예 받으면 완전히 끝나는 건가요?',
        answer: '<strong>기소유예는 전과가 아닙니다</strong>. 다만 수사기록은 보관되며, 향후 동종 범죄로 다시 적발될 경우 "전력"으로 참고되어 기소유예를 다시 받기 어렵습니다. 기소유예 후 동종 재범 시 정식 기소될 가능성이 높습니다.',
      },
    ],
    cta: {
      text: '성매매 초범 처벌 수위 관련 무료 진단받기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '성매매 가이드', href: '/guide/prostitution' },
      { label: '성매매 적발됐는데 어디부터 해야 하나', href: '/guide/prostitution/caught-where-to-start' },
      { label: '성매매 적발 시 초기 대응법', href: '/guide/prostitution/prostitution-arrest-response' },
      { label: '성매매 매수자 vs 매도자 처벌 비교', href: '/guide/prostitution/buyer-vs-seller-penalty-comparison' },
      { label: '온라인 성매매 채팅 적발 시 대응법', href: '/guide/prostitution/online-chat-arrest-response' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'buyer-vs-seller-penalty-comparison',
    keyword: '성매매 매수자 vs 매도자 처벌 비교',
    questionKeyword: '성매매에서 산 사람과 판 사람의 처벌 차이가 있나요?',
    ctaKeyword: '성매매 매수자 매도자 처벌',
    type: '비교형',
    meta: {
      title: '성매매 매수자 vs 매도자 처벌 비교 3가지 | 로앤가이드',
      description: '성매매 사건에서 매수자와 매도자의 처벌이 어떻게 다른지 궁금하다면, 법정형·실제 양형·전과 영향 3가지 차이점을 지금 확인하세요.',
    },
    intro: '성매매 사건에 연루되어 경찰 조사를 앞두고 있습니다. 돈을 주고 산 쪽과 받고 판 쪽의 처벌이 같은지, 자신의 입장에서 어떤 법률이 적용되는지 불분명합니다. 성매매처벌법은 매수자와 매도자에게 같은 법정형을 적용하지만, 실제 처분과 양형에서는 의미 있는 차이가 존재합니다.',
    comparison: {
      title: '성매매 매수자 vs 매도자 처벌 비교표',
      headers: ['구분', '매수자(성구매자)', '매도자(성판매자)'],
      rows: [
        { label: '적용 법조', values: ['성매매처벌법 제21조 제1항', '성매매처벌법 제21조 제1항'] },
        { label: '법정형', values: ['1년 이하 징역 또는 300만원 이하 벌금', '1년 이하 징역 또는 300만원 이하 벌금'] },
        { label: '초범 실제 처분', values: ['기소유예 또는 벌금 100~200만원', '기소유예 또는 벌금 100만원 전후'] },
        { label: '기소유예 조건', values: ['존스쿨 40시간 교육 이수', '성매매 피해자 보호 프로그램 연계'] },
        { label: '피해자 인정 가능성', values: ['인정 불가', '성매매처벌법 제6조 피해자 해당 시 처벌 면제'] },
        { label: '재범 시 양형', values: ['벌금 200~300만원 또는 징역형', '벌금 가중 또는 보호처분'] },
      ],
    },
    sections: [
      {
        title: '첫째, 법정형은 동일하지만 수사·기소 단계에서 차이가 납니다',
        content:
          '<p><strong style="color:#1e3a5f">성매매처벌법 제21조 제1항은 매수자와 매도자 모두에게 1년 이하의 징역 또는 300만원 이하의 벌금을 규정합니다</strong></p>\n<p>법 조문상으로는 <strong>매수자와 매도자의 법정형이 완전히 동일</strong>합니다. 그러나 수사·기소 실무에서는 차이가 있습니다. 매도자의 경우 <strong>성매매 피해자에 해당하는지</strong>를 먼저 판단하며, 위계·위력·채무 등으로 성매매를 강요당한 경우 처벌 대상에서 제외됩니다.</p>\n<p>매수자의 경우 <strong>피해자 인정이 불가능</strong>하며, 수요 근절 차원에서 엄정하게 처벌하는 추세입니다. 특히 미성년자 대상 매수의 경우 아동·청소년의성보호에관한법률이 적용되어 <strong>법정형이 대폭 상향</strong>됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 법정형 동일 → 매도자는 피해자 인정 가능 → 매수자는 엄정 처벌 추세</blockquote>',
      },
      {
        title: '둘째, 실제 양형에서 매수자가 더 무거운 처벌을 받는 경향이 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">최근 수년간 성매매 매수자에 대한 양형이 점차 강화되고 있습니다</strong></p>\n<p>초범 매수자의 일반적 처분: <strong>기소유예(존스쿨 40시간 교육 이수 조건) 또는 벌금 100~200만원</strong>. 재범 매수자: <strong>벌금 200~300만원 또는 징역형(집행유예 포함)</strong>.</p>\n<p>매도자의 경우: 성매매처벌법 제6조에 따라 <strong>성매매 피해자</strong>에 해당하면 처벌이 면제됩니다. 피해자에 해당하지 않는 매도자도 초범의 경우 <strong>벌금 100만원 전후 또는 보호처분</strong>으로 종결되는 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 차이: 매수자 벌금 100~200만원 → 매도자 보호처분 또는 벌금 100만원 전후</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">내 성매매 혐의 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 성매매 피해자 인정 여부가 매도자의 처분을 결정합니다',
        content:
          '<p><strong style="color:#1e3a5f">성매매처벌법 제6조에 따라 위계·위력 또는 그 밖에 이에 준하는 방법으로 성매매를 강요당한 사람은 처벌하지 않습니다</strong></p>\n<p>매도자가 <strong>성매매 피해자</strong>로 인정되는 경우: ①인신매매 피해자 ②채무, 감금, 폭행 등으로 강요된 경우 ③미성년자 ④마약 등으로 의사결정 능력을 잃은 경우. 이 경우 <strong>형사 처벌 면제</strong>는 물론, 성매매 피해자 지원시설 연계가 이루어집니다.</p>\n<p>반면 매수자는 성매매 피해자 규정의 적용을 받지 않으며, <strong>상대방이 미성년자인 경우 청소년성보호법 적용</strong>으로 법정형이 1년 이상으로 대폭 상향됩니다. 상대방의 나이를 몰랐다는 항변은 인정되기 어렵습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">매도자: 피해자 인정 시 처벌 면제 → 매수자: 피해자 규정 적용 불가, 미성년자 대상 시 가중처벌</blockquote>',
      },
    ],
    cases: [
      {
        title: '성매매 관련 처벌 기준에 관한 대법원 판결',
        summary:
          '대법원 2020도3626 사건에서 법원은 성매매 사건에서 매수자와 매도자의 관계, 대가의 수수 방법, 알선 여부 등을 종합적으로 고려하여 각 당사자의 책임 범위를 판단해야 하며, 형식적인 법조 동일성만으로 양형을 같게 할 수 없다고 판시했습니다.',
        takeaway:
          '같은 법정형이 적용되더라도 매수자와 매도자의 실제 양형은 다를 수 있습니다. 자신의 입장(매수/매도)에서 유리한 양형 요소를 변호사와 함께 구체적으로 준비하세요.',
      },
    ],
    faq: [
      {
        question: '매수자와 매도자 중 누가 더 무거운 처벌을 받나요?',
        answer: '법정형은 동일하지만, 최근 추세상 <strong>매수자에 대한 처벌이 더 엄격</strong>합니다. 매도자는 피해자 인정 가능성이 있고 보호처분 전환이 가능하지만, 매수자는 수요 근절 목적으로 기소율이 높아지고 있습니다.',
      },
      {
        question: '성매매 알선자의 처벌은 어떻게 다른가요?',
        answer: '성매매 알선자는 <strong>성매매처벌법 제19조</strong>에 따라 3년 이하의 징역 또는 3천만원 이하의 벌금에 처합니다. 영업으로 알선한 경우 <strong>7년 이하의 징역 또는 7천만원 이하의 벌금</strong>으로 크게 가중됩니다.',
      },
      {
        question: '매도자가 피해자로 인정받으려면 어떤 증거가 필요한가요?',
        answer: '강요·협박·채무 관계를 입증할 수 있는 <strong>대화 기록, 금전 이체 내역, 진술서, 의료기록</strong> 등이 필요합니다. 성매매 피해자 지원센터(1644-6012)를 통해 법률 지원과 증거 수집 도움을 받을 수 있습니다.',
      },
      {
        question: '매수 사실을 부인하면 불이익이 있나요?',
        answer: '증거가 충분한 상태에서 사실을 부인하면 <strong>"반성하지 않는 태도"로 양형에 불리</strong>하게 작용할 수 있습니다. 다만 증거가 불충분하거나 사실관계가 다른 경우 적극적으로 다투는 것이 필요하므로, 반드시 변호사 상담 후 진술 방향을 결정하세요.',
      },
    ],
    cta: {
      text: '성매매 처벌 비교 관련 무료 진단받기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '성매매 가이드', href: '/guide/prostitution' },
      { label: '성매매 초범 처벌 수위와 감경', href: '/guide/prostitution/prostitution-first-offense-sentencing' },
      { label: '성매매 적발 시 초기 대응법', href: '/guide/prostitution/prostitution-arrest-response' },
      { label: '성매매 알선 수사~재판 절차', href: '/guide/prostitution/solicitation-investigation-to-trial' },
      { label: '성매매 적발됐는데 어디부터 해야 하나', href: '/guide/prostitution/caught-where-to-start' },
    ],
  },
  {
    domain: 'industrial-accident1',
    slug: 'workers-comp-medical-claim-process',
    keyword: '산재보험 요양급여 신청 절차와 기한',
    questionKeyword: '산재보험 요양급여는 어떻게 신청하고 기한은 언제까지인가요?',
    ctaKeyword: '산재 요양급여 신청',
    type: '절차타임라인형',
    meta: {
      title: '산재 요양급여 신청 5단계 절차와 기한 | 로앤가이드',
      description: '산재를 당했는데 요양급여 신청 방법과 기한이 궁금하다면, 근로복지공단 접수부터 승인까지 5단계 절차를 지금 확인하세요.',
    },
    intro: '작업 중 기계에 손가락이 끼어 병원에서 수술을 받았습니다. 회사에서 산재 처리를 해준다고 했지만, 며칠째 아무런 진행이 없습니다. 산재보험 요양급여를 직접 신청하려면 어떤 절차를 밟아야 하는지, 기한은 언제까지인지 전혀 감이 잡히지 않습니다. 산재 요양급여 신청의 전체 과정을 단계별로 정리해보세요.',
    timelineSteps: [
      '1단계: 산재 사고 발생 → 병원 응급 치료(즉시)',
      '2단계: 요양급여신청서 + 초진 소견서 작성(사고 후 가능한 빨리)',
      '3단계: 근로복지공단 관할 지사에 접수(사고 발생일로부터 3년 이내)',
      '4단계: 공단 조사 및 업무상 재해 여부 판단(접수 후 14~30일)',
      '5단계: 승인 시 요양급여 지급 개시 → 불승인 시 90일 이내 심사청구',
    ],
    sections: [
      {
        title: '1단계: 사고 발생 즉시 병원 치료를 받고 진료 기록을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제40조에 따라 업무상 재해를 입은 근로자는 요양급여를 받을 권리가 있습니다</strong></p>\n<p>사고 직후에는 <strong>치료가 최우선</strong>입니다. 가까운 산재 지정병원을 이용하면 본인 부담 없이 치료를 받을 수 있습니다. 비지정 병원에서 먼저 치료를 받았더라도 나중에 <strong>요양급여로 전환 신청</strong>이 가능합니다.</p>\n<p>병원에서 <strong>①초진 소견서 ②진단서 ③영상검사 결과(X-ray, MRI 등)</strong>를 반드시 확보하세요. 이 자료가 산재 승인의 핵심 증거가 됩니다. 사고 경위를 상세하게 기록한 <strong>재해경위서</strong>도 함께 작성해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시: 병원 치료 → 초진 소견서·진단서 확보 → 재해경위서 작성</blockquote>',
      },
      {
        title: '2단계: 요양급여신청서를 작성하고 필요 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">요양급여신청서는 근로복지공단 홈페이지에서 다운로드하거나 관할 지사에서 받을 수 있습니다</strong></p>\n<p>신청서 작성 시 필수 기재 사항: <strong>①재해 근로자 인적사항 ②사업장 정보 ③재해 발생 일시·장소·경위 ④상병명(진단서 기준) ⑤요양 기간</strong></p>\n<p>첨부 서류: <strong>①초진 소견서(지정 양식) ②재해경위서 ③근로계약서 사본 ④임금 관련 자료(최근 3개월 급여명세서)</strong>. 사업주 확인을 받아야 하지만, <strong>사업주가 거부할 경우 근로자가 단독으로 신청</strong>할 수 있습니다(산업재해보상보험법 제41조 제2항).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 요양급여신청서 + 초진 소견서 + 재해경위서 + 근로계약서 + 급여명세서</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">내 산재 요양급여 신청 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 근로복지공단 관할 지사에 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">요양급여 청구권의 소멸시효는 3년입니다(산업재해보상보험법 제112조). 사고 발생일로부터 3년 이내에 신청해야 합니다</strong></p>\n<p>접수 방법: <strong>①관할 지사 방문 접수 ②우편 접수 ③근로복지공단 홈페이지 온라인 접수</strong>. 온라인 접수가 가장 빠르며, 접수 즉시 접수번호가 부여됩니다.</p>\n<p>관할 지사는 <strong>사업장 소재지</strong> 기준으로 결정됩니다. 접수 후에는 공단 담당자가 배정되며, 추가 자료 요청이 있을 수 있으므로 <strong>담당자 연락처</strong>를 반드시 확인해두세요. 접수 후 진행 상황은 근로복지공단 앱(고용·산재보험 토탈서비스)에서 확인 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 온라인·방문·우편 중 선택 → 접수번호 확인 → 담당자 연락처 기록</blockquote>',
      },
      {
        title: '4단계: 공단 조사 과정에서 적극적으로 협조하세요',
        content:
          '<p><strong style="color:#1e3a5f">접수 후 공단은 업무상 재해 여부를 판단하기 위해 현장 조사, 의학 자문 등을 실시합니다</strong></p>\n<p>조사 기간은 일반적으로 <strong>14일~30일</strong>이며, 사안이 복잡한 경우(직업성 질병, 업무 관련성 다툼 등) <strong>60일 이상</strong> 소요될 수 있습니다. 공단 조사관이 <strong>사업장 방문 조사, 목격자 확인, CCTV 확인</strong> 등을 진행합니다.</p>\n<p>조사 과정에서 <strong>동료 진술서, 사고 현장 사진, 작업 일지</strong> 등 추가 증거를 제출하면 승인 확률이 높아집니다. 사업주가 산재 신청에 비협조적이더라도 <strong>법적으로 사업주의 동의 없이도 신청이 가능</strong>하므로 포기하지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사 기간: 14~30일(일반) / 60일+(복잡) → 추가 증거 제출로 승인율 제고</blockquote>',
      },
      {
        title: '5단계: 승인 또는 불승인 결정에 따른 후속 조치를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">승인 시 치료비·휴업급여·간병급여 등이 지급되며, 불승인 시 90일 이내에 심사청구할 수 있습니다</strong></p>\n<p><strong>승인 시 받을 수 있는 급여:</strong> ①요양급여(치료비 전액) ②휴업급여(평균임금의 70%) ③간병급여(간병이 필요한 경우) ④이송비(통원 치료 교통비)</p>\n<p><strong>불승인 시 대응:</strong> 결정 통지를 받은 날로부터 <strong>90일 이내</strong>에 근로복지공단에 <strong>심사청구</strong>를 할 수 있습니다. 심사청구에서도 불승인되면 <strong>산업재해보상보험재심사위원회에 재심사청구</strong>(심사결정 통지 후 90일 이내), 또는 <strong>행정소송</strong>을 제기할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불승인 대응: 90일 이내 심사청구 → 재심사청구 또는 행정소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법 위반과 산업안전보건 의무에 관한 대법원 판결',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 중대재해처벌법 위반 사건에서 사업주 및 경영책임자가 안전보건관리체계를 구축하고 이행할 의무를 게을리한 경우, 중대산업재해 발생에 대한 경영진의 형사책임이 인정될 수 있다고 판시했습니다.',
        takeaway:
          '산재 사고가 사업주의 안전 의무 위반으로 발생한 경우, 요양급여 신청과 별도로 사업주에 대한 형사고소 및 손해배상 청구도 가능합니다. 사고 원인이 회사의 안전 조치 미비에 있다면 반드시 법률 상담을 받으세요.',
      },
    ],
    faq: [
      {
        question: '회사가 산재 신청을 막으면 어떻게 하나요?',
        answer: '<strong>사업주 동의 없이도 근로자가 직접 신청할 수 있습니다</strong>(산업재해보상보험법 제41조 제2항). 요양급여신청서의 사업주 확인란이 비어 있어도 접수 가능하며, 사업주의 산재 은폐 시 산업안전보건법 위반으로 신고할 수 있습니다.',
      },
      {
        question: '산재 요양급여와 건강보험 치료를 동시에 받을 수 있나요?',
        answer: '<strong>동시 적용은 불가합니다</strong>. 산재로 승인되면 그동안 건강보험으로 치료받은 비용을 근로복지공단이 건강보험공단에 정산합니다. 산재 신청 중에는 우선 건강보험으로 치료받고, 승인 후 전환하면 됩니다.',
      },
      {
        question: '요양급여 신청 기한 3년을 놓치면 완전히 못 받나요?',
        answer: '소멸시효 3년이 경과하면 <strong>원칙적으로 청구권이 소멸</strong>합니다. 다만 질병의 경우 "발병 사실을 안 날"부터 기산하므로, 뒤늦게 직업성 질병으로 진단받은 경우에는 진단일 기준 3년 이내에 신청할 수 있습니다.',
      },
      {
        question: '산재 승인되면 치료비를 얼마나 받을 수 있나요?',
        answer: '요양급여는 <strong>치료에 필요한 비용 전액</strong>을 지급합니다. 입원비, 수술비, 약제비, 재활치료비는 물론 의사가 인정하는 보조기구 비용까지 포함됩니다. 본인 부담금이 없는 것이 건강보험과의 가장 큰 차이입니다.',
      },
      {
        question: '산재 신청하면 회사에서 불이익을 주지 않나요?',
        answer: '산업재해보상보험법 제111조에 따라 <strong>산재 신청을 이유로 한 해고·불이익 처분은 위법</strong>입니다. 위반 시 2년 이하의 징역 또는 2천만원 이하의 벌금에 처해집니다. 불이익을 받은 경우 노동위원회에 부당해고 구제신청이 가능합니다.',
      },
    ],
    cta: {
      text: '산재 요양급여 신청 관련 무료 진단받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산업재해 가이드', href: '/guide/industrial-accident1' },
      { label: '출퇴근 사고 산재 인정 기준', href: '/guide/industrial-accident1/commute-accident-recognition' },
      { label: '산재 장해급여 등급 판정 절차', href: '/guide/industrial-accident1/disability-benefit-grade-process' },
      { label: '산재 당했는데 어디부터 해야 하나', href: '/guide/industrial-accident1/injured-where-to-start' },
      { label: '사업주 형사책임과 손해배상', href: '/guide/industrial-accident1/employer-criminal-liability-accident' },
    ],
  },
  {
    domain: 'industrial-accident1',
    slug: 'commute-accident-recognition',
    keyword: '출퇴근 중 사고 산재 인정 기준',
    questionKeyword: '출퇴근 중 사고를 당했는데 산재로 인정받을 수 있나요?',
    ctaKeyword: '출퇴근 산재 인정',
    type: '상황형',
    meta: {
      title: '출퇴근 사고 산재 인정 3가지 기준과 예외 | 로앤가이드',
      description: '출퇴근 중 교통사고를 당했는데 산재 인정이 되는지 궁금하다면, 법에서 정한 3가지 인정 기준과 예외 사유를 지금 확인하세요.',
    },
    intro: '퇴근길 지하철역 계단에서 넘어져 허리를 다쳤습니다. 병원에서는 디스크 탈출증으로 최소 2개월 치료가 필요하다고 합니다. 출퇴근 중 사고도 산재로 처리할 수 있다고 들었지만, 회사 밖에서 일어난 사고라 인정이 될지 확신이 없습니다. 2018년 법 개정 이후 출퇴근 재해 인정 기준이 어떻게 바뀌었는지 확인해보세요.',
    sections: [
      {
        title: '첫째, 출퇴근 재해 인정의 3가지 필수 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제37조 제1항 제3호에 따라 출퇴근 중 발생한 사고는 3가지 요건을 충족하면 업무상 재해로 인정됩니다</strong></p>\n<p><strong>① 통상적인 경로:</strong> 주거지와 취업 장소 사이의 합리적인 이동 경로를 말합니다. 매일 동일한 경로가 아니더라도 교통 상황에 따라 합리적으로 선택한 경로면 인정됩니다.</p>\n<p><strong>② 통상적인 방법:</strong> 도보, 자가용, 대중교통, 자전거, 킥보드 등 사회통념상 합리적인 이동 수단을 사용한 경우입니다. <strong>음주운전, 무면허운전</strong>은 통상적인 방법이 아니므로 제외됩니다.</p>\n<p><strong>③ 출퇴근 목적:</strong> 이동의 목적이 업무 수행을 위한 출퇴근이어야 합니다. 퇴근 후 개인 약속을 위해 이동 중 발생한 사고는 출퇴근 재해가 아닙니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3가지 요건: 통상적 경로 + 통상적 방법 + 출퇴근 목적 → 모두 충족해야 산재 인정</blockquote>',
      },
      {
        title: '둘째, 경로 이탈·중단이 있더라도 인정되는 5가지 예외를 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 시행령 제35조는 일상생활에 필요한 경로 이탈을 허용하며, 복귀 후 사고는 출퇴근 재해로 인정합니다</strong></p>\n<p>인정되는 경로 이탈 사유 5가지: <strong>①일용품 구매(마트·편의점 방문) ②교육기관 수강 ③선거권 행사 ④부양가족 병원 동행 ⑤본인 병원 방문</strong></p>\n<p>중요한 것은 <strong>해당 용무를 마치고 통상적인 경로로 복귀한 후</strong>의 사고만 인정된다는 점입니다. 마트 안에서 넘어진 경우나, 병원 내에서 발생한 사고는 출퇴근 재해로 인정되지 않습니다. 복귀 경로에서의 사고가 핵심입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">예외 인정: 장보기·병원·교육 등 용무 후 복귀 경로에서의 사고 → 출퇴근 재해 인정</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">내 출퇴근 사고가 산재로 인정되는지 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 출퇴근 재해가 인정되지 않는 경우를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로자의 고의·과실이 중대한 경우 출퇴근 재해 인정이 제한됩니다</strong></p>\n<p><strong>인정되지 않는 대표 사례:</strong> ①<strong>음주운전·무면허운전</strong> 중 사고(통상적인 방법 미충족) ②<strong>사적 용무를 위한 대폭 우회</strong> 중 사고(친구 만남, 술자리 등) ③<strong>재택근무자의 실내 사고</strong>(출퇴근 자체가 존재하지 않음) ④<strong>자해 행위</strong></p>\n<p>다만 음주운전이라 하더라도 <strong>상대 차량의 신호위반 등 제3자 과실이 주된 원인</strong>이면 출퇴근 재해로 인정될 가능성이 있습니다. 단순히 음주 상태였다는 이유만으로 일률적으로 배제되지는 않으며, 사고 원인과 음주의 관련성을 종합적으로 판단합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불인정: 음주·무면허 운전 + 사적 우회 + 재택근무 + 자해 → 예외적으로 제3자 과실 주원인 시 인정 가능</blockquote>',
      },
      {
        title: '넷째, 출퇴근 재해 신청 시 추가로 준비할 증거를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">일반 산재와 달리 출퇴근 재해는 이동 경로와 시간을 입증할 추가 자료가 필요합니다</strong></p>\n<p>추가 입증 자료 체크리스트: <strong>①출퇴근 경로도(집→사고지점→회사 지도) ②교통카드 사용 기록 또는 차량 하이패스 기록 ③블랙박스·CCTV 영상 ④교통사고 증명원(경찰 발급) ⑤출근 기록(타임카드, 지문인식 등) ⑥동료 목격 진술</strong></p>\n<p>특히 <strong>사고 발생 시간이 출퇴근 시간대와 일치하는지</strong>가 핵심 판단 기준입니다. 정시 출퇴근이 아닌 유연근무제를 사용하는 경우 근무 일정표도 함께 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 증거: 경로도 + 교통카드/하이패스 + 블랙박스 + 출근 기록 + 사고 시간 일치 입증</blockquote>',
      },
    ],
    cases: [
      {
        title: '산재 장해등급 판정과 신경·정신기능 평가에 관한 대법원 판결',
        summary:
          '대법원 2024두50063 사건(2025.12.11 선고)에서 법원은 산재 장해등급 판정 시 신경·정신기능 장해를 포함하여 종합적으로 평가해야 하며, 외상 후 스트레스 등 정신적 장해도 업무상 재해의 후유증으로 인정될 수 있다고 판시했습니다.',
        takeaway:
          '출퇴근 사고로 신체적 부상뿐 아니라 정신적 후유증(PTSD, 우울증 등)이 발생한 경우에도 장해급여를 청구할 수 있습니다. 정신건강의학과 진단서를 함께 준비하세요.',
      },
    ],
    faq: [
      {
        question: '자전거나 전동킥보드로 출퇴근하다 넘어져도 산재 인정되나요?',
        answer: '<strong>네, 자전거·전동킥보드도 통상적인 이동 수단으로 인정됩니다</strong>. 다만 안전모 미착용이나 음주 상태에서의 이용은 과실로 판단될 수 있으므로, 사고 원인과 이용 상태를 정확히 기록해두세요.',
      },
      {
        question: '재택근무 중 외부 미팅을 위해 이동하다 사고가 나면?',
        answer: '재택근무 중 <strong>사업주 지시에 의한 외부 업무 이동</strong>은 출퇴근이 아닌 "업무상 이동"에 해당하여, 출퇴근 재해가 아니라 <strong>업무상 사고</strong>로 인정됩니다. 오히려 인정 범위가 더 넓을 수 있습니다.',
      },
      {
        question: '출퇴근 재해로 휴업급여를 받으면 회사 월급도 받나요?',
        answer: '동시 수령은 <strong>이중보상 금지 원칙</strong>에 따라 제한됩니다. 다만 회사가 유급 병가를 제공하는 경우 휴업급여와의 차액을 조정받을 수 있습니다. 무급 상태라면 휴업급여(평균임금의 70%)를 수령합니다.',
      },
      {
        question: '출퇴근 중 사고인데 상대방 차량 보험으로 처리하면 산재 신청은 못 하나요?',
        answer: '<strong>둘 다 가능합니다</strong>. 자동차보험과 산재보험은 별개 제도입니다. 다만 치료비가 이중 지급되지는 않으며, 근로복지공단이 자동차보험사에 구상권을 행사하는 방식으로 정산됩니다. 산재로 처리하면 휴업급여 등 추가 급여를 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '출퇴근 산재 인정 관련 무료 진단받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산업재해 가이드', href: '/guide/industrial-accident1' },
      { label: '산재 요양급여 신청 절차와 기한', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
      { label: '산재 장해급여 등급 판정 절차', href: '/guide/industrial-accident1/disability-benefit-grade-process' },
      { label: '산재 당했는데 어디부터 해야 하나', href: '/guide/industrial-accident1/injured-where-to-start' },
      { label: '사업주 형사책임과 손해배상', href: '/guide/industrial-accident1/employer-criminal-liability-accident' },
    ],
  },
  {
    domain: 'industrial-accident1',
    slug: 'injured-where-to-start',
    keyword: '산재 당했는데 어디부터 해야 하나',
    questionKeyword: '산재를 당했는데 지금 당장 무엇부터 해야 하나요?',
    ctaKeyword: '산재 초기 대응',
    type: '어디부터형',
    meta: {
      title: '산재 발생 후 해야 할 일 5가지 순서 | 로앤가이드',
      description: '산재를 당했는데 무엇부터 해야 할지 모르겠다면, 사고 직후부터 보상 신청까지 해야 할 일 5가지를 순서대로 지금 확인하세요.',
    },
    intro: '공장에서 작업 중 무거운 자재가 떨어져 어깨를 다쳤습니다. 병원에 갔더니 인대 파열로 수술이 필요하다고 합니다. 산재 처리를 해야 한다는 건 알겠는데, 당장 무엇부터 해야 할지 도무지 감이 잡히지 않습니다. 치료비, 휴업급여, 회사와의 관계까지 한꺼번에 걱정이 밀려옵니다.',
    sections: [
      {
        title: '첫째, 사고 직후 증거를 확보하고 병원 치료를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">사고 현장의 증거는 시간이 지나면 사라지므로, 치료와 동시에 증거 확보를 병행해야 합니다</strong></p>\n<p>사고 직후 해야 할 일: <strong>①사고 현장 사진·동영상 촬영(기계, 자재, 작업 환경) ②동료 목격자 이름·연락처 확보 ③사고 일시·경위를 메모(스마트폰 녹음도 가능) ④119 또는 병원 이송 → 진료</strong></p>\n<p>병원에서는 반드시 <strong>"직장에서 작업 중 다쳤다"</strong>고 정확히 말하세요. 초진 기록에 업무 관련성이 기재되어야 산재 승인에 유리합니다. <strong>산재 지정병원</strong>을 이용하면 본인 부담 없이 치료를 시작할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시: 현장 사진 → 목격자 확보 → 사고 경위 메모 → 병원에서 "작업 중 부상" 고지</blockquote>',
      },
      {
        title: '둘째, 회사에 산재 신고를 요청하고 비협조 시 직접 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제57조에 따라 사업주는 산업재해가 발생하면 지체 없이 기록·보고해야 합니다</strong></p>\n<p>회사에 <strong>산재 발생 보고</strong>를 요청하세요. 대부분의 회사는 인사·총무 담당자가 근로복지공단에 요양급여신청서를 대행 제출합니다. 그러나 회사가 <strong>"공상 처리하자" "건강보험으로 하자"</strong>고 하면 주의해야 합니다.</p>\n<p>공상 처리의 문제점: <strong>①법적 보호를 받지 못함 ②치료가 길어지면 비용 부담 전가 ③휴업급여·장해급여 수급 불가</strong>. 회사가 산재 신청을 거부하거나 미루면 <strong>근로자가 직접 근로복지공단에 신청</strong>할 수 있습니다(산업재해보상보험법 제41조 제2항).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 회사에 산재 신고 요청 → 거부 시 직접 근로복지공단 신청 → 공상 처리 합의 금지</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">내 산재 상황에 맞는 대응법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 요양급여신청서와 필요 서류를 빠르게 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">요양급여신청서는 사고 후 가능한 빨리 제출하는 것이 승인율을 높이는 핵심입니다</strong></p>\n<p>필요 서류 체크리스트: <strong>①요양급여신청서(공단 양식) ②초진 소견서(담당 의사 작성) ③재해경위서(사고 발생 과정 상세 기술) ④근로계약서 사본 ⑤최근 3개월 급여명세서</strong></p>\n<p>재해경위서 작성 팁: <strong>①작업 내용 ②사고 발생 시각 ③사고 원인(기계 고장, 안전장치 미비 등) ④부상 부위와 정도</strong>를 시간순으로 구체적으로 기술하세요. "자재가 떨어졌다"보다 <strong>"14시경 3층 적재대에서 30kg 철판이 고정 장치 풀림으로 낙하"</strong>가 훨씬 좋은 기술입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 요양급여신청서 + 초진 소견서 + 재해경위서(구체적) + 근로계약서 + 급여명세서</blockquote>',
      },
      {
        title: '넷째, 휴업급여와 치료비 보장 범위를 미리 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">산재 승인 시 치료비 전액과 휴업급여(평균임금의 70%)를 받을 수 있습니다</strong></p>\n<p><strong>받을 수 있는 급여 종류:</strong> ①요양급여(치료비 전액 — 입원, 수술, 재활, 약제비 포함) ②휴업급여(요양으로 취업하지 못한 기간 × 평균임금의 70%) ③간병급여(간병이 필요한 경우 1일 기준 지급) ④이송비(통원 치료 교통비)</p>\n<p>치료 종결 후에는 <strong>장해급여</strong>(장해가 남은 경우), <strong>직업재활급여</strong>(직업 복귀 훈련)도 신청할 수 있습니다. 각 급여별 신청 시기가 다르므로, 근로복지공단 담당자에게 <strong>급여 수급 일정표</strong>를 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">급여 종류: 요양(치료비) + 휴업(임금 70%) + 간병 + 이송비 + 장해(치료 후)</blockquote>',
      },
      {
        title: '다섯째, 사업주의 안전 의무 위반 여부를 확인하고 추가 보상을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">산재보험 급여와 별도로 사업주 과실이 있으면 민사 손해배상 청구가 가능합니다</strong></p>\n<p>사업주 과실이 인정되는 경우: <strong>①안전교육 미실시 ②안전장비 미지급 ③위험 작업 안전 조치 미이행 ④산업안전보건법상 조치 의무 위반</strong></p>\n<p>산재보험은 <strong>과실 여부와 관계없이 지급</strong>되지만, 사업주에게 명백한 과실이 있다면 산재보험 급여로 보전되지 않는 <strong>위자료, 일실수입 차액</strong> 등을 민사소송으로 추가 청구할 수 있습니다. 중대재해처벌법 적용 사업장이라면 <strong>경영책임자 형사처벌</strong>도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 보상: 사업주 과실 확인 → 민사 손해배상(위자료+일실수입) → 중대재해법 적용 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '석탄산업 보상과 재활급여에 관한 대법원 판결',
        summary:
          '대법원 2022두50694 사건(2025.11.13 선고)에서 법원은 진폐증 등 직업성 질병으로 산재 인정을 받은 근로자에 대해 재활급여와 치료비 보상이 장기간에 걸쳐 지급되어야 하며, 치료 종결 시점의 판단은 의학적 소견을 종합하여 신중하게 결정해야 한다고 판시했습니다.',
        takeaway:
          '산재 치료는 단기간에 끝나지 않을 수 있습니다. 치료 종결 시점은 의학적 판단에 따라 결정되며, 조기에 치료를 종결하라는 회사의 요구에 응하지 마세요. 재활급여를 통해 직업 복귀까지 지원받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '산재 신청하면 회사에서 해고당하지 않나요?',
        answer: '<strong>산재 신청을 이유로 한 해고는 위법입니다</strong>(산업재해보상보험법 제111조). 요양 중인 기간과 그 후 30일간은 근로기준법 제23조에 따라 해고가 금지됩니다. 해고 위협을 받으면 노동청(1350)에 즉시 신고하세요.',
      },
      {
        question: '일용직·계약직도 산재보험 적용을 받나요?',
        answer: '<strong>네, 1인 이상 사업장의 모든 근로자</strong>는 고용 형태와 관계없이 산재보험 적용 대상입니다. 일용직, 계약직, 파트타임 근로자도 모두 포함됩니다. 사업주가 보험료를 납부하지 않았더라도 근로자의 수급권은 보장됩니다.',
      },
      {
        question: '회사가 "공상 처리"를 제안하면 어떻게 하나요?',
        answer: '<strong>공상 처리에 합의하지 마세요</strong>. 공상은 법적 보호가 없어 치료가 길어지면 비용을 근로자가 부담하게 됩니다. 산재 처리 시 치료비 전액, 휴업급여, 장해급여를 법적으로 보장받을 수 있습니다.',
      },
      {
        question: '산재 신청부터 승인까지 얼마나 걸리나요?',
        answer: '일반적인 사고성 재해는 접수 후 <strong>14일~30일</strong> 내에 결정됩니다. 직업성 질병(근골격계 질환, 직업병 등)은 조사 기간이 길어 <strong>2~3개월</strong> 소요될 수 있습니다. 승인 전에도 산재 지정병원에서 치료를 받을 수 있습니다.',
      },
      {
        question: '사고 발생 후 시간이 많이 지났는데 지금도 산재 신청 가능한가요?',
        answer: '요양급여 청구권의 소멸시효는 <strong>사고 발생일로부터 3년</strong>입니다(산업재해보상보험법 제112조). 3년이 지나지 않았다면 지금이라도 신청 가능하지만, 시간이 지날수록 인과관계 입증이 어려워지므로 최대한 빨리 신청하세요.',
      },
    ],
    cta: {
      text: '산재 초기 대응 관련 무료 진단받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산업재해 가이드', href: '/guide/industrial-accident1' },
      { label: '산재 요양급여 신청 절차와 기한', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
      { label: '출퇴근 사고 산재 인정 기준', href: '/guide/industrial-accident1/commute-accident-recognition' },
      { label: '산재 장해급여 등급 판정 절차', href: '/guide/industrial-accident1/disability-benefit-grade-process' },
      { label: '사업주 형사책임과 손해배상', href: '/guide/industrial-accident1/employer-criminal-liability-accident' },
    ],
  },
];
