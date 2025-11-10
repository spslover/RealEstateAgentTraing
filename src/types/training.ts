export type UserRole = 'trainee' | 'supervisor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  joinDate: Date;
  language: 'ja' | 'zh-CN';
}

export interface TrainingChapter {
  id: string;
  chapterNumber: number;
  titleJa: string;
  titleZh: string;
  sections: TrainingSection[];
  estimatedTime: number;
}

export interface TrainingSection {
  id: string;
  sectionNumber: string;
  titleJa: string;
  titleZh: string;
  contentJa: string;
  contentZh: string;
  keyPoints: KeyPoint[];
  examples: ConversationExample[];
}

export interface KeyPoint {
  id: string;
  bulletJa: string;
  bulletZh: string;
}

export type ScenarioType = 'inquiry' | 'selling' | 'complaint';

export interface ConversationExample {
  id: string;
  scenarioType: ScenarioType;
  customerLineJa: string;
  customerLineZh: string;
  staffResponseJa: string;
  staffResponseZh: string;
  analysisJa: string;
  analysisZh: string;
}

export interface ScenarioSimulation {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  scenarioType: ScenarioType | string;
  initialContext: string;
  conversationFlow: ConversationNode[];
  evaluationCriteria: EvaluationCriteria[];
}

export interface ConversationNode {
  id: string;
  speaker: 'customer' | 'staff';
  text: string;
  audioUrl?: string;
  possibleResponses?: ResponseOption[];
  nextNodeId?: string;
}

export interface ResponseOption {
  id: string;
  text: string;
  score: number;
  feedback: string;
  nextNodeId: string;
}

export interface EvaluationCriteria {
  category: 'tone' | 'politeness' | 'accuracy' | 'empathy' | 'next_steps' | string;
  weight: number;
  scoreRange: [number, number];
  description: string;
}

export interface PerformanceReport {
  userId: string;
  scenarioId: string;
  timestamp: Date;
  overallScore: number;
  categoryScores: Record<string, number>;
  strengths: string[];
  areasForImprovement: string[];
  aiGeneratedFeedback: string;
  transcription: string;
  duration: number;
}

export interface ChecklistItem {
  id: string;
  phase: 'receiving' | 'responding' | 'closing' | 'recording';
  textJa: string;
  textZh: string;
  priority: 'critical' | 'important' | 'recommended';
}

export interface ChecklistProgress {
  userId: string;
  scenarioId: string;
  checkedItems: string[];
  missedItems: string[];
  completionRate: number;
}
