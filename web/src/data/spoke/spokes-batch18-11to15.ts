import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 11. 이 페이지는 [사기 피해자·가해자]의 [공소시효 만료 여부가 불확실한 상황]에서 [사기죄 공소시효 기간과 기산점 확인]을 돕는 페이지다.
// 12. 이 페이지는 [산재 근로자]의 [치료 종결 후 장해급여 등급 판정을 앞둔 상황]에서 [장해등급 판정 절차와 준비 사항 파악]을 돕는 페이지다.
// 13. 이 페이지는 [상속인]의 [피상속인 사망 후 부동산 소유권이전등기를 해야 하는 상황]에서 [상속 등기 절차와 필요 서류 준비]를 돕는 페이지다.
// 14. 이 페이지는 [전세 계약 예정자·임차인]의 [전세 사기 의심 징후를 미리 확인하려는 상황]에서 [자가진단 체크리스트로 위험 요소 점검]을 돕는 페이지다.
// 15. 이 페이지는 [전세사기 피해자]의 [고소장을 직접 작성해야 하는 상황]에서 [고소장 필수 기재사항과 작성 요령 파악]을 돕는 페이지다.

export const spokesBatch18_11to15: SpokePage[] = [
  {
    domain: 'fraud',
    slug: 'fraud-statute-of-limitations-period',
    keyword: '사기죄 공소시효 기간 안내',
    questionKeyword: '사기죄 공소시효가 얼마나 되나요?',
    ctaKeyword: '사기죄 공소시효',
    type: '수치기한형',
    meta: {
      title: '사기죄 공소시효 10년 — 기산점·정지 3가지 핵심 | 로앤가이드',
      description: '사기 피해를 입었는데 시간이 많이 지나서 고소할 수 있을지 걱정이시라면, 사기죄 공소시효 기간과 기산점을 확인하세요. 지금 확인하세요.',
    },
    intro: '3년 전 지인에게 빌려준 돈을 돌려받지 못하고 있습니다. 처음부터 갚을 생각이 없었다는 정황이 보이는데, 너무 늦은 건 아닌지 걱정됩니다. 사기죄의 공소시효가 아직 남아 있는지, 기산점은 언제인지 확인해보세요.',
    sections: [
      {
        title: '첫째, 사기죄 공소시효는 10년입니다',
        content:
          '<p><strong style="color:#1e3a5f">형법 제347조 사기죄의 법정형은 10년 이하 징역 또는 2천만원 이하 벌금이며, 공소시효는 10년입니다</strong></p>\n<p>형사소송법 제249조에 따라 <strong>장기 10년 이상의 징역에 해당하는 범죄</strong>의 공소시효는 10년입니다. 사기죄는 법정형 상한이 10년 이하 징역이므로 공소시효 10년이 적용됩니다.</p>\n<p>다만 <strong>특정경제범죄 가중처벌법</strong>이 적용되는 대규모 사기(이득액 5억원 이상)는 법정형이 더 높아 공소시효가 <strong>15년</strong>까지 늘어날 수 있습니다. 피해 규모에 따라 달라지므로 정확한 확인이 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 일반 사기 = 10년 / 5억원 이상 특경법 사기 = 15년</blockquote>',
      },
      {
        title: '둘째, 공소시효 기산점은 범죄행위가 종료된 때입니다',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제252조에 따라 공소시효는 범죄행위가 종료한 때부터 진행됩니다</strong></p>\n<p>사기죄에서 <strong>기산점</strong>은 피해자가 재물이나 재산상 이익을 교부한 시점, 즉 <strong>편취 행위가 완료된 때</strong>입니다. 돈을 건넨 날이 아니라 마지막 편취 행위가 이루어진 날부터 시효가 진행됩니다.</p>\n<p>연속적으로 여러 차례 금원을 편취한 경우 <strong>포괄일죄</strong>로 인정되면 마지막 편취 행위 시점이 기산점이 됩니다. 이 경우 시효 만료 시점이 상당히 뒤로 밀릴 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기산점: 마지막 편취행위 완료일 → 포괄일죄 시 최종 편취일 기준</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/fraud" style="color:#1565c0;font-weight:600">내 사기 사건 공소시효 남았는지 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 공소시효가 정지되는 3가지 경우를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">공소가 제기되거나 범인이 해외에 있으면 공소시효 진행이 멈춥니다</strong></p>\n<p>공소시효가 정지되는 경우는 크게 3가지입니다. ①<strong>공소가 제기된 때</strong>(기소 시점부터 정지) ②범인이 <strong>형사처분을 면할 목적으로 해외에 있는 기간</strong> ③<strong>공범에 대한 공소제기</strong>로 시효가 정지되는 경우입니다.</p>\n<p>특히 가해자가 출국하여 해외에 체류 중이라면 <strong>그 기간만큼 시효가 정지</strong>됩니다. 귀국 후 남은 시효가 다시 진행되므로, 해외 도피 기간이 길더라도 고소 기회가 남아 있을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정지 사유: ①공소 제기 ②해외 체류 ③공범 기소 → 해당 기간만큼 시효 연장</blockquote>',
      },
      {
        title: '넷째, 민사 손해배상 청구 시효와 구별하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사 공소시효와 별도로 민사 손해배상 청구 시효가 따로 있습니다</strong></p>\n<p>민법 제766조에 따라 <strong>불법행위 손해배상</strong>은 손해 및 가해자를 안 날로부터 <strong>3년</strong>, 불법행위일로부터 <strong>10년</strong>이 소멸시효입니다. 형사 고소와 민사 소송은 별개이므로 둘 다 확인해야 합니다.</p>\n<p>형사 공소시효가 남아 있더라도 <strong>민사 시효가 먼저 만료</strong>될 수 있습니다. 반대로 형사 시효가 지났어도 민사 청구는 가능한 경우도 있으니, 두 가지를 함께 점검하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">민사 시효: 안 날로부터 3년 / 불법행위일로부터 10년 → 형사와 별도 진행</blockquote>',
      },
      {
        title: '다섯째, 시효 만료가 임박하면 즉시 고소장을 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">공소시효는 검사가 공소를 제기함으로써 정지되므로, 고소 시점이 아닌 기소 시점이 중요합니다</strong></p>\n<p>고소장을 접수해도 수사와 기소까지 <strong>수개월~1년 이상</strong> 걸릴 수 있습니다. 시효 만료가 임박한 경우 <strong>빨리 고소장을 제출</strong>하고, 수사기관에 시효 임박 사실을 알려 신속 처리를 요청하세요.</p>\n<p>고소장에는 <strong>피해 일시, 금액, 가해자 정보, 편취 경위</strong>를 구체적으로 적고, 증거자료(계좌이체 내역, 대화 기록 등)를 최대한 첨부하세요. 시효 만료 전 고소는 하루라도 빠를수록 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">긴급 대응: 시효 임박 → 고소장 즉시 접수 → 수사기관에 신속 처리 요청</blockquote>',
      },
    ],
    cases: [
      {
        title: '영업비밀 누설·업무상배임에서 공소시효와 범죄 성립 시점을 판단한 사례',
        summary:
          '대법원 2025도11906 사건(2026.01.15 선고)에서 법원은 부정한 이익을 얻거나 보유자에게 손해를 입힐 목적으로 영업비밀을 넘겨주는 행위 자체로 범죄가 성립하며, 이후 실제 사용 여부는 범죄 성립과 무관하다고 판시했습니다.',
        takeaway:
          '사기 관련 범죄에서도 편취 행위가 완료된 시점에 범죄가 성립합니다. 실제 이득을 본 시점이 아니라 기망행위 완료 시점이 공소시효 기산점이 되므로, 정확한 범행 완료일을 특정하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '사기죄 공소시효 10년이 지나면 어떻게 되나요?',
        answer: '공소시효가 만료되면 <strong>검사가 기소할 수 없으므로 형사처벌이 불가능</strong>합니다. 다만 민사 손해배상 청구는 별도 시효가 적용되므로 민사 소송은 가능할 수 있습니다.',
      },
      {
        question: '고소장을 내면 공소시효가 바로 멈추나요?',
        answer: '아닙니다. 공소시효는 <strong>검사가 공소를 제기(기소)한 때</strong> 정지됩니다. 고소장 접수만으로는 시효가 정지되지 않으므로, 시효 만료가 가까운 경우 수사기관에 긴급 처리를 요청하세요.',
      },
      {
        question: '사기범이 해외로 도주하면 시효가 계속 흐르나요?',
        answer: '형사처분을 면할 목적으로 해외에 있는 경우 <strong>그 기간만큼 공소시효 진행이 정지</strong>됩니다. 귀국하면 나머지 시효가 다시 진행됩니다.',
      },
      {
        question: '여러 번에 걸쳐 돈을 편취당한 경우 시효는 언제부터인가요?',
        answer: '동일한 범의 하에 반복적으로 편취한 경우 <strong>포괄일죄</strong>로 인정되어 마지막 편취 행위일이 시효 기산점이 됩니다. 첫 피해일이 아니라 최종 피해일 기준이므로 시효가 늦게 만료됩니다.',
      },
      {
        question: '특정경제범죄법이 적용되는 사기는 어떤 경우인가요?',
        answer: '이득액이 <strong>5억원 이상</strong>인 사기 범죄에 특정경제범죄 가중처벌법이 적용됩니다. 법정형이 높아져 공소시효가 15년으로 늘어나며, 50억원 이상이면 무기징역까지 가능합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 피해 진단', href: '/diagnosis/fraud' },
      { label: '사기죄 성립 요건 총정리', href: '/guide/fraud/fraud-crime-establishment-requirements' },
      { label: '사기 고소장 준비 체크리스트', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기 합의금 감형 기준', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
    ],
  },
  {
    domain: 'industrial-accident1',
    slug: 'disability-benefit-grade-process',
    keyword: '산재 장해급여 등급 판정 절차',
    questionKeyword: '산재 치료 끝나면 장해등급은 어떻게 받나요?',
    ctaKeyword: '산재 장해급여',
    type: '절차타임라인형',
    meta: {
      title: '산재 장해급여 등급 판정 5단계 절차 총정리 | 로앤가이드',
      description: '산재 치료가 끝났는데 장해등급 판정을 어떻게 받아야 할지 막막하시다면, 신청부터 불복까지 5단계 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '산업재해로 6개월간 치료를 받았지만 완전히 회복되지 않았습니다. 담당 의사가 치료 종결을 이야기하는데, 남은 장해에 대해 보상을 받으려면 장해등급 판정을 받아야 한다고 합니다. 어디서부터 시작해야 하는지 정리해보세요.',
    timelineSteps: ['치료 종결 확인', '장해급여 청구서 제출', '근로복지공단 자문의 진찰', '장해등급 결정 통보', '불복 시 심사·재심사 청구'],
    sections: [
      {
        title: '첫째, 주치의로부터 치료 종결 소견을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제57조에 따라 장해급여는 치료 종결 후 남은 장해에 대해 지급됩니다</strong></p>\n<p>장해급여를 청구하려면 먼저 <strong>주치의의 치료 종결 소견</strong>이 필요합니다. "더 이상 치료 효과를 기대하기 어렵다"는 의학적 판단이 나와야 장해등급 판정 절차가 시작됩니다.</p>\n<p>치료 종결 시점에 <strong>장해진단서</strong>를 발급받으세요. 장해 부위, 운동 제한 범위, 일상생활 지장 정도가 상세히 기재되어야 등급 판정에 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 치료 종결 소견 → 장해진단서 발급 → 장해 부위·제한 범위 상세 기재</blockquote>',
      },
      {
        title: '둘째, 근로복지공단에 장해급여 청구서를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">장해급여 청구서와 장해진단서를 관할 근로복지공단 지사에 제출합니다</strong></p>\n<p>청구서에는 <strong>재해 경위, 치료 기간, 장해 부위, 청구인 정보</strong>를 정확히 기재하세요. 장해진단서, 진료기록 사본, 영상검사(MRI, CT 등) 결과물을 함께 제출하면 심사가 빨라집니다.</p>\n<p>청구 기한은 <strong>치료 종결일로부터 3년</strong>입니다(산업재해보상보험법 제112조). 기한이 지나면 청구권이 소멸하므로 치료가 끝나면 바로 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">제출 서류: 청구서 + 장해진단서 + 진료기록 + 영상검사 결과 → 3년 이내 청구</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">내 산재 장해등급 예상 등급 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 근로복지공단 자문의 진찰을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">공단 자문의가 직접 진찰한 후 장해등급을 판정합니다</strong></p>\n<p>청구서 접수 후 공단에서 <strong>자문의 진찰 일정</strong>을 통보합니다. 자문의는 장해진단서와 진료기록을 검토하고 직접 진찰하여 <strong>장해등급 기준표</strong>에 따라 등급을 판정합니다.</p>\n<p>진찰 시 <strong>통증 정도, 관절 가동 범위, 일상생활 제한</strong>을 구체적으로 설명하세요. 평소보다 상태가 좋은 날 진찰을 받으면 실제보다 낮은 등급이 나올 수 있으니, 있는 그대로 정확히 전달하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진찰 요령: 증상 있는 그대로 설명 → 관절 가동범위·통증 수치 구체적 전달</blockquote>',
      },
      {
        title: '넷째, 장해등급 결정 통보를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">장해등급은 1~14급으로 나뉘며, 등급에 따라 급여 종류와 금액이 달라집니다</strong></p>\n<p>1~3급은 <strong>장해연금</strong>이 지급되고, 4~7급은 연금 또는 일시금 중 선택할 수 있으며, 8~14급은 <strong>장해일시금</strong>으로 지급됩니다. 등급이 높을수록(1급에 가까울수록) 보상액이 큽니다.</p>\n<p>결정 통보서에는 <strong>인정된 장해 부위, 적용된 등급 기준, 산정 금액</strong>이 기재됩니다. 통보서를 받으면 인정된 장해 내용이 실제 증상과 일치하는지 반드시 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">등급 체계: 1~3급 연금 / 4~7급 선택 / 8~14급 일시금 → 통보 내용 반드시 확인</blockquote>',
      },
      {
        title: '다섯째, 등급에 불복하면 90일 이내에 심사 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">결정에 이의가 있으면 근로복지공단 심사위원회에 심사를 청구할 수 있습니다</strong></p>\n<p>장해등급 결정에 불복하면 <strong>결정 통보를 받은 날로부터 90일 이내</strong>에 근로복지공단 본부 심사위원회에 심사를 청구하세요. 심사 결과에도 불복하면 <strong>산업재해보상보험 재심사위원회</strong>에 재심사를 청구할 수 있습니다.</p>\n<p>심사·재심사 과정에서 <strong>추가 의학적 소견서, 대학병원 감정서</strong> 등을 제출하면 등급이 상향될 수 있습니다. 재심사 결과에도 불복 시 <strong>행정소송</strong>을 제기할 수 있으며, 기한은 재심사 결정을 안 날로부터 90일입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 절차: 심사(90일) → 재심사(90일) → 행정소송(90일) → 추가 소견서 제출</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법상 사업장 범위와 근로자 수 산정 기준에 관한 판결',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 중대재해처벌법상 "사업 또는 사업장"이란 경영상의 일체를 이루면서 유기적으로 운영되는 경제적·사회적 활동단위를 의미하며, 장소적으로 분리된 조직도 독립적으로 운영되지 않으면 전체 상시 근로자 수를 합산해야 한다고 판시했습니다.',
        takeaway:
          '산재 사고 발생 시 사업장의 상시 근로자 수에 따라 중대재해처벌법 적용 여부가 달라집니다. 본사와 지점이 분리되어 있더라도 경영상 일체로 운영되면 전체 근로자 수가 합산되므로, 사업주의 안전 의무 범위를 정확히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '장해등급이 낮게 나왔는데 다시 받을 수 있나요?',
        answer: '결정 통보를 받은 날로부터 <strong>90일 이내에 심사 청구</strong>를 할 수 있습니다. 추가 의학 소견서나 대학병원 감정서를 제출하면 등급이 상향될 수 있습니다.',
      },
      {
        question: '장해급여와 장해연금의 차이가 뭔가요?',
        answer: '<strong>1~3급은 연금</strong>만 지급되고, 4~7급은 연금과 일시금 중 선택 가능하며, 8~14급은 <strong>일시금</strong>만 지급됩니다. 연금은 매월 받고 일시금은 한 번에 받습니다.',
      },
      {
        question: '치료가 끝난 후 얼마 안에 장해급여를 청구해야 하나요?',
        answer: '치료 종결일로부터 <strong>3년 이내</strong>에 청구해야 합니다. 3년이 지나면 청구권이 소멸하므로 치료 종결 직후 바로 준비하는 것이 좋습니다.',
      },
      {
        question: '장해등급 판정에 불리하게 작용하는 실수가 있나요?',
        answer: '자문의 진찰 시 <strong>"많이 나아졌다"고 과소 표현</strong>하거나, 통증이 적은 날에 진찰을 받는 것이 대표적 실수입니다. 실제 증상을 있는 그대로 구체적으로 전달하세요.',
      },
      {
        question: '기존 질병이 있었는데 산재로 악화된 경우도 장해등급을 받나요?',
        answer: '기존 질환이 산재로 인해 <strong>자연적 경과 이상으로 악화</strong>되었다면 장해등급을 인정받을 수 있습니다. 다만 기여도 감산이 적용되어 일부 등급이 낮아질 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산재 진단', href: '/diagnosis/industrial-accident1' },
      { label: '산재 신청 절차 총정리', href: '/guide/industrial-accident1/workers-comp-claim-process' },
      { label: '산재 요양급여 청구 방법', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
      { label: '출퇴근 산재 인정 기준', href: '/guide/industrial-accident1/commute-accident-recognition' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'inheritance-registration-procedure-docs',
    keyword: '상속 등기 절차와 필요 서류 총정리',
    questionKeyword: '부모님이 돌아가셨는데 부동산 등기는 어떻게 하나요?',
    ctaKeyword: '상속 등기 절차',
    type: '준비서류형',
    meta: {
      title: '상속 등기 절차 6단계 — 필요 서류 총정리 | 로앤가이드',
      description: '부모님 사망 후 부동산 상속 등기를 해야 하는데 무엇부터 준비해야 할지 모르겠다면, 절차와 필요 서류를 확인하세요. 지금 확인하세요.',
    },
    intro: '아버지가 돌아가시고 한 달이 지났습니다. 아버지 명의의 아파트를 상속받아야 하는데, 등기를 어떻게 해야 하는지 막막합니다. 서류는 뭘 준비해야 하고, 어디에 가서 어떻게 신청하는지 정리해보세요.',
    sections: [
      {
        title: '첫째, 상속인 확정과 상속 재산을 조회하세요',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1000조에 따라 상속 순위가 정해지며, 같은 순위 상속인이 여럿이면 공동상속이 됩니다</strong></p>\n<p>상속 등기 전에 <strong>누가 상속인인지</strong>를 먼저 확정해야 합니다. 배우자와 직계비속(자녀)이 1순위 공동상속인이며, 직계비속이 없으면 직계존속(부모)이 2순위입니다.</p>\n<p>피상속인 명의 부동산은 <strong>대법원 인터넷등기소</strong>에서 등기부등본을 발급받아 확인하세요. 안심상속 원스톱 서비스(정부24)를 이용하면 금융·부동산·차량 등 <strong>전체 상속 재산을 일괄 조회</strong>할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 상속인 순위 확정 → 등기부등본 발급 → 안심상속 원스톱 서비스 조회</blockquote>',
      },
      {
        title: '둘째, 상속 등기에 필요한 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">부동산등기법 제46조에 따라 상속등기 시 법정 서류를 제출해야 합니다</strong></p>\n<p>필수 서류는 다음과 같습니다. ①피상속인 <strong>기본증명서(상세), 가족관계증명서(상세), 주민등록 말소 초본</strong> ②상속인 전원의 <strong>기본증명서, 가족관계증명서, 주민등록등본</strong> ③<strong>부동산 등기부등본</strong> ④취득세 납부 영수증</p>\n<p>상속인이 여러 명인 경우 <strong>상속재산분할협의서</strong>(인감증명서 첨부)가 추가로 필요합니다. 협의서에는 상속인 전원이 서명·날인하고 인감도장을 찍어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수: 피상속인 3종 + 상속인 3종 + 등기부등본 + 취득세 납부 + 분할협의서(공동상속 시)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/inheritance" style="color:#1565c0;font-weight:600">내 상속 등기 필요 서류 체크리스트 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 취득세를 신고·납부하세요',
        content:
          '<p><strong style="color:#1e3a5f">지방세법 제7조에 따라 상속으로 부동산을 취득하면 취득세를 납부해야 합니다</strong></p>\n<p>상속 부동산의 취득세율은 <strong>2.8%(농지는 2.3%)</strong>입니다. 여기에 지방교육세(0.16%)와 농어촌특별세가 추가됩니다. 과세표준은 시가표준액(공시가격)입니다.</p>\n<p>취득세는 <strong>상속개시일(사망일)이 속하는 달의 말일부터 6개월 이내</strong>에 신고·납부해야 합니다. 기한을 넘기면 무신고 가산세 20%와 납부불성실 가산세가 추가됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">취득세: 2.8%(일반) → 사망일 속한 달 말일부터 6개월 이내 신고·납부</blockquote>',
      },
      {
        title: '넷째, 관할 등기소에 상속등기를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">부동산 소재지 관할 등기소에 등기신청서와 첨부 서류를 제출합니다</strong></p>\n<p>등기신청서는 <strong>대법원 인터넷등기소</strong>에서 양식을 다운로드하거나 전자신청(e-Form)으로도 가능합니다. 신청서에 피상속인(등기의무자)과 상속인(등기권리자) 정보, 부동산 표시를 기재하세요.</p>\n<p>등록면허세는 부동산 가액의 <strong>0.8%(상속 기준)</strong>이며, 국민주택채권 매입 비용도 별도로 발생합니다. 직접 신청이 어렵다면 법무사에게 위임할 수 있으며, 수수료는 통상 <strong>30~50만원</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청: 관할 등기소 방문 또는 e-Form → 등록면허세 0.8% + 국민주택채권 매입</blockquote>',
      },
      {
        title: '다섯째, 상속등기를 미루면 과태료가 부과됩니다',
        content:
          '<p><strong style="color:#1e3a5f">부동산등기 특별조치법에 따라 상속등기를 장기간 미루면 과태료가 부과됩니다</strong></p>\n<p>상속으로 부동산을 취득했음에도 <strong>정당한 사유 없이 3년 이내</strong>에 등기를 하지 않으면 부동산 가액의 <strong>최대 2%</strong> 과태료가 부과될 수 있습니다.</p>\n<p>상속세 신고 기한(사망일로부터 6개월)도 함께 체크하세요. 상속세는 <strong>피상속인의 총 상속재산이 기초공제 5억원을 초과</strong>하는 경우에 신고해야 합니다. 등기와 세금 신고를 한꺼번에 처리하면 효율적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 3년 이내 미등기 시 과태료 최대 2% / 상속세 신고 기한 6개월 별도</blockquote>',
      },
    ],
    cases: [
      {
        title: '상속 재산의 보충적 평가방법 적용에 관한 판결',
        summary:
          '대법원 2025두33647 사건(2025.10.30 선고)에서 법원은 비상장주식의 시가 산정 시 상속세 및 증여세법상 보충적 평가방법을 적용할 때, 자기주식을 포함한 순자산가액과 순손익가치를 가중평균하여 1주당 가액을 산출해야 한다고 판시했습니다.',
        takeaway:
          '상속 재산에 비상장주식이 포함된 경우 시가 평가가 복잡해질 수 있습니다. 보충적 평가방법이 적용되는 경우 순자산가치와 순손익가치의 가중평균 방식을 정확히 적용해야 하므로 세무 전문가의 도움을 받으세요.',
      },
    ],
    faq: [
      {
        question: '상속 등기를 안 하면 어떤 불이익이 있나요?',
        answer: '등기 없이는 <strong>매매, 담보 설정 등 처분이 불가능</strong>합니다. 또한 3년 이상 미등기 시 과태료(부동산 가액의 최대 2%)가 부과되고, 상속세 신고 기한도 별도로 적용됩니다.',
      },
      {
        question: '상속인 중 한 명이 협의에 동의하지 않으면 어떻게 하나요?',
        answer: '협의가 안 되면 <strong>법원에 상속재산분할심판</strong>을 청구할 수 있습니다. 심판 확정 후 그 결과에 따라 등기를 진행하면 됩니다.',
      },
      {
        question: '상속 등기를 직접 할 수 있나요, 법무사에게 맡겨야 하나요?',
        answer: '본인이 <strong>직접 등기소에 방문하거나 인터넷으로 신청</strong>할 수 있습니다. 다만 서류가 복잡하면 법무사에게 위임하는 것이 안전하며, 수수료는 보통 30~50만원입니다.',
      },
      {
        question: '상속 부동산이 여러 개일 때 등기를 한꺼번에 할 수 있나요?',
        answer: '같은 관할 등기소 소재 부동산이라면 <strong>일괄 신청</strong>이 가능합니다. 관할이 다른 부동산은 각각의 관할 등기소에 별도로 신청해야 합니다.',
      },
      {
        question: '상속포기를 한 사람은 등기 절차에서 빠져도 되나요?',
        answer: '가정법원에서 <strong>상속포기가 수리된 사람은 처음부터 상속인이 아닌 것</strong>으로 봅니다. 등기 신청 시 상속포기 심판문을 첨부하면 해당인은 절차에서 제외됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상속 진단', href: '/diagnosis/inheritance' },
      { label: '상속포기 절차와 기한', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 절차 총정리', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 빚 발견 시 대처법', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
    ],
  },
  {
    domain: 'jeonse',
    slug: 'fraud-suspicion-self-check',
    keyword: '전세 사기 의심 징후 자가진단',
    questionKeyword: '전세 계약 전에 사기인지 어떻게 확인하나요?',
    ctaKeyword: '전세 사기 의심',
    type: '체크리스트형',
    meta: {
      title: '전세 사기 의심 징후 7가지 자가진단 체크리스트 | 로앤가이드',
      description: '전세 계약을 앞두고 있는데 혹시 사기가 아닌지 불안하시다면, 7가지 의심 징후 자가진단 체크리스트를 확인하세요. 지금 확인하세요.',
    },
    intro: '좋은 조건의 전세 매물을 찾았는데 뭔가 찜찜합니다. 시세보다 보증금이 낮고, 집주인이 계약을 서두릅니다. 뉴스에서 본 전세 사기 수법과 비슷한 것 같기도 한데, 계약 전에 확인해야 할 징후들을 체크해보세요.',
    sections: [
      {
        title: '첫째, 전세 보증금이 시세보다 현저히 낮은지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">시세 대비 70% 이하의 저렴한 전세는 사기 가능성을 의심해야 합니다</strong></p>\n<p>전세 사기범들은 피해자를 유인하기 위해 <strong>시세보다 20~30% 이상 저렴한 보증금</strong>을 제시합니다. 국토교통부 실거래가 공개시스템이나 KB부동산에서 주변 시세를 반드시 비교하세요.</p>\n<p>"급매라서 싸다", "곧 올릴 거니까 지금이 기회"라는 말로 <strong>계약을 서두르면 더욱 주의</strong>하세요. 정상적인 전세라면 집주인이 일방적으로 가격을 낮출 이유가 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 1: 시세 대비 보증금이 70% 이하 → 실거래가 공개시스템에서 비교 확인</blockquote>',
      },
      {
        title: '둘째, 등기부등본상 근저당·가압류 설정을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본 을구에 근저당이 과도하게 설정되어 있으면 보증금 반환이 불가능합니다</strong></p>\n<p>대법원 인터넷등기소에서 <strong>등기부등본</strong>을 발급받아 을구(소유권 이외의 권리)를 확인하세요. 근저당 설정액과 전세보증금을 합산한 금액이 <strong>매매시세의 70~80%를 초과</strong>하면 보증금 회수가 어려울 수 있습니다.</p>\n<p><strong>가압류, 압류, 가처분</strong> 기재도 반드시 확인하세요. 이런 기재가 있으면 집주인의 재정 상태가 불안하다는 의미이며, 경매로 넘어갈 가능성이 높습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 2: 근저당+보증금 합산 > 매매시세 70~80% → 보증금 미회수 위험</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/jeonse" style="color:#1565c0;font-weight:600">내 전세 계약 안전성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 집주인의 세금 체납 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">국세·지방세 체납이 있으면 보증금보다 세금이 우선 변제될 수 있습니다</strong></p>\n<p>2023년 4월부터 임대인의 <strong>미납 국세 열람</strong>이 가능해졌습니다. 계약 전 세무서에서 임대인의 국세 체납 여부를 열람 신청하세요. 지방세는 <strong>위택스</strong>에서 확인 가능합니다.</p>\n<p>소액임차보증금 최우선변제를 받더라도 <strong>당해세(해당 부동산에 부과된 세금)</strong>가 우선하므로 체납액이 크면 보증금 반환이 어려울 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 3: 세무서 국세 체납 열람 + 위택스 지방세 확인 → 체납 있으면 계약 재고</blockquote>',
      },
      {
        title: '넷째, 대리계약·위임장 진위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">집주인 본인이 아닌 대리인과 계약할 때는 위임장 진위를 반드시 확인하세요</strong></p>\n<p>전세 사기의 대표적 수법 중 하나가 <strong>가짜 위임장으로 집주인을 사칭</strong>하는 것입니다. 대리계약 시 집주인의 인감증명서(3개월 이내 발급)와 위임장 원본, 대리인 신분증을 반드시 대조하세요.</p>\n<p>가능하면 <strong>집주인에게 직접 전화</strong>하여 위임 사실을 확인하고, 통화 내용을 녹음해두세요. 집주인 확인이 불가능하면 계약을 보류하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 4: 위임장+인감증명서 확인 → 집주인 직접 통화 확인 → 불가 시 계약 보류</blockquote>',
      },
      {
        title: '다섯째, 전입신고·확정일자와 전세보증보험 가입 가능 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법에 따라 전입신고와 확정일자가 있어야 대항력과 우선변제권을 갖습니다</strong></p>\n<p>계약 당일 <strong>전입신고와 확정일자</strong>를 동시에 받아야 합니다. 특히 잔금일에 전입신고를 해야 다음 날 0시부터 대항력이 생기므로, 잔금 지급과 동시에 전입신고하세요.</p>\n<p><strong>전세보증보험(HUG, SGI 등)</strong> 가입 가능 여부도 반드시 확인하세요. 보험 가입이 안 되는 주택은 그만큼 위험 요소가 크다는 의미입니다. 가입 불가 사유가 근저당 과다, 다주택자 물건, 위반건축물 등이면 계약을 재고하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 5~7: 전입신고+확정일자 즉시 / 전세보증보험 가입 가능 여부 / 위반건축물 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '공동저당 설정 시 공인중개사의 확인·설명의무에 관한 판결',
        summary:
          '대법원 2024다305087 사건(2025.12.04 선고)에서 법원은 다세대주택 임대차계약 중개 시 공동저당권이 설정된 다른 세대의 선순위권리와 임차인 정보까지 확인·설명해야 할 의무가 있으며, 이를 위반한 공인중개사에게 배상책임을 인정할 여지가 크다고 판시했습니다.',
        takeaway:
          '전세 계약 시 해당 호실뿐 아니라 같은 건물 내 다른 호실에 공동저당이 설정되어 있는지도 확인해야 합니다. 공인중개사가 이를 설명하지 않았다면 손해배상을 청구할 수 있으니, 계약 전 직접 등기부등본을 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '등기부등본은 계약 며칠 전에 발급받아야 하나요?',
        answer: '등기부등본은 <strong>계약 당일 가장 최근 것</strong>을 발급받으세요. 계약 전일에도 근저당이 추가될 수 있으므로, 잔금일 당일에도 한 번 더 확인하는 것이 안전합니다.',
      },
      {
        question: '전세보증보험에 가입하면 100% 안전한가요?',
        answer: '전세보증보험에 가입하면 보증금 미반환 시 <strong>보증기관이 대신 변제</strong>해줍니다. 다만 가입 조건(보증금 한도, 건물 요건 등)이 있으므로 가입 가능 여부를 먼저 확인하세요.',
      },
      {
        question: '임대인의 세금 체납 정보를 임차인도 볼 수 있나요?',
        answer: '2023년 4월부터 <strong>전세 계약 예정자도 세무서에서 임대인의 국세 체납 열람을 신청</strong>할 수 있습니다. 임대차 계약서(또는 계약 예정 사실 확인)를 지참하세요.',
      },
      {
        question: '빌라(다세대주택)가 아파트보다 전세 사기 위험이 높나요?',
        answer: '통계적으로 <strong>빌라·다세대주택</strong>에서 전세 사기가 더 많이 발생합니다. 시세 확인이 어렵고, 공동담보 설정이 쉬우며, 실거래가 정보가 부족하기 때문입니다. 더욱 꼼꼼한 확인이 필요합니다.',
      },
      {
        question: '깡통전세인지 확인하는 가장 빠른 방법은 뭔가요?',
        answer: '<strong>매매시세에서 선순위 근저당·임대차보증금을 빼고</strong> 남는 금액이 내 보증금보다 적으면 깡통전세입니다. KB부동산 시세와 등기부등본을 대조해서 직접 계산해보세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/jeonse',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세 진단', href: '/diagnosis/jeonse' },
      { label: '전세보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
      { label: '전세보증보험 청구 체크리스트', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '집주인 연락두절 시 대처법', href: '/guide/jeonse/landlord-unreachable-deposit' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-complaint-writing',
    keyword: '전세사기 고소장 작성 방법',
    questionKeyword: '전세사기를 당했는데 고소장은 어떻게 쓰나요?',
    ctaKeyword: '전세사기 고소장',
    type: 'Q&A형',
    perspective: '피해자',
    meta: {
      title: '전세사기 고소장 작성법 5가지 핵심 항목 | 로앤가이드',
      description: '전세사기 피해를 당했는데 고소장을 어떻게 써야 할지 모르겠다면, 필수 기재 5가지 항목과 작성 요령을 확인하세요. 지금 확인하세요.',
    },
    intro: '전세 만기가 돌아왔는데 집주인이 보증금을 돌려주지 않습니다. 알고 보니 계약 당시부터 근저당이 과도하게 설정되어 있었고, 집주인은 연락이 두절되었습니다. 경찰에 고소장을 직접 써서 내려고 하는데, 어떻게 작성해야 하는지 정리해보세요.',
    sections: [
      {
        title: 'Q1. 전세사기 고소장에 반드시 들어가야 하는 항목은 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">고소장에는 고소인·피고소인 정보, 범죄사실, 적용 법조, 증거목록이 반드시 포함되어야 합니다</strong></p>\n<p>고소장의 필수 항목은 5가지입니다. ①<strong>고소인(피해자) 인적사항</strong>: 성명, 주민등록번호, 주소, 연락처 ②<strong>피고소인(가해자) 정보</strong>: 집주인 성명, 주소, 연락처 ③<strong>범죄사실</strong>: 사기 경위를 시간순으로 서술 ④<strong>적용 법조</strong>: 형법 제347조(사기죄) ⑤<strong>증거목록</strong></p>\n<p>피고소인의 주소를 모르면 <strong>"주소 불상"으로 기재</strong>하고, 알고 있는 정보(전화번호, 부동산 주소 등)를 최대한 적으세요. 수사기관이 이를 토대로 피고소인을 특정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">5가지 필수: 고소인 정보 / 피고소인 정보 / 범죄사실 / 적용 법조 / 증거목록</blockquote>',
      },
      {
        title: 'Q2. 범죄사실은 어떻게 서술해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">기망행위 → 착오 → 재산처분(보증금 지급)의 인과관계를 시간순으로 구체적으로 적으세요</strong></p>\n<p>사기죄가 성립하려면 <strong>기망행위(속이는 행위)</strong>가 있어야 합니다. 범죄사실란에는 ①피고소인이 언제, 어떤 허위 사실을 말했는지(기망) ②고소인이 이를 믿고 보증금을 지급한 사실(착오·처분행위) ③<strong>피고소인이 처음부터 보증금을 반환할 의사나 능력이 없었다는 정황</strong>을 기재하세요.</p>\n<p>"20XX년 X월 X일, 피고소인은 해당 부동산에 근저당 설정이 없다고 거짓말하여 고소인으로부터 보증금 X원을 교부받았다"와 같이 <strong>일시·장소·방법·금액</strong>을 구체적으로 적어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서술 구조: 기망(허위 고지) → 착오(피해자 신뢰) → 처분행위(보증금 지급) → 편취 완성</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/jeonse-fraud" style="color:#1565c0;font-weight:600">내 전세사기 고소 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: 'Q3. 고소장에 첨부해야 할 증거는 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">기망행위를 입증할 수 있는 증거를 최대한 많이 첨부하세요</strong></p>\n<p>핵심 증거는 다음과 같습니다. ①<strong>임대차계약서 사본</strong> ②<strong>등기부등본</strong>(계약 당시와 현재) ③<strong>보증금 송금 내역</strong>(계좌이체 확인서) ④공인중개사가 작성한 <strong>중개대상물 확인·설명서</strong> ⑤<strong>대화 기록</strong>(카카오톡, 문자, 녹취 등)</p>\n<p>특히 계약 당시 등기부등본과 현재 등기부등본을 비교하면 <strong>계약 후 근저당이 추가 설정</strong>되었는지 확인할 수 있어 기망 입증에 유력한 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 계약서 + 등기부등본(전후 비교) + 송금내역 + 대화기록 + 확인설명서</blockquote>',
      },
      {
        title: 'Q4. 사기죄 말고 다른 죄명도 함께 고소할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">전세사기의 경우 사기죄 외에 횡령, 배임, 공문서위조 등을 병합할 수 있습니다</strong></p>\n<p>집주인이 보증금을 받아 개인 채무 변제에 사용했다면 <strong>횡령죄</strong>(형법 제355조)가 추가될 수 있습니다. 대리인이 위임장을 위조했다면 <strong>사문서위조</strong>(형법 제231조)와 <strong>위조사문서행사</strong>(형법 제234조)도 병합 고소 가능합니다.</p>\n<p>피해자가 다수인 경우 <strong>"전세사기 피해자 지원 및 주거안정에 관한 특별법"</strong> 적용도 검토하세요. 일정 요건을 충족하면 피해자 인정을 받아 추가 지원을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 죄명: 횡령(보증금 유용) / 사문서위조(위임장) / 특별법 적용 검토</blockquote>',
      },
      {
        title: 'Q5. 고소장은 어디에, 어떻게 제출하나요?',
        content:
          '<p><strong style="color:#1e3a5f">관할 경찰서 민원실에 방문 접수하거나 우편·온라인으로 제출할 수 있습니다</strong></p>\n<p>고소장은 <strong>피고소인의 주소지 또는 범죄지 관할 경찰서</strong>에 접수합니다. 부동산 소재지 경찰서가 범죄지 관할이므로 대부분 여기에 접수하면 됩니다. 방문 접수 시 <strong>2부</strong>를 준비해서 접수증을 받으세요.</p>\n<p>접수 후 사건번호를 부여받으면 <strong>수사관 배정까지 2~4주</strong> 정도 걸립니다. 수사관이 연락하면 피해 경위를 다시 상세히 진술하게 되므로, 고소장 내용을 본인이 잘 숙지해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 범죄지(부동산 소재지) 관할 경찰서 → 2부 준비 → 접수증 수령 → 2~4주 후 수사관 배정</blockquote>',
      },
    ],
    cases: [
      {
        title: '전세사기에서 기망행위와 편취 의사 인정에 관한 법리',
        summary:
          '사기죄가 성립하려면 행위자에게 기망행위 당시 피해자의 재물을 편취할 고의가 있어야 합니다. 법원은 계약 당시 과도한 근저당 설정, 다수 피해자 존재, 반환 자력 부재 등을 종합적으로 고려하여 편취 의사를 인정합니다.',
        takeaway:
          '고소장에는 집주인이 처음부터 보증금을 돌려줄 의사나 능력이 없었다는 정황(다수 계약, 과도한 채무, 연락 두절 등)을 구체적으로 기재하세요. 편취 의사 입증이 사기죄 성패를 좌우합니다.',
      },
    ],
    faq: [
      {
        question: '변호사 없이 직접 고소장을 써도 되나요?',
        answer: '네, <strong>고소장은 피해자 본인이 직접 작성</strong>하여 제출할 수 있습니다. 다만 범죄사실 서술이 부족하면 수사가 지연될 수 있으므로, 기망행위와 편취 경위를 구체적으로 적는 것이 중요합니다.',
      },
      {
        question: '고소 후 집주인이 합의를 제안하면 어떻게 하나요?',
        answer: '합의 금액이 <strong>보증금 전액 반환에 가까운 수준</strong>이라면 합의를 고려할 수 있습니다. 다만 합의서 작성 시 "추가 민사 청구를 포기한다"는 조항이 포함될 수 있으니, 합의 조건을 꼼꼼히 확인하세요.',
      },
      {
        question: '전세사기 고소와 민사 소송을 동시에 할 수 있나요?',
        answer: '형사 고소와 민사 소송은 <strong>별개의 절차</strong>이므로 동시에 진행할 수 있습니다. 형사 고소로 수사 결과를 확보하면 민사 소송에서 유리한 증거로 활용할 수 있습니다.',
      },
      {
        question: '고소장 접수 후 수사가 안 진행되면 어떻게 하나요?',
        answer: '수사가 지연되면 <strong>담당 수사관에게 진행 상황을 확인</strong>하세요. 장기간 미진행 시 경찰청 민원이나 감사관실에 이의를 제기할 수 있고, 검찰에 직접 고소장을 제출하는 방법도 있습니다.',
      },
      {
        question: '전세사기 특별법 피해자로 인정받으면 어떤 혜택이 있나요?',
        answer: '전세사기 피해자로 인정되면 <strong>경매·공매 시 우선매수권, 긴급 주거지원, 금융지원</strong> 등을 받을 수 있습니다. 관할 지자체에 피해자 인정 신청서를 제출하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 첫 대응 체크리스트', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차 안내', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
    ],
  },
];
