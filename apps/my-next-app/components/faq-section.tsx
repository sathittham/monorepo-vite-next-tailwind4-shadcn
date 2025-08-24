import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion"
import { useTranslations } from 'next-intl'

export function FaqSection() {
  const t = useTranslations('components.faq')
  
  return (
    <section id="faq" className="container mx-auto px-4 py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {t.raw('questions').map((item: any, index: number) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center space-y-4 pt-8">
          <p className="text-muted-foreground">
            {t('stillHaveQuestions')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            {t('contactSupport')}
          </a>
        </div>
      </div>
    </section>
  )
}