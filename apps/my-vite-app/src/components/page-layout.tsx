import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar"
import { cn } from "@/lib/utils"
import type { BreadcrumbItem } from "./breadcrumb-nav"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  showSidebar?: boolean
  showHeader?: boolean
  sidebarVariant?: "inset" | "sidebar" | "floating"
  containerPadding?: boolean
  gap?: "default" | "sm" | "lg"
  fullWidth?: boolean
  headerBreadcrumbs?: BreadcrumbItem[]
  headerActions?: React.ReactNode
  showBreadcrumbs?: boolean
}

export function PageLayout({
  children,
  className,
  showSidebar = true,
  showHeader = true,
  sidebarVariant = "inset",
  containerPadding = true,
  gap = "default",
  fullWidth = false,
  headerBreadcrumbs,
  headerActions,
  showBreadcrumbs = true
}: PageLayoutProps) {
  const gapStyles = {
    sm: "gap-2",
    default: "gap-4 md:gap-6",
    lg: "gap-6 md:gap-8"
  }

  const paddingStyles = containerPadding 
    ? "py-4 md:py-6" 
    : ""

  if (!showSidebar) {
    return (
      <div className="min-h-screen">
        {showHeader && (
          <SiteHeader 
            breadcrumbs={headerBreadcrumbs}
            showBreadcrumbs={showBreadcrumbs}
          >
            {headerActions}
          </SiteHeader>
        )}
        <div className={cn("flex flex-1 flex-col", className)}>
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className={cn(
              "flex flex-col",
              gapStyles[gap],
              paddingStyles,
              !fullWidth && "container mx-auto"
            )}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant={sidebarVariant} />
      <SidebarInset>
        {showHeader && (
          <SiteHeader 
            breadcrumbs={headerBreadcrumbs}
            showBreadcrumbs={showBreadcrumbs}
          >
            {headerActions}
          </SiteHeader>
        )}
        <div className={cn("flex flex-1 flex-col", className)}>
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className={cn(
              "flex flex-col",
              gapStyles[gap],
              paddingStyles,
              !fullWidth && "container mx-auto"
            )}>
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}