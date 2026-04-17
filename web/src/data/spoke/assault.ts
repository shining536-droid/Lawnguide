import { SpokePage } from '../spoke-pages';

export const assaultPages: SpokePage[] = [
  {
    domain: 'assault',
    slug: 'assault-evidence-collection',
    keyword: '폭행 피해 증거 모으는 법',
    questionKeyword: '폭행을 당했는데 증거를 어떻게 모으나요?',
    ctaKeyword: '폭행 증거 수집',
    type: '상황형',
    meta: {
      title: '폭행 당했을 때 증거 모으는 법 4단계 | 로앤가이드',
      description: '폭행 당했을 때 증거를 어떻게 모아야 할까요? CCTV 보존 요청, 진단서 발급, 녹음 적법성, 고소장 첨부까지 4단계로 지금 확인하세요.',
    },
    intro: '편의점 앞에서 일방적으로 맞았습니다. 그런데 가해자는 "네가 먼저 시비 걸었다, 쌍방이다"라고 주장합니다. 경찰은 "증거가 있으면 가져오세요"라고만 합니다. 문제는 시간입니다 — CCTV는 7~30일이 지나면 자동 삭제되고, 멍은 일주일이면 사라지며, 목격자의 기억도 빠르게 흐려집니다. 형법 제257조(상해죄)와 제260조(폭행죄) 모두 피해자의 증거 확보가 유죄 입증의 핵심입니다. 지금 당장 챙겨야 할 증거와 수집 방법을 4단계로 정리합니다.',
    timelineSteps: ['현장 증거 확보', '병원 진단서', '고소장 작성', '수사 진행'],
    sections: [
      {
        title: '현장에서 즉시 증거를 확보하세요 (골든타임 48시간)',
        content:
          '<p><strong style="color:#1e3a5f">CCTV 보존 요청은 48시간이 승부입니다 — 지금 바로 하세요</strong></p>\n<p>폭행 현장 주변의 <strong>CCTV 위치</strong>를 확인하세요: 편의점·ATM(7일 보관), 건물 로비(15~30일), 도로 방범카메라(30일). 경찰에 고소하면서 <strong>"CCTV 보존 요청서"</strong>를 함께 제출하거나, 건물 관리사무소에 직접 방문하여 "특정 날짜·시간대 영상 보존"을 서면으로 요청하세요. 구두 요청은 효력이 약합니다.</p>\n<p><strong>목격자</strong>가 있으면 이름·전화번호·목격 내용을 메모해두세요. 현장에서 바로 받기 어려우면 "명함 교환"을 하세요. 부상 부위를 <strong>타임스탬프가 보이는 사진</strong>(스마트폰 카메라 정보에 날짜 자동 기록)으로 촬영하고, 현장 전체를 <strong>파노라마 촬영</strong>하면 위치와 상황을 한 번에 기록할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: CCTV 보존 요청(서면) + 목격자 연락처 + 부상·현장 사진(타임스탬프) = 48시간 내 확보</blockquote>',
      },
      {
        title: '24시간 이내에 병원에 가서 상해진단서를 발급받으세요',
        content:
          '<p><strong style="color:#1e3a5f">상해진단서는 폭행 피해 입증의 가장 강력한 증거입니다</strong></p>\n<p>대법원 2025도11886 사건에서도 "상해진단서는 피해자의 진술과 함께 범죄사실을 증명하는 유력한 증거"라고 판시했습니다. 폭행 직후 <strong>24시간 이내</strong>에 정형외과·외과·응급의학과를 방문하세요. 의사에게 <strong>"외부 충격에 의한 손상"</strong>이라는 표현이 들어가도록 사건 경위를 설명하세요.</p>\n<p>진단서의 <strong>치료 주수</strong>가 죄명과 처벌을 결정합니다: 진단 2주 이상이면 상해죄(형법 제257조, 7년 이하 징역 또는 1천만원 이하 벌금), 미만이면 폭행죄(형법 제260조, 2년 이하 징역 또는 500만원 이하 벌금). 진단서 발급비는 통상 <strong>1만~2만원</strong>이며, 진단서 원본은 보관하고 사본을 고소장에 첨부합니다. <strong>치료비 영수증과 약 처방전</strong>도 모두 보관하세요 — 민사 손해배상 청구 시 필수입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 24시간 내 병원 방문 → "외력에 의한 손상" 진단서 + 치료비 영수증 + 부상 사진(날짜별)</blockquote>',
      },
      {
        title: '관할 경찰서에 고소장과 증거를 함께 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">고소장 + 진단서 + CCTV 보존 결과를 한꺼번에 제출하면 수사가 빨라집니다</strong></p>\n<p>고소장 필수 기재 사항: <strong>①고소인 인적사항 ②피고소인 정보(모르면 "성명불상") ③폭행 일시·장소 ④범죄사실(구체적 행위 서술) ⑤증거 목록</strong>. 관할 경찰서(사건 발생지 기준)에 직접 방문하거나 <strong>경찰민원포털(minwon.police.go.kr)</strong>에서 온라인 접수도 가능합니다.</p>\n<p>증거 목록에 <strong>"1. 상해진단서 원본 1부, 2. 부상 부위 사진 ○매, 3. CCTV 보존 요청 결과, 4. 목격자 진술서, 5. 가해자 사과 문자 캡처"</strong> 형태로 번호를 매겨 정리하세요. 폭행죄(제260조)는 반의사불벌죄이므로 피해자 처벌 의사가 핵심이고, 상해죄(제257조)는 합의 여부와 무관하게 검사가 기소할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 고소장 + 진단서 + 사진 + CCTV + 목격자 진술 = 5종 세트로 일괄 제출</blockquote>',
      },
      {
        title: '민사 손해배상과 합의 — 합의서에 반드시 넣어야 할 3가지 조항',
        content:
          '<p><strong style="color:#1e3a5f">형사와 별도로 민법 제750조에 따라 치료비·위자료·일실수입을 청구할 수 있습니다</strong></p>\n<p>형사 절차와 별개로 가해자에게 <strong>①실제 치료비(영수증 기준) ②일실수입(일하지 못한 기간 급여 상당액) ③위자료(정신적 손해배상)</strong>를 청구할 수 있습니다. 손해배상 청구권 소멸시효는 피해를 안 날로부터 <strong>3년</strong>(민법 제766조)입니다.</p>\n<p>가해자가 합의를 제안하면 합의서에 <strong>반드시 포함할 3가지 조항</strong>: ①"합의금 ○○만원을 수령한다" ②"향후 추가 치료비 발생 시 별도 청구 가능하다" ③"가해자는 동일한 행위를 반복하지 않는다(재발 방지 조항)". 합의금 수준은 진단 2주 기준 <strong>100만~300만원</strong>, 4주 이상은 <strong>300만~1,000만원</strong>이 일반적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 합의서 필수 3조항 = 합의금 명시 + 향후 치료비 별도 청구 + 재발 방지</blockquote>',
      },
    ],
    cases: [
      {
        title: 'CCTV 영상이 핵심 증거가 된 사례',
        summary:
          '관련 사례에서도 가해자가 "맞지 않았다"고 부인했으나, 주변 CCTV 영상에 폭행 장면이 촬영되어 상해죄가 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 폭행 현장 주변 CCTV를 즉시 확인하고, 경찰에 보존 요청하세요.',
      },
      {
        title: '진단서 없이 고소했다가 입증이 어려웠던 사례',
        summary:
          '관련 사례에서도 폭행 직후 병원에 가지 않아 진단서가 없고, 시간이 지나 부상이 치유된 후 고소하여 입증이 어려웠던 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 폭행 직후 즉시 병원에 가서 진단서를 발급받으세요.',
      },
    ],
    faq: [
      {
        question: '건물 관리소에서 CCTV 영상 보여주기를 거부하면 어떻게 하나요?',
        answer: '관리소는 개인정보보호법상 제3자에게 직접 영상을 제공할 의무가 없습니다. <strong>경찰에 고소장을 제출하면서 "CCTV 보존 및 영상 확보 요청"을 수사관에게 하세요.</strong> 수사기관의 공식 요청에는 응해야 합니다.',
      },
      {
        question: '가해자와의 전화 통화를 녹음해도 되나요?',
        answer: '대화 <strong>당사자가 직접 녹음하는 것은 적법</strong>합니다(통신비밀보호법 제3조 단서, 대법원 2006도4981). 단, 제3자가 몰래 녹음하면 불법입니다. 녹음 파일은 편집하지 말고 원본 그대로 USB에 저장하여 제출하세요.',
      },
      {
        question: '폭행 후 며칠 지나서 통증이 심해졌는데, 지금 병원가도 되나요?',
        answer: '됩니다. 다만 <strong>폭행과 상해 사이의 인과관계</strong>가 문제될 수 있으므로, 의사에게 "○일 전 폭행 피해 후 증상 악화"라고 정확히 설명하세요. 초진이 늦어질수록 증명력이 떨어지므로 가능한 빨리 가세요.',
      },
      {
        question: '가해자가 보낸 사과 카톡은 증거로 얼마나 강력한가요?',
        answer: '"때려서 미안하다", "내가 잘못했다" 등의 메시지는 <strong>자백에 준하는 강력한 증거</strong>입니다. 날짜·시간·프로필이 보이도록 캡처하고, 캡처 일시도 별도로 기록해두세요. 화면 녹화도 함께 하면 더 확실합니다.',
      },
      {
        question: '쌍방이라고 주장하는 가해자를 어떻게 반박하나요?',
        answer: '<strong>CCTV 영상이 가장 강력한 반박 증거</strong>입니다. CCTV가 없다면 목격자 진술, 112 신고 기록(먼저 신고한 쪽이 피해자로 인정되기 쉬움), 부상 부위의 방어흔 여부(의사 소견)를 종합하여 일방적 폭행을 입증하세요.',
      },
      {
        question: '폭행 증거 수집을 변호사에게 맡길 수 있나요?',
        answer: '변호사가 증거 수집 자체를 대행하지는 않지만, <strong>어떤 증거가 필요한지 조언</strong>해줍니다. 대한법률구조공단(☎132)에서 무료 상담이 가능하고, 범죄피해자지원센터(☎1577-1295)에서도 법률 지원을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '폭행 증거 수집 방법이 궁금하다면 내 상황을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '내 상황에 맞는 대응 전략 확인하기', href: '/chat?domain=assault' },
      { label: '폭행/상해 가이드', href: '/guide/assault' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '정당방위 인정 기준과 준비 포인트', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 합의금 적정 금액 기준', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },
  {
    domain: 'assault',
    slug: 'self-defense-criteria',
    keyword: '정당방위 인정 기준과 준비 포인트',
    questionKeyword: '정당방위로 인정받으려면 어떤 조건이 필요한가요?',
    ctaKeyword: '정당방위 인정',
    type: 'Q&A형',
    meta: {
      title: '정당방위 인정 요건 5가지 — 판례 기준 총정리 | 로앤가이드',
      description: '형법 제21조 정당방위가 인정되려면 급박성, 상당성 등 5가지 요건을 충족해야 합니다. 실제 판례별 인정·불인정 사례와 증거 준비 방법까지 정리했습니다. 바로 정리해보세요.',
    },
    intro: '상대방이 먼저 때려서 방어하다 보니 상대도 다쳤습니다. 지금 쌍방 폭행으로 조사를 받고 있습니다. 정당방위로 인정받을 수 있는지, 어떤 증거를 준비해야 하는지 정리했습니다.',
    sections: [
      {
        title: '정당방위의 법적 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">자기 또는 타인의 법익에 대한 현재의 부당한 침해를 방어하기 위한 행위</strong></p>\n<p><strong>형법 제21조</strong>에 따라 정당방위가 성립하려면 ①<strong>현재의 부당한 침해</strong>가 있을 것, ②자기 또는 타인의 <strong>법익을 방어</strong>하기 위한 것일 것, ③방어 행위가 <strong>상당한 이유</strong>가 있을 것이 필요합니다.</p>\n<p>"현재의 침해"란 침해가 <strong>진행 중이거나 목전에 임박</strong>한 상태를 말합니다. 이미 끝난 침해에 대한 반격은 정당방위가 아닙니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: ①현재의 부당한 침해 ②법익 방어 목적 ③상당한 이유(비례성)</blockquote>',
      },
      {
        title: '상당성(비례성) 기준이 가장 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">방어 행위가 침해에 비해 과도하면 인정되지 않습니다</strong></p>\n<p>실무에서 정당방위가 불인정되는 가장 큰 이유는 <strong>상당성(비례성) 결여</strong>입니다. 주먹으로 맞았는데 흉기로 반격하면 과잉방위가 됩니다.</p>\n<p>방어 수단과 정도가 <strong>침해의 수단·정도와 균형</strong>을 이루어야 합니다. 밀치거나 잡아서 제지하는 수준의 방어가 인정되기 쉽습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 방어 수단이 침해 수단에 비례해야 함 | 과도하면 과잉방위</blockquote>',
      },
      {
        title: '정당방위를 주장하기 위한 증거를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 먼저 공격했음을 증명해야 합니다</strong></p>\n<p>정당방위를 주장하려면 ①<strong>상대방의 선제 공격</strong> 증거(CCTV, 목격자 진술, 녹음), ②본인의 <strong>방어 의사</strong>(도망치려 했으나 불가했던 상황 등), ③방어 행위의 <strong>상당성</strong>(과도하지 않았음)을 증명해야 합니다.</p>\n<p>현장에서 <strong>112 신고를 먼저 한 기록</strong>이 있으면 방어 의사를 뒷받침하는 좋은 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 선제 공격 증명(CCTV/목격자), 방어 의사, 112 신고 기록</blockquote>',
      },
      {
        title: '정당방위가 인정되지 않는 경우와 대안',
        content:
          '<p><strong style="color:#1e3a5f">과잉방위나 쌍방 폭행으로 판단될 수 있습니다</strong></p>\n<p>정당방위가 불인정되더라도 <strong>과잉방위</strong>(형법 제21조 제2항)가 인정되면 형이 감경됩니다. 야간이나 공포 상태에서의 과잉방위는 <strong>처벌하지 않을 수</strong> 있습니다(제21조 제3항).</p>\n<p>쌍방 폭행으로 인정되더라도 <strong>먼저 폭행한 쪽의 책임이 더 크고</strong>, 양형에서 유리하게 참작됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대안: 과잉방위 → 형 감경 | 야간 과잉방위 → 처벌 면제 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '주먹 공격에 밀쳐 방어하여 정당방위가 인정된 사례',
        summary:
          '관련 사례에서도 상대방이 먼저 주먹으로 때리자 밀쳐서 넘어뜨린 행위가 정당방위로 인정된 경우가 있습니다. 방어 수단이 침해 수단에 비해 과도하지 않다고 판단되었습니다.',
        takeaway:
          '비슷한 상황이라면 방어 행위가 침해에 비해 과도하지 않았음을 증명할 증거를 확보하세요.',
      },
      {
        title: '반격이 과도하여 과잉방위로 판단된 사례',
        summary:
          '관련 사례에서도 상대방의 주먹 폭행에 대해 물건(의자)으로 반격하여, 방어 수단이 과도하다고 판단되어 과잉방위로 감경된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 방어 시 가급적 밀치기, 잡기 등 최소한의 방법을 사용하세요.',
      },
    ],
    faq: [
      {
        question: '정당방위가 인정되면 무죄인가요?',
        answer: '네, 정당방위가 인정되면 <strong>위법성이 조각</strong>되어 무죄입니다.',
      },
      {
        question: '도망칠 수 있었는데 맞서 싸우면 정당방위 안 되나요?',
        answer: '한국 판례는 <strong>회피 의무를 엄격하게 요구하지는 않지만</strong>, 회피 가능성이 있었는데 싸웠다면 불리하게 작용할 수 있습니다.',
      },
      {
        question: '과잉방위란 무엇인가요?',
        answer: '정당방위의 요건 중 <strong>상당성을 초과</strong>한 경우입니다. 형이 감경될 수 있습니다.',
      },
      {
        question: '쌍방 폭행이면 정당방위 주장이 안 되나요?',
        answer: '서로 공격 의사가 있었다면 정당방위가 어렵습니다. 다만 <strong>선제 공격에 대한 방어</strong>임을 입증하면 가능합니다.',
      },
      {
        question: '술에 취한 상태의 폭행에 방어한 경우는?',
        answer: '취한 상태의 공격도 <strong>부당한 침해</strong>에 해당하므로 정당방위 주장이 가능합니다.',
      },
      {
        question: '가족을 보호하기 위해 때린 경우는?',
        answer: '<strong>타인(가족)의 법익 방어</strong>를 위한 정당방위도 인정됩니다.',
      },
      {
        question: '정당방위를 주장하면 고소가 필요 없나요?',
        answer: '가해자를 먼저 고소하고, 수사 과정에서 <strong>정당방위를 주장</strong>하는 것이 유리합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 범죄피해자지원센터(1577-1295)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 폭행 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '사기 가이드', href: '/guide/fraud' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-settlement-amount-process',
    keyword: '폭행 합의금 적정 금액과 합의 절차',
    ctaKeyword: '폭행 합의 준비',
    type: '수치기한형',
    meta: {
      title: '폭행 합의금 50만~500만원 — 적정 금액과 절차 총정리 | 로앤가이드',
      description: '폭행죄 합의금은 50만~500만원이 일반적입니다. 반의사불벌죄 특성상 합의 시 공소권 없음 처분이 가능합니다. 합의서 작성법, 최적 합의 시기, 변호사 활용 팁까지 지금 확인하세요.',
    },
    intro: '시비가 붙어 상대방을 때렸는데 고소를 당했습니다. 합의금이 얼마나 되는지, 합의하면 처벌을 피할 수 있는지 궁금합니다. 폭행 혐의를 받고 있다면 합의 절차와 적정 금액을 확인해보세요.',
    sections: [
      {
        title: '폭행죄 합의금의 일반적인 범위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">경미한 폭행 기준 50만~300만원이 참고 범위입니다</strong></p>\n<p>폭행죄 합의금은 <strong>부상 정도, 폭행 경위, 피해자 감정</strong> 등에 따라 달라집니다. 경미한 폭행(멍·찰과상 수준)은 <strong>50만~300만원</strong> 선에서 합의되는 경우가 많습니다.</p>\n<p>진단서가 나오는 수준의 부상이라면 상해죄로 격상될 수 있고, 합의금도 <strong>300만~1,000만원 이상</strong>으로 올라갈 수 있습니다. 합의금에는 치료비, 위자료, 일실수입 등이 포함됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고 범위: 경미한 폭행 50만~300만원 | 상해 수준이면 300만원 이상</blockquote>',
      },
      {
        title: '반의사불벌죄 특성을 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">폭행죄는 피해자가 처벌을 원하지 않으면 공소권이 없습니다</strong></p>\n<p><strong>폭행죄(형법 제260조)</strong>는 반의사불벌죄입니다. 피해자가 <strong>처벌불원 의사</strong>를 표시하면 검찰은 공소를 제기할 수 없고, 이미 기소되었더라도 <strong>공소기각 판결</strong>이 내려집니다.</p>\n<p>다만 <strong>상해죄(형법 제257조)</strong>는 반의사불벌죄가 아니므로, 합의하더라도 검찰이 기소할 수 있습니다. 폭행인지 상해인지에 따라 합의의 효과가 크게 달라지므로 정확히 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 폭행죄 → 합의 시 공소권 없음 | 상해죄 → 합의해도 기소 가능</blockquote>',
      },
      {
        title: '합의서 작성 시 핵심 사항을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">처벌불원서와 합의금 지급 내역을 반드시 포함하세요</strong></p>\n<p>합의서에는 ①<strong>합의금 금액과 지급 방법</strong>, ②피해자의 <strong>처벌불원 의사</strong>(처벌불원서), ③<strong>향후 민·형사상 청구 포기</strong> 문구를 포함해야 합니다.</p>\n<p>처벌불원서는 피해자가 직접 작성하여 수사기관에 제출해야 효력이 있습니다. 합의금은 <strong>계좌이체</strong>로 지급하고 이체 내역을 보관하세요. 현금 지급 시 영수증을 반드시 받아두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 포함: 합의금 지급 내역 + 처벌불원서 + 민·형사 청구 포기 문구</blockquote>',
      },
      {
        title: '합의 시기와 변호사 활용을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">기소 전 합의가 가장 효과적입니다</strong></p>\n<p>폭행죄는 <strong>기소 전에 합의</strong>하면 불기소 처분(공소권 없음)을 받을 수 있어 가장 유리합니다. 기소 후에도 합의하면 공소기각이 되지만, 기소 이력 자체는 남을 수 있습니다.</p>\n<p>피해자와 직접 연락이 어렵거나 감정이 격해진 상태라면 <strong>변호사를 통한 합의 교섭</strong>이 효과적입니다. 변호사가 적정 금액을 제시하고 합의서 작성까지 진행하면 절차가 빨라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시기: 기소 전 합의 → 불기소 | 기소 후 합의 → 공소기각 | 변호사 교섭 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '반의사불벌죄에서 합의로 불기소된 사례',
        summary:
          '관련 사례에서도 폭행죄로 고소되었으나 기소 전 피해자와 합의하고 처벌불원서를 제출하여 공소권 없음 처분(불기소)을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 가능한 빨리 피해자와 합의하고 처벌불원서를 확보하세요.',
      },
      {
        title: '상해인 줄 알았는데 폭행으로 처리된 사례',
        summary:
          '관련 사례에서도 피해자가 진단서를 제출했으나, 진단 내용이 경미하여 상해가 아닌 폭행죄로 처리되고 합의를 통해 불기소된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 혐의가 폭행인지 상해인지를 먼저 확인하고 합의 전략을 세우세요.',
      },
    ],
    faq: [
      {
        question: '합의금을 깎을 수 있나요?',
        answer: '피해자와의 <strong>협상</strong>이므로 가능합니다. 반성문 제출, 진심 어린 사과가 합의금 조율에 도움이 됩니다.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 되나요?',
        answer: '폭행죄라도 합의 없이 기소되면 <strong>정식 재판</strong>을 받게 됩니다. 변호사를 통해 합의를 시도해보세요.',
      },
      {
        question: '합의하면 전과 기록이 안 남나요?',
        answer: '기소 전 합의로 <strong>불기소 처분</strong>을 받으면 전과 기록이 남지 않습니다.',
      },
      {
        question: '합의금을 분할로 낼 수 있나요?',
        answer: '피해자가 동의하면 <strong>분할 지급</strong>도 가능합니다. 합의서에 분할 일정을 명시하세요.',
      },
      {
        question: '상해죄에서도 합의하면 효과가 있나요?',
        answer: '상해죄는 반의사불벌죄가 아니지만, 합의 사실이 <strong>양형에 유리하게 참작</strong>됩니다.',
      },
      {
        question: '처벌불원서는 언제까지 제출해야 하나요?',
        answer: '<strong>제1심 판결 선고 전</strong>까지 제출하면 효력이 있습니다.',
      },
      {
        question: '합의서를 공증받아야 하나요?',
        answer: '법적으로 필수는 아니지만, <strong>공증을 받아두면</strong> 나중에 분쟁을 예방할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지역 법률구조재단을 활용해보세요.',
      },
    ],
    cta: {
      text: '폭행 합의 준비에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '정당방위 인정 기준과 준비 포인트', href: '/guide/assault/self-defense-criteria' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
    ],
  },
  {
    domain: 'assault',
    slug: 'injury-vs-assault-penalty',
    keyword: '상해죄와 폭행죄 차이점 및 처벌 수위',
    ctaKeyword: '폭행·상해 피해 대응',
    type: '비교형',
    meta: {
      title: '상해죄 vs 폭행죄 — 처벌 수위 3배 차이 비교표 | 로앤가이드',
      description: '상해죄(형법 제257조)는 7년 이하 징역, 폭행죄(제260조)는 2년 이하 징역으로 처벌 수위가 크게 다릅니다. 진단서 유무에 따른 죄명 구분과 피해자 대응법을 비교표로 정리했습니다. 바로 정리해보세요.',
    },
    intro: '맞았는데 병원에서 진단서가 나왔습니다. 폭행인지 상해인지에 따라 처벌이 달라진다고 하는데 정확히 뭐가 다른지 궁금합니다. 피해 상황에 맞는 대응을 위해 두 죄의 차이를 정리해보세요.',
    comparison: {
      title: '폭행죄 vs 상해죄 비교표',
      headers: ['구분', '폭행죄', '상해죄'],
      rows: [
        { label: '근거 조문', values: ['형법 제260조', '형법 제257조'] },
        { label: '구성요건', values: ['사람의 신체에 대한 유형력 행사', '사람의 신체를 상해'] },
        { label: '처벌', values: ['2년 이하 징역 / 500만원 이하 벌금', '7년 이하 징역 / 10년 이하 자격정지 / 1,000만원 이하 벌금'] },
        { label: '반의사불벌', values: ['O (피해자 처벌불원 시 공소 불가)', 'X (합의해도 기소 가능)'] },
        { label: '합의 효과', values: ['합의 시 불기소 또는 공소기각', '양형에 유리하게 참작'] },
      ],
    },
    sections: [
      {
        title: '폭행죄(형법 제260조)의 핵심을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">사람의 신체에 유형력을 행사하면 폭행죄가 성립합니다</strong></p>\n<p><strong>폭행죄</strong>는 사람의 신체에 대한 <strong>유형력 행사</strong>를 처벌합니다. 때리기, 밀치기, 물건 던지기 등이 해당합니다. 상해가 발생하지 않아도 성립합니다.</p>\n<p>처벌은 <strong>2년 이하 징역, 500만원 이하 벌금, 구류 또는 과료</strong>입니다. 반의사불벌죄이므로 피해자가 처벌을 원하지 않으면 공소를 제기할 수 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">폭행죄: 2년 이하 징역 / 500만원 이하 벌금 | 반의사불벌죄</blockquote>',
      },
      {
        title: '상해죄(형법 제257조)의 핵심을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">신체의 건강 상태를 불량하게 변경하면 상해죄가 됩니다</strong></p>\n<p><strong>상해죄</strong>는 사람의 신체를 상해한 경우에 성립합니다. 골절, 열상, 2주 이상 치료가 필요한 타박상 등이 대표적입니다. 폭행으로 인한 결과범입니다.</p>\n<p>처벌은 <strong>7년 이하 징역, 10년 이하 자격정지, 1,000만원 이하 벌금</strong>으로 폭행죄보다 훨씬 무겁습니다. 반의사불벌죄가 <strong>아니므로</strong> 합의해도 검찰이 기소할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">상해죄: 7년 이하 징역 / 1,000만원 이하 벌금 | 반의사불벌죄 아님</blockquote>',
      },
      {
        title: '진단서가 상해 입증의 핵심 증거입니다',
        content:
          '<p><strong style="color:#1e3a5f">진단서 치료 기간이 폭행과 상해를 구분하는 기준이 됩니다</strong></p>\n<p>폭행과 상해의 구분은 <strong>상해 결과 발생 여부</strong>에 달려 있습니다. 실무에서는 병원 <strong>진단서의 치료 기간</strong>이 핵심 증거입니다. 2주 이상 진단이 나오면 상해죄로 처리되는 경우가 많습니다.</p>\n<p>폭행 직후 <strong>즉시 병원에 방문</strong>하여 진단서를 발급받으세요. 시간이 지나면 부상과 폭행 사이의 인과관계 입증이 어려워집니다. 진단서 원본을 보관하고 사본을 고소장에 첨부하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 진단서 치료 기간이 죄명 구분 기준 | 폭행 직후 즉시 병원 방문</blockquote>',
      },
      {
        title: '피해자가 해야 할 일을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">진단서, CCTV, 경찰 신고를 빠르게 확보하세요</strong></p>\n<p>피해자는 ①<strong>병원 진단서</strong>를 즉시 발급받고, ②현장 <strong>CCTV 보존 요청</strong>을 경찰에 하고, ③<strong>경찰에 고소장</strong>을 제출해야 합니다. 목격자가 있다면 연락처를 확보하세요.</p>\n<p>상해죄에 해당하면 <strong>민사 손해배상</strong>(치료비, 일실수입, 위자료)도 별도로 청구할 수 있습니다. 합의를 진행하더라도 향후 치료비 조항을 포함시켜야 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 진단서 발급 → CCTV 보존 요청 → 고소장 제출 → 민사 손해배상 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '진단서 2주로 상해죄가 인정된 사례',
        summary:
          '관련 사례에서도 피해자가 폭행 직후 병원에서 2주 진단서를 발급받아 제출하여, 단순 폭행이 아닌 상해죄로 기소되어 가해자가 벌금형을 선고받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 폭행 직후 병원에 가서 진단서를 발급받아 상해 여부를 확인하세요.',
      },
      {
        title: '진단서 없이 폭행죄로만 처리된 사례',
        summary:
          '관련 사례에서도 피해자가 병원에 가지 않아 진단서가 없고, CCTV에 폭행 장면만 촬영되어 상해가 아닌 폭행죄로만 처리된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 부상 정도와 관계없이 병원에 방문하여 진단서를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '폭행과 상해의 가장 큰 차이는 무엇인가요?',
        answer: '<strong>상해 결과 발생 여부</strong>입니다. 상해가 발생하면 상해죄, 그렇지 않으면 폭행죄입니다.',
      },
      {
        question: '진단서 없이도 상해죄가 인정되나요?',
        answer: '진단서가 없어도 다른 증거로 입증 가능하지만, 실무에서는 <strong>진단서가 가장 확실한 증거</strong>입니다.',
      },
      {
        question: '폭행죄에서 상해죄로 바뀔 수 있나요?',
        answer: '수사 중 <strong>진단서가 추가 제출</strong>되면 죄명이 변경될 수 있습니다.',
      },
      {
        question: '쌍방 폭행이면 어떻게 되나요?',
        answer: '<strong>쌍방 모두</strong> 폭행죄 또는 상해죄가 성립할 수 있습니다. 먼저 폭행한 쪽의 책임이 더 큽니다.',
      },
      {
        question: '상해죄의 공소시효는 얼마인가요?',
        answer: '상해죄의 공소시효는 <strong>10년</strong>이고, 폭행죄는 <strong>5년</strong>입니다.',
      },
      {
        question: '합의금은 폭행과 상해가 다른가요?',
        answer: '상해죄가 처벌이 무거운 만큼 합의금도 <strong>더 높은 편</strong>입니다.',
      },
      {
        question: '피해자가 가해자를 용서하면 상해죄도 처벌 안 되나요?',
        answer: '상해죄는 반의사불벌죄가 아니므로 <strong>합의해도 기소될 수 있습니다</strong>. 다만 양형에서 유리하게 참작됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 범죄피해자지원센터(1577-1295)를 활용해보세요.',
      },
    ],
    cta: {
      text: '폭행·상해 피해 대응에 맞는 방법을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 합의금 적정 금액과 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '정당방위 인정 기준과 준비 포인트', href: '/guide/assault/self-defense-criteria' },
    ],
  },
  {
    domain: 'assault',
    slug: 'self-defense-evidence-requirements',
    keyword: '정당방위 인정받으려면 어떤 증거가 필요한지',
    questionKeyword: '정당방위를 주장하려면 어떤 증거가 필요한가요?',
    ctaKeyword: '정당방위 입증 준비',
    type: 'Q&A형',
    meta: {
      title: '정당방위 증거 확보 체크리스트 5가지 | 로앤가이드',
      description: '정당방위를 인정받으려면 CCTV, 목격자 진술, 상해 부위 사진 등 5가지 핵심 증거가 필요합니다. 과잉방위 판단 기준과 경찰 조사 대응 전략까지 한눈에 정리했습니다. 지금 확인하세요.',
    },
    intro: '상대방이 먼저 때렸는데 방어하다가 상대가 다쳤습니다. 오히려 내가 폭행 혐의로 신고당한 상황입니다. 사실과 다르게 신고되었다면 정당방위를 주장하기 위해 어떤 증거를 준비해야 하는지 정리해보세요.',
    sections: [
      {
        title: '정당방위 요건(형법 제21조)을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">현재의 부당한 침해에 대한 방어행위여야 합니다</strong></p>\n<p><strong>형법 제21조</strong>에 따라 정당방위가 인정되려면 ①<strong>현재의 부당한 침해</strong>가 존재하고, ②자기 또는 타인의 <strong>법익을 방어</strong>하기 위한 것이며, ③방어행위에 <strong>상당한 이유</strong>가 있어야 합니다.</p>\n<p>"현재의 침해"란 공격이 <strong>진행 중이거나 급박</strong>한 상태를 의미합니다. 공격이 이미 끝난 후의 반격은 정당방위가 아니라 보복에 해당합니다. 이 구분이 매우 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3가지 요건: ①현재의 부당한 침해 ②법익 방어 목적 ③상당한 이유(비례성)</blockquote>',
      },
      {
        title: '정당방위에 필요한 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">CCTV, 목격자 진술, 112 신고 기록이 핵심입니다</strong></p>\n<p>정당방위를 주장하려면 <strong>상대방이 먼저 공격했음</strong>을 증명해야 합니다. ①현장 <strong>CCTV 영상</strong>(가장 강력한 증거), ②<strong>목격자 진술</strong>(연락처를 반드시 확보), ③<strong>112 신고 기록</strong>(내가 먼저 신고한 사실은 방어 의사를 뒷받침)이 핵심입니다.</p>\n<p>폭행 직후 본인의 <strong>부상 상태를 사진·동영상으로 기록</strong>하세요. 상대방으로부터 협박이나 위협을 받은 <strong>문자·녹음</strong>도 선제 공격 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: CCTV 영상, 목격자 진술, 112 신고 기록, 부상 사진·녹음</blockquote>',
      },
      {
        title: '방위행위의 상당성(과잉방위)에 주의하세요',
        content:
          '<p><strong style="color:#1e3a5f">방어 수단이 공격에 비해 과도하면 과잉방위가 됩니다</strong></p>\n<p>정당방위가 인정되지 않는 가장 흔한 이유는 <strong>상당성 초과</strong>입니다. 주먹으로 맞았는데 흉기로 반격하거나, 상대가 멈췄는데 계속 때리면 과잉방위로 판단됩니다.</p>\n<p><strong>과잉방위</strong>(형법 제21조 제2항)가 인정되면 형이 <strong>감경</strong>됩니다. 야간이나 극심한 공포 상태에서의 과잉방위는 <strong>처벌하지 않을 수</strong> 있습니다(제21조 제3항). 방어 시 밀치기, 잡기 등 <strong>최소한의 방법</strong>을 사용하는 것이 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 방어 수단이 공격에 비례해야 함 | 과잉방위 → 감경 | 야간 과잉 → 면제 가능</blockquote>',
      },
      {
        title: '경찰 조사 대응과 진술 준비를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">첫 진술이 가장 중요합니다. 일관되게 정당방위를 주장하세요</strong></p>\n<p>경찰 조사에서 <strong>첫 진술</strong>이 수사 방향을 결정합니다. 정당방위를 주장할 것이라면 ①<strong>상대방의 선제 공격 사실</strong>, ②<strong>내가 방어만 했다는 점</strong>, ③<strong>다른 방법이 없었다는 상황</strong>을 일관되게 진술하세요.</p>\n<p>진술 전에 <strong>변호사와 상담</strong>하는 것을 강력히 권합니다. 피의자 신분이면 <strong>진술 거부권</strong>이 있으므로 불리한 진술은 하지 않아도 됩니다. 증거 자료를 정리하여 수사관에게 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 일관된 진술 + 변호사 상담 + 증거 제출 | 진술 거부권 행사 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: 'CCTV로 선제 공격이 확인되어 정당방위가 인정된 사례',
        summary:
          '관련 사례에서도 상대방이 먼저 주먹을 휘두르는 장면이 CCTV에 촬영되어, 피고인의 밀쳐 방어한 행위가 정당방위로 인정되어 무죄 판결을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 현장 CCTV를 즉시 확인하고 경찰에 보존 요청하세요.',
      },
      {
        title: '목격자 진술로 정당방위 주장이 뒷받침된 사례',
        summary:
          '관련 사례에서도 CCTV가 없었으나 현장 목격자 2명이 상대방의 선제 공격을 진술하여, 피고인의 방어행위가 정당방위로 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 현장에서 목격자 연락처를 반드시 확보해두세요.',
      },
    ],
    faq: [
      {
        question: '정당방위가 인정되면 어떻게 되나요?',
        answer: '위법성이 조각되어 <strong>무죄</strong>입니다. 형사처벌을 받지 않습니다.',
      },
      {
        question: 'CCTV가 없으면 정당방위 증명이 불가능한가요?',
        answer: 'CCTV가 없어도 <strong>목격자 진술, 112 신고 기록, 부상 사진</strong> 등으로 증명할 수 있습니다.',
      },
      {
        question: '도망칠 수 있었는데 맞서 싸우면 안 되나요?',
        answer: '한국 판례는 회피 의무를 엄격하게 요구하지 않지만, <strong>회피 가능성이 있었다면 불리하게</strong> 작용할 수 있습니다.',
      },
      {
        question: '상대방도 다쳤는데 정당방위가 되나요?',
        answer: '방어행위의 <strong>상당성 범위 내</strong>라면 상대가 다쳤더라도 정당방위가 인정됩니다.',
      },
      {
        question: '과잉방위란 무엇인가요?',
        answer: '정당방위 요건 중 <strong>상당성을 초과</strong>한 경우입니다. 형이 감경될 수 있습니다.',
      },
      {
        question: '정당방위를 주장하면서 고소도 할 수 있나요?',
        answer: '상대방을 <strong>먼저 고소하고</strong> 수사 과정에서 정당방위를 주장하는 것이 유리합니다.',
      },
      {
        question: '술에 취한 상태에서도 정당방위가 되나요?',
        answer: '취한 상태의 공격도 <strong>부당한 침해</strong>에 해당하므로 정당방위 주장이 가능합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 범죄피해자지원센터(1577-1295)를 활용해보세요.',
      },
    ],
    cta: {
      text: '정당방위 입증 준비에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '정당방위 인정 기준과 준비 포인트', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 합의금 적정 금액과 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },
  {
    domain: 'assault',
    slug: 'mutual-assault-self-defense-distinction',
    keyword: '쌍방폭행 시 처벌 기준과 정당방위 구분',
    questionKeyword: '쌍방폭행 처벌 기준과 정당방위는 어떻게 다른가요?',
    ctaKeyword: '쌍방폭행 정당방위',
    type: '비교형',
    meta: {
      title: '쌍방폭행 vs 정당방위 — 처벌 기준 비교 총정리 | 로앤가이드',
      description: '쌍방폭행으로 처리되면 양쪽 모두 처벌받지만, 정당방위가 인정되면 무죄입니다. 선제공격 여부, CCTV 증거, 비례성 판단 기준과 경찰 조사 대응법을 비교표로 정리했습니다. 지금 확인하세요.',
    },
    intro: '상대방과 시비가 붙어 서로 폭행이 있었습니다. 나는 먼저 맞았기 때문에 방어한 것인데 쌍방폭행으로 처리될 수 있다고 합니다. 쌍방폭행과 정당방위는 어떻게 구분되는지, 처벌 기준은 어떻게 다른지 확인해보세요.',
    comparison: {
      title: '쌍방폭행 vs 정당방위 비교표',
      headers: ['구분', '쌍방폭행', '정당방위'],
      rows: [
        { label: '의미', values: ['쌍방 모두 공격 의사가 있는 폭행', '현재의 부당한 침해에 대한 방어행위'] },
        { label: '법적 근거', values: ['형법 제260조(폭행죄) 각각 적용', '형법 제21조(위법성 조각)'] },
        { label: '처벌', values: ['쌍방 모두 폭행죄/상해죄 성립 가능', '정당방위 인정 시 무죄'] },
        { label: '핵심 판단 기준', values: ['서로 공격 의사가 있었는지', '선제 공격에 대한 방어 + 상당성'] },
        { label: '합의 효과', values: ['폭행죄는 반의사불벌(합의 시 불기소)', '무죄이므로 합의 불필요'] },
      ],
    },
    timelineSteps: ['처벌 기준 확인', '정당방위 요건 파악', '증거 확보', '경찰 조사 대응'],
    sections: [
      {
        title: '쌍방폭행의 처벌 기준을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">쌍방폭행은 양쪽 모두 폭행죄가 성립합니다</strong></p>\n<p>쌍방폭행이란 <strong>양쪽 모두 공격 의사</strong>를 가지고 서로 때린 경우를 말합니다. 이 경우 양쪽 모두에게 <strong>폭행죄(형법 제260조)</strong>가 성립하며, 상해가 발생하면 <strong>상해죄(형법 제257조)</strong>로 격상됩니다.</p>\n<p>먼저 때린 쪽의 <strong>책임이 더 크게</strong> 인정됩니다. 다만 "먼저 맞았으니까 때려도 된다"는 것은 아닙니다. 나중에 때린 행위도 <strong>방어가 아닌 공격</strong>으로 판단되면 쌍방폭행이 됩니다. 양쪽 모두 고소·피고소인이 되는 상황이 발생합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">쌍방폭행: 양쪽 모두 폭행죄/상해죄 성립 | 먼저 때린 쪽 책임 더 큼</blockquote>',
      },
      {
        title: '정당방위 인정 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">현재의 부당한 침해에 대한 상당한 방어행위여야 합니다</strong></p>\n<p><strong>형법 제21조</strong>에 따라 정당방위가 인정되려면 ①<strong>현재의 부당한 침해</strong>가 존재하고, ②<strong>자기 또는 타인의 법익을 방어</strong>하기 위한 것이며, ③방어행위에 <strong>상당한 이유</strong>(비례성)가 있어야 합니다.</p>\n<p>실무에서 쌍방폭행과 정당방위를 가르는 핵심은 <strong>"반격이 방어 목적이었는지, 공격 목적이었는지"</strong>입니다. 밀치거나 잡아서 제지하는 수준은 방어로 인정될 수 있지만, 상대를 적극적으로 때리면 공격으로 판단됩니다. 공격이 끝난 후 반격하면 <strong>보복</strong>이므로 정당방위가 아닙니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정당방위 요건: ①현재의 침해 ②방어 목적 ③상당한 이유 | 공격 후 반격 = 보복(불인정)</blockquote>',
      },
      {
        title: '정당방위를 주장하기 위한 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방의 선제 공격과 내 방어 의사를 증명해야 합니다</strong></p>\n<p>정당방위를 주장하려면 ①<strong>상대방이 먼저 공격했음</strong>을 증명하는 증거(CCTV 영상이 가장 강력), ②<strong>목격자 진술</strong>(현장에서 연락처를 반드시 확보), ③<strong>112 신고 기록</strong>(내가 먼저 신고한 사실이 방어 의사를 뒷받침)이 핵심입니다.</p>\n<p>폭행 직후 <strong>본인의 부상 상태를 사진·동영상으로 기록</strong>하세요. 병원에서 <strong>진단서</strong>를 발급받아 상대방의 공격으로 인한 부상을 증명하는 것도 중요합니다. CCTV는 보통 <strong>30일</strong> 내에 덮어씌워지므로 경찰에 즉시 보존 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: CCTV 보존 요청 + 목격자 연락처 + 112 신고 기록 + 부상 사진·진단서</blockquote>',
      },
      {
        title: '경찰 조사에서의 대응 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">일관되게 방어 의사를 주장하고 변호사와 상담하세요</strong></p>\n<p>경찰 조사에서 <strong>첫 진술</strong>이 수사 방향을 결정합니다. 정당방위를 주장할 것이라면 ①<strong>"상대방이 먼저 때렸다"</strong>, ②<strong>"나는 방어만 했다"</strong>, ③<strong>"다른 방법이 없었다"</strong>는 점을 일관되게 진술하세요.</p>\n<p>쌍방폭행으로 처리되더라도 <strong>먼저 고소한 쪽이 유리</strong>할 수 있습니다. 피해 사실이 있으면 <strong>즉시 고소</strong>하세요. 상대방이 합의를 제안하면 합의금 수준과 처벌불원서 교환을 검토하되, <strong>변호사와 상의 후</strong> 결정하는 것이 안전합니다. 폭행죄는 <strong>반의사불벌죄</strong>이므로 합의 시 공소가 기각됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 일관된 진술 + 먼저 고소 + 변호사 상담 | 폭행죄 합의 시 공소기각</blockquote>',
      },
    ],
    cases: [
      {
        title: 'CCTV로 선제 공격이 확인되어 정당방위가 인정된 사례',
        summary:
          '관련 사례에서도 편의점 앞에서 시비가 붙어 쌍방폭행으로 신고되었으나, CCTV에 상대방이 먼저 주먹을 휘두르는 장면이 촬영되어 피고인의 밀쳐 방어한 행위가 정당방위로 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 현장 CCTV를 즉시 확인하고 경찰에 보존 요청하세요.',
      },
      {
        title: '반격이 과도하여 쌍방폭행으로 처리된 사례',
        summary:
          '관련 사례에서도 상대방의 주먹 한 대에 대해 수 차례 주먹과 발로 반격한 피고인에게, 방어행위의 상당성을 초과했다고 판단되어 쌍방 모두 폭행죄가 적용된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 방어 시 밀치기, 잡기 등 최소한의 방법을 사용하고 즉시 경찰에 신고하세요.',
      },
    ],
    faq: [
      {
        question: '쌍방폭행이면 둘 다 처벌받나요?',
        answer: '양쪽 모두 <strong>폭행죄</strong>가 성립할 수 있습니다. 다만 합의 시 반의사불벌죄 특성상 불기소될 수 있습니다.',
      },
      {
        question: '먼저 맞았으면 정당방위 아닌가요?',
        answer: '먼저 맞았다는 것만으로 정당방위가 되지는 않습니다. <strong>방어 목적과 상당성</strong>이 함께 인정되어야 합니다.',
      },
      {
        question: '쌍방폭행에서 먼저 때린 쪽이 더 불리한가요?',
        answer: '네, 선제 공격자의 <strong>책임이 더 크게</strong> 인정되며 양형에서 불리합니다.',
      },
      {
        question: '쌍방폭행으로 합의하면 전과가 안 남나요?',
        answer: '기소 전 합의로 <strong>불기소 처분</strong>을 받으면 전과 기록이 남지 않습니다.',
      },
      {
        question: '상해가 발생한 쌍방폭행은 어떻게 되나요?',
        answer: '상해죄는 <strong>반의사불벌죄가 아니므로</strong> 합의해도 기소될 수 있습니다. 양형에 유리하게 참작됩니다.',
      },
      {
        question: '과잉방위란 무엇인가요?',
        answer: '정당방위의 <strong>상당성을 초과</strong>한 경우입니다. 형이 감경되며, 야간·공포 상태면 면제될 수 있습니다.',
      },
      {
        question: '쌍방폭행 사건에서 먼저 고소하는 게 유리한가요?',
        answer: '실무적으로 <strong>먼저 고소한 쪽이 피해자로 인식</strong>되는 경향이 있어 유리할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 범죄피해자지원센터(1577-1295)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 쌍방폭행 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '정당방위 인정 기준과 준비 포인트', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '상해죄와 폭행죄 차이점 및 처벌 수위', href: '/guide/assault/injury-vs-assault-penalty' },
    ],
  },
  {
    domain: 'assault',
    slug: 'injury-settlement-calculation',
    keyword: '상해죄 합의금 산정 기준과 합의 절차',
    questionKeyword: '상해죄 합의금은 얼마나 되고 합의는 어떻게 하나요?',
    ctaKeyword: '상해죄 합의',
    type: '수치기한형',
    meta: {
      title: '상해죄 합의금 산정 3대 기준 — 치료비·위자료·일실수입 | 로앤가이드',
      description: '상해죄 합의금은 치료비, 위자료, 일실수입 3가지를 합산하여 산정합니다. 진단서 기간별 합의금 시세와 합의서 필수 기재사항, 양형 자료 제출 방법까지 정리했습니다. 바로 정리해보세요.',
    },
    intro: '시비 끝에 상대방을 때려 상해를 입혔습니다. 진단서가 나왔고 상해죄로 고소당한 상황입니다. 합의금이 얼마 정도이고 어떻게 합의를 진행해야 하는지 막막합니다. 혐의를 받고 있다면 아래 내용을 먼저 확인해보세요.',
    timelineSteps: ['합의금 산정 기준', '합의 절차 진행', '합의서 작성', '양형 자료 제출'],
    sections: [
      {
        title: '상해죄 합의금 산정 기준을 확인하세요 — 치료비, 위자료, 일실수입',
        content:
          '<p><strong style="color:#1e3a5f">치료비 + 위자료 + 일실수입이 합의금의 기본 구조입니다</strong></p>\n<p>상해죄 합의금은 ①<strong>치료비</strong>(실제 발생한 의료비 전액 + 향후 치료비), ②<strong>위자료</strong>(정신적 피해에 대한 보상), ③<strong>일실수입</strong>(치료 기간 동안 일하지 못한 수입 손실)의 합산으로 산정됩니다.</p>\n<p>경미한 상해(진단 <strong>2~3주</strong>)는 <strong>300만~700만원</strong>, 중등도 상해(진단 <strong>4~8주</strong>)는 <strong>700만~2,000만원</strong>, 중상해(진단 <strong>8주 이상</strong> 또는 후유장해)는 <strong>2,000만원 이상</strong>이 실무 참고 범위입니다. 피해자의 직업, 나이, 부상 부위에 따라 크게 달라질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고 범위: 2~3주 300만~700만원 | 4~8주 700만~2,000만원 | 8주+ 2,000만원 이상</blockquote>',
      },
      {
        title: '상해죄는 반의사불벌죄가 아닙니다 — 합의의 실질적 효과',
        content:
          '<p><strong style="color:#1e3a5f">합의해도 기소될 수 있지만 양형에 결정적 영향을 미칩니다</strong></p>\n<p><strong>상해죄(형법 제257조)</strong>는 반의사불벌죄가 아닙니다. 폭행죄와 달리 피해자와 합의하더라도 <strong>검찰이 기소할 수 있습니다</strong>. 그러나 실무에서 합의는 양형에 <strong>가장 큰 감경 요소</strong>로 작용합니다.</p>\n<p>피해자에게 치료비를 전액 배상하고 합의한 초범은 ①검찰 단계에서 <strong>기소유예</strong> 가능성이 있고, ②재판에서는 <strong>벌금형이나 집행유예</strong>를 받을 가능성이 높습니다. 합의 없이 재판에 가면 <strong>징역 실형</strong>까지 선고될 수 있으므로 합의 노력은 필수입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상해죄 합의 → 기소유예/벌금/집행유예 가능 | 합의 없으면 실형 가능</blockquote>',
      },
      {
        title: '합의서 작성 시 반드시 포함해야 할 내용',
        content:
          '<p><strong style="color:#1e3a5f">합의금, 처벌불원, 추가 청구 포기, 향후 치료비 조항을 명시하세요</strong></p>\n<p>합의서에는 ①<strong>합의 금액과 지급 방법</strong>(일시불 또는 분할), ②피해자의 <strong>"처벌불원" 의사</strong>(처벌불원서 별도 작성), ③<strong>민·형사상 추가 청구 포기</strong> 문구, ④<strong>향후 치료비 처리 조항</strong>을 반드시 포함하세요.</p>\n<p>향후 치료비 조항은 양쪽 모두에게 중요합니다. "향후 치료비는 가해자가 추가 부담한다" 또는 "합의금에 향후 치료비가 포함되어 있다"를 <strong>명확히 기재</strong>해야 나중에 분쟁이 없습니다. 합의서는 <strong>공증</strong>을 받아두는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 포함: 합의금 + 처벌불원 + 추가 청구 포기 + 향후 치료비 조항 + 공증 권장</blockquote>',
      },
      {
        title: '합의 절차와 양형 자료 제출을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">기소 전 합의가 가장 유리하고, 변호사를 통한 교섭이 효과적입니다</strong></p>\n<p>합의 시기는 <strong>빠를수록 유리</strong>합니다. 기소 전에 합의하면 기소유예 가능성이 있고, 기소 후에도 재판 전 합의하면 양형에 크게 반영됩니다. 피해자와 직접 연락이 어렵거나 감정이 격해진 상태라면 <strong>변호사를 통한 합의 교섭</strong>이 효과적입니다.</p>\n<p>합의 후에는 ①<strong>합의서 사본</strong>, ②<strong>처벌불원서</strong>, ③<strong>반성문</strong>, ④<strong>탄원서</strong>(가족, 지인 등이 작성)를 수사기관 또는 법원에 양형 자료로 제출하세요. 피해자가 합의를 거부하는 경우 <strong>공탁</strong>(법원에 치료비 등을 맡기는 절차)으로 배상 의사를 증명할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 변호사 교섭 → 합의서·처벌불원서 확보 → 양형 자료 제출 | 거부 시 공탁</blockquote>',
      },
    ],
    cases: [
      {
        title: '전액 배상 후 기소유예를 받은 사례',
        summary:
          '관련 사례에서도 상해죄(진단 3주) 초범 피의자가 치료비와 위자료를 포함하여 500만원을 전액 배상하고 처벌불원서를 확보한 뒤, 반성문을 제출하여 검찰에서 기소유예 처분을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 치료비를 포함한 합의금을 빠르게 제시하고 처벌불원서를 확보하세요.',
      },
      {
        title: '합의 없이 재판에서 징역형이 선고된 사례',
        summary:
          '관련 사례에서도 상해죄(진단 6주)에서 피해자와 합의에 실패하고 피해 배상도 이루어지지 않은 상태로 재판에 넘겨져, 징역 8월의 실형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 전액 합의가 어렵더라도 일부라도 배상하고 공탁을 활용하세요.',
      },
    ],
    faq: [
      {
        question: '상해죄 합의금에 정해진 기준이 있나요?',
        answer: '법적으로 정해진 기준은 없습니다. <strong>치료비, 위자료, 일실수입</strong>을 합산하여 산정하되 피해 정도에 따라 달라집니다.',
      },
      {
        question: '합의하면 전과 기록이 안 남나요?',
        answer: '기소유예를 받으면 <strong>전과 기록이 남지 않습니다</strong>. 기소 후 합의하면 양형에 유리하나 유죄 판결 시 전과가 됩니다.',
      },
      {
        question: '피해자가 터무니없는 합의금을 요구하면요?',
        answer: '<strong>변호사를 통해 적정 금액을 협상</strong>하세요. 합의가 안 되면 공탁으로 배상 의사를 증명할 수 있습니다.',
      },
      {
        question: '분할로 합의금을 낼 수 있나요?',
        answer: '피해자가 동의하면 <strong>분할 배상</strong>도 가능합니다. 합의서에 분할 일정과 불이행 시 조건을 명시하세요.',
      },
      {
        question: '공탁이란 무엇인가요?',
        answer: '<strong>법원에 배상금을 맡기는 절차</strong>입니다. 피해자가 합의를 거부해도 배상 의사를 증명할 수 있어 양형에 유리합니다.',
      },
      {
        question: '상해죄의 처벌 수위는 어느 정도인가요?',
        answer: '<strong>7년 이하 징역, 10년 이하 자격정지, 1,000만원 이하 벌금</strong>입니다. 중상해는 가중처벌됩니다.',
      },
      {
        question: '향후 치료비는 합의금에 포함시켜야 하나요?',
        answer: '합의서에 <strong>향후 치료비 처리 방법</strong>을 명확히 기재해야 합니다. 미기재 시 추가 청구 분쟁이 발생할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상해 혐의 상황에 맞는 합의 전략을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '폭행 합의금 적정 금액과 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '상해죄와 폭행죄 차이점 및 처벌 수위', href: '/guide/assault/injury-vs-assault-penalty' },
      { label: '사기죄 처벌 수위와 합의 시 감형 범위', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-evidence-checklist',
    keyword: '폭행 피해 증거 체크리스트',
    questionKeyword: '폭행 피해를 입었을 때 어떤 증거를 모아야 하나요?',
    ctaKeyword: '폭행 증거 수집',
    type: '체크리스트형',
    meta: {
      title: '폭행 증거 종류별 수집법 4가지 체크리스트 | 로앤가이드',
      description: '폭행 피해를 입증하려면 어떤 종류의 증거가 필요할까요? 의료 증거, 영상 증거, 인적 증거, 대화 증거까지 항목별로 빠짐없이 체크하세요. 지금 확인하세요.',
    },
    intro: '경찰 조사실에서 수사관이 묻습니다. "증거 뭐 있으세요?" 폭행을 당한 건 사실인데, 뭘 준비해야 하는지 감이 잡히질 않습니다. 진단서만 있으면 되는 줄 알았는데, 그것만으로는 부족하다고 합니다. 증거는 종류가 다양하고, 각각의 역할이 다릅니다. 이 글에서는 폭행 피해 입증에 필요한 증거를 항목별로 나누어 하나씩 체크할 수 있도록 정리했습니다.',
    sections: [
      {
        title: '진단서와 의료 기록 — 피해 사실의 가장 강력한 증거입니다',
        content:
          '<p><strong style="color:#1e3a5f">폭행 직후 병원에 가서 진단서를 발급받으세요</strong></p>\n<p>폭행 피해의 가장 기본적인 증거는 <strong>의사의 진단서</strong>입니다. 가능한 한 빨리 병원에 가서 진단서를 발급받으세요. 진단서에는 상해 부위, 정도, 치료 기간이 기재됩니다. 형사소송법 제308조에 따라 증거의 증명력은 법관의 자유심증에 의하지만, 진단서는 객관적 증거로서 높은 증명력을 가집니다.</p>\n<p>치료 기간이 <strong>2주 이상</strong>이면 폭행죄(형법 제260조)가 아닌 상해죄(형법 제257조)로 처벌이 가중될 수 있습니다. 진단서 외에 <strong>의무기록 사본</strong>, 처방전, 영수증도 함께 보관하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 진단서 발급, 의무기록 사본, 처방전, 치료비 영수증</blockquote>',
      },
      {
        title: '사진과 영상 — 부상 부위와 현장을 기록하세요',
        content:
          '<p><strong style="color:#1e3a5f">부상 부위 사진은 시간 경과에 따라 여러 번 촬영하세요</strong></p>\n<p>멍, 찰과상, 붓기 등 <strong>부상 부위를 사진으로 촬영</strong>하세요. 폭행 직후, 다음 날, 3일 후 등 시간 경과에 따른 변화를 기록하면 피해 정도를 더 명확하게 증명할 수 있습니다. 사진을 찍을 때는 날짜와 시간이 메타데이터에 남도록 스마트폰 카메라를 사용하세요.</p>\n<p>사건 현장도 촬영해두세요. <strong>CCTV가 있는지</strong> 주변을 살펴보고, 있다면 경찰에 보존을 요청하거나 직접 관리자에게 요청하세요. CCTV는 통상 30일~90일이면 삭제됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 부상 부위 사진(날짜별), 현장 사진, CCTV 보존 요청</blockquote>',
      },
      {
        title: '목격자와 신고 기록 — 제3자의 진술이 증명력을 높입니다',
        content:
          '<p><strong style="color:#1e3a5f">목격자의 연락처를 반드시 확보하세요</strong></p>\n<p>현장에 목격자가 있었다면 <strong>연락처를 확보</strong>하세요. 시간이 지나면 목격자를 찾기 어렵습니다. 목격자가 사건 경위를 진술해주면, 피해자 진술의 신빙성이 크게 높아집니다. 주변 상가 직원, 행인, 동행인 등을 확인하세요.</p>\n<p>112 신고 기록도 중요한 증거입니다. 폭행 직후 <strong>112에 신고하면 신고 시각, 내용이 기록</strong>으로 남습니다. 이 기록은 사건 발생 사실과 시점을 증명하는 자료가 됩니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">폭행 피해 증거 수집이 필요하다면 <a href="/diagnosis/assault" style="color:#2563eb;font-weight:600">무료 폭행 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 목격자 연락처, 112 신고 기록, 주변 상가·행인 확인</blockquote>',
      },
      {
        title: '대화 기록과 녹음 — 가해자의 발언이 증거가 됩니다',
        content:
          '<p><strong style="color:#1e3a5f">가해자가 폭행 사실을 인정하는 발언이 있다면 강력한 증거입니다</strong></p>\n<p>가해자와의 문자, 카카오톡 대화에서 <strong>"미안하다", "때린 건 잘못했다"</strong> 등의 발언이 있다면 캡처해두세요. 가해자가 폭행 사실을 인정하는 내용은 자백에 준하는 증거력을 가질 수 있습니다.</p>\n<p>통화 시 <strong>녹음</strong>도 유효한 증거입니다. 대화 당사자가 녹음하는 것은 적법합니다(대법원 2006도4981). 녹음 전에 "녹음합니다"라고 알릴 필요는 없지만, 녹음 파일은 원본 그대로 보관하세요. 편집된 녹음은 증거 능력을 의심받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 가해자 인정 대화 캡처, 통화 녹음(원본 보관), 문자·카톡 내보내기</blockquote>',
      },
    ],
    cases: [
      {
        title: '진단서와 CCTV로 폭행 피해를 입증한 사례',
        summary:
          '음식점에서 폭행을 당한 피해자가 당일 병원 진단서(타박상 2주)와 매장 CCTV 영상을 증거로 제출하여, 가해자가 폭행죄로 벌금 300만원의 약식명령을 받은 사례입니다.',
        takeaway:
          '비슷한 상황이라면 폭행 직후 병원에 가고, 현장 CCTV 보존을 즉시 요청하세요.',
      },
      {
        title: '가해자의 사과 문자가 결정적 증거가 된 사례',
        summary:
          '가해자가 법정에서 폭행 사실을 부인했으나, 사건 직후 보낸 "때려서 미안하다"는 카카오톡 메시지가 증거로 채택되어 유죄가 인정된 사례입니다.',
        takeaway:
          '비슷한 상황이라면 가해자와의 대화 내용을 삭제하지 말고, 폭행 사실 인정 발언이 담긴 메시지를 반드시 보관하세요.',
      },
    ],
    faq: [
      {
        question: '폭행 당일이 아닌 다음 날 병원에 가도 되나요?',
        answer: '가능하지만, <strong>가능한 한 빨리</strong> 가는 것이 좋습니다. 시간이 지나면 폭행과 상해 사이의 인과관계를 다툴 수 있습니다.',
      },
      {
        question: 'CCTV가 없는 장소에서 폭행당했으면 어떡하나요?',
        answer: '목격자 확보, 부상 사진, 진단서, 가해자와의 <strong>대화 기록</strong> 등 다른 증거를 최대한 수집하세요.',
      },
      {
        question: '녹음은 상대방 동의 없이 해도 되나요?',
        answer: '대화 <strong>당사자가 녹음하는 것은 적법</strong>합니다. 다만 제3자의 대화를 몰래 녹음하면 불법입니다.',
      },
      {
        question: '폭행죄와 상해죄는 뭐가 다른가요?',
        answer: '폭행죄는 신체적 접촉, 상해죄는 <strong>신체 기능 훼손(상해)</strong>이 발생한 경우입니다. 상해죄가 처벌이 더 무겁습니다.',
      },
      {
        question: '증거가 부족하면 고소해도 의미 없나요?',
        answer: '증거가 부족하더라도 고소는 가능합니다. <strong>수사기관이 CCTV 조회, 참고인 조사</strong> 등을 통해 증거를 확보할 수 있습니다.',
      },
      {
        question: '가해자가 "네가 먼저 시비 걸었다"고 주장하면 어떡하나요?',
        answer: '쌍방폭행 주장에 대비하여 <strong>사건 경위를 시간순으로 정리</strong>하고, 먼저 폭행한 것이 가해자임을 증명할 자료를 준비하세요.',
      },
      {
        question: '합의를 요구해도 되나요?',
        answer: '피해자로서 <strong>합의금을 요구하는 것은 정당한 권리</strong>입니다. 다만 과도한 금액 요구는 공갈로 문제될 수 있으니 적정 수준을 파악하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 폭행 사건에 필요한 증거 항목을 체크해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 가이드', href: '/guide/assault' },
      { label: '폭행 증거 수집 가이드', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 합의금 적정 금액과 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-first-offense-penalty',
    keyword: '폭행 초범 처벌',
    questionKeyword: '폭행 초범은 어느 정도 처벌을 받나요?',
    ctaKeyword: '폭행 초범 대응',
    type: 'Q&A형',
    meta: {
      title: '폭행 초범 처벌 수위 — 벌금형·기소유예 가능성 총정리 | 로앤가이드',
      description: '폭행 초범은 대부분 벌금 50만~200만원 또는 기소유예로 종결됩니다. 합의 시 처벌불원서를 확보하면 공소권 없음 처분이 가능합니다. 양형 기준과 감경 요소를 지금 확인하세요.',
    },
    intro: '술자리에서 시비가 붙어 상대방을 한 대 때렸습니다. 난생처음 경찰 조사를 받게 되었고, 전과가 없는 초범인데 어느 정도 처벌을 받을지 걱정됩니다. "초범이니까 봐주겠지"라는 막연한 기대와 "혹시 구속되는 건 아닐까"라는 불안이 교차합니다. 폭행 초범의 처벌 수위와 유리한 양형 요소를 정리했습니다.',
    sections: [
      {
        title: '폭행죄의 법정형 — 2년 이하 징역 또는 500만원 이하 벌금',
        content:
          '<p><strong style="color:#1e3a5f">형법 제260조 제1항 폭행죄의 처벌 수위를 알아두세요</strong></p>\n<p>형법 제260조 제1항에 따라 폭행죄는 <strong>2년 이하 징역, 500만원 이하 벌금, 구류 또는 과료</strong>에 처해집니다. 폭행으로 인해 상해(신체 기능 훼손)가 발생하면 상해죄(형법 제257조)가 적용되어 <strong>7년 이하 징역, 10년 이하 자격정지, 1,000만원 이하 벌금</strong>으로 처벌이 가중됩니다.</p>\n<p>중요한 점은 폭행죄(제260조 제1항, 제3항)는 <strong>반의사불벌죄</strong>라는 것입니다. 피해자가 처벌을 원하지 않으면 공소를 제기할 수 없습니다. 다만 상해죄는 반의사불벌죄가 아닙니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 폭행죄는 반의사불벌죄 — 피해자가 처벌불원 시 공소 제기 불가</blockquote>',
      },
      {
        title: '초범 양형 기준 — 대부분 벌금형 또는 기소유예로 종결됩니다',
        content:
          '<p><strong style="color:#1e3a5f">양형위원회 기준상 폭행 초범은 벌금형이 일반적입니다</strong></p>\n<p>양형위원회의 양형기준에 따르면, 단순 폭행 초범은 <strong>벌금 50만원~200만원</strong>이 일반적입니다. 상해가 경미한 경우(진단 2주 이하)에는 벌금 100만원~300만원 수준입니다. 초범이고 피해가 경미하며 합의가 이루어진 경우에는 <strong>기소유예</strong> 처분을 받을 가능성이 높습니다.</p>\n<p>기소유예는 혐의는 인정되나 <strong>정상을 참작하여 기소하지 않는</strong> 처분입니다. 전과 기록이 남지 않으며, 수사 경력만 조회됩니다. 초범에게는 가장 유리한 결과입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 초범 + 경미한 피해 + 합의 = 기소유예 가능성 높음</blockquote>',
      },
      {
        title: '합의가 가장 중요합니다 — 처벌불원서를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">폭행죄는 반의사불벌죄이므로 처벌불원서가 결정적입니다</strong></p>\n<p>폭행죄(형법 제260조)는 반의사불벌죄이므로, 피해자의 <strong>처벌불원서</strong>를 확보하면 공소가 제기되지 않습니다. 합의 시에는 ① 합의금 액수, ② 피해자의 처벌불원 의사, ③ 민사 청구 포기 여부를 합의서에 명확히 기재하세요.</p>\n<p>합의금 수준은 피해 정도에 따라 다르지만, 단순 폭행 초범의 경우 통상 <strong>50만원~200만원</strong> 수준입니다. 상해가 동반된 경우에는 치료비 + 위자료가 추가됩니다. 합의가 되지 않으면 <strong>공탁</strong>을 통해 배상 의사를 증명하세요.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">폭행 초범 처벌이 걱정된다면 <a href="/diagnosis/assault" style="color:#2563eb;font-weight:600">무료 폭행 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 합의서 + 처벌불원서 작성, 합의 불성립 시 공탁 검토</blockquote>',
      },
      {
        title: '양형에 유리한 요소를 적극 주장하세요',
        content:
          '<p><strong style="color:#1e3a5f">반성문, 재발 방지 서약, 사회봉사 등이 양형에 긍정적입니다</strong></p>\n<p>합의 외에도 양형에 유리한 요소들이 있습니다. <strong>반성문</strong>을 작성하여 제출하고, 재발 방지를 위한 분노조절 상담 수료증, 사회봉사 활동 증빙 등을 준비하세요. 양형위원회 기준에서는 "진지한 반성"을 감경 사유로 인정합니다.</p>\n<p>또한 <strong>피해 경위에 참작할 사정</strong>(상대방의 도발, 우발적 상황 등)이 있다면 이를 주장하세요. 다만 "상대방이 먼저 시비를 걸었다"는 주장만으로 정당방위가 인정되기는 어렵습니다. 형법 제21조의 정당방위는 엄격한 요건 하에서만 인정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 반성문, 분노조절 상담 수료증, 사회봉사 증빙, 탄원서</blockquote>',
      },
    ],
    cases: [
      {
        title: '폭행 초범 합의 후 기소유예 처분 사례',
        summary:
          '술자리에서 단순 폭행한 초범이 피해자와 합의하고 처벌불원서를 제출한 사건에서, 검찰은 초범인 점, 피해가 경미한 점, 피해 회복이 완료된 점을 고려하여 기소유예 처분하였습니다.',
        takeaway:
          '비슷한 상황이라면 가능한 한 빨리 피해자와 합의하고, 처벌불원서를 확보하여 검찰 단계에서 기소유예를 받을 수 있도록 하세요.',
      },
    ],
    faq: [
      {
        question: '폭행 초범이면 구속되나요?',
        answer: '단순 폭행 초범은 <strong>구속되는 경우가 거의 없습니다</strong>. 다만 중상해나 흉기 사용 시에는 구속될 수 있습니다.',
      },
      {
        question: '벌금형을 받으면 전과 기록이 남나요?',
        answer: '네, <strong>벌금형도 전과 기록</strong>에 남습니다. 기소유예는 전과가 남지 않습니다.',
      },
      {
        question: '폭행죄로 벌금을 내면 취업에 불이익이 있나요?',
        answer: '일반 기업 취업 시에는 큰 영향이 없지만, <strong>공무원·교원·금융기관</strong> 등 결격 사유에 해당할 수 있습니다.',
      },
      {
        question: '쌍방폭행이면 처벌이 달라지나요?',
        answer: '양쪽 모두 폭행죄로 처벌될 수 있습니다. 다만 <strong>먼저 때린 쪽이 더 불리</strong>하게 판단됩니다.',
      },
      {
        question: '기소유예와 선고유예는 뭐가 다른가요?',
        answer: '<strong>기소유예</strong>는 검찰이 기소하지 않는 것이고, 선고유예는 법원이 유죄이나 형 선고를 유예하는 것입니다.',
      },
      {
        question: '합의하지 않으면 어느 정도 벌금이 나오나요?',
        answer: '합의 없는 단순 폭행 초범은 <strong>벌금 100만원~300만원</strong>이 일반적입니다.',
      },
      {
        question: '정당방위가 인정되면 처벌을 안 받나요?',
        answer: '<strong>정당방위(형법 제21조)</strong>가 인정되면 위법성이 조각되어 처벌받지 않습니다. 다만 인정 요건이 매우 엄격합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '폭행 초범 처벌이 걱정된다면 대응 방법을 확인해보세요',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 가이드', href: '/guide/assault' },
      { label: '정당방위 성립 기준', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 합의금 적정 금액과 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-charged-first-response',
    keyword: '폭행 가해자로 입건됐을 때 첫 대응',
    questionKeyword: '폭행 혐의로 입건됐는데 어떻게 대응해야 하나요?',
    ctaKeyword: '폭행 가해자 대응',
    type: '상황형',
    meta: {
      title: '폭행 입건 후 즉시 대응 4단계 — 출석 전 필수 준비 | 로앤가이드',
      description: '폭행 혐의로 입건되었다면 출석 전 사건 정리, 진술 전략 수립, 피해자 합의, 양형 자료 확보 4단계가 핵심입니다. 초기 대응이 결과를 좌우합니다. 바로 정리해보세요.',
    },
    intro: '술자리에서 시비가 붙어 상대방을 한 대 쳤습니다. 그때는 별일 아니라고 생각했는데, 며칠 뒤 상대가 진단서를 끊고 고소했다는 연락을 받았습니다. 경찰서에서 출석 요구가 왔습니다. 혐의를 받고 있다면, 첫 대응이 결과를 크게 좌우합니다. 지금 해야 할 일을 정리해보세요.',
    timelineSteps: ['출석 전 준비', '진술 전략 수립', '합의 진행', '양형 대응'],
    sections: [
      {
        title: '출석 전에 반드시 사건을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">사건 경위, 목격자, CCTV 유무를 출석 전에 파악하세요</strong></p>\n<p>경찰 출석 전에 <strong>사건 경위를 시간 순서대로</strong> 정리하세요. 누가 먼저 시비를 걸었는지, 어떤 상황에서 폭행이 발생했는지, 당시 목격자가 있었는지를 기록합니다.</p>\n<p>현장 주변에 <strong>CCTV</strong>가 있었는지 확인하세요. 상대방이 먼저 도발하거나 폭행했다면 그 장면이 촬영됐을 수 있습니다. 술자리 동석자의 <strong>연락처</strong>도 확보해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 사건 경위 시간순 정리 | CCTV 확인 | 목격자·동석자 연락처 확보</blockquote>',
      },
      {
        title: '조사에서 진술 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">감정적 대응을 피하고 사실관계 위주로 진술하세요</strong></p>\n<p>조사에서 가장 중요한 것은 <strong>일관성</strong>입니다. "때린 적 없다"고 전면 부인했다가 CCTV에 잡히면 신빙성이 완전히 무너집니다. 사실을 인정할 부분은 인정하되, <strong>경위와 정황</strong>을 함께 진술하세요.</p>\n<p>상대방이 먼저 도발했거나 폭행했다면 <strong>정당방위 또는 쌍방폭행</strong> 주장이 가능합니다. 진술거부권을 행사할 수도 있으며, 불리한 질문에는 "변호사와 상의 후 답변하겠습니다"라고 말하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 사실 인정 + 경위 설명 | 전면 부인은 위험 | 진술거부권 활용 가능</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">혐의를 받고 있다면, 조사 전에 대응 방향을 점검하세요. <a href="/diagnosis/assault" style="color:#2563eb;font-weight:600">무료 폭행 진단</a>으로 현재 상황에 맞는 전략을 확인해보세요.</p>',
      },
      {
        title: '합의는 빠를수록 유리합니다',
        content:
          '<p><strong style="color:#1e3a5f">폭행죄는 반의사불벌죄이므로 합의하면 처벌을 피할 수 있습니다</strong></p>\n<p><strong>폭행죄</strong>(형법 제260조)는 반의사불벌죄입니다. 피해자가 처벌을 원하지 않으면 공소가 기각됩니다. 따라서 합의가 가장 확실한 해결책입니다. 다만 <strong>상해죄</strong>(형법 제257조)는 반의사불벌죄가 아니므로 합의해도 기소될 수 있습니다.</p>\n<p>합의금은 <strong>치료비 + 위자료</strong>가 기본입니다. 진단 2주 기준 통상 <strong>50만~200만원</strong> 수준이며, 상해 정도에 따라 달라집니다. 합의서에는 반드시 <strong>"처벌을 원하지 않는다"</strong>는 문구를 포함시키세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 폭행죄 = 반의사불벌 → 합의 시 공소기각 | 상해죄 = 합의해도 기소 가능 | 합의서에 처벌불원 필수</blockquote>',
      },
      {
        title: '양형에 유리한 요소를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">초범 여부, 반성문, 합의 여부가 양형의 핵심입니다</strong></p>\n<p><strong>초범</strong>이면 벌금형 또는 기소유예 가능성이 높습니다. 폭행죄 초범은 통상 <strong>벌금 50만~200만원</strong> 수준입니다. 상해죄 초범이라도 합의가 되면 벌금형에 그치는 경우가 많습니다.</p>\n<p><strong>반성문</strong>을 작성하고, 합의금을 지급했다면 합의서를 제출하세요. 직장에서의 <strong>재직증명서</strong>, 가족 부양 사실(가족관계증명서), 사회봉사 활동 내역도 양형에 유리한 자료가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 자료: 반성문 + 합의서 + 처벌불원서 + 재직증명 + 가족관계증명 + 봉사활동</blockquote>',
      },
    ],
    cases: [
      {
        title: '초범+합의로 기소유예 처분을 받은 사례',
        summary:
          '관련 사례에서도 술자리 폭행 초범 사건에서 피의자가 경찰 수사 단계에서 피해자와 합의하고 처벌불원서를 받아, 검찰에서 기소유예 처분을 받은 경우가 있습니다. 빠른 합의와 반성문이 결정적이었습니다.',
        takeaway:
          '비슷한 상황이라면 경찰 단계에서 빠르게 합의를 진행하고, 반성문도 함께 제출하세요.',
      },
      {
        title: '전면 부인했다가 CCTV로 드러나 중형을 받은 사례',
        summary:
          '관련 사례에서도 피의자가 "때린 적 없다"고 전면 부인했으나 CCTV 영상에 폭행 장면이 선명하게 촬영되어 있어 진술의 신빙성이 부정되었고, 반성 태도가 인정되지 않아 실형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 사실을 인정할 부분은 인정하고, 경위를 함께 설명하는 전략이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '폭행 가해자인데 구속될 수 있나요?',
        answer: '단순 폭행 초범은 구속 가능성이 낮지만, <strong>상해가 중하거나 전과</strong>가 있으면 구속될 수 있습니다.',
      },
      {
        question: '상대가 먼저 시비를 걸었는데 정당방위 되나요?',
        answer: '단순 시비만으로는 어렵습니다. 상대가 <strong>먼저 폭행</strong>했고, 방어 수준이 상당하면 정당방위가 인정될 수 있습니다.',
      },
      {
        question: '합의금은 얼마가 적당한가요?',
        answer: '진단 2주 기준 통상 <strong>50만~200만원</strong>입니다. 상해 정도, 후유증, 일실수입에 따라 달라집니다.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 하나요?',
        answer: '<strong>공탁</strong>(법원에 합의금을 맡김)으로 변제 의사를 보여줄 수 있습니다. 양형에 유리하게 참작됩니다.',
      },
      {
        question: '폭행죄 초범 벌금은 얼마인가요?',
        answer: '통상 <strong>50만~200만원</strong> 벌금형입니다. 합의 여부와 피해 정도에 따라 달라집니다.',
      },
      {
        question: '폭행죄에 벌금 내면 전과 기록이 남나요?',
        answer: '벌금형도 <strong>전과 기록</strong>이 남습니다. 기소유예 처분을 받으면 전과가 남지 않습니다.',
      },
      {
        question: '쌍방폭행이면 쌍방 다 처벌받나요?',
        answer: '쌍방 모두 <strong>폭행죄가 성립</strong>할 수 있습니다. 다만 쌍방이 모두 처벌불원 의사를 밝히면 공소기각됩니다.',
      },
      {
        question: '진단서가 3주 이상이면 어떻게 되나요?',
        answer: '<strong>상해죄</strong>로 처리되며, 반의사불벌이 아니므로 합의해도 기소될 수 있습니다. 양형에는 참작됩니다.',
      },
    ],
    cta: {
      text: '1분 안에 폭행 가해자 대응 준비사항 확인하기',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '폭행 가이드', href: '/guide/assault' },
      { label: '폭행 합의금 적정 금액과 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '쌍방폭행 시 처벌 기준과 정당방위 구분', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '사기 피의자 조사에서 흔한 실수 5가지', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-criminal-vs-civil-claim',
    keyword: '폭행 형사고소 vs 민사소송 비교',
    questionKeyword: '폭행당했는데 형사고소와 민사소송 중 뭘 해야 하나요?',
    ctaKeyword: '폭행 형사 민사 비교',
    type: '비교형',
    meta: {
      title: '폭행 형사고소 vs 민사소송 — 목적·비용·기간 비교표 | 로앤가이드',
      description: '형사고소는 가해자 처벌, 민사소송은 치료비·위자료 배상이 목적입니다. 두 절차의 비용, 소요 기간, 병행 전략과 배상명령 활용법까지 비교표로 정리했습니다. 지금 확인하세요.',
    },
    intro: '길을 걷다가 갑자기 모르는 사람에게 맞았습니다. 병원에 가니 진단 3주가 나왔습니다. 주변에서는 "경찰에 고소해"라고 하고, 또 다른 사람은 "민사소송해서 돈 받아"라고 합니다. 형사고소와 민사소송, 뭐가 다르고 뭘 먼저 해야 하는지 정리해보세요.',
    comparison: {
      title: '형사고소 vs 민사소송 비교표',
      headers: ['구분', '형사고소', '민사소송'],
      rows: [
        { label: '목적', values: ['가해자 처벌(징역·벌금)', '금전 배상(치료비·위자료)'] },
        { label: '비용', values: ['무료(고소 비용 없음)', '인지대·송달료·변호사 비용'] },
        { label: '절차', values: ['경찰 고소장 → 검찰 → 재판', '소장 제출 → 변론 → 판결'] },
        { label: '소요 기간', values: ['수사~재판 6개월~1년+', '소송 6개월~1년+'] },
        { label: '결과', values: ['징역·벌금·기소유예 등', '손해배상금 지급 판결'] },
      ],
    },
    timelineSteps: ['형사·민사 차이 파악', '형사고소 진행', '민사 병행 검토', '합의·집행'],
    sections: [
      {
        title: '형사고소는 가해자 처벌이 목적입니다',
        content:
          '<p><strong style="color:#1e3a5f">형사고소는 비용이 들지 않고, 국가가 수사와 기소를 담당합니다</strong></p>\n<p>형사고소는 <strong>가해자의 형사처벌</strong>을 구하는 절차입니다. 경찰서에 고소장을 제출하면 수사가 시작되고, 검찰이 기소 여부를 결정합니다. 고소 비용은 <strong>무료</strong>이며, 수사와 기소는 국가(검찰)가 담당합니다.</p>\n<p><strong>폭행죄</strong>는 2년 이하 징역/500만원 이하 벌금, <strong>상해죄</strong>는 7년 이하 징역/1,000만원 이하 벌금입니다. 형사 재판에서 가해자에게 <strong>배상명령</strong>을 신청하면 민사소송 없이도 치료비를 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사고소: 비용 무료 | 국가가 수사·기소 | 배상명령으로 치료비 청구 가능</blockquote>',
      },
      {
        title: '민사소송은 금전 배상이 목적입니다',
        content:
          '<p><strong style="color:#1e3a5f">민사소송으로 치료비, 일실수입, 위자료를 청구할 수 있습니다</strong></p>\n<p>민사소송은 가해자에게 <strong>손해배상</strong>을 구하는 절차입니다. 청구 항목은 ①<strong>치료비</strong>(실비) ②<strong>일실수입</strong>(일하지 못한 기간 수입) ③<strong>위자료</strong>(정신적 고통) ④<strong>향후 치료비</strong>입니다.</p>\n<p>소장 제출 시 <strong>인지대</strong>(청구액 기준)와 <strong>송달료</strong>가 필요합니다. 변호사 비용은 별도입니다. 3,000만원 이하라면 <strong>소액사건심판</strong>으로 빠르게 진행할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">민사소송: 치료비+일실수입+위자료 청구 | 인지대·송달료 필요 | 3,000만원 이하 소액심판 가능</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">형사와 민사 중 어떤 절차가 맞는지 고민된다면, <a href="/diagnosis/assault" style="color:#2563eb;font-weight:600">무료 폭행 진단</a>으로 상황에 맞는 방향을 확인해보세요.</p>',
      },
      {
        title: '형사고소와 민사소송을 병행하는 것이 가장 효과적입니다',
        content:
          '<p><strong style="color:#1e3a5f">형사고소를 먼저 하고, 민사소송을 병행하세요</strong></p>\n<p>가장 효과적인 전략은 <strong>형사고소를 먼저 진행</strong>하면서 민사를 병행하는 것입니다. 형사 수사에서 확보된 가해자 인적사항, 진술 내용을 민사에 활용할 수 있기 때문입니다.</p>\n<p>형사 절차가 진행되면 가해자가 처벌을 피하기 위해 <strong>합의를 제안</strong>하는 경우가 많습니다. 이때 합의금에 치료비, 위자료, 향후 치료비를 모두 포함시키면 민사소송 없이 해결될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 형사고소 먼저 → 수사 자료 민사 활용 | 합의 시 치료비+위자료+향후 치료비 포함</blockquote>',
      },
      {
        title: '합의와 강제집행까지 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의가 안 되면 판결 후 강제집행으로 배상금을 받을 수 있습니다</strong></p>\n<p>형사 단계에서 합의가 이루어지면 합의서에 <strong>합의금 총액, 지급 방법, 지급 기한</strong>을 명확히 기재하세요. "향후 추가 치료비는 별도 청구 가능"이라는 조항도 넣어두면 안전합니다.</p>\n<p>합의가 안 되면 민사 판결을 받아 <strong>강제집행</strong>(급여 압류, 부동산 경매 등)을 진행합니다. 판결 전이라도 가해자 재산이 은닉될 우려가 있으면 <strong>가압류</strong>를 신청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의서: 금액·방법·기한 명시 + 향후 치료비 조항 | 불합의 시 강제집행·가압류 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '형사 배상명령으로 민사소송 없이 치료비를 받은 사례',
        summary:
          '관련 사례에서도 폭행 상해 피해자가 형사 재판에서 배상명령을 신청하여, 별도의 민사소송 없이 치료비와 위자료를 받은 경우가 있습니다. 배상명령은 형사 재판 선고 시 함께 결정됩니다.',
        takeaway:
          '비슷한 상황이라면 형사 재판 시 배상명령 신청을 함께 진행하세요. 민사 비용을 아낄 수 있습니다.',
      },
      {
        title: '형사·민사 병행으로 합의금을 높인 사례',
        summary:
          '관련 사례에서도 형사고소와 민사소송을 동시에 진행하자 가해자가 빠른 합의를 원하여 치료비, 위자료, 향후 치료비를 포함한 합의금을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 형사와 민사를 병행하여 가해자의 합의 유인을 높이세요.',
      },
    ],
    faq: [
      {
        question: '형사고소하면 치료비도 받을 수 있나요?',
        answer: '형사 재판에서 <strong>배상명령</strong>을 신청하면 민사소송 없이 치료비와 위자료를 받을 수 있습니다.',
      },
      {
        question: '민사소송 비용은 얼마나 드나요?',
        answer: '<strong>인지대</strong>(청구액의 0.2~0.5%)와 <strong>송달료</strong>(수만원)가 기본이며, 변호사 선임 시 별도 비용이 듭니다.',
      },
      {
        question: '형사고소와 민사소송 둘 다 해야 하나요?',
        answer: '반드시 둘 다 해야 하는 것은 아닙니다. 다만 <strong>병행하면 합의 가능성과 배상금</strong>이 높아집니다.',
      },
      {
        question: '합의하면 형사고소를 취소해야 하나요?',
        answer: '폭행죄(반의사불벌)는 합의 후 <strong>처벌불원서</strong>를 제출하면 공소기각됩니다. 상해죄는 고소 취소 없이도 양형에 참작됩니다.',
      },
      {
        question: '가해자에게 재산이 없으면 민사소송해도 소용없나요?',
        answer: '판결을 받아두면 10년간 <strong>강제집행</strong>이 가능합니다. 나중에 재산이 생기면 집행할 수 있습니다.',
      },
      {
        question: '형사고소 기한이 있나요?',
        answer: '폭행죄 공소시효는 <strong>5년</strong>, 상해죄는 <strong>7년</strong>입니다.',
      },
      {
        question: '배상명령은 어떻게 신청하나요?',
        answer: '형사 재판 <strong>변론 종결 전</strong>에 법원에 배상명령 신청서를 제출합니다. 치료비 영수증 등 증빙을 첨부하세요.',
      },
      {
        question: '위자료는 보통 얼마인가요?',
        answer: '폭행 사안에 따라 다르지만, 통상 <strong>100만~500만원</strong> 수준입니다. 상해 정도와 후유증에 따라 올라갑니다.',
      },
    ],
    cta: {
      text: '1분 안에 폭행 형사 민사 비교 준비사항 확인하기',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '폭행 가이드', href: '/guide/assault' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '상해죄와 폭행죄 차이점 및 처벌 수위', href: '/guide/assault/injury-vs-assault-penalty' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '사기 피해 신고 기한과 금액별 대응법', href: '/guide/fraud/fraud-report-deadline-amounts' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-medical-cost-timeline',
    keyword: '폭행 피해 치료비 청구 기한과 금액 기준',
    questionKeyword: '폭행 피해 치료비는 언제까지 청구할 수 있고 얼마나 받을 수 있나요?',
    ctaKeyword: '폭행 치료비 청구',
    type: '수치기한형',
    meta: {
      title: '폭행 치료비 청구 시효 3년 — 항목별 금액 기준 총정리 | 로앤가이드',
      description: '폭행 피해 치료비 청구 시효는 3년입니다. 치료비·일실수입·위자료 항목별 금액 산정 기준과 후유장해 발생 시 추가 청구 방법까지 정리했습니다. 바로 정리해보세요.',
    },
    intro: '한 달 전 폭행을 당해 갈비뼈에 금이 갔습니다. 치료비가 벌써 200만원 넘게 나왔는데, 가해자 측은 "합의하자"면서 50만원만 제시합니다. 치료비를 제대로 받으려면 언제까지, 어떤 항목으로, 얼마나 청구할 수 있는지 막막합니다. 지금부터 기한과 금액 기준을 정리해보겠습니다.',
    timelineSteps: ['청구 항목 정리', '시효 확인', '금액 산정', '청구·합의'],
    sections: [
      {
        title: '치료비 청구 시효부터 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">불법행위 손해배상 시효는 "안 날로부터 3년, 발생일로부터 10년"입니다</strong></p>\n<p><strong>민법 제766조</strong>에 따라 폭행 피해 손해배상 청구권은 <strong>피해 사실을 안 날로부터 3년</strong>, 폭행이 발생한 날로부터 <strong>10년</strong> 이내에 행사해야 합니다. 두 기한 중 먼저 도래하는 쪽이 적용됩니다.</p>\n<p>후유장해가 나중에 발견된 경우에는 <strong>그 장해를 안 날부터</strong> 새로 3년이 기산됩니다. 치료가 길어지더라도 시효 내에 청구하면 추가 치료비도 받을 수 있으니 기한을 꼭 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시효: 안 날로부터 3년 / 발생일로부터 10년 (민법 제766조) | 후유장해는 발견 시점부터 기산</blockquote>',
      },
      {
        title: '청구할 수 있는 항목과 금액 기준을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">치료비, 일실수입, 위자료 3가지를 항목별로 산정하세요</strong></p>\n<p><strong>치료비</strong>는 진료비, 약제비, 입원비, 통원교통비, 간병비까지 포함됩니다. 실비로 청구하되 <strong>영수증 원본</strong>을 반드시 보관하세요. <strong>일실수입</strong>은 치료 기간 동안 일하지 못해 발생한 수입 손실이며, 재직증명서와 급여명세서로 산정합니다.</p>\n<p><strong>위자료</strong>는 정신적 고통에 대한 배상으로, 법원은 상해 정도, 가해 동기, 피해자 나이 등을 종합 고려합니다. 폭행 피해 위자료는 통상 <strong>100만~500만원</strong> 수준이며, 중상해의 경우 <strong>1,000만원 이상</strong>도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">항목: ①치료비(실비) ②일실수입(급여손실) ③위자료(100만~500만원+) | 영수증·급여명세서 필수</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">폭행 피해 치료비 청구 금액이 궁금하시다면, 지금 상황에 맞는 예상 금액을 <a href="/diagnosis/assault" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '진단서 기간별 합의금 시세를 참고하세요',
        content:
          '<p><strong style="color:#1e3a5f">진단서 치료 기간에 따라 합의금 수준이 달라집니다</strong></p>\n<p>실무에서 폭행 합의금은 <strong>진단서 치료 기간</strong>을 기준으로 형성됩니다. 전치 <strong>2주</strong> 진단의 경우 합의금은 <strong>100만~300만원</strong>, 전치 <strong>4주</strong>는 <strong>300만~700만원</strong>, 전치 <strong>6주 이상</strong>은 <strong>500만~1,500만원</strong> 수준이 일반적입니다. 물론 구체적 상황에 따라 달라집니다.</p>\n<p>합의금에는 <strong>치료비 실비 + 위자료 + 일실수입</strong>이 모두 포함되어야 합니다. 가해자가 낮은 금액을 제시하면 항목별 산출 근거를 요청하고, 적정 금액을 협상하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시세 참고: 2주 → 100만~300만원 | 4주 → 300만~700만원 | 6주+ → 500만~1,500만원</blockquote>',
      },
      {
        title: '후유장해가 남으면 추가 청구가 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">치료 종결 후에도 후유장해에 대해 별도로 청구할 수 있습니다</strong></p>\n<p>치료가 끝난 후에도 <strong>후유장해</strong>(관절 운동 제한, 흉터, 신경 손상 등)가 남으면 이에 대한 <strong>추가 손해배상</strong>을 청구할 수 있습니다. 후유장해 진단서를 발급받아 장해 등급을 확인하세요.</p>\n<p>합의서를 작성할 때 반드시 <strong>"향후 발생하는 후유장해에 대한 추가 청구권은 포기하지 않는다"</strong>는 문구를 넣으세요. 이 문구가 없으면 추가 치료비 청구가 어려워질 수 있습니다. 민사 소송을 통해 청구하면 법원이 <strong>향후 치료비</strong>까지 인정하는 경우도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중요: 합의서에 "추가 청구권 유보" 문구 필수 | 후유장해 진단서 발급</blockquote>',
      },
    ],
    cases: [
      {
        title: '갈비뼈 골절 피해자가 치료비·위자료·일실수입을 전액 인정받은 사례',
        summary:
          '관련 사례에서도 폭행으로 갈비뼈 골절(전치 6주) 피해를 입은 원고가 치료비 320만원, 일실수입 180만원, 위자료 500만원 합계 1,000만원을 청구하여 법원이 전액 인용한 경우가 있습니다. 진료비 영수증과 급여명세서가 핵심 증거로 활용되었습니다.',
        takeaway:
          '비슷한 상황이라면 치료비 영수증과 급여명세서를 빠짐없이 보관하고, 항목별로 금액을 산정해서 청구하세요.',
      },
      {
        title: '합의 후 후유장해가 발견되어 추가 배상을 받은 사례',
        summary:
          '관련 사례에서도 폭행 합의 후 6개월 뒤 디스크 후유증이 발견되어 추가 손해배상 소송을 제기한 경우, 합의서에 "추가 청구권 유보" 문구가 있어 후유장해에 대한 추가 배상이 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 합의서 작성 시 반드시 "향후 후유장해에 대한 추가 청구권을 유보한다"는 문구를 포함시키세요.',
      },
    ],
    faq: [
      {
        question: '폭행 치료비 청구 시효가 정말 3년인가요?',
        answer: '민법 제766조에 따라 <strong>피해 사실을 안 날로부터 3년</strong>입니다. 다만 발생일로부터 10년이 지나면 청구할 수 없습니다.',
      },
      {
        question: '가해자가 돈이 없으면 치료비를 받을 수 없나요?',
        answer: '판결을 받으면 <strong>재산 압류, 급여 압류</strong> 등 강제집행이 가능합니다. 범죄피해자 구조금 제도도 활용할 수 있습니다.',
      },
      {
        question: '합의금과 치료비는 다른 건가요?',
        answer: '합의금은 <strong>치료비 + 위자료 + 일실수입</strong>을 모두 포함하는 금액입니다. 치료비만 받는 합의는 피해자에게 불리합니다.',
      },
      {
        question: '진단서가 2주인데 실제 치료 기간이 더 길면 어떻게 하나요?',
        answer: '추가 진단서를 발급받으세요. <strong>실제 치료 기간</strong>이 길어지면 합의금과 손해배상 금액도 올라갑니다.',
      },
      {
        question: '위자료는 어떤 기준으로 정해지나요?',
        answer: '법원이 <strong>상해 정도, 가해 동기, 피해자 과실, 당사자 관계</strong> 등을 종합 고려하여 결정합니다.',
      },
      {
        question: '통원교통비도 청구할 수 있나요?',
        answer: '병원까지의 <strong>택시비, 대중교통비, 주차비</strong> 등 통원에 필요한 교통비도 치료비의 일부로 청구 가능합니다.',
      },
      {
        question: '가해자가 합의를 거부하면 어떻게 하나요?',
        answer: '<strong>민사 손해배상 소송</strong>을 제기하세요. 법원이 적정 배상액을 판결하며, 강제집행도 가능합니다.',
      },
      {
        question: '형사 합의와 민사 소송을 동시에 진행할 수 있나요?',
        answer: '가능합니다. <strong>형사와 민사는 별개 절차</strong>이므로 형사 합의 없이도 민사 소송으로 치료비를 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 폭행 치료비 청구 준비사항 확인하기',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '폭행 가이드', href: '/guide/assault' },
      { label: '폭행 합의금 산정과 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '상해 합의금 계산 기준', href: '/guide/assault/injury-settlement-calculation' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '인터넷 쇼핑 사기 환불 절차', href: '/guide/fraud/online-shopping-fraud-refund' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-false-accusation-counter',
    keyword: '폭행 무고 당했을 때 대응 체크리스트',
    questionKeyword: '폭행한 적 없는데 폭행으로 고소당했어요. 어떻게 대응하나요?',
    ctaKeyword: '폭행 무고 대응',
    type: '체크리스트형',
    meta: {
      title: '폭행 무고 대응 체크리스트 — 반대고소까지 3단계 | 로앤가이드',
      description: '폭행한 적 없는데 고소당했다면 CCTV·목격자 확보, 진단서 신빙성 검토, 무고죄 반대고소 3단계로 대응하세요. 형법 제156조 무고죄 처벌 기준과 진술 전략까지 지금 확인하세요.',
    },
    intro: '직장 동료와 말다툼을 했을 뿐인데, 다음 날 "폭행당했다"며 진단서를 끊고 고소했습니다. 손도 대지 않았는데 피의자가 되었습니다. 사실과 다르게 신고되었다면, 감정적으로 대응하기보다 체계적으로 증거를 확보하고 반박해야 합니다. 지금부터 대응 체크리스트를 정리해보겠습니다.',
    timelineSteps: ['증거 확보', '진술 준비', '혐의 반박', '무고죄 반대고소'],
    sections: [
      {
        title: 'CCTV와 목격자 증거를 즉시 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">현장 CCTV와 목격자는 무고를 증명하는 가장 강력한 증거입니다</strong></p>\n<p>사실과 다르게 신고되었다면 가장 먼저 <strong>현장 CCTV</strong>를 확인하세요. 직장 내 CCTV, 건물 복도 CCTV, 인근 상가 CCTV 등을 체크합니다. CCTV는 보통 <strong>30일</strong> 내에 덮어씌워지므로 즉시 보존 요청해야 합니다. 경찰서에 방문하여 CCTV 보존 요청서를 제출하세요.</p>\n<p>당시 현장에 있던 <strong>목격자의 연락처</strong>를 확보하고, 가능하면 목격 진술서를 받아두세요. 당시 주고받은 <strong>문자, 카톡</strong>에 폭행 정황이 없다는 점도 간접 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: ☑ CCTV 보존 요청 ☑ 목격자 연락처·진술서 ☑ 당시 대화 기록 확보</blockquote>',
      },
      {
        title: '상대방 진단서의 신빙성을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">진단서 발급 시점과 부상 부위의 정합성을 따져보세요</strong></p>\n<p>고소인이 제출한 <strong>진단서의 발급 시점</strong>이 중요합니다. 사건 당일이 아니라 <strong>며칠 후</strong>에 발급받았다면, 다른 원인에 의한 부상일 가능성을 제기할 수 있습니다. 진단서의 부상 부위가 주장하는 폭행 방식과 일치하는지도 확인하세요.</p>\n<p>예를 들어 "주먹으로 맞았다"고 주장하는데 진단서에 <strong>찰과상</strong>(긁힌 상처)만 기재되어 있다면 주장과 맞지 않습니다. 필요하면 <strong>법의학 전문가 의견서</strong>를 받아 진단서의 모순점을 지적할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: ☑ 진단서 발급 시점 확인 ☑ 부상 부위와 주장 일치 여부 ☑ 법의학 의견서 검토</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">폭행 무고를 당하셨다면, 지금 상황에 맞는 대응 방법을 <a href="/diagnosis/assault" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '경찰 조사에서 일관되고 구체적으로 진술하세요',
        content:
          '<p><strong style="color:#1e3a5f">"폭행한 사실이 없다"는 점을 구체적 정황과 함께 진술하세요</strong></p>\n<p>경찰 조사에서 단순히 "안 때렸다"고만 하면 설득력이 떨어집니다. <strong>당시 상황을 구체적으로</strong> 진술하세요. "몇 시에, 어디서, 어떤 대화를 했고, 물리적 접촉은 전혀 없었다"는 식으로 시간대별로 정리합니다.</p>\n<p>수사관이 <strong>"혹시 살짝이라도 닿았을 수 있지 않냐"</strong>는 유도 질문을 할 수 있습니다. 접촉이 없었다면 <strong>"전혀 접촉한 사실이 없다"</strong>고 단호하게 답변하세요. 진술 전에 변호사와 상담하여 진술서를 미리 준비하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: ☑ 시간대별 상황 정리 ☑ 유도 질문 대비 ☑ 변호인 동석 요청</blockquote>',
      },
      {
        title: '무고죄 반대고소를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위 고소임이 명백하다면 무고죄(형법 제156조)로 반대고소할 수 있습니다</strong></p>\n<p><strong>무고죄</strong>는 타인에게 형사처벌을 받게 할 목적으로 허위 사실을 신고하는 범죄입니다. <strong>10년 이하 징역 또는 1,500만원 이하 벌금</strong>에 해당합니다. CCTV에 폭행 장면이 없거나, 목격자가 "폭행은 없었다"고 진술한다면 무고죄 성립 가능성이 높아집니다.</p>\n<p>반대고소 시에는 ①고소인의 진술이 거짓이라는 증거, ②고소인이 허위임을 <strong>인식하고 있었다는 정황</strong>(예: 지인에게 "고소로 압박하겠다"고 말한 메시지)이 있으면 더욱 유리합니다. 무고죄와 함께 <strong>명예훼손</strong>이나 <strong>민사 손해배상</strong>도 병행할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: ☑ 허위 증거 확보 ☑ 고소인의 허위 인식 정황 ☑ 무고죄 반대고소장 작성</blockquote>',
      },
    ],
    cases: [
      {
        title: 'CCTV에 폭행 장면이 없어 무혐의 처분을 받은 사례',
        summary:
          '관련 사례에서도 고소인이 "폭행당했다"고 주장했으나, 현장 CCTV를 확인한 결과 말다툼만 있었을 뿐 물리적 접촉이 전혀 없어 피고소인에 대해 무혐의 처분이 내려진 경우가 있습니다. CCTV 보존 요청이 신속하게 이루어진 것이 결정적이었습니다.',
        takeaway:
          '비슷한 상황이라면 사건 발생 후 즉시 CCTV 보존 요청을 하고, 영상 확보 여부를 확인하세요.',
      },
      {
        title: '허위 폭행 고소로 무고죄 유죄가 선고된 사례',
        summary:
          '관련 사례에서도 고소인이 직장 내 갈등으로 상대방을 압박하기 위해 허위 폭행 고소를 했으나, 목격자 3인의 진술과 고소인이 지인에게 보낸 "고소로 겁을 주겠다"는 메시지가 발견되어 무고죄로 유죄 판결을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 고소인이 허위 고소 의도를 드러낸 메시지나 녹음이 있는지 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '손도 안 댔는데 폭행죄가 성립할 수 있나요?',
        answer: '폭행죄는 <strong>신체에 대한 유형력 행사</strong>로 성립하므로, 물건을 던지거나 침을 뱉는 행위도 포함됩니다. 하지만 접촉이 전혀 없었다면 성립하지 않습니다.',
      },
      {
        question: 'CCTV가 없는 곳에서 일어났으면 어떻게 하나요?',
        answer: '<strong>목격자 진술, 당시 주고받은 메시지, 알리바이</strong>로 대응해야 합니다. 주변에 다른 카메라(블랙박스, 건물 출입 기록)가 없는지도 확인하세요.',
      },
      {
        question: '상대방이 진단서를 끊었는데 어떻게 반박하나요?',
        answer: '<strong>진단서 발급 시점, 부상 부위와 주장의 불일치</strong>를 지적하세요. 필요하면 법의학 전문가 의견서를 받을 수 있습니다.',
      },
      {
        question: '무고죄 반대고소는 언제 하는 게 좋나요?',
        answer: '본인 사건이 <strong>무혐의 또는 불기소 처분</strong>을 받은 후 하는 것이 가장 효과적이지만, 수사 중에도 가능합니다.',
      },
      {
        question: '무고죄가 성립하려면 어떤 조건이 필요한가요?',
        answer: '고소인이 <strong>허위라는 사실을 알면서</strong> 형사처벌 목적으로 신고해야 합니다. 진심으로 폭행당했다고 믿었다면 성립이 어렵습니다.',
      },
      {
        question: '경찰 조사에서 변호사를 동석시킬 수 있나요?',
        answer: '피의자는 <strong>변호인 동석권</strong>이 보장됩니다. 조사 전에 반드시 변호사 동석을 요청하세요.',
      },
      {
        question: '폭행 무고로 민사 손해배상도 청구할 수 있나요?',
        answer: '허위 고소로 인한 <strong>정신적 고통, 변호사 비용, 명예 훼손</strong>에 대해 민사 손해배상을 청구할 수 있습니다.',
      },
      {
        question: '말다툼 중 큰 소리를 쳤는데 이것도 폭행인가요?',
        answer: '단순히 소리를 지른 것만으로는 폭행에 해당하지 않습니다. 다만 <strong>귀 바로 옆에서 고함</strong>을 지르는 등 유형력이 인정되면 폭행이 될 수 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 폭행 무고 대응 준비사항 확인하기',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '폭행 가이드', href: '/guide/assault' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '정당방위 증거 요건', href: '/guide/assault/self-defense-evidence-requirements' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '사기 무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-accusation-defense',
    keyword: '폭행 혐의를 받았을 때 대응법',
    questionKeyword: '폭행 혐의를 받았는데 어떻게 대응해야 하나요?',
    ctaKeyword: '폭행 혐의 대응',
    type: '어디부터형',
    perspective: 'accused',
    meta: {
      title: '폭행 혐의 받았을 때 즉시 대응법 4가지 | 로앤가이드',
      description: '폭행 혐의를 받고 있다면 성립 요건 검토, 정당방위 주장, 합의 전략, 양형 자료 준비 4가지가 핵심입니다. 경찰 조사 전 반드시 확인해야 할 사항을 정리했습니다. 바로 정리해보세요.',
    },
    intro: '시비가 붙어 상대방을 밀쳤는데, 며칠 뒤 경찰에서 연락이 왔습니다. 폭행 혐의로 고소당했다는 겁니다. 상대방이 먼저 시비를 걸었는데 내가 가해자라니 억울합니다. 그런데 밀친 것은 사실이니 어떻게 해야 할지 모르겠습니다. 경찰 조사는 어떻게 준비해야 하는지, 합의를 해야 하는지, 전과 기록이 남는 건지 하나씩 정리해드립니다.',
    timelineSteps: ['혐의 내용 확인', '증거·목격자 확보', '경찰 조사 대응', '합의 또는 재판 준비'],
    sections: [
      {
        title: '폭행죄의 성립 요건을 정확히 알아야 방어할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">상대방의 신체에 유형력을 행사하면 폭행죄가 성립합니다</strong></p>\n<p><strong>형법 제260조</strong>는 "사람의 신체에 대하여 폭행을 가한 자"를 2년 이하 징역, 500만원 이하 벌금, 구류 또는 과료에 처하도록 규정하고 있습니다. 여기서 <strong>폭행</strong>이란 신체에 대한 유형력의 행사를 의미하며, 때리는 것뿐 아니라 밀치기, 멱살 잡기, 물건 던지기 등도 포함됩니다.</p>\n<p>중요한 점은 폭행죄는 <strong>반의사불벌죄</strong>라는 것입니다. 피해자가 처벌을 원하지 않으면 공소를 제기할 수 없습니다(형법 제260조 제3항). 따라서 합의를 통해 고소 취하를 받으면 사건이 종결됩니다. 다만 <strong>상해</strong>가 발생한 경우에는 상해죄(형법 제257조)로 진행되며, 이는 반의사불벌죄가 아닙니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">폭행죄: 반의사불벌죄(합의 시 공소 불가) | 상해죄: 반의사불벌죄 아님 | 밀치기도 폭행</blockquote>',
      },
      {
        title: '정당방위가 인정될 수 있는지 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방의 부당한 공격에 대한 방어 행위는 정당방위로 인정될 수 있습니다</strong></p>\n<p><strong>형법 제21조</strong>는 "자기 또는 타인의 법익에 대한 현재의 부당한 침해를 방위하기 위한 행위"를 정당방위로 규정하여 처벌하지 않습니다. 상대방이 먼저 때리거나 위협한 경우, 이를 막기 위한 행위가 정당방위에 해당할 수 있습니다.</p>\n<p>다만 정당방위가 인정되려면 <strong>방위 행위의 상당성</strong>이 있어야 합니다. 상대방이 한 대 때렸다고 수차례 구타한 경우에는 <strong>과잉방위</strong>로 판단되어 정당방위가 인정되지 않습니다. 정당방위를 주장하려면 ① 상대방이 먼저 공격했다는 증거(CCTV, 목격자 진술), ② 나의 행위가 방어 목적이었다는 정황, ③ 행위의 정도가 과하지 않았다는 점을 증명해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정당방위 3요건: 현재의 부당한 침해 + 방위 목적 + 행위의 상당성 | CCTV·목격자 확보 필수</blockquote>',
      },
      {
        title: '경찰 조사 전에 반드시 준비할 것들',
        content:
          '<p><strong style="color:#1e3a5f">조사 전 진술 방향을 정리하고, 유리한 증거를 확보하세요</strong></p>\n<p><strong>형사소송법 제200조</strong>에 따라 경찰은 피의자를 출석시켜 조사할 수 있습니다. 출석 전에 다음을 준비하세요. ① 사건 당시 상황을 <strong>시간순으로 정리</strong>(누가 먼저 시비를 걸었는지, 어떤 행위를 했는지). ② 현장 <strong>CCTV 확보</strong> 요청(경찰에 요청하거나, 현장 근처 상가에 직접 요청). ③ <strong>목격자</strong> 연락처 확보 및 진술 확보.</p>\n<p>조사 시에는 사실에 기반한 진술을 하되, <strong>불필요하게 불리한 진술</strong>은 하지 마세요. "제가 때린 것은 맞지만"이라는 식으로 시작하면 이후 정당방위 주장이 어려워질 수 있습니다. 상대방이 먼저 공격했다면 그 사실을 명확히 진술하세요. 진술거부권을 행사할 수도 있으며, <strong>변호인의 조력을 받을 권리</strong>가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 경위 시간순 정리 + CCTV 확보 + 목격자 확보 | 조사: 사실 기반 진술 + 불리한 표현 주의</blockquote>',
      },
      {
        title: '합의를 할지, 재판으로 갈지 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">폭행죄는 합의하면 끝나지만, 상해죄는 합의해도 검찰 판단이 필요합니다</strong></p>\n<p>폭행 사실이 인정되고 정당방위가 어려운 상황이라면, <strong>빠른 합의</strong>가 최선의 전략입니다. 폭행죄는 반의사불벌죄이므로 피해자가 합의서에 "처벌을 원하지 않는다"고 기재하면 검찰이 공소를 제기할 수 없습니다. 합의금은 피해 정도, 치료비, 정신적 고통 등을 고려하여 결정합니다.</p>\n<p>반대로, 상대방의 주장이 허위이거나 과장된 경우에는 <strong>적극적으로 다투는 것</strong>이 낫습니다. CCTV, 목격자 진술 등으로 상대방의 주장을 반박하고, 경우에 따라 <strong>무고죄(형법 제156조)</strong>나 <strong>공갈죄(형법 제350조)</strong>로 반대고소도 검토할 수 있습니다. 합의를 할 때는 반드시 <strong>합의서에 "향후 민·형사상 일체의 이의를 제기하지 않는다"</strong>는 조항을 포함시키세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">폭행죄: 합의 → 공소 불가 | 상해죄: 합의해도 기소 가능 | 허위 주장 시 반대고소 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '상대방이 먼저 공격하여 정당방위가 인정된 사례',
        summary:
          '관련 사례에서도 술집에서 상대방이 먼저 주먹으로 얼굴을 가격하여 피고인이 이를 막으며 상대방을 밀쳐 넘어뜨린 경우, CCTV 영상을 통해 상대방의 선제 공격이 확인되어 정당방위가 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 현장 CCTV 영상을 최대한 빨리 확보하세요. CCTV는 보존 기간이 짧아 시간이 지나면 삭제될 수 있습니다.',
      },
      {
        title: '합의 후 고소 취하로 사건이 종결된 사례',
        summary:
          '관련 사례에서도 폭행 가해자가 피해자의 치료비 전액과 합의금을 지급하고, 피해자가 "처벌을 원하지 않는다"는 합의서를 경찰에 제출하여 검찰에서 공소권 없음 처분을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 피해자와 조속히 합의하고, 합의서에 "처벌 불원" 문구와 함께 향후 민·형사 이의 포기 조항을 반드시 포함시키세요.',
      },
    ],
    faq: [
      {
        question: '밀치기만 했는데도 폭행죄가 되나요?',
        answer: '밀치기도 <strong>신체에 대한 유형력 행사</strong>에 해당하여 폭행죄가 성립합니다. 접촉 없이 물건을 던진 경우도 폭행에 해당할 수 있습니다.',
      },
      {
        question: '서로 때린 경우(쌍방폭행) 어떻게 되나요?',
        answer: '쌍방폭행이라도 <strong>각자 폭행죄</strong>가 성립합니다. 다만 쌍방 합의하면 양쪽 모두 공소가 기각됩니다. 쌍방과실이 인정되면 양형에 참작됩니다.',
      },
      {
        question: '폭행으로 전과 기록이 남나요?',
        answer: '벌금형 이상이 확정되면 <strong>전과 기록</strong>이 남습니다. 합의로 공소 기각되면 전과가 남지 않습니다. 기소유예도 전과에는 해당하지 않습니다.',
      },
      {
        question: '상대방이 합의금을 터무니없이 높게 부르면 어떻게 하나요?',
        answer: '합의금에 법적 기준은 없지만, <strong>실제 치료비와 피해 정도</strong>를 기준으로 협상하세요. 합의가 안 되면 재판에서 양형 자료를 제출하는 방법도 있습니다.',
      },
      {
        question: '경찰 조사에서 진술을 거부해도 되나요?',
        answer: '<strong>진술거부권</strong>은 헌법상 보장된 권리입니다. 다만 일체 진술을 거부하면 유리한 사정도 전달되지 않으므로, 변호사와 상의 후 전략적으로 진술하는 것이 좋습니다.',
      },
      {
        question: '폭행 피해자가 진단서를 제출하면 상해죄로 바뀌나요?',
        answer: '진단서가 있다고 자동으로 상해죄가 되지는 않지만, <strong>2주 이상 치료가 필요한 상해</strong>가 인정되면 상해죄(형법 제257조)로 처리될 수 있습니다.',
      },
      {
        question: '폭행 혐의를 받았는데 반대로 고소할 수 있나요?',
        answer: '상대방도 폭행을 했다면 <strong>맞고소</strong>가 가능합니다. 상대방의 주장이 허위라면 <strong>무고죄</strong>로 반대고소도 검토할 수 있습니다.',
      },
      {
        question: '국선변호인은 폭행 사건에서도 선임되나요?',
        answer: '구속된 경우 국선변호인이 선임됩니다. 불구속 상태에서는 <strong>법률구조공단(132)</strong>이나 지방변호사회 무료 상담을 이용하세요.',
      },
    ],
    cta: {
      text: '1분 안에 폭행 혐의 대응 준비사항 확인하기',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '정당방위 성립 기준', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
    ],
  },
];
