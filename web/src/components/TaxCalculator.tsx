'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Script from 'next/script';

/* ══════════════════════════════════════════════
   2025년 귀속 세법 상수
   ══════════════════════════════════════════════ */

const TAX_BRACKETS = [
  { max: 14_000_000, rate: 0.06, deduction: 0 },
  { max: 50_000_000, rate: 0.15, deduction: 1_260_000 },
  { max: 88_000_000, rate: 0.24, deduction: 5_760_000 },
  { max: 150_000_000, rate: 0.35, deduction: 15_440_000 },
  { max: 300_000_000, rate: 0.38, deduction: 19_940_000 },
  { max: 500_000_000, rate: 0.40, deduction: 25_940_000 },
  { max: 1_000_000_000, rate: 0.42, deduction: 35_940_000 },
  { max: Infinity, rate: 0.45, deduction: 65_940_000 },
];

/** 근로소득공제 */
function calcEarnedIncomeDeduction(gross: number): number {
  if (gross <= 5_000_000) return gross * 0.7;
  if (gross <= 15_000_000) return 3_500_000 + (gross - 5_000_000) * 0.4;
  if (gross <= 45_000_000) return 7_500_000 + (gross - 15_000_000) * 0.15;
  if (gross <= 100_000_000) return 12_000_000 + (gross - 45_000_000) * 0.05;
  return 14_750_000 + (gross - 100_000_000) * 0.02;
}

/** 산출세액 */
function calcTaxAmount(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  for (const b of TAX_BRACKETS) {
    if (taxableIncome <= b.max) {
      return taxableIncome * b.rate - b.deduction;
    }
  }
  return 0;
}

/** 자녀세액공제 (8세 이상) */
function calcChildTaxCredit(children: number): number {
  if (children <= 0) return 0;
  if (children === 1) return 250_000;
  if (children === 2) return 550_000;
  return 550_000 + (children - 2) * 400_000;
}

/** 출산/입양 세액공제 */
function calcBirthAdoptionCredit(count: number): number {
  if (count <= 0) return 0;
  let total = 0;
  if (count >= 1) total += 300_000;
  if (count >= 2) total += 500_000;
  for (let i = 3; i <= count; i++) total += 700_000;
  return total;
}

/** 간이세액표 추정 (연간 기납부세액) — 총급여 기준 근사치 */
function estimateWithheldTax(gross: number): number {
  // 간이세액표 근사: 근로소득공제 → 과세표준(본인 1인 공제) → 산출세액 × 80%
  const eid = calcEarnedIncomeDeduction(gross);
  const taxable = Math.max(0, gross - eid - 1_500_000); // 본인 기본공제만
  const tax = calcTaxAmount(taxable);
  // 근로소득세액공제 간이 적용
  let credit = 0;
  if (tax <= 500_000) credit = tax * 0.55;
  else if (tax <= 700_000) credit = 275_000 + (tax - 500_000) * 0.3;
  else credit = 335_000 + (tax - 700_000) * 0.2;
  if (credit > 660_000) credit = 660_000;
  return Math.max(0, tax - credit);
}

/** 근로소득세액공제 */
function calcEarnedIncomeTaxCredit(calculatedTax: number): number {
  if (calculatedTax <= 0) return 0;
  let credit = 0;
  if (calculatedTax <= 500_000) credit = calculatedTax * 0.55;
  else if (calculatedTax <= 700_000) credit = 275_000 + (calculatedTax - 500_000) * 0.3;
  else credit = 335_000 + (calculatedTax - 700_000) * 0.2;
  if (credit > 660_000) credit = 660_000;
  return credit;
}

