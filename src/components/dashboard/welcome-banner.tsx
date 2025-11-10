'use client';

import { BookOpenCheck, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface WelcomeBannerProps {
  readonly name: string;
}

export const WelcomeBanner = ({ name }: WelcomeBannerProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-indigo-500 p-8 text-white shadow-lg">
      <div className="space-y-3">
        <p className="text-sm uppercase text-indigo-100">CX Excellence Program</p>
        <h1 className="text-3xl font-bold">{t('dashboard.welcome', { name })}</h1>
        <p className="max-w-2xl text-sm text-indigo-100">{t('app.description')}</p>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20" type="button">
            <PhoneCall className="h-4 w-4" /> {t('dashboard.startSimulation')}
          </button>
          <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-600 shadow" type="button">
            <BookOpenCheck className="h-4 w-4" /> {t('dashboard.continueLearning')}
          </button>
        </div>
      </div>
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-12 rounded-2xl bg-white/10 p-6 text-sm font-semibold uppercase tracking-wide text-white/80 lg:block">
        Voice Confidence
      </div>
    </section>
  );
};
