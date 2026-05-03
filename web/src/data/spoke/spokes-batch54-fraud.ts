import { SpokePage } from '../spoke-pages';

// batch54 fraud 5개: 중고차 미터기·사고이력 은폐 + 메신저 가족사칭 환급 + NFT/디지털자산 리딩방 + 무자본 갭투자 분양사기 가해자측 + 친구·지인 빌려주고 잠적
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 중고차를 정상 매물로 알고 산 매수인이 미터기 조작·사고이력 은폐를 뒤늦게 발견했을 때 KCA 피해구제 + 자동차관리법 위반 + 사기 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 카카오톡·문자로 가족·자녀를 사칭한 메신저피싱에 걸려 송금한 피해자가 즉시 지급정지 → 통신사기피해환급법 환급 → 채권소멸공고 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 NFT·디지털자산 리딩방·디스코드 단톡방에서 "수익 보장·내부 정보" 명목 투자 권유로 손실 본 피해자가 자본시장법·유사수신·가상자산이용자보호법 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 무자본 갭투자·임대사업자가 다수 분양 계약자에게 "수익률 보장·전세보증금 활용" 명목 분양사기 혐의를 받고 있을 때 사기·특정경제범죄가중처벌법·임대차보증금 반환 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 친구·지인에게 돈을 빌려주고 차용증 없이 잠적당한 채권자가 지급명령·소액심판·사기 고소·재산조회 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch54Fraud: SpokePage[] = [
  // ─── 1. fraud / used-car-meter-history-concealed ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-meter-history-concealed',
    keyword: '중고차 미터기 조작 사고이력 은폐 사기',
    questionKeyword: '중고차 1,800만원에 샀는데 미터기 5만km 조작 + 침수·사고이력 숨긴 차였어요. 환불·배상 가능한가요?',
    ctaKeyword: '중고차 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '중고차 미터기 조작·사고이력 은폐 — 환불·고소 4단계 | 로앤가이드',
      description:
        '중고차 미터기 조작이나 침수·사고이력 은폐 피해라면 KCA 피해구제 + 자동차관리법 + 사기 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"중고차 매매상사에서 &lsquo;무사고·주행거리 8만km&rsquo; 광고 보고 1,800만원에 샀어요. 정비소에서 점검하니 실제 주행 13만km, 침수·앞문 교체 이력까지 있더라고요. 매매상은 &lsquo;본인이 확인 안 했냐&rsquo;며 환불을 거부합니다." 중고차 미터기 조작과 사고이력 은폐는 단순 분쟁이 아니라 자동차관리법 위반 + 사기죄 + 표시광고법 위반이 동시에 검토되는 영역입니다. 자동차 365(www.car365.go.kr) 보험사고이력·자동차이력관리시스템(VHIMS)에서 차량 이력 비교 + KCA 피해구제 + 사기 고소를 동시 진행해볼 수 있어요. 정비소 점검결과서·계약서·매매상 광고 캡처가 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 사기의 5가지 핵심 패턴은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2개 이상이면 사기 + 자동차관리법 위반 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>"무사고·완전무사고" 광고 + 실제 사고이력</strong> — 자동차 365·보험사 사고이력에서 단순 도색 외 골격·프레임 교체 이력 발견. 표시광고법 + 사기.</li>\n<li><strong>주행거리 5만km 이상 차이</strong> — 광고 8만km vs 실제 13만km 같은 큰 차이는 미터기 조작 정황. 자동차관리법 제79조 위반(미터기 조작 처벌).</li>\n<li><strong>침수·전손·도난 이력 미고지</strong> — 자동차이력관리시스템 조회 시 드러나는 핵심 이력 은폐. 매매상·딜러 책임.</li>\n<li><strong>시세보다 30~50% 저렴</strong> — 같은 연식·주행거리 시세 대비 비현실적 할인. 사고차·침수차 매물 신호.</li>\n<li><strong>"성능점검기록부" 위·변조</strong> — 매매상이 발급한 점검부에 사고이력 누락·미터기 허위 기재. 자동차관리법 + 위계 사기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 자동차관리법 제79조(미터기 조작·점검부 위조) + 표시광고법 제3조(허위 광고) + 자동차매매업관리규정(매매업자 책임). 매매상사 통한 거래는 매매상 책임이 더 무거움.</blockquote>',
      },
      {
        title: 'Q. 환불·배상 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 트랙을 동시 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>매매상사·딜러 책임 → KCA 피해구제 + 민사</strong> — 매매상사는 등록업자라 자동차매매사업조합 보증금으로 일부 보전 가능. KCA 1372 트랙.</li>\n<li><strong>표시광고법 위반 → 공정위 신고</strong> — "무사고" 허위 광고는 공정거래위원회 1372/ftc.go.kr.</li>\n<li><strong>사기 형사 고소 → 경찰 ECRM</strong> — 매매상이 처음부터 이력 알고도 은폐했다면 사기죄. ecrm.police.go.kr.</li>\n<li><strong>자동차관리법 위반 신고 → 시·구청 자동차등록 부서</strong> — 미터기 조작·점검부 허위는 영업정지·등록취소 사유.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">매매상사·개인 거래·딜러 알선 여부에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량 이력 + 정비소 점검결과서 확보 (1주 내)</strong> — 자동차 365(car365.go.kr)에서 보험사고이력·소유권이전·총주행거리 조회. 가까운 정비소에서 사고·침수·미터기 점검결과서 발급(5만~15만원).</li>\n<li><strong>2단계 — 매매상사·딜러에 내용증명 (2주 내)</strong> — "광고 + 점검부 + 실제 차량 상태 차이 확인. 환불·배상 청구" 발송. 매매계약서·광고 캡처·점검부 첨부.</li>\n<li><strong>3단계 — KCA 피해구제 + 시·구청 신고</strong> — 한국소비자원 1372 → 피해구제 신청. 자율 해결 30일 → 분쟁조정 30일. 동시에 관할 시·구청 자동차등록 부서에 자동차관리법 위반 신고.</li>\n<li><strong>4단계 — 사기 고소 + 민사</strong> — 매매상이 이력을 알고도 은폐한 정황(점검부 작성·내부 시스템 조회 기록)이 있다면 ECRM 사기 고소. 민사 손해배상은 시세 차액 + 정신적 손해.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "본인이 확인 안 했으니 본인 책임"이라는 매매상 주장은 자동차매매업관리규정상 매매상의 점검·고지 의무를 면제하지 않습니다. 매매상사는 직접 책임 주체.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (중고차 환불·점검부 위조 분쟁)</li>\n<li><strong>자동차 365</strong> — car365.go.kr (보험사고이력·소유권이전·주행거리 조회 무료)</li>\n<li><strong>공정거래위원회</strong> — 1372 / ftc.go.kr (표시광고법 위반 신고)</li>\n<li><strong>관할 시·구청 자동차등록 부서</strong> — 자동차관리법 위반(미터기 조작·점검부 위조) 신고</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리장치 입력 매개 기망과 사람에 대한 사기죄',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 정보처리장치에 정보를 입력해 그 결과로 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. 중고차 매매에서도 매매상이 자동차이력관리시스템·점검부에 허위 정보를 기재해 매수인이 차량 상태를 잘못 인식하고 매수했다면 단순 채무불이행을 넘어 사기 구조로 평가될 수 있다는 시사점이 있습니다.',
        takeaway: '중고차 미터기 조작·사고이력 은폐는 매매상의 처음부터의 인식·은폐 의도가 입증되면 사기·자동차관리법 위반·표시광고법으로 평가될 수 있어, 광고 캡처·점검부·정비소 점검결과서·자동차 365 조회 결과를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '매매상이 "성능점검부에 적힌 대로다"라며 책임을 미룹니다',
        answer:
          '<strong>점검부 자체가 위·변조됐을 가능성이 있고 매매상은 점검부 정확성에 대한 책임 주체입니다.</strong> 자동차매매업관리규정상 매매상은 차량 상태 고지 의무가 있어 점검부 핑계로 면책되지 않아요. 정비소 점검결과서로 점검부와의 차이 입증이 핵심.',
      },
      {
        question: '개인 직거래(당근·중고차 카페)에서 산 차량도 가능한가요?',
        answer:
          '<strong>개인 거래도 사기 입증 시 형사·민사 가능하지만 KCA 트랙은 제한적입니다.</strong> 개인 판매자가 사고이력·미터기 조작을 알고도 은폐한 정황이 입증되면 사기죄 + 민사 손해배상. 자동차 365 + 정비소 점검결과서가 핵심.',
      },
      {
        question: '구매 후 6개월 지났는데 환불·배상 가능한가요?',
        answer:
          '<strong>사기 고소 공소시효는 7년, 민사 손해배상은 안 날부터 3년·발생일부터 10년이라 충분합니다.</strong> 다만 KCA 분쟁조정은 사건 발생 후 3년 내 권장. 정비소 점검·정황 발견 시점이 기산점.',
      },
      {
        question: '시세 차액만큼만 받으면 되나요? 위자료도 청구 가능한가요?',
        answer:
          '<strong>시세 차액 + 정비비 + 차량 사용 차질로 인한 손해 + 위자료까지 청구 가능합니다.</strong> 사기 입증 시 위자료 100~300만원대 사례 보고. 매매상사는 자동차매매사업조합 보증금에서 우선 보전 가능.',
      },
      {
        question: '같은 매매상에서 다른 피해자가 있으면 어떻게 활용하나요?',
        answer:
          '<strong>5명 이상 모이면 공동 고소단·공동 KCA 신청 가능, 수사 우선순위 상승.</strong> 같은 패턴(미터기 조작·이력 은폐) 다수 피해는 매매상의 처음부터의 사기 의도 입증에 결정적. 시·구청 영업정지 신고도 효과적.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '중고차 미터기 조작 사기', href: '/guide/fraud/fraud-used-car-odometer-rollback' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: 'SNS 광고 환불 거부 사기', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '명품 가품 판매 사기 환불', href: '/guide/fraud/fraud-luxury-fake-counterfeit' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 2. fraud / messenger-family-impersonation-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-messenger-family-impersonation-recovery',
    keyword: '메신저피싱 가족사칭 환급 절차',
    questionKeyword: '카카오톡으로 딸이라며 "휴대폰 고장났어, 급히 송금해줘" 해서 800만원 보냈는데 사기였어요. 환급 가능한가요?',
    ctaKeyword: '메신저피싱 가족사칭 환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '메신저피싱 가족사칭 송금 — 환급 5단계 정리 | 로앤가이드',
      description:
        '카카오톡·문자로 가족·자녀 사칭 송금 피해라면 즉시 지급정지 + 통신사기피해환급법 + 채권소멸공고 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"&lsquo;엄마, 폰 고장났어. 이 번호로 800만원 친구 계좌로 보내줘&rsquo; 카카오톡으로 딸 이름·프로필 사진까지 똑같이 와서 의심 없이 송금했어요. 30분 뒤 통화해보니 딸은 멀쩡했고, 송금 계좌는 이미 인출 직전이라더군요." 가족·자녀 사칭 메신저피싱은 전기통신금융사기피해환급법(2024.10 개정 적용) 대상으로 통신사기피해환급법 트랙으로 환급 절차가 가능합니다. 송금 직후 30분이 지급정지 골든타임이고, 1단계 즉시 신고 → 2단계 지급정지 → 3단계 환급 신청 → 4단계 채권소멸공고 → 5단계 환급의 5단계로 진행돼요. 지연이 길수록 잔액 인출로 회수 가능성이 떨어집니다.</p>',
    sections: [
      {
        title: '메신저피싱 가족사칭 5가지 핵심 신호',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 2개 이상이면 송금 전 반드시 본인 통화로 확인이 안전합니다.</strong></p>\n<ul>\n<li><strong>"휴대폰 고장·분실·해외 출장" 핑계</strong> — 통화 회피 명분. 가족사칭 메신저피싱의 가장 흔한 시작.</li>\n<li><strong>새 번호·새 카톡 ID로 접근</strong> — "이 번호 저장해줘" 요구. 본 가족 카톡과 별개 ID.</li>\n<li><strong>"친구 계좌·회사 계좌"로 송금 요구</strong> — 본인 계좌 아닌 제3자 계좌. 차명·대포통장 정황.</li>\n<li><strong>"급한 상황·30분 안에 보내야"</strong> — 시간 압박으로 본인 통화 못하게 차단.</li>\n<li><strong>"엄마·아빠·언니" 호칭 + 프로필 사진 일치</strong> — SNS·카톡 정보 수집 후 정교한 사칭.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법(통신사기피해환급법) + 형법 제347조 사기죄 + 정보통신망법(개인정보 도용). 메신저피싱도 2024.10 개정으로 환급법 대상에 명시 포함.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원·경찰청 공식 절차를 참고하면 아래 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 또는 1332 신고 (30분 골든타임)</strong> — 송금 직후 112 통합신고센터 또는 금융감독원 1332. 송금 은행 콜센터에 동시 연락. 잔액 보존이 환급의 결정적 조건.</li>\n<li><strong>2단계 — 송금 은행 지급정지 신청 (당일)</strong> — 신고 접수 → 송금 계좌 지급정지. 통신사기피해환급법 제3조에 따라 사기 의심거래는 즉시 동결. 잔액 한도에서 환급 보전.</li>\n<li><strong>3단계 — 경찰서 사건사고사실확인원 + 피해구제 신청 (1주 내)</strong> — 가까운 경찰서 방문 → 사기 신고 → 사건사고사실확인원 발급. 송금 은행에 피해구제 신청서 제출.</li>\n<li><strong>4단계 — 채권소멸공고 (2개월)</strong> — 금융감독원이 송금 계좌 채권소멸공고. 기간 중 사기범이 이의제기 안 하면 잔액 환급 확정.</li>\n<li><strong>5단계 — 잔액 비율 환급 (공고 종료 후)</strong> — 잔액 한도 내에서 피해자별 비율 환급. 동일 계좌 다수 피해자면 비율 분배. 미회수분은 사기 고소 + 민사로 별도 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 시점·은행·잔액 보존 여부에 따라 환급률이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">환급·신고에 아래 자료를 미리 정리해두면 처리가 빨라집니다.</strong></p>\n<ul>\n<li><strong>카카오톡·문자 대화 전체 캡처</strong> — 사칭자 ID·번호·발언·송금 요청 시점 모두 시간순.</li>\n<li><strong>송금 영수증·이체확인서</strong> — 송금 일자·금액·수신 계좌·은행. 인터넷뱅킹·앱·창구 모두.</li>\n<li><strong>112·1332 신고 접수번호·시각</strong> — 신고 시점 입증. 30분 이내 신고가 환급률 결정.</li>\n<li><strong>경찰서 사건사고사실확인원</strong> — 가까운 경찰서 방문 발급. 환급·재발급 신청 필수.</li>\n<li><strong>피해구제 신청서</strong> — 송금 은행 양식. 영업점·고객센터·인터넷 신청 가능.</li>\n<li><strong>본 가족과의 통화·카톡 비교 자료</strong> — 사칭 ID와 본 가족 ID 차이 입증.</li>\n<li><strong>주민등록등본·신분증 사본</strong> — 환급 신청자 본인 확인용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "본인이 송금했으니 본인 책임"으로 자책하다 신고 늦어지면 잔액이 모두 인출돼 환급률 0%로 떨어집니다. 30분 안 신고가 환급의 결정적 조건.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 메신저피싱 가족사칭 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"메신저피싱은 환급법 적용 안 된다"는 잘못된 정보</strong> — 2024.10 통신사기피해환급법 개정으로 메신저피싱·SNS 사칭도 환급 대상 명시 포함.</li>\n<li><strong>"본인이 자발적 송금했으니 환급 불가"</strong> — 사기 의도가 입증되면 자발적 송금이라도 환급 가능. 통신사기피해환급법은 피해자 과실과 무관하게 잔액 환급.</li>\n<li><strong>"신고 늦었으니 포기"</strong> — 30분 지나도 잔액 일부 보전 가능. 채권소멸공고로 2개월간 동결되면 일부라도 환급. 즉시 신고 우선.</li>\n<li><strong>"수수료·세금 명목 추가 송금하면 환급된다"</strong> — 100% 2차 사기. 환급은 절대 추가 송금 요구하지 않음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 112 또는 ECRM(ecrm.police.go.kr) / 금융감독원 1332 또는 fss.or.kr / 송금 은행 고객센터 / 한국인터넷진흥원 KISA 118 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단체구성·활동 + 전기통신금융사기피해환급법 위반 방조 포괄일죄',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 폭력행위 등 처벌에 관한 법률 제4조 제1항의 범죄단체 구성·가입·활동 행위가 포괄일죄 관계에 있고 공소시효는 최종 범죄행위 종료 시부터 진행한다고 판시했습니다. 메신저피싱 가족사칭 사건에서도 사칭자·자금세탁 인출자·범죄단체 운영자가 조직적으로 가담했다면 단순 사기를 넘어 단체적·반복적 행위로 평가되어 양형이 무거워질 수 있다는 시사점이 있습니다.',
        takeaway: '메신저피싱 가족사칭은 사칭자·인출 가담자·범죄단체 운영자까지 책임이 미칠 수 있어, 카톡 캡처·송금 흐름·112 신고 시각을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '신고가 1시간 늦었는데 환급 가능한가요?',
        answer:
          '<strong>잔액이 일부라도 남아있으면 환급 가능합니다. 일단 즉시 신고해보세요.</strong> 30분이 골든타임이지만 사기범이 모든 잔액을 즉시 인출 못하는 경우도 많아요. 채권소멸공고 2개월 동안 잔액 보전.',
      },
      {
        question: '딸 카톡 ID와 똑같이 와서 의심 못 했어요. 환급 거부될까요?',
        answer:
          '<strong>피해자 과실은 환급 거부 사유가 아닙니다. 통신사기피해환급법은 피해자 무과실 환급 원칙.</strong> 다만 자발적 동의·공모 의심 사례는 별도. 메신저피싱은 정교한 사칭이라 일반인 수준 의심 못한 것이 정상.',
      },
      {
        question: '딸 카톡 사진·이름이 도용됐어요. 딸도 신고해야 하나요?',
        answer:
          '<strong>개인정보 도용 별도 신고 권장합니다(KISA 118 또는 카카오 신고센터).</strong> 동일 사칭이 다른 친척에게도 올 수 있어 카톡 본사에 ID 정지 요청. 정보통신망법 위반 별도 처벌 가능.',
      },
      {
        question: '환급률이 30%만 됐어요. 나머지는 어떻게 회수하나요?',
        answer:
          '<strong>미회수분은 사기 고소 + 민사 손해배상으로 별도 진행 가능합니다.</strong> 사칭자 신원이 특정되면 부대 배상명령(형사 부대) 또는 민사. 채권소멸공고 후 잔액 환급은 1차 회수, 추가 회수는 형사·민사 트랙.',
      },
      {
        question: '카드 결제로 송금했는데 환급법 적용되나요?',
        answer:
          '<strong>카드 결제는 환급법보다 카드사 차지백 트랙이 빠릅니다.</strong> 카드사에 사기 사유 이의제기 + 차지백. 통신사기피해환급법은 계좌이체 위주. 결제 수단별 트랙 분기.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '카톡 친구 사칭 송금 사기', href: '/guide/fraud/fraud-friend-kakao-impersonation-emergency' },
      { label: '보이스피싱 환급법 적용', href: '/guide/fraud/fraud-voice-phishing-relief-law-application' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
      { label: '계좌 동결 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 3. fraud / nft-digital-asset-leading-room ───
  {
    domain: 'fraud',
    slug: 'fraud-nft-digital-asset-leading-room',
    keyword: 'NFT 디지털자산 리딩방 사기',
    questionKeyword: '디스코드 NFT 리딩방에서 "민팅 후 5배 보장"이라더니 출시 후 가격이 99% 폭락했어요. 회수 가능한가요?',
    ctaKeyword: 'NFT 리딩방 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'NFT·디지털자산 리딩방 사기 — 회수 4단계 | 로앤가이드',
      description:
        'NFT·디지털자산 디스코드 리딩방·SNS 단톡방에서 수익 보장·내부 정보 명목 투자 손실이라면 자본시장법 + 사기 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"디스코드 NFT 리딩방에서 &lsquo;프리세일 참여하면 민팅 후 5배 보장. 내부 정보&rsquo;라며 입장료 200만원 + 민팅 비용 1,500만원 송금했어요. 출시 직후 운영자가 잠적하고 가격이 99% 폭락(러그풀)했습니다." NFT·디지털자산 리딩방 사기는 자본시장법상 미인가 투자권유 + 유사수신행위 + 사기 + 가상자산이용자보호법(2025.07 시행) 대상이 결합되는 영역입니다. "수익 보장·내부 정보·프리세일 우선권" 같은 문구는 자본시장법 제56조(미인가 투자자문) 위반 신호이고, 디스코드·텔레그램 캡처 + 송금 영수증 + 지갑 주소 보전이 출발점이에요.</p>',
    sections: [
      {
        title: 'Q. NFT·디지털자산 리딩방 사기의 5가지 핵심 신호는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2개 이상이면 자본시장법 + 사기 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>"수익률 보장·원금 보장" 문구</strong> — 자본시장법 제55조(손실보전 약속 금지) 위반. 정상 자문업자는 절대 수익 보장 안 함.</li>\n<li><strong>"내부 정보·프리세일 우선권" 명목</strong> — 자본시장법 제174조(미공개정보 이용) 위반 가능성. 합법 정보면 광고할 필요 없음.</li>\n<li><strong>입장료·VIP 등급·자문 수수료 단계 결제</strong> — 단계별 결제로 손실 누적 유도. KCA 분쟁조정 + 환급 트랙.</li>\n<li><strong>익명 운영자·프로필 사진만 공개</strong> — 실명·사업자등록·자본시장법 등록번호 비공개. 전자상거래법 + 자본시장법 위반.</li>\n<li><strong>러그풀(개발자 잠적) 직후 디스코드·트위터 폐쇄</strong> — 처음부터 개발 의도 없이 자금 회수만 목적. 사기 + 가상자산이용자보호법 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 자본시장법 제55조·제56조(미인가 투자권유·손실보전 약속) + 유사수신행위 규제법 + 가상자산이용자보호법(2025.07 시행) + 특정금융정보법.</blockquote>',
      },
      {
        title: 'Q. 자본시장법 위반·러그풀·운영자 잠적 — 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 트랙을 동시 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>자본시장법 위반 → 금감원·검찰</strong> — 미인가 투자권유·손실보전 약속은 금융감독원 1332/fss.or.kr + 검찰 직접 신고. 5년 이하 징역.</li>\n<li><strong>러그풀(개발자 잠적) → 사기 형사 고소</strong> — 처음부터 개발·운영 의도 없이 자금 회수만 목적이면 사기 + 자금세탁방지법 위반.</li>\n<li><strong>유사수신 → 검찰·금감원</strong> — 다수 투자자에게 원금·수익 약속하며 자금 모집. 유사수신행위 규제법 위반.</li>\n<li><strong>지갑 추적 → 거래소 동결</strong> — 사기범 지갑이 국내 거래소(업비트·빗썸·코인원) 거치면 동결 요청. 가상자산이용자보호법(2025.07) 시행 후 거래소 협조 의무 강화.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자 형태·결제 방식·운영자 신원에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 디스코드·텔레그램·SNS 캡처 + 지갑 주소 보전 (당일 내)</strong> — 운영자 발언·수익 약속·민팅 일정·송금 요청 모두 시간순. 본인이 보낸 지갑 주소 + 운영자 지갑 주소 + 트랜잭션 해시.</li>\n<li><strong>2단계 — 거래소 동결 요청 (1주 내)</strong> — 운영자 지갑이 국내 거래소 거쳤다면 거래소 고객센터에 동결 요청. 경찰 영장 통해 KYC 정보 조회 가능.</li>\n<li><strong>3단계 — 금감원·KISA 신고 + 형사 고소</strong> — 금융감독원 1332(자본시장법·유사수신) + KISA 118(개인정보 도용) + 경찰 ECRM(ecrm.police.go.kr) 사기 고소 동시.</li>\n<li><strong>4단계 — 다수 피해자 공동 고소단</strong> — 같은 리딩방·같은 운영자 피해자 5명 이상 모이면 공동 고소단 구성. 수사 우선순위 상승, 변호사 비용 분담.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "본인이 투자해서 손실 본 거니 본인 책임"이라며 신고 안 하면 같은 운영자가 다른 피해자를 계속 만듭니다. 자본시장법 위반은 손실 본 본인뿐 아니라 다음 피해자 보호 차원의 신고.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>금융감독원</strong> — 1332 / fss.or.kr (자본시장법·유사수신·디지털자산 분쟁)</li>\n<li><strong>한국인터넷진흥원 KISA</strong> — 118 / krcert.or.kr (개인정보 도용·해킹 신고)</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>금융정보분석원 FIU</strong> — kofiu.go.kr (의심거래·자금세탁 신고)</li>\n<li><strong>거래소 고객센터</strong> — 업비트·빗썸·코인원 (지갑 동결·KYC 협조)</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기적 부정거래행위와 광고·정보 표시 의무',
        summary:
          '대법원 2024도11686 사건(대법원, 2026.01.15 선고)에서 법원은 자본시장법상 부정한 수단·계획·기교의 의미를 구체적 정황과 광고·표시 의무 이행 여부를 종합해 판단해야 한다고 판시했습니다. NFT·디지털자산 리딩방 사기에서도 "수익률 보장·내부 정보" 광고 + 미인가 투자권유 + 잠적이 결합된 구조라면 자본시장법 위반·유사수신·사기죄가 결합돼 평가될 수 있다는 시사점이 있어, 광고·결제·지갑 흐름을 일관된 시간선으로 정리해두면 도움이 됩니다.',
        takeaway: 'NFT·디지털자산 리딩방 사기는 자본시장법·유사수신·가상자산이용자보호법이 결합되어 단순 투자 손실을 넘어 형사 책임으로 평가될 수 있어, 디스코드·텔레그램 캡처·지갑 주소·트랜잭션 해시를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '본인이 투자 결정한 거라 책임을 못 묻지 않나요?',
        answer:
          '<strong>본인 결정과 별개로 운영자가 자본시장법 위반·사기 의도가 입증되면 책임 가능합니다.</strong> 미인가 투자권유·손실보전 약속·러그풀은 본인 동의 여부와 무관하게 형사 책임. 손실 회수는 별개 트랙.',
      },
      {
        question: 'NFT는 코인 아니라 환급법 적용 안 되나요?',
        answer:
          '<strong>가상자산이용자보호법(2025.07 시행) 대상 + 자본시장법 + 유사수신 트랙 적용 가능합니다.</strong> NFT도 가상자산 정의에 포함되는 경우 다수. 거래소 동결 + 형사 고소 + 민사 트랙.',
      },
      {
        question: '디스코드 운영자가 외국인이면 추적 불가인가요?',
        answer:
          '<strong>인터폴 + 디스코드 본사 협조 + 거래소 KYC + 블록체인 분석으로 추적 가능합니다.</strong> 시간 걸려도 다수 피해자 공동 고소로 우선순위 올림. 외국 FIU 공조도 활용.',
      },
      {
        question: '리딩방 입장료만 냈는데 사기 고소 가능한가요?',
        answer:
          '<strong>입장료·VIP 등급비도 사기 입증 시 회수 가능합니다.</strong> 자본시장법상 미인가 자문·수익 보장 약속이 입증되면 입장료 자체가 사기 피해. 결제 영수증·계좌이체 내역 보전.',
      },
      {
        question: '운영자가 "민팅 비용은 가스비라 환불 불가"라고 합니다',
        answer:
          '<strong>가스비 핑계로 면책 안 됩니다. 처음부터 개발 의도 없이 모금만 목적이었다면 가스비 포함 전액 사기 피해.</strong> 화이트페이퍼·로드맵 미이행이 결합되면 사기 의도 입증 강화.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '러그풀 가상자산 사기 증거', href: '/guide/fraud/fraud-crypto-rug-pull-evidence' },
      { label: '암호화폐 투자 사기 신고', href: '/guide/fraud/fraud-crypto-investment-scam-report' },
      { label: '코인 펌프앤덤프 사기', href: '/guide/fraud/fraud-crypto-pump-dump-coin' },
      { label: '코인 P2P/OTC 직거래 사기', href: '/guide/fraud/fraud-coin-p2p-otc-scam' },
      { label: '암호화폐 믹서 자금 추적', href: '/guide/fraud/fraud-crypto-mixer-tracing-steps' },
    ],
  },

  // ─── 4. fraud / gap-investment-presale-accused ───
  {
    domain: 'fraud',
    slug: 'fraud-gap-investment-presale-accused',
    keyword: '무자본 갭투자 분양사기 가해자 대응',
    questionKeyword: '무자본 갭투자로 다세대주택 30채 분양했는데 다수 임차인이 사기 고소했어요. 어떻게 대응해야 하나요?',
    ctaKeyword: '무자본 갭투자 사기 가해자 대응',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '무자본 갭투자 분양사기 가해자 대응 — 검찰 조사 4단계 | 로앤가이드',
      description:
        '다수 분양 계약자에게 갭투자·전세보증금 활용 명목 분양사기 혐의를 받고 있다면 사기·특경법·임대차보증금 4단계 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"무자본 갭투자로 다세대주택 30채를 매입·분양했는데 분양 후 시세 하락 + 임차인 보증금 미반환으로 다수 임차인이 사기 고소했어요. 검찰에서 출석요구서가 왔습니다." 무자본 갭투자·다수 분양 모델로 임대차보증금 미반환·시세 차익 회수가 어려워진 사례가 사기 혐의를 받고 있다면, 처음부터 변제 의사·능력이 있었는지가 다툼의 핵심입니다. 사기 고의 부인 + 시장 변동 + 변제 노력 입증이 방어의 출발점이고, 이득액 5억원 이상이면 특정경제범죄가중처벌법(특경법) 적용 검토가 필요해요. 조사 출석 전 변호인 선임이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 갭투자 분양사기 혐의를 받고 있다면 — 다툼 포인트 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사기죄 성립의 핵심은 "처음부터의 변제 의사·능력 부재"입니다. 아래 5가지 포인트를 정리해두면 도움이 됩니다.</strong></p>\n<ul>\n<li><strong>매입 시점 자본·LTV 비율</strong> — 자기자본 비율·LTV·DSR 데이터로 매입 시점 변제 능력 입증. 정상 갭투자는 위법 아님.</li>\n<li><strong>분양·임대차 시점 시장 상황</strong> — 매입 시점 시세 vs 분양 시점 시세 데이터. 시장 폭락 책임은 본인 사기와 별개.</li>\n<li><strong>변제 노력 입증</strong> — 보증금 일부 반환·재매각·차환 시도·임차인과의 협상 기록. 변제 노력은 사기 고의 부인의 핵심.</li>\n<li><strong>임차인에게 고지한 정보 정확성</strong> — 등기부·근저당·임대인 자산 상태 고지 여부. 허위 고지가 없었다면 사기 의도 부인.</li>\n<li><strong>이득액·피해 규모</strong> — 5억원 이상이면 특경법(3년 이상 유기징역). 50억원 이상이면 특경법 가중. 합의·변제로 이득액 산정에 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 특정경제범죄가중처벌법(이득액 5억원 이상) + 임대차보호법 + 주택임대차보호법(보증금 반환 의무). 사기 고의 부인이 핵심 방어선.</blockquote>',
      },
      {
        title: 'Q. 검찰 조사 전 준비할 것은 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 준비를 권장합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 선임 (출석 전)</strong> — 다수 피해자·특경법 가능성이 있다면 사기 전문 변호사 선임이 우선. 대한법률구조공단(132) 무료 상담은 자격 요건 있어 일반적으로는 사선 변호인.</li>\n<li><strong>2단계 — 매입·분양 시점 자료 정리</strong> — 매입 계약서·LTV 자료·자기자본 입증·은행 차입 내역. 매입 시점 변제 능력 입증의 핵심.</li>\n<li><strong>3단계 — 시장 상황·변제 노력 자료</strong> — 시세 데이터(KB 부동산·국토부 실거래가)·재매각 시도·임차인과의 카톡·문자·일부 변제 영수증.</li>\n<li><strong>4단계 — 합의·변제 우선 검토</strong> — 임차인과 일부 합의·변제 시 사기 고의 부인에 유리. 합의금 협상 + 분할 변제 계획. 합의 성립 시 양형 감경 사유.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">매입 시점·분양 시점·변제 노력 자료에 따라 방어 전략이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 다수 임차인 합의·변제 전략은 어떻게 짜나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·변제 우선순위와 분할 계획이 핵심입니다.</strong></p>\n<ul>\n<li><strong>전세보증금 미반환 임차인 우선</strong> — 보증금 미반환은 형사·민사 동시 트랙. 일부 변제·분할 변제 협상 우선.</li>\n<li><strong>HUG·SGI 보증보험 가입 임차인은 보증금 회수 가능</strong> — 보증보험 가입 임차인은 사기 고소 동기 약함. 미가입 임차인 우선 협상.</li>\n<li><strong>재매각·차환으로 자금 마련</strong> — 보유 부동산 재매각·은행 차환으로 일부 보증금 반환. 변제 노력 입증.</li>\n<li><strong>분할 변제 합의서</strong> — 일시 변제 어려우면 분할 변제 합의서. 합의 성립 시 사기 고의 부인 + 양형 감경.</li>\n<li><strong>변호사 통한 다자 협상</strong> — 다수 임차인 동시 협상은 변호사 중재가 효율적. 합의 일관성 + 형평성 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "처음부터 사기 의도 없었다"는 주장만으로 부족합니다. 매입 시점 자기자본·LTV·시장 데이터 + 변제 노력 입증이 결정적. 검찰은 객관적 자료를 보고 판단.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>대한변호사협회 변호사정보센터</strong> — 사기·특경법 전문 변호사 검색 (klaw.or.kr)</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건). 일반 사기 사건은 사선 권장</li>\n<li><strong>HUG 주택도시보증공사</strong> — 1566-9009 (보증금 반환 보증 협조)</li>\n<li><strong>국토교통부 전세사기 피해지원센터</strong> — 1533-8119 (피해 임차인 측 동시 상담 채널 인지)</li>\n<li><strong>관할 검찰청·경찰서</strong> — 출석요구서 일정 조정 가능, 변호인 입회 통보</li>\n<li><strong>한국공인중개사협회</strong> — 분양 중개 시점 자료 발급 협조</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 누범사유와 형 실효의 관계',
        summary:
          '대법원 2025도15970 사건(대법원, 2026.01.29 선고)에서 법원은 금고 이상 형의 집행이 종료·면제된 후 3년 내 다시 금고 이상 죄를 범한 경우, 그 후 형이 형실효법 제7조에 따라 실효되었더라도 형법 제35조 제1항의 누범사유에 해당한다고 판시했습니다. 갭투자 분양사기 혐의를 받고 있는 경우에도 과거 동종 전과·집행 종료 시점이 누범 가중 사유가 될 수 있어, 사건 시간선과 전과 자료를 변호인과 정확히 정리해두면 도움이 됩니다.',
        takeaway: '갭투자 분양사기 혐의는 매입 시점 변제 능력·시장 상황·변제 노력이 핵심 다툼이고 동종 전과는 누범 가중 사유가 될 수 있어, 매입·분양 자료와 변제 노력 기록을 변호인과 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '시장 폭락 때문에 보증금 반환이 어려워진 건데 사기인가요?',
        answer:
          '<strong>처음부터 변제 의사·능력이 있었다면 시장 변동은 본인 책임 아닙니다.</strong> 매입 시점 자기자본·LTV·시장 정상 상황 데이터 입증이 핵심. 변제 노력(재매각·차환·일부 변제) 기록도 사기 고의 부인 자료.',
      },
      {
        question: '이득액 5억원 이상이면 특경법 적용된다는데 합의로 줄일 수 있나요?',
        answer:
          '<strong>합의·변제로 실손해를 줄이면 양형에 유리하지만 특경법 자체는 이득액 기준입니다.</strong> 다만 합의·변제는 양형의 가장 중요한 감경 사유. 분할 변제 합의서도 일정 영향.',
      },
      {
        question: '다수 임차인이 동시에 고소했는데 변호인 한 명으로 가능한가요?',
        answer:
          '<strong>가능하지만 사기·특경법 전문 변호사 + 부동산·임대차 전문 결합이 효과적입니다.</strong> 다수 사건 통합 관리 + 합의 일관성 + 형평성 확보. 사선 변호사 비용 부담은 합의 자금 우선순위와 균형 검토.',
      },
      {
        question: '임차인이 합의를 거부하면 어떻게 하나요?',
        answer:
          '<strong>형사 부대 배상명령 + 민사 화해권고로 분할 변제 가능합니다.</strong> 일방적 거부는 변제 노력 입증을 약화시키지만, 공탁·일부 변제 시도가 사기 고의 부인 자료. 변호인과 공탁 전략 검토.',
      },
      {
        question: '전세사기특별법으로 임차인이 보호받으면 본인 책임이 줄어드나요?',
        answer:
          '<strong>임차인 보호와 본인 형사 책임은 별개입니다.</strong> 전세사기특별법으로 임차인이 매입·우선매수권으로 보호받아도 본인 사기 혐의는 여전. 다만 실손해 감소는 양형에 일부 영향.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '부동산 이중계약 사기 회수', href: '/guide/fraud/fraud-real-estate-deposit-double-contract' },
      { label: '사기 종합 변호 전략', href: '/guide/fraud/fraud-accused-defense-strategy-guide' },
      { label: '사기 합의·양형 감경', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '사기 고의 부인 종합 변호', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '공인중개사 보증금 횡령', href: '/guide/fraud/fraud-realtor-deposit-embezzlement' },
    ],
  },

  // ─── 5. fraud / friend-loan-vanish-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-friend-loan-vanish-recovery',
    keyword: '친구 지인 빌려준 돈 잠적 회수',
    questionKeyword: '친구에게 차용증 없이 1,500만원 빌려줬는데 잠적했어요. 회수 가능한가요?',
    ctaKeyword: '친구 지인 빌려준 돈 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '친구·지인 빌려준 돈 잠적 — 회수 5단계 정리 | 로앤가이드',
      description:
        '친구·지인에게 차용증 없이 빌려준 돈을 잠적당했다면 지급명령 + 소액심판 + 사기 고소 + 재산조회 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"&lsquo;급한 일 있다, 한 달만&rsquo;이라며 친구가 1,500만원을 빌려갔어요. 차용증은 안 썼고 카톡으로 빌려준다고만 했죠. 6개월째 연락 두절·전화 차단입니다." 친구·지인 간 차용증 없는 대여금도 카톡·문자·계좌이체 기록이 있으면 회수 트랙이 다양합니다. 처음부터 변제 의사 없이 빌려갔다면 사기, 변제 의사는 있었으나 변제 안 하면 민사. 지급명령(2주 빠른 절차) → 소액심판 → 재산조회 → 강제집행 흐름이 일반적이고, 잠적·연락두절은 사기 고의 정황으로 검토 가능합니다. 카톡·계좌이체 내역만 있으면 시작할 수 있어요.</p>',
    sections: [
      {
        title: '차용증 없는 대여금도 회수 가능한 5가지 증거',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 중 하나만 있어도 민사 회수 시작이 가능합니다.</strong></p>\n<ul>\n<li><strong>계좌이체 내역·이체확인서</strong> — 송금 일자·금액·수신 계좌. 가장 강력한 증거.</li>\n<li><strong>카톡·문자 대화</strong> — "한 달만 빌려줘" / "변제할게" 같은 변제 약속 발언. 차용금 입증.</li>\n<li><strong>통화 녹취·음성 메시지</strong> — 변제 약속·연장 요청·잠적 직전 통화. 본인 동의 없는 녹취도 본인이 통화당사자면 합법.</li>\n<li><strong>제3자 증언·목격자</strong> — 빌려준 자리에 함께 있던 친구·가족 진술서.</li>\n<li><strong>SNS·메신저 대화 캡처</strong> — 인스타·페이스북·카톡 단톡방 발언. "빌렸다고 한 적 없다" 부인 차단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차용증 없어도 계좌이체 + 카톡으로 차용금 입증 가능. 처음부터 변제 의사·능력 부재 입증되면 형법 제347조 사기죄 + 민사. 변제 의사 있었다면 단순 민사.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">법원·KLAC·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 + 내용증명 (1주 내)</strong> — 카톡·계좌이체·통화녹취 시간순 정리. 상대 주소지로 "변제 청구 + 사기 고소 검토 통보" 내용증명. 법원 송달 + 시효 중단 효과.</li>\n<li><strong>2단계 — 지급명령 신청 (1~2주, 가장 빠른 트랙)</strong> — 법원에 지급명령 신청서 제출. 인지대 + 송달료(저렴). 상대가 2주 내 이의제기 안 하면 확정 → 강제집행 가능. KLAC 132 무료 상담 → 양식 안내.</li>\n<li><strong>3단계 — 이의제기 시 소액심판(3,000만원 이하)</strong> — 상대가 이의제기하면 본안 소송 전환. 3,000만원 이하면 소액심판(전자소송 가능, 빠르고 저렴).</li>\n<li><strong>4단계 — 사기 고소 병행 (잠적·연락두절 시)</strong> — 처음부터 변제 의사 없이 빌려간 정황(연락 차단·다중 차용·재산은닉)이 있으면 ECRM 사기 고소. 형사 압박 + 민사 회수.</li>\n<li><strong>5단계 — 강제집행 + 재산조회</strong> — 확정판결·지급명령 후 채무자 재산조회 신청. 부동산·예금·임금·보험 압류·추심. 재산명시·재산조회 + 채무불이행자 명부등재로 압박.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">증거 형태·금액·잠적 정황에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">지급명령·소액심판·고소에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>계좌이체 내역서·이체확인서</strong> — 인터넷뱅킹·앱·창구 모두. 송금 일자·금액·수신 계좌·은행.</li>\n<li><strong>카톡·문자 대화 전체 캡처</strong> — 차용 시점·변제 약속·연장·잠적 시점 시간순.</li>\n<li><strong>내용증명 발송 영수증</strong> — 우체국 등기 + 배달증명. 시효 중단 + 청구 의사 입증.</li>\n<li><strong>지급명령 신청서</strong> — 법원 양식. 채무자 인적사항 + 송달주소 + 청구 금액.</li>\n<li><strong>채무자 주소·주민번호 정보</strong> — 송달 가능 주소. 모르면 사실조회 신청(재산조회와 결합).</li>\n<li><strong>통화녹취·음성 메시지</strong> — 변제 약속 발언. 본인이 통화당사자면 합법 증거.</li>\n<li><strong>유사 피해자 명단</strong> — 같은 채무자에게 다른 사람도 빌려줬다면 사기 고의 입증 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "친구라 차용증 안 썼으니 회수 포기"가 가장 흔한 자해. 카톡·계좌이체만 있으면 충분히 시작 가능. 시효(상사채권 5년·일반채권 10년) 안에 시작.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 친구·지인 대여금 회수 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"빌려준 게 아니라 증여한 것"이라며 부인</strong> — 카톡·계좌이체에 "빌려준다·갚는다" 발언이 한 번이라도 있으면 차용금. 증여 주장은 채무자 입증 책임.</li>\n<li><strong>"차용증 없으니 소송 못 한다"는 잘못된 정보</strong> — 차용증은 입증 수단 중 하나. 계좌이체 + 카톡만으로도 충분히 시작 가능. 변호사 상담 5분이면 확인.</li>\n<li><strong>잠적했으니 회수 불가라며 포기</strong> — 사실조회·재산조회·주민등록말소 신청·채무불이행자 명부등재로 압박 가능. 시간 걸려도 회수 트랙 다수.</li>\n<li><strong>"한 달만 더 기다리면 갚는다"며 변제 연장 반복</strong> — 변제 연장 자체는 시효 중단 가능하지만 너무 오래 기다리면 채무자 재산은닉·도주. 내용증명 + 지급명령으로 빠른 절차 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 대법원 전자소송 시스템(ecfs.scourt.go.kr) / 관할 법원 민사신청과 / 경찰청 ECRM(ecrm.police.go.kr) / 한국소비자원 1372 / 신용회복위원회 1600-5500.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리장치 입력 매개 기망과 사람에 대한 사기죄',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 정보처리장치에 정보를 입력해 그 결과로 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. 친구·지인 차용 사기에서도 채무자가 처음부터 변제 의사·능력 없이 카톡·문자로 차용 의사를 표시한 정황이 입증되면 단순 채무불이행을 넘어 사기 구조로 평가될 수 있다는 시사점이 있어, 차용 시점의 채무자 재산상태·다중 차용·잠적 흐름을 시간순으로 정리해두면 도움이 됩니다.',
        takeaway: '친구·지인 대여금 회수는 차용증이 없어도 계좌이체·카톡으로 시작 가능하고, 잠적·다중 차용·재산은닉 정황이 결합되면 사기죄까지 검토할 수 있어 카톡·계좌이체·통화녹취를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '카톡에 "빌려준다"는 말 없고 송금만 했어요. 회수 가능한가요?',
        answer:
          '<strong>송금 사실이 있으면 일단 시작 가능. "증여 아닌 대여" 입증을 위해 송금 직후 카톡·통화로 "갚을 수 있어?"라고 한 번이라도 물어두면 강력합니다.</strong> 송금만으로도 부당이득반환 청구 트랙은 가능. 단순 송금만 있으면 채무자가 증여 주장 시 다툼 여지.',
      },
      {
        question: '잠적해서 주소도 모르는데 지급명령 가능한가요?',
        answer:
          '<strong>법원 사실조회로 채무자 주소 조회 가능합니다. 지급명령 송달 안 되면 공시송달로 진행.</strong> 주민등록상 주소·실거주지 모두 시도. 주소 불명도 회수 포기 사유 아님.',
      },
      {
        question: '소액심판하려면 변호사 비용 더 나오지 않나요?',
        answer:
          '<strong>3,000만원 이하 소액심판은 본인 직접 진행 가능합니다. 전자소송으로 인지대·송달료 외 비용 거의 없음.</strong> KLAC 132 무료 상담 + 대한변협 인터넷 양식 활용. 본인 소송이 비용 효율적.',
      },
      {
        question: '5년이 지났는데도 회수 가능한가요?',
        answer:
          '<strong>일반 민사채권 시효 10년, 상사채권 5년. 친구 간 개인 차용은 일반 10년 적용.</strong> 시효 중단(내용증명·지급명령·일부 변제)되면 다시 10년. 시효 임박이면 즉시 지급명령 신청.',
      },
      {
        question: '여러 친구가 같은 사람에게 빌려줬는데 공동 대응 가능한가요?',
        answer:
          '<strong>같은 채무자에게 다수 채권자면 사기 고소 우선순위 상승 + 공동 변호인 비용 분담 가능.</strong> 다중 차용은 처음부터 변제 의사 없었다는 사기 고의 입증의 결정적 자료.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '지인 차용 민사 vs 형사', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '차용증 있는 대여 형사·민사', href: '/guide/fraud/fraud-loan-with-promissory-note-criminal-civil' },
      { label: '잠적한 채무자 추적', href: '/guide/fraud/fraud-personal-loan-flight-pursuit' },
      { label: '사기 민사 소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },
];
