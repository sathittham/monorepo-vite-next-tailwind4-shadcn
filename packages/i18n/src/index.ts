export const locales = ['en', 'th'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  th: 'ไทย'
}

// Common i18n configuration
export const i18nConfig = {
  defaultLocale,
  locales,
  localeNames,
}

// Re-export locale files for static imports
export { default as enTranslations } from './locales/en.json'
export { default as thTranslations } from './locales/th.json'