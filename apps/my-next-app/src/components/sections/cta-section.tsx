import { useTranslations } from 'next-intl'
import { Button } from '@workspace/ui/components/button'
import type { LandingPageSectionProps } from '@/types'

export function CTASection({ className, id }: LandingPageSectionProps) {
  const t = useTranslations('components.cta')
  
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              {t('cloneRepository')}
            </Button>
            <Button variant="outline" size="lg">
              {t('viewDocumentation')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}