import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Check } from "lucide-react"
import { useTranslations } from 'next-intl'
import { AnimatedSection, AnimatedItem } from "@/components/common"
import { PRICING_TIERS } from "@/lib/constants"
import type { LandingPageSectionProps } from "@/types"

export function PricingSection({ className, id }: LandingPageSectionProps) {
  const t = useTranslations('components.pricing')
  
  return (
    <section 
      id={id || "pricing"} 
      className={`container mx-auto px-4 py-24 md:py-32 ${className || ''}`}
    >
      <div className="flex flex-col items-center text-center space-y-8">
        <AnimatedSection direction="up" className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        <AnimatedSection 
          direction="up" 
          stagger={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        >
          {PRICING_TIERS.map((plan, index) => (
            <AnimatedItem key={plan.id} delay={index * 0.1}>
              <Card 
                className={`relative hover:scale-105 transition-all duration-300 h-full ${
                  plan.highlighted ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-pulse">
                    {t('mostPopular')}
                  </Badge>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{t(`${plan.id}Desc`)}</CardDescription>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold">
                      {plan.price}
                      <span className="text-lg font-normal text-muted-foreground">
                        /{plan.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      plan.highlighted ? 'hover:scale-105 shadow-lg' : ''
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {t(`${plan.id}CTA`)}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <div className="text-center space-y-4 pt-8">
          <p className="text-sm text-muted-foreground">
            {t('freeTrialNote')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('customSolution')} <a href="#contact" className="text-primary hover:underline">{t('contactUs')}</a>
          </p>
        </div>
      </div>
    </section>
  )
}