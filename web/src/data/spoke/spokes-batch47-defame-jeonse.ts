import { SpokePage } from '../spoke-pages';

// batch47 defame+jeonse 5개
//
// 고유 존재 이유:
// 1. 이 페이지는 네이버카페에서 익명 아이디로 명예훼손 글을 올린 가해자의 신원을 공개 청구하려는 피해자가 정보통신망법 제44조의6 임시조치·발신자 정보 제공 절차를 단계별로 정리하도록 돕는 페이지다.
// 2. 이 페이지는 잡플래닛·블라인드 등 직장 후기 앱에 사실이 아닌 후기가 게시되어 명예훼손 혐의를 받는 법인·개인이 진실성·공익성 항변과 플랫폼 삭제 요청을 병행하도록 돕는 페이지다.
// 3. 이 페이지는 카카오톡·인스타그램 캡처를 재유포하여 타인의 명예를 훼손했다는 혐의를 받는 사람이 재유포 행위의 형사·민사 책임 범위와 위법성조각 항변을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 임대인이 파산 신청 중인 상황에서 전세 보증금 우선변제를 받으려는 임차인이 파산절차·경매 배당 순서와 소액임차인 보호 제도를 단계별로 파악하도록 돕는 페이지다.
// 5. 이 페이지는 임대인이 계약갱신을 거절한 뒤 이주비·원상회복비·중개수수료 부담을 협상하려는 임차인이 갱신 거절 요건·손해배상 청구 가능성을 점검하도록 돕는 페이지다.

