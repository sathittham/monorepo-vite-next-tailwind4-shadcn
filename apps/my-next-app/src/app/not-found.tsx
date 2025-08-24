import Link from "next/link"
import { NotFound as NotFoundComponent } from "@workspace/ui/components/not-found"

// This catches all non-localized routes and routes that don't exist
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center">
        <NotFoundComponent
          LinkComponent={Link}
          homeHref="/"
        />
      </body>
    </html>
  )
}