import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { 
  enTranslations as sharedEnTranslations, 
  thTranslations as sharedThTranslations, 
  defaultLocale 
} from '@workspace/shared-i18n'

// Import app-specific translations
import enTranslations from './i18n/locales/en.json'
import thTranslations from './i18n/locales/th.json'

// Merge shared and app-specific translations
const mergedEnTranslations = {
  ...sharedEnTranslations,
  ...enTranslations
}

const mergedThTranslations = {
  ...sharedThTranslations,
  ...thTranslations
}

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
        translation: mergedEnTranslations,
      },
      th: {
        translation: mergedThTranslations,
      },
    },
  })

export default i18n