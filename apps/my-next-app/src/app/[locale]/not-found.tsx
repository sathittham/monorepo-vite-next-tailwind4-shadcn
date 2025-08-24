'use client'

import Link from "next/link"
import { useTranslations } from 'next-intl'
import { NotFound as NotFoundComponent } from "@workspace/ui/components/not-found"

export default function NotFound() {
  const t = useTranslations()
  
  return (
    <NotFoundComponent
      LinkComponent={Link}
      homeHref="/"
    />
  )
}