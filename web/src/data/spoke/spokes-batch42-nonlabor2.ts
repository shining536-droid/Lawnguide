import { SpokePage } from '../spoke-pages';

// batch42 nonlabor2 11개: traffic-accident 5 + inheritance 4 + jeonse 2
// 1. 신호위반 사고 피해자의 합의 전 과실비율 협상 준비를 돕는 페이지다.
// 2. 후방 추돌 사고 피해자의 보험사 30% 과실 주장 반박 근거 확보를 돕는 페이지다.
// 3. 어린이보호구역 사고 가해자의 12대 중과실 대응과 형사처벌 감경 전략 수립을 돕는 페이지다.
// 4. 교통사고 피해자의 수리 후 차량 시세하락 손해배상 청구 절차를 돕는 페이지다.
// 5. 자전거·전동킥보드 사고 가해자·피해자의 보상 책임 범위 확인을 돕는 페이지다.
// 6. 상속인의 한정승인 vs 상속포기 선택 기준과 비교 판단을 돕는 페이지다.
// 7. 공동상속인의 상속재산분할협의서 누락·하자 점검과 무효 사유 대응을 돕는 페이지다.
// 8. 유류분권자의 생전 증여재산 합산 범위 산정과 반환청구 준비를 돕는 페이지다.
// 9. 유언장 위조를 의심하는 상속인의 검증·감정 절차 진행을 돕는 페이지다.
// 10. 임차인의 전세 만료 후 일부만 반환된 보증금 회수 대응을 돕는 페이지다.
// 11. 경매 개시된 전세 임차인의 우선변제권 신청과 배당요구 절차를 돕는 페이지다.

