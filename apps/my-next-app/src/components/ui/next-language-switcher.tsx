'use client'

import { useLocale } from 'next-intl'
import { usePathname } from '@/lib/routing'
import { Button } from '@workspace/ui/components/button'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { Languages } from 'lucide-react'
import { locales, localeNames, type Locale } from '@workspace/shared-i18n'

export function NextLanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const switchToLocale = (newLocale: Locale) => {
    if (newLocale === locale) {
      return
    }
    
    // Force a full page refresh to ensure proper locale switching
    // This ensures server-side rendering with the correct locale
    const targetUrl = `/${newLocale}${pathname === '/' ? '' : pathname}`
    window.location.href = targetUrl
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