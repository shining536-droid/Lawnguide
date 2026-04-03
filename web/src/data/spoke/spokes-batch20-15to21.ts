import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [직장 내 성희롱 피해 근로자]의 [초기 대응 순서를 모르는 상황]에서 [증거 확보부터 신고까지 체크리스트 파악]을 돕는 페이지다.
// 16. 이 페이지는 [성희롱 혐의를 받고 있는 근로자]의 [사내 조사·징계 절차에 대응해야 하는 상황]에서 [방어 전략과 진술 준비 방법 파악]을 돕는 페이지다.
// 17. 이 페이지는 [성희롱 가해자로 징계 대상이 된 근로자]의 [징계 수위와 기준이 궁금한 상황]에서 [징계 유형별 기준과 양정 요소 파악]을 돕는 페이지다.
// 18. 이 페이지는 [소액 금전 분쟁을 겪는 채권자]의 [소액소송과 지급명령 중 어느 것이 유리한지 모르는 상황]에서 [두 제도의 비용·기간·절차 비교]를 돕는 페이지다.
// 19. 이 페이지는 [소액소송을 직접 제기하려는 채권자]의 [소장 작성에 필요한 서류를 모르는 상황]에서 [필수 서류 목록과 작성 요령 파악]을 돕는 페이지다.
// 20. 이 페이지는 [소장을 직접 작성하는 채권자]의 [청구 원인 기재를 빠뜨릴 수 있는 상황]에서 [각하 사유와 올바른 기재 방법 파악]을 돕는 페이지다.
// 21. 이 페이지는 [돈을 못 받은 채권자]의 [법적 절차를 어디서부터 시작해야 할지 모르는 상황]에서 [내용증명부터 소송까지 단계별 행동 파악]을 돕는 페이지다.

