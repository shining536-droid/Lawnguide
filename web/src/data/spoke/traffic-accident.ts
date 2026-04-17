import { SpokePage } from '../spoke-pages';

export const trafficAccidentPages: SpokePage[] = [
  {
    domain: 'traffic-accident',
    slug: 'accident-settlement-checklist',
    keyword: '교통사고 합의 전 확인해야 할 체크리스트',
    questionKeyword: '교통사고 합의 전에 뭘 확인해야 하나요?',
    ctaKeyword: '교통사고 합의 체크리스트',
    type: '체크리스트형',
    meta: {
      title: '교통사고 합의 전 체크리스트·합의 후 후유증 추가 청구 | 로앤가이드',
      description: '교통사고 합의 후 후유증이 생기면 추가 청구할 수 있을까요? 합의 전 5가지 필수 확인사항과 후유증 추가 보상 방법을 지금 확인하세요.',
    },
    intro: '교통사고로 3개월째 치료 중인데, 보험회사에서 합의하자고 연락이 왔습니다. 금액이 적정한지 모르겠고, 나중에 후유증이 생기면 어떻게 하는지도 걱정됩니다. 합의서에 서명하기 전에 아래 항목을 반드시 확인하세요.',
    timelineSteps: ['치료 종결 확인', '합의금 항목 파악', '과실비율 확인', '합의서 검토'],
    sections: [
      {
        title: '치료가 충분히 끝났는지 먼저 확인하세요 — 성급한 합의는 위험합니다',
        content:
          '<p><strong style="color:#1e3a5f">치료가 종결되기 전에 합의하면 추가 치료비를 받기 어렵습니다</strong></p>\n<p>보험회사는 빠른 합의를 원하지만, <strong>치료가 완전히 끝나기 전에 합의하면 안 됩니다</strong>. 합의 후 추가 치료가 필요해지면 비용을 받기 매우 어렵습니다.</p>\n<p>의사에게 <strong>치료 종결 소견</strong>과 향후 치료 필요 여부를 확인하세요. 후유증이 예상되면 "향후 치료비"를 합의금에 포함해야 합니다. 충분한 치료 후에 합의를 진행하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 치료 종결 전 합의 금지 → 의사 소견 확인 → 향후 치료비 포함 여부 검토</blockquote>',
      },
      {
        title: '합의금 구성 항목을 하나씩 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의금은 치료비, 휴업손해, 위자료, 향후치료비로 구성됩니다</strong></p>\n<p><strong>치료비</strong>는 실제 지출된 병원비 전액입니다. <strong>휴업손해</strong>는 치료 기간 동안 일하지 못해 발생한 소득 손실입니다. <strong>위자료</strong>는 정신적 고통에 대한 배상입니다.</p>\n<p>후유장해가 남으면 <strong>장해위자료</strong>와 <strong>일실수입</strong>(노동능력상실에 따른 미래 소득 손실)도 청구할 수 있습니다. 보험회사가 제시한 금액이 이 항목들을 모두 포함하는지 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">항목: 치료비 + 휴업손해 + 위자료 + 향후치료비 + 장해배상(해당 시)</blockquote>',
      },
      {
        title: '후유장해 여부를 반드시 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">후유장해가 있으면 합의금이 크게 달라집니다</strong></p>\n<p>치료가 끝난 후에도 통증이나 운동 제한이 남으면 <strong>후유장해</strong>에 해당할 수 있습니다. 후유장해는 맥브라이드 장해평가표 등을 기준으로 노동능력상실률을 산정합니다.</p>\n<p>보험회사 자체 감정과 별도로 <strong>독립적인 의료 감정</strong>을 받아보는 것이 좋습니다. 후유장해가 인정되면 일실수입과 장해위자료가 추가되어 합의금이 수배 이상 달라질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 후유장해 → 노동능력상실률 산정 → 일실수입·장해위자료 추가</blockquote>',
      },
      {
        title: '과실비율을 확인하고 합의서를 꼼꼼히 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">과실비율에 따라 받을 수 있는 금액이 줄어듭니다</strong></p>\n<p><strong>과실비율</strong>은 사고의 책임을 가해자와 피해자가 나누는 비율입니다. 과실비율이 30%이면 전체 손해에서 30%를 차감한 금액만 받을 수 있습니다. 보험회사가 제시한 과실비율이 적정한지 확인하세요.</p>\n<p>합의서에는 "향후 일체의 이의를 제기하지 않는다"는 <strong>부제소 합의</strong> 조항이 들어갑니다. 서명하면 추가 청구가 어려우므로 모든 항목을 확인한 뒤 서명하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 과실비율 적정성 → 합의서 부제소 조항 → 모든 항목 확인 후 서명</blockquote>',
      },
    ],
    cases: [
      {
        title: '보험회사 제시 금액보다 3배 높은 합의를 받은 사례',
        summary:
          '관련 사례에서도 보험회사가 초기에 제시한 합의금이 적정 금액보다 현저히 낮았던 경우, 후유장해 감정과 휴업손해 재산정을 통해 당초 제시 금액의 3배 이상을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 보험회사의 첫 제안을 바로 수락하지 말고, 합의금 구성 항목을 하나씩 확인한 후 대응하세요.',
      },
      {
        title: '합의 후 후유증이 발생했지만 추가 청구가 어려웠던 사례',
        summary:
          '관련 사례에서도 치료 중 성급하게 합의한 뒤 나중에 후유장해가 확인되었으나, 부제소 합의 조항으로 인해 추가 배상을 받기 매우 어려웠던 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 치료가 완전히 종결되고 후유장해 여부를 확인한 후에 합의를 진행하세요.',
      },
    ],
    faq: [
      {
        question: '보험회사가 제시한 합의금이 적정한지 어떻게 아나요?',
        answer: '합의금 구성 항목(치료비, 휴업손해, 위자료)을 분리해서 <strong>각 항목이 적정한지</strong> 확인하세요.',
      },
      {
        question: '합의를 안 하면 어떻게 되나요?',
        answer: '합의가 안 되면 <strong>민사소송</strong>으로 손해배상을 청구할 수 있습니다. 소송 기간은 보통 6개월~1년입니다.',
      },
      {
        question: '과실비율은 누가 정하나요?',
        answer: '보험회사가 제시하지만, 이의가 있으면 <strong>손해배상소송</strong>에서 법원이 최종 결정합니다.',
      },
      {
        question: '위자료는 얼마 정도 받을 수 있나요?',
        answer: '부상 정도에 따라 다릅니다. 입원 기간, 장해 정도 등에 따라 <strong>수백만~수천만원</strong>까지 차이가 납니다.',
      },
      {
        question: '합의 후에도 추가 청구가 가능한 경우가 있나요?',
        answer: '합의 당시 예측할 수 없었던 <strong>후발 손해</strong>가 발생한 경우에 한해 제한적으로 가능합니다.',
      },
      {
        question: '교통사고 손해배상 청구의 소멸시효는?',
        answer: '손해 및 가해자를 안 날부터 <strong>3년</strong>, 사고일부터 10년입니다.',
      },
      {
        question: '대물 사고도 같은 절차인가요?',
        answer: '대물(차량 수리비 등)도 합의 대상이며, <strong>감가상각</strong>과 수리비 적정성을 확인해야 합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 대한변호사협회 교통사고 상담센터를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 교통사고 상황에 맞는 합의 방법을 확인해보세요',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
    ],
  },
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-fault-dispute-evidence',
    keyword: '교통사고 과실비율 다툼 방법과 증거 확보',
    questionKeyword: '교통사고 과실비율이 부당한데 어떻게 다툴 수 있나요?',
    ctaKeyword: '과실비율 다툼',
    type: '상황형',
    meta: {
      title: '교통사고 과실비율 부당할 때 3가지 다툼 방법 | 로앤가이드',
      description:
        '교통사고 과실비율이 억울하신가요? 블랙박스·CCTV 증거 확보, 손해사정사 활용, 분쟁조정위원회 신청 방법을 바로 정리해보세요.',
    },
    intro:
      '교통사고가 났는데 보험회사에서 과실비율을 70:30으로 통보했습니다. 사실과 다르게 신고되었다면, 블랙박스를 보면 상대방 과실이 더 크다는 걸 알 수 있는데 보험회사는 인정하지 않습니다. 과실비율이 부당하다고 느끼면 아래 방법으로 다툴 수 있습니다.',
    timelineSteps: ['증거 확보', '과실비율 이의 제기', '분쟁조정위원회', '소송'],
    sections: [
      {
        title: '블랙박스·CCTV 등 객관적 증거를 먼저 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">과실비율을 다투려면 객관적 증거가 핵심입니다</strong></p>\n<p>사실과 다르게 신고되었다면, 과실비율을 다투는 데 가장 강력한 증거는 <strong>블랙박스 영상</strong>입니다. 사고 차량의 블랙박스는 물론, 상대 차량의 블랙박스, 주변 <strong>CCTV 영상</strong>도 확보해야 합니다. CCTV는 보통 <strong>7~30일</strong> 후 덮어쓰기되므로 사고 직후 즉시 확보 요청을 하세요.</p>\n<p>추가로 ①<strong>사고 현장 사진</strong>(차량 파손 부위, 도로 상태, 신호등, 차선), ②<strong>교통사고 사실확인원</strong>(경찰서 발급), ③<strong>목격자 진술</strong>을 확보하면 유리합니다. 경찰에 신고한 경우 <strong>실황조사서</strong>에 사고 상황이 기록되므로 이 자료도 교부받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 블랙박스 + CCTV(7~30일 내 확보) + 현장 사진 + 사실확인원 + 목격자 진술</blockquote>',
      },
      {
        title: '과실비율에 이의를 제기하는 방법을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">보험회사 제시 과실비율은 확정이 아닙니다 — 이의를 제기할 수 있습니다</strong></p>\n<p>보험회사가 제시하는 과실비율은 <strong>과실비율 인정기준표</strong>(보험개발원 발행)를 참고하여 산정하지만, 이것은 최종 확정이 아닙니다. 사고 유형과 세부 상황(신호 위반, 속도 위반, 차선 변경 여부 등)에 따라 <strong>수정 요소</strong>가 적용됩니다.</p>\n<p>이의를 제기하려면 ①보험회사 <strong>담당자에게 서면으로 이의</strong>를 제출하고, ②<strong>손해사정사</strong>를 선임하여 독립적인 과실비율 분석을 받을 수 있습니다. 손해사정사는 사고 현장, 블랙박스 분석, 관련 판례 등을 종합하여 <strong>과실비율 감정 의견서</strong>를 작성해줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이의: 보험회사 서면 이의 + 손해사정사 선임(과실비율 감정 의견서)</blockquote>',
      },
      {
        title: '교통사고 분쟁조정위원회를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송 전에 분쟁조정위원회를 통해 해결할 수 있습니다</strong></p>\n<p>보험회사와 합의가 되지 않으면 <strong>손해보험협회 교통사고 분쟁조정위원회</strong>에 조정을 신청할 수 있습니다. 분쟁조정위원회는 보험 전문가, 변호사, 의사 등으로 구성되어 과실비율과 보상 금액을 <strong>중립적으로 심의</strong>합니다.</p>\n<p>조정 신청은 <strong>무료</strong>이며, 접수 후 통상 <strong>1~2개월</strong> 내에 조정 결과가 나옵니다. 양 당사자가 조정 결과에 동의하면 <strong>재판상 화해와 동일한 효력</strong>이 있습니다. 동의하지 않으면 민사소송으로 진행할 수 있습니다. <strong>금융감독원 분쟁조정위원회</strong>에도 조정 신청이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조정: 손해보험협회 분쟁조정위원회(무료, 1~2개월) | 금융감독원 분쟁조정도 가능</blockquote>',
      },
      {
        title: '최종 수단 — 민사소송으로 과실비율을 다투세요',
        content:
          '<p><strong style="color:#1e3a5f">법원이 최종적으로 과실비율을 결정합니다</strong></p>\n<p>분쟁조정으로 해결되지 않으면 <strong>민사소송</strong>을 통해 과실비율을 다툴 수 있습니다. 소송에서 법원은 블랙박스 영상, CCTV, 실황조사서, 감정 결과 등을 종합하여 <strong>최종 과실비율</strong>을 결정합니다.</p>\n<p>교통사고 손해배상 청구의 <strong>소멸시효</strong>는 손해 및 가해자를 안 날부터 <strong>3년</strong>, 사고일부터 <strong>10년</strong>입니다. 소송 기간은 통상 <strong>6개월~1년</strong>이 소요됩니다. 소송 전에 <strong>대한법률구조공단</strong>(전화 132)이나 <strong>대한변호사협회</strong> 교통사고 상담센터에서 무료 법률상담을 받아보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소송: 법원이 최종 과실비율 결정 | 소멸시효 3년/10년 | 기간 6개월~1년</blockquote>',
      },
    ],
    cases: [
      {
        title: '블랙박스 영상으로 과실비율이 뒤집힌 사례',
        summary:
          '관련 사례에서도 보험회사가 70:30(본인 과실 70%)으로 제시했으나, 블랙박스 영상을 분석한 결과 상대 차량의 신호 위반이 확인되어 법원이 과실비율을 20:80으로 변경한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 블랙박스 영상을 즉시 확보하고, 상대 차량 블랙박스와 주변 CCTV도 반드시 확인하세요.',
      },
      {
        title: '분쟁조정위원회에서 과실비율이 조정된 사례',
        summary:
          '관련 사례에서도 보험회사가 과실비율 50:50을 주장했으나, 교통사고 분쟁조정위원회에서 도로 구조와 사고 유형을 재분석하여 30:70으로 조정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 보험회사 제시 과실비율에 동의하지 못하면 분쟁조정위원회에 무료로 조정을 신청하세요.',
      },
    ],
    faq: [
      {
        question: '보험회사가 제시한 과실비율은 확정인가요?',
        answer:
          '아닙니다. 보험회사의 과실비율은 <strong>최종 확정이 아니며</strong> 이의를 제기할 수 있습니다.',
      },
      {
        question: '블랙박스가 없으면 과실비율을 다툴 수 없나요?',
        answer:
          '블랙박스 외에도 <strong>CCTV, 목격자 진술, 경찰 실황조사서</strong> 등으로 다툴 수 있습니다.',
      },
      {
        question: '손해사정사란 무엇인가요?',
        answer:
          '보험 사고의 손해액과 과실비율을 전문적으로 조사·산정하는 <strong>국가 공인 자격자</strong>입니다. 보험회사 소속이 아닌 독립 손해사정사를 선임할 수 있습니다.',
      },
      {
        question: '분쟁조정위원회 신청 비용은 얼마인가요?',
        answer:
          '<strong>무료</strong>입니다. 손해보험협회 교통사고 분쟁조정위원회에 신청하면 됩니다.',
      },
      {
        question: 'CCTV 영상은 어떻게 확보하나요?',
        answer:
          '사고 주변 건물이나 도로 CCTV 관리자에게 요청하거나, <strong>경찰에 영상 확보를 요청</strong>하세요. 보통 7~30일 후 덮어쓰기됩니다.',
      },
      {
        question: '과실비율에 따라 보상금이 얼마나 달라지나요?',
        answer:
          '과실비율만큼 보상금이 줄어듭니다. 예를 들어 총 손해 <strong>1,000만원</strong>에 본인 과실 30%이면 700만원만 받습니다.',
      },
      {
        question: '교통사고 손해배상 소멸시효는 얼마인가요?',
        answer:
          '손해 및 가해자를 안 날부터 <strong>3년</strong>, 사고일부터 10년입니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 대한변호사협회 교통사고 상담센터를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 교통사고 과실비율 다툼 방법을 확인해보세요',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '상속 가이드', href: '/guide/inheritance' },
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
    ],
  },
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-injury-compensation',
    keyword: '교통사고 부상 보상금 청구 체크리스트',
    questionKeyword: '교통사고로 다쳤는데 보상금은 어떤 항목으로 청구하나요?',
    ctaKeyword: '교통사고 보상금 청구',
    type: '체크리스트형',
    meta: {
      title: '교통사고 부상 보상금 6대 항목 청구 체크리스트 | 로앤가이드',
      description:
        '교통사고 보상금을 빠뜨리고 있지 않나요? 치료비, 휴업손해, 위자료, 향후치료비, 간병비, 교통비 6대 항목을 지금 확인하세요.',
    },
    intro:
      '빨간불에 직진하던 차에 측면 충돌당했습니다. 허리 디스크 진단을 받고 3개월째 통원 치료 중인데, 보험사에서 제시한 합의금이 터무니없이 적습니다. 교통사고 부상 보상금은 여러 항목으로 구성되어 있으며, 하나라도 빠뜨리면 수백만원에서 수천만원의 차이가 납니다.',
    timelineSteps: ['보상 항목 파악', '증거·서류 확보', '보험사 합의 검토', '소송·조정'],
    sections: [
      {
        title: '보상금 6대 항목을 빠짐없이 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">치료비·휴업손해·위자료·향후치료비·간병비·교통비 — 6가지를 모두 확인하세요</strong></p>\n<p>교통사고 부상 보상금은 다음 항목으로 구성됩니다. ①<strong>치료비</strong>: 실제 지출된 병원비 전액(입원비, 수술비, 약제비, 재활치료비 포함). ②<strong>휴업손해</strong>: 치료 기간 동안 일하지 못해 발생한 소득 손실. ③<strong>위자료</strong>: 정신적 고통에 대한 배상(부상 정도에 따라 수백만~수천만원).</p>\n<p>④<strong>향후치료비</strong>: 치료 종결 후에도 추가 치료가 필요한 경우의 예상 비용. ⑤<strong>간병비</strong>: 거동이 어려워 간병이 필요한 경우(가족 간병도 청구 가능). ⑥<strong>교통비</strong>: 통원 치료를 위한 교통비(택시비 영수증 보관). 보험사가 제시한 합의금이 이 6가지를 모두 포함하는지 반드시 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">6대 항목: 치료비 + 휴업손해 + 위자료 + 향후치료비 + 간병비 + 교통비</blockquote>',
      },
      {
        title: '후유장해 등급이 인정되면 보상금이 크게 달라집니다',
        content:
          '<p><strong style="color:#1e3a5f">후유장해가 남으면 일실수입과 장해위자료가 추가됩니다</strong></p>\n<p>치료가 끝난 후에도 통증, 운동 제한, 신경 증상 등이 남으면 <strong>후유장해</strong>에 해당합니다. <strong>자동차손해배상보장법 시행령</strong>은 후유장해를 1~14급으로 분류하며, 등급에 따라 보상 금액이 크게 달라집니다.</p>\n<p>후유장해가 인정되면 ①<strong>일실수입</strong>(노동능력상실률에 따른 미래 소득 손실)과 ②<strong>장해위자료</strong>가 추가됩니다. 예를 들어 30대 직장인이 노동능력상실률 15%를 인정받으면 일실수입만 수천만원에 달할 수 있습니다. 보험사 자체 감정과 별도로 <strong>독립적인 의료 감정</strong>을 받아보는 것이 좋습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">교통사고 보상금이 적절한지 확신이 없다면, 지금 상황에 맞는 보상 항목을 <a href="/diagnosis/traffic-accident" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">후유장해: 1~14급 분류 → 일실수입 + 장해위자료 추가 | 독립 의료 감정 권장</blockquote>',
      },
      {
        title: '보험사 합의 전에 반드시 확인해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">성급한 합의, 과소 평가된 휴업손해, 부제소 합의 조항을 주의하세요</strong></p>\n<p>첫째, <strong>치료가 완전히 끝나기 전에 합의하지 마세요</strong>. 합의 후 추가 치료가 필요해지면 비용을 받기 매우 어렵습니다. 의사에게 치료 종결 소견과 향후 치료 필요 여부를 반드시 확인하세요.</p>\n<p>둘째, 보험사가 <strong>휴업손해를 과소 평가</strong>하는 경우가 많습니다. 소득 증빙(급여명세서, 소득금액증명원, 세금신고서)을 꼼꼼히 제출하세요. 무직자나 가정주부도 <strong>일용노임 기준</strong>으로 휴업손해를 청구할 수 있습니다. 셋째, 합의서의 <strong>"향후 일체의 이의를 제기하지 않는다"는 부제소 합의 조항</strong>을 확인하세요. 서명하면 추가 청구가 거의 불가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: ①치료 종결 전 합의 금지 ②휴업손해 소득 증빙 철저 ③부제소 합의 조항 확인</blockquote>',
      },
      {
        title: '합의가 안 되면 소송이나 분쟁조정을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">보험사 합의금이 부당하면 민사소송이나 분쟁조정으로 적정 보상을 받을 수 있습니다</strong></p>\n<p>보험사와 합의가 되지 않으면 <strong>민사소송</strong>으로 손해배상을 청구할 수 있습니다. <strong>자동차손해배상보장법 제3조</strong>에 따라 운행자는 운행으로 인한 손해를 배상할 책임이 있습니다. 소송에서 법원은 실제 손해액을 산정하여 판결합니다.</p>\n<p>소송 전에 <strong>손해보험협회 교통사고 분쟁조정위원회</strong>에 무료로 조정을 신청할 수 있습니다. 1~2개월 내에 조정 결과가 나오며, 양 당사자가 동의하면 재판상 화해와 동일한 효력이 있습니다. <strong>금융감독원 분쟁조정</strong>도 가능합니다. 소멸시효는 손해 및 가해자를 안 날부터 <strong>3년</strong>, 사고일부터 <strong>10년</strong>이므로 기한 내에 청구하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구제: 분쟁조정위원회(무료, 1~2개월) | 민사소송(6개월~1년) | 소멸시효 3년/10년</blockquote>',
      },
    ],
    cases: [
      {
        title: '보험사 제시 합의금의 4배를 소송으로 받은 사례',
        summary:
          '관련 사례에서도 보험사가 800만원을 제시했으나, 후유장해 감정에서 노동능력상실률 12%가 인정되어 소송을 통해 일실수입, 장해위자료를 포함한 총 3,200만원을 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 보험사의 첫 제안을 바로 수락하지 말고, 후유장해 감정과 보상 항목을 꼼꼼히 확인하세요.',
      },
      {
        title: '가정주부도 휴업손해를 인정받은 사례',
        summary:
          '관련 사례에서도 전업주부인 피해자가 교통사고로 4개월간 가사노동을 하지 못한 데 대해, 법원이 일용노임 기준(일 약 15만원)으로 휴업손해를 인정하여 약 1,800만원을 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 무직자나 주부도 일용노임 기준으로 휴업손해를 청구할 수 있으므로 포기하지 마세요.',
      },
    ],
    faq: [
      {
        question: '보험사가 제시한 합의금이 적정한지 어떻게 알 수 있나요?',
        answer:
          '합의금을 <strong>항목별(치료비·휴업손해·위자료 등)</strong>로 분리하여 각각 적정한지 확인하세요.',
      },
      {
        question: '치료 중에 합의해도 되나요?',
        answer:
          '<strong>치료가 완전히 끝난 후</strong>에 합의하세요. 합의 후 추가 치료비 청구가 매우 어렵습니다.',
      },
      {
        question: '무직자도 휴업손해를 받을 수 있나요?',
        answer:
          '네, <strong>일용노임 기준</strong>으로 휴업손해를 산정합니다. 가정주부, 학생도 청구 가능합니다.',
      },
      {
        question: '향후치료비는 어떻게 산정하나요?',
        answer:
          '의사의 소견서와 진료비 견적서를 기준으로 <strong>향후 필요한 치료 비용</strong>을 산정합니다.',
      },
      {
        question: '후유장해 등급은 누가 판정하나요?',
        answer:
          '보험사 자체 감정 외에 <strong>독립 의료기관</strong>이나 법원 감정을 통해 판정받을 수 있습니다.',
      },
      {
        question: '간병비도 보상 받을 수 있나요?',
        answer:
          '네, 가족이 간병한 경우에도 <strong>유급 간병인 기준</strong>으로 간병비를 청구할 수 있습니다.',
      },
      {
        question: '교통사고 손해배상 소멸시효는 얼마인가요?',
        answer:
          '손해 및 가해자를 안 날부터 <strong>3년</strong>, 사고일부터 10년입니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 대한변호사협회 교통사고 상담센터를 활용해보세요.',
      },
    ],
    cta: {
      text: '1분 안에 교통사고 보상금 청구 준비사항 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 과실비율 다툼 방법', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
    ],
  },
  {
    domain: 'traffic-accident',
    slug: 'accident-settlement-process',
    keyword: '교통사고 발생 후 합의 절차와 방법',
    questionKeyword: '교통사고 후 합의는 어떤 절차로 진행하나요?',
    ctaKeyword: '교통사고 합의 절차 무료 진단받기',
    type: '절차타임라인형',
    meta: {
      title: '교통사고 합의 절차 5단계 총정리 | 로앤가이드',
      description:
        '교통사고 후 합의를 어떻게 진행해야 할지 모르시겠나요? 현장 조치, 보험사 접수, 치료, 합의금 협상, 합의서 작성까지 바로 정리해보세요.',
    },
    intro:
      '횡단보도를 건너다 우회전 차량에 부딪혔습니다. 다행히 큰 부상은 아니었지만, 무릎과 허리에 통증이 계속됩니다. 병원에 다니는 동안 보험회사에서 합의 연락이 왔는데, 지금 합의해야 하는 건지, 얼마를 받아야 적정한 건지 판단이 어렵습니다. 치료가 끝나기 전에 성급하게 합의하면 나중에 후유증이 생겨도 추가 보상을 받기 어려울 수 있습니다. 교통사고 직후부터 합의까지, 각 단계에서 무엇을 해야 하는지 순서대로 정리합니다.',
    timelineSteps: ['사고 현장 조치·증거 확보', '보험 접수·병원 치료', '치료 종결·손해액 산정', '합의 협상·합의서 작성'],
    sections: [
      {
        title: '1단계: 사고 현장 조치와 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 경찰 신고(112)와 현장 증거 확보가 합의의 출발점입니다.</strong></p>\n<p>교통사고가 발생하면 도로교통법 제54조에 따라 운전자는 즉시 정차하고 부상자를 구호해야 합니다. 피해자는 반드시 경찰에 신고(112)하여 교통사고 사실확인원을 발급받아야 합니다. 이 서류가 없으면 이후 보험 처리와 합의 과정에서 사고 사실 자체를 입증하기 어려울 수 있습니다.</p>\n<p>현장에서는 블랙박스 영상, 사고 차량과 부상 부위 사진, 목격자 연락처를 확보하세요. 상대 차량의 보험사와 차량번호도 반드시 메모해두어야 합니다. 경미한 접촉사고라도 나중에 통증이 나타날 수 있으므로 현장에서 "괜찮다"고 말하지 않는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">현장 조치: 112 신고 → 사실확인원 발급 / 블랙박스·사진·목격자 확보 / 현장에서 합의하지 말 것</blockquote>',
      },
      {
        title: '2단계: 보험 접수와 충분한 치료',
        content:
          '<p><strong style="color:#1e3a5f">상대방 보험사에 피해 접수를 하고, 치료가 완전히 종결될 때까지 충분히 치료받으세요.</strong></p>\n<p>사고 후 가능한 빨리 상대방 보험사에 피해 접수를 합니다. 접수가 되면 치료비를 보험사가 직접 병원에 지급(대물·대인 처리)하게 됩니다. 자차보험이 있다면 자기 보험사에도 접수하여 차량 수리비를 처리합니다.</p>\n<p>치료는 정형외과·신경외과 등 전문의에게 받되, 치료 기록이 합의금 산정의 핵심 근거이므로 통증이 있는 한 꾸준히 통원하세요. 대법원 2018다256789 판결에서도 치료의 필요성과 상당성이 인정되는 범위의 치료비를 손해로 인정하고 있습니다. 보험사가 조기 퇴원이나 치료 종결을 압박하더라도 의사 소견에 따라 판단하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보험 접수 후 대인 처리 / 치료 종결 전 합의 금지 / 의사 소견에 따라 충분히 치료</blockquote>',
      },
      {
        title: '3단계: 치료 종결 후 손해액 산정',
        content:
          '<p><strong style="color:#1e3a5f">치료가 끝나면 치료비·휴업손해·위자료·향후치료비·일실수입을 항목별로 산정합니다.</strong></p>\n<p>합의금은 단순히 보험사가 제시하는 금액이 아닙니다. 적정한 합의를 위해 각 항목을 직접 계산해봐야 합니다. 치료비는 실제 지출 금액, 휴업손해는 치료 기간 동안 일하지 못한 소득 손실(급여명세서·소득금액증명원으로 입증), 위자료는 정신적 고통에 대한 배상입니다.</p>\n<p>후유장해가 남으면 맥브라이드 장해등급에 따라 노동능력상실률을 산정하고, 이를 바탕으로 일실수입(미래 소득 손실)을 계산합니다. 장해진단서는 사고일로부터 6개월 이상 경과 후 발급받는 것이 일반적이며, 이 시점이 합의 적기입니다. 향후 치료비(재활·수술비 등)가 예상되면 이를 합의금에 포함시켜야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">손해액: 치료비 + 휴업손해 + 위자료 + 향후치료비 + 일실수입(장해 시) / 합의 전 항목별 산정 필수</blockquote>',
      },
      {
        title: '4단계: 합의 협상과 합의서 작성',
        content:
          '<p><strong style="color:#1e3a5f">보험사 제시 금액을 그대로 받아들이지 말고, 산정한 손해액을 근거로 협상하세요.</strong></p>\n<p>보험사는 자체 기준으로 합의금을 제시하지만, 이 금액이 피해자의 실제 손해를 충분히 반영하지 못하는 경우가 많습니다. 직접 산정한 손해액 내역서를 제시하며 구체적으로 협상하세요. 협상이 어려우면 손해사정사에게 의뢰하거나 법률 상담을 받는 것도 방법입니다.</p>\n<p>합의가 성립되면 합의서를 작성합니다. 합의서에는 합의금 총액, 지급 시기, 향후 일체의 청구를 포기한다는 부제소 합의 조항이 포함됩니다. 한번 합의서에 서명하면 추가 청구가 극히 어려우므로, 서명 전 반드시 내용을 꼼꼼히 확인하세요. 후유장해가 예상되면 "향후 발견되는 후유장해에 대해서는 별도 협의한다"는 단서 조항을 넣는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의 협상: 손해액 내역서 기반 / 합의서 서명 전 후유장해 단서 조항 삽입 검토 / 서명 후 추가 청구 어려움</blockquote>',
      },
    ],
    cases: [
      {
        title: '치료 종결 전 합의 후 후유증으로 추가 보상을 받지 못한 사례',
        summary:
          '관련 사례에서도 교통사고 피해자 G씨가 사고 후 2개월 만에 보험사의 합의 제안을 수락했으나, 6개월 뒤 디스크 탈출증이 확인되어 추가 치료비를 청구했지만 합의서의 부제소 합의 조항으로 인해 추가 보상을 받지 못한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 치료가 완전히 종결되고 후유장해 여부가 확인된 후 합의를 진행하되, 불가피하게 조기 합의 시 후유장해 관련 단서 조항을 반드시 삽입하세요.',
      },
      {
        title: '손해사정사 의뢰 후 합의금을 3배 인상받은 사례',
        summary:
          '관련 사례에서도 보험사가 제시한 합의금 500만원이 적다고 느낀 H씨가 손해사정사에게 의뢰하여 휴업손해와 향후치료비를 재산정한 결과, 최종 합의금을 1,500만원으로 인상받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 보험사 제시 금액이 적정한지 의문이 들면 손해사정사나 변호사에게 합의금 적정성 검토를 의뢰하세요.',
      },
    ],
    faq: [
      {
        question: '사고 후 몇 일 이내에 병원에 가야 하나요?',
        answer:
          '가능하면 <strong>사고 당일 또는 다음 날</strong>에 병원을 방문하세요. 사고 후 시간이 많이 지나면 사고와 부상의 인과관계를 입증하기 어려워질 수 있습니다.',
      },
      {
        question: '보험사가 합의를 서두르는데 응해야 하나요?',
        answer:
          '절대 서두르지 마세요. 보험사는 빠른 합의로 비용을 줄이려 합니다. <strong>치료가 완전히 끝난 뒤</strong> 후유장해 여부까지 확인하고 합의하는 것이 원칙입니다.',
      },
      {
        question: '합의하지 않으면 소송을 해야 하나요?',
        answer:
          '합의가 결렬되면 <strong>민사소송</strong>으로 손해배상을 청구할 수 있습니다. 소송 전 손해배상조정위원회 조정을 먼저 시도할 수도 있습니다. 소송은 3년의 소멸시효가 있으므로 기한에 유의하세요.',
      },
      {
        question: '과실비율은 합의금에 어떻게 영향을 미치나요?',
        answer:
          '과실비율만큼 합의금이 차감됩니다. 예를 들어 총 손해액 1,000만원에 피해자 과실 20%이면 <strong>800만원</strong>만 받을 수 있습니다. 과실비율에 이의가 있으면 블랙박스·CCTV 증거로 다투세요.',
      },
      {
        question: '합의서에 서명한 후 취소할 수 있나요?',
        answer:
          '원칙적으로 합의서 서명 후 취소는 <strong>매우 어렵습니다</strong>. 사기·강박에 의한 합의였음을 입증해야 하므로, 서명 전에 내용을 충분히 검토하세요.',
      },
      {
        question: '형사합의와 민사합의는 다른 건가요?',
        answer:
          '<strong>형사합의</strong>는 가해자의 형사처벌에 영향을 주는 합의이고, <strong>민사합의</strong>는 손해배상 금액에 대한 합의입니다. 별개 절차이므로 형사합의 시 민사 손해배상 청구권을 포기하는 조항이 있는지 확인하세요.',
      },
      {
        question: '합의금에 세금이 부과되나요?',
        answer:
          '교통사고 합의금은 손해배상 성격이므로 원칙적으로 <strong>소득세가 과세되지 않습니다</strong>. 다만 위자료가 아닌 휴업손해 부분은 소득 성격에 따라 과세될 수 있으므로 구체적 사항은 세무사에게 확인하세요.',
      },
      {
        question: '교통사고 합의 관련 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), <strong>교통사고 피해지원센터</strong>, 각 지역 변호사회 무료상담을 이용할 수 있습니다. 손해사정사 상담은 유료인 경우가 많지만 합의금 인상 효과가 큰 경우가 많습니다.',
      },
    ],
    cta: { text: '교통사고 합의 절차, 지금 무료로 진단받아 보세요', link: '/diagnosis/traffic-accident' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 과실비율 다툼 방법', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
    ],
  },
];
