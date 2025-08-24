import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { FileText, TrendingUp, Calendar, Share, Download, Plus } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ReportsPage() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('common.reports'), current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        {t('pages.reports.exportAll')}
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
        title={t('pages.reports.title')}
        description={t('pages.reports.description')}
      />

      <PageContent>
        <div className="space-y-8">
          <div className="flex gap-4">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              {t('pages.reports.createReport')}
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              {t('pages.reports.scheduleReport')}
            </Button>
          </div>

          <ContentGrid>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {t('pages.reports.reportTypes.salesPerformance.title')}
                </CardTitle>
                <Badge variant="secondary">{t('pages.reports.badges.generated')}</Badge>
              </div>
              <CardDescription>
                {t('pages.reports.reportTypes.salesPerformance.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  {t('pages.reports.generatedOn')}: Dec 15, 2024
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    {t('pages.reports.view')}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    {t('pages.reports.download')}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="w-4 h-4 mr-1" />
                    {t('pages.reports.share')}
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
                  {t('pages.reports.reportTypes.customerAnalytics.title')}
                </CardTitle>
                <Badge>{t('pages.reports.badges.scheduled')}</Badge>
              </div>
              <CardDescription>
                {t('pages.reports.reportTypes.customerAnalytics.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  {t('pages.reports.nextRun')}: Dec 31, 2024
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    {t('pages.reports.viewTemplate')}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="w-4 h-4 mr-1" />
                    {t('pages.reports.editSchedule')}
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
                  {t('pages.reports.reportTypes.financialSummary.title')}
                </CardTitle>
                <Badge variant="destructive">{t('pages.reports.badges.draft')}</Badge>
              </div>
              <CardDescription>
                {t('pages.reports.reportTypes.financialSummary.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  {t('pages.reports.lastModified')}: 3 days ago
                </div>
                <div className="flex gap-2">
                  <Button size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    {t('pages.reports.continueEditing')}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="w-4 h-4 mr-1" />
                    {t('pages.reports.preview')}
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
                  {t('pages.reports.reportTypes.weeklyOperations.title')}
                </CardTitle>
                <Badge variant="secondary">{t('pages.reports.badges.generated')}</Badge>
              </div>
              <CardDescription>
                {t('pages.reports.reportTypes.weeklyOperations.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  {t('pages.reports.generatedOn')}: Dec 22, 2024
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    {t('pages.reports.view')}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    {t('pages.reports.download')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          </ContentGrid>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t('pages.reports.quickActions')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                {t('pages.reports.salesDashboardReport')}
              </Button>
              <Button variant="outline" className="justify-start">
                <FileText className="w-4 h-4 mr-2" />
                {t('pages.reports.customDataReport')}
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                {t('pages.reports.recurringReportSetup')}
              </Button>
            </div>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}