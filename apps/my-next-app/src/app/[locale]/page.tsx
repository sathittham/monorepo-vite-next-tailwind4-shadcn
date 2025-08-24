import { 
  HeroSection, 
  FeaturesSection, 
  BenefitsSection, 
  PricingSection, 
  TestimonialsSection,
  FaqSection,
  ContactSection,
  CTASection 
} from '@/components/sections'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { siteConfig } from '@/lib/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${siteConfig.url}/og-image.png`],
    },
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <CTASection />
    </>
  )
}