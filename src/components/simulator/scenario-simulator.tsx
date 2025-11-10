'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { checklistItems } from '@/data/checklists';
import { scenarios } from '@/data/scenarios';
import { useScenarioStore } from '@/store/scenario-store';
import type { ResponseOption } from '@/types/training';

import { ChecklistPanel } from './checklist-panel';
import { ConversationDisplay } from './conversation-display';
import { RealTimeFeedback } from './real-time-feedback';
import { ResponseInput } from './response-input';
import { ScenarioHeader } from './scenario-header';

export const ScenarioSimulator = () => {
  const { t } = useTranslation();
  const [elapsed, setElapsed] = useState(0);
  const [activeHints, setActiveHints] = useState<string[]>([]);
  const { activeScenario, setScenario, currentNode, conversationHistory, submitResponse, score, checklist, toggleChecklist } =
    useScenarioStore();

  useEffect(() => {
    if (!activeScenario) {
      setScenario(scenarios[0]);
    }
  }, [activeScenario, setScenario]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!currentNode?.possibleResponses) {
      setActiveHints([]);
      return;
    }
    const sorted = [...currentNode.possibleResponses].sort((a, b) => b.score - a.score);
    const best = sorted[0];
    const poor = sorted.at(-1);
    const hints = [] as string[];
    if (best) {
      hints.push(`${t('scenario.selectOption')}: ${best.feedback}`);
    }
    if (poor && poor !== best) {
      hints.push(`避けたい応答: ${poor.feedback}`);
    }
    setActiveHints(hints);
  }, [currentNode, t]);

  const currentOptions = useMemo(() => currentNode?.possibleResponses, [currentNode]);

  const handleSelect = (option: ResponseOption | 'voice' | 'text') => {
    if (typeof option !== 'string') {
      submitResponse(option);
      setActiveHints([option.feedback]);
    }
  };

  if (!activeScenario || !currentNode) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        <ScenarioHeader elapsedSeconds={elapsed} scenario={activeScenario} />
        <ConversationDisplay currentSpeaker={currentNode.speaker} messages={conversationHistory} />
        <ResponseInput onSelect={handleSelect} options={currentOptions} />
      </div>
      <div className="space-y-4">
        <ChecklistPanel checked={checklist} items={checklistItems} onToggle={toggleChecklist} />
        <RealTimeFeedback hints={activeHints} score={score} />
      </div>
    </div>
  );
};
