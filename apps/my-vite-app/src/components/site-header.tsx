import * as React from "react";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";
import { BreadcrumbNav, type BreadcrumbItem } from "./breadcrumb-nav";
import { ViteLanguageSwitcher } from "./vite-language-switcher";
import { ViteThemeSwitcher } from "./vite-theme-switcher";
interface SiteHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  showBreadcrumbs?: boolean;
  showSidebarTrigger?: boolean;
}

export function SiteHeader({
  breadcrumbs = [],
  children,
  showBreadcrumbs = true,
  showSidebarTrigger = true,
}: SiteHeaderProps) {

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {showSidebarTrigger && (
          <>
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
          </>
        )}

        {showBreadcrumbs && breadcrumbs.length > 0 ? (
          <BreadcrumbNav items={breadcrumbs} showHome={false} />
        ) : (
          <h1 className="text-base font-medium">STM23</h1>
        )}

        <div className="ml-auto flex items-center gap-2">
          {children ? children : null}
          <ViteThemeSwitcher />
          <ViteLanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
