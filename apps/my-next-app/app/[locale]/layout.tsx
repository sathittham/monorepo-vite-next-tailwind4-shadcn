import { Geist, Geist_Mono, Noto_Sans_Thai, Sarabun } from "next/font/google"
import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { locales } from '@workspace/i18n'

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export const metadata: Metadata = {
  title: "Monorepo Starter - Modern Full-Stack Development",
  description: "A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components. Everything you need to build modern applications.",
  keywords: ["monorepo", "vite", "nextjs", "tailwind", "shadcn/ui", "typescript", "react"],
  authors: [{ name: "Sathittham s" }],
  creator: "Monorepo Starter",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://sathittham.com",
    title: "Monorepo Starter - Modern Full-Stack Development",
    description: "A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components.",
    siteName: "Monorepo Starter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monorepo Starter - Modern Full-Stack Development",
    description: "A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components.",
    creator: "@sathittham",
  },
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: "swap",
})

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sarabun",
  display: "swap",
})

// Can be imported from a shared config
export async function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  
  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${notoSansThai.variable} ${sarabun.variable} font-noto-sans-thai antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <AnimatedBackground />
            <Navbar />
            <main className="min-h-screen relative">
              {children}
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