export const spokesBatch47DefameJeonse: SpokePage[] = [
  // ─── 1. defamation / cafe-id-disclosure-request ───
  {
    domain: 'defamation',
    slug: 'defamation-cafe-id-disclosure-request',
    keyword: '네이버카페 익명 아이디 신원공개 청구',
    questionKeyword: '네이버카페 익명 아이디로 올라온 명예훼손 글, 작성자 신원을 알 수 있나요?',
    ctaKeyword: '카페 익명 작성자 신원공개 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '네이버카페 익명ID 신원공개 청구 4단계 절차 | 로앤가이드',
      description:
        '네이버카페 익명 아이디가 명예훼손 글을 올렸다면 정보통신망법 제44조의6 임시조치부터 발신자 정보 제공 청구까지 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"카페에 제 이름이 포함된 허위 글이 올라왔는데, 닉네임 뒤에 숨어 있어서 누군지 알 수가 없어요"라는 상담이 많습니다. 익명성이 보장된 것처럼 보여도 정보통신망법과 전기통신사업법에 따라 발신자 정보 제공 명령을 법원에 신청하거나 네이버에 직접 임시조치·정보 제공을 요청하는 경로가 있습니다. 글이 삭제되기 전에 증거를 확보해두는 것이 첫 번째이며, 발신자 정보는 소송 과정에서 법원 명령으로 제공받는 것이 일반적입니다.</p>',
    sections: [
      {
        title: '익명 작성자를 특정하는 4단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">개인정보분쟁조정위원회 안내 및 정보통신망법 절차를 참고하면 아래 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 확보 (즉시)</strong> — 문제 게시글의 URL·날짜·내용을 공증 또는 인터넷 화면 캡처(해시값 생성 권장)로 보존. 삭제 이후에는 IP 추적 근거가 소멸할 수 있습니다.</li>\n<li><strong>2단계 — 임시조치·정보 제공 요청 (네이버에 직접)</strong> — 정보통신망법 제44조의2에 따른 삭제·임시조치 신청 후, 같은 법 제44조의6에 따른 발신자 정보 제공 요청서를 네이버 고객센터에 제출. 네이버는 요청 수신 후 3일 이내 임시조치 여부를 결정합니다.</li>\n<li><strong>3단계 — 발신자 정보 제공 가처분 신청 (법원)</strong> — 네이버가 임의 제공을 거부하면 관할 지방법원에 "발신자 정보 제공 가처분" 신청. 법원 결정으로 IP·가입자 정보 취득 가능.</li>\n<li><strong>4단계 — 개인정보 분쟁조정 또는 형사 고소 병행</strong> — 신원 파악 후 개인정보분쟁조정위원회(kopico.go.kr)에 분쟁조정 신청(60일 이내 조정안 작성), 또는 경찰에 정보통신망법 위반 명예훼손으로 고소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 절차를 빠르게 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">명예훼손 피해 대응 순서, AI가 상황별로 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">명예훼손 대응 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 개인정보분쟁조정위원회 활용',
        content:
          '<p><strong style="color:#1e3a5f">개인정보보호위원회 공식 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>분쟁조정 신청</strong> — kopico.go.kr 온라인 또는 우편 (별지 제1호 서식). 무료. 침해사실 인지 즉시 신청.</li>\n<li><strong>사실조사·의견청취</strong> — 위원회가 플랫폼(피신청인)에 의견청취 + 증거 요청.</li>\n<li><strong>조정안 작성</strong> — 신청일로부터 60일 이내(연장 가능) 조정안 제시.</li>\n<li><strong>수락 결정</strong> — 조정안 통지 후 15일 이내 양측 수락 시 재판상 화해 효력(집행권원 취득).</li>\n<li><strong>불성립 시</strong> — 민사소송으로 전환. 50명 이상 피해 시 집단분쟁조정도 검토 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">준비서류: 분쟁조정신청서(별지 제1호) + 신분증 사본 + 침해사실 입증자료(스크린샷·URL) + 피신청인(네이버) 연락처. 대리인 신청 시 위임장 + 별지 제2호 추가.</blockquote>',
      },
      {
        title: '네이버가 "발신자 정보를 제공할 수 없다"고 할 때',
        content:
          '<p><strong style="color:#1e3a5f">플랫폼의 임의 제공 거부 시 법원 경로가 유효합니다.</strong></p>\n<ul>\n<li><strong>가처분 신청</strong> — 전기통신사업법 제83조·정보통신망법 제44조의6을 근거로 "이용자 정보 제공 가처분" 신청.</li>\n<li><strong>소명자료</strong> — 명예훼손 게시글 출력본·URL·해시값·피해 경위서를 첨부.</li>\n<li><strong>법원 결정</strong> — 통상 수주~수개월 이내. 결정 확정 후 플랫폼은 IP·가입자 정보 제공 의무.</li>\n<li><strong>IP→신원 확인</strong> — 수사기관에 IP 신원 조회 요청(고소 접수 후 가능) 또는 인터넷서비스제공자에 재신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 게시글 삭제 후에는 IP 로그 보존 기간(통상 3~12개월)이 경과하면 추적이 어려워집니다. 삭제 요청보다 증거 확보가 먼저입니다.</blockquote>',
      },
      {
        title: '신원 파악 후 — 형사·민사 대응 선택지',
        content:
          '<p><strong style="color:#1e3a5f">작성자 신원을 확인했다면 두 갈래 대응을 동시에 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>형사 고소</strong> — 정보통신망법 제70조(사이버 명예훼손, 3년 이하 징역 또는 2천만원 이하 벌금). 허위 사실 적시는 7년 이하 징역 또는 5천만원 이하 벌금.</li>\n<li><strong>민사 손해배상</strong> — 불법행위(민법 제750조)로 위자료 청구. 재산적·정신적 손해 모두 포함.</li>\n<li><strong>삭제 청구</strong> — 인격권 침해를 이유로 게시글 삭제 가처분 동시 신청.</li>\n<li><strong>합의 진행</strong> — 형사 고소 후 작성자가 합의 요청 시, 삭제 확인 + 위자료 수령 조건으로 협상 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 개인정보 침해(주소·전화번호 무단 공개)가 동반된 경우 개인정보분쟁조정을 통해 별도 배상도 검토할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법상 허위사실 적시 명예훼손 성립 요건',
        summary:
          '부산지방법원 2025고단949 사건(부산지법, 2025.08.20 선고)에서 법원은 동영상 플랫폼에 허위 내용을 반복 게시하여 유가족의 명예를 훼손한 피고인들에 대해, 비방 목적과 허위성이 인정된다는 이유로 정보통신망법 위반(명예훼손)을 유죄로 판결했습니다.',
        takeaway:
          '온라인 익명 게시글이라도 허위성·비방 목적이 인정되면 정보통신망법상 형사처벌 대상이 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '닉네임만 알고 있어도 신원 공개를 청구할 수 있나요?',
        answer:
          '<strong>네이버에 직접 발신자 정보 제공 요청 시 닉네임·게시글 URL만으로도 신청할 수 있습니다.</strong> 법원 가처분 신청도 게시글 특정만 되면 접수가 가능해요.',
      },
      {
        question: '이미 글이 삭제된 경우에도 추적할 수 있나요?',
        answer:
          '<strong>삭제 후에도 플랫폼이 IP 로그를 보존 중인 기간 내라면 가처분을 통해 정보 취득을 검토할 수 있습니다.</strong> 다만 로그 보존 기간(통상 3~12개월) 경과 시 어려워지니 빨리 움직이는 것이 중요해요.',
      },
      {
        question: '개인정보분쟁조정과 형사 고소 중 어떤 것을 먼저 해야 하나요?',
        answer:
          '<strong>신원 파악이 선행되어야 합니다.</strong> 신원 확인 후 형사 고소와 민사·분쟁조정을 병행하는 것이 일반적이에요.',
      },
      {
        question: '분쟁조정 신청 비용이 드나요?',
        answer:
          '<strong>개인정보분쟁조정위원회 신청은 무료입니다.</strong> 단, 조정이 불성립돼 민사소송으로 전환 시 인지대·변호사 비용이 발생해요.',
      },
      {
        question: '법인(회사)도 이 절차를 이용할 수 있나요?',
        answer:
          '<strong>법인도 명예 주체로 보호받으므로 신원공개 청구·형사 고소 모두 가능합니다.</strong> 단, 개인정보분쟁조정 일부 절차는 개인 신청이 원칙이니 법원 가처분 경로가 더 빠를 수 있어요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '인터넷 명예훼손 형사 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '명예훼손 위법성조각사유 정리', href: '/guide/defamation/defamation-illegality-exception' },
      { label: '사이버 명예훼손 손해배상 청구', href: '/guide/defamation/defamation-cyber-damages-claim' },
      { label: '개인정보 무단 공개 대응 방법', href: '/guide/defamation/defamation-personal-info-disclosure' },
      { label: '명예훼손 증거 수집 체크리스트', href: '/guide/defamation/defamation-evidence-collection' },
    ],
  },

  // ─── 2. defamation / job-review-app-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-job-review-app-defense',
    keyword: '잡플래닛 직장 후기 명예훼손 대응',
    questionKeyword: '잡플래닛에 올라온 부정적 후기, 명예훼손으로 고소당할 수 있나요?',
    ctaKeyword: '직장 후기 명예훼손 혐의 대응 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '잡플래닛 후기 명예훼손 혐의 5가지 대응 방법 | 로앤가이드',
      description:
        '잡플래닛·블라인드 직장 후기 작성 후 명예훼손 혐의를 받고 있다면 진실성·공익성 항변과 플랫폼 삭제·법원 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>전 직장에 대해 솔직하게 후기를 남겼다가 회사로부터 "고소하겠다"는 연락을 받는 상황, 적지 않게 발생하고 있습니다. 직장 후기는 공익적 표현으로 보호받을 수 있지만, 사실 여부·표현 방식에 따라 명예훼손 혐의를 받고 있다면 대응 방향이 달라집니다. 진실성과 공익성 두 가지가 핵심 항변 포인트이며, 서두르지 않고 정확히 대처하면 충분히 다툴 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 후기 작성이 명예훼손이 되려면 어떤 요건이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 명예훼손 혐의를 받고 있다면, 성립 요건 4가지를 먼저 확인하세요.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정 다수가 인식할 수 있는 상태(플랫폼 게시 = 충족).</li>\n<li><strong>사실의 적시</strong> — 단순 의견·평가("회사 분위기 별로")는 명예훼손 성립이 어렵고, 구체적 사실 기술("대표가 횡령했다")이어야 검토 대상.</li>\n<li><strong>명예 훼손</strong> — 사회적 평가를 실질적으로 낮추는 내용이어야 함.</li>\n<li><strong>비방 목적(사이버 명예훼손)</strong> — 정보통신망법 적용 시 비방 목적이 추가 요건.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위 4가지 요건 중 하나라도 충족되지 않으면 성립 자체가 어렵습니다. 특히 의견 표현인지 사실 적시인지가 첫 관문입니다.</blockquote>',
      },
      {
        title: 'Q. 사실을 적었는데도 명예훼손이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면 형법 제310조 위법성조각 항변이 핵심입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시한 내용이 진실(또는 진실이라 믿을 상당한 이유가 있어야).</li>\n<li><strong>공익성</strong> — 구직자·현직자에게 직장 정보를 제공하는 것은 공공의 이익에 관한 사항으로 검토됩니다. 대법원은 사인(私人)이라도 사회 일반 이익과 관련된 사항이라면 공익성을 인정해온 바 있습니다.</li>\n<li><strong>이 두 가지를 충족하면</strong> — 형법 제310조에 따라 위법성이 조각(무죄)될 수 있습니다.</li>\n<li><strong>실무 주의사항</strong> — 과장·허위 혼입 표현은 진실성을 흔들 수 있으니 후기 전체를 검토해두세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 항변 포인트를 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 진실성·공익성 항변 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">명예훼손 대응 AI 상담 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 플랫폼에 삭제 요청을 해서 글이 내려갔어요. 이게 추가 불이익이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 삭제 자체는 형사 책임과 별개이나, 증거 보존이 필요합니다.</strong></p>\n<ul>\n<li><strong>삭제 = 고소 기각 아님</strong> — 고소장은 삭제 여부와 무관하게 수리됩니다.</li>\n<li><strong>증거 보존</strong> — 게시 당시 캡처본·작성 날짜·내용을 본인도 보관해두어야 진실성 입증이 가능합니다.</li>\n<li><strong>플랫폼에 복구 요청</strong> — 잡플래닛·블라인드는 일방적 삭제에 이의신청 절차를 운영하니 필요 시 활용하세요.</li>\n<li><strong>재게시 위험</strong> — 고소 진행 중 재게시는 새로운 혐의 소지가 있으니 판단 전 삼가는 것이 안전합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 작성 당시 경험한 사실을 입증할 근거 자료(급여명세서·메시지·목격자)를 미리 정리해두면 수사 단계 대응이 훨씬 수월해집니다.</blockquote>',
      },
      {
        title: 'Q. 경찰 조사를 받게 된다면 어떻게 준비해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면 조사 전 아래 5가지를 준비하세요.</strong></p>\n<ul>\n<li><strong>후기 내용 정확히 확인</strong> — 어떤 문장이 문제가 됐는지 특정하고 진실성 근거를 목록화.</li>\n<li><strong>근거 자료 수집</strong> — 급여명세서·계약서·업무 메시지·동료 진술 등 사실 입증 자료.</li>\n<li><strong>진술 일관성 유지</strong> — "사실이라 믿었다"는 주관적 인식도 중요한 항변 포인트.</li>\n<li><strong>변호인 선임 여부 검토</strong> — 법률구조공단(132) 무료 상담으로 먼저 방향을 잡을 수 있습니다.</li>\n<li><strong>합의 협상 검토</strong> — 상황에 따라 삭제 + 위자료 지급 합의로 절차를 종결하는 것도 선택지입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 수사기관 조사 전 단계에서 상대방과 직접 연락하는 것은 협박·모욕 등 새 혐의로 이어질 소지가 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예훼손 위법성조각사유와 공익성 인정 기준',
        summary:
          '대법원 2024도14555 사건(대법원, 2025.05.29 선고)에서 법원은 형법 제310조의 위법성조각이 인정되려면 사실이 진실이고 공공의 이익에 관한 것이어야 하며, 행위자의 주요 동기가 공익이라면 부수적 사익 목적이 있어도 위법성이 조각될 수 있다고 판시했습니다.',
        takeaway:
          '직장 후기는 구직자·사회 전반의 이익과 관련된 사항으로 공익성이 인정될 소지가 있어, 진실한 사실 적시라면 형법 제310조 항변을 적극 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '후기 내용 일부가 사실이고 일부는 과장인 경우 어떻게 되나요?',
        answer:
          '<strong>허위가 섞이면 전체 진실성이 흔들릴 수 있습니다.</strong> 과장 부분이 명예훼손의 핵심 문장인지 여부가 관건이니 정확히 구분해두어야 해요.',
      },
      {
        question: '익명으로 올렸는데도 제가 작성자로 특정될 수 있나요?',
        answer:
          '<strong>플랫폼은 법원 명령에 따라 IP·계정 정보를 제공할 수 있습니다.</strong> 익명이라도 수사기관 협조 시 신원이 밝혀지는 경우가 있어요.',
      },
      {
        question: '합의하면 고소가 취하되나요?',
        answer:
          '<strong>형사소송법상 명예훼손(친고죄 아님)은 합의만으로 고소 취하가 강제되지는 않습니다.</strong> 단, 검사가 불기소 처분을 내릴 때 합의 여부가 참고될 수 있어요.',
      },
      {
        question: '회사가 민사 손해배상까지 청구하면 어떻게 되나요?',
        answer:
          '<strong>민사는 형사와 별개로 진행됩니다.</strong> 손해액 증명 책임은 원칙적으로 회사 측에 있으나, 실제 피해(주가 하락·영업 손실 등)가 있으면 배상액이 커질 수 있어요.',
      },
      {
        question: '고소장을 받았는데 당장 자수해야 하나요?',
        answer:
          '<strong>고소장 접수만으로 자수 의무는 없습니다.</strong> 경찰 소환 통보를 받으면 그때 출석하면 되고, 그 전에 변호인 상담으로 방향을 잡는 것이 좋습니다.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 위법성조각사유 총정리', href: '/guide/defamation/defamation-illegality-exception' },
      { label: '온라인 명예훼손 형사 대응 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '사이버 명예훼손 고소 대응 준비', href: '/guide/defamation/defamation-cyber-accusation-defense' },
      { label: '명예훼손 합의금과 기준', href: '/guide/defamation/defamation-settlement-amount-standard' },
      { label: '명예훼손 피해자 손해배상 청구', href: '/guide/defamation/defamation-civil-damages-claim' },
    ],
  },

  // ─── 3. defamation / screenshot-redistribute-liability ───
  {
    domain: 'defamation',
    slug: 'defamation-screenshot-redistribute-liability',
    keyword: '캡처 재유포 명예훼손 책임',
    questionKeyword: '카카오톡 대화 캡처를 단톡방에 공유했다가 명예훼손 혐의를 받고 있어요',
    ctaKeyword: '캡처 재유포 명예훼손 혐의 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '캡처 재유포 명예훼손 책임 범위와 항변 5가지 | 로앤가이드',
      description:
        '카카오톡·인스타그램 캡처를 단톡방·SNS에 재유포하다가 명예훼손 혐의를 받고 있다면 공연성·비방 목적·위법성조각 항변을 지금 확인하세요.',
    },
    intro:
      '<p>대화 캡처를 단톡방에 공유하거나 SNS에 올렸다가 "명예훼손이다"라는 연락을 받는 상황이 늘고 있습니다. 원본이 이미 공개된 내용이라도 재유포 자체가 새로운 명예훼손이 될 수 있어 조심스러운 부분이 많습니다. 혐의를 받고 있다면 전파 범위·비방 목적·사실 여부를 기준으로 대응 방향을 정하는 것이 중요합니다.</p>',
    sections: [
      {
        title: 'Q. 원본을 내가 만든 게 아닌데도 재유포만으로 명예훼손이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면, 재유포도 독립된 명예훼손 행위로 성립될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 단톡방 멤버 수, SNS 팔로워 수에 관계없이 불특정 다수에게 전파 가능성이 있으면 성립 요건 충족.</li>\n<li><strong>사실의 재적시</strong> — 원본이 이미 공개된 내용이라도 재배포는 새로운 적시 행위로 볼 수 있습니다.</li>\n<li><strong>비방 목적</strong> — 정보통신망법 적용 시 비방 목적이 추가 요건. "폭로" 의도가 있었는지 여부가 판단됩니다.</li>\n<li><strong>원본 작성자와 공범</strong> — 원본 작성자와 공모 여부가 인정되면 공동정범 소지도 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재유포 경위·의도·전파 범위 세 가지가 책임 범위를 결정합니다.</blockquote>',
      },
      {
        title: 'Q. "사실이 맞으니까 알릴 권리가 있다"는 항변은 유효한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면 진실성 + 공익성 두 요건을 모두 충족해야 항변이 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 내용이 사실이어야 하며, 진실이라 믿을 상당한 이유도 요건.</li>\n<li><strong>공익성</strong> — 단순 폭로·개인 감정 해소 목적이라면 공익성 인정이 어렵습니다. 주요 동기가 공익에 있어야 합니다.</li>\n<li><strong>표현의 자유 vs 인격권</strong> — 법원은 표현 방식·전파 범위·상대방의 지위 등을 종합해 판단합니다.</li>\n<li><strong>사적 대화 유출</strong> — 당사자 간 대화는 공개를 전제로 하지 않아 공익성 인정 범위가 더 좁아질 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 상담으로 항변 가능성을 먼저 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 항변 포인트와 대응 순서를 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">명예훼손 대응 AI 상담 →</a>\n</div>',
      },
      {
        title: 'Q. 단톡방 유출이 형사처벌까지 이어지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 처벌 가능성은 전파 범위와 비방 목적 여부에 따라 달라집니다.</strong></p>\n<ul>\n<li><strong>형법 제307조(명예훼손)</strong> — 사실 적시 2년 이하 징역·500만원 이하 벌금, 허위 사실 5년 이하 징역·1천만원 이하 벌금.</li>\n<li><strong>정보통신망법 제70조(사이버 명예훼손)</strong> — 사실 적시 3년 이하 징역·3천만원 이하 벌금, 허위 7년 이하 징역·5천만원 이하 벌금.</li>\n<li><strong>비공개 대화 무단 유출</strong> — 별도로 통신비밀보호법 위반(10년 이하 징역) 소지도 있으니 확인 필요.</li>\n<li><strong>실무 경향</strong> — 초범·재유포 범위가 제한적·합의 이력이 있는 경우 불기소 처분이 나오는 사례가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유포 당시 단톡방 멤버 수·스크린샷 원본 소스·유포 동기를 상세히 정리해두면 수사 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: 'Q. 합의를 통해 사건을 마무리할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의는 처벌 수위에 영향을 미칠 수 있으며, 조건을 명확히 해야 합니다.</strong></p>\n<ul>\n<li><strong>삭제 확인 먼저</strong> — 합의 전 유포된 캡처 전량 삭제 여부를 확인·기재해야 재분쟁을 막을 수 있습니다.</li>\n<li><strong>위자료 수준</strong> — 전파 범위·피해 정도에 따라 사례별로 다르며, 금액 단정보다 협상 과정에서 결정됩니다.</li>\n<li><strong>합의서 작성</strong> — 고소 취하 의사·위자료 금액·재유포 금지 조항을 명시해두는 것이 안전합니다.</li>\n<li><strong>수사 중 합의</strong> — 경찰 송치 전 합의가 결과에 유리하게 반영되는 경향이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 협상 중 상대방을 자극하는 발언·추가 유포는 새로운 혐의로 연결될 수 있으니 주의하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정치인 발언의 명예훼손 위법성 판단 기준',
        summary:
          '대법원 2022다242649 사건(대법원, 2025.06.26 선고)에서 법원은 민법상 명예훼손이란 공연히 사실을 적시하여 타인의 사회적 평가를 침해하는 행위라고 명시하면서, 적시 내용의 진실성과 공익성이 없으면 위법성이 조각되지 않는다고 판시했습니다.',
        takeaway:
          '재유포 행위도 사실 적시에 해당하며, 진실성과 공익성을 입증하지 못하면 민사·형사 책임을 피하기 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '상대방 동의 없이 대화 캡처를 올리면 무조건 위법인가요?',
        answer:
          '<strong>당연히 위법이라고 단정할 수는 없습니다.</strong> 공익성·진실성이 인정되면 위법성이 조각될 수 있으나, 사적 대화는 공익성 인정 범위가 좁아 신중해야 해요.',
      },
      {
        question: '재유포한 캡처를 모두 직접 삭제하면 처벌을 피할 수 있나요?',
        answer:
          '<strong>삭제는 피해 최소화로 참작 사유가 될 수 있지만 처벌 자체를 자동으로 면제하지는 않습니다.</strong> 수사 전 신속한 삭제 + 피해자 합의 시도가 결합돼야 효과적이에요.',
      },
      {
        question: '단톡방이 아니라 1:1 메시지로 보낸 경우도 해당되나요?',
        answer:
          '<strong>1:1 전송은 공연성이 부족해 명예훼손 성립이 어렵습니다.</strong> 다만 수신자가 제3자에게 전달하면 그 전달자에게 새로운 책임이 생깁니다.',
      },
      {
        question: '형사 고소와 민사 손해배상이 동시에 들어왔어요',
        answer:
          '<strong>형사·민사는 별개 절차이며 동시 진행이 가능합니다.</strong> 형사에서 무혐의 처분이 나와도 민사에서 별도 판단을 받을 수 있으니 두 절차 모두 준비가 필요해요.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 형사 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '명예훼손 위법성조각사유 총정리', href: '/guide/defamation/defamation-illegality-exception' },
      { label: '카카오톡 캡처 증거 수집 방법', href: '/guide/defamation/defamation-evidence-collection' },
      { label: '명예훼손 합의금 협상 기준', href: '/guide/defamation/defamation-settlement-amount-standard' },
      { label: '사이버 명예훼손 피해자 대응', href: '/guide/defamation/defamation-cyber-damages-claim' },
    ],
  },

  // ─── 4. jeonse / landlord-bankruptcy-priority-payment ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-bankruptcy-priority-payment',
    keyword: '임대인 파산 보증금 우선변제',
    questionKeyword: '임대인이 파산 신청했는데 전세 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '임대인 파산 시 보증금 우선변제 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 파산 전세보증금 우선변제 4단계 절차 | 로앤가이드',
      description:
        '임대인이 파산 신청을 했다면 소액임차인 최우선변제·확정일자 우선변제·HUG 이행청구 절차를 단계별로 정리해 보증금을 최대한 회수하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"집주인이 파산 신청을 했다는 소식을 들었어요. 보증금을 어떻게 돌려받을 수 있는지 너무 막막합니다"라는 상담이 늘고 있습니다. 임대인 파산 시 보증금은 파산재단에 편입되는 임대인 재산을 통해 회수해야 하는데, 주택임대차보호법상 대항요건·확정일자·소액보증금 요건이 핵심입니다. 절차가 복잡해 보여도 요건만 충족하면 파산채권자보다 먼저 변제받을 수 있는 경로가 있습니다.</p>',
    sections: [
      {
        title: '임대인 파산 시 보증금 회수 구조 이해',
        content:
          '<p><strong style="color:#1e3a5f">파산 절차에서 임차인 보증금은 아래 우선순위로 회수 경로가 결정됩니다.</strong></p>\n<ul>\n<li><strong>소액임차인 최우선변제</strong> — 주택임대차보호법 제8조. 지역별 소액보증금 한도 내 금액은 파산 배당에서 다른 채권자보다 우선. 서울 기준 5,500만원 이하 보증금의 경우 1,650만원까지 최우선변제 검토 가능.</li>\n<li><strong>확정일자 우선변제</strong> — 대항요건(전입신고+점유) + 확정일자를 갖춘 임차인은 후순위 채권자보다 우선해 보증금 변제.</li>\n<li><strong>일반 파산채권</strong> — 위 두 요건 미충족 시 일반 채권자와 동순위 → 배당 비율만큼 회수.</li>\n<li><strong>HUG 보증보험 가입자</strong> — 전세보증금반환보증에 가입된 경우 HUG 이행청구로 별도 회수 가능 (파산 무관).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전입신고·점유 유지·확정일자 3가지가 우선변제권을 지키는 기본 조건입니다. 이사 전 임차권등기명령을 반드시 마쳐야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — HUG·KLAC 절차 통합',
        content:
          '<p><strong style="color:#1e3a5f">HUG 공식 절차 및 대한법률구조공단(KLAC) 안내를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임차권등기명령 신청 즉시</strong> — 이사가 필요하다면 관할 지방법원에 임차권등기명령 신청(등기 완료 후 이사). 등기 완료 통상 1~2개월. 대항력·우선변제권 유지를 위해 파산 선고 전 신청 권장.</li>\n<li><strong>2단계 — 파산 절차 참가 (파산채권 신고)</strong> — 파산관재인에게 파산채권 신고서 제출. 소액임차인 최우선변제·확정일자 우선변제 여부를 함께 기재.</li>\n<li><strong>3단계 — HUG 이행청구 (보증보험 가입자만)</strong> — 계약 종료·해지 후 1개월 내 보증금 미반환 시 HUG 영업점에 사고통지서 + 이행청구서 제출. 이행심사 약 2주 이내 결정.</li>\n<li><strong>4단계 — 경매 배당 참가</strong> — 경매가 개시되면 배당요구 종기까지 배당요구신청서 제출. 확정일자·임차권등기 기준으로 배당 순위 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 먼저 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 파산 상황에서 내 요건을 AI가 단계별로 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">전세 보증금 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">파산 절차 참가와 HUG 이행청구에 필요한 서류를 미리 준비하세요.</strong></p>\n<ul>\n<li><strong>임차권등기명령 신청</strong> — 임차권등기명령 신청서 + 전세계약서(확정일자 날인) + 주민등록등본 또는 초본 + 건물등기부등본 + 계약 종료 증명자료(내용증명·문자).</li>\n<li><strong>파산채권 신고</strong> — 채권신고서 + 전세계약서 + 확정일자 증명 + 임차권등기 완료 등기부등본.</li>\n<li><strong>HUG 이행청구</strong> — 이행청구서 + 전세계약서 + 임차권등기 완료 등기부등본 + 주민등록등본(발급 1개월 이내) + 보증 가입증서. 청구 후 24시간 이내 서류 제출 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 파산관재인 선임 이후 임의로 이사하면 대항력이 소멸해 우선변제권을 잃을 수 있습니다. 이사 전 반드시 임차권등기를 완료하세요.</blockquote>',
      },
      {
        title: '파산 면책 결정 후에도 보증금 청구가 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">임대인 면책 후에도 우선변제권이 인정되는 부분은 경매 환가를 통해 회수를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>면책과 보증금</strong> — 대법원은 파산 면책결정의 효력이 보증금반환채권 전부에 미친다고 판시했습니다. 단, 임차인은 주택 환가 시 우선변제권으로 배당을 받을 수 있습니다.</li>\n<li><strong>임대인 재산이 없는 경우</strong> — 경매 배당 후 잔여 부족분은 HUG 보증보험(가입자) 또는 소송을 통해 대위 정리.</li>\n<li><strong>KLAC 무료 지원</strong> — 기준 중위소득 125% 이하라면 대한법률구조공단(132) 소송 무료 지원 신청 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: HUG 전세보증보험에 가입돼 있다면 파산 배당 여부와 별개로 HUG가 먼저 보증금을 지급하고 임대인에게 구상권을 행사하는 경로를 우선 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산 면책결정과 임차인 보증금반환채권의 관계',
        summary:
          '대법원 2022다247378 사건(대법원, 2025.06.12 선고)에서 법원은 채무자회생법 제564조의 면책결정 효력이 우선변제권이 인정되는 부분을 포함하여 임차인의 보증금반환채권 전부에 미친다고 판시했습니다. 단, 임차인은 주택 환가 대금에 대해 우선변제권 주장은 가능합니다.',
        takeaway:
          '임대인 파산 면책 후에도 대항요건·확정일자를 갖춘 임차인은 경매 배당에서 우선변제를 받을 수 있으므로 임차권등기와 배당요구 신청을 포기하지 말아야 합니다.',
      },
    ],
    faq: [
      {
        question: '전세보증보험이 없으면 보증금을 전혀 못 받나요?',
        answer:
          '<strong>보험이 없어도 대항요건·확정일자를 갖추면 파산배당에서 우선변제를 받을 수 있습니다.</strong> 소액임차인 요건에 해당하면 최우선변제도 검토 가능해요.',
      },
      {
        question: '파산 신청 소식을 들었는데 당장 이사해야 하나요?',
        answer:
          '<strong>이사 전 임차권등기명령부터 완료해야 합니다.</strong> 등기 없이 이사하면 대항력이 소멸해 우선변제권을 잃을 수 있어요.',
      },
      {
        question: '파산채권 신고 기한을 놓치면 어떻게 되나요?',
        answer:
          '<strong>파산채권 신고 기한을 넘기면 배당에서 제외될 수 있습니다.</strong> 파산관재인이 통지한 채권신고 기한을 반드시 확인하고 기한 내 신고하세요.',
      },
      {
        question: 'HUG 이행청구와 파산채권 신고를 동시에 해도 되나요?',
        answer:
          '<strong>두 절차는 병행 진행이 가능합니다.</strong> HUG가 먼저 보증금을 지급하면 HUG가 파산채권자 지위를 승계해 임대인에게 구상권을 행사합니다.',
      },
      {
        question: 'KLAC에서 소송을 무료로 도와주나요?',
        answer:
          '<strong>기준 중위소득 125% 이하라면 대한법률구조공단(132)의 소송 지원을 받을 수 있습니다.</strong> 사전 상담으로 자격 여부를 확인하는 것이 좋아요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-lease-right-registration' },
      { label: 'HUG 전세보증금반환보증 이행청구', href: '/guide/jeonse/jeonse-hug-guarantee-claim' },
      { label: '전세보증금 반환 소송 절차', href: '/guide/jeonse/jeonse-deposit-return-lawsuit' },
      { label: '소액임차인 최우선변제 요건', href: '/guide/jeonse/jeonse-priority-small-tenant' },
      { label: '전세 계약 종료 후 이사 체크리스트', href: '/guide/jeonse/jeonse-move-out-checklist' },
    ],
  },

  // ─── 5. jeonse / renewal-refused-relocation-cost ───
  {
    domain: 'jeonse',
    slug: 'jeonse-renewal-refused-relocation-cost',
    keyword: '갱신 거절 후 이주비 협상',
    questionKeyword: '임대인이 실거주 이유로 갱신을 거절했는데 이주비를 요구할 수 있나요?',
    ctaKeyword: '갱신 거절 이주비·손해배상 협상 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임대인 갱신 거절 후 이주비 협상 5가지 핵심 | 로앤가이드',
      description:
        '임대인이 실거주를 이유로 계약갱신을 거절했다면 이주비·중개수수료·이사비 청구 가능성과 손해배상 요건을 지금 확인하세요.',
    },
    intro:
      '<p>"집주인이 실거주 목적으로 갱신을 거절했는데 당장 다른 집을 구해야 해서 비용이 만만치 않아요. 이주비를 받을 수 있다고 하던데 어떻게 해야 하나요?" 주택임대차보호법 제6조의3이 2020년 개정되면서 갱신 거절 사유가 한정되었고, 이를 위반하면 손해배상 청구가 가능해졌습니다. 실거주 허위 주장이 의심된다면 입증 자료를 모아두는 것이 중요합니다.</p>',
    sections: [
      {
        title: 'Q. 임대인이 실거주를 이유로 갱신을 거절할 수 있는 요건은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 주택임대차보호법 제6조의3 제1항 제8호에 따라 아래 요건이 충족될 때만 거절이 가능합니다.</strong></p>\n<ul>\n<li><strong>실거주 주체</strong> — 임대인 본인, 직계존속, 직계비속이 실제 거주할 경우만 인정. 형제·지인은 불가.</li>\n<li><strong>통지 기한</strong> — 계약 만료 6개월~2개월 전 사이에 갱신 거절 의사를 통지해야 유효. 이 기간을 넘기면 자동갱신.</li>\n<li><strong>실거주 이행</strong> — 거절 후 실제로 입주해야 하며, 제3자에게 임대하면 손해배상 의무 발생.</li>\n<li><strong>임차인 우선갱신권</strong> — 임차인은 최초 2년 + 1회 2년(총 4년)의 갱신 청구권이 있어, 이 기간 내 갱신 거절은 엄격히 제한됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통지 시기와 실거주 의무 이행 여부 두 가지를 반드시 확인하세요.</blockquote>',
      },
      {
        title: 'Q. 이주비·중개수수료·이사비를 청구할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 손해배상 청구 가능성이 있습니다. 아래 항목을 확인하세요.</strong></p>\n<ul>\n<li><strong>손해배상 기준</strong> — 주택임대차보호법 제6조의3 제5항: 임대인이 갱신 거절 후 2년 내 정당한 사유 없이 제3자에게 임대하면 임차인에게 손해배상 의무 발생.</li>\n<li><strong>청구 가능 항목</strong> — 이사비·중개수수료·인상된 임대료 차액·교육 전학 비용 등. 손해배상 상한은 갱신 거절 당시 임대료의 3개월분과 실손해액 중 큰 금액.</li>\n<li><strong>손해 입증</strong> — 이사 영수증·부동산 계약서·비교 임대료 자료를 보존해두면 청구액 입증이 가능합니다.</li>\n<li><strong>협상 레버리지</strong> — 임대인이 제3자에게 임대하기 전이라도 실거주 의사가 없다는 정황이 있으면 사전 협상이 유리해질 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 갱신 거절 상황, AI로 먼저 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">AI가 손해배상 청구 가능성과 협상 포인트를 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">전세 갱신 거절 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — KLAC 반환 소송 절차 준용',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 안내 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 수집 (즉시)</strong> — 갱신 거절 통지서·날짜·방식 보존. 2년 내 임대인 또는 제3자 입주 여부를 확인하기 위한 등기부등본 정기 열람.</li>\n<li><strong>2단계 — 내용증명 발송</strong> — 이사비·중개수수료 청구 의사를 내용증명으로 임대인에게 통보. 시효 중단 효과 + 협상 압박.</li>\n<li><strong>3단계 — 손해 정산 협상</strong> — 임대인과 직접 협상 또는 부동산 전문 변호사·법률구조공단(132) 조력.</li>\n<li><strong>4단계 — 지급명령 또는 소송</strong> — 협상 불성립 시 관할 지방법원에 지급명령 신청(1~2개월 결정) 또는 손해배상소송 제기.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 이사 후 2년이 경과하면 임대인의 실거주 의무 확인이 어려워집니다. 이사 후 6개월~1년 내 등기부등본으로 임대인 직접 거주 여부를 주기적으로 확인하세요.</blockquote>',
      },
      {
        title: 'Q. 임대인이 실거주를 핑계로 내보낸 뒤 다른 사람에게 임대했어요',
        content:
          '<p><strong style="color:#1e3a5f">A. 이 경우 손해배상 청구 가능성이 높은 상황으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>입증 방법</strong> — 등기부등본에 새 임차인 전입·새 임대차계약 체결 이력 확인. 부동산 거래 신고 자료도 활용 가능.</li>\n<li><strong>청구 시효</strong> — 손해를 알게 된 날로부터 3년, 불법행위일로부터 10년 내 청구.</li>\n<li><strong>손해 항목 정리</strong> — 이사비 영수증 + 이전 임대료와 현 임대료 차액(월 단위) + 중개수수료 영수증 + 전학·이사 관련 부대비용.</li>\n<li><strong>주의사항</strong> — 새 임차인을 상대로 직접 청구는 어렵고, 임대인에게 손해배상 청구가 원칙입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인이 갱신 거절 후 2년 내 제3자에게 임대한 사실을 입증하면 주택임대차보호법 제6조의3 제5항에 따른 손해배상 청구가 유력한 경로입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금 반환의무 이행불능과 손해배상 청구',
        summary:
          '대법원 2024다321973 사건(대법원, 2025.05.15 선고)에서 법원은 임대인이 새 임차인이 없으면 보증금을 반환할 수 없다는 취지를 명백히 한 경우, 임차인이 인도의무 이행을 제공하지 않더라도 임대인의 이행지체를 이유로 손해배상을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '임대인이 갱신 거절 후 보증금 반환이나 이주 협조를 거부한다면 손해배상 청구 절차를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '갱신 거절 통지를 구두로만 받았는데 효력이 있나요?',
        answer:
          '<strong>구두 통지도 법적으로 유효할 수 있지만 입증이 어렵습니다.</strong> 통지 내용을 문자·카카오톡으로 확인받거나 내용증명으로 반박해두는 것이 좋아요.',
      },
      {
        question: '임대인 직계비속이 입주하겠다고 하는 경우도 갱신 거절 사유가 되나요?',
        answer:
          '<strong>직계존속·직계비속은 갱신 거절 사유에 해당합니다.</strong> 다만 실제로 입주했는지를 이후에 확인해야 허위 거절 여부를 판단할 수 있어요.',
      },
      {
        question: '갱신 기간 2년이 아직 남아있는데 임대인이 갱신을 거절한다고요',
        answer:
          '<strong>임차인의 갱신 청구권(1회 2년)은 만료 6개월~2개월 전에 행사해야 합니다.</strong> 이미 갱신 기간이 진행 중이라면 해당 기간 만료 전 다음 갱신을 검토하는 시점에서 다시 판단하세요.',
      },
      {
        question: '이주비 협상이 잘 안 되면 소송을 해야 하나요?',
        answer:
          '<strong>지급명령 신청이 소송보다 빠르고 비용이 저렴합니다.</strong> 금액과 사실관계에 다툼이 없다면 지급명령(1~2개월 결정)을 먼저 고려하세요.',
      },
      {
        question: '이사한 지 1년이 지났는데도 청구할 수 있나요?',
        answer:
          '<strong>손해를 안 날로부터 3년 내라면 청구 가능합니다.</strong> 임대인이 제3자에게 임대한 시점을 알게 된 날부터 시효가 진행되므로, 등기부등본으로 확인한 날이 기준이 됩니다.',
      },
    ],
    cta: { text: '계약 종료 후 무엇부터 해야 하는지 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '계약갱신요구권 행사 방법과 기한', href: '/guide/jeonse/jeonse-renewal-right-exercise' },
      { label: '임대인 실거주 갱신 거절 손해배상', href: '/guide/jeonse/jeonse-renewal-refused-damages' },
      { label: '전세 계약 종료 보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-lease-right-registration' },
      { label: '전세보증금 반환 소송 총정리', href: '/guide/jeonse/jeonse-deposit-return-lawsuit' },
    ],
  },
];
