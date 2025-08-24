import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { useTranslation } from "react-i18next"

export default function SimplePage() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('navigation.simplePage'), current: true }
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
        title={t('pages.simplePage.title')}
        description={t('pages.simplePage.description')}
      />
      
      <PageContent>
        <ContentGrid cols="2">
          <Card>
            <CardHeader>
              <CardTitle>{t('pages.simplePage.featureOne.title')}</CardTitle>
              <CardDescription>
                {t('pages.simplePage.featureOne.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t('pages.simplePage.featureOne.content')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('pages.simplePage.featureTwo.title')}</CardTitle>
              <CardDescription>
                {t('pages.simplePage.featureTwo.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t('pages.simplePage.featureTwo.content')}
              </p>
            </CardContent>
          </Card>
        </ContentGrid>
      </PageContent>

      <PageContent>
        <div className="text-center">
          <Button size="lg">
            {t('common.getStarted')}
          </Button>
        </div>
      </PageContent>
    </PageLayout>
  )
}