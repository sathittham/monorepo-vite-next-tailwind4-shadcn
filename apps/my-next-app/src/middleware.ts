import createMiddleware from 'next-intl/middleware'
import { routing } from './lib/routing'
 
export default createMiddleware(routing)
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(th|en)/:path*']
}