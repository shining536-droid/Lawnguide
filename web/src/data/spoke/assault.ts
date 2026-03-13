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
      title: '폭행 피해 증거 모으는 법 | 로앤가이드',
      description: '폭행 피해를 입었을 때 증거 수집 방법, 진단서 발급, 고소 절차를 정리했습니다.',
    },
    intro: '갑자기 폭행을 당했습니다. 얼굴에 멍이 들고, 병원에 가야 할 정도입니다. 그런데 가해자는 "네가 먼저 시비를 걸었다"고 합니다. 나중에 억울한 일을 당하지 않으려면 지금 바로 증거를 확보해야 합니다.',
    timelineSteps: ['현장 증거 확보', '병원 진단서', '고소장 작성', '수사 진행'],
    sections: [
      {
        title: '현장에서 즉시 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">CCTV, 목격자, 사진을 바로 확보하세요</strong></p>\n<p>폭행 현장 주변에 <strong>CCTV</strong>가 있는지 확인하세요. CCTV는 시간이 지나면 덮어씌워지므로 빨리 확인해야 합니다. 경찰에 요청하면 CCTV 보존 요청이 가능합니다.</p>\n<p><strong>목격자</strong>가 있으면 연락처를 받아두세요. 현장 사진(위치, 상황)도 촬영해두세요. 폭행 직후 상태를 <strong>동영상</strong>으로 기록하는 것도 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 확보: CCTV 보존 요청, 목격자 연락처, 현장·부상 사진/동영상</blockquote>',
      },
      {
        title: '병원에 가서 진단서를 발급받으세요',
        content:
          '<p><strong style="color:#1e3a5f">진단서는 폭행 피해를 증명하는 핵심 증거입니다</strong></p>\n<p>폭행 직후 <strong>병원</strong>에 가서 진료를 받고 <strong>진단서</strong>를 발급받으세요. 진단서에는 부상 부위, 정도, 치료 기간이 기재됩니다. 치료 기간에 따라 <strong>상해죄(2주 이상)</strong>와 <strong>폭행죄</strong>가 구별됩니다.</p>\n<p>진단서 원본은 보관하고, <strong>사본을 고소장에 첨부</strong>합니다. 부상 부위 사진도 날짜별로 촬영해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수: 진단서 발급(부상 부위·치료 기간), 부상 사진 날짜별 촬영</blockquote>',
      },
      {
        title: '경찰에 고소장을 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">폭행죄 또는 상해죄로 고소할 수 있습니다</strong></p>\n<p><strong>폭행죄</strong>(형법 제260조)는 2년 이하 징역/500만원 이하 벌금, <strong>상해죄</strong>(형법 제257조)는 7년 이하 징역/10년 이하 자격정지/1,000만원 이하 벌금입니다.</p>\n<p>고소장에는 ①고소인·피고소인 정보, ②폭행 일시·장소, ③폭행 경위, ④부상 정도, ⑤증거 목록을 기재합니다. 관할 <strong>경찰서</strong>에 진단서와 증거를 함께 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 폭행죄 → 2년/500만원 | 상해죄 → 7년/1,000만원</blockquote>',
      },
      {
        title: '민사 손해배상과 합의도 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 별도로 치료비, 위자료를 청구할 수 있습니다</strong></p>\n<p>형사 절차와 별도로 가해자에게 <strong>치료비, 일실수입(일하지 못한 기간 수입), 위자료</strong>를 청구할 수 있습니다.</p>\n<p>가해자가 합의를 원하는 경우, 합의금에 <strong>치료비 전액, 위자료, 향후 치료비</strong>를 포함시키세요. 합의서 작성 시 "향후 추가 치료비는 별도 청구 가능"이라는 문구를 넣어두면 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">청구: 치료비 + 일실수입 + 위자료 | 합의 시 향후 치료비 조항 포함</blockquote>',
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
        question: '폭행죄와 상해죄의 차이는?',
        answer: '<strong>상해</strong>가 발생하면 상해죄, 상해 없는 폭행은 폭행죄입니다. 진단서 치료 기간이 기준이 됩니다.',
      },
      {
        question: '폭행죄는 친고죄인가요?',
        answer: '폭행죄는 <strong>반의사불벌죄</strong>입니다. 피해자가 처벌을 원하지 않으면 처벌할 수 없습니다.',
      },
      {
        question: '맞고 때린 경우(쌍방 폭행)는 어떻게 되나요?',
        answer: '<strong>쌍방 모두</strong> 폭행죄가 성립할 수 있습니다. 먼저 폭행한 쪽의 책임이 더 큽니다.',
      },
      {
        question: '가해자와 합의하면 형사처벌이 안 되나요?',
        answer: '폭행죄(반의사불벌죄)는 합의 후 처벌불원 의사를 표시하면 <strong>공소가 기각</strong>됩니다. 상해죄는 합의해도 처벌될 수 있습니다.',
      },
      {
        question: '진단서 비용은 얼마인가요?',
        answer: '병원에 따라 다르지만 통상 <strong>1~3만원</strong> 수준입니다.',
      },
      {
        question: '폭행 고소 기한이 있나요?',
        answer: '폭행죄의 공소시효는 <strong>5년</strong>입니다.',
      },
      {
        question: '합의금은 보통 얼마인가요?',
        answer: '부상 정도에 따라 다르지만, 경미한 폭행은 <strong>50~200만원</strong>, 상해는 그 이상입니다.',
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
      { label: '정당방위 인정 기준과 준비 포인트', href: '/guide/assault/self-defense-criteria' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '사기 가이드', href: '/guide/fraud' },
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
      title: '정당방위 인정 기준과 준비 포인트 | 로앤가이드',
      description: '정당방위 인정 요건, 판례 기준, 주장을 위한 증거 준비 방법을 정리했습니다.',
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
];
