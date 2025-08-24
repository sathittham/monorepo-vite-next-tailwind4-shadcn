import { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="vite-ui-theme"
    >
      {children}
    </NextThemesProvider>
  )
}