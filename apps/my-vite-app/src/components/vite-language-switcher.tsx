import { useTranslation } from 'react-i18next'
import { Button } from '@workspace/ui/components/button'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { Languages } from 'lucide-react'
import { locales, localeNames, type Locale } from '@workspace/i18n'

export function ViteLanguageSwitcher() {
  const { i18n } = useTranslation()
  
  const handleLanguageChange = (locale: Locale) => {
    console.log(`Switching language to: ${locale}`)
    i18n.changeLanguage(locale)
    localStorage.setItem('i18nextLng', locale)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Languages className="h-4 w-4 mr-2" />
          {localeNames[i18n.language as Locale] || localeNames.en}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={`cursor-pointer ${locale === i18n.language ? 'bg-accent' : ''}`}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}