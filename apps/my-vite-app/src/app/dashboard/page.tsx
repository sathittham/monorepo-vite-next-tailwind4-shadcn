import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { Button } from "@workspace/ui/components/button"

import data from "./data.json"

export default function Page() {
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: "Dashboard", current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        Refresh
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
      fullWidth
      headerBreadcrumbs={breadcrumbs}
      headerActions={headerActions}
    >
      <PageHeader
        title="Dashboard"
        description="Overview of your project metrics and performance data."
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
