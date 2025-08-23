import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Zap, Shield, Palette, Code, Globe, Rocket } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Built with Vite for instant HMR and optimized builds. Experience blazing fast development."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Type Safe",
    description: "Full TypeScript support across the entire monorepo with strict type checking."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Beautiful UI",
    description: "Pre-built components with shadcn/ui and Tailwind CSS for stunning interfaces."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Developer Experience",
    description: "Modern tooling, hot reload, and excellent developer experience out of the box."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Universal",
    description: "Works with both Vite and Next.js applications in a single monorepo setup."
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Production Ready",
    description: "Optimized builds, performance monitoring, and deployment-ready configuration."
  }
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything you need to build modern apps
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our monorepo starter comes with all the tools and components you need to build beautiful, 
          performant applications quickly.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <div className="text-primary mb-2">
                {feature.icon}
              </div>
              <CardTitle className="text-xl">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}