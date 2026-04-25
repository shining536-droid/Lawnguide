'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import type { Question, BranchesFile, ResultsFile, ResultEntry, DomainMeta } from '@/lib/domains-client';
import { DOMAINS } from '@/lib/domains-client';
import ChatResultCard from './ChatResultCard';

/* ─────────────── Types ─────────────── */

interface ChatMessage {
  id: string;
  type: 'bot' | 'user' | 'options' | 'result' | 'reflection' | 'progress' | 'multiselect' | 'subtype-result';
  content: string;
  options?: { value: string; label: string; icon?: string }[];
  result?: ResultEntry;
  answers?: Record<string, string>;
  subtypeResult?: SubtypeResultData;
  whyText?: string;
}

interface SubtypeResultData {
  summary: string;
  legalBasis?: string;
  requiredDocs: string[];
  userEvidence: string[];
  factAnswers: Record<string, string>;
  perspectiveLabel: string;
  subtypeLabel: string;
}

/* ── Subtypes data types ── */

interface SubtypeItem {
  id?: string;
  value?: string;
  label: string;
  legalBasis?: string;
}

interface FactCheckItem {
  id: string;
  question: string;
  why?: string;
  options: string[];
}

interface ResultTemplateItem {
  summary: string;
  legalBasis?: string;
  requiredDocs: string[];
}

interface SubtypeData {
  domainLabel?: string;
  perspectives: string[];
  perspectiveLabels?: Record<string, string>;
  subtypes: Record<string, SubtypeItem[]>;
  factChecks: Record<string, FactCheckItem[]>;
  evidenceChecklist: {
    common: string[];
    domain_specific: string[] | Record<string, string[]>;
  };
  resultTemplates: Record<string, Record<string, ResultTemplateItem>>;
}

interface ChatBotProps {
  allDomainData: Record<string, {
    questions: Question[];
    branches: BranchesFile;
    results: ResultsFile;
  }>;
  subtypesData: Record<string, SubtypeData>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  procedureData?: Record<string, any>;
  initialDomain?: string;
}

type Phase =
  | 'category'
  | 'dont-know-1'
  | 'dont-know-2'
  | 'dont-know-3'
  | 'domain-select'
  | 'perspective'
  | 'subtype'
  | 'fact-check'
  | 'evidence'
  | 'result'
  | 'diagnosis';

/* ─────────────── Constants ─────────────── */

const CATEGORIES = [
  {
    label: '사기/재산범죄', icon: '🎭',
    domains: ['fraud'],
  },
  {
    label: '폭행/상해', icon: '⚠️',
    domains: ['assault'],
  },
  {
    label: '성범죄/스토킹', icon: '🛡️',
    domains: ['sex-crime', 'digital-sex-crime', 'sexual-harassment', 'stalking', 'child-sex-crime', 'prostitution'],
  },
  {
    label: '이혼/가족', icon: '💔',
    domains: ['divorce', 'child-support', 'inheritance'],
  },
  {
    label: '전세/부동산', icon: '🏠',
    domains: ['jeonse', 'jeonse-fraud', 'sangga', 'real-estate-sale', 'real-estate-auction'],
  },
  {
    label: '해고/임금', icon: '💰',
    domains: ['dismissal', 'wage', 'retirement', 'unemployment', 'industrial-accident1', 'industrial-accident2'],
  },
  {
    label: '음주운전/교통', icon: '🚗',
    domains: ['dui', 'traffic-accident'],
  },
  {
    label: '기타', icon: '📋',
    domains: ['defamation', 'school-violence', 'drug-crime', 'small-claims', 'rehabilitation', 'bankruptcy', 'neighbor-dispute'],
  },
];

interface LifeSubcategory {
  label: string;
  domains: string[];
}

interface LifeCategory {
  label: string;
  icon: string;
  subcategories: LifeSubcategory[];
}

const LIFE_CATEGORIES: LifeCategory[] = [
  { label: '돈을 보내거나 빌려줬는데 문제가 생겼어요', icon: '💸', subcategories: [
    { label: '중고거래 / 온라인거래', domains: ['fraud'] },
    { label: '투자 / 코인 / 고수익 제안', domains: ['fraud'] },
    { label: '지인에게 빌려준 돈', domains: ['fraud', 'small-claims'] },
    { label: '계약금 / 대금 문제', domains: ['small-claims', 'real-estate-sale'] },
    { label: '빚이 너무 많아요 (회생/파산)', domains: ['rehabilitation', 'bankruptcy'] },
    { label: '정확히는 모르겠어요', domains: ['fraud'] },
  ]},
  { label: '맞거나 다쳤어요 / 위협받고 있어요', icon: '🤕', subcategories: [
    { label: '일방적으로 맞았어요', domains: ['assault'] },
    { label: '서로 시비가 붙었어요', domains: ['assault'] },
    { label: '협박을 받고 있어요', domains: ['assault', 'stalking'] },
    { label: '누가 따라다녀요', domains: ['stalking'] },
    { label: '학교에서 폭력이 있었어요', domains: ['school-violence'] },
    { label: '정확히는 모르겠어요', domains: ['assault'] },
  ]},
  { label: '성적인 문제나 불안한 상황이 있어요', icon: '🔒', subcategories: [
    { label: '성폭행 / 성추행', domains: ['sex-crime'] },
    { label: '불법촬영 / 유포', domains: ['digital-sex-crime'] },
    { label: '직장 내 성희롱', domains: ['sexual-harassment'] },
    { label: '스토킹', domains: ['stalking'] },
    { label: '아동 관련', domains: ['child-sex-crime'] },
    { label: '성매매 관련', domains: ['prostitution'] },
    { label: '정확히는 모르겠어요', domains: ['sex-crime'] },
  ]},
  { label: '가족 / 이혼 / 양육 문제예요', icon: '👨‍👩‍👧', subcategories: [
    { label: '이혼을 생각하고 있어요', domains: ['divorce'] },
    { label: '양육비 문제', domains: ['child-support'] },
    { label: '상속 문제', domains: ['inheritance'] },
    { label: '정확히는 모르겠어요', domains: ['divorce'] },
  ]},
  { label: '집 / 전세 / 계약 문제예요', icon: '🏠', subcategories: [
    { label: '전세보증금 반환', domains: ['jeonse'] },
    { label: '전세사기 의심', domains: ['jeonse-fraud'] },
    { label: '상가 임대차', domains: ['sangga'] },
    { label: '매매 계약 문제', domains: ['real-estate-sale'] },
    { label: '경매', domains: ['real-estate-auction'] },
    { label: '이웃 간 분쟁 (층간소음 등)', domains: ['neighbor-dispute'] },
    { label: '정확히는 모르겠어요', domains: ['jeonse'] },
  ]},
  { label: '회사 / 해고 / 임금 문제예요', icon: '🏢', subcategories: [
    { label: '해고 통보 받았어요', domains: ['dismissal'] },
    { label: '월급 / 수당 안 줘요', domains: ['wage'] },
    { label: '퇴직금 문제', domains: ['retirement'] },
    { label: '산재 / 업무상 재해', domains: ['industrial-accident1', 'industrial-accident2'] },
    { label: '실업급여', domains: ['unemployment'] },
    { label: '정확히는 모르겠어요', domains: ['dismissal'] },
  ]},
  { label: '교통사고 / 음주운전 문제예요', icon: '🚗', subcategories: [
    { label: '교통사고', domains: ['traffic-accident'] },
    { label: '음주운전 적발', domains: ['dui'] },
    { label: '정확히는 모르겠어요', domains: ['traffic-accident'] },
  ]},
  { label: '그 외 법률 문제', icon: '📋', subcategories: [
    { label: '명예훼손 / 모욕', domains: ['defamation'] },
    { label: '마약 관련 혐의', domains: ['drug-crime'] },
    { label: '층간소음 / 이웃 분쟁', domains: ['neighbor-dispute'] },
    { label: '개인회생 / 파산', domains: ['rehabilitation', 'bankruptcy'] },
    { label: '소액소송 / 지급명령', domains: ['small-claims'] },
    { label: '정확히는 모르겠어요', domains: ['defamation'] },
  ]},
  { label: '잘 모르겠어요 / 여기에 없어요', icon: '❓', subcategories: [] },
];

const REFLECTIONS: Record<string, Record<string, string>> = {
  perspective: {
    '피해를 입었습니다': '피해를 입으신 상황이시군요. 상황을 좀 더 파악해볼게요.',
    '혐의를 받고 있습니다': '혐의를 받고 계신 상황으로 이해했어요. 대응 준비를 도와드릴게요.',
    '사실과 다르게 신고되었다고 생각합니다': '억울한 상황이시군요. 정확한 대응 방향을 정리해드릴게요.',
    '이혼을 원합니다': '이혼을 결심하신 상황이군요. 절차와 준비사항을 정리해드릴게요.',
    '이혼을 요구받고 있습니다': '이혼을 요구받고 계시군요. 대응 방법을 함께 정리해볼게요.',
    '사실과 다른 주장을 받고 있습니다 (허위 가정폭력 등)': '억울한 상황이시군요. 정확한 대응 방향을 정리해드릴게요.',
  },
  progress_stage: {
    '시작 전': '아직 초기 단계시군요. 지금 움직이면 유리합니다.',
    '시작': '아직 초기 단계시군요. 지금 움직이면 유리합니다.',
    '진행 중': '이미 진행 중이시군요. 놓치기 쉬운 부분을 체크해드릴게요.',
    '진행중': '이미 진행 중이시군요. 놓치기 쉬운 부분을 체크해드릴게요.',
  },
  timeline: {
    '며칠 이내': '최근에 발생한 상황이시군요. 빠른 대응이 중요합니다.',
    '1주일 이내': '최근에 발생한 상황이시군요. 빠른 대응이 중요합니다.',
    '1개월 이내': '한 달 이내 상황이시군요. 아직 대응할 시간이 있습니다.',
    '1개월 이상': '시간이 좀 지났지만, 지금이라도 정리하면 도움이 됩니다.',
  },
};

