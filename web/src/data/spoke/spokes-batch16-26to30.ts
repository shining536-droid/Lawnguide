import { SpokePage } from '../spoke-pages';

export const spokesBatch16Pages26to30: SpokePage[] = [
  {
    domain: 'school-violence',
    slug: 'school-violence-sanction-appeal-process',
    keyword: '학폭 가해자 조치에 불복하는 행정심판 절차',
    questionKeyword: '학교폭력 가해학생 조치에 불복하려면 행정심판을 어떻게 진행하나요?',
    ctaKeyword: '학폭 행정심판 절차 확인',
    type: '절차타임라인형',
    perspective: 'offender',
    meta: {
      title: '학폭 행정심판 4단계 절차 — 90일 기한 필수 | 로앤가이드',
      description:
        '학교폭력 처분에 불복하고 싶은데 어디서부터 시작해야 할지 막막하신가요? 행정심판 청구부터 집행정지, 행정소송까지 단계별로 지금 확인하세요.',
    },
    intro:
      '학교폭력대책심의위원회 결과 통지서에 적힌 "전학" 또는 "출석정지" 처분을 보는 순간, 머릿속이 하얘집니다. 아이의 학교생활기록부에 남을 기록이 대학 입시까지 영향을 미칠 수 있다는 생각에 가슴이 답답해집니다. 하지만 학교폭력예방 및 대책에 관한 법률 제17조의2에 따라 가해학생과 보호자는 처분에 불복하여 행정심판을 청구할 수 있습니다. 대법원 2025무565 사건에서도 확인되었듯이, 집행정지 결정이 내려지면 학교생활기록부의 처분 기재까지 즉시 삭제해야 하므로 절차를 정확히 밟는 것이 핵심입니다.',
    timelineSteps: ['처분 통지 확인 및 자료 확보', '행정심판 청구서 작성', '집행정지 신청', '결과에 따른 후속 대응'],
    sections: [
      {
        title: '1단계: 처분 통지서 확인과 심의 자료 확보 (통지 후 즉시)',
        content:
          '<p><strong style="color:#1e3a5f">처분 근거가 된 심의위원회 회의록과 관련 자료를 열람·복사 청구하세요</strong></p>\n<p>학교폭력예방법 제17조에 따른 조치 통지서를 받으면 가장 먼저 할 일은 <strong>처분의 근거 자료를 확보</strong>하는 것입니다. 심의위원회 회의록, 피해학생 진술서, 목격자 진술서 등 심의에 사용된 자료를 학교에 열람·복사 청구하세요. 학교폭력예방법 제21조에 따라 관련 자료의 열람이 가능합니다.</p>\n<p>통지서에 기재된 <strong>처분 사유와 실제 사실관계가 일치하는지</strong> 꼼꼼히 대조해야 합니다. 가해 사실의 과장, 피해 정도의 오인, 정당방위 상황의 누락 등이 발견되면 행정심판의 핵심 쟁점이 됩니다. 심의위원회에서 가해학생 측의 의견 진술 기회가 충분히 보장되지 않았다면 이 역시 절차적 하자에 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 통지서 수령 즉시 회의록·진술서·증거 열람 청구 → 사실관계 불일치 확인</blockquote>',
      },
      {
        title: '2단계: 행정심판 청구서 작성 (처분 안 날부터 90일 이내)',
        content:
          '<p><strong style="color:#1e3a5f">교육청 소속 행정심판위원회에 처분의 위법·부당 사유를 구체적으로 기재하여 청구합니다</strong></p>\n<p>학교폭력예방법 제17조의2 제1항에 따라 가해학생 및 보호자는 처분에 대해 <strong>시·도교육청 행정심판위원회</strong>에 행정심판을 청구할 수 있습니다. 행정심판법 제27조에 의거 처분이 있음을 안 날부터 <strong>90일 이내</strong>, 처분이 있은 날부터 <strong>180일 이내</strong>에 청구해야 합니다.</p>\n<p>청구서에는 처분의 위법·부당 사유를 구체적으로 적어야 합니다. 실무에서 자주 다투는 쟁점은 ① <strong>심의위원회 구성의 적법성</strong>(학부모위원 선출 절차 위반 등), ② <strong>사실관계 오인</strong>(가해 행위의 존부·정도에 대한 다툼), ③ <strong>비례원칙 위반</strong>(경미한 행위에 대한 과도한 조치)입니다. 특히 대법원 판례(2019구합6370)에서 자치위원회 위원 구성의 절차적 하자만으로도 처분이 위법하다고 인정한 바 있어, 절차적 쟁점도 꼼꼼히 살펴야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 90일 기한 엄수 → 위법·부당 사유 3가지(위원 구성, 사실 오인, 비례원칙) 점검</blockquote>',
      },
      {
        title: '3단계: 집행정지 신청 — 학생부 기재 삭제까지',
        content:
          '<p><strong style="color:#1e3a5f">행정심판 청구와 동시에 집행정지를 신청하면 처분 효력을 일시 정지할 수 있습니다</strong></p>\n<p>행정심판법 제23조에 따라 처분의 <strong>집행정지</strong>를 신청할 수 있습니다. "회복하기 어려운 손해"가 발생할 우려가 있다는 점을 소명해야 하는데, 학생부 기재로 인한 상급학교 진학 불이익이 대표적인 사유입니다.</p>\n<p>대법원 2025무565 사건(2025.09.09 선고)에서 법원은 학교폭력 처분에 대한 <strong>집행정지 결정이 내려지면 학생부에 기재된 조치사항을 즉시 삭제해야 한다</strong>고 판시했습니다. "집행정지 중"이라는 문구만 부기하는 것은 삭제에 준하는 조치로 볼 수 없다고 명확히 밝힌 것입니다. 따라서 집행정지가 인용되면 학교에 학생부 기재 삭제를 요구할 수 있습니다.</p>\n<p>집행정지 여부를 판단할 때 법원은 <strong>본안 승소 가능성, 처분 유지 시 불이익 정도, 학교폭력의 심각성, 교정·선도 필요성</strong> 등을 종합적으로 고려합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 집행정지 인용 → 학생부 조치사항 즉시 삭제 요구 가능 (대법원 2025무565)</blockquote>',
      },
      {
        title: '4단계: 행정심판 결과에 따른 후속 대응',
        content:
          '<p><strong style="color:#1e3a5f">행정심판이 기각되더라도 행정소송으로 한 번 더 다툴 수 있습니다</strong></p>\n<p>행정심판 인용 시 학교장은 처분을 취소하거나 감경해야 합니다. 실무적으로 전학이 출석정지나 특별교육 이수로 변경되는 경우가 적지 않습니다. 반면 <strong>기각되었다면 재결서 송달일부터 90일 이내</strong>에 행정법원에 취소소송을 제기할 수 있습니다(행정소송법 제20조).</p>\n<p>행정소송에서도 행정소송법 제23조에 따라 <strong>별도의 집행정지 신청</strong>이 가능합니다. 특히 고3 학생처럼 입시가 임박한 경우, 집행정지의 긴급성이 인정될 가능성이 높습니다. 소송 과정에서 심의위원회에서 충분히 검토되지 않은 <strong>추가 증거</strong>(CCTV, 목격자 진술, 반성문, 합의서 등)를 제출하면 결과가 달라질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 행정심판 기각 → 90일 이내 행정소송 + 집행정지 재신청 가능</blockquote>',
      },
      {
        title: '행정심판 준비 시 꼭 확인할 서류 목록',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류를 미리 준비하면 행정심판 진행이 훨씬 수월합니다</strong></p>\n<p>① <strong>처분 통지서 원본</strong> — 처분일, 처분 내용, 근거 법조문 확인<br>② <strong>심의위원회 회의록</strong> — 의견 진술 기회 보장 여부, 위원 구성 적법성 확인<br>③ <strong>피해학생 진술서 및 목격자 진술서</strong> — 사실관계 불일치 여부 대조<br>④ <strong>가해학생 측 반성문·사과문</strong> — 반성 태도 입증<br>⑤ <strong>피해학생 측과의 합의서</strong> — 처분 감경 핵심 자료<br>⑥ <strong>담임교사 의견서</strong> — 학교생활 태도, 교우관계 등 참고 자료<br>⑦ <strong>CCTV 영상, 카카오톡 대화 캡처</strong> — 사실관계 입증 보조 증거</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 합의서가 있으면 처분 감경 가능성이 크게 높아집니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025무565 사건(2025.09.09 선고) — 학교폭력 처분 집행정지와 학생부 기재 삭제',
        summary:
          '이 사건에서 대법원은 학교폭력 관련 처분에 대한 집행정지 결정이 있으면 행정청은 그 즉시 학교생활기록부에 기재된 조치사항을 삭제해야 한다고 판시했습니다. 학생부 기재를 유지한 채 "집행정지 중" 문구만 부기하는 것은 삭제에 준하는 조치로 볼 수 없다고 명확히 밝혔습니다.',
        takeaway:
          '혐의를 받고 있다면, 행정심판과 동시에 집행정지를 신청하고, 인용되면 학교에 학생부 기재 삭제를 즉시 요청하세요. 특히 입시를 앞둔 학생이라면 집행정지의 실질적 효과가 매우 큽니다.',
      },
    ],
    faq: [
      {
        question: '행정심판 비용은 얼마나 드나요?',
        answer:
          '<strong>행정심판 자체에는 수수료가 없습니다.</strong> 본인이 직접 청구서를 작성할 수도 있습니다. 다만 사안이 복잡하거나 집행정지까지 함께 진행한다면 학교폭력 전문 변호사 선임을 고려해보세요. 변호사 선임 비용은 사안에 따라 다르지만 일반적으로 300~500만 원 수준입니다.',
      },
      {
        question: '행정심판 진행 중에 처분이 집행되나요?',
        answer:
          '<strong>집행정지 신청을 하지 않으면 처분은 그대로 집행됩니다.</strong> 행정심판 청구 자체에는 집행을 정지하는 효력이 없으므로, 행정심판 청구서와 함께 반드시 집행정지 신청서를 별도로 제출해야 합니다. 집행정지가 인용되어야 전학 등 조치의 효력이 일시 정지됩니다.',
      },
      {
        question: '행정심판에서 처분이 취소되면 학교폭력 이력이 완전히 사라지나요?',
        answer:
          '<strong>행정심판 인용으로 처분이 취소되면 학교생활기록부 기재도 삭제됩니다.</strong> 처분 자체가 없었던 것과 동일한 상태가 되므로 학생부에 남는 기록이 없습니다. 다만, 처분이 감경된 경우(예: 전학 → 출석정지)에는 감경된 조치 내용이 기재됩니다.',
      },
      {
        question: '행정심판과 행정소송의 차이가 무엇인가요?',
        answer:
          '<strong>행정심판은 교육청 행정심판위원회, 행정소송은 법원에서 진행됩니다.</strong> 행정심판은 무료이고 비교적 빠르게 결과가 나오지만(약 60일), 행정소송은 소송비용이 들고 기간이 6개월~1년 이상 소요될 수 있습니다. 행정심판을 먼저 거치고, 불복 시 행정소송으로 넘어가는 것이 일반적인 절차입니다.',
      },
      {
        question: '초등학생도 학교폭력 행정심판이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 학교폭력예방법은 초·중·고 모든 학교에 적용됩니다. 미성년자인 경우 보호자(부모)가 법정대리인으로서 행정심판을 청구합니다. 초등학생이라도 전학, 출석정지 등 처분이 내려질 수 있으며, 불복 절차는 동일합니다.',
      },
    ],
    cta: {
      text: '학폭 처분에 불복하고 싶다면, 지금 바로 내 상황에 맞는 대응 전략을 확인해보세요',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 심의위원회 절차 총정리', href: '/spoke/school-violence/school-violence-committee-procedure' },
      { label: '학교폭력 가해자 지목 시 부모 대응법', href: '/spoke/school-violence/school-violence-accused-parent-response' },
      { label: '학폭 조치에 불복하는 방법', href: '/spoke/school-violence/school-violence-measures-appeal' },
      { label: '학교폭력 가해학생 제재 방어 전략', href: '/spoke/school-violence/perpetrator-sanction-defense' },
      { label: '학교폭력 무고 대응법', href: '/spoke/school-violence/school-violence-false-report-response' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'inheritance-forced-share-lawsuit-guide',
    keyword: '유류분 청구 소송 준비와 계산 방법',
    questionKeyword: '유류분 청구 소송은 어떻게 준비하고 계산하나요?',
    ctaKeyword: '유류분 청구 소송 준비 확인',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '유류분 청구 소송 3단계 — 계산법과 시효 2가지 | 로앤가이드',
      description:
        '상속에서 불공평하게 배제되었다면 유류분 반환 청구 소송으로 정당한 몫을 되찾을 수 있습니다. 계산 방법부터 소송 절차까지 지금 확인하세요.',
    },
    intro:
      '부모님이 돌아가시고 유언장을 열어보니, 재산 전부가 한 형제에게만 넘어가 있었습니다. "나는 자식인데 왜 한 푼도 못 받지?"라는 억울함이 밀려옵니다. 민법 제1112조에 따르면 직계비속은 법정상속분의 2분의 1을 유류분으로 보장받으며, 이를 침해당한 경우 유류분 반환 청구 소송을 통해 정당한 몫을 돌려받을 수 있습니다. 다만 상속개시와 반환해야 할 증여·유증을 안 날부터 1년, 상속개시일부터 10년 이내에 청구해야 하므로 시간이 중요합니다.',
    timelineSteps: ['유류분 침해 확인 및 재산 파악', '유류분 계산 및 소송 준비', '소장 제출 및 재판 진행'],
    sections: [
      {
        title: '1단계: 유류분 침해 여부 확인과 상속재산 파악',
        content:
          '<p><strong style="color:#1e3a5f">유언장, 증여 내역, 상속재산 전체를 먼저 파악해야 합니다</strong></p>\n<p>유류분 청구의 출발점은 <strong>피상속인의 전체 재산 규모를 파악</strong>하는 것입니다. 민법 제1113조에 따르면 유류분 산정의 기초재산은 "상속개시 시 피상속인의 재산 + 증여재산 - 채무"입니다. 공동상속인에 대한 증여는 기간 제한 없이 전부 산입되고, 제3자에 대한 증여는 상속개시 전 1년간의 것이 산입됩니다.</p>\n<p>구체적으로 ① <strong>부동산 등기부등본</strong>으로 피상속인 명의 부동산 확인, ② <strong>금융거래정보 조회</strong>(상속인은 금융감독원에 상속재산 조회 신청 가능), ③ <strong>국세·지방세 완납증명서</strong>로 채무 규모 파악, ④ <strong>유언장·증여계약서</strong>로 사전 증여 및 유증 내역을 확인하세요. 사전 증여가 숨겨져 있는 경우가 많으므로 부동산 매매 이력까지 살펴봐야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 기초재산 = 상속재산 + 증여재산 - 채무 → 금융·부동산·증여 내역 모두 조회</blockquote>',
      },
      {
        title: '2단계: 유류분 계산 방법과 소송 전 준비',
        content:
          '<p><strong style="color:#1e3a5f">유류분 부족액 = 유류분액 - 특별수익액 - 순상속분액</strong></p>\n<p>민법 제1112조에 따른 유류분 비율은 다음과 같습니다:<br>• <strong>직계비속·배우자</strong>: 법정상속분의 <strong>1/2</strong><br>• <strong>직계존속·형제자매</strong>: 법정상속분의 <strong>1/3</strong></p>\n<p>유류분 부족액 산정 공식은 이렇습니다:<br>① <strong>유류분액</strong> = 기초재산 × 법정상속분 × 유류분 비율<br>② <strong>특별수익액</strong> = 자신이 받은 증여·유증 금액<br>③ <strong>순상속분액</strong> = 실제로 상속받은 금액 - 상속채무 분담액<br>④ <strong>유류분 부족액</strong> = ① - ② - ③</p>\n<p>대법원 2023다316851 사건에서도 확인되듯이, 유류분액 산정 시 증여재산의 가액은 <strong>상속개시 시점</strong>을 기준으로 평가하고, 가액반환을 명할 때는 <strong>사실심 변론종결 시</strong>를 기준으로 합니다. 소송 전에 정확한 계산이 어렵다면 변호사 상담을 통해 예상 금액을 산출해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 직계비속 유류분 = 기초재산 × 법정상속분 × 1/2 → 자신의 특별수익과 순상속분 차감</blockquote>',
      },
      {
        title: '3단계: 유류분 반환 청구 소송 절차',
        content:
          '<p><strong style="color:#1e3a5f">소멸시효 1년·10년 이내에 소장을 제출해야 합니다</strong></p>\n<p>유류분 반환 청구 소송은 <strong>피상속인의 주소지 관할 가정법원</strong>에 제기합니다. 민법 제1117조에 따라 소멸시효는 ① 상속개시와 반환해야 할 증여·유증을 <strong>안 날부터 1년</strong>, ② 상속개시일부터 <strong>10년</strong>입니다. 두 기한 중 하나라도 지나면 청구할 수 없으므로 시효 관리가 매우 중요합니다.</p>\n<p>소장에는 ① 원고(청구인)와 피고(반환의무자)의 인적사항, ② 피상속인 정보와 상속관계, ③ 유류분 침해 사실과 계산 내역, ④ 반환 청구 금액을 기재합니다. <strong>원물반환</strong>(부동산 지분 이전 등)을 청구할 수도 있고, <strong>가액반환</strong>(금전 지급)을 청구할 수도 있습니다. 대법원은 원물반환이 불가능한 경우가 아니라면 원물반환도 인정하고 있습니다.</p>\n<p>재판 과정에서 가장 많이 다투는 쟁점은 ① 증여재산의 범위(숨겨진 증여 여부), ② 증여재산의 가액 평가(감정 필요), ③ 특별수익의 존부(피상속인의 부양 대가인지 여부)입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 시효 — 안 날부터 1년 / 상속개시일부터 10년 → 가정법원에 소장 제출</blockquote>',
      },
      {
        title: '소송 전에 반드시 확보해야 할 서류 목록',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류를 미리 준비하면 소송 진행이 수월해집니다</strong></p>\n<p>① <strong>기본증명서·가족관계증명서</strong> — 상속인 관계 입증<br>② <strong>사망진단서 또는 제적등본</strong> — 상속개시 사실 확인<br>③ <strong>부동산 등기부등본</strong> — 피상속인 명의 부동산 및 이전 내역 확인<br>④ <strong>금융거래정보 조회 결과</strong> — 예금, 보험, 주식 등 금융재산 파악<br>⑤ <strong>유언장 사본</strong> — 유증 내용 확인<br>⑥ <strong>증여계약서·부동산 매매계약서</strong> — 사전 증여 증거<br>⑦ <strong>감정평가서</strong> — 부동산·비상장주식 등 시가 평가<br>⑧ <strong>채무 관련 서류</strong>(금융기관 잔액증명, 국세·지방세 완납증명) — 상속채무 파악</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 금융감독원 상속재산 조회 서비스(1332)를 활용하면 금융재산을 한 번에 확인할 수 있습니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2023다316851 사건(2024.05.17 선고) — 유류분 반환과 가액 산정 기준',
        summary:
          '이 사건에서 대법원은 유류분액을 산정할 때 반환의무자가 증여받은 재산의 시가는 상속개시 시를 기준으로 하고, 가액반환을 명하는 경우에는 사실심 변론종결 시를 기준으로 한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 증여재산의 가액이 시점에 따라 크게 달라질 수 있으므로, 상속개시 시점과 현재 시점의 시가를 모두 확인해두는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '유류분 청구 소송 비용은 얼마나 드나요?',
        answer:
          '<strong>인지대는 청구 금액에 따라 달라집니다.</strong> 소송목적물 가액의 0.2~0.5% 수준이며, 별도로 송달료가 필요합니다. 변호사 선임 비용은 착수금 300~500만 원, 성공보수 10~15% 수준이 일반적입니다. 대한법률구조공단(전화 132)에서 무료 법률상담도 가능합니다.',
      },
      {
        question: '유류분 청구는 누구를 상대로 하나요?',
        answer:
          '<strong>유증이나 증여를 받은 사람(수증자 또는 수유자)을 상대로 청구합니다.</strong> 유언으로 재산을 받은 공동상속인, 또는 생전 증여를 받은 자가 피고가 됩니다. 상대방이 여러 명이면 각자에 대해 별도로 청구하거나 공동소송으로 진행합니다.',
      },
      {
        question: '부모님이 생전에 준 용돈이나 결혼 비용도 유류분 계산에 포함되나요?',
        answer:
          '<strong>통상적인 수준의 용돈·결혼 비용은 특별수익에 해당하지 않습니다.</strong> 다만, 사회통념을 넘어서는 고액의 결혼 비용이나 사업자금 지원 등은 특별수익으로 인정될 수 있습니다. 대법원은 "피상속인의 자산, 소득, 생활 수준 등을 참작하여 판단"하라고 밝히고 있습니다.',
      },
      {
        question: '유류분 반환은 반드시 돈으로 받아야 하나요?',
        answer:
          '<strong>원물반환(부동산 지분 등)과 가액반환(금전) 모두 가능합니다.</strong> 대법원은 원물반환이 원칙이라고 보면서도, 실무적으로는 가액반환이 더 많이 이루어집니다. 원물반환을 원한다면 소장에 그 취지를 명시해야 합니다.',
      },
      {
        question: '유류분 소송 중에 합의할 수 있나요?',
        answer:
          '<strong>가능합니다. 오히려 재판 진행 중 조정이나 합의로 해결되는 경우가 상당히 많습니다.</strong> 법원도 가사조정을 먼저 권유하는 경우가 많으며, 양측이 합의하면 조정조서로 확정됩니다. 가족 관계를 고려할 때 합의가 더 나은 선택일 수 있습니다.',
      },
    ],
    cta: {
      text: '유류분 침해를 당했다면, 지금 바로 내 상속 상황을 정리해보세요',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '상속포기 절차와 기한', href: '/spoke/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 절차 총정리', href: '/spoke/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 숨겨진 빚 발견 시 대처법', href: '/spoke/inheritance/inheritance-hidden-debt-discovery' },
      { label: '상속 가족분쟁 조정 절차', href: '/spoke/inheritance/inheritance-family-dispute-mediation' },
      { label: '상속포기 기한 놓쳤을 때', href: '/spoke/inheritance/inheritance-renunciation-deadline' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'stalking-emergency-protective-measures',
    keyword: '스토킹 피해자 긴급응급조치와 잠정조치 신청',
    questionKeyword: '스토킹 피해를 받고 있는데 긴급응급조치와 잠정조치는 어떻게 신청하나요?',
    ctaKeyword: '스토킹 긴급응급조치 신청 확인',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '스토킹 긴급응급조치·잠정조치 신청 5가지 핵심 | 로앤가이드',
      description:
        '스토킹이 점점 심해져 무서운데 어떻게 해야 할지 모르겠다면, 긴급응급조치부터 잠정조치 신청까지 피해자가 할 수 있는 모든 조치를 지금 확인하세요.',
    },
    intro:
      '전 남자친구가 매일 집 앞에서 기다리고, 하루에 수십 통의 문자를 보냅니다. 차단해도 새 번호로 연락하고, 직장까지 찾아옵니다. 언제 더 위험한 상황이 벌어질지 불안에 떨고 있습니다. 스토킹범죄의 처벌 등에 관한 법률(이하 "스토킹처벌법") 제3조에 따르면 스토킹행위란 상대방의 의사에 반하여 정당한 이유 없이 접근·따라다니기, 통신매체를 이용한 연락 등을 반복하는 행위입니다. 피해자라면 경찰의 긴급응급조치와 법원의 잠정조치를 통해 즉각적인 보호를 받을 수 있습니다.',
    sections: [
      {
        title: '긴급응급조치 — 112 신고 즉시 경찰이 취하는 조치',
        content:
          '<p><strong style="color:#1e3a5f">112에 신고하면 경찰이 현장에서 즉시 긴급응급조치를 취합니다</strong></p>\n<p>스토킹처벌법 제4조에 따라 사법경찰관은 스토킹 신고를 받으면 <strong>긴급응급조치</strong>를 취할 수 있습니다. 구체적으로 ① <strong>스토킹행위자와 피해자의 분리</strong>, ② <strong>접근금지</strong>(피해자의 주거·학교·직장 100m 이내 접근 금지), ③ <strong>통신수단을 이용한 연락 금지</strong> 등입니다.</p>\n<p>긴급응급조치는 경찰이 <strong>현장에서 즉시</strong> 내릴 수 있어 법원 결정을 기다릴 필요가 없습니다. 다만 임시조치이므로 효력이 제한적이며, 보다 강력하고 지속적인 보호를 위해서는 법원의 잠정조치를 신청해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 112 신고 → 경찰 현장 도착 → 즉시 접근금지·연락금지 등 긴급응급조치 실시</blockquote>',
      },
      {
        title: '잠정조치 신청 — 법원이 내리는 강력한 보호 명령',
        content:
          '<p><strong style="color:#1e3a5f">검사 또는 사법경찰관의 신청으로 법원이 잠정조치를 결정합니다</strong></p>\n<p>스토킹처벌법 제9조에 따라 법원은 스토킹범죄의 원활한 조사·심리 또는 <strong>피해자 보호를 위하여 필요하다고 인정하는 경우</strong> 스토킹행위자에게 잠정조치를 할 수 있습니다. 잠정조치의 종류는 다음과 같습니다:</p>\n<p>① <strong>접근금지</strong> — 피해자의 주거, 학교, 직장 등 특정 장소 접근 금지<br>② <strong>통신 금지</strong> — 전화, 문자, SNS 등 모든 통신수단을 이용한 접근 금지<br>③ <strong>전기통신을 이용한 접근 금지</strong><br>④ <strong>유치장·구치소 유치</strong>(10일 이내)</p>\n<p>잠정조치 기간은 <strong>2개월</strong>이며, 법원의 결정으로 <strong>연장이 가능</strong>합니다(제11조). 대법원 2025모3144 사건(2025.12.11 선고)에서도 잠정조치 연장 절차의 적법성이 쟁점이 되었는데, 이는 법원이 피해자 보호를 위해 잠정조치를 적극적으로 활용하고 있음을 보여줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 잠정조치 = 접근금지 + 통신금지 + 유치장 유치 가능 → 2개월 + 연장 가능</blockquote>',
      },
      {
        title: '피해자가 직접 할 수 있는 보호 조치',
        content:
          '<p><strong style="color:#1e3a5f">신고와 동시에 증거를 확보하고, 안전 계획을 세워야 합니다</strong></p>\n<p>경찰 신고 전이라도 피해자가 직접 할 수 있는 조치가 있습니다. ① <strong>증거 수집</strong> — 스토킹 행위가 담긴 문자메시지, 카카오톡 대화, 통화 녹음, CCTV 영상, 우편물 사진 등을 날짜별로 저장하세요. ② <strong>스토킹 일지 작성</strong> — 날짜, 시간, 장소, 행위 내용, 목격자를 기록하세요. ③ <strong>안전 계획 수립</strong> — 비상 연락처 설정, 출퇴근 경로 변경, 주거지 보안 강화(도어록 비밀번호 변경 등)를 실행하세요.</p>\n<p>스토킹처벌법 제18조에 따라 피해자는 <strong>국선변호사 선임</strong>을 요청할 수 있습니다. 또한 여성긴급전화 1366, 경찰청 범죄피해자 지원센터(1577-1295)에서 무료 상담과 임시 거처 제공 등의 지원을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 증거 저장 + 스토킹 일지 + 안전 계획 → 신고 시 증거로 활용</blockquote>',
      },
      {
        title: '잠정조치를 위반하면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치 위반 시 2년 이하의 징역 또는 2천만 원 이하의 벌금에 처합니다</strong></p>\n<p>스토킹처벌법 제19조 제2항에 따라 법원의 잠정조치를 위반한 사람은 <strong>2년 이하의 징역 또는 2천만 원 이하의 벌금</strong>에 처합니다. 이는 잠정조치의 실효성을 담보하는 강력한 제재입니다.</p>\n<p>만약 잠정조치가 내려졌음에도 스토킹행위자가 접근금지를 어기고 찾아오거나 연락을 한다면, ① <strong>즉시 112에 신고</strong>하세요. ② 경찰에 <strong>잠정조치 결정문 사본</strong>을 제시하세요. ③ <strong>위반 증거</strong>(문자, 방문 CCTV 등)를 확보하세요. 잠정조치 위반은 별도의 범죄이므로 추가 처벌이 가능하며, 유치장 유치 등 더 강력한 잠정조치로 변경될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 잠정조치 위반 = 별도 범죄 → 즉시 112 신고 + 위반 증거 확보</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025모3144 사건(2025.12.11 선고) — 잠정조치 연장 결정의 적법성',
        summary:
          '이 사건에서 대법원은 스토킹처벌법에 따른 잠정조치 결정에 대한 항고에는 형사소송법 제407조(원심법원의 항고 기각)가 준용되지 않으며, 항고장을 받은 원심법원은 3일 이내에 의견서를 첨부하여 항고법원에 기록을 보내야 한다고 판시했습니다.',
        takeaway:
          '이 판례는 법원이 스토킹 피해자 보호를 위한 잠정조치의 절차적 적법성을 엄격히 관리하고 있음을 보여줍니다. 잠정조치가 내려졌다면 그 보호는 법적으로 강력하게 뒷받침되므로, 위반 시 즉시 신고하세요.',
      },
    ],
    faq: [
      {
        question: '스토킹 신고 후 잠정조치까지 얼마나 걸리나요?',
        answer:
          '<strong>긴급응급조치는 112 신고 즉시 가능하고, 잠정조치는 검사 신청 후 법원이 결정합니다.</strong> 긴급한 경우 경찰이 현장에서 바로 긴급응급조치를 취하며, 잠정조치는 검사의 신청을 받아 법원이 수일 내에 결정하는 것이 일반적입니다.',
      },
      {
        question: '가해자가 "그냥 안부를 물은 것"이라고 주장하면 어떻게 되나요?',
        answer:
          '<strong>상대방의 의사에 반하여 반복적으로 접근하면 스토킹행위에 해당합니다.</strong> 스토킹처벌법 제2조에 따라 "정당한 이유 없이" "상대방의 의사에 반하여" 반복 접근하면 그 의도와 관계없이 스토킹행위로 인정됩니다. 거부 의사를 명확히 전달한 증거(문자, 카톡 등)가 있으면 더 강력합니다.',
      },
      {
        question: '스토킹 피해자도 국선변호사를 선임할 수 있나요?',
        answer:
          '<strong>네, 스토킹처벌법 제18조에 따라 피해자는 국선변호사 선임을 요청할 수 있습니다.</strong> 경제적으로 어려운 피해자는 무료로 변호사의 도움을 받을 수 있습니다. 수사 단계부터 재판까지 피해자 권리를 대리합니다.',
      },
      {
        question: '잠정조치 기간이 끝나면 어떻게 되나요?',
        answer:
          '<strong>기간 만료 전에 연장 신청이 가능하며, 재판이 진행 중이면 피해자 보호조치로 전환될 수 있습니다.</strong> 잠정조치 기간은 2개월이며, 법원 결정으로 연장할 수 있습니다. 유죄 판결 시에는 별도의 보호명령(5년 이내)이 내려질 수 있습니다.',
      },
      {
        question: '스토킹 가해자에 대한 처벌은 어느 정도인가요?',
        answer:
          '<strong>스토킹범죄는 3년 이하의 징역 또는 3천만 원 이하의 벌금에 처합니다.</strong> 스토킹처벌법 제18조에 따른 형벌이며, 흉기 등을 사용한 경우 5년 이하의 징역 또는 5천만 원 이하의 벌금으로 가중됩니다. 잠정조치 위반은 별도로 2년 이하 징역 또는 2천만 원 이하 벌금입니다.',
      },
      {
        question: '무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>여성긴급전화 1366(24시간), 경찰청 범죄피해자 지원센터 1577-1295, 대한법률구조공단 132에서 무료 상담이 가능합니다.</strong> 1366은 24시간 운영되며 임시 거처 연계, 상담, 법률지원까지 원스톱으로 제공합니다.',
      },
    ],
    cta: {
      text: '스토킹 피해를 받고 있다면, 지금 바로 내 상황에 맞는 보호 조치를 확인해보세요',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 즉시 대응 가이드', href: '/spoke/stalking/stalking-immediate-response' },
      { label: '스토킹 처벌 수위와 접근금지', href: '/spoke/stalking/stalking-penalty-restraining-order' },
      { label: '전 연인 연락이 스토킹인지 기준', href: '/spoke/stalking/ex-partner-contact-stalking-criteria' },
      { label: '스토킹 증거 수집 FAQ', href: '/spoke/stalking/stalking-evidence-collection-faq' },
      { label: '스토킹 신고와 접근금지 절차', href: '/spoke/stalking/stalking-report-and-restraining-order' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'inheritance-division-mediation-tribunal',
    keyword: '상속재산 분할 협의 안 될 때 조정·심판 절차',
    questionKeyword: '상속재산 분할 협의가 안 되면 법원에 조정이나 심판을 청구할 수 있나요?',
    ctaKeyword: '상속재산 분할 조정·심판 절차 확인',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '상속재산 분할 조정·심판 3단계 절차 총정리 | 로앤가이드',
      description:
        '상속인끼리 재산 분할 협의가 안 돼서 답답하신가요? 가정법원 조정부터 심판까지 단계별 절차와 준비서류를 지금 확인하세요.',
    },
    intro:
      '아버지가 돌아가시고 6개월이 지났지만, 형제들 사이에서 누가 집을 가질지, 예금은 어떻게 나눌지 합의가 되지 않습니다. 카카오톡 가족 단톡방에서 말다툼만 반복되고, 결국 서로 연락을 끊었습니다. 민법 제1013조에 따르면 공동상속인은 언제든지 그 협의로 상속재산을 분할할 수 있지만, 협의가 되지 않으면 가정법원에 분할을 청구할 수 있습니다. 대법원 2024스866 사건에서도 상속재산 분할 심판의 구체적 기준을 제시하고 있어, 법원의 판단에 따른 공정한 분할이 가능합니다.',
    timelineSteps: ['분할 협의 시도 및 재산 목록 확정', '가정법원 조정 신청', '조정 불성립 시 심판 절차'],
    sections: [
      {
        title: '1단계: 분할 협의 시도와 상속재산 목록 확정',
        content:
          '<p><strong style="color:#1e3a5f">법원 절차 전에 협의를 먼저 시도하고, 전체 상속재산 목록을 확정해야 합니다</strong></p>\n<p>상속재산 분할의 첫 번째 단계는 <strong>공동상속인 전원이 참여하는 분할 협의</strong>입니다. 민법 제1013조 제1항에 따라 협의에는 상속인 전원의 동의가 필요하며, 1인이라도 반대하면 협의는 성립되지 않습니다. 협의가 되지 않는 경우에 비로소 법원에 분할을 청구할 수 있습니다.</p>\n<p>법원 절차에 들어가기 전에 <strong>상속재산 전체 목록을 확정</strong>하는 것이 중요합니다. ① 부동산 등기부등본으로 부동산 확인, ② 금융감독원 상속재산 조회 서비스(1332)로 예금·보험·주식 확인, ③ 국세·지방세 체납 여부 확인으로 상속채무 파악이 필요합니다. 재산을 빠뜨리면 나중에 별도의 분할 절차를 다시 거쳐야 하므로 처음부터 철저히 조사하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상속인 전원 협의 불성립 → 재산 목록 확정 후 법원 절차 진행</blockquote>',
      },
      {
        title: '2단계: 가정법원 조정 신청',
        content:
          '<p><strong style="color:#1e3a5f">상속재산 분할 사건은 가정법원 조정을 먼저 거치는 것이 일반적입니다</strong></p>\n<p>상속재산 분할 심판은 <strong>마류 가사비송사건</strong>에 해당합니다(가사소송법 제2조 제1항 제2호 (나)목). 실무적으로 법원은 심판 전에 <strong>조정 절차</strong>를 먼저 진행하는 경우가 많습니다. 조정은 조정위원회가 양측의 의견을 듣고 합의안을 제시하는 절차로, 합의가 이루어지면 <strong>조정조서</strong>가 확정 판결과 동일한 효력을 갖습니다.</p>\n<p>조정 신청은 <strong>피상속인의 최후 주소지 관할 가정법원</strong>에 합니다. 신청서에는 ① 공동상속인 전원의 인적사항, ② 피상속인 정보, ③ 상속재산 목록, ④ 희망하는 분할 방법을 기재합니다. 조정에서는 상속인 각자의 사정(기여도, 부양 기간, 경제적 상황 등)을 고려하여 유연한 합의안을 도출할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 피상속인 최후 주소지 가정법원에 조정 신청 → 조정조서는 확정 판결과 동일한 효력</blockquote>',
      },
      {
        title: '3단계: 조정 불성립 시 심판 절차 진행',
        content:
          '<p><strong style="color:#1e3a5f">조정이 불성립되면 자동으로 심판 절차로 넘어갑니다</strong></p>\n<p>조정이 성립되지 않으면 사건은 <strong>상속재산 분할 심판</strong>으로 이행됩니다. 심판에서 법원은 민법 제1013조 제2항에 따라 <strong>각 상속인의 구체적 상속분</strong>을 산정하고, 이에 따라 재산을 분할합니다. 구체적 상속분이란 법정상속분에 특별수익과 기여분을 가감하여 산출한 각 상속인의 실질적인 몫을 의미합니다.</p>\n<p>법원이 선택할 수 있는 분할 방법은 ① <strong>현물분할</strong>(부동산을 지분별로 나누기), ② <strong>대상분할</strong>(한 상속인이 재산을 취득하고 다른 상속인에게 차액을 금전으로 지급), ③ <strong>환가분할</strong>(재산을 매각하여 대금을 나누기) 등입니다. 대법원 2024스866 사건에서도 구체적 상속분 산정의 기준 시점은 상속개시 시라고 명확히 밝히고 있습니다.</p>\n<p>심판에 불복하는 경우 <strong>2주 이내에 즉시항고</strong>를 할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 조정 불성립 → 심판으로 자동 이행 → 현물·대상·환가 분할 중 법원이 결정</blockquote>',
      },
      {
        title: '기여분 주장 — 더 많은 몫을 받을 수 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">피상속인을 특별히 부양하거나 재산 형성에 기여한 상속인은 기여분을 청구할 수 있습니다</strong></p>\n<p>민법 제1008조의2에 따르면, 공동상속인 중 피상속인의 <strong>재산 유지·증가에 특별히 기여</strong>하거나 <strong>피상속인을 특별히 부양</strong>한 사람은 기여분을 인정받을 수 있습니다. 기여분이 인정되면 그 금액만큼 법정상속분보다 더 많은 몫을 받게 됩니다.</p>\n<p>기여분이 인정되는 대표적인 경우는 ① 장기간 부모를 <strong>간병·부양</strong>한 경우, ② 피상속인의 <strong>사업에 무보수로 기여</strong>한 경우, ③ 상속재산의 <strong>유지·관리에 특별한 노력</strong>을 기울인 경우입니다. 다만 일상적인 부양이나 효도는 기여분으로 인정되기 어렵고, <strong>"특별한" 기여</strong>가 있어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 특별한 간병·사업 기여·재산 유지 → 기여분 인정 → 법정상속분 + 기여분</blockquote>',
      },
      {
        title: '상속재산 분할 절차에 필요한 서류',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류를 준비하면 조정·심판 절차를 원활하게 진행할 수 있습니다</strong></p>\n<p>① <strong>기본증명서·가족관계증명서</strong>(피상속인 및 상속인 전원) — 상속관계 입증<br>② <strong>사망진단서 또는 제적등본</strong> — 상속개시 사실 확인<br>③ <strong>부동산 등기부등본 및 감정평가서</strong> — 부동산 시가 확인<br>④ <strong>금융거래정보 조회 결과</strong> — 예금·보험·주식 등 금융재산<br>⑤ <strong>국세·지방세 완납증명서</strong> — 상속채무 범위 확인<br>⑥ <strong>유언장 사본</strong>(존재 시) — 유증 내용 확인<br>⑦ <strong>기여분 입증 자료</strong> — 간병 기록, 입출금 내역, 진료비 영수증 등</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 금융감독원 상속재산 조회(1332)와 안심상속 원스톱 서비스(정부24)를 활용하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024스866 사건(2025.03.24 선고) — 상속재산 분할과 구체적 상속분 산정',
        summary:
          '이 사건에서 대법원은 구체적 상속분이란 공동상속인 중 일부의 수증재산과 기여분을 참작해 법정상속분을 수정한 것으로서 상속개시 시를 기준으로 정해진다고 판시했습니다. 또한 가분채권도 공평을 해하는 특별한 사정이 있으면 예외적으로 분할 대상이 될 수 있다고 밝혔습니다.',
        takeaway:
          '상속재산 분할 시 법정상속분만이 기준이 아니라, 특별수익과 기여분을 고려한 구체적 상속분으로 조정된다는 점을 기억하세요. 부모를 특별히 부양한 사실이 있다면 기여분을 적극 주장할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '상속재산 분할 조정 비용은 얼마인가요?',
        answer:
          '<strong>인지대는 상속재산 가액에 따라 산정되며, 송달료도 별도로 필요합니다.</strong> 대략적으로 인지대 수만 원~수십만 원, 송달료 수만 원 수준입니다. 변호사 선임 비용은 사안의 복잡성에 따라 500만~1,000만 원 이상이 될 수 있습니다.',
      },
      {
        question: '조정에 꼭 참석해야 하나요?',
        answer:
          '<strong>정당한 사유 없이 불출석하면 과태료가 부과될 수 있고, 조정이 불성립 처리됩니다.</strong> 법원은 당사자 출석을 중시하므로 가급적 참석하되, 부득이한 경우 대리인(변호사)이 출석할 수 있습니다.',
      },
      {
        question: '분할 협의서만 작성하면 법적 효력이 있나요?',
        answer:
          '<strong>상속인 전원이 서명·날인한 분할 협의서는 법적 효력이 있습니다.</strong> 다만 부동산이 포함된 경우 협의서를 근거로 소유권 이전등기를 해야 합니다. 향후 분쟁 예방을 위해 공증을 받아두면 더 안전합니다.',
      },
      {
        question: '상속재산 분할에 시효가 있나요?',
        answer:
          '<strong>상속재산 분할 청구에는 소멸시효가 없습니다.</strong> 민법 제1013조에 따라 공동상속인은 "언제든지" 분할을 청구할 수 있으므로, 시간이 지났다고 분할을 포기할 필요는 없습니다. 다만 시간이 지날수록 재산의 변동이 생길 수 있으므로 빠른 해결이 유리합니다.',
      },
      {
        question: '해외에 있는 상속인도 절차에 참여할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 해외 거주 상속인은 위임장을 작성하여 국내 변호사에게 대리를 맡길 수 있습니다. 재외공관에서 위임장에 공증을 받아 국내로 보내면 됩니다. 화상 조정이 가능한 경우도 있으므로 법원에 미리 확인하세요.',
      },
    ],
    cta: {
      text: '상속재산 분할이 막혀 있다면, 지금 바로 내 상속 상황을 정리해보세요',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '상속포기 절차와 기한', href: '/spoke/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 절차 총정리', href: '/spoke/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 숨겨진 빚 발견 시 대처법', href: '/spoke/inheritance/inheritance-hidden-debt-discovery' },
      { label: '유류분 청구 소송 준비 가이드', href: '/spoke/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '상속포기 기한 놓쳤을 때', href: '/spoke/inheritance/inheritance-renunciation-deadline' },
    ],
  },
  {
    domain: 'wage',
    slug: 'unpaid-wage-statute-of-limitations',
    keyword: '체불임금 소멸시효 3년 — 기한 전 반드시 할 일',
    questionKeyword: '체불임금 소멸시효가 3년이라는데, 기한 전에 무엇을 해야 하나요?',
    ctaKeyword: '체불임금 소멸시효 대응법 확인',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '체불임금 소멸시효 3년 — 기한 전 반드시 할 4가지 | 로앤가이드',
      description:
        '밀린 임금을 받지 못한 채 시간이 흐르고 있다면, 3년 소멸시효가 지나기 전에 반드시 해야 할 4가지를 지금 확인하세요.',
    },
    intro:
      '퇴직한 지 2년이 다 되어가는데, 밀린 야근수당 300만 원을 아직 받지 못했습니다. 전 회사 사장님은 "곧 주겠다"는 말만 반복하다가 이제는 전화도 받지 않습니다. 근로기준법 제49조에 따르면 임금채권의 소멸시효는 3년이며, 이 기한이 지나면 아무리 정당한 청구라도 법적으로 보호받기 어렵습니다. 대법원 2024다294705 사건에서도 소멸시효 완성 후에는 권리남용 주장이 쉽게 인정되지 않는다고 확인한 바 있어, 기한 전에 확실한 조치를 취해야 합니다.',
    sections: [
      {
        title: '체불임금 소멸시효 3년 — 기산점은 언제부터?',
        content:
          '<p><strong style="color:#1e3a5f">임금 지급일 다음 날부터 3년이 소멸시효입니다</strong></p>\n<p>근로기준법 제49조에 따르면 <strong>임금채권은 3년간 행사하지 않으면 시효로 소멸</strong>합니다. 소멸시효의 기산점(시작일)은 <strong>해당 임금의 지급일 다음 날</strong>입니다. 예를 들어 2023년 4월분 급여의 지급일이 5월 10일이었다면, 소멸시효는 2023년 5월 11일부터 시작하여 <strong>2026년 5월 10일에 만료</strong>됩니다.</p>\n<p>퇴직금의 경우에도 소멸시효는 3년이며, 기산점은 <strong>퇴직일 다음 날</strong>입니다(근로자퇴직급여 보장법 제10조). 야근수당, 주휴수당, 상여금 등 각 임금 항목별로 지급일이 다를 수 있으므로, <strong>항목별 소멸시효 만료일</strong>을 따로 계산해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 임금 소멸시효 3년 → 각 임금의 지급일 다음 날부터 기산 → 항목별 만료일 확인 필수</blockquote>',
      },
      {
        title: '첫째, 시효 중단 조치를 취하세요 — 내용증명 발송',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 우편으로 임금 지급을 최고하면 6개월간 시효 진행이 유예됩니다</strong></p>\n<p>민법 제174조에 따라 <strong>최고(催告)</strong>는 그 자체로 시효를 중단시키지는 않지만, 최고 후 <strong>6개월 이내에 소송 제기, 지급명령 신청 등</strong>을 하면 시효가 중단됩니다. 가장 간편한 최고 방법은 <strong>내용증명 우편</strong>입니다.</p>\n<p>내용증명에 포함할 내용: ① <strong>근로 기간</strong>(입사일~퇴사일), ② <strong>미지급 임금 항목과 금액</strong>(월급, 야근수당, 퇴직금 등 항목별 금액), ③ <strong>지급 요청 기한</strong>(예: "본 서면 도달 후 14일 이내"), ④ "기한 내 미지급 시 법적 조치를 취하겠습니다"라는 의사표시. 우체국에서 3통을 작성하여 1통은 발신인 보관, 1통은 우체국 보관, 1통은 사업주에게 발송합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 내용증명 발송 → 6개월 이내 소송·지급명령 신청 → 시효 중단 완성</blockquote>',
      },
      {
        title: '둘째, 고용노동부에 진정·고소를 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">임금체불은 근로기준법 제109조 위반으로 형사처벌 대상입니다</strong></p>\n<p>근로기준법 제109조에 따라 임금을 지급하지 않은 사용자는 <strong>3년 이하의 징역 또는 3천만 원 이하의 벌금</strong>에 처합니다. 피해 근로자는 <strong>사업장 소재지 관할 고용노동청</strong>에 진정(민원)이나 고소를 제기할 수 있습니다.</p>\n<p>고용노동부 진정의 효과: ① 근로감독관이 사업장을 조사하여 <strong>시정 명령</strong>을 내립니다. ② 사업주가 시정하지 않으면 <strong>검찰 송치</strong>됩니다. ③ 형사 절차가 진행되면 사업주에게 <strong>합의 동기</strong>가 생겨 임금을 받을 가능성이 높아집니다.</p>\n<p>중요한 점은, 고용노동부 진정 자체가 <strong>민사상 소멸시효를 중단시키지는 않는다</strong>는 것입니다. 따라서 진정과 별도로 내용증명, 소송, 지급명령 등의 민사 조치를 병행해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 고용노동부 진정 = 형사 압박 → 별도로 민사 시효 중단 조치 병행 필수</blockquote>',
      },
      {
        title: '셋째, 지급명령 신청 또는 소액소송을 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">지급명령 신청은 가장 빠르고 저렴하게 시효를 중단하는 방법입니다</strong></p>\n<p>민사소송법 제462조에 따른 <strong>지급명령(독촉절차)</strong>은 변호사 없이도 간편하게 신청할 수 있습니다. 온라인(대법원 전자소송 사이트)으로도 신청 가능하며, 인지대가 소송의 <strong>1/10 수준</strong>으로 저렴합니다. 지급명령이 확정되면 강제집행이 가능합니다.</p>\n<p>체불 금액이 <strong>3,000만 원 이하</strong>라면 소액사건심판법에 따른 <strong>소액소송</strong>도 고려하세요. 1회 변론으로 판결을 선고할 수 있어 빠르게 결론이 납니다. 3,000만 원을 초과하면 일반 민사소송을 제기해야 합니다.</p>\n<p>소송이나 지급명령을 제기하면 <strong>소멸시효가 중단</strong>됩니다(민법 제168조 제1호). 시효 만료일이 임박했다면 지급명령 신청이 가장 빠른 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 지급명령 = 인지대 저렴 + 온라인 신청 → 시효 중단 + 강제집행 가능</blockquote>',
      },
      {
        title: '넷째, 증거를 지금 당장 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">시효 문제와 별개로, 소송에서 승소하려면 증거가 핵심입니다</strong></p>\n<p>체불임금 분쟁에서 가장 많이 다투는 쟁점은 "실제 근로시간"과 "합의 금액"입니다. 다음 증거를 확보하세요:</p>\n<p>① <strong>근로계약서</strong> — 급여, 근무시간, 수당 조건 확인<br>② <strong>급여명세서·통장 입금 내역</strong> — 실제 지급된 금액 증명<br>③ <strong>출퇴근 기록</strong>(카드 태깅, GPS, 카카오톡 업무 지시 시간) — 야근·휴일근무 입증<br>④ <strong>사업주와의 대화 기록</strong>(녹음, 문자, 카톡) — 체불 사실 인정 또는 지급 약속<br>⑤ <strong>동료 근로자 진술서</strong> — 근무 실태 보조 증거</p>\n<p>특히 <strong>사업주가 "곧 주겠다"고 말한 녹음이나 문자</strong>는 채무 승인에 해당하여 소멸시효가 새로 진행될 수 있는 강력한 증거입니다(민법 제168조 제3호).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "곧 주겠다" 녹음·문자 = 채무 승인 → 시효 새로 진행 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024다294705 사건(2025.05.29 선고) — 퇴직금 소멸시효 항변과 권리남용',
        summary:
          '이 사건에서 대법원은 퇴직금 청구에 대한 사용자의 소멸시효 항변이 권리남용으로 인정되려면, 사용자가 시효 완성 전에 권리행사를 현저히 곤란하게 하였거나 시효를 원용하지 않을 것 같은 태도를 보인 특별한 사정이 있어야 한다고 판시했습니다.',
        takeaway:
          '소멸시효가 지난 후에는 "사장이 줄 거라 믿었다"는 주장만으로는 권리를 되찾기 매우 어렵습니다. 반드시 3년 기한 내에 내용증명, 지급명령, 소송 등의 조치를 취하세요.',
      },
    ],
    faq: [
      {
        question: '야근수당과 퇴직금의 소멸시효도 3년인가요?',
        answer:
          '<strong>네, 모두 3년입니다.</strong> 야근수당(연장근로수당)은 해당 임금의 지급일 다음 날부터, 퇴직금은 퇴직일 다음 날부터 각각 3년입니다. 주휴수당, 연차수당 등 모든 임금성 청구권이 동일합니다.',
      },
      {
        question: '사장이 "줄 거라고 약속했다"는 문자가 있으면 시효가 연장되나요?',
        answer:
          '<strong>네, 채무 승인에 해당하여 시효가 중단됩니다.</strong> 민법 제168조 제3호에 따라 채무자의 승인은 시효 중단 사유입니다. 사업주가 문자, 카톡, 녹음 등으로 "주겠다"고 한 시점부터 새로 3년이 진행됩니다. 해당 증거를 반드시 보관하세요.',
      },
      {
        question: '고용노동부 진정만 하면 소멸시효가 중단되나요?',
        answer:
          '<strong>아닙니다.</strong> 고용노동부 진정은 행정 절차이므로 민사상 소멸시효를 중단시키지 않습니다. 시효 중단을 위해서는 별도로 내용증명 발송 후 6개월 이내에 소송이나 지급명령을 신청해야 합니다.',
      },
      {
        question: '내용증명은 어디서 보내나요?',
        answer:
          '<strong>가까운 우체국에서 보낼 수 있으며, 인터넷우체국에서 온라인 발송도 가능합니다.</strong> 3통을 작성하여(발신인, 우체국, 수신인 각 1통) 우체국에 제출합니다. 비용은 약 5,000~10,000원 수준입니다.',
      },
      {
        question: '체불사업주 명단 공개와 불이익은 무엇인가요?',
        answer:
          '<strong>고용노동부는 체불사업주 명단을 공개하고, 신용제재를 부과합니다.</strong> 임금등 체불자료 통보제도에 따라 금융기관에 통보되어 대출 등에 불이익을 받으며, 정부 사업 참여가 제한됩니다. 이 제도는 사업주에게 임금 지급의 강력한 동기를 부여합니다.',
      },
    ],
    cta: {
      text: '체불임금 소멸시효가 걱정된다면, 지금 바로 내 상황에 맞는 대응법을 확인해보세요',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '임금체불 신고 전 준비 서류', href: '/spoke/wage/unpaid-wage-complaint-docs' },
      { label: '퇴직 후 밀린 급여 받는 법', href: '/spoke/wage/unpaid-salary-after-resignation' },
      { label: '임금체불 신고 절차 타임라인', href: '/spoke/wage/unpaid-wage-report-procedure-timeline' },
      { label: '야근수당 미지급 청구 방법', href: '/spoke/wage/wage-overtime-unpaid-claim' },
      { label: '최저임금 위반 신고 방법', href: '/spoke/wage/minimum-wage-violation-complaint' },
    ],
  },
];
