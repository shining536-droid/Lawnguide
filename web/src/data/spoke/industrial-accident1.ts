import { SpokePage } from '../spoke-pages';

export const industrialAccident1Pages: SpokePage[] = [
  {
    domain: 'industrial-accident1',
    slug: 'workers-comp-claim-process',
    keyword: '산재보험 요양급여 신청 절차와 기한',
    questionKeyword: '산재보험 요양급여는 어떻게 신청하나요?',
    ctaKeyword: '산재보험 요양급여 신청',
    type: '절차타임라인형',
    meta: {
      title: '산재보험 요양급여 신청 절차와 기한 | 로앤가이드',
      description: '산업재해보상보험법에 따른 요양급여·휴업급여·장해급여 신청 절차, 기한, 필요 서류를 단계별로 정리했습니다.',
    },
    intro: '작업 중 허리를 다쳐 병원에 입원했습니다. 회사에서는 산재 처리를 해준다고 했는데, 서류가 복잡하고 기한이 있다는 말에 불안해졌습니다. 치료비는 누가 부담하는지, 쉬는 동안 급여는 어떻게 되는지, 지금 뭘 준비해야 하는지 정리했습니다.',
    timelineSteps: ['산재 신청 접수', '요양급여 승인', '휴업급여 청구', '장해급여 판정'],
    sections: [
      {
        title: '산재 요양급여 신청은 사고 발생 후 빠르게 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제41조에 따라 요양급여를 신청할 수 있습니다</strong></p>\n<p>업무상 재해로 부상을 입거나 질병에 걸린 근로자는 <strong>근로복지공단</strong>에 요양급여를 신청할 수 있습니다. 산재지정 의료기관에서 치료를 받으면 본인부담금 없이 치료비가 지급됩니다.</p>\n<p>요양급여 신청서에 사업주 확인을 받아 제출하는 것이 원칙이지만, 사업주가 확인을 거부하더라도 <strong>근로자 본인이 직접 신청</strong>할 수 있습니다. 사고 발생 후 가능한 빨리 접수하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 산재지정 병원 치료 → 요양급여 신청서 접수 → 공단 승인 후 치료비 전액 지급</blockquote>',
      },
      {
        title: '휴업급여로 쉬는 동안의 소득을 보전받으세요',
        content:
          '<p><strong style="color:#1e3a5f">취업하지 못한 기간에 대해 평균임금의 70%가 지급됩니다</strong></p>\n<p><strong>산업재해보상보험법 제52조</strong>에 따라 요양으로 취업하지 못한 기간에 대해 <strong>평균임금의 70%</strong>를 휴업급여로 받을 수 있습니다. 요양급여 승인 후 별도로 청구해야 합니다.</p>\n<p>휴업급여 청구는 14일 이상 요양한 경우에 해당합니다. 의사의 소견서와 출근하지 못한 기간을 증명하는 자료를 함께 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 14일 이상 요양 시 → 평균임금 70% 휴업급여 → 별도 청구 필요</blockquote>',
      },
      {
        title: '치료가 끝나면 장해급여 판정을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">치료 종결 후 장해가 남으면 장해등급에 따라 급여가 지급됩니다</strong></p>\n<p><strong>산업재해보상보험법 제57조</strong>에 따라 치료가 끝난 후에도 신체에 장해가 남으면 장해등급 판정을 받아 <strong>장해급여</strong>를 청구할 수 있습니다. 1~3급은 연금, 4~7급은 연금 또는 일시금, 8~14급은 일시금으로 지급됩니다.</p>\n<p>장해등급에 이의가 있으면 <strong>심사 청구</strong>나 재심사 청구를 통해 다툴 수 있습니다. 장해 판정 전에 주치의 소견서를 꼼꼼히 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">등급: 1~3급 연금 | 4~7급 연금/일시금 선택 | 8~14급 일시금</blockquote>',
      },
      {
        title: '신청 기한과 불승인 시 대응 방법을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">산재 보험급여 청구권의 소멸시효는 3년입니다</strong></p>\n<p><strong>산업재해보상보험법 제112조</strong>에 따라 보험급여 청구권은 발생한 날부터 <strong>3년</strong> 이내에 행사해야 합니다. 요양급여는 사고 발생일, 휴업급여는 취업하지 못한 날, 장해급여는 치료 종결일 기준입니다.</p>\n<p>공단에서 불승인 결정을 받으면 90일 이내에 <strong>심사 청구</strong>, 재심사 청구, 행정소송 순서로 다툴 수 있습니다. 불승인 사유를 확인하고 추가 증빙을 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 보험급여 청구권 소멸시효 3년 | 불승인 시 심사 청구 90일 이내</blockquote>',
      },
    ],
    cases: [
      {
        title: '사업주가 산재 접수를 거부했지만 본인 신청으로 승인된 사례',
        summary:
          '관련 사례에서도 사업주가 산재 처리를 꺼려 확인을 거부했지만, 근로자가 직접 근로복지공단에 요양급여를 신청하여 승인된 경우가 자주 있습니다. 사업주 확인 없이도 신청이 가능합니다.',
        takeaway:
          '비슷한 상황이라면 사업주가 협조하지 않더라도 근로복지공단에 직접 요양급여 신청서를 제출하세요.',
      },
      {
        title: '장해등급 판정에 이의를 제기하여 상향된 사례',
        summary:
          '관련 사례에서도 초기 장해등급 판정에 불복하여 심사 청구를 진행한 결과, 추가 검사와 소견을 통해 장해등급이 상향 조정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 장해등급 판정 결과에 이의가 있을 때 주치의 소견서와 추가 검사 결과를 확보하여 심사 청구를 검토하세요.',
      },
    ],
    faq: [
      {
        question: '산재 신청은 회사가 해주나요, 제가 해야 하나요?',
        answer: '원칙적으로 사업주 확인을 받지만, 거부 시 <strong>근로자 본인이 직접 신청</strong>할 수 있습니다.',
      },
      {
        question: '산재 처리하면 회사에 불이익이 있나요?',
        answer: '산재보험료율이 올라갈 수 있지만, 이를 이유로 <strong>근로자에게 불이익을 주는 것은 위법</strong>입니다.',
      },
      {
        question: '출퇴근 중 사고도 산재인가요?',
        answer: '2018년부터 <strong>출퇴근 재해</strong>도 산재로 인정됩니다. 합리적 경로와 방법이어야 합니다.',
      },
      {
        question: '요양급여 신청 후 승인까지 얼마나 걸리나요?',
        answer: '통상 <strong>14일~1개월</strong> 정도 소요됩니다. 업무상 재해 여부 조사가 필요하면 더 걸릴 수 있습니다.',
      },
      {
        question: '산재보험에 가입하지 않은 회사인데 산재 신청이 되나요?',
        answer: '근로자를 사용하는 사업장은 <strong>당연 적용</strong>됩니다. 미가입이라도 공단에 신청하면 됩니다.',
      },
      {
        question: '산재와 별도로 회사에 손해배상을 청구할 수 있나요?',
        answer: '회사의 안전배려의무 위반이 있으면 <strong>민사 손해배상</strong>을 별도로 청구할 수 있습니다.',
      },
      {
        question: '정신질환(우울증 등)도 산재가 되나요?',
        answer: '업무상 스트레스가 원인이라면 <strong>업무상 질병</strong>으로 인정될 수 있습니다. 인과관계 입증이 필요합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 근로복지공단 상담센터(1588-0075)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 산재 상황에 맞는 급여 신청 방법을 확인해보세요',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산재 진단', href: '/diagnosis/industrial-accident1' },
    ],
  },
];
