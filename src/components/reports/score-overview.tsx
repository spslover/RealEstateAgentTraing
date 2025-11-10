import { Gauge } from 'lucide-react';

interface ScoreOverviewProps {
  readonly score: number;
}

export const ScoreOverview = ({ score }: ScoreOverviewProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow">
      <Gauge className="h-12 w-12 text-primary-500" />
      <div>
        <p className="text-xs uppercase text-slate-500">Overall Score</p>
        <p className="text-4xl font-bold text-slate-800">{score}</p>
        <p className="text-xs text-slate-500">前回より +4</p>
      </div>
    </div>
  );
};
