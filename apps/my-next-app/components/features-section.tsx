import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Zap, Shield, Palette, Code, Globe, Rocket } from "lucide-react"
import { useTranslations } from 'next-intl'
import { AnimatedSection, AnimatedItem } from "./animated-section"

export function FeaturesSection() {
  const t = useTranslations('components.features')

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('lightningFast'),
      description: t('lightningFastDesc')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('typeSafe'),
      description: t('typeSafeDesc')
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: t('beautifulUI'),
      description: t('beautifulUIDesc')
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t('developerExperience'),
      description: t('developerExperienceDesc')
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('universal'),
      description: t('universalDesc')
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: t('productionReady'),
      description: t('productionReadyDesc')
    }
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <AnimatedSection direction="up" className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('title')}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </AnimatedSection>
      
      <AnimatedSection 
        direction="up" 
        stagger={0.1}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <AnimatedItem key={index}>
            <Card className="border-2 hover:border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 group h-full">
              <CardHeader>
                <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </section>
  )
}