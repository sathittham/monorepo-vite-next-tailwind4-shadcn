import { Button } from "@workspace/ui/components/button"
import { ArrowRight, Github } from "lucide-react"

export function CTASection() {
  return (
    <section id="get-started" className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with our monorepo starter today and accelerate your development workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Github className="mr-2 h-5 w-5" />
              Clone Repository
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Free and open source. No registration required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}