'use client';

import { useTranslation } from 'react-i18next';

import type { ChecklistItem } from '@/types/training';

interface ChecklistPanelProps {
  readonly items: ChecklistItem[];
  readonly checked: Record<string, boolean>;
  readonly onToggle: (id: string) => void;
}

export const ChecklistPanel = ({ items, checked, onToggle }: ChecklistPanelProps) => {
  const { i18n, t } = useTranslation();

  return (
    <section className="space-y-3 rounded-2xl bg-white p-6 shadow">
      <h3 className="text-sm font-semibold text-slate-700">{t('scenario.checklist')}</h3>
      <ul className="space-y-2">
        {items.map((item) => {
          const label = i18n.language === 'zh-CN' ? item.textZh : item.textJa;
          return (
            <li key={item.id}>
              <label className="flex items-start gap-3">
                <input
                  checked={Boolean(checked[item.id])}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                  onChange={() => onToggle(item.id)}
                  type="checkbox"
                />
                <span className="text-sm text-slate-700">
                  {label}
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs uppercase text-slate-500">
                    {item.priority}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
