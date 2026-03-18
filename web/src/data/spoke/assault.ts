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
  {
    domain: 'assault',
    slug: 'assault-settlement-amount-process',
    keyword: '폭행 합의금 적정 금액과 합의 절차',
    ctaKeyword: '폭행 합의 준비',
    type: '수치기한형',
    meta: {
      title: '폭행 합의금 적정 금액과 합의 절차 | 로앤가이드',
      description: '폭행죄 합의금 범위, 반의사불벌죄 특성, 합의서 작성 요령과 합의 시기를 정리했습니다.',
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
      title: '상해죄와 폭행죄 차이점 및 처벌 수위 | 로앤가이드',
      description: '상해죄와 폭행죄의 구성요건, 처벌 수위, 반의사불벌 여부, 피해자 대응법을 비교 정리했습니다.',
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
      title: '정당방위 인정받으려면 어떤 증거가 필요한지 | 로앤가이드',
      description: '정당방위 요건, 필요한 증거, 과잉방위 주의사항, 경찰 조사 대응법을 정리했습니다.',
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
      title: '쌍방폭행 시 처벌 기준과 정당방위 구분 | 로앤가이드',
      description: '쌍방폭행 처벌 기준, 정당방위 인정 요건, 비교표, 증거 확보 방법을 정리했습니다.',
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
      title: '상해죄 합의금 산정 기준과 합의 절차 | 로앤가이드',
      description: '상해죄 합의금 산정 기준(치료비, 위자료, 일실수입), 합의 절차, 합의서 작성법을 정리했습니다.',
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
];
