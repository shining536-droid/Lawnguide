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
      title: '스토킹 피해를 받고 있을 때 즉시 대응법 | 로앤가이드',
      description:
        '스토킹 피해 시 긴급응급조치, 접근금지, 잠정조치 신청 방법과 증거 수집, 피해자 보호 절차를 정리했습니다.',
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
      title: '스토킹 처벌 기준과 접근금지 신청 방법 | 로앤가이드',
      description: '스토킹 해당 여부, 처벌 수위, 긴급응급조치·접근금지 잠정조치 신청 방법과 증거 확보까지 정리했습니다.',
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
      title: '전 연인 연락이 스토킹인지 판단 기준 | 로앤가이드',
      description:
        '전 연인의 반복 연락이 스토킹에 해당하는지 판단 기준, 스토킹처벌법 요건, 신고 절차, 접근금지 명령까지 정리했습니다.',
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
      title: '스토킹 고소당했을때 | 로앤가이드',
      description: '스토킹처벌법 위반 혐의를 받았을 때 초기 대응, 잠정조치 대처, 처벌 감경 방법을 정리했습니다.',
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
];
