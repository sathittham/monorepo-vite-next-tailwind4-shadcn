'use client'

import { Component, type ReactNode } from 'react'
import { Button } from '@workspace/ui/components/button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-foreground">Something went wrong</h2>
              <p className="mt-2 text-muted-foreground">
                We apologize for the inconvenience. Please try refreshing the page.
              </p>
            </div>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
            >
              Refresh Page
            </Button>
          </div>
        )
      )
    }

    return this.props.children
  }
}