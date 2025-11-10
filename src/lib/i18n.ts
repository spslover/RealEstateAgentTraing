import i18n, { type Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ja from '@/locales/ja/translation.json';
import zh from '@/locales/zh-CN/translation.json';

const resources: Resource = {
  ja: {
    translation: ja
  },
  'zh-CN': {
    translation: zh
  }
};

export const defaultNS = 'translation';
export const fallbackLng = 'ja';

if (!i18n.isInitialized) {
  void i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      lng: fallbackLng,
      fallbackLng,
      defaultNS,
      interpolation: {
        escapeValue: false
      },
      detection: {
        order: ['querystring', 'localStorage', 'navigator'],
        caches: ['localStorage']
      }
    });
}

export default i18n;
