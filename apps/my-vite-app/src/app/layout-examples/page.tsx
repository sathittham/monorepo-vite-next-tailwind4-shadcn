import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { ExampleCard } from "@/components/example-card"
import { Button } from "@workspace/ui/components/button"

export default function LayoutExamplesPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Page Layout Examples"
        description="Demonstrating different configurations of the PageLayout component."
      />

      <PageContent>
        <ContentGrid>
          <ExampleCard
            title="Default Layout"
            description="Standard layout with sidebar and header"
            code="<PageLayout>...</PageLayout>"
          />
          
          <ExampleCard
            title="No Sidebar"
            description="Full width layout without sidebar"
            code="<PageLayout showSidebar={false}>"
          />
          
          <ExampleCard
            title="Custom Gap"
            description="Different spacing between content sections"
            code='<PageLayout gap="lg">'
          />
          
          <ExampleCard
            title="No Header"
            description="Layout without the site header"
            code="<PageLayout showHeader={false}>"
          />
          
          <ExampleCard
            title="Floating Sidebar"
            description="Sidebar with floating variant"
            code='<PageLayout sidebarVariant="floating">'
          />
          
          <ExampleCard
            title="No Container Padding"
            description="Remove default padding for custom layouts"
            code="<PageLayout containerPadding={false}>"
          />
        </ContentGrid>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Components</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">PageLayout Props</h3>
              <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <pre className="text-sm overflow-x-auto">
{`interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  showSidebar?: boolean          // Default: true
  showHeader?: boolean           // Default: true
  sidebarVariant?: "inset" | "sidebar" | "floating"  // Default: "inset"
  containerPadding?: boolean     // Default: true
  gap?: "default" | "sm" | "lg"  // Default: "default"
  fullWidth?: boolean            // Default: false
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">PageContent Props</h3>
              <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <pre className="text-sm overflow-x-auto">
{`interface PageContentProps {
  children: React.ReactNode
  className?: string
  padding?: "default" | "none" | "sm" | "lg"  // Default: "default"
}

// Usage Examples:
<PageContent>              // Default: px-4 lg:px-6
<PageContent padding="lg"> // Larger padding: px-6 lg:px-8  
<PageContent padding="none"> // No horizontal padding`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button>Action Button</Button>
          <Button variant="outline">Secondary Action</Button>
        </div>
      </PageContent>
    </PageLayout>
  )
}