'use client';

import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Layers, LineChart, ListChecks, Mic, PanelLeft, ShieldCheck } from 'lucide-react';

import { LanguageSwitcher } from '@/components/common/language-switcher';

const navItems = [
  { key: 'dashboard', icon: Home },
  { key: 'learning', icon: Layers },
  { key: 'scenarios', icon: Mic },
  { key: 'exercises', icon: ListChecks },
  { key: 'progress', icon: LineChart },
  { key: 'reports', icon: ShieldCheck },
  { key: 'resources', icon: PanelLeft },
  { key: 'admin', icon: ShieldCheck }
];

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-md">
      <div className="space-y-6">
        <div>
          <p className="text-lg font-semibold text-slate-800">{t('app.title')}</p>
          <p className="text-sm text-slate-500">{t('app.description')}</p>
        </div>
        <ul className="space-y-2">
          {navItems.map(({ key, icon: Icon }) => (
            <li key={key}>
              <button
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-600 transition hover:bg-primary-50 hover:text-primary-600"
                type="button"
              >
                <Icon className="h-4 w-4" />
                <span>{t(`navigation.${key}` as const)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Fragment>
        <LanguageSwitcher />
      </Fragment>
    </nav>
  );
};
