import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { useTranslations } from 'next-intl'
import type { LandingPageSectionProps } from '@/types'

export function FaqSection({ className, id }: LandingPageSectionProps) {
  const t = useTranslations('components.faq')
  const faqs = t.raw('questions')
  
  return (
    <section id={id || "faq"} className={`py-24 md:py-32 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="w-full max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq: any, index: number) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold">{t('stillHaveQuestions')}</p>
            <a href="#contact" className="text-primary hover:underline text-lg">
              {t('contactSupport')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}