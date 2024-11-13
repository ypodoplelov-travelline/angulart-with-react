import type { NsDomainError } from './ns-domain-error'
import type { THandlerParams } from './ns-types'

export function isNsError(error: unknown): error is NsDomainError {
  return !!(
    typeof error === 'object' &&
    error &&
    'ns' in error &&
    'key' in error
  )
}

export function isStackExist(
  error?: THandlerParams | THandlerParams[],
): boolean {
  if (!error) return false
  if (typeof error !== 'object') return false
  return 'stack' in error
}
