import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Card, CardContent } from "@workspace/ui/components/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useTranslations } from 'next-intl'

export function ContactSection() {
  const t = useTranslations('components.contact')
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t('info.findUs'),
      content: t('info.address')
    },
    {
      icon: Phone,
      title: t('info.callUs'),
      content: t('info.phone')
    },
    {
      icon: Mail,
      title: t('info.mailUs'),
      content: t('info.email')
    },
    {
      icon: Clock,
      title: t('info.visitUs'),
      content: t('info.hours')
    }
  ]
  
  const subjects = t.raw('form.subjects')
  return (
    <section id="contact" className="container mx-auto px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="text-sm font-medium text-primary uppercase tracking-wider">
              {t('badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('form.firstName')}</Label>
                  <Input
                    id="firstName"
                    placeholder={t('form.firstNamePlaceholder')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('form.lastName')}</Label>
                  <Input
                    id="lastName"
                    placeholder={t('form.lastNamePlaceholder')}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('form.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('form.emailPlaceholder')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{t('form.subject')}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t('form.subjectPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject: string, index: number) => (
                      <SelectItem key={index} value={subject.toLowerCase().replace(/\s+/g, '-')}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('form.message')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('form.messagePlaceholder')}
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                {t('form.sendMessage')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}