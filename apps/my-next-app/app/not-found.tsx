import Link from "next/link"
import { NotFound as NotFoundComponent } from "@workspace/ui/components/not-found"

export default function NotFound() {
  return (
    <NotFoundComponent
      LinkComponent={Link}
      homeHref="/"
    />
  )
}