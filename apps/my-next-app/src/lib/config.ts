import type { ThemeConfig, LocaleConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  defaultTheme: 'system',
  enableSystem: true,
  storageKey: 'theme'
}

export const localeConfig: LocaleConfig[] = [
  {
    locale: 'en',
    label: 'English',
    flag: '🇺🇸'
  },
  {
    locale: 'th', 
    label: 'ไทย',
    flag: '🇹🇭'
  }
] as const

export const defaultLocale = 'en' as const

// Site configuration
export const siteConfig = {
  name: 'Monorepo Starter',
  description: 'A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components.',
  url: 'https://sathittham.com',
  author: 'Sathittham s',
  social: {
    twitter: '@sathittham',
    github: 'https://github.com/sathittham'
  }
} as const

// Application environment variables with validation
export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const