import type { PerformanceReport } from '@/types/training';

export const generateActionItems = (report: PerformanceReport): string[] => {
  const actions = new Set<string>();

  if ((report.categoryScores.empathy ?? 0) < 85) {
    actions.add('Empathy lab: 共感表現のバリエーションを練習する。');
  }

  if ((report.categoryScores.accuracy ?? 0) < 90) {
    actions.add('情報復唱テンプレートを使用して正確性を高める。');
  }

  if (report.overallScore < 90) {
    actions.add('次回シナリオでAIフィードバックを即時確認する。');
  }

  actions.add('録音を振り返り、声のトーンと間を自己評価する。');

  return [...actions];
};
