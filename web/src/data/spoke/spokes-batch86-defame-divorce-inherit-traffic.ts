import { SpokePage } from '../spoke-pages';

// batch86 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-03)
//
// 고유 존재 이유:
// 1. divorce-spouse-adultery-evidence-track — 배우자 부정행위 증거를 잡은 피해 배우자가 상간자·배우자에 대한 위자료와 이혼을 구하는 판단형 트랙. 부진정연대책임·위자료 소멸시효 기산점(혼인 해소 시)이 핵심.
// 2. divorce-hidden-asset-division-track — 배우자가 파탄 후 재산을 빼돌린 경우의 재산분할 판단형 트랙. 파탄 후 처분 재산의 분할대상 포함 여부와 기준시점이 핵심.
// 3. divorce-child-custody-parental-track — 양육권·친권 다툼과 재산분할 제척기간(2년 출소기간)이 결합된 판단형 트랙. 양육비 분담 기간 직권 조정과 자의 복리 기준이 핵심.
// 4. divorce-foreign-spouse-track — 외국인 배우자가 한국인 배우자의 폭력으로 이혼을 구하는 절차형 트랙. 준거법(상거소)·심히 부당한 대우·파탄 사유가 핵심.
// 5. defamation-review-rating-attack-track — 별점테러·허위 리뷰 피해 사업자의 정보통신망법 명예훼손 판단형 트랙. 허위사실 인식·비방 목적과 공공의 이익 관계가 핵심.
// 6. defamation-apartment-board-posting-track — 아파트 게시판·전화 발언 명예훼손 판단형 트랙. 전파가능성 공연성과 미필적 고의 엄격 증명이 핵심.
// 7. defamation-delivery-app-false-review-track — 배달앱 허위 후기 명예훼손 판단형 트랙. 이미 떠도는 소문 재적시의 공연성과 사실 적시 정도·비방 목적이 핵심.
// 8. defamation-press-interview-falsely-accused-defense — accused 관점. 언론 인터뷰 발언이 형법 제310조 공익·진실성으로 위법성조각되는지 다투는 방어 트랙. 부수적 사익 목적·모욕 성부가 핵심.
// 9. inheritance-minor-heir-renunciation-track — 미성년 상속인 상속포기·한정승인 절차형 트랙. 한정승인 시 순상속분 0 처리·유류분 부족액 산정과 3개월 기간이 핵심.
// 10. traffic-accident-crosswalk-pedestrian-track — 횡단보도 보행자 사고 피해자 과실·구상 판단형 트랙. 건보공단 대위 범위와 책임보험금 단서 규정 증액분의 의미가 핵심.

