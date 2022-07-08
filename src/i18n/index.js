import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLang from './en';
import uaLang from './ua';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    whitelist: ['ua', 'en'],
    debug: false,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    },
    resources: {
      en: { translation: enLang },
      ua: { translation: uaLang }
    },

  });

export default i18n;
