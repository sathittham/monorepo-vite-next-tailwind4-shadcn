import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { ExampleCard } from "@/components/example-card"
import { Button } from "@workspace/ui/components/button"
import { useTranslation } from "react-i18next"

export default function LayoutExamplesPage() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('navigation.layoutExamples'), current: true }
  ]

  return (
    <PageLayout
      fullWidth
      headerBreadcrumbs={breadcrumbs}
      headerActions={null}
    >
      <PageHeader
        title={t('pages.layoutExamples.title')}
        description={t('pages.layoutExamples.description')}
      />

      <PageContent>
        <ContentGrid>
          <ExampleCard
            title={t('pages.layoutExamples.examples.defaultLayout.title')}
            description={t('pages.layoutExamples.examples.defaultLayout.description')}
            code="<PageLayout>...</PageLayout>"
          />
          
          <ExampleCard
            title={t('pages.layoutExamples.examples.noSidebar.title')}
            description={t('pages.layoutExamples.examples.noSidebar.description')}
            code="<PageLayout showSidebar={false}>"
          />
          
          <ExampleCard
            title={t('pages.layoutExamples.examples.customGap.title')}
            description={t('pages.layoutExamples.examples.customGap.description')}
            code='<PageLayout gap="lg">'
          />
          
          <ExampleCard
            title={t('pages.layoutExamples.examples.noHeader.title')}
            description={t('pages.layoutExamples.examples.noHeader.description')}
            code="<PageLayout showHeader={false}>"
          />
          
          <ExampleCard
            title={t('pages.layoutExamples.examples.floatingSidebar.title')}
            description={t('pages.layoutExamples.examples.floatingSidebar.description')}
            code='<PageLayout sidebarVariant="floating">'
          />
          
          <ExampleCard
            title={t('pages.layoutExamples.examples.noContainerPadding.title')}
            description={t('pages.layoutExamples.examples.noContainerPadding.description')}
            code="<PageLayout containerPadding={false}>"
          />
        </ContentGrid>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('pages.layoutExamples.availableComponents')}</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('pages.layoutExamples.pageLayoutProps')}</h3>
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
              <h3 className="text-lg font-semibold mb-2">{t('pages.layoutExamples.pageContentProps')}</h3>
              <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <pre className="text-sm overflow-x-auto">
{`interface PageContentProps {
  children: React.ReactNode
  className?: string
  padding?: "default" | "none" | "sm" | "lg"  // Default: "default"
}

// {t('pages.layoutExamples.usageExamples')}:
<PageContent>              // Default: px-4 lg:px-6
<PageContent padding="lg"> // Larger padding: px-6 lg:px-8  
<PageContent padding="none"> // No horizontal padding`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button>{t('pages.layoutExamples.actionButton')}</Button>
          <Button variant="outline">{t('pages.layoutExamples.secondaryAction')}</Button>
        </div>
      </PageContent>
    </PageLayout>
  )
}