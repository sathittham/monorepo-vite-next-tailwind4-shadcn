import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { EmptyState } from "@workspace/ui/components/empty-state"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Database, Upload, FileText, Download } from "lucide-react"

export default function DataLibraryPage() {
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: "Data Library", current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        Export Data
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
        title="Data Library"
        description="Manage and organize your data files, datasets, and database connections."
      />

      <PageContent>
        <div className="flex gap-4 mb-6">
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Dataset
          </Button>
          <Button variant="outline">
            <Database className="w-4 h-4 mr-2" />
            Connect Database
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Import CSV
          </Button>
        </div>

        <ContentGrid>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Customer Database
              </CardTitle>
              <CardDescription>
                Primary customer data with 12,450 records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Last updated: 2 hours ago</span>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Sales Data 2024
              </CardTitle>
              <CardDescription>
                Quarterly sales reports and analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Last updated: 1 day ago</span>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Inventory System
              </CardTitle>
              <CardDescription>
                Real-time inventory tracking and management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Live connection</span>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>
        </ContentGrid>

        <div className="border rounded-lg p-8">
          <EmptyState
            title="No recent uploads"
            description="Upload your first dataset to get started with data analysis."
            icon={<Upload className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
            height="300px"
          >
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload Dataset
            </Button>
          </EmptyState>
        </div>
      </PageContent>
    </PageLayout>
  )
}