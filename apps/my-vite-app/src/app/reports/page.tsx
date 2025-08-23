import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { FileText, TrendingUp, Calendar, Share, Download, Plus } from "lucide-react"

export default function ReportsPage() {
  const breadcrumbs = [
    { label: "Documents", href: "/" },
    { label: "Reports", current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        Export All
      </Button>
      <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
        <a
          href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
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
        title="Reports"
        description="View, create, and manage your business reports and analytics."
      />

      <PageContent>
        <div className="space-y-8">
          <div className="flex gap-4">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Report
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Report
            </Button>
          </div>

          <ContentGrid>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Sales Performance Q4
                </CardTitle>
                <Badge variant="secondary">Generated</Badge>
              </div>
              <CardDescription>
                Quarterly sales analysis with revenue trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  Generated on: Dec 15, 2024
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Customer Analytics
                </CardTitle>
                <Badge>Scheduled</Badge>
              </div>
              <CardDescription>
                Monthly customer behavior and engagement metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  Next run: Dec 31, 2024
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    View Template
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="w-4 h-4 mr-1" />
                    Edit Schedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Financial Summary
                </CardTitle>
                <Badge variant="destructive">Draft</Badge>
              </div>
              <CardDescription>
                Comprehensive financial overview and projections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  Last modified: 3 days ago
                </div>
                <div className="flex gap-2">
                  <Button size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    Continue Editing
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Weekly Operations
                </CardTitle>
                <Badge variant="secondary">Generated</Badge>
              </div>
              <CardDescription>
                Operational metrics and KPI tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  Generated on: Dec 22, 2024
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          </ContentGrid>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                Sales Dashboard Report
              </Button>
              <Button variant="outline" className="justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Custom Data Report
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Recurring Report Setup
              </Button>
            </div>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}