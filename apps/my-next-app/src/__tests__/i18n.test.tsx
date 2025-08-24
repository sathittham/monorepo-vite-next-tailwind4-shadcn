import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { NextLanguageSwitcher } from '@/components/ui/next-language-switcher'
import { locales, localeNames } from '@workspace/shared-i18n'

// Mock the next-intl hooks
vi.mock('next-intl', async () => {
  const actual = await vi.importActual('next-intl')
  return {
    ...actual,
    useLocale: vi.fn(() => 'en'),
  }
})

vi.mock('@/lib/routing', () => ({
  usePathname: vi.fn(() => '/'),
}))

// Mock window.location
const mockLocation = {
  href: '',
  assign: vi.fn(),
  replace: vi.fn(),
}
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
})

describe('Internationalization', () => {
  beforeEach(() => {
    mockLocation.href = ''
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('Language Switcher Component', () => {
    const renderLanguageSwitcher = (locale: string = 'en') => {
      const { useLocale } = require('next-intl')
      useLocale.mockReturnValue(locale)

      return render(
        <NextIntlClientProvider 
          locale={locale} 
          messages={{}}
        >
          <NextLanguageSwitcher />
        </NextIntlClientProvider>
      )
    }

    it('should display current locale correctly', () => {
      renderLanguageSwitcher('en')
      
      expect(screen.getByText('English')).toBeInTheDocument()
    })

    it('should display Thai locale correctly', () => {
      renderLanguageSwitcher('th')
      
      expect(screen.getByText('ไทย')).toBeInTheDocument()
    })

    it('should show all available locales in dropdown', async () => {
      renderLanguageSwitcher()
      
      // Click to open dropdown
      const trigger = screen.getByRole('button')
      fireEvent.click(trigger)

      await waitFor(() => {
        locales.forEach(locale => {
          expect(screen.getByText(localeNames[locale])).toBeInTheDocument()
        })
      })
    })

    it('should switch to Thai when Thai option is clicked', async () => {
      renderLanguageSwitcher('en')
      
      // Open dropdown
      const trigger = screen.getByRole('button')
      fireEvent.click(trigger)

      await waitFor(() => {
        const thaiOption = screen.getByText('ไทย')
        fireEvent.click(thaiOption)
        
        expect(mockLocation.href).toBe('/th')
      })
    })

    it('should switch to English when English option is clicked', async () => {
      renderLanguageSwitcher('th')
      
      // Open dropdown  
      const trigger = screen.getByRole('button')
      fireEvent.click(trigger)

      await waitFor(() => {
        const englishOption = screen.getByText('English')
        fireEvent.click(englishOption)
        
        expect(mockLocation.href).toBe('/en')
      })
    })

    it('should not navigate when clicking the current locale', async () => {
      renderLanguageSwitcher('en')
      
      // Open dropdown
      const trigger = screen.getByRole('button')
      fireEvent.click(trigger)

      await waitFor(() => {
        const currentLocaleOption = screen.getByText('English')
        fireEvent.click(currentLocaleOption)
        
        // Should not change location when clicking current locale
        expect(mockLocation.href).toBe('')
      })
    })

    it('should preserve pathname when switching locales', async () => {
      const { usePathname } = require('@/lib/routing')
      usePathname.mockReturnValue('/about')
      
      renderLanguageSwitcher('en')
      
      // Open dropdown
      const trigger = screen.getByRole('button')
      fireEvent.click(trigger)

      await waitFor(() => {
        const thaiOption = screen.getByText('ไทย')
        fireEvent.click(thaiOption)
        
        expect(mockLocation.href).toBe('/th/about')
      })
    })
  })

  describe('Locale Configuration', () => {
    it('should have correct locales defined', () => {
      expect(locales).toEqual(['en', 'th'])
    })

    it('should have correct locale names', () => {
      expect(localeNames).toEqual({
        en: 'English',
        th: 'ไทย'
      })
    })
  })

  describe('Translation Messages', () => {
    it('should load English translations correctly', async () => {
      const enTranslations = await import('@/lib/i18n/locales/en.json')
      
      expect(enTranslations.default.components.navbar.monorepo).toBe('Monorepo')
      expect(enTranslations.default.components.hero.title).toContain('Build faster')
      expect(enTranslations.default.metadata.title).toContain('Monorepo Starter')
    })

    it('should load Thai translations correctly', async () => {
      const thTranslations = await import('@/lib/i18n/locales/th.json')
      
      expect(thTranslations.default.components.navbar.monorepo).toBe('Monorepo')
      expect(thTranslations.default.components.hero.title).toContain('สร้างได้เร็วขึ้น')
      expect(thTranslations.default.metadata.title).toContain('Monorepo Starter')
    })

    it('should have consistent structure between English and Thai translations', async () => {
      const enTranslations = await import('@/lib/i18n/locales/en.json')
      const thTranslations = await import('@/lib/i18n/locales/th.json')
      
      // Check that both files have the same structure
      const enKeys = Object.keys(enTranslations.default)
      const thKeys = Object.keys(thTranslations.default)
      
      expect(enKeys.sort()).toEqual(thKeys.sort())
      
      // Check nested structure
      const enComponentKeys = Object.keys(enTranslations.default.components)
      const thComponentKeys = Object.keys(thTranslations.default.components)
      
      expect(enComponentKeys.sort()).toEqual(thComponentKeys.sort())
    })
  })

  describe('Routing Configuration', () => {
    it('should have correct routing configuration', async () => {
      const { routing } = await import('@/lib/routing')
      
      expect(routing.locales).toEqual(['en', 'th'])
      expect(routing.defaultLocale).toBe('en')
      expect(routing.localePrefix).toBe('as-needed')
    })
  })
})

describe('I18n Configuration Integration', () => {
  it('should merge shared and app-specific translations correctly', async () => {
    const i18nConfig = await import('@/lib/i18n')
    
    // Mock request config
    const config = await i18nConfig.default({ requestLocale: Promise.resolve('en') })
    
    expect(config.locale).toBe('en')
    expect(config.messages).toBeDefined()
    
    // Check that both shared and app-specific translations are present
    expect(config.messages.common).toBeDefined() // From shared
    expect(config.messages.components).toBeDefined() // From app-specific
  })

  it('should fallback to default locale for invalid locale', async () => {
    const i18nConfig = await import('@/lib/i18n')
    
    const config = await i18nConfig.default({ requestLocale: Promise.resolve('invalid') })
    
    expect(config.locale).toBe('en') // Should fallback to default
  })

  it('should handle null/undefined locale', async () => {
    const i18nConfig = await import('@/lib/i18n')
    
    const config = await i18nConfig.default({ requestLocale: Promise.resolve(undefined) })
    
    expect(config.locale).toBe('en') // Should fallback to default
  })
})