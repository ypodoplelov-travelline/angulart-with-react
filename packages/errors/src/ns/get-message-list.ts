import { isNsError } from './guards'

import type { THandlerParams } from './ns-types'

function getMessage(key: string, error?: THandlerParams): string {
  if (isNsError(error)) {
    return `${key}: ${error.message}`
  }
  if (typeof error === 'string') {
    return `${key}: ${error}`
  }
  if (!error) return key

  if (typeof error === 'object' && 'message' in error) {
    // handle new Error case
    return `${key}: ${error.message}`
  }

  return String(error)
}

export function getMessageList(
  key: string,
  error?: THandlerParams | THandlerParams[],
): string {
  if (Array.isArray(error)) {
    return error.map((item) => getMessage(key, item)).join('\n')
  }
  return getMessage(key, error)
}
