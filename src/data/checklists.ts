import type { ChecklistItem } from '@/types/training';

export const checklistItems: ChecklistItem[] = [
  {
    id: 'receiving-1',
    phase: 'receiving',
    textJa: '3コール以内に電話に出る',
    textZh: '三声以内接听电话',
    priority: 'critical'
  },
  {
    id: 'receiving-2',
    phase: 'receiving',
    textJa: '会社名と担当者名を名乗る',
    textZh: '报上公司与姓名',
    priority: 'critical'
  },
  {
    id: 'responding-1',
    phase: 'responding',
    textJa: 'お客様の要件を復唱して確認',
    textZh: '复述客户诉求并确认',
    priority: 'important'
  },
  {
    id: 'closing-1',
    phase: 'closing',
    textJa: '次のステップと連絡手段を案内',
    textZh: '说明下一步与联系方式',
    priority: 'important'
  },
  {
    id: 'recording-1',
    phase: 'recording',
    textJa: 'CRMへ記録を残す',
    textZh: '在CRM中做好记录',
    priority: 'recommended'
  }
];
