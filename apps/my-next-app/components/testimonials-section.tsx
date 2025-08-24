import { Card, CardContent } from "@workspace/ui/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Star } from "lucide-react"
import { useTranslations } from 'next-intl'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating 
              ? "fill-yellow-400 text-yellow-400" 
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const t = useTranslations('components.testimonials')
  const testimonials = t.raw('reviews').map((review: any, index: number) => ({
    ...review,
    image: `https://images.unsplash.com/photo-${[
      '1494790108755-2616b612b786',
      '1472099645785-5658abf4ff4e', 
      '1438761681033-6461ffad8d80',
      '1500648767791-00dcc994a43e',
      '1554151228-14d9def656e4',
      '1507003211169-0a1dd7228f2d'
    ][index]}?w=150&h=150&fit=crop&crop=face`,
    rating: 5
  }))
  return (
    <section id="testimonials" className="container mx-auto px-4 py-24 md:py-32 bg-muted/20">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {testimonials.map((testimonial: any, index: number) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 space-y-4">
                <StarRating rating={testimonial.rating} />
                
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-3 pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage 
                      src={testimonial.image} 
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 pt-8">
          <p className="text-muted-foreground">
            {t('readyToJoin')}
          </p>
          <a 
            href="#pricing" 
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            {t('getStartedToday')}
          </a>
        </div>
      </div>
    </section>
  )
}