'use client';

import { create } from 'zustand';

import type { ConversationNode, ResponseOption, ScenarioSimulation } from '@/types/training';

interface ScenarioState {
  readonly activeScenario?: ScenarioSimulation;
  readonly currentNode?: ConversationNode;
  readonly conversationHistory: ConversationNode[];
  readonly score: number;
  readonly checklist: Record<string, boolean>;
  readonly setScenario: (scenario: ScenarioSimulation) => void;
  readonly submitResponse: (option: ResponseOption) => void;
  readonly toggleChecklist: (itemId: string) => void;
  readonly reset: () => void;
}

const autoChain = (scenario: ScenarioSimulation, startNode: ConversationNode, history: ConversationNode[]): {
  nextNode: ConversationNode;
  history: ConversationNode[];
} => {
  let current = startNode;
  const updatedHistory = [...history];
  while (current.nextNodeId && !current.possibleResponses) {
    const next = scenario.conversationFlow.find((node) => node.id === current.nextNodeId);
    if (!next) break;
    updatedHistory.push(next);
    current = next;
    if (next.possibleResponses) break;
  }
  return { nextNode: current, history: updatedHistory };
};

export const useScenarioStore = create<ScenarioState>((set, get) => ({
  activeScenario: undefined,
  currentNode: undefined,
  conversationHistory: [],
  score: 0,
  checklist: {},
  setScenario: (scenario) => {
    const initialNode = scenario.conversationFlow[0];
    const { nextNode, history } = autoChain(scenario, initialNode, [initialNode]);
    set({
      activeScenario: scenario,
      currentNode: nextNode,
      conversationHistory: history,
      score: 0,
      checklist: {}
    });
  },
  submitResponse: (option) => {
    const { activeScenario } = get();
    if (!activeScenario) return;
    const targetNode = activeScenario.conversationFlow.find((node) => node.id === option.nextNodeId);
    if (!targetNode) return;
    const history = [...get().conversationHistory, targetNode];
    const { nextNode, history: nextHistory } = autoChain(activeScenario, targetNode, history);
    set({
      currentNode: nextNode,
      conversationHistory: nextHistory,
      score: Math.min(100, get().score + option.score)
    });
  },
  toggleChecklist: (itemId) => {
    const { checklist } = get();
    set({ checklist: { ...checklist, [itemId]: !checklist[itemId] } });
  },
  reset: () =>
    set({
      activeScenario: undefined,
      currentNode: undefined,
      conversationHistory: [],
      score: 0,
      checklist: {}
    })
}));
