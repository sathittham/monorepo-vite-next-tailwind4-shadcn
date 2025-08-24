import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from '@workspace/shared-i18n'
import { 
  enTranslations as sharedEnTranslations, 
  thTranslations as sharedThTranslations 
} from '@workspace/shared-i18n'

// Import app-specific translations
import enTranslations from '@/lib/i18n/locales/en.json'
import thTranslations from '@/lib/i18n/locales/th.json'

// Merge shared and app-specific translations
const translations = {
  en: {
    ...sharedEnTranslations,
    ...enTranslations
  },
  th: {
    ...sharedThTranslations,
    ...thTranslations
  }
} as const

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
 
  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale
  }
 
  return {
    locale: locale!,
    messages: translations[locale as keyof typeof translations]
  }
})