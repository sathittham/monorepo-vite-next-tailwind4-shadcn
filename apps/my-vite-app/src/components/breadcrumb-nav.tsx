import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export function BreadcrumbNav({ 
  items, 
  className, 
  showHome = true 
}: BreadcrumbNavProps) {
  return (
    <nav className={cn("flex items-center space-x-1", className)}>
      {showHome && (
        <>
          <Home className="h-4 w-4 text-muted-foreground" />
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </>
      )}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href && !item.current ? (
            <a
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span 
              className={cn(
                "text-sm font-medium",
                item.current 
                  ? "text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}