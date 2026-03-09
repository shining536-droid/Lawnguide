'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  stage?: string;
}

export default function ProgressBar({ current, total, stage }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-gray-500">
          {stage && <span className="font-semibold text-navy-700">{stage}</span>}
        </span>
        <span className="text-gray-400">
          {current}/{total}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-primary-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
