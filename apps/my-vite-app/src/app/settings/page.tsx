import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { PageContent } from "@/components/page-content"
import { ContentGrid } from "@/components/content-grid"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Separator } from "@workspace/ui/components/separator"
import { Badge } from "@workspace/ui/components/badge"
import { User, Bell, Shield, Palette, Key } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function SettingsPage() {
  const { t } = useTranslation()
  
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: t('common.settings'), current: true }
  ]

  return (
    <PageLayout
      fullWidth
      headerBreadcrumbs={breadcrumbs}
      headerActions={null}
    >
      <PageHeader
        title={t('pages.settings.title')}
        description={t('pages.settings.description')}
      />

      <PageContent>
        <div className="space-y-8">
          <ContentGrid cols="2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {t('pages.settings.profileSettings.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.settings.profileSettings.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('pages.settings.profileSettings.fullName')}</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('pages.settings.profileSettings.emailAddress')}</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t('pages.settings.profileSettings.company')}</Label>
                <Input id="company" defaultValue="Sathittham.com" />
              </div>
              <Button>{t('pages.settings.profileSettings.saveChanges')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                {t('pages.settings.notifications.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.settings.notifications.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t('pages.settings.notifications.emailNotifications')}</p>
                  <p className="text-sm text-gray-500">{t('pages.settings.notifications.emailNotificationsDesc')}</p>
                </div>
                <Badge>{t('pages.settings.notifications.enabled')}</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t('pages.settings.notifications.pushNotifications')}</p>
                  <p className="text-sm text-gray-500">{t('pages.settings.notifications.pushNotificationsDesc')}</p>
                </div>
                <Badge variant="secondary">{t('pages.settings.notifications.disabled')}</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t('pages.settings.notifications.weeklyReports')}</p>
                  <p className="text-sm text-gray-500">{t('pages.settings.notifications.weeklyReportsDesc')}</p>
                </div>
                <Badge>{t('pages.settings.notifications.enabled')}</Badge>
              </div>
              <Button variant="outline">{t('pages.settings.notifications.configure')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t('pages.settings.security.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.settings.security.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t('pages.settings.security.twoFactor')}</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{t('pages.settings.security.twoFactorDesc')}</span>
                  <Button size="sm">{t('pages.settings.security.setup')}</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>{t('pages.settings.security.password')}</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{t('pages.settings.security.passwordDesc')}</span>
                  <Button size="sm" variant="outline">{t('pages.settings.security.change')}</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>{t('pages.settings.security.activeSessions')}</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{t('pages.settings.security.activeSessionsDesc')}</span>
                  <Button size="sm" variant="outline">{t('pages.settings.security.manage')}</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                {t('pages.settings.appearance.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.settings.appearance.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t('pages.settings.appearance.theme')}</Label>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">{t('pages.settings.appearance.light')}</Button>
                  <Button size="sm">{t('pages.settings.appearance.dark')}</Button>
                  <Button size="sm" variant="outline">{t('pages.settings.appearance.auto')}</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>{t('pages.settings.appearance.language')}</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('pages.settings.appearance.languageValue')}</span>
                  <Button size="sm" variant="outline">{t('pages.settings.security.change')}</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>{t('pages.settings.appearance.sidebar')}</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{t('pages.settings.appearance.sidebarDesc')}</span>
                  <Badge variant="secondary">{t('pages.settings.notifications.disabled')}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          </ContentGrid>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                {t('pages.settings.apiKeys.title')}
              </CardTitle>
              <CardDescription>
                {t('pages.settings.apiKeys.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{t('pages.settings.apiKeys.productionKey')}</p>
                  <p className="text-sm text-gray-500 font-mono">ak_prod_••••••••••••3a7f</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">{t('pages.settings.apiKeys.regenerate')}</Button>
                  <Button size="sm" variant="outline">{t('pages.settings.apiKeys.revoke')}</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{t('pages.settings.apiKeys.developmentKey')}</p>
                  <p className="text-sm text-gray-500 font-mono">ak_dev_••••••••••••9b2c</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">{t('pages.settings.apiKeys.regenerate')}</Button>
                  <Button size="sm" variant="outline">{t('pages.settings.apiKeys.revoke')}</Button>
                </div>
              </div>
              <Button variant="outline">
                <Key className="w-4 h-4 mr-2" />
                {t('pages.settings.apiKeys.createNew')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageContent>
    </PageLayout>
  )
}