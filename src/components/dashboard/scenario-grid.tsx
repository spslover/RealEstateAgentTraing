import { Mic, ShieldHalf } from 'lucide-react';

import { scenarios } from '@/data/scenarios';

export const ScenarioGrid = () => {
  return (
    <section className="space-y-4 rounded-3xl bg-white p-6 shadow">
      <header className="flex items-center gap-2">
        <Mic className="h-5 w-5 text-primary-500" />
        <h2 className="text-lg font-semibold text-slate-800">シナリオライブラリ</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {scenarios.map((scenario) => (
          <article key={scenario.id} className="flex flex-col justify-between rounded-2xl border border-slate-200 p-4">
            <div className="space-y-2">
              <p className="text-xs uppercase text-primary-500">{scenario.scenarioType}</p>
              <h3 className="text-base font-semibold text-slate-800">{scenario.title}</h3>
              <p className="text-xs text-slate-500">{scenario.initialContext}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-primary-600">{scenario.difficulty}</span>
              <span className="flex items-center gap-1">
                <ShieldHalf className="h-4 w-4" /> {scenario.evaluationCriteria.length} 指標
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