/** 전체 세액 계산 */
function computeTax(params: {
  gross: number;
  dependents: number;
  children8: number;
  birthCount: number;
  cardSpend: number;
  medical: number;
  insurance: number;
  pension: number;
  maternityCenter: number;
}) {
  const { gross, dependents, children8, birthCount, cardSpend, medical, insurance, pension, maternityCenter } = params;

  // 1. 근로소득공제
  const earnedIncomeDeduction = calcEarnedIncomeDeduction(gross);

  // 2. 인적공제
  const personalDeduction = dependents * 1_500_000;

  // 3. 특별소득공제 — 신용카드 소득공제 (총급여 25% 초과분, 15%, 한도 300만)
  const cardThreshold = gross * 0.25;
  const cardDeduction = Math.min(Math.max(0, cardSpend - cardThreshold) * 0.15, 3_000_000);

  // 4. 과세표준
  const taxableIncome = Math.max(0, gross - earnedIncomeDeduction - personalDeduction - cardDeduction);

  // 5. 산출세액
  const calculatedTax = calcTaxAmount(taxableIncome);

  // 6. 세액공제 합산
  const earnedTaxCredit = calcEarnedIncomeTaxCredit(calculatedTax);
  const childCredit = calcChildTaxCredit(children8);
  const birthCredit = calcBirthAdoptionCredit(birthCount);

  // 의료비 세액공제: 총급여 3% 초과분 × 15%, 한도 700만원 (공제대상 한도)
  const medicalThreshold = gross * 0.03;
  const medicalDeductible = Math.min(Math.max(0, medical - medicalThreshold), 7_000_000);
  const medicalCredit = medicalDeductible * 0.15;

  // 산후조리원: 200만 한도, 15%
  const maternityCenterCredit = Math.min(maternityCenter, 2_000_000) * 0.15;

  // 보험료: 100만 한도, 12%
  const insuranceCredit = Math.min(insurance, 1_000_000) * 0.12;

  // 연금저축: 600만 한도, 총급여 5500만 이하 15%, 초과 12%
  const pensionLimit = 6_000_000;
  const pensionRate = gross <= 55_000_000 ? 0.15 : 0.12;
  const pensionCredit = Math.min(pension, pensionLimit) * pensionRate;

  const totalCredit = earnedTaxCredit + childCredit + birthCredit + medicalCredit + maternityCenterCredit + insuranceCredit + pensionCredit;

  // 7. 결정세액
  const determinedTax = Math.max(0, calculatedTax - totalCredit);

  // 8. 기납부세액
  const withheld = estimateWithheldTax(gross);

  // 9. 환급/추가납부
  const refund = withheld - determinedTax;

  return {
    calculatedTax,
    totalCredit,
    determinedTax,
    withheld,
    refund,
    details: {
      earnedTaxCredit,
      childCredit,
      birthCredit,
      medicalCredit,
      maternityCenterCredit,
      insuranceCredit,
      pensionCredit,
    },
  };
}

/* ══════════════════════════════════════════════
   Helper: 만원 ↔ 원 변환 + 포맷
   ══════════════════════════════════════════════ */
function man(v: number) { return v * 10_000; }
function formatWon(v: number): string {
  const abs = Math.abs(Math.round(v));
  if (abs >= 10_000) {
    const m = Math.round(abs / 10_000);
    return `${m.toLocaleString()}만원`;
  }
  return `${abs.toLocaleString()}원`;
}

/* ══════════════════════════════════════════════
   FAQ JSON-LD
   ══════════════════════════════════════════════ */
