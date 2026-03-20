import type { Metadata } from 'next';
import TaxCalculator from '@/components/TaxCalculator';

export const metadata: Metadata = {
  title: '연말정산 계산기 — 예상 환급액 10초 계산 (2026) | 베베플랜',
  description:
    '연봉 넣으면 예상 환급액 바로 나옵니다. 육아휴직 환급 비교, 산후조리원 공제, 맞벌이 최적 배분까지. 무료·가입 없음.',
  openGraph: {
    title: '연말정산 계산기 — 예상 환급액 10초 계산 (2026) | 베베플랜',
    description:
      '연봉 넣으면 예상 환급액 바로 나옵니다. 육아휴직 환급 비교, 산후조리원 공제, 맞벌이 최적 배분까지. 무료·가입 없음.',
  },
};

export default function TaxCalculatorPage() {
  return <TaxCalculator />;
}
