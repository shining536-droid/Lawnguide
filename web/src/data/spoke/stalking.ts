import { SpokePage } from '../spoke-pages';

export const stalkingPages: SpokePage[] = [
  {
    domain: 'stalking',
    slug: 'stalking-immediate-response',
    keyword: '스토킹 피해를 받고 있을 때 즉시 대응법',
    questionKeyword: '스토킹을 당하고 있는데 어떻게 대응해야 하나요?',
    ctaKeyword: '스토킹 즉시 대응',
    type: '상황형',
    meta: {
      title: '스토킹 피해 시 즉시 해야 할 4단계 대응법 | 로앤가이드',
      description:
        '누군가가 계속 따라오고 연락이 멈추지 않나요? 긴급응급조치, 접근금지, 잠정조치 신청과 증거 수집 방법을 지금 확인하세요.',
    },
    intro:
      '퇴근길마다 누군가가 따라옵니다. 하루에도 수십 통의 문자와 부재중 전화가 쌓여 있습니다. 집 앞에서 기다리고 있는 것을 발견한 날, 더 이상 혼자 감당할 수 없다는 걸 깨달았습니다. 스토킹처벌법에 따라 지금 바로 취할 수 있는 조치를 정리했습니다.',
    timelineSteps: ['112 신고·긴급응급조치', '증거 확보', '접근금지·잠정조치', '형사 고소·피해자 보호'],
    sections: [
      {
        title: '112에 신고하고 긴급응급조치를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법에 따라 경찰이 현장에서 긴급응급조치를 할 수 있습니다</strong></p>\n<p><strong>스토킹범죄의 처벌 등에 관한 법률</strong>(스토킹처벌법)이 2021년 10월부터 시행되었습니다. 스토킹 행위가 발생하면 <strong>112에 즉시 신고</strong>하세요. 경찰은 현장에서 가해자에게 <strong>긴급응급조치</strong>를 할 수 있습니다.</p>\n<p>긴급응급조치에는 ①스토킹 행위의 <strong>중단 통보</strong>, ②피해자로부터 <strong>100미터 이내 접근 금지</strong>, ③피해자에 대한 <strong>전기통신(전화·문자·SNS) 접근 금지</strong>가 포함됩니다. 이 조치는 현장에서 즉시 이루어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 조치: 112 신고 → 긴급응급조치(접근 금지, 통신 접근 금지)</blockquote>',
      },
      {
        title: '스토킹 증거를 체계적으로 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">반복성과 지속성을 증명하는 것이 핵심입니다</strong></p>\n<p>스토킹은 <strong>반복적으로</strong> 접근하거나 연락하는 행위를 말합니다. 따라서 ①문자·카카오톡·SNS DM 등 <strong>연락 내역 스크린샷</strong>(날짜·시간 포함), ②부재중 전화 <strong>통화 기록</strong>, ③집이나 직장 앞 대기 장면 <strong>CCTV·사진·동영상</strong>을 확보하세요.</p>\n<p><strong>날짜별로 기록을 정리</strong>하는 것이 중요합니다. "몇 월 몇 일, 몇 시에 어떤 행위가 있었다"는 식으로 일지를 작성해두면 수사와 재판에서 유리합니다. 거부 의사를 명확히 전달한 기록(문자 등)도 남겨두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 연락 내역 캡처, 통화 기록, CCTV/사진, 피해 일지 작성</blockquote>',
      },
      {
        title: '접근금지·잠정조치를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원의 잠정조치로 가해자의 접근을 법적으로 차단할 수 있습니다</strong></p>\n<p>긴급응급조치 이후 검사는 법원에 <strong>잠정조치</strong>를 청구할 수 있습니다. 잠정조치에는 ①피해자 주거·직장 등 <strong>특정 장소 접근 금지</strong>, ②피해자에 대한 <strong>전기통신 접근 금지</strong>, ③<strong>유치장 또는 구치소 유치</strong>(최대 1개월)가 포함됩니다.</p>\n<p>잠정조치를 <strong>위반하면 2년 이하 징역 또는 2,000만원 이하 벌금</strong>에 처해집니다. 경찰에 신고할 때 잠정조치 신청 의사를 명확히 밝히세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">잠정조치: 접근 금지, 통신 금지, 유치 가능 | 위반 시 2년/2,000만원</blockquote>',
      },
      {
        title: '형사 고소를 진행하고 피해자 보호를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄는 3년 이하 징역 또는 3,000만원 이하 벌금에 처해집니다</strong></p>\n<p><strong>스토킹범죄</strong>(반복적 스토킹 행위)는 3년 이하 징역 또는 3,000만원 이하 벌금입니다. 흉기를 휴대하거나 2명 이상이 공동으로 한 경우 <strong>5년 이하 징역 또는 5,000만원 이하 벌금</strong>으로 가중됩니다.</p>\n<p>피해자는 <strong>스마트워치</strong>(위치 추적 장치), <strong>주거지 CCTV 설치 지원</strong>, <strong>임시 숙소 제공</strong> 등 피해자 보호 서비스를 받을 수 있습니다. 관할 경찰서나 <strong>여성긴급전화 1366</strong>에 문의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 3년/3,000만원(기본) | 5년/5,000만원(흉기·공동) | 피해자 보호: 1366</blockquote>',
      },
    ],
    cases: [
      {
        title: '반복 문자·미행으로 스토킹죄가 인정된 사례',
        summary:
          '관련 사례에서도 헤어진 연인에게 하루 수십 통의 문자를 보내고, 퇴근길에 반복적으로 미행한 행위가 스토킹범죄로 인정되어 징역 6개월(집행유예 2년)이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 거부 의사를 문자로 명확히 전달하고, 이후 연락과 미행 기록을 날짜별로 정리하세요.',
      },
      {
        title: '잠정조치 위반으로 실형이 선고된 사례',
        summary:
          '관련 사례에서도 법원의 접근금지 잠정조치가 내려졌음에도 피해자 직장 앞에 나타나 잠정조치 위반으로 실형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 잠정조치가 내려진 후에도 가해자가 접근하면 즉시 112에 신고하세요.',
      },
    ],
    faq: [
      {
        question: '스토킹의 법적 정의는 무엇인가요?',
        answer:
          '상대방의 의사에 반하여 <strong>접근·미행, 주거 등 부근 배회, 우편·전화·문자 등 연락, 물건 배달</strong> 등을 반복하는 행위입니다.',
      },
      {
        question: '전 연인의 반복 연락도 스토킹인가요?',
        answer:
          '상대방이 <strong>거부 의사를 밝혔는데도</strong> 반복적으로 연락하거나 접근하면 스토킹에 해당합니다.',
      },
      {
        question: '스토킹처벌법은 언제부터 시행되었나요?',
        answer:
          '<strong>2021년 10월 21일</strong>부터 시행되었습니다. 이전에는 경범죄처벌법상 지속적 괴롭힘으로만 처리되었습니다.',
      },
      {
        question: '긴급응급조치와 잠정조치의 차이는?',
        answer:
          '긴급응급조치는 <strong>경찰이 현장에서 즉시</strong> 하는 것이고, 잠정조치는 <strong>검사 청구 → 법원 결정</strong>으로 이루어지는 더 강력한 조치입니다.',
      },
      {
        question: '증거가 문자밖에 없어도 고소할 수 있나요?',
        answer:
          '네, <strong>반복적인 문자 기록</strong>만으로도 스토킹 행위를 증명할 수 있습니다. 날짜와 횟수가 중요합니다.',
      },
      {
        question: '피해자 신변보호 서비스는 어떤 것이 있나요?',
        answer:
          '<strong>스마트워치(위치 추적), CCTV 설치, 임시 숙소 제공, 신변경호</strong> 등을 지원받을 수 있습니다.',
      },
      {
        question: '스토킹 가해자와 합의하면 처벌이 안 되나요?',
        answer:
          '스토킹범죄는 <strong>반의사불벌죄가 아닙니다</strong>. 합의해도 검찰이 기소할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), 여성긴급전화(1366), 범죄피해자지원센터(1577-1295)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 스토킹 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'stalking-penalty-restraining-order',
    keyword: '스토킹 처벌 기준과 접근금지 신청 방법',
    questionKeyword: '스토킹은 어떤 처벌을 받고 접근금지는 어떻게 신청하나요?',
    ctaKeyword: '스토킹 피해 대응',
    type: '수치기한형',
    meta: {
      title: '스토킹 처벌 기준과 접근금지 신청 총정리 | 로앤가이드',
      description: '스토킹 처벌 수위가 궁금하신가요? 3년 이하 징역, 긴급응급조치, 접근금지 잠정조치 신청 방법과 증거 확보까지 바로 정리해보세요.',
    },
    intro: '헤어진 전 연인이 계속 연락을 합니다. 집 앞에서 기다리고 있는 걸 여러 번 목격했습니다. 차단해도 새 번호로 문자가 옵니다. 스토킹처벌법으로 처벌이 가능한지, 접근금지를 어떻게 받을 수 있는지 정리해보세요.',
    timelineSteps: ['스토킹 해당 여부 확인', '처벌 수위 파악', '접근금지 잠정조치 신청', '증거 확보'],
    sections: [
      {
        title: '스토킹행위에 해당하는지 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">반복적인 접근·연락·추적이 핵심 요건입니다</strong></p>\n<p><strong>스토킹범죄의 처벌 등에 관한 법률</strong>에서 스토킹행위란 상대방의 의사에 반하여 ①<strong>접근하거나 미행</strong>하는 행위, ②주거·직장·학교 등 <strong>부근에서 배회·대기</strong>하는 행위, ③우편·전화·문자·SNS 등으로 <strong>반복 연락</strong>하는 행위, ④물건을 놓아두거나 <strong>배달</strong>하는 행위를 말합니다.</p>\n<p>이러한 행위가 <strong>반복적으로</strong> 이루어져야 스토킹범죄가 성립합니다. 한 번의 연락은 스토킹으로 인정되기 어렵지만, 거부 의사를 밝힌 뒤에도 <strong>지속적으로 반복</strong>되면 스토킹에 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 요건: 의사에 반하여 + 접근/연락/미행/배회 + 반복적 행위</blockquote>',
      },
      {
        title: '처벌 수위 — 3년 이하 징역, 3,000만원 이하 벌금',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄는 징역 또는 벌금에 처해지며, 가중 처벌도 있습니다</strong></p>\n<p><strong>스토킹범죄</strong>(반복적 스토킹 행위)의 기본 처벌은 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>입니다. 흉기를 휴대하거나 2명 이상이 공동으로 한 경우에는 <strong>5년 이하 징역 또는 5,000만원 이하 벌금</strong>으로 가중됩니다.</p>\n<p>잠정조치(접근금지 등)를 위반한 경우에는 <strong>2년 이하 징역 또는 2,000만원 이하 벌금</strong>이 추가로 부과됩니다. 스토킹범죄는 <strong>반의사불벌죄가 아니므로</strong> 피해자와 합의하더라도 검찰이 기소할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 기본 3년/3,000만원 | 가중 5년/5,000만원 | 잠정조치 위반 2년/2,000만원</blockquote>',
      },
      {
        title: '긴급응급조치와 접근금지 잠정조치를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">112 신고 즉시 긴급응급조치, 이후 법원의 잠정조치를 받을 수 있습니다</strong></p>\n<p>스토킹 행위가 발생하면 <strong>112에 즉시 신고</strong>하세요. 경찰은 현장에서 <strong>긴급응급조치</strong>로 ①행위 중단 통보, ②피해자로부터 <strong>100미터 이내 접근 금지</strong>, ③전기통신 접근 금지를 할 수 있습니다.</p>\n<p>긴급응급조치 이후 검사는 법원에 <strong>잠정조치</strong>를 청구합니다. 잠정조치에는 ①특정 장소 <strong>접근 금지</strong>, ②전기통신 접근 금지, ③<strong>유치장 또는 구치소 유치</strong>(최대 1개월)가 포함됩니다. 112 신고 시 잠정조치 신청 의사를 명확히 밝히세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 112 신고 → 긴급응급조치(즉시) → 검사 청구 → 법원 잠정조치(접근금지)</blockquote>',
      },
      {
        title: 'CCTV·메시지·통화기록으로 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">반복성을 증명하는 날짜별 기록이 가장 중요합니다</strong></p>\n<p>스토킹 증거는 <strong>반복성과 지속성</strong>을 보여주는 것이 핵심입니다. ①문자·카카오톡·SNS DM 등 <strong>연락 내역 스크린샷</strong>(날짜·시간 포함), ②부재중 전화 <strong>통화 기록</strong>, ③집이나 직장 앞 CCTV 영상, ④직접 촬영한 사진·동영상을 확보하세요.</p>\n<p><strong>피해 일지</strong>를 작성하는 것을 권장합니다. "몇 월 몇 일, 몇 시에 어떤 행위가 있었다"는 식으로 정리하면 수사와 재판에서 유리합니다. 거부 의사를 <strong>문자로 명확히 전달한 기록</strong>도 반드시 남겨두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 연락 캡처(날짜 포함), 통화 기록, CCTV, 사진, 피해 일지, 거부 의사 기록</blockquote>',
      },
    ],
    cases: [
      {
        title: '차단 후에도 새 번호로 반복 연락하여 스토킹죄가 인정된 사례',
        summary:
          '관련 사례에서도 피해자가 전화번호를 차단했음에도 새 번호로 수십 통의 문자를 보내고 SNS 계정을 바꿔 DM을 보낸 행위가 반복적 스토킹으로 인정되어 징역 8개월(집행유예 2년)이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 차단 기록과 새 번호로 온 연락 내역을 모두 캡처해서 반복성을 증명하세요.',
      },
      {
        title: '접근금지 잠정조치로 가해자 접근이 차단된 사례',
        summary:
          '관련 사례에서도 법원의 접근금지 잠정조치가 내려진 후 가해자가 피해자 주거지 500미터 이내에 접근하여 잠정조치 위반으로 추가 기소되고 실형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 잠정조치가 내려진 후에도 가해자가 접근하면 즉시 112에 신고하세요.',
      },
    ],
    faq: [
      {
        question: '전 연인의 반복 연락도 스토킹인가요?',
        answer: '상대방이 <strong>거부 의사를 밝혔는데도</strong> 반복적으로 연락하거나 접근하면 스토킹에 해당합니다.',
      },
      {
        question: '몇 번 이상 연락해야 스토킹인가요?',
        answer: '법률에 명확한 횟수 기준은 없습니다. <strong>거부 의사 이후 반복</strong>되면 성립할 수 있으며, 횟수와 기간을 종합적으로 판단합니다.',
      },
      {
        question: '접근금지 잠정조치는 얼마나 유지되나요?',
        answer: '<strong>최대 2개월</strong>이며, 2개월 단위로 연장 가능합니다. 총 6개월까지 연장됩니다.',
      },
      {
        question: '증거가 문자밖에 없어도 고소할 수 있나요?',
        answer: '네, <strong>반복적인 문자 기록</strong>만으로도 스토킹 행위를 증명할 수 있습니다. 날짜와 횟수가 중요합니다.',
      },
      {
        question: '스토킹 가해자와 합의하면 처벌이 안 되나요?',
        answer: '스토킹범죄는 <strong>반의사불벌죄가 아닙니다</strong>. 합의해도 검찰이 기소할 수 있습니다.',
      },
      {
        question: '긴급응급조치는 바로 받을 수 있나요?',
        answer: '네, <strong>112 신고 즉시</strong> 경찰이 현장에서 긴급응급조치를 할 수 있습니다.',
      },
      {
        question: '피해자 보호 서비스는 어떤 것이 있나요?',
        answer: '<strong>스마트워치(위치 추적), CCTV 설치, 임시 숙소 제공, 신변경호</strong> 등을 지원받을 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132), 여성긴급전화(1366), 범죄피해자지원센터(1577-1295)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 스토킹 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
      { label: '스토킹 피해를 받고 있을 때 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '성범죄 가이드', href: '/guide/sexual-harassment' },
      { label: '이혼 가이드', href: '/guide/divorce' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'ex-partner-contact-stalking-criteria',
    keyword: '전 연인 연락이 스토킹인지 판단 기준',
    questionKeyword: '전 연인이 계속 연락하는데 이것도 스토킹인가요?',
    ctaKeyword: '스토킹 판단',
    type: 'Q&A형',
    meta: {
      title: '전 연인 반복 연락, 스토킹인지 판단 기준 | 로앤가이드',
      description:
        '전 연인이 계속 연락하는데 이것도 스토킹일까요? 스토킹처벌법 요건, 해당 여부 판단 기준, 신고 절차를 지금 확인하세요.',
    },
    intro:
      '헤어진 전 연인이 매일 전화하고 문자를 보냅니다. 차단해도 새 번호로 연락이 옵니다. 카카오톡을 탈퇴했더니 인스타그램 DM으로 메시지가 쏟아집니다. 이게 스토킹에 해당하는 건지, 신고하면 처벌이 되는 건지 확인해보세요.',
    timelineSteps: ['스토킹 해당 여부 확인', '증거 수집', '경찰 신고', '접근금지 명령'],
    sections: [
      {
        title: '전 연인의 반복 연락 — 스토킹에 해당하는 기준은 이렇습니다',
        content:
          '<p><strong style="color:#1e3a5f">거부 의사를 밝혔는데도 반복적으로 연락하면 스토킹에 해당합니다</strong></p>\n<p><strong>스토킹범죄의 처벌 등에 관한 법률</strong>(스토킹처벌법)에서 스토킹행위란 상대방의 의사에 반하여 ①접근하거나 미행하는 행위, ②주거·직장 부근에서 배회·대기하는 행위, ③우편·전화·문자·SNS 등으로 <strong>반복 연락</strong>하는 행위, ④물건을 놓아두거나 배달하는 행위를 말합니다.</p>\n<p>핵심 요건은 <strong>"상대방의 의사에 반하여"</strong>와 <strong>"반복적"</strong>입니다. 한 번의 연락은 스토킹으로 인정되기 어렵지만, <strong>거부 의사를 명확히 전달한 이후에도 연락이 계속</strong>되면 스토킹에 해당합니다. "연락하지 마세요"라는 문자를 보낸 뒤에도 계속 연락이 온다면 이 요건을 충족합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판단 기준: 거부 의사 + 반복적 연락·접근 = 스토킹 해당 | 1회는 인정 어려움</blockquote>',
      },
      {
        title: '스토킹 증거를 어떻게 모아야 하나요',
        content:
          '<p><strong style="color:#1e3a5f">반복성과 거부 의사 전달을 증명하는 것이 핵심입니다</strong></p>\n<p>스토킹 신고와 재판에서 가장 중요한 증거는 <strong>반복성</strong>을 보여주는 자료입니다. ①문자·카카오톡·SNS DM 등 <strong>연락 내역 스크린샷</strong>(날짜·시간이 보이게), ②부재중 전화 <strong>통화 기록</strong>, ③차단 후 새 번호로 온 연락 기록을 모두 저장하세요.</p>\n<p><strong>거부 의사를 전달한 증거</strong>도 매우 중요합니다. "더 이상 연락하지 마세요"라는 문자를 보내고 그 스크린샷을 남겨두세요. 그 이후에 온 연락이 모두 스토킹 증거가 됩니다. <strong>날짜별 피해 일지</strong>를 작성하면 수사와 재판에서 큰 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 거부 의사 문자 캡처 + 이후 연락 기록 전부 저장 + 날짜별 피해 일지</blockquote>',
      },
      {
        title: '경찰에 신고하면 어떤 조치를 받을 수 있나요',
        content:
          '<p><strong style="color:#1e3a5f">112 신고 즉시 긴급응급조치가 가능하고, 이후 접근금지 잠정조치를 받을 수 있습니다</strong></p>\n<p>스토킹 행위가 발생하면 <strong>112에 신고</strong>하세요. 경찰은 현장에서 <strong>긴급응급조치</strong>를 할 수 있습니다. ①행위 중단 통보, ②피해자로부터 <strong>100미터 이내 접근 금지</strong>, ③<strong>전화·문자·SNS 접근 금지</strong>가 포함됩니다.</p>\n<p>긴급응급조치 이후 검사는 법원에 <strong>잠정조치</strong>를 청구할 수 있습니다. 잠정조치에는 ①특정 장소 접근 금지, ②전기통신 접근 금지, ③<strong>유치장 또는 구치소 유치(최대 1개월)</strong>가 포함됩니다. 잠정조치를 <strong>위반하면 2년 이하 징역 또는 2,000만원 이하 벌금</strong>에 처해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 112 → 긴급응급조치(즉시) → 잠정조치(법원 결정) | 위반 시 2년/2,000만원</blockquote>',
      },
      {
        title: '스토킹 처벌 수위와 피해자 보호 서비스를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄는 3년 이하 징역, 흉기 사용 시 5년까지 가중됩니다</strong></p>\n<p><strong>스토킹범죄</strong>(반복적 스토킹 행위)의 기본 처벌은 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>입니다. 흉기를 휴대하거나 2명 이상이 공동으로 한 경우 <strong>5년 이하 징역 또는 5,000만원 이하 벌금</strong>으로 가중됩니다. 스토킹범죄는 <strong>반의사불벌죄가 아니므로</strong> 합의해도 검찰이 기소할 수 있습니다.</p>\n<p>피해자는 <strong>스마트워치</strong>(위치 추적 장치), <strong>주거지 CCTV 설치 지원</strong>, <strong>임시 숙소 제공</strong>, 신변경호 등 보호 서비스를 받을 수 있습니다. <strong>여성긴급전화 1366</strong>이나 <strong>범죄피해자지원센터 1577-1295</strong>에 문의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 3년/3,000만원(기본), 5년/5,000만원(가중) | 보호: 1366, 1577-1295</blockquote>',
      },
    ],
    cases: [
      {
        title: '차단 후 새 번호·새 계정으로 반복 연락한 행위가 스토킹으로 인정된 사례',
        summary:
          '관련 사례에서도 헤어진 연인이 전화번호 차단 후 새 번호 3개를 개통하여 하루 20~30통씩 문자를 보내고, SNS 계정을 바꿔가며 DM을 보낸 행위가 반복적 스토킹으로 인정되어 징역 8개월(집행유예 2년)이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 차단 기록과 새 번호·새 계정으로 온 연락 내역을 모두 캡처하여 반복성을 증명하세요.',
      },
      {
        title: '거부 의사 문자가 핵심 증거가 된 사례',
        summary:
          '관련 사례에서도 피해자가 "다시는 연락하지 마세요"라는 문자를 보낸 기록이 남아 있었고, 그 이후 수십 통의 전화와 문자가 온 사실이 확인되어 스토킹 유죄가 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 거부 의사를 반드시 문자로 명확히 전달하고 그 기록을 보관하세요.',
      },
    ],
    faq: [
      {
        question: '몇 번 이상 연락해야 스토킹인가요?',
        answer:
          '법률에 명확한 횟수 기준은 없습니다. <strong>거부 의사 이후 반복적으로 연락</strong>하면 횟수와 기간을 종합하여 판단합니다.',
      },
      {
        question: '전 연인이 "대화하자"고만 하는 것도 스토킹인가요?',
        answer:
          '내용이 무엇이든 상대방이 <strong>거부했는데 반복적으로 연락</strong>하는 것 자체가 스토킹에 해당할 수 있습니다.',
      },
      {
        question: '카카오톡이나 인스타그램 DM도 증거가 되나요?',
        answer:
          '네, <strong>날짜와 시간이 보이는 스크린샷</strong>을 저장하면 유효한 증거가 됩니다.',
      },
      {
        question: '접근금지 잠정조치는 얼마나 유지되나요?',
        answer:
          '<strong>최대 2개월</strong>이며, 2개월 단위로 연장 가능합니다. 총 6개월까지 연장됩니다.',
      },
      {
        question: '스토킹 가해자와 합의하면 처벌이 안 되나요?',
        answer:
          '스토킹범죄는 <strong>반의사불벌죄가 아닙니다</strong>. 합의해도 검찰이 기소할 수 있습니다.',
      },
      {
        question: '직접 만나서 협박한 적은 없는데도 스토킹인가요?',
        answer:
          '직접 대면이 아니어도 <strong>전화·문자·SNS를 통한 반복 연락</strong>만으로 스토킹이 성립합니다.',
      },
      {
        question: '피해자 보호 서비스는 어떤 것이 있나요?',
        answer:
          '<strong>스마트워치(위치 추적), CCTV 설치, 임시 숙소 제공, 신변경호</strong> 등을 지원받을 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), 여성긴급전화(1366), 범죄피해자지원센터(1577-1295)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상황이 스토킹에 해당하는지 확인해보세요',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
      { label: '스토킹 피해를 받고 있을 때 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '스토킹 처벌 기준과 접근금지 신청 방법', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '이혼 가이드', href: '/guide/divorce' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'stalking-accused-response',
    keyword: '스토킹 고소당했을때',
    questionKeyword: '스토킹으로 고소당했는데 어떻게 대응해야 하나요?',
    ctaKeyword: '스토킹 혐의 대응 확인',
    type: '어디부터형',
    meta: {
      title: '스토킹 고소당했을 때 즉시 해야 할 3가지 | 로앤가이드',
      description: '스토킹으로 고소당해 경찰 출석 요구를 받으셨나요? 초기 대응, 잠정조치 대처, 처벌 감경 방법을 바로 정리해보세요.',
    },
    intro: '경찰서에서 전화가 왔습니다. 스토킹처벌법 위반으로 고소가 접수되었다고 합니다. 헤어진 연인에게 몇 번 연락한 것뿐인데 이게 범죄라니, 당황스럽습니다. 출석 요구에 무작정 가기 전에 무엇을 준비해야 하는지, 어떤 처벌을 받게 되는지 몰라 불안합니다. 스토킹 혐의를 받았을 때의 대응법을 정리했습니다.',
    sections: [
      {
        title: '경찰 출석 전 — 변호사 상담부터 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법은 2021년 시행된 비교적 새로운 법률로, 처벌 범위가 넓습니다</strong></p>\n<p>경찰 출석 전에 반드시 <strong>형사전문 변호사 상담</strong>을 받으세요. 스토킹처벌법(스토킹범죄의 처벌 등에 관한 법률)은 상대방에게 <strong>불안감이나 공포심을 유발하는 반복적 행위</strong>를 광범위하게 처벌합니다. 본인이 가볍게 여긴 연락이나 접근도 법적으로는 스토킹에 해당할 수 있습니다.</p>\n<p>출석 전에 <strong>상대방과의 연락 내역(카카오톡, 문자, 통화 기록), 만남 경위, 관계의 맥락</strong>을 정리하세요. 진술서를 미리 작성해 가면 출석조사에서 불리한 발언을 줄일 수 있습니다. 경찰 조사에서의 진술이 이후 재판에 결정적 영향을 미칩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 경찰 출석 전 변호사 상담 → 연락 내역 정리 → 진술서 사전 작성. 조사에서 "그냥 좋아해서 연락한 것뿐"이라는 식의 변명은 불리하게 작용합니다.</blockquote>',
      },
      {
        title: '잠정조치·긴급응급조치 — 즉시 이행이 필수입니다',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치를 위반하면 별도의 처벌(2년 이하 징역 또는 2,000만 원 이하 벌금)을 받습니다</strong></p>\n<p>경찰이나 법원이 <strong>접근금지, 연락금지, 100미터 이내 접근 제한</strong> 등 잠정조치를 내릴 수 있습니다. 잠정조치는 최대 2개월이며, 2개월 단위로 연장되어 총 6개월까지 유지됩니다. 긴급응급조치는 경찰이 현장에서 즉시 내리는 것으로, 이에 불응하면 과태료가 부과됩니다.</p>\n<p>잠정조치가 내려지면 <strong>상대방에게 어떤 방식으로든 연락하거나 접근해서는 안 됩니다</strong>. 공통 지인을 통한 간접 연락, SNS 팔로우, 상대방 주거지·직장 근처 배회도 위반에 해당합니다. 잠정조치 위반 시 스토킹 본 혐의와는 별개로 추가 처벌을 받게 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경고: 잠정조치 위반은 별도 범죄입니다. 간접적 접근(지인 통한 연락, SNS 활동)도 위반으로 판단될 수 있으니 철저히 준수하세요.</blockquote>',
      },
      {
        title: '혐의 대응 전략 — 스토킹 구성요건 검토',
        content:
          '<p><strong style="color:#1e3a5f">스토킹죄 성립에는 "반복성"과 "상대방의 불안감·공포심 유발"이 필요합니다</strong></p>\n<p>스토킹처벌법 제2조에 따르면, 스토킹행위란 상대방의 의사에 반하여 <strong>접근·미행·진로 방해, 주거지 등 부근에서 기다리거나 지켜보는 행위, 우편·전화·정보통신망을 이용한 연락</strong> 등을 말합니다. 이러한 행위가 반복되어 상대방에게 불안감이나 공포심을 일으키면 스토킹범죄가 됩니다.</p>\n<p>대응의 핵심은 <strong>①연락의 맥락(쌍방 소통이었는지 일방적이었는지), ②횟수와 빈도, ③상대방이 거부 의사를 명확히 표시했는지, ④행위의 위협성 수준</strong>을 객관적으로 따져보는 것입니다. 상대방의 거부 의사 이후에도 연락을 계속했다면 방어가 매우 어렵습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구성요건: 반복적 행위 + 상대방 의사에 반함 + 불안감·공포심 유발. 세 가지 요소 중 하나라도 부정할 수 있는 근거가 있으면 변호사와 함께 정리하세요.</blockquote>',
      },
      {
        title: '처벌 수위와 감경 요소 — 선처를 위한 준비',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄는 3년 이하의 징역 또는 3,000만 원 이하의 벌금에 처해집니다</strong></p>\n<p>스토킹처벌법 제18조에 따른 형량입니다. 흉기를 사용하거나 2인 이상이 공동으로 범행한 경우에는 <strong>5년 이하의 징역 또는 5,000만 원 이하의 벌금</strong>으로 가중 처벌됩니다. 초범이고 행위가 경미한 경우에는 벌금형이나 기소유예가 가능하지만, 반복 행위가 입증되면 실형도 선고됩니다.</p>\n<p>감경을 위해서는 <strong>①진심 어린 반성문 작성, ②피해자에 대한 간접적 사과(변호사를 통한 합의 시도), ③재범 방지를 위한 상담 프로그램 수강, ④잠정조치 성실 이행 기록</strong>이 도움이 됩니다. 다만 스토킹범죄는 반의사불벌죄가 아니므로, 피해자와 합의하더라도 검찰이 기소할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 전략: 반성문 + 상담 프로그램 수강 + 잠정조치 이행 + 변호사를 통한 합의 시도. 직접 피해자에게 연락하는 것은 절대 금물입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '헤어진 연인에 대한 반복 연락 — 스토킹처벌법 위반 유죄',
        summary: '교제 종료 후 상대방이 연락 거부 의사를 밝혔음에도 수십 회에 걸쳐 전화와 문자를 보낸 사안입니다. 법원은 상대방의 명시적 거부에도 불구하고 연락을 지속한 점을 들어 스토킹범죄를 인정하고 벌금 300만 원을 선고했습니다.',
        takeaway: '상대방이 거부 의사를 밝힌 이후에는 어떤 이유에서든 연락을 즉시 중단하세요. 연락 횟수와 거부 의사 표시 시점이 재판의 핵심 쟁점이 됩니다.',
      },
      {
        title: '잠정조치 위반 후 추가 기소 사례',
        summary: '접근금지 잠정조치를 받았음에도 피해자 직장 근처에서 기다린 사안입니다. 원래 스토킹 혐의와 별도로 잠정조치 위반으로 추가 기소되어 징역형을 선고받았습니다.',
        takeaway: '잠정조치가 내려지면 피해자와 관련된 모든 장소를 피하세요. 우연한 만남도 의도적 접근으로 오해받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '몇 번 연락한 것도 스토킹이 되나요?',
        answer: '횟수보다 <strong>상대방의 거부 의사에도 불구하고 반복</strong>했는지가 중요합니다. 2~3회라도 거부 후 연락이면 스토킹이 될 수 있습니다.',
      },
      {
        question: '스토킹 합의하면 처벌을 피할 수 있나요?',
        answer: '스토킹범죄는 <strong>반의사불벌죄가 아닙니다</strong>. 합의해도 검찰이 기소할 수 있지만, 양형에서 유리하게 작용합니다.',
      },
      {
        question: '카카오톡 메시지만 보낸 것도 스토킹인가요?',
        answer: '네, <strong>정보통신망을 이용한 반복적 연락</strong>도 스토킹에 해당합니다. 대면 접촉이 없어도 성립합니다.',
      },
      {
        question: '잠정조치 기간 동안 무엇을 해야 하나요?',
        answer: '<strong>상대방에 대한 일체의 접근·연락을 차단</strong>하고, 변호사를 통해 합의 여부를 타진하세요. 직접 연락은 절대 금지입니다.',
      },
      {
        question: '초범이면 어떤 처벌을 받나요?',
        answer: '초범이고 행위가 경미하면 <strong>벌금형이나 기소유예</strong>가 가능합니다. 반성문과 상담 수강 증명이 도움이 됩니다.',
      },
      {
        question: '공통 지인에게 안부를 물어보는 것도 위반인가요?',
        answer: '잠정조치 중이라면 <strong>간접적 연락도 위반</strong>으로 판단될 수 있습니다. 지인을 통한 접근도 삼가세요.',
      },
      {
        question: '국선변호인을 선임할 수 있나요?',
        answer: '구속 상태이거나 일정 요건을 충족하면 <strong>국선변호인 선정</strong>이 가능합니다. 그 외에는 사선 변호사를 선임해야 합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132), 대한변호사협회 법률구조재단에서 무료 상담이 가능합니다.',
      },
    ],
    cta: {
      text: '스토킹 혐의에 대한 대응 방법을 확인해보세요',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 피해를 받고 있을 때 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '스토킹 처벌 기준과 접근금지 신청 방법', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'stalking-evidence-collection-faq',
    keyword: '스토킹 증거 수집 방법 FAQ',
    questionKeyword: '스토킹 피해를 당하고 있는데 증거는 어떻게 모으나요?',
    ctaKeyword: '스토킹 증거 수집',
    type: 'Q&A형',
    meta: {
      title: '스토킹 증거 수집 5가지 방법 FAQ | 로앤가이드',
      description: '스토킹 증거를 어떻게 모아야 할지 막막하신가요? 디지털 증거, CCTV 확보, 목격자 확보, 피해 일지 작성까지 지금 확인하세요.',
    },
    intro: '헤어진 전 연인이 퇴근길마다 나타납니다. "우연이야"라고 하지만, 매일 같은 장소에서 마주치는 건 우연이 아닙니다. 경찰에 신고하려고 해도 "증거가 있어야 한다"는 말에 막막해집니다. 문자는 지워버렸고, CCTV는 어떻게 확보하는지도 모르겠습니다. 스토킹 증거를 체계적으로 수집하는 방법을 정리했습니다.',
    timelineSteps: ['디지털 증거 확보', 'CCTV·물리적 증거', '목격자·신고 이력', '증거 정리·제출'],
    sections: [
      {
        title: '디지털 증거부터 확보하세요 — 문자·카톡·SNS DM이 핵심입니다',
        content:
          '<p><strong style="color:#1e3a5f">디지털 연락 기록은 스토킹의 반복성을 증명하는 가장 강력한 증거입니다</strong></p>\n<p>스토킹처벌법에서 핵심 요건은 <strong>"반복성"</strong>입니다. 문자, 카카오톡, 인스타그램 DM, 페이스북 메시지 등 모든 연락 내역을 <strong>날짜와 시간이 보이도록 캡처</strong>하세요. 차단 후 새 번호나 새 계정으로 온 연락은 "차단을 우회했다"는 강력한 증거가 됩니다.</p>\n<p>부재중 전화 기록은 <strong>통신사 통화 내역 조회</strong>로 확보할 수 있습니다. SKT·KT·LGU+ 앱이나 고객센터에서 최근 6개월 통화 기록을 출력하세요. 거부 의사를 전달한 문자("다시 연락하지 마세요")는 반드시 캡처해서 보관하세요. 그 이후 모든 연락이 스토킹 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">디지털 증거: 메시지 캡처(날짜·시간 포함), 통화 내역(통신사 조회), 차단 기록, 거부 의사 문자 캡처</blockquote>',
      },
      {
        title: 'CCTV와 물리적 증거 — 미행과 배회를 증명하세요',
        content:
          '<p><strong style="color:#1e3a5f">CCTV 영상은 가해자의 접근과 배회를 객관적으로 증명합니다</strong></p>\n<p>집 앞이나 직장 근처에서 가해자가 배회하거나 대기하고 있다면 <strong>CCTV 영상</strong>이 결정적 증거가 됩니다. 아파트 관리사무소, 편의점, 건물 관리실에 CCTV 영상 보존을 요청하세요. CCTV 보존 기간은 통상 <strong>30일</strong>이므로 빠르게 요청해야 합니다.</p>\n<p>직접 촬영도 유효합니다. 가해자가 나타났을 때 <strong>스마트폰으로 사진이나 동영상</strong>을 촬영하세요(날짜·시간·장소가 기록됨). 가해자가 두고 간 선물, 편지, 택배 등은 버리지 말고 <strong>사진으로 기록한 뒤 보관</strong>하세요. 차량으로 미행하는 경우 <strong>블랙박스 영상</strong>도 증거가 됩니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">스토킹 증거를 어떻게 정리해야 할지 막막하다면 <a href="/diagnosis/stalking" style="color:#2563eb;font-weight:600">무료 진단</a>에서 상황을 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">물리적 증거: CCTV 보존 요청(30일 이내), 직접 촬영(사진·동영상), 선물·편지 보관, 블랙박스 영상</blockquote>',
      },
      {
        title: '목격자와 경찰 신고 이력 — 제3자의 확인이 증거력을 높입니다',
        content:
          '<p><strong style="color:#1e3a5f">목격자 진술과 경찰 신고 기록은 증거의 신뢰도를 높여줍니다</strong></p>\n<p>가해자가 나타난 현장을 목격한 <strong>동료, 친구, 이웃, 경비원</strong>이 있다면 연락처를 확보해두세요. 목격자는 수사와 재판에서 <strong>증인</strong>으로 출석하여 진술할 수 있습니다. 목격자가 직접 작성한 <strong>진술서</strong>(날짜, 장소, 목격 내용)도 증거로 제출할 수 있습니다.</p>\n<p><strong>112 신고 이력</strong>은 매우 중요한 증거입니다. 가해자가 나타날 때마다 112에 신고하고, 신고 번호와 출동 결과를 기록해두세요. 여러 차례 신고 이력이 있으면 <strong>반복성</strong>을 강력하게 증명할 수 있습니다. 경찰의 <strong>긴급응급조치 기록</strong>도 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">제3자 증거: 목격자 연락처 확보 + 진술서 작성 요청 | 신고 이력: 112 신고마다 번호 기록</blockquote>',
      },
      {
        title: '피해 일지와 증거 정리 — 수사·재판을 위한 최종 준비',
        content:
          '<p><strong style="color:#1e3a5f">날짜별 피해 일지를 작성하면 수사와 재판에서 결정적으로 유리합니다</strong></p>\n<p><strong>피해 일지</strong>를 작성하세요. 형식은 간단합니다: <strong>"날짜 / 시간 / 장소 / 행위 내용 / 증거 유무"</strong>. 예를 들어 "2026.3.15 / 19:30 / 자택 앞 / 30분간 대기 후 초인종 5회 누름 / CCTV 확보"처럼 기록합니다. 이 일지가 수사관과 판사에게 반복성을 한눈에 보여줍니다.</p>\n<p>모든 증거를 <strong>폴더별로 정리</strong>하세요. ①디지털 증거(메시지 캡처, 통화 기록), ②영상 증거(CCTV, 직접 촬영), ③물리적 증거(선물·편지 사진), ④목격자 진술서, ⑤경찰 신고 기록. 정리된 증거 파일을 <strong>클라우드</strong>에 백업해두면 원본 분실에 대비할 수 있습니다. 증거를 고소장이나 진술서에 첨부하여 경찰에 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정리: 피해 일지(날짜/시간/장소/행위/증거) + 증거 폴더 분류 + 클라우드 백업 + 고소장 첨부</blockquote>',
      },
    ],
    cases: [
      {
        title: '피해 일지와 CCTV 영상으로 스토킹죄가 인정된 사례',
        summary: '피해자가 3개월간 작성한 피해 일지와 아파트 CCTV 영상 12건을 증거로 제출한 사안입니다. 법원은 가해자가 거부 의사 이후에도 20회 이상 피해자 주거지 부근에서 배회한 사실이 반복적 스토킹에 해당한다고 판단하여 징역 10개월(집행유예 2년)을 선고했습니다.',
        takeaway: '비슷한 상황이라면 피해 일지를 매일 기록하고, CCTV 보존 요청을 30일 이내에 하세요.',
      },
      {
        title: '카카오톡 차단 우회 연락이 핵심 증거가 된 사례',
        summary: '피해자가 카카오톡을 차단한 후 가해자가 새 계정 3개를 만들어 총 200회 이상 메시지를 보낸 사안입니다. 피해자가 차단 기록과 새 계정 메시지를 모두 캡처하여 제출한 결과 스토킹범죄가 인정되었습니다.',
        takeaway: '비슷한 상황이라면 차단 기록을 캡처하고, 새 번호나 새 계정으로 온 연락도 모두 저장하세요.',
      },
    ],
    faq: [
      {
        question: '문자를 이미 지워버렸는데 복구할 수 있나요?',
        answer: '통신사에 <strong>문자 발신·수신 기록 조회</strong>를 요청할 수 있습니다. 내용은 복구가 어렵지만 발신 이력(날짜·시간·번호)은 확인 가능합니다.',
      },
      {
        question: 'CCTV 영상은 어떻게 확보하나요?',
        answer: '아파트 관리사무소, 편의점, 건물 관리실에 <strong>보존 요청</strong>을 하세요. 보존 기간이 통상 30일이므로 빠르게 요청해야 합니다.',
      },
      {
        question: '상대방 몰래 녹음해도 증거가 되나요?',
        answer: '대화 당사자가 녹음한 것은 <strong>증거로 인정</strong>됩니다. 다만 제3자의 대화를 몰래 녹음하면 통신비밀보호법 위반입니다.',
      },
      {
        question: '스마트폰 캡처만으로 증거력이 있나요?',
        answer: '네, <strong>날짜와 시간이 포함된 캡처</strong>는 유효한 증거입니다. 원본 데이터도 함께 보관하면 더 좋습니다.',
      },
      {
        question: '가해자가 선물을 두고 갔는데 어떻게 하나요?',
        answer: '버리지 말고 <strong>사진으로 기록한 뒤 보관</strong>하세요. 배달 기록이 있으면 함께 저장하세요. 물건 자체가 스토킹 증거입니다.',
      },
      {
        question: '112 신고를 여러 번 해도 되나요?',
        answer: '네, 가해자가 나타날 때마다 <strong>매번 신고</strong>하세요. 반복 신고 이력 자체가 스토킹의 반복성을 증명하는 강력한 증거입니다.',
      },
      {
        question: '피해 일지는 법적 효력이 있나요?',
        answer: '피해 일지는 <strong>참고 자료</strong>로서 증거력이 인정됩니다. 다른 증거(CCTV, 메시지)와 함께 제출하면 증거력이 더 높아집니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>여성긴급전화 1366</strong>, 대한법률구조공단(전화 132), 범죄피해자지원센터(1577-1295)를 활용하세요.',
      },
    ],
    cta: {
      text: '1분 안에 스토킹 증거 수집 준비사항 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 피해를 받고 있을 때 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '전 연인 연락이 스토킹인지 판단 기준', href: '/guide/stalking/ex-partner-contact-stalking-criteria' },
      { label: '가정폭력 이혼 보호명령 절차', href: '/guide/divorce/domestic-violence-divorce-protection' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'stalking-report-and-restraining-order',
    keyword: '스토킹 피해 신고 절차와 접근금지 신청법',
    questionKeyword: '스토킹 피해 신고는 어떻게 하고 접근금지는 어떻게 신청하나요?',
    ctaKeyword: '스토킹 신고·접근금지 신청',
    type: '절차타임라인형',
    meta: {
      title: '스토킹 신고부터 접근금지까지 3단계 절차 | 로앤가이드',
      description:
        '스토킹 피해를 신고하면 어떤 절차가 진행되나요? 112 신고, 긴급응급조치, 접근금지 잠정조치까지 단계별로 바로 정리해보세요.',
    },
    intro:
      '매일 퇴근길에 같은 사람이 따라오는 걸 느꼈지만, 확신이 없어 참았습니다. 어느 날 집 앞에서 기다리고 있는 모습을 목격하고 나서야 이건 분명한 스토킹이라는 걸 알았습니다. 신고를 해야 한다는 건 아는데, 경찰에 뭐라고 말해야 할지, 접근금지는 어떻게 신청해야 할지 막막합니다. 스토킹범죄의 처벌 등에 관한 법률(스토킹처벌법) 제3조에 따라 피해 신고부터 접근금지 잠정조치까지 단계별 절차를 안내합니다.',
    timelineSteps: ['피해 사실 정리·증거 확보', '112 신고·긴급응급조치', '잠정조치(접근금지) 신청', '형사 고소·피해자 보호'],
    sections: [
      {
        title: '1단계: 피해 사실을 정리하고 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">신고 전에 반복적 접근·연락의 증거를 체계적으로 모아야 합니다</strong></p>\n<p>스토킹처벌법 제2조에 따르면 스토킹 행위란 상대방의 의사에 반하여 <strong>반복적으로 접근하거나 연락</strong>하는 것을 말합니다. 신고 전에 다음 증거를 확보하세요.</p>\n<p>① 문자·카카오톡·인스타그램 DM 등 <strong>메시지 스크린샷</strong>(날짜·시간 포함) ② <strong>통화 기록</strong>(부재중 전화 횟수와 시간대) ③ 집·직장 앞 대기 장면이 촬영된 <strong>CCTV 영상이나 사진</strong> ④ 피해 일시·장소·행위를 기록한 <strong>피해 일지</strong></p>\n<p>특히 <strong>"다시는 연락하지 마세요"</strong>라는 거부 의사를 문자로 보낸 기록이 있으면, 이후 연락은 모두 스토킹의 증거가 됩니다. 거부 의사 전달 기록은 수사와 재판에서 핵심 증거로 활용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 거부 의사 전달 기록 + 이후 반복 연락 증거 = 스토킹 입증의 기본 구조</blockquote>',
      },
      {
        title: '2단계: 112에 신고하고 긴급응급조치를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰은 현장에서 즉시 긴급응급조치를 취할 수 있습니다</strong></p>\n<p>스토킹처벌법 제4조에 따라 경찰관은 스토킹 행위 신고를 받으면 현장에서 <strong>긴급응급조치</strong>를 할 수 있습니다. 긴급응급조치에는 ① 스토킹 행위의 <strong>중단 통보</strong> ② 피해자로부터 <strong>100미터 이내 접근 금지</strong> ③ <strong>전기통신(전화·문자·SNS) 접근 금지</strong>가 포함됩니다.</p>\n<p>112에 전화할 때는 <strong>"스토킹처벌법에 따른 스토킹 피해 신고"</strong>라고 명확히 말하세요. 단순 "미행" 신고와는 경찰의 대응 수준이 다릅니다. 신고 접수번호를 반드시 메모해두세요.</p>\n<p>경찰이 현장에 도착하면 준비한 증거를 보여주고, <strong>피해 경위서</strong>를 작성합니다. 이때 "얼마 전부터, 몇 회, 어떤 방식"이라는 구체적 진술이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 요령: "스토킹처벌법 위반" 명시 → 증거 제시 → 긴급응급조치 요청 → 접수번호 메모</blockquote>',
      },
      {
        title: '3단계: 잠정조치(접근금지)를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치는 법원의 결정으로 최대 6개월간 접근을 금지합니다</strong></p>\n<p>긴급응급조치는 일시적 효력만 있으므로, <strong>잠정조치를 신청</strong>하여 법적 보호를 강화해야 합니다. 스토킹처벌법 제9조에 따라 검사는 직권 또는 피해자의 요청에 의해 법원에 잠정조치를 신청합니다.</p>\n<p>잠정조치의 내용은 ① 피해자에 대한 <strong>접근 금지</strong> ② <strong>전기통신 접근 금지</strong> ③ 피해자 주거·학교·직장 등 <strong>특정 장소 100미터 이내 접근 금지</strong> ④ 국가경찰관서 유치장 또는 구치소 <strong>유치</strong>입니다.</p>\n<p>잠정조치 기간은 <strong>최대 2개월</strong>이며, 필요시 2개월 단위로 연장하여 총 <strong>6개월</strong>까지 가능합니다. 잠정조치를 위반하면 <strong>2년 이하의 징역 또는 2천만 원 이하의 벌금</strong>에 처해집니다(제18조 제2항).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">잠정조치: 법원 결정 → 접근금지·통신금지 → 최대 6개월 → 위반 시 2년 이하 징역</blockquote>',
      },
      {
        title: '4단계: 형사 고소를 진행하고 피해자 보호를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">고소장 제출로 가해자를 처벌하고 피해자 보호제도를 활용하세요</strong></p>\n<p>스토킹처벌법 제3조에 따라 <strong>스토킹 범죄</strong>는 3년 이하의 징역 또는 3천만 원 이하의 벌금에 처해집니다. 흉기를 사용하거나 2인 이상이 공동으로 한 경우에는 <strong>5년 이하의 징역 또는 5천만 원 이하의 벌금</strong>으로 가중 처벌됩니다.</p>\n<p>고소장에는 ① 가해자 인적사항 ② 피해 일시·장소·방법 ③ 증거 목록 ④ 처벌 의사를 기재합니다. 경찰서 민원실에 직접 제출하거나 우편으로 발송할 수 있습니다.</p>\n<p>범죄피해자보호법에 따라 <strong>신변보호</strong>(자택 주변 순찰 강화), <strong>주거지원</strong>(피해자 보호시설 연계), <strong>법률지원</strong>(국선 변호사 선임)도 요청하세요. 스토킹 피해자는 <strong>범죄피해자 지원센터(1577-1295)</strong>에서 무료 상담과 지원을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최종 보호: 형사 고소 + 신변보호 + 주거지원 + 법률지원(범죄피해자 지원센터 1577-1295)</blockquote>',
      },
    ],
    cases: [
      {
        title: '접근금지 잠정조치 위반으로 실형이 선고된 사례',
        summary:
          '관련 사례에서도 법원이 접근금지 잠정조치를 내렸음에도 불구하고 가해자가 피해자의 직장 앞에서 반복적으로 대기한 사실이 CCTV로 확인되어 잠정조치 위반으로 징역 1년이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 잠정조치 결정문을 항상 소지하고, 위반 행위 발생 시 즉시 112에 신고하여 현행범 체포를 요청하세요.',
      },
      {
        title: '체계적 증거 수집으로 스토킹 유죄를 이끌어낸 사례',
        summary:
          '관련 사례에서도 피해자가 3개월간 매일 피해 일지를 작성하고 문자·통화 기록을 정리한 결과, 총 287회의 반복 연락이 증명되어 스토킹처벌법 위반 유죄가 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 피해 일지를 매일 작성하고, 모든 연락 시도를 날짜·시간·방법별로 기록하세요.',
      },
    ],
    faq: [
      {
        question: '스토킹 신고는 가까운 경찰서에 가서 해야 하나요?',
        answer:
          '긴급한 상황에서는 <strong>112에 즉시 전화</strong>하세요. 긴급하지 않은 경우에는 가까운 경찰서 민원실을 방문하여 신고할 수 있습니다. 온라인(경찰청 사이버수사국)으로도 신고 가능합니다.',
      },
      {
        question: '긴급응급조치와 잠정조치의 차이가 뭔가요?',
        answer:
          '긴급응급조치는 <strong>경찰이 현장에서 즉시</strong> 취하는 조치이고, 잠정조치는 <strong>법원이 결정</strong>하는 조치입니다. 잠정조치가 법적 구속력이 더 강하고 기간도 길어(최대 6개월) 보호 효과가 큽니다.',
      },
      {
        question: '접근금지 잠정조치 신청은 피해자가 직접 하나요?',
        answer:
          '잠정조치는 <strong>검사가 법원에 신청</strong>합니다. 피해자는 담당 수사관이나 검사에게 잠정조치 신청을 요청할 수 있습니다. 요청서를 서면으로 제출하면 더 확실합니다.',
      },
      {
        question: '가해자가 잠정조치를 위반하면 어떻게 되나요?',
        answer:
          '잠정조치를 위반하면 <strong>2년 이하의 징역 또는 2천만 원 이하의 벌금</strong>에 처해집니다(스토킹처벌법 제18조 제2항). 위반 사실을 발견하면 즉시 112에 신고하세요.',
      },
      {
        question: '스토킹 신고 후 가해자가 보복할까 두렵습니다.',
        answer:
          '신고 시 <strong>신변보호 요청</strong>을 하세요. 경찰은 자택 주변 순찰 강화, 스마트워치 지급 등 신변보호 조치를 취합니다. 피해자 보호시설 입소도 가능합니다.',
      },
      {
        question: '스토킹 처벌 수위는 어느 정도인가요?',
        answer:
          '스토킹 행위는 <strong>3년 이하 징역 또는 3천만 원 이하 벌금</strong>, 흉기 사용이나 공동범행 시 <strong>5년 이하 징역 또는 5천만 원 이하 벌금</strong>입니다. 반의사불벌죄가 아니므로 피해자가 처벌 불원해도 처벌됩니다.',
      },
      {
        question: '스토킹 피해자가 이사 비용을 지원받을 수 있나요?',
        answer:
          '범죄피해자보호법에 따라 <strong>범죄피해자 지원센터(1577-1295)</strong>에서 긴급 주거지원, 이사 비용 지원, 임시 보호시설 연계를 받을 수 있습니다.',
      },
      {
        question: '스토킹 신고 시 꼭 변호사를 선임해야 하나요?',
        answer:
          '의무는 아니지만, <strong>국선 변호사</strong> 선임을 요청할 수 있습니다. 스토킹 피해자는 형사 절차에서 무료 법률 지원을 받을 수 있으니 범죄피해자 지원센터에 문의하세요.',
      },
    ],
    cta: {
      text: '1분 안에 스토킹 신고·접근금지 신청 준비사항 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 피해를 받고 있을 때 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '전 연인 연락이 스토킹인지 판단 기준', href: '/guide/stalking/ex-partner-contact-stalking-criteria' },
      { label: '스토킹 증거 수집 가이드', href: '/guide/stalking/stalking-evidence-collection-guide' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'stalking-false-report-defense',
    keyword: '스토킹 허위신고 대응',
    questionKeyword: '스토킹으로 허위신고 당했는데 어떻게 대응하나요?',
    ctaKeyword: '스토킹 허위신고 방어',
    type: '상황형',
    meta: {
      title: '스토킹 허위신고 당했을 때 대응 총정리 | 로앤가이드',
      description:
        '정당한 행위인데 스토킹으로 허위신고 당하셨나요? 방어 전략, 무고죄 역고소 절차와 증거 확보 방법을 지금 확인하세요.',
    },
    intro:
      '어느 날 갑자기 경찰에서 연락이 왔습니다. 스토킹으로 신고가 들어왔다는 겁니다. 공동 업무로 연락한 것뿐인데, 상대방이 스토킹이라고 신고한 상황입니다. 당혹스럽고 억울하지만 어떻게 대응해야 할지 모르겠습니다. 스토킹처벌법과 형법 제156조(무고죄)를 근거로, 허위신고에 맞서는 구체적 방어 전략을 안내합니다.',
    timelineSteps: ['상황 파악·증거 확보', '경찰 조사 대응', '혐의 반박·무고 입증', '무고죄 역고소 검토'],
    sections: [
      {
        title: '먼저 상황을 정확히 파악하고 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위신고에 대응하려면 정당한 연락 목적을 증명할 증거가 필수입니다</strong></p>\n<p>경찰 연락을 받으면 당황하지 말고, 먼저 <strong>어떤 내용으로 신고되었는지</strong> 정확히 확인하세요. 신고 내용(접근 금지 위반인지, 반복 연락인지 등)에 따라 방어 전략이 달라집니다.</p>\n<p>정당한 연락이었다면 그 <strong>목적과 맥락을 증명할 증거</strong>를 모으세요. ① 업무 관련 연락이었다면 <strong>업무 지시 메일, 회의록, 프로젝트 관련 대화 기록</strong> ② 공동 재산·자녀 문제였다면 <strong>재산 관련 서류, 양육 관련 협의 내용</strong> ③ 상대방이 먼저 연락한 기록이 있다면 그것도 중요한 증거입니다.</p>\n<p>모든 증거는 <strong>날짜·시간·맥락</strong>이 드러나도록 정리하세요. 연락의 <strong>횟수, 시간대, 내용</strong>을 표로 정리하면 "반복적 접근"이 아님을 효과적으로 보여줄 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 연락의 정당한 목적 + 맥락 증거 확보 → 스토킹 의도 부재 입증</blockquote>',
      },
      {
        title: '경찰 조사에서 진술 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사에서의 첫 진술이 사건의 방향을 좌우합니다</strong></p>\n<p>경찰 출석 전에 <strong>변호사 상담을 받는 것</strong>을 강력히 권합니다. 형사소송법 제244조의5에 따라 피의자에게는 <strong>변호인의 조력을 받을 권리</strong>가 있습니다. 변호사 없이 조사를 받으면 불리한 진술을 할 수 있습니다.</p>\n<p>진술 시 핵심 포인트: ① <strong>"상대방으로부터 거부 의사를 받은 적이 없다"</strong>는 점을 명확히 하세요. 스토킹 성립에는 상대방의 의사에 반하여 반복적으로 행위한 것이 필요합니다. ② 연락의 <strong>구체적 목적</strong>(업무, 공동 채무, 자녀 문제 등)을 설명하세요. ③ <strong>연락 빈도가 통상적 범위</strong>였음을 주장하세요.</p>\n<p>진술조서에 서명하기 전에 <strong>내용을 꼼꼼히 확인</strong>하세요. 잘못 기재된 부분이 있으면 수정을 요구할 권리가 있습니다(형사소송법 제244조).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 전략: 변호사 동행 → 거부 의사 부재 주장 → 정당 목적 설명 → 조서 확인 후 서명</blockquote>',
      },
      {
        title: '스토킹 혐의를 구체적으로 반박하세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹 구성요건 충족 여부를 하나씩 따져 반박해야 합니다</strong></p>\n<p>스토킹처벌법 제2조의 <strong>구성요건</strong>을 하나씩 따져보세요. ① <strong>상대방의 의사에 반하여</strong>: 상대방이 명시적으로 거부 의사를 표시한 적이 있는지? 거부 의사 전달 기록이 없다면 이 요건이 충족되지 않습니다. ② <strong>반복적으로</strong>: 연락 횟수가 사회통념상 "반복적"이라 볼 수 있는 수준인지? ③ <strong>불안감·공포심 유발</strong>: 연락 내용 자체가 위협적이거나 공포를 줄 만한 것이었는지?</p>\n<p>이 세 가지 요건 중 <strong>하나라도 충족되지 않으면</strong> 스토킹 범죄가 성립하지 않습니다. 특히 <strong>"상대방의 의사에 반하여"</strong>라는 요건이 핵심입니다. 상대방이 거부 의사를 밝힌 적이 없거나, 오히려 먼저 연락을 해온 기록이 있다면 강력한 반박 근거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">반박 포인트: ①거부 의사 부재 ②반복성 미달 ③불안감 유발 의도 부재 → 구성요건 불충족</blockquote>',
      },
      {
        title: '무고죄(형법 제156조) 역고소를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">명백한 허위신고라면 무고죄로 역고소할 수 있습니다</strong></p>\n<p>형법 제156조에 따라 <strong>타인으로 하여금 형사처분을 받게 할 목적</strong>으로 허위 사실을 신고한 자는 <strong>10년 이하의 징역 또는 1,500만 원 이하의 벌금</strong>에 처해집니다. 상대방이 스토킹이 아님을 알면서도 악의적으로 신고한 경우에 해당합니다.</p>\n<p>무고죄 역고소를 위해서는 ① 상대방의 신고 내용이 <strong>객관적 사실과 다르다는 증거</strong> ② 상대방에게 <strong>허위 신고의 고의</strong>가 있었다는 정황 증거(예: 보복 목적 메시지, 제3자 증언 등)가 필요합니다.</p>\n<p>다만 무고죄는 <strong>"허위임을 알면서" 신고한 경우</strong>에만 성립합니다. 상대방이 주관적으로 불안을 느껴 신고한 것이라면 무고죄 성립이 어려울 수 있으므로, 반드시 변호사와 상의하여 역고소 여부를 결정하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">무고죄: 허위 사실 + 형사처분 목적 + 고의 → 10년 이하 징역, 반드시 변호사 상담 후 결정</blockquote>',
      },
    ],
    cases: [
      {
        title: '업무 연락이 스토킹 혐의에서 벗어난 사례',
        summary:
          '관련 사례에서도 같은 프로젝트를 진행하던 동료가 업무 관련 연락을 수차례 한 것에 대해 스토킹으로 신고되었으나, 업무 메일·회의록·프로젝트 일정표를 증거로 제출하여 정당한 업무 연락으로 인정받아 불기소 처분된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 연락의 목적이 업무임을 증명할 수 있는 모든 자료(메일, 회의록, 업무 지시서)를 빠짐없이 확보하세요.',
      },
      {
        title: '보복 목적 허위신고로 무고죄가 인정된 사례',
        summary:
          '관련 사례에서도 이별 후 상대방이 재산 분쟁에서 유리한 위치를 점하기 위해 스토킹 허위신고를 한 사실이 밝혀져, 신고자에게 무고죄(형법 제156조)가 인정되어 벌금 500만 원이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 상대방의 신고 동기가 보복·이익 취득 목적임을 보여주는 정황 증거(메시지, 제3자 진술 등)를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '스토킹으로 신고당하면 바로 체포되나요?',
        answer:
          '일반적으로 <strong>즉시 체포되지는 않습니다</strong>. 경찰이 출석 요구를 하고 조사를 진행합니다. 다만 긴급응급조치로 접근금지 등이 내려질 수 있으므로 신속한 대응이 필요합니다.',
      },
      {
        question: '허위신고라고 판명되면 신고자에게 어떤 불이익이 있나요?',
        answer:
          '허위 사실로 형사처분을 받게 할 목적이었다면 <strong>무고죄(형법 제156조)로 10년 이하 징역 또는 1,500만 원 이하 벌금</strong>에 처해질 수 있습니다.',
      },
      {
        question: '변호사 없이 경찰 조사를 받아도 되나요?',
        answer:
          '가능하지만 <strong>권장하지 않습니다</strong>. 첫 진술이 사건 방향을 크게 좌우하므로, 최소한 조사 전 변호사 상담을 받으세요. 경제적 여건이 어려우면 법률구조공단(132)에서 무료 상담을 받을 수 있습니다.',
      },
      {
        question: '스토킹 혐의가 인정되면 전과 기록이 남나요?',
        answer:
          '유죄 판결이 확정되면 <strong>전과 기록이 남습니다</strong>. 그래서 초기 대응이 매우 중요합니다. 불기소 처분이나 무죄 판결을 받으면 전과 기록은 남지 않습니다.',
      },
      {
        question: '상대방이 거부 의사를 밝힌 적이 없는데도 스토킹이 성립하나요?',
        answer:
          '스토킹은 <strong>"상대방의 의사에 반하여" 반복적으로</strong> 행위해야 성립합니다. 거부 의사가 명시적으로 전달된 기록이 없다면, 스토킹 성립이 어려울 수 있습니다.',
      },
      {
        question: '무고죄 역고소는 언제 하는 것이 좋은가요?',
        answer:
          '본인의 <strong>스토킹 혐의가 불기소 또는 무죄로 확정된 후</strong>에 역고소하는 것이 유리합니다. 다만 공소시효(무고죄는 7년)가 있으므로 변호사와 시기를 상의하세요.',
      },
      {
        question: '스토킹 신고 자체가 접근금지 사유가 되나요?',
        answer:
          '신고만으로 자동 접근금지가 되지는 않습니다. 다만 경찰이 <strong>긴급응급조치</strong>로 임시 접근금지를 내릴 수 있고, 검사가 법원에 <strong>잠정조치</strong>를 신청할 수 있습니다.',
      },
      {
        question: '허위신고로 인한 정신적 피해에 대해 손해배상 청구가 가능한가요?',
        answer:
          '네, 허위신고로 인해 <strong>정신적 고통, 명예 훼손, 직장 불이익</strong> 등을 입었다면 민사소송으로 손해배상을 청구할 수 있습니다. 진단서와 피해 입증 자료를 확보하세요.',
      },
    ],
    cta: {
      text: '1분 안에 스토킹 허위신고 대응 준비사항 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 피해를 받고 있을 때 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '스토킹 피해 신고 절차와 접근금지 신청법', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '정상적 연락인데 스토킹 신고당했을 때', href: '/guide/stalking/normal-contact-stalking-accusation' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'normal-contact-stalking-accusation',
    keyword: '정상적 연락인데 스토킹 신고당했을 때',
    questionKeyword: '정상적인 연락이었는데 스토킹으로 신고당했으면 어떻게 하나요?',
    ctaKeyword: '스토킹 오해 대응',
    type: '상황형',
    meta: {
      title: '정상적 연락인데 스토킹 신고당했을 때 대응법 | 로앤가이드',
      description:
        '일반적인 연락이었는데 스토킹으로 신고당하셨나요? 혐의 벗기 전략과 억울한 신고에 대한 법적 대응법을 바로 정리해보세요.',
    },
    intro:
      '헤어진 지 한 달, 그 사이에 남아 있는 짐을 돌려달라고 두 번 연락했을 뿐입니다. 그런데 경찰에서 전화가 왔습니다. 스토킹으로 신고가 접수되었다는 겁니다. 합리적인 이유로 연락한 것인데 왜 스토킹이 되는 건지 이해할 수 없습니다. 일상적인 연락이 스토킹으로 오해받았을 때, 스토킹처벌법의 구성요건을 근거로 혐의를 벗는 방법을 안내합니다.',
    timelineSteps: ['신고 내용 확인', '정당한 연락 증거 확보', '경찰 조사 대응', '혐의 소명·불기소 요청'],
    sections: [
      {
        title: '신고 내용을 정확히 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">어떤 행위가 스토킹으로 신고되었는지 정확히 확인하는 것이 첫 번째입니다</strong></p>\n<p>경찰로부터 연락을 받으면 <strong>신고된 구체적 행위</strong>를 확인하세요. "반복적 연락"인지, "주거지 접근"인지, "미행"인지에 따라 대응 방법이 완전히 다릅니다.</p>\n<p>스토킹처벌법 제2조 제1호에서 규정하는 스토킹 행위는 ① <strong>접근하거나 따라다니기</strong> ② <strong>주거 등 부근에서 기다리거나 지켜보기</strong> ③ <strong>우편·전화·정보통신망 등을 이용한 연락</strong> ④ <strong>물건 등을 두거나 훼손하기</strong> 등입니다. 내 행위가 이 중 어떤 유형에 해당한다고 신고되었는지 파악해야 합니다.</p>\n<p>경찰에게 <strong>출석 일시, 담당 수사관 이름, 사건번호</strong>를 확인하고 메모하세요. 출석 전까지 시간이 있으니 증거를 준비할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 번째 할 일: 신고 유형 확인 → 사건번호·담당 수사관 메모 → 증거 준비 시간 확보</blockquote>',
      },
      {
        title: '정당한 연락이었다는 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">연락의 정당한 사유와 합리적 빈도를 증명하는 것이 핵심입니다</strong></p>\n<p>스토킹 성립을 부정하려면 <strong>연락에 정당한 사유가 있었음</strong>을 증명해야 합니다. 다음과 같은 증거를 확보하세요.</p>\n<p>① <strong>짐 반환·공동 재산 정리</strong> 등 연락이 필요한 구체적 사유가 있었다면 관련 물건 사진, 택배 내역 등 ② <strong>공동 자녀</strong>가 있어 연락이 불가피했다면 양육 관련 문자 내용 ③ <strong>채무·보증</strong> 관계가 있다면 금융 관련 서류 ④ 상대방이 <strong>먼저 연락을 해온 기록</strong>이 있다면 해당 스크린샷</p>\n<p>연락 <strong>횟수와 시간대</strong>도 중요합니다. 하루에 수십 통이 아니라, 며칠 간격으로 1~2회 연락한 것이라면 "반복적"이라 보기 어렵습니다. 통화 기록을 통신사에서 발급받아 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보: 연락 사유 증명 자료 + 연락 횟수·시간대(통신사 기록) + 상대방 선연락 기록</blockquote>',
      },
      {
        title: '경찰 조사에서 구성요건 미충족을 주장하세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹의 세 가지 구성요건을 하나씩 반박하세요</strong></p>\n<p>경찰 조사에서는 스토킹처벌법 제2조의 구성요건이 충족되지 않음을 조목조목 설명하세요.</p>\n<p><strong>첫째, "상대방의 의사에 반하여"</strong>: 상대방이 <strong>명시적으로 거부 의사를 전달한 적이 없다면</strong> 이 요건이 충족되지 않습니다. "연락하지 마" 등의 문자가 없었다는 점을 강조하세요.</p>\n<p><strong>둘째, "반복적으로"</strong>: 며칠 간격 1~2회 연락은 사회통념상 <strong>반복적이라 보기 어렵습니다</strong>. 연락 빈도가 정상 범위였음을 통화 기록으로 입증하세요.</p>\n<p><strong>셋째, "불안감·공포심 유발"</strong>: 연락 내용이 위협적이지 않고 <strong>정상적 용건</strong>(짐 반환, 채무 정리 등)이었다면 불안감 유발 의도가 없음을 주장하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">반박 3단계: ①거부 의사 미전달 ②반복성 미달(빈도 정상) ③위협 내용 없음(정당 용건)</blockquote>',
      },
      {
        title: '불기소 의견을 요청하고 후속 조치를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">증거와 소명 자료를 정리하여 불기소 처분을 이끌어내세요</strong></p>\n<p>경찰 조사 후 사건은 검찰로 송치됩니다. 검찰 단계에서 <strong>"혐의없음" 불기소 처분</strong>을 받기 위해 소명서를 제출하세요. 소명서에는 ① 연락의 정당한 사유 ② 구성요건 미충족 근거 ③ 증거 목록과 설명을 체계적으로 기재합니다.</p>\n<p>불기소 처분을 받으면 <strong>전과 기록이 남지 않습니다</strong>. 만약 기소되더라도 위 증거들을 바탕으로 재판에서 무죄를 다툴 수 있습니다.</p>\n<p>허위신고가 명백한 경우에는 <strong>무고죄(형법 제156조) 역고소</strong>와 민사상 <strong>손해배상 청구</strong>도 검토하세요. 특히 신고로 인해 직장에서 불이익을 받거나 정신적 고통을 겪었다면 위자료 청구가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최종 목표: 불기소(혐의없음) 처분 확보 → 필요시 무고죄 역고소 + 손해배상 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '짐 반환 요청 연락이 스토킹 불기소된 사례',
        summary:
          '관련 사례에서도 이별 후 상대방 집에 남아 있는 짐을 돌려달라는 취지로 일주일에 2회 문자를 보낸 것에 대해 스토킹으로 신고되었으나, 연락 내용이 짐 반환에 관한 것이고 상대방의 명시적 거부 의사가 없었다는 점이 인정되어 불기소 처분된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 연락 내용이 구체적 용건(짐 반환, 채무 정리 등)에 한정되어 있음을 보여주는 메시지 캡처를 확보하세요.',
      },
      {
        title: '공동 자녀 양육 관련 연락이 스토킹에 해당하지 않는다고 판단된 사례',
        summary:
          '관련 사례에서도 이혼 후 공동 자녀의 학교 행사·병원 방문 관련으로 전 배우자에게 연락한 것이 스토킹으로 신고되었으나, 자녀 양육을 위한 불가피한 연락으로 판단되어 혐의없음 처분된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 자녀 관련 연락임을 보여주는 학교 통지문, 병원 예약 내역 등 객관적 자료를 함께 제출하세요.',
      },
    ],
    faq: [
      {
        question: '거부 의사를 받은 적이 없는데도 스토킹이 될 수 있나요?',
        answer:
          '스토킹은 <strong>"상대방의 의사에 반하여"</strong> 행위해야 성립합니다. 다만 명시적 거부가 아니라 <strong>묵시적 거부</strong>(차단, 무시 등)도 인정될 수 있으므로 주의가 필요합니다.',
      },
      {
        question: '문자 2~3통만 보냈는데도 반복적 연락에 해당하나요?',
        answer:
          '횟수만으로 일률적으로 판단하지 않습니다. <strong>연락의 간격, 내용, 맥락</strong>을 종합적으로 고려합니다. 며칠 간격의 2~3통은 일반적으로 반복적이라 보기 어렵습니다.',
      },
      {
        question: '상대방이 카카오톡을 차단했는데 다른 방법으로 연락하면 스토킹인가요?',
        answer:
          '차단은 <strong>묵시적 거부 의사 표시</strong>로 볼 수 있습니다. 차단 후 다른 채널(새 번호, 다른 SNS)로 연락하면 스토킹으로 인정될 가능성이 높아집니다.',
      },
      {
        question: '경찰 조사에서 "앞으로 연락 안 하겠다"고 하면 유리한가요?',
        answer:
          '향후 연락하지 않겠다는 의사 표시는 <strong>혐의 인정으로 해석될 수 있으므로 주의</strong>하세요. "정당한 사유로 연락한 것이며, 해당 용건이 해결되어 더 이상 연락할 필요가 없다"고 표현하는 것이 좋습니다.',
      },
      {
        question: '스토킹 혐의를 받으면 직장에 통보되나요?',
        answer:
          '수사 단계에서 직장에 <strong>자동으로 통보되지는 않습니다</strong>. 다만 구속 영장이 청구되거나 재판에 넘겨지면 알려질 수 있습니다. 초기에 불기소 처분을 받는 것이 중요합니다.',
      },
      {
        question: '상대방이 먼저 연락해놓고 나중에 스토킹으로 신고할 수 있나요?',
        answer:
          '상대방이 먼저 연락한 기록이 있다면 <strong>스토킹 성립을 부정하는 강력한 증거</strong>가 됩니다. 해당 연락 기록을 반드시 캡처하여 보관하세요.',
      },
      {
        question: '경찰에서 긴급응급조치(접근금지)가 내려졌는데 어떻게 해야 하나요?',
        answer:
          '긴급응급조치가 내려지면 <strong>즉시 준수</strong>해야 합니다. 위반 시 처벌받을 수 있습니다. 억울하더라도 조치를 따르면서 법적 절차를 통해 혐의를 벗으세요.',
      },
      {
        question: '스토킹 무혐의 후 명예회복을 위해 할 수 있는 일은?',
        answer:
          '불기소 처분 확인서를 발급받아 보관하세요. 직장이나 주변에 알려진 경우 <strong>불기소 결정문</strong>을 보여줄 수 있습니다. 심각한 명예 훼손이 있었다면 민사상 손해배상 청구도 가능합니다.',
      },
    ],
    cta: {
      text: '1분 안에 스토킹 오해 대응 준비사항 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 허위신고 대응', href: '/guide/stalking/stalking-false-report-defense' },
      { label: '전 연인 연락이 스토킹인지 판단 기준', href: '/guide/stalking/ex-partner-contact-stalking-criteria' },
      { label: '스토킹 피해 신고 절차와 접근금지 신청법', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
    ],
  },
];
