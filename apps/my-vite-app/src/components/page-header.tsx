import * as React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  className,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <div className={cn("space-y-2 px-4 lg:px-6", className)} {...props}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && (
        <p className="text-gray-500">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}