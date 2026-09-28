/**
 * /chat 첫 화면용 결과 예시 카드 — **정적 마크업 전용**.
 *
 * ⚠️ ChatResultCard 를 재사용하지 않는 이유:
 *   ChatResultCard 는 마운트 시 `chat_complete` GA4 이벤트를 발사한다
 *   (ANALYTICS_EVENTS.md: "결과 카드가 실제로 마운트된 시점 = 진단 flow 가 결과 상태로 전환 완료").
 *   첫 화면에 얹으면 진단을 하지도 않은 세션이 전부 chat_complete 로 집계되어 퍼널이 오염된다.
 *   따라서 이 컴포넌트는 서버 컴포넌트이며 useState/useEffect/gtag 를 일절 쓰지 않는다.
 *
 * 톤: CLAUDE.md "결과화면 톤" 준수 — 판단형·확정형 금지, 준비 안내형만.
 * 섹션 순서는 실제 ChatResultCard 와 동일하게 맞춘다 (기대-실제 불일치 방지).
 */
export default function ResultPreviewCard() {
  return (
    <div className="mt-6">
      <p className="mb-2 text-center text-xs font-medium text-gray-500 md:text-sm">
        결과는 이렇게 정리됩니다
      </p>

      <div
        aria-label="결과 예시 카드"
        className="mx-auto max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        {/* Header */}
        <div className="px-4 pt-4 pb-3">
          <div className="mb-1.5 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900">임금 진단 결과</h3>
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
              보통
            </span>
          </div>
          <p className="text-xs text-gray-600">야근수당 미지급 · 기록 일부 보유</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-500">
            입력하신 내용은 임금 미지급으로 상담 전 정리가 필요한 상황으로 보입니다.
          </p>
        </div>

        <div className="space-y-4 px-4 pb-4">
          {/* 1. 진행 타임라인 */}
          <div>
            <p className="mb-1.5 text-xs font-bold text-gray-900">⏱ 앞으로의 절차</p>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="rounded-full bg-primary-50 px-2 py-0.5 font-semibold text-primary-700">
                증거 정리 ← 지금 여기
              </span>
              <span className="text-gray-300">›</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-500">진정 접수</span>
              <span className="text-gray-300">›</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-500">조사</span>
              <span className="text-gray-300">›</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-500">시정·사법처리</span>
            </div>
          </div>

          {/* 2. 지금 할 일 */}
          <div>
            <p className="mb-1.5 text-xs font-bold text-gray-900">✅ 지금 할 일</p>
            <ol className="space-y-1 text-[11px] leading-relaxed text-gray-600">
              <li>1. 출퇴근 기록 확보 — 임금채권 소멸시효 3년</li>
              <li>2. 급여명세서와 근로계약서 대조</li>
            </ol>
          </div>

          {/* 3. 자료 준비 상태 */}
          <div>
            <p className="mb-1.5 text-xs font-bold text-gray-900">📋 자료 준비 상태</p>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-gray-600">
              <span className="text-emerald-700">☑ 근로계약서</span>
              <span className="text-emerald-700">☑ 급여명세서</span>
              <span>☐ 출퇴근 기록</span>
              <span>☐ 업무지시 메신저</span>
            </div>
          </div>

          {/* 4. 변호사에게 물어볼 질문 */}
          <div>
            <p className="mb-1.5 text-xs font-bold text-gray-900">❓ 변호사에게 물어볼 질문</p>
            <ul className="space-y-1 text-[11px] leading-relaxed text-gray-600">
              <li>· 이 자료만으로 임금체불 진정이 가능한가요?</li>
              <li>· 노동청 진정과 민사청구 중 무엇을 먼저 해야 하나요?</li>
            </ul>
          </div>

          <p className="border-t border-gray-100 pt-2.5 text-[11px] text-gray-400">
            ⚠️ 주의할 점 · 🏛️ 무료 상담기관 안내도 함께 정리됩니다
          </p>
        </div>
      </div>

      <p className="mt-2 text-center text-[11px] text-gray-400">
        실제 예시입니다 · 답변에 따라 내용이 달라집니다
      </p>
    </div>
  );
}
