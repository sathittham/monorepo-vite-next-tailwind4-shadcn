import { useTranslation } from 'react-i18next'
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"

import data from "./data.json"

export default function Page() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('navigation.dashboard'), current: true }
  ]

  return (
    <PageLayout 
      fullWidth
      headerBreadcrumbs={breadcrumbs}
      headerActions={null}
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
