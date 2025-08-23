import { Link } from "react-router-dom"
import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { Button } from "@workspace/ui/components/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const breadcrumbs = [
    { label: "Documents", href: "/" },
    { label: "404", current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
        <Link to="/">
          <Home className="w-4 h-4 mr-2" />
          Home
        </Link>
      </Button>
      <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
        <a
          href="https://github.com/sathittham/monorepo-vite-next-tailwind4-shadcn"
          rel="noopener noreferrer"
          target="_blank"
          className="dark:text-foreground"
        >
          GitHub
        </a>
      </Button>
    </>
  )

  return (
    <PageLayout 
      headerBreadcrumbs={breadcrumbs}
      headerActions={headerActions}
    >
      <PageHeader
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
      />
      
      <PageContent>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
          <div className="text-6xl font-bold text-muted-foreground/20">
            404
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              Oops! Page not found
            </h2>
            <p className="text-muted-foreground max-w-md">
              The page you're looking for might have been removed, renamed, or doesn't exist.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}