import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useTranslations } from 'next-intl'
import type { LandingPageSectionProps } from '@/types'

export function ContactSection({ className, id }: LandingPageSectionProps) {
  const t = useTranslations('components.contact')
  const subjects = t.raw('form.subjects')
  
  return (
    <section id={id || "contact"} className={`py-24 md:py-32 bg-muted/30 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="text-sm">
              {t('badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{t('info.findUs')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t('info.address')}
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>{t('info.callUs')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t('info.phone')}
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>{t('info.mailUs')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t('info.email')}
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{t('info.visitUs')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t('info.hours')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
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
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    {t('form.sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}