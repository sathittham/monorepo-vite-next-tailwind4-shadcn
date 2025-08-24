import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { EmptyState } from "@workspace/ui/components/empty-state"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Badge } from "@workspace/ui/components/badge"
import { Search, Filter, Clock, FileText, Database, User, Zap } from "lucide-react"

export default function SearchPage() {
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: "Search", current: true }
  ]

  return (
    <PageLayout
      fullWidth
      headerBreadcrumbs={breadcrumbs}
      headerActions={null}
    >
      <PageHeader
        title="Search"
        description="Find anything across your data, reports, documents, and more."
      />

      <PageContent>
        <div className="space-y-8">

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for data, reports, users, or anything else..."
              className="pl-12 h-12 text-lg"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-1" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <Clock className="w-4 h-4 mr-1" />
              Recent
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-1" />
              Documents
            </Button>
            <Button variant="outline" size="sm">
              <Database className="w-4 h-4 mr-1" />
              Data
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-1" />
              People
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <ContentGrid cols="3">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Zap className="w-6 h-6" />
                <span>AI Search</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FileText className="w-6 h-6" />
                <span>Find Documents</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Database className="w-6 h-6" />
                <span>Query Data</span>
              </Button>
            </ContentGrid>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Searches</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>customer analytics Q4</span>
                </div>
                <Badge variant="secondary">3 results</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>sales data 2024</span>
                </div>
                <Badge variant="secondary">12 results</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>john.doe@example.com</span>
                </div>
                <Badge variant="secondary">1 result</Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Saved Searches</h3>
            <ContentGrid cols="2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Monthly Revenue Reports</CardTitle>
                  <CardDescription className="text-sm">
                    All revenue-related reports from the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Reports</Badge>
                    <Badge variant="outline" className="text-xs">Revenue</Badge>
                    <span className="text-xs text-gray-500 ml-auto">24 results</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Customer Support Tickets</CardTitle>
                  <CardDescription className="text-sm">
                    Open and resolved support tickets with high priority
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Support</Badge>
                    <Badge variant="outline" className="text-xs">High Priority</Badge>
                    <span className="text-xs text-gray-500 ml-auto">7 results</span>
                  </div>
                </CardContent>
              </Card>
            </ContentGrid>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Search Tips</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Use quotes</strong> for exact phrases: <code>"customer retention"</code>
                  </div>
                  <div>
                    <strong>Filter by type</strong> using prefixes: <code>file:report.pdf</code> or <code>user:john</code>
                  </div>
                  <div>
                    <strong>Use wildcards</strong> for partial matches: <code>analy*</code> finds "analytics", "analysis", etc.
                  </div>
                  <div>
                    <strong>Exclude terms</strong> with minus sign: <code>reports -draft</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border rounded-lg p-8">
          <EmptyState
            title="Start searching to find what you need"
            description="Enter a search term above to find data, reports, documents, and more across your workspace."
            icon={<Search className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
            height="200px"
          />
        </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}