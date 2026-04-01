export default function SpokeLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="animate-pulse space-y-6 w-full max-w-3xl px-4">
        <div className="space-y-3">
          <div className="h-4 w-32 rounded bg-gray-200" />
          <div className="h-8 w-4/5 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
        </div>
        <div className="rounded-xl bg-blue-50 p-5 space-y-3">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-xl bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-100" />
              <div className="h-5 w-2/3 rounded bg-gray-200" />
            </div>
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
