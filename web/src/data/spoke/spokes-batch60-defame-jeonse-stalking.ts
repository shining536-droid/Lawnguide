import { SpokePage } from '../spoke-pages';

// batch60 defamation 3 + jeonse 2 + stalking 2 = 7개 (2026-05-10):
// 1. defamation / 딥페이크 합성 명예훼손 가해자 — 정통망법·성폭력처벌법 분기 방어
// 2. defamation / 학원 원장이 학부모 단체방에 학생 비방 — 원장 가해자 + 학부모 피해자 비교
// 3. defamation / 인스타 비공개 계정 비방 게시 — 전파가능성·신원특정 트랙
// 4. jeonse / 깡통전세·갭투자 매물 계약 전 식별 + 점검 트랙
// 5. jeonse / HUG 보증보험 사고 후 이행청구 거절·심사 통과 전략 트랙
// 6. stalking / 직장 상사 스토킹 + 회사 사용자책임·산안법 결합 트랙
// 7. stalking / 면접교섭권 빌미 재접촉 — 가사 vs 형사 분기 트랙
//
// 고유 존재 이유:
// 1. 이 페이지는 타인 얼굴·신체를 합성한 딥페이크 영상을 제작·배포해 입건된 가해자가 정통망법 명예훼손과 성폭력처벌법 제14조의2(허위영상물) 중 어떤 법으로 적용되는지 분기 판단하고 합의·반성·공탁으로 양형을 낮추는 4단계 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 학원·과외 원장이 학부모 단체 챗방에 특정 학생의 성적·행동·가정사를 노출시킨 사안에서 원장(가해자) 입장과 비방을 들은 학부모(피해자) 입장 양쪽의 책임 분기·고소 트랙·합의 포인트를 비교 정리하도록 돕는 페이지다.
// 3. 이 페이지는 인스타·트위터 비공개(잠금) 계정에 특정인 비방 게시물을 올린 행위가 \'전파가능성 미필 인식\' 요건을 충족하는지·팔로워 신원특정 + 캡처 유출 정황으로 공연성이 인정되는지 4단계 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 깡통전세·갭투자 매물 계약을 앞두고 시세·근저당·임대인 자력·전세가율 등 위험 신호를 식별하는 4가지 점검 트랙으로 계약 체결 전에 보증금 회수 가능성을 검증하도록 돕는 페이지다.
// 5. 이 페이지는 HUG 전세보증보험 가입자가 보증사고를 신고했지만 이행청구 단계에서 자료 부족·요건 미충족·임차인 과실 사유로 거절·심사 보류된 상황에서 보강 자료·재청구·이의신청·소송 4단계 통과 전략을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 직장 상사·관리자로부터 스토킹 피해를 받는 직장인이 가해자 형사 트랙 외에 회사 사용자책임(민법 제756조)·산업안전보건법 직장 내 괴롭힘·국가인권위 진정 4가지 결합 트랙으로 회사 차원 책임을 묻는 절차를 정리하도록 돕는 페이지다.
// 7. 이 페이지는 이혼·결별 후 자녀 면접교섭권을 빌미로 전 배우자가 본인에게 재접촉·문자·방문을 반복하는 상황에서 가사사건(면접교섭 변경·정지) 트랙과 형사 스토킹처벌법 트랙을 분기 판단해 본인 상황에 맞는 보호 전략을 정리하도록 돕는 페이지다.

