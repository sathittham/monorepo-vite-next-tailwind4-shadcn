import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Monorepo Starter - Modern Full-Stack Development",
  description: "A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components. Everything you need to build modern applications.",
  keywords: ["monorepo", "vite", "nextjs", "tailwind", "shadcn/ui", "typescript", "react"],
  authors: [{ name: "Monorepo Starter Team" }],
  creator: "Monorepo Starter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monorepo-starter.com",
    title: "Monorepo Starter - Modern Full-Stack Development",
    description: "A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components.",
    siteName: "Monorepo Starter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monorepo Starter - Modern Full-Stack Development",
    description: "A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components.",
    creator: "@monorepostarter",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
