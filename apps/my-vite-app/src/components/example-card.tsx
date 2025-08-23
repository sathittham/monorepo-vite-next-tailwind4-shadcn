import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"

interface ExampleCardProps {
  title: string
  description: string
  code: string
  children?: React.ReactNode
}

export function ExampleCard({
  title,
  description,
  code,
  children
}: ExampleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <code className="text-sm bg-gray-100 p-2 rounded block dark:bg-gray-800">
          {code}
        </code>
        {children}
      </CardContent>
    </Card>
  )
}