import * as React from "react"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { BreadcrumbNav, type BreadcrumbItem } from "./breadcrumb-nav"

interface SiteHeaderProps {
  breadcrumbs?: BreadcrumbItem[]
  children?: React.ReactNode
  showBreadcrumbs?: boolean
}

export function SiteHeader({ 
  breadcrumbs = [], 
  children,
  showBreadcrumbs = true 
}: SiteHeaderProps) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        
        {showBreadcrumbs && breadcrumbs.length > 0 ? (
          <BreadcrumbNav items={breadcrumbs} showHome={false} />
        ) : (
          <h1 className="text-base font-medium">Documents</h1>
        )}
        
        <div className="ml-auto flex items-center gap-2">
          {children ? (
            children
          ) : (
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
          )}
        </div>
      </div>
    </header>
  )
}
