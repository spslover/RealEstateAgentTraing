'use client';

import { Timer } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import type { ScenarioSimulation } from '@/types/training';

interface ScenarioHeaderProps {
  readonly scenario: ScenarioSimulation;
  readonly elapsedSeconds: number;
}

export const ScenarioHeader = ({ scenario, elapsedSeconds }: ScenarioHeaderProps) => {
  const { t } = useTranslation();
  const difficultyLabel = t(`scenario.difficulty.${scenario.difficulty}` as const);

  return (
    <header className="flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow">
      <div>
        <p className="text-sm font-semibold uppercase text-primary-500">{scenario.scenarioType}</p>
        <h2 className="text-xl font-bold text-slate-800">{scenario.title}</h2>
        <p className="text-sm text-slate-500">{difficultyLabel}</p>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
        <Timer className="h-4 w-4 text-primary-500" />
        <span className="text-sm font-medium text-slate-700">{elapsedSeconds}s</span>
      </div>
    </header>
  );
};
