import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"
import { ContentGrid } from "@/components/content-grid"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { BookOpen, MessageCircle, FileText, Video, Mail, Phone, Search } from "lucide-react"

export default function HelpPage() {
  return (
    <PageLayout>
      <div className="container mx-auto space-y-8">
        <PageHeader
          title="Get Help"
          description="Find answers, get support, and learn how to make the most of your experience."
        />

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search help articles, guides, and FAQs..."
            className="pl-10"
          />
        </div>

        <ContentGrid>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Documentation
              </CardTitle>
              <CardDescription>
                Comprehensive guides and API documentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Getting Started Guide
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                API Reference
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Best Practices
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                Video Tutorials
              </CardTitle>
              <CardDescription>
                Step-by-step video guides and tutorials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4 h-4 mr-2" />
                Platform Overview
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4 h-4 mr-2" />
                Advanced Features
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4 h-4 mr-2" />
                Integration Setup
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Community
              </CardTitle>
              <CardDescription>
                Connect with other users and experts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Discussion Forum
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord Community
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Q&A Section
              </Button>
            </CardContent>
          </Card>
        </ContentGrid>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>
                Need direct assistance? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-sm text-gray-500">support@example.com</p>
                  <p className="text-xs text-gray-400">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium">Phone Support</p>
                  <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-400">Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-sm text-gray-500">Available during business hours</p>
                  <p className="text-xs text-gray-400">Average response: 2 minutes</p>
                </div>
              </div>
              <Button className="w-full mt-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Help Topics</CardTitle>
              <CardDescription>
                Quick access to frequently requested information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                How do I reset my password?
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Setting up two-factor authentication
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Billing and subscription management
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Data export and backup
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                API rate limits and usage
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Team collaboration features
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              Current status of all platform services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>API Services</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Operational</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Database</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Operational</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>File Storage</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-yellow-600">Partial Outage</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4">
              View Status Page
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}