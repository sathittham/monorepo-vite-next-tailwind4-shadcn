import { Check } from "lucide-react"

const benefits = [
  "Pre-configured monorepo with pnpm workspaces",
  "Vite and Next.js applications in one repository",
  "Shared UI components with shadcn/ui",
  "TypeScript configuration for all packages",
  "Tailwind CSS with custom design system",
  "ESLint and Prettier pre-configured",
  "Hot module replacement in development",
  "Optimized production builds"
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why choose our monorepo starter?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Save weeks of setup time and start building your applications immediately 
              with our battle-tested monorepo configuration.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8">
              <div className="bg-background rounded-lg p-6 shadow-lg">
                <div className="text-sm font-mono text-muted-foreground mb-4">
                  ~/monorepo-starter
                </div>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">📁</span>
                    <span>apps/</span>
                  </div>
                  <div className="flex items-center space-x-4 ml-4">
                    <span className="text-green-500">📱</span>
                    <span>my-vite-app/</span>
                  </div>
                  <div className="flex items-center space-x-4 ml-4">
                    <span className="text-purple-500">🔷</span>
                    <span>my-next-app/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">📦</span>
                    <span>packages/</span>
                  </div>
                  <div className="flex items-center space-x-4 ml-4">
                    <span className="text-pink-500">🎨</span>
                    <span>ui/</span>
                  </div>
                  <div className="flex items-center space-x-4 ml-4">
                    <span className="text-orange-500">⚙️</span>
                    <span>typescript-config/</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}