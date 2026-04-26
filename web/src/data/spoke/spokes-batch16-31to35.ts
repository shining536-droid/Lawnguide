import { SpokePage } from '../spoke-pages';

// Batch 16 - 31 to 35: digital-sex-crime(1), rehabilitation(1), jeonse-fraud(1), defamation(2)
export const spokesBatch16Pages31to35: SpokePage[] = [
  {
    domain: 'digital-sex-crime',
    slug: 'deepfake-distribution-block-deletion',
    keyword: '딥페이크 피해 영상 유포 차단과 삭제 신청 절차',
    questionKeyword: '딥페이크 피해 영상이 유포되고 있는데 어떻게 삭제하나요?',
    ctaKeyword: '딥페이크 유포 차단 신청',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '딥페이크 영상 유포 차단·삭제 신청 4단계 절차 | 로앤가이드',
      description: '딥페이크 합성 영상이 온라인에 퍼지고 있어 당장 삭제하고 싶은데 어디서부터 시작해야 할지 모르겠나요? 유포 차단부터 삭제 신청까지 4단계 절차를 지금 확인하세요.',
    },
    intro: '내 얼굴이 합성된 영상이 SNS와 메신저를 통해 퍼지고 있습니다. 누가 만들었는지도 모르겠고, 삭제 요청을 어디에 해야 하는지 막막합니다. 시간이 지날수록 유포 범위는 넓어지고, 한 번 퍼진 영상은 되돌리기 어렵습니다. 지금 바로 실행해야 할 유포 차단과 삭제 절차를 단계별로 정리했습니다.',
    timelineSteps: ['증거 확보', '방심위 삭제 신청', '플랫폼 신고', '수사기관 고소'],
    sections: [
      {
        title: '1단계. 유포된 영상의 증거를 즉시 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">삭제 요청 전에 증거부터 남겨야 합니다</strong></p>\n<p>유포된 영상의 <strong>URL, 게시자 아이디, 게시 일시</strong>를 캡처하세요. 화면 녹화로 해당 페이지 전체를 기록해두면 더 확실합니다. 메신저로 유포된 경우에는 대화방 캡처와 함께 <strong>발신자 정보</strong>를 가능한 한 저장하세요.</p>\n<p>증거 확보 없이 삭제만 요청하면 나중에 고소·손해배상 청구 시 <strong>피해 입증이 어려워집니다</strong>. 성폭력범죄의 처벌 등에 관한 특례법 제14조의3에 따라 딥페이크 영상 유포는 5년 이하의 징역 또는 5천만원 이하의 벌금에 해당할 소지가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: URL 캡처, 게시자 ID 기록, 화면 녹화, 메신저 대화 저장</blockquote>',
      },
      {
        title: '2단계. 방송통신심의위원회에 삭제 요청을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">방심위 디지털성범죄피해자지원센터를 통해 삭제를 요청할 수 있습니다</strong></p>\n<p><strong>디지털성범죄피해자지원센터(전화 02-735-8994)</strong>에 연락하면 전문 상담원이 삭제 지원 절차를 안내합니다. 온라인으로도 신청 가능하며, 센터에서 직접 해당 사이트에 <strong>삭제·차단 요청</strong>을 대행합니다.</p>\n<p>방송통신심의위원회는 국내 사이트는 물론 <strong>해외 사이트</strong>에 대해서도 삭제 요청 권한을 갖고 있습니다. 2024년 기준 디지털성범죄 관련 삭제 처리 건수는 <strong>연간 28만 건</strong>을 넘었습니다. 신청 후 평균 <strong>3~7일</strong> 내 1차 삭제가 이루어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 디지털성범죄피해자지원센터 02-735-8994 | 국내·해외 사이트 모두 삭제 요청 가능</blockquote>',
      },
      {
        title: '3단계. 유포된 플랫폼에 직접 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">방심위 요청과 별도로 각 플랫폼에도 직접 신고해야 삭제가 빨라집니다</strong></p>\n<p>유튜브, 트위터(X), 텔레그램, 인스타그램 등 각 플랫폼의 <strong>비동의 친밀 이미지 신고 기능</strong>을 이용하세요. 대부분의 플랫폼은 딥페이크를 포함한 비동의 성적 이미지에 대해 <strong>24~48시간 내</strong> 긴급 삭제 정책을 운영합니다.</p>\n<p>텔레그램처럼 삭제 대응이 느린 플랫폼은 방심위를 통한 <strong>접속 차단 요청</strong>이 더 효과적입니다. 여러 플랫폼에 동시에 유포된 경우, 디지털성범죄피해자지원센터의 <strong>모니터링 서비스</strong>를 활용하면 재유포도 추적해줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 각 플랫폼 신고 → 방심위 접속 차단 → 모니터링 서비스 신청</blockquote>',
      },
      {
        title: '4단계. 경찰에 고소하고 수사를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">유포자를 처벌하려면 고소장을 제출해야 합니다</strong></p>\n<p>가까운 경찰서 사이버수사팀 또는 <strong>사이버범죄신고시스템(ECRM)</strong>을 통해 고소장을 접수하세요. 성폭력범죄의 처벌 등에 관한 특례법 제14조의3(허위영상물 등의 반포등)으로 고소할 수 있습니다.</p>\n<p>고소 시 확보한 증거(URL 캡처, 화면 녹화, 게시자 정보)를 함께 제출하세요. 수사기관은 통신자료 제공 요청을 통해 <strong>유포자의 신원</strong>을 특정할 수 있습니다. 피해자 국선변호사 제도도 이용 가능하니 수사 과정에서 <strong>법률 지원</strong>을 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">고소 경로: 경찰서 사이버수사팀 또는 ECRM | 피해자 국선변호사 지원 가능</blockquote>',
      },
      {
        title: '삭제 후에도 재유포 모니터링이 필요합니다',
        content:
          '<p><strong style="color:#1e3a5f">한 번 삭제했다고 끝이 아닙니다</strong></p>\n<p>딥페이크 영상은 <strong>재유포 위험</strong>이 높습니다. 디지털성범죄피해자지원센터의 <strong>사후 모니터링 서비스</strong>(최대 1년)를 신청하면 동일 영상이 다시 올라올 때 즉시 삭제 조치를 받을 수 있습니다.</p>\n<p>민사상 <strong>손해배상 청구</strong>도 병행할 수 있습니다. 유포자가 특정되면 정신적 피해에 대한 위자료와 삭제 비용 등을 청구할 수 있으며, 판례상 딥페이크 유포 피해에 대한 위자료는 <strong>500만~3,000만원</strong> 수준에서 인정되고 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 조치: 재유포 모니터링 1년 + 민사 손해배상 청구 병행</blockquote>',
      },
    ],
    cases: [
      {
        title: '딥페이크 합성물 제작·유포에 대한 처벌 기준을 확인한 사례',
        summary:
          '대법원 2024도17801 사건(대법원, 2025.08.14)에서 법원은 아동·청소년의 얼굴 사진을 이용한 딥페이크 영상을 제작·배포한 행위에 대해, 실제 인물의 얼굴을 합성한 성적 영상물은 아동·청소년성착취물에 해당할 수 있다고 판시했습니다.',
        takeaway:
          '딥페이크 합성물은 제작뿐 아니라 유포·소지도 처벌 대상입니다. 피해 영상을 발견하면 증거를 확보한 후 즉시 삭제 신청과 고소를 진행하세요.',
      },
    ],
    faq: [
      {
        question: '딥페이크 피해 삭제 신청에 비용이 드나요?',
        answer: '디지털성범죄피해자지원센터의 삭제 지원은 <strong>무료</strong>입니다. 상담부터 삭제 대행, 사후 모니터링까지 모두 무상으로 제공됩니다.',
      },
      {
        question: '해외 사이트에 올라간 영상도 삭제할 수 있나요?',
        answer: '방송통신심의위원회를 통해 <strong>해외 사이트에도 삭제 요청</strong>이 가능합니다. 다만 해외 사이트는 국내보다 삭제까지 시간이 더 걸릴 수 있습니다.',
      },
      {
        question: '유포자를 모르는데 고소할 수 있나요?',
        answer: '유포자를 모르더라도 <strong>"성명불상"으로 고소</strong>할 수 있습니다. 수사기관이 IP 추적, 통신자료 조회 등을 통해 유포자를 특정합니다.',
      },
      {
        question: '삭제 요청 후 얼마나 걸리나요?',
        answer: '국내 사이트는 평균 <strong>3~7일</strong>, 해외 사이트는 <strong>2~4주</strong> 정도 소요됩니다. 긴급한 경우 디지털성범죄피해자지원센터에 긴급 삭제를 요청하세요.',
      },
      {
        question: '딥페이크 피해자도 국선변호사를 선임할 수 있나요?',
        answer: '성폭력범죄 피해자는 수사 단계부터 <strong>피해자 국선변호사</strong>를 무료로 선임할 수 있습니다. 경찰서나 검찰청에서 신청 가능합니다.',
      },
    ],
    cta: {
      text: '딥페이크 피해 상황에 맞는 삭제·대응 방법을 확인해보세요',
      link: '/chat',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털 성범죄 진단', href: '/diagnosis/digital-sex-crime' },
      { label: '딥페이크 피해 초기 대응법', href: '/guide/digital-sex-crime/deepfake-pornography-report-removal' },
      { label: '불법촬영물 삭제 지원 절차', href: '/guide/digital-sex-crime/illegal-filming-deletion-support' },
      { label: '성범죄 피해자 국선변호사 제도', href: '/guide/sex-crime/sexual-assault-procedure-trial' },
    ],
  },
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-creditor-collection-stop',
    keyword: '개인회생 신청 중 채권자 추심 중단시키는 방법',
    questionKeyword: '개인회생 신청했는데 채권자가 계속 추심 전화를 하는데 어떻게 하나요?',
    ctaKeyword: '개인회생 추심 중단 방법',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '개인회생 신청 후 채권자 추심 중단 3가지 방법 | 로앤가이드',
      description: '개인회생을 신청했는데 채권자가 계속 독촉 전화를 합니다. 추심 중단 요청부터 중지명령 신청까지 3가지 방법을 지금 확인하세요.',
    },
    intro: '개인회생을 신청했는데도 채권자에게서 매일 독촉 전화가 옵니다. 문자 폭탄은 물론이고 직장에까지 연락이 왔습니다. 회생 신청을 했으면 추심이 멈춰야 하는 것 아닌가 싶지만, 실제로는 법원 결정이 나올 때까지 채권자가 추심을 계속하는 경우가 많습니다. 지금 바로 추심을 멈출 수 있는 방법을 확인하세요.',
    sections: [
      {
        title: '개인회생 신청만으로 추심이 자동 중단되지 않습니다',
        content:
          '<p><strong style="color:#1e3a5f">법원의 중지명령 또는 금지명령이 있어야 추심이 정지됩니다</strong></p>\n<p>개인회생을 <strong>신청</strong>한 것과 법원이 <strong>개시결정</strong>을 내린 것은 다릅니다. 채무자 회생 및 파산에 관한 법률 제593조에 따라 개인회생 <strong>개시결정</strong>이 나면 채권자의 강제집행이 중지됩니다. 하지만 신청 후 개시결정까지 보통 <strong>2~4주</strong>가 걸립니다.</p>\n<p>이 기간 동안 채권자가 추심을 계속할 수 있기 때문에, 별도로 <strong>중지명령 신청</strong>을 해야 합니다. 신청서는 개인회생 신청과 동시에 제출하는 것이 가장 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 신청 ≠ 개시결정 | 중지명령을 별도 신청해야 추심 중단</blockquote>',
      },
      {
        title: '첫째, 법원에 포괄적 금지명령을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">포괄적 금지명령은 모든 채권자의 추심을 한꺼번에 막아줍니다</strong></p>\n<p>채무자 회생 및 파산에 관한 법률 제593조 제1항에 따라, 개인회생 신청 후 법원에 <strong>포괄적 금지명령(중지명령)</strong>을 신청할 수 있습니다. 이 명령이 나면 모든 채권자가 <strong>전화, 문자, 방문, 압류</strong> 등 일체의 추심 행위를 해서는 안 됩니다.</p>\n<p>신청서에는 채권자 목록과 현재 추심 상황을 구체적으로 기재하세요. 직장 연락, 가족 연락 등 <strong>위법한 추심 사실</strong>이 있으면 증거(통화 녹음, 문자 캡처)를 첨부하면 발급이 빨라집니다. 보통 신청 후 <strong>3~7일</strong> 내 결정이 나옵니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 포괄적 금지명령 신청서 + 채권자 목록 + 추심 증거 | 소요: 3~7일</blockquote>',
      },
      {
        title: '둘째, 채권추심법 위반으로 금융감독원에 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">위법한 추심은 채권의 공정한 추심에 관한 법률로 처벌 대상으로 검토될 수 있습니다</strong></p>\n<p>채권의 공정한 추심에 관한 법률 제9조에 따라, 채권자가 <strong>심야 시간(21시~08시)</strong>에 전화하거나, 채무자의 <strong>직장·가족</strong>에 연락하거나, 폭언·협박을 하는 것은 위법 추심입니다. 위반 시 <strong>3년 이하의 징역 또는 3천만원 이하의 벌금</strong>에 처할 수 있습니다.</p>\n<p>위법 추심 증거(통화 녹음, 문자 캡처, 방문 기록)를 모아 <strong>금융감독원(전화 1332)</strong>에 신고하세요. 금융감독원이 해당 채권추심업체에 시정명령을 내리면 추심이 중단됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">위법 추심: 심야 전화, 직장 연락, 폭언 → 금감원 1332 신고</blockquote>',
      },
      {
        title: '셋째, 개시결정 후에는 강제집행 자동 중지됩니다',
        content:
          '<p><strong style="color:#1e3a5f">개시결정이 나면 급여 압류도 풀립니다</strong></p>\n<p>법원이 <strong>개인회생 개시결정</strong>을 내리면 채무자 회생 및 파산에 관한 법률 제600조에 따라 개인회생채권에 기한 <strong>강제집행, 가압류, 가처분</strong>이 모두 중지됩니다. 이미 진행 중인 급여 압류도 <strong>중지·취소</strong>를 신청할 수 있습니다.</p>\n<p>개시결정문 사본을 받으면 이를 채권자에게 내용증명으로 발송하세요. "개인회생 개시결정이 있었으므로 일체의 추심 행위를 중단해 주시기 바랍니다"라고 명시하면 됩니다. 그래도 추심을 계속하면 <strong>법원모욕</strong>에 해당할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">개시결정 후: 강제집행 자동 중지 → 급여 압류 해제 신청 가능</blockquote>',
      },
      {
        title: '추심 중단 후에도 변제계획을 성실히 이행하세요',
        content:
          '<p><strong style="color:#1e3a5f">변제계획 불이행 시 개인회생이 폐지될 수 있습니다</strong></p>\n<p>개인회생 <strong>변제계획 인가결정</strong>이 나면 3~5년간 매월 일정 금액을 변제해야 합니다. 변제를 <strong>2회 이상 연속</strong>으로 불이행하면 채권자의 신청에 의해 개인회생이 폐지될 수 있고, 폐지되면 추심 중단 효력도 사라집니다.</p>\n<p>변제 완료 후에는 <strong>면책결정</strong>을 받게 됩니다. 면책이 확정되면 변제계획에 따라 변제한 것을 제외한 나머지 채무에 대해 <strong>책임이 면제</strong>됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 변제 2회 연속 불이행 시 회생 폐지 → 추심 재개 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '개인회생 채권자목록 누락 시 면책 효력이 인정된 사례',
        summary:
          '대법원 2024다221042 사건(대법원, 2025.10.16)에서 법원은 개인회생절차에서 채권자목록에 보증인이 누락되었더라도, 원래 채권자의 채권이 목록에 기재되어 변제대상이 되었다면 보증인의 구상금채권에도 면책 효력이 미친다고 판시했습니다.',
        takeaway:
          '채권자목록을 정확히 작성하는 것이 중요하지만, 설령 일부 누락이 있더라도 면책의 효력이 인정될 수 있습니다. 변제계획을 성실히 이행하세요.',
      },
    ],
    faq: [
      {
        question: '개인회생 신청 직후부터 추심이 멈추나요?',
        answer: '신청만으로는 자동 중단되지 않습니다. <strong>포괄적 금지명령</strong>을 별도로 신청해야 하며, 개시결정이 나야 법적으로 강제집행이 중지됩니다.',
      },
      {
        question: '직장에 연락하는 추심도 위법인가요?',
        answer: '채무자의 <strong>직장에 연락</strong>하는 것은 채권의 공정한 추심에 관한 법률에서 금지하는 위법 추심입니다. 금융감독원에 신고하세요.',
      },
      {
        question: '급여 압류 중인데 회생 신청하면 풀리나요?',
        answer: '개시결정 후 <strong>강제집행 중지 신청</strong>을 하면 급여 압류가 해제됩니다. 개시결정문 사본을 법원에 제출하세요.',
      },
      {
        question: '포괄적 금지명령 신청 비용이 있나요?',
        answer: '별도 인지대는 없으며, 개인회생 신청과 <strong>동시에 제출</strong>하면 됩니다. 추가 비용 없이 진행 가능합니다.',
      },
      {
        question: '금지명령을 어기고 추심하면 어떻게 되나요?',
        answer: '법원의 금지명령을 위반한 추심은 <strong>법원모욕</strong>에 해당하며, 과태료 또는 감치 처분을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '개인회생 추심 중단 절차를 내 상황에 맞게 확인해보세요',
      link: '/chat',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
      { label: '개인회생 사전 체크리스트', href: '/guide/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 vs 파산 어떤 게 유리할까', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 변제금 계산법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-auction-priority-repayment',
    keyword: '전세사기 피해자 경매 배당 우선변제 받는 법',
    questionKeyword: '전세사기 피해 후 경매가 진행 중인데 보증금을 우선 돌려받을 수 있나요?',
    ctaKeyword: '전세사기 경매 배당 우선변제 확인',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '전세사기 경매 배당 우선변제 4단계 절차 정리 | 로앤가이드',
      description: '전세사기 피해 후 경매가 진행 중인데 보증금을 돌려받을 수 있는지 걱정되시나요? 우선변제권 요건부터 배당 신청까지 4단계를 지금 확인하세요.',
    },
    intro: '집주인이 사기로 구속되고 집이 경매에 넘어갔습니다. 전세보증금을 돌려받을 수 있을지 막막합니다. 경매 절차가 시작됐는데 어디서부터 어떻게 해야 보증금을 받을 수 있는지 아무도 알려주지 않습니다. 우선변제권 요건과 경매 배당 절차를 단계별로 정리했습니다.',
    timelineSteps: ['우선변제 요건 확인', '배당 요구 신청', '배당기일 참석', '이의 신청'],
    sections: [
      {
        title: '1단계. 우선변제권 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">대항력과 확정일자가 있어야 우선변제를 받을 수 있습니다</strong></p>\n<p>주택임대차보호법 제3조의2에 따라 우선변제권을 갖추려면 ①<strong>주택 인도(입주)</strong>, ②<strong>전입신고</strong>, ③<strong>확정일자</strong> 세 가지를 모두 갖춰야 합니다. 이 세 가지를 갖춘 날의 <strong>다음 날</strong>부터 우선변제권이 생깁니다.</p>\n<p>특히 확정일자는 <strong>주민센터, 등기소, 공증사무소</strong>에서 받을 수 있으며, 임대차 계약서에 직접 찍어야 합니다. 확정일자 없이 전입신고만 한 경우에는 <strong>소액임차인 최우선변제</strong>만 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건 3가지: 입주 + 전입신고 + 확정일자 | 소액임차인: 확정일자 없어도 최우선변제 가능</blockquote>',
      },
      {
        title: '2단계. 경매 법원에 배당 요구를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">배당 요구 종기일까지 가능한 한 신청해야 합니다</strong></p>\n<p>경매가 개시되면 법원이 <strong>배당 요구 종기일</strong>을 정합니다. 이 기한까지 집행법원에 <strong>배당 요구서</strong>를 제출해야 합니다. 기한을 놓치면 우선변제권이 있어도 <strong>배당에서 제외</strong>될 수 있습니다.</p>\n<p>배당 요구서에는 임대차 계약서 사본, 확정일자 증명, 전입세대 열람내역을 첨부합니다. 민사집행법 제148조에 따라 배당 요구를 한 채권자만 배당을 받을 수 있으므로 <strong>기한 준수가 가장 중요</strong>합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 배당 요구 종기일 전에 가능한 한 신청 | 첨부: 계약서 + 확정일자 + 전입세대 열람</blockquote>',
      },
      {
        title: '3단계. 배당기일에 출석하여 배당표를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">배당표에 기재된 금액이 맞는지 가능한 한 확인해야 합니다</strong></p>\n<p>경매 낙찰 후 법원은 <strong>배당기일</strong>을 지정합니다. 배당기일에 출석하면 법원이 작성한 <strong>배당표</strong>를 확인할 수 있습니다. 배당표에는 각 채권자가 받을 금액이 기재됩니다.</p>\n<p>배당 순서는 ①<strong>최우선변제권자(소액임차인)</strong>, ②확정일자 기준 <strong>우선변제권자</strong>, ③근저당권자, ④일반채권자 순입니다. 전세사기 피해자가 전세사기피해자법에 따라 <strong>피해자로 인정</strong>받으면 우선 매수권 행사도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">배당 순서: 최우선변제 → 확정일자 우선변제 → 근저당 → 일반채권</blockquote>',
      },
      {
        title: '4단계. 배당액이 부족하면 배당이의를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">배당표에 이의가 있으면 배당기일에 즉시 이의를 제기해야 합니다</strong></p>\n<p>배당표의 금액이 잘못되었거나, 다른 채권자의 배당액이 부당하다고 판단되면 <strong>배당기일에 이의</strong>를 신청하세요. 민사집행법 제154조에 따라 배당기일에 이의를 진술하지 않으면 배당표가 <strong>확정</strong>됩니다.</p>\n<p>이의를 진술한 후 <strong>1주일 이내</strong>에 배당이의의 소를 제기해야 합니다. 기한을 놓치면 이의가 취하된 것으로 봅니다. 배당이의의 소에서 승소하면 배당표가 경정되어 <strong>추가 배당금</strong>을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 배당기일에 이의 진술 → 1주일 내 배당이의의 소 제기</blockquote>',
      },
      {
        title: '전세사기 피해자 특별법 혜택도 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">전세사기 피해자로 인정되면 추가 지원을 받을 수 있습니다</strong></p>\n<p>전세사기피해자 지원 및 주거안정에 관한 특별법에 따라 <strong>피해자로 결정</strong>되면 ①경매절차에서 <strong>우선 매수권</strong>, ②긴급 주거 지원(임시 거처), ③<strong>전세피해 지원센터</strong> 법률 상담을 이용할 수 있습니다.</p>\n<p>피해자 결정 신청은 주소지 관할 <strong>LH(한국토지주택공사)</strong> 또는 전세피해지원위원회에 합니다. 경매가 진행 중이더라도 피해자 결정을 받으면 <strong>우선 매수를 통해 주거를 유지</strong>할 수 있으니 가능한 한 신청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">특별법 혜택: 우선 매수권 + 긴급 주거 지원 + 무료 법률 상담</blockquote>',
      },
    ],
    cases: [
      {
        title: '전세사기 피해자의 경매 배당 우선변제 관련 법리',
        summary:
          '주택임대차보호법 제3조의2에 따르면, 대항요건(입주+전입신고)과 확정일자를 갖춘 임차인은 경매 시 후순위 권리자보다 우선하여 보증금을 변제받을 권리가 있습니다. 전세사기피해자법에 따라 피해자로 인정받으면 우선 매수권도 행사할 수 있습니다.',
        takeaway:
          '확정일자와 전입신고 시점이 배당 순위를 결정합니다. 계약 즉시 확정일자를 받고, 경매 시 배당 요구 종기일을 절대 놓치지 마세요.',
      },
    ],
    faq: [
      {
        question: '확정일자가 없으면 보증금을 못 받나요?',
        answer: '확정일자가 없어도 <strong>소액임차인</strong>에 해당하면 보증금 중 일정액을 최우선변제받을 수 있습니다. 서울 기준 보증금 1억 6,500만원 이하 시 5,500만원까지 최우선변제됩니다.',
      },
      {
        question: '배당 요구 종기일은 어떻게 알 수 있나요?',
        answer: '경매 개시결정 후 법원이 <strong>등기부에 기입</strong>하고 이해관계인에게 통지합니다. 대법원 경매정보 사이트에서도 확인할 수 있습니다.',
      },
      {
        question: '낙찰 가격이 보증금보다 낮으면 어떻게 되나요?',
        answer: '배당 순위에 따라 배분하며, <strong>부족분은 집주인에게 민사소송</strong>으로 청구할 수 있습니다. 전세사기 피해자는 전세피해 지원센터의 법률 지원을 받을 수 있습니다.',
      },
      {
        question: '전세사기 피해자 결정은 어디서 신청하나요?',
        answer: '<strong>LH(한국토지주택공사)</strong> 또는 관할 전세피해지원위원회에 신청합니다. 온라인 신청도 가능합니다.',
      },
      {
        question: '우선 매수권이란 무엇인가요?',
        answer: '경매에서 최고가 매수인과 <strong>동일한 가격으로 낙찰받을 수 있는 권리</strong>입니다. 전세사기 피해자로 인정되면 거주 중인 주택을 우선 매수할 수 있습니다.',
      },
      {
        question: '경매 배당 절차에 변호사가 필요한가요?',
        answer: '배당 요구 자체는 직접 할 수 있지만, 배당이의의 소 등 <strong>복잡한 분쟁</strong>이 예상되면 법률 전문가의 도움을 받는 것이 안전합니다.',
      },
    ],
    cta: {
      text: '내 전세보증금 배당 가능성을 확인해보세요',
      link: '/chat',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 경매 입찰 가이드', href: '/guide/jeonse-fraud/jeonse-fraud-auction-bidding-guide' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'online-defamation-complaint-evidence',
    keyword: '인터넷 악성 댓글 고소장 작성법과 증거 확보',
    questionKeyword: '인터넷에서 악성 댓글을 당했는데 고소하려면 어떻게 해야 하나요?',
    ctaKeyword: '악성 댓글 고소장 작성',
    type: '템플릿형',
    perspective: 'victim',
    meta: {
      title: '인터넷 악성 댓글 고소장 작성법 5단계 가이드 | 로앤가이드',
      description: '인터넷 악성 댓글로 명예가 훼손되었는데 고소장은 어떻게 쓰나요? 증거 확보부터 고소장 작성까지 5단계 방법을 지금 확인하세요.',
    },
    intro: '인터넷 게시판이나 SNS에 나를 비방하는 악성 댓글이 올라왔습니다. 허위 사실을 적시하며 수십 개의 댓글이 달렸고, 주변 사람들도 이미 보았습니다. 참으려 했지만 피해가 계속 커지고 있어 고소를 결심했습니다. 고소장을 어떻게 작성하고, 증거는 어떻게 확보해야 하는지 단계별로 정리했습니다.',
    sections: [
      {
        title: '1단계. 악성 댓글의 증거를 빠짐없이 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">댓글이 삭제되기 전에 증거를 남겨야 합니다</strong></p>\n<p>악성 댓글의 <strong>전체 화면 캡처</strong>를 저장하세요. 댓글 내용, 작성자 아이디(닉네임), 작성 일시, 게시글 URL이 모두 포함되어야 합니다. <strong>화면 녹화</strong>로 스크롤하며 전체 맥락을 기록하면 더 확실합니다.</p>\n<p>여러 게시글에 걸쳐 비방이 이루어졌다면 <strong>각 게시글별로</strong> 캡처하세요. 캡처 파일에는 촬영 일시가 자동 기록되므로 <strong>원본 파일을 보관</strong>하는 것이 중요합니다. 댓글이 삭제되면 증거 확보가 어려워지니 발견 즉시 캡처하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">캡처 필수 항목: 댓글 내용 + 작성자 ID + 작성 일시 + URL + 전후 맥락</blockquote>',
      },
      {
        title: '2단계. 명예훼손 성립 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">모든 악플이 명예훼손은 아닙니다</strong></p>\n<p>형법상 명예훼손이 성립하려면 ①<strong>공연성</strong>(불특정 다수가 볼 수 있는 공간), ②<strong>사실 또는 허위사실의 적시</strong>, ③<strong>타인의 사회적 평가를 저하</strong>시키는 내용이어야 합니다. 단순한 욕설이나 감정 표현은 <strong>모욕죄</strong>(형법 제311조)에 해당할 수 있습니다.</p>\n<p>인터넷 게시판은 공연성이 인정되며, 정보통신망법 제70조에 따르면 정보통신망을 통한 명예훼손은 <strong>7년 이하의 징역 또는 5천만원 이하의 벌금</strong>(허위사실), <strong>3년 이하의 징역 또는 3천만원 이하의 벌금</strong>(사실 적시)에 처할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구분: 사실 적시 명예훼손 vs 허위사실 명예훼손 vs 모욕 | 인터넷 = 공연성 인정</blockquote>',
      },
      {
        title: '3단계. 고소장을 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">고소장에는 피해 사실을 구체적으로 기재해야 합니다</strong></p>\n<p>고소장에 포함할 항목: ①<strong>고소인(본인) 인적사항</strong>, ②<strong>피고소인 정보</strong>(아이디, 닉네임 — 실명을 모르면 "성명불상"으로 기재), ③<strong>고소 취지</strong>("피고소인을 정보통신망이용촉진및정보보호등에관한법률 위반(명예훼손)으로 고소합니다"), ④<strong>범죄 사실</strong>(일시, 장소, 내용을 구체적으로), ⑤<strong>증거 목록</strong></p>\n<p>범죄 사실 기재 예시: "피고소인은 2026년 O월 O일 OO 사이트 OO 게시판에 \'[구체적 댓글 내용]\' 등의 글을 게시하여 공연히 허위의 사실을 적시하여 고소인의 명예를 훼손하였습니다."</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">고소장 구성: 인적사항 + 고소 취지 + 범죄 사실(구체적) + 증거 목록</blockquote>',
      },
      {
        title: '4단계. 관할 경찰서에 고소장을 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">사이버범죄는 어디서든 고소 가능합니다</strong></p>\n<p>고소장은 가까운 <strong>경찰서 민원실</strong> 또는 <strong>사이버범죄신고시스템(ECRM)</strong>을 통해 접수할 수 있습니다. 인터넷 명예훼손은 범죄지가 특정되지 않으므로 <strong>고소인 거주지 관할 경찰서</strong>에 접수해도 됩니다.</p>\n<p>고소장 접수 후 경찰은 사이트 운영자에게 <strong>통신자료 제공 요청</strong>을 하여 댓글 작성자의 IP 주소와 가입 정보를 확인합니다. 이후 통신사에 <strong>통신사실확인자료</strong>를 요청하여 실제 사용자를 특정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수처: 경찰서 또는 ECRM | 수사 과정: IP 추적 → 통신사 확인 → 가해자 특정</blockquote>',
      },
      {
        title: '5단계. 민사 손해배상도 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소와 별도로 민사 청구가 가능합니다</strong></p>\n<p>명예훼손 피해자는 형사 고소와 별도로 <strong>민사상 손해배상</strong>을 청구할 수 있습니다. 정신적 피해에 대한 위자료와 실질적 손해(취업 불이익, 영업 손실 등)를 청구합니다.</p>\n<p>인터넷 명예훼손의 위자료는 판례상 <strong>300만~2,000만원</strong> 수준에서 인정되며, 댓글 수, 조회 수, 피해 기간, 내용의 심각성 등에 따라 달라집니다. 게시글 <strong>삭제 청구</strong>(가처분 신청)도 함께 진행할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">병행 가능: 형사 고소 + 민사 손해배상 + 게시글 삭제 가처분</blockquote>',
      },
    ],
    cases: [
      {
        title: '인터넷 허위사실 명예훼손 유죄 판결 사례',
        summary:
          '부산지법 2025고단949 사건(부산지법, 2025.08.20)에서 법원은 동영상 플랫폼에 허위사실이 포함된 영상을 게시하여 피해자의 명예를 훼손한 행위에 대해, 정보통신망법 위반(명예훼손) 및 전기통신기본법 위반으로 유죄를 선고했습니다.',
        takeaway:
          '인터넷에서 허위사실을 유포하여 타인의 명예를 훼손하면 형사처벌과 민사 손해배상 책임을 동시에 질 수 있습니다. 증거를 확보한 후 고소를 진행하세요.',
      },
    ],
    faq: [
      {
        question: '댓글 작성자를 모르는데 고소할 수 있나요?',
        answer: '작성자 실명을 모르더라도 <strong>"성명불상"으로 고소</strong>할 수 있습니다. 경찰이 IP 추적과 통신자료 조회를 통해 실제 작성자를 특정합니다.',
      },
      {
        question: '댓글이 이미 삭제되었으면 고소가 불가능한가요?',
        answer: '캡처 등 <strong>증거가 있으면 고소 가능</strong>합니다. 삭제되었더라도 사이트 서버에 로그가 남아 있는 경우가 많아 수사가 가능합니다.',
      },
      {
        question: '사실을 말한 것도 명예훼손이 되나요?',
        answer: '사실이라도 공연히 적시하여 <strong>타인의 사회적 평가를 저하</strong>시키면 명예훼손이 됩니다. 다만 공공의 이익을 위한 경우 위법성이 조각될 수 있습니다.',
      },
      {
        question: '고소 비용은 얼마나 드나요?',
        answer: '형사 고소 자체는 <strong>비용이 들지 않습니다</strong>. 다만 민사 손해배상 소송을 병행하면 인지대와 송달료가 발생합니다.',
      },
      {
        question: '명예훼손 고소 기간 제한이 있나요?',
        answer: '명예훼손은 <strong>친고죄</strong>로 범인을 알게 된 날부터 <strong>6개월 이내</strong>에 고소해야 합니다. 다만 정보통신망법상 명예훼손은 반의사불벌죄입니다.',
      },
    ],
    cta: {
      text: '악성 댓글 고소 절차를 내 상황에 맞게 정리해보세요',
      link: '/chat',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '온라인 명예훼손 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 고소장 준비 가이드', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '명예훼손 손해배상 금액 기준', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'defamation-accused-defense-strategy',
    keyword: '명예훼손 가해자로 고소당했을 때 대응 방법',
    questionKeyword: '명예훼손으로 고소당했는데 어떻게 대응해야 하나요?',
    ctaKeyword: '명예훼손 혐의 대응 전략',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '명예훼손 고소당했을 때 대응 전략 4가지 | 로앤가이드',
      description: '명예훼손 혐의를 받고 있다면 경찰 조사에서 무엇을 말해야 할까요? 위법성 조각 사유부터 합의 전략까지 4가지 대응법을 지금 확인하세요.',
    },
    intro: '경찰서에서 출석 요구서가 왔습니다. 인터넷에 쓴 글이 명예훼손이라며 누군가 고소했다는 내용입니다. 사실을 말했을 뿐인데 고소를 당하다니 당황스럽습니다. 혐의를 받고 있다면 경찰 조사 전에 가능한 한 알아야 할 대응 방법을 정리했습니다.',
    sections: [
      {
        title: '먼저 고소 내용과 적용 법조항을 정확히 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">어떤 혐의인지에 따라 대응 전략이 완전히 달라집니다</strong></p>\n<p>명예훼손은 크게 ①<strong>형법 제307조(사실 적시 명예훼손)</strong>, ②<strong>형법 제307조 제2항(허위사실 명예훼손)</strong>, ③<strong>정보통신망법 제70조(인터넷 명예훼손)</strong>로 나뉩니다. 사실 적시인지, 허위사실인지에 따라 처벌 수위와 방어 전략이 다릅니다.</p>\n<p>출석 요구서에 기재된 <strong>죄명과 사건 번호</strong>를 확인하세요. 가능하면 담당 수사관에게 연락하여 <strong>고소장 내용</strong>을 미리 파악하세요. 어떤 글이 문제인지, 고소인이 누구인지 알아야 방어 준비가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인 항목: 적용 법조항 + 문제된 게시글 + 고소인 정보 + 사건 번호</blockquote>',
      },
      {
        title: '첫째, 위법성 조각 사유를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">진실한 사실을 공익 목적으로 적시했다면 무죄가 될 수 있습니다</strong></p>\n<p>형법 제310조에 따라 <strong>진실한 사실</strong>로서 오로지 <strong>공공의 이익</strong>에 관한 때에는 처벌하지 않습니다. 이것이 명예훼손의 대표적 위법성 조각 사유입니다. 내가 쓴 글이 사실이고, 공적 관심사에 해당한다면 이 항변이 가능합니다.</p>\n<p>위법성 조각이 인정되려면 ①적시한 사실이 <strong>진실</strong>이거나 진실이라고 믿을 상당한 이유가 있고, ②<strong>공공의 이익</strong>을 위한 것이어야 합니다. "진실한 사실 + 공익 목적"이 모두 충족되어야 합니다. 개인적 원한에 의한 폭로는 공익 목적으로 보기 어렵습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형법 제310조: 진실한 사실 + 공공의 이익 = 위법성 조각 → 무죄</blockquote>',
      },
      {
        title: '둘째, 경찰 조사에서 진술 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">첫 조사에서의 진술이 사건 결과를 좌우합니다</strong></p>\n<p>경찰 조사에 출석하기 전 <strong>문제된 글의 작성 경위, 목적, 근거자료</strong>를 정리하세요. "사실을 말한 것이다" 또는 "공익을 위한 것이다"라는 주장을 뒷받침할 <strong>증거</strong>를 미리 준비해야 합니다.</p>\n<p>조사 시 주의사항: ①<strong>진술거부권</strong>을 행사할 수 있습니다, ②불리한 진술을 강요받을 의무가 없습니다, ③변호인의 조력을 받을 권리가 있습니다. 혐의가 중하다고 판단되면 <strong>변호사 상담 후 출석</strong>하는 것을 권합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 글 작성 경위 + 근거자료 정리 | 권리: 진술거부권, 변호인 조력권</blockquote>',
      },
      {
        title: '셋째, 합의를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손은 합의 여부가 처벌에 큰 영향을 미칩니다</strong></p>\n<p>형법상 명예훼손은 <strong>친고죄</strong>로 고소인이 고소를 취하하면 공소 자체가 불가능합니다. 정보통신망법상 명예훼손은 <strong>반의사불벌죄</strong>로 피해자가 처벌을 원하지 않으면 처벌할 수 없습니다. 따라서 합의를 통해 고소 취하를 이끌어내면 <strong>형사처벌을 피할 수 있습니다</strong>.</p>\n<p>합의 시에는 ①<strong>게시글 삭제</strong>, ②<strong>합의금 지급</strong>, ③<strong>재발 방지 약속</strong> 등을 조건으로 협의합니다. 합의서에는 가능한 한 "고소를 취하한다"는 문구와 <strong>"향후 동일한 사안으로 민·형사상 책임을 묻지 않는다"</strong>는 부제소 합의 내용을 포함하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">친고죄: 고소 취하 → 공소 불가 | 합의서: 고소 취하 + 부제소 합의 필수</blockquote>',
      },
      {
        title: '넷째, 혐의가 억울하다면 무고 역고소를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">사실과 다르게 신고되었다면 무고죄로 맞고소할 수 있습니다</strong></p>\n<p>고소인이 <strong>허위 사실</strong>로 고소한 경우, 형법 제156조(무고죄)로 <strong>역고소</strong>할 수 있습니다. 무고죄는 10년 이하의 징역 또는 1,500만원 이하의 벌금에 처할 수 있습니다.</p>\n<p>다만 무고죄가 성립하려면 고소인이 <strong>"허위인 것을 알면서"</strong> 고소했음을 입증해야 합니다. 단순히 고소 내용이 사실과 다른 정도로는 부족하고, 고소인에게 <strong>해를 끼칠 목적</strong>이 있었음을 증명해야 합니다. 무고 역고소는 신중하게 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">무고죄 요건: 허위 사실 인식 + 해할 목적 | 신중한 검토 필요</blockquote>',
      },
    ],
    cases: [
      {
        title: '정치적 주장에서의 명예훼손 위법성 판단 기준',
        summary:
          '대법원 2022다242649 사건(대법원, 2025.06.26)에서 법원은 정치인의 발언이 허위사실 적시에 해당하고, 진실이라고 믿을 만한 상당한 이유가 없으며, 악의적이거나 현저히 상당성을 잃은 공격에 해당하면 위법성이 조각되지 않는다고 판시했습니다.',
        takeaway:
          '사실을 말했다는 주장만으로는 무죄가 되지 않습니다. 진실성과 공익성을 입증할 근거를 구체적으로 준비하세요.',
      },
    ],
    faq: [
      {
        question: '사실을 말했는데도 명예훼손이 되나요?',
        answer: '사실이라도 <strong>공연히 적시</strong>하여 타인의 명예를 훼손하면 처벌 대상으로 검토될 수 있습니다. 다만 진실한 사실이고 공공의 이익을 위한 것이면 <strong>위법성이 조각</strong>될 수 있습니다.',
      },
      {
        question: '경찰 조사에 가능한 한 출석해야 하나요?',
        answer: '출석 요구에 정당한 사유 없이 불응하면 <strong>체포영장</strong>이 발부될 수 있습니다. 일정 조율은 가능하지만 출석은 해야 합니다.',
      },
      {
        question: '합의금은 보통 얼마인가요?',
        answer: '명예훼손 합의금은 사안에 따라 <strong>100만~1,000만원</strong> 수준이며, 피해 정도, 댓글 수, 노출 범위에 따라 달라집니다.',
      },
      {
        question: '고소당하면 전과 기록이 남나요?',
        answer: '고소 자체로는 전과가 아닙니다. <strong>기소되어 유죄 판결을 받아야</strong> 전과 기록이 남습니다. 합의로 고소가 취하되면 전과가 남지 않습니다.',
      },
      {
        question: '변호사를 선임해야 하나요?',
        answer: '경미한 사안은 직접 대응할 수 있지만, 허위사실 명예훼손이나 <strong>벌금·징역이 예상되는 사안</strong>이라면 변호사 상담을 받는 것이 안전합니다.',
      },
      {
        question: '댓글을 삭제하면 혐의가 없어지나요?',
        answer: '삭제해도 이미 <strong>범죄가 성립한 상태</strong>이므로 혐의가 사라지지 않습니다. 다만 삭제는 반성의 정상참작 사유가 될 수 있고, 합의에도 도움이 됩니다.',
      },
    ],
    cta: {
      text: '명예훼손 혐의를 받고 있다면 대응 전략을 확인해보세요',
      link: '/chat',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '진실한 사실 명예훼손 대응법', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '공익 목적 비판과 명예훼손 구분', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '명예훼손 가해자 비판글 대응', href: '/guide/defamation/defamation-accused-public-criticism' },
    ],
  },
];
