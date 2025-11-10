'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages: Array<{ code: 'ja' | 'zh-CN'; label: string }> = [
  { code: 'ja', label: '日本語' },
  { code: 'zh-CN', label: '简体中文' }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [active, setActive] = useState<'ja' | 'zh-CN'>('ja');

  useEffect(() => {
    setActive(i18n.language === 'zh-CN' ? 'zh-CN' : 'ja');
  }, [i18n.language]);

  const handleChange = (code: 'ja' | 'zh-CN') => {
    void i18n.changeLanguage(code);
    setActive(code);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`text-sm font-medium transition ${
            active === lang.code ? 'text-primary-600' : 'text-slate-500'
          }`}
          onClick={() => handleChange(lang.code)}
          type="button"
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
