import { Code2, Palette, Zap, Shield, Layers, Globe } from 'lucide-react'
import type { FeatureItem, PricingTier, TestimonialItem, FAQItem } from '@/types'

export const FEATURES: FeatureItem[] = [
  {
    id: 'modern-stack',
    title: 'Modern Stack',
    description: 'Built with Next.js 15, React 19, and TypeScript for maximum performance and developer experience.',
    icon: Code2
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Beautiful UI components with shadcn/ui and Tailwind CSS for consistent, customizable design.',
    icon: Palette
  },
  {
    id: 'performance',
    title: 'Optimized Performance',
    description: 'Turbopack bundler, image optimization, and modern React features for lightning-fast applications.',
    icon: Zap
  },
  {
    id: 'type-safety',
    title: 'Type Safety',
    description: 'Full TypeScript support with strict typing for better code quality and developer confidence.',
    icon: Shield
  },
  {
    id: 'monorepo',
    title: 'Monorepo Ready',
    description: 'Organized workspace structure for scalable development with shared packages and utilities.',
    icon: Layers
  },
  {
    id: 'i18n',
    title: 'Internationalization',
    description: 'Built-in i18n support with next-intl for multi-language applications.',
    icon: Globe
  }
]

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    features: [
      'Next.js 15 + React 19',
      'TypeScript configuration',
      'Tailwind CSS setup',
      'Basic components',
      'Community support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$49',
    period: 'one-time',
    highlighted: true,
    features: [
      'Everything in Starter',
      'shadcn/ui components',
      'Advanced layouts',
      'Authentication setup',
      'Database integration',
      'Priority support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$199',
    period: 'one-time',
    features: [
      'Everything in Pro',
      'Custom components',
      'Advanced integrations',
      'Team collaboration',
      'Dedicated support',
      'Custom development'
    ]
  }
]

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    name: 'Alex Chen',
    role: 'Frontend Developer',
    company: 'TechCorp',
    content: 'This starter saved me weeks of setup time. The structure is perfect and everything just works out of the box.',
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Johnson',
    role: 'Tech Lead',
    company: 'StartupXYZ',
    content: 'Amazing developer experience with great TypeScript support. Our team productivity increased significantly.',
  },
  {
    id: 'testimonial-3',
    name: 'Mike Rodriguez',
    role: 'Full Stack Developer',
    company: 'WebStudio',
    content: 'The monorepo structure and shared components make scaling multiple projects effortless.',
  }
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'what-is-included',
    question: 'What\'s included in this starter?',
    answer: 'You get a complete monorepo setup with Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui components, i18n support, and a well-structured project architecture.'
  },
  {
    id: 'customization',
    question: 'Can I customize the components?',
    answer: 'Absolutely! All components are built with shadcn/ui and Tailwind CSS, making them highly customizable. You can modify colors, spacing, and behavior to match your brand.'
  },
  {
    id: 'typescript',
    question: 'Is TypeScript required?',
    answer: 'While TypeScript is included and recommended for better development experience, you can convert the project to regular JavaScript if needed.'
  },
  {
    id: 'deployment',
    question: 'How do I deploy this?',
    answer: 'The starter works with any hosting platform that supports Next.js - Vercel, Netlify, AWS, or your own server. Deployment configurations are included.'
  },
  {
    id: 'support',
    question: 'Do you provide support?',
    answer: 'Yes! We offer community support for all users and priority support for Pro and Enterprise customers. Documentation and examples are also provided.'
  },
  {
    id: 'updates',
    question: 'Will this be updated?',
    answer: 'Yes, we regularly update the starter with the latest versions of dependencies and new features based on community feedback.'
  }
]

// Re-export site config from main config file
export { siteConfig as SITE_CONFIG } from './config'