import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Check } from "lucide-react"
import { useTranslations } from 'next-intl'
import { AnimatedSection, AnimatedItem } from "./animated-section"

export function PricingSection() {
  const t = useTranslations('components.pricing')
  
  const pricingPlans = [
    {
      name: t('starter'),
      description: t('starterDesc'),
      price: "$9",
      period: t('perMonth'),
      features: [
        t('features.upTo5Projects'),
        t('features.basicComponents'),
        t('features.communitySupport'),
        t('features.standardTemplates'),
        t('features.documentationAccess')
      ],
      popular: false,
      cta: t('getStarted')
    },
    {
      name: t('professional'),
      description: t('professionalDesc'),
      price: "$29",
      period: t('perMonth'),
      features: [
        t('features.unlimitedProjects'),
        t('features.premiumComponents'),
        t('features.prioritySupport'),
        t('features.advancedTemplates'),
        t('features.customIntegrations'),
        t('features.teamCollaboration'),
        t('features.apiAccess')
      ],
      popular: true,
      cta: t('startFreeTrial')
    },
    {
      name: t('enterprise'),
      description: t('enterpriseDesc'),
      price: "$99",
      period: t('perMonth'),
      features: [
        t('features.everythingInProfessional'),
        t('features.customComponents'),
        t('features.dedicatedSupport'),
        t('features.onPremiseDeployment'),
        t('features.ssoIntegration'),
        t('features.advancedAnalytics'),
        t('features.customBranding'),
        t('features.slaGuarantee')
      ],
      popular: false,
      cta: t('contactSales')
    }
  ]
  return (
    <section id="pricing" className="container mx-auto px-4 py-24 md:py-32">
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
          {pricingPlans.map((plan, index) => (
            <AnimatedItem key={plan.name} delay={index * 0.1}>
              <Card 
                className={`relative hover:scale-105 transition-all duration-300 h-full ${
                  plan.popular ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-pulse">
                    {t('mostPopular')}
                  </Badge>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
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
                      plan.popular ? 'hover:scale-105 shadow-lg' : ''
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
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