import { Button } from "@workspace/ui/components/button"
import { ArrowRight, GitFork } from "lucide-react"
import { useTranslations } from 'next-intl'

export function CTASection() {
  const t = useTranslations('components.cta')
  
  return (
    <section id="get-started" className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a 
                href="https://github.com/sathittham/monorepo-vite-next-tailwind4-shadcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork className="mr-2 h-5 w-5" />
                {t('cloneRepository')}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a 
                href="https://github.com/sathittham/monorepo-vite-next-tailwind4-shadcn#readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('viewDocumentation')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>{t('freeOpenSource')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}