export const spokesBatch42Nonlabor2: SpokePage[] = [
  // ─── 1. traffic-accident / signal-violation-fault-negotiation ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-signal-violation-fault-negotiation',
    keyword: '신호위반 사고 과실비율 협상',
    questionKeyword: '신호위반 사고 합의하기 전에 과실비율은 어떻게 협상하나요?',
    ctaKeyword: '신호위반 사고 합의 전 과실비율 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '신호위반 사고 합의 전 과실비율 협상 5단계 | 로앤가이드',
      description:
        '신호위반 교통사고 피해자가 보험사 과실 제안을 받기 전에 확인해야 할 증거 5가지와 과실비율 협상 순서를 지금 확인하세요.',
    },
    intro:
      '<p>신호위반 차량과 충돌한 사고는 "상대 100%"로 보이지만 보험사는 "앞뒤 좌우 확인의무 위반"을 이유로 10~20% 과실을 주장하는 경우가 많습니다. 도로교통법 제5조는 신호기의 신호에 따를 의무를 규정해 신호위반은 명백한 과실이지만, 합의 전 블랙박스·CCTV·목격자 확보 여부에 따라 최종 비율이 크게 달라집니다.</p>',
    sections: [
      {
        title: '과실비율 기본 기준 — 신호위반 차량 원칙 100%',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 과실비율 인정기준은 신호위반 충돌 시 위반 차량 100%를 원칙으로 합니다.</strong></p>\n<ul>\n<li><strong>직진 vs 신호위반 좌회전</strong> — 직진 0%, 좌회전 100% (기본값).</li>\n<li><strong>직진 vs 신호위반 직진</strong> — 녹색신호 직진 0%, 적색신호 직진 100%.</li>\n<li><strong>감속 없는 과속 가중</strong> — 피해자가 과속한 경우 10~20% 과실 추가.</li>\n<li><strong>근거 조항</strong> — 도로교통법 제5조(신호 또는 지시에 따를 의무).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기본값은 신호위반 차량 100%지만 "전방주시 소홀"로 5~20% 떠맡게 되는 경우가 생깁니다.</blockquote>',
      },
      {
        title: '합의 전 확보할 증거 5가지',
        content:
          '<p><strong style="color:#1e3a5f">합의 전에 블랙박스·CCTV·신호주기 자료가 손에 있어야 협상력이 생깁니다.</strong></p>\n<ul>\n<li><strong>블랙박스 원본</strong> — 사고 전후 각 10초 포함, SD카드 원본 보관(덮어쓰기 방지).</li>\n<li><strong>교차로 CCTV</strong> — 경찰서 교통조사계 통해 신호체계·가동영상 요청.</li>\n<li><strong>신호주기 자료</strong> — 관할 구청·도로교통공단에 신호등 주기표 요청.</li>\n<li><strong>목격자 진술서</strong> — 연락처·사고당시 위치·진행방향 서명 확보.</li>\n<li><strong>경찰 교통사고사실확인원</strong> — 신호위반 기재 여부 필수 확인.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 과실비율 쟁점과 증거 점검을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보험사 과실 제안 반박 순서',
        content:
          '<p><strong style="color:#1e3a5f">보험사 과실 제안서를 받으면 즉답하지 말고 서면으로 근거 자료를 요청하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 과실비율산정근거 요청</strong> — 보험사에 서면으로 적용된 도표 번호·근거 판례 제출 요청.</li>\n<li><strong>2단계 — 손해보험협회 심의청구</strong> — 합의 전 "과실비율분쟁심의위원회" 무료 심의 가능.</li>\n<li><strong>3단계 — 민사소송 시 법원 감정</strong> — 심의 불복 시 민사소송에서 도로교통공단 감정 의뢰.</li>\n<li><strong>4단계 — 합의 금액 재산정</strong> — 과실비율 확정 후 치료비·위자료·향후치료비 재계산.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대인·대물 합의는 분리 가능합니다. 대물만 먼저 합의하고 대인은 치료 종결 후 처리하세요.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 서명 전 확인',
        content:
          '<p><strong style="color:#1e3a5f">합의서 서명은 이후 추가 청구를 막는 최종 단계입니다.</strong></p>\n<ul>\n<li><strong>후유증 유보 문구</strong> — "후유장해·향후치료비는 별도 청구" 명시.</li>\n<li><strong>형사합의 별도</strong> — 민사 합의서와 형사 처벌불원서는 분리 작성.</li>\n<li><strong>과실비율 명기</strong> — 합의서에 확정 과실비율 숫자 기재.</li>\n<li><strong>소멸시효</strong> — 사고일 기준 3년 내 민사청구, 합의 시 시효 연장 효과.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "일체의 청구권 포기" 문구가 있으면 후유증 발견 시 추가 청구가 봉쇄될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 신호 준수 차량의 주의의무 범위',
        summary:
          '대법원 2025다1049 사건(대법원, 2025.06.12 선고)에서 법원은 청색신호에 따라 진행하는 차량 운전자에게 교차로를 횡단하여 오는 차량이 있을 것을 예상하고 서행할 일반적 주의의무는 없다고 판시했습니다. 즉 신호 준수 차량의 과실을 쉽게 인정해서는 안 된다는 법리입니다.',
        takeaway:
          '신호 지킨 차량에 "전방주시 소홀" 떠넘기는 주장은 근거가 약합니다.',
      },
    ],
    faq: [
      {
        question: '보험사가 "피해자도 10% 과실"이라는데 받아야 하나요?',
        answer:
          '<strong>근거 자료를 서면으로 요청하세요.</strong> 과실비율산정근거가 약하면 과실비율분쟁심의위원회에 무료 심의를 청구할 수 있습니다.',
      },
      {
        question: '블랙박스가 없으면 신호위반 입증이 어려운가요?',
        answer:
          '<strong>교차로 CCTV와 신호주기 자료로 대체 가능합니다.</strong> 경찰서 교통조사계를 통해 CCTV 영상과 신호체계 자료를 요청하세요.',
      },
      {
        question: '경찰 사고조사에서 신호위반 기재 안 됐는데요?',
        answer:
          '<strong>사고사실확인원 정정을 서면으로 요청하세요.</strong> 블랙박스·CCTV를 첨부해 교통조사계에 재조사 요청하면 정정되는 경우가 많습니다.',
      },
      {
        question: '과실비율심의위원회는 어떻게 신청하나요?',
        answer:
          '<strong>손해보험협회 홈페이지에서 온라인 접수 가능하며 무료입니다.</strong> 결과는 1~2개월 내 서면 통보되고 보험사는 통상 이에 따릅니다.',
      },
      {
        question: '합의 후에도 과실비율 재조정이 가능한가요?',
        answer:
          '<strong>합의서에 "과실비율 확정"이 명시됐으면 원칙적으로 불가합니다.</strong> 다만 착오·기망 등 민법 제109조·제110조 사유가 있으면 취소 가능.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실비율 분쟁 대응', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '블랙박스 증거 활용법', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '교통사고 합의 전 준비사항', href: '/guide/traffic-accident/traffic-accident-settlement-before' },
      { label: '과실 분쟁 증거 수집', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '교차로 좌회전 과실비율', href: '/guide/traffic-accident/traffic-accident-intersection-left-turn' },
    ],
  },

  // ─── 2. traffic-accident / rear-end-30-percent-fault-rebuttal ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rear-end-30-percent-fault-rebuttal',
    keyword: '후방 추돌 30% 과실 반박',
    questionKeyword: '후방 추돌 당했는데 보험사가 30% 과실이라면 어떻게 반박하나요?',
    ctaKeyword: '후방 추돌 과실비율 반박 정리',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '후방 추돌 30% 과실 주장 반박 방법 3가지 | 로앤가이드',
      description:
        '후방 추돌 피해자가 보험사의 30% 과실 주장에 대응하는 증거 수집법과 심의위원회 활용 순서를 지금 확인하세요.',
    },
    intro:
      '<p>정차 중이거나 서행 중 뒤에서 받혔는데 보험사가 "급제동 과실" "미등 고장 과실" 등을 내세워 30% 과실을 주장하는 경우가 있습니다. 도로교통법 제19조 제1항은 안전거리 확보 의무를 뒤차에 부과해 후방 추돌은 원칙적으로 뒤차 100%지만, 피해자 측 가중 사유가 있으면 과실이 분배됩니다.</p>',
    sections: [
      {
        title: '후방 추돌 기본 과실 — 뒤차 100% 원칙',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 기준은 주행 중·정차 중 모두 뒤차 100%를 원칙으로 합니다.</strong></p>\n<ul>\n<li><strong>직진 중 추돌</strong> — 뒤차 100% (안전거리 미확보).</li>\n<li><strong>신호대기 정차 중 추돌</strong> — 뒤차 100%.</li>\n<li><strong>급정거 가중 사유</strong> — 앞차가 이유 없이 급정거 시 앞차 20~30% 가산.</li>\n<li><strong>미등 꺼짐 가중</strong> — 야간·터널에서 후미등 꺼짐 시 앞차 10~20% 가산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보험사가 주장하는 "30% 과실"은 통상 위 가중 사유가 근거이므로 이를 반박하면 0%로 되돌릴 수 있습니다.</blockquote>',
      },
      {
        title: '반박 증거 — 3가지 축으로 무력화',
        content:
          '<p><strong style="color:#1e3a5f">급정거 아님·등화 정상·회피 불가능 세 가지를 증거로 보여야 합니다.</strong></p>\n<ul>\n<li><strong>블랙박스 속도·제동 분석</strong> — 사고 직전 속도와 제동 시점 분석 (급제동 여부).</li>\n<li><strong>차량 점검 기록</strong> — 사고 전 최근 정비소 방문 기록(미등·브레이크 점검).</li>\n<li><strong>도로 상황 자료</strong> — 정체·신호대기 등 일반적 정지 사유 확인.</li>\n<li><strong>후방 CCTV</strong> — 도로 CCTV로 뒤차 차간거리·주의 여부 확인.</li>\n<li><strong>EDR 데이터</strong> — 사고기록장치(EDR)로 앞차 제동·속도 객관 입증.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 과실 반박 근거와 증거 리스트를 정리해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '협상 순서 — 심의위원회 우선 활용',
        content:
          '<p><strong style="color:#1e3a5f">보험사 재협의 → 과실비율분쟁심의위원회 → 소송 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보험사 서면 재요청</strong> — 30% 적용 근거(도표 번호·가중 사유) 서면 제출 요구.</li>\n<li><strong>2단계 — 증거 일괄 제출</strong> — 블랙박스 분석서·정비기록·CCTV를 보험사에 제출.</li>\n<li><strong>3단계 — 심의위원회 청구</strong> — 불복 시 손해보험협회 심의위원회에 무료 청구.</li>\n<li><strong>4단계 — 민사소송</strong> — 심의 결과도 불복하면 관할 법원 민사소송 제기.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 심의위원회 결정은 통상 보험사가 따르지만 피해자 보험사가 청구해야 효력이 큽니다.</blockquote>',
      },
      {
        title: '실무 주의점 — 서명 전 체크',
        content:
          '<p><strong style="color:#1e3a5f">합의 전에 과실 확정과 치료 종결 시점을 반드시 나눠 생각하세요.</strong></p>\n<ul>\n<li><strong>대인·대물 분리</strong> — 대물은 빠른 수리 위해 먼저, 대인은 치료 완료 후 합의.</li>\n<li><strong>렌트카 비용</strong> — 과실비율 따라 자부담 달라짐, 수리기간 7~14일 내 환원.</li>\n<li><strong>수리 견적서</strong> — 중고차 시세하락(격락손해)은 별도 청구 가능.</li>\n<li><strong>소멸시효</strong> — 3년 내 청구, 후유증은 증상 확정일부터.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 뒤차가 무보험·책임보험만인 경우 정부보장사업(손해보험협회) 청구를 검토해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 앞차 과실 인정의 엄격한 기준',
        summary:
          '대법원 2024다238217 사건(대법원, 2025.03.13 선고)에서 법원은 교통사고로 부상당한 피해자가 치료를 받는 것이 통상의 책임보험금에 관하여 예상하고 있는 자동차손해배상보장법 범위에 해당한다고 판시하며, 피해자의 과실 인정에는 명확한 근거가 필요함을 확인했습니다.',
        takeaway:
          '피해자 과실 30% 주장은 구체적 증거 없으면 배척될 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: '정차 중에 받혔는데도 과실을 받는 경우가 있나요?',
        answer:
          '<strong>예외적으로 5~20% 가산되는 경우가 있습니다.</strong> 불법주정차, 미등 꺼짐, 갓길 외 정차 등 구체적 가중 사유가 입증될 때입니다.',
      },
      {
        question: '급제동 주장에 어떻게 반박하나요?',
        answer:
          '<strong>블랙박스 속도 데이터와 EDR 분석이 가장 강력합니다.</strong> 정체·신호 등 일반적 정지 사유가 있었음을 영상으로 보여주면 충분합니다.',
      },
      {
        question: '심의위원회 청구는 얼마나 걸리나요?',
        answer:
          '<strong>평균 45~60일 내 결과가 나옵니다.</strong> 청구 수수료는 무료이고 결정서가 서면으로 통보됩니다.',
      },
      {
        question: '수리비 외에 차량 시세 하락도 청구되나요?',
        answer:
          '<strong>"격락손해"로 별도 청구 가능합니다.</strong> 사고일 기준 출고 2년 이내·수리비 차량가액 20% 이상인 경우가 기준입니다.',
      },
      {
        question: '뒤차 운전자가 합의 안 해주면요?',
        answer:
          '<strong>보험사 대인·대물 청구는 가해자 합의와 무관하게 진행됩니다.</strong> 형사합의는 별개이며 처벌불원서 작성은 선택입니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실비율 분쟁 대응', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 증거 수집 가이드', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '블랙박스 활용법', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '교통사고 보험 청구 종합', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '과실 분쟁 심의위원회', href: '/guide/traffic-accident/traffic-accident-fault-commission' },
    ],
  },

  // ─── 3. traffic-accident / school-zone-criminal-response ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-zone-criminal-response',
    keyword: '어린이보호구역 사고 형사처벌',
    questionKeyword: '어린이보호구역에서 사고 냈는데 형사처벌 피할 수 있나요?',
    ctaKeyword: '어린이보호구역 사고 형사대응 정리',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '어린이보호구역 사고 형사처벌 대응 5가지 | 로앤가이드',
      description:
        '어린이보호구역 사고 가해자가 민식이법 적용 여부와 처벌 감경 요소, 합의·반성 자료 준비 순서를 지금 확인하세요.',
    },
    intro:
      '<p>어린이보호구역에서 아이를 다치게 했다면 "민식이법"으로 불리는 특정범죄가중처벌법 제5조의13이 적용될 가능성을 먼저 확인해야 합니다. 혐의를 받고 있다면 단순 교통사고와 달리 1년 이상 15년 이하 징역 또는 500만 원 이상 3천만 원 이하 벌금이라는 무거운 법정형이 따르므로 초기 대응이 결정적입니다.</p>',
    sections: [
      {
        title: '민식이법 적용 요건 확인',
        content:
          '<p><strong style="color:#1e3a5f">세 가지 요건 모두 충족해야 특가법이 적용됩니다.</strong></p>\n<ul>\n<li><strong>장소</strong> — 도로교통법 제12조 어린이보호구역(스쿨존) 내일 것.</li>\n<li><strong>피해자</strong> — 만 13세 미만 어린이일 것.</li>\n<li><strong>행위</strong> — 제한속도(시속 30km) 초과 또는 안전운전 의무 위반일 것.</li>\n<li><strong>결과</strong> — 상해(1년 이상 15년 이하) 또는 사망(무기 또는 3년 이상).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 30km 이내·안전운전 준수였다면 일반 교통사고처리특례법으로 처리될 수 있습니다.</blockquote>',
      },
      {
        title: '초기 대응 순서 — 조사 전 준비',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사 전에 블랙박스·속도 자료·사고 지점 현황을 먼저 정리하세요.</strong></p>\n<ul>\n<li><strong>블랙박스·EDR 확보</strong> — 속도·제동·조향 객관 데이터, 30km 이하 입증 시 결정적.</li>\n<li><strong>스쿨존 표지·신호 확인</strong> — 표지 가림·파손·신호기 고장이면 과실 감경.</li>\n<li><strong>어린이 돌발 행동 증거</strong> — 보호자 부주의·갑작스런 도로 진입 영상.</li>\n<li><strong>피해자 측 연락</strong> — 변호사 선임 후 접촉, 치료비 선지급 검토.</li>\n<li><strong>진술 전 변호사 선임</strong> — 피의자 신분 조사 전 필수.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 민식이법 적용 여부와 감경 요소를 점검해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '감경 요소 — 실형 피하는 5가지',
        content:
          '<p><strong style="color:#1e3a5f">헌재 결정·대법원 양형기준상 감경 요소를 최대한 쌓아야 집행유예가 가능합니다.</strong></p>\n<ol>\n<li><strong>신속한 합의·피해 회복</strong> — 치료비·위자료 전액 선지급 후 합의서.</li>\n<li><strong>초범·전과 없음</strong> — 형사처벌 전력 없음 증빙.</li>\n<li><strong>과실 경미</strong> — 30km 준수·전방주시 증빙(블랙박스).</li>\n<li><strong>성실 근무·부양 가족</strong> — 재직증명서·가족관계증명서 제출.</li>\n<li><strong>반성문·탄원서</strong> — 자필 반성문 + 직장·지역 탄원서 20장 이상 권장.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 2022년 헌재 2021헌가30 합헌 이후에도 법원은 양형에 과실 경중·피해 회복을 크게 반영합니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 불기소·집행유예 목표',
        content:
          '<p><strong style="color:#1e3a5f">피해 정도와 과실 경중에 따라 처분 범위가 달라집니다.</strong></p>\n<ul>\n<li><strong>경상·합의</strong> — 기소유예 또는 약식기소 가능.</li>\n<li><strong>중상·합의</strong> — 집행유예 가능성 높음(초범·30km 준수 시).</li>\n<li><strong>중상·미합의</strong> — 실형 가능성 상당.</li>\n<li><strong>사망·합의</strong> — 집행유예도 어려움, 최소 법정형(3년) 양형 목표.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자동차 종합보험 가입으로도 특가법은 면책되지 않습니다. 형사는 별도 대응 필요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 스쿨존 횡단 어린이 주의의무',
        summary:
          '대법원 2025다1049 사건(대법원, 2025.06.12 선고)에서 법원은 일방통행 도로를 운행하는 차량의 운전자에게 교차로를 횡단하여 오는 차량이 있을 것을 예상하고 서행할 일반적 주의의무가 있는지 판시하며, 어린이보호구역처럼 어린이의 돌발 출현이 예상되는 구역에서는 운전자의 주의의무가 가중된다고 확인했습니다.',
        takeaway:
          '스쿨존은 어린이 출현을 "예상해야 하는" 구역이라 감속·주의가 필수입니다.',
      },
    ],
    faq: [
      {
        question: '제한속도 30km를 지켰는데도 처벌받나요?',
        answer:
          '<strong>30km 이하 주행이면 민식이법 적용 요건 중 "속도 위반"이 없어 일반 교통사고처리특례법으로 처리됩니다.</strong> 블랙박스·EDR로 입증하세요.',
      },
      {
        question: '합의가 꼭 필요한가요?',
        answer:
          '<strong>필수는 아니지만 합의 여부가 양형에 결정적입니다.</strong> 치료비 선지급과 처벌불원서가 있으면 집행유예 가능성이 크게 올라갑니다.',
      },
      {
        question: '종합보험에 들어있으면 형사 면책되나요?',
        answer:
          '<strong>민식이법(특가법) 대상 사고는 종합보험으로도 형사 면책되지 않습니다.</strong> 교통사고처리특례법 제3조 제2항 단서에 해당.',
      },
      {
        question: '아이가 갑자기 도로로 뛰어든 경우도 처벌되나요?',
        answer:
          '<strong>운전자 과실이 없으면 불기소도 가능합니다.</strong> 돌발 행동·보호자 부주의 증거가 핵심이고 블랙박스가 결정적 자료입니다.',
      },
      {
        question: '초범인데 실형 가능성은?',
        answer:
          '<strong>경상·합의·초범·과실 경미 조건이면 집행유예 가능성이 큽니다.</strong> 사망사고는 합의해도 실형 가능성이 여전히 있어 변호사 선임이 필수입니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 형사·민사 분리 대응', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '차선위반 형사처벌', href: '/guide/traffic-accident/traffic-accident-lane-violation-criminal-penalty' },
      { label: '어린이 보행자 사고 청구', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim' },
      { label: '블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '교통사고 합의 전 체크', href: '/guide/traffic-accident/traffic-accident-settlement-before' },
    ],
  },

  // ─── 4. traffic-accident / diminished-value-claim-procedure ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-diminished-value-claim-procedure',
    keyword: '차량 시세하락 손해배상',
    questionKeyword: '수리했는데 차값 떨어진 손해는 어떻게 받나요?',
    ctaKeyword: '시세하락 손해 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '차량 시세하락 손해배상 청구 4단계 | 로앤가이드',
      description:
        '교통사고 후 수리해도 떨어진 차량 시세(격락손해) 청구 요건과 금액 산정, 보험사 거부 시 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>사고 난 차량은 완벽하게 수리해도 중고차 시장에서 "사고차"로 분류돼 시세가 떨어집니다. 민법 제393조에 따르면 수리 후에도 남는 교환가치 감소분은 "격락손해"로 불법행위 손해배상의 범위에 포함되며, 자동차손해배상보장법 시행령 제3조도 이를 인정합니다.</p>',
    sections: [
      {
        title: '격락손해 인정 요건 3가지',
        content:
          '<p><strong style="color:#1e3a5f">모두 충족해야 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>차량 연식</strong> — 출고 후 5년 이내 (손해보험협회 기준은 2년 이내 엄격).</li>\n<li><strong>수리비 비율</strong> — 차량가액의 20% 이상 수리비 발생.</li>\n<li><strong>주요 골격 손상</strong> — 후레임·사이드멤버·필러 등 주요 구조 손상 수리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 범퍼·도어 교체만으론 부족하고 "구조적 손상+수리"가 입증돼야 합니다.</blockquote>',
      },
      {
        title: '금액 산정 — 감정평가 기준',
        content:
          '<p><strong style="color:#1e3a5f">시세 하락액은 전문 감정으로 입증하는 게 원칙입니다.</strong></p>\n<ul>\n<li><strong>보험사 내부 기준</strong> — 출고 1년 이내 수리비의 15~20%, 2년 이내 10~15%.</li>\n<li><strong>감정평가사 의뢰</strong> — 한국자동차진단보증협회 감정 15~40만 원.</li>\n<li><strong>중고차 시세 비교</strong> — KB차차차·엔카·보배드림 동일 차종 사고·무사고 가격 차이.</li>\n<li><strong>법원 감정</strong> — 소송 시 법원이 감정인 지정, 비용 50~200만 원(패소자 부담).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 격락손해 요건과 금액 추정을 도와드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 절차 — 4단계',
        content:
          '<p><strong style="color:#1e3a5f">보험사 청구 → 재심의 → 소액소송 순으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 수리 견적·명세서 확보</strong> — 수리공장 정비내역서(파손부위·수리방법) 수령.</li>\n<li><strong>2단계 — 보험사 청구</strong> — 가해자 보험사에 "시세하락 손해" 별도 항목으로 청구.</li>\n<li><strong>3단계 — 감정평가 의뢰</strong> — 보험사 거부 시 감정평가서 첨부해 재청구.</li>\n<li><strong>4단계 — 소액 민사</strong> — 3천만 원 이하면 소액심판, 1회 기일로 종결 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대물합의서에 "격락손해 유보" 문구가 없으면 추후 청구가 막힐 수 있습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 합의 전 주의',
        content:
          '<p><strong style="color:#1e3a5f">합의서 작성 전에 격락손해 유보 문구를 반드시 넣으세요.</strong></p>\n<ul>\n<li><strong>유보 문구</strong> — "수리비 외 시세하락 손해는 별도 청구" 명시.</li>\n<li><strong>소멸시효</strong> — 사고일 기준 3년 내 청구.</li>\n<li><strong>리스·렌탈 차량</strong> — 소유주(리스사·렌탈사)가 청구권자, 계약서 확인.</li>\n<li><strong>할증 피하기</strong> — 가해자 보험사 대물만 청구, 피해자 보험 할증 무관.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 일반 종합합의서는 "일체 청구권 포기" 조항이 있어 격락손해도 차단될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 격락손해의 손해배상 범위',
        summary:
          '대법원 2024다272941 사건(대법원, 2025.01.09 선고)에서 법원은 자동차 충돌로 발생한 손해배상이 통상의 책임보험금과 사고 결과 사이에 인과관계가 단절되지 않는다는 원칙을 확인하며, 수리 후 남은 교환가치 감소도 배상 범위에 포함된다는 법리를 유지했습니다.',
        takeaway:
          '수리비로 끝이 아니라 "시장 평가 하락"도 손해로 인정됩니다.',
      },
    ],
    faq: [
      {
        question: '출고 3년 된 차도 시세하락 청구되나요?',
        answer:
          '<strong>법원 실무상 5년 이내까지는 가능하지만 감정이 엄격해집니다.</strong> 3년 차는 수리비 25% 이상·주요 골격 손상이면 인정 사례 다수.',
      },
      {
        question: '보험사가 "시세하락은 지급 불가"라는데요?',
        answer:
          '<strong>내부 규정일 뿐 판례는 인정합니다.</strong> 감정평가서를 첨부해 재청구하거나 바로 소액 민사소송으로 진행하세요.',
      },
      {
        question: '수리공장에서 "완벽 복원"이라는데 왜 떨어지죠?',
        answer:
          '<strong>중고차 시장은 보험이력(자차 처리 기록)만 있어도 사고차로 분류합니다.</strong> 물리적 복원과 무관하게 시세가 떨어집니다.',
      },
      {
        question: '감정평가비는 누가 내나요?',
        answer:
          '<strong>원칙적으로 청구자 선불이지만 승소 시 가해자 보험사가 지급합니다.</strong> 소액심판에서도 감정비는 판결 시 부담 주체가 지정됩니다.',
      },
      {
        question: '렌트·리스 차량도 청구되나요?',
        answer:
          '<strong>차량 소유권이 리스사·렌탈사에 있으므로 그쪽이 청구권자입니다.</strong> 운전자는 소유주를 통해 손해를 전가받는 구조입니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 손해배상 계산', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '보험 청구 종합 가이드', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
      { label: '자영업자 소득상실 청구', href: '/guide/traffic-accident/traffic-accident-lost-wage-self-employed' },
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-before' },
    ],
  },

  // ─── 5. traffic-accident / bicycle-escooter-liability-range ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-escooter-liability-range',
    keyword: '자전거 전동킥보드 사고 보상',
    questionKeyword: '자전거·전동킥보드 사고 나면 보상은 어떻게 되나요?',
    ctaKeyword: '자전거 전동킥보드 사고 책임 정리',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '자전거·전동킥보드 사고 보상 책임 5가지 | 로앤가이드',
      description:
        '자전거와 전동킥보드 사고의 법적 지위 차이와 보상 방법, 보험 가입 여부별 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>자전거와 전동킥보드(개인형 이동장치, PM)는 법적 지위와 보상 구조가 다릅니다. 도로교통법 제2조 제21호의2는 전동킥보드를 "원동기장치자전거"로 분류해 자동차 의무보험이 없어도 민·형사 책임이 발생하며, 자전거는 도로교통법상 "차마"에 해당해 차 대 차 기준이 적용됩니다.</p>',
    sections: [
      {
        title: '법적 지위 차이 — 자전거 vs 전동킥보드',
        content:
          '<p><strong style="color:#1e3a5f">두 기구는 법적으로 완전히 다른 범주입니다.</strong></p>\n<ul>\n<li><strong>자전거</strong> — 도로교통법 "차마", 면허·보험 의무 없음, 도로 우측통행.</li>\n<li><strong>전동킥보드(PM)</strong> — "원동기장치자전거", 16세 이상 면허 필요, 헬멧 의무, 자전거도로 통행.</li>\n<li><strong>최고속도</strong> — PM 25km/h 이하로 제한, 초과 시 차량 취급.</li>\n<li><strong>보험 의무</strong> — 자동차 의무보험 대상 아님(2024년 기준).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보행자 사고 시 PM은 "차 대 사람" 기준(높은 과실), 자전거는 차마 기준이 적용됩니다.</blockquote>',
      },
      {
        title: '사고 유형별 보상 구조',
        content:
          '<p><strong style="color:#1e3a5f">가해·피해 관계에 따라 청구 경로가 달라집니다.</strong></p>\n<ul>\n<li><strong>자전거 vs 자동차</strong> — 자전거가 피해자면 자동차 보험사 대인·대물 청구.</li>\n<li><strong>전동킥보드 vs 보행자</strong> — PM이 가해자면 개인배상책임보험·PM 공유사 보험 확인.</li>\n<li><strong>자전거 vs 보행자</strong> — 자전거 가해자 무보험 시 개인배상책임보험(일상생활배상) 활용.</li>\n<li><strong>자전거 vs 자전거</strong> — 양측 개인보험 확인, 없으면 민사소송.</li>\n<li><strong>무보험 PM</strong> — 개인재산 추심, 운전자 미성년이면 부모 감독자 책임(민법 제755조).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 유형별 보상 경로와 보험 활용을 정리해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '활용 가능한 보험 — 꼭 확인할 것',
        content:
          '<p><strong style="color:#1e3a5f">본인 가입 보험에 이미 포함된 특약이 많습니다.</strong></p>\n<ol>\n<li><strong>일상생활배상책임 특약</strong> — 자전거·PM 가해자 대인·대물 1~3억 원 한도.</li>\n<li><strong>자전거 보험</strong> — 지자체 단체보험(서울·부산 등) 자동가입 여부 확인.</li>\n<li><strong>PM 공유사 보험</strong> — 씽씽·킥고잉 등 업체별 대인·대물 책임 한도 확인.</li>\n<li><strong>개인형이동장치보험</strong> — 월 1만 원대, 가해자·피해자 양방향 보상.</li>\n<li><strong>건강보험</strong> — 피해자 치료비는 일단 건강보험 적용 후 가해자에 구상.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 서울시는 2018년부터 모든 시민 자동가입 "자전거 보험" 운영 중, 사고 시 1~2천만 원 보상.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 사고 직후',
        content:
          '<p><strong style="color:#1e3a5f">자동차 사고와 동일하게 경찰 신고와 증거 확보가 기본입니다.</strong></p>\n<ul>\n<li><strong>112 신고</strong> — 인적 피해 있으면 반드시 신고, 뺑소니 방지.</li>\n<li><strong>상대 신원 확보</strong> — 연락처·사진·PM 번호(공유 PM은 앱 기록).</li>\n<li><strong>병원 진료</strong> — 통증 없어도 24시간 내 진료, 상해진단서 확보.</li>\n<li><strong>CCTV 보존 요청</strong> — 24~72시간 내 도로·주변 상가 CCTV 보존 요청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: PM은 음주운전·무면허·헬멧 미착용 시 과실 가중, 처벌 가중도 있으니 주의하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보행자 통행 방해 차량의 주의의무',
        summary:
          '대법원 2024다15542 사건(대법원, 2025.03.13 선고)에서 법원은 보행자가 보행자의 이동을 위해서 보행자용 통로를 통행하는 도중 또는 그에 준하게 통행할 때 운전자가 보행자의 안전에 관련된 사정을 주의해야 한다는 법리를 재확인했습니다. 자전거·PM 운전자에게도 동일한 주의의무가 적용됩니다.',
        takeaway:
          'PM·자전거 운전자도 보행자 안전 주의의무를 부담합니다.',
      },
    ],
    faq: [
      {
        question: '전동킥보드 타다가 보행자를 쳤는데 형사처벌되나요?',
        answer:
          '<strong>PM은 원동기장치자전거로 교통사고처리특례법 적용 대상입니다.</strong> 12대 중과실(무면허·음주 등)이면 종합보험이 있어도 기소됩니다.',
      },
      {
        question: '공유 PM 빌려서 사고 냈는데 업체가 책임지나요?',
        answer:
          '<strong>공유사 약관상 운전자가 주책임, 업체는 보조책임입니다.</strong> 다만 일부 공유사는 대인·대물 책임보험에 자동 가입해줍니다.',
      },
      {
        question: '자전거에 치였는데 상대가 무보험이에요.',
        answer:
          '<strong>상대방 일상생활배상책임특약 가입 여부를 먼저 확인하세요.</strong> 없으면 민사소송 또는 본인 무보험상해 특약으로 청구 가능.',
      },
      {
        question: '미성년자 PM 사고는 누가 책임지나요?',
        answer:
          '<strong>미성년 운전자는 책임능력 판단에 따라 달라집니다.</strong> 통상 부모가 감독자 책임(민법 제755조)을 져 피해자에 배상합니다.',
      },
      {
        question: '헬멧 안 썼는데 과실이 늘어나나요?',
        answer:
          '<strong>머리 부상 부분에 한해 10~20% 과실 가산 가능성이 있습니다.</strong> 도로교통법 제50조 제4항 위반으로 범칙금도 2만 원.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '전동킥보드 책임 범위', href: '/guide/traffic-accident/traffic-accident-electric-scooter-liability' },
      { label: '자전거 vs 자동차 사고', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
      { label: '자전거 보상 전반', href: '/guide/traffic-accident/traffic-accident-bicycle-compensation' },
      { label: '보행자·자전거 충돌', href: '/guide/traffic-accident/traffic-accident-bike-pedestrian-collision' },
      { label: '전동킥보드 충돌 대응', href: '/guide/traffic-accident/traffic-accident-electric-scooter-collision-response' },
    ],
  },

  // ─── 6. inheritance / limited-acceptance-vs-renunciation-choice ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-vs-renunciation-choice',
    keyword: '한정승인 상속포기 선택',
    questionKeyword: '한정승인과 상속포기 중 어떤 걸 선택해야 하나요?',
    ctaKeyword: '한정승인 상속포기 비교 정리',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '한정승인 vs 상속포기 선택 기준 5가지 | 로앤가이드',
      description:
        '상속 빚이 있을 때 한정승인과 상속포기 중 어느 쪽이 유리한지 자산·가족 관계별 선택 기준을 지금 확인하세요.',
    },
    intro:
      '<p>상속재산보다 빚이 많을 때 피해야 할 최악은 "단순승인으로 빚까지 떠안는 것"입니다. 민법 제1019조는 3개월 내 한정승인·상속포기 중 하나를 선택하도록 규정하지만, 어느 쪽을 선택하느냐에 따라 후순위 상속인(형제·조카)에게 빚이 넘어갈지가 결정됩니다.</p>',
    sections: [
      {
        title: '두 제도 기본 차이',
        content:
          '<p><strong style="color:#1e3a5f">한정승인은 "재산 범위 내 책임", 상속포기는 "처음부터 상속인 아님"입니다.</strong></p>\n<ul>\n<li><strong>한정승인</strong> — 상속재산 한도에서 채무 변제, 본인 고유재산은 보호.</li>\n<li><strong>상속포기</strong> — 상속인 지위 자체를 버림, 후순위로 상속권 이전.</li>\n<li><strong>공통점</strong> — 피상속인 사망·상속 개시 안 날로부터 3개월 내 가정법원 신고.</li>\n<li><strong>차이점</strong> — 한정승인은 재산 받지만, 상속포기는 전혀 안 받음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가족 구성원이 많을수록 상속포기만 하면 빚이 형제·조카·외가까지 순차 이동합니다.</blockquote>',
      },
      {
        title: '선택 기준 5가지',
        content:
          '<p><strong style="color:#1e3a5f">상황에 따라 최적 선택이 달라집니다.</strong></p>\n<ul>\n<li><strong>재산보다 빚이 명백히 많음</strong> → 한정승인 우선(후순위 영향 차단).</li>\n<li><strong>재산 vs 빚 불명확</strong> → 특별한정승인 검토(사후 빚 발견 시).</li>\n<li><strong>형제·조카 많음</strong> → 대표자 한정승인 + 나머지 상속포기 조합.</li>\n<li><strong>가업·주택 승계 의사</strong> → 한정승인(재산 받되 채무 정리).</li>\n<li><strong>피상속인과 관계 단절</strong> → 전원 상속포기 + 미성년 자녀도 포기.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 가족 구성과 자산·부채 상황에 맞는 선택을 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '가장 흔한 실수 — 상속포기만 하기',
        content:
          '<p><strong style="color:#1e3a5f">상속포기는 빚을 없애는 게 아니라 옆으로 미는 제도입니다.</strong></p>\n<ol>\n<li><strong>1순위 포기</strong> → 2순위(직계존속) → 3순위(형제자매) → 4순위(4촌 이내 방계) 순 이동.</li>\n<li><strong>대표적 상황</strong> — 자녀 포기 시 부모 또는 조부모로 빚이 이전.</li>\n<li><strong>해결책</strong> — 1순위 상속인 중 한 명이 한정승인, 나머지는 상속포기.</li>\n<li><strong>미성년 자녀 주의</strong> — 자녀도 1순위, 친권자가 대리 신고 필요(법원 허가).</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "배우자 한정승인 + 자녀 상속포기" 조합이 가장 자주 쓰입니다(자녀 보호 + 후순위 차단).</blockquote>',
      },
      {
        title: '실무 절차 — 3개월 내 신고',
        content:
          '<p><strong style="color:#1e3a5f">상속 개시 안 날로부터 3개월이 마지노선입니다.</strong></p>\n<ul>\n<li><strong>제출 법원</strong> — 피상속인 최후 주소지 관할 가정법원.</li>\n<li><strong>필수 서류</strong> — 사망진단서, 제적·가족관계증명서, 상속재산목록, 인감증명.</li>\n<li><strong>한정승인 고유</strong> — 5일 이내 신문 공고(관보·일간신문).</li>\n<li><strong>비용</strong> — 인지대·공고료 포함 30~60만 원 수준.</li>\n<li><strong>특별한정승인</strong> — 3개월 초과 시 "중대 과실 없이 몰랐다" 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3개월 내 아무것도 안 하면 "단순승인"으로 간주돼 본인 재산까지 집행당할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속 채권자 취소권',
        summary:
          '대법원 2025다212863 사건(대법원, 2025.12.11 선고)에서 법원은 상속채권자의 채권자취소권 행사가 가능한지에 관하여 공동상속인 중 일부가 상속재산분할협의로 채권자를 해하는 행위를 한 경우 나머지 상속인에 대한 사해행위 취소가 가능함을 확인했습니다. 한정승인·상속포기 선택도 채권자 보호와 연계됨을 시사합니다.',
        takeaway:
          '상속 선택은 채권자 권리까지 영향 주므로 법률 검토가 필수입니다.',
      },
    ],
    faq: [
      {
        question: '한정승인·상속포기 둘 다 3개월 넘으면 어떻게 되나요?',
        answer:
          '<strong>"단순승인" 간주돼 빚 전액 본인 재산으로 변제해야 합니다.</strong> 다만 "중대 과실 없이 채무 초과 몰랐다"면 특별한정승인(민법 제1019조 제3항) 가능.',
      },
      {
        question: '자녀만 상속포기하면 빚이 어디로 가나요?',
        answer:
          '<strong>피상속인의 직계존속(부모·조부모)에게 이전됩니다.</strong> 그래서 자녀 포기 시 배우자 한정승인 + 자녀 상속포기 조합이 안전합니다.',
      },
      {
        question: '한정승인 후 재산이 많이 남으면 되돌려받나요?',
        answer:
          '<strong>변제 후 남는 재산은 한정승인자가 가집니다.</strong> 따라서 자산이 빚보다 많으면 한정승인이 불리할 수 있습니다(단순승인보다 절차 복잡).',
      },
      {
        question: '미성년 자녀 대신 상속포기할 수 있나요?',
        answer:
          '<strong>친권자가 대리 신고 가능하지만 가정법원 허가가 필요할 수 있습니다.</strong> 친권자 본인도 상속인인 경우 이해충돌로 특별대리인 선임 필수.',
      },
      {
        question: '한정승인 공고를 안 하면 어떻게 되나요?',
        answer:
          '<strong>공고 누락 시 미처 신고 못한 채권자에 대한 책임이 일부 남을 수 있습니다.</strong> 민법 제1032조·제1033조에 따라 공고는 필수 절차입니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '한정승인 vs 상속포기 비교', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
      { label: '한정승인 준비서류', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '미성년 자녀 상속포기', href: '/guide/inheritance/inheritance-minor-child-renounce-procedure' },
      { label: '상속포기 기한 주의', href: '/guide/inheritance/inheritance-renunciation-deadline' },
      { label: '특별한정승인 3개월 기산', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
    ],
  },

  // ─── 7. inheritance / division-agreement-defect-invalidation ───
  {
    domain: 'inheritance',
    slug: 'inheritance-division-agreement-defect-invalidation',
    keyword: '상속재산분할협의서 무효',
    questionKeyword: '상속재산분할협의서에 빠진 재산·상속인이 있으면 무효인가요?',
    ctaKeyword: '분할협의서 무효 사유 정리',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '상속재산분할협의서 무효 사유 4가지 | 로앤가이드',
      description:
        '상속재산분할협의서에서 상속인·재산 누락, 서명 위조 등 무효 사유를 확인하고 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>상속재산분할협의서는 모든 공동상속인의 합의가 있어야 성립하는 "전원합의" 계약입니다. 민법 제1013조는 공동상속인의 협의로 분할한다고 규정해 한 명이라도 빠지면 원칙적으로 전체가 무효이며, 재산을 누락하거나 서명이 위조됐으면 이의를 제기할 수 있습니다.</p>',
    sections: [
      {
        title: '주요 무효·취소 사유 4가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 중 하나만 해당해도 무효 또는 취소 주장이 가능합니다.</strong></p>\n<ul>\n<li><strong>상속인 누락</strong> — 혼외자·인지된 자녀·재혼 배우자 누락 시 전체 무효.</li>\n<li><strong>재산 누락</strong> — 숨긴 부동산·예금 발견 시 그 부분 추가 분할 가능.</li>\n<li><strong>서명·인감 위조</strong> — 상속인 동의 없이 작성 시 문서 자체 효력 없음.</li>\n<li><strong>기망·강박</strong> — 재산 가액 속임, 강압으로 서명하면 민법 제110조 취소권.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "일부 재산만 분할"은 유효하지만 "일부 상속인만 서명"은 전체가 무효입니다.</blockquote>',
      },
      {
        title: '대응 순서 — 내용증명부터',
        content:
          '<p><strong style="color:#1e3a5f">무효 주장은 서면 통지 → 가사조정 → 소송 순으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명</strong> — 협의서 작성자·다른 상속인에게 무효 사유와 재협의 요청 통지.</li>\n<li><strong>2단계 — 가사조정 신청</strong> — 관할 가정법원에 상속재산분할조정 신청(필수적 전치 절차).</li>\n<li><strong>3단계 — 가사소송</strong> — 조정 불성립 시 가사비송으로 상속재산분할심판 청구.</li>\n<li><strong>4단계 — 부동산 가처분</strong> — 명의이전 방지 위해 처분금지가처분 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 협의서 하자 요건과 대응 순서를 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 — 누락·위조 입증',
        content:
          '<p><strong style="color:#1e3a5f">상속인 누락·재산 누락·서명 위조는 각각 증거 종류가 다릅니다.</strong></p>\n<ul>\n<li><strong>상속인 누락 입증</strong> — 제적·가족관계증명서, 인지판결문, 혼외자 출생신고서.</li>\n<li><strong>재산 누락 입증</strong> — 예금계좌조회(금감원), 부동산 등기부, 주식·펀드 조회.</li>\n<li><strong>서명 위조 입증</strong> — 필적감정(법원 감정인), 인감증명 발급일 대조.</li>\n<li><strong>기망·강박 입증</strong> — 녹취, 문자·메신저 대화, 목격자 진술.</li>\n<li><strong>안심상속 원스톱</strong> — 행정안전부 상속재산 일괄조회 서비스 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산 누락이 의심되면 금감원 "상속인 금융거래 조회"와 "안심상속 원스톱"을 먼저 이용하세요.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 시효와 영향',
        content:
          '<p><strong style="color:#1e3a5f">취소권 행사 시한과 제3자 보호를 동시에 고려해야 합니다.</strong></p>\n<ul>\n<li><strong>취소권 시효</strong> — 착오·기망 안 날로부터 3년, 계약일로부터 10년.</li>\n<li><strong>제3자 이전 시</strong> — 선의·무과실 제3자에 대항 어려움, 빠른 가처분 필수.</li>\n<li><strong>부동산 명의이전</strong> — 등기 완료 전이면 경정등기, 후면 말소소송.</li>\n<li><strong>예금 인출</strong> — 부당이득반환청구로 회수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재협의 합의만으로 등기가 자동 변경되지 않습니다. 경정등기·말소등기 절차를 밟아야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 분할협의 하자의 사해행위 취소',
        summary:
          '대법원 2025다212863 사건(대법원, 2025.12.11 선고)에서 법원은 공동상속인 중 일부가 상속재산분할협의로 채권자를 해하는 행위를 한 경우 상속채권자의 채권자취소권 행사가 가능하다고 판시했습니다. 분할협의의 하자·기망이 개입된 경우에도 동일한 법리가 적용될 여지가 큽니다.',
        takeaway:
          '분할협의는 상속인끼리는 물론 채권자도 취소를 구할 수 있는 계약입니다.',
      },
    ],
    faq: [
      {
        question: '20년 전 분할협의서도 무효 주장이 가능한가요?',
        answer:
          '<strong>서명 위조·상속인 누락 등 원시적 무효 사유는 제척기간이 없습니다.</strong> 다만 착오·기망 취소는 안 날 3년·계약일 10년 한계가 있습니다.',
      },
      {
        question: '혼외자가 뒤늦게 인지됐으면 협의서는 어떻게 되나요?',
        answer:
          '<strong>민법 제1014조에 따라 가액 지급 청구로 해결합니다.</strong> 이미 분할된 재산은 되돌리지 않고 지분 상당액을 다른 상속인들이 금전으로 지급.',
      },
      {
        question: '해외 거주 상속인이 서명 없이 진행됐으면요?',
        answer:
          '<strong>상속인 전원 서명이 없으면 전체 무효입니다.</strong> 해외 상속인은 영사관 공증 또는 재외국민 인감 사용이 가능합니다.',
      },
      {
        question: '재산 누락 발견 시 전체 다시 해야 하나요?',
        answer:
          '<strong>누락된 재산만 추가 분할하면 됩니다.</strong> 민법 제1015조 제3항에 따라 발견된 부분에 한해 새 협의 또는 심판으로 나눌 수 있습니다.',
      },
      {
        question: '가사조정 없이 바로 소송되나요?',
        answer:
          '<strong>가사소송법 제50조에 따라 조정 전치가 원칙입니다.</strong> 조정 신청 없이 바로 심판 청구하면 법원이 조정 회부할 수 있습니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속 숨은 재산 추가 분할', href: '/guide/inheritance/inheritance-hidden-asset-additional-division' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '상속 분할 조정 절차', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '상속 분쟁 어디부터', href: '/guide/inheritance/inheritance-dispute-where-to-start' },
      { label: '유언장 효력 다툼', href: '/guide/inheritance/inheritance-will-validity-dispute' },
    ],
  },

  // ─── 8. inheritance / forced-share-gift-calculation-scope ───
  {
    domain: 'inheritance',
    slug: 'inheritance-forced-share-gift-calculation-scope',
    keyword: '유류분 증여재산 합산',
    questionKeyword: '유류분 계산할 때 생전 증여재산은 어디까지 합산되나요?',
    ctaKeyword: '유류분 증여 합산 범위 정리',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '유류분 증여 합산 범위 4가지 기준 | 로앤가이드',
      description:
        '유류분 반환청구에서 10년 전 증여, 공동상속인 증여, 제3자 증여 합산 기준과 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>유류분은 상속인이 법률상 최소한 받을 수 있는 상속분으로, 민법 제1112조부터 제1118조에 규정돼 있습니다. 2024년 헌재 2020헌가4 결정 이후 유류분 제도는 일부 변화가 있지만 공동상속인에게 한 생전 증여는 시기 제한 없이 합산된다는 원칙은 유지되므로 증여 범위 확인이 핵심입니다.</p>',
    sections: [
      {
        title: '합산 기본 원칙 — 2024 헌재 결정 반영',
        content:
          '<p><strong style="color:#1e3a5f">증여 상대방과 시기에 따라 합산 여부가 달라집니다.</strong></p>\n<ul>\n<li><strong>공동상속인에 대한 증여</strong> — 시기 제한 없이 전액 합산(특별수익).</li>\n<li><strong>제3자에 대한 증여</strong> — 사망 전 1년 이내 원칙, 손해 인식 시 그 이전도.</li>\n<li><strong>유언에 의한 증여(유증)</strong> — 시기 무관 전액 합산.</li>\n<li><strong>사인증여</strong> — 유증과 동일하게 처리.</li>\n<li><strong>헌재 2020헌가4</strong> — 형제자매 유류분 조항 위헌, 2025년부터 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀가 10년·20년 전에 받은 부동산 증여도 유류분 계산에 들어갑니다.</blockquote>',
      },
      {
        title: '유류분 비율과 계산식',
        content:
          '<p><strong style="color:#1e3a5f">유류분 = (상속재산 + 증여재산 - 채무) × 유류분 비율 - 본인 특별수익·상속분</strong></p>\n<ul>\n<li><strong>직계비속·배우자</strong> — 법정상속분의 1/2.</li>\n<li><strong>직계존속</strong> — 법정상속분의 1/3.</li>\n<li><strong>형제자매</strong> — 2025년부터 유류분 없음(헌재 위헌).</li>\n<li><strong>산정 기준일</strong> — 상속개시일(사망일) 가액.</li>\n<li><strong>공제 항목</strong> — 장례비·상속채무·세금.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 유류분 계산과 증여 합산 범위를 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증여 시점·평가 기준',
        content:
          '<p><strong style="color:#1e3a5f">평가 기준은 상속개시일이지만 증여 시점도 증명해야 합니다.</strong></p>\n<ol>\n<li><strong>부동산 증여</strong> — 상속개시일의 시가(실거래가·감정가), 등기부로 시점 확인.</li>\n<li><strong>현금 증여</strong> — 상속개시일까지 GDP 디플레이터로 환산.</li>\n<li><strong>주식·펀드</strong> — 상속개시일 종가.</li>\n<li><strong>영업용 재산</strong> — 감정평가서로 입증.</li>\n<li><strong>불명확 시점</strong> — 증여세 신고자료·통장 거래내역으로 시점 특정.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 10년 이상 오래된 증여는 증여세 신고자료를 국세청에서 열람해 입증할 수 있습니다.</blockquote>',
      },
      {
        title: '반환청구 실무 — 1년·10년 시효',
        content:
          '<p><strong style="color:#1e3a5f">두 가지 시효가 동시에 적용되므로 조기 대응이 핵심입니다.</strong></p>\n<ul>\n<li><strong>단기 시효</strong> — 유류분 침해 안 날로부터 1년.</li>\n<li><strong>장기 시효</strong> — 상속개시일로부터 10년.</li>\n<li><strong>기산점</strong> — "침해 안 날"은 증여·유증 사실 + 침해 사실 모두 인식한 시점.</li>\n<li><strong>반환 방법</strong> — 원물반환 원칙, 불가 시 가액반환.</li>\n<li><strong>소송 관할</strong> — 피고 주소지 민사법원(가사 아님).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상속개시 후 10년이 지나면 침해를 몰랐어도 시효 완성으로 청구권이 소멸합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속인 증여의 유류분 반영',
        summary:
          '대법원 2022다220014 사건(대법원, 2025.05.29 선고)에서 법원은 증여가 상속의 특별수익에 해당하는지 판단하는 기준과 증여의 의미와 효력, 유류분권리자의 유류분반환청구권 행사에 의한 불균형한 증여의 효력을 판시했습니다. 공동상속인에 대한 증여는 원칙적으로 전액 유류분 계산에 합산됩니다.',
        takeaway:
          '자녀 한 명에게 몰아준 오래된 증여도 유류분 산정에 반영됩니다.',
      },
    ],
    faq: [
      {
        question: '20년 전 받은 부동산 증여도 합산되나요?',
        answer:
          '<strong>공동상속인에 대한 증여는 시기 제한 없이 합산됩니다.</strong> 다만 상속개시일 가액으로 환산하므로 부동산 시세 상승이 크게 반영됩니다.',
      },
      {
        question: '증여세 냈으면 합산에서 빠지나요?',
        answer:
          '<strong>증여세 납부와 유류분 합산은 별개입니다.</strong> 세법과 민법이 분리되므로 증여세 냈어도 유류분 계산에는 포함됩니다.',
      },
      {
        question: '증여받은 재산을 이미 팔았으면요?',
        answer:
          '<strong>원물반환 불가 시 가액반환으로 전환됩니다.</strong> 상속개시일 가액을 기준으로 금전 지급 의무가 생깁니다.',
      },
      {
        question: '유류분 침해 안 날은 어떻게 정해지나요?',
        answer:
          '<strong>"증여·유증 사실"과 "유류분 부족 사실" 모두 인식한 시점입니다.</strong> 단순히 상속 사망일만 안 것으론 부족합니다.',
      },
      {
        question: '형제자매도 유류분이 있나요?',
        answer:
          '<strong>2024년 헌재 2020헌가4 결정으로 형제자매 유류분은 위헌입니다.</strong> 2025년 이후 상속개시분부터는 형제자매 유류분 청구가 불가합니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '유류분 10년 시효 주의', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '유류분 소송 가이드', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '상속 순위와 법정지분', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '입양 자녀 법정지분', href: '/guide/inheritance/inheritance-adopted-child-legal-share' },
      { label: '상속재산 감정평가 분쟁', href: '/guide/inheritance/inheritance-real-estate-valuation-dispute' },
    ],
  },

  // ─── 9. inheritance / will-forgery-verification-procedure ───
  {
    domain: 'inheritance',
    slug: 'inheritance-will-forgery-verification-procedure',
    keyword: '유언장 위조 검증 절차',
    questionKeyword: '유언장이 위조된 것 같으면 어떻게 확인하나요?',
    ctaKeyword: '유언장 진위 검증 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유언장 위조 검증 절차 5단계 | 로앤가이드',
      description:
        '유언장 위조가 의심될 때 필적 감정, 공정증서 확인, 유언무효 소송 준비 순서를 지금 확인하세요.',
    },
    intro:
      '<p>부모 사망 후 특정 상속인에게만 유리한 유언장이 나타나면 위조·강박 의심이 생깁니다. 민법 제1060조는 법정 방식 위반 유언장을 무효로 하며, 민법 제1064조는 위조·변조 상속인의 결격사유를 규정해 유언장 진위 확인은 상속재산 보호의 출발점입니다.</p>',
    sections: [
      {
        title: '유언 방식별 위조 검증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">5가지 법정 방식별로 검증 기준이 다릅니다.</strong></p>\n<ul>\n<li><strong>자필증서</strong> — 전문·연월일·주소·성명 모두 자필, 날인 필수.</li>\n<li><strong>공정증서</strong> — 공증인 앞 증인 2명, 공증사무소 보관.</li>\n<li><strong>녹음</strong> — 유언자 육성+증인 참여·성명 증언.</li>\n<li><strong>비밀증서</strong> — 봉인 후 공증인·증인 서명, 5일 내 법원 확정.</li>\n<li><strong>구수증서</strong> — 급박한 상황에서만, 7일 내 법원 검인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자필증서가 가장 위조 많은 유형이며 "주소 누락"만으로도 무효 주장이 가능합니다.</blockquote>',
      },
      {
        title: '검증 순서 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">법원 검인부터 필적 감정까지 단계적으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언검인 신청</strong> — 자필·녹음 유언은 가정법원 검인 필수(민법 제1091조).</li>\n<li><strong>2단계 — 원본 확보</strong> — 검인조서 열람 신청, 원본 확인(사본만으론 부족).</li>\n<li><strong>3단계 — 필적 비교</strong> — 고인 편지·수첩·이력서 등 필적 샘플 수집.</li>\n<li><strong>4단계 — 감정 의뢰</strong> — 법원 지정 감정인 또는 사감정(국립과학수사연구원).</li>\n<li><strong>5단계 — 유언무효확인소송</strong> — 관할 가정법원에 제기.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 유언 방식 요건과 검증 순서를 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 수집 — 필적·정황·의료',
        content:
          '<p><strong style="color:#1e3a5f">위조는 "필적 위조"와 "의사능력 없음"이라는 두 축으로 입증합니다.</strong></p>\n<ul>\n<li><strong>필적 샘플</strong> — 고인의 편지·일기·결재서류·가계부 등 10점 이상.</li>\n<li><strong>의료 기록</strong> — 작성일 기준 치매·인지 장애 진단서·간병일지.</li>\n<li><strong>정황 증거</strong> — 유언 수혜자와의 동거·재산 관리 관계.</li>\n<li><strong>증인 진술</strong> — 공정증서·녹음 유언은 증인 신원 확인.</li>\n<li><strong>날짜 대조</strong> — 작성일에 고인이 병원 입원·해외 체류 등 작성 불가 상태였는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 치매 진단 후 작성된 유언은 "의사능력 결여"로 무효 주장이 상대적으로 수월합니다.</blockquote>',
      },
      {
        title: '위조 확인 후 대응 — 결격 주장',
        content:
          '<p><strong style="color:#1e3a5f">위조 입증되면 작성자는 상속결격이 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>민법 제1004조 제5호</strong> — 유언서 위조·변조·파기 시 상속결격.</li>\n<li><strong>결격 효과</strong> — 해당 상속인은 상속권 자체 상실, 대습상속도 제한.</li>\n<li><strong>형사 고소</strong> — 사문서위조죄(형법 제231조) 병행 가능.</li>\n<li><strong>부당이득 반환</strong> — 이미 이전된 재산은 말소등기·부당이득반환소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 유언 무효 확인과 상속결격은 별개 청구이므로 소장 작성 시 둘 다 명시해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유언의 해석과 진의 확인',
        summary:
          '대법원 2024다67238 사건(대법원, 2025.10.16 선고)에서 법원은 법률행위의 해석 원칙 및 처분문서에 관하여 합리적인 해석을 강조하며, 유언장 해석 시 유언자의 진의 확인과 법정 방식 준수가 필수임을 확인했습니다.',
        takeaway:
          '유언은 진의와 방식 모두 엄격히 검증받는 행위입니다.',
      },
    ],
    faq: [
      {
        question: '필적 감정은 얼마나 걸리나요?',
        answer:
          '<strong>국립과학수사연구원 감정은 3~6개월, 사감정은 1~2개월 소요됩니다.</strong> 비용은 사감정 50~150만 원, 법원 감정은 150~300만 원 수준.',
      },
      {
        question: '유언검인을 안 받고 재산을 이미 이전했으면요?',
        answer:
          '<strong>검인 없이 진행된 등기는 "등기원인 하자"로 말소 가능합니다.</strong> 등기말소소송과 유언무효확인소송을 병행하세요.',
      },
      {
        question: '공정증서 유언도 위조 가능한가요?',
        answer:
          '<strong>공증인 면전에서 작성되므로 형식 위조는 어렵습니다.</strong> 다만 의사능력 결여·사기·강박이 있으면 실질적 무효 주장이 가능합니다.',
      },
      {
        question: '녹음 유언은 어떻게 검증하나요?',
        answer:
          '<strong>음성 분석과 증인 진술 청취가 핵심입니다.</strong> 본인 음성 일치, 증인 2명 참여, 유언자 성명·연월일 육성 포함 여부를 확인.',
      },
      {
        question: '유언 위조자도 상속결격이 되나요?',
        answer:
          '<strong>민법 제1004조 제5호에 따라 상속결격으로 상속권을 완전히 상실합니다.</strong> 대습상속도 제한되며 이미 받은 재산은 반환해야 합니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '유언장 효력 다툼', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '상속 분쟁 어디부터', href: '/guide/inheritance/inheritance-dispute-where-to-start' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '가족 상속 분쟁 조정', href: '/guide/inheritance/inheritance-family-dispute-mediation' },
      { label: '유류분 소송 가이드', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
    ],
  },

  // ─── 10. jeonse / partial-deposit-return-response ───
  {
    domain: 'jeonse',
    slug: 'jeonse-partial-deposit-return-response',
    keyword: '전세 일부 보증금 반환',
    questionKeyword: '전세 끝났는데 보증금 일부만 돌려받았으면 어떻게 하나요?',
    ctaKeyword: '일부 반환 보증금 대응 정리',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전세 일부 반환 보증금 회수 4단계 | 로앤가이드',
      description:
        '전세 만료 후 보증금 일부만 받았을 때 내용증명, 임차권등기, 지급명령, 소송 순서를 지금 확인하세요.',
    },
    intro:
      '<p>전세 만료일에 임대인이 "지금 돈이 없다"며 일부만 반환하는 경우가 늘고 있습니다. 주택임대차보호법 제3조의3은 계약 종료 후 보증금 미반환 시 임차권등기명령을 규정하며, 민법 제618조는 임대차 종료 시 즉시 반환을 원칙으로 해 일부만 받아도 나머지에 대한 권리는 그대로 유지됩니다.</p>',
    sections: [
      {
        title: '일부 수령 시 권리 — 포기 아님',
        content:
          '<p><strong style="color:#1e3a5f">일부 수령은 나머지 청구권을 포기한 것이 아닙니다.</strong></p>\n<ul>\n<li><strong>변제충당</strong> — 민법 제477조에 따라 비용·이자·원금 순서로 충당.</li>\n<li><strong>영수증 작성</strong> — "일부 수령, 잔액 OO원 청구권 유보" 문구 명시.</li>\n<li><strong>지연이자 발생</strong> — 상법 연 6%, 소장 송달 후 연 12%(민사 이자 특례).</li>\n<li><strong>대항력 유지</strong> — 임차권등기 전까지 전입신고·확정일자 효력 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "잔액 청구권 유보" 문구 없이 영수증만 주면 나머지 청구가 어려워질 수 있습니다.</blockquote>',
      },
      {
        title: '4단계 회수 순서',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 → 임차권등기 → 지급명령 → 본안소송 순입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명</strong> — 잔액·기한·법적 조치 명시, 등기우편 발송.</li>\n<li><strong>2단계 — 임차권등기명령</strong> — 이사 전 법원 신청(주임법 제3조의3), 이사 후 대항력 유지.</li>\n<li><strong>3단계 — 지급명령</strong> — 액수 다툼 없으면 2~3개월 내 결정.</li>\n<li><strong>4단계 — 보증금반환소송</strong> — 이의 제기 시 민사 본안, 6~12개월 소요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보증금 회수 절차와 증거 준비를 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임차권등기 핵심 — 이사 전 신청',
        content:
          '<p><strong style="color:#1e3a5f">이사 전에 임차권등기를 마치는 게 가장 중요합니다.</strong></p>\n<ul>\n<li><strong>신청 시기</strong> — 계약 종료 후 보증금 미반환 상태, 이사 전 유리.</li>\n<li><strong>신청 법원</strong> — 주택 소재지 지방법원.</li>\n<li><strong>필요 서류</strong> — 임대차계약서, 주민등록초본, 내용증명, 등기부등본.</li>\n<li><strong>효과</strong> — 이사 후에도 대항력·우선변제권 유지, 경매 시 배당요구 가능.</li>\n<li><strong>소요 기간</strong> — 2~4주.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기 없이 먼저 이사하면 대항력을 잃고 후순위 담보권자에게 밀립니다.</blockquote>',
      },
      {
        title: '실무 주의 — 보증금 반환 지연',
        content:
          '<p><strong style="color:#1e3a5f">일부 수령 시점부터 세부적으로 기록을 남기세요.</strong></p>\n<ul>\n<li><strong>영수증 2부 작성</strong> — "일부 수령·잔액 청구 유보" 문구.</li>\n<li><strong>입금 기록</strong> — 계좌이체 내역 보관, 현금 수령 시 증인 동석.</li>\n<li><strong>지연이자 청구</strong> — 종료일 익일부터 연 6%(상사) 또는 연 5%(민사).</li>\n<li><strong>소송 시 연 12%</strong> — 소촉법 특례, 소장 송달 다음날부터.</li>\n<li><strong>HUG 보증보험</strong> — 가입돼 있으면 HUG에 반환청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "나중에 주겠다"는 구두 약속만 믿고 이사 나가면 강제집행이 어려워집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기와 동시이행',
        summary:
          '대법원 2024다221455 사건(대법원, 2025.04.24 선고)에서 법원은 주택임대차보호법 제3조의3 제8항에 따른 임차권등기명령 신청에 의한 임차권등기에 기한 보증금반환청구권을 보전하여 자동채권으로 상계 가능한지에 관하여 판시했습니다. 임차권등기는 보증금 회수의 핵심 방어선입니다.',
        takeaway:
          '임차권등기는 이사 후에도 보증금을 지키는 가장 강력한 수단입니다.',
      },
    ],
    faq: [
      {
        question: '일부 받으면서 "나머지 포기" 서명하면요?',
        answer:
          '<strong>포기 각서 서명은 피하세요.</strong> 만약 서명했더라도 기망·강박이 있었으면 민법 제110조 취소 주장이 가능합니다.',
      },
      {
        question: '임차권등기만 하면 바로 돈 받나요?',
        answer:
          '<strong>등기는 권리 보전이지 강제 집행이 아닙니다.</strong> 지급명령·소송으로 판결 받아야 압류·경매로 회수할 수 있습니다.',
      },
      {
        question: '지급명령과 소송 중 뭐가 빠른가요?',
        answer:
          '<strong>이의 없으면 지급명령이 빠릅니다(2~3개월).</strong> 이의 제기되면 소송으로 전환, 다퉈야 할 쟁점이 있으면 처음부터 소송이 유리.',
      },
      {
        question: 'HUG 보증보험에 가입돼 있으면요?',
        answer:
          '<strong>HUG(주택도시보증공사)에 바로 반환청구할 수 있습니다.</strong> 계약서·확정일자·임대인 미반환 증빙 제출, 통상 2~3개월 내 지급.',
      },
      {
        question: '소송 이겨도 임대인 돈이 없으면요?',
        answer:
          '<strong>강제경매로 집을 매각해 배당받습니다.</strong> 임차권등기가 돼 있으면 순위에 따라 우선 배당, 안 돼 있으면 일반채권자와 균등 배당.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '전세 계약 종료 절차', href: '/guide/jeonse/jeonse-contract-termination-procedure' },
      { label: '보증금 보증보험 가이드', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '역전세·갭 대응', href: '/guide/jeonse/jeonse-reverse-gap-tenant-response' },
    ],
  },

  // ─── 11. jeonse / auction-priority-distribution-procedure ───
  {
    domain: 'jeonse',
    slug: 'jeonse-auction-priority-distribution-procedure',
    keyword: '전세 경매 우선변제 배당요구',
    questionKeyword: '전세 집이 경매 들어갔는데 우선변제는 어떻게 신청하나요?',
    ctaKeyword: '전세 경매 배당요구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세 경매 우선변제 신청 5단계 | 로앤가이드',
      description:
        '임차한 집이 경매 들어갔을 때 우선변제권 확인, 배당요구 신청, 소액임차인 최우선변제 순서를 지금 확인하세요.',
    },
    intro:
      '<p>전세로 살고 있는 집이 경매에 부쳐졌다는 통지를 받으면 가장 먼저 확인할 것은 "배당요구 종기"입니다. 주택임대차보호법 제8조는 소액임차인 최우선변제권, 제3조의2는 확정일자 우선변제권을 규정하며, 배당요구 종기 내에 신청하지 못하면 보증금을 거의 회수하지 못합니다.</p>',
    sections: [
      {
        title: '두 가지 권리 — 우선변제·최우선변제',
        content:
          '<p><strong style="color:#1e3a5f">임차인에게 두 가지 보증금 회수 수단이 있습니다.</strong></p>\n<ul>\n<li><strong>확정일자 우선변제권</strong> — 전입신고+확정일자 임차인, 배당순위에 따라 변제.</li>\n<li><strong>소액임차인 최우선변제권</strong> — 경매 신청등기 전 전입+소액 기준 충족 시 일정액 선배당.</li>\n<li><strong>2024년 기준(서울)</strong> — 보증금 1억 6,500만 원 이하·최우선 5,500만 원.</li>\n<li><strong>근거 조항</strong> — 주임법 제8조(최우선), 제3조의2(우선변제).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 두 권리는 중복 적용되지 않고 유리한 쪽 하나로 선택됩니다.</blockquote>',
      },
      {
        title: '배당요구 5단계 순서',
        content:
          '<p><strong style="color:#1e3a5f">경매 통지 받은 즉시 아래 순서로 움직이세요.</strong></p>\n<ol>\n<li><strong>1단계 — 경매 사건 확인</strong> — 법원경매정보 홈페이지에서 사건번호·배당요구 종기 확인.</li>\n<li><strong>2단계 — 배당요구 신청</strong> — 관할 법원 경매계에 배당요구서 제출(종기 내).</li>\n<li><strong>3단계 — 필수 서류 첨부</strong> — 임대차계약서 사본, 주민등록등본, 확정일자 부본.</li>\n<li><strong>4단계 — 임차권등기</strong> — 아직 안 됐으면 병행, 대항력 유지.</li>\n<li><strong>5단계 — 배당기일 출석</strong> — 배당표 확인, 이의 있으면 배당이의의 소 제기.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 배당요구 요건과 순위 점검을 도와드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '배당 순위 계산법',
        content:
          '<p><strong style="color:#1e3a5f">선순위부터 차례로 배당받는 구조입니다.</strong></p>\n<ul>\n<li><strong>0순위</strong> — 경매 비용(감정료·집행비).</li>\n<li><strong>1순위</strong> — 소액임차인 최우선변제(주택가액의 1/2 범위).</li>\n<li><strong>2순위</strong> — 당해세(해당 부동산 관련 국세·지방세).</li>\n<li><strong>3순위</strong> — 확정일자·저당권 등 우선변제권(일자순).</li>\n<li><strong>4순위</strong> — 일반 임금채권·기타 일반채권.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 당해세 중 국세(상속세·증여세)가 많으면 임차인 우선변제권을 앞질러 받아갑니다(2023년 법개정으로 일부 후순위).</blockquote>',
      },
      {
        title: '실무 주의 — 놓치기 쉬운 함정',
        content:
          '<p><strong style="color:#1e3a5f">아래 실수가 배당 실패의 주 원인입니다.</strong></p>\n<ul>\n<li><strong>배당요구 종기 도과</strong> — 종기 하루 넘어도 배당 불가.</li>\n<li><strong>전출·이사</strong> — 임차권등기 없이 이사 시 대항력 상실.</li>\n<li><strong>확정일자 없음</strong> — 전입만 있고 확정일자 없으면 최우선만 가능.</li>\n<li><strong>증액 부분</strong> — 증액 계약서 확정일자 별도 필요.</li>\n<li><strong>보증보험 중복</strong> — HUG 수령 후 법원 배당 받으면 구상 문제 발생.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 배당요구는 법원 신청 확정 시까지 유효하지 않고, 종기까지의 "도달"이 기준입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소액임차인 대항력과 보호 요건',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 주택임대차보호법 제3조 제1항에 따른 주민등록이 임차권의 대항력을 취득시키는 공시방법이 되기 위한 요건과 주택임대차에서 임차한 부동산이 주민등록이라는 대항요건을 갖추는 시기 문제를 판시하며, 전입신고와 확정일자의 정확한 관리가 배당에서 결정적임을 확인했습니다.',
        takeaway:
          '전입·확정일자 관리가 경매에서 보증금을 지키는 핵심 방어선입니다.',
      },
    ],
    faq: [
      {
        question: '배당요구 종기는 어떻게 확인하나요?',
        answer:
          '<strong>법원경매정보 홈페이지(courtauction.go.kr)에서 사건번호 검색 시 명시됩니다.</strong> 통상 첫 매각기일 14일 전입니다.',
      },
      {
        question: '전입만 있고 확정일자가 없으면 어떻게 되나요?',
        answer:
          '<strong>소액임차인 최우선변제는 가능하지만 우선변제권은 없습니다.</strong> 지금이라도 동사무소·법원에 확정일자 부여 신청하세요.',
      },
      {
        question: 'HUG 보증금 받고 배당요구도 되나요?',
        answer:
          '<strong>HUG가 구상권 행사로 배당받으므로 본인은 배당요구 불필요합니다.</strong> HUG에 경매 진행 사실을 통지만 하면 됩니다.',
      },
      {
        question: '배당요구 후에도 대항력 유지되나요?',
        answer:
          '<strong>배당요구는 대항력을 포기하는 것으로 간주됩니다.</strong> 따라서 선순위 대항력이 있으면 배당요구보다 집 인도 거절로 버티는 게 유리할 수 있습니다.',
      },
      {
        question: '배당 부족하면 임대인에게 추가 청구되나요?',
        answer:
          '<strong>배당에서 받지 못한 잔액은 임대인에 잔액 반환청구 가능합니다.</strong> 단 임대인이 무자력이면 실효성이 낮아 개인회생·파산 검토 필요.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '경매 보증금 우선순위', href: '/guide/jeonse/jeonse-auction-deposit-priority' },
      { label: '보증금 순위 경합 대응', href: '/guide/jeonse/jeonse-deposit-priority-competing' },
      { label: '세입자 등록 요건', href: '/guide/jeonse/jeonse-tenant-registration-requirement' },
      { label: '임대인 세금 체납 리스크', href: '/guide/jeonse/jeonse-landlord-tax-delinquent-risk' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },
];
