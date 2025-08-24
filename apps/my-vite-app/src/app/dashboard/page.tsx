import { useTranslation } from 'react-i18next'
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { Button } from "@workspace/ui/components/button"

import data from "./data.json"

export default function Page() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('navigation.dashboard'), current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        {t('common.refresh')}
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
        title={t('pages.dashboard.title')}
        description={t('pages.dashboard.description')}
      />
      <SectionCards />
      <PageContent>
        <ChartAreaInteractive />
      </PageContent>
      <PageContent padding="none">
        <DataTable data={data} />
      </PageContent>
    </PageLayout>
  )
}
