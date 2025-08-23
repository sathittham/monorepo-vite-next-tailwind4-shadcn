import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { ContentGrid } from "@/components/content-grid"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"

export default function SimplePage() {
  return (
    <PageLayout showSidebar={false} gap="lg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <PageHeader
            title="Simple Page Layout"
            description="This page demonstrates a layout without sidebar - perfect for landing pages, forms, or content-focused pages."
            className="text-center"
          />
        </div>

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

        <div className="text-center">
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}