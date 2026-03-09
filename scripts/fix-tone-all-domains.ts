/**
 * 전 도메인 톤/카피 일괄 수정 스크립트
 *
 * 1. status_summary 부드럽게 (판정 느낌 제거)
 * 2. today 항목 강한 동사 완화
 * 3. professional 섹션 CTA+설명 통일
 * 4. 서류 체크리스트에 용도 설명 추가
 */

import fs from 'fs';
import path from 'path';

const DOMAINS_DIR = path.join(__dirname, '..', 'domains');

// === Item 3: Professional CTA 통일 ===
// 도메인별 보조문구 매핑
const DOMAIN_PROFESSIONAL_DESC: Record<string, Record<string, string>> = {
  jeonse: {
    '변호사': '보증금 반환, 전세사기 피해지원 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'jeonse-fraud': {
    '변호사': '전세사기 피해 구제, 민·형사 절차 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  sangga: {
    '변호사': '상가임대차 분쟁, 권리금 회수 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  wage: {
    '변호사': '임금체불, 수당 미지급 관련 상담 가능 여부를 확인해볼 수 있습니다',
    '공인노무사': '체불임금 진정, 노동조건 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  retirement: {
    '변호사': '퇴직금 청구, 퇴직급여 관련 상담 가능 여부를 확인해볼 수 있습니다',
    '공인노무사': '퇴직금 산정, 체불 진정 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  dismissal: {
    '변호사': '부당해고 구제, 해고 관련 소송 상담 가능 여부를 확인해볼 수 있습니다',
    '공인노무사': '해고 정당성 검토, 구제신청 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'small-claims': {
    '변호사': '소액사건 소송, 지급명령 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  rehabilitation: {
    '변호사': '개인회생 신청, 채무조정 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  bankruptcy: {
    '변호사': '파산·면책 신청 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  inheritance: {
    '변호사': '상속 분쟁, 상속포기·한정승인 관련 상담 가능 여부를 확인해볼 수 있습니다',
    '세무사': '상속세 신고, 재산 평가 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  divorce: {
    '변호사': '이혼 절차, 재산분할, 양육권 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'child-support': {
    '변호사': '양육비 청구, 이행확보 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'neighbor-dispute': {
    '변호사': '이웃 분쟁, 손해배상 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  defamation: {
    '변호사': '명예훼손, 사이버 모욕 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'real-estate-sale': {
    '변호사': '부동산 매매 분쟁, 하자담보 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'real-estate-auction': {
    '변호사': '경매·공매 절차, 권리분석 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'industrial-accident1': {
    '변호사': '산재 신청, 불승인 불복 관련 상담 가능 여부를 확인해볼 수 있습니다',
    '공인노무사': '산재보험 절차, 요양급여 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  'industrial-accident2': {
    '변호사': '산재 보상, 장해급여 관련 상담 가능 여부를 확인해볼 수 있습니다',
    '공인노무사': '산재 급여 청구, 재활 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
  unemployment: {
    '변호사': '실업급여, 부정수급 관련 상담 가능 여부를 확인해볼 수 있습니다',
    '공인노무사': '실업급여 수급 자격, 이직 사유 관련 상담 가능 여부를 확인해볼 수 있습니다',
  },
};

// === Item 4: 서류별 용도 설명 ===
const DOC_PURPOSE: Record<string, string> = {
  '임대차계약서': '계약 조건 확인용',
  '등기부등본': '권리관계 확인용',
  '전입세대확인서': '대항력 확인용',
  '확정일자부여확인서': '우선변제권 확인용',
  '보증보험증서': '보증보험 가입 확인용',
  '내용증명': '서면 요구 증빙용',
  '보증금 입금 확인서': '지급 사실 증빙용',
  '경매 통지서': '배당요구 기한 확인용',
  '연락 시도 기록': '연락 시도 증빙용',
  '해고통지서': '해고 사실 증빙용',
  '근로계약서': '근로조건 확인용',
  '급여명세서': '임금 내역 확인용',
  '취업규칙': '사내 규정 확인용',
  '징계관련서류': '징계 사유 확인용',
  '출근기록': '근무 사실 확인용',
  '보호사유 증빙': '해고제한 사유 증빙용',
  '통장거래내역': '입금 내역 확인용',
  '업무 지시 증거': '초과근무 증빙용',
  '임금 삭감 통보 서면': '삭감 사실 증빙용',
  '퇴직금 정산서': '퇴직금 산정 확인용',
  '4대보험 가입증명서': '가입 이력 확인용',
  '퇴직연금 운용현황': '연금 현황 확인용',
  '사업자등록증': '사업장 확인용',
  '상가임대차계약서': '계약 조건 확인용',
  '사업자등록증명': '사업자 등록 확인용',
  '권리금 계약서': '권리금 내역 확인용',
  '건물등기부등본': '소유관계 확인용',
  '매매계약서': '계약 내용 확인용',
  '하자 사진/영상': '하자 상태 증빙용',
  '감정평가서': '시가 산정 확인용',
  '중개계약서': '중개 조건 확인용',
  '진단서': '부상 정도 증빙용',
  '요양신청서': '산재 신청 확인용',
  '사고 경위서': '사고 경위 증빙용',
  '재해조사 의견서': '사업주 의견 확인용',
  '산재보험 가입 확인서': '보험 가입 확인용',
  '목격자 진술서': '사고 목격 증빙용',
  '유언장': '유언 내용 확인용',
  '가족관계증명서': '상속인 확인용',
  '기본증명서': '사망 사실 확인용',
  '재산세 과세증명서': '재산 현황 확인용',
  '금융거래 확인서': '금융자산 확인용',
  '채무 관련 서류': '채무 내역 확인용',
  '혼인관계증명서': '혼인 사실 확인용',
  '재산목록': '재산 현황 정리용',
  '소득증빙': '소득 확인용',
  '증거자료': '사실 관계 증빙용',
  '게시글 캡처': '게시 내용 증빙용',
  '피해 증거': '피해 사실 증빙용',
  '소음 측정 기록': '소음 수준 증빙용',
  '피해 사진': '피해 상태 증빙용',
  '구직등록확인서': '구직등록 확인용',
  '이직확인서': '이직 사유 확인용',
  '고용보험 피보험자격 확인서': '가입기간 확인용',
  '신분증': '본인 확인용',
  '수급자격인정신청서': '급여 신청용',
  '권리분석 자료': '권리관계 확인용',
  '입찰 서류': '입찰 참여 확인용',
  '채무목록': '채무 현황 정리용',
  '소득증명서': '소득 확인용',
  '재산목록 증빙': '재산 현황 확인용',
  '채권자 목록': '채권자 확인용',
  '양육비 산정 자료': '양육비 산정 근거용',
  '양육비 합의서': '합의 내용 확인용',
  '미지급 내역': '미지급 사실 증빙용',
};

// === Item 2: 강한 동사 완화 패턴 ===
const VERB_REPLACEMENTS: [RegExp, string][] = [
  [/상담 예약을 해보세요/g, '상담 가능 여부를 확인해보세요'],
  [/상담을 신청해보세요/g, '상담 가능 여부를 확인해보세요'],
  [/법률상담을 신청해보세요/g, '법률상담 가능 여부를 확인해보세요'],
  [/법률상담을 받아보세요/g, '법률상담 가능 여부를 확인해볼 수 있습니다'],
  [/무료 법률상담을 받아보세요/g, '무료 법률상담 가능 여부를 확인해볼 수 있습니다'],
  [/무료 법률상담을 신청해보세요/g, '무료 법률상담 가능 여부를 확인해볼 수 있습니다'],
  [/진정을 신청할 수 있습니다/g, '진정 신청을 검토해볼 수 있습니다'],
  [/신고할 수 있습니다/g, '신고를 검토해볼 수 있습니다'],
  [/가능한 빨리/g, '가능하다면'],
  [/반드시 등기우편으로/g, '등기우편으로'],
  [/꼭 확인하세요/g, '확인해보세요'],
];

// === Item 1: status_summary 부드럽게 ===
function softenStatusSummary(summary: string, typeId: string): string {
  if (typeId === 'TYPE_OK') return summary; // TYPE_OK는 그대로

  // 이미 좋은 패턴인지 확인
  if (summary.includes('입력한 내용을 기준으로') && summary.includes('확인해볼 필요가 있어 보입니다')) {
    return summary;
  }

  // "~상황으로 보입니다" → "~필요가 있어 보입니다" 패턴으로 통일
  // 도메인 특정 용어 (전세사기, 부당해고 등) 제거하고 일반화
  let softened = summary;

  // "입력한 내용상 X 관련 사항을 확인해볼 필요가 있는 상황으로 보입니다" 패턴
  // → "입력한 내용을 기준으로 관련 절차와 준비사항을 확인해볼 필요가 있어 보입니다"
  softened = softened.replace(
    /입력한 내용상 .+?(?:확인해볼 필요가 있는 상황으로 보입니다|확인해볼 사항이 있는 상황으로 보입니다|준비해볼 사항이 있는 상황으로 보입니다|확인해볼 필요가 있습니다|확인해볼 필요가 있는 상황으로 보입니다)/,
    '입력한 내용을 기준으로 관련 절차와 준비사항을 확인해볼 필요가 있어 보입니다'
  );

  // 변환이 안 된 경우 fallback
  if (softened === summary && !softened.includes('확인해볼 필요가 있어 보입니다')) {
    softened = '입력한 내용을 기준으로 관련 절차와 준비사항을 확인해볼 필요가 있어 보입니다';
  }

  return softened;
}

function weakenTodayItems(items: string[]): string[] {
  return items.map((item) => {
    let result = item;
    for (const [pattern, replacement] of VERB_REPLACEMENTS) {
      result = result.replace(pattern, replacement);
    }
    return result;
  });
}

function weakenThisWeekItems(items: string[]): string[] {
  return items.map((item) => {
    let result = item;
    for (const [pattern, replacement] of VERB_REPLACEMENTS) {
      result = result.replace(pattern, replacement);
    }
    return result;
  });
}

function updateProfessional(
  professional: Array<{ type: string; note?: string }>,
  domain: string,
): Array<{ type: string; note: string; description?: string }> {
  const descMap = DOMAIN_PROFESSIONAL_DESC[domain] ?? {};
  return professional.map((p) => {
    const cta = `이 유형의 사안을 다루는 ${p.type} 보기 (광고 포함)`;
    const desc = descMap[p.type] ?? `관련 사안에 대해 상담 가능 여부를 확인해볼 수 있습니다`;
    return { type: p.type, note: cta, description: desc };
  });
}

function addDocPurpose(
  documents: any[],
): any[] {
  if (!documents || documents.length === 0) return documents;
  if (typeof documents[0] === 'string') return documents;

  return (documents as Array<{ label: string; status: string; note?: string }>).map((doc) => {
    // 이미 note가 있으면 유지, 없으면 용도 설명 추가
    if (doc.note && doc.note.length > 0) return doc;
    const purpose = DOC_PURPOSE[doc.label];
    return { ...doc, note: purpose ?? '' };
  });
}

// === MAIN ===
const domains = fs.readdirSync(DOMAINS_DIR).filter((d) => {
  const dir = path.join(DOMAINS_DIR, d);
  return fs.statSync(dir).isDirectory() && fs.existsSync(path.join(dir, 'results.json'));
});

console.log(`Processing ${domains.length} domains...\n`);

let modifiedCount = 0;

for (const domain of domains.sort()) {
  const filePath = path.join(DOMAINS_DIR, domain, 'results.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  let modified = false;

  for (const result of data.results) {
    // Item 1: Soften status_summary
    const oldSummary = result.status_summary;
    result.status_summary = softenStatusSummary(result.status_summary, result.type_id);
    if (result.status_summary !== oldSummary) modified = true;

    // Item 2: Weaken today/this_week verbs
    if (result.actions?.today) {
      const oldToday = [...result.actions.today];
      result.actions.today = weakenTodayItems(result.actions.today);
      if (JSON.stringify(oldToday) !== JSON.stringify(result.actions.today)) modified = true;
    }
    if (result.actions?.this_week) {
      const oldWeek = [...result.actions.this_week];
      result.actions.this_week = weakenThisWeekItems(result.actions.this_week);
      if (JSON.stringify(oldWeek) !== JSON.stringify(result.actions.this_week)) modified = true;
    }

    // Item 3: Professional CTA unification
    if (result.connections?.professional?.length > 0) {
      const oldProf = JSON.stringify(result.connections.professional);
      result.connections.professional = updateProfessional(result.connections.professional, domain);
      if (JSON.stringify(result.connections.professional) !== oldProf) modified = true;
    }

    // Item 4: Document purpose descriptions
    if (result.documents?.length > 0 && typeof result.documents[0] === 'object') {
      const oldDocs = JSON.stringify(result.documents);
      result.documents = addDocPurpose(result.documents);
      if (JSON.stringify(result.documents) !== oldDocs) modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    modifiedCount++;
    console.log(`✅ ${domain}: 수정 완료`);
  } else {
    console.log(`⏭  ${domain}: 변경 없음`);
  }
}

console.log(`\n총 ${modifiedCount}/${domains.length}개 도메인 수정 완료`);