export const spokesBatch60DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation / defamation-deepfake-synthesis-accused-act-bifurcation-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-deepfake-synthesis-accused-act-bifurcation-defense',
    keyword: '딥페이크 합성 명예훼손 가해자 분기',
    questionKeyword: '타인 얼굴을 합성한 딥페이크 영상을 만들었다가 입건됐어요. 정통망법·성폭력처벌법 중 어떤 법이 적용되나요?',
    ctaKeyword: '딥페이크 합성 가해자 분기 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '딥페이크 합성 가해자 — 4가지 법 분기 방어 트랙 | 로앤가이드',
      description:
        '딥페이크 합성으로 입건된 가해자가 정통망법·성폭력처벌법·저작권법·민사 4가지 분기 + 합의·공탁 방어 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"친구 얼굴을 다른 영상에 합성해 단톡방에 올렸다가 본인이 \'그냥 장난\'이라고 생각했는데 친구가 정식으로 고소했어요. 경찰서에서 \'정통망법 명예훼손\'으로 입건한다고 했는데, 인터넷 보니 \'성폭력처벌법 제14조의2 허위영상물\'이 더 무겁다고 합니다. 어떤 법이 적용되는지·합의로 낮출 수 있는지 알고 싶어요." 딥페이크 합성으로 입건된 가해자에게 적용 가능한 법은 ① 정통망법 제70조 명예훼손(허위사실 적시 시 7년 이하) ② 성폭력처벌법 제14조의2 허위영상물(성적 영상물이면 5~7년 이하) ③ 저작권법(원본 영상 무단 이용) ④ 민사 손해배상·위자료 4가지로 분기되는 영역입니다. 대법원 2024다14555 판결은 외형상 인격권 침해되더라도 \'정당한 표현\'이면 위법성 부정 영역이라고 판시했지만 합성 영상은 정당성 인정 어려움. 본인 합성 의도(장난·친밀·풍자)·성적 요소 유무·확산 정도에 따라 법이 분기되고 양형이 달라지는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 딥페이크 합성 가해자 4가지 법 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 정통망법·성폭력처벌법·저작권법·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정통망법 제70조 (일반 합성)</strong> — 성적 요소 없는 단순 얼굴 합성 + 비방 의도 + 공연성. 허위사실 적시 시 7년 이하, 사실(원본 인물 행위) 적시 시 3년 이하. 비방 목적 검사 입증 필요 영역.</li>\n<li><strong>② 성폭력처벌법 제14조의2 (성적 합성물)</strong> — 성적 욕망·수치심을 유발하는 영상물 합성. 5년 이하 또는 영리 목적 7년 이하. 정통망법보다 무거운 영역. 반의사불벌 아님(친고죄 아님).</li>\n<li><strong>③ 저작권법 (원본 영상 도용)</strong> — 합성에 사용된 원본 영상이 저작물이면 별도 침해. 복제·전송권 침해. 5년 이하 또는 5천만원 벌금.</li>\n<li><strong>④ 민사 손해배상·위자료</strong> — 인격권 침해 + 사생활 침해. 위자료 500~5,000만원 영역(확산·피해 종합). 형사 + 민사 별도 진행 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 성적 요소 유무가 가장 큰 분기점. 단순 얼굴 합성은 정통망법, 성적 영상물은 성폭력처벌법(반의사불벌 아님). 저작권 + 민사 결합 가능. 합의·공탁·반성 자료가 양형 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 합의·공탁 → 반성 자료 → 검찰 처분 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 합성 의도 정황·전송 대상자·확산 범위·삭제 시점·원본 출처 메모.</li>\n<li><strong>2단계 — 변호인 선임 (출석 전 권장)</strong> — 정통망법 vs 성폭력처벌법 분기 + 비방 목적 부정 + 합의 트랙 정리.</li>\n<li><strong>3단계 — 합의 + 공탁 시도 (1~2주 내)</strong> — 피해자에게 사과·합의금·처벌불원서. 거부 시 공탁(반성 자료). 합의금 500~3,000만원 영역(법 종류·확산 종합).</li>\n<li><strong>4단계 — 반성·삭제·재발방지 자료</strong> — 합성 영상 즉시 삭제 + 원본 파괴 + 재발방지 약정 + 봉사 + 반성문. 양형 자료.</li>\n<li><strong>5단계 — 검찰 처분</strong> — 정통망법은 합의 시 \'공소권 없음\'. 성폭력처벌법은 합의해도 처벌(반의사불벌 아님), 다만 양형 감경.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">딥페이크 합성 가해자 4가지 법 분기 + 방어 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사건 자료 + 양형 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>합성 의도 정황 메모</strong> — 장난·풍자·친밀 의도 표현.</li>\n<li><strong>전송 대상자 명단</strong> — 단톡방 인원·외부 확산 여부.</li>\n<li><strong>확산 범위 자료</strong> — 캡처·재전송·SNS 게시 자료.</li>\n<li><strong>삭제 시점·재발방지 약정</strong> — 즉시 삭제 + 원본 파괴 자료.</li>\n<li><strong>원본 영상 출처 자료</strong> — 저작권 침해 가중 정황 평가.</li>\n<li><strong>합의서·처벌불원서·공탁서</strong> — 합의 진행 또는 공탁 자료.</li>\n<li><strong>반성문·기부·봉사 영수증</strong> — 양형 자료(초범·반성).</li>\n<li><strong>경력증명서·평판 자료</strong> — 본인 평소 평판.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 성적 요소가 \'경계\'에 있다면(예: 일상 사진을 부적절한 맥락에 합성) 어떤 법으로 적용될지 변호인 자문 필수. 경계 사안은 검찰 단계 진술 톤 자체로 적용 법 분기될 수 있는 영역. 진술 전 변호인 자문이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"딥페이크는 무조건 성폭력처벌법" 주장 부분 반박</strong> — 성적 요소가 핵심. 단순 얼굴 합성은 정통망법 영역. 변호인이 분기 변론.</li>\n<li><strong>"비방 목적 명백" 주장 반박</strong> — 비방 목적은 검사 입증 책임. 장난·풍자 의도였다면 비방 목적 부정 트랙(2022도699 비방 목적 검사 입증).</li>\n<li><strong>"공연성 명백" 주장 부분 반박</strong> — 단톡방 폐쇄 공간이라도 전파가능성 미필 인식 시 공연성. 다만 친밀 모임 + 캡처 유포자 따로면 정황 약화 영역.</li>\n<li><strong>합의 우선 권장</strong> — 정통망법은 합의 시 공소권 없음. 성폭력처벌법은 양형 감경. 합의 어려우면 공탁 + 반성 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong> — 부당 출석·민원.</li>\n<li><strong>방송통신심의위원회 1377</strong> — 정보통신망 명예훼손 삭제 신고.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정통망법 명예훼손에서 비방 목적의 검사 입증 책임',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항 명예훼손죄의 \'비방할 목적\'과 \'드러낸 사실이 사회적 평가를 떨어뜨리는 것인지\'는 별개의 구성요건이고, 사회적 평가를 떨어뜨리는 사실이라도 비방 목적이 당연히 인정되는 것은 아니며 모든 구성요건에 대한 증명책임은 검사에게 있다고 판시했습니다. 딥페이크 합성에서 \'장난·풍자 의도\'였다고 변론하면 비방 목적 부정 트랙이 일부 열릴 수 있는 영역이고, 성적 요소 유무에 따라 정통망법 vs 성폭력처벌법 분기로 양형이 크게 달라진다는 시사점이 있습니다.',
        takeaway: '딥페이크 합성 가해자도 비방 목적 부정 + 합의 + 공탁 + 반성 자료 결합 시 정통망법 적용 영역에서는 기소유예·약식벌금 트랙 가능 영역이라, 성적 요소 분기 판단 + 변호인 자문이 양형의 핵심인 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '얼굴 합성만 했는데 성폭력처벌법인가요?',
        answer:
          '<strong>성적 요소 유무가 분기점입니다.</strong> 일상 사진 합성은 정통망법 영역. 성적 영상물 합성은 성폭력처벌법 제14조의2(허위영상물). 변호인 자문 필수.',
      },
      {
        question: '단톡방에만 올렸는데 공연성 인정되나요?',
        answer:
          '<strong>전파가능성 미필 인식 시 공연성 성립 영역입니다.</strong> 다만 친밀 모임이라면 미필 고의 부정 변론 가능. 캡처 유포자 따로면 정황 약화.',
      },
      {
        question: '합의금은 얼마가 적정한가요?',
        answer:
          '<strong>합의금 500~3,000만원 영역이 일반적입니다.</strong> 정통망법(낮음)·성폭력처벌법(높음)·확산 정도 종합. 분할납입·공탁 협상. 변호사 자문 권장.',
      },
      {
        question: '성폭력처벌법은 합의해도 처벌되나요?',
        answer:
          '<strong>친고죄·반의사불벌죄 아닙니다.</strong> 합의해도 처벌. 다만 양형 감경 자료. 합의 + 반성 + 공탁 결합 시 집행유예·벌금형 가능 영역.',
      },
      {
        question: '원본 영상이 인터넷에 있던 거면 저작권 안 되나요?',
        answer:
          '<strong>인터넷 공개 영상도 저작권 보호 영역입니다.</strong> 무단 복제·합성·전송은 저작권 침해. 다만 보호 기간·공익 목적·인용 항변 변호인 자문.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '딥페이크 합성 명예훼손', href: '/guide/defamation/defamation-deepfake-synthesis-defamation' },
      { label: '딥페이크 피해자 삭제 절차', href: '/guide/defamation/defamation-deepfake-victim-takedown-procedure' },
      { label: '명예훼손 가해자 시작점', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '명예훼손 합의금 가이드', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '온라인 댓글 정통망법', href: '/guide/defamation/defamation-online-comment-information-network-act' },
    ],
  },

  // ─── 2. defamation / defamation-academy-director-student-criticism-parent-chat-bifurcation ───
  {
    domain: 'defamation',
    slug: 'defamation-academy-director-student-criticism-parent-chat-bifurcation',
    keyword: '학원 원장 학부모 단체방 학생 비방',
    questionKeyword: '학원 원장이 학부모 단체방에 본인 자녀 성적·태도를 부정적으로 언급했어요. 명예훼손 책임은요?',
    ctaKeyword: '학원 원장 학부모 단체방 비방 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '학원 원장 학부모방 비방 — 4가지 양쪽 책임 분기 | 로앤가이드',
      description:
        '학원 원장이 학부모 단체방에 학생 비방을 한 사안에서 원장(가해자)과 학부모(피해자) 양쪽 책임 분기 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>"학원 원장이 학부모 단체 카톡방에 \'A 학생은 수업 태도가 불량하고 가정환경이 불안정하다\'고 발언했어요. A 학생 학부모는 명예훼손으로 고소를 검토 중이고, 원장은 \'교육 정보 공유 목적이었다\'고 주장합니다. 양쪽 입장은 어떻게 다른가요?" 학원 원장의 학부모 단체방 학생 비방은 ① 원장 가해자 입장에서 직업·교육 정보 공유 항변 ② 정통망법·형법 명예훼손 ③ 학부모 피해자 입장에서 자녀 인격권·학습권 침해 ④ 학원 영업방해·계약 해지 4단계로 양쪽 책임이 분기되는 영역입니다. 대법원 2020도5813 판결은 단톡방 같은 폐쇄 공간이라도 전파가능성 미필 인식 시 공연성 성립 영역이라고 판시. 학부모 단체방은 통상 30~50명 규모로 외부 전파 위험이 객관적으로 존재하는 영역. 다만 \'교육적 공유\' 목적으로 정당한 표현이면 위법성 부정 가능. 양쪽 입장에서 자료·합의·고소 트랙이 다르게 정리되는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 원장·학부모 4가지 책임 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 직업적 항변·전파가능성·인격권 침해·영업방해 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 원장 가해자: 교육 정보 공유 항변 (제한적)</strong> — 학부모 전체 공지·교육 컨설팅 목적이면 정당 표현 항변 일부 가능. 다만 학생 \'가정환경\' 같은 사적 영역은 항변 어려움.</li>\n<li><strong>② 원장: 정통망법·형법 명예훼손</strong> — 단체방은 정통망. 정통망법 제70조 적용. 사실 적시 3년 이하, 허위 7년 이하. 비방 목적 검사 입증 필요.</li>\n<li><strong>③ 학부모 피해자: 자녀 인격권·학습권 침해 민사</strong> — 미성년 자녀의 인격권 + 사생활 + 학습권 침해. 위자료 + 학원비 환불 + 전학 비용 청구.</li>\n<li><strong>④ 학원 영업방해 + 계약 해지</strong> — 다른 학생·학부모에게 미친 영향이 영업방해 정황. 학원 등록 계약 즉시 해지 + 환불 + 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 원장은 정당한 교육 정보 vs 비방 발언 분기. 학부모는 자녀 인격권 + 영업방해 + 계약 해지 결합 트랙. 단체방 인원·발언 내용·외부 확산이 핵심 정황.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양쪽 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 분기 판단 → 고소·합의 → 환불·민사 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 학부모 단체방 캡처·발언 전후 맥락·인원수·발언 시점·외부 전파 정황.</li>\n<li><strong>2단계 — 분기 판단</strong> — 원장은 교육 정당성 입증 vs 비방 목적 부정. 학부모는 자녀 피해 + 다른 학부모 영향 입증.</li>\n<li><strong>3단계 — 고소·합의 시도 (1~2주 내)</strong> — 학부모 → 원장 정통망법 + 형법 고소 또는 학원 측 합의 시도. 합의금 + 위자료 + 학원비 환불 협상.</li>\n<li><strong>4단계 — 학원비 환불·민사</strong> — 학원 등록 계약 해지 + 환불 + 위자료 청구 별도. 다른 학원 전학 비용도 손해 영역.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 정통망법 명예훼손 + 모욕 + 영업방해. 양형 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 원장·학부모 양쪽 4가지 책임 분기 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단체방 자료 + 학원 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>학부모 단체방 전체 캡처</strong> — 발언 + 전후 맥락 + 인원 명단.</li>\n<li><strong>단체방 인원 구성·관계</strong> — 학원 학부모만인지 외부 인사 포함인지.</li>\n<li><strong>학원 등록 계약서·학원비 영수증</strong> — 계약 해지·환불 자료.</li>\n<li><strong>자녀 학습 자료</strong> — 성적표·출결·학원 평가.</li>\n<li><strong>외부 확산 자료</strong> — 다른 단체방·학교 소문 등.</li>\n<li><strong>자녀 정신과·상담 자료</strong> — 인격권 침해 자료.</li>\n<li><strong>학원 영업·평판 자료 (원장 입장)</strong> — 정당한 교육 정보 입증.</li>\n<li><strong>다른 학부모 의견·증인</strong> — 단체방 분위기 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학원 측은 \'교육 정보 공유\' 항변을 위해 단체방 운영 규칙·상담 안내 정책 자료가 핵심. 학부모 측은 \'자녀 사적 영역(가정환경·외모) 노출\'이 정당화 안 되는 영역임을 강조. 양쪽 자료 정리 방향이 다름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 양측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>원장 "교육 정보 공유 의도" 주장 부분 반박</strong> — 학생 \'가정환경·태도\' 같은 사적 영역은 정당화 어려움. 학습 평가는 개별 상담 영역.</li>\n<li><strong>"단체방은 사적 공간" 주장 반박</strong> — 학부모 30~50명 규모면 전파가능성 미필 인식 영역(2020도5813).</li>\n<li><strong>학부모 "자녀에게 직접적 피해 없다" 주장 부분 반박</strong> — 다른 학부모·학생 사이 소문 + 학습 의지 저하 + 정신 피해가 인격권 침해 자료 영역.</li>\n<li><strong>합의·환불 우선 권장</strong> — 정통망법은 합의 시 공소권 없음. 학원비 환불 + 위자료 + 처벌불원서 결합 협상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사·민사 무료 상담.</li>\n<li><strong>한국소비자원 1372</strong> — 학원비 환불 분쟁조정.</li>\n<li><strong>국가인권위 1331</strong> — 학생 인권 침해 진정.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방 등 폐쇄 공간 발언과 전파가능성 이론',
        summary:
          '대법원 2020도5813 사건(대법원, 2020.11.19 선고)에서 법원은 명예훼손죄의 공연성에 관한 전파가능성 이론을 유지하면서, 명예훼손죄 공연성 인정의 위험성에 비추어 행위자에게 \'전파가능성에 대한 미필적 고의\'가 필요하고 이에 더해 그 위험을 용인하는 내심의 의사도 필요하다고 판시했습니다. 학부모 단체방 같은 다수 모임에서 학생의 사적 영역을 발언한 경우 객관적 전파가능성이 인정되는 영역이고, 다만 \'교육 정보 공유\' 목적의 정당한 평가라면 위법성 부정 트랙이 일부 열린다는 시사점이 있습니다.',
        takeaway: '학원 원장의 학부모 단체방 학생 비방은 원장 가해자 + 학부모 피해자 양쪽 책임이 분기되는 영역이라, 단체방 인원·발언 내용·자녀 피해 자료를 정리하면 양쪽 4단계 트랙이 모두 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '학원 원장이 직업적 의견 공유한 거 아닌가요?',
        answer:
          '<strong>학생 \'가정환경·태도\' 같은 사적 영역은 정당화 어려움 영역입니다.</strong> 학습 평가는 개별 상담. 단체방 비방은 명예훼손·인격권 침해.',
      },
      {
        question: '학부모방이 폐쇄 공간이라 명예훼손 안 되나요?',
        answer:
          '<strong>학부모 30~50명이면 전파가능성 미필 인식 영역입니다(2020도5813).</strong> 단체방은 정통망. 정통망법 제70조 적용 영역.',
      },
      {
        question: '학원비 환불 가능한가요?',
        answer:
          '<strong>학원 측 귀책 시 즉시 해지 + 환불 영역입니다.</strong> 한국소비자원 분쟁조정(1372) 또는 민사 청구. 위자료 + 환불 결합.',
      },
      {
        question: '자녀가 정신과 상담 받았는데 위자료는?',
        answer:
          '<strong>위자료 300~1,500만원 영역이 일반적입니다.</strong> 발언 정도·자녀 피해·확산 종합. 다른 학원 전학 비용도 손해 청구.',
      },
      {
        question: '원장이 사과하면 합의 받아야 하나요?',
        answer:
          '<strong>본인 판단 영역입니다.</strong> 합의 시 공소권 없음(정통망법). 학원비 환불 + 위자료 + 다른 학생에 대한 재발방지 약정 결합 협상 권장.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '학교 학부모방 명예훼손', href: '/guide/defamation/defamation-school-parent-chat-defamation' },
      { label: '학부모 단체방 모욕 가해', href: '/guide/defamation/defamation-pta-groupchat-insult-charged' },
      { label: '과외·튜터 학부모방 피해자', href: '/guide/defamation/defamation-tutor-parent-groupchat-insult-victim' },
      { label: '단톡방 명예훼손 4요건', href: '/guide/defamation/defamation-group-chat-requirements-4items' },
      { label: '명예훼손 합의금 가이드', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 3. defamation / defamation-instagram-private-account-defamation-spread-risk ───
  {
    domain: 'defamation',
    slug: 'defamation-instagram-private-account-defamation-spread-risk',
    keyword: '인스타 비공개 계정 비방 전파가능성',
    questionKeyword: '인스타 비공개 계정에 본인 비방 글이 올라왔어요. 팔로워만 보는 계정인데 명예훼손 되나요?',
    ctaKeyword: '인스타 비공개 비방 전파 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '인스타 비공개 비방 — 4가지 전파가능성 판단 트랙 | 로앤가이드',
      description:
        '인스타·트위터 비공개(잠금) 계정에 비방 글이 올라왔다면 전파가능성·공연성 4가지 판단 트랙과 신원특정·고소를 지금 확인하세요.',
    },
    intro:
      '<p>"본인 친구가 운영하는 인스타 비공개 계정(팔로워 200명·승인제)에 본인을 \'사기꾼이고 거짓말쟁이\'라고 비방하는 게시물이 올라왔어요. 누가 캡처해서 본인에게 알려줘서 알게 됐는데, \'비공개 계정이라 공연성 안 되는 거 아니냐\'고도 합니다. 명예훼손 가능한가요?" 인스타·트위터 비공개 계정 비방은 ① 전파가능성 미필 인식 판단(팔로워 수·승인 정책) ② 공연성 객관적 정도 ③ 캡처 유출 정황 평가 ④ 신원특정·고소 4단계 트랙으로 정리되는 영역입니다. 대법원 2020도5813 판결은 폐쇄 공간이라도 전파가능성 미필 인식 + 위험 용인 시 공연성 성립 영역. 비공개 계정도 팔로워 200명 규모면 객관적 전파가능성 인정될 영역. 게다가 캡처돼 본인에게 전달된 정황 자체가 \'전파 발생\'을 보여주는 영역. 신원특정 + 캡처 자료 + 정통망법 결합 트랙이 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 비공개 계정 비방 4가지 전파가능성 판단 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 팔로워 수·승인 정책·캡처 유출·신원특정 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 팔로워 수·관계 평가</strong> — 200명 이상이면 통상 전파가능성 객관적 인정 영역. 50명 이하 + 가족 친지 위주는 미필 고의 부정 변론 가능 영역.</li>\n<li><strong>② 승인 정책 정황</strong> — 누구나 신청만 하면 승인하는 계정은 사실상 공개. 엄격 친밀 승인이면 폐쇄성 인정 부분 영역. 정책 자료가 분기 정황.</li>\n<li><strong>③ 캡처 유출 정황 (2020도5813)</strong> — 캡처돼 외부로 흘러나간 사실 자체가 \'전파 발생\' 입증. 작성자 미필 인식 정황 강함.</li>\n<li><strong>④ 신원특정·고소 트랙</strong> — 비공개라도 통신자료·메타 자료요청으로 작성자 추적 가능. 정통망법 제70조 적용. 외국 본사라 1~3개월 소요 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비공개 계정도 팔로워 수·승인 정책·캡처 유출 정황 종합 시 공연성 성립 영역. \'비공개라 무조건 안 된다\'는 오해. 캡처 자료 + 작성자 추적 + 정통망법 결합 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 임시조치 → 형사 고소 → 신원조회 → 민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 게시물 URL·작성자 ID·게시일·좋아요·댓글·캡처. 본인에게 캡처가 전달된 정황(누가 캡처했고 언제 본인이 봤는지).</li>\n<li><strong>2단계 — 임시조치 신청 (1~3일)</strong> — 인스타 직접 권리침해 신고 + 방통심의위 권리침해(1377). 30일 임시조치.</li>\n<li><strong>3단계 — 형사 고소 (1~2주 내)</strong> — 정통망법 제70조 명예훼손. 비공개여도 캡처 유출 정황 결합 시 공연성 성립 변론.</li>\n<li><strong>4단계 — 신원조회</strong> — 경찰 사건번호 발급 후 메타(인스타) 자료요청. 외국 본사라 1~3개월 소요 영역.</li>\n<li><strong>5단계 — 민사 손해배상 (작성자 특정 후)</strong> — 명예훼손 + 사생활 침해. 위자료 300~2,000만원 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">인스타 비공개 비방 4단계 전파가능성 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물 자료 + 캡처 유출 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>게시물 전체 캡처·URL</strong> — 작성자 ID·게시일·좋아요·댓글.</li>\n<li><strong>계정 팔로워 수·승인 정책 정보</strong> — 전파가능성 입증.</li>\n<li><strong>캡처가 본인에게 전달된 경위</strong> — 누가·언제·어떻게(전파 발생 입증).</li>\n<li><strong>본인 신원 자료</strong> — 게시물에서 본인 특정되는 정황.</li>\n<li><strong>임시조치 신청 자료</strong> — 인스타·방통심의위 신고 영수증.</li>\n<li><strong>외부 확산 자료</strong> — 게시물이 다른 곳으로 퍼진 자료.</li>\n<li><strong>피해 자료</strong> — 정신과 진단·직장 평판·인간관계 영향.</li>\n<li><strong>경찰 사건번호</strong> — 신원조회용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비공개 계정이지만 \'본인에게 캡처가 전달된 사실\' 자체가 전파가능성 + 실제 전파 발생을 보여주는 영역. 누가 캡처했는지(같은 학교·직장)·언제·어떻게 전달됐는지가 핵심 정황. 변호인 자문 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 작성자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"비공개라 공연성 부정" 주장 반박</strong> — 팔로워 200명 + 캡처 유출 정황이면 객관적 전파가능성 인정 영역(2020도5813).</li>\n<li><strong>"친밀한 친구만 보는 계정" 주장 부분 반박</strong> — 승인 정책·인원·캡처 유출이 종합 평가. 200명 이상이면 \'친밀\' 부정 영역.</li>\n<li><strong>"비방 목적 없었다" 주장 반박</strong> — 비방 목적 검사 입증. 다만 \'사기꾼·거짓말쟁이\' 같은 사실 적시 + 부정 평가는 비방 목적 추정 정황 강함.</li>\n<li><strong>외국 본사(메타) 자료요청 시간 소요 영역</strong> — 1~3개월. 그 사이 임시조치 + 다른 정황 자료 정리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 1377</strong> — 권리침해정보 신고 + 임시조치.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>한국인터넷진흥원 KISA 118</strong> — 디지털 분쟁 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폐쇄 공간 발언에서 전파가능성 미필 인식과 위험 용인 의사',
        summary:
          '대법원 2020도5813 사건(대법원, 2020.11.19 선고)에서 법원은 명예훼손죄 공연성에 관한 전파가능성 이론을 유지하면서, 행위자에게 \'전파가능성에 대한 미필적 고의\'가 필요하고 이에 더해 그 위험을 용인하는 내심의 의사도 필요하다고 판시했습니다. 인스타 비공개 계정처럼 외형상 폐쇄 공간이라도 팔로워 수·승인 정책·캡처 유출 정황을 종합해 객관적 전파가능성이 인정되면 공연성 성립 영역이고, 본인에게 캡처가 전달된 사실 자체가 \'전파 발생\'을 보여주는 정황이라는 시사점이 있습니다.',
        takeaway: '인스타 비공개 계정 비방도 팔로워 수·캡처 유출 정황 결합 시 정통망법 명예훼손 영역이라, 게시물·캡처 경위·신원조회 자료를 정리하면 4단계 트랙(임시조치·신원조회·형사·민사)이 모두 열려 손해 회복 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '비공개 계정도 명예훼손 되나요?',
        answer:
          '<strong>팔로워 수·승인 정책·캡처 유출 종합 평가 영역입니다(2020도5813).</strong> 200명 이상 + 캡처 유출이면 공연성 성립. \'비공개=무조건 부정\'은 오해.',
      },
      {
        question: '캡처해서 알려준 사람도 처벌되나요?',
        answer:
          '<strong>유포 방식·맥락에 따라 별개 처벌 가능 영역입니다.</strong> 본인에게 알려준 행위 자체는 처벌 어려움. 다만 다른 곳에 추가 유포면 별도 책임.',
      },
      {
        question: '작성자 신원 알 수 있나요?',
        answer:
          '<strong>경찰 사건번호 + 메타 자료요청으로 가능 영역입니다.</strong> 외국 본사라 1~3개월 소요. 임시조치 + 신원조회 동시 진행 권장.',
      },
      {
        question: '계정 주인이 작성자가 아니면?',
        answer:
          '<strong>실제 작성자 추적 영역입니다.</strong> 계정 공유·해킹·도용 정황 자료 확인. 계정 주인 책임은 별개(관리 책임).',
      },
      {
        question: '위자료는 얼마 받을 수 있나요?',
        answer:
          '<strong>위자료 300~2,000만원 영역이 일반적입니다.</strong> 게시물 내용·확산 정도·피해 자료 종합. 사생활·신상 결합 시 가중.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '익명 게시판 작성자 추적', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '온라인 게시글 삭제 청구', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
      { label: '카페 ID 공개 청구', href: '/guide/defamation/defamation-cafe-id-disclosure-request' },
      { label: '단톡방 4요건 점검', href: '/guide/defamation/defamation-group-chat-requirements-4items' },
      { label: '온라인 명예훼손 소송 절차', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 4. jeonse / jeonse-empty-deposit-gap-investment-pre-contract-identification ───
  {
    domain: 'jeonse',
    slug: 'jeonse-empty-deposit-gap-investment-pre-contract-identification',
    keyword: '깡통전세 갭투자 매물 식별 점검',
    questionKeyword: '전세 계약을 앞두고 있는데 깡통전세·갭투자 매물인지 어떻게 확인하나요?',
    ctaKeyword: '깡통전세 갭투자 식별 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '깡통전세·갭투자 — 4단계 계약 전 식별 트랙 | 로앤가이드',
      description:
        '전세 계약 전 깡통전세·갭투자 매물 위험 신호를 식별하는 4단계 점검 트랙(시세·근저당·전세가율·임대인)을 지금 확인하세요.',
    },
    intro:
      '<p>"올해 결혼하면서 전세를 알아보는데 부동산이 추천한 빌라가 시세 대비 전세보증금이 거의 매매가 수준이래요. 부동산은 \'주변 시세보다 싸게 나온 매물\'이라며 권하는데, 인터넷에 \'깡통전세\'를 알아보는 법이 있다는데 어떻게 점검하나요?" 깡통전세·갭투자 매물 계약 전 점검은 ① 시세·매매가 대비 전세가율 점검 ② 등기부 근저당·신탁 점검 ③ 임대인 자력·세금체납 점검 ④ HUG 보증보험 가입 가능성 점검 4단계 트랙으로 정리되는 영역입니다. 대법원 2024다305087 판결은 임차권등기 결정에 대한 확인·집행문 부여의 소를 제기할 이익이 없다고 판시. 전세사기 피해 후 절차도 복잡한 영역. 따라서 \'사고 후 회복\'보다 \'사고 예방\' 4단계 점검이 핵심. 전세가율 80% 이상·근저당 60% 이상·임대인 다주택·HUG 거절 매물은 명백한 위험 신호 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 깡통전세·갭투자 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세가율·근저당·임대인 자력·HUG 가능성 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전세가율 점검 (전세보증금 ÷ 매매가)</strong> — 80% 이상이면 깡통전세 위험 영역. 90% 이상은 매우 위험. 시세는 KB부동산·국토부 실거래가·디스코 3개 비교.</li>\n<li><strong>② 등기부 근저당·신탁 점검</strong> — 근저당 합계가 매매가의 60% 이상이면 위험. 신탁등기 + 우선수익자 확인. 본인 보증금까지 합치면 매매가 초과 정황 평가.</li>\n<li><strong>③ 임대인 자력·세금체납 점검</strong> — 임대인 다주택자(20채 이상) + 종부세 체납 정황은 위험. 국세청 미납국세 열람(2024.12부터) + 임대사업자 등록 여부.</li>\n<li><strong>④ HUG 보증보험 가입 가능성 점검</strong> — HUG 거절 매물은 깡통 가능성. 사전 시세조회(HUG 1670-9009) + 가입 가능 여부 확인. 가입 가능해야 안전 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전세가율 80% 이상 + 근저당 60% 이상 + HUG 거절은 명백한 위험. 4가지 모두 점검하고 1개라도 위험 신호면 다른 매물 검토. \'주변 시세보다 싸다\'는 갭투자·깡통 정황 의심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 점검 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 시세 비교 → 등기부 → 임대인 자료 → HUG → 계약 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시세 비교 (계약 1~2주 전)</strong> — KB부동산·국토부 실거래가·디스코 3곳 매매가·전세가 비교. 전세가율 계산.</li>\n<li><strong>2단계 — 등기부등본 발급 + 분석</strong> — 근저당·신탁·가압류·가처분 확인. 근저당 합계 + 본인 보증금 합산하여 매매가 비율.</li>\n<li><strong>3단계 — 임대인 자료 (계약 직전)</strong> — 임대인 신분증·국세 미납 확인서(2024.12 시행)·다주택 정황·임대사업자 등록 여부.</li>\n<li><strong>4단계 — HUG 사전 시세조회 + 가입 가능 확인</strong> — 1670-9009 사전 조회. 가입 가능해야 안전. 거절 매물은 위험 신호.</li>\n<li><strong>5단계 — 계약 결정·특약 추가</strong> — 4가지 통과 시 계약. \'근저당 미설정 약정\' \'세금체납 시 해지\' \'HUG 가입 의무\' 특약 명시.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">깡통전세·갭투자 매물 4단계 식별 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 매물 자료 + 임대인 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>등기부등본 (계약 직전 발급)</strong> — 근저당·신탁·가압류·소유권.</li>\n<li><strong>건축물대장</strong> — 위반건축물 여부·용도.</li>\n<li><strong>시세 비교 자료</strong> — KB·실거래가·디스코 3곳.</li>\n<li><strong>임대인 신분증·다주택 정황</strong> — 본인 명의·다른 주택 보유 여부.</li>\n<li><strong>국세 미납 확인서 (2024.12 시행)</strong> — 임대인 동의 또는 임차인 직접 열람.</li>\n<li><strong>HUG 사전 시세조회 결과</strong> — 가입 가능 여부 확인.</li>\n<li><strong>계약 특약 자료</strong> — 근저당 미설정·세금체납 해지·HUG 가입 의무.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약 당일도 등기부등본 다시 발급해서 전입신고·확정일자 받기 직전 변동 없는지 확인. 계약 후 임대인이 근저당 추가 설정하는 경우 있어 \'잔금 지급일 등기 다시 확인\'이 핵심 점검. 특약에 \'잔금일 근저당 발견 시 무효\' 추가.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 부동산·임대인 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"주변 시세보다 싸다" 부동산 주장 의심</strong> — 갭투자·깡통전세 정황. 시세 3곳 비교 + 다른 매물과 비교 필수.</li>\n<li><strong>"근저당 곧 갚는다" 임대인 주장 의심</strong> — 잔금일 등기 재확인 + \'근저당 미설정 약정\' 특약. 약정 없으면 위험.</li>\n<li><strong>"HUG 가입 안 해도 안전하다" 의심</strong> — HUG 거절 매물 = 위험 신호. 가입 가능 매물 + 가입 의무 특약 권장.</li>\n<li><strong>"세금 체납 없다" 임대인 주장 검증</strong> — 국세 미납 확인서 직접 열람(2024.12 시행). 동의 없는 매물 의심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>HUG 1670-9009</strong> — 전세보증보험 사전 시세조회·가입 상담.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세사기 예방·피해 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 임대차 계약 무료 상담.</li>\n<li><strong>한국공인중개사협회 02-3489-7300</strong> — 중개사 자격·과실 점검.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기 결정 후 추가 절차의 소의 이익',
        summary:
          '대법원 2024다305087 사건(대법원, 2025.04.24 선고)에서 법원은 임차권등기명령에 대한 확인·집행문 부여의 소를 제기할 이익이 없다고 판시했습니다. 즉 임차권등기명령의 결정이 그대로 효력을 발하므로 별도 확인 절차가 불필요한 영역. 다만 이는 \'사고 후 절차 효율\' 판시이고, 깡통전세·갭투자 매물 자체를 사전에 식별하는 4단계 점검(시세·근저당·자력·HUG)이 사고 예방에 더 핵심이라는 시사점이 있습니다. 사고 후 절차는 임차권등기 + 강제경매 + HUG 청구로 복잡하므로 계약 전 점검이 가장 효율적인 영역.',
        takeaway: '깡통전세·갭투자 매물은 사고 후 절차가 복잡한 영역이라, 시세·등기부·임대인 자료·HUG 자료를 정리해 4단계 사전 식별 트랙을 진행하면 위험 신호를 미리 차단할 수 있는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '전세가율 몇 % 이상이면 위험한가요?',
        answer:
          '<strong>80% 이상이면 깡통전세 위험 영역입니다.</strong> 90% 이상은 매우 위험. 다른 매물 검토 권장. 시세는 KB·실거래가·디스코 3곳 비교.',
      },
      {
        question: 'HUG 가입 거절되는 매물은 무조건 위험한가요?',
        answer:
          '<strong>위험 신호 영역입니다.</strong> HUG 거절은 시세·근저당·자력 등 종합 평가 결과. 가입 가능 매물 + 가입 의무 특약 권장.',
      },
      {
        question: '임대인 세금 체납 어떻게 확인하나요?',
        answer:
          '<strong>국세 미납 확인서 직접 열람 가능 영역입니다(2024.12 시행).</strong> 임대인 동의 또는 일정 조건 임차인 직접 열람. 동의 거부 매물 의심.',
      },
      {
        question: '계약 후 임대인이 근저당 설정하면?',
        answer:
          '<strong>잔금일 등기 재확인 + 특약으로 방어 영역입니다.</strong> \'잔금일 근저당 발견 시 계약 무효\' 특약 추가. 잔금 지급 직전 등기 발급.',
      },
      {
        question: '갭투자 임대인 다주택자는 무조건 위험한가요?',
        answer:
          '<strong>위험 정황 강한 영역입니다.</strong> 다주택자 + 임대사업자 등록 + HUG 가입 가능 + 전세가율 70% 미만이면 상대적 안전. 종합 평가 핵심.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '깡통전세 사전 점검', href: '/guide/jeonse/jeonse-empty-house-warning-pre-contract-check' },
      { label: '계약 특약 체크리스트', href: '/guide/jeonse/jeonse-contract-special-agreement-checklist' },
      { label: '임대인 세금체납 위험', href: '/guide/jeonse/jeonse-landlord-tax-delinquent-risk' },
      { label: '보증보험 가입 가이드', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 5. jeonse / jeonse-hug-guarantee-claim-rejected-review-pass-strategy ───
  {
    domain: 'jeonse',
    slug: 'jeonse-hug-guarantee-claim-rejected-review-pass-strategy',
    keyword: 'HUG 보증보험 청구 거절 심사 통과',
    questionKeyword: 'HUG 보증보험 사고를 신고했는데 자료 부족이라고 거절됐어요. 재청구·통과 방법은요?',
    ctaKeyword: 'HUG 청구 거절 통과 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'HUG 청구 거절 — 4단계 보강·재청구·이의 트랙 | 로앤가이드',
      description:
        'HUG 전세보증보험 청구가 자료 부족·요건 미충족·과실 사유로 거절됐다면 보강·재청구·이의·소송 4단계 통과 전략을 지금 확인하세요.',
    },
    intro:
      '<p>"HUG 전세보증보험 가입했는데 임대인이 보증금을 안 줘서 보증사고 신고하고 이행청구했어요. 그런데 \'점유 + 임차권등기 자료 부족\'이라며 보류·거절 통보가 왔습니다. HUG 가입했는데 왜 못 받나요? 어떻게 통과시키나요?" HUG 보증보험 청구 거절 통과 트랙은 ① 거절 사유 분석 + 자료 보강 ② 재청구 또는 보완 신청 ③ 이의신청·민원·금감원 분쟁조정 ④ 민사 보증금 청구 소송 4단계로 정리되는 영역입니다. HUG는 ⑴ 임대차계약 + 점유 + 전입신고 + 확정일자 ⑵ 임차권등기 ⑶ 임대인 사망·소재불명·이행 거부 정황 ⑷ 임차인 과실 부재 4가지 요건 충족 자료가 핵심. 자료 부족 거절은 보강 후 재청구로 통과 가능한 영역. 대법원 2024다326398 판결은 임차권등기로 발생한 대항력·우선변제권은 등기 시점 기준이라고 판시. 임차권등기 + 점유 자료가 핵심 통과 자료입니다.</p>',
    sections: [
      {
        title: 'Q. HUG 거절 4가지 통과 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유 분석·자료 보강·이의·소송 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거절 사유 분석</strong> — HUG 거절 통보서 사유 정확히 확인. 점유 부족·임차권등기 미등재·임대인 이행 정황 부족·임차인 과실 의심 4가지가 통상 사유.</li>\n<li><strong>② 자료 보강 + 재청구</strong> — 부족 자료(점유 사진·관리비 영수증·임차권등기 결정문·임대인 통화 녹취) 보강 후 재청구. 30일 내 재신청 권장 영역.</li>\n<li><strong>③ 이의신청 + 금감원 분쟁조정</strong> — HUG 이의신청 후 금감원 분쟁조정(1332). 자료 충분한데 거절 시 강한 트랙. 90일 내 결정 영역.</li>\n<li><strong>④ 민사 보증금 청구 소송</strong> — HUG + 임대인 공동 피고. 보증보험 약관 + 보증금 반환 청구. 본안에서 다시 자료 평가. 6~12개월 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: HUG 거절은 \'끝\'이 아니라 보강·재청구·이의·소송 4단계 트랙. 거절 사유 분석이 첫 단계. 임차권등기 + 점유 자료 + 임대인 이행 거부 정황 보강이 핵심. 변호사 자문 권장.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통과 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유 분석 → 자료 보강 → 재청구 → 이의·금감원 → 소송 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거절 통보서 분석 (즉시)</strong> — HUG 통보서 사유 정확히 확인. 점유·임차권등기·임대인 이행·임차인 과실 4가지 중 어느 사유인지 분기.</li>\n<li><strong>2단계 — 자료 보강 (1~2주)</strong> — 부족 자료 수집. 점유 사진·관리비·전기수도 자료·임차권등기 결정문·임대인 내용증명·통화 녹취.</li>\n<li><strong>3단계 — 재청구 또는 보완 신청 (30일 내)</strong> — HUG 재청구 또는 보완 자료 제출. 결과 통보 1~2개월.</li>\n<li><strong>4단계 — 이의신청 + 금감원 분쟁조정 (재거절 시)</strong> — HUG 이의신청. 동시 금감원 분쟁조정(1332). 90일 결정 영역.</li>\n<li><strong>5단계 — 민사 보증금 청구 소송 (분조 실패 시)</strong> — HUG + 임대인 공동 피고. 보증약관 + 보증금 반환 + 지연이자. 6~12개월 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">HUG 거절 4단계 통과 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 점유 자료 + 임대인 이행 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·보증보험 가입증</strong> — HUG 신청 기초.</li>\n<li><strong>전입신고·확정일자·임차권등기 결정문</strong> — 우선변제권 자료.</li>\n<li><strong>점유 입증 자료</strong> — 거주 사진·관리비 영수증·전기수도 명세·우편물 수령 자료.</li>\n<li><strong>임대인 이행 거부 정황</strong> — 내용증명·통화 녹취·문자·이메일.</li>\n<li><strong>임차인 과실 부재 자료</strong> — 본인 의무 이행(임대료 납입·관리비)·연락 시도.</li>\n<li><strong>HUG 거절 통보서</strong> — 사유 분석 기초.</li>\n<li><strong>이의신청서·금감원 분조 자료</strong> — 다음 단계.</li>\n<li><strong>임대인 재산·부동산 자료</strong> — 자력 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: HUG 거절 사유가 \'점유 부족\'이라면 거주 사진·관리비·전기수도·우편물 4가지 자료가 가장 강력. \'임대인 이행 거부 정황 부족\'이라면 내용증명 + 통화 녹취가 핵심. 사유에 맞는 보강이 통과 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG 자주 거절 사유와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"점유 자료 부족" 거절 보강</strong> — 거주 사진·관리비·전기수도·우편물 4가지. 짧은 거주여도 자료 충분.</li>\n<li><strong>"임차권등기 미등재" 거절 보강</strong> — 임차권등기명령 신청 + 결정문 + 등기부 표기 확인.</li>\n<li><strong>"임대인 이행 거부 정황 부족" 거절 보강</strong> — 내용증명 3회 이상 + 통화 녹취 + 문자.</li>\n<li><strong>"임차인 과실 의심" 거절 반박</strong> — 임대료·관리비 납입 자료 + 본인 연락 시도 자료. 변호인 자문.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>HUG 1670-9009</strong> — 보증보험 사고 신고·재청구.</li>\n<li><strong>금감원 1332</strong> — 보험 분쟁조정.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세 피해 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 임대차·소송 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기로 인한 대항력·우선변제권의 시점',
        summary:
          '대법원 2024다326398 사건(대법원, 2025.04.15 선고)에서 법원은 주택 임차인이 전입신고와 주택 인도로 대항력을 취득했더라도 그 후 점유를 상실하면 대항력은 소멸하고, 임차권등기를 마치면 등기 시점부터 \'동일성이 없는 새로운 대항력\'이 발생한다고 판시했습니다. 즉 임차권등기 결정문 + 등기부 표기는 HUG 청구 핵심 자료이고, 점유를 상실했더라도 등기 시점 기준 우선변제권이 유지되는 영역. HUG 거절 사유가 \'점유 부족\'이라도 임차권등기 시점 자료 + 거주 사진·관리비 보강으로 통과 가능 영역이라는 시사점이 있습니다.',
        takeaway: 'HUG 보증보험 청구 거절은 점유·임차권등기·임대인 이행 정황 자료 보강 + 재청구·이의·소송 4단계 트랙이 모두 열린 영역이라, 거절 사유 분석부터 단계별로 정리하면 통과 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: 'HUG 거절되면 보증보험 무용지물인가요?',
        answer:
          '<strong>아닙니다.</strong> 자료 보강 후 재청구 + 이의신청 + 금감원 분조 + 민사 소송 4단계 트랙. 거절 사유 분석이 첫 단계.',
      },
      {
        question: '재청구는 몇 번 가능한가요?',
        answer:
          '<strong>제한 명시 없습니다.</strong> 자료 보강 + 사유 보완 후 재청구. 다만 이의신청·금감원 분쟁조정 동시 진행이 효율적 영역.',
      },
      {
        question: '금감원 분쟁조정은 강제력 있나요?',
        answer:
          '<strong>당사자 동의 시 효력 발생 영역입니다.</strong> 동의 거부 시 민사 소송. 다만 분조 결과는 소송에서 강한 정황 자료.',
      },
      {
        question: '소송하면 얼마나 걸리나요?',
        answer:
          '<strong>1심 6~12개월 영역입니다.</strong> 항소 시 추가 6~12개월. 가집행 선고로 일부 회수 가능. 변호사 자문 권장.',
      },
      {
        question: '임차인 과실로 거절됐는데 어떻게 반박하나요?',
        answer:
          '<strong>임대료·관리비 납입 자료 + 본인 연락 시도 자료가 핵심입니다.</strong> 본인 의무 이행 입증 + 임대인 측 정황 자료 결합. 변호인 자문.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증보험 청구 체크리스트', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '보증보험 가입 가이드', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '임차권등기 후 미반환', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '임차권등기 신청 절차', href: '/guide/jeonse/lease-registration-order-process' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 6. stalking / stalking-supervisor-employer-vicarious-liability-occupational-safety-track ───
  {
    domain: 'stalking',
    slug: 'stalking-supervisor-employer-vicarious-liability-occupational-safety-track',
    keyword: '직장 상사 스토킹 회사 사용자책임',
    questionKeyword: '회사 상사가 본인을 스토킹해요. 가해자 처벌 외에 회사 책임도 물을 수 있나요?',
    ctaKeyword: '직장 상사 스토킹 회사 책임 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 상사 스토킹 — 4단계 회사 책임 결합 트랙 | 로앤가이드',
      description:
        '직장 상사로부터 스토킹 피해를 받는 직장인이 가해자 형사 외에 회사 사용자책임·산안법·인권위 4단계 결합 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부서 팀장이 본인에게 \'한 번 만나달라\'며 카톡·전화·퇴근길 미행을 반복해요. 스토킹처벌법으로 신고하려는데, 회사가 \'개인 간 문제\'라며 방관해요. 회사 책임도 물을 수 있나요?" 직장 상사 스토킹은 가해자 형사 트랙 외에 ① 회사 사용자책임(민법 제756조) ② 산업안전보건법 직장 내 괴롭힘(제76조의2) ③ 국가인권위·노동위 진정 ④ 민사 손해배상·위자료 4단계 결합 트랙으로 정리되는 영역입니다. 대법원 2025도36 판결은 객관적·일반적으로 불안감 충분 정도면 피해자 인식과 무관 스토킹 영역이라고 판시. 상사 위치 활용한 반복 접촉은 \'직무 관련성\' 정황이 인정되어 사용자책임 영역. 회사가 \'알았거나 알 수 있었음\'에도 방관했다면 사용자책임 + 직장 내 괴롭힘 책임 결합. 형사 + 민사 + 행정 3트랙으로 회사 차원 책임을 묻는 강한 보호가 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 직장 상사 스토킹 4가지 회사 책임 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용자책임·산안법·인권위·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 회사 사용자책임 (민법 제756조)</strong> — 상사가 직무 위치 활용해 스토킹 시 회사 사용자책임. \'직무 관련성\' + \'회사 인지·방관\' 정황. 위자료 + 손해배상 영역.</li>\n<li><strong>② 산업안전보건법 직장 내 괴롭힘 (제76조의2)</strong> — 상사 우월적 지위 + 반복 위협 = 직장 내 괴롭힘. 사업주 조사·조치 의무. 위반 시 1천만원 이하 과태료.</li>\n<li><strong>③ 국가인권위·노동위 진정</strong> — 인권위(1331) 성차별·괴롭힘 진정 + 노동위 부당 처우 구제. 사용자 측 시정 명령 영역.</li>\n<li><strong>④ 민사 손해배상·위자료</strong> — 가해자 + 회사 공동 피고. 위자료 1,000~5,000만원 영역(피해 정도·회사 방관 종합).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직장 상사 스토킹은 가해자 형사 + 회사 책임 결합 영역. 회사 \'인지·방관\' 정황 + \'직무 관련성\'이 사용자책임 핵심. 형사·산안법·인권위·민사 4트랙 동시 진행 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 회사 신고 → 형사·산안법 → 인권위 → 민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 카톡·전화·미행·CCTV·증인. \'직무 관련성\' 정황(업무 시간·회사 내·업무 빙자 접촉).</li>\n<li><strong>2단계 — 회사 신고 + 조사 요구</strong> — 인사팀·고충처리위에 정식 신고. 산안법 제76조의2 사업주 조사 의무. 회사 방관 시 사용자책임 정황 강화.</li>\n<li><strong>3단계 — 형사 신고 + 잠정조치 (즉시 병행)</strong> — 112 또는 ecrm.police.go.kr. 잠정조치 1·2·3호 청구. 신변보호 결합.</li>\n<li><strong>4단계 — 인권위·노동위 진정</strong> — 인권위 1331(성차별·괴롭힘) + 노동위 부당 처우. 시정 명령 트랙.</li>\n<li><strong>5단계 — 민사 손해배상 (가해자 + 회사 공동 피고)</strong> — 위자료 1,000~5,000만원 영역. 회사 사용자책임 + 산안법 위반 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 상사 스토킹 4단계 회사 책임 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자 자료 + 회사 방관 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>가해자 연락 자료</strong> — 카톡·전화·이메일·SNS DM.</li>\n<li><strong>물리적 접근 자료</strong> — 사무실 내·퇴근길·CCTV·증인.</li>\n<li><strong>직무 관련성 정황</strong> — 업무 시간·회사 내·업무 빙자 접촉.</li>\n<li><strong>회사 신고 자료</strong> — 인사팀·고충처리위 신고 영수증·녹취.</li>\n<li><strong>회사 방관·인지 정황</strong> — 다른 직원 증언·이메일·면담 거부.</li>\n<li><strong>본인 거부 의사 표명 자료</strong> — 명시적·반복 표명.</li>\n<li><strong>본인 정신과·진단서·휴직 자료</strong> — 피해 자료.</li>\n<li><strong>경찰 신고 사건번호·잠정조치</strong> — 형사 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 신고 후 인사팀이 제대로 조사·조치 안 하면 \'회사 방관\' 정황 자료. 신고 일자·인사팀 회신·다른 직원 증언이 사용자책임 핵심 자료. 면담 녹취 + 이메일 보존 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사·가해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>회사 "개인 간 문제" 주장 반박</strong> — 직무 관련성 + 회사 인지 + 방관이면 사용자책임. 산안법 제76조의2 사업주 조사 의무.</li>\n<li><strong>"가해자 직무 외 행위" 주장 부분 반박</strong> — 업무 시간·회사 내·업무 빙자 접촉이면 직무 관련성. 사용자책임 영역.</li>\n<li><strong>"피해자 거부 의사 부족" 주장 반박</strong> — 객관적·일반적 위협 정도면 본인 거부 의사·인식 무관(2025도36).</li>\n<li><strong>"가해자 합의 시 회사 책임 면제" 주장 반박</strong> — 가해자 합의 + 회사 사용자책임 별개. 회사 책임은 별도 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>112 신고 + 신변보호심사위원회</strong></li>\n<li><strong>국가인권위 1331</strong> — 성차별·괴롭힘 진정.</li>\n<li><strong>노동위 부당 처우 구제 (1350)</strong></li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹행위 성립의 객관적·일반적 기준',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹범죄처벌법 제2조 제1호 각 목의 행위가 \'객관적·일반적으로 볼 때 이를 인식한 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도\'라고 평가될 수 있다면 현실적으로 상대방이 불안감·공포심을 갖게 되었는지와 관계없이 스토킹행위에 해당한다고 판시했습니다. 직장 상사가 우월적 지위를 활용해 반복 접촉한 경우는 객관적 위협 정도가 강하게 평가되는 영역이고, 회사가 \'알았거나 알 수 있었음\'에도 조치 안 하면 사용자책임 + 산안법 직장 내 괴롭힘 책임이 결합되는 영역이라는 시사점이 있습니다.',
        takeaway: '직장 상사 스토킹은 가해자 형사 + 회사 사용자책임 + 산안법 + 인권위 + 민사 4단계 결합 트랙 영역이라, 직무 관련성 + 회사 인지·방관 자료를 정리하면 강한 보호가 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "개인 간 문제"라며 방관하면 어떻게 하나요?',
        answer:
          '<strong>방관 자체가 사용자책임 정황입니다.</strong> 산안법 제76조의2 조사 의무 위반. 인사팀 신고 자료 + 다른 직원 증언 정리.',
      },
      {
        question: '가해자랑 합의하면 회사 책임도 끝인가요?',
        answer:
          '<strong>아닙니다.</strong> 가해자 합의 + 회사 사용자책임 별개. 회사 책임은 별도 청구. 합의서에 \'회사 책임 면제\' 명시 금지.',
      },
      {
        question: '신고했다고 회사에서 불이익 받으면?',
        answer:
          '<strong>부당 처우 구제 영역입니다.</strong> 노동위 1350 부당해고·전보 구제 + 인권위 진정. 보복성 인사 발령은 위법.',
      },
      {
        question: '잠정조치 받으면 회사 다닐 수 있나요?',
        answer:
          '<strong>가해자에게 100m 접근금지(2호)가 적용 영역입니다.</strong> 회사가 가해자 부서 분리 + 출입 제한 의무. 협조 안 하면 산안법 위반.',
      },
      {
        question: '위자료는 얼마 받을 수 있나요?',
        answer:
          '<strong>위자료 1,000~5,000만원 영역이 일반적입니다.</strong> 가해자·회사 공동. 피해 정도·회사 방관·휴직·이직 자료 종합.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '직장 동료 스토킹 형사', href: '/guide/stalking/stalking-workplace-coworker-criminal' },
      { label: '직장 상사 보고 트랙', href: '/guide/stalking/stalking-workplace-supervisor-report' },
      { label: '직장 내 괴롭힘 결합', href: '/guide/stalking/stalking-workplace-harassment-stalking' },
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '신변보호 즉시 대응', href: '/guide/stalking/stalking-immediate-response' },
    ],
  },

  // ─── 7. stalking / stalking-visitation-rights-pretext-recontact-family-vs-criminal-track ───
  {
    domain: 'stalking',
    slug: 'stalking-visitation-rights-pretext-recontact-family-vs-criminal-track',
    keyword: '면접교섭권 빌미 재접촉 스토킹 분기',
    questionKeyword: '이혼한 전 배우자가 자녀 면접교섭권 빌미로 본인에게 계속 연락해요. 스토킹 신고 가능한가요?',
    ctaKeyword: '면접교섭 빌미 재접촉 분기 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '면접교섭 빌미 재접촉 — 4단계 가사·형사 분기 트랙 | 로앤가이드',
      description:
        '이혼 후 전 배우자가 면접교섭권 빌미로 재접촉을 반복한다면 가사사건(면접교섭 변경·정지)·형사(스토킹) 4단계 분기 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼한 지 1년 됐는데 전 남편이 면접교섭권 빌미로 계속 연락하고 본인 집 앞에 와요. \'아이 학원 정보\' \'아이 옷 전달\' 같은 핑계로 카톡·전화·방문이 반복돼요. 스토킹으로 신고 가능한가요? 자녀 면접교섭권은 어떻게 되나요?" 면접교섭권 빌미 재접촉은 ① 가사사건 트랙(면접교섭 변경·정지) ② 형사 스토킹처벌법 트랙 ③ 민사 접근금지가처분 ④ 자녀 복리 보호 트랙 4단계로 분기되는 영역입니다. 대법원 2025도36 판결은 객관적·일반적으로 불안감 충분 정도면 피해자 인식 무관 스토킹 영역이라고 판시. 면접교섭권은 자녀 권리이지만 \'면접교섭 명목으로 본인 직접 접촉\'은 별개 영역. 가정법원에 면접교섭 변경·정지 신청 + 형사 스토킹 신고 + 자녀 인도 방식 변경(제3자 동행·중립 장소) 결합 트랙으로 자녀 권리 + 본인 보호 동시에 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 면접교섭 빌미 재접촉 4가지 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 가사·형사·민사·자녀 보호 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가사사건 트랙 (면접교섭 변경·정지)</strong> — 가정법원에 면접교섭 변경(제3자 동행·중립 장소) 또는 일시 정지 신청. 자녀 복리 + 본인 보호. 기존 결정 변경 영역.</li>\n<li><strong>② 형사 스토킹처벌법 트랙</strong> — \'면접교섭 명목 + 본인 직접 접촉\'은 별개. 객관적·일반적 위협 정도면 스토킹 영역(2025도36). 잠정조치 1·2·3호 청구.</li>\n<li><strong>③ 민사 접근금지가처분</strong> — 본인 주거·직장 100m 접근금지. 자녀 인도 방식 명시(제3자·중립 장소). 1~2주 결정 영역.</li>\n<li><strong>④ 자녀 복리 보호</strong> — 자녀 의사 + 면접교섭 적정 방식 결정. 자녀 보호 + 본인 보호 동시. 가정법원 가사조사관 자문.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면접교섭권은 자녀 권리이지만 \'본인 직접 접촉\' 빌미면 별개 영역. 가사 트랙으로 면접교섭 방식 변경 + 형사 트랙으로 본인 보호 결합. 자녀 복리 + 본인 안전 동시 보호.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 가사 신청 → 형사 신고 → 가처분 → 자녀 보호 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 카톡·전화·방문 자료 + \'면접교섭 명목\' 정황 + 본인 거부 의사 자료. 자녀 직접 관련 vs 본인 접촉 분리.</li>\n<li><strong>2단계 — 가사 면접교섭 변경·정지 신청 (1~4주)</strong> — 가정법원 신청. 제3자 동행·중립 장소·시간 제한 변경 또는 일시 정지. 자녀 의사 청취.</li>\n<li><strong>3단계 — 형사 스토킹 신고 (즉시 병행)</strong> — 112 또는 ecrm.police.go.kr. 잠정조치 1·2·3호 청구.</li>\n<li><strong>4단계 — 민사 접근금지가처분 (1~2주)</strong> — 가사 결정 전 빠른 보호. 본인 주거·직장 100m + 자녀 인도 방식 명시.</li>\n<li><strong>5단계 — 자녀 복리 보호 + 가사조사관 자문</strong> — 자녀 의사·심리 평가. 면접교섭 방식 최종 결정. 본인 + 자녀 동시 보호.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">면접교섭 빌미 재접촉 4가지 가사·형사 분기 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 접촉 자료 + 자녀 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>이혼 판결문·면접교섭 결정문</strong> — 기존 면접교섭 방식 자료.</li>\n<li><strong>가해자 연락 자료</strong> — 카톡·전화·방문·이메일.</li>\n<li><strong>면접교섭 명목 정황</strong> — \'학원 정보\' \'옷 전달\' 등 빙자.</li>\n<li><strong>본인 거부 의사 표명 자료</strong> — 명시적·반복.</li>\n<li><strong>자녀 직접 관련 vs 본인 접촉 분리 자료</strong> — 분기 핵심.</li>\n<li><strong>자녀 의사·심리 자료</strong> — 면접교섭 적정성 평가.</li>\n<li><strong>본인 정신과·진단서</strong> — 피해 자료.</li>\n<li><strong>경찰 신고·잠정조치 자료</strong> — 형사 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'자녀 관련 정보 전달\'은 SNS·이메일·중립 메신저(앱) 통한 방식으로 변경하면 본인 직접 접촉 차단. 가정법원에 면접교섭 변경 신청 시 제3자(중간 가족·시설) 동행 명시 권장. 자녀 복리 + 본인 안전 동시 보호.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"면접교섭권은 부모 권리" 주장 부분 반박</strong> — 면접교섭은 자녀 권리. 부모는 행사자. 자녀 복리 + 본인 보호 우선이면 변경·정지 영역.</li>\n<li><strong>"본인이 자녀 통해 정보 받는 게 정당" 주장 반박</strong> — 자녀 통해 본인 직접 접촉은 별개. 중립 메신저·이메일 영역.</li>\n<li><strong>"피해자 인식 부족" 주장 반박</strong> — 객관적·일반적 위협 정도면 인식 무관(2025도36).</li>\n<li><strong>가사 + 형사 결합 권장</strong> — 가사로 면접교섭 방식 변경 + 형사로 본인 보호. 자녀 복리 + 본인 안전 동시.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>112 신고 + 신변보호심사위원회</strong></li>\n<li><strong>가정법원 가사조사관·종합민원실</strong> — 면접교섭 변경 자문.</li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담.</li>\n<li><strong>한국여성의전화 02-2263-6464</strong> — 스토킹 피해 지원.</li>\n<li><strong>대한법률구조공단 132</strong> — 가사·형사 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹행위 성립의 객관적·일반적 기준과 피해자 인식',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹범죄처벌법 제2조 제1호 각 목의 행위가 \'객관적·일반적으로 볼 때 이를 인식한 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도\'라고 평가될 수 있다면 현실적으로 상대방이 불안감·공포심을 갖게 되었는지와 관계없이 스토킹행위에 해당한다고 판시했습니다. 면접교섭권은 자녀의 권리이지만 \'면접교섭 명목으로 본인에게 직접 접촉\'한 행위는 별개로 평가되는 영역이고, 객관적 위협 정도가 충분하면 스토킹 영역이라는 시사점이 있습니다. 가사 + 형사 결합 트랙으로 자녀 복리 + 본인 보호 동시에 가능한 영역.',
        takeaway: '면접교섭 빌미 재접촉은 가사 면접교섭 변경·정지 + 형사 스토킹 + 민사 가처분 + 자녀 복리 보호 4단계 결합 트랙 영역이라, 본인 직접 접촉 vs 자녀 관련 분리 자료를 정리하면 양쪽 보호가 모두 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '면접교섭권은 부모 권리 아닌가요?',
        answer:
          '<strong>면접교섭은 자녀 권리이고 부모는 행사자 영역입니다.</strong> 자녀 복리 + 본인 보호 우선이면 변경·정지. 가정법원 신청.',
      },
      {
        question: '면접교섭 정지하면 자녀가 부모를 못 보나요?',
        answer:
          '<strong>방식 변경(제3자 동행·중립 장소·메신저)이 우선 영역입니다.</strong> 일시 정지는 위협 정도 심각할 때. 자녀 복리 평가.',
      },
      {
        question: '카톡으로 자녀 관련 연락은 받아야 하나요?',
        answer:
          '<strong>중립 메신저·이메일·제3자 통한 방식으로 변경 가능 영역입니다.</strong> 가정법원에 방식 변경 신청. 본인 직접 접촉 차단.',
      },
      {
        question: '잠정조치 받으면 면접교섭은 어떻게 되나요?',
        answer:
          '<strong>가정법원 변경 결정과 결합 영역입니다.</strong> 본인 직접 접촉 차단 + 자녀 인도는 제3자·중립 장소. 두 결정 결합.',
      },
      {
        question: '이혼 시 받은 면접교섭 결정 변경 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 사정 변경(스토킹 + 위협 + 자녀 의사) 시 가정법원에 변경 신청. 자녀 복리 + 본인 보호 우선.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '전 배우자 양육 분쟁 빌미', href: '/guide/stalking/stalking-ex-spouse-custody-dispute-pretext' },
      { label: '결별 후 재접촉 형사', href: '/guide/stalking/stalking-ex-partner-message-criminal' },
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '피해자 신고 후 접근금지', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '신변보호 즉시 대응', href: '/guide/stalking/stalking-immediate-response' },
    ],
  },
];