const FAQ_ITEMS = [
  {
    q: '연말정산 예상 환급액은 어떻게 계산하나요?',
    a: '총급여에서 근로소득공제, 인적공제 등을 빼 과세표준을 구하고, 세율을 적용해 산출세액을 계산합니다. 여기서 근로소득세액공제, 자녀세액공제, 의료비·보험료·연금저축 세액공제를 차감하면 결정세액이 나옵니다. 매달 원천징수한 기납부세액보다 결정세액이 적으면 그 차액을 환급받습니다.',
  },
  {
    q: '육아휴직 중 연말정산은 어떻게 달라지나요?',
    a: '육아휴직 급여는 비과세이므로 총급여가 크게 줄어듭니다. 총급여가 낮아지면 적용 세율이 낮아져 산출세액이 줄고, 반면 이미 원천징수한 세금이 있으면 환급액이 늘어나는 경우가 많습니다. 다만 소득공제·세액공제 항목도 줄어들 수 있어 개인별로 다릅니다.',
  },
  {
    q: '맞벌이 부부 자녀공제는 누가 받는 게 유리한가요?',
    a: '일반적으로 과세표준이 높아 적용 세율이 높은 쪽이 받는 것이 유리합니다. 예를 들어, 한쪽이 24% 세율 구간이고 다른 쪽이 15% 구간이면, 24% 쪽이 인적공제를 받을 때 절세 효과가 더 큽니다. 단, 세액공제(자녀세액공제)는 세율과 무관하게 동일하므로 인적공제와 세액공제를 분리해서 판단해야 합니다.',
  },
  {
    q: '산후조리원 비용도 연말정산 공제가 되나요?',
    a: '네. 2025년 귀속 기준으로 산후조리원 비용은 총급여와 관계없이 200만원 한도 내에서 15% 세액공제를 받을 수 있습니다. 최대 30만원 절세 효과가 있습니다.',
  },
  {
    q: '이 계산기의 결과는 정확한 건가요?',
    a: '이 계산기는 2025년 귀속 소득세법 기준으로 주요 공제 항목을 반영한 예상치입니다. 실제 연말정산에서는 기부금, 교육비, 주택자금, 월세 등 추가 공제와 개인별 상황에 따라 결과가 달라질 수 있습니다. 정확한 신고는 국세청 홈택스 또는 세무 전문가를 이용해 주세요.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

/* ══════════════════════════════════════════════
   Component
   ══════════════════════════════════════════════ */
export default function TaxCalculator() {
  // 간편모드 입력
  const [grossMan, setGrossMan] = useState('');
  const [dependents, setDependents] = useState('1');
  const [children8, setChildren8] = useState('0');
  const [birthCount, setBirthCount] = useState('0');
  const [cardSpendMan, setCardSpendMan] = useState('');
  const [medicalMan, setMedicalMan] = useState('');
  const [insuranceMan, setInsuranceMan] = useState('');
  const [pensionMan, setPensionMan] = useState('');

  // 육휴 모드
  const [parLeave, setParLeave] = useState(false);
  const [leaveStart, setLeaveStart] = useState('1');
  const [leaveEnd, setLeaveEnd] = useState('12');
  const [maternityCenterMan, setMaternityCenterMan] = useState('');
  const [isDualIncome, setIsDualIncome] = useState(false);
  const [spouseGrossMan, setSpouseGrossMan] = useState('');

  // 결과 표시
  const [showResult, setShowResult] = useState(false);

  const num = (v: string) => parseFloat(v) || 0;

  // 간편 계산 결과
  const result = useMemo(() => {
    const gross = man(num(grossMan));
    if (gross <= 0) return null;
    return computeTax({
      gross,
      dependents: Math.max(1, num(dependents)),
      children8: num(children8),
      birthCount: num(birthCount),
      cardSpend: man(num(cardSpendMan)),
      medical: man(num(medicalMan)),
      insurance: man(num(insuranceMan)),
      pension: man(num(pensionMan)),
      maternityCenter: 0,
    });
  }, [grossMan, dependents, children8, birthCount, cardSpendMan, medicalMan, insuranceMan, pensionMan]);

  // 육휴 비교 결과
  const leaveResult = useMemo(() => {
    if (!parLeave) return null;
    const totalGross = man(num(grossMan));
    if (totalGross <= 0) return null;

    const startM = Math.max(1, Math.min(12, num(leaveStart)));
    const endM = Math.max(startM, Math.min(12, num(leaveEnd)));
    const leaveMonths = endM - startM + 1;
    const workMonths = 12 - leaveMonths;

    // 육휴 전: 전체 12개월 근무 가정 (= 입력한 총급여)
    const beforeGross = totalGross;

    // 육휴 후: 근무 기간 비례 급여 (육휴 급여는 비과세)
    const afterGross = Math.round(totalGross * (workMonths / 12));

    const commonParams = {
      dependents: Math.max(1, num(dependents)),
      children8: num(children8),
      birthCount: num(birthCount),
      cardSpend: man(num(cardSpendMan)),
      medical: man(num(medicalMan)),
      insurance: man(num(insuranceMan)),
      pension: man(num(pensionMan)),
      maternityCenter: 0,
    };

    const before = computeTax({ ...commonParams, gross: beforeGross });
    const after = computeTax({
      ...commonParams,
      gross: afterGross,
      maternityCenter: man(num(maternityCenterMan)),
    });

    // 맞벌이 비교
    let spouseOptimal: string | null = null;
    if (isDualIncome && num(spouseGrossMan) > 0) {
      const spouseGross = man(num(spouseGrossMan));
      // 누가 자녀공제 받는 게 유리? → 한계세율 비교
      const myTaxable = Math.max(0, afterGross - calcEarnedIncomeDeduction(afterGross) - 1_500_000);
      const spTaxable = Math.max(0, spouseGross - calcEarnedIncomeDeduction(spouseGross) - 1_500_000);
      const myRate = TAX_BRACKETS.find((b) => myTaxable <= b.max)?.rate || 0.06;
      const spRate = TAX_BRACKETS.find((b) => spTaxable <= b.max)?.rate || 0.06;
      if (spRate > myRate) {
        spouseOptimal = '배우자(소득이 높은 쪽)가 자녀 인적공제를 받는 것이 유리합니다.';
      } else if (spRate < myRate) {
        spouseOptimal = '본인이 자녀 인적공제를 받는 것이 유리합니다.';
      } else {
        spouseOptimal = '두 분의 세율 구간이 동일하여 차이가 없습니다.';
      }
    }

    const maternityCenterExtra = Math.min(man(num(maternityCenterMan)), 2_000_000) * 0.15;

    return {
      beforeRefund: before.refund,
      afterRefund: after.refund,
      diff: after.refund - before.refund,
      leaveMonths,
      workMonths,
      afterGross,
      spouseOptimal,
      maternityCenterExtra,
    };
  }, [parLeave, grossMan, leaveStart, leaveEnd, dependents, children8, birthCount, cardSpendMan, medicalMan, insuranceMan, pensionMan, maternityCenterMan, isDualIncome, spouseGrossMan]);

  function handleCalculate() {
    if (num(grossMan) <= 0) return;
    setShowResult(true);
  }

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-gray-50 pb-20">
        {/* 헤더 */}
        <section className="bg-gradient-to-br from-[#0f1a2e] via-[#162240] to-[#1e3050] py-12 md:py-16">
          <div className="container-narrow text-center">
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              연말정산 계산기
            </h1>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              연봉 넣으면 예상 환급액이 바로 나옵니다 · 2025년 귀속 기준
            </p>
          </div>
        </section>

        {/* 계산기 본체 */}
        <div className="container-narrow -mt-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
            {/* ─── 간편모드 입력 ─── */}
            <h2 className="text-lg font-bold text-navy-700">기본 정보</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <InputField label="총급여 (만원)" value={grossMan} onChange={setGrossMan} placeholder="예: 4000" required />
              <InputField label="부양가족 수 (본인 포함)" value={dependents} onChange={setDependents} placeholder="1" />
              <InputField label="자녀 수 (8세 이상)" value={children8} onChange={setChildren8} placeholder="0" />
              <InputField label="올해 출산/입양 자녀 수" value={birthCount} onChange={setBirthCount} placeholder="0" />
            </div>

            <h3 className="mt-8 text-base font-bold text-navy-700">공제 항목 (선택)</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <InputField label="신용카드 사용액 (만원)" value={cardSpendMan} onChange={setCardSpendMan} placeholder="0" />
              <InputField label="의료비 (만원)" value={medicalMan} onChange={setMedicalMan} placeholder="0" />
              <InputField label="보험료 (만원)" value={insuranceMan} onChange={setInsuranceMan} placeholder="0" />
              <InputField label="연금저축 납입액 (만원)" value={pensionMan} onChange={setPensionMan} placeholder="0" />
            </div>

            {/* ─── 육휴 토글 ─── */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <span className="text-sm font-medium text-navy-700">육아휴직 중이신가요?</span>
              <button
                type="button"
                onClick={() => setParLeave(!parLeave)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${parLeave ? 'bg-amber-500' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${parLeave ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            {/* ─── 육휴 상세 입력 ─── */}
            {parLeave && (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                <h3 className="text-base font-bold text-navy-700">육아휴직 상세</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-600">육휴 시작월</label>
                    <select
                      value={leaveStart}
                      onChange={(e) => setLeaveStart(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    >
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}월</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-600">육휴 종료월</label>
                    <select
                      value={leaveEnd}
                      onChange={(e) => setLeaveEnd(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    >
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}월</option>
                      ))}
                    </select>
                  </div>
                  <InputField label="산후조리원 비용 (만원)" value={maternityCenterMan} onChange={setMaternityCenterMan} placeholder="0" />
                  <div className="flex items-end gap-3 pb-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <input
                        type="checkbox"
                        checked={isDualIncome}
                        onChange={(e) => setIsDualIncome(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                      />
                      맞벌이
                    </label>
                  </div>
                  {isDualIncome && (
                    <InputField label="배우자 총급여 (만원)" value={spouseGrossMan} onChange={setSpouseGrossMan} placeholder="예: 3500" />
                  )}
                </div>
              </div>
            )}

            {/* ─── 계산 버튼 ─── */}
            <button
              onClick={handleCalculate}
              className="mt-8 w-full rounded-xl bg-amber-500 py-4 text-base font-bold text-navy-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.99]"
            >
              환급액 계산하기
            </button>

            {/* ═══ 결과 ═══ */}
            {showResult && result && (
              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 md:p-6">
                  <h3 className="text-lg font-bold text-navy-700">계산 결과</h3>
                  <div className="mt-4 space-y-3">
                    <ResultRow label="산출세액" value={formatWon(result.calculatedTax)} />
                    <ResultRow label="세액공제 합계" value={`-${formatWon(result.totalCredit)}`} highlight />
                    <div className="border-t border-gray-200 pt-3">
                      <ResultRow label="결정세액" value={formatWon(result.determinedTax)} />
                    </div>
                    <ResultRow label="기납부세액 (추정)" value={formatWon(result.withheld)} sub />
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-bold text-navy-700">
                          {result.refund >= 0 ? '예상 환급액' : '추가 납부액'}
                        </span>
                        <span className={`text-xl font-bold ${result.refund >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                          {result.refund >= 0 ? '+' : '-'}{formatWon(Math.abs(result.refund))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 세액공제 상세 */}
                <details className="rounded-xl border border-gray-200 bg-white">
                  <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-gray-600 hover:text-navy-700">
                    세액공제 상세 내역 보기
                  </summary>
                  <div className="border-t border-gray-100 px-5 py-4 text-sm">
                    <div className="space-y-2">
                      <ResultRow label="근로소득세액공제" value={formatWon(result.details.earnedTaxCredit)} sub />
                      <ResultRow label="자녀세액공제" value={formatWon(result.details.childCredit)} sub />
                      <ResultRow label="출산/입양 세액공제" value={formatWon(result.details.birthCredit)} sub />
                      <ResultRow label="의료비 세액공제" value={formatWon(result.details.medicalCredit)} sub />
                      <ResultRow label="보험료 세액공제" value={formatWon(result.details.insuranceCredit)} sub />
                      <ResultRow label="연금저축 세액공제" value={formatWon(result.details.pensionCredit)} sub />
                    </div>
                  </div>
                </details>

                {/* ─── 육휴 비교 결과 ─── */}
                {parLeave && leaveResult && (
                  <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
                    <h3 className="text-lg font-bold text-navy-700">육아휴직 환급 비교</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {leaveResult.leaveMonths}개월 휴직 · 근무 {leaveResult.workMonths}개월 기준
                    </p>
                    <div className="mt-4 space-y-3">
                      <ResultRow
                        label="육휴 전 (12개월 근무)"
                        value={`${leaveResult.beforeRefund >= 0 ? '환급 ' : '납부 '}${formatWon(Math.abs(leaveResult.beforeRefund))}`}
                      />
                      <ResultRow
                        label={`육휴 후 (${leaveResult.workMonths}개월 근무)`}
                        value={`${leaveResult.afterRefund >= 0 ? '환급 ' : '납부 '}${formatWon(Math.abs(leaveResult.afterRefund))}`}
                      />
                      <div className="border-t border-amber-200 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-bold text-navy-700">차이</span>
                          <span className={`text-lg font-bold ${leaveResult.diff >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                            {leaveResult.diff >= 0 ? '+' : ''}{formatWon(leaveResult.diff)}
                            {leaveResult.diff >= 0 ? ' 더 환급' : ' 덜 환급'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {num(maternityCenterMan) > 0 && (
                      <div className="mt-4 rounded-lg bg-white/70 px-4 py-3">
                        <p className="text-sm text-navy-700">
                          <span className="font-semibold">산후조리원 공제 포함 시</span> 추가 환급{' '}
                          <span className="font-bold text-blue-600">+{formatWon(leaveResult.maternityCenterExtra)}</span>
                        </p>
                      </div>
                    )}

                    {leaveResult.spouseOptimal && (
                      <div className="mt-4 rounded-lg bg-white/70 px-4 py-3">
                        <p className="text-sm font-semibold text-navy-700">맞벌이 최적 배분</p>
                        <p className="mt-1 text-sm text-gray-700">{leaveResult.spouseOptimal}</p>
                      </div>
                    )}

                    <div className="mt-5">
                      <a
                        href="https://www.3o3.co.kr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-navy-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-600"
                      >
                        삼쩜삼에서 정확한 환급 받기 &rarr;
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ═══ SEO 텍스트 ═══ */}
        <section className="container-narrow mt-16">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold text-navy-700">연말정산이란?</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              연말정산은 매월 급여에서 원천징수된 소득세를 연간 확정 소득과 각종 공제를 반영하여 다시 계산하는 절차입니다.
              근로소득자라면 매년 2월, 전년도 소득에 대해 연말정산을 진행합니다.
              매달 간이세액표에 따라 대략적으로 떼인 세금과 실제 내야 할 세금의 차액을 정산하는 것으로,
              세금을 더 낸 경우 환급을, 덜 낸 경우 추가 납부를 하게 됩니다.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              연말정산에서 가장 중요한 것은 소득공제와 세액공제입니다.
              소득공제는 과세 대상 소득을 줄여주고 (인적공제, 신용카드 공제 등),
              세액공제는 산출된 세금 자체를 줄여줍니다 (자녀세액공제, 의료비·보험료·연금저축 공제 등).
              특히 2025년 귀속 연말정산에서는 출산·입양 세액공제가 강화되어 첫째 30만원, 둘째 50만원, 셋째 이상 70만원까지 공제받을 수 있습니다.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              육아휴직 중인 근로자는 육아휴직 급여가 비과세 소득이므로 총급여가 줄어들어
              적용 세율이 낮아지는 효과가 있습니다. 반면 소득공제 혜택도 함께 줄어들 수 있어
              실제 환급액은 개인 상황에 따라 다릅니다. 맞벌이 부부의 경우 자녀 인적공제를
              소득이 높은 쪽에서 받는 것이 일반적으로 유리하지만, 세액공제와 소득공제를 나눠서
              최적으로 배분하면 더 큰 절세 효과를 기대할 수 있습니다.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              이 계산기는 2025년 귀속 소득세 기준으로 주요 항목을 반영한 예상 계산기입니다.
              실제 연말정산에는 기부금, 교육비, 주택자금, 월세 세액공제 등 더 많은 항목이 있으므로,
              정확한 결과는 국세청 홈택스 연말정산 간소화 서비스를 이용해 주세요.
            </p>

            <h2 className="mt-10 text-xl font-bold text-navy-700">자주 묻는 질문</h2>
            <div className="mt-4 space-y-5">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-navy-700">{item.q}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 내부 링크 */}
            <h2 className="mt-10 text-xl font-bold text-navy-700">관련 가이드</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/guide/year-end-tax-master" className="text-primary-600 underline hover:text-primary-700">
                  연말정산 완벽 가이드 — 놓치기 쉬운 공제 총정리
                </Link>
              </li>
              <li>
                <Link href="/guide/year-end-tax-master/maternity-leave-tax" className="text-primary-600 underline hover:text-primary-700">
                  육아휴직 연말정산 — 비과세 소득과 환급의 모든 것
                </Link>
              </li>
              <li>
                <Link href="/guide/year-end-tax-master/dual-income-optimization" className="text-primary-600 underline hover:text-primary-700">
                  맞벌이 연말정산 — 부부 최적 공제 배분 전략
                </Link>
              </li>
              <li>
                <Link href="/guide/year-end-tax-master/medical-expense-deduction" className="text-primary-600 underline hover:text-primary-700">
                  의료비 세액공제 — 산후조리원, 난임 시술비 포함 총정리
                </Link>
              </li>
              <li>
                <Link href="/guide/year-end-tax-master/pension-savings-deduction" className="text-primary-600 underline hover:text-primary-700">
                  연금저축 세액공제 — IRP·퇴직연금 합산 한도와 절세 팁
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-xs text-gray-400">
            이 계산기는 참고용이며 법적 효력을 갖는 유권해석이 아닙니다
          </p>
        </section>
      </div>
    </>
  );
}

/* ─── Sub-components ─── */

function InputField({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-600">
        {label}
        {required && <span className="ml-0.5 text-red-400">*</span>}
      </label>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
      />
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight,
  sub,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-sm ${sub ? 'text-gray-500' : 'text-navy-700'}`}>{label}</span>
      <span className={`text-sm font-semibold ${highlight ? 'text-blue-600' : sub ? 'text-gray-600' : 'text-navy-700'}`}>
        {value}
      </span>
    </div>
  );
}
