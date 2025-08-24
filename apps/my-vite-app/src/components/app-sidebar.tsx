"use client"

import * as React from "react"
import {
  IconDashboard,
  IconDatabase,
  IconFileDescription,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
  IconTemplate,
} from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation()

  const data = {
    user: {
      name: "sathittham",
      email: "hello@sathittham.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: t('navigation.dashboard'),
        url: "/dashboard",
        icon: IconDashboard,
      },
      {
        title: t('navigation.dataLibrary'),
        url: "/data-library",
        icon: IconDatabase,
      },
      {
        title: t('navigation.reports'),
        url: "/reports",
        icon: IconReport,
      },
      {
        title: t('navigation.layoutExamples'),
        url: "/layout-examples",
        icon: IconTemplate,
      },
      {
        title: t('navigation.emptyStates'),
        url: "/empty-example",
        icon: IconInnerShadowTop,
      },
      {
        title: t('navigation.simplePage'),
        url: "/simple-page",
        icon: IconFileDescription,
      },
    ],
    navSecondary: [
      {
        title: t('common.settings'),
        url: "/settings",
        icon: IconSettings,
      },
      {
        title: t('common.help'),
        url: "/help",
        icon: IconHelp,
      },
      {
        title: t('common.search'),
        url: "/search",
        icon: IconSearch,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Sathittham.com</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
