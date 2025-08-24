'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/lib/routing'
import { Button } from '@workspace/ui/components/button'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { Languages } from 'lucide-react'
import { locales, localeNames, type Locale } from '@workspace/i18n'

export function NextLanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchToLocale = (newLocale: Locale) => {
    if (newLocale === locale) {
      console.log(`Already on locale: ${locale}`)
      return
    }
    
    console.log(`🌐 Language Switch: ${locale} → ${newLocale}`)
    console.log(`📍 Current pathname: ${pathname}`)
    
    try {
      // Use next-intl's router with locale switching
      // This will automatically handle the locale prefix
      console.log(`🚀 Switching to locale: ${newLocale}`)
      router.replace(pathname, { locale: newLocale })
      
    } catch (error) {
      console.error('❌ Language switch error:', error)
      // Fallback: manual navigation
      const targetUrl = newLocale === 'en' 
        ? window.location.origin + pathname
        : window.location.origin + '/' + newLocale + pathname
      console.log(`🔄 Fallback navigation to: ${targetUrl}`)
      window.location.assign(targetUrl)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Languages className="h-4 w-4 mr-2" />
          {localeNames[locale as Locale] || localeNames.en}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((localeOption) => (
          <DropdownMenuItem
            key={localeOption}
            onClick={() => switchToLocale(localeOption)}
            className={`cursor-pointer ${localeOption === locale ? 'bg-accent' : ''}`}
          >
            {localeNames[localeOption]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}