const DOMAIN_REFLECTIONS: Record<string, Record<string, string>> = {
  fraud: {
    victim: '사기 피해는 초기 증거 확보가 가장 중요해요.',
    offender: '사기 혐의는 초기 대응이 결과를 크게 바꿀 수 있어요.',
  },
  assault: {
    victim: '폭행 피해는 진단서와 현장 증거가 핵심이에요.',
    offender: '폭행 혐의는 정당방위 여부와 합의가 중요합니다.',
  },
  dui: {
    offender: '음주운전은 초기 대응에 따라 처벌이 크게 달라져요.',
  },
  divorce: {
    victim: '이혼 준비는 증거와 재산 파악이 먼저예요.',
  },
  'sex-crime': {
    victim: '성범죄 피해는 즉시 증거 보전이 가장 중요합니다.',
    offender: '성범죄 혐의는 초기 진술이 매우 중요해요. 신중하게 대응하세요.',
    falsely_accused: '억울한 상황일수록 체계적인 증거 확보가 중요합니다.',
  },
  'jeonse-fraud': {
    victim: '전세사기는 시간이 중요해요. 빠르게 움직이셔야 합니다.',
  },
  stalking: {
    victim: '스토킹 피해는 기록이 곧 증거입니다. 꼼꼼히 정리해볼게요.',
  },
  'drug-crime': {
    offender: '마약 사건은 변호사 선임 전 진술이 매우 중요합니다.',
  },
  defamation: {
    victim: '명예훼손은 증거 캡처 시점이 핵심이에요.',
    offender: '명예훼손 혐의는 공익성과 진실 여부가 중요합니다.',
  },
  'school-violence': {
    victim: '학교폭력은 신고 시점과 증거 확보가 결과를 바꿔요.',
    offender: '학교폭력 가해자 지정은 자치위원회 대응이 중요합니다.',
  },
};

/* ─────────────── 주요 판단 요소 (도메인별) ─────────────── */

const DOMAIN_JUDGMENT_FACTORS: Record<string, string[]> = {
  fraud: [
    '처음부터 갚을 의사가 있었는지',
    '설명이 사실과 달랐는지',
    '변제 시도가 있었는지',
  ],
  defamation: [
    '사실 적시인지 허위인지',
    '공연성이 있는지',
    '공익 목적 여지가 있는지',
  ],
  stalking: [
    '반복성이 인정되는지',
    '상대방 의사에 반한 연락인지',
    '불안감 유발 여부',
  ],
  assault: [
    '정당방위 여부',
    '상해 정도',
    '선제 폭행 여부',
  ],
  divorce: [
    '혼인 파탄 사유',
    '유책배우자 여부',
    '자녀 양육 환경',
  ],
  dui: [
    '혈중알코올농도(BAC) 수치',
    '사고 동반 여부',
    '음주운전 전력',
  ],
  'jeonse-fraud': [
    '시세 대비 보증금 비율',
    '근저당 설정 여부',
    '임대인 다주택 여부',
  ],
  jeonse: [
    '보증보험 가입 여부',
    'HUG 사전심사 통과 여부',
    '등기부등본 확인 여부',
  ],
  'sex-crime': [
    '동의 여부',
    '증거 확보 상태',
    '피해자-가해자 관계',
  ],
  'drug-crime': [
    '투약 / 소지 / 매매 구분',
    '초범 여부',
    '자수 여부',
  ],
  'school-violence': [
    '반복성이 인정되는지',
    '증거 확보 상태',
    '학교 측 조치 이력',
  ],
  'digital-sex-crime': [
    '유포 여부',
    '촬영 동의 여부',
    '피해 확산 범위',
  ],
};

/* ─────────────── Perspective mapping helpers ─────────────── */

/** Resolve factChecks array: try "perspective:subtype" key first, fallback to "perspective" */
function resolveFactChecks(
  sData: SubtypeData,
  perspectiveKey: string,
  subtypeId: string | null,
): FactCheckItem[] {
  if (subtypeId) {
    const compositeKey = `${perspectiveKey}:${subtypeId}`;
    if (sData.factChecks?.[compositeKey]) {
      return sData.factChecks[compositeKey];
    }
  }
  return sData.factChecks?.[perspectiveKey] ?? sData.factChecks?.['victim'] ?? [];
}

/** Map English factCheck IDs to Korean labels by looking up the question text */
function factCheckIdToKorean(
  id: string,
  domain: string | null,
  perspectiveKey: string | null,
  subtypesData: Record<string, SubtypeData>,
  subtypeId?: string | null,
): string {
  if (!domain || !perspectiveKey) return id;
  const sData = subtypesData[domain];
  if (!sData) return id;
  const checks = resolveFactChecks(sData, perspectiveKey, subtypeId ?? null);
  const found = checks.find((c: FactCheckItem) => c.id === id);
  if (found) {
    // Extract short label from question text (first noun phrase)
    const q = found.question;
    // Remove "~인가요?", "~하셨나요?" etc. and take first part
    const short = q.replace(/[?？]/g, '').replace(/은$|는$|이$|가$/, '');
    return short.length > 15 ? short.substring(0, 15) + '…' : short;
  }
  // Fallback common mappings
  const fallback: Record<string, string> = {
    amount: '피해 금액',
    'transaction-method': '거래 방식',
    'contact-status': '상대방 연락',
    'police-report': '경찰 신고 여부',
    'time-elapsed': '피해 발생 시점',
    'investigation-stage': '수사 단계',
    'victim-contact': '피해자 연락',
    repayment: '변제 가능성',
    'injury-level': '부상 정도',
    'hospital-visit': '병원 진료',
    'cctv-available': 'CCTV 유무',
    'witnesses': '목격자 유무',
    'bac-level': '혈중알코올농도',
    'accident-occurred': '사고 여부',
    'prior-record': '전력 여부',
    'marriage-duration': '결혼 기간',
    'children': '미성년 자녀',
    'joint-assets': '공동 재산',
    'spouse-consent': '배우자 동의',
    'evidence-available': '증거 보유',
    'measurement-method': '측정 방법',
    'time-after-drinking': '음주 후 시간',
    'contract-status': '계약 상태',
    'deposit-amount': '보증금 규모',
    'employment-period': '근무 기간',
    'company-size': '회사 규모',
    'wage-amount': '체불 금액',
    'injury-severity': '부상 정도',
    'noise-duration': '소음 기간',
    'dashcam': '블랙박스',
    'insurance': '보험 가입',
    'fault-dispute': '과실 다툼',
  };
  return fallback[id] ?? id;
}

const PERSPECTIVE_LABEL_TO_KEY: Record<string, string> = {
  '피해를 입었습니다': 'victim',
  '혐의를 받고 있습니다': 'offender',
  '사실과 다르게 신고되었다고 생각합니다': 'falsely_accused',
  '이혼을 원합니다': 'victim',
  '이혼을 요구받고 있습니다': 'offender',
  '사실과 다른 주장을 받고 있습니다 (허위 가정폭력 등)': 'falsely_accused',
};

function perspectiveLabelToKey(label: string, subtypeData?: SubtypeData): string {
  // If the subtypeData has perspectiveLabels, reverse lookup
  if (subtypeData?.perspectiveLabels) {
    for (const [key, val] of Object.entries(subtypeData.perspectiveLabels)) {
      if (val === label) return key;
    }
  }
  // Check if the label itself is already a key (e.g. "victim", "offender")
  if (subtypeData?.subtypes[label]) return label;
  return PERSPECTIVE_LABEL_TO_KEY[label] ?? 'victim';
}

function getSubtypeId(item: SubtypeItem): string {
  return item.id ?? item.value ?? item.label;
}

/* ─────────────── Utility ─────────────── */

const TYPING_DELAY_MIN = 500;
const TYPING_DELAY_MAX = 800;

function typingDelay(): number {
  return Math.floor(Math.random() * (TYPING_DELAY_MAX - TYPING_DELAY_MIN + 1)) + TYPING_DELAY_MIN;
}

let _msgId = 0;
function nextId(): string {
  _msgId += 1;
  return `msg-${_msgId}-${Date.now()}`;
}

/* ─────────────── resolveResultClient ─────────────── */

function resolveResultClient(
  branches: BranchesFile,
  answers: Record<string, string>,
): string | null {
  for (const typeId of branches.resolution_order) {
    const branchType = branches.types.find((t) => t.id === typeId);
    if (!branchType) continue;

    let match = true;
    for (const [field, expected] of Object.entries(branchType.conditions)) {
      const actual = answers[field];
      if (actual === undefined) { match = false; break; }
      if (Array.isArray(expected)) {
        if (!expected.includes(actual)) { match = false; break; }
      } else {
        if (actual !== String(expected)) { match = false; break; }
      }
    }
    if (match) return typeId;
  }
  const lastType = branches.types[branches.types.length - 1];
  return lastType?.id ?? null;
}

/* ─────────────── Helper: resolve next question id ─────────────── */

function resolveNextId(
  question: Question,
  value: string,
  currentAnswers: Record<string, string>,
): string | undefined {
  let nextIdVal = question.next[value] ?? question.next[String(value)];
  if (nextIdVal === '_PERSPECTIVE' && question.next_perspective) {
    const perspective = currentAnswers['perspective'];
    if (perspective && question.next_perspective[perspective]) {
      nextIdVal = question.next_perspective[perspective];
    }
  }
  return nextIdVal;
}

