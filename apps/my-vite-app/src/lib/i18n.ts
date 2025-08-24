import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { enTranslations, thTranslations, defaultLocale } from '@workspace/i18n'

i18n
  .use(initReactI18next)
  .init({
    debug: import.meta.env.DEV,
    fallbackLng: defaultLocale,
    lng: defaultLocale,
    
    interpolation: {
      escapeValue: false,
    },
    
    resources: {
      en: {
        translation: enTranslations,
      },
      th: {
        translation: thTranslations,
      },
    },
  })

export default i18n