import { EmptyState } from "@workspace/ui/components/empty-state"
import { Button } from "@workspace/ui/components/button"
import { Search, Plus, FileText } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { useTranslation } from "react-i18next"

export default function EmptyExamplePage() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('navigation.emptyStates'), current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        {t('common.actions')}
      </Button>
      <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
        <a
          href="https://github.com/sathittham/monorepo-vite-next-tailwind4-shadcn"
          rel="noopener noreferrer"
          target="_blank"
          className="dark:text-foreground"
        >
          {t('common.github')}
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
        title={t('pages.emptyStates.title')}
        description={t('pages.emptyStates.description')}
      />
      
      <PageContent>
        <div className="space-y-12">
          {/* Default Empty State */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">{t('pages.emptyStates.sections.defaultEmptyState')}</h2>
            <EmptyState />
          </div>

          {/* Custom Empty State with Action Button */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">{t('pages.emptyStates.sections.withActionButton')}</h2>
            <EmptyState
              title={t('components.emptyState.noProjectsTitle')}
              description={t('components.emptyState.noProjectsDescription')}
              icon={<Plus className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
            >
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                {t('components.emptyState.createProject')}
              </Button>
            </EmptyState>
          </div>

          {/* Search Results Empty State */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">{t('pages.emptyStates.sections.searchResults')}</h2>
            <EmptyState
              title={t('components.emptyState.noSearchResultsTitle')}
              description={t('components.emptyState.noSearchResultsDescription')}
              icon={<Search className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
              height="40vh"
            >
              <Button variant="outline">{t('components.emptyState.clearSearch')}</Button>
            </EmptyState>
          </div>

          {/* Documents Empty State */}
          <div className="border rounded-lg">
            <h2 className="text-xl font-semibold p-4 border-b">{t('pages.emptyStates.sections.documents')}</h2>
            <EmptyState
              title={t('components.emptyState.noDocumentsTitle')}
              description={t('components.emptyState.noDocumentsDescription')}
              icon={<FileText className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
              height="35vh"
            >
              <div className="flex gap-2">
                <Button>{t('components.emptyState.uploadDocument')}</Button>
                <Button variant="outline">{t('common.learnMore')}</Button>
              </div>
            </EmptyState>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}