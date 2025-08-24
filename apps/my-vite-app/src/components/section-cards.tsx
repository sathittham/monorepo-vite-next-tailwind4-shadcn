import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { useTranslation } from "react-i18next"

export function SectionCards() {
  const { t } = useTranslation()
  
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t('pages.dashboard.cards.totalRevenue.title')}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t('pages.dashboard.cards.totalRevenue.trendUp')} <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {t('pages.dashboard.cards.totalRevenue.description')}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t('pages.dashboard.cards.newCustomers.title')}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t('pages.dashboard.cards.newCustomers.trendDown')} <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {t('pages.dashboard.cards.newCustomers.description')}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t('pages.dashboard.cards.activeAccounts.title')}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t('pages.dashboard.cards.activeAccounts.trendStrong')} <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">{t('pages.dashboard.cards.activeAccounts.description')}</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t('pages.dashboard.cards.growthRate.title')}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t('pages.dashboard.cards.growthRate.trendSteady')} <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">{t('pages.dashboard.cards.growthRate.description')}</div>
        </CardFooter>
      </Card>
    </div>
  )
}
