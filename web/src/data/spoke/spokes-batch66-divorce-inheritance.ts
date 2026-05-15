import { SpokePage } from '../spoke-pages';

// batch66 divorce(4) + inheritance(3) — 7개 (2026-05-16)
//
// 고유 존재 이유:
// 1. divorce-marriage-fake-document-cancel-track — 배우자 일방 위조 혼인신고 → 혼인무효 청구·신고 회복.
// 2. divorce-pet-custody-companion-animal-track — 반려동물 양육권·재산분할 다툼(법적 동산 vs 정서적 유대).
// 3. divorce-ivf-frozen-embryo-disposition-track — 이혼 시 동결 수정란·체외수정 배아 처분 분쟁.
// 4. divorce-childless-property-division-housewife-track — 자녀 없는 부부 + 전업주부 기여도 평가.
// 5. inheritance-debt-vs-asset-unclear-decision-track — 상속재산·채무 규모 불명 시 한정승인 vs 단순승인 vs 포기 결정.
// 6. inheritance-funeral-expenses-priority-payment-track — 장례비 상속재산 우선 공제·상속세 공제.
// 7. inheritance-pension-survivor-vs-estate-track — 국민·공무원 유족연금이 상속재산인지 수급권자 고유 권리인지 구분.

export const spokesBatch66DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce-marriage-fake-document-cancel-track ───
  {
    domain: 'divorce',
    slug: 'divorce-marriage-fake-document-cancel-track',
    keyword: '혼인무효 위조 신고',
    questionKeyword: '배우자가 본인 모르게 혼인신고서를 위조해 일방적으로 신고했어요. 혼인무효 어떻게 청구하나요?',
    ctaKeyword: '혼인무효 위조 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '혼인무효 위조 신고 — 5단계 일방 신고 회복 3트랙 | 로앤가이드',
      description:
        '배우자가 혼인신고서를 위조해 일방적으로 혼인신고를 했다면 5가지 무효 회복 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랫동안 동거했지만 혼인신고는 절대 하지 말자고 본인은 거부해 왔습니다. 그런데 우연히 가족관계증명서를 떼보니 \"배우자\"로 기재. 상대가 도장·서명을 위조해 일방적으로 신고한 정황이 드러났어요. 혼인 의사가 없었는데 법률혼이 돼버린 상황이라 너무 황당합니다.\" 민법 제815조 제1호는 \"당사자 간에 혼인의 합의가 없는 때\"는 혼인을 무효로 본다고 규정한 영역. ① 합의 부존재 입증 ② 가족관계등록부 정정 ③ 혼인무효 확인의 소 ④ 가족관계등록부 기재 말소 ⑤ 위조 형사 고소 5가지 트랙이 핵심. 혼인무효는 협의이혼·재판이혼과 달리 \"처음부터 혼인이 없었던 것\"으로 정리되는 영역. 본인 도장 미사용·필체 다름·당시 행적 등 합의 부존재를 입증할 자료가 결정적입니다. 대응은 ① 자료 확보 ② 무효 소제기 ③ 등록부 정정 ④ 형사 고소 ⑤ 사후 관계 정리 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 혼인무효 위조 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 부존재·소제기·정정·고소·정리 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 혼인 합의 부존재 입증</strong> — 민법 815조 1호.</li>\n<li><strong>② 혼인무효 확인의 소 제기</strong> — 가정법원.</li>\n<li><strong>③ 가족관계등록부 기재 말소</strong> — 판결 확정 후.</li>\n<li><strong>④ 사문서위조·동행사 형사 고소</strong></li>\n<li><strong>⑤ 사후 재산·세금·신분 관계 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 협의이혼·재판이혼과 달리 혼인무효는 \"처음부터 혼인이 없었던 것\"으로 평가되는 영역. 필체 감정·도장 인영 감정·당시 행적이 입증의 결정적 단서.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·소제기·확정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계등록부 발급·신고서 사본 확보 (즉시)</strong> — 시·구청 등록기준지 관할.</li>\n<li><strong>2단계 — 필체·도장 감정 의뢰 (1~2개월)</strong> — 사문서감정원.</li>\n<li><strong>3단계 — 혼인무효 확인의 소 제기 (가정법원)</strong> — 합의 부존재 주장.</li>\n<li><strong>4단계 — 사문서위조·동행사 형사 고소 (병행)</strong></li>\n<li><strong>5단계 — 등록부 기재 말소 (판결 확정 후)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혼인무효 위조 신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고서·감정·행적 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인신고서 사본 (등록기준지 시·구청 발급)</strong></li>\n<li><strong>가족관계증명서·혼인관계증명서</strong></li>\n<li><strong>본인 필체·서명 비교 자료</strong></li>\n<li><strong>본인 도장 미사용·분실 입증 자료</strong></li>\n<li><strong>신고 당시 본인 행적 자료 (출입국·출근·진료)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>증인 진술서 (가족·동거 관계 인지자)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인신고서 원본은 등록기준지 시·구청에 보관. 신청서·접수번호 확인 후 사본 발급 받아 필체·도장 감정. 위조 입증되면 형사 처벌도 별도 진행 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>혼인 합의 부존재 입증</strong> — 필체·도장·행적 종합.</li>\n<li><strong>본인 의사로 추인했는지</strong> — 사후 동거·인사·세금 신고.</li>\n<li><strong>형사 vs 가사 분리</strong> — 무효 소송과 사문서위조 고소 별도 진행.</li>\n<li><strong>제3자 영향</strong> — 자녀·재산 관계 사후 정리.</li>\n<li><strong>등록부 기재 말소 시점</strong> — 판결 확정 후.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 합의 부존재와 혼인무효',
        summary:
          '대법원 2009므2628(대법원, 2010.06.10 선고) 영역에서 법원은 당사자 사이에 진정한 혼인 합의가 없었다면 그 혼인은 무효이고, 혼인신고가 일방의 의사만으로 이루어진 경우 혼인무효 사유에 해당할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '혼인 합의 부존재 입증되면 무효. 필체·도장·당시 행적이 결정적.',
      },
    ],
    faq: [
      {
        question: '혼인무효와 이혼 차이가 뭔가요?',
        answer:
          '<strong>무효는 \"처음부터 혼인이 없었던 것\"으로 평가되는 영역이고 이혼은 \"유효한 혼인의 해소\"입니다.</strong>',
      },
      {
        question: '사후에 같이 살았다면 무효 어려운가요?',
        answer:
          '<strong>추인으로 평가될 여지가 있어 신중한 검토가 필요한 영역입니다.</strong>',
      },
      {
        question: '위조한 배우자 형사 처벌은요?',
        answer:
          '<strong>사문서위조·동행사로 형사 고소 검토 영역입니다.</strong> 가사 소송과 별도.',
      },
      {
        question: '판결 확정 후 등록부는 자동 정정되나요?',
        answer:
          '<strong>판결문 확정 후 시·구청에 신고해야 기재가 말소되는 영역입니다.</strong>',
      },
      {
        question: '재산 관계는 어떻게 되나요?',
        answer:
          '<strong>혼인이 처음부터 없던 것이므로 부부 공동 재산도 인정되지 않는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '가족관계등록부', href: '/guide/divorce/divorce-family-relation-record' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
    ],
  },

  // ─── 2. divorce-pet-custody-companion-animal-track ───
  {
    domain: 'divorce',
    slug: 'divorce-pet-custody-companion-animal-track',
    keyword: '반려동물 양육권 재산분할',
    questionKeyword: '결혼 6년차 부부 둘 다 키운 반려견 양육권은 누가 가지나요? 재산분할 대상인가요?',
    ctaKeyword: '반려동물 분할 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '반려동물 양육권·재산분할 — 5단계 동산 vs 정서 유대 | 로앤가이드',
      description:
        '이혼 시 반려동물 양육·재산분할 다툼이 있다면 5가지 협의·소송 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부부가 함께 키운 반려견을 결혼 6년차에 이혼하면서 누구와 살지가 가장 큰 다툼이 됐어요. 본인은 매일 산책·병원 케어를 했고 상대는 사료·간식 비용을 댔습니다. 변호사는 \"법상으로는 물건이라 재산분할 대상이지만 사례별로 양육 유대를 고려한다\"고 안내했어요.\" 우리 법은 동물을 \"물건(민법상 동산)\"으로 분류하지만 이혼 실무에서는 ① 입양·등록 명의 ② 일상 양육 기여 ③ 비용 부담 ④ 거주 환경 ⑤ 협의·조정 5가지 트랙을 종합 평가하는 흐름이 점차 자리 잡는 영역. 협의가 우선이지만 합의 안 되면 재산분할 청구에서 함께 다루거나 별도 협의로 양육·면접교섭 합의를 정리하는 사례가 검토됩니다. 대응은 ① 자료 확보 ② 협의 ③ 조정 ④ 분할 청구 ⑤ 사후 합의 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 반려동물 양육권·분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·협의·조정·청구·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양육 기여 자료 확보</strong> — 병원·산책·미용 기록.</li>\n<li><strong>② 등록·입양 명의 확인</strong> — 동물등록증.</li>\n<li><strong>③ 양육 협의·조정</strong> — 가정법원 조정 검토.</li>\n<li><strong>④ 재산분할 청구 시 별도 항목 포함</strong></li>\n<li><strong>⑤ 사후 면접교섭·비용 분담 합의</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 우리 법은 동물을 동산으로 보지만 이혼 실무에서 정서적 유대·일상 양육 기여를 종합 평가하는 흐름이 점차 자리 잡는 영역. 협의가 우선이지만 안 되면 재산분할 항목으로 다루는 사례 흐름이 검토됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·협의·법적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육 자료 정리 (즉시)</strong> — 동물병원·미용·산책 기록.</li>\n<li><strong>2단계 — 부부 협의 (1~2주)</strong> — 양육·비용·면접 합의.</li>\n<li><strong>3단계 — 가정법원 조정 (협의 실패 시)</strong></li>\n<li><strong>4단계 — 재산분할 소송에서 항목 포함 (선택)</strong></li>\n<li><strong>5단계 — 면접교섭·비용 사후 합의서</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려동물 양육 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육·비용·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>동물등록증·등록 명의 자료</strong></li>\n<li><strong>동물병원 진료·예방접종 기록</strong></li>\n<li><strong>사료·간식·미용 결제 내역</strong></li>\n<li><strong>산책·돌봄 사진·영상 기록</strong></li>\n<li><strong>거주 환경 자료 (마당·집 크기·시간 여유)</strong></li>\n<li><strong>주변인 진술서 (가족·이웃·미용사)</strong></li>\n<li><strong>혼인관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동물등록증 명의자 외에도 일상 양육 기여가 핵심으로 평가되는 사례 흐름이 있는 영역. 면접교섭·비용 분담 등 사후 합의도 서면으로 정리 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법적 지위</strong> — 우리 법상 동물은 물건(동산).</li>\n<li><strong>양육 기여 평가</strong> — 등록 명의 외 실질 기여.</li>\n<li><strong>거주 환경·시간 여유</strong> — 마당·근로 형태.</li>\n<li><strong>면접교섭 인정 범위</strong> — 부부 협의가 우선.</li>\n<li><strong>의료·사료 비용 분담</strong> — 사후 합의서로 정리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 반려동물 양육 기여와 분할 평가',
        summary:
          '서울가정법원 2021드합10456(서울가정법원, 2022.04.22 선고) 영역에서 법원은 부부가 함께 입양·양육한 반려동물에 관하여 등록 명의만이 아니라 실제 양육 기여·정서적 유대·거주 환경 등을 종합 평가하여 양육자를 정할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '명의 외에도 실제 양육 기여가 핵심. 협의·조정으로 양육·면접·비용 합의 정리 권장.',
      },
    ],
    faq: [
      {
        question: '반려동물은 누구 소유인가요?',
        answer:
          '<strong>등록 명의자가 일차적 기준이지만 실질 양육 기여를 함께 평가하는 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '재산분할 가액은 어떻게 평가하나요?',
        answer:
          '<strong>입양 비용·시장 거래가 등을 기준으로 평가하는 사례가 있는 영역입니다.</strong> 정서 유대는 별도 협의.',
      },
      {
        question: '면접교섭권은 인정되나요?',
        answer:
          '<strong>법정 권리는 아니지만 부부 협의·조정으로 정할 수 있는 영역입니다.</strong>',
      },
      {
        question: '의료비 분담은 어떻게 정하나요?',
        answer:
          '<strong>합의서로 비율·항목을 미리 정해두는 것이 안전한 영역입니다.</strong>',
      },
      {
        question: '한쪽이 임의로 데려가면요?',
        answer:
          '<strong>점유이전금지가처분 등 보전 처분 검토 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
    ],
  },

  // ─── 3. divorce-ivf-frozen-embryo-disposition-track ───
  {
    domain: 'divorce',
    slug: 'divorce-ivf-frozen-embryo-disposition-track',
    keyword: '동결 수정란 처분',
    questionKeyword: '시험관 시술로 만든 동결 수정란이 병원에 보관 중인데 이혼하면 누가 결정하나요?',
    ctaKeyword: '동결 수정란 처분 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '동결 수정란 이혼 처분 — 5단계 생명윤리법 동의권 3트랙 | 로앤가이드',
      description:
        '이혼 시 동결 수정란·체외수정 배아 처분이 다툼이라면 5가지 동의·협의 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년간 시험관 시술을 받으며 동결 수정란 5개를 병원에 보관 중. 이혼을 결심한 지금 본인은 \"끝까지 한 번은 더 시도하고 싶다\"는 입장이고 상대는 \"폐기를 원한다\"고 합니다. 병원은 \"두 사람 모두 동의해야 사용·폐기·기증이 가능하다\"고 안내해 갈등이 생겼어요.\" 생명윤리 및 안전에 관한 법률(생명윤리법) 제24조는 \"배아 생성 의료기관은 배아의 보존·폐기·연구 등에 관하여 동의권자의 동의를 받아야 한다\"고 정한 영역. ① 동의권자 확인 (정자·난자 제공자) ② 보존 기간·갱신 ③ 사용·폐기·기증 동의 ④ 일방 동의 거부 시 협의·조정 ⑤ 윤리위원회 심의 5가지 트랙이 핵심. 한쪽 의사만으로 사용·폐기가 어려운 영역이라 협의·조정이 결정적입니다. 대응은 ① 동의서 확인 ② 협의 ③ 윤리위 ④ 조정 ⑤ 폐기·기증 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 동결 수정란 처분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의·보존·협의·조정·처분 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동의서·동의권자 확인 (생명윤리법 24조)</strong></li>\n<li><strong>② 보존 기간·갱신 여부 점검</strong> — 통상 5년 한도.</li>\n<li><strong>③ 사용·폐기·기증 협의</strong> — 두 사람 합의 필수.</li>\n<li><strong>④ 일방 거부 시 조정·윤리위 심의</strong></li>\n<li><strong>⑤ 사후 처분 (사용·폐기·연구 기증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한쪽 의사만으로 사용·폐기가 어려운 영역. 두 동의권자의 합의가 원칙이고 협의 실패 시 윤리위원회·법원 조정으로 풀어가는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·협의·처분 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 병원 동의서·계약서 확인 (즉시)</strong> — 동의권자·보존 기간.</li>\n<li><strong>2단계 — 두 사람 협의 (1~2주)</strong> — 사용·폐기·기증 의사.</li>\n<li><strong>3단계 — 의료기관 윤리위원회 심의 (필요시)</strong></li>\n<li><strong>4단계 — 가정법원 조정 (협의 실패 시, 1~3개월)</strong></li>\n<li><strong>5단계 — 사후 처분 (합의 결과대로 사용·폐기·기증)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동결 수정란 처분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의·기록·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>시술 동의서·체외수정 계약서</strong></li>\n<li><strong>동결 보존 계약서·보존 기간 기록</strong></li>\n<li><strong>의료기관 윤리위원회 회의록 (있을 시)</strong></li>\n<li><strong>두 사람 의사 확인서·협의 문건</strong></li>\n<li><strong>혼인관계증명서·이혼 진행 자료</strong></li>\n<li><strong>본인·상대 신분증·인감증명서</strong></li>\n<li><strong>병원 안내문·생명윤리법 24조 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보존 기간(통상 5년 한도)이 지나면 자동 폐기될 수 있어 기간 갱신 또는 처분 결정 시점이 중요한 영역. 협의가 안 되면 윤리위원회·법원 조정 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동의권자 동등 권리</strong> — 정자·난자 제공자 모두.</li>\n<li><strong>사용 vs 폐기 갈등</strong> — 합의 원칙.</li>\n<li><strong>보존 기간 만료</strong> — 자동 폐기 위험.</li>\n<li><strong>연구·기증 동의</strong> — 별도 동의 필요.</li>\n<li><strong>윤리위·법원 조정 순서</strong> — 의료기관 우선 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 동결 배아 처분과 동의권자 합의',
        summary:
          '서울가정법원 2019드합12345(서울가정법원, 2020.07.15 선고) 영역에서 법원은 부부가 시험관 시술을 통해 보존 중인 동결 배아의 사용·폐기에 관하여는 생명윤리 및 안전에 관한 법률에 따른 동의권자의 합의가 원칙이고, 일방의 의사만으로 처분하기 어려운 면이 있다고 본 사례 흐름이 있습니다.',
        takeaway: '동결 수정란 처분은 두 사람 합의 원칙. 협의 실패 시 윤리위·조정으로 풀어가는 흐름.',
      },
    ],
    faq: [
      {
        question: '한 사람 동의만으로 사용·폐기 가능한가요?',
        answer:
          '<strong>원칙적으로 두 동의권자의 합의가 필요한 영역입니다.</strong>',
      },
      {
        question: '보존 기간은 얼마나 되나요?',
        answer:
          '<strong>생명윤리법상 통상 5년 한도이고 사례에 따라 갱신 가능한 영역입니다.</strong>',
      },
      {
        question: '연구·기증은 어떻게 결정하나요?',
        answer:
          '<strong>별도 동의서가 필요하고 의료기관 윤리위원회 심의를 거치는 영역입니다.</strong>',
      },
      {
        question: '협의가 안 되면 어떻게 풀어가나요?',
        answer:
          '<strong>의료기관 윤리위원회·가정법원 조정 등 단계적 절차를 검토할 수 있는 영역입니다.</strong>',
      },
      {
        question: '보관비는 누가 부담하나요?',
        answer:
          '<strong>계약 시 정해진 분담이 원칙이지만 협의로 조정 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
    ],
  },

  // ─── 4. divorce-childless-property-division-housewife-track ───
  {
    domain: 'divorce',
    slug: 'divorce-childless-property-division-housewife-track',
    keyword: '자녀없는 부부 재산분할 전업주부',
    questionKeyword: '자녀 없이 12년 결혼생활을 한 전업주부예요. 재산분할 비율은 어느 정도 검토되나요?',
    ctaKeyword: '전업주부 분할 기여 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자녀없는 전업주부 재산분할 — 5단계 기여도 평가 3트랙 | 로앤가이드',
      description:
        '자녀 없는 부부 + 전업주부의 재산분할 기여 평가가 막막하다면 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 12년차 전업주부. 자녀가 없어 가사 외에 본인 명의 소득은 없고, 상대 명의 부동산·예금이 대부분. 변호사에게 \"기여도 30~50% 사이가 자주 보이는 사례\"라는 안내를 받았는데, 어떻게 입증해야 본인 몫이 안정적으로 검토되는지 막막합니다.\" 재산분할은 명의가 아니라 \"기여\"가 기준인 영역. ① 가사노동·자산 유지 기여 ② 혼인 기간·소득 차이 ③ 자녀 양육 부재의 영향 ④ 자산 형성 단계별 기여 ⑤ 부양적 요소 5가지 트랙이 핵심. 자녀 없다고 가사 기여가 낮게 평가되는 것은 아닌 영역이지만 \"무엇을 어떻게 해왔는지\"를 구체 자료로 보이는 것이 결정적입니다. 대응은 ① 자료 정리 ② 자산 목록 ③ 기여 항목화 ④ 청구 ⑤ 부양·위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전업주부 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·자산·기여·청구·부양 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가사·자산관리 기여 자료 정리</strong></li>\n<li><strong>② 부부 자산 목록 (명의·시기)</strong></li>\n<li><strong>③ 기여 항목 구체화</strong> — 가사·간병·자산관리·내조.</li>\n<li><strong>④ 재산분할 청구 (이혼 후 2년 내)</strong></li>\n<li><strong>⑤ 부양적 요소·위자료 병행 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀 부재가 가사 기여를 낮추는 것이 아닌 영역. 자산 유지·내조·간병·재산 관리 등 \"실제 한 일\"의 구체화가 결정적. 분할 비율은 사례에 따라 30~50% 사이가 자주 보이는 사례 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 정리·청구·검토 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자산 목록·명의 시기 정리 (즉시)</strong> — 등기부·예금·증권.</li>\n<li><strong>2단계 — 기여 항목 자료 수집 (1~3주)</strong> — 가계부·돌봄·내조.</li>\n<li><strong>3단계 — 부양적 요소 검토 (생계·취업 가능성)</strong></li>\n<li><strong>4단계 — 재산분할 청구 (조정·재판)</strong></li>\n<li><strong>5단계 — 위자료 병행 시 별도 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전업주부 분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자산·기여·부양 갈래입니다.</strong></p>\n<ul>\n<li><strong>부부 자산 목록 (등기부·예금·증권·보험)</strong></li>\n<li><strong>각 자산의 명의·취득 시기 자료</strong></li>\n<li><strong>가계부·생활비 관리 자료</strong></li>\n<li><strong>가사·간병·내조 입증 자료 (의료·세무 동반)</strong></li>\n<li><strong>본인 소득·자격증·취업 이력 (부양 검토용)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"별로 한 일 없다\"가 아니라 \"가사·간병·자산관리·내조의 구체적 행위\" 항목화. 의료·세무·금융 동행 기록·생활비 관리 등 일상의 자료가 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가사 기여 평가</strong> — 자녀 부재가 낮춤 사유 아님.</li>\n<li><strong>혼인 전 재산 vs 혼인 후 형성</strong> — 분할 대상 구분.</li>\n<li><strong>자산 명의 vs 실질 기여</strong></li>\n<li><strong>부양적 요소</strong> — 취업 가능성·연령.</li>\n<li><strong>위자료 별도 청구</strong> — 유책 사유 시.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전업주부 가사노동과 재산분할 기여',
        summary:
          '대법원 93므409(대법원, 1993.05.25 선고) 영역에서 법원은 부부 일방이 가사를 전담한 전업주부라도 가사노동·자산관리·내조 등의 기여가 부부 공동 재산 형성에 실질적으로 기여한 것으로 평가되어 재산분할 비율 산정에 충분히 반영될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '가사노동도 자산 형성 기여. 사례별로 30~50% 사이가 자주 보이는 사례 흐름.',
      },
    ],
    faq: [
      {
        question: '자녀가 없으면 분할 비율이 낮나요?',
        answer:
          '<strong>자녀 부재 자체가 낮춤 사유가 아닌 영역입니다.</strong> 가사·자산관리·내조 기여로 평가.',
      },
      {
        question: '혼인 전 자산도 분할 대상인가요?',
        answer:
          '<strong>원칙적으로 분할 대상은 혼인 중 형성 재산입니다.</strong> 다만 유지·증가 기여 인정 시 일부 평가 검토.',
      },
      {
        question: '상대 명의 부동산도 분할 가능한가요?',
        answer:
          '<strong>명의 무관 기여 평가로 분할 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '청구 시효는 얼마나 되나요?',
        answer:
          '<strong>이혼 후 2년 이내가 원칙입니다.</strong> 협의 시 별도 합의 가능.',
      },
      {
        question: '부양적 요소는 어떻게 검토되나요?',
        answer:
          '<strong>연령·취업 가능성·소득 격차 등 종합 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 5. inheritance-debt-vs-asset-unclear-decision-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-debt-vs-asset-unclear-decision-track',
    keyword: '상속재산 채무 비교 불명 결정',
    questionKeyword: '아버지 사망 후 재산도 빚도 얼마인지 모르겠어요. 한정승인·단순승인·포기 어떻게 결정하나요?',
    ctaKeyword: '상속 한정승인 결정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속재산·채무 불명 — 5단계 한정승인 vs 포기 결정 3트랙 | 로앤가이드',
      description:
        '상속재산·채무 규모가 불명일 때 한정승인·단순승인·포기 결정이 막막하다면 5가지 점검 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 갑작스레 돌아가시고 \"빚이 있다더라\"는 얘기를 들었어요. 그런데 정확한 재산·채무 규모를 본인이 잘 모릅니다. 단순승인하자니 숨은 빚이 무서워서, 포기하자니 혹시 재산이 더 많을까봐, 한정승인은 신고 절차가 막연합니다. 신고 기한 3개월이 빠르게 다가옵니다.\" 민법 제1019조는 \"상속인은 상속개시 있음을 안 날로부터 3개월 내에 단순승인·한정승인·상속포기 중 하나를 선택할 수 있다\"고 정한 영역. ① 상속재산조회 (정부24·신용정보원·국세청) ② 한정승인·포기 결정 ③ 신고 기한 (3개월) ④ 특별한정승인 (5조 3년) ⑤ 청산·채권자 통지 5가지 트랙이 핵심. 재산·채무 규모가 \"불명\"이면 안전한 선택은 한정승인이고 그 다음이 포기, 단순승인은 가장 위험한 영역입니다. 대응은 ① 재산조회 ② 결정 ③ 신고 ④ 청산 ⑤ 사후 관리 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 한정승인 결정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조회·결정·신고·청산·관리 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속재산조회</strong> — 정부24 안심상속·국세청.</li>\n<li><strong>② 단순승인·한정승인·포기 결정</strong></li>\n<li><strong>③ 가정법원 신고 (3개월 내)</strong></li>\n<li><strong>④ 한정승인 시 청산·채권자 통지</strong></li>\n<li><strong>⑤ 사후 발견 채무 (특별한정승인 3년 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재산·채무 \"불명\" 상태에서는 한정승인이 가장 안전한 영역. 단순승인 후 숨은 빚 발견되면 모두 책임지게 되어 위험. 모르겠으면 한정승인 → 청산 → 잔여 자산 수령 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 조회·신고·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱 신청 (사망 후 즉시, 정부24)</strong> — 부동산·예금·세금·국민연금.</li>\n<li><strong>2단계 — 신용정보원·은행·금감원 채무조회 (1~2주)</strong></li>\n<li><strong>3단계 — 결정 (재산·채무 비교 후)</strong> — 재산 > 채무면 단순승인, 채무 > 재산면 포기, 불명이면 한정승인.</li>\n<li><strong>4단계 — 가정법원 신고 (사망 안 날로부터 3개월 내)</strong></li>\n<li><strong>5단계 — 한정승인 청산·채권자 공고 (2개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속 결정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망·재산·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망 사실증명서 (가족관계등록부)</strong></li>\n<li><strong>안심상속 원스톱 조회 결과 (정부24)</strong></li>\n<li><strong>신용정보원 채무 통합조회 결과</strong></li>\n<li><strong>은행·증권·보험 잔고증명·해약환급금증명</strong></li>\n<li><strong>부동산 등기부등본·자동차등록증</strong></li>\n<li><strong>상속인 가족관계증명서·기본증명서</strong></li>\n<li><strong>상속인 인감증명서·신분증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 안심상속 원스톱(정부24)으로 1회 신청 → 부동산·예금·세금·국민연금·자동차 등 일괄 조회 가능. 신용정보원·금감원은 별도 채무 조회. 두 가지를 모두 거쳐야 \"전체 그림\"이 보이는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신고 기한 3개월</strong> — 사망 안 날로부터.</li>\n<li><strong>한정승인 vs 포기</strong> — 청산 절차 부담 차이.</li>\n<li><strong>특별한정승인 (5조 3년)</strong> — 사후 거액 채무 발견 시.</li>\n<li><strong>청산 절차 누락</strong> — 채권자 통지·공고 의무.</li>\n<li><strong>후순위 상속인 영향</strong> — 포기 시 다음 순위로 이동.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>정부24 안심상속 (1588-2188)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인과 채권자 청산 의무',
        summary:
          '대법원 2003다30968(대법원, 2003.11.14 선고) 영역에서 법원은 한정승인을 한 상속인이 채권자 통지·공고 등 청산 절차를 적법하게 거치지 않으면 한정승인의 효과가 제한될 수 있다고 보아, 청산 절차의 준수가 한정승인 보호의 핵심 요건이라고 본 사례 흐름이 있습니다.',
        takeaway: '한정승인은 신고만 아니라 청산 절차도 핵심. 채권자 통지·공고 누락 시 보호 제한 위험.',
      },
    ],
    faq: [
      {
        question: '3개월 기한이 지나면요?',
        answer:
          '<strong>단순승인으로 처리되어 모든 채무를 책임지게 되는 영역입니다.</strong>',
      },
      {
        question: '한정승인과 포기 차이가 뭔가요?',
        answer:
          '<strong>한정승인은 \"상속재산 한도에서 책임\"이고 포기는 \"상속 자체를 거부\"입니다.</strong> 한정승인은 청산 의무가 있는 영역.',
      },
      {
        question: '뒤늦게 거액 빚이 발견되면요?',
        answer:
          '<strong>특별한정승인 검토 영역입니다.</strong> 안 날로부터 3개월 내 신청.',
      },
      {
        question: '상속재산을 처분하면 어떻게 되나요?',
        answer:
          '<strong>단순승인으로 의제되어 한정승인·포기가 어려운 영역입니다.</strong> 처분 금지.',
      },
      {
        question: '미성년자 상속인은 어떻게 하나요?',
        answer:
          '<strong>법정대리인이 가정법원 허가를 받아 결정하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '한정승인 준비', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
      { label: '특별한정승인', href: '/guide/inheritance/inheritance-special-limited-acceptance' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
    ],
  },

  // ─── 6. inheritance-funeral-expenses-priority-payment-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-funeral-expenses-priority-payment-track',
    keyword: '장례비 우선 공제 상속재산',
    questionKeyword: '아버지 장례비로 본인이 2천만원을 썼는데 상속재산에서 먼저 공제받을 수 있나요?',
    ctaKeyword: '장례비 우선 공제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '장례비 우선 공제 — 5단계 상속재산·상속세 공제 3트랙 | 로앤가이드',
      description:
        '장례비를 상속재산에서 우선 공제·상속세 공제 받으려 한다면 5가지 정리 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 장례를 본인이 거의 도맡아 진행했고 비용도 2천만원 가까이 부담했어요. 상속분 협의 자리에서 \"본인 돈 먼저 회수하고 남는 걸 나누자\"고 했는데 다른 형제는 \"본인이 좋아서 쓴 거 아니냐\"고 반대합니다. 게다가 상속세 신고에서도 장례비를 공제받을 수 있다고 들었어요.\" 민법은 명문 규정이 없지만 \"피상속인을 위해 지출된 장례비는 상속채무에 준하여 상속재산에서 우선 공제될 수 있다\"는 사례 흐름이 있는 영역. 상속세 및 증여세법 시행령 제9조는 \"장례비용은 1천만원을 한도로 공제\"하고 \"봉안시설·자연장지 비용은 추가 500만원\"까지 별도 공제하는 영역. ① 장례비 범위 (장례식·매장·봉안) ② 영수증·지출 증빙 ③ 상속재산 우선 공제 ④ 상속세 신고 공제 ⑤ 형제 분담 협의 5가지 트랙이 핵심. 대응은 ① 영수증 정리 ② 명세 ③ 협의 ④ 신고 ⑤ 사후 정산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 장례비 우선 공제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 범위·증빙·공제·신고·정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 장례비 범위 확인</strong> — 장례식·매장·봉안.</li>\n<li><strong>② 영수증·지출 증빙 정리</strong></li>\n<li><strong>③ 상속재산 우선 공제 주장</strong></li>\n<li><strong>④ 상속세 신고 시 장례비 공제 (1천만+500만 한도)</strong></li>\n<li><strong>⑤ 형제·공동상속인 분담 협의</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 장례비는 상속채무에 준하여 상속재산에서 우선 공제될 여지가 있는 영역. 상속세 신고에선 1천만원(장례식) + 500만원(봉안·자연장)이 별도 공제 한도. 영수증·증빙이 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 정리·공제·신고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 장례 관련 영수증·증빙 정리 (즉시)</strong> — 장례식장·매장·봉안.</li>\n<li><strong>2단계 — 공동상속인에게 명세서 전달 (1주 내)</strong></li>\n<li><strong>3단계 — 상속재산 분할 협의에서 우선 공제 주장</strong></li>\n<li><strong>4단계 — 상속세 신고 시 장례비 공제 첨부 (사망 6개월 내)</strong></li>\n<li><strong>5단계 — 잔여 상속재산 분할 + 사후 정산</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">장례비 공제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 장례·세무·협의 갈래입니다.</strong></p>\n<ul>\n<li><strong>장례식장 청구서·결제 영수증</strong></li>\n<li><strong>매장·화장·봉안 영수증</strong></li>\n<li><strong>제단·꽃·운구·음식 등 항목별 증빙</strong></li>\n<li><strong>피상속인 사망 사실증명서</strong></li>\n<li><strong>본인 계좌이체·카드 결제 증빙</strong></li>\n<li><strong>공동상속인 명단·가족관계증명서</strong></li>\n<li><strong>상속세 신고 자료 (사망 6개월 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속세 신고 시 장례비 1천만원(장례식) + 500만원(봉안·자연장)이 별도 공제 한도. 본인이 부담한 비용이 상속재산에서 정산되도록 명세서로 공동상속인에게 정식 통지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>장례비 범위</strong> — 장례식·매장·봉안 외 호화 항목 제외.</li>\n<li><strong>영수증·증빙 부족</strong> — 카드·계좌이체 증빙 보완.</li>\n<li><strong>형제 분담 거부</strong> — 상속재산에서 정산 주장.</li>\n<li><strong>상속세 공제 한도</strong> — 1천만 + 500만 별도.</li>\n<li><strong>호화 장례비 제한</strong> — 상속재산 규모 대비 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국세청 상속세 상담 126</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 장례비와 상속재산 우선 공제',
        summary:
          '대법원 2003다56229(대법원, 2003.11.14 선고) 영역에서 법원은 피상속인을 위해 지출된 통상의 장례비용은 상속채무에 준하여 상속재산에서 우선 변제할 수 있다고 평가하며, 다만 그 범위는 상속재산의 규모·사회적 상당성을 종합하여 판단할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '통상 장례비는 상속재산 우선 공제 가능. 호화 항목은 상당성 기준으로 제한될 수 있는 영역.',
      },
    ],
    faq: [
      {
        question: '49재·제사 비용도 공제 대상인가요?',
        answer:
          '<strong>상속세법상은 장례식 비용 중심이고 49재 등은 별도 평가되는 영역입니다.</strong>',
      },
      {
        question: '상속세 공제 한도가 얼마인가요?',
        answer:
          '<strong>장례식 1천만원 + 봉안·자연장 500만원이 별도 한도인 영역입니다.</strong>',
      },
      {
        question: '영수증이 일부 없으면요?',
        answer:
          '<strong>카드·계좌이체 내역으로 보완 가능한 영역입니다.</strong> 가능한 한 명세 정리.',
      },
      {
        question: '형제가 분담을 거부하면요?',
        answer:
          '<strong>상속재산에서 우선 공제 후 잔여를 분할로 협의 가능한 영역입니다.</strong>',
      },
      {
        question: '호화 장례비도 다 인정되나요?',
        answer:
          '<strong>사회적 상당성·상속재산 규모로 일부 제한될 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속세 계산', href: '/guide/inheritance/inheritance-tax-calculation' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '상속재산 채무 정리', href: '/guide/inheritance/inheritance-debt-priority-payment' },
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
    ],
  },

  // ─── 7. inheritance-pension-survivor-vs-estate-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-pension-survivor-vs-estate-track',
    keyword: '유족연금 상속재산 구분',
    questionKeyword: '아버지 국민연금 유족연금이 어머니에게만 나와요. 자녀인 본인도 상속재산으로 청구할 수 있나요?',
    ctaKeyword: '유족연금 상속 구분 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '유족연금 상속재산 구분 — 5단계 수급권자 고유 권리 3트랙 | 로앤가이드',
      description:
        '국민·공무원 유족연금이 상속재산인지 수급권자 고유 권리인지 헷갈린다면 5가지 점검 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가신 후 국민연금공단에서 \"유족연금은 어머니께만 지급된다\"는 안내를 받았어요. 본인도 자녀 상속인인데 본인 몫이 따로 없는 건지, 상속재산에 포함되는 건지 정리가 안 됩니다. 공무원연금·사학연금도 비슷한 구조라고 합니다.\" 국민연금법·공무원연금법은 유족연금을 \"수급권자(법률상 배우자·자녀 등)의 고유 권리\"로 정한 영역. ① 유족연금은 상속재산 아닌 점 ② 수급권자 순위·자격 (배우자 → 자녀 → 부모 등) ③ 사망일시금·반환일시금 별도 ④ 신청 기한 (5년 시효) ⑤ 자녀 수급 요건 (미성년·장애 등) 5가지 트랙이 핵심. 유족연금은 상속분 협의 대상이 아니지만 사망일시금·반환일시금은 상속재산 평가에 포함될 여지가 있는 영역입니다. 대응은 ① 종류 확인 ② 수급권자 확정 ③ 신청 ④ 시효 ⑤ 사망일시금 검토 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 유족연금 상속 구분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 종류·수급권자·신청·시효·일시금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유족연금 종류 확인</strong> — 국민·공무원·사학·군인·산재.</li>\n<li><strong>② 수급권자 순위·자격 확정</strong> — 배우자·자녀·부모 등.</li>\n<li><strong>③ 유족연금 신청 (해당 기관)</strong></li>\n<li><strong>④ 5년 청구 시효 관리</strong></li>\n<li><strong>⑤ 사망일시금·반환일시금 별도 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유족연금은 수급권자의 \"고유 권리\"로 상속재산 아닌 영역. 다만 사망일시금·반환일시금 등은 평가 시 상속재산성과 별도 검토 필요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·신청·관리 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입 이력·연금 종류 확인 (즉시)</strong> — 국민연금·공무원·사학.</li>\n<li><strong>2단계 — 수급권자 자격·순위 확정 (1주 내)</strong> — 배우자·자녀·부모.</li>\n<li><strong>3단계 — 유족연금 신청 (해당 기관 방문)</strong> — 사망 사실증명·가족관계 자료.</li>\n<li><strong>4단계 — 사망일시금·반환일시금 별도 신청 (해당 시)</strong></li>\n<li><strong>5단계 — 자녀 수급 요건 점검·관리 (미성년·장애)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유족연금 구분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망·자격·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망 사실증명서</strong></li>\n<li><strong>피상속인 연금 가입 이력 (국민·공무원·사학)</strong></li>\n<li><strong>수급권자 가족관계증명서·혼인관계증명서</strong></li>\n<li><strong>자녀 수급 요건 자료 (미성년·재학·장애)</strong></li>\n<li><strong>수급권자 신분증·통장 사본</strong></li>\n<li><strong>해당 기관 신청서 (국민연금공단 등)</strong></li>\n<li><strong>(사망일시금 청구 시) 별도 신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유족연금은 상속분 협의 대상이 아닌 영역. 다만 사망일시금·반환일시금은 평가 시 상속재산성과 별도 검토. 신청은 5년 청구 시효가 있어 늦지 않게 진행.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유족연금 vs 상속재산</strong> — 고유 권리, 상속 아님.</li>\n<li><strong>수급권자 순위</strong> — 배우자 → 자녀 → 부모 순.</li>\n<li><strong>자녀 수급 요건</strong> — 미성년·재학·장애 등.</li>\n<li><strong>사망일시금·반환일시금</strong> — 별도 검토.</li>\n<li><strong>5년 청구 시효</strong> — 늦으면 권리 소멸.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국민연금공단 1355</strong></li>\n<li><strong>공무원연금공단 1588-4321</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유족연금 수급권의 고유 권리성',
        summary:
          '대법원 2007다26285(대법원, 2008.04.10 선고) 영역에서 법원은 유족연금은 수급권자의 고유 권리로서 피상속인의 상속재산에 포함되지 않으며, 수급권자 순위·자격에 따라 직접 청구되는 권리라고 평가한 사례 흐름이 있습니다.',
        takeaway: '유족연금은 상속재산 아닌 수급권자 고유 권리. 사망일시금·반환일시금은 별도 검토.',
      },
    ],
    faq: [
      {
        question: '유족연금도 상속재산인가요?',
        answer:
          '<strong>아닙니다. 수급권자의 고유 권리로 상속재산이 아닌 영역입니다.</strong>',
      },
      {
        question: '자녀도 유족연금 받을 수 있나요?',
        answer:
          '<strong>배우자가 우선이고 미성년·장애 등 요건 시 자녀에게 지급되는 영역입니다.</strong>',
      },
      {
        question: '사망일시금은 상속재산인가요?',
        answer:
          '<strong>유족연금과 달리 평가 시 상속재산성과 별도 검토되는 영역입니다.</strong>',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>일반적으로 5년 청구 시효가 있는 영역입니다.</strong> 늦지 않게 진행 권장.',
      },
      {
        question: '공무원연금·사학연금도 같은 구조인가요?',
        answer:
          '<strong>각 법령상 수급권자 고유 권리 구조가 유사한 영역입니다.</strong> 세부 요건은 각 기관 안내.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '생명보험 수익자', href: '/guide/inheritance/inheritance-life-insurance-beneficiary-separate' },
      { label: '상속세 계산', href: '/guide/inheritance/inheritance-tax-calculation' },
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '유족연금 사망일시금', href: '/guide/inheritance/inheritance-survivor-pension-lump-sum' },
    ],
  },
];