/* ─────────────── Fact Comment Helper ─────────────── */

function getFactComment(key: string, val: string): string | null {
  if (val === '모름') return null;
  const comments: Record<string, Record<string, string>> = {
    'contact-status': {
      '연락 두절': '상대방 특정 자료 확보가 중요할 수 있어요',
      '차단당함': '다른 경로로 신원 확인이 필요합니다',
    },
    'police-report': {
      '아직 안 함': '신고 전 증거 정리를 먼저 해두는 것이 좋습니다',
      '신고 완료': '수사 진행 상황에 맞는 대응이 필요합니다',
    },
    'time-elapsed': {
      '오늘~1주일 이내': '초기 대응이 가능한 시기입니다. 빠르게 움직이세요',
      '1년 이상': '공소시효를 확인해볼 필요가 있습니다',
    },
    'prior-record': {
      '초범': '초범은 양형에서 유리하게 작용할 수 있습니다',
      '2회째': '재범 가중처벌이 적용될 수 있습니다',
      '3회 이상': '가중처벌 대상이므로 즉시 변호사 상담이 필요합니다',
    },
    'spouse-consent': {
      '반대함': '재판이혼 절차를 준비해야 할 수 있습니다',
      '대화 불가 상태': '공시송달을 통한 재판이혼이 가능합니다',
    },
    'accident-occurred': {
      '인적 피해 중상': '특정범죄가중법 적용 가능성이 있습니다',
      '사망사고': '즉시 변호사 선임이 필요합니다',
    },
  };
  return comments[key]?.[val] ?? null;
}

/* ─────────────── Domain-Specific Agency ─────────────── */

function getDomainSpecificAgency(domain: string | null): React.ReactNode {
  if (!domain) return null;
  const agencies: Record<string, { name: string; desc: string; phone: string }> = {
    wage: { name: '고용노동부', desc: '임금체불 신고 및 근로감독', phone: '1350' },
    dismissal: { name: '고용노동부', desc: '부당해고 구제 신청', phone: '1350' },
    retirement: { name: '고용노동부', desc: '퇴직금 체불 신고', phone: '1350' },
    fraud: { name: '경찰청 사이버수사국', desc: '사이버사기·보이스피싱 신고', phone: '182' },
    defamation: { name: '경찰청 사이버수사국', desc: '명예훼손·모욕 신고', phone: '182' },
    'drug-crime': { name: '경찰청', desc: '마약 신고 및 상담', phone: '112' },
    dui: { name: '경찰청', desc: '음주운전 관련 안내', phone: '112' },
    assault: { name: '경찰청', desc: '폭행 사건 신고 및 상담', phone: '112' },
    prostitution: { name: '경찰청', desc: '성매매 관련 신고 및 상담', phone: '112' },
    'industrial-accident1': { name: '근로복지공단', desc: '산재보험 급여 신청', phone: '1588-0075' },
    'industrial-accident2': { name: '근로복지공단', desc: '산재보험 급여 신청', phone: '1588-0075' },
    'jeonse-fraud': { name: '전세피해지원센터', desc: '전세사기 피해 상담 및 지원', phone: '1533-8119' },
    jeonse: { name: '주택임대차분쟁조정위원회', desc: '보증금 분쟁 조정', phone: '1644-7788' },
    'school-violence': { name: '학교폭력신고센터', desc: '학교폭력 상담 및 신고', phone: '117' },
    'sexual-harassment': { name: '고용노동부', desc: '직장 내 성희롱 신고', phone: '1350' },
    stalking: { name: '여성긴급전화', desc: '스토킹 피해 상담', phone: '1366' },
    'sex-crime': { name: '여성긴급전화', desc: '성폭력 피해 상담', phone: '1366' },
    'digital-sex-crime': { name: '디지털성범죄피해자지원센터', desc: '영상 삭제 지원 및 상담', phone: '02-735-8994' },
    'child-sex-crime': { name: '아동보호전문기관', desc: '아동학대 신고 및 상담', phone: '112' },
    'neighbor-dispute': { name: '환경분쟁조정위원회', desc: '소음 분쟁 조정', phone: '02-2110-6565' },
    unemployment: { name: '고용센터', desc: '실업급여 신청 안내', phone: '1350' },
  };
  const agency = agencies[domain];
  if (!agency) return null;
  return (
    <a href={`tel:${agency.phone}`} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
      <div>
        <p className="text-[14px] font-medium text-gray-800">{agency.name}</p>
        <p className="text-[12px] text-gray-500">{agency.desc}</p>
      </div>
      <span className="flex-shrink-0 bg-primary-600 text-white text-[13px] font-medium px-3 py-1.5 rounded-lg">{agency.phone}</span>
    </a>
  );
}

/* ─────────────── Perspective CTA Text ─────────────── */

function getPerspectiveCTAText(perspectiveKey: string | null): string {
  switch (perspectiveKey) {
    case 'offender': return '초기 진술 전 쟁점을 먼저 정리해보세요. 수사나 조사가 본격화되기 전이라면 전문가 상담을 검토해보세요.';
    case 'falsely_accused': return '정상 거래와 이행 노력을 입증할 자료를 먼저 정리해보세요. 억울한 상황일수록 체계적인 대응이 중요합니다.';
    default: return '지금 단계에서는 자료를 먼저 정리하는 것이 중요합니다. 신고나 합의가 본격화되기 전이라면 전문가 상담을 검토해보세요.';
  }
}

function getPerspectiveCTAButton(perspectiveKey: string | null): string {
  switch (perspectiveKey) {
    case 'offender': return '조사 전 대응 상담받기';
    case 'falsely_accused': return '억울한 신고 대응 상담받기';
    default: return '고소/신고 전 상담받기';
  }
}

/* ─────────────── Evidence Fuzzy Matching ─────────────── */

/** Check if user evidence fuzzy-matches a required doc */
function evidenceMatches(userEvidence: string[], requiredDoc: string): boolean {
  // Exact match
  if (userEvidence.includes(requiredDoc)) return true;
  // Fuzzy match: check if any user evidence keyword overlaps with required doc
  const docLower = requiredDoc.replace(/\s/g, '');
  for (const ev of userEvidence) {
    const evLower = ev.replace(/\s/g, '');
    // Check partial inclusion both ways
    if (docLower.includes(evLower) || evLower.includes(docLower)) return true;
    // Check keyword overlap (split by common delimiters)
    const docWords = requiredDoc.split(/[/·,\s]+/).filter(w => w.length > 1);
    const evWords = ev.split(/[/·,\s]+/).filter(w => w.length > 1);
    for (const dw of docWords) {
      for (const ew of evWords) {
        if (dw.includes(ew) || ew.includes(dw)) return true;
      }
    }
  }
  return false;
}

/* ─────────────── Subtype Doc Checklist (Interactive) ─────────────── */

function SubtypeDocChecklist({ requiredDocs, userEvidence }: { requiredDocs: string[]; userEvidence: string[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>(() => {
    const init: Record<number, boolean> = {};
    requiredDocs.forEach((doc, i) => {
      if (evidenceMatches(userEvidence, doc)) init[i] = true;
    });
    return init;
  });

  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));

  // Split into 3 groups
  const alreadyHave = requiredDocs.map((doc, i) => ({ doc, i })).filter(({ i }) => checked[i]);
  const needToGet = requiredDocs.map((doc, i) => ({ doc, i })).filter(({ i }) => !checked[i]).slice(0, -1);
  const niceToHave = requiredDocs.map((doc, i) => ({ doc, i })).filter(({ i }) => !checked[i]).slice(-1);
  // If all unchecked, adjust
  const unchecked = requiredDocs.map((doc, i) => ({ doc, i })).filter(({ i }) => !checked[i]);
  const mainNeed = unchecked.length > 2 ? unchecked.slice(0, unchecked.length - 1) : unchecked;
  const bonus = unchecked.length > 2 ? unchecked.slice(unchecked.length - 1) : [];

  const renderItem = ({ doc, i }: { doc: string; i: number }, done: boolean) => (
    <button
      key={i}
      onClick={() => toggle(i)}
      className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors text-left"
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
          done ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'
        }`}>
          {done && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className={`text-[14px] ${done ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{doc}</span>
      </div>
      <span className={`text-[12px] px-2 py-0.5 rounded-full ${
        done ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
      }`}>
        {done ? '완료' : '필요'}
      </span>
    </button>
  );

  return (
    <div className="px-6 py-5 border-b border-gray-100">
      <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
        <span>📎</span> 준비서류
      </h4>
      <p className="text-[12px] text-gray-500 mb-4">체크하면서 준비 상황을 확인하세요</p>

      {/* Section 1: 이미 준비됨 */}
      {alreadyHave.length > 0 && (
        <div className="mb-4">
          <p className="text-[13px] font-semibold text-green-700 mb-2">이미 준비됨</p>
          <div className="space-y-1.5">{alreadyHave.map((item) => renderItem(item, true))}</div>
        </div>
      )}

      {/* Section 2: 추가 확보 필요 */}
      {mainNeed.length > 0 && (
        <div className="mb-4">
          <p className="text-[13px] font-semibold text-red-600 mb-2">추가로 확보하면 좋은 자료</p>
          <div className="space-y-1.5">{mainNeed.map((item) => renderItem(item, false))}</div>
        </div>
      )}

      {/* Section 3: 있으면 유리함 */}
      {bonus.length > 0 && (
        <div>
          <p className="text-[13px] font-semibold text-blue-600 mb-2">있으면 유리한 자료</p>
          <div className="space-y-1.5">{bonus.map((item) => renderItem(item, false))}</div>
        </div>
      )}
    </div>
  );
}

