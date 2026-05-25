import { SpokePage } from '../spoke-pages';

// batch77 defamation + jeonse-fraud — 6개 (2026-05-25) = 3+3
//
// 고유 존재 이유:
// defamation 3:
// 1. 악성 후기 자영업자 명예훼손 — '자영업자 + 허위·악성 리뷰 + 공연성·업무방해 병행' 트랙 (victim)
// 2. 직장 내 소문 유포 명예훼손 — '직장 허위 소문 + 전파가능성 인식 + 공연성 평가' 트랙 (victim)
// 3. 전 연인 SNS 폭로글 명예훼손 — '사실적시·공익 항변 + 혐의를 받는 입장 방어' 트랙 (accused)
//
// jeonse-fraud 3:
// 4. 다가구 갭투자 깡통전세 — '다가구 + 갭투자 집주인 + 시세 하락 + 대항력 유지 핵심' 트랙 (victim)
// 5. 집주인 사칭 신분증 위조 — '신원 위조 + 가짜 임대인 + 소멸시효 유지·회수' 트랙 (victim)
// 6. 선순위 근저당 은폐 — '중개사 설명의무 위반 + 공동저당·경매 배당 후순위 위험' 트랙 (victim)

export const spokesBatch77DefameJeonseFraud: SpokePage[] = [
  // ─── 1. defamation-malicious-store-review-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-malicious-store-review-track',
    keyword: '악성 후기 자영업자 명예훼손',
    questionKeyword: '음식점·가게를 운영하는데 특정 고객이 허위사실로 악성 리뷰를 반복 게시해 매출과 평판에 타격을 받고 있어요. 명예훼손으로 대응할 수 있나요?',
    ctaKeyword: '악성 후기 자영업자 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '악성 후기 자영업자 명예훼손 — 5단계 대응 점검 | 로앤가이드',
      description:
        '고객의 허위 악성 리뷰가 반복 게시돼 매출·평판에 타격을 받는 자영업자라면 정보통신망법·형법 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 넘게 운영해온 가게에 특정 고객이 포털 지도·배달앱 리뷰란에 \'음식에 이물질이 들어 있었다·직원이 욕설했다\'는 식의 허위사실을 사진까지 조작해 반복 게시했습니다. 한 달 사이 별점이 4.8에서 3.1로 떨어졌고, 리뷰를 보고 취소하는 손님이 줄을 잇는다는 걸 간접적으로 확인했어요. 작성자는 다른 아이디로 번갈아 리뷰를 올리고 있어 누구인지 특정하기 어렵습니다." 정보통신망법 제70조는 \'정보통신망을 통한 비방 목적의 허위사실 적시 명예훼손\'을 규정하고, 형법 제307조는 \'공연히 허위사실을 적시해 명예를 훼손한 행위\'를, 형법 제314조는 \'허위사실 유포로 인한 업무방해\'를 규정합니다. 허위 리뷰 반복 + 다수 열람 + 사업상 손해 결합은 명예훼손·업무방해 두 트랙을 함께 검토할 수 있는 영역. 피해자라면 ① 리뷰 보존 ② 플랫폼 신고 ③ 작성자 특정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 악성 후기 자영업자 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·특정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 리뷰 보존</strong> — 리뷰 캡처·URL·작성 시각·별점 변동 통계 보존.</li>\n<li><strong>② 플랫폼 신고·임시조치</strong> — 포털·배달앱 허위사실 신고 + 권리침해 삭제 요청.</li>\n<li><strong>③ 작성자 특정</strong> — 다계정 정황 정리 + 수사기관 통한 IP·가입정보 확인 검토.</li>\n<li><strong>④ 형사 고소</strong> — 정보통신망법 제70조·형법 제307조·제314조 업무방해 검토.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 매출 손해·위자료 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 리뷰 플랫폼은 불특정 다수가 열람하는 공간이라 \'공연성\' 평가가 가능한 영역. 허위사실 + 반복 게시 + 별점 조작 결합이 명예훼손·업무방해 두 트랙을 모두 검토할 수 있는 자료가 될 수 있습니다. 삭제 전 원본 캡처 보존이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰·별점 즉시 보존 (인지 당일)</strong> — 캡처·URL·작성 시각·별점 변동·다계정 목록.</li>\n<li><strong>2단계 — 플랫폼 허위사실 신고 + 삭제 요청 (1주 내)</strong> — 포털·배달앱 권리침해 신고 양식 활용.</li>\n<li><strong>3단계 — 방송통신심의위원회 심의 신청 (병행)</strong> — 반복·악성 리뷰 삭제·차단 검토.</li>\n<li><strong>4단계 — 경찰 고소 + 작성자 특정 (1개월 내)</strong> — 정보통신망법·업무방해 병행 고소, IP·계정 확인 검토.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 매출 손해·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">악성 후기 자영업자 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·허위 반박·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>리뷰 캡처 (URL·작성 시각·별점·다계정 목록 포함)</strong></li>\n<li><strong>허위사실 반박 자료 (식약처 위생검사 통과·CCTV 직원 언행 증빙 등)</strong></li>\n<li><strong>별점 변동·예약 취소 통계 자료</strong></li>\n<li><strong>플랫폼 신고 접수·처리 결과 캡처</strong></li>\n<li><strong>매출 감소 증빙 (전후 비교 영수증·배달앱 매출 통계)</strong></li>\n<li><strong>작성자 계정 활동 이력·연관 계정 정황</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배달앱·포털 관리자 페이지의 매출·주문 추이 데이터를 리뷰 게시 전후로 비교해 캡처해두면 업무방해 손해 입증에 도움이 되는 자료. 리뷰가 삭제되기 전 전체 화면(URL·시각 포함) 캡처가 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위 vs 과장 의견</strong> — 단순 주관적 불만인지 허위사실 적시인지 평가.</li>\n<li><strong>공연성</strong> — 리뷰 플랫폼은 불특정 다수 열람으로 공연성 평가가 가능한 영역.</li>\n<li><strong>비방 목적</strong> — 반복·다계정 정황이 비방 목적 평가 자료.</li>\n<li><strong>업무방해 인과관계</strong> — 리뷰와 매출 감소의 인과관계 입증이 핵심.</li>\n<li><strong>작성자 특정</strong> — 다계정 익명 작성은 수사기관 통한 확인 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>한국인터넷진흥원 개인정보침해 신고 118</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예훼손죄 공연성 판단 기준 평가 영역',
        summary:
          '대법원 2020도5813(대법원, 2020.11.19 선고) 영역에서 법원은 명예훼손죄의 공연성은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하며 전파가능성 이론을 유지해야 한다고 판시했습니다. 리뷰 플랫폼은 불특정 다수가 열람하는 공간이라 공연성 요건 평가가 가능한 트랙으로 검토할 수 있습니다.',
        takeaway: '리뷰 플랫폼 허위사실 게시는 공연성 평가가 가능한 영역 — 원본 보존 + 허위 반박 자료 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '\'맛이 없어요\' 같은 주관적 후기도 명예훼손이 되나요?',
        answer:
          '<strong>단순 주관적 불만 표현은 사실 적시가 아닐 수 있어 평가가 달라지는 영역입니다.</strong> 허위사실 단정 여부가 관건.',
      },
      {
        question: '리뷰 작성자가 다른 아이디를 써도 처벌할 수 있나요?',
        answer:
          '<strong>다계정 동일인 정황은 수사기관 통한 IP 확인 검토 영역입니다.</strong> 계정 연관성 정황 정리가 핵심.',
      },
      {
        question: '업무방해와 명예훼손을 함께 고소할 수 있나요?',
        answer:
          '<strong>허위사실 유포로 인한 업무방해도 병행 고소 검토가 가능한 영역입니다.</strong> 매출 손해 자료 준비가 중요.',
      },
      {
        question: '플랫폼에 삭제 요청하면 리뷰가 바로 지워지나요?',
        answer:
          '<strong>권리침해 신고 시 임시조치·검토 절차가 진행되는 영역입니다.</strong> 삭제 전 원본 캡처가 우선.',
      },
      {
        question: '별점 1점이 여러 개 달리면 민사로도 청구할 수 있나요?',
        answer:
          '<strong>매출 손해와의 인과관계를 정리하면 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 통계 자료가 결정 자료.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 고소 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 2. defamation-workplace-rumor-spread-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-rumor-spread-track',
    keyword: '직장 내 소문 유포 명예훼손',
    questionKeyword: '직장 동료가 저에 대한 허위 소문을 여러 동료에게 퍼뜨렸고, 회사 내에서 제 평판이 크게 손상됐어요. 명예훼손으로 대응할 수 있나요?',
    ctaKeyword: '직장 허위 소문 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 내 소문 유포 명예훼손 — 5단계 대응 점검 | 로앤가이드',
      description:
        '직장 동료가 허위 소문을 여러 동료에게 퍼뜨려 평판이 손상됐다면 형법 제307조 공연성·전파가능성 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장 동료 한 명이 본인이 \'부당하게 성과를 가로챘다·상사와 부적절한 관계다\'는 허위 소문을 다른 팀 동료 5~6명에게 개인적으로 전달했습니다. 한 사람씩 직접 이야기하는 방식이었지만 순식간에 소문이 팀 전체로 퍼졌고, 평가 시즌을 앞두고 동료들이 본인을 이상하게 보기 시작했어요. 소문을 퍼뜨린 동료는 \'사적으로 얘기한 것 뿐\'이라고 주장하고 있습니다." 형법 제307조는 \'공연히 사실 또는 허위사실을 적시해 명예를 훼손한 행위\'를 명예훼손으로 규정하고, 개별적으로 한 사람에게 전달했더라도 그로부터 다수에게 전파될 가능성이 있으면 공연성이 인정될 수 있는 영역으로 평가됩니다. 직장 내 소문 + 여러 동료 전파 + 직업적 신뢰 훼손 결합은 \'전파가능성 이론\'에 따른 공연성 평가가 가능한 트랙. 피해자라면 ① 소문 경위 확인 ② 증거 확보 ③ 사내 고충처리 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 내 소문 유포 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위확인·증거·고충처리·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 소문 경위·내용 확인</strong> — 누가 누구에게 어떤 내용을 언제 전달했는지 정리.</li>\n<li><strong>② 증거 확보</strong> — 직접 들은 동료 진술·메시지·메모 보존.</li>\n<li><strong>③ 사내 고충처리</strong> — 인사부서·고충처리위원회 신고 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제307조 허위사실 명예훼손 검토.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 인사·승진 불이익·위자료 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개인 간 대화라도 전파가능성이 인정되면 공연성 평가가 가능한 영역. 직장이라는 밀집 공간에서의 소문은 전파가능성이 높아 명예훼손 평가가 가능한 트랙으로 검토할 수 있습니다. 소문을 직접 들은 동료의 진술이 핵심 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·보존·고충·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 소문 경위·내용 즉시 정리 (인지 당일)</strong> — 전달 상대·내용·시기·전파 경로 메모.</li>\n<li><strong>2단계 — 증인 진술·메시지 보존 (1주 내)</strong> — 소문을 직접 들은 동료 확인 + 관련 메시지.</li>\n<li><strong>3단계 — 사내 고충처리 신고 (2주 내)</strong> — 인사부서·고충위 + 회사 자체 조치 요청.</li>\n<li><strong>4단계 — 경찰 고소 (1개월 내)</strong> — 형법 제307조 허위사실 명예훼손 + 작성자 소명.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 인사 불이익·위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 내 소문 유포 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 전파경위·허위반박·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>소문 내용·전달 경위 정리 메모 (시기·상대·장소)</strong></li>\n<li><strong>소문을 직접 들은 동료 진술·확인 자료</strong></li>\n<li><strong>허위사실 반박 자료 (실제 성과 증빙·관계 부인 정황)</strong></li>\n<li><strong>소문 유포자와의 메시지·대화 기록</strong></li>\n<li><strong>사내 고충처리 신고 접수·처리 결과</strong></li>\n<li><strong>인사 평가·승진 불이익 정황 자료</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소문을 들은 동료가 진술을 꺼리는 경우가 많으므로 문자·메신저로 내용을 확인해두면 증거 정리에 도움이 됩니다. 사내 고충처리는 형사 고소와 별도로 먼저 진행해 회사 차원의 인정 기록을 만들어두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성·전파가능성</strong> — 개별 전달이라도 전파 정황이 인정되면 공연성 평가 가능.</li>\n<li><strong>허위 vs 과장</strong> — 소문 내용이 허위사실인지 과장 표현인지 평가.</li>\n<li><strong>전파가능성 인식</strong> — 유포자의 전파 위험 인식·용인 여부.</li>\n<li><strong>피해 입증</strong> — 인사·승진 불이익과 소문 간 인과관계 자료.</li>\n<li><strong>사내 절차 병행</strong> — 고충처리·인사 조치와 형사·민사 트랙 선택.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고충처리 1350</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성 이론과 명예훼손죄 공연성 평가 영역',
        summary:
          '대법원 2004도340(대법원, 2004.04.09 선고) 영역에서 법원은 명예훼손죄의 공연성은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하며, 개별적으로 한 사람에게 전달하더라도 전파될 가능성이 있으면 공연성을 인정할 수 있다고 판시했습니다. 직장 내 소문 전달에도 전파가능성·고의 인식 여부가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '개별 전달도 전파가능성 인식 시 공연성 인정이 가능한 영역 — 경위·증인 진술 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '1:1로 전달한 소문도 명예훼손이 될 수 있나요?',
        answer:
          '<strong>전파가능성이 인정되면 공연성 평가가 가능한 영역입니다.</strong> 직장 환경의 전파 정황이 관건.',
      },
      {
        question: '소문이 사실에 가까운 내용이어도 명예훼손인가요?',
        answer:
          '<strong>사실 적시도 명예훼손 평가가 가능한 영역입니다.</strong> 공익성·표현 방식이 달라질 소지.',
      },
      {
        question: '회사 고충처리를 먼저 해야 하나요, 경찰에 고소해도 되나요?',
        answer:
          '<strong>두 트랙은 독립적으로 진행 가능한 영역입니다.</strong> 고충처리 기록이 형사 사건 자료로 도움이 될 수 있습니다.',
      },
      {
        question: '소문 때문에 인사 평가가 나빠지면 손해배상도 청구할 수 있나요?',
        answer:
          '<strong>인과관계 입증이 가능하면 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 평가 자료 보존이 핵심.',
      },
      {
        question: '동료가 소문을 퍼뜨렸다는 걸 증명하기 어려운데 어떻게 하나요?',
        answer:
          '<strong>소문을 들은 동료 진술이 핵심 자료 영역입니다.</strong> 메신저·문자 확인부터 시작하는 것이 좋습니다.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '직장 동료 명예훼손', href: '/guide/defamation/defamation-coworker-spread-victim' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '명예훼손 고소 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '직장 명예훼손 고소 준비', href: '/guide/defamation/defamation-workplace-rumor-complaint-prep' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 3. defamation-ex-partner-revenge-post-accused-track (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-ex-partner-revenge-post-accused-track',
    keyword: '전 연인 폭로글 명예훼손 혐의',
    questionKeyword: '전 연인과 헤어진 뒤 SNS에 교제 중 있었던 일을 폭로글로 올렸는데, 상대방이 명예훼손으로 고소했어요. 사실을 쓴 건데 방어가 가능한가요?',
    ctaKeyword: '전 연인 폭로글 명예훼손 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '전 연인 SNS 폭로글 명예훼손 — 5단계 방어 점검 | 로앤가이드',
      description:
        '전 연인 교제 내용을 SNS에 폭로글로 올렸다가 명예훼손 혐의를 받고 있다면 형법 제307조·제310조 사실적시·공익 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교제 중 상대방의 폭언·기망행위를 SNS에 공개해 비슷한 피해를 막고 싶었습니다. 사실에 기반한 경험을 작성했고 상대방 실명 대신 이니셜을 사용했지만, 주변 지인들이 누구인지 알아볼 수 있었고 결국 상대방이 명예훼손으로 고소했어요. 본인은 사실을 쓴 것이고 경고 목적이었다는 입장이지만, 불특정 다수가 볼 수 있는 SNS라는 점이 다툼이 되고 있습니다." 혐의를 받고 있다면 형법 제307조는 \'공연히 사실을 적시해 명예를 훼손한 행위\'도 명예훼손 영역으로 규정하지만, 같은 법 제310조는 \'적시 사실이 진실하고 오로지 공공의 이익을 위한 것\'이면 위법성이 조각될 수 있다고 규정합니다. SNS 공개 게시 + 이니셜이라도 특정 가능 + 사실 적시 결합은 \'공연성·특정 인정 vs 위법성 조각\' 평가가 갈리는 트랙. ① 사실 진실성 ② 공익성 ③ 특정 범위 ④ 변호인 의견서 ⑤ 합의 5중 트랙으로 방어를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전 연인 폭로글 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실성·공익성·특정범위·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 진실성</strong> — 게시 내용이 객관적 사실인지 증빙 정리.</li>\n<li><strong>② 공익성 평가</strong> — 경고·예방 목적인지 감정적 보복인지 평가.</li>\n<li><strong>③ 특정 범위 검토</strong> — 이니셜·묘사로 본인 식별이 어느 범위까지 가능한지.</li>\n<li><strong>④ 변호인 의견서</strong> — 형법 제310조 위법성 조각 항변 + 합리적 의심 항변.</li>\n<li><strong>⑤ 합의·삭제 검토</strong> — 게시물 삭제·사과·일부 합의 조합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실이라도 SNS 공개는 공연성이 인정될 수 있는 영역. 다만 \'진실 + 오로지 공익\' 결합 시 위법성 조각 항변이 가능한 트랙으로 검토할 수 있습니다. 감정적 표현·인신공격이 섞여 있으면 항변이 약해질 소지가 있으니 전체 내용 점검이 먼저입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·조사·삭제·합의 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·관련 증거 보존 (즉시)</strong> — 게시 전후 상대 행위·증빙·게시물 전체 내용.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 형법 제310조 위법성 조각 항변 + 진실성 증빙 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 공익 목적 소명·표현 절제 여부 진술.</li>\n<li><strong>4단계 — 게시물 삭제·정정 (필요 시)</strong> — 감정적 표현 부분 정리.</li>\n<li><strong>5단계 — 합의·민사 협의</strong> — 삭제·사과·일부 손해배상 조합 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전 연인 폭로글 명예훼손 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시물 전체 내용 보존 (삭제 전 캡처·URL)</strong></li>\n<li><strong>게시 내용의 객관 사실 증빙 (대화 기록·증인·정황)</strong></li>\n<li><strong>공익 목적 정황 자료 (유사 피해 경고 맥락)</strong></li>\n<li><strong>표현 절제 여부 검토 자료 (인신공격·감정어 부분)</strong></li>\n<li><strong>이니셜·묘사의 특정 가능 범위 분석</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·수사기관 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형사재판에서 유죄 인정은 합리적 의심이 없는 증명이 필요한 영역이므로, 사실 진실성 증빙이 충실할수록 방어에 유리한 트랙으로 검토될 수 있습니다. 게시물 전체 맥락과 공익 목적 자료를 함께 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 진실성</strong> — 게시 내용의 객관 증빙 충실성이 핵심.</li>\n<li><strong>공익성</strong> — 경고·예방 목적 vs 감정적 보복 평가.</li>\n<li><strong>특정 가능성</strong> — 이니셜·묘사로 본인 식별 범위.</li>\n<li><strong>표현 방식</strong> — 단정·인신공격 회피가 위법성 조각 항변에 유리.</li>\n<li><strong>합의 타이밍</strong> — 조사 단계 합의가 처분에 영향을 줄 수 있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시 명예훼손 합리적 의심·공익성 평가 영역',
        summary:
          '대법원 94도3309(대법원, 1996.04.12 선고) 영역에서 법원은 형사재판에서 유죄 인정은 합리적 의심의 여지 없는 증명이 필요하며, 적시 사실의 허위성을 근거 없이 추정해 명예훼손죄를 인정한 원심은 채증법칙 위배라고 판시했습니다. 사실 적시의 경우 진실성·공익성 항변 여지가 핵심 방어 트랙으로 검토될 수 있습니다.',
        takeaway: '사실 적시 명예훼손에서 진실성·공익성 항변이 가능한 영역 — 맥락 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 썼는데도 명예훼손이 될 수 있나요?',
        answer:
          '<strong>사실 적시도 공연성 인정 시 명예훼손 평가가 가능한 영역입니다.</strong> 진실 + 공익 결합 시 위법성 조각 항변.',
      },
      {
        question: '이니셜을 써도 특정이 된다고 볼 수 있나요?',
        answer:
          '<strong>주변 맥락으로 식별 가능하면 특정 평가가 가능한 영역입니다.</strong> 묘사·지인 범위 종합 판단.',
      },
      {
        question: '공익 목적이었다는 건 어떻게 소명하나요?',
        answer:
          '<strong>경고·예방 맥락 자료가 핵심 영역입니다.</strong> 보복·감정적 표현 배제 정황이 중요.',
      },
      {
        question: '게시물을 지금 삭제하는 게 나을까요?',
        answer:
          '<strong>변호인 자문 후 결정 영역입니다.</strong> 삭제가 합의에 도움이 되지만 전체 맥락 보존이 먼저.',
      },
      {
        question: '합의로 마무리할 수 있을까요?',
        answer:
          '<strong>증빙 충실도에 따라 합의 조건이 달라지는 영역입니다.</strong> 삭제·사과·일부 배상 조합 검토.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 피의자 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '공익 명예훼손 방어', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 4. jeonse-fraud-multi-house-gap-investment-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-multi-house-gap-investment-track',
    keyword: '다가구 갭투자 깡통전세',
    questionKeyword: '다가구 주택을 갭투자로 산 집주인이 집값이 빠지면서 보증금을 못 돌려주겠다는데, 같은 건물 다른 세입자들도 같은 상황이에요. 어떻게 해야 하나요?',
    ctaKeyword: '다가구 갭투자 깡통전세 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다가구 갭투자 깡통전세 보증금 — 5단계 회수 점검 | 로앤가이드',
      description:
        '다가구 갭투자 집주인이 집값 하락으로 보증금 반환을 거부해 여러 세입자가 피해를 입은 상황이라면 우선변제·피해자 결정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다가구 주택을 갭투자로 여러 채 매입한 집주인이 시세가 급락하자 \'돈이 없다·새 세입자를 못 구했다\'며 만기를 1개월 넘긴 지금도 보증금을 돌려주지 않고 있습니다. 같은 건물에 세입자가 8가구 있는데 모두 비슷한 상황이고, 집주인은 \'경매로 넘어가면 나도 어쩔 수 없다\'는 말만 반복하고 있어요. 전입신고는 됐지만 확정일자와 선순위 근저당이 어떻게 됐는지 불안합니다." 주택임대차보호법 제3조의2는 \'전입 + 확정일자를 갖춘 임차인은 후순위 권리자보다 우선변제를 받을 수 있다\'고 규정하고, 임차권등기명령 제도는 \'이사 후에도 대항력을 유지\'하도록 합니다. 다가구 갭투자 + 집값 하락 + 다수 피해자 결합은 우선변제 순위·공동 대응·피해자 결정 절차를 함께 검토해야 하는 트랙. 피해자라면 ① 권리 확인 ② 내용증명 ③ 임차권등기 ④ 보증·소송 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다가구 갭투자 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리확인·내용증명·임차권등기·보증소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리 확인</strong> — 전입·확정일자·점유·선순위 근저당 규모 점검.</li>\n<li><strong>② 내용증명 발송</strong> — 만기 보증금 반환 청구 + 이행 기한 통지.</li>\n<li><strong>③ 임차권등기명령</strong> — 이사 후에도 대항력·우선변제권 유지.</li>\n<li><strong>④ HUG 보증이행·반환소송</strong> — 가입 여부에 따라 분기.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 다수 피해 + 요건 충족 시 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다가구 갭투자는 여러 세입자의 보증금이 경매 배당 순위에 함께 얽히는 구조라 우선변제 순위와 선순위 근저당 규모를 먼저 파악하는 것이 핵심. 이사 전 임차권등기 완료가 권리 유지의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG·전세사기피해지원센터 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·선순위 근저당 자료 즉시 확보 (즉시)</strong> — 등기부·전입·확정일자·선순위 근저당 규모·전체 세입자 현황.</li>\n<li><strong>2단계 — 내용증명 발송 (1주 내)</strong> — 만기 보증금 반환 청구 + 기한 통지.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항력 유지.</li>\n<li><strong>4단계 — HUG 보증이행 청구 또는 반환소송 (만기 내)</strong> — 가입 여부에 따라 분기.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원·다수 공동 대응 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다가구 갭투자 깡통전세 보증금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·선순위·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>등기부등본 (선순위 근저당·다가구 세입자 현황)</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>인근 시세 비교 자료 (집값 하락 입증)</strong></li>\n<li><strong>집주인 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>HUG 보증 가입 여부 확인 자료</strong></li>\n<li><strong>임차권등기명령 신청 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다가구 갭투자는 건물 전체 세입자의 보증금 합계와 선순위 근저당 합계를 비교해두면 경매 시 배당 가능 범위를 가늠하는 데 도움이 됩니다. 같은 건물 세입자와 함께 공동 대응 여부를 상담해두는 것도 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 유지</strong> — 이사 전 임차권등기 미완료 시 우선변제권 흔들릴 소지.</li>\n<li><strong>선순위 근저당 규모</strong> — 경매 배당 시 회수 가능 범위가 달라질 수 있음.</li>\n<li><strong>다가구 세입자 배당 경합</strong> — 확정일자 순서에 따라 배당 순위 갈릴 수 있음.</li>\n<li><strong>HUG 보증 가입 여부</strong> — 가입 시 이행청구, 미가입 시 반환소송·강제집행 분기.</li>\n<li><strong>피해자 결정 요건</strong> — 다수 피해·갭투자 정황이 요건 충족에 도움이 될 수 있음.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권 대항력 유지 요건 평가 영역',
        summary:
          '대법원 2024다326398(대법원, 2025.04.15 선고) 영역에서 법원은 주택임대차보호법상 대항력을 유지하려면 전입·점유 요건이 계속 존속해야 하며, 점유를 상실하면 대항력이 소멸하고 이후 임차권등기를 마쳐도 소급하여 회복되지 않는다고 판시했습니다. 다가구 깡통전세에서 이사 전 임차권등기 완료 여부가 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '점유 상실 전 임차권등기 완료가 대항력 유지의 핵심 영역 — 이사 순서 주의 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '같은 건물 세입자들과 함께 대응하면 더 유리한가요?',
        answer:
          '<strong>공동 대응이 피해자 결정·경매 배당 정보 공유에 도움이 될 수 있는 영역입니다.</strong> 개별 권리 확인이 우선.',
      },
      {
        question: '확정일자를 받은 순서가 다른 세입자보다 늦으면 불리한가요?',
        answer:
          '<strong>확정일자 순서는 우선변제 순위에 영향을 줄 수 있는 영역입니다.</strong> 등기부 + 확정일자 자료 비교 우선.',
      },
      {
        question: '이사를 먼저 가면 보증금 권리가 사라지나요?',
        answer:
          '<strong>임차권등기 완료 후 이사해야 대항력이 유지되는 영역입니다.</strong> 이사 전 등기 완료가 우선.',
      },
      {
        question: '갭투자 집주인이라도 전세사기 피해자로 인정받을 수 있나요?',
        answer:
          '<strong>요건 충족 여부에 따라 신청을 검토할 수 있는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
      {
        question: 'HUG 보증에 가입 안 했으면 경매 외에 다른 방법이 없나요?',
        answer:
          '<strong>반환소송·강제집행 트랙을 검토하는 영역입니다.</strong> 집주인 재산 파악·가압류가 관건.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 신청서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '전세사기 민사 vs 형사', href: '/guide/jeonse-fraud/jeonse-fraud-civil-vs-criminal' },
    ],
  },

  // ─── 5. jeonse-fraud-landlord-impersonation-id-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-landlord-impersonation-id-track',
    keyword: '집주인 사칭 신분증 위조 전세사기',
    questionKeyword: '집주인을 사칭한 사람이 위조한 신분증으로 전세계약을 하고 보증금을 가로챘어요. 실제 소유자는 계약을 전혀 몰랐다고 하는데 어떻게 해야 하나요?',
    ctaKeyword: '집주인 사칭 신분증 위조 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '집주인 사칭 신분증 위조 전세사기 — 5단계 회수 점검 | 로앤가이드',
      description:
        '집주인을 사칭한 사람이 위조 신분증으로 전세계약을 맺고 보증금을 편취했다면 사기·공문서위조 형사 + 소멸시효 보전 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부동산을 통해 전세계약을 하면서 상대방이 소유자와 이름·사진이 일치하는 신분증을 제시해 별 의심 없이 보증금을 송금했습니다. 입주 후 실제 소유자에게 우편물이 오면서 연락했더니 \'집을 임대한 적이 없다·신분증을 잃어버린 적이 있다\'고 해, 가짜 신분증을 이용한 사칭 범행이었음을 뒤늦게 알게 됐어요. 사칭자는 이미 잠적한 상태입니다." 형법 제347조는 \'기망에 의한 재물 편취\'를 사기 영역으로, 형법 제225조는 \'공문서 위조\'를 규정하고, 주택임대차보호법은 \'전입·확정일자를 갖춘 임차인의 우선변제권\'을 보호합니다. 신분증 위조 + 집주인 사칭 + 보증금 편취 결합은 사기·공문서위조 형사 + 계약 효력·소멸시효 관리를 함께 검토해야 하는 트랙. 피해자라면 ① 계약 보존 ② 권리 확인 ③ 형사 고소 ④ 민사 청구 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 집주인 사칭 신분증 위조 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·권리·형사·민사·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·신분증 자료 보존</strong> — 계약서·위조 신분증 캡처·송금 영수증·대화 기록.</li>\n<li><strong>② 권리 확인</strong> — 전입·확정일자·점유로 대항력·우선변제권 점검.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제347조 사기 + 제225조 공문서위조 병행 검토.</li>\n<li><strong>④ 민사 청구</strong> — 소멸시효 관리 + 사칭자·관여자 재산 추적·가압류.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증금반환채권은 임차인이 동시이행항변권을 근거로 점유를 유지하는 동안 소멸시효가 진행하지 않는 영역으로 평가될 수 있습니다. 점유를 유지하면서 형사·민사를 병행하는 것이 권리 보전의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·신분증 자료 즉시 보존 (인지 당일)</strong> — 계약서·위조 신분증·송금 영수증·사칭자 연락처·대화 기록.</li>\n<li><strong>2단계 — 실소유자 확인 + 권리 점검 (1주 내)</strong> — 등기부·전입·확정일자·선순위 권리 비교.</li>\n<li><strong>3단계 — 경찰 고소 (1개월 내)</strong> — 사기·공문서위조 + 사칭자 신원·계좌 추적 검토.</li>\n<li><strong>4단계 — 민사 청구 + 소멸시효 관리 (소멸시효 10년)</strong> — 실소유자·중개사 책임 범위 점검.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">집주인 사칭 신분증 위조 전세사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사칭·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>위조 신분증 캡처·사칭자 연락처·대화 기록</strong></li>\n<li><strong>실소유자의 임대 부인 진술·연락 기록</strong></li>\n<li><strong>등기부등본·전입·확정일자 자료</strong></li>\n<li><strong>부동산 중개 계약서·중개사 정보</strong></li>\n<li><strong>사칭자 계좌 송금 내역</strong></li>\n<li><strong>전세사기피해지원센터 신청 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위조 신분증은 수사기관이 원본 대조·발급 이력으로 위조 여부를 확인하는 핵심 자료. 사칭자와의 모든 대화·계좌 흐름을 보존해두면 수사·가압류 검토의 근거로 활용됩니다. 중개사의 확인·설명의무 위반 여부도 별도 점검할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>계약 효력</strong> — 실소유자에게 계약 효력을 주장할 수 있는지 평가.</li>\n<li><strong>소멸시효 관리</strong> — 점유 유지 중에는 소멸시효 진행이 멈출 수 있는 영역.</li>\n<li><strong>중개사 책임</strong> — 신분 확인·설명의무 위반 시 공제·배상 검토.</li>\n<li><strong>사칭자 재산 추적</strong> — 잠적 시 계좌·자산 추적·가압류 검토.</li>\n<li><strong>피해자 결정 요건</strong> — 요건 충족 시 정부 지원 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금반환채권 소멸시효와 동시이행항변권 평가 영역',
        summary:
          '대법원 2016다244224(대법원, 2020.07.09 선고) 영역에서 법원은 임차인이 동시이행항변권을 근거로 임차목적물을 계속 점유하고 있는 경우 보증금반환채권에 대한 소멸시효가 진행하지 않는다고 판시했습니다. 사칭 범행으로 보증금 회수가 지연되는 경우에도 점유 유지 시 시효 관리 트랙으로 검토할 수 있습니다.',
        takeaway: '점유 유지 시 보증금반환채권 소멸시효 진행이 멈출 수 있는 영역 — 점유 유지 + 형사 고소 병행 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '실소유자는 계약을 몰랐다는데 보증금을 실소유자에게 받을 수 있나요?',
        answer:
          '<strong>실소유자 계약 미인지 시 사칭자·중개사 대상 청구가 주된 검토 영역입니다.</strong> 실소유자 책임은 경우에 따라 달라질 소지.',
      },
      {
        question: '부동산 중개사는 책임이 없나요?',
        answer:
          '<strong>신분 확인·설명의무 위반 시 공제·배상 청구를 검토할 수 있는 영역입니다.</strong> 중개 계약서·공제가입 여부 확인 필요.',
      },
      {
        question: '사칭자가 잠적하면 보증금을 받기 어려운가요?',
        answer:
          '<strong>수사기관 계좌 추적·가압류 병행 검토 영역입니다.</strong> 형사 고소 + 재산 보전 신속히 검토.',
      },
      {
        question: '계속 살고 있으면 보증금 소멸시효가 지나지 않나요?',
        answer:
          '<strong>점유 유지 시 소멸시효 진행이 멈출 수 있는 영역입니다.</strong> 법원 판례 상 동시이행항변권 기반으로 검토.',
      },
      {
        question: '이런 사칭 범행도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>요건 충족 여부에 따라 신청을 검토할 수 있는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 가짜 임대인 대응', href: '/guide/jeonse-fraud/fraud-fake-landlord-impersonation-victim' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '전세사기 민사 vs 형사', href: '/guide/jeonse-fraud/jeonse-fraud-civil-vs-criminal' },
    ],
  },

  // ─── 6. jeonse-fraud-hidden-senior-mortgage-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-hidden-senior-mortgage-track',
    keyword: '선순위 근저당 은폐 전세사기',
    questionKeyword: '전세계약 당시 중개사가 선순위 근저당에 대해 제대로 설명하지 않았고, 경매로 넘어가니 보증금이 후순위라 배당을 거의 못 받게 됐어요.',
    ctaKeyword: '선순위 근저당 은폐 전세사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '선순위 근저당 은폐 전세사기 — 5단계 대응 점검 | 로앤가이드',
      description:
        '중개사가 선순위 근저당을 숨기고 전세계약을 유도해 경매 배당에서 보증금이 후순위가 됐다면 중개사 배상책임·공동저당 배당 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세계약 전 중개사가 \'안전한 물건이다·선순위 설정이 없다\'고 했는데, 등기부를 확인해보니 집주인 명의로 1억 5천이 넘는 근저당이 이미 설정돼 있었습니다. 결국 집주인이 원리금을 못 갚아 경매로 넘어갔고, 낙찰 금액에서 선순위 근저당 채권자가 먼저 배당을 가져가 보증금 중 절반도 회수하기 어렵게 됐어요. 중개사는 \'설명은 했다·몰랐다\'는 말만 하고 있습니다." 공인중개사법 제25조는 \'개업공인중개사는 중개 완성 전 저당권 등 권리관계를 확인·설명해야 한다\'고 규정하고, 민법 제368조는 \'공동저당 경매 시 각 부동산의 경매대가에 비례해 채권을 나눈다\'고 규정합니다. 선순위 근저당 은폐 + 중개사 설명의무 위반 + 경매 배당 후순위 결합은 중개사 손해배상·공동저당 배당 트랙을 함께 검토해야 하는 영역. 피해자라면 ① 등기·설명 자료 확인 ② 중개사 책임 ③ 배당 이의 ④ 형사 고소 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 선순위 근저당 은폐 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료확인·중개책임·배당이의·형사·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 등기·설명 자료 확인</strong> — 계약 당시 등기부·중개사 확인설명서·설명 정황 비교.</li>\n<li><strong>② 중개사 손해배상 청구</strong> — 공인중개사법 제25조 위반 + 공제 배상 검토.</li>\n<li><strong>③ 경매 배당 이의</strong> — 배당 순위·공동저당 배당 방식 점검.</li>\n<li><strong>④ 형사 고소</strong> — 집주인·중개사 은폐 정황 + 형법 제347조 사기 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 중개사는 저당권 등 권리관계를 확인·설명할 의무가 있고, 이를 위반해 손해가 발생하면 손해배상 청구를 검토할 수 있는 영역. 계약 당시 확인설명서와 등기부 비교 자료가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부·확인설명서 자료 확보 (즉시)</strong> — 계약 당시 등기부등본·중개사 확인설명서·근저당 설정 시점 비교.</li>\n<li><strong>2단계 — 중개사 손해배상 청구 검토 (1개월 내)</strong> — 공인중개사협회 공제·개인 배상 청구.</li>\n<li><strong>3단계 — 경매 배당 이의 신청 (배당기일 전)</strong> — 공동저당 배당 방식·비례 배분 점검.</li>\n<li><strong>4단계 — 형사 고소 검토 (1~2개월 내)</strong> — 집주인·중개사 은폐 정황 + 사기 고소.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">선순위 근저당 은폐 전세사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·중개·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>계약 당시 등기부등본 (근저당 설정 시점 확인)</strong></li>\n<li><strong>중개사 확인·설명서·계약 당시 설명 정황</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>경매 진행 내역·배당표</strong></li>\n<li><strong>중개사 공인중개사 등록 + 공제 가입 확인 자료</strong></li>\n<li><strong>전세사기피해지원센터 신청 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개사 확인설명서에 근저당 기재가 누락됐거나 과소 기재된 경우 설명의무 위반 정황이 될 수 있는 자료. 공인중개사협회 공제는 한도 내에서 배상을 받을 수 있는 경우가 있으니 먼저 공제 가입 여부를 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>중개사 설명의무 위반</strong> — 확인설명서 기재·설명 여부가 책임 평가 핵심.</li>\n<li><strong>공동저당 배당 방식</strong> — 민법 제368조 비례 배분 적용 여부 점검.</li>\n<li><strong>배당 순위 다툼</strong> — 확정일자 순서·선순위 규모에 따라 회수 범위 달라짐.</li>\n<li><strong>집주인 사기 정황</strong> — 은폐 의도 입증이 형사 고소의 핵심 자료.</li>\n<li><strong>피해자 결정 요건</strong> — 중개사 관여 정황이 요건 충족 검토에 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공인중개사 확인·설명의무와 공동저당 배당 평가 영역',
        summary:
          '대법원 2024다305087(대법원, 2025.12.04 선고) 영역에서 법원은 개업공인중개사는 저당권 등 권리관계를 확인·설명해야 하며, 공동저당권에 관한 민법 제368조는 공동근저당권에도 적용돼 각 부동산 경매대가에 비례한 배당이 이루어진다고 판시했습니다. 선순위 근저당 은폐 피해에서 중개사 설명의무 위반 + 공동저당 배당 트랙이 핵심으로 검토될 수 있습니다.',
        takeaway: '중개사 설명의무 위반 + 공동저당 배당 비례 원칙이 검토 가능한 영역 — 확인설명서 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사가 \'설명했다\'고 주장하면 어떻게 대응하나요?',
        answer:
          '<strong>확인설명서 기재 내용이 핵심 자료 영역입니다.</strong> 기재 누락·과소 기재가 의무 위반 정황.',
      },
      {
        question: '중개사 공제에서 보증금 전액을 받을 수 있나요?',
        answer:
          '<strong>공제 한도 내에서 배상을 검토할 수 있는 영역입니다.</strong> 한도·조건은 공제 약관 확인이 필요.',
      },
      {
        question: '경매 배당에서 후순위라면 아무것도 못 받나요?',
        answer:
          '<strong>공동저당 배당 비례 원칙과 남은 배당액 규모에 따라 달라지는 영역입니다.</strong> 배당표 점검이 우선.',
      },
      {
        question: '선순위 근저당이 있는 줄 몰랐는데 계약을 취소할 수 있나요?',
        answer:
          '<strong>착오·사기를 이유로 한 취소를 검토할 수 있는 영역입니다.</strong> 은폐 정황 증빙이 관건.',
      },
      {
        question: '이 경우도 전세사기피해자 결정이 될 수 있나요?',
        answer:
          '<strong>요건 충족 여부에 따라 신청을 검토할 수 있는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 중개사 책임', href: '/guide/jeonse-fraud/jeonse-fraud-broker-liability' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
    ],
  },
];
