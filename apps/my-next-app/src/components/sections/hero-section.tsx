import { Button } from "@workspace/ui/components/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from 'next-intl'
import { AnimatedSection } from "@/components/common"
import { SITE_CONFIG } from "@/lib/constants"
import type { LandingPageSectionProps } from "@/types"

export function HeroSection({ className, id }: LandingPageSectionProps) {
  const t = useTranslations('components.hero')
  
  return (
    <section 
      id={id}
      className={`container mx-auto px-4 py-24 md:py-32 ${className || ''}`}
    >
      <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        <AnimatedSection direction="up" className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="text-lg px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" 
            asChild
          >
            <a 
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('getStarted')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 hover:scale-105 transition-all duration-300" 
            asChild
          >
            <a 
              href={`${SITE_CONFIG.social.github}#readme`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('viewSource')}
            </a>
          </Button>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.4} className="pt-8">
          <div className="text-sm text-muted-foreground mb-4">
            {t('trustedBy')}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['Vite', 'Next.js', 'TailwindCSS', 'shadcn/ui'].map((tech) => (
              <div 
                key={tech}
                className="text-2xl font-bold hover:opacity-100 transition-opacity cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}