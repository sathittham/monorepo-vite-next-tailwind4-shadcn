import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from '@workspace/shared-i18n'

export const routing = {
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  
  // Only use a locale prefix for non-default locales
  localePrefix: 'as-needed' as const
}

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)