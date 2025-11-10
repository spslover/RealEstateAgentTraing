import type { PerformanceReport } from '@/types/training';

export const mockReports: PerformanceReport[] = [
  {
    userId: 'user-001',
    scenarioId: 'scenario-001',
    timestamp: new Date('2024-01-17T10:00:00Z'),
    overallScore: 86,
    categoryScores: {
      tone: 82,
      politeness: 90,
      accuracy: 88,
      next_steps: 84,
      empathy: 80
    },
    strengths: ['敬語表現が自然', '日程確認が的確'],
    areasForImprovement: ['共感表現の幅を増やす', '最後に再度お礼を添える'],
    aiGeneratedFeedback:
      '全体としてとても丁寧な応対ができています。お客様の感情に寄り添う一言を加えると更に印象が良くなります。',
    transcription:
      'お客様：ウェブで見たマンションを内見したいのですが…\nスタッフ：お問い合わせありがとうございます。担当の山田でございます…',
    duration: 345
  }
];
