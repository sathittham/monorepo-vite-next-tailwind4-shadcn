import { Check } from "lucide-react"
import { useTranslations } from 'next-intl'
import type { LandingPageSectionProps } from '@/types'

export function BenefitsSection({ className, id }: LandingPageSectionProps) {
  const t = useTranslations('components.benefits')
  const benefits = t.raw('benefits')
  
  return (
    <section id={id || "benefits"} className={`bg-muted/30 py-24 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('subtitle')}
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8">
              <div className="bg-background rounded-lg p-6 shadow-lg">
                <div className="text-sm font-mono text-muted-foreground mb-4">
                  {t('folderStructure')}
                </div>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">📁</span>
                    <span>apps/</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <span className="text-green-500">📁</span>
                    <span>my-next-app/</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <span className="text-green-500">📁</span>
                    <span>my-vite-app/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">📁</span>
                    <span>packages/</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <span className="text-yellow-500">📁</span>
                    <span>ui/</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <span className="text-purple-500">📁</span>
                    <span>shared-i18n/</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <span className="text-orange-500">📁</span>
                    <span>typescript-config/</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <span className="text-pink-500">📁</span>
                    <span>eslint-config/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">📄</span>
                    <span>package.json</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">📄</span>
                    <span>pnpm-workspace.yaml</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}