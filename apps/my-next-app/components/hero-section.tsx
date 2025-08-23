import { Button } from "@workspace/ui/components/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build Beautiful Apps with{" "}
            <span className="text-primary">Modern Components</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive monorepo starter with Vite, Next.js, Tailwind CSS, and shadcn/ui components.
            Everything you need to build modern applications.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-lg px-8">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            View Documentation
          </Button>
        </div>
        
        <div className="pt-8">
          <div className="text-sm text-muted-foreground mb-4">
            Trusted by developers worldwide
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <div className="text-2xl font-bold">Vite</div>
            <div className="text-2xl font-bold">Next.js</div>
            <div className="text-2xl font-bold">TailwindCSS</div>
            <div className="text-2xl font-bold">shadcn/ui</div>
          </div>
        </div>
      </div>
    </section>
  )
}