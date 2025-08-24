import { getRequestConfig } from 'next-intl/server'
import { enTranslations, thTranslations } from '@workspace/i18n'

export default getRequestConfig(async ({ requestLocale }) => {
  // This can either be defined statically at the top-level (constant)  
  // or based on the user's locale
  let locale = await requestLocale
 
  // Ensure that a valid locale is used
  if (!locale || !['en', 'th'].includes(locale)) {
    locale = 'en'
  }
 
  const messages = locale === 'th' ? thTranslations : enTranslations
 
  return {
    locale,
    messages
  }
})