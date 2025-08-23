import { EmptyState } from "@workspace/ui/components/empty-state"
import { Button } from "@workspace/ui/components/button"
import { Search, Plus, FileText } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"

export default function EmptyExamplePage() {
  return (
    <PageLayout fullWidth>
      <PageHeader
        title="Empty State Examples"
        description="Demonstrating different empty state patterns for better user experience."
      />
      
      <PageContent>
        <div className="space-y-12">
          {/* Default Empty State */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">Default Empty State</h2>
            <EmptyState />
          </div>

          {/* Custom Empty State with Action Button */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">With Action Button</h2>
            <EmptyState
              title="No projects found"
              description="Get started by creating your first project."
              icon={<Plus className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
            >
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Project
              </Button>
            </EmptyState>
          </div>

          {/* Search Results Empty State */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">Search Results</h2>
            <EmptyState
              title="No search results"
              description="Try adjusting your search criteria or check for typos."
              icon={<Search className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
              height="40vh"
            >
              <Button variant="outline">Clear Search</Button>
            </EmptyState>
          </div>

          {/* Documents Empty State */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">Documents</h2>
            <EmptyState
              title="No documents yet"
              description="Upload your first document to get started with organizing your files."
              icon={<FileText className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
              height="35vh"
            >
              <div className="flex gap-2">
                <Button>Upload Document</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </EmptyState>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}