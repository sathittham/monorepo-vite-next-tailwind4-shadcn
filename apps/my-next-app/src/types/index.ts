import type { Locale } from '@workspace/shared-i18n'

// Base component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Legacy support - will be deprecated
export interface ComponentProps extends BaseComponentProps {}

// Landing page section props with proper typing
export interface LandingPageSectionProps extends BaseComponentProps {
  id?: string
}

// Legacy support - will be deprecated
export interface LandingPageSection extends LandingPageSectionProps {}

// Navigation types
export interface NavItem {
  name: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface NavbarProps extends BaseComponentProps {}

// Business domain types
export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface PricingTier {
  id: string
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

// Form types
export interface ContactForm {
  name: string
  email: string
  message: string
}

// Configuration types
export interface ThemeConfig {
  defaultTheme: 'light' | 'dark' | 'system'
  enableSystem: boolean
  storageKey: string
}

export interface LocaleConfig {
  locale: Locale
  label: string
  flag: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}