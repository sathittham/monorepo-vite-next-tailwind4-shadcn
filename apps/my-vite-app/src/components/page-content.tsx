import * as React from "react"
import { cn } from "@/lib/utils"

interface PageContentProps {
  children: React.ReactNode
  className?: string
  padding?: "default" | "none" | "sm" | "lg"
}

export function PageContent({
  children,
  className,
  padding = "default",
  ...props
}: PageContentProps) {
  const paddingStyles = {
    none: "",
    sm: "px-2 lg:px-4",
    default: "px-4 lg:px-6",
    lg: "px-6 lg:px-8"
  }

  return (
    <div 
      className={cn(paddingStyles[padding], className)} 
      {...props}
    >
      {children}
    </div>
  )
}