export const spokesBatch20_15to21: SpokePage[] = [
  // ── 15. sexual-harassment / workplace-harassment-response-checklist ──
  {
    domain: 'sexual-harassment',
    slug: 'workplace-harassment-response-checklist',
    keyword: '직장 내 성희롱 대응 체크리스트',
    questionKeyword: '직장에서 성희롱을 당했는데 어떻게 대응해야 하나요?',
    ctaKeyword: '직장 내 성희롱 대응',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '직장 내 성희롱 대응 7단계 체크리스트 | 로앤가이드',
      description: '직장에서 성희롱을 당해 어떻게 대응해야 할지 막막하다면, 증거 확보부터 신고·구제 신청까지 7단계 체크리스트를 지금 확인하세요.',
    },
    intro: '<p>회식 자리에서 상사가 어깨를 감싸더니 귓속말로 부적절한 말을 했습니다. 순간 얼어붙었지만, 다음 날 출근길이 더 두려웠습니다. "참아야 하나, 신고해야 하나" 머릿속이 복잡합니다. 직장 내 성희롱은 남녀고용평등법이 금지하는 위법행위이며, 피해자에게는 법적으로 보장된 구제 절차가 있습니다.</p>',
    sections: [
      {
        title: '1단계: 피해 사실을 즉시 기록하세요',
        content:
          '<p><strong style="color:#1e3a5f">성희롱 발생 직후 일시·장소·행위 내용·목격자를 최대한 상세하게 기록해두세요</strong></p>\n<p>기억이 선명할 때 메모장이나 일기 형식으로 <strong>날짜, 시간, 장소, 가해자, 구체적 행위, 당시 느낌</strong>을 기록합니다. 문자·카카오톡·이메일 등 관련 메시지가 있다면 캡처 후 별도 폴더에 보관하세요.</p>\n<p>목격자가 있다면 <strong>이름과 연락처를 메모</strong>해두세요. 나중에 사내 조사나 노동위원회 진정 시 증인으로 매우 중요합니다. CCTV가 있는 장소라면 영상 보존을 요청하는 것도 잊지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 피해 직후 기록 → 메시지 캡처 → 목격자 확보 → CCTV 보존 요청</blockquote>',
      },
      {
        title: '2단계: 회사 내 성희롱 고충처리 창구에 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조에 따라 사업주는 성희롱 사실 확인 시 지체 없이 조사를 실시해야 합니다</strong></p>\n<p>회사 내 <strong>성희롱 고충상담원</strong> 또는 <strong>인사팀</strong>에 서면으로 신고하세요. 구두 신고만으로는 기록이 남지 않으므로 반드시 <strong>이메일이나 내용증명 형태</strong>로 제출하는 것이 좋습니다.</p>\n<p>회사가 조사를 시작하면 <strong>피해자 보호 조치</strong>(근무 장소 변경, 유급휴가 등)를 요청할 수 있습니다. 사업주가 성희롱 확인 후 적절한 조치를 하지 않으면 <strong>500만원 이하의 과태료</strong>가 부과됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 요령: 서면 신고(이메일) → 접수 확인서 수령 → 피해자 보호 조치 요청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">내 성희롱 피해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 외부 기관에 진정·고소를 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">회사가 제대로 조치하지 않으면 고용노동부, 국가인권위원회, 경찰에 신고할 수 있습니다</strong></p>\n<p><strong>고용노동부(1350)</strong>에 진정하면 근로감독관이 사업장 조사를 실시합니다. <strong>국가인권위원회(1331)</strong>에 진정하면 직권조사 후 권고 결정을 내립니다. 가해자에 대한 형사처벌을 원한다면 <strong>경찰서에 고소장</strong>을 접수하세요.</p>\n<p>강제추행에 해당하면 형법 제298조에 따라 <strong>10년 이하의 징역 또는 1,500만원 이하의 벌금</strong>에 처할 수 있습니다. 성적 언동에 의한 성희롱은 남녀고용평등법 위반으로 <strong>사업주에 대한 과태료 부과</strong>와 별도로 민사 손해배상도 청구 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">외부 신고 3개 채널: 고용노동부(1350) / 국가인권위(1331) / 경찰 고소</blockquote>',
      },
      {
        title: '4단계: 보복 조치에 대비하세요',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조 제2항은 성희롱 피해를 주장한 근로자에 대한 불이익 조치를 명시적으로 금지합니다</strong></p>\n<p>성희롱 신고 후 <strong>전보, 평가 불이익, 따돌림, 해고</strong> 등이 발생하면 이는 <strong>2차 피해</strong>에 해당합니다. 이러한 조치가 있었다면 날짜와 내용을 즉시 기록하고, 고용노동부에 추가 진정하세요.</p>\n<p>사업주가 피해자에게 불리한 조치를 하면 <strong>3년 이하의 징역 또는 3천만원 이하의 벌금</strong>에 처해질 수 있습니다(남녀고용평등법 제37조 제2항). 불리한 조치가 성희롱과 무관하다는 증명 책임은 <strong>사업주에게</strong> 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보복 대비: 불이익 발생 시 즉시 기록 → 고용노동부 추가 진정 → 증명 책임은 사업주</blockquote>',
      },
    ],
    cases: [
      {
        title: '직장 내 성희롱 사용자책임에 관한 대법원 판결',
        summary:
          '대법원 2021다219529 사건(2021.09.16 선고)에서 법원은 동료 근로자들이 여성 근로자를 성적 대상으로 한 발언을 유포한 행위가 남녀고용평등법상 직장 내 성희롱에 해당하며, 간접적인 방법(다른 사람을 통한 전파)으로 성적 굴욕감을 느끼게 하는 환경 조성도 성적 언동에 포함된다고 판시했습니다.',
        takeaway:
          '직접 대면하지 않은 간접적 성희롱도 위법합니다. 동료 간 성적 소문 유포도 회사의 사용자책임이 인정되므로, 피해 사실을 적극적으로 기록하고 회사에 조치를 요구하세요.',
      },
    ],
    faq: [
      {
        question: '성희롱 증거가 없어도 신고할 수 있나요?',
        answer: '네, <strong>증거가 없더라도 신고 자체는 가능합니다</strong>. 다만 사내 조사나 노동위원회 심리에서 입증이 어려울 수 있으므로, 피해 직후 상세 기록, 목격자 확보, 관련 메시지 캡처 등을 최대한 확보하는 것이 중요합니다. 법원은 성인지 감수성을 고려하여 피해자 진술의 증명력을 판단합니다.',
      },
      {
        question: '가해자가 상사인데 회사에 신고하면 불이익을 받지 않나요?',
        answer: '남녀고용평등법 제14조 제2항은 <strong>피해자에 대한 불리한 조치를 명시적으로 금지</strong>하고 있습니다. 위반 시 사업주는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처해집니다. 불리한 조치가 있다면 고용노동부에 즉시 추가 진정하세요.',
      },
      {
        question: '성희롱 피해 손해배상 소송 시효는 얼마인가요?',
        answer: '민법상 불법행위 손해배상 청구권의 소멸시효는 <strong>피해 사실을 안 날로부터 3년, 불법행위일로부터 10년</strong>입니다. 시효가 지나면 청구권이 소멸하므로 가능한 빨리 법률 상담을 받는 것이 좋습니다.',
      },
      {
        question: '퇴사 후에도 성희롱으로 신고할 수 있나요?',
        answer: '네, <strong>퇴사 후에도 고용노동부 진정, 국가인권위원회 진정, 민사 손해배상 청구, 형사 고소가 모두 가능합니다</strong>. 다만 각 절차마다 기간 제한이 있으므로(형사 고소는 공소시효 이내) 퇴사 후에도 빠르게 대응하는 것이 중요합니다.',
      },
      {
        question: '성희롱과 성추행의 차이는 무엇인가요?',
        answer: '<strong>성희롱</strong>은 성적 언동으로 굴욕감·혐오감을 주는 행위이고, <strong>성추행(강제추행)</strong>은 폭행·협박을 수단으로 신체 접촉을 하는 행위입니다. 성추행은 형법 제298조로 10년 이하의 징역에 처해지는 중범죄이며, 성희롱은 주로 남녀고용평등법 위반으로 과태료·손해배상 대상입니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 직장 내 성희롱 대응 전략 AI로 분석받기',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '직장 내 성희롱 진단', href: '/diagnosis/sexual-harassment' },
      { label: '직장 내 성희롱 신고 절차', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '성희롱 증거 수집과 신고', href: '/guide/sexual-harassment/workplace-harassment-evidence-report' },
      { label: '성희롱 보복 방지 대처법', href: '/guide/sexual-harassment/workplace-harassment-retaliation-protection' },
    ],
  },

  // ── 16. sexual-harassment / harassment-accusation-defense ──
  {
    domain: 'sexual-harassment',
    slug: 'harassment-accusation-defense',
    keyword: '성희롱 혐의 대응 방법',
    questionKeyword: '성희롱 혐의를 받고 있는데 어떻게 대응해야 하나요?',
    ctaKeyword: '성희롱 혐의 대응',
    type: '어디부터형',
    perspective: 'accused',
    meta: {
      title: '성희롱 혐의 대응 5가지 핵심 전략 | 로앤가이드',
      description: '성희롱 혐의를 받고 있어 어디부터 대응해야 할지 모르겠다면, 사내 조사 대응부터 징계 불복까지 5가지 핵심 전략을 지금 확인하세요.',
    },
    intro: '<p>인사팀에서 전화가 왔습니다. "성희롱 관련 조사가 있으니 내일 출석해달라"는 통보입니다. 머릿속이 하얘집니다. 무심코 한 말이 문제가 된 것인지, 아니면 사실과 다른 신고가 접수된 것인지 아직 알 수 없습니다. 혐의를 받고 있다면 감정적으로 대응하기보다 체계적으로 준비하는 것이 중요합니다.</p>',
    sections: [
      {
        title: '첫째, 사내 조사 통보를 받으면 진술 전 사실관계를 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">조사 전에 문제된 시점의 일시·장소·대화 내용·동석자를 최대한 상세하게 복원하세요</strong></p>\n<p>성희롱 조사는 <strong>진술이 핵심 증거</strong>가 됩니다. 조사 전에 ①문제된 날짜와 시간 ②장소 ③대화 내용 ④동석자 ⑤당시 맥락을 메모하세요. 기억이 모호한 부분은 "정확히 기억나지 않는다"고 진술하는 것이 안전합니다.</p>\n<p>카카오톡·문자·이메일 등 <strong>관련 대화 기록을 시간순으로 정리</strong>해두세요. 상대방과의 평소 대화 톤, 회식 참석자 명단, 업무 지시 내역 등도 맥락 증거로 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 순서: 문제 시점 복원 → 대화 기록 정리 → 동석자 확인 → 맥락 자료 확보</blockquote>',
      },
      {
        title: '둘째, 사내 조사 시 진술권과 방어권을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">혐의를 받는 사람도 충분한 소명 기회와 방어권이 보장되어야 합니다</strong></p>\n<p>조사 시 <strong>구체적인 혐의 내용을 서면으로 요청</strong>하세요. "어떤 행위가 문제인지" 정확히 알아야 방어할 수 있습니다. 구체적 혐의 없이 포괄적 질문만 받는 경우 "혐의 내용을 특정해달라"고 요청할 권리가 있습니다.</p>\n<p>진술 내용은 <strong>조사 기록에 서명하기 전에 반드시 확인</strong>하세요. 본인이 말한 내용과 다르게 기재된 부분이 있다면 수정을 요구하세요. 조사위원의 유도 질문에 "예/아니오"로만 답하지 말고 <strong>맥락을 함께 설명</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방어 핵심: 혐의 서면 확인 → 충분한 소명 → 조사 기록 서명 전 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">내 성희롱 혐의 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 징계위원회 절차에서 방어권을 행사하세요',
        content:
          '<p><strong style="color:#1e3a5f">징계위원회 개최 시 출석하여 의견 진술, 증거 제출, 증인 신청을 할 수 있습니다</strong></p>\n<p>취업규칙이나 단체협약에서 정한 징계 절차를 확인하세요. <strong>징계위원회 개최 통보를 받으면</strong> ①출석일시 ②혐의 사실 ③관련 증거를 요청하세요. 대리인(노무사·변호사)을 동반할 수 있는지도 확인하세요.</p>\n<p>징계 사유에 대해 반박할 증거가 있다면 <strong>서면 의견서</strong>를 미리 준비하여 제출하세요. 관련 메시지, 목격자 진술서, 업무상 맥락 자료 등을 첨부하면 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">징계위 대응: 절차 확인 → 서면 의견서 준비 → 증거 제출 → 대리인 동반 검토</blockquote>',
      },
      {
        title: '넷째, 부당한 징계에는 노동위원회 구제 신청으로 불복하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제28조에 따라 부당해고·부당징계에 대해 노동위원회에 구제 신청을 할 수 있습니다</strong></p>\n<p>징계가 확정되면 <strong>징계 통보서를 받은 날부터 3개월 이내</strong>에 관할 지방노동위원회에 부당징계 구제 신청을 해야 합니다. 징계 사유가 존재하지 않거나, 징계 양정이 과중하거나, 절차가 위반된 경우 부당징계로 인정될 수 있습니다.</p>\n<p>노동위원회 판정에 불복하면 <strong>중앙노동위원회 재심</strong>, 이후 <strong>행정소송</strong>으로 다툴 수 있습니다. 성희롱 관련 형사재판에서 무죄가 선고되었더라도 행정소송에서 징계사유가 부정되는 것은 아니므로 별도로 대응해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 순서: 징계 통보 후 3개월 이내 → 지방노동위원회 → 중앙노동위 재심 → 행정소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '성희롱 징계와 증명 기준에 관한 대법원 판결',
        summary:
          '대법원 2017두74702 사건(2018.04.12 선고)에서 법원은 성희롱 징계처분의 당부를 다투는 행정소송에서 징계사유에 대한 증명책임은 처분의 적법성을 주장하는 피고(사업주)에게 있으며, 관련 형사재판에서 무죄가 선고되었더라도 그 사정만으로 행정소송에서 징계사유의 존재를 부정할 수 없다고 판시했습니다.',
        takeaway:
          '성희롱 혐의를 받고 있다면 형사재판과 징계·행정 절차가 별개로 진행됨을 인식하고, 각 절차별로 별도의 방어 전략을 세워야 합니다. 전문가 상담을 통해 체계적으로 대응하세요.',
      },
    ],
    faq: [
      {
        question: '성희롱 조사 시 변호사를 대동할 수 있나요?',
        answer: '회사 내부 조사에서 변호사 대동 여부는 <strong>취업규칙이나 사내 규정에 따라 다릅니다</strong>. 규정에 없더라도 요청할 수는 있으며, 거부당하면 그 사실을 기록해두세요. 노동위원회나 법원 절차에서는 대리인 선임이 보장됩니다.',
      },
      {
        question: '성희롱 혐의가 사실과 다른 경우 어떻게 하나요?',
        answer: '사실과 다른 주장이라면 <strong>당시 상황을 입증할 증거</strong>(대화 기록, 동석자 진술, CCTV 등)를 확보하세요. 사내 조사에서 충분히 소명하되, 허위 신고에 대해서는 추후 명예훼손이나 무고로 법적 대응할 수 있습니다.',
      },
      {
        question: '징계 수위가 너무 높은데 불복할 수 있나요?',
        answer: '징계 양정이 해당 행위에 비해 <strong>현저히 과중하면 부당징계</strong>에 해당합니다. 징계 통보를 받은 날부터 3개월 이내에 노동위원회에 구제 신청을 하면 징계의 적정성을 심사받을 수 있습니다.',
      },
      {
        question: '사내 조사 중에 피해자와 합의할 수 있나요?',
        answer: '합의 자체는 가능하지만, <strong>사내 징계 절차와 별개로 진행됩니다</strong>. 합의했더라도 회사가 징계를 면제해야 하는 것은 아닙니다. 합의 과정에서 피해자에게 압박이 가해지면 2차 가해로 추가 문제가 될 수 있으므로 주의하세요.',
      },
      {
        question: '성희롱 조사 내용이 외부에 유출되면 어떻게 하나요?',
        answer: '남녀고용평등법에 따라 조사 참여자에게는 <strong>비밀누설 금지 의무</strong>가 있습니다. 조사 내용이 유출되어 명예가 훼손되었다면, 유출한 당사자와 회사(사용자책임)를 상대로 손해배상을 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 성희롱 혐의 대응 전략 AI로 분석받기',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '직장 내 성희롱 진단', href: '/diagnosis/sexual-harassment' },
      { label: '직장 내 성희롱 초기 대응', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '성희롱 신고 절차 안내', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '성희롱 가해자 징계 기준', href: '/guide/sexual-harassment/harasser-disciplinary-criteria' },
    ],
  },

  // ── 17. sexual-harassment / harasser-disciplinary-criteria ──
  {
    domain: 'sexual-harassment',
    slug: 'harasser-disciplinary-criteria',
    keyword: '성희롱 가해자 징계 기준과 수위',
    questionKeyword: '성희롱 가해자에게 어떤 징계가 내려지나요?',
    ctaKeyword: '성희롱 징계 기준',
    type: '수치기한형',
    perspective: 'accused',
    meta: {
      title: '성희롱 가해자 징계 4단계 기준과 양정 요소 | 로앤가이드',
      description: '성희롱 혐의로 징계 대상이 되어 수위가 걱정된다면, 경고부터 해고까지 4단계 징계 기준과 양정 요소를 지금 확인하세요.',
    },
    intro: '<p>인사팀으로부터 "징계위원회가 개최된다"는 통보를 받았습니다. 성희롱 혐의가 인정되면 어느 수준의 징계가 내려질지, 해고까지 갈 수 있는 것인지 불안합니다. 혐의를 받고 있다면 징계 양정 기준을 정확히 파악하고 대응 전략을 세우는 것이 급선무입니다.</p>',
    sections: [
      {
        title: '성희롱 징계 유형: 경고부터 해고까지 4단계',
        content:
          '<p><strong style="color:#1e3a5f">일반적으로 성희롱 징계는 경고(주의) → 감봉 → 정직 → 해고 순서로 중해집니다</strong></p>\n<ul>\n<li><strong>경고·주의</strong>: 언어적 성희롱 1회, 경미한 수준 — 인사 기록에 남지만 경제적 불이익은 적음</li>\n<li><strong>감봉</strong>: 반복적 언어 성희롱, 경미한 신체 접촉 — 1~3개월간 임금의 1/10 이내 감액(근로기준법 제95조)</li>\n<li><strong>정직</strong>: 의도적 신체 접촉, 심각한 성적 언동 — 1~3개월 출근 정지, 임금 미지급</li>\n<li><strong>해고(징계해고)</strong>: 강제추행 수준, 반복·상습적 성희롱 — 30일 전 예고 또는 해고예고수당 지급</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 행위 유형과 횟수에 따라 4단계 → 취업규칙의 징계 양정표 확인 필수</blockquote>',
      },
      {
        title: '징계 양정 시 고려되는 7가지 핵심 요소',
        content:
          '<p><strong style="color:#1e3a5f">대법원 판례에 따르면 징계 양정은 행위의 내용·횟수·피해 정도 등을 종합적으로 고려해야 합니다</strong></p>\n<ul>\n<li><strong>행위의 내용과 정도</strong>: 언어적 성희롱인지, 신체 접촉인지, 강제추행 수준인지</li>\n<li><strong>행위의 횟수</strong>: 일회성인지 반복·상습적인지</li>\n<li><strong>피해자의 정신적 고통 정도</strong>: PTSD 진단, 업무 복귀 불가 등</li>\n<li><strong>가해자와 피해자의 관계</strong>: 상급자-하급자 관계일수록 가중</li>\n<li><strong>가해자의 반성 여부</strong>: 즉시 사과, 재발 방지 의지 표명 여부</li>\n<li><strong>이전 징계 이력</strong>: 동종·유사 비위의 전력 유무</li>\n<li><strong>근속 기간과 직급</strong>: 관리자급일수록 엄격한 기준 적용</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양정 공식: 행위 유형 × 횟수 × 피해 정도 × 직급 × 반성 여부 = 최종 징계 수위</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">내 성희롱 징계 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '징계해고가 정당하려면 갖춰야 할 3가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조에 따라 정당한 이유 없이 해고할 수 없으며, 절차적 요건도 충족해야 합니다</strong></p>\n<p><strong>첫째, 실체적 정당성</strong>: 징계 사유가 실제로 존재하고, 그 행위가 취업규칙상 해고 사유에 해당해야 합니다. 성희롱 행위의 내용이 해고에 상당할 정도로 중대해야 합니다.</p>\n<p><strong>둘째, 양정의 적정성</strong>: 해당 비위에 비해 징계가 현저히 가혹하면 부당징계입니다. 일회적 언어 성희롱으로 즉시 해고하는 것은 양정 과중으로 판단될 수 있습니다.</p>\n<p><strong>셋째, 절차적 정당성</strong>: 징계위원회 개최, 본인 출석 기회 부여, 의견 진술 기회 등 취업규칙에서 정한 절차를 준수해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3요건: 실체적 정당성 + 양정 적정성 + 절차적 정당성 → 하나라도 흠결 시 부당징계</blockquote>',
      },
      {
        title: '공공기관·공무원의 성희롱 징계 기준은 더 엄격합니다',
        content:
          '<p><strong style="color:#1e3a5f">공무원의 경우 국가공무원법에 따라 성희롱은 품위유지 의무 위반으로 파면·해임까지 가능합니다</strong></p>\n<p>인사혁신처의 「징계업무 처리 지침」에 따르면 성희롱은 <strong>감봉~파면</strong>까지 양정 범위가 설정됩니다. 특히 <strong>신체적 성희롱</strong>은 정직 이상, <strong>강제추행 수준</strong>이면 해임·파면이 기준입니다.</p>\n<p>공공기관도 유사한 양정 기준을 적용합니다. <strong>성폭력 관련 범죄로 형사처벌</strong>을 받으면 당연퇴직 사유에 해당할 수 있으므로, 형사 절차와 징계 절차를 동시에 관리해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공무원·공공기관: 언어 성희롱 감봉~ / 신체 성희롱 정직~ / 강제추행 해임·파면~</blockquote>',
      },
    ],
    cases: [
      {
        title: '성희롱 피해 근로자 보호와 사업주 의무에 관한 대법원 판결',
        summary:
          '대법원 2016다202947 사건(2017.12.22 선고)에서 법원은 사업주가 성희롱 피해 근로자에게 불리한 조치를 하면 남녀고용평등법 위반으로 불법행위가 성립하며, 불리한 조치가 성희롱과 무관하다는 증명 책임은 사업주에게 있다고 판시했습니다.',
        takeaway:
          '징계를 받는 입장에서도 회사의 징계 절차가 적법한지 확인해야 합니다. 동시에 피해자에 대한 2차 가해로 보일 수 있는 행동(합의 강요, 소문 유포 등)은 추가 징계나 손해배상 사유가 될 수 있으므로 절대 삼가세요.',
      },
    ],
    faq: [
      {
        question: '성희롱 징계 기준은 법률에 명시되어 있나요?',
        answer: '남녀고용평등법은 <strong>사업주의 조치 의무만 규정</strong>하고 구체적 징계 양정은 각 회사의 취업규칙에 위임합니다. 공무원은 징계업무 처리 지침에 양정 기준이 있습니다. 따라서 본인 회사의 취업규칙 징계 양정표를 반드시 확인하세요.',
      },
      {
        question: '초범인데도 해고될 수 있나요?',
        answer: '행위의 내용이 <strong>강제추행 수준이거나 피해자에게 극심한 정신적 피해</strong>를 끼친 경우에는 초범이라도 해고가 정당하다고 인정될 수 있습니다. 다만 일회적 언어 성희롱만으로 즉시 해고는 양정 과중으로 판단될 가능성이 높습니다.',
      },
      {
        question: '성희롱 징계와 형사처벌은 별개인가요?',
        answer: '네, <strong>완전히 별개의 절차</strong>입니다. 형사재판에서 무죄가 나와도 회사 징계는 유지될 수 있습니다. 반대로 회사에서 경미한 징계를 받았더라도 형사처벌은 별도로 진행됩니다. 각 절차에 맞는 대응이 필요합니다.',
      },
      {
        question: '징계 기간 중 급여는 어떻게 되나요?',
        answer: '<strong>감봉</strong>은 1회 급여의 1/10 이내 감액(근로기준법 제95조), <strong>정직</strong>은 해당 기간 무급입니다. 정직 기간은 보통 1~3개월이며, 취업규칙에서 정한 범위를 초과할 수 없습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 성희롱 징계 대응 전략 AI로 분석받기',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '직장 내 성희롱 진단', href: '/diagnosis/sexual-harassment' },
      { label: '성희롱 혐의 대응 방법', href: '/guide/sexual-harassment/harassment-accusation-defense' },
      { label: '직장 내 성희롱 초기 대응', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '성희롱 어디부터 시작해야 하나', href: '/guide/sexual-harassment/workplace-harassment-where-to-start' },
    ],
  },

  // ── 18. small-claims / small-claims-vs-payment-order-comparison ──
  {
    domain: 'small-claims',
    slug: 'small-claims-vs-payment-order-comparison',
    keyword: '소액소송 vs 지급명령 비교',
    questionKeyword: '소액소송과 지급명령 중 어떤 게 유리한가요?',
    ctaKeyword: '소액소송 지급명령 비교',
    type: '비교형',
    meta: {
      title: '소액소송 vs 지급명령 5가지 비교 총정리 | 로앤가이드',
      description: '돈을 못 받아 소액소송과 지급명령 중 고민이라면, 비용·기간·절차·효력·위험까지 5가지 핵심 비교표를 지금 확인하세요.',
    },
    intro: '<p>친구에게 빌려준 500만원을 6개월째 돌려받지 못하고 있습니다. 법적 절차를 알아보니 "소액소송"과 "지급명령" 두 가지 방법이 있다는데, 어떤 게 더 빠르고 유리한지 판단이 서지 않습니다. 두 제도의 차이를 정확히 비교해야 시간과 비용 낭비 없이 돈을 회수할 수 있습니다.</p>',
    comparison: {
      title: '소액소송 vs 지급명령 핵심 비교표',
      headers: ['비교 항목', '소액소송', '지급명령'],
      rows: [
        { label: '대상 금액', values: ['3,000만원 이하', '금액 제한 없음'] },
        { label: '인지대(500만원 기준)', values: ['약 25,000원', '약 12,500원(소송의 1/10)'] },
        { label: '평균 소요 기간', values: ['1~3개월(변론기일 1회)', '2~4주(이의 없을 시)'] },
        { label: '상대방 출석 필요', values: ['원칙적 출석(대리 가능)', '출석 불요(서면 심리)'] },
        { label: '상대방 이의 시', values: ['그대로 변론 진행', '소송으로 자동 이행'] },
        { label: '집행력(강제집행)', values: ['확정 판결 → 즉시 집행', '확정 후 즉시 집행'] },
        { label: '적합한 경우', values: ['상대방이 다툴 가능성 높을 때', '채무 사실이 명확하고 다툼 없을 때'] },
      ],
    },
    sections: [
      {
        title: '소액소송: 3,000만원 이하 분쟁을 신속하게 해결하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">소액사건심판법에 따라 소송 목적물의 값이 3,000만원 이하이면 소액소송으로 진행됩니다</strong></p>\n<p>소액소송은 <strong>변론기일 1회</strong>로 심리를 마치는 것이 원칙입니다. 일반 민사소송보다 훨씬 빠르고, 소장도 법원에 비치된 양식을 이용하면 비교적 쉽게 작성할 수 있습니다.</p>\n<p>장점은 <strong>상대방이 이의를 제기해도 그대로 변론이 진행</strong>된다는 것입니다. 반면 지급명령은 이의가 들어오면 소송으로 넘어가므로, 상대방이 다툴 가능성이 높다면 처음부터 소액소송을 선택하는 것이 시간을 절약합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소액소송 핵심: 3,000만원 이하 → 변론 1회 → 상대방 이의에도 그대로 진행</blockquote>',
      },
      {
        title: '지급명령: 상대방이 다투지 않을 때 가장 빠르고 저렴한 방법',
        content:
          '<p><strong style="color:#1e3a5f">민사소송법 제462조에 따라 금전 지급을 명하는 재판으로, 인지대가 소송의 1/10에 불과합니다</strong></p>\n<p>지급명령의 최대 장점은 <strong>비용</strong>입니다. 인지대가 소송의 10분의 1이고, 변론 없이 서면 심리만으로 진행되므로 법원에 출석할 필요가 없습니다. 상대방에게 지급명령이 송달된 후 <strong>2주 이내에 이의가 없으면 확정</strong>됩니다.</p>\n<p>단점은 <strong>상대방이 이의를 신청하면 소송으로 자동 이행</strong>된다는 것입니다. 이때 채권자(신청인)가 소송으로의 이행에 따른 인지를 보정하지 않으면 지급명령신청서가 각하될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지급명령 핵심: 인지대 1/10 → 서면 심리 → 2주 이내 확정 → 이의 시 소송 이행</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/small-claims" style="color:#1565c0;font-weight:600">내 금전 분쟁 최적 해결 방법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '상황별 선택 가이드: 이렇게 고르세요',
        content:
          '<p><strong style="color:#1e3a5f">핵심은 "상대방이 다툴 가능성"과 "금액 규모"입니다</strong></p>\n<ul>\n<li><strong>상대방이 채무를 인정하고 단지 돈이 없어 못 갚는 경우</strong> → <strong>지급명령</strong>이 유리 (빠르고 저렴)</li>\n<li><strong>상대방이 "빌린 적 없다"고 다툴 가능성이 있는 경우</strong> → <strong>소액소송</strong>이 유리 (이의에도 그대로 진행)</li>\n<li><strong>3,000만원 초과 금전 분쟁</strong> → 지급명령(금액 제한 없음) 또는 일반 민사소송</li>\n<li><strong>상대방 주소를 모르는 경우</strong> → 소액소송(공시송달 가능) / 지급명령(송달 불능 시 각하)</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">선택 기준: 다툼 여부 + 금액 + 상대방 주소 파악 여부로 판단</blockquote>',
      },
    ],
    cases: [
      {
        title: '지급명령 이의신청과 송달에 관한 대법원 판결',
        summary:
          '대법원 2024마5496 사건(2024.06.07 선고)에서 법원은 지급명령이 채무자에게 송달되기 전에 한 이의신청은 부적법하지만, 그 후 채무자에게 지급명령이 적법하게 송달되면 그 하자가 치유된다고 판시했습니다.',
        takeaway:
          '지급명령은 송달이 핵심입니다. 상대방 주소가 불명확하면 송달이 불능되어 절차가 지연됩니다. 상대방 주소를 정확히 파악하고 있을 때 지급명령이 효과적입니다.',
      },
    ],
    faq: [
      {
        question: '소액소송과 지급명령을 동시에 신청할 수 있나요?',
        answer: '<strong>동시 신청은 불가</strong>합니다. 하나를 선택해야 합니다. 지급명령을 먼저 시도하고, 이의가 들어오면 소송으로 자동 이행되므로 "지급명령 먼저 → 이의 시 소송"의 순서가 효율적입니다.',
      },
      {
        question: '지급명령 확정 후 상대방이 돈을 안 주면 어떻게 하나요?',
        answer: '확정된 지급명령은 <strong>확정 판결과 같은 효력</strong>이 있으므로, 상대방의 부동산·예금·급여 등에 <strong>강제집행</strong>(압류·추심)을 할 수 있습니다. 집행문을 부여받아 집행법원에 신청하세요.',
      },
      {
        question: '지급명령에 상대방이 이의하면 인지대를 추가로 내야 하나요?',
        answer: '네, 소송으로 이행되면 <strong>소송 인지대에서 이미 납부한 지급명령 인지대를 뺀 차액</strong>을 보정해야 합니다. 기한 내에 보정하지 않으면 지급명령신청서가 각하되므로 반드시 기한을 지키세요.',
      },
      {
        question: '소액소송에서 변호사 없이 직접 할 수 있나요?',
        answer: '<strong>본인 소송(나홀로 소송)이 가능</strong>합니다. 법원에 소장 양식이 비치되어 있고, 대한법률구조공단(132)에서 무료 소장 작성 도움을 받을 수 있습니다. 3,000만원 이하이므로 소송구조 신청도 검토하세요.',
      },
      {
        question: '차용증이 없어도 소액소송이나 지급명령을 신청할 수 있나요?',
        answer: '네, <strong>차용증이 없더라도 가능</strong>합니다. 계좌이체 내역, 카카오톡·문자 대화, 녹음 파일 등 금전 거래 사실을 증명할 수 있는 모든 자료가 증거가 됩니다. 증거가 부족하면 입증이 어려울 수 있으므로 가능한 많은 자료를 모으세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 소액소송·지급명령 최적 방법 AI로 분석받기',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '소액소송 소장 작성법', href: '/guide/small-claims/small-claims-complaint-template' },
      { label: '지급명령 신청 가이드', href: '/guide/small-claims/payment-order-application-guide' },
      { label: '소액소송 셀프 접수 방법', href: '/guide/small-claims/small-claims-self-filing-guide' },
    ],
  },

  // ── 19. small-claims / complaint-writing-required-documents ──
  {
    domain: 'small-claims',
    slug: 'complaint-writing-required-documents',
    keyword: '소액소송 소장 작성 필요 서류 목록',
    questionKeyword: '소액소송 소장 작성할 때 어떤 서류가 필요한가요?',
    ctaKeyword: '소액소송 필요 서류',
    type: '준비서류형',
    meta: {
      title: '소액소송 소장 작성 시 필수 서류 8가지 목록 | 로앤가이드',
      description: '소액소송 소장을 직접 작성하려는데 어떤 서류를 준비해야 할지 모르겠다면, 필수 서류 8가지와 작성 요령을 지금 확인하세요.',
    },
    intro: '<p>빌려준 돈을 받기 위해 소액소송을 결심했습니다. 법원 홈페이지에서 소장 양식을 다운받았는데, 어떤 서류를 첨부해야 하는지 막막합니다. 서류 하나를 빠뜨리면 보정 명령이 나오고, 기한을 놓치면 소장이 각하될 수 있습니다. 한 번에 정확히 제출하는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '소장 작성 시 반드시 첨부해야 하는 필수 서류 8가지',
        content:
          '<p><strong style="color:#1e3a5f">민사소송법 제249조에 따라 소장에는 청구 취지, 청구 원인, 증거 방법을 기재하고 관련 서류를 첨부해야 합니다</strong></p>\n<ul>\n<li><strong>1. 소장 원본 + 부본</strong>: 원본 1부 + 피고 수만큼 부본 제출 (피고 1명이면 총 2부)</li>\n<li><strong>2. 인지(수입인지)</strong>: 소송 목적물 가액에 따른 인지대 (500만원 기준 약 25,000원)</li>\n<li><strong>3. 송달료 예납</strong>: 당사자 수 × 회수분 (보통 5~6회분, 법원 안내 참조)</li>\n<li><strong>4. 차용증 또는 계약서 사본</strong>: 금전소비대차 계약의 존재를 입증하는 핵심 서류</li>\n<li><strong>5. 계좌이체 확인서</strong>: 은행 앱 또는 인터넷뱅킹에서 출력한 송금 내역</li>\n<li><strong>6. 내용증명 사본</strong>: 채무 변제를 최고한 사실을 증명 (지연손해금 기산점)</li>\n<li><strong>7. 카카오톡·문자 대화 캡처</strong>: 금전 거래 사실, 변제 약속 등의 증거</li>\n<li><strong>8. 주민등록등본 또는 법인등기부등본</strong>: 원고·피고의 인적 사항 확인용</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 8종: 소장 + 인지 + 송달료 + 차용증 + 이체내역 + 내용증명 + 대화캡처 + 등본</blockquote>',
      },
      {
        title: '서류별 준비 요령과 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">서류 준비 시 가장 흔한 실수는 부본 누락과 증거 원본·사본 혼동입니다</strong></p>\n<p><strong>소장 부본 누락</strong>: 피고가 2명이면 소장 원본 1부 + 부본 2부 = 총 3부입니다. 부본이 부족하면 보정 명령이 나옵니다.</p>\n<p><strong>증거 서류는 사본으로 제출</strong>하되, 원본은 반드시 보관하세요. 법원이 원본 대조를 요구하면 변론기일에 가지고 가야 합니다.</p>\n<p><strong>인지대 계산 오류</strong>: 전자소송(ecourt.go.kr)으로 제출하면 인지대가 자동 계산되어 편리합니다. 종이 소장은 수입인지를 구매하여 소장에 첨부하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">실수 방지: 부본 수 확인 / 증거는 사본 제출·원본 보관 / 전자소송으로 인지대 자동 계산</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/small-claims" style="color:#1565c0;font-weight:600">내 소액소송 준비 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '차용증이 없을 때 대체할 수 있는 증거 목록',
        content:
          '<p><strong style="color:#1e3a5f">차용증이 없어도 소송이 불가능한 것은 아닙니다 — 간접 증거를 최대한 모으세요</strong></p>\n<ul>\n<li><strong>계좌이체 내역</strong>: 돈이 오간 사실 자체를 증명하는 가장 강력한 증거</li>\n<li><strong>카카오톡·문자 대화</strong>: "돈 빌려줘", "다음 달에 갚을게" 등의 대화가 차용증을 대신</li>\n<li><strong>녹음 파일</strong>: 상대방이 채무를 인정한 대화를 녹음(1인 녹음은 적법)</li>\n<li><strong>증인 진술서</strong>: 돈을 빌려줄 때 동석한 제3자의 서면 진술</li>\n<li><strong>독촉 이메일·내용증명</strong>: 변제를 요구한 사실과 상대방의 반응</li>\n</ul>\n<p>이 중 <strong>계좌이체 내역 + 대화 캡처</strong> 조합이 가장 강력합니다. 계좌이체만으로는 "선물이었다"고 반박당할 수 있으므로, 반드시 대여 의사가 드러나는 대화를 함께 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">차용증 없을 때: 이체내역 + 대화캡처 + 녹음 + 증인 → 복합 증거로 입증</blockquote>',
      },
    ],
    cases: [
      {
        title: '지급명령 인지 보정과 소송비용에 관한 대법원 판결',
        summary:
          '대법원 2024마5324 사건(2024.05.30 선고)에서 법원은 채무자가 지급명령 정본을 송달받은 후 변호사를 선임하여 이의신청을 하였으나, 채권자가 소송으로의 이행에 따른 인지를 보정하지 않아 지급명령신청서가 각하된 경우에도 변호사 보수가 소송수행에 필요한 비용에 포함될 수 있다고 판시했습니다.',
        takeaway:
          '소장이나 지급명령신청서 제출 시 인지대·송달료 등 비용 보정을 놓치면 각하될 수 있습니다. 전자소송을 이용하면 자동 계산되어 실수를 줄일 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '전자소송으로 소장을 제출해도 되나요?',
        answer: '네, <strong>전자소송(ecourt.go.kr)</strong>에서 소장 작성·제출이 가능합니다. 인지대가 자동 계산되고, 서류 부본도 시스템이 처리하므로 종이 소장보다 편리하고 실수가 적습니다.',
      },
      {
        question: '소장을 잘못 작성하면 바로 각하되나요?',
        answer: '<strong>즉시 각하되지는 않습니다</strong>. 법원은 먼저 보정 명령을 내리고 기한을 줍니다. 기한 내에 보정하면 문제없지만, 보정 기한을 넘기면 소장이 각하됩니다. 보정 명령을 받으면 즉시 대응하세요.',
      },
      {
        question: '피고 주소를 모르면 소장을 낼 수 없나요?',
        answer: '피고의 <strong>주민등록 주소를 알아야 합니다</strong>. 모르면 법원에 주소보정명령에 따라 주민등록 초본 열람을 신청하거나, 최후 수단으로 공시송달을 신청할 수 있습니다. 지급명령은 공시송달이 불가하므로 이 경우 소액소송이 유리합니다.',
      },
      {
        question: '인지대와 송달료는 합쳐서 얼마 정도 드나요?',
        answer: '<strong>500만원 소액소송 기준</strong> 인지대 약 25,000원 + 송달료 약 50,000~60,000원으로 총 8~9만원 정도입니다. 승소하면 소송비용을 상대방에게 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 소액소송 서류 준비 AI로 점검받기',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '소액소송 FAQ 가이드', href: '/guide/small-claims/small-claims-faq-guide' },
      { label: '소액소송 vs 지급명령 비교', href: '/guide/small-claims/small-claims-vs-payment-order-comparison' },
      { label: '소액소송 소장 작성법', href: '/guide/small-claims/small-claims-complaint-template' },
    ],
  },

  // ── 20. small-claims / missing-cause-of-action-leads-to-dismissal ──
  {
    domain: 'small-claims',
    slug: 'missing-cause-of-action-leads-to-dismissal',
    keyword: '소장 청구 원인 누락 시 각하',
    questionKeyword: '소장에 청구 원인을 빠뜨리면 어떻게 되나요?',
    ctaKeyword: '소장 청구 원인 작성',
    type: '실수함정형',
    meta: {
      title: '소장 청구 원인 누락하면 각하 3가지 실수 | 로앤가이드',
      description: '소장을 직접 작성하다 청구 원인을 빠뜨려 각하당하지 않으려면, 흔한 실수 3가지와 올바른 기재 방법을 지금 확인하세요.',
    },
    intro: '<p>혼자서 소장을 작성해 법원에 냈는데, 며칠 후 "보정 명령"이라는 서류가 도착했습니다. "청구 원인이 특정되지 않았다"는 내용입니다. 분명 돈을 빌려준 사실을 적었는데 뭐가 부족한 걸까요. 보정 기한은 7일, 시간이 없습니다. 소장 작성 시 가장 흔한 3가지 실수를 확인하세요.</p>',
    sections: [
      {
        title: '실수 1: 청구 원인에 "누가, 언제, 얼마를" 빠뜨린 경우',
        content:
          '<p><strong style="color:#1e3a5f">민사소송법 제249조에 따라 소장에는 청구 취지와 청구 원인을 기재해야 하며, 청구 원인에는 권리관계의 발생 원인 사실을 구체적으로 특정해야 합니다</strong></p>\n<p>가장 흔한 실수는 "피고가 돈을 빌려가고 안 갚습니다"처럼 <strong>추상적으로만 기재</strong>하는 것입니다. 법원이 요구하는 것은 구체적 사실입니다.</p>\n<p><strong>올바른 기재 예시</strong>: "원고는 2025. 1. 15. 피고에게 금 500만원을 변제기 2025. 4. 15., 이자 연 5%의 약정으로 대여하였다. 원고는 같은 날 ○○은행 원고 명의 계좌에서 피고 명의 △△은행 계좌로 500만원을 이체하였다. 그러나 피고는 변제기가 경과하도록 위 대여금을 변제하지 않고 있다."</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 6하 원칙: 누가(원고→피고) + 언제 + 얼마를 + 어떤 조건으로 + 어떻게(이체) + 미변제 사실</blockquote>',
      },
      {
        title: '실수 2: 청구 취지와 청구 원인이 불일치하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">청구 취지에 "500만원을 지급하라"고 적었는데, 청구 원인에는 300만원 대여 사실만 기재하면 모순입니다</strong></p>\n<p>청구 취지는 <strong>"피고는 원고에게 금 ○○원 및 이에 대하여 ○○년 ○월 ○일부터 다 갚는 날까지 연 ○%의 비율로 계산한 금원을 지급하라"</strong>의 형식으로 기재합니다.</p>\n<p>이 금액이 청구 원인에서 설명한 대여 원금 + 약정 이자와 일치해야 합니다. <strong>원금 500만원 + 약정 이자 50만원 = 550만원</strong>이라면 청구 취지도 550만원으로 맞추세요. 지연손해금은 별도로 "~부터 다 갚는 날까지 연 12%(소송촉진법)"로 기재합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불일치 방지: 청구 취지 금액 = 청구 원인의 원금 + 이자 합계 → 지연손해금은 별도 기재</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/small-claims" style="color:#1565c0;font-weight:600">내 소장 작성 상태 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '실수 3: 법적 근거(청구권 원인)를 누락한 경우',
        content:
          '<p><strong style="color:#1e3a5f">"돈을 빌려줬으니 갚아라"만으로는 부족합니다 — 민법상 어떤 청구권에 기한 것인지 명시하세요</strong></p>\n<p>금전 대여라면 <strong>민법 제598조(금전소비대차)</strong>를, 물품 대금이라면 <strong>민법 제568조(매매대금)</strong>를, 손해배상이라면 <strong>민법 제750조(불법행위)</strong>를 근거로 기재합니다.</p>\n<p>법적 근거를 기재하지 않아도 법원이 직권으로 판단할 수 있지만, <strong>불필요한 보정 명령이나 각하 위험을 줄이려면 명시적으로 기재</strong>하는 것이 좋습니다. 특히 소액소송은 1회 변론으로 끝나므로 처음부터 정확하게 작성해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">청구권 종류: 대여금 반환(민법 598조) / 매매대금(민법 568조) / 불법행위(민법 750조)</blockquote>',
      },
      {
        title: '보정 명령을 받았을 때 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">보정 명령 기한(보통 7~14일)을 반드시 지키세요 — 기한 도과 시 소장이 각하됩니다</strong></p>\n<p>보정 명령서에는 <strong>무엇을 보정해야 하는지</strong> 구체적으로 기재되어 있습니다. "청구 원인을 특정하라", "인지를 보정하라", "피고 주소를 보정하라" 등 사유별로 대응하세요.</p>\n<p>보정서는 <strong>"○○법원 ○○ 사건의 보정 명령에 따라 다음과 같이 보정합니다"</strong>로 시작하여, 누락·오류 부분을 수정한 내용을 기재합니다. 전자소송이면 온라인으로, 종이 소장이면 법원에 직접 접수하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보정 대응: 기한 확인 → 보정 사유 파악 → 보정서 작성·제출 → 접수 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '추심명령과 당사자적격에 관한 대법원 판결',
        summary:
          '대법원 2022다299829 사건(2025.12.04 선고)에서 법원은 채무자의 채권에 대해 추심명령이 있더라도 채무자가 제3채무자를 상대로 이행의 소를 제기할 당사자적격을 상실하지 않으며, 추심채권자의 승소 확정판결의 기판력이 채무자에게 미친다고 판시했습니다.',
        takeaway:
          '소장 작성 시 원고와 피고의 당사자적격을 정확히 확인하세요. 채권양도, 추심명령 등이 있는 경우 누가 원고가 되어야 하는지 혼동하기 쉬우므로 전문가 상담을 권합니다.',
      },
    ],
    faq: [
      {
        question: '청구 원인을 잘못 기재하면 패소하나요?',
        answer: '청구 원인의 <strong>사실관계가 잘못 기재</strong>되면 법원이 보정을 요구하거나 판단에 불리하게 작용할 수 있습니다. 사실관계를 정확히 기재하되, 법률 평가 부분(청구권 원인)은 법원이 직권으로 판단하므로 사실 기재에 집중하세요.',
      },
      {
        question: '보정 기한을 넘기면 어떻게 되나요?',
        answer: '<strong>소장이 각하</strong>됩니다(민사소송법 제254조). 각하 결정에 대해 즉시항고할 수 있지만, 보정 기한 내에 대응하는 것이 훨씬 간단합니다. 기한 연장이 필요하면 법원에 기간 연장 신청을 하세요.',
      },
      {
        question: '소장 양식은 어디서 구할 수 있나요?',
        answer: '<strong>대한민국 법원 전자소송(ecourt.go.kr)</strong>에서 양식을 다운받거나 직접 작성할 수 있습니다. 각 법원 민원실에도 소장 양식이 비치되어 있으며, 대한법률구조공단(132)에서 무료 작성 지원을 받을 수 있습니다.',
      },
      {
        question: '소장에 증거를 몇 개까지 첨부할 수 있나요?',
        answer: '<strong>개수 제한은 없습니다</strong>. 관련 있는 증거는 모두 첨부하되, 각 증거에 "갑 제1호증", "갑 제2호증" 등 번호를 매기고 증거설명서를 함께 제출하면 법원이 심리하기 편합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 소장 작성 오류 AI로 점검받기',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '소장 작성 시 필요 서류 목록', href: '/guide/small-claims/complaint-writing-required-documents' },
      { label: '소액소송 소장 작성법', href: '/guide/small-claims/small-claims-complaint-template' },
      { label: '돈 못 받았는데 어디부터 해야 하나', href: '/guide/small-claims/unpaid-money-where-to-start' },
    ],
  },

  // ── 21. small-claims / unpaid-money-where-to-start ──
  {
    domain: 'small-claims',
    slug: 'unpaid-money-where-to-start',
    keyword: '돈 못 받았을 때 어디부터 시작',
    questionKeyword: '돈을 빌려줬는데 못 받고 있어요. 어디부터 해야 하나요?',
    ctaKeyword: '돈 못 받았을 때 대응',
    type: '어디부터형',
    meta: {
      title: '돈 못 받았을 때 4단계 회수 절차 총정리 | 로앤가이드',
      description: '빌려준 돈을 못 받아 답답하다면, 내용증명부터 강제집행까지 4단계 회수 절차를 지금 확인하세요.',
    },
    intro: '<p>친구에게 빌려준 300만원, "다음 달에 갚을게"라는 말만 3번째입니다. 카카오톡을 보내도 읽씹, 전화도 안 받습니다. 더 이상 기다리면 안 되겠다 싶은데, 변호사를 써야 하는지, 경찰에 신고해야 하는지, 뭐부터 해야 하는지 모르겠습니다. 돈을 돌려받기 위한 법적 절차를 단계별로 정리해보세요.</p>',
    sections: [
      {
        title: '1단계: 내용증명으로 공식 변제 최고를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명은 "돈을 갚으라"는 공식적 의사를 법적으로 증명하는 우편입니다</strong></p>\n<p>내용증명은 <strong>우체국에서 발송</strong>할 수 있습니다. 수신인에게 "○○년 ○월 ○일까지 대여금 ○○원을 반환해주시기 바랍니다. 기한 내 미이행 시 법적 조치를 취하겠습니다"라고 작성하세요.</p>\n<p>내용증명의 효과는 ①<strong>지연손해금 기산점 확보</strong> ②<strong>소송 시 증거 활용</strong> ③<strong>심리적 압박 효과</strong>입니다. 비용은 우편 요금 포함 <strong>5,000~10,000원</strong> 수준이며, 가장 저렴하면서도 효과적인 첫 단계입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">내용증명 작성: 채무 사실 + 변제 기한 + 미이행 시 법적 조치 예고 → 우체국 발송</blockquote>',
      },
      {
        title: '2단계: 지급명령 또는 소액소송을 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명에도 반응이 없으면 법원을 통한 절차로 넘어가야 합니다</strong></p>\n<p><strong>상대방이 채무를 인정하고 돈만 안 갚는 경우</strong> → 지급명령이 유리합니다. 인지대가 소송의 1/10이고 2~4주면 확정됩니다.</p>\n<p><strong>상대방이 "빌린 적 없다"고 다툴 경우</strong> → 소액소송(3,000만원 이하)으로 바로 가세요. 지급명령을 넣어도 이의하면 소송으로 넘어가므로 시간 낭비입니다.</p>\n<p>소장 작성이 어렵다면 <strong>대한법률구조공단(132)</strong>에서 무료 소장 작성 도움을 받을 수 있습니다. 전자소송(ecourt.go.kr)으로 접수하면 비용과 시간을 줄일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">선택 기준: 다툼 없음 → 지급명령 / 다툼 예상 → 소액소송 / 3,000만원 초과 → 일반 소송</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/small-claims" style="color:#1565c0;font-weight:600">내 금전 분쟁 최적 해결법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 판결(또는 확정된 지급명령)을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">소액소송은 변론기일 1회로 종결이 원칙이며, 판결 선고까지 1~3개월이 소요됩니다</strong></p>\n<p>변론기일에 <strong>증거 서류 원본</strong>을 가지고 출석하세요. 판사가 원본 대조를 요청할 수 있습니다. 상대방이 출석하지 않으면 <strong>무변론 판결(원고 주장 그대로 인용)</strong>이 선고될 가능성이 높습니다.</p>\n<p>판결이 선고되면 <strong>2주간 항소 기간</strong>이 지나야 확정됩니다. 소액사건은 항소 이유가 제한적이므로(사실인정 오류, 법률 위반 등) 대부분 1심에서 확정됩니다. 확정 후 <strong>판결문 정본과 확정증명원</strong>을 발급받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판결 후: 2주 항소 기간 → 확정 → 판결문 정본 + 확정증명원 발급</blockquote>',
      },
      {
        title: '4단계: 강제집행으로 돈을 회수하세요',
        content:
          '<p><strong style="color:#1e3a5f">판결이 확정되어도 상대방이 자진 변제하지 않으면 강제집행을 해야 합니다</strong></p>\n<p>강제집행의 대상은 상대방의 <strong>재산</strong>입니다.</p>\n<ul>\n<li><strong>예금 압류</strong>: 상대방의 은행 계좌를 압류·추심 (가장 빠르고 효과적)</li>\n<li><strong>급여 압류</strong>: 직장이 있다면 급여의 1/2 범위에서 압류 (민사집행법 제246조)</li>\n<li><strong>부동산 압류</strong>: 경매를 통해 매각대금에서 회수 (시간 소요)</li>\n<li><strong>유체동산 압류</strong>: 차량, 귀금속 등 동산 압류 (실효성 낮은 편)</li>\n</ul>\n<p>강제집행을 위해서는 <strong>집행문이 부여된 판결문 정본</strong>이 필요합니다. 법원 민원실에서 집행문 부여 신청을 하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">회수 순서: 예금 압류(최우선) → 급여 압류 → 부동산 경매 → 유체동산</blockquote>',
      },
    ],
    cases: [
      {
        title: '채권 추심과 당사자적격에 관한 대법원 판결',
        summary:
          '대법원 2022다299829 사건(2025.12.04 선고)에서 법원은 채무자의 제3채무자에 대한 채권에 관하여 추심명령이 있더라도 채무자가 이행의 소를 제기할 당사자적격을 상실하지 않는다고 판시했습니다.',
        takeaway:
          '채권 회수 과정에서 여러 채권자가 관련되어 있을 수 있습니다. 강제집행 단계에서 상대방에게 다른 압류가 있다면 배당 순위가 중요하므로, 가능한 빨리 판결을 받아 압류를 진행하세요.',
      },
    ],
    faq: [
      {
        question: '돈을 안 갚으면 사기죄로 고소할 수 있나요?',
        answer: '단순히 돈을 빌려가고 안 갚는 것만으로는 <strong>사기죄가 성립하지 않습니다</strong>. 사기죄는 "처음부터 갚을 의사나 능력 없이 빌린 경우"에 성립합니다. 빌릴 당시 변제 의사가 있었다면 민사 문제이므로 소액소송이나 지급명령으로 해결해야 합니다.',
      },
      {
        question: '상대방에게 재산이 없으면 어떻게 하나요?',
        answer: '판결을 받아도 상대방에게 <strong>압류할 재산이 없으면 실질적 회수가 어렵습니다</strong>. 이 경우 ①재산명시신청(법원이 재산 공개 명령) ②채무불이행자 명부 등재 ③향후 재산이 생기면 그때 집행 등의 방법을 검토하세요.',
      },
      {
        question: '소멸시효가 지나면 돈을 못 받나요?',
        answer: '일반 민사채권의 소멸시효는 <strong>10년</strong>, 상사채권은 <strong>5년</strong>입니다. 시효가 완성되면 상대방이 시효 항변을 하면 청구가 인정되지 않습니다. 시효 완성 전에 내용증명 발송(최고)이나 소송 제기(시효 중단)를 해야 합니다.',
      },
      {
        question: '변호사 없이 강제집행 신청이 가능한가요?',
        answer: '네, <strong>본인이 직접 가능</strong>합니다. 예금 압류·추심 명령은 법원에 "채권압류 및 추심명령 신청서"를 제출하면 됩니다. 전자소송으로도 가능합니다. 다만 상대방의 계좌 정보를 알아야 하며, 모르면 재산조회 신청이 필요합니다.',
      },
      {
        question: '내용증명 발송 비용은 얼마인가요?',
        answer: '우체국에서 <strong>등기 발송 시 5,000~10,000원</strong> 정도입니다. 온라인 내용증명 서비스를 이용하면 더 간편하고, 비용도 비슷합니다. 가장 저렴하면서도 법적 효력 있는 첫 단계입니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 돈 못 받았을 때 최적 대응법 AI로 분석받기',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '소액소송 vs 지급명령 비교', href: '/guide/small-claims/small-claims-vs-payment-order-comparison' },
      { label: '소액소송 소장 작성 시 필요 서류', href: '/guide/small-claims/complaint-writing-required-documents' },
      { label: '소액소송 셀프 접수 방법', href: '/guide/small-claims/small-claims-self-filing-guide' },
    ],
  },
];
