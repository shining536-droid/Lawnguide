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
      title: '교통사고 합의 전 확인해야 할 체크리스트 | 로앤가이드',
      description: '교통사고 치료 종결 후 합의 전 확인해야 할 합의금 구성, 후유장해, 과실비율 등을 체크리스트로 정리했습니다.',
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
      title: '교통사고 과실비율 다툼 방법과 증거 확보 | 로앤가이드',
      description:
        '교통사고 과실비율이 부당할 때 다툼 방법, 블랙박스·CCTV 증거 확보, 손해사정사, 분쟁조정위원회 활용법을 정리했습니다.',
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
];
