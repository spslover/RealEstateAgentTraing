import { Sparkles } from 'lucide-react';

interface RealTimeFeedbackProps {
  readonly score: number;
  readonly hints: string[];
}

export const RealTimeFeedback = ({ score, hints }: RealTimeFeedbackProps) => {
  return (
    <aside className="space-y-4 rounded-2xl bg-white p-6 shadow">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary-500" />
        <div>
          <p className="text-xs uppercase text-slate-500">Live Score</p>
          <p className="text-2xl font-bold text-primary-600">{score}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-700">ヒント</p>
        <ul className="mt-2 space-y-2">
          {hints.length > 0 ? (
            hints.map((hint, index) => (
              <li key={index} className="rounded-lg bg-primary-50 px-3 py-2 text-xs text-primary-700">
                {hint}
              </li>
            ))
          ) : (
            <li className="text-xs text-slate-500">現在ヒントはありません。</li>
          )}
        </ul>
      </div>
    </aside>
  );
};
