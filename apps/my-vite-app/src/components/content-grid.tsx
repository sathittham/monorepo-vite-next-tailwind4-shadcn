import * as React from "react"
import { cn } from "@/lib/utils"

interface ContentGridProps {
  children: React.ReactNode
  className?: string
  cols?: "1" | "2" | "3" | "4" | "auto"
}

export function ContentGrid({
  children,
  className,
  cols = "3",
  ...props
}: ContentGridProps) {
  const colsMap = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    "auto": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
  }

  return (
    <div 
      className={cn("grid gap-6", colsMap[cols], className)} 
      {...props}
    >
      {children}
    </div>
  )
}