import { SpokePage } from '../spoke-pages';

// batch77 sex-crime — 4개 절차형
//
// 고유 존재 이유:
// 1. 지하철 혼잡 추행 — '만원 지하철 + 고의·접촉경위 다툼 + 방어 관점(accused)' 트랙
// 2. 탈의실 불법촬영 — '수영장/헬스장 탈의실 + 성폭력처벌법 카메라등이용촬영 + 피해자 대응' 트랙
// 3. 지인 항거불능 추행 — '술자리 후 항거불능 + 준강제추행 + 피해자 보호 신중 톤' 트랙
// 4. 직장 상사 위력 추행 — '업무상 위력 + 성폭력처벌법 제10조 + 회사 신고 + 형사' 트랙

export const spokesBatch77SexCrime: SpokePage[] = [
  // ─── 1. sex-crime-subway-crowded-molestation-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-crowded-molestation-track',
    keyword: '지하철 혼잡 추행',
    questionKeyword: '출근길 만원 지하철에서 신체 접촉이 있었는데 강제추행 혐의를 받게 됐어요. 고의가 없었다고 주장하려면 어떻게 해야 하나요?',
    ctaKeyword: '지하철 혼잡 추행 혐의 대응 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '지하철 혼잡 추행 혐의 — 5단계 방어 대응 | 로앤가이드',
      description:
        '만원 지하철 신체접촉으로 강제추행 혐의를 받고 있다면 고의 다툼·CCTV·진술 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>혐의를 받고 있다면, 이런 상황일 수 있습니다. 출근길 극도로 혼잡한 지하철 안에서 열차가 흔들리거나 승객이 밀리면서 의도치 않은 신체 접촉이 발생했는데, 피해를 주장하는 상대방이 역무원에게 신고하거나 경찰에 인계해 공중밀집장소추행 혐의로 조사를 받게 된 상황입니다. 고의가 전혀 없었다고 주장하고 싶지만 어떻게 소명해야 할지 막막한 상태이고, CCTV 영상이 있다면 유리하게 활용할 수 있는지도 궁금하실 것입니다. 성폭력범죄의 처벌 등에 관한 특례법 제11조는 \'대중교통수단 등 공중이 밀집하는 장소에서 사람을 추행\'하는 행위를 처벌 대상으로 규정하며, 대법원은 추행 고의가 인정되려면 적어도 미필적으로 이를 용인하는 내심의 의사가 있어야 한다고 판시(2023도13081)한 바 있습니다. 혼잡 지하철 신체접촉 + 고의 다툼 + CCTV·목격자 활용 구조에서 ① 초동 대응 ② CCTV 확보 ③ 진술 방어 ④ 변호인 선임 ⑤ 합의 검토 5단계 방어 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 혼잡 추행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 초동 대응·CCTV·진술·변호인·합의 5단계로 방어 트랙을 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 초동 대응</strong> — 현장에서 자진 신원 확인, 도주 오해 차단, 경찰 진술 전 침묵권 행사.</li>\n<li><strong>② CCTV·위치 기록 확보</strong> — 지하철 역사·객차 CCTV 영상 보존신청 및 교통카드 승하차 기록 확보.</li>\n<li><strong>③ 진술 방어</strong> — 고의 부재 입증: 혼잡도·동선·접촉 경위를 구체적으로 정리.</li>\n<li><strong>④ 변호인 선임</strong> — 성폭력 전담 수사 대응, 피의자 진술 방향 조율.</li>\n<li><strong>⑤ 합의 검토</strong> — 형사·행정 처분 감경 가능성 검토 (강요 아닌 자발적 합의 주의).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지하철 혼잡 추행죄는 고의가 핵심 다툼 포인트입니다. 대법원은 추행 고의를 부인하는 경우 고의와 상당한 관련성이 있는 간접사실을 종합적으로 판단하는 방법으로 평가한다고 봅니다. CCTV 영상과 교통카드 이동 경로, 당시 혼잡 상황 입증 자료가 방어의 핵심이 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·검찰·법원 단계 방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 초동 대응 (인지 당일)</strong> — 자진 신원 확인, 도주·저항 금지, 현장 CCTV 보존신청.</li>\n<li><strong>2단계 — 변호인 선임·진술 준비 (수사 전)</strong> — 성폭력 전담 변호인 선임 후 진술 방향 조율.</li>\n<li><strong>3단계 — 경찰 조사 (1~2개월)</strong> — 고의 부재 소명, 혼잡 상황·동선 구체적 진술, CCTV 활용.</li>\n<li><strong>4단계 — 검사 처분 단계 (2~4개월)</strong> — 불기소 의견서 제출, 합의 여부 검토.</li>\n<li><strong>5단계 — 기소 시 법원 재판 (6개월~)</strong> — 고의 다툼 변론, 혼잡도 증거 제시.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 혼잡 추행 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 고의 부재 입증·방어 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>교통카드 승하차 기록(해당 일시·역)</strong></li>\n<li><strong>지하철 역사·객차 CCTV 보존신청 공문</strong></li>\n<li><strong>당시 혼잡 상황 입증 자료(혼잡 구간 통계·사진 등)</strong></li>\n<li><strong>동선·위치 기록(카드결제·GPS 등 가능 시)</strong></li>\n<li><strong>경찰 진술 전 변호인 면담 확인서</strong></li>\n<li><strong>목격자 진술(가능 시) 또는 혼잡 상황 증인 확인</strong></li>\n<li><strong>불기소 의견서 또는 탄원서(수사·기소 단계별)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 교통카드 기록과 CCTV는 보존 기간이 짧아 혐의 인지 즉시 보존신청이 도움이 됩니다. 첫 경찰 조사 전 변호인과 진술 방향을 미리 조율하는 것이 방어에 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의 인정 여부</strong> — 혼잡도·동선·접촉 경위·지속 시간 종합 평가.</li>\n<li><strong>CCTV 확보</strong> — 보존 기간 경과 전 보존신청 여부가 관건.</li>\n<li><strong>피해자 진술 신빙성</strong> — 현장 신고 경위·목격자 여부.</li>\n<li><strong>합의 시점과 방법</strong> — 강요 아닌 자발적 합의, 형사 감경 효과 여부.</li>\n<li><strong>행정 처분 별도 대응</strong> — 성범죄 유죄 시 등록·신상정보 공개 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>대한변협 법률상담센터 (02-3476-6500)</strong></li>\n<li><strong>형사국선변호인 제도</strong> (구속 시 국선 신청 가능)</li>\n<li><strong>한국성폭력위기센터 02-883-9284</strong> (피해·가해 양측 상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공중밀집장소 추행 고의 판단 기준',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 성폭력처벌법 제11조의 공중밀집장소추행죄에서 추행의 고의를 부인하는 경우 고의와 상당한 관련성이 있는 간접사실을 종합적으로 판단하여야 한다고 판시했습니다. 지하철 혼잡 추행 혐의에서 고의 부재를 주장할 때 혼잡도·동선·접촉 경위 간접사실 전체를 입증 자료로 준비해두는 것이 방어에 도움이 될 수 있습니다.',
        takeaway: '고의 다툼은 CCTV·교통카드·동선 간접사실 전체를 종합 소명 — 변호인 선임 후 진술 방향 조율을 검토 권장.',
      },
    ],
    faq: [
      {
        question: '혐의를 받고 있는데 현장에서 바로 경찰에게 진술해도 되나요?',
        answer:
          '<strong>첫 진술이 이후 수사 방향에 영향을 줄 수 있는 영역입니다.</strong> 변호인 면담 후 진술 방향을 조율하는 것이 방어에 유리할 수 있습니다.',
      },
      {
        question: 'CCTV가 고의를 입증하는 데 불리하게 쓰일 수 있나요?',
        answer:
          '<strong>CCTV는 쌍방 주장을 뒷받침하는 자료로 활용되는 영역입니다.</strong> 혼잡 상황과 동선이 담겨 있다면 방어 자료가 될 수도 있습니다.',
      },
      {
        question: '혼잡해서 어쩔 수 없이 닿은 건데 고의가 인정되나요?',
        answer:
          '<strong>혼잡도·접촉 경위·지속 시간 등 간접사실이 종합 평가되는 영역입니다.</strong> 대법원은 고의를 미필적 용인 의사까지 포함해 판단합니다.',
      },
      {
        question: '합의를 하면 형사 처벌이 가벼워지나요?',
        answer:
          '<strong>합의는 형사 처분 단계에서 양형 자료로 검토되는 영역입니다.</strong> 강요가 아닌 자발적 합의임을 분명히 하는 것이 중요합니다.',
      },
      {
        question: '벌금형으로 끝나면 신상정보 등록 대상이 되나요?',
        answer:
          '<strong>공중밀집장소추행죄 유죄 시 등록 여부는 재판 결과에 따라 달라질 수 있는 영역입니다.</strong> 변호인에게 등록 면제 가능성을 확인해보세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },

  // ─── 2. sex-crime-changing-room-illegal-filming-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-changing-room-illegal-filming-track',
    keyword: '탈의실 불법촬영',
    questionKeyword: '수영장 탈의실에서 몰래카메라로 불법촬영을 당한 것 같아요. 어디에 신고하고 어떻게 대응해야 하나요?',
    ctaKeyword: '탈의실 불법촬영 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '탈의실 불법촬영 — 5단계 신고·삭제 대응 | 로앤가이드',
      description:
        '수영장·헬스장 탈의실 몰래카메라 불법촬영 피해라면 성폭력처벌법·신고·삭제 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>수영장이나 헬스장 탈의실에서 다른 칸 칸막이 아래 또는 물건 사이에 숨겨진 소형 카메라를 발견했거나, 시설 관계자가 불법 촬영 장치를 발견해 알려온 상황을 경험하셨다면 지금 당장 무엇부터 해야 할지 막막하실 것입니다. 내 영상이 이미 유포됐는지 알 수 없고, 경찰에 신고하면 어떤 절차가 진행되는지도 낯선 상황입니다. 성폭력범죄의 처벌 등에 관한 특례법 제14조 제1항은 \'카메라 등 이와 유사한 기능의 기계장치를 이용하여 성적 욕망 또는 수치심을 유발할 수 있는 사람의 신체를 촬영대상자의 의사에 반하여 촬영\'한 행위를 처벌하며, 촬영물 반포·유포도 같은 조 제2항으로 가중 평가됩니다. 탈의실 불법촬영 피해라면 ① 증거 보존 ② 경찰 신고 ③ 디지털성범죄피해자지원센터 ④ 삭제 차단 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 탈의실 불법촬영 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거 보존·신고·삭제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 카메라 기기 현장 사진·시설 CCTV 보존신청, 촬영 장치 위치 기록.</li>\n<li><strong>② 경찰 신고 (즉시)</strong> — 성폭력처벌법 제14조 위반 신고, 디지털 포렌식 의뢰.</li>\n<li><strong>③ 디지털성범죄피해자지원센터</strong> — d4u.stop.or.kr, 유포 모니터링·삭제 지원.</li>\n<li><strong>④ 해바라기센터 상담</strong> — 1899-3075, 심리·법률 통합 지원.</li>\n<li><strong>⑤ 민사 배상</strong> — 시설 관리자·촬영자 대상 위자료·치료비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 탈의실 불법촬영은 성폭력처벌법 제14조 카메라등이용촬영죄에 해당할 수 있는 영역입니다. 촬영 장치를 발견했다면 직접 만지지 말고 사진으로 남긴 후 경찰에 인계하는 것이 증거 보존에 도움이 됩니다. 영상 유포 여부는 디지털성범죄피해자지원센터에서 모니터링을 신청할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·디지털지원·해바라기·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 보존 (인지 당일)</strong> — 카메라 기기 사진 촬영, 직접 조작 금지, 시설 CCTV 보존신청.</li>\n<li><strong>2단계 — 경찰 신고 (즉시)</strong> — 여성청소년수사대 신고, 디지털 포렌식 압수수색 신청.</li>\n<li><strong>3단계 — 디지털성범죄피해자지원센터 신청 (즉시 병행)</strong> — d4u.stop.or.kr 유포 모니터링·삭제 지원.</li>\n<li><strong>4단계 — 해바라기센터 상담 (1~2주)</strong> — 심리 지원·법률 자문.</li>\n<li><strong>5단계 — 민사 청구 (시효 별도)</strong> — 촬영자·시설 관리자 공동 위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">탈의실 불법촬영 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 촬영 기기·시설·신고 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>촬영 기기 현장 사진(위치·외관, 직접 조작 금지)</strong></li>\n<li><strong>시설 CCTV 보존신청 공문(인지 당일 발송)</strong></li>\n<li><strong>시설 이용 내역·회원권·입장 기록</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>디지털성범죄피해자지원센터 신청 확인증</strong></li>\n<li><strong>해바라기센터 상담·진료 기록</strong></li>\n<li><strong>시설 관리자 안내·대응 경위 기록(문자·이메일)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 촬영 장치를 직접 만지면 지문이 남아 수사에 지장을 줄 수 있습니다. 발견 즉시 사진만 남기고 경찰에 인계하는 것이 좋습니다. 유포 여부 모니터링은 디지털성범죄피해자지원센터에서 무료로 신청할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영자 특정</strong> — 시설 CCTV·기기 지문·포렌식으로 특정.</li>\n<li><strong>촬영물 유포 여부</strong> — 디지털성범죄피해자지원센터 모니터링.</li>\n<li><strong>시설 관리 책임</strong> — 정기 점검 의무 위반 여부.</li>\n<li><strong>촬영 피해 범위</strong> — 단순 촬영인지 반포·배포 여부.</li>\n<li><strong>2차 피해 차단</strong> — 영상 확산 방지·삭제 절차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong> (유포 차단·삭제 지원)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 카메라등이용촬영죄 적용 범위',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 제1항에서 \'사람의 신체를 촬영한 행위\'는 신체 그 자체를 직접 촬영하는 행위만 해당한다고 판시했습니다. 탈의실 불법촬영 피해에서는 촬영 기기가 신체를 직접 향했는지가 적용 여부의 핵심 판단 자료가 될 수 있습니다.',
        takeaway: '탈의실 촬영 기기 위치·각도·포렌식 결과가 핵심 입증 자료 — 경찰 신고 + 디지털성범죄피해자지원센터 병행 검토 권장.',
      },
    ],
    faq: [
      {
        question: '카메라를 발견했는데 직접 만져도 되나요?',
        answer:
          '<strong>직접 조작하지 않고 사진만 남긴 후 경찰에 인계하는 것이 수사에 도움이 되는 영역입니다.</strong> 지문 보존이 중요합니다.',
      },
      {
        question: '내 영상이 이미 유포됐는지 어떻게 알 수 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터(d4u.stop.or.kr)에서 유포 모니터링을 신청할 수 있는 영역입니다.</strong> 즉시 신청을 권장합니다.',
      },
      {
        question: '시설 운영자도 책임이 있나요?',
        answer:
          '<strong>정기 점검 의무 위반 등 시설 관리 책임은 별도로 검토할 수 있는 영역입니다.</strong> 민사 공동청구를 검토해볼 수 있습니다.',
      },
      {
        question: '촬영자를 특정하기 어려우면 어떻게 하나요?',
        answer:
          '<strong>시설 CCTV·기기 포렌식·지문 등으로 특정을 시도하는 영역입니다.</strong> 경찰 수사에서 압수수색 신청을 검토해볼 수 있습니다.',
      },
      {
        question: '혼자서 신고하기 어려운데 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터(1899-3075) 또는 여성긴급전화(1366)에서 동반 신고 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 이용 가능합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },

  // ─── 3. sex-crime-acquaintance-incapacitated-state-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-acquaintance-incapacitated-state-track',
    keyword: '지인 항거불능 상태 추행',
    questionKeyword: '술자리 이후 기억이 끊겼는데 지인에게 추행당한 것 같아요. 준강제추행 피해로 신고할 수 있나요?',
    ctaKeyword: '지인 항거불능 추행 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '지인 항거불능 추행 — 준강제추행 5단계 대응 | 로앤가이드',
      description:
        '술자리 후 항거불능 상태 지인 추행 피해라면 준강제추행·증거·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>지인과의 술자리 후 기억이 끊겼거나 의식이 흐릿한 상태에서 신체 접촉이 있었다는 것을 나중에 알게 된 상황이라면, 무엇부터 해야 할지 혼란스럽고 신고를 해도 될지 망설여지실 수 있습니다. 지인이라는 관계 때문에 신고를 주저하거나 증거가 없다고 포기하지 않으셨으면 합니다. 형법 제299조는 \'사람의 심신상실 또는 항거불능의 상태를 이용하여 추행\'한 행위를 준강제추행죄로 규정하며, 대법원은 술에 의해 일시적으로 의식이 흐릿하거나 완전히 의식을 잃지 않아도 항거가 현저히 곤란한 상태면 항거불능으로 평가할 수 있다고 판시(2018도9781)했습니다. 피해자라면 ① 의료 검진 ② 증거 보존 ③ 해바라기센터 ④ 경찰 고소 ⑤ 심리 지원 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지인 항거불능 추행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 검진·증거·해바라기·고소·심리 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 의료 검진 (가능한 빨리)</strong> — 산부인과·응급실, 신체 흔적·혈중알코올 검사.</li>\n<li><strong>② 증거 보존</strong> — 당일 메시지·통화 기록, 장소 CCTV 보존신청, 의복 보존.</li>\n<li><strong>③ 해바라기센터 (1899-3075)</strong> — 의료·심리·법률 통합 지원, 동반 신고 가능.</li>\n<li><strong>④ 경찰 고소</strong> — 준강제추행 형법 제299조, 여성청소년수사대.</li>\n<li><strong>⑤ 심리 지원 (장기)</strong> — 외상 후 스트레스 치료, 해바라기센터·정신건강복지센터.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 준강제추행죄에서 항거불능 상태는 완전히 의식을 잃지 않더라도 심리적·물리적으로 반항이 현저히 곤란한 상태를 포함할 수 있습니다. 음주 정도·장소 CCTV·이후 메시지 기록이 항거불능 상태 입증 자료가 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·증거·해바라기·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 의료 검진 (인지 즉시·48시간 내 권장)</strong> — 응급실·산부인과, 신체 흔적·혈중알코올 기록.</li>\n<li><strong>2단계 — 증거 보존 (인지 당일)</strong> — 메시지·통화 기록, 의복 보존, 장소 CCTV 보존신청.</li>\n<li><strong>3단계 — 해바라기센터 상담 (즉시)</strong> — 1899-3075, 동반 신고·법률 자문.</li>\n<li><strong>4단계 — 경찰 고소 (시효 내)</strong> — 준강제추행 고소장 접수, 여성청소년수사대.</li>\n<li><strong>5단계 — 심리 지원 (수개월~장기)</strong> — 외상 후 스트레스 치료, 정신건강복지센터.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지인 항거불능 추행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 검진·증거·신고 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>응급실·산부인과 진료 기록·진단서</strong></li>\n<li><strong>당일 메시지·통화 기록(지인과 주고받은 내용)</strong></li>\n<li><strong>당일 의복(세탁 전 보존)</strong></li>\n<li><strong>장소 CCTV 보존신청 공문</strong></li>\n<li><strong>음주량·술자리 경위 시간순 정리표</strong></li>\n<li><strong>해바라기센터 상담·법률 자문 기록</strong></li>\n<li><strong>고소장(경찰 접수 후 사건번호)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신체 검진은 48시간 이내가 검출 가능성이 높습니다. 의복은 세탁하지 않고 봉투에 넣어 보존하는 것이 좋습니다. 메시지 기록은 스크린샷과 함께 백업을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항거불능 정도 입증</strong> — 음주량·신체 상태·장소 CCTV 정황.</li>\n<li><strong>가해자 인식 여부</strong> — 항거불능 상태를 알고 이용했는지 평가.</li>\n<li><strong>지인 관계 특성</strong> — 평소 관계·당일 경위 정황.</li>\n<li><strong>2차 피해 보호</strong> — 비공개 수사·신변보호 요청.</li>\n<li><strong>민사 손해배상</strong> — 형사와 별도 위자료·치료비 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>성폭력상담소 02-338-5801</strong> (한국성폭력상담소)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 준강제추행죄 항거불능 범위',
        summary:
          '대법원 2018도9781(대법원, 2021.02.04 선고) 영역에서 법원은 준강제추행죄의 \'항거불능\' 상태는 완전히 의식을 잃지 않더라도 심리적·물리적으로 반항이 현저히 곤란한 상태를 포함한다고 판시했습니다. 술자리 후 항거불능 상태 지인 추행 피해에서 음주 정도·행동 정황이 항거불능 여부 판단의 핵심 자료가 될 수 있으며, 해바라기센터와 경찰 고소를 병행하여 검토해볼 수 있습니다.',
        takeaway: '항거불능 상태는 의식 완전 상실을 요하지 않음 — 음주량·장소 CCTV·메시지 기록으로 정황 입증, 해바라기센터 동반 신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '기억이 끊겼는데 신고하면 증거가 없어서 안 된다고 하지 않을까요?',
        answer:
          '<strong>직접 목격이 없어도 정황 자료로 수사가 진행되는 영역입니다.</strong> 검진·CCTV·메시지 기록이 입증 자료가 될 수 있습니다.',
      },
      {
        question: '지인이라 신고하면 관계가 복잡해질 것 같아 망설여요.',
        answer:
          '<strong>해바라기센터에서 신고 여부를 먼저 상담해볼 수 있는 영역입니다.</strong> 강요 없이 충분한 안내를 받은 후 결정하셔도 됩니다.',
      },
      {
        question: '술을 많이 마셨는데 동의로 볼 수 없나요?',
        answer:
          '<strong>항거불능 상태에서의 행위는 동의로 보지 않는 영역입니다.</strong> 대법원은 심리적·물리적 반항 곤란 상태도 항거불능으로 평가할 수 있다고 봅니다.',
      },
      {
        question: '신체 검진을 바로 못 받았어요. 지금도 의미가 있나요?',
        answer:
          '<strong>시간이 지났더라도 진료 기록과 정황 자료로 수사가 가능한 영역입니다.</strong> 빠를수록 좋지만 늦었다고 포기할 필요는 없습니다.',
      },
      {
        question: '지인이 "합의를 해주면 조용히 하겠다"고 연락해오면 어떻게 하나요?',
        answer:
          '<strong>상대방의 연락 내용을 기록해두고 변호인이나 해바라기센터에 알리는 것을 검토해볼 수 있는 영역입니다.</strong> 섣불리 대응하지 않는 것이 좋습니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },

  // ─── 4. sex-crime-workplace-superior-authority-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-workplace-superior-authority-track',
    keyword: '직장 상사 위력 추행',
    questionKeyword: '직장 상사가 업무상 위력으로 신체 접촉을 해왔어요. 회사에 신고하고 형사 고소를 함께 진행할 수 있나요?',
    ctaKeyword: '직장 상사 위력 추행 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 상사 위력 추행 — 5단계 회사·형사 대응 | 로앤가이드',
      description:
        '직장 상사 업무상 위력 추행 피해라면 성폭력처벌법 제10조·회사신고·형사고소 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>직장에서 상사가 업무 지시·평가 권한을 이용해 신체 접촉을 반복해온 상황을 경험하고 계신다면, "이게 정말 추행인가", "신고하면 인사 불이익을 받지 않을까" 하는 걱정이 앞서실 것입니다. 성폭력범죄의 처벌 등에 관한 특례법 제10조 제1항은 \'업무·고용 그 밖의 관계로 자기의 보호·감독을 받는 사람에 대해 위계 또는 위력으로 추행\'한 행위를 업무상위력등에의한추행으로 규정하며, 대법원은 직장 내 보호·감독 관계뿐 아니라 채용 절차에서 영향력의 범위 안에 있는 경우도 포함될 수 있다고 판시(2020도5646)했습니다. 피해자라면 ① 증거 보존 ② 회사 신고 ③ 해바라기센터 ④ 형사 고소 ⑤ 불이익 차단 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 상사 위력 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·회사신고·해바라기·형사·불이익차단 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 메시지·이메일·사내 메신저·목격자·피해 일지 작성.</li>\n<li><strong>② 회사 신고</strong> — 성희롱·성폭력 고충처리·인사부서 신고, 분리·보호 요청.</li>\n<li><strong>③ 해바라기센터 (1899-3075)</strong> — 심리·법률 통합 지원.</li>\n<li><strong>④ 형사 고소</strong> — 성폭력처벌법 제10조 업무상위력추행, 여성청소년수사대.</li>\n<li><strong>⑤ 불이익 차단</strong> — 남녀고용평등법상 불이익 조치 금지, 신고 후 인사 변동 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 업무상위력추행은 물리적 폭행·협박 없이 지위·권한만으로도 성립할 수 있는 영역입니다. 대법원은 위력이 현실적으로 피해자의 의사를 제압할 것을 요하지 않는다고 봅니다. 회사 신고와 형사 고소는 동시에 병행할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·회사·형사·불이익 차단 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (인지 즉시)</strong> — 메시지·이메일·사내 메신저 캡처, 피해 일지 작성.</li>\n<li><strong>2단계 — 회사 신고 (1~2주)</strong> — 고충처리·인사부서 신고, 분리·불이익 금지 요청.</li>\n<li><strong>3단계 — 해바라기센터 상담 (즉시 병행)</strong> — 1899-3075, 심리·법률 지원.</li>\n<li><strong>4단계 — 형사 고소 (시효 내)</strong> — 성폭력처벌법 제10조, 여성청소년수사대 신고.</li>\n<li><strong>5단계 — 불이익 모니터링 (고소 후)</strong> — 인사 변동·업무 배제 기록, 남녀고용평등법 제14조의2 보호.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 상사 위력 추행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 메시지·신고·불이익 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>메시지·이메일·사내 메신저 캡처(날짜·내용 포함)</strong></li>\n<li><strong>피해 일지(날짜·장소·내용·목격자 기재)</strong></li>\n<li><strong>회사 고충처리 신고 접수증</strong></li>\n<li><strong>가해자 직책·고용 관계 입증 자료(명함·조직도)</strong></li>\n<li><strong>해바라기센터 상담·진료 기록</strong></li>\n<li><strong>형사 고소장(경찰 접수 사건번호)</strong></li>\n<li><strong>신고 후 인사 변동·불이익 기록(문자·이메일·발령 통보)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 신고 전 메시지·이메일을 먼저 캡처해두는 것이 좋습니다. 신고 후 인사 변동이 발생하면 즉시 기록해 남녀고용평등법상 불이익 조치 금지 위반 자료로 활용해볼 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위력 범위</strong> — 물리적 폭행 없이 지위·권한만으로 위력 인정 여부.</li>\n<li><strong>보호·감독 관계</strong> — 직장 상하관계 인정 범위.</li>\n<li><strong>회사 책임</strong> — 고충처리 지연·2차 피해 발생 시 사용자 책임.</li>\n<li><strong>신고 후 불이익</strong> — 남녀고용평등법 제14조의2 불이익 조치 금지.</li>\n<li><strong>민사 위자료</strong> — 형사와 별도 위자료 청구 가능 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>고용노동부 직장 내 성희롱 신고센터 1350</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상위력추행 보호·감독 관계 범위',
        summary:
          '대법원 2020도5646(대법원, 2020.07.09 선고) 영역에서 법원은 성폭력처벌법 제10조의 \'업무·고용 관계로 자기의 보호·감독을 받는 사람\'에는 직장 내 보호·감독을 받는 경우뿐 아니라 채용 절차에서 영향력의 범위 안에 있는 경우도 포함된다고 판시했습니다. 직장 상사의 업무상 위력 추행 피해에서 지위·평가권 행사 여부가 위력 인정의 핵심 판단 자료가 될 수 있습니다.',
        takeaway: '직장 상하관계 + 평가권·지시권 행사 결합 시 업무상위력추행 평가 영역 — 메시지·피해 일지 보존 후 해바라기센터·형사 고소 병행 검토 권장.',
      },
    ],
    faq: [
      {
        question: '신체 접촉이 한 번뿐인데도 위력 추행이 될 수 있나요?',
        answer:
          '<strong>횟수보다 위력 행사 여부와 접촉 경위가 평가 대상이 되는 영역입니다.</strong> 단 1회라도 위력이 인정되면 적용될 수 있습니다.',
      },
      {
        question: '회사에 신고하면 상사가 알게 돼서 불이익이 걱정돼요.',
        answer:
          '<strong>남녀고용평등법 제14조의2는 신고를 이유로 한 불이익 조치를 금지하는 영역입니다.</strong> 신고 후 변동 사항을 즉시 기록해두는 것이 좋습니다.',
      },
      {
        question: '물리적 폭행이 없었는데도 형사 고소가 가능한가요?',
        answer:
          '<strong>업무상위력추행은 폭행·협박 없이 지위·권한만으로 성립할 수 있는 영역입니다.</strong> 대법원도 이를 인정한 사례 흐름이 있습니다.',
      },
      {
        question: '회사 조사와 형사 수사를 동시에 진행해도 되나요?',
        answer:
          '<strong>두 절차는 독립적으로 진행할 수 있는 영역입니다.</strong> 회사 신고와 형사 고소를 병행하는 것을 검토해볼 수 있습니다.',
      },
      {
        question: '상사가 "오해"라고 하는데 어떻게 반박하나요?',
        answer:
          '<strong>메시지·피해 일지·목격자 진술이 정황 자료가 되는 영역입니다.</strong> 시간순 피해 일지를 꼼꼼히 작성해두세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },
];
