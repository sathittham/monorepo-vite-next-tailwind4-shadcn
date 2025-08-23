import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"

export default function SimplePage() {
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: "Simple Page", current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        Actions
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
      fullWidth
      headerBreadcrumbs={breadcrumbs}
      headerActions={headerActions}
    >
      <PageHeader
        title="Simple Page Layout"
        description="A clean, organized page layout with consistent structure and navigation - perfect for content-focused pages."
      />
      
      <PageContent>
        <ContentGrid cols="2">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
              <CardDescription>
                Description of the first feature or section
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This card demonstrates how content looks in the simplified layout. 
                Perfect for showcasing features, services, or other content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
              <CardDescription>
                Description of the second feature or section
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Another example card showing how multiple pieces of content 
                can be organized in a clean, grid-based layout.
              </p>
            </CardContent>
          </Card>
        </ContentGrid>
      </PageContent>

      <PageContent>
        <div className="text-center">
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </PageContent>
    </PageLayout>
  )
}