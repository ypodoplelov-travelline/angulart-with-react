import { Button } from '@repo/ui-kit'
import { type ReactNode, Suspense } from 'react'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'

function FallbackError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      role="alert"
      className="flex flex-col p-10 items-center justify-center gap-6"
    >
      <p>pupupuuuu...</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  )
}

export function SuspenseComponentLoader({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Suspense fallback={<>loading...</>}>{children}</Suspense>
    </ErrorBoundary>
  )
}
