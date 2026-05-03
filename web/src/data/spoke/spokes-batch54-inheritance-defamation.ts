import { SpokePage } from '../spoke-pages';

// batch54 inheritance 3개 + defamation 3개 (batch53과 다른 분기축):
//   inheritance:
//     1. 유류분 부족분 청구 절차 (절차형, victim — 직계비속 1/2 침해 청구)
//     2. 사후 인지청구와 상속권 다툼 (Q&A형, victim — 혼외자 사후 인지)
//     3. 상속세 신고기한 6개월 놓쳤을 때 가산세 (Q&A형, neutral)
//   defamation:
//     1. 유튜브 영상 댓글 명예훼손 고소 (절차형, victim — 댓글 캡처·임시조치)
//     2. 회사 단톡방 험담 가해자 측 방어 (Q&A형, accused — 혐의를 받고 있다면)
//     3. 학폭 카더라 후 인터넷 게시 정정·삭제 (절차형, victim — 방심위 + KISO)
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 피상속인이 다른 자녀·배우자·제3자에게 생전증여·유증·사인증여를 몰아준 결과 본인의 유류분(법정상속분 1/2)이 침해된 직계비속·배우자가, 유류분 부족분을 산정·청구하는 5단계 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 피상속인 사망 후 인지청구의 소(혼외자 사후 인지)로 자녀 신분을 확인받은 사람이 이미 분할된 상속재산에 대해 상속분 상당의 가액 지급을 청구하는 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 상속세 신고기한(상속개시일이 속한 달 말일부터 6개월) 을 도과한 상속인이 무신고가산세·납부지연가산세 부담과 기한 후 신고·수정신고 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 본인이 출연한 유튜브 영상이나 본인 관련 영상에 달린 비방 댓글 때문에 평판이 훼손된 피해자가, 댓글 캡처·임시조치·정통망법 제70조 고소 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 회사 내부 단톡방·익명 사내 메신저에 동료를 험담했다가 정통망법 위반·모욕죄로 고소당한 가해자가, 비방 목적 부정·공익성 항변·합의 트랙을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 자녀가 학교폭력 가해자라는 사실확인되지 않은 카더라 글이 인터넷 카페·블로그·SNS에 게시된 학생·학부모가, 임시조치 + 방심위 심의 + KISO 자율심의 + 사실조회 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch54InheritanceDefamation: SpokePage[] = [
  // ─── 1. inheritance / yuryubun-shortage-claim-procedure ───
  {
    domain: 'inheritance',
    slug: 'inheritance-yuryubun-shortage-claim-procedure',
    keyword: '유류분 부족분 청구 절차',
    questionKeyword: '아버지가 형에게만 모든 재산을 증여하고 돌아가셨어요. 제 유류분 부족분은 어떻게 계산하고 청구하나요?',
    ctaKeyword: '유류분 부족분 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유류분 부족분 청구 — 산정·반환 5단계 절차 | 로앤가이드',
      description:
        '피상속인이 특정 상속인·제3자에게만 재산을 몰아줬다면 유류분 부족분 산정 + 반환청구 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가시기 5년 전부터 큰형에게 30억 상당 부동산과 사업체를 몰아주셨어요. 막상 사망하시고 보니 남은 재산은 거의 없고, 제 몫(법정상속분)도 없는 상태입니다." 민법 제1112조 유류분 제도는 <strong>직계비속·배우자는 법정상속분의 1/2, 직계존속·형제자매는 1/3</strong>을 보장하는 제도예요. 피상속인이 생전증여·유증·사인증여로 특정인에게 재산을 몰아주어 본인의 유류분이 침해되면 <strong>유류분 부족분에 대한 반환청구</strong>가 가능합니다. 부족분 산정 + 반환청구 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '유류분 산정 — 4가지 핵심 공식',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지가 유류분 부족분 산정의 골격입니다.</strong></p>\n<ul>\n<li><strong>유류분 비율(민법 제1112조)</strong> — 직계비속·배우자 1/2, 직계존속·형제자매 1/3. 자녀 본인의 법정상속분이 1/3이라면 유류분은 1/3 × 1/2 = 1/6.</li>\n<li><strong>유류분 산정 기초재산</strong> — 상속개시 시 적극재산 + 1년 이내 증여(제3자) + 기간 무관 공동상속인 증여(특별수익) − 채무. 공동상속인 증여는 시기 무관 모두 합산.</li>\n<li><strong>유류분 부족액</strong> — (유류분 산정 기초재산 × 유류분 비율) − (본인이 받은 특별수익 + 본인 순상속분).</li>\n<li><strong>반환 순서</strong> — 유증 먼저, 그 다음 증여(시기 역순). 동시 유증·증여는 가액 비율로 안분(민법 제1116조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유류분 부족분 산정은 시간순 증여·유증 자료를 모두 모아 기초재산을 재구성한 뒤 본인 몫을 빼는 구조라, 부동산 등기·예금 거래내역·사업체 주식 변동 자료가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 유류분 부족분 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증여·유증 자료 수집 (사망 후 1~2개월)</strong> — 부동산 등기부등본 변동내역, 피상속인 예금 거래내역(10년치), 사업체 주식 이전 자료, 보험 수익자 변경 자료. 가족관계증명서·제적등본으로 상속관계 확정.</li>\n<li><strong>2단계 — 유류분 부족액 계산</strong> — 적극재산 + 증여 합산 − 채무 = 기초재산. 유류분 비율 곱한 뒤 본인 특별수익·순상속분 차감. 변호사·세무사 검토 권장.</li>\n<li><strong>3단계 — 내용증명 발송 + 부동산 처분금지 가처분 (필요시)</strong> — 반환의무자(증여·유증 받은 사람)에게 "유류분 반환청구" 내용증명. 부동산이 임의처분될 우려가 있으면 즉시 처분금지 가처분.</li>\n<li><strong>4단계 — 유류분반환청구의 소 (가정법원 또는 지방법원, 8~18개월)</strong> — 시효: 침해를 안 날부터 1년·상속개시일부터 10년 중 먼저 도래. 청구 취지에 부족액 + 반환 방법(가액 또는 원물) 명시.</li>\n<li><strong>5단계 — 가액배상 또는 원물반환 집행</strong> — 원물반환 원칙이지만 부동산이 매각되었거나 가액 분쟁 시 가액배상으로 환산 집행. 승소 후 강제집행으로 회수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분 산정 공식·시효 임박·반환 순서 다툼이 사안마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">유류분반환청구의 소에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>피상속인 가족관계증명서·제적등본·사망진단서</strong> — 상속관계·사망 사실 입증.</li>\n<li><strong>부동산 등기부등본 변동내역</strong> — 피상속인 명의 부동산이 누구에게 언제 이전됐는지 추적. 등기소·대법원 인터넷등기소.</li>\n<li><strong>피상속인 금융거래내역(과거 10년)</strong> — 은행·증권 계좌 입출금 내역. 큰 금액 이체가 증여 추정 자료.</li>\n<li><strong>사업체 주식 변동·법인등기부</strong> — 비상장 주식·지분 이전이 증여로 평가될 수 있음.</li>\n<li><strong>보험 수익자 변경·보험금 수령 자료</strong> — 사망보험금 수익자가 특정 자녀로 지정되면 별도 검토.</li>\n<li><strong>특별수익 비교 자료</strong> — 본인이 받은 생전증여(결혼자금·학비 등)도 차감 대상이라 솔직히 정리.</li>\n<li><strong>인감증명서·실인</strong> — 소장 인감날인용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "사망 1년 전 증여만 산정 대상"으로 오해. 공동상속인(자녀·배우자) 증여는 시기 무관 모두 합산이라 10년·20년 전 증여도 추적 대상입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 유류분 청구 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>시효 도과</strong> — 침해를 안 날부터 1년·상속개시일부터 10년 중 먼저 도래. 사망 직후 증여 사실을 알았다면 1년 시효가 짧으니 즉시 시작.</li>\n<li><strong>증여 자료 입증 부족</strong> — 등기부에 매매로 기재됐어도 실질이 증여라면 입증 가능. 송금 내역·세무신고 자료·증인이 핵심.</li>\n<li><strong>본인 특별수익 누락</strong> — 본인이 받은 생전증여를 누락하고 청구하면 반박당해 부족액이 줄어듦. 솔직히 산정한 뒤 청구.</li>\n<li><strong>가액평가 시점</strong> — 증여재산 가액은 상속개시 시 평가가 원칙. 부동산 시세 급등기엔 평가시점·감정가 다툼이 핵심 쟁점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사신청과 / 지방법원 민사신청과(처분금지 가처분) / 한국가정법률상담소 / 등기소(부동산 변동내역 발급).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유류분 산정과 명의신탁된 부동산의 기초재산 포함',
        summary:
          '대법원 2023다304568(대법원, 2024.06.13 선고) 사건에서 법원은 계약명의신탁의 명의수탁자가 신탁된 부동산을 명의신탁자에게 양도하고 사망한 경우, 그 부동산은 유류분 산정의 기초재산에 포함된다고 판시했습니다. 유류분 청구는 표면상 계약 형식보다 실질적 재산 귀속을 따져 기초재산을 재구성하는 영역이라, 등기·매매 형식만 보지 말고 실질 귀속을 입증하는 자료(자금 출처·이용 실태·세무 신고)를 함께 정리해두면 도움이 됩니다.',
        takeaway: '유류분 부족분 청구는 표면상 거래 형식이 아니라 실질 재산 귀속을 입증하는 자료가 핵심이라, 자금 흐름·등기 변동·세무 신고를 시간순 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '아버지가 사망 8년 전 형에게 부동산을 증여했어요. 1년 이내가 아닌데 유류분 산정에 포함되나요?',
        answer:
          '<strong>공동상속인(자녀·배우자) 증여는 시기 무관 모두 합산됩니다.</strong> 1년 제한은 제3자(공동상속인이 아닌 사람) 증여에만 적용. 자녀·배우자 증여는 8년 전·20년 전이라도 유류분 산정 기초재산에 포함.',
      },
      {
        question: '유류분 부족액이 5억인데 형이 받은 부동산은 매각하고 가액이 흩어졌어요. 어떻게 회수하나요?',
        answer:
          '<strong>가액배상으로 청구합니다.</strong> 원물반환이 불가하거나 부적절하면 매각가액 또는 상속개시 시 시가로 환산해 가액배상 청구. 형 명의의 다른 재산에 강제집행 가능.',
      },
      {
        question: '제가 결혼할 때 5천만원 받은 적이 있어요. 그것도 차감되나요?',
        answer:
          '<strong>특별수익이면 차감 대상입니다.</strong> 결혼·학자금·사업자금은 통상 특별수익으로 인정되어 본인 유류분에서 차감. 일반 명절 용돈·생활비 지원은 특별수익이 아닐 가능성. 사례별 다툼.',
      },
      {
        question: '시효 1년이 다가오는데 정확한 부족액을 모르겠어요. 일단 소를 제기해도 되나요?',
        answer:
          '<strong>네, 시효 보전 차원에서 일부 청구로 먼저 제기 가능합니다.</strong> 부족액 일부를 청구한 뒤 소송 중 부족액이 더 크다고 판명되면 청구취지 확장. 시효는 일단 보전됨.',
      },
      {
        question: '유류분 청구하면 가족 관계가 완전히 깨질 것 같은데 조정으로 끝낼 수 있나요?',
        answer:
          '<strong>가정법원 조정 또는 합의 종결이 가능합니다.</strong> 일부 가액·일부 부동산 분배로 조정 성립도 자주 보임. 조정 성립 시 재판상 화해 효력으로 강제집행권원 확보.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '유류분 10년 시효 한도', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '특별수익과 상속분 조정', href: '/guide/inheritance/inheritance-special-benefit-adjustment' },
      { label: '상속재산분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유류분 증여 산정 범위', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
    ],
  },

  // ─── 2. inheritance / paternity-acknowledgment-share ───
  {
    domain: 'inheritance',
    slug: 'inheritance-paternity-acknowledgment-share',
    keyword: '사후 인지청구와 상속권',
    questionKeyword: '아버지가 돌아가신 뒤 인지청구 소송으로 자녀임을 인정받았어요. 이미 분할된 상속재산에서 제 몫을 받을 수 있나요?',
    ctaKeyword: '사후 인지 상속권 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사후 인지청구와 상속권 — 가액 지급 4단계 | 로앤가이드',
      description:
        '피상속인 사망 후 인지소송으로 자녀임을 인정받고 이미 분할된 상속재산에 대해 가액 지급을 청구하려면 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지는 돌아가시기 전까지 저를 자녀로 인지하지 않으셨어요. 사망 1년 뒤 인지청구의 소를 제기해 친자관계가 인정됐는데, 그 사이 다른 형제들은 이미 부동산·예금을 다 분할해 가져갔습니다." 민법 제864조 사후 인지청구는 <strong>피상속인 사망일부터 2년 내</strong> 가능하고, 인지가 확정되면 자녀로서 상속권이 소급 인정됩니다. 다만 이미 분할된 재산은 원물 회복 대신 <strong>민법 제1014조 상속분 상당의 가액 지급청구</strong>로 회수하는 트랙이에요. 가정법원·민사 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 사후 인지청구는 언제까지 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 시한과 절차가 명확합니다.</strong></p>\n<ul>\n<li><strong>인지청구의 소 시한(민법 제864조)</strong> — 피상속인 사망 사실을 안 날부터 2년 내. 검사를 상대로 가정법원에 제기. 시효 도과하면 친자관계 확인 어려움.</li>\n<li><strong>관할</strong> — 피상속인 보통재판적이 있던 가정법원. 부산·대구 등 지역별.</li>\n<li><strong>입증 자료</strong> — DNA 감정(피상속인 친족과 비교), 출생 당시 정황(어머니·증인 진술), 양육비 송금 기록, 사진·영상.</li>\n<li><strong>인지의 효력</strong> — 출생 시로 소급. 출생부터 자녀였던 것으로 의제되어 상속권 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사후 인지는 시한이 짧고 DNA 감정이 핵심이라, 사망 직후 가족·친족과의 관계를 빠르게 정리하는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: 'Q. 이미 분할된 재산은 어떻게 회수하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법 제1014조 가액 지급청구가 핵심 트랙입니다.</strong></p>\n<ul>\n<li><strong>원칙 — 원물반환 어려움</strong> — 다른 상속인이 이미 부동산을 매각하거나 등기 이전한 경우 원물반환 곤란. 거래 안전 보호.</li>\n<li><strong>대안 — 가액 지급청구(민법 제1014조)</strong> — 인지된 자녀가 다른 상속인에게 자기 상속분 상당의 가액 지급 청구. 분할 시점 또는 청구 시점 가액 평가 다툼.</li>\n<li><strong>시효</strong> — 통상 채권 일반 10년 시효(다툼 여지 있음). 인지 확정 후 신속한 청구 권장.</li>\n<li><strong>관할·소가</strong> — 지방법원 민사부. 청구 가액에 따라 단독·합의부 결정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사후 인지·가액 지급청구·시효는 사안마다 갈래가 다양해요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">인지청구·가액지급청구에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서</strong> — 사망 사실·인지청구 시한 기산점 확정.</li>\n<li><strong>본인 출생증명서·기본증명서</strong> — 출생일자·생모 정보. 인지 전엔 부 칸 공란.</li>\n<li><strong>DNA 감정 동의서·검사 결과</strong> — 피상속인 친족(이복형제·조카 등) 동의 후 친자감정. 기관 인증 보고서.</li>\n<li><strong>출생 당시 정황 증거</strong> — 양육비 송금내역, 사진, 친족 진술서, 학교 기록.</li>\n<li><strong>분할된 상속재산 자료</strong> — 부동산 등기부 변동, 예금 인출 내역, 분할협의서. 가액 산정 기초.</li>\n<li><strong>다른 상속인 인적사항</strong> — 가액 지급청구 피고로 특정.</li>\n<li><strong>인감증명서·실인</strong> — 소장 인감날인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "친자감정 거부하면 끝"이라고 포기하지 마세요. 가정법원이 친자감정 명령 + 거부 시 자유심증으로 친자관계 추정하는 사례가 보고되고 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 사후 인지·상속권 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>2년 시한 도과</strong> — 사망 안 날부터 2년이 핵심. 늦게 알았다면 인지 시점부터 카운팅 입증 자료(소식 들은 시기) 보존.</li>\n<li><strong>DNA 거부 회피</strong> — 친족 감정 거부 시 가정법원이 직권으로 감정 명령. 거부 자체가 추정 근거가 될 수 있음.</li>\n<li><strong>원물반환 고집</strong> — 부동산이 이미 매각되었거나 선의 매수인이 있으면 원물반환 곤란. 가액배상으로 빠르게 전환이 실익.</li>\n<li><strong>가액 평가 시점 다툼</strong> — 분할 당시 시가 vs 청구 당시 시가. 부동산 급등 시 평가시점이 핵심 쟁점이라 감정평가서 미리 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사1과(인지청구) / 지방법원 민사부(가액지급청구) / 한국가정법률상담소 1644-7077.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사후 인지된 자녀의 상속분 가액 지급청구',
        summary:
          '대법원 2022다220014(대법원, 2025.05.29 선고) 사건에서 법원은 상속인이 다른 상속인을 상대로 상속세 등의 대납에 따른 구상금을 청구한 사안을 다루며, 상속분에 따른 부담·이익은 상속인 사이에서 형평에 맞게 정리되어야 한다고 판시했습니다. 사후 인지된 자녀가 이미 분할된 재산에 대해 가액 지급청구를 할 때도 다른 상속인이 부담한 상속세·관리비용 등이 함께 정산 대상이라, 분할 후 비용 자료까지 함께 준비해두면 도움이 됩니다.',
        takeaway: '사후 인지된 자녀의 가액 지급청구는 분할재산 가액뿐 아니라 다른 상속인이 부담한 상속세·비용까지 정산 대상이라, 분할 이후 비용 자료를 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: 'DNA 감정에 다른 형제들이 협조 안 해주면 어떻게 하나요?',
        answer:
          '<strong>가정법원이 직권으로 감정 명령을 내릴 수 있습니다.</strong> 명령에도 거부하면 자유심증주의에 따라 친자관계 추정 근거로 작용. 거부 자체가 불리한 정황이 될 수 있어요.',
      },
      {
        question: '인지가 확정되면 다른 형제들 명의 부동산을 제 명의로 바꿀 수 있나요?',
        answer:
          '<strong>이미 등기·이전된 부동산은 원물반환이 어려운 영역입니다.</strong> 거래 안전 보호로 가액 지급청구로 전환. 다만 다른 형제 명의 그대로 보유 중이면 일부 원물반환·공유 등기 검토 가능.',
      },
      {
        question: '인지 후 상속세는 어떻게 처리되나요?',
        answer:
          '<strong>상속세 경정청구가 가능할 수 있습니다.</strong> 신고기한 후 5년 내 경정청구. 인지로 상속인이 추가되면 일괄공제·인적공제가 달라져 환급·재산정 가능.',
      },
      {
        question: '아버지가 살아 계실 때 저를 인지 안 한 이유로 양육비도 못 받았어요. 그것도 청구되나요?',
        answer:
          '<strong>양육비 소급 청구는 별개 트랙으로 검토 가능한 영역입니다.</strong> 인지 효력이 출생 시로 소급되면 어머니가 단독 부담한 양육비 일부에 대해 인지된 부의 상속인에게 구상 청구 가능성. 시효·증명력 다툼.',
      },
      {
        question: '친아버지가 유언장으로 저를 제외했어요. 인지 후 유류분 청구도 가능한가요?',
        answer:
          '<strong>네, 인지 확정 후 유류분 청구가 가능합니다.</strong> 인지 효력은 출생 시 소급이므로 자녀로서 유류분권자 지위 인정. 시효는 침해를 안 날부터 1년, 상속개시일부터 10년 한도.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '협의분할 조정 절차', href: '/guide/inheritance/inheritance-agreement-division-mediation' },
      { label: '특별수익과 상속분 조정', href: '/guide/inheritance/inheritance-special-benefit-adjustment' },
      { label: '단순승인 후 숨은 채무 회수', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
    ],
  },

  // ─── 3. inheritance / tax-late-filing-penalty-relief ───
  {
    domain: 'inheritance',
    slug: 'inheritance-tax-late-filing-penalty-relief',
    keyword: '상속세 신고기한 도과 가산세',
    questionKeyword: '상속세 신고기한 6개월을 그냥 넘겼어요. 가산세는 얼마나 붙고 어떻게 줄일 수 있나요?',
    ctaKeyword: '상속세 가산세 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '상속세 신고기한 도과 — 가산세 산정·감면 4단계 | 로앤가이드',
      description:
        '상속세 신고기한 6개월을 놓쳤다면 무신고가산세·납부지연가산세 산정 + 기한 후 신고로 줄이는 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가신 후 정신없이 장례·재산정리만 하다가 상속세 신고기한 6개월이 그냥 지나가 버렸어요. 9개월쯤 지나서 세무서에서 안내문이 왔는데, 무신고가산세 20% + 납부지연가산세까지 붙는다고 합니다." 상속세 신고기한은 <strong>상속개시일이 속한 달의 말일부터 6개월</strong>(피상속인이 비거주자면 9개월)이고, 도과하면 <strong>무신고가산세(일반 20%·부정 40%) + 납부지연가산세(연 약 8.03%)</strong>가 부과됩니다. 다만 기한 후 신고·수정신고·감액 신고로 가산세 일부 감면이 가능한 영역이라, 신고 트랙을 빠르게 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 가산세는 얼마나 붙나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 두 가지 가산세가 합산됩니다.</strong></p>\n<ul>\n<li><strong>무신고가산세(국세기본법 제47조의2)</strong> — 일반 무신고는 산출세액의 20%, 부정 무신고(고의 은닉)는 40%. 부정 무신고는 사기·은닉이 입증되어야 적용.</li>\n<li><strong>납부지연가산세(국세기본법 제47조의4)</strong> — 미납세액 × 미납일수 × 일 0.022%(연 약 8.03%). 신고기한 다음 날부터 실제 납부일까지 매일 계산.</li>\n<li><strong>과소신고가산세</strong> — 신고는 했지만 적게 신고한 경우. 일반 10%, 부정 40%. 평가차이·공제 누락 등 사유 검토.</li>\n<li><strong>자진신고세액공제(2022년 폐지)</strong> — 과거 3% 공제는 폐지. 현재는 적기 신고 자체가 기본 의무.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무신고가산세 20%(부정 40%) + 납부지연가산세(연 약 8%)가 합산되므로, 신고기한 도과 후에도 가능한 빨리 기한 후 신고로 손해를 줄이는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: 'Q. 가산세를 줄일 수 있는 트랙이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 감면 트랙이 검토 대상입니다.</strong></p>\n<ul>\n<li><strong>기한 후 신고 감면(국세기본법 제48조)</strong> — 신고기한 후 1개월 내 50%, 1~3개월 30%, 3~6개월 20% 감면. 늦더라도 빠를수록 유리.</li>\n<li><strong>수정신고 감면</strong> — 과세관청 통지 전 수정신고 시 기간별 감면(법정신고기한 후 1개월 내 90%, 3개월 내 75% 등).</li>\n<li><strong>가산세 감면 신청(국세기본법 제48조 제1항)</strong> — 천재지변·납세자 책임 없는 사유(중병·사업 도산 등) 입증 시 감면 신청. 의료기록·법인 도산 자료 첨부.</li>\n<li><strong>분할납부·연부연납</strong> — 1천만원 초과 시 2개월 내 분할, 2천만원 초과 시 최장 10년 연부연납. 가산세는 별도지만 일시 부담은 분산 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">기한 후 신고·수정신고·연부연납 트랙이 사안마다 갈라져요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 상속세 가산세 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">국세청·찾기쉬운 생활법령정보 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱서비스로 재산 일괄 조회 (즉시)</strong> — 정부24·주민센터에서 부동산·예금·보험·연금·세금·카드 일괄 조회. 누락 위험 차단.</li>\n<li><strong>2단계 — 상속세 과세표준 산정 + 공제 적용</strong> — 기본공제 2억 + 일괄공제 5억 또는 배우자공제(최소 5억·최대 30억). 5억(일괄) 또는 10억(배우자) 미만이면 사실상 비과세 검토.</li>\n<li><strong>3단계 — 기한 후 신고 (도과 직후)</strong> — 피상속인 주소지 관할 세무서. 빠를수록 가산세 감면율 높음(1개월 내 50%·3개월 내 30%). 홈택스 전자신고도 가능.</li>\n<li><strong>4단계 — 분할납부·연부연납·가산세 감면 신청 (납부 단계)</strong> — 1천만원 초과 분할납부, 2천만원 초과 연부연납(최장 10년) 신청. 천재지변·중병 등 사유 있으면 가산세 감면 신청서 별도 제출.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 상속세 신고 도과 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"신고 안 해도 세무서가 모를 것"</strong> — 부동산 등기·금융 거래·사망신고 자동 연계로 누락 적발 가능성 높음. 부정 무신고로 분류되면 40% 가산세.</li>\n<li><strong>비거주자 9개월 시한 혼동</strong> — 피상속인이 비거주자면 9개월. 거주자 6개월과 다름.</li>\n<li><strong>공제 누락</strong> — 일괄공제·배우자공제·인적공제·금융재산공제(최대 2억) 등 적극 적용 안 하면 세액 부풀어짐.</li>\n<li><strong>경정청구 시한 도과</strong> — 신고 후 5년 내 경정청구로 환급 가능. 과다 신고를 발견하면 즉시 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 국세청 상속세 상담 126 / 홈택스(hometax.go.kr) 기한 후 신고 / 관할 세무서 재산세과 / 한국세무사회 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산관리인의 가산세 부담과 정당 사유',
        summary:
          '대법원 2013두6930(대법원, 2013.07.25 선고) 사건에서 법원은 상속재산관리인이 상속재산을 조사·확인하거나 취득세 등을 납부하는 데에 사실상·법률상 장애가 발생하여 납부가 지연된 경우, 가산세 부과처분이 위법할 수 있다는 취지로 판시했습니다. 일반 상속인도 책임 없는 사유(중병·사고·재산 조사 곤란 등)로 신고가 늦어졌다면 가산세 감면 신청에서 정당 사유를 입증할 자료(진료기록·관련 분쟁 자료)를 함께 정리해두면 도움이 됩니다.',
        takeaway: '상속세 신고 도과로 가산세가 부과되더라도 책임 없는 사유 입증 시 감면이 검토되는 영역이라, 사유 입증 자료를 빠르게 준비해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '6개월 시한이 한 달 지났어요. 지금 신고하면 가산세 얼마나 붙나요?',
        answer:
          '<strong>1개월 내 기한 후 신고면 무신고가산세 50% 감면이 적용될 수 있는 영역입니다.</strong> 즉, 산출세액의 10%(원래 20%의 절반) + 납부지연가산세(연 약 8%). 빠를수록 감면율이 큽니다.',
      },
      {
        question: '상속재산이 5억 이하라 비과세인 줄 알고 신고를 안 했어요. 가산세가 나오나요?',
        answer:
          '<strong>일괄공제 5억·배우자공제 5억(최소) 적용 후 과세표준이 0이면 가산세 부담은 거의 없는 영역입니다.</strong> 다만 신고는 의무라 무신고 자체로 소액 가산세 가능. 신고하면 안전.',
      },
      {
        question: '연부연납하면 가산세도 분할되나요?',
        answer:
          '<strong>가산세 자체는 일시 부과지만 본세와 함께 연부연납 신청 가능한 영역입니다.</strong> 최장 10년 분할납부. 연부연납 이자(가산금) 별도 부담. 일시 부담 어려우면 검토.',
      },
      {
        question: '부정 무신고 40% vs 일반 무신고 20% 구분이 어떻게 되나요?',
        answer:
          '<strong>은닉·허위 자료 제출·차명 거래 등 적극적 부정행위가 있으면 부정으로 분류됩니다.</strong> 단순 무지·실수는 일반 20%. 부정 입증은 세무서 부담이지만 자료가 명확하면 분류될 수 있어요.',
      },
      {
        question: '신고했는데 나중에 부동산 시가가 더 높았다는 평가가 나오면요?',
        answer:
          '<strong>과소신고가산세 10%(부정 40%) + 납부지연가산세가 추가될 수 있습니다.</strong> 다만 평가시점 다툼·공시지가 사용 정당성으로 가산세 감면 신청 가능. 감정평가서 미리 확보 권장.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고기한 6개월 절차', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속세 기한 도과 페널티', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '한정승인 신고 절차', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '안심상속 원스톱서비스 활용', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '상속재산분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
    ],
  },

  // ─── 4. defamation / youtube-comment-victim-complaint ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-victim-complaint',
    keyword: '유튜브 영상 댓글 명예훼손 고소',
    questionKeyword: '제가 출연한 유튜브 영상에 제 실명·직장을 적고 허위 비방 댓글이 수십 개 달렸어요. 어떻게 고소하나요?',
    ctaKeyword: '유튜브 댓글 고소 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유튜브 댓글 명예훼손 — 고소 5단계 절차 | 로앤가이드',
      description:
        '유튜브 영상·라이브에 비방 댓글이 달려 평판이 훼손됐다면 캡처·임시조치·정통망법 제70조 고소 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"제가 인터뷰로 출연한 유튜브 영상에 댓글로 제 실명·직장명을 박고 &lsquo;뇌물 받은 적 있다더라&rsquo;, &lsquo;사생활이 문란하다&rsquo;는 허위 비방이 50개 넘게 달렸어요. 댓글 닉네임은 모두 다르고 작성자가 누군지 모릅니다." 유튜브 댓글 명예훼손은 <strong>정통망법 제70조 사이버명예훼손</strong>이 적용됩니다. 사실 적시 3년 이하/2천만원, 허위 적시 7년 이하/5천만원. 댓글 캡처 + 임시조치(영상·댓글 삭제) + 형사 고소(작성자 IP 추적) 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '유튜브 댓글 명예훼손 — 4가지 적용 법조',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지가 댓글 유형별 적용 법조입니다.</strong></p>\n<ul>\n<li><strong>정통망법 제70조 제1항(사실 적시)</strong> — 비방 목적 + 사실 적시 시 3년 이하/2천만원. 비방 목적 입증이 핵심.</li>\n<li><strong>정통망법 제70조 제2항(허위 적시)</strong> — 비방 목적 + 허위 적시 시 7년 이하/5천만원. 허위 입증 책임은 검사·고소인.</li>\n<li><strong>형법 제311조 모욕죄</strong> — 사실 적시 없이 욕설·인격 모욕만 한 댓글. 1년 이하/200만원. 친고죄(고소 6개월 시효).</li>\n<li><strong>정통망법 제44조의2 임시조치</strong> — 권리침해 정보 30일 차단 신청. 운영자(유튜브)에게 직접 또는 방심위에 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 댓글 명예훼손은 사실/허위/욕설에 따라 적용 법조가 갈리고, 처벌 수준이 다릅니다. 캡처 시점에 분류해두면 절차가 빨라집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 유튜브 댓글 고소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">방송통신심의위원회·경찰청·법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글 캡처 + URL 보존 (즉시, 24시간 내)</strong> — 댓글 본문·작성자 닉네임·작성일자·영상 URL·댓글 좋아요/대댓글 수까지 한 화면 캡처. 작성자가 삭제하기 전 확보가 핵심. 가능하면 화면 녹화.</li>\n<li><strong>2단계 — 유튜브 신고 + 임시조치 (1주 내)</strong> — 유튜브 신고 기능(괴롭힘·명예훼손)으로 댓글 삭제 요청 + 방송통신심의위원회(kocsc.or.kr) 정통망법 제44조의2 임시조치 신청. 30일간 노출 차단.</li>\n<li><strong>3단계 — 사이버명예훼손 고소 (3~6개월)</strong> — 경찰서 사이버수사대 또는 ECRM(ecrm.police.go.kr) 정통망법 제70조 고소. 캡처·URL·피해 자료 첨부. 작성자 미상이면 "성명불상자"로 고소.</li>\n<li><strong>4단계 — IP 추적 + 작성자 특정 (1~3개월, 수사기관 진행)</strong> — 경찰이 유튜브(구글)에 통신자료요청. 한국 협조 사례 있으나 해외 사업자라 제한적. 영장으로 가입자 정보·IP 확보 시도.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (별개 트랙, 6~18개월)</strong> — 정신적 손해(위자료) + 평판 회복 비용. 위자료 사례 200~1,000만원 범위가 자주 보고됨. 다수 댓글이면 손해 합산.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">댓글 캡처·임시조치·IP 추적 트랙이 사안마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">유튜브 댓글 고소·임시조치에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>댓글 캡처(전체 화면)</strong> — 댓글 본문·닉네임·작성일·영상 제목·URL·댓글 수까지. 가능하면 화면 녹화로 보강.</li>\n<li><strong>영상 URL + 영상 캡처</strong> — 본인이 출연한 영상 본문도 함께 보존. 영상 자체가 명예훼손이면 별도 신고.</li>\n<li><strong>본인 신원 자료</strong> — 신분증·재직증명서·명함. 댓글이 본인을 특정한다는 입증.</li>\n<li><strong>피해 사실 자료</strong> — 평판 추락으로 인사평가 불이익·거래 단절·정신과 진료기록·매출 감소 자료.</li>\n<li><strong>고소장</strong> — 작성자 미상이면 "성명불상자" 명시. 댓글 캡처·URL 첨부. 정통망법 제70조 적용 명시.</li>\n<li><strong>임시조치 신청서</strong> — 방송통신심의위원회 양식. 침해 사실·소명자료.</li>\n<li><strong>인감증명서</strong> — 민사 소장·발신자정보명령 신청 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "댓글이 너무 많아 일부만 캡처해도 된다" 생각으로 특정 댓글만 보존하면 다른 가해자 처벌이 어려워질 수 있어요. 가능한 한 전 댓글 보존 + 시간순 정리가 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 유튜브 댓글 추적 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>해외 사업자 협조 한계</strong> — 유튜브(구글)는 미국 사업자. 한국 영장 집행이 제한적. 다만 한국 지사·콘텐츠 정책상 응답하는 사례 있음. 시간 소요.</li>\n<li><strong>닉네임만 알고 작성자 특정 어려움</strong> — 구글 계정 가입자 정보를 영장으로 받아야 특정. 가족 공용 계정이면 추가 좁히기 필요.</li>\n<li><strong>작성자 자가 삭제</strong> — 작성자가 캡처 후 삭제하면 원본 확보 어려움. 캡처 + 화면 녹화로 위·변조 의심 차단.</li>\n<li><strong>대응 댓글로 역고소 위험</strong> — "쟤가 거짓말한다" 댓글로 반박하면 본인이 명예훼손 가해자가 될 수 있음. 임시조치·고소가 정공법.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 방송통신심의위원회(kocsc.or.kr) / 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) / 유튜브 신고센터 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 명예훼손과 비방 목적 인정',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 사건에서 법원은 정보통신망을 이용한 명예훼손에서 게시 글이 사실에 기초했더라도 비방 목적이 인정되면 처벌 대상이 되며, 비방 목적은 게시 동기·맥락·반복성·전파 범위를 종합 검토해 추단할 수 있다고 판시했습니다. 유튜브 댓글도 단발성이 아니라 반복·동조 댓글이 누적되면 비방 목적이 추단될 수 있어, 작성자별·시간별로 댓글을 분류 정리해두면 입증력이 올라가는 것으로 보고되고 있습니다.',
        takeaway: '유튜브 댓글 명예훼손 고소는 댓글 1개씩이 아니라 반복·동조 패턴 자료를 종합 정리해두면 비방 목적 입증력이 올라가는 것으로 보고되고 있습니다.',
      },
    ],
    faq: [
      {
        question: '댓글 작성자가 모두 익명이고 닉네임만 다른데 추적이 가능한가요?',
        answer:
          '<strong>구글 계정 정보 영장으로 가입자 추적이 가능한 영역입니다.</strong> 다만 해외 사업자라 협조에 시간이 걸리고, VPN·차명 계정 사용 시 추적이 어려워지는 사례도 있어요. 캡처를 빠르게 보존하는 것이 핵심.',
      },
      {
        question: '댓글이 50개 넘는데 작성자가 같은 사람이라는 게 입증 가능한가요?',
        answer:
          '<strong>구글 계정 정보·작성 시간대·문체·IP 분석으로 동일인 추정이 가능한 영역입니다.</strong> 수사 단계에서 통신자료요청 + 압수수색으로 좁혀지는 사례가 보고됨. 댓글 시간순 정렬이 도움.',
      },
      {
        question: '본인 영상에 본인이 단 모순 댓글로 자작극이라고 가해자가 주장하면요?',
        answer:
          '<strong>본인 IP·계정 분석으로 자작극 의혹은 쉽게 배제될 수 있는 영역입니다.</strong> 본인 작성 댓글은 동일 IP/계정에서 나오지만 가해 댓글은 다른 IP. 수사 진행 시 자동 구분.',
      },
      {
        question: '유튜브가 댓글을 자동 삭제하기 전에 어떻게 빨리 보존하나요?',
        answer:
          '<strong>화면 녹화(스크린 레코드) + 다중 캡처가 가장 안전합니다.</strong> 모바일·PC 모두 녹화. URL과 함께 보존. 가능하면 공증·내용증명까지 검토. 1~7일 내 모든 자료 확보.',
      },
      {
        question: '댓글 1개에 위자료 얼마나 받을 수 있나요?',
        answer:
          '<strong>사례에 따라 단정 어렵지만 댓글 1개당 100~500만원 수준이 검토되는 사례가 있습니다.</strong> 댓글 수·전파력·피해 정도에 따라 합산. 영상 조회수 100만 회 이상에서 위자료가 높게 검토되는 경향.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 댓글 정통망법 위반', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '익명 게시판 작성자 추적', href: '/guide/defamation/defamation-anonymous-board-tracking' },
      { label: '명예훼손 임시조치 신청', href: '/guide/defamation/defamation-temporary-measure-request' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-civil-damages-procedure' },
    ],
  },

  // ─── 5. defamation / internal-group-chat-rumor-accused ───
  {
    domain: 'defamation',
    slug: 'defamation-internal-group-chat-rumor-accused',
    keyword: '회사 단톡방 험담 가해자 방어',
    questionKeyword: '회사 부서 단톡방에서 동료 험담을 했다가 정통망법 위반으로 고소당했어요. 어떻게 방어하나요?',
    ctaKeyword: '회사 단톡방 험담 방어 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '회사 단톡방 험담 — 가해자 방어 4단계 | 로앤가이드',
      description:
        '회사 단톡방에서 동료 험담했다가 정통망법 위반·모욕죄로 고소당했다면 비방 목적 부정 + 합의 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"부서 단톡방(15명)에서 동료가 회식비 정산을 자꾸 미루는 게 답답해서 &lsquo;그 사람 평소에도 돈 문제로 말이 많다&rsquo;고 적었어요. 그런데 그 동료가 단톡방 캡처를 가지고 정통망법 위반(명예훼손)으로 저를 고소했고, 경찰서 출석요구가 왔습니다." 회사 단톡방 험담은 혐의를 받고 있다면 <strong>① 정통망법 제70조 사이버명예훼손 ② 형법 제311조 모욕죄 ③ 회사 사규 위반(징계)</strong>이 동시에 검토될 수 있는 영역입니다. 단톡방 인원수·발언 내용·반복성에 따라 처벌 수위가 갈려요. 항변·합의 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 발언이 어떻게 명예훼손이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 요건이 결합되면 처벌 대상입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 다수가 들을 수 있는 상태. 단톡방 5명 이상이면 공연성 인정 사례 다수. 1~3명도 전파가능성 이론으로 인정 가능.</li>\n<li><strong>특정성</strong> — 발언 대상이 누군지 다른 사람도 알 수 있어야 함. 실명·직급·부서 명시 시 명확히 충족.</li>\n<li><strong>사실/허위 적시</strong> — 구체적 사실(돈·이성·범죄)을 언급해야 명예훼손. 단순 욕설은 모욕죄(친고죄).</li>\n<li><strong>비방 목적(정통망법 한정)</strong> — 정통망법 제70조는 비방 목적 요건. 사적 감정·복수가 섞이면 비방 목적 추단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단톡방 발언이 사실인지 허위인지, 비방 목적이 있었는지에 따라 처벌 법조와 수위가 갈립니다. 발언 맥락·전후 메시지가 핵심 자료입니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 항변이 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 항변·감경 트랙이 있습니다.</strong></p>\n<ul>\n<li><strong>비방 목적 부정(정통망법 한정)</strong> — 단순 정보 공유·업무 관련 의견·하소연 톤이면 비방 목적 부정 다툼. 발언 맥락·이전 메시지 자료.</li>\n<li><strong>공익성 항변(형법 제310조)</strong> — 회식비 횡령·갑질 등 공공 이익 관련 사실이면 위법성 조각. 다만 "오로지 공익"이라는 좁은 요건.</li>\n<li><strong>진실성·상당성 입증</strong> — 발언 내용이 진실이거나 진실로 믿을 만한 상당한 이유. 동료 진술·문서 자료.</li>\n<li><strong>합의·반성문·공탁</strong> — 정통망법 제70조는 반의사불벌. 합의 시 처벌 면제. 합의금 + 사과문 + 캡처 삭제 + 향후 비공유 약정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">비방 목적·공익성·합의 트랙이 사안마다 갈라져요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 단톡방 험담 가해자 방어 4단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·검찰·법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출석요구 대응 + 변호사 상담 (출석 1~2주 전)</strong> — 출석요구서 받으면 즉시 변호사 상담 검토. 진술 전략·진술거부권·항변 자료 정리.</li>\n<li><strong>2단계 — 항변 자료 정리</strong> — 단톡방 전체 캡처(전후 맥락), 본인 발언 의도(업무 협조 요청·하소연), 다른 참여자 진술서, 동료 평소 행동 자료(공익성 입증 시).</li>\n<li><strong>3단계 — 합의 협상 (경찰·검찰 단계, 1~3개월)</strong> — 정통망법 제70조는 반의사불벌. 합의 시 처벌 면제. 합의금 + 사과문 + 캡처 삭제 + 단톡방 공식 정정 발언.</li>\n<li><strong>4단계 — 공탁·반성문 (합의 불가 시)</strong> — 합의 거부면 공탁(피해 회복 의사) + 반성문 + 양형자료(초범·사회봉사·기부). 기소유예·선고유예 가능성 검토.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 단톡방 험담 가해자 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"단톡방은 비공개니까 안전"</strong> — 5명 이상이면 공연성 인정 사례 다수. 1~3명도 전파가능성으로 인정 가능. 인원수·관계가 핵심.</li>\n<li><strong>"사실이니까 처벌 안 된다"</strong> — 형법 제307조 제1항/정통망법 제70조 제1항은 사실 적시도 처벌. 공익성 항변은 좁은 요건이라 인정 어려움 많음.</li>\n<li><strong>경찰 단계 자세한 자백</strong> — 변호사 상담 전 자세한 경위 진술은 항변 활용도 떨어질 수 있음. 진술거부권·변호사 동석 검토.</li>\n<li><strong>회사 징계와 별개</strong> — 형사 결과와 별개로 회사 사규 위반·징계 절차가 진행될 수 있음. 회사 인사팀 동시 대응 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 변호사 상담 검토 / 경찰서 사이버수사대 / 검찰청 형사조정 / 회사 인사팀(징계 별도 대응).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방 발언과 정통망법 비방 목적 추단',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 사건에서 법원은 정보통신망을 이용해 사실을 적시한 경우에도 비방 목적이 인정되면 정통망법 제70조 제1항 위반에 해당하고, 비방 목적은 게시 동기·맥락·반복성을 종합적으로 검토해 추단할 수 있다고 판시했습니다. 회사 단톡방 발언도 사실이라 하더라도 발언 동기에 사적 감정·복수가 섞이면 비방 목적이 추단될 수 있어, 전후 메시지·업무 관련성 자료를 시간순 정리해두면 항변 입증력이 올라가는 것으로 보고되고 있습니다.',
        takeaway: '단톡방 험담 가해자 방어는 비방 목적 부정 + 진실성 + 조기 합의를 병행해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '정통망법 제70조는 반의사불벌이라 합의하면 처벌 안 받나요?',
        answer:
          '<strong>네, 피해자가 처벌을 원치 않으면 공소를 제기할 수 없습니다.</strong> 합의서에 "처벌불원" 명시 + 인감증명·실인 첨부. 기소 전 합의가 가장 효과적. 다만 별도 모욕죄·회사 징계는 별개.',
      },
      {
        question: '단톡방이 부서 공식 채널인데 사적 발언과 구분이 되나요?',
        answer:
          '<strong>채널 성격과 발언 맥락에 따라 다툼 여지가 있습니다.</strong> 업무 협조 요청 톤이면 비방 목적 부정 가능성. 사적 감정·복수 톤이면 비방 목적 추단. 전후 메시지 흐름이 핵심.',
      },
      {
        question: '회사 인사팀이 사규 위반으로 징계 절차 진행하면 어떻게 하나요?',
        answer:
          '<strong>형사 결과와 별개로 회사 자체 징계가 가능합니다.</strong> 직장내괴롭힘·사규 위반 조사. 징계 결과(견책·감봉·정직·해고) 부당하면 노동위원회 부당해고 구제신청 검토.',
      },
      {
        question: '동료가 평소에도 돈 문제로 말이 많았다는 게 사실인데 공익성으로 인정되나요?',
        answer:
          '<strong>공익성 항변은 "오로지 공익"이라는 좁은 요건이라 인정 어려운 영역입니다.</strong> 회사 자금 횡령·갑질 등 공공 이익 강한 사안이라야. 사적 감정·하소연 섞인 발언은 공익성 인정 어려움.',
      },
      {
        question: '벌금형이면 직장에 알려지나요?',
        answer:
          '<strong>일반 벌금형은 직장에 자동 통보되지 않습니다.</strong> 다만 회사 자체 조사·동료 진술로 인지 가능. 사규상 형사처벌 보고 의무 있는 직장이면 별도 보고 필요. 기소유예·선고유예가 가장 유리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 가해자 방어 절차', href: '/guide/defamation/defamation-accused-defense-strategy' },
      { label: '단톡방 명예훼손 4요건', href: '/guide/defamation/defamation-group-chat-requirements-4items' },
      { label: '진실성 항변 다툼', href: '/guide/defamation/defamation-accused-truth-defense-argument' },
      { label: '명예훼손 합의 협상', href: '/guide/defamation/defamation-settlement-negotiation' },
      { label: '회사 사내 험담 명예훼손', href: '/guide/defamation/defamation-coworker-spread-victim' },
    ],
  },

  // ─── 6. defamation / school-rumor-online-takedown ───
  {
    domain: 'defamation',
    slug: 'defamation-school-rumor-online-takedown',
    keyword: '학교 카더라 인터넷 게시 정정·삭제',
    questionKeyword: '아이가 학교폭력 가해자라는 사실확인 안 된 카더라 글이 맘카페·블로그에 올라왔어요. 어떻게 정정·삭제하나요?',
    ctaKeyword: '학교 카더라 정정·삭제 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학교 카더라 인터넷 게시 — 정정·삭제 5단계 | 로앤가이드',
      description:
        '자녀가 학교폭력 가해자라는 사실확인 안 된 카더라가 맘카페·블로그·SNS에 올라왔다면 임시조치 + 방심위 + KISO 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"중학생 아이가 학교폭력 가해자라는 카더라가 동네 맘카페·블로그·인스타그램에 퍼졌어요. 학교 자체조사에서는 가해 사실이 확인 안 됐는데 글에는 아이 실명·학교명·반까지 적혀 있어 친구들도 다 알게 됐습니다. 아이가 등교를 거부하고 정신과 상담까지 받고 있어요." 미성년자 학교 카더라는 <strong>① 정통망법 제70조 사이버명예훼손 ② 정통망법 제44조의2 임시조치 ③ 방송통신심의위원회 심의 ④ KISO 자율심의 ⑤ 발신자정보제공명령</strong> 5가지 트랙이 동시 검토 대상이에요. 미성년자 보호 + 신속 삭제가 핵심입니다.</p>',
    sections: [
      {
        title: '학교 카더라 대응 — 5가지 트랙',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지가 카더라 단계의 핵심 트랙입니다.</strong></p>\n<ul>\n<li><strong>임시조치(정통망법 제44조의2)</strong> — 운영자(맘카페·블로그·인스타) 직접 신청 또는 방송통신심의위원회 신청. 30일간 차단.</li>\n<li><strong>방송통신심의위원회 심의(kocsc.or.kr)</strong> — 미성년자 보호·명예훼손 정보 심의 후 시정요구·삭제 명령. 심의 신청 후 1~3개월.</li>\n<li><strong>KISO(한국인터넷자율정책기구) 자율심의</strong> — 네이버·다음 등 회원사 게시물에 대해 자율심의. 빠른 처리 가능.</li>\n<li><strong>형사 고소(정통망법 제70조)</strong> — 비방 목적 + 사실/허위 적시. 미성년자 명예훼손은 가중 처벌 검토.</li>\n<li><strong>민사 손해배상 + 발신자정보명령</strong> — 작성자 신원 확보 + 위자료 + 게시물 삭제 강제. 미성년자 위자료 사례 300~1,500만원 범위가 자주 보고됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미성년자 카더라는 빠른 노출 차단이 우선이라, 임시조치·KISO·방심위를 동시 신청해두면 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 카더라 정정·삭제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">방송통신심의위원회·KISO·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처 + URL 보존 (즉시, 24시간 내)</strong> — 게시글·작성자 ID·작성일·댓글·공유수·URL을 한 화면 캡처. 화면 녹화 권장. 학교 자체조사 결과서·진료기록 함께 보존.</li>\n<li><strong>2단계 — 운영자 신고 + 임시조치 (1주 내)</strong> — 맘카페·블로그·인스타그램 직접 신고 + 방송통신심의위원회 정통망법 제44조의2 임시조치 신청. 30일 차단.</li>\n<li><strong>3단계 — KISO 자율심의 신청 (1~2주)</strong> — 네이버·다음·카카오 등 회원사 게시물이면 KISO(kiso.or.kr) 자율심의 신청. 회원사 빠른 처리.</li>\n<li><strong>4단계 — 형사 고소 (3~6개월)</strong> — 사이버수사대 또는 ECRM 정통망법 제70조 고소. 캡처·학교 자체조사 결과·진료기록 첨부. 미성년자 보호 사유 명시.</li>\n<li><strong>5단계 — 민사 손해배상 + 발신자정보명령 (6~18개월)</strong> — 위자료 + 게시 작성자 IP·신원 확보 명령. 미성년자 정신적 손해 입증으로 위자료 가중 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임시조치·KISO·발신자정보명령 트랙이 사안마다 다양해요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">임시조치·고소·발신자정보명령 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>게시물 캡처(전체 화면)</strong> — 본문·작성자 ID·작성일·댓글·공유수·URL. 화면 녹화 권장.</li>\n<li><strong>학교 자체조사 결과서</strong> — 학폭위·교육청 조사 결과. 가해 사실 미확인 입증.</li>\n<li><strong>자녀 진료기록·심리 상담기록</strong> — 등교 거부·우울·불안 진단. 미성년자 정신적 손해 입증.</li>\n<li><strong>학생 신분증·학교 재학증명서</strong> — 본인(자녀) 특정 입증.</li>\n<li><strong>친권자 위임장·인감증명서</strong> — 미성년자 대신 친권자가 신청.</li>\n<li><strong>임시조치 신청서</strong> — 방송통신심의위원회 양식. 운영자 정보·게시 URL·침해 사유.</li>\n<li><strong>고소장 + 손해배상 청구서</strong> — 작성자 미상이면 "성명불상자" 명시. 학교 자체조사 결과·진료기록 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "맘카페에 직접 댓글로 반박해야겠다"는 대응은 본인이 명예훼손 가해자가 될 수 있어요. 임시조치·신고가 정공법입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 학교 카더라 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>대응 댓글로 역고소</strong> — 맘카페 댓글로 반박하면 본인(또는 친권자)이 명예훼손 가해자가 될 수 있음. 1대1 또는 사적 자리로.</li>\n<li><strong>학교 자체조사 결과 늦음</strong> — 학폭위 결과가 나오기 전 카더라가 퍼지면 차단이 어려워짐. 결과 나오기 전에도 임시조치는 가능.</li>\n<li><strong>운영자 협조 거부</strong> — 일부 맘카페 운영자가 게시물 보호 입장. 이때 방심위·KISO 신청으로 강제력 확보.</li>\n<li><strong>미성년자 직접 조치 어려움</strong> — 미성년자 본인은 신청 어려워 친권자 대리. 위임장·인감증명 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 방송통신심의위원회(kocsc.or.kr) / KISO(kiso.or.kr) / 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) / 청소년사이버상담센터 1388 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 미성년자 관련 명예훼손과 카카오톡 프로필 게시',
        summary:
          '대법원 2019도12750(대법원, 2020.05.28 선고) 사건에서 법원은 카카오톡 계정 프로필 상태메시지에 게시한 글도 다수가 열람할 수 있는 정보통신망 게시로 명예훼손 대상이 될 수 있다고 판시했습니다. 학교 카더라 글 역시 맘카페·블로그·인스타그램·카톡 프로필 등 어떤 매체든 다수 열람 가능하면 명예훼손 책임이 검토 대상이라, 게시 매체별로 캡처와 열람 가능 인원수 자료를 함께 정리해두면 도움이 됩니다.',
        takeaway: '학교 카더라 정정·삭제는 매체별 캡처 + 미성년자 정신적 피해 입증 자료를 동시에 준비해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '맘카페가 비공개라 회원만 볼 수 있는데 명예훼손이 되나요?',
        answer:
          '<strong>회원이 다수면 공연성 인정될 수 있는 영역입니다.</strong> 비공개 카페라도 회원 수백~수천 명이면 공연성 충족 사례 다수. 비공개 = 안전 아님.',
      },
      {
        question: '학교 자체조사 결과 가해 사실 미확인이라는 결론이 나오면 카더라는 자동 삭제되나요?',
        answer:
          '<strong>자동은 아니고 별도 신고·임시조치 신청이 필요합니다.</strong> 학교 결과서를 첨부해 운영자·방심위에 삭제 요청. 결과서가 강력한 입증 자료.',
      },
      {
        question: '작성자가 미성년자인 경우도 처벌이 되나요?',
        answer:
          '<strong>14세 이상이면 형사처벌 대상이지만 소년법 적용으로 보호처분 위주입니다.</strong> 14세 미만은 처벌 불가 다만 친권자 민사 책임. 학교폭력 별도 절차 검토.',
      },
      {
        question: '인스타그램·틱톡처럼 해외 사업자 게시물은 어떻게 삭제하나요?',
        answer:
          '<strong>해외 사업자라도 한국 사용자 보호 정책이 있어 신고로 삭제 가능합니다.</strong> 인스타·틱톡 신고센터 + 방심위 시정요구. 처리 시간은 1~4주 범위가 자주 보고됨.',
      },
      {
        question: '미성년자 위자료는 얼마나 받을 수 있나요?',
        answer:
          '<strong>사례에 따라 다르지만 300~1,500만원 수준이 검토되는 사례가 있습니다.</strong> 정신과 진료기록·등교 거부 자료가 강력하면 위자료 상향 검토. 친권자가 자녀 명의로 청구.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 임시조치 신청', href: '/guide/defamation/defamation-temporary-measure-request' },
      { label: '익명 게시판 작성자 추적', href: '/guide/defamation/defamation-anonymous-board-tracking' },
      { label: '명예훼손 게시물 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '학교 학부모 단톡방 명예훼손', href: '/guide/defamation/defamation-school-parent-chat-defamation' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-civil-damages-procedure' },
    ],
  },
];
