/**
 * Procedure data accessors. Data is pre-generated at build time
 * (scripts/generate-procedure-data.mjs) into procedure-data-generated.ts
 * to avoid runtime fs.readFileSync of kb/ — that triggered Next.js File Tracing
 * to include the entire kb/ directory in the serverless bundle and exceed
 * the 250MB Vercel limit.
 *
 * 톤 안전장치 (CRITICAL): 결과화면에서 procedure 데이터를 보여줄 때는
 * 항상 "검토해볼 수 있습니다" / "확인할 수 있습니다" 같은 가능형으로 표시.
 * 단정형("받을 수 있습니다", "100% ~", "반드시") 금지. CLAUDE.md "결과화면 톤" 참조.
 */
import { PROCEDURE_DATA } from '@/data/procedure-data-generated';
import type { DomainProcedure } from '@/data/procedure-data-generated';

export type {
  ProcedureStep,
  ProcedureFlow,
  RequiredDocCategory,
  KeyDeadline,
  DomainProcedure,
} from '@/data/procedure-data-generated';

export function loadProcedureForDomain(domain: string): DomainProcedure | null {
  return PROCEDURE_DATA[domain] ?? null;
}

export function loadAllProcedureData(): Record<string, DomainProcedure> {
  return PROCEDURE_DATA;
}
