import { SpokePage } from '../spoke-pages';

// batch59 traffic — 5개:
// 1. 자전거 차대차 vs 차대보행자 처리 분기 (도로교통법상 '차' 지위)
// 2. 어린이보호구역 12대 중과실 + 형사 + 보험 면책 결합 트랙
// 3. 일반도로 후진 사고 vs 주차장 사고 ('도로' 여부 분기)
// 4. 무보험차상해 특약 + 정부보장사업 한도 결합 보상 트랙
// 5. 음주뺑소니 vs 단순뺑소니 형량 차이 + 사고후 미조치죄 분기
//
// 고유 존재 이유:
// 1. 이 페이지는 자전거가 가해 또는 피해 차량으로 사고에 휘말린 운전자가 자전거의 도로교통법상 '차' 지위 + 차대차 트랙 + 차대보행자 트랙 + 보험 적용 4가지 분기를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 어린이보호구역(스쿨존) 사고 가해자(또는 피해자 보호자)가 12대 중과실 인정 요건 + 형사 가중 + 보험 면책 + 합의·양형 4단계 결합 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 후진 사고를 일반도로에서 낸 운전자와 주차장에서 낸 운전자가 '도로' 여부에 따라 12대 중과실 적용·교통사고처리특례법 적용·보험 처리가 어떻게 갈리는지 4가지 분기를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 가해자가 무보험·미가입 또는 도주로 보상 한도가 부족한 피해자가 본인 무보험차상해 특약 + 정부보장사업 + 한도 비교 + 가해자 직접 청구 4단계 결합 보상 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 사고 후 도주한 가해자(또는 도주 혐의를 받는 운전자)가 단순뺑소니·음주뺑소니·사고후 미조치죄 형량 차이 + 합의 영향 + 양형 다툼 4가지 분기 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch59Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / traffic-accident-bicycle-vs-car-vs-pedestrian-fault-track-split ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-vs-car-vs-pedestrian-fault-track-split',
    keyword: '자전거 차대차 차대보행자 처리 분기',
    questionKeyword: '자전거를 타다 자동차와 부딪쳤어요. 차대차 사고로 처리되나요, 보행자 사고로 처리되나요?',
    ctaKeyword: '자전거 사고 처리 트랙 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '자전거 사고 차대차 vs 차대보행자 — 4가지 분기 | 로앤가이드',
      description:
        '자전거가 자동차·보행자와 부딪친 사고가 어떤 트랙으로 처리되는지 도로교통법상 차 지위 + 보험 적용 4가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길에 자전거를 타고 가다 좌회전하는 자동차와 부딪쳤어요. 보험사는 \'자전거는 \\"차\\"라서 차대차 사고로 처리한다\'고 하는데, 다른 사람은 \'자전거 운전자가 다쳤으니 인적 피해로 보고 보행자 기준으로 합의해야 한다\'고 합니다." 자전거 관련 사고는 ① 도로교통법 제2조(자전거는 \'차\'에 해당) ② 차대차 사고 트랙(과실비율 산정·자동차보험 대물·자전거 손해 산정) ③ 차대사람 트랙(자동차 측이 차량으로 본 자전거 운전자에게 인적 손해 배상) ④ 보험 적용(자동차보험 대인배상·일상생활배상·자전거보험) 4가지 분기로 처리가 달라지는 영역입니다. 자전거는 도로교통법상 \'차\'이지만 자동차관리법상 \'자동차\'에 해당하지는 않아 자동차보험 대인 적용 시 인적 손해는 별도 산정 사례가 있는 영역이에요. 사고 직후 블랙박스·자전거 손상·자전거 운전자 부상 자료 보존이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 자전거 사고 4가지 처리 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 차 지위·차대차 트랙·인적 손해 트랙·보험 적용 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로교통법상 \'차\' 지위 (제2조 제17호)</strong> — 자전거는 \'차\'에 해당해 차마용 신호·차로 통행 의무 적용 영역. 다만 자동차관리법상 \'자동차\'는 아님(2017도13182).</li>\n<li><strong>② 차대차 사고 트랙</strong> — 과실비율 손해보험협회 인정기준 적용. 자전거 손상·운전자 부상은 자동차 측 보험에서 산정. 자전거 운전자 본인 과실(역주행·신호위반·우측 통행 위반)도 비율 반영 영역.</li>\n<li><strong>③ 차대사람(인적 손해) 트랙</strong> — 자전거 운전자가 부상 입은 부분은 자동차보험 대인배상 적용 영역. 부상 정도·후유장해는 사람 기준 산정.</li>\n<li><strong>④ 보험 적용 (자동차보험·일상생활배상·자전거보험)</strong> — 자동차 측 자동차보험 대물·대인 청구. 자전거 운전자 측은 본인 자전거보험 또는 일상생활배상특약 한도 검토 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2017도13182 사건은 \'자동차\' 정의 범위 다툼 사례로, 도로교통법상 \'차\'와 자동차관리법상 \'자동차\'를 구별하는 영역. 자전거는 \'차\'이지만 \'자동차\'는 아님이라, 보험·과실비율 적용 시 분기가 갈리는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자전거 사고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 보험사 통보 → 과실비율 산정 → 인적·물적 손해 산정 → 분쟁 트랙 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인·상대 블랙박스, 도로 CCTV 보존 요청, 자전거 손상 사진, 자전거 운전자 부상 사진·진단서, 자전거도로/차로/보도 위치 사진.</li>\n<li><strong>2단계 — 자동차 측 보험사 통보 (24시간 내)</strong> — 자동차보험 대인+대물 청구 트랙 개시. 자전거 운전자가 피해자라면 인적 손해 별도 산정 요청.</li>\n<li><strong>3단계 — 과실비율 산정 (1~2개월)</strong> — 손해보험협회 자전거-자동차 분쟁심의위 검토 가능. knia.or.kr. 무료. 자전거 본인 과실(신호위반·역주행)도 반영 영역.</li>\n<li><strong>4단계 — 손해 산정 (1~3개월)</strong> — 인적: 치료비·휴업손해·위자료·후유장해. 물적: 자전거 수리비 또는 시가 산정. 자전거가 고가형이면 손해사정 자문(15~50만원) 검토.</li>\n<li><strong>5단계 — 분쟁조정 또는 본안 (이견 시)</strong> — 금융감독원 1332 무료 분쟁조정. 청구액 3,000만원 이하 소액심판. 위자료·후유장해 다툼 시 민사 본안.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 차대차 vs 차대보행자 4가지 분기 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 정황 자료 + 자전거·인적 피해 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인·상대 차량 블랙박스 영상</strong> — 자전거 진입 방향·신호·속도 확인 핵심.</li>\n<li><strong>도로 CCTV 보존 요청</strong> — 시 교통정보센터·경찰. 보존 1~4주로 짧으니 즉시.</li>\n<li><strong>사고 지점 사진 (자전거도로/차로/보도)</strong> — 사고 발생 위치 분류 핵심. 자전거 통행 가능 구역 확인.</li>\n<li><strong>자전거 손상·시가 자료</strong> — 구입 영수증·견적서·자전거 종류(고가형/일반형).</li>\n<li><strong>자전거 운전자 진단서·치료비 영수증</strong> — 인적 손해 산정.</li>\n<li><strong>경찰 사건사고사실확인원</strong> — 사고 정황 명시.</li>\n<li><strong>자전거보험·일상생활배상특약 약관</strong> — 본인 보험 한도·자기부담 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 고가 자전거(로드바이크·MTB)는 시가 산정이 다툼 영역. 구입 영수증 + 동일 모델 시세 자료 준비. 일반 자전거는 통상 30~80만원 수준 사례 다수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·상대측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"자전거는 차라 본인도 큰 과실" 주장 검토</strong> — 도로교통법상 \'차\'는 맞지만 보호 의무 비율은 자동차가 더 큼. 자전거 운전자 부상은 사람 기준 보호 영역. 일률적 동등 비율 적용은 부적절.</li>\n<li><strong>"자전거도로 이탈로 본인 책임" 주장 검토</strong> — 자전거도로 통행 의무 위반은 본인 과실 가중 영역. 다만 자동차 측 안전 의무 위반(우회전·좌회전 시 주의의무)도 별도 평가.</li>\n<li><strong>"역주행·신호위반·헬멧 미착용" 주장 반박</strong> — 본인 과실은 일부 인정될 수 있는 영역이지만 자동차 측 주의의무 위반과 결합해 비율 산정. 헬멧 미착용은 부상 가중 사유로 손해 산정에 부분 반영 사례.</li>\n<li><strong>"자전거 운전자가 보행자처럼 보호받을 수 없다" 주장 반박</strong> — 자전거가 \'차\'라도 인적 손해는 사람 기준 산정 영역. 자동차보험 대인 적용 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 교통사고 의료·재활 상담.</li>\n<li><strong>도로교통공단 1577-7800</strong> — 자전거·자동차 사고 통계·법규 안내.</li>\n<li><strong>금융감독원 1332</strong> — 보험금 분쟁조정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도로교통법상 \'자동차\'와 \'차\'의 구별',
        summary:
          '대법원 2017도13182 사건(대법원, 2021.09.30 선고)에서 법원은 무면허운전 처벌규정의 적용대상인 구 도로교통법 제2조 제18호에서 정한 \'자동차\'가 구 자동차관리법 제2조 제1호에서 정한 자동차로서 같은 법 제3조에서 정한 각종 자동차에 해당하는 것에 한정되는지 여부를 다루며, 농업기계화 촉진법상 농업용 동력운반차는 \'자동차\'에 해당하지 않는다고 판시했습니다. 이 판례는 \'차\'와 \'자동차\' 정의 범위 분리를 보여주는 사례로, 자전거는 도로교통법상 \'차\'에 해당하지만 자동차관리법상 \'자동차\'는 아니라는 점에서 보험 적용·과실비율 산정·12대 중과실 분기에서 트랙이 달라지는 영역입니다. 자전거 운전자가 사고 피해자일 때 자동차보험 대인배상으로 보호되는 트랙과 차대차 과실비율로 산정되는 트랙이 결합되는 사례가 있습니다.',
        takeaway: '자전거 사고는 \'차 지위\' + \'차대차 트랙\' + \'인적 손해 트랙\' + \'보험 적용\' 4가지 분기 영역이라, 사고 위치(자전거도로/차로/보도)·자전거 종류·운전자 부상 자료를 정리하면 4단계 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '자전거 사고도 12대 중과실 적용되나요?',
        answer:
          '<strong>자전거는 도로교통법상 \'차\'이지만 자동차가 아니라 12대 중과실 적용은 제한적 영역입니다.</strong> 자동차 측 운전자가 12대 중과실(신호위반·횡단보도 위반 등)을 범하면 형사 본안 가능. 자전거 운전자 측 과실은 비율 반영.',
      },
      {
        question: '자전거 운전자가 부상 입었으면 보행자처럼 보호받나요?',
        answer:
          '<strong>인적 손해 산정은 사람 기준 적용 영역입니다.</strong> 자동차보험 대인배상으로 치료비·위자료·후유장해 산정 가능. 다만 본인 과실(신호위반·역주행 등)은 비율 반영.',
      },
      {
        question: '고가 자전거인데 시가 산정이 어렵습니다',
        answer:
          '<strong>구입 영수증 + 동일 모델 시세 자료 + 손해사정사 자문 결합이 효율적 영역입니다.</strong> 로드바이크·MTB 등 고가형은 수리비 또는 시가(감가상각 후) 산정 다툼. 시가 산정 시 손해사정사 자문(15~50만원).',
      },
      {
        question: '자전거 운전자가 신호위반했어도 자동차 측 책임이 있나요?',
        answer:
          '<strong>자동차 측 안전 의무(전방주시·서행 등)는 별도 평가 영역입니다.</strong> 자전거 신호위반은 본인 과실 가중 사유. 비율 산정 시 자동차 측 주의의무 위반과 결합해 종합 판단.',
      },
      {
        question: '본인 자전거보험·일상생활배상특약은 어떻게 활용하나요?',
        answer:
          '<strong>자동차 측 보험 청구가 우선이고 본인 보험은 보충 또는 본인 과실 부분 영역입니다.</strong> 자전거 운전자가 가해 측이 된 경우 자전거보험·일상생활배상특약으로 대물·대인 보장 가능. 약관 한도 확인.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거-자동차 손해 산정', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
      { label: '자전거-보행자 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement' },
      { label: '자전거 보상 가이드', href: '/guide/traffic-accident/traffic-accident-bicycle-compensation' },
      { label: '자전거-전동킥보드 책임범위', href: '/guide/traffic-accident/traffic-accident-bicycle-escooter-liability-range' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 2. traffic-accident / traffic-accident-child-zone-12-major-criminal-insurance-block ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-child-zone-12-major-criminal-insurance-block',
    keyword: '어린이보호구역 12대 중과실 형사 보험 면책',
    questionKeyword: '어린이보호구역에서 사고를 냈는데 12대 중과실에 해당된다고 합니다. 보험은 안 되나요?',
    ctaKeyword: '스쿨존 12대 중과실 보험 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '스쿨존 12대 중과실 — 형사·보험 면책 4단계 트랙 | 로앤가이드',
      description:
        '어린이보호구역 사고로 12대 중과실에 해당한다면 형사 가중 + 보험 면책 + 합의 + 양형 4가지 결합 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오전 등교 시간에 어린이보호구역(시속 30km)을 시속 40km로 통과하다가 골목에서 갑자기 뛰어든 초등학생과 부딪쳐 무릎 찰과상을 입혔습니다. 경찰은 \'스쿨존 12대 중과실로 형사 본안\'이라고 하고, 보험사는 \'12대 중과실은 종합보험 면책 배제\'라고 하는데 어떻게 대응해야 하나요?" 어린이보호구역(스쿨존) 사고가 ① 12대 중과실 인정 요건(어린이 보호구역 안전 의무 위반·치상) ② 특정범죄가중처벌법(민식이법) 제5조의13 가중 처벌 ③ 종합보험 면책 배제(가해자 사고부담금) ④ 합의·처벌불원서 양형 영향 4가지 트랙으로 결합되는 영역입니다. 다만 모든 스쿨존 사고가 자동으로 12대 중과실은 아니며, 안전 의무 위반과 사고 사이 인과관계가 인정되어야 처벌특례 배제(2024고합568)되는 영역이라 다툼 트랙도 존재합니다. 본인이 명백한 위반인지 여부 판단이 첫 단추입니다.</p>',
    sections: [
      {
        title: 'Q. 어린이보호구역 사고 4가지 결합 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 12대 중과실 요건·민식이법·보험 면책·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 12대 중과실 인정 요건 (교통사고처리특례법 제3조)</strong> — \'어린이보호구역에서 어린이의 안전에 유의하여 운전할 의무를 위반\' + \'어린이에게 상해를 입게 한 경우\'. 안전 의무 위반과 사고 인과관계 입증 필요 영역.</li>\n<li><strong>② 민식이법 (특정범죄가중처벌법 제5조의13)</strong> — 어린이보호구역에서 13세 미만 어린이 사망 시 무기 또는 3년 이상 징역, 상해 시 1년 이상 15년 이하 또는 500~3,000만원 벌금 영역.</li>\n<li><strong>③ 종합보험 면책 배제 (가해자 사고부담금)</strong> — 12대 중과실은 종합보험 형사 면책 적용 안 됨. 사고부담금(대인1 1,000만원·대인2 1,000만원·대물 500만원, 2024 기준) 본인 부담 영역.</li>\n<li><strong>④ 합의·처벌불원서 (양형 영향)</strong> — 피해자 합의 + 처벌불원서로 \'공소권 없음\' 또는 양형 감경. 다만 민식이법 적용 시 합의해도 양형 다툼 트랙 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대구지법 2024고합568 사건은 안전 의무 위반과 사고 인과관계가 인정되지 않아 무죄 선고된 사례. 모든 스쿨존 사고가 자동 12대 중과실은 아니며, 안전 의무 위반 정황이 핵심 다툼 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 스쿨존 사고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 신고 → 자료 보존 → 형사 절차 → 합의 → 보험 처리 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 신고 + 부상자 구호 (즉시)</strong> — 미조치 시 도주치상 별도 분기 위험. 119 응급 호출 + 경찰 신고.</li>\n<li><strong>2단계 — 자료 보존 (사고 직후~48시간)</strong> — 본인·상대 블랙박스, 도로 CCTV, 스쿨존 표지·노면 표시 사진, 속도 기록(EDR), 어린이 진로 정황.</li>\n<li><strong>3단계 — 형사 절차 (사고 후 1~3개월 송치)</strong> — 12대 중과실 + 민식이법 적용 여부 검토. 변호인 선임 권장. 안전 의무 위반·인과관계 다툼.</li>\n<li><strong>4단계 — 피해자 합의 (가급적 송치 전)</strong> — 합의금 + 처벌불원서. 어린이 부상 정도·후유증·정신적 피해 종합 산정. 합의서에 부제소합의·완전포기 표현 검토.</li>\n<li><strong>5단계 — 보험 처리 + 사고부담금 정산</strong> — 12대 중과실은 종합보험 면책. 가해자 사고부담금 부담 영역. 본인 자기차량손해·자기신체사고 별도.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">스쿨존 12대 중과실·민식이법·보험 면책·합의 4가지 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 정황 자료 + 합의·양형 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스 영상</strong> — 사고 직전 5~10초 속도·전방 상황 핵심.</li>\n<li><strong>스쿨존 표지·노면 표시 사진</strong> — 보호구역 진입 여부·시속 30km 표지 확인.</li>\n<li><strong>도로 CCTV 보존 요청</strong> — 어린이 진입 정황·운전자 시야 확보.</li>\n<li><strong>차량 EDR(사고기록장치) 데이터</strong> — 속도·제동·페달 입력. 안전 의무 위반 다툼 핵심.</li>\n<li><strong>경찰 사건사고사실확인원·교통사고확인원</strong> — 정황 명시.</li>\n<li><strong>피해 어린이 진단서·치료비 영수증</strong> — 합의금 산정.</li>\n<li><strong>합의서 + 처벌불원서</strong> — 가급적 송치 전 또는 1심 전. 부모 동의 필수.</li>\n<li><strong>탄원서·양형 자료</strong> — 초범·반성·생업·가족 정황. 변호인 자문 결합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: EDR(Event Data Recorder)은 사고 직전 5초 속도·제동 데이터를 기록하는 영역. 한국교통안전공단을 통해 분석 가능. 본인이 시속 30km 이하였다면 안전 의무 위반 다툼 자료가 되는 사례.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"스쿨존이라 자동 12대 중과실" 주장 검토</strong> — 안전 의무 위반과 사고 인과관계 입증 필요. 시속 30km 준수 + 전방주시 정상이면 12대 중과실 적용 다툼 영역(2024고합568 무죄 사례).</li>\n<li><strong>"민식이법 적용으로 합의해도 양형 영향 없다" 주장 반박</strong> — 합의 + 처벌불원서는 양형 감경 사유. 다만 민식이법은 형량 가중 영역이라 집행유예 또는 벌금형 다툼.</li>\n<li><strong>"종합보험 가입돼도 12대 중과실은 면책" 검토</strong> — 형사 면책은 적용 안 됨. 다만 대인1·대인2·대물 보상은 정상 진행. 사고부담금만 가해자 본인 부담.</li>\n<li><strong>"피해 어린이 부모가 합의 거부" 대응</strong> — 공탁(법원 변제공탁) 가능. 적정 합의금 산정 + 공탁으로 양형 영향 일부 보강 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 어린이 피해자 의료·재활 상담.</li>\n<li><strong>도로교통공단 1577-7800</strong> — 스쿨존·민식이법 법규 안내.</li>\n<li><strong>금융감독원 1332</strong> — 사고부담금·보험금 분쟁.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 어린이보호구역 사고 안전 의무 위반 인과관계',
        summary:
          '대구지법 2024고합568 사건(대구지법, 2025.01.14 선고)에서 법원은 자동차 운전자인 피고인이 왕복 7차선 도로의 삼거리 교차로로부터 약 31m 떨어진 상시유턴구역에서 유턴을 하던 중 맞은편 반대차로에서 직진 진행하던 원동기장치자전거(오토바이) 앞부분을 피고인 차량의 조수석 문짝 부위로 충격하는 교통사고를 냄으로써 업무상의 과실로 상해를 입게 하였다는 교통사고처리 특례법 위반(치상)으로 기소된 후 국민참여재판으로 진행된 사안에서, 제반 사정을 종합할 때 피고인이 업무상 주의의무를 위반하였다거나 피고인의 행위와 교통사고의 발생 사이에 상당인과관계가 있다고 보기 어렵다는 이유로 무죄를 선고했습니다. 어린이보호구역 사고도 \'안전 의무 위반\' + \'사고와의 인과관계\' 두 요건이 모두 충족돼야 12대 중과실이 적용되며, 단지 보호구역에서 사고가 났다는 사실만으로 자동 처벌특례 배제되지는 않는 영역으로 평가됩니다. 본인이 시속 30km 준수·전방주시 정상이었다면 인과관계 다툼 트랙이 열리는 사례가 있습니다.',
        takeaway: '스쿨존 사고는 12대 중과실·민식이법·보험 면책·합의 4가지 결합 영역이라, 본인 블랙박스·EDR 데이터·스쿨존 표지 사진을 정리하면 안전 의무 위반·인과관계 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '스쿨존이면 무조건 12대 중과실인가요?',
        answer:
          '<strong>안전 의무 위반 + 사고 인과관계 두 요건 모두 충족돼야 적용 영역입니다.</strong> 시속 30km 준수·전방주시 정상이면 다툼 가능. 다만 스쿨존 어린이 부상은 일반 사고보다 다툼 강도 큼.',
      },
      {
        question: '민식이법 적용되면 합의해도 처벌받나요?',
        answer:
          '<strong>합의 + 처벌불원서는 양형 감경 사유이지만 면죄는 아닌 영역입니다.</strong> 민식이법 형량 하한(1년 이상)이라 합의 시 집행유예·벌금형 다툼 트랙. 변호인 자문 권장.',
      },
      {
        question: '종합보험에 들어 있는데 왜 보상이 안 되나요?',
        answer:
          '<strong>12대 중과실은 형사 면책 적용 안 되는 영역입니다.</strong> 다만 피해자 대인·대물 보상은 보험사가 처리. 사고부담금(대인1 1,000만원 등)만 가해자 본인 부담.',
      },
      {
        question: '피해 어린이 부모가 합의를 안 해주면 어떻게 하나요?',
        answer:
          '<strong>법원 변제공탁(적정 합의금 산정 후) 가능 영역입니다.</strong> 공탁은 양형 일부 영향. 다만 합의 + 처벌불원서보다 효과는 약한 사례 다수.',
      },
      {
        question: 'EDR 데이터로 본인이 30km 이하였다고 입증되면 어떻게 되나요?',
        answer:
          '<strong>안전 의무 위반 다툼 트랙이 열리는 영역입니다.</strong> 한국교통안전공단·차량 제조사 데이터 분석. 시속 준수 + 전방주시 정상 + 어린이 갑작스러운 진입 정황 결합 시 인과관계 다툼.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '스쿨존 사고 형사 대응', href: '/guide/traffic-accident/traffic-accident-school-zone-criminal-response' },
      { label: '스쿨존 12대 중과실', href: '/guide/traffic-accident/traffic-accident-child-zone-12-major-faults-criminal' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '스쿨존 30km 민식이법', href: '/guide/traffic-accident/traffic-school-zone-30-over-minsik-law' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 3. traffic-accident / traffic-accident-reverse-public-road-vs-parking-lot-track-split ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-reverse-public-road-vs-parking-lot-track-split',
    keyword: '후진사고 일반도로 주차장 도로 여부 분기',
    questionKeyword: '주차장에서 후진하다 사고를 냈는데, 일반도로 후진 사고와 처리가 다른가요?',
    ctaKeyword: '후진 도로 비도로 분기 점검',
    type: '정리형',
    perspective: 'accused',
    meta: {
      title: '후진사고 도로 vs 비도로 — 12대 중과실 4단계 분기 | 로앤가이드',
      description:
        '후진 사고가 일반도로인지 주차장(비도로)인지에 따라 12대 중과실 + 형사 + 보험 처리가 어떻게 갈리는지 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"마트 주차장에서 후진하다 옆 차량과 부딪쳤는데 \'주차장은 도로가 아니라 12대 중과실 적용 안 된다\'고 들었어요. 반대로 친구는 일반도로에서 후진하다 사고를 냈는데 \'중앙선 침범·후진은 12대 중과실 아니다\'라는 말도 있고, 도대체 어떻게 처리되는지 정리가 필요합니다." 후진 사고는 ① 사고 발생 장소가 \'도로\'인지 비도로인지 판단(도로교통법 제2조) ② 12대 중과실 적용 여부(고속도로·자동차전용도로의 횡단·유턴·후진만 해당) ③ 교통사고처리특례법 적용 여부(인사사고 시 합의 가능 여부) ④ 자동차보험 적용(대인·대물·자기차량) 4가지 분기로 처리가 달라지는 영역입니다. 일반도로(고속도로 아닌 곳) 후진은 대법원 2010도3436 판례로 12대 중과실에서 제외 영역. 주차장 등 비도로는 도로교통법 적용 자체가 제한되는 영역이라 처리 트랙이 분리됩니다.</p>',
    sections: [
      {
        title: 'Q. 후진 사고 4가지 분기 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로 여부·12대 중과실·교특법 적용·보험 적용 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로 여부 (도로교통법 제2조 제1호)</strong> — 도로법상 도로·유료도로·농어촌도로 + 그 외 \'현실적으로 불특정 다수의 사람·차량 통행에 사용되는 곳\'이 도로. 폐쇄형 주차장은 도로 아님 영역.</li>\n<li><strong>② 12대 중과실 적용 (교통사고처리특례법 제3조 제2항 단서 제2호)</strong> — \'고속도로·자동차전용도로\'의 횡단·유턴·후진만 해당. 일반도로 후진은 12대 중과실 아님(2010도3436).</li>\n<li><strong>③ 교통사고처리특례법 적용</strong> — 도로 위 인사사고는 교특법 적용. 비도로(주차장 등) 인사사고는 형법 업무상과실치상 트랙 영역. 합의 시 공소권 없음 분기 동일.</li>\n<li><strong>④ 자동차보험 적용</strong> — 대인·대물·자기차량 모두 적용 영역. 다만 자기차량손해 자기부담금·할증 발생 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2010도3436 사건은 일반도로 후진은 교특법 제3조 제2항 단서 제2호의 12대 중과실에 포함되지 않는다고 판시한 사례. 후진 사고 처리는 \'어디서 났는가\'가 첫 단추.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 후진 사고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 위치 확인 → 자료 보존 → 보험 처리 → 형사 절차 분기 → 합의 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 위치 분류 (즉시)</strong> — 일반도로/고속도로/자동차전용도로/주차장(폐쇄형/개방형)/사유지 분류. 사진·CCTV·표지 자료 확보.</li>\n<li><strong>2단계 — 자료 보존</strong> — 본인 블랙박스(후진 직전 5~10초)·후방 카메라 영상·주차장 CCTV·차량 손상 사진·상대 차량 손상.</li>\n<li><strong>3단계 — 보험사 통보 (24시간 내)</strong> — 본인 보험사·상대 보험사 동시 통보. 자기차량손해(자차) 처리 시 자기부담금 검토.</li>\n<li><strong>4단계 — 형사 절차 분기 (인사사고 시)</strong> — 일반도로: 교특법 + 합의 트랙. 고속도로 후진: 12대 중과실 + 종합보험 면책 배제. 주차장: 형법 업무상과실치상 + 합의 가능 영역.</li>\n<li><strong>5단계 — 합의 + 보험 처리 (1~3개월)</strong> — 합의 + 처벌불원서로 \'공소권 없음\' 분기. 보험사 합의금 산정. 손해사정사 자문 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">후진 사고 도로/비도로 4가지 분기 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 위치 자료 + 보험·합의 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>사고 위치 사진·표지</strong> — 도로/주차장/사유지 분류 핵심. 출입 통제 여부·통행자 자유 정황.</li>\n<li><strong>본인 블랙박스·후방 카메라 영상</strong> — 후진 시점·속도·시야 확인.</li>\n<li><strong>주차장·도로 CCTV 보존 요청</strong> — 마트·아파트 관리실 또는 시 교통정보센터.</li>\n<li><strong>경찰 사건사고사실확인원</strong> — 사고 위치 명시.</li>\n<li><strong>차량 손상 사진·견적서·EDR 데이터</strong> — 충돌 부위·속도 분석.</li>\n<li><strong>상대 차량 진단서·치료비 영수증 (인사사고 시)</strong> — 합의금 산정.</li>\n<li><strong>본인 보험 자기부담금·할증 정보</strong> — 자차 처리 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐쇄형 주차장(아파트 단지·지하주차장)은 일반적으로 \'도로 아님\'이라 12대 중과실 적용 제외 영역. 개방형(마트 주차장 등 통행 자유)은 \'도로\' 해석 다툼 영역. 사진·관리 정황 자료가 분기 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·검찰 자주 쟁점과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"개방형 주차장도 도로" 주장 검토</strong> — 마트·대형 주차장은 통행 자유로 \'도로\' 해석 사례 있음. 다만 통행 통제·관리 정황 자료로 다툼 가능 영역.</li>\n<li><strong>"고속도로 후진은 12대 중과실" 적용</strong> — 고속도로·자동차전용도로 후진은 12대 중과실 영역. 종합보험 면책 배제.</li>\n<li><strong>"일반도로 후진도 중과실" 주장 반박</strong> — 대법원 2010도3436은 일반도로 후진을 12대 중과실에서 제외. 인사사고 시 교특법 + 합의 가능 영역.</li>\n<li><strong>"주차장 사고는 보험 처리 안 된다" 주장 반박</strong> — 주차장 사고도 자동차보험 대인·대물·자차 적용 영역. 다만 자기부담금·할증 발생.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>도로교통공단 1577-7800</strong> — 도로 분류·법규 안내.</li>\n<li><strong>금융감독원 1332</strong> — 보험금 분쟁조정.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 인사사고 의료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일반도로 후진은 12대 중과실 제외',
        summary:
          '대법원 2010도3436 사건(대법원, 2012.03.15 선고)에서 법원은 자동차 운전자가 고속도로 또는 자동차전용도로가 아닌 일반도로의 중앙선 우측 차로 내에서 후진하는 행위가 구 교통사고처리 특례법 제3조 제2항 단서 제2호에서 정한 \'도로교통법 제13조 제3항의 규정을 위반하여 중앙선을 침범하거나 동법 제62조의 규정을 위반하여 횡단·유턴 또는 후진한 경우\'에 포함되는지 여부에 관해 \'포함되지 않는다\'고 판시했습니다. 일반도로에서 후진하다가 교통사고를 낸 것은 같은 법 제3조 제2항 단서 제2호의 12대 중과실 사유에 해당하지 않으므로 피해자가 처벌을 희망하는 의사를 철회하면 공소가 기각된다는 취지입니다. 후진 사고 처리는 \'사고 위치\'가 첫 분기축이라, 도로/비도로/고속도로 구분이 형사 트랙·보험 트랙 결합에 결정적인 영역으로 평가됩니다.',
        takeaway: '후진 사고는 사고 위치(도로/비도로/고속도로)에 따라 12대 중과실·교특법·보험 적용이 갈리는 분기 영역이라, 사고 위치 사진·CCTV·관리 정황을 정리하면 4가지 트랙 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '주차장 사고도 형사 처벌 받나요?',
        answer:
          '<strong>인사사고 시 형법 업무상과실치상 트랙 적용 영역입니다.</strong> 합의 + 처벌불원서로 공소권 없음 가능. 단순 대물사고는 형사 분기 거의 없는 영역(보험 대물 처리).',
      },
      {
        question: '고속도로 후진은 무조건 12대 중과실인가요?',
        answer:
          '<strong>고속도로·자동차전용도로 후진은 교특법 12대 중과실 영역입니다.</strong> 종합보험 면책 배제. 합의해도 형사 본안 진행 가능. 위험 정도 따라 양형 차이.',
      },
      {
        question: '아파트 단지 내 사고는 도로인가요?',
        answer:
          '<strong>폐쇄형 단지(외부 차량 통제)는 도로 아닌 사례 다수 영역입니다.</strong> 다만 출입 자유·통행 자유면 \'도로\' 해석 가능. 사진·관리 정황 자료로 다툼.',
      },
      {
        question: '후진 사고 자기부담금이 얼마인가요?',
        answer:
          '<strong>자기차량손해 자기부담금은 약관 기준 20~50만원 수준 사례 다수 영역입니다.</strong> 가해 차량으로 처리되면 보험 할증 영향. 본인 보험 약관·할증 등급 확인.',
      },
      {
        question: '후방 카메라가 작동 중이었다는 자료가 도움 되나요?',
        answer:
          '<strong>주의의무 일부 이행 정황 자료로 양형·과실비율 영향 영역입니다.</strong> 다만 후방 카메라 작동만으로 책임 면제는 어렵고, 시야 사각·갑작스러운 진입 정황 결합 시 다툼 보강.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '주차장 후진 사고', href: '/guide/traffic-accident/traffic-accident-parking-lot-backing' },
      { label: '주차장 충돌 처리', href: '/guide/traffic-accident/traffic-accident-parking-lot-collision' },
      { label: '후방카메라 사각 후진', href: '/guide/traffic-accident/traffic-accident-rear-camera-blind-reverse' },
      { label: '주차장 도어딩', href: '/guide/traffic-accident/traffic-accident-parking-lot-door-ding' },
      { label: '주차장 기둥 충돌', href: '/guide/traffic-accident/traffic-accident-parking-pillar-fault' },
    ],
  },

  // ─── 4. traffic-accident / traffic-accident-uninsured-self-injury-coverage-government-fund-limit ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-uninsured-self-injury-coverage-government-fund-limit',
    keyword: '무보험차상해 정부보장사업 한도 결합',
    questionKeyword: '가해자가 무보험인데 정부보장사업과 본인 무보험차상해 특약, 어느 쪽이 더 받을 수 있나요?',
    ctaKeyword: '무보험 정부보장사업 한도 점검',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '무보험차상해 + 정부보장사업 — 4단계 한도 결합 | 로앤가이드',
      description:
        '가해자가 무보험·도주라면 본인 무보험차상해 특약 + 정부보장사업 + 한도 비교 4가지 결합 보상 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신호 대기 중에 뒤차가 추돌했는데 가해자가 \'책임보험만 가입\'이고 합의금을 부르지도 못하겠다고 합니다. 인터넷에 \'정부보장사업\'과 \'무보험차상해 특약\' 둘 다 받으면 한도가 더 늘어난다는 글을 봤는데, 정확히 어떻게 결합해야 하나요?" 가해자가 무보험·미가입·도주거나 책임보험만 있어 보상이 부족할 때 ① 정부보장사업(자동차손해배상보장법 제30조, 책임보험 한도) ② 본인 무보험차상해 특약(약관 한도 1~5억원 영역) ③ 두 트랙 공제 조정(중복 보상 방지) ④ 가해자 직접 청구(잔여 손해) 4가지 결합 트랙으로 보상이 갈리는 영역입니다. 정부보장사업은 책임보험 한도 내(대인1 1억 5천만원·대인2 추가) 보상하고, 무보험차상해 특약은 본인 보험 약관 기준이라 둘이 결합되면 총 한도가 늘어나는 영역이에요. 다만 같은 손해 항목 중복 수령은 공제되어 \'한도가 더 큰 쪽\' + \'잔여 손해 청구\' 트랙 정리가 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 무보험·도주 사고 4가지 결합 보상 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 정부보장사업·무보험차상해·중복 조정·잔여 청구 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정부보장사업 (자동차손해배상보장법 제30조)</strong> — 가해자 불명·무보험·도주·책임보험 미가입 시 정부가 책임보험 한도(대인1 1억 5천만원·대인2 추가)로 보상. 손해보험협회 위탁.</li>\n<li><strong>② 본인 무보험차상해 특약</strong> — 본인 자동차보험 약관 기준 영역. 1인당 2억~5억원 한도 약관 다양. 가해자 무보험·도주 등 사유 충족 시 적용.</li>\n<li><strong>③ 중복 조정 (공제 영역)</strong> — 같은 손해 항목은 중복 수령 못 함. 한도가 더 큰 쪽 우선 + 부족분 다른 트랙 보충 사례 다수.</li>\n<li><strong>④ 가해자 직접 청구</strong> — 두 트랙 보상 후에도 잔여 손해(위자료 가중·일실수익 초과분)는 가해자 본인 자산 가압류·민사 본안 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2009다46811 사건은 자기신체사고와 무보험차상해 특약의 보상 청구권 관계를 다룬 사례. 두 특약이 결합되면 본인 무보험차상해로 보상받고도 잔액 청구 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 한도 결합 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 본인 보험 확인 → 정부보장사업 청구 → 무보험차상해 청구 → 잔여 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 경찰 사고 신고·블랙박스·CCTV·진단서·치료비 영수증·일실수익 자료. 가해자 신원·차량 등록 확인.</li>\n<li><strong>2단계 — 본인 자동차보험 약관 확인 (1~3일)</strong> — 무보험차상해 특약 가입 여부·한도(1~5억원). 자기신체사고 한도 별도 확인.</li>\n<li><strong>3단계 — 정부보장사업 청구 (3년 시효)</strong> — 손해보험협회 1544-0114. 가해자 불명·무보험·도주 사유 입증. 진단서·치료비·경찰 사건사고사실확인원.</li>\n<li><strong>4단계 — 무보험차상해 특약 청구 (3년 시효)</strong> — 본인 보험사. 정부보장사업 수령 명세 첨부 → 중복 조정 후 차액 보상 영역.</li>\n<li><strong>5단계 — 가해자 직접 청구 (잔여 손해 시)</strong> — 위자료 가중·일실수익 초과분. 가해자 자산 가압류·민사 본안. 실효성 검토 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">정부보장사업·무보험차상해·잔여 청구 4가지 결합 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정부보장사업 자료 + 본인 보험 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건사고사실확인원·교통사고확인원</strong> — 가해자 무보험·도주 정황 명시.</li>\n<li><strong>가해자 보험 가입 조회 자료</strong> — 한국손해보험협회·자동차보험 통합조회. 책임보험만 가입 또는 미가입 확인.</li>\n<li><strong>진단서·치료기록·MRI·CT</strong> — 손해 입증 핵심.</li>\n<li><strong>치료비 영수증·교통비·간병비</strong> — 적극적 손해 산정.</li>\n<li><strong>일실수익 자료 (근로계약·소득증빙·사업자등록)</strong> — 휴업손해 산정.</li>\n<li><strong>본인 자동차보험 약관·증권</strong> — 무보험차상해 특약 가입·한도 확인.</li>\n<li><strong>정부보장사업 신청서</strong> — 손해보험협회 양식. knia.or.kr.</li>\n<li><strong>후유장해 진단서 (필요 시)</strong> — 맥브라이드·AMA 기준 장해율.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무보험차상해 특약 한도가 정부보장사업보다 높은 약관 다수. 한도가 더 큰 쪽 우선 청구 + 부족분 다른 트랙 보충이 일반적 영역. 후유장해 산정은 손해사정사 자문(15~50만원) 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·공단 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"가해자 책임보험만 가입이라 정부보장사업 적용 안 된다" 주장 반박</strong> — 책임보험만 가입한 차량은 \'무보험\'이 아니지만 한도 초과분은 무보험차상해·정부보장사업 보충 영역. 한도 비교가 핵심.</li>\n<li><strong>"두 트랙 중복 수령 불가" 검토</strong> — 같은 항목 중복 못 함. 다만 한도가 더 큰 쪽 + 부족분 보충 트랙은 가능 영역. 공제 산정 자료 결합.</li>\n<li><strong>"무보험차상해 특약 가입 안 됐다" 통보</strong> — 본인 자동차보험 약관 재확인. 일반 종합보험에 기본 또는 옵션 포함되는 사례 다수.</li>\n<li><strong>"가해자 자산 없어 잔여 청구 어렵다" 정황</strong> — 가해자 자산 조회·가압류 검토. 실효성 낮으면 본인 보험 한도 내 정리가 현실적 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 정부보장사업 1544-0114</strong> — 무보험·도주 보상.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 의료·재활 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험금 분쟁조정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정부보장사업 한도 산정 + 무보험차상해 특약 결합',
        summary:
          '대법원 2024다238217 사건(대법원, 2025.03.13 선고)에서 법원은 교통사고로 부상한 피해자가 치료를 받던 도중 사망한 경우의 책임보험금에 관해 자동차손해배상 보장법 시행령 제3조 제2항 제1호의 \'제1항 제1호와 제2호에 따른 한도금액의 합산액 범위에서 피해자에게 발생한 손해액\'의 의미를 다루며 책임보험 한도 산정 기준을 판시했습니다. 또한 대법원 2009다46811 사건(대법원, 2009.12.24 선고)은 자기신체사고와 무보험차상해 특약의 청구권 관계에 관해 \'무보험차사고 특약에 의해 보상받을 수 있는 때에는 피보험자로 보지 않는다\'는 규정을 둔 자기신체사고 특약과 \'무보험차사고 보험금에서 자기신체사고에 의해 지급될 수 있는 금액을 공제한다\'는 규정을 둔 무보험차사고 특약에 가입한 경우, 피보험자는 두 보험금 모두 청구할 수 있다고 판시했습니다. 정부보장사업 + 무보험차상해 특약 결합 시 한도 비교 + 잔여 손해 청구 트랙이 결합되는 영역으로 평가됩니다.',
        takeaway: '무보험·도주 사고는 정부보장사업 + 무보험차상해 특약 + 잔여 청구 결합 영역이라, 본인 보험 약관 한도 + 가해자 보험 가입 조회 + 손해 산정 자료를 정리하면 4가지 트랙 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '정부보장사업 한도가 얼마까지 보상되나요?',
        answer:
          '<strong>책임보험 한도 기준 대인1 1억 5천만원·대인2 추가 보상 영역입니다(2024 기준).</strong> 한도 초과분은 무보험차상해 특약·민사 청구 보충.',
      },
      {
        question: '무보험차상해 특약 한도는 어떻게 확인하나요?',
        answer:
          '<strong>본인 자동차보험 약관·증권에서 확인 가능 영역입니다.</strong> 보험사 콜센터·마이페이지. 일반 종합보험에 기본 또는 옵션 포함되는 사례 다수. 한도 1~5억원 약관 다양.',
      },
      {
        question: '가해자가 책임보험만 가입했어도 무보험인가요?',
        answer:
          '<strong>책임보험만 가입한 차량은 \'무보험\'이 아닌 영역입니다.</strong> 다만 책임보험 한도 초과분은 무보험차상해·정부보장사업 보충 가능. 본인 보험 약관 재확인.',
      },
      {
        question: '두 트랙 동시 청구가 가능한가요?',
        answer:
          '<strong>같은 항목 중복 수령은 공제 영역이지만 동시 청구는 가능합니다.</strong> 한도가 더 큰 쪽 우선 + 부족분 다른 트랙 보충. 공제 산정 자료 결합.',
      },
      {
        question: '가해자 자산이 없으면 잔여 청구 어렵나요?',
        answer:
          '<strong>가압류·민사 본안 가능하지만 실효성 낮은 사례 다수 영역입니다.</strong> 본인 보험 한도 내 정리가 현실적. 가해자 미래 자산(상속·소득) 발생 시 시효 안 지나면 청구 가능 영역.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '무보험차 피해자 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-driver-victim' },
      { label: '정부보장사업 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-victim-government-fund' },
      { label: '무보험 차량 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-claim' },
      { label: '뺑소니 신원 확인', href: '/guide/traffic-accident/traffic-accident-hit-and-run-identify-witness' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 5. traffic-accident / traffic-accident-dui-hitandrun-vs-simple-hitandrun-sentence-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-dui-hitandrun-vs-simple-hitandrun-sentence-track',
    keyword: '음주뺑소니 단순뺑소니 형량 차이 사고후미조치',
    questionKeyword: '음주뺑소니와 단순뺑소니, 사고후 미조치죄 어떻게 다른가요?',
    ctaKeyword: '뺑소니 형량 분기 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '음주뺑소니 vs 단순뺑소니 — 형량 4단계 분기 | 로앤가이드',
      description:
        '뺑소니가 음주인지 단순인지, 사고후 미조치죄와 어떻게 다른지 형량 + 합의 + 양형 4가지 분기 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽에 술 한잔 마시고 운전하다 가벼운 접촉사고가 났는데 \'경미해서\' 그냥 갔다가 뺑소니로 신고됐어요. 변호사는 \'음주뺑소니는 일반 뺑소니보다 형량이 훨씬 무겁다\'고 하고, 다른 사람은 \'사고후 미조치죄와 도주치상은 다르다\'고 합니다. 정확한 분기와 대응이 필요합니다." 사고 후 도주는 ① 단순뺑소니(특정범죄가중처벌법 제5조의3 도주치상·도주치사) ② 음주뺑소니(특가법 + 도로교통법 음주운전 결합 가중) ③ 사고후 미조치죄(도로교통법 제54조, 인사사고 아닌 단순 물피사고 도주) ④ 합의·처벌불원서 양형 영향 4가지 분기로 형량과 처리가 갈리는 영역입니다. 음주뺑소니는 형량 가중이 크고, 단순뺑소니라도 인사사고면 1년 이상 유기징역 영역이며, 물피만 도주는 사고후 미조치죄로 5년 이하 또는 1,500만원 이하 벌금 영역. 자료 보존·자수·합의 골든타임이 양형의 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 뺑소니 4가지 형량 분기 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 단순뺑소니·음주뺑소니·사고후 미조치·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단순뺑소니 (특가법 제5조의3 도주치상)</strong> — 인사사고 후 구호조치 없이 도주. 상해 시 1년 이상 유기징역 또는 500~3,000만원 벌금. 사망 시 무기 또는 5년 이상 영역.</li>\n<li><strong>② 음주뺑소니 (특가법 + 도로교통법 음주 결합)</strong> — 음주 + 도주치상은 가중 영역. 음주운전 별도 처벌 + 뺑소니 양형 가중. 합의 영향 제한적 사례 다수.</li>\n<li><strong>③ 사고후 미조치죄 (도로교통법 제54조)</strong> — 인사사고 아닌 단순 물피사고 도주. 5년 이하 징역 또는 1,500만원 이하 벌금 영역. 인사사고면 단순뺑소니로 분기.</li>\n<li><strong>④ 합의·처벌불원서 (양형 영향)</strong> — 단순뺑소니는 합의 시 양형 감경 영역. 음주뺑소니는 합의해도 형량 다툼. 사고후 미조치는 합의 + 처벌불원서로 \'공소권 없음\' 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 서울서부지법 2023노1354 사건은 도주치상 + 사고후 미조치 결합 사례. 사고 후 정차하지 않고 도주하면 두 죄가 모두 성립할 수 있는 영역으로 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 뺑소니 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자수·자료 보존 → 변호인 선임 → 합의 → 형사 절차 → 양형 변론 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자수 검토 (가능한 한 즉시)</strong> — 도주 후 자수는 양형 감경 사유. 음주 동반 시 위드마크 영향 검토. 변호인 자문 권장.</li>\n<li><strong>2단계 — 자료 보존</strong> — 본인 블랙박스·CCTV·차량 손상 사진·사고 시각·진로. 음주 시 음주측정 시점·농도 자료(2024도11906 위드마크 다툼).</li>\n<li><strong>3단계 — 변호인 선임 + 합의 시도 (송치 전 우선)</strong> — 피해자 합의금 산정 + 처벌불원서. 단순뺑소니는 양형 감경 영향 큼. 음주뺑소니는 영향 제한 사례.</li>\n<li><strong>4단계 — 형사 절차 (송치 후 1~6개월)</strong> — 검찰 송치·기소·1심. 단순뺑소니: 1년 이상 또는 벌금. 음주뺑소니: 가중 양형. 사고후 미조치: 5년 이하 또는 벌금.</li>\n<li><strong>5단계 — 양형 변론 + 항소 검토</strong> — 초범·반성·합의·생업·가족 정황 자료. 항소 시 1심 선고 후 7일 내. 변호인 자문 권장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단순뺑소니·음주뺑소니·사고후 미조치 4가지 분기 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 정황 자료 + 양형·합의 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스·CCTV·차량 손상 사진</strong> — 사고 정황·도주 의도 입증·반박 핵심.</li>\n<li><strong>피해자 진단서·치료비 영수증</strong> — 인사사고 여부·합의금 산정.</li>\n<li><strong>경찰 사건사고사실확인원·교통사고확인원</strong> — 사고 분류(인사/물피).</li>\n<li><strong>음주측정 결과지 (음주 동반 시)</strong> — 농도·측정 시점. 위드마크 다툼 자료.</li>\n<li><strong>합의서 + 처벌불원서</strong> — 단순뺑소니 양형 감경 핵심.</li>\n<li><strong>탄원서·반성문·생업 자료</strong> — 양형 자료. 변호인 자문 결합.</li>\n<li><strong>자수 신고서 (자수 시)</strong> — 양형 감경 사유. 시간·동기 명시.</li>\n<li><strong>변호인 변론요지서</strong> — 송치·1심·항소 단계별.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단순뺑소니는 합의 + 처벌불원서로 양형 큰 폭 감경 사례. 음주뺑소니는 합의해도 가중 양형 영향 제한적. 자수 + 합의 결합이 양형 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"경미한 접촉이라 도주 의도 없었다" 주장 반박</strong> — 피해자 부상 인지 + 정차하지 않으면 도주치상 성립 영역(2023노1354). 경미해도 구호조치 의무 + 인적사항 제공 의무.</li>\n<li><strong>"음주는 별개라 가중 안 된다" 주장 반박</strong> — 음주 + 도주는 결합 가중 영역. 음주운전 별도 처벌 + 뺑소니 양형 가중. 형량 차이 큼.</li>\n<li><strong>"물피만이라 사고후 미조치도 아니다" 주장 검토</strong> — 도로교통법 제54조 위반은 인적사항 미제공·구호조치 미흡 모두 해당. 5년 이하 또는 1,500만원 이하 영역.</li>\n<li><strong>"피해자 합의 거부" 대응</strong> — 공탁 가능. 단순뺑소니는 공탁으로 양형 일부 영향. 음주뺑소니는 영향 제한 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>도로교통공단 1577-7800</strong> — 도주·사고후 미조치 법규 안내.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 피해자 측 의료·재활 상담.</li>\n<li><strong>금융감독원 1332</strong> — 사고부담금·보험금 분쟁.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도주치상 + 사고후 미조치 결합 성립',
        summary:
          '서울서부지법 2023노1354 사건(서울서부지법, 2024.08.22 선고)에서 법원은 차량 운전자가 유턴 가능 구역이 아닌 곳에서 유턴하다가 횡단보도 부근 오토바이 운전자와 충돌한 후 도주한 사안에 관해 특정범죄가중처벌등에관한법률 위반(도주치상)·도로교통법 위반(사고후미조치) 죄책을 다루었으며, 피고인의 유턴 행위와 사고 사이에 상당인과관계가 있다고 본 원심판단을 수긍한 사례입니다. 또한 대법원 2025도8137 사건(대법원, 2025.12.11 선고)은 음주운전 시점 혈중알코올농도 입증 기준을 다루었고, 대법원 2024도11906 사건(대법원, 2025.07.18 선고)은 위드마크 공식 적용 기준을 판시했습니다. 음주 + 도주 결합 사고는 음주측정 시점·농도 입증과 도주 의도 모두 형사 절차의 핵심 쟁점이라, 자수·합의·자료 결합으로 양형 다툼 트랙을 정리할 수 있는 영역으로 평가됩니다.',
        takeaway: '뺑소니 사고는 단순/음주/물피 분기에 따라 형량과 합의 영향이 크게 달라지는 영역이라, 사고 정황·음주측정·합의서·자수 자료를 정리하면 4가지 양형 트랙 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '경미한 접촉인데 그냥 가도 뺑소니인가요?',
        answer:
          '<strong>피해자 부상 정황 인지 후 정차 없이 가면 도주치상 성립 영역입니다.</strong> 경미해도 구호조치 + 인적사항 제공 의무. 물피만이면 사고후 미조치죄(도로교통법 제54조).',
      },
      {
        question: '음주 + 도주면 형량이 얼마나 무거워지나요?',
        answer:
          '<strong>음주운전 별도 처벌 + 뺑소니 양형 가중 결합 영역입니다.</strong> 사례별 다르지만 단순뺑소니보다 실형 비율 높음. 합의해도 양형 영향 제한적 사례.',
      },
      {
        question: '자수하면 형량이 줄어드나요?',
        answer:
          '<strong>자수는 형법 제52조 자수 감경 사유 영역입니다.</strong> 임의적 감경이지만 실무상 양형 영향 큼. 단 도주 후 한참 뒤 자수는 효과 제한 사례. 변호인 자문 권장.',
      },
      {
        question: '단순뺑소니는 합의하면 처벌 안 받나요?',
        answer:
          '<strong>특가법 도주치상은 반의사불벌죄 아니라 합의해도 처벌 영역입니다.</strong> 다만 합의 + 처벌불원서는 양형 감경 핵심. 집행유예·벌금형 다툼.',
      },
      {
        question: '사고후 미조치는 인사사고 없으면 무죄인가요?',
        answer:
          '<strong>도로교통법 제54조는 인적사항 미제공·구호조치 미흡 모두 해당 영역입니다.</strong> 물피만이라도 5년 이하 또는 1,500만원 이하 벌금. 합의 + 처벌불원서로 \'공소권 없음\' 가능.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '뺑소니 가해자 1차 대응', href: '/guide/traffic-accident/traffic-accident-hitandrun-charge-first-response' },
      { label: '뺑소니 무고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '뺑소니 가해자 신원', href: '/guide/traffic-accident/traffic-accident-hit-and-run-identify-witness' },
      { label: '음주측정 위드마크', href: '/guide/traffic-accident/traffic-accident-breath-test-refusal-widmark-estimation' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },
];
