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

export default function SettingsPage() {
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: "Settings", current: true }
  ]

  const headerActions = (
    <>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        Actions
      </Button>
      <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
        <a
          href="https://github.com/sathittham/monorepo-vite-next-tailwind4-shadcn"
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
        title="Settings"
        description="Manage your account preferences, security, and application settings."
      />

      <PageContent>
        <div className="space-y-8">
          <ContentGrid cols="2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Update your personal information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="Sathittham.com" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <Badge>Enabled</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-500">Browser push notifications</p>
                </div>
                <Badge variant="secondary">Disabled</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Reports</p>
                  <p className="text-sm text-gray-500">Summary of weekly activity</p>
                </div>
                <Badge>Enabled</Badge>
              </div>
              <Button variant="outline">Configure</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Two-Factor Authentication</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Add extra security to your account</span>
                  <Button size="sm">Setup</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Last changed 30 days ago</span>
                  <Button size="sm" variant="outline">Change</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Active Sessions</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3 active sessions</span>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Light</Button>
                  <Button size="sm">Dark</Button>
                  <Button size="sm" variant="outline">Auto</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Language</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm">English (US)</span>
                  <Button size="sm" variant="outline">Change</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Sidebar</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Collapsed by default</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          </ContentGrid>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                API Keys
              </CardTitle>
              <CardDescription>
                Manage your API keys for integrations and third-party access
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Production API Key</p>
                  <p className="text-sm text-gray-500 font-mono">ak_prod_••••••••••••3a7f</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Regenerate</Button>
                  <Button size="sm" variant="outline">Revoke</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Development API Key</p>
                  <p className="text-sm text-gray-500 font-mono">ak_dev_••••••••••••9b2c</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Regenerate</Button>
                  <Button size="sm" variant="outline">Revoke</Button>
                </div>
              </div>
              <Button variant="outline">
                <Key className="w-4 h-4 mr-2" />
                Create New API Key
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageContent>
    </PageLayout>
  )
}