export const spokesBatch86DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-spouse-adultery-evidence-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-adultery-evidence-track',
    keyword: '배우자 부정행위 증거 이혼',
    questionKeyword: '배우자의 외도 증거를 확보했어요. 배우자와 상대방 모두에게 위자료를 청구하고 싶은데, 둘이 함께 책임지는 건지, 또 위자료를 청구할 수 있는 기간은 언제까지인지 막막합니다.',
    ctaKeyword: '배우자 부정행위 위자료·이혼 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '부정행위 이혼 — 5단계 위자료·소멸시효 점검 | 로앤가이드',
      description:
        '배우자 외도 증거를 잡아 위자료·이혼을 고민한다면, 민법 제750조·제840조 제1호와 배우자·상간자의 부진정연대책임, 위자료 소멸시효 기산점(혼인 해소 시) 3년까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 의심 끝에 배우자의 부정행위를 보여주는 증거를 확보한 상황입니다. 배신감에 잠을 이루기 어렵고, 배우자뿐 아니라 그 상대방에게도 책임을 묻고 싶은데, 두 사람이 함께 책임을 지는 것인지, 한쪽에게만 청구해야 하는지 헷갈립니다. 게다가 위자료를 청구할 수 있는 기간이 정해져 있다는 말을 들어 행여 시기를 놓치지는 않을지, 이혼은 어떻게 진행해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제750조는 불법행위로 인한 손해배상을, 민법 제840조 제1호는 배우자에게 부정한 행위가 있었을 때를 재판상 이혼 사유로 정하며, 민법 제766조 제1항은 손해 및 가해자를 안 날부터 3년의 단기소멸시효를 정하는 영역입니다. 판례는 부부 일방이 부정행위를 하면 그로 인해 배우자가 입은 정신적 고통에 대해 불법행위 손해배상의무를 지고, 제3자가 부정행위로 부부공동생활을 침해해 배우자에게 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하며, 부부 일방과 제3자가 부담하는 책임은 공동불법행위로서 부진정연대채무 관계에 있다고 보았습니다. 또한 이혼을 원인으로 하는 위자료청구권의 손해는 최종적 이혼 시점에 확정·평가되고 단기소멸시효는 혼인 해소 시부터 기산된다고 본 사례 흐름이 있는 영역입니다. 부정행위 + 증거 + 위자료·이혼 결합은 \'책임 범위·소멸시효\' 정리가 필요한 트랙입니다. 당사자라면 ① 증거 확보 ② 부정행위 ③ 위자료 ④ 소멸시효 ⑤ 이혼 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 증거 ② 부정행위 ③ 위자료 ④ 시효 ⑤ 이혼 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 부정행위 증거 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거 확보·부정행위·위자료·소멸시효·이혼 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 확보</strong> — 부정행위를 보여주는 자료의 적법한 확보·보존 정리.</li>\n<li><strong>② 부정행위</strong> — 민법 제840조 제1호 부정한 행위 해당 여부 정리.</li>\n<li><strong>③ 위자료</strong> — 배우자·상간자에 대한 위자료 청구와 부진정연대책임 검토.</li>\n<li><strong>④ 소멸시효</strong> — 손해·가해자를 안 날부터 3년 단기소멸시효 기산점 확인.</li>\n<li><strong>⑤ 이혼</strong> — 재판상 이혼·재산분할·양육 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 부정행위를 한 배우자와 상대방의 책임은 공동불법행위로서 부진정연대채무 관계에 있고, 이혼을 원인으로 한 위자료의 단기소멸시효는 혼인 해소 시부터 기산되는 영역. 증거는 적법한 방법으로 확보·정리하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 확보·보존 (즉시)</strong> — 부정행위 정황 자료를 적법한 방법으로 확보·보존.</li>\n<li><strong>2단계 — 부정행위·책임 정리 (1~2주)</strong> — 제840조 제1호 해당 여부, 배우자·상간자 책임 정리.</li>\n<li><strong>3단계 — 위자료·소멸시효 정리 (2~3주)</strong> — 위자료 범위, 소멸시효 기산점·도과 여부 정리.</li>\n<li><strong>4단계 — 이혼·위자료 청구 (소 제기 시)</strong> — 재판상 이혼·위자료·재산분할 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 위자료·재산분할 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 부정행위 위자료·이혼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 증거·책임·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부정행위 정황 자료 (메시지·사진·진술 등)</strong></li>\n<li><strong>상대방(상간자) 인적사항·연락 자료 (공동책임)</strong></li>\n<li><strong>정신적 고통·치료·상담 기록 (위자료 입증)</strong></li>\n<li><strong>혼인 해소 시점·소송 경과 자료 (소멸시효)</strong></li>\n<li><strong>부부 재산·소득 자료 (재산분할)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자와 상대방은 공동불법행위로서 부진정연대채무 관계에 있어 어느 한쪽에게 전부를 청구할 수도 있는 영역이므로 두 사람 모두에 대한 자료를 정리하는 것이 핵심. 이혼을 원인으로 한 위자료는 혼인이 해소된 때부터 3년 안에 청구를 검토해야 하므로 혼인 해소 시점도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부정행위 인정</strong> — 제840조 제1호 부정한 행위에 해당하는지.</li>\n<li><strong>증거 적법성</strong> — 부정행위 증거의 수집 방법이 적법한지.</li>\n<li><strong>공동책임</strong> — 배우자·상간자의 부진정연대책임 범위.</li>\n<li><strong>소멸시효</strong> — 손해·가해자를 안 날 또는 혼인 해소 시 기산점.</li>\n<li><strong>위자료 범위</strong> — 정신적 고통에 대한 위자료 인정 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정행위 공동불법행위와 위자료 소멸시효',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 부부 일방이 부정행위를 한 경우 그로 인해 배우자가 입은 정신적 고통에 대해 불법행위 손해배상의무를 지고, 제3자가 부정행위로 혼인의 본질에 해당하는 부부공동생활을 침해해 배우자에게 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하며, 부부 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 보았습니다. 또한 이혼을 원인으로 하는 위자료청구권은 최종적 이혼 시점에서 손해가 확정·평가되고, 피해 배우자는 혼인이 해소된 때에 손해 및 가해자를 알았다고 봄이 상당하므로 그때부터 3년이 지나야 민법 제766조 제1항의 단기소멸시효가 완성된다고 판시했습니다. 부정행위 위자료 사안에서도 공동책임·시효 기산점을 검토해볼 수 있습니다.',
        takeaway: '부정행위 + 증거 + 위자료·이혼 결합 시 부진정연대책임·위자료 소멸시효(혼인 해소 시 3년)·증거 적법성 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자와 상대방 둘 다에게 위자료를 청구할 수 있나요?',
        answer:
          '<strong>두 사람의 책임은 공동불법행위로서 부진정연대채무 관계로 보아 함께 청구를 검토할 수 있는 영역입니다.</strong> 양쪽 인적사항·증거를 정리.',
      },
      {
        question: '위자료는 언제까지 청구해야 하나요?',
        answer:
          '<strong>이혼을 원인으로 한 위자료는 혼인이 해소된 때부터 3년 단기소멸시효가 진행되는 영역입니다.</strong> 혼인 해소 시점 자료를 정리.',
      },
      {
        question: '몰래 모은 증거도 쓸 수 있나요?',
        answer:
          '<strong>증거 수집 방법의 적법성이 다투어질 수 있어 신중한 검토가 필요한 영역입니다.</strong> 확보 경위·방법 자료를 정리.',
      },
      {
        question: '부정행위만으로 이혼이 되나요?',
        answer:
          '<strong>배우자의 부정한 행위는 재판상 이혼 사유에 해당할 수 있는 영역입니다.</strong> 부정행위 정황 자료를 정리.',
      },
      {
        question: '용서하고 함께 산 뒤에도 위자료가 되나요?',
        answer:
          '<strong>사후 용서·동거 등 사정에 따라 위자료 인정이 달라질 수 있는 영역입니다.</strong> 경위·시점 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '상간자 위자료 청구', href: '/guide/divorce/divorce-adultery-consolation-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '부정행위 증거 수집', href: '/guide/divorce/divorce-affair-evidence-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 2. divorce-hidden-asset-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-hidden-asset-division-track',
    keyword: '재산은닉 재산분할',
    questionKeyword: '이혼을 앞두고 배우자가 재산을 빼돌리거나 미리 처분해버린 것 같아요. 파탄된 뒤에 처분한 재산도 재산분할에 넣을 수 있는지, 어느 시점 재산을 기준으로 나누는지 막막합니다.',
    ctaKeyword: '재산은닉·파탄 후 처분 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '재산은닉 재산분할 — 5단계 처분재산·기준시점 점검 | 로앤가이드',
      description:
        '이혼 앞두고 배우자가 재산을 빼돌렸다면, 민법 제839조의2 재산분할과 파탄 후 처분 재산의 분할대상 포함 여부, 변론종결일 기준·재산명시·2년 제척기간까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 결심하고 보니 배우자가 함께 모은 재산을 어딘가로 빼돌리거나 미리 헐값에 처분해버린 정황이 보이는 상황입니다. 정작 나눠야 할 재산은 줄어들고, 명의도 죄다 상대 앞으로 되어 있어 제 몫을 제대로 받을 수 있을지 막막합니다. 부부 사이가 사실상 깨진 뒤에 상대가 처분한 재산도 재산분할 대상에 넣을 수 있는지, 도대체 어느 시점의 재산을 기준으로 나누는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2·제843조는 협의·재판상 이혼에 따른 재산분할청구권을, 민법 제746조는 불법원인급여를 정하는 영역입니다. 판례는 이혼에 의한 재산분할이 재산의 명의와 상관없이 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할하는 제도임을 전제로, 혼인관계 파탄 이후 변론종결일 사이 생긴 재산 변동이 공동재산 형성과 무관하다는 등의 사정이 있으면 그 재산은 분할 대상에서 제외하되, 파탄 이후 부부공동생활이나 공동재산 형성·유지와 관련 없이 일방이 적극재산을 처분한 경우에는 그 재산을 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있다고 본 사례 흐름이 있는 영역입니다. 재산은닉 + 파탄 후 처분 + 재산분할 결합은 \'분할대상·기준시점\' 다툼이 가능한 트랙입니다. 당사자라면 ① 재산 파악 ② 처분 정황 ③ 분할대상 ④ 기준시점 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 처분 ③ 대상 ④ 기준시점 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재산은닉 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산 파악·처분 정황·분할대상·기준시점·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산 파악</strong> — 부부 적극·소극재산, 은닉·처분 의심 재산 파악.</li>\n<li><strong>② 처분 정황</strong> — 파탄 전후 처분 시점·경위·공동재산 관련성 정리.</li>\n<li><strong>③ 분할대상</strong> — 파탄 후 처분 재산의 분할 대상 포함 여부 검토.</li>\n<li><strong>④ 기준시점</strong> — 분할 대상·가액의 기준시점(사실심 변론종결일) 정리.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 파탄 이후 부부공동생활·공동재산 형성과 관련 없이 일방이 적극재산을 처분했다면 그 재산을 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있는 영역. 처분 시점·경위 정리가 중요한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·거래 자료 보존 (즉시)</strong> — 부동산 등기·계좌·거래 내역, 처분 의심 자료 보존.</li>\n<li><strong>2단계 — 처분 정황 정리 (1~2주)</strong> — 파탄 시점, 처분 시점·경위·공동재산 관련성 정리.</li>\n<li><strong>3단계 — 분할대상·기준시점 정리 (2~3주)</strong> — 처분 재산 포함 여부, 변론종결일 기준 가액 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">재산은닉·파탄 후 처분 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·처분·기준시점 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>처분·이체·인출 거래 내역 (은닉·처분 정황)</strong></li>\n<li><strong>처분 시점·경위 입증 자료 (파탄 후 처분)</strong></li>\n<li><strong>혼인 파탄 시점 입증 자료 (기준시점)</strong></li>\n<li><strong>재산 형성·기여 입증 자료 (기여도)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분할 대상·가액은 원칙적으로 사실심 변론종결일을 기준으로 정해지는 영역이지만, 파탄 이후 공동재산과 관련 없이 일방이 처분한 적극재산은 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함될 수 있는 점이 핵심. 처분 시점·경위와 거래 내역을 시간 순으로 정리하고 재산명시·조회를 함께 활용하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>처분 시점</strong> — 처분이 혼인 파탄 전인지 후인지.</li>\n<li><strong>공동재산 관련성</strong> — 처분이 부부공동생활·공동재산 형성과 관련된지.</li>\n<li><strong>분할대상 포함</strong> — 파탄 후 처분 재산을 분할 대상에 포함할지.</li>\n<li><strong>기준시점·가액</strong> — 변론종결일 기준 가액 산정.</li>\n<li><strong>기여도</strong> — 재산 형성·유지에 대한 기여도 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한변협 법률구조재단</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파탄 후 처분 재산과 재산분할 대상',
        summary:
          '대법원 2024므13669(대법원, 2025.10.16 선고) 영역에서 법원은 이혼에 의한 재산분할이 재산의 명의와 상관없이 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할하는 제도임을 전제로, 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관하다는 등의 사정이 있는 경우 그 변동된 재산은 재산분할 대상에서 제외하여야 한다고 보았습니다. 다만 혼인관계가 파탄된 이후 부부 일방이 부부공동생활이나 부부공동재산의 형성·유지와 관련 없이 적극재산을 처분한 경우에는 그 재산을 사실심 변론종결일에 그대로 보유한 것으로 보아 분할 대상 재산에 포함할 수 있고, 그 처분이 부부공동생활·공동재산 형성·유지와 관련된 경우에는 변론종결일에 존재하지 않는 재산을 분할 대상으로 삼을 수 없다고 판시했습니다. 재산은닉 사안에서도 처분 시점·관련성을 검토해볼 수 있습니다.',
        takeaway: '재산은닉 + 파탄 후 처분 + 재산분할 결합 시 처분 시점·공동재산 관련성·변론종결일 기준 분할대상 포함 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자가 빼돌린 재산도 나눌 수 있나요?',
        answer:
          '<strong>파탄 후 공동재산과 무관하게 처분한 적극재산은 보유한 것으로 보아 분할 대상에 포함될 수 있는 영역입니다.</strong> 처분 시점·경위 자료를 정리.',
      },
      {
        question: '재산은 어느 시점 기준으로 나누나요?',
        answer:
          '<strong>분할 대상·가액은 원칙적으로 사실심 변론종결일을 기준으로 정하는 영역입니다.</strong> 시점별 재산·가액 자료를 정리.',
      },
      {
        question: '명의가 전부 상대 앞으로 돼 있는데 나눌 수 있나요?',
        answer:
          '<strong>명의와 상관없이 형성·유지에 기여한 실질에 따라 분할이 검토되는 영역입니다.</strong> 기여·형성 자료를 정리.',
      },
      {
        question: '숨긴 재산은 어떻게 찾나요?',
        answer:
          '<strong>재산명시·재산조회 신청 등으로 상대 재산을 확인하는 절차를 검토할 수 있는 영역입니다.</strong> 거래·계좌 단서를 먼저 정리.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간(제척기간)인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '사해행위 취소·보전', href: '/guide/divorce/divorce-fraudulent-act-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 3. divorce-child-custody-parental-track ───
  {
    domain: 'divorce',
    slug: 'divorce-child-custody-parental-track',
    keyword: '양육권 친권 다툼',
    questionKeyword: '이혼하면서 아이의 양육권·친권을 두고 배우자와 다투고 있어요. 어떤 기준으로 양육자가 정해지는지, 한번 정한 양육비나 양육 기간이 사정 변화에 따라 바뀔 수 있는지 막막합니다.',
    ctaKeyword: '양육권·친권 지정 기준 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '양육권 친권 다툼 — 5단계 양육자·양육비 점검 | 로앤가이드',
      description:
        '이혼하며 양육권·친권을 다툰다면, 자의 복리를 기준으로 한 양육자·친권자 지정과 가정법원의 직권 양육비 분담 조정, 재산분할 2년 제척기간까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 진행하면서 아이를 누가 키울지를 두고 배우자와 한 치도 물러서지 않는 다툼을 벌이고 있는 상황입니다. 그동안 주로 제가 아이를 돌봐 왔는데도 상대가 양육권을 가져가려 해 불안하고, 양육비는 얼마로 정해지는지, 한번 정한 양육비나 양육 기간이 나중에 사정이 바뀌면 다시 조정될 수 있는지도 막막합니다. 법원이 무엇을 기준으로 양육자·친권자를 정하는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제837조·제909조는 자녀의 양육에 관한 사항과 친권자 지정을, 가사소송법은 양육비 등 마류 가사비송사건의 처리를 정하는 영역입니다. 판례는 가정법원이 양육비용의 분담을 정할 때 자의 복리를 위해 필요한 경우 청구에 구애받지 않고 직권으로 양육비용 분담에 관한 기간을 정할 수 있고, 양육자로 지정된 자가 실제로 자녀를 양육하지 않고 있는 사실이 확인되면 이를 반영해 장래 양육비 지급 기간을 다시 정해야 한다고 보았습니다. 또한 재산분할청구권의 2년 제척기간은 출소기간으로서 그 기간 내에 재산분할심판을 청구해야 한다고 본 사례 흐름이 있는 영역입니다. 양육권·친권 + 양육비 + 재산분할 결합은 \'양육자 지정·양육비 조정\' 다툼이 가능한 트랙입니다. 당사자라면 ① 양육 실태 ② 양육자 지정 ③ 친권자 ④ 양육비 ⑤ 사정변경 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 실태 ② 양육자 ③ 친권 ④ 양육비 ⑤ 변경 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 양육권 친권 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육 실태·양육자 지정·친권자·양육비·사정변경 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양육 실태</strong> — 그동안의 양육 참여·생활 환경·자녀 의사 정리.</li>\n<li><strong>② 양육자 지정</strong> — 자의 복리를 기준으로 한 양육자 지정 검토.</li>\n<li><strong>③ 친권자</strong> — 친권자 지정과 양육자와의 관계 정리.</li>\n<li><strong>④ 양육비</strong> — 양육비 산정·분담, 직권 기간 조정 검토.</li>\n<li><strong>⑤ 사정변경</strong> — 실제 양육 변동 시 양육비·양육 기간 변경 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 가정법원은 자의 복리를 위해 청구에 구애받지 않고 직권으로 양육비용 분담 기간을 정할 수 있고, 양육자가 실제로 자녀를 양육하지 않는 사실이 확인되면 장래 양육비 기간을 다시 정해야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육 실태 자료 정리 (즉시)</strong> — 양육 참여·생활 환경·자녀 의사·소득 자료 정리.</li>\n<li><strong>2단계 — 양육자·친권자 정리 (1~2주)</strong> — 자의 복리 기준 양육자·친권자 지정 쟁점 정리.</li>\n<li><strong>3단계 — 양육비 산정 (2~3주)</strong> — 양육비 산정기준·분담, 직권 기간 조정 가능성 정리.</li>\n<li><strong>4단계 — 이혼·양육 청구 (소 제기 시)</strong> — 친권·양육자 지정·양육비·면접교섭 청구.</li>\n<li><strong>5단계 — 판결·변경 (선고 후)</strong> — 양육 변동 시 양육비·양육 사항 변경 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육권·친권 지정 기준 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 양육·친권·양육비 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인·자녀 확인)</strong></li>\n<li><strong>그동안의 양육 참여 자료 (양육 실태)</strong></li>\n<li><strong>주거·생활 환경 자료 (양육 환경)</strong></li>\n<li><strong>본인·상대 소득·재산 자료 (양육비 산정)</strong></li>\n<li><strong>자녀 의사·학교·생활 자료 (자의 복리)</strong></li>\n<li><strong>실제 양육 변동 입증 자료 (사정변경)</strong></li>\n<li><strong>면접교섭·양육비 청구 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육자·친권자 지정은 자녀의 복리를 최우선 기준으로 판단되는 영역이므로 그동안 누가 주로 양육했는지·양육 환경·자녀 의사를 보여주는 자료를 정리하는 것이 핵심. 양육비는 한번 정해져도 실제 양육 실태가 달라지면 직권으로 기간이 조정되거나 변경 청구가 검토될 수 있는 점을 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>양육자 지정</strong> — 자의 복리를 기준으로 누구를 양육자로 정할지.</li>\n<li><strong>친권자 지정</strong> — 친권자와 양육자의 분리 여부.</li>\n<li><strong>양육비 산정</strong> — 양육비 산정기준·분담 비율.</li>\n<li><strong>양육 기간 조정</strong> — 실제 양육 변동에 따른 직권 기간 조정.</li>\n<li><strong>면접교섭</strong> — 비양육친의 면접교섭 범위·방법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (친권·양육자·양육비 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직권 양육비 기간 조정과 자의 복리',
        summary:
          '대법원 2021스766(대법원, 2022.11.10 선고) 영역에서 법원은 양육자로 지정된 양육친이 비양육친을 상대로 제기한 양육비 청구 사건에서, 제1심이 자녀가 성년에 이르기 전날을 종기로 삼아 장래 양육비 분담을 정하였더라도, 항고심이 양육에 관한 사항을 심리한 결과 일정 시점 이후에는 양육자로 지정된 자가 실제로 자녀를 양육하지 않고 있는 사실이 확인된 경우 이를 반영해 장래 양육비 지급 기간을 다시 정해야 한다고 보았습니다. 또한 가정법원은 양육비용의 분담을 정할 때 자의 복리를 위하여 청구에 구애받지 않고 직권으로 양육비용 분담에 관한 기간을 정할 수 있다고 판시했습니다. 양육권·양육비 사안에서도 자의 복리·실제 양육 실태를 검토해볼 수 있습니다.',
        takeaway: '양육권·친권 + 양육비 + 재산분할 결합 시 자의 복리 기준 양육자 지정·직권 양육비 기간 조정·실제 양육 실태 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '양육자는 무엇을 기준으로 정해지나요?',
        answer:
          '<strong>자녀의 복리를 최우선 기준으로 양육 실태·환경·자녀 의사를 종합해 정하는 영역입니다.</strong> 양육 참여·환경 자료를 정리.',
      },
      {
        question: '친권자와 양육자가 다를 수 있나요?',
        answer:
          '<strong>자의 복리에 따라 친권자와 양육자를 분리해 정할 수도 있는 영역입니다.</strong> 자녀 상황·양육 실태를 정리.',
      },
      {
        question: '양육비는 한번 정하면 못 바꾸나요?',
        answer:
          '<strong>실제 양육 실태나 사정이 달라지면 양육비·양육 기간을 변경 청구할 수 있는 영역입니다.</strong> 변동 사정 자료를 정리.',
      },
      {
        question: '실제로는 제가 키우는데 양육비를 못 받으면요?',
        answer:
          '<strong>법원이 직권으로 실제 양육 실태를 반영해 양육비 기간을 정할 수 있는 영역입니다.</strong> 실제 양육 입증 자료를 정리.',
      },
      {
        question: '재산분할은 양육과 함께 청구해야 하나요?',
        answer:
          '<strong>재산분할청구권은 이혼한 날부터 2년의 제척기간 내에 청구해야 하는 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육자 지정 기준', href: '/guide/divorce/divorce-custody-designation-track' },
      { label: '친권자 지정 기준', href: '/guide/divorce/divorce-parental-authority-track' },
      { label: '양육비 산정·청구', href: '/guide/divorce/divorce-child-support-calculation-track' },
      { label: '면접교섭권 행사', href: '/guide/divorce/divorce-visitation-right-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 4. divorce-foreign-spouse-track ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-track',
    keyword: '외국인 배우자 이혼',
    questionKeyword: '한국인 배우자와 결혼한 외국인입니다. 배우자의 반복된 폭력으로 혼인이 깨졌는데, 어느 나라 법으로 이혼하는지, 제 잘못을 탓하며 책임을 떠넘기면 이혼이 안 되는지 막막합니다.',
    ctaKeyword: '외국인 배우자 이혼 준거법·사유 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 이혼 — 5단계 준거법·사유 점검 | 로앤가이드',
      description:
        '한국인 배우자의 폭력으로 이혼을 고민하는 외국인이라면, 국제사법 상거소 기준 준거법과 민법 제840조 제3호 심히 부당한 대우·제6호 파탄 사유, 체류·증거까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한국인 배우자와 혼인신고를 마치고 함께 살아온 외국 국적의 배우자입니다. 배우자의 반복된 폭력으로 더는 혼인을 이어갈 수 없는 상태가 되었는데, 외국인인 제가 한국에서 이혼을 하려면 어느 나라 법으로 진행되는지, 말과 글이 익숙하지 않아 소송을 감당할 수 있을지 막막합니다. 게다가 배우자가 \'네가 먼저 화를 돋워 때린 것\'이라며 제게 책임을 떠넘기면 이혼이 받아들여지지 않는 건 아닌지 도무지 가늠이 되지 않아 답답한 상태입니다." 국제사법은 이혼 등 가사사건의 준거법을 정하고, 부부 일방이 대한민국에 상거소를 두고 있는 경우 등에는 이혼에 관한 준거법이 대한민국 민법이 되는 영역입니다. 민법 제840조 제3호는 배우자로부터 심히 부당한 대우를 받았을 때를, 같은 조 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정합니다. 판례는 한국인 배우자가 외국인 배우자에게 반복적으로 폭력을 행사하고 그 정도도 무거운 사안에서, 그 행위가 심히 부당한 대우에 해당할 뿐 아니라 혼인관계가 애정과 신뢰를 상실해 회복할 수 없을 정도로 파탄되었으므로 제840조 제3호 또는 제6호의 이혼 사유에 해당하는데도, 외국인 배우자에게 폭력 유발 책임이 있다는 등의 이유로 이혼 청구를 배척한 원심에 법리오해의 잘못이 있다고 본 사례 흐름이 있는 영역입니다. 외국인 배우자 + 폭력 + 이혼 결합은 \'준거법·이혼 사유·책임정도\' 정리가 필요한 트랙입니다. 당사자라면 ① 준거법 ② 폭력 증거 ③ 이혼 사유 ④ 책임정도 ⑤ 체류·자녀 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 준거법 ② 증거 ③ 사유 ④ 책임 ⑤ 체류 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 배우자 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 준거법·폭력 증거·이혼 사유·책임정도·체류·자녀 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 준거법</strong> — 상거소 등에 따른 이혼 준거법(대한민국 민법 여부) 확인.</li>\n<li><strong>② 폭력 증거</strong> — 반복된 폭력·피해 정황 자료의 확보·보존.</li>\n<li><strong>③ 이혼 사유</strong> — 심히 부당한 대우(제3호)·파탄(제6호) 해당 여부 정리.</li>\n<li><strong>④ 책임정도</strong> — 파탄에 관한 쌍방 책임정도, 유발 주장 대응.</li>\n<li><strong>⑤ 체류·자녀</strong> — 이혼 후 체류 자격, 친권·양육·양육비 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 한국인 배우자가 외국인 배우자에게 반복적으로 무거운 폭력을 행사했다면 심히 부당한 대우·파탄 사유에 해당할 수 있고, 외국인 배우자에게 유발 책임이 있다는 이유만으로 이혼 청구를 배척해서는 안 되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·여성긴급전화·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신변 안전·증거 확보 (즉시)</strong> — 긴급 시 112·1366, 진단서·신고 이력 등 폭력 증거 확보.</li>\n<li><strong>2단계 — 준거법·자료 정리 (1주)</strong> — 상거소 등 준거법, 혼인·체류 자료 정리.</li>\n<li><strong>3단계 — 이혼 사유·책임 정리 (1~2주)</strong> — 심히 부당한 대우·파탄 사유, 책임정도 정리.</li>\n<li><strong>4단계 — 이혼·위자료 청구 (소 제기 시)</strong> — 재판상 이혼·위자료·재산분할·양육 청구.</li>\n<li><strong>5단계 — 판결·체류 정리 (선고 후)</strong> — 위자료·재산분할 이행, 체류·자녀 사항 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 배우자 이혼 준거법·사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 혼인·폭력·체류 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>외국인등록증·체류 자격 자료 (체류)</strong></li>\n<li><strong>상해진단서·치료 기록 (폭력 피해)</strong></li>\n<li><strong>112 신고 이력·경찰 진술 자료 (반복성)</strong></li>\n<li><strong>위협 문자·녹취·사진 기록 (부당 대우)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (파탄·책임정도)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국인 배우자도 상거소 등 요건에 따라 대한민국 민법으로 이혼을 진행할 수 있는 영역이므로 준거법을 먼저 확인하는 것이 핵심이고, 반복된 폭력을 보여주는 진단서·신고 이력을 시간 순으로 모아두면 심히 부당한 대우·파탄 사유 정리에 활용될 수 있습니다. 통역·번역 지원과 1366·법률구조공단 상담을 함께 활용하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>준거법</strong> — 상거소 등에 따라 이혼 준거법이 무엇인지.</li>\n<li><strong>이혼 사유</strong> — 심히 부당한 대우·파탄 사유 해당 여부.</li>\n<li><strong>책임정도</strong> — 파탄에 관한 쌍방 책임정도와 유발 주장.</li>\n<li><strong>위자료·재산분할</strong> — 정신적 고통의 위자료·재산분할 범위.</li>\n<li><strong>체류·자녀</strong> — 이혼 후 체류 자격, 친권·양육·양육비.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (다국어·가정폭력 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인 배우자에 대한 폭력과 재판상 이혼 사유',
        summary:
          '대법원 2020므14763(대법원, 2021.03.25 선고) 영역에서 법원은 외국 국적의 배우자가 대한민국 국민인 배우자를 상대로 반복된 폭행 등으로 혼인이 파탄되었다고 주장하며 이혼 등을 구한 사안에서, 한국인 배우자가 대한민국에 상거소를 두고 있어 국제사법에 따라 이혼 준거법이 대한민국 민법이라고 보았습니다. 나아가 한국인 배우자가 반복적으로 폭력을 행사하고 그 정도도 무거우며 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등 여러 사정을 두루 고려하면, 그 행위는 외국인 배우자에 대한 심히 부당한 대우에 해당할 뿐 아니라 혼인관계가 애정과 신뢰를 상실해 회복할 수 없을 정도로 파탄되어 민법 제840조 제3호 또는 제6호의 이혼 사유에 해당하는데도, 외국인 배우자에게 폭력 유발 책임이 있다는 등의 이유로 이혼 청구를 배척한 원심에 법리오해 등의 잘못이 있다고 판시했습니다. 외국인 배우자 이혼 사안에서도 준거법·이혼 사유를 검토해볼 수 있습니다.',
        takeaway: '외국인 배우자 + 폭력 + 이혼 결합 시 상거소 기준 준거법·심히 부당한 대우·파탄 사유·책임정도 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '외국인도 한국에서 이혼할 수 있나요?',
        answer:
          '<strong>상거소 등 요건에 따라 대한민국 민법으로 이혼을 진행할 수 있는 영역입니다.</strong> 혼인·체류·상거소 자료를 정리.',
      },
      {
        question: '어느 나라 법으로 이혼하나요?',
        answer:
          '<strong>국제사법에 따라 상거소 등을 기준으로 준거법이 정해지는 영역입니다.</strong> 거주·체류 상황 자료를 정리.',
      },
      {
        question: '배우자가 제 탓을 하면 이혼이 안 되나요?',
        answer:
          '<strong>반복된 무거운 폭력이 있다면 유발 책임만을 이유로 이혼 청구를 배척할 수 없는 영역입니다.</strong> 폭력 경위·책임정도 자료를 정리.',
      },
      {
        question: '이혼하면 체류 자격은 어떻게 되나요?',
        answer:
          '<strong>이혼 경위·책임 등에 따라 체류 자격이 달라질 수 있어 별도 확인이 필요한 영역입니다.</strong> 체류·혼인 자료를 정리.',
      },
      {
        question: '말이 통하지 않는데 소송을 할 수 있나요?',
        answer:
          '<strong>통역·번역 지원과 무료 법률상담을 활용해 절차를 검토할 수 있는 영역입니다.</strong> 1366·법률구조공단 상담을 활용.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '국제이혼 준거법·관할', href: '/guide/divorce/divorce-international-jurisdiction-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '접근금지·보호명령 신청', href: '/guide/divorce/divorce-protection-order-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 5. defamation-review-rating-attack-track ───
  {
    domain: 'defamation',
    slug: 'defamation-review-rating-attack-track',
    keyword: '리뷰 별점테러 명예훼손',
    questionKeyword: '제 가게에 사실과 다른 별점테러·악성 리뷰가 쏟아졌어요. 허위 내용으로 평판이 망가졌는데 명예훼손이 되는지, 작성자가 \'소비자 후기일 뿐\'이라고 하면 어떻게 판단하는지 막막합니다.',
    ctaKeyword: '별점테러·허위 리뷰 명예훼손 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '별점테러 명예훼손 — 5단계 허위·비방목적 점검 | 로앤가이드',
      description:
        '가게에 허위 별점테러·악성 리뷰로 피해를 입었다면, 정보통신망법 제70조 허위사실 명예훼손의 허위 인식과 비방 목적·공공의 이익 관계, 게시물 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"정성껏 운영해 온 가게에 사실과 전혀 다른 별점테러와 악성 리뷰가 한꺼번에 쏟아져 매출과 평판이 무너지고 있는 상황입니다. \'음식에서 이물질이 나왔다\', \'위생이 엉망이다\' 같은 허위 내용이 마치 진짜처럼 퍼지는데, 작성자는 \'소비자 후기를 남긴 것뿐\'이라며 대수롭지 않게 여깁니다. 사실과 다른 리뷰도 명예훼손이 되는지, 단순한 후기와 어떻게 구별되는지, 작성자의 의도는 어떻게 따지는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제2항은 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 거짓의 사실을 드러내어 다른 사람의 명예를 훼손한 행위를 규율하는 영역입니다. 판례는 정보통신망법 제70조 제2항의 허위사실 적시 명예훼손죄가 성립하려면 적시한 사실이 허위이고 그 사실이 허위임을 인식하여야 하며, \'사람을 비방할 목적\'은 공공의 이익을 위한 것과 행위자의 주요한 동기·목적을 비교해 판단하되 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정된다고 본 사례 흐름이 있는 영역입니다. 별점테러 + 허위 리뷰 + 명예훼손 결합은 \'허위성·비방 목적·공익성\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시물 보존 ② 허위성 ③ 비방 목적 ④ 공익성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 허위성 ③ 목적 ④ 공익 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 리뷰 별점테러 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물 보존·허위성·비방 목적·공익성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 보존</strong> — 리뷰·별점·작성자·일시·플랫폼 원본 보존.</li>\n<li><strong>② 허위성</strong> — 적시 내용이 허위인지, 작성자의 허위 인식 정리.</li>\n<li><strong>③ 비방 목적</strong> — 표현 내용·동기로 본 비방 목적 검토.</li>\n<li><strong>④ 공익성</strong> — 소비자 후기로서 공공의 이익 관련성 여부.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 정보통신망법상 허위사실 명예훼손은 적시 사실이 허위이고 작성자가 그 허위임을 인식해야 하며, 적시 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰 캡처·증거 보존 (즉시)</strong> — 리뷰·별점·작성자 계정·일시·플랫폼 보존.</li>\n<li><strong>2단계 — 허위성·인식 정리 (1주)</strong> — 적시 내용의 허위 여부, 작성자의 허위 인식 정황 정리.</li>\n<li><strong>3단계 — 비방 목적·피해 정리 (2주)</strong> — 표현 동기·반복성으로 비방 목적, 매출·평판 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청, 형사 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">별점테러·허위 리뷰 명예훼손 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 허위성·비방 목적·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>리뷰·별점 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>적시 내용 반박·사실 입증 자료 (허위성)</strong></li>\n<li><strong>방문·주문·위생 점검 등 객관 자료 (반증)</strong></li>\n<li><strong>비방 목적·반복 작성 정황 자료</strong></li>\n<li><strong>매출 감소·평판 피해 입증 자료</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단순한 불만 후기와 허위사실 적시는 구별되는 영역이므로, 적시된 내용이 사실과 다르다는 점을 보여주는 객관적 자료(주문 내역·위생 점검 등)와 작성자가 허위임을 알았을 정황을 함께 정리하는 것이 핵심. 리뷰는 삭제·수정 전에 작성자 계정·URL과 함께 원본 형태로 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위성</strong> — 적시 내용이 허위인지, 단순 불만 후기인지.</li>\n<li><strong>허위 인식</strong> — 작성자가 허위임을 인식했는지.</li>\n<li><strong>비방 목적</strong> — 표현 내용·동기로 본 비방 목적의 존부.</li>\n<li><strong>공익성</strong> — 소비자 후기로서 공공의 이익 관련성.</li>\n<li><strong>피해 입증</strong> — 매출·평판 등 영업상 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위사실 명예훼손의 허위 인식과 비방 목적',
        summary:
          '대법원 2020도15738(대법원, 2022.04.28 선고) 영역에서 법원은 정보통신망법 제70조 제2항의 허위사실 적시 명예훼손죄가 성립하려면 피고인이 적시한 사실이 허위이고 그 사실이 허위임을 인식하여야 하며, 적시된 사실이 거짓인지는 중요한 부분이 객관적 사실과 합치하는지를 기준으로 판단해야 한다고 보았습니다. 또한 같은 조 제2항의 \'사람을 비방할 목적\'은 공공의 이익을 위한 것과 행위자의 주요한 동기·목적을 비교·형량하여 판단하되, 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정되고, 공공의 이익에는 특정한 사회집단이나 그 구성원 전체의 관심·이익에 관한 것도 포함된다고 판시했습니다. 별점테러·허위 리뷰 사안에서도 허위성·비방 목적·공익성을 검토해볼 수 있습니다.',
        takeaway: '별점테러 + 허위 리뷰 + 명예훼손 결합 시 허위성·작성자 허위 인식·비방 목적·공익성 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '악성 리뷰도 명예훼손이 되나요?',
        answer:
          '<strong>사실과 다른 내용을 허위임을 알면서 적시했다면 명예훼손이 검토될 수 있는 영역입니다.</strong> 리뷰 원본·반증 자료를 정리.',
      },
      {
        question: '단순 후기와 허위 리뷰는 어떻게 구별하나요?',
        answer:
          '<strong>중요한 부분이 객관적 사실과 합치하는지를 기준으로 허위 여부를 판단하는 영역입니다.</strong> 사실관계 입증 자료를 정리.',
      },
      {
        question: '\'소비자 후기일 뿐\'이라고 하면 처벌이 안 되나요?',
        answer:
          '<strong>공공의 이익에 관한 것이면 비방 목적이 부정될 수 있으나 허위·악의적 비방은 별개로 검토되는 영역입니다.</strong> 내용·동기 자료를 정리.',
      },
      {
        question: '여러 명이 동시에 별점테러를 하면요?',
        answer:
          '<strong>조직적·반복적 정황은 비방 목적·피해 판단에서 중요한 자료가 되는 영역입니다.</strong> 작성 패턴·계정 자료를 정리.',
      },
      {
        question: '리뷰를 지우게 하고 손해도 청구할 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 매출·피해 입증 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '허위사실 명예훼손 기준', href: '/guide/defamation/defamation-false-fact-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '영업상 손해배상 청구', href: '/guide/defamation/defamation-business-damages-track' },
      { label: '비방 목적·공익성 판단', href: '/guide/defamation/defamation-public-interest-track' },
    ],
  },

  // ─── 6. defamation-apartment-board-posting-track ───
  {
    domain: 'defamation',
    slug: 'defamation-apartment-board-posting-track',
    keyword: '아파트 게시판 명예훼손',
    questionKeyword: '아파트 게시판이나 이웃과의 통화에서 누군가 저에 관한 안 좋은 말을 했어요. 몇 사람에게만 한 말도 명예훼손이 되는지, 전파 가능성으로 공연성이 인정된다는데 그 기준이 무엇인지 막막합니다.',
    ctaKeyword: '아파트 게시판 명예훼손 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '아파트 게시판 명예훼손 — 5단계 공연성·고의 점검 | 로앤가이드',
      description:
        '아파트 게시판·이웃 통화로 명예훼손 피해를 입었다면, 형법 제307조 사실적시와 소수 발언의 전파가능성 공연성, 검사의 엄격 증명·미필적 고의·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 아파트 게시판이나 이웃과의 통화에서 누군가 저에 관한 좋지 않은 이야기를 해 단지 안에서 얼굴을 들기 어려운 상황입니다. 사실과 다른 말이 입에서 입으로 옮겨 다니는데, 정작 그 말을 한 사람은 \'몇 사람에게만 한 말\'이라며 대수롭지 않게 넘기려 합니다. 소수에게만 한 말도 명예훼손이 되는지, \'전파 가능성\'이라는 것으로 공연성이 인정된다는데 그 기준이 무엇이고, 상대가 \'그렇게 퍼질 줄 몰랐다\'고 하면 어떻게 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 명예훼손에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정할 때에는 적어도 전파가능성에 대한 인식과 그 위험을 용인하는 미필적 고의가 필요하며, 공연성의 존부는 발언자와 상대방·피해자의 관계, 발언 경위·상황, 적시 내용·방법·장소 등 객관적 사정을 종합해 전파 가능성을 검토해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 아파트 게시판 + 소수 발언 + 명예훼손 결합은 \'공연성·전파가능성·미필적 고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 발언 보존 ② 사실 적시 ③ 공연성 ④ 미필적 고의 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 고의 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 아파트 게시판 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발언 보존·사실 적시·공연성·미필적 고의·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발언 보존</strong> — 게시 글·녹취·작성자·일시·상대방 범위 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 소수 발언이라도 전파가능성으로 공연성이 인정되는지.</li>\n<li><strong>④ 미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사 검토.</li>\n<li><strong>⑤ 대응</strong> — 증거 정리·형사 고소·민사 손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특정 소수에 대한 발언은 공연성이 부정될 유력한 사정이어서 전파가능성에 대한 검사의 엄격한 증명이 필요하고, 전파가능성으로 공연성을 인정하려면 전파 위험을 용인하는 미필적 고의가 있어야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발언·증거 보존 (즉시)</strong> — 게시 글·녹취·작성자·일시·상대방 범위·전달 정황 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실 적시 여부, 소수 발언의 전파가능성 정리.</li>\n<li><strong>3단계 — 미필적 고의·피해 정리 (2주)</strong> — 전파 위험 인식·용인 정황, 피해 입증 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 게시 글 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">아파트 게시판 명예훼손 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시 글·녹취·캡처 (적시 내용)</strong></li>\n<li><strong>작성자·발언자·일시 자료 (특정)</strong></li>\n<li><strong>게시·발언 상대방·열람 범위 자료 (전파가능성)</strong></li>\n<li><strong>발언자와 상대방·피해자 관계 자료</strong></li>\n<li><strong>실제 전파·전달 정황 자료 (고의)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발언자가 \'몇 사람에게만 했다\'고 해도 그 상대방이 불특정·다수에게 전파할 가능성이 있고 발언자가 그 위험을 용인했다면 공연성이 인정될 수 있는 영역이므로, 발언 경위·상대방 범위·실제 전파 정황을 함께 정리하는 것이 핵심. 게시 글·통화는 작성자·일시와 함께 원본·녹취로 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 소수 발언의 전파가능성과 공연성 인정 여부.</li>\n<li><strong>미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사의 존부.</li>\n<li><strong>사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시인지.</li>\n<li><strong>관계·경위</strong> — 발언자·상대방의 관계와 발언 경위.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성 공연성과 미필적 고의 엄격 증명',
        summary:
          '대법원 2020도8336(대법원, 2022.07.28 선고) 영역에서 법원은 공연성이 명예훼손죄와 모욕죄의 구성요건으로서, 명예훼손에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하다고 보았습니다. 또한 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 전파가능성에 대한 인식과 그 위험을 용인하는 내심의 의사(미필적 고의)가 있어야 하고, 공적·사적 관계에서 사실 확인이나 가해에 대한 대응 과정에서 발언하게 된 경우 등에는 전파가능성에 대한 인식·용인 의사를 인정하는 데 신중하여야 하며, 공연성의 존부는 발언자와 상대방·피해자의 관계, 발언 경위·상황, 적시 내용·방법·장소 등 객관적 사정을 종합해 판단해야 한다고 판시했습니다. 아파트 게시판·통화 발언 사안에서도 전파가능성·미필적 고의를 검토해볼 수 있습니다.',
        takeaway: '아파트 게시판 + 소수 발언 + 명예훼손 결합 시 전파가능성·검사 엄격 증명·미필적 고의·발언 경위 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '몇 사람에게만 한 말도 명예훼손이 되나요?',
        answer:
          '<strong>소수 발언이라도 전파가능성이 인정되면 공연성이 성립할 수 있는 영역입니다.</strong> 발언 경위·상대방 범위 자료를 정리.',
      },
      {
        question: '전파 가능성은 무엇을 기준으로 따지나요?',
        answer:
          '<strong>발언자·상대방 관계, 경위·상황, 적시 내용·방법·장소 등 객관적 사정을 종합해 판단하는 영역입니다.</strong> 관계·경위 자료를 정리.',
      },
      {
        question: '\'그렇게 퍼질 줄 몰랐다\'고 하면요?',
        answer:
          '<strong>전파가능성 인식과 위험을 용인하는 미필적 고의가 있어야 공연성이 인정되는 영역입니다.</strong> 발언 정황·전달 자료를 정리.',
      },
      {
        question: '게시판이 아니라 통화로 한 말도 되나요?',
        answer:
          '<strong>매체와 무관하게 전파가능성·공연성 기준으로 판단하는 영역입니다.</strong> 녹취·통화 정황 자료를 정리.',
      },
      {
        question: '글을 내리게 하고 배상도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '사실 적시·의견 구분', href: '/guide/defamation/defamation-fact-opinion-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 7. defamation-delivery-app-false-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-delivery-app-false-review-track',
    keyword: '배달앱 허위 후기 명예훼손',
    questionKeyword: '배달앱에 제 가게에 관한 허위 후기가 올라왔어요. 이미 떠도는 소문을 댓글로 옮긴 것뿐이라는데, 떠도는 소문을 다시 적은 것도 공연성이 인정되고 명예훼손이 되는지 막막합니다.',
    ctaKeyword: '배달앱 허위 후기 공연성·적시 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '배달앱 허위 후기 — 5단계 공연성·사실적시 점검 | 로앤가이드',
      description:
        '배달앱 허위 후기로 가게 평판이 망가졌다면, 정보통신망법 명예훼손의 사실 적시 정도와 이미 떠도는 소문 재적시의 공연성, 비방 목적·게시물 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배달앱 후기란에 제 가게에 관한 사실과 다른 글이 올라와 주문이 눈에 띄게 줄어든 상황입니다. \'이런 소문이 돈다\'는 식으로 적힌 글을 보고 작성자에게 따졌더니, \'이미 다들 아는 이야기를 옮긴 것뿐\'이라며 책임을 회피합니다. 이미 떠도는 소문을 다시 적은 것도 명예훼손이 되는지, 후기 댓글에 적은 글에도 \'공연성\'이 인정되는지, 어느 정도까지 적어야 \'사실 적시\'가 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률은 비방할 목적으로 정보통신망을 통하여 공공연하게 사실·거짓 사실을 드러내어 다른 사람의 명예를 훼손한 행위를 규율하는 영역입니다. 판례는 정보통신망법상 명예훼손죄가 성립하기 위한 \'사실의 적시\'는 가치판단이나 평가를 내용으로 하는 의견 표현과 달리 시간·공간적으로 구체적인 과거·현재의 사실관계에 관한 보고·진술을 의미하고 표현 내용이 증거에 의해 입증 가능한 것을 말하며, 적시한 사실이 이미 사회의 일부에서 다루어진 소문이라고 하더라도 이를 적시하여 단정적인 표현을 사용한 경우 등에는 공연성이 인정될 수 있고, \'사람을 비방할 목적\'은 표현 내용·상대방 범위·동기 등 여러 사정을 고려해 판단한다고 본 사례 흐름이 있는 영역입니다. 배달앱 허위 후기 + 소문 재적시 + 명예훼손 결합은 \'사실 적시·공연성·비방 목적\' 다툼이 가능한 트랙입니다. 당사자라면 ① 후기 보존 ② 사실 적시 ③ 공연성 ④ 비방 목적 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 목적 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배달앱 허위 후기 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기 보존·사실 적시·공연성·비방 목적·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후기 보존</strong> — 후기·댓글·작성자·일시·플랫폼 원본 보존.</li>\n<li><strong>② 사실 적시</strong> — 의견인지, 구체적 사실 적시(입증 가능)인지 정리.</li>\n<li><strong>③ 공연성</strong> — 소문을 단정적으로 재적시한 경우의 공연성 검토.</li>\n<li><strong>④ 비방 목적</strong> — 표현 내용·상대방 범위·동기로 비방 목적 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 명예훼손의 \'사실 적시\'는 입증 가능한 구체적 사실에 관한 진술을 말하고, 이미 떠도는 소문이라도 이를 단정적으로 적시한 경우 등에는 공연성이 인정될 수 있는 영역. 비방 목적은 표현 내용·동기를 종합해 판단하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 캡처·증거 보존 (즉시)</strong> — 후기·댓글·작성자 계정·일시·플랫폼 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 의견/사실 적시 구분, 소문 재적시의 공연성 정리.</li>\n<li><strong>3단계 — 비방 목적·피해 정리 (2주)</strong> — 표현 동기·상대방 범위로 비방 목적, 주문·평판 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청, 형사 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달앱 허위 후기 공연성·적시 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기·댓글 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>표현 내용의 사실/의견 구분 자료</strong></li>\n<li><strong>적시 내용 반박·사실 입증 자료 (허위성)</strong></li>\n<li><strong>소문 재적시·단정 표현 정황 자료 (공연성)</strong></li>\n<li><strong>주문 감소·평판 피해 입증 자료</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명예훼손의 사실 적시는 입증 가능한 구체적 사실 진술인지가 관건인 영역이고, 작성자가 \'이미 도는 소문\'이라고 해도 이를 단정적으로 다시 적은 경우에는 공연성·명예훼손이 검토될 수 있는 점이 핵심. 후기는 삭제·수정 전에 작성자 계정·URL과 함께 원본 형태로 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 적시</strong> — 의견 표현인지, 입증 가능한 구체적 사실 적시인지.</li>\n<li><strong>공연성</strong> — 소문 재적시·단정 표현으로 공연성이 인정되는지.</li>\n<li><strong>비방 목적</strong> — 표현 내용·상대방 범위·동기로 본 비방 목적.</li>\n<li><strong>허위성</strong> — 적시 내용이 사실과 다른지.</li>\n<li><strong>피해 입증</strong> — 주문·평판 등 영업상 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소문 재적시의 공연성과 사실 적시 정도',
        summary:
          '대법원 2008도2422(대법원, 2008.07.10 선고) 영역에서 법원은 정보통신망법상 명예훼손죄가 성립하기 위한 \'사실의 적시\'는 가치판단이나 평가를 내용으로 하는 의견 표현과 달리 시간·공간적으로 구체적인 과거·현재의 사실관계에 관한 보고·진술을 의미하며 표현 내용이 증거에 의해 입증 가능한 것을 말한다고 보았습니다. 또한 적시된 사실이 이미 사회의 일부에서 다루어진 소문이라고 하더라도 이를 적시하여 단정적인 표현을 사용한 경우 등에는 공연성이 인정될 수 있고, 인터넷 포털 기사란에 특정 여자 연예인에 관한 허위 취지의 댓글이 달린 상황에서 같은 취지의 댓글을 추가로 게시한 행위에 대해 명예훼손죄가 성립한다고 판시했습니다. 배달앱 허위 후기 사안에서도 사실 적시 정도·공연성을 검토해볼 수 있습니다.',
        takeaway: '배달앱 허위 후기 + 소문 재적시 + 명예훼손 결합 시 사실 적시 정도·소문 재적시 공연성·비방 목적 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이미 떠도는 소문을 옮긴 것도 명예훼손이 되나요?',
        answer:
          '<strong>소문이라도 이를 단정적으로 다시 적시한 경우 공연성·명예훼손이 검토될 수 있는 영역입니다.</strong> 표현 내용·맥락 자료를 정리.',
      },
      {
        question: '의견과 사실 적시는 어떻게 구별하나요?',
        answer:
          '<strong>증거로 입증 가능한 구체적 사실 진술인지가 사실 적시 판단의 기준이 되는 영역입니다.</strong> 표현 내용을 구체적으로 정리.',
      },
      {
        question: '후기 댓글도 공연성이 있나요?',
        answer:
          '<strong>불특정·다수가 열람할 수 있는 게시 환경이면 공연성이 인정될 수 있는 영역입니다.</strong> 플랫폼·열람 범위 자료를 정리.',
      },
      {
        question: '\'다들 아는 얘기\'라고 하면 책임이 없나요?',
        answer:
          '<strong>이미 알려진 사실이라도 적시 방법·표현·비방 목적에 따라 명예훼손이 검토되는 영역입니다.</strong> 표현·동기 자료를 정리.',
      },
      {
        question: '후기를 지우게 하고 손해도 청구할 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 주문·피해 입증 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '사실 적시·의견 구분', href: '/guide/defamation/defamation-fact-opinion-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '영업상 손해배상 청구', href: '/guide/defamation/defamation-business-damages-track' },
    ],
  },

  // ─── 8. defamation-press-interview-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-press-interview-falsely-accused-defense',
    keyword: '언론 인터뷰 명예훼손 무고',
    questionKeyword: '제가 겪은 일을 언론 인터뷰에서 밝혔는데, 상대가 저를 명예훼손·모욕으로 고소했어요. 공익을 위한 발언이라 위법성이 없어진다는데, 개인적 감정이 섞였다고 처벌되는 건 아닌지 막막합니다.',
    ctaKeyword: '언론 인터뷰 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '언론 인터뷰 명예훼손 방어 — 5단계 공익·위법성조각 점검 | 로앤가이드',
      description:
        '언론 인터뷰 발언으로 명예훼손 혐의를 받고 있다면, 형법 제310조 진실성·공익 목적과 부수적 사익 동기, 경미한 표현의 모욕 성부·조사 대응까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 직접 겪은 부당한 일을 바로잡고 같은 일이 되풀이되지 않기를 바라는 마음에 언론 인터뷰에서 사실을 밝힌 사람입니다. 그런데 상대방이 저를 명예훼손과 모욕으로 고소했고, 사실과 다르게 신고되었다고 느껴 당황스럽습니다. 공공의 이익을 위해 진실을 말하면 위법성이 없어진다는 법리가 정말 제게 적용되는지, 발언에 제 개인적인 억울함이나 감정이 조금 섞였다는 이유로 처벌되는 것은 아닌지, 다소 거친 표현이 모욕이 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하며, 형법 제311조는 공연히 사람을 모욕한 모욕죄를 규율하는 영역입니다. 판례는 적시 사실이 객관적으로 공공의 이익에 관한 것이고 행위자도 주요한 동기·목적이 공공의 이익을 위한 것이면, 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조가 적용될 수 있고, 모욕죄에서 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 경미한 수준의 추상적 표현·욕설에 그치는 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않는다고 본 사례 흐름이 있는 영역입니다. 언론 인터뷰 + 공익 발언 + 명예훼손·모욕 고소 결합은 \'진실성·공익성·표현 정도\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 표현 정도 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 표현 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 언론 인터뷰 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·표현 정도·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 인터뷰에서 밝힌 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 적시 내용이 중요한 부분에서 객관적 사실과 일치하는지.</li>\n<li><strong>③ 공익 목적</strong> — 주요한 동기·목적이 공공의 이익인지, 부수적 사익 동기 정리.</li>\n<li><strong>④ 표현 정도</strong> — 거친 표현이 모욕에 해당하는지, 경미한 표현인지 검토.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제310조)·모욕 불성립 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 적시 사실이 공공의 이익에 관한 것이고 주요 동기가 공익이면 부수적 사익 동기가 있어도 형법 제310조가 적용될 수 있고, 무례·경미한 표현에 그치면 모욕죄에 해당하지 않을 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발언·근거 자료 보존 (즉시)</strong> — 인터뷰 내용·근거 자료·발언 경위·맥락 자료 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 적시 내용과 근거 자료를 대조해 객관적 사실과의 일치 정리.</li>\n<li><strong>3단계 — 공익성·표현 정도 정리 (2주)</strong> — 공익 목적, 부수적 사익 동기, 표현의 모욕 성부 정리.</li>\n<li><strong>4단계 — 위법성조각·불성립 주장 (조사·고소 시)</strong> — 형법 제310조 적용·모욕 불성립 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">언론 인터뷰 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>인터뷰 발언·보도 내용·게재 일시 (적시 내용)</strong></li>\n<li><strong>발언 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·시정 의도 정황 자료</strong></li>\n<li><strong>발언 경위·맥락 자료 (부수적 동기)</strong></li>\n<li><strong>표현 내용·전체 맥락 자료 (모욕 성부)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 발언의 중요한 부분이 객관적 사실과 일치하고 주요한 동기가 공공의 이익이었음을 보여주는 근거 자료를 정리하는 것이 핵심이고, 개인적 억울함이나 감정이 부수적으로 섞여 있더라도 그것만으로 형법 제310조 적용이 곧바로 배제되지는 않는 점을 함께 챙겨두는 것이 좋습니다. 거친 표현도 무례·경미한 수준이면 모욕 불성립을 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시 내용이 중요한 부분에서 객관적 사실과 일치하는지.</li>\n<li><strong>공익 목적</strong> — 주요한 동기·목적이 공공의 이익인지.</li>\n<li><strong>부수적 사익 동기</strong> — 사익 동기가 섞여도 제310조가 적용되는지.</li>\n<li><strong>모욕 성부</strong> — 거친 표현이 모욕인지, 무례·경미한 표현인지.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부수적 사익 동기와 형법 제310조·모욕 성부',
        summary:
          '대법원 2024도14555(대법원, 2025.05.29 선고) 영역에서 법원은 형법 제310조의 위법성조각사유 중 \'진실한 사실\'과 \'오로지 공공의 이익에 관한 때\'의 의미를 밝히면서, 적시된 사실이 객관적으로 공공의 이익에 관한 것이고 행위자도 주요한 동기·목적이 공공의 이익을 위한 것이면, 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없다고 보았습니다. 또한 모욕죄의 보호법익은 외부적 명예이고 \'모욕\'은 사람의 사회적 평가를 저하시킬 만한 추상적 판단·경멸적 감정의 표현을 의미하는데, 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 부정적·비판적 의견을 나타내면서 경미한 수준의 추상적 표현·욕설을 사용한 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않으며, 모욕죄를 해석·적용할 때 인격권과 표현의 자유가 함께 고려되어야 한다고 판시했습니다. 언론 인터뷰 사안에서도 진실성·공익성·표현 정도를 검토해볼 수 있습니다.',
        takeaway: '언론 인터뷰 + 공익 발언 + 명예훼손·모욕 고소 결합 시 진실성·공익 목적·부수적 사익 동기·모욕 성부 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '공익을 위해 진실을 말한 것도 명예훼손이 되나요?',
        answer:
          '<strong>진실·공익 목적이면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '개인적 감정이 섞이면 위법성조각이 안 되나요?',
        answer:
          '<strong>주요한 동기가 공익이면 부수적 사익 동기가 있어도 제310조 적용이 배제되지 않는 영역입니다.</strong> 동기·경위 자료를 정리.',
      },
      {
        question: '거친 표현을 썼는데 모욕죄가 되나요?',
        answer:
          '<strong>무례·경미한 수준의 표현에 그치면 원칙적으로 모욕죄에 해당하지 않을 수 있는 영역입니다.</strong> 표현 내용·전체 맥락을 정리.',
      },
      {
        question: '일부 내용이 정확하지 않으면 진실성이 부정되나요?',
        answer:
          '<strong>중요한 부분이 객관적 사실과 일치하면 세부 차이가 있어도 진실성이 인정될 수 있는 영역입니다.</strong> 근거 자료와 전체 맥락을 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>위법성조각(진실·공익)과 모욕 불성립 주장, 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '진실한 사실 적시 방어', href: '/guide/defamation/defamation-truth-defense-track' },
      { label: '모욕죄 성립 기준', href: '/guide/defamation/defamation-insult-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-minor-heir-renunciation-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-minor-heir-renunciation-track',
    keyword: '미성년 상속인 상속포기',
    questionKeyword: '돌아가신 분의 빚을 미성년 자녀가 떠안게 될까 걱정돼요. 미성년 상속인의 상속포기·한정승인은 어떻게 하는지, 한정승인을 하면 빚과 유류분은 어떻게 정리되는지 막막합니다.',
    ctaKeyword: '미성년 상속인 상속포기·한정승인 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '미성년 상속인 상속포기 — 5단계 3개월·한정승인 점검 | 로앤가이드',
      description:
        '미성년 자녀가 상속 빚을 떠안을까 걱정된다면, 민법 제1019조 안 날부터 3개월 신고기간과 법정대리인의 한정승인·상속포기, 한정승인 시 순상속분·유류분 정리까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 분이 재산보다 빚을 더 많이 남겨, 어린 자녀가 그 빚을 고스란히 떠안게 될까 두려운 상황입니다. 미성년인 아이는 스스로 결정할 수 없으니 부모인 제가 대신 상속포기나 한정승인을 해야 한다는데, 절차가 복잡해 보이고 \'안 날부터 3개월\'이라는 기간이 지난 건 아닌지 막막합니다. 한정승인을 하면 빚은 어떻게 정리되는지, 나중에 유류분 같은 문제는 어떻게 되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제1019조 제1항은 상속인이 상속개시 있음을 안 날부터 3개월 내에 단순승인·한정승인·포기를 할 수 있도록 정하고, 민법 제1028조는 한정승인 시 상속으로 얻은 재산의 한도에서 채무를 변제하도록 정하며, 미성년 상속인의 경우 법정대리인이 그 기간·신고를 대리하는 영역입니다. 판례는 유류분 부족액을 산정할 때 유류분액에서 공제하는 순상속분액을 산정하면서, 유류분권리자의 구체적 상속분보다 그가 부담하는 상속채무가 더 많은 경우라도 유류분권리자가 한정승인을 한 때에는 순상속분액을 0으로 보아 유류분 부족액을 산정하여야 한다고 본 사례 흐름이 있는 영역입니다. 미성년 상속인 + 상속포기·한정승인 + 3개월 기간 결합은 \'기간·대리·청산\' 정리가 필요한 트랙입니다. 당사자라면 ① 상속·채무 파악 ② 기간 확인 ③ 대리 신고 ④ 한정승인·포기 ⑤ 청산·유류분 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기간 ③ 대리 ④ 선택 ⑤ 청산 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 미성년 상속인 상속포기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속·채무 파악·기간 확인·대리 신고·한정승인·포기·청산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속·채무 파악</strong> — 상속재산·상속채무 규모, 채무초과 여부 파악.</li>\n<li><strong>② 기간 확인</strong> — 상속개시 있음을 안 날부터 3개월 기간 확인.</li>\n<li><strong>③ 대리 신고</strong> — 미성년 상속인의 법정대리인에 의한 신고 정리.</li>\n<li><strong>④ 한정승인·포기</strong> — 한정승인·상속포기 중 선택 검토.</li>\n<li><strong>⑤ 청산·유류분</strong> — 한정승인 후 청산, 순상속분·유류분 처리 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 유류분권리자가 한정승인을 한 경우 상속채무가 구체적 상속분보다 많더라도 순상속분액을 0으로 보아 유류분 부족액을 산정하는 영역. 미성년 상속인은 법정대리인이 3개월 내 한정승인·포기 신고를 대리하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속·채무 자료 보존 (즉시)</strong> — 상속재산 목록·채무 내역·사망 시점 자료 보존.</li>\n<li><strong>2단계 — 기간·인지 시점 정리 (1주)</strong> — 상속개시 인지일, 3개월 기간, 미성년 상속인 여부 정리.</li>\n<li><strong>3단계 — 한정승인·포기 선택 (2주)</strong> — 채무초과 정도에 따라 한정승인·포기 중 선택 정리.</li>\n<li><strong>4단계 — 대리 신고 (기간 내)</strong> — 법정대리인이 관할 가정법원에 한정승인·포기 신고·재산목록 제출.</li>\n<li><strong>5단계 — 공고·청산 (수리 후)</strong> — 채권자 공고·최고, 상속재산 한도 내 변제·청산.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">미성년 상속인 상속포기·한정승인 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상속·채무·대리 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>가족관계증명서·기본증명서 (상속인·미성년 확인)</strong></li>\n<li><strong>법정대리인 확인 자료 (대리 신고)</strong></li>\n<li><strong>상속재산 목록·부동산 등기부 (적극재산)</strong></li>\n<li><strong>상속채무 내역·금융거래 자료 (소극재산)</strong></li>\n<li><strong>상속개시 인지 시점 자료 (3개월 기간)</strong></li>\n<li><strong>한정승인·포기 신고서·재산목록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미성년 상속인은 스스로 신고할 수 없으므로 법정대리인이 상속개시 있음을 안 날부터 3개월 내 한정승인·포기 신고를 대리하는 것이 핵심인 영역이고, 빚이 재산보다 명백히 많으면 포기를, 재산도 함께 있으면 한정승인을 검토하는 식으로 선택을 정리하는 것이 좋습니다. 한정승인을 한 경우 유류분 산정에서 순상속분이 0으로 처리될 수 있는 점도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기간 기산점</strong> — 상속개시 있음을 안 날·미성년 상속인의 기산점.</li>\n<li><strong>대리 신고</strong> — 법정대리인의 한정승인·포기 신고 적법성.</li>\n<li><strong>선택</strong> — 한정승인과 상속포기 중 무엇을 선택할지.</li>\n<li><strong>청산 절차</strong> — 채권자 공고·최고와 상속재산 한도 내 변제.</li>\n<li><strong>유류분</strong> — 한정승인 시 순상속분 0 처리와 유류분 부족액.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (한정승인·포기 신고)</strong></li>\n<li><strong>국세청 126 (상속세 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인과 순상속분 0 처리·유류분 부족액',
        summary:
          '대법원 2020다247428(대법원, 2022.08.11 선고) 영역에서 법원은 유류분권리자가 반환을 청구할 수 있는 \'유류분 부족액\'은 유류분액에서 유류분권리자가 받은 특별수익액과 순상속분액을 공제하여 산정하는데, 순상속분액은 구체적 상속분에서 유류분권리자가 부담하는 상속채무를 공제하여 산정한다고 보았습니다. 나아가 유류분권리자의 구체적 상속분보다 그가 부담하는 상속채무가 더 많은 경우라도, 유류분권리자가 한정승인을 한 때에는 상속채권자에 대해 상속재산의 한도에서만 책임을 지므로 그 초과 상속채무를 유류분액에서 공제하지 않고 순상속분액을 0으로 보아 유류분 부족액을 산정하여야 한다고 판시했습니다. 미성년 상속인의 한정승인 사안에서도 순상속분·유류분 처리를 검토해볼 수 있습니다.',
        takeaway: '미성년 상속인 + 상속포기·한정승인 + 3개월 기간 결합 시 법정대리인 대리 신고·한정승인 시 순상속분 0 처리·유류분 부족액 검토 영역 — 변호사 상담·가정법원 신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '미성년 자녀의 상속포기는 누가 하나요?',
        answer:
          '<strong>미성년 상속인은 법정대리인이 한정승인·상속포기 신고를 대리하는 영역입니다.</strong> 법정대리인·가족관계 자료를 정리.',
      },
      {
        question: '상속포기와 한정승인 중 무엇을 해야 하나요?',
        answer:
          '<strong>빚이 명백히 많으면 포기를, 재산도 함께 있으면 한정승인을 검토하는 영역입니다.</strong> 재산·채무 규모를 비교해 정리.',
      },
      {
        question: '언제까지 신고해야 하나요?',
        answer:
          '<strong>상속개시 있음을 안 날부터 3개월 내 신고가 원칙인 영역입니다.</strong> 상속개시 인지 시점 자료를 정리.',
      },
      {
        question: '한정승인을 하면 빚은 어떻게 처리되나요?',
        answer:
          '<strong>상속으로 얻은 재산의 한도에서 채무를 변제하는 청산 절차가 진행되는 영역입니다.</strong> 재산·채무 목록을 정리.',
      },
      {
        question: '한정승인을 하면 유류분은 어떻게 되나요?',
        answer:
          '<strong>한정승인 시 순상속분액을 0으로 보아 유류분 부족액을 산정할 수 있는 영역입니다.</strong> 상속분·채무·특별수익 자료를 정리.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-qualified-acceptance-documents' },
      { label: '상속포기 신고 절차', href: '/guide/inheritance/inheritance-renunciation-track' },
      { label: '미성년 상속인 대리', href: '/guide/inheritance/inheritance-minor-heir-track' },
      { label: '유류분 부족액 산정', href: '/guide/inheritance/inheritance-legal-reserve-track' },
      { label: '상속채무 청산 절차', href: '/guide/inheritance/inheritance-debt-liquidation-track' },
    ],
  },

  // ─── 10. traffic-accident-crosswalk-pedestrian-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-crosswalk-pedestrian-track',
    keyword: '횡단보도 보행자 사고 과실',
    questionKeyword: '횡단보도를 건너다 차에 치였어요. 보행자라 제 과실이 적다는데, 치료비 중 건강보험으로 처리된 부분이나 책임보험금은 어떻게 정리되는지, 제 과실 부분은 누가 떠안는지 막막합니다.',
    ctaKeyword: '횡단보도 보행자 사고 과실·구상 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '횡단보도 보행자 사고 — 5단계 과실·책임보험금 점검 | 로앤가이드',
      description:
        '횡단보도에서 차에 치인 보행자라면, 도로교통법 보행자 보호의무와 과실비율, 건보공단 대위 범위·책임보험금 단서 규정 증액분, 합의·소멸시효까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신호를 지키며 횡단보도를 건너다 차에 치여 다친 상황입니다. 보행자라 제 과실이 적다고는 들었지만, 치료비 중 일부는 건강보험으로 먼저 처리되고 일부는 자동차보험 책임보험금으로 나온다고 하니 어떤 돈이 어디서 나오는지 헷갈립니다. 건강보험공단이 가해자에게 다시 청구한다는데 그 범위는 어디까지인지, 제게 일부 과실이 있다면 그 부분 치료비는 결국 누가 떠안는지 도무지 가늠이 되지 않아 막막한 상태입니다." 도로교통법은 운전자의 횡단보도 보행자 보호의무를, 자동차손해배상 보장법 제15조·시행령 제3조는 책임보험금의 산정·지급 기준을, 국민건강보험법 제58조는 공단이 보험급여를 한 뒤 가해자에 대한 손해배상청구권을 대위하는 것을 정하는 영역입니다. 판례는 공단이 불법행위 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 피해자의 가해자에 대한 기왕치료비 손해배상채권을 대위하는 경우 그 대위 범위는 공단이 부담한 비용 전액이 아니라 가해자의 책임비율에 해당하는 금액으로 제한되고, 피해자 과실비율에 해당하는 부분은 공단이 최종 부담하며, 자동차손해배상 보장법 시행령 단서 규정에 따라 증액된 책임보험금 부분에 대해서는 피해자 보호 취지상 별도로 보아야 한다고 본 사례 흐름이 있는 영역입니다. 횡단보도 사고 + 보행자 과실 + 구상·책임보험금 결합은 \'과실비율·대위 범위\' 정리가 필요한 트랙입니다. 당사자라면 ① 사고·과실 ② 치료비 처리 ③ 책임보험금 ④ 공단 대위 ⑤ 합의 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 과실 ② 치료비 ③ 책임보험 ④ 대위 ⑤ 합의 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 횡단보도 보행자 사고 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·과실·치료비 처리·책임보험금·공단 대위·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·과실</strong> — 사고 경위·신호·보행자 보호의무 위반, 과실비율 정리.</li>\n<li><strong>② 치료비 처리</strong> — 건강보험·자동차보험 처리 구분 정리.</li>\n<li><strong>③ 책임보험금</strong> — 책임보험금 산정·시행령 단서 규정 증액 부분 검토.</li>\n<li><strong>④ 공단 대위</strong> — 건보공단 대위 범위(가해자 책임비율 한도) 검토.</li>\n<li><strong>⑤ 합의</strong> — 손해배상·합의·소멸시효 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 건보공단이 가해자에게 대위하는 기왕치료비 범위는 가해자의 책임비율에 해당하는 금액으로 제한되고, 피해자 과실비율 부분은 공단이 최종 부담하는 영역. 횡단보도 보행자는 보호의무 위반 정도에 따라 과실비율이 정리되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·과실 증거 확보 (즉시)</strong> — 신호·블랙박스·CCTV·현장 사진·진단서 확보.</li>\n<li><strong>2단계 — 치료·보험 처리 정리 (즉시~1주)</strong> — 건강보험·자동차보험 치료비 처리 구분 정리.</li>\n<li><strong>3단계 — 과실비율·책임보험금 정리 (1~2주)</strong> — 보행자 보호의무 위반·과실비율, 책임보험금 산정 정리.</li>\n<li><strong>4단계 — 손해배상·구상 정리 (분쟁 시)</strong> — 공단 대위 범위, 가해자·보험사 손해배상 청구 정리.</li>\n<li><strong>5단계 — 합의·소멸시효 (병행)</strong> — 합의 조건 검토, 손해배상 소멸시효 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">횡단보도 보행자 사고 과실·구상 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고·과실·치료비 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고 사실확인원·신고 자료 (사고 발생)</strong></li>\n<li><strong>블랙박스·CCTV·신호 자료 (과실비율)</strong></li>\n<li><strong>현장 사진·도로 상황 자료 (보호의무 위반)</strong></li>\n<li><strong>상해진단서·치료 기록 (피해 입증)</strong></li>\n<li><strong>건강보험 처리·진료비 영수 자료 (공단 대위)</strong></li>\n<li><strong>자동차보험·책임보험금 산정 자료</strong></li>\n<li><strong>손해·합의 관련 서류 (손해배상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 횡단보도 보행자 사고는 운전자의 보호의무 위반 정도에 따라 과실비율이 정리되는 영역이므로 신호·블랙박스·CCTV 등 과실 자료를 먼저 확보하는 것이 핵심이고, 건강보험으로 처리된 치료비는 공단이 가해자 책임비율 한도에서 대위하고 피해자 과실비율 부분은 공단이 최종 부담할 수 있는 점을 함께 챙겨두는 것이 좋습니다. 손해배상 소멸시효도 미리 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>과실비율</strong> — 운전자 보호의무 위반·보행자 과실비율 산정.</li>\n<li><strong>치료비 처리</strong> — 건강보험·자동차보험 처리 구분.</li>\n<li><strong>책임보험금</strong> — 책임보험금 산정과 시행령 단서 규정 증액분.</li>\n<li><strong>공단 대위 범위</strong> — 가해자 책임비율 한도 대위·과실비율 부분 부담.</li>\n<li><strong>소멸시효</strong> — 손해배상청구권의 소멸시효 도과 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 182 (교통 민원·사고 안내)</strong></li>\n<li><strong>한국교통안전공단 (교통사고 상담)</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 건보공단 대위 범위와 책임보험금 단서 규정',
        summary:
          '대법원 2022다235009(대법원, 2025.05.15 선고) 영역에서 법원은 국민건강보험공단이 불법행위 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 피해자의 가해자에 대한 기왕치료비 손해배상채권을 대위하는 경우, 그 대위 범위는 공단이 부담한 비용(공단부담금) 전액이 아니라 그중 가해자의 책임비율에 해당하는 금액으로 제한되고, 나머지 피해자 과실비율에 해당하는 부분은 보험급여 후에도 손해를 전보받지 못한 피해자를 위해 공단이 최종적으로 부담한다고 보았습니다. 또한 자동차손해배상 보장법 시행령 제3조 제1항 제2호 단서 규정은 피해자에게 발생한 손해액이 진료비 해당액에 미달하는 경우에도 교통사고 피해자의 치료 보장을 위해 그 진료비 해당액을 손해액으로 보아 책임보험금으로 지급하라는 취지로 해석된다고 판시했습니다. 횡단보도 보행자 사고 사안에서도 과실비율·대위 범위를 검토해볼 수 있습니다.',
        takeaway: '횡단보도 사고 + 보행자 과실 + 구상·책임보험금 결합 시 과실비율·건보공단 대위 범위(가해자 책임비율 한도)·책임보험금 단서 규정 검토 영역 — 변호사 상담·보험·법률구조공단 검토 권장.',
      },
    ],
    faq: [
      {
        question: '횡단보도에서 사고가 나면 보행자 과실은 없나요?',
        answer:
          '<strong>운전자 보호의무 위반이 크더라도 신호·상황에 따라 보행자 과실이 일부 인정될 수 있는 영역입니다.</strong> 신호·블랙박스·현장 자료를 정리.',
      },
      {
        question: '건강보험으로 낸 치료비는 누가 부담하나요?',
        answer:
          '<strong>공단이 가해자 책임비율 한도에서 대위하고 피해자 과실비율 부분은 공단이 최종 부담할 수 있는 영역입니다.</strong> 건강보험 처리·진료비 자료를 정리.',
      },
      {
        question: '책임보험금은 어떻게 산정되나요?',
        answer:
          '<strong>자동차손해배상 보장법과 시행령 기준에 따라 산정되며 단서 규정 증액 부분이 별도로 검토되는 영역입니다.</strong> 진료비·보험 산정 자료를 정리.',
      },
      {
        question: '제 과실 부분 치료비는 결국 누가 떠안나요?',
        answer:
          '<strong>피해자 과실비율에 해당하는 기왕치료비 부분은 공단이 최종 부담하는 것으로 본 영역입니다.</strong> 과실비율·치료비 자료를 정리.',
      },
      {
        question: '손해배상은 언제까지 청구해야 하나요?',
        answer:
          '<strong>손해 및 가해자를 안 날부터 3년 등 소멸시효를 확인해야 하는 영역입니다.</strong> 사고·치료·인지 시점 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실비율 산정', href: '/guide/traffic-accident/traffic-accident-fault-ratio-track' },
      { label: '치료비·손해 산정', href: '/guide/traffic-accident/traffic-accident-damages-calculation' },
      { label: '책임보험금·보장사업', href: '/guide/traffic-accident/traffic-accident-liability-insurance-track' },
      { label: '보행자 보호의무 위반', href: '/guide/traffic-accident/traffic-accident-pedestrian-protection-track' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
