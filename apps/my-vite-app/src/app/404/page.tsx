import { Link } from "react-router-dom"
import { NotFound as NotFoundComponent } from "@workspace/ui/components/not-found"

export default function NotFound() {
  return (
    <NotFoundComponent
      LinkComponent={Link}
      homeHref="/"
    />
  )
}