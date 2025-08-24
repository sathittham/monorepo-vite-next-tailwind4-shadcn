import Link from "next/link"
import { GitFork, Twitter, Linkedin, Mail } from "lucide-react"
import { useTranslations } from 'next-intl'

const socialLinks = [
  { name: "GitHub", icon: GitFork, href: "https://github.com/sathittham/monorepo-vite-next-tailwind4-shadcn" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/sathittham" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/sathittham" },
  { name: "Email", icon: Mail, href: "mailto:hello@sathittham.com" }
]

export function Footer() {
  const t = useTranslations('components.footer')
  
  const footerLinks = {
    product: [
      { name: t('links.features'), href: "#features" },
      { name: t('links.pricing'), href: "#pricing" },
      { name: t('links.documentation'), href: "/docs" },
      { name: t('links.changelog'), href: "/changelog" }
    ],
    company: [
      { name: t('links.about'), href: "/about" },
      { name: t('links.blog'), href: "/blog" },
      { name: t('links.careers'), href: "/careers" },
      { name: t('links.contact'), href: "/contact" }
    ],
    resources: [
      { name: t('links.community'), href: "/community" },
      { name: t('links.helpCenter'), href: "/help" },
      { name: t('links.support'), href: "/support" },
      { name: t('links.status'), href: "/status" }
    ],
    legal: [
      { name: t('links.privacy'), href: "/privacy" },
      { name: t('links.terms'), href: "/terms" },
      { name: t('links.cookiePolicy'), href: "/cookies" },
      { name: t('links.licenses'), href: "/licenses" }
    ]
  }
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">{t('monorepo')}</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('brandDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4">{t('product')}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('resources')}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2025{" "}
            <a 
              href="https://sathittham.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Sathittham.com
            </a>{" "}
            {t('copyright')}
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            {t('builtWith')}
          </p>
        </div>
      </div>
    </footer>
  )
}