/* ─────────────── Typing Indicator ─────────────── */

function TypingIndicator() {
  return (
    <div className="flex max-w-[85%] items-center gap-1.5 rounded-2xl rounded-tl-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0ms' }} />
      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '150ms' }} />
      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '300ms' }} />
    </div>
  );
}

/* ─────────────── Bot Avatar ─────────────── */

function BotAvatar() {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mt-0.5">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    </div>
  );
}

/* ─────────────── ChatBot Component ─────────────── */

export default function ChatBot({ allDomainData, subtypesData, procedureData, initialDomain }: ChatBotProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentPhase, setCurrentPhase] = useState<Phase>('category');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [multiSelectState, setMultiSelectState] = useState<Record<string, boolean>>({});
  const [showUnsupported, setShowUnsupported] = useState(false);

  // New flow state
  const [selectedPerspective, setSelectedPerspective] = useState<string | null>(null);
  const [selectedPerspectiveKey, setSelectedPerspectiveKey] = useState<string | null>(null);
  const [selectedSubtype, setSelectedSubtype] = useState<string | null>(null);
  const [selectedSubtypeLabel, setSelectedSubtypeLabel] = useState<string | null>(null);
  const [factCheckIndex, setFactCheckIndex] = useState(0);
  const [factAnswers, setFactAnswers] = useState<Record<string, string>>({});
  const [evidenceSelected, setEvidenceSelected] = useState<Record<string, boolean>>({});
  const [selectedLifeCategory, setSelectedLifeCategory] = useState<LifeCategory | null>(null);

  // Domain data for the selected domain
  const domainData = selectedDomain ? allDomainData[selectedDomain] : null;
  const questions = domainData?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex] ?? null;
  const currentSubtypeData = selectedDomain ? subtypesData?.[selectedDomain] : null;

  const domainMeta = useMemo(
    () => (selectedDomain ? DOMAINS.find((d) => d.id === selectedDomain) : null),
    [selectedDomain],
  );

  // Total questions for legacy diagnosis flow
  const effectiveTotal = useMemo(() => {
    if (!questions.length) return 0;
    const branchPrefixes = new Set<string>();
    for (const q of questions) {
      const m = q.id.match(/^Q_(V|A|F|P|R|C)/);
      if (m) branchPrefixes.add(m[1]);
    }
    if (branchPrefixes.size === 0) return questions.length;
    const branched = questions.filter((q) => /^Q_(V|A|F|P|R|C)\d/.test(q.id));
    const groupSize = Math.floor(branched.length / branchPrefixes.size);
    return questions.length - groupSize * Math.max(0, branchPrefixes.size - 1);
  }, [questions]);

  /* ── Auto scroll ── */
  const lastBotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef.current || !lastBotRef.current) return;
    const container = scrollRef.current;
    const target = lastBotRef.current;
    requestAnimationFrame(() => {
      const targetTop = target.offsetTop - container.offsetTop;
      container.scrollTo({ top: Math.max(0, targetTop - 16), behavior: 'smooth' });
    });
  }, [messages, isTyping]);

  /* ── Add message with typing delay ── */
  const addBotMessage = useCallback(
    (msg: Omit<ChatMessage, 'id'>, callback?: () => void) => {
      setIsTyping(true);
      const delay = typingDelay();
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { ...msg, id: nextId() }]);
        callback?.();
      }, delay);
    },
    [],
  );

  const addMessageImmediate = useCallback((msg: Omit<ChatMessage, 'id'>) => {
    setMessages((prev) => [...prev, { ...msg, id: nextId() }]);
  }, []);

  /* ── Progress message logic (legacy) ── */
  const getProgressMessage = useCallback(
    (answeredCount: number, total: number): string | null => {
      if (answeredCount === 3 && total > 5) return '잘 하고 계세요. 몇 가지만 더 여쭤볼게요.';
      if (total - answeredCount === 2) return '거의 다 왔어요. 2개만 더 답하면 결과를 볼 수 있어요.';
      if (total - answeredCount === 1) return '마지막 질문이에요.';
      return null;
    },
    [],
  );

  /* ══════════════════════════════════════════════════════
     NEW FLOW: perspective → subtype → factCheck → evidence → result
     ══════════════════════════════════════════════════════ */

  /** After domain is selected, decide new flow or legacy */
  const startAfterDomain = useCallback(
    (domainId: string) => {
      const sData = subtypesData?.[domainId];
      if (sData) {
        // New multi-step flow
        setSelectedDomain(domainId);
        setCurrentPhase('perspective');
        setSelectedPerspective(null);
        setSelectedPerspectiveKey(null);
        setSelectedSubtype(null);
        setSelectedSubtypeLabel(null);
        setFactCheckIndex(0);
        setFactAnswers({});
        setEvidenceSelected({});

        const meta = DOMAINS.find((d) => d.id === domainId);
        const domainLabel = sData.domainLabel ?? meta?.name ?? domainId;

        // Build perspective options
        const perspOptions = sData.perspectives.map((p) => {
          const label = sData.perspectiveLabels?.[p] ?? p;
          return { value: p, label };
        });
        perspOptions.push({ value: '_dont_know', label: '잘 모르겠어요' });

        addBotMessage(
          { type: 'bot', content: `${domainLabel} 관련 상황을 정리해드릴게요.` },
          () => {
            addBotMessage({
              type: 'options',
              content: '어떤 입장이신가요?',
              options: perspOptions,
            });
          },
        );
      } else {
        // Legacy diagnosis flow
        startDiagnosisLegacy(domainId);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [subtypesData, addBotMessage],
  );

  /** Handle perspective selection */
  const handlePerspectiveSelect = useCallback(
    (value: string) => {
      if (!selectedDomain || !currentSubtypeData) return;

      let perspKey: string;
      let perspLabel: string;
      let showNote = false;

      if (value === '_dont_know') {
        // Use first perspective as default
        perspKey = currentSubtypeData.perspectives[0];
        perspLabel = currentSubtypeData.perspectiveLabels?.[perspKey] ?? perspKey;
        showNote = true;
        addMessageImmediate({ type: 'user', content: '잘 모르겠어요' });
      } else {
        perspKey = value;
        // If perspectives contains full labels (subtypes.json style), map to key
        if (!currentSubtypeData.subtypes[value]) {
          perspKey = perspectiveLabelToKey(value, currentSubtypeData);
        }
        perspLabel = currentSubtypeData.perspectiveLabels?.[value] ?? value;
        addMessageImmediate({ type: 'user', content: perspLabel });
      }

      setSelectedPerspective(perspLabel);
      setSelectedPerspectiveKey(perspKey);

      // Reflection for perspective
      const domainRef = DOMAIN_REFLECTIONS[selectedDomain]?.[perspKey];
      const reflectionText = REFLECTIONS.perspective?.[perspLabel] ?? domainRef;

      const afterReflection = () => {
        if (showNote) {
          addBotMessage(
            { type: 'reflection', content: '정확한 관점을 모르셔도 기본 정보를 안내해드려요.' },
            () => showSubtypeOptions(perspKey),
          );
        } else {
          showSubtypeOptions(perspKey);
        }
      };

      if (reflectionText) {
        addBotMessage({ type: 'reflection', content: reflectionText }, () => {
          if (domainRef && reflectionText !== domainRef) {
            addBotMessage({ type: 'reflection', content: domainRef }, afterReflection);
          } else {
            afterReflection();
          }
        });
      } else {
        afterReflection();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedDomain, currentSubtypeData, addMessageImmediate, addBotMessage],
  );

  /** Show subtype options */
  const showSubtypeOptions = useCallback(
    (perspKey: string) => {
      if (!currentSubtypeData) return;
      const subtypes = currentSubtypeData.subtypes[perspKey];
      if (!subtypes || subtypes.length === 0) {
        // Skip subtype, go to fact-check
        setSelectedSubtype('other');
        setSelectedSubtypeLabel('기타');
        setCurrentPhase('fact-check');
        showFactCheckQuestion(perspKey, 0);
        return;
      }

      setCurrentPhase('subtype');
      const options = subtypes.map((s) => ({
        value: getSubtypeId(s),
        label: s.label,
      }));
      options.push({ value: '_dont_know', label: '잘 모르겠어요' });

      addBotMessage({
        type: 'options',
        content: '구체적으로 어떤 상황인가요?',
        options,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentSubtypeData, addBotMessage],
  );

  /** Handle subtype selection */
  const handleSubtypeSelect = useCallback(
    (value: string) => {
      if (!selectedPerspectiveKey || !currentSubtypeData) return;

      const subtypes = currentSubtypeData.subtypes[selectedPerspectiveKey] ?? [];
      let subtypeId: string;
      let subtypeLabel: string;

      if (value === '_dont_know') {
        const first = subtypes[0];
        subtypeId = first ? getSubtypeId(first) : 'other';
        subtypeLabel = first?.label ?? '기타';
        addMessageImmediate({ type: 'user', content: '잘 모르겠어요' });
      } else {
        subtypeId = value;
        const found = subtypes.find((s) => getSubtypeId(s) === value);
        subtypeLabel = found?.label ?? value;
        addMessageImmediate({ type: 'user', content: subtypeLabel });

        // Show legal basis if available
        if (found) {
          addBotMessage(
            { type: 'reflection', content: `${found.label} 상황으로 이해했어요. 몇 가지 더 확인해볼게요.` },
            () => {
              setSelectedSubtype(subtypeId);
              setSelectedSubtypeLabel(subtypeLabel);
              setCurrentPhase('fact-check');
              setFactCheckIndex(0);
              showFactCheckQuestion(selectedPerspectiveKey, 0);
            },
          );
          return;
        }
      }

      setSelectedSubtype(subtypeId);
      setSelectedSubtypeLabel(subtypeLabel);
      setCurrentPhase('fact-check');
      setFactCheckIndex(0);
      showFactCheckQuestion(selectedPerspectiveKey, 0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedPerspectiveKey, currentSubtypeData, selectedSubtype, addMessageImmediate, addBotMessage],
  );

  /** Show a fact-check question */
  const showFactCheckQuestion = useCallback(
    (perspKey: string, index: number) => {
      if (!currentSubtypeData) return;
      const factChecks = resolveFactChecks(currentSubtypeData, perspKey, selectedSubtype);
      if (!factChecks || index >= factChecks.length) {
        // No more fact checks, go to evidence
        showEvidenceStep(perspKey);
        return;
      }

      const fc = factChecks[index];
      const options = fc.options.map((o) => ({ value: o, label: o }));
      if (!fc.options.includes('잘 모르겠어요')) {
        options.push({ value: '잘 모르겠어요', label: '잘 모르겠어요' });
      }

      // Progress message for fact checks
      const total = factChecks.length;
      let progressMsg: string | null = null;
      if (index === 0 && total > 2) {
        progressMsg = `핵심 사실 ${total}가지를 확인할게요.`;
      } else if (index === total - 1) {
        progressMsg = '마지막 질문이에요.';
      }

      if (progressMsg) {
        addBotMessage({ type: 'progress', content: progressMsg }, () => {
          addBotMessage({
            type: 'options',
            content: fc.question,
            options,
            whyText: fc.why,
          });
        });
      } else {
        addBotMessage({
          type: 'options',
          content: fc.question,
          options,
          whyText: fc.why,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentSubtypeData, selectedSubtype, addBotMessage],
  );

  /** Handle fact-check answer */
  const handleFactCheckAnswer = useCallback(
    (value: string) => {
      if (!selectedPerspectiveKey || !currentSubtypeData) return;

      const factChecks = resolveFactChecks(currentSubtypeData, selectedPerspectiveKey, selectedSubtype);
      if (!factChecks || factChecks.length === 0) return;

      const fc = factChecks[factCheckIndex];
      if (!fc) return;

      addMessageImmediate({ type: 'user', content: value });

      const newFactAnswers = { ...factAnswers, [fc.id]: value === '잘 모르겠어요' ? '모름' : value };
      setFactAnswers(newFactAnswers);

      const nextIndex = factCheckIndex + 1;
      setFactCheckIndex(nextIndex);

      if (nextIndex >= factChecks.length) {
        // Done with fact checks, go to evidence
        setCurrentPhase('evidence');
        showEvidenceStep(selectedPerspectiveKey);
      } else {
        showFactCheckQuestion(selectedPerspectiveKey, nextIndex);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedPerspectiveKey, currentSubtypeData, selectedSubtype, factCheckIndex, factAnswers, addMessageImmediate],
  );

  /** Show evidence checklist step */
  const showEvidenceStep = useCallback(
    (perspKey: string) => {
      if (!currentSubtypeData) return;
      setCurrentPhase('evidence');

      const ec = currentSubtypeData.evidenceChecklist;
      const commonItems = ec.common ?? [];
      let domainItems: string[] = [];

      if (Array.isArray(ec.domain_specific)) {
        domainItems = ec.domain_specific;
      } else if (ec.domain_specific && typeof ec.domain_specific === 'object') {
        domainItems = (ec.domain_specific as Record<string, string[]>)[perspKey] ?? [];
      }

      const allItems = [...commonItems, ...domainItems];
      const options = allItems.map((item) => ({ value: item, label: item }));
      options.push({ value: '_none', label: '없음' });
      options.push({ value: '_other', label: '기타' });

      setEvidenceSelected({});

      addBotMessage({
        type: 'bot',
        content: '현재 보유하고 계신 증거를 모두 선택해주세요.',
      }, () => {
        addBotMessage({
          type: 'multiselect',
          content: '해당하는 증거를 모두 선택하고 "다음"을 눌러주세요.',
          options,
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentSubtypeData, addBotMessage],
  );

  /** Handle evidence selection confirm */
  const handleEvidenceConfirm = useCallback(() => {
    const selected = Object.entries(evidenceSelected)
      .filter(([, v]) => v)
      .map(([k]) => k);

    // If "없음" is selected, treat as no evidence
    const hasNone = selected.includes('_none');
    const userEvidence = hasNone ? [] : selected.filter((s) => s !== '_other');

    addMessageImmediate({
      type: 'user',
      content: hasNone ? '보유 증거 없음' : (userEvidence.length > 0 ? userEvidence.join(', ') : '보유 증거 없음'),
    });

    setCurrentPhase('result');
    showNewFlowResult(userEvidence);
  }, [evidenceSelected, addMessageImmediate]);

  /** Show result for new flow */
  const showNewFlowResult = useCallback(
    (userEvidence: string[]) => {
      if (!selectedDomain || !selectedPerspectiveKey || !selectedSubtype || !currentSubtypeData) return;

      // Get result template
      const templates = currentSubtypeData.resultTemplates?.[selectedPerspectiveKey];
      const template = templates?.[selectedSubtype] ?? templates?.['other'];

      const summary = template?.summary ?? '상황을 정리했습니다. 아래 결과를 확인해주세요.';
      const legalBasis = template?.legalBasis;
      const requiredDocs = template?.requiredDocs ?? [];

      // Also try to resolve the legacy result
      const data = allDomainData[selectedDomain];
      let legacyResult: ResultEntry | undefined;
      if (data) {
        // Build minimal answers for legacy resolution
        const legacyAnswers: Record<string, string> = { ...answers };
        if (selectedPerspectiveKey === 'victim') legacyAnswers['perspective'] = '피해를 입었습니다';
        else if (selectedPerspectiveKey === 'offender') legacyAnswers['perspective'] = '혐의를 받고 있습니다';
        else if (selectedPerspectiveKey === 'falsely_accused') legacyAnswers['perspective'] = '사실과 다르게 신고되었다고 생각합니다';

        try {
          const typeId = resolveResultClient(data.branches, legacyAnswers);
          legacyResult = data.results.results.find((r) => r.type_id === typeId) ?? data.results.results[0];
        } catch {
          legacyResult = data.results.results?.[0];
        }
      }

      const subtypeResultData: SubtypeResultData = {
        summary,
        legalBasis,
        requiredDocs,
        userEvidence,
        factAnswers,
        perspectiveLabel: selectedPerspective ?? '',
        subtypeLabel: selectedSubtypeLabel ?? '',
      };

      addBotMessage(
        { type: 'bot', content: '결과가 준비됐어요! 아래에서 확인해주세요.' },
        () => {
          addMessageImmediate({
            type: 'subtype-result',
            content: '',
            subtypeResult: subtypeResultData,
            result: legacyResult,
            answers: { ...answers, ...factAnswers },
          });
        },
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedDomain, selectedPerspectiveKey, selectedSubtype, selectedSubtypeLabel, selectedPerspective, currentSubtypeData, factAnswers, answers, allDomainData, addBotMessage, addMessageImmediate],
  );

  /* ══════════════════════════════════════════════════════
     LEGACY FLOW (diagnosis questions)
     ══════════════════════════════════════════════════════ */

  const startDiagnosisLegacy = useCallback(
    (domainId: string) => {
      const data = allDomainData[domainId];
      if (!data) return;

      setSelectedDomain(domainId);
      setCurrentPhase('diagnosis');
      setAnswers({});
      setHistory([]);
      setMultiSelectState({});

      const meta = DOMAINS.find((d) => d.id === domainId);
      const qs = data.questions;

      let startIndex = 0;
      let initialAnswers: Record<string, string> = {};
      const q1 = qs[0];
      if (q1 && q1.options.length === 1) {
        const value = String(q1.options[0].value);
        const nid = q1.next[value];
        const ni = qs.findIndex((q) => q.id === nid);
        if (ni >= 0) {
          initialAnswers = { [q1.field]: value };
          startIndex = ni;
        }
      }

      setAnswers(initialAnswers);
      setCurrentQuestionIndex(startIndex);
      setHistory([startIndex]);

      const firstQ = qs[startIndex];
      if (!firstQ) return;

      addBotMessage(
        { type: 'bot', content: `${meta?.name ?? domainId} 관련 상황을 정리해드릴게요.` },
        () => {
          addBotMessage({
            type: 'options',
            content: firstQ.text,
            options: firstQ.options.map((o) => ({ value: String(o.value), label: o.label })),
          });
        },
      );
    },
    [allDomainData, addBotMessage],
  );

  /* ── Show next question as bot message (legacy) ── */
  const showQuestion = useCallback(
    (qIndex: number, answeredCount: number) => {
      const q = questions[qIndex];
      if (!q) return;

      const progressMsg = getProgressMessage(answeredCount, effectiveTotal);
      if (progressMsg) {
        addBotMessage({ type: 'progress', content: progressMsg }, () => {
          addBotMessage({
            type: 'options',
            content: q.text,
            options: q.options.map((o) => ({ value: String(o.value), label: o.label })),
          });
        });
      } else {
        addBotMessage({
          type: 'options',
          content: q.text,
          options: q.options.map((o) => ({ value: String(o.value), label: o.label })),
        });
      }
    },
    [questions, effectiveTotal, getProgressMessage, addBotMessage],
  );

  /* ── Advance to next question or finish (legacy) ── */
  const advanceToNext = useCallback(
    (nextIdStr: string | undefined, newAnswers: Record<string, string>, newHistory: number[]) => {
      if (!nextIdStr || nextIdStr === 'RESULT') {
        if (!domainData) return;
        const typeId = resolveResultClient(domainData.branches, newAnswers);
        const result = domainData.results.results.find((r) => r.type_id === typeId) ?? domainData.results.results[0];

        setCurrentPhase('result');
        addBotMessage({ type: 'bot', content: '결과가 준비됐어요! 아래에서 확인해주세요.' }, () => {
          addMessageImmediate({ type: 'result', content: '', result, answers: newAnswers });
        });
        return;
      }

      if (nextIdStr.startsWith('REDIRECT_')) {
        addBotMessage({ type: 'bot', content: '해당 상황은 별도 상황 정리를 이용해주세요.' });
        return;
      }

      const nextIndex = questions.findIndex((q) => q.id === nextIdStr);
      if (nextIndex < 0) {
        if (!domainData) return;
        const typeId = resolveResultClient(domainData.branches, newAnswers);
        const result = domainData.results.results.find((r) => r.type_id === typeId) ?? domainData.results.results[0];
        setCurrentPhase('result');
        addBotMessage({ type: 'bot', content: '결과가 준비됐어요! 아래에서 확인해주세요.' }, () => {
          addMessageImmediate({ type: 'result', content: '', result, answers: newAnswers });
        });
        return;
      }

      const updatedHistory = [...newHistory, nextIndex];
      setCurrentQuestionIndex(nextIndex);
      setHistory(updatedHistory);
      showQuestion(nextIndex, updatedHistory.length);
    },
    [questions, domainData, addBotMessage, addMessageImmediate, showQuestion],
  );

  /* ── Handle diagnosis answer select (legacy) ── */
  const handleAnswerSelect = useCallback(
    (value: string) => {
      if (!currentQuestion) return;

      const selectedOption = currentQuestion.options.find((o) => String(o.value) === value);
      addMessageImmediate({ type: 'user', content: selectedOption?.label ?? value });

      const newAnswers = { ...answers, [currentQuestion.field]: value };
      setAnswers(newAnswers);

      const fieldReflections = REFLECTIONS[currentQuestion.field];
      const reflection = fieldReflections?.[value];
      const nid = resolveNextId(currentQuestion, value, newAnswers);

      if (reflection) {
        addBotMessage({ type: 'reflection', content: reflection }, () => {
          if (currentQuestion.field === 'perspective' && selectedDomain) {
            const perspectiveMap: Record<string, string> = {
              '피해를 입었습니다': 'victim',
              '혐의를 받고 있습니다': 'offender',
              '사실과 다르게 신고되었다고 생각합니다': 'falsely_accused',
            };
            const pKey = perspectiveMap[value];
            const domainRef = pKey && DOMAIN_REFLECTIONS[selectedDomain]?.[pKey];
            if (domainRef) {
              addBotMessage({ type: 'reflection', content: domainRef }, () => {
                advanceToNext(nid, newAnswers, history);
              });
              return;
            }
          }
          advanceToNext(nid, newAnswers, history);
        });
      } else {
        if (currentQuestion.field === 'perspective' && domainMeta) {
          const generic = `${domainMeta.name} 관련으로 이해했어요. 구체적인 상황을 확인해볼게요.`;
          addBotMessage({ type: 'reflection', content: generic }, () => {
            advanceToNext(nid, newAnswers, history);
          });
        } else {
          advanceToNext(nid, newAnswers, history);
        }
      }
    },
    [currentQuestion, answers, history, domainMeta, selectedDomain, addMessageImmediate, addBotMessage, advanceToNext],
  );

  /* ── Handle multiselect confirm (legacy) ── */
  const handleMultiSelectConfirm = useCallback(() => {
    if (!currentQuestion) return;

    const selected = Object.entries(multiSelectState)
      .filter(([, v]) => v)
      .map(([k]) => k);
    const value = selected.join(',');

    const selectedLabels = currentQuestion.options
      .filter((o) => selected.includes(String(o.value)))
      .map((o) => o.label);
    addMessageImmediate({ type: 'user', content: selectedLabels.join(', ') || '(선택 없음)' });

    const newAnswers = { ...answers, [currentQuestion.field]: value };
    setAnswers(newAnswers);
    setMultiSelectState({});

    const next = currentQuestion.next;
    let nid = next?.['_next'] ?? (next ? Object.values(next)[0] : undefined);
    if (nid === '_PERSPECTIVE' && currentQuestion.next_perspective) {
      const perspective = newAnswers['perspective'];
      if (perspective && currentQuestion.next_perspective[perspective]) {
        nid = currentQuestion.next_perspective[perspective];
      }
    }

    advanceToNext(nid, newAnswers, history);
  }, [currentQuestion, multiSelectState, answers, history, addMessageImmediate, advanceToNext]);

  /* ══════════════════════════════════════════════════════
     CATEGORY / DOMAIN / LIFE-LANGUAGE SELECTION
     ══════════════════════════════════════════════════════ */

  /* ── Initialize ── */
  useEffect(() => {
    if (initialDomain && allDomainData[initialDomain]) {
      startAfterDomain(initialDomain);
    } else {
      addBotMessage({
        type: 'bot',
        content: '안녕하세요! 법률 상황 정리를 도와드릴게요.',
      }, () => {
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            const catOptions = CATEGORIES.map((c) => ({ value: c.label, label: c.label, icon: c.icon }));
            catOptions.push({ value: '_dont_know_category', label: '분야를 모르겠어요', icon: '🤔' });
            setMessages((prev) => [
              ...prev,
              {
                id: nextId(),
                type: 'options',
                content: '어떤 문제로 고민하고 계신가요?',
                options: catOptions,
              },
            ]);
          }, typingDelay());
        }, 200);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Handle category select ── */
  const handleCategorySelect = useCallback(
    (categoryLabel: string) => {
      if (categoryLabel === '_dont_know_category') {
        // Life-language flow step 1
        addMessageImmediate({ type: 'user', content: '🤔 분야를 모르겠어요' });
        setCurrentPhase('dont-know-1');

        const lifeOptions = LIFE_CATEGORIES.map((lc) => ({
          value: lc.label,
          label: lc.label,
          icon: lc.icon,
        }));

        addBotMessage({
          type: 'options',
          content: '괜찮아요. 어떤 상황인지 골라주세요.',
          options: lifeOptions,
        });
        return;
      }

      const cat = CATEGORIES.find((c) => c.label === categoryLabel);
      if (!cat) return;

      addMessageImmediate({ type: 'user', content: `${cat.icon} ${cat.label}` });

      if (cat.domains.length === 1) {
        startAfterDomain(cat.domains[0]);
      } else {
        setCurrentPhase('domain-select');
        const domainOptions = cat.domains
          .filter((d) => allDomainData[d] || subtypesData?.[d])
          .map((d) => {
            const meta = DOMAINS.find((dm) => dm.id === d);
            return { value: d, label: meta?.name ?? d, icon: meta?.icon };
          });

        addBotMessage({
          type: 'options',
          content: '좀 더 구체적으로 어떤 상황인가요?',
          options: domainOptions,
        });
      }
    },
    [addMessageImmediate, addBotMessage, allDomainData, subtypesData, startAfterDomain],
  );

  /* ── Handle life category selection (dont-know-1) ── */
  const handleLifeCategorySelect = useCallback(
    (label: string) => {
      const lc = LIFE_CATEGORIES.find((c) => c.label === label);
      if (!lc) return;

      addMessageImmediate({ type: 'user', content: `${lc.icon} ${lc.label}` });

      if (lc.label === '잘 모르겠어요 / 여기에 없어요') {
        // Show general guidance
        addBotMessage({
          type: 'bot',
          content: '괜찮아요. 대한법률구조공단 132에 전화하시면 무료로 상담받으실 수 있어요. 긴급 상황이라면 112(경찰) 또는 119(응급)에 연락하세요.',
        });
        return;
      }

      if (lc.subcategories.length === 0) {
        addBotMessage({ type: 'bot', content: '해당 분야는 아직 준비 중이에요.' });
        return;
      }

      setSelectedLifeCategory(lc);
      setCurrentPhase('dont-know-2');

      const subOptions = lc.subcategories.map((sc) => ({
        value: sc.label,
        label: sc.label,
      }));

      addBotMessage({
        type: 'options',
        content: '좀 더 구체적으로 어떤 상황인가요?',
        options: subOptions,
      });
    },
    [addMessageImmediate, addBotMessage],
  );

  /* ── Handle life subcategory selection (dont-know-2) ── */
  const handleLifeSubcategorySelect = useCallback(
    (label: string) => {
      if (!selectedLifeCategory) return;

      const sc = selectedLifeCategory.subcategories.find((s) => s.label === label);
      if (!sc) return;

      addMessageImmediate({ type: 'user', content: label });

      if (sc.domains.length === 1) {
        startAfterDomain(sc.domains[0]);
      } else if (sc.domains.length > 1) {
        // Show domain selection
        setCurrentPhase('dont-know-3');
        const domainOptions = sc.domains
          .filter((d) => allDomainData[d] || subtypesData?.[d])
          .map((d) => {
            const meta = DOMAINS.find((dm) => dm.id === d);
            return { value: d, label: meta?.name ?? d, icon: meta?.icon };
          });

        if (domainOptions.length === 1) {
          startAfterDomain(domainOptions[0].value);
        } else {
          addBotMessage({
            type: 'options',
            content: '어떤 분야에 해당하는 것 같으세요?',
            options: domainOptions,
          });
        }
      }
    },
    [selectedLifeCategory, allDomainData, subtypesData, addMessageImmediate, addBotMessage, startAfterDomain],
  );

  /* ── Handle domain select ── */
  const handleDomainSelect = useCallback(
    (domainId: string) => {
      const meta = DOMAINS.find((d) => d.id === domainId);
      addMessageImmediate({ type: 'user', content: meta?.name ?? domainId });
      startAfterDomain(domainId);
    },
    [addMessageImmediate, startAfterDomain],
  );

  /* ── Handle back ── */
  const handleBack = useCallback(() => {
    if (currentPhase === 'diagnosis') {
      // Legacy back
      if (history.length <= 1) return;
      setMultiSelectState({});
      const newHistory = history.slice(0, -1);
      const prevIndex = newHistory[newHistory.length - 1];

      const leavingQ = questions[history[history.length - 1]];
      const newAnswers = { ...answers };
      if (leavingQ) delete newAnswers[leavingQ.field];
      setAnswers(newAnswers);

      setHistory(newHistory);
      setCurrentQuestionIndex(prevIndex);

      setMessages((prev) => {
        const optionIndices: number[] = [];
        prev.forEach((m, i) => { if (m.type === 'options') optionIndices.push(i); });
        if (optionIndices.length >= 2) {
          const cutAt = optionIndices[optionIndices.length - 1];
          let removeFrom = cutAt;
          for (let i = cutAt - 1; i >= 0; i--) {
            if (prev[i].type === 'user') { removeFrom = i; break; }
          }
          return prev.slice(0, removeFrom);
        }
        return prev;
      });

      const prevQ = questions[prevIndex];
      if (prevQ) {
        addBotMessage({
          type: 'options',
          content: prevQ.text,
          options: prevQ.options.map((o) => ({ value: String(o.value), label: o.label })),
        });
      }
    }
    // For new flow phases, back is more complex - we simplify by allowing restart
  }, [currentPhase, history, questions, answers, addBotMessage]);

  /* ── Handle restart ── */
  const handleRestart = useCallback(() => {
    setMessages([]);
    setCurrentPhase('category');
    setSelectedDomain(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setHistory([]);
    setIsTyping(false);
    setMultiSelectState({});
    setShowUnsupported(false);
    setSelectedPerspective(null);
    setSelectedPerspectiveKey(null);
    setSelectedSubtype(null);
    setSelectedSubtypeLabel(null);
    setFactCheckIndex(0);
    setFactAnswers({});
    setEvidenceSelected({});
    setSelectedLifeCategory(null);

    setTimeout(() => {
      addBotMessage({
        type: 'bot',
        content: '안녕하세요! 법률 상황 정리를 도와드릴게요.',
      }, () => {
        const catOptions = CATEGORIES.map((c) => ({ value: c.label, label: c.label, icon: c.icon }));
        catOptions.push({ value: '_dont_know_category', label: '분야를 모르겠어요', icon: '🤔' });
        addBotMessage({
          type: 'options',
          content: '어떤 문제로 고민하고 계신가요?',
          options: catOptions,
        });
      });
    }, 100);
  }, [addBotMessage]);

  /* ── Handle option click (routes based on phase) ── */
  const handleOptionClick = useCallback(
    (value: string) => {
      switch (currentPhase) {
        case 'category':
          handleCategorySelect(value);
          break;
        case 'dont-know-1':
          handleLifeCategorySelect(value);
          break;
        case 'dont-know-2':
          handleLifeSubcategorySelect(value);
          break;
        case 'dont-know-3':
        case 'domain-select':
          handleDomainSelect(value);
          break;
        case 'perspective':
          handlePerspectiveSelect(value);
          break;
        case 'subtype':
          handleSubtypeSelect(value);
          break;
        case 'fact-check':
          handleFactCheckAnswer(value);
          break;
        case 'diagnosis':
          handleAnswerSelect(value);
          break;
      }
    },
    [currentPhase, handleCategorySelect, handleLifeCategorySelect, handleLifeSubcategorySelect, handleDomainSelect, handlePerspectiveSelect, handleSubtypeSelect, handleFactCheckAnswer, handleAnswerSelect],
  );

  /* ── Check if last options message is multiselect ── */
  const isCurrentMultiselect = (currentPhase === 'diagnosis' && currentQuestion?.type === 'multiselect') || currentPhase === 'evidence';

  /* ── Render a single message ── */
  const renderMessage = (msg: ChatMessage, index: number) => {
    const isLastOptions = (msg.type === 'options' || msg.type === 'multiselect') && index === messages.length - 1 && !isTyping;

    switch (msg.type) {
      case 'bot':
      case 'reflection':
      case 'progress':
        return (
          <div key={msg.id} className="flex items-start gap-2">
            <BotAvatar />
            <div className="flex flex-col gap-0.5 max-w-[80%]">
              <span className="text-[11px] font-semibold text-gray-400">로앤가이드 AI</span>
              <div
                className={`rounded-2xl rounded-tl-md border px-4 py-3 shadow-sm ${
                  msg.type === 'progress'
                    ? 'border-primary-100 bg-primary-50 text-primary-700'
                    : msg.type === 'reflection'
                      ? 'border-blue-100 bg-blue-50 text-blue-800'
                      : 'border-gray-100 bg-white text-gray-800'
                }`}
              >
                <p className="text-[15px] leading-relaxed">{msg.content}</p>
              </div>
            </div>
          </div>
        );

      case 'user':
        return (
          <div key={msg.id} className="flex justify-end">
            <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-md bg-primary-600 px-4 py-3 text-white">
              <p className="text-[15px] leading-relaxed">{msg.content}</p>
            </div>
          </div>
        );

      case 'options':
      case 'multiselect':
        return (
          <div key={msg.id} className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <BotAvatar />
              <div className="flex flex-col gap-0.5 max-w-[80%]">
                <span className="text-[11px] font-semibold text-gray-400">로앤가이드 AI</span>
                <div className="rounded-2xl rounded-tl-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
                  <p className="text-[15px] leading-relaxed text-gray-800">{msg.content}</p>
                  {msg.whyText && (
                    <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">{msg.whyText}</p>
                  )}
                </div>
              </div>
            </div>
            {isLastOptions && msg.options && (
              <div className="flex flex-col gap-2 pl-2">
                {/* Multiselect (evidence or legacy multiselect) */}
                {isCurrentMultiselect || msg.type === 'multiselect' ? (
                  <>
                    {msg.options.map((opt) => {
                      const checkState = currentPhase === 'evidence' ? evidenceSelected : multiSelectState;
                      const setCheckState = currentPhase === 'evidence' ? setEvidenceSelected : setMultiSelectState;
                      const isChecked = !!checkState[opt.value];

                      // Handle "없음" exclusivity
                      const handleChange = () => {
                        if (opt.value === '_none') {
                          // Uncheck everything else, toggle this
                          if (isChecked) {
                            setCheckState({});
                          } else {
                            setCheckState({ _none: true });
                          }
                        } else {
                          // Uncheck "없음" if selecting something else
                          setCheckState((prev: Record<string, boolean>) => {
                            const next = { ...prev, [opt.value]: !prev[opt.value] };
                            delete next['_none'];
                            return next;
                          });
                        }
                      };

                      return (
                        <label
                          key={opt.value}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 text-left font-medium transition-all ${
                            isChecked
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-200 text-gray-700 hover:border-primary-500 hover:bg-primary-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          {opt.icon && <span>{opt.icon}</span>}
                          <span>{opt.label}</span>
                        </label>
                      );
                    })}
                    <button
                      onClick={currentPhase === 'evidence' ? handleEvidenceConfirm : handleMultiSelectConfirm}
                      className="mt-1 w-full rounded-xl bg-primary-600 px-4 py-3 text-base font-semibold text-white hover:bg-primary-700 transition-colors"
                    >
                      다음
                    </button>
                  </>
                ) : (
                  /* Single select */
                  msg.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionClick(opt.value)}
                      className={`w-full text-left rounded-xl border-2 border-gray-200 px-4 py-3 font-medium text-gray-700 transition-all hover:border-primary-500 hover:bg-primary-50 ${
                        opt.icon ? 'flex items-center gap-3 py-4' : ''
                      }`}
                    >
                      {opt.icon && <span className="text-xl">{opt.icon}</span>}
                      <span>{opt.label}</span>
                    </button>
                  ))
                )}

                {/* Unsupported domain link for category phase */}
                {currentPhase === 'category' && !showUnsupported && (
                  <button
                    onClick={() => setShowUnsupported(true)}
                    className="mt-2 text-sm text-gray-400 hover:text-primary-600 underline underline-offset-2"
                  >
                    지원하지 않는 문제인가요?
                  </button>
                )}
                {currentPhase === 'category' && showUnsupported && (
                  <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 space-y-2">
                    <p className="font-medium text-gray-700">아직 지원하지 않는 분야일 수 있어요.</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>위 카테고리에서 가장 비슷한 분야를 선택해보세요.</li>
                      <li>일반 법률 상담은 <span className="font-medium">대한법률구조공단 132</span>에 전화해보세요.</li>
                      <li>긴급 상황이라면 <span className="font-medium">112(경찰)</span> 또는 <span className="font-medium">119(응급)</span>에 연락하세요.</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            {/* Show past options as disabled if not the last */}
            {!isLastOptions && msg.options && (
              <div className="flex flex-col gap-1 pl-2 opacity-50">
                {msg.options.map((opt) => (
                  <div
                    key={opt.value}
                    className="w-full text-left rounded-xl border border-gray-100 px-4 py-2 text-sm text-gray-400"
                  >
                    {opt.icon && <span className="mr-2">{opt.icon}</span>}
                    {opt.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'result':
        return (
          <div key={msg.id} className="w-full">
            {msg.result && <ChatResultCard result={msg.result} answers={msg.answers ?? {}} domainName={domainMeta?.name ?? ''} procedure={selectedDomain ? procedureData?.[selectedDomain] : undefined} onRestart={handleRestart} />}
          </div>
        );

      case 'subtype-result':
        return (
          <div key={msg.id} className="w-full space-y-4">
            {/* New flow result card - restructured */}
            {msg.subtypeResult && (
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* 1. Header - 상단 요약 */}
                <div className="bg-primary-600 px-6 py-4 text-white">
                  <h3 className="text-lg font-bold">상황 정리 결과</h3>
                  <p className="text-sm text-primary-100 mt-1">
                    {msg.subtypeResult.perspectiveLabel} &middot; {msg.subtypeResult.subtypeLabel}
                  </p>
                </div>

                {/* 2. 지금 가장 먼저 할 일 */}
                <div className="px-6 py-5 border-b border-gray-100 bg-amber-50">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span>🔥</span> 지금 가장 먼저 할 일
                  </h4>
                  <ol className="space-y-2">
                    {(msg.subtypeResult.requiredDocs.slice(0, 3)).map((doc, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px]">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-white text-[12px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span className="text-gray-800">{
                          evidenceMatches(msg.subtypeResult!.userEvidence, doc)
                            ? `${doc} 보관 상태 확인`
                            : `${doc} 확보`
                        }</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* 3. 준비서류 - 3구역 분리 */}
                {msg.subtypeResult.requiredDocs.length > 0 && (
                  <SubtypeDocChecklist
                    requiredDocs={msg.subtypeResult.requiredDocs}
                    userEvidence={msg.subtypeResult.userEvidence}
                  />
                )}

                {/* 4. 확인된 사실 + 의미 코멘트 */}
                {Object.keys(msg.subtypeResult.factAnswers).length > 0 && (
                  <div className="px-6 py-5 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span>📋</span> 확인된 사실
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(msg.subtypeResult.factAnswers).map(([key, val]) => {
                        const koreanLabel = factCheckIdToKorean(key, selectedDomain, selectedPerspectiveKey, subtypesData, selectedSubtype);
                        const comment = getFactComment(key, val);
                        return (
                          <div key={key}>
                            <div className="flex items-center gap-2 text-[14px]">
                              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${val === '모름' ? 'bg-gray-300' : 'bg-primary-500'}`} />
                              <span className="text-gray-600">{koreanLabel}:</span>
                              <span className={`font-medium ${val === '모름' ? 'text-gray-400' : 'text-gray-800'}`}>{val}</span>
                            </div>
                            {comment && <p className="text-[12px] text-gray-500 ml-4 mt-0.5">→ {comment}</p>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 5. 법적 쟁점 - 부드럽게 */}
                <div className="px-6 py-5 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span>⚖️</span> 관련 쟁점
                  </h4>
                  <p className="text-[14px] text-gray-700 leading-relaxed">{msg.subtypeResult.summary}</p>
                  {msg.subtypeResult.legalBasis && (
                    <p className="text-[12px] text-gray-400 mt-2">관련 법률: {msg.subtypeResult.legalBasis}</p>
                  )}
                </div>

                {/* 5.5 주요 판단 요소 */}
                {selectedDomain && DOMAIN_JUDGMENT_FACTORS[selectedDomain] && (
                  <div className="px-6 py-5 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      <span>🔍</span> 주요 판단 요소
                    </h4>
                    <p className="text-[12px] text-gray-400 mb-3">보통 이런 요소가 함께 검토됩니다</p>
                    <div className="space-y-2">
                      {DOMAIN_JUDGMENT_FACTORS[selectedDomain].map((factor, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-[11px] font-bold">✓</span>
                          <span className="text-[14px] text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. 무료기관 + CTA */}
                <div className="px-6 py-5 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span>📞</span> 무료 상담 기관
                  </h4>
                  <div className="space-y-2">
                    <a href="tel:132" className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                      <div>
                        <p className="text-[14px] font-medium text-gray-800">대한법률구조공단</p>
                        <p className="text-[12px] text-gray-500">무료 법률상담 및 소송대리 지원</p>
                      </div>
                      <span className="flex-shrink-0 bg-primary-600 text-white text-[13px] font-medium px-3 py-1.5 rounded-lg">132</span>
                    </a>
                    {getDomainSpecificAgency(selectedDomain)}
                  </div>
                </div>

                {/* 6.5. 이렇게 진행됩니다 (procedure 데이터 — 단정형 금지, 가능형 / 기한은 단계 안에 자연스럽게 통합) */}
                {selectedDomain && procedureData?.[selectedDomain] && (() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const proc: any = procedureData[selectedDomain];
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const flow: any = proc.primary_flow ?? proc.all_flows?.[0];
                  const agencyText: string = (proc.agency_names ?? []).slice(0, 2).join(' · ') || '공식 기관';
                  return (
                    <>
                      {flow?.steps?.length > 0 && (
                        <div className="px-6 py-5 border-b border-gray-100 bg-indigo-50/40">
                          <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                            <span>📋</span> 이렇게 진행됩니다
                          </h4>
                          <p className="text-[12px] text-gray-500 mb-3">
                            {agencyText} 안내 절차를 참고하면, 다음 흐름으로 진행됩니다.
                          </p>
                          <ol className="space-y-2.5">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {flow.steps.slice(0, 6).map((s: any, i: number) => (
                              <li key={i} className="flex gap-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">{s.step ?? i + 1}</span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[14px] font-medium text-gray-900">
                                    {s.title}
                                    {s.deadline && <span className="text-[13px] font-normal text-indigo-700 ml-1">({s.deadline})</span>}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      {(proc.agency_names?.length ?? 0) > 0 && (
                        <details className="px-6 py-5 border-b border-gray-100 group">
                          <summary className="cursor-pointer list-none flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                                <span>🏛️</span> 신청·상담 경로
                              </h4>
                              <p className="text-[12px] text-gray-500 mt-0.5">아래 기관에서 절차 안내·상담을 확인하실 수 있습니다.</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <ul className="mt-3 space-y-2">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {proc.agency_names.slice(0, 4).map((name: string, i: number) => {
                              const url = proc.source_urls?.[i];
                              return (
                                <li key={i} className="flex items-start gap-2 text-[13px]">
                                  <span className="text-blue-500 mt-0.5">▸</span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-gray-800 font-medium">{name}</p>
                                    {url && (
                                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue-600 hover:underline break-all">
                                        {url.replace(/^https?:\/\//, '').split('/')[0]}
                                      </a>
                                    )}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </details>
                      )}
                    </>
                  );
                })()}

                {/* 7. 상담 연결 CTA */}
                <div className="px-6 py-5 border-b border-gray-100">
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
                    {getPerspectiveCTAText(selectedPerspectiveKey)}
                  </p>
                  <button
                    onClick={() => alert('전문가 매칭 서비스는 현재 준비 중입니다.\n대한법률구조공단(132)에 전화하시면 무료로 상담받으실 수 있습니다.')}
                    className="w-full rounded-xl bg-amber-500 hover:bg-amber-600 px-6 py-3.5 text-white font-bold text-[15px] transition-colors shadow-md"
                  >
                    {getPerspectiveCTAButton(selectedPerspectiveKey)}
                  </button>
                  <button
                    onClick={handleRestart}
                    className="w-full mt-2 rounded-xl border border-gray-200 px-6 py-3 text-[14px] font-medium text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    다른 문제 상담하기
                  </button>
                </div>

                {/* 8. 한계 문구 */}
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-[12px] text-gray-400 leading-relaxed">
                    이 결과는 입력하신 내용을 바탕으로 한 준비 안내입니다. 사실관계와 증거에 따라 실제 판단은 달라질 수 있으며, 정확한 법률 판단은 전문가 상담을 받으시기 바랍니다.
                  </p>
                </div>
              </div>
            )}

            {/* Legacy result card removed - new flow result is sufficient */}
          </div>
        );

      default:
        return null;
    }
  };

  /* ── Determine if back button should show ── */
  const showBackButton =
    (currentPhase === 'diagnosis' && history.length > 1 && !isTyping);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚖️</span>
          <h1 className="text-base font-bold text-gray-800">로앤가이드 상황정리</h1>
        </div>
        <button
          onClick={handleRestart}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-primary-600 transition-colors"
        >
          처음부터 다시 시작
        </button>
      </div>
      <div className="bg-primary-50 px-4 py-2 text-center">
        <p className="text-xs text-primary-700">변호사 만나기 전, AI가 빠르게 대응 전략을 세워드립니다.</p>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, i) => {
          const lastUserIdx = messages.reduce((acc, m, idx) => m.type === 'user' ? idx : acc, -1);
          const isScrollTarget = i === lastUserIdx + 1 && i > 0;
          return (
            <div key={msg.id}>
              {isScrollTarget && <div ref={lastBotRef} />}
              {renderMessage(msg, i)}
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div>
            {messages.length > 0 && messages[messages.length - 1].type === 'user' && <div ref={lastBotRef} />}
            <TypingIndicator />
          </div>
        )}

        {/* Invisible scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* Bottom actions */}
      {showBackButton && (
        <div className="border-t border-gray-200 bg-white px-4 py-3">
          <button
            onClick={handleBack}
            className="text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
          >
            ← 이전으로
          </button>
        </div>
      )}

      {currentPhase === 'result' && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 flex gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-all"
          >
            다른 문제 상담하기
          </button>
        </div>
      )}
    </div>
  );
}
