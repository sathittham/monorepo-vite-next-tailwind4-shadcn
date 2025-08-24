import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { EmptyState } from "@workspace/ui/components/empty-state"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Database, Upload, FileText, Download } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function DataLibraryPage() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('common.dataLibrary'), current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        {t('pages.dataLibrary.exportData')}
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
        title={t('pages.dataLibrary.title')}
        description={t('pages.dataLibrary.description')}
      />

      <PageContent>
        <div className="flex gap-4 mb-6">
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            {t('pages.dataLibrary.uploadDataset')}
          </Button>
          <Button variant="outline">
            <Database className="w-4 h-4 mr-2" />
            {t('pages.dataLibrary.connectDatabase')}
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            {t('pages.dataLibrary.importCSV')}
          </Button>
        </div>

        <ContentGrid>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                {t('pages.dataLibrary.datasets.customerDatabase.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.dataLibrary.datasets.customerDatabase.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t('pages.dataLibrary.lastUpdated')}: 2 {t('pages.dataLibrary.hoursAgo')}</span>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  {t('pages.dataLibrary.export')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {t('pages.dataLibrary.datasets.salesData.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.dataLibrary.datasets.salesData.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t('pages.dataLibrary.lastUpdated')}: 1 {t('pages.dataLibrary.dayAgo')}</span>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  {t('pages.dataLibrary.export')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                {t('pages.dataLibrary.datasets.inventorySystem.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.dataLibrary.datasets.inventorySystem.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t('pages.dataLibrary.liveConnection')}</span>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  {t('pages.dataLibrary.export')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </ContentGrid>

        <div className="border rounded-lg p-8">
          <EmptyState
            title={t('pages.dataLibrary.noRecentUploads')}
            description={t('pages.dataLibrary.noRecentUploadsDesc')}
            icon={<Upload className="w-10 h-10 text-gray-500 dark:text-gray-400" />}
            height="300px"
          >
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              {t('pages.dataLibrary.uploadDataset')}
            </Button>
          </EmptyState>
        </div>
      </PageContent>
    </PageLayout>